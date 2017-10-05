// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('specviz.graphviz');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('specviz.spec');
goog.require('specviz.util');
goog.require('viz.core');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$specviz$graphviz_SLASH_shape,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["diamond",null,"folder",null,"record",null,"oval",null,"box",null,"doublecircle",null,"square",null,"plaintext",null,"circle",null,"trapezium",null,"point",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["diamond",null,"folder",null,"record",null,"oval",null,"box",null,"doublecircle",null,"square",null,"plaintext",null,"circle",null,"trapezium",null,"point",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$specviz$graphviz_SLASH_connection,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_to,cljs.core.cst$kw$specviz$graphviz_SLASH_from], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_constraint,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_direction], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14866){
return cljs.core.map_QMARK_(G__14866);
}),(function (G__14866){
return cljs.core.contains_QMARK_(G__14866,cljs.core.cst$kw$specviz$graphviz_SLASH_to);
}),(function (G__14866){
return cljs.core.contains_QMARK_(G__14866,cljs.core.cst$kw$specviz$graphviz_SLASH_from);
})], null),(function (G__14866){
return (cljs.core.map_QMARK_(G__14866)) && (cljs.core.contains_QMARK_(G__14866,cljs.core.cst$kw$specviz$graphviz_SLASH_to)) && (cljs.core.contains_QMARK_(G__14866,cljs.core.cst$kw$specviz$graphviz_SLASH_from));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_constraint,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_to,cljs.core.cst$kw$specviz$graphviz_SLASH_from], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_to,cljs.core.cst$kw$specviz$graphviz_SLASH_from], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_to,cljs.core.cst$kw$specviz$graphviz_SLASH_from], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_constraint,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_direction], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$specviz$graphviz_SLASH_to)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$specviz$graphviz_SLASH_from))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_constraint,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_direction], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$specviz$graphviz_SLASH_node,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_name], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_shape,cljs.core.cst$kw$specviz$graphviz_SLASH_fillcolor,cljs.core.cst$kw$specviz$graphviz_SLASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_height,cljs.core.cst$kw$specviz$graphviz_SLASH_width], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14867){
return cljs.core.map_QMARK_(G__14867);
}),(function (G__14867){
return cljs.core.contains_QMARK_(G__14867,cljs.core.cst$kw$specviz$graphviz_SLASH_name);
})], null),(function (G__14867){
return (cljs.core.map_QMARK_(G__14867)) && (cljs.core.contains_QMARK_(G__14867,cljs.core.cst$kw$specviz$graphviz_SLASH_name));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_shape,cljs.core.cst$kw$specviz$graphviz_SLASH_fillcolor,cljs.core.cst$kw$specviz$graphviz_SLASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_height,cljs.core.cst$kw$specviz$graphviz_SLASH_width], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_name], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_shape,cljs.core.cst$kw$specviz$graphviz_SLASH_fillcolor,cljs.core.cst$kw$specviz$graphviz_SLASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_height,cljs.core.cst$kw$specviz$graphviz_SLASH_width], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$specviz$graphviz_SLASH_name))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_label,cljs.core.cst$kw$specviz$graphviz_SLASH_shape,cljs.core.cst$kw$specviz$graphviz_SLASH_fillcolor,cljs.core.cst$kw$specviz$graphviz_SLASH_style,cljs.core.cst$kw$specviz$graphviz_SLASH_height,cljs.core.cst$kw$specviz$graphviz_SLASH_width], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$specviz$graphviz_SLASH_drawable,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$connection,cljs.core.cst$kw$specviz$graphviz_SLASH_connection,cljs.core.cst$kw$node,cljs.core.cst$kw$specviz$graphviz_SLASH_node),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$node], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_connection,cljs.core.cst$kw$specviz$graphviz_SLASH_node], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specviz$graphviz_SLASH_connection,cljs.core.cst$kw$specviz$graphviz_SLASH_node], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_style,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$solid,null,cljs.core.cst$kw$dotted,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$solid,null,cljs.core.cst$kw$dotted,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_direction,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$forward,null,cljs.core.cst$kw$back,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$none,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$forward,null,cljs.core.cst$kw$back,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$none,null], null), null));
if(typeof specviz.graphviz.render_graphviz !== 'undefined'){
} else {
specviz.graphviz.render_graphviz = (function (){var method_table__8600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8603__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("specviz.graphviz","render-graphviz"),cljs.core.first,cljs.core.cst$kw$default,hierarchy__8604__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__));
})();
}
if(typeof specviz.graphviz.render_graphviz_node !== 'undefined'){
} else {
specviz.graphviz.render_graphviz_node = (function (){var method_table__8600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8603__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("specviz.graphviz","render-graphviz-node"),cljs.core.cst$kw$specviz$graphviz_SLASH_shape,cljs.core.cst$kw$default,hierarchy__8604__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__));
})();
}
specviz.graphviz.format = (function specviz$graphviz$format(var_args){
var args__8821__auto__ = [];
var len__8814__auto___14870 = arguments.length;
var i__8815__auto___14871 = (0);
while(true){
if((i__8815__auto___14871 < len__8814__auto___14870)){
args__8821__auto__.push((arguments[i__8815__auto___14871]));

var G__14872 = (i__8815__auto___14871 + (1));
i__8815__auto___14871 = G__14872;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic = (function (format_str,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (string,arg){
return clojure.string.replace_first(string,"%s",arg);
}),format_str,args);
});

specviz.graphviz.format.cljs$lang$maxFixedArity = (1);

specviz.graphviz.format.cljs$lang$applyTo = (function (seq14868){
var G__14869 = cljs.core.first(seq14868);
var seq14868__$1 = cljs.core.next(seq14868);
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic(G__14869,seq14868__$1);
});

specviz.graphviz.render_graphviz_node_STAR_ = (function specviz$graphviz$render_graphviz_node_STAR_(p__14873){
var map__14874 = p__14873;
var map__14874__$1 = ((((!((map__14874 == null)))?((((map__14874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14874):map__14874);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_name);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_shape);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_style);
var fillcolor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_fillcolor);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_width);
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic("%s [shape=%s,label=%s,style=%s,fillcolor=\"%s\", height=%s,width=%s\n          ];\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,shape,label,style,fillcolor,height,width], 0));
});
specviz.graphviz.render_graphviz_node.cljs$core$IMultiFn$_add_method$arity$3(null,"plaintext",(function (node){
return specviz.graphviz.render_graphviz_node_STAR_(node);
}));
specviz.graphviz.render_graphviz_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (node){
return specviz.graphviz.render_graphviz_node_STAR_(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$specviz$graphviz_SLASH_label,(function (p1__14876_SHARP_){
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic("\"%s\"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__7645__auto__ = p1__14876_SHARP_;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.cst$kw$specviz$graphviz_SLASH_name.cljs$core$IFn$_invoke$arity$1(node);
}
})()], 0));
})));
}));
specviz.graphviz.render_graphviz.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$node,(function (p__14877){
var vec__14878 = p__14877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(1),null);
return (specviz.graphviz.render_graphviz_node.cljs$core$IFn$_invoke$arity$1 ? specviz.graphviz.render_graphviz_node.cljs$core$IFn$_invoke$arity$1(node) : specviz.graphviz.render_graphviz_node.call(null,node));
}));
specviz.graphviz.render_graphviz.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$connection,(function (p__14881){
var vec__14882 = p__14881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14882,(0),null);
var map__14885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14882,(1),null);
var map__14885__$1 = ((((!((map__14885 == null)))?((((map__14885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14885):map__14885);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14885__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_to);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14885__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_from);
var line_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14885__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_style);
var constraint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14885__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_constraint);
var line_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14885__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_line_DASH_direction);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14885__$1,cljs.core.cst$kw$specviz$graphviz_SLASH_label);
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic("%s->%s [label=\"%s\",style=%s,constraint=%s,dir=%s];\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,to,(function (){var or__7645__auto__ = label;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "";
}
})(),(cljs.core.truth_(line_style)?cljs.core.name(line_style):null),(((constraint == null))?true:constraint),(cljs.core.truth_(line_direction)?cljs.core.name(line_direction):null)], 0));
}));
/**
 * Generate the graphviz dot string for a sequence of graphviz element
 *   (connection & node) maps.
 */
