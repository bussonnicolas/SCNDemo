/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.FormLayoutRenderer");sap.ui.commons.FormLayoutRenderer={};
sap.ui.commons.FormLayoutRenderer.render=function(r,l){var a=r};
sap.ui.commons.FormLayoutRenderer.renderForm=function(r,l,f){this.renderTitle(r,f.getTitle(),f.getId(),false);var c=f.getFormContainers();for(var i=0,a=c.length;i<a;i++){var C=c[i];var o=sap.ui.getCore().byId(C.getLayout());if(o&&o!=l){o.getRenderer().renderContainer(r,o,C)}else{this.renderContainer(r,o,C)}}};
sap.ui.commons.FormLayoutRenderer.renderContainer=function(r,l,c){var e=false;r.write("<section");r.writeElementData(c);r.addClass("sapUiFormContainer");r.addClass(l.getClass());switch(c.getType()){case sap.ui.commons.FormContainerType.Border:r.addClass("sapUiFormContainerBorder");break;case sap.ui.commons.FormContainerType.Expandable:r.addClass("sapUiFormContainerExp");e=true;break;default:break}if(c.getTooltip_AsString()){r.writeAttributeEscaped('title',c.getTooltip_AsString())}r.writeClasses();r.write(">");this.renderTitle(r,c.getTitle(),c.getId(),e);if(e){r.write("<div id='"+c.getId()+"-content'");if(!c.getExpanded()){r.writeStyle("display","none");r.addStyles()}r.write(">")}var E=c.getFormElements();for(var j=0,a=E.length;j<a;j++){var o=E[j];this.renderElement(r,l,o)}if(e){r.write("</div>")}r.write("</section>")};
sap.ui.commons.FormLayoutRenderer.renderElement=function(r,l,e){r.write("<div");r.writeElementData(e);r.addClass("sapUiFormElement");r.writeClasses();r.write(">");var L=e.getAggregation("label");if(L){r.renderControl(L)}var f=e.getFields();if(f&&f.length>0){for(var k=0,a=f.length;k<a;k++){var F=f[k];r.renderControl(F)}}r.write("</div>")};
sap.ui.commons.FormLayoutRenderer.renderTitle=function(r,t,i,e){if(t){r.write("<header");if(typeof t!=="string"){r.writeElementData(t);if(t.getTooltip_AsString()){r.writeAttributeEscaped('title',t.getTooltip_AsString())}}r.write(">");if(e){r.write("<div id='"+i+"-exp' class='sapUiFormContainerExpander' tabindex='0'>+</div>")}if(typeof t==="string"){r.writeEscaped(t,true)}else{if(t.getIcon()){r.write("<img id='"+i+"-ico' src='");r.writeEscaped(t.getIcon());r.write("' role='presentation' alt=''/>")}r.writeEscaped(t.getText(),true)}r.write("</header>")}};
