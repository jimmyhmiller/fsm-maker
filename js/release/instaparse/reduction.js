// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.reduction');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.util');
instaparse.reduction.singleton_QMARK_ = (function instaparse$reduction$singleton_QMARK_(s){
return (cljs.core.seq(s)) && (cljs.core.not(cljs.core.next(s)));
});
instaparse.reduction.red = (function instaparse$reduction$red(parser,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$red,f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null);
instaparse.reduction.HiccupNonTerminalReduction = (function instaparse$reduction$HiccupNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function instaparse$reduction$EnliveNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$enlive,cljs.core.cst$kw$key,key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hiccup,instaparse.reduction.HiccupNonTerminalReduction,cljs.core.cst$kw$enlive,instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enlive,(function (tag,item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$content,(function (){var x__8507__auto__ = item;
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})()], null);
}),cljs.core.cst$kw$hiccup,(function (tag,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = cljs.core.cst$kw$hiccup;
instaparse.reduction.apply_reduction = (function instaparse$reduction$apply_reduction(f,result){
var G__13292 = cljs.core.cst$kw$reduction_DASH_type.cljs$core$IFn$_invoke$arity$1(f);
var G__13292__$1 = (((G__13292 instanceof cljs.core.Keyword))?G__13292.fqn:null);
switch (G__13292__$1) {
case "raw":
return instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,result);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(f)], null)),result));

break;
case "enlive":
var content = instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,result);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$content,(((cljs.core.count(content) === (0)))?null:content)], null);

break;
default:
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(result) : f.call(null,result));

}
});
instaparse.reduction.apply_standard_reductions = (function instaparse$reduction$apply_standard_reductions(var_args){
var G__13295 = arguments.length;
switch (G__13295) {
case 1:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = (function (grammar){
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(instaparse.reduction.standard_non_terminal_reduction,grammar);
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = (function (reduction_type,grammar){
var temp__4655__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$reduction$iter__13296(s__13297){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__13297__$1 = s__13297;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13297__$1);
if(temp__4657__auto__){
var s__13297__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13297__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13297__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13299 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13298 = (0);
while(true){
if((i__13298 < size__8452__auto__)){
var vec__13300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13298);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13300,(1),null);
cljs.core.chunk_append(b__13299,(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null)));

var G__13307 = (i__13298 + (1));
i__13298 = G__13307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13299),instaparse$reduction$iter__13296(cljs.core.chunk_rest(s__13297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13299),null);
}
} else {
var vec__13303 = cljs.core.first(s__13297__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13303,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null)),instaparse$reduction$iter__13296(cljs.core.rest(s__13297__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__8453__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});

instaparse.reduction.apply_standard_reductions.cljs$lang$maxFixedArity = 2;

