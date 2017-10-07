// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__45556__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45557__i = 0, G__45557__a = new Array(arguments.length -  0);
while (G__45557__i < G__45557__a.length) {G__45557__a[G__45557__i] = arguments[G__45557__i + 0]; ++G__45557__i;}
  args = new cljs.core.IndexedSeq(G__45557__a,0,null);
} 
return G__45556__delegate.call(this,args);};
G__45556.cljs$lang$maxFixedArity = 0;
G__45556.cljs$lang$applyTo = (function (arglist__45558){
var args = cljs.core.seq(arglist__45558);
return G__45556__delegate(args);
});
G__45556.cljs$core$IFn$_invoke$arity$variadic = G__45556__delegate;
return G__45556;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45559__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45560__i = 0, G__45560__a = new Array(arguments.length -  0);
while (G__45560__i < G__45560__a.length) {G__45560__a[G__45560__i] = arguments[G__45560__i + 0]; ++G__45560__i;}
  args = new cljs.core.IndexedSeq(G__45560__a,0,null);
} 
return G__45559__delegate.call(this,args);};
G__45559.cljs$lang$maxFixedArity = 0;
G__45559.cljs$lang$applyTo = (function (arglist__45561){
var args = cljs.core.seq(arglist__45561);
return G__45559__delegate(args);
});
G__45559.cljs$core$IFn$_invoke$arity$variadic = G__45559__delegate;
return G__45559;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1507334718436
