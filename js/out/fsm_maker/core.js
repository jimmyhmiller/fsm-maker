// Compiled by ClojureScript 1.9.908 {}
goog.provide('fsm_maker.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('instaparse.core');
goog.require('fsmviz.core');
if(typeof fsm_maker.core.fsm_text !== 'undefined'){
} else {
fsm_maker.core.fsm_text = reagent.core.atom.call(null,"start\n0 -> start\n1 -> middle\n\nmiddle\n0 -> finish\n1 -> finish");
}
fsm_maker.core.grammar = "<graph>       = node*\nnode           = start-point connection*\n<start-point>  = identifier\nconnection     = from <arrow> to\n<from>         = identifier\n<to>           = identifier\narrow          = \"->\"\n<identifier>   = #\"[A-Za-z0-9\\-_]+\"";
fsm_maker.core.parse = instaparse.core.parser.call(null,fsm_maker.core.grammar,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),new cljs.core.Keyword(null,"standard","standard",-1769206695));
fsm_maker.core.extract_connection = (function fsm_maker$core$extract_connection(label,p__60776){
var vec__60777 = p__60776;
var _ = cljs.core.nth.call(null,vec__60777,(0),null);
var transition = cljs.core.nth.call(null,vec__60777,(1),null);
var destination = cljs.core.nth.call(null,vec__60777,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,transition,destination], null);
});
fsm_maker.core.node__GT_map = (function fsm_maker$core$node__GT_map(p__60780){
var vec__60781 = p__60780;
var seq__60782 = cljs.core.seq.call(null,vec__60781);
var first__60783 = cljs.core.first.call(null,seq__60782);
var seq__60782__$1 = cljs.core.next.call(null,seq__60782);
var _ = first__60783;
var first__60783__$1 = cljs.core.first.call(null,seq__60782__$1);
var seq__60782__$2 = cljs.core.next.call(null,seq__60782__$1);
var label = first__60783__$1;
var connections = seq__60782__$2;
return cljs.core.map.call(null,cljs.core.partial.call(null,fsm_maker.core.extract_connection,label),connections);
});
fsm_maker.core.build_fsm = (function fsm_maker$core$build_fsm(input){
return cljs.core.mapcat.call(null,fsm_maker.core.node__GT_map,fsm_maker.core.parse.call(null,input));
});
fsm_maker.core.get_value = (function fsm_maker$core$get_value(e){
return e.target.value;
});
fsm_maker.core.home_page = (function fsm_maker$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Create a Finite State Machine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,fsm_maker.core.fsm_text),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__60784_SHARP_){
return cljs.core.reset_BANG_.call(null,fsm_maker.core.fsm_text,fsm_maker.core.get_value.call(null,p1__60784_SHARP_));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"30px",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),fsmviz.core.generate_image.call(null,fsm_maker.core.build_fsm.call(null,cljs.core.deref.call(null,fsm_maker.core.fsm_text)),"fsm")], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"40%",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null)], null)], null);
});
fsm_maker.core.mount_root = (function fsm_maker$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm_maker.core.home_page], null),document.getElementById("app"));
});
fsm_maker.core.init_BANG_ = (function fsm_maker$core$init_BANG_(){
return fsm_maker.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1507178426722
