(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[83],{1095:function(e,t,a){"use strict";a.r(t);var n=a(99),l=a(27),o=a(28),c=a(212),r=a(49),s=a(50),i=a(0),u=a.n(i),b=a(326),p=a(327),m=a(328),d=a(674),h=a(121),f=(a(661),a(47)),v=a.n(f),g=a(652),E=a.n(g),k=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"",otp:"123456",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(o.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.post("http://65.2.148.70:8000/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali"),E()("Success!"," OTP Verify Successful Done!","success"),t.props.history.push("/completeproastro")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return u.a.createElement(h.a,{headerTop:"visible"},u.a.createElement("section",null,u.a.createElement(b.a,null,u.a.createElement(p.a,null,u.a.createElement(m.a,{lg:"2"}),u.a.createElement(m.a,{lg:"8"},u.a.createElement("div",{className:"wal-amt"},u.a.createElement("h1",null,"Verify OTP"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement(p.a,null,u.a.createElement(m.a,{md:"12"},u.a.createElement("label",null,"Enter Your OTP Here"),u.a.createElement("input",{type:"text",placeholder:"Enter OTP",name:"otp",value:this.state.otp,onChange:this.changeHandler})),u.a.createElement(m.a,{md:"12",className:"mt-3"},u.a.createElement(d.a,{className:"btn btn-success"},"Submit")))))),u.a.createElement(m.a,{lg:"2"})))))}}]),a}(u.a.Component);t.default=k},661:function(e,t,a){},674:function(e,t,a){"use strict";var n=a(7),l=a(14),o=a(208),c=a(20),r=a(0),s=a.n(r),i=a(3),u=a.n(i),b=a(60),p=a.n(b),m=a(38),d=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,c=e.className,r=e.close,i=e.cssModule,u=e.color,b=e.outline,h=e.size,f=e.tag,v=e.innerRef,g=Object(l.a)(e,d);r&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(b?"-outline":"")+"-"+u,k=Object(m.j)(p()(c,{close:r},r||"btn",r||E,!!h&&"btn-"+h,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);g.href&&"button"===f&&(f="a");var O=r?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:k,ref:v,onClick:this.onClick,"aria-label":a||O}))},t}(s.a.Component);f.propTypes=h,f.defaultProps={color:"secondary",tag:"button"},t.a=f}}]);
//# sourceMappingURL=83.d0e55253.chunk.js.map