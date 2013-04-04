/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.FormLayout");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.FormLayout",{metadata:{library:"sap.ui.commons"}});(function(){sap.ui.commons.FormLayout.prototype.getClass=function(){return("sapUiFormLayout")};sap.ui.commons.FormLayout.prototype.onclick=function(e){var c;if(e.srcControl instanceof sap.ui.commons.FormContainer){c=e.srcControl}else if(e.srcControl instanceof sap.ui.commons.Title&&e.srcControl.getParent()instanceof sap.ui.commons.FormContainer){c=e.srcControl.getParent()}if(c&&c.getLayout()==this.getId()){if(e.target.id==c.getId()+"-exp"){var E=!c.getExpanded();c.setProperty("expanded",E,true);if(E){jQuery.sap.byId(c.getId()+"-content").css("display","")}else{jQuery.sap.byId(c.getId()+"-content").css("display","none")}}}};sap.ui.commons.FormLayout.prototype.onsapenter=function(e){this.onclick(e)}}());
