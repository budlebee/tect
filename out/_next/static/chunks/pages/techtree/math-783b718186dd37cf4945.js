_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"54gL":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var r=t("nKUr"),i=t("ROFb"),o=t.n(i),l=t("q1tI"),s=[{data:{id:"vectorCalculus",label:"Vector Calculus"}},{data:{id:"linearAlgebra",label:"Linear Algebra"}},{data:{id:"numberTheory",label:"Number Theory"}},{data:{id:"setTheory",label:"Set Theory"}},{data:{id:"analysis",label:"Analysis"}},{data:{id:"discreteMathematics",label:"Discrete Mathematics"}},{data:{id:"ode",label:"ODE"}},{data:{id:"pde",label:"PDE"}},{data:{id:"probability",label:"Probability"}},{data:{id:"differentialGeometry",label:"Differential Geometry"}},{data:{id:"modernAlgebra",label:"Modern Algebra"}},{data:{id:"numericalAnalysis",label:"Numerical Analysis"}},{data:{id:"topology",label:"Topology"}},{data:{id:"fieldTheory",label:"Field Theory"}},{data:{id:"financialMathematics",label:"Financial Mathematics"}},{data:{id:"algebraicGeometry",label:"Algebraic Geometry"}},{data:{id:"fourierAnalysis",label:"Fourier Analysis"}},{data:{id:"statistics",label:"Statistics"}},{data:{id:"complexAnalysis",label:"Complex Analysis"}},{data:{id:"mathematicalLogic",label:"Mathematical Logic"}},{data:{id:"combinatorics",label:"Combinatorics"}},{data:{id:"appliedAlgebra",label:"Applied Algebra"}},{data:{id:"probabilityAndRandomProcesses",label:"Random Processes"}},{data:{id:"vectorCalculus->linearAlgebra",source:"vectorCalculus",target:"linearAlgebra"}},{data:{id:"vectorCalculus->analysis",source:"vectorCalculus",target:"analysis"}},{data:{id:"vectorCalculus->ode",source:"vectorCalculus",target:"ode"}},{data:{id:"vectorCalculus->differentialGeometry",source:"vectorCalculus",target:"differentialGeometry"}},{data:{id:"analysis->pde",source:"analysis",target:"pde"}},{data:{id:"analysis->topology",source:"analysis",target:"topology"}},{data:{id:"analysis->fourierAnalysis",source:"analysis",target:"fourierAnalysis"}},{data:{id:"linearAlgebra->modernAlgebra",source:"linearAlgebra",target:"modernAlgebra"}},{data:{id:"linearAlgebra->numericalAnalysis",source:"linearAlgebra",target:"numericalAnalysis"}},{data:{id:"linearAlgebra->differentialGeometry",source:"linearAlgebra",target:"differentialGeometry"}},{data:{id:"numberTheory->modernAlgebra",source:"numberTheory",target:"modernAlgebra"}},{data:{id:"setTheory->mathematicalLogic",source:"setTheory",target:"mathematicalLogic"}},{data:{id:"analysis->complexAnalysis",source:"analysis",target:"complexAnalysis"}},{data:{id:"discreteMathematics->probability",source:"discreteMathematics",target:"probability"}},{data:{id:"discreteMathematics->combinatorics",source:"discreteMathematics",target:"combinatorics"}},{data:{id:"analysis->probabilityAndRandomProcesses",source:"analysis",target:"probabilityAndRandomProcesses"}},{data:{id:"discreteMathematics->statistics",source:"discreteMathematics",target:"statistics"}},{data:{id:"statistics->probabilityAndRandomProcesses",source:"statistics",target:"probabilityAndRandomProcesses"}},{data:{id:"modernAlgebra->fieldTheory",source:"modernAlgebra",target:"fieldTheory"}},{data:{id:"numberTheory->fieldTheory",source:"numberTheory",target:"fieldTheory"}},{data:{id:"fieldTheory->algebraicGeometry",source:"fieldTheory",target:"algebraicGeometry"}},{data:{id:"fieldTheory->appliedAlgebra",source:"fieldTheory",target:"appliedAlgebra"}},{data:{id:"fieldTheory->mathematicalLogic",source:"fieldTheory",target:"mathematicalLogic"}},{data:{id:"probabilityAndRandomProcesses->financialMathematics",source:"probabilityAndRandomProcesses",target:"financialMathematics"}},{data:{id:"ode->pde",source:"ode",target:"pde"}},{data:{id:"pde->fourierAnalysis",source:"pde",target:"fourierAnalysis"}}],d=t("SD8b");t("xdyS");function c(){var e=Object(l.useRef)();return Object(l.useEffect)((function(){var a=t("sX1+");o.a.use(a);var r=o()({elements:s}).elements().pageRank(),i=d.a.nodeMaxSize,l=d.a.nodeMinSize,c=d.a.nodeActiveSize,n=d.a.fontMaxSize,y=d.a.fontMinSize,u=d.a.fontActiveSize,b=d.a.edgeWidth,g=d.a.edgeActiveWidth,m=d.a.arrowScale,h=d.a.arrowActiveScale,f=d.a.dimColor,p=d.a.edgeColor,A=d.a.nodeColor,v=d.a.nodeActiveColor,w=d.a.successorColor,T=d.a.predecessorsColor,M={container:e.current,elements:s,style:[{selector:"node",style:{"background-color":A,label:"data(label)",width:function(e){return i*(8*r.rank("#"+e.id()))+l},height:function(e){return i*(8*r.rank("#"+e.id()))+l},"font-size":function(e){return n*r.rank("#"+e.id())+y},color:A,"text-wrap":"wrap"}},{selector:"edge",style:{width:b,"curve-style":"bezier","line-color":p,"target-arrow-color":p,"target-arrow-shape":"vee","arrow-scale":m}}],layout:{name:"dagre",animate:!1,gravityRangeCompound:1.5,fit:!0,tile:!0}},x=o()(M);function C(e,a){e.style("opacity",a)}x.on("tap",(function(e){var a=e.target.data("url");a&&""!==a&&window.open(a)})),x.on("tapstart mouseover","node",(function(e){var a,t;t={"background-color":f,"line-color":f,"target-arrow-color":f,color:f},(a=x).nodes().forEach((function(e){e.style(t)})),a.edges().forEach((function(e){e.style(t)})),function(e,a,t,r,i){e.style("background-color",v),e.style("color",A),e.successors().each((function(e){e.isEdge()&&(e.style("width",r),e.style("arrow-scale",i)),e.style("color",A),e.style("background-color",a),e.style("line-color",a),e.style("target-arrow-color",a),C(e,.8)})),e.predecessors().each((function(e){e.isEdge()&&(e.style("width",r),e.style("arrow-scale",i)),e.style("color",A),e.style("background-color",t),e.style("line-color",t),e.style("target-arrow-color",t),C(e,.6)})),e.neighborhood().each((function(e){C(e,1)})),e.style("width",Math.max(parseFloat(e.style("width")),c)),e.style("height",Math.max(parseFloat(e.style("height")),c)),e.style("font-size",Math.max(parseFloat(e.style("font-size")),u))}(e.target,w,T,g,h)})),x.on("tapend mouseout","node",(function(e){var a;(a=e.cy).nodes().forEach((function(e){e.style("background-color",A);var a=r.rank(e);e.style("width",i*(8*a)+l),e.style("height",i*(8*a)+l),e.style("font-size",n*a+y),e.style("color",A),e.style("opacity",1)})),a.edges().forEach((function(e){e.style("line-color",p),e.style("target-arrow-color",p),e.style("width",b),e.style("arrow-scale",m),e.style("opacity",1)}))}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"rotate-alert",children:[Object(r.jsx)("div",{className:"phone"}),Object(r.jsx)("div",{className:"message",children:"Please rotate your device!"})]}),Object(r.jsxs)("div",{className:"tree",children:[Object(r.jsx)("div",{ref:e,style:{height:"600px"}}),Object(r.jsx)("div",{children:"contributors"})]})]})}},PJ25:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techtree/math",function(){return t("54gL")}])}},[["PJ25",0,1,3,4,7,2]]]);