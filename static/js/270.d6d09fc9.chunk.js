"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{687:function(n,e,t){t.d(e,{Dz:function(){return s},WK:function(){return h},_W:function(){return f},kw:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="8ba51ca9b1ac445c77c0779168705c6a",o="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/all/day?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.next=5,t;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?query=").concat(e,"&api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},270:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(689),o=t(791),s=t(687),f="reviews_details__wDiba",p=t(686),h=t.n(p),v=t(184),l=function(){var n=(0,o.useState)(),e=(0,a.Z)(n,2),t=e[0],c=e[1],p=(0,i.UO)().filmId;return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.kw)(e,"reviews").then((function(n){n.data.results.length>0&&c(n.data.results)}));case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),t=n.t0.error,h().Notify.failure(t);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}();p&&n(p)}),[p]),(0,v.jsx)("div",{className:f,children:t?(0,v.jsx)("div",{children:t.map((function(n){return(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:["Author:",n.author]}),(0,v.jsx)("p",{children:n.content})]},n.id)}))}):(0,v.jsx)("p",{children:"There are no reviews for this movie"})})}}}]);
//# sourceMappingURL=270.d6d09fc9.chunk.js.map