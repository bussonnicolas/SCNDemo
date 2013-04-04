/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.FormColumnLayout");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.FormLayout");sap.ui.commons.FormLayout.extend("sap.ui.commons.FormColumnLayout",{metadata:{library:"sap.ui.commons",properties:{"columns":{type:"int",group:"Misc",defaultValue:1}}}});
sap.ui.commons.FormColumnLayout.prototype.getClass=function(){return("sapUiFormColumnLayout")};
