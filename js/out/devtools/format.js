// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__38432__auto__ = (((value == null))?null:value);
var m__38433__auto__ = (devtools.format._header[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,value);
} else {
var m__38433__auto____$1 = (devtools.format._header["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__38432__auto__ = (((value == null))?null:value);
var m__38433__auto__ = (devtools.format._has_body[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,value);
} else {
var m__38433__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__38432__auto__ = (((value == null))?null:value);
var m__38433__auto__ = (devtools.format._body[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,value);
} else {
var m__38433__auto____$1 = (devtools.format._body["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52687 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52687["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52688 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52688["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52689 = temp__4655__auto____$2;
return (o52689["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52690 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52690["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52691 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52691["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52692 = temp__4655__auto____$2;
return (o52692["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52693 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52693["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52694 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52694["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52695 = temp__4655__auto____$2;
return (o52695["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52696 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52696["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52697 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52697["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52698 = temp__4655__auto____$2;
return (o52698["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52699 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52699["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52700 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52700["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52701 = temp__4655__auto____$2;
return (o52701["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52702 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52702["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52703 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52703["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52704 = temp__4655__auto____$2;
return (o52704["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o52705 = temp__4655__auto__;
var temp__4655__auto____$1 = (o52705["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o52706 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o52706["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o52707 = temp__4655__auto____$2;
return (o52707["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52709 = arguments.length;
var i__38919__auto___52710 = (0);
while(true){
if((i__38919__auto___52710 < len__38918__auto___52709)){
args__38925__auto__.push((arguments[i__38919__auto___52710]));

var G__52711 = (i__38919__auto___52710 + (1));
i__38919__auto___52710 = G__52711;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq52708){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52708));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52713 = arguments.length;
var i__38919__auto___52714 = (0);
while(true){
if((i__38919__auto___52714 < len__38918__auto___52713)){
args__38925__auto__.push((arguments[i__38919__auto___52714]));

var G__52715 = (i__38919__auto___52714 + (1));
i__38919__auto___52714 = G__52715;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq52712){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52712));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52717 = arguments.length;
var i__38919__auto___52718 = (0);
while(true){
if((i__38919__auto___52718 < len__38918__auto___52717)){
args__38925__auto__.push((arguments[i__38919__auto___52718]));

var G__52719 = (i__38919__auto___52718 + (1));
i__38919__auto___52718 = G__52719;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq52716){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52716));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52721 = arguments.length;
var i__38919__auto___52722 = (0);
while(true){
if((i__38919__auto___52722 < len__38918__auto___52721)){
args__38925__auto__.push((arguments[i__38919__auto___52722]));

var G__52723 = (i__38919__auto___52722 + (1));
i__38919__auto___52722 = G__52723;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq52720){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52720));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52725 = arguments.length;
var i__38919__auto___52726 = (0);
while(true){
if((i__38919__auto___52726 < len__38918__auto___52725)){
args__38925__auto__.push((arguments[i__38919__auto___52726]));

var G__52727 = (i__38919__auto___52726 + (1));
i__38919__auto___52726 = G__52727;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq52724){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52724));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52729 = arguments.length;
var i__38919__auto___52730 = (0);
while(true){
if((i__38919__auto___52730 < len__38918__auto___52729)){
args__38925__auto__.push((arguments[i__38919__auto___52730]));

var G__52731 = (i__38919__auto___52730 + (1));
i__38919__auto___52730 = G__52731;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq52728){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52728));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52733 = arguments.length;
var i__38919__auto___52734 = (0);
while(true){
if((i__38919__auto___52734 < len__38918__auto___52733)){
args__38925__auto__.push((arguments[i__38919__auto___52734]));

var G__52735 = (i__38919__auto___52734 + (1));
i__38919__auto___52734 = G__52735;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq52732){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52732));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52743 = arguments.length;
var i__38919__auto___52744 = (0);
while(true){
if((i__38919__auto___52744 < len__38918__auto___52743)){
args__38925__auto__.push((arguments[i__38919__auto___52744]));

var G__52745 = (i__38919__auto___52744 + (1));
i__38919__auto___52744 = G__52745;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__52739){
var vec__52740 = p__52739;
var state_override = cljs.core.nth.call(null,vec__52740,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__52740,state_override){
return (function (p1__52736_SHARP_){
return cljs.core.merge.call(null,p1__52736_SHARP_,state_override);
});})(vec__52740,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq52737){
var G__52738 = cljs.core.first.call(null,seq52737);
var seq52737__$1 = cljs.core.next.call(null,seq52737);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__52738,seq52737__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52747 = arguments.length;
var i__38919__auto___52748 = (0);
while(true){
if((i__38919__auto___52748 < len__38918__auto___52747)){
args__38925__auto__.push((arguments[i__38919__auto___52748]));

var G__52749 = (i__38919__auto___52748 + (1));
i__38919__auto___52748 = G__52749;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq52746){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52746));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___52752 = arguments.length;
var i__38919__auto___52753 = (0);
while(true){
if((i__38919__auto___52753 < len__38918__auto___52752)){
args__38925__auto__.push((arguments[i__38919__auto___52753]));

var G__52754 = (i__38919__auto___52753 + (1));
i__38919__auto___52753 = G__52754;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq52750){
var G__52751 = cljs.core.first.call(null,seq52750);
var seq52750__$1 = cljs.core.next.call(null,seq52750);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__52751,seq52750__$1);
});


//# sourceMappingURL=format.js.map?rel=1507178386921
