(this["webpackJsonpcount-me-in"]=this["webpackJsonpcount-me-in"]||[]).push([[0],{171:function(e,t,a){e.exports=a.p+"static/media/icon.692eaa51.png"},189:function(e,t,a){e.exports=a(371)},194:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),s=a.n(o),l=(a(194),a(19)),c=a(20),i=a(27),u=a(26),m=(a(46),a(119)),h=a.n(m),d=a(165),p=a(28),v=a(167),g=a.n(v),f=(a(196),a(129),a(86)),E=a(16),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:null,eventname:"Enter event name"},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.onFormSubmit=n.onFormSubmit.bind(Object(p.a)(n)),n.handleTextChange=n.handleTextChange.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"handleTextChange",value:function(e){this.setState({eventname:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.setState((function(e,t){return{date:e.startDate,eventname:e.eventname}})),document.getElementById("event-text").classList.add("saved-text"),this.sendEvent()}},{key:"sendEvent",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.username,a=this.state.eventname,n=this.state.startDate,r={user:t,event:a,time:n.getTime()},e.next=6,fetch("https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/setnewcountdown",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)}).then((function(e){200===e.status?console.log("countdown date has been sent",r):e.status>399&&console.log("countdown date has wasnt sent, check errors")})).catch((function(e){console.warn("Something went wrong.",e)}));case 6:e.sent;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(f.a,{className:"accordion-countdown"},r.a.createElement(E.a,null,r.a.createElement(E.a.Header,null,r.a.createElement(f.a.Toggle,{as:E.a.Header,eventKey:"0"},"Add new countdown")),r.a.createElement(f.a.Collapse,{eventKey:"0"},r.a.createElement("div",{className:"countdown-new"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"event-group"},r.a.createElement("textarea",{id:"event-text",placeholder:"Your event name..",onChange:this.handleTextChange})),r.a.createElement(g.a,{className:"date-picker",selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa",withPortal:!0}),r.a.createElement("button",{className:"btn btn-primary"},"Start Countdown")))))))}}]),a}(r.a.Component),y=a(29),w=a(81),C=a(65),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"user1"},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleTextChange=n.handleTextChange.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(e){document.getElementById("user-display").innerHTML="Welcome "+this.state.username,document.getElementById("user-name").value="",this.props.passUserName(this.state.username)}},{key:"handleTextChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{inline:!0},r.a.createElement(w.a,{type:"text",placeholder:"enter username..",className:"mr-sm-2",id:"user-name",onChange:this.handleTextChange}),r.a.createElement(C.a,{variant:"success",onClick:this.handleClick},"Login")))}}]),a}(r.a.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date,days:0,hours:0,min:0,sec:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e,t){return{date:t.date}})),this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)}},{key:"componentDidUnmount",value:function(){this.stop()}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.date!==e.date&&this.setState((function(e,t){return{date:t.date}})),this.interval=setInterval((function(){var e=t.calculateCountdown(t.props.date);e?t.setState(e):t.stop()}),1e3)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"calculateCountdown",value:function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var a={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return t>=31557600&&(a.years=Math.floor(t/31557600),t-=365.25*a.years*86400),t>=86400&&(a.days=Math.floor(t/86400),t-=86400*a.days),t>=3600&&(a.hours=Math.floor(t/3600),t-=3600*a.hours),t>=60&&(a.min=Math.floor(t/60),t-=60*a.min),a.sec=t,a}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.min,o=e.sec;return r.a.createElement("div",null,r.a.createElement("h3",{className:"countdown-text"},t," days, ",a," hrs, ",n," min, ",o," s remaining"))}}]),a}(r.a.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"dateObj",value:function(e){return new Date(e)}},{key:"render",value:function(){var e=this.props.timerData;if(0===Object.keys(e).length)return null;if(null===e.countdowns)return r.a.createElement("p",{style:{color:"white"}},"You don't have any countdowns, add some!");for(var t=[],a=0;a<e.countdowns.length;a++){var n=new Date(e.countdowns[a].time),o=n.toString(),s=e.countdowns[a].event;t.push({date:n,dateString:o,dateEvent:s})}return t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"timer-card",bg:"light",text:"dark",style:{width:"83rem"}},r.a.createElement(E.a.Header,null,e.dateEvent),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Text,null,e.dateString),r.a.createElement(O,{date:e.date}))),r.a.createElement("br",null))}))}}]),a}(r.a.Component),S=(r.a.Component,a(170)),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:"user",email:"email"},n.handleUserChange=n.handleUserChange.bind(Object(p.a)(n)),n.handleEmailChange=n.handleEmailChange.bind(Object(p.a)(n)),n.login=n.login.bind(Object(p.a)(n)),n.signup=n.signup.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"login",value:function(e){e.preventDefault();var t={user:this.state.user};console.log("loginData",t),fetch("https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/login",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(e){200===e.status?console.log("login was a success",e):e.status>399&&console.log("user name doesn't exist")})).catch((function(e){console.warn("Something went wrong.",e)}))}},{key:"signup",value:function(e){e.preventDefault();var t={user:this.state.user,email:this.state.email};console.log("signupData",t),fetch("https://law20kowah.execute-api.us-west-2.amazonaws.com/prod/signup",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(e){200===e.status?console.log("signup is a success",e):e.status>399&&console.log("user name is not available, choose another")})).catch((function(e){console.warn("Something went wrong.",e)}))}},{key:"handleUserChange",value:function(e){this.setState({user:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(E.a,{className:"p-3"},r.a.createElement(E.a.Header,null,"Been here before?",r.a.createElement(E.a.Title,{className:"text-muted"},"Welcome back!")),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicUser"},r.a.createElement(y.a.Label,{sm:"2"},"Username"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Username",onChange:this.handleUserChange})),r.a.createElement(C.a,{variant:"primary",type:"submit",onClick:this.login},"Login"))),r.a.createElement(E.a,{className:"p-3"},r.a.createElement(E.a.Header,null,"First time?",r.a.createElement(E.a.Title,{className:"text-muted"},"Hey there, let's get to know you")),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicUser"},r.a.createElement(y.a.Label,null,"Username"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Username",onChange:this.handleUserChange})),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",onChange:this.handleEmailChange})),r.a.createElement(C.a,{variant:"primary",type:"submit",onClick:this.signup},"Signup"))))}}]),a}(r.a.Component),D=a(385),T=a(124),N=a(383),U=a(384),M=a(171),I=a.n(M),B=function(){return r.a.createElement(D.a,{as:"h1",icon:!0},"Count Me In!",r.a.createElement(T.a,{name:"clock"}),r.a.createElement(N.a,{hidden:!0}),r.a.createElement(D.a.Subheader,null,"Create personalized countdown timers"),r.a.createElement(U.a,{src:I.a,fluid:!0}))},F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getUsername=function(e){n.setState({username:e})},n.state={username:null,timerData:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(x,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){}},[[189,1,2]]]);
//# sourceMappingURL=main.98621299.chunk.js.map