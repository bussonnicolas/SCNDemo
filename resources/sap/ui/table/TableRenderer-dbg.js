/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

//Provides default renderer for control sap.ui.table.Table
jQuery.sap.declare("sap.ui.table.TableRenderer");

/**
 * @class Table renderer.
 * @static
 */
sap.ui.table.TableRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oTable an object representation of the control that should be rendered
 */
sap.ui.table.TableRenderer.render = function(rm, oTable) {

	// return immediately if control is invisible
	if (!oTable.getVisible()) {
		return;
	}
	
	// create the rows of the table 
	// (here we could think about a swith to allow the programmatic usage of the table)
	oTable._createRows();

	// basic table div
	rm.write("<div");
	if (oTable._bAccMode) {
		var aAriaOwnsIds = [];
		if (oTable.getToolbar()) {
			aAriaOwnsIds.push(oTable.getToolbar().getId());
		}
		aAriaOwnsIds.push(oTable.getId() + "-table");
		rm.writeAttribute("aria-owns", aAriaOwnsIds.join(" "));
		rm.writeAttribute("aria-readonly", "true");
		if (oTable.getTitle()) {
			rm.writeAttribute("aria-labelledby", oTable.getTitle().getId());
		}
		if (oTable.getSelectionMode() === sap.ui.table.SelectionMode.Multi) {
			rm.writeAttribute("aria-multiselectable", "true");
		}
	}
	rm.writeControlData(oTable);
	rm.addClass("sapUiTable");
	if (oTable.getColumnHeaderVisible()) {
		rm.addClass("sapUiTableCHdr"); // show column headers
	}
	if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.None &&
			oTable.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowOnly) {
		rm.addClass("sapUiTableRSel"); // show row selector
	}
	//rm.addClass("sapUiTableHScr"); // show horizontal scrollbar
	if (oTable.getNavigationMode() === sap.ui.table.NavigationMode.Scrollbar) {
		rm.addClass("sapUiTableVScr"); // show vertical scrollbar
	}
	if (oTable.getEditable()) {
		rm.addClass("sapUiTableEdt"); // editable (background color)
	}
	rm.addClass("sapUiTableShNoDa");
	if (oTable.getShowNoData() && oTable._getRowCount() === 0) {
		rm.addClass("sapUiTableEmpty"); // no data!
	}
	rm.writeClasses();
	if (oTable.getWidth()) {
		rm.addStyle("width", oTable.getWidth());
	}
	rm.writeStyles();
	rm.write(">");

	if (oTable.getTitle()) {
		this.renderHeader(rm, oTable, oTable.getTitle());
	}

	if (oTable.getToolbar()) {
		this.renderToolbar(rm, oTable, oTable.getToolbar());
	}

	if (oTable.getExtension() && oTable.getExtension().length > 0) {
		this.renderExtensions(rm, oTable, oTable.getExtension());
	}

	rm.write("<div");
	rm.addClass("sapUiTableCnt");
	rm.writeClasses();
	if (oTable._bAccMode) {
		rm.writeAttribute("aria-describedby", oTable.getId() + "-ariacount");
	}
	rm.write(">");

	this.renderColHdr(rm, oTable);

	this.renderTable(rm, oTable);

	if (oTable._bAccMode) {
		// aria description for the row count
		rm.write("<span");
		rm.writeAttribute("id", oTable.getId() + "-ariacount");
		rm.addStyle("position", "absolute");
		rm.addStyle("top", "-20000px");
		rm.writeStyles();
		rm.write(">");
		rm.write("</span>");
		// aria description for toggling the edit mode
		rm.write("<span");
		rm.writeAttribute("id", oTable.getId() + "-toggleedit");
		rm.addStyle("position", "absolute");
		rm.addStyle("top", "-20000px");
		rm.writeStyles();
		rm.write(">");
		rm.write(oTable._oResBundle.getText("TBL_TOGGLE_EDIT_KEY"));
		rm.write("</span>");
	}

	rm.write("</div>");

	if (oTable.getNavigationMode() === sap.ui.table.NavigationMode.Paginator) {
		rm.write("<div");
		rm.addClass("sapUiTablePaginator");
		rm.writeClasses();
		rm.write(">");
		if (!oTable._oPaginator) {
			jQuery.sap.require("sap.ui.commons.Paginator");
			oTable._oPaginator = new sap.ui.commons.Paginator(oTable.getId() + "-paginator");
			oTable._oPaginator.attachPage(jQuery.proxy(oTable.onvscroll, oTable));
		}
		rm.renderControl(oTable._oPaginator);
		rm.write("</div>");
	}

	if (oTable.getFooter()) {
		this.renderFooter(rm, oTable, oTable.getFooter());
	}

	rm.write("</div>");

};

