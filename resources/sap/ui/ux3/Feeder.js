/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.Feeder");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.Feeder",{metadata:{library:"sap.ui.ux3",properties:{"thumbnailSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"text":{type:"string",group:"Data",defaultValue:null},"type":{type:"sap.ui.ux3.FeederType",group:"Appearance",defaultValue:sap.ui.ux3.FeederType.Large}},events:{"submit":{}}}});sap.ui.ux3.Feeder.M_EVENTS={'submit':'submit'};jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.commons.Button");
sap.ui.ux3.Feeder.prototype.init=function(){this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");this.oSendButton=new sap.ui.commons.Button(this.getId()+"-send",{style:sap.ui.commons.ButtonStyle.Emph}).setParent(this);this.oSendButton.attachEvent('press',this.handleSendButtonPress,this)};
sap.ui.ux3.Feeder.prototype.initSendButton=function(){if(this.getText()==""){this.oSendButton.setProperty('enabled',false,true)}var a="";switch(this.getType()){case(sap.ui.ux3.FeederType.Medium):a=sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feeder:sapUiFeederArrowMediumUrl');break;case(sap.ui.ux3.FeederType.Comment):a=sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feeder:sapUiFeederArrowSmallUrl');break;default:a=sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feeder:sapUiFeederArrowLargeUrl');break}if(!a||a==""){this.oSendButton.setProperty('text','-->',true)}else{if(sap.ui.getCore().getConfiguration().getRTL()){a=a.replace(/\/img\//,"/img-RTL/")}this.oSendButton.setProperty('icon',jQuery.sap.getModulePath("sap.ui.ux3",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+a,true)}};
sap.ui.ux3.Feeder.prototype.exit=function(){this.rb=undefined;this.oInput=undefined;if(this.oSendButton){this.oSendButton.destroy();delete this.oSendButton}};
sap.ui.ux3.Feeder.prototype.onAfterRendering=function(){this.oInput=jQuery.sap.byId(this.getId()+"-input")};
sap.ui.ux3.Feeder.prototype.onclick=function(e){var t=e.target.getAttribute('ID');switch(t){case(this.getId()+'-send'):break;case(this.getId()+'-input'):break;default:break}};
sap.ui.ux3.Feeder.prototype.onfocusin=function(e){this.oInput.find(".sapUiFeederEmptyText").remove()};
sap.ui.ux3.Feeder.prototype.onfocusout=function(e){var t=this.oInput.text();if(t==""){this.oInput.empty();this.oInput.append(sap.ui.ux3.FeederRenderer.getEmptyTextInfo(this))}this.setProperty("text",t,true)};
sap.ui.ux3.Feeder.prototype.getFocusDomRef=function(){return jQuery.sap.domById(this.getId()+"-input")};
sap.ui.ux3.Feeder.prototype.onkeyup=function(e){if(this.oInput.text()==""){this.oSendButton.setEnabled(false)}else{this.oSendButton.setEnabled(true)}};
sap.ui.ux3.Feeder.prototype.handleSendButtonPress=function(e){var t=this.getMultilineText(this.oInput);this.setProperty("text",t,true);this.fireSubmit({text:t});this.setText('')};
sap.ui.ux3.Feeder.prototype.getMultilineText=function(I){var c=I.get(0).childNodes,t="";for(var i=0;i<c.length;i++){var C=c[i];switch(C.nodeName){case"#text":if(C.innerText){t=t+C.innerText}else if(C.nodeValue){t=t+C.nodeValue}break;case"BR":t=t+"\n";break;case"P":if(C.innerText){t=t+C.innerText+"\n"}else if(C.textContent){t=t+C.textContent}break;case"DIV":t=t+"\n"+C.textContent;break;case"#comment":break;case"PRE":if(C.innerText){t=t+C.innerText+"\n"}else if(C.textContent){t=t+C.textContent+"\n"}break;default:if(C.innerText){t=t+C.innerText+"\n"}else if(C.textContent){t=t+C.textContent}break}}return(t)};
sap.ui.ux3.Feeder.prototype.getThumbnailSrc=function(){var t=this.getProperty("thumbnailSrc");if(!t||t==""){var p=this.getParent();if(p&&(p instanceof sap.ui.ux3.Feed||p instanceof sap.ui.ux3.FeedChunk)){t=p.getFeederThumbnailSrc()}}return t};
sap.ui.ux3.Feeder.prototype.onpaste=function(e){if(jQuery.browser.mozilla){jQuery.sap.delayedCall(10,this,"onAfterPaste")}};
sap.ui.ux3.Feeder.prototype.onAfterPaste=function(){var c=this.oInput.get(0).childNodes;for(var i=0;i<c.length;i++){var C=c[i];if(C.nodeName=="PRE"){jQuery(C).css("overflow","hidden")}}};
