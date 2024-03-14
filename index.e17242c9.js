function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.e17242c9.js","2lKlt":"default_image_large.b44717ef.jpg","d7MtM":"PageNotFound.dd74cfba.jpg","8OQ7p":"icons.f61e5ba5.svg"}'));var o,a,c,u=o={};function l(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(e){a=l}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(e){c=h}}();var f,p=[],g=!1,m=-1;function y(){g&&f&&(g=!1,f.length?p=f.concat(p):m=-1,p.length&&v())}function v(){if(!g){var e=d(y);g=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,g=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function w(e,t){this.fun=e,this.array=t}function b(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new w(e,t)),1!==p.length||g||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=b,u.addListener=b,u.once=b,u.off=b,u.removeListener=b,u.removeAllListeners=b,u.emit=b,u.prependListener=b,u.prependOnceListener=b,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new I;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T=function(e){return function(e){const t=_(e);return E.encodeByteArray(t,!0)}(e).replace(/\./g,"")},S=function(e){try{return E.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,C=()=>{try{return A()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&S(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=C())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},N=e=>{const t=k(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},R=()=>{var e;return null===(e=C())||void 0===e?void 0:e.config},O=e=>{var t;return null===(t=C())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[T(JSON.stringify({alg:"none",type:"JWT"})),T(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function x(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function M(){const e=P();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function U(){return!function(){var e;const n=null===(e=C())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F(){try{return"object"==typeof indexedDB}catch(e){return!1}}class B extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(j,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new B(r,o,n)}}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(z(n)&&z(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function z(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function K(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function G(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){const n=new Q(e,t);return n.subscribe.bind(n)}class Q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=J),void 0===r.error&&(r.error=J),void 0===r.complete&&(r.complete=J);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function J(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return e&&e._delegate?e._delegate:e}class Y{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new D;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ee{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Z(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=[];var ne,re;(re=ne||(ne={}))[re.DEBUG=0]="DEBUG",re[re.VERBOSE=1]="VERBOSE",re[re.INFO=2]="INFO",re[re.WARN=3]="WARN",re[re.ERROR=4]="ERROR",re[re.SILENT=5]="SILENT";const ie={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},se=ne.INFO,oe={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},ae=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=oe[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ce{constructor(e){this.name=e,this._logLevel=se,this._logHandler=ae,this._userLogHandler=null,te.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}let ue,le;const he=new WeakMap,de=new WeakMap,fe=new WeakMap,pe=new WeakMap,ge=new WeakMap;let me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return de.get(e);if("objectStoreNames"===t)return e.objectStoreNames||fe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return we(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ye(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(le||(le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(be(this),t),we(he.get(this))}:function(...t){return we(e.apply(be(this),t))}:function(t,...n){const r=e.call(be(this),t,...n);return fe.set(r,t.sort?t.sort():[t]),we(r)}}function ve(e){return"function"==typeof e?ye(e):(e instanceof IDBTransaction&&function(e){if(de.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));de.set(e,t)}(e),t=e,(ue||(ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,me):e);var t}function we(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(we(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&he.set(t,e)})).catch((()=>{})),ge.set(t,e),t}(e);if(pe.has(e))return pe.get(e);const t=ve(e);return t!==e&&(pe.set(e,t),ge.set(t,e)),t}const be=e=>ge.get(e);function _e(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=we(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(we(o.result),e.oldVersion,e.newVersion,we(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ee=["get","getKey","getAll","getAllKeys","count"],Ie=["put","add","delete","clear"],Te=new Map;function Se(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Te.get(t))return Te.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ie.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ee.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Te.set(t,s),s}me=(e=>({...e,get:(t,n,r)=>Se(t,n)||e.get(t,n,r),has:(t,n)=>!!Se(t,n)||e.has(t,n)}))(me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ce=new ce("@firebase/app"),ke={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ne=new Map,Re=new Map;function Oe(e,t){try{e.container.addComponent(t)}catch(n){Ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function De(e){const t=e.name;if(Re.has(t))return Ce.debug(`There were multiple attempts to register component ${t}.`),!1;Re.set(t,e);for(const t of Ne.values())Oe(t,e);return!0}function Le(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pe=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Pe.create("bad-app-name",{appName:String(i)});if(n||(n=R()),!n)throw Pe.create("no-options");const s=Ne.get(i);if(s){if($(n,s.options)&&$(r,s.config))return s;throw Pe.create("duplicate-app",{appName:i})}const o=new ee(i);for(const e of Re.values())o.addComponent(e);const a=new xe(n,r,o);return Ne.set(i,a),a}function Ue(e="[DEFAULT]"){const t=Ne.get(e);if(!t&&"[DEFAULT]"===e&&R())return Me();if(!t)throw Pe.create("no-app",{appName:e});return t}function Fe(e,t,n){var r;let i=null!==(r=ke[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ce.warn(e.join(" "))}De(new Y(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Be=null;function Ve(){return Be||(Be=_e("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore("firebase-heartbeat-store")}catch(e){console.warn(e)}}}).catch((e=>{throw Pe.create("idb-open",{originalErrorMessage:e.message})}))),Be}async function je(e,t){try{const n=(await Ve()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(t,qe(e)),await n.done}catch(e){if(e instanceof B)Ce.warn(e.message);else{const t=Pe.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ce.warn(t.message)}}}function qe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new He(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ze();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ze(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ke(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ke(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=T(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ze(){return(new Date).toISOString().substring(0,10)}class He{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!F()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Ve()).transaction("firebase-heartbeat-store"),n=await t.objectStore("firebase-heartbeat-store").get(qe(e));return await t.done,n}catch(e){if(e instanceof B)Ce.warn(e.message);else{const t=Pe.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ce.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ke(e){return T(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge;Ge="",De(new Y("platform-logger",(e=>new Ae(e)),"PRIVATE")),De(new Y("heartbeat",(e=>new $e(e)),"PRIVATE")),Fe("@firebase/app","0.9.28",Ge),Fe("@firebase/app","0.9.28","esm2017"),Fe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fe("firebase","10.8.1","app");var We,Qe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Je={},Xe=Xe||{},Ye=Qe||self;function Ze(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function et(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var tt="closure_uid_"+(1e9*Math.random()>>>0),nt=0;function rt(e,t,n){return e.call.apply(e.bind,arguments)}function it(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return(st=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rt:it).apply(null,arguments)}function ot(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function at(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function ct(){this.s=this.s,this.o=this.o}ct.prototype.s=!1,ct.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,tt)&&e[tt]||(e[tt]=++nt))},ct.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ut=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function lt(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ht(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Ze(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function dt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!Ye.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};Ye.addEventListener("test",e,t),Ye.removeEventListener("test",e,t)}catch(e){}return e}();function pt(e){return/^[\s\xa0]*$/.test(e)}function gt(){var e=Ye.navigator;return e&&(e=e.userAgent)?e:""}function mt(e){return-1!=gt().indexOf(e)}function yt(e){return yt[" "](e),e}yt[" "]=function(){};var vt,wt,bt,_t=mt("Opera"),Et=mt("Trident")||mt("MSIE"),It=mt("Edge"),Tt=It||Et,St=mt("Gecko")&&!(-1!=gt().toLowerCase().indexOf("webkit")&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),At=-1!=gt().toLowerCase().indexOf("webkit")&&!mt("Edge");function Ct(){var e=Ye.document;return e?e.documentMode:void 0}e:{var kt="",Nt=(wt=gt(),St?/rv:([^\);]+)(\)|;)/.exec(wt):It?/Edge\/([\d\.]+)/.exec(wt):Et?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(wt):At?/WebKit\/(\S+)/.exec(wt):_t?/(?:Version)[ \/]?(\S+)/.exec(wt):void 0);if(Nt&&(kt=Nt?Nt[1]:""),Et){var Rt=Ct();if(null!=Rt&&Rt>parseFloat(kt)){vt=String(Rt);break e}}vt=kt}if(Ye.document&&Et){var Ot=Ct();bt=Ot||(parseInt(vt,10)||void 0)}else bt=void 0;var Dt=bt;function Lt(e,t){if(dt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(St){e:{try{yt(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Pt[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Lt.$.h.call(this)}}at(Lt,dt);var Pt={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var xt="closure_listenable_"+(1e6*Math.random()|0),Mt=0;function Ut(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Mt,this.fa=this.ia=!1}function Ft(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Bt(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Vt(e){const t={};for(const n in e)t[n]=e[n];return t}const jt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qt(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<jt.length;t++)n=jt[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $t(e){this.src=e,this.g={},this.h=0}function zt(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=ut(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ft(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ht(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}$t.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Ht(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Ut(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var Kt="closure_lm_"+(1e6*Math.random()|0),Gt={};function Wt(e,t,n,r,i){if(r&&r.once)return Jt(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Wt(e,t[s],n,r,i);return null}return n=rn(n),e&&e[xt]?e.O(t,n,et(r)?!!r.capture:!!r,i):Qt(e,t,n,!1,r,i)}function Qt(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=et(i)?!!i.capture:!!i,a=tn(e);if(a||(e[Kt]=a=new $t(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=en;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ft||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Zt(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Jt(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Jt(e,t[s],n,r,i);return null}return n=rn(n),e&&e[xt]?e.P(t,n,et(r)?!!r.capture:!!r,i):Qt(e,t,n,!0,r,i)}function Xt(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xt(e,t[s],n,r,i);else r=et(r)?!!r.capture:!!r,n=rn(n),e&&e[xt]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ht(s=e.g[t],n,r,i))&&(Ft(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=tn(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ht(t,n,r,i)),(n=-1<e?t[e]:null)&&Yt(n))}function Yt(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[xt])zt(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Zt(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=tn(t))?(zt(n,e),0==n.h&&(n.src=null,t[Kt]=null)):Ft(e)}}}function Zt(e){return e in Gt?Gt[e]:Gt[e]="on"+e}function en(e,t){if(e.fa)e=!0;else{t=new Lt(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Yt(e),e=n.call(r,t)}return e}function tn(e){return(e=e[Kt])instanceof $t?e:null}var nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function rn(e){return"function"==typeof e?e:(e[nn]||(e[nn]=function(t){return e.handleEvent(t)}),e[nn])}function sn(){ct.call(this),this.i=new $t(this),this.S=this,this.J=null}function on(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new dt(t,e);else if(t instanceof dt)t.target=t.target||e;else{var i=t;qt(t=new dt(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=an(o,r,!0,t)&&i}if(i=an(o=t.g=e,r,!0,t)&&i,i=an(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=an(o=t.g=n[s],r,!1,t)&&i}function an(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&zt(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}at(sn,ct),sn.prototype[xt]=!0,sn.prototype.removeEventListener=function(e,t,n,r){Xt(this,e,t,n,r)},sn.prototype.N=function(){if(sn.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ft(n[r]);delete t.g[e],t.h--}}this.J=null},sn.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},sn.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var cn=Ye.JSON.stringify;function un(){var e=mn;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ln=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new hn),(e=>e.reset()));class hn{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function dn(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function fn(e){Ye.setTimeout((()=>{throw e}),0)}let pn,gn=!1,mn=new class{constructor(){this.h=this.g=null}add(e,t){const n=ln.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},yn=()=>{const e=Ye.Promise.resolve(void 0);pn=()=>{e.then(vn)}};var vn=()=>{for(var e;e=un();){try{e.h.call(e.g)}catch(e){fn(e)}var t=ln;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}gn=!1};function wn(e,t){sn.call(this),this.h=e||1,this.g=t||Ye,this.j=st(this.qb,this),this.l=Date.now()}function bn(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function _n(e,t,n){if("function"==typeof e)n&&(e=st(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=st(e.handleEvent,e)}return 2147483647<Number(t)?-1:Ye.setTimeout(e,t||0)}function En(e){e.g=_n((()=>{e.g=null,e.i&&(e.i=!1,En(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}at(wn,sn),(We=wn.prototype).ga=!1,We.T=null,We.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),on(this,"tick"),this.ga&&(bn(this),this.start()))}},We.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},We.N=function(){wn.$.N.call(this),bn(this),delete this.g};class In extends ct{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:En(this)}N(){super.N(),this.g&&(Ye.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(e){ct.call(this),this.h=e,this.g={}}at(Tn,ct);var Sn=[];function An(e,t,n,r){Array.isArray(n)||(n&&(Sn[0]=n.toString()),n=Sn);for(var i=0;i<n.length;i++){var s=Wt(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Cn(e){Bt(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Yt(e)}),e),e.g={}}function kn(){this.g=!0}function Nn(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return cn(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Tn.prototype.N=function(){Tn.$.N.call(this),Cn(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},kn.prototype.Ea=function(){this.g=!1},kn.prototype.info=function(){};var Rn={},On=null;function Dn(){return On=On||new sn}function Ln(e){dt.call(this,Rn.Ta,e)}function Pn(e){const t=Dn();on(t,new Ln(t))}function xn(e,t){dt.call(this,Rn.STAT_EVENT,e),this.stat=t}function Mn(e){const t=Dn();on(t,new xn(t,e))}function Un(e,t){dt.call(this,Rn.Ua,e),this.size=t}function Fn(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Ye.setTimeout((function(){e()}),t)}Rn.Ta="serverreachability",at(Ln,dt),Rn.STAT_EVENT="statevent",at(xn,dt),Rn.Ua="timingevent",at(Un,dt);var Bn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jn(){}function qn(e){return e.h||(e.h=e.i())}function $n(){}jn.prototype.h=null;var zn,Hn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kn(){dt.call(this,"d")}function Gn(){dt.call(this,"c")}function Wn(){}function Qn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Tn(this),this.P=Xn,e=Tt?125:void 0,this.V=new wn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jn}function Jn(){this.i=null,this.g="",this.h=!1}at(Kn,dt),at(Gn,dt),at(Wn,jn),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},zn=new Wn;var Xn=45e3,Yn={},Zn={};function er(e,t,n){e.L=1,e.A=wr(pr(t)),e.u=n,e.S=!0,tr(e,null)}function tr(e,t){e.G=Date.now(),sr(e),e.B=pr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Dr(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Jn,e.g=Ri(e.l,n?t:null,!e.u),0<e.O&&(e.M=new In(st(e.Pa,e,e.g),e.O)),An(e.U,e.g,"readystatechange",e.nb),t=e.I?Vt(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Pn(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.v,e.B,e.m,e.W,e.u)}function nr(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function rr(e,t,n){let r,i=!0;for(;!e.J&&e.o<n.length;){if(r=ir(e,n),r==Zn){4==t&&(e.s=4,Mn(14),i=!1),Nn(e.j,e.m,null,"[Incomplete Response]");break}if(r==Yn){e.s=4,Mn(15),Nn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Nn(e.j,e.m,r,null),lr(e,r)}nr(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,Mn(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ei(t),t.M=!0,Mn(11))):(Nn(e.j,e.m,n,"[Invalid Chunked Response]"),ur(e),cr(e))}function ir(e,t){var n=e.o,r=t.indexOf("\n",n);return-1==r?Zn:(n=Number(t.substring(n,r)),isNaN(n)?Yn:(r+=1)+n>t.length?Zn:(t=t.slice(r,r+n),e.o=r+n,t))}function sr(e){e.Y=Date.now()+e.P,or(e,e.P)}function or(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=Fn(st(e.lb,e),t)}function ar(e){e.C&&(Ye.clearTimeout(e.C),e.C=null)}function cr(e){0==e.l.H||e.J||Si(e.l,e)}function ur(e){ar(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,bn(e.V),Cn(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function lr(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Fr(n.i,e)))if(!e.K&&Fr(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Ti(n),pi(n)}_i(n),Mn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Fn(st(n.ib,n),6e3));if(1>=Ur(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Ci(n,11)}else if((e.K||n.g==e)&&Ti(n),!pt(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Br(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,vr(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=Ni(r,r.J?r.pa:null,r.Y),o.K){Vr(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ar(a),sr(a)),r.g=o}else bi(r);0<n.j.length&&mi(n)}else"stop"!=u[0]&&"close"!=u[0]||Ci(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ci(n,7):fi(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Pn()}catch(e){}}function hr(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ze(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Ze(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Ze(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(We=Qn.prototype).setTimeout=function(e){this.P=e},We.nb=function(e){e=e.target;const t=this.M;t&&3==ai(e)?t.l():this.Pa(e)},We.Pa=function(e){try{if(e==this.g)e:{const l=ai(this.g);var t=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Tt||this.g&&(this.h.h||this.g.ja()||ci(this.g)))){this.J||4!=l||7==t||Pn(),ar(this);var n=this.g.da();this.ca=n;t:if(nr(this)){var r=ci(this.g);e="";var i=r.length,s=4==ai(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ur(this),cr(this);var o="";break t}this.h.i=new Ye.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pt(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.s=3,Mn(12),ur(this),cr(this);break e}Nn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lr(this,n)}this.S?(rr(this,l,o),Tt&&this.i&&3==l&&(An(this.U,this.V,"tick",this.mb),this.V.start())):(Nn(this.j,this.m,o,null),lr(this,o)),4==l&&ur(this),this.i&&!this.J&&(4==l?Si(this.l,this):(this.i=!1,sr(this)))}else(function(e){const t={};e=(e.g&&2<=ai(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(pt(e[r]))continue;var n=dn(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Mn(12)):(this.s=0,Mn(13)),ur(this),cr(this)}}}catch(e){}},We.mb=function(){if(this.g){var e=ai(this.g),t=this.g.ja();this.o<t.length&&(ar(this),rr(this,e,t),this.i&&4!=e&&sr(this))}},We.cancel=function(){this.J=!0,ur(this)},We.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.B),2!=this.L&&(Pn(),Mn(17)),ur(this),this.s=2,cr(this)):or(this,this.Y-e)};var dr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof fr){this.h=e.h,gr(this,e.j),this.s=e.s,this.g=e.g,mr(this,e.m),this.l=e.l;var t=e.i,n=new kr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),yr(this,n),this.o=e.o}else e&&(t=String(e).match(dr))?(this.h=!1,gr(this,t[1]||"",!0),this.s=br(t[2]||""),this.g=br(t[3]||"",!0),mr(this,t[4]),this.l=br(t[5]||"",!0),yr(this,t[6]||"",!0),this.o=br(t[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}function pr(e){return new fr(e)}function gr(e,t,n){e.j=n?br(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yr(e,t,n){t instanceof kr?(e.i=t,function(e,t){t&&!e.j&&(Nr(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Rr(this,t),Dr(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=_r(t,Ar)),e.i=new kr(t,e.h))}function vr(e,t,n){e.i.set(t,n)}function wr(e){return vr(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function br(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _r(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Er),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Er(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}fr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_r(t,Ir,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(_r(t,Ir,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(_r(n,"/"==n.charAt(0)?Sr:Tr,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_r(n,Cr)),e.join("")};var Ir=/[#\/\?@]/g,Tr=/[#\?:]/g,Sr=/[#\?]/g,Ar=/[#\?@]/g,Cr=/#/g;function kr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Nr(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Rr(e,t){Nr(e),t=Lr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Or(e,t){return Nr(e),t=Lr(e,t),e.g.has(t)}function Dr(e,t,n){Rr(e,t),0<n.length&&(e.i=null,e.g.set(Lr(e,t),lt(n)),e.h+=n.length)}function Lr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(We=kr.prototype).add=function(e,t){Nr(this),this.i=null,e=Lr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},We.forEach=function(e,t){Nr(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},We.ta=function(){Nr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},We.Z=function(e){Nr(this);let t=[];if("string"==typeof e)Or(this,e)&&(t=t.concat(this.g.get(Lr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},We.set=function(e,t){return Nr(this),this.i=null,Or(this,e=Lr(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},We.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},We.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Pr(e){this.l=e||xr,Ye.PerformanceNavigationTiming?e=0<(e=Ye.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Ye.g&&Ye.g.Ka&&Ye.g.Ka()&&Ye.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xr=10;function Mr(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ur(e){return e.h?1:e.g?e.g.size:0}function Fr(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Br(e,t){e.g?e.g.add(t):e.h=t}function Vr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function jr(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return lt(e.i)}Pr.prototype.cancel=function(){if(this.i=jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};function qr(){this.g=new class{stringify(e){return Ye.JSON.stringify(e,void 0)}parse(e){return Ye.JSON.parse(e,void 0)}}}function $r(e,t,n){const r=n||"";try{hr(e,(function(e,n){let i=e;et(e)&&(i=cn(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function zr(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Hr(e){this.l=e.ec||null,this.j=e.ob||!1}function Kr(e,t){sn.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Gr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Hr,jn),Hr.prototype.g=function(){return new Kr(this.l,this.j)},Hr.prototype.i=function(e){return function(){return e}}({}),at(Kr,sn);var Gr=0;function Wr(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Qr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Jr(e)}function Jr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(We=Kr.prototype).open=function(e,t){if(this.readyState!=Gr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Jr(this)},We.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Ye).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},We.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qr(this)),this.readyState=Gr},We.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Ye.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wr(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},We.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Qr(this):Jr(this),3==this.readyState&&Wr(this)}},We.Za=function(e){this.g&&(this.response=this.responseText=e,Qr(this))},We.Ya=function(e){this.g&&(this.response=e,Qr(this))},We.ka=function(){this.g&&Qr(this)},We.setRequestHeader=function(e,t){this.v.append(e,t)},We.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},We.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Xr=Ye.JSON.parse;function Yr(e){sn.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zr,this.L=this.M=!1}at(Yr,sn);var Zr="",ei=/^https?$/i,ti=["POST","PUT"];function ni(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ri(e),si(e)}function ri(e){e.F||(e.F=!0,on(e,"complete"),on(e,"error"))}function ii(e){if(e.h&&void 0!==Xe&&(!e.C[1]||4!=ai(e)||2!=e.da()))if(e.v&&4==ai(e))_n(e.La,0,e);else if(on(e,"readystatechange"),4==ai(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(dr)[1]||null;!i&&Ye.self&&Ye.self.location&&(i=Ye.self.location.protocol.slice(0,-1)),r=!ei.test(i?i.toLowerCase():"")}n=r}if(n)on(e,"complete"),on(e,"success");else{e.m=6;try{var s=2<ai(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",ri(e)}}finally{si(e)}}}function si(e,t){if(e.g){oi(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||on(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function oi(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Ye.clearTimeout(e.A),e.A=null)}function ai(e){return e.g?e.g.readyState:0}function ci(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Zr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ui(e){let t="";return Bt(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function li(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ui(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):vr(e,t,n))}function hi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function di(e){this.Ga=0,this.j=[],this.l=new kn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=hi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=hi("baseRetryDelayMs",5e3,e),this.hb=hi("retryDelaySeedMs",1e4,e),this.eb=hi("forwardChannelMaxRetries",2,e),this.xa=hi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Pr(e&&e.concurrentRequestLimit),this.Ja=new qr,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function fi(e){if(gi(e),3==e.H){var t=e.W++,n=pr(e.I);if(vr(n,"SID",e.K),vr(n,"RID",t),vr(n,"TYPE","terminate"),vi(e,n),(t=new Qn(e,e.l,t)).L=2,t.A=wr(pr(n)),n=!1,Ye.navigator&&Ye.navigator.sendBeacon)try{n=Ye.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&Ye.Image&&((new Image).src=t.A,n=!0),n||(t.g=Ri(t.l,null),t.g.ha(t.A)),t.G=Date.now(),sr(t)}ki(e)}function pi(e){e.g&&(Ei(e),e.g.cancel(),e.g=null)}function gi(e){pi(e),e.u&&(Ye.clearTimeout(e.u),e.u=null),Ti(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Ye.clearTimeout(e.m),e.m=null)}function mi(e){if(!Mr(e.i)&&!e.m){e.m=!0;var t=e.Na;pn||yn(),gn||(pn(),gn=!0),mn.add(t,e),e.C=0}}function yi(e,t){var n;n=t?t.m:e.W++;const r=pr(e.I);vr(r,"SID",e.K),vr(r,"RID",n),vr(r,"AID",e.V),vi(e,r),e.o&&e.s&&li(r,e.o,e.s),n=new Qn(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=wi(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Br(e.i,n),er(n,r,t)}function vi(e,t){e.na&&Bt(e.na,(function(e,n){vr(t,n,e)})),e.h&&hr({},(function(e,n){vr(t,n,e)}))}function wi(e,t,n){n=Math.min(e.j.length,n);var r=e.h?st(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{$r(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function bi(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;pn||yn(),gn||(pn(),gn=!0),mn.add(t,e),e.A=0}}function _i(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Fn(st(e.Ma,e),Ai(e,e.A)),e.A++,!0)}function Ei(e){null!=e.B&&(Ye.clearTimeout(e.B),e.B=null)}function Ii(e){e.g=new Qn(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=pr(e.wa);vr(t,"RID","rpc"),vr(t,"SID",e.K),vr(t,"AID",e.V),vr(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&vr(t,"TO",e.qa),vr(t,"TYPE","xmlhttp"),vi(e,t),e.o&&e.s&&li(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=wr(pr(t)),n.u=null,n.S=!0,tr(n,e)}function Ti(e){null!=e.v&&(Ye.clearTimeout(e.v),e.v=null)}function Si(e,t){var n=null;if(e.g==t){Ti(e),Ei(e),e.g=null;var r=2}else{if(!Fr(e.i,t))return;n=t.F,Vr(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;on(r=Dn(),new Un(r,n)),mi(e)}else bi(e);else if(3==(i=t.s)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(Ur(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Fn(st(e.Na,e,t),Ai(e,e.C)),e.C++,0)))}(e,t)||2==r&&_i(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ci(e,5);break;case 4:Ci(e,10);break;case 3:Ci(e,6);break;default:Ci(e,2)}}function Ai(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ci(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=st(e.pb,e);n||(n=new fr("//www.google.com/images/cleardot.gif"),Ye.location&&"http"==Ye.location.protocol||gr(n,"https"),wr(n)),function(e,t){const n=new kn;if(Ye.Image){const r=new Image;r.onload=ot(zr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ot(zr,n,r,"TestLoadImage: error",!1,t),r.onabort=ot(zr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ot(zr,n,r,"TestLoadImage: timeout",!1,t),Ye.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Mn(2);e.H=0,e.h&&e.h.za(t),ki(e),gi(e)}function ki(e){if(e.H=0,e.ma=[],e.h){const t=jr(e.i);0==t.length&&0==e.j.length||(ht(e.ma,t),ht(e.ma,e.j),e.i.i.length=0,lt(e.j),e.j.length=0),e.h.ya()}}function Ni(e,t,n){var r=n instanceof fr?pr(n):new fr(n);if(""!=r.g)t&&(r.g=t+"."+r.g),mr(r,r.m);else{var i=Ye.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new fr(null);r&&gr(s,r),t&&(s.g=t),i&&mr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&vr(r,n,t),vr(r,"VER",e.ra),vi(e,r),r}function Ri(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ha&&!e.va?new Yr(new Hr({ob:n})):new Yr(e.va)).Oa(e.J),t}function Oi(){}function Di(){if(Et&&!(10<=Number(Dt)))throw Error("Environmental error: no available transport.")}function Li(e,t){sn.call(this),this.g=new di(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!pt(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pt(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Mi(this)}function Pi(e){Kn.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function xi(){Gn.call(this),this.status=1}function Mi(e){this.g=e}function Ui(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Fi(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Bi(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(We=Yr.prototype).Oa=function(e){this.M=e},We.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zn.g(),this.C=this.u?qn(this.u):qn(zn),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void ni(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Ye.FormData&&e instanceof Ye.FormData,!(0<=ut(ti,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{oi(this),0<this.B&&((this.L=function(e){return Et&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=_n(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ni(this,e)}},We.ua=function(){void 0!==Xe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,on(this,"timeout"),this.abort(8))},We.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,on(this,"complete"),on(this,"abort"),si(this))},We.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),si(this,!0)),Yr.$.N.call(this)},We.La=function(){this.s||(this.G||this.v||this.l?ii(this):this.kb())},We.kb=function(){ii(this)},We.isActive=function(){return!!this.g},We.da=function(){try{return 2<ai(this)?this.g.status:-1}catch(e){return-1}},We.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},We.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Xr(t)}},We.Ia=function(){return this.m},We.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(We=di.prototype).ra=8,We.H=1,We.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Vt(s),qt(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wi(this,i,t),vr(n=pr(this.I),"RID",e),vr(n,"CVER",22),this.F&&vr(n,"X-HTTP-Session-Id",this.F),vi(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ui(s)))+"&"+t:this.o&&li(n,this.o,s)),Br(this.i,i),this.bb&&vr(n,"TYPE","init"),this.P?(vr(n,"$req",t),vr(n,"SID","null"),i.aa=!0,er(i,n,null)):er(i,n,t),this.H=2}}else 3==this.H&&(e?yi(this,e):0==this.j.length||Mr(this.i)||yi(this))},We.Ma=function(){if(this.u=null,Ii(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Fn(st(this.jb,this),e)}},We.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Mn(10),pi(this),Ii(this))},We.ib=function(){null!=this.v&&(this.v=null,pi(this),_i(this),Mn(19))},We.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Mn(2)):(this.l.info("Failed to ping google.com"),Mn(1))},We.isActive=function(){return!!this.h&&this.h.isActive(this)},(We=Oi.prototype).Ba=function(){},We.Aa=function(){},We.za=function(){},We.ya=function(){},We.isActive=function(){return!0},We.Va=function(){},Di.prototype.g=function(e,t){return new Li(e,t)},at(Li,sn),Li.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Mn(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ni(e,null,e.Y),mi(e)},Li.prototype.close=function(){fi(this.g)},Li.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=cn(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&mi(t)},Li.prototype.N=function(){this.g.h=null,delete this.j,fi(this.g),delete this.g,Li.$.N.call(this)},at(Pi,Kn),at(xi,Gn),at(Mi,Oi),Mi.prototype.Ba=function(){on(this.g,"a")},Mi.prototype.Aa=function(e){on(this.g,new Pi(e))},Mi.prototype.za=function(e){on(this.g,new xi)},Mi.prototype.ya=function(){on(this.g,"b")},at(Ui,(function(){this.blockSize=-1})),Ui.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ui.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Fi(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Fi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Fi(this,r),i=0;break}}this.h=i,this.i+=t},Ui.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Vi={};function ji(e){return-128<=e&&128>e?function(e,t){var n=Vi;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Bi([0|e],0>e?-1:0)})):new Bi([0|e],0>e?-1:0)}function qi(e){if(isNaN(e)||!isFinite(e))return zi;if(0>e)return Qi(qi(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=$i;return new Bi(t,0)}var $i=4294967296,zi=ji(0),Hi=ji(1),Ki=ji(16777216);function Gi(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Wi(e){return-1==e.h}function Qi(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Bi(n,~e.h).add(Hi)}function Ji(e,t){return e.add(Qi(t))}function Xi(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Yi(e,t){this.g=e,this.h=t}function Zi(e,t){if(Gi(t))throw Error("division by zero");if(Gi(e))return new Yi(zi,zi);if(Wi(e))return t=Zi(Qi(e),t),new Yi(Qi(t.g),Qi(t.h));if(Wi(t))return t=Zi(e,Qi(t)),new Yi(Qi(t.g),t.h);if(30<e.g.length){if(Wi(e)||Wi(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Hi,r=t;0>=r.X(e);)n=es(n),r=es(r);var i=ts(n,1),s=ts(r,1);for(r=ts(r,2),n=ts(n,2);!Gi(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ts(r,1),n=ts(n,1)}return t=Ji(e,i.R(t)),new Yi(i,t)}for(i=zi;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=qi(n)).R(t);Wi(o)||0<o.X(e);)o=(s=qi(n-=r)).R(t);Gi(s)&&(s=Hi),i=i.add(s),e=Ji(e,o)}return new Yi(i,e)}function es(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Bi(n,e.h)}function ts(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Bi(i,e.h)}(We=Bi.prototype).ea=function(){if(Wi(this))return-Qi(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:$i+r)*t,t*=$i}return e},We.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Gi(this))return"0";if(Wi(this))return"-"+Qi(this).toString(e);for(var t=qi(Math.pow(e,6)),n=this,r="";;){var i=Zi(n,t).g,s=((0<(n=Ji(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Gi(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},We.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},We.X=function(e){return Wi(e=Ji(this,e))?-1:Gi(e)?0:1},We.abs=function(){return Wi(this)?Qi(this):this},We.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Bi(n,-2147483648&n[n.length-1]?-1:0)},We.R=function(e){if(Gi(this)||Gi(e))return zi;if(Wi(this))return Wi(e)?Qi(this).R(Qi(e)):Qi(Qi(this).R(e));if(Wi(e))return Qi(this.R(Qi(e)));if(0>this.X(Ki)&&0>e.X(Ki))return qi(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Xi(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Xi(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xi(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xi(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Bi(n,0)},We.gb=function(e){return Zi(this,e).h},We.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Bi(n,this.h&e.h)},We.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Bi(n,this.h|e.h)},We.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Bi(n,this.h^e.h)},Di.prototype.createWebChannel=Di.prototype.g,Li.prototype.send=Li.prototype.u,Li.prototype.open=Li.prototype.m,Li.prototype.close=Li.prototype.close,Bn.NO_ERROR=0,Bn.TIMEOUT=8,Bn.HTTP_ERROR=6,Vn.COMPLETE="complete",$n.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",sn.prototype.listen=sn.prototype.O,Yr.prototype.listenOnce=Yr.prototype.P,Yr.prototype.getLastError=Yr.prototype.Sa,Yr.prototype.getLastErrorCode=Yr.prototype.Ia,Yr.prototype.getStatus=Yr.prototype.da,Yr.prototype.getResponseJson=Yr.prototype.Wa,Yr.prototype.getResponseText=Yr.prototype.ja,Yr.prototype.send=Yr.prototype.ha,Yr.prototype.setWithCredentials=Yr.prototype.Oa,Ui.prototype.digest=Ui.prototype.l,Ui.prototype.reset=Ui.prototype.reset,Ui.prototype.update=Ui.prototype.j,Bi.prototype.add=Bi.prototype.add,Bi.prototype.multiply=Bi.prototype.R,Bi.prototype.modulo=Bi.prototype.gb,Bi.prototype.compare=Bi.prototype.X,Bi.prototype.toNumber=Bi.prototype.ea,Bi.prototype.toString=Bi.prototype.toString,Bi.prototype.getBits=Bi.prototype.D,Bi.fromNumber=qi,Bi.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Qi(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=qi(Math.pow(n,8)),i=zi,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=qi(Math.pow(n,o)),i=i.R(o).add(qi(a))):i=(i=i.R(r)).add(qi(a))}return i};var ns=Je.createWebChannelTransport=function(){return new Di},rs=Je.getStatEventTarget=function(){return Dn()},is=Je.ErrorCode=Bn,ss=Je.EventType=Vn,os=Je.Event=Rn,as=Je.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cs=(Je.FetchXmlHttpFactory=Hr,Je.WebChannel=$n),us=Je.XhrIo=Yr,ls=Je.Md5=Ui,hs=Je.Integer=Bi;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ds.UNAUTHENTICATED=new ds(null),ds.GOOGLE_CREDENTIALS=new ds("google-credentials-uid"),ds.FIRST_PARTY=new ds("first-party-uid"),ds.MOCK_USER=new ds("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let fs="10.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new ce("@firebase/firestore");function gs(){return ps.logLevel}function ms(e,...t){if(ps.logLevel<=ne.DEBUG){const n=t.map(ws);ps.debug(`Firestore (${fs}): ${e}`,...n)}}function ys(e,...t){if(ps.logLevel<=ne.ERROR){const n=t.map(ws);ps.error(`Firestore (${fs}): ${e}`,...n)}}function vs(e,...t){if(ps.logLevel<=ne.WARN){const n=t.map(ws);ps.warn(`Firestore (${fs}): ${e}`,...n)}}function ws(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return t=e,JSON.stringify(t)}catch(t){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e="Unexpected state"){const t=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+e;throw ys(t),new Error(t)}function _s(e,t){e||bs()}function Es(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ts extends B{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ds.UNAUTHENTICATED)))}shutdown(){}}class ks{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ns{constructor(e){this.t=e,this.currentUser=ds.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ss,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ms("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ms("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ss)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ms("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_s("string"==typeof t.accessToken),new As(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _s(null===e||"string"==typeof e),new ds(e)}}class Rs{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ds.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Os{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Rs(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(ds.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ds{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ls{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&ms("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,ms("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ms("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):ms("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(_s("string"==typeof e.token),this.R=e.token,new Ds(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ps(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ps(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ms(e,t){return e<t?-1:e>t?1:0}function Us(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ts(Is.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ts(Is.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ts(Is.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ts(Is.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fs.fromMillis(Date.now())}static fromDate(e){return Fs.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Fs(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ms(this.nanoseconds,e.nanoseconds):Ms(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Bs(e)}static min(){return new Bs(new Fs(0,0))}static max(){return new Bs(new Fs(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,n){void 0===t?t=0:t>e.length&&bs(),void 0===n?n=e.length-t:n>e.length-t&&bs(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Vs.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vs?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class js extends Vs{construct(e,t,n){return new js(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ts(Is.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new js(t)}static emptyPath(){return new js([])}}const qs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $s extends Vs{construct(e,t,n){return new $s(e,t,n)}static isValidIdentifier(e){return qs.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$s.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $s(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ts(Is.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ts(Is.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ts(Is.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ts(Is.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $s(t)}static emptyPath(){return new $s([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.path=e}static fromPath(e){return new zs(js.fromString(e))}static fromName(e){return new zs(js.fromString(e).popFirst(5))}static empty(){return new zs(js.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===js.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return js.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new zs(new js(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Hs.UNKNOWN_ID=-1;function Ks(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Bs.fromTimestamp(1e9===r?new Fs(n+1,0):new Fs(n,r));return new Ws(i,zs.empty(),t)}function Gs(e){return new Ws(e.readTime,e.key,-1)}class Ws{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ws(Bs.min(),zs.empty(),-1)}static max(){return new Ws(Bs.max(),zs.empty(),-1)}}function Qs(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=zs.comparator(e.documentKey,t.documentKey),0!==n?n:Ms(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(e){if(e.code!==Is.FAILED_PRECONDITION||e.message!==Js)throw e;ms("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&bs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Zs(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Zs?t:Zs.resolve(t)}catch(e){return Zs.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Zs.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Zs.reject(t)}static resolve(e){return new Zs(((t,n)=>{t(e)}))}static reject(e){return new Zs(((t,n)=>{n(e)}))}static waitFor(e){return new Zs(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Zs.resolve(!1);for(const n of e)t=t.next((e=>e?Zs.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Zs(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Zs(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ss,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ro(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=co(t.target.error);this.V.reject(new ro(e,n))}}static open(e,t,n,r){try{return new eo(t,e.transaction(r,n))}catch(e){throw new ro(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(ms("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new so(t)}}class to{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===to.S(P())&&ys("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ms("SimpleDb","Removing database:",e),oo(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!F())return!1;if(to.C())return!0;const e=P(),t=to.S(e),n=0<t&&t<10,r=to.v(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return void 0!==o&&"YES"===(null===(e=o.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(ms("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ro(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Ts(Is.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Ts(Is.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ro(e,r))},r.onupgradeneeded=e=>{ms("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next((()=>{ms("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=eo.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),Zs.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ms("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class no{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return oo(this.k.delete())}}class ro extends Ts{constructor(e,t){super(Is.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function io(e){return"IndexedDbTransactionError"===e.name}class so{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ms("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ms("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),oo(n)}add(e){return ms("SimpleDb","ADD",this.store.name,e,e),oo(this.store.add(e))}get(e){return oo(this.store.get(e)).next((t=>(void 0===t&&(t=null),ms("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ms("SimpleDb","DELETE",this.store.name,e),oo(this.store.delete(e))}count(){return ms("SimpleDb","COUNT",this.store.name),oo(this.store.count())}W(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Zs(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Zs(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){ms("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Z(e){const t=this.cursor({});return new Zs(((n,r)=>{t.onerror=e=>{const t=co(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new Zs(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new no(i),o=t(i.primaryKey,i.value,s);if(o instanceof Zs){const e=o.catch((e=>(s.done(),Zs.reject(e))));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>Zs.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function oo(e){return new Zs(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=co(e.target.error);n(t)}}))}let ao=!1;function co(e){const t=to.S(P());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Ts("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ao||(ao=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function lo(e){return null==e}function ho(e){return 0===e&&1/e==-1/0}function fo(e){return"number"==typeof e&&Number.isInteger(e)&&!ho(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo._e=-1;const po=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],go=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mo=go;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.comparator=e,this.root=t||Eo.EMPTY}insert(e,t){return new bo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Eo.BLACK,null,null))}remove(e){return new bo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Eo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Eo{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Eo.RED,this.left=null!=r?r:Eo.EMPTY,this.right=null!=i?i:Eo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Eo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Eo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Eo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Eo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Eo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw bs();if(this.right.isRed())throw bs();const e=this.left.check();if(e!==this.right.check())throw bs();return e+(this.isRed()?0:1)}}Eo.EMPTY=null,Eo.RED=!0,Eo.BLACK=!1,Eo.EMPTY=new class{constructor(){this.size=0}get key(){throw bs()}get value(){throw bs()}get color(){throw bs()}get left(){throw bs()}get right(){throw bs()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Eo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e){this.comparator=e,this.data=new bo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new To(this.data.getIterator())}getIteratorFrom(e){return new To(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Io))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Io(this.comparator);return t.data=e,t}}class To{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e){this.fields=e,e.sort($s.comparator)}static empty(){return new So([])}unionWith(e){let t=new Io($s.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new So(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ao("Invalid base64 string: "+e):e}}(e);return new Co(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Co(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ms(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Co.EMPTY_BYTE_STRING=new Co("");const ko=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function No(e){if(_s(!!e),"string"==typeof e){let t=0;const n=ko.exec(e);if(_s(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ro(e.seconds),nanos:Ro(e.nanos)}}function Ro(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oo(e){return"string"==typeof e?Co.fromBase64String(e):Co.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Lo(e){const t=e.mapValue.fields.__previous_value__;return Do(t)?Lo(t):t}function Po(e){const t=No(e.mapValue.fields.__local_write_time__.timestampValue);return new Fs(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Mo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Do(e)?4:Yo(e)?9007199254740991:10:bs()}function Bo(e,t){if(e===t)return!0;const n=Fo(e);if(n!==Fo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Po(e).isEqual(Po(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=No(e.timestampValue),r=No(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Oo(e.bytesValue).isEqual(Oo(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ro(e.geoPointValue.latitude)===Ro(t.geoPointValue.latitude)&&Ro(e.geoPointValue.longitude)===Ro(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ro(e.integerValue)===Ro(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ro(e.doubleValue),r=Ro(t.doubleValue);return n===r?ho(n)===ho(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Us(e.arrayValue.values||[],t.arrayValue.values||[],Bo);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(yo(n)!==yo(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Bo(n[e],r[e])))return!1;return!0}(e,t);default:return bs()}var r}function Vo(e,t){return void 0!==(e.values||[]).find((e=>Bo(e,t)))}function jo(e,t){if(e===t)return 0;const n=Fo(e),r=Fo(t);if(n!==r)return Ms(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ms(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ro(e.integerValue||e.doubleValue),r=Ro(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qo(e.timestampValue,t.timestampValue);case 4:return qo(Po(e),Po(t));case 5:return Ms(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oo(e),r=Oo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Ms(n[e],r[e]);if(0!==t)return t}return Ms(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ms(Ro(e.latitude),Ro(t.latitude));return 0!==n?n:Ms(Ro(e.longitude),Ro(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=jo(n[e],r[e]);if(t)return t}return Ms(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Uo.mapValue&&t===Uo.mapValue)return 0;if(e===Uo.mapValue)return 1;if(t===Uo.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Ms(r[e],s[e]);if(0!==t)return t;const o=jo(n[r[e]],i[s[e]]);if(0!==o)return o}return Ms(r.length,s.length)}(e.mapValue,t.mapValue);default:throw bs()}}function qo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ms(e,t);const n=No(e),r=No(t),i=Ms(n.seconds,r.seconds);return 0!==i?i:Ms(n.nanos,r.nanos)}function $o(e){return zo(e)}function zo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=No(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oo(e.bytesValue).toBase64():"referenceValue"in e?function(e){return zs.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=zo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${zo(e.fields[i])}`;return n+"}"}(e.mapValue):bs()}function Ho(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ko(e){return!!e&&"integerValue"in e}function Go(e){return!!e&&"arrayValue"in e}function Wo(e){return!!e&&"nullValue"in e}function Qo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Jo(e){return!!e&&"mapValue"in e}function Xo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vo(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Xo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{constructor(e){this.value=e}static empty(){return new Zo({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Jo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xo(t)}setAll(e){let t=$s.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Xo(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Jo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Jo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){vo(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Zo(Xo(this.value))}}function ea(e){const t=[];return vo(e.fields,((e,n)=>{const r=new $s([e]);if(Jo(n)){const e=ea(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new So(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ta{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ta(e,0,Bs.min(),Bs.min(),Bs.min(),Zo.empty(),0)}static newFoundDocument(e,t,n,r){return new ta(e,1,t,Bs.min(),n,r,0)}static newNoDocument(e,t){return new ta(e,2,t,Bs.min(),Bs.min(),Zo.empty(),0)}static newUnknownDocument(e,t){return new ta(e,3,t,Bs.min(),Bs.min(),Zo.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Bs.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zo.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Bs.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ta&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ta(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.position=e,this.inclusive=t}}function ra(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?zs.comparator(zs.fromName(o.referenceValue),n.key):jo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ia(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Bo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t="asc"){this.field=e,this.dir=t}}function oa(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{}class ca extends aa{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ma(e,t,n):"array-contains"===t?new ba(e,n):"in"===t?new _a(e,n):"not-in"===t?new Ea(e,n):"array-contains-any"===t?new Ia(e,n):new ca(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ya(e,n):new va(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(jo(t,this.value)):null!==t&&Fo(this.value)===Fo(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return bs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ua extends aa{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new ua(e,t)}matches(e){return la(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function la(e){return"and"===e.op}function ha(e){return da(e)&&la(e)}function da(e){for(const t of e.filters)if(t instanceof ua)return!1;return!0}function fa(e){if(e instanceof ca)return e.field.canonicalString()+e.op.toString()+$o(e.value);if(ha(e))return e.filters.map((e=>fa(e))).join(",");{const t=e.filters.map((e=>fa(e))).join(",");return`${e.op}(${t})`}}function pa(e,t){return e instanceof ca?(n=e,(r=t)instanceof ca&&n.op===r.op&&n.field.isEqual(r.field)&&Bo(n.value,r.value)):e instanceof ua?function(e,t){return t instanceof ua&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&pa(n,t.filters[r])),!0)}(e,t):void bs();var n,r}function ga(e){return e instanceof ca?`${(t=e).field.canonicalString()} ${t.op} ${$o(t.value)}`:e instanceof ua?function(e){return e.op.toString()+" {"+e.getFilters().map(ga).join(" ,")+"}"}(e):"Filter";var t}class ma extends ca{constructor(e,t,n){super(e,t,n),this.key=zs.fromName(n.referenceValue)}matches(e){const t=zs.comparator(e.key,this.key);return this.matchesComparison(t)}}class ya extends ca{constructor(e,t){super(e,"in",t),this.keys=wa("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class va extends ca{constructor(e,t){super(e,"not-in",t),this.keys=wa("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wa(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>zs.fromName(e.referenceValue)))}class ba extends ca{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Go(t)&&Vo(t.arrayValue,this.value)}}class _a extends ca{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Vo(this.value.arrayValue,t)}}class Ea extends ca{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Vo(this.value.arrayValue,t)}}class Ia extends ca{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Go(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Vo(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function Sa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ta(e,t,n,r,i,s,o)}function Aa(e){const t=Es(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>fa(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),lo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>$o(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>$o(e))).join(",")),t.ce=e}return t.ce}function Ca(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!oa(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!pa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ia(e.startAt,t.startAt)&&ia(e.endAt,t.endAt)}function ka(e){return zs.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ra(e,t,n,r,i,s,o,a){return new Na(e,t,n,r,i,s,o,a)}function Oa(e){return new Na(e)}function Da(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function La(e){return null!==e.collectionGroup}function Pa(e){const t=Es(e);if(null===t.le){t.le=[];const e=new Set;for(const n of t.explicitOrderBy)t.le.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Io($s.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new sa(r,n))})),e.has($s.keyField().canonicalString())||t.le.push(new sa($s.keyField(),n))}return t.le}function xa(e){const t=Es(e);return t.he||(t.he=Ma(t,Pa(e))),t.he}function Ma(e,t){if("F"===e.limitType)return Sa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new sa(e.field,t)}));const n=e.endAt?new na(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new na(e.startAt.position,e.startAt.inclusive):null;return Sa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ua(e,t){const n=e.filters.concat([t]);return new Na(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Fa(e,t,n){return new Na(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ba(e,t){return Ca(xa(e),xa(t))&&e.limitType===t.limitType}function Va(e){return`${Aa(xa(e))}|lt:${e.limitType}`}function ja(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ga(e))).join(", ")}]`),lo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>$o(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>$o(e))).join(",")),`Target(${t})`}(xa(e))}; limitType=${e.limitType})`}function qa(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):zs.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Pa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=ra(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Pa(n),r)||n.endAt&&!function(e,t,n){const r=ra(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Pa(n),r)));var n,r}function $a(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function za(e){return(t,n)=>{let r=!1;for(const i of Pa(e)){const e=Ha(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ha(e,t,n){const r=e.field.isKeyField()?zs.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?jo(r,i):bs()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return bs()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vo(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return wo(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new bo(zs.comparator);function Wa(){return Ga}const Qa=new bo(zs.comparator);function Ja(...e){let t=Qa;for(const n of e)t=t.insert(n.key,n);return t}function Xa(e){let t=Qa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ya(){return ec()}function Za(){return ec()}function ec(){return new Ka((e=>e.toString()),((e,t)=>e.isEqual(t)))}const tc=new bo(zs.comparator),nc=new Io(zs.comparator);function rc(...e){let t=nc;for(const n of e)t=t.add(n);return t}const ic=new Io(Ms);function sc(){return ic}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(t)?"-0":t}}function ac(e){return{integerValue:""+e}}function cc(e,t){return fo(t)?ac(t):oc(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function lc(e,t,n){return e instanceof fc?pc(e,t):e instanceof gc?mc(e,t):n}function hc(e,t){return e instanceof yc?Ko(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class dc extends uc{}class fc extends uc{constructor(e){super(),this.elements=e}}function pc(e,t){const n=wc(t);for(const t of e.elements)n.some((e=>Bo(e,t)))||n.push(t);return{arrayValue:{values:n}}}class gc extends uc{constructor(e){super(),this.elements=e}}function mc(e,t){let n=wc(t);for(const t of e.elements)n=n.filter((e=>!Bo(e,t)));return{arrayValue:{values:n}}}class yc extends uc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function vc(e){return Ro(e.integerValue||e.doubleValue)}function wc(e){return Go(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.field=e,this.transform=t}}class _c{constructor(e,t){this.version=e,this.transformResults=t}}class Ec{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ec}static exists(e){return new Ec(void 0,e)}static updateTime(e){return new Ec(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ic(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Tc{}function Sc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new xc(e.key,Ec.none()):new Rc(e.key,e.data,Ec.none());{const n=e.data,r=Zo.empty();let i=new Io($s.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Oc(e.key,r,new So(i.toArray()),Ec.none())}}function Ac(e,t,n){var r;e instanceof Rc?function(e,t,n){const r=e.value.clone(),i=Lc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Oc?function(e,t,n){if(!Ic(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Lc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Dc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Cc(e,t,n,r){return e instanceof Rc?function(e,t,n,r){if(!Ic(e.precondition,t))return n;const i=e.value.clone(),s=Pc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Oc?function(e,t,n,r){if(!Ic(e.precondition,t))return n;const i=Pc(e.fieldTransforms,r,t),s=t.data;return s.setAll(Dc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,Ic(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function kc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=hc(r.transform,e||null);null!=i&&(null===n&&(n=Zo.empty()),n.set(r.field,i))}return n||null}function Nc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Us(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof fc&&r instanceof fc||n instanceof gc&&r instanceof gc?Us(n.elements,r.elements,Bo):n instanceof yc&&r instanceof yc?Bo(n.Ie,r.Ie):n instanceof dc&&r instanceof dc);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}class Rc extends Tc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Oc extends Tc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Lc(e,t,n){const r=new Map;_s(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,lc(o,a,n[i]))}return r}function Pc(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=t,(i=e)instanceof dc?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Do(t)&&(t=Lo(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):i instanceof fc?pc(i,s):i instanceof gc?mc(i,s):function(e,t){const n=hc(e,t),r=vc(n)+vc(e.Ie);return Ko(n)&&Ko(e.Ie)?ac(r):oc(e.serializer,r)}(i,s)))}var i,s,o;return r}class xc extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mc extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Ac(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Cc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Cc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Za();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Sc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Bs.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),rc())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,((e,t)=>Nc(e,t)))&&Us(this.baseMutations,e.baseMutations,((e,t)=>Nc(e,t)))}}class Fc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){_s(e.mutations.length===n.length);let r=tc;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Fc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jc,qc;function $c(e){switch(e){default:return bs();case Is.CANCELLED:case Is.UNKNOWN:case Is.DEADLINE_EXCEEDED:case Is.RESOURCE_EXHAUSTED:case Is.INTERNAL:case Is.UNAVAILABLE:case Is.UNAUTHENTICATED:return!1;case Is.INVALID_ARGUMENT:case Is.NOT_FOUND:case Is.ALREADY_EXISTS:case Is.PERMISSION_DENIED:case Is.FAILED_PRECONDITION:case Is.ABORTED:case Is.OUT_OF_RANGE:case Is.UNIMPLEMENTED:case Is.DATA_LOSS:return!0}}function zc(e){if(void 0===e)return ys("GRPC error has no .code"),Is.UNKNOWN;switch(e){case jc.OK:return Is.OK;case jc.CANCELLED:return Is.CANCELLED;case jc.UNKNOWN:return Is.UNKNOWN;case jc.DEADLINE_EXCEEDED:return Is.DEADLINE_EXCEEDED;case jc.RESOURCE_EXHAUSTED:return Is.RESOURCE_EXHAUSTED;case jc.INTERNAL:return Is.INTERNAL;case jc.UNAVAILABLE:return Is.UNAVAILABLE;case jc.UNAUTHENTICATED:return Is.UNAUTHENTICATED;case jc.INVALID_ARGUMENT:return Is.INVALID_ARGUMENT;case jc.NOT_FOUND:return Is.NOT_FOUND;case jc.ALREADY_EXISTS:return Is.ALREADY_EXISTS;case jc.PERMISSION_DENIED:return Is.PERMISSION_DENIED;case jc.FAILED_PRECONDITION:return Is.FAILED_PRECONDITION;case jc.ABORTED:return Is.ABORTED;case jc.OUT_OF_RANGE:return Is.OUT_OF_RANGE;case jc.UNIMPLEMENTED:return Is.UNIMPLEMENTED;case jc.DATA_LOSS:return Is.DATA_LOSS;default:return bs()}}(qc=jc||(jc={}))[qc.OK=0]="OK",qc[qc.CANCELLED=1]="CANCELLED",qc[qc.UNKNOWN=2]="UNKNOWN",qc[qc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qc[qc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qc[qc.NOT_FOUND=5]="NOT_FOUND",qc[qc.ALREADY_EXISTS=6]="ALREADY_EXISTS",qc[qc.PERMISSION_DENIED=7]="PERMISSION_DENIED",qc[qc.UNAUTHENTICATED=16]="UNAUTHENTICATED",qc[qc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qc[qc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qc[qc.ABORTED=10]="ABORTED",qc[qc.OUT_OF_RANGE=11]="OUT_OF_RANGE",qc[qc.UNIMPLEMENTED=12]="UNIMPLEMENTED",qc[qc.INTERNAL=13]="INTERNAL",qc[qc.UNAVAILABLE=14]="UNAVAILABLE",qc[qc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Hc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new hs([4294967295,4294967295],0);function Wc(e){const t=Kc().encode(e),n=new ls;return n.update(t),new Uint8Array(n.digest())}function Qc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new hs([n,r],0),new hs([i,s],0)]}class Jc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Xc(`Invalid padding: ${t}`);if(n<0)throw new Xc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Xc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Xc(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=hs.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(hs.fromNumber(n)));return 1===r.compare(Gc)&&(r=new hs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Wc(e),[n,r]=Qc(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,r,e);if(!this.Ae(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Jc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=Wc(e),[n,r]=Qc(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,r,e);this.Re(t)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Xc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Zc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Yc(Bs.min(),r,new bo(Ms),Wa(),rc())}}class Zc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Zc(n,t,rc(),rc(),rc())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class tu{constructor(e,t){this.targetId=e,this.fe=t}}class nu{constructor(e,t,n=Co.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ru{constructor(){this.ge=0,this.pe=ou(),this.ye=Co.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=rc(),t=rc(),n=rc();return this.pe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:bs()}})),new Zc(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=ou()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,_s(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class iu{constructor(e){this.Le=e,this.ke=new Map,this.qe=Wa(),this.Qe=su(),this.Ke=new bo(Ms)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:bs()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){const i=r.target;if(ka(i))if(0===n){const e=new zs(i.path);this.We(t,e,ta.newNoDocument(e,Bs.min()))}else _s(1===n);else{const r=this.Ze(t);if(r!==n){const n=this.Xe(e),i=n?this.et(n,e,r):1;if(0!==i){this.He(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==Hc||Hc.tt(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}(r,e.fe,this.Le.nt(),n,i))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Oo(n).toUint8Array()}catch(e){if(e instanceof Ao)return vs("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Jc(s,r,i)}catch(e){return vs(e instanceof Xc?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)})),r}it(e){const t=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&ka(i.target)){const t=new zs(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,ta.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}}));let n=rc();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const r=new Yc(e,t,this.Ke,this.qe,n);return this.qe=Wa(),this.Qe=su(),this.Ke=new bo(Ms),r}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new ru,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Io(Ms),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||ms("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new ru),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function su(){return new bo(zs.comparator)}function ou(){return new bo(zs.comparator)}const au={asc:"ASCENDING",desc:"DESCENDING"},cu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uu={and:"AND",or:"OR"};class lu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hu(e,t){return e.useProto3Json||lo(t)?t:{value:t}}function du(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function pu(e,t){return du(e,t.toTimestamp())}function gu(e){return _s(!!e),Bs.fromTimestamp(function(e){const t=No(e);return new Fs(t.seconds,t.nanos)}(e))}function mu(e,t){return yu(e,t).canonicalString()}function yu(e,t){const n=(r=e,new js(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function vu(e){const t=js.fromString(e);return _s(Uu(t)),t}function wu(e,t){return mu(e.databaseId,t.path)}function bu(e,t){const n=vu(t);if(n.get(1)!==e.databaseId.projectId)throw new Ts(Is.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ts(Is.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new zs(Tu(n))}function _u(e,t){return mu(e.databaseId,t)}function Eu(e){const t=vu(e);return 4===t.length?js.emptyPath():Tu(t)}function Iu(e){return new js(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Tu(e){return _s(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Su(e,t,n){return{name:wu(e,t),fields:n.value.mapValue.fields}}function Au(e,t){let n;if(t instanceof Rc)n={update:Su(e,t.key,t.value)};else if(t instanceof xc)n={delete:wu(e,t.key)};else if(t instanceof Oc)n={update:Su(e,t.key,t.data),updateMask:Mu(t.fieldMask)};else{if(!(t instanceof Mc))return bs();n={verify:wu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof dc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yc)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw bs()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:pu(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:bs())),n;var r,i}function Cu(e,t){return{documents:[_u(e,t.path)]}}function ku(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_u(e,i);const s=function(e){if(0!==e.length)return xu(ua.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:Lu((t=e).field),direction:Ou(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hu(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ut:n,parent:i};var c}function Nu(e){let t=Eu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_s(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ru(e);return t instanceof ua&&ha(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new sa(Pu((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,lo(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new na(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new na(n,t)}(n.endAt)),Ra(t,i,o,s,a,"F",c,u)}function Ru(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Pu(e.unaryFilter.field);return ca.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Pu(e.unaryFilter.field);return ca.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pu(e.unaryFilter.field);return ca.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pu(e.unaryFilter.field);return ca.create(i,"!=",{nullValue:"NULL_VALUE"});default:return bs()}}(e):void 0!==e.fieldFilter?(n=e,ca.create(Pu(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return bs()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,ua.create(t.compositeFilter.filters.map((e=>Ru(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return bs()}}(t.compositeFilter.op))):bs();var t,n}function Ou(e){return au[e]}function Du(e){return cu[e]}function Lu(e){return{fieldPath:e.canonicalString()}}function Pu(e){return $s.fromServerFormat(e.fieldPath)}function xu(e){return e instanceof ca?function(e){if("=="===e.op){if(Qo(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NAN"}};if(Wo(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Qo(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NOT_NAN"}};if(Wo(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lu(e.field),op:Du(e.op),value:e.value}}}(e):e instanceof ua?function(e){const t=e.getFilters().map((e=>xu(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,uu[n]),filters:t}};var n}(e):bs()}function Mu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Uu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,n,r,i=Bs.min(),s=Bs.min(),o=Co.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Fu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.ct=e}}function Vu(e){const t=Nu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Fa(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Ro(e.integerValue));else if("doubleValue"in e){const n=Ro(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),ho(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Oo(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?Yo(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):bs()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const e of Object.keys(n))this.Rt(e,t),this.It(n[e],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const e of n)this.It(e,t)}gt(e,t){this.Et(t,37),zs.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}ju.bt=new ju;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(){this._n=new $u}addToCollectionParentIndex(e,t){return this._n.add(t),Zs.resolve()}getCollectionParents(e,t){return Zs.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return Zs.resolve()}deleteFieldIndex(e,t){return Zs.resolve()}deleteAllFieldIndexes(e){return Zs.resolve()}createTargetIndexes(e,t){return Zs.resolve()}getDocumentsMatchingTarget(e,t){return Zs.resolve(null)}getIndexType(e,t){return Zs.resolve(0)}getFieldIndexes(e,t){return Zs.resolve([])}getNextCollectionGroupToUpdate(e){return Zs.resolve(null)}getMinOffset(e,t){return Zs.resolve(Ws.min())}getMinOffsetFromCollectionGroup(e,t){return Zs.resolve(Ws.min())}updateCollectionGroup(e,t,n){return Zs.resolve()}updateIndexEntries(e,t){return Zs.resolve()}}class $u{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Io(js.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Io(js.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class zu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new zu(e,zu.DEFAULT_COLLECTION_PERCENTILE,zu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zu.DEFAULT_COLLECTION_PERCENTILE=10,zu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zu.DEFAULT=new zu(41943040,zu.DEFAULT_COLLECTION_PERCENTILE,zu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zu.DISABLED=new zu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Hu(0)}static Bn(){return new Hu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(){this.changes=new Ka((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ta.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Zs.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Cc(n.mutation,e,So.empty(),Fs.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,rc()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=rc()){const r=Ya();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ja();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ya();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,rc())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Wa();const s=ec(),o=ec();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Oc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Cc(o.mutation,t,o.mutation.getFieldMask(),Fs.now())):s.set(t.key,So.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Gu(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ec();let r=new bo(((e,t)=>e-t)),i=rc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||So.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||rc()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Za();c.forEach((e=>{if(!i.has(e)){const r=Sc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Zs.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,zs.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):La(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Zs.resolve(Ya());let o=-1,a=i;return s.next((t=>Zs.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Zs.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,rc()))).next((e=>({batchId:o,changes:Xa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new zs(t)).next((e=>{let t=Ja();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Ja();return this.indexManager.getCollectionParents(e,i).next((o=>Zs.forEach(o,(o=>{const a=(c=t,u=o.child(i),new Na(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ta.newInvalidDocument(r)))}));let n=Ja();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Cc(s.mutation,r,So.empty(),Fs.now()),qa(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return Zs.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:(n=t).id,version:n.version,createTime:gu(n.createTime)}),Zs.resolve();var n}getNamedQuery(e,t){return Zs.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:(n=t).name,query:Vu(n.bundledQuery),readTime:gu(n.readTime)}),Zs.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.overlays=new bo(zs.comparator),this.hr=new Map}getOverlay(e,t){return Zs.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ya();return Zs.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Zs.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),Zs.resolve()}getOverlaysForCollection(e,t,n){const r=Ya(),i=t.length+1,s=new zs(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Zs.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new bo(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ya(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ya(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Zs.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Bc(t,n));let i=this.hr.get(t);void 0===i&&(i=rc(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.Pr=new Io(Yu.Ir),this.Tr=new Io(Yu.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new Yu(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new Yu(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new zs(new js([])),n=new Yu(t,e),r=new Yu(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),i.push(e.key)})),i}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new zs(new js([])),n=new Yu(t,e),r=new Yu(t,e+1);let i=rc();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Yu(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Yu{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return zs.comparator(e.key,t.key)||Ms(e.pr,t.pr)}static Er(e,t){return Ms(e.pr,t.pr)||zs.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Io(Yu.Ir)}checkEmpty(e){return Zs.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Uc(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.wr=this.wr.add(new Yu(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Zs.resolve(s)}lookupMutationBatch(e,t){return Zs.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),i=r<0?0:r;return Zs.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Zs.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return Zs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Yu(t,0),r=new Yu(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);i.push(t)})),Zs.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Io(Ms);return t.forEach((e=>{const t=new Yu(e,0),r=new Yu(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),Zs.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;zs.isDocumentKey(i)||(i=i.child(""));const s=new Yu(new zs(i),0);let o=new Io(Ms);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.pr)),!0)}),s),Zs.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){_s(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return Zs.forEach(t.mutations,(r=>{const i=new Yu(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new Yu(t,0),r=this.wr.firstAfterOrEqual(n);return Zs.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Zs.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.vr=e,this.docs=new bo(zs.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Zs.resolve(n?n.document.mutableCopy():ta.newInvalidDocument(t))}getEntries(e,t){let n=Wa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ta.newInvalidDocument(e))})),Zs.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Wa();const s=t.path,o=new zs(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Qs(Gs(o),n)<=0||(r.has(o.key)||qa(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Zs.resolve(i)}getAllFromCollectionGroup(e,t,n,r){bs()}Fr(e,t){return Zs.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new tl(this)}getSize(e){return Zs.resolve(this.size)}}class tl extends Ku{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),Zs.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.persistence=e,this.Mr=new Ka((e=>Aa(e)),Ca),this.lastRemoteSnapshotVersion=Bs.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xu,this.targetCount=0,this.Br=Hu.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),Zs.resolve()}getLastRemoteSnapshotVersion(e){return Zs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Zs.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),Zs.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),Zs.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Hu(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,Zs.resolve()}updateTargetData(e,t){return this.qn(t),Zs.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,Zs.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Zs.waitFor(i).next((()=>r))}getTargetCount(e){return Zs.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return Zs.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),Zs.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Zs.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),Zs.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return Zs.resolve(n)}containsKey(e,t){return Zs.resolve(this.Nr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.Lr={},this.overlays={},this.kr=new uo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nl(this),this.indexManager=new qu,this.remoteDocumentCache=new el((e=>this.referenceDelegate.Kr(e))),this.serializer=new Bu(t),this.$r=new Qu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ju,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new Zu(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){ms("MemoryPersistence","Starting transaction:",e);const r=new il(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return Zs.or(Object.values(this.Lr).map((n=>()=>n.containsKey(e,t))))}}class il extends Xs{constructor(e){super(),this.currentSequenceNumber=e}}class sl{constructor(e){this.persistence=e,this.zr=new Xu,this.jr=null}static Hr(e){return new sl(e)}get Jr(){if(this.jr)return this.jr;throw bs()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),Zs.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),Zs.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),Zs.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Zs.forEach(this.Jr,(n=>{const r=zs.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,Bs.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return Zs.or([()=>Zs.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ol{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=rc(),r=rc();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new ol(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=U()?8:to.v(P())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Hi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new al;return this.Ji(e,t,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>i.result))}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(gs()<=ne.DEBUG&&ms("QueryEngine","SDK will not create cache indexes for query:",ja(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Zs.resolve()):(gs()<=ne.DEBUG&&ms("QueryEngine","Query:",ja(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(gs()<=ne.DEBUG&&ms("QueryEngine","The SDK decides to create cache indexes for query:",ja(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xa(t))):Zs.resolve())}ji(e,t){if(Da(t))return Zs.resolve(null);let n=xa(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Fa(t,null,"F"),n=xa(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=rc(...r);return this.zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,Fa(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,r){return Da(t)||r.isEqual(Bs.min())?Zs.resolve(null):this.zi.getDocuments(e,n).next((i=>{const s=this.Zi(t,i);return this.Xi(t,s,n,r)?Zs.resolve(null):(gs()<=ne.DEBUG&&ms("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ja(t)),this.es(e,s,t,Ks(r,-1)).next((e=>e)))}))}Zi(e,t){let n=new Io(za(e));return t.forEach(((t,r)=>{qa(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return gs()<=ne.DEBUG&&ms("QueryEngine","Using full collection scan to execute query:",ja(t)),this.zi.getDocumentsMatchingQuery(e,t,Ws.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new bo(Ms),this.rs=new Ka((e=>Aa(e)),Ca),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wu(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function ll(e,t,n,r){return new ul(e,t,n,r)}async function hl(e,t){const n=Es(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=rc();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function dl(e){const t=Es(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function fl(e,t,n){let r=rc(),i=rc();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Wa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Bs.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ms("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:r,ls:i}}))}function pl(e,t){const n=Es(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function gl(e,t){const n=Es(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Qr.getTargetData(e,t).next((i=>i?(r=i,Zs.resolve(r)):n.Qr.allocateTargetId(e).next((i=>(r=new Fu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ns.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function ml(e,t,n){const r=Es(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!io(e))throw e;ms("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function yl(e,t,n){const r=Es(e);let i=Bs.min(),s=rc();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Es(e),i=r.rs.get(n);return void 0!==i?Zs.resolve(r.ns.get(i)):r.Qr.getTargetData(t,n)}(r,e,xa(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ts.getDocumentsMatchingQuery(e,t,n?i:Bs.min(),n?s:rc()))).next((e=>(vl(r,$a(t),e),{documents:e,hs:s})))))}function vl(e,t,n){let r=e.ss.get(t)||Bs.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ss.set(t,r)}class wl{constructor(){this.activeTargetIds=sc()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bl{constructor(){this.no=new wl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new wl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{io(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ms("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ms("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il=null;function Tl(){return null===Il?Il=268435456+Math.round(2147483648*Math.random()):Il++,"0x"+Il.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Sl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){const s=Tl(),o=this.bo(e,t.toUriEncodedString());ms("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(e,o,a,n).then((t=>(ms("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw vs("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+fs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=Sl[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){const i=Tl();return new Promise(((s,o)=>{const a=new us;a.setWithCredentials(!0),a.listenOnce(ss.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case is.NO_ERROR:const t=a.getResponseJson();ms("WebChannelConnection",`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case is.TIMEOUT:ms("WebChannelConnection",`RPC '${e}' ${i} timed out`),o(new Ts(Is.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const n=a.getStatus();if(ms("WebChannelConnection",`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Is).indexOf(t)>=0?t:Is.UNKNOWN}(t.status);o(new Ts(e,t.message))}else o(new Ts(Is.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ts(Is.UNAVAILABLE,"Connection failed."));break;default:bs()}}finally{ms("WebChannelConnection",`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ms("WebChannelConnection",`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const r=Tl(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ns(),o=rs(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ms("WebChannelConnection",`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Al({lo:t=>{d?ms("WebChannelConnection",`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ms("WebChannelConnection",`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ms("WebChannelConnection",`RPC '${e}' stream ${r} sending:`,t),l.send(t))},ho:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,cs.EventType.OPEN,(()=>{d||ms("WebChannelConnection",`RPC '${e}' stream ${r} transport opened.`)})),p(l,cs.EventType.CLOSE,(()=>{d||(d=!0,ms("WebChannelConnection",`RPC '${e}' stream ${r} transport closed`),f.Vo())})),p(l,cs.EventType.ERROR,(t=>{d||(d=!0,vs("WebChannelConnection",`RPC '${e}' stream ${r} transport errored:`,t),f.Vo(new Ts(Is.UNAVAILABLE,"The operation could not be completed")))})),p(l,cs.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];_s(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ms("WebChannelConnection",`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=jc[e];if(void 0!==t)return zc(t)}(t),i=o.message;void 0===n&&(n=Is.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new Ts(n,i)),l.close()}else ms("WebChannelConnection",`RPC '${e}' stream ${r} received:`,i),f.mo(i)}})),p(o,os.STAT_EVENT,(t=>{t.stat===as.PROXY?ms("WebChannelConnection",`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===as.NOPROXY&&ms("WebChannelConnection",`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e){return new lu(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,t-n);r>0&&ms("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Lo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,n,r,i,s,o,a){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Rl(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===Is.RESOURCE_EXHAUSTED?(ys(t.toString()),ys("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===Is.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new Ts(Is.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return ms("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(ms("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dl extends Ol{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:bs(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(_s(void 0===t||"string"==typeof t),Co.fromBase64String(t||"")):(_s(void 0===t||t instanceof Uint8Array),Co.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Is.UNKNOWN:zc(e.code);return new Ts(t,e.message||"")}(a);n=new nu(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=bu(e,r.document.name),s=gu(r.document.updateTime),o=r.document.createTime?gu(r.document.createTime):Bs.min(),a=new Zo({mapValue:{fields:r.document.fields}}),c=ta.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new eu(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=bu(e,r.document),s=r.readTime?gu(r.readTime):Bs.min(),o=ta.newNoDocument(i,s),a=r.removedTargetIds||[];n=new eu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=bu(e,r.document),s=r.removedTargetIds||[];n=new eu([],s,i,null)}else{if(!("filter"in t))return bs();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Vc(r,i),o=e.targetId;n=new tu(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Bs.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Bs.min():t.readTime?gu(t.readTime):Bs.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=Iu(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ka(r)?{documents:Cu(e,r)}:{query:ku(e,r).ut},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=fu(e,t.resumeToken);const r=hu(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Bs.min())>0){n.readTime=du(e,t.snapshotVersion.toTimestamp());const r=hu(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return bs()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=Iu(this.serializer),t.removeTarget=e,this.t_(t)}}class Ll extends Ol{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(_s(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(_s(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?gu(e.updateTime):gu(t);return n.isEqual(Bs.min())&&(n=gu(t)),new _c(n,e.transformResults||[])}(e,n)))):[]),i=gu(e.commitTime);return this.listener.T_(i,r)}var t,n;return _s(!e.writeResults||0===e.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Iu(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Au(this.serializer,e)))};this.t_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new Ts(Is.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,yu(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Is.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ts(Is.UNKNOWN,e.toString())}))}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(e,yu(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Is.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ts(Is.UNKNOWN,e.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class xl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ys(t),this.g_=!1):ms("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((e=>{n.enqueueAndForget((async()=>{Hl(this)&&(ms("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Es(e);t.v_.add(4),await Fl(t),t.x_.set("Unknown"),t.v_.delete(4),await Ul(t)}(this))}))})),this.x_=new xl(n,r)}}async function Ul(e){if(Hl(e))for(const t of e.F_)await t(!0)}async function Fl(e){for(const t of e.F_)await t(!1)}function Bl(e,t){const n=Es(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),zl(n)?$l(n):uh(n).Jo()&&jl(n,t))}function Vl(e,t){const n=Es(e),r=uh(n);n.C_.delete(t),r.Jo()&&ql(n,t),0===n.C_.size&&(r.Jo()?r.Xo():Hl(n)&&n.x_.set("Unknown"))}function jl(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Bs.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}uh(e).c_(t)}function ql(e,t){e.O_.Oe(t),uh(e).l_(t)}function $l(e){e.O_=new iu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),uh(e).start(),e.x_.p_()}function zl(e){return Hl(e)&&!uh(e).Ho()&&e.C_.size>0}function Hl(e){return 0===Es(e).v_.size}function Kl(e){e.O_=void 0}async function Gl(e){e.C_.forEach(((t,n)=>{jl(e,t)}))}async function Wl(e,t){Kl(e),zl(e)?(e.x_.S_(t),$l(e)):e.x_.set("Unknown")}async function Ql(e,t,n){if(e.x_.set("Online"),t instanceof nu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){ms("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Jl(e,n)}else if(t instanceof eu?e.O_.$e(t):t instanceof tu?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(Bs.min()))try{const t=await dl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.it(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(Co.EMPTY_BYTE_STRING,r.snapshotVersion)),ql(e,t);const i=new Fu(r.target,t,n,r.sequenceNumber);jl(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ms("RemoteStore","Failed to raise snapshot:",t),await Jl(e,t)}}async function Jl(e,t,n){if(!io(t))throw t;e.v_.add(1),await Fl(e),e.x_.set("Offline"),n||(n=()=>dl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ms("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Ul(e)}))}function Xl(e,t){return t().catch((n=>Jl(e,n,t)))}async function Yl(e){const t=Es(e),n=lh(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Zl(t);)try{const e=await pl(t.localStore,r);if(null===e){0===t.D_.length&&n.Xo();break}r=e.batchId,eh(t,e)}catch(e){await Jl(t,e)}th(t)&&nh(t)}function Zl(e){return Hl(e)&&e.D_.length<10}function eh(e,t){e.D_.push(t);const n=lh(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function th(e){return Hl(e)&&!lh(e).Ho()&&e.D_.length>0}function nh(e){lh(e).start()}async function rh(e){lh(e).d_()}async function ih(e){const t=lh(e);for(const n of e.D_)t.I_(n.mutations)}async function sh(e,t,n){const r=e.D_.shift(),i=Fc.from(r,t,n);await Xl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Yl(e)}async function oh(e,t){t&&lh(e).P_&&await async function(e,t){if($c(n=t.code)&&n!==Is.ABORTED){const n=e.D_.shift();lh(e).Zo(),await Xl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Yl(e)}var n}(e,t),th(e)&&nh(e)}async function ah(e,t){const n=Es(e);n.asyncQueue.verifyOperationInProgress(),ms("RemoteStore","RemoteStore received new credentials");const r=Hl(n);n.v_.add(3),await Fl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Ul(n)}async function ch(e,t){const n=Es(e);t?(n.v_.delete(2),await Ul(n)):t||(n.v_.add(2),await Fl(n),n.x_.set("Unknown"))}function uh(e){return e.N_||(e.N_=function(e,t,n){const r=Es(e);return r.R_(),new Dl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:Gl.bind(null,e),To:Wl.bind(null,e),u_:Ql.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),zl(e)?$l(e):e.x_.set("Unknown")):(await e.N_.stop(),Kl(e))}))),e.N_}function lh(e){return e.B_||(e.B_=function(e,t,n){const r=Es(e);return r.R_(),new Ll(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:rh.bind(null,e),To:oh.bind(null,e),E_:ih.bind(null,e),T_:sh.bind(null,e)}),e.F_.push((async t=>{t?(e.B_.Zo(),await Yl(e)):(await e.B_.stop(),e.D_.length>0&&(ms("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))}))),e.B_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new hh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ts(Is.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(e,t){if(ys("AsyncQueue",`${t}: ${e}`),io(e))return new Ts(Is.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||zs.comparator(t.key,n.key):(e,t)=>zs.comparator(e.key,t.key),this.keyedMap=Ja(),this.sortedSet=new bo(this.comparator)}static emptySet(e){return new fh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new fh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.L_=new bo(zs.comparator)}track(e){const t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):bs():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class gh{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new gh(e,t,fh.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.q_=void 0,this.Q_=[]}}class yh{constructor(){this.queries=new Ka((e=>Va(e)),Ba),this.onlineState="Unknown",this.K_=new Set}}async function vh(e,t){const n=Es(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mh),i)try{s.q_=await n.onListen(r)}catch(e){const n=dh(e,`Initialization of query '${ja(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&Eh(n)}async function wh(e,t){const n=Es(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.Q_.indexOf(t);e>=0&&(s.Q_.splice(e,1),i=0===s.Q_.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bh(e,t){const n=Es(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.Q_)t.W_(e)&&(r=!0);i.q_=e}}r&&Eh(n)}function _h(e,t,n){const r=Es(e),i=r.queries.get(t);if(i)for(const e of i.Q_)e.onError(n);r.queries.delete(t)}function Eh(e){e.K_.forEach((e=>{e.next()}))}class Ih{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=gh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(e){this.key=e}}class Sh{constructor(e){this.key=e}}class Ah{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=rc(),this.mutatedKeys=rc(),this.ua=za(e),this.ca=new fh(this.ua)}get la(){return this.oa}ha(e,t){const n=t?t.Pa:new ph,r=t?t.ca:this.ca;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=qa(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ia(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ua(l,a)>0||c&&this.ua(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,Xi:o,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.k_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bs()}};return n(e)-n(t)}(e.type,t.type)||this.ua(e.doc,t.doc))),this.Ta(n),r=null!=r&&r;const o=t&&!r?this.Ea():[],a=0===this.aa.size&&this.current&&!r?1:0,c=a!==this._a;return this._a=a,0!==s.length||c?{snapshot:new gh(this.query,e.ca,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:o}:{da:o}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ph,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach((e=>this.oa=this.oa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.oa=this.oa.delete(e))),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=rc(),this.ca.forEach((e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))}));const t=[];return e.forEach((e=>{this.aa.has(e)||t.push(new Sh(e))})),this.aa.forEach((n=>{e.has(n)||t.push(new Th(n))})),t}Ra(e){this.oa=e.hs,this.aa=rc();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return gh.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class Ch{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class kh{constructor(e){this.key=e,this.ma=!1}}class Nh{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Ka((e=>Va(e)),Ba),this.pa=new Map,this.ya=new Set,this.wa=new bo(zs.comparator),this.Sa=new Map,this.ba=new Xu,this.Da={},this.Ca=new Map,this.va=Hu.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function Rh(e,t){const n=Wh(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const e=await gl(n.localStore,xa(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Oh(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Bl(n.remoteStore,e)}return i}async function Oh(e,t,n,r,i){e.Ma=(t,n,r)=>async function(e,t,n,r){let i=t.view.ha(n);i.Xi&&(i=await yl(e.localStore,t.query,!1).then((({documents:e})=>t.view.ha(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return qh(e,t.targetId,a.da),a.snapshot}(e,t,n,r);const s=await yl(e.localStore,t,!0),o=new Ah(t,s.hs),a=o.ha(s.documents),c=Zc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);qh(e,n,u.da);const l=new Ch(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function Dh(e,t){const n=Es(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter((e=>!Ba(e,t)))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ml(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Vl(n.remoteStore,r.targetId),Vh(n,r.targetId)})).catch(Ys)):(Vh(n,r.targetId),await ml(n.localStore,r.targetId,!0))}async function Lh(e,t){const n=Es(e);try{const e=await function(e,t){const n=Es(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(Co.EMPTY_BYTE_STRING,Bs.min()).withLastLimboFreeSnapshotVersion(Bs.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Qr.updateTargetData(e,u))}));let a=Wa(),c=rc();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(fl(e,s,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!r.isEqual(Bs.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Zs.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Sa.get(t);r&&(_s(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ma=!0:e.modifiedDocuments.size>0?_s(r.ma):e.removedDocuments.size>0&&(_s(r.ma),r.ma=!1))})),await Hh(n,e,t)}catch(e){await Ys(e)}}function Ph(e,t,n){const r=Es(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Es(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.Q_)e.U_(t)&&(r=!0)})),r&&Eh(n)}(r.eventManager,t),e.length&&r.fa.u_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xh(e,t,n){const r=Es(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let e=new bo(zs.comparator);e=e.insert(s,ta.newNoDocument(s,Bs.min()));const n=rc().add(s),i=new Yc(Bs.min(),new Map,new bo(Ms),e,n);await Lh(r,i),r.wa=r.wa.remove(s),r.Sa.delete(t),zh(r)}else await ml(r.localStore,t,!1).then((()=>Vh(r,t,n))).catch(Ys)}async function Mh(e,t){const n=Es(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Es(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Zs.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);_s(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=rc();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Bh(n,r,null),Fh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hh(n,e)}catch(e){await Ys(e)}}async function Uh(e,t,n){const r=Es(e);try{const e=await function(e,t){const n=Es(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(_s(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Bh(r,t,n),Fh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hh(r,e)}catch(e){await Ys(e)}}function Fh(e,t){(e.Ca.get(t)||[]).forEach((e=>{e.resolve()})),e.Ca.delete(t)}function Bh(e,t,n){const r=Es(e);let i=r.Da[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Vh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach((t=>{e.ba.containsKey(t)||jh(e,t)}))}function jh(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);null!==n&&(Vl(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),zh(e))}function qh(e,t,n){for(const r of n)r instanceof Th?(e.ba.addReference(r.key,t),$h(e,r)):r instanceof Sh?(ms("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||jh(e,r.key)):bs()}function $h(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(ms("SyncEngine","New document in limbo: "+n),e.ya.add(r),zh(e))}function zh(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new zs(js.fromString(t)),r=e.va.next();e.Sa.set(r,new kh(n)),e.wa=e.wa.insert(n,r),Bl(e.remoteStore,new Fu(xa(Oa(n.path)),r,"TargetPurposeLimboResolution",uo._e))}}async function Hh(e,t,n){const r=Es(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((e,a)=>{o.push(r.Ma(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=ol.Ki(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fa.u_(i),await async function(e,t){const n=Es(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Zs.forEach(t,(t=>Zs.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Zs.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!io(e))throw e;ms("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ns.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(t,i)}}}(r.localStore,s))}async function Kh(e,t){const n=Es(e);if(!n.currentUser.isEqual(t)){ms("SyncEngine","User change. New user:",t.toKey());const e=await hl(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Ca.forEach((e=>{e.forEach((e=>{e.reject(new Ts(Is.CANCELLED,i))}))})),r.Ca.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hh(n,e.us)}var r,i}function Gh(e,t){const n=Es(e),r=n.Sa.get(t);if(r&&r.ma)return rc().add(r.key);{let e=rc();const r=n.pa.get(t);if(!r)return e;for(const t of r){const r=n.ga.get(t);e=e.unionWith(r.view.la)}return e}}function Wh(e){const t=Es(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xh.bind(null,t),t.fa.u_=bh.bind(null,t.eventManager),t.fa.xa=_h.bind(null,t.eventManager),t}function Qh(e){const t=Es(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Uh.bind(null,t),t}class Jh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ll(this.persistence,new cl,e.initialUser,this.serializer)}createPersistence(e){return new rl(sl.Hr,this.serializer)}createSharedClientState(e){return new bl}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ph(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kh.bind(null,this.syncEngine),await ch(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yh}createDatastore(e){const t=Nl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Cl(r));var r;return function(e,t,n,r){return new Pl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ph(this.syncEngine,e,0),s=El.D()?new El:new _l,new Ml(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Nh(e,t,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=Es(e);ms("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await Fl(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):ys("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ds.UNAUTHENTICATED,this.clientId=xs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ms("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ms("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ts(Is.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ed(e,t){e.asyncQueue.verifyOperationInProgress(),ms("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await hl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function td(e,t){e.asyncQueue.verifyOperationInProgress();const n=await rd(e);ms("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>ah(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ah(t.remoteStore,n))),e._onlineComponents=t}function nd(e){return"FirebaseError"===e.name?e.code===Is.FAILED_PRECONDITION||e.code===Is.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function rd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ms("FirestoreClient","Using user provided OfflineComponentProvider");try{await ed(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!nd(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await ed(e,new Jh)}}else ms("FirestoreClient","Using default OfflineComponentProvider"),await ed(e,new Jh);return e._offlineComponents}async function id(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ms("FirestoreClient","Using user provided OnlineComponentProvider"),await td(e,e._uninitializedComponentsProvider._online)):(ms("FirestoreClient","Using default OnlineComponentProvider"),await td(e,new Xh))),e._onlineComponents}function sd(e){return id(e).then((e=>e.syncEngine))}async function od(e){const t=await id(e),n=t.eventManager;return n.onListen=Rh.bind(null,t.syncEngine),n.onUnlisten=Dh.bind(null,t.syncEngine),n}function ad(e,t,n={}){const r=new Ss;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Yh({next:s=>{t.enqueueAndForget((()=>wh(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ts(Is.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ts(Is.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Ih(Oa(n.path),s,{includeMetadataChanges:!0,Z_:!0});return vh(e,o)}(await od(e),e.asyncQueue,t,n,r))),r.promise}function cd(e,t,n={}){const r=new Ss;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Yh({next:n=>{t.enqueueAndForget((()=>wh(e,o))),n.fromCache&&"server"===r.source?i.reject(new Ts(Is.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Ih(n,s,{includeMetadataChanges:!0,Z_:!0});return vh(e,o)}(await od(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ud(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ld=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e,t,n){if(!n)throw new Ts(Is.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function dd(e){if(!zs.isDocumentKey(e))throw new Ts(Is.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fd(e){if(zs.isDocumentKey(e))throw new Ts(Is.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":bs()}function gd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ts(Is.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pd(e);throw new Ts(Is.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class md{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Ts(Is.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ts(Is.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Ts(Is.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ud(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ts(Is.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ts(Is.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ts(Is.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class yd{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ts(Is.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ts(Is.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Cs;switch(e.type){case"firstParty":return new Os(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ts(Is.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ld.get(e);t&&(ms("ComponentProvider","Removing Datastore"),ld.delete(e),t.terminate())}(this),Promise.resolve()}}function vd(e,t,n,r={}){var i;const s=(e=gd(e,yd))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=ds.MOCK_USER;else{t=L(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Ts(Is.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ds(s)}e._authCredentials=new ks(new As(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wd(this.firestore,e,this._query)}}class bd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _d(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bd(this.firestore,e,this._key)}}class _d extends wd{constructor(e,t,n){super(e,t,Oa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bd(this.firestore,null,new zs(e))}withConverter(e){return new _d(this.firestore,e,this._path)}}function Ed(e,t,...n){if(e=X(e),hd("collection","path",t),e instanceof yd){const r=js.fromString(t,...n);return fd(r),new _d(e,null,r)}{if(!(e instanceof bd||e instanceof _d))throw new Ts(Is.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(js.fromString(t,...n));return fd(r),new _d(e.firestore,null,r)}}function Id(e,t,...n){if(e=X(e),1===arguments.length&&(t=xs.newId()),hd("doc","path",t),e instanceof yd){const r=js.fromString(t,...n);return dd(r),new bd(e,null,new zs(r))}{if(!(e instanceof bd||e instanceof _d))throw new Ts(Is.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(js.fromString(t,...n));return dd(r),new bd(e.firestore,e instanceof _d?e.converter:null,new zs(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Td{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Rl(this,"async_queue_retry"),this._u=()=>{const e=kl();e&&ms("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=kl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const t=kl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise((()=>{}));const t=new Ss;return this.uu((()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.eu.push(e),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!io(e))throw e;ms("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(e){const t=this.Xa.then((()=>(this.iu=!0,e().catch((e=>{this.ru=e,this.iu=!1;throw ys("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.iu=!1,e))))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);const r=hh.createAndSchedule(this,e,t,n,(e=>this.lu(e)));return this.nu.push(r),r}au(){this.ru&&bs()}verifyOperationInProgress(){}async hu(){let e;do{e=this.Xa,await e}while(e!==this.Xa)}Pu(e){for(const t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then((()=>{this.nu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.nu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()}))}Tu(e){this.ou.push(e)}lu(e){const t=this.nu.indexOf(e);this.nu.splice(t,1)}}class Sd extends yd{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Td,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cd(this),this._firestoreClient.terminate()}}function Ad(e){return e._firestoreClient||Cd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Cd(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new xo(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ud(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;e._firestoreClient=new Zh(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kd(Co.fromBase64String(e))}catch(e){throw new Ts(Is.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new kd(Co.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ts(Is.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $s(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rd{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ts(Is.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ts(Is.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ms(this._lat,e._lat)||Ms(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=/^__.*__$/;class Ld{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Oc(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rc(e,this.data,t,this.fieldTransforms)}}class Pd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Oc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bs()}}class Md{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.mu(e),r}fu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.Eu(),r}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Zd(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(0===e.length)throw this.pu("Document fields must not be empty");if(xd(this.du)&&Dd.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class Ud{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Nl(e)}Su(e,t,n,r=!1){return new Md({du:e,methodName:t,wu:n,path:$s.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fd(e){const t=e._freezeSettings(),n=Nl(e._databaseId);return new Ud(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Bd(e,t,n,r,i,s={}){const o=e.Su(s.merge||s.mergeFields?2:0,t,n,i);Qd("Data must be an object, but it was:",o,r);const a=Gd(r,o);let c,u;if(s.merge)c=new So(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Jd(t,r,n);if(!o.contains(i))throw new Ts(Is.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ef(e,i)||e.push(i)}c=new So(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ld(new Zo(a),c,u)}class Vd extends Rd{_toFieldTransform(e){if(2!==e.du)throw 1===e.du?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vd}}function jd(e,t,n){return new Md({du:3,wu:t.settings.wu,methodName:e._methodName,Vu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class qd extends Rd{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=jd(this,e,!0),n=this.bu.map((e=>Kd(e,t))),r=new fc(n);return new bc(e.path,r)}isEqual(e){return e instanceof qd&&$(this.bu,e.bu)}}function $d(e,t,n,r){const i=e.Su(1,t,n);Qd("Data must be an object, but it was:",i,r);const s=[],o=Zo.empty();vo(r,((e,r)=>{const a=Yd(t,e,n);r=X(r);const c=i.fu(a);if(r instanceof Vd)s.push(a);else{const e=Kd(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new So(s);return new Pd(o,a,i.fieldTransforms)}function zd(e,t,n,r,i,s){const o=e.Su(1,t,n),a=[Jd(t,r,n)],c=[i];if(s.length%2!=0)throw new Ts(Is.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(Jd(t,s[e])),c.push(s[e+1]);const u=[],l=Zo.empty();for(let e=a.length-1;e>=0;--e)if(!ef(u,a[e])){const t=a[e];let n=c[e];n=X(n);const r=o.fu(t);if(n instanceof Vd)u.push(t);else{const e=Kd(n,r);null!=e&&(u.push(t),l.set(t,e))}}const h=new So(u);return new Pd(l,h,o.fieldTransforms)}function Hd(e,t,n,r=!1){return Kd(n,e.Su(r?4:3,t))}function Kd(e,t){if(Wd(e=X(e)))return Qd("Unsupported field value:",t,e),Gd(e,t);if(e instanceof Rd)return function(e,t){if(!xd(t.du))throw t.pu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.pu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&4!==t.du)throw t.pu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Kd(i,t.gu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=X(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return cc(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Fs.fromDate(e);return{timestampValue:du(t.serializer,n)}}if(e instanceof Fs){const n=new Fs(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:du(t.serializer,n)}}if(e instanceof Od)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kd)return{bytesValue:fu(t.serializer,e._byteString)};if(e instanceof bd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.pu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:mu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.pu(`Unsupported field value: ${pd(e)}`)}(e,t)}function Gd(e,t){const n={};return wo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vo(e,((e,r)=>{const i=Kd(r,t.Ru(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Wd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Fs||e instanceof Od||e instanceof kd||e instanceof bd||e instanceof Rd)}function Qd(e,t,n){if(!Wd(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=pd(n);throw"an object"===r?t.pu(e+" a custom object"):t.pu(e+" "+r)}var r}function Jd(e,t,n){if((t=X(t))instanceof Nd)return t._internalPath;if("string"==typeof t)return Yd(e,t);throw Zd("Field path arguments must be of type string or ",e,!1,void 0,n)}const Xd=new RegExp("[~\\*/\\[\\]]");function Yd(e,t,n){if(t.search(Xd)>=0)throw Zd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Nd(...t.split("."))._internalPath}catch(r){throw Zd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zd(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ts(Is.INVALID_ARGUMENT,a+e+c)}function ef(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new nf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nf extends tf{data(){return super.data()}}function rf(e,t){return"string"==typeof t?Yd(e,t):t instanceof Nd?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ts(Is.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class of{}class af extends of{}function cf(e,t,...n){let r=[];t instanceof of&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof hf)).length,n=e.filter((e=>e instanceof uf)).length;if(t>1||t>0&&n>0)throw new Ts(Is.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class uf extends af{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new uf(e,t,n)}_apply(e){const t=this._parse(e);return pf(e._query,t),new wd(e.firestore,e.converter,Ua(e._query,t))}_parse(e){const t=Fd(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Ts(Is.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ff(o,s);const t=[];for(const n of o)t.push(df(r,e,n));a={arrayValue:{values:t}}}else a=df(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ff(o,s),a=Hd(n,t,o,"in"===s||"not-in"===s);return ca.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lf(e,t,n){const r=t,i=rf("where",e);return uf._create(i,r,n)}class hf extends of{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hf(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ua.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)pf(n,e),n=Ua(n,e)}(e._query,t),new wd(e.firestore,e.converter,Ua(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function df(e,t,n){if("string"==typeof(n=X(n))){if(""===n)throw new Ts(Is.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!La(t)&&-1!==n.indexOf("/"))throw new Ts(Is.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(js.fromString(n));if(!zs.isDocumentKey(r))throw new Ts(Is.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ho(e,new zs(r))}if(n instanceof bd)return Ho(e,n._key);throw new Ts(Is.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pd(n)}.`)}function ff(e,t){if(!Array.isArray(e)||0===e.length)throw new Ts(Is.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function pf(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ts(Is.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ts(Is.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class gf{convertValue(e,t="none"){switch(Fo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ro(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw bs()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return vo(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Od(Ro(e.latitude),Ro(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Lo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const t=No(e);return new Fs(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=js.fromString(e);_s(Uu(n));const r=new Mo(n.get(1),n.get(3)),i=new zs(n.popFirst(5));return r.isEqual(t)||ys(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vf extends tf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(rf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class wf extends vf{data(e={}){return super.data(e)}}class bf{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new yf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new wf(this._firestore,this._userDataWriter,n.key,n,new yf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ts(Is.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new wf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new yf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new wf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new yf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:_f(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function _f(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ef(e){e=gd(e,bd);const t=gd(e.firestore,Sd);return ad(Ad(t),e._key).then((n=>Rf(t,e,n)))}class If extends gf{constructor(e){super(),this.firestore=e}convertBytes(e){return new kd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bd(this.firestore,null,t)}}function Tf(e){e=gd(e,wd);const t=gd(e.firestore,Sd),n=Ad(t),r=new If(t);return sf(e._query),cd(n,e._query).then((n=>new bf(t,r,e,n)))}function Sf(e,t,n){e=gd(e,bd);const r=gd(e.firestore,Sd),i=mf(e.converter,t,n);return Nf(r,[Bd(Fd(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ec.none())])}function Af(e,t,n,...r){e=gd(e,bd);const i=gd(e.firestore,Sd),s=Fd(i);let o;return o="string"==typeof(t=X(t))||t instanceof Nd?zd(s,"updateDoc",e._key,t,n,r):$d(s,"updateDoc",e._key,t),Nf(i,[o.toMutation(e._key,Ec.exists(!0))])}function Cf(e){return Nf(gd(e.firestore,Sd),[new xc(e._key,Ec.none())])}function kf(e,t){const n=gd(e.firestore,Sd),r=Id(e),i=mf(e.converter,t);return Nf(n,[Bd(Fd(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ec.exists(!1))]).then((()=>r))}function Nf(e,t){return function(e,t){const n=new Ss;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=Qh(e);try{const e=await function(e,t){const n=Es(e),r=Fs.now(),i=t.reduce(((e,t)=>e.add(t.key)),rc());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Wa(),c=rc();return n.os.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=kc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Oc(e.key,t,ea(t.value.mapValue),Ec.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Xa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Da[e.currentUser.toKey()];r||(r=new bo(Ms)),r=r.insert(t,n),e.Da[e.currentUser.toKey()]=r}(r,e.batchId,n),await Hh(r,e.changes),await Yl(r.remoteStore)}catch(e){const t=dh(e,"Failed to persist write");n.reject(t)}}(await sd(e),t,n))),n.promise}(Ad(e),t)}function Rf(e,t,n){const r=n.docs.get(t._key),i=new If(e);return new vf(e,i,t._key,r,new yf(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(...e){return new qd("arrayUnion",e)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){fs="10.8.1",De(new Y("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Sd(new Ns(e.getProvider("auth-internal")),new Ls(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ts(Is.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Fe("@firebase/firestore","4.4.3",e),Fe("@firebase/firestore","4.4.3","esm2017")}();function Df(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Lf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pf=Lf,xf=new V("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Mf=new ce("@firebase/auth");function Uf(e,...t){Mf.logLevel<=ne.ERROR&&Mf.error(`Auth (10.8.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e,...t){throw jf(e,...t)}function Bf(e,...t){return jf(e,...t)}function Vf(e,t,n){const r=Object.assign(Object.assign({},Pf()),{[t]:n});return new V("auth","Firebase",r).create(t,{appName:e.name})}function jf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xf.create(e,...t)}function qf(e,t,...n){if(!e)throw jf(t,...n)}function $f(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Uf(t),new Error(t)}function zf(e,t){e||$f(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Kf(){return"http:"===Gf()||"https:"===Gf()}function Gf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Kf()||x()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qf{constructor(e,t){this.shortDelay=e,this.longDelay=t,zf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(P())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Wf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(e,t){zf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void $f("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void $f("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void $f("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Zf=new Qf(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tp(e,t,n,r,i={}){return np(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=H(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Xf.fetch()(ip(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function np(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yf),t);try{const t=new op(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ap(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ap(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ap(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ap(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Vf(e,a,o);Ff(e,a)}}catch(t){if(t instanceof B)throw t;Ff(e,"network-request-failed",{message:String(t)})}}async function rp(e,t,n,r,i={}){const s=await tp(e,t,n,r,i);return"mfaPendingCredential"in s&&Ff(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ip(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Jf(e.config,i):`${e.config.apiScheme}://${i}`}function sp(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class op{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Bf(this.auth,"network-request-failed"))),Zf.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ap(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bf(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(e){return void 0!==e&&void 0!==e.enterprise}class up{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sp(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(e,t){return tp(e,"GET","/v2/recaptchaConfig",ep(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(e){return 1e3*Number(e)}function fp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Uf("JWT malformed, contained fewer than 3 sections"),null;try{const e=S(n);return e?JSON.parse(e):(Uf("Failed to decode base64 JWT payload"),null)}catch(e){return Uf("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof B&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class gp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hp(this.lastLoginAt),this.creationTime=hp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await pp(e,async function(e,t){return tp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));qf(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Df(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qf(e.idToken,"internal-error"),qf(void 0!==e.idToken,"internal-error"),qf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=fp(e);return qf(t,"internal-error"),qf(void 0!==t.exp,"internal-error"),qf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return qf(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await np(e,{},(async()=>{const n=H({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=ip(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Xf.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new vp;return n&&(qf("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(qf("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(qf("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vp,this.toJSON())}_performRefresh(){return $f("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e,t){qf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class bp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await pp(this,this.stsTokenManager.getToken(this.auth,e));return qf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=X(e),r=await n.getIdToken(t),i=fp(r);qf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hp(dp(i.auth_time)),issuedAtTime:hp(dp(i.iat)),expirationTime:hp(dp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=X(e);await yp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(qf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){qf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await yp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pp(this,async function(e,t){return tp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;qf(v&&E,e,"internal-error");const I=vp.fromJSON(this.name,E);qf("string"==typeof v,e,"internal-error"),wp(l,e.name),wp(h,e.name),qf("boolean"==typeof w,e,"internal-error"),qf("boolean"==typeof b,e,"internal-error"),wp(d,e.name),wp(f,e.name),wp(p,e.name),wp(g,e.name),wp(m,e.name),wp(y,e.name);const T=new bp({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new vp;r.updateFromServerResponse(t);const i=new bp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await yp(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Map;function Ep(e){zf(e instanceof Function,"Expected a class definition");let t=_p.get(e);return t?(zf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_p.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ip.type="NONE";const Tp=Ip;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(e,t,n){return`firebase:${e}:${t}:${n}`}class Ap{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Sp(this.userKey,r.apiKey,i),this.fullPersistenceKey=Sp("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ap(Ep(Tp),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Ep(Tp);const s=Sp(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=bp._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ap(i,e,n)):new Ap(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Op(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Lp(t))return"Blackberry";if(Pp(t))return"Webos";if(Np(t))return"Safari";if((t.includes("chrome/")||Rp(t))&&!t.includes("edge/"))return"Chrome";if(Dp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function kp(e=P()){return/firefox\//i.test(e)}function Np(e=P()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rp(e=P()){return/crios\//i.test(e)}function Op(e=P()){return/iemobile/i.test(e)}function Dp(e=P()){return/android/i.test(e)}function Lp(e=P()){return/blackberry/i.test(e)}function Pp(e=P()){return/webos/i.test(e)}function xp(e=P()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Mp(){return M()&&10===document.documentMode}function Up(e=P()){return xp(e)||Dp(e)||Pp(e)||Lp(e)||/windows phone/i.test(e)||Op(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fp(e,t=[]){let n;switch(e){case"Browser":n=Cp(P());break;case"Worker":n=`${Cp(P())}-${e}`;break;default:n=e}return`${n}/JsCore/10.8.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $p(this),this.idTokenSubscription=new $p(this),this.beforeStateQueue=new Bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ep(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ap.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return qf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yp(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?X(e):null;return t&&qf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ep(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return tp(e,"GET","/v2/passwordPolicy",ep(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Vp(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new V("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return tp(e,"POST","/v2/accounts:revokeToken",ep(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ep(e)||this._popupRedirectResolver;qf(t,this,"argument-error"),this.redirectPersistenceManager=await Ap.create(this,[Ep(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(qf(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Mf.logLevel<=ne.WARN&&Mf.warn(`Auth (10.8.1): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function qp(e){return X(e)}class $p{constructor(e){this.auth=e,this.observer=null,this.addObserver=W((e=>this.observer=e))}get next(){return qf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hp(e){return zp.loadJS(e)}function Kp(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Gp{constructor(e){this.type="recaptcha-enterprise",this.auth=qp(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;cp(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{lp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new up(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&cp(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=zp.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Hp(t).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Wp(e,t,n,r=!1){const i=new Gp(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qp(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wp(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Wp(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}function Jp(e,t,n){const r=qp(e);qf(r._canInitEmulator,r,"emulator-config-failed"),qf(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Xp(t),{host:o,port:a}=function(e){const t=Xp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Yp(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Yp(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Xp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Yp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Zp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $f("not implemented")}_getIdTokenResponse(e){return $f("not implemented")}_linkToIdToken(e,t){return $f("not implemented")}_getReauthenticationResolver(e){return $f("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(e,t){return tp(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tg(e,t){return rp(e,"POST","/v1/accounts:signInWithPassword",ep(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ng extends Zp{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ng(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ng(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Qp(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",tg);case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return rp(e,"POST","/v1/accounts:signInWithEmailLink",ep(e,t))}(e,{email:this._email,oobCode:this._password});default:Ff(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Qp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eg);case"emailLink":return async function(e,t){return rp(e,"POST","/v1/accounts:signInWithEmailLink",ep(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ff(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(e,t){return rp(e,"POST","/v1/accounts:signInWithIdp",ep(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends Zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ig(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ff("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Df(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ig(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return rg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=H(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class og extends Zp{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new og({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new og({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return rp(e,"POST","/v1/accounts:signInWithPhoneNumber",ep(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await rp(e,"POST","/v1/accounts:signInWithPhoneNumber",ep(e,t));if(n.temporaryProof)throw ap(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return rp(e,"POST","/v1/accounts:signInWithPhoneNumber",ep(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),sg)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new og({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){var t,n,r,i,s,o;const a=K(G(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);qf(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=K(G(e)).link,n=t?K(G(t)).deep_link_id:null,r=K(G(e)).deep_link_id;return(r?K(G(r)).link:null)||r||n||t||e}(e);try{return new ag(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cg{constructor(){this.providerId=cg.PROVIDER_ID}static credential(e,t){return ng._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ag.parseLink(t);return qf(n,"argument-error"),ng._fromEmailAndCode(e,n.code,n.tenantId)}}cg.PROVIDER_ID="password",cg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",cg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hg extends lg{constructor(){super("facebook.com")}static credential(e){return ig._fromParams({providerId:hg.PROVIDER_ID,signInMethod:hg.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hg.credentialFromTaggedObject(e)}static credentialFromError(e){return hg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return hg.credential(e.oauthAccessToken)}catch(e){return null}}}hg.FACEBOOK_SIGN_IN_METHOD="facebook.com",hg.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dg extends lg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ig._fromParams({providerId:dg.PROVIDER_ID,signInMethod:dg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dg.credentialFromTaggedObject(e)}static credentialFromError(e){return dg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return dg.credential(t,n)}catch(e){return null}}}dg.GOOGLE_SIGN_IN_METHOD="google.com",dg.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fg extends lg{constructor(){super("github.com")}static credential(e){return ig._fromParams({providerId:fg.PROVIDER_ID,signInMethod:fg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fg.credentialFromTaggedObject(e)}static credentialFromError(e){return fg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fg.credential(e.oauthAccessToken)}catch(e){return null}}}fg.GITHUB_SIGN_IN_METHOD="github.com",fg.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pg extends lg{constructor(){super("twitter.com")}static credential(e,t){return ig._fromParams({providerId:pg.PROVIDER_ID,signInMethod:pg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pg.credentialFromTaggedObject(e)}static credentialFromError(e){return pg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return pg.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gg(e,t){return rp(e,"POST","/v1/accounts:signUp",ep(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pg.TWITTER_SIGN_IN_METHOD="twitter.com",pg.PROVIDER_ID="twitter.com";class mg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await bp._fromIdTokenResponse(e,n,r),s=yg(n);return new mg({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=yg(n);return new mg({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function yg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vg extends B{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,vg.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new vg(e,t,n,r)}}function wg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw vg._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(e,t,n=!1){const r=await pp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mg._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _g(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await pp(e,wg(r,i,t,e),n);qf(s.idToken,r,"internal-error");const o=fp(s.idToken);qf(o,r,"internal-error");const{sub:a}=o;return qf(e.uid===a,r,"user-mismatch"),mg._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ff(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(e,t,n=!1){const r="signIn",i=await wg(e,r,t),s=await mg._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ig(e,t){return Eg(qp(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tg(e){const t=qp(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Sg(e,t,n){const r=qp(e),i=Qp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gg),s=await i.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Tg(e),t})),o=await mg._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}function Ag(e,t,n){return Ig(X(e),cg.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Tg(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends Cg{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=P();return Np(e)||xp(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Mp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kg.type="LOCAL";const Ng=kg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Cg{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rg.type="SESSION";const Og=Rg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Dg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lg(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dg.receivers=[];class Pg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Lg("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mg(){return void 0!==xg().WorkerGlobalScope&&"function"==typeof xg().importScripts}class Ug{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Fg(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Bg(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ug(e).toPromise()}(),t(await Bg()))}))}))}async function Vg(e,t,n){const r=Fg(e,!0).put({fbase_key:t,value:n});return new Ug(r).toPromise()}function jg(e,t){const n=Fg(e,!0).delete(t);return new Ug(n).toPromise()}class qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Bg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dg._getInstance(Mg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Pg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bg();return await Vg(e,"__sak","1"),await jg(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Fg(e,!1).get(t),r=await new Ug(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>jg(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Fg(e,!1).getAll();return new Ug(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qg.type="LOCAL";const $g=qg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kp("rcb"),new Qf(3e4,6e4);async function zg(e,t,n){var r;const i=await n.verify();try{let s;if(qf("string"==typeof i,e,"argument-error"),qf("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){qf("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return tp(e,"POST","/v2/accounts/mfaEnrollment:start",ep(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{qf("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;qf(n,e,"missing-multi-factor-info");const o=await function(e,t){return tp(e,"POST","/v2/accounts/mfaSignIn:start",ep(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return tp(e,"POST","/v1/accounts:sendVerificationCode",ep(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hg{constructor(e){this.providerId=Hg.PROVIDER_ID,this.auth=qp(e)}verifyPhoneNumber(e,t){return zg(this.auth,e,X(t))}static credential(e,t){return og._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hg.credentialFromTaggedObject(t)}static credentialFromError(e){return Hg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?og._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kg(e,t){return t?Ep(t):(qf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hg.PROVIDER_ID="phone",Hg.PHONE_SIGN_IN_METHOD="phone";class Gg extends Zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wg(e){return Eg(e.auth,new Gg(e),e.bypassAuthState)}function Qg(e){const{auth:t,user:n}=e;return qf(n,t,"internal-error"),_g(n,new Gg(e),e.bypassAuthState)}async function Jg(e){const{auth:t,user:n}=e;return qf(n,t,"internal-error"),bg(n,new Gg(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wg;case"linkViaPopup":case"linkViaRedirect":return Jg;case"reauthViaPopup":case"reauthViaRedirect":return Qg;default:Ff(this.auth,"internal-error")}}resolve(e){zf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Qf(2e3,1e4);class Zg extends Xg{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Zg.currentPopupAction&&Zg.currentPopupAction.cancel(),Zg.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return qf(e,this.auth,"internal-error"),e}async onExecution(){zf(1===this.filter.length,"Popup operations only handle one event");const e=Lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Bf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Bf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zg.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Bf(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Yg.get())};e()}}Zg.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const em=new Map;class tm extends Xg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=em.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=im(t),r=rm(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}em.set(this.auth._key(),e)}return this.bypassAuthState||em.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function nm(e,t){em.set(e._key(),t)}function rm(e){return Ep(e._redirectPersistence)}function im(e){return Sp("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(e,t,n=!1){const r=qp(e),i=Kg(r,t),s=new tm(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class om{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cm(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!cm(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Bf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(am(e))}saveEventToCache(e){this.cachedEventUids.add(am(e)),this.lastProcessedEventTime=Date.now()}}function am(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function cm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const um=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lm=/^https?/;async function hm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return tp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dm(e))return}catch(e){}Ff(e,"unauthorized-domain")}function dm(e){const t=Hf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!lm.test(n))return!1;if(um.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Qf(3e4,6e4);function pm(){const e=xg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function gm(e){return new Promise(((t,n)=>{var r,i,s;function o(){pm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pm(),n(Bf(e,"network-request-failed"))},timeout:fm.get()})}if(null===(i=null===(r=xg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=xg().gapi)||void 0===s?void 0:s.load)){const t=Kp("iframefcb");return xg()[t]=()=>{gapi.load?o():n(Bf(e,"network-request-failed"))},Hp(`${zp.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw mm=null,e}))}let mm=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ym=new Qf(5e3,15e3),vm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bm(e){const t=e.config;qf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"10.8.1"},i=wm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${H(r).slice(1)}`}async function _m(e){const t=await function(e){return mm=mm||gm(e),mm}(e),n=xg().gapi;return qf(n,e,"internal-error"),t.open({where:document.body,url:bm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vm,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Bf(e,"network-request-failed"),s=xg().setTimeout((()=>{r(i)}),ym.get());function o(){xg().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tm(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Em),{width:r.toString(),height:i.toString(),top:s,left:o}),u=P().toLowerCase();n&&(a=Rp(u)?"_blank":n),kp(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=P()){var t;return xp(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Im(null);const h=window.open(t||"",a,l);qf(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Im(h)}const Sm=encodeURIComponent("fac");async function Am(e,t,n,r,i,s){qf(e.config.authDomain,e,"auth-domain-config-required"),qf(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"10.8.1",eventId:i};if(t instanceof ug){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",q(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof lg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),u=c?`#${Sm}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?Jf(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${H(a).slice(1)}${u}`}const Cm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Og,this._completeRedirectFn=sm,this._overrideRedirectResult=nm}async _openPopup(e,t,n,r){var i;zf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Tm(e,await Am(e,t,n,Hf(),r),Lg())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){xg().location.href=e}(await Am(e,t,n,Hf(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(zf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await _m(e),n=new om(e);return t.register("authEvent",(t=>{qf(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ff(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Up()||Np()||xp()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class km{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){qf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nm=O("authIdTokenMaxAge")||300;let Rm=null;var Om,Dm;Om={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Bf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},zp=Om,Dm="Browser",De(new Y("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;qf(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Dm,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(Dm)},c=new jp(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ep);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),De(new Y("auth-internal",(e=>{const t=qp(e.getProvider("auth").getImmediate());return new km(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Fe("@firebase/auth","1.6.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Dm)),Fe("@firebase/auth","1.6.1","esm2017");const Lm=Me({apiKey:"AIzaSyB1Bxhi7YZk0Nf6KbPpxPmB05--N_UgoAE",authDomain:"esa-project-b21dc.firebaseapp.com",projectId:"esa-project-b21dc",storageBucket:"esa-project-b21dc.appspot.com",messagingSenderId:"136195417238",appId:"1:136195417238:web:168bcc90996648c6a80eb7",measurementId:"G-8P3WRHX5JH"}),Pm=function(e=Ue()){const t=Le(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=Le(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if($(n.getOptions(),null!=t?t:{}))return e;Ff(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Cm,persistence:[$g,Ng,Og]}),r=O("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Nm)return;const r=null==t?void 0:t.token;Rm!==r&&(Rm=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){X(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){X(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=k("auth");return s&&Jp(n,`http://${s}`),n}(Lm),xm=function(e,t){const n="string"==typeof e?e:t||"(default)",r=Le("object"==typeof e?e:Ue(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=N("firestore");e&&vd(r,...e)}return r}(Lm),Mm={form:document.querySelector(".form"),input:document.getElementById("search-input"),button:document.querySelector(".search-button"),navItemMenu:document.querySelectorAll(".nav_item_menu"),mobileMenu:document.querySelector(".menu-container"),openBurgerBtn:document.getElementById("open_burger_btn"),closeBurgerBtn:document.getElementById("close_burger_btn"),libraryBtnMenu:document.getElementById("library_btn_menu"),gallery:document.querySelector(".gallery"),buttonLoadMore:document.querySelector(".load-more"),buttonDelete:document.querySelector(".delete-button"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal-data"),movieImage:document.querySelector(".image-wrap"),movieDescr:document.querySelector(".movie-descr"),buttonClose:document.querySelectorAll(".modal-close"),modalBackdrop:document.querySelectorAll(".modal-body"),body:document.querySelector("body"),content:document.getElementById("content"),thumb:document.querySelector(".thumb"),headerNavLinks:document.querySelectorAll(".nav_item"),headerNavButtons:document.querySelector(".nav_list_button"),buttonWatched:document.getElementById("watched"),buttonQueue:document.getElementById("queue"),butttonsLibrary:document.querySelector(".modal-nav"),buttonHeaderNav:document.querySelector(".nav_list_button"),logo:document.querySelector(".logo"),homeBtn:document.getElementById("home_btn"),libraryBtn:document.getElementById("library_btn"),signOut:document.getElementById("auth_btn"),user:document.querySelector(".user"),modalLogin:document.getElementById("login"),modalRegister:document.getElementById("register"),formsAuth:document.querySelectorAll(".form-auth"),registerLink:document.getElementById("register-link"),loginLink:document.getElementById("login-link"),loginButton:document.getElementById("login-btn"),registerButton:document.getElementById("register-btn"),txtEmail:document.getElementById("txtEmail"),txtPassword:document.getElementById("txtPassword"),regEmail:document.getElementById("regEmail"),regPassword:document.getElementById("regPassword"),regPassword_:document.getElementById("regPassword_"),modalDelete:document.getElementById("delete"),approveActionButton:document.getElementById("approve"),removeActionButton:document.getElementById("remove")};Mm.loginButton.addEventListener("click",(async function(){try{const e=Mm.txtEmail.value,t=Mm.txtPassword.value,n=await Ag(Pm,e,t);console.log(n.user),Mm.signOut.classList.remove("not-visible"),Fm()}catch(e){console.log(e.message)}})),Mm.registerButton.addEventListener("click",(async function(){try{const e=Mm.regEmail.value,t=Mm.regPassword.value,n=await Sg(Pm,e,t);console.log(n.user),Mm.signOut.classList.remove("not-visible"),Fm()}catch(e){console.log(e.message)}})),Mm.signOut.addEventListener("click",(async function(e){try{e.preventDefault(),window.location.assign("#/"),await(t=Pm,X(t).signOut()),Mm.signOut.classList.add("not-visible"),console.log("user is successfully logout")}catch(e){console.log(e.message)}var t}));const Um=Mm.formsAuth||[];function Fm(){for(let e=0;e<Um.length;e++){const t=Um[e];for(let e=0;e<t.elements.length;e++)"text"===t.elements[e].type&&(t.elements[e].value="")}}function Bm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Vm}=Object.prototype,{getPrototypeOf:jm}=Object,qm=($m=Object.create(null),e=>{const t=Vm.call(e);return $m[t]||($m[t]=t.slice(8,-1).toLowerCase())});var $m;const zm=e=>(e=e.toLowerCase(),t=>qm(t)===e),Hm=e=>t=>typeof t===e,{isArray:Km}=Array,Gm=Hm("undefined");const Wm=zm("ArrayBuffer");const Qm=Hm("string"),Jm=Hm("function"),Xm=Hm("number"),Ym=e=>null!==e&&"object"==typeof e,Zm=e=>{if("object"!==qm(e))return!1;const t=jm(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},ey=zm("Date"),ty=zm("File"),ny=zm("Blob"),ry=zm("FileList"),iy=zm("URLSearchParams");function sy(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),Km(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function oy(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const ay="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,cy=e=>!Gm(e)&&e!==ay;const uy=(ly="undefined"!=typeof Uint8Array&&jm(Uint8Array),e=>ly&&e instanceof ly);var ly;const hy=zm("HTMLFormElement"),dy=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fy=zm("RegExp"),py=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};sy(n,((n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)})),Object.defineProperties(e,r)},gy={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const my=zm("AsyncFunction");var yy={isArray:Km,isArrayBuffer:Wm,isBuffer:function(e){return null!==e&&!Gm(e)&&null!==e.constructor&&!Gm(e.constructor)&&Jm(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||Jm(e.append)&&("formdata"===(t=qm(e))||"object"===t&&Jm(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Wm(e.buffer),t},isString:Qm,isNumber:Xm,isBoolean:e=>!0===e||!1===e,isObject:Ym,isPlainObject:Zm,isUndefined:Gm,isDate:ey,isFile:ty,isBlob:ny,isRegExp:fy,isFunction:Jm,isStream:e=>Ym(e)&&Jm(e.pipe),isURLSearchParams:iy,isTypedArray:uy,isFileList:ry,forEach:sy,merge:function e(){const{caseless:t}=cy(this)&&this||{},n={},r=(r,i)=>{const s=t&&oy(n,i)||i;Zm(n[s])&&Zm(r)?n[s]=e(n[s],r):Zm(r)?n[s]=e({},r):Km(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&sy(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(sy(t,((t,r)=>{n&&Jm(t)?e[r]=Bm(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&jm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:qm,kindOfTest:zm,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Km(e))return e;let t=e.length;if(!Xm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:hy,hasOwnProperty:dy,hasOwnProp:dy,reduceDescriptors:py,freezeMethods:e=>{py(e,((t,n)=>{if(Jm(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Jm(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Km(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:oy,global:ay,isContextDefined:cy,ALPHABET:gy,generateString:(e=16,t=gy.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&Jm(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Ym(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=Km(e)?[]:{};return sy(e,((e,t)=>{const s=n(e,r+1);!Gm(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:my,isThenable:e=>e&&(Ym(e)||Jm(e))&&Jm(e.then)&&Jm(e.catch)};function vy(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}yy.inherits(vy,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:yy.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wy=vy.prototype,by={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{by[e]={value:e}})),Object.defineProperties(vy,by),Object.defineProperty(wy,"isAxiosError",{value:!0}),vy.from=(e,t,n,r,i,s)=>{const o=Object.create(wy);return yy.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),vy.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var _y,Ey,Iy,Ty=vy;Ey=function(e){var t,n,r=Ly(e),i=r[0],s=r[1],o=new Ny(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)t=ky[e.charCodeAt(n)]<<18|ky[e.charCodeAt(n+1)]<<12|ky[e.charCodeAt(n+2)]<<6|ky[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=ky[e.charCodeAt(n)]<<2|ky[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=ky[e.charCodeAt(n)]<<10|ky[e.charCodeAt(n+1)]<<4|ky[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},Iy=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(Py(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(Cy[t>>2]+Cy[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(Cy[t>>10]+Cy[t>>4&63]+Cy[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Sy,Ay,Cy=[],ky=[],Ny="undefined"!=typeof Uint8Array?Uint8Array:Array,Ry="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Oy=0,Dy=Ry.length;Oy<Dy;++Oy)Cy[Oy]=Ry[Oy],ky[Ry.charCodeAt(Oy)]=Oy;function Ly(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Py(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(Cy[(i=r)>>18&63]+Cy[i>>12&63]+Cy[i>>6&63]+Cy[63&i]);return s.join("")}ky["-".charCodeAt(0)]=62,ky["_".charCodeAt(0)]=63,Sy=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},Ay=function(e,t,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*g};const xy="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;_y=Uy;function My(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Uy.prototype),t}function Uy(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Vy(e)}return Fy(e,t,n)}function Fy(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Uy.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|zy(e,t);let r=My(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Iv(e,Uint8Array)){const t=new Uint8Array(e);return qy(t.buffer,t.byteOffset,t.byteLength)}return jy(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Iv(e,ArrayBuffer)||e&&Iv(e.buffer,ArrayBuffer))return qy(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Iv(e,SharedArrayBuffer)||e&&Iv(e.buffer,SharedArrayBuffer)))return qy(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return Uy.from(r,t,n);const i=function(e){if(Uy.isBuffer(e)){const t=0|$y(e.length),n=My(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Tv(e.length)?My(0):jy(e);if("Buffer"===e.type&&Array.isArray(e.data))return jy(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Uy.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function By(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Vy(e){return By(e),My(e<0?0:0|$y(e))}function jy(e){const t=e.length<0?0:0|$y(e.length),n=My(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function qy(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,Uy.prototype),r}function $y(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function zy(e,t){if(Uy.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Iv(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return bv(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return _v(e).length;default:if(i)return r?-1:bv(e).length;t=(""+t).toLowerCase(),i=!0}}function Hy(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return iv(this,t,n);case"utf8":case"utf-8":return tv(this,t,n);case"ascii":return nv(this,t,n);case"latin1":case"binary":return rv(this,t,n);case"base64":return ev(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sv(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function Ky(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Gy(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Tv(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=Uy.from(t,r)),Uy.isBuffer(t))return 0===t.length?-1:Wy(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Wy(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function Wy(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return-1}function Qy(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(Tv(r))return o;e[n+o]=r}return o}function Jy(e,t,n,r){return Ev(bv(t,e.length-n),e,n,r)}function Xy(e,t,n,r){return Ev(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function Yy(e,t,n,r){return Ev(_v(t),e,n,r)}function Zy(e,t,n,r){return Ev(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function ev(e,t,n){return 0===t&&n===e.length?Iy(e):Iy(e.slice(t,n))}function tv(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}Uy.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Uy.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Uy.prototype,"parent",{enumerable:!0,get:function(){if(Uy.isBuffer(this))return this.buffer}}),Object.defineProperty(Uy.prototype,"offset",{enumerable:!0,get:function(){if(Uy.isBuffer(this))return this.byteOffset}}),Uy.poolSize=8192,Uy.from=function(e,t,n){return Fy(e,t,n)},Object.setPrototypeOf(Uy.prototype,Uint8Array.prototype),Object.setPrototypeOf(Uy,Uint8Array),Uy.alloc=function(e,t,n){return function(e,t,n){return By(e),e<=0?My(e):void 0!==t?"string"==typeof n?My(e).fill(t,n):My(e).fill(t):My(e)}(e,t,n)},Uy.allocUnsafe=function(e){return Vy(e)},Uy.allocUnsafeSlow=function(e){return Vy(e)},Uy.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Uy.prototype},Uy.compare=function(e,t){if(Iv(e,Uint8Array)&&(e=Uy.from(e,e.offset,e.byteLength)),Iv(t,Uint8Array)&&(t=Uy.from(t,t.offset,t.byteLength)),!Uy.isBuffer(e)||!Uy.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},Uy.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Uy.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Uy.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=Uy.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(Iv(t,Uint8Array))i+t.length>r.length?(Uy.isBuffer(t)||(t=Uy.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!Uy.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},Uy.byteLength=zy,Uy.prototype._isBuffer=!0,Uy.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ky(this,t,t+1);return this},Uy.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ky(this,t,t+3),Ky(this,t+1,t+2);return this},Uy.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ky(this,t,t+7),Ky(this,t+1,t+6),Ky(this,t+2,t+5),Ky(this,t+3,t+4);return this},Uy.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?tv(this,0,e):Hy.apply(this,arguments)},Uy.prototype.toLocaleString=Uy.prototype.toString,Uy.prototype.equals=function(e){if(!Uy.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Uy.compare(this,e)},Uy.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},xy&&(Uy.prototype[xy]=Uy.prototype.inspect),Uy.prototype.compare=function(e,t,n,r,i){if(Iv(e,Uint8Array)&&(e=Uy.from(e,e.offset,e.byteLength)),!Uy.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==u[e]){s=c[e],o=u[e];break}return s<o?-1:o<s?1:0},Uy.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Uy.prototype.indexOf=function(e,t,n){return Gy(this,e,t,n,!0)},Uy.prototype.lastIndexOf=function(e,t,n){return Gy(this,e,t,n,!1)},Uy.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return Qy(this,e,t,n);case"utf8":case"utf-8":return Jy(this,e,t,n);case"ascii":case"latin1":case"binary":return Xy(this,e,t,n);case"base64":return Yy(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zy(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Uy.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function nv(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function rv(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function iv(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=Sv[e[r]];return i}function sv(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function ov(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function av(e,t,n,r,i,s){if(!Uy.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function cv(e,t,n,r,i){mv(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function uv(e,t,n,r,i){mv(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function lv(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function hv(e,t,n,r,i){return t=+t,n>>>=0,i||lv(e,0,n,4),Ay(e,t,n,r,23,4),n+4}function dv(e,t,n,r,i){return t=+t,n>>>=0,i||lv(e,0,n,8),Ay(e,t,n,r,52,8),n+8}Uy.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,Uy.prototype),r},Uy.prototype.readUintLE=Uy.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ov(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},Uy.prototype.readUintBE=Uy.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ov(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},Uy.prototype.readUint8=Uy.prototype.readUInt8=function(e,t){return e>>>=0,t||ov(e,1,this.length),this[e]},Uy.prototype.readUint16LE=Uy.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ov(e,2,this.length),this[e]|this[e+1]<<8},Uy.prototype.readUint16BE=Uy.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ov(e,2,this.length),this[e]<<8|this[e+1]},Uy.prototype.readUint32LE=Uy.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ov(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Uy.prototype.readUint32BE=Uy.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ov(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Uy.prototype.readBigUInt64LE=Av((function(e){yv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||vv(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Uy.prototype.readBigUInt64BE=Av((function(e){yv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||vv(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Uy.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ov(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},Uy.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ov(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},Uy.prototype.readInt8=function(e,t){return e>>>=0,t||ov(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Uy.prototype.readInt16LE=function(e,t){e>>>=0,t||ov(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Uy.prototype.readInt16BE=function(e,t){e>>>=0,t||ov(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Uy.prototype.readInt32LE=function(e,t){return e>>>=0,t||ov(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Uy.prototype.readInt32BE=function(e,t){return e>>>=0,t||ov(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Uy.prototype.readBigInt64LE=Av((function(e){yv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||vv(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Uy.prototype.readBigInt64BE=Av((function(e){yv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||vv(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Uy.prototype.readFloatLE=function(e,t){return e>>>=0,t||ov(e,4,this.length),Sy(this,e,!0,23,4)},Uy.prototype.readFloatBE=function(e,t){return e>>>=0,t||ov(e,4,this.length),Sy(this,e,!1,23,4)},Uy.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ov(e,8,this.length),Sy(this,e,!0,52,8)},Uy.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ov(e,8,this.length),Sy(this,e,!1,52,8)},Uy.prototype.writeUintLE=Uy.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){av(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},Uy.prototype.writeUintBE=Uy.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){av(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},Uy.prototype.writeUint8=Uy.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,1,255,0),this[t]=255&e,t+1},Uy.prototype.writeUint16LE=Uy.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Uy.prototype.writeUint16BE=Uy.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Uy.prototype.writeUint32LE=Uy.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Uy.prototype.writeUint32BE=Uy.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Uy.prototype.writeBigUInt64LE=Av((function(e,t=0){return cv(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Uy.prototype.writeBigUInt64BE=Av((function(e,t=0){return uv(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Uy.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);av(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Uy.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);av(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Uy.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Uy.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Uy.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Uy.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Uy.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||av(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Uy.prototype.writeBigInt64LE=Av((function(e,t=0){return cv(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Uy.prototype.writeBigInt64BE=Av((function(e,t=0){return uv(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Uy.prototype.writeFloatLE=function(e,t,n){return hv(this,e,t,!0,n)},Uy.prototype.writeFloatBE=function(e,t,n){return hv(this,e,t,!1,n)},Uy.prototype.writeDoubleLE=function(e,t,n){return dv(this,e,t,!0,n)},Uy.prototype.writeDoubleBE=function(e,t,n){return dv(this,e,t,!1,n)},Uy.prototype.copy=function(e,t,n,r){if(!Uy.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},Uy.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Uy.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=Uy.isBuffer(e)?e:Uy.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const fv={};function pv(e,t,n){fv[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function gv(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function mv(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new fv.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){yv(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||vv(t,e.length-(n+1))}(r,i,s)}function yv(e,t){if("number"!=typeof e)throw new fv.ERR_INVALID_ARG_TYPE(t,"number",e)}function vv(e,t,n){if(Math.floor(e)!==e)throw yv(e,n),new fv.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new fv.ERR_BUFFER_OUT_OF_BOUNDS;throw new fv.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}pv("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),pv("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),pv("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=gv(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=gv(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const wv=/[^+/0-9A-Za-z-_]/g;function bv(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function _v(e){return Ey(function(e){if((e=(e=e.split("=")[0]).trim().replace(wv,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Ev(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function Iv(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Tv(e){return e!=e}const Sv=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function Av(e){return"undefined"==typeof BigInt?Cv:e}function Cv(){throw new Error("BigInt not supported")}var kv=_y;function Nv(e){return yy.isPlainObject(e)||yy.isArray(e)}function Rv(e){return yy.endsWith(e,"[]")?e.slice(0,-2):e}function Ov(e,t,n){return e?e.concat(t).map((function(e,t){return e=Rv(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Dv=yy.toFlatObject(yy,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Lv=function(e,t,n){if(!yy.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=yy.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!yy.isUndefined(t[e])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&yy.isSpecCompliantForm(t);if(!yy.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(yy.isDate(e))return e.toISOString();if(!a&&yy.isBlob(e))throw new Ty("Blob is not supported. Use a Buffer instead.");return yy.isArrayBuffer(e)||yy.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):kv.from(e):e}function u(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(yy.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(yy.isArray(e)&&function(e){return yy.isArray(e)&&!e.some(Nv)}(e)||(yy.isFileList(e)||yy.endsWith(n,"[]"))&&(a=yy.toArray(e)))return n=Rv(n),a.forEach((function(e,r){!yy.isUndefined(e)&&null!==e&&t.append(!0===o?Ov([n],r,s):null===o?n:n+"[]",c(e))})),!1;return!!Nv(e)||(t.append(Ov(i,n,s),c(e)),!1)}const l=[],h=Object.assign(Dv,{defaultVisitor:u,convertValue:c,isVisitable:Nv});if(!yy.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!yy.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),yy.forEach(n,(function(n,s){!0===(!(yy.isUndefined(n)||null===n)&&i.call(t,n,yy.isString(s)?s.trim():s,r,h))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function Pv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function xv(e,t){this._pairs=[],e&&Lv(e,this,t)}const Mv=xv.prototype;Mv.append=function(e,t){this._pairs.push([e,t])},Mv.toString=function(e){const t=e?function(t){return e.call(this,t,Pv)}:Pv;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Uv=xv;function Fv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bv(e,t,n){if(!t)return e;const r=n&&n.encode||Fv,i=n&&n.serialize;let s;if(s=i?i(t,n):yy.isURLSearchParams(t)?t.toString():new Uv(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Vv=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){yy.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},jv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qv={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Uv,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},$v={};e($v,"hasBrowserEnv",(function(){return zv})),e($v,"hasStandardBrowserEnv",(function(){return Hv})),e($v,"hasStandardBrowserWebWorkerEnv",(function(){return Gv}));const zv="undefined"!=typeof window&&"undefined"!=typeof document,Hv=(Kv="undefined"!=typeof navigator&&navigator.product,zv&&["ReactNative","NativeScript","NS"].indexOf(Kv)<0);var Kv;const Gv="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var Wv={...$v,...qv};function Qv(e,t){return Lv(e,new Wv.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Wv.isNode&&yy.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var Jv=function(e){function t(e,n,r,i){let s=e[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&yy.isArray(r)?r.length:s,a)return yy.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&yy.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&yy.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(yy.isFormData(e)&&yy.isFunction(e.entries)){const n={};return yy.forEachEntry(e,((e,r)=>{t(function(e){return yy.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Xv={transitional:jv,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=yy.isObject(e);i&&yy.isHTMLForm(e)&&(e=new FormData(e));if(yy.isFormData(e))return r?JSON.stringify(Jv(e)):e;if(yy.isArrayBuffer(e)||yy.isBuffer(e)||yy.isStream(e)||yy.isFile(e)||yy.isBlob(e))return e;if(yy.isArrayBufferView(e))return e.buffer;if(yy.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Qv(e,this.formSerializer).toString();if((s=yy.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Lv(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(yy.isString(e))try{return(t||JSON.parse)(e),yy.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Xv.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&yy.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Ty.from(e,Ty.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wv.classes.FormData,Blob:Wv.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};yy.forEach(["delete","get","head","post","put","patch"],(e=>{Xv.headers[e]={}}));var Yv=Xv;const Zv=yy.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var ew=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Zv[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const tw=Symbol("internals");function nw(e){return e&&String(e).trim().toLowerCase()}function rw(e){return!1===e||null==e?e:yy.isArray(e)?e.map(rw):String(e)}function iw(e,t,n,r,i){return yy.isFunction(r)?r.call(this,t,n):(i&&(t=n),yy.isString(t)?yy.isString(r)?-1!==t.indexOf(r):yy.isRegExp(r)?r.test(t):void 0:void 0)}class sw{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=nw(t);if(!i)throw new Error("header name must be a non-empty string");const s=yy.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=rw(e))}const s=(e,t)=>yy.forEach(e,((e,n)=>i(e,n,t)));return yy.isPlainObject(e)||e instanceof this.constructor?s(e,t):yy.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(ew(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=nw(e)){const n=yy.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(yy.isFunction(t))return t.call(this,e,n);if(yy.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=nw(e)){const n=yy.findKey(this,e);return!(!n||void 0===this[n]||t&&!iw(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=nw(e)){const i=yy.findKey(n,e);!i||t&&!iw(0,n[i],i,t)||(delete n[i],r=!0)}}return yy.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!iw(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return yy.forEach(this,((r,i)=>{const s=yy.findKey(n,i);if(s)return t[s]=rw(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=rw(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return yy.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&yy.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[tw]=this[tw]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=nw(e);t[r]||(!function(e,t){const n=yy.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return yy.isArray(e)?e.forEach(r):r(e),this}}sw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),yy.reduceDescriptors(sw.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),yy.freezeMethods(sw);var ow=sw;function aw(e,t){const n=this||Yv,r=t||n,i=ow.from(r.headers);let s=r.data;return yy.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function cw(e){return!(!e||!e.__CANCEL__)}function uw(e,t,n){Ty.call(this,null==e?"canceled":e,Ty.ERR_CANCELED,t,n),this.name="CanceledError"}yy.inherits(uw,Ty,{__CANCEL__:!0});var lw=uw;function hw(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Ty("Request failed with status code "+n.status,[Ty.ERR_BAD_REQUEST,Ty.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var dw=Wv.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];yy.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),yy.isString(r)&&o.push("path="+r),yy.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function fw(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function pw(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?fw(e,t):t}var gw=Wv.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=yy.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function mw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var yw=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function vw(e,t){let n=0;const r=yw(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const ww={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=ow.from(e.headers).normalize();let s,o,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(yy.isFormData(r))if(Wv.hasStandardBrowserEnv||Wv.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if(!1!==(o=i.getContentType())){const[e,...t]=o?o.split(";").map((e=>e.trim())).filter(Boolean):[];i.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const h=pw(e.baseURL,e.url);function d(){if(!l)return;const r=ow.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());hw((function(e){t(e),u()}),(function(e){n(e),u()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Bv(h,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new Ty("Request aborted",Ty.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new Ty("Network Error",Ty.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||jv;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Ty(t,r.clarifyTimeoutError?Ty.ETIMEDOUT:Ty.ECONNABORTED,e,l)),l=null},Wv.hasStandardBrowserEnv&&(c&&yy.isFunction(c)&&(c=c(e)),c||!1!==c&&gw(h))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&dw.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&yy.forEach(i.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),yy.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",vw(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",vw(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new lw(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=mw(h);f&&-1===Wv.protocols.indexOf(f)?n(new Ty("Unsupported protocol "+f+":",Ty.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};yy.forEach(ww,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const bw=e=>`- ${e}`,_w=e=>yy.isFunction(e)||null===e||!1===e;var Ew={getAdapter:e=>{e=yy.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!_w(n)&&(r=ww[(t=String(n)).toLowerCase()],void 0===r))throw new Ty(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+s]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(bw).join("\n"):" "+bw(e[0]):"as no adapter specified";throw new Ty("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:ww};function Iw(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new lw(null,e)}function Tw(e){Iw(e),e.headers=ow.from(e.headers),e.data=aw.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ew.getAdapter(e.adapter||Yv.adapter)(e).then((function(t){return Iw(e),t.data=aw.call(e,e.transformResponse,t),t.headers=ow.from(t.headers),t}),(function(t){return cw(t)||(Iw(e),t&&t.response&&(t.response.data=aw.call(e,e.transformResponse,t.response),t.response.headers=ow.from(t.response.headers))),Promise.reject(t)}))}const Sw=e=>e instanceof ow?e.toJSON():e;function Aw(e,t){t=t||{};const n={};function r(e,t,n){return yy.isPlainObject(e)&&yy.isPlainObject(t)?yy.merge.call({caseless:n},e,t):yy.isPlainObject(t)?yy.merge({},t):yy.isArray(t)?t.slice():t}function i(e,t,n){return yy.isUndefined(t)?yy.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!yy.isUndefined(t))return r(void 0,t)}function o(e,t){return yy.isUndefined(t)?yy.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(Sw(e),Sw(t),!0)};return yy.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);yy.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Cw={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Cw[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const kw={};Cw.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new Ty(r(i," has been removed"+(t?" in "+t:"")),Ty.ERR_DEPRECATED);return t&&!kw[i]&&(kw[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Nw={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Ty("options must be an object",Ty.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new Ty("option "+s+" must be "+n,Ty.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Ty("Unknown option "+s,Ty.ERR_BAD_OPTION)}},validators:Cw};const Rw=Nw.validators;class Ow{constructor(e){this.defaults=e,this.interceptors={request:new Vv,response:new Vv}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Aw(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&Nw.assertOptions(n,{silentJSONParsing:Rw.transitional(Rw.boolean),forcedJSONParsing:Rw.transitional(Rw.boolean),clarifyTimeoutError:Rw.transitional(Rw.boolean)},!1),null!=r&&(yy.isFunction(r)?t.paramsSerializer={serialize:r}:Nw.assertOptions(r,{encode:Rw.function,serialize:Rw.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=i&&yy.merge(i.common,i[t.method]);i&&yy.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=ow.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[Tw.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);h<l;)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;for(h=0;h<l;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Tw.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(e){return Bv(pw((e=Aw(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}yy.forEach(["delete","get","head","options"],(function(e){Ow.prototype[e]=function(t,n){return this.request(Aw(n||{},{method:e,url:t,data:(n||{}).data}))}})),yy.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Aw(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ow.prototype[e]=t(),Ow.prototype[e+"Form"]=t(!0)}));var Dw=Ow;class Lw{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new lw(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Lw((function(t){e=t})),cancel:e}}}var Pw=Lw;const xw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xw).forEach((([e,t])=>{xw[t]=e}));var Mw=xw;const Uw=function e(t){const n=new Dw(t),r=Bm(Dw.prototype.request,n);return yy.extend(r,Dw.prototype,n,{allOwnKeys:!0}),yy.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Aw(t,n))},r}(Yv);Uw.Axios=Dw,Uw.CanceledError=lw,Uw.CancelToken=Pw,Uw.isCancel=cw,Uw.VERSION="1.6.7",Uw.toFormData=Lv,Uw.AxiosError=Ty,Uw.Cancel=Uw.CanceledError,Uw.all=function(e){return Promise.all(e)},Uw.spread=function(e){return function(t){return e.apply(null,t)}},Uw.isAxiosError=function(e){return yy.isObject(e)&&!0===e.isAxiosError},Uw.mergeConfig=Aw,Uw.AxiosHeaders=ow,Uw.formToJSON=e=>Jv(yy.isHTMLForm(e)?new FormData(e):e),Uw.getAdapter=Ew.getAdapter,Uw.HttpStatusCode=Mw,Uw.default=Uw;var Fw=Uw;const{Axios:Bw,AxiosError:Vw,CanceledError:jw,isCancel:qw,CancelToken:$w,VERSION:zw,all:Hw,Cancel:Kw,isAxiosError:Gw,spread:Ww,toFormData:Qw,AxiosHeaders:Jw,HttpStatusCode:Xw,formToJSON:Yw,getAdapter:Zw,mergeConfig:eb}=Fw,tb=Fw.create({baseURL:"https://api.themoviedb.org/3/"});class nb{constructor(){this.page=1,this.word="",this._movieId=null}async fetchMovies(){return(await tb.get(`/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1&page=${this.page}`)).data.results}async fetchMovieDetailsById(e){return(await tb.get(`movie/${e}?api_key=6de1479941bef67a0c224787b78603f1`)).data}async fetchMoviesByQuery(e,t){return(await tb.get(`/search/movie?api_key=6de1479941bef67a0c224787b78603f1&query=${e}&page=${t}`)).data.results}async fetchMoviesByPage(e){return(await tb.get(`/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1&page=${e}`)).data.results}async fetchGenresListByIds(){return(await tb.get("/genre/movie/list?api_key=6de1479941bef67a0c224787b78603f1&language=en")).data.genres}incrementPage(){this.page+=1}resetPage(){this.page=1}resetQuery(){this.word=""}get query(){return this.word}set query(e){return this.word=e}get movieId(){return this._movieId}set movieId(e){return this._movieId=e}}new nb;const rb=Ed(xm,"users"),ib=async e=>{const t=cf(rb,lf("userId","==",e.uid));try{if((await Tf(t)).size>0)console.log("Пользователь с таким email уже существует");else{const t=await kf(rb,{userId:e.uid,email:e.email,watched:[],queue:[]});console.log("Document written with ID: ",t.id)}}catch(e){throw console.error("Error adding document: ",e),e}},sb=async(e,t)=>{const n=cf(rb,lf("userId","==",e.uid));await Tf(n)},ob=async(e,t,n)=>{try{const r=cf(rb,lf("userId","==",e.uid)),i=await Tf(r),s=i.docs[0].id,o=Id(xm,"users",s),a=n;if(t&&a){i.docs[0].data()[t].some((e=>e.id===n.id))?alert("Film already in the library"):(await Af(o,{[t]:Of(a)}),alert("Film added to library! Document updated"))}}catch(e){console.log(e)}},ab=async(e,t,n)=>{try{const r=cf(rb,lf("userId","==",e.uid)),i=await Tf(r);if(i.empty)return void console.log("User not found.");const s=i.docs[0].id,o=Id(xm,"users",s),a=(await Ef(o)).data(),c={...a,[t]:a[t].filter((e=>e.id!=n))};await Sf(o,c),console.log(c[t]);const u=Id(Ed(o,t),n);await Cf(u);const l=await Cf(u);console.log("Document deleted:",l);const h=await Ef(u);console.log(h),h.exists()?console.error("Failed to delete document:",h.data()):console.log("Document successfully deleted."),alert("Film removed from library! Document updated")}catch(e){console.log(e)}};var cb;cb=new URL(s("kyEFX").resolve("2lKlt"),import.meta.url).toString();var ub;ub=new URL(s("kyEFX").resolve("d7MtM"),import.meta.url).toString();var lb;function hb(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e.message)}}function db(e){try{const t=localStorage.getItem(e);if(t)return JSON.parse(t)}catch(e){console.log(e.message)}}function fb(e){const t=db("genres")||[];if(t){return t.filter((t=>e.includes(t.id))).map((e=>e.name))}}lb=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const pb=new nb;async function gb(){try{await pb.fetchMovies().then((e=>{kb(e)}))}catch(e){console.log(e.message)}}async function mb(e,t){try{await pb.fetchMoviesByQuery(e,t).then((e=>{kb(e)}))}catch(e){console.log(e.message)}}async function yb(e){try{await pb.fetchMovieDetailsById(e).then((e=>{Nb(e),Rb(e)}))}catch(e){console.log(e.message)}}async function vb(e){try{await pb.fetchMoviesByPage(e).then((e=>{kb(e)}))}catch(e){console.log(e.message)}}async function wb(){try{hb("genres",await pb.fetchGenresListByIds())}catch(e){console.log(e.message)}}const bb=new nb;let _b=null,Eb="";Mm.gallery.addEventListener("click",(async function(e){e.preventDefault();const t=Pm.currentUser;if("IMG"!==e.target.nodeName)return;if(t){if(t)return _b=e.target.getAttribute("id"),bb.movieId=_b,await yb(_b),Mm.modal.classList.add("open"),Mm.body.classList.add("lock"),_b}else Mm.modalLogin.classList.add("open");return _b})),Mm.libraryBtn.addEventListener("click",Ab),Mm.registerLink.addEventListener("click",Ab),Mm.loginLink.addEventListener("click",Ab);const Ib=Mm.buttonClose;if(Ib)for(let e=0;e<Ib.length;e++)Ib[e].addEventListener("click",Sb);const Tb=Mm.modalBackdrop;if(Tb)for(let e=0;e<Tb.length;e++)Tb[e].addEventListener("click",Sb);function Sb(e){e.preventDefault(),Mm.modal.classList.remove("open"),("A"===e.target.nodeName||"BUTTON"===e.target.nodeName)&&e.target.closest(".modal").classList.remove("open"),Mm.body.classList.remove("lock"),Mm.movieImage.innerHTML="",Mm.movieDescr.innerHTML=""}function Ab(e){e.preventDefault(),Eb=e.target.getAttribute("id");const t=Pm.currentUser;if("library_btn"===Eb&&t)return window.location.assign("#/library"),void Mm.modalRegister.classList.remove("open");"library_btn"!==Eb||t?(Mm.modalRegister.classList.toggle("open"),Mm.modalLogin.classList.toggle("open")):Mm.modalLogin.classList.add("open")}async function Cb(e){e.preventDefault(),window.location.assign("#/library"),Mm.modalDelete.classList.add("open");const t=e.target.closest(".wrapper");_b=t.querySelector(".movie_img").id;Pm.currentUser;return _b}function kb(e,t){const r=e.map((({poster_path:e,original_title:t,id:r,genre_ids:i,genres:s,release_date:o,vote_average:a})=>function({poster_path:e,original_title:t,id:r,genre_ids:i,genres:s,release_date:o,vote_average:a}){const c=new Date(o).getFullYear();return e?`<li class="gallery-card">\n         <a\n           class="gallery_link"\n          href="https://image.tmdb.org/t/p/w500${e}"\n         >\n         <div class="wrapper">\n             <img\n           id="${r}"\n             class="movie_img"\n            src="https://image.tmdb.org/t/p/w500${e}"\n             alt="${t}"\n           loading="lazy"\n           />\n      <button  type="submit" class="delete-button not-visible">\n          <svg class="icon">   \n              <use href="${n(lb)}#icon-bin"></use>\n          </svg>\n      </button>\n         </div>\n             <p class="movie-title card">${t}</p>\n         <div class="movie_describtion">\n          <ul class="movie_genresList">${Pb(s,i)}</ul>\n           <p>${c}</p>\n           <p class="movie_average">${a.toFixed(1)}</p>\n         </div>\n         </a>      \n  </li>`:`<li class="gallery-card">\n         <a\n           class="gallery_link"\n          href="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"\n         >\n         <div class="wrapper">\n             <img\n           id="${r}"\n             class="movie_img"\n            src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"\n             alt="${t}"\n           loading="lazy"\n           />\n      <button  type="submit" class="delete-button not-visible">\n          <svg class="icon">   \n              <use href="${n(lb)}#icon-bin"></use>\n          </svg>\n      </button>\n         </div>\n             <p class="movie-title card">${t}</p>\n         <div class="movie_describtion">\n          <ul class="movie_genresList">${Pb(s,i)}</ul>\n           <p>${c}</p>\n           <p class="movie_average">${a.toFixed(1)}</p>\n         </div>\n         </a>      \n  </li>`}({poster_path:e,original_title:t,id:r,genre_ids:i,genres:s,release_date:o,vote_average:a})));Mm.gallery.insertAdjacentHTML("beforeend",r.join(""));const i=Mm.buttonDelete=Mm.gallery.querySelectorAll(".delete-button");if(i)for(let e=0;e<i.length;e++)i[e].addEventListener("click",Cb);t&&i.forEach((e=>{e.classList.remove("not-visible")}))}function Nb({poster_path:e,original_title:t}){const r=e?`<img\n          src=${`https://image.tmdb.org/t/p/w500${e}`}\n          alt=${t}\n          class="modal-image"\n          loading="lazy"\n        />`:`<img\n          src='${n(cb)}'\n          alt="default image"\n          class="modal-image"\n          loading="lazy"\n        />`;Mm.movieImage.insertAdjacentHTML("beforeend",r)}function Rb({original_title:e,vote_average:t,vote_count:n,popularity:r,genres:i,overview:s}){const o=i.map((({name:e})=>e)).join(", "),a=`\n        <div>\n          <h1 class="movie-title">${e}</h1>\n          <table class="movie-table">\n            <tr class="movie_info_item">\n              <td class="list-category">Vote/Votes</td>\n              <td class="list-data"><span class="average">${t.toFixed(1)}</span> / <span class="count">${n}</span></td>\n            </tr>\n            <tr class="movie_info_item">\n              <td class="list-category">Popularity</td>\n              <td class="list-data">${r.toFixed(1)}</td>\n            </tr>\n            <tr class="movie_info_item">\n              <td class="list-category">Original Title</td>\n              <td class="list-data" style="text-transform: uppercase">${e}</td>\n            </tr>\n            <tr class="movie_info_item">\n              <td class="list-category">Genre</td>\n              <td class="list-data genres">${o}</td>\n            </tr>\n          </table>\n          <p class="movie-title about">About</p>\n          <p class="movie-about">\n          ${s}\n          </p>\n        </div>\n\n  `;Mm.movieDescr.insertAdjacentHTML("beforeend",a)}function Ob(){Mm.gallery.innerHTML="",Mm.thumb.innerHTML=""}function Db(e){Mm.input.value="",Mm.homeBtn.classList.add("nav_item--current"),Mm.libraryBtn.classList.remove("nav_item--current"),Mm.headerNavButtons.classList.add("not-visible"),Mm.form.classList.remove("not-visible"),e||(Mm.user.innerHTML="",Mm.signOut.classList.add("not-visible"))}function Lb(){const e=`\n   <img \n   src="${n(ub)}"\n   alt="pageNotFound"\n   class="page-not-found"\n   loading="lazy"\n   \n />\n   `;Mm.thumb.insertAdjacentHTML("beforeend",e)}const Pb=(e,t)=>{if(e){const t=e.splice(0,2).map((({name:e})=>e)).join(", ");return e.length>=3?`<li class="movie_gnr">${t}, Other</li>`:`<li class="movie_gnr">${t}</li>`}if(t){const e=fb(t).splice(0,2).join(", ");return t.length>=3?`<li class="movie_gnr">${e}, Other</li>`:`<li class="movie_gnr">${e}</li>`}};function xb(){Mm.buttonLoadMore.classList.add("not-visible")}async function Mb(e){Ob(),Db(e),await wb(),await gb(),Mm.buttonLoadMore.classList.remove("not-visible")}async function Ub(e,t){Ob(),Mm.homeBtn.classList.remove("nav_item--current"),Mm.libraryBtn.classList.add("nav_item--current"),Mm.buttonWatched.classList.add("active_btn"),Mm.buttonQueue.classList.remove("active_btn"),Mm.headerNavButtons.classList.remove("not-visible"),Mm.form.classList.add("not-visible"),await Hb(e,t),xb()}function Fb(){Ob(),Lb(),xb()}const Bb=new nb;let Vb="watched";Pm.currentUser;const jb=Ed(xm,"users");Mm.homeBtn.addEventListener("click",Mb),Mm.logo.addEventListener("click",Mb),Mm.buttonHeaderNav.addEventListener("click",(async function(e){Ob();const t=Pm.currentUser;Vb=e.target.getAttribute("id"),"watched"===Vb?(Mm.buttonWatched.classList.add("active_btn"),Mm.buttonQueue.classList.remove("active_btn"),Hb(Vb,t)):"queue"===Vb&&(Mm.buttonQueue.classList.add("active_btn"),Mm.buttonWatched.classList.remove("active_btn"),Hb(Vb,t))})),Mm.butttonsLibrary.addEventListener("click",(async function(e){e.preventDefault();const t=Pm.currentUser;if(console.log(_b),Vb=e.target.getAttribute("id"),"BUTTON"!==e.target.nodeName)return;await Bb.fetchMovieDetailsById(_b).then((e=>{ob(t,Vb,e)})).catch((e=>console.log(e.message)))}));var qb,$b,zb;qb=e=>{if(null!==e){ib(e),async function(e,t){const n=window.location.hash.substring(1);console.log(n),"/"===n||""===n?await Mb(t):"/library"===n?await Ub(e,t):Fb()}(Vb,e),Mm.libraryBtn.addEventListener("click",(async t=>{e&&(Vb="watched",t.preventDefault(),await Ub(Vb,e))}));const t=Mm.navItemMenu;if(t)for(let n=0;n<t.length;n++)t[n].addEventListener("click",(t=>{e&&(Mm.mobileMenu.classList.remove("open"),NavBtnActive=t.target.getAttribute("id"),"home_btn"===NavBtnActive?Mb(e):(t.preventDefault(),Ub(Vb,e)))}));Mm.approveActionButton.addEventListener("click",(async t=>{t.preventDefault(),await ab(e,Vb,_b),Ob(),await Hb(Vb,e)}))}else Mb(),console.log("no user")},X(Pm).onAuthStateChanged(qb,$b,zb);async function Hb(e,t){(async(e,t)=>{try{const n=cf(jb,lf("userId","==",t.uid)),r=await Tf(n);return r.size>0?r.docs[0].data()[e]:(console.log("No matching documents."),[])}catch(e){throw console.error("Error adding document: ",e),e}})(e,t).then((e=>{kb(e,t),sb(t)}))}const Kb=new nb;let Gb="",Wb=1;function Qb(e){e.preventDefault();const t=Pm.currentUser;t?t&&Mm.mobileMenu.classList.toggle("open"):Mm.modalLogin.classList.add("open")}Mm.form.addEventListener("submit",(async function(e){if(e.preventDefault(),Ob(),Kb.resetPage(),Kb.query=e.currentTarget.elements.searchQuery.value.trim(),""===Kb.query)return;Wb=Kb.page,Gb=Kb.query,await mb(Gb,Wb),console.log("BEFORE scroll",Kb)})),Mm.buttonLoadMore.addEventListener("click",(async function(e){e.preventDefault(),console.log("BEFORE FETCH",Kb),Kb.incrementPage(),Wb=Kb.page,""===Gb&&await vb(Wb);Gb=Kb.query,await mb(Gb,Wb),console.log("AFTER FETCH",Kb)})),Mm.openBurgerBtn.addEventListener("click",Qb),Mm.closeBurgerBtn.addEventListener("click",Qb);
//# sourceMappingURL=index.e17242c9.js.map
