// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$epsilon], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * Between m and n repetitions
 */
instaparse.combinators_source.rep = (function instaparse$combinators_source$rep(m,n,parser){
if((m <= n)){
} else {
throw (new Error("Assert failed: (<= m n)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,cljs.core.cst$kw$rep,cljs.core.cst$kw$parser,parser,cljs.core.cst$kw$min,m,cljs.core.cst$kw$max,n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__8821__auto__ = [];
var len__8814__auto___13311 = arguments.length;
var i__8815__auto___13312 = (0);
while(true){
if((i__8815__auto___13312 < len__8814__auto___13311)){
args__8821__auto__.push((arguments[i__8815__auto___13312]));

var G__13313 = (i__8815__auto___13312 + (1));
i__8815__auto___13312 = G__13313;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parsers))){
return cljs.core.first(parsers);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,parsers], null);

}
}
});

instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0);

instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq13310){
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13310));
});

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$ord,cljs.core.cst$kw$parser1,parser1,cljs.core.cst$kw$parser2,parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__13317 = arguments.length;
switch (G__13317) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___13319 = arguments.length;
var i__8815__auto___13320 = (0);
while(true){
if((i__8815__auto___13320 < len__8814__auto___13319)){
args_arr__8833__auto__.push((arguments[i__8815__auto___13320]));

var G__13321 = (i__8815__auto___13320 + (1));
i__8815__auto___13320 = G__13321;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((1)),(0),null));
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8834__auto__);

}
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = (function (){
return instaparse.combinators_source.Epsilon;
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = (function (parser1,parsers){
var parsers__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers):parsers);
if(cljs.core.seq(parsers__$1)){
return instaparse.combinators_source.ord2(parser1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,parsers__$1));
} else {
return parser1;
}
});

instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq13315){
var G__13316 = cljs.core.first(seq13315);
var seq13315__$1 = cljs.core.next(seq13315);
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic(G__13316,seq13315__$1);
});

instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1);

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__8821__auto__ = [];
var len__8814__auto___13323 = arguments.length;
var i__8815__auto___13324 = (0);
while(true){
if((i__8815__auto___13324 < len__8814__auto___13323)){
args__8821__auto__.push((arguments[i__8815__auto___13324]));

var G__13325 = (i__8815__auto___13324 + (1));
i__8815__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
var parsers__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parsers__$1))){
return cljs.core.first(parsers__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,parsers__$1], null);
}
}
});

instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0);

instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq13322){
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13322));
});

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string_DASH_ci,cljs.core.cst$kw$string,s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var G__13327 = arguments.length;
switch (G__13327) {
case 1:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = (function (code_point){
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(code_point,code_point);
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
if((lo <= hi)){
} else {
throw (new Error(["Assert failed: ","Character range minimum must be less than or equal the maximum","\n","(<= lo hi)"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null);
});

instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2;

/**
 * JavaScript regexes have no .lookingAt method, so in cljs we just
 *   add a '^' character to the front of the regex.
 */
instaparse.combinators_source.add_beginning_constraint = (function instaparse$combinators_source$add_beginning_constraint(r){
if(cljs.core.regexp_QMARK_(r)){
return cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.source)].join(''));
} else {
return r;
}
});
/**
 * Create a regexp terminal out of regular expression r
 */
instaparse.combinators_source.regexp = (function instaparse$combinators_source$regexp(r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$regexp,instaparse.combinators_source.add_beginning_constraint(cljs.core.re_pattern(r))], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$look,cljs.core.cst$kw$parser,parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$neg,cljs.core.cst$kw$parser,parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$hide,true);
});
/**
 * Hide the tag associated with this rule.  
 *   Wrap this combinator around the entire right-hand side.
 */
instaparse.combinators_source.hide_tag = (function instaparse$combinators_source$hide_tag(parser){
return instaparse.reduction.red(parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Tests whether parser was created with hide-tag combinator
 */
instaparse.combinators_source.hidden_tag_QMARK_ = (function instaparse$combinators_source$hidden_tag_QMARK_(parser){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$hide):parser);
if(cljs.core.truth_(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.cst$kw$parser,(function (){var G__13329 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__13329) : instaparse.combinators_source.unhide_content.call(null,G__13329));
})());
} else {
if(cljs.core.truth_(cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.unhide_content,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser__$1),cljs.core.cst$kw$ord)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,cljs.core.cst$kw$parser1,(function (){var G__13330 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__13330) : instaparse.combinators_source.unhide_content.call(null,G__13330));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parser2,(function (){var G__13331 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__13331) : instaparse.combinators_source.unhide_content.call(null,G__13331));
})()], 0));
} else {
return parser__$1;

}
}
}
});
/**
 * Recursively undoes the effect of hide on all parsers in the grammar
 */
