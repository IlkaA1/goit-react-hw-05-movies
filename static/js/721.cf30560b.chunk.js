"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[721],{687:function(n,t,e){e.d(t,{Dz:function(){return s},WK:function(){return l},_W:function(){return f},kw:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="8ba51ca9b1ac445c77c0779168705c6a",o="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/all/day?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.next=5,e;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?query=").concat(t,"&api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},178:function(n,t,e){e.d(t,{Z:function(){return i}});var r="ListMovies_list__jtcUy",a=e(689),c=e(87),u=e(184),i=function(n){var t=n.detailsFilm,e=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsx)("ul",{className:r,children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.name||n.title})},n.id)}))})})}},721:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(687),o=e(791),s="home_title__MzCla",f=e(686),p=e.n(f),l=e(178),v=e(184),h=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Dz)().then((function(n){c(n.data.results)}));case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),t=n.t0.error,p().Notify.failure(t);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:s,children:"Trending today"}),(0,v.jsx)(l.Z,{detailsFilm:e})]})}}}]);
//# sourceMappingURL=721.cf30560b.chunk.js.map