(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[4440],{4440:(s,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>c});var n=l(7875),t={class:"varlet-site-doc"},p=(0,n.uE)('<h1>菜单</h1><div class="card"><h3>介绍</h3><p>使元素点击时显示一个菜单，通过控制菜单的对齐方式和偏移量自由的控制菜单的显示位置。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Menu)\n</code></pre></div><div class="card"><h3>注意</h3><p>Menu是一个<code>inline-block</code>元素，通过默认插槽点击时显示菜单，如果希望Menu独占一行推荐包裹一个<code>block</code>元素。 Menu在点击组件范围以外的区域自动关闭，所以不可以使用同一个状态绑定多个Menu的<code>v-model:show</code>，否则在触发显示时也同时触发了其他Menu对<code>v-model:show</code>的修改，导致Menu无法显示。</p></div><div class="card"><h3>对齐方式</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>&gt;</span>顶部对齐<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-mt&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">alignment</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>&gt;</span>底部对齐<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> top = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> bottom = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> { \n      top,\n      bottom\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-selector-class">.block</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">justify-content</span>: space-between;\n}\n\n<span class="hljs-selector-class">.block-mt</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">130px</span>;\n}\n\n<span class="hljs-selector-class">.cell-list</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;\n}\n</code></pre></div><div class="card"><h3>偏移量</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;72&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetX&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetX = true&quot;</span>&gt;</span>右偏移<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;-72&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetX1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetX1 = true&quot;</span>&gt;</span>左偏移<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY = true&quot;</span>&gt;</span>下偏移<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;-36&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY1 = true&quot;</span>&gt;</span>上偏移<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> offsetX = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> offsetX1 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> offsetY = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> offsetY1 = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      offsetX,\n      offsetX1,\n      offsetY,\n      offsetY1\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-selector-class">.block-1</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">justify-content</span>: space-between;\n}\n\n<span class="hljs-selector-class">.block-2</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">justify-content</span>: space-between;\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">130px</span>;\n}\n</code></pre></div><div class="card"><h3>注册事件</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;event&quot;</span>\n  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;open&#39;)&quot;</span>\n  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;opened&#39;)&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.warning(&#39;close&#39;)&quot;</span>\n  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;closed&#39;)&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>&gt;</span>注册事件<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>菜单项<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> event = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      event,\n      Snackbar\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-selector-class">.cell-list</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示菜单</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>alignment</code></td><td>菜单的对齐方式， 可选值为 <code>top</code> <code>bottom</code>， 源点为默认插槽的左上角，top为菜单顶部对齐源点，bottom为菜单底部对齐</td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>x轴偏移量， 相对于菜单对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y轴偏移量， 相对于菜单对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>菜单挂载的位置</td><td><em>string</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>Menu默认插槽元素产生位置大小变化时可以调用此方法进行重绘</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开菜单时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开菜单动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭菜单时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭菜单动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>菜单关联的触发元素</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>菜单内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--menu-background</code></td><td><code>#fff</code></td></tr></tbody></table></div>',13);var c={render:function(s,a){return(0,n.wg)(),(0,n.j4)("div",t,[p])}}}}]);