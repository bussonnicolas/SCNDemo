/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.FormColumnLayout.
jQuery.sap.declare("sap.ui.commons.FormColumnLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.FormLayout");

/**
 * Constructor for a new FormColumnLayout.
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
 * <ul>
 * <li>{@link #getColumns columns} : int (default: 1)</li></ul>
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
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.FormLayout#constructor sap.ui.commons.FormLayout}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The FormColumnLayout arranges the FormContainers in several columns.
 * @extends sap.ui.commons.FormLayout
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.5.2. 
 * The layout concept is still under discussion so this will be changed in future.
 * @name sap.ui.commons.FormColumnLayout
 */
sap.ui.commons.FormLayout.extend("sap.ui.commons.FormColumnLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"columns" : {type : "int", group : "Misc", defaultValue : 1}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.FormColumnLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.FormColumnLayout.extend
 * @function
 */


/**
 * Getter for property <code>columns</code>.
 * Number of Columns where the FormContainers are arranged.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>columns</code>
 * @public
 * @name sap.ui.commons.FormColumnLayout#getColumns
 * @function
 */


/**
 * Setter for property <code>columns</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColumns  new value for property <code>columns</code>
 * @return {sap.ui.commons.FormColumnLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormColumnLayout#setColumns
 * @function
 */

// Start of sap/ui/commons/FormColumnLayout.js
///**
// * This file defines behavior for the control, 
// */
//sap.ui.commons.FormColumnLayout.prototype.init = function(){
//   // do something for initialization...
//};

sap.ui.commons.FormColumnLayout.prototype.getClass = function(){
	// returns a CSS style class for this layout to add to the forms DIV
	return ("sapUiFormColumnLayout");
};