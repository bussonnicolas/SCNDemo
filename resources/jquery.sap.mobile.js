/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.mobile");jQuery.sap.require("jquery.sap.dom");jQuery.sap.require("jquery.sap.events");(function($){var F=/(?:\?|&)sap-ui-xx-fakeOS=([^&]+)/;if(jQuery.browser.webkit&&!jQuery.support.touch){var r=document.location.search.match(F);var a=r&&r[1]||jQuery.sap.byId("sap-ui-bootstrap").attr("data-sap-ui-xx-fakeOS");if(a){var u={ios:"Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.48 (KHTML, like Gecko) Version/5.1 Mobile/9A406 Safari/7534.48.3",android:"Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; GT-I9100 Build/IML74K) AppleWebKit/534.46 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.46",blackberry:"Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; de) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.296 Mobile Safari/534.11+"}[a];if(u){if(jQuery.browser.safari){var _=window.navigator;window.navigator=new Object();window.navigator.__proto__=_;window.navigator.__defineGetter__('userAgent',function(){return u})}else{window.navigator.__defineGetter__('userAgent',function(){return u})}jQuery.browser.msie=jQuery.browser.opera=jQuery.browser.mozilla=false;jQuery.browser.webkit=true;jQuery.browser.version="534.46"}}}function g(d){d=d||navigator.userAgent;var p=/\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;var r=d.match(p);if(r){var e=/iPhone|iPad|iPod/;var h=/PlayBook|BlackBerry/;if(r[0].match(e)){r[3]=r[3].replace(/_/g,".");return({os:"ios",version:r[3]})}else if(r[2].match(/Android/)){r[2]=r[2].replace(/\s/g,"");return({os:"android",version:r[3]})}else if(r[0].match(h)){return({os:"blackberry",version:r[4]})}else{return}}else{p=/Windows Phone (?:OS )?([\d.]*)/;r=d.match(p);if(r){return({os:"winphone",version:r[1]})}else{return}}}var o=g()||{};var b=$(window);if(o.os){var f=parseFloat(o.version);$.os=$.extend({os:o.os,version:o.version,fVersion:f},$.os);$.os[o.os]=true}else{if(!$.os)$.os={}}$.extend($.support,{retina:window.devicePixelRatio>=2});function i(){return b.width()>b.height()}var l=i();$.device=$.extend({},$.device);$.device.is=$.extend({standalone:window.navigator.standalone,landscape:l,portrait:!l,iphone:/iphone/i.test(navigator.userAgent),ipad:/ipad/i.test(navigator.userAgent)},$.device.is);$(window).bind("resize",function(){var l=i();$.device.is.landscape=l;$.device.is.portrait=!l});var t=(function(){if(jQuery.os.ios){return jQuery.device.is.ipad}else{return(Math.min(b.width(),b.height())>=600)}}());$.device.is=$.extend({tablet:t&&(jQuery.sap.touchEventMode!=="OFF"),phone:!t&&(jQuery.sap.touchEventMode!=="OFF"),desktop:(jQuery.sap.touchEventMode==="OFF")},$.device.is);var c=false;$.sap.initMobile=function(d){if(!c){c=true;d=$.extend({},{viewport:true,statusBar:"default",hideBrowser:true,preventScroll:true,useFullScreenHeight:true,homeIconPrecomposed:false},d);$(function(){var h=$("head");if(d.viewport){if($.device.is.iphone&&(Math.max(window.screen.height,window.screen.width)===568)){h.append($('<meta name="viewport" content="user-scalable=0, initial-scale=1.0">'))}else{h.append($('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'))}}if($.os.ios){h.append($('<meta name="apple-mobile-web-app-capable" content="yes">'));h.append($('<meta name="apple-mobile-web-app-status-bar-style" content="'+d.statusBar+'">'))}else if($.browser.msie){h.append($('<meta http-equiv="cleartype" content="on">'))}var j=d.homeIcon;if(j){var p=d.homeIconPrecomposed?"-precomposed":"";if(typeof j==="string"){h.append($('<link rel="apple-touch-icon'+p+'" href="'+j+'">'))}else if(typeof j==="object"){var k=function(e){return j[e]||j['tablet@2']||j['phone@2']||j['phone']||j['tablet']};var m=($.device.is.ipad?"tablet":"phone")+($.support.retina?"@2":"");var s=($.device.is.ipad?72:57)*($.support.retina?2:1);var n=(s===57)?'':'sizes="'+s+'x'+s+'"';h.append($('<link rel="apple-touch-icon"'+p+' '+n+' href="'+k(m)+'">'))}}if(d.hideBrowser&&!jQuery.browser.msie){}if(d.preventScroll){$(window).bind("touchmove",function(e){e.preventDefault()})}if(d.useFullScreenHeight){$(function(){document.documentElement.style.height="100%"})}});$(function(){var s=false;var S="";var p="240px";var T=3000;var e=sap.ui.getCore().getLibraryResourceBundle;if(jQuery.device.is.ipad||jQuery.device.is.iphone||jQuery.os.os=="android"||jQuery.os.os=="blackberry"||jQuery.os.os=="winphone"){if((jQuery.os.ios&&jQuery.os.fVersion<5)||(jQuery.os.android&&jQuery.os.fVersion<2.3)||(jQuery.os.blackberry&&jQuery.os.fVersion<7)||(jQuery.os.winphone)||(!jQuery.browser.webkit)){s=true;S=e("sap.ui.core").getText("MOBILE_SUPPORT_MESSAGE_DEVICE",[jQuery.os.os,jQuery.os.fVersion])}}else{if(!jQuery.browser.webkit){p="auto";s=true;S=e("sap.ui.core").getText("MOBILE_SUPPORT_MESSAGE_BROWSER")}else{var r=window.location.search.match(F);var a=r&&r[1]||jQuery.sap.byId("sap-ui-bootstrap").attr("data-sap-ui-xx-fakeOS");if(!a||(a!=="ios"&&a!=="android"&&a!=="blackberry")){p="480px";T=5000;s=true;S=e("sap.ui.core").getText("MOBILE_SUPPORT_MESSAGE_URL_PARAM")}}}if(s){jQuery.sap.require("sap.ui.core.Popup");var h=new sap.ui.core.HTML("mSAPUI5SupportMessage",{content:"<div id=\"mSAPUI5SupportMessage\""+"style=\""+"background-color:white;"+"border:solid 1px #cccccc;"+"border-radius:0.3125em;"+"-webkit-border-radius:0.3125em;"+"padding:0.3125em;"+"text-align:center;"+"width:"+p+"\""+"tabindex=\"0\">"+"<img src=\""+sap.ui.resource("sap.ui.core","mimes/logo/icotxt_white_220x72.png")+"\"\>"+"<br>"+"<span style=\"color:#ff0000;\">"+S+"</span>"+"<br>"+"</div>"});var P=new sap.ui.core.Popup(h,false,true,false);window.setTimeout(function(){if(P){P.open(0,"center center","center center",document.body)}},0);window.setTimeout(function(){if(P){P.close()}},T)}})}}})(jQuery);
