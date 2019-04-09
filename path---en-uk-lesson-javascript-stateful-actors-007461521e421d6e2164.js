webpackJsonp([0x5dc02c9f4623],{417:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:2,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,programming_language:"javascript",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Introduction",lesson:1,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Persist",lesson:1,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Persistent Queries",lesson:4,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persistent-queries"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Supervision",lesson:5,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}},{node:{frontmatter:{title:"Querying",lesson:3,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/querying"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-stateful-greeter" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<p>One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using the <code>spawn</code> function.</p>\n<p>In this example, the state is initialized to an empty object using <code>state = {}</code>. Each time a message is received by the actor, the current state is passed in as the first argument to the actor.  Whenever the actor encounters a name it hasn\'t encountered yet, it returns a copy of previous state with the name added. If it has already encountered the name it simply returns the unchanged current state. The return value is used as the next state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> statefulGreeter <span class="token operator">=</span> <span class="token function">spawn</span><span class="token punctuation">(</span>\n  system<span class="token punctuation">,</span> \n  <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hasPreviouslyGreetedMe <span class="token operator">=</span> state<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">!==</span> undefined<span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>hasPreviouslyGreetedMe<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello again </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token string">`Good to meet you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.\\nI am the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ctx<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> service!`</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token punctuation">[</span>msg<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'stateful-greeter\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',timeToRead:1,excerpt:"One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using…",frontmatter:{title:"Stateful Actors",date:"11/12/2017",programming_language:"javascript",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/stateful-actors"}}},pathContext:{slug:"/stateful-actors",programming_language:"javascript",language:"en_UK"}}}});
//# sourceMappingURL=path---en-uk-lesson-javascript-stateful-actors-007461521e421d6e2164.js.map