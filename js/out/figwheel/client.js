// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e59900){if((e59900 instanceof Error)){
var e = e59900;
return "Error: Unable to stringify";
} else {
throw e59900;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__59903 = arguments.length;
switch (G__59903) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__59901_SHARP_){
if(typeof p1__59901_SHARP_ === 'string'){
return p1__59901_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__59901_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__38925__auto__ = [];
var len__38918__auto___59906 = arguments.length;
var i__38919__auto___59907 = (0);
while(true){
if((i__38919__auto___59907 < len__38918__auto___59906)){
args__38925__auto__.push((arguments[i__38919__auto___59907]));

var G__59908 = (i__38919__auto___59907 + (1));
i__38919__auto___59907 = G__59908;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq59905){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59905));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__38925__auto__ = [];
var len__38918__auto___59910 = arguments.length;
var i__38919__auto___59911 = (0);
while(true){
if((i__38919__auto___59911 < len__38918__auto___59910)){
args__38925__auto__.push((arguments[i__38919__auto___59911]));

var G__59912 = (i__38919__auto___59911 + (1));
i__38919__auto___59911 = G__59912;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq59909){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59909));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__59913){
var map__59914 = p__59913;
var map__59914__$1 = ((((!((map__59914 == null)))?((((map__59914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59914):map__59914);
var message = cljs.core.get.call(null,map__59914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__59914__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__37749__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__37737__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__37737__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__37737__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__41084__auto___59993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___59993,ch){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___59993,ch){
return (function (state_59965){
var state_val_59966 = (state_59965[(1)]);
if((state_val_59966 === (7))){
var inst_59961 = (state_59965[(2)]);
var state_59965__$1 = state_59965;
var statearr_59967_59994 = state_59965__$1;
(statearr_59967_59994[(2)] = inst_59961);

(statearr_59967_59994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (1))){
var state_59965__$1 = state_59965;
var statearr_59968_59995 = state_59965__$1;
(statearr_59968_59995[(2)] = null);

(statearr_59968_59995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (4))){
var inst_59918 = (state_59965[(7)]);
var inst_59918__$1 = (state_59965[(2)]);
var state_59965__$1 = (function (){var statearr_59969 = state_59965;
(statearr_59969[(7)] = inst_59918__$1);

return statearr_59969;
})();
if(cljs.core.truth_(inst_59918__$1)){
var statearr_59970_59996 = state_59965__$1;
(statearr_59970_59996[(1)] = (5));

} else {
var statearr_59971_59997 = state_59965__$1;
(statearr_59971_59997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (15))){
var inst_59925 = (state_59965[(8)]);
var inst_59940 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59925);
var inst_59941 = cljs.core.first.call(null,inst_59940);
var inst_59942 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_59941);
var inst_59943 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59942)].join('');
var inst_59944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_59943);
var state_59965__$1 = state_59965;
var statearr_59972_59998 = state_59965__$1;
(statearr_59972_59998[(2)] = inst_59944);

(statearr_59972_59998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (13))){
var inst_59949 = (state_59965[(2)]);
var state_59965__$1 = state_59965;
var statearr_59973_59999 = state_59965__$1;
(statearr_59973_59999[(2)] = inst_59949);

(statearr_59973_59999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (6))){
var state_59965__$1 = state_59965;
var statearr_59974_60000 = state_59965__$1;
(statearr_59974_60000[(2)] = null);

(statearr_59974_60000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (17))){
var inst_59947 = (state_59965[(2)]);
var state_59965__$1 = state_59965;
var statearr_59975_60001 = state_59965__$1;
(statearr_59975_60001[(2)] = inst_59947);

(statearr_59975_60001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (3))){
var inst_59963 = (state_59965[(2)]);
var state_59965__$1 = state_59965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59965__$1,inst_59963);
} else {
if((state_val_59966 === (12))){
var inst_59924 = (state_59965[(9)]);
var inst_59938 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_59924,opts);
var state_59965__$1 = state_59965;
if(cljs.core.truth_(inst_59938)){
var statearr_59976_60002 = state_59965__$1;
(statearr_59976_60002[(1)] = (15));

} else {
var statearr_59977_60003 = state_59965__$1;
(statearr_59977_60003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (2))){
var state_59965__$1 = state_59965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59965__$1,(4),ch);
} else {
if((state_val_59966 === (11))){
var inst_59925 = (state_59965[(8)]);
var inst_59930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59931 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_59925);
var inst_59932 = cljs.core.async.timeout.call(null,(1000));
var inst_59933 = [inst_59931,inst_59932];
var inst_59934 = (new cljs.core.PersistentVector(null,2,(5),inst_59930,inst_59933,null));
var state_59965__$1 = state_59965;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59965__$1,(14),inst_59934);
} else {
if((state_val_59966 === (9))){
var inst_59925 = (state_59965[(8)]);
var inst_59951 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_59952 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59925);
var inst_59953 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59952);
var inst_59954 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59953)].join('');
var inst_59955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_59954);
var state_59965__$1 = (function (){var statearr_59978 = state_59965;
(statearr_59978[(10)] = inst_59951);

return statearr_59978;
})();
var statearr_59979_60004 = state_59965__$1;
(statearr_59979_60004[(2)] = inst_59955);

(statearr_59979_60004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (5))){
var inst_59918 = (state_59965[(7)]);
var inst_59920 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_59921 = (new cljs.core.PersistentArrayMap(null,2,inst_59920,null));
var inst_59922 = (new cljs.core.PersistentHashSet(null,inst_59921,null));
var inst_59923 = figwheel.client.focus_msgs.call(null,inst_59922,inst_59918);
var inst_59924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_59923);
var inst_59925 = cljs.core.first.call(null,inst_59923);
var inst_59926 = figwheel.client.autoload_QMARK_.call(null);
var state_59965__$1 = (function (){var statearr_59980 = state_59965;
(statearr_59980[(8)] = inst_59925);

(statearr_59980[(9)] = inst_59924);

return statearr_59980;
})();
if(cljs.core.truth_(inst_59926)){
var statearr_59981_60005 = state_59965__$1;
(statearr_59981_60005[(1)] = (8));

} else {
var statearr_59982_60006 = state_59965__$1;
(statearr_59982_60006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (14))){
var inst_59936 = (state_59965[(2)]);
var state_59965__$1 = state_59965;
var statearr_59983_60007 = state_59965__$1;
(statearr_59983_60007[(2)] = inst_59936);

(statearr_59983_60007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (16))){
var state_59965__$1 = state_59965;
var statearr_59984_60008 = state_59965__$1;
(statearr_59984_60008[(2)] = null);

(statearr_59984_60008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (10))){
var inst_59957 = (state_59965[(2)]);
var state_59965__$1 = (function (){var statearr_59985 = state_59965;
(statearr_59985[(11)] = inst_59957);

return statearr_59985;
})();
var statearr_59986_60009 = state_59965__$1;
(statearr_59986_60009[(2)] = null);

(statearr_59986_60009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59966 === (8))){
var inst_59924 = (state_59965[(9)]);
var inst_59928 = figwheel.client.reload_file_state_QMARK_.call(null,inst_59924,opts);
var state_59965__$1 = state_59965;
if(cljs.core.truth_(inst_59928)){
var statearr_59987_60010 = state_59965__$1;
(statearr_59987_60010[(1)] = (11));

} else {
var statearr_59988_60011 = state_59965__$1;
(statearr_59988_60011[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__41084__auto___59993,ch))
;
return ((function (switch__40996__auto__,c__41084__auto___59993,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40997__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40997__auto____0 = (function (){
var statearr_59989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59989[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40997__auto__);

(statearr_59989[(1)] = (1));

return statearr_59989;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40997__auto____1 = (function (state_59965){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_59965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e59990){if((e59990 instanceof Object)){
var ex__41000__auto__ = e59990;
var statearr_59991_60012 = state_59965;
(statearr_59991_60012[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60013 = state_59965;
state_59965 = G__60013;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40997__auto__ = function(state_59965){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40997__auto____1.call(this,state_59965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40997__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40997__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___59993,ch))
})();
var state__41086__auto__ = (function (){var statearr_59992 = f__41085__auto__.call(null);
(statearr_59992[(6)] = c__41084__auto___59993);

return statearr_59992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___59993,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60014_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60014_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_60016 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_60016){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e60015){if((e60015 instanceof Error)){
var e = e60015;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60016], null));
} else {
var e = e60015;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_60016))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60017){
var map__60018 = p__60017;
var map__60018__$1 = ((((!((map__60018 == null)))?((((map__60018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60018):map__60018);
var opts = map__60018__$1;
var build_id = cljs.core.get.call(null,map__60018__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__60018,map__60018__$1,opts,build_id){
return (function (p__60020){
var vec__60021 = p__60020;
var seq__60022 = cljs.core.seq.call(null,vec__60021);
var first__60023 = cljs.core.first.call(null,seq__60022);
var seq__60022__$1 = cljs.core.next.call(null,seq__60022);
var map__60024 = first__60023;
var map__60024__$1 = ((((!((map__60024 == null)))?((((map__60024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60024):map__60024);
var msg = map__60024__$1;
var msg_name = cljs.core.get.call(null,map__60024__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60022__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__60021,seq__60022,first__60023,seq__60022__$1,map__60024,map__60024__$1,msg,msg_name,_,map__60018,map__60018__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__60021,seq__60022,first__60023,seq__60022__$1,map__60024,map__60024__$1,msg,msg_name,_,map__60018,map__60018__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__60018,map__60018__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60026){
var vec__60027 = p__60026;
var seq__60028 = cljs.core.seq.call(null,vec__60027);
var first__60029 = cljs.core.first.call(null,seq__60028);
var seq__60028__$1 = cljs.core.next.call(null,seq__60028);
var map__60030 = first__60029;
var map__60030__$1 = ((((!((map__60030 == null)))?((((map__60030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60030):map__60030);
var msg = map__60030__$1;
var msg_name = cljs.core.get.call(null,map__60030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60028__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60032){
var map__60033 = p__60032;
var map__60033__$1 = ((((!((map__60033 == null)))?((((map__60033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60033):map__60033);
var on_compile_warning = cljs.core.get.call(null,map__60033__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60033__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__60033,map__60033__$1,on_compile_warning,on_compile_fail){
return (function (p__60035){
var vec__60036 = p__60035;
var seq__60037 = cljs.core.seq.call(null,vec__60036);
var first__60038 = cljs.core.first.call(null,seq__60037);
var seq__60037__$1 = cljs.core.next.call(null,seq__60037);
var map__60039 = first__60038;
var map__60039__$1 = ((((!((map__60039 == null)))?((((map__60039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60039):map__60039);
var msg = map__60039__$1;
var msg_name = cljs.core.get.call(null,map__60039__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60037__$1;
var pred__60041 = cljs.core._EQ_;
var expr__60042 = msg_name;
if(cljs.core.truth_(pred__60041.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60042))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60041.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60042))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__60033,map__60033__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__,msg_hist,msg_names,msg){
return (function (state_60131){
var state_val_60132 = (state_60131[(1)]);
if((state_val_60132 === (7))){
var inst_60051 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60051)){
var statearr_60133_60180 = state_60131__$1;
(statearr_60133_60180[(1)] = (8));

} else {
var statearr_60134_60181 = state_60131__$1;
(statearr_60134_60181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (20))){
var inst_60125 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60135_60182 = state_60131__$1;
(statearr_60135_60182[(2)] = inst_60125);

(statearr_60135_60182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (27))){
var inst_60121 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60136_60183 = state_60131__$1;
(statearr_60136_60183[(2)] = inst_60121);

(statearr_60136_60183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (1))){
var inst_60044 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60044)){
var statearr_60137_60184 = state_60131__$1;
(statearr_60137_60184[(1)] = (2));

} else {
var statearr_60138_60185 = state_60131__$1;
(statearr_60138_60185[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (24))){
var inst_60123 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60139_60186 = state_60131__$1;
(statearr_60139_60186[(2)] = inst_60123);

(statearr_60139_60186[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (4))){
var inst_60129 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60131__$1,inst_60129);
} else {
if((state_val_60132 === (15))){
var inst_60127 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60140_60187 = state_60131__$1;
(statearr_60140_60187[(2)] = inst_60127);

(statearr_60140_60187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (21))){
var inst_60080 = (state_60131[(2)]);
var inst_60081 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60082 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60081);
var state_60131__$1 = (function (){var statearr_60141 = state_60131;
(statearr_60141[(7)] = inst_60080);

return statearr_60141;
})();
var statearr_60142_60188 = state_60131__$1;
(statearr_60142_60188[(2)] = inst_60082);

(statearr_60142_60188[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (31))){
var inst_60110 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60110)){
var statearr_60143_60189 = state_60131__$1;
(statearr_60143_60189[(1)] = (34));

} else {
var statearr_60144_60190 = state_60131__$1;
(statearr_60144_60190[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (32))){
var inst_60119 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60145_60191 = state_60131__$1;
(statearr_60145_60191[(2)] = inst_60119);

(statearr_60145_60191[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (33))){
var inst_60106 = (state_60131[(2)]);
var inst_60107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60108 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60107);
var state_60131__$1 = (function (){var statearr_60146 = state_60131;
(statearr_60146[(8)] = inst_60106);

return statearr_60146;
})();
var statearr_60147_60192 = state_60131__$1;
(statearr_60147_60192[(2)] = inst_60108);

(statearr_60147_60192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (13))){
var inst_60065 = figwheel.client.heads_up.clear.call(null);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(16),inst_60065);
} else {
if((state_val_60132 === (22))){
var inst_60086 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60087 = figwheel.client.heads_up.append_warning_message.call(null,inst_60086);
var state_60131__$1 = state_60131;
var statearr_60148_60193 = state_60131__$1;
(statearr_60148_60193[(2)] = inst_60087);

(statearr_60148_60193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (36))){
var inst_60117 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60149_60194 = state_60131__$1;
(statearr_60149_60194[(2)] = inst_60117);

(statearr_60149_60194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (29))){
var inst_60097 = (state_60131[(2)]);
var inst_60098 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60099 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60098);
var state_60131__$1 = (function (){var statearr_60150 = state_60131;
(statearr_60150[(9)] = inst_60097);

return statearr_60150;
})();
var statearr_60151_60195 = state_60131__$1;
(statearr_60151_60195[(2)] = inst_60099);

(statearr_60151_60195[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (6))){
var inst_60046 = (state_60131[(10)]);
var state_60131__$1 = state_60131;
var statearr_60152_60196 = state_60131__$1;
(statearr_60152_60196[(2)] = inst_60046);

(statearr_60152_60196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (28))){
var inst_60093 = (state_60131[(2)]);
var inst_60094 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60095 = figwheel.client.heads_up.display_warning.call(null,inst_60094);
var state_60131__$1 = (function (){var statearr_60153 = state_60131;
(statearr_60153[(11)] = inst_60093);

return statearr_60153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(29),inst_60095);
} else {
if((state_val_60132 === (25))){
var inst_60091 = figwheel.client.heads_up.clear.call(null);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(28),inst_60091);
} else {
if((state_val_60132 === (34))){
var inst_60112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(37),inst_60112);
} else {
if((state_val_60132 === (17))){
var inst_60071 = (state_60131[(2)]);
var inst_60072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60073 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60072);
var state_60131__$1 = (function (){var statearr_60154 = state_60131;
(statearr_60154[(12)] = inst_60071);

return statearr_60154;
})();
var statearr_60155_60197 = state_60131__$1;
(statearr_60155_60197[(2)] = inst_60073);

(statearr_60155_60197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (3))){
var inst_60063 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60063)){
var statearr_60156_60198 = state_60131__$1;
(statearr_60156_60198[(1)] = (13));

} else {
var statearr_60157_60199 = state_60131__$1;
(statearr_60157_60199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (12))){
var inst_60059 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60158_60200 = state_60131__$1;
(statearr_60158_60200[(2)] = inst_60059);

(statearr_60158_60200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (2))){
var inst_60046 = (state_60131[(10)]);
var inst_60046__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_60131__$1 = (function (){var statearr_60159 = state_60131;
(statearr_60159[(10)] = inst_60046__$1);

return statearr_60159;
})();
if(cljs.core.truth_(inst_60046__$1)){
var statearr_60160_60201 = state_60131__$1;
(statearr_60160_60201[(1)] = (5));

} else {
var statearr_60161_60202 = state_60131__$1;
(statearr_60161_60202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (23))){
var inst_60089 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60089)){
var statearr_60162_60203 = state_60131__$1;
(statearr_60162_60203[(1)] = (25));

} else {
var statearr_60163_60204 = state_60131__$1;
(statearr_60163_60204[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (35))){
var state_60131__$1 = state_60131;
var statearr_60164_60205 = state_60131__$1;
(statearr_60164_60205[(2)] = null);

(statearr_60164_60205[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (19))){
var inst_60084 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60084)){
var statearr_60165_60206 = state_60131__$1;
(statearr_60165_60206[(1)] = (22));

} else {
var statearr_60166_60207 = state_60131__$1;
(statearr_60166_60207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (11))){
var inst_60055 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60167_60208 = state_60131__$1;
(statearr_60167_60208[(2)] = inst_60055);

(statearr_60167_60208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (9))){
var inst_60057 = figwheel.client.heads_up.clear.call(null);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(12),inst_60057);
} else {
if((state_val_60132 === (5))){
var inst_60048 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_60131__$1 = state_60131;
var statearr_60168_60209 = state_60131__$1;
(statearr_60168_60209[(2)] = inst_60048);

(statearr_60168_60209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (14))){
var inst_60075 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60075)){
var statearr_60169_60210 = state_60131__$1;
(statearr_60169_60210[(1)] = (18));

} else {
var statearr_60170_60211 = state_60131__$1;
(statearr_60170_60211[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (26))){
var inst_60101 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_60131__$1 = state_60131;
if(cljs.core.truth_(inst_60101)){
var statearr_60171_60212 = state_60131__$1;
(statearr_60171_60212[(1)] = (30));

} else {
var statearr_60172_60213 = state_60131__$1;
(statearr_60172_60213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (16))){
var inst_60067 = (state_60131[(2)]);
var inst_60068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60069 = figwheel.client.heads_up.display_exception.call(null,inst_60068);
var state_60131__$1 = (function (){var statearr_60173 = state_60131;
(statearr_60173[(13)] = inst_60067);

return statearr_60173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(17),inst_60069);
} else {
if((state_val_60132 === (30))){
var inst_60103 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60104 = figwheel.client.heads_up.display_warning.call(null,inst_60103);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(33),inst_60104);
} else {
if((state_val_60132 === (10))){
var inst_60061 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60174_60214 = state_60131__$1;
(statearr_60174_60214[(2)] = inst_60061);

(statearr_60174_60214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (18))){
var inst_60077 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60078 = figwheel.client.heads_up.display_exception.call(null,inst_60077);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(21),inst_60078);
} else {
if((state_val_60132 === (37))){
var inst_60114 = (state_60131[(2)]);
var state_60131__$1 = state_60131;
var statearr_60175_60215 = state_60131__$1;
(statearr_60175_60215[(2)] = inst_60114);

(statearr_60175_60215[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60132 === (8))){
var inst_60053 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60131__$1 = state_60131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60131__$1,(11),inst_60053);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});})(c__41084__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40996__auto__,c__41084__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto____0 = (function (){
var statearr_60176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60176[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto__);

(statearr_60176[(1)] = (1));

return statearr_60176;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto____1 = (function (state_60131){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_60131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e60177){if((e60177 instanceof Object)){
var ex__41000__auto__ = e60177;
var statearr_60178_60216 = state_60131;
(statearr_60178_60216[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60217 = state_60131;
state_60131 = G__60217;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto__ = function(state_60131){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto____1.call(this,state_60131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__,msg_hist,msg_names,msg))
})();
var state__41086__auto__ = (function (){var statearr_60179 = f__41085__auto__.call(null);
(statearr_60179[(6)] = c__41084__auto__);

return statearr_60179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__,msg_hist,msg_names,msg))
);

return c__41084__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41084__auto___60246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___60246,ch){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___60246,ch){
return (function (state_60232){
var state_val_60233 = (state_60232[(1)]);
if((state_val_60233 === (1))){
var state_60232__$1 = state_60232;
var statearr_60234_60247 = state_60232__$1;
(statearr_60234_60247[(2)] = null);

(statearr_60234_60247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60233 === (2))){
var state_60232__$1 = state_60232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60232__$1,(4),ch);
} else {
if((state_val_60233 === (3))){
var inst_60230 = (state_60232[(2)]);
var state_60232__$1 = state_60232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60232__$1,inst_60230);
} else {
if((state_val_60233 === (4))){
var inst_60220 = (state_60232[(7)]);
var inst_60220__$1 = (state_60232[(2)]);
var state_60232__$1 = (function (){var statearr_60235 = state_60232;
(statearr_60235[(7)] = inst_60220__$1);

return statearr_60235;
})();
if(cljs.core.truth_(inst_60220__$1)){
var statearr_60236_60248 = state_60232__$1;
(statearr_60236_60248[(1)] = (5));

} else {
var statearr_60237_60249 = state_60232__$1;
(statearr_60237_60249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60233 === (5))){
var inst_60220 = (state_60232[(7)]);
var inst_60222 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_60220);
var state_60232__$1 = state_60232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60232__$1,(8),inst_60222);
} else {
if((state_val_60233 === (6))){
var state_60232__$1 = state_60232;
var statearr_60238_60250 = state_60232__$1;
(statearr_60238_60250[(2)] = null);

(statearr_60238_60250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60233 === (7))){
var inst_60228 = (state_60232[(2)]);
var state_60232__$1 = state_60232;
var statearr_60239_60251 = state_60232__$1;
(statearr_60239_60251[(2)] = inst_60228);

(statearr_60239_60251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60233 === (8))){
var inst_60224 = (state_60232[(2)]);
var state_60232__$1 = (function (){var statearr_60240 = state_60232;
(statearr_60240[(8)] = inst_60224);

return statearr_60240;
})();
var statearr_60241_60252 = state_60232__$1;
(statearr_60241_60252[(2)] = null);

(statearr_60241_60252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__41084__auto___60246,ch))
;
return ((function (switch__40996__auto__,c__41084__auto___60246,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40997__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40997__auto____0 = (function (){
var statearr_60242 = [null,null,null,null,null,null,null,null,null];
(statearr_60242[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40997__auto__);

(statearr_60242[(1)] = (1));

return statearr_60242;
});
var figwheel$client$heads_up_plugin_$_state_machine__40997__auto____1 = (function (state_60232){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_60232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e60243){if((e60243 instanceof Object)){
var ex__41000__auto__ = e60243;
var statearr_60244_60253 = state_60232;
(statearr_60244_60253[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60254 = state_60232;
state_60232 = G__60254;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40997__auto__ = function(state_60232){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40997__auto____1.call(this,state_60232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40997__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40997__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___60246,ch))
})();
var state__41086__auto__ = (function (){var statearr_60245 = f__41085__auto__.call(null);
(statearr_60245[(6)] = c__41084__auto___60246);

return statearr_60245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___60246,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__){
return (function (state_60260){
var state_val_60261 = (state_60260[(1)]);
if((state_val_60261 === (1))){
var inst_60255 = cljs.core.async.timeout.call(null,(3000));
var state_60260__$1 = state_60260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60260__$1,(2),inst_60255);
} else {
if((state_val_60261 === (2))){
var inst_60257 = (state_60260[(2)]);
var inst_60258 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_60260__$1 = (function (){var statearr_60262 = state_60260;
(statearr_60262[(7)] = inst_60257);

return statearr_60262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60260__$1,inst_60258);
} else {
return null;
}
}
});})(c__41084__auto__))
;
return ((function (switch__40996__auto__,c__41084__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40997__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40997__auto____0 = (function (){
var statearr_60263 = [null,null,null,null,null,null,null,null];
(statearr_60263[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40997__auto__);

(statearr_60263[(1)] = (1));

return statearr_60263;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40997__auto____1 = (function (state_60260){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_60260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e60264){if((e60264 instanceof Object)){
var ex__41000__auto__ = e60264;
var statearr_60265_60267 = state_60260;
(statearr_60265_60267[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60268 = state_60260;
state_60260 = G__60268;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40997__auto__ = function(state_60260){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40997__auto____1.call(this,state_60260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40997__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40997__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__))
})();
var state__41086__auto__ = (function (){var statearr_60266 = f__41085__auto__.call(null);
(statearr_60266[(6)] = c__41084__auto__);

return statearr_60266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__))
);

return c__41084__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__,figwheel_version,temp__4657__auto__){
return (function (state_60275){
var state_val_60276 = (state_60275[(1)]);
if((state_val_60276 === (1))){
var inst_60269 = cljs.core.async.timeout.call(null,(2000));
var state_60275__$1 = state_60275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60275__$1,(2),inst_60269);
} else {
if((state_val_60276 === (2))){
var inst_60271 = (state_60275[(2)]);
var inst_60272 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_60273 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_60272);
var state_60275__$1 = (function (){var statearr_60277 = state_60275;
(statearr_60277[(7)] = inst_60271);

return statearr_60277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60275__$1,inst_60273);
} else {
return null;
}
}
});})(c__41084__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40996__auto__,c__41084__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto____0 = (function (){
var statearr_60278 = [null,null,null,null,null,null,null,null];
(statearr_60278[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto__);

(statearr_60278[(1)] = (1));

return statearr_60278;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto____1 = (function (state_60275){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_60275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e60279){if((e60279 instanceof Object)){
var ex__41000__auto__ = e60279;
var statearr_60280_60282 = state_60275;
(statearr_60280_60282[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60283 = state_60275;
state_60275 = G__60283;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto__ = function(state_60275){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto____1.call(this,state_60275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__,figwheel_version,temp__4657__auto__))
})();
var state__41086__auto__ = (function (){var statearr_60281 = f__41085__auto__.call(null);
(statearr_60281[(6)] = c__41084__auto__);

return statearr_60281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__,figwheel_version,temp__4657__auto__))
);

return c__41084__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__60284){
var map__60285 = p__60284;
var map__60285__$1 = ((((!((map__60285 == null)))?((((map__60285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60285):map__60285);
var file = cljs.core.get.call(null,map__60285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60285__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60285__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60287 = "";
var G__60287__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60287),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__60287);
var G__60287__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60287__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__60287__$1);
if(cljs.core.truth_((function (){var and__37737__auto__ = line;
if(cljs.core.truth_(and__37737__auto__)){
return column;
} else {
return and__37737__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60287__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__60287__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__60288){
var map__60289 = p__60288;
var map__60289__$1 = ((((!((map__60289 == null)))?((((map__60289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60289):map__60289);
var ed = map__60289__$1;
var formatted_exception = cljs.core.get.call(null,map__60289__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__60289__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__60289__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__60291_60295 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__60292_60296 = null;
var count__60293_60297 = (0);
var i__60294_60298 = (0);
while(true){
if((i__60294_60298 < count__60293_60297)){
var msg_60299 = cljs.core._nth.call(null,chunk__60292_60296,i__60294_60298);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60299);

var G__60300 = seq__60291_60295;
var G__60301 = chunk__60292_60296;
var G__60302 = count__60293_60297;
var G__60303 = (i__60294_60298 + (1));
seq__60291_60295 = G__60300;
chunk__60292_60296 = G__60301;
count__60293_60297 = G__60302;
i__60294_60298 = G__60303;
continue;
} else {
var temp__4657__auto___60304 = cljs.core.seq.call(null,seq__60291_60295);
if(temp__4657__auto___60304){
var seq__60291_60305__$1 = temp__4657__auto___60304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60291_60305__$1)){
var c__38588__auto___60306 = cljs.core.chunk_first.call(null,seq__60291_60305__$1);
var G__60307 = cljs.core.chunk_rest.call(null,seq__60291_60305__$1);
var G__60308 = c__38588__auto___60306;
var G__60309 = cljs.core.count.call(null,c__38588__auto___60306);
var G__60310 = (0);
seq__60291_60295 = G__60307;
chunk__60292_60296 = G__60308;
count__60293_60297 = G__60309;
i__60294_60298 = G__60310;
continue;
} else {
var msg_60311 = cljs.core.first.call(null,seq__60291_60305__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60311);

var G__60312 = cljs.core.next.call(null,seq__60291_60305__$1);
var G__60313 = null;
var G__60314 = (0);
var G__60315 = (0);
seq__60291_60295 = G__60312;
chunk__60292_60296 = G__60313;
count__60293_60297 = G__60314;
i__60294_60298 = G__60315;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__60316){
var map__60317 = p__60316;
var map__60317__$1 = ((((!((map__60317 == null)))?((((map__60317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60317):map__60317);
var w = map__60317__$1;
var message = cljs.core.get.call(null,map__60317__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__37737__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__37737__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__37737__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__60319 = cljs.core.seq.call(null,plugins);
var chunk__60320 = null;
var count__60321 = (0);
var i__60322 = (0);
while(true){
if((i__60322 < count__60321)){
var vec__60323 = cljs.core._nth.call(null,chunk__60320,i__60322);
var k = cljs.core.nth.call(null,vec__60323,(0),null);
var plugin = cljs.core.nth.call(null,vec__60323,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60329 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60319,chunk__60320,count__60321,i__60322,pl_60329,vec__60323,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_60329.call(null,msg_hist);
});})(seq__60319,chunk__60320,count__60321,i__60322,pl_60329,vec__60323,k,plugin))
);
} else {
}

var G__60330 = seq__60319;
var G__60331 = chunk__60320;
var G__60332 = count__60321;
var G__60333 = (i__60322 + (1));
seq__60319 = G__60330;
chunk__60320 = G__60331;
count__60321 = G__60332;
i__60322 = G__60333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60319);
if(temp__4657__auto__){
var seq__60319__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60319__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__60319__$1);
var G__60334 = cljs.core.chunk_rest.call(null,seq__60319__$1);
var G__60335 = c__38588__auto__;
var G__60336 = cljs.core.count.call(null,c__38588__auto__);
var G__60337 = (0);
seq__60319 = G__60334;
chunk__60320 = G__60335;
count__60321 = G__60336;
i__60322 = G__60337;
continue;
} else {
var vec__60326 = cljs.core.first.call(null,seq__60319__$1);
var k = cljs.core.nth.call(null,vec__60326,(0),null);
var plugin = cljs.core.nth.call(null,vec__60326,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60338 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60319,chunk__60320,count__60321,i__60322,pl_60338,vec__60326,k,plugin,seq__60319__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_60338.call(null,msg_hist);
});})(seq__60319,chunk__60320,count__60321,i__60322,pl_60338,vec__60326,k,plugin,seq__60319__$1,temp__4657__auto__))
);
} else {
}

var G__60339 = cljs.core.next.call(null,seq__60319__$1);
var G__60340 = null;
var G__60341 = (0);
var G__60342 = (0);
seq__60319 = G__60339;
chunk__60320 = G__60340;
count__60321 = G__60341;
i__60322 = G__60342;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__60344 = arguments.length;
switch (G__60344) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__60345_60350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__60346_60351 = null;
var count__60347_60352 = (0);
var i__60348_60353 = (0);
while(true){
if((i__60348_60353 < count__60347_60352)){
var msg_60354 = cljs.core._nth.call(null,chunk__60346_60351,i__60348_60353);
figwheel.client.socket.handle_incoming_message.call(null,msg_60354);

var G__60355 = seq__60345_60350;
var G__60356 = chunk__60346_60351;
var G__60357 = count__60347_60352;
var G__60358 = (i__60348_60353 + (1));
seq__60345_60350 = G__60355;
chunk__60346_60351 = G__60356;
count__60347_60352 = G__60357;
i__60348_60353 = G__60358;
continue;
} else {
var temp__4657__auto___60359 = cljs.core.seq.call(null,seq__60345_60350);
if(temp__4657__auto___60359){
var seq__60345_60360__$1 = temp__4657__auto___60359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60345_60360__$1)){
var c__38588__auto___60361 = cljs.core.chunk_first.call(null,seq__60345_60360__$1);
var G__60362 = cljs.core.chunk_rest.call(null,seq__60345_60360__$1);
var G__60363 = c__38588__auto___60361;
var G__60364 = cljs.core.count.call(null,c__38588__auto___60361);
var G__60365 = (0);
seq__60345_60350 = G__60362;
chunk__60346_60351 = G__60363;
count__60347_60352 = G__60364;
i__60348_60353 = G__60365;
continue;
} else {
var msg_60366 = cljs.core.first.call(null,seq__60345_60360__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_60366);

var G__60367 = cljs.core.next.call(null,seq__60345_60360__$1);
var G__60368 = null;
var G__60369 = (0);
var G__60370 = (0);
seq__60345_60350 = G__60367;
chunk__60346_60351 = G__60368;
count__60347_60352 = G__60369;
i__60348_60353 = G__60370;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__38925__auto__ = [];
var len__38918__auto___60375 = arguments.length;
var i__38919__auto___60376 = (0);
while(true){
if((i__38919__auto___60376 < len__38918__auto___60375)){
args__38925__auto__.push((arguments[i__38919__auto___60376]));

var G__60377 = (i__38919__auto___60376 + (1));
i__38919__auto___60376 = G__60377;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((0) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38926__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__60372){
var map__60373 = p__60372;
var map__60373__$1 = ((((!((map__60373 == null)))?((((map__60373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60373):map__60373);
var opts = map__60373__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq60371){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60371));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e60378){if((e60378 instanceof Error)){
var e = e60378;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e60378;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__60379){
var map__60380 = p__60379;
var map__60380__$1 = ((((!((map__60380 == null)))?((((map__60380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60380):map__60380);
var msg_name = cljs.core.get.call(null,map__60380__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507178398469
