// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__14966 = (line + (1));
var G__14967 = (1);
var G__14968 = (counter + (1));
line = G__14966;
col = G__14967;
counter = G__14968;
continue;
} else {
var G__14969 = line;
var G__14970 = (col + (1));
var G__14971 = (counter + (1));
line = G__14969;
col = G__14970;
counter = G__14971;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__14972 = cljs.core.next(chars);
var G__14973 = (n__$1 - (1));
chars = G__14972;
n__$1 = G__14973;
continue;
} else {
var G__14974 = cljs.core.next(chars);
var G__14975 = n__$1;
chars = G__14974;
n__$1 = G__14975;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,instaparse.failure.get_line(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$char_DASH_range.cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__14976){
var map__14977 = p__14976;
var map__14977__$1 = ((((!((map__14977 == null)))?((((map__14977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14977):map__14977);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14977__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14977__$1,cljs.core.cst$kw$column);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14977__$1,cljs.core.cst$kw$text);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14977__$1,cljs.core.cst$kw$reason);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$full,reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.cst$kw$full),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__14979_14987 = cljs.core.seq(full_reasons);
var chunk__14980_14988 = null;
var count__14981_14989 = (0);
var i__14982_14990 = (0);
while(true){
if((i__14982_14990 < count__14981_14989)){
var r_14991 = chunk__14980_14988.cljs$core$IIndexed$_nth$arity$2(null,i__14982_14990);
instaparse.failure.print_reason(r_14991);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));

var G__14992 = seq__14979_14987;
var G__14993 = chunk__14980_14988;
var G__14994 = count__14981_14989;
var G__14995 = (i__14982_14990 + (1));
seq__14979_14987 = G__14992;
chunk__14980_14988 = G__14993;
count__14981_14989 = G__14994;
i__14982_14990 = G__14995;
continue;
} else {
var temp__4657__auto___14996 = cljs.core.seq(seq__14979_14987);
if(temp__4657__auto___14996){
var seq__14979_14997__$1 = temp__4657__auto___14996;
if(cljs.core.chunked_seq_QMARK_(seq__14979_14997__$1)){
var c__8484__auto___14998 = cljs.core.chunk_first(seq__14979_14997__$1);
var G__14999 = cljs.core.chunk_rest(seq__14979_14997__$1);
var G__15000 = c__8484__auto___14998;
var G__15001 = cljs.core.count(c__8484__auto___14998);
var G__15002 = (0);
seq__14979_14987 = G__14999;
chunk__14980_14988 = G__15000;
count__14981_14989 = G__15001;
i__14982_14990 = G__15002;
continue;
} else {
var r_15003 = cljs.core.first(seq__14979_14997__$1);
instaparse.failure.print_reason(r_15003);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));

var G__15004 = cljs.core.next(seq__14979_14997__$1);
var G__15005 = null;
var G__15006 = (0);
var G__15007 = (0);
seq__14979_14987 = G__15004;
chunk__14980_14988 = G__15005;
count__14981_14989 = G__15006;
i__14982_14990 = G__15007;
continue;
}
} else {
}
}
break;
}

var seq__14983 = cljs.core.seq(partial_reasons);
var chunk__14984 = null;
var count__14985 = (0);
var i__14986 = (0);
while(true){
if((i__14986 < count__14985)){
var r = chunk__14984.cljs$core$IIndexed$_nth$arity$2(null,i__14986);
instaparse.failure.print_reason(r);

cljs.core.println();

var G__15008 = seq__14983;
var G__15009 = chunk__14984;
var G__15010 = count__14985;
var G__15011 = (i__14986 + (1));
seq__14983 = G__15008;
chunk__14984 = G__15009;
count__14985 = G__15010;
i__14986 = G__15011;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14983);
if(temp__4657__auto__){
var seq__14983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14983__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__14983__$1);
var G__15012 = cljs.core.chunk_rest(seq__14983__$1);
var G__15013 = c__8484__auto__;
var G__15014 = cljs.core.count(c__8484__auto__);
var G__15015 = (0);
seq__14983 = G__15012;
chunk__14984 = G__15013;
count__14985 = G__15014;
i__14986 = G__15015;
continue;
} else {
var r = cljs.core.first(seq__14983__$1);
instaparse.failure.print_reason(r);

cljs.core.println();

var G__15016 = cljs.core.next(seq__14983__$1);
var G__15017 = null;
var G__15018 = (0);
var G__15019 = (0);
seq__14983 = G__15016;
chunk__14984 = G__15017;
count__14985 = G__15018;
i__14986 = G__15019;
continue;
}
} else {
return null;
}
}
break;
}
});
