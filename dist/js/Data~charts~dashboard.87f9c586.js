(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Data~charts~dashboard"],{"057f":function(t,e,i){var n=i("fc6a"),r=i("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(n(t))}},"159b":function(t,e,i){var n=i("da84"),r=i("fdbc"),o=i("17c2"),a=i("9112");for(var s in r){var h=n[s],l=h&&h.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(c){l.forEach=o}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,r=i("a640"),o=r("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"746f":function(t,e,i){var n=i("428f"),r=i("5135"),o=i("e538"),a=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||a(e,t,{value:o.f(t)})}},a4d3:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),o=i("d066"),a=i("c430"),s=i("83ab"),h=i("4930"),l=i("fdbf"),c=i("d039"),f=i("5135"),d=i("e8b5"),u=i("861d"),g=i("825a"),b=i("7b0b"),v=i("fc6a"),p=i("c04e"),y=i("5c6c"),w=i("7c73"),x=i("df75"),m=i("241c"),P=i("057f"),T=i("7418"),O=i("06cf"),S=i("9bf2"),k=i("d1e7"),j=i("9112"),M=i("6eeb"),C=i("5692"),L=i("f772"),A=i("d012"),E=i("90e3"),I=i("b622"),B=i("e538"),R=i("746f"),V=i("d44e"),W=i("69f3"),D=i("b727").forEach,N=L("hidden"),q="Symbol",Y="prototype",J=I("toPrimitive"),X=W.set,F=W.getterFor(q),G=Object[Y],H=r.Symbol,Q=o("JSON","stringify"),z=O.f,K=S.f,U=P.f,Z=k.f,$=C("symbols"),_=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),it=C("wks"),nt=r.QObject,rt=!nt||!nt[Y]||!nt[Y].findChild,ot=s&&c((function(){return 7!=w(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=z(G,e);n&&delete G[e],K(t,e,i),n&&t!==G&&K(G,e,n)}:K,at=function(t,e){var i=$[t]=w(H[Y]);return X(i,{type:q,tag:t,description:e}),s||(i.description=e),i},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ht=function(t,e,i){t===G&&ht(_,e,i),g(t);var n=p(e,!0);return g(i),f($,n)?(i.enumerable?(f(t,N)&&t[N][n]&&(t[N][n]=!1),i=w(i,{enumerable:y(0,!1)})):(f(t,N)||K(t,N,y(1,{})),t[N][n]=!0),ot(t,n,i)):K(t,n,i)},lt=function(t,e){g(t);var i=v(e),n=x(i).concat(gt(i));return D(n,(function(e){s&&!ft.call(i,e)||ht(t,e,i[e])})),t},ct=function(t,e){return void 0===e?w(t):lt(w(t),e)},ft=function(t){var e=p(t,!0),i=Z.call(this,e);return!(this===G&&f($,e)&&!f(_,e))&&(!(i||!f(this,e)||!f($,e)||f(this,N)&&this[N][e])||i)},dt=function(t,e){var i=v(t),n=p(e,!0);if(i!==G||!f($,n)||f(_,n)){var r=z(i,n);return!r||!f($,n)||f(i,N)&&i[N][n]||(r.enumerable=!0),r}},ut=function(t){var e=U(v(t)),i=[];return D(e,(function(t){f($,t)||f(A,t)||i.push(t)})),i},gt=function(t){var e=t===G,i=U(e?_:v(t)),n=[];return D(i,(function(t){!f($,t)||e&&!f(G,t)||n.push($[t])})),n};if(h||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),i=function(t){this===G&&i.call(_,t),f(this,N)&&f(this[N],e)&&(this[N][e]=!1),ot(this,e,y(1,t))};return s&&rt&&ot(G,e,{configurable:!0,set:i}),at(e,t)},M(H[Y],"toString",(function(){return F(this).tag})),M(H,"withoutSetter",(function(t){return at(E(t),t)})),k.f=ft,S.f=ht,O.f=dt,m.f=P.f=ut,T.f=gt,B.f=function(t){return at(I(t),t)},s&&(K(H[Y],"description",{configurable:!0,get:function(){return F(this).description}}),a||M(G,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:H}),D(x(it),(function(t){R(t)})),n({target:q,stat:!0,forced:!h},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=H(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!h,sham:!s},{create:ct,defineProperty:ht,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:ut,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:c((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(b(t))}}),Q){var bt=!h||c((function(){var t=H();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,i){var n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e,(u(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),r[1]=e,Q.apply(null,r)}})}H[Y][J]||j(H[Y],J,H[Y].valueOf),V(H,q),A[N]=!0},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},b367:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=window.devicePixelRatio||1,n=10*i,r=n/2;return function(){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.canvas=function(t){var e=document.getElementById(t),n=e.parentNode.clientWidth,r=e.parentNode.clientHeight;return e.style.width=n+"px",e.style.height=r+"px",e.width=n*i,e.height=r*i,e}(t),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*i,this.leftPadding=50*i,this.rightPadding=10*i,this.bottomPadding=50*i,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*i+"px Arial",top:n,bottom:r},this.legend={display:!0,position:"top",color:"#666",font:14*i+"px Arial",top:45*i,bottom:15*i,textWidth:0},this.radius=100*i,this.innerRadius=60*i,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(e)}return function(e,i,n){i&&t(e.prototype,i),n&&t(e,n)}(o,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),"bar"===this.type||"line"===this.type?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-n)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-n)/this.labels.length),this.ySpace=function(t,i){var n=t.map((function(t){return t.data.reduce((function(t,e){return e<t?t:e}))})),r=Math.ceil(Math.max.apply(Math,e(n))/i),o=r.toString().length-1;return o=2<o?2:o,Math.ceil(r/Math.pow(10,o))*Math.pow(10,o)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,e=this.datasets.length;t.beginPath();for(var o=0;o<e;o++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[o].label).width),t.fillStyle=t.strokeStyle=this.datasets[o].fillColor||this.colorList[o];for(var a=this.datasets[o].data,s=0;s<a.length;s++)if(!(s>this.labels.length-1)){var h=this.xLength/(e+1),l=this.yLength/this.ySpace,c=this.leftPadding+this.xLength*s+h*(o+.5),f=c+h,d=this.canvas.height-this.bottomPadding,u=d-a[s]*l;if("bar"===this.type)t.fillRect(c,u,f-c,d-u),this.drawValue(a[s],c+h/2,u-r);else if("line"===this.type){var g=this.leftPadding+this.xLength*(s+.5);t.beginPath(),t.arc(g,u,3*i,0,2*Math.PI,!0),t.fill(),0!==s&&(t.beginPath(),t.strokeStyle=this.datasets[o].fillColor||this.colorList[o],t.lineWidth=2*i,t.moveTo(g-this.xLength,d-a[s-1]*l),t.lineTo(g,u),t.stroke(),t.lineWidth=1*i),this.drawValue(a[s],g,u-n)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,e=this.labels.length,i=this.datasets[0],n=i.data,r=n.reduce((function(t,e){return t+e})),o=-Math.PI/2,a=this.canvas.width/2,s=this.canvas.height/2,h=0;h<e;h++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[h]).width),t.beginPath(),t.strokeStyle=t.fillStyle=i.colorList&&i.colorList[h]||this.colorList[h],t.moveTo(a,s);var l=o,c=o+=n[h]/r*2*Math.PI;t.arc(a,s,this.radius,l,c),t.closePath(),t.fill();var f=(l+c)/2;this.drawPieValue(n[h],f)}"ring"===this.type&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(a,s,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,e,n){var r=this.ctx;this.showValue&&(r.textBaseline="middle",r.font=12*i+"px Arial",r.textAlign="center",r.fillText(t,e,n))}},{key:"drawPieValue",value:function(t,e){var i=this.ctx;if(this.showValue){var r=this.canvas.width/2,o=this.canvas.height/2,a=Math.ceil(Math.abs(this.radius*Math.cos(e))),s=Math.floor(Math.abs(this.radius*Math.sin(e)));i.textBaseline="middle",this.showValue&&(e<=0?(i.textAlign="left",i.moveTo(r+a,o-s),i.lineTo(r+a+n,o-s-n),i.moveTo(r+a+n,o-s-n),i.lineTo(r+a+3*n,o-s-n),i.stroke(),i.fillText(t,r+a+3.5*n,o-s-n)):0<e&&e<=Math.PI/2?(i.textAlign="left",i.moveTo(r+a,o+s),i.lineTo(r+a+n,o+s+n),i.moveTo(r+a+n,o+s+n),i.lineTo(r+a+3*n,o+s+n),i.stroke(),i.fillText(t,r+a+3.5*n,o+s+n)):e>Math.PI/2&&e<Math.PI?(i.textAlign="right",i.moveTo(r-a,o+s),i.lineTo(r-a-n,o+s+n),i.moveTo(r-a-n,o+s+n),i.lineTo(r-a-3*n,o+s+n),i.stroke(),i.fillText(t,r-a-3.5*n,o+s+n)):(i.textAlign="right",i.moveTo(r-a,o-s),i.lineTo(r-a-n,o-s-n),i.moveTo(r-a-n,o-s-n),i.lineTo(r-a-3*n,o-s-n),i.stroke(),i.fillText(t,r-a-3.5*n,o-s-n)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var e=this.ctx;e.beginPath(),e.font=t.font,e.textAlign="center",e.fillStyle=t.color,"top"===t.position?(e.textBaseline="top",e.fillText(t.text,this.canvas.width/2,t.top)):(e.textBaseline="bottom",e.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,e=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,e),t.lineTo(this.canvas.width-this.rightPadding,e),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*i+"px Microsoft YaHei",t.textAlign=this.xRorate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var e=0;e<this.labels.length;e++){var o=this.labels[e],a=this.leftPadding+this.xLength*(e+1)+.5,s=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(a,s),t.lineTo(a,this.topPadding+n)):(t.moveTo(a,s),t.lineTo(a,s-r)),t.stroke(),t.save(),t.translate(a-this.xLength/2,s+r),t.rotate(-this.xRorate*Math.PI/180),t.fillText(o,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*i+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var e=0;e<this.yEqual;e++){var o=this.leftPadding,a=this.canvas.height-this.bottomPadding-this.yLength*(e+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(o,a),t.lineTo(this.canvas.width-this.rightPadding-n,a)):(t.strokeStyle=this.axisColor,t.moveTo(o-r,a),t.lineTo(o,a)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(o-n,a),t.rotate(-this.yRorate*Math.PI/180),t.fillText(this.ySpace*(e+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var e=this.ctx,i="pie"===this.type||"ring"===this.type;e.beginPath(),e.font=t.font,e.textAlign="left",e.textBaseline="middle";for(var o=i?this.labels.length:this.datasets.length,a=(this.canvas.width-(this.legend.textWidth+(5*o-2)*n))/2,s=0,h=0;h<o;h++){var l=i?this.datasets[0]:this.datasets[h],c=(i?this.labels[h]:l.label)||"";e.fillStyle=l.colorList&&l.colorList[h]||l.fillColor||this.colorList[h],"top"===t.position?(this.drawLegendIcon(a+5*n*h+s,t.top-r,2*n,n),e.fillStyle=t.color,e.fillText(c,a+(5*h+3)*n+s,t.top)):"bottom"===t.position?(this.drawLegendIcon(a+5*n*h+s,this.canvas.height-t.bottom-r,2*n,n),e.fillStyle=t.color,e.fillText(c,a+(5*h+3)*n+s,this.canvas.height-t.bottom)):(e.fillRect(n,t.top+2*n*h,2*n,n),e.fillStyle=t.color,e.fillText(c,4*n,t.top+2*n*h+.5*n)),s+=Math.ceil(e.measureText(c).width)}}}},{key:"drawLegendIcon",value:function(t,e,o,a){var s=this.ctx;"line"===this.type?(s.beginPath(),s.strokeStyle=s.fillStyle,s.lineWidth=2*i,s.moveTo(t,e+r),s.lineTo(t+2*n,e+r),s.stroke(),s.lineWidth=1*i,s.arc(t+n,e+r,3*i,0,2*Math.PI,!0),s.fill()):s.fillRect(t,e,o,a)}}]),o}()}))},b64b:function(t,e,i){var n=i("23e7"),r=i("7b0b"),o=i("df75"),a=i("d039"),s=a((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(r(t))}})},dbb4:function(t,e,i){var n=i("23e7"),r=i("83ab"),o=i("56ef"),a=i("fc6a"),s=i("06cf"),h=i("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,i,n=a(t),r=s.f,l=o(n),c={},f=0;while(l.length>f)i=r(n,e=l[f++]),void 0!==i&&h(c,e,i);return c}})},e439:function(t,e,i){var n=i("23e7"),r=i("d039"),o=i("fc6a"),a=i("06cf").f,s=i("83ab"),h=r((function(){a(1)})),l=!s||h;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,i){var n=i("b622");e.f=n},f5ac:function(t,e,i){"use strict";var n=i("7a23");function r(t,e,i,r,o,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("canvas",{id:i.canvasId},null,8,["id"])])}i("b64b"),i("a4d3"),i("4de4"),i("e439"),i("159b"),i("dbb4");function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h=i("b367"),l=i.n(h),c={props:{canvasId:{type:String,default:"",required:!0},options:{type:Object,required:!0}},mounted:function(){this.renderChart()},methods:{renderChart:function(){if(this.checkOptions()){var t=s({},this.options);new l.a(this.canvasId,t)}},checkOptions:function(){var t=this.options;return!(!t.datasets||!t.datasets.length)&&!(!t.labels||!t.labels.length)}},watch:{options:{handler:function(t,e){this.renderChart()},deep:!0}}};c.render=r;e["a"]=c}}]);
//# sourceMappingURL=Data~charts~dashboard.87f9c586.js.map