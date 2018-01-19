"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:t.default,customEvents:{touchstart:null,touchmove:null,touchend:null,touchcancel:null}});(0,n.default)(a,l.default.modulePrefix),e.default=a}),define("dummy/components/infinite-scroller",["exports","@zestia/ember-simple-infinite-scroller/components/infinite-scroller"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({loadDelay:0})}),define("dummy/controllers/array",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("dummy/controllers/example-1",["exports","dummy/mixins/things"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend(t.default)}),define("dummy/controllers/example-2",["exports","dummy/mixins/things"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend(t.default)}),define("dummy/controllers/example-3",["exports","dummy/mixins/things"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend(t.default)}),define("dummy/controllers/object",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/mixins/things",["exports","dummy/utils/generate-things"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Mixin.create({appController:Ember.inject.controller("application"),init:function(){this._super.apply(this,arguments),this.set("page",1),this.set("perPage",20),this.set("things",this._generateThings())},_generateThings:function(){var e=this.getWithDefault("things.length",0)+1,n=this.get("page")*this.get("perPage")
return(0,t.default)(e,n)},actions:{loadMore:function(){var e=this
return new Ember.RSVP.Promise(function(t){Ember.run.later(function(){e.incrementProperty("page"),e.get("things").pushObjects(e._generateThings()),t()},e.get("appController.loadDelay"))})}}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("example-1"),this.route("example-2"),this.route("example-3")}),e.default=n}),define("dummy/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/routes/example-1",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/routes/example-2",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/routes/example-3",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/services/-infinite-scroller",["exports","@zestia/ember-simple-infinite-scroller/services/-infinite-scroller"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"yW/5t6ne",block:'{"symbols":[],"statements":[[6,"h1"],[7],[0,"@zestia/ember-simple-infinite-scroller"],[8],[0,"\\n\\n"],[6,"a"],[9,"href","https://github.com/zestia/ember-simple-infinite-scroller"],[7],[6,"img"],[9,"style","position: absolute; top: 0; right: 0; border: 0;"],[9,"src","https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"],[9,"alt","Fork me on GitHub"],[9,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"],[7],[8],[8],[0,"\\n\\n"],[4,"link-to",["example-1"],null,{"statements":[[0,"Example 1"]],"parameters":[]},null],[0," |\\n"],[4,"link-to",["example-2"],null,{"statements":[[0,"Example 2"]],"parameters":[]},null],[0," |\\n"],[4,"link-to",["example-3"],null,{"statements":[[0,"Example 3"]],"parameters":[]},null],[0,"\\n\\n"],[6,"p"],[7],[0,"\\n  Load delay:"],[6,"br"],[7],[8],[0,"\\n  "],[6,"input"],[10,"oninput",[25,"action",[[19,0,[]],[25,"mut",[[20,["loadDelay"]]],null]],[["value"],["target.value"]]],null],[10,"value",[18,"loadDelay"],null],[9,"type","number"],[7],[8],[0,"\\n"],[8],[0,"\\n\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/example-1",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PITxkiGQ",block:'{"symbols":["scroller","thing"],"statements":[[6,"p"],[7],[0,"Action is fired when the bottom of the div is scrolled to"],[8],[0,"\\n\\n"],[4,"infinite-scroller",null,[["class","on-load-more"],["example-1",[25,"action",[[19,0,[]],"loadMore"],null]]],{"statements":[[4,"each",[[20,["things"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","thing"],[7],[1,[19,2,["name"]],false],[8],[0,"\\n"]],"parameters":[2]},null],[4,"if",[[19,1,["isLoading"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","status"],[7],[0,"Loading..."],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/example-1.hbs"}})}),define("dummy/templates/example-2",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"oowzcr8/",block:'{"symbols":["scroller","thing"],"statements":[[6,"p"],[7],[0,"Action is fired when the bottom of the document is scrolled to"],[8],[0,"\\n\\n"],[4,"infinite-scroller",null,[["class","on-load-more","use-document"],["example-2",[25,"action",[[19,0,[]],"loadMore"],null],true]],{"statements":[[4,"each",[[20,["things"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","thing"],[7],[1,[19,2,["name"]],false],[8],[0,"\\n"]],"parameters":[2]},null],[4,"if",[[19,1,["isLoading"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","status"],[7],[0,"Loading..."],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/example-2.hbs"}})}),define("dummy/templates/example-3",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"9gkAnWV4",block:'{"symbols":["scroller","thing"],"statements":[[6,"p"],[7],[0,"Action is fired when the div is scrolled to 50%"],[8],[0,"\\n\\n"],[4,"infinite-scroller",null,[["class","on-load-more","trigger-at","scroll-debounce"],["example-3",[25,"action",[[19,0,[]],"loadMore"],null],"50%",15]],{"statements":[[4,"each",[[20,["things"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","thing"],[7],[1,[19,2,["name"]],false],[8],[0,"\\n"]],"parameters":[2]},null],[4,"if",[[19,1,["isLoading"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","status"],[7],[0,"Loading..."],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/example-3.hbs"}})}),define("dummy/utils/generate-things",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){for(var n=Ember.A(),l=e;l<=t;l+=1)n.push({id:l,name:"Thing "+l})
return n}}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})