// =============================================================================
// BASIC AREAS OF THE TABLE
// =============================================================================

sap.ui.table.TableRenderer.renderHeader = function(rm, oTable, oTitle) {
	rm.write("<div");
	rm.addClass("sapUiTableHdr");
	rm.writeClasses();
	if (oTable._bAccMode) {
		rm.writeAttribute("role", "heading");
	}
	rm.write(">");

	rm.renderControl(oTitle);

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderToolbar = function(rm, oTable, oToolbar) {
	rm.write("<div");
	rm.addClass("sapUiTableTbr");
	rm.writeClasses();
	rm.write(">");

	rm.renderControl(oToolbar);

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderExtensions = function(rm, oTable, aExtensions) {
	for (var i = 0, l = aExtensions.length; i < l; i++) {
		this.renderExtension(rm, oTable, aExtensions[i]);
	}
};

sap.ui.table.TableRenderer.renderExtension = function(rm, oTable, oExtension) {
	rm.write("<div");
	rm.addClass("sapUiTableExt");
	rm.writeClasses();
	rm.write(">");
	
	rm.renderControl(oExtension);
	
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderTable = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableCCnt");
	rm.writeClasses();
	rm.write(">");

	this.renderRowHdr(rm, oTable);
	this.renderTableCtrl(rm, oTable);
	this.renderVSb(rm, oTable);

	rm.write("</div>");
	
	this.renderHSb(rm, oTable);
	
};

sap.ui.table.TableRenderer.renderFooter = function(rm, oTable, oFooter) {
	rm.write("<div");
	rm.addClass("sapUiTableFtr");
	rm.writeClasses();
	rm.write(">");

	rm.renderControl(oFooter);

	rm.write("</div>");
};

// =============================================================================
// COLUMN HEADER OF THE TABLE
// =============================================================================

sap.ui.table.TableRenderer.renderColHdr = function(rm, oTable) {

	rm.write("<div");
	rm.addClass("sapUiTableColHdrCnt");
	rm.writeClasses();
	if (oTable.getColumnHeaderHeight() > 0) {
		rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
	}
	if (oTable._bAccMode &&
			 (oTable.getSelectionMode() === sap.ui.table.SelectionMode.None ||
				oTable.getSelectionBehavior() === sap.ui.table.SelectionBehavior.RowOnly)) {
		rm.writeAttribute("role", "row");
	}
	rm.writeStyles();
	rm.write(">");

	this.renderColRowHdr(rm, oTable);

	rm.write("<div");
	rm.addClass("sapUiTableColHdrScr");
	rm.writeClasses();
	rm.write(">");

	rm.write("<div");
	rm.addClass("sapUiTableColHdr");
	rm.writeClasses();
	rm.addStyle("min-width", oTable._getColumnsWidth() + "px");
	rm.writeStyles();
	rm.write(">");

	var aCols = oTable.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].getVisible() && !aCols[i].getGrouped()) {
			this.renderCol(rm, oTable, aCols[i], i);
			this.renderColRsz(rm, oTable, aCols[i], i);
		}
	}

	rm.write("<p style=\"clear: both;\"></p>");
	rm.write("</div>");

	rm.write("</div>");

	rm.write("</div>");

};

