(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{91:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(16),n=a.n(c),r=a(12),l=a(8),i=(a(91),a(9)),o=a(96),u=a(97),d=a(1),m=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=e.chatId,m=e.creds,j=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.o)(m,r,{text:t}),n("")};return Object(d.jsxs)("form",{className:"message-form",onSubmit:j,children:[Object(d.jsx)("input",{className:"message-input",placeholder:"send a message",value:c,onChange:function(t){n(t.target.value),Object(l.l)(e,r)},onSubmit:j}),Object(d.jsx)("label",{htmlFor:"upload-button",children:Object(d.jsx)("span",{className:"image-button",children:Object(d.jsx)(o.a,{className:"picture-icon"})})}),Object(d.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.o)(m,r,{files:e.target.files,text:""})}}),Object(d.jsx)("button",{className:"send-button",children:Object(d.jsx)(u.a,{className:"send-icon"})})]})},j=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(d.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(d.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},b=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.userName!==c.sender.userName;return Object(d.jsxs)("div",{className:"message-row",children:[n&&Object(d.jsx)("div",{className:"message-avatar",style:{backgroundImage:c.sender&&"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(d.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(d.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){return n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(d.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))};return n?Object(d.jsxs)("div",{className:"chat-feed",children:[Object(d.jsxs)("div",{className:"chat-title-container",children:[Object(d.jsx)("div",{className:"chat-title",children:n.title}),Object(d.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],i=s===n.sender.username;return Object(d.jsxs)("div",{style:{width:"100%"},children:[Object(d.jsx)("div",{className:"message-block",children:i?Object(d.jsx)(j,{message:n}):Object(d.jsx)(b,{message:n,lastMessage:c[r]})}),Object(d.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px"},children:l(n,i)})]},"msg_".concat(a))}))}(),Object(d.jsx)("div",{style:{height:"100px"}}),Object(d.jsx)("div",{className:"message-form-container",children:Object(d.jsx)(m,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading..."},p=a(24),g=a.n(p),x=a(40),v=a(4),O=a.n(v),f=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),m=Object(i.a)(u,2),j=m[0],b=m[1],h=function(){var e=Object(x.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"e92e4996-43d3-43f7-9fda-7d014791b9a9","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,O.a.get("https://api.chatengine.io/chats/",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Incorrect Username or password!");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("h1",{className:"title",children:"Chat Application"}),Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsx)("input",{type:"text",value:a,placeholder:"Username",onChange:function(e){c(e.target.value)},className:"input",required:!0}),Object(d.jsx)("input",{type:"password",value:l,placeholder:"Password",onChange:function(e){o(e.target.value)},className:"input",required:!0}),Object(d.jsx)("div",{align:"center",children:Object(d.jsx)("button",{type:"submit",className:"button",children:Object(d.jsx)("span",{children:"Start Chatting"})})}),Object(d.jsx)("h2",{className:"error",children:j})]})]})})},N=function(){return localStorage.getItem("username")?Object(d.jsx)(l.d,{height:"100vh",projectID:"e92e4996-43d3-43f7-9fda-7d014791b9a9",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(d.jsx)(h,Object(r.a)({},e))},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):Object(d.jsx)(f,{})};n.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.95cd79df.chunk.js.map