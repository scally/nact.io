webpackJsonp([0xbc3c8cae8d86],{448:function(t,e){t.exports={data:{allMarkdownRemark:{totalCount:35,edges:[{node:{fields:{slug:"/decoders-and-encoders"},excerpt:"Schema evolution Evolution is a natural part of a systems lifecycle; requirements change, reality sets in and bugs are fixed. \nAs a result…",timeToRead:3,frontmatter:{title:"Decoders and Encoders",tags:["getting-started","nact","reason","bucklescript"],date:"28/01/2018"}}},{node:{fields:{slug:"/adapters"},excerpt:"A typical pattern in Nact when sending a message to an actor is including references to other actors. These references are often to whom the…",timeToRead:2,frontmatter:{title:"Adapters",tags:["getting-started","nact","reasonml","nodejs"],date:"28/01/2018"}}},{node:{fields:{slug:"/decoders-and-encoders"},excerpt:"Schema evolution Evolution is a natural part of a systems lifecycle; requirements change, reality sets in and bugs are fixed. \nAs a result…",timeToRead:4,frontmatter:{title:"Decoders and Encoders",tags:["getting-started","nact","reason","bucklescript"],date:"28/01/2018"}}},{node:{fields:{slug:"/액터-간-통신"},excerpt:"단일 액터 혼자서는 존재 의미가 없습니다. 액터는 협동을 해야합니다.  dispatch  함수를 사용해서 액터에서 다른 액터로 메시지를 보낼 수 있습니다. dispatch  함수의…",timeToRead:1,frontmatter:{title:"액터 간 통신",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/시작하기"},excerpt:"Nact는 Node 8 이상 버전 설치된 환경에서 작동합니다. 아래의 방법으로 설치할 수 있습니다. 액터 시스템을 시작하고 참조를 반환한다:  start() 설치한 후에, 애플리케이션 코드에서  start  함수를 import 합니다.  start…",timeToRead:2,frontmatter:{title:"시작하기",tags:["getting-started","nact","reason","bucklescript"],date:"22/03/2019"}}},{node:{fields:{slug:"/액터의-계층-구조"},excerpt:"…",timeToRead:3,frontmatter:{title:"액터의 계층 구조",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/상태-저장-영속성"},excerpt:"…",timeToRead:2,frontmatter:{title:"상태 저장(영속성)",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/질의하기"},excerpt:"액터 시스템은 닫힌 세계가 아니므로 외부 세계와 소통할 수 있어야 합니다. 일반적으로 액터 시스템은 REST API 혹은 RPC를 통해 외부에 노출됩니다. 그런데 REST나 RPC는 블로킹 스타일로 동작합니다. 즉 Request…",timeToRead:4,frontmatter:{title:"질의하기",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/관리-감독-supervision"},excerpt:"액터 시스템은 ' 실패하게 내버려 둬라( let it crash…",timeToRead:2,frontmatter:{title:"관리 감독(Supervision)",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/타임아웃"},excerpt:"…",timeToRead:1,frontmatter:{title:"타임아웃",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/스냅샷"},excerpt:"이벤트가 많이 누적된 액터를 복원할 때 문제가 생길 수 있습니다. 왜냐하면 누적된 이벤트가 많을수록 액터가 상태를 복원하는 데 시간이 오래 걸릴 수 있기 때문입니다. 시간에 민감한 애플리케이션에서는 nact…",timeToRead:1,frontmatter:{title:"스냅샷",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/상태가-있는-액터"},excerpt:"액터 시스템 의 주요 장점 가운데 하나는 바로  상태가 있는 서비스를 안전하게 생성하는  방법을 제공하는 것입니다. Nact에서는  spawn  함수를 이용해서  상태 있는 액터 를 생성합니다. 아래의 예제에서, 상태는 비어있는 객체  state…",timeToRead:1,frontmatter:{title:"상태가 있는 액터",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/nact-소개"},excerpt:"Nact는 Node.js에서 실행되는  액터 모델  구현체입니다. Akka 라이브러리와 Erlang 언어의 문제 접근 방법에서 영감을 받았습니다. 특히 기존에 Redux…",timeToRead:2,frontmatter:{title:"Nact 소개",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/퍼시스턴트-쿼리"},excerpt:"…",timeToRead:2,frontmatter:{title:"퍼시스턴트 쿼리",tags:["getting-started","nact","javascript","nodejs"],date:"22/03/2019"}}},{node:{fields:{slug:"/actor-communication"},excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the  dispatch…",timeToRead:1,frontmatter:{title:"Actor Communication",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/persist"},excerpt:"The contacts service we've been working on  still  isn't very useful. While we've extended the service to support multiple users, it has the…",timeToRead:2,frontmatter:{title:"Persist",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/introduction"},excerpt:"Nact is an implementation of the actor model for Node.js. It is inspired by the approaches taken by  Akka  and  Erlang . Additionally it…",timeToRead:1,frontmatter:{title:"Introduction",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/timeouts"},excerpt:"While not strictly a part of the persistent actor, timeouts are frequently used with snapshotting. Actors take up memory, which is still a…",timeToRead:1,frontmatter:{title:"Timeouts",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/getting-started"},excerpt:"Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them. \nPlaying around with the…",timeToRead:2,frontmatter:{title:"Getting Started",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/querying"},excerpt:"Actor systems don't live in a vacuum, they need to be available to the outside world. Commonly actor systems are fronted by REST APIs or RPC…",timeToRead:5,frontmatter:{title:"Querying",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/supervision"},excerpt:"Actor systems are often designed around the  let it crash  philosophy.\nThis thesis is motivated by a desire to reduce the amount of…",timeToRead:2,frontmatter:{title:"Supervision",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/snapshotting"},excerpt:"Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an…",timeToRead:1,frontmatter:{title:"Snapshotting",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/persistent-queries"},excerpt:"You start to see the biggest benefit from snapshotting best when your state is small in size, and persisted events are many. \nHowever…",timeToRead:2,frontmatter:{title:"Persistent Queries",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/stateful-actors"},excerpt:"One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using…",timeToRead:1,frontmatter:{title:"Stateful Actors",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/hierarchy"},excerpt:"The application we made in the  querying  section isn't very useful. For one it only supports a single user's contacts, and secondly it…",timeToRead:3,frontmatter:{title:"Hierarchy",tags:["getting-started","nact","javascript","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/actor-communication"},excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the  dispatch…",timeToRead:1,frontmatter:{title:"Actor Communication",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/hierarchy"},excerpt:"The application we made in the  querying  section isn't very useful. For one it only supports a single user's contacts, and secondly it…",timeToRead:2,frontmatter:{title:"Hierarchy",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/persistent-queries"},excerpt:"You start to see the biggest benefit from snapshotting best when your state is small in size, and persisted events are many. \nHowever…",timeToRead:3,frontmatter:{title:"Persistent Queries",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/querying"},excerpt:"Actor systems don't live in a vacuum, they need to be available to the outside world. Commonly actor systems are fronted by REST APIs or RPC…",timeToRead:3,frontmatter:{title:"Querying",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/snapshotting"},excerpt:"Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an…",timeToRead:1,frontmatter:{title:"Snapshotting",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/timeouts"},excerpt:"While not strictly a part of the persistent actor, timeouts are frequently used with snapshotting. Actors take up memory, which is still a…",timeToRead:1,frontmatter:{title:"Timeouts",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/persist"},excerpt:"Note: Please take a careful look at the  Decoders and Encoders  section to understand an important limitation of persistence actors in…",timeToRead:2,frontmatter:{title:"Persist",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/supervision"},excerpt:"Actor systems are often designed around the  let it crash  philosophy.\nThis thesis is motivated by a desire to reduce the amount of…",timeToRead:3,frontmatter:{title:"Supervision",tags:["getting-started","nact","reasonml","nodejs"],date:"11/12/2017"}}},{node:{fields:{slug:"/introduction"},excerpt:"Nact is an implementation of the actor model for Node.js. It is inspired by the approaches taken by  Akka  and  Erlang . Additionally it…",timeToRead:1,frontmatter:{title:"Introduction",tags:["getting-started","nact","reason","bucklescript"],date:"11/12/2017"}}},{node:{fields:{slug:"/인코더-디코더"},excerpt:"…",timeToRead:2,frontmatter:{title:"인코더/디코더",tags:["getting-started","nact","reason","bucklescript"],date:"10/04/2019"}}}]}},pathContext:{tag:"getting-started"}}}});
//# sourceMappingURL=path---tags-getting-started-50b4b27e6e057c39e535.js.map