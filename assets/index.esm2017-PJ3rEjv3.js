import{j as V,k as O,o as W}from"./index-DSQNeCOl.js";var T={};/**
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
 */const P=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},G=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[a++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],i=t[n++],c=t[n++],h=((r&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;e[a++]=String.fromCharCode(55296+(h>>10)),e[a++]=String.fromCharCode(56320+(h&1023))}else{const s=t[n++],i=t[n++];e[a++]=String.fromCharCode((r&15)<<12|(s&63)<<6|i&63)}}return e.join("")},F={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const s=t[r],i=r+1<t.length,c=i?t[r+1]:0,h=r+2<t.length,d=h?t[r+2]:0,B=s>>2,p=(s&3)<<4|c>>4;let b=(c&15)<<2|d>>6,_=d&63;h||(_=64,i||(b=64)),a.push(n[B],n[p],n[b],n[_])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(P(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||c==null||d==null||p==null)throw new J;const b=s<<2|c>>4;if(a.push(b),d!==64){const _=c<<4&240|d>>2;if(a.push(_),p!==64){const j=d<<6&192|p;a.push(j)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class J extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y=function(t){const e=P(t);return F.encodeByteArray(e,!0)},L=function(t){return Y(t).replace(/\./g,"")},K=function(t){try{return F.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof O<"u")return O;throw new Error("Unable to locate global object.")}/**
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
 */const q=()=>X().__FIREBASE_DEFAULTS__,Z=()=>{if(typeof V>"u"||typeof T>"u")return;const t=T.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Q=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&K(t[1]);return e&&JSON.parse(e)},ee=()=>{try{return q()||Z()||Q()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x=()=>{var t;return(t=ee())===null||t===void 0?void 0:t.config};/**
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
 */class te{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function ne(){try{return typeof indexedDB=="object"}catch{return!1}}function re(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function rt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ae="FirebaseError";class g extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=ae,Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?se(s,a):"Error",c=`${this.serviceName}: ${i} (${r}).`;return new g(r,c,a)}}function se(t,e){return t.replace(ie,(n,a)=>{const r=e[a];return r!=null?String(r):`<${a}?>`})}const ie=/\{\$([^}]+)}/g;function S(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const s=t[r],i=e[r];if($(s)&&$(i)){if(!S(s,i))return!1}else if(s!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function $(t){return t!==null&&typeof t=="object"}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class E{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const f="[DEFAULT]";/**
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
 */class oe{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new te;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(he(e))try{this.getOrInitializeService({instanceIdentifier:f})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});a.resolve(s)}catch{}}}}clearInstance(e=f){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=f){return this.instances.has(e)}getOptions(e=f){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[s,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);a===c&&i.resolve(r)}return r}onInit(e,n){var a;const r=this.normalizeInstanceIdentifier(n),s=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ce(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=f){return this.component?this.component.multipleInstances?e:f:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ce(t){return t===f?void 0:t}function he(t){return t.instantiationMode==="EAGER"}/**
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
 */class le{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oe(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var o;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(o||(o={}));const de={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},fe=o.INFO,ue={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},pe=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),r=ue[e];if(r)console[r](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class me{constructor(e){this.name=e,this._logLevel=fe,this._logHandler=pe,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?de[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}/**
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
 */class ge{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(be(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function be(t){const e=t.getComponent();return e?.type==="VERSION"}const v="@firebase/app",N="0.9.19";/**
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
 */const u=new me("@firebase/app"),_e="@firebase/app-compat",Ee="@firebase/analytics-compat",ye="@firebase/analytics",Ie="@firebase/app-check-compat",De="@firebase/app-check",Se="@firebase/auth",ve="@firebase/auth-compat",Ce="@firebase/database",we="@firebase/database-compat",Ae="@firebase/functions",Be="@firebase/functions-compat",Oe="@firebase/installations",Te="@firebase/installations-compat",$e="@firebase/messaging",Ne="@firebase/messaging-compat",Re="@firebase/performance",Me="@firebase/performance-compat",He="@firebase/remote-config",Pe="@firebase/remote-config-compat",Fe="@firebase/storage",Le="@firebase/storage-compat",xe="@firebase/firestore",ke="@firebase/firestore-compat",Ue="firebase";/**
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
 */const C="[DEFAULT]",ze={[v]:"fire-core",[_e]:"fire-core-compat",[ye]:"fire-analytics",[Ee]:"fire-analytics-compat",[De]:"fire-app-check",[Ie]:"fire-app-check-compat",[Se]:"fire-auth",[ve]:"fire-auth-compat",[Ce]:"fire-rtdb",[we]:"fire-rtdb-compat",[Ae]:"fire-fn",[Be]:"fire-fn-compat",[Oe]:"fire-iid",[Te]:"fire-iid-compat",[$e]:"fire-fcm",[Ne]:"fire-fcm-compat",[Re]:"fire-perf",[Me]:"fire-perf-compat",[He]:"fire-rc",[Pe]:"fire-rc-compat",[Fe]:"fire-gcs",[Le]:"fire-gcs-compat",[xe]:"fire-fst",[ke]:"fire-fst-compat","fire-js":"fire-js",[Ue]:"fire-js-all"};/**
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
 */const y=new Map,w=new Map;function je(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function A(t){const e=t.name;if(w.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;w.set(e,t);for(const n of y.values())je(n,t);return!0}function st(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ve={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},l=new k("app","Firebase",Ve);/**
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
 */class We{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new E("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw l.create("app-deleted",{appName:this._name})}}function Ge(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:C,automaticDataCollectionEnabled:!1},e),r=a.name;if(typeof r!="string"||!r)throw l.create("bad-app-name",{appName:String(r)});if(n||(n=x()),!n)throw l.create("no-options");const s=y.get(r);if(s){if(S(n,s.options)&&S(a,s.config))return s;throw l.create("duplicate-app",{appName:r})}const i=new le(r);for(const h of w.values())i.addComponent(h);const c=new We(n,a,i);return y.set(r,c),c}function it(t=C){const e=y.get(t);if(!e&&t===C&&x())return Ge();if(!e)throw l.create("no-app",{appName:t});return e}function I(t,e,n){var a;let r=(a=ze[t])!==null&&a!==void 0?a:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),u.warn(c.join(" "));return}A(new E(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Je="firebase-heartbeat-database",Ye=1,m="firebase-heartbeat-store";let D=null;function U(){return D||(D=W(Je,Ye,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(m)}}}).catch(t=>{throw l.create("idb-open",{originalErrorMessage:t.message})})),D}async function Ke(t){try{return await(await U()).transaction(m).objectStore(m).get(z(t))}catch(e){if(e instanceof g)u.warn(e.message);else{const n=l.create("idb-get",{originalErrorMessage:e?.message});u.warn(n.message)}}}async function R(t,e){try{const a=(await U()).transaction(m,"readwrite");await a.objectStore(m).put(e,z(t)),await a.done}catch(n){if(n instanceof g)u.warn(n.message);else{const a=l.create("idb-set",{originalErrorMessage:n?.message});u.warn(a.message)}}}function z(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xe=1024,qe=30*24*60*60*1e3;class Ze{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new et(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=M();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=qe}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=M(),{heartbeatsToSend:n,unsentEntries:a}=Qe(this._heartbeatsCache.heartbeats),r=L(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function M(){return new Date().toISOString().substring(0,10)}function Qe(t,e=Xe){const n=[];let a=t.slice();for(const r of t){const s=n.find(i=>i.agent===r.agent);if(s){if(s.dates.push(r.date),H(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),H(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class et{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ne()?re().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ke(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return R(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return R(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function H(t){return L(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tt(t){A(new E("platform-logger",e=>new ge(e),"PRIVATE")),A(new E("heartbeat",e=>new Ze(e),"PRIVATE")),I(v,N,t),I(v,N,"esm2017"),I("fire-js","")}tt("");export{E as C,C as D,k as E,g as F,je as _,y as a,w as b,st as c,A as d,at as e,ne as f,it as g,rt as h,Ge as i,I as r,re as v};
