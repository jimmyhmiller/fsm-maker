// Compiled by ClojureScript 1.9.908 {}
goog.provide('fsmviz.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('specviz.graphviz');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fsmviz.core","fsm-tuple","fsmviz.core/fsm-tuple",1149858465),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_,cljs.core.any_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fsmviz.core","fsm-tuples","fsmviz.core/fsm-tuples",1330238073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("fsmviz.core","fsm-tuple","fsmviz.core/fsm-tuple",1149858465)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("fsmviz.core","fsm-tuple","fsmviz.core/fsm-tuple",1149858465),new cljs.core.Keyword("fsmviz.core","fsm-tuple","fsmviz.core/fsm-tuple",1149858465),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__45529){
return cljs.core.coll_QMARK_.call(null,G__45529);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("fsmviz.core","fsm-tuple","fsmviz.core/fsm-tuple",1149858465))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fsmviz.core","fsm-transition-map","fsmviz.core/fsm-transition-map",-1015209241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__45530){
return cljs.core.map_QMARK_.call(null,G__45530);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__39133__auto__,v__39134__auto__){
return cljs.core.nth.call(null,v__39134__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fsmviz.core","fsm-map","fsmviz.core/fsm-map",-1694194119),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fsmviz.core","fsm-transition-map","fsmviz.core/fsm-transition-map",-1015209241)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("fsmviz.core","fsm-transition-map","fsmviz.core/fsm-transition-map",-1015209241)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fsmviz.core","fsm-transition-map","fsmviz.core/fsm-transition-map",-1015209241)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("fsmviz.core","fsm-transition-map","fsmviz.core/fsm-transition-map",-1015209241)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__45531){
return cljs.core.map_QMARK_.call(null,G__45531);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__39133__auto__,v__39134__auto__){
return cljs.core.nth.call(null,v__39134__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fsmviz.core","fsm-transition-map","fsmviz.core/fsm-transition-map",-1015209241))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"tuples","tuples",-676032639),new cljs.core.Keyword("fsmviz.core","fsm-tuples","fsmviz.core/fsm-tuples",1330238073),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("fsmviz.core","fsm-map","fsmviz.core/fsm-map",-1694194119)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsmviz.core","fsm-tuples","fsmviz.core/fsm-tuples",1330238073),new cljs.core.Keyword("fsmviz.core","fsm-map","fsmviz.core/fsm-map",-1694194119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsmviz.core","fsm-tuples","fsmviz.core/fsm-tuples",1330238073),new cljs.core.Keyword("fsmviz.core","fsm-map","fsmviz.core/fsm-map",-1694194119)], null),null));
/**
 * Returns a collection of [from via to] tuples representing the FSM.
 */
fsmviz.core.map__GT_tuples = (function fsmviz$core$map__GT_tuples(state_map){
return cljs.core.mapcat.call(null,(function (p__45532){
var vec__45533 = p__45532;
var from = cljs.core.nth.call(null,vec__45533,(0),null);
var m = cljs.core.nth.call(null,vec__45533,(1),null);
return cljs.core.map.call(null,((function (vec__45533,from,m){
return (function (p__45536){
var vec__45537 = p__45536;
var trans = cljs.core.nth.call(null,vec__45537,(0),null);
var to = cljs.core.nth.call(null,vec__45537,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,trans,to], null);
});})(vec__45533,from,m))
,m);
}),state_map);
});
fsmviz.core.third = (function fsmviz$core$third(coll){
return cljs.core.nth.call(null,coll,(2));
});
/**
 * Returns states which have no inbound transitions.
 */
fsmviz.core.start_states = (function fsmviz$core$start_states(tuples){
return clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,tuples)),cljs.core.set.call(null,cljs.core.map.call(null,fsmviz.core.third,tuples)));
});
/**
 * Returns states which have no outbound transitions.
 */
fsmviz.core.term_states = (function fsmviz$core$term_states(tuples){
return clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.map.call(null,fsmviz.core.third,tuples)),cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,tuples)));
});
/**
 * Sanitize a name, per `graphviz/name`, and if the state's name is nil,
 *   assume it is a start state.
 */
