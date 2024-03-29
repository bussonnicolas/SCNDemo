/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ImageRenderer");sap.ui.commons.ImageRenderer={};
sap.ui.commons.ImageRenderer.render=function(r,i){var a=r;if(!i.getVisible()){return}a.write("<img");a.writeControlData(i);a.writeAttributeEscaped("src",i.getSrc()||sap.ui.resource('sap.ui.commons','img/1x1.gif'));a.addClass("sapUiImg");if(i.hasListeners("press")){a.addClass("sapUiImgWithHandler")}if(!i.getSrc()){a.addClass("sapUiImgNoSource")}a.writeClasses();var t=i.getTooltip_AsString();if(t){a.writeAttributeEscaped("title",t)}var u=i.getUseMap();if(u){if(!(jQuery.sap.startsWith(u,"#"))){u="#"+u}a.writeAttributeEscaped("useMap",u)}var m=0;if((i.getDecorative()&&(!u))){m=-1;a.writeAttribute("role","presentation");a.write(" alt=''")}else{if(i.getAlt()){a.writeAttributeEscaped("alt",i.getAlt()||t)}else if(t){a.writeAttributeEscaped("alt",t)}}a.writeAttribute("tabIndex",m);var b="";if(i.getWidth()&&i.getWidth()!=''){b+="width:"+i.getWidth()+";"}if(i.getHeight()&&i.getHeight()!=''){b+="height:"+i.getHeight()+";"}if(b!=""){a.writeAttribute("style",b)}a.write("/>")};
