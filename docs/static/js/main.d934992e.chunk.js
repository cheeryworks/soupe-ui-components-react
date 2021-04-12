(this["webpackJsonp@cheeryworks/soupe-ui-components-react"]=this["webpackJsonp@cheeryworks/soupe-ui-components-react"]||[]).push([[0],{24:function(e,s,a){},26:function(e,s,a){},32:function(e,s,a){"use strict";a.r(s);var c=a(1),i=a.n(c),l=a(16),t=a.n(l),n=a(6),r=a(2),d=a.p+"static/media/logo.b19e7c9b.png",j=(a(24),a(0));var o=function(){return Object(j.jsx)("div",{})};var b=function(){return Object(j.jsx)("div",{children:"Introduction"})},m=a(17),h=a(19);function u(e,s){return e?Object.prototype.hasOwnProperty.call(e,s)?e[s]:e:null}var x={getRecordValue:function(e,s){return s||(s="id"),u(e,s)},getRecordDisplayName:function(e,s){return s||(s="name"),u(e,s)}},O=function(e){var s=Object(c.useState)(""),a=Object(h.a)(s,2),l=a[0],t=a[1],n=i.a.createRef();function r(e,s,a){e.optionClickable&&e.optionClickable(s)&&s&&(t(x.getRecordDisplayName(s,e.displayProperty)),e.readonly||(e.onChange&&e.onChange(x.getRecordValue(s,e.valueProperty)),e.onSelect&&e.onSelect(s,a),e.closeOnClick&&n.current&&n.current.classList.remove("is-active")))}function d(e,s){return x.getRecordDisplayName(e,s)}return Object(c.useEffect)((function(){e.customizedName&&t(e.customizedName)}),[e.customizedName]),Object(c.useEffect)((function(){!function(){if(e.options&&e.options.length>0){var s=null;if(e.autoSelect&&(s=e.options[0]),e.value){var a,c=Object(m.a)(e.options);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(x.getRecordValue(i,e.valueProperty)+""===e.value+""){s=i;break}}}catch(l){c.e(l)}finally{c.f()}}s&&r(e,s,!1)}}()}),[]),Object(j.jsxs)("div",{style:{width:e.width},className:"soupe-ui-select columns is-gapless is-vcentered mx-0 my-0",children:[e.leftLabel&&Object(j.jsx)("div",{className:"soupe-ui-select-label column is-narrow",children:Object(j.jsx)("label",{children:e.leftLabel})}),Object(j.jsxs)("div",{className:"soupe-ui-select-options dropdown column",ref:n,children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{"aria-controls":"id",style:{width:e.optionWidth},onClick:function(){!function(e){e.readonly||n.current&&n.current.classList.add("is-active")}(e)},"aria-haspopup":"true",className:"button columns is-gapless",children:[Object(j.jsx)("div",{className:"column has-text-left",children:l}),!e.readonly&&Object(j.jsx)("div",{className:"column is-narrow icon is-small",children:Object(j.jsx)("i",{"aria-hidden":"true",className:"fas fa-angle-down"})})]})}),Object(j.jsx)("div",{style:{width:e.optionWidth,maxHeight:e.optionHeight?e.optionHeight:"auto"},className:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:function(e){return null!=e.options&&e.options.length>0?e.options.map((function(s){return Object(j.jsx)("button",{style:{width:e.optionWidth},onClick:function(){r(e,s,!0)},className:"dropdown-item button is-white ".concat(e.optionClickable&&!e.optionClickable(s)?"text-muted":""),children:d(s,e.displayProperty)},x.getRecordValue(s,e.valueProperty))})):e.children}(e)})})]}),e.leftLabel&&Object(j.jsx)("div",{className:"soupe-ui-select-label column is-narrow",children:Object(j.jsx)("label",{children:e.rightLabel})})]})};O.defaultProps={autoSelect:!0,closeOnClick:!0,optionWidth:"100%",optionClickable:function(e){if(e)return!0}};var p=O,N=[{id:"A1",name:"A1"},{id:"A2",name:"A2"}],g={totalPage:2,page:1,pageSizes:[20,50,100]};var v=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Default Select"}),Object(j.jsx)(p,{options:N})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Select with customized labels"}),Object(j.jsx)(p,{leftLabel:" $t('soupe.ui.components.table.pagination_pages', { currentPage: table.page, totalPage: table.totalPage > 0 ? table.totalPage : 1 }) + $t('soupe.ui.components.table.pagination_page_sizes_left_bottom_label')",options:g.pageSizes,rightLabel:" $t('soupe.ui.components.table.pagination_page_sizes_right_label') "})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Readonly Select"}),Object(j.jsx)(p,{options:N,readonly:!0})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"100% width Select"}),Object(j.jsx)(p,{options:N,width:"100%"})]})]})};var f=function(){return Object(j.jsx)("div",{children:"Tree"})};var y=function(){return Object(j.jsx)("div",{children:"TreeSelect"})};var k=function(){return Object(j.jsx)("div",{children:"Table"})},w=function(e){return Object(j.jsxs)("span",{className:"soupe-ui-tag tag ".concat(e.className),children:[e.children,e.selected&&Object(j.jsx)("button",{className:"delete is-small"})]})};w.defaultProps={selected:!1};var C=w;var S=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Normal Tags"}),Object(j.jsxs)("div",{className:"tags",children:[Object(j.jsx)(C,{children:"Default"}),Object(j.jsx)(C,{className:"is-black",children:"Black"}),Object(j.jsx)(C,{className:"is-dark",children:"Dark"}),Object(j.jsx)(C,{className:"is-light",children:"Light"}),Object(j.jsx)(C,{className:"is-white",children:"White"}),Object(j.jsx)(C,{className:"is-primary",children:"Primary"}),Object(j.jsx)(C,{className:"is-link",children:"Link"}),Object(j.jsx)(C,{className:"is-info",children:"Info"}),Object(j.jsx)(C,{className:"is-success",children:"Success"}),Object(j.jsx)(C,{className:"is-warning",children:"Warning"}),Object(j.jsx)(C,{className:"is-danger",children:"Danger"})]})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Selected Normal Tags"}),Object(j.jsxs)("div",{className:"tags",children:[Object(j.jsx)(C,{selected:!0,onClick:function(e){alert(e)},children:"Default"}),Object(j.jsx)(C,{className:"is-black",selected:!0,children:"Black"}),Object(j.jsx)(C,{className:"is-dark",selected:!0,children:"Dark"}),Object(j.jsx)(C,{className:"is-light",selected:!0,children:"Light"}),Object(j.jsx)(C,{className:"is-white",selected:!0,children:"White"}),Object(j.jsx)(C,{className:"is-primary",selected:!0,children:"Primary"}),Object(j.jsx)(C,{className:"is-link",selected:!0,children:"Link"}),Object(j.jsx)(C,{className:"is-info",selected:!0,children:"Info"}),Object(j.jsx)(C,{className:"is-success",selected:!0,children:"Success"}),Object(j.jsx)(C,{className:"is-warning",selected:!0,children:"Warning"}),Object(j.jsx)(C,{className:"is-danger",selected:!0,children:"Danger"})]})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Medium Tags"}),Object(j.jsxs)("div",{className:"tags",children:[Object(j.jsx)(C,{className:"is-medium",children:"Default"}),Object(j.jsx)(C,{className:"is-medium is-black",children:"Black"}),Object(j.jsx)(C,{className:"is-medium is-dark",children:"Dark"}),Object(j.jsx)(C,{className:"is-medium is-light",children:"Light"}),Object(j.jsx)(C,{className:"is-medium is-white",children:"White"}),Object(j.jsx)(C,{className:"is-medium is-primary",children:"Primary"}),Object(j.jsx)(C,{className:"is-medium is-link",children:"Link"}),Object(j.jsx)(C,{className:"is-medium is-info",children:"Info"}),Object(j.jsx)(C,{className:"is-medium is-success",children:"Success"}),Object(j.jsx)(C,{className:"is-medium is-warning",children:"Warning"}),Object(j.jsx)(C,{className:"is-medium is-danger",children:"Danger"})]})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Large Addon Tags"}),Object(j.jsxs)("div",{className:"tags has-addons",children:[Object(j.jsx)(C,{className:"is-large",children:"Default"}),Object(j.jsx)(C,{className:"is-large is-black",children:"Black"}),Object(j.jsx)(C,{className:"is-large is-dark",children:"Dark"}),Object(j.jsx)(C,{className:"is-large is-light",children:"Light"}),Object(j.jsx)(C,{className:"is-large is-white",children:"White"}),Object(j.jsx)(C,{className:"is-large is-primary",children:"Primary"}),Object(j.jsx)(C,{className:"is-large is-link",children:"Link"}),Object(j.jsx)(C,{className:"is-large is-info",children:"Info"}),Object(j.jsx)(C,{className:"is-large is-success",children:"Success"}),Object(j.jsx)(C,{className:"is-large is-warning",children:"Warning"}),Object(j.jsx)(C,{className:"is-large is-danger",children:"Danger"})]})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",children:"Medium Rounded Tags"}),Object(j.jsxs)("div",{className:"tags",children:[Object(j.jsx)(C,{className:"is-rounded is-medium",children:"Default"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-black",children:"Black"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-dark",children:"Dark"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-light",children:"Light"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-white",children:"White"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-primary",children:"Primary"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-link",children:"Link"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-info",children:"Info"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-success",children:"Success"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-warning",children:"Warning"}),Object(j.jsx)(C,{className:"is-rounded is-medium is-danger",children:"Danger"})]})]})]})};a(26);var D=function(){var e=Object(r.f)();return Object(j.jsx)(n.a,{children:Object(j.jsxs)("div",{className:"tile hero-body px-0 py-0 soupe-ui-layout-sidebar",children:[Object(j.jsx)("div",{className:"tile is-vertical is-3 pl-2 pr-1 py-2 hero",children:Object(j.jsxs)("div",{className:"panel is-primary hero-body px-0 py-0 hero",children:[Object(j.jsx)("p",{className:"panel-heading hero-head",children:"Components"}),Object(j.jsxs)("div",{className:"hero-body px-0 py-0",children:[Object(j.jsx)("p",{className:"panel-block"}),Object(j.jsxs)(n.b,{className:"panel-block",to:"".concat(e.url),exact:!0,activeClassName:"is-active",children:[Object(j.jsx)("span",{className:"panel-icon",children:Object(j.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Introduction"]}),Object(j.jsxs)(n.b,{className:"panel-block",to:"".concat(e.url,"/select"),activeClassName:"is-active",children:[Object(j.jsx)("span",{className:"panel-icon",children:Object(j.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Select"]}),Object(j.jsxs)(n.b,{className:"panel-block",to:"".concat(e.url,"/tree"),activeClassName:"is-active",children:[Object(j.jsx)("span",{className:"panel-icon",children:Object(j.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Tree"]}),Object(j.jsxs)(n.b,{className:"panel-block",to:"".concat(e.url,"/tree-select"),activeClassName:"is-active",children:[Object(j.jsx)("span",{className:"panel-icon",children:Object(j.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Tree Select"]}),Object(j.jsxs)(n.b,{className:"panel-block",to:"".concat(e.url,"/table"),activeClassName:"is-active",children:[Object(j.jsx)("span",{className:"panel-icon",children:Object(j.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Table"]}),Object(j.jsxs)(n.b,{className:"panel-block",to:"".concat(e.url,"/tag"),activeClassName:"is-active",children:[Object(j.jsx)("span",{className:"panel-icon",children:Object(j.jsx)("i",{className:"fas fa-angle-right","aria-hidden":"true"})}),"Tag"]}),Object(j.jsx)("p",{className:"panel-block"})]})]})}),Object(j.jsx)("div",{className:"tile is-9 pl-1 pr-2 py-2 soupe-ui-layout-main-content hero",children:Object(j.jsx)("div",{className:"panel hero-body px-2 py-2",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"".concat(e.path,"/select"),children:Object(j.jsx)(v,{})}),Object(j.jsx)(r.a,{path:"".concat(e.path,"/tree"),children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"".concat(e.path,"/tree-select"),children:Object(j.jsx)(y,{})}),Object(j.jsx)(r.a,{path:"".concat(e.path,"/table"),children:Object(j.jsx)(k,{})}),Object(j.jsx)(r.a,{path:"".concat(e.path,"/tag"),children:Object(j.jsx)(S,{})}),Object(j.jsx)(r.a,{path:e.path,children:Object(j.jsx)(b,{})})]})})})]})})};var L=function(){return Object(j.jsx)(n.a,{children:Object(j.jsxs)("div",{className:"hero soupe-ui-layout-container",children:[Object(j.jsxs)("nav",{className:"hero-head navbar soupe-ui-layout-header is-dark",role:"navigation","aria-label":"main navigation",children:[Object(j.jsx)("div",{className:"navbar-brand",children:Object(j.jsxs)(n.b,{className:"navbar-item",to:"/",children:[Object(j.jsx)("img",{src:d,className:"logo",alt:""}),"Soupe UI Components (React)"]})}),Object(j.jsx)("div",{className:"navbar-menu",id:"navbar-menu",children:Object(j.jsxs)("div",{className:"navbar-start",children:[Object(j.jsx)(n.b,{className:"navbar-item",to:"/",exact:!0,activeClassName:"is-active",children:"Home"}),Object(j.jsx)(n.b,{className:"navbar-item",to:"/components",exact:!0,activeClassName:"is-active",children:"Components"})]})})]}),Object(j.jsx)("div",{className:"hero-body px-0 py-0 soupe-ui-layout-body hero",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/components",children:Object(j.jsx)(D,{})}),Object(j.jsx)(r.a,{path:"/",children:Object(j.jsx)(o,{})})]})}),Object(j.jsxs)("div",{className:"hero-foot px-1 py-1 soupe-ui-layout-footer",children:["\xa9",(new Date).getFullYear()," Beijing CheeryWorks Technology Co., Ltd."]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.d934992e.chunk.js.map