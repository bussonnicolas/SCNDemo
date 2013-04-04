/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.Exact");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.Exact",{metadata:{publicMethods:["getResultArea","getSearchField"],library:"sap.ui.ux3",properties:{"resultText":{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"attributes",aggregations:{"settingsMenu":{type:"sap.ui.commons.Menu",multiple:false},"attributes":{type:"sap.ui.ux3.ExactAttribute",multiple:true,singularName:"attribute"}},events:{"search":{},"refineSearch":{}}}});sap.ui.ux3.Exact.M_EVENTS={'search':'search','refineSearch':'refineSearch'};jQuery.sap.require("sap.ui.ux3.ExactArea");jQuery.sap.require("sap.ui.ux3.ExactAttribute");jQuery.sap.require("sap.ui.ux3.ExactBrowser");jQuery.sap.require("sap.ui.commons.SearchField");jQuery.sap.require("sap.ui.commons.Button");jQuery.sap.require("sap.ui.commons.Menu");jQuery.sap.require("sap.ui.commons.TextView");(function(){sap.ui.ux3.Exact.getMetadata()._mHiddenAggregations={"controls":{multiple:true,type:"sap.ui.core.Control"}};sap.ui.ux3.Exact.prototype.init=function(){var t=this;this._searchArea=new sap.ui.ux3.ExactArea(this.getId()+"-searchArea",{toolbarVisible:false});this._searchArea.addStyleClass("sapUiUx3ExactSearchArea");this.addAggregation("controls",this._searchArea);this._search_input=new sap.ui.commons.SearchField(this.getId()+"-searchTF",{enableListSuggest:false});this._search_input.attachSearch(function(e){_(t,e)});this._search_input.addStyleClass("sapUiUx3ExactSearchText");this._searchArea.addContent(this._search_input);this._browser=new sap.ui.ux3.ExactBrowser(this.getId()+"-browser",{title:"Attributes"});this._browser.addStyleClass("sapUiUx3ExactBrowseArea");this.addAggregation("controls",this._browser);this._browser.attachAttributeSelected(function(e){a(t,e)});this._resultArea=new sap.ui.ux3.ExactArea(this.getId()+"-resultArea");this.addAggregation("controls",this._resultArea);this._resultText=new sap.ui.commons.TextView(this.getId()+"-resultAreaTitle",{design:sap.ui.commons.TextViewDesign.Bold});this._resultText.addStyleClass("sapUiUx3ExactViewTitle");this.addAggregation("controls",this._resultText);this._bDetailsVisible=false};sap.ui.ux3.Exact.prototype.getSettingsMenu=function(){return this._browser.getOptionsMenu()};sap.ui.ux3.Exact.prototype.setSettingsMenu=function(s){this._browser.setOptionsMenu(s);return this};sap.ui.ux3.Exact.prototype.destroySettingsMenu=function(){this._browser.destroyOptionsMenu();return this};sap.ui.ux3.Exact.prototype.getResultText=function(){return this._resultText.getText()};sap.ui.ux3.Exact.prototype.setResultText=function(r){this._resultText.setText(r);return this};sap.ui.ux3.Exact.prototype.getAttributes=function(){return this._browser.getAttributes()};sap.ui.ux3.Exact.prototype.insertAttribute=function(A,i){this._browser.insertAttribute(A,i);return this};sap.ui.ux3.Exact.prototype.addAttribute=function(A){this._browser.addAttribute(A);return this};sap.ui.ux3.Exact.prototype.removeAttribute=function(e){return this._browser.removeAttribute(e)};sap.ui.ux3.Exact.prototype.removeAllAttributes=function(){return this._browser.removeAllAttributes()};sap.ui.ux3.Exact.prototype.indexOfAttribute=function(A){return this._browser.indexOfAttribute(A)};sap.ui.ux3.Exact.prototype.destroyAttributes=function(){this._browser.destroyAttributes();return this};sap.ui.ux3.Exact.prototype.getResultArea=function(){return this._resultArea};sap.ui.ux3.Exact.prototype.getSearchField=function(){return this._search_input};var _=function(t,e){t._sSearchQuery=e.getParameter("query");t.fireSearch({query:t._sSearchQuery});t._bDetailsVisible=true;t.invalidate()};var a=function(t,e){t.fireRefineSearch({query:t._sSearchQuery,changedAttribute:e.getParameter("attribute"),allSelectedAttributes:e.getParameter("allAttributes")})}}());
