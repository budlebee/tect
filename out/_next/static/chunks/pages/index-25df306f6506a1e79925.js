_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"8oxB":function(e,t){var n,r,c=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=v,c.addListener=v,c.once=v,c.off=v,c.removeListener=v,c.removeAllListeners=v,c.emit=v,c.prependListener=v,c.prependOnceListener=v,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},RNiq:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return i}));var r=n("nKUr"),c=(n("vRNQ"),n("YFqc")),o=n.n(c);n("q1tI");function i(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(o.a,{href:"/techtree/physics",as:e.env.BACKEND_URL,children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"card",children:"Physics"})})}),Object(r.jsx)(o.a,{href:"/techtree/math",as:e.env.BACKEND_URL,children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"card",children:"Mathematics"})})}),Object(r.jsx)(o.a,{href:"/techtree/electricalengineering",as:e.env.BACKEND_URL,children:Object(r.jsx)("a",{children:Object(r.jsxs)("div",{className:"card",children:["Electrical",Object(r.jsx)("br",{}),"Engineering"]})})}),Object(r.jsx)(o.a,{href:"/techtree/economy",as:e.env.BACKEND_URL,children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"card",children:"economy"})})})]})})}}.call(this,n("8oxB"))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o,i=c(n("q1tI")),a=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var h=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function d(e,t,n,r){(0,a.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=i.default.useState(),c=r(n,2),o=c[0],u=c[1],p=(0,s.useRouter)(),v=p&&p.pathname||"/",m=i.default.useMemo((function(){var t=(0,a.resolveHref)(v,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,a.resolveHref)(v,e.as):o||c}}),[v,e.href,e.as]),y=m.href,j=m.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,a.isLocalURL)(y)&&!f[y+"%"+j])return h(o,(function(){d(p,y,j)}))}),[t,o,y,j,p]);var w=e.children,b=e.replace,g=e.shallow,E=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var T=i.Children.only(w),x={ref:function(e){e&&u(e),T&&"object"===typeof T&&T.ref&&("function"===typeof T.ref?T.ref(e):"object"===typeof T.ref&&(T.ref.current=e))},onClick:function(e){T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,y,j,b,g,E)}};return t&&(x.onMouseEnter=function(e){(0,a.isLocalURL)(y)&&(T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),d(p,y,j,{priority:!0}))}),(e.passHref||"a"===T.type&&!("href"in T.props))&&(x.href=(0,a.addBasePath)((0,a.addLocale)(j,p&&p.locale,p&&p.defaultLocale))),i.default.cloneElement(T,x)};t.default=p},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,4,6]]]);