(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
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
 *//**
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
 */const Wr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Cc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[h],n[l],n[d],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Cc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const v=u<<6&192|l;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Dc=function(e){const t=Wr(e);return bc.encodeByteArray(t,!0)},Qr=function(e){return Dc(e).replace(/\./g,"")};/**
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
 */class Ac{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function Nc(){return typeof indexedDB=="object"}function _c(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const kc="FirebaseError";class te extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=kc,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Rc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new te(i,a,s)}}function Rc(e,t){return e.replace(xc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const xc=/\{\$([^}]+)}/g;function ys(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Wi(r)&&Wi(o)){if(!ys(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Wi(e){return e!==null&&typeof e=="object"}/**
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
 */function ft(e){return e&&e._delegate?e._delegate:e}class Ee{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Lc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ac;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mc(t))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=At){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=At){return this.instances.has(t)}getOptions(t=At){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Oc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=At){return this.component?this.component.multipleInstances?t:At:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oc(e){return e===At?void 0:e}function Mc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Vc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Lc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const Pc={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Fc=_.INFO,Bc={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Uc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Bc[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xr{constructor(t){this.name=t,this._logLevel=Fc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}const $c=(e,t)=>t.some(n=>e instanceof n);let Qi,Yi;function jc(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qc(){return Yi||(Yi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jr=new WeakMap,vs=new WeakMap,Zr=new WeakMap,es=new WeakMap,Gs=new WeakMap;function Hc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(vt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Jr.set(n,e)}).catch(()=>{}),Gs.set(t,e),t}function Kc(e){if(vs.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});vs.set(e,t)}let ws={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return vs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Zr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gc(e){ws=e(ws)}function zc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ns(this),t,...n);return Zr.set(s,t.sort?t.sort():[t]),vt(s)}:qc().includes(e)?function(...t){return e.apply(ns(this),t),vt(Jr.get(this))}:function(...t){return vt(e.apply(ns(this),t))}}function Wc(e){return typeof e=="function"?zc(e):(e instanceof IDBTransaction&&Kc(e),$c(e,jc())?new Proxy(e,ws):e)}function vt(e){if(e instanceof IDBRequest)return Hc(e);if(es.has(e))return es.get(e);const t=Wc(e);return t!==e&&(es.set(e,t),Gs.set(t,e)),t}const ns=e=>Gs.get(e);function Qc(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vt(o.result),c.oldVersion,c.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Yc=["get","getKey","getAll","getAllKeys","count"],Xc=["put","add","delete","clear"],ss=new Map;function Xi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ss.get(t))return ss.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Xc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Yc.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ss.set(t,r),r}Gc(e=>({...e,get:(t,n,s)=>Xi(t,n)||e.get(t,n,s),has:(t,n)=>!!Xi(t,n)||e.has(t,n)}));/**
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
 */class Jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Es="@firebase/app",Ji="0.7.33";/**
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
 */const Lt=new Xr("@firebase/app"),tu="@firebase/app-compat",eu="@firebase/analytics-compat",nu="@firebase/analytics",su="@firebase/app-check-compat",iu="@firebase/app-check",ru="@firebase/auth",ou="@firebase/auth-compat",au="@firebase/database",cu="@firebase/database-compat",uu="@firebase/functions",hu="@firebase/functions-compat",lu="@firebase/installations",du="@firebase/installations-compat",fu="@firebase/messaging",pu="@firebase/messaging-compat",gu="@firebase/performance",mu="@firebase/performance-compat",yu="@firebase/remote-config",vu="@firebase/remote-config-compat",wu="@firebase/storage",Eu="@firebase/storage-compat",Tu="@firebase/firestore",Iu="@firebase/firestore-compat",Su="firebase",Cu="9.10.0";/**
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
 */const to="[DEFAULT]",bu={[Es]:"fire-core",[tu]:"fire-core-compat",[nu]:"fire-analytics",[eu]:"fire-analytics-compat",[iu]:"fire-app-check",[su]:"fire-app-check-compat",[ru]:"fire-auth",[ou]:"fire-auth-compat",[au]:"fire-rtdb",[cu]:"fire-rtdb-compat",[uu]:"fire-fn",[hu]:"fire-fn-compat",[lu]:"fire-iid",[du]:"fire-iid-compat",[fu]:"fire-fcm",[pu]:"fire-fcm-compat",[gu]:"fire-perf",[mu]:"fire-perf-compat",[yu]:"fire-rc",[vu]:"fire-rc-compat",[wu]:"fire-gcs",[Eu]:"fire-gcs-compat",[Tu]:"fire-fst",[Iu]:"fire-fst-compat","fire-js":"fire-js",[Su]:"fire-js-all"};/**
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
 */const un=new Map,Ts=new Map;function Du(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hn(e){const t=e.name;if(Ts.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;Ts.set(t,e);for(const n of un.values())Du(n,e);return!0}function Au(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Nu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Yr("app","Firebase",Nu);/**
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
 */class _u{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const ku=Cu;function Ru(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:to,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});const i=un.get(s);if(i){if(ys(e,i.options)&&ys(n,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const r=new Vc(s);for(const a of Ts.values())r.addComponent(a);const o=new _u(e,n,r);return un.set(s,o),o}function xu(e=to){const t=un.get(e);if(!t)throw Ot.create("no-app",{appName:e});return t}function fe(e,t,n){var s;let i=(s=bu[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}hn(new Ee(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Lu="firebase-heartbeat-database",Ou=1,Te="firebase-heartbeat-store";let is=null;function eo(){return is||(is=Qc(Lu,Ou,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Te)}}}).catch(e=>{throw Ot.create("idb-open",{originalErrorMessage:e.message})})),is}async function Mu(e){var t;try{return(await eo()).transaction(Te).objectStore(Te).get(no(e))}catch(n){if(n instanceof te)Lt.warn(n.message);else{const s=Ot.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Lt.warn(s.message)}}}async function Zi(e,t){var n;try{const i=(await eo()).transaction(Te,"readwrite");return await i.objectStore(Te).put(t,no(e)),i.done}catch(s){if(s instanceof te)Lt.warn(s.message);else{const i=Ot.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Lt.warn(i.message)}}}function no(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Vu=1024,Pu=30*24*60*60*1e3;class Fu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Pu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tr(),{heartbeatsToSend:n,unsentEntries:s}=Bu(this._heartbeatsCache.heartbeats),i=Qr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tr(){return new Date().toISOString().substring(0,10)}function Bu(e,t=Vu){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),er(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),er(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Uu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nc()?_c().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function er(e){return Qr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function $u(e){hn(new Ee("platform-logger",t=>new Jc(t),"PRIVATE")),hn(new Ee("heartbeat",t=>new Fu(t),"PRIVATE")),fe(Es,Ji,e),fe(Es,Ji,"esm2017"),fe("fire-js","")}$u("");var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,zs=zs||{},T=ju||self;function ln(){}function Dn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Me(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function qu(e){return Object.prototype.hasOwnProperty.call(e,rs)&&e[rs]||(e[rs]=++Hu)}var rs="closure_uid_"+(1e9*Math.random()>>>0),Hu=0;function Ku(e,t,n){return e.call.apply(e.bind,arguments)}function Gu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Ku:W=Gu,W.apply(null,arguments)}function Ye(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Ct(){this.s=this.s,this.o=this.o}var zu=0;Ct.prototype.s=!1;Ct.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zu!=0)&&qu(this)};Ct.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const so=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ws(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function nr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Dn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var Wu=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",ln,t),T.removeEventListener("test",ln,t)}catch{}return e}();function dn(e){return/^[\s\xa0]*$/.test(e)}var sr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function os(e,t){return e<t?-1:e>t?1:0}function An(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function at(e){return An().indexOf(e)!=-1}function Qs(e){return Qs[" "](e),e}Qs[" "]=ln;function Qu(e){var t=Ju;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Yu=at("Opera"),zt=at("Trident")||at("MSIE"),io=at("Edge"),Is=io||zt,ro=at("Gecko")&&!(An().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Xu=An().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function oo(){var e=T.document;return e?e.documentMode:void 0}var fn;t:{var as="",cs=function(){var e=An();if(ro)return/rv:([^\);]+)(\)|;)/.exec(e);if(io)return/Edge\/([\d\.]+)/.exec(e);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xu)return/WebKit\/(\S+)/.exec(e);if(Yu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(cs&&(as=cs?cs[1]:""),zt){var us=oo();if(us!=null&&us>parseFloat(as)){fn=String(us);break t}}fn=as}var Ju={};function Zu(){return Qu(function(){let e=0;const t=sr(String(fn)).split("."),n=sr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=os(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||os(i[2].length==0,r[2].length==0)||os(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Ss;if(T.document&&zt){var ir=oo();Ss=ir||parseInt(fn,10)||void 0}else Ss=void 0;var th=Ss;function Ie(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ro){t:{try{Qs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:eh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ie.X.h.call(this)}}G(Ie,Q);var eh={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),nh=0;function sh(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++nh,this.ba=this.ea=!1}function Nn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ys(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ao(e){const t={};for(const n in e)t[n]=e[n];return t}const rr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function co(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<rr.length;r++)n=rr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function _n(e){this.src=e,this.g={},this.h=0}_n.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=bs(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new sh(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Cs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=so(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Nn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Xs="closure_lm_"+(1e6*Math.random()|0),hs={};function uo(e,t,n,s,i){if(s&&s.once)return lo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)uo(e,t[r],n,s,i);return null}return n=ti(n),e&&e[Ve]?e.N(t,n,Me(s)?!!s.capture:!!s,i):ho(e,t,n,!1,s,i)}function ho(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Me(i)?!!i.capture:!!i,a=Zs(e);if(a||(e[Xs]=a=new _n(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=ih(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Wu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(po(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ih(){function e(n){return t.call(e.src,e.listener,n)}const t=rh;return e}function lo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)lo(e,t[r],n,s,i);return null}return n=ti(n),e&&e[Ve]?e.O(t,n,Me(s)?!!s.capture:!!s,i):ho(e,t,n,!0,s,i)}function fo(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)fo(e,t[r],n,s,i);else s=Me(s)?!!s.capture:!!s,n=ti(n),e&&e[Ve]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=bs(r,n,s,i),-1<n&&(Nn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bs(t,n,s,i)),(n=-1<e?t[e]:null)&&Js(n))}function Js(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ve])Cs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(po(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Zs(t))?(Cs(n,e),n.h==0&&(n.src=null,t[Xs]=null)):Nn(e)}}}function po(e){return e in hs?hs[e]:hs[e]="on"+e}function rh(e,t){if(e.ba)e=!0;else{t=new Ie(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Js(e),e=n.call(s,t)}return e}function Zs(e){return e=e[Xs],e instanceof _n?e:null}var ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(e){return typeof e=="function"?e:(e[ls]||(e[ls]=function(t){return e.handleEvent(t)}),e[ls])}function $(){Ct.call(this),this.i=new _n(this),this.P=this,this.I=null}G($,Ct);$.prototype[Ve]=!0;$.prototype.removeEventListener=function(e,t,n,s){fo(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var i=t;t=new Q(s,e),co(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Xe(o,s,!0,t)&&i}if(o=t.g=e,i=Xe(o,s,!0,t)&&i,i=Xe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Xe(o,s,!1,t)&&i}$.prototype.M=function(){if($.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Nn(n[s]);delete e.g[t],e.h--}}this.I=null};$.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};$.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Xe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Cs(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ei=T.JSON.stringify;function oh(){var e=yo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ah{constructor(){this.h=this.g=null}add(t,n){const s=go.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var go=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ch,e=>e.reset());class ch{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uh(e){T.setTimeout(()=>{throw e},0)}function mo(e,t){Ds||hh(),As||(Ds(),As=!0),yo.add(e,t)}var Ds;function hh(){var e=T.Promise.resolve(void 0);Ds=function(){e.then(lh)}}var As=!1,yo=new ah;function lh(){for(var e;e=oh();){try{e.h.call(e.g)}catch(n){uh(n)}var t=go;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}As=!1}function kn(e,t){$.call(this),this.h=e||1,this.g=t||T,this.j=W(this.kb,this),this.l=Date.now()}G(kn,$);m=kn.prototype;m.ca=!1;m.R=null;m.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(ni(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ni(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){kn.X.M.call(this),ni(this),delete this.g};function si(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function vo(e){e.g=si(()=>{e.g=null,e.i&&(e.i=!1,vo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dh extends Ct{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vo(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(e){Ct.call(this),this.h=e,this.g={}}G(Se,Ct);var or=[];function wo(e,t,n,s){Array.isArray(n)||(n&&(or[0]=n.toString()),n=or);for(var i=0;i<n.length;i++){var r=uo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Eo(e){Ys(e.g,function(t,n){this.g.hasOwnProperty(n)&&Js(t)},e),e.g={}}Se.prototype.M=function(){Se.X.M.call(this),Eo(this)};Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rn(){this.g=!0}Rn.prototype.Aa=function(){this.g=!1};function fh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ph(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function jt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+mh(e,n)+(s?" "+s:"")})}function gh(e,t){e.info(function(){return"TIMEOUT: "+t})}Rn.prototype.info=function(){};function mh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ei(n)}catch{return t}}var Ft={},ar=null;function xn(){return ar=ar||new $}Ft.Oa="serverreachability";function To(e){Q.call(this,Ft.Oa,e)}G(To,Q);function Ce(e){const t=xn();H(t,new To(t))}Ft.STAT_EVENT="statevent";function Io(e,t){Q.call(this,Ft.STAT_EVENT,e),this.stat=t}G(Io,Q);function X(e){const t=xn();H(t,new Io(t,e))}Ft.Pa="timingevent";function So(e,t){Q.call(this,Ft.Pa,e),this.size=t}G(So,Q);function Pe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Ln={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Co={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ii(){}ii.prototype.h=null;function cr(e){return e.h||(e.h=e.i())}function bo(){}var Fe={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ri(){Q.call(this,"d")}G(ri,Q);function oi(){Q.call(this,"c")}G(oi,Q);var Ns;function On(){}G(On,ii);On.prototype.g=function(){return new XMLHttpRequest};On.prototype.i=function(){return{}};Ns=new On;function Be(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Se(this),this.O=yh,e=Is?125:void 0,this.T=new kn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Do}function Do(){this.i=null,this.g="",this.h=!1}var yh=45e3,_s={},pn={};m=Be.prototype;m.setTimeout=function(e){this.O=e};function ks(e,t,n){e.K=1,e.v=Vn(pt(t)),e.s=n,e.P=!0,Ao(e,null)}function Ao(e,t){e.F=Date.now(),Ue(e),e.A=pt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Mo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Do,e.g=na(e.l,n?t:null,!e.s),0<e.N&&(e.L=new dh(W(e.Ka,e,e.g),e.N)),wo(e.S,e.g,"readystatechange",e.hb),t=e.H?ao(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ce(),fh(e.j,e.u,e.A,e.m,e.U,e.s)}m.hb=function(e){e=e.target;const t=this.L;t&&lt(e)==3?t.l():this.Ka(e)};m.Ka=function(e){try{if(e==this.g)t:{const h=lt(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Is||this.g&&(this.h.h||this.g.fa()||dr(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Ce(3):Ce(2)),Mn(this);var n=this.g.aa();this.Y=n;e:if(No(this)){var s=dr(this.g);e="";var i=s.length,r=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),pe(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ph(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dn(a)){var u=a;break e}}u=null}if(n=u)jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rs(this,n);else{this.i=!1,this.o=3,X(12),Nt(this),pe(this);break t}}this.P?(_o(this,h,o),Is&&this.i&&h==3&&(wo(this.S,this.T,"tick",this.gb),this.T.start())):(jt(this.j,this.m,o,null),Rs(this,o)),h==4&&Nt(this),this.i&&!this.I&&(h==4?Jo(this.l,this):(this.i=!1,Ue(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),Nt(this),pe(this)}}}catch{}finally{}};function No(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function _o(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=vh(e,n),i==pn){t==4&&(e.o=4,X(14),s=!1),jt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==_s){e.o=4,X(15),jt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else jt(e.j,e.m,i,null),Rs(e,i);No(e)&&i!=pn&&i!=_s&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fi(t),t.K=!0,X(11))):(jt(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),pe(e))}m.gb=function(){if(this.g){var e=lt(this.g),t=this.g.fa();this.C<t.length&&(Mn(this),_o(this,e,t),this.i&&e!=4&&Ue(this))}};function vh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?pn:(n=Number(t.substring(n,s)),isNaN(n)?_s:(s+=1,s+n>t.length?pn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Nt(this)};function Ue(e){e.V=Date.now()+e.O,ko(e,e.O)}function ko(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Pe(W(e.fb,e),t)}function Mn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(gh(this.j,this.A),this.K!=2&&(Ce(),X(17)),Nt(this),this.o=2,pe(this)):ko(this,this.V-e)};function pe(e){e.l.G==0||e.I||Jo(e.l,e)}function Nt(e){Mn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ni(e.T),Eo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||xs(n.h,e))){if(!e.J&&xs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)yn(n),Bn(n);else break t;di(n),X(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Pe(W(n.bb,n),6e3));if(1>=Fo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _t(n,11)}else if((e.J||n.g==e)&&yn(n),!dn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ai(r,r.h),r.h=null))}if(s.D){const A=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,x(s.F,s.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=ea(s,s.H?s.ka:null,s.V),o.J){Bo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Mn(a),Ue(a)),s.g=o}else Yo(s);0<n.i.length&&Un(n)}else u[0]!="stop"&&u[0]!="close"||_t(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_t(n,7):li(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ce(4)}catch{}}function wh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Dn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Eh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Dn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ro(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Dn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Eh(e),s=wh(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Th(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Rt){this.h=t!==void 0?t:e.h,gn(this,e.j),this.s=e.s,this.g=e.g,mn(this,e.m),this.l=e.l,t=e.i;var n=new be;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ur(this,n),this.o=e.o}else e&&(n=String(e).match(xo))?(this.h=!!t,gn(this,n[1]||"",!0),this.s=ue(n[2]||""),this.g=ue(n[3]||"",!0),mn(this,n[4]),this.l=ue(n[5]||"",!0),ur(this,n[6]||"",!0),this.o=ue(n[7]||"")):(this.h=!!t,this.i=new be(null,this.h))}Rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(he(t,hr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(he(t,hr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(he(n,n.charAt(0)=="/"?Ch:Sh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",he(n,Dh)),e.join("")};function pt(e){return new Rt(e)}function gn(e,t,n){e.j=n?ue(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ur(e,t,n){t instanceof be?(e.i=t,Ah(e.i,e.h)):(n||(t=he(t,bh)),e.i=new be(t,e.h))}function x(e,t,n){e.i.set(t,n)}function Vn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ue(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function he(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ih),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ih(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var hr=/[#\/\?@]/g,Sh=/[#\?:]/g,Ch=/[#\?]/g,bh=/[#\?@]/g,Dh=/#/g;function be(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&Th(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=be.prototype;m.add=function(e,t){bt(this),this.i=null,e=ee(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Lo(e,t){bt(e),t=ee(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Oo(e,t){return bt(e),t=ee(e,t),e.g.has(t)}m.forEach=function(e,t){bt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};m.oa=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};m.W=function(e){bt(this);let t=[];if(typeof e=="string")Oo(this,e)&&(t=t.concat(this.g.get(ee(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return bt(this),this.i=null,e=ee(this,e),Oo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Mo(e,t,n){Lo(e,t),0<n.length&&(e.i=null,e.g.set(ee(e,t),Ws(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function ee(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ah(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Lo(this,s),Mo(this,i,n))},e)),e.j=t}var Nh=class{constructor(e,t){this.h=e,this.g=t}};function Vo(e){this.l=e||_h,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _h=10;function Po(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fo(e){return e.h?1:e.g?e.g.size:0}function xs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ai(e,t){e.g?e.g.add(t):e.h=t}function Bo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Vo.prototype.cancel=function(){if(this.i=Uo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Uo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ws(e.i)}function ci(){}ci.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};ci.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function kh(){this.g=new ci}function Rh(e,t,n){const s=n||"";try{Ro(e,function(i,r){let o=i;Me(i)&&(o=ei(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function xh(e,t){const n=new Rn;if(T.Image){const s=new Image;s.onload=Ye(Je,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ye(Je,n,s,"TestLoadImage: error",!1,t),s.onabort=Ye(Je,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ye(Je,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Je(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function $e(e){this.l=e.$b||null,this.j=e.ib||!1}G($e,ii);$e.prototype.g=function(){return new Pn(this.l,this.j)};$e.prototype.i=function(e){return function(){return e}}({});function Pn(e,t){$.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ui,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Pn,$);var ui=0;m=Pn.prototype;m.open=function(e,t){if(this.readyState!=ui)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,De(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=ui};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,De(this)),this.g&&(this.readyState=3,De(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$o(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))};function $o(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?je(this):De(this),this.readyState==3&&$o(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,je(this))};m.Ta=function(e){this.g&&(this.response=e,je(this))};m.ga=function(){this.g&&je(this)};function je(e){e.readyState=4,e.l=null,e.j=null,e.A=null,De(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function De(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Lh=T.JSON.parse;function V(e){$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jo,this.K=this.L=!1}G(V,$);var jo="",Oh=/^https?$/i,Mh=["POST","PUT"];m=V.prototype;m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ns.g(),this.C=this.u?cr(this.u):cr(Ns),this.g.onreadystatechange=W(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){lr(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=T.FormData&&e instanceof T.FormData,!(0<=so(Mh,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ko(this),0<this.B&&((this.K=Vh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.qa,this)):this.A=si(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){lr(this,r)}};function Vh(e){return zt&&Zu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof zs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function lr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qo(e),Fn(e)}function qo(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),Fn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),V.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?Ho(this):this.eb())};m.eb=function(){Ho(this)};function Ho(e){if(e.h&&typeof zs<"u"&&(!e.C[1]||lt(e)!=4||e.aa()!=2)){if(e.v&&lt(e)==4)si(e.Ha,0,e);else if(H(e,"readystatechange"),lt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(xo)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Oh.test(i?i.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<lt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",qo(e)}}finally{Fn(e)}}}}function Fn(e,t){if(e.g){Ko(e);const n=e.g,s=e.C[0]?ln:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ko(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function lt(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Lh(t)}};function dr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Go(e){let t="";return Ys(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function hi(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Go(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function ce(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zo(e){this.Ca=0,this.i=[],this.j=new Rn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=ce("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=ce("baseRetryDelayMs",5e3,e),this.ab=ce("retryDelaySeedMs",1e4,e),this.Za=ce("forwardChannelMaxRetries",2,e),this.ta=ce("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Vo(e&&e.concurrentRequestLimit),this.Fa=new kh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=zo.prototype;m.ma=8;m.G=1;function li(e){if(Wo(e),e.G==3){var t=e.U++,n=pt(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),qe(e,n),t=new Be(e,e.j,t,void 0),t.K=2,t.v=Vn(pt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=na(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ue(t)}ta(e)}function Bn(e){e.g&&(fi(e),e.g.cancel(),e.g=null)}function Wo(e){Bn(e),e.u&&(T.clearTimeout(e.u),e.u=null),yn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Un(e){Po(e.h)||e.m||(e.m=!0,mo(e.Ja,e),e.C=0)}function Ph(e,t){return Fo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Ya?0:e.Za)?!1:(e.m=Pe(W(e.Ja,e,t),Zo(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Be(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=ao(r),co(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Qo(this,i,t),n=pt(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),qe(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Go(r)))+"&"+t:this.o&&hi(n,this.o,r)),ai(this.h,i),this.Xa&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),i.Z=!0,ks(i,n,null)):ks(i,n,t),this.G=2}}else this.G==3&&(e?fr(this,e):this.i.length==0||Po(this.h)||fr(this))};function fr(e,t){var n;t?n=t.m:n=e.U++;const s=pt(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),qe(e,s),e.o&&e.s&&hi(s,e.o,e.s),n=new Be(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Qo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ai(e.h,n),ks(n,s,t)}function qe(e,t){e.ia&&Ys(e.ia,function(n,s){x(t,s,n)}),e.l&&Ro({},function(n,s){x(t,s,n)})}function Qo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?W(e.l.Qa,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Rh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Yo(e){e.g||e.u||(e.Z=1,mo(e.Ia,e),e.A=0)}function di(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Pe(W(e.Ia,e),Zo(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,Xo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Pe(W(this.cb,this),e)}};m.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,X(10),Bn(this),Xo(this))};function fi(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Xo(e){e.g=new Be(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=pt(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),qe(e,t),e.o&&e.s&&hi(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Vn(pt(t)),n.s=null,n.P=!0,Ao(n,e)}m.bb=function(){this.v!=null&&(this.v=null,Bn(this),di(this),X(19))};function yn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Jo(e,t){var n=null;if(e.g==t){yn(e),fi(e),e.g=null;var s=2}else if(xs(e.h,t))n=t.D,Bo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=xn(),H(s,new So(s,n)),Un(e)}else Yo(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Ph(e,t)||s==2&&di(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:_t(e,5);break;case 4:_t(e,10);break;case 3:_t(e,6);break;default:_t(e,2)}}}function Zo(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function _t(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=W(e.jb,e);n||(n=new Rt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||gn(n,"https"),Vn(n)),xh(n.toString(),s)}else X(2);e.G=0,e.l&&e.l.va(t),ta(e),Wo(e)}m.jb=function(e){e?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function ta(e){if(e.G=0,e.la=[],e.l){const t=Uo(e.h);(t.length!=0||e.i.length!=0)&&(nr(e.la,t),nr(e.la,e.i),e.h.i.length=0,Ws(e.i),e.i.length=0),e.l.ua()}}function ea(e,t,n){var s=n instanceof Rt?pt(n):new Rt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),mn(s,s.m);else{var i=T.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Rt(null,void 0);s&&gn(r,s),t&&(r.g=t),i&&mn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),qe(e,s),s}function na(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new V(new $e({ib:!0})):new V(e.ra),t.L=e.H,t}function sa(){}m=sa.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Qa=function(){};function vn(){if(zt&&!(10<=Number(th)))throw Error("Environmental error: no available transport.")}vn.prototype.g=function(e,t){return new it(e,t)};function it(e,t){$.call(this),this.g=new zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!dn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!dn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ne(this)}G(it,$);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;X(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ea(e,null,e.V),Un(e)};it.prototype.close=function(){li(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ei(e),e=n);t.i.push(new Nh(t.$a++,e)),t.G==3&&Un(t)};it.prototype.M=function(){this.g.l=null,delete this.j,li(this.g),delete this.g,it.X.M.call(this)};function ia(e){ri.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(ia,ri);function ra(){oi.call(this),this.status=1}G(ra,oi);function ne(e){this.g=e}G(ne,sa);ne.prototype.xa=function(){H(this.g,"a")};ne.prototype.wa=function(e){H(this.g,new ia(e))};ne.prototype.va=function(e){H(this.g,new ra)};ne.prototype.ua=function(){H(this.g,"b")};vn.prototype.createWebChannel=vn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Ln.NO_ERROR=0;Ln.TIMEOUT=8;Ln.HTTP_ERROR=6;Co.COMPLETE="complete";bo.EventType=Fe;Fe.OPEN="a";Fe.CLOSE="b";Fe.ERROR="c";Fe.MESSAGE="d";$.prototype.listen=$.prototype.N;V.prototype.listenOnce=V.prototype.O;V.prototype.getLastError=V.prototype.Na;V.prototype.getLastErrorCode=V.prototype.Ea;V.prototype.getStatus=V.prototype.aa;V.prototype.getResponseJson=V.prototype.Ra;V.prototype.getResponseText=V.prototype.fa;V.prototype.send=V.prototype.da;var Fh=function(){return new vn},Bh=function(){return xn()},ds=Ln,Uh=Co,$h=Ft,pr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jh=$e,Ze=bo,qh=V;const gr="@firebase/firestore";/**
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
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
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
 */let se="9.10.0";/**
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
 */const Mt=new Xr("@firebase/firestore");function mr(){return Mt.logLevel}function y(e,...t){if(Mt.logLevel<=_.DEBUG){const n=t.map(pi);Mt.debug(`Firestore (${se}): ${e}`,...n)}}function gt(e,...t){if(Mt.logLevel<=_.ERROR){const n=t.map(pi);Mt.error(`Firestore (${se}): ${e}`,...n)}}function yr(e,...t){if(Mt.logLevel<=_.WARN){const n=t.map(pi);Mt.warn(`Firestore (${se}): ${e}`,...n)}}function pi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${se}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function R(e,t){e||I()}function S(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends te{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Hh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Gh{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new wt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new wt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Hh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new Z(t)}}class zh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new zh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new Qh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Xh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class oa{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Xh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function Wt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new P(0,0))}static max(){return new C(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ae{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ae.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ae?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends Ae{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const Jh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends Ae{construct(t,n,s){return new z(t,n,s)}static isValidIdentifier(t){return Jh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new z(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new z(n)}static emptyPath(){return new z([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(L.fromString(t))}static fromName(t){return new w(L.fromString(t).popFirst(5))}static empty(){return new w(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new L(t.slice()))}}function Zh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new Tt(i,w.empty(),t)}function tl(e){return new Tt(e.readTime,e.key,-1)}class Tt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(C.min(),w.empty(),-1)}static max(){return new Tt(C.max(),w.empty(),-1)}}function el(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */const nl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function He(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==nl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new p((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new p((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Ke(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class gi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
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
 */function vr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function aa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */gi.at=-1;class B{constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new tn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new tn(this.root,t,this.comparator,!1)}getReverseIterator(){return new tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new tn(this.root,t,this.comparator,!0)}}class tn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:j.RED,this.left=i!=null?i:j.EMPTY,this.right=r!=null?r:j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new j(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return j.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class F{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new wr(this.data.getIterator())}getIteratorFrom(t){return new wr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof F)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new F(this.comparator);return n.data=t,n}}class wr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rt{constructor(t){this.fields=t,t.sort(z.comparator)}static empty(){return new rt([])}unionWith(t){let n=new F(z.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Wt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new K(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new K(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const il=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(R(!!e),typeof e=="string"){let t=0;const n=il.exec(e);if(R(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Qt(e){return typeof e=="string"?K.fromBase64String(e):K.fromUint8Array(e)}/**
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
 */function ca(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ua(e){const t=e.mapValue.fields.__previous_value__;return ca(t)?ua(t):t}function Ne(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */class rl{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _e{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new _e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _e&&t.projectId===this.projectId&&t.database===this.database}}function $n(e){return e==null}function wn(e){return e===0&&1/e==-1/0}function ol(e){return typeof e=="number"&&Number.isInteger(e)&&!wn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const en={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ca(e)?4:al(e)?9007199254740991:10:I()}function ht(e,t){if(e===t)return!0;const n=Vt(e);if(n!==Vt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ne(e).isEqual(Ne(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=It(s.timestampValue),o=It(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Qt(s.bytesValue).isEqual(Qt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?wn(r)===wn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Wt(e.arrayValue.values||[],t.arrayValue.values||[],ht);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(vr(r)!==vr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ht(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function ke(e,t){return(e.values||[]).find(n=>ht(n,t))!==void 0}function Yt(e,t){if(e===t)return 0;const n=Vt(e),s=Vt(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Er(e.timestampValue,t.timestampValue);case 4:return Er(Ne(e),Ne(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Qt(i),a=Qt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=k(o[c],a[c]);if(u!==0)return u}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=k(M(i.latitude),M(r.latitude));return o!==0?o:k(M(i.longitude),M(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Yt(o[c],a[c]);if(u)return u}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===en.mapValue&&r===en.mapValue)return 0;if(i===en.mapValue)return 1;if(r===en.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=k(a[h],u[h]);if(l!==0)return l;const d=Yt(o[a[h]],c[u[h]]);if(d!==0)return d}return k(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function Er(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=It(e),s=It(t),i=k(n.seconds,s.seconds);return i!==0?i:k(n.nanos,s.nanos)}function Ht(e){return Ls(e)}function Ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=It(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Qt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ls(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ls(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Os(e){return!!e&&"integerValue"in e}function mi(e){return!!e&&"arrayValue"in e}function Tr(e){return!!e&&"nullValue"in e}function Ir(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rn(e){return!!e&&"mapValue"in e}function ge(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ge(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ge(e.arrayValue.values[n]);return t}return Object.assign({},e)}function al(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tt{constructor(t){this.value=t}static empty(){return new tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!rn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ge(n)}setAll(t){let n=z.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ge(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());rn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ht(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];rn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Bt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new tt(ge(this.value))}}function ha(e){const t=[];return Bt(e.fields,(n,s)=>{const i=new z([n]);if(rn(s)){const r=ha(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new rt(t)}/**
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
 */class q{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new q(t,0,C.min(),C.min(),tt.empty(),0)}static newFoundDocument(t,n,s){return new q(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new q(t,2,n,C.min(),tt.empty(),0)}static newUnknownDocument(t,n){return new q(t,3,n,C.min(),tt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cl{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Sr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new cl(e,t,n,s,i,r,o)}function yi(e){const t=S(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Ht(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),$n(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ht(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ht(s)).join(",")),t.ht=n}return t.ht}function ul(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ht(s.value)}`;var s}).join(", ")}]`),$n(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ht(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ht(n)).join(",")),`Target(${t})`}function vi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!yl(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ht(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!br(e.startAt,t.startAt)&&br(e.endAt,t.endAt)}function Ms(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class et extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new hl(t,n,s):n==="array-contains"?new fl(t,s):n==="in"?new pl(t,s):n==="not-in"?new gl(t,s):n==="array-contains-any"?new ml(t,s):new et(t,n,s)}static lt(t,n,s){return n==="in"?new ll(t,s):new dl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Yt(n,this.value)):n!==null&&Vt(this.value)===Vt(n)&&this.ft(Yt(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hl extends et{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.ft(n)}}class ll extends et{constructor(t,n){super(t,"in",n),this.keys=la("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class dl extends et{constructor(t,n){super(t,"not-in",n),this.keys=la("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function la(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class fl extends et{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return mi(n)&&ke(n.arrayValue,this.value)}}class pl extends et{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ke(this.value.arrayValue,n)}}class gl extends et{constructor(t,n){super(t,"not-in",n)}matches(t){if(ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ke(this.value.arrayValue,n)}}class ml extends et{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!mi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ke(this.value.arrayValue,s))}}class En{constructor(t,n){this.position=t,this.inclusive=n}}class me{constructor(t,n="asc"){this.field=t,this.dir=n}}function yl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Cr(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Yt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function br(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ht(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class jn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function vl(e,t,n,s,i,r,o,a){return new jn(e,t,n,s,i,r,o,a)}function qn(e){return new jn(e)}function Dr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function wl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function El(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Tl(e){return e.collectionGroup!==null}function Re(e){const t=S(e);if(t._t===null){t._t=[];const n=El(t),s=wl(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new me(n)),t._t.push(new me(z.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new me(z.keyField(),r))}}}return t._t}function mt(e){const t=S(e);if(!t.wt)if(t.limitType==="F")t.wt=Sr(t.path,t.collectionGroup,Re(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Re(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new me(r.field,o))}const s=t.endAt?new En(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new En(t.startAt.position,t.startAt.inclusive):null;t.wt=Sr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function Vs(e,t,n){return new jn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hn(e,t){return vi(mt(e),mt(t))&&e.limitType===t.limitType}function da(e){return`${yi(mt(e))}|lt:${e.limitType}`}function Ps(e){return`Query(target=${ul(mt(e))}; limitType=${e.limitType})`}function wi(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Cr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Re(n),s)||n.endAt&&!function(i,r,o){const a=Cr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Re(n),s))}(e,t)}function Il(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function fa(e){return(t,n)=>{let s=!1;for(const i of Re(e)){const r=Sl(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Sl(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Yt(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function pa(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wn(t)?"-0":t}}function ga(e){return{integerValue:""+e}}function Cl(e,t){return ol(t)?ga(t):pa(e,t)}/**
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
 */class Kn{constructor(){this._=void 0}}function bl(e,t,n){return e instanceof Tn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof xe?ya(e,t):e instanceof Le?va(e,t):function(s,i){const r=ma(s,i),o=Ar(r)+Ar(s.yt);return Os(r)&&Os(s.yt)?ga(o):pa(s.It,o)}(e,t)}function Dl(e,t,n){return e instanceof xe?ya(e,t):e instanceof Le?va(e,t):n}function ma(e,t){return e instanceof In?Os(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Tn extends Kn{}class xe extends Kn{constructor(t){super(),this.elements=t}}function ya(e,t){const n=wa(t);for(const s of e.elements)n.some(i=>ht(i,s))||n.push(s);return{arrayValue:{values:n}}}class Le extends Kn{constructor(t){super(),this.elements=t}}function va(e,t){let n=wa(t);for(const s of e.elements)n=n.filter(i=>!ht(i,s));return{arrayValue:{values:n}}}class In extends Kn{constructor(t,n){super(),this.It=t,this.yt=n}}function Ar(e){return M(e.integerValue||e.doubleValue)}function wa(e){return mi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Al(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof xe&&s instanceof xe||n instanceof Le&&s instanceof Le?Wt(n.elements,s.elements,ht):n instanceof In&&s instanceof In?ht(n.yt,s.yt):n instanceof Tn&&s instanceof Tn}(e.transform,t.transform)}class Nl{constructor(t,n){this.version=t,this.transformResults=n}}class ot{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ot}static exists(t){return new ot(void 0,t)}static updateTime(t){return new ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function on(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Gn{}function Ea(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ia(e.key,ot.none()):new Ge(e.key,e.data,ot.none());{const n=e.data,s=tt.empty();let i=new F(z.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Dt(e.key,s,new rt(i.toArray()),ot.none())}}function _l(e,t,n){e instanceof Ge?function(s,i,r){const o=s.value.clone(),a=_r(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Dt?function(s,i,r){if(!on(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=_r(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ta(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ye(e,t,n,s){return e instanceof Ge?function(i,r,o,a){if(!on(i.precondition,r))return o;const c=i.value.clone(),u=kr(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Dt?function(i,r,o,a){if(!on(i.precondition,r))return o;const c=kr(i.fieldTransforms,a,r),u=r.data;return u.setAll(Ta(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return on(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function kl(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=ma(s.transform,i||null);r!=null&&(n===null&&(n=tt.empty()),n.set(s.field,r))}return n||null}function Nr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wt(n,s,(i,r)=>Al(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ge extends Gn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dt extends Gn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ta(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function _r(e,t,n){const s=new Map;R(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Dl(o,a,n[i]))}return s}function kr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bl(r,o,t))}return s}class Ia extends Gn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rl extends Gn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xl{constructor(t){this.count=t}}/**
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
 */var O,D;function Ll(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Sa(e){if(e===void 0)return gt("GRPC error has no .code"),f.UNKNOWN;switch(e){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(D=O||(O={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ie{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Bt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return aa(this.inner)}size(){return this.innerSize}}/**
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
 */const Ol=new B(w.comparator);function yt(){return Ol}const Ca=new B(w.comparator);function le(...e){let t=Ca;for(const n of e)t=t.insert(n.key,n);return t}function ba(e){let t=Ca;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function kt(){return ve()}function Da(){return ve()}function ve(){return new ie(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ml=new B(w.comparator),Vl=new F(w.comparator);function b(...e){let t=Vl;for(const n of e)t=t.add(n);return t}const Pl=new F(k);function Aa(){return Pl}/**
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
 */class zn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,ze.createSynthesizedTargetChangeForCurrentChange(t,n)),new zn(C.min(),s,Aa(),yt(),b())}}class ze{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new ze(K.EMPTY_BYTE_STRING,n,b(),b(),b())}}/**
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
 */class an{constructor(t,n,s,i){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=i}}class Na{constructor(t,n){this.targetId=t,this.At=n}}class _a{constructor(t,n,s=K.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Rr{constructor(){this.Rt=0,this.bt=Lr(),this.Pt=K.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=b(),n=b(),s=b();return this.bt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new ze(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=Lr()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Fl{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=yt(),this.qt=xr(),this.Kt=new F(k)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,s=t.At.count,i=this.Xt(n);if(i){const r=i.target;if(Ms(r))if(s===0){const o=new w(r.path);this.jt(n,o,q.newNoDocument(o,C.min()))}else R(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Ms(a.target)){const c=new w(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,q.newNoDocument(c,t))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=b();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(t));const i=new zn(t,n,this.Kt,this.Ut,s);return this.Ut=yt(),this.qt=xr(),this.Kt=new F(k),i}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let n=this.Lt.get(t);return n||(n=new Rr,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new F(k),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Rr),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function xr(){return new B(w.comparator)}function Lr(){return new B(w.comparator)}/**
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
 */const Bl=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ul=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $l{constructor(t,n){this.databaseId=t,this.gt=n}}function Sn(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ka(e,t){return e.gt?t.toBase64():t.toUint8Array()}function jl(e,t){return Sn(e,t.toTimestamp())}function dt(e){return R(!!e),C.fromTimestamp(function(t){const n=It(t);return new P(n.seconds,n.nanos)}(e))}function Ei(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Ra(e){const t=L.fromString(e);return R(Oa(t)),t}function Fs(e,t){return Ei(e.databaseId,t.path)}function fs(e,t){const n=Ra(t);if(n.get(1)!==e.databaseId.projectId)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(xa(n))}function Bs(e,t){return Ei(e.databaseId,t)}function ql(e){const t=Ra(e);return t.length===4?L.emptyPath():xa(t)}function Us(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xa(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Or(e,t,n){return{name:Fs(e,t),fields:n.value.mapValue.fields}}function Hl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.gt?(R(u===void 0||typeof u=="string"),K.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),K.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Sa(c.code);return new E(u,c.message||"")}(o);n=new _a(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=fs(e,s.document.name),r=dt(s.document.updateTime),o=new tt({mapValue:{fields:s.document.fields}}),a=q.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new an(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=fs(e,s.document),r=s.readTime?dt(s.readTime):C.min(),o=q.newNoDocument(i,r),a=s.removedTargetIds||[];n=new an([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=fs(e,s.document),r=s.removedTargetIds||[];n=new an([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new xl(i),o=s.targetId;n=new Na(o,r)}}return n}function Kl(e,t){let n;if(t instanceof Ge)n={update:Or(e,t.key,t.value)};else if(t instanceof Ia)n={delete:Fs(e,t.key)};else if(t instanceof Dt)n={update:Or(e,t.key,t.data),updateMask:ed(t.fieldMask)};else{if(!(t instanceof Rl))return I();n={verify:Fs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Tn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Le)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof In)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Gl(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?dt(s.updateTime):dt(i);return r.isEqual(C.min())&&(r=dt(i)),new Nl(r,s.transformResults||[])}(n,t))):[]}function zl(e,t){return{documents:[Bs(e,t.path)]}}function Wl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Bs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Bs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(Ir(l.value))return{unaryFilter:{field:$t(l.field),op:"IS_NAN"}};if(Tr(l.value))return{unaryFilter:{field:$t(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ir(l.value))return{unaryFilter:{field:$t(l.field),op:"IS_NOT_NAN"}};if(Tr(l.value))return{unaryFilter:{field:$t(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$t(l.field),op:Jl(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:$t(h.field),direction:Xl(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.gt||$n(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Ql(e){let t=ql(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=La(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new me(qt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,$n(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new En(d,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new En(d,l)}(n.endAt)),vl(t,i,o,r,a,"F",c,u)}function Yl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function La(e){return e?e.unaryFilter!==void 0?[td(e)]:e.fieldFilter!==void 0?[Zl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>La(t)).reduce((t,n)=>t.concat(n)):I():[]}function Xl(e){return Bl[e]}function Jl(e){return Ul[e]}function $t(e){return{fieldPath:e.canonicalString()}}function qt(e){return z.fromServerFormat(e.fieldPath)}function Zl(e){return et.create(qt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function td(e){switch(e.unaryFilter.op){case"IS_NAN":const t=qt(e.unaryFilter.field);return et.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=qt(e.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qt(e.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qt(e.unaryFilter.field);return et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function ed(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Oa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class nd{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&_l(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ye(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ye(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Da();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Ea(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),b())}isEqual(t){return this.batchId===t.batchId&&Wt(this.mutations,t.mutations,(n,s)=>Nr(n,s))&&Wt(this.baseMutations,t.baseMutations,(n,s)=>Nr(n,s))}}class Ti{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){R(t.mutations.length===s.length);let i=Ml;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ti(t,n,s,i)}}/**
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
 */class sd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class xt{constructor(t,n,s,i,r=C.min(),o=C.min(),a=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class id{constructor(t){this.re=t}}function rd(e){const t=Ql({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Vs(t,t.limit,"L"):t}/**
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
 */class od{constructor(){this.Ye=new ad}addToCollectionParentIndex(t,n){return this.Ye.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Tt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Tt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class ad{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new F(L.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new F(L.comparator)).toArray()}}/**
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
 */class Xt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Xt(0)}static vn(){return new Xt(-1)}}/**
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
 */class cd{constructor(){this.changes=new ie(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class ud{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class hd{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&ye(s.mutation,i,rt.empty(),P.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,b()).next(()=>s))}getLocalViewOfDocuments(t,n,s=b()){const i=kt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=le();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=kt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,b()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=yt();const o=ve(),a=ve();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Dt)?r=r.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),ye(h.mutation,u,h.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new ud(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ve();let i=new B((o,a)=>o-a),r=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||rt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(i.get(a.batchId)||b()).add(c);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Da();h.forEach(d=>{if(!r.has(d)){const g=Ea(n.get(d),s.get(d));g!==null&&l.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Tl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):p.resolve(kt());let a=-1,c=r;return o.next(u=>p.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?p.resolve():this.getBaseDocument(t,h,l).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,b())).next(h=>({batchId:a,changes:ba(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=le();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=le();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(u,h){return new jn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,q.newInvalidDocument(u)))});let o=le();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&ye(u.mutation,c,rt.empty(),P.now()),wi(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):p.resolve(q.newInvalidDocument(n))}}/**
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
 */class ld{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:dt(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:rd(s.bundledQuery),readTime:dt(s.readTime)}}(n)),p.resolve()}}/**
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
 */class dd{constructor(){this.overlays=new B(w.comparator),this.es=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=kt();return p.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ue(t,n,r)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const i=kt(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new B((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=kt(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=kt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return p.resolve(a)}ue(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sd(n,s));let r=this.es.get(n);r===void 0&&(r=b(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class Ii{constructor(){this.ns=new F(U.ss),this.rs=new F(U.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new U(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new U(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new w(new L([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new w(new L([])),s=new U(n,t),i=new U(n,t+1);let r=b();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return w.comparator(t.key,n.key)||k(t._s,n._s)}static os(t,n){return k(t._s,n._s)||w.comparator(t.key,n.key)}}/**
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
 */class fd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new F(U.ss)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nd(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new F(k);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),p.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new U(new w(r),0);let a=new F(k);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),p.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){R(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return p.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new U(n,0),i=this.gs.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pd{constructor(t){this.Es=t,this.docs=new B(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():q.newInvalidDocument(n))}getEntries(t,n){let s=yt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():q.newInvalidDocument(i))}),p.resolve(s)}getAllFromCollection(t,n,s){let i=yt();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||el(tl(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}As(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new gd(this)}getSize(t){return p.resolve(this.size)}}class gd extends cd{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class md{constructor(t){this.persistence=t,this.Rs=new ie(n=>yi(n),vi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ii,this.targetCount=0,this.vs=Xt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),p.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Xt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Dn(n),p.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Ps.containsKey(n))}}/**
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
 */class yd{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new gi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new md(this),this.indexManager=new od,this.remoteDocumentCache=function(s){return new pd(s)}(s=>this.referenceDelegate.xs(s)),this.It=new id(n),this.Ns=new ld(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new fd(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new vd(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Ms(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(t,n){return p.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class vd extends sl{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.Fs=new Ii,this.$s=null}static Bs(t){return new Si(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),p.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Ms(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ls,s=>{const i=w.fromPath(s);return this.Us(t,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return p.or([()=>p.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
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
 */class Ci{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=b(),i=b();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ci(t,n.fromCache,s,i)}}/**
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
 */class wd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Mi(t,n,i,s)).next(r=>r||this.Oi(t,n))}ki(t,n){if(Dr(n))return p.resolve(null);let s=mt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vs(n,null,"F"),s=mt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=b(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,Vs(n,null,"F")):this.Bi(t,u,n,c)}))})))}Mi(t,n,s,i){return Dr(n)||i.isEqual(C.min())?this.Oi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Oi(t,n):(mr()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ps(n)),this.Bi(t,o,n,Zh(i,-1)))})}Fi(t,n){let s=new F(fa(t));return n.forEach((i,r)=>{wi(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,n){return mr()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.Ni.getDocumentsMatchingQuery(t,n,Tt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Ed{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new B(k),this.qi=new ie(r=>yi(r),vi),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Td(e,t,n,s){return new Ed(e,t,n,s)}async function Ma(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=b();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Id(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=p.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const A=c.docVersions.get(g);R(A!==null),v.version.compareTo(A)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=b();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Va(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Sd(e,t){const n=S(e),s=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((h,l)=>{const d=i.get(l);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,l)));let g=d.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(K.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(l,g),function(v,A,N){return v.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let c=yt(),u=b();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Cd(r,o,t.documentUpdates).next(h=>{c=h.Wi,u=h.zi})),!s.isEqual(C.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(l=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Ui=i,r))}function Cd(e,t,n){let s=b(),i=b();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=yt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function bd(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Dd(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new xt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function $s(e,t,n){const s=S(e),i=s.Ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ke(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(i.target)}function Mr(e,t,n){const s=S(e);let i=C.min(),r=b();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=S(a),l=h.qi.get(u);return l!==void 0?p.resolve(h.Ui.get(l)):h.Cs.getTargetData(c,u)}(s,o,mt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?i:C.min(),n?r:b())).next(a=>(Ad(s,Il(t),a),{documents:a,Hi:r})))}function Ad(e,t,n){let s=C.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(t,s)}class Vr{constructor(){this.activeTargetIds=Aa()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nd{constructor(){this.Lr=new Vr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Vr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _d{qr(t){}shutdown(){}}/**
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
 */class Pr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Rd{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class xd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,s,i,r){const o=this.ao(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.ho(a,i,r),this.lo(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw yr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}fo(t,n,s,i,r,o){return this.co(t,n,s,i,r)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+se,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ao(t,n){const s=kd[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,i){return new Promise((r,o)=>{const a=new qh;a.listenOnce(Uh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ds.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),r(u);break;case ds.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(v)>=0?v:f.UNKNOWN}(l.status);o(new E(d,l.message))}else o(new E(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}_o(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Fh(),o=Bh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jh({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let h=!1,l=!1;const d=new Rd({Hr:v=>{l?y("Connection","Not sending because WebChannel is closed:",v):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",v),u.send(v))},Jr:()=>u.close()}),g=(v,A,N)=>{v.listen(A,Y=>{try{N(Y)}catch(nt){setTimeout(()=>{throw nt},0)}})};return g(u,Ze.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),g(u,Ze.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),d.io())}),g(u,Ze.EventType.ERROR,v=>{l||(l=!0,yr("Connection","WebChannel transport errored:",v),d.io(new E(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ze.EventType.MESSAGE,v=>{var A;if(!l){const N=v.data[0];R(!!N);const Y=N,nt=Y.error||((A=Y[0])===null||A===void 0?void 0:A.error);if(nt){y("Connection","WebChannel received error:",nt);const oe=nt.status;let ae=function(Sc){const zi=O[Sc];if(zi!==void 0)return Sa(zi)}(oe),Gi=nt.message;ae===void 0&&(ae=f.INTERNAL,Gi="Unknown error status: "+oe+" with message "+nt.message),l=!0,d.io(new E(ae,Gi)),u.close()}else y("Connection","WebChannel received:",N),d.ro(N)}}),g(o,$h.STAT_EVENT,v=>{v.stat===pr.PROXY?y("Connection","Detected buffering proxy"):v.stat===pr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ps(){return typeof document<"u"?document:null}/**
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
 */function Wn(e){return new $l(e,!0)}class Pa{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.wo=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Fa{constructor(t,n,s,i,r,o,a,c){this.Hs=t,this.Po=s,this.vo=i,this.Vo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Pa(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new E(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ld extends Fa{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}jo(t,n){return this.Vo._o("Listen",t,n)}onMessage(t){this.xo.reset();const n=Hl(this.It,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?dt(r.readTime):C.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=Us(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Ms(a)?{documents:zl(i,a)}:{query:Wl(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ka(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Sn(i,r.snapshotVersion.toTimestamp())),o}(this.It,t);const s=Yl(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=Us(this.It),n.removeTarget=t,this.Bo(n)}}class Od extends Fa{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.Vo._o("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Gl(t.writeResults,t.commitTime),s=dt(t.commitTime);return this.listener.Zo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Us(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Kl(this.It,s))};this.Bo(n)}}/**
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
 */class Md extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Vo=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Vo.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}fo(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.Vo.fo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Vd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(gt(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Pd{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Ut(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c._u.add(4),await We(c),c.gu.set("Unknown"),c._u.delete(4),await Qn(c)}(this))})}),this.gu=new Vd(s,i)}}async function Qn(e){if(Ut(e))for(const t of e.wu)await t(!0)}async function We(e){for(const t of e.wu)await t(!1)}function Ba(e,t){const n=S(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Ai(n)?Di(n):re(n).ko()&&bi(n,t))}function Ua(e,t){const n=S(e),s=re(n);n.du.delete(t),s.ko()&&$a(n,t),n.du.size===0&&(s.ko()?s.Fo():Ut(n)&&n.gu.set("Unknown"))}function bi(e,t){e.yu.Ot(t.targetId),re(e).zo(t)}function $a(e,t){e.yu.Ot(t),re(e).Ho(t)}function Di(e){e.yu=new Fl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),re(e).start(),e.gu.uu()}function Ai(e){return Ut(e)&&!re(e).No()&&e.du.size>0}function Ut(e){return S(e)._u.size===0}function ja(e){e.yu=void 0}async function Fd(e){e.du.forEach((t,n)=>{bi(e,t)})}async function Bd(e,t){ja(e),Ai(e)?(e.gu.hu(t),Di(e)):e.gu.set("Unknown")}async function Ud(e,t,n){if(e.gu.set("Online"),t instanceof _a&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Cn(e,s)}else if(t instanceof an?e.yu.Gt(t):t instanceof Na?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(C.min()))try{const s=await Va(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),$a(i,a);const u=new xt(c.target,a,1,c.sequenceNumber);bi(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Cn(e,s)}}async function Cn(e,t,n){if(!Ke(t))throw t;e._u.add(1),await We(e),e.gu.set("Offline"),n||(n=()=>Va(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Qn(e)})}function qa(e,t){return t().catch(n=>Cn(e,n,t))}async function Yn(e){const t=S(e),n=St(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;$d(t);)try{const i=await bd(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,jd(t,i)}catch(i){await Cn(t,i)}Ha(t)&&Ka(t)}function $d(e){return Ut(e)&&e.fu.length<10}function jd(e,t){e.fu.push(t);const n=St(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ha(e){return Ut(e)&&!St(e).No()&&e.fu.length>0}function Ka(e){St(e).start()}async function qd(e){St(e).eu()}async function Hd(e){const t=St(e);for(const n of e.fu)t.Xo(n.mutations)}async function Kd(e,t,n){const s=e.fu.shift(),i=Ti.from(s,t,n);await qa(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Yn(e)}async function Gd(e,t){t&&St(e).Yo&&await async function(n,s){if(i=s.code,Ll(i)&&i!==f.ABORTED){const r=n.fu.shift();St(n).Oo(),await qa(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Yn(n)}var i}(e,t),Ha(e)&&Ka(e)}async function Fr(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ut(n);n._u.add(3),await We(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Qn(n)}async function zd(e,t){const n=S(e);t?(n._u.delete(2),await Qn(n)):t||(n._u.add(2),await We(n),n.gu.set("Unknown"))}function re(e){return e.pu||(e.pu=function(t,n,s){const i=S(t);return i.su(),new Ld(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(e.datastore,e.asyncQueue,{Yr:Fd.bind(null,e),Zr:Bd.bind(null,e),Wo:Ud.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),Ai(e)?Di(e):e.gu.set("Unknown")):(await e.pu.stop(),ja(e))})),e.pu}function St(e){return e.Iu||(e.Iu=function(t,n,s){const i=S(t);return i.su(),new Od(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(e.datastore,e.asyncQueue,{Yr:qd.bind(null,e),Zr:Gd.bind(null,e),tu:Hd.bind(null,e),Zo:Kd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await Yn(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class Ni{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ni(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _i(e,t){if(gt("AsyncQueue",`${t}: ${e}`),Ke(e))return new E(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Kt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=le(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new Kt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Kt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Kt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Br{constructor(){this.Tu=new B(w.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Jt{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Jt(t,n,Kt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Wd{constructor(){this.Au=void 0,this.listeners=[]}}class Qd{constructor(){this.queries=new ie(t=>da(t),Hn),this.onlineState="Unknown",this.Ru=new Set}}async function Ga(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Wd),i)try{r.Au=await n.onListen(s)}catch(o){const a=_i(o,`Initialization of query '${Ps(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&ki(n)}async function za(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Yd(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&ki(n)}function Xd(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ki(e){e.Ru.forEach(t=>{t.next()})}class Wa{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Jt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Jt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}/**
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
 */class Qa{constructor(t){this.key=t}}class Ya{constructor(t){this.key=t}}class Jd{constructor(t,n){this.query=t,this.Lu=n,this.Uu=null,this.current=!1,this.qu=b(),this.mutatedKeys=b(),this.Ku=fa(t),this.Gu=new Kt(this.Ku)}get Qu(){return this.Lu}ju(t,n){const s=n?n.Wu:new Br,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const d=i.get(h),g=wi(this.query,l)?l:null,v=!!d&&this.mutatedKeys.has(d.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;d&&g?d.data.isEqual(g.data)?v!==A&&(s.track({type:3,doc:g}),N=!0):this.zu(d,g)||(s.track({type:2,doc:g}),N=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),N=!0):d&&!g&&(s.track({type:1,doc:d}),N=!0,(c||u)&&(a=!0)),N&&(g?(o=o.add(g),r=A?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Gu:o,Wu:s,$i:a,mutatedKeys:r}}zu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.Wu.Eu();r.sort((u,h)=>function(l,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return g(l)-g(d)}(u.type,h.type)||this.Ku(u.doc,h.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new Jt(this.query,t.Gu,i,r,t.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Br,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=b(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return t.forEach(s=>{this.qu.has(s)||n.push(new Ya(s))}),this.qu.forEach(s=>{t.has(s)||n.push(new Qa(s))}),n}Zu(t){this.Lu=t.Hi,this.qu=b();const n=this.ju(t.documents);return this.applyChanges(n,!0)}tc(){return Jt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Zd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class tf{constructor(t){this.key=t,this.ec=!1}}class ef{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ie(a=>da(a),Hn),this.ic=new Map,this.rc=new Set,this.oc=new B(w.comparator),this.uc=new Map,this.cc=new Ii,this.ac={},this.hc=new Map,this.lc=Xt.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function nf(e,t){const n=ff(e);let s,i;const r=n.sc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await Dd(n.localStore,mt(t));n.isPrimaryClient&&Ba(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sf(n,t,s,a==="current")}return i}async function sf(e,t,n,s){e.dc=(h,l,d)=>async function(g,v,A,N){let Y=v.view.ju(A);Y.$i&&(Y=await Mr(g.localStore,v.query,!1).then(({documents:ae})=>v.view.ju(ae,Y)));const nt=N&&N.targetChanges.get(v.targetId),oe=v.view.applyChanges(Y,g.isPrimaryClient,nt);return $r(g,v.targetId,oe.Yu),oe.snapshot}(e,h,l,d);const i=await Mr(e.localStore,t,!0),r=new Jd(t,i.Hi),o=r.ju(i.documents),a=ze.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);$r(e,n,c.Yu);const u=new Zd(t,n,r);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function rf(e,t){const n=S(e),s=n.sc.get(t),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Hn(r,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $s(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ua(n.remoteStore,s.targetId),js(n,s.targetId)}).catch(He)):(js(n,s.targetId),await $s(n.localStore,s.targetId,!0))}async function of(e,t,n){const s=pf(e);try{const i=await function(r,o){const a=S(r),c=P.now(),u=o.reduce((d,g)=>d.add(g.key),b());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=yt(),v=b();return a.Gi.getEntries(d,u).next(A=>{g=A,g.forEach((N,Y)=>{Y.isValidDocument()||(v=v.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(A=>{h=A;const N=[];for(const Y of o){const nt=kl(Y,h.get(Y.key).overlayedDocument);nt!=null&&N.push(new Dt(Y.key,nt,ha(nt.value.mapValue),ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,N,o)}).next(A=>{l=A;const N=A.applyToLocalDocumentSet(h,v);return a.documentOverlayCache.saveOverlays(d,A.batchId,N)})}).then(()=>({batchId:l.batchId,changes:ba(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new B(k)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,n),await Qe(s,i.changes),await Yn(s.remoteStore)}catch(i){const r=_i(i,"Failed to persist write");n.reject(r)}}async function Xa(e,t){const n=S(e);try{const s=await Sd(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?R(o.ec):i.removedDocuments.size>0&&(R(o.ec),o.ec=!1))}),await Qe(n,s,t)}catch(s){await He(s)}}function Ur(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.bu(o)&&(c=!0)}),c&&ki(a)}(s.eventManager,t),i.length&&s.nc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function af(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.uc.get(t),r=i&&i.key;if(r){let o=new B(w.comparator);o=o.insert(r,q.newNoDocument(r,C.min()));const a=b().add(r),c=new zn(C.min(),new Map,new F(k),o,a);await Xa(s,c),s.oc=s.oc.remove(r),s.uc.delete(t),Ri(s)}else await $s(s.localStore,t,!1).then(()=>js(s,t,n)).catch(He)}async function cf(e,t){const n=S(e),s=t.batch.batchId;try{const i=await Id(n.localStore,t);Za(n,s,null),Ja(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Qe(n,i)}catch(i){await He(i)}}async function uf(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Za(s,t,n),Ja(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Qe(s,i)}catch(i){await He(i)}}function Ja(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Za(e,t,n){const s=S(e);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.ac[s.currentUser.toKey()]=i}}function js(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc._c(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(s=>{e.cc.containsKey(s)||tc(e,s)})}function tc(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Ua(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Ri(e))}function $r(e,t,n){for(const s of n)s instanceof Qa?(e.cc.addReference(s.key,t),hf(e,s)):s instanceof Ya?(y("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||tc(e,s.key)):I()}function hf(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.rc.add(s),Ri(e))}function Ri(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new w(L.fromString(t)),s=e.lc.next();e.uc.set(s,new tf(n)),e.oc=e.oc.insert(n,s),Ba(e.remoteStore,new xt(mt(qn(n.path)),s,2,gi.at))}}async function Qe(e,t,n){const s=S(e),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const h=Ci.Ci(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.nc.Wo(i),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,l=>p.forEach(l.Si,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>p.forEach(l.Di,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Ke(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.Ui.get(l),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(l,v)}}}(s.localStore,r))}async function lf(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Ma(n.localStore,t);n.currentUser=t,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new E(f.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Qe(n,s.ji)}}function df(e,t){const n=S(e),s=n.uc.get(t);if(s&&s.ec)return b().add(s.key);{let i=b();const r=n.ic.get(t);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function ff(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=df.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=af.bind(null,t),t.nc.Wo=Yd.bind(null,t.eventManager),t.nc._c=Xd.bind(null,t.eventManager),t}function pf(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uf.bind(null,t),t}class gf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Wn(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,n){return null}Tc(t,n){return null}yc(t){return Td(this.persistence,new wd,t.initialUser,this.It)}gc(t){return new yd(Si.Bs,this.It)}mc(t){return new Nd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ur(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lf.bind(null,this.syncEngine),await zd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qd}createDatastore(t){const n=Wn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new xd(i));var i;return function(r,o,a,c){return new Md(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Ur(this.syncEngine,a,0),o=Pr.C()?new Pr:new _d,new Pd(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new ef(s,i,r,o,a,c);return u&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await We(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class ec{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class yf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=oa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=_i(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function vf(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ma(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function wf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ef(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Fr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Fr(t.remoteStore,r)),e.onlineComponents=t}async function Ef(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await vf(e,new gf)),e.offlineComponents}async function nc(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await wf(e,new mf)),e.onlineComponents}function Tf(e){return nc(e).then(t=>t.syncEngine)}async function qs(e){const t=await nc(e),n=t.eventManager;return n.onListen=nf.bind(null,t.syncEngine),n.onUnlisten=rf.bind(null,t.syncEngine),n}function If(e,t,n={}){const s=new wt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new ec({next:l=>{r.enqueueAndForget(()=>za(i,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new E(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new E(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Wa(qn(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Ga(i,h)}(await qs(e),e.asyncQueue,t,n,s)),s.promise}const jr=new Map;/**
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
 */function sc(e,t,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sf(e,t,n,s){if(t===!0&&s===!0)throw new E(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qr(e){if(!w.isDocumentKey(e))throw new E(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hr(e){if(w.isDocumentKey(e))throw new E(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function xi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ut(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xi(e);throw new E(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Kr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Sf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Li{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kh;switch(n.type){case"gapi":const s=n.client;return new Wh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=jr.get(t);n&&(y("ComponentProvider","Removing Datastore"),jr.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class J{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new J(this.firestore,t,this._key)}}class Xn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Xn(this.firestore,t,this._query)}}class Et extends Xn{constructor(t,n,s){super(t,n,qn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new J(this.firestore,null,new w(t))}withConverter(t){return new Et(this.firestore,t,this._path)}}function we(e,t,...n){if(e=ft(e),sc("collection","path",t),e instanceof Li){const s=L.fromString(t,...n);return Hr(s),new Et(e,null,s)}{if(!(e instanceof J||e instanceof Et))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Hr(s),new Et(e.firestore,null,s)}}function Oi(e,t,...n){if(e=ft(e),arguments.length===1&&(t=oa.R()),sc("doc","path",t),e instanceof Li){const s=L.fromString(t,...n);return qr(s),new J(e,null,new w(s))}{if(!(e instanceof J||e instanceof Et))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return qr(s),new J(e.firestore,e instanceof Et?e.converter:null,new w(s))}}/**
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
 */class Cf{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Pa(this,"async_queue_retry"),this.jc=()=>{const n=ps();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const t=ps();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const n=ps();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new wt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Bc.push(t),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!Ke(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(t){const n=this.$c.then(()=>(this.Kc=!0,t().catch(s=>{this.qc=s,this.Kc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(t,n,s){this.Wc(),this.Qc.indexOf(t)>-1&&(n=0);const i=Ni.createAndSchedule(this,t,n,s,r=>this.Jc(r));return this.Uc.push(i),i}Wc(){this.qc&&I()}verifyOperationInProgress(){}async Yc(){let t;do t=this.$c,await t;while(t!==this.$c)}Xc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}Zc(t){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Yc()})}ta(t){this.Qc.push(t)}Jc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function Gr(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Pt extends Li{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Cf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ic(this),this._firestoreClient.terminate()}}function bf(e,t){const n=typeof e=="object"?e:xu(),s=typeof e=="string"?e:t||"(default)";return Au(n,"firestore").getImmediate({identifier:s})}function Mi(e){return e._firestoreClient||ic(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ic(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new rl(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new yf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 *//**
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
 */class Jn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zt(K.fromBase64String(t))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Zt(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Vi{constructor(t){this._methodName=t}}/**
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
 */class Pi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
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
 */const Df=/^__.*__$/;class Af{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Dt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ge(t,this.data,n,this.fieldTransforms)}}class rc{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Dt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function oc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Fi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new Fi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.sa({path:s,ra:!1});return i.oa(t),i}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.sa({path:s,ra:!1});return i.ea(),i}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return bn(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(t.length===0)throw this.aa("Document fields must not be empty");if(oc(this.na)&&Df.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class Nf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||Wn(t)}fa(t,n,s,i=!1){return new Fi({na:t,methodName:n,la:s,path:z.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Bi(e){const t=e._freezeSettings(),n=Wn(e._databaseId);return new Nf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ac(e,t,n,s,i,r={}){const o=e.fa(r.merge||r.mergeFields?2:0,t,n,i);Ui("Data must be an object, but it was:",o,s);const a=cc(s,o);let c,u;if(r.merge)c=new rt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const d=Hs(t,l,n);if(!o.contains(d))throw new E(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hc(h,d)||h.push(d)}c=new rt(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Af(new tt(a),c,u)}class Zn extends Vi{_toFieldTransform(t){if(t.na!==2)throw t.na===1?t.aa(`${this._methodName}() can only appear at the top level of your update data`):t.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zn}}function _f(e,t,n,s){const i=e.fa(1,t,n);Ui("Data must be an object, but it was:",i,s);const r=[],o=tt.empty();Bt(s,(c,u)=>{const h=$i(t,c,n);u=ft(u);const l=i.ua(h);if(u instanceof Zn)r.push(h);else{const d=ts(u,l);d!=null&&(r.push(h),o.set(h,d))}});const a=new rt(r);return new rc(o,a,i.fieldTransforms)}function kf(e,t,n,s,i,r){const o=e.fa(1,t,n),a=[Hs(t,s,n)],c=[i];if(r.length%2!=0)throw new E(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Hs(t,r[d])),c.push(r[d+1]);const u=[],h=tt.empty();for(let d=a.length-1;d>=0;--d)if(!hc(u,a[d])){const g=a[d];let v=c[d];v=ft(v);const A=o.ua(g);if(v instanceof Zn)u.push(g);else{const N=ts(v,A);N!=null&&(u.push(g),h.set(g,N))}}const l=new rt(u);return new rc(h,l,o.fieldTransforms)}function ts(e,t){if(uc(e=ft(e)))return Ui("Unsupported field value:",t,e),cc(e,t);if(e instanceof Vi)return function(n,s){if(!oc(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&t.na!==4)throw t.aa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ts(o,s.ca(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cl(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:Sn(s.It,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sn(s.It,i)}}if(n instanceof Pi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Zt)return{bytesValue:ka(s.It,n._byteString)};if(n instanceof J){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ei(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${xi(n)}`)}(e,t)}function cc(e,t){const n={};return aa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bt(e,(s,i)=>{const r=ts(i,t.ia(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function uc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof Pi||e instanceof Zt||e instanceof J||e instanceof Vi)}function Ui(e,t,n){if(!uc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xi(n);throw s==="an object"?t.aa(e+" a custom object"):t.aa(e+" "+s)}}function Hs(e,t,n){if((t=ft(t))instanceof Jn)return t._internalPath;if(typeof t=="string")return $i(e,t);throw bn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rf=new RegExp("[~\\*/\\[\\]]");function $i(e,t,n){if(t.search(Rf)>=0)throw bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jn(...t.split("."))._internalPath}catch{throw bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function bn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new E(f.INVALID_ARGUMENT,a+e+c)}function hc(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class lc{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xf extends lc{data(){return super.data()}}function dc(e,t){return typeof t=="string"?$i(e,t):t instanceof Jn?t._internalPath:t._delegate._internalPath}/**
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
 */class de{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fc extends lc{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(dc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class cn extends fc{data(t={}){return super.data(t)}}class Lf{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new de(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new cn(this._firestore,this._userDataWriter,s.key,s,new de(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new de(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new de(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Of(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Of(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function Mf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new E(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Vf{convertValue(t,n="none"){switch(Vt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Bt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Pi(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ua(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ne(t));default:return null}}convertTimestamp(t){const n=It(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);R(Oa(s));const i=new _e(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||gt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function pc(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 *//**
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
 */function Pf(e){e=ut(e,J);const t=ut(e.firestore,Pt);return If(Mi(t),e._key).then(n=>yc(t,e,n))}class gc extends Vf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new J(this.firestore,null,n)}}function Ff(e,t,n){e=ut(e,J);const s=ut(e.firestore,Pt),i=pc(e.converter,t,n);return ji(s,[ac(Bi(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,ot.none())])}function Bf(e,t,n,...s){e=ut(e,J);const i=ut(e.firestore,Pt),r=Bi(i);let o;return o=typeof(t=ft(t))=="string"||t instanceof Jn?kf(r,"updateDoc",e._key,t,n,s):_f(r,"updateDoc",e._key,t),ji(i,[o.toMutation(e._key,ot.exists(!0))])}function mc(e,t){const n=ut(e.firestore,Pt),s=Oi(e),i=pc(e.converter,t);return ji(n,[ac(Bi(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,ot.exists(!1))]).then(()=>s)}function Ks(e,...t){var n,s,i;e=ft(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Gr(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Gr(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,u,h;if(e instanceof J)u=ut(e.firestore,Pt),h=qn(e._key.path),c={next:l=>{t[o]&&t[o](yc(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=ut(e,Xn);u=ut(l.firestore,Pt),h=l._query;const d=new gc(u);c={next:g=>{t[o]&&t[o](new Lf(u,d,l,g))},error:t[o+1],complete:t[o+2]},Mf(e._query)}return function(l,d,g,v){const A=new ec(v),N=new Wa(d,A,g);return l.asyncQueue.enqueueAndForget(async()=>Ga(await qs(l),N)),()=>{A.Rc(),l.asyncQueue.enqueueAndForget(async()=>za(await qs(l),N))}}(Mi(u),h,a,c)}function ji(e,t){return function(n,s){const i=new wt;return n.asyncQueue.enqueueAndForget(async()=>of(await Tf(n),s,i)),i.promise}(Mi(e),t)}function yc(e,t,n){const s=n.docs.get(t._key),i=new gc(e);return new fc(e,i,t._key,s,new de(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){se=n})(ku),hn(new Ee("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Pt(new Gh(n.getProvider("auth-internal")),new Yh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _e(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),fe(gr,"3.5.0",e),fe(gr,"3.5.0","esm2017")})();const Uf={apiKey:{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}.VITE_FIREBASE_API_KEY,appId:{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}.VITE_FIREBASE_API_ID,authDomain:"webrtc-video-bde1d.firebaseapp.com",projectId:"webrtc-video-bde1d",storageBucket:"webrtc-video-bde1d.appspot.com",messagingSenderId:{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}.VITE_FIREBASE_MESSAGING_SENDER_ID},$f=Ru(Uf),Gt=bf($f),jf={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},st=new RTCPeerConnection(jf);let ct=null,Oe=null;const qf=document.getElementById("localVideo"),Hf=document.getElementById("remoteVideo"),Kf=async()=>{ct=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),ct.getTracks().forEach(e=>{st.addTrack(e,ct)}),qf.srcObject=ct,Hf.srcObject=Oe},qi=async e=>{Oe=new MediaStream,await Kf(),st.ontrack=a=>{a.streams[0].getTracks().forEach(c=>{Oe.addTrack(c)})};const t=Oi(we(Gt,"calls")),n=we(Gt,t.path,"offerCandidates"),s=we(Gt,t.path,"answerCandidates");st.onicecandidate=a=>{a.candidate&&mc(n,a.candidate.toJSON())};const i=await st.createOffer();await st.setLocalDescription(i);const{type:r,sdp:o}=i.toJSON();return Ff(t,{offer:{type:r,sdp:o}}),Ks(t,async a=>{const c=a.data();if(!st.currentRemoteDescription&&(c==null?void 0:c.answer)){const u=new RTCSessionDescription(c.answer);await st.setRemoteDescription(u),e&&e()}}),Ks(s,a=>{a.docChanges().forEach(async c=>{if(c.type==="added"){let u=c.doc.data();await st.addIceCandidate(new RTCIceCandidate(u))}})}),t.id},vc=async e=>{const t=Oi(Gt,"calls",e),n=we(Gt,t.path,"answerCandidates"),s=we(Gt,t.path,"offerCandidates");st.onicecandidate=u=>{u.candidate&&mc(n,u.candidate.toJSON())};const r=(await Pf(t)).data().offer;await st.setRemoteDescription(new RTCSessionDescription(r));const o=await st.createAnswer();await st.setLocalDescription(o);const{type:a,sdp:c}=o.toJSON();return await Bf(t,{answer:{type:a,sdp:c}}),Ks(s,u=>{u.docChanges().forEach(async h=>{if(h.type==="added"){let l=h.doc.data();await st.addIceCandidate(new RTCIceCandidate(l))}})}),e};document.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search).get("join");t&&(qi(),vc(t),Ki())});let nn=!1,sn=!1;const Gf=document.getElementById("callButton"),Hi=document.getElementById("callInput"),zr=document.getElementById("callUrl"),wc=document.getElementById("JoinInput"),zf=document.getElementById("joinButton"),Wf=document.getElementById("hangupButton"),Ec=document.getElementById("callBox"),Qf=document.getElementById("callLoaderBox"),Yf=document.getElementById("callInputBox"),Xf=document.getElementById("showJoinButton"),Tc=document.getElementById("joinBox"),Ic=document.getElementById("videos"),gs=document.getElementById("muteButton"),ms=document.getElementById("hideVideoButtoon"),Ki=async()=>{Ic.style.display="flex"},Jf=async()=>{actionButtons.style.display="none",Ec.style.display="flex";const e=await qi(Ki);Qf.style.display="none",Hi.value=e;const t=`${window.location.href}?join=${e}`;zr.innerText=t,zr.href=t,Yf.style.display="flex"},Zf=async()=>{const e=wc.value;!e||(await qi(),await vc(e),Ki())},tp=()=>{ct&&ct.getTracks().forEach(e=>{e.stop()}),Oe&&Oe.getTracks().forEach(e=>{e.stop()}),Ic.style.display="none",Ec.style.display="none",Tc.style.display="none",actionButtons.style.display="flex",localVideo.srcObject=null,remoteVideo.srcObject=null,Hi.value="",wc.value=""};Gf.onclick=Jf;zf.onclick=Zf;Wf.onclick=tp;gs.onclick=()=>{nn=ct.getAudioTracks()[0].enabled,ct.getAudioTracks()[0].enabled=!nn,gs.innerText=nn?"Unmute":"Mute",gs.classList.toggle("active",nn)};ms.onclick=()=>{sn=ct.getVideoTracks()[0].enabled,ct.getVideoTracks()[0].enabled=!sn,ms.innerText=sn?"Hide":"Show",ms.classList.toggle("active",sn)};Xf.onclick=()=>{actionButtons.style.display="none",Tc.style.display="flex"};copyButtonCall.onclick=()=>{navigator.clipboard.writeText(Hi.value),copyButtonCall.innerText="Copied",setTimeout(()=>{copyButtonCall.innerText="Copy"},2e3)};
