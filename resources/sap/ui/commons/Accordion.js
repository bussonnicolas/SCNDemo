/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Accordion");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Accordion",{metadata:{publicMethods:["openSection","closeSection"],library:"sap.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'200px'},"openedSectionsId":{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"sections",aggregations:{"sections":{type:"sap.ui.commons.AccordionSection",multiple:true,singularName:"section"}},events:{"sectionOpen":{},"sectionClose":{},"sectionsReorder":{}}}});sap.ui.commons.Accordion.M_EVENTS={'sectionOpen':'sectionOpen','sectionClose':'sectionClose','sectionsReorder':'sectionsReorder'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");sap.ui.commons.Accordion.CARD_1=1;sap.ui.commons.Accordion.CARD_0_1=2;sap.ui.commons.Accordion.CARD_0_N=3;sap.ui.commons.Accordion.CARD_1_N=4;sap.ui.commons.Accordion.KEY_TIMEOUT=500;sap.ui.commons.Accordion.aAccordionsToReplace=[];sap.ui.commons.Accordion.aAccordions=[];
sap.ui.commons.Accordion.prototype.init=function(){this.bInitialRendering=true;this.activationMode=sap.ui.commons.Accordion.CARD_1;this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");jQuery(window.document).bind("dragover",this.ondragover);jQuery(window.document).bind("dragenter",this.ondragenter);jQuery(window.document).bind("dragleave",this.ondragleave);jQuery(window.document).bind("dragend",this.ondragend);this.aSectionTitles=[];this.bDragBeforeFirst=false;sap.ui.commons.Accordion.aAccordions.push(this)};
sap.ui.commons.Accordion.prototype.onsapspace=function(e){this.onclick(e)};
sap.ui.commons.Accordion.prototype.onsappagedownmodifiers=function(e){var t=jQuery(e.target);var p=t.parentsUntil('.sapUiAcd');var d=p[p.length-1];var n=jQuery(d).next();while(!this.getCorrespondingSection(n[0]).getEnabled()){n=n.next()}n=n[0];this.openSection(n.id);var s=this.getCorrespondingSection(n);s.focusFirstControl();e.preventDefault();e.stopPropagation()};
sap.ui.commons.Accordion.prototype.onsappageupmodifiers=function(e){var t=jQuery(e.target);var p=t.parentsUntil('.sapUiAcd');var s=p[p.length-1];var n=jQuery(s).prev();while(!this.getCorrespondingSection(n[0]).getEnabled()){n=n.prev()}n=n[0];this.openSection(n.id);var s=this.getCorrespondingSection(n);if(s){s.focusFirstControl()}e.preventDefault();e.stopPropagation()};
sap.ui.commons.Accordion.prototype.onsapupmodifiers=function(e){e.preventDefault();e.stopPropagation();var p=jQuery(e.target).parentsUntil('.sapUiAcd');var d=p[p.length-1];if(this.__idxOfSec(d.id)==0){return}var D=jQuery(d).prev().first()[0];var i=false;if(this.__idxOfSec(D.id)==0){i=true}this.dropSection(d,D,i);var s=this.getSections();s[this.__idxOfSec(d.id)].focus()};
sap.ui.commons.Accordion.prototype.onsapdownmodifiers=function(e){e.preventDefault();e.stopPropagation();var p=jQuery(e.target).parentsUntil('.sapUiAcd');var d=p[p.length-1];if(this.__idxOfSec(d.id)==this.getSections().length-1){return}var D=jQuery(d).next().first()[0];this.dropSection(d,D,false);var s=this.getSections();s[this.__idxOfSec(d.id)].focus()};
sap.ui.commons.Accordion.prototype.onsapup=function(e){e.preventDefault();e.stopPropagation();var c=this.getCurrentSection(e.target);if(c.id==this.getSections()[0].getId()){var n=jQuery(c).find("div.sapUiAcdSectionHdr");if(n){n.focus()}}if(c){var p=jQuery(c).prev();while(p&&jQuery(p).hasClass("sapUiAcdSectionDis")){p=jQuery(p).prev()}if(p){var n=jQuery(p).find("div.sapUiAcdSectionHdr");if(n){n.focus()}}}};
sap.ui.commons.Accordion.prototype.onsapleft=sap.ui.commons.Accordion.prototype.onsapup;
sap.ui.commons.Accordion.prototype.onsapdown=function(e){e.preventDefault();e.stopPropagation();var c=this.getCurrentSection(e.target);if(c){var n=jQuery(c).next();while(n&&jQuery(n).hasClass("sapUiAcdSectionDis")){n=jQuery(n).next()}if(n){var N=jQuery(n).find("div.sapUiAcdSectionHdr");if(N){N.focus()}}}};
sap.ui.commons.Accordion.prototype.onsaphome=function(e){e.preventDefault();e.stopPropagation();var f=jQuery.sap.domById(this.getSections()[0].getId());if(jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).next();while(f&&jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).next()}}if(f){var n=jQuery(f).find("div.sapUiAcdSectionHdr");if(n){n.focus()}}};
sap.ui.commons.Accordion.prototype.onsapend=function(e){e.preventDefault();e.stopPropagation();var n=this.getSections().length;var f=jQuery.sap.domById(this.getSections()[n-1].getId());if(jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).prev();while(f&&jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).prev()}}if(f){var N=jQuery(f).find("div.sapUiAcdSectionHdr");if(N){N.focus()}}};
sap.ui.commons.Accordion.prototype.onsapright=sap.ui.commons.Accordion.prototype.onsapdown;
sap.ui.commons.Accordion.prototype.getCurrentSection=function(d){var c=d;while(!jQuery(c).hasClass("sapUiAcdSection")){c=jQuery(c).parent()}return c[0]};
sap.ui.commons.Accordion.prototype.ondragstart=function(e){if(jQuery.browser.msie){return}var t=jQuery(e.target);if(jQuery(e.target).hasClass("sapUiAcdSection")){this.draggedSection=e.target}else{var p=t.parentsUntil('.sapUiAcd');this.draggedSection=p[p.length-1]}if(t.hasClass("sapUiAcdSectionCont")){return}var c=t.children(".sapUiAcdSectionCont");c=c[0];var a=jQuery(c).addClass("sapUiAcdSectionContDragged");t.addClass("sapUiAcdSectionDragged");e.originalEvent.dataTransfer.effectAllowed='move';e.originalEvent.dataTransfer.setData("Text",t.attr("id"));if(e.originalEvent.dataTransfer.setDragImage){var d=jQuery.sap.domById(this.draggedSection.id+"-hdr");e.originalEvent.dataTransfer.setDragImage(d,0,0)}};
sap.ui.commons.Accordion.prototype.ondrop=function(e){e.preventDefault();e.stopPropagation();var s;var a;var i=false;if(jQuery(e.target).hasClass("sapUiAcd-droptarget")){var S=this.getSections();s=jQuery.sap.domById(S[0].getId());a=jQuery.sap.domById(this.getId());i=true}else if(jQuery(e.target).hasClass("sapUiAcd")){i=true;a=e.target;var c=jQuery(a).children();s=c[1]}else{var t=jQuery(e.target);var p=t.parentsUntil('.sapUiAcd');s=p[p.length-1];a=jQuery(s).parent()[0]}var f=e.originalEvent.dataTransfer.types?"text/plain":"Text";var d=e.originalEvent.dataTransfer.getData(f);var b=jQuery.sap.domById(d);if(!sap.ui.commons.Accordion.areInSameAccordion(b,s)){return}var D=jQuery(a).children(".sapUiAcdSection").toArray();if(jQuery.inArray(b,D)>jQuery.inArray(s,D)){s=D[D.indexOf(s)+1]}this.dropSection(b,s,i)};
sap.ui.commons.Accordion.prototype.dropSection=function(d,D,b){var o=jQuery(d).parent()[0];var c=jQuery(o).children(".sapUiAcdSection").toArray();var i=jQuery.inArray(D,c);if(b){i-=1}this.moveSection(d.id,i)};
sap.ui.commons.Accordion.prototype.ondragend=function(e){if(this.bDragBeforeFirst){this.replaceSectionFirst()}if(sap.ui.commons.Accordion.aAccordionsToReplace.length!=0){for(var i=0;i<sap.ui.commons.Accordion.aAccordionsToReplace.length;i++){sap.ui.commons.Accordion.replaceAccordionById(sap.ui.commons.Accordion.aAccordionsToReplace[i].id)}sap.ui.commons.Accordion.aAccordionsToReplace=[]}var t=jQuery(e.target);t.removeClass("sapUiAcdSectionDragged");var c=t.children(".sapUiAcdSectionCont");var a=c.removeClass("sapUiAcdSectionContDragged");e.preventDefault();e.stopPropagation();this.bDragBeforeFirst=false;this.currentDragTargetId=null;this.draggedSection=null};
sap.ui.commons.Accordion.prototype.ondragover=function(e){var f=e.originalEvent.dataTransfer.types?"text/plain":"Text";var d=e.originalEvent.dataTransfer.getData(f);var p=jQuery(e.target).parentsUntil('.sapUiAcd');var D=p[p.length-1];if(!sap.ui.commons.Accordion.areInSameAccordion(e.target,jQuery.sap.domById(d))){return true}if(this.bDragBeforeFirst){return false}if(jQuery(e.target).hasClass("sapUiAcd-droptarget")){return false}if(jQuery(e.target).hasClass("sapUiAcd")){return false}if(D&&jQuery(D).hasClass("sapUiAcdSection")){return false}};
sap.ui.commons.Accordion.areInSameAccordion=function(d,D){if(!d||!D){return true}var o;if(jQuery(d).hasClass("sapUiAcdSection")||jQuery(d).hasClass("sapUiAcd-droptarget")){o=jQuery(d).parent()}else{var p=jQuery(d).parentsUntil('.sapUiAcd');var a=p[p.length-1];o=jQuery(a).parent()}var b;if(jQuery(D).hasClass("sapUiAcdSection")||jQuery(D).hasClass("sapUiAcd-droptarget")){b=jQuery(D).parent()}else{var P=jQuery(D).parentsUntil('.sapUiAcd');var c=P[P.length-1];b=jQuery(c).parent()}if(o.attr('id')==b.attr('id')){return true}else{return false}};
sap.ui.commons.Accordion.prototype.ondragenter=function(e){var f=e.originalEvent.dataTransfer.types?"text/plain":"Text";var d=e.originalEvent.dataTransfer.getData(f);if(!sap.ui.commons.Accordion.areInSameAccordion(e.target,jQuery.sap.domById(d))){return}if(this.bDragBeforeFirst==undefined){return}var D;if(jQuery(e.target).hasClass("sapUiAcd-droptarget")){this.bDragBeforeFirst=true;var s=this.getSections();D=jQuery.sap.domById(s[0].getId())}else{var p=jQuery(e.target).parentsUntil('.sapUiAcd');D=p[p.length-1];if(this.bDragBeforeFirst&&D&&jQuery(D).hasClass("sapUiAcdSection")){this.bDragBeforeFirst=false}if(this.bDragBeforeFirst){return}}if(!this.currentDragTargetId&&D&&jQuery(D).hasClass("sapUiAcdSection")){this.slideSectionDown(D,this.bDragBeforeFirst);this.currentDragTargetId=D.id}e.preventDefault();e.stopPropagation()};
sap.ui.commons.Accordion.prototype.ondragleave=function(e){if(this.bDragBeforeFirst==undefined){return}if(this.bDragBeforeFirst){return}var d;if(jQuery(e.target).hasClass("sapUiAcd-droptarget")){var m=true;var s=this.getSections();d=jQuery.sap.domById(s[0].getId())}else{var p=jQuery(e.target).parentsUntil('.sapUiAcd');d=p[p.length-1]}if(this.currentDragTargetId&&d&&jQuery(d).hasClass("sapUiAcdSection")){var o=jQuery.sap.domById(this.currentDragTargetId);this.replaceSection();this.currentDragTargetId=null}e.preventDefault();e.stopPropagation()};
sap.ui.commons.Accordion.prototype.moveSection=function(s,t){var o=this.__idxOfSec(s);if(t==o){return}var S=this.aSectionTitles[o];this.aSectionTitles.splice(o,1);var a=this.getSections();var b=a[o];this.removeSection(o,true);if(t!=-1){this.aSectionTitles.splice(t,0,S)}else{this.aSectionTitles.splice(0,0,S)}this.insertSection(b,t,true);this.fireSectionsReorder({movedSectionId:s,newIndex:t})};
sap.ui.commons.Accordion.prototype.slideSectionDown=function(s,m){if(m){jQuery(s).addClass("sapUiAcdSection-down");sap.ui.commons.Accordion.aAccordionsToReplace.push(jQuery(s).parent()[0])}var a=jQuery.sap.domById(this.getId());a.style.height=(a.offsetHeight+20)+"px";var n=jQuery(s).nextAll();for(var i=0;i<n.length;i++){jQuery(n[i]).addClass("sapUiAcdSection-down")}};
sap.ui.commons.Accordion.prototype.replaceSection=function(){var a=jQuery.sap.domById(this.getId());sap.ui.commons.Accordion.replaceAccordion(this)};
sap.ui.commons.Accordion.prototype.replaceSectionFirst=function(){var a=jQuery.sap.domById(this.getId());sap.ui.commons.Accordion.replaceAccordionFirst(this)};
sap.ui.commons.Accordion.replaceAccordionById=function(a){for(var i=0;i<sap.ui.commons.Accordion.aAccordions.length;i++){if(sap.ui.commons.Accordion.aAccordions[i].getId()==a){sap.ui.commons.Accordion.replaceAccordion(sap.ui.commons.Accordion.aAccordions[i]);return true}}};
sap.ui.commons.Accordion.replaceAccordion=function(a){var d=jQuery.sap.domById(a.getId());d.style.height=(d.offsetHeight-24)+"px";var s=a.getSections();for(var i=0;i<s.length;i++){var S=s[i].getId();var D=jQuery.sap.domById(S);jQuery(D).removeClass("sapUiAcdSection-down")}};
sap.ui.commons.Accordion.replaceAccordionFirst=function(a){var d=jQuery.sap.domById(a.getId());var s=a.getSections();for(var i=0;i<s.length;i++){var S=s[i].getId();var D=jQuery.sap.domById(S);jQuery(D).removeClass("sapUiAcdSection-down")}};
sap.ui.commons.Accordion.prototype.onclick=function(e){if(e.srcControl.getId()==this.getId()){return}var t=jQuery(e.target);if(t.hasClass("sapUiAcdSectionCont")){return}if(!(jQuery(e.target).control(0)instanceof sap.ui.commons.AccordionSection)){return}var d=e.srcControl.getDomRef();var s=this.getCorrespondingSection(d);if(s&&!s.getEnabled()){return}if(e.srcControl&&e.srcControl.getCollapsed()==true){this.openSection(d.id)}else{if(e.srcControl){this.closeSection(d.id)}}e.preventDefault();e.stopPropagation();var S=this.getSections();S[this.__idxOfSec(d.id)].focus()};
sap.ui.commons.Accordion.prototype.openSection=function(s){var i=this.__idxOfSec(s);var S=this.getSections();if(this.activationMode==sap.ui.commons.Accordion.CARD_0_1||this.activationMode==sap.ui.commons.Accordion.CARD_1){var c=this.closeOpenedSections()}S[i]._setCollapsed(false);this.fireSectionOpen({openSectionId:s,closeSectionIds:c})};
sap.ui.commons.Accordion.prototype.closeSection=function(s){var i=this.__idxOfSec(s);var S=this.getSections();var c=S[i];var d=this.getOpenedSectionsId().split(",");S[i]._setCollapsed(true);if((this.activationMode==sap.ui.commons.Accordion.CARD_1_N||this.activationMode==sap.ui.commons.Accordion.CARD_1)&&this.getNumberOfOpenedSections()==0){this.openDefaultSections()}this.fireSectionClose({closeSectionId:s})};
sap.ui.commons.Accordion.prototype.closeOpenedSections=function(){var c=[];var s=this.getSections();for(var i=0;i<s.length;i++){if(s[i].getCollapsed()==false){s[i]._setCollapsed(true);c.push(s[i].getId())}}return c};
sap.ui.commons.Accordion.prototype.openDefaultSections=function(){var s=this.getSections();var d=this.getOpenedSectionsId().split(",");for(var i=0;i<d.length;i++){var a=s[this.__idxOfSec(d[i])];a._setCollapsed(false)}};
sap.ui.commons.Accordion.prototype.getNumberOfOpenedSections=function(){var o=0;var s=this.getSections();for(var i=0;i<s.length;i++){if(s[i].getCollapsed()==false){o++}}return o};
sap.ui.commons.Accordion.prototype.addSection=function(s){this.addAggregation("sections",s);if((this.getOpenedSectionsId()==null||this.getOpenedSectionsId()=="")&&s.getEnabled()){this.setOpenedSectionsId(s.getId())}this.aSectionTitles.push(s.getTitle())};
sap.ui.commons.Accordion.prototype.__idxOfSec=function(s){if(typeof(s)=="string"){s=sap.ui.getCore().byId(s)}return this.indexOfSection(s)};
sap.ui.commons.Accordion.prototype.setOpenedSectionsId=function(o){var s=this.getSections();var d=o.split(",");if(d.length==1){if(this.__idxOfSec(o)<0){this.setProperty("openedSectionsId",o);return this}if(s[this.__idxOfSec(o)].getEnabled()){this.setProperty("openedSectionsId",o)}else{for(var i=0;i<s.length;i++){if(s[i].getEnabled()){this.setProperty("openedSectionsId",s[i].getId());return this}}}}else if(d.length==0){return this}else{var c;for(var i=0;i<d.length;i++){if(s[this.__idxOfSec(d[i])].getEnabled()){if(c){c+=","+d[i];return}else{c=d[i]}}}if(c){this.setProperty("openedSectionsId",c)}}return this};
sap.ui.commons.Accordion.prototype.getCorrespondingSection=function(d){if(jQuery(d).hasClass("sapUiAcdSection")){var a=jQuery(d).parent();var A=a[0];var s=jQuery(A).children();var i=s.index(d);var b=this.getSections();return b[i-1]}};
sap.ui.commons.Accordion.prototype.isLastSection=function(s){var S=this.getSections();if(jQuery.inArray(s,S)==S.length-1){return true}else{return false}};
sap.ui.commons.Accordion.prototype.onAfterRendering=function(){var f=this.getDomRef(),s=f.getElementsByTagName("SECTION"),d=[];var a=this.getDomRef();var l=jQuery(a).css("border-left-width");var r=jQuery(a).css("border-right-width");var b=parseFloat(l.substring(0,l.indexOf("px")))+parseFloat(r.substring(0,r.indexOf("px")));a.style.height=a.offsetHeight-b-1+"px"};
