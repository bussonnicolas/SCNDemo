/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.FormContainer.
jQuery.sap.declare("sap.ui.commons.FormContainer");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new FormContainer.
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
 * <li>{@link #getType type} : sap.ui.commons.FormContainerType (default: sap.ui.commons.FormContainerType.Border)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormElements formElements} : sap.ui.commons.FormElement[]</li>
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
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Used to group form elements.
 * Can contain other form elements or containers.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.8.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.5.2. 
 * The layout concept is still under discussion so this will be changed in future.
 * @name sap.ui.commons.FormContainer
 */
sap.ui.core.Element.extend("sap.ui.commons.FormContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"type" : {type : "sap.ui.commons.FormContainerType", group : "Appearance", defaultValue : sap.ui.commons.FormContainerType.Border},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"formElements" : {type : "sap.ui.commons.FormElement", multiple : true, singularName : "formElement"}, 
    	"title" : {type : "sap.ui.commons.Title", altTypes : ["string"], multiple : false}
	},
	associations : {
		"layout" : {type : "sap.ui.commons.FormLayout", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.FormContainer with name <code>sClassName</code> 
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
 * @name sap.ui.commons.FormContainer.extend
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type of the FormConainer. E.g. with border, collapsable...
 *
 * Default value is <code>Border</code>
 *
 * @return {sap.ui.commons.FormContainerType} the value of property <code>type</code>
 * @public
 * @name sap.ui.commons.FormContainer#getType
 * @function
 */


/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Border</code> 
 *
 * @param {sap.ui.commons.FormContainerType} oType  new value for property <code>type</code>
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#setType
 * @function
 */

/**
 * Getter for property <code>expanded</code>.
 * Group is expanded.
 * This property works only if type = expandable
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ui.commons.FormContainer#getExpanded
 * @function
 */


/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#setExpanded
 * @function
 */
	
/**
 * Getter for aggregation <code>formElements</code>.<br/>
 * Elements of the FormContainer.
 * 
 * @return {sap.ui.commons.FormElement[]}
 * @public
 * @name sap.ui.commons.FormContainer#getFormElements
 * @function
 */

/**
 * Inserts a formElement into the aggregation named <code>formElements</code>.
 *
 * @param {sap.ui.commons.FormElement}
 *          oFormElement the formElement to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formElement should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formElement is inserted at 
 *             the last position        
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#insertFormElement
 * @function
 */


/**
 * Adds some formElement <code>oFormElement</code> 
 * to the aggregation named <code>formElements</code>.
 *
 * @param {sap.ui.commons.FormElement}
 *            oFormElement the formElement to add; if empty, nothing is inserted
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#addFormElement
 * @function
 */


/**
 * Removes an formElement from the aggregation named <code>formElements</code>.
 *
 * @param {int | string | sap.ui.commons.FormElement} vFormElement the formElement to remove or its index or id
 * @return {sap.ui.commons.FormElement} the removed formElement or null
 * @public
 * @name sap.ui.commons.FormContainer#removeFormElement
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>formElements</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.FormElement[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.FormContainer#removeAllFormElements
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.commons.FormElement</code> in the aggregation named <code>formElements</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.FormElement}
 *            oFormElement the formElement whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.FormContainer#indexOfFormElement
 * @function
 */


/**
 * Destroys all the formElements in the aggregation 
 * named <code>formElements</code>.
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#destroyFormElements
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Container. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.commons.Title|string}
 * @public
 * @name sap.ui.commons.FormContainer#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.commons.Title|string}
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#destroyTitle
 * @function
 */

/**
 * Layout of the container. If not filled the layout of the parent container or form is used
 *
 * @return {string} Id of the element which is the current target of the <code>layout</code> association, or null
 * @public
 * @name sap.ui.commons.FormContainer#getLayout
 * @function
 */


/**
 * Layout of the container. If not filled the layout of the parent container or form is used
 *
 * @param {string | sap.ui.commons.FormLayout} vLayout 
 *    Id of an element which becomes the new target of this <code>layout</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormContainer#setLayout
 * @function
 */

// Start of sap/ui/commons/FormContainer.js
/**
 * This file defines behavior for the control,
 */

(function() {

//sap.ui.commons.FormContainer.prototype.init = function(){
//   // do something for initialization...
//};

/*
 * If the Container has no own Layout assigned use the one of the parent container or form
 */
sap.ui.commons.FormContainer.prototype.getLayout = function(){

	var oLayout = this.getAssociation("layout");

	if (!oLayout) {
		var oParent = this.getParent();
		if (oParent &&(oParent instanceof sap.ui.commons.Form || oParent instanceof sap.ui.commons.FormContainer)) {
			oLayout = oParent.getLayout();
		}
	}

	return oLayout;

};

sap.ui.commons.FormContainer.prototype.setLayout = function(oLayout){

	var oOldLayout = this.getAssociation("layout");
	if (oOldLayout){
		// remove old delegate
		var oLayoutControl = sap.ui.getCore().byId(oOldLayout);
		this.removeDelegate(oLayoutControl);
	}

	this.setAssociation("layout", oLayout);

	// use getter to be sure to get an ID, not an control
	var oNewLayout = this.getAssociation("layout");
	if (oNewLayout){
		oLayoutControl = sap.ui.getCore().byId(oNewLayout);
		this.addDelegate(oLayoutControl);
	}

	return this;

};

}());