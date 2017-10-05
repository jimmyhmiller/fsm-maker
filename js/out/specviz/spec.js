// Compiled by ClojureScript 1.9.908 {}
goog.provide('specviz.spec');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
/**
 * Returns true if `x` is the keyword of a registered spec?
 */
specviz.spec.registered_QMARK_ = (function specviz$spec$registered_QMARK_(x){
return !((cljs.spec.alpha.get_spec.call(null,x) == null));
});
specviz.spec.depends_on_STAR_ = (function specviz$spec$depends_on_STAR_(names,spec_form){
if(cljs.core.coll_QMARK_.call(null,spec_form)){
var seq__55469 = cljs.core.seq.call(null,spec_form);
var chunk__55470 = null;
var count__55471 = (0);
var i__55472 = (0);
while(true){
if((i__55472 < count__55471)){
var s = cljs.core._nth.call(null,chunk__55470,i__55472);
specviz.spec.depends_on_STAR_.call(null,names,s);

var G__55473 = seq__55469;
var G__55474 = chunk__55470;
var G__55475 = count__55471;
var G__55476 = (i__55472 + (1));
seq__55469 = G__55473;
chunk__55470 = G__55474;
count__55471 = G__55475;
i__55472 = G__55476;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55469);
if(temp__4657__auto__){
var seq__55469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55469__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__55469__$1);
var G__55477 = cljs.core.chunk_rest.call(null,seq__55469__$1);
var G__55478 = c__38588__auto__;
var G__55479 = cljs.core.count.call(null,c__38588__auto__);
var G__55480 = (0);
seq__55469 = G__55477;
chunk__55470 = G__55478;
count__55471 = G__55479;
i__55472 = G__55480;
continue;
} else {
var s = cljs.core.first.call(null,seq__55469__$1);
specviz.spec.depends_on_STAR_.call(null,names,s);

var G__55481 = cljs.core.next.call(null,seq__55469__$1);
var G__55482 = null;
var G__55483 = (0);
var G__55484 = (0);
seq__55469 = G__55481;
chunk__55470 = G__55482;
count__55471 = G__55483;
i__55472 = G__55484;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__37737__auto__ = specviz.spec.registered_QMARK_.call(null,spec_form);
if(cljs.core.truth_(and__37737__auto__)){
return !(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,names),spec_form));
} else {
return and__37737__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,names,cljs.core.conj,spec_form);

return specviz.spec.depends_on_STAR_.call(null,names,cljs.spec.alpha.form.call(null,cljs.spec.alpha.get_spec.call(null,spec_form)));
} else {
return null;
}
}
});
/**
 * Returns a collection of the qualified-keywords of all specs referenced
 *   by the spec-form, transatively.
 */
specviz.spec.depends_on = (function specviz$spec$depends_on(spec_name){
var names = cljs.core.atom.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([spec_name]));
specviz.spec.depends_on_STAR_.call(null,names,cljs.spec.alpha.form.call(null,cljs.spec.alpha.get_spec.call(null,spec_name)));

return cljs.core.deref.call(null,names);
});
specviz.spec.conform_or_throw = (function specviz$spec$conform_or_throw(spec,x){

var temp__4657__auto___55485 = cljs.spec.alpha.explain_data.call(null,spec,x);
if(cljs.core.truth_(temp__4657__auto___55485)){
var reason_55486 = temp__4657__auto___55485;
throw cljs.core.ex_info.call(null,"invalid spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_55486], null));
} else {
}

return cljs.spec.alpha.conform.call(null,spec,x);
});
/**
 * Returns true if `x` is a spec literal, ex: `(clojure.spec/coll-of int?)`.
 */
specviz.spec.literal_QMARK_ = (function specviz$spec$literal_QMARK_(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,cljs.core.namespace.call(null,cljs.core.first.call(null,x)),"clojure.spec");
} else {
return null;
}
});

//# sourceMappingURL=spec.js.map?rel=1507178391624
