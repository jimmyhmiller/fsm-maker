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
var G__46033 = (line + (1));
var G__46034 = (1);
var G__46035 = (counter + (1));
line = G__46033;
col = G__46034;
counter = G__46035;
continue;
} else {
var G__46036 = line;
var G__46037 = (col + (1));
var G__46038 = (counter + (1));
line = G__46036;
col = G__46037;
counter = G__46038;
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
var G__46039 = cljs.core.next.call(null,chars);
var G__46040 = (n__$1 - (1));
chars = G__46039;
n__$1 = G__46040;
continue;
} else {
var G__46041 = cljs.core.next.call(null,chars);
var G__46042 = n__$1;
chars = G__46041;
n__$1 = G__46042;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46043){
var map__46044 = p__46043;
var map__46044__$1 = ((((!((map__46044 == null)))?((((map__46044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46044):map__46044);
var line = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__46046_46054 = cljs.core.seq.call(null,full_reasons);
var chunk__46047_46055 = null;
var count__46048_46056 = (0);
var i__46049_46057 = (0);
while(true){
if((i__46049_46057 < count__46048_46056)){
var r_46058 = cljs.core._nth.call(null,chunk__46047_46055,i__46049_46057);
instaparse.failure.print_reason.call(null,r_46058);

cljs.core.println.call(null," (followed by end-of-string)");

var G__46059 = seq__46046_46054;
var G__46060 = chunk__46047_46055;
var G__46061 = count__46048_46056;
var G__46062 = (i__46049_46057 + (1));
seq__46046_46054 = G__46059;
chunk__46047_46055 = G__46060;
count__46048_46056 = G__46061;
i__46049_46057 = G__46062;
continue;
} else {
var temp__4657__auto___46063 = cljs.core.seq.call(null,seq__46046_46054);
if(temp__4657__auto___46063){
var seq__46046_46064__$1 = temp__4657__auto___46063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46046_46064__$1)){
var c__38588__auto___46065 = cljs.core.chunk_first.call(null,seq__46046_46064__$1);
var G__46066 = cljs.core.chunk_rest.call(null,seq__46046_46064__$1);
var G__46067 = c__38588__auto___46065;
var G__46068 = cljs.core.count.call(null,c__38588__auto___46065);
var G__46069 = (0);
seq__46046_46054 = G__46066;
chunk__46047_46055 = G__46067;
count__46048_46056 = G__46068;
i__46049_46057 = G__46069;
continue;
} else {
var r_46070 = cljs.core.first.call(null,seq__46046_46064__$1);
instaparse.failure.print_reason.call(null,r_46070);

cljs.core.println.call(null," (followed by end-of-string)");

var G__46071 = cljs.core.next.call(null,seq__46046_46064__$1);
var G__46072 = null;
var G__46073 = (0);
var G__46074 = (0);
seq__46046_46054 = G__46071;
chunk__46047_46055 = G__46072;
count__46048_46056 = G__46073;
i__46049_46057 = G__46074;
continue;
}
} else {
}
}
break;
}

var seq__46050 = cljs.core.seq.call(null,partial_reasons);
var chunk__46051 = null;
var count__46052 = (0);
var i__46053 = (0);
while(true){
if((i__46053 < count__46052)){
var r = cljs.core._nth.call(null,chunk__46051,i__46053);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__46075 = seq__46050;
var G__46076 = chunk__46051;
var G__46077 = count__46052;
var G__46078 = (i__46053 + (1));
seq__46050 = G__46075;
chunk__46051 = G__46076;
count__46052 = G__46077;
i__46053 = G__46078;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46050);
if(temp__4657__auto__){
var seq__46050__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46050__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__46050__$1);
var G__46079 = cljs.core.chunk_rest.call(null,seq__46050__$1);
var G__46080 = c__38588__auto__;
var G__46081 = cljs.core.count.call(null,c__38588__auto__);
var G__46082 = (0);
seq__46050 = G__46079;
chunk__46051 = G__46080;
count__46052 = G__46081;
i__46053 = G__46082;
continue;
} else {
var r = cljs.core.first.call(null,seq__46050__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__46083 = cljs.core.next.call(null,seq__46050__$1);
var G__46084 = null;
var G__46085 = (0);
var G__46086 = (0);
seq__46050 = G__46083;
chunk__46051 = G__46084;
count__46052 = G__46085;
i__46053 = G__46086;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1507334719798
