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
var seq__45472 = cljs.core.seq.call(null,spec_form);
var chunk__45473 = null;
var count__45474 = (0);
var i__45475 = (0);
while(true){
if((i__45475 < count__45474)){
var s = cljs.core._nth.call(null,chunk__45473,i__45475);
specviz.spec.depends_on_STAR_.call(null,names,s);

var G__45476 = seq__45472;
var G__45477 = chunk__45473;
var G__45478 = count__45474;
var G__45479 = (i__45475 + (1));
seq__45472 = G__45476;
chunk__45473 = G__45477;
count__45474 = G__45478;
i__45475 = G__45479;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45472);
if(temp__4657__auto__){
var seq__45472__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45472__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__45472__$1);
var G__45480 = cljs.core.chunk_rest.call(null,seq__45472__$1);
var G__45481 = c__38588__auto__;
var G__45482 = cljs.core.count.call(null,c__38588__auto__);
var G__45483 = (0);
seq__45472 = G__45480;
chunk__45473 = G__45481;
count__45474 = G__45482;
i__45475 = G__45483;
continue;
} else {
var s = cljs.core.first.call(null,seq__45472__$1);
specviz.spec.depends_on_STAR_.call(null,names,s);

var G__45484 = cljs.core.next.call(null,seq__45472__$1);
var G__45485 = null;
var G__45486 = (0);
var G__45487 = (0);
seq__45472 = G__45484;
chunk__45473 = G__45485;
count__45474 = G__45486;
i__45475 = G__45487;
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

var temp__4657__auto___45488 = cljs.spec.alpha.explain_data.call(null,spec,x);
if(cljs.core.truth_(temp__4657__auto___45488)){
var reason_45489 = temp__4657__auto___45488;
throw cljs.core.ex_info.call(null,"invalid spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_45489], null));
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

//# sourceMappingURL=spec.js.map?rel=1507334718244