instaparse.combinators_source.unhide_all_content = (function instaparse$combinators_source$unhide_all_content(grammar){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__13332(s__13333){
return (new cljs.core.LazySeq(null,(function (){
var s__13333__$1 = s__13333;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13333__$1);
if(temp__4657__auto__){
var s__13333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13333__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13333__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13335 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13334 = (0);
while(true){
if((i__13334 < size__8452__auto__)){
var vec__13336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13334);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13336,(1),null);
cljs.core.chunk_append(b__13335,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));

var G__13342 = (i__13334 + (1));
i__13334 = G__13342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13335),instaparse$combinators_source$unhide_all_content_$_iter__13332(cljs.core.chunk_rest(s__13333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13335),null);
}
} else {
var vec__13339 = cljs.core.first(s__13333__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13339,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),instaparse$combinators_source$unhide_all_content_$_iter__13332(cljs.core.rest(s__13333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__4655__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_tags_$_iter__13343(s__13344){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__13344__$1 = s__13344;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13344__$1);
if(temp__4657__auto__){
var s__13344__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13344__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13344__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13346 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13345 = (0);
while(true){
if((i__13345 < size__8452__auto__)){
var vec__13347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13345);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13347,(1),null);
cljs.core.chunk_append(b__13346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__13353 = (i__13345 + (1));
i__13345 = G__13353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13346),instaparse$combinators_source$unhide_tags_$_iter__13343(cljs.core.chunk_rest(s__13344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13346),null);
}
} else {
var vec__13350 = cljs.core.first(s__13344__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_tags_$_iter__13343(cljs.core.rest(s__13344__$2)));
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
/**
 * Recursively undoes the effect of both hide and hide-tag
 */
instaparse.combinators_source.unhide_all = (function instaparse$combinators_source$unhide_all(reduction_type,grammar){
var temp__4655__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_all_$_iter__13354(s__13355){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__13355__$1 = s__13355;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13355__$1);
if(temp__4657__auto__){
var s__13355__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13355__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13355__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13357 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13356 = (0);
while(true){
if((i__13356 < size__8452__auto__)){
var vec__13358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(1),null);
cljs.core.chunk_append(b__13357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__13364 = (i__13356 + (1));
i__13356 = G__13364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13357),instaparse$combinators_source$unhide_all_$_iter__13354(cljs.core.chunk_rest(s__13355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13357),null);
}
} else {
var vec__13361 = cljs.core.first(s__13355__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_all_$_iter__13354(cljs.core.rest(s__13355__$2)));
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
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__13366 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__13366__$1 = (((G__13366 instanceof cljs.core.Keyword))?G__13366.fqn:null);
switch (G__13366__$1) {
case "nt":
case "epsilon":
return parser;

break;
case "opt":
case "plus":
case "star":
case "rep":
case "look":
case "neg":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse.combinators_source.auto_whitespace_parser,ws_parser);

break;
case "alt":
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13366,G__13366__$1){
return (function (p1__13365_SHARP_){
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(p1__13365_SHARP_,ws_parser) : instaparse.combinators_source.auto_whitespace_parser.call(null,p1__13365_SHARP_,ws_parser));
});})(G__13366,G__13366__$1))
,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,cljs.core.cst$kw$parser1,(function (){var G__13367 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser);
var G__13368 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__13367,G__13368) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__13367,G__13368));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parser2,(function (){var G__13369 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser);
var G__13370 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__13369,G__13370) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__13369,G__13370));
})()], 0));

break;
case "string":
case "string-ci":
case "regexp":
if(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$red)], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,parser], 0));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13366__$1)].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));
var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(start_ws) : grammar_ws.call(null,start_ws))));
var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function instaparse$combinators_source$auto_whitespace_$_iter__13372(s__13373){
return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){
var s__13373__$1 = s__13373;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13373__$1);
if(temp__4657__auto__){
var s__13373__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13373__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13373__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13375 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13374 = (0);
while(true){
if((i__13374 < size__8452__auto__)){
var vec__13376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13374);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13376,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13376,(1),null);
cljs.core.chunk_append(b__13375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));

var G__13382 = (i__13374 + (1));
i__13374 = G__13382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13375),instaparse$combinators_source$auto_whitespace_$_iter__13372(cljs.core.chunk_rest(s__13373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13375),null);
}
} else {
var vec__13379 = cljs.core.first(s__13373__$2);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13379,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13379,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__13372(cljs.core.rest(s__13373__$2)));
}
} else {
return null;
}
break;
}
});})(ws_parser,grammar_ws__$1))
,null,null));
});})(ws_parser,grammar_ws__$1))
;
return iter__8453__auto__(grammar);
})());
var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)),cljs.core.cst$kw$red),ws_parser], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([final_grammar,grammar_ws__$1], 0));
});
