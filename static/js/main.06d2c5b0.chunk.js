(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(34),a=n(5),i={messages:[{id:1,message:"first"},{id:2,message:"second"},{id:3,message:"third"}],dialogs:[{name:"Sasha",id:1},{name:"Yarik",id:2},{name:"Oleg",id:3},{name:"Andrey",id:4},{name:"Nazar",id:5}]},u=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:6,message:t.newMessageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},136:function(e,t,n){e.exports={currentPage:"Paginator_currentPage__3PqDk"}},137:function(e,t,n){e.exports=n.p+"static/media/preloader.6225e8be.svg"},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(134),a=n.n(r),i=(n(87),a.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"be5c96f6-d618-4264-9a0a-7fa2d3b5f578"}})),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return i.get("profile/"+e)},getStatus:function(e){return i.get("profile/status/"+e)},updateStatus:function(e){return i.put("profile/status",{status:e})}},c={me:function(){return i.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return i.delete("auth/login")}}},15:function(e,t,n){e.exports={nav:"Navbar_nav__3zeX5",item:"Navbar_item__293Xn",activeLink:"Navbar_activeLink__3-LhN"}},165:function(e,t,n){e.exports=n(293)},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return p}));var r=n(8),a=n.n(r),i=n(20),u=n(5),o=n(44),c=n(14),s={id:null,login:null,email:null,isFetching:!1,isAuth:!1},l=function(e,t,n,r){return{type:"auth/SET-AUTH-USER-DATA",payload:{id:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,i=r.id,u=r.login,o=r.email,t(l(i,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e,t,n){return function(){var r=Object(i.a)(a.a.mark((function r(i){var u,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.login(e,t,n);case 2:0===(u=r.sent).data.resultCode?i(f()):(s=u.data.messages.length>0?u.data.messages[0]:"Some error",i(Object(o.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},p=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-AUTH-USER-DATA":return Object(u.a)(Object(u.a)({},e),t.payload);case"auth/TOGGLE-IS-FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});default:return e}}},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(65),u=n.n(i),o=n(35),c=n(36),s=n(38),l=n(37),f=(n(100),n(15)),A=n.n(f),p=n(12),m=function(){return a.a.createElement("nav",{className:A.a.nav},a.a.createElement("div",{className:A.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:A.a.activeLink},"Profile")),a.a.createElement("div",{className:A.a.item},a.a.createElement(p.b,{to:"/dialogs",activeClassName:A.a.activeLink},"Messages")),a.a.createElement("div",{className:A.a.item},a.a.createElement(p.b,{to:"/news",activeClassName:A.a.activeLink},"News")),a.a.createElement("div",{className:A.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:A.a.activeLink},"Music")),a.a.createElement("div",{className:A.a.item},a.a.createElement(p.b,{to:"/settings",activeClassName:A.a.activeLink},"Settigns")),a.a.createElement("div",{className:A.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:A.a.activeLink},"Users")))},d=(n(174),function(e){return a.a.createElement("div",null,"News")}),E=(n(175),function(e){return a.a.createElement("div",null,"Music")}),g=(n(176),function(e){return a.a.createElement("div",null,"Settings")}),O=n(17),v=n(8),b=n.n(v),h=n(20),w=n(34),I=n(5),S=n(14),j=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(I.a)(Object(I.a)({},e),r):e}))},P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingProgress:[]},C=function(e){return{type:"FOLLOW",userId:e}},R=function(e){return{type:"UNFOLLOW",userId:e}},y=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},D=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},V=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",userId:e,isFetching:t}},B=function(){var e=Object(h.a)(b.a.mark((function e(t,n,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(I.a)(Object(I.a)({},e),{},{users:j(e.users,t.userId,"id",{follows:!0})});case"UNFOLLOW":return Object(I.a)(Object(I.a)({},e),{},{users:j(e.users,t.userId,"id",{follows:!1})});case"SET-USERS":return Object(I.a)(Object(I.a)({},e),{},{users:Object(w.a)(t.users)});case"SET-CURRENT-PAGE":return Object(I.a)(Object(I.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(I.a)(Object(I.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(I.a)(Object(I.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(w.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},q=n(55),x=n(88),H=n.n(x),T=n(89),U=n.n(T),N=n(131),W=n(136),L=n.n(W),z=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],i=1;i<=t;i++)n.push(i);var u=Math.ceil(t/e.pageSize),o=Object(r.useState)(1),c=Object(N.a)(o,2),s=c[0],l=c[1],f=(s-1)*e.pageSize+1,A=s*e.pageSize;return a.a.createElement("div",null,s>1&&a.a.createElement("button",{onClick:function(){l(s-1)}},"Prev"),n.filter((function(e){return e>=f&&e<=A})).map((function(t){return a.a.createElement("span",{onClick:function(){return e.onPageChanged(t)},className:e.currentPage===t&&L.a.currentPage}," ",t)})),s<u&&a.a.createElement("button",{onClick:function(){l(s+1)}},"Next"))},J=function(e){var t=e.user,n=e.followingProgress,r=e.unfollow,i=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:U.a,className:H.a.usersPhoto,alt:""}))),a.a.createElement("div",null,t.follows?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},k=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,i=e.pageSize,u=Object(q.a)(e,["currentPage","onPageChanged","totalItemsCount","pageSize"]);return a.a.createElement("div",null,a.a.createElement(z,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:i}),a.a.createElement("div",null,u.users.map((function(e){return a.a.createElement(J,{user:e,followingProgress:u.followingProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})}))))},Z=n(67),F=n(138),M=Object(F.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Y=function(e){return e.usersPage.pageSize},X=function(e){return e.usersPage.totalUsersCount},Q=function(e){return e.usersPage.currentPage},K=function(e){return e.usersPage.isFetching},_=function(e){return e.usersPage.followingProgress},$=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Z.a,null):null,a.a.createElement(k,{pageSize:this.props.pageSize,totalItemsCount:this.props.totalItemsCount,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,onPageChanged:this.onPageChanged,followingProgress:this.props.followingProgress,toggleFollowingProgress:this.props.toggleFollowingProgress}))}}]),n}(a.a.Component),ee=Object(O.b)((function(e){return{users:M(e),pageSize:Y(e),totalItemsCount:X(e),currentPage:Q(e),isFetching:K(e),followingProgress:_(e)}}),{follow:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.follow.bind(S.c),B(n,e,r,C);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.unfollow.bind(S.c),B(n,e,r,R);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:y,toggleFollowingProgress:V,requestUsers:function(e,t){return function(){var n=Object(h.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(D(!0)),r(y(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(D(!1)),r({type:"SET-USERS",users:a.items}),r({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})($),te=n(9),ne=n(97),re=n.n(ne),ae=function(e){return a.a.createElement("header",{className:re.a.header},a.a.createElement("img",{src:"https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg",alt:"logo"}),a.a.createElement("div",{className:re.a.loginBlock},e.isAuth?a.a.createElement("div",null," ",e.login," - ",a.a.createElement("button",{onClick:e.logout}," log out ")," "):a.a.createElement(p.b,{to:"/login"},"Login")))},ie=n(27),ue=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(ae,this.props)}}]),n}(a.a.Component),oe=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.id}}),{logout:ie.d})(ue),ce=n(87),se={initialized:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{initialized:!0});default:return e}},fe=n(10),Ae=n(98),pe=n(130),me={},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return e},Ee=n(139),ge=n(132),Oe=n(10),ve=Oe.createStore,be=Oe.combineReducers,he=Oe.applyMiddleware,we=Oe.compose,Ie=ve(be({profilePage:Ae.b,dialogsPage:pe.b,sidebar:de,usersPage:G,auth:ie.a,form:ge.a,app:le}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we)(he(Ee.a)));window.__store__=Ie;var Se=Ie,je=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...")},a.a.createElement(e,t))}},Pe=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Ce=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(oe,null),a.a.createElement(m,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(te.b,{path:"/profile/:userId?",render:je(Pe)}),a.a.createElement(te.b,{path:"/dialogs",render:je(Ce)}),a.a.createElement(te.b,{path:"/news",render:function(){return a.a.createElement(d,null)}}),a.a.createElement(te.b,{path:"/music",render:function(){return a.a.createElement(E,null)}}),a.a.createElement(te.b,{path:"/settings",render:function(){return a.a.createElement(g,null)}}),a.a.createElement(te.b,{path:"/users",render:function(){return a.a.createElement(ee,null)}}),a.a.createElement(te.b,{path:"/login",render:function(){return a.a.createElement(ce.a,null)}}))):a.a.createElement(Z.a,null)}}]),n}(a.a.Component),ye=Object(fe.compose)(te.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(ie.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Re),De=function(e){return a.a.createElement(p.a,null,a.a.createElement(O.a,{store:Se},a.a.createElement(ye,null)))};n(292),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return A}));var r=n(55),a=n(0),i=n.n(a),u=n(52),o=n.n(u),c=(n(56),n(90)),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return i.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},i.a.createElement("div",null,a),u&&i.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return i.a.createElement(s,e,i.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return i.a.createElement(s,e,i.a.createElement("input",Object.assign({},t,n)))},A=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2e0Gy",error:"FormsControls_error__3Kv05",formSummaryError:"FormsControls_formSummaryError__3GKXL"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols!")}}},67:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(137),u=n.n(i);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a,alt:""}))}},87:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(91),u=n(56),o=n(17),c=n(27),s=n(9),l=n(52),f=n.n(l),A=n(33),p=Object(i.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(A.c)("Email","email",[u.b],A.a),Object(A.c)("Password","password",[u.b],A.a,{type:"password"}),Object(A.c)(null,"rememberMe",[],A.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:f.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.a=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:c.c})((function(e){return e.isAuth?a.a.createElement(s.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(p,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))},88:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__3rO5A",currentPage:"Users_currentPage__2wE3A"}},89:function(e,t){e.exports="data:image/jpeg;base64,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"},97:function(e,t,n){e.exports={header:"Header_header__XL844",loginBlock:"Header_loginBlock__zEaA6"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return A})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m}));var r=n(8),a=n.n(r),i=n(20),u=n(34),o=n(5),c=n(14),s={posts:[{id:1,message:"Hello",likesCounter:20},{id:2,message:"Dear",likesCounter:72}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET-STATUS",status:e}},A=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCounter:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET-USER-PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"DELETE-POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.06d2c5b0.chunk.js.map