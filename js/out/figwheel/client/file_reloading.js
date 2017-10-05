// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__37749__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__37749__auto__){
return or__37749__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__37749__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
var or__37749__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__37749__auto____$1)){
return or__37749__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__58986_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__58986_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__58987 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__58988 = null;
var count__58989 = (0);
var i__58990 = (0);
while(true){
if((i__58990 < count__58989)){
var n = cljs.core._nth.call(null,chunk__58988,i__58990);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__58991 = seq__58987;
var G__58992 = chunk__58988;
var G__58993 = count__58989;
var G__58994 = (i__58990 + (1));
seq__58987 = G__58991;
chunk__58988 = G__58992;
count__58989 = G__58993;
i__58990 = G__58994;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58987);
if(temp__4657__auto__){
var seq__58987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58987__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__58987__$1);
var G__58995 = cljs.core.chunk_rest.call(null,seq__58987__$1);
var G__58996 = c__38588__auto__;
var G__58997 = cljs.core.count.call(null,c__38588__auto__);
var G__58998 = (0);
seq__58987 = G__58995;
chunk__58988 = G__58996;
count__58989 = G__58997;
i__58990 = G__58998;
continue;
} else {
var n = cljs.core.first.call(null,seq__58987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__58999 = cljs.core.next.call(null,seq__58987__$1);
var G__59000 = null;
var G__59001 = (0);
var G__59002 = (0);
seq__58987 = G__58999;
chunk__58988 = G__59000;
count__58989 = G__59001;
i__58990 = G__59002;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__59012_59020 = cljs.core.seq.call(null,deps);
var chunk__59013_59021 = null;
var count__59014_59022 = (0);
var i__59015_59023 = (0);
while(true){
if((i__59015_59023 < count__59014_59022)){
var dep_59024 = cljs.core._nth.call(null,chunk__59013_59021,i__59015_59023);
topo_sort_helper_STAR_.call(null,dep_59024,(depth + (1)),state);

var G__59025 = seq__59012_59020;
var G__59026 = chunk__59013_59021;
var G__59027 = count__59014_59022;
var G__59028 = (i__59015_59023 + (1));
seq__59012_59020 = G__59025;
chunk__59013_59021 = G__59026;
count__59014_59022 = G__59027;
i__59015_59023 = G__59028;
continue;
} else {
var temp__4657__auto___59029 = cljs.core.seq.call(null,seq__59012_59020);
if(temp__4657__auto___59029){
var seq__59012_59030__$1 = temp__4657__auto___59029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59012_59030__$1)){
var c__38588__auto___59031 = cljs.core.chunk_first.call(null,seq__59012_59030__$1);
var G__59032 = cljs.core.chunk_rest.call(null,seq__59012_59030__$1);
var G__59033 = c__38588__auto___59031;
var G__59034 = cljs.core.count.call(null,c__38588__auto___59031);
var G__59035 = (0);
seq__59012_59020 = G__59032;
chunk__59013_59021 = G__59033;
count__59014_59022 = G__59034;
i__59015_59023 = G__59035;
continue;
} else {
var dep_59036 = cljs.core.first.call(null,seq__59012_59030__$1);
topo_sort_helper_STAR_.call(null,dep_59036,(depth + (1)),state);

var G__59037 = cljs.core.next.call(null,seq__59012_59030__$1);
var G__59038 = null;
var G__59039 = (0);
var G__59040 = (0);
seq__59012_59020 = G__59037;
chunk__59013_59021 = G__59038;
count__59014_59022 = G__59039;
i__59015_59023 = G__59040;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__59016){
var vec__59017 = p__59016;
var seq__59018 = cljs.core.seq.call(null,vec__59017);
var first__59019 = cljs.core.first.call(null,seq__59018);
var seq__59018__$1 = cljs.core.next.call(null,seq__59018);
var x = first__59019;
var xs = seq__59018__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__59017,seq__59018,first__59019,seq__59018__$1,x,xs,get_deps__$1){
return (function (p1__59003_SHARP_){
return clojure.set.difference.call(null,p1__59003_SHARP_,x);
});})(vec__59017,seq__59018,first__59019,seq__59018__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__59041 = cljs.core.seq.call(null,provides);
var chunk__59042 = null;
var count__59043 = (0);
var i__59044 = (0);
while(true){
if((i__59044 < count__59043)){
var prov = cljs.core._nth.call(null,chunk__59042,i__59044);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59045_59053 = cljs.core.seq.call(null,requires);
var chunk__59046_59054 = null;
var count__59047_59055 = (0);
var i__59048_59056 = (0);
while(true){
if((i__59048_59056 < count__59047_59055)){
var req_59057 = cljs.core._nth.call(null,chunk__59046_59054,i__59048_59056);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59057,prov);

var G__59058 = seq__59045_59053;
var G__59059 = chunk__59046_59054;
var G__59060 = count__59047_59055;
var G__59061 = (i__59048_59056 + (1));
seq__59045_59053 = G__59058;
chunk__59046_59054 = G__59059;
count__59047_59055 = G__59060;
i__59048_59056 = G__59061;
continue;
} else {
var temp__4657__auto___59062 = cljs.core.seq.call(null,seq__59045_59053);
if(temp__4657__auto___59062){
var seq__59045_59063__$1 = temp__4657__auto___59062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59045_59063__$1)){
var c__38588__auto___59064 = cljs.core.chunk_first.call(null,seq__59045_59063__$1);
var G__59065 = cljs.core.chunk_rest.call(null,seq__59045_59063__$1);
var G__59066 = c__38588__auto___59064;
var G__59067 = cljs.core.count.call(null,c__38588__auto___59064);
var G__59068 = (0);
seq__59045_59053 = G__59065;
chunk__59046_59054 = G__59066;
count__59047_59055 = G__59067;
i__59048_59056 = G__59068;
continue;
} else {
var req_59069 = cljs.core.first.call(null,seq__59045_59063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59069,prov);

var G__59070 = cljs.core.next.call(null,seq__59045_59063__$1);
var G__59071 = null;
var G__59072 = (0);
var G__59073 = (0);
seq__59045_59053 = G__59070;
chunk__59046_59054 = G__59071;
count__59047_59055 = G__59072;
i__59048_59056 = G__59073;
continue;
}
} else {
}
}
break;
}

var G__59074 = seq__59041;
var G__59075 = chunk__59042;
var G__59076 = count__59043;
var G__59077 = (i__59044 + (1));
seq__59041 = G__59074;
chunk__59042 = G__59075;
count__59043 = G__59076;
i__59044 = G__59077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59041);
if(temp__4657__auto__){
var seq__59041__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59041__$1)){
var c__38588__auto__ = cljs.core.chunk_first.call(null,seq__59041__$1);
var G__59078 = cljs.core.chunk_rest.call(null,seq__59041__$1);
var G__59079 = c__38588__auto__;
var G__59080 = cljs.core.count.call(null,c__38588__auto__);
var G__59081 = (0);
seq__59041 = G__59078;
chunk__59042 = G__59079;
count__59043 = G__59080;
i__59044 = G__59081;
continue;
} else {
var prov = cljs.core.first.call(null,seq__59041__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59049_59082 = cljs.core.seq.call(null,requires);
var chunk__59050_59083 = null;
var count__59051_59084 = (0);
var i__59052_59085 = (0);
while(true){
if((i__59052_59085 < count__59051_59084)){
var req_59086 = cljs.core._nth.call(null,chunk__59050_59083,i__59052_59085);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59086,prov);

var G__59087 = seq__59049_59082;
var G__59088 = chunk__59050_59083;
var G__59089 = count__59051_59084;
var G__59090 = (i__59052_59085 + (1));
seq__59049_59082 = G__59087;
chunk__59050_59083 = G__59088;
count__59051_59084 = G__59089;
i__59052_59085 = G__59090;
continue;
} else {
var temp__4657__auto___59091__$1 = cljs.core.seq.call(null,seq__59049_59082);
if(temp__4657__auto___59091__$1){
var seq__59049_59092__$1 = temp__4657__auto___59091__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59049_59092__$1)){
var c__38588__auto___59093 = cljs.core.chunk_first.call(null,seq__59049_59092__$1);
var G__59094 = cljs.core.chunk_rest.call(null,seq__59049_59092__$1);
var G__59095 = c__38588__auto___59093;
var G__59096 = cljs.core.count.call(null,c__38588__auto___59093);
var G__59097 = (0);
seq__59049_59082 = G__59094;
chunk__59050_59083 = G__59095;
count__59051_59084 = G__59096;
i__59052_59085 = G__59097;
continue;
} else {
var req_59098 = cljs.core.first.call(null,seq__59049_59092__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59098,prov);

var G__59099 = cljs.core.next.call(null,seq__59049_59092__$1);
var G__59100 = null;
var G__59101 = (0);
var G__59102 = (0);
seq__59049_59082 = G__59099;
chunk__59050_59083 = G__59100;
count__59051_59084 = G__59101;
i__59052_59085 = G__59102;
continue;
}
} else {
}
}
break;
}

