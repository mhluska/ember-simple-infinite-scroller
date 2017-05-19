"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,l,n,a){Object.defineProperty(e,"__esModule",{value:!0}),t.default.MODEL_FACTORY_INJECTIONS=!0;var o=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:l.default,customEvents:{touchstart:null,touchmove:null,touchend:null,touchcancel:null}});(0,n.default)(o,a.default.modulePrefix),e.default=o}),define("dummy/components/infinite-scroller",["exports","ember-simple-infinite-scroller/components/infinite-scroller"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember-controller"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({loadDelay:0})}),define("dummy/controllers/array",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Controller}),define("dummy/controllers/example-1",["exports","ember-controller","dummy/mixins/things"],function(e,t,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend(l.default)}),define("dummy/controllers/example-2",["exports","ember-controller","dummy/mixins/things"],function(e,t,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend(l.default)}),define("dummy/controllers/example-3",["exports","ember-controller","dummy/mixins/things"],function(e,t,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend(l.default)}),define("dummy/controllers/object",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Controller}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/mixins/things",["exports","ember-metal/mixin","ember-runloop","rsvp","ember-controller/inject","dummy/utils/generate-things"],function(e,t,l,n,a,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.create({appController:(0,a.default)("application"),init:function(){this._super.apply(this,arguments),this.set("page",1),this.set("perPage",20),this.set("things",this._generateThings())},_generateThings:function(){var e=this.getWithDefault("things.length",1),t=this.get("page")*this.get("perPage");return(0,o.default)(e,t)},actions:{loadMore:function(){var e=this;return new n.default.Promise(function(t){(0,l.later)(function(){e.incrementProperty("page"),e.get("things").pushObjects(e._generateThings()),t()},e.get("appController.loadDelay"))})}}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,l){Object.defineProperty(e,"__esModule",{value:!0});var n=t.default.Router.extend({location:l.default.locationType,rootURL:l.default.rootURL});n.map(function(){this.route("example-1"),this.route("example-2"),this.route("example-3")}),e.default=n}),define("dummy/routes/application",["exports","ember-route"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/routes/example-1",["exports","ember-route"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/routes/example-2",["exports","ember-route"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/routes/example-3",["exports","ember-route"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/services/-infinite-scroller",["exports","ember-simple-infinite-scroller/services/-infinite-scroller"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"j2xkge0N",block:'{"statements":[[6,["link-to"],["example-1"],null,{"statements":[[0,"Example 1"]],"locals":[]},null],[0," |\\n"],[6,["link-to"],["example-2"],null,{"statements":[[0,"Example 2"]],"locals":[]},null],[0," |\\n"],[6,["link-to"],["example-3"],null,{"statements":[[0,"Example 3"]],"locals":[]},null],[0,"\\n\\n"],[11,"p",[]],[13],[0,"\\n  Load delay:"],[11,"br",[]],[13],[14],[0,"\\n  "],[11,"input",[]],[16,"oninput",[33,["action"],[[28,[null]],[33,["mut"],[[28,["loadDelay"]]],null]],[["value"],["target.value"]]],null],[16,"value",[26,["loadDelay"]],null],[15,"type","number"],[13],[14],[0,"\\n"],[14],[0,"\\n\\n"],[1,[26,["outlet"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/example-1",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"iV5hwdkY",block:'{"statements":[[11,"p",[]],[13],[0,"Action is fired when the bottom of the div is scrolled to"],[14],[0,"\\n\\n"],[6,["infinite-scroller"],null,[["class","on-load-more"],["example-1",[33,["action"],[[28,[null]],"loadMore"],null]]],{"statements":[[6,["each"],[[28,["things"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","thing"],[13],[1,[28,["thing","name"]],false],[14],[0,"\\n"]],"locals":["thing"]},null],[6,["if"],[[28,["scroller","isLoading"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","status"],[13],[0,"Loading..."],[14],[0,"\\n"]],"locals":[]},null]],"locals":["scroller"]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/example-1.hbs"}})}),define("dummy/templates/example-2",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"OJNpMWt+",block:'{"statements":[[11,"p",[]],[13],[0,"Action is fired when the bottom of the document is scrolled to"],[14],[0,"\\n\\n"],[6,["infinite-scroller"],null,[["class","on-load-more","use-document"],["example-2",[33,["action"],[[28,[null]],"loadMore"],null],true]],{"statements":[[6,["each"],[[28,["things"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","thing"],[13],[1,[28,["thing","name"]],false],[14],[0,"\\n"]],"locals":["thing"]},null],[6,["if"],[[28,["scroller","isLoading"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","status"],[13],[0,"Loading..."],[14],[0,"\\n"]],"locals":[]},null]],"locals":["scroller"]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/example-2.hbs"}})}),define("dummy/templates/example-3",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"dFk09NjW",block:'{"statements":[[11,"p",[]],[13],[0,"Action is fired when the div is scrolled to 50%"],[14],[0,"\\n\\n"],[6,["infinite-scroller"],null,[["class","on-load-more","trigger-at","scroll-debounce"],["example-3",[33,["action"],[[28,[null]],"loadMore"],null],"50%",15]],{"statements":[[6,["each"],[[28,["things"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","thing"],[13],[1,[28,["thing","name"]],false],[14],[0,"\\n"]],"locals":["thing"]},null],[6,["if"],[[28,["scroller","isLoading"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","status"],[13],[0,"Loading..."],[14],[0,"\\n"]],"locals":[]},null]],"locals":["scroller"]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/example-3.hbs"}})}),define("dummy/utils/generate-things",["exports","ember-array/utils"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,l){for(var n=(0,t.A)(),a=e;a<=l;a+=1)n.push({id:a,name:"Thing "+a});return n}}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),l=JSON.parse(unescape(t)),n={default:l};return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({});