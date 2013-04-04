/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.FormLayout.
jQuery.sap.declare("sap.ui.commons.FormLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new FormLayout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Base layout for Forms.
 * Other Layouts must inherit from this one.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.5.2. 
 * The layout concept is still under discussion so this will be changed in future.
 * @name sap.ui.commons.FormLayout
 */
sap.ui.core.Control.extend("sap.ui.commons.FormLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.FormLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.FormLayout.extend
 * @function
 */


// Start of sap/ui/commons/FormLayout.js
/**
 * This file defines behavior for the control,
 */

(function() {

//sap.ui.commons.FormLayout.prototype.init = function(){
//   // do something for initialization...
//};

sap.ui.commons.FormLayout.prototype.getClass = function(){
	// returns a CSS style class for this layout to add to the forms DIV
	return ("sapUiFormLayout");
};

sap.ui.commons.FormLayout.prototype.onclick = function(oEvent){

	var oContainer;
	if (oEvent.srcControl instanceof sap.ui.commons.FormContainer) {
		oContainer = oEvent.srcControl;
	} else if(oEvent.srcControl instanceof sap.ui.commons.Title && oEvent.srcControl.getParent() instanceof sap.ui.commons.FormContainer){
		oContainer = oEvent.srcControl.getParent();
	}

	if (oContainer && oContainer.getLayout() == this.getId()) {
		// in container and layout is responsible for the container (in case Form has different layout)
		if (oEvent.target.id == oContainer.getId()+"-exp") {
			var bExpanded = !oContainer.getExpanded();
			oContainer.setProperty("expanded", bExpanded, true); // no rerendering
			if (bExpanded) {
				//show content
				jQuery.sap.byId(oContainer.getId()+"-content").css("display", "");
			} else {
				//hide content
				jQuery.sap.byId(oContainer.getId()+"-content").css("display", "none");
			}
		}
	}

};

sap.ui.commons.FormLayout.prototype.onsapenter = function(oEvent){
	this.onclick(oEvent);
};

}());