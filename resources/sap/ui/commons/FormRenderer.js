/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.FormRenderer");sap.ui.commons.FormRenderer={};
sap.ui.commons.FormRenderer.render=function(r,f){var a=r;var l=sap.ui.getCore().byId(f.getLayout());a.write("<div");a.writeControlData(f);a.addClass("sapUiForm");if(l&&l.getClass){a.addClass(l.getClass())}if(f.getTooltip_AsString()){a.writeAttributeEscaped('title',f.getTooltip_AsString())}a.writeClasses();a.write(">");if(l){l.getRenderer().renderForm(a,l,f)}a.write("</div>")};
