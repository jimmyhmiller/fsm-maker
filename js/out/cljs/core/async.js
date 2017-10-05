// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56958 = arguments.length;
switch (G__56958) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async56959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56959 = (function (f,blockable,meta56960){
this.f = f;
this.blockable = blockable;
this.meta56960 = meta56960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56961,meta56960__$1){
var self__ = this;
var _56961__$1 = this;
return (new cljs.core.async.t_cljs$core$async56959(self__.f,self__.blockable,meta56960__$1));
});

cljs.core.async.t_cljs$core$async56959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56961){
var self__ = this;
var _56961__$1 = this;
return self__.meta56960;
});

cljs.core.async.t_cljs$core$async56959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56960","meta56960",357612744,null)], null);
});

cljs.core.async.t_cljs$core$async56959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56959";

cljs.core.async.t_cljs$core$async56959.cljs$lang$ctorPrWriter = (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async56959");
});

cljs.core.async.__GT_t_cljs$core$async56959 = (function cljs$core$async$__GT_t_cljs$core$async56959(f__$1,blockable__$1,meta56960){
return (new cljs.core.async.t_cljs$core$async56959(f__$1,blockable__$1,meta56960));
});

}

return (new cljs.core.async.t_cljs$core$async56959(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56965 = arguments.length;
switch (G__56965) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56968 = arguments.length;
switch (G__56968) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56971 = arguments.length;
switch (G__56971) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56973 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56973);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56973,ret){
return (function (){
return fn1.call(null,val_56973);
});})(val_56973,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56975 = arguments.length;
switch (G__56975) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__38694__auto___56977 = n;
var x_56978 = (0);
while(true){
if((x_56978 < n__38694__auto___56977)){
(a[x_56978] = (0));

var G__56979 = (x_56978 + (1));
x_56978 = G__56979;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__56980 = (i + (1));
i = G__56980;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56981 = (function (flag,meta56982){
this.flag = flag;
this.meta56982 = meta56982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56983,meta56982__$1){
var self__ = this;
var _56983__$1 = this;
return (new cljs.core.async.t_cljs$core$async56981(self__.flag,meta56982__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56983){
var self__ = this;
var _56983__$1 = this;
return self__.meta56982;
});})(flag))
;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56981.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56982","meta56982",-1093979464,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56981";

cljs.core.async.t_cljs$core$async56981.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async56981");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async56981 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56981(flag__$1,meta56982){
return (new cljs.core.async.t_cljs$core$async56981(flag__$1,meta56982));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56981(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56984 = (function (flag,cb,meta56985){
this.flag = flag;
this.cb = cb;
this.meta56985 = meta56985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56986,meta56985__$1){
var self__ = this;
var _56986__$1 = this;
return (new cljs.core.async.t_cljs$core$async56984(self__.flag,self__.cb,meta56985__$1));
});

cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56986){
var self__ = this;
var _56986__$1 = this;
return self__.meta56985;
});

cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56985","meta56985",2057088221,null)], null);
});

cljs.core.async.t_cljs$core$async56984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56984";

cljs.core.async.t_cljs$core$async56984.cljs$lang$ctorPrWriter = (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async56984");
});

cljs.core.async.__GT_t_cljs$core$async56984 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56984(flag__$1,cb__$1,meta56985){
return (new cljs.core.async.t_cljs$core$async56984(flag__$1,cb__$1,meta56985));
});

}

