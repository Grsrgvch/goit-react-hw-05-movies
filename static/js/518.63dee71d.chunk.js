"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[518],{223:function(n,t,e){e.d(t,{M1:function(){return x},Si:function(){return p},TP:function(){return u},XT:function(){return s},tx:function(){return l}});var r=e(861),i=e(687),o=e.n(i),a=e(243),c="0ca8801a722358b1eb2bcacbc83f2a91",s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},518:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,i,o,a,c,s,p,u,x,l,f,d,m,h,g,v=e(861),Z=e(439),b=e(687),k=e.n(b),w=e(791),j=e(689),_=e(223),y=e(168),z=e(112),I=e(87),S=z.Z.div(r||(r=(0,y.Z)(["\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n"]))),U=z.Z.button(i||(i=(0,y.Z)(["\n  background-color: #e50914;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 16px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n"]))),C=z.Z.img(o||(o=(0,y.Z)(["\n  max-width: 200px;\n  height: auto;\n  margin-bottom: 5px;\n  margin-top: 5px;\n"]))),T=z.Z.h3(a||(a=(0,y.Z)(["\n  font-size: 22px;\n  margin: 0;\n"]))),E=z.Z.p(c||(c=(0,y.Z)(["\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 5pxpx;\n"]))),G=z.Z.h4(s||(s=(0,y.Z)(["\n  font-size: 16px;\n  margin-top: 20px;\n  margin-bottom: 5px;\n  margin: 0px;\n"]))),O=z.Z.p(p||(p=(0,y.Z)(["\n  font-size: 10px;\n  width: 700px;\n  margin-top: 5px;\n  text-align: center;\n\n  margin-inline-start: auto;\n  margin-inline-end: auto;\n"]))),P=z.Z.h4(u||(u=(0,y.Z)(["\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]))),q=z.Z.ul(x||(x=(0,y.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),A=z.Z.li(l||(l=(0,y.Z)(["\n  margin-bottom: 0px;\n  font-size: 10px;\n"]))),D=z.Z.p(f||(f=(0,y.Z)(["\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]))),F=z.Z.ul(d||(d=(0,y.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n"]))),M=z.Z.li(m||(m=(0,y.Z)(["\n  font-size: 12px;\n  margin-bottom: 5px;\n"]))),N=(0,z.Z)(I.rU)(h||(h=(0,y.Z)(["\n  color: #e50914;\n  text-decoration: none;\n  font-size: 12px;\n"]))),R=(0,z.Z)(I.rU)(g||(g=(0,y.Z)(["\n  color: #e50914;\n  text-decoration: none;\n  font - size: 12px;\n"]))),X=e(184),Y=function(){var n=(0,j.UO)(),t=(0,w.useState)(),e=(0,Z.Z)(t,2),r=e[0],i=e[1],o=(0,w.useState)(),a=(0,Z.Z)(o,2),c=a[0],s=a[1],p=(0,j.s0)();return(0,w.useEffect)((function(){function t(){return(t=(0,v.Z)(k().mark((function t(){var e,r,o,a;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.TP(n.movieId);case 3:e=t.sent,r=e.data,i(r),o=new Date(r.release_date),a=o.getFullYear(),s(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error!");case 14:return t.prev=14,t.finish(14);case 16:case"end":return t.stop()}}),t,null,[[0,11,14,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.movieId]),(0,X.jsx)(S,{children:r&&(0,X.jsxs)("div",{children:[(0,X.jsx)(U,{onClick:function(){p(-1)},children:"Go back"}),r.poster_path?(0,X.jsx)(C,{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:r.original_title}):(0,X.jsx)(C,{src:"https://kartinki.pics/uploads/posts/2022-03/1646240334_2-kartinkin-net-p-kartinki-krasivaya-noch-2.jpg",alt:r.original_title}),(0,X.jsxs)(T,{children:[r.original_title," (",c,")"]}),(0,X.jsxs)(E,{children:["User Score: ",Number.parseInt(10*r.vote_average),"%"]}),(0,X.jsx)(G,{children:"Overview"}),(0,X.jsx)(O,{children:r.overview}),(0,X.jsx)(P,{children:"Genres"}),(0,X.jsx)(q,{children:r.genres.map((function(n){return(0,X.jsx)(A,{children:n.name},n.id)}))}),(0,X.jsx)(D,{children:"Additional Information"}),(0,X.jsxs)(F,{children:[(0,X.jsx)(M,{children:(0,X.jsx)(N,{to:"/movies/".concat(n.movieId,"/cast"),children:"Cast"})}),(0,X.jsx)(M,{children:(0,X.jsx)(R,{to:"/movies/".concat(n.movieId,"/reviews"),children:"Reviews"})})]}),(0,X.jsx)(j.j3,{})]})})}}}]);
//# sourceMappingURL=518.63dee71d.chunk.js.map