/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.commons.FormRenderer");

/**
 * @class Form renderer.
 * @static
 */
sap.ui.commons.FormRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oForm an object representation of the control that should be rendered
 */
sap.ui.commons.FormRenderer.render = function(oRenderManager, oForm){

	// convenience variable
	var rm = oRenderManager;
	var oLayout = sap.ui.getCore().byId(oForm.getLayout());

	// write only an DIV for the form and let render the layout the rest
	rm.write("<div");
	rm.writeControlData(oForm);
	rm.addClass("sapUiForm");
	if (oLayout && oLayout.getClass) {
		rm.addClass(oLayout.getClass());
	}
	if(oForm.getTooltip_AsString()) {
		rm.writeAttributeEscaped('title', oForm.getTooltip_AsString());
	}
	rm.writeClasses();
	rm.write(">");

	if (oLayout) {
		// render the layout with the content of this form control
    	oLayout.getRenderer().renderForm(rm, oLayout, oForm);
	}

	rm.write("</div>");
};