/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Form.
jQuery.sap.declare("sap.ui.commons.Form");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Form.
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
 * <li>{@link #getFormContainers formContainers} : sap.ui.commons.FormContainer[]</li>
 * <li>{@link #getTitle title} : sap.ui.commons.Title|string</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLayout layout} : string | sap.ui.commons.FormLayout</li></ul>
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
 * Form control.
 * Holder for form control to be rendered in a specific form layout.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.5.2. 
 * The layout concept is still under discussion so this will be changed in future.
 * @name sap.ui.commons.Form
 */
sap.ui.core.Control.extend("sap.ui.commons.Form", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	aggregations : {
    	"formContainers" : {type : "sap.ui.commons.FormContainer", multiple : true, singularName : "formContainer"}, 
    	"title" : {type : "sap.ui.commons.Title", altTypes : ["string"], multiple : false}
	},
	associations : {
		"layout" : {type : "sap.ui.commons.FormLayout", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Form with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Form.extend
 * @function
 */

	
/**
 * Getter for aggregation <code>formContainers</code>.<br/>
 * FormContainers with the content of the form.
 * 
 * @return {sap.ui.commons.FormContainer[]}
 * @public
 * @name sap.ui.commons.Form#getFormContainers
 * @function
 */

/**
 * Inserts a formContainer into the aggregation named <code>formContainers</code>.
 *
 * @param {sap.ui.commons.FormContainer}
 *          oFormContainer the formContainer to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formContainer should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formContainer is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Form#insertFormContainer
 * @function
 */


/**
 * Adds some formContainer <code>oFormContainer</code> 
 * to the aggregation named <code>formContainers</code>.
 *
 * @param {sap.ui.commons.FormContainer}
 *            oFormContainer the formContainer to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Form#addFormContainer
 * @function
 */


/**
 * Removes an formContainer from the aggregation named <code>formContainers</code>.
 *
 * @param {int | string | sap.ui.commons.FormContainer} vFormContainer the formContainer to remove or its index or id
 * @return {sap.ui.commons.FormContainer} the removed formContainer or null
 * @public
 * @name sap.ui.commons.Form#removeFormContainer
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>formContainers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.FormContainer[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Form#removeAllFormContainers
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.commons.FormContainer</code> in the aggregation named <code>formContainers</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.FormContainer}
 *            oFormContainer the formContainer whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Form#indexOfFormContainer
 * @function
 */


/**
 * Destroys all the formContainers in the aggregation 
 * named <code>formContainers</code>.
 * @return {sap.ui.commons.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Form#destroyFormContainers
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Container. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.commons.Title|string}
 * @public
 * @name sap.ui.commons.Form#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.commons.Title|string}
 * @return {sap.ui.commons.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Form#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.commons.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Form#destroyTitle
 * @function
 */

/**
 * Layout of the form.
 *
 * @return {string} Id of the element which is the current target of the <code>layout</code> association, or null
 * @public
 * @name sap.ui.commons.Form#getLayout
 * @function
 */


/**
 * Layout of the form.
 *
 * @param {string | sap.ui.commons.FormLayout} vLayout 
 *    Id of an element which becomes the new target of this <code>layout</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Form#setLayout
 * @function
 */

// Start of sap/ui/commons/Form.js
/**
 * This file defines behavior for the control,
 */

(function() {

//sap.ui.commons.Form.prototype.init = function(){
//   // do something for initialization...
//};

sap.ui.commons.Form.prototype.setLayout = function(oLayout){

	if (this.getLayout()){
		// remove old delegate
		var oLayoutControl = sap.ui.getCore().byId(this.getLayout());
		this.removeDelegate(oLayoutControl);
	}

	this.setAssociation("layout", oLayout);

	// use getter to be sure to get an ID, not an control
	if (this.getLayout()){
		oLayoutControl = sap.ui.getCore().byId(this.getLayout());
		this.addDelegate(oLayoutControl);
	}

	return this;

};

}());