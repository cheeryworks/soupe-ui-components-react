(this["webpackJsonp@cheeryworks/soupe-ui-components-react"]=this["webpackJsonp@cheeryworks/soupe-ui-components-react"]||[]).push([[0],{34:function(e,c,s){var a={"./demos_en.json":35,"./demos_zh.json":36};function t(e){var c=i(e);return s(c)}function i(e){if(!s.o(a,e)){var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}return a[e]}t.keys=function(){return Object.keys(a)},t.resolve=i,e.exports=t,t.id=34},38:function(e,c,s){var a={"./components_en.json":39,"./components_zh.json":40};function t(e){var c=i(e);return s(c)}function i(e){if(!s.o(a,e)){var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}return a[e]}t.keys=function(){return Object.keys(a)},t.resolve=i,e.exports=t,t.id=38},41:function(e,c,s){},48:function(e,c,s){},54:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),i=s(23),n=s.n(i),l=s(29),r=s(11);var o=function(){var e=s(34),c=s(37),a={};e.keys().forEach((function(s){var t=s.match(/([A-Za-z0-9-_]+)\./i);if(t&&t.length>1){var i=t[1].split("_")[1];a[i]=c.recursive(!0,a[i],e(s))}}));var t=s(38);return t.keys().forEach((function(e){var s=e.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){var i=s[1].split("_")[1];a[i]=c.recursive(!0,a[i],t(e))}})),a}(),d={en:{translation:o.en},zh:{translation:o.zh}};l.a.use(r.e).init({resources:d,lng:"en",interpolation:{prefix:"{",suffix:"}"}});var j=s(4),u=s(2),b=s.p+"static/media/logo.b19e7c9b.png",h=(s(41),s(0));var m=function(){return Object(h.jsx)("div",{})};var O=function(){return Object(h.jsx)("div",{children:"Introduction"})},x=s(14),p=s(5);function v(e,c){return e?Object.prototype.hasOwnProperty.call(e,c)?e[c]:e:null}var f={getRecordValue:function(e,c){return c||(c="id"),v(e,c)},getRecordDisplayName:function(e,c){return c||(c="name"),v(e,c)}},N=t.a.forwardRef((function(e,c){var s=Object(a.useState)(""),i=Object(p.a)(s,2),n=i[0],l=i[1],r=t.a.createRef();function o(){r.current&&r.current.classList.remove("is-active")}function d(e,c,s){e.optionClickable&&e.optionClickable(c)&&c&&(l(f.getRecordDisplayName(c,e.displayProperty)),e.readonly||(e.onChange&&e.onChange(f.getRecordValue(c,e.valueProperty)),e.onSelect&&e.onSelect(c,s),e.closeOnClick&&o()))}function j(e,c){return f.getRecordDisplayName(e,c)}return Object(a.useImperativeHandle)(c,(function(){return{close:function(){o()}}})),Object(a.useEffect)((function(){e.customizedName&&l(e.customizedName)}),[e.customizedName]),Object(a.useEffect)((function(){!function(){if(e.options&&e.options.length>0){var c=null;if(e.autoSelect&&(c=e.options[0]),e.value){var s,a=Object(x.a)(e.options);try{for(a.s();!(s=a.n()).done;){var t=s.value;if(f.getRecordValue(t,e.valueProperty)+""===e.value+""){c=t;break}}}catch(i){a.e(i)}finally{a.f()}}c&&d(e,c,!1)}}()}),[]),Object(h.jsxs)("div",{style:{width:e.width},className:"soupe-ui-select columns is-gapless is-vcentered mx-0 my-0",children:[e.leftLabel&&Object(h.jsx)("div",{className:"soupe-ui-select-label column is-narrow",children:Object(h.jsx)("label",{children:e.leftLabel})}),Object(h.jsxs)("div",{className:"soupe-ui-select-options dropdown column",ref:r,children:[Object(h.jsx)("div",{className:"dropdown-trigger",children:Object(h.jsxs)("button",{"aria-controls":"id",style:{width:e.optionWidth},onClick:function(){!function(e){e.readonly||r.current&&r.current.classList.add("is-active")}(e)},"aria-haspopup":"true",className:"button columns is-gapless",children:[Object(h.jsx)("div",{className:"column has-text-left",children:n}),!e.readonly&&Object(h.jsx)("div",{className:"column is-narrow icon is-small",children:Object(h.jsx)("i",{"aria-hidden":"true",className:"fas fa-angle-down"})})]})}),Object(h.jsx)("div",{style:{width:e.optionWidth,maxHeight:e.optionHeight?e.optionHeight:"auto"},className:"dropdown-menu",role:"menu",children:Object(h.jsx)("div",{className:"dropdown-content",children:function(e){return null!=e.options&&e.options.length>0?e.options.map((function(c){return Object(h.jsx)("button",{style:{width:e.optionWidth},onClick:function(){d(e,c,!0)},className:"dropdown-item button is-white ".concat(e.optionClickable&&!e.optionClickable(c)?"text-muted":""),children:j(c,e.displayProperty)},f.getRecordValue(c,e.valueProperty))})):e.children}(e)})})]}),e.leftLabel&&Object(h.jsx)("div",{className:"soupe-ui-select-label column is-narrow",children:Object(h.jsx)("label",{children:e.rightLabel})})]})}));N.defaultProps={autoSelect:!0,closeOnClick:!0,optionWidth:"100%",optionClickable:function(e){if(e)return!0}};var g=N,y=s(55),k=[{id:"A1",name:"A1"},{id:"A2",name:"A2"}],C={totalPage:2,page:1,pageSizes:[20,50,100]};var w=function(){var e=Object(y.a)().t;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Default Select"}),Object(h.jsx)(g,{options:k})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Select with customized labels"}),Object(h.jsx)(g,{leftLabel:e("soupe.ui.components.table.pagination_pages",{currentPage:C.page,totalPage:C.totalPage>0?C.totalPage:1})+e("soupe.ui.components.table.pagination_page_sizes_left_bottom_label"),options:C.pageSizes,rightLabel:e("soupe.ui.components.table.pagination_page_sizes_right_label")})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Readonly Select"}),Object(h.jsx)(g,{options:k,readonly:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"100% width Select"}),Object(h.jsx)(g,{options:k,width:"100%"})]})]})},P=s(20),S=function(e){var c=Object(a.useState)(!1),s=Object(p.a)(c,2),t=s[0],i=s[1],n=Object(a.useState)(!1),l=Object(p.a)(n,2),r=l[0],o=l[1],d=Object(a.useState)(!1),j=Object(p.a)(d,2),u=j[0],b=j[1],m=Object(a.useState)(""),O=Object(p.a)(m,2),x=O[0],v=O[1];return Object(a.useEffect)((function(){f.getRecordValue(e.record,e.valueProperty)===e.selectedItemValue?i(!0):i(!1)}),[e.record,e.valueProperty,e.selectedItemValue]),Object(a.useEffect)((function(){e.record.children?v(r?"fa-caret-down":"fa-caret-right"):v("")}),[e.expandedLevel,e.level,e.record,r]),Object(a.useEffect)((function(){e.expandedLevel&&e.expandedLevel>=0&&e.level>=e.expandedLevel?o(!1):o(!0)}),[]),Object(h.jsxs)("div",{className:"soupe-ui-tree-item",children:[Object(h.jsx)("div",{className:"soupe-ui-tree-item-current".concat(t?" active":""),style:{paddingLeft:15*e.level},onMouseLeave:function(){b(!1)},onMouseOver:function(){b(!0)},children:Object(h.jsxs)("div",{className:"columns is-gapless is-vcentered",children:[Object(h.jsx)("div",{onClick:function(){e.record.leaf||o(!r)},className:"column is-narrow soupe-ui-tree-item-arrow",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas ".concat(x)})})}),Object(h.jsx)("div",{onClick:function(){return e.onItemClick&&e.onItemClick(e.record),void(e.itemClickable&&e.itemClickable(e.record)&&i(!0))},className:"column soupe-ui-tree-item-name",children:Object(h.jsx)("div",{className:"".concat(e.itemClickable&&!e.itemClickable(e.record)?"text-muted":""),children:f.getRecordDisplayName(e.record,e.displayProperty)})}),u&&Object(h.jsx)("div",{className:"column is-narrow soupe-ui-tree-item-controls",children:function(){if(e.itemControls)return e.itemControls(e.record)}()})]})}),e.record.children&&r&&Object(h.jsx)("div",{className:"soupe-ui-tree-item-children",children:D(e.record.children,e,e.level+1,e.onItemClick)})]})};S.defaultProps={level:0};var L=S;function D(e,c,s,a){if(null!=e&&e.length>0)return e.map((function(e){return Object(h.jsx)(L,Object(P.a)(Object(P.a)({},c),{},{onItemClick:a,record:e,level:s}),e.id)}))}var I=function(e){var c=Object(a.useState)(),s=Object(p.a)(c,2),t=s[0],i=s[1],n={selectedItemValue:t,expandedLevel:e.expandedLevel,valueProperty:e.valueProperty,displayProperty:e.displayProperty,itemClickable:e.itemClickable,itemControls:e.itemControls};return Object(a.useEffect)((function(){e.selectedItemValue&&i(e.selectedItemValue)}),[e.selectedItemValue]),Object(a.useEffect)((function(){!e.selectedItemValue&&e.autoSelect&&e.records&&e.records.length>0&&i(f.getRecordValue(e.records[0],e.valueProperty))}),[]),Object(h.jsx)("div",{className:"soupe-ui-tree",children:D(e.records,n,0,(function(c){i(f.getRecordValue(c,e.valueProperty)),e.onItemSelected&&e.onItemSelected(c)}))})};I.defaultProps={autoSelect:!0,selectOnClick:!0,expandedLevel:0,itemClickable:function(){return!0}};var A=I,R=[{id:"A",name:"A",children:[{id:"A1",name:"A1"},{id:"A2",name:"A2"}]}];var _=function(){return Object(h.jsx)(A,{records:R,itemControls:function(e){return Object(h.jsx)("a",{children:Object(h.jsx)("i",{className:"icon fas fa-bars",onClick:function(){return console.log(e)}})})}})},z=function(e){var c=Object(y.a)().t,s=Object(a.useState)(),t=Object(p.a)(s,2),i=t[0],n=t[1],l=Object(a.useState)(),r=Object(p.a)(l,2),o=r[0],d=r[1],j=Object(a.useRef)();function u(c){if(e.value&&c&&c.length>0){var s,a=Object(x.a)(c);try{for(a.s();!(s=a.n()).done;){var t=s.value;if(f.getRecordValue(t,e.valueProperty)+""===e.value+"")return t;if(t.children&&t.children.length>0){var i=u(t.children);if(i)return i}}}catch(n){a.e(n)}finally{a.f()}}return null}return Object(a.useEffect)((function(){var s=null;e.value&&(s=u(e.options)),s||e.value||!e.autoSelect||e.options&&e.options.length>0&&(s=e.options[0]),s?(d(f.getRecordValue(e.options[0],e.valueProperty)),n(f.getRecordDisplayName(e.options[0],e.displayProperty))):(d(null),n(c("soupe.ui.components.select.options.empty")))}),[]),Object(h.jsx)(g,{ref:j,closeOnClick:e.closeOnClick,customizedName:i,value:o,leftLabel:e.leftLabel,rightLabel:e.rightLabel,readonly:e.readonly,width:e.width,children:Object(h.jsx)(A,{autoSelect:!1,expandedLevel:e.expandedLevel,itemClickable:e.itemClickable,records:e.options,selectedItemValue:o,onItemSelected:function(c){return function(c){n(f.getRecordDisplayName(c,e.displayProperty)),d(f.getRecordValue(c,e.valueProperty)),j.current&&j.current.close()}(c)}})})};z.defaultProps={autoSelect:!0};var W=z,E=[{id:"A",name:"A",children:[{id:"A1",name:"A1"},{id:"A2",name:"A2"}]}];var T=function(){return Object(h.jsx)(W,{options:E,width:"100%"})},V=function(e){return Object(h.jsx)("div",{children:"Table"})};V.defaultProps={};var B=V;var M=function(){return Object(h.jsx)(B,{})},H=function(e){return Object(h.jsxs)("span",{className:"soupe-ui-tag tag ".concat(e.className),children:[e.children,e.selected&&Object(h.jsx)("button",{className:"delete is-small"})]})};H.defaultProps={selected:!1};var U=H;var K=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Normal Tags"}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsx)(U,{children:"Default"}),Object(h.jsx)(U,{className:"is-black",children:"Black"}),Object(h.jsx)(U,{className:"is-dark",children:"Dark"}),Object(h.jsx)(U,{className:"is-light",children:"Light"}),Object(h.jsx)(U,{className:"is-white",children:"White"}),Object(h.jsx)(U,{className:"is-primary",children:"Primary"}),Object(h.jsx)(U,{className:"is-link",children:"Link"}),Object(h.jsx)(U,{className:"is-info",children:"Info"}),Object(h.jsx)(U,{className:"is-success",children:"Success"}),Object(h.jsx)(U,{className:"is-warning",children:"Warning"}),Object(h.jsx)(U,{className:"is-danger",children:"Danger"})]})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Selected Normal Tags"}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsx)(U,{selected:!0,onClick:function(e){alert(e)},children:"Default"}),Object(h.jsx)(U,{className:"is-black",selected:!0,children:"Black"}),Object(h.jsx)(U,{className:"is-dark",selected:!0,children:"Dark"}),Object(h.jsx)(U,{className:"is-light",selected:!0,children:"Light"}),Object(h.jsx)(U,{className:"is-white",selected:!0,children:"White"}),Object(h.jsx)(U,{className:"is-primary",selected:!0,children:"Primary"}),Object(h.jsx)(U,{className:"is-link",selected:!0,children:"Link"}),Object(h.jsx)(U,{className:"is-info",selected:!0,children:"Info"}),Object(h.jsx)(U,{className:"is-success",selected:!0,children:"Success"}),Object(h.jsx)(U,{className:"is-warning",selected:!0,children:"Warning"}),Object(h.jsx)(U,{className:"is-danger",selected:!0,children:"Danger"})]})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Medium Tags"}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsx)(U,{className:"is-medium",children:"Default"}),Object(h.jsx)(U,{className:"is-medium is-black",children:"Black"}),Object(h.jsx)(U,{className:"is-medium is-dark",children:"Dark"}),Object(h.jsx)(U,{className:"is-medium is-light",children:"Light"}),Object(h.jsx)(U,{className:"is-medium is-white",children:"White"}),Object(h.jsx)(U,{className:"is-medium is-primary",children:"Primary"}),Object(h.jsx)(U,{className:"is-medium is-link",children:"Link"}),Object(h.jsx)(U,{className:"is-medium is-info",children:"Info"}),Object(h.jsx)(U,{className:"is-medium is-success",children:"Success"}),Object(h.jsx)(U,{className:"is-medium is-warning",children:"Warning"}),Object(h.jsx)(U,{className:"is-medium is-danger",children:"Danger"})]})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Large Addon Tags"}),Object(h.jsxs)("div",{className:"tags has-addons",children:[Object(h.jsx)(U,{className:"is-large",children:"Default"}),Object(h.jsx)(U,{className:"is-large is-black",children:"Black"}),Object(h.jsx)(U,{className:"is-large is-dark",children:"Dark"}),Object(h.jsx)(U,{className:"is-large is-light",children:"Light"}),Object(h.jsx)(U,{className:"is-large is-white",children:"White"}),Object(h.jsx)(U,{className:"is-large is-primary",children:"Primary"}),Object(h.jsx)(U,{className:"is-large is-link",children:"Link"}),Object(h.jsx)(U,{className:"is-large is-info",children:"Info"}),Object(h.jsx)(U,{className:"is-large is-success",children:"Success"}),Object(h.jsx)(U,{className:"is-large is-warning",children:"Warning"}),Object(h.jsx)(U,{className:"is-large is-danger",children:"Danger"})]})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{className:"label",children:"Medium Rounded Tags"}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsx)(U,{className:"is-rounded is-medium",children:"Default"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-black",children:"Black"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-dark",children:"Dark"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-light",children:"Light"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-white",children:"White"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-primary",children:"Primary"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-link",children:"Link"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-info",children:"Info"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-success",children:"Success"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-warning",children:"Warning"}),Object(h.jsx)(U,{className:"is-rounded is-medium is-danger",children:"Danger"})]})]})]})},F=function(e){return Object(h.jsx)("div",{children:"Context Menu"})};F.defaultProps={};var J=F;var Z=function(){return Object(h.jsx)(J,{})},Y=function(e){return Object(h.jsx)("div",{children:"Message Box"})};Y.defaultProps={};var $=Y;var q=function(){return Object(h.jsx)($,{})},G=function(e){function c(e,c){var s={key:e.key||String(c)};return t.a.cloneElement(e,s)}return Object(h.jsx)("div",{className:"soupe-ui-card panel hero hero-body px-0 py-0 ".concat(e.className),children:e.children.map(c)})};G.defaultProps={};var Q=G,X=function(e){return Object(h.jsx)("div",{className:"hero-head panel-heading soupe-ui-card-header",children:e.children})};X.defaultProps={};var ee=X,ce=function(e){return Object(h.jsx)("div",{className:"hero-body px-0 py-0",children:e.children})};ce.defaultProps={};var se=ce;var ae=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(Q,{children:[Object(h.jsx)(ee,{children:"Normal Card"}),Object(h.jsx)(se,{children:"These are content of card."})]}),Object(h.jsxs)(Q,{className:"is-primary",children:[Object(h.jsx)(ee,{children:"Primary Card"}),Object(h.jsx)(se,{children:"These are content of card."})]}),Object(h.jsxs)(Q,{className:"is-info",children:[Object(h.jsx)(ee,{children:"Info Card"}),Object(h.jsx)(se,{children:"These are content of card."})]}),Object(h.jsxs)(Q,{className:"is-success",children:[Object(h.jsx)(ee,{children:"Success Card"}),Object(h.jsx)(se,{children:"These are content of card."})]}),Object(h.jsxs)(Q,{className:"is-warning",children:[Object(h.jsx)(ee,{children:"Warning Card"}),Object(h.jsx)(se,{children:"These are content of card."})]}),Object(h.jsxs)(Q,{className:"is-danger",children:[Object(h.jsx)(ee,{children:"Danger Card"}),Object(h.jsx)(se,{children:"These are content of card."})]})]})},te=function(e){var c=Object(a.useState)(""),s=Object(p.a)(c,2),i=s[0],n=s[1];function l(e,c){var s=e.key||String(c),a={key:s,itemKey:s,active:i?s===i:e.props.active,onItemClick:function(e){n(e)}};return t.a.cloneElement(e,a)}return Object(h.jsx)("div",{className:"soupe-ui-accordion ".concat(e.className),children:e.children.map(l)})};te.defaultProps={};var ie=te,ne=function(e){function c(c,s){var a={key:c.key||String(s),active:e.active};return t.a.cloneElement(c,a)}return Object(h.jsx)("div",{onClick:function(){return function(){var c=e.onItemClick;"function"===typeof c&&c(e.itemKey)}()},className:"soupe-ui-accordion-item hero".concat(e.active?" is-active":""),children:e.children.map(c)})};ne.defaultProps={};var le=ne,re=function(e){return Object(h.jsx)("div",{className:"soupe-ui-accordion-item-title hero-head px-3 py-3".concat(e.active?" is-active":""),children:Object(h.jsxs)("div",{className:"columns",children:[Object(h.jsx)("div",{className:"column",children:e.children&&Object(h.jsx)("span",{children:e.children})}),Object(h.jsx)("div",{className:"column is-narrow",children:(e.alert||0===e.alert)&&Object(h.jsx)("span",{className:"tag is-rounded is-danger",children:e.alert})}),Object(h.jsx)("div",{className:"column is-narrow",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas ".concat(e.active?"fa-angle-down":"fa-angle-right")})})})]})})};re.defaultProps={};var oe=re,de=function(e){return e.active?Object(h.jsx)("div",{style:{height:e.height},className:"hero-body soupe-ui-accordion-item-content",children:e.children}):Object(h.jsx)("div",{})};de.defaultProps={};var je=de;var ue=function(){return Object(h.jsxs)(ie,{className:"hero-body",children:[Object(h.jsxs)(le,{children:[Object(h.jsx)(oe,{children:"A"}),Object(h.jsx)(je,{children:"A"})]}),Object(h.jsxs)(le,{active:!0,children:[Object(h.jsx)(oe,{children:"B"}),Object(h.jsx)(je,{children:"B"})]}),Object(h.jsxs)(le,{children:[Object(h.jsx)(oe,{alert:"20",children:"C"}),Object(h.jsx)(je,{children:"C"})]}),Object(h.jsxs)(le,{children:[Object(h.jsx)(oe,{children:"D"}),Object(h.jsx)(je,{children:"D"})]})]})},be=function(e){var c=Object(a.useState)(""),s=Object(p.a)(c,2),i=s[0],n=s[1];function l(c,s){var a=c.key||String(s),l={key:a,itemKey:a,active:i?a===i:c.props.active,isLast:s===e.children.length-1,onItemClick:function(e){n(e)}};return t.a.cloneElement(c,l)}return Object(h.jsx)("div",{className:"soupe-ui-wizard columns is-vcentered is-gapless px-2 py-2 ".concat(e.className),children:e.children.map(l)})};be.defaultProps={};var he=be,me=function(e){return Object(h.jsxs)("div",{style:{width:e.width},onClick:function(){return function(){var c=e.onItemClick;"function"===typeof c&&c(e.itemKey)}()},className:"soupe-ui-wizard-item column columns is-vcentered is-gapless my-0",children:[Object(h.jsx)("a",{className:"column ".concat(e.active?"active":""),children:e.children}),!e.isLast&&Object(h.jsx)("a",{className:"column is-narrow",children:Object(h.jsx)("i",{className:"fas fa-angle-right"})})]})};me.defaultProps={};var Oe=me;var xe=function(){return Object(h.jsxs)(he,{children:[Object(h.jsx)(Oe,{active:!0,children:"A"}),Object(h.jsx)(Oe,{children:"B"}),Object(h.jsx)(Oe,{children:"C"})]})},pe=function(e){return Object(h.jsx)("div",{children:"Date Picker"})};pe.defaultProps={};var ve=pe;var fe=function(){return Object(h.jsx)(ve,{})};s(48);var Ne=function(){var e=Object(u.g)();return Object(h.jsx)(j.a,{children:Object(h.jsxs)("div",{className:"tile hero-body px-0 py-0 soupe-ui-layout-sidebar",children:[Object(h.jsx)("div",{className:"tile is-vertical is-3 pl-2 pr-1 py-2 hero",children:Object(h.jsxs)("div",{className:"panel is-primary hero-body px-0 py-0 hero",children:[Object(h.jsx)("p",{className:"panel-heading hero-head",children:"Components"}),Object(h.jsxs)("div",{className:"hero-body px-0 py-0",children:[Object(h.jsx)("p",{className:"panel-block"}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/introduction"),exact:!0,activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Introduction"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/select"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Select"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/tree"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Tree"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/tree-select"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Tree Select"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/table"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Table"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/tag"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Tag"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/context-menu"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Context Menu"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/message-box"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Message Box"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/card"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Card"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/accordion"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Accordion"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/wizard"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Wizard"]}),Object(h.jsxs)(j.b,{className:"panel-block",to:"".concat(e.url,"/date-picker"),activeClassName:"is-active",children:[Object(h.jsx)("span",{className:"panel-icon",children:Object(h.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Date Picker"]}),Object(h.jsx)("p",{className:"panel-block"})]})]})}),Object(h.jsx)("div",{className:"tile is-9 pl-1 pr-2 py-2 soupe-ui-layout-main-content hero",children:Object(h.jsx)("div",{className:"panel hero-body px-2 py-2 hero",children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"".concat(e.path,"/select"),children:Object(h.jsx)(w,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/tree"),children:Object(h.jsx)(_,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/tree-select"),children:Object(h.jsx)(T,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/table"),children:Object(h.jsx)(M,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/tag"),children:Object(h.jsx)(K,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/context-menu"),children:Object(h.jsx)(Z,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/message-box"),children:Object(h.jsx)(q,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/card"),children:Object(h.jsx)(ae,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/accordion"),children:Object(h.jsx)(ue,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/wizard"),children:Object(h.jsx)(xe,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/date-picker"),children:Object(h.jsx)(fe,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path,"/introduction"),children:Object(h.jsx)(O,{})}),Object(h.jsx)(u.b,{path:"".concat(e.path),children:Object(h.jsx)(u.a,{to:"".concat(e.path,"/introduction")})})]})})})]})})};var ge=function(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)("div",{className:"hero soupe-ui-layout-container",children:[Object(h.jsxs)("nav",{className:"hero-head navbar soupe-ui-layout-header is-dark",role:"navigation","aria-label":"main navigation",children:[Object(h.jsx)("div",{className:"navbar-brand",children:Object(h.jsxs)(j.b,{className:"navbar-item",to:"/",children:[Object(h.jsx)("img",{src:b,className:"logo",alt:""}),"Soupe UI Components (React)"]})}),Object(h.jsx)("div",{className:"navbar-menu",id:"navbar-menu",children:Object(h.jsxs)("div",{className:"navbar-start",children:[Object(h.jsx)(j.b,{className:"navbar-item",to:"/",exact:!0,activeClassName:"is-active",children:"Home"}),Object(h.jsx)(j.b,{className:"navbar-item",to:"/components",exact:!0,activeClassName:"is-active",isActive:function(e,c){return!!c.pathname.startsWith("/components")},children:"Components"})]})})]}),Object(h.jsx)("div",{className:"hero-body px-0 py-0 soupe-ui-layout-body hero",children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/components",children:Object(h.jsx)(Ne,{})}),Object(h.jsx)(u.b,{path:"/",children:Object(h.jsx)(m,{})})]})}),Object(h.jsxs)("div",{className:"hero-foot px-1 py-1 soupe-ui-layout-footer",children:["\xa9",(new Date).getFullYear()," Beijing CheeryWorks Technology Co., Ltd."]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.7b1616cf.chunk.js.map