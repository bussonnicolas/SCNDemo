/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
 
jQuery.sap.declare("sap.ui.commons.SegmentedButtonRenderer");

/**
 * @class SegmentedButton renderer. 
 * @static
 */
sap.ui.commons.SegmentedButtonRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.SegmentedButtonRenderer.render = function(oRenderManager, oControl){ 
    // convenience variable
	var rm = oRenderManager;
	
	if (!oControl.getVisible()) {
		return;
	}
    
	// write the HTML into the render manager  
    rm.write("<span");
    rm.writeControlData(oControl);
    rm.addClass("sapUiSegmentedButton");
    rm.writeClasses();
    // ARIA
	rm.writeAccessibilityState(oControl, {
		role: "radiogroup",
		disabled: !oControl.getEnabled()
	});
	rm.write(">"); // SPAN element
	this.renderButtons(rm,oControl);
    rm.write("</span>");
};

sap.ui.commons.SegmentedButtonRenderer.renderButtons = function(oRenderManager, oControl) {
	// convenience variable
	var rm = oRenderManager,
		aButtons = oControl.getButtons();
    jQuery.each(aButtons, function(i,oButton) {
    	rm.renderControl(oButton);
    });
};