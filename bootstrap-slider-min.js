(function(c,h,i){function t(a){a.preventDefault()}function j(a,b){a=(a+"").replace(",",".");return isNaN(a)?b:+a}function g(a){return Math.round(1E8*a)/1E8||0}function m(a,b){var c=g(a%b),d=g(b-c);return d<=c?a+d:a-c}function k(a,b){this.element=a;this.options=b;var e,d;this.step=+this.options.step;this.min=+this.options.min;this.max=+this.options.max;if(!this.step||0>this.step)this.step=1;if(this.min>this.max)this.max=this.min;this.min===this.max&&(this.max+=1);e=j(this.element.value,this.min);d=
this.step.toString().indexOf(".");if(~d)this.decimals=this.step.toString().length-(d+1);this.slider=c(this.options.template).appendTo(this.options.slider).get(0);this.disabled(this.element.disabled);c(this.element).bind({"change.slider":c.proxy(u,this),"input.slider":c.proxy(u,this),"keydown.slider":c.proxy(y,this),"mousewheel.slider":c.proxy(l,this),"DOMMouseScroll.slider":c.proxy(l,this)});c(this.slider).bind({"mousedown.slider":c.proxy(z,this),"mousewheel.slider":c.proxy(l,this),"DOMMouseScroll.slider":c.proxy(l,
this)});if("step"in this.element)this.element.step=this.step;v.call(this);w.call(this,{});f.call(this,m(Math.max(Math.min(e,this.max),this.min),this.step))}function v(){var a=c(this.slider),b=c(this.slider.firstChild),e=a.width(),d=a.height();this.box=a.offset();this.knobBox={width:b.width(),height:b.height()};this.box.right=e+this.box.left;this.box.bottom=d+this.box.top;this.box.isHorizontal=e>=d}function w(a){var b;a.target===this.slider.firstChild?(b=c(this.slider.firstChild).offset(),this.dragOffset=
this.box.isHorizontal?a.pageX-b.left:this.knobBox.height-(a.pageY-b.top)):this.dragOffset=this.box.isHorizontal?this.knobBox.width/2:this.knobBox.height/2}function u(a){var b=j(this.element.value,this.min);b===this.min&&"input"==a.type||f.call(this,m(Math.max(Math.min(b,this.max),this.min),this.step))}function y(a){var b=j(this.element.value,this.min);if(!this.isDisabled)switch(a.which){case 38:a.preventDefault();f.call(this,Math.min(this.max,b+this.step));c(this.element).trigger("slide");break;case 40:a.preventDefault();
f.call(this,Math.max(this.min,b-this.step));c(this.element).trigger("slide");break;case 13:case 27:a.preventDefault(),a.currentTarget.blur()}}function l(a){if(!this.isDisabled){var b=a.originalEvent,e=j(this.element.value,this.min),d;a.preventDefault();a.stopImmediatePropagation();b.wheelDelta?d=g(b.wheelDelta/120):b.detail&&(d=-1*g(b.detail/3));null!=d&&(0<d?f.call(this,Math.min(this.max,e+this.step)):f.call(this,Math.max(this.min,e-this.step)),c(this.element).trigger("slide"))}}function z(a){if(1===
a.which&&!this.isDisabled){var b=c.Event("slidestart");c(this.element).trigger(b);b.isDefaultPrevented()?a.preventDefault():(v.call(this),w.call(this,a),A(),c(i).bind({"mousemove.slider":c.proxy(x,this),"mouseup.slider":c.proxy(n,this),"selectstart.slider":t,"dragstart.slider":t}),c(this.slider).addClass("focused"),this.isSliding=!0,x.call(this,a))}}function n(){if(this.isSliding)c(i).unbind(".slider"),c(this.slider).removeClass("focused"),this.isSliding=!1,c(this.element).trigger("slideend")}function x(a){if(1!==
a.which)n.call(this);else{var b=this.box;b.isHorizontal?(a=Math.max(Math.min(a.pageX,b.right),b.left)-b.left,b=a/(b.right-b.left)):(a=Math.max(Math.min(a.pageY,b.bottom),b.top)-b.top,b=1-a/(b.bottom-b.top));b=(this.max-this.min)*b+this.min;0!==b%this.step&&(b=m(b,this.step));f.call(this,g(b));c(this.element).trigger("slide")}}function f(a){var b,a=Math.max(Math.min(g(a),this.max),this.min);this.element.value=this.decimals?a.toFixed(this.decimals):a;a=(a-this.min)/(this.max-this.min);this.box.isHorizontal?
(b=this.box.right-this.box.left,a=Math.max(-2,Math.min(a*b-this.dragOffset,b-this.knobBox.width+2))+"px"):(b=this.box.bottom-this.box.top,a=Math.max(-2,Math.min(a*b-this.dragOffset,b-this.knobBox.height+2))+"px");c(this.slider.firstChild).css(this.box.isHorizontal?"left":"bottom",a)}function o(a){this.isDisabled=a=!!a;c(this.slider)[a?"addClass":"removeClass"]("disabled");(this.element.disabled=a)||n.call(this)}function p(a,b){return function(c,d,f){var g=jQuery.data(c,"slider-instance");return g?
(a.call(g,d),!0):b.call(this,c,d,f)}}var q=c.propHooks.disabled,r=c.attrHooks.disabled,s=c.valHooks.text,B=q&&q.set||c.noop,C=r&&r.set||c.noop,D=s&&s.set||c.noop,A=function(){if(h.getSelection){if(h.getSelection().empty)return function(){h.getSelection().empty()};if(h.getSelection().removeAllRanges)return function(){h.getSelection().removeAllRanges()}}else if(i.selection&&i.selection.empty)return function(){i.selection.empty()}}();k.prototype={disabled:o,destroy:function(){c(this.slider).remove();
c(this.element).unbind(".slider").removeData("slider-instance")},constructor:k};c.fn.slider=function(a){return this.filter("input").each(function(){var b=c(this),e=b.data("slider-instance"),d="object"==typeof a&&a||{};e||(d=c.extend({},c.fn.slider.defaults,b.data(),d),b.data("slider-instance",e=new k(this,d)));"string"==typeof a&&e[a].apply(e,1<arguments.length?[].slice.call(arguments,1):[])})};c.fn.slider.Constructor=k;c.fn.slider.defaults={min:1,max:100,step:1,slider:"body",template:'<div class="input-slider"><div class="input-slider-knob"></div></div>'};
c.valHooks.text=c.extend(s||{},{set:p(f,D)});c.propHooks.disabled=c.extend(q||{},{set:p(o,B)});c.attrHooks.disabled=c.extend(r||{},{set:p(o,C)});c(function(){c("input[data-slider]").slider()})})(jQuery,window,document);
