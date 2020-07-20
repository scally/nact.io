webpackJsonp([64391299922804],{408:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:2,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Persist",lesson:1,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,programming_language:"javascript",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Introduction",lesson:1,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Querying",lesson:3,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Supervision",lesson:5,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Persistent Queries",lesson:4,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persistent-queries"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-ping-pong" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<p>An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the <code>dispatch</code> method. </p>\n<p>References to other actors can be included in a given message, allowing actors to randomly address one another.</p>\n<p>In this example, the actors Ping and Pong are playing a perfect ping-pong match. To start the match, we dispatch a message to Ping with Pong set as the sender in the message</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token function-variable function">delay</span> <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ping <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ping: Pong is a little slow. So I\'m giving myself a little handicap :P</span>\n  <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">,</span> sender<span class="token punctuation">:</span> ctx<span class="token punctuation">.</span>self <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'ping\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> pong <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">,</span> sender<span class="token punctuation">:</span> ctx<span class="token punctuation">.</span>self <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'pong\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dispatch</span><span class="token punctuation">(</span>ping<span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'begin\'</span> sender<span class="token punctuation">:</span>pong <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This produces the following console output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>begin\nping\npong\nping\npong\nping\netc...</code></pre>\n      </div>',timeToRead:1,excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the  dispatch…",frontmatter:{title:"Actor Communication",date:"11/12/2017",programming_language:"javascript",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/actor-communication"}}},pathContext:{slug:"/actor-communication",programming_language:"javascript",language:"en_uk"}}}});
//# sourceMappingURL=path---en-uk-lesson-javascript-actor-communication-6bfadbf642a338c585de.js.map