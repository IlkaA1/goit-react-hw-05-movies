"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{687:function(t,n,e){e.d(n,{Dz:function(){return o},WK:function(){return l},_W:function(){return p},kw:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243),s="8ba51ca9b1ac445c77c0779168705c6a",i="https://api.themoviedb.org/3",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/all/day?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.next=5,e;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},740:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),a=e(439),c=e(757),u=e.n(c),s=e(689),i=e(791),o=e(687),p={acter:"cast_acter__DEsIn",acterCards:"cast_acterCards__uVbaa"},f=e(686),l=e.n(f),h=e(184),d=function(){var t=(0,i.useState)(),n=(0,a.Z)(t,2),e=n[0],c=n[1],f=(0,s.UO)().filmId;return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.kw)(n,"credits").then((function(t){c(t.data.cast)}));case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),e=t.t0.error,l().Notify.failure(e);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(n){return t.apply(this,arguments)}}();f&&t(f)}),[f]),(0,h.jsx)("div",{className:p.ulContainer,children:e&&(0,h.jsx)("ul",{className:p.acter,children:e.map((function(t){return(0,h.jsxs)("li",{className:p.acterCards,children:[(0,h.jsx)("img",{width:"100",src:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://sahagroupfair.com/assets/frontend/img/image-not-available.png",alt:t.name}),(0,h.jsx)("h2",{children:t.name}),(0,h.jsxs)("h2",{children:["Character: ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=740.85ff129e.chunk.js.map