(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[119],{696:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function l(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,s=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==s){var i=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;p.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",(function(){return r})),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0},715:function(e,t,a){"use strict";var n=a(7),o=a(13),l=a(207),r=a(20),s=a(0),i=a.n(s),c=a(3),p=a.n(c),m=a(57),d=a.n(m),u=a(35),g=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],f={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:u.o,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,r=e.className,s=e.close,c=e.cssModule,p=e.color,m=e.outline,f=e.size,h=e.tag,v=e.innerRef,b=Object(o.a)(e,g);s&&"undefined"===typeof b.children&&(b.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(m?"-outline":"")+"-"+p,y=Object(u.k)(d()(r,{close:s},s||"btn",s||E,!!f&&"btn-"+f,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),c);b.href&&"button"===h&&(h="a");var S=s?"Close":null;return i.a.createElement(h,Object(n.a)({type:"button"===h&&b.onClick?"button":void 0},b,{className:y,ref:v,onClick:this.onClick,"aria-label":a||S}))},t}(i.a.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},t.a=h},921:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(807),o=a(204),l=a(201),r=a(202),s=a(205),i=a(206),c=a(0),p=a.n(c),m=a(685),d=a.n(m),u=a(714),g=a(718),f=a(44),h=a.n(f),v=a(118),b=a(747),E=a(761),y=a(922),S=a(715),N=a(686),C=a.n(N),w=a(46),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.otpHandler=function(e){e.preventDefault(),console.log(r.state),h.a.post("http://65.2.175.154:8000/user/userVryfyotp",{mobile:parseInt(r.state.mobile),otp:parseInt(r.state.otp)}).then((function(e){var t,a,n,o,l,s;(console.log("@@@####",e.data),!0===e.data.status)&&(r.setState({otpMsg:e.data.msg}),localStorage.setItem("userData",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)),localStorage.setItem("token",JSON.stringify(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.token)),localStorage.setItem("user_id",JSON.stringify(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o._id)),localStorage.setItem("user_mobile_no",JSON.stringify(null===e||void 0===e||null===(l=e.data)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.mobile)),"otp verified"===e.data.msg&&(C()("otp verified"),r.props.history.push("/")))})).catch((function(e){console.log(e)}))},r.handlechange=function(e){e.preventDefault(),r.setState(Object(o.a)({},e.target.name,e.target.value))},r.loginHandler=function(e){e.preventDefault();var t={mobile:parseInt(r.state.mobile)};w.a.post("/user/userlogin",t).then((function(e){console.log("@@@####",e.data),r.setState({otpMsg:e.data.msg}),"otp Send Successfully"===e.data.msg&&C()("otp Send Successfully")})).catch((function(e){console.log(e),console.log(e.response),C()("Error!","User doesn't Exist","error")}))},r.changeHandler=function(e){e.preventDefault(),r.setState(Object(o.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state.data);var t=new FormData;t.append("fullname",r.state.fullname),t.append("email",r.state.email),t.append("mobile",r.state.mobile),t.append("gender",r.state.gender),t.append("city",r.state.city),t.append("dob",r.state.dob),t.append("password",r.state.password),t.append("cnfmPassword",r.state.cnfrmpassword),null!==r.state.selectedFile&&t.append("userimg",r.state.selectedFile,r.state.selectedName);var a,o=Object(n.a)(t.values());try{for(o.s();!(a=o.n()).done;){var l=a.value;console.log(l)}}catch(p){o.e(p)}finally{o.f()}var s,i=Object(n.a)(t.keys());try{for(i.s();!(s=i.n()).done;){var c=s.value;console.log(c)}}catch(p){i.e(p)}finally{i.f()}r.state.password===r.state.cnfrmpassword?w.a.post("/user/usersignup",t).then((function(e){console.log(e.data.msg),localStorage.setItem("auth-token",e.data.token),r.setState({otpMsg:e.data.otp}),C()("Success!"," Register Successful Done!","success"),r.props.history.push("/")})).catch((function(e){console.log("already exists"===e.response.data.message),"already exists"===e.response.data.message&&C()("user Already register with same mobile and email")})):C()("Password and Confirm password does not match")},r.state={fullname:"",email:"",mobile:"",dob:"",gender:"",city:"",userimg:"",selectedName:"",password:"",cnfrmpassword:"",selectedFile:null,otp:"",otpMsg:""},r}return Object(r.a)(a,[{key:"render",value:function(){return p.a.createElement(c.Fragment,null,p.a.createElement(d.a,null,p.a.createElement("title",null,"AstroVipra"),p.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),p.a.createElement(v.a,{headerTop:"visible"},p.a.createElement("div",{className:"login-register-area pt-100 pb-100"},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},p.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},p.a.createElement("div",{className:"login-register-wrapper"},p.a.createElement(u.a.Container,{defaultActiveKey:"login"},p.a.createElement(g.a,{variant:"pills",className:"login-register-tab-list"},p.a.createElement(g.a.Item,null,p.a.createElement(g.a.Link,{eventKey:"login"},p.a.createElement("h4",null,"Login"))),p.a.createElement(g.a.Item,null,p.a.createElement(g.a.Link,{eventKey:"register"},p.a.createElement("h4",null,"Register")))),p.a.createElement(u.a.Content,null,p.a.createElement(u.a.Pane,{eventKey:"login"},p.a.createElement("div",{className:"login-form-container"},"otp Send Successfully"===this.state.otpMsg?p.a.createElement("div",{className:"login-register-form"},p.a.createElement(b.a,{onSubmit:this.otpHandler},p.a.createElement(E.a,{type:"number",name:"otp",required:!0,placeholder:"Enter otp",value:this.state.otp,onChange:this.changeHandler}),p.a.createElement("div",{className:"button-box"},p.a.createElement("div",{className:"login-toggle-btn"}),p.a.createElement("button",{type:"submit"},p.a.createElement("span",null,"Otp Verify"))))):p.a.createElement("div",{className:"login-register-form"},p.a.createElement(b.a,{onSubmit:this.loginHandler},p.a.createElement(E.a,{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),p.a.createElement("div",{className:"button-box"},p.a.createElement("div",{className:"login-toggle-btn"}),p.a.createElement("button",{type:"submit"},p.a.createElement("span",null,"Login"))))))),p.a.createElement(u.a.Pane,{eventKey:"register"},p.a.createElement("div",{className:"login-form-container"},p.a.createElement("div",{className:"login-register-form"},p.a.createElement(b.a,{className:"text-center",onSubmit:this.submitHandler,method:"post"},p.a.createElement(E.a,{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"email",name:"email",required:!0,placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"date",name:"dob",required:!0,placeholder:"Date of birth",value:this.state.dob,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"text",name:"city",required:!0,placeholder:"Enter city",value:this.state.city,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"password",name:"password",required:!0,placeholder:"Enter Password",value:this.state.password,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"password",name:"cnfrmpassword",required:!0,placeholder:"Enter Confirm Password",value:this.state.cnfrmpassword,onChange:this.changeHandler}),p.a.createElement(E.a,{type:"select",name:"gender",placeholder:"",value:this.state.gender,onChange:this.changeHandler},p.a.createElement("option",null,"Select Gender"),p.a.createElement("option",null,"Male"),p.a.createElement("option",null,"Female")),p.a.createElement(y.a,null,"User Image"),p.a.createElement(E.a,{type:"file",name:"userimg",onChange:this.onChangeHandler}),p.a.createElement("div",{className:"button-box"},p.a.createElement(S.a,{type:"submit"},p.a.createElement("span",null,"Register")))))))))),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"login-form-container"},p.a.createElement("div",{className:"login-register-form"},p.a.createElement("div",{className:"button-box"},p.a.createElement("div",{className:"login-toggle-btn"})))))))))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=119.e6cb374b.chunk.js.map