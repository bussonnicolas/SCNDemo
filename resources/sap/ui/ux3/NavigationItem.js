/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.NavigationItem");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Item");sap.ui.core.Item.extend("sap.ui.ux3.NavigationItem",{metadata:{library:"sap.ui.ux3",defaultAggregation:"subItems",aggregations:{"subItems":{type:"sap.ui.ux3.NavigationItem",multiple:true,singularName:"subItem"}}}});
