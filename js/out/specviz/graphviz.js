// Compiled by ClojureScript 1.9.908 {}
goog.provide('specviz.graphviz');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('specviz.spec');
goog.require('specviz.util');
goog.require('viz.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["diamond",null,"folder",null,"record",null,"oval",null,"box",null,"doublecircle",null,"square",null,"plaintext",null,"circle",null,"trapezium",null,"point",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["diamond",null,"folder",null,"record",null,"oval",null,"box",null,"doublecircle",null,"square",null,"plaintext",null,"circle",null,"trapezium",null,"point",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("specviz.graphviz","connection","specviz.graphviz/connection",694912439),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188),new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","line-style","specviz.graphviz/line-style",-341509471),new cljs.core.Keyword("specviz.graphviz","constraint","specviz.graphviz/constraint",-697753637),new cljs.core.Keyword("specviz.graphviz","line-direction","specviz.graphviz/line-direction",-1267287288)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45498){
return cljs.core.map_QMARK_.call(null,G__45498);
}),(function (G__45498){
return cljs.core.contains_QMARK_.call(null,G__45498,new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188));
}),(function (G__45498){
return cljs.core.contains_QMARK_.call(null,G__45498,new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553));
})], null),(function (G__45498){
return (cljs.core.map_QMARK_.call(null,G__45498)) && (cljs.core.contains_QMARK_.call(null,G__45498,new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188))) && (cljs.core.contains_QMARK_.call(null,G__45498,new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553)));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","line-style","specviz.graphviz/line-style",-341509471),new cljs.core.Keyword("specviz.graphviz","constraint","specviz.graphviz/constraint",-697753637),new cljs.core.Keyword("specviz.graphviz","line-direction","specviz.graphviz/line-direction",-1267287288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188),new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188),new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188),new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","line-style","specviz.graphviz/line-style",-341509471),new cljs.core.Keyword("specviz.graphviz","constraint","specviz.graphviz/constraint",-697753637),new cljs.core.Keyword("specviz.graphviz","line-direction","specviz.graphviz/line-direction",-1267287288)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","line-style","specviz.graphviz/line-style",-341509471),new cljs.core.Keyword("specviz.graphviz","constraint","specviz.graphviz/constraint",-697753637),new cljs.core.Keyword("specviz.graphviz","line-direction","specviz.graphviz/line-direction",-1267287288)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("specviz.graphviz","node","specviz.graphviz/node",-1829174153),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),new cljs.core.Keyword("specviz.graphviz","fillcolor","specviz.graphviz/fillcolor",1237989060),new cljs.core.Keyword("specviz.graphviz","style","specviz.graphviz/style",-1714204917),new cljs.core.Keyword("specviz.graphviz","height","specviz.graphviz/height",-302742329),new cljs.core.Keyword("specviz.graphviz","width","specviz.graphviz/width",-1685912696)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45499){
return cljs.core.map_QMARK_.call(null,G__45499);
}),(function (G__45499){
return cljs.core.contains_QMARK_.call(null,G__45499,new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606));
})], null),(function (G__45499){
return (cljs.core.map_QMARK_.call(null,G__45499)) && (cljs.core.contains_QMARK_.call(null,G__45499,new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606)));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),new cljs.core.Keyword("specviz.graphviz","fillcolor","specviz.graphviz/fillcolor",1237989060),new cljs.core.Keyword("specviz.graphviz","style","specviz.graphviz/style",-1714204917),new cljs.core.Keyword("specviz.graphviz","height","specviz.graphviz/height",-302742329),new cljs.core.Keyword("specviz.graphviz","width","specviz.graphviz/width",-1685912696)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),new cljs.core.Keyword("specviz.graphviz","fillcolor","specviz.graphviz/fillcolor",1237989060),new cljs.core.Keyword("specviz.graphviz","style","specviz.graphviz/style",-1714204917),new cljs.core.Keyword("specviz.graphviz","height","specviz.graphviz/height",-302742329),new cljs.core.Keyword("specviz.graphviz","width","specviz.graphviz/width",-1685912696)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),new cljs.core.Keyword("specviz.graphviz","fillcolor","specviz.graphviz/fillcolor",1237989060),new cljs.core.Keyword("specviz.graphviz","style","specviz.graphviz/style",-1714204917),new cljs.core.Keyword("specviz.graphviz","height","specviz.graphviz/height",-302742329),new cljs.core.Keyword("specviz.graphviz","width","specviz.graphviz/width",-1685912696)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("specviz.graphviz","drawable","specviz.graphviz/drawable",994374597),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword("specviz.graphviz","connection","specviz.graphviz/connection",694912439),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("specviz.graphviz","node","specviz.graphviz/node",-1829174153)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"node","node",581201198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","connection","specviz.graphviz/connection",694912439),new cljs.core.Keyword("specviz.graphviz","node","specviz.graphviz/node",-1829174153)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("specviz.graphviz","connection","specviz.graphviz/connection",694912439),new cljs.core.Keyword("specviz.graphviz","node","specviz.graphviz/node",-1829174153)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("specviz.graphviz","line-style","specviz.graphviz/line-style",-341509471),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"solid","solid",-2023773691),null,new cljs.core.Keyword(null,"dotted","dotted",-1504510307),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"solid","solid",-2023773691),null,new cljs.core.Keyword(null,"dotted","dotted",-1504510307),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("specviz.graphviz","line-direction","specviz.graphviz/line-direction",-1267287288),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"forward","forward",-557345303),null,new cljs.core.Keyword(null,"back","back",-417520012),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"forward","forward",-557345303),null,new cljs.core.Keyword(null,"back","back",-417520012),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null));
if(typeof specviz.graphviz.render_graphviz !== 'undefined'){
} else {
specviz.graphviz.render_graphviz = (function (){var method_table__38704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"specviz.graphviz","render-graphviz"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38708__auto__,method_table__38704__auto__,prefer_table__38705__auto__,method_cache__38706__auto__,cached_hierarchy__38707__auto__));
})();
}
if(typeof specviz.graphviz.render_graphviz_node !== 'undefined'){
} else {
specviz.graphviz.render_graphviz_node = (function (){var method_table__38704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"specviz.graphviz","render-graphviz-node"),new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38708__auto__,method_table__38704__auto__,prefer_table__38705__auto__,method_cache__38706__auto__,cached_hierarchy__38707__auto__));
})();
}
specviz.graphviz.format = (function specviz$graphviz$format(var_args){
var args__38925__auto__ = [];
var len__38918__auto___45502 = arguments.length;
var i__38919__auto___45503 = (0);
while(true){
if((i__38919__auto___45503 < len__38918__auto___45502)){
args__38925__auto__.push((arguments[i__38919__auto___45503]));

var G__45504 = (i__38919__auto___45503 + (1));
i__38919__auto___45503 = G__45504;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic = (function (format_str,args){
return cljs.core.reduce.call(null,(function (string,arg){
return clojure.string.replace_first.call(null,string,"%s",arg);
}),format_str,args);
});

specviz.graphviz.format.cljs$lang$maxFixedArity = (1);

specviz.graphviz.format.cljs$lang$applyTo = (function (seq45500){
var G__45501 = cljs.core.first.call(null,seq45500);
var seq45500__$1 = cljs.core.next.call(null,seq45500);
return specviz.graphviz.format.cljs$core$IFn$_invoke$arity$variadic(G__45501,seq45500__$1);
});

specviz.graphviz.render_graphviz_node_STAR_ = (function specviz$graphviz$render_graphviz_node_STAR_(p__45505){
var map__45506 = p__45505;
var map__45506__$1 = ((((!((map__45506 == null)))?((((map__45506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45506):map__45506);
var name = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606));
var shape = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","shape","specviz.graphviz/shape",376899499));
var label = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359));
var style = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","style","specviz.graphviz/style",-1714204917));
var fillcolor = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","fillcolor","specviz.graphviz/fillcolor",1237989060));
var height = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","height","specviz.graphviz/height",-302742329));
var width = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword("specviz.graphviz","width","specviz.graphviz/width",-1685912696));
return specviz.graphviz.format.call(null,"%s [shape=%s,label=%s,style=%s,fillcolor=\"%s\", height=%s,width=%s\n          ];\n",name,shape,label,style,fillcolor,height,width);
});
cljs.core._add_method.call(null,specviz.graphviz.render_graphviz_node,"plaintext",(function (node){
return specviz.graphviz.render_graphviz_node_STAR_.call(null,node);
}));
cljs.core._add_method.call(null,specviz.graphviz.render_graphviz_node,new cljs.core.Keyword(null,"default","default",-1987822328),(function (node){
return specviz.graphviz.render_graphviz_node_STAR_.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),(function (p1__45508_SHARP_){
return specviz.graphviz.format.call(null,"\"%s\"",(function (){var or__37749__auto__ = p1__45508_SHARP_;
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606).cljs$core$IFn$_invoke$arity$1(node);
}
})());
})));
}));
cljs.core._add_method.call(null,specviz.graphviz.render_graphviz,new cljs.core.Keyword(null,"node","node",581201198),(function (p__45509){
var vec__45510 = p__45509;
var _ = cljs.core.nth.call(null,vec__45510,(0),null);
var node = cljs.core.nth.call(null,vec__45510,(1),null);
return specviz.graphviz.render_graphviz_node.call(null,node);
}));
cljs.core._add_method.call(null,specviz.graphviz.render_graphviz,new cljs.core.Keyword(null,"connection","connection",-123599300),(function (p__45513){
var vec__45514 = p__45513;
var _ = cljs.core.nth.call(null,vec__45514,(0),null);
var map__45517 = cljs.core.nth.call(null,vec__45514,(1),null);
var map__45517__$1 = ((((!((map__45517 == null)))?((((map__45517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45517):map__45517);
var to = cljs.core.get.call(null,map__45517__$1,new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188));
var from = cljs.core.get.call(null,map__45517__$1,new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553));
var line_style = cljs.core.get.call(null,map__45517__$1,new cljs.core.Keyword("specviz.graphviz","line-style","specviz.graphviz/line-style",-341509471));
var constraint = cljs.core.get.call(null,map__45517__$1,new cljs.core.Keyword("specviz.graphviz","constraint","specviz.graphviz/constraint",-697753637));
var line_direction = cljs.core.get.call(null,map__45517__$1,new cljs.core.Keyword("specviz.graphviz","line-direction","specviz.graphviz/line-direction",-1267287288));
var label = cljs.core.get.call(null,map__45517__$1,new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359));
return specviz.graphviz.format.call(null,"%s->%s [label=\"%s\",style=%s,constraint=%s,dir=%s];\n",from,to,(function (){var or__37749__auto__ = label;
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return "";
}
})(),(cljs.core.truth_(line_style)?cljs.core.name.call(null,line_style):null),(((constraint == null))?true:constraint),(cljs.core.truth_(line_direction)?cljs.core.name.call(null,line_direction):null));
}));
/**
 * Generate the graphviz dot string for a sequence of graphviz element
 *   (connection & node) maps.
 */
specviz.graphviz.dot_string = (function specviz$graphviz$dot_string(elements){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,specviz.graphviz.render_graphviz,cljs.core.map.call(null,cljs.core.partial.call(null,specviz.spec.conform_or_throw,new cljs.core.Keyword("specviz.graphviz","drawable","specviz.graphviz/drawable",994374597)),elements)));
});
var id_45519 = cljs.core.atom.call(null,(0));
specviz.graphviz.next_id = ((function (id_45519){
return (function specviz$graphviz$next_id(){
cljs.core.swap_BANG_.call(null,id_45519,cljs.core.inc);

return cljs.core.deref.call(null,id_45519);
});})(id_45519))
;
/**
 * Returns a unique name for use with a graphviz node.
 */
