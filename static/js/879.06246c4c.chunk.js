"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[879],{879:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(165),a=e(982),u=e(861),c=e(885),i=e(791),o=e(476),s=e(184),f=function(t){return(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.query.value;t.onSubmit(e)},children:[(0,s.jsx)("input",{type:"text",name:"query"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},p=e(731),l=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],l=n[1],v=(0,p.lr)(),d=(0,c.Z)(v,2),h=d[0],g=d[1],Z=h.get("query"),m=function(){var t=(0,u.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.LI)(n);case 3:e=t.sent,l((0,a.Z)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){l([]),Z&&m(Z)}),[Z]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{onSubmit:function(t){return g({query:t})}}),e.length>0?(0,s.jsx)("ul",{children:e.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(p.rU,{to:"".concat(t.id),state:{from:"/movies/?".concat(h)},children:t.title})},t.id)}))}):Z&&(0,s.jsx)("div",{children:"Nothing found. Try again."})]})}},476:function(t,n,e){e.d(n,{Hx:function(){return l},LI:function(){return s},Y5:function(){return f},uV:function(){return p},wr:function(){return o}});var r=e(165),a=e(861),u=e(388),c="ba9435622413df35cd8d080b147a1f2b",i="https://api.themoviedb.org/3/",o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n,e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"trending/movie/day?api_key=").concat(c),t.next=3,u.Z.get(n);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),t.next=3,u.Z.get(e);case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US"),t.next=3,u.Z.get(e);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"),t.next=3,u.Z.get(e);case 3:return a=t.sent,t.abrupt("return",a.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),t.next=3,u.Z.get(e);case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=879.06246c4c.chunk.js.map