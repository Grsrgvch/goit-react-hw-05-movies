"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[851],{223:function(n,t,e){e.d(t,{M1:function(){return f},Si:function(){return s},TP:function(){return p},XT:function(){return u},tx:function(){return x}});var r=e(861),a=e(687),i=e.n(a),o=e(243),c="0ca8801a722358b1eb2bcacbc83f2a91",u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},851:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,i,o,c,u,s=e(861),p=e(439),f=e(687),x=e.n(f),l=e(791),h=e(223),d=e(689),g=e(87),m=e(14),v=e(168),b=e(112),w=b.Z.div(r||(r=(0,v.Z)(["\n  background-color: #000;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Z=b.Z.h1(a||(a=(0,v.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),k=b.Z.form(i||(i=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n\n  button {\n    background-color: #e50914;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 16px;\n  }\n\n  input {\n    font-size: 16px;\n    padding: 10px;\n    margin-left: 10px;\n  }\n"]))),y=b.Z.ul(o||(o=(0,v.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 20px;\n"]))),_=b.Z.li(c||(c=(0,v.Z)(["\n  width: calc(16.666% - 20px);\n  margin: 0;\n  &:hover {\n    box-shadow: 12px -9px 5px 0px rgba(232, 227, 227, 0.75);\n    -webkit-box-shadow: 12px -9px 5px 0px rgba(232, 227, 227, 0.75);\n    -moz-box-shadow: 12px -9px 5px 0px rgba(232, 227, 227, 0.75);\n  }\n"]))),j=(0,b.Z)(g.rU)(u||(u=(0,v.Z)(["\n  color: #fff;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  p {\n    font-size: 18px;\n    margin-top: 10px;\n    text-align: center;\n  }\n\n  &:hover {\n    text-shadow: 7px -4px 2px rgba(218, 213, 213, 0.6);\n  }\n"]))),S=e(184),z=function(){var n,t=(0,l.useState)(""),e=(0,p.Z)(t,2),r=e[0],a=e[1],i=(0,l.useState)([]),o=(0,p.Z)(i,2),c=o[0],u=o[1],f=(0,d.TH)(),v=(0,g.lr)(),b=(0,p.Z)(v,2),z=b[0],T=b[1],q=null!==(n=z.get("query"))&&void 0!==n?n:"";return(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(x().mark((function n(){var t,e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==q){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,h.XT(q);case 4:t=n.sent,e=t.data.results,u(e);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[q]),(0,S.jsxs)(w,{children:[(0,S.jsx)(Z,{children:"Search Movies"}),(0,S.jsxs)(k,{onSubmit:function(n){if(n.preventDefault(),""===r)return m.ZP.error("Fill in the search bar");z.set("query",r),T(z)},children:[(0,S.jsx)("button",{type:"submit",children:"Search"}),(0,S.jsx)("input",{type:"text",onChange:function(n){a(n.target.value)}})]}),(0,S.jsx)(y,{children:c.map((function(n){return(0,S.jsx)(_,{children:(0,S.jsxs)(j,{to:"/movies/".concat(n.id),state:{from:f},children:[n.poster_path?(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.original_title}):(0,S.jsx)("img",{src:"https://kartinki.pics/uploads/posts/2022-03/1646240334_2-kartinkin-net-p-kartinki-krasivaya-noch-2.jpg",alt:n.original_title}),(0,S.jsx)("p",{children:n.original_title})]})},n.id)}))})]})}}}]);
//# sourceMappingURL=851.c45432ec.chunk.js.map