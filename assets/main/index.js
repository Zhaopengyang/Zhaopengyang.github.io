window.__require=function t(e,o,r){function n(c,l){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var a="function"==typeof __require&&__require;if(!l&&a)return a(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var p=o[c]={exports:{}};e[c][0].call(p.exports,function(t){return n(e[c][1][t]||t)},p,p.exports,t,e,o,r)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({AllLevels:[function(t,e,o){"use strict";cc._RF.push(e,"72096G4nh5FwrlmA/C+EVqW","AllLevels");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./CreatorController"),l=cc._decorator,s=l.ccclass,a=l.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.allLevelShow=null,e}return n(e,t),e.prototype.show=function(t){this.node.active=!0;var e="";t.forEach(function(t){var o=c.default.I.getLevelInfo(t);e+=t+" "+o+"\n"}),this.allLevelShow.string=e},e.prototype.hide=function(){this.node.active=!1},i([a(cc.EditBox)],e.prototype,"allLevelShow",void 0),i([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./CreatorController":"CreatorController"}],ConfigAddLayer:[function(t,e,o){"use strict";cc._RF.push(e,"52198533XdFl6jjwikjCT2H","ConfigAddLayer");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./CreatorController"),l=cc._decorator,s=l.ccclass,a=l.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.widthInput=null,e.heightInput=null,e.widthTip=null,e.heightTip=null,e}return n(e,t),e.prototype.show=function(){this.node.active=!0,this.widthInput.string="",this.heightInput.string="",this.widthTip.active=!1,this.heightTip.active=!1},e.prototype.cancel=function(){this.node.active=!1},e.prototype.confirm=function(){var t=this,e=!0,o=Number(this.widthInput.string),r=Number(this.heightInput.string);Number.isFinite(o)&&0!=o||(e=!1,this.widthTip.active=!0,this.scheduleOnce(function(){t.widthTip.active=!1},3)),Number.isFinite(r)&&0!=r||(e=!1,this.heightTip.active=!0,this.scheduleOnce(function(){t.heightTip.active=!1},3)),e&&(c.default.I.realAddLayer(o,r),this.node.active=!1)},i([a(cc.EditBox)],e.prototype,"widthInput",void 0),i([a(cc.EditBox)],e.prototype,"heightInput",void 0),i([a(cc.Node)],e.prototype,"widthTip",void 0),i([a(cc.Node)],e.prototype,"heightTip",void 0),i([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./CreatorController":"CreatorController"}],ConfirmDialog:[function(t,e,o){"use strict";cc._RF.push(e,"c473eRsuYxCHpqdiPeoemgH","ConfirmDialog");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,l=c.ccclass,s=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title=null,e._callBack=null,e}return n(e,t),e.prototype.show=function(t,e){void 0===t&&(t="\u662f\u5426\u786e\u5b9a"),void 0===e&&(e=null),this.title.string=t,this._callBack=e,this.node.active=!0},e.prototype.hide=function(){this.node.active=!1},e.prototype.confirm=function(){this._callBack&&this._callBack(),this.node.active=!1},i([s(cc.Label)],e.prototype,"title",void 0),i([l],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],CreatorController:[function(t,e,o){"use strict";cc._RF.push(e,"9d97bNQYWlOg7Lz8ESHb6Tt","CreatorController");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./AllLevels"),l=t("./ConfigAddLayer"),s=t("./ConfirmDialog"),a=t("./SingleMapController"),p=cc._decorator,u=p.ccclass,h=p.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prefabMap=null,e.confirmDialog=null,e.allLevels=null,e.levelNum=null,e.typeNum=null,e.typeNumTip=null,e.levelTip=null,e.configAddLayer=null,e.mapArea=null,e._layers=[],e}var o;return n(e,t),o=e,e.prototype.onLoad=function(){o.I=this},e.prototype.start=function(){this.confirmDialog.node.active=!1,this.configAddLayer.active=!1,this.__resetPage()},e.prototype.addLayerClick=function(){this.configAddLayer.getComponent(l.default).show()},e.prototype.realAddLayer=function(t,e){var o=this._layers.length,r=this._layers[o-1];r&&r.clearBlockBg();var n=cc.instantiate(this.prefabMap),i=n.getComponent(a.default);this._layers.push(i),this.mapArea.addChild(n),i.init(this._layers.length-1,t,e)},e.prototype.removeLayerClick=function(){var t=this;this.confirmDialog.show("\u786e\u5b9a\u5220\u9664\u6700\u4e0a\u9762\u4e00\u5c42\uff1f",function(){t.__realRemoveLayer()})},e.prototype.fillLayer=function(){var t=this._layers.length,e=this._layers[t-1];e&&e.fillAll()},e.prototype.clearLayer=function(){var t=this._layers.length,e=this._layers[t-1];e&&e.clearAll()},e.prototype.readLevelData=function(){var t=this,e=Number(this.levelNum.string);if(0==e)return this.levelTip.active=!0,void this.scheduleOnce(function(){t.levelTip.active=!1},3);var o=this.getLevelInfo(e);o?this.confirmDialog.show("\u8bfb\u53d6\u5173\u5361\u5c06\u8986\u76d6\u5f53\u524d\u7684\u914d\u7f6e\uff0c\u662f\u5426\u8986\u76d6",function(){t.__realReadLevelData(o)}):this.confirmDialog.show("\u5f53\u524d\u5173\u5361\u6ca1\u6709\u5b58\u6863")},e.prototype.createLevel=function(){var t=this,e=Number(this.typeNum.string);if(0==e||e>20)return this.typeNumTip.active=!0,void this.scheduleOnce(function(){t.typeNumTip.active=!1},3);var o=Number(this.levelNum.string);if(0==o)this.levelTip.active=!0,this.scheduleOnce(function(){t.levelTip.active=!1},3);else{if(this.getLevelInfo(o))return void this.confirmDialog.show(o+"\u5173\u6570\u636e\u5df2\u5b58\u5728\uff0c\u662f\u5426\u8986\u76d6\uff1f",function(){t.__realCreatLevel()});this.__realCreatLevel()}},e.prototype.showAllLevels=function(){var t=cc.sys.localStorage.getItem("tile-master-levels");t?this.allLevels.show(JSON.parse(t)):this.confirmDialog.show("\u5f53\u524d\u65e0\u5df2\u914d\u7f6e\u5173\u5361")},e.prototype.resetLevelNum=function(){var t=[0],e=cc.sys.localStorage.getItem("tile-master-levels");e&&(t=JSON.parse(e)),this.levelNum.string=(Math.max.apply(Math,t)+1).toString()},e.prototype.getLevelInfo=function(t){return cc.sys.localStorage.getItem("tile-master-level-"+t.toString())},e.prototype.__realRemoveLayer=function(){var t=this._layers.pop();t&&t.node.destroy();var e=this._layers[this._layers.length-1];e&&e.showBlockBg()},e.prototype.__realReadLevelData=function(){cc.log("\u663e\u793a\u5b58\u6863\u7684\u914d\u7f6e")},e.prototype.__realCreatLevel=function(){var t=Number(this.levelNum.string),e=[],o=cc.sys.localStorage.getItem("tile-master-levels");o&&(e=JSON.parse(o)),e.includes(t)||e.push(t);var r={blockTypeNum:Number(this.typeNum.string),map:[]},n=0;this._layers.forEach(function(t){var e={width:t.width,height:t.height,x:[],y:[]};t.getBlocks().forEach(function(t){if(t.blockPart.active){var o=t.getIndex();e.x.push(o.x),e.y.push(o.y),n+=1}}),r.map.push(e)}),0!=n&&n%3==0?(cc.sys.localStorage.setItem("tile-master-levels",JSON.stringify(e)),cc.sys.localStorage.setItem("tile-master-level-"+t.toString(),JSON.stringify(r)),this.confirmDialog.show(t+"\u5173\u6570\u636e\u5df2\u4fdd\u5b58"),this.__resetPage()):this.confirmDialog.show(0==n?"\u65b9\u5757\u6570\u91cf\u4e0d\u80fd\u4e3a0\uff0c\u8bf7\u91cd\u65b0\u8c03\u6574":"\u65b9\u5757\u7684\u6570\u91cf\u5fc5\u987b\u4e3a3\u7684\u500d\u6570\uff0c\u8bf7\u91cd\u65b0\u8c03\u6574\uff08\u5f53\u524d\u6570\u91cf\uff1a"+n+"\uff09")},e.prototype.__resetPage=function(){this.resetLevelNum(),this.typeNum.string="",this._layers.forEach(function(t){t.node.destroy()}),this._layers.length=0},i([h(cc.Prefab)],e.prototype,"prefabMap",void 0),i([h(s.default)],e.prototype,"confirmDialog",void 0),i([h(c.default)],e.prototype,"allLevels",void 0),i([h(cc.EditBox)],e.prototype,"levelNum",void 0),i([h(cc.EditBox)],e.prototype,"typeNum",void 0),i([h(cc.Node)],e.prototype,"typeNumTip",void 0),i([h(cc.Node)],e.prototype,"levelTip",void 0),i([h(cc.Node)],e.prototype,"configAddLayer",void 0),i([h(cc.Node)],e.prototype,"mapArea",void 0),o=i([u],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./AllLevels":"AllLevels","./ConfigAddLayer":"ConfigAddLayer","./ConfirmDialog":"ConfirmDialog","./SingleMapController":"SingleMapController"}],GameSceneController:[function(t,e,o){"use strict";cc._RF.push(e,"de92abCGIpBrr5SZckKHnkS","GameSceneController");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,l=c.ccclass,s=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},i([l],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],SingleBlockController:[function(t,e,o){"use strict";cc._RF.push(e,"3de9dKwtlJEm5AOGTCoBPNR","SingleBlockController");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,l=c.ccclass,s=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.blockPart=null,e.blockBg=null,e._indexX=0,e._indexY=0,e._isGary=!1,e._blockCoverd=[],e}var o;return n(e,t),o=e,e.prototype.start=function(){this.setBlockPartActive(!1)},e.prototype.onCollisionEnter=function(t,e){t.tag>e.tag&&(this._blockCoverd.push(t.node.getComponent(o)),this.turnToGary())},e.prototype.onCollisionExit=function(t,e){if(t.tag>e.tag){var r=t.node.getComponent(o),n=this._blockCoverd.indexOf(r);-1!=n&&(this._blockCoverd.splice(n,1),0===this._blockCoverd.length&&this.turnToWhite())}},e.prototype.turnToGary=function(){this._isGary||(this._isGary=!0,this.blockPart.color=cc.color(120,120,120))},e.prototype.turnToWhite=function(){this._isGary&&(this._isGary=!1,this.blockPart.color=cc.color(255,255,255))},e.prototype.onClick=function(){this.setBlockPartActive(!this.blockPart.active)},e.prototype.showBg=function(){this.blockBg.active=!0},e.prototype.hideBg=function(){this.blockBg.active=!1},e.prototype.init=function(t,e,o){this.setBlockPartActive(!1),this.node.getComponent(cc.Collider).tag=100+t,this._indexX=e,this._indexY=o},e.prototype.setBlockPartActive=function(t){this.blockPart.active=t,this.node.getComponent(cc.Collider).enabled=this.blockPart.active},e.prototype.getIndex=function(){return{x:this._indexX,y:this._indexY}},i([s(cc.Node)],e.prototype,"blockPart",void 0),i([s(cc.Node)],e.prototype,"blockBg",void 0),o=i([l],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],SingleMapController:[function(t,e,o){"use strict";cc._RF.push(e,"6c264FXaMxNGYvpWQnssPod","SingleMapController");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./SingleBlockController"),l=cc._decorator,s=l.ccclass,a=l.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prefabBlock=null,e.nodeMask=null,e.layerNumber=0,e.width=0,e.height=0,e._singleBlocks=[],e}return n(e,t),e.prototype.init=function(t,e,o){this.layerNumber=t,this.width=e,this.height=o;for(var r=0;r<o;r++)for(var n=0;n<e;n++){var i=cc.instantiate(this.prefabBlock),l=i.getComponent(c.default);l.init(t,n,r),this._singleBlocks.push(l),this.node.setContentSize(i.width*e,i.height*o),this.node.addChild(i),i.setPosition(i.width*(n+.5)-this.node.width/2,-(i.height*(r+.5)-this.node.height/2)),i.zIndex=r*e+n}this.nodeMask.zIndex=100,this.nodeMask.active=!1,this.nodeMask.setContentSize(this.node.width,this.node.height)},e.prototype.clearBlockBg=function(){this._singleBlocks.forEach(function(t){t.hideBg()}),this.nodeMask.active=!0},e.prototype.showBlockBg=function(){this._singleBlocks.forEach(function(t){t.showBg()}),this.nodeMask.active=!1},e.prototype.fillAll=function(){this._singleBlocks.forEach(function(t){t.setBlockPartActive(!0)})},e.prototype.clearAll=function(){this._singleBlocks.forEach(function(t){t.setBlockPartActive(!1)})},e.prototype.getBlocks=function(){return this._singleBlocks},i([a(cc.Prefab)],e.prototype,"prefabBlock",void 0),i([a(cc.Node)],e.prototype,"nodeMask",void 0),i([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./SingleBlockController":"SingleBlockController"}]},{},["AllLevels","ConfigAddLayer","ConfirmDialog","CreatorController","GameSceneController","SingleBlockController","SingleMapController"]);