return (new cljs.core.async.t_cljs$core$async56984(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56987_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56987_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56988_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__37749__auto__ = wport;
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56989 = (i + (1));
i = G__56989;
continue;
}
} else {
return null;
}
break;
}
})();
var or__37749__auto__ = ret;
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__37737__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__37737__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__37737__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__38925__auto__ = [];
var len__38918__auto___56995 = arguments.length;
var i__38919__auto___56996 = (0);
while(true){
if((i__38919__auto___56996 < len__38918__auto___56995)){
args__38925__auto__.push((arguments[i__38919__auto___56996]));

var G__56997 = (i__38919__auto___56996 + (1));
i__38919__auto___56996 = G__56997;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((1) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38926__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56992){
var map__56993 = p__56992;
var map__56993__$1 = ((((!((map__56993 == null)))?((((map__56993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56993):map__56993);
var opts = map__56993__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56990){
var G__56991 = cljs.core.first.call(null,seq56990);
var seq56990__$1 = cljs.core.next.call(null,seq56990);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56991,seq56990__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56999 = arguments.length;
switch (G__56999) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41084__auto___57045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___57045){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___57045){
return (function (state_57023){
var state_val_57024 = (state_57023[(1)]);
if((state_val_57024 === (7))){
var inst_57019 = (state_57023[(2)]);
var state_57023__$1 = state_57023;
var statearr_57025_57046 = state_57023__$1;
(statearr_57025_57046[(2)] = inst_57019);

(statearr_57025_57046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (1))){
var state_57023__$1 = state_57023;
var statearr_57026_57047 = state_57023__$1;
(statearr_57026_57047[(2)] = null);

(statearr_57026_57047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (4))){
var inst_57002 = (state_57023[(7)]);
var inst_57002__$1 = (state_57023[(2)]);
var inst_57003 = (inst_57002__$1 == null);
var state_57023__$1 = (function (){var statearr_57027 = state_57023;
(statearr_57027[(7)] = inst_57002__$1);

return statearr_57027;
})();
if(cljs.core.truth_(inst_57003)){
var statearr_57028_57048 = state_57023__$1;
(statearr_57028_57048[(1)] = (5));

} else {
var statearr_57029_57049 = state_57023__$1;
(statearr_57029_57049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (13))){
var state_57023__$1 = state_57023;
var statearr_57030_57050 = state_57023__$1;
(statearr_57030_57050[(2)] = null);

(statearr_57030_57050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (6))){
var inst_57002 = (state_57023[(7)]);
var state_57023__$1 = state_57023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57023__$1,(11),to,inst_57002);
} else {
if((state_val_57024 === (3))){
var inst_57021 = (state_57023[(2)]);
var state_57023__$1 = state_57023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57023__$1,inst_57021);
} else {
if((state_val_57024 === (12))){
var state_57023__$1 = state_57023;
var statearr_57031_57051 = state_57023__$1;
(statearr_57031_57051[(2)] = null);

(statearr_57031_57051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (2))){
var state_57023__$1 = state_57023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57023__$1,(4),from);
} else {
if((state_val_57024 === (11))){
var inst_57012 = (state_57023[(2)]);
var state_57023__$1 = state_57023;
if(cljs.core.truth_(inst_57012)){
var statearr_57032_57052 = state_57023__$1;
(statearr_57032_57052[(1)] = (12));

} else {
var statearr_57033_57053 = state_57023__$1;
(statearr_57033_57053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (9))){
var state_57023__$1 = state_57023;
var statearr_57034_57054 = state_57023__$1;
(statearr_57034_57054[(2)] = null);

(statearr_57034_57054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (5))){
var state_57023__$1 = state_57023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57035_57055 = state_57023__$1;
(statearr_57035_57055[(1)] = (8));

} else {
var statearr_57036_57056 = state_57023__$1;
(statearr_57036_57056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (14))){
var inst_57017 = (state_57023[(2)]);
var state_57023__$1 = state_57023;
var statearr_57037_57057 = state_57023__$1;
(statearr_57037_57057[(2)] = inst_57017);

(statearr_57037_57057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (10))){
var inst_57009 = (state_57023[(2)]);
var state_57023__$1 = state_57023;
var statearr_57038_57058 = state_57023__$1;
(statearr_57038_57058[(2)] = inst_57009);

(statearr_57038_57058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57024 === (8))){
var inst_57006 = cljs.core.async.close_BANG_.call(null,to);
var state_57023__$1 = state_57023;
var statearr_57039_57059 = state_57023__$1;
(statearr_57039_57059[(2)] = inst_57006);

(statearr_57039_57059[(1)] = (10));


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
});})(c__41084__auto___57045))
;
return ((function (switch__40996__auto__,c__41084__auto___57045){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_57040 = [null,null,null,null,null,null,null,null];
(statearr_57040[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_57040[(1)] = (1));

return statearr_57040;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_57023){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57041){if((e57041 instanceof Object)){
var ex__41000__auto__ = e57041;
var statearr_57042_57060 = state_57023;
(statearr_57042_57060[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57061 = state_57023;
state_57023 = G__57061;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_57023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_57023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___57045))
})();
var state__41086__auto__ = (function (){var statearr_57043 = f__41085__auto__.call(null);
(statearr_57043[(6)] = c__41084__auto___57045);

return statearr_57043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___57045))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__57062){
var vec__57063 = p__57062;
var v = cljs.core.nth.call(null,vec__57063,(0),null);
var p = cljs.core.nth.call(null,vec__57063,(1),null);
var job = vec__57063;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41084__auto___57234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___57234,res,vec__57063,v,p,job,jobs,results){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___57234,res,vec__57063,v,p,job,jobs,results){
return (function (state_57070){
var state_val_57071 = (state_57070[(1)]);
if((state_val_57071 === (1))){
var state_57070__$1 = state_57070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57070__$1,(2),res,v);
} else {
if((state_val_57071 === (2))){
var inst_57067 = (state_57070[(2)]);
var inst_57068 = cljs.core.async.close_BANG_.call(null,res);
var state_57070__$1 = (function (){var statearr_57072 = state_57070;
(statearr_57072[(7)] = inst_57067);

return statearr_57072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57070__$1,inst_57068);
} else {
return null;
}
}
});})(c__41084__auto___57234,res,vec__57063,v,p,job,jobs,results))
;
return ((function (switch__40996__auto__,c__41084__auto___57234,res,vec__57063,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0 = (function (){
var statearr_57073 = [null,null,null,null,null,null,null,null];
(statearr_57073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__);

(statearr_57073[(1)] = (1));

return statearr_57073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1 = (function (state_57070){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57074){if((e57074 instanceof Object)){
var ex__41000__auto__ = e57074;
var statearr_57075_57235 = state_57070;
(statearr_57075_57235[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57236 = state_57070;
state_57070 = G__57236;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = function(state_57070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1.call(this,state_57070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___57234,res,vec__57063,v,p,job,jobs,results))
})();
var state__41086__auto__ = (function (){var statearr_57076 = f__41085__auto__.call(null);
(statearr_57076[(6)] = c__41084__auto___57234);

return statearr_57076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___57234,res,vec__57063,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__57077){
var vec__57078 = p__57077;
var v = cljs.core.nth.call(null,vec__57078,(0),null);
var p = cljs.core.nth.call(null,vec__57078,(1),null);
var job = vec__57078;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__38694__auto___57237 = n;
var __57238 = (0);
while(true){
if((__57238 < n__38694__auto___57237)){
var G__57081_57239 = type;
var G__57081_57240__$1 = (((G__57081_57239 instanceof cljs.core.Keyword))?G__57081_57239.fqn:null);
switch (G__57081_57240__$1) {
case "compute":
var c__41084__auto___57242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57238,c__41084__auto___57242,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (__57238,c__41084__auto___57242,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async){
return (function (state_57094){
var state_val_57095 = (state_57094[(1)]);
if((state_val_57095 === (1))){
var state_57094__$1 = state_57094;
var statearr_57096_57243 = state_57094__$1;
(statearr_57096_57243[(2)] = null);

(statearr_57096_57243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57095 === (2))){
var state_57094__$1 = state_57094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57094__$1,(4),jobs);
} else {
if((state_val_57095 === (3))){
var inst_57092 = (state_57094[(2)]);
var state_57094__$1 = state_57094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57094__$1,inst_57092);
} else {
if((state_val_57095 === (4))){
var inst_57084 = (state_57094[(2)]);
var inst_57085 = process__$1.call(null,inst_57084);
var state_57094__$1 = state_57094;
if(cljs.core.truth_(inst_57085)){
var statearr_57097_57244 = state_57094__$1;
(statearr_57097_57244[(1)] = (5));

} else {
var statearr_57098_57245 = state_57094__$1;
(statearr_57098_57245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57095 === (5))){
var state_57094__$1 = state_57094;
var statearr_57099_57246 = state_57094__$1;
(statearr_57099_57246[(2)] = null);

(statearr_57099_57246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57095 === (6))){
var state_57094__$1 = state_57094;
var statearr_57100_57247 = state_57094__$1;
(statearr_57100_57247[(2)] = null);

(statearr_57100_57247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57095 === (7))){
var inst_57090 = (state_57094[(2)]);
var state_57094__$1 = state_57094;
var statearr_57101_57248 = state_57094__$1;
(statearr_57101_57248[(2)] = inst_57090);

(statearr_57101_57248[(1)] = (3));


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
});})(__57238,c__41084__auto___57242,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async))
;
return ((function (__57238,switch__40996__auto__,c__41084__auto___57242,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0 = (function (){
var statearr_57102 = [null,null,null,null,null,null,null];
(statearr_57102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__);

(statearr_57102[(1)] = (1));

return statearr_57102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1 = (function (state_57094){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57103){if((e57103 instanceof Object)){
var ex__41000__auto__ = e57103;
var statearr_57104_57249 = state_57094;
(statearr_57104_57249[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57250 = state_57094;
state_57094 = G__57250;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = function(state_57094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1.call(this,state_57094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__;
})()
;})(__57238,switch__40996__auto__,c__41084__auto___57242,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async))
})();
var state__41086__auto__ = (function (){var statearr_57105 = f__41085__auto__.call(null);
(statearr_57105[(6)] = c__41084__auto___57242);

return statearr_57105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(__57238,c__41084__auto___57242,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async))
);


break;
case "async":
var c__41084__auto___57251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57238,c__41084__auto___57251,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (__57238,c__41084__auto___57251,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async){
return (function (state_57118){
var state_val_57119 = (state_57118[(1)]);
if((state_val_57119 === (1))){
var state_57118__$1 = state_57118;
var statearr_57120_57252 = state_57118__$1;
(statearr_57120_57252[(2)] = null);

(statearr_57120_57252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57119 === (2))){
var state_57118__$1 = state_57118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57118__$1,(4),jobs);
} else {
if((state_val_57119 === (3))){
var inst_57116 = (state_57118[(2)]);
var state_57118__$1 = state_57118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57118__$1,inst_57116);
} else {
if((state_val_57119 === (4))){
var inst_57108 = (state_57118[(2)]);
var inst_57109 = async.call(null,inst_57108);
var state_57118__$1 = state_57118;
if(cljs.core.truth_(inst_57109)){
var statearr_57121_57253 = state_57118__$1;
(statearr_57121_57253[(1)] = (5));

} else {
var statearr_57122_57254 = state_57118__$1;
(statearr_57122_57254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57119 === (5))){
var state_57118__$1 = state_57118;
var statearr_57123_57255 = state_57118__$1;
(statearr_57123_57255[(2)] = null);

(statearr_57123_57255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57119 === (6))){
var state_57118__$1 = state_57118;
var statearr_57124_57256 = state_57118__$1;
(statearr_57124_57256[(2)] = null);

(statearr_57124_57256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57119 === (7))){
var inst_57114 = (state_57118[(2)]);
var state_57118__$1 = state_57118;
var statearr_57125_57257 = state_57118__$1;
(statearr_57125_57257[(2)] = inst_57114);

(statearr_57125_57257[(1)] = (3));


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
});})(__57238,c__41084__auto___57251,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async))
;
return ((function (__57238,switch__40996__auto__,c__41084__auto___57251,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0 = (function (){
var statearr_57126 = [null,null,null,null,null,null,null];
(statearr_57126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__);

(statearr_57126[(1)] = (1));

return statearr_57126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1 = (function (state_57118){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57127){if((e57127 instanceof Object)){
var ex__41000__auto__ = e57127;
var statearr_57128_57258 = state_57118;
(statearr_57128_57258[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57259 = state_57118;
state_57118 = G__57259;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = function(state_57118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1.call(this,state_57118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__;
})()
;})(__57238,switch__40996__auto__,c__41084__auto___57251,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async))
})();
var state__41086__auto__ = (function (){var statearr_57129 = f__41085__auto__.call(null);
(statearr_57129[(6)] = c__41084__auto___57251);

return statearr_57129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(__57238,c__41084__auto___57251,G__57081_57239,G__57081_57240__$1,n__38694__auto___57237,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57081_57240__$1)].join('')));

}

var G__57260 = (__57238 + (1));
__57238 = G__57260;
continue;
} else {
}
break;
}

var c__41084__auto___57261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___57261,jobs,results,process__$1,async){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___57261,jobs,results,process__$1,async){
return (function (state_57151){
var state_val_57152 = (state_57151[(1)]);
if((state_val_57152 === (1))){
var state_57151__$1 = state_57151;
var statearr_57153_57262 = state_57151__$1;
(statearr_57153_57262[(2)] = null);

(statearr_57153_57262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57152 === (2))){
var state_57151__$1 = state_57151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57151__$1,(4),from);
} else {
if((state_val_57152 === (3))){
var inst_57149 = (state_57151[(2)]);
var state_57151__$1 = state_57151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57151__$1,inst_57149);
} else {
if((state_val_57152 === (4))){
var inst_57132 = (state_57151[(7)]);
var inst_57132__$1 = (state_57151[(2)]);
var inst_57133 = (inst_57132__$1 == null);
var state_57151__$1 = (function (){var statearr_57154 = state_57151;
(statearr_57154[(7)] = inst_57132__$1);

return statearr_57154;
})();
if(cljs.core.truth_(inst_57133)){
var statearr_57155_57263 = state_57151__$1;
(statearr_57155_57263[(1)] = (5));

} else {
var statearr_57156_57264 = state_57151__$1;
(statearr_57156_57264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57152 === (5))){
var inst_57135 = cljs.core.async.close_BANG_.call(null,jobs);
var state_57151__$1 = state_57151;
var statearr_57157_57265 = state_57151__$1;
(statearr_57157_57265[(2)] = inst_57135);

(statearr_57157_57265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57152 === (6))){
var inst_57132 = (state_57151[(7)]);
var inst_57137 = (state_57151[(8)]);
var inst_57137__$1 = cljs.core.async.chan.call(null,(1));
var inst_57138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57139 = [inst_57132,inst_57137__$1];
var inst_57140 = (new cljs.core.PersistentVector(null,2,(5),inst_57138,inst_57139,null));
var state_57151__$1 = (function (){var statearr_57158 = state_57151;
(statearr_57158[(8)] = inst_57137__$1);

return statearr_57158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57151__$1,(8),jobs,inst_57140);
} else {
if((state_val_57152 === (7))){
var inst_57147 = (state_57151[(2)]);
var state_57151__$1 = state_57151;
var statearr_57159_57266 = state_57151__$1;
(statearr_57159_57266[(2)] = inst_57147);

(statearr_57159_57266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57152 === (8))){
var inst_57137 = (state_57151[(8)]);
var inst_57142 = (state_57151[(2)]);
var state_57151__$1 = (function (){var statearr_57160 = state_57151;
(statearr_57160[(9)] = inst_57142);

return statearr_57160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57151__$1,(9),results,inst_57137);
} else {
if((state_val_57152 === (9))){
var inst_57144 = (state_57151[(2)]);
var state_57151__$1 = (function (){var statearr_57161 = state_57151;
(statearr_57161[(10)] = inst_57144);

return statearr_57161;
})();
var statearr_57162_57267 = state_57151__$1;
(statearr_57162_57267[(2)] = null);

(statearr_57162_57267[(1)] = (2));


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
});})(c__41084__auto___57261,jobs,results,process__$1,async))
;
return ((function (switch__40996__auto__,c__41084__auto___57261,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0 = (function (){
var statearr_57163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__);

(statearr_57163[(1)] = (1));

return statearr_57163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1 = (function (state_57151){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57164){if((e57164 instanceof Object)){
var ex__41000__auto__ = e57164;
var statearr_57165_57268 = state_57151;
(statearr_57165_57268[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57269 = state_57151;
state_57151 = G__57269;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = function(state_57151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1.call(this,state_57151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___57261,jobs,results,process__$1,async))
})();
var state__41086__auto__ = (function (){var statearr_57166 = f__41085__auto__.call(null);
(statearr_57166[(6)] = c__41084__auto___57261);

return statearr_57166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___57261,jobs,results,process__$1,async))
);


var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__,jobs,results,process__$1,async){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__,jobs,results,process__$1,async){
return (function (state_57204){
var state_val_57205 = (state_57204[(1)]);
if((state_val_57205 === (7))){
var inst_57200 = (state_57204[(2)]);
var state_57204__$1 = state_57204;
var statearr_57206_57270 = state_57204__$1;
(statearr_57206_57270[(2)] = inst_57200);

(statearr_57206_57270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (20))){
var state_57204__$1 = state_57204;
var statearr_57207_57271 = state_57204__$1;
(statearr_57207_57271[(2)] = null);

(statearr_57207_57271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (1))){
var state_57204__$1 = state_57204;
var statearr_57208_57272 = state_57204__$1;
(statearr_57208_57272[(2)] = null);

(statearr_57208_57272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (4))){
var inst_57169 = (state_57204[(7)]);
var inst_57169__$1 = (state_57204[(2)]);
var inst_57170 = (inst_57169__$1 == null);
var state_57204__$1 = (function (){var statearr_57209 = state_57204;
(statearr_57209[(7)] = inst_57169__$1);

return statearr_57209;
})();
if(cljs.core.truth_(inst_57170)){
var statearr_57210_57273 = state_57204__$1;
(statearr_57210_57273[(1)] = (5));

} else {
var statearr_57211_57274 = state_57204__$1;
(statearr_57211_57274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (15))){
var inst_57182 = (state_57204[(8)]);
var state_57204__$1 = state_57204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57204__$1,(18),to,inst_57182);
} else {
if((state_val_57205 === (21))){
var inst_57195 = (state_57204[(2)]);
var state_57204__$1 = state_57204;
var statearr_57212_57275 = state_57204__$1;
(statearr_57212_57275[(2)] = inst_57195);

(statearr_57212_57275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (13))){
var inst_57197 = (state_57204[(2)]);
var state_57204__$1 = (function (){var statearr_57213 = state_57204;
(statearr_57213[(9)] = inst_57197);

return statearr_57213;
})();
var statearr_57214_57276 = state_57204__$1;
(statearr_57214_57276[(2)] = null);

(statearr_57214_57276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (6))){
var inst_57169 = (state_57204[(7)]);
var state_57204__$1 = state_57204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57204__$1,(11),inst_57169);
} else {
if((state_val_57205 === (17))){
var inst_57190 = (state_57204[(2)]);
var state_57204__$1 = state_57204;
if(cljs.core.truth_(inst_57190)){
var statearr_57215_57277 = state_57204__$1;
(statearr_57215_57277[(1)] = (19));

} else {
var statearr_57216_57278 = state_57204__$1;
(statearr_57216_57278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (3))){
var inst_57202 = (state_57204[(2)]);
var state_57204__$1 = state_57204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57204__$1,inst_57202);
} else {
if((state_val_57205 === (12))){
var inst_57179 = (state_57204[(10)]);
var state_57204__$1 = state_57204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57204__$1,(14),inst_57179);
} else {
if((state_val_57205 === (2))){
var state_57204__$1 = state_57204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57204__$1,(4),results);
} else {
if((state_val_57205 === (19))){
var state_57204__$1 = state_57204;
var statearr_57217_57279 = state_57204__$1;
(statearr_57217_57279[(2)] = null);

(statearr_57217_57279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (11))){
var inst_57179 = (state_57204[(2)]);
var state_57204__$1 = (function (){var statearr_57218 = state_57204;
(statearr_57218[(10)] = inst_57179);

return statearr_57218;
})();
var statearr_57219_57280 = state_57204__$1;
(statearr_57219_57280[(2)] = null);

(statearr_57219_57280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (9))){
var state_57204__$1 = state_57204;
var statearr_57220_57281 = state_57204__$1;
(statearr_57220_57281[(2)] = null);

(statearr_57220_57281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (5))){
var state_57204__$1 = state_57204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57221_57282 = state_57204__$1;
(statearr_57221_57282[(1)] = (8));

} else {
var statearr_57222_57283 = state_57204__$1;
(statearr_57222_57283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (14))){
var inst_57184 = (state_57204[(11)]);
var inst_57182 = (state_57204[(8)]);
var inst_57182__$1 = (state_57204[(2)]);
var inst_57183 = (inst_57182__$1 == null);
var inst_57184__$1 = cljs.core.not.call(null,inst_57183);
var state_57204__$1 = (function (){var statearr_57223 = state_57204;
(statearr_57223[(11)] = inst_57184__$1);

(statearr_57223[(8)] = inst_57182__$1);

return statearr_57223;
})();
if(inst_57184__$1){
var statearr_57224_57284 = state_57204__$1;
(statearr_57224_57284[(1)] = (15));

} else {
var statearr_57225_57285 = state_57204__$1;
(statearr_57225_57285[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (16))){
var inst_57184 = (state_57204[(11)]);
var state_57204__$1 = state_57204;
var statearr_57226_57286 = state_57204__$1;
(statearr_57226_57286[(2)] = inst_57184);

(statearr_57226_57286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (10))){
var inst_57176 = (state_57204[(2)]);
var state_57204__$1 = state_57204;
var statearr_57227_57287 = state_57204__$1;
(statearr_57227_57287[(2)] = inst_57176);

(statearr_57227_57287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (18))){
var inst_57187 = (state_57204[(2)]);
var state_57204__$1 = state_57204;
var statearr_57228_57288 = state_57204__$1;
(statearr_57228_57288[(2)] = inst_57187);

(statearr_57228_57288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57205 === (8))){
var inst_57173 = cljs.core.async.close_BANG_.call(null,to);
var state_57204__$1 = state_57204;
var statearr_57229_57289 = state_57204__$1;
(statearr_57229_57289[(2)] = inst_57173);

(statearr_57229_57289[(1)] = (10));


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
});})(c__41084__auto__,jobs,results,process__$1,async))
;
return ((function (switch__40996__auto__,c__41084__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0 = (function (){
var statearr_57230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__);

(statearr_57230[(1)] = (1));

return statearr_57230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1 = (function (state_57204){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57231){if((e57231 instanceof Object)){
var ex__41000__auto__ = e57231;
var statearr_57232_57290 = state_57204;
(statearr_57232_57290[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57291 = state_57204;
state_57204 = G__57291;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__ = function(state_57204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1.call(this,state_57204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__,jobs,results,process__$1,async))
})();
var state__41086__auto__ = (function (){var statearr_57233 = f__41085__auto__.call(null);
(statearr_57233[(6)] = c__41084__auto__);

return statearr_57233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__,jobs,results,process__$1,async))
);

return c__41084__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57293 = arguments.length;
switch (G__57293) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57296 = arguments.length;
switch (G__57296) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57299 = arguments.length;
switch (G__57299) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41084__auto___57348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___57348,tc,fc){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___57348,tc,fc){
return (function (state_57325){
var state_val_57326 = (state_57325[(1)]);
if((state_val_57326 === (7))){
var inst_57321 = (state_57325[(2)]);
var state_57325__$1 = state_57325;
var statearr_57327_57349 = state_57325__$1;
(statearr_57327_57349[(2)] = inst_57321);

(statearr_57327_57349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (1))){
var state_57325__$1 = state_57325;
var statearr_57328_57350 = state_57325__$1;
(statearr_57328_57350[(2)] = null);

(statearr_57328_57350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (4))){
var inst_57302 = (state_57325[(7)]);
var inst_57302__$1 = (state_57325[(2)]);
var inst_57303 = (inst_57302__$1 == null);
var state_57325__$1 = (function (){var statearr_57329 = state_57325;
(statearr_57329[(7)] = inst_57302__$1);

return statearr_57329;
})();
if(cljs.core.truth_(inst_57303)){
var statearr_57330_57351 = state_57325__$1;
(statearr_57330_57351[(1)] = (5));

} else {
var statearr_57331_57352 = state_57325__$1;
(statearr_57331_57352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (13))){
var state_57325__$1 = state_57325;
var statearr_57332_57353 = state_57325__$1;
(statearr_57332_57353[(2)] = null);

(statearr_57332_57353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (6))){
var inst_57302 = (state_57325[(7)]);
var inst_57308 = p.call(null,inst_57302);
var state_57325__$1 = state_57325;
if(cljs.core.truth_(inst_57308)){
var statearr_57333_57354 = state_57325__$1;
(statearr_57333_57354[(1)] = (9));

} else {
var statearr_57334_57355 = state_57325__$1;
(statearr_57334_57355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (3))){
var inst_57323 = (state_57325[(2)]);
var state_57325__$1 = state_57325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57325__$1,inst_57323);
} else {
if((state_val_57326 === (12))){
var state_57325__$1 = state_57325;
var statearr_57335_57356 = state_57325__$1;
(statearr_57335_57356[(2)] = null);

(statearr_57335_57356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (2))){
var state_57325__$1 = state_57325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57325__$1,(4),ch);
} else {
if((state_val_57326 === (11))){
var inst_57302 = (state_57325[(7)]);
var inst_57312 = (state_57325[(2)]);
var state_57325__$1 = state_57325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57325__$1,(8),inst_57312,inst_57302);
} else {
if((state_val_57326 === (9))){
var state_57325__$1 = state_57325;
var statearr_57336_57357 = state_57325__$1;
(statearr_57336_57357[(2)] = tc);

(statearr_57336_57357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (5))){
var inst_57305 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57306 = cljs.core.async.close_BANG_.call(null,fc);
var state_57325__$1 = (function (){var statearr_57337 = state_57325;
(statearr_57337[(8)] = inst_57305);

return statearr_57337;
})();
var statearr_57338_57358 = state_57325__$1;
(statearr_57338_57358[(2)] = inst_57306);

(statearr_57338_57358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (14))){
var inst_57319 = (state_57325[(2)]);
var state_57325__$1 = state_57325;
var statearr_57339_57359 = state_57325__$1;
(statearr_57339_57359[(2)] = inst_57319);

(statearr_57339_57359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (10))){
var state_57325__$1 = state_57325;
var statearr_57340_57360 = state_57325__$1;
(statearr_57340_57360[(2)] = fc);

(statearr_57340_57360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57326 === (8))){
var inst_57314 = (state_57325[(2)]);
var state_57325__$1 = state_57325;
if(cljs.core.truth_(inst_57314)){
var statearr_57341_57361 = state_57325__$1;
(statearr_57341_57361[(1)] = (12));

} else {
var statearr_57342_57362 = state_57325__$1;
(statearr_57342_57362[(1)] = (13));

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
});})(c__41084__auto___57348,tc,fc))
;
return ((function (switch__40996__auto__,c__41084__auto___57348,tc,fc){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_57343 = [null,null,null,null,null,null,null,null,null];
(statearr_57343[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_57343[(1)] = (1));

return statearr_57343;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_57325){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57344){if((e57344 instanceof Object)){
var ex__41000__auto__ = e57344;
var statearr_57345_57363 = state_57325;
(statearr_57345_57363[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57364 = state_57325;
state_57325 = G__57364;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_57325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_57325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___57348,tc,fc))
})();
var state__41086__auto__ = (function (){var statearr_57346 = f__41085__auto__.call(null);
(statearr_57346[(6)] = c__41084__auto___57348);

return statearr_57346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___57348,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__){
return (function (state_57385){
var state_val_57386 = (state_57385[(1)]);
if((state_val_57386 === (7))){
var inst_57381 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
var statearr_57387_57405 = state_57385__$1;
(statearr_57387_57405[(2)] = inst_57381);

(statearr_57387_57405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (1))){
var inst_57365 = init;
var state_57385__$1 = (function (){var statearr_57388 = state_57385;
(statearr_57388[(7)] = inst_57365);

return statearr_57388;
})();
var statearr_57389_57406 = state_57385__$1;
(statearr_57389_57406[(2)] = null);

(statearr_57389_57406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (4))){
var inst_57368 = (state_57385[(8)]);
var inst_57368__$1 = (state_57385[(2)]);
var inst_57369 = (inst_57368__$1 == null);
var state_57385__$1 = (function (){var statearr_57390 = state_57385;
(statearr_57390[(8)] = inst_57368__$1);

return statearr_57390;
})();
if(cljs.core.truth_(inst_57369)){
var statearr_57391_57407 = state_57385__$1;
(statearr_57391_57407[(1)] = (5));

} else {
var statearr_57392_57408 = state_57385__$1;
(statearr_57392_57408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (6))){
var inst_57365 = (state_57385[(7)]);
var inst_57368 = (state_57385[(8)]);
var inst_57372 = (state_57385[(9)]);
var inst_57372__$1 = f.call(null,inst_57365,inst_57368);
var inst_57373 = cljs.core.reduced_QMARK_.call(null,inst_57372__$1);
var state_57385__$1 = (function (){var statearr_57393 = state_57385;
(statearr_57393[(9)] = inst_57372__$1);

return statearr_57393;
})();
if(inst_57373){
var statearr_57394_57409 = state_57385__$1;
(statearr_57394_57409[(1)] = (8));

} else {
var statearr_57395_57410 = state_57385__$1;
(statearr_57395_57410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (3))){
var inst_57383 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57385__$1,inst_57383);
} else {
if((state_val_57386 === (2))){
var state_57385__$1 = state_57385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57385__$1,(4),ch);
} else {
if((state_val_57386 === (9))){
var inst_57372 = (state_57385[(9)]);
var inst_57365 = inst_57372;
var state_57385__$1 = (function (){var statearr_57396 = state_57385;
(statearr_57396[(7)] = inst_57365);

return statearr_57396;
})();
var statearr_57397_57411 = state_57385__$1;
(statearr_57397_57411[(2)] = null);

(statearr_57397_57411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (5))){
var inst_57365 = (state_57385[(7)]);
var state_57385__$1 = state_57385;
var statearr_57398_57412 = state_57385__$1;
(statearr_57398_57412[(2)] = inst_57365);

(statearr_57398_57412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (10))){
var inst_57379 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
var statearr_57399_57413 = state_57385__$1;
(statearr_57399_57413[(2)] = inst_57379);

(statearr_57399_57413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (8))){
var inst_57372 = (state_57385[(9)]);
var inst_57375 = cljs.core.deref.call(null,inst_57372);
var state_57385__$1 = state_57385;
var statearr_57400_57414 = state_57385__$1;
(statearr_57400_57414[(2)] = inst_57375);

(statearr_57400_57414[(1)] = (10));


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
});})(c__41084__auto__))
;
return ((function (switch__40996__auto__,c__41084__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40997__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40997__auto____0 = (function (){
var statearr_57401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57401[(0)] = cljs$core$async$reduce_$_state_machine__40997__auto__);

(statearr_57401[(1)] = (1));

return statearr_57401;
});
var cljs$core$async$reduce_$_state_machine__40997__auto____1 = (function (state_57385){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57402){if((e57402 instanceof Object)){
var ex__41000__auto__ = e57402;
var statearr_57403_57415 = state_57385;
(statearr_57403_57415[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57416 = state_57385;
state_57385 = G__57416;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40997__auto__ = function(state_57385){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40997__auto____1.call(this,state_57385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40997__auto____0;
cljs$core$async$reduce_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40997__auto____1;
return cljs$core$async$reduce_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__))
})();
var state__41086__auto__ = (function (){var statearr_57404 = f__41085__auto__.call(null);
(statearr_57404[(6)] = c__41084__auto__);

return statearr_57404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__))
);

return c__41084__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__,f__$1){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__,f__$1){
return (function (state_57422){
var state_val_57423 = (state_57422[(1)]);
if((state_val_57423 === (1))){
var inst_57417 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_57422__$1 = state_57422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57422__$1,(2),inst_57417);
} else {
if((state_val_57423 === (2))){
var inst_57419 = (state_57422[(2)]);
var inst_57420 = f__$1.call(null,inst_57419);
var state_57422__$1 = state_57422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57422__$1,inst_57420);
} else {
return null;
}
}
});})(c__41084__auto__,f__$1))
;
return ((function (switch__40996__auto__,c__41084__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40997__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40997__auto____0 = (function (){
var statearr_57424 = [null,null,null,null,null,null,null];
(statearr_57424[(0)] = cljs$core$async$transduce_$_state_machine__40997__auto__);

(statearr_57424[(1)] = (1));

return statearr_57424;
});
var cljs$core$async$transduce_$_state_machine__40997__auto____1 = (function (state_57422){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57425){if((e57425 instanceof Object)){
var ex__41000__auto__ = e57425;
var statearr_57426_57428 = state_57422;
(statearr_57426_57428[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57429 = state_57422;
state_57422 = G__57429;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40997__auto__ = function(state_57422){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40997__auto____1.call(this,state_57422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40997__auto____0;
cljs$core$async$transduce_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40997__auto____1;
return cljs$core$async$transduce_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__,f__$1))
})();
var state__41086__auto__ = (function (){var statearr_57427 = f__41085__auto__.call(null);
(statearr_57427[(6)] = c__41084__auto__);

return statearr_57427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__,f__$1))
);

return c__41084__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57431 = arguments.length;
switch (G__57431) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__){
return (function (state_57456){
var state_val_57457 = (state_57456[(1)]);
if((state_val_57457 === (7))){
var inst_57438 = (state_57456[(2)]);
var state_57456__$1 = state_57456;
var statearr_57458_57479 = state_57456__$1;
(statearr_57458_57479[(2)] = inst_57438);

(statearr_57458_57479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (1))){
var inst_57432 = cljs.core.seq.call(null,coll);
var inst_57433 = inst_57432;
var state_57456__$1 = (function (){var statearr_57459 = state_57456;
(statearr_57459[(7)] = inst_57433);

return statearr_57459;
})();
var statearr_57460_57480 = state_57456__$1;
(statearr_57460_57480[(2)] = null);

(statearr_57460_57480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (4))){
var inst_57433 = (state_57456[(7)]);
var inst_57436 = cljs.core.first.call(null,inst_57433);
var state_57456__$1 = state_57456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57456__$1,(7),ch,inst_57436);
} else {
if((state_val_57457 === (13))){
var inst_57450 = (state_57456[(2)]);
var state_57456__$1 = state_57456;
var statearr_57461_57481 = state_57456__$1;
(statearr_57461_57481[(2)] = inst_57450);

(statearr_57461_57481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (6))){
var inst_57441 = (state_57456[(2)]);
var state_57456__$1 = state_57456;
if(cljs.core.truth_(inst_57441)){
var statearr_57462_57482 = state_57456__$1;
(statearr_57462_57482[(1)] = (8));

} else {
var statearr_57463_57483 = state_57456__$1;
(statearr_57463_57483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (3))){
var inst_57454 = (state_57456[(2)]);
var state_57456__$1 = state_57456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57456__$1,inst_57454);
} else {
if((state_val_57457 === (12))){
var state_57456__$1 = state_57456;
var statearr_57464_57484 = state_57456__$1;
(statearr_57464_57484[(2)] = null);

(statearr_57464_57484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (2))){
var inst_57433 = (state_57456[(7)]);
var state_57456__$1 = state_57456;
if(cljs.core.truth_(inst_57433)){
var statearr_57465_57485 = state_57456__$1;
(statearr_57465_57485[(1)] = (4));

} else {
var statearr_57466_57486 = state_57456__$1;
(statearr_57466_57486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (11))){
var inst_57447 = cljs.core.async.close_BANG_.call(null,ch);
var state_57456__$1 = state_57456;
var statearr_57467_57487 = state_57456__$1;
(statearr_57467_57487[(2)] = inst_57447);

(statearr_57467_57487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (9))){
var state_57456__$1 = state_57456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57468_57488 = state_57456__$1;
(statearr_57468_57488[(1)] = (11));

} else {
var statearr_57469_57489 = state_57456__$1;
(statearr_57469_57489[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (5))){
var inst_57433 = (state_57456[(7)]);
var state_57456__$1 = state_57456;
var statearr_57470_57490 = state_57456__$1;
(statearr_57470_57490[(2)] = inst_57433);

(statearr_57470_57490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (10))){
var inst_57452 = (state_57456[(2)]);
var state_57456__$1 = state_57456;
var statearr_57471_57491 = state_57456__$1;
(statearr_57471_57491[(2)] = inst_57452);

(statearr_57471_57491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57457 === (8))){
var inst_57433 = (state_57456[(7)]);
var inst_57443 = cljs.core.next.call(null,inst_57433);
var inst_57433__$1 = inst_57443;
var state_57456__$1 = (function (){var statearr_57472 = state_57456;
(statearr_57472[(7)] = inst_57433__$1);

return statearr_57472;
})();
var statearr_57473_57492 = state_57456__$1;
(statearr_57473_57492[(2)] = null);

(statearr_57473_57492[(1)] = (2));


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
});})(c__41084__auto__))
;
return ((function (switch__40996__auto__,c__41084__auto__){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_57474 = [null,null,null,null,null,null,null,null];
(statearr_57474[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_57474[(1)] = (1));

return statearr_57474;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_57456){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57475){if((e57475 instanceof Object)){
var ex__41000__auto__ = e57475;
var statearr_57476_57493 = state_57456;
(statearr_57476_57493[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57494 = state_57456;
state_57456 = G__57494;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_57456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_57456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__))
})();
var state__41086__auto__ = (function (){var statearr_57477 = f__41085__auto__.call(null);
(statearr_57477[(6)] = c__41084__auto__);

return statearr_57477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__))
);

return c__41084__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__38432__auto__ = (((_ == null))?null:_);
var m__38433__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,_);
} else {
var m__38433__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__38433__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m,ch);
} else {
var m__38433__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m);
} else {
var m__38433__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async57495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57495 = (function (ch,cs,meta57496){
this.ch = ch;
this.cs = cs;
this.meta57496 = meta57496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57497,meta57496__$1){
var self__ = this;
var _57497__$1 = this;
return (new cljs.core.async.t_cljs$core$async57495(self__.ch,self__.cs,meta57496__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57497){
var self__ = this;
var _57497__$1 = this;
return self__.meta57496;
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57496","meta57496",-616706471,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57495";

cljs.core.async.t_cljs$core$async57495.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async57495");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async57495 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57495(ch__$1,cs__$1,meta57496){
return (new cljs.core.async.t_cljs$core$async57495(ch__$1,cs__$1,meta57496));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57495(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__41084__auto___57717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___57717,cs,m,dchan,dctr,done){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___57717,cs,m,dchan,dctr,done){
return (function (state_57632){
var state_val_57633 = (state_57632[(1)]);
if((state_val_57633 === (7))){
var inst_57628 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57634_57718 = state_57632__$1;
(statearr_57634_57718[(2)] = inst_57628);

(statearr_57634_57718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (20))){
var inst_57531 = (state_57632[(7)]);
var inst_57543 = cljs.core.first.call(null,inst_57531);
var inst_57544 = cljs.core.nth.call(null,inst_57543,(0),null);
var inst_57545 = cljs.core.nth.call(null,inst_57543,(1),null);
var state_57632__$1 = (function (){var statearr_57635 = state_57632;
(statearr_57635[(8)] = inst_57544);

return statearr_57635;
})();
if(cljs.core.truth_(inst_57545)){
var statearr_57636_57719 = state_57632__$1;
(statearr_57636_57719[(1)] = (22));

} else {
var statearr_57637_57720 = state_57632__$1;
(statearr_57637_57720[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (27))){
var inst_57500 = (state_57632[(9)]);
var inst_57573 = (state_57632[(10)]);
var inst_57575 = (state_57632[(11)]);
var inst_57580 = (state_57632[(12)]);
var inst_57580__$1 = cljs.core._nth.call(null,inst_57573,inst_57575);
var inst_57581 = cljs.core.async.put_BANG_.call(null,inst_57580__$1,inst_57500,done);
var state_57632__$1 = (function (){var statearr_57638 = state_57632;
(statearr_57638[(12)] = inst_57580__$1);

return statearr_57638;
})();
if(cljs.core.truth_(inst_57581)){
var statearr_57639_57721 = state_57632__$1;
(statearr_57639_57721[(1)] = (30));

} else {
var statearr_57640_57722 = state_57632__$1;
(statearr_57640_57722[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (1))){
var state_57632__$1 = state_57632;
var statearr_57641_57723 = state_57632__$1;
(statearr_57641_57723[(2)] = null);

(statearr_57641_57723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (24))){
var inst_57531 = (state_57632[(7)]);
var inst_57550 = (state_57632[(2)]);
var inst_57551 = cljs.core.next.call(null,inst_57531);
var inst_57509 = inst_57551;
var inst_57510 = null;
var inst_57511 = (0);
var inst_57512 = (0);
var state_57632__$1 = (function (){var statearr_57642 = state_57632;
(statearr_57642[(13)] = inst_57510);

(statearr_57642[(14)] = inst_57509);

(statearr_57642[(15)] = inst_57511);

(statearr_57642[(16)] = inst_57512);

(statearr_57642[(17)] = inst_57550);

return statearr_57642;
})();
var statearr_57643_57724 = state_57632__$1;
(statearr_57643_57724[(2)] = null);

(statearr_57643_57724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (39))){
var state_57632__$1 = state_57632;
var statearr_57647_57725 = state_57632__$1;
(statearr_57647_57725[(2)] = null);

(statearr_57647_57725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (4))){
var inst_57500 = (state_57632[(9)]);
var inst_57500__$1 = (state_57632[(2)]);
var inst_57501 = (inst_57500__$1 == null);
var state_57632__$1 = (function (){var statearr_57648 = state_57632;
(statearr_57648[(9)] = inst_57500__$1);

return statearr_57648;
})();
if(cljs.core.truth_(inst_57501)){
var statearr_57649_57726 = state_57632__$1;
(statearr_57649_57726[(1)] = (5));

} else {
var statearr_57650_57727 = state_57632__$1;
(statearr_57650_57727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (15))){
var inst_57510 = (state_57632[(13)]);
var inst_57509 = (state_57632[(14)]);
var inst_57511 = (state_57632[(15)]);
var inst_57512 = (state_57632[(16)]);
var inst_57527 = (state_57632[(2)]);
var inst_57528 = (inst_57512 + (1));
var tmp57644 = inst_57510;
var tmp57645 = inst_57509;
var tmp57646 = inst_57511;
var inst_57509__$1 = tmp57645;
var inst_57510__$1 = tmp57644;
var inst_57511__$1 = tmp57646;
var inst_57512__$1 = inst_57528;
var state_57632__$1 = (function (){var statearr_57651 = state_57632;
(statearr_57651[(13)] = inst_57510__$1);

(statearr_57651[(14)] = inst_57509__$1);

(statearr_57651[(18)] = inst_57527);

(statearr_57651[(15)] = inst_57511__$1);

(statearr_57651[(16)] = inst_57512__$1);

return statearr_57651;
})();
var statearr_57652_57728 = state_57632__$1;
(statearr_57652_57728[(2)] = null);

(statearr_57652_57728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (21))){
var inst_57554 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57656_57729 = state_57632__$1;
(statearr_57656_57729[(2)] = inst_57554);

(statearr_57656_57729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (31))){
var inst_57580 = (state_57632[(12)]);
var inst_57584 = done.call(null,null);
var inst_57585 = cljs.core.async.untap_STAR_.call(null,m,inst_57580);
var state_57632__$1 = (function (){var statearr_57657 = state_57632;
(statearr_57657[(19)] = inst_57584);

return statearr_57657;
})();
var statearr_57658_57730 = state_57632__$1;
(statearr_57658_57730[(2)] = inst_57585);

(statearr_57658_57730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (32))){
var inst_57574 = (state_57632[(20)]);
var inst_57572 = (state_57632[(21)]);
var inst_57573 = (state_57632[(10)]);
var inst_57575 = (state_57632[(11)]);
var inst_57587 = (state_57632[(2)]);
var inst_57588 = (inst_57575 + (1));
var tmp57653 = inst_57574;
var tmp57654 = inst_57572;
var tmp57655 = inst_57573;
var inst_57572__$1 = tmp57654;
var inst_57573__$1 = tmp57655;
var inst_57574__$1 = tmp57653;
var inst_57575__$1 = inst_57588;
var state_57632__$1 = (function (){var statearr_57659 = state_57632;
(statearr_57659[(20)] = inst_57574__$1);

(statearr_57659[(21)] = inst_57572__$1);

(statearr_57659[(10)] = inst_57573__$1);

(statearr_57659[(11)] = inst_57575__$1);

(statearr_57659[(22)] = inst_57587);

return statearr_57659;
})();
var statearr_57660_57731 = state_57632__$1;
(statearr_57660_57731[(2)] = null);

(statearr_57660_57731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (40))){
var inst_57600 = (state_57632[(23)]);
var inst_57604 = done.call(null,null);
var inst_57605 = cljs.core.async.untap_STAR_.call(null,m,inst_57600);
var state_57632__$1 = (function (){var statearr_57661 = state_57632;
(statearr_57661[(24)] = inst_57604);

return statearr_57661;
})();
var statearr_57662_57732 = state_57632__$1;
(statearr_57662_57732[(2)] = inst_57605);

(statearr_57662_57732[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (33))){
var inst_57591 = (state_57632[(25)]);
var inst_57593 = cljs.core.chunked_seq_QMARK_.call(null,inst_57591);
var state_57632__$1 = state_57632;
if(inst_57593){
var statearr_57663_57733 = state_57632__$1;
(statearr_57663_57733[(1)] = (36));

} else {
var statearr_57664_57734 = state_57632__$1;
(statearr_57664_57734[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (13))){
var inst_57521 = (state_57632[(26)]);
var inst_57524 = cljs.core.async.close_BANG_.call(null,inst_57521);
var state_57632__$1 = state_57632;
var statearr_57665_57735 = state_57632__$1;
(statearr_57665_57735[(2)] = inst_57524);

(statearr_57665_57735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (22))){
var inst_57544 = (state_57632[(8)]);
var inst_57547 = cljs.core.async.close_BANG_.call(null,inst_57544);
var state_57632__$1 = state_57632;
var statearr_57666_57736 = state_57632__$1;
(statearr_57666_57736[(2)] = inst_57547);

(statearr_57666_57736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (36))){
var inst_57591 = (state_57632[(25)]);
var inst_57595 = cljs.core.chunk_first.call(null,inst_57591);
var inst_57596 = cljs.core.chunk_rest.call(null,inst_57591);
var inst_57597 = cljs.core.count.call(null,inst_57595);
var inst_57572 = inst_57596;
var inst_57573 = inst_57595;
var inst_57574 = inst_57597;
var inst_57575 = (0);
var state_57632__$1 = (function (){var statearr_57667 = state_57632;
(statearr_57667[(20)] = inst_57574);

(statearr_57667[(21)] = inst_57572);

(statearr_57667[(10)] = inst_57573);

(statearr_57667[(11)] = inst_57575);

return statearr_57667;
})();
var statearr_57668_57737 = state_57632__$1;
(statearr_57668_57737[(2)] = null);

(statearr_57668_57737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (41))){
var inst_57591 = (state_57632[(25)]);
var inst_57607 = (state_57632[(2)]);
var inst_57608 = cljs.core.next.call(null,inst_57591);
var inst_57572 = inst_57608;
var inst_57573 = null;
var inst_57574 = (0);
var inst_57575 = (0);
var state_57632__$1 = (function (){var statearr_57669 = state_57632;
(statearr_57669[(20)] = inst_57574);

(statearr_57669[(21)] = inst_57572);

(statearr_57669[(10)] = inst_57573);

(statearr_57669[(11)] = inst_57575);

(statearr_57669[(27)] = inst_57607);

return statearr_57669;
})();
var statearr_57670_57738 = state_57632__$1;
(statearr_57670_57738[(2)] = null);

(statearr_57670_57738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (43))){
var state_57632__$1 = state_57632;
var statearr_57671_57739 = state_57632__$1;
(statearr_57671_57739[(2)] = null);

(statearr_57671_57739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (29))){
var inst_57616 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57672_57740 = state_57632__$1;
(statearr_57672_57740[(2)] = inst_57616);

(statearr_57672_57740[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (44))){
var inst_57625 = (state_57632[(2)]);
var state_57632__$1 = (function (){var statearr_57673 = state_57632;
(statearr_57673[(28)] = inst_57625);

return statearr_57673;
})();
var statearr_57674_57741 = state_57632__$1;
(statearr_57674_57741[(2)] = null);

(statearr_57674_57741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (6))){
var inst_57564 = (state_57632[(29)]);
var inst_57563 = cljs.core.deref.call(null,cs);
var inst_57564__$1 = cljs.core.keys.call(null,inst_57563);
var inst_57565 = cljs.core.count.call(null,inst_57564__$1);
var inst_57566 = cljs.core.reset_BANG_.call(null,dctr,inst_57565);
var inst_57571 = cljs.core.seq.call(null,inst_57564__$1);
var inst_57572 = inst_57571;
var inst_57573 = null;
var inst_57574 = (0);
var inst_57575 = (0);
var state_57632__$1 = (function (){var statearr_57675 = state_57632;
(statearr_57675[(30)] = inst_57566);

(statearr_57675[(20)] = inst_57574);

(statearr_57675[(21)] = inst_57572);

(statearr_57675[(10)] = inst_57573);

(statearr_57675[(11)] = inst_57575);

(statearr_57675[(29)] = inst_57564__$1);

return statearr_57675;
})();
var statearr_57676_57742 = state_57632__$1;
(statearr_57676_57742[(2)] = null);

(statearr_57676_57742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (28))){
var inst_57572 = (state_57632[(21)]);
var inst_57591 = (state_57632[(25)]);
var inst_57591__$1 = cljs.core.seq.call(null,inst_57572);
var state_57632__$1 = (function (){var statearr_57677 = state_57632;
(statearr_57677[(25)] = inst_57591__$1);

return statearr_57677;
})();
if(inst_57591__$1){
var statearr_57678_57743 = state_57632__$1;
(statearr_57678_57743[(1)] = (33));

} else {
var statearr_57679_57744 = state_57632__$1;
(statearr_57679_57744[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (25))){
var inst_57574 = (state_57632[(20)]);
var inst_57575 = (state_57632[(11)]);
var inst_57577 = (inst_57575 < inst_57574);
var inst_57578 = inst_57577;
var state_57632__$1 = state_57632;
if(cljs.core.truth_(inst_57578)){
var statearr_57680_57745 = state_57632__$1;
(statearr_57680_57745[(1)] = (27));

} else {
var statearr_57681_57746 = state_57632__$1;
(statearr_57681_57746[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (34))){
var state_57632__$1 = state_57632;
var statearr_57682_57747 = state_57632__$1;
(statearr_57682_57747[(2)] = null);

(statearr_57682_57747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (17))){
var state_57632__$1 = state_57632;
var statearr_57683_57748 = state_57632__$1;
(statearr_57683_57748[(2)] = null);

(statearr_57683_57748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (3))){
var inst_57630 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57632__$1,inst_57630);
} else {
if((state_val_57633 === (12))){
var inst_57559 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57684_57749 = state_57632__$1;
(statearr_57684_57749[(2)] = inst_57559);

(statearr_57684_57749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (2))){
var state_57632__$1 = state_57632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57632__$1,(4),ch);
} else {
if((state_val_57633 === (23))){
var state_57632__$1 = state_57632;
var statearr_57685_57750 = state_57632__$1;
(statearr_57685_57750[(2)] = null);

(statearr_57685_57750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (35))){
var inst_57614 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57686_57751 = state_57632__$1;
(statearr_57686_57751[(2)] = inst_57614);

(statearr_57686_57751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (19))){
var inst_57531 = (state_57632[(7)]);
var inst_57535 = cljs.core.chunk_first.call(null,inst_57531);
var inst_57536 = cljs.core.chunk_rest.call(null,inst_57531);
var inst_57537 = cljs.core.count.call(null,inst_57535);
var inst_57509 = inst_57536;
var inst_57510 = inst_57535;
var inst_57511 = inst_57537;
var inst_57512 = (0);
var state_57632__$1 = (function (){var statearr_57687 = state_57632;
(statearr_57687[(13)] = inst_57510);

(statearr_57687[(14)] = inst_57509);

(statearr_57687[(15)] = inst_57511);

(statearr_57687[(16)] = inst_57512);

return statearr_57687;
})();
var statearr_57688_57752 = state_57632__$1;
(statearr_57688_57752[(2)] = null);

(statearr_57688_57752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (11))){
var inst_57509 = (state_57632[(14)]);
var inst_57531 = (state_57632[(7)]);
var inst_57531__$1 = cljs.core.seq.call(null,inst_57509);
var state_57632__$1 = (function (){var statearr_57689 = state_57632;
(statearr_57689[(7)] = inst_57531__$1);

return statearr_57689;
})();
if(inst_57531__$1){
var statearr_57690_57753 = state_57632__$1;
(statearr_57690_57753[(1)] = (16));

} else {
var statearr_57691_57754 = state_57632__$1;
(statearr_57691_57754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (9))){
var inst_57561 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57692_57755 = state_57632__$1;
(statearr_57692_57755[(2)] = inst_57561);

(statearr_57692_57755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (5))){
var inst_57507 = cljs.core.deref.call(null,cs);
var inst_57508 = cljs.core.seq.call(null,inst_57507);
var inst_57509 = inst_57508;
var inst_57510 = null;
var inst_57511 = (0);
var inst_57512 = (0);
var state_57632__$1 = (function (){var statearr_57693 = state_57632;
(statearr_57693[(13)] = inst_57510);

(statearr_57693[(14)] = inst_57509);

(statearr_57693[(15)] = inst_57511);

(statearr_57693[(16)] = inst_57512);

return statearr_57693;
})();
var statearr_57694_57756 = state_57632__$1;
(statearr_57694_57756[(2)] = null);

(statearr_57694_57756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (14))){
var state_57632__$1 = state_57632;
var statearr_57695_57757 = state_57632__$1;
(statearr_57695_57757[(2)] = null);

(statearr_57695_57757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (45))){
var inst_57622 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57696_57758 = state_57632__$1;
(statearr_57696_57758[(2)] = inst_57622);

(statearr_57696_57758[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (26))){
var inst_57564 = (state_57632[(29)]);
var inst_57618 = (state_57632[(2)]);
var inst_57619 = cljs.core.seq.call(null,inst_57564);
var state_57632__$1 = (function (){var statearr_57697 = state_57632;
(statearr_57697[(31)] = inst_57618);

return statearr_57697;
})();
if(inst_57619){
var statearr_57698_57759 = state_57632__$1;
(statearr_57698_57759[(1)] = (42));

} else {
var statearr_57699_57760 = state_57632__$1;
(statearr_57699_57760[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (16))){
var inst_57531 = (state_57632[(7)]);
var inst_57533 = cljs.core.chunked_seq_QMARK_.call(null,inst_57531);
var state_57632__$1 = state_57632;
if(inst_57533){
var statearr_57700_57761 = state_57632__$1;
(statearr_57700_57761[(1)] = (19));

} else {
var statearr_57701_57762 = state_57632__$1;
(statearr_57701_57762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (38))){
var inst_57611 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57702_57763 = state_57632__$1;
(statearr_57702_57763[(2)] = inst_57611);

(statearr_57702_57763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (30))){
var state_57632__$1 = state_57632;
var statearr_57703_57764 = state_57632__$1;
(statearr_57703_57764[(2)] = null);

(statearr_57703_57764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (10))){
var inst_57510 = (state_57632[(13)]);
var inst_57512 = (state_57632[(16)]);
var inst_57520 = cljs.core._nth.call(null,inst_57510,inst_57512);
var inst_57521 = cljs.core.nth.call(null,inst_57520,(0),null);
var inst_57522 = cljs.core.nth.call(null,inst_57520,(1),null);
var state_57632__$1 = (function (){var statearr_57704 = state_57632;
(statearr_57704[(26)] = inst_57521);

return statearr_57704;
})();
if(cljs.core.truth_(inst_57522)){
var statearr_57705_57765 = state_57632__$1;
(statearr_57705_57765[(1)] = (13));

} else {
var statearr_57706_57766 = state_57632__$1;
(statearr_57706_57766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (18))){
var inst_57557 = (state_57632[(2)]);
var state_57632__$1 = state_57632;
var statearr_57707_57767 = state_57632__$1;
(statearr_57707_57767[(2)] = inst_57557);

(statearr_57707_57767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (42))){
var state_57632__$1 = state_57632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57632__$1,(45),dchan);
} else {
if((state_val_57633 === (37))){
var inst_57600 = (state_57632[(23)]);
var inst_57500 = (state_57632[(9)]);
var inst_57591 = (state_57632[(25)]);
var inst_57600__$1 = cljs.core.first.call(null,inst_57591);
var inst_57601 = cljs.core.async.put_BANG_.call(null,inst_57600__$1,inst_57500,done);
var state_57632__$1 = (function (){var statearr_57708 = state_57632;
(statearr_57708[(23)] = inst_57600__$1);

return statearr_57708;
})();
if(cljs.core.truth_(inst_57601)){
var statearr_57709_57768 = state_57632__$1;
(statearr_57709_57768[(1)] = (39));

} else {
var statearr_57710_57769 = state_57632__$1;
(statearr_57710_57769[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57633 === (8))){
var inst_57511 = (state_57632[(15)]);
var inst_57512 = (state_57632[(16)]);
var inst_57514 = (inst_57512 < inst_57511);
var inst_57515 = inst_57514;
var state_57632__$1 = state_57632;
if(cljs.core.truth_(inst_57515)){
var statearr_57711_57770 = state_57632__$1;
(statearr_57711_57770[(1)] = (10));

} else {
var statearr_57712_57771 = state_57632__$1;
(statearr_57712_57771[(1)] = (11));

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
});})(c__41084__auto___57717,cs,m,dchan,dctr,done))
;
return ((function (switch__40996__auto__,c__41084__auto___57717,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40997__auto__ = null;
var cljs$core$async$mult_$_state_machine__40997__auto____0 = (function (){
var statearr_57713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57713[(0)] = cljs$core$async$mult_$_state_machine__40997__auto__);

(statearr_57713[(1)] = (1));

return statearr_57713;
});
var cljs$core$async$mult_$_state_machine__40997__auto____1 = (function (state_57632){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57714){if((e57714 instanceof Object)){
var ex__41000__auto__ = e57714;
var statearr_57715_57772 = state_57632;
(statearr_57715_57772[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57773 = state_57632;
state_57632 = G__57773;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40997__auto__ = function(state_57632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40997__auto____1.call(this,state_57632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40997__auto____0;
cljs$core$async$mult_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40997__auto____1;
return cljs$core$async$mult_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___57717,cs,m,dchan,dctr,done))
})();
var state__41086__auto__ = (function (){var statearr_57716 = f__41085__auto__.call(null);
(statearr_57716[(6)] = c__41084__auto___57717);

return statearr_57716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___57717,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57775 = arguments.length;
switch (G__57775) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m,ch);
} else {
var m__38433__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m,ch);
} else {
var m__38433__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m);
} else {
var m__38433__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m,state_map);
} else {
var m__38433__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__38432__auto__ = (((m == null))?null:m);
var m__38433__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,m,mode);
} else {
var m__38433__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__38925__auto__ = [];
var len__38918__auto___57787 = arguments.length;
var i__38919__auto___57788 = (0);
while(true){
if((i__38919__auto___57788 < len__38918__auto___57787)){
args__38925__auto__.push((arguments[i__38919__auto___57788]));

var G__57789 = (i__38919__auto___57788 + (1));
i__38919__auto___57788 = G__57789;
continue;
} else {
}
break;
}

var argseq__38926__auto__ = ((((3) < args__38925__auto__.length))?(new cljs.core.IndexedSeq(args__38925__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38926__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57781){
var map__57782 = p__57781;
var map__57782__$1 = ((((!((map__57782 == null)))?((((map__57782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57782):map__57782);
var opts = map__57782__$1;
var statearr_57784_57790 = state;
(statearr_57784_57790[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__57782,map__57782__$1,opts){
return (function (val){
var statearr_57785_57791 = state;
(statearr_57785_57791[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57782,map__57782__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_57786_57792 = state;
(statearr_57786_57792[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57777){
var G__57778 = cljs.core.first.call(null,seq57777);
var seq57777__$1 = cljs.core.next.call(null,seq57777);
var G__57779 = cljs.core.first.call(null,seq57777__$1);
var seq57777__$2 = cljs.core.next.call(null,seq57777__$1);
var G__57780 = cljs.core.first.call(null,seq57777__$2);
var seq57777__$3 = cljs.core.next.call(null,seq57777__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57778,G__57779,G__57780,seq57777__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async57793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57793 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta57794){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta57794 = meta57794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57795,meta57794__$1){
var self__ = this;
var _57795__$1 = this;
return (new cljs.core.async.t_cljs$core$async57793(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta57794__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57795){
var self__ = this;
var _57795__$1 = this;
return self__.meta57794;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta57794","meta57794",-561972642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57793";

cljs.core.async.t_cljs$core$async57793.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async57793");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async57793 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async57793(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57794){
return (new cljs.core.async.t_cljs$core$async57793(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57794));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async57793(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41084__auto___57957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___57957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___57957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_57897){
var state_val_57898 = (state_57897[(1)]);
if((state_val_57898 === (7))){
var inst_57812 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
var statearr_57899_57958 = state_57897__$1;
(statearr_57899_57958[(2)] = inst_57812);

(statearr_57899_57958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (20))){
var inst_57824 = (state_57897[(7)]);
var state_57897__$1 = state_57897;
var statearr_57900_57959 = state_57897__$1;
(statearr_57900_57959[(2)] = inst_57824);

(statearr_57900_57959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (27))){
var state_57897__$1 = state_57897;
var statearr_57901_57960 = state_57897__$1;
(statearr_57901_57960[(2)] = null);

(statearr_57901_57960[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (1))){
var inst_57799 = (state_57897[(8)]);
var inst_57799__$1 = calc_state.call(null);
var inst_57801 = (inst_57799__$1 == null);
var inst_57802 = cljs.core.not.call(null,inst_57801);
var state_57897__$1 = (function (){var statearr_57902 = state_57897;
(statearr_57902[(8)] = inst_57799__$1);

return statearr_57902;
})();
if(inst_57802){
var statearr_57903_57961 = state_57897__$1;
(statearr_57903_57961[(1)] = (2));

} else {
var statearr_57904_57962 = state_57897__$1;
(statearr_57904_57962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (24))){
var inst_57871 = (state_57897[(9)]);
var inst_57857 = (state_57897[(10)]);
var inst_57848 = (state_57897[(11)]);
var inst_57871__$1 = inst_57848.call(null,inst_57857);
var state_57897__$1 = (function (){var statearr_57905 = state_57897;
(statearr_57905[(9)] = inst_57871__$1);

return statearr_57905;
})();
if(cljs.core.truth_(inst_57871__$1)){
var statearr_57906_57963 = state_57897__$1;
(statearr_57906_57963[(1)] = (29));

} else {
var statearr_57907_57964 = state_57897__$1;
(statearr_57907_57964[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (4))){
var inst_57815 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57815)){
var statearr_57908_57965 = state_57897__$1;
(statearr_57908_57965[(1)] = (8));

} else {
var statearr_57909_57966 = state_57897__$1;
(statearr_57909_57966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (15))){
var inst_57842 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57842)){
var statearr_57910_57967 = state_57897__$1;
(statearr_57910_57967[(1)] = (19));

} else {
var statearr_57911_57968 = state_57897__$1;
(statearr_57911_57968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (21))){
var inst_57847 = (state_57897[(12)]);
var inst_57847__$1 = (state_57897[(2)]);
var inst_57848 = cljs.core.get.call(null,inst_57847__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57849 = cljs.core.get.call(null,inst_57847__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57850 = cljs.core.get.call(null,inst_57847__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57897__$1 = (function (){var statearr_57912 = state_57897;
(statearr_57912[(13)] = inst_57849);

(statearr_57912[(11)] = inst_57848);

(statearr_57912[(12)] = inst_57847__$1);

return statearr_57912;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_57897__$1,(22),inst_57850);
} else {
if((state_val_57898 === (31))){
var inst_57879 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57879)){
var statearr_57913_57969 = state_57897__$1;
(statearr_57913_57969[(1)] = (32));

} else {
var statearr_57914_57970 = state_57897__$1;
(statearr_57914_57970[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (32))){
var inst_57856 = (state_57897[(14)]);
var state_57897__$1 = state_57897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57897__$1,(35),out,inst_57856);
} else {
if((state_val_57898 === (33))){
var inst_57847 = (state_57897[(12)]);
var inst_57824 = inst_57847;
var state_57897__$1 = (function (){var statearr_57915 = state_57897;
(statearr_57915[(7)] = inst_57824);

return statearr_57915;
})();
var statearr_57916_57971 = state_57897__$1;
(statearr_57916_57971[(2)] = null);

(statearr_57916_57971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (13))){
var inst_57824 = (state_57897[(7)]);
var inst_57831 = inst_57824.cljs$lang$protocol_mask$partition0$;
var inst_57832 = (inst_57831 & (64));
var inst_57833 = inst_57824.cljs$core$ISeq$;
var inst_57834 = (cljs.core.PROTOCOL_SENTINEL === inst_57833);
var inst_57835 = (inst_57832) || (inst_57834);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57835)){
var statearr_57917_57972 = state_57897__$1;
(statearr_57917_57972[(1)] = (16));

} else {
var statearr_57918_57973 = state_57897__$1;
(statearr_57918_57973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (22))){
var inst_57857 = (state_57897[(10)]);
var inst_57856 = (state_57897[(14)]);
var inst_57855 = (state_57897[(2)]);
var inst_57856__$1 = cljs.core.nth.call(null,inst_57855,(0),null);
var inst_57857__$1 = cljs.core.nth.call(null,inst_57855,(1),null);
var inst_57858 = (inst_57856__$1 == null);
var inst_57859 = cljs.core._EQ_.call(null,inst_57857__$1,change);
var inst_57860 = (inst_57858) || (inst_57859);
var state_57897__$1 = (function (){var statearr_57919 = state_57897;
(statearr_57919[(10)] = inst_57857__$1);

(statearr_57919[(14)] = inst_57856__$1);

return statearr_57919;
})();
if(cljs.core.truth_(inst_57860)){
var statearr_57920_57974 = state_57897__$1;
(statearr_57920_57974[(1)] = (23));

} else {
var statearr_57921_57975 = state_57897__$1;
(statearr_57921_57975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (36))){
var inst_57847 = (state_57897[(12)]);
var inst_57824 = inst_57847;
var state_57897__$1 = (function (){var statearr_57922 = state_57897;
(statearr_57922[(7)] = inst_57824);

return statearr_57922;
})();
var statearr_57923_57976 = state_57897__$1;
(statearr_57923_57976[(2)] = null);

(statearr_57923_57976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (29))){
var inst_57871 = (state_57897[(9)]);
var state_57897__$1 = state_57897;
var statearr_57924_57977 = state_57897__$1;
(statearr_57924_57977[(2)] = inst_57871);

(statearr_57924_57977[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (6))){
var state_57897__$1 = state_57897;
var statearr_57925_57978 = state_57897__$1;
(statearr_57925_57978[(2)] = false);

(statearr_57925_57978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (28))){
var inst_57867 = (state_57897[(2)]);
var inst_57868 = calc_state.call(null);
var inst_57824 = inst_57868;
var state_57897__$1 = (function (){var statearr_57926 = state_57897;
(statearr_57926[(15)] = inst_57867);

(statearr_57926[(7)] = inst_57824);

return statearr_57926;
})();
var statearr_57927_57979 = state_57897__$1;
(statearr_57927_57979[(2)] = null);

(statearr_57927_57979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (25))){
var inst_57893 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
var statearr_57928_57980 = state_57897__$1;
(statearr_57928_57980[(2)] = inst_57893);

(statearr_57928_57980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (34))){
var inst_57891 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
var statearr_57929_57981 = state_57897__$1;
(statearr_57929_57981[(2)] = inst_57891);

(statearr_57929_57981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (17))){
var state_57897__$1 = state_57897;
var statearr_57930_57982 = state_57897__$1;
(statearr_57930_57982[(2)] = false);

(statearr_57930_57982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (3))){
var state_57897__$1 = state_57897;
var statearr_57931_57983 = state_57897__$1;
(statearr_57931_57983[(2)] = false);

(statearr_57931_57983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (12))){
var inst_57895 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57897__$1,inst_57895);
} else {
if((state_val_57898 === (2))){
var inst_57799 = (state_57897[(8)]);
var inst_57804 = inst_57799.cljs$lang$protocol_mask$partition0$;
var inst_57805 = (inst_57804 & (64));
var inst_57806 = inst_57799.cljs$core$ISeq$;
var inst_57807 = (cljs.core.PROTOCOL_SENTINEL === inst_57806);
var inst_57808 = (inst_57805) || (inst_57807);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57808)){
var statearr_57932_57984 = state_57897__$1;
(statearr_57932_57984[(1)] = (5));

} else {
var statearr_57933_57985 = state_57897__$1;
(statearr_57933_57985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (23))){
var inst_57856 = (state_57897[(14)]);
var inst_57862 = (inst_57856 == null);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57862)){
var statearr_57934_57986 = state_57897__$1;
(statearr_57934_57986[(1)] = (26));

} else {
var statearr_57935_57987 = state_57897__$1;
(statearr_57935_57987[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (35))){
var inst_57882 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
if(cljs.core.truth_(inst_57882)){
var statearr_57936_57988 = state_57897__$1;
(statearr_57936_57988[(1)] = (36));

} else {
var statearr_57937_57989 = state_57897__$1;
(statearr_57937_57989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (19))){
var inst_57824 = (state_57897[(7)]);
var inst_57844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57824);
var state_57897__$1 = state_57897;
var statearr_57938_57990 = state_57897__$1;
(statearr_57938_57990[(2)] = inst_57844);

(statearr_57938_57990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (11))){
var inst_57824 = (state_57897[(7)]);
var inst_57828 = (inst_57824 == null);
var inst_57829 = cljs.core.not.call(null,inst_57828);
var state_57897__$1 = state_57897;
if(inst_57829){
var statearr_57939_57991 = state_57897__$1;
(statearr_57939_57991[(1)] = (13));

} else {
var statearr_57940_57992 = state_57897__$1;
(statearr_57940_57992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (9))){
var inst_57799 = (state_57897[(8)]);
var state_57897__$1 = state_57897;
var statearr_57941_57993 = state_57897__$1;
(statearr_57941_57993[(2)] = inst_57799);

(statearr_57941_57993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (5))){
var state_57897__$1 = state_57897;
var statearr_57942_57994 = state_57897__$1;
(statearr_57942_57994[(2)] = true);

(statearr_57942_57994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (14))){
var state_57897__$1 = state_57897;
var statearr_57943_57995 = state_57897__$1;
(statearr_57943_57995[(2)] = false);

(statearr_57943_57995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (26))){
var inst_57857 = (state_57897[(10)]);
var inst_57864 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57857);
var state_57897__$1 = state_57897;
var statearr_57944_57996 = state_57897__$1;
(statearr_57944_57996[(2)] = inst_57864);

(statearr_57944_57996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (16))){
var state_57897__$1 = state_57897;
var statearr_57945_57997 = state_57897__$1;
(statearr_57945_57997[(2)] = true);

(statearr_57945_57997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (38))){
var inst_57887 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
var statearr_57946_57998 = state_57897__$1;
(statearr_57946_57998[(2)] = inst_57887);

(statearr_57946_57998[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (30))){
var inst_57849 = (state_57897[(13)]);
var inst_57857 = (state_57897[(10)]);
var inst_57848 = (state_57897[(11)]);
var inst_57874 = cljs.core.empty_QMARK_.call(null,inst_57848);
var inst_57875 = inst_57849.call(null,inst_57857);
var inst_57876 = cljs.core.not.call(null,inst_57875);
var inst_57877 = (inst_57874) && (inst_57876);
var state_57897__$1 = state_57897;
var statearr_57947_57999 = state_57897__$1;
(statearr_57947_57999[(2)] = inst_57877);

(statearr_57947_57999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (10))){
var inst_57799 = (state_57897[(8)]);
var inst_57820 = (state_57897[(2)]);
var inst_57821 = cljs.core.get.call(null,inst_57820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57822 = cljs.core.get.call(null,inst_57820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57823 = cljs.core.get.call(null,inst_57820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57824 = inst_57799;
var state_57897__$1 = (function (){var statearr_57948 = state_57897;
(statearr_57948[(16)] = inst_57821);

(statearr_57948[(17)] = inst_57822);

(statearr_57948[(7)] = inst_57824);

(statearr_57948[(18)] = inst_57823);

return statearr_57948;
})();
var statearr_57949_58000 = state_57897__$1;
(statearr_57949_58000[(2)] = null);

(statearr_57949_58000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (18))){
var inst_57839 = (state_57897[(2)]);
var state_57897__$1 = state_57897;
var statearr_57950_58001 = state_57897__$1;
(statearr_57950_58001[(2)] = inst_57839);

(statearr_57950_58001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (37))){
var state_57897__$1 = state_57897;
var statearr_57951_58002 = state_57897__$1;
(statearr_57951_58002[(2)] = null);

(statearr_57951_58002[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57898 === (8))){
var inst_57799 = (state_57897[(8)]);
var inst_57817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57799);
var state_57897__$1 = state_57897;
var statearr_57952_58003 = state_57897__$1;
(statearr_57952_58003[(2)] = inst_57817);

(statearr_57952_58003[(1)] = (10));


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
});})(c__41084__auto___57957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40996__auto__,c__41084__auto___57957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40997__auto__ = null;
var cljs$core$async$mix_$_state_machine__40997__auto____0 = (function (){
var statearr_57953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57953[(0)] = cljs$core$async$mix_$_state_machine__40997__auto__);

(statearr_57953[(1)] = (1));

return statearr_57953;
});
var cljs$core$async$mix_$_state_machine__40997__auto____1 = (function (state_57897){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_57897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e57954){if((e57954 instanceof Object)){
var ex__41000__auto__ = e57954;
var statearr_57955_58004 = state_57897;
(statearr_57955_58004[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58005 = state_57897;
state_57897 = G__58005;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40997__auto__ = function(state_57897){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40997__auto____1.call(this,state_57897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40997__auto____0;
cljs$core$async$mix_$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40997__auto____1;
return cljs$core$async$mix_$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___57957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41086__auto__ = (function (){var statearr_57956 = f__41085__auto__.call(null);
(statearr_57956[(6)] = c__41084__auto___57957);

return statearr_57956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___57957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__38432__auto__ = (((p == null))?null:p);
var m__38433__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__38433__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__38432__auto__ = (((p == null))?null:p);
var m__38433__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,p,v,ch);
} else {
var m__38433__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58007 = arguments.length;
switch (G__58007) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__38432__auto__ = (((p == null))?null:p);
var m__38433__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,p);
} else {
var m__38433__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__38432__auto__ = (((p == null))?null:p);
var m__38433__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38432__auto__)]);
if(!((m__38433__auto__ == null))){
return m__38433__auto__.call(null,p,v);
} else {
var m__38433__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38433__auto____$1 == null))){
return m__38433__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58011 = arguments.length;
switch (G__58011) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__37749__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__37749__auto__)){
return or__37749__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__37749__auto__,mults){
return (function (p1__58009_SHARP_){
if(cljs.core.truth_(p1__58009_SHARP_.call(null,topic))){
return p1__58009_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58009_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37749__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async58012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58012 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58013){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58013 = meta58013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58014,meta58013__$1){
var self__ = this;
var _58014__$1 = this;
return (new cljs.core.async.t_cljs$core$async58012(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58013__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58014){
var self__ = this;
var _58014__$1 = this;
return self__.meta58013;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58013","meta58013",-61283688,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58012";

cljs.core.async.t_cljs$core$async58012.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async58012");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async58012 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async58012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58013){
return (new cljs.core.async.t_cljs$core$async58012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58013));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async58012(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41084__auto___58132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58132,mults,ensure_mult,p){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58132,mults,ensure_mult,p){
return (function (state_58086){
var state_val_58087 = (state_58086[(1)]);
if((state_val_58087 === (7))){
var inst_58082 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
var statearr_58088_58133 = state_58086__$1;
(statearr_58088_58133[(2)] = inst_58082);

(statearr_58088_58133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (20))){
var state_58086__$1 = state_58086;
var statearr_58089_58134 = state_58086__$1;
(statearr_58089_58134[(2)] = null);

(statearr_58089_58134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (1))){
var state_58086__$1 = state_58086;
var statearr_58090_58135 = state_58086__$1;
(statearr_58090_58135[(2)] = null);

(statearr_58090_58135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (24))){
var inst_58065 = (state_58086[(7)]);
var inst_58074 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58065);
var state_58086__$1 = state_58086;
var statearr_58091_58136 = state_58086__$1;
(statearr_58091_58136[(2)] = inst_58074);

(statearr_58091_58136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (4))){
var inst_58017 = (state_58086[(8)]);
var inst_58017__$1 = (state_58086[(2)]);
var inst_58018 = (inst_58017__$1 == null);
var state_58086__$1 = (function (){var statearr_58092 = state_58086;
(statearr_58092[(8)] = inst_58017__$1);

return statearr_58092;
})();
if(cljs.core.truth_(inst_58018)){
var statearr_58093_58137 = state_58086__$1;
(statearr_58093_58137[(1)] = (5));

} else {
var statearr_58094_58138 = state_58086__$1;
(statearr_58094_58138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (15))){
var inst_58059 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
var statearr_58095_58139 = state_58086__$1;
(statearr_58095_58139[(2)] = inst_58059);

(statearr_58095_58139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (21))){
var inst_58079 = (state_58086[(2)]);
var state_58086__$1 = (function (){var statearr_58096 = state_58086;
(statearr_58096[(9)] = inst_58079);

return statearr_58096;
})();
var statearr_58097_58140 = state_58086__$1;
(statearr_58097_58140[(2)] = null);

(statearr_58097_58140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (13))){
var inst_58041 = (state_58086[(10)]);
var inst_58043 = cljs.core.chunked_seq_QMARK_.call(null,inst_58041);
var state_58086__$1 = state_58086;
if(inst_58043){
var statearr_58098_58141 = state_58086__$1;
(statearr_58098_58141[(1)] = (16));

} else {
var statearr_58099_58142 = state_58086__$1;
(statearr_58099_58142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (22))){
var inst_58071 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
if(cljs.core.truth_(inst_58071)){
var statearr_58100_58143 = state_58086__$1;
(statearr_58100_58143[(1)] = (23));

} else {
var statearr_58101_58144 = state_58086__$1;
(statearr_58101_58144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (6))){
var inst_58067 = (state_58086[(11)]);
var inst_58017 = (state_58086[(8)]);
var inst_58065 = (state_58086[(7)]);
var inst_58065__$1 = topic_fn.call(null,inst_58017);
var inst_58066 = cljs.core.deref.call(null,mults);
var inst_58067__$1 = cljs.core.get.call(null,inst_58066,inst_58065__$1);
var state_58086__$1 = (function (){var statearr_58102 = state_58086;
(statearr_58102[(11)] = inst_58067__$1);

(statearr_58102[(7)] = inst_58065__$1);

return statearr_58102;
})();
if(cljs.core.truth_(inst_58067__$1)){
var statearr_58103_58145 = state_58086__$1;
(statearr_58103_58145[(1)] = (19));

} else {
var statearr_58104_58146 = state_58086__$1;
(statearr_58104_58146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (25))){
var inst_58076 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
var statearr_58105_58147 = state_58086__$1;
(statearr_58105_58147[(2)] = inst_58076);

(statearr_58105_58147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (17))){
var inst_58041 = (state_58086[(10)]);
var inst_58050 = cljs.core.first.call(null,inst_58041);
var inst_58051 = cljs.core.async.muxch_STAR_.call(null,inst_58050);
var inst_58052 = cljs.core.async.close_BANG_.call(null,inst_58051);
var inst_58053 = cljs.core.next.call(null,inst_58041);
var inst_58027 = inst_58053;
var inst_58028 = null;
var inst_58029 = (0);
var inst_58030 = (0);
var state_58086__$1 = (function (){var statearr_58106 = state_58086;
(statearr_58106[(12)] = inst_58029);

(statearr_58106[(13)] = inst_58052);

(statearr_58106[(14)] = inst_58027);

(statearr_58106[(15)] = inst_58028);

(statearr_58106[(16)] = inst_58030);

return statearr_58106;
})();
var statearr_58107_58148 = state_58086__$1;
(statearr_58107_58148[(2)] = null);

(statearr_58107_58148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (3))){
var inst_58084 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58086__$1,inst_58084);
} else {
if((state_val_58087 === (12))){
var inst_58061 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
var statearr_58108_58149 = state_58086__$1;
(statearr_58108_58149[(2)] = inst_58061);

(statearr_58108_58149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (2))){
var state_58086__$1 = state_58086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58086__$1,(4),ch);
} else {
if((state_val_58087 === (23))){
var state_58086__$1 = state_58086;
var statearr_58109_58150 = state_58086__$1;
(statearr_58109_58150[(2)] = null);

(statearr_58109_58150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (19))){
var inst_58067 = (state_58086[(11)]);
var inst_58017 = (state_58086[(8)]);
var inst_58069 = cljs.core.async.muxch_STAR_.call(null,inst_58067);
var state_58086__$1 = state_58086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58086__$1,(22),inst_58069,inst_58017);
} else {
if((state_val_58087 === (11))){
var inst_58027 = (state_58086[(14)]);
var inst_58041 = (state_58086[(10)]);
var inst_58041__$1 = cljs.core.seq.call(null,inst_58027);
var state_58086__$1 = (function (){var statearr_58110 = state_58086;
(statearr_58110[(10)] = inst_58041__$1);

return statearr_58110;
})();
if(inst_58041__$1){
var statearr_58111_58151 = state_58086__$1;
(statearr_58111_58151[(1)] = (13));

} else {
var statearr_58112_58152 = state_58086__$1;
(statearr_58112_58152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (9))){
var inst_58063 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
var statearr_58113_58153 = state_58086__$1;
(statearr_58113_58153[(2)] = inst_58063);

(statearr_58113_58153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (5))){
var inst_58024 = cljs.core.deref.call(null,mults);
var inst_58025 = cljs.core.vals.call(null,inst_58024);
var inst_58026 = cljs.core.seq.call(null,inst_58025);
var inst_58027 = inst_58026;
var inst_58028 = null;
var inst_58029 = (0);
var inst_58030 = (0);
var state_58086__$1 = (function (){var statearr_58114 = state_58086;
(statearr_58114[(12)] = inst_58029);

(statearr_58114[(14)] = inst_58027);

(statearr_58114[(15)] = inst_58028);

(statearr_58114[(16)] = inst_58030);

return statearr_58114;
})();
var statearr_58115_58154 = state_58086__$1;
(statearr_58115_58154[(2)] = null);

(statearr_58115_58154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (14))){
var state_58086__$1 = state_58086;
var statearr_58119_58155 = state_58086__$1;
(statearr_58119_58155[(2)] = null);

(statearr_58119_58155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (16))){
var inst_58041 = (state_58086[(10)]);
var inst_58045 = cljs.core.chunk_first.call(null,inst_58041);
var inst_58046 = cljs.core.chunk_rest.call(null,inst_58041);
var inst_58047 = cljs.core.count.call(null,inst_58045);
var inst_58027 = inst_58046;
var inst_58028 = inst_58045;
var inst_58029 = inst_58047;
var inst_58030 = (0);
var state_58086__$1 = (function (){var statearr_58120 = state_58086;
(statearr_58120[(12)] = inst_58029);

(statearr_58120[(14)] = inst_58027);

(statearr_58120[(15)] = inst_58028);

(statearr_58120[(16)] = inst_58030);

return statearr_58120;
})();
var statearr_58121_58156 = state_58086__$1;
(statearr_58121_58156[(2)] = null);

(statearr_58121_58156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (10))){
var inst_58029 = (state_58086[(12)]);
var inst_58027 = (state_58086[(14)]);
var inst_58028 = (state_58086[(15)]);
var inst_58030 = (state_58086[(16)]);
var inst_58035 = cljs.core._nth.call(null,inst_58028,inst_58030);
var inst_58036 = cljs.core.async.muxch_STAR_.call(null,inst_58035);
var inst_58037 = cljs.core.async.close_BANG_.call(null,inst_58036);
var inst_58038 = (inst_58030 + (1));
var tmp58116 = inst_58029;
var tmp58117 = inst_58027;
var tmp58118 = inst_58028;
var inst_58027__$1 = tmp58117;
var inst_58028__$1 = tmp58118;
var inst_58029__$1 = tmp58116;
var inst_58030__$1 = inst_58038;
var state_58086__$1 = (function (){var statearr_58122 = state_58086;
(statearr_58122[(12)] = inst_58029__$1);

(statearr_58122[(14)] = inst_58027__$1);

(statearr_58122[(17)] = inst_58037);

(statearr_58122[(15)] = inst_58028__$1);

(statearr_58122[(16)] = inst_58030__$1);

return statearr_58122;
})();
var statearr_58123_58157 = state_58086__$1;
(statearr_58123_58157[(2)] = null);

(statearr_58123_58157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (18))){
var inst_58056 = (state_58086[(2)]);
var state_58086__$1 = state_58086;
var statearr_58124_58158 = state_58086__$1;
(statearr_58124_58158[(2)] = inst_58056);

(statearr_58124_58158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58087 === (8))){
var inst_58029 = (state_58086[(12)]);
var inst_58030 = (state_58086[(16)]);
var inst_58032 = (inst_58030 < inst_58029);
var inst_58033 = inst_58032;
var state_58086__$1 = state_58086;
if(cljs.core.truth_(inst_58033)){
var statearr_58125_58159 = state_58086__$1;
(statearr_58125_58159[(1)] = (10));

} else {
var statearr_58126_58160 = state_58086__$1;
(statearr_58126_58160[(1)] = (11));

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
});})(c__41084__auto___58132,mults,ensure_mult,p))
;
return ((function (switch__40996__auto__,c__41084__auto___58132,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58127[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58127[(1)] = (1));

return statearr_58127;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58086){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58128){if((e58128 instanceof Object)){
var ex__41000__auto__ = e58128;
var statearr_58129_58161 = state_58086;
(statearr_58129_58161[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58162 = state_58086;
state_58086 = G__58162;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58132,mults,ensure_mult,p))
})();
var state__41086__auto__ = (function (){var statearr_58130 = f__41085__auto__.call(null);
(statearr_58130[(6)] = c__41084__auto___58132);

return statearr_58130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58132,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58164 = arguments.length;
switch (G__58164) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58167 = arguments.length;
switch (G__58167) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58170 = arguments.length;
switch (G__58170) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__41084__auto___58237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58209){
var state_val_58210 = (state_58209[(1)]);
if((state_val_58210 === (7))){
var state_58209__$1 = state_58209;
var statearr_58211_58238 = state_58209__$1;
(statearr_58211_58238[(2)] = null);

(statearr_58211_58238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (1))){
var state_58209__$1 = state_58209;
var statearr_58212_58239 = state_58209__$1;
(statearr_58212_58239[(2)] = null);

(statearr_58212_58239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (4))){
var inst_58173 = (state_58209[(7)]);
var inst_58175 = (inst_58173 < cnt);
var state_58209__$1 = state_58209;
if(cljs.core.truth_(inst_58175)){
var statearr_58213_58240 = state_58209__$1;
(statearr_58213_58240[(1)] = (6));

} else {
var statearr_58214_58241 = state_58209__$1;
(statearr_58214_58241[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (15))){
var inst_58205 = (state_58209[(2)]);
var state_58209__$1 = state_58209;
var statearr_58215_58242 = state_58209__$1;
(statearr_58215_58242[(2)] = inst_58205);

(statearr_58215_58242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (13))){
var inst_58198 = cljs.core.async.close_BANG_.call(null,out);
var state_58209__$1 = state_58209;
var statearr_58216_58243 = state_58209__$1;
(statearr_58216_58243[(2)] = inst_58198);

(statearr_58216_58243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (6))){
var state_58209__$1 = state_58209;
var statearr_58217_58244 = state_58209__$1;
(statearr_58217_58244[(2)] = null);

(statearr_58217_58244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (3))){
var inst_58207 = (state_58209[(2)]);
var state_58209__$1 = state_58209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58209__$1,inst_58207);
} else {
if((state_val_58210 === (12))){
var inst_58195 = (state_58209[(8)]);
var inst_58195__$1 = (state_58209[(2)]);
var inst_58196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58195__$1);
var state_58209__$1 = (function (){var statearr_58218 = state_58209;
(statearr_58218[(8)] = inst_58195__$1);

return statearr_58218;
})();
if(cljs.core.truth_(inst_58196)){
var statearr_58219_58245 = state_58209__$1;
(statearr_58219_58245[(1)] = (13));

} else {
var statearr_58220_58246 = state_58209__$1;
(statearr_58220_58246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (2))){
var inst_58172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58173 = (0);
var state_58209__$1 = (function (){var statearr_58221 = state_58209;
(statearr_58221[(9)] = inst_58172);

(statearr_58221[(7)] = inst_58173);

return statearr_58221;
})();
var statearr_58222_58247 = state_58209__$1;
(statearr_58222_58247[(2)] = null);

(statearr_58222_58247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (11))){
var inst_58173 = (state_58209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58209,(10),Object,null,(9));
var inst_58182 = chs__$1.call(null,inst_58173);
var inst_58183 = done.call(null,inst_58173);
var inst_58184 = cljs.core.async.take_BANG_.call(null,inst_58182,inst_58183);
var state_58209__$1 = state_58209;
var statearr_58223_58248 = state_58209__$1;
(statearr_58223_58248[(2)] = inst_58184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (9))){
var inst_58173 = (state_58209[(7)]);
var inst_58186 = (state_58209[(2)]);
var inst_58187 = (inst_58173 + (1));
var inst_58173__$1 = inst_58187;
var state_58209__$1 = (function (){var statearr_58224 = state_58209;
(statearr_58224[(7)] = inst_58173__$1);

(statearr_58224[(10)] = inst_58186);

return statearr_58224;
})();
var statearr_58225_58249 = state_58209__$1;
(statearr_58225_58249[(2)] = null);

(statearr_58225_58249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (5))){
var inst_58193 = (state_58209[(2)]);
var state_58209__$1 = (function (){var statearr_58226 = state_58209;
(statearr_58226[(11)] = inst_58193);

return statearr_58226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58209__$1,(12),dchan);
} else {
if((state_val_58210 === (14))){
var inst_58195 = (state_58209[(8)]);
var inst_58200 = cljs.core.apply.call(null,f,inst_58195);
var state_58209__$1 = state_58209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58209__$1,(16),out,inst_58200);
} else {
if((state_val_58210 === (16))){
var inst_58202 = (state_58209[(2)]);
var state_58209__$1 = (function (){var statearr_58227 = state_58209;
(statearr_58227[(12)] = inst_58202);

return statearr_58227;
})();
var statearr_58228_58250 = state_58209__$1;
(statearr_58228_58250[(2)] = null);

(statearr_58228_58250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (10))){
var inst_58177 = (state_58209[(2)]);
var inst_58178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58209__$1 = (function (){var statearr_58229 = state_58209;
(statearr_58229[(13)] = inst_58177);

return statearr_58229;
})();
var statearr_58230_58251 = state_58209__$1;
(statearr_58230_58251[(2)] = inst_58178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58210 === (8))){
var inst_58191 = (state_58209[(2)]);
var state_58209__$1 = state_58209;
var statearr_58231_58252 = state_58209__$1;
(statearr_58231_58252[(2)] = inst_58191);

(statearr_58231_58252[(1)] = (5));


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
});})(c__41084__auto___58237,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40996__auto__,c__41084__auto___58237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58232[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58232[(1)] = (1));

return statearr_58232;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58209){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58233){if((e58233 instanceof Object)){
var ex__41000__auto__ = e58233;
var statearr_58234_58253 = state_58209;
(statearr_58234_58253[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58254 = state_58209;
state_58209 = G__58254;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58237,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41086__auto__ = (function (){var statearr_58235 = f__41085__auto__.call(null);
(statearr_58235[(6)] = c__41084__auto___58237);

return statearr_58235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58237,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58257 = arguments.length;
switch (G__58257) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41084__auto___58311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58311,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58311,out){
return (function (state_58289){
var state_val_58290 = (state_58289[(1)]);
if((state_val_58290 === (7))){
var inst_58268 = (state_58289[(7)]);
var inst_58269 = (state_58289[(8)]);
var inst_58268__$1 = (state_58289[(2)]);
var inst_58269__$1 = cljs.core.nth.call(null,inst_58268__$1,(0),null);
var inst_58270 = cljs.core.nth.call(null,inst_58268__$1,(1),null);
var inst_58271 = (inst_58269__$1 == null);
var state_58289__$1 = (function (){var statearr_58291 = state_58289;
(statearr_58291[(9)] = inst_58270);

(statearr_58291[(7)] = inst_58268__$1);

(statearr_58291[(8)] = inst_58269__$1);

return statearr_58291;
})();
if(cljs.core.truth_(inst_58271)){
var statearr_58292_58312 = state_58289__$1;
(statearr_58292_58312[(1)] = (8));

} else {
var statearr_58293_58313 = state_58289__$1;
(statearr_58293_58313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (1))){
var inst_58258 = cljs.core.vec.call(null,chs);
var inst_58259 = inst_58258;
var state_58289__$1 = (function (){var statearr_58294 = state_58289;
(statearr_58294[(10)] = inst_58259);

return statearr_58294;
})();
var statearr_58295_58314 = state_58289__$1;
(statearr_58295_58314[(2)] = null);

(statearr_58295_58314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (4))){
var inst_58259 = (state_58289[(10)]);
var state_58289__$1 = state_58289;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58289__$1,(7),inst_58259);
} else {
if((state_val_58290 === (6))){
var inst_58285 = (state_58289[(2)]);
var state_58289__$1 = state_58289;
var statearr_58296_58315 = state_58289__$1;
(statearr_58296_58315[(2)] = inst_58285);

(statearr_58296_58315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (3))){
var inst_58287 = (state_58289[(2)]);
var state_58289__$1 = state_58289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58289__$1,inst_58287);
} else {
if((state_val_58290 === (2))){
var inst_58259 = (state_58289[(10)]);
var inst_58261 = cljs.core.count.call(null,inst_58259);
var inst_58262 = (inst_58261 > (0));
var state_58289__$1 = state_58289;
if(cljs.core.truth_(inst_58262)){
var statearr_58298_58316 = state_58289__$1;
(statearr_58298_58316[(1)] = (4));

} else {
var statearr_58299_58317 = state_58289__$1;
(statearr_58299_58317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (11))){
var inst_58259 = (state_58289[(10)]);
var inst_58278 = (state_58289[(2)]);
var tmp58297 = inst_58259;
var inst_58259__$1 = tmp58297;
var state_58289__$1 = (function (){var statearr_58300 = state_58289;
(statearr_58300[(10)] = inst_58259__$1);

(statearr_58300[(11)] = inst_58278);

return statearr_58300;
})();
var statearr_58301_58318 = state_58289__$1;
(statearr_58301_58318[(2)] = null);

(statearr_58301_58318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (9))){
var inst_58269 = (state_58289[(8)]);
var state_58289__$1 = state_58289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58289__$1,(11),out,inst_58269);
} else {
if((state_val_58290 === (5))){
var inst_58283 = cljs.core.async.close_BANG_.call(null,out);
var state_58289__$1 = state_58289;
var statearr_58302_58319 = state_58289__$1;
(statearr_58302_58319[(2)] = inst_58283);

(statearr_58302_58319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (10))){
var inst_58281 = (state_58289[(2)]);
var state_58289__$1 = state_58289;
var statearr_58303_58320 = state_58289__$1;
(statearr_58303_58320[(2)] = inst_58281);

(statearr_58303_58320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58290 === (8))){
var inst_58259 = (state_58289[(10)]);
var inst_58270 = (state_58289[(9)]);
var inst_58268 = (state_58289[(7)]);
var inst_58269 = (state_58289[(8)]);
var inst_58273 = (function (){var cs = inst_58259;
var vec__58264 = inst_58268;
var v = inst_58269;
var c = inst_58270;
return ((function (cs,vec__58264,v,c,inst_58259,inst_58270,inst_58268,inst_58269,state_val_58290,c__41084__auto___58311,out){
return (function (p1__58255_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58255_SHARP_);
});
;})(cs,vec__58264,v,c,inst_58259,inst_58270,inst_58268,inst_58269,state_val_58290,c__41084__auto___58311,out))
})();
var inst_58274 = cljs.core.filterv.call(null,inst_58273,inst_58259);
var inst_58259__$1 = inst_58274;
var state_58289__$1 = (function (){var statearr_58304 = state_58289;
(statearr_58304[(10)] = inst_58259__$1);

return statearr_58304;
})();
var statearr_58305_58321 = state_58289__$1;
(statearr_58305_58321[(2)] = null);

(statearr_58305_58321[(1)] = (2));


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
});})(c__41084__auto___58311,out))
;
return ((function (switch__40996__auto__,c__41084__auto___58311,out){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58306[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58306[(1)] = (1));

return statearr_58306;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58289){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58307){if((e58307 instanceof Object)){
var ex__41000__auto__ = e58307;
var statearr_58308_58322 = state_58289;
(statearr_58308_58322[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58323 = state_58289;
state_58289 = G__58323;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58311,out))
})();
var state__41086__auto__ = (function (){var statearr_58309 = f__41085__auto__.call(null);
(statearr_58309[(6)] = c__41084__auto___58311);

return statearr_58309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58311,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58325 = arguments.length;
switch (G__58325) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41084__auto___58370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58370,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58370,out){
return (function (state_58349){
var state_val_58350 = (state_58349[(1)]);
if((state_val_58350 === (7))){
var inst_58331 = (state_58349[(7)]);
var inst_58331__$1 = (state_58349[(2)]);
var inst_58332 = (inst_58331__$1 == null);
var inst_58333 = cljs.core.not.call(null,inst_58332);
var state_58349__$1 = (function (){var statearr_58351 = state_58349;
(statearr_58351[(7)] = inst_58331__$1);

return statearr_58351;
})();
if(inst_58333){
var statearr_58352_58371 = state_58349__$1;
(statearr_58352_58371[(1)] = (8));

} else {
var statearr_58353_58372 = state_58349__$1;
(statearr_58353_58372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (1))){
var inst_58326 = (0);
var state_58349__$1 = (function (){var statearr_58354 = state_58349;
(statearr_58354[(8)] = inst_58326);

return statearr_58354;
})();
var statearr_58355_58373 = state_58349__$1;
(statearr_58355_58373[(2)] = null);

(statearr_58355_58373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (4))){
var state_58349__$1 = state_58349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58349__$1,(7),ch);
} else {
if((state_val_58350 === (6))){
var inst_58344 = (state_58349[(2)]);
var state_58349__$1 = state_58349;
var statearr_58356_58374 = state_58349__$1;
(statearr_58356_58374[(2)] = inst_58344);

(statearr_58356_58374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (3))){
var inst_58346 = (state_58349[(2)]);
var inst_58347 = cljs.core.async.close_BANG_.call(null,out);
var state_58349__$1 = (function (){var statearr_58357 = state_58349;
(statearr_58357[(9)] = inst_58346);

return statearr_58357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58349__$1,inst_58347);
} else {
if((state_val_58350 === (2))){
var inst_58326 = (state_58349[(8)]);
var inst_58328 = (inst_58326 < n);
var state_58349__$1 = state_58349;
if(cljs.core.truth_(inst_58328)){
var statearr_58358_58375 = state_58349__$1;
(statearr_58358_58375[(1)] = (4));

} else {
var statearr_58359_58376 = state_58349__$1;
(statearr_58359_58376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (11))){
var inst_58326 = (state_58349[(8)]);
var inst_58336 = (state_58349[(2)]);
var inst_58337 = (inst_58326 + (1));
var inst_58326__$1 = inst_58337;
var state_58349__$1 = (function (){var statearr_58360 = state_58349;
(statearr_58360[(8)] = inst_58326__$1);

(statearr_58360[(10)] = inst_58336);

return statearr_58360;
})();
var statearr_58361_58377 = state_58349__$1;
(statearr_58361_58377[(2)] = null);

(statearr_58361_58377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (9))){
var state_58349__$1 = state_58349;
var statearr_58362_58378 = state_58349__$1;
(statearr_58362_58378[(2)] = null);

(statearr_58362_58378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (5))){
var state_58349__$1 = state_58349;
var statearr_58363_58379 = state_58349__$1;
(statearr_58363_58379[(2)] = null);

(statearr_58363_58379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (10))){
var inst_58341 = (state_58349[(2)]);
var state_58349__$1 = state_58349;
var statearr_58364_58380 = state_58349__$1;
(statearr_58364_58380[(2)] = inst_58341);

(statearr_58364_58380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58350 === (8))){
var inst_58331 = (state_58349[(7)]);
var state_58349__$1 = state_58349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58349__$1,(11),out,inst_58331);
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
});})(c__41084__auto___58370,out))
;
return ((function (switch__40996__auto__,c__41084__auto___58370,out){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58365[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58365[(1)] = (1));

return statearr_58365;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58349){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58366){if((e58366 instanceof Object)){
var ex__41000__auto__ = e58366;
var statearr_58367_58381 = state_58349;
(statearr_58367_58381[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58382 = state_58349;
state_58349 = G__58382;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58370,out))
})();
var state__41086__auto__ = (function (){var statearr_58368 = f__41085__auto__.call(null);
(statearr_58368[(6)] = c__41084__auto___58370);

return statearr_58368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58370,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58384 = (function (f,ch,meta58385){
this.f = f;
this.ch = ch;
this.meta58385 = meta58385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58386,meta58385__$1){
var self__ = this;
var _58386__$1 = this;
return (new cljs.core.async.t_cljs$core$async58384(self__.f,self__.ch,meta58385__$1));
});

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58386){
var self__ = this;
var _58386__$1 = this;
return self__.meta58385;
});

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async58387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58387 = (function (f,ch,meta58385,_,fn1,meta58388){
this.f = f;
this.ch = ch;
this.meta58385 = meta58385;
this._ = _;
this.fn1 = fn1;
this.meta58388 = meta58388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58389,meta58388__$1){
var self__ = this;
var _58389__$1 = this;
return (new cljs.core.async.t_cljs$core$async58387(self__.f,self__.ch,self__.meta58385,self__._,self__.fn1,meta58388__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58389){
var self__ = this;
var _58389__$1 = this;
return self__.meta58388;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58383_SHARP_){
return f1.call(null,(((p1__58383_SHARP_ == null))?null:self__.f.call(null,p1__58383_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58387.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58385","meta58385",272823330,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58384","cljs.core.async/t_cljs$core$async58384",-665985344,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58388","meta58388",-546911642,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58387";

cljs.core.async.t_cljs$core$async58387.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async58387");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async58387 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58387(f__$1,ch__$1,meta58385__$1,___$2,fn1__$1,meta58388){
return (new cljs.core.async.t_cljs$core$async58387(f__$1,ch__$1,meta58385__$1,___$2,fn1__$1,meta58388));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58387(self__.f,self__.ch,self__.meta58385,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__37737__auto__ = ret;
if(cljs.core.truth_(and__37737__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__37737__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58385","meta58385",272823330,null)], null);
});

cljs.core.async.t_cljs$core$async58384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58384";

cljs.core.async.t_cljs$core$async58384.cljs$lang$ctorPrWriter = (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async58384");
});

cljs.core.async.__GT_t_cljs$core$async58384 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58384(f__$1,ch__$1,meta58385){
return (new cljs.core.async.t_cljs$core$async58384(f__$1,ch__$1,meta58385));
});

}

return (new cljs.core.async.t_cljs$core$async58384(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58390 = (function (f,ch,meta58391){
this.f = f;
this.ch = ch;
this.meta58391 = meta58391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58392,meta58391__$1){
var self__ = this;
var _58392__$1 = this;
return (new cljs.core.async.t_cljs$core$async58390(self__.f,self__.ch,meta58391__$1));
});

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58392){
var self__ = this;
var _58392__$1 = this;
return self__.meta58391;
});

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async58390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58391","meta58391",-1908532015,null)], null);
});

cljs.core.async.t_cljs$core$async58390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58390";

cljs.core.async.t_cljs$core$async58390.cljs$lang$ctorPrWriter = (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async58390");
});

cljs.core.async.__GT_t_cljs$core$async58390 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58390(f__$1,ch__$1,meta58391){
return (new cljs.core.async.t_cljs$core$async58390(f__$1,ch__$1,meta58391));
});

}

return (new cljs.core.async.t_cljs$core$async58390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async58393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58393 = (function (p,ch,meta58394){
this.p = p;
this.ch = ch;
this.meta58394 = meta58394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58395,meta58394__$1){
var self__ = this;
var _58395__$1 = this;
return (new cljs.core.async.t_cljs$core$async58393(self__.p,self__.ch,meta58394__$1));
});

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58395){
var self__ = this;
var _58395__$1 = this;
return self__.meta58394;
});

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async58393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58394","meta58394",-814172166,null)], null);
});

cljs.core.async.t_cljs$core$async58393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58393";

cljs.core.async.t_cljs$core$async58393.cljs$lang$ctorPrWriter = (function (this__38374__auto__,writer__38375__auto__,opt__38376__auto__){
return cljs.core._write.call(null,writer__38375__auto__,"cljs.core.async/t_cljs$core$async58393");
});

cljs.core.async.__GT_t_cljs$core$async58393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58393(p__$1,ch__$1,meta58394){
return (new cljs.core.async.t_cljs$core$async58393(p__$1,ch__$1,meta58394));
});

}

return (new cljs.core.async.t_cljs$core$async58393(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58397 = arguments.length;
switch (G__58397) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41084__auto___58437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58437,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58437,out){
return (function (state_58418){
var state_val_58419 = (state_58418[(1)]);
if((state_val_58419 === (7))){
var inst_58414 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58420_58438 = state_58418__$1;
(statearr_58420_58438[(2)] = inst_58414);

(statearr_58420_58438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (1))){
var state_58418__$1 = state_58418;
var statearr_58421_58439 = state_58418__$1;
(statearr_58421_58439[(2)] = null);

(statearr_58421_58439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (4))){
var inst_58400 = (state_58418[(7)]);
var inst_58400__$1 = (state_58418[(2)]);
var inst_58401 = (inst_58400__$1 == null);
var state_58418__$1 = (function (){var statearr_58422 = state_58418;
(statearr_58422[(7)] = inst_58400__$1);

return statearr_58422;
})();
if(cljs.core.truth_(inst_58401)){
var statearr_58423_58440 = state_58418__$1;
(statearr_58423_58440[(1)] = (5));

} else {
var statearr_58424_58441 = state_58418__$1;
(statearr_58424_58441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (6))){
var inst_58400 = (state_58418[(7)]);
var inst_58405 = p.call(null,inst_58400);
var state_58418__$1 = state_58418;
if(cljs.core.truth_(inst_58405)){
var statearr_58425_58442 = state_58418__$1;
(statearr_58425_58442[(1)] = (8));

} else {
var statearr_58426_58443 = state_58418__$1;
(statearr_58426_58443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (3))){
var inst_58416 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58418__$1,inst_58416);
} else {
if((state_val_58419 === (2))){
var state_58418__$1 = state_58418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58418__$1,(4),ch);
} else {
if((state_val_58419 === (11))){
var inst_58408 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58427_58444 = state_58418__$1;
(statearr_58427_58444[(2)] = inst_58408);

(statearr_58427_58444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (9))){
var state_58418__$1 = state_58418;
var statearr_58428_58445 = state_58418__$1;
(statearr_58428_58445[(2)] = null);

(statearr_58428_58445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (5))){
var inst_58403 = cljs.core.async.close_BANG_.call(null,out);
var state_58418__$1 = state_58418;
var statearr_58429_58446 = state_58418__$1;
(statearr_58429_58446[(2)] = inst_58403);

(statearr_58429_58446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (10))){
var inst_58411 = (state_58418[(2)]);
var state_58418__$1 = (function (){var statearr_58430 = state_58418;
(statearr_58430[(8)] = inst_58411);

return statearr_58430;
})();
var statearr_58431_58447 = state_58418__$1;
(statearr_58431_58447[(2)] = null);

(statearr_58431_58447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (8))){
var inst_58400 = (state_58418[(7)]);
var state_58418__$1 = state_58418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58418__$1,(11),out,inst_58400);
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
});})(c__41084__auto___58437,out))
;
return ((function (switch__40996__auto__,c__41084__auto___58437,out){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58432 = [null,null,null,null,null,null,null,null,null];
(statearr_58432[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58432[(1)] = (1));

return statearr_58432;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58418){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58433){if((e58433 instanceof Object)){
var ex__41000__auto__ = e58433;
var statearr_58434_58448 = state_58418;
(statearr_58434_58448[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58449 = state_58418;
state_58418 = G__58449;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58437,out))
})();
var state__41086__auto__ = (function (){var statearr_58435 = f__41085__auto__.call(null);
(statearr_58435[(6)] = c__41084__auto___58437);

return statearr_58435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58437,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58451 = arguments.length;
switch (G__58451) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto__){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto__){
return (function (state_58514){
var state_val_58515 = (state_58514[(1)]);
if((state_val_58515 === (7))){
var inst_58510 = (state_58514[(2)]);
var state_58514__$1 = state_58514;
var statearr_58516_58554 = state_58514__$1;
(statearr_58516_58554[(2)] = inst_58510);

(statearr_58516_58554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (20))){
var inst_58480 = (state_58514[(7)]);
var inst_58491 = (state_58514[(2)]);
var inst_58492 = cljs.core.next.call(null,inst_58480);
var inst_58466 = inst_58492;
var inst_58467 = null;
var inst_58468 = (0);
var inst_58469 = (0);
var state_58514__$1 = (function (){var statearr_58517 = state_58514;
(statearr_58517[(8)] = inst_58491);

(statearr_58517[(9)] = inst_58466);

(statearr_58517[(10)] = inst_58467);

(statearr_58517[(11)] = inst_58468);

(statearr_58517[(12)] = inst_58469);

return statearr_58517;
})();
var statearr_58518_58555 = state_58514__$1;
(statearr_58518_58555[(2)] = null);

(statearr_58518_58555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (1))){
var state_58514__$1 = state_58514;
var statearr_58519_58556 = state_58514__$1;
(statearr_58519_58556[(2)] = null);

(statearr_58519_58556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (4))){
var inst_58455 = (state_58514[(13)]);
var inst_58455__$1 = (state_58514[(2)]);
var inst_58456 = (inst_58455__$1 == null);
var state_58514__$1 = (function (){var statearr_58520 = state_58514;
(statearr_58520[(13)] = inst_58455__$1);

return statearr_58520;
})();
if(cljs.core.truth_(inst_58456)){
var statearr_58521_58557 = state_58514__$1;
(statearr_58521_58557[(1)] = (5));

} else {
var statearr_58522_58558 = state_58514__$1;
(statearr_58522_58558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (15))){
var state_58514__$1 = state_58514;
var statearr_58526_58559 = state_58514__$1;
(statearr_58526_58559[(2)] = null);

(statearr_58526_58559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (21))){
var state_58514__$1 = state_58514;
var statearr_58527_58560 = state_58514__$1;
(statearr_58527_58560[(2)] = null);

(statearr_58527_58560[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (13))){
var inst_58466 = (state_58514[(9)]);
var inst_58467 = (state_58514[(10)]);
var inst_58468 = (state_58514[(11)]);
var inst_58469 = (state_58514[(12)]);
var inst_58476 = (state_58514[(2)]);
var inst_58477 = (inst_58469 + (1));
var tmp58523 = inst_58466;
var tmp58524 = inst_58467;
var tmp58525 = inst_58468;
var inst_58466__$1 = tmp58523;
var inst_58467__$1 = tmp58524;
var inst_58468__$1 = tmp58525;
var inst_58469__$1 = inst_58477;
var state_58514__$1 = (function (){var statearr_58528 = state_58514;
(statearr_58528[(9)] = inst_58466__$1);

(statearr_58528[(10)] = inst_58467__$1);

(statearr_58528[(11)] = inst_58468__$1);

(statearr_58528[(14)] = inst_58476);

(statearr_58528[(12)] = inst_58469__$1);

return statearr_58528;
})();
var statearr_58529_58561 = state_58514__$1;
(statearr_58529_58561[(2)] = null);

(statearr_58529_58561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (22))){
var state_58514__$1 = state_58514;
var statearr_58530_58562 = state_58514__$1;
(statearr_58530_58562[(2)] = null);

(statearr_58530_58562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (6))){
var inst_58455 = (state_58514[(13)]);
var inst_58464 = f.call(null,inst_58455);
var inst_58465 = cljs.core.seq.call(null,inst_58464);
var inst_58466 = inst_58465;
var inst_58467 = null;
var inst_58468 = (0);
var inst_58469 = (0);
var state_58514__$1 = (function (){var statearr_58531 = state_58514;
(statearr_58531[(9)] = inst_58466);

(statearr_58531[(10)] = inst_58467);

(statearr_58531[(11)] = inst_58468);

(statearr_58531[(12)] = inst_58469);

return statearr_58531;
})();
var statearr_58532_58563 = state_58514__$1;
(statearr_58532_58563[(2)] = null);

(statearr_58532_58563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (17))){
var inst_58480 = (state_58514[(7)]);
var inst_58484 = cljs.core.chunk_first.call(null,inst_58480);
var inst_58485 = cljs.core.chunk_rest.call(null,inst_58480);
var inst_58486 = cljs.core.count.call(null,inst_58484);
var inst_58466 = inst_58485;
var inst_58467 = inst_58484;
var inst_58468 = inst_58486;
var inst_58469 = (0);
var state_58514__$1 = (function (){var statearr_58533 = state_58514;
(statearr_58533[(9)] = inst_58466);

(statearr_58533[(10)] = inst_58467);

(statearr_58533[(11)] = inst_58468);

(statearr_58533[(12)] = inst_58469);

return statearr_58533;
})();
var statearr_58534_58564 = state_58514__$1;
(statearr_58534_58564[(2)] = null);

(statearr_58534_58564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (3))){
var inst_58512 = (state_58514[(2)]);
var state_58514__$1 = state_58514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58514__$1,inst_58512);
} else {
if((state_val_58515 === (12))){
var inst_58500 = (state_58514[(2)]);
var state_58514__$1 = state_58514;
var statearr_58535_58565 = state_58514__$1;
(statearr_58535_58565[(2)] = inst_58500);

(statearr_58535_58565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (2))){
var state_58514__$1 = state_58514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58514__$1,(4),in$);
} else {
if((state_val_58515 === (23))){
var inst_58508 = (state_58514[(2)]);
var state_58514__$1 = state_58514;
var statearr_58536_58566 = state_58514__$1;
(statearr_58536_58566[(2)] = inst_58508);

(statearr_58536_58566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (19))){
var inst_58495 = (state_58514[(2)]);
var state_58514__$1 = state_58514;
var statearr_58537_58567 = state_58514__$1;
(statearr_58537_58567[(2)] = inst_58495);

(statearr_58537_58567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (11))){
var inst_58466 = (state_58514[(9)]);
var inst_58480 = (state_58514[(7)]);
var inst_58480__$1 = cljs.core.seq.call(null,inst_58466);
var state_58514__$1 = (function (){var statearr_58538 = state_58514;
(statearr_58538[(7)] = inst_58480__$1);

return statearr_58538;
})();
if(inst_58480__$1){
var statearr_58539_58568 = state_58514__$1;
(statearr_58539_58568[(1)] = (14));

} else {
var statearr_58540_58569 = state_58514__$1;
(statearr_58540_58569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (9))){
var inst_58502 = (state_58514[(2)]);
var inst_58503 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_58514__$1 = (function (){var statearr_58541 = state_58514;
(statearr_58541[(15)] = inst_58502);

return statearr_58541;
})();
if(cljs.core.truth_(inst_58503)){
var statearr_58542_58570 = state_58514__$1;
(statearr_58542_58570[(1)] = (21));

} else {
var statearr_58543_58571 = state_58514__$1;
(statearr_58543_58571[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (5))){
var inst_58458 = cljs.core.async.close_BANG_.call(null,out);
var state_58514__$1 = state_58514;
var statearr_58544_58572 = state_58514__$1;
(statearr_58544_58572[(2)] = inst_58458);

(statearr_58544_58572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (14))){
var inst_58480 = (state_58514[(7)]);
var inst_58482 = cljs.core.chunked_seq_QMARK_.call(null,inst_58480);
var state_58514__$1 = state_58514;
if(inst_58482){
var statearr_58545_58573 = state_58514__$1;
(statearr_58545_58573[(1)] = (17));

} else {
var statearr_58546_58574 = state_58514__$1;
(statearr_58546_58574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (16))){
var inst_58498 = (state_58514[(2)]);
var state_58514__$1 = state_58514;
var statearr_58547_58575 = state_58514__$1;
(statearr_58547_58575[(2)] = inst_58498);

(statearr_58547_58575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58515 === (10))){
var inst_58467 = (state_58514[(10)]);
var inst_58469 = (state_58514[(12)]);
var inst_58474 = cljs.core._nth.call(null,inst_58467,inst_58469);
var state_58514__$1 = state_58514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58514__$1,(13),out,inst_58474);
} else {
if((state_val_58515 === (18))){
var inst_58480 = (state_58514[(7)]);
var inst_58489 = cljs.core.first.call(null,inst_58480);
var state_58514__$1 = state_58514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58514__$1,(20),out,inst_58489);
} else {
if((state_val_58515 === (8))){
var inst_58468 = (state_58514[(11)]);
var inst_58469 = (state_58514[(12)]);
var inst_58471 = (inst_58469 < inst_58468);
var inst_58472 = inst_58471;
var state_58514__$1 = state_58514;
if(cljs.core.truth_(inst_58472)){
var statearr_58548_58576 = state_58514__$1;
(statearr_58548_58576[(1)] = (10));

} else {
var statearr_58549_58577 = state_58514__$1;
(statearr_58549_58577[(1)] = (11));

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
});})(c__41084__auto__))
;
return ((function (switch__40996__auto__,c__41084__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40997__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40997__auto____0 = (function (){
var statearr_58550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58550[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40997__auto__);

(statearr_58550[(1)] = (1));

return statearr_58550;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40997__auto____1 = (function (state_58514){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58551){if((e58551 instanceof Object)){
var ex__41000__auto__ = e58551;
var statearr_58552_58578 = state_58514;
(statearr_58552_58578[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58579 = state_58514;
state_58514 = G__58579;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40997__auto__ = function(state_58514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40997__auto____1.call(this,state_58514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40997__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40997__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto__))
})();
var state__41086__auto__ = (function (){var statearr_58553 = f__41085__auto__.call(null);
(statearr_58553[(6)] = c__41084__auto__);

return statearr_58553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto__))
);

return c__41084__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58581 = arguments.length;
switch (G__58581) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__58584 = arguments.length;
switch (G__58584) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__58587 = arguments.length;
switch (G__58587) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41084__auto___58634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58634,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58634,out){
return (function (state_58611){
var state_val_58612 = (state_58611[(1)]);
if((state_val_58612 === (7))){
var inst_58606 = (state_58611[(2)]);
var state_58611__$1 = state_58611;
var statearr_58613_58635 = state_58611__$1;
(statearr_58613_58635[(2)] = inst_58606);

(statearr_58613_58635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (1))){
var inst_58588 = null;
var state_58611__$1 = (function (){var statearr_58614 = state_58611;
(statearr_58614[(7)] = inst_58588);

return statearr_58614;
})();
var statearr_58615_58636 = state_58611__$1;
(statearr_58615_58636[(2)] = null);

(statearr_58615_58636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (4))){
var inst_58591 = (state_58611[(8)]);
var inst_58591__$1 = (state_58611[(2)]);
var inst_58592 = (inst_58591__$1 == null);
var inst_58593 = cljs.core.not.call(null,inst_58592);
var state_58611__$1 = (function (){var statearr_58616 = state_58611;
(statearr_58616[(8)] = inst_58591__$1);

return statearr_58616;
})();
if(inst_58593){
var statearr_58617_58637 = state_58611__$1;
(statearr_58617_58637[(1)] = (5));

} else {
var statearr_58618_58638 = state_58611__$1;
(statearr_58618_58638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (6))){
var state_58611__$1 = state_58611;
var statearr_58619_58639 = state_58611__$1;
(statearr_58619_58639[(2)] = null);

(statearr_58619_58639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (3))){
var inst_58608 = (state_58611[(2)]);
var inst_58609 = cljs.core.async.close_BANG_.call(null,out);
var state_58611__$1 = (function (){var statearr_58620 = state_58611;
(statearr_58620[(9)] = inst_58608);

return statearr_58620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58611__$1,inst_58609);
} else {
if((state_val_58612 === (2))){
var state_58611__$1 = state_58611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58611__$1,(4),ch);
} else {
if((state_val_58612 === (11))){
var inst_58591 = (state_58611[(8)]);
var inst_58600 = (state_58611[(2)]);
var inst_58588 = inst_58591;
var state_58611__$1 = (function (){var statearr_58621 = state_58611;
(statearr_58621[(7)] = inst_58588);

(statearr_58621[(10)] = inst_58600);

return statearr_58621;
})();
var statearr_58622_58640 = state_58611__$1;
(statearr_58622_58640[(2)] = null);

(statearr_58622_58640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (9))){
var inst_58591 = (state_58611[(8)]);
var state_58611__$1 = state_58611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58611__$1,(11),out,inst_58591);
} else {
if((state_val_58612 === (5))){
var inst_58588 = (state_58611[(7)]);
var inst_58591 = (state_58611[(8)]);
var inst_58595 = cljs.core._EQ_.call(null,inst_58591,inst_58588);
var state_58611__$1 = state_58611;
if(inst_58595){
var statearr_58624_58641 = state_58611__$1;
(statearr_58624_58641[(1)] = (8));

} else {
var statearr_58625_58642 = state_58611__$1;
(statearr_58625_58642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (10))){
var inst_58603 = (state_58611[(2)]);
var state_58611__$1 = state_58611;
var statearr_58626_58643 = state_58611__$1;
(statearr_58626_58643[(2)] = inst_58603);

(statearr_58626_58643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58612 === (8))){
var inst_58588 = (state_58611[(7)]);
var tmp58623 = inst_58588;
var inst_58588__$1 = tmp58623;
var state_58611__$1 = (function (){var statearr_58627 = state_58611;
(statearr_58627[(7)] = inst_58588__$1);

return statearr_58627;
})();
var statearr_58628_58644 = state_58611__$1;
(statearr_58628_58644[(2)] = null);

(statearr_58628_58644[(1)] = (2));


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
});})(c__41084__auto___58634,out))
;
return ((function (switch__40996__auto__,c__41084__auto___58634,out){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58629[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58629[(1)] = (1));

return statearr_58629;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58611){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58630){if((e58630 instanceof Object)){
var ex__41000__auto__ = e58630;
var statearr_58631_58645 = state_58611;
(statearr_58631_58645[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58646 = state_58611;
state_58611 = G__58646;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58634,out))
})();
var state__41086__auto__ = (function (){var statearr_58632 = f__41085__auto__.call(null);
(statearr_58632[(6)] = c__41084__auto___58634);

return statearr_58632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58634,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58648 = arguments.length;
switch (G__58648) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41084__auto___58714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58714,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58714,out){
return (function (state_58686){
var state_val_58687 = (state_58686[(1)]);
if((state_val_58687 === (7))){
var inst_58682 = (state_58686[(2)]);
var state_58686__$1 = state_58686;
var statearr_58688_58715 = state_58686__$1;
(statearr_58688_58715[(2)] = inst_58682);

(statearr_58688_58715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (1))){
var inst_58649 = (new Array(n));
var inst_58650 = inst_58649;
var inst_58651 = (0);
var state_58686__$1 = (function (){var statearr_58689 = state_58686;
(statearr_58689[(7)] = inst_58650);

(statearr_58689[(8)] = inst_58651);

return statearr_58689;
})();
var statearr_58690_58716 = state_58686__$1;
(statearr_58690_58716[(2)] = null);

(statearr_58690_58716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (4))){
var inst_58654 = (state_58686[(9)]);
var inst_58654__$1 = (state_58686[(2)]);
var inst_58655 = (inst_58654__$1 == null);
var inst_58656 = cljs.core.not.call(null,inst_58655);
var state_58686__$1 = (function (){var statearr_58691 = state_58686;
(statearr_58691[(9)] = inst_58654__$1);

return statearr_58691;
})();
if(inst_58656){
var statearr_58692_58717 = state_58686__$1;
(statearr_58692_58717[(1)] = (5));

} else {
var statearr_58693_58718 = state_58686__$1;
(statearr_58693_58718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (15))){
var inst_58676 = (state_58686[(2)]);
var state_58686__$1 = state_58686;
var statearr_58694_58719 = state_58686__$1;
(statearr_58694_58719[(2)] = inst_58676);

(statearr_58694_58719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (13))){
var state_58686__$1 = state_58686;
var statearr_58695_58720 = state_58686__$1;
(statearr_58695_58720[(2)] = null);

(statearr_58695_58720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (6))){
var inst_58651 = (state_58686[(8)]);
var inst_58672 = (inst_58651 > (0));
var state_58686__$1 = state_58686;
if(cljs.core.truth_(inst_58672)){
var statearr_58696_58721 = state_58686__$1;
(statearr_58696_58721[(1)] = (12));

} else {
var statearr_58697_58722 = state_58686__$1;
(statearr_58697_58722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (3))){
var inst_58684 = (state_58686[(2)]);
var state_58686__$1 = state_58686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58686__$1,inst_58684);
} else {
if((state_val_58687 === (12))){
var inst_58650 = (state_58686[(7)]);
var inst_58674 = cljs.core.vec.call(null,inst_58650);
var state_58686__$1 = state_58686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58686__$1,(15),out,inst_58674);
} else {
if((state_val_58687 === (2))){
var state_58686__$1 = state_58686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58686__$1,(4),ch);
} else {
if((state_val_58687 === (11))){
var inst_58666 = (state_58686[(2)]);
var inst_58667 = (new Array(n));
var inst_58650 = inst_58667;
var inst_58651 = (0);
var state_58686__$1 = (function (){var statearr_58698 = state_58686;
(statearr_58698[(10)] = inst_58666);

(statearr_58698[(7)] = inst_58650);

(statearr_58698[(8)] = inst_58651);

return statearr_58698;
})();
var statearr_58699_58723 = state_58686__$1;
(statearr_58699_58723[(2)] = null);

(statearr_58699_58723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (9))){
var inst_58650 = (state_58686[(7)]);
var inst_58664 = cljs.core.vec.call(null,inst_58650);
var state_58686__$1 = state_58686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58686__$1,(11),out,inst_58664);
} else {
if((state_val_58687 === (5))){
var inst_58654 = (state_58686[(9)]);
var inst_58650 = (state_58686[(7)]);
var inst_58659 = (state_58686[(11)]);
var inst_58651 = (state_58686[(8)]);
var inst_58658 = (inst_58650[inst_58651] = inst_58654);
var inst_58659__$1 = (inst_58651 + (1));
var inst_58660 = (inst_58659__$1 < n);
var state_58686__$1 = (function (){var statearr_58700 = state_58686;
(statearr_58700[(11)] = inst_58659__$1);

(statearr_58700[(12)] = inst_58658);

return statearr_58700;
})();
if(cljs.core.truth_(inst_58660)){
var statearr_58701_58724 = state_58686__$1;
(statearr_58701_58724[(1)] = (8));

} else {
var statearr_58702_58725 = state_58686__$1;
(statearr_58702_58725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (14))){
var inst_58679 = (state_58686[(2)]);
var inst_58680 = cljs.core.async.close_BANG_.call(null,out);
var state_58686__$1 = (function (){var statearr_58704 = state_58686;
(statearr_58704[(13)] = inst_58679);

return statearr_58704;
})();
var statearr_58705_58726 = state_58686__$1;
(statearr_58705_58726[(2)] = inst_58680);

(statearr_58705_58726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (10))){
var inst_58670 = (state_58686[(2)]);
var state_58686__$1 = state_58686;
var statearr_58706_58727 = state_58686__$1;
(statearr_58706_58727[(2)] = inst_58670);

(statearr_58706_58727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58687 === (8))){
var inst_58650 = (state_58686[(7)]);
var inst_58659 = (state_58686[(11)]);
var tmp58703 = inst_58650;
var inst_58650__$1 = tmp58703;
var inst_58651 = inst_58659;
var state_58686__$1 = (function (){var statearr_58707 = state_58686;
(statearr_58707[(7)] = inst_58650__$1);

(statearr_58707[(8)] = inst_58651);

return statearr_58707;
})();
var statearr_58708_58728 = state_58686__$1;
(statearr_58708_58728[(2)] = null);

(statearr_58708_58728[(1)] = (2));


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
});})(c__41084__auto___58714,out))
;
return ((function (switch__40996__auto__,c__41084__auto___58714,out){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58709[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58709[(1)] = (1));

return statearr_58709;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58686){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58710){if((e58710 instanceof Object)){
var ex__41000__auto__ = e58710;
var statearr_58711_58729 = state_58686;
(statearr_58711_58729[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58730 = state_58686;
state_58686 = G__58730;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58714,out))
})();
var state__41086__auto__ = (function (){var statearr_58712 = f__41085__auto__.call(null);
(statearr_58712[(6)] = c__41084__auto___58714);

return statearr_58712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58714,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58732 = arguments.length;
switch (G__58732) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41084__auto___58802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41084__auto___58802,out){
return (function (){
var f__41085__auto__ = (function (){var switch__40996__auto__ = ((function (c__41084__auto___58802,out){
return (function (state_58774){
var state_val_58775 = (state_58774[(1)]);
if((state_val_58775 === (7))){
var inst_58770 = (state_58774[(2)]);
var state_58774__$1 = state_58774;
var statearr_58776_58803 = state_58774__$1;
(statearr_58776_58803[(2)] = inst_58770);

(statearr_58776_58803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (1))){
var inst_58733 = [];
var inst_58734 = inst_58733;
var inst_58735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58774__$1 = (function (){var statearr_58777 = state_58774;
(statearr_58777[(7)] = inst_58734);

(statearr_58777[(8)] = inst_58735);

return statearr_58777;
})();
var statearr_58778_58804 = state_58774__$1;
(statearr_58778_58804[(2)] = null);

(statearr_58778_58804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (4))){
var inst_58738 = (state_58774[(9)]);
var inst_58738__$1 = (state_58774[(2)]);
var inst_58739 = (inst_58738__$1 == null);
var inst_58740 = cljs.core.not.call(null,inst_58739);
var state_58774__$1 = (function (){var statearr_58779 = state_58774;
(statearr_58779[(9)] = inst_58738__$1);

return statearr_58779;
})();
if(inst_58740){
var statearr_58780_58805 = state_58774__$1;
(statearr_58780_58805[(1)] = (5));

} else {
var statearr_58781_58806 = state_58774__$1;
(statearr_58781_58806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (15))){
var inst_58764 = (state_58774[(2)]);
var state_58774__$1 = state_58774;
var statearr_58782_58807 = state_58774__$1;
(statearr_58782_58807[(2)] = inst_58764);

(statearr_58782_58807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (13))){
var state_58774__$1 = state_58774;
var statearr_58783_58808 = state_58774__$1;
(statearr_58783_58808[(2)] = null);

(statearr_58783_58808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (6))){
var inst_58734 = (state_58774[(7)]);
var inst_58759 = inst_58734.length;
var inst_58760 = (inst_58759 > (0));
var state_58774__$1 = state_58774;
if(cljs.core.truth_(inst_58760)){
var statearr_58784_58809 = state_58774__$1;
(statearr_58784_58809[(1)] = (12));

} else {
var statearr_58785_58810 = state_58774__$1;
(statearr_58785_58810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (3))){
var inst_58772 = (state_58774[(2)]);
var state_58774__$1 = state_58774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58774__$1,inst_58772);
} else {
if((state_val_58775 === (12))){
var inst_58734 = (state_58774[(7)]);
var inst_58762 = cljs.core.vec.call(null,inst_58734);
var state_58774__$1 = state_58774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58774__$1,(15),out,inst_58762);
} else {
if((state_val_58775 === (2))){
var state_58774__$1 = state_58774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58774__$1,(4),ch);
} else {
if((state_val_58775 === (11))){
var inst_58742 = (state_58774[(10)]);
var inst_58738 = (state_58774[(9)]);
var inst_58752 = (state_58774[(2)]);
var inst_58753 = [];
var inst_58754 = inst_58753.push(inst_58738);
var inst_58734 = inst_58753;
var inst_58735 = inst_58742;
var state_58774__$1 = (function (){var statearr_58786 = state_58774;
(statearr_58786[(7)] = inst_58734);

(statearr_58786[(11)] = inst_58754);

(statearr_58786[(12)] = inst_58752);

(statearr_58786[(8)] = inst_58735);

return statearr_58786;
})();
var statearr_58787_58811 = state_58774__$1;
(statearr_58787_58811[(2)] = null);

(statearr_58787_58811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (9))){
var inst_58734 = (state_58774[(7)]);
var inst_58750 = cljs.core.vec.call(null,inst_58734);
var state_58774__$1 = state_58774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58774__$1,(11),out,inst_58750);
} else {
if((state_val_58775 === (5))){
var inst_58742 = (state_58774[(10)]);
var inst_58738 = (state_58774[(9)]);
var inst_58735 = (state_58774[(8)]);
var inst_58742__$1 = f.call(null,inst_58738);
var inst_58743 = cljs.core._EQ_.call(null,inst_58742__$1,inst_58735);
var inst_58744 = cljs.core.keyword_identical_QMARK_.call(null,inst_58735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58745 = (inst_58743) || (inst_58744);
var state_58774__$1 = (function (){var statearr_58788 = state_58774;
(statearr_58788[(10)] = inst_58742__$1);

return statearr_58788;
})();
if(cljs.core.truth_(inst_58745)){
var statearr_58789_58812 = state_58774__$1;
(statearr_58789_58812[(1)] = (8));

} else {
var statearr_58790_58813 = state_58774__$1;
(statearr_58790_58813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (14))){
var inst_58767 = (state_58774[(2)]);
var inst_58768 = cljs.core.async.close_BANG_.call(null,out);
var state_58774__$1 = (function (){var statearr_58792 = state_58774;
(statearr_58792[(13)] = inst_58767);

return statearr_58792;
})();
var statearr_58793_58814 = state_58774__$1;
(statearr_58793_58814[(2)] = inst_58768);

(statearr_58793_58814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (10))){
var inst_58757 = (state_58774[(2)]);
var state_58774__$1 = state_58774;
var statearr_58794_58815 = state_58774__$1;
(statearr_58794_58815[(2)] = inst_58757);

(statearr_58794_58815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58775 === (8))){
var inst_58734 = (state_58774[(7)]);
var inst_58742 = (state_58774[(10)]);
var inst_58738 = (state_58774[(9)]);
var inst_58747 = inst_58734.push(inst_58738);
var tmp58791 = inst_58734;
var inst_58734__$1 = tmp58791;
var inst_58735 = inst_58742;
var state_58774__$1 = (function (){var statearr_58795 = state_58774;
(statearr_58795[(7)] = inst_58734__$1);

(statearr_58795[(14)] = inst_58747);

(statearr_58795[(8)] = inst_58735);

return statearr_58795;
})();
var statearr_58796_58816 = state_58774__$1;
(statearr_58796_58816[(2)] = null);

(statearr_58796_58816[(1)] = (2));


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
});})(c__41084__auto___58802,out))
;
return ((function (switch__40996__auto__,c__41084__auto___58802,out){
return (function() {
var cljs$core$async$state_machine__40997__auto__ = null;
var cljs$core$async$state_machine__40997__auto____0 = (function (){
var statearr_58797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58797[(0)] = cljs$core$async$state_machine__40997__auto__);

(statearr_58797[(1)] = (1));

return statearr_58797;
});
var cljs$core$async$state_machine__40997__auto____1 = (function (state_58774){
while(true){
var ret_value__40998__auto__ = (function (){try{while(true){
var result__40999__auto__ = switch__40996__auto__.call(null,state_58774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40999__auto__;
}
break;
}
}catch (e58798){if((e58798 instanceof Object)){
var ex__41000__auto__ = e58798;
var statearr_58799_58817 = state_58774;
(statearr_58799_58817[(5)] = ex__41000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58818 = state_58774;
state_58774 = G__58818;
continue;
} else {
return ret_value__40998__auto__;
}
break;
}
});
cljs$core$async$state_machine__40997__auto__ = function(state_58774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40997__auto____1.call(this,state_58774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40997__auto____0;
cljs$core$async$state_machine__40997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40997__auto____1;
return cljs$core$async$state_machine__40997__auto__;
})()
;})(switch__40996__auto__,c__41084__auto___58802,out))
})();
var state__41086__auto__ = (function (){var statearr_58800 = f__41085__auto__.call(null);
(statearr_58800[(6)] = c__41084__auto___58802);

return statearr_58800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41086__auto__);
});})(c__41084__auto___58802,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507178396903
