/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ToolPopup");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.ToolPopup",{metadata:{publicMethods:["isOpen","open","close","setPosition"],library:"sap.ui.ux3",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconHover":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconSelected":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"modal":{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"content",aggregations:{"buttons":{type:"sap.ui.core.Control",multiple:true,singularName:"button"},"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},associations:{"initialFocus":{type:"sap.ui.core.Control",multiple:false}},events:{"open":{},"close":{allowPreventDefault:true},"enter":{},"iconChanged":{},"closed":{}}}});sap.ui.ux3.ToolPopup.M_EVENTS={'open':'open','close':'close','enter':'enter','iconChanged':'iconChanged','closed':'closed'};jQuery.sap.require("sap.ui.core.Popup");
sap.ui.ux3.ToolPopup.prototype.init=function(){this.oPopup=null;this._bPositionSet=false};
sap.ui.ux3.ToolPopup.prototype.isOpen=function(){if(this.oPopup&&this.oPopup.isOpen()){return true}return false};
sap.ui.ux3.ToolPopup.prototype.willBeClosed=function(){var e=this.oPopup&&this.oPopup.getOpenState();return e!==sap.ui.core.OpenState.OPENING&&e!==sap.ui.core.OpenState.OPEN};
sap.ui.ux3.ToolPopup.prototype.open=function(){if(!this._bPositionSet){var p=this.getParent();if(p&&p instanceof sap.ui.ux3.Shell){var o=jQuery.sap.domById(p.getId()+"-tool-"+this.getId());if(o){this.setPosition(sap.ui.core.Popup.Dock.BeginTop,sap.ui.core.Popup.Dock.EndTop,o,"13 -6","none")}}}this._bPositionSet=false;this._ensurePopup();this.oPopup.setModal(this.getModal());this._oPreviousFocus=sap.ui.core.Popup.getCurrentFocusInfo();var i=this.getInitialFocus();if(i){this.oPopup.setInitialFocusId(i)}this.fireOpen();this.oPopup.open(400);jQuery.sap.byId(this.getId()+"-arrow").attr("class","sapUiUx3TPArrow sapUiUx3TPArrow"+this._getArrowPosition());return this};
sap.ui.ux3.ToolPopup.prototype._getArrowPosition=function(){var p="BeginTop";var d=this.oPopup._oLastPosition;if(d&&typeof(d.my)==="string"&&typeof(d.at)==="string"){if(d.my=="begin bottom"&&d.at=="begin top"){p="BottomBegin"}}return p};
sap.ui.ux3.ToolPopup.prototype.onsapescape=function(){if(this.fireClose()){this.close()}};
sap.ui.ux3.ToolPopup.prototype.close=function(p){if(this.oPopup&&this.oPopup.isOpen()){this.oPopup.close(400);this.fireEvent("close_always");if(!p){sap.ui.core.Popup.applyFocusInfo(this._oPreviousFocus)}}return this};
sap.ui.ux3.ToolPopup.prototype.onsapenter=function(e){this.fireEnter({originalEvent:e,originalSrcControl:e.srcControl})};
sap.ui.ux3.ToolPopup.prototype._ensurePopup=function(){if(!this.oPopup){this.oPopup=new sap.ui.core.Popup(this,false,true,false);this.oPopup.attachClosed(jQuery.proxy(this.fireClosed,this))}return this.oPopup};
sap.ui.ux3.ToolPopup.prototype.setPosition=function(){this._ensurePopup();this.oPopup.setPosition.apply(this.oPopup,arguments);this._bPositionSet=true;return this};
sap.ui.ux3.ToolPopup.prototype.setIcon=function(i){this.setProperty("icon",i,true);this.fireIconChanged();return this};
sap.ui.ux3.ToolPopup.prototype.setIconHover=function(i){this.setProperty("iconHover",i,true);this.fireIconChanged();return this};
sap.ui.ux3.ToolPopup.prototype.setIconSelected=function(i){this.setProperty("iconSelected",i,true);this.fireIconChanged();return this};
sap.ui.ux3.ToolPopup.prototype.getIconSelected=function(){return this.getProperty("iconSelected")||this.getProperty("iconHover")};
