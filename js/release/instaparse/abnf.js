// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.abnf');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.transform');
goog.require('instaparse.cfg');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
goog.require('instaparse.combinators_source');
goog.require('goog.string.format');
goog.require('clojure.walk');
/**
 * This is normally set to false, in which case the non-terminals
 * are treated as case-sensitive, which is NOT the norm
 * for ABNF grammars. If you really want case-insensitivity,
 * bind this to true, in which case all non-terminals
 * will be converted to upper-case internally (which
 * you'll have to keep in mind when transforming).
 */
instaparse.abnf._STAR_case_insensitive_STAR_ = false;
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$CRLF,cljs.core.cst$kw$HTAB,cljs.core.cst$kw$LWSP,cljs.core.cst$kw$LF,cljs.core.cst$kw$VCHAR,cljs.core.cst$kw$DIGIT,cljs.core.cst$kw$SP,cljs.core.cst$kw$HEXDIG,cljs.core.cst$kw$CTL,cljs.core.cst$kw$DQUOTE,cljs.core.cst$kw$WSP,cljs.core.cst$kw$CR,cljs.core.cst$kw$OCTET,cljs.core.cst$kw$ALPHA,cljs.core.cst$kw$CHAR,cljs.core.cst$kw$BIT],[instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.string("\t"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0))], 0)))], 0)),instaparse.combinators_source.string("\n"),instaparse.combinators_source.regexp("[\\u0021-\\u007E]"),instaparse.combinators_source.regexp("[0-9]"),instaparse.combinators_source.string(" "),instaparse.combinators_source.regexp("[0-9a-fA-F]"),instaparse.combinators_source.regexp("[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string("\""),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.string("\r"),instaparse.combinators_source.regexp("[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp("[a-zA-Z]"),instaparse.combinators_source.regexp("[\\u0001-\\u007F]"),instaparse.combinators_source.regexp("[01]")]);
instaparse.abnf.abnf_grammar_common = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\n\n\n(* extra entrypoint to be used by the abnf combinator *)\n<rules-or-parser> = rulelist | alternation;\n  ";
instaparse.abnf.abnf_grammar_clj_only = "\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*(?x) #identifier';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*(?x) # optional whitespace or comments';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*(?x) # whitespace or comments';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'(?x) #Single-quoted regexp\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"(?x) #Double-quoted regexp\"\n";
instaparse.abnf.abnf_grammar_cljs_only = "\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
instaparse.abnf.abnf_parser = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$group,cljs.core.cst$kw$hide_DASH_tag,cljs.core.cst$kw$whitespace,cljs.core.cst$kw$element,cljs.core.cst$kw$hide_DASH_tag_DASH_rule,cljs.core.cst$kw$look,cljs.core.cst$kw$bin_DASH_char,cljs.core.cst$kw$rule,cljs.core.cst$kw$rulename_DASH_right,cljs.core.cst$kw$DIGIT,cljs.core.cst$kw$NUM,cljs.core.cst$kw$char_DASH_val,cljs.core.cst$kw$num_DASH_val,cljs.core.cst$kw$hide,cljs.core.cst$kw$defined_DASH_as,cljs.core.cst$kw$HEXDIG,cljs.core.cst$kw$option,cljs.core.cst$kw$hex_DASH_char,cljs.core.cst$kw$rulename,cljs.core.cst$kw$bin_DASH_val,cljs.core.cst$kw$dec_DASH_val,cljs.core.cst$kw$concatenation,cljs.core.cst$kw$alternation,cljs.core.cst$kw$regexp,cljs.core.cst$kw$repetition,cljs.core.cst$kw$rulename_DASH_left,cljs.core.cst$kw$rulelist,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$repeat,cljs.core.cst$kw$hex_DASH_val,cljs.core.cst$kw$dec_DASH_char,cljs.core.cst$kw$rules_DASH_or_DASH_parser],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"!"], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$element], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$neg], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"("], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,")"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"<"], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename_DASH_left], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,">"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s+(?:;.*?\\u000D?\\u000A\\s*)*"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$whitespace], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename_DASH_right], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$group], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hide], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$option], null);
return cljs.core._conj((function (){var x__8507__auto____$4 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$char_DASH_val], null);
return cljs.core._conj((function (){var x__8507__auto____$5 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$num_DASH_val], null);
return cljs.core._conj((function (){var x__8507__auto____$6 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$look], null);
return cljs.core._conj((function (){var x__8507__auto____$7 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$neg], null);
return cljs.core._conj((function (){var x__8507__auto____$8 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$regexp], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$8);
})(),x__8507__auto____$7);
})(),x__8507__auto____$6);
})(),x__8507__auto____$5);
})(),x__8507__auto____$4);
})(),x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hide_DASH_tag], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$defined_DASH_as,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hide_DASH_tag_DASH_rule], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"&"], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$element], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$look], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"0"], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"1"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})()], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$bin_DASH_char], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename_DASH_left], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$defined_DASH_as,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$rule], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename,cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$rulename_DASH_right], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9]"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$DIGIT], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$NUM], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"\"",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0021\\u0023-\\u007E]"),cljs.core.PersistentArrayMap.EMPTY], 0))], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"\"",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})()], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"'",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0026(-~]"),cljs.core.PersistentArrayMap.EMPTY], 0))], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"'",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$char_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"%",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_val], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_val], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_val], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"<"], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,">"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hide], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"="], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"=/"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$defined_DASH_as], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9a-fA-F]"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"["], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"]"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$option], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$HEXDIG], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hex_DASH_char], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[a-zA-Z][-a-zA-Z0-9]*"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"b",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_char], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,".",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_char], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})()], null)], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"-"], null);
return cljs.core._conj((function (){var x__8507__auto____$4 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_char], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$4);
})(),x__8507__auto____$3);
})()], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})()], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$bin_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"d",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_char], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,".",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_char], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})()], null)], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"-"], null);
return cljs.core._conj((function (){var x__8507__auto____$4 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_char], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$4);
})(),x__8507__auto____$3);
})()], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})()], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$dec_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$repetition], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$repetition], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$concatenation], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$concatenation], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"/"], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$concatenation], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$alternation], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'"),cljs.core.PersistentArrayMap.EMPTY], 0));
return cljs.core._conj((function (){var x__8507__auto____$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\""),cljs.core.PersistentArrayMap.EMPTY], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$regexp], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$repeat], null)], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$element], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$repetition], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename,cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$rulename_DASH_left], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rule], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hide_DASH_tag_DASH_rule], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$opt_DASH_whitespace], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$NUM], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$NUM], null)], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"*"], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$NUM], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})()], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$repeat], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"x",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_char], null);
return cljs.core._conj((function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,".",cljs.core.cst$kw$hide,true], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_char], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})()], null)], null);
return cljs.core._conj((function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(function (){var x__8507__auto____$3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"-"], null);
return cljs.core._conj((function (){var x__8507__auto____$4 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_char], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$4);
})(),x__8507__auto____$3);
})()], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$3);
})(),x__8507__auto____$2);
})()], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hex_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$DIGIT], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$dec_DASH_char], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(function (){var x__8507__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulelist], null);
return cljs.core._conj((function (){var x__8507__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto____$1);
})(),x__8507__auto__);
})(),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)]);
instaparse.abnf.get_char_combinator = (function instaparse$abnf$get_char_combinator(var_args){
var args__8821__auto__ = [];
var len__8814__auto___16878 = arguments.length;
var i__8815__auto___16879 = (0);
while(true){
if((i__8815__auto___16879 < len__8814__auto___16878)){
args__8821__auto__.push((arguments[i__8815__auto___16879]));

var G__16880 = (i__8815__auto___16879 + (1));
i__8815__auto___16879 = G__16880;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = (function (nums){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.second(nums))){
var vec__16871 = nums;
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16871,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16871,(1),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16871,(2),null);
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(lo,hi);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,(function (){var iter__8453__auto__ = (function instaparse$abnf$iter__16874(s__16875){
return (new cljs.core.LazySeq(null,(function (){
var s__16875__$1 = s__16875;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16875__$1);
if(temp__4657__auto__){
var s__16875__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16875__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__16875__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__16877 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__16876 = (0);
while(true){
if((i__16876 < size__8452__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__16876);
cljs.core.chunk_append(b__16877,instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n));

var G__16881 = (i__16876 + (1));
i__16876 = G__16881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16877),instaparse$abnf$iter__16874(cljs.core.chunk_rest(s__16875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16877),null);
}
} else {
var n = cljs.core.first(s__16875__$2);
return cljs.core.cons(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n),instaparse$abnf$iter__16874(cljs.core.rest(s__16875__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(nums);
})());

}
});

instaparse.abnf.get_char_combinator.cljs$lang$maxFixedArity = (0);

instaparse.abnf.get_char_combinator.cljs$lang$applyTo = (function (seq16870){
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16870));
});

/**
 * Restricts map to certain keys
 */
instaparse.abnf.project = (function instaparse$abnf$project(m,ks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function instaparse$abnf$project_$_iter__16882(s__16883){
return (new cljs.core.LazySeq(null,(function (){
var s__16883__$1 = s__16883;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16883__$1);
if(temp__4657__auto__){
var s__16883__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16883__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__16883__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__16885 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__16884 = (0);
while(true){
if((i__16884 < size__8452__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__16884);
if(cljs.core.contains_QMARK_(m,k)){
cljs.core.chunk_append(b__16885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null));

var G__16886 = (i__16884 + (1));
i__16884 = G__16886;
continue;
} else {
var G__16887 = (i__16884 + (1));
i__16884 = G__16887;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16885),instaparse$abnf$project_$_iter__16882(cljs.core.chunk_rest(s__16883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16885),null);
}
} else {
var k = cljs.core.first(s__16883__$2);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null),instaparse$abnf$project_$_iter__16882(cljs.core.rest(s__16883__$2)));
} else {
var G__16888 = cljs.core.rest(s__16883__$2);
s__16883__$1 = G__16888;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(ks);
})());
});
/**
 * Merges abnf-core map in with parsed grammar map
 */
instaparse.abnf.merge_core = (function instaparse$abnf$merge_core(grammar_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.abnf.project(instaparse.abnf.abnf_core,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(grammar_map)], 0)))),grammar_map], 0));
});
/**
 * Tests whether parser was constructed with hide-tag
 */
