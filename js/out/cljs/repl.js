// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59612){
var map__59613 = p__59612;
var map__59613__$1 = ((((!((map__59613 == null)))?((((map__59613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59613):map__59613);
var m = map__59613__$1;
var n = cljs.core.get.call(null,map__59613__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__59613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59615_59637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59616_59638 = null;
var count__59617_59639 = (0);
var i__59618_59640 = (0);
while(true){
if((i__59618_59640 < count__59617_59639)){
var f_59641 = cljs.core._nth.call(null,chunk__59616_59638,i__59618_59640);
cljs.core.println.call(null,"  ",f_59641);

var G__59642 = seq__59615_59637;
var G__59643 = chunk__59616_59638;
var G__59644 = count__59617_59639;
var G__59645 = (i__59618_59640 + (1));
seq__59615_59637 = G__59642;
chunk__59616_59638 = G__59643;
count__59617_59639 = G__59644;
i__59618_59640 = G__59645;
continue;
} else {
var temp__4657__auto___59646 = cljs.core.seq.call(null,seq__59615_59637);
if(temp__4657__auto___59646){
var seq__59615_59647__$1 = temp__4657__auto___59646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59615_59647__$1)){
var c__38588__auto___59648 = cljs.core.chunk_first.call(null,seq__59615_59647__$1);
var G__59649 = cljs.core.chunk_rest.call(null,seq__59615_59647__$1);
var G__59650 = c__38588__auto___59648;
var G__59651 = cljs.core.count.call(null,c__38588__auto___59648);
var G__59652 = (0);
seq__59615_59637 = G__59649;
chunk__59616_59638 = G__59650;
count__59617_59639 = G__59651;
i__59618_59640 = G__59652;
continue;
} else {
var f_59653 = cljs.core.first.call(null,seq__59615_59647__$1);
cljs.core.println.call(null,"  ",f_59653);

var G__59654 = cljs.core.next.call(null,seq__59615_59647__$1);
var G__59655 = null;
var G__59656 = (0);
var G__59657 = (0);
seq__59615_59637 = G__59654;
chunk__59616_59638 = G__59655;
count__59617_59639 = G__59656;
i__59618_59640 = G__59657;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59658 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37749__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_59658);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_59658)))?cljs.core.second.call(null,arglists_59658):arglists_59658));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59619_59659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59620_59660 = null;
var count__59621_59661 = (0);
var i__59622_59662 = (0);
while(true){
if((i__59622_59662 < count__59621_59661)){
var vec__59623_59663 = cljs.core._nth.call(null,chunk__59620_59660,i__59622_59662);
var name_59664 = cljs.core.nth.call(null,vec__59623_59663,(0),null);
var map__59626_59665 = cljs.core.nth.call(null,vec__59623_59663,(1),null);
var map__59626_59666__$1 = ((((!((map__59626_59665 == null)))?((((map__59626_59665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59626_59665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59626_59665):map__59626_59665);
var doc_59667 = cljs.core.get.call(null,map__59626_59666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59668 = cljs.core.get.call(null,map__59626_59666__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59664);

cljs.core.println.call(null," ",arglists_59668);

if(cljs.core.truth_(doc_59667)){
cljs.core.println.call(null," ",doc_59667);
} else {
}

var G__59669 = seq__59619_59659;
var G__59670 = chunk__59620_59660;
var G__59671 = count__59621_59661;
var G__59672 = (i__59622_59662 + (1));
seq__59619_59659 = G__59669;
chunk__59620_59660 = G__59670;
count__59621_59661 = G__59671;
i__59622_59662 = G__59672;
continue;
} else {
var temp__4657__auto___59673 = cljs.core.seq.call(null,seq__59619_59659);
if(temp__4657__auto___59673){
var seq__59619_59674__$1 = temp__4657__auto___59673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59619_59674__$1)){
var c__38588__auto___59675 = cljs.core.chunk_first.call(null,seq__59619_59674__$1);
var G__59676 = cljs.core.chunk_rest.call(null,seq__59619_59674__$1);
var G__59677 = c__38588__auto___59675;
var G__59678 = cljs.core.count.call(null,c__38588__auto___59675);
var G__59679 = (0);
seq__59619_59659 = G__59676;
chunk__59620_59660 = G__59677;
count__59621_59661 = G__59678;
i__59622_59662 = G__59679;
continue;
} else {
var vec__59628_59680 = cljs.core.first.call(null,seq__59619_59674__$1);
var name_59681 = cljs.core.nth.call(null,vec__59628_59680,(0),null);
var map__59631_59682 = cljs.core.nth.call(null,vec__59628_59680,(1),null);
var map__59631_59683__$1 = ((((!((map__59631_59682 == null)))?((((map__59631_59682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59631_59682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59631_59682):map__59631_59682);
var doc_59684 = cljs.core.get.call(null,map__59631_59683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59685 = cljs.core.get.call(null,map__59631_59683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59681);

cljs.core.println.call(null," ",arglists_59685);

if(cljs.core.truth_(doc_59684)){
cljs.core.println.call(null," ",doc_59684);
} else {
}

var G__59686 = cljs.core.next.call(null,seq__59619_59674__$1);
var G__59687 = null;
var G__59688 = (0);
var G__59689 = (0);
seq__59619_59659 = G__59686;
chunk__59620_59660 = G__59687;
count__59621_59661 = G__59688;
i__59622_59662 = G__59689;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__59633 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59634 = null;
var count__59635 = (0);
var i__59636 = (0);
while(true){
if((i__59636 < count__59635)){
var role = cljs.core._nth.call(null,chunk__59634,i__59636);
var temp__4657__auto___59690__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___59690__$1)){
var spec_59691 = temp__4657__auto___59690__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59691));
} else {
}

var G__59692 = seq__59633;
var G__59693 = chunk__59634;
var G__59694 = count__59635;
var G__59695 = (i__59636 + (1));
seq__59633 = G__59692;
chunk__59634 = G__59693;
count__59635 = G__59694;
i__59636 = G__59695;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__59633);
if(temp__4657__auto____$1){
var seq__59633__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59633__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__59633__$1);
var G__59696 = cljs.core.chunk_rest.call(null,seq__59633__$1);
var G__59697 = c__38588__auto__;
var G__59698 = cljs.core.count.call(null,c__38588__auto__);
var G__59699 = (0);
seq__59633 = G__59696;
chunk__59634 = G__59697;
count__59635 = G__59698;
i__59636 = G__59699;
continue;
} else {
var role = cljs.core.first.call(null,seq__59633__$1);
var temp__4657__auto___59700__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___59700__$2)){
var spec_59701 = temp__4657__auto___59700__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59701));
} else {
}

var G__59702 = cljs.core.next.call(null,seq__59633__$1);
var G__59703 = null;
var G__59704 = (0);
var G__59705 = (0);
seq__59633 = G__59702;
chunk__59634 = G__59703;
count__59635 = G__59704;
i__59636 = G__59705;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1507178397857
