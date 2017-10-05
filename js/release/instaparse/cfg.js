// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.gll');
goog.require('instaparse.util');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
/**
 * When true all string literal terminals in built grammar will be treated as case insensitive
 */
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = false;
/**
 * Adds a comment to a Clojure regex, or no-op in ClojureScript
 */
instaparse.cfg.regex_doc = (function instaparse$cfg$regex_doc(pattern_str,comment){
return cljs.core.re_pattern(pattern_str);
});
instaparse.cfg.single_quoted_string = instaparse.cfg.regex_doc(/'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted string");
instaparse.cfg.single_quoted_regexp = instaparse.cfg.regex_doc(/#'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted regexp");
instaparse.cfg.double_quoted_string = instaparse.cfg.regex_doc(/\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted string");
instaparse.cfg.double_quoted_regexp = instaparse.cfg.regex_doc(/#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted regexp");
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = instaparse.cfg.regex_doc("[,\\s]*","optional whitespace");
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hiccup,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$cat,cljs.core.cst$kw$ord,cljs.core.cst$kw$rule_DASH_separator,cljs.core.cst$kw$alt,cljs.core.cst$kw$look,cljs.core.cst$kw$rule,cljs.core.cst$kw$nt,cljs.core.cst$kw$hide_DASH_nt,cljs.core.cst$kw$inside_DASH_comment,cljs.core.cst$kw$star,cljs.core.cst$kw$string,cljs.core.cst$kw$rules,cljs.core.cst$kw$hide,cljs.core.cst$kw$paren,cljs.core.cst$kw$alt_DASH_or_DASH_ord,cljs.core.cst$kw$regexp,cljs.core.cst$kw$factor,cljs.core.cst$kw$comment,cljs.core.cst$kw$plus,cljs.core.cst$kw$epsilon,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$rules_DASH_or_DASH_parser,cljs.core.cst$kw$opt],[instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$factor)], 0)),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.combinators_source.nt(cljs.core.cst$kw$look),instaparse.combinators_source.nt(cljs.core.cst$kw$neg)], 0)),instaparse.cfg.opt_whitespace], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$cat),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$cat)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(":"),instaparse.combinators_source.string(":="),instaparse.combinators_source.string("::="),instaparse.combinators_source.string("=")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$cat),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$cat)], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$factor)], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.combinators_source.nt(cljs.core.cst$kw$hide_DASH_nt)], 0)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.cst$kw$rule_DASH_separator)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.combinators_source.hide(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(";"),instaparse.combinators_source.string(".")], 0)),instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace)], 0))], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.neg(instaparse.combinators_source.nt(cljs.core.cst$kw$epsilon)),instaparse.combinators_source.regexp(instaparse.cfg.regex_doc("[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+","Non-terminal"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.inside_comment),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$comment),instaparse.combinators_source.regexp(instaparse.cfg.inside_comment)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("}"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("*"))], 0))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_string)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus(instaparse.combinators_source.nt(cljs.core.cst$kw$rule))], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(")"))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$alt),instaparse.combinators_source.nt(cljs.core.cst$kw$ord)], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_regexp)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.combinators_source.nt(cljs.core.cst$kw$string),instaparse.combinators_source.nt(cljs.core.cst$kw$regexp),instaparse.combinators_source.nt(cljs.core.cst$kw$opt),instaparse.combinators_source.nt(cljs.core.cst$kw$star),instaparse.combinators_source.nt(cljs.core.cst$kw$plus),instaparse.combinators_source.nt(cljs.core.cst$kw$paren),instaparse.combinators_source.nt(cljs.core.cst$kw$hide),instaparse.combinators_source.nt(cljs.core.cst$kw$epsilon)], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("(*"),instaparse.combinators_source.nt(cljs.core.cst$kw$inside_DASH_comment),instaparse.combinators_source.string("*)")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("+"))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("Epsilon"),instaparse.combinators_source.string("epsilon"),instaparse.combinators_source.string("EPSILON"),instaparse.combinators_source.string("eps"),instaparse.combinators_source.string("\u03B5")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.ws),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$comment),instaparse.combinators_source.regexp(instaparse.cfg.ws)], 0)))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$rules),instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord)], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("]"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("?"))], 0))], 0))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
 * Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
 */
