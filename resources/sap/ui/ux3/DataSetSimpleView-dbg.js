/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSetSimpleView.
jQuery.sap.declare("sap.ui.ux3.DataSetSimpleView");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new DataSetSimpleView.
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
 * <li>{@link #getFloating floating} : boolean (default: true)</li>
 * <li>{@link #getName name} : string (default: "Name of this View")</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li></ul>
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
 * DataSetSimpleView provides a simple view example for DataSet usage.
 * 
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.DataSetSimpleView
 */
sap.ui.core.Control.extend("sap.ui.ux3.DataSetSimpleView", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.ux3.DataSetView"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"floating" : {type : "boolean", group : "Misc", defaultValue : true},
		"name" : {type : "string", group : "Misc", defaultValue : "Name of this View"},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconHovered" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"template" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.DataSetSimpleView.extend
 * @function
 */


/**
 * Getter for property <code>floating</code>.
 * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>floating</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getFloating
 * @function
 */


/**
 * Setter for property <code>floating</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFloating  new value for property <code>floating</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setFloating
 * @function
 */

/**
 * Getter for property <code>name</code>.
 * Name of the View
 *
 * Default value is <code>"Name of this View"</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getName
 * @function
 */


/**
 * Setter for property <code>name</code>.
 *
 * Default value is <code>"Name of this View"</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setName
 * @function
 */

/**
 * Getter for property <code>icon</code>.
 * Icon source for this view
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getIcon
 * @function
 */


/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setIcon
 * @function
 */

/**
 * Getter for property <code>iconHovered</code>.
 * icon: hovered state
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getIconHovered
 * @function
 */


/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setIconHovered
 * @function
 */

/**
 * Getter for property <code>iconSelected</code>.
 * icon: selected state
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getIconSelected
 * @function
 */


/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setIconSelected
 * @function
 */
	
/**
 * Getter for aggregation <code>template</code>.<br/>
 * template
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getTemplate
 * @function
 */

/**
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setTemplate
 * @function
 */


/**
 * Destroys  in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#destroyTemplate
 * @function
 */

// Start of sap/ui/ux3/DataSetSimpleView.js
///**
// * This file defines behavior for the control,
// */

/**
 * Initialization of DataSetSimpleView
 *
 * @private
*/
sap.ui.ux3.DataSetSimpleView.prototype.init = function(){
   this._oDataSet = this.getParent();
};

/**
 * Eventhandler for the selection of an Item
 *
 * @param {event} oEvent SelectionChanged event
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.handleSelection = function(oEvent) {
	var oldIndex = oEvent.getParameters().oldLeadSelectedIndex,
		newIndex = oEvent.getParameters().newLeadSelectedIndex;
	if (oldIndex != -1) {
		jQuery.sap.byId(this.getParent().getSelectedItemId(oldIndex)).removeClass("sapUiUx3DSSVSelected");
	}
	if (newIndex != -1){
		jQuery.sap.byId(this.getParent().getSelectedItemId(newIndex)).addClass("sapUiUx3DSSVSelected");
	}

};

/**
 * Check if Item <code>oItem</code> is selected
 *
 * @param {DataSetItem} oItem DataSetItem instance
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.isItemSelected = function(oItem) {
	return this.getParent().isSelectedIndex(oItem._index);
};

//*** Interface methods ***

/**
 * View Initialization: Called when selecting the view
 *
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.initView = function(aItems) {
	this.getParent().attachSelectionChanged(this.handleSelection, this);
	this.items = aItems;
	for (var i = 0; i < aItems.length; i++) {
		var template = this.getTemplate().clone(String(i));
		aItems[i]._setTemplate(template);
    }
};

/**
 * View finalization: Called when leaving the view
 *
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.exitView = function(aItems) {
	this.getParent().detachSelectionChanged(this.handleSelection, this);
	for (var i = 0; i < aItems.length; i++) {
		aItems[i]._destroyTemplate();
    }
    this.items = [];
};
