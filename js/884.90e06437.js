(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[884],{884:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>c});var t=n(7875),l={class:"varlet-site-doc"},p=(0,t.uE)('<h1>导航栏</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { AppBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(AppBar)\n</code></pre></div><div class="card"><h3>基础导航栏</h3><p>通过<code>title</code>属性设置导航栏标题。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>自定义样式</h3><p>通过<code>title-position</code>、<code>color</code>属性设置标题所处位置、导航栏颜色。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> \n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> \n  <span class="hljs-attr">title-position</span>=<span class="hljs-string">&quot;center&quot;</span> \n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> \n/&gt;</span>\n</code></pre></div><div class="card"><h3>添加标题处插槽</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span>&gt;</span>从插槽处添加标题<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>\n</code></pre></div><div class="card"><h3>添加左侧插槽</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n      <span class="hljs-attr">round</span>\n      <span class="hljs-attr">text</span>\n      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>\n      <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;goBack&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chevron-left&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> goBack = <span class="hljs-function">() =&gt;</span> {\n      Snackbar({\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;返回&#39;</span>,\n        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>\n      })\n    }\n\n    <span class="hljs-keyword">return</span> {\n      goBack\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>添加右侧插槽</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n      <span class="hljs-attr">round</span>\n      <span class="hljs-attr">text</span>\n      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>\n      <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;searchData&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;magnify&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> searchData = <span class="hljs-function">() =&gt;</span> {\n      Snackbar({\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;搜索&#39;</span>,\n        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>\n      })\n    }\n\n    <span class="hljs-keyword">return</span> {\n      searchData\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>添加左右插槽</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n      <span class="hljs-attr">round</span>\n      <span class="hljs-attr">text</span>\n      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>\n      <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;goBack&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chevron-left&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;38&quot;</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;-20&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n        <span class="hljs-attr">round</span>\n        <span class="hljs-attr">text</span>\n        <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>\n        <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>\n        @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY = true&quot;</span>\n      &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;menu&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-list&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>\n            <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-cell&quot;</span>\n            <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in menuList&quot;</span>\n            <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value.value&quot;</span>\n            <span class="hljs-attr">v-ripple</span>\n          &gt;</span>\n            {{ value.label }}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> offsetY = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> menuList = ref([\n      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项一&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;menu1&#39;</span> },\n      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项二&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;menu2&#39;</span> }\n    ])\n\n    <span class="hljs-keyword">const</span> goBack = <span class="hljs-function">() =&gt;</span> {\n      Snackbar({\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;返回&#39;</span>,\n        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>\n      })\n    }\n\n    <span class="hljs-keyword">return</span> {\n      offsetY,\n      menuList,\n      goBack\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-selector-class">.var-menu</span> {\n  <span class="hljs-attribute">background</span>: transparent;\n}\n\n<span class="hljs-selector-class">.menu-list</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;\n}\n\n<span class="hljs-selector-class">.menu-list</span> <span class="hljs-selector-class">.menu-cell</span> {\n  <span class="hljs-attribute">display</span>: block;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>标题位置,可选值为 <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>是否给导航栏设置海拔</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义标题内容,会覆盖<code>title</code>的内容</td><td>-</td></tr><tr><td><code>left</code></td><td>插入至导航栏左侧的内容</td><td>-</td></tr><tr><td><code>right</code></td><td>插入至导航栏右侧的内容</td><td>-</td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>50px</code></td></tr><tr><td><code>--app-bar-padding</code></td><td><code>0 10px</code></td></tr><tr><td><code>--app-bar-title-line-height</code></td><td><code>50px</code></td></tr></tbody></table></div>',12);const c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",l,[p])}}}}]);