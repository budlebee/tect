_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"9lHD":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return g})),r.d(t,"default",(function(){return m}));var n=r("o0o1"),c=r.n(n),i=r("rePB"),a=r("HaE+"),o=r("ODXe"),s=r("nKUr"),l=r("q1tI"),u=r("YFqc"),b=r.n(u),d=(r("a6RD"),r("fR0J")),j=(r("Tb2b"),r("VXEj")),p=r("2/Rp");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){if(!e)return 0;for(var t=0,r=0,n=Object.entries(e);r<n.length;r++){var c=Object(o.a)(n[r],2);c[0],c[1];t+=1}return t},g=!0;function m(e){console.log("\ub80c\ub354\ub9c1");var t=Object(l.useState)(e.articles),r=t[0],n=t[1],i=Object(l.useState)(e.articles[0].id),o=i[0],u=i[1];function O(){return(O=Object(a.a)(c.a.mark((function e(){var t,i,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=d.a.collection("articles").doc(o),e.next=4,t.get();case 4:return i=e.sent,a=d.a.collection("articles").orderBy("createdAt","desc").startAfter(i).limit(7).get(),e.next=8,a;case 8:s=e.sent.docs.map((function(e){var t=JSON.parse(JSON.stringify(e.data()));return f({id:e.id},t)})),n(r.concat(s)),u(s.slice(-1)[0].id),e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log("error: ",e.t0),alert("\uae00 \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\ub294\ub370 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 18:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"mainContainer",children:[Object(s.jsx)(j.b,{style:{minHeight:"350px"},dataSource:r,renderItem:function(e){return Object(s.jsx)(j.b.Item,{style:{width:"80%"},children:Object(s.jsx)(j.b.Item.Meta,{title:Object(s.jsx)(b.a,{href:"/articles/[id]",as:"/articles/"+e.id,children:Object(s.jsx)("a",{style:{color:"black"},children:e.title})}),description:Object(s.jsxs)(s.Fragment,{children:["\ub313\uae00 ",h(e.comments),"\uac1c"]})})},e.id)}},"List"),Object(s.jsx)("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:Object(s.jsx)(p.a,{onClick:function(){return O.apply(this,arguments)},children:"loading more"})})]})})}},g9xC:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/main",function(){return r("9lHD")}])}},[["g9xC",2,1,7,4,8,5,6,9,11,14,19,0]]]);