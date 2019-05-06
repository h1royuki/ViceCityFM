(function(t){function n(n){for(var e,s,r=n[0],l=n[1],c=n[2],d=0,p=[];d<r.length;d++)s=r[d],i[s]&&p.push(i[s][0]),i[s]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,n=0;n<o.length;n++){for(var a=o[n],e=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(e=!1)}e&&(o.splice(n--,1),t=s(s.s=a[0]))}return t}var e={},i={app:0},o=[];function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=e,s.d=function(t,n,a){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)s.d(a,e,function(n){return t[n]}.bind(null,e));return a},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"56d7":function(t,n,a){"use strict";a.r(n);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("Index")],1)},o=[],s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"background",style:{clipPath:"polygon("+t.background+")"}}),a("audio",{ref:"player",staticClass:"player",attrs:{loop:"true",src:t.stations?t.playerUrl:null}}),a("audio",{ref:"noise",staticClass:"player",attrs:{loop:"true",autoplay:"true",src:"./files/noise.ogg"}}),a("img",{staticClass:"logo",attrs:{src:t.logoSrc}}),a("div",{staticClass:"radio-text"},[t._v("radio")]),a("div",{staticClass:"radio-container"},[a("div",{staticClass:"volume"},[a("p",{staticClass:"name"},[t._v("volume")]),a("div",{staticClass:"slider"},[a("div",{staticClass:"slider-bg"}),a("div",{staticClass:"slider-volume",style:{width:t.volume+"%"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"slider-input",attrs:{type:"range",min:"0",max:"100",value:"50"},domProps:{value:t.volume},on:{__r:function(n){t.volume=n.target.value}}})])]),t.stations?a("div",{staticClass:"radio"},[a("div",{staticClass:"prev-station",on:{click:function(n){t.changeStation(t.getStation("prev",t.activeStation-1))}}},[a("p",{staticClass:"button"},[t._v("◀")])]),a("div",{staticClass:"stations"},[a("div",{staticClass:"stations-background"}),a("div",{staticClass:"prev"},[a("img",{staticClass:"img",attrs:{src:t.stations[t.getStation("prev",t.activeStation-1)].logo.url}})]),a("div",{staticClass:"active",on:{click:t.togglePlaying}},[a("img",{staticClass:"img",attrs:{src:t.stations[t.activeStation].logo.url}})]),a("div",{staticClass:"next"},[a("img",{staticClass:"img",attrs:{src:t.stations[t.getStation("next",t.activeStation+1)].logo.url}})])]),a("div",{staticClass:"next-station",on:{click:function(n){t.changeStation(t.getStation("next",t.activeStation+1))}}},[a("p",{staticClass:"button"},[t._v("▶")])])]):t._e()])])},r=[],l=a("aede"),c=(a("ac6a"),a("456d"),a("9530")),u=a.n(c),d=(a("a58a"),a("5118"));function p(){var t=Object(l["a"])(["\n      {\n        stations {\n          name\n          file {\n            url\n          }\n          logo {\n            url\n          }\n        }\n      }\n    "]);return p=function(){return t},t}var v={data:function(){return{logoSrc:"./images/logo.png",background:"8% 10%, 90% 13%, 87% 90%, 12% 95%",stations:null,activeStation:4,volume:100,paused:!1}},methods:{changeStation:function(t){this.noise.play(),this.activeStation=t},togglePlaying:function(){this.paused=!this.paused,this.paused?this.player.play():this.player.pause()},startPlaying:function(){var t=this,n=this.player.duration,a=Math.floor(Math.random()*n);this.player.currentTime=a,Object(d["setTimeout"])(function(){t.changeBackground(),t.noise.pause(),t.player.play()},1e3)},changeBackground:function(){this.background="\n      ".concat(this.getRandomInt(5,15),"% ").concat(this.getRandomInt(5,15),"%,\n      ").concat(this.getRandomInt(85,95),"% ").concat(this.getRandomInt(5,15),"%,\n      ").concat(this.getRandomInt(85,95),"% ").concat(this.getRandomInt(85,95),"%, \n      ").concat(this.getRandomInt(1,15),"% ").concat(this.getRandomInt(85,95),"%")},getRandomInt:function(t,n){return Math.floor(Math.random()*(n-t)+t)},getStation:function(t,n){return this.stations[n]||("next"===t?n-=Object.keys(this.stations).length:n=Object.keys(this.stations).length+n),n}},watch:{volume:function(t){this.volume=t;var n=t/100;this.player.volume=n,this.noise.volume=n}},mounted:function(){var t=this;this.noise.play(),this.player.addEventListener("loadedmetadata",function(){return t.startPlaying()})},computed:{player:function(){return this.$refs.player},noise:function(){return this.$refs.noise},playerUrl:function(){return this.stations[this.activeStation].file.url}},apollo:{stations:u()(p())}},f=v,g=a("2877"),h=Object(g["a"])(f,s,r,!1,null,null,null),m=h.exports,y={components:{Index:m}},b=y,C=Object(g["a"])(b,i,o,!1,null,null,null),S=C.exports,x=a("522d"),w=a("2c82");e["a"].use(x["a"]);var _=new w["a"]({uri:"https://api-euwest.graphcms.com/v1/cjv8drrdq21co01ghxl37m9wa/master"}),j=new x["a"]({defaultClient:_});e["a"].config.productionTip=!1,new e["a"]({apolloProvider:j,render:function(t){return t(S)}}).$mount("#app")},a58a:function(t,n,a){}});
//# sourceMappingURL=app.b92f414a.js.map