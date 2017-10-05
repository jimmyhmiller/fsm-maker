// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__56030 = (line + (1));
var G__56031 = (1);
var G__56032 = (counter + (1));
line = G__56030;
col = G__56031;
counter = G__56032;
continue;
} else {
var G__56033 = line;
var G__56034 = (col + (1));
var G__56035 = (counter + (1));
line = G__56033;
col = G__56034;
counter = G__56035;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.first.call(null,chars))){
var G__56036 = cljs.core.next.call(null,chars);
var G__56037 = (n__$1 - (1));
chars = G__56036;
n__$1 = G__56037;
continue;
} else {
var G__56038 = cljs.core.next.call(null,chars);
var G__56039 = n__$1;
chars = G__56038;
n__$1 = G__56039;
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
if(cljs.core.integer_QMARK_.call(null,n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56040){
var map__56041 = p__56040;
var map__56041__$1 = ((((!((map__56041 == null)))?((((map__56041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56041):map__56041);
var line = cljs.core.get.call(null,map__56041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__56041__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__56041__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join(''));

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__56043_56051 = cljs.core.seq.call(null,full_reasons);
var chunk__56044_56052 = null;
var count__56045_56053 = (0);
var i__56046_56054 = (0);
while(true){
if((i__56046_56054 < count__56045_56053)){
var r_56055 = cljs.core._nth.call(null,chunk__56044_56052,i__56046_56054);
instaparse.failure.print_reason.call(null,r_56055);

cljs.core.println.call(null," (followed by end-of-string)");

var G__56056 = seq__56043_56051;
var G__56057 = chunk__56044_56052;
var G__56058 = count__56045_56053;
var G__56059 = (i__56046_56054 + (1));
seq__56043_56051 = G__56056;
chunk__56044_56052 = G__56057;
count__56045_56053 = G__56058;
i__56046_56054 = G__56059;
continue;
} else {
var temp__4657__auto___56060 = cljs.core.seq.call(null,seq__56043_56051);
if(temp__4657__auto___56060){
var seq__56043_56061__$1 = temp__4657__auto___56060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56043_56061__$1)){
var c__38588__auto___56062 = cljs.core.chunk_first.call(null,seq__56043_56061__$1);
var G__56063 = cljs.core.chunk_rest.call(null,seq__56043_56061__$1);
var G__56064 = c__38588__auto___56062;
var G__56065 = cljs.core.count.call(null,c__38588__auto___56062);
var G__56066 = (0);
seq__56043_56051 = G__56063;
chunk__56044_56052 = G__56064;
count__56045_56053 = G__56065;
i__56046_56054 = G__56066;
continue;
} else {
var r_56067 = cljs.core.first.call(null,seq__56043_56061__$1);
instaparse.failure.print_reason.call(null,r_56067);

cljs.core.println.call(null," (followed by end-of-string)");

var G__56068 = cljs.core.next.call(null,seq__56043_56061__$1);
var G__56069 = null;
var G__56070 = (0);
var G__56071 = (0);
seq__56043_56051 = G__56068;
chunk__56044_56052 = G__56069;
count__56045_56053 = G__56070;
i__56046_56054 = G__56071;
continue;
}
} else {
}
}
break;
}

var seq__56047 = cljs.core.seq.call(null,partial_reasons);
var chunk__56048 = null;
var count__56049 = (0);
var i__56050 = (0);
while(true){
if((i__56050 < count__56049)){
var r = cljs.core._nth.call(null,chunk__56048,i__56050);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__56072 = seq__56047;
var G__56073 = chunk__56048;
var G__56074 = count__56049;
var G__56075 = (i__56050 + (1));
seq__56047 = G__56072;
chunk__56048 = G__56073;
count__56049 = G__56074;
i__56050 = G__56075;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56047);
if(temp__4657__auto__){
var seq__56047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56047__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__56047__$1);
var G__56076 = cljs.core.chunk_rest.call(null,seq__56047__$1);
var G__56077 = c__38588__auto__;
var G__56078 = cljs.core.count.call(null,c__38588__auto__);
var G__56079 = (0);
seq__56047 = G__56076;
chunk__56048 = G__56077;
count__56049 = G__56078;
i__56050 = G__56079;
continue;
} else {
var r = cljs.core.first.call(null,seq__56047__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__56080 = cljs.core.next.call(null,seq__56047__$1);
var G__56081 = null;
var G__56082 = (0);
var G__56083 = (0);
seq__56047 = G__56080;
chunk__56048 = G__56081;
count__56049 = G__56082;
i__56050 = G__56083;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1507178393095
