!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(function(){return(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{jsonFormula:()=>x});const r={substitute:{_func:function(t){var e=t[0].toString(),r=t[1].toString(),n=t[2].toString();if(t.length<=3)return e.replace(new RegExp(r,"g"),n);for(var i=t[3].valueOf(),s=-1,u=0;u<i;u+=1){s+=1;var o=e.slice(s).indexOf(r);if(-1===o)return e;s+=o}return e.slice(0,s)+e.slice(s).replace(r,n)},_signature:[{types:[2]},{types:[2]},{types:[2]},{types:[0],optional:!0}]},value:{_func:function(t){var e=(t[0]||{})[t[1]];return void 0===e?null:e},_signature:[{types:[4,3,7]},{types:[2,0]}]}};function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,i,s=[],u=!0,o=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);u=!0);}catch(t){o=!0,i=t}finally{try{u||null==r.return||r.return()}finally{if(o)throw i}}return s}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var h=0,l=2,f=3,p=5,_=7,d=8,y=9;const v=new function(){var t,e="UnquotedIdentifier",n="QuotedIdentifier",s="Rbracket",v="Rparen",g="Comma",m="Colon",b="Concatenate",x="Rbrace",k="Number",w="Current",S="Global",O="Field",j="Expref",E="Pipe",P="Or",T="And",I="Add",A="Subtract",M="Multiply",N="Power",F="Divide",R="EQ",L="GT",C="LT",D="GTE",H="LTE",U="NE",B="Flatten",J="Star",z="Filter",G="Dot",K="Lbrace",Q="Lbracket",V="Lparen",q="Literal",W={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},$={};function Z(t,e){return t>="0"&&t<="9"||e&&"-"===t||"."===t}function X(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"||t>="0"&&t<="9"||"_"===t}function Y(t){return null!==t&&"[object Array]"===Object.prototype.toString.call(t)}function tt(t){return null==t?t:Y(t)?t.map((function(t){return tt(t)})):t.valueOf()}function et(t){return null==t?"":t.toString()}function rt(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}function nt(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null===t)return _;var r=e?t.valueOf():t;switch(Object.prototype.toString.call(r)){case"[object String]":return l;case"[object Number]":return h;case"[object Array]":return f;case"[object Boolean]":return p;case"[object Null]":return _;case"[object Object]":return r.jmespathType===j?6:4;default:return 4}}function it(t){return[nt(t),nt(t,!1)]}function st(t,e){var r=tt(t),n=tt(e);if(r===n)return!0;if(Object.prototype.toString.call(r)!==Object.prototype.toString.call(n))return!1;if(!0===Y(r)){if(r.length!==n.length)return!1;for(var i=0;i<r.length;i+=1)if(!1===st(r[i],n[i]))return!1;return!0}if(!0===rt(r)){var s={};for(var u in r)if(hasOwnProperty.call(r,u)){if(!1===st(r[u],n[u]))return!1;s[u]=!0}for(var o in n)if(hasOwnProperty.call(n,o)&&!0!==s[o])return!1;return!0}return!1}function ut(t){if(null===t)return!0;var e=tt(t);if(""===e||!1===e||null===e)return!0;if(Y(e)&&0===e.length)return!0;if(rt(e)){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))return!1;return!0}return!e}function ot(t){var e=tt(t);if(null===e)return 0;if(e instanceof Array)return 0;if("number"==typeof e)return e;if("string"==typeof e){var r=parseFloat(e);return Number.isNaN(r)?0:r}if("boolean"==typeof e)return e?1:0;throw new Error("need to coerce number")}function ct(t,e,r){if(Y(t)&&Y(e)){var n,i=Math.min(t.length,e.length),s=[];for(n=0;n<i;n+=1)if(Y(t[n])||Y(e[n]))s.push(ct(t[n],e[n],r));else if("*"===r)s.push(t[n]*e[n]);else{if("&"!==r)throw new Error("unimplemented");s.push(t[n]+e[n])}for(n=i;n<Math.max(t.length,e.length);n+=1)"&"===r?s.push(""):"*"===r&&s.push(0);return s}if(Y(t)||Y(e)){var o=u(Y(t)?[t,e]:[e,t],2),c=o[0],a=o[1];if("*"===r)return c.map((function(t){return ot(t)*ot(a)}));if("&"===r)return c.map((function(t){return t+a}))}if("*"===r)return ot(t)*ot(e);if("&"===r)return t+e;throw new Error("unimplemented array operator: ".concat(r))}function at(t,e,r,n){var i=t[0];if(-1!==e.findIndex((function(t){return 1===t||i===t})))return r;if(4===i)throw new Error("TypeError: ".concat(n," expected argument to be type ").concat(W[e[0]]," but received type ").concat(W[i]," instead."));var s=-1;if(i===f&&e.includes(y)&&e.includes(d)&&(s=r.length>0&&"string"==typeof r[0]?y:d),-1===s&&[y,d,f].includes(i)&&(s=e.find((function(t){return[y,d,f].includes(t)}))),-1===s&&(s=u(e,1)[0]),s===y||s===d||s===f){if(s===f)return i===d||i===y?r:null===r?[]:[r];var o=s===d?h:l;if(i===f){for(var c=r.slice(),a=0;a<c.length;a+=1){var v=it(c[a]);c[a]=at(v,[o],c[a],n)}return c}if([h,l,_,p].includes(o))return[at(t,[o],r,n)]}else{if(s===h)return i===l?ot(r):i===p&&r?1:0;if(s===l)return i===_||4===i?"":r.toString();if(s===p)return!!r;if(4===s&&4===t[1])return r}throw new Error("unhandled argument")}t="function"==typeof String.prototype.trimLeft?function(t){return t.trimLeft()}:function(t){return t.match(/^\s*(.*)/)[1]};var ht={".":G,",":g,":":m,"{":K,"}":x,"]":s,"(":V,")":v,"@":w},lt={"<":!0,">":!0,"=":!0,"!":!0},ft={" ":!0,"\t":!0,"\n":!0};function pt(t,e){var r=t[e];return"$"===r?t.length>e&&X(t[e+1]):r>="a"&&r<="z"||r>="A"&&r<="Z"||"_"===r}function _t(t,e,r){if(null!==t&&t===G)return!1;if("$"!==e[r])return!1;for(var n=r+1;n<e.length&&X(e[n]);)n+=1;var i=e.slice(r,n);return!!$[i]}function dt(){}dt.prototype={tokenize:function(t){var r,i,s,u=[];for(this._current=0;this._current<t.length;){var o=u.length?u.slice(-1)[0].type:null;if(_t(o,t,this._current))u.push(this._consumeGlobal(t));else if(pt(t,this._current))r=this._current,i=this._consumeUnquotedIdentifier(t),u.push({type:e,value:i,start:r});else if(void 0!==ht[t[this._current]])u.push({type:ht[t[this._current]],value:t[this._current],start:this._current}),this._current+=1;else if("-"===t[this._current]&&o!==k&&o!==v||Z(t[this._current],!1))s=this._consumeNumber(t),u.push(s);else if("["===t[this._current])s=this._consumeLBracket(t),u.push(s);else if('"'===t[this._current])r=this._current,i=this._consumeQuotedIdentifier(t),u.push({type:n,value:i,start:r});else if("'"===t[this._current])r=this._current,i=this._consumeRawStringLiteral(t),u.push({type:q,value:i,start:r});else if("`"===t[this._current]){r=this._current;var c=this._consumeLiteral(t);u.push({type:q,value:c,start:r})}else if(void 0!==lt[t[this._current]])u.push(this._consumeOperator(t));else if(void 0!==ft[t[this._current]])this._current+=1;else if("&"===t[this._current])r=this._current,this._current+=1,"&"===t[this._current]?(this._current+=1,u.push({type:T,value:"&&",start:r})):o===g||o===V?u.push({type:j,value:"&",start:r}):u.push({type:b,value:"&",start:r});else if("+"===t[this._current])r=this._current,this._current+=1,u.push({type:I,value:"+",start:r});else if("-"===t[this._current])r=this._current,this._current+=1,u.push({type:A,value:"-",start:r});else if("*"===t[this._current]){r=this._current,this._current+=1;var a=u.length&&u.slice(-1)[0].type;0===u.length||[Q,G,E,T,P,g,m].includes(a)?u.push({type:J,value:"*",start:r}):u.push({type:M,value:"*",start:r})}else if("/"===t[this._current])r=this._current,this._current+=1,u.push({type:F,value:"/",start:r});else if("^"===t[this._current])r=this._current,this._current+=1,u.push({type:N,value:"^",start:r});else{if("|"!==t[this._current]){var h=new Error("Unknown character:".concat(t[this._current]));throw h.name="LexerError",h}r=this._current,this._current+=1,"|"===t[this._current]?(this._current+=1,u.push({type:P,value:"||",start:r})):u.push({type:E,value:"|",start:r})}}return u},_consumeUnquotedIdentifier:function(t){var e=this._current;for(this._current+=1;this._current<t.length&&X(t[this._current]);)this._current+=1;return t.slice(e,this._current)},_consumeQuotedIdentifier:function(t){var e=this._current;this._current+=1;for(var r=t.length;'"'!==t[this._current]&&this._current<r;){var n=this._current;"\\"!==t[n]||"\\"!==t[n+1]&&'"'!==t[n+1]?n+=1:n+=2,this._current=n}return this._current+=1,JSON.parse(t.slice(e,this._current))},_consumeRawStringLiteral:function(t){var e=this._current;this._current+=1;for(var r=t.length;"'"!==t[this._current]&&this._current<r;){var n=this._current;"\\"!==t[n]||"\\"!==t[n+1]&&"'"!==t[n+1]?n+=1:n+=2,this._current=n}return this._current+=1,t.slice(e+1,this._current-1).replace("\\'","'")},_consumeNumber:function(t){var e=this._current;this._current+=1;for(var r=t.length;Z(t[this._current],!1)&&this._current<r;)this._current+=1;var n,i=t.slice(e,this._current);return n=i.includes(".")?parseFloat(i):parseInt(i,10),{type:k,value:n,start:e}},_consumeLBracket:function(t){var e=this._current;return this._current+=1,"?"===t[this._current]?(this._current+=1,{type:z,value:"[?",start:e}):"]"===t[this._current]?(this._current+=1,{type:B,value:"[]",start:e}):{type:Q,value:"[",start:e}},_consumeGlobal:function(t){var e=this._current;for(this._current+=1;this._current<t.length&&X(t[this._current]);)this._current+=1;var r=t.slice(e,this._current);return{type:S,value:$[r],start:e}},_consumeOperator:function(t){var e=this._current,r=t[e];return this._current+=1,"!"===r?"="===t[this._current]?(this._current+=1,{type:U,value:"!=",start:e}):{type:"Not",value:"!",start:e}:"<"===r?"="===t[this._current]?(this._current+=1,{type:H,value:"<=",start:e}):{type:C,value:"<",start:e}:">"===r?"="===t[this._current]?(this._current+=1,{type:D,value:">=",start:e}):{type:L,value:">",start:e}:"="===t[this._current]?(this._current+=1,{type:R,value:"==",start:e}):{type:R,value:"=",start:e}},_consumeLiteral:function(e){this._current+=1;for(var r,n=this._current,i=e.length;"`"!==e[this._current]&&this._current<i;){var s=this._current;"\\"!==e[s]||"\\"!==e[s+1]&&"`"!==e[s+1]?s+=1:s+=2,this._current=s}var u=t(e.slice(n,this._current));return u=u.replace("\\`","`"),r=this._looksLikeJSON(u)?JSON.parse(u):JSON.parse('"'.concat(u,'"')),this._current+=1,r},_looksLikeJSON:function(t){if(""===t)return!1;if('[{"'.indexOf(t[0])>=0)return!0;if(["true","false","null"].indexOf(t)>=0)return!0;if(!("-0123456789".indexOf(t[0])>=0))return!1;try{return JSON.parse(t),!0}catch(t){return!1}}};var yt={};function vt(){}function gt(t){this.runtime=t}function mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.functionTable=i(i({abs:{_func:this._functionAbs,_signature:[{types:[h]}]},avg:{_func:this._functionAvg,_signature:[{types:[d]}]},ceil:{_func:this._functionCeil,_signature:[{types:[h]}]},contains:{_func:this._functionContains,_signature:[{types:[l,f]},{types:[1]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[l]},{types:[l]}]},floor:{_func:this._functionFloor,_signature:[{types:[h]}]},length:{_func:this._functionLength,_signature:[{types:[l,f,4]}]},map:{_func:this._functionMap,_signature:[{types:[6]},{types:[f]}]},max:{_func:this._functionMax,_signature:[{types:[f,d,y]}]},merge:{_func:this._functionMerge,_signature:[{types:[4],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[f]},{types:[6]}]},sum:{_func:this._functionSum,_signature:[{types:[d]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[l]},{types:[l]}]},min:{_func:this._functionMin,_signature:[{types:[f,d,y]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[f]},{types:[6]}]},type:{_func:this._functionType,_signature:[{types:[1]}]},keys:{_func:this._functionKeys,_signature:[{types:[1]}]},values:{_func:this._functionValues,_signature:[{types:[1]}]},sort:{_func:this._functionSort,_signature:[{types:[f,y,d]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[f]},{types:[6]}]},join:{_func:this._functionJoin,_signature:[{types:[l]},{types:[y]}]},reverse:{_func:this._functionReverse,_signature:[{types:[l,f]}]},to_array:{_func:this._functionToArray,_signature:[{types:[1]}]},to_string:{_func:this._functionToString,_signature:[{types:[1]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[1]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[1],variadic:!0}]},and:{_func:this._functionAnd,_signature:[{types:[1]},{types:[1]}]},or:{_func:this._functionOr,_signature:[{types:[1]},{types:[1]}]},not:{_func:this._functionNot,_signature:[{types:[1]}]},true:{_func:function(){return!0},_signature:[]},false:{_func:function(){return!1},_signature:[]},if:{_func:this._functionIf,_signature:[{types:[1]},{types:[1]},{types:[1]}]}},r),t)}yt.EOF=0,yt.UnquotedIdentifier=0,yt.QuotedIdentifier=0,yt.Rbracket=0,yt.Rparen=0,yt[g]=0,yt.Rbrace=0,yt.Number=0,yt.Current=0,yt.Global=0,yt.Field=0,yt.Expref=0,yt[E]=1,yt[P]=2,yt[T]=3,yt[I]=6,yt[A]=6,yt[b]=7,yt[M]=7,yt[F]=7,yt[N]=7,yt[R]=5,yt[L]=5,yt[C]=5,yt[D]=5,yt[H]=5,yt[U]=5,yt.Flatten=9,yt.Star=20,yt.Filter=21,yt[G]=40,yt.Not=45,yt.Lbrace=50,yt[Q]=55,yt.Lparen=60,vt.prototype={parse:function(t){this._loadTokens(t),this.index=0;var e=this.expression(0);if("EOF"!==this._lookahead(0)){var r=this._lookaheadToken(0),n=new Error("Unexpected token type: ".concat(r.type,", value: ").concat(r.value));throw n.name="ParserError",n}return e},_loadTokens:function(t){var e=(new dt).tokenize(t);e.push({type:"EOF",value:"",start:t.length}),this.tokens=e},expression:function(t){var e=this._lookaheadToken(0);this._advance();for(var r=this.nud(e),n=this._lookahead(0);t<yt[n];)this._advance(),r=this.led(n,r),n=this._lookahead(0);return r},_lookahead:function(t){return this.tokens[this.index+t].type},_lookaheadToken:function(t){return this.tokens[this.index+t]},_advance:function(){this.index+=1},nud:function(t){var r,i,u,o,c;switch(t.type){case q:return{type:"Literal",value:t.value};case k:return{type:"Number",value:t.value};case e:return{type:"Field",name:t.value};case n:if(u={type:"Field",name:t.value},this._lookahead(0)===V)throw new Error("Quoted identifier not allowed for function names.");return u;case"Not":return{type:"NotExpression",children:[r=this.expression(yt.Not)]};case J:return{type:"ValueProjection",children:[{type:"Identity"},r=this._lookahead(0)===s?{type:"Identity"}:this._parseProjectionRHS(yt.Star)]};case z:return this.led(t.type,{type:"Identity"});case K:return this._parseMultiselectHash();case B:return{type:"Projection",children:[{type:B,children:[{type:"Identity"}]},r=this._parseProjectionRHS(yt.Flatten)]};case Q:return this._lookahead(1)===g||(c=this._lookahead(1),[b,P,T,I,A,M,N,F,R,L,C,D,H,U].includes(c))?this._parseMultiselectList():this._lookahead(0)===k||this._lookahead(0)===m?(r=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},r)):this._lookahead(0)===J&&this._lookahead(1)===s?(this._advance(),this._advance(),{type:"Projection",children:[{type:"Identity"},r=this._parseProjectionRHS(yt.Star)]}):this._parseMultiselectList();case w:return{type:w};case S:return{type:S,value:t.value};case O:return{type:O};case j:return{type:"ExpressionReference",children:[i=this.expression(yt.Expref)]};case V:for(o=[];this._lookahead(0)!==v;)this._lookahead(0)===w?(i={type:w},this._advance()):i=this.expression(0),o.push(i);return this._match(v),o[0];default:this._errorToken(t)}},led:function(t,e){var r,n,i,u,o,c,a;switch(t){case b:return{type:"ConcatenateExpression",children:[e,n=this.expression(yt.Concatenate)]};case G:return c=yt.Dot,this._lookahead(0)!==J?{type:"Subexpression",children:[e,n=this._parseDotRHS(c)]}:(this._advance(),{type:"ValueProjection",children:[e,n=this._parseProjectionRHS(c)]});case E:return n=this.expression(yt.Pipe),{type:E,children:[e,n]};case P:return{type:"OrExpression",children:[e,n=this.expression(yt.Or)]};case T:return{type:"AndExpression",children:[e,n=this.expression(yt.And)]};case I:return{type:"AddExpression",children:[e,n=this.expression(yt.Add)]};case A:return{type:"SubtractExpression",children:[e,n=this.expression(yt.Subtract)]};case M:return{type:"MultiplyExpression",children:[e,n=this.expression(yt.Multiply)]};case F:return{type:"DivideExpression",children:[e,n=this.expression(yt.Divide)]};case N:return{type:"PowerExpression",children:[e,n=this.expression(yt.Power)]};case V:for(i=e.name,u=[];this._lookahead(0)!==v;)this._lookahead(0)===w?(o={type:w},this._advance()):o=this.expression(0),this._lookahead(0)===g&&this._match(g),u.push(o);return this._match(v),{type:"Function",name:i,children:u};case z:return r=this.expression(0),this._match(s),{type:"FilterProjection",children:[e,n=this._lookahead(0)===B?{type:"Identity"}:this._parseProjectionRHS(yt.Filter),r]};case B:return{type:"Projection",children:[{type:B,children:[e]},this._parseProjectionRHS(yt.Flatten)]};case R:case U:case L:case D:case C:case H:return this._parseComparator(e,t);case Q:return(a=this._lookaheadToken(0)).type===k||a.type===m?(n=this._parseIndexExpression(),this._projectIfSlice(e,n)):(this._match(J),this._match(s),{type:"Projection",children:[e,n=this._parseProjectionRHS(yt.Star)]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(t){if(this._lookahead(0)!==t){var e=this._lookaheadToken(0),r=new Error("Expected ".concat(t,", got: ").concat(e.type));throw r.name="ParserError",r}this._advance()},_errorToken:function(t){var e=new Error("Invalid token (".concat(t.type,'): "').concat(t.value,'"'));throw e.name="ParserError",e},_parseIndexExpression:function(){if(this._lookahead(0)===m||this._lookahead(1)===m)return this._parseSliceExpression();var t={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(s),t},_projectIfSlice:function(t,e){var r={type:"IndexExpression",children:[t,e]};return"Slice"===e.type?{type:"Projection",children:[r,this._parseProjectionRHS(yt.Star)]}:r},_parseSliceExpression:function(){for(var t=[null,null,null],e=0,r=this._lookahead(0);r!==s&&e<3;){if(r===m)e+=1,this._advance();else{if(r!==k){var n=this._lookahead(0),i=new Error("Syntax error, unexpected token: ".concat(n.value,"(").concat(n.type,")"));throw i.name="Parsererror",i}t[e]=this._lookaheadToken(0).value,this._advance()}r=this._lookahead(0)}return this._match(s),{type:"Slice",children:t}},_parseComparator:function(t,e){return{type:"Comparator",name:e,children:[t,this.expression(yt[e])]}},_parseDotRHS:function(t){var r=this._lookahead(0);return[e,n,J].indexOf(r)>=0?this.expression(t):r===Q?(this._match(Q),this._parseMultiselectList()):r===K?(this._match(K),this._parseMultiselectHash()):void 0},_parseProjectionRHS:function(t){var e;if(yt[this._lookahead(0)]<10)e={type:"Identity"};else if(this._lookahead(0)===Q)e=this.expression(t);else if(this._lookahead(0)===z)e=this.expression(t);else{if(this._lookahead(0)!==G){var r=this._lookaheadToken(0),n=new Error("Sytanx error, unexpected token: ".concat(r.value,"(").concat(r.type,")"));throw n.name="ParserError",n}this._match(G),e=this._parseDotRHS(t)}return e},_parseMultiselectList:function(){for(var t=[];this._lookahead(0)!==s;){var e=this.expression(0);if(t.push(e),this._lookahead(0)===g&&(this._match(g),this._lookahead(0)===s))throw new Error("Unexpected token Rbracket")}return this._match(s),{type:"MultiSelectList",children:t}},_parseMultiselectHash:function(){for(var t,r,i,s=[],u=[e,n];;){if(t=this._lookaheadToken(0),u.indexOf(t.type)<0)throw new Error("Expecting an identifier token, got: ".concat(t.type));if(r=t.value,this._advance(),this._match(m),i={type:"KeyValuePair",name:r,value:this.expression(0)},s.push(i),this._lookahead(0)===g)this._match(g);else if(this._lookahead(0)===x){this._match(x);break}}return{type:"MultiSelectHash",children:s}}},gt.prototype={search:function(t,e){return this.visit(t,e)},visit:function(t,e){var r,n,i,s,a,h,f,p,_,d,v,g,m,b,x,k,O,P,T,I,A,M,N,F;switch(t.type){case"Field":return null!==e&&rt(e)?void 0===(h=e[t.name])?null:h:null;case"Subexpression":for(i=this.visit(t.children[0],e),_=1;_<t.children.length;_+=1)if(null===(i=this.visit(t.children[1],i)))return null;return i;case"IndexExpression":case E:return f=this.visit(t.children[0],e),this.visit(t.children[1],f);case"Index":return Y(e)?((g=t.value)<0&&(g=e.length+g),void 0===(i=e[g])&&(i=null),i):null;case"Slice":if(!Y(e))return null;m=t.children.slice(0);var J=u(this.computeSliceParams(e.length,m),3);if(b=J[0],x=J[1],i=[],(k=J[2])>0)for(_=b;_<x;_+=k)i.push(e[_]);else for(_=b;_>x;_+=k)i.push(e[_]);return i;case"Projection":if(!Y(v=this.visit(t.children[0],e)))return null;for(p=[],_=0;_<v.length;_+=1)null!==(n=this.visit(t.children[1],v[_]))&&p.push(n);return p;case"ValueProjection":if(!rt(tt(v=this.visit(t.children[0],e))))return null;for(p=[],O=function(t){for(var e=Object.keys(t),r=[],n=0;n<e.length;n+=1)r.push(t[e[n]]);return r}(v),_=0;_<O.length;_+=1)null!==(n=this.visit(t.children[1],O[_]))&&p.push(n);return p;case"FilterProjection":if(!Y(v=this.visit(t.children[0],e)))return null;for(P=[],T=[],_=0;_<v.length;_+=1)ut(r=this.visit(t.children[2],v[_]))||P.push(v[_]);for(var z=0;z<P.length;z+=1)null!==(n=this.visit(t.children[1],P[z]))&&T.push(n);return T;case"Comparator":switch(s=this.visit(t.children[0],e),a=this.visit(t.children[1],e),t.name){case R:i=st(s,a);break;case U:i=!st(s,a);break;case L:i=s>a;break;case D:i=s>=a;break;case C:i=s<a;break;case H:i=s<=a;break;default:throw new Error("Unknown comparator: ".concat(t.name))}return i;case B:if(!Y(I=this.visit(t.children[0],e)))return null;for(A=[],_=0;_<I.length;_+=1){var G;Y(n=I[_])?(G=A).push.apply(G,function(t){if(Array.isArray(t))return c(t)}(F=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(F)||o(F)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):A.push(n)}return A;case"Identity":case w:return e;case"MultiSelectList":if(null===e)return null;for(p=[],_=0;_<t.children.length;_+=1)p.push(this.visit(t.children[_],e));return p;case"MultiSelectHash":if(null===e)return null;for(p={},_=0;_<t.children.length;_+=1)p[(d=t.children[_]).name]=this.visit(d.value,e);return p;case"OrExpression":return ut(r=this.visit(t.children[0],e))&&(r=this.visit(t.children[1],e)),r;case"AndExpression":return!0===ut(s=this.visit(t.children[0],e))?s:this.visit(t.children[1],e);case"AddExpression":return ot(s=this.visit(t.children[0],e))+ot(this.visit(t.children[1],e));case"ConcatenateExpression":return s=this.visit(t.children[0],e),a=this.visit(t.children[1],e),ct(s=at(it(s),[l,y],s,"concatenate"),a=at(it(a),[l,y],a,"concatenate"),"&");case"SubtractExpression":return(s=this.visit(t.children[0],e))-this.visit(t.children[1],e);case"MultiplyExpression":return ct(s=this.visit(t.children[0],e),a=this.visit(t.children[1],e),"*");case"DivideExpression":return(s=this.visit(t.children[0],e))/this.visit(t.children[1],e);case"PowerExpression":return s=this.visit(t.children[0],e),Math.pow(s,this.visit(t.children[1],e));case"NotExpression":return ut(s=this.visit(t.children[0],e));case"Literal":case"Number":case S:return t.value;case"Function":if("if"===t.name)return this.runtime.callFunction(t.name,t.children,e);for(M=[],_=0;_<t.children.length;_+=1)M.push(this.visit(t.children[_],e));return this.runtime.callFunction(t.name,M);case"ExpressionReference":return(N=u(t.children,1)[0]).jmespathType=j,N;default:throw new Error("Unknown node type: ".concat(t.type))}},computeSliceParams:function(t,e){var r=e[0],n=e[1],i=e[2],s=[null,null,null];if(null===i)i=1;else if(0===i){var u=new Error("Invalid slice, step cannot be 0");throw u.name="RuntimeError",u}var o=i<0;return r=null===r?o?t-1:0:this.capSliceRange(t,r,i),n=null===n?o?-1:t:this.capSliceRange(t,n,i),s[0]=r,s[1]=n,s[2]=i,s},capSliceRange:function(t,e,r){return e<0?(e+=t)<0&&(e=r<0?-1:0):e>=t&&(e=r<0?t-1:t),e}},mt.prototype={callFunction:function(t,e,r){var n=this.functionTable[t];if(void 0===n)throw new Error("Unknown function: ".concat(t,"()"));return this._validateArgs(t,e,n._signature),n._func.call(this,e,r)},_validateArgs:function(t,e,r){if(0!==r.length){var n,i,s;if(r[r.length-1].variadic){if(e.length<r.length)throw n=1===r.length?" argument":" arguments",new Error("ArgumentError: ".concat(t,"() ")+"takes at least".concat(r.length).concat(n," but received ").concat(e.length))}else if(e.length!==r.length&&!r[r.length-1].optional)throw n=1===r.length?" argument":" arguments",new Error("ArgumentError: ".concat(t,"() ")+"takes ".concat(r.length).concat(n," but received ").concat(e.length));for(var u=Math.min(r.length,e.length),o=0;o<u;o+=1)i=r[o].types,c=e[o],h=i,l=void 0,null!==(l=c)&&!Array.isArray(l)&&"object"===a(l)&&"Object"!==l.constructor.name&&h.includes(10)||(s=it(e[o]),e[o]=at(s,i,e[o],t))}var c,h,l},_functionStartsWith:function(t){return 0===tt(t[0]).lastIndexOf(tt(t[1]))},_functionEndsWith:function(t){var e=tt(t[0]),r=tt(t[1]);return-1!==e.indexOf(r,e.length-r.length)},_functionReverse:function(t){var e=tt(t[0]);if(nt(e)===l){for(var r="",n=e.length-1;n>=0;n-=1)r+=e[n];return r}var i=t[0].slice(0);return i.reverse(),i},_functionAbs:function(t){return Math.abs(t[0])},_functionCeil:function(t){return Math.ceil(t[0])},_functionAvg:function(t){for(var e=0,r=t[0],n=0;n<r.length;n+=1)e+=r[n];return e/r.length},_functionContains:function(t){return tt(t[0]).indexOf(tt(t[1]))>=0},_functionFloor:function(t){return Math.floor(t[0])},_functionLength:function(t){var e=tt(t[0]);return rt(e)?Object.keys(e).length:Y(e)?e.length:et(e).length},_functionMap:function(t){for(var e=[],r=this._interpreter,n=t[0],i=t[1],s=0;s<i.length;s+=1)e.push(r.visit(n,i[s]));return e},_functionMerge:function(t){for(var e={},r=function(r){var n=t[r];Object.keys(n).forEach((function(t){e[t]=n[t]}))},n=0;n<t.length;n+=1)r(n);return e},_functionMax:function(t){return t[0].length>0?nt(t[0][0])===h?t[0].reduce((function(t,e){return ot(t)>=ot(e)?t:e}),t[0][0]):t[0].reduce((function(t,e){return et(e).localeCompare(et(t))<0?t:e}),t[0][0]):null},_functionMin:function(t){if(t[0].length>0){if(nt(t[0][0])===h)return t[0].reduce((function(t,e){return ot(t)<=ot(e)?t:e}),t[0][0]);for(var e=t[0],r=e[0],n=1;n<e.length;n+=1)et(e[n]).localeCompare(et(r))<0&&(r=e[n]);return r}return null},_functionSum:function(t){for(var e=0,r=t[0],n=0;n<r.length;n+=1)e+=1*r[n];return e},_functionAnd:function(t){return!!tt(t[0])&&!!tt(t[1])},_functionIf:function(t,e){var r=this._interpreter,n=t[0],i=t[1],s=t[2];return tt(r.visit(n,e))?r.visit(i,e):r.visit(s,e)},_functionOr:function(t){return!!tt(t[0])||!!tt(t[1])},_functionNot:function(t){return!tt(t[0])},_functionType:function(t){switch(nt(t[0])){case h:return"number";case l:return"string";case f:return"array";case 4:return"object";case p:return"boolean";case 6:return"expref";case _:return"null"}},_functionKeys:function(t){return Object.keys(t[0])},_functionValues:function(t){return Object.values(t[0])},_functionJoin:function(t){var e=t[0];return t[1].join(e)},_functionToArray:function(t){return nt(t[0])===f?t[0]:[t[0]]},_functionToString:function(t){return nt(t[0])===l?t[0]:JSON.stringify(t[0])},_functionToNumber:function(t){var e=nt(t[0]);return e===h?t[0]:e===l?ot(t[0]):null},_functionNotNull:function(t){for(var e=0;e<t.length;e+=1)if(nt(t[e])!==_)return t[e];return null},_functionSort:function(t){var e=t[0].slice(0);if(e.length>0){var r=nt(t[0][0])===h?ot:et;e.sort((function(t,e){var n=r(t),i=r(e);return n<i?-1:n>i?1:0}))}return e},_functionSortBy:function(t){var e=t[0].slice(0);if(0===e.length)return e;var r=this._interpreter,n=t[1],i=nt(r.visit(n,e[0]));if([h,l].indexOf(i)<0)throw new Error("TypeError");for(var s=[],o=0;o<e.length;o+=1)s.push([o,e[o]]);s.sort((function(t,e){var s=r.visit(n,t[1]),u=r.visit(n,e[1]);if(nt(s)!==i)throw new Error("TypeError: expected ".concat(i,", received ").concat(nt(s)));if(nt(u)!==i)throw new Error("TypeError: expected ".concat(i,", received ").concat(nt(u)));return s>u?1:s<u?-1:t[0]-e[0]}));for(var c=0;c<s.length;c+=1){var a=u(s[c],2);e[c]=a[1]}return e},_functionMaxBy:function(t){for(var e,r,n=t[1],i=t[0],s=this.createKeyFunction(n,[h,l]),u=-1/0,o=0;o<i.length;o+=1)(r=s(i[o]))>u&&(u=r,e=i[o]);return e},_functionMinBy:function(t){for(var e,r,n=t[1],i=t[0],s=this.createKeyFunction(n,[h,l]),u=1/0,o=0;o<i.length;o+=1)(r=s(i[o]))<u&&(u=r,e=i[o]);return e},createKeyFunction:function(t,e){var r=this._interpreter;return function(n){var i=r.visit(t,n);if(e.indexOf(nt(i))<0){var s="TypeError: expected one of ".concat(e,", received ").concat(nt(i));throw new Error(s)}return i}}},this.tokenize=function(t){return(new dt).tokenize(t)},this.compile=function(t){return(new vt).parse(t)},this.search=function(t,e,r,n){var i=new vt,s=new mt(n),u=new gt(s);s._interpreter=u,e&&($=e);var o=i.parse(r);return u.search(o,t)},this.strictDeepEqual=st};function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=v.search(t,e,r,m({},n));return i}return e})()}));
//# sourceMappingURL=json-formula.js.map