sap.ui.table.TableRenderer.renderColRowHdr = function(rm, oTable) {
	rm.write("<div");
	rm.writeAttribute("id", oTable.getId() + "-selall");
	rm.writeAttribute("title", oTable._oResBundle.getText("TBL_SELECT_ALL"));
	rm.addClass("sapUiTableColRowHdr");
	rm.writeClasses();
	if (oTable._bAccMode) {
		rm.writeAttribute("tabindex", "-1");
		rm.writeAttribute("aria-label", oTable._oResBundle.getText("TBL_SELECT_ALL_KEY"));
	}
	rm.write(">");
	if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.Single) {
		rm.write("<div");
		rm.addClass("sapUiTableColRowHdrIco");
		rm.writeClasses();
		if (oTable.getColumnHeaderHeight() > 0) {
			rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
		}
		rm.write(">");
		rm.write("</div>");
	}
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderCol = function(rm, oTable, oColumn, iIndex) {
	rm.write("<div");
	rm.writeElementData(oColumn);
	rm.writeAttribute("data-sap-ui-colindex", iIndex);
	if (oTable._bAccMode) {
		if (jQuery.browser.msie) {
			rm.writeAttribute("role", "columnheader");
		}
		// TODO: determine if the column has a column menu
		rm.writeAttribute("aria-haspopup", "true");
		rm.writeAttribute("tabindex", "-1");
	}
	rm.addClass("sapUiTableCol");
	rm.writeClasses();
	var sWidth = oColumn.getWidth();
	if (jQuery.sap.endsWith(sWidth, "px") && !oColumn.getFlexible()) {
		rm.addStyle("width", sWidth);
		oColumn._iRealWidth = undefined; // reset the real width
	} else {
		// to avoid flickering we store the last real width of the column
		// and apply it again when re-rendering
		if (oColumn._iRealWidth) {
			rm.addStyle("width", oColumn._iRealWidth + "px");
		}
	}
	if (oTable.getColumnHeaderHeight() > 0) {
		rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	var sTooltip = oColumn.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write("><div");
	rm.addClass("sapUiTableColCell");
	rm.writeClasses();
	rm.write(">");

	// TODO: rework column sort / filter status integration
	rm.write("<div id=\"" + oColumn.getId() + "-icons\" class=\"sapUiTableColIcons\"></div>");
	rm.renderControl(oColumn.getLabel());

	rm.write("</div></div>");
};

sap.ui.table.TableRenderer.renderColRsz = function(rm, oTable, oColumn, iIndex) {
	if (oColumn.getResizable()) {
		rm.write("<div");
		rm.writeAttribute("id", oColumn.getId() + "-rsz");
		rm.writeAttribute("data-sap-ui-colindex", iIndex);
		rm.writeAttribute("tabindex", "-1");
		rm.addClass("sapUiTableColRsz");
		rm.writeClasses();
		rm.addStyle("left", oTable._bRtlMode ? "99000px" : "-99000px");
		rm.writeStyles();
		rm.write("></div>");
	}
};


// =============================================================================
// CONTENT AREA OF THE TABLE
// =============================================================================

sap.ui.table.TableRenderer.renderRowHdr = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableRowHdrScr");
	rm.writeClasses();
	rm.write(">");

	// start with the first current top visible row
	for (var row = 0, count = oTable.getRows().length; row < count; row++) {
		this.renderRowHdrRow(rm, oTable, oTable.getRows()[row], row);
	}

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderRowHdrRow = function(rm, oTable, oRow, iRowIndex) {
	rm.write("<div");
	rm.writeAttribute("id", oTable.getId() + "-rowsel" + iRowIndex);
	rm.writeAttribute("data-sap-ui-rowindex", iRowIndex);
	rm.addClass("sapUiTableRowHdr");
	rm.writeClasses();
	if (oTable.getRowHeight() > 0) {
		rm.addStyle("height", oTable.getRowHeight() + "px");
	}
	if (oTable._bAccMode) {
		// defined via ARIA spec but not yet supported
		var aCellIds = [];
		jQuery.each(oRow.getCells(), function(iIndex, oCell) {
			aCellIds.push(oRow.getId() + "-col" + iIndex);
		});
		if (oTable.getSelectionMode() === sap.ui.table.SelectionMode.Multi) {
			rm.writeAttribute("aria-selected", "false");
		}
		if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.None) {
			rm.writeAttribute("title", oTable._oResBundle.getText("TBL_ROW_SELECT"));
			rm.writeAttribute("aria-label", oTable._oResBundle.getText("TBL_ROW_SELECT_KEY"));
		}
		rm.writeAttribute("tabindex", "-1");
	}
	rm.writeStyles();
	rm.write("></div>");
};

