// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('fsm_maker.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('fsm_maker.dev');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__60789__delegate = function (x){
if(cljs.core.truth_(fsm_maker.core.mount_root)){
return cljs.core.apply.call(null,fsm_maker.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'fsm-maker.core/mount-root' is missing");
}
};
var G__60789 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__60790__i = 0, G__60790__a = new Array(arguments.length -  0);
while (G__60790__i < G__60790__a.length) {G__60790__a[G__60790__i] = arguments[G__60790__i + 0]; ++G__60790__i;}
  x = new cljs.core.IndexedSeq(G__60790__a,0,null);
} 
return G__60789__delegate.call(this,x);};
G__60789.cljs$lang$maxFixedArity = 0;
G__60789.cljs$lang$applyTo = (function (arglist__60791){
var x = cljs.core.seq(arglist__60791);
return G__60789__delegate(x);
});
G__60789.cljs$core$IFn$_invoke$arity$variadic = G__60789__delegate;
return G__60789;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1507178426790
