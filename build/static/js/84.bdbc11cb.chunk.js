(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[84],{1030:function(e,t,a){"use strict";a.r(t);var l=a(194),n=a(195),c=a(204),o=a(196),s=a(197),r=a(0),m=a.n(r),i=a(4),u=a(598),d=a(599),E=a(610),p=a(642),g=a(193),h=(a(620),a(1052)),f=a(1031),b=a(1032),v=a(200),x=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("user_id"));console.log("first",e),v.a.get("/user/viewoneuser/".concat(e)).then((function(e){console.log("sjdfjdfg",e.data.data),n.setState({amount:e.data.data.amount})})).catch((function(e){console.log(e)})),v.a.get("/user/active_plans").then((function(e){console.log(e.data),!0===e.data.status&&n.setState({planList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response.data.data)}))},n.state={modal:!1,planList:[],data:{}},n.toggle=n.toggle.bind(Object(c.a)(n)),n}return Object(n.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this.state.planList;return m.a.createElement(g.a,{headerTop:"visible"},m.a.createElement("section",{className:"pt-0 pb-0"},m.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{md:"12"},m.a.createElement("div",{className:"leftcont text-left"},m.a.createElement("h1",null,"Add Money to Wallet"),m.a.createElement("h3",null,"Available balance : ",m.a.createElement("span",null,this.state.amount)))))))),m.a.createElement("section",null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{xl:"3",lg:"3",md:"3",sm:"6",xs:"6"},m.a.createElement(i.c,{to:"/walletaddform"},m.a.createElement("div",{className:"promoBox success-box info-ribbon"},m.a.createElement("aside",null,m.a.createElement("p",null,"100% extra")),m.a.createElement("h4",null,"Amount"),m.a.createElement("p",null)))),e.length?e.map((function(e,t){return m.a.createElement(E.a,{xl:"3",lg:"3",md:"3",sm:"6",xs:"6",key:t},m.a.createElement(i.c,{to:"/paymentdetail"},m.a.createElement("div",{className:"promoBox success-box info-ribbon"},m.a.createElement("aside",null,m.a.createElement("p",null,e.title)),m.a.createElement("h4",null,"INR ",e.amount))))})):null))),m.a.createElement(h.a,{size:"md",style:{maxWidth:"600px",width:"100%"},isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},m.a.createElement(f.a,{className:"wr-3",toggle:this.toggle},m.a.createElement("h2",{className:"wr-4"},"Apply Voucher Code")),m.a.createElement(b.a,null,m.a.createElement("div",{className:"Wr-1 wr-t"},m.a.createElement("form",null,m.a.createElement(E.a,{md:"12"},m.a.createElement("input",{type:"text",placeholder:"Enter Your Voucher  Code"})),m.a.createElement(p.a,{className:"btn btn-success"},"Submit"))))))}}]),a}(m.a.Component);t.default=x},620:function(e,t,a){}}]);
//# sourceMappingURL=84.bdbc11cb.chunk.js.map