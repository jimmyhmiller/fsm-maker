// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('specviz.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
/**
 * Add line numbers to strings, for debugging.
 */
specviz.util.add_line_no = (function specviz$util$add_line_no(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
}),clojure.string.split_lines(s)));
});
specviz.util.concatv = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.concat);
/**
 * Returns the first item in x, if x is sequential, else x.
 */
specviz.util.first_STAR_ = (function specviz$util$first_STAR_(x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.first(x);
} else {
return x;
}
});
specviz.util.escape_quotes = (function specviz$util$escape_quotes(s){
return clojure.string.replace(s,"\"","\\\"");
});
/**
 * Remove 'clojure.core/' prefix from a string.
 */
specviz.util.strip_core = (function specviz$util$strip_core(s){
return clojure.string.replace(s,"clojure.core/","");
});
