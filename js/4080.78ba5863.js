(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[4080],{4080:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>e});var n=t(7875),l={class:"varlet-site-doc"},c=(0,n.uE)('<h1>按钮</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Button)\n</code></pre></div><div class="card"><h3>主题色按钮</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>文字按钮</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">text</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>外边框按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">text</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>纯文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>禁用状态</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">text</span> <span class="hljs-attr">outline</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">text</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>加载状态</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n  加载状态\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;rect&quot;</span>&gt;</span>\n  加载状态\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;disappear&quot;</span>&gt;</span>\n  加载状态\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;cube&quot;</span>&gt;</span>\n  加载状态\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;wave&quot;</span>&gt;</span>\n  加载状态\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>按钮尺寸</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>常规按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>迷你按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>大型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>块级按钮</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>块级按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>自定义颜色</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#69dbaa&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#eee&quot;</span>&gt;</span>背景/文字<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #69dbaa, #3a7afe)&quot;</span>\n  <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>\n&gt;</span>\n  使用渐变\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>圆形按钮</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;check&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;window-close&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><div class="card"><h3>注册事件</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">&quot;handleTouchstart&quot;</span>&gt;</span>触摸<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {\n      Snackbar.success(<span class="hljs-string">&#39;点击成功&#39;</span>)\n    }\n\n    <span class="hljs-keyword">const</span> handleTouchstart = <span class="hljs-function">() =&gt;</span> {\n      Snackbar.success(<span class="hljs-string">&#39;触摸成功&#39;</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      handleClick,\n      handleTouchstart\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>类型， 可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>尺寸， 可选值为 <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-radius</code></td><td>loading的半径，只作用于 <code>loading-type=&quot;circle&quot;</code> 时</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>loading-type</code></td><td>loading的类型，可选值为 <code>circle</code> <code>wave</code> <code>cube</code> <code>rect</code> <code>disappear</code></td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>loading的尺寸，可选值为 <code>large</code> <code>normal</code> <code>small</code> <code>mini</code> 不作用于 <code>loading-type=&quot;circle&quot;</code> 时</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>round</code></td><td>是否是圆形按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>是否是块级元素</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>是否是文字按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>outline</code></td><td>是否使用外边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否使用水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击按钮时触发， 在 <code>loading</code> 或 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>event: Event</code></td></tr><tr><td><code>touchstart</code></td><td>触摸手指压下按钮时触发， 在 <code>loading</code> 或 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>按钮内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--button-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--button-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--button-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--button-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--button-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--button-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--button-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--button-disabled-text-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--button-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--button-mini-padding</code></td><td><code>0 9px</code></td></tr><tr><td><code>--button-small-padding</code></td><td><code>0 11px</code></td></tr><tr><td><code>--button-normal-padding</code></td><td><code>0 15px</code></td></tr><tr><td><code>--button-large-padding</code></td><td><code>0 22px</code></td></tr><tr><td><code>--button-round-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--button-mini-height</code></td><td><code>20px</code></td></tr><tr><td><code>--button-small-height</code></td><td><code>28px</code></td></tr><tr><td><code>--button-normal-height</code></td><td><code>36px</code></td></tr><tr><td><code>--button-large-height</code></td><td><code>44px</code></td></tr></tbody></table></div>',16);var e={render:function(s,a){return(0,n.wg)(),(0,n.j4)("div",l,[c])}}}}]);