// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x54377_54378 = value;
x54377_54378.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x54380_54381 = value;
x54380_54381.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x54383_54384 = value;
x54383_54384.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__37737__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__37737__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__37737__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__38925__auto__ = [];
var len__38918__auto___54391 = arguments.length;
var i__38919__auto___54392 = (0);
while(true){
if((i__38919__auto___54392 < len__38918__auto___54391)){
args__38925__auto__.push((arguments[i__38919__auto___54392]));

var G__54393 = (i__38919__auto___54392 + (1));
i__38919__auto___54392 = G__54393;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__54387_54394 = cljs.core.seq.call(null,items);
var chunk__54388_54395 = null;
var count__54389_54396 = (0);
var i__54390_54397 = (0);
while(true){
if((i__54390_54397 < count__54389_54396)){
var item_54398 = cljs.core._nth.call(null,chunk__54388_54395,i__54390_54397);
if(!((item_54398 == null))){
if(cljs.core.coll_QMARK_.call(null,item_54398)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_54398)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_54398));
}
} else {
}

var G__54399 = seq__54387_54394;
var G__54400 = chunk__54388_54395;
var G__54401 = count__54389_54396;
var G__54402 = (i__54390_54397 + (1));
seq__54387_54394 = G__54399;
chunk__54388_54395 = G__54400;
count__54389_54396 = G__54401;
i__54390_54397 = G__54402;
continue;
} else {
var temp__4657__auto___54403 = cljs.core.seq.call(null,seq__54387_54394);
if(temp__4657__auto___54403){
var seq__54387_54404__$1 = temp__4657__auto___54403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54387_54404__$1)){
var c__38588__auto___54405 = cljs.core.chunk_first.call(null,seq__54387_54404__$1);
var G__54406 = cljs.core.chunk_rest.call(null,seq__54387_54404__$1);
var G__54407 = c__38588__auto___54405;
var G__54408 = cljs.core.count.call(null,c__38588__auto___54405);
var G__54409 = (0);
seq__54387_54394 = G__54406;
chunk__54388_54395 = G__54407;
count__54389_54396 = G__54408;
i__54390_54397 = G__54409;
continue;
} else {
var item_54410 = cljs.core.first.call(null,seq__54387_54404__$1);
if(!((item_54410 == null))){
if(cljs.core.coll_QMARK_.call(null,item_54410)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_54410)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_54410));
}
} else {
}

var G__54411 = cljs.core.next.call(null,seq__54387_54404__$1);
var G__54412 = null;
var G__54413 = (0);
var G__54414 = (0);
seq__54387_54394 = G__54411;
chunk__54388_54395 = G__54412;
count__54389_54396 = G__54413;
i__54390_54397 = G__54414;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq54386){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54386));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___54422 = arguments.length;
var i__38919__auto___54423 = (0);
while(true){
if((i__38919__auto___54423 < len__38918__auto___54422)){
args__38925__auto__.push((arguments[i__38919__auto___54423]));

var G__54424 = (i__38919__auto___54423 + (1));
i__38919__auto___54423 = G__54424;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((2) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38926__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__54418_54425 = cljs.core.seq.call(null,children);
var chunk__54419_54426 = null;
var count__54420_54427 = (0);
var i__54421_54428 = (0);
while(true){
if((i__54421_54428 < count__54420_54427)){
var child_54429 = cljs.core._nth.call(null,chunk__54419_54426,i__54421_54428);
if(!((child_54429 == null))){
if(cljs.core.coll_QMARK_.call(null,child_54429)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_54429))));
} else {
var temp__4655__auto___54430 = devtools.formatters.helpers.pref.call(null,child_54429);
if(cljs.core.truth_(temp__4655__auto___54430)){
var child_value_54431 = temp__4655__auto___54430;
template.push(child_value_54431);
} else {
}
}
} else {
}

var G__54432 = seq__54418_54425;
var G__54433 = chunk__54419_54426;
var G__54434 = count__54420_54427;
var G__54435 = (i__54421_54428 + (1));
seq__54418_54425 = G__54432;
chunk__54419_54426 = G__54433;
count__54420_54427 = G__54434;
i__54421_54428 = G__54435;
continue;
} else {
var temp__4657__auto___54436 = cljs.core.seq.call(null,seq__54418_54425);
if(temp__4657__auto___54436){
var seq__54418_54437__$1 = temp__4657__auto___54436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54418_54437__$1)){
var c__38588__auto___54438 = cljs.core.chunk_first.call(null,seq__54418_54437__$1);
var G__54439 = cljs.core.chunk_rest.call(null,seq__54418_54437__$1);
var G__54440 = c__38588__auto___54438;
var G__54441 = cljs.core.count.call(null,c__38588__auto___54438);
var G__54442 = (0);
seq__54418_54425 = G__54439;
chunk__54419_54426 = G__54440;
count__54420_54427 = G__54441;
i__54421_54428 = G__54442;
continue;
} else {
var child_54443 = cljs.core.first.call(null,seq__54418_54437__$1);
if(!((child_54443 == null))){
if(cljs.core.coll_QMARK_.call(null,child_54443)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_54443))));
} else {
var temp__4655__auto___54444 = devtools.formatters.helpers.pref.call(null,child_54443);
if(cljs.core.truth_(temp__4655__auto___54444)){
var child_value_54445 = temp__4655__auto___54444;
template.push(child_value_54445);
} else {
}
}
} else {
}

