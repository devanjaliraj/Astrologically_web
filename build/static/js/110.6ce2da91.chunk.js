(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[110,129],{1135:function(e,t,a){"use strict";a.r(t);var n=a(201),c=a(202),l=a(205),o=a(206),r=a(0),i=a.n(r),s=a(2),u=a(335),m=a(336),d=a(337),p=a(117),f=a(872),E=a(61),v=a(209),g=a.n(v),h=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={productList:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(t),E.a.get("/user/productbycategory/".concat(t)).then((function(t){console.log("productbycategory",t.data),!0===t.data.status&&e.setState({productList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.productList;return i.a.createElement(p.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Online-puja Products"),i.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),i.a.createElement("section",{className:"ptb-0"},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"12"},i.a.createElement("div",{className:"pt-10 pb-50"},i.a.createElement(f.default,null),i.a.createElement(m.a,null,e.length?e.map((function(e,t){return i.a.createElement(d.a,{md:"3",key:t},i.a.createElement("div",{className:"po-box text-center"},i.a.createElement(m.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"po-1 text-center"},i.a.createElement("img",{src:null===e||void 0===e?void 0:e.image[0],alt:"pooja",width:"50%"}))),i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"po-1 text-center"},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,"Puja Starting from @\u20b9",(null===e||void 0===e?void 0:e.price)?null===e||void 0===e?void 0:e.price:0),i.a.createElement(s.c,{to:"/poojadetail/"+e._id,className:"pto-l text-center"},"Book Now"))))))})):null))),i.a.createElement(d.a,{lg:"6"})))))}}]),a}(i.a.Component);t.default=h},756:function(e,t,a){"use strict";t.a=function(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}},872:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(830);t.default=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"st-search"},c.a.createElement(l.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){console.log("Focused")},autoFocus:!0,formatResult:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),c.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}}}]);
//# sourceMappingURL=110.6ce2da91.chunk.js.map