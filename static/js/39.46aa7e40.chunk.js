"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[39],{6039:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(5861),n=a(9439),s=a(7757),c=a.n(s),i=a(3728),o=a(1087),u="DatailsMovie_link__-sg-5",l="DatailsMovie_container__3rQxt",p="DatailsMovie_movieTitle__puqrp",v="DatailsMovie_text__VjhjJ",h="DatailsMovie_textData__zHoV-",m="DatailsMovie_textInfo__EFiOl",f="DatailsMovie_blockInfo__0Trqe",d="DatailsMovie_addLink__hCm9e",_="DatailsMovie_itemDetail__2r7Zi",x="DatailsMovie_textRating__iM9v7",w=a(184),g=function(e){var t=e.title,a=e.overview,r=e.voteAverage,n=e.url,s=e.movieRelise,c=e.backStap;return(0,w.jsxs)("section",{className:l,children:[(0,w.jsx)(o.Link,{to:c.current,className:u,children:"< Back to go"}),(0,w.jsxs)("h1",{className:p,children:[t," "]}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("img",{src:n,alt:"poster".concat(t),width:250}),(0,w.jsxs)("p",{className:"".concat(v," ").concat(m),children:[a,(0,w.jsxs)("span",{className:h,children:["Release date: ",s]})]}),(0,w.jsxs)("p",{className:x,children:[(0,w.jsx)("span",{children:"Rating:"})," ",(0,w.jsxs)("span",{children:[r," ",(0,w.jsx)(i.CvE,{})]})," "]})]}),(0,w.jsxs)("ul",{className:_,children:[(0,w.jsx)("li",{className:u,children:(0,w.jsx)(o.Link,{className:d,to:"cast",children:"Cast"})}),(0,w.jsx)("li",{className:u,children:(0,w.jsx)(o.Link,{className:d,to:"reviews",children:"Reviews"})})]})]})},k=a(2791),j=a(7689),y=a(6795),Z=a(5967),b=function(){var e,t,a=(0,j.UO)().id,s=(0,k.useState)(!1),i=(0,n.Z)(s,2),o=i[0],u=i[1],l=(0,k.useState)(""),p=(0,n.Z)(l,2),v=p[0],h=p[1],m=(0,k.useState)(""),f=(0,n.Z)(m,2),d=f[0],_=f[1],x=(0,k.useState)(""),b=(0,n.Z)(x,2),A=b[0],D=b[1],N=(0,k.useState)(""),M=(0,n.Z)(N,2),S=M[0],E=M[1],I=(0,k.useState)(""),P=(0,n.Z)(I,2),R=P[0],C=P[1],T=(0,j.TH)(),L=(0,k.useRef)(null!==(e=null===(t=T.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");function q(){return q=(0,r.Z)(c().mark((function e(t){var a,r,n,s,i,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,Z.TP)(t);case 4:a=e.sent,r=a.title,n=a.overview,s=a.vote_average,i=a.poster_path,o=a.release_date,h(r),_(n),D(s),E(i),C(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),y.Am.error("API NOT FAUND: ".concat(e.t0.message));case 16:return e.prev=16,u(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])}))),q.apply(this,arguments)}(0,k.useEffect)((function(){a&&function(e){q.apply(this,arguments)}(a)}),[a]);var O=S?"".concat("https://image.tmdb.org/t/p/w500").concat(S):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,w.jsxs)("section",{children:[(0,w.jsx)(g,{isLoading:o,title:v,overview:d,voteAverage:A,url:O,movieRelise:R,backStap:L}),(0,w.jsx)(j.j3,{})]})}},5967:function(e,t,a){a.d(t,{Df:function(){return l},TP:function(){return v},vC:function(){return d},yz:function(){return m}});var r=a(5861),n=a(7757),s=a.n(n),c=a(1243),i=a(6795),o="b283a210ed534a6a364c9fa9b60e8619",u="https://api.themoviedb.org/3";function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var a,r,n,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u,"/trending/movie/day"),r={params:{api_key:o,page:t}},e.prev=2,e.next=5,(0,c.Z)(a,r);case 5:return n=e.sent,e.next=8,n.data;case 8:return l=e.sent,e.abrupt("return",l);case 12:throw e.prev=12,e.t0=e.catch(2),i.Am.error("API not faund: ".concat(e.t0.message)),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var a,r,n,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u,"/movie/").concat(t),r={params:{api_key:o,movie_id:t}},e.prev=2,e.next=5,(0,c.Z)(a,r);case 5:return n=e.sent,e.next=8,n.data;case 8:return l=e.sent,e.abrupt("return",l);case 12:throw e.prev=12,e.t0=e.catch(2),i.Am.error("API not faund: ".concat(e.t0.message)),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function m(e,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t,a){var r,n,l,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u,"/movie/").concat(t,"/").concat(a),n={params:{api_key:o,movie_id:t}},e.prev=2,e.next=5,(0,c.Z)(r,n);case 5:return l=e.sent,e.next=8,l.data;case 8:return p=e.sent,e.abrupt("return",p);case 12:throw e.prev=12,e.t0=e.catch(2),i.Am.error("API not faund: ".concat(e.t0.message)),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function d(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(t){var a,r,n,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u,"/search/movie"),r={params:{api_key:o,query:t}},e.prev=2,e.next=5,(0,c.Z)(a,r);case 5:return n=e.sent,e.next=8,n.data;case 8:return l=e.sent,e.abrupt("return",l);case 12:throw e.prev=12,e.t0=e.catch(2),i.Am.error("API not faund: ".concat(e.t0.message)),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=39.46aa7e40.chunk.js.map