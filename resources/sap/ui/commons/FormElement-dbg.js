/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.FormElement.
jQuery.sap.declare("sap.ui.commons.FormElement");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new FormElement.
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
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.commons.Label|string</li>
 * <li>{@link #getFields fields} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A form element is a combination of one labe and different controls assoziated to this label.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.5.2. 
 * The layout concept is still under discussion so this will be changed in future.
 * @name sap.ui.commons.FormElement
 */
sap.ui.core.Element.extend("sap.ui.commons.FormElement", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	aggregations : {
    	"label" : {type : "sap.ui.commons.Label", altTypes : ["string"], multiple : false}, 
    	"fields" : {type : "sap.ui.core.Control", multiple : true, singularName : "field"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.FormElement with name <code>sClassName</code> 
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
 * @name sap.ui.commons.FormElement.extend
 * @function
 */

	
/**
 * Getter for aggregation <code>label</code>.<br/>
 * Label of the fields.Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.commons.Label|string}
 * @public
 * @name sap.ui.commons.FormElement#getLabel
 * @function
 */

/**
 * Setter for the aggregated <code>label</code>.
 * @param oLabel {sap.ui.commons.Label|string}
 * @return {sap.ui.commons.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormElement#setLabel
 * @function
 */


/**
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.commons.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormElement#destroyLabel
 * @function
 */
	
/**
 * Getter for aggregation <code>fields</code>.<br/>
 * formular controls.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.FormElement#getFields
 * @function
 */

/**
 * Inserts a field into the aggregation named <code>fields</code>.
 *
 * @param {sap.ui.core.Control}
 *          oField the field to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the field should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the field is inserted at 
 *             the last position        
 * @return {sap.ui.commons.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormElement#insertField
 * @function
 */


/**
 * Adds some field <code>oField</code> 
 * to the aggregation named <code>fields</code>.
 *
 * @param {sap.ui.core.Control}
 *            oField the field to add; if empty, nothing is inserted
 * @return {sap.ui.commons.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormElement#addField
 * @function
 */


/**
 * Removes an field from the aggregation named <code>fields</code>.
 *
 * @param {int | string | sap.ui.core.Control} vField the field to remove or its index or id
 * @return {sap.ui.core.Control} the removed field or null
 * @public
 * @name sap.ui.commons.FormElement#removeField
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>fields</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.FormElement#removeAllFields
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>fields</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oField the field whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.FormElement#indexOfField
 * @function
 */


/**
 * Destroys all the fields in the aggregation 
 * named <code>fields</code>.
 * @return {sap.ui.commons.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormElement#destroyFields
 * @function
 */

// Start of sap/ui/commons/FormElement.js
/**
 * This file defines behavior for the control,
 */

(function() {

//sap.ui.commons.FormElement.prototype.init = function(){
//   // do something for initialization...
//};

sap.ui.commons.FormElement.prototype.exit = function(){
	this._bLabelAsString = undefined;
};

sap.ui.commons.FormElement.prototype.setLabel = function(vAny) {

	// if only a string is provided just create a internal label control.
	// TODO: set internal label really as "label" aggregation or just store in internal aggregation?
	var that = this;
	var oLabel = vAny;
	if (typeof oLabel === "string") {
		oLabel = new sap.ui.commons.Label({text: oLabel});
		this._bLabelAsString = true;
	}else{
		this._bLabelAsString = false;
	}
	this.setAggregation("label", oLabel);
	_connectLabelAndField(that);
	return this;

};

sap.ui.commons.FormElement.prototype.getLabel = function() {

	if (this._bLabelAsString) {
		return this.getAggregation("label").getText();
	} else {
		return this.getAggregation("label");
	}

};

sap.ui.commons.FormElement.prototype.addField = function(oField) {

	var that = this;
	this.addAggregation("fields", oField);
	_connectLabelAndField(that);
	return this;

};

sap.ui.commons.FormElement.prototype.setField = function(oField) {

	var that = this;
	this.setAggregation("fields", oField);
	_connectLabelAndField(that);
	return this;

};

sap.ui.commons.FormElement.prototype.insertField = function(oField, iIndex) {

	var that = this;
	this.insertAggregation("fields", oField, iIndex);
	_connectLabelAndField(that);
	return this;

};

// TODO: remove needs also to be considered to define the binding between the
//       Label and the fields

//*** Private helper functions ***

var _connectLabelAndField = function(oThis) {

// TODO: connect label to more than one field using ARIA-LABELEDBY ????

	if (oThis.getAggregation("label") && oThis.getFields() && oThis.getFields().length > 0) {
		// use .getAggregation("label") because getter is overwritten to return only text if provided as string
		var oLabel = oThis.getAggregation("label");
		var oField = oThis.getFields()[0];
		oLabel.setLabelFor(oField);
	}

};

}());