!function(){function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var u=0,o=function(){};return{s:o,n:function(){return u>=t.length?{done:!0}:{done:!1,value:t[u++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,s=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw s}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{VXT6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(e,n,r,u,o,s,i){l(this,t),this.scheibenNr=e||null,this.wettkampfID=n||null,this.isActive=!!r,this.satzNr=u||null,this.matchID=o||null,this.otherMatchId=s||null,this.accessToken=i||null}},yVnM:function(e,u,o){"use strict";o.d(u,"a",(function(){return R}));var s,a=o("YfBl"),c=function t(e,n,r,u,o,s,i){l(this,t),this.scheibennummer=e||null,this.wettkampfId=n||null,this.active=!!r,this.satznummer=u||null,this.matchId=o||null,this.otherMatchId=s||null,this.accessToken=i||null},f=o("VXT6"),h=function(){function t(){l(this,t)}return i(t,null,[{key:"tabletSessionToDO",value:function(t){return new f.a(t.scheibennummer,t.wettkampfId,t.active,t.satznummer,t.matchId,t.otherMatchId,t.accessToken)}},{key:"tabletSessionToDTO",value:function(t){return new c(t.scheibenNr,t.wettkampfID,t.isActive,t.satzNr,t.matchID,t.otherMatchId,t.accessToken)}}]),t}(),p=o("fXoL"),R=((s=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(o,e);var u=r(o);function o(t){var e;return l(this,o),(e=u.call(this)).restClient=t,e.serviceSubUrl="v1/tabletsessions",e}return i(o,[{key:"findAllTabletSessions",value:function(e){var n=this;return new Promise((function(r,u){n.restClient.GET((new a.UriBuilder).fromPath(n.getUrl()).path(e).build()).then((function(e){var n,u=[],o=t(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;u.push(h.tabletSessionToDO(s))}}catch(i){o.e(i)}finally{o.f()}r({result:a.RequestResult.SUCCESS,payload:u})}),(function(t){u(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"findAllTabletSessionswithoutArgument",value:function(){var e=this;return new Promise((function(n,r){e.restClient.GET((new a.UriBuilder).fromPath(e.getUrl()).build()).then((function(e){var r,u=[],o=t(e);try{for(o.s();!(r=o.n()).done;){var s=r.value;u.push(h.tabletSessionToDO(s))}}catch(i){o.e(i)}finally{o.f()}n({result:a.RequestResult.SUCCESS,payload:u})}),(function(t){r(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"findTabletSession",value:function(t,e){var n=this,r=(new a.UriBuilder).fromPath(this.getUrl()).path(t).path(e).build();return new Promise((function(t,e){n.restClient.GET(r).then((function(e){t({result:a.RequestResult.SUCCESS,payload:h.tabletSessionToDO(e)})}),(function(t){e(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"create",value:function(t,e,n){var r=this,u=(new a.UriBuilder).fromPath(this.getUrl()).path(e).path(n).build();return new Promise((function(e,n){r.restClient.POST(u,h.tabletSessionToDTO(t)).then((function(t){e({result:a.RequestResult.SUCCESS,payload:h.tabletSessionToDO(t)})}),(function(t){n(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"update",value:function(t){var e=this;return t.accessToken=this.createAccessToken().toString(),new Promise((function(n,r){e.restClient.PUT(e.getUrl(),h.tabletSessionToDTO(t)).then((function(t){n({result:a.RequestResult.SUCCESS,payload:h.tabletSessionToDO(t)})}),(function(t){r(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"updateWithoutTokenCreation",value:function(t){var e=this;return new Promise((function(n,r){e.restClient.PUT(e.getUrl(),h.tabletSessionToDTO(t)).then((function(t){n({result:a.RequestResult.SUCCESS,payload:h.tabletSessionToDO(t)})}),(function(t){r(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"delete",value:function(t,e){var n=this,r=(new a.UriBuilder).fromPath(this.getUrl()).path(t).path(e).build();return new Promise((function(t,e){n.restClient.DELETE(r).then((function(e){t({result:a.RequestResult.SUCCESS,payload:e})}),(function(t){e(0===t.status?{result:a.RequestResult.CONNECTION_PROBLEM}:{result:a.RequestResult.FAILURE})}))}))}},{key:"createAccessToken",value:function(){return Math.floor(1e5+9e5*Math.random())}}]),o}(a.DataProviderService)).\u0275fac=function(t){return new(t||s)(p.Sb(a.RestClient))},s.\u0275prov=p.Fb({token:s,factory:s.\u0275fac,providedIn:"root"}),s)}}])}();