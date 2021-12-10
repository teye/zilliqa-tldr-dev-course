"use strict";(self.webpackChunkcourse=self.webpackChunkcourse||[]).push([[815],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4237:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:1},p="Integrating Zilliqa with React",s={unversionedId:"react/react_zilliqa",id:"react/react_zilliqa",isDocsHomePage:!1,title:"Integrating Zilliqa with React",description:"So far, in Chapter 1, we covered Scilla; Zilliqa's smart contract langauge. In Chapter 2, we covered Zilliqa API and Zilliqa JS, both of which help us communicate with the Zilliqa blockchain and fetch contract state.",source:"@site/docs/react/react_zilliqa.md",sourceDirName:"react",slug:"/react/react_zilliqa",permalink:"/zilliqa-tldr-dapp-course/docs/react/react_zilliqa",editUrl:"https://github.com/teye/zilliqa-tldr-dapp-course/docs/react/react_zilliqa.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Zilliqa Javascript Library",permalink:"/zilliqa-tldr-dapp-course/docs/zilliqa-js/javascript"}},c=[{value:"React + ZilliqaJS",id:"react--zilliqajs",children:[{value:"Step 1",id:"step-1",children:[],level:4},{value:"Step 2",id:"step-2",children:[],level:4},{value:"Step 3",id:"step-3",children:[],level:4},{value:"Step 4",id:"step-4",children:[],level:4},{value:"Step 5",id:"step-5",children:[],level:4},{value:"Step 6",id:"step-6",children:[],level:4},{value:"Step 7",id:"step-7",children:[],level:4},{value:"Step 8",id:"step-8",children:[],level:4}],level:2},{value:"The End",id:"the-end",children:[{value:"Other Places For More Knowledge",id:"other-places-for-more-knowledge",children:[],level:4}],level:2}],d={toc:c};function u(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-zilliqa-with-react"},"Integrating Zilliqa with React"),(0,o.kt)("p",null,"So far, in Chapter 1, we covered Scilla; Zilliqa's smart contract langauge. In Chapter 2, we covered Zilliqa API and Zilliqa JS, both of which help us communicate with the Zilliqa blockchain and fetch contract state."),(0,o.kt)("p",null,"In this final section of the TLDR course, we will walk-through the steps to develop a simple React DApp that will combine all our knowledge from the previous chapters. This DApp will demonstrate how to fetch contract state and rendered it on the UI and also calling transitions with buttons."),(0,o.kt)("h2",{id:"react--zilliqajs"},"React + ZilliqaJS"),(0,o.kt)("h4",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"First, we are going to create a sample react app"),(0,o.kt)("p",null,"Open a terminal and execute the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app cryptomon\n")),(0,o.kt)("h4",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"Copy and replace the following code for ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},'import \'./App.css\';\n\nfunction App() {\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Cryptomon</h1>\n        <p>A crypto-currency sample react app</p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"Now, let's run the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd cryptomon\nnpm run start\n")),(0,o.kt)("p",null,"Browse to http://localhost:3000, it should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Main Page",src:t(6897).Z})),(0,o.kt)("h4",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"Now, we have to deploy the Cryptomon contract."),(0,o.kt)("p",null,"Download this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/teye/zilliqa-tldr-dapp-course/tree/main/exercises/chapter3/cryptomon.scilla"},(0,o.kt)("strong",{parentName:"a"},"Cryptomon"))," contract and head to ",(0,o.kt)("a",{parentName:"p",href:"https://ide.zilliqa.com"},(0,o.kt)("strong",{parentName:"a"},"Neo Savant IDE")),"."),(0,o.kt)("p",null,"On Neo-Savant IDE, select ",(0,o.kt)("strong",{parentName:"p"},"Testnet")," and deploy this contract."),(0,o.kt)("p",null,"Take note of the contract address."),(0,o.kt)("p",null,"Next, select the deployed contract on Neo-Savant IDE. "),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon"),", set the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," to your wallet address. "),(0,o.kt)("p",null,"Once the transaction is confirmed, check the state on Devex Zilliqa or ViewBlock to ensure that the new token id is added to ",(0,o.kt)("inlineCode",{parentName:"p"},"token_owners")," map."),(0,o.kt)("h4",{id:"step-4"},"Step 4"),(0,o.kt)("p",null,"Next, let's return back to our ",(0,o.kt)("strong",{parentName:"p"},"react app"),". "),(0,o.kt)("p",null,"We are going to add ",(0,o.kt)("strong",{parentName:"p"},"Zilliqa JS")," so that we can fetch the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_owners")," and display it on our react app."),(0,o.kt)("p",null,"Open a terminal and change to the react app directory execute the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @zilliqa-js/zilliqa\n")),(0,o.kt)("h4",{id:"step-5"},"Step 5"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and add the following code to create a new state variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},"import { useState } from 'react';\nimport './App.css';\n\nfunction App() {\n  const [data, setData] = useState([]);\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <h1>Cryptomon</h1>\n        <p>A crypto-currency sample react app</p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," variable is going to store our ",(0,o.kt)("inlineCode",{parentName:"p"},"token_owners"),"."),(0,o.kt)("br",null),(0,o.kt)("p",null,"Next, let's import the Zilliqa module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},"import { useState } from 'react';\nimport './App.css';\n\nconst { Zilliqa } = require('@zilliqa-js/zilliqa');\n\n\nasync function fetchTokenOwners() {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  const cryptomonAddr = '0x_contract_addr';\n  \n  const owners = await zilliqa.blockchain.getSmartContractSubState(\n      `${cryptomonAddr}`,\n      'token_owners',\n  );\n\n  return owners;\n}\n\nfunction App() {\n  const [data, setData] = useState([]);\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <h1>Cryptomon</h1>\n        <p>A crypto-currency sample react app</p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"We imported the ",(0,o.kt)("strong",{parentName:"p"},"Zilliqa")," module and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchTokenOwners()")," function that fetches the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_owners")," field."),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"0x_contract_addr")," to your deployed contract address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const cryptomonAddr = '0x_contract_addr';\n")),(0,o.kt)("p",null,"Next, we have to call ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchTokenOwners()")," when the page load initially. "),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," and add the following code to ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},"import { useState, useEffect } from 'react';\nimport './App.css';\n\nconst { Zilliqa } = require('@zilliqa-js/zilliqa');\n\n\nasync function fetchTokenOwners() {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  const cryptomonAddr = '0x_contract_addr';\n  \n  const owners = await zilliqa.blockchain.getSmartContractSubState(\n      `${cryptomonAddr}`,\n      'token_owners',\n  );\n\n  return owners;\n}\n\nfunction App() {\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    let owners = [];\n\n    setLoading(true);\n\n    fetchTokenOwners()\n      .then((res) => {\n        if (res.result) {\n          for (const [token_id, owner_address] of Object.entries(res.result.token_owners)) {\n            owners.push({\n              token_id: token_id,\n              owner: owner_address,\n            })\n          }\n        }\n      })\n      .catch((err) => {\n        console.error(err);\n      })\n      .finally(() => {\n        console.log(owners);\n        setData([...owners]);\n        setLoading(false);\n      })\n  }, []);\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <h1>Cryptomon</h1>\n        <p>A crypto-currency sample react app</p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," code block fetches the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_owners")," on page load. The data is converted into an ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," of JSON object in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"[{ token_id_1, owner_address_1 }, { token_id_2, owner_address_2 }, ... ]")," and store in a React state variable ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,o.kt)("h4",{id:"step-6"},"Step 6"),(0,o.kt)("p",null,"Next, we can render the data to show on the UI."),(0,o.kt)("p",null,"Replace the following code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"return (...)")," section in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},"<header className=\"App-header\">\n<h1>Cryptomon</h1>\n<p>A crypto-currency sample react app</p>\n\n{\n    loading ?\n    <p>Loading cryptomons...</p> :\n\n    (\n    data &&\n    data.length > 0 &&\n    data.map((item) => (\n        <div key={item.token_id}>\n        <span>Token ID: {item.token_id}&nbsp;&nbsp;Owner: {'0x<wallet-address>'}</span>\n        </div>\n    ))\n    )\n}\n</header>\n")),(0,o.kt)("p",null,"Run the DApp, it should display the token IDs and owners:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Owners",src:t(197).Z})),(0,o.kt)("h4",{id:"step-7"},"Step 7"),(0,o.kt)("p",null,"Next, we are going to add a button that will invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon")," using ZilliqaJS."),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," code under ",(0,o.kt)("inlineCode",{parentName:"p"},"return (...)")," section in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},'  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Cryptomon</h1>\n        <p>A crypto-currency sample react app</p>\n\n        {\n          loading ?\n          <p>Loading cryptomons...</p> :\n\n          (\n            data &&\n            data.length > 0 &&\n            data.map((item) => (\n              <div key={item.token_id}>\n                <span>Token ID: {item.token_id}&nbsp;&nbsp;Owner: {\'0x<wallet-address>\'}</span>\n              </div>\n            ))\n          )\n        }\n\n        <p></p>\n        <button onClick={() => onAddCryptoMon()}>Add CryptoMon</button>\n      </header>\n    </div>\n  );\n')),(0,o.kt)("p",null,"The button will call a ",(0,o.kt)("inlineCode",{parentName:"p"},"onAddCryptoMon")," handler function."),(0,o.kt)("p",null,"Now, let's add the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon")," call as a new function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},'// async function fetchTokenOwners() ...\n\nasync function AddCryptoMon(token_id, address) {\n  const zilliqa = new Zilliqa(\'https://dev-api.zilliqa.com\');\n  const privateKey = process.env.REACT_APP_PRIVATE_KEY;\n  const cryptomonAddr = process.env.REACT_APP_CRYPTOMON_ADDR;\n\n  zilliqa.wallet.addByPrivateKey(privateKey);\n  const myGasPrice = units.toQa(\'2000\', units.Units.Li);\n\n  try {\n    const networkId = await zilliqa.network.GetNetworkId();\n    console.log("networkid: %o", networkId.result);\n\n    const VERSION = bytes.pack(parseInt(networkId.result), 1);\n\n    const contract = zilliqa.contracts.at(cryptomonAddr);\n    const callTx = contract.call(\n        \'AddCryptoMon\',\n        [\n            {\n                vname: "token_id",\n                type: "Uint256",\n                value: `${token_id}`,\n            },\n            {\n                vname: "address",\n                type: "ByStr20",\n                value: `${address}`,\n            },\n        ],\n        {\n            version: VERSION,\n            amount: new BN(0),\n            gasPrice: myGasPrice,\n            gasLimit: Long.fromNumber(5000),\n        },\n        33,\n        1000,\n        false\n    );\n\n    return callTx;\n  } catch (err) {\n    console.error(err);\n  }\n}\n')),(0,o.kt)("p",null,"The above code uses Zilliqa JS and reads the private key and contract address from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. For safety reasons, private keys should not be hardcoded into the application."),(0,o.kt)("p",null,"Next, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/cryptomon/.env"',title:'"/cryptomon/.env"'},"REACT_APP_PRIVATE_KEY=my_private_key\nREACT_APP_WALLET_ADDRESS=0x_my_wallet_address\nREACT_APP_CRYPTOMON_ADDR=0x_contract_addr\n")),(0,o.kt)("p",null,"Now, return back to ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),". In the main ",(0,o.kt)("inlineCode",{parentName:"p"},"App()")," function, we need to code the ",(0,o.kt)("inlineCode",{parentName:"p"},"onAddCryptoMon")," handler that would invoke this ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon")," function when users click on the button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},"function App() {\n    // state variables\n\n    // useEffect\n\n    // fetchTokenOwners()\n\n    const onAddCryptoMon = () => {\n        AddCryptoMon(3, process.env.REACT_APP_WALLET_ADDRESS)\n        .then(async (res) => {\n            console.log(res);\n            if (res.receipt.success) {\n            // add success\n            // fetch new token owners\n            }\n        })\n        .catch((err) => {\n            console.error(err);\n        })\n   }\n\n   // return (\n   //   <div></div>\n   // )\n}\n")),(0,o.kt)("p",null,"The above onhandler code invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchTokenOwners")," to fetch the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"token_owners")," state and display on page."),(0,o.kt)("p",null,"The full ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/cryptomon/src/App.js"',title:'"/cryptomon/src/App.js"'},"import { useState, useEffect } from 'react';\nimport './App.css';\n\nconst { bytes, BN, Long, units } = require('@zilliqa-js/util');\nconst { Zilliqa } = require('@zilliqa-js/zilliqa');\n\n\nasync function fetchTokenOwners() {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  const cryptomonAddr = process.env.REACT_APP_CRYPTOMON_ADDR;\n  \n  const owners = await zilliqa.blockchain.getSmartContractSubState(\n      `${cryptomonAddr}`,\n      'token_owners',\n  );\n\n  return owners;\n}\n\nasync function AddCryptoMon(token_id, address) {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  const privateKey = process.env.REACT_APP_PRIVATE_KEY;\n  const cryptomonAddr = process.env.REACT_APP_CRYPTOMON_ADDR;\n\n  zilliqa.wallet.addByPrivateKey(privateKey);\n  const myGasPrice = units.toQa('2000', units.Units.Li);\n\n  try {\n    const networkId = await zilliqa.network.GetNetworkId();\n    console.log(\"networkid: %o\", networkId.result);\n\n    const VERSION = bytes.pack(parseInt(networkId.result), 1);\n\n    const contract = zilliqa.contracts.at(cryptomonAddr);\n    const callTx = contract.call(\n        'AddCryptoMon',\n        [\n            {\n                vname: \"token_id\",\n                type: \"Uint256\",\n                value: `${token_id}`,\n            },\n            {\n                vname: \"address\",\n                type: \"ByStr20\",\n                value: `${address}`,\n            },\n        ],\n        {\n            version: VERSION,\n            amount: new BN(0),\n            gasPrice: myGasPrice,\n            gasLimit: Long.fromNumber(5000),\n        },\n        33,\n        1000,\n        false\n    );\n\n    return callTx;\n  } catch (err) {\n    console.error(err);\n  }\n}\n\nfunction App() {\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    let owners = [];\n\n    setLoading(true);\n\n    fetchTokenOwners()\n      .then((res) => {\n        if (res.result) {\n          for (const [token_id, owner_address] of Object.entries(res.result.token_owners)) {\n            owners.push({\n              token_id: token_id,\n              owner: owner_address,\n            })\n          }\n        }\n      })\n      .catch((err) => {\n        console.error(err);\n      })\n      .finally(() => {\n        console.log(owners);\n        setData([...owners]);\n        setLoading(false);\n      })\n  }, []);\n\n  const onUpdateTokenOwners = () => {\n    let owners = [];\n    \n    fetchTokenOwners()\n      .then((res) => {\n        if (res.result) {\n          for (const [token_id, owner_address] of Object.entries(res.result.token_owners)) {\n            owners.push({\n              token_id: token_id,\n              owner: owner_address,\n            })\n          }\n        }\n      })\n      .catch((err) => {\n        console.error(err);\n      })\n      .finally(() => {\n        console.log(owners);\n        setData([...owners]);\n        setLoading(false);\n      })\n  }\n\n  const onAddCryptoMon = () => {\n    AddCryptoMon(6, process.env.REACT_APP_WALLET_ADDRESS)\n      .then(async (res) => {\n        console.log(res.receipt);\n        if (res.receipt.success) {\n          // add success\n          // fetch new token owners\n          await onUpdateTokenOwners();\n        }\n      })\n      .catch((err) => {\n        console.error(err);\n      })\n  }\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <h1>Cryptomon</h1>\n        <p>A crypto-currency sample react app</p>\n\n        {\n          loading ?\n          <p>Loading cryptomons...</p> :\n\n          (\n            data &&\n            data.length > 0 &&\n            data.map((item) => (\n              <div key={item.token_id}>\n                <span>Token ID: {item.token_id}&nbsp;&nbsp;Owner: {item.owner}</span>\n              </div>\n            ))\n          )\n        }\n\n        <p></p>\n        <button onClick={() => onAddCryptoMon()}>Add CryptoMon</button>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("h4",{id:"step-8"},"Step 8"),(0,o.kt)("p",null,"Run the project, and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon")," button. You may need to edit ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCryptoMon(6, process.env.REACT_APP_WALLET_ADDRESS)")," and change the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," to other numbers if it has been used."),(0,o.kt)("p",null,"Open dev tools and wait for a 1-2 minutes for the transaction to be confirmed. You should see the transaction output in the browser's developer tools."),(0,o.kt)("p",null,"Once the transaction is confirmed, it will re-rendered the page."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"You may download and run the full code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/teye/zilliqa-tldr-dapp-course/tree/main/exercises/chapter3/cryptomon"},(0,o.kt)("strong",{parentName:"a"},"sample project")),". "),(0,o.kt)("p",null,"The full code has additional features such as auto calculating the next available ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," and also disabling the button when it is adding the cryptomon. "),(0,o.kt)("p",null,"Remember to set your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file before running the project!"),(0,o.kt)("h2",{id:"the-end"},"The End"),(0,o.kt)("p",null,"That's it! You have reached the end of this TLDR course! "),(0,o.kt)("p",null,"Hope you have learnt something and continue to explore more on your own!"),(0,o.kt)("h4",{id:"other-places-for-more-knowledge"},"Other Places For More Knowledge"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.zilliqa.com/docs/dev/dev-started-introduction"},(0,o.kt)("strong",{parentName:"a"},"Zilliqa Developer Portal"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zilpay.github.io/zilpay-docs/"},(0,o.kt)("strong",{parentName:"a"},"ZilPay Documentation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples"},(0,o.kt)("strong",{parentName:"a"},"Zilliqa Javascript Examples"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://scilla-cookbook.org/"},(0,o.kt)("strong",{parentName:"a"},"Scilla Cookbook"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://scilla.readthedocs.io/_/downloads/en/latest/pdf/"},(0,o.kt)("strong",{parentName:"a"},"Scilla Documentation")))))}u.isMDXComponent=!0},6897:function(e,n,t){n.Z=t.p+"assets/images/main-c9e2a85a2f78129a49793e284e2f3ca2.png"},197:function(e,n,t){n.Z=t.p+"assets/images/owners-cfd2b7f8233c64b646911ddb4e26d307.png"}}]);