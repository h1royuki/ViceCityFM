(function(t){function n(n){for(var e,o,r=n[0],l=n[1],u=n[2],d=0,v=[];d<r.length;d++)o=r[d],i[o]&&v.push(i[o][0]),i[o]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);c&&c(n);while(v.length)v.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,n=0;n<s.length;n++){for(var a=s[n],e=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(e=!1)}e&&(s.splice(n--,1),t=o(o.s=a[0]))}return t}var e={},i={app:0},s=[];function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(a,e,function(n){return t[n]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"56d7":function(t,n,a){"use strict";a.r(n);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("Index")],1)},s=[],o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"background",style:{clipPath:"polygon("+t.background+")"}}),a("audio",{ref:"player",staticClass:"player",attrs:{loop:"true",src:t.stations?t.playerUrl:null}}),a("audio",{ref:"noise",staticClass:"player",attrs:{loop:"true",src:"./files/noise.ogg"}}),a("img",{staticClass:"logo",attrs:{src:t.logoSrc}}),a("div",{staticClass:"radio-text"},[t._v("radio")]),a("div",{staticClass:"radio-container"},[a("div",{staticClass:"volume"},[a("p",{staticClass:"name"},[t._v("volume")]),a("div",{staticClass:"slider"},[a("div",{staticClass:"slider-bg"}),a("div",{staticClass:"slider-volume",style:{width:t.volume+"%"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"slider-input",attrs:{type:"range",min:"0",max:"100",value:"50"},domProps:{value:t.volume},on:{__r:function(n){t.volume=n.target.value}}})])]),t.stations?a("div",{staticClass:"radio"},[a("div",{staticClass:"prev-station",on:{click:function(n){return t.prevStation()}}},[a("p",{staticClass:"button"},[t._v("◀")])]),a("div",{staticClass:"stations"},[a("div",{staticClass:"stations-background"}),a("transition-group",{staticClass:"stations-animation",attrs:{name:"flip-list",tag:"div"}},t._l(t.stations,function(n,e){return a("div",{key:n.name},[e===t.activeStation-1?a("div",{staticClass:"prev"},[a("img",{staticClass:"img",attrs:{src:n.logo.url}})]):e===t.activeStation?a("div",{staticClass:"active",on:{click:t.togglePlaying}},[a("div",{staticClass:"playing-overlay"},[t.paused?a("div",{staticClass:"paused-icon"},[t._v("▶")]):a("div",{staticClass:"played-icon"},[t._v("▮▮")])]),a("img",{staticClass:"img",attrs:{src:t.stations[t.activeStation].logo.url}})]):e===t.activeStation+1?a("div",{staticClass:"next"},[a("img",{staticClass:"img",attrs:{src:n.logo.url}})]):e===t.activeStation+2||e===t.activeStation-2?a("div",{staticClass:"hidden"},[a("img",{staticClass:"img",attrs:{src:n.logo.url}})]):t._e()])}),0)],1),a("div",{staticClass:"next-station",on:{click:function(n){return t.nextStation()}}},[a("p",{staticClass:"button"},[t._v("▶")])])]):t._e()])])},r=[],l=a("aede"),u=a("9530"),c=a.n(u),d=(a("a58a"),a("5118"));function v(){var t=Object(l["a"])(["\n      {\n        stations {\n          name\n          file {\n            url\n          }\n          logo {\n            url\n          }\n        }\n      }\n    "]);return v=function(){return t},t}var p={data:function(){return{logoSrc:"./images/logo.png",background:"8% 10%, 90% 13%, 87% 90%, 12% 95%",stations:null,activeStation:4,volume:100,paused:!1}},methods:{nextStation:function(){var t=this.stations.shift();this.stations.push(t),this.noise.play(),this.paused=!1},prevStation:function(){var t=this.stations.pop();this.stations.unshift(t),this.noise.play(),this.paused=!1},togglePlaying:function(){this.paused?this.player.play():this.player.pause(),this.paused=!this.paused},startPlaying:function(){var t=this,n=this.player.duration,a=Math.floor(Math.random()*n);this.player.currentTime=a,Object(d["setTimeout"])(function(){t.changeBackground(),t.noise.pause(),t.player.play(),t.paused=!1},1e3)},changeBackground:function(){this.background="\n      ".concat(this.getRandomInt(5,15),"% ").concat(this.getRandomInt(5,15),"%,\n      ").concat(this.getRandomInt(85,95),"% ").concat(this.getRandomInt(5,15),"%,\n      ").concat(this.getRandomInt(85,95),"% ").concat(this.getRandomInt(85,95),"%, \n      ").concat(this.getRandomInt(1,15),"% ").concat(this.getRandomInt(85,95),"%")},getRandomInt:function(t,n){return Math.floor(Math.random()*(n-t)+t)},changeVolumeByScrollEvent:function(t){t>0?0!==this.volume&&(this.volume-5>0?this.volume=this.volume-5:this.volume=0):100!==this.volume&&(this.volume+5<100?this.volume=this.volume+5:this.volume=100)}},watch:{volume:function(t){this.volume=t;var n=t/100;this.player.volume=n,this.noise.volume=n}},mounted:function(){var t=this;this.noise.play(),window.addEventListener("wheel",function(n){return t.changeVolumeByScrollEvent(n.deltaY)}),this.player.addEventListener("loadedmetadata",function(){return t.startPlaying()})},computed:{player:function(){return this.$refs.player},noise:function(){return this.$refs.noise},playerUrl:function(){return this.stations[this.activeStation].file.url}},apollo:{stations:c()(v())}},h=p,f=a("2877"),m=Object(f["a"])(h,o,r,!1,null,null,null),g=m.exports,y={components:{Index:g}},C=y,b=Object(f["a"])(C,i,s,!1,null,null,null),S=b.exports,_=a("522d"),w=a("2c82");e["a"].use(_["a"]);var x=new w["a"]({uri:"https://api-euwest.graphcms.com/v1/cjv8drrdq21co01ghxl37m9wa/master"}),k=new _["a"]({defaultClient:x});e["a"].config.productionTip=!1,new e["a"]({apolloProvider:k,render:function(t){return t(S)}}).$mount("#app")},a58a:function(t,n,a){}});
//# sourceMappingURL=app.1249e640.js.map