specviz.graphviz.next_name = (function specviz$graphviz$next_name(){
return ["node",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specviz.graphviz.next_id.call(null))].join('');
});
/**
 * Turn the qualified keyword into a graphviz friendly name
 */
specviz.graphviz.clean_name = (function specviz$graphviz$clean_name(qkw){
if(cljs.core.truth_(qkw)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.namespace.call(null,qkw),cljs.core.name.call(null,qkw)),">",""),".",""),":",""),"-",""),"?","");
} else {
return null;
}
});
/**
 * Gets the name of the tree's root graphviz node.
 */
specviz.graphviz.get_root_name = (function specviz$graphviz$get_root_name(nodes){
return new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606).cljs$core$IFn$_invoke$arity$1(specviz.util.first_STAR_.call(null,nodes));
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
var args__38925__auto__ = [];
var len__38918__auto___45524 = arguments.length;
var i__38919__auto___45525 = (0);
while(true){
if((i__38919__auto___45525 < len__38918__auto___45524)){
args__38925__auto__.push((arguments[i__38919__auto___45525]));

var G__45526 = (i__38919__auto___45525 + (1));
i__38919__auto___45525 = G__45526;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return specviz.graphviz.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

specviz.graphviz.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__45521){
var map__45522 = p__45521;
var map__45522__$1 = ((((!((map__45522 == null)))?((((map__45522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45522):map__45522);
var from = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var from_port = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"from-port","from-port",1861905437));
var to = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"to","to",192099007));
var label = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_((function (){var and__37737__auto__ = from;
if(cljs.core.truth_(and__37737__auto__)){
return to;
} else {
return and__37737__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and from to)"));
}

var from_str = (cljs.core.truth_(from_port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606).cljs$core$IFn$_invoke$arity$1(from)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_port)].join(''):new cljs.core.Keyword("specviz.graphviz","name","specviz.graphviz/name",1031391606).cljs$core$IFn$_invoke$arity$1(from));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("specviz.graphviz","from","specviz.graphviz/from",-1602179553),from_str,new cljs.core.Keyword("specviz.graphviz","label","specviz.graphviz/label",936405359),label,new cljs.core.Keyword("specviz.graphviz","to","specviz.graphviz/to",986488188),((typeof to === 'string')?to:((cljs.core.coll_QMARK_.call(null,to))?specviz.graphviz.get_root_name.call(null,to):null))], null);
});

specviz.graphviz.connect.cljs$lang$maxFixedArity = (0);

specviz.graphviz.connect.cljs$lang$applyTo = (function (seq45520){
return specviz.graphviz.connect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45520));
});

/**
 * Generates two files (1) <filename>.dot containing the dot string, and
 *   <filename>.png containing the graphviz rendering as a png file, using the
 *   `dot` executable binary.
 */
specviz.graphviz.generate_image_BANG_ = (function specviz$graphviz$generate_image_BANG_(dot_string,filename){
var dot_string_SINGLEQUOTE_ = ["digraph {\nrankdir=LR;\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dot_string),"\n}"].join('');
return viz.core.image.call(null,clojure.string.replace.call(null,dot_string_SINGLEQUOTE_,"\n",""));
});

//# sourceMappingURL=graphviz.js.map?rel=1507334718351
