(this.webpackJsonpevent=this.webpackJsonpevent||[]).push([[0],{231:function(e,t,a){e.exports=a(400)},236:function(e,t,a){},238:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},239:function(e,t,a){},240:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=240},400:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),i=a.n(l),c=(a(236),a(237),a(238),a(239),a(17)),o=a(18),s=a(19),m=a(20),u=a(21),d=a(417),p=a(217),E=a(40),h=a(220),g=a(401),b=a(52),f=a(411),w=a(199),y=a.n(w),v=a(408),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(d.a.Column,null,r.a.createElement(d.a.Row,null,r.a.createElement(v.a,{icon:"users",iconPosition:"left",placeholder:"First Name",style:{paddingTop:10}})," ",r.a.createElement("br",null),r.a.createElement(v.a,{icon:"users",iconPosition:"left",placeholder:"Last Name",style:{paddingTop:10}}),r.a.createElement("br",null),r.a.createElement(v.a,{iconPosition:"left",placeholder:"Email",style:{paddingTop:10}},r.a.createElement(b.a,{name:"at"}),r.a.createElement("input",null)))))}}]),t}(n.Component),C=a(413),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleActive=function(e){switch(a.props.step){case 1:switch(e){case 1:return"active";case 2:case 3:return"disabled"}break;case 2:switch(e){case 1:return"completed";case 2:return"active";case 3:return"disabled"}break;case 3:switch(e){case 1:case 2:return"completed";case 3:return"active"}}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a.Group,{fluid:!0},r.a.createElement(C.a,{className:this.handleActive(1)},r.a.createElement(b.a,{name:"user"}),r.a.createElement(C.a.Content,null,r.a.createElement(C.a.Title,null,"Personal Information"),r.a.createElement(C.a.Description,null,"Enter details"))),r.a.createElement(C.a,{className:this.handleActive(2)},r.a.createElement(b.a,{name:"payment"}),r.a.createElement(C.a.Content,null,r.a.createElement(C.a.Title,null,"Billing"),r.a.createElement(C.a.Description,null,"Enter billing information"))),r.a.createElement(C.a,{className:this.handleActive(3)},r.a.createElement(b.a,{name:"info"}),r.a.createElement(C.a.Content,null,r.a.createElement(C.a.Title,null,"Confirm Subscription"))))}}]),t}(n.Component),x=[{render:function(){return r.a.createElement(h.a,{className:"image-caro",src:"images/1.png"})}},{render:function(){return r.a.createElement(h.a,{className:"image-caro",src:"images/2.png"})}},{render:function(){return r.a.createElement(h.a,{className:"image-caro",src:"images/3.png"})}},{render:function(){return r.a.createElement(h.a,{className:"image-caro",src:"images/4.png"})}}],k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={animation:"push",direction:"left",dimmed:!1,visible:!0,open:!1,step:1,label:"Next",icon:"arrow circle right"},a.nextStep=function(e){switch(e){case 1:a.setState({step:2});break;case 2:a.setState({step:3,label:"Done",icon:"check"})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.animation,t.direction,t.visible,t.open),n=t.step,l=t.label,i=t.icon;return r.a.createElement(d.a,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,{width:8},r.a.createElement(d.a,null,r.a.createElement(d.a.Column,null,r.a.createElement(d.a.Row,null,r.a.createElement("img",{src:"images/logo.png",style:{paddingTop:20}})),r.a.createElement(d.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Row,{style:{paddingTop:40}},r.a.createElement(d.a.Column,{width:8,style:{"text-align":"right"}},r.a.createElement("img",{src:"images/google-play-badge.png",style:{width:180,height:86,cursor:"pointer"}})),r.a.createElement(d.a.Column,{width:8,style:{"text-align":"left"}},r.a.createElement("img",{src:"images/apple.png",style:{width:160,height:60,marginTop:13,cursor:"pointer"}}))))),r.a.createElement(d.a.Row,null,r.a.createElement(g.a,{onClick:function(){return e.setState({open:!0})},icon:"download",content:"Subscribe",size:"huge",color:"linkedin",style:{"border-radius":"25px",width:"auto","max-width":"100%","min-width":"40%",color:"white",marginTop:70,marginBottom:20}},r.a.createElement("p",{style:{display:"inline"}},"Register"),r.a.createElement(b.a,{name:"chevron right",style:{paddingLeft:20}})))))),r.a.createElement(d.a.Column,{width:8},r.a.createElement(y.a,{elements:x,duration:3e3,animation:"fade",showNextPrev:!1,showIndicators:!0})),r.a.createElement(f.a,{closeOnEscape:!0,dimmer:"blurring",open:a,centered:!0,style:{width:"80%"}},r.a.createElement(f.a.Header,{style:{"text-align":"right"}},r.a.createElement(d.a,null,r.a.createElement(d.a.Column,null,r.a.createElement(d.a.Row,{style:{"text-align":"right"}},r.a.createElement(b.a,{name:"times",onClick:function(){return e.setState({open:!1,step:1,icon:"arrow circle right",label:"Next"})}})),r.a.createElement(d.a.Row,{style:{"text-align":"center"}},r.a.createElement(j,{step:n}))))),r.a.createElement(f.a.Content,{style:{"text-align":"center"}},r.a.createElement(f.a.Description,null,r.a.createElement(O,null),r.a.createElement(g.a,{icon:"arrow circle right",content:"Subscribe",onClick:function(){return e.nextStep(n)},size:"large",color:"linkedin",style:{"border-radius":"25px",color:"white",marginTop:70,marginBottom:20}},r.a.createElement("p",{style:{display:"inline",paddingRight:5}},l),r.a.createElement(b.a,{name:i})))))))}}]),t}(n.Component),N=a(412),S=a(416),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(d.a.Column,{className:"landing-wrapper"},r.a.createElement(d.a.Row,{style:{paddingTop:50}},r.a.createElement(N.a,{style:{width:483,height:270,margin:"0 auto"}},r.a.createElement(S.a,{as:"h2",icon:!0},"Login",r.a.createElement(S.a.Subheader,null,"Access using your registered account!")),r.a.createElement(v.a,{icon:"users",iconPosition:"left",placeholder:"Username",style:{marginLeft:20,marginRight:20,marginTop:20}}),r.a.createElement(v.a,{type:"password",icon:"lock",iconPosition:"left",placeholder:"Password",style:{marginLeft:20,marginRight:20,marginTop:5}}),r.a.createElement(g.a,{onClick:function(){e.props.history.push("/home")},content:"Login",size:"huge",color:"linkedin",style:{"border-radius":"25px",color:"white",marginTop:20,marginBottom:5}},r.a.createElement(b.a,{name:"sign-in"}),r.a.createElement("p",{style:{display:"inline"}},"Login")),"Forgot Password")),r.a.createElement(d.a.Row,null)))}}]),t}(n.Component),T=a(419),D=a(418),L=a(414),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={animation:"push",direction:"left",dimmed:!1,visible:!0,open:!1,step:1,label:"Next",icon:"arrow circle right"},a.data=[{name:"Event 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida nunc, a ornare tellus. Donec vehicula erat in mi molestie, eu faucibus turpis porttitor. Vestibulum tincidunt a mi id porttitor.",date_added:"11/11/19",subscribers:"2"},{name:"Event 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida nunc, a ornare tellus. Donec vehicula erat in mi molestie, eu faucibus turpis porttitor. Vestibulum tincidunt a mi id porttitor.",date_added:"11/11/19",subscribers:"2"},{name:"Event 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida nunc, a ornare tellus. Donec vehicula erat in mi molestie, eu faucibus turpis porttitor. Vestibulum tincidunt a mi id porttitor.",date_added:"11/11/19",subscribers:"2"}],a.renderCards=function(){var e=[],t=!0,n=!1,l=void 0;try{for(var i,c=a.data[Symbol.iterator]();!(t=(i=c.next()).done);t=!0){var o=i.value;e.push(r.a.createElement(d.a.Row,null,r.a.createElement(N.a,{style:{width:"50%",margin:"0 auto",border:"none",marginTop:20}},r.a.createElement(h.a,{src:"images/image.png",wrapped:!0,ui:!1}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,null,o.name),r.a.createElement(N.a.Meta,null,r.a.createElement("span",{className:"date"},o.date_added)),r.a.createElement(N.a.Description,null,o.description)),r.a.createElement(N.a.Content,{extra:!0},r.a.createElement("a",{onClick:function(){return a.setState({open:!0})}},r.a.createElement(b.a,{name:"share"}),"Subscribe")))))}}catch(s){n=!0,l=s}finally{try{t||null==c.return||c.return()}finally{if(n)throw l}}return e},a.nextStep=function(e){switch(e){case 1:a.setState({step:2});break;case 2:a.setState({step:3,label:"Download App",icon:"download"})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.animation,t.direction,t.visible),n=t.open,l=t.step,i=t.label,c=t.icon;return r.a.createElement(T.a.Pushable,{as:D.a,style:{marginTop:30,marginBottom:30,"overflow-y":"auto"}},r.a.createElement(T.a,{as:L.a,animation:"push",icon:"labeled",vertical:!0,visible:this.state.visible,width:"thin"},r.a.createElement(L.a.Item,{as:"a"},"Birthday"),r.a.createElement(L.a.Item,{as:"a"},"Wedding"),r.a.createElement(L.a.Item,{as:"a"},"Socials"),r.a.createElement(L.a.Item,{as:"a"},"Anniversary"),r.a.createElement(L.a.Item,{as:"a"},"Others")),r.a.createElement(T.a.Pusher,null,r.a.createElement(d.a,{columns:"equal"},r.a.createElement(d.a.Row,{className:"row-wrapper"},r.a.createElement(d.a.Column,{width:1},r.a.createElement(b.a,{style:{paddingLeft:15,paddingTop:8,cursor:"pointer"},name:"bars",onClick:function(){return e.setState({visible:!a})}})),r.a.createElement(d.a.Column,{width:15,style:{"text-align":"center",overflow:"auto"}},r.a.createElement(N.a,{className:"pusher-card"},this.renderCards()))))),r.a.createElement(f.a,{closeOnEscape:!0,dimmer:"blurring",open:n,centered:!0,style:{width:"80%"}},r.a.createElement(f.a.Header,{style:{"text-align":"right"}},r.a.createElement(d.a,null,r.a.createElement(d.a.Column,null,r.a.createElement(d.a.Row,{style:{"text-align":"right"}},r.a.createElement(b.a,{name:"times",onClick:function(){return e.setState({open:!1,step:1,icon:"arrow circle right",label:"Next"})}})),r.a.createElement(d.a.Row,{style:{"text-align":"center"}},r.a.createElement(j,{step:l}))))),r.a.createElement(f.a.Content,{style:{"text-align":"center"}},r.a.createElement(f.a.Description,null,r.a.createElement(O,null),r.a.createElement(g.a,{icon:"arrow circle right",content:"Subscribe",onClick:function(){return e.nextStep(l)},size:"large",color:"linkedin",style:{"border-radius":"25px",color:"white",marginTop:70,marginBottom:20}},r.a.createElement("p",{style:{display:"inline",paddingRight:5}},i),r.a.createElement(b.a,{name:c}))))))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{basename:window.location.pathname||""},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:k}),r.a.createElement(E.a,{path:"/login",exact:!0,component:R}),r.a.createElement(E.a,{path:"/home",exact:!0,component:A}))))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{stackable:!0},r.a.createElement(d.a.Column,null,r.a.createElement(d.a.Row,null,r.a.createElement(P,null))))}}]),t}(n.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[231,1,2]]]);
//# sourceMappingURL=main.88427452.chunk.js.map