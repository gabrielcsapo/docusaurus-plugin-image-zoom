"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{8283:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(7791),r=n(7135),c=n.n(r),u=n(7378),l=n(353),s=n(1652),o=n(5361),i=n(4142),m=n(9635),h=n(161);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(9434),d=n(7653),_=n(6512),E=n(7243),g=n(3394),v=n(3795),S=n(2213),I=n(3288),k="searchQueryInput_1kZI",w="searchResultItem_1mdY",y="searchResultItemPath_2hKU",b="searchResultItemSummary_n9-t";function q(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===a,o=2===a,m=(s?n.b:r.b).slice(),h=o?n.s:n.t;return s||m.push(r.t),u.createElement("article",{className:w},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(h,c):(0,E.o)(h,(0,g.m)(l,"t"),c,100)}})),m.length>0&&u.createElement("p",{className:y},m.join(" \u203a ")),o&&u.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,g.m)(l,"t"),c,100)}}))}var C=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,i=(0,u.useState)(n),m=i[0],h=i[1],_=(0,u.useState)(),E=_[0],g=_[1],w=(0,u.useState)(),y=w[0],b=w[1],C=(0,u.useMemo)((function(){return m?(0,I.K)(S.Iz.search_results_for,{keyword:m}):S.Iz.search_the_documentation}),[m]);(0,u.useEffect)((function(){r(m),E&&(m?E(m,(function(e){b(e)})):b(void 0))}),[m,E]);var Z=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,g((function(){return(0,d.v)(a,r,100,(function(e,t){var n;"undefined"!=typeof _paq&&_paq&&null!=(n=_paq)&&n.push&&_paq.push(["trackSiteSearch",e,!1,t.length])}))}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(s.Z,{title:C},u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"})),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,C),u.createElement("input",{type:"search",name:"q",className:k,"aria-label":"Search",onChange:Z,value:m,autoComplete:"off",autoFocus:!0}),!E&&m&&u.createElement("div",null,u.createElement(v.Z,null)),y&&(y.length>0?u.createElement("p",null,(0,I.K)(1===y.length?S.Iz.count_documents_found:S.Iz.count_documents_found_plural,{count:y.length})):u.createElement("p",null,S.Iz.no_documents_were_found)),u.createElement("section",null,y&&y.map((function(e){return u.createElement(q,{key:e.document.i,searchResult:e})})))))}}}]);