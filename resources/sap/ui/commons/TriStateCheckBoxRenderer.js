/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.TriStateCheckBoxRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.ui.commons.TriStateCheckBoxRenderer={};
sap.ui.commons.TriStateCheckBoxRenderer.render=function(r,c){if(!c.getVisible()){return}var m=0;var R=false;var e=!!c.getEnabled();var a=!!c.getEditable();var i=false;var b=false;var s=c.getSelectionState();var t=sap.ui.core.ValueStateSupport.enrichTooltip(c,c.getTooltip_AsString());var d="sapUiAriaLabel"+c.getIdForLabel();if(c.getValueState()!=null){i=sap.ui.core.ValueState.Error==c.getValueState();b=sap.ui.core.ValueState.Warning==c.getValueState()}r.write("<span");r.writeControlData(c);r.addClass("sapUiTriCb");if(!!c.getWidth()){r.writeAttribute("style","width:"+c.getWidth()+";")}r.writeAccessibilityState(c,{"role":sap.ui.core.AccessibleRole.Checkbox.toLowerCase()});r.writeClasses();if(!e){m=-1}r.writeAttribute("tabIndex",m);r.write(">");r.write("<span");r.writeAccessibilityState(c,{"checked":s.toLowerCase(),"labelledby":d});if(t){r.writeAttributeEscaped("title",t)}if(!e){R=true;m=-1;r.write(" disabled='disabled'")}if(!a){R=true}if(R){r.write(" readOnly='readOnly'")}r.addClass("sapUiTriCbInner");if(!e){r.addClass("sapUiTriCbDis")}if(!a){r.addClass("sapUiTriCbRo")}if(i){r.addClass("sapUiTriCbErr")}else if(b){r.addClass("sapUiTriCbWarn")}if(s==="Checked"){r.addClass("sapUiTriCbCheck")}else if(s==="Mixed"){r.addClass("sapUiTriCbMix")}r.writeClasses();r.write(">");r.write("</span>");if(c.getText()){this.renderText(d,r,c.getText(),c.getTextDirection())}r.write("</span>")};
sap.ui.commons.TriStateCheckBoxRenderer.renderText=function(l,r,t,e){var R=r;R.write("<span id="+l);if(!e||e==sap.ui.core.TextDirection.Inherit){R.write(">");R.writeEscaped(t)}else{R.write(" dir=\""+e+"\">");R.writeEscaped(t)}R.write("</span>")};
