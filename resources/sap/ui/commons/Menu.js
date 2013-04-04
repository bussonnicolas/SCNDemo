/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Menu");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Menu",{metadata:{publicMethods:["open","close"],library:"sap.ui.commons",properties:{"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"ariaDescription":{type:"string",group:"Accessibility",defaultValue:null}},defaultAggregation:"items",aggregations:{"items":{type:"sap.ui.commons.MenuItemBase",multiple:true,singularName:"item"}},events:{"itemSelect":{}}}});sap.ui.commons.Menu.M_EVENTS={'itemSelect':'itemSelect'};jQuery.sap.require("sap.ui.commons.MenuItemBase");jQuery.sap.require("sap.ui.core.Popup");
sap.ui.commons.Menu.prototype.init=function(){this.bOpen=false;this.oOpenedSubMenu=null;this.oHoveredItem=null;this.oPopup=null;this.fAnyEventHandlerProxy=jQuery.proxy(this.onAnyEvent,this);this.bUseTopStyle=false};
sap.ui.commons.Menu.prototype.exit=function(){if(this.oPopup){this.oPopup.destroy()}if(this.fAnyEventHandlerProxy){jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy)}if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null}};
sap.ui.commons.Menu.prototype.onBeforeRendering=function(){if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null}};
sap.ui.commons.Menu.prototype.onAfterRendering=function(){};
sap.ui.commons.Menu.prototype.open=function(w,o,m,a,b,c,d){if(this.bOpen){return}this.bOpen=true;this.oOpenerRef=o;this.getPopup().open(0,m,a,b,c||"0 0",d||"_sapUiCommonsMenuFlip _sapUiCommonsMenuFlip");var D=this.getDomRef();jQuery(D).attr("tabIndex",0).focus();if(w){this.setHoveredItem(this.getNextVisibleItem(-1))}jQuery.sap.bindAnyEvent(this.fAnyEventHandlerProxy)};
sap.ui.commons.Menu.prototype.close=function(){if(!this.bOpen){return}if(this.fAnyEventHandlerProxy){jQuery.sap.unbindAnyEvent(this.onAnyEvent)}this.bOpen=false;if(this.oOpenedSubMenu){this.oOpenedSubMenu.close()}this.setHoveredItem();jQuery(this.getDomRef()).attr("tabIndex",-1);if(this.oOpenerRef&&!this.ignoreOpenerDOMRef){this.oOpenerRef.focus()}this.oOpenerRef=undefined;this.getPopup().close(0);this.onBeforeRendering();this.$().remove();this.bOutput=false;if(this.isSubMenu()){this.getParent().getParent().oOpenedSubMenu=null}};
sap.ui.commons.Menu.prototype.onclick=function(e){this.selectItem(this.getItemByDomRef(e.target),false);e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsapnext=function(e){if(e.keyCode!=jQuery.sap.KeyCodes.ARROW_DOWN){if(this.oHoveredItem&&this.oHoveredItem.getSubmenu()&&this.checkEnabled(this.oHoveredItem)){this.openSubmenu(this.oHoveredItem,true);return}}var i=this.oHoveredItem?this.indexOfAggregation("items",this.oHoveredItem):-1;this.setHoveredItem(this.getNextVisibleItem(i));e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsapprevious=function(e){if(e.keyCode!=jQuery.sap.KeyCodes.ARROW_UP){if(this.isSubMenu()){this.close();e.preventDefault();e.stopPropagation();return}}var i=this.oHoveredItem?this.indexOfAggregation("items",this.oHoveredItem):-1;this.setHoveredItem(this.getPreviousVisibleItem(i));e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsaphome=function(e){var I=this.getItems();var o=null;for(var i=0;i<I.length;i++){if(I[i].getVisible()){o=I[i];break}}this.setHoveredItem(o);e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsapend=function(e){var I=this.getItems();var o=null;for(var i=I.length-1;i>=0;i--){if(I[i].getVisible()){o=I[i];break}}this.setHoveredItem(o);e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsapselect=function(e){this._sapSelectOnKeyDown=true;e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onkeyup=function(e){if(!this._sapSelectOnKeyDown){return}else{this._sapSelectOnKeyDown=false}if(!jQuery.sap.PseudoEvents.sapselect.fnCheck(e)){return}this.selectItem(this.oHoveredItem,true);e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsapescape=function(e){this.close();e.preventDefault();e.stopPropagation()};
sap.ui.commons.Menu.prototype.onsaptabnext=sap.ui.commons.Menu.prototype.onsapescape;sap.ui.commons.Menu.prototype.onsaptabprevious=sap.ui.commons.Menu.prototype.onsapescape;
sap.ui.commons.Menu.prototype.onmouseover=function(e){var i=this.getItemByDomRef(e.target);if(!this.bOpen||!i||i==this.oHoveredItem){return}if(this.oOpenedSubMenu&&jQuery.sap.containsOrEquals(this.oOpenedSubMenu.getDomRef(),e.target)){return}this.setHoveredItem(i);if(this.oOpenedSubMenu){this.oOpenedSubMenu.close();this.oOpenedSubMenu=null}if(jQuery.sap.checkMouseEnterOrLeave(e,this.getDomRef())){this.getDomRef().focus()}if(this.checkEnabled(i)){this.openSubmenu(i,false)}};
sap.ui.commons.Menu.prototype.onmouseout=function(e){if(jQuery.sap.checkMouseEnterOrLeave(e,this.getDomRef())){if(!this.oOpenedSubMenu||!this.oOpenedSubMenu.getParent()===this.oHoveredItem){this.setHoveredItem(null)}}};
sap.ui.commons.Menu.prototype.onAnyEvent=function(e){if(!this.bOpen||e.type!="mousedown"){return}var s=e.target,d=this.getDomRef();if(!jQuery.sap.containsOrEquals(d,s)||s.tagName=="BODY"){this.getRootMenu().handleOuterEvent(this.getId(),e)}};
sap.ui.commons.Menu.prototype.onsapfocusleave=function(e){if(this.oOpenedSubMenu||!this.bOpen){return}this.getRootMenu().handleOuterEvent(this.getId(),e)};
sap.ui.commons.Menu.prototype.handleOuterEvent=function(m,e){var i=false;if(e.type=="mousedown"){var c=this;while(c){if(jQuery.sap.containsOrEquals(c.getDomRef(),e.target)){i=true}c=c.oOpenedSubMenu}}else if(e.type=="sapfocusleave"){if(e.relatedControlId){var c=this;while(c){if((c.oOpenedSubMenu&&c.oOpenedSubMenu.getId()==e.relatedControlId)||jQuery.sap.containsOrEquals(c.getDomRef(),jQuery.sap.byId(e.relatedControlId).get(0))){i=true}c=c.oOpenedSubMenu}}}if(!i){this.ignoreOpenerDOMRef=true;this.close();this.ignoreOpenerDOMRef=false}};
sap.ui.commons.Menu.prototype.getItemByDomRef=function(d){var I=this.getItems(),l=I.length;for(var i=0;i<l;i++){var o=I[i],a=o.getDomRef();if(jQuery.sap.containsOrEquals(a,d)){return o}}return null};
sap.ui.commons.Menu.prototype.selectItem=function(i,w){if(!i||!(i instanceof sap.ui.commons.MenuItemBase&&this.checkEnabled(i))){return}var s=i.getSubmenu();if(!s){this.getRootMenu().close()}else{this.openSubmenu(i,w)}i.fireSelect({item:i});this.getRootMenu().fireItemSelect({item:i})};
sap.ui.commons.Menu.prototype.isSubMenu=function(){return this.getParent()&&this.getParent().getParent&&this.getParent().getParent()instanceof sap.ui.commons.Menu};
sap.ui.commons.Menu.prototype.getRootMenu=function(){var m=this;while(m.isSubMenu()){m=m.getParent().getParent()}return m};
sap.ui.commons.Menu.prototype.getMenuLevel=function(){var l=1;var m=this;while(m.isSubMenu()){m=m.getParent().getParent();l++}return l};
sap.ui.commons.Menu.prototype.getPopup=function(){if(!this.oPopup){this.oPopup=new sap.ui.core.Popup(this,false,true)}return this.oPopup};
sap.ui.commons.Menu.prototype.setHoveredItem=function(i){if(this.oHoveredItem){this.oHoveredItem.hover(false,this)}if(!i){this.oHoveredItem=null;jQuery(this.getDomRef()).removeAttr("aria-activedescendant");return}this.oHoveredItem=i;i.hover(true,this);if(sap.ui.getCore().getConfiguration().getAccessibility()){jQuery(this.getDomRef()).attr("aria-activedescendant",i.getId())}};
sap.ui.commons.Menu.prototype.openSubmenu=function(i,w){var s=i.getSubmenu();if(!s){return}if(this.oOpenedSubMenu===s){this.oOpenedSubMenu=null;s.close()}else{if(this.oOpenedSubMenu){this.oOpenedSubMenu.close();this.oOpenedSubMenu=null}this.oOpenedSubMenu=s;var e=sap.ui.core.Popup.Dock;s.open(w,this.getDomRef(),e.BeginTop,e.EndTop,i.getDomRef(),"0 0")}};
sap.ui.commons.Menu.prototype.checkEnabled=function(i){return i&&i.getEnabled()&&this.getEnabled()};
sap.ui.commons.Menu.prototype.getNextVisibleItem=function(I){var o=null;var a=this.getItems();for(var i=I+1;i<a.length;i++){if(a[i].getVisible()){o=a[i];break}}if(!o){for(var i=0;i<=I;i++){if(a[i].getVisible()){o=a[i];break}}}return o};
sap.ui.commons.Menu.prototype.getPreviousVisibleItem=function(I){var o=null;var a=this.getItems();for(var i=I-1;i>=0;i--){if(a[i].getVisible()){o=a[i];break}}if(!o){for(var i=a.length-1;i>=I;i--){if(a[i].getVisible()){o=a[i];break}}}return o};
sap.ui.commons.Menu.prototype.setRootMenuTopStyle=function(u){this.getRootMenu().bUseTopStyle=u;sap.ui.commons.Menu.rerenderMenu(this.getRootMenu())};
sap.ui.commons.Menu.rerenderMenu=function(m){var I=m.getItems();for(var i=0;i<I.length;i++){var s=I[i].getSubmenu();if(s){sap.ui.commons.Menu.rerenderMenu(s)}}m.invalidate();m.rerender()};
jQuery.ui.position._sapUiCommonsMenuFlip={left:function(p,d){if(d.at[0]==="center"){return}var w=jQuery(window),o=d.collisionPosition.left+d.collisionWidth-w.width()-w.scrollLeft(),m=d.my[0]==="left"?-d.elemWidth:d.my[0]==="right"?d.elemWidth:0,a=d.at[0]==="left"?d.targetWidth:-d.targetWidth,b=-2*d.offset[0],c=0,s=false;o=d.collisionPosition.left<0?Math.abs(d.collisionPosition.left):o;if(o>0){c=m+a+b;var e=d.collisionPosition.left+c;if(c>0){e+=d.collisionWidth-w.width()-w.scrollLeft();s=e>0&&Math.abs(e)>o}else if(c<0){s=e<0&&Math.abs(e)>o}c=s?0:c}p.left+=c},top:function(p,d){if(d.at[1]==="center"){return}var w=jQuery(window),o=d.collisionPosition.top+d.collisionHeight-w.height()-w.scrollTop(),m=d.my[1]==="top"?-d.elemHeight:d.my[1]==="bottom"?d.elemHeight:0,a=d.at[1]==="top"?d.targetHeight:-d.targetHeight,b=-2*d.offset[1],c=0;if(d.collisionPosition.top<0||o>0){c=m+a+b;var e=d.collisionPosition.top+c;if(e<0&&o>0&&Math.abs(e)>o){c=0}}p.top+=c}};
