"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[272],{272:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(165),a=n(861),c=n(885),s=n(791),i=n(689),o=n(731),u=n(476),l="MovieDatails_link__AJ0te",p="MovieDatails_back-button__sHK0H",d="MovieDatails_wrapper__WazMR",v="MovieDatails_details__Kzfzz",f="MovieDatails_additional__kgxSn",h=n(184),x=function(){var e,t,n=(0,s.useState)(),x=(0,c.Z)(n,2),_=x[0],m=x[1],w=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Y5)(t);case 3:n=e.sent,m(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Z=(0,i.UO)().movieId;if((0,s.useEffect)((function(){g(Z)}),[]),_)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:d,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(o.rU,{to:w,className:l,children:(0,h.jsx)("button",{type:"button",className:p,children:"\u2190Go back"})}),(0,h.jsx)("img",{src:_.poster_path?"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(_.poster_path):"https://via.placeholder.com/220x330?text=Theres+no+photo",alt:"".concat(_.title)})]}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("h2",{children:_.title}),(0,h.jsxs)("span",{children:["User score: ",Math.round(10*_.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:_.overview?_.overview:"There's no overview"}),(0,h.jsx)("h3",{children:"Generes"}),(0,h.jsx)("p",{children:_.genres&&_.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,h.jsxs)("div",{className:f,children:["Additional information:",(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"cast",state:{from:"".concat(w)},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"reviews",state:{from:"".concat(w)},children:"Reviews"})})]})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(i.j3,{})})]})}},476:function(e,t,n){n.d(t,{Hx:function(){return d},LI:function(){return u},Y5:function(){return l},uV:function(){return p},wr:function(){return o}});var r=n(165),a=n(861),c=n(388),s="ba9435622413df35cd8d080b147a1f2b",i="https://api.themoviedb.org/3/",o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"trending/movie/day?api_key=").concat(s),e.next=3,c.Z.get(t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=3,c.Z.get(n);case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"),e.next=3,c.Z.get(n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,c.Z.get(n);case 3:return a=e.sent,e.abrupt("return",a.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,c.Z.get(n);case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=272.5792b9c3.chunk.js.map