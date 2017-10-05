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
var G__55553__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55554__i = 0, G__55554__a = new Array(arguments.length -  0);
while (G__55554__i < G__55554__a.length) {G__55554__a[G__55554__i] = arguments[G__55554__i + 0]; ++G__55554__i;}
  args = new cljs.core.IndexedSeq(G__55554__a,0,null);
} 
return G__55553__delegate.call(this,args);};
G__55553.cljs$lang$maxFixedArity = 0;
G__55553.cljs$lang$applyTo = (function (arglist__55555){
var args = cljs.core.seq(arglist__55555);
return G__55553__delegate(args);
});
G__55553.cljs$core$IFn$_invoke$arity$variadic = G__55553__delegate;
return G__55553;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__55556__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55557__i = 0, G__55557__a = new Array(arguments.length -  0);
while (G__55557__i < G__55557__a.length) {G__55557__a[G__55557__i] = arguments[G__55557__i + 0]; ++G__55557__i;}
  args = new cljs.core.IndexedSeq(G__55557__a,0,null);
} 
return G__55556__delegate.call(this,args);};
G__55556.cljs$lang$maxFixedArity = 0;
G__55556.cljs$lang$applyTo = (function (arglist__55558){
var args = cljs.core.seq(arglist__55558);
return G__55556__delegate(args);
});
G__55556.cljs$core$IFn$_invoke$arity$variadic = G__55556__delegate;
return G__55556;
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

//# sourceMappingURL=debug.js.map?rel=1507178391804
