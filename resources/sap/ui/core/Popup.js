/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.Popup");jQuery.sap.require("jquery.sap.script");jQuery.sap.require("sap.ui.core.UIArea");jQuery.sap.require("sap.ui.base.Object");jQuery.sap.require("sap.ui.base.EventProvider");jQuery.sap.require("sap.ui.core.Control");jQuery.sap.require("sap.ui.core.RenderManager");
sap.ui.core.Popup=function(c,m,s,a){sap.ui.base.EventProvider.apply(this);this._id=jQuery.sap.uid();this.bOpen=false;this.eOpenState=sap.ui.core.OpenState.CLOSED;if(c){this.setContent(c)}this._oPosition={my:sap.ui.core.Popup.Dock.CenterCenter,at:sap.ui.core.Popup.Dock.CenterCenter,of:document,offset:"0 0",collision:"flip"};this._bModal=!!m;this._oPreviousFocus=null;this._sInitialFocusId=null;this._bShadow=typeof(s)==="boolean"?s:true;this._bAutoClose=!!a;this._aAutoCloseAreas;this._animations={open:null,close:null};this._durations={open:"fast",close:"fast"};this._iZIndex=-1;this._oBlindLayer=null;if(this.touchEnabled){this._fAutoCloseHandler=function(e){var d=e.target,p=this._$().get(0),P=this._oLastPosition.of===document?null:this._oLastPosition.of,I=jQuery.contains(p,d),b=P?jQuery.contains(P,d):false,f=false;if(this._aAutoCloseAreas){for(var i=0;i<this._aAutoCloseAreas.length;i++){if(jQuery.contains(this._aAutoCloseAreas[i],d)){f=true;break}}}if(!(I||b||f)){this.close()}}}};
sap.ui.core.Popup._activateBlindLayer=true;sap.ui.core.Popup.blStack=[];sap.ui.core.Popup.prototype=jQuery.sap.newObject(sap.ui.base.EventProvider.prototype);sap.ui.base.Object.defineClass("sap.ui.core.Popup",{baseType:"sap.ui.base.EventProvider",publicMethods:["open","close","setContent","getContent","setPosition","setShadow","setModal","setAutoClose","isOpen","getOpenState","setAnimations","setDurations","attachOpened","attachClosed","detachOpened","detachClosed"]});sap.ui.core.Popup.M_EVENTS={opened:'opened',closed:'closed'};sap.ui.core.Popup.Dock={BeginTop:"begin top",BeginCenter:"begin center",BeginBottom:"begin bottom",LeftTop:"left top",LeftCenter:"left center",LeftBottom:"left bottom",CenterTop:"center top",CenterCenter:"center center",CenterBottom:"center bottom",RightTop:"right top",RightCenter:"right center",RightBottom:"right bottom",EndTop:"end top",EndCenter:"end center",EndBottom:"end bottom"};sap.ui.core.Popup.prototype.touchEnabled=(jQuery.sap.touchEventMode!=="OFF");sap.ui.core.Popup.prototype.restoreFocus=(jQuery.sap.touchEventMode==="OFF");sap.ui.core.Popup.prototype.focusOnPopup=(jQuery.sap.touchEventMode==="OFF");
sap.ui.core.Popup.prototype.attachOpened=function(f,l){this.attachEvent("opened",f,l);return this};
sap.ui.core.Popup.prototype.attachClosed=function(f,l){this.attachEvent("closed",f,l);return this};
sap.ui.core.Popup.prototype.detachOpened=function(f,l){this.detachEvent("opened",f,l);return this};
sap.ui.core.Popup.prototype.detachClosed=function(f,l){this.detachEvent("closed",f,l);return this};
sap.ui.core.Popup.BlindLayer=function(){this._$Ref=jQuery("<div class=\"sapUiBliLy\" id=\"sap-ui-blindlayer-"+jQuery.sap.uid()+"\"><iframe scrolling=\"no\" src=\"javascript:''\"	tabIndex=\"-1\"></iframe></div>");this._$Ref.appendTo(sap.ui.getCore().getStaticAreaRef())};
sap.ui.core.Popup.BlindLayer.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);
sap.ui.core.Popup.BlindLayer.prototype.init=function(r,z){this._$Ref.css("visibility","visible").css("z-index",z);this.update(r,z);this._$Ref.insertAfter(r).show()};
sap.ui.core.Popup.BlindLayer.prototype.update=function(r,z){var R=r.rect();this._$Ref.css("left",R.left).css("top",R.top);if(r.css("right")!="auto"&&r.css("right")!="inherit"){this._$Ref.css("right",r.css("right")).css("width","auto")}else{this._$Ref.css("width",R.width).css("right","auto")}if(r.css("bottom")!="auto"&&r.css("bottom")!="inherit"){this._$Ref.css("bottom",r.css("bottom")).css("height","auto")}else{this._$Ref.css("height",R.height).css("bottom","auto")}if(typeof(z)==="number"){this._$Ref.css("z-index",z)}};
sap.ui.core.Popup.BlindLayer.prototype.reset=function(){this._$Ref.hide().css("visibility","hidden").appendTo(sap.ui.getCore().getStaticAreaRef())};
sap.ui.core.Popup.prototype.oBlindLayerPool=new sap.ui.base.ObjectPool(sap.ui.core.Popup.BlindLayer);(function(){var l=0;sap.ui.core.Popup.getLastZIndex=function(){return l};sap.ui.core.Popup.prototype.getLastZIndex=function(){return sap.ui.core.Popup.getLastZIndex()};sap.ui.core.Popup.getNextZIndex=function(){return(l+=10)};sap.ui.core.Popup.prototype.getNextZIndex=function(){return sap.ui.core.Popup.getNextZIndex()}}());
sap.ui.core.Popup.prototype.open=function(d,m,a,o,b,c){if(this.eOpenState!=sap.ui.core.OpenState.CLOSED){return}this.eOpenState=sap.ui.core.OpenState.OPENING;this._bContentAddedToStatic=false;if(this.oContent instanceof sap.ui.core.Control&&!this.oContent.getParent()){var s=sap.ui.getCore().getStaticAreaRef();s=sap.ui.getCore().getUIArea(s);s.addContent(this.oContent,true);this._bContentAddedToStatic=true}if(typeof(d)=="string"){c=b;b=o;o=a;a=m;m=d;d=-1}if(d===undefined){d=-1}if(this.restoreFocus){this._oPreviousFocus=sap.ui.core.Popup.getCurrentFocusInfo()}var r=this._$(true);var R="fast";if((d===0)||(d>0)){R=d}else if((this._durations.open===0)||(this._durations.open>0)){R=this._durations.open}var _={"my":m||this._oPosition.my,"at":a||this._oPosition.at,"of":o||this._oPosition.of||document,"offset":b||this._oPosition.offset,"collision":c||this._oPosition.collision};this._iZIndex=this._iZIndex===this.getLastZIndex()?this._iZIndex:this.getNextZIndex();var S=sap.ui.getCore().getStaticAreaRef();r.css("position","absolute").css("visibility","hidden");if(!(r[0].parentNode==S)){r.appendTo(S)}r.css("z-index",this._iZIndex);jQuery.sap.log.debug("position popup content "+r.attr("id")+" at "+(window.JSON?JSON.stringify(_.at):String(_.at)));this._applyPosition(_);var t=this;var O=function(){r.css("display","block");if(t.focusOnPopup){if(t._bModal||t._bAutoClose||t._sInitialFocusId){var e=null;if(t._sInitialFocusId){var f=sap.ui.getCore().byId(t._sInitialFocusId);if(f){e=f.getFocusDomRef()}e=e||jQuery.sap.domById(t._sInitialFocusId)}jQuery.sap.focus(e||r.firstFocusableDomRef())}}t.eOpenState=sap.ui.core.OpenState.OPEN;if(jQuery.browser.msie&&jQuery.browser.version=='9.0'){jQuery.sap.delayedCall(0,t,function(){t.fireEvent(sap.ui.core.Popup.M_EVENTS.opened)})}else{t.fireEvent(sap.ui.core.Popup.M_EVENTS.opened)}};r.toggleClass("sapUiShd",this._bShadow).hide().css("visibility","visible");if(R==0){O.apply()}else{if(this._animations.open){this._animations.open.call(null,r,R,O)}else{r.fadeIn(R,O)}}if(jQuery.browser.msie&&sap.ui.core.Popup._activateBlindLayer){this._oBlindLayer=this.oBlindLayerPool.borrowObject(r,this._iZIndex-1)}if(this._bModal){this._showBlockLayer()}if(this.oContent instanceof sap.ui.core.Element){this.oContent.addDelegate(this)}this.bOpen=true;if(!this.touchEnabled){if(this._bModal||this._bAutoClose){this.fEventHandler=jQuery.proxy(this.onFocusEvent,this);var p=r;if(document.addEventListener){document.addEventListener("focus",this.fEventHandler,true);p.get(0).addEventListener("blur",this.fEventHandler,true);if(this._aAutoCloseAreas){for(var i=0;i<this._aAutoCloseAreas.length;i++){this._aAutoCloseAreas[i].addEventListener("blur",this.fEventHandler,true)}}}else{jQuery(document).bind("activate."+this._id,this.fEventHandler);p.bind("deactivate."+this._id,this.fEventHandler);if(this._aAutoCloseAreas){for(var i=0;i<this._aAutoCloseAreas.length;i++){jQuery(this._aAutoCloseAreas[i]).bind("deactivate."+this._id,this.fEventHandler)}}}}}else{if(!this._bModal&&this._bAutoClose){jQuery(document).bind("vmousedown",jQuery.proxy(this._fAutoCloseHandler,this))}}if(this._oBlindLayer){this._resizeListenerId=sap.ui.core.ResizeHandler.register(this._$().get(0),jQuery.proxy(this.onresize,this))}};
sap.ui.core.Popup.prototype.onFocusEvent=function(b){var e=jQuery.event.fix(b);var t=(e.type=="focus"||e.type=="activate")?"focus":"blur";if(t=="focus"){var d=this._$().get(0);if(d){var c=(d==e.target)||(jQuery.contains(d,e.target));if(!c&&this._aAutoCloseAreas){for(var i=0;i<this._aAutoCloseAreas.length;i++){c=(this._aAutoCloseAreas[i]==e.target)||(jQuery.contains(this._aAutoCloseAreas[i],e.target));if(c){break}}}jQuery.sap.log.debug("focus event on "+e.target.id+", contains: "+c);if(this._bModal&&!c){var T=(sap.ui.core.Popup.getLastZIndex()==this._iZIndex);if(T){var D=this.oLastBlurredElement?this.oLastBlurredElement:d;jQuery.sap.focus(D)}}else if(this._bAutoClose&&c&&this._sTimeoutId){jQuery.sap.clearDelayedCall(this._sTimeoutId);this._sTimeoutId=null}}}else if(t=="blur"){jQuery.sap.log.debug("blur event on "+e.target.id);if(this._bModal){this.oLastBlurredElement=e.target}else if(this._bAutoClose){if(!this._sTimeoutId){this._sTimeoutId=jQuery.sap.delayedCall(0,this,"close")}}}};
sap.ui.core.Popup.prototype.setInitialFocusId=function(i){this._sInitialFocusId=i};
sap.ui.core.Popup.prototype.close=function(d){if(this.eOpenState==sap.ui.core.OpenState.CLOSED||this.eOpenState==sap.ui.core.OpenState.CLOSING){return}var r="fast";if((d===0)||(d>0)){r=d}else if((this._durations.close===0)||(this._durations.close>0)){r=this._durations.close}if(r===0&&this.eOpenState==sap.ui.core.OpenState.OPENING){return}this.eOpenState=sap.ui.core.OpenState.CLOSING;if(this.oContent&&this._bContentAddedToStatic){var s=sap.ui.getCore().getStaticAreaRef();s=sap.ui.getCore().getUIArea(s);s.removeContent(s.indexOfContent(this.oContent),true)}this._bContentAddedToStatic=false;this._sTimeoutId=null;if(!this.touchEnabled){if(this.fEventHandler){var p=this._$();if(document.removeEventListener){document.removeEventListener("focus",this.fEventHandler,true);p.get(0).removeEventListener("blur",this.fEventHandler,true);if(this._aAutoCloseAreas){for(var i=0;i<this._aAutoCloseAreas.length;i++){this._aAutoCloseAreas[i].removeEventListener("blur",this.fEventHandler,true)}}}else{jQuery(document).unbind("activate."+this._id,this.fEventHandler);p.unbind("deactivate."+this._id,this.fEventHandler);if(this._aAutoCloseAreas){for(var i=0;i<this._aAutoCloseAreas.length;i++){jQuery(this._aAutoCloseAreas[i]).unbind("deactivate."+this._id,this.fEventHandler)}}}this.fEventHandler=null}}else{if(!this._bModal&&this._bAutoClose){jQuery(document).unbind("vmousedown",this._fAutoCloseHandler)}}if(this.oContent instanceof sap.ui.core.Element){this.oContent.removeDelegate(this)}var R=this._$();if(this._oBlindLayer){this.oBlindLayerPool.returnObject(this._oBlindLayer)}this._oBlindLayer=null;var t=this;var c=function(){jQuery(R).hide().css("visibility","inherit").css("left","0px").css("top","0px").css("right","");if(t.restoreFocus){if(t._bModal){sap.ui.core.Popup.applyFocusInfo(t._oPreviousFocus);t._oPreviousFocus=null;t.oLastBlurredElement=null}}t.bOpen=false;t.eOpenState=sap.ui.core.OpenState.CLOSED;t.fireEvent(sap.ui.core.Popup.M_EVENTS.closed)};if(r==0){c.apply()}else{if(this._animations.close){this._animations.close.call(null,R,r,c)}else{R.fadeOut(r,c)}}if(this._bModal){this._hideBlockLayer()}if(this._resizeListenerId){sap.ui.core.ResizeHandler.deregister(this._resizeListenerId);this._resizeListenerId=null}};
sap.ui.core.Popup.getCurrentFocusInfo=function(){var _=null;var f=sap.ui.getCore().getCurrentFocusedControlId();if(f){var F=sap.ui.getCore().getControl(f);_={'sFocusId':f,'oFocusInfo':F?F.getFocusInfo():{}}}else{try{var e=document.activeElement;if(e){_={'sFocusId':e.id,'oFocusedElement':e,'oFocusInfo':{}}}}catch(a){_=null}}return _};
sap.ui.core.Popup.applyFocusInfo=function(p){if(p){var f=sap.ui.getCore().getControl(p.sFocusId);if(f){f.applyFocusInfo(p.oFocusInfo)}else{var e=jQuery.sap.domById(p.sFocusId)||p.oFocusedElement;jQuery.sap.focus(e)}}};
sap.ui.core.Popup.prototype.setContent=function(c){this.oContent=c;return this};
sap.ui.core.Popup.prototype.getContent=function(){return this.oContent};
sap.ui.core.Popup.prototype.setPosition=function(m,a,o,b,c){this._oPosition=jQuery.extend({},this._oPosition,{"my":m,"at":a,"of":o,"offset":b,"collision":c});if(this.eOpenState!=sap.ui.core.OpenState.CLOSED){this._applyPosition(this._oPosition);this._oBlindLayer&&this._oBlindLayer.update(this._$())}return this};
sap.ui.core.Popup.prototype._applyPosition=function(p){var r=sap.ui.getCore().getConfiguration().getRTL();var R=this._$();var a=p.at;if(typeof(a)==="string"){R.css("display","block").position(this._resolveReference(this._convertPositionRTL(p,r)));this._fixPositioning(p,r)}else if(sap.ui.core.CSSSize.isValid(a.left)&&sap.ui.core.CSSSize.isValid(a.top)){R.css("left",a.left).css("top",a.top)}else if(sap.ui.core.CSSSize.isValid(a.right)&&sap.ui.core.CSSSize.isValid(a.top)){R.css("right",a.right).css("top",a.top)}else if(typeof(a.left)==="number"&&typeof(a.top)==="number"){var d=R[0];if(d&&d.style.right){var w=R.outerWidth();R.css("right",(document.documentElement.clientWidth-(a.left+w))+"px").css("top",a.top+"px")}else{R.css("left",a.left+"px").css("top",a.top+"px")}}this._oLastPosition=p};
sap.ui.core.Popup.prototype._convertPositionRTL=function(p,r){var f=jQuery.extend({},p);if(r){if(p.offset&&((p.my.indexOf("begin")>-1)||(p.my.indexOf("end")>-1))&&((p.at.indexOf("begin")>-1)||(p.at.indexOf("end")>-1))){f.offset=this._mirrorOffset(p.offset)}f.my=p.my.replace("begin","right").replace("end","left");f.at=p.at.replace("begin","right").replace("end","left")}else{f.my=p.my.replace("end","right").replace("begin","left");f.at=p.at.replace("end","right").replace("begin","left")}return f};
sap.ui.core.Popup.prototype._mirrorOffset=function(o){var O=jQuery.trim(o).split(/\s/);var p=parseInt(O[0],10);return(-p)+" "+O[O.length-1]};
sap.ui.core.Popup.prototype._fixPositioning=function(p,r){var m=p.my;if(typeof(m)==="string"){if(r&&((m.indexOf("right")>-1)||(m.indexOf("begin")>-1)||(m.indexOf("center")>-1))){var R=this._$();var a=jQuery(window).width()-R.outerWidth()-R.offset().left;R.css("right",a+"px").css("left","")}else if((m.indexOf("right")>-1)||(m.indexOf("end")>-1)){var R=this._$();var a=jQuery(window).width()-R.outerWidth()-R.offset().left;R.css("right",a+"px").css("left","")}}};
sap.ui.core.Popup.prototype._resolveReference=function(p){var r=p;if(p.of instanceof sap.ui.core.Element){r=jQuery.extend({},p,{of:p.of.getDomRef()})}return r};
sap.ui.core.Popup.prototype.setShadow=function(s){this._bShadow=s;if(this.eOpenState!=sap.ui.core.OpenState.CLOSED){this._$().toggleClass("sapUiShd",s)}return this};
sap.ui.core.Popup.prototype.setModal=function(m,M){var o=this._bModal;this._bModal=m;this._sModalCSSClass=M;if(this.isOpen()){if(o!==m){if(m){this._showBlockLayer()}else{this._hideBlockLayer()}if(this.touchEnabled&&this._bAutoClose){if(!m){jQuery(document).bind("vmousedown",jQuery.proxy(this._fAutoCloseHandler,this))}else{jQuery(document).unbind("vmousedown",this._fAutoCloseHandler)}}}}return this};
sap.ui.core.Popup.prototype.setAutoClose=function(a){if(this.touchEnabled&&this.isOpen()&&this._bAutoClose!==a){if(!this._bModal){if(a){jQuery(document).bind("vmousedown",jQuery.proxy(this._fAutoCloseHandler,this))}else{jQuery(document).unbind("vmousedown",this._fAutoCloseHandler)}}}this._bAutoClose=a;return this};
sap.ui.core.Popup.prototype.setAutoCloseAreas=function(a){this._aAutoCloseAreas=a;return this};
sap.ui.core.Popup.prototype.setAnimations=function(o,c){if(o&&(typeof(o)=="function")){this._animations.open=o}if(c&&(typeof(c)=="function")){this._animations.close=c}return this};
sap.ui.core.Popup.prototype.setDurations=function(o,c){if((o>0)||(o===0)){this._durations.open=o}if((c>0)||(c===0)){this._durations.close=c}return this};
sap.ui.core.Popup.prototype.isOpen=function(){return this.bOpen};
sap.ui.core.Popup.prototype.getOpenState=function(){return this.eOpenState};
sap.ui.core.Popup.prototype.destroy=function(){if(this._resizeListenerId){sap.ui.core.ResizeHandler.deregister(this._resizeListenerId);this._resizeListenerId=null}this.close();this.oContent=null};
sap.ui.core.Popup.prototype._$=function(f){if(this.oContent instanceof sap.ui.core.Control){var c=this.oContent.$();if(c.length===0||f){jQuery.sap.log.info("Rendering of popup content: "+this.oContent.getId());if(c.length>0){sap.ui.core.RenderManager.preserveContent(c[0],true,false)}sap.ui.getCore().getRenderManager().render(this.oContent,sap.ui.getCore().getStaticAreaRef());c=this.oContent.$()}return c}else if(this.oContent instanceof sap.ui.core.Element){return this.oContent.$()}else{return jQuery(this.oContent)}};
sap.ui.core.Popup.prototype._showBlockLayer=function(){var b=jQuery("#sap-ui-blocklayer-popup");if(b.length===0){var c="sapUiBLy"+(this._sModalCSSClass?" "+this._sModalCSSClass:"");b=jQuery("<div id=\"sap-ui-blocklayer-popup\" tabindex=\"0\" class=\""+c+"\"></div>");b.appendTo(sap.ui.getCore().getStaticAreaRef())}sap.ui.core.Popup.blStack.push(this._iZIndex-2);b.css("z-index",this._iZIndex-2).css("visibility","visible").show()};
sap.ui.core.Popup.prototype._hideBlockLayer=function(){sap.ui.core.Popup.blStack.pop();if(sap.ui.core.Popup.blStack.length>0){jQuery("#sap-ui-blocklayer-popup").css("z-index",sap.ui.core.Popup.blStack[sap.ui.core.Popup.blStack.length-1]).css("visibility","visible").show()}else{jQuery("#sap-ui-blocklayer-popup").css("visibility","inherit").hide()}};
sap.ui.core.Popup.prototype.onmousedown=function(e){if(this._iZIndex===this.getLastZIndex()){return}this._iZIndex=this.getNextZIndex();var r=this._$();r.css("z-index",this._iZIndex);if(this._oBlindLayer){this._oBlindLayer.update(r,this._iZIndex-1)}};
sap.ui.core.Popup.prototype.onAfterRendering=function(e){var r=this.getContent().$();r.toggleClass("sapUiShd",this._bShadow);var p=r.css("position");if(!p||p=="static"){r.css("position","absolute")}var a=r[0];var l=a.style.left;var b=a.style.right;var t=a.style.top;var c=a.style.bottom;if(!(l&&l!="auto"||b&&b!="auto"||t&&t!="auto"||c&&c!="auto")){jQuery.sap.log.debug("reposition popup content "+r.attr("id")+" at "+(window.JSON?JSON.stringify(this._oLastPosition.at):String(this._oLastPosition.at)));this._applyPosition(this._oLastPosition)}r.show().css("visibility","visible").css("z-index",this._iZIndex);if(this._oBlindLayer){this._resizeListenerId=sap.ui.core.ResizeHandler.register(this._$().get(0),jQuery.proxy(this.onresize,this))}};
sap.ui.core.Popup.prototype.onBeforeRendering=function(e){if(this._resizeListenerId){sap.ui.core.ResizeHandler.deregister(this._resizeListenerId);this._resizeListenerId=null}};
sap.ui.core.Popup.prototype.onresize=function(e){if(this.eOpenState!=sap.ui.core.OpenState.CLOSED){this._oBlindLayer&&this._oBlindLayer.update(this._$())}};
