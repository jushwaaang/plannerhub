(this.webpackJsonpevent=this.webpackJsonpevent||[]).push([[0],{228:function(e,t,a){e.exports=a(397)},233:function(e,t,a){},235:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},236:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(49),l=a.n(i),o=(a(233),a(234),a(235),a(236),a(20)),c=a(21),s=a(22),m=a(23),u=a(24),d=a(406),p=a(411),h=a(214),E=a(38),g=a(398),b=a(52),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(p.a.Column,{className:"landing-wrapper"},r.a.createElement(p.a.Row,{textAlign:"right",style:{"text-align":"right",marginTop:"28px"}},r.a.createElement(g.a,{icon:"sign-in",size:"large",color:"linkedin",style:{"border-radius":"25px"},onClick:function(){return e.props.history.push("/login")}},r.a.createElement(b.a,{name:"sign-in"}),r.a.createElement("p",{style:{display:"inline"}},"Login"))),r.a.createElement(p.a.Row,{style:{}},r.a.createElement("img",{className:"image-wrapper",src:"images/logo.png"})),r.a.createElement(p.a.Row,null,r.a.createElement(g.a,{icon:"download",content:"Subscribe",size:"huge",color:"linkedin",style:{"border-radius":"25px",width:"auto","max-width":"100%","min-width":"40%",color:"white",marginTop:70,marginBottom:20}},r.a.createElement(b.a,{name:"download"}),r.a.createElement("p",{style:{display:"inline"}},"Download App")))))}}]),t}(n.Component),y=a(408),f=a(412),v=a(403),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(p.a.Column,{className:"landing-wrapper"},r.a.createElement(p.a.Row,{style:{paddingTop:50}},r.a.createElement(y.a,{style:{width:483,height:270,margin:"0 auto"}},r.a.createElement(f.a,{as:"h2",icon:!0},"Login",r.a.createElement(f.a.Subheader,null,"Access using your registered account!")),r.a.createElement(v.a,{icon:"users",iconPosition:"left",placeholder:"Username",style:{marginLeft:20,marginRight:20,marginTop:20}}),r.a.createElement(v.a,{type:"password",icon:"lock",iconPosition:"left",placeholder:"Password",style:{marginLeft:20,marginRight:20,marginTop:5}}),r.a.createElement(g.a,{onClick:function(){e.props.history.push("/home")},content:"Login",size:"huge",color:"linkedin",style:{"border-radius":"25px",color:"white",marginTop:20,marginBottom:5}},r.a.createElement(b.a,{name:"sign-in"}),r.a.createElement("p",{style:{display:"inline"}},"Login")),"Forgot Password")),r.a.createElement(p.a.Row,null)))}}]),t}(n.Component),j=a(217),k=a(414),C=a(413),x=a(409),D=a(407),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={animation:"push",direction:"left",dimmed:!1,visible:!0,open:!1},a.data=[{name:"Event 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida nunc, a ornare tellus. Donec vehicula erat in mi molestie, eu faucibus turpis porttitor. Vestibulum tincidunt a mi id porttitor.",date_added:"11/11/19",subscribers:"2"},{name:"Event 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida nunc, a ornare tellus. Donec vehicula erat in mi molestie, eu faucibus turpis porttitor. Vestibulum tincidunt a mi id porttitor.",date_added:"11/11/19",subscribers:"2"},{name:"Event 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida nunc, a ornare tellus. Donec vehicula erat in mi molestie, eu faucibus turpis porttitor. Vestibulum tincidunt a mi id porttitor.",date_added:"11/11/19",subscribers:"2"}],a.renderCards=function(){var e=[],t=!0,n=!1,i=void 0;try{for(var l,o=a.data[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var c=l.value;e.push(r.a.createElement(p.a.Row,null,r.a.createElement(y.a,{style:{width:"50%",margin:"0 auto",border:"none",marginTop:20}},r.a.createElement(j.a,{src:"images/image.png",wrapped:!0,ui:!1}),r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null,c.name),r.a.createElement(y.a.Meta,null,r.a.createElement("span",{className:"date"},c.date_added)),r.a.createElement(y.a.Description,null,c.description)),r.a.createElement(y.a.Content,{extra:!0},r.a.createElement("a",{onClick:function(){return a.setState({open:!0})}},r.a.createElement(b.a,{name:"share"}),"Subscribe")))))}}catch(s){n=!0,i=s}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}return e},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.animation,t.direction,t.visible),n=t.open;return r.a.createElement(k.a.Pushable,{as:C.a,style:{marginTop:30,marginBottom:30,"overflow-y":"auto"}},r.a.createElement(k.a,{as:x.a,animation:"push",icon:"labeled",vertical:!0,visible:this.state.visible,width:"thin"},r.a.createElement(x.a.Item,{as:"a"},"Birthday"),r.a.createElement(x.a.Item,{as:"a"},"Wedding"),r.a.createElement(x.a.Item,{as:"a"},"Socials"),r.a.createElement(x.a.Item,{as:"a"},"Anniversary"),r.a.createElement(x.a.Item,{as:"a"},"Others")),r.a.createElement(k.a.Pusher,null,r.a.createElement(p.a,{columns:"equal"},r.a.createElement(p.a.Row,{className:"row-wrapper"},r.a.createElement(p.a.Column,{width:1},r.a.createElement(b.a,{style:{paddingLeft:15,paddingTop:8,cursor:"pointer"},name:"bars",onClick:function(){return e.setState({visible:!a})}})),r.a.createElement(p.a.Column,{width:15,style:{"text-align":"center",overflow:"auto"}},r.a.createElement(y.a,{className:"pusher-card"},this.renderCards()))))),r.a.createElement(D.a,{closeOnEscape:!0,dimmer:"blurring",open:n,centered:!0,style:{width:"50%"}},r.a.createElement(D.a.Header,{style:{"text-align":"right"}},r.a.createElement(b.a,{name:"times",onClick:function(){return e.setState({open:!1})}})),r.a.createElement(D.a.Content,{style:{"text-align":"center"}},r.a.createElement(D.a.Description,null,r.a.createElement(g.a,{icon:"download",content:"Subscribe",size:"huge",color:"linkedin",style:{"border-radius":"25px",width:"auto","max-width":"100%","min-width":"40%",color:"white",marginTop:70,marginBottom:20}},r.a.createElement(b.a,{name:"download"}),r.a.createElement("p",{style:{display:"inline"}},"Download App"))))))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:w}),r.a.createElement(E.a,{path:"/login",component:O}),r.a.createElement(E.a,{path:"/home",component:L}))))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.a,{stackable:!0},r.a.createElement(p.a.Column,null,r.a.createElement(p.a.Row,null,r.a.createElement(R,null)))))}}]),t}(n.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-wrapper"}),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[228,1,2]]]);
//# sourceMappingURL=main.841f6df2.chunk.js.map