instaparse.cfg.escape = (function instaparse$cfg$escape(s){
var sq = cljs.core.seq(s);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first(sq);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
var G__16645 = c;
switch (G__16645) {
case "\\":
var temp__4655__auto____$1 = cljs.core.second(sq);
if(cljs.core.truth_(temp__4655__auto____$1)){
var c2 = temp__4655__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"'")){
var G__16647 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__16648 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c2);
sq = G__16647;
v = G__16648;
continue;
} else {
var G__16649 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__16650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c2], 0));
sq = G__16649;
v = G__16650;
continue;
}
} else {
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Encountered backslash character at end of string: ",s], 0));
}

break;
case "\"":
var G__16651 = cljs.core.next(sq);
var G__16652 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,"\\",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\""], 0));
sq = G__16651;
v = G__16652;
continue;

break;
default:
var G__16653 = cljs.core.next(sq);
var G__16654 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c);
sq = G__16653;
v = G__16654;
continue;

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v);
}
break;
}
});
instaparse.cfg.safe_read_string = (function instaparse$cfg$safe_read_string(s){
return cljs.tools.reader.read_string_STAR_(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s),null,null,null);
});
/**
 * Converts single quoted string to double-quoted
 */
instaparse.cfg.process_string = (function instaparse$cfg$process_string(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = instaparse.cfg.safe_read_string([cljs.core.str.cljs$core$IFn$_invoke$arity$1(remove_escaped_single_quotes),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
return final_string;
});
/**
 * Converts single quoted regexp to double-quoted
 */
instaparse.cfg.process_regexp = (function instaparse$cfg$process_regexp(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = cljs.core.re_pattern(remove_escaped_single_quotes);
return final_string;
});
/**
 * Convert one parsed rule from the grammar into combinators
 */
instaparse.cfg.build_rule = (function instaparse$cfg$build_rule(tree){
while(true){
var G__16655 = (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.tag.call(null,tree));
var G__16655__$1 = (((G__16655 instanceof cljs.core.Keyword))?G__16655.fqn:null);
switch (G__16655__$1) {
case "rule":
var vec__16656 = (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree));
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(0),null);
var alt_or_ord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.tag.call(null,nt)),cljs.core.cst$kw$hide_DASH_nt)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__16659 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt));
return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__16659) : instaparse.cfg.content.call(null,G__16659));
})()),instaparse.combinators_source.hide_tag((instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(alt_or_ord) : instaparse.cfg.build_rule.call(null,alt_or_ord)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt))),(instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(alt_or_ord) : instaparse.cfg.build_rule.call(null,alt_or_ord))], null);
}

break;
case "nt":
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "alt":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "ord":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "paren":
var G__16669 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
tree = G__16669;
continue;

break;
case "hide":
return instaparse.combinators_source.hide((function (){var G__16660 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__16660) : instaparse.cfg.build_rule.call(null,G__16660));
})());

break;
case "cat":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "string":
var G__16662 = instaparse.cfg.process_string((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree)));
var fexpr__16661 = ((instaparse.cfg._STAR_case_insensitive_literals_STAR_)?instaparse.combinators_source.string_ci:instaparse.combinators_source.string);
return (fexpr__16661.cljs$core$IFn$_invoke$arity$1 ? fexpr__16661.cljs$core$IFn$_invoke$arity$1(G__16662) : fexpr__16661.call(null,G__16662));

break;
case "regexp":
return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "opt":
return instaparse.combinators_source.opt((function (){var G__16663 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__16663) : instaparse.cfg.build_rule.call(null,G__16663));
})());

break;
case "star":
return instaparse.combinators_source.star((function (){var G__16664 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__16664) : instaparse.cfg.build_rule.call(null,G__16664));
})());

break;
case "plus":
return instaparse.combinators_source.plus((function (){var G__16665 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__16665) : instaparse.cfg.build_rule.call(null,G__16665));
})());

break;
case "look":
return instaparse.combinators_source.look((function (){var G__16666 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__16666) : instaparse.cfg.build_rule.call(null,G__16666));
})());

break;
case "neg":
return instaparse.combinators_source.neg((function (){var G__16667 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__16667) : instaparse.cfg.build_rule.call(null,G__16667));
})());

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16655__$1)].join('')));

}
break;
}
});
/**
 * Returns a sequence of all non-terminals in a parser built from combinators.
 */