instaparse.abnf.hide_tag_QMARK_ = (function instaparse$abnf$hide_tag_QMARK_(p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function instaparse$abnf$alt_preserving_hide_tag(p1,p2){
var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p1);
var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p2);
if(cljs.core.truth_((function (){var and__7633__auto__ = hide_tag_p1_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return hide_tag_p2_QMARK_;
} else {
return and__7633__auto__;
}
})())){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.cst$kw$red),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.cst$kw$red)], 0)));
} else {
if(cljs.core.truth_(hide_tag_p1_QMARK_)){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.cst$kw$red),p2], 0)));
} else {
if(cljs.core.truth_(hide_tag_p2_QMARK_)){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.cst$kw$red)], 0)));
} else {
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));

}
}
}
});
instaparse.abnf.parse_int = parseInt;
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$hide_DASH_tag_DASH_rule,cljs.core.cst$kw$look,cljs.core.cst$kw$bin_DASH_char,cljs.core.cst$kw$rule,cljs.core.cst$kw$rulename_DASH_right,cljs.core.cst$kw$NUM,cljs.core.cst$kw$char_DASH_val,cljs.core.cst$kw$hide,cljs.core.cst$kw$option,cljs.core.cst$kw$hex_DASH_char,cljs.core.cst$kw$bin_DASH_val,cljs.core.cst$kw$dec_DASH_val,cljs.core.cst$kw$concatenation,cljs.core.cst$kw$alternation,cljs.core.cst$kw$regexp,cljs.core.cst$kw$repetition,cljs.core.cst$kw$rulename_DASH_left,cljs.core.cst$kw$repeat,cljs.core.cst$kw$hex_DASH_val,cljs.core.cst$kw$dec_DASH_char],[instaparse.combinators_source.neg,(function (tag,rule){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tag,instaparse.combinators_source.hide_tag(rule)]);
}),instaparse.combinators_source.look,(function() { 
var G__16899__delegate = function (cs){
var G__16892 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__16893 = (2);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2(G__16892,G__16893) : instaparse.abnf.parse_int.call(null,G__16892,G__16893));
};
var G__16899 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__16900__i = 0, G__16900__a = new Array(arguments.length -  0);
while (G__16900__i < G__16900__a.length) {G__16900__a[G__16900__i] = arguments[G__16900__i + 0]; ++G__16900__i;}
  cs = new cljs.core.IndexedSeq(G__16900__a,0,null);
} 
return G__16899__delegate.call(this,cs);};
G__16899.cljs$lang$maxFixedArity = 0;
G__16899.cljs$lang$applyTo = (function (arglist__16901){
var cs = cljs.core.seq(arglist__16901);
return G__16899__delegate(cs);
});
G__16899.cljs$core$IFn$_invoke$arity$variadic = G__16899__delegate;
return G__16899;
})()
,cljs.core.hash_map,(function() { 
var G__16902__delegate = function (rest__16890_SHARP_){
if(instaparse.abnf._STAR_case_insensitive_STAR_){
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__16890_SHARP_))));
} else {
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__16890_SHARP_)));
}
};
var G__16902 = function (var_args){
var rest__16890_SHARP_ = null;
if (arguments.length > 0) {
var G__16903__i = 0, G__16903__a = new Array(arguments.length -  0);
while (G__16903__i < G__16903__a.length) {G__16903__a[G__16903__i] = arguments[G__16903__i + 0]; ++G__16903__i;}
  rest__16890_SHARP_ = new cljs.core.IndexedSeq(G__16903__a,0,null);
} 
return G__16902__delegate.call(this,rest__16890_SHARP_);};
G__16902.cljs$lang$maxFixedArity = 0;
G__16902.cljs$lang$applyTo = (function (arglist__16904){
var rest__16890_SHARP_ = cljs.core.seq(arglist__16904);
return G__16902__delegate(rest__16890_SHARP_);
});
G__16902.cljs$core$IFn$_invoke$arity$variadic = G__16902__delegate;
return G__16902;
})()
,(function() { 
var G__16905__delegate = function (rest__16891_SHARP_){
var G__16894 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__16891_SHARP_);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1(G__16894) : instaparse.abnf.parse_int.call(null,G__16894));
};
var G__16905 = function (var_args){
var rest__16891_SHARP_ = null;
if (arguments.length > 0) {
var G__16906__i = 0, G__16906__a = new Array(arguments.length -  0);
while (G__16906__i < G__16906__a.length) {G__16906__a[G__16906__i] = arguments[G__16906__i + 0]; ++G__16906__i;}
  rest__16891_SHARP_ = new cljs.core.IndexedSeq(G__16906__a,0,null);
} 
return G__16905__delegate.call(this,rest__16891_SHARP_);};
G__16905.cljs$lang$maxFixedArity = 0;
G__16905.cljs$lang$applyTo = (function (arglist__16907){
var rest__16891_SHARP_ = cljs.core.seq(arglist__16907);
return G__16905__delegate(rest__16891_SHARP_);
});
G__16905.cljs$core$IFn$_invoke$arity$variadic = G__16905__delegate;
return G__16905;
})()
,(function() { 
var G__16908__delegate = function (cs){
return instaparse.combinators_source.string_ci(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs));
};
var G__16908 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__16909__i = 0, G__16909__a = new Array(arguments.length -  0);
while (G__16909__i < G__16909__a.length) {G__16909__a[G__16909__i] = arguments[G__16909__i + 0]; ++G__16909__i;}
  cs = new cljs.core.IndexedSeq(G__16909__a,0,null);
} 
return G__16908__delegate.call(this,cs);};
G__16908.cljs$lang$maxFixedArity = 0;
G__16908.cljs$lang$applyTo = (function (arglist__16910){
var cs = cljs.core.seq(arglist__16910);
return G__16908__delegate(cs);
});
G__16908.cljs$core$IFn$_invoke$arity$variadic = G__16908__delegate;
return G__16908;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__16911__delegate = function (cs){
var G__16895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__16896 = (16);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2(G__16895,G__16896) : instaparse.abnf.parse_int.call(null,G__16895,G__16896));
};
var G__16911 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__16912__i = 0, G__16912__a = new Array(arguments.length -  0);
while (G__16912__i < G__16912__a.length) {G__16912__a[G__16912__i] = arguments[G__16912__i + 0]; ++G__16912__i;}
  cs = new cljs.core.IndexedSeq(G__16912__a,0,null);
} 
return G__16911__delegate.call(this,cs);};
G__16911.cljs$lang$maxFixedArity = 0;
G__16911.cljs$lang$applyTo = (function (arglist__16913){
var cs = cljs.core.seq(arglist__16913);
return G__16911__delegate(cs);
});
G__16911.cljs$core$IFn$_invoke$arity$variadic = G__16911__delegate;
return G__16911;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__16914 = null;
var G__16914__1 = (function (element){
return element;
});
var G__16914__2 = (function (repeat,element){
if(cljs.core.empty_QMARK_(repeat)){
return instaparse.combinators_source.star(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(repeat),(2))){
return instaparse.combinators_source.rep(cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat),cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat),element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.plus(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.opt(element);
} else {
return instaparse.combinators_source.rep((function (){var or__7645__auto__ = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
})(),(function (){var or__7645__auto__ = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return Infinity;
}
})(),element);

}
}
}
}
});
G__16914 = function(repeat,element){
switch(arguments.length){
case 1:
return G__16914__1.call(this,repeat);
case 2:
return G__16914__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__16914.cljs$core$IFn$_invoke$arity$1 = G__16914__1;
G__16914.cljs$core$IFn$_invoke$arity$2 = G__16914__2;
return G__16914;
})()
,(function() { 
var G__16915__delegate = function (rest__16889_SHARP_){
if(instaparse.abnf._STAR_case_insensitive_STAR_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__16889_SHARP_)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__16889_SHARP_));
}
};
var G__16915 = function (var_args){
var rest__16889_SHARP_ = null;
if (arguments.length > 0) {
var G__16916__i = 0, G__16916__a = new Array(arguments.length -  0);
while (G__16916__i < G__16916__a.length) {G__16916__a[G__16916__i] = arguments[G__16916__i + 0]; ++G__16916__i;}
  rest__16889_SHARP_ = new cljs.core.IndexedSeq(G__16916__a,0,null);
} 
return G__16915__delegate.call(this,rest__16889_SHARP_);};
G__16915.cljs$lang$maxFixedArity = 0;
G__16915.cljs$lang$applyTo = (function (arglist__16917){
var rest__16889_SHARP_ = cljs.core.seq(arglist__16917);
return G__16915__delegate(rest__16889_SHARP_);
});
G__16915.cljs$core$IFn$_invoke$arity$variadic = G__16915__delegate;
return G__16915;
})()
,(function() { 
var G__16918__delegate = function (items){
var G__16897 = cljs.core.count(items);
switch (G__16897) {
case (1):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,cljs.core.first(items),cljs.core.cst$kw$high,cljs.core.first(items)], null);

}

break;
case (2):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$high,cljs.core.second(items)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$low,cljs.core.first(items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,cljs.core.first(items),cljs.core.cst$kw$high,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,(2))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16897)].join('')));

}
};
var G__16918 = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__16920__i = 0, G__16920__a = new Array(arguments.length -  0);
while (G__16920__i < G__16920__a.length) {G__16920__a[G__16920__i] = arguments[G__16920__i + 0]; ++G__16920__i;}
  items = new cljs.core.IndexedSeq(G__16920__a,0,null);
} 
return G__16918__delegate.call(this,items);};
G__16918.cljs$lang$maxFixedArity = 0;
G__16918.cljs$lang$applyTo = (function (arglist__16921){
var items = cljs.core.seq(arglist__16921);
return G__16918__delegate(items);
});
G__16918.cljs$core$IFn$_invoke$arity$variadic = G__16918__delegate;
return G__16918;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__16922__delegate = function (cs){
var G__16898 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1(G__16898) : instaparse.abnf.parse_int.call(null,G__16898));
};
var G__16922 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__16923__i = 0, G__16923__a = new Array(arguments.length -  0);
while (G__16923__i < G__16923__a.length) {G__16923__a[G__16923__i] = arguments[G__16923__i + 0]; ++G__16923__i;}
  cs = new cljs.core.IndexedSeq(G__16923__a,0,null);
} 
return G__16922__delegate.call(this,cs);};
G__16922.cljs$lang$maxFixedArity = 0;
G__16922.cljs$lang$applyTo = (function (arglist__16924){
var cs = cljs.core.seq(arglist__16924);
return G__16922__delegate(cs);
});
G__16922.cljs$core$IFn$_invoke$arity$variadic = G__16922__delegate;
return G__16922;
})()
]);
instaparse.abnf.rules__GT_grammar_map = (function instaparse$abnf$rules__GT_grammar_map(rules){
return instaparse.abnf.merge_core(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
 * Takes an ABNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.abnf.abnf = (function instaparse$abnf$abnf(spec){
var tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$rules_DASH_or_DASH_parser,spec,false);
if((tree instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16925_16927 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16926_16928 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16925_16927,_STAR_print_fn_STAR_16926_16928,sb__8672__auto__,tree){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_16925_16927,_STAR_print_fn_STAR_16926_16928,sb__8672__auto__,tree))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16926_16928;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16925_16927;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');
})()], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alternation,cljs.core.ffirst(tree))){
return instaparse.transform.transform(instaparse.abnf.abnf_transformer,cljs.core.first(tree));
} else {
return instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer,tree));

}
}
});
instaparse.abnf.build_parser = (function instaparse$abnf$build_parser(spec,output_format){
var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$rulelist,spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16929_16931 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16930_16932 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16929_16931,_STAR_print_fn_STAR_16930_16932,sb__8672__auto__,rule_tree){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_16929_16931,_STAR_print_fn_STAR_16930_16932,sb__8672__auto__,rule_tree))
;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16930_16932;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16929_16931;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');
})()], 0));
} else {
var rules = instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree);
var grammar_map = instaparse.abnf.rules__GT_grammar_map(rules);
var start_production = cljs.core.first(cljs.core.first(cljs.core.first(rules)));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
