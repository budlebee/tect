_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"54gL":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var r=t("nKUr"),o=t("ROFb"),i=t.n(o),l=t("q1tI"),s=[{data:{id:"vectorCalculus",label:"\ubca1\ud130 \ubbf8\uc801\ubd84\ud559"}},{data:{id:"linearAlgebra",label:"\uc120\ud615\ub300\uc218"}},{data:{id:"numberTheory",label:"\uc815\uc218\ub860"}},{data:{id:"setTheory",label:"\uc9d1\ud569\ub860"}},{data:{id:"analysis",label:"\ud574\uc11d\ud559"}},{data:{id:"discreteMathematics",label:"\uc774\uc0b0\uc218\ud559"}},{data:{id:"ode",label:"\uc0c1\ubbf8\ubd84\ubc29\uc815\uc2dd"}},{data:{id:"pde",label:"\ud3b8\ubbf8\ubd84\ubc29\uc815\uc2dd"}},{data:{id:"probability",label:"\ud655\ub960\ub860"}},{data:{id:"differentialGeometry",label:"\ubbf8\ubd84\uae30\ud558"}},{data:{id:"modernAlgebra",label:"\ud604\ub300\ub300\uc218"}},{data:{id:"numericalAnalysis",label:"\uc218\uce58\ud574\uc11d"}},{data:{id:"topology",label:"\uc704\uc0c1\uc218\ud559"}},{data:{id:"fieldTheory",label:"\uccb4\ub860"}},{data:{id:"financialMathematics",label:"\uae08\uc735\uc218\ud559"}},{data:{id:"algebraicGeometry",label:"\ub300\uc218\uae30\ud558"}},{data:{id:"fourierAnalysis",label:"\ud478\ub9ac\uc5d0\ud574\uc11d"}},{data:{id:"statistics",label:"\ud1b5\uacc4\ud559"}},{data:{id:"complexAnalysis",label:"\ubcf5\uc18c\ud574\uc11d"}},{data:{id:"mathematicalLogic",label:"\uc218\ub9ac\ub17c\ub9ac"}},{data:{id:"combinatorics",label:"\uc870\ud569\ub860"}},{data:{id:"appliedAlgebra",label:"\uc751\uc6a9\ub300\uc218"}},{data:{id:"probabilityAndRandomProcesses",label:"\ud655\ub960\uacfc\uc815\ub860"}},{data:{id:"vectorCalculus->linearAlgebra",source:"vectorCalculus",target:"linearAlgebra"}},{data:{id:"vectorCalculus->analysis",source:"vectorCalculus",target:"analysis"}},{data:{id:"vectorCalculus->ode",source:"vectorCalculus",target:"ode"}},{data:{id:"vectorCalculus->differentialGeometry",source:"vectorCalculus",target:"differentialGeometry"}},{data:{id:"analysis->pde",source:"analysis",target:"pde"}},{data:{id:"analysis->topology",source:"analysis",target:"topology"}},{data:{id:"analysis->fourierAnalysis",source:"analysis",target:"fourierAnalysis"}},{data:{id:"linearAlgebra->modernAlgebra",source:"linearAlgebra",target:"modernAlgebra"}},{data:{id:"linearAlgebra->numericalAnalysis",source:"linearAlgebra",target:"numericalAnalysis"}},{data:{id:"linearAlgebra->differentialGeometry",source:"linearAlgebra",target:"differentialGeometry"}},{data:{id:"numberTheory->modernAlgebra",source:"numberTheory",target:"modernAlgebra"}},{data:{id:"setTheory->mathematicalLogic",source:"setTheory",target:"mathematicalLogic"}},{data:{id:"analysis->complexAnalysis",source:"analysis",target:"complexAnalysis"}},{data:{id:"discreteMathematics->probability",source:"discreteMathematics",target:"probability"}},{data:{id:"discreteMathematics->combinatorics",source:"discreteMathematics",target:"combinatorics"}},{data:{id:"analysis->probabilityAndRandomProcesses",source:"analysis",target:"probabilityAndRandomProcesses"}},{data:{id:"discreteMathematics->statistics",source:"discreteMathematics",target:"statistics"}},{data:{id:"statistics->probabilityAndRandomProcesses",source:"statistics",target:"probabilityAndRandomProcesses"}},{data:{id:"modernAlgebra->fieldTheory",source:"modernAlgebra",target:"fieldTheory"}},{data:{id:"numberTheory->fieldTheory",source:"numberTheory",target:"fieldTheory"}},{data:{id:"fieldTheory->algebraicGeometry",source:"fieldTheory",target:"algebraicGeometry"}},{data:{id:"fieldTheory->appliedAlgebra",source:"fieldTheory",target:"appliedAlgebra"}},{data:{id:"fieldTheory->mathematicalLogic",source:"fieldTheory",target:"mathematicalLogic"}},{data:{id:"probabilityAndRandomProcesses->financialMathematics",source:"probabilityAndRandomProcesses",target:"financialMathematics"}},{data:{id:"ode->pde",source:"ode",target:"pde"}},{data:{id:"pde->fourierAnalysis",source:"pde",target:"fourierAnalysis"}}],d=t("SD8b");function c(){var e=Object(l.useRef)();return Object(l.useEffect)((function(){var a=t("sX1+");i.a.use(a);var r=i()({elements:s}).elements().pageRank(),o=d.a.nodeMaxSize,l=d.a.nodeMinSize,c=d.a.nodeActiveSize,n=d.a.fontMaxSize,y=d.a.fontMinSize,u=d.a.fontActiveSize,b=d.a.edgeWidth,g=d.a.edgeActiveWidth,h=d.a.arrowScale,m=d.a.arrowActiveScale,f=d.a.dimColor,p=d.a.edgeColor,A=d.a.nodeColor,w=d.a.nodeActiveColor,v=d.a.successorColor,T=d.a.predecessorsColor,M={container:e.current,elements:s,style:[{selector:"node",style:{"background-color":A,label:"data(label)",width:function(e){return o*(8*r.rank("#"+e.id()))+l},height:function(e){return o*(8*r.rank("#"+e.id()))+l},"font-size":function(e){return n*r.rank("#"+e.id())+y},color:A,"text-wrap":"wrap"}},{selector:"edge",style:{width:b,"curve-style":"bezier","line-color":p,"target-arrow-color":p,"target-arrow-shape":"vee","arrow-scale":h}}],layout:{name:"dagre",animate:!1,gravityRangeCompound:1.5,fit:!0,tile:!0}},C=i()(M);function k(e,a){e.style("opacity",a)}C.on("tap",(function(e){var a=e.target.data("url");a&&""!==a&&window.open(a)})),C.on("tapstart mouseover","node",(function(e){var a,t;t={"background-color":f,"line-color":f,"target-arrow-color":f,color:f},(a=C).nodes().forEach((function(e){e.style(t)})),a.edges().forEach((function(e){e.style(t)})),function(e,a,t,r,o){e.style("background-color",w),e.style("color",A),e.successors().each((function(e){e.isEdge()&&(e.style("width",r),e.style("arrow-scale",o)),e.style("color",A),e.style("background-color",a),e.style("line-color",a),e.style("target-arrow-color",a),k(e,.8)})),e.predecessors().each((function(e){e.isEdge()&&(e.style("width",r),e.style("arrow-scale",o)),e.style("color",A),e.style("background-color",t),e.style("line-color",t),e.style("target-arrow-color",t),k(e,.6)})),e.neighborhood().each((function(e){k(e,1)})),e.style("width",Math.max(parseFloat(e.style("width")),c)),e.style("height",Math.max(parseFloat(e.style("height")),c)),e.style("font-size",Math.max(parseFloat(e.style("font-size")),u))}(e.target,v,T,g,m)})),C.on("tapend mouseout","node",(function(e){var a;(a=e.cy).nodes().forEach((function(e){e.style("background-color",A);var a=r.rank(e);e.style("width",o*(8*a)+l),e.style("height",o*(8*a)+l),e.style("font-size",n*a+y),e.style("color",A),e.style("opacity",1)})),a.edges().forEach((function(e){e.style("line-color",p),e.style("target-arrow-color",p),e.style("width",b),e.style("arrow-scale",h),e.style("opacity",1)}))}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{ref:e,style:{height:"600px"}}),Object(r.jsx)("div",{children:"contributors"})]})}},PJ25:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techtree/math",function(){return t("54gL")}])}},[["PJ25",0,1,3,2,5]]]);