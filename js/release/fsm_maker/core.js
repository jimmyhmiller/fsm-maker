// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('fsm_maker.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('instaparse.core');
goog.require('fsmviz.core');
if(typeof fsm_maker.core.fsm_text !== 'undefined'){
} else {
fsm_maker.core.fsm_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("start\n0 -> start\n1 -> middle\n\nmiddle\n0 -> finish\n1 -> finish");
}
fsm_maker.core.grammar = "<graph>       = node*\nnode           = start-point connection*\n<start-point>  = identifier\nconnection     = from <arrow> to\n<from>         = identifier\n<to>           = identifier\narrow          = \"->\"\n<identifier>   = #\"[A-Za-z0-9\\-_]+\"";
fsm_maker.core.parse = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(fsm_maker.core.grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_whitespace,cljs.core.cst$kw$standard], 0));
fsm_maker.core.extract_connection = (function fsm_maker$core$extract_connection(label,p__13321){
var vec__13322 = p__13321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13322,(0),null);
var transition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13322,(1),null);
var destination = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13322,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,transition,destination], null);
});
fsm_maker.core.node__GT_map = (function fsm_maker$core$node__GT_map(p__13325){
var vec__13326 = p__13325;
var seq__13327 = cljs.core.seq(vec__13326);
var first__13328 = cljs.core.first(seq__13327);
var seq__13327__$1 = cljs.core.next(seq__13327);
var _ = first__13328;
var first__13328__$1 = cljs.core.first(seq__13327__$1);
var seq__13327__$2 = cljs.core.next(seq__13327__$1);
var label = first__13328__$1;
var connections = seq__13327__$2;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fsm_maker.core.extract_connection,label),connections);
});
fsm_maker.core.build_fsm = (function fsm_maker$core$build_fsm(input){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fsm_maker.core.node__GT_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(fsm_maker.core.parse.cljs$core$IFn$_invoke$arity$1 ? fsm_maker.core.parse.cljs$core$IFn$_invoke$arity$1(input) : fsm_maker.core.parse.call(null,input))], 0));
});
fsmviz.core.generate_image(fsm_maker.core.build_fsm(cljs.core.deref(fsm_maker.core.fsm_text)),"example-map");
fsm_maker.core.update_text = (function fsm_maker$core$update_text(e){
return e.target.value;
});
fsm_maker.core.home_page = (function fsm_maker$core$home_page(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["render"], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Create an Finite State Machine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(fsm_maker.core.fsm_text),cljs.core.cst$kw$onChange,(function (p1__13329_SHARP_){
return cljs.core.reset_BANG_(fsm_maker.core.fsm_text,fsm_maker.core.update_text(p1__13329_SHARP_));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"30%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$margin_DASH_right,"30px",cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,fsmviz.core.generate_image(fsm_maker.core.build_fsm(cljs.core.deref(fsm_maker.core.fsm_text)),"test")], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"40%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null)], null)], null);
});
fsm_maker.core.mount_root = (function fsm_maker$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm_maker.core.home_page], null),document.getElementById("app"));
});
fsm_maker.core.init_BANG_ = (function fsm_maker$core$init_BANG_(){
return fsm_maker.core.mount_root();
});
