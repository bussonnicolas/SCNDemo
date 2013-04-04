/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.FormColumnLayout
jQuery.sap.declare("sap.ui.commons.FormColumnLayoutRenderer");
jQuery.sap.require("sap.ui.commons.FormLayoutRenderer");

/**
 * @class FormColumnLayout renderer. 
 * @static
 */
sap.ui.commons.FormColumnLayoutRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.FormLayoutRenderer);

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the control that should be rendered
 */
sap.ui.commons.FormColumnLayoutRenderer.render = function(oRenderManager, oLayout){
    // convenience variable
	var rm = oRenderManager;

	// stand alone the layout should render nothing

};

/**
 * Renders the HTML for the given form content, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the Layout control that should be rendered
 * @param {sap.ui.commons.Form} oForm, a form control to render its content
 */
sap.ui.commons.FormColumnLayoutRenderer.renderForm = function(rm, oLayout, oForm){

	/*
	 * TODO:
	 *   - consider to define hooks in the layout for rendering the groups and elements
	 */

	// Form header
	this.renderTitle(rm, oForm.getTitle(), oForm.getId(), false);

	var iColumns = oLayout.getColumns();

	rm.write("<DIV");
	rm.addClass("sapUiFormColumnLayoutFlex");
	rm.writeClasses();
	rm.write(">"); // DIV element

	var aContainers = oForm.getFormContainers();

	for (var i = 0; i < iColumns; i++) {
		rm.write("<DIV");
		rm.addClass("sapUiFormColumnLayoutCol");
		rm.writeClasses();
		rm.write(">"); // DIV element
		var aContainers = oForm.getFormContainers();
		for (var j = i, jl = aContainers.length; j < jl; j=j+iColumns) {
			var oContainer = aContainers[j];
			var oContainerLayout = sap.ui.getCore().byId(oContainer.getLayout());
			if (oContainerLayout && oContainerLayout.getMetadata().getName() != oLayout.getMetadata().getName()) {
				oContainerLayout.getRenderer().renderContainer(rm, oContainerLayout, oContainer);
			}else{
				// same layout -> use internal function direct
				this.renderContainer(rm, oContainerLayout, oContainer);
			}
		}
		rm.write("</DIV>");
	}
	
	
	rm.write("</DIV>");

};

sap.ui.commons.FormColumnLayoutRenderer.renderContainer = function(rm, oLayout, oContainer){

	var bExpandable = false;

	rm.write("<section");
	rm.writeElementData(oContainer);
	rm.addClass("sapUiFormContainer");
	rm.addClass(oLayout.getClass());
	switch (oContainer.getType()) {
	case sap.ui.commons.FormContainerType.Border:
		rm.addClass("sapUiFormContainerBorder");
		break;
	case sap.ui.commons.FormContainerType.Expandable:
		rm.addClass("sapUiFormContainerExp");
		bExpandable = true;
		break;

	default:
		break;
	}
	if(oContainer.getTooltip_AsString()) {
		rm.writeAttributeEscaped('title', oContainer.getTooltip_AsString());
	}
	rm.writeClasses();
	rm.write(">");
	this.renderTitle(rm, oContainer.getTitle(), oContainer.getId(), bExpandable);

	var jColumns = oLayout.getColumns();

	rm.write("<div id='"+oContainer.getId()+"-content'");
	rm.addClass("sapUiFormColumnLayoutFlex");
	rm.writeClasses();	
	if (bExpandable) {
		if (!oContainer.getExpanded()) {
			rm.writeStyle("display", "none");
			rm.addStyles();
		}
	}
	rm.write(">");

	for (var k = 0; k < jColumns; k++) {
		rm.write("<DIV");
		rm.addClass("sapUiFormColumnLayoutCol");
		rm.writeClasses();
		rm.write(">"); // DIV element
		var aElements = oContainer.getFormElements();
		for (var l = k, ll = aElements.length; l < ll; l=l+jColumns) {

			var oElement = aElements[l];

			this.renderElement(rm, oLayout, oElement);
		}
		rm.write("</div>");
	}
	rm.write("</div></section>");

};