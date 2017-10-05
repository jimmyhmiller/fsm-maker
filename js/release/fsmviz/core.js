// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('fsmviz.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('specviz.graphviz');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_,cljs.core.any_QMARK_], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuples,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuple),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuple,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuple,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__14898){
return cljs.core.coll_QMARK_(G__14898);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuple)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_transition_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.nilable_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$any_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__14899){
return cljs.core.map_QMARK_(G__14899);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__14022__auto__,v__14023__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14023__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_transition_DASH_map),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$any_QMARK_,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_transition_DASH_map),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_transition_DASH_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_transition_DASH_map], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__14900){
return cljs.core.map_QMARK_(G__14900);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__14022__auto__,v__14023__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14023__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_transition_DASH_map)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fsmviz$core_SLASH_fsm,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$tuples,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuples,cljs.core.cst$kw$map,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_map),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples,cljs.core.cst$kw$map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuples,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_tuples,cljs.core.cst$kw$fsmviz$core_SLASH_fsm_DASH_map], null),null));
/**
 * Returns a collection of [from via to] tuples representing the FSM.
 */
fsmviz.core.map__GT_tuples = (function fsmviz$core$map__GT_tuples(state_map){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14901){
var vec__14902 = p__14901;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14902,from,m){
return (function (p__14905){
var vec__14906 = p__14905;
var trans = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,trans,to], null);
});})(vec__14902,from,m))
,m);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state_map], 0));
});
fsmviz.core.third = (function fsmviz$core$third(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(2));
});
/**
 * Returns states which have no inbound transitions.
 */
fsmviz.core.start_states = (function fsmviz$core$start_states(tuples){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tuples)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fsmviz.core.third,tuples)));
});
/**
 * Returns states which have no outbound transitions.
 */
fsmviz.core.term_states = (function fsmviz$core$term_states(tuples){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fsmviz.core.third,tuples)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tuples)));
});
/**
 * Sanitize a name, per `graphviz/name`, and if the state's name is nil,
 *   assume it is a start state.
 */
fsmviz.core.clean_name = (function fsmviz$core$clean_name(state){
if(cljs.core.truth_(state)){
return specviz.graphviz.clean_name(state);
} else {
return "start";
}
});
fsmviz.core.tuples__GT_graphviz = (function fsmviz$core$tuples__GT_graphviz(tuples){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14909){
var vec__14910 = p__14909;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(0),null);
var via = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(1),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$specviz$graphviz_SLASH_from,fsmviz.core.clean_name(from),cljs.core.cst$kw$specviz$graphviz_SLASH_label,via,cljs.core.cst$kw$specviz$graphviz_SLASH_to,fsmviz.core.clean_name(to)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tuples], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$specviz$graphviz_SLASH_name,"start",cljs.core.cst$kw$specviz$graphviz_SLASH_label,"",cljs.core.cst$kw$specviz$graphviz_SLASH_height,0.25,cljs.core.cst$kw$specviz$graphviz_SLASH_width,0.25,cljs.core.cst$kw$specviz$graphviz_SLASH_shape,"circle",cljs.core.cst$kw$specviz$graphviz_SLASH_style,"filled",cljs.core.cst$kw$specviz$graphviz_SLASH_fillcolor,"#000000"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (state){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$specviz$graphviz_SLASH_name,fsmviz.core.clean_name(state),cljs.core.cst$kw$specviz$graphviz_SLASH_shape,"doublecircle"], null);
}),fsmviz.core.term_states(tuples))], 0));
});
if(typeof fsmviz.core.fsm__GT_graphviz_STAR_ !== 'undefined'){
} else {
fsmviz.core.fsm__GT_graphviz_STAR_ = (function (){var method_table__8600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8603__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fsmviz.core","fsm->graphviz*"),cljs.core.first,cljs.core.cst$kw$default,hierarchy__8604__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__));
})();
}
fsmviz.core.fsm__GT_graphviz_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tuples,(function (p__14913){
var vec__14914 = p__14913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,(0),null);
var fsm_tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,(1),null);
return fsmviz.core.tuples__GT_graphviz(fsm_tuples);
}));
fsmviz.core.fsm__GT_graphviz_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__14917){
var vec__14918 = p__14917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(0),null);
var fsm_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(1),null);
return fsmviz.core.tuples__GT_graphviz(fsmviz.core.map__GT_tuples(fsm_map));
}));
/**
 * Returns a collection of Graphviz elements representing the `fsm`.
 */
fsmviz.core.fsm__GT_graphviz = (function fsmviz$core$fsm__GT_graphviz(fsm){
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$fsmviz$core_SLASH_fsm,fsm);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conformed,cljs.core.cst$kw$clojure$spec_SLASH_invalid)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.explain(cljs.core.cst$kw$fsmviz$core_SLASH_fsm,fsm)], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$specviz$graphviz_SLASH_name,"Error"], null)], null);
} else {
return (fsmviz.core.fsm__GT_graphviz_STAR_.cljs$core$IFn$_invoke$arity$1 ? fsmviz.core.fsm__GT_graphviz_STAR_.cljs$core$IFn$_invoke$arity$1(conformed) : fsmviz.core.fsm__GT_graphviz_STAR_.call(null,conformed));
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fsmviz$core_SLASH_generate_DASH_image,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$state_DASH_data,cljs.core.cst$kw$fsmviz$core_SLASH_fsm,cljs.core.cst$kw$filename,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$state_DASH_data,cljs.core.cst$kw$fsmviz$core_SLASH_fsm,cljs.core.cst$kw$filename,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_data,cljs.core.cst$kw$filename], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fsmviz$core_SLASH_fsm,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fsmviz$core_SLASH_fsm,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$state_DASH_data,cljs.core.cst$kw$fsmviz$core_SLASH_fsm,cljs.core.cst$kw$filename,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
fsmviz.core.transform_js_data = (function fsmviz$core$transform_js_data(state_data){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),row);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(state_data));
});
/**
 * Creates <filename>.svg, using the state map provided.
 * 
 *   `state-data` a map of state -> transition map, or a colletion of
 *             [from via to] triples.
 */
fsmviz.core.generate_image = (function fsmviz$core$generate_image(state_data,filename){
return specviz.graphviz.generate_image_BANG_(specviz.graphviz.dot_string(fsmviz.core.fsm__GT_graphviz(fsmviz.core.transform_js_data(state_data))),filename);
});
goog.exportSymbol('fsmviz.core.generate_image', fsmviz.core.generate_image);
