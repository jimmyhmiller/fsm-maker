// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__15765 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__15765__$1 = (((G__15765 instanceof cljs.core.Keyword))?G__15765.fqn:null);
switch (G__15765__$1) {
case "nt":
return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15765__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__15767 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__15767__$1 = (((G__15767 instanceof cljs.core.Keyword))?G__15767.fqn:null);
switch (G__15767__$1) {
case "nt":
return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_full_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_full_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_full_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_full_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_full_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_full_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_full_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_full_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_full_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15767__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k15770,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__15774 = k15770;
var G__15774__$1 = (((G__15774 instanceof cljs.core.Keyword))?G__15774.fqn:null);
switch (G__15774__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15770,else__8288__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.gll.Failure{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15769){
var self__ = this;
var G__15769__$1 = this;
return (new cljs.core.RecordIter((0),G__15769__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$reason], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__15775 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__15775(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15771,other15772){
var self__ = this;
var this15771__$1 = this;
return (!((other15772 == null))) && ((this15771__$1.constructor === other15772.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15771__$1.index,other15772.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15771__$1.reason,other15772.reason)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15771__$1.__extmap,other15772.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$reason,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__15769){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__15776 = cljs.core.keyword_identical_QMARK_;
var expr__15777 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__15779 = cljs.core.cst$kw$index;
var G__15780 = expr__15777;
return (pred__15776.cljs$core$IFn$_invoke$arity$2 ? pred__15776.cljs$core$IFn$_invoke$arity$2(G__15779,G__15780) : pred__15776.call(null,G__15779,G__15780));
})())){
return (new instaparse.gll.Failure(G__15769,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15781 = cljs.core.cst$kw$reason;
var G__15782 = expr__15777;
return (pred__15776.cljs$core$IFn$_invoke$arity$2 ? pred__15776.cljs$core$IFn$_invoke$arity$2(G__15781,G__15782) : pred__15776.call(null,G__15781,G__15782));
})())){
return (new instaparse.gll.Failure(self__.index,G__15769,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__15769),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__15769){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__15769,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$reason], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Failure");
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.gll/Failure");
});

instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__15773){
return (new instaparse.gll.Failure(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__15773),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(G__15773),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15773,cljs.core.cst$kw$index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reason], 0))),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write(writer,(function (){var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15784_15786 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15785_15787 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15784_15786,_STAR_print_fn_STAR_15785_15787,sb__8672__auto__,fail__$1){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_15784_15786,_STAR_print_fn_STAR_15785_15787,sb__8672__auto__,fail__$1))
;

try{instaparse.failure.pprint_failure(fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15785_15787;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15784_15786;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');
})());
});
instaparse.gll.failure_type = cljs.core.type((new instaparse.gll.Failure(null,null,null,null,null)));
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(text){
return text;
});
instaparse.gll.sub_sequence = cljs.core.subs;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.trace_QMARK_ = trace_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k15789,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__15793 = k15789;
var G__15793__$1 = (((G__15793 instanceof cljs.core.Keyword))?G__15793.fqn:null);
switch (G__15793__$1) {
case "grammar":
return self__.grammar;

break;
case "text":
return self__.text;

break;
case "segment":
return self__.segment;

break;
case "fail-index":
return self__.fail_index;

break;
case "node-builder":
return self__.node_builder;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "generation":
return self__.generation;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "msg-cache":
return self__.msg_cache;

break;
case "nodes":
return self__.nodes;

break;
case "success":
return self__.success;

break;
case "failure":
return self__.failure;

break;
case "trace?":
return self__.trace_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15789,else__8288__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.gll.Tramp{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trace_QMARK_,self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15788){
var self__ = this;
var G__15788__$1 = this;
return (new cljs.core.RecordIter((0),G__15788__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure,cljs.core.cst$kw$trace_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__15794 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__15794(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15790,other15791){
var self__ = this;
var this15790__$1 = this;
return (!((other15791 == null))) && ((this15790__$1.constructor === other15791.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.grammar,other15791.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.text,other15791.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.segment,other15791.segment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.fail_index,other15791.fail_index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.node_builder,other15791.node_builder)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.stack,other15791.stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.next_stack,other15791.next_stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.generation,other15791.generation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.negative_listeners,other15791.negative_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.msg_cache,other15791.msg_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.nodes,other15791.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.success,other15791.success)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.failure,other15791.failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.trace_QMARK_,other15791.trace_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15790__$1.__extmap,other15791.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$msg_DASH_cache,null,cljs.core.cst$kw$negative_DASH_listeners,null,cljs.core.cst$kw$generation,null,cljs.core.cst$kw$failure,null,cljs.core.cst$kw$fail_DASH_index,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$success,null,cljs.core.cst$kw$nodes,null,cljs.core.cst$kw$node_DASH_builder,null,cljs.core.cst$kw$segment,null,cljs.core.cst$kw$stack,null,cljs.core.cst$kw$trace_QMARK_,null,cljs.core.cst$kw$next_DASH_stack,null,cljs.core.cst$kw$text,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__15788){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__15795 = cljs.core.keyword_identical_QMARK_;
var expr__15796 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__15798 = cljs.core.cst$kw$grammar;
var G__15799 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15798,G__15799) : pred__15795.call(null,G__15798,G__15799));
})())){
return (new instaparse.gll.Tramp(G__15788,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15800 = cljs.core.cst$kw$text;
var G__15801 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15800,G__15801) : pred__15795.call(null,G__15800,G__15801));
})())){
return (new instaparse.gll.Tramp(self__.grammar,G__15788,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15802 = cljs.core.cst$kw$segment;
var G__15803 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15802,G__15803) : pred__15795.call(null,G__15802,G__15803));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__15788,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15804 = cljs.core.cst$kw$fail_DASH_index;
var G__15805 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15804,G__15805) : pred__15795.call(null,G__15804,G__15805));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__15788,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15806 = cljs.core.cst$kw$node_DASH_builder;
var G__15807 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15806,G__15807) : pred__15795.call(null,G__15806,G__15807));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__15788,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15808 = cljs.core.cst$kw$stack;
var G__15809 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15808,G__15809) : pred__15795.call(null,G__15808,G__15809));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__15788,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15810 = cljs.core.cst$kw$next_DASH_stack;
var G__15811 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15810,G__15811) : pred__15795.call(null,G__15810,G__15811));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__15788,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15812 = cljs.core.cst$kw$generation;
var G__15813 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15812,G__15813) : pred__15795.call(null,G__15812,G__15813));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__15788,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15814 = cljs.core.cst$kw$negative_DASH_listeners;
var G__15815 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15814,G__15815) : pred__15795.call(null,G__15814,G__15815));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__15788,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15816 = cljs.core.cst$kw$msg_DASH_cache;
var G__15817 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15816,G__15817) : pred__15795.call(null,G__15816,G__15817));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__15788,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15818 = cljs.core.cst$kw$nodes;
var G__15819 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15818,G__15819) : pred__15795.call(null,G__15818,G__15819));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__15788,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15820 = cljs.core.cst$kw$success;
var G__15821 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15820,G__15821) : pred__15795.call(null,G__15820,G__15821));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__15788,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15822 = cljs.core.cst$kw$failure;
var G__15823 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15822,G__15823) : pred__15795.call(null,G__15822,G__15823));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__15788,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15824 = cljs.core.cst$kw$trace_QMARK_;
var G__15825 = expr__15796;
return (pred__15795.cljs$core$IFn$_invoke$arity$2 ? pred__15795.cljs$core$IFn$_invoke$arity$2(G__15824,G__15825) : pred__15795.call(null,G__15824,G__15825));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__15788,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__15788),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trace_QMARK_,self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__15788){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__15788,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$text,cljs.core.cst$sym$segment,cljs.core.cst$sym$fail_DASH_index,cljs.core.cst$sym$node_DASH_builder,cljs.core.cst$sym$stack,cljs.core.cst$sym$next_DASH_stack,cljs.core.cst$sym$generation,cljs.core.cst$sym$negative_DASH_listeners,cljs.core.cst$sym$msg_DASH_cache,cljs.core.cst$sym$nodes,cljs.core.cst$sym$success,cljs.core.cst$sym$failure,cljs.core.cst$sym$trace_QMARK_], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.gll/Tramp");
});

instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__15792){
return (new instaparse.gll.Tramp(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(G__15792),cljs.core.cst$kw$trace_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15792),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15792,cljs.core.cst$kw$grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure,cljs.core.cst$kw$trace_QMARK_], 0))),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__15828 = arguments.length;
switch (G__15828) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map_by(cljs.core._GT_)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$index,index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k15831,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__15835 = k15831;
var G__15835__$1 = (((G__15835 instanceof cljs.core.Keyword))?G__15835.fqn:null);
switch (G__15835__$1) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15831,else__8288__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.gll.Node{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15830){
var self__ = this;
var G__15830__$1 = this;
return (new cljs.core.RecordIter((0),G__15830__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$listeners,cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__15836 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__15836(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15832,other15833){
var self__ = this;
var this15832__$1 = this;
return (!((other15833 == null))) && ((this15832__$1.constructor === other15833.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.listeners,other15833.listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.full_listeners,other15833.full_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.results,other15833.results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.full_results,other15833.full_results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.__extmap,other15833.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$full_DASH_results,null,cljs.core.cst$kw$full_DASH_listeners,null,cljs.core.cst$kw$listeners,null,cljs.core.cst$kw$results,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__15830){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__15837 = cljs.core.keyword_identical_QMARK_;
var expr__15838 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__15840 = cljs.core.cst$kw$listeners;
var G__15841 = expr__15838;
return (pred__15837.cljs$core$IFn$_invoke$arity$2 ? pred__15837.cljs$core$IFn$_invoke$arity$2(G__15840,G__15841) : pred__15837.call(null,G__15840,G__15841));
})())){
return (new instaparse.gll.Node(G__15830,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15842 = cljs.core.cst$kw$full_DASH_listeners;
var G__15843 = expr__15838;
return (pred__15837.cljs$core$IFn$_invoke$arity$2 ? pred__15837.cljs$core$IFn$_invoke$arity$2(G__15842,G__15843) : pred__15837.call(null,G__15842,G__15843));
})())){
return (new instaparse.gll.Node(self__.listeners,G__15830,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15844 = cljs.core.cst$kw$results;
var G__15845 = expr__15838;
return (pred__15837.cljs$core$IFn$_invoke$arity$2 ? pred__15837.cljs$core$IFn$_invoke$arity$2(G__15844,G__15845) : pred__15837.call(null,G__15844,G__15845));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__15830,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15846 = cljs.core.cst$kw$full_DASH_results;
var G__15847 = expr__15838;
return (pred__15837.cljs$core$IFn$_invoke$arity$2 ? pred__15837.cljs$core$IFn$_invoke$arity$2(G__15846,G__15847) : pred__15837.call(null,G__15846,G__15847));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__15830,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__15830),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__15830){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__15830,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$listeners,cljs.core.cst$sym$full_DASH_listeners,cljs.core.cst$sym$results,cljs.core.cst$sym$full_DASH_results], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Node");
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.gll/Node");
});

instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__15834){
return (new instaparse.gll.Node(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(G__15834),cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__15834),cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(G__15834),cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(G__15834),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15834,cljs.core.cst$kw$listeners,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], 0))),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(tramp);
var i = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache),k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(result) : listener.call(null,result));
});})(cache,i,k,c))
;

if((c > cljs.core.deref(cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__15849 = cljs.core.deref(nodes);
return (fexpr__15849.cljs$core$IFn$_invoke$arity$1 ? fexpr__15849.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__15849.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__15850 = cljs.core.deref(nodes);
return (fexpr__15850.cljs$core$IFn$_invoke$arity$1 ? fexpr__15850.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__15850.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__15851 = cljs.core.deref(nodes);
return (fexpr__15851.cljs$core$IFn$_invoke$arity$1 ? fexpr__15851.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__15851.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node))) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__15852 = cljs.core.deref(nodes);
return (fexpr__15852.cljs$core$IFn$_invoke$arity$1 ? fexpr__15852.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__15852.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4655__auto__ = (function (){var fexpr__15853 = cljs.core.deref(nodes);
return (fexpr__15853.cljs$core$IFn$_invoke$arity$1 ? fexpr__15853.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__15853.call(null,node_key));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return node;
} else {
var node = instaparse.gll.make_node();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.with_meta(obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get(tramp,node_key);
var parser = (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1)));
var result__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$result,null):result);
var result__$2 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction_function = temp__4655__auto__;
return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);
var results = (cljs.core.truth_(total_QMARK_)?cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node):cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not((function (){var fexpr__15855 = cljs.core.deref(results);
return (fexpr__15855.cljs$core$IFn$_invoke$arity$1 ? fexpr__15855.cljs$core$IFn$_invoke$arity$1(result__$2) : fexpr__15855.call(null,result__$2));
})())){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result__$2);

var seq__15856_15864 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__15857_15865 = null;
var count__15858_15866 = (0);
var i__15859_15867 = (0);
while(true){
if((i__15859_15867 < count__15858_15866)){
var listener_15868 = chunk__15857_15865.cljs$core$IIndexed$_nth$arity$2(null,i__15859_15867);
instaparse.gll.push_message(tramp,listener_15868,result__$2);

var G__15869 = seq__15856_15864;
var G__15870 = chunk__15857_15865;
var G__15871 = count__15858_15866;
var G__15872 = (i__15859_15867 + (1));
seq__15856_15864 = G__15869;
chunk__15857_15865 = G__15870;
count__15858_15866 = G__15871;
i__15859_15867 = G__15872;
continue;
} else {
var temp__4657__auto___15873 = cljs.core.seq(seq__15856_15864);
if(temp__4657__auto___15873){
var seq__15856_15874__$1 = temp__4657__auto___15873;
if(cljs.core.chunked_seq_QMARK_(seq__15856_15874__$1)){
var c__8484__auto___15875 = cljs.core.chunk_first(seq__15856_15874__$1);
var G__15876 = cljs.core.chunk_rest(seq__15856_15874__$1);
var G__15877 = c__8484__auto___15875;
var G__15878 = cljs.core.count(c__8484__auto___15875);
var G__15879 = (0);
seq__15856_15864 = G__15876;
chunk__15857_15865 = G__15877;
count__15858_15866 = G__15878;
i__15859_15867 = G__15879;
continue;
} else {
var listener_15880 = cljs.core.first(seq__15856_15874__$1);
instaparse.gll.push_message(tramp,listener_15880,result__$2);

var G__15881 = cljs.core.next(seq__15856_15874__$1);
var G__15882 = null;
var G__15883 = (0);
var G__15884 = (0);
seq__15856_15864 = G__15881;
chunk__15857_15865 = G__15882;
count__15858_15866 = G__15883;
i__15859_15867 = G__15884;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(total_QMARK_)){
var seq__15860 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__15861 = null;
var count__15862 = (0);
var i__15863 = (0);
while(true){
if((i__15863 < count__15862)){
var listener = chunk__15861.cljs$core$IIndexed$_nth$arity$2(null,i__15863);
instaparse.gll.push_message(tramp,listener,result__$2);

var G__15885 = seq__15860;
var G__15886 = chunk__15861;
var G__15887 = count__15862;
var G__15888 = (i__15863 + (1));
seq__15860 = G__15885;
chunk__15861 = G__15886;
count__15862 = G__15887;
i__15863 = G__15888;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15860);
if(temp__4657__auto__){
var seq__15860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15860__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__15860__$1);
var G__15889 = cljs.core.chunk_rest(seq__15860__$1);
var G__15890 = c__8484__auto__;
var G__15891 = cljs.core.count(c__8484__auto__);
var G__15892 = (0);
seq__15860 = G__15889;
chunk__15861 = G__15890;
count__15862 = G__15891;
i__15863 = G__15892;
continue;
} else {
var listener = cljs.core.first(seq__15860__$1);
instaparse.gll.push_message(tramp,listener,result__$2);

var G__15893 = cljs.core.next(seq__15860__$1);
var G__15894 = null;
var G__15895 = (0);
var G__15896 = (0);
seq__15860 = G__15893;
chunk__15861 = G__15894;
count__15862 = G__15895;
i__15863 = G__15896;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__15897_15905 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__15898_15906 = null;
var count__15899_15907 = (0);
var i__15900_15908 = (0);
while(true){
if((i__15900_15908 < count__15899_15907)){
var result_15909 = chunk__15898_15906.cljs$core$IIndexed$_nth$arity$2(null,i__15900_15908);
instaparse.gll.push_message(tramp,listener,result_15909);

var G__15910 = seq__15897_15905;
var G__15911 = chunk__15898_15906;
var G__15912 = count__15899_15907;
var G__15913 = (i__15900_15908 + (1));
seq__15897_15905 = G__15910;
chunk__15898_15906 = G__15911;
count__15899_15907 = G__15912;
i__15900_15908 = G__15913;
continue;
} else {
var temp__4657__auto___15914 = cljs.core.seq(seq__15897_15905);
if(temp__4657__auto___15914){
var seq__15897_15915__$1 = temp__4657__auto___15914;
if(cljs.core.chunked_seq_QMARK_(seq__15897_15915__$1)){
var c__8484__auto___15916 = cljs.core.chunk_first(seq__15897_15915__$1);
var G__15917 = cljs.core.chunk_rest(seq__15897_15915__$1);
var G__15918 = c__8484__auto___15916;
var G__15919 = cljs.core.count(c__8484__auto___15916);
var G__15920 = (0);
seq__15897_15905 = G__15917;
chunk__15898_15906 = G__15918;
count__15899_15907 = G__15919;
i__15900_15908 = G__15920;
continue;
} else {
var result_15921 = cljs.core.first(seq__15897_15915__$1);
instaparse.gll.push_message(tramp,listener,result_15921);

var G__15922 = cljs.core.next(seq__15897_15915__$1);
var G__15923 = null;
var G__15924 = (0);
var G__15925 = (0);
seq__15897_15905 = G__15922;
chunk__15898_15906 = G__15923;
count__15899_15907 = G__15924;
i__15900_15908 = G__15925;
continue;
}
} else {
}
}
break;
}

var seq__15901_15926 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__15902_15927 = null;
var count__15903_15928 = (0);
var i__15904_15929 = (0);
while(true){
if((i__15904_15929 < count__15903_15928)){
var result_15930 = chunk__15902_15927.cljs$core$IIndexed$_nth$arity$2(null,i__15904_15929);
instaparse.gll.push_message(tramp,listener,result_15930);

var G__15931 = seq__15901_15926;
var G__15932 = chunk__15902_15927;
var G__15933 = count__15903_15928;
var G__15934 = (i__15904_15929 + (1));
seq__15901_15926 = G__15931;
chunk__15902_15927 = G__15932;
count__15903_15928 = G__15933;
i__15904_15929 = G__15934;
continue;
} else {
var temp__4657__auto___15935 = cljs.core.seq(seq__15901_15926);
if(temp__4657__auto___15935){
var seq__15901_15936__$1 = temp__4657__auto___15935;
if(cljs.core.chunked_seq_QMARK_(seq__15901_15936__$1)){
var c__8484__auto___15937 = cljs.core.chunk_first(seq__15901_15936__$1);
var G__15938 = cljs.core.chunk_rest(seq__15901_15936__$1);
var G__15939 = c__8484__auto___15937;
var G__15940 = cljs.core.count(c__8484__auto___15937);
var G__15941 = (0);
seq__15901_15926 = G__15938;
chunk__15902_15927 = G__15939;
count__15903_15928 = G__15940;
i__15904_15929 = G__15941;
continue;
} else {
var result_15942 = cljs.core.first(seq__15901_15936__$1);
instaparse.gll.push_message(tramp,listener,result_15942);

var G__15943 = cljs.core.next(seq__15901_15936__$1);
var G__15944 = null;
var G__15945 = (0);
var G__15946 = (0);
seq__15901_15926 = G__15943;
chunk__15902_15927 = G__15944;
count__15903_15928 = G__15945;
i__15904_15929 = G__15946;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__15947_15951 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__15948_15952 = null;
var count__15949_15953 = (0);
var i__15950_15954 = (0);
while(true){
if((i__15950_15954 < count__15949_15953)){
var result_15955 = chunk__15948_15952.cljs$core$IIndexed$_nth$arity$2(null,i__15950_15954);
instaparse.gll.push_message(tramp,listener,result_15955);

var G__15956 = seq__15947_15951;
var G__15957 = chunk__15948_15952;
var G__15958 = count__15949_15953;
var G__15959 = (i__15950_15954 + (1));
seq__15947_15951 = G__15956;
chunk__15948_15952 = G__15957;
count__15949_15953 = G__15958;
i__15950_15954 = G__15959;
continue;
} else {
var temp__4657__auto___15960 = cljs.core.seq(seq__15947_15951);
if(temp__4657__auto___15960){
var seq__15947_15961__$1 = temp__4657__auto___15960;
if(cljs.core.chunked_seq_QMARK_(seq__15947_15961__$1)){
var c__8484__auto___15962 = cljs.core.chunk_first(seq__15947_15961__$1);
var G__15963 = cljs.core.chunk_rest(seq__15947_15961__$1);
var G__15964 = c__8484__auto___15962;
var G__15965 = cljs.core.count(c__8484__auto___15962);
var G__15966 = (0);
seq__15947_15951 = G__15963;
chunk__15948_15952 = G__15964;
count__15949_15953 = G__15965;
i__15950_15954 = G__15966;
continue;
} else {
var result_15967 = cljs.core.first(seq__15947_15961__$1);
instaparse.gll.push_message(tramp,listener,result_15967);

var G__15968 = cljs.core.next(seq__15947_15961__$1);
var G__15969 = null;
var G__15970 = (0);
var G__15971 = (0);
seq__15947_15951 = G__15968;
chunk__15948_15952 = G__15969;
count__15949_15953 = G__15970;
i__15950_15954 = G__15971;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (full_listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._full_parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(full_listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([(creator.cljs$core$IFn$_invoke$arity$1 ? creator.cljs$core$IFn$_invoke$arity$1((0)) : creator.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure);
var G__15972 = cljs.core.compare(index,current_index);
switch (G__15972) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15972)].join('')));

}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__15973 = cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(tramp);
var G__15974 = cljs.core.cst$kw$instaparse_SLASH_failure;
var G__15975 = (function (){var G__15978 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var G__15979 = index;
return (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(G__15978,G__15979) : instaparse.gll.sub_sequence.call(null,G__15978,G__15979));
})();
var G__15976 = index;
var G__15977 = cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp));
return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__15973,G__15974,G__15975,G__15976,G__15977) : instaparse.gll.build_node_with_meta.call(null,G__15973,G__15974,G__15975,G__15976,G__15977));
})(),cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek(cljs.core.deref(stack));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.pop);

return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__15982 = arguments.length;
switch (G__15982) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count(cljs.core.deref(stack)) > (0))){
instaparse.gll.step(stack);

var G__15987 = tramp;
var G__15988 = found_result_QMARK_;
tramp = G__15987;
found_result_QMARK_ = G__15988;
continue;
} else {
if((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__15983 = cljs.core.first(cljs.core.deref(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(0),null);
var listeners = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(1),null);
var listener = cljs.core.peek(listeners);

(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(listeners),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__15989 = tramp;
var G__15990 = found_result_QMARK_;
tramp = G__15989;
found_result_QMARK_ = G__15990;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_(stack,cljs.core.deref(next_stack));

cljs.core.reset_BANG_(next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__15991 = tramp;
var G__15992 = null;
tramp = G__15991;
found_result_QMARK_ = G__15992;
continue;
} else {
return null;

}
}
}
}
break;
}
});

instaparse.gll.run.cljs$lang$maxFixedArity = 2;

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0)))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__15993 = result;
var map__15993__$1 = ((((!((map__15993 == null)))?((((map__15993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15993):map__15993);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15993__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15993__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__15995 = new_results_so_far;
var G__15996 = cljs.core.next(parser_sequence);
var G__15997 = node_key;
var G__15998 = tramp;
return (instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4(G__15995,G__15996,G__15997,G__15998) : instaparse.gll.CatListener.call(null,G__15995,G__15996,G__15997,G__15998));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__15999 = result;
var map__15999__$1 = ((((!((map__15999 == null)))?((((map__15999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15999):map__15999);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15999__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15999__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parser_sequence))){
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__16001 = new_results_so_far;
var G__16002 = cljs.core.next(parser_sequence);
var G__16003 = node_key;
var G__16004 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__16001,G__16002,G__16003,G__16004) : instaparse.gll.CatFullListener.call(null,G__16001,G__16002,G__16003,G__16004));
})());
} else {
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__16005 = new_results_so_far;
var G__16006 = cljs.core.next(parser_sequence);
var G__16007 = node_key;
var G__16008 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__16005,G__16006,G__16007,G__16008) : instaparse.gll.CatFullListener.call(null,G__16005,G__16006,G__16007,G__16008));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__16009 = result;
var map__16009__$1 = ((((!((map__16009 == null)))?((((map__16009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16009):map__16009);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16009__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16009__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));

return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__16011 = result;
var map__16011__$1 = ((((!((map__16011 == null)))?((((map__16011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16011):map__16011);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16011__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16011__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__16013 = result;
var map__16013__$1 = ((((!((map__16013 == null)))?((((map__16013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16013):map__16013);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16013__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16013__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n))){
instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__16015 = result;
var map__16015__$1 = ((((!((map__16015 == null)))?((((map__16015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16015):map__16015);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16015__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16015__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
if(((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core.truth_(instaparse.gll.equals_ignore_case(string,head))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text));
if(and__7633__auto__){
return instaparse.gll.equals_ignore_case(string,head);
} else {
return and__7633__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
var G__16017 = text;
var G__16018 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__16017,G__16018);
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if(((lo <= code)) && ((code <= hi))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code))].join(''),(index + (1))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if(((lo <= code_point)) && ((code_point <= hi))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,(index + cljs.core.count(char_string))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count(text);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),end)) && (((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code))].join(''),end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + cljs.core.count(char_string)),end)) && (((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null),cljs.core.cst$kw$full,true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,"g"));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__7633__auto__ = m;
if(cljs.core.truth_(and__7633__auto__)){
return (m.index === (0));
} else {
return and__7633__auto__;
}
})())){
return cljs.core.first(m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
var desired_length = (cljs.core.count(text) - index);
if(cljs.core.truth_((function (){var and__7633__auto__ = match;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else {
return and__7633__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__16019 = cljs.core.seq(parsers);
var chunk__16020 = null;
var count__16021 = (0);
var i__16022 = (0);
while(true){
if((i__16022 < count__16021)){
var parser = chunk__16020.cljs$core$IIndexed$_nth$arity$2(null,i__16022);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16023 = seq__16019;
var G__16024 = chunk__16020;
var G__16025 = count__16021;
var G__16026 = (i__16022 + (1));
seq__16019 = G__16023;
chunk__16020 = G__16024;
count__16021 = G__16025;
i__16022 = G__16026;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16019);
if(temp__4657__auto__){
var seq__16019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16019__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__16019__$1);
var G__16027 = cljs.core.chunk_rest(seq__16019__$1);
var G__16028 = c__8484__auto__;
var G__16029 = cljs.core.count(c__8484__auto__);
var G__16030 = (0);
seq__16019 = G__16027;
chunk__16020 = G__16028;
count__16021 = G__16029;
i__16022 = G__16030;
continue;
} else {
var parser = cljs.core.first(seq__16019__$1);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16031 = cljs.core.next(seq__16019__$1);
var G__16032 = null;
var G__16033 = (0);
var G__16034 = (0);
seq__16019 = G__16031;
chunk__16020 = G__16032;
count__16021 = G__16033;
i__16022 = G__16034;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__16035 = cljs.core.seq(parsers);
var chunk__16036 = null;
var count__16037 = (0);
var i__16038 = (0);
while(true){
if((i__16038 < count__16037)){
var parser = chunk__16036.cljs$core$IIndexed$_nth$arity$2(null,i__16038);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16039 = seq__16035;
var G__16040 = chunk__16036;
var G__16041 = count__16037;
var G__16042 = (i__16038 + (1));
seq__16035 = G__16039;
chunk__16036 = G__16040;
count__16037 = G__16041;
i__16038 = G__16042;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16035);
if(temp__4657__auto__){
var seq__16035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16035__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__16035__$1);
var G__16043 = cljs.core.chunk_rest(seq__16035__$1);
var G__16044 = c__8484__auto__;
var G__16045 = cljs.core.count(c__8484__auto__);
var G__16046 = (0);
seq__16035 = G__16043;
chunk__16036 = G__16044;
count__16037 = G__16045;
i__16038 = G__16046;
continue;
} else {
var parser = cljs.core.first(seq__16035__$1);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__16047 = cljs.core.next(seq__16035__$1);
var G__16048 = null;
var G__16049 = (0);
var G__16050 = (0);
seq__16035 = G__16047;
chunk__16036 = G__16048;
count__16037 = G__16049;
i__16038 = G__16050;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$optional,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse(this$,index,tramp);
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$lookahead,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead], null));
} else {
instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$NOT,instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force(fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener(tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$Epsilon,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else {
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(cljs.core.deref(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.failure.augment_failure(cljs.core.deref(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta((node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(tag,content) : node_builder.call(null,tag,content)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,start,cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,cljs.core.cst$kw$instaparse_SLASH_failure,text,(0),cljs.core.count(text));
var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
var x__8507__auto__ = instaparse.gll.build_total_failure_node(node_builder,start,text);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);
if(cljs.core.seq(all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);
if(!((result instanceof instaparse.gll.Failure))){
return result;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});