var G__54446 = cljs.core.next.call(null,seq__54418_54437__$1);
var G__54447 = null;
var G__54448 = (0);
var G__54449 = (0);
seq__54418_54425 = G__54446;
chunk__54419_54426 = G__54447;
count__54420_54427 = G__54448;
i__54421_54428 = G__54449;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq54415){
var G__54416 = cljs.core.first.call(null,seq54415);
var seq54415__$1 = cljs.core.next.call(null,seq54415);
var G__54417 = cljs.core.first.call(null,seq54415__$1);
var seq54415__$2 = cljs.core.next.call(null,seq54415__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__54416,G__54417,seq54415__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__38925__auto__ = [];
var len__38918__auto___54452 = arguments.length;
var i__38919__auto___54453 = (0);
while(true){
if((i__38919__auto___54453 < len__38918__auto___54452)){
args__38925__auto__.push((arguments[i__38919__auto___54453]));

var G__54454 = (i__38919__auto___54453 + (1));
i__38919__auto___54453 = G__54454;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq54450){
var G__54451 = cljs.core.first.call(null,seq54450);
var seq54450__$1 = cljs.core.next.call(null,seq54450);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54451,seq54450__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__38925__auto__ = [];
var len__38918__auto___54457 = arguments.length;
var i__38919__auto___54458 = (0);
while(true){
if((i__38919__auto___54458 < len__38918__auto___54457)){
args__38925__auto__.push((arguments[i__38919__auto___54458]));

var G__54459 = (i__38919__auto___54458 + (1));
i__38919__auto___54458 = G__54459;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq54455){
var G__54456 = cljs.core.first.call(null,seq54455);
var seq54455__$1 = cljs.core.next.call(null,seq54455);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54456,seq54455__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__54461 = arguments.length;
switch (G__54461) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj54463 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__37749__auto__ = start_index;
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return (0);
}
})()};
return obj54463;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__38925__auto__ = [];
var len__38918__auto___54471 = arguments.length;
var i__38919__auto___54472 = (0);
while(true){
if((i__38919__auto___54472 < len__38918__auto___54471)){
args__38925__auto__.push((arguments[i__38919__auto___54472]));

var G__54473 = (i__38919__auto___54472 + (1));
i__38919__auto___54472 = G__54473;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__54467){
var vec__54468 = p__54467;
var state_override_fn = cljs.core.nth.call(null,vec__54468,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq54465){
var G__54466 = cljs.core.first.call(null,seq54465);
var seq54465__$1 = cljs.core.next.call(null,seq54465);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__54466,seq54465__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_54474 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_54474;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__54475 = name;
switch (G__54475) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__54477 = tag;
var html_tag = cljs.core.nth.call(null,vec__54477,(0),null);
var style = cljs.core.nth.call(null,vec__54477,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_54480 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_54480;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_54481 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_54482 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_54482;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_54481;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__54483 = initial_value;
var G__54484 = value.call(null);
initial_value = G__54483;
value = G__54484;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__54485 = initial_value;
var G__54486 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__54485;
value = G__54486;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__54487 = initial_value;
var G__54488 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__54487;
value = G__54488;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1507178389823
