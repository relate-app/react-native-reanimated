"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[2283],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4041:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o={id:"useAnimatedRef",title:"useAnimatedRef",sidebar_label:"useAnimatedRef"},s=void 0,c={unversionedId:"api/hooks/useAnimatedRef",id:"version-2.3.0-beta.1/api/hooks/useAnimatedRef",isDocsHomePage:!1,title:"useAnimatedRef",description:"This hook provides extended functionality of a standard ref. You can assign it to some component like ` and then access the target component via animatedRef.current. Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: const viewTag = animatedRef(). This comes handy when using native methods like scrollTo and measure`.",source:"@site/versioned_docs/version-2.3.0-beta.1/api/hooks/useAnimatedRef.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedRef",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedRef",version:"2.3.0-beta.1",frontMatter:{id:"useAnimatedRef",title:"useAnimatedRef",sidebar_label:"useAnimatedRef"},sidebar:"version-2.3.0-beta.1/docs",previous:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedGestureHandler"},next:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedReaction"}},u=[{value:"Example",id:"example",children:[]}],d={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This hook provides extended functionality of a standard ref. You can assign it to some component like ",(0,i.kt)("inlineCode",{parentName:"p"},"<View ref={ animatedRef } />")," and then access the target component via ",(0,i.kt)("inlineCode",{parentName:"p"},"animatedRef.current"),". Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"const viewTag = animatedRef()"),". This comes handy when using native methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollTo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"measure"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef()\n\n  useDerivedValue(() => {\n    const viewTag = aref();\n    // ...\n  })\n\n  const componentRef = aref.current\n  // ...\n\n  return <View ref={aref} />;\n}\n")))}l.isMDXComponent=!0}}]);