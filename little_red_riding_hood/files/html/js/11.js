(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{999:function(t,e,r){"use strict";r.r(e),r.d(e,"SearchHighlight",(function(){return u}));r(1e3);var n=r(19);function o(t){return c(t)||s(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function s(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return g(t)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h="search/";function u(t){this.store=t}u.prototype.clear=function(){this.store.commit(h+n.CLEAR_HIGHLIGHTS)},u.prototype.findHighlights=function(t,e){var r=this;if(this.store.getters["search/isSearchTextInfoLoaded"](e)){for(var o=[],i=this.store.state.search.results,a=0,s=i.length;a<s;a++)Array.isArray(i[a])?(i[a][0].pageId.toString()===e.toString()&&o.push(i[a][0]),i[a][1].pageId.toString()===e.toString()&&o.push(i[a][1])):i[a].pageId.toString()===e.toString()&&o.push(i[a]);if(o.length){var c=r._highlightFoundItems(o,e);r._filterCrossedItems(c),r.store.commit(h+n.ADD_HIGHLIGHTS,{key:e,query:t,value:c});var g=r.store.getters["pager/state"];if("search"===g.target&&null===o[0].widePageSecondHalf&&g.singleMode&&g.currentPage===e&&!r.store.getters["pages/isFirstPage"](e)&&!r.store.getters["pages/isLastPage"](e)){var u=r.store.getters["search/getRightWideHalfSelection"](e);u!==g.widePageSecondHalf&&r.store.dispatch("pager/goToPageById",{id:e.toString(),widePageSecondHalf:u})}}else this.store.commit(h+n.ADD_HIGHLIGHTS,{key:e,query:t,value:[]})}},u.prototype._highlightFoundItems=function(t,e){var r=[],n=this.store.getters["search/getSearchTextInfo"](e),o=n.finalTree,i=n.searchTextMap,a=Object.keys(i).map((function(t){return parseInt(t,10)}));a.sort((function(t,e){return e-t}));for(var s=[].concat.apply([],t.map((function(t){return t.positions}))),c=0,g=s.length;c<g;c++){var h=this._highlightFoundItem(s[c].startPos,s[c].stopPos,a,i,o);r=r.concat(h)}return r},u.prototype._highlightFoundItem=function(t,e,r,n,o){try{for(var i=[],a=r.findIndex((function(e){return e<=t}));a>=0&&n[r[a]].endSrc<t;)a--;if(a<0)return[];for(var s=r[a],c=Math.max(t-s,0),g=a;s<=e&&g>=0;){var h=n[s],u=o[h.block],l=u.lines[h.line],f=Math.max(h.endSrc-e,0),p=h.reversed?f:c,d=h.endSrc-h.startSrc-f-c;i.push(this._getHighlightItem(l.symbols,u.onlyForSearch,h.startSym,p,d)),s=r[--g],c=0}return i}catch(y){return setTimeout((function(){throw y}),0),[]}},u.prototype._getHighlightItem=function(t,e,r,n,i){var a=r+n,s=t[a].left,c=t[a].top,g=t[a].height,h=a+i;return e&&t[a].rtl&&(s=t[h].left,c=t[h].top),{rect:[o(Array(h-a+1).keys()).reduce((function(e,r){return e+t[a+r].width}),0),g,s,c],angle:t[a].angle}},u.prototype._filterCrossedItems=function(t){for(var e=0;e<t.length;e++)for(var r=t[e],n=t[e].rect,o=e+1;o<t.length;o++){var i=t[o];if(0===r.angle&&0===i.angle&&r.rect[1]===i.rect[1]&&r.rect[3]===i.rect[3]){var a=i.rect;if(n[2]<=a[2]&&a[2]<=n[2]+n[0]||a[2]<=n[2]&&n[2]<=a[2]+a[0]){var s=Math.min(n[2],a[2]),c=[Math.max(n[2]+n[0],a[2]+a[0])-s,n[1],s,n[3]];n=r.rect=c,t.splice(o,1),o=e}}}}}}]);