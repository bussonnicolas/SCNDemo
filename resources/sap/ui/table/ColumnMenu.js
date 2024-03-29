/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.table.ColumnMenu");jQuery.sap.require("sap.ui.table.library");jQuery.sap.require("sap.ui.commons.Menu");sap.ui.commons.Menu.extend("sap.ui.table.ColumnMenu",{metadata:{library:"sap.ui.table"}});jQuery.sap.require("sap.ui.core.RenderManager");jQuery.sap.require("sap.ui.commons.Menu");jQuery.sap.require("sap.ui.commons.MenuItem");jQuery.sap.require("sap.ui.commons.TextField");
sap.ui.table.ColumnMenu.prototype.init=function(){this.addStyleClass("sapUiTableColumnMenu");this.oResBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");this._bInvalidated=true;this._iPopupClosedTimeoutId=null;this._oColumn=null;this._oTable=null;this._attachPopupClosed()};
sap.ui.table.ColumnMenu.prototype.exit=function(){window.clearTimeout(this._iPopupClosedTimeoutId);this._detachEvents();this._oColumn=this._oTable=null};
sap.ui.table.ColumnMenu.prototype.onThemeChanged=function(){this._invalidate()};
sap.ui.table.ColumnMenu.prototype.setParent=function(p){this._detachEvents();this._invalidate();this._oColumn=p;if(p){this._oTable=this._oColumn.getParent();if(this._oTable){}}this._attachEvents();return sap.ui.commons.Menu.prototype.setParent.apply(this,arguments)};
sap.ui.table.ColumnMenu.prototype._attachEvents=function(){if(this._oTable){this._oTable.attachColumnVisibility(this._invalidate,this);this._oTable.attachColumnMove(this._invalidate,this)}};
sap.ui.table.ColumnMenu.prototype._detachEvents=function(){if(this._oTable){this._oTable.detachColumnVisibility(this._invalidate,this);this._oTable.detachColumnMove(this._invalidate,this)}};
sap.ui.table.ColumnMenu.prototype._invalidate=function(){this._bInvalidated=true};
sap.ui.table.ColumnMenu.prototype._attachPopupClosed=function(){var t=this;if(!jQuery.support.touch){this.getPopup().attachClosed(function(e){t._iPopupClosedTimeoutId=window.setTimeout(function(){if(t._oColumn){t._oColumn.focus()}},0)})}};
sap.ui.table.ColumnMenu.prototype.open=function(){if(this._bInvalidated){this._bInvalidated=false;this.destroyItems();this._addMenuItems()}if(this.getItems().length>0){sap.ui.commons.Menu.prototype.open.apply(this,arguments)}};
sap.ui.table.ColumnMenu.prototype._addMenuItems=function(){if(this._oColumn){this._addSortMenuItem(false);this._addSortMenuItem(true);this._addFilterMenuItem();this._addGroupMenuItem();this._addColumnVisibilityMenuItem()}};
sap.ui.table.ColumnMenu.prototype._addSortMenuItem=function(d){var c=this._oColumn;var D=d?"desc":"asc";if(c.getSortProperty()){this.addItem(this._createMenuItem(D,"TBL_SORT_"+D.toUpperCase(),"ico12_sort_"+D+".gif",function(e){c.sort(d)}))}};
sap.ui.table.ColumnMenu.prototype._addFilterMenuItem=function(){var c=this._oColumn;if(c.getFilterProperty()){this.addItem(this._createMenuTextFieldItem("filter","TBL_FILTER","ico12_filter.gif",c.getFilterValue(),function(e){c.filter(this.getValue())}))}};
sap.ui.table.ColumnMenu.prototype._addGroupMenuItem=function(){var c=this._oColumn;var t=this._oTable;if(t&&t.getEnableGrouping()&&c.getSortProperty()){this.addItem(this._createMenuItem("group","TBL_GROUP",null,jQuery.proxy(function(e){t.setGroupBy(c)},this)))}};
sap.ui.table.ColumnMenu.prototype._addColumnVisibilityMenuItem=function(){var t=this._oTable;if(t&&t.getShowColumnVisibilityMenu()){var c=this._createMenuItem("column-visibilty","TBL_COLUMNS");this.addItem(c);var C=new sap.ui.commons.Menu(c.getId()+"-menu");C.addStyleClass("sapUiTableColumnVisibilityMenu");c.setSubmenu(C);var a=t.getColumns();for(var i=0,l=a.length;i<l;i++){var m=this._createColumnVisibilityMenuItem(C.getId()+"-item-"+i,a[i]);C.addItem(m)}}};
sap.ui.table.ColumnMenu.prototype._createColumnVisibilityMenuItem=function(i,c){return new sap.ui.commons.MenuItem(i,{text:c.getLabel()?c.getLabel().getText():null,icon:c.getVisible()?this._getThemedIcon("ico_tick.png"):null,select:jQuery.proxy(function(e){var m=e.getSource();var v=!c.getVisible();if(v||this._oTable._getVisibleColumnCount()>1){c.setVisible(v);m.setIcon(v?this._getThemedIcon("ico_tick.png"):null)}},this)})};
sap.ui.table.ColumnMenu.prototype._createMenuItem=function(i,t,I,h){return new sap.ui.commons.MenuItem(this.getId()+"-"+i,{text:this.oResBundle.getText(t),icon:I?this._getThemedIcon(I):null,select:h||function(){}})};
sap.ui.table.ColumnMenu.prototype._createMenuTextFieldItem=function(i,t,I,v,h){jQuery.sap.require("sap.ui.commons.MenuTextFieldItem");h=h||function(){};return new sap.ui.commons.MenuTextFieldItem(this.getId()+"-"+i,{label:this.oResBundle.getText(t),icon:I?this._getThemedIcon(I):null,value:v,select:h||function(){}})};
sap.ui.table.ColumnMenu.prototype._getThemedIcon=function(i){var c=sap.ui.getCore().getConfiguration().getTheme();return sap.ui.resource("sap.ui.table","themes/"+c+"/img/"+i)};
sap.ui.table.ColumnMenu.prototype._setFilterValue=function(v){var f=sap.ui.getCore().byId(this.getId()+"-filter");if(f){f.setValue(v)}return this};
