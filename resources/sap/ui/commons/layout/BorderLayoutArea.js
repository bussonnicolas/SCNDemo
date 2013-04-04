/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutArea");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.layout.BorderLayoutArea",{metadata:{library:"sap.ui.commons",properties:{"areaId":{type:"sap.ui.commons.layout.BorderLayoutAreaTypes",group:"Identification",defaultValue:sap.ui.commons.layout.BorderLayoutAreaTypes.top,deprecated:true},"overflowX":{type:"string",group:"Misc",defaultValue:'auto'},"overflowY":{type:"string",group:"Misc",defaultValue:'auto'},"contentAlign":{type:"string",group:"Misc",defaultValue:'left'},"size":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'100px'},"visible":{type:"boolean",group:"Misc",defaultValue:true}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.BorderLayoutArea.prototype);
sap.ui.commons.layout.BorderLayoutArea.prototype.getAreaId=function(){var p=this.getParent();return(p&&p instanceof sap.ui.commons.layout.BorderLayout)?this.sParentAggregationName:undefined};
sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible=function(v,b){var a=this.getAreaId();if(a==="center"||!b){this.setProperty("visible",v);return this}this.setProperty("visible",v,true);this.getParent().getMetadata().getRenderer().animate(this,v);return this};
