_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("nKUr"),c=(n("vRNQ"),n("YFqc")),o=n.n(c);n("q1tI");function a(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(o.a,{href:"/techtree/physics",children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"card",children:"Physics"})})}),Object(r.jsx)(o.a,{href:"/techtree/math",children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"card",children:"Mathematics"})})}),Object(r.jsx)(o.a,{href:"/techtree/electricalengineering",children:Object(r.jsx)("a",{children:Object(r.jsxs)("div",{className:"card",children:["Electrical",Object(r.jsx)("br",{}),"Engineering"]})})}),Object(r.jsx)(o.a,{href:"/techtree/economy",children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"card",children:"economy"})})})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o,a=c(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=new Map,f=window.IntersectionObserver,u={};var d=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),u[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=a.default.useState(),c=r(n,2),o=c[0],l=c[1],p=(0,s.useRouter)(),v=p&&p.pathname||"/",j=a.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,i.resolveHref)(v,e.as):o||c}}),[v,e.href,e.as]),b=j.href,y=j.as;a.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,i.isLocalURL)(b)&&!u[b+"%"+y])return d(o,(function(){h(p,b,y)}))}),[t,o,b,y,p]);var O=e.children,w=e.replace,g=e.shallow,m=e.scroll;"string"===typeof O&&(O=a.default.createElement("a",null,O));var x=a.Children.only(O),E={ref:function(e){e&&l(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,b,y,w,g,m)}};return t&&(E.onMouseEnter=function(e){(0,i.isLocalURL)(b)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),h(p,b,y,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(E.href=(0,i.addBasePath)((0,i.addLocale)(y,p&&p.locale,p&&p.defaultLocale))),a.default.cloneElement(x,E)};t.default=p},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,4,6]]]);