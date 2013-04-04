/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.DatePickerRenderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");jQuery.sap.require("sap.ui.commons.DatePicker");(function($){var r=$.datepicker.regional;function d(l,s){r[l]=jQuery.extend(r[l]||{},s)}d('en',{firstDay:0,yearSuffix:''})}(jQuery));sap.ui.commons.DatePickerRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.DatePickerRenderer.renderOuterAttributes=function(r,c){r.addClass("sapUiTfCombo");this.renderDatePickerARIAInfo(r,c)};
sap.ui.commons.DatePickerRenderer.renderOuterContentBefore=function(r,c){r.write("<div");r.writeAttribute('id',c.getId()+'-icon');r.addClass("sapUiTfDateIcon");r.writeClasses();r.write("></div>")};
sap.ui.commons.DatePickerRenderer.renderInnerAttributes=function(r,d){if(d.mobile){r.writeAttribute('type','date');r.addStyle('position','absolute')}};
sap.ui.commons.DatePickerRenderer.renderDatePickerARIAInfo=function(r,c){r.writeAccessibilityState(null,{role:'widget',haspopup:true,owns:c.getId()+"-input"})};
