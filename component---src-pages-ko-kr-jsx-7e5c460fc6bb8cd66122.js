webpackJsonp([0xafd94e81797c],{88:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"],["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"]),c=n(2),d=a(c),f=n(24),p=a(f),s=n(14),m=a(s),g=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.children;return d.default.createElement(p.default,{style:{border:"none"},to:this.props.to},d.default.createElement(h,null,e))},t}(c.Component);t.default=g;var h=m.default.div(u,function(e){return e.theme.brand},function(e){return e.theme.brand},function(e){return e.theme.accent},function(e){return e.theme.brand});e.exports=t.default},48:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=a(i),c=n(18),d=a(c),f=n(15),p=a(f),s=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,a=e.postSEO,r=e.language,l=void 0,o=void 0,i=void 0,c=void 0;if(a){var f=t.frontmatter;l=f.title,o=f.description?f.description:t.excerpt,c=p.default.siteUrl+p.default.pathPrefix+n}else l=p.default.siteTitle,o=p.default.siteDescription,i=p.default.siteLogo;var s="/"===p.default.pathPrefix?"":p.default.pathPrefix;i=p.default.siteUrl+s+i;var m=p.default.siteUrl+p.default.pathPrefix,g=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:l,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt[r]:""}];return a&&g.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:l,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:l,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt.en_uk:"",headline:l,image:{"@type":"ImageObject",url:i},description:o}]),u.default.createElement(d.default,null,u.default.createElement("meta",{name:"description",content:o}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),u.default.createElement("meta",{property:"og:url",content:a?c:m}),a?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:l}),u.default.createElement("meta",{property:"og:description",content:o}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:l}),u.default.createElement("meta",{name:"twitter:description",content:o}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(i.Component);t.default=s,e.exports=t.default},231:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"],["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"]),c=r(["\n  padding: ",";  \n  background: ",";    \n"],["\n  padding: ",";  \n  background: ",";    \n"]),d=r(["\npadding: ",";  \npadding-bottom: 16rem;\n"],["\npadding: ",";  \npadding-bottom: 16rem;\n"]),f=r(["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"]),p=r(["\nmargin: 0 auto;\nmax-width: ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\n"]),s=n(2),m=a(s),g=n(18),h=a(g),y=n(14),E=a(y),b=n(24),w=(a(b),n(48)),_=a(w),v=n(15),x=a(v),k=n(47),T=a(k),j=n(88),O=a(j),P=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return m.default.createElement("div",{className:"index-container"},m.default.createElement(h.default,{title:x.default.siteTitle}),m.default.createElement(_.default,{postEdges:e,language:"ko_kr"}),m.default.createElement("main",{style:{display:"flex",flexDirection:"column"}},m.default.createElement("span",{style:{flex:1,minHeight:"65vh"}},m.default.createElement(T.default,{isMain:!0,siteTitleAlt:x.default.siteTitleAlt.ko_kr,siteTitle:x.default.siteTitle,siteDescription:x.default.siteDescription,location:this.props.location,logo:x.default.siteLogo,language:"ko_kr"})),m.default.createElement(A,null,m.default.createElement(M,null,m.default.createElement("h2",null,"Nact는 말하자면, 서버에서 실행되는 Redux라고 생각하시면 됩니다"),m.default.createElement("p",null,"오늘날의 애플리케이션 서버는 10년 전과 많이 다릅니다. 그런데 왜 우리는 여전히 90년대 스타일로 프로그래밍을 하고 있을까요?"),m.default.createElement("p",null,"Nact는 Akka와 Erlang에서 영감을 받았습니다."),m.default.createElement("p",null,"Nact는 오픈소스 Node.js 프레임워크로서, 아래와 같은 것들을 여러분의 프로젝트에서 가능하게 해줍니다."),m.default.createElement(N,null,m.default.createElement("li",null,"효율적인 메모리 사용"),m.default.createElement("li",null,"탄력성(resilience), 내결함성 향상"),m.default.createElement("li",null,"성능 향상"),m.default.createElement("li",null,"모듈간의 의존 결합 해소(디커플링)")),m.default.createElement("p",null,"Nact는 간편한 이벤트 소싱 지원과 잘 설계된 액터 모델 구현을 제공함으로써 다양한 영역에서 활용할 수 있습니다."),m.default.createElement("p",null,"Nact가 비록 만능은 아닙니다. 하지만 다양한 요구 사례들을 해결하기 위해 성장하고 있습니다."),m.default.createElement("p",null,"여러분의 프로젝트에서도 사용해 볼 만한 부분이 있겠지요?"))),m.default.createElement(C,null,m.default.createElement(L,null,m.default.createElement("h2",null,"시작하기"),m.default.createElement("p",null,"Nact는 ",m.default.createElement("a",{href:"https://reasonml.github.io/","data-jzz-gui-player":"true"},"ReasonML"),"과 JavaScript 라이브러리로 제공됩니다. 두 가지 모두 100% 테스트 커버리지와 완벽한 문서를 제공하고, 프로젝트 메인테이너의 지원 하에 관리되고 있습니다."),m.default.createElement("p",null,"Nact 프레임워크의 전반적인 내용을 하루아침에 학습할 수 있습니다. 특히 ",m.default.createElement("code",{class:"highlighter-rouge"},"Hello World")," 예제를 실습하는데는 15분도 안 걸립니다."),m.default.createElement(O.default,{to:"/ko_kr/lesson/javascript/nact-%EC%86%8C%EA%B0%9C"},m.default.createElement("img",{style:{height:"2.5rem"},src:"/logos/language-logo_js-inverted.svg"})," JAVASCRIPT")))))},t}(m.default.Component);t.default=P;var N=E.default.ul(u),A=E.default.div(c,function(e){return e.theme.sitePadding},function(e){return e.theme.brand}),C=E.default.div(d,function(e){return e.theme.sitePadding}),M=E.default.div(f,function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accent}),L=E.default.div(p,function(e){return e.theme.contentWidthLaptop});t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-ko-kr-jsx-7e5c460fc6bb8cd66122.js.map