fsmviz.core.clean_name = (function fsmviz$core$clean_name(state){
if(cljs.core.truth_(state)){
return specviz.graphviz.clean_name.call(null,state);
} else {
return "start";
}
});
fsmviz.core.tuples__GT_graphviz = (function fsmviz$core$tuples__GT_graphviz(tuples){
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p__45540){
var vec__45541 = p__45540;
var from = cljs.core.nth.call(null,vec__45541,(0),null);
var via = cljs.core.nth.call(null,vec__45541,(1),null);
var to = cljs.core.nth.call(null,vec__45541,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553),fsmviz.core.clean_name.call(null,from),new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),via,new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188),fsmviz.core.clean_name.call(null,to)], null)], null);
}),tuples),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606),"start",new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),"",new cljs.core.Keyword("specviz.graphviz","height","specviz.graphviz/height",-302742329),0.25,new cljs.core.Keyword("specviz.graphviz","width","specviz.graphviz/width",-1685912696),0.25,new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),"circle",new cljs.core.Keyword("specviz.graphviz","style","specviz.graphviz/style",-1714204917),"filled",new cljs.core.Keyword("specviz.graphviz","fillcolor","specviz.graphviz/fillcolor",1237989060),"#000000"], null)], null),cljs.core.mapv.call(null,(function (state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606),fsmviz.core.clean_name.call(null,state),new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),"doublecircle"], null);
}),fsmviz.core.term_states.call(null,tuples)));
});
if(typeof fsmviz.core.fsm__GT_graphviz_STAR_ !== 'undefined'){
} else {
fsmviz.core.fsm__GT_graphviz_STAR_ = (function (){var method_table__38704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fsmviz.core","fsm->graphviz*"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38708__auto__,method_table__38704__auto__,prefer_table__38705__auto__,method_cache__38706__auto__,cached_hierarchy__38707__auto__));
})();
}
cljs.core._add_method.call(null,fsmviz.core.fsm__GT_graphviz_STAR_,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p__45544){
var vec__45545 = p__45544;
var _ = cljs.core.nth.call(null,vec__45545,(0),null);
var fsm_tuples = cljs.core.nth.call(null,vec__45545,(1),null);
return fsmviz.core.tuples__GT_graphviz.call(null,fsm_tuples);
}));
cljs.core._add_method.call(null,fsmviz.core.fsm__GT_graphviz_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__45548){
var vec__45549 = p__45548;
var _ = cljs.core.nth.call(null,vec__45549,(0),null);
var fsm_map = cljs.core.nth.call(null,vec__45549,(1),null);
return fsmviz.core.tuples__GT_graphviz.call(null,fsmviz.core.map__GT_tuples.call(null,fsm_map));
}));
/**
 * Returns a collection of Graphviz elements representing the `fsm`.
 */
fsmviz.core.fsm__GT_graphviz = (function fsmviz$core$fsm__GT_graphviz(fsm){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),fsm);
if(cljs.core._EQ_.call(null,conformed,new cljs.core.Keyword("clojure.spec","invalid","clojure.spec/invalid",650114839))){
cljs.core.println.call(null,cljs.spec.alpha.explain.call(null,new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),fsm));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606),"Error"], null)], null);
} else {
return fsmviz.core.fsm__GT_graphviz_STAR_.call(null,conformed);
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("fsmviz.core","generate-image","fsmviz.core/generate-image",1556779696,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state-data","state-data",-1111123490),new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state-data","state-data",-1111123490),new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-data","state-data",-1111123490),new cljs.core.Keyword(null,"filename","filename",-1428840783)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state-data","state-data",-1111123490),new cljs.core.Keyword("fsmviz.core","fsm","fsmviz.core/fsm",991724),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
fsmviz.core.transform_js_data = (function fsmviz$core$transform_js_data(state_data){
return cljs.core.mapv.call(null,(function (row){
return cljs.core.mapv.call(null,(function (x){
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return x;
}
}),row);
}),cljs.core.js__GT_clj.call(null,state_data));
});
/**
 * Creates <filename>.svg, using the state map provided.
 * 
 *   `state-data` a map of state -> transition map, or a colletion of
 *             [from via to] triples.
 */
fsmviz.core.generate_image = (function fsmviz$core$generate_image(state_data,filename){
return specviz.graphviz.generate_image_BANG_.call(null,specviz.graphviz.dot_string.call(null,fsmviz.core.fsm__GT_graphviz.call(null,fsmviz.core.transform_js_data.call(null,state_data))),filename);
});
goog.exportSymbol('fsmviz.core.generate_image', fsmviz.core.generate_image);

//# sourceMappingURL=core.js.map?rel=1507334718415
