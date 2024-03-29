/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Link");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Link",{metadata:{publicMethods:["focus"],library:"sap.ui.commons",properties:{"text":{type:"string",group:"Appearance",defaultValue:''},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"",defaultValue:true},"helpId":{type:"string",group:"Behavior",defaultValue:''},"href":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"target":{type:"string",group:"Data",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},associations:{"ariaDescribedBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},"ariaLabelledBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{"press":{allowPreventDefault:true}}}});sap.ui.commons.Link.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.apply(sap.ui.commons.Link.prototype,[true]);
sap.ui.commons.Link.prototype.onclick=function(e){if(this.getEnabled()){if(!this.firePress()){e.preventDefault()}}else{e.preventDefault()}};