specviz.graphviz.dot_string = (function specviz$graphviz$dot_string(elements){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(specviz.graphviz.render_graphviz,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(specviz.spec.conform_or_throw,cljs.core.cst$kw$specviz$graphviz_SLASH_drawable),elements)));
});
var id_14887 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
specviz.graphviz.next_id = ((function (id_14887){
return (function specviz$graphviz$next_id(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(id_14887,cljs.core.inc);

return cljs.core.deref(id_14887);
});})(id_14887))
;
/**
 * Returns a unique name for use with a graphviz node.
 */
specviz.graphviz.next_name = (function specviz$graphviz$next_name(){
return ["node",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specviz.graphviz.next_id())].join('');
});
/**
 * Turn the qualified keyword into a graphviz friendly name
 */
specviz.graphviz.clean_name = (function specviz$graphviz$clean_name(qkw){
if(cljs.core.truth_(qkw)){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.namespace(qkw),cljs.core.name(qkw)),">",""),".",""),":",""),"-",""),"?","");
} else {
return null;
}
});
/**
 * Gets the name of the tree's root graphviz node.
 */
specviz.graphviz.get_root_name = (function specviz$graphviz$get_root_name(nodes){
return cljs.core.cst$kw$specviz$graphviz_SLASH_name.cljs$core$IFn$_invoke$arity$1(specviz.util.first_STAR_(nodes));
});
/**
 * Make a connection from one node to another node.
 * 
 *   `from` the origin node (map)
 * 
 *   `from-port` (optional) if `from-node` is a table, the id (string) of a port
 *            (cell) of the node, from which the connection should originate
 * 
 *   `to` the destination of the connection, can be a node (map), sequence of
 *     nodes, or the name of a node (string)
 * 
 *   `label` the connection's label
 */
