(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[72],{1034:function(e,t,a){e.exports=a.p+"static/media/aboutone.2423f0e2.png"},1035:function(e,t,a){e.exports=a.p+"static/media/abouttwo.e3deb932.png"},1036:function(e,t,a){e.exports=a.p+"static/media/asectionbg.24be7448.jpg"},1122:function(e,t,a){"use strict";a.r(t);var n=a(201),o=a(202),l=a(205),s=a(206),c=a(0),r=a.n(c),i=a(336),m=a(337),u=a(338),d=a(1034),p=a.n(d),g=(a(1035),a(117)),h=a(209),f=a.n(h),E=a(865),b=a(1036),v=a.n(b),N=a(57),k=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).componentDidMount=function(){N.a.get("/admin/getAbout_us").then((function(e){console.log(e.data.data),!0===e.data.status&&o.setState({aboutDetail:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},o.state={aboutDetail:[]},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.aboutDetail;return r.a.createElement(g.a,{headerTop:"visible"},r.a.createElement("section",{className:"pt-0 pb-0"},r.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{md:"12"},r.a.createElement("div",{className:"leftcont text-left"},r.a.createElement("h1",null,"About Us"),r.a.createElement("p",null))))))),r.a.createElement("section",{className:"ptb-0"},r.a.createElement(i.a,null,r.a.createElement(m.a,null,e.length?e.map((function(e,t){return r.a.createElement(u.a,{key:t,lg:"6"},r.a.createElement("div",{className:"abo-1"},r.a.createElement("h3",null,"WHAT WE DO"),r.a.createElement("p",null,null===e||void 0===e?void 0:e.aboutDetail),r.a.createElement("div",{className:"bst-stro"},r.a.createElement("h2",null,"Call Us "),r.a.createElement("h3",null,r.a.createElement("i",{class:"fa fa-phone"}),"189 000 000 000"))))})):null,r.a.createElement(u.a,{lg:"6"},r.a.createElement("div",{className:"abo-2"},r.a.createElement("img",{src:p.a,alt:"",className:"about-img"})))))),r.a.createElement("section",{style:{backgroundImage:"url(".concat(v.a,")"),width:"100%",padding:"0px 0px",backgroundSize:"cover"}},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{md:"6"},r.a.createElement("div",{className:"ourm"},r.a.createElement("h2",null,"MISSION"),r.a.createElement("p",null,"Our mission is to create a community for the people who seek astrological guidance for the betterment of life. We want to help out people who are going through a bad phase of life in the most trusted way."))),r.a.createElement(u.a,{md:"6"},r.a.createElement("div",{className:"ourm"},r.a.createElement("h2",null,"VISION"),r.a.createElement("p",null,"Our vision is to provide astrological solutions to the customers who are facing problems. We want to give direction to their life with the assistance of our trusted and certified astrologers."))),r.a.createElement(u.a,{md:"12"},r.a.createElement("div",{className:"ourm mb-50"},r.a.createElement("h2",null,"OUR STORY"),r.a.createElement("p",null,"AstroVipra came into being with an aim to not only keep the ethos of traditional astrology intact but to also amalgamate in it the solutions to modern problems like mental health, stress, depression, etc. With that being the first and foremost goal, AstroVipra founder, Puneet Gupta, has not only worked to deliver the best of Vedic astrology on the platform but has touched every aspect of mental wellness through spiritual means. With the grace of God, AstroVipra, over the years, has not only been able to achieve the aforementioned aim but also add-on to the list of \u2018achieved goals\u2019 and continues to do so. Today, with over 4000 astrologers onboard and over 1 Lakh minutes of daily consultation, AstroVipra, besides allowing you to talk to the best astrologers, also provides numerous other services like Free live sessions, Free Kundli matching, Daily horoscope and much more.")))))),r.a.createElement("section",null,r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{md:"12"},r.a.createElement(E.a,null))))))}}]),a}(r.a.Component);t.default=k},841:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/icon-img/stclient.png","countNum":1300,"title":"Satisfied Clients"},{"id":"2","image":"/assets/img/icon-img/stastro.png","countNum":20,"title":"Astrologers"},{"id":"3","image":"/assets/img/icon-img/stusers.png","countNum":4000,"title":"Registered Users"}]')},865:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(841),s=a(22),c=a(881),r=a.n(c),i=a(882),m=a.n(i),u=function(e){var t=e.data,a=e.spaceBottomClass,l=e.textAlignClass,c=Object(n.useState)(!1),i=Object(s.a)(c,2),u=i[0],d=i[1];return o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},o.a.createElement("div",{className:"single-count ".concat(l||""," ").concat(a||"")},o.a.createElement("div",{className:"count-icon"},o.a.createElement("img",{className:"animated img-secure",src:""+t.image,alt:""})),o.a.createElement("h2",{className:"count"},o.a.createElement(m.a,{onChange:function(e){e&&d(!0)},offset:{top:10},delayedCall:!0},o.a.createElement(r.a,{end:u?t.countNum:0}))),o.a.createElement("span",null,t.title)))};t.a=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass,n=e.bgClass;return o.a.createElement("div",{className:"funfact-area ".concat(t||""," ").concat(a||""," ").concat(n||"")},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},l&&l.map((function(e,t){return o.a.createElement(u,{data:e,spaceBottomClass:"mb-30",key:t,textAlignClass:"text-center"})})))))}}}]);
//# sourceMappingURL=72.f4df122c.chunk.js.map