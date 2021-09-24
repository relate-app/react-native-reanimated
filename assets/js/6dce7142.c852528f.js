"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[5694],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={id:"view",title:"View, Props, etc",sidebar_label:"View, Props, etc"},c=void 0,l={unversionedId:"view",id:"version-1.x.x/view",isDocsHomePage:!1,title:"View, Props, etc",description:"Follow the original Animated library guides to learn how values can be connected to View attributes.",source:"@site/versioned_docs/version-1.x.x/view.md",sourceDirName:".",slug:"/view",permalink:"/react-native-reanimated/docs/1.x.x/view",version:"1.x.x",frontMatter:{id:"view",title:"View, Props, etc",sidebar_label:"View, Props, etc"},sidebar:"version-1.x.x/docs",previous:{title:"Event handling",permalink:"/react-native-reanimated/docs/1.x.x/event"},next:{title:"Animated.Code",permalink:"/react-native-reanimated/docs/1.x.x/code"}},p=[],u={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow the original ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," library guides to learn how values can be connected to View attributes.\nSimilarly with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," you need to use components prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.")," (remember to ",(0,a.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/getting_started#installation"},"import")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," from reanimated package). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Animated from 'react-native-reanimated';\n\n// use\n<Animated.View/>\n// instead of\n<View/>\n")))}s.isMDXComponent=!0}}]);