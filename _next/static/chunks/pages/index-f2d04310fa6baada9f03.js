_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{RNiq:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return i}));var n=c("nKUr"),r=(c("vRNQ"),c("YFqc")),s=c.n(r);c("q1tI");function i(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(s.a,{href:"/techtree/physics",as:"/techtree/physics",children:Object(n.jsx)("a",{children:Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("img",{src:"../static/icons/physics.svg",height:"70",width:"70"}),Object(n.jsx)("br",{}),"Physics"]})})}),Object(n.jsx)(s.a,{href:"/techtree/math",as:"/techtree/math",children:Object(n.jsx)("a",{children:Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("img",{src:"../static/icons/math.svg",height:"70",width:"70"}),Object(n.jsx)("br",{}),"Mathematics"]})})}),Object(n.jsx)(s.a,{href:"/techtree/electricalengineering",as:"/techtree/electricalengineering",children:Object(n.jsx)("a",{children:Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("img",{src:"../static/icons/electricity.svg",height:"50",width:"50"}),Object(n.jsx)("br",{}),"Electrical",Object(n.jsx)("br",{}),"Engineering"]})})}),Object(n.jsx)(s.a,{href:"/techtree/economy",as:"/techtree/economy",children:Object(n.jsx)("a",{children:Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("img",{src:"../static/icons/economy.svg",height:"70",width:"70"}),Object(n.jsx)("br",{}),"economics"]})})})]})})}},YFqc:function(e,t,c){e.exports=c("cTJO")},cTJO:function(e,t,c){"use strict";var n=c("J4zp"),r=c("284h");t.__esModule=!0,t.default=void 0;var s,i=r(c("q1tI")),o=c("elyg"),a=c("nOHt"),l=new Map,f=window.IntersectionObserver,h={};var u=function(e,t){var c=s||(f?s=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return c?(c.observe(e),l.set(e,t),function(){try{c.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,c,n){(0,o.isLocalURL)(t)&&(e.prefetch(t,c,n).catch((function(e){0})),h[t+"%"+c]=!0)}var j=function(e){var t=!1!==e.prefetch,c=i.default.useState(),r=n(c,2),s=r[0],l=r[1],j=(0,a.useRouter)(),p=j&&j.pathname||"/",b=i.default.useMemo((function(){var t=(0,o.resolveHref)(p,e.href,!0),c=n(t,2),r=c[0],s=c[1];return{href:r,as:e.as?(0,o.resolveHref)(p,e.as):s||r}}),[p,e.href,e.as]),v=b.href,g=b.as;i.default.useEffect((function(){if(t&&f&&s&&s.tagName&&(0,o.isLocalURL)(v)&&!h[v+"%"+g])return u(s,(function(){d(j,v,g)}))}),[t,s,v,g,j]);var O=e.children,m=e.replace,x=e.shallow,y=e.scroll;"string"===typeof O&&(O=i.default.createElement("a",null,O));var w=i.Children.only(O),E={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,c,n,r,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(c))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[r?"replace":"push"](c,n,{shallow:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,j,v,g,m,x,y)}};return t&&(E.onMouseEnter=function(e){(0,o.isLocalURL)(v)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(j,v,g,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(E.href=(0,o.addBasePath)((0,o.addLocale)(g,j&&j.locale,j&&j.defaultLocale))),i.default.cloneElement(w,E)};t.default=j},vlRD:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c("RNiq")}])}},[["vlRD",0,1,3,2]]]);