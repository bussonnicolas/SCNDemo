/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ShellColorPicker");jQuery.sap.require("sap.ui.base.EventProvider");jQuery.sap.require("sap.ui.core.Popup");jQuery.sap.require("sap.ui.commons.Button");
sap.ui.ux3.ShellColorPicker=function(i){sap.ui.base.EventProvider.apply(this);this.id=i};
sap.ui.ux3.ShellColorPicker.prototype=jQuery.sap.newObject(sap.ui.base.EventProvider.prototype);sap.ui.ux3.ShellColorPicker.M_EVENTS={liveChange:"liveChange"};
sap.ui.ux3.ShellColorPicker.prototype.attachLiveChange=function(f,l){this.attachEvent(sap.ui.ux3.ShellColorPicker.M_EVENTS.liveChange,f,l)};
sap.ui.ux3.ShellColorPicker.prototype.detachLiveChange=function(f,l){this.detachEvent(sap.ui.ux3.ShellColorPicker.M_EVENTS.liveChange,f,l)};
sap.ui.ux3.ShellColorPicker.prototype.fireLiveChange=function(c){var p={cssColor:sap.ui.ux3.ShellColorPicker.hslToCss(c)};this.fireEvent(sap.ui.ux3.ShellColorPicker.M_EVENTS.liveChange,p)};
sap.ui.ux3.ShellColorPicker.prototype.isOpen=function(){return(this.oPopup&&this.oPopup.isOpen())};
sap.ui.ux3.ShellColorPicker.prototype.open=function(c,d,m,a,o,b,e){if(this.oPopup&&this.oPopup.isOpen()){return}this.oSlider=new sap.ui.commons.Slider({width:"225px",liveChange:[this.handleSlider,this]});this.oOkBtn=new sap.ui.commons.Button({text:"OK",press:[this.handleOk,this]});this.oCancelBtn=new sap.ui.commons.Button({text:"Cancel",press:[this.handleCancel,this]});this.oInitialColor=c;this.oCurrentColor=jQuery.extend({},this.oInitialColor);this.oSlider.setValue(this.oCurrentColor.l);var r=sap.ui.getCore().createRenderManager();var f=document.createElement("div");var s=sap.ui.getCore().getStaticAreaRef();s.appendChild(f);this.renderHtml(r);r.flush(f);r.destroy;this.oPopup=new sap.ui.core.Popup(f.firstChild,false,true,true).attachClosed(this.handleClose,this);this.oPopup.setAutoCloseAreas([f.firstChild]);this.oPopup.open(d,m,a,o,b,e);s.removeChild(f);f=null;jQuery.sap.byId(this.id).bind("mousedown",jQuery.proxy(this.handleGeneralMouseDown,this));jQuery.sap.byId(this.id+"-img").bind("mousedown",jQuery.proxy(this.handleMouseDown,this));jQuery.sap.byId(this.id+"-marker").bind("mousedown",jQuery.proxy(this.handleMouseDown,this));this._imgOffset=jQuery.sap.byId(this.id+"-img").offset();this.adaptSliderBar(this.oCurrentColor);this.markColorOnImage(this.oCurrentColor);this.adaptPreview(this.oCurrentColor)};
sap.ui.ux3.ShellColorPicker.parseCssRgbString=function(r){r=jQuery.trim(r.replace(/rgb\(/,"").replace(/\)/,""));var R=r.split(",");var o={r:parseInt(R[0],10),g:parseInt(R[1],10),b:parseInt(R[2],10)};return sap.ui.ux3.ShellColorPicker.rgbToHsl(o)};
sap.ui.ux3.ShellColorPicker.prototype.renderHtml=function(r){r.write("<div id='"+this.id+"' class='sapUiUx3ShellColorPicker'>");r.write("<img id='"+this.id+"-img' src='"+sap.ui.resource('sap.ui.ux3','img/colors-h.png')+"' />");r.renderControl(this.oSlider);r.write("<div id='"+this.id+"-grad' class='sapUiUx3ShellColorPickerGradient'></div>");r.write("<div id='"+this.id+"-marker' class='sapUiUx3ShellColorPickerMarker'></div>");r.write("<div id='"+this.id+"-preview' class='sapUiUx3ShellColorPickerPreview'></div>");r.renderControl(this.oOkBtn);r.renderControl(this.oCancelBtn);r.write("</div>")};
sap.ui.ux3.ShellColorPicker.prototype.markColorOnImage=function(c){var x=c.h*225;var y=(1-c.s)*75;jQuery.sap.byId(this.id+"-marker").css("left",x+10).css("top",y+10)};
sap.ui.ux3.ShellColorPicker.prototype.markColorOnSlider=function(c){this.oSlider.setValue(c.l)};
sap.ui.ux3.ShellColorPicker.prototype.adaptSliderBar=function(c){var g="";var m=jQuery.extend({},c);m.l=50;var a=sap.ui.ux3.ShellColorPicker.hslToCss(m);if(jQuery.browser.mozilla){g="-moz-linear-gradient(left, black, "+a+", white)"}else if(jQuery.browser.webkit){g="-webkit-gradient(linear, left center, right center, from(#000), color-stop(0.5, "+a+"), to(#FFF))"}jQuery.sap.byId(this.id+"-grad").css("background-image",g)};
sap.ui.ux3.ShellColorPicker.prototype.adaptPreview=function(c){jQuery.sap.byId(this.id+"-preview").css("background-color",sap.ui.ux3.ShellColorPicker.hslToCss(c))};
sap.ui.ux3.ShellColorPicker.prototype.handleSlider=function(e){var l=e.getParameter("value");this.oCurrentColor.l=l;this.adaptPreview(this.oCurrentColor);this.fireLiveChange(this.oCurrentColor)};
sap.ui.ux3.ShellColorPicker.prototype.handleGeneralMouseDown=function(e){e.preventDefault()};
sap.ui.ux3.ShellColorPicker.prototype.handleMouseDown=function(e){this.handleMousePos(e);e.preventDefault();jQuery(document).bind("mousemove",jQuery.proxy(this.handleMousePos,this)).bind("mouseup",jQuery.proxy(this.handleMouseUp,this))};
sap.ui.ux3.ShellColorPicker.prototype.handleMouseUp=function(e){this.handleMousePos(e);jQuery(document).unbind("mousemove",this.handleMousePos).unbind("mouseup",this.handleMouseUp)};
sap.ui.ux3.ShellColorPicker.prototype.handleMousePos=function(e){var x=e.pageX-this._imgOffset.left;var y=e.pageY-this._imgOffset.top;x=Math.min(Math.max(x,0),225);y=Math.min(Math.max(y,0),75);var h=x/225;var s=1-y/75;this.oCurrentColor.h=h;this.oCurrentColor.s=s;this.adaptSliderBar(this.oCurrentColor);this.markColorOnImage(this.oCurrentColor);this.adaptPreview(this.oCurrentColor);this.fireLiveChange(this.oCurrentColor)};
sap.ui.ux3.ShellColorPicker.prototype.handleOk=function(){this.fireLiveChange(this.oCurrentColor);this.oPopup.close()};
sap.ui.ux3.ShellColorPicker.prototype.handleCancel=function(){this.fireLiveChange(this.oInitialColor);this.oPopup.close()};
sap.ui.ux3.ShellColorPicker.prototype.handleClose=function(){jQuery.sap.byId(this.id+"-img").unbind("mousedown",this.handleMouseDown);jQuery.sap.byId(this.id+"-marker").unbind("mousedown",this.handleMouseDown);jQuery(document).unbind("mousemove",this.handleMousePos).unbind("mouseup",this.handleMouseUp);jQuery.sap.byId(this.id).unbind("mousedown",this.handleGeneralMouseDown);this.oSlider.destroy();this.oSlider=null;this.oOkBtn.destroy();this.oOkBtn=null;this.oCancelBtn.destroy();this.oCancelBtn=null;var d=jQuery.sap.domById(this.id);d.parentNode.removeChild(d);this.oPopup.destroy();this.oPopup=null};
sap.ui.ux3.ShellColorPicker.rgbToHsl=function(c){var r=c.r/255,g=c.g/255,b=c.b/255;var m=Math.max(r,g,b);var a=Math.min(r,g,b);var h,s,l=(m+a)/2;if(m==a){h=s=0}else{var d=m-a;s=l>0.5?d/(2-m-a):d/(m+a);switch(m){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break}h/=6}return{h:h,s:s,l:l*100}};
sap.ui.ux3.ShellColorPicker.hslToRgb=function(c){var r,g,b;var l=c.l/100;if(c.s==0){r=g=b=l}else{var q=l<0.5?l*(1+c.s):l+c.s-l*c.s;var p=2*l-q;r=sap.ui.ux3.ShellColorPicker.hueToRgb(p,q,c.h+1/3);g=sap.ui.ux3.ShellColorPicker.hueToRgb(p,q,c.h);b=sap.ui.ux3.ShellColorPicker.hueToRgb(p,q,c.h-1/3)}return[r*255,g*255,b*255]};
sap.ui.ux3.ShellColorPicker.hueToRgb=function(p,q,t){if(t<0){t+=1}if(t>1){t-=1}if(t<1/6){return p+(q-p)*6*t}if(t<1/2){return q}if(t<2/3){return p+(q-p)*(2/3-t)*6}return p};
sap.ui.ux3.ShellColorPicker.hslToCss=function(c){var r=sap.ui.ux3.ShellColorPicker.hslToRgb(c);return"rgb("+Math.round(r[0])+","+Math.round(r[1])+","+Math.round(r[2])+")"};
