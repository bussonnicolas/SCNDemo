/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Form");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Form",{metadata:{library:"sap.ui.commons",aggregations:{"formContainers":{type:"sap.ui.commons.FormContainer",multiple:true,singularName:"formContainer"},"title":{type:"sap.ui.commons.Title",altTypes:["string"],multiple:false}},associations:{"layout":{type:"sap.ui.commons.FormLayout",multiple:false}}}});(function(){sap.ui.commons.Form.prototype.setLayout=function(l){if(this.getLayout()){var L=sap.ui.getCore().byId(this.getLayout());this.removeDelegate(L)}this.setAssociation("layout",l);if(this.getLayout()){L=sap.ui.getCore().byId(this.getLayout());this.addDelegate(L)}return this}}());
