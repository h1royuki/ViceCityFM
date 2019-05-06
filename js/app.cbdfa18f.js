(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],p=0,d=[];p<r.length;p++)o=r[p],i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Index")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"background"}),a("audio",{ref:"player",staticClass:"player",attrs:{loop:"true",src:t.stations?t.playerUrl:null}}),a("audio",{ref:"noise",staticClass:"player",attrs:{loop:"true",autoplay:"true",src:"./files/noise.ogg"}}),a("img",{staticClass:"logo",attrs:{src:t.logoSrc}}),a("div",{staticClass:"radio-text"},[t._v("radio")]),a("div",{staticClass:"radio-container"},[a("div",{staticClass:"volume"},[a("p",{staticClass:"name"},[t._v("volume")]),a("div",{staticClass:"slider"},[a("div",{staticClass:"slider-bg"}),a("div",{staticClass:"slider-volume",style:{width:t.volume+"%"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"slider-input",attrs:{type:"range",min:"0",max:"100",value:"50"},domProps:{value:t.volume},on:{__r:function(e){t.volume=e.target.value}}})])]),t.stations?a("div",{staticClass:"radio"},[a("div",{staticClass:"prev-station",on:{click:function(e){t.changeStation(t.getStation("prev",t.activeStation-1))}}},[a("p",{staticClass:"button"},[t._v("◀")])]),a("div",{staticClass:"stations"},[a("div",{staticClass:"stations-background"}),a("div",{staticClass:"prev"},[a("img",{staticClass:"img",attrs:{src:t.stations[t.getStation("prev",t.activeStation-1)].logo.url}})]),a("div",{staticClass:"active",on:{click:t.togglePlaying}},[a("img",{staticClass:"img",attrs:{src:t.stations[t.activeStation].logo.url}})]),a("div",{staticClass:"next"},[a("img",{staticClass:"img",attrs:{src:t.stations[t.getStation("next",t.activeStation+1)].logo.url}})])]),a("div",{staticClass:"next-station",on:{click:function(e){t.changeStation(t.getStation("next",t.activeStation+1))}}},[a("p",{staticClass:"button"},[t._v("▶")])])]):t._e()])])},r=[],l=a("aede"),u=(a("ac6a"),a("456d"),a("9530")),c=a.n(u),p=(a("a58a"),a("5118"));function d(){var t=Object(l["a"])(["\n      {\n        stations {\n          name\n          file {\n            url\n          }\n          logo {\n            url\n          }\n        }\n      }\n    "]);return d=function(){return t},t}var v={data:function(){return{logoSrc:"./images/logo.png",stations:null,activeStation:4,volume:100,paused:!1}},methods:{changeStation:function(t){this.noise.play(),this.activeStation=t},togglePlaying:function(){this.paused=!this.paused,this.paused?this.player.play():this.player.pause()},startPlaying:function(){var t=this,e=this.player.duration,a=Math.floor(Math.random()*e);this.player.currentTime=a,Object(p["setTimeout"])(function(){t.noise.pause(),t.player.play()},1e3)},getStation:function(t,e){return this.stations[e]||("next"===t?e-=Object.keys(this.stations).length:e=Object.keys(this.stations).length+e),e}},watch:{volume:function(t){this.volume=t;var e=t/100;this.player.volume=e,this.noise.volume=e}},mounted:function(){var t=this;this.noise.play(),this.player.addEventListener("loadedmetadata",function(){return t.startPlaying()})},computed:{player:function(){return this.$refs.player},noise:function(){return this.$refs.noise},playerUrl:function(){return this.stations[this.activeStation].file.url}},apollo:{stations:c()(d())}},f=v,g=a("2877"),h=Object(g["a"])(f,o,r,!1,null,null,null),m=h.exports,y={components:{Index:m}},b=y,C=Object(g["a"])(b,i,s,!1,null,null,null),S=C.exports,x=a("522d"),w=a("2c82");n["a"].use(x["a"]);var _=new w["a"]({uri:"https://api-euwest.graphcms.com/v1/cjv8drrdq21co01ghxl37m9wa/master"}),j=new x["a"]({defaultClient:_});n["a"].config.productionTip=!1,new n["a"]({apolloProvider:j,render:function(t){return t(S)}}).$mount("#app")},a58a:function(t,e,a){}});
//# sourceMappingURL=app.cbdfa18f.js.map