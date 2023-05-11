(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),i=(n(14),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={query:""},n.updateQuery=function(t){n.setState(function(){return{query:t.trim()}})},n.clearQuery=function(){n.updateQuery("")},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state.query,n=this.props,a=n.contacts,o=n.onDeleteContact,r=n.onNavigate,i=""===e?a:a.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});return c.a.createElement("div",{className:"list-contacts"},c.a.createElement("div",{className:"list-contacts-top"},c.a.createElement("input",{className:"search-contacts",type:"text",placeholder:"Search Contacts",value:e,onChange:function(e){return t.updateQuery(e.target.value)}}),c.a.createElement("a",{href:"#create",onClick:r,className:"add-contact"},"Add contact")),i.length!==a.length&&c.a.createElement("div",{className:"showing-contacts"},c.a.createElement("span",null,"Now showing ",i.length," of ",a.length),c.a.createElement("button",{onClick:this.clearQuery},"Show all")),c.a.createElement("ol",{className:"contact-list"},i.map(function(t){return c.a.createElement("li",{key:t.id,className:"contact-list-item"},c.a.createElement("div",{className:"contact-avatar",style:{backgroundImage:"url(".concat(t.avatarURL,")")}}),c.a.createElement("div",{className:"contact-details"},c.a.createElement("p",null,t.name),c.a.createElement("p",null,t.handle)),c.a.createElement("button",{onClick:function(){return o(t)},className:"contact-remove"},"Remove"))})))}}]),e}(a.Component),d=(n(8),Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_CONTACTS_API_URL||"http://localhost:5001"),m=localStorage.token;m||(m=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:m},p=function(t){return fetch("".concat(d,"/contacts/").concat(t.id),{method:"DELETE",headers:v}).then(function(t){return t.json()}).then(function(t){return t.contact})},g=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,"Create contact")}}]),e}(a.Component),w=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],screen:"list"},n.removeContact=function(t){n.setState(function(e){return{contacts:e.contacts.filter(function(e){return e.id!==t.id})}}),p(t)},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(d,"/contacts"),{headers:v}).then(function(t){return t.json()}).then(function(t){return t.contacts}).then(function(e){t.setState(function(){return{contacts:e}})})}},{key:"render",value:function(){var t=this;return c.a.createElement("div",null,"list"===this.state.screen&&c.a.createElement(f,{contacts:this.state.contacts,onDeleteContact:this.removeContact,onNavigate:function(){t.setState(function(){return{screen:"create"}})}}),"create"===this.state.screen&&c.a.createElement(g,null))}}]),e}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}r.a.render(c.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");E?(function(t){fetch(t).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):b(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(t)})}}()},9:function(t,e,n){t.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.b07e0365.chunk.js.map