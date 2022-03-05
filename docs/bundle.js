(()=>{"use strict";var t={};function e(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}function i(t,e){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),Object.create,Object.create;const n=function(){function t(t,e,i){this.canvas=t,this.ctx=e,this.pixels=i}return t.prototype.getMappedImage=function(){for(var t=[],e=0;e<this.canvas.height;e++){for(var i=[],n=0;n<this.canvas.width;n++){var r=this.pixels.data[4*(e*this.pixels.width+n)],o=this.pixels.data[4*(e*this.pixels.width+n)+1],a=this.pixels.data[4*(e*this.pixels.width+n)+2],s={brightness:this.getRelativeBrightness(r,o,a),color:this.getColor(r,o,a)};i.push(s)}t.push(i)}return t},t.prototype.getRelativeBrightness=function(t,e,i){return Math.sqrt(.299*Math.pow(t,2)+.587*Math.pow(e,2)+.114*Math.pow(i,2))/100},t.prototype.getColor=function(t,e,i){return"rgb(".concat(t,",").concat(e,",").concat(i,")")},t}();t.p;var r={IMAGES:{DOIST:{TEXTURES:"".concat("/reveal-canvas","/assets/todoist.jpg")}}};const o=function(){function t(t,e,i){this.xAxis=Math.random()*t.width,this.yAxis=0,this.xCoord=Math.floor(this.xAxis),this.yCoord=Math.floor(this.yAxis),this.fallingSpeed=0,this.velocity=3.5*Math.random(),this.size=1.5*Math.random()+1,this.canvas=t,this.ctx=e,this.mappedImage=i}return t.prototype.update=function(){this.xCoord=Math.floor(this.xAxis),this.yCoord=Math.floor(this.yAxis),this.yAxis+=this.velocity,this.yAxis>=this.canvas.height&&(this.yAxis=0,this.xAxis=Math.random()*this.canvas.width)},t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.mappedImage[this.yCoord][this.xCoord].color,this.ctx.arc(this.xAxis,this.yAxis,this.size,0,2*Math.PI),this.ctx.fill()},t.generateParticles=function(e,i,n,r){for(var o=[],a=0;a<n;a++)o.push(new t(e,i,r));return o},t}(),a=function(){function t(t,e){this.canvas=t,this.ctx=e}return t.prototype.draw=function(t){this.ctx.drawImage(t,0,0,this.canvas.width,this.canvas.height)},t.prototype.loadPixels=function(){return this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)},t.loadImage=function(t){return e(this,void 0,Promise,(function(){var e;return i(this,(function(i){switch(i.label){case 0:return(e=new Image).src=t,[4,e.decode()];case 1:return i.sent(),[2,e]}}))}))},t}();e(void 0,void 0,void 0,(function(){function t(){h.globalAlpha=.05,h.fillStyle="rgb(0,0,0)",h.fillRect(0,0,c.width,c.height);for(var e=0;e<l.length;e++)l[e].update(),l[e].draw();requestAnimationFrame(t)}var s,c,h,l,u;return i(this,(function(p){return s=null==r?void 0:r.IMAGES.DOIST.TEXTURES,25e3,c=document.getElementById("canvas"),h=null,l=[],u=[],function(){e(this,void 0,void 0,(function(){var e,r,p,f;return i(this,(function(i){switch(i.label){case 0:return c.getContext?(h=c.getContext("2d"),e=new a(c,h),[4,a.loadImage(s)]):[3,2];case 1:r=i.sent(),e.draw(r),p=e.loadPixels(),h.clearRect(0,0,c.width,c.height),f=new n(c,h,p),u=f.getMappedImage(),l=o.generateParticles(c,h,25e3,u),t(),i.label=2;case 2:return[2]}}))}))}(),[2]}))}))})();
//# sourceMappingURL=bundle.js.map