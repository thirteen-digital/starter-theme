(function($) {
// Selectric
	function initSelectric() {
		$('.gform_wrapper select, .product select, .woocommerce-ordering select').selectric({
			disableOnMobile: false,
			nativeOnMobile: false,
			responsive: true,
			maxHeight: 264
		});
	}
	initSelectric();
// Slick - Global settings
	var slick_previous = '<button class="slick-arrow--previous"><i class="fa fa-angle-left" aria-hidden="true"></i><span class="screen-reader-text">Previous</span></button>';
	var slick_next     = '<button class="slick-arrow--next"><i class="fa fa-angle-right" aria-hidden="true"></i><span class="screen-reader-text">Next</span></button>';
// Slick - Single Slide
	$('.js-slick-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: slick_previous,
		nextArrow: slick_next,
		dots: false,
		speed: 600,
		cssEase: 'ease-in-out',
		lazyLoad: 'ondemand'
	});
	$('.js-slick-single img').load(function() {
		$(this).addClass('slick-loaded');
		$(this).prev('.default-spinner').fadeOut().remove();
	});
// Toggle offscreen menu
	$('.js-nav-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.offscreen').toggleClass('offscreen--active');
		$('body').toggleClass('body--offscreen-active');
	});
// Close nav on anchor click
	$('.offscreen a[href^="#"]').click(function (event) {
		$('.js-nav-toggle').trigger( "click" );
	});