specviz.graphviz.connect = (function specviz$graphviz$connect(var_args){
var args__8821__auto__ = [];
var len__8814__auto___14892 = arguments.length;
var i__8815__auto___14893 = (0);
while(true){
if((i__8815__auto___14893 < len__8814__auto___14892)){
args__8821__auto__.push((arguments[i__8815__auto___14893]));

var G__14894 = (i__8815__auto___14893 + (1));
i__8815__auto___14893 = G__14894;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return specviz.graphviz.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

specviz.graphviz.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__14889){
var map__14890 = p__14889;
var map__14890__$1 = ((((!((map__14890 == null)))?((((map__14890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14890):map__14890);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,cljs.core.cst$kw$from);
var from_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,cljs.core.cst$kw$from_DASH_port);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,cljs.core.cst$kw$to);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14890__$1,cljs.core.cst$kw$label);
if(cljs.core.truth_((function (){var and__7633__auto__ = from;
if(cljs.core.truth_(and__7633__auto__)){
return to;
} else {
return and__7633__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and from to)"));
}

var from_str = (cljs.core.truth_(from_port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$specviz$graphviz_SLASH_name.cljs$core$IFn$_invoke$arity$1(from)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_port)].join(''):cljs.core.cst$kw$specviz$graphviz_SLASH_name.cljs$core$IFn$_invoke$arity$1(from));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$specviz$graphviz_SLASH_from,from_str,cljs.core.cst$kw$specviz$graphviz_SLASH_label,label,cljs.core.cst$kw$specviz$graphviz_SLASH_to,((typeof to === 'string')?to:((cljs.core.coll_QMARK_(to))?specviz.graphviz.get_root_name(to):null))], null);
});

specviz.graphviz.connect.cljs$lang$maxFixedArity = (0);

specviz.graphviz.connect.cljs$lang$applyTo = (function (seq14888){
return specviz.graphviz.connect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14888));
});

/**
 * Generates two files (1) <filename>.dot containing the dot string, and
 *   <filename>.png containing the graphviz rendering as a png file, using the
 *   `dot` executable binary.
 */
specviz.graphviz.generate_image_BANG_ = (function specviz$graphviz$generate_image_BANG_(dot_string,filename){
var dot_string_SINGLEQUOTE_ = ["digraph {\nrankdir=LR;\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dot_string),"\n}"].join('');
var G__14895 = clojure.string.replace(dot_string_SINGLEQUOTE_,"\n","");
return (viz.core.image.cljs$core$IFn$_invoke$arity$1 ? viz.core.image.cljs$core$IFn$_invoke$arity$1(G__14895) : viz.core.image.call(null,G__14895));
});
