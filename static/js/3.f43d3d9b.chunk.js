(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3jGT8"}},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1YLFh",posts:"MyPosts_posts__2v-j0"}},297:function(e,t,a){e.exports={item:"Post_item__2F9Rn"}},298:function(e,t,a){"use strict";a.r(t);var n=a(35),s=a(36),r=a(38),o=a(37),u=a(0),c=a.n(u),l=(a(294),a(67)),i=(c.a.Component,a(131)),p=function(e){var t=Object(u.useState)(!1),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(u.useState)(e.status),o=Object(i.a)(r,2),l=o[0],p=o[1];Object(u.useEffect)((function(){p(l)}),[e,l]);return c.a.createElement(c.a.Fragment,null,n?c.a.createElement("div",null,c.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(e){p(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(l)},value:l})):c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"--------")))},m=function(e){return e.profile?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9P72qc0tQJD-gL7SmW6l5fo-D1naUm57xRQ&usqp=CAU",alt:""})),c.a.createElement("img",{src:e.profile.photos.large,alt:""}),c.a.createElement(p,{status:e.status,updateStatus:e.updateStatus})):c.a.createElement(l.a,null)},f=a(98),d=a(90),b=a(91),h=a(296),E=a.n(h),g=a(297),v=a.n(g),j=function(e){return c.a.createElement("div",{className:v.a.item},c.a.createElement("img",{src:"https://www.vokrug.tv/pic/product/6/f/e/2/6fe2523ab4de68e3981b29c9f9f00f17.jpeg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"Like - "),e.likeCounter))},P=a(56),S=a(33),k=Object(P.a)(10),O=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(j,{message:e.message,likeCounter:e.likesCounter,key:e.id})}));return c.a.createElement("div",{className:E.a.postsBlock},c.a.createElement("h3",null,"My Posts"),c.a.createElement("div",null,c.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPostText)}})),c.a.createElement("div",{className:E.a.posts},t))})),y=Object(b.a)({form:"myPostsaddMessageForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement(d.a,{component:S.b,name:"newPostText",placeholder:"text",validate:[P.b,k]})," ",c.a.createElement("br",null),c.a.createElement("button",null,"Add Post"))})),_=O,x=a(17),C=Object(x.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(f.a)(t))}}}))(_),w=function(e){return c.a.createElement("div",null,c.a.createElement(m,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(C,null))},A=a(9),B=a(10),U=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;console.log(e),e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(w,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(c.a.Component);t.default=Object(B.compose)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:f.d,getStatus:f.c,updateStatus:f.e}),A.f)(U)}}]);
//# sourceMappingURL=3.f43d3d9b.chunk.js.map