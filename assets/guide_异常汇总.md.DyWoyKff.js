import{_ as a,c as i,o as n,ae as e}from"./chunks/framework.BGWP4WZ_.js";const c=JSON.parse('{"title":"错误问题汇总","description":"","frontmatter":{},"headers":[],"relativePath":"guide/异常汇总.md","filePath":"guide/异常汇总.md"}'),p={name:"guide/异常汇总.md"};function t(l,s,h,o,r,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="错误问题汇总" tabindex="-1">错误问题汇总 <a class="header-anchor" href="#错误问题汇总" aria-label="Permalink to &quot;错误问题汇总&quot;">​</a></h1><h2 id="_1-could-not-find-opus-library-make-sure-it-is-installed" tabindex="-1">1. <code>Could not find Opus library. Make sure it is installed.</code> <a class="header-anchor" href="#_1-could-not-find-opus-library-make-sure-it-is-installed" aria-label="Permalink to &quot;1. \`Could not find Opus library. Make sure it is installed.\`&quot;">​</a></h2><h3 id="错误描述" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(.venv) C:\\Users\\Junsen\\Desktop\\learning\\xiaozhi-python&gt;python xiaozhi-python.py</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;C:\\Users\\Junsen\\Desktop\\learning\\xiaozhi-python\\xiaozhi-python.py&quot;, line 5, in &lt;module&gt;</span></span>
<span class="line"><span>    import opuslib</span></span>
<span class="line"><span>  File &quot;C:\\Users\\Junsen\\Desktop\\learning\\xiaozhi-python\\.venv\\lib\\site-packages\\opuslib\\__init__.py&quot;, line 19, in &lt;module&gt;</span></span>
<span class="line"><span>    from .exceptions import OpusError  # NOQA</span></span>
<span class="line"><span>  File &quot;C:\\Users\\Junsen\\Desktop\\learning\\xiaozhi-python\\.venv\\lib\\site-packages\\opuslib\\exceptions.py&quot;, line 10, in &lt;module&gt;</span></span>
<span class="line"><span>    import opuslib.api.info</span></span>
<span class="line"><span>  File &quot;C:\\Users\\Junsen\\Desktop\\learning\\xiaozhi-python\\.venv\\lib\\site-packages\\opuslib\\api\\__init__.py&quot;, line 20, in &lt;module&gt;</span></span>
<span class="line"><span>    raise Exception(</span></span>
<span class="line"><span>Exception: Could not find Opus library. Make sure it is installed.</span></span></code></pre></div><h3 id="解决方案" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ol><li><p><strong>Windows</strong></p><ul><li>下载并安装 Opus 库。</li><li>确保 <code>opuslib</code> 相关库正确安装。</li></ul></li><li><p><strong>Linux/macOS</strong></p><ul><li>运行以下命令安装 <code>libopus</code>:<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libopus-dev</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ubuntu/Debian</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> opus</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # macOS</span></span></code></pre></div></li></ul></li><li><p><strong>Python 代码安装</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> opuslib</span></span></code></pre></div></li></ol><hr><h2 id="_2-externally-managed-environment-macos" tabindex="-1">2. <code>externally-managed-environment</code> (macOS) <a class="header-anchor" href="#_2-externally-managed-environment-macos" aria-label="Permalink to &quot;2. \`externally-managed-environment\` (macOS)&quot;">​</a></h2><h3 id="错误描述-1" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述-1" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(.venv) huangjunsen@huangjunsendeMac-mini py-xiaozhi % pip install -r requirements_mac.txt -i https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error: externally-managed-environment</span></span>
<span class="line"><span></span></span>
<span class="line"><span>× This environment is externally managed</span></span>
<span class="line"><span>╰─&gt; To install Python packages system-wide, try brew install</span></span>
<span class="line"><span>    xyz, where xyz is the package you are trying to</span></span>
<span class="line"><span>    install.</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    If you wish to install a Python library that isn&#39;t in Homebrew,</span></span>
<span class="line"><span>    use a virtual environment:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    python3 -m venv path/to/venv</span></span>
<span class="line"><span>    source path/to/venv/bin/activate</span></span>
<span class="line"><span>    python3 -m pip install xyz</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    If you wish to install a Python application that isn&#39;t in Homebrew,</span></span>
<span class="line"><span>    it may be easiest to use &#39;pipx install xyz&#39;, which will manage a</span></span>
<span class="line"><span>    virtual environment for you. You can install pipx with</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    brew install pipx</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    You may restore the old behavior of pip by passing</span></span>
<span class="line"><span>    the &#39;--break-system-packages&#39; flag to pip, or by adding</span></span>
<span class="line"><span>    &#39;break-system-packages = true&#39; to your pip.conf file. The latter</span></span>
<span class="line"><span>    will permanently disable this error.</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    If you disable this error, we STRONGLY recommend that you additionally</span></span>
<span class="line"><span>    pass the &#39;--user&#39; flag to pip, or set &#39;user = true&#39; in your pip.conf</span></span>
<span class="line"><span>    file. Failure to do this can result in a broken Homebrew installation.</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Read more about this behavior here: &lt;https://peps.python.org/pep-0668/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.</span></span>
<span class="line"><span>hint: See PEP 668 for the detailed specification.</span></span></code></pre></div><h3 id="解决方案-1" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ol><li><strong>使用虚拟环境安装</strong><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_env</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_env/bin/activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div></li><li><strong>使用 <strong>\`\`</strong> 进行全局安装</strong><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package_name</span></span></code></pre></div></li><li><strong>强制安装（不推荐）</strong><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package_name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --break-system-packages</span></span></code></pre></div></li></ol><hr><h2 id="_3-websocket连接失败-baseeventloop-create-connection-got-an-unexpected-keyword-argument-extra-headers" tabindex="-1">3. <code>WebSocket连接失败: BaseEventLoop.create_connection() got an unexpected keyword argument &#39;extra_headers&#39;</code> <a class="header-anchor" href="#_3-websocket连接失败-baseeventloop-create-connection-got-an-unexpected-keyword-argument-extra-headers" aria-label="Permalink to &quot;3. \`WebSocket连接失败: BaseEventLoop.create_connection() got an unexpected keyword argument &#39;extra_headers&#39;\`&quot;">​</a></h2><h3 id="错误描述-2" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述-2" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 建立WebSocket连接</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.websocket </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> websockets.connect(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WEBSOCKET_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    extra_headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 高版本这里改为 additional_headers=headers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="解决方案-2" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案-2" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ul><li>**新版本 **\`\`: <code>extra_headers</code> 改为 <code>additional_headers</code>。</li><li>**旧版本 **\`\`: <code>additional_headers</code> 改为 <code>extra_headers</code>。</li></ul><hr><h2 id="_4-没有找到默认的输入-输出音频设备" tabindex="-1">4. <code>没有找到默认的输入/输出音频设备</code> <a class="header-anchor" href="#_4-没有找到默认的输入-输出音频设备" aria-label="Permalink to &quot;4. \`没有找到默认的输入/输出音频设备\`&quot;">​</a></h2><h3 id="错误描述-3" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述-3" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AudioCodec - ERROR - 初始化音频设备失败: [Errno -9996] Invalid input device (no default output device)</span></span>
<span class="line"><span>AudioCodec - WARNING - 无法初始化音频设备: [Errno -9996] Invalid input device (no default output device)</span></span></code></pre></div><h3 id="解决方案-3" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案-3" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ol><li><p><strong>Windows</strong>:</p><ul><li>在 <strong>声音设置</strong> 中启用麦克风和扬声器。</li></ul></li><li><p><strong>Linux/macOS</strong>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pactl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sources</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Name&quot;</span></span></code></pre></div></li><li><p><strong>检查可用音频设备</strong>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pyaudio</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pyaudio.PyAudio()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p.get_device_count()):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;设备 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.get_device_info_by_index(i)[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li><li><p><strong>手动指定音频设备</strong>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stream </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p.open(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pyaudio.paInt16, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">channels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">input</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">input_device_index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li></ol><hr><h2 id="_5-modulenotfounderror-no-module-named-tkinter-mac-m4以下常见" tabindex="-1">**5. <code>ModuleNotFoundError: No module named &#39;_tkinter&#39;</code> mac m4以下常见 ** <a class="header-anchor" href="#_5-modulenotfounderror-no-module-named-tkinter-mac-m4以下常见" aria-label="Permalink to &quot;**5. \`ModuleNotFoundError: No module named &#39;_tkinter&#39;\` mac m4以下常见 **&quot;">​</a></h2><h3 id="错误描述-4" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述-4" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(.venv) apple@appledeMac-mini py-xiaozhi % python main.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;/Users/apple/Desktop/py-xiaozhi/main.py&quot;, line 5, in &lt;module&gt;</span></span>
<span class="line"><span>    from src.application import Application</span></span>
<span class="line"><span>  File &quot;/Users/apple/Desktop/py-xiaozhi/src/application.py&quot;, line 23, in &lt;module&gt;</span></span>
<span class="line"><span>    from src.display import gui_display, cli_display</span></span>
<span class="line"><span>  File &quot;/Users/apple/Desktop/py-xiaozhi/src/display/gui_display.py&quot;, line 2, in &lt;module&gt;</span></span>
<span class="line"><span>    import tkinter as tk</span></span>
<span class="line"><span>  File &quot;/opt/homebrew/Cellar/python@3.12/3.12.9/Frameworks/Python.framework/Versions/3.12/lib/python3.12/tkinter/__init__.py&quot;, line 38, in &lt;module&gt;</span></span>
<span class="line"><span>    import _tkinter  # If this fails your Python may not be configured for Tk</span></span>
<span class="line"><span>    ^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>ModuleNotFoundError: No module named &#39;_tkinter&#39;</span></span></code></pre></div><h3 id="解决方案-4" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案-4" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ol><li><p><strong>安装 <code>tcl-tk</code></strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcl-tk</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 一般第一步就可以了</span></span></code></pre></div></li><li><p><strong>检查 Homebrew 的 <code>tcl-tk</code> 路径</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcl-tk</span></span></code></pre></div></li><li><p><strong>重新安装 Python，并链接 <code>tcl-tk</code></strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python-tk</span></span></code></pre></div></li><li><p><strong>手动指定 <code>Tcl/Tk</code> 路径（如有必要）</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/opt/homebrew/opt/tcl-tk/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LDFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-L/opt/homebrew/opt/tcl-tk/lib&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CPPFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-I/opt/homebrew/opt/tcl-tk/include&quot;</span></span></code></pre></div></li><li><p><strong>重新创建虚拟环境</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .venv</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .venv/bin/activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div></li></ol><hr><h2 id="_6-导入-opuslib-失败-no-module-named-pyaudioop-或-cffi-backend" tabindex="-1">6. <code>导入 opuslib 失败: No module named &#39;pyaudioop&#39;或&#39;_cffi_backend&#39;</code> <a class="header-anchor" href="#_6-导入-opuslib-失败-no-module-named-pyaudioop-或-cffi-backend" aria-label="Permalink to &quot;6. \`导入 opuslib 失败: No module named &#39;pyaudioop&#39;或&#39;_cffi_backend&#39;\`&quot;">​</a></h2><h3 id="错误描述-5" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述-5" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>找到opus库文件: D:\\xiaozhi\\PC\\py-xiaozhi-main\\libs\\windows\\opus.dll</span></span>
<span class="line"><span>已添加DLL搜索路径: D:\\xiaozhi\\PC\\py-xiaozhi-main\\libs\\windows</span></span>
<span class="line"><span>已成功加载 opus.dll: D:\\xiaozhi\\PC\\py-xiaozhi-main\\libs\\windows\\opus.dll</span></span>
<span class="line"><span>导入 opuslib 失败: No module named &#39;pyaudioop&#39;</span></span>
<span class="line"><span>确保 opus 动态库已正确安装或位于正确的位置</span></span></code></pre></div><p>或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>找到opus库文件: D:\\xiaozhi\\PC\\py-xiaozhi-main\\libs\\windows\\opus.dll</span></span>
<span class="line"><span>已添加DLL搜索路径: D:\\xiaozhi\\PC\\py-xiaozhi-main\\libs\\windows</span></span>
<span class="line"><span>已成功加载 opus.dll: D:\\xiaozhi\\PC\\py-xiaozhi-main\\libs\\windows\\opus.dll</span></span>
<span class="line"><span>导入 opuslib 失败: No module named &#39;_cffi_backend&#39;</span></span>
<span class="line"><span>请确保 opus 动态库已正确安装或位于正确的位置</span></span></code></pre></div><h3 id="解决方案-5" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案-5" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ol><li><p><strong>Python版本兼容性问题</strong></p><ul><li>这个错误通常与Python版本有关，尤其是Python 3.13版本</li><li>建议使用Python 3.9-3.12版本</li></ul></li><li><p><strong>重新安装cffi</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cffi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cffi</span></span></code></pre></div></li><li><p><strong>opus.dll放置</strong></p><ul><li>确保已将opus.dll放在正确位置（项目根目录和System32目录）</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查是否已复制到这些位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\Windows\\System32\\opus.dll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">项目根目录\\opus.dll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">项目根目录\\libs\\windows\\opus.dll</span></span></code></pre></div></li><li><p><strong>安装pyaudioop支持库</strong></p><ul><li>对于&#39;pyaudioop&#39;错误，尝试降级Python版本或安装相关依赖</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pyaudio</span></span></code></pre></div></li></ol><hr><h2 id="_8-error-subprocess-exited-with-error-安装-numpy-失败" tabindex="-1">8. <code>error: subprocess-exited-with-error</code>（安装 <code>numpy</code> 失败） <a class="header-anchor" href="#_8-error-subprocess-exited-with-error-安装-numpy-失败" aria-label="Permalink to &quot;8. \`error: subprocess-exited-with-error\`（安装 \`numpy\` 失败）&quot;">​</a></h2><h3 id="错误描述-6" tabindex="-1"><strong>错误描述</strong> <a class="header-anchor" href="#错误描述-6" aria-label="Permalink to &quot;**错误描述**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Collecting numpy==2.0.2 (from -r requirements.txt (line 8))</span></span>
<span class="line"><span>  Using cached https://mirrors.aliyun.com/pypi/packages/a9/75/10dd1f8116a8b796cb2c737b674e02d02e80454bda953fa7e65d8c12b016/numpy-2.0.2.tar.gz (18.9 MB)</span></span>
<span class="line"><span>  Installing build dependencies ... done</span></span>
<span class="line"><span>  Getting requirements to build wheel ... done</span></span>
<span class="line"><span>  Installing backend dependencies ... done</span></span>
<span class="line"><span>  Preparing metadata (pyproject.toml) ... error</span></span>
<span class="line"><span>  error: subprocess-exited-with-error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  × Preparing metadata (pyproject.toml) did not run successfully.</span></span>
<span class="line"><span>  │ exit code: 1</span></span>
<span class="line"><span>  ╰─&gt; [21 lines of output]</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>      WARNING: Failed to activate VS environment: Could not parse vswhere.exe output</span></span>
<span class="line"><span>      ERROR: Unknown compiler(s): [[&#39;icl&#39;], [&#39;cl&#39;], [&#39;cc&#39;], [&#39;gcc&#39;], [&#39;clang&#39;], [&#39;clang-cl&#39;], [&#39;pgcc&#39;]]</span></span>
<span class="line"><span>      The following exception(s) were encountered:</span></span>
<span class="line"><span>      Running \`icl &quot;&quot;\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span>      Running \`cl /?\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span>      Running \`cc --version\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span>      Running \`gcc --version\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span>      Running \`clang --version\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span>      Running \`clang-cl /?\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span>      Running \`pgcc --version\` gave &quot;[WinError 2] 系统找不到指定的文件。&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  note: This error originates from a subprocess, and is likely not a problem with pip.</span></span>
<span class="line"><span>error: metadata-generation-failed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>× Encountered error while generating package metadata.</span></span>
<span class="line"><span>╰─&gt; See above for output.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note: This is an issue with the package mentioned above, not pip.</span></span>
<span class="line"><span>hint: See above for details.</span></span></code></pre></div><h3 id="解决方案-6" tabindex="-1"><strong>解决方案</strong> <a class="header-anchor" href="#解决方案-6" aria-label="Permalink to &quot;**解决方案**&quot;">​</a></h3><ul><li>建议python版本在 3.9 - 3.12</li></ul><ol><li><p><strong>确保 <code>numpy</code> 版本兼容</strong></p><p><code>numpy==2.0.2</code> 可能存在构建问题，建议尝试安装较稳定的版本：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numpy==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.24.3</span></span></code></pre></div><p>如果你不需要特定版本，可以安装最新稳定版本：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numpy</span></span></code></pre></div></li><li><p><strong>安装编译工具</strong></p><p>Windows用户可能需要安装Visual C++ Build Tools：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装Microsoft C++ Build Tools</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载并安装: https://visualstudio.microsoft.com/visual-cpp-build-tools/</span></span></code></pre></div></li><li><p><strong>使用预编译的轮子</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --only-binary=numpy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numpy</span></span></code></pre></div></li></ol>`,45)]))}const g=a(p,[["render",t]]);export{c as __pageData,g as default};
