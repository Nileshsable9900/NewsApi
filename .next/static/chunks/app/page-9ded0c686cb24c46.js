(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{885:function(e,t,n){Promise.resolve().then(n.bind(n,4625))},8930:function(e,t,n){"use strict";n.d(t,{I:function(){return r},db:function(){return o}});var s=n(994),l=n(3085),a=n(4086),i=(0,s.ZF)({apiKey:"AIzaSyAfqPdM54aBRjZzECKmTeqAcSERXFEqlr8",authDomain:"authenticator-85102.firebaseapp.com",projectId:"authenticator-85102",storageBucket:"authenticator-85102.appspot.com",messagingSenderId:"594122394192",appId:"1:594122394192:web:ea4a9089445b11a5215f55"}),r=(0,l.v0)(i),o=(0,a.ad)(i)},4625:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var s=n(7437),l=n(3198),a=n(2265),i=n(7356),r=n(2817),o=n(6687),c=n(4670),u=n(44),d=n(4447),f=n(2067),m=n.n(f),x=function(e){var t=e.data,n=e.enabled,a=(0,l.I0)();return(0,s.jsxs)("div",{onClick:function(){a((0,d.dW)(t))},className:" ".concat(n?"w-[150px] sm:w-[280px] md:w-[230px] lg:w-[300px] 2xl:w-[350px]":"w-full md:w-[400px] lg:w-[500px] xl:w-[600px]"," flex flex-col items-start justify-start rounded-2xl shadow-lg mx-2 my-2 bg-slate-200 p-2 card"),children:[(0,s.jsx)("span",{className:"text-xs md:text-sm my-2 italic",children:null==t?void 0:t.title}),(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)("img",{src:null==t?void 0:t.urlToImage,alt:"img",className:"w-full h-2/12"})}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-between items-center w-full text-xs md:text-sm my-2",children:[(0,s.jsx)("span",{children:null==t?void 0:t.author}),(0,s.jsx)("span",{children:m()(null==t?void 0:t.publishedAt).format("ll")})]}),(0,s.jsx)("h1",{className:"text-xs text-center md:text-sm my-2 w-full italic",children:"Open, Read, Save"})]})},h=function(){var e,t=(0,c._)((0,a.useState)([]),2),n=t[0],i=t[1],r=(0,l.v9)(function(e){return e.news}).displayGrid,f=(0,l.I0)(),m=(e=(0,o._)(function(){var e,t,n;return(0,u.Jh)(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6ce1d735abd243319604826699113465")];case 1:return[4,s.sent().json()];case 2:return(e=s.sent()).articles.length>0&&(f((0,d.gM)(null===(t=e)||void 0===t?void 0:t.articles)),i(null===(n=e)||void 0===n?void 0:n.articles)),[3,4];case 3:return console.log(s.sent()),[3,4];case 4:return[2]}})}),function(){return e.apply(this,arguments)}),h=function(){var e=JSON.parse(localStorage.getItem("news"));i(null==e?void 0:e.news)};return(0,a.useEffect)(function(){m(),h()},[]),(0,s.jsx)("div",{className:" ".concat(r?"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2":"flex flex-wrap justify-evenly gap-4"," "),children:n&&n.length>0?n.map(function(e,t){return(0,s.jsx)(x,{enabled:r,data:e},t)}):"No data found. Also Note: Requests from the browser are not allowed on the Developer plan, except from localhost. That's why unable to fetch data."})},v=n(5029),g=n(8930),p=n(4086),w=function(){var e,t=(0,c._)((0,a.useState)([]),2),n=t[0],i=t[1],r=(0,l.v9)(function(e){return e.user}),f=(0,l.v9)(function(e){return e.news}),m=null==f?void 0:f.displayGrid,h=(0,l.I0)(),w=function(){var e=JSON.parse(localStorage.getItem("news"));i(null==e?void 0:e.savedNews)},j=(e=(0,o._)(function(){var e,t,n,s,l,a;return(0,u.Jh)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=(0,p.hJ)(g.db,"news"),s=(0,p.IO)(n,(0,p.ar)("email","==",null===(t=r)||void 0===t?void 0:null===(e=t.user)||void 0===e?void 0:e.email)),[4,(0,p.PL)(s)];case 1:return(l=o.sent()).size>0&&(a=[],l.forEach(function(e){a.push((0,v._)({},e.data()))}),h((0,d.KT)(a)),i(a)),[3,3];case 2:return console.error("Error fetching news data:",o.sent()),[3,3];case 3:return[2]}})}),function(){return e.apply(this,arguments)});return(0,a.useEffect)(function(){j(),w()},[]),(0,s.jsx)("div",{className:" ".concat(m?"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2":"flex flex-wrap justify-evenly gap-4"," "),children:n&&n.length>0?n.map(function(e,t){return(0,s.jsx)(x,{enabled:m,data:e},t)}):"No Saved News"})};function j(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var y=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-[98vw] mx-0 sm:mx-4 px-2 py-8 sm:px-0",children:(0,s.jsxs)(r.O.Group,{children:[(0,s.jsxs)(r.O.List,{className:"flex space-x-1 rounded-xl bg-blue-900/20 p-1",children:[(0,s.jsx)(r.O,{as:a.Fragment,className:function(e){return j("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",e.selected?"bg-white shadow":"text-blue-100 hover:bg-white/[0.12] hover:text-white")},children:(0,s.jsx)("button",{children:"Popular"})}),(0,s.jsx)(r.O,{as:a.Fragment,className:function(e){return j("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",e.selected?"bg-white shadow":"text-blue-100 hover:bg-white/[0.12] hover:text-white")},children:(0,s.jsx)("button",{children:"Favorite"})})]}),(0,s.jsxs)(r.O.Panels,{children:[(0,s.jsx)(r.O.Panel,{className:j("rounded-xl bg-white p-3","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"),children:(0,s.jsx)(h,{})}),(0,s.jsx)(r.O.Panel,{className:j("rounded-xl bg-white p-3","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"),children:(0,s.jsx)(w,{})})]})]})})})},N=n(8965),b=n(9805),S=n(4587),E=n(1590),O=n(4089),I=n(171),_=function(){var e,t,n=(0,c._)((0,a.useState)(!1),2),i=n[0],r=n[1],f=(0,l.I0)(),x=(0,l.v9)(function(e){return e.news}),h=(null==x?void 0:x.isDialog)||!1,w=null==x?void 0:x.dialogData,j=(null==x?void 0:x.savedNews)||[],y=(0,l.v9)(function(e){return e.user}),_=(e=(0,o._)(function(){var e,t,n,s,l,a,r,c;return(0,u.Jh)(this,function(m){switch(m.label){case 0:return s=(0,p.IO)((0,p.hJ)(g.db,"news"),(0,p.ar)("email","==",null===(t=y)||void 0===t?void 0:null===(e=t.user)||void 0===e?void 0:e.email),(0,p.ar)("title","==",null===(n=w)||void 0===n?void 0:n.title)),[4,(0,p.PL)(s)];case 1:var x;if(!((l=m.sent()).size>0))return[3,2];return l.forEach((x=(0,o._)(function(e){return(0,u.Jh)(this,function(t){switch(t.label){case 0:return[4,(0,p.oe)(e.ref)];case 1:return t.sent(),[2]}})}),function(e){return x.apply(this,arguments)})),[3,4];case 2:return c=(0,N._)((0,v._)({},w),{email:null===(r=y)||void 0===r?void 0:null===(a=r.user)||void 0===a?void 0:a.email}),[4,(0,p.ET)((0,p.hJ)(g.db,"news"),c)];case 3:m.sent(),m.label=4;case 4:return f((0,d.CG)(w)),f((0,d.dW)(null)),i?I.Am.success("Unsaved"):I.Am.success("Saved"),[2]}})}),function(){return e.apply(this,arguments)}),G=function(){f((0,d.dW)(null))};(0,a.useEffect)(function(){-1===(j.findIndex(function(e){return(null==e?void 0:e.title)===(null==w?void 0:w.title)})||[])?r(!1):r(!0)},[w]);var T=(0,a.useRef)(null);return(0,s.jsx)("div",{children:(0,s.jsx)(b.u.Root,{show:h,as:a.Fragment,children:(0,s.jsx)(S.V,{as:"div",className:"relative z-10 ",initialFocus:T,onClose:G,children:(0,s.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto bg-black/30 bg-opacity-25",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center",children:(0,s.jsx)(b.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)(S.V.Panel,{className:"w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,s.jsx)(S.V.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900 border-b-2 pb-2",children:null==w?void 0:w.title}),(0,s.jsxs)("div",{className:"flex flex-col justify-center items-start border-b-2",children:[(0,s.jsx)("span",{className:"text-xs md:text-sm my-2 italic",children:null==w?void 0:w.description}),(0,s.jsx)("span",{className:"text-xs md:text-sm my-2 italic",children:null==w?void 0:w.content}),(0,s.jsxs)("span",{className:"text-xs md:text-sm my-2 italic",children:["Source: ",(0,s.jsx)("a",{href:null==w?void 0:w.url,target:"_blank",className:"text-blue-500",children:null==w?void 0:null===(t=w.source)||void 0===t?void 0:t.name})]}),(0,s.jsx)("img",{src:null==w?void 0:w.urlToImage,alt:"img",className:"w-full h-[40vw] lg:w-6/12 lg:h-[30vw] mx-auto my-2"}),(0,s.jsxs)("div",{className:"flex justify-between items-center w-full text-xs md:text-sm my-2 italic",children:[(0,s.jsx)("span",{children:null==w?void 0:w.author}),(0,s.jsx)("span",{children:m()(null==w?void 0:w.publishedAt).format("ll")})]})]}),(0,s.jsxs)("div",{className:"flex justify-between items-center w-full mt-4",children:[(0,s.jsxs)("span",{className:"flex",children:[i?"Saved: ":"Save It: ",(0,s.jsx)(E.Z,{onClick:_,className:"w-6 h-6 cursor-pointer ".concat(i?"text-yellow-500":"text-slate-300")})]}),(0,s.jsxs)("span",{onClick:G,className:"flex cursor-pointer",children:[(0,s.jsx)(O.Z,{className:"w-6 h-6"}),"Back"]})]})]})})})})})})})},G=function(){var e=(0,l.v9)(function(e){return e.news}).displayGrid,t=(0,l.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-end items-center mr-4 gap-2",children:[(0,s.jsx)("span",{children:"Grid View:"}),(0,s.jsx)(i.r,{checked:e,onChange:function(){t((0,d.aX)())},className:"".concat(e?"bg-blue-600":"bg-gray-200"," relative inline-flex h-6 w-11 items-center rounded-full"),children:(0,s.jsx)("span",{className:"".concat(e?"translate-x-6":"translate-x-1"," inline-block h-4 w-4 transform rounded-full bg-white transition")})})]}),(0,s.jsx)(y,{}),(0,s.jsx)(_,{})]})};function T(){var e=(0,l.v9)(function(e){return e.user});return(0,s.jsx)("div",{className:"mt-4",children:(null==e?void 0:e.isAuth)?(0,s.jsx)(G,{}):(0,s.jsx)("h1",{className:"text-center italic font-bold",children:"Please Login First!"})})}},4447:function(e,t,n){"use strict";n.d(t,{CG:function(){return f},KT:function(){return c},aX:function(){return u},dW:function(){return d},gM:function(){return o}});var s=n(5029),l=n(8965),a=n(1801),i=(0,n(64).oM)({name:"newsData",initialState:window.localStorage&&JSON.parse(localStorage.getItem("news"))||{news:null,savedNews:null,displayGrid:!1,isDialog:!1,dialogData:null},reducers:{STORENEWSDATA:function(e,t){var n=(0,l._)((0,s._)({},e),{news:t.payload});return localStorage.setItem("news",JSON.stringify(n)),n},STORESAVEDNEWS:function(e,t){var n=(0,l._)((0,s._)({},e),{savedNews:t.payload});return localStorage.setItem("news",JSON.stringify(n)),n},TOGGLEVIEW:function(e,t){var n=(0,l._)((0,s._)({},e),{displayGrid:!e.displayGrid});return localStorage.setItem("news",JSON.stringify(n)),n},TOGGLEDIALOG:function(e,t){var n=(0,l._)((0,s._)({},e),{isDialog:!e.isDialog,dialogData:t.payload});return localStorage.setItem("news",JSON.stringify(n)),n},TOGGLESAVEDNEWS:function(e,t){var n=t.payload,i=e.savedNews||[];if(-1===i.findIndex(function(e){return e.title===n.title})){var r=(0,a._)(i).concat([n]),o=(0,l._)((0,s._)({},e),{savedNews:r});return localStorage.setItem("news",JSON.stringify(o)),o}var c=i.filter(function(e){return e.title!==n.title}),u=(0,l._)((0,s._)({},e),{savedNews:c});return localStorage.setItem("news",JSON.stringify(u)),u}}}),r=i.actions,o=r.STORENEWSDATA,c=r.STORESAVEDNEWS,u=r.TOGGLEVIEW,d=r.TOGGLEDIALOG,f=r.TOGGLESAVEDNEWS;t.ZP=i.reducer}},function(e){e.O(0,[358,487,990,48,491,971,596,744],function(){return e(e.s=885)}),_N_E=e.O()}]);