sap.ui.table.TableRenderer.renderTableCtrl = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableCtrlScr");
	rm.writeClasses();
	rm.write(">");

	rm.write("<div");
	rm.addClass("sapUiTableCtrlCnt");
	rm.writeClasses();
	rm.write(">");
	
	rm.write("<div");
	rm.addClass("sapUiTableCtrlBefore");
	rm.writeClasses();
	rm.writeAttribute("tabindex", "0");
	rm.write("></div>");

	this.renderTableControl(rm, oTable);

	rm.write("<div");
	rm.addClass("sapUiTableCtrlAfter");
	rm.writeClasses();
	rm.writeAttribute("tabindex", "0");
	rm.write("></div>");
	rm.write("</div>");

	rm.write("</div>");

	rm.write("<div");
	rm.addClass("sapUiTableCtrlEmpty");
	rm.writeClasses();
	rm.writeAttribute("tabindex", "0");
	rm.write(">");
	if (oTable.getNoData()) {
		rm.renderControl(oTable.getNoData());
	} else {
		rm.write("<span");
		rm.addClass("sapUiTableCtrlEmptyMsg");
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(oTable._oResBundle.getText("TBL_NO_DATA"));
		rm.write("</span>");
	}
	rm.write("</div>");
};


sap.ui.table.TableRenderer.renderTableControl = function(rm, oTable) {
	rm.write("<table");
	rm.writeAttribute("id", oTable.getId() + "-table");
	if (oTable._bAccMode) {
		rm.writeAttribute("role", "grid");
	}
	rm.addClass("sapUiTableCtrl");
	rm.writeClasses();
	rm.addStyle("min-width", oTable._getColumnsWidth() + "px");
	rm.writeStyles();
	rm.write(">");

	rm.write("<tr");
	rm.addClass("sapUiTableCtrlCol");
	rm.writeClasses();
	rm.write(">");

	var aCols = oTable.getColumns();
	if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.None &&
			oTable.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowOnly) {
		rm.write("<th");
		rm.addStyle("width", "0px");
		rm.writeStyles();
		if (oTable._bAccMode) {
			rm.writeAttribute("role", "gridcell");
		}
		rm.write("></th>");
	} else {
		if (aCols.length === 0) {
			// no cols => render th => avoids rendering issue in firefox
			rm.write("<th></th>");
		}
	}

	for (var col = 0, count = aCols.length; col < count; col++) {
		var oColumn = aCols[col];
		if (oColumn.getVisible() && !oColumn.getGrouped()) {
			rm.write("<th");
			var sWidth = oColumn.getWidth();
			if (!oColumn.getFlexible()) {
				rm.addStyle("width", sWidth);
				rm.writeStyles();
			}
			if (oTable._bAccMode) {
				rm.writeAttribute("aria-owns", oColumn.getId());
				rm.writeAttribute("aria-labelledby", oColumn.getId());
			}
			rm.write("></th>");
		}
	}

	rm.write("</tr>");

	// render the table rows
	var aRows = oTable.getRows();
	for (var row = 0, count = aRows.length; row < count; row++) {
		this.renderTableRow(rm, oTable, aRows[row], row);
	}

	rm.write("</table>");
};

