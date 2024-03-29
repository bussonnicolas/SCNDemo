/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Image");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Image",{metadata:{library:"sap.ui.commons",properties:{"src":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"height":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"decorative":{type:"boolean",group:"Accessibility",defaultValue:true},"alt":{type:"string",group:"Accessibility",defaultValue:null},"useMap":{type:"string",group:"Misc",defaultValue:null}},events:{"press":{}}}});sap.ui.commons.Image.M_EVENTS={'press':'press'};
sap.ui.commons.Image.prototype.onclick=function(e){this.firePress({})};
sap.ui.commons.Image.prototype.onsapenter=sap.ui.commons.Image.prototype.onclick;
