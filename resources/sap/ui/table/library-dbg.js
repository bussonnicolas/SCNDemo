/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.table (1.8.4)
 */
jQuery.sap.declare("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with table controls.
 *
 * @namespace
 * @name sap.ui.table
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.table",
  dependencies : ["sap.ui.core","sap.ui.commons"],
  types: [
    "sap.ui.table.NavigationMode",
    "sap.ui.table.SelectionBehavior",
    "sap.ui.table.SelectionMode",
    "sap.ui.table.SortOrder"
  ],
  interfaces: [],
  controls: [
    "sap.ui.table.ColumnMenu",
    "sap.ui.table.DataTable",
    "sap.ui.table.Table",
    "sap.ui.table.TreeTable"
  ],
  elements: [
    "sap.ui.table.Column",
    "sap.ui.table.Row"
  ],
  version: "1.8.4"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.table.NavigationMode.
jQuery.sap.declare("sap.ui.table.NavigationMode");

/**
 * @class Navigation mode of the table
 *
 * @version 1.8.4
 * @static
 * @public
 */
sap.ui.table.NavigationMode = {
  
    /**
     * Uses the scrollbar control. 
     * @public
     */
    Scrollbar : "Scrollbar",

    /**
     * Uses the paginator control. 
     * @public
     */
    Paginator : "Paginator"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.table.SelectionBehavior.
jQuery.sap.declare("sap.ui.table.SelectionBehavior");

/**
 * @class Selection behavior of the table
 *
 * @version 1.8.4
 * @static
 * @public
 */
sap.ui.table.SelectionBehavior = {
  
    /**
     * Rows can be selected on the complete row. 
     * @public
     */
    Row : "Row",

    /**
     * Rows can only be selected on the row selector. 
     * @public
     */
    RowSelector : "RowSelector",

    /**
     * Rows can only be selected on the row (and the selector is hidden). 
     * @public
     */
    RowOnly : "RowOnly"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.table.SelectionMode.
jQuery.sap.declare("sap.ui.table.SelectionMode");

/**
 * @class Selection mode of the table
 *
 * @version 1.8.4
 * @static
 * @public
 */
sap.ui.table.SelectionMode = {
  
    /**
     * Select multiple rows at a time. 
     * @public
     */
    Multi : "Multi",

    /**
     * Select one row at a time. 
     * @public
     */
    Single : "Single",

    /**
     * No rows can be selected. 
     * @public
     */
    None : "None"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.table.SortOrder.
jQuery.sap.declare("sap.ui.table.SortOrder");

/**
 * @class Sort order of a column
 *
 * @version 1.8.4
 * @static
 * @public
 */
sap.ui.table.SortOrder = {
  
    /**
     * Sort Order: ascending. 
     * @public
     */
    Ascending : "Ascending",

    /**
     * Sort Order: descending. 
     * @public
     */
    Descending : "Descending"

  };
  

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

// map the new Column to the old ColumnHeader
sap.ui.table.ColumnHeader = sap.ui.table.Column;

// map the SelectionMode All and MultiToggle to Multi
sap.ui.table.SelectionMode.All = sap.ui.table.SelectionMode.Multi;
sap.ui.table.SelectionMode.MultiToggle = sap.ui.table.SelectionMode.Multi;