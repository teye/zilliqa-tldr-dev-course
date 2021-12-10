"use strict";(self.webpackChunkcourse=self.webpackChunkcourse||[]).push([[129],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:5},s="Custom ADT(s)",p={unversionedId:"scilla/custom_adts",id:"scilla/custom_adts",isDocsHomePage:!1,title:"Custom ADT(s)",description:"Recalled in previous tutorials that Scilla has a map structure in which we can store data in key-value format? The value which we stored so far has been the primitive data types, e.g. ByStr20, Uint128, String .etc.",source:"@site/docs/scilla/custom_adts.md",sourceDirName:"scilla",slug:"/scilla/custom_adts",permalink:"/docs/scilla/custom_adts",editUrl:"https://github.com/teye/zilliqa-tldr-dapp-course/docs/scilla/custom_adts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Events & Errors",permalink:"/docs/scilla/events_errors"},next:{title:"Remote State Reads",permalink:"/docs/scilla/remote_state_reads"}},c=[{value:"Declaration",id:"declaration",children:[{value:"Syntax",id:"syntax",children:[],level:4},{value:"Utilizing Custom ADT in Transitions",id:"utilizing-custom-adt-in-transitions",children:[],level:4}],level:2},{value:"Exercises",id:"exercises",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-adts"},"Custom ADT(s)"),(0,r.kt)("p",null,"Recalled in previous tutorials that Scilla has a map structure in which we can store data in key-value format? The value which we stored so far has been the primitive data types, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ByStr20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint128"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," .etc. "),(0,r.kt)("p",null,"What if we want to store a more complex value such as an object? "),(0,r.kt)("p",null,"This is where custom ADT short for ",(0,r.kt)("em",{parentName:"p"},"Algebraic Datatype"),". An ",(0,r.kt)("strong",{parentName:"p"},"ADT")," is a ",(0,r.kt)("strong",{parentName:"p"},"user-defined")," object that contains other primitive types."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html#algebraic-datatypes"},"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html#algebraic-datatypes")," for more details."),(0,r.kt)("h2",{id:"declaration"},"Declaration"),(0,r.kt)("p",null,"An ADT is defined after the ",(0,r.kt)("inlineCode",{parentName:"p"},"library")," keyword and before the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," declarations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scilla_version 0\n\nlibrary MyContract\n\n(* user defined ADT *)\n(* owner, unit_no, size  *)\ntype House =\n| House of ByStr20 Uint128 Uint128 \n\n(***************************************************)\n(*             The contract definition             *)\n(***************************************************)\n\ncontract MyContract\n(\n    owner: ByStr20\n)\n\n(* mutable fields declarations *)\n(* house_id -> House details *)\nfield houses_for_sales: Map Uint256 House = Emp Uint256 House\n\n(* procedures declarations *)\n\n(* transitions declarations *)\n")),(0,r.kt)("p",null,"In the above example, we declared a custom type ",(0,r.kt)("inlineCode",{parentName:"p"},"House")," after the library declaration but before the contract definition. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"House")," type consists of 3 primitive types: ",(0,r.kt)("inlineCode",{parentName:"p"},"ByStr20 Uint128 Uint128")," to record the owner address, unit number and capacity. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"field houses_for_sales: Map Uint256 House = Emp Uint256 House\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"House")," type is later declared in a map under ",(0,r.kt)("inlineCode",{parentName:"p"},"houses_for_sales"),". With these two examples, we can observe how to declare a custom ADT and also how to use it."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"To put it more formally, an ADT declaration looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type CUSTOM_ADT_NAME =\n| CUSTOM_ADT_NAME of <Type1> <Type2> .... <TypeK> \n")),(0,r.kt)("p",null,"A custom ADT can have unlimited types ",(0,r.kt)("inlineCode",{parentName:"p"},"<TypeX>")," and identical types are allowed."),(0,r.kt)("h4",{id:"utilizing-custom-adt-in-transitions"},"Utilizing Custom ADT in Transitions"),(0,r.kt)("p",null,"Now that we've learnt how to declare and use ADTs in maps, we need to know how to create the ADT and assign it to the maps. To create the ADT, we simply call the ADT name and filled in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," to the ADT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"transition AddHouse(house_id: Uint256, owner: ByStr20, unit: Uint128, capacity: Uint128)\n  new_house = House owner unit capacity;\n  houses_for_sale[house_id] := new_house\nend\n")),(0,r.kt)("p",null,"In the above ",(0,r.kt)("inlineCode",{parentName:"p"},"AddHouse()")," transition, the transition takes in ",(0,r.kt)("inlineCode",{parentName:"p"},"house_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"capacity"),". "),(0,r.kt)("p",null,"Next, the transition creates the custom ADT ",(0,r.kt)("inlineCode",{parentName:"p"},"House")," using some of the input parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"new_house = House owner unit capacity;\n")),(0,r.kt)("p",null,"When we create the custom ADT object, we must filled up all the required ",(0,r.kt)("inlineCode",{parentName:"p"},"Types")," as defined by us."),(0,r.kt)("p",null,"Finally, the new object is stored into the ",(0,r.kt)("inlineCode",{parentName:"p"},"houses_for_sale")," map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"houses_for_sale[house_id] := new_house\n")),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,"The following are some exercises to help you be familiar with ADTs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download this ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/teye/zilliqa-tldr-dapp-course/blob/main/exercises/chapter1/ch01_cryptomon_custom_adts.scilla"},(0,r.kt)("strong",{parentName:"a"},"CryptoMon Contract"))," to get started.")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Task 1"),"\nDefine a custom ADT ",(0,r.kt)("inlineCode",{parentName:"p"},"Cryptomon"),". This ADT should keep track of the Cryptomon name in ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", age in ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint128"),", height in ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint128")," and level in ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint128"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Task 2")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After declaring the new ADT, define a map called ",(0,r.kt)("inlineCode",{parentName:"li"},"cryptomons")," which takes the cryptomon id in ",(0,r.kt)("inlineCode",{parentName:"li"},"Uint256")," and map it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cryptomon")," ADT from Task 1, i.e. (",(0,r.kt)("inlineCode",{parentName:"li"},"Uint256")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Cryptomon"),")."),(0,r.kt)("li",{parentName:"ul"},"Define a new transition ",(0,r.kt)("inlineCode",{parentName:"li"},"AddCryptoMon")," that takes in ",(0,r.kt)("inlineCode",{parentName:"li"},"cryptomon_id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"age"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"height")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"level")," and add the new entry into the ",(0,r.kt)("inlineCode",{parentName:"li"},"cryptomons")," map."),(0,r.kt)("li",{parentName:"ul"},"Define a new transition ",(0,r.kt)("inlineCode",{parentName:"li"},"DeleteCryptoMon")," that deletes the specific ",(0,r.kt)("inlineCode",{parentName:"li"},"cryptomon_id")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"cryptomons"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Task 3")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy the contract on  ",(0,r.kt)("a",{parentName:"li",href:"https://ide.zilliqa.com/"},(0,r.kt)("strong",{parentName:"a"},"Neo-Savant IDE"))," on ",(0,r.kt)("strong",{parentName:"li"},"Simulated Env"),"."),(0,r.kt)("li",{parentName:"ul"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"AddCryptoMon(1, GetRichMon, 500, 12, 10)"),"."),(0,r.kt)("li",{parentName:"ul"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"AddCryptoMon(2, WhaleMon, 750, 50, 100)"),"."),(0,r.kt)("li",{parentName:"ul"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"DeleteCryptoMon(1)"),"."),(0,r.kt)("li",{parentName:"ul"},"Look at the deployed contract state on ",(0,r.kt)("strong",{parentName:"li"},"ViewBlock"),".")),(0,r.kt)("p",null,"The final contract state should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'cryptomons : {\n    "2": {\n        "argtypes": [],\n        "arguments": [\n            "WhaleMon",  // name\n            "750",       // age\n            "50",        // height\n            "100"        // level\n        ]\n    }\n}\n')))}d.isMDXComponent=!0}}]);