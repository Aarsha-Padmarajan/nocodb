"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9279],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return o.createElement(d.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||n;return t?o.createElement(f,c(c({ref:r},l),{},{components:t})):o.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,c=new Array(n);c[0]=m;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<n;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28507:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const n={title:"Records overview",description:"Learn how to create, import, and manage records in NocoDB.",tags:["Records","Overview"],keywords:["NocoDB record","record overview"]},c=void 0,i={unversionedId:"records/records-overview",id:"records/records-overview",title:"Records overview",description:"Learn how to create, import, and manage records in NocoDB.",source:"@site/docs/080.records/010.records-overview.md",sourceDirName:"080.records",slug:"/records/records-overview",permalink:"/records/records-overview",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/080.records/010.records-overview.md",tags:[{label:"Records",permalink:"/tags/records"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"Records overview",description:"Learn how to create, import, and manage records in NocoDB.",tags:["Records","Overview"],keywords:["NocoDB record","record overview"]},sidebar:"tutorialSidebar",previous:{title:"Actions on field",permalink:"/fields/actions-on-field"},next:{title:"Create record",permalink:"/records/create-record"}},d={},s=[{value:"Related topics",id:"related-topics",level:2}],l={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Records in NocoDB are fundamental components within a database, serving as individual entries or data points within a table. Each default table in NocoDB is meticulously organized into a structured grid of records, fields (columns), and cells. These records constitute the backbone of data storage and retrieval within NocoDB, encapsulating a diverse range of information types, including text, numerical values, dates, file attachments, and even links to other records, either within the same table or across different tables. This versatile approach allows users to create highly customizable databases tailored to their specific data management needs, all centered around the concept of records."),(0,a.kt)("p",null,"In essence, a record can be envisaged as a horizontal collection of data within a NocoDB table, each record representing a distinct piece of information. These records play a pivotal role in organizing, categorizing, and presenting data in a comprehensible and efficient manner, offering users a structured and organized platform for data management. "),(0,a.kt)("p",null,"You can perform a variety of actions to efficiently manage your data. To get started, you can ",(0,a.kt)("a",{parentName:"p",href:"/records/create-record"},"create a new record")," to input essential information. If you need to make updates to an existing record, you can ",(0,a.kt)("a",{parentName:"p",href:"/records/actions-on-record#update-record"},"modify it")," or even perform a ",(0,a.kt)("a",{parentName:"p",href:"/records/actions-on-record#bulk-update-records"},"bulk update")," for multiple records simultaneously. For records that are no longer needed, you have the option to ",(0,a.kt)("a",{parentName:"p",href:"/records/actions-on-record#delete-record"},"delete")," or ",(0,a.kt)("a",{parentName:"p",href:"/records/actions-on-record#duplicate-record"},"duplicate")," them with ease. When you're working with records, you can also benefit from our expanded form for a more detailed view, complete with a ",(0,a.kt)("a",{parentName:"p",href:"/records/expand-record#record-audit"},"record change log")," to track all modifications and a feature to ",(0,a.kt)("a",{parentName:"p",href:"/records/expand-record#record-comment"},"write comments")," for more context and collaboration. Additionally, you can ",(0,a.kt)("a",{parentName:"p",href:"/records/expand-record#copy-record-url"},"share records")," quickly by generating a shareable URL. "),(0,a.kt)("p",null,"In this section, we'll explore the various aspects of records in NocoDB, equipping you with the knowledge to effectively manage your own data."),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/create-record"},"Create Record")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/actions-on-record#update-record"},"Modify an existing Record")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/actions-on-record#bulk-update-records"},"Bulk Update Records")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/actions-on-record#delete-record"},"Delete Record")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/actions-on-record#duplicate-record"},"Duplicate Record")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/expand-record"},"Working with records using an expanded form")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/expand-record#record-audit"},"Record change log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/expand-record#record-comment"},"Writing comments for a record")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/records/expand-record#copy-record-url"},"Share Record"))))}u.isMDXComponent=!0}}]);