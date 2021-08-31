(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7642],{7642:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>r});var l=n(7875),e={class:"varlet-site-doc"},t=(0,l.uE)('<h1>Style Provider</h1><p>Component libraries organize styles through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>. Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.</p><div class="card"><h3>Basic style variable</h3><p>Here are some basic style variables for the component library</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-selector-pseudo">:root</span> {\n  <span class="hljs-attribute">--font-size-xs</span>: <span class="hljs-number">10px</span>;\n  <span class="hljs-attribute">--font-size-sm</span>: <span class="hljs-number">12px</span>;\n  <span class="hljs-attribute">--font-size-md</span>: <span class="hljs-number">14px</span>;\n  <span class="hljs-attribute">--font-size-lg</span>: <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">--icon-size-xs</span>: <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">--icon-size-sm</span>: <span class="hljs-number">18px</span>;\n  <span class="hljs-attribute">--icon-size-md</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">--icon-size-lg</span>: <span class="hljs-number">22px</span>;\n  <span class="hljs-attribute">--color-primary</span>: <span class="hljs-number">#3a7afe</span>;\n  <span class="hljs-attribute">--color-info</span>: <span class="hljs-number">#00afef</span>;\n  <span class="hljs-attribute">--color-success</span>: <span class="hljs-number">#00c48f</span>;\n  <span class="hljs-attribute">--color-warning</span>: <span class="hljs-number">#ff9f00</span>;\n  <span class="hljs-attribute">--color-danger</span>: <span class="hljs-number">#f44336</span>;\n  <span class="hljs-attribute">--color-disabled</span>: <span class="hljs-number">#e0e0e0</span>;\n  <span class="hljs-attribute">--cubic-bezier</span>: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.25</span>, <span class="hljs-number">0.8</span>, <span class="hljs-number">0.5</span>, <span class="hljs-number">1</span>);\n}\n</code></pre></div><div class="card"><h3>Modify styles at runtime</h3><p>Maybe you have a need to replace the style while the program is runtime，like a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides’ <code>component call</code> and <code>function call</code> and two invocation modes.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(StyleProvider)\n</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    [StyleProvider.Component.name]: StyleProvider\n  }\n}\n</code></pre></div><div class="card"><h3>Component Call</h3><p>Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the <code>teleport</code> will not work</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-style-provider</span> <span class="hljs-attr">:style-vars</span>=<span class="hljs-string">&quot;styleVars&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.score&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.license&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span> \n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n    <span class="hljs-attr">block</span>\n    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleTheme&quot;</span>\n  &gt;</span>\n    Toggle Theme\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-style-provider</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">score</span>: <span class="hljs-number">5</span>,\n      <span class="hljs-attr">license</span>: <span class="hljs-literal">true</span>,\n    })\n    <span class="hljs-keyword">const</span> primaryTheme = {\n      <span class="hljs-string">&#39;--theme-name&#39;</span>: <span class="hljs-string">&#39;primary&#39;</span>,\n      <span class="hljs-string">&#39;--rate-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,\n      <span class="hljs-string">&#39;--button-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,\n      <span class="hljs-string">&#39;--switch-handle-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,\n      <span class="hljs-string">&#39;--switch-track-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,\n    }\n    <span class="hljs-keyword">const</span> successTheme = {\n      <span class="hljs-string">&#39;--theme-name&#39;</span>: <span class="hljs-string">&#39;success&#39;</span>,\n      <span class="hljs-string">&#39;--rate-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,\n      <span class="hljs-string">&#39;--button-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,\n      <span class="hljs-string">&#39;--switch-handle-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,\n      <span class="hljs-string">&#39;--switch-track-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,\n    }\n    <span class="hljs-keyword">const</span> styleVars = ref(primaryTheme)\n\n    <span class="hljs-keyword">const</span> toggleTheme = <span class="hljs-function">() =&gt;</span> {\n      styleVars.value = styleVars.value[<span class="hljs-string">&#39;--theme-name&#39;</span>] === <span class="hljs-string">&#39;primary&#39;</span> ? successTheme : primaryTheme\n    }\n\n    <span class="hljs-keyword">return</span> {\n      state,\n      styleVars,\n      toggleTheme\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Function Call</h3><p>A functional call is to update variables directly on <code>:root</code>, which is suitable for situations where a global update style is required</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRootTheme&quot;</span>&gt;</span>Toggle Root Theme<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> toggleRootTheme = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">const</span> color = <span class="hljs-built_in">window</span>\n        .getComputedStyle(<span class="hljs-built_in">document</span>.documentElement)\n        .getPropertyValue(<span class="hljs-string">&#39;--color-primary&#39;</span>)\n        .trim()\n      \n      StyleProvider({\n        <span class="hljs-string">&#39;--color-primary&#39;</span>: color === <span class="hljs-string">&#39;#3a7afe&#39;</span> ? <span class="hljs-string">&#39;#000&#39;</span> : <span class="hljs-string">&#39;#3a7afe&#39;</span>,\n      })\n    }\n\n    <span class="hljs-keyword">return</span> { toggleRootTheme }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Component content</td><td><code>-</code></td></tr></tbody></table></div>',11);var r={render:function(s,a){return(0,l.wg)(),(0,l.j4)("div",e,[t])}}}}]);