!function(e,D){"use strict";var n=D.module("ngTouch",[]);function t(n,t){var o=!1,c=!1;this.ngClickOverrideEnabled=function(e){return D.isDefined(e)?(e&&!c&&(c=!0,i.$$moduleName="ngTouch",t.directive("ngClick",i),n.decorator("ngClickDirective",["$delegate",function(e){if(o)e.shift();else for(var n=e.length-1;0<=n;){if("ngTouch"===e[n].$$moduleName){e.splice(n,1);break}n--}return e}])),o=e,this):o},this.$get=function(){return{ngClickOverrideEnabled:function(){return o}}}}n.provider("$touch",t),t.$inject=["$provide","$compileProvider"],n.factory("$swipe",[function(){var c={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};function s(e){var n=e.originalEvent||e,t=n.touches&&n.touches.length?n.touches:[n],o=n.changedTouches&&n.changedTouches[0]||t[0];return{x:o.clientX,y:o.clientY}}function l(e,t){var o=[];return D.forEach(e,function(e){var n=c[e][t];n&&o.push(n)}),o.join(" ")}return{bind:function(e,t,n){var o,c,i,r,u=!1;n=n||["mouse","touch"],e.on(l(n,"start"),function(e){i=s(e),u=!0,c=o=0,r=i,t.start&&t.start(i,e)});var a=l(n,"cancel");a&&e.on(a,function(e){u=!1,t.cancel&&t.cancel(e)}),e.on(l(n,"move"),function(e){if(u&&i){var n=s(e);if(o+=Math.abs(n.x-r.x),c+=Math.abs(n.y-r.y),r=n,!(o<10&&c<10))return o<c?(u=!1,void(t.cancel&&t.cancel(e))):(e.preventDefault(),void(t.move&&t.move(n,e)))}}),e.on(l(n,"end"),function(e){u&&(u=!1,t.end&&t.end(s(e),e))})}}}]);var i=["$parse","$timeout","$rootElement",function(e,c,g){var p,m,i,r=2500,a=25,w="ng-click-active";function $(e,n,t){for(var o=0;o<e.length;o+=2)if(c=e[o],i=e[o+1],r=n,u=t,Math.abs(c-r)<a&&Math.abs(i-u)<a)return e.splice(o,o+2),!0;var c,i,r,u;return!1}function b(e){if(!(Date.now()-p>r)){var n=e.touches&&e.touches.length?e.touches:[e],t=n[0].clientX,o=n[0].clientY;t<1&&o<1||i&&i[0]===t&&i[1]===o||(i&&(i=null),"label"===function(e){return D.lowercase(e.nodeName||e[0]&&e[0].nodeName)}(e.target)&&(i=[t,o]),$(m,t,o)||(e.stopPropagation(),e.preventDefault(),e.target&&e.target.blur&&e.target.blur()))}}function k(e){var n=e.touches&&e.touches.length?e.touches:[e],t=n[0].clientX,o=n[0].clientY;m.push(t,o),c(function(){for(var e=0;e<m.length;e+=2)if(m[e]==t&&m[e+1]==o)return void m.splice(e,e+2)},r,!1)}return function(t,u,a){var s,l,h,f,o=e(a.ngClick),d=!1;function v(){d=!1,u.removeClass(w)}u.on("touchstart",function(e){d=!0,3==(s=e.target?e.target:e.srcElement).nodeType&&(s=s.parentNode),u.addClass(w),l=Date.now();var n=e.originalEvent||e,t=(n.touches&&n.touches.length?n.touches:[n])[0];h=t.clientX,f=t.clientY}),u.on("touchcancel",function(e){v()}),u.on("touchend",function(e){var n=Date.now()-l,t=e.originalEvent||e,o=(t.changedTouches&&t.changedTouches.length?t.changedTouches:t.touches&&t.touches.length?t.touches:[t])[0],c=o.clientX,i=o.clientY,r=Math.sqrt(Math.pow(c-h,2)+Math.pow(i-f,2));d&&n<750&&r<12&&(function(e,n){m||(g[0].addEventListener("click",b,!0),g[0].addEventListener("touchstart",k,!0),m=[]),p=Date.now(),$(m,e,n)}(c,i),s&&s.blur(),D.isDefined(a.disabled)&&!1!==a.disabled||u.triggerHandler("click",[e])),v()}),u.onclick=function(e){},u.on("click",function(e,n){t.$apply(function(){o(t,{$event:n||e})})}),u.on("mousedown",function(e){u.addClass(w)}),u.on("mousemove mouseup",function(e){u.removeClass(w)})}}];function o(s,l,h){n.directive(s,["$parse","$swipe",function(u,a){return function(t,o,e){var c,i,r=u(e[s]);var n=["touch"];D.isDefined(e.ngSwipeDisableMouse)||n.push("mouse"),a.bind(o,{start:function(e,n){c=e,i=!0},cancel:function(e){i=!1},end:function(e,n){!function(e){if(!c)return!1;var n=Math.abs(e.y-c.y),t=(e.x-c.x)*l;return i&&n<75&&0<t&&30<t&&n/t<.3}(e)||t.$apply(function(){o.triggerHandler(h),r(t,{$event:n})})}},n)}}])}o("ngSwipeLeft",-1,"swipeleft"),o("ngSwipeRight",1,"swiperight")}(window,window.angular);