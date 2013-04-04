/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ApplicationHeaderRenderer");sap.ui.commons.ApplicationHeaderRenderer={};
sap.ui.commons.ApplicationHeaderRenderer.render=function(r,a){if(!this.initializationDone){a.initControls();a.initializationDone=true}var b=a.getId();r.write("<header");r.writeControlData(a);r.addClass("sapUiAppHdr");r.writeClasses();r.write(">");r.write("<div id=\""+b+"-appHeaderWelcomeLogoffAreas\" class=\"sapUiAppHdrWelcomeLogoffArea\">");this.renderWelcomeAndLogoffAreas(r,a);r.write("</div>");r.write("<div id=\""+b+"-logoArea\" class=\"sapUiAppHdrLogo\">");this.renderLogoArea(r,a);r.write("</div>");r.write("</header>")};
sap.ui.commons.ApplicationHeaderRenderer.renderLogoArea=function(r,a){a.getLogoSrc()!=""?a.oLogo.setSrc(a.getLogoSrc()):a.oLogo.setSrc(sap.ui.resource("sap.ui.commons","themes/"+sap.ui.getCore().getConfiguration().getTheme()+"/img/applicationheader/SAPLogo.png"));r.renderControl(a.oLogo);if(a.getLogoText()!=""){a.oLogoText.setText(a.getLogoText());a.oLogoText.setTooltip(a.getLogoText());r.renderControl(a.oLogoText)}};
sap.ui.commons.ApplicationHeaderRenderer.renderWelcomeAndLogoffAreas=function(r,a){if(a.getDisplayWelcome()){var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var p=sap.ui.getCore().getConfiguration().getRTL()?"padding-left":"padding-right";if(a.getUserName()!=""){r.write("<label class=\"sapUiLbl sapUiLblEmph\" style=\"text-align: left;\" dir=\"Inherit\" id=\"appHeaderLongTitle-welcomeLabel\">"+b.getText("APPHDR_WELCOME_USER")+":</label>");r.write("&nbsp;");r.write("<label class=\"sapUiLbl\" style=\"text-align: left;"+p+":15px;\" dir=\"Inherit\" id=\"appHeaderLongTitle-welcomeLabel\">"+a.getUserName()+"</label>")}else{r.write("<label class=\"sapUiLbl sapUiLblEmph\" style=\"text-align: left;"+p+":15px;\" dir=\"Inherit\" id=\"appHeaderLongTitle-welcomeLabel\">"+b.getText("APPHDR_WELCOME")+"</label>")}}if(a.getDisplayLogoff()){if(a.getDisplayWelcome()){r.write("<span role=\"separator\" class=\"sapUiTbSeparator\"></span>")}r.renderControl(a.oLogoffBtn)}};
