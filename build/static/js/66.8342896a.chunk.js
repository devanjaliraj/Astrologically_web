(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[66],{1037:function(e,t,a){"use strict";a.r(t);var n=a(198),o=a(194),l=a(195),s=a(204),r=a(196),c=a(197),i=a(0),u=a.n(i),d=a(598),m=a(599),b=a(611),f=a(643),p=a(193),h=(a(622),a(200)),g=a(650),v=a.n(g),j=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t={userid:JSON.parse(localStorage.getItem("user_id")),amount:parseInt(l.state.amount)};h.a.post("/user/add_custome_amt",t).then((function(e){console.log("@@@@@",e.data.data),v()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/demoChat")})).catch((function(e){v()("Error!","You clicked the button!","error"),console.log(e)}))},l.state={modal:!1,userid:"",amount:""},l.toggle=l.toggle.bind(Object(s.a)(l)),l}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return u.a.createElement(p.a,{headerTop:"visible"},u.a.createElement("section",null,u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(b.a,{lg:"2"}),u.a.createElement(b.a,{lg:"8"},u.a.createElement("div",{className:"wal-amt"},u.a.createElement("h3",null,"Add Amount to Wallet"),u.a.createElement("form",{onSubmit:this.submitHandler},u.a.createElement(m.a,null,u.a.createElement(b.a,{md:"12"},u.a.createElement("label",null,"Amount"),u.a.createElement("input",{type:"text",placeholder:"Enter Amount",name:"amount",value:this.state.amount,onChange:this.changeHandler})),u.a.createElement(b.a,{md:"12",className:"mt-3"},u.a.createElement(f.a,{className:"btn btn-success"},"Submit")))))),u.a.createElement(b.a,{lg:"2"})))))}}]),a}(u.a.Component);t.default=j},611:function(e,t,a){"use strict";var n=a(7),o=a(15),l=a(0),s=a.n(l),r=a(3),c=a.n(r),i=a(77),u=a.n(i),d=a(55),m=["className","cssModule","widths","tag"],b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),p={tag:d.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.widths,r=e.tag,c=Object(o.a)(e,m),i=[];l.forEach((function(t,n){var o=e[t];if(delete c[t],o||""===o){var l=!n;if(Object(d.h)(o)){var s,r=l?"-":"-"+t+"-",m=g(l,t,o.size);i.push(Object(d.j)(u()(((s={})[m]=o.size||""===o.size,s["order"+r+o.order]=o.order||0===o.order,s["offset"+r+o.offset]=o.offset||0===o.offset,s)),a))}else{var b=g(l,t,o);i.push(b)}}})),i.length||i.push("col");var b=Object(d.j)(u()(t,i),a);return s.a.createElement(r,Object(n.a)({},c,{className:b}))};v.propTypes=p,v.defaultProps=h,t.a=v},622:function(e,t,a){},643:function(e,t,a){"use strict";var n=a(7),o=a(15),l=a(201),s=a(20),r=a(0),c=a.n(r),i=a(3),u=a.n(i),d=a(77),m=a.n(d),b=a(55),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,s=e.className,r=e.close,i=e.cssModule,u=e.color,d=e.outline,p=e.size,h=e.tag,g=e.innerRef,v=Object(o.a)(e,f);r&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(d?"-outline":"")+"-"+u,E=Object(b.j)(m()(s,{close:r},r||"btn",r||j,!!p&&"btn-"+p,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),i);v.href&&"button"===h&&(h="a");var O=r?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&v.onClick?"button":void 0},v,{className:E,ref:g,onClick:this.onClick,"aria-label":a||O}))},t}(c.a.Component);h.propTypes=p,h.defaultProps={color:"secondary",tag:"button"},t.a=h}}]);
//# sourceMappingURL=66.8342896a.chunk.js.map