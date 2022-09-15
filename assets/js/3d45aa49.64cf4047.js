"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"MouseEventParams",title:"Interface: MouseEventParams",sidebar_label:"MouseEventParams",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,s={unversionedId:"api/interfaces/MouseEventParams",id:"version-3.8/api/interfaces/MouseEventParams",title:"Interface: MouseEventParams",description:"Represents a mouse event.",source:"@site/versioned_docs/version-3.8/api/interfaces/MouseEventParams.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MouseEventParams",permalink:"/lightweight-charts/docs/api/interfaces/MouseEventParams",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"MouseEventParams",title:"Interface: MouseEventParams",sidebar_label:"MouseEventParams",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},l=[{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"point",id:"point",level:3},{value:"seriesPrices",id:"seriesprices",level:3},{value:"hoveredSeries",id:"hoveredseries",level:3},{value:"hoveredMarkerId",id:"hoveredmarkerid",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a mouse event."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"time"},"time"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"time"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#utctimestamp"},(0,n.kt)("inlineCode",{parentName:"a"},"UTCTimestamp"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BusinessDay"},(0,n.kt)("inlineCode",{parentName:"a"},"BusinessDay"))),(0,n.kt)("p",null,"Time of the data at the location of the mouse event."),(0,n.kt)("p",null,"The value will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if the location of the event in the chart is outside the range of available data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"point"},"point"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"point"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Point"},(0,n.kt)("inlineCode",{parentName:"a"},"Point"))),(0,n.kt)("p",null,"Location of the event in the chart."),(0,n.kt)("p",null,"The value will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if the event is fired outside the chart, for example a mouse leave event."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"seriesprices"},"seriesPrices"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"seriesPrices"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},(0,n.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),">",", ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barprice"},(0,n.kt)("inlineCode",{parentName:"a"},"BarPrice"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BarPrices"},(0,n.kt)("inlineCode",{parentName:"a"},"BarPrices")),">"),(0,n.kt)("p",null,"Prices of all series at the location of the event in the chart."),(0,n.kt)("p",null,"Keys of the map are ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},"ISeriesApi")," instances. Values are prices.\nEach price is a number for line, area, and histogram series or a OHLC object for candlestick and bar series."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hoveredseries"},"hoveredSeries"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"hoveredSeries"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},(0,n.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),">"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi"},"ISeriesApi")," for the series at the point of the mouse event."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hoveredmarkerid"},"hoveredMarkerId"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"hoveredMarkerId"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"The ID of the marker at the point of the mouse event."))}u.isMDXComponent=!0}}]);