// Smooth scroll for anchor links
	$('.js-link-anchor, .js-link-anchor a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
// Magnific Popup - Standard
	$('.js-magnific-popup').magnificPopup({
		type:'inline',
		closeBtnInside: true,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
		midClick: true
	});
// Magnific Popup - Video
	$('.js-magnific-video').magnificPopup({
		type: 'inline',
		midClick: true,
		callbacks: {
			open: function() {
				// Play video on open
				$(this.content).find('video')[0].play();
				var p = $(this.content).find('video')[0].player;
				p.setPlayerSize();
				p.setControlsSize();
			},
			close: function() {
				// Reset video on close
				$(this.content).find('video')[0].load();
			}
		}
	});
// Magnific Popup - Ajax
	$('.js-magnific-ajax').magnificPopup({
		type: 'ajax',
		closeBtnInside: true,
		closeOnContentClick: false,
		closeOnBgClick: false,
		tLoading: '<div class="default-spinner"></div>',
	});
// Equal Heights
	$('.js-match-height').matchHeight();
// Accordion
	// $('.accordion__item__content').hide(); // Close all accordions
	// $('.js-accordion-toggle').click(function(e) {
	// 	e.preventDefault();
	// 	var accordion_id = $(this).data('target');
	// 	if ($(this).parent().hasClass('accordion__item--active')) { // If the accordion is already open
	// 		$('.accordion__item').removeClass('accordion__item--active');
	// 		$('.accordion__item__content').slideUp();
	// 		$(this).parent().removeClass('accordion__item--active');
	// 		$('#' + accordion_id).slideUp();
	// 	} else { // Else if the accordion is not open
	// 		$('.accordion__item').removeClass('accordion__item--active');
	// 		$('.accordion__item__content').slideUp();
	// 		$(this).parent().addClass('accordion__item--active');
	// 		$('#' + accordion_id).slideDown();
	// 	}
	// });
// Accordion
	$('.js-accordion').accordion();
// Responsive videos
	$('.js-fitvids').fitVids();
// Lazy Loading images
	var bLazy = new Blazy({
		selector: '.b-lazy',
		loadInvisible: true,
		offset: 200,
		success: function(element){
			$(element).prev('.default-spinner').fadeOut().remove();
		}
	});
// Gravity Forms
	$(document).bind('gform_post_render', function() {
		initSelectric();
	});
// WooCommerce
	function customWooFields() {
		$('.woocommerce-shipping-methods label, .wc_payment_methods label, .woocommerce-terms-and-conditions-wrapper label, .custom-checkbox label').append('<span class="custom-input"></span>');	
	}

	customWooFields();

	$('body').on('updated_shipping_method country_to_state_changed updated_wc_div init_checkout updated_checkout', function(){
	    customWooFields();
	});
})( jQuery );
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-canvas-cookies-cssanimations-csscalc-csscolumns-cssgradients-cssgrid_cssgridlegacy-cssvhunit-cssvwunit-flexbox-ie8compat-inlinesvg-objectfit-supports-svg-svgasimg-touchevents-video-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,a,i,s;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],n=b[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),C.push((r?"":"no-")+s.join("-"))}}function a(e){var n=P.className,t=Modernizr._config.classPrefix||"";if(k&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),k?P.className.baseVal=n:P.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):k?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(n,t,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,n,t);var a=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&n.currentStyle&&n.currentStyle[o];return r}function c(e,n){return e-1===n||e===n||e+1===n}function l(e,n){if("object"==typeof e)for(var t in e)z(e,t)&&l(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(){var e=n.body;return e||(e=i(k?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var a,s,c,l,u="modernizr",f=i("div"),p=d();if(parseInt(o,10))for(;o--;)c=i("div"),c.id=r?r[o]:u+(o+1),f.appendChild(c);return a=i("style"),a.type="text/css",a.id="s"+u,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=P.style.overflow,P.style.overflow="hidden",P.appendChild(p)),s=t(f,e),p.fake?(p.parentNode.removeChild(p),P.style.overflow=l,P.offsetHeight):f.parentNode.removeChild(f),!!s}function p(e,n){return!!~(""+e).indexOf(n)}function g(e,n){return function(){return e.apply(n,arguments)}}function v(e,n,t){var r;for(var a in e)if(e[a]in n)return t===!1?e[a]:(r=n[e[a]],o(r,"function")?g(r,t||n):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+m(n[r])+":"+o+")");return a=a.join(" or "),f("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==s(e,null,"position")})}return t}function y(e,n,r,a){function s(){l&&(delete I.style,delete I.modElem)}if(a=o(a,"undefined")?!1:a,!o(r,"undefined")){var c=h(e,r);if(!o(c,"undefined"))return c}for(var l,d,f,g,v,m=["modernizr","tspan","samp"];!I.style&&m.length;)l=!0,I.modElem=i(m.shift()),I.style=I.modElem.style;for(f=e.length,d=0;f>d;d++)if(g=e[d],v=I.style[g],p(g,"-")&&(g=u(g)),I.style[g]!==t){if(a||o(r,"undefined"))return s(),"pfx"==n?g:!0;try{I.style[g]=r}catch(y){}if(I.style[g]!=v)return s(),"pfx"==n?g:!0}return s(),!1}function w(e,n,t,r,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+$.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?y(s,n,r,a):(s=(e+" "+L.join(i+" ")+i).split(" "),v(s,n,t))}function T(e,n,o){return w(e,t,t,n,o)}var C=[],b=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){b.push({name:e,fn:n,options:t})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("ie8compat",!e.addEventListener&&!!n.documentMode&&7===n.documentMode),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",S||_);var P=n.documentElement,k="svg"===P.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=i("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=i("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var E=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=E,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+E.join(n+e),!!t.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",o="",r=0,a=E.length-1;a>r;r++)e=0===r?"to ":"",o+=n+E[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(o+=n+"-webkit-"+t);var s=i("a"),c=s.style;return c.cssText=o,(""+c.backgroundImage).indexOf("gradient")>-1});var z;!function(){var e={}.hasOwnProperty;z=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),x._l={},x.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=l}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var j=x.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",E.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");j(o,function(e){t=9===e.offsetTop})}return t}),j("#modernizr { height: 50vh; }",function(n){var t=parseInt(e.innerHeight/2,10),o=parseInt(s(n,null,"height"),10);Modernizr.addTest("cssvhunit",c(o,t))});var R="Moz O ms Webkit",$=x._config.usePrefixes?R.split(" "):[];x._cssomPrefixes=$;var B=function(n){var o,r=E.length,a=e.CSSRule;if("undefined"==typeof a)return t;if(!n)return!1;if(n=n.replace(/^@/,""),o=n.replace(/-/g,"_").toUpperCase()+"_RULE",o in a)return"@"+n;for(var i=0;r>i;i++){var s=E[i],c=s.toUpperCase()+"_"+o;if(c in a)return"@-"+s.toLowerCase()+"-"+n}return!1};x.atRule=B;var L=x._config.usePrefixes?R.toLowerCase().split(" "):[];x._domPrefixes=L;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var I={style:N.elem.style};Modernizr._q.unshift(function(){delete I.style}),x.testAllProps=w,x.testAllProps=T,Modernizr.addTest("cssanimations",T("animationName","a",!0)),Modernizr.addTest("backgroundsize",T("backgroundSize","100%",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=T("columnCount");try{e=!!n,e&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<t.length;o++)e=t[o].toLowerCase(),n=T("column"+t[o]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||T(t[o])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("cssgridlegacy",T("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",T("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",T("flexBasis","1px",!0));var O=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?B(e):(-1!=e.indexOf("-")&&(e=u(e)),n?w(e,n,t):w(e,"pfx"))};Modernizr.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),j("#modernizr { width: 50vw; }",function(n){var t=parseInt(e.innerWidth/2,10),o=parseInt(s(n,null,"width"),10);Modernizr.addTest("cssvwunit",c(o,t))}),r(),a(C),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);