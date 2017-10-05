// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13202__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13203__i = 0, G__13203__a = new Array(arguments.length -  0);
while (G__13203__i < G__13203__a.length) {G__13203__a[G__13203__i] = arguments[G__13203__i + 0]; ++G__13203__i;}
  args = new cljs.core.IndexedSeq(G__13203__a,0,null);
} 
return G__13202__delegate.call(this,args);};
G__13202.cljs$lang$maxFixedArity = 0;
G__13202.cljs$lang$applyTo = (function (arglist__13204){
var args = cljs.core.seq(arglist__13204);
return G__13202__delegate(args);
});
G__13202.cljs$core$IFn$_invoke$arity$variadic = G__13202__delegate;
return G__13202;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13205__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13206__i = 0, G__13206__a = new Array(arguments.length -  0);
while (G__13206__i < G__13206__a.length) {G__13206__a[G__13206__i] = arguments[G__13206__i + 0]; ++G__13206__i;}
  args = new cljs.core.IndexedSeq(G__13206__a,0,null);
} 
return G__13205__delegate.call(this,args);};
G__13205.cljs$lang$maxFixedArity = 0;
G__13205.cljs$lang$applyTo = (function (arglist__13207){
var args = cljs.core.seq(arglist__13207);
return G__13205__delegate(args);
});
G__13205.cljs$core$IFn$_invoke$arity$variadic = G__13205__delegate;
return G__13205;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
