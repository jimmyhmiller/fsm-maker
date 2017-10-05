// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('specviz.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
/**
 * Returns true if `x` is the keyword of a registered spec?
 */
specviz.spec.registered_QMARK_ = (function specviz$spec$registered_QMARK_(x){
return !((cljs.spec.alpha.get_spec(x) == null));
});
specviz.spec.depends_on_STAR_ = (function specviz$spec$depends_on_STAR_(names,spec_form){
if(cljs.core.coll_QMARK_(spec_form)){
var seq__14840 = cljs.core.seq(spec_form);
var chunk__14841 = null;
var count__14842 = (0);
var i__14843 = (0);
while(true){
if((i__14843 < count__14842)){
var s = chunk__14841.cljs$core$IIndexed$_nth$arity$2(null,i__14843);
(specviz.spec.depends_on_STAR_.cljs$core$IFn$_invoke$arity$2 ? specviz.spec.depends_on_STAR_.cljs$core$IFn$_invoke$arity$2(names,s) : specviz.spec.depends_on_STAR_.call(null,names,s));

var G__14846 = seq__14840;
var G__14847 = chunk__14841;
var G__14848 = count__14842;
var G__14849 = (i__14843 + (1));
seq__14840 = G__14846;
chunk__14841 = G__14847;
count__14842 = G__14848;
i__14843 = G__14849;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14840);
if(temp__4657__auto__){
var seq__14840__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14840__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__14840__$1);
var G__14850 = cljs.core.chunk_rest(seq__14840__$1);
var G__14851 = c__8484__auto__;
var G__14852 = cljs.core.count(c__8484__auto__);
var G__14853 = (0);
seq__14840 = G__14850;
chunk__14841 = G__14851;
count__14842 = G__14852;
i__14843 = G__14853;
continue;
} else {
var s = cljs.core.first(seq__14840__$1);
(specviz.spec.depends_on_STAR_.cljs$core$IFn$_invoke$arity$2 ? specviz.spec.depends_on_STAR_.cljs$core$IFn$_invoke$arity$2(names,s) : specviz.spec.depends_on_STAR_.call(null,names,s));

var G__14854 = cljs.core.next(seq__14840__$1);
var G__14855 = null;
var G__14856 = (0);
var G__14857 = (0);
seq__14840 = G__14854;
chunk__14841 = G__14855;
count__14842 = G__14856;
i__14843 = G__14857;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__7633__auto__ = specviz.spec.registered_QMARK_(spec_form);
if(cljs.core.truth_(and__7633__auto__)){
return !(cljs.core.contains_QMARK_(cljs.core.deref(names),spec_form));
} else {
return and__7633__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(names,cljs.core.conj,spec_form);

var G__14844 = names;
var G__14845 = cljs.spec.alpha.form(cljs.spec.alpha.get_spec(spec_form));
return (specviz.spec.depends_on_STAR_.cljs$core$IFn$_invoke$arity$2 ? specviz.spec.depends_on_STAR_.cljs$core$IFn$_invoke$arity$2(G__14844,G__14845) : specviz.spec.depends_on_STAR_.call(null,G__14844,G__14845));
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
var names = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([spec_name]));
specviz.spec.depends_on_STAR_(names,cljs.spec.alpha.form(cljs.spec.alpha.get_spec(spec_name)));

return cljs.core.deref(names);
});
specviz.spec.conform_or_throw = (function specviz$spec$conform_or_throw(spec,x){

var temp__4657__auto___14858 = cljs.spec.alpha.explain_data(spec,x);
if(cljs.core.truth_(temp__4657__auto___14858)){
var reason_14859 = temp__4657__auto___14858;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid spec",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reason,reason_14859], null));
} else {
}

return cljs.spec.alpha.conform(spec,x);
});
/**
 * Returns true if `x` is a spec literal, ex: `(clojure.spec/coll-of int?)`.
 */
specviz.spec.literal_QMARK_ = (function specviz$spec$literal_QMARK_(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(cljs.core.first(x)),"clojure.spec");
} else {
return null;
}
});
