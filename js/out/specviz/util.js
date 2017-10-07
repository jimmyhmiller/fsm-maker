// Compiled by ClojureScript 1.9.908 {}
goog.provide('specviz.util');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
/**
 * Add line numbers to strings, for debugging.
 */
specviz.util.add_line_no = (function specviz$util$add_line_no(s){
return clojure.string.join.call(null,"\n",cljs.core.map_indexed.call(null,(function (idx,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
}),clojure.string.split_lines.call(null,s)));
});
specviz.util.concatv = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
/**
 * Returns the first item in x, if x is sequential, else x.
 */
specviz.util.first_STAR_ = (function specviz$util$first_STAR_(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.first.call(null,x);
} else {
return x;
}
});
specviz.util.escape_quotes = (function specviz$util$escape_quotes(s){
return clojure.string.replace.call(null,s,"\"","\\\"");
});
/**
 * Remove 'clojure.core/' prefix from a string.
 */
specviz.util.strip_core = (function specviz$util$strip_core(s){
return clojure.string.replace.call(null,s,"clojure.core/","");
});

//# sourceMappingURL=util.js.map?rel=1507334718268
