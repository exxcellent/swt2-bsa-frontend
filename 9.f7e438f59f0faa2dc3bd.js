(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{eQGX:function(l,n,e){"use strict";var t=e("CcnG"),i=e("gIcY"),a=e("Ip0R");e("yljE"),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r});var u=t.pb({encapsulation:0,styles:[[".selection-list[_ngcontent-%COMP%]{height:100%;max-height:100%;min-height:100%;width:100%;min-width:100%;max-width:100%;overflow-y:scroll}"]],data:{}});function o(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"option",[],null,null,null,null,null)),t.qb(1,147456,null,0,i.p,[t.k,t.F,[8,null]],{ngValue:[0,"ngValue"]},null),t.qb(2,147456,null,0,i.A,[t.k,t.F,[2,i.u]],{ngValue:[0,"ngValue"]},null),(l()(),t.Jb(3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit[n.component.optionFieldSelector])})}function s(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,o)),t.qb(2,278528,null,0,a.k,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ib(0,null,null,0))],function(l,n){l(n,2,0,n.component.items)},null)}function r(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,7,"select",[["class","form-control selection-list"]],[[8,"id",0],[8,"multiple",0],[8,"size",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var i=!0,a=l.component;return"change"===n&&(i=!1!==t.Bb(l,1).onChange(e.target)&&i),"blur"===n&&(i=!1!==t.Bb(l,1).onTouched()&&i),"focus"===n&&(i=!1!==a.focusChanged(e)&&i),"ngModelChange"===n&&(i=!1!==a.onSelectionChanged(e)&&i),"ngModelChange"===n&&(i=!1!==(a.selectedItemIds=e)&&i),i},null,null)),t.qb(1,16384,null,0,i.u,[t.F,t.k],null,null),t.Gb(1024,null,i.j,function(l){return[l]},[i.u]),t.qb(3,671744,[["selectModel",4]],0,i.o,[[8,null],[8,null],[8,null],[6,i.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,i.k,null,[i.o]),t.qb(5,16384,null,0,i.l,[[4,i.k]],null,null),(l()(),t.ib(16777216,null,null,1,null,s)),t.qb(7,16384,null,0,a.l,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,e.id,e.isDisabled(),e.selectedItemIds),l(n,7,0,!e.showLoadingPlaceholder()&&!e.showEmptyItemListPlaceholder())},function(l,n){var e=n.component;l(n,0,0,e.id,e.isMultibleSelectionAllowed(),e.getListSize(),t.Bb(n,5).ngClassUntouched,t.Bb(n,5).ngClassTouched,t.Bb(n,5).ngClassPristine,t.Bb(n,5).ngClassDirty,t.Bb(n,5).ngClassValid,t.Bb(n,5).ngClassInvalid,t.Bb(n,5).ngClassPending)})}},pwFK:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),i=function(){return function(){}}(),a=e("pMnS"),u=e("R6bV"),o=e("w90F"),s=e("WLw5"),r=e("3lZk"),c=e("A7o+"),d=e("s5Z2"),b=e("zLSN"),g=e("eQGX"),h=e("yljE"),p=e("M/5E"),f=e("JiLI"),m=e("xOPY"),L=e("rOts"),v=e("m1Bt"),E=e("/2r1"),y=e("mrSG"),T=e("PEb7"),I={moduleTranslationKey:"WETTKAEMPFE",pageTitleTranslationKey:"WETTKAEMPFE.WETTKAEMPFE.TITLE",navigationCardsConfig:{navigationCards:[]}},S={columns:[{translationKey:"WETTKAEMPFE.LIGATABELLE.TABELLENPLATZ",propertyName:"tabellenplatz",width:15,sortable:!1},{translationKey:"WETTKAEMPFE.LIGATABELLE.MANNSCHAFTNAME",propertyName:"mannschaft_name",width:70,sortable:!1},{translationKey:"WETTKAEMPFE.LIGATABELLE.MATCHPUNKTE",propertyName:"matchpunkte",width:15,sortable:!1},{translationKey:"WETTKAEMPFE.LIGATABELLE.SATZPUNKTE",propertyName:"satzpunkte",width:15,sortable:!1},{translationKey:"WETTKAEMPFE.LIGATABELLE.SATZPUNKTDIFFERENZ",propertyName:"satzpkt_differenz",width:15,sortable:!1}]},w=e("nr0C"),z=e("21OO"),A=e("bNux"),k=e("X628"),C=e("Oxnw"),P=(e("gQPg"),e("4Ce9")),F=function(l){function n(n,e,t,i,a,u,o){var s=l.call(this)||this;return s.router=n,s.route=e,s.notificationService=t,s.veranstaltungsDataProvider=i,s.ligatabelleDataProvider=a,s.ligaDataProviderService=u,s.sportjahrDataProviderService=o,s.config=I,s.config_table=S,s.PLACEHOLDER_VAR="Zur Suche Liga-Bezeichnung eingeben...",s.multipleSelections=!0,s.loadingVeranstaltungen=!0,s.loadingLigatabelle=!1,s.tableContent=[],s}return y.c(n,l),n.prototype.ngOnInit=function(){var l=this;console.log("Bin im Liga"),this.loadLigen(),this.loading=!0,this.providedID=void 0,this.notificationService.discardNotification(),this.route.params.subscribe(function(n){Object(k.c)(n.id)?console.log("no params"):(l.providedID=n.id,console.log(l.providedID))}),console.log(this.providedID)},n.prototype.onSelectLiga=function(l){document.querySelector("#Button").style.display="block",this.selectedLigen=[],this.selectedLigen=l,this.selectedLigen&&this.selectedLigen.length>0&&this.loadTableRows(this.selectedLigen[0].id),this.selectedDTOs=[],this.selectedVeranstaltungId=null,this.onSelect(this.veranstaltungsDataProvider.findByLigaId(this.selectedLigen[0].id)[0])},n.prototype.onSelect=function(l){document.querySelector("#Button").style.display="block",this.selectedDTOs=[],this.selectedDTOs=l,this.selectedDTOs&&this.selectedDTOs.length>0&&(this.selectedVeranstaltungId=this.selectedDTOs[0].id,this.selectedVeranstaltungName=this.selectedDTOs[0].name),this.changeVeranstaltung()},n.prototype.changeVeranstaltung=function(){this.rowsLigatabelle=[],this.tableContent=[],null!=this.selectedVeranstaltungId&&this.loadLigaTableRows()},n.prototype.loadVeranstaltungen=function(){var l=this;this.veranstaltungen=[],this.veranstaltungsDataProvider.findAll().then(function(n){document.querySelector("#Button").style.display="none",l.veranstaltungen=n.payload,l.onSelect(l.veranstaltungen),l.loadingVeranstaltungen=!1}).catch(function(n){l.veranstaltungen=n.payload})},n.prototype.loadLigen=function(){var l=this;this.ligen=[],this.ligaDataProviderService.findAll().then(function(n){document.querySelector("#Button").style.display="none",l.ligen=n.payload,l.selectedLiga=n.payload[0],l.selectedLigaId=l.selectedLiga.id,console.log(l.selectedLigaId),l.onSelectLiga(l.ligen),l.loadingVeranstaltungen=!1}).catch(function(n){l.ligen=n.payload})},n.prototype.loadLigaTableRows=function(){var l=this;this.loadingLigatabelle=!0,this.ligatabelleDataProvider.getLigatabelleVeranstaltung(this.selectedVeranstaltungId).then(function(n){return l.handleLigatabelleSuccess(n)}).catch(function(n){return l.handleLigatabelleFailure(n)})},n.prototype.handleLigatabelleFailure=function(l){this.rowsLigatabelle=[],this.loadingLigatabelle=!1},n.prototype.ligatabelleLinking=function(){this.router.navigateByUrl("/wettkaempfe/"+this.selectedVeranstaltungName)},n.prototype.handleLigatabelleSuccess=function(l){if(this.rowsLigatabelle=[],this.remainingLigatabelleRequests=l.payload.length,l.payload.length<=0)this.loadingLigatabelle=!1;else{for(var n=0,e=l.payload;n<e.length;n++){var t=e[n],i=new A.a;i.veranstaltung_id=t.veranstaltung_id,i.veranstaltung_name=t.veranstaltung_name,i.wettkampf_id=t.wettkampf_id,i.wettkampf_tag=t.wettkampf_tag,i.mannschaft_id=t.mannschaft_id,i.mannschaft_name=t.mannschaft_name,i.verein_id=t.verein_id,i.matchpunkte=t.matchpunkte,i.satzpunkte=t.satzpunkte,i.satzpkt_differenz=t.satzpkt_differenz,i.tabellenplatz=t.tabellenplatz,i.id=t.id,i.version=t.version,this.tableContent.push(i)}this.rowsLigatabelle=Object(T.i)(this.tableContent),this.loadingLigatabelle=!1}},n.prototype.loadTableRows=function(l){var n=this;this.loading=!0,this.veranstaltungsDataProvider.findByLigaId(l).then(function(l){return n.handleLoadTableRowsSuccess(l)}).catch(function(l){return n.handleLoadTableRowsFailure(l)})},n.prototype.handleLoadTableRowsFailure=function(l){this.veranstaltungenInLiga=[],this.loading=!1},n.prototype.handleLoadTableRowsSuccess=function(l){this.veranstaltungenInLiga=[],this.veranstaltungenInLiga=l.payload,this.onSelect(this.veranstaltungenInLiga),console.log(this.veranstaltungenInLiga),this.loading=!1},n}(T.d),D=e("ZYCi"),N=e("zcPl"),B=t.pb({encapsulation:0,styles:[[""]],data:{}});function M(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,38,"bla-common-dialog",[],null,null,null,u.b,u.a)),t.qb(1,114688,null,0,o.a,[],{config:[0,"config"]},null),(l()(),t.rb(2,0,null,0,36,"div",[["class","layout-elements"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,35,"bla-row-layout",[],null,null,null,s.b,s.a)),t.qb(4,114688,null,0,r.a,[],null,null),(l()(),t.rb(5,0,null,0,13,"div",[["class","flexChild"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,2,"a",[["class","blackLink"]],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""])),t.Db(131072,c.j,[c.k,t.h]),(l()(),t.rb(10,0,null,null,4,"table",[["class","table table-hover table-sm table-responsive-sm thead-light table-striped"],["id","example"],["style","width:80%"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,3,"bla-quicksearch-list",[["selectionListHeight","15em"],["style","width: 60%; flex-grow: 0;"]],null,[[null,"onSelect"]],function(l,n,e){var t=!0;return"onSelect"===n&&(t=!1!==l.component.onSelectLiga(e)&&t),t},d.b,d.a)),t.Gb(131584,null,c.j,c.j,[c.k,t.h]),t.qb(13,638976,null,0,b.a,[c.j],{loading:[0,"loading"],multipleSelections:[1,"multipleSelections"],placeholderTranslationKey:[2,"placeholderTranslationKey"],selectionListHeight:[3,"selectionListHeight"],items:[4,"items"],optionFieldSelector:[5,"optionFieldSelector"],selectedItemIds:[6,"selectedItemIds"]},{onSelect:"onSelect"}),t.Cb(14,1),(l()(),t.rb(15,0,null,null,3,"table",[["style","width: 10%; margin-bottom: 3%;"]],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,2,"bla-selectionlist",[["selectionListHeight","3em"],["style","width: 10%; flex-grow: 0; height: 20px"]],null,[[null,"onSelect"]],function(l,n,e){var t=!0;return"onSelect"===n&&(t=!1!==l.component.onSelect(e)&&t),t},g.b,g.a)),t.qb(17,638976,null,0,h.a,[],{items:[0,"items"],optionFieldSelector:[1,"optionFieldSelector"],selectedItemIds:[2,"selectedItemIds"]},{onSelect:"onSelect"}),t.Cb(18,1),(l()(),t.rb(19,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),t.rb(20,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),t.rb(21,0,null,null,2,"a",[["class","blackLink"]],null,null,null,null,null)),(l()(),t.Jb(22,null,["",""])),t.Db(131072,c.j,[c.k,t.h]),(l()(),t.rb(24,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(25,0,null,null,4,"h5",[],null,null,null,null,null)),(l()(),t.rb(26,0,null,null,3,"bla-data-table",[],null,[[null,"onRowEntry"]],function(l,n,e){var t=!0;return"onRowEntry"===n&&(t=!1!==l.component.ligatabelleLinking()&&t),t},p.b,p.a)),t.Gb(512,null,f.a,f.a,[]),t.Gb(131584,null,c.j,c.j,[c.k,t.h]),t.qb(29,638976,null,0,m.a,[f.a,c.j,L.a],{loading:[0,"loading"],config:[1,"config"],rows:[2,"rows"]},{onRowEntry:"onRowEntry"}),(l()(),t.rb(30,0,null,0,4,"div",[["id","Button"]],null,null,null,null,null)),(l()(),t.rb(31,0,null,null,3,"bla-button",[],null,[[null,"onClick"]],function(l,n,e){var t=!0;return"onClick"===n&&(t=!1!==l.component.ligatabelleLinking()&&t),t},v.b,v.a)),t.qb(32,114688,null,0,E.a,[],{id:[0,"id"]},{onClick:"onClick"}),(l()(),t.Jb(33,0,[" "," "," "])),t.Db(131072,c.j,[c.k,t.h]),(l()(),t.rb(35,0,null,0,3,"div",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),t.rb(36,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),t.Jb(37,null,[" "," "])),t.Db(131072,c.j,[c.k,t.h])],function(l,n){var e=n.component;l(n,1,0,e.config),l(n,4,0);var t=e.loadingVeranstaltungen,i=!e.multipleSelections,a=e.PLACEHOLDER_VAR,u=e.ligen,o=l(n,14,0,e.selectedLigaId);l(n,13,0,t,i,a,"15em",u,"name",o);var s=e.veranstaltungenInLiga,r=l(n,18,0,e.selectedVeranstaltungId);l(n,17,0,s,"sportjahr",r),l(n,29,0,e.loadingLigatabelle,e.config_table,e.rowsLigatabelle),l(n,32,0,"regionSaveButton")},function(l,n){var e=n.component;l(n,8,0,t.Kb(n,8,0,t.Bb(n,9).transform("WETTKAEMPFE.TITEL.VERANSTALTUNG"))),l(n,22,0,t.Kb(n,22,0,t.Bb(n,23).transform("WETTKAEMPFE.LIGATABELLE.TITEL"))),l(n,33,0,t.Kb(n,33,0,t.Bb(n,34).transform("WETTKAEMPFE.LIGATABELLE.LINKDESCRIPTION")),e.selectedVeranstaltungName),l(n,37,0,t.Kb(n,37,0,t.Bb(n,38).transform("MANAGEMENT.REGION_DETAIL.FORM.REGION_TYP.ERROR")))})}function K(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"bla-wettkaempfe",[],null,null,null,M,B)),t.qb(1,114688,null,0,F,[D.l,D.a,N.a,w.a,z.a,C.a,P.a],null,null)],function(l,n){l(n,1,0)},null)}var R=t.nb("bla-wettkaempfe",F,K,{id:"id",visible:"visible",loading:"loading",disabled:"disabled"},{},[]),O=e("Ip0R"),_=e("gIcY"),j=e("t/Na"),q=e("22Ks"),V=e("th7h"),G=function(){function l(l){this.currentUserService=l}return l.prototype.canActivate=function(){return this.currentUserService.hasAnyPermisson([V.b.CAN_READ_DEFAULT])},l}(),x=e("Hf/j"),H=e("FpXt");e.d(n,"LigatabelleModuleNgFactory",function(){return W});var W=t.ob(i,[],function(l){return t.yb([t.zb(512,t.j,t.db,[[8,[a.a,R]],[3,t.j],t.z]),t.zb(4608,O.n,O.m,[t.v,[2,O.z]]),t.zb(4608,_.z,_.z,[]),t.zb(4608,_.e,_.e,[]),t.zb(4608,j.i,j.o,[O.c,t.D,j.m]),t.zb(4608,j.p,j.p,[j.i,j.n]),t.zb(5120,j.a,function(l){return[l]},[j.p]),t.zb(4608,j.l,j.l,[]),t.zb(6144,j.j,null,[j.l]),t.zb(4608,j.h,j.h,[j.j]),t.zb(6144,j.b,null,[j.h]),t.zb(4608,j.f,j.k,[j.b,t.r]),t.zb(4608,j.c,j.c,[j.f]),t.zb(5120,q.b,q.f,[]),t.zb(5120,q.a,q.e,[]),t.zb(4608,c.g,c.f,[]),t.zb(4608,c.c,c.e,[]),t.zb(4608,c.i,c.d,[]),t.zb(4608,c.b,c.a,[]),t.zb(4608,c.k,c.k,[c.l,c.g,c.c,c.i,c.b,c.m,c.n]),t.zb(4608,G,G,[L.a]),t.zb(1073742336,O.b,O.b,[]),t.zb(1073742336,D.o,D.o,[[2,D.u],[2,D.l]]),t.zb(1073742336,_.w,_.w,[]),t.zb(1073742336,_.f,_.f,[]),t.zb(1073742336,_.r,_.r,[]),t.zb(1073742336,j.e,j.e,[]),t.zb(1073742336,j.d,j.d,[]),t.zb(1073742336,c.h,c.h,[]),t.zb(1073742336,x.f,x.f,[]),t.zb(1073742336,q.c,q.c,[]),t.zb(1073742336,H.a,H.a,[]),t.zb(1073742336,i,i,[]),t.zb(256,j.m,"XSRF-TOKEN",[]),t.zb(256,j.n,"X-XSRF-TOKEN",[]),t.zb(256,c.n,void 0,[]),t.zb(256,c.m,void 0,[]),t.zb(1024,D.j,function(){return[[{path:"",component:F,canActivate:[G],pathMatch:"full"},{path:"/:id",component:F,canActivate:[G],pathMatch:"full"}]]},[])])})},s5Z2:function(l,n,e){"use strict";var t=e("CcnG"),i=e("fNgX"),a=e("Hf/j"),u=e("ZYjt"),o=e("eQGX"),s=e("yljE");e("A7o+"),e("zLSN"),e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c});var r=t.pb({encapsulation:0,styles:[[".quicksearch-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.quicksearch-list-select[_ngcontent-%COMP%]{height:10em}.input-group-append[_ngcontent-%COMP%]{flex-grow:unset;height:calc(2.25rem + 2px)}"]],data:{}});function c(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,8,"div",[["class","quicksearch-list"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,5,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,0,"input",[["class","form-control quicksearch-list-search"],["type","text"]],[[8,"disabled",0],[8,"id",0],[8,"name",0],[8,"placeholder",0]],[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==l.component.onSearch(e.target.value)&&t),t},null,null)),(l()(),t.rb(3,0,null,null,3,"div",[["class","input-group-append"],["style",""]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,2,"span",[["class","input-group-text"],["id","basic-addon2"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,i.b,i.a)),t.qb(6,573440,null,0,a.a,[u.b,a.b],{iconProp:[0,"iconProp"]},null),(l()(),t.rb(7,0,null,null,1,"bla-selectionlist",[["class","quicksearch-list-select"]],[[4,"height",null]],[[null,"onSelect"]],function(l,n,e){var t=!0;return"onSelect"===n&&(t=!1!==l.component.onItemSelect(e)&&t),t},o.b,o.a)),t.qb(8,638976,null,0,s.a,[],{id:[0,"id"],disabled:[1,"disabled"],loading:[2,"loading"],multipleSelections:[3,"multipleSelections"],items:[4,"items"],optionFieldSelector:[5,"optionFieldSelector"],selectedItemIds:[6,"selectedItemIds"]},{onSelect:"onSelect"})],function(l,n){var e=n.component;l(n,6,0,e.findIcon),l(n,8,0,"selectionList"+e.id,e.isDisabled(),e.loading,e.multipleSelections,e.getFilteredItems(),e.optionFieldSelector,e.getSelectedItemIds())},function(l,n){var e=n.component;l(n,2,0,e.isDisabled(),e.id,e.id,e.getPlacholder()),l(n,5,0,t.Bb(n,6).renderedIconHTML),l(n,7,0,e.selectionListHeight)})}}}]);