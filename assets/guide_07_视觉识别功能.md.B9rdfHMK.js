import{_ as a,c as s,o as l,ae as n}from"./chunks/framework.BGWP4WZ_.js";const g=JSON.parse('{"title":"视觉识别功能","description":"","frontmatter":{},"headers":[],"relativePath":"guide/07_视觉识别功能.md","filePath":"guide/07_视觉识别功能.md"}'),t={name:"guide/07_视觉识别功能.md"};function e(h,i,p,r,o,k){return l(),s("div",null,i[0]||(i[0]=[n(`<h1 id="视觉识别功能" tabindex="-1">视觉识别功能 <a class="header-anchor" href="#视觉识别功能" aria-label="Permalink to &quot;视觉识别功能&quot;">​</a></h1><h2 id="功能概述" tabindex="-1">功能概述 <a class="header-anchor" href="#功能概述" aria-label="Permalink to &quot;功能概述&quot;">​</a></h2><p>py-xiaozhi提供了摄像头控制和视觉识别功能，支持通过语音命令打开/关闭摄像头，以及对摄像头捕获的画面进行智能识别分析。</p><h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h2><p>视觉识别功能需要在配置文件中进行相关设置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CAMERA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;camera_index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 摄像头索引，0通常是电脑内置摄像头</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;frame_width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">640</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 画面宽度</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;frame_height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">480</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 画面高度</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;fps&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 帧率</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Loacl_VL_url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://open.bigmodel.cn/api/paas/v4/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 智普API地址</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;VLapi_key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你的key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 智普视觉大模型API密钥</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;models&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;glm-4v-plus&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用的视觉模型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="智普视觉大模型配置" tabindex="-1">智普视觉大模型配置 <a class="header-anchor" href="#智普视觉大模型配置" aria-label="Permalink to &quot;智普视觉大模型配置&quot;">​</a></h2><ol><li>访问 <a href="https://open.bigmodel.cn/" target="_blank" rel="noreferrer">智普AI开放平台</a></li><li>注册账号并创建API密钥</li><li>将获取的API密钥配置到<code>config.json</code>的<code>CAMERA.VLapi_key</code>字段</li><li>可以选择使用的模型，默认为<code>glm-4v-plus</code></li></ol><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><h3 id="语音命令控制" tabindex="-1">语音命令控制 <a class="header-anchor" href="#语音命令控制" aria-label="Permalink to &quot;语音命令控制&quot;">​</a></h3><p>系统支持以下语音命令控制摄像头和视觉识别功能：</p><ul><li><strong>打开摄像头</strong>：激活系统摄像头，开始捕获视频流</li><li><strong>关闭摄像头</strong>：停止摄像头捕获</li><li><strong>识别画面</strong>：对当前摄像头画面进行智能视觉分析，识别画面中的内容</li><li><strong>分析图像</strong>：对当前画面进行详细视觉分析并提供描述</li><li><strong>看到了什么</strong>：询问当前摄像头看到的内容</li></ul><h3 id="gui-界面控制" tabindex="-1">GUI 界面控制 <a class="header-anchor" href="#gui-界面控制" aria-label="Permalink to &quot;GUI 界面控制&quot;">​</a></h3><p>在图形界面模式下，可以通过界面上的相关按钮控制摄像头功能。</p><h2 id="内部实现" tabindex="-1">内部实现 <a class="header-anchor" href="#内部实现" aria-label="Permalink to &quot;内部实现&quot;">​</a></h2><p>视觉识别功能通过IoT模块中的CameraVL设备类实现，主要由Camera和VL两个组件组成：</p><ol><li><strong>Camera 组件</strong>：负责摄像头的基本控制，如开启、关闭、获取视频帧等</li><li><strong>VL（Vision Language）组件</strong>：负责对图像进行智能分析，调用智普视觉大模型API</li></ol><p>实现结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CameraVL                 # 摄像头与视觉识别集成设备</span></span>
<span class="line"><span>├── Camera.py            # 摄像头控制模块</span></span>
<span class="line"><span>└── VL.py                # 视觉语言分析模块</span></span></code></pre></div><h2 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h2><ol><li>用户通过语音命令打开摄像头</li><li>系统激活摄像头并在界面显示视频流</li><li>用户请求识别当前画面</li><li>系统截取当前帧，并将图像发送给智普视觉大模型</li><li>获取视觉分析结果并通过语音或文字反馈给用户</li></ol><h2 id="隐私说明" tabindex="-1">隐私说明 <a class="header-anchor" href="#隐私说明" aria-label="Permalink to &quot;隐私说明&quot;">​</a></h2><p>视觉识别功能会使用您的摄像头并处理画面内容，请注意：</p><ol><li>摄像头捕获的画面仅用于本地分析或发送至智普API进行分析</li><li>非语音命令控制时，摄像头处于关闭状态</li><li>可以在配置中修改摄像头设置或完全禁用此功能</li></ol><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ol><li><p><strong>摄像头无法打开</strong></p><ul><li>确认您的设备有可用摄像头</li><li>检查摄像头是否被其他应用占用</li><li>确认已授予应用使用摄像头的权限</li></ul></li><li><p><strong>视觉识别功能无响应</strong></p><ul><li>检查智普API密钥是否正确配置</li><li>确认网络连接正常</li><li>检查是否超出API调用次数限制</li></ul></li><li><p><strong>识别结果不准确</strong></p><ul><li>尝试改善摄像头光线条件</li><li>确保目标对象在画面中清晰可见</li><li>可能需要升级智普视觉模型版本</li></ul></li><li><p><strong>摄像头画面卡顿</strong></p><ul><li>尝试在配置中降低分辨率或帧率</li><li>关闭其他占用系统资源的应用</li><li>更新摄像头驱动</li></ul></li></ol>`,26)]))}const u=a(t,[["render",e]]);export{g as __pageData,u as default};
