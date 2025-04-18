import threading
import tkinter as tk
from tkinter import ttk
import queue
import logging
import time
import asyncio
import json
from typing import Optional, Callable
from pynput import keyboard as pynput_keyboard

from src.display.base_display import BaseDisplay


class GuiDisplay(BaseDisplay):
    def __init__(self):
        super().__init__()  # 调用父类初始化
        """创建 GUI 界面"""
        # 初始化日志
        self.logger = logging.getLogger("Display")

        # 创建主窗口
        self.root = tk.Tk()
        self.root.title("小智Ai语音控制")
        self.root.geometry("360x320")

        # 状态显示
        self.status_frame = ttk.Frame(self.root)
        self.status_frame.pack(pady=10)
        self.status_label = ttk.Label(self.status_frame, text="状态: 未连接")
        self.status_label.pack(side=tk.LEFT)

        # 表情显示
        self.emotion_label = tk.Label(self.root, text="😊", font=("Segoe UI Emoji", 16))
        self.emotion_label.pack(padx=20, pady=20)

        # TTS文本显示
        self.tts_text_label = ttk.Label(self.root, text="待命", wraplength=250)
        self.tts_text_label.pack(padx=20, pady=10)

        # 音量控制
        self.volume_frame = ttk.Frame(self.root)
        self.volume_frame.pack(pady=10)
        ttk.Label(self.volume_frame, text="音量:").pack(side=tk.LEFT)
        
        # 添加音量更新节流
        self.volume_update_timer = None
        self.volume_scale = ttk.Scale(
            self.volume_frame,
            from_=0,
            to=100,
            command=self._on_volume_change
        )
        self.volume_scale.set(self.current_volume)
        self.volume_scale.pack(side=tk.LEFT, padx=10)

        # 文本输入框和发送按钮
        self.input_frame = ttk.Frame(self.root)
        self.input_frame.pack(pady=10, fill=tk.X, padx=20)
        self.text_input = ttk.Entry(self.input_frame)
        self.text_input.pack(side=tk.LEFT, fill=tk.X, expand=True)
        # 绑定回车键事件
        self.text_input.bind("<Return>", lambda event: self._on_send_button_click())
        self.send_btn = ttk.Button(self.input_frame, text="发送", command=self._on_send_button_click)
        self.send_btn.pack(side=tk.LEFT, padx=(10, 0))
        # 添加GPS按钮
        self.gps_btn = ttk.Button(self.input_frame, text="GPS", command=self._on_gps_button_click)
        self.gps_btn.pack(side=tk.LEFT, padx=(5, 0))
        # 设置文本输入框为默认焦点
        self.text_input.focus_set()

        # 控制按钮
        self.btn_frame = ttk.Frame(self.root)
        self.btn_frame.pack(pady=20)
        
        # 手动模式按钮 - 默认显示
        self.manual_btn = ttk.Button(self.btn_frame, text="按住说话")
        self.manual_btn.bind("<ButtonPress-1>", self._on_manual_button_press)
        self.manual_btn.bind("<ButtonRelease-1>", self._on_manual_button_release)
        self.manual_btn.pack(side=tk.LEFT, padx=10)
        
        # 打断按钮 - 放在中间
        self.abort_btn = ttk.Button(self.btn_frame, text="打断", command=self._on_abort_button_click)
        self.abort_btn.pack(side=tk.LEFT, padx=10)
        
        # 自动模式按钮 - 默认隐藏
        self.auto_btn = ttk.Button(self.btn_frame, text="开始对话", command=self._on_auto_button_click)
        # 不立即pack，等切换到自动模式时再显示
        
        # 模式切换按钮
        self.mode_btn = ttk.Button(self.btn_frame, text="手动对话", command=self._on_mode_button_click)
        self.mode_btn.pack(side=tk.LEFT, padx=10)
        
        # 对话模式标志
        self.auto_mode = False

        # 回调函数
        self.button_press_callback = None
        self.button_release_callback = None
        self.status_update_callback = None
        self.text_update_callback = None
        self.emotion_update_callback = None
        self.mode_callback = None
        self.auto_callback = None
        self.abort_callback = None

        # 更新队列
        self.update_queue = queue.Queue()

        # 运行标志
        self._running = True

        # 设置窗口关闭处理
        self.root.protocol("WM_DELETE_WINDOW", self.on_close)

        # 启动更新处理
        self.root.after(100, self._process_updates)

        # 键盘监听器
        self.keyboard_listener = None

    def set_callbacks(self,
                      press_callback: Optional[Callable] = None,
                      release_callback: Optional[Callable] = None,
                      status_callback: Optional[Callable] = None,
                      text_callback: Optional[Callable] = None,
                      emotion_callback: Optional[Callable] = None,
                      mode_callback: Optional[Callable] = None,
                      auto_callback: Optional[Callable] = None,
                      abort_callback: Optional[Callable] = None,
                      send_text_callback: Optional[Callable] = None):
        """设置回调函数"""
        self.button_press_callback = press_callback
        self.button_release_callback = release_callback
        self.status_update_callback = status_callback
        self.text_update_callback = text_callback
        self.emotion_update_callback = emotion_callback
        self.mode_callback = mode_callback
        self.auto_callback = auto_callback
        self.abort_callback = abort_callback
        self.send_text_callback = send_text_callback


    def _process_updates(self):
        """处理更新队列"""
        try:
            while True:
                try:
                    # 非阻塞方式获取更新
                    update_func = self.update_queue.get_nowait()
                    update_func()
                    self.update_queue.task_done()
                except queue.Empty:
                    break
        finally:
            if self._running:
                self.root.after(100, self._process_updates)

    def _on_manual_button_press(self, event):
        """手动模式按钮按下事件处理"""
        try:
            # 更新按钮文本为"松开以停止"
            self.manual_btn.config(text="松开以停止")
            
            # 调用回调函数
            if self.button_press_callback:
                self.button_press_callback()
        except Exception as e:
            self.logger.error(f"按钮按下回调执行失败: {e}")

    def _on_manual_button_release(self, event):
        """手动模式按钮释放事件处理"""
        try:
            # 更新按钮文本为"按住说话"
            self.manual_btn.config(text="按住说话")
            
            # 调用回调函数
            if self.button_release_callback:
                self.button_release_callback()
        except Exception as e:
            self.logger.error(f"按钮释放回调执行失败: {e}")
            
    def _on_auto_button_click(self):
        """自动模式按钮点击事件处理"""
        try:
            if self.auto_callback:
                self.auto_callback()
        except Exception as e:
            self.logger.error(f"自动模式按钮回调执行失败: {e}")

    def _on_abort_button_click(self):
        """打断按钮点击事件处理"""
        try:
            if self.abort_callback:
                self.abort_callback()
        except Exception as e:
            self.logger.error(f"打断按钮回调执行失败: {e}")

    def _on_send_button_click(self):
        """发送按钮点击处理"""
        try:
            text = self.text_input.get().strip()
            if not text:
                return
            
            if not self.send_text_callback:
                self.logger.warning("未设置发送文本回调函数")
                return
                
            # 获取应用程序的事件循环并在其中运行协程
            from src.application import Application
            app = Application.get_instance()
            if not app or not app.loop:
                self.logger.error("无法获取应用程序事件循环")
                return
                
            # 发送消息
            try:
                asyncio.run_coroutine_threadsafe(
                    self.send_text_callback(text),
                    app.loop
                )
                # 清空输入框
                self.text_input.delete(0, tk.END)
                # 重新设置焦点到输入框
                self.text_input.focus_set()
            except Exception as e:
                self.logger.error(f"发送文本消息失败: {e}")
                return
        except Exception as e:
            self.logger.error(f"处理发送按钮点击事件失败: {e}")
            return

    def send_text(self, text: str):
        """发送文本消息"""
        if self.send_text_callback:
            self.send_text_callback(text)

    def _on_mode_button_click(self):
        """对话模式切换按钮点击事件"""
        try:
            # 检查是否可以切换模式（通过回调函数询问应用程序当前状态）
            if self.mode_callback:
                # 如果回调函数返回False，表示当前不能切换模式
                if not self.mode_callback(not self.auto_mode):
                    return
                    
            # 切换模式
            self.auto_mode = not self.auto_mode
            
            # 更新按钮显示
            if self.auto_mode:
                # 切换到自动模式
                self.update_mode_button_status("自动对话")
                
                # 隐藏手动按钮，显示自动按钮
                self.update_queue.put(lambda: self._switch_to_auto_mode())
            else:
                # 切换到手动模式
                self.update_mode_button_status("手动对话")
                
                # 隐藏自动按钮，显示手动按钮
                self.update_queue.put(lambda: self._switch_to_manual_mode())
                
        except Exception as e:
            self.logger.error(f"模式切换按钮回调执行失败: {e}")
            
    def _switch_to_auto_mode(self):
        """切换到自动模式的UI更新"""
        self.manual_btn.pack_forget()  # 移除手动按钮
        self.auto_btn.pack(side=tk.LEFT, padx=10, before=self.abort_btn)  # 显示自动按钮，放在打断按钮前面
        
    def _switch_to_manual_mode(self):
        """切换到手动模式的UI更新"""
        self.auto_btn.pack_forget()  # 移除自动按钮
        self.manual_btn.pack(side=tk.LEFT, padx=10, before=self.abort_btn)  # 显示手动按钮，放在打断按钮前面

    def update_status(self, status: str):
        """更新状态文本"""
        self.update_queue.put(lambda: self.status_label.config(text=f"状态: {status}"))

    def update_text(self, text: str):
        """更新TTS文本"""
        self.update_queue.put(lambda: self.tts_text_label.config(text=text))

    def update_emotion(self, emotion: str):
        """更新表情"""
        self.update_queue.put(lambda: self.emotion_label.config(text=emotion))

    def start_update_threads(self):
        """启动更新线程"""

        def update_loop():
            while self._running:
                try:
                    # 更新状态
                    if self.status_update_callback:
                        status = self.status_update_callback()
                        if status:
                            self.update_status(status)

                    # 更新文本
                    if self.text_update_callback:
                        text = self.text_update_callback()
                        if text:
                            self.update_text(text)

                    # 更新表情
                    if self.emotion_update_callback:
                        emotion = self.emotion_update_callback()
                        if emotion:
                            self.update_emotion(emotion)

                except Exception as e:
                    self.logger.error(f"更新失败: {e}")
                time.sleep(0.1)

        threading.Thread(target=update_loop, daemon=True).start()

    def on_close(self):
        """关闭窗口处理"""
        self._running = False
        self.root.destroy()
        self.stop_keyboard_listener()

    def start(self):
        """启动GUI"""
        try:
            # 启动键盘监听
            self.start_keyboard_listener()
            # 启动更新线程
            self.start_update_threads()
            # 在主线程中运行主循环
            self.logger.info("开始启动GUI主循环")
            self.root.mainloop()
        except Exception as e:
            self.logger.error(f"GUI启动失败: {e}", exc_info=True)
            # 尝试回退到CLI模式
            print(f"GUI启动失败: {e}，请尝试使用CLI模式")

    def update_mode_button_status(self, text: str):
        """更新模式按钮状态"""
        self.update_queue.put(lambda: self.mode_btn.config(text=text))

    def update_button_status(self, text: str):
        """更新按钮状态 - 保留此方法以满足抽象基类要求"""
        # 根据当前模式更新相应的按钮
        if self.auto_mode:
            self.update_queue.put(lambda: self.auto_btn.config(text=text))
        else:
            # 在手动模式下，不通过此方法更新按钮文本
            # 因为按钮文本由按下/释放事件直接控制
            pass

    def _on_volume_change(self, value):
        """处理音量滑块变化，使用节流"""
        # 取消之前的定时器
        if self.volume_update_timer is not None:
            self.root.after_cancel(self.volume_update_timer)
        
        # 设置新的定时器，300ms 后更新音量
        self.volume_update_timer = self.root.after(
            300, 
            lambda: self.update_volume(int(float(value)))
        )

    def start_keyboard_listener(self):
        """启动键盘监听"""
        try:
            def on_press(key):
                try:
                    # F2 按键处理 - 在手动模式下处理
                    if key == pynput_keyboard.Key.f2 and not self.auto_mode:
                        if self.button_press_callback:
                            self.button_press_callback()
                            self.update_button_status("松开以停止")
                    # F3 按键处理 - 打断
                    elif key == pynput_keyboard.Key.f3:
                        if self.abort_callback:
                            self.abort_callback()
                except Exception as e:
                    self.logger.error(f"键盘事件处理错误: {e}")

            def on_release(key):
                try:
                    # F2 释放处理 - 在手动模式下处理
                    if key == pynput_keyboard.Key.f2 and not self.auto_mode:
                        if self.button_release_callback:
                            self.button_release_callback()
                            self.update_button_status("按住说话")
                except Exception as e:
                    self.logger.error(f"键盘事件处理错误: {e}")

            # 创建并启动监听器
            self.keyboard_listener = pynput_keyboard.Listener(
                on_press=on_press,
                on_release=on_release
            )
            self.keyboard_listener.start()
            self.logger.info("键盘监听器初始化成功")
        except Exception as e:
            self.logger.error(f"键盘监听器初始化失败: {e}")

    def stop_keyboard_listener(self):
        """停止键盘监听"""
        if self.keyboard_listener:
            try:
                self.keyboard_listener.stop()
                self.keyboard_listener = None
                self.logger.info("键盘监听器已停止")
            except Exception as e:
                self.logger.error(f"停止键盘监听器失败: {e}")

    def _on_gps_button_click(self):
        """GPS按钮点击处理"""
        try:
            if not self.send_text_callback:
                self.logger.warning("未设置发送文本回调函数")
                return
                
            # 获取应用程序的事件循环并在其中运行协程
            from src.application import Application
            app = Application.get_instance()
            if not app or not app.loop:
                self.logger.error("无法获取应用程序事件循环")
                return
                
            # 发送GPS消息
            try:
                asyncio.run_coroutine_threadsafe(
                    self._send_gps_location(),
                    app.loop
                )
            except Exception as e:
                self.logger.error(f"发送GPS消息失败: {e}")
                return
        except Exception as e:
            self.logger.error(f"处理GPS按钮点击事件失败: {e}")
            return
    
    async def _send_gps_location(self):
        """发送GPS位置信息"""
        try:
            from src.application import Application
            app = Application.get_instance()
            if not app or not app.protocol:
                self.logger.error("无法获取应用程序实例或协议")
                return
                
            # GPS位置数据
            gps_message = {
                "type": "gps", 
                "msg": {
                    "lon": 113.367387, 
                    "lat": 23.134382, 
                    "ver": 1
                }
            }
            
            # 确保WebSocket连接已打开
            if not app.protocol.is_audio_channel_opened():
                success = await app.protocol.open_audio_channel()
                if not success:
                    self.logger.error("打开音频通道失败")
                    return
                    
            # 发送GPS数据
            await app.protocol.send_text(json.dumps(gps_message))
            self.logger.info("已发送GPS位置信息")
            
        except Exception as e:
            self.logger.error(f"发送GPS位置信息失败: {e}")