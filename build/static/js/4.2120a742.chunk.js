(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,8],{167:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(0),n(90);var i=n(1);t.default=function(e){var t=e.title;return Object(i.jsx)("div",{className:"header",children:t})}},94:function(e,t,n){"use strict";n.r(t);var i=n(2),l=n(3),c=n(0),r=n(161),s=n(139),o=n(179),a=n(20),d=n(64),j=n.n(d),u=n(88),b=n(24),h=n(32),p=(n(167),n(1)),x={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{margin:10,padding:10,width:"600px"}};t.default=function(e){var t=Object(c.useContext)(a.a),n=e.header,d=Object(c.useState)(null),O=Object(l.a)(d,2),f=O[0],y=O[1];return Object(c.useEffect)((function(){fetch(b.a.experiences,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return y(e.experiences)})).catch((function(e){return e}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.default,{title:n}),f?Object(p.jsx)("div",{className:"section-content-container",children:Object(p.jsx)(s.a,{children:Object(p.jsx)(r.Timeline,{lineColor:t.timelineLineColor,children:f.map((function(e){return console.log(e.dateText),Object(p.jsx)(j.a,{children:Object(p.jsxs)(r.TimelineItem,{dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:x.itemStyle,bodyContainerStyle:{color:t.color},children:[Object(p.jsx)("h2",{className:"item-title",children:e.title}),Object(p.jsxs)("div",{style:x.subtitleContainerStyle,children:[Object(p.jsx)("h4",{style:Object(i.a)(Object(i.a)({},x.subtitleStyle),{},{color:t.accentColor}),children:e.subtitle}),e.workType&&Object(p.jsxs)("h5",{style:x.inlineChild,children:["\xa0\xb7"," ",e.workType]})]}),Object(p.jsx)("ul",{style:x.ulStyle,children:e.workDescription.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.a,{children:e,components:{p:"span"}})}),Object(p.jsx)("br",{})]},e)}))})]},e.title+e.dateText)})}))})})}):Object(p.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=4.2120a742.chunk.js.map