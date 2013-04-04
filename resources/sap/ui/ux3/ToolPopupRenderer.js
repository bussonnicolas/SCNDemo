/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ToolPopupRenderer");sap.ui.ux3.ToolPopupRenderer={};
sap.ui.ux3.ToolPopupRenderer.render=function(r,c){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3TP");r.writeClasses();r.write(" aria-labelledby='",c.getId(),"-title ",c.getId(),"-acc' role='dialog'>");r.write("<div id='"+c.getId()+"-arrow' class='sapUiUx3TPArrow sapUiUx3TPArrow"+c._getArrowPosition()+"'></div>");r.write("<span style='display:none;' id='",c.getId(),"-acc'>",a.getText("DIALOG_CLOSE_HELP"),"</span>");var t=c.getTitle();if(t&&(t.length>0)){r.write("<h1 id='"+c.getId()+"-title'>"+t+"</h1>");r.write("<hr/>")}else{var T=c.getTooltip_AsString();if(T){r.write("<h1 id='"+c.getId()+"-title' style='display:none;'>"+T+"</h1>")}}var C=c.getContent();for(var i=0;i<C.length;i++){r.renderControl(C[i])}C=c.getButtons();if(C.length>0){r.write("<hr/><div class='sapUiUx3TPBtnRow'>");for(var i=0;i<C.length;i++){r.renderControl(C[i].addStyleClass("sapUiUx3TPBtn"))}r.write("</div>")}r.write("</div>")};
