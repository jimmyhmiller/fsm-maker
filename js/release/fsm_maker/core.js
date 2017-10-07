// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('fsm_maker.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('instaparse.core');
goog.require('fsmviz.core');
fsm_maker.core.default_text = "start\n0 -> start\n1 -> middle\n\nmiddle\n0 -> finish\n1 -> finish";
fsm_maker.core.initial_hash = cljs.core.subs.cljs$core$IFn$_invoke$arity$2((function (){var G__17089 = location.hash;
return decodeURIComponent(G__17089);
})(),(1));
if(typeof fsm_maker.core.fsm_text !== 'undefined'){
} else {
fsm_maker.core.fsm_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fsm_maker.core.initial_hash,"")))?fsm_maker.core.initial_hash:fsm_maker.core.default_text));
}
cljs.core.add_watch(fsm_maker.core.fsm_text,cljs.core.cst$kw$url_DASH_encode,(function (_,___$1,___$2,new_state){
return location.hash = encodeURIComponent(new_state);
}));
fsm_maker.core.grammar = "<graph>       = node*\nnode           = start-point connection*\n<start-point>  = identifier\nconnection     = from <arrow> to\n<from>         = identifier\n<to>           = identifier\narrow          = \"->\"\n<identifier>   = #\"[A-Za-z0-9\\-_]+\"";
fsm_maker.core.parse = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(fsm_maker.core.grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_whitespace,cljs.core.cst$kw$standard], 0));
fsm_maker.core.extract_connection = (function fsm_maker$core$extract_connection(label,p__17090){
var vec__17091 = p__17090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(1),null);
var destination = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,transition,destination], null);
});
fsm_maker.core.node__GT_map = (function fsm_maker$core$node__GT_map(p__17094){
var vec__17095 = p__17094;
var seq__17096 = cljs.core.seq(vec__17095);
var first__17097 = cljs.core.first(seq__17096);
var seq__17096__$1 = cljs.core.next(seq__17096);
var _ = first__17097;
var first__17097__$1 = cljs.core.first(seq__17096__$1);
var seq__17096__$2 = cljs.core.next(seq__17096__$1);
var label = first__17097__$1;
var connections = seq__17096__$2;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fsm_maker.core.extract_connection,label),connections);
});
fsm_maker.core.build_fsm = (function fsm_maker$core$build_fsm(input){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fsm_maker.core.node__GT_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(fsm_maker.core.parse.cljs$core$IFn$_invoke$arity$1 ? fsm_maker.core.parse.cljs$core$IFn$_invoke$arity$1(input) : fsm_maker.core.parse.call(null,input))], 0));
});
fsm_maker.core.get_value = (function fsm_maker$core$get_value(e){
return e.target.value;
});
fsm_maker.core.home_page = (function fsm_maker$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Create a Finite State Machine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(fsm_maker.core.fsm_text),cljs.core.cst$kw$onChange,(function (p1__17098_SHARP_){
return cljs.core.reset_BANG_(fsm_maker.core.fsm_text,fsm_maker.core.get_value(p1__17098_SHARP_));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"30%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$margin_DASH_right,"30px",cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,fsmviz.core.generate_image(fsm_maker.core.build_fsm(cljs.core.deref(fsm_maker.core.fsm_text)),"fsm")], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"40%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null)], null)], null);
});
fsm_maker.core.mount_root = (function fsm_maker$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm_maker.core.home_page], null),document.getElementById("app"));
});
fsm_maker.core.init_BANG_ = (function fsm_maker$core$init_BANG_(){
return fsm_maker.core.mount_root();
});