instaparse.cfg.seq_nt = (function instaparse$cfg$seq_nt(parser){
while(true){
var G__16670 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__16670__$1 = (((G__16670 instanceof cljs.core.Keyword))?G__16670.fqn:null);
switch (G__16670__$1) {
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "string":
case "string-ci":
case "char":
case "regexp":
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
case "plus":
case "star":
case "look":
case "neg":
case "rep":
var G__16672 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__16672;
continue;

break;
case "alt":
case "cat":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "ord":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser)], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16670__$1)].join('')));

}
break;
}
});
/**
 * Throw error if grammar uses any invalid non-terminals in its productions
 */
instaparse.cfg.check_grammar = (function instaparse$cfg$check_grammar(grammar_map){
var valid_nts_16677 = cljs.core.set(cljs.core.keys(grammar_map));
var seq__16673_16678 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(grammar_map)], 0))));
var chunk__16674_16679 = null;
var count__16675_16680 = (0);
var i__16676_16681 = (0);
while(true){
if((i__16676_16681 < count__16675_16680)){
var nt_16682 = chunk__16674_16679.cljs$core$IIndexed$_nth$arity$2(null,i__16676_16681);
if(cljs.core.truth_((valid_nts_16677.cljs$core$IFn$_invoke$arity$1 ? valid_nts_16677.cljs$core$IFn$_invoke$arity$1(nt_16682) : valid_nts_16677.call(null,nt_16682)))){
} else {
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_16682)].join(''),(1))," occurs on the right-hand side of your grammar, but not on the left"], 0));
}

var G__16683 = seq__16673_16678;
var G__16684 = chunk__16674_16679;
var G__16685 = count__16675_16680;
var G__16686 = (i__16676_16681 + (1));
seq__16673_16678 = G__16683;
chunk__16674_16679 = G__16684;
count__16675_16680 = G__16685;
i__16676_16681 = G__16686;
continue;
} else {
var temp__4657__auto___16687 = cljs.core.seq(seq__16673_16678);
if(temp__4657__auto___16687){
var seq__16673_16688__$1 = temp__4657__auto___16687;
if(cljs.core.chunked_seq_QMARK_(seq__16673_16688__$1)){
var c__8484__auto___16689 = cljs.core.chunk_first(seq__16673_16688__$1);
var G__16690 = cljs.core.chunk_rest(seq__16673_16688__$1);
var G__16691 = c__8484__auto___16689;
var G__16692 = cljs.core.count(c__8484__auto___16689);
var G__16693 = (0);
seq__16673_16678 = G__16690;
chunk__16674_16679 = G__16691;
count__16675_16680 = G__16692;
i__16676_16681 = G__16693;
continue;
} else {
var nt_16694 = cljs.core.first(seq__16673_16688__$1);
if(cljs.core.truth_((valid_nts_16677.cljs$core$IFn$_invoke$arity$1 ? valid_nts_16677.cljs$core$IFn$_invoke$arity$1(nt_16694) : valid_nts_16677.call(null,nt_16694)))){
} else {
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_16694)].join(''),(1))," occurs on the right-hand side of your grammar, but not on the left"], 0));
}

var G__16695 = cljs.core.next(seq__16673_16688__$1);
var G__16696 = null;
var G__16697 = (0);
var G__16698 = (0);
seq__16673_16678 = G__16695;
chunk__16674_16679 = G__16696;
count__16675_16680 = G__16697;
i__16676_16681 = G__16698;
continue;
}
} else {
}
}
break;
}

return grammar_map;
});
instaparse.cfg.build_parser = (function instaparse$cfg$build_parser(spec,output_format){
var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$rules,spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16699_16701 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16700_16702 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16699_16701,_STAR_print_fn_STAR_16700_16702,sb__8672__auto__,rules){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_16699_16701,_STAR_print_fn_STAR_16700_16702,sb__8672__auto__,rules))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16700_16702;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16699_16701;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');
})()], 0));
} else {
var productions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules);
var start_production = cljs.core.first(cljs.core.first(productions));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,productions))),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function instaparse$cfg$build_parser_from_combinators(grammar_map,output_format,start_production){
if((start_production == null)){
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument."], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
/**
 * Takes an EBNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.cfg.ebnf = (function instaparse$cfg$ebnf(spec){
var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$rules_DASH_or_DASH_parser,spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16703_16705 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16704_16706 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16703_16705,_STAR_print_fn_STAR_16704_16706,sb__8672__auto__,rules){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_16703_16705,_STAR_print_fn_STAR_16704_16706,sb__8672__auto__,rules))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16704_16706;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16703_16705;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');
})()], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rule,cljs.core.ffirst(rules))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules));
} else {
return instaparse.cfg.build_rule(cljs.core.first(rules));

}
}
});
