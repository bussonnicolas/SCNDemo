/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSetSimpleView");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.DataSetSimpleView",{metadata:{interfaces:["sap.ui.ux3.DataSetView"],library:"sap.ui.ux3",properties:{"floating":{type:"boolean",group:"Misc",defaultValue:true},"name":{type:"string",group:"Misc",defaultValue:"Name of this View"},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconHovered":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconSelected":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}},aggregations:{"template":{type:"sap.ui.core.Control",multiple:false}}}});
sap.ui.ux3.DataSetSimpleView.prototype.init=function(){this._oDataSet=this.getParent()};
sap.ui.ux3.DataSetSimpleView.prototype.handleSelection=function(e){var o=e.getParameters().oldLeadSelectedIndex,n=e.getParameters().newLeadSelectedIndex;if(o!=-1){jQuery.sap.byId(this.getParent().getSelectedItemId(o)).removeClass("sapUiUx3DSSVSelected")}if(n!=-1){jQuery.sap.byId(this.getParent().getSelectedItemId(n)).addClass("sapUiUx3DSSVSelected")}};
sap.ui.ux3.DataSetSimpleView.prototype.isItemSelected=function(i){return this.getParent().isSelectedIndex(i._index)};
sap.ui.ux3.DataSetSimpleView.prototype.initView=function(I){this.getParent().attachSelectionChanged(this.handleSelection,this);this.items=I;for(var i=0;i<I.length;i++){var t=this.getTemplate().clone(String(i));I[i]._setTemplate(t)}};
sap.ui.ux3.DataSetSimpleView.prototype.exitView=function(I){this.getParent().detachSelectionChanged(this.handleSelection,this);for(var i=0;i<I.length;i++){I[i]._destroyTemplate()}this.items=[]};
