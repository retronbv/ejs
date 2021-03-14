/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *         http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;exports.escapeRegExpChars=function(n){return n?String(n).replace(regExpChars,"\\$&"):""};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(n){return _ENCODE_HTML_RULES[n]||n}var escapeFuncStr='var _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n';exports.escapeXML=function(n){return null==n?"":String(n).replace(_MATCH_HTML,encode_char)},exports.escapeXML.toString=function(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr},exports.shallowCopy=function(n,t){if(t=t||{},null!=n)for(var e in t)n[e]=t[e];return n},exports.shallowCopyFromList=function(n,t,e){if(e=e||[],t=t||{},null!=n)for(var r=0;r<e.length;r++){var a=e[r];void 0!==t[a]&&(n[a]=t[a])}return n},exports.cache={_data:{},set:function(n,t){this._data[n]=t},get:function(n){return this._data[n]},remove:function(n){delete this._data[n]},reset:function(){this._data={}}},exports.hyphenToCamel=function(n){return n.replace(/-[a-z]/g,function(n){return n[1].toUpperCase()})};