var G__59103 = cljs.core.next.call(null,seq__59041__$1);
var G__59104 = null;
var G__59105 = (0);
var G__59106 = (0);
seq__59041 = G__59103;
chunk__59042 = G__59104;
count__59043 = G__59105;
i__59044 = G__59106;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__59107_59111 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__59108_59112 = null;
var count__59109_59113 = (0);
var i__59110_59114 = (0);
while(true){
if((i__59110_59114 < count__59109_59113)){
var ns_59115 = cljs.core._nth.call(null,chunk__59108_59112,i__59110_59114);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59115);

var G__59116 = seq__59107_59111;
var G__59117 = chunk__59108_59112;
var G__59118 = count__59109_59113;
var G__59119 = (i__59110_59114 + (1));
seq__59107_59111 = G__59116;
chunk__59108_59112 = G__59117;
count__59109_59113 = G__59118;
i__59110_59114 = G__59119;
continue;
} else {
var temp__4657__auto___59120 = cljs.core.seq.call(null,seq__59107_59111);
if(temp__4657__auto___59120){
var seq__59107_59121__$1 = temp__4657__auto___59120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59107_59121__$1)){
var c__38588__auto___59122 = cljs.core.chunk_first.call(null,seq__59107_59121__$1);
var G__59123 = cljs.core.chunk_rest.call(null,seq__59107_59121__$1);
var G__59124 = c__38588__auto___59122;
var G__59125 = cljs.core.count.call(null,c__38588__auto___59122);
var G__59126 = (0);
seq__59107_59111 = G__59123;
chunk__59108_59112 = G__59124;
count__59109_59113 = G__59125;
i__59110_59114 = G__59126;
continue;
} else {
var ns_59127 = cljs.core.first.call(null,seq__59107_59121__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59127);

var G__59128 = cljs.core.next.call(null,seq__59107_59121__$1);
var G__59129 = null;
var G__59130 = (0);
var G__59131 = (0);
seq__59107_59111 = G__59128;
chunk__59108_59112 = G__59129;
count__59109_59113 = G__59130;
i__59110_59114 = G__59131;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__37749__auto__ = goog.require__;
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__59132__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__59132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59133__i = 0, G__59133__a = new Array(arguments.length -  0);
while (G__59133__i < G__59133__a.length) {G__59133__a[G__59133__i] = arguments[G__59133__i + 0]; ++G__59133__i;}
  args = new cljs.core.IndexedSeq(G__59133__a,0,null);
} 
return G__59132__delegate.call(this,args);};
G__59132.cljs$lang$maxFixedArity = 0;
G__59132.cljs$lang$applyTo = (function (arglist__59134){
var args = cljs.core.seq(arglist__59134);
return G__59132__delegate(args);
});
G__59132.cljs$core$IFn$_invoke$arity$variadic = G__59132__delegate;
return G__59132;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__59135_SHARP_,p2__59136_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59135_SHARP_)].join('')),p2__59136_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__59137_SHARP_,p2__59138_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59137_SHARP_)].join(''),p2__59138_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__59139 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__59139.addCallback(((function (G__59139){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__59139))
);

G__59139.addErrback(((function (G__59139){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__59139))
);

return G__59139;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__59140 = cljs.core._EQ_;
var expr__59141 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__59140.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__59141))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__59140,expr__59141){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__59140,expr__59141))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__59140,expr__59141){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e59143){if((e59143 instanceof Error)){
var e = e59143;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e59143;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__59140,expr__59141))
} else {
if(cljs.core.truth_(pred__59140.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__59141))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__59140.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__59141))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__59140.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__59141))){
return ((function (pred__59140,expr__59141){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e59144){if((e59144 instanceof Error)){
var e = e59144;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e59144;

}
}})());
});
;})(pred__59140,expr__59141))
} else {
return ((function (pred__59140,expr__59141){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__59140,expr__59141))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__59145,callback){
var map__59146 = p__59145;
var map__59146__$1 = ((((!((map__59146 == null)))?((((map__59146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59146):map__59146);
var file_msg = map__59146__$1;
var request_url = cljs.core.get.call(null,map__59146__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__59146,map__59146__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__59146,map__59146__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__){
return (function (state_59170){
var state_val_59171 = (state_59170[(1)]);
if((state_val_59171 === (7))){
var inst_59166 = (state_59170[(2)]);
var state_59170__$1 = state_59170;
var statearr_59172_59189 = state_59170__$1;
(statearr_59172_59189[(2)] = inst_59166);

(statearr_59172_59189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (1))){
var state_59170__$1 = state_59170;
var statearr_59173_59190 = state_59170__$1;
(statearr_59173_59190[(2)] = null);

(statearr_59173_59190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (4))){
var inst_59150 = (state_59170[(7)]);
var inst_59150__$1 = (state_59170[(2)]);
var state_59170__$1 = (function (){var statearr_59174 = state_59170;
(statearr_59174[(7)] = inst_59150__$1);

return statearr_59174;
})();
if(cljs.core.truth_(inst_59150__$1)){
var statearr_59175_59191 = state_59170__$1;
(statearr_59175_59191[(1)] = (5));

} else {
var statearr_59176_59192 = state_59170__$1;
(statearr_59176_59192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (6))){
var state_59170__$1 = state_59170;
var statearr_59177_59193 = state_59170__$1;
(statearr_59177_59193[(2)] = null);

(statearr_59177_59193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (3))){
var inst_59168 = (state_59170[(2)]);
var state_59170__$1 = state_59170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59170__$1,inst_59168);
} else {
if((state_val_59171 === (2))){
var state_59170__$1 = state_59170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59170__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_59171 === (11))){
var inst_59162 = (state_59170[(2)]);
var state_59170__$1 = (function (){var statearr_59178 = state_59170;
(statearr_59178[(8)] = inst_59162);

return statearr_59178;
})();
var statearr_59179_59194 = state_59170__$1;
(statearr_59179_59194[(2)] = null);

(statearr_59179_59194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (9))){
var inst_59154 = (state_59170[(9)]);
var inst_59156 = (state_59170[(10)]);
var inst_59158 = inst_59156.call(null,inst_59154);
var state_59170__$1 = state_59170;
var statearr_59180_59195 = state_59170__$1;
(statearr_59180_59195[(2)] = inst_59158);

(statearr_59180_59195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (5))){
var inst_59150 = (state_59170[(7)]);
var inst_59152 = figwheel.client.file_reloading.blocking_load.call(null,inst_59150);
var state_59170__$1 = state_59170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59170__$1,(8),inst_59152);
} else {
if((state_val_59171 === (10))){
var inst_59154 = (state_59170[(9)]);
var inst_59160 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_59154);
var state_59170__$1 = state_59170;
var statearr_59181_59196 = state_59170__$1;
(statearr_59181_59196[(2)] = inst_59160);

(statearr_59181_59196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59171 === (8))){
var inst_59150 = (state_59170[(7)]);
var inst_59156 = (state_59170[(10)]);
var inst_59154 = (state_59170[(2)]);
var inst_59155 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_59156__$1 = cljs.core.get.call(null,inst_59155,inst_59150);
var state_59170__$1 = (function (){var statearr_59182 = state_59170;
(statearr_59182[(9)] = inst_59154);

(statearr_59182[(10)] = inst_59156__$1);

return statearr_59182;
})();
if(cljs.core.truth_(inst_59156__$1)){
var statearr_59183_59197 = state_59170__$1;
(statearr_59183_59197[(1)] = (9));

} else {
var statearr_59184_59198 = state_59170__$1;
(statearr_59184_59198[(1)] = (10));

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
});})(c__41084__auto__))
;
return ((function (switch__40996__auto__,c__41084__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40997__auto__ = null;
var figwheel$client$file_reloading$state_machine__40997__auto____0 = (function (){
var statearr_59185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59185[(0)] = figwheel$client$file_reloading$state_machine__40997__auto__);

(statearr_59185[(1)] = (1));

return statearr_59185;
});
var figwheel$client$file_reloading$state_machine__40997__auto____1 = (function (state_59170){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_59170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e59186){if((e59186 instanceof Object)){
var ex__41000__auto__ = e59186;
var statearr_59187_59199 = state_59170;
(statearr_59187_59199[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59200 = state_59170;
state_59170 = G__59200;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40997__auto__ = function(state_59170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40997__auto____1.call(this,state_59170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40997__auto____0;
figwheel$client$file_reloading$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40997__auto____1;
return figwheel$client$file_reloading$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__))
})();
var state__41086__auto__ = (function (){var statearr_59188 = f__41085__auto__.call(null);
(statearr_59188[(6)] = c__41084__auto__);

return statearr_59188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__))
);

return c__41084__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__59201,callback){
var map__59202 = p__59201;
var map__59202__$1 = ((((!((map__59202 == null)))?((((map__59202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59202):map__59202);
var file_msg = map__59202__$1;
var namespace = cljs.core.get.call(null,map__59202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__59202,map__59202__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__59202,map__59202__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__59204){
var map__59205 = p__59204;
var map__59205__$1 = ((((!((map__59205 == null)))?((((map__59205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59205):map__59205);
var file_msg = map__59205__$1;
var namespace = cljs.core.get.call(null,map__59205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__59207){
var map__59208 = p__59207;
var map__59208__$1 = ((((!((map__59208 == null)))?((((map__59208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59208):map__59208);
var file_msg = map__59208__$1;
var namespace = cljs.core.get.call(null,map__59208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__37737__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__37737__auto__){
var or__37749__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
var or__37749__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37749__auto____$1)){
return or__37749__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__37737__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__59210,callback){
var map__59211 = p__59210;
var map__59211__$1 = ((((!((map__59211 == null)))?((((map__59211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59211):map__59211);
var file_msg = map__59211__$1;
var request_url = cljs.core.get.call(null,map__59211__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__59211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__41084__auto___59261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___59261,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___59261,out){
return (function (state_59246){
var state_val_59247 = (state_59246[(1)]);
if((state_val_59247 === (1))){
var inst_59220 = cljs.core.seq.call(null,files);
var inst_59221 = cljs.core.first.call(null,inst_59220);
var inst_59222 = cljs.core.next.call(null,inst_59220);
var inst_59223 = files;
var state_59246__$1 = (function (){var statearr_59248 = state_59246;
(statearr_59248[(7)] = inst_59222);

(statearr_59248[(8)] = inst_59223);

(statearr_59248[(9)] = inst_59221);

return statearr_59248;
})();
var statearr_59249_59262 = state_59246__$1;
(statearr_59249_59262[(2)] = null);

(statearr_59249_59262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59247 === (2))){
var inst_59229 = (state_59246[(10)]);
var inst_59223 = (state_59246[(8)]);
var inst_59228 = cljs.core.seq.call(null,inst_59223);
var inst_59229__$1 = cljs.core.first.call(null,inst_59228);
var inst_59230 = cljs.core.next.call(null,inst_59228);
var inst_59231 = (inst_59229__$1 == null);
var inst_59232 = cljs.core.not.call(null,inst_59231);
var state_59246__$1 = (function (){var statearr_59250 = state_59246;
(statearr_59250[(10)] = inst_59229__$1);

(statearr_59250[(11)] = inst_59230);

return statearr_59250;
})();
if(inst_59232){
var statearr_59251_59263 = state_59246__$1;
(statearr_59251_59263[(1)] = (4));

} else {
var statearr_59252_59264 = state_59246__$1;
(statearr_59252_59264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59247 === (3))){
var inst_59244 = (state_59246[(2)]);
var state_59246__$1 = state_59246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59246__$1,inst_59244);
} else {
if((state_val_59247 === (4))){
var inst_59229 = (state_59246[(10)]);
var inst_59234 = figwheel.client.file_reloading.reload_js_file.call(null,inst_59229);
var state_59246__$1 = state_59246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59246__$1,(7),inst_59234);
} else {
if((state_val_59247 === (5))){
var inst_59240 = cljs.core.async.close_BANG_.call(null,out);
var state_59246__$1 = state_59246;
var statearr_59253_59265 = state_59246__$1;
(statearr_59253_59265[(2)] = inst_59240);

(statearr_59253_59265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59247 === (6))){
var inst_59242 = (state_59246[(2)]);
var state_59246__$1 = state_59246;
var statearr_59254_59266 = state_59246__$1;
(statearr_59254_59266[(2)] = inst_59242);

(statearr_59254_59266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59247 === (7))){
var inst_59230 = (state_59246[(11)]);
var inst_59236 = (state_59246[(2)]);
var inst_59237 = cljs.core.async.put_BANG_.call(null,out,inst_59236);
var inst_59223 = inst_59230;
var state_59246__$1 = (function (){var statearr_59255 = state_59246;
(statearr_59255[(8)] = inst_59223);

(statearr_59255[(12)] = inst_59237);

return statearr_59255;
})();
var statearr_59256_59267 = state_59246__$1;
(statearr_59256_59267[(2)] = null);

(statearr_59256_59267[(1)] = (2));


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
});})(c__41084__auto___59261,out))
;
return ((function (switch__40996__auto__,c__41084__auto___59261,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto____0 = (function (){
var statearr_59257 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59257[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto__);

(statearr_59257[(1)] = (1));

return statearr_59257;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto____1 = (function (state_59246){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_59246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e59258){if((e59258 instanceof Object)){
var ex__41000__auto__ = e59258;
var statearr_59259_59268 = state_59246;
(statearr_59259_59268[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59269 = state_59246;
state_59246 = G__59269;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto__ = function(state_59246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto____1.call(this,state_59246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___59261,out))
})();
var state__41086__auto__ = (function (){var statearr_59260 = f__41085__auto__.call(null);
(statearr_59260[(6)] = c__41084__auto___59261);

return statearr_59260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___59261,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__59270,opts){
var map__59271 = p__59270;
var map__59271__$1 = ((((!((map__59271 == null)))?((((map__59271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59271):map__59271);
var eval_body = cljs.core.get.call(null,map__59271__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__59271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__37737__auto__ = eval_body;
if(cljs.core.truth_(and__37737__auto__)){
return typeof eval_body === 'string';
} else {
return and__37737__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e59273){var e = e59273;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__59274_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__59274_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__59275){
var vec__59276 = p__59275;
var k = cljs.core.nth.call(null,vec__59276,(0),null);
var v = cljs.core.nth.call(null,vec__59276,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__59279){
var vec__59280 = p__59279;
var k = cljs.core.nth.call(null,vec__59280,(0),null);
var v = cljs.core.nth.call(null,vec__59280,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__59286,p__59287){
var map__59288 = p__59286;
var map__59288__$1 = ((((!((map__59288 == null)))?((((map__59288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59288):map__59288);
var opts = map__59288__$1;
var before_jsload = cljs.core.get.call(null,map__59288__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__59288__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__59288__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__59289 = p__59287;
var map__59289__$1 = ((((!((map__59289 == null)))?((((map__59289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59289):map__59289);
var msg = map__59289__$1;
var files = cljs.core.get.call(null,map__59289__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__59289__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__59289__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_59443){
var state_val_59444 = (state_59443[(1)]);
if((state_val_59444 === (7))){
var inst_59305 = (state_59443[(7)]);
var inst_59304 = (state_59443[(8)]);
var inst_59306 = (state_59443[(9)]);
var inst_59303 = (state_59443[(10)]);
var inst_59311 = cljs.core._nth.call(null,inst_59304,inst_59306);
var inst_59312 = figwheel.client.file_reloading.eval_body.call(null,inst_59311,opts);
var inst_59313 = (inst_59306 + (1));
var tmp59445 = inst_59305;
var tmp59446 = inst_59304;
var tmp59447 = inst_59303;
var inst_59303__$1 = tmp59447;
var inst_59304__$1 = tmp59446;
var inst_59305__$1 = tmp59445;
var inst_59306__$1 = inst_59313;
var state_59443__$1 = (function (){var statearr_59448 = state_59443;
(statearr_59448[(11)] = inst_59312);

(statearr_59448[(7)] = inst_59305__$1);

(statearr_59448[(8)] = inst_59304__$1);

(statearr_59448[(9)] = inst_59306__$1);

(statearr_59448[(10)] = inst_59303__$1);

return statearr_59448;
})();
var statearr_59449_59532 = state_59443__$1;
(statearr_59449_59532[(2)] = null);

(statearr_59449_59532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (20))){
var inst_59346 = (state_59443[(12)]);
var inst_59354 = figwheel.client.file_reloading.sort_files.call(null,inst_59346);
var state_59443__$1 = state_59443;
var statearr_59450_59533 = state_59443__$1;
(statearr_59450_59533[(2)] = inst_59354);

(statearr_59450_59533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (27))){
var state_59443__$1 = state_59443;
var statearr_59451_59534 = state_59443__$1;
(statearr_59451_59534[(2)] = null);

(statearr_59451_59534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (1))){
var inst_59295 = (state_59443[(13)]);
var inst_59292 = before_jsload.call(null,files);
var inst_59293 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_59294 = (function (){return ((function (inst_59295,inst_59292,inst_59293,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__59283_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__59283_SHARP_);
});
;})(inst_59295,inst_59292,inst_59293,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59295__$1 = cljs.core.filter.call(null,inst_59294,files);
var inst_59296 = cljs.core.not_empty.call(null,inst_59295__$1);
var state_59443__$1 = (function (){var statearr_59452 = state_59443;
(statearr_59452[(14)] = inst_59292);

(statearr_59452[(13)] = inst_59295__$1);

(statearr_59452[(15)] = inst_59293);

return statearr_59452;
})();
if(cljs.core.truth_(inst_59296)){
var statearr_59453_59535 = state_59443__$1;
(statearr_59453_59535[(1)] = (2));

} else {
var statearr_59454_59536 = state_59443__$1;
(statearr_59454_59536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (24))){
var state_59443__$1 = state_59443;
var statearr_59455_59537 = state_59443__$1;
(statearr_59455_59537[(2)] = null);

(statearr_59455_59537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (39))){
var inst_59396 = (state_59443[(16)]);
var state_59443__$1 = state_59443;
var statearr_59456_59538 = state_59443__$1;
(statearr_59456_59538[(2)] = inst_59396);

(statearr_59456_59538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (46))){
var inst_59438 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
var statearr_59457_59539 = state_59443__$1;
(statearr_59457_59539[(2)] = inst_59438);

(statearr_59457_59539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (4))){
var inst_59340 = (state_59443[(2)]);
var inst_59341 = cljs.core.List.EMPTY;
var inst_59342 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_59341);
var inst_59343 = (function (){return ((function (inst_59340,inst_59341,inst_59342,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__59284_SHARP_){
var and__37737__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__59284_SHARP_);
if(cljs.core.truth_(and__37737__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__59284_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__59284_SHARP_)));
} else {
return and__37737__auto__;
}
});
;})(inst_59340,inst_59341,inst_59342,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59344 = cljs.core.filter.call(null,inst_59343,files);
var inst_59345 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_59346 = cljs.core.concat.call(null,inst_59344,inst_59345);
var state_59443__$1 = (function (){var statearr_59458 = state_59443;
(statearr_59458[(17)] = inst_59340);

(statearr_59458[(12)] = inst_59346);

(statearr_59458[(18)] = inst_59342);

return statearr_59458;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_59459_59540 = state_59443__$1;
(statearr_59459_59540[(1)] = (16));

} else {
var statearr_59460_59541 = state_59443__$1;
(statearr_59460_59541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (15))){
var inst_59330 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
var statearr_59461_59542 = state_59443__$1;
(statearr_59461_59542[(2)] = inst_59330);

(statearr_59461_59542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (21))){
var inst_59356 = (state_59443[(19)]);
var inst_59356__$1 = (state_59443[(2)]);
var inst_59357 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_59356__$1);
var state_59443__$1 = (function (){var statearr_59462 = state_59443;
(statearr_59462[(19)] = inst_59356__$1);

return statearr_59462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59443__$1,(22),inst_59357);
} else {
if((state_val_59444 === (31))){
var inst_59441 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59443__$1,inst_59441);
} else {
if((state_val_59444 === (32))){
var inst_59396 = (state_59443[(16)]);
var inst_59401 = inst_59396.cljs$lang$protocol_mask$partition0$;
var inst_59402 = (inst_59401 & (64));
var inst_59403 = inst_59396.cljs$core$ISeq$;
var inst_59404 = (cljs.core.PROTOCOL_SENTINEL === inst_59403);
var inst_59405 = (inst_59402) || (inst_59404);
var state_59443__$1 = state_59443;
if(cljs.core.truth_(inst_59405)){
var statearr_59463_59543 = state_59443__$1;
(statearr_59463_59543[(1)] = (35));

} else {
var statearr_59464_59544 = state_59443__$1;
(statearr_59464_59544[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (40))){
var inst_59418 = (state_59443[(20)]);
var inst_59417 = (state_59443[(2)]);
var inst_59418__$1 = cljs.core.get.call(null,inst_59417,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_59419 = cljs.core.get.call(null,inst_59417,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_59420 = cljs.core.not_empty.call(null,inst_59418__$1);
var state_59443__$1 = (function (){var statearr_59465 = state_59443;
(statearr_59465[(20)] = inst_59418__$1);

(statearr_59465[(21)] = inst_59419);

return statearr_59465;
})();
if(cljs.core.truth_(inst_59420)){
var statearr_59466_59545 = state_59443__$1;
(statearr_59466_59545[(1)] = (41));

} else {
var statearr_59467_59546 = state_59443__$1;
(statearr_59467_59546[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (33))){
var state_59443__$1 = state_59443;
var statearr_59468_59547 = state_59443__$1;
(statearr_59468_59547[(2)] = false);

(statearr_59468_59547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (13))){
var inst_59316 = (state_59443[(22)]);
var inst_59320 = cljs.core.chunk_first.call(null,inst_59316);
var inst_59321 = cljs.core.chunk_rest.call(null,inst_59316);
var inst_59322 = cljs.core.count.call(null,inst_59320);
var inst_59303 = inst_59321;
var inst_59304 = inst_59320;
var inst_59305 = inst_59322;
var inst_59306 = (0);
var state_59443__$1 = (function (){var statearr_59469 = state_59443;
(statearr_59469[(7)] = inst_59305);

(statearr_59469[(8)] = inst_59304);

(statearr_59469[(9)] = inst_59306);

(statearr_59469[(10)] = inst_59303);

return statearr_59469;
})();
var statearr_59470_59548 = state_59443__$1;
(statearr_59470_59548[(2)] = null);

(statearr_59470_59548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (22))){
var inst_59364 = (state_59443[(23)]);
var inst_59359 = (state_59443[(24)]);
var inst_59360 = (state_59443[(25)]);
var inst_59356 = (state_59443[(19)]);
var inst_59359__$1 = (state_59443[(2)]);
var inst_59360__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_59359__$1);
var inst_59361 = (function (){var all_files = inst_59356;
var res_SINGLEQUOTE_ = inst_59359__$1;
var res = inst_59360__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_59364,inst_59359,inst_59360,inst_59356,inst_59359__$1,inst_59360__$1,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__59285_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__59285_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_59364,inst_59359,inst_59360,inst_59356,inst_59359__$1,inst_59360__$1,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59362 = cljs.core.filter.call(null,inst_59361,inst_59359__$1);
var inst_59363 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_59364__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_59363);
var inst_59365 = cljs.core.not_empty.call(null,inst_59364__$1);
var state_59443__$1 = (function (){var statearr_59471 = state_59443;
(statearr_59471[(23)] = inst_59364__$1);

(statearr_59471[(24)] = inst_59359__$1);

(statearr_59471[(25)] = inst_59360__$1);

(statearr_59471[(26)] = inst_59362);

return statearr_59471;
})();
if(cljs.core.truth_(inst_59365)){
var statearr_59472_59549 = state_59443__$1;
(statearr_59472_59549[(1)] = (23));

} else {
var statearr_59473_59550 = state_59443__$1;
(statearr_59473_59550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (36))){
var state_59443__$1 = state_59443;
var statearr_59474_59551 = state_59443__$1;
(statearr_59474_59551[(2)] = false);

(statearr_59474_59551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (41))){
var inst_59418 = (state_59443[(20)]);
var inst_59422 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_59423 = cljs.core.map.call(null,inst_59422,inst_59418);
var inst_59424 = cljs.core.pr_str.call(null,inst_59423);
var inst_59425 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59424)].join('');
var inst_59426 = figwheel.client.utils.log.call(null,inst_59425);
var state_59443__$1 = state_59443;
var statearr_59475_59552 = state_59443__$1;
(statearr_59475_59552[(2)] = inst_59426);

(statearr_59475_59552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (43))){
var inst_59419 = (state_59443[(21)]);
var inst_59429 = (state_59443[(2)]);
var inst_59430 = cljs.core.not_empty.call(null,inst_59419);
var state_59443__$1 = (function (){var statearr_59476 = state_59443;
(statearr_59476[(27)] = inst_59429);

return statearr_59476;
})();
if(cljs.core.truth_(inst_59430)){
var statearr_59477_59553 = state_59443__$1;
(statearr_59477_59553[(1)] = (44));

} else {
var statearr_59478_59554 = state_59443__$1;
(statearr_59478_59554[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (29))){
var inst_59364 = (state_59443[(23)]);
var inst_59396 = (state_59443[(16)]);
var inst_59359 = (state_59443[(24)]);
var inst_59360 = (state_59443[(25)]);
var inst_59362 = (state_59443[(26)]);
var inst_59356 = (state_59443[(19)]);
var inst_59392 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_59395 = (function (){var all_files = inst_59356;
var res_SINGLEQUOTE_ = inst_59359;
var res = inst_59360;
var files_not_loaded = inst_59362;
var dependencies_that_loaded = inst_59364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59396,inst_59359,inst_59360,inst_59362,inst_59356,inst_59392,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__59394){
var map__59479 = p__59394;
var map__59479__$1 = ((((!((map__59479 == null)))?((((map__59479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59479):map__59479);
var namespace = cljs.core.get.call(null,map__59479__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59396,inst_59359,inst_59360,inst_59362,inst_59356,inst_59392,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59396__$1 = cljs.core.group_by.call(null,inst_59395,inst_59362);
var inst_59398 = (inst_59396__$1 == null);
var inst_59399 = cljs.core.not.call(null,inst_59398);
var state_59443__$1 = (function (){var statearr_59481 = state_59443;
(statearr_59481[(16)] = inst_59396__$1);

(statearr_59481[(28)] = inst_59392);

return statearr_59481;
})();
if(inst_59399){
var statearr_59482_59555 = state_59443__$1;
(statearr_59482_59555[(1)] = (32));

} else {
var statearr_59483_59556 = state_59443__$1;
(statearr_59483_59556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (44))){
var inst_59419 = (state_59443[(21)]);
var inst_59432 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59419);
var inst_59433 = cljs.core.pr_str.call(null,inst_59432);
var inst_59434 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59433)].join('');
var inst_59435 = figwheel.client.utils.log.call(null,inst_59434);
var state_59443__$1 = state_59443;
var statearr_59484_59557 = state_59443__$1;
(statearr_59484_59557[(2)] = inst_59435);

(statearr_59484_59557[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (6))){
var inst_59337 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
var statearr_59485_59558 = state_59443__$1;
(statearr_59485_59558[(2)] = inst_59337);

(statearr_59485_59558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (28))){
var inst_59362 = (state_59443[(26)]);
var inst_59389 = (state_59443[(2)]);
var inst_59390 = cljs.core.not_empty.call(null,inst_59362);
var state_59443__$1 = (function (){var statearr_59486 = state_59443;
(statearr_59486[(29)] = inst_59389);

return statearr_59486;
})();
if(cljs.core.truth_(inst_59390)){
var statearr_59487_59559 = state_59443__$1;
(statearr_59487_59559[(1)] = (29));

} else {
var statearr_59488_59560 = state_59443__$1;
(statearr_59488_59560[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (25))){
var inst_59360 = (state_59443[(25)]);
var inst_59376 = (state_59443[(2)]);
var inst_59377 = cljs.core.not_empty.call(null,inst_59360);
var state_59443__$1 = (function (){var statearr_59489 = state_59443;
(statearr_59489[(30)] = inst_59376);

return statearr_59489;
})();
if(cljs.core.truth_(inst_59377)){
var statearr_59490_59561 = state_59443__$1;
(statearr_59490_59561[(1)] = (26));

} else {
var statearr_59491_59562 = state_59443__$1;
(statearr_59491_59562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (34))){
var inst_59412 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
if(cljs.core.truth_(inst_59412)){
var statearr_59492_59563 = state_59443__$1;
(statearr_59492_59563[(1)] = (38));

} else {
var statearr_59493_59564 = state_59443__$1;
(statearr_59493_59564[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (17))){
var state_59443__$1 = state_59443;
var statearr_59494_59565 = state_59443__$1;
(statearr_59494_59565[(2)] = recompile_dependents);

(statearr_59494_59565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (3))){
var state_59443__$1 = state_59443;
var statearr_59495_59566 = state_59443__$1;
(statearr_59495_59566[(2)] = null);

(statearr_59495_59566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (12))){
var inst_59333 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
var statearr_59496_59567 = state_59443__$1;
(statearr_59496_59567[(2)] = inst_59333);

(statearr_59496_59567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (2))){
var inst_59295 = (state_59443[(13)]);
var inst_59302 = cljs.core.seq.call(null,inst_59295);
var inst_59303 = inst_59302;
var inst_59304 = null;
var inst_59305 = (0);
var inst_59306 = (0);
var state_59443__$1 = (function (){var statearr_59497 = state_59443;
(statearr_59497[(7)] = inst_59305);

(statearr_59497[(8)] = inst_59304);

(statearr_59497[(9)] = inst_59306);

(statearr_59497[(10)] = inst_59303);

return statearr_59497;
})();
var statearr_59498_59568 = state_59443__$1;
(statearr_59498_59568[(2)] = null);

(statearr_59498_59568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (23))){
var inst_59364 = (state_59443[(23)]);
var inst_59359 = (state_59443[(24)]);
var inst_59360 = (state_59443[(25)]);
var inst_59362 = (state_59443[(26)]);
var inst_59356 = (state_59443[(19)]);
var inst_59367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_59369 = (function (){var all_files = inst_59356;
var res_SINGLEQUOTE_ = inst_59359;
var res = inst_59360;
var files_not_loaded = inst_59362;
var dependencies_that_loaded = inst_59364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59359,inst_59360,inst_59362,inst_59356,inst_59367,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__59368){
var map__59499 = p__59368;
var map__59499__$1 = ((((!((map__59499 == null)))?((((map__59499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59499):map__59499);
var request_url = cljs.core.get.call(null,map__59499__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59359,inst_59360,inst_59362,inst_59356,inst_59367,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59370 = cljs.core.reverse.call(null,inst_59364);
var inst_59371 = cljs.core.map.call(null,inst_59369,inst_59370);
var inst_59372 = cljs.core.pr_str.call(null,inst_59371);
var inst_59373 = figwheel.client.utils.log.call(null,inst_59372);
var state_59443__$1 = (function (){var statearr_59501 = state_59443;
(statearr_59501[(31)] = inst_59367);

return statearr_59501;
})();
var statearr_59502_59569 = state_59443__$1;
(statearr_59502_59569[(2)] = inst_59373);

(statearr_59502_59569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (35))){
var state_59443__$1 = state_59443;
var statearr_59503_59570 = state_59443__$1;
(statearr_59503_59570[(2)] = true);

(statearr_59503_59570[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (19))){
var inst_59346 = (state_59443[(12)]);
var inst_59352 = figwheel.client.file_reloading.expand_files.call(null,inst_59346);
var state_59443__$1 = state_59443;
var statearr_59504_59571 = state_59443__$1;
(statearr_59504_59571[(2)] = inst_59352);

(statearr_59504_59571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (11))){
var state_59443__$1 = state_59443;
var statearr_59505_59572 = state_59443__$1;
(statearr_59505_59572[(2)] = null);

(statearr_59505_59572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (9))){
var inst_59335 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
var statearr_59506_59573 = state_59443__$1;
(statearr_59506_59573[(2)] = inst_59335);

(statearr_59506_59573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (5))){
var inst_59305 = (state_59443[(7)]);
var inst_59306 = (state_59443[(9)]);
var inst_59308 = (inst_59306 < inst_59305);
var inst_59309 = inst_59308;
var state_59443__$1 = state_59443;
if(cljs.core.truth_(inst_59309)){
var statearr_59507_59574 = state_59443__$1;
(statearr_59507_59574[(1)] = (7));

} else {
var statearr_59508_59575 = state_59443__$1;
(statearr_59508_59575[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (14))){
var inst_59316 = (state_59443[(22)]);
var inst_59325 = cljs.core.first.call(null,inst_59316);
var inst_59326 = figwheel.client.file_reloading.eval_body.call(null,inst_59325,opts);
var inst_59327 = cljs.core.next.call(null,inst_59316);
var inst_59303 = inst_59327;
var inst_59304 = null;
var inst_59305 = (0);
var inst_59306 = (0);
var state_59443__$1 = (function (){var statearr_59509 = state_59443;
(statearr_59509[(7)] = inst_59305);

(statearr_59509[(8)] = inst_59304);

(statearr_59509[(9)] = inst_59306);

(statearr_59509[(32)] = inst_59326);

(statearr_59509[(10)] = inst_59303);

return statearr_59509;
})();
var statearr_59510_59576 = state_59443__$1;
(statearr_59510_59576[(2)] = null);

(statearr_59510_59576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (45))){
var state_59443__$1 = state_59443;
var statearr_59511_59577 = state_59443__$1;
(statearr_59511_59577[(2)] = null);

(statearr_59511_59577[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (26))){
var inst_59364 = (state_59443[(23)]);
var inst_59359 = (state_59443[(24)]);
var inst_59360 = (state_59443[(25)]);
var inst_59362 = (state_59443[(26)]);
var inst_59356 = (state_59443[(19)]);
var inst_59379 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_59381 = (function (){var all_files = inst_59356;
var res_SINGLEQUOTE_ = inst_59359;
var res = inst_59360;
var files_not_loaded = inst_59362;
var dependencies_that_loaded = inst_59364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59359,inst_59360,inst_59362,inst_59356,inst_59379,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__59380){
var map__59512 = p__59380;
var map__59512__$1 = ((((!((map__59512 == null)))?((((map__59512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59512):map__59512);
var namespace = cljs.core.get.call(null,map__59512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__59512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59359,inst_59360,inst_59362,inst_59356,inst_59379,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59382 = cljs.core.map.call(null,inst_59381,inst_59360);
var inst_59383 = cljs.core.pr_str.call(null,inst_59382);
var inst_59384 = figwheel.client.utils.log.call(null,inst_59383);
var inst_59385 = (function (){var all_files = inst_59356;
var res_SINGLEQUOTE_ = inst_59359;
var res = inst_59360;
var files_not_loaded = inst_59362;
var dependencies_that_loaded = inst_59364;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59359,inst_59360,inst_59362,inst_59356,inst_59379,inst_59381,inst_59382,inst_59383,inst_59384,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_59364,inst_59359,inst_59360,inst_59362,inst_59356,inst_59379,inst_59381,inst_59382,inst_59383,inst_59384,state_val_59444,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_59386 = setTimeout(inst_59385,(10));
var state_59443__$1 = (function (){var statearr_59514 = state_59443;
(statearr_59514[(33)] = inst_59384);

(statearr_59514[(34)] = inst_59379);

return statearr_59514;
})();
var statearr_59515_59578 = state_59443__$1;
(statearr_59515_59578[(2)] = inst_59386);

(statearr_59515_59578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (16))){
var state_59443__$1 = state_59443;
var statearr_59516_59579 = state_59443__$1;
(statearr_59516_59579[(2)] = reload_dependents);

(statearr_59516_59579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (38))){
var inst_59396 = (state_59443[(16)]);
var inst_59414 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59396);
var state_59443__$1 = state_59443;
var statearr_59517_59580 = state_59443__$1;
(statearr_59517_59580[(2)] = inst_59414);

(statearr_59517_59580[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (30))){
var state_59443__$1 = state_59443;
var statearr_59518_59581 = state_59443__$1;
(statearr_59518_59581[(2)] = null);

(statearr_59518_59581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (10))){
var inst_59316 = (state_59443[(22)]);
var inst_59318 = cljs.core.chunked_seq_QMARK_.call(null,inst_59316);
var state_59443__$1 = state_59443;
if(inst_59318){
var statearr_59519_59582 = state_59443__$1;
(statearr_59519_59582[(1)] = (13));

} else {
var statearr_59520_59583 = state_59443__$1;
(statearr_59520_59583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (18))){
var inst_59350 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
if(cljs.core.truth_(inst_59350)){
var statearr_59521_59584 = state_59443__$1;
(statearr_59521_59584[(1)] = (19));

} else {
var statearr_59522_59585 = state_59443__$1;
(statearr_59522_59585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (42))){
var state_59443__$1 = state_59443;
var statearr_59523_59586 = state_59443__$1;
(statearr_59523_59586[(2)] = null);

(statearr_59523_59586[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (37))){
var inst_59409 = (state_59443[(2)]);
var state_59443__$1 = state_59443;
var statearr_59524_59587 = state_59443__$1;
(statearr_59524_59587[(2)] = inst_59409);

(statearr_59524_59587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59444 === (8))){
var inst_59316 = (state_59443[(22)]);
var inst_59303 = (state_59443[(10)]);
var inst_59316__$1 = cljs.core.seq.call(null,inst_59303);
var state_59443__$1 = (function (){var statearr_59525 = state_59443;
(statearr_59525[(22)] = inst_59316__$1);

return statearr_59525;
})();
if(inst_59316__$1){
var statearr_59526_59588 = state_59443__$1;
(statearr_59526_59588[(1)] = (10));

} else {
var statearr_59527_59589 = state_59443__$1;
(statearr_59527_59589[(1)] = (11));

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
});})(c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40996__auto__,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto____0 = (function (){
var statearr_59528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59528[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto__);

(statearr_59528[(1)] = (1));

return statearr_59528;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto____1 = (function (state_59443){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_59443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e59529){if((e59529 instanceof Object)){
var ex__41000__auto__ = e59529;
var statearr_59530_59590 = state_59443;
(statearr_59530_59590[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59591 = state_59443;
state_59443 = G__59591;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto__ = function(state_59443){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto____1.call(this,state_59443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41086__auto__ = (function (){var statearr_59531 = f__41085__auto__.call(null);
(statearr_59531[(6)] = c__41084__auto__);

return statearr_59531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__,map__59288,map__59288__$1,opts,before_jsload,on_jsload,reload_dependents,map__59289,map__59289__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41084__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__59594,link){
var map__59595 = p__59594;
var map__59595__$1 = ((((!((map__59595 == null)))?((((map__59595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59595):map__59595);
var file = cljs.core.get.call(null,map__59595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__59595,map__59595__$1,file){
return (function (p1__59592_SHARP_,p2__59593_SHARP_){
if(cljs.core._EQ_.call(null,p1__59592_SHARP_,p2__59593_SHARP_)){
return p1__59592_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__59595,map__59595__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__59598){
var map__59599 = p__59598;
var map__59599__$1 = ((((!((map__59599 == null)))?((((map__59599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59599):map__59599);
var match_length = cljs.core.get.call(null,map__59599__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__59599__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__59597_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__59597_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__59601_SHARP_,p2__59602_SHARP_){
return cljs.core.assoc.call(null,p1__59601_SHARP_,cljs.core.get.call(null,p2__59602_SHARP_,key),p2__59602_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_59603 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_59603);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_59603);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__59604,p__59605){
var map__59606 = p__59604;
var map__59606__$1 = ((((!((map__59606 == null)))?((((map__59606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59606):map__59606);
var on_cssload = cljs.core.get.call(null,map__59606__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__59607 = p__59605;
var map__59607__$1 = ((((!((map__59607 == null)))?((((map__59607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59607):map__59607);
var files_msg = map__59607__$1;
var files = cljs.core.get.call(null,map__59607__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1507178397765
