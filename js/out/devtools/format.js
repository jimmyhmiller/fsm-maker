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
var o42690 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42690["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42691 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42691["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42692 = temp__4655__auto____$2;
return (o42692["make_template"]);
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
var o42693 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42693["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42694 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42694["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42695 = temp__4655__auto____$2;
return (o42695["make_group"]);
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
var o42696 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42696["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42697 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42697["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42698 = temp__4655__auto____$2;
return (o42698["make_reference"]);
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
var o42699 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42699["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42700 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42700["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42701 = temp__4655__auto____$2;
return (o42701["make_surrogate"]);
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
var o42702 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42702["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42703 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42703["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42704 = temp__4655__auto____$2;
return (o42704["render_markup"]);
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
var o42705 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42705["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42706 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42706["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42707 = temp__4655__auto____$2;
return (o42707["_LT_header_GT_"]);
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
var o42708 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42708["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42709 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42709["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42710 = temp__4655__auto____$2;
return (o42710["_LT_standard_body_GT_"]);
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
var len__38918__auto___42712 = arguments.length;
var i__38919__auto___42713 = (0);
while(true){
if((i__38919__auto___42713 < len__38918__auto___42712)){
args__38925__auto__.push((arguments[i__38919__auto___42713]));

var G__42714 = (i__38919__auto___42713 + (1));
i__38919__auto___42713 = G__42714;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42711){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42711));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42716 = arguments.length;
var i__38919__auto___42717 = (0);
while(true){
if((i__38919__auto___42717 < len__38918__auto___42716)){
args__38925__auto__.push((arguments[i__38919__auto___42717]));

var G__42718 = (i__38919__auto___42717 + (1));
i__38919__auto___42717 = G__42718;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq42715){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42715));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42720 = arguments.length;
var i__38919__auto___42721 = (0);
while(true){
if((i__38919__auto___42721 < len__38918__auto___42720)){
args__38925__auto__.push((arguments[i__38919__auto___42721]));

var G__42722 = (i__38919__auto___42721 + (1));
i__38919__auto___42721 = G__42722;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq42719){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42719));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42724 = arguments.length;
var i__38919__auto___42725 = (0);
while(true){
if((i__38919__auto___42725 < len__38918__auto___42724)){
args__38925__auto__.push((arguments[i__38919__auto___42725]));

var G__42726 = (i__38919__auto___42725 + (1));
i__38919__auto___42725 = G__42726;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42723){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42723));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42728 = arguments.length;
var i__38919__auto___42729 = (0);
while(true){
if((i__38919__auto___42729 < len__38918__auto___42728)){
args__38925__auto__.push((arguments[i__38919__auto___42729]));

var G__42730 = (i__38919__auto___42729 + (1));
i__38919__auto___42729 = G__42730;
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

devtools.format.template.cljs$lang$applyTo = (function (seq42727){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42727));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42732 = arguments.length;
var i__38919__auto___42733 = (0);
while(true){
if((i__38919__auto___42733 < len__38918__auto___42732)){
args__38925__auto__.push((arguments[i__38919__auto___42733]));

var G__42734 = (i__38919__auto___42733 + (1));
i__38919__auto___42733 = G__42734;
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

devtools.format.group.cljs$lang$applyTo = (function (seq42731){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42731));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42736 = arguments.length;
var i__38919__auto___42737 = (0);
while(true){
if((i__38919__auto___42737 < len__38918__auto___42736)){
args__38925__auto__.push((arguments[i__38919__auto___42737]));

var G__42738 = (i__38919__auto___42737 + (1));
i__38919__auto___42737 = G__42738;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42735){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42735));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42746 = arguments.length;
var i__38919__auto___42747 = (0);
while(true){
if((i__38919__auto___42747 < len__38918__auto___42746)){
args__38925__auto__.push((arguments[i__38919__auto___42747]));

var G__42748 = (i__38919__auto___42747 + (1));
i__38919__auto___42747 = G__42748;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42742){
var vec__42743 = p__42742;
var state_override = cljs.core.nth.call(null,vec__42743,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42743,state_override){
return (function (p1__42739_SHARP_){
return cljs.core.merge.call(null,p1__42739_SHARP_,state_override);
});})(vec__42743,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42740){
var G__42741 = cljs.core.first.call(null,seq42740);
var seq42740__$1 = cljs.core.next.call(null,seq42740);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42741,seq42740__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42750 = arguments.length;
var i__38919__auto___42751 = (0);
while(true){
if((i__38919__auto___42751 < len__38918__auto___42750)){
args__38925__auto__.push((arguments[i__38919__auto___42751]));

var G__42752 = (i__38919__auto___42751 + (1));
i__38919__auto___42751 = G__42752;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq42749){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42749));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__38925__auto__ = [];
var len__38918__auto___42755 = arguments.length;
var i__38919__auto___42756 = (0);
while(true){
if((i__38919__auto___42756 < len__38918__auto___42755)){
args__38925__auto__.push((arguments[i__38919__auto___42756]));

var G__42757 = (i__38919__auto___42756 + (1));
i__38919__auto___42756 = G__42757;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42753){
var G__42754 = cljs.core.first.call(null,seq42753);
var seq42753__$1 = cljs.core.next.call(null,seq42753);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42754,seq42753__$1);
});


//# sourceMappingURL=format.js.map?rel=1507334713126