sap.ui.table.TableRenderer.renderTableRow = function(rm, oTable, oRow, iRowIndex) {

	rm.write("<tr");
	rm.writeElementData(oRow);
	if (oRow._bHidden) {
		rm.writeAttribute("class", "sapUiTableRowHidden");
	}
	rm.writeAttribute("data-sap-ui-rowindex", iRowIndex);
	if (oTable.getRowHeight() > 0) {
		rm.addStyle("height", oTable.getRowHeight() + "px");
	}
	rm.writeStyles();
	if (oTable._bAccMode) {
		if (oTable.getSelectionMode() === sap.ui.table.SelectionMode.Multi) {
			rm.writeAttribute("aria-selected", "false");
		}
//		if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.None) {
//			rm.writeAttribute("title", oTable._oResBundle.getText("TBL_ROW_SELECT"));
//			rm.writeAttribute("aria-label", oTable._oResBundle.getText("TBL_ROW_SELECT_KEY"));
//		}
	}
	rm.write(">");
	var aCells = oRow.getCells();
	if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.None &&
			oTable.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowOnly) {
		rm.write("<td></td>");
	} else {
		if (aCells.length === 0) {
			rm.write("<td></td>");
		}
	}
	for (var cell = 0, count = aCells.length; cell < count; cell++) {
		this.renderTableCell(rm, oTable, oRow, aCells[cell], cell);
	}
	rm.write("</tr>");

};

sap.ui.table.TableRenderer.renderTableCell = function(rm, oTable, oRow, oCell, iCellIndex) {
	var iColIndex = oCell.data("sap-ui-colindex");
	var oColumn = oTable.getColumns()[iColIndex];
	if (oColumn.getVisible() && !oColumn.getGrouped()) {
		rm.write("<td");
		var sId = oRow.getId() + "-col" + iCellIndex;
		rm.writeAttribute("id", sId);
		if (oTable._bAccMode) {
			rm.writeAttribute("aria-labelledby", oColumn.getId() + " " + oCell.getId() + " " + oTable.getId() + "-toggleedit");
			rm.writeAttribute("tabindex", "-1");
		}
		var sHAlign = this.getHAlign(oColumn.getHAlign(), oTable._bRtlMode);
		if (sHAlign) {
			rm.addStyle("text-align", sHAlign);
		}
		rm.writeStyles();
		if (iCellIndex === 0) {
			rm.addClass("sapUiTableTdFirst");
		}
		rm.writeClasses();
		rm.write("><div");
		rm.addClass("sapUiTableCell");
		rm.writeClasses();
		/*
		if (oTable.getRowHeight() > 0) {
			rm.addStyle("height", oTable.getRowHeight() + "px");
		}
		rm.writeStyles();
		*/
		rm.write(">");
		this.renderTableCellControl(rm, oTable, oCell, iCellIndex);
		rm.write("</div></td>");
	}
};

sap.ui.table.TableRenderer.renderTableCellControl = function(rm, oTable, oCell, iCellIndex) {
	rm.renderControl(oCell);
};

sap.ui.table.TableRenderer.renderVSb = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableVSb");
	rm.writeClasses();
	rm.write(">");
	rm.renderControl(oTable._oVSb);
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderHSb = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableHSb");
	rm.writeClasses();
	rm.write(">");
	rm.renderControl(oTable._oHSb);
	rm.write("</div>");
};


// =============================================================================
// HELPER FUNCTIONALITY
// =============================================================================

/**
 * Returns the value for the HTML "align" attribute according to the given
 * horizontal alignment and RTL mode, or NULL if the HTML default is fine.
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign
 * @param {boolean} bRTL
 * @type string
 */
sap.ui.table.TableRenderer.getHAlign = function(oHAlign, bRTL) {
  switch (oHAlign) {
	case sap.ui.commons.layout.HAlign.Center:
	  return "center";
	case sap.ui.commons.layout.HAlign.End:
	case sap.ui.commons.layout.HAlign.Right:
	  return bRTL ? "left" : "right";
  }
  // case sap.ui.commons.layout.HAlign.Left:
  // case sap.ui.commons.layout.HAlign.Begin:
  return bRTL ? "right" : "left";
};
