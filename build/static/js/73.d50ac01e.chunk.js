(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[73],{610:function(e,a,t){"use strict";var n=t(7),l=t(15),r=t(0),o=t.n(r),s=t(3),c=t.n(s),i=t(77),u=t.n(i),m=t(55),b=["className","cssModule","widths","tag"],d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),p={tag:m.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,s=e.tag,c=Object(l.a)(e,b),i=[];r.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var r=!n;if(Object(m.h)(l)){var o,s=r?"-":"-"+a+"-",b=g(r,a,l.size);i.push(Object(m.j)(u()(((o={})[b]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o)),t))}else{var d=g(r,a,l);i.push(d)}}})),i.length||i.push("col");var d=Object(m.j)(u()(a,i),t);return o.a.createElement(s,Object(n.a)({},c,{className:d}))};v.propTypes=p,v.defaultProps=h,a.a=v},620:function(e,a,t){},642:function(e,a,t){"use strict";var n=t(7),l=t(15),r=t(201),o=t(20),s=t(0),c=t.n(s),i=t(3),u=t.n(i),m=t(77),b=t.n(m),d=t(55),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,o=e.className,s=e.close,i=e.cssModule,u=e.color,m=e.outline,p=e.size,h=e.tag,g=e.innerRef,v=Object(l.a)(e,f);s&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(m?"-outline":"")+"-"+u,j=Object(d.j)(b()(o,{close:s},s||"btn",s||E,!!p&&"btn-"+p,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===h&&(h="a");var O=s?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&v.onClick?"button":void 0},v,{className:j,ref:g,onClick:this.onClick,"aria-label":t||O}))},a}(c.a.Component);h.propTypes=p,h.defaultProps={color:"secondary",tag:"button"},a.a=h},994:function(e,a,t){"use strict";t.r(a);var n=t(199),l=t(194),r=t(195),o=t(196),s=t(197),c=t(0),i=t.n(c),u=t(598),m=t(599),b=t(610),d=t(642),f=t(193),p=(t(620),t(651)),h=t.n(p),g=t(43),v=t.n(g),E=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).handlechange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.changeHandler=function(a){a.preventDefault(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),v.a.post("http://13.235.180.192:8000/user/signup",e.state).then((function(a){console.log(a),localStorage.setItem("auth-token",a.data.token),e.setState({token:a.data.token}),h()("Success!"," OTP Send Your Register Mobile Number Successful Done!","success"),e.props.history.push("/otpverify")})).catch((function(e){console.log(e.response),h()("Error!","Something went wrong","error")}))},e.state={fullname:"",email:"",mobile:"",otp:""},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{headerTop:"visible"},i.a.createElement("section",null,i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(b.a,{lg:"2"}),i.a.createElement(b.a,{lg:"8"},i.a.createElement("div",{className:"wal-amt"},i.a.createElement("h1",null,"Register Astrologer"),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(b.a,{md:"6"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Name*"),i.a.createElement("input",{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}))),i.a.createElement(b.a,{md:"6"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Email address*"),i.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your email",value:this.state.email,onChange:this.changeHandler}))),i.a.createElement(b.a,{md:"6"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Mobile Number*"),i.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number",value:this.state.mobile,onChange:this.changeHandler}))),i.a.createElement(b.a,{md:"12",className:"mt-3"},i.a.createElement(d.a,{className:"btn btn-success"},"Get OTP")))))),i.a.createElement(b.a,{lg:"2"})))))}}]),t}(i.a.Component);a.default=E}}]);
//# sourceMappingURL=73.d50ac01e.chunk.js.map