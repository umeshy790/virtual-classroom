(this["webpackJsonpvirtual-classroom"]=this["webpackJsonpvirtual-classroom"]||[]).push([[0],{103:function(A,e,t){},110:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),o=t(8),c=t.n(o),r=(t(103),t(165)),i=t(26),l=t(16),s=t(113),g=t(173),u=t(169),d=t(112),O=t(151),w=t(172),m=t(152),b=t(67),I=t.n(b),C=t(66),B=t.n(C),M=Object(s.a)({card:{margin:"12px",color:"#202124",boxShadow:"none",border:"1px solid #0277bd"},avatar:{backgroundColor:"#0277bd"},cardContent:{display:"flex",background:"#9e9e9e30",paddingBottom:"16px !important"},section:{display:"flex",flex:"1 0 33.3%",overflow:"hidden",justifyContent:"space-between","& div":{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"5px",overflow:"hidden"},"& span":{color:"rgba(0, 0, 0, 0.72)",fontSize:"0.8rem",fontWeight:400,lineHeight:1.43,letterSpacing:"0.01071em",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& span:last-child":{fontSize:"0.75rem"}},dialogContainer:{height:"70vh",width:"80vw",background:"black"},clearIcon:{float:"right",color:"#ffffff"}});function E(A){var e=M(),t=A.open,a=A.onClose,o=function(){a(!1)};return n.a.createElement(u.a,{open:t,"aria-labelledby":"shared screen",onClose:o},n.a.createElement("div",{className:e.dialogContainer},n.a.createElement(d.a,{onClick:o,className:e.clearIcon},n.a.createElement(B.a,null))))}var Q=function(A){var e=M(),t=Object(a.useState)(!1),o=Object(i.a)(t,2),c=o[0],r=o[1],l=A.student;return n.a.createElement("div",null,n.a.createElement(O.a,{className:e.card},n.a.createElement(w.a,{avatar:n.a.createElement(g.a,{"aria-label":"recipe",className:e.avatar},l.name.substring(0,1)),title:l.name,subheader:"Rank : "+l.rank,action:n.a.createElement(d.a,{"aria-label":"settings",onClick:function(){r(!0)}},n.a.createElement(I.a,null))}),n.a.createElement(m.a,{className:e.cardContent},n.a.createElement("section",{className:e.section},n.a.createElement("div",null,n.a.createElement("span",null,"Classes Attended"),n.a.createElement("span",null,l.attendence))),n.a.createElement("section",{className:e.section},n.a.createElement("div",null,n.a.createElement("span",null,"Quest. attempted"),n.a.createElement("span",null,l.qa))),n.a.createElement("section",{className:e.section},n.a.createElement("div",null,n.a.createElement("span",null,"Accuracy"),n.a.createElement("span",null,l.accuracy))))),n.a.createElement(E,{open:c,onClose:function(A){r(A)}}))};var D=function(){var A=Object(l.c)((function(A){return A.students}));return n.a.createElement("div",{style:{width:"100vw"}},A.map((function(A){return n.a.createElement(Q,{key:A.id,student:A})})))},p=t(154),f=t(155),h=t(69),v=t.n(h),y=t(70),P=t.n(y),F=t(68),x=t.n(F),S=t(71),U=t.n(S),k=t(153),N=Object(k.a)({body:{borderTop:"1px solid #8080806b"}});var z=function(){var A=N(),e=Object(l.c)((function(A){return A.screenIndex})),t=Object(l.b)();return n.a.createElement("div",{className:A.body},n.a.createElement(p.a,{value:e,onChange:function(A,e){t({type:"CHANGE_SCREEN_INDEX",payload:e})}},n.a.createElement(f.a,{icon:n.a.createElement(x.a,null)}),n.a.createElement(f.a,{icon:n.a.createElement(v.a,null)}),n.a.createElement(f.a,{icon:n.a.createElement(P.a,null)}),n.a.createElement(f.a,{icon:n.a.createElement(U.a,null)})))},G=t(36),q=t(156),J=t(157),Y=t(42),j=t(158),K=t(73),T=t.n(K),L=t(72),R=t.n(L),H=t(170),X=Object(s.a)((function(A){return Object(q.a)({container:{width:"100vw",position:"relative",overflow:"hidden",height:"100%",padding:"0px 10px",boxSizing:"border-box"},canvas:{position:"absolute",zIndex:"1000",height:"100%",width:"100%",background:"black",left:"0px",right:"0px",color:"white",opacity:.8,display:"flex",alignItems:"center",justifyContent:"center","& div":{display:"flex",flexDirection:"column",fontSize:"0.8em"},"& Button":{color:"white",background:"#80808073",marginTop:"10px"}},notes:{display:"flex",flexWrap:"wrap"},imageContainer:{background:"#9e9e9e30",border:"8px solid transparent",backgroundClip:"padding-box",borderRadius:"10px",padding:"10px",height:"129px",display:"flex",flexDirection:"column",boxSizing:"border-box","& img":{height:"60px"},"& span":{fontSize:"0.8em",color:"#202124",fontWeight:"500",lineHeight:"30px"}},checkIcon:{position:"absolute",top:"3px",right:"6px",fontSize:"1rem",color:A.palette.primary.main},fab:{position:"absolute",bottom:"8px",right:"14px",backgroundColor:A.palette.primary.main,color:A.palette.common.white,zIndex:"100",fontWeight:"600",fontSize:"0.7em","&:hover":{backgroundColor:A.palette.primary.main}},shareIcon:{marginRight:"10px",fontSize:"1.0rem"}})}));var W=function(){var A=X(),e=Object(l.c)((function(A){return A.notes})),t=Object(a.useState)([]),o=Object(i.a)(t,2),c=o[0],r=o[1],s=Object(a.useState)(!1),g=Object(i.a)(s,2),u=g[0],d=g[1],O=Object(a.useState)("false"!==localStorage.getItem("hint")),w=Object(i.a)(O,2),m=w[0],b=w[1];return n.a.createElement("div",{className:A.container},m?n.a.createElement("div",{className:A.canvas},n.a.createElement("div",null,n.a.createElement("span",null,"Tab on item to select"),n.a.createElement(J.a,{onClick:function(){b(!1),localStorage.setItem("hint",!1)}},"Got it"))):null,n.a.createElement("div",{className:A.notes},n.a.createElement(a.Fragment,null,e.map((function(e){return n.a.createElement(Y.a,{key:e.id,className:A.imageContainer,onClick:function(){return A=e.id,void(-1===c.findIndex((function(e){return e===A}))?r([].concat(Object(G.a)(c),[A])):r(c.filter((function(e){return e!==A}))));var A}},n.a.createElement("img",{src:e.icon,alt:""}),n.a.createElement("span",null,e.title),c.includes(e.id)?n.a.createElement(R.a,{className:A.checkIcon}):null)})))),n.a.createElement("div",null,c.length>0?n.a.createElement(j.a,{variant:"extended",className:A.fab,onClick:function(){r([]),d(!0)}},n.a.createElement(T.a,{className:A.shareIcon}),"Add To class"):null),n.a.createElement(H.a,{open:u,autoHideDuration:3e3,message:"Shared with class !",onClose:function(){d(!1)}}))},Z=t(74),V=t.n(Z),_=t(75),$=t.n(_),AA=t(76),eA=t.n(AA),tA=t(77),aA=t.n(tA),nA=t(79),oA=t.n(nA),cA=t(78),rA=t.n(cA),iA=Object(s.a)({root:{width:"100vw",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#201224",position:"relative"},editingToolPanel:{position:"absolute",bottom:"12px",height:"48px",width:"90%",border:"1px solid #80808061",right:"10px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 5px",boxSizing:"border-box",overflowX:"auto",overflowY:"hidden"},editingToolsColors:{height:"30px",minWidth:"30px",borderRadius:"4px",marginRight:"10px","&:nth-child(1)":{background:"yellow"},"&:nth-child(2)":{background:"blue"},"&:nth-child(3)":{background:"black"}}});function lA(A){var e=A.Icon;return n.a.createElement(d.a,null,n.a.createElement(e,null))}var sA=function(){var A=iA(),e=Object(G.a)(Array(3).keys()),t=[V.a,$.a,eA.a,aA.a,rA.a,oA.a];return n.a.createElement("div",{className:A.root},n.a.createElement("span",null,"This is a white board"),n.a.createElement("div",{className:A.editingToolPanel},e.map((function(e){return n.a.createElement(Y.a,{key:e,className:A.editingToolsColors})})),t.map((function(A,e){return n.a.createElement(lA,{key:e.toString(),Icon:A})}))))},gA=t(171),uA=t(160),dA=t(161),OA=t(162),wA=t(163),mA=t(82),bA=t.n(mA),IA=t(167),CA=Object(s.a)((function(A){return Object(q.a)({root:{width:"100vw",padding:"12px",boxSizing:"border-box"},container:{background:"#9e9e9e30",position:"relative",boxShadow:"none","&:not(:last-child)":{marginBottom:"12px"}},nameAndQuestion:{width:"80vw",display:"flex",flexDirection:"column"},questionBy:{fontSize:"0.875em",color:A.palette.primary.main},question:{lineHeight:"20px",fontSize:"0.75em",color:" #202124"}})}));function BA(A){var e=A.question,t=A.classes;return n.a.createElement("div",{className:t.container},n.a.createElement(gA.a,{className:t.container},n.a.createElement(uA.a,{expandIcon:n.a.createElement(bA.a,{color:"primary"}),"aria-controls":"questions-answers",id:"questions-answers-header"},n.a.createElement("div",{className:t.nameAndQuestion},n.a.createElement("span",{className:t.questionBy},e.askedBy),n.a.createElement("span",{className:t.question},e.value))),n.a.createElement(dA.a,null,n.a.createElement(IA.a,{id:"outline-answer",label:"Answer",type:"text",variant:"outlined"})),n.a.createElement(OA.a,null),n.a.createElement(wA.a,null,n.a.createElement(J.a,{size:"small"},"Cancel"),n.a.createElement(J.a,{size:"small",color:"primary"},"Save"))))}var MA=function(){var A=CA(),e=Object(l.c)((function(A){return A.questions}));return n.a.createElement("div",{className:A.root},e.map((function(e,t){return n.a.createElement(BA,{key:"".concat(t),classes:A,question:e})})))},EA=t(164),QA=t(83),DA=t.n(QA),pA=Object(s.a)({container:{height:"70vh",overflow:"hidden",background:"#ffffff",position:"relative"},body:{display:"flex",height:"calc(70vh - 56px)",boxSizing:"border-box",overflowX:"hidden",overflowY:"auto"},notification:{position:"absolute",right:"14px",bottom:"77px",zIndex:"1000",height:"40px",width:"40px",background:"#0086da",borderRadius:"50%",color:"white"},footer:{position:"absolute",bottom:"0px",width:"100%"}});var fA=function(){var A=pA(),e=Object(a.useState)(!1),t=Object(i.a)(e,2),o=t[0],c=t[1],r=Object(l.c)((function(A){return A.screenIndex})),s=Object(l.b)();return Object(a.useEffect)((function(){setTimeout((function(){return c(!0)}),5e3)}),[]),n.a.createElement("div",{className:A.container},n.a.createElement("div",{className:A.body},0===r?n.a.createElement(sA,null):1===r?n.a.createElement(W,null):2===r?n.a.createElement(D,null):n.a.createElement(MA,null)),n.a.createElement("div",{className:A.footer},n.a.createElement(z,null)),o?n.a.createElement(Y.a,{className:A.notification,onClick:function(){c(!1),s({type:"CHANGE_SCREEN_INDEX",payload:3})}},n.a.createElement(EA.a,{badgeContent:1,color:"primary"},n.a.createElement(DA.a,null))):null)};var hA=function(A){var e=A.classes,t=Object(a.useState)(3600),o=Object(i.a)(t,2),c=o[0],r=o[1],l=function(A){return 1===A.toString().length?"0".concat(A):"".concat(A)};return Object(a.useEffect)((function(){c&&setTimeout((function(){r((function(A){return A-1}))}),1e3)}),[c]),n.a.createElement("div",{className:e.vedio},n.a.createElement("div",{className:e.heading},n.a.createElement("span",null,"Computer Science"),n.a.createElement("span",null,function(A){if(!A)return"00:00:00";var e=Math.floor(A/3600),t=A%3600,a=Math.floor(t/60),n=t%60,o=Math.ceil(n);return"".concat(l(e),":").concat(l(a),":").concat(l(o))}(c))))},vA=Object(s.a)({root:{padding:" 0px"},vedio:{height:"30vh",background:"#202124",position:"relative"},heading:{color:"white",fontSize:"0.875em",fontWeight:"500",position:"absolute",top:"3px",display:"flex",justifyContent:"space-between",width:"100%",padding:"0px 10px",boxSizing:"border-box"}});var yA=function(){var A=vA();return n.a.createElement(r.a,{className:A.root},n.a.createElement(hA,{classes:A}),n.a.createElement(fA,null))},PA=t(84),FA=t.n(PA),xA=Object(s.a)({root:{height:"100vh",width:"100vw",color:"gray",display:"flex",alignItems:"center",justifyContent:"center"},block:{display:"flex",flexDirection:"column","& span":{fontSize:"1.6rem"},"& span:last-child":{fontSize:"1.2rem"},"&:nth-child(2)":{marginTop:"26px"}},button:{marginTop:"26px"}});var SA=function(A){var e=A.history,t=xA(),a=Object(l.c)((function(A){return A.students.length}));return n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.body},n.a.createElement("div",{className:t.block},n.a.createElement("span",null,"Duration"),n.a.createElement("span",null,"1 hour")),n.a.createElement("div",{className:t.block},n.a.createElement("span",null,"Students"),n.a.createElement("span",null,a)),n.a.createElement(J.a,{variant:"contained",color:"primary",className:t.button,endIcon:n.a.createElement(FA.a,null),onClick:function(){return e.push("/start")}},"Start class")))},UA=t(45),kA=t(58),NA=t(85),zA=t.n(NA),GA=t(86),qA=t.n(GA),JA=t(87),YA=t.n(JA),jA={notes:[{icon:zA.a,title:"Assignment",id:"notes_1"},{icon:qA.a,title:"Answers",id:"notes_2"},{icon:YA.a,title:"Today's notes",id:"notes_3"}],students:[{name:"Rohan",qa:20,id:"001",accuracy:"90%",attendence:6,rank:1},{name:"Aryan",qa:17,id:"002",accuracy:"75%",attendence:5,rank:5},{name:"Swati",qa:19,id:"003",accuracy:"60%",attendence:9,rank:3}],questions:[{askedBy:"Rohan",value:"Is javascript statically typed language ?"},{askedBy:"Swati",value:"Why python is slow ?"},{askedBy:"Aryan",value:"Is working with graphql easy ?"}],screenIndex:0},KA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_QUESTION":return Object(kA.a)({},A,{questions:[].concat(Object(G.a)(A.questions),[e.payload])});case"CHANGE_SCREEN_INDEX":return Object(kA.a)({},A,{screenIndex:e.payload});default:return A}},TA=t(88),LA=t(32),RA=t(90),HA=t(166),XA=Object(RA.a)({palette:{primary:{main:"#0277bd"},secondary:{main:"#0086da"}}}),WA=Object(UA.b)(KA);var ZA=function(){return n.a.createElement(HA.a,{theme:XA},n.a.createElement(l.a,{store:WA},n.a.createElement(TA.a,{basename:"virtual-classroom"},n.a.createElement(LA.a,{exact:!0,path:"/",component:SA}),n.a.createElement(LA.a,{exact:!0,path:"/start",component:yA}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ZA,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},85:function(A,e,t){A.exports=t.p+"static/media/pdf.49d4041b.png"},86:function(A,e){A.exports="data:image/png;base64,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"},87:function(A,e){A.exports="data:image/png;base64,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"},98:function(A,e,t){A.exports=t(110)}},[[98,1,2]]]);
//# sourceMappingURL=main.295b2863.chunk.js.map