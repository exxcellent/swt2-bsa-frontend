(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/k8H":function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=(e("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.vorname=t.vorname||"",e.nachname=t.nachname||"",e.email=t.email||"",e.geburtsdatum=t.geburtsdatum||"",e.nationalitaet=t.nationalitaet||"",e.mitgliedsnummer=t.mitgliedsnummer||"",e.vereinsId=t.vereinsId||null,e.userId=t.userId||null,e.version=t.version||null,e},n}());function i(n){return u.copyFrom(n)}var o=e("CcnG"),a=e("GxkG"),s=e("rOts");e.d(t,"a",function(){return c});var c=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/user",r}return r.d(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()).then(function(n){var e,r;t({result:l.b.SUCCESS,payload:(e=n,r=[],e.forEach(function(n){return r.push(i(n))}),r)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findCurrentUserProfile=function(){var n=this,t=this.currentUserService.getUserId();return new Promise(function(e,r){n.restClient.GET((new l.d).fromPath(n.getUrl()).path(t).build()).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=o.U({factory:function(){return new t(o.Y(a.a),o.Y(s.a))},token:t,providedIn:"root"}),t}(l.a)},"21OO":function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=(e("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.version=t.version||1,e.veranstaltungId=t.veranstaltungId,e.veranstaltungName=t.veranstaltungName||"",e.wettkampfId=t.wettkampfId,e.wettkampfTag=t.wettkampfTag,e.mannschaftId=t.mannschaftId,e.mannschaftNummer=t.mannschaftNummer,e.vereinId=t.vereinId,e.vereinName=t.vereinName||"",e.matchpkt=t.matchpkt,e.matchpkt_gegen=t.matchpkt_gegen,e.satzpkt=t.satzpkt,e.satzpkt_gegen=t.satzpkt_gegen,e.satzpkt_differenz=t.satzpkt_differenz,e.sortierung=t.sortierung,e.tabellenplatz=t.tabellenplatz,e},n}()),i=e("bNux");function o(n){var t=[];return n.forEach(function(n){return t.push((e=u.copyFrom(n),(r=new i.a).id=e.id,r.version=e.version,r.veranstaltung_id=e.veranstaltungId,r.veranstaltung_name=e.veranstaltungName,r.wettkampf_id=e.wettkampfId,r.wettkampf_tag=e.wettkampfTag,r.mannschaft_id=e.mannschaftId,r.mannschaft_name=e.vereinName.toString()+"-"+e.mannschaftNummer.toString(),r.verein_id=e.vereinId,r.matchpunkte=e.matchpkt.toString()+" : "+e.matchpkt_gegen.toString(),r.satzpunkte=e.satzpkt.toString()+" : "+e.satzpkt_gegen.toString(),r.satzpkt_differenz=e.satzpkt_differenz,r.tabellenplatz=e.tabellenplatz,r.sortierung=e.sortierung,r));var e,r}),t}var a=e("CcnG"),s=e("GxkG"),c=e("rOts");e.d(t,"a",function(){return f});var f=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/mannschaft",r}return r.d(t,n),t.prototype.getLigatabelleVeranstaltung=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("veranstaltung="+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.getLigatabelleWettkampf=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("wettkampf="+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(s.a),a.Y(c.a))},token:t,providedIn:"root"}),t}(l.a)},BMmu:function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=(e("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.nr=t.nr>=0?t.nr:null,e.wettkampfId=t.wettkampfId>=0?t.wettkampfId:null,e.wettkampfTypId=t.wettkampfTypId>=0?t.wettkampfTypId:null,e.mannschaftId=t.mannschaftId>=0?t.mannschaftId:null,e.begegnung=t.begegnung>=0?t.begegnung:null,e.scheibenNummer=t.scheibenNummer>=0?t.scheibenNummer:null,e.matchpunkte=t.matchpunkte>=0?t.matchpunkte:null,e.satzpunkte=t.satzpunkte>=0?t.satzpunkte:null,e.version=t.version||null,e},n}()),i=e("zcZI");function o(n){var t=[];return n.forEach(function(n){return t.push(u.copyFrom(n))}),t}var a=e("CcnG"),s=e("GxkG"),c=e("rOts");e.d(t,"a",function(){return f});var f=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/match",r}return r.d(t,n),t.prototype.findAllbyMannschaftsID=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("byMannschaftsId/"+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAllWettkampfMatchesById=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("findAllWettkampfMatches/wettkampfid="+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()+"/").then(function(n){t({result:l.b.SUCCESS,payload:o(n)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.createInitialMatchesWT0=function(n){var t=this;return new Promise(function(e,r){t.restClient.POST((new l.d).fromPath(t.getUrl()).path("WT0").build(),n).then(function(n){var t;e({result:l.b.SUCCESS,payload:(t=n,i.a.copyFrom(t))})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(s.a),a.Y(c.a))},token:t,providedIn:"root"}),t}(l.a)},CWsX:function(n,t,e){"use strict";var r=e("CcnG"),l=e("MQMe"),u=e("hIfO"),i=e("eQGX"),o=e("yljE"),a=e("m1Bt"),s=e("/2r1"),c=e("fNgX"),f=e("Hf/j"),d=e("ZYjt");e("MLKY"),e.d(t,"a",function(){return b}),e.d(t,"b",function(){return h});var b=r.pb({encapsulation:0,styles:[[".shift-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.shift-button[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;flex:0 0 50px}"]],data:{}});function h(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,16,"bla-col-layout",[],null,null,null,l.b,l.a)),r.qb(1,114688,null,0,u.a,[],null,null),(n()(),r.rb(2,0,null,0,1,"bla-selectionlist",[["style","width: 40%; height: 100%"]],null,[[null,"onFocus"],[null,"onSelect"]],function(n,t,e){var r=!0,l=n.component;return"onFocus"===t&&(r=!1!==l.onLeftFocus(e)&&r),"onSelect"===t&&(r=!1!==l.onLeftItemSelect(e)&&r),r},i.b,i.a)),r.qb(3,638976,null,0,o.a,[],{id:[0,"id"],multipleSelections:[1,"multipleSelections"],items:[2,"items"],optionFieldSelector:[3,"optionFieldSelector"]},{onSelect:"onSelect",onFocus:"onFocus"}),(n()(),r.rb(4,0,null,0,10,"div",[["class","shift-buttons"]],null,null,null,null,null)),(n()(),r.rb(5,0,null,null,4,"div",[["class","shift-button"]],null,null,null,null,null)),(n()(),r.rb(6,0,null,null,3,"bla-button",[],null,[[null,"onClick"]],function(n,t,e){var r=!0;return"onClick"===t&&(r=!1!==n.component.onLeftToRight()&&r),r},a.b,a.a)),r.qb(7,114688,null,0,s.a,[],{id:[0,"id"],disabled:[1,"disabled"]},{onClick:"onClick"}),(n()(),r.rb(8,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","angle-right"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),r.qb(9,573440,null,0,f.a,[d.b,f.b],{iconProp:[0,"iconProp"]},null),(n()(),r.rb(10,0,null,null,4,"div",[["class","shift-button"]],null,null,null,null,null)),(n()(),r.rb(11,0,null,null,3,"bla-button",[],null,[[null,"onClick"]],function(n,t,e){var r=!0;return"onClick"===t&&(r=!1!==n.component.onRightToLeft()&&r),r},a.b,a.a)),r.qb(12,114688,null,0,s.a,[],{id:[0,"id"],disabled:[1,"disabled"]},{onClick:"onClick"}),(n()(),r.rb(13,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","angle-left"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),r.qb(14,573440,null,0,f.a,[d.b,f.b],{iconProp:[0,"iconProp"]},null),(n()(),r.rb(15,0,null,0,1,"bla-selectionlist",[["style","width: 40%; height: 100%"]],null,[[null,"onFocus"],[null,"onSelect"]],function(n,t,e){var r=!0,l=n.component;return"onFocus"===t&&(r=!1!==l.onRightFocus(e)&&r),"onSelect"===t&&(r=!1!==l.onRightItemSelect(e)&&r),r},i.b,i.a)),r.qb(16,638976,null,0,o.a,[],{id:[0,"id"],multipleSelections:[1,"multipleSelections"],items:[2,"items"],optionFieldSelector:[3,"optionFieldSelector"]},{onSelect:"onSelect",onFocus:"onFocus"})],function(n,t){var e=t.component;n(t,1,0),n(t,3,0,e.idLeftList,e.multipleSelections,e.leftItemList,e.fieldSelector),n(t,7,0,e.getButtonId(e.idLeftList),!e.isLeftSelected()),n(t,9,0,"angle-right"),n(t,12,0,e.getButtonId(e.idRightList),!e.rightSelected),n(t,14,0,"angle-left"),n(t,16,0,e.idRightList,e.multipleSelections,e.rightItemList,e.fieldSelector)},function(n,t){n(t,8,0,r.Bb(t,9).renderedIconHTML),n(t,13,0,r.Bb(t,14).renderedIconHTML)})}},FLeI:function(n,t,e){"use strict";e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a});var r=e("CcnG"),l=e("Ip0R"),u=(e("LJ8u"),r.pb({encapsulation:2,styles:[],data:{}}));function i(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,5,"h4",[["class","alert-heading"]],null,null,null,null,null)),(n()(),r.rb(2,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),r.rb(3,0,null,null,1,"i",[["class","fa"]],null,null,null,null,null)),r.qb(4,278528,null,0,l.j,[r.t,r.u,r.k,r.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),r.rb(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r.Jb(6,null,[" ",""])),(n()(),r.rb(7,0,null,null,0,"hr",[],null,null,null,null,null))],function(n,t){n(t,4,0,"fa",t.component.getAlertHeadingIconClass())},function(n,t){n(t,6,0,t.component.header)})}function o(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,4,"div",[["class","alert animation fade-in"],["role","alert"]],[[8,"id",0]],null,null,null,null)),r.qb(1,278528,null,0,l.j,[r.t,r.u,r.k,r.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),r.ib(16777216,null,null,1,null,i)),r.qb(3,16384,null,0,l.l,[r.Q,r.N],{ngIf:[0,"ngIf"]},null),r.Ab(null,0)],function(n,t){var e=t.component;n(t,1,0,"alert animation fade-in",e.getAlertClass()),n(t,3,0,e.hasHeadline())},function(n,t){n(t,0,0,t.component.id)})}function a(n){return r.Lb(0,[(n()(),r.ib(16777216,null,null,1,null,o)),r.qb(1,16384,null,0,l.l,[r.Q,r.N],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.component.visible)},null)}},Oxnw:function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=(e("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.regionId=t.regionId>=0?t.regionId:null,e.ligaUebergeordnetId=t.ligaUebergeordnetId>=0?t.ligaUebergeordnetId:null,e.ligaVerantwortlichId=t.ligaVerantwortlichId>=0?t.ligaVerantwortlichId:null,e.name=t.name||"",e.regionName=t.regionName||"",e.ligaUebergeordnetName=t.ligaUebergeordnetName||"",e.ligaVerantwortlichMail=t.ligaVerantwortlichMail||"",e},n}());function i(n){return u.copyFrom(n)}var o=e("CcnG"),a=e("GxkG"),s=e("rOts");e.d(t,"a",function(){return c});var c=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/liga",r}return r.d(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()).then(function(n){var e,r;t({result:l.b.SUCCESS,payload:(e=n,r=[],e.forEach(function(n){return r.push(i(n))}),r)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(e,r){t.restClient.DELETE((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(e,r){t.restClient.PUT((new l.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.create=function(n){var t=this;return new Promise(function(e,r){t.restClient.POST((new l.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=o.U({factory:function(){return new t(o.Y(a.a),o.Y(s.a))},token:t,providedIn:"root"}),t}(l.a)},VXT6:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(n,t,e,r,l,u,i){this.scheibenNr=n||null,this.wettkampfID=t||null,this.isActive=!!e,this.satzNr=r||null,this.matchID=l||null,this.otherMatchId=u||null,this.accessToken=i||null}}()},WLw5:function(n,t,e){"use strict";var r=e("CcnG");e("3lZk"),e.d(t,"a",function(){return l}),e.d(t,"b",function(){return u});var l=r.pb({encapsulation:0,styles:[[".row-layout[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}"]],data:{}});function u(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,1,"div",[["class","row-layout"]],null,null,null,null,null)),r.Ab(null,0)],null,null)}},XUa0:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},ZNAb:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return f});var r=e("CcnG"),l=e("fNgX"),u=e("Hf/j"),i=e("ZYjt"),o=e("Ip0R"),a=(e("xRjW"),e("C4yQ"),e("zcPl"),r.pb({encapsulation:2,styles:[],data:{}}));function s(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","sync"]],[[8,"innerHTML",1]],null,null,l.b,l.a)),r.qb(1,573440,null,0,u.a,[i.b,u.b],{iconProp:[0,"iconProp"],spin:[1,"spin"]},null)],function(n,t){n(t,1,0,"sync",!0)},function(n,t){n(t,0,0,r.Bb(t,1).renderedIconHTML)})}function c(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,5,"button",[["class","btn"],["type","button"]],[[8,"disabled",0],[8,"id",0],[8,"name",0],[4,"min-width",null]],[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.onFileDownload()&&r),r},null,null)),r.qb(1,278528,null,0,o.j,[r.t,r.u,r.k,r.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),r.rb(2,0,null,null,2,"span",[["style","padding-right: 3px"]],null,null,null,null,null)),(n()(),r.ib(16777216,null,null,1,null,s)),r.qb(4,16384,null,0,o.l,[r.Q,r.N],{ngIf:[0,"ngIf"]},null),r.Ab(null,0)],function(n,t){var e=t.component;n(t,1,0,"btn",e.getButtonClass()),n(t,4,0,e.loading)},function(n,t){var e=t.component;n(t,0,0,e.isDisabled(),e.id,e.id,e.minWidth)})}function f(n){return r.Lb(0,[r.Hb(402653184,1,{aElementRef:0}),(n()(),r.ib(16777216,null,null,1,null,c)),r.qb(2,16384,null,0,o.l,[r.Q,r.N],{ngIf:[0,"ngIf"]},null),(n()(),r.rb(3,0,[[1,0],["downloadLink",1]],null,0,"a",[],null,null,null,null,null))],function(n,t){n(t,2,0,t.component.visible)},null)}},bNux:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},ny2l:function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=(e("NJqk"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.benutzerId=t.benutzerId>=0?t.benutzerId:null,e.vereinId=t.vereinId>=0?t.vereinId:null,e.veranstaltungId=t.veranstaltungId>=0?t.veranstaltungId:null,e.sortierung=t.sortierung>=0?t.sortierung:null,e.version=t.version||null,e.nummer=t.nummer||"",e.name=t.name||"",e},n}());function i(n){return u.copyFrom(n)}function o(n){var t=[];return n.forEach(function(n){return t.push(i(n))}),t}var a=e("CcnG"),s=e("GxkG"),c=e("rOts");e.d(t,"a",function(){return f});var f=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/dsbmannschaft",r}return r.d(t,n),t.prototype.create=function(n,t){var e=this;return new Promise(function(t,r){e.restClient.POST((new l.d).fromPath(e.getUrl()).build(),n).then(function(n){t({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(e,r){t.restClient.DELETE((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()).then(function(n){t({result:l.b.SUCCESS,payload:o(n)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAllByVereinsId=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("byVereinsID/"+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAllByVeranstaltungsId=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("byVeranstaltungsID/"+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(e,r){t.restClient.PUT((new l.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(s.a),a.Y(c.a))},token:t,providedIn:"root"}),t}(l.a)},qvop:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},v040:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},vG9B:function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=(e("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.regionUebergeordnet=t.regionUebergeordnet>=0?t.regionUebergeordnet:null,e.regionUebergeordnetAsName=t.regionUebergeordnetAsName||"",e.regionName=t.regionName||"",e.regionKuerzel=t.regionKuerzel||"",e.regionTyp=t.regionTyp||"",e.version=t.version||null,e},n}());function i(n){return u.copyFrom(n)}function o(n){var t=[];return n.forEach(function(n){return t.push(i(n))}),t}var a=e("CcnG"),s=e("GxkG"),c=e("rOts");e.d(t,"a",function(){return f});var f=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/regionen",r}return r.d(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()).then(function(n){t({result:l.b.SUCCESS,payload:o(n)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAllByType=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(e,r){t.restClient.DELETE((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:l.b.SUCCESS})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("ID/"+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.create=function(n){var t=this;return new Promise(function(e,r){t.restClient.POST((new l.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(e,r){t.restClient.PUT((new l.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:l.b.SUCCESS,payload:i(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(s.a),a.Y(c.a))},token:t,providedIn:"root"}),t}(l.a)},x61S:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},yVnM:function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=function(){return function(n,t,e,r,l,u,i){this.scheibennummer=n||null,this.wettkampfId=t||null,this.active=!!e,this.satznummer=r||null,this.matchId=l||null,this.otherMatchId=u||null,this.accessToken=i||null}}(),i=e("VXT6"),o=function(){function n(){}return n.tabletSessionToDO=function(n){return new i.a(n.scheibennummer,n.wettkampfId,n.active,n.satznummer,n.matchId,n.otherMatchId,n.accessToken)},n.tabletSessionToDTO=function(n){return new u(n.scheibenNr,n.wettkampfID,n.isActive,n.satzNr,n.matchID,n.otherMatchId,n.accessToken)},n}(),a=e("CcnG"),s=e("GxkG");e.d(t,"a",function(){return c});var c=function(n){function t(t){var e=n.call(this)||this;return e.restClient=t,e.serviceSubUrl="v1/tabletsessions",e}return r.d(t,n),t.prototype.findAllTabletSessions=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path(n).build()).then(function(n){for(var t=[],r=0,u=n;r<u.length;r++)t.push(o.tabletSessionToDO(u[r]));e({result:l.b.SUCCESS,payload:t})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAllTabletSessionswithoutArgument=function(){var n=this;return new Promise(function(t,e){n.restClient.GET((new l.d).fromPath(n.getUrl()).build()).then(function(n){for(var e=[],r=0,u=n;r<u.length;r++)e.push(o.tabletSessionToDO(u[r]));t({result:l.b.SUCCESS,payload:e})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findTabletSession=function(n,t){var e=this,r=(new l.d).fromPath(this.getUrl()).path(n).path(t).build();return new Promise(function(n,t){e.restClient.GET(r).then(function(t){n({result:l.b.SUCCESS,payload:o.tabletSessionToDO(t)})},function(n){t(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.create=function(n,t,e){var r=this,u=(new l.d).fromPath(this.getUrl()).path(t).path(e).build();return new Promise(function(t,e){r.restClient.POST(u,o.tabletSessionToDTO(n)).then(function(n){t({result:l.b.SUCCESS,payload:o.tabletSessionToDO(n)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return n.accessToken=this.createAccessToken().toString(),new Promise(function(e,r){t.restClient.PUT(t.getUrl(),o.tabletSessionToDTO(n)).then(function(n){e({result:l.b.SUCCESS,payload:o.tabletSessionToDO(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.updateWithoutTokenCreation=function(n){var t=this;return new Promise(function(e,r){t.restClient.PUT(t.getUrl(),o.tabletSessionToDTO(n)).then(function(n){e({result:l.b.SUCCESS,payload:o.tabletSessionToDO(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.delete=function(n,t){var e=this,r=(new l.d).fromPath(this.getUrl()).path(n).path(t).build();return new Promise(function(n,t){e.restClient.DELETE(r).then(function(t){n({result:l.b.SUCCESS,payload:t})},function(n){t(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.createAccessToken=function(){return Math.floor(1e5+9e5*Math.random())},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(s.a))},token:t,providedIn:"root"}),t}(l.a)},z6uh:function(n,t,e){"use strict";var r=e("mrSG"),l=e("YfBl"),u=e("X628"),i=function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.dsbMitgliedId=t.dsbMitgliedId>=0?t.dsbMitgliedId:null,e.wettkampfId=t.wettkampfId>=0?t.wettkampfId:null,e.mannschaftId=t.mannschaftId>=0?t.mannschaftId:null,e.lfdNr=t.lfdNr>=0?t.lfdNr:null,e.matchId=t.matchId>=0?t.matchId:null,e.schuetzeNr=t.schuetzeNr>=0?t.schuetzeNr:null,e.version=t.version>=0?t.version:null,e.matchNr=t.matchNr>=0?t.matchNr:null,Object(u.a)(t.ringzahl)?e.ringzahl=null:(e.ringzahl=new Array,t.ringzahl.forEach(function(n){e.ringzahl.push(n)})),e},n}();function o(n){var t=[];return n.forEach(function(n){return t.push(i.copyFrom(n))}),t}e("NJqk");var a=e("CcnG"),s=e("GxkG"),c=e("rOts");e.d(t,"a",function(){return f});var f=function(n){function t(t,e){var r=n.call(this)||this;return r.restClient=t,r.currentUserService=e,r.serviceSubUrl="v1/passen",r}return r.d(t,n),t.prototype.findByWettkampfIdAndDsbMitgliedId=function(n,t){var e=this;return new Promise(function(r,u){e.restClient.GET((new l.d).fromPath(e.getUrl()).path("byWettkampfIdAndDsbMitgliedId/"+n+"/"+t).build()).then(function(n){r({result:l.b.SUCCESS,payload:o(n)})},function(n){u(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findByTeamId=function(n){var t=this;return new Promise(function(e,r){t.restClient.GET((new l.d).fromPath(t.getUrl()).path("findByTeamId/teamid="+n).build()).then(function(n){e({result:l.b.SUCCESS,payload:o(n)})},function(n){r(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()+"/").then(function(n){t({result:l.b.SUCCESS,payload:o(n)})},function(n){e(0===n.status?{result:l.b.CONNECTION_PROBLEM}:{result:l.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(s.a),a.Y(c.a))},token:t,providedIn:"root"}),t}(l.a)}}]);