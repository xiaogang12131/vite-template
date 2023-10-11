var d_ = Object.defineProperty;
var p_ = (i, e, t) =>
  e in i
    ? d_(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Hn = (i, e, t) => (p_(i, typeof e != 'symbol' ? e + '' : e, t), t);
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver(r => {
    for (const s of r)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
function hu(i, e) {
  const t = Object.create(null),
    n = i.split(',');
  for (let r = 0; r < n.length; r++) t[n[r]] = !0;
  return e ? r => !!t[r.toLowerCase()] : r => !!t[r];
}
const m_ =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  g_ = hu(m_);
function ip(i) {
  return !!i || i === '';
}
function Xi(i) {
  if (Fe(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
      const n = i[t],
        r = At(n) ? v_(n) : Xi(n);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  } else {
    if (At(i)) return i;
    if (rt(i)) return i;
  }
}
const __ = /;(?![^(]*\))/g,
  x_ = /:(.+)/;
function v_(i) {
  const e = {};
  return (
    i.split(__).forEach(t => {
      if (t) {
        const n = t.split(x_);
        n.length > 1 && (e[n[0].trim()] = n[1].trim());
      }
    }),
    e
  );
}
function Go(i) {
  let e = '';
  if (At(i)) e = i;
  else if (Fe(i))
    for (let t = 0; t < i.length; t++) {
      const n = Go(i[t]);
      n && (e += n + ' ');
    }
  else if (rt(i)) for (const t in i) i[t] && (e += t + ' ');
  return e.trim();
}
const Cs = i =>
    At(i)
      ? i
      : i == null
      ? ''
      : Fe(i) || (rt(i) && (i.toString === ap || !Ue(i.toString)))
      ? JSON.stringify(i, rp, 2)
      : String(i),
  rp = (i, e) =>
    e && e.__v_isRef
      ? rp(i, e.value)
      : ys(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (t, [n, r]) => ((t[`${n} =>`] = r), t),
            {}
          ),
        }
      : sp(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : rt(e) && !Fe(e) && !lp(e)
      ? String(e)
      : e,
  tt = {},
  vs = [],
  Un = () => {},
  y_ = () => !1,
  M_ = /^on[^a-z]/,
  Ja = i => M_.test(i),
  du = i => i.startsWith('onUpdate:'),
  Gt = Object.assign,
  pu = (i, e) => {
    const t = i.indexOf(e);
    t > -1 && i.splice(t, 1);
  },
  b_ = Object.prototype.hasOwnProperty,
  Ge = (i, e) => b_.call(i, e),
  Fe = Array.isArray,
  ys = i => Qa(i) === '[object Map]',
  sp = i => Qa(i) === '[object Set]',
  Ue = i => typeof i == 'function',
  At = i => typeof i == 'string',
  mu = i => typeof i == 'symbol',
  rt = i => i !== null && typeof i == 'object',
  op = i => rt(i) && Ue(i.then) && Ue(i.catch),
  ap = Object.prototype.toString,
  Qa = i => ap.call(i),
  S_ = i => Qa(i).slice(8, -1),
  lp = i => Qa(i) === '[object Object]',
  gu = i => At(i) && i !== 'NaN' && i[0] !== '-' && '' + parseInt(i, 10) === i,
  wa = hu(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  el = i => {
    const e = Object.create(null);
    return t => e[t] || (e[t] = i(t));
  },
  w_ = /-(\w)/g,
  Ps = el(i => i.replace(w_, (e, t) => (t ? t.toUpperCase() : ''))),
  T_ = /\B([A-Z])/g,
  js = el(i => i.replace(T_, '-$1').toLowerCase()),
  cp = el(i => i.charAt(0).toUpperCase() + i.slice(1)),
  Ml = el(i => (i ? `on${cp(i)}` : '')),
  Ao = (i, e) => !Object.is(i, e),
  bl = (i, e) => {
    for (let t = 0; t < i.length; t++) i[t](e);
  },
  Oa = (i, e, t) => {
    Object.defineProperty(i, e, { configurable: !0, enumerable: !1, value: t });
  },
  E_ = i => {
    const e = parseFloat(i);
    return isNaN(e) ? i : e;
  };
let vf;
const A_ = () =>
  vf ||
  (vf =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let qn;
class up {
  constructor(e = !1) {
    (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = qn),
      !e && qn && (this.index = (qn.scopes || (qn.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const t = qn;
      try {
        return (qn = this), e();
      } finally {
        qn = t;
      }
    }
  }
  on() {
    qn = this;
  }
  off() {
    qn = this.parent;
  }
  stop(e) {
    if (this.active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function C_(i) {
  return new up(i);
}
function P_(i, e = qn) {
  e && e.active && e.effects.push(i);
}
const _u = i => {
    const e = new Set(i);
    return (e.w = 0), (e.n = 0), e;
  },
  fp = i => (i.w & ji) > 0,
  hp = i => (i.n & ji) > 0,
  R_ = ({ deps: i }) => {
    if (i.length) for (let e = 0; e < i.length; e++) i[e].w |= ji;
  },
  L_ = i => {
    const { deps: e } = i;
    if (e.length) {
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        fp(r) && !hp(r) ? r.delete(i) : (e[t++] = r),
          (r.w &= ~ji),
          (r.n &= ~ji);
      }
      e.length = t;
    }
  },
  Mc = new WeakMap();
let co = 0,
  ji = 1;
const bc = 30;
let In;
const Sr = Symbol(''),
  Sc = Symbol('');
class xu {
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      P_(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let e = In,
      t = ki;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = In),
        (In = this),
        (ki = !0),
        (ji = 1 << ++co),
        co <= bc ? R_(this) : yf(this),
        this.fn()
      );
    } finally {
      co <= bc && L_(this),
        (ji = 1 << --co),
        (In = this.parent),
        (ki = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    In === this
      ? (this.deferStop = !0)
      : this.active &&
        (yf(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function yf(i) {
  const { deps: e } = i;
  if (e.length) {
    for (let t = 0; t < e.length; t++) e[t].delete(i);
    e.length = 0;
  }
}
let ki = !0;
const dp = [];
function $s() {
  dp.push(ki), (ki = !1);
}
function Ys() {
  const i = dp.pop();
  ki = i === void 0 ? !0 : i;
}
function cn(i, e, t) {
  if (ki && In) {
    let n = Mc.get(i);
    n || Mc.set(i, (n = new Map()));
    let r = n.get(t);
    r || n.set(t, (r = _u())), pp(r);
  }
}
function pp(i, e) {
  let t = !1;
  co <= bc ? hp(i) || ((i.n |= ji), (t = !fp(i))) : (t = !i.has(In)),
    t && (i.add(In), In.deps.push(i));
}
function yi(i, e, t, n, r, s) {
  const o = Mc.get(i);
  if (!o) return;
  let a = [];
  if (e === 'clear') a = [...o.values()];
  else if (t === 'length' && Fe(i))
    o.forEach((l, c) => {
      (c === 'length' || c >= n) && a.push(l);
    });
  else
    switch ((t !== void 0 && a.push(o.get(t)), e)) {
      case 'add':
        Fe(i)
          ? gu(t) && a.push(o.get('length'))
          : (a.push(o.get(Sr)), ys(i) && a.push(o.get(Sc)));
        break;
      case 'delete':
        Fe(i) || (a.push(o.get(Sr)), ys(i) && a.push(o.get(Sc)));
        break;
      case 'set':
        ys(i) && a.push(o.get(Sr));
        break;
    }
  if (a.length === 1) a[0] && wc(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    wc(_u(l));
  }
}
function wc(i, e) {
  const t = Fe(i) ? i : [...i];
  for (const n of t) n.computed && Mf(n);
  for (const n of t) n.computed || Mf(n);
}
function Mf(i, e) {
  (i !== In || i.allowRecurse) && (i.scheduler ? i.scheduler() : i.run());
}
const D_ = hu('__proto__,__v_isRef,__isVue'),
  mp = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(i => i !== 'arguments' && i !== 'caller')
      .map(i => Symbol[i])
      .filter(mu)
  ),
  I_ = vu(),
  O_ = vu(!1, !0),
  F_ = vu(!0),
  bf = N_();
function N_() {
  const i = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(e => {
      i[e] = function (...t) {
        const n = Xe(this);
        for (let s = 0, o = this.length; s < o; s++) cn(n, 'get', s + '');
        const r = n[e](...t);
        return r === -1 || r === !1 ? n[e](...t.map(Xe)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(e => {
      i[e] = function (...t) {
        $s();
        const n = Xe(this)[e].apply(this, t);
        return Ys(), n;
      };
    }),
    i
  );
}
function vu(i = !1, e = !1) {
  return function (n, r, s) {
    if (r === '__v_isReactive') return !i;
    if (r === '__v_isReadonly') return i;
    if (r === '__v_isShallow') return e;
    if (r === '__v_raw' && s === (i ? (e ? J_ : yp) : e ? vp : xp).get(n))
      return n;
    const o = Fe(n);
    if (!i && o && Ge(bf, r)) return Reflect.get(bf, r, s);
    const a = Reflect.get(n, r, s);
    return (mu(r) ? mp.has(r) : D_(r)) || (i || cn(n, 'get', r), e)
      ? a
      : kt(a)
      ? o && gu(r)
        ? a
        : a.value
      : rt(a)
      ? i
        ? Mp(a)
        : Ur(a)
      : a;
  };
}
const z_ = gp(),
  U_ = gp(!0);
function gp(i = !1) {
  return function (t, n, r, s) {
    let o = t[n];
    if (Rs(o) && kt(o) && !kt(r)) return !1;
    if (
      !i &&
      (!Fa(r) && !Rs(r) && ((o = Xe(o)), (r = Xe(r))),
      !Fe(t) && kt(o) && !kt(r))
    )
      return (o.value = r), !0;
    const a = Fe(t) && gu(n) ? Number(n) < t.length : Ge(t, n),
      l = Reflect.set(t, n, r, s);
    return (
      t === Xe(s) && (a ? Ao(r, o) && yi(t, 'set', n, r) : yi(t, 'add', n, r)),
      l
    );
  };
}
function B_(i, e) {
  const t = Ge(i, e);
  i[e];
  const n = Reflect.deleteProperty(i, e);
  return n && t && yi(i, 'delete', e, void 0), n;
}
function k_(i, e) {
  const t = Reflect.has(i, e);
  return (!mu(e) || !mp.has(e)) && cn(i, 'has', e), t;
}
function V_(i) {
  return cn(i, 'iterate', Fe(i) ? 'length' : Sr), Reflect.ownKeys(i);
}
const _p = { get: I_, set: z_, deleteProperty: B_, has: k_, ownKeys: V_ },
  G_ = {
    get: F_,
    set(i, e) {
      return !0;
    },
    deleteProperty(i, e) {
      return !0;
    },
  },
  H_ = Gt({}, _p, { get: O_, set: U_ }),
  yu = i => i,
  tl = i => Reflect.getPrototypeOf(i);
function jo(i, e, t = !1, n = !1) {
  i = i.__v_raw;
  const r = Xe(i),
    s = Xe(e);
  t || (e !== s && cn(r, 'get', e), cn(r, 'get', s));
  const { has: o } = tl(r),
    a = n ? yu : t ? wu : Co;
  if (o.call(r, e)) return a(i.get(e));
  if (o.call(r, s)) return a(i.get(s));
  i !== r && i.get(e);
}
function $o(i, e = !1) {
  const t = this.__v_raw,
    n = Xe(t),
    r = Xe(i);
  return (
    e || (i !== r && cn(n, 'has', i), cn(n, 'has', r)),
    i === r ? t.has(i) : t.has(i) || t.has(r)
  );
}
function Yo(i, e = !1) {
  return (
    (i = i.__v_raw), !e && cn(Xe(i), 'iterate', Sr), Reflect.get(i, 'size', i)
  );
}
function Sf(i) {
  i = Xe(i);
  const e = Xe(this);
  return tl(e).has.call(e, i) || (e.add(i), yi(e, 'add', i, i)), this;
}
function wf(i, e) {
  e = Xe(e);
  const t = Xe(this),
    { has: n, get: r } = tl(t);
  let s = n.call(t, i);
  s || ((i = Xe(i)), (s = n.call(t, i)));
  const o = r.call(t, i);
  return (
    t.set(i, e), s ? Ao(e, o) && yi(t, 'set', i, e) : yi(t, 'add', i, e), this
  );
}
function Tf(i) {
  const e = Xe(this),
    { has: t, get: n } = tl(e);
  let r = t.call(e, i);
  r || ((i = Xe(i)), (r = t.call(e, i))), n && n.call(e, i);
  const s = e.delete(i);
  return r && yi(e, 'delete', i, void 0), s;
}
function Ef() {
  const i = Xe(this),
    e = i.size !== 0,
    t = i.clear();
  return e && yi(i, 'clear', void 0, void 0), t;
}
function Zo(i, e) {
  return function (n, r) {
    const s = this,
      o = s.__v_raw,
      a = Xe(o),
      l = e ? yu : i ? wu : Co;
    return (
      !i && cn(a, 'iterate', Sr), o.forEach((c, u) => n.call(r, l(c), l(u), s))
    );
  };
}
function Ko(i, e, t) {
  return function (...n) {
    const r = this.__v_raw,
      s = Xe(r),
      o = ys(s),
      a = i === 'entries' || (i === Symbol.iterator && o),
      l = i === 'keys' && o,
      c = r[i](...n),
      u = t ? yu : e ? wu : Co;
    return (
      !e && cn(s, 'iterate', l ? Sc : Sr),
      {
        next() {
          const { value: f, done: h } = c.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ti(i) {
  return function (...e) {
    return i === 'delete' ? !1 : this;
  };
}
function W_() {
  const i = {
      get(s) {
        return jo(this, s);
      },
      get size() {
        return Yo(this);
      },
      has: $o,
      add: Sf,
      set: wf,
      delete: Tf,
      clear: Ef,
      forEach: Zo(!1, !1),
    },
    e = {
      get(s) {
        return jo(this, s, !1, !0);
      },
      get size() {
        return Yo(this);
      },
      has: $o,
      add: Sf,
      set: wf,
      delete: Tf,
      clear: Ef,
      forEach: Zo(!1, !0),
    },
    t = {
      get(s) {
        return jo(this, s, !0);
      },
      get size() {
        return Yo(this, !0);
      },
      has(s) {
        return $o.call(this, s, !0);
      },
      add: Ti('add'),
      set: Ti('set'),
      delete: Ti('delete'),
      clear: Ti('clear'),
      forEach: Zo(!0, !1),
    },
    n = {
      get(s) {
        return jo(this, s, !0, !0);
      },
      get size() {
        return Yo(this, !0);
      },
      has(s) {
        return $o.call(this, s, !0);
      },
      add: Ti('add'),
      set: Ti('set'),
      delete: Ti('delete'),
      clear: Ti('clear'),
      forEach: Zo(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(s => {
      (i[s] = Ko(s, !1, !1)),
        (t[s] = Ko(s, !0, !1)),
        (e[s] = Ko(s, !1, !0)),
        (n[s] = Ko(s, !0, !0));
    }),
    [i, t, e, n]
  );
}
const [q_, X_, j_, $_] = W_();
function Mu(i, e) {
  const t = e ? (i ? $_ : j_) : i ? X_ : q_;
  return (n, r, s) =>
    r === '__v_isReactive'
      ? !i
      : r === '__v_isReadonly'
      ? i
      : r === '__v_raw'
      ? n
      : Reflect.get(Ge(t, r) && r in n ? t : n, r, s);
}
const Y_ = { get: Mu(!1, !1) },
  Z_ = { get: Mu(!1, !0) },
  K_ = { get: Mu(!0, !1) },
  xp = new WeakMap(),
  vp = new WeakMap(),
  yp = new WeakMap(),
  J_ = new WeakMap();
function Q_(i) {
  switch (i) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function e0(i) {
  return i.__v_skip || !Object.isExtensible(i) ? 0 : Q_(S_(i));
}
function Ur(i) {
  return Rs(i) ? i : bu(i, !1, _p, Y_, xp);
}
function t0(i) {
  return bu(i, !1, H_, Z_, vp);
}
function Mp(i) {
  return bu(i, !0, G_, K_, yp);
}
function bu(i, e, t, n, r) {
  if (!rt(i) || (i.__v_raw && !(e && i.__v_isReactive))) return i;
  const s = r.get(i);
  if (s) return s;
  const o = e0(i);
  if (o === 0) return i;
  const a = new Proxy(i, o === 2 ? n : t);
  return r.set(i, a), a;
}
function Ms(i) {
  return Rs(i) ? Ms(i.__v_raw) : !!(i && i.__v_isReactive);
}
function Rs(i) {
  return !!(i && i.__v_isReadonly);
}
function Fa(i) {
  return !!(i && i.__v_isShallow);
}
function bp(i) {
  return Ms(i) || Rs(i);
}
function Xe(i) {
  const e = i && i.__v_raw;
  return e ? Xe(e) : i;
}
function Su(i) {
  return Oa(i, '__v_skip', !0), i;
}
const Co = i => (rt(i) ? Ur(i) : i),
  wu = i => (rt(i) ? Mp(i) : i);
function Sp(i) {
  ki && In && ((i = Xe(i)), pp(i.dep || (i.dep = _u())));
}
function wp(i, e) {
  (i = Xe(i)), i.dep && wc(i.dep);
}
function kt(i) {
  return !!(i && i.__v_isRef === !0);
}
function xr(i) {
  return Tp(i, !1);
}
function n0(i) {
  return Tp(i, !0);
}
function Tp(i, e) {
  return kt(i) ? i : new i0(i, e);
}
class i0 {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : Xe(e)),
      (this._value = t ? e : Co(e));
  }
  get value() {
    return Sp(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Fa(e) || Rs(e);
    (e = t ? e : Xe(e)),
      Ao(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : Co(e)), wp(this));
  }
}
function yt(i) {
  return kt(i) ? i.value : i;
}
const r0 = {
  get: (i, e, t) => yt(Reflect.get(i, e, t)),
  set: (i, e, t, n) => {
    const r = i[e];
    return kt(r) && !kt(t) ? ((r.value = t), !0) : Reflect.set(i, e, t, n);
  },
};
function Ep(i) {
  return Ms(i) ? i : new Proxy(i, r0);
}
var Ap;
class s0 {
  constructor(e, t, n, r) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Ap] = !1),
      (this._dirty = !0),
      (this.effect = new xu(e, () => {
        this._dirty || ((this._dirty = !0), wp(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = Xe(this);
    return (
      Sp(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
Ap = '__v_isReadonly';
function o0(i, e, t = !1) {
  let n, r;
  const s = Ue(i);
  return (
    s ? ((n = i), (r = Un)) : ((n = i.get), (r = i.set)),
    new s0(n, r, s || !r, t)
  );
}
function Vi(i, e, t, n) {
  let r;
  try {
    r = n ? i(...n) : i();
  } catch (s) {
    nl(s, e, t);
  }
  return r;
}
function Tn(i, e, t, n) {
  if (Ue(i)) {
    const s = Vi(i, e, t, n);
    return (
      s &&
        op(s) &&
        s.catch(o => {
          nl(o, e, t);
        }),
      s
    );
  }
  const r = [];
  for (let s = 0; s < i.length; s++) r.push(Tn(i[s], e, t, n));
  return r;
}
function nl(i, e, t, n = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy,
      a = t;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](i, o, a) === !1) return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Vi(l, null, 10, [i, o, a]);
      return;
    }
  }
  a0(i, t, r, n);
}
function a0(i, e, t, n = !0) {
  console.error(i);
}
let Po = !1,
  Tc = !1;
const Ut = [];
let $n = 0;
const bs = [];
let ci = null,
  pr = 0;
const Cp = Promise.resolve();
let Tu = null;
function Pp(i) {
  const e = Tu || Cp;
  return i ? e.then(this ? i.bind(this) : i) : e;
}
function l0(i) {
  let e = $n + 1,
    t = Ut.length;
  for (; e < t; ) {
    const n = (e + t) >>> 1;
    Ro(Ut[n]) < i ? (e = n + 1) : (t = n);
  }
  return e;
}
function Eu(i) {
  (!Ut.length || !Ut.includes(i, Po && i.allowRecurse ? $n + 1 : $n)) &&
    (i.id == null ? Ut.push(i) : Ut.splice(l0(i.id), 0, i), Rp());
}
function Rp() {
  !Po && !Tc && ((Tc = !0), (Tu = Cp.then(Dp)));
}
function c0(i) {
  const e = Ut.indexOf(i);
  e > $n && Ut.splice(e, 1);
}
function u0(i) {
  Fe(i)
    ? bs.push(...i)
    : (!ci || !ci.includes(i, i.allowRecurse ? pr + 1 : pr)) && bs.push(i),
    Rp();
}
function Af(i, e = Po ? $n + 1 : 0) {
  for (; e < Ut.length; e++) {
    const t = Ut[e];
    t && t.pre && (Ut.splice(e, 1), e--, t());
  }
}
function Lp(i) {
  if (bs.length) {
    const e = [...new Set(bs)];
    if (((bs.length = 0), ci)) {
      ci.push(...e);
      return;
    }
    for (ci = e, ci.sort((t, n) => Ro(t) - Ro(n)), pr = 0; pr < ci.length; pr++)
      ci[pr]();
    (ci = null), (pr = 0);
  }
}
const Ro = i => (i.id == null ? 1 / 0 : i.id),
  f0 = (i, e) => {
    const t = Ro(i) - Ro(e);
    if (t === 0) {
      if (i.pre && !e.pre) return -1;
      if (e.pre && !i.pre) return 1;
    }
    return t;
  };
function Dp(i) {
  (Tc = !1), (Po = !0), Ut.sort(f0);
  const e = Un;
  try {
    for ($n = 0; $n < Ut.length; $n++) {
      const t = Ut[$n];
      t && t.active !== !1 && Vi(t, null, 14);
    }
  } finally {
    ($n = 0),
      (Ut.length = 0),
      Lp(),
      (Po = !1),
      (Tu = null),
      (Ut.length || bs.length) && Dp();
  }
}
function h0(i, e, ...t) {
  if (i.isUnmounted) return;
  const n = i.vnode.props || tt;
  let r = t;
  const s = e.startsWith('update:'),
    o = s && e.slice(7);
  if (o && o in n) {
    const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: f, trim: h } = n[u] || tt;
    h && (r = t.map(d => d.trim())), f && (r = t.map(E_));
  }
  let a,
    l = n[(a = Ml(e))] || n[(a = Ml(Ps(e)))];
  !l && s && (l = n[(a = Ml(js(e)))]), l && Tn(l, i, 6, r);
  const c = n[a + 'Once'];
  if (c) {
    if (!i.emitted) i.emitted = {};
    else if (i.emitted[a]) return;
    (i.emitted[a] = !0), Tn(c, i, 6, r);
  }
}
function Ip(i, e, t = !1) {
  const n = e.emitsCache,
    r = n.get(i);
  if (r !== void 0) return r;
  const s = i.emits;
  let o = {},
    a = !1;
  if (!Ue(i)) {
    const l = c => {
      const u = Ip(c, e, !0);
      u && ((a = !0), Gt(o, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l),
      i.extends && l(i.extends),
      i.mixins && i.mixins.forEach(l);
  }
  return !s && !a
    ? (rt(i) && n.set(i, null), null)
    : (Fe(s) ? s.forEach(l => (o[l] = null)) : Gt(o, s),
      rt(i) && n.set(i, o),
      o);
}
function il(i, e) {
  return !i || !Ja(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      Ge(i, e[0].toLowerCase() + e.slice(1)) || Ge(i, js(e)) || Ge(i, e));
}
let Kn = null,
  Op = null;
function Na(i) {
  const e = Kn;
  return (Kn = i), (Op = (i && i.type.__scopeId) || null), e;
}
function Fp(i, e = Kn, t) {
  if (!e || i._n) return i;
  const n = (...r) => {
    n._d && zf(-1);
    const s = Na(e);
    let o;
    try {
      o = i(...r);
    } finally {
      Na(s), n._d && zf(1);
    }
    return o;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function Sl(i) {
  const {
    type: e,
    vnode: t,
    proxy: n,
    withProxy: r,
    props: s,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: d,
    ctx: g,
    inheritAttrs: p,
  } = i;
  let m, _;
  const x = Na(i);
  try {
    if (t.shapeFlag & 4) {
      const y = r || n;
      (m = Xn(u.call(y, y, f, s, d, h, g))), (_ = l);
    } else {
      const y = e;
      (m = Xn(
        y.length > 1 ? y(s, { attrs: l, slots: a, emit: c }) : y(s, null)
      )),
        (_ = e.props ? l : d0(l));
    }
  } catch (y) {
    (mo.length = 0), nl(y, i, 1), (m = Et(gi));
  }
  let v = m;
  if (_ && p !== !1) {
    const y = Object.keys(_),
      { shapeFlag: b } = v;
    y.length && b & 7 && (o && y.some(du) && (_ = p0(_, o)), (v = $i(v, _)));
  }
  return (
    t.dirs && ((v = $i(v)), (v.dirs = v.dirs ? v.dirs.concat(t.dirs) : t.dirs)),
    t.transition && (v.transition = t.transition),
    (m = v),
    Na(x),
    m
  );
}
const d0 = i => {
    let e;
    for (const t in i)
      (t === 'class' || t === 'style' || Ja(t)) && ((e || (e = {}))[t] = i[t]);
    return e;
  },
  p0 = (i, e) => {
    const t = {};
    for (const n in i) (!du(n) || !(n.slice(9) in e)) && (t[n] = i[n]);
    return t;
  };
function m0(i, e, t) {
  const { props: n, children: r, component: s } = i,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (t && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return n ? Cf(n, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== n[h] && !il(c, h)) return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : n === o
      ? !1
      : n
      ? o
        ? Cf(n, o, c)
        : !0
      : !!o;
  return !1;
}
function Cf(i, e, t) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(i).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (e[s] !== i[s] && !il(t, s)) return !0;
  }
  return !1;
}
function g0({ vnode: i, parent: e }, t) {
  for (; e && e.subTree === i; ) ((i = e.vnode).el = t), (e = e.parent);
}
const _0 = i => i.__isSuspense;
function x0(i, e) {
  e && e.pendingBranch
    ? Fe(i)
      ? e.effects.push(...i)
      : e.effects.push(i)
    : u0(i);
}
function Ta(i, e) {
  if (Lt) {
    let t = Lt.provides;
    const n = Lt.parent && Lt.parent.provides;
    n === t && (t = Lt.provides = Object.create(n)), (t[i] = e);
  }
}
function Gi(i, e, t = !1) {
  const n = Lt || Kn;
  if (n) {
    const r =
      n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides;
    if (r && i in r) return r[i];
    if (arguments.length > 1) return t && Ue(e) ? e.call(n.proxy) : e;
  }
}
const Pf = {};
function Ea(i, e, t) {
  return Np(i, e, t);
}
function Np(
  i,
  e,
  { immediate: t, deep: n, flush: r, onTrack: s, onTrigger: o } = tt
) {
  const a = Lt;
  let l,
    c = !1,
    u = !1;
  if (
    (kt(i)
      ? ((l = () => i.value), (c = Fa(i)))
      : Ms(i)
      ? ((l = () => i), (n = !0))
      : Fe(i)
      ? ((u = !0),
        (c = i.some(_ => Ms(_) || Fa(_))),
        (l = () =>
          i.map(_ => {
            if (kt(_)) return _.value;
            if (Ms(_)) return ms(_);
            if (Ue(_)) return Vi(_, a, 2);
          })))
      : Ue(i)
      ? e
        ? (l = () => Vi(i, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), Tn(i, a, 3, [h]);
          })
      : (l = Un),
    e && n)
  ) {
    const _ = l;
    l = () => ms(_());
  }
  let f,
    h = _ => {
      f = m.onStop = () => {
        Vi(_, a, 4);
      };
    };
  if (Do)
    return (h = Un), e ? t && Tn(e, a, 3, [l(), u ? [] : void 0, h]) : l(), Un;
  let d = u ? [] : Pf;
  const g = () => {
    if (!!m.active)
      if (e) {
        const _ = m.run();
        (n || c || (u ? _.some((x, v) => Ao(x, d[v])) : Ao(_, d))) &&
          (f && f(), Tn(e, a, 3, [_, d === Pf ? void 0 : d, h]), (d = _));
      } else m.run();
  };
  g.allowRecurse = !!e;
  let p;
  r === 'sync'
    ? (p = g)
    : r === 'post'
    ? (p = () => $t(g, a && a.suspense))
    : ((g.pre = !0), a && (g.id = a.uid), (p = () => Eu(g)));
  const m = new xu(l, p);
  return (
    e
      ? t
        ? g()
        : (d = m.run())
      : r === 'post'
      ? $t(m.run.bind(m), a && a.suspense)
      : m.run(),
    () => {
      m.stop(), a && a.scope && pu(a.scope.effects, m);
    }
  );
}
function v0(i, e, t) {
  const n = this.proxy,
    r = At(i) ? (i.includes('.') ? zp(n, i) : () => n[i]) : i.bind(n, n);
  let s;
  Ue(e) ? (s = e) : ((s = e.handler), (t = e));
  const o = Lt;
  Ds(this);
  const a = Np(r, s.bind(n), t);
  return o ? Ds(o) : wr(), a;
}
function zp(i, e) {
  const t = e.split('.');
  return () => {
    let n = i;
    for (let r = 0; r < t.length && n; r++) n = n[t[r]];
    return n;
  };
}
function ms(i, e) {
  if (!rt(i) || i.__v_skip || ((e = e || new Set()), e.has(i))) return i;
  if ((e.add(i), kt(i))) ms(i.value, e);
  else if (Fe(i)) for (let t = 0; t < i.length; t++) ms(i[t], e);
  else if (sp(i) || ys(i))
    i.forEach(t => {
      ms(t, e);
    });
  else if (lp(i)) for (const t in i) ms(i[t], e);
  return i;
}
function y0() {
  const i = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Zs(() => {
      i.isMounted = !0;
    }),
    Vp(() => {
      i.isUnmounting = !0;
    }),
    i
  );
}
const mn = [Function, Array],
  M0 = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: mn,
      onEnter: mn,
      onAfterEnter: mn,
      onEnterCancelled: mn,
      onBeforeLeave: mn,
      onLeave: mn,
      onAfterLeave: mn,
      onLeaveCancelled: mn,
      onBeforeAppear: mn,
      onAppear: mn,
      onAfterAppear: mn,
      onAppearCancelled: mn,
    },
    setup(i, { slots: e }) {
      const t = sx(),
        n = y0();
      let r;
      return () => {
        const s = e.default && Bp(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const p of s)
            if (p.type !== gi) {
              o = p;
              break;
            }
        }
        const a = Xe(i),
          { mode: l } = a;
        if (n.isLeaving) return wl(o);
        const c = Rf(o);
        if (!c) return wl(o);
        const u = Ec(c, a, n, t);
        Ac(c, u);
        const f = t.subTree,
          h = f && Rf(f);
        let d = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const p = g();
          r === void 0 ? (r = p) : p !== r && ((r = p), (d = !0));
        }
        if (h && h.type !== gi && (!mr(c, h) || d)) {
          const p = Ec(h, a, n, t);
          if ((Ac(h, p), l === 'out-in'))
            return (
              (n.isLeaving = !0),
              (p.afterLeave = () => {
                (n.isLeaving = !1), t.update();
              }),
              wl(o)
            );
          l === 'in-out' &&
            c.type !== gi &&
            (p.delayLeave = (m, _, x) => {
              const v = Up(n, h);
              (v[String(h.key)] = h),
                (m._leaveCb = () => {
                  _(), (m._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = x);
            });
        }
        return o;
      };
    },
  },
  b0 = M0;
function Up(i, e) {
  const { leavingVNodes: t } = i;
  let n = t.get(e.type);
  return n || ((n = Object.create(null)), t.set(e.type, n)), n;
}
function Ec(i, e, t, n) {
  const {
      appear: r,
      mode: s,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: h,
      onAfterLeave: d,
      onLeaveCancelled: g,
      onBeforeAppear: p,
      onAppear: m,
      onAfterAppear: _,
      onAppearCancelled: x,
    } = e,
    v = String(i.key),
    y = Up(t, i),
    b = (M, w) => {
      M && Tn(M, n, 9, w);
    },
    T = (M, w) => {
      const D = w[1];
      b(M, w),
        Fe(M) ? M.every(q => q.length <= 1) && D() : M.length <= 1 && D();
    },
    R = {
      mode: s,
      persisted: o,
      beforeEnter(M) {
        let w = a;
        if (!t.isMounted)
          if (r) w = p || a;
          else return;
        M._leaveCb && M._leaveCb(!0);
        const D = y[v];
        D && mr(i, D) && D.el._leaveCb && D.el._leaveCb(), b(w, [M]);
      },
      enter(M) {
        let w = l,
          D = c,
          q = u;
        if (!t.isMounted)
          if (r) (w = m || l), (D = _ || c), (q = x || u);
          else return;
        let Q = !1;
        const k = (M._enterCb = I => {
          Q ||
            ((Q = !0),
            I ? b(q, [M]) : b(D, [M]),
            R.delayedLeave && R.delayedLeave(),
            (M._enterCb = void 0));
        });
        w ? T(w, [M, k]) : k();
      },
      leave(M, w) {
        const D = String(i.key);
        if ((M._enterCb && M._enterCb(!0), t.isUnmounting)) return w();
        b(f, [M]);
        let q = !1;
        const Q = (M._leaveCb = k => {
          q ||
            ((q = !0),
            w(),
            k ? b(g, [M]) : b(d, [M]),
            (M._leaveCb = void 0),
            y[D] === i && delete y[D]);
        });
        (y[D] = i), h ? T(h, [M, Q]) : Q();
      },
      clone(M) {
        return Ec(M, e, t, n);
      },
    };
  return R;
}
function wl(i) {
  if (rl(i)) return (i = $i(i)), (i.children = null), i;
}
function Rf(i) {
  return rl(i) ? (i.children ? i.children[0] : void 0) : i;
}
function Ac(i, e) {
  i.shapeFlag & 6 && i.component
    ? Ac(i.component.subTree, e)
    : i.shapeFlag & 128
    ? ((i.ssContent.transition = e.clone(i.ssContent)),
      (i.ssFallback.transition = e.clone(i.ssFallback)))
    : (i.transition = e);
}
function Bp(i, e = !1, t) {
  let n = [],
    r = 0;
  for (let s = 0; s < i.length; s++) {
    let o = i[s];
    const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : s);
    o.type === zt
      ? (o.patchFlag & 128 && r++, (n = n.concat(Bp(o.children, e, a))))
      : (e || o.type !== gi) && n.push(a != null ? $i(o, { key: a }) : o);
  }
  if (r > 1) for (let s = 0; s < n.length; s++) n[s].patchFlag = -2;
  return n;
}
function Vn(i) {
  return Ue(i) ? { setup: i, name: i.name } : i;
}
const Aa = i => !!i.type.__asyncLoader,
  rl = i => i.type.__isKeepAlive;
function S0(i, e) {
  kp(i, 'a', e);
}
function w0(i, e) {
  kp(i, 'da', e);
}
function kp(i, e, t = Lt) {
  const n =
    i.__wdc ||
    (i.__wdc = () => {
      let r = t;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return i();
    });
  if ((sl(e, n, t), t)) {
    let r = t.parent;
    for (; r && r.parent; )
      rl(r.parent.vnode) && T0(n, e, t, r), (r = r.parent);
  }
}
function T0(i, e, t, n) {
  const r = sl(e, i, n, !0);
  Gp(() => {
    pu(n[e], r);
  }, t);
}
function sl(i, e, t = Lt, n = !1) {
  if (t) {
    const r = t[i] || (t[i] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          if (t.isUnmounted) return;
          $s(), Ds(t);
          const a = Tn(e, t, i, o);
          return wr(), Ys(), a;
        });
    return n ? r.unshift(s) : r.push(s), s;
  }
}
const Si =
    i =>
    (e, t = Lt) =>
      (!Do || i === 'sp') && sl(i, (...n) => e(...n), t),
  E0 = Si('bm'),
  Zs = Si('m'),
  A0 = Si('bu'),
  C0 = Si('u'),
  Vp = Si('bum'),
  Gp = Si('um'),
  P0 = Si('sp'),
  R0 = Si('rtg'),
  L0 = Si('rtc');
function D0(i, e = Lt) {
  sl('ec', i, e);
}
function ir(i, e, t, n) {
  const r = i.dirs,
    s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[n];
    l && ($s(), Tn(l, t, 8, [i.el, a, i, e]), Ys());
  }
}
const I0 = Symbol();
function Ls(i, e, t, n) {
  let r;
  const s = t && t[n];
  if (Fe(i) || At(i)) {
    r = new Array(i.length);
    for (let o = 0, a = i.length; o < a; o++)
      r[o] = e(i[o], o, void 0, s && s[o]);
  } else if (typeof i == 'number') {
    r = new Array(i);
    for (let o = 0; o < i; o++) r[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (rt(i))
    if (i[Symbol.iterator])
      r = Array.from(i, (o, a) => e(o, a, void 0, s && s[a]));
    else {
      const o = Object.keys(i);
      r = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        r[a] = e(i[c], c, a, s && s[a]);
      }
    }
  else r = [];
  return t && (t[n] = r), r;
}
const Cc = i => (i ? (em(i) ? Lu(i) || i.proxy : Cc(i.parent)) : null),
  za = Gt(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => i.props,
    $attrs: i => i.attrs,
    $slots: i => i.slots,
    $refs: i => i.refs,
    $parent: i => Cc(i.parent),
    $root: i => Cc(i.root),
    $emit: i => i.emit,
    $options: i => Au(i),
    $forceUpdate: i => i.f || (i.f = () => Eu(i.update)),
    $nextTick: i => i.n || (i.n = Pp.bind(i.proxy)),
    $watch: i => v0.bind(i),
  }),
  O0 = {
    get({ _: i }, e) {
      const {
        ctx: t,
        setupState: n,
        data: r,
        props: s,
        accessCache: o,
        type: a,
        appContext: l,
      } = i;
      let c;
      if (e[0] !== '$') {
        const d = o[e];
        if (d !== void 0)
          switch (d) {
            case 1:
              return n[e];
            case 2:
              return r[e];
            case 4:
              return t[e];
            case 3:
              return s[e];
          }
        else {
          if (n !== tt && Ge(n, e)) return (o[e] = 1), n[e];
          if (r !== tt && Ge(r, e)) return (o[e] = 2), r[e];
          if ((c = i.propsOptions[0]) && Ge(c, e)) return (o[e] = 3), s[e];
          if (t !== tt && Ge(t, e)) return (o[e] = 4), t[e];
          Pc && (o[e] = 0);
        }
      }
      const u = za[e];
      let f, h;
      if (u) return e === '$attrs' && cn(i, 'get', e), u(i);
      if ((f = a.__cssModules) && (f = f[e])) return f;
      if (t !== tt && Ge(t, e)) return (o[e] = 4), t[e];
      if (((h = l.config.globalProperties), Ge(h, e))) return h[e];
    },
    set({ _: i }, e, t) {
      const { data: n, setupState: r, ctx: s } = i;
      return r !== tt && Ge(r, e)
        ? ((r[e] = t), !0)
        : n !== tt && Ge(n, e)
        ? ((n[e] = t), !0)
        : Ge(i.props, e) || (e[0] === '$' && e.slice(1) in i)
        ? !1
        : ((s[e] = t), !0);
    },
    has(
      {
        _: {
          data: i,
          setupState: e,
          accessCache: t,
          ctx: n,
          appContext: r,
          propsOptions: s,
        },
      },
      o
    ) {
      let a;
      return (
        !!t[o] ||
        (i !== tt && Ge(i, o)) ||
        (e !== tt && Ge(e, o)) ||
        ((a = s[0]) && Ge(a, o)) ||
        Ge(n, o) ||
        Ge(za, o) ||
        Ge(r.config.globalProperties, o)
      );
    },
    defineProperty(i, e, t) {
      return (
        t.get != null
          ? (i._.accessCache[e] = 0)
          : Ge(t, 'value') && this.set(i, e, t.value, null),
        Reflect.defineProperty(i, e, t)
      );
    },
  };
let Pc = !0;
function F0(i) {
  const e = Au(i),
    t = i.proxy,
    n = i.ctx;
  (Pc = !1), e.beforeCreate && Lf(e.beforeCreate, i, 'bc');
  const {
    data: r,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: g,
    activated: p,
    deactivated: m,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: v,
    unmounted: y,
    render: b,
    renderTracked: T,
    renderTriggered: R,
    errorCaptured: M,
    serverPrefetch: w,
    expose: D,
    inheritAttrs: q,
    components: Q,
    directives: k,
    filters: I,
  } = e;
  if ((c && N0(c, n, null, i.appContext.config.unwrapInjectedRef), o))
    for (const Y in o) {
      const V = o[Y];
      Ue(V) && (n[Y] = V.bind(t));
    }
  if (r) {
    const Y = r.call(t, t);
    rt(Y) && (i.data = Ur(Y));
  }
  if (((Pc = !0), s))
    for (const Y in s) {
      const V = s[Y],
        z = Ue(V) ? V.bind(t, t) : Ue(V.get) ? V.get.bind(t, t) : Un,
        H = !Ue(V) && Ue(V.set) ? V.set.bind(t) : Un,
        ue = Tt({ get: z, set: H });
      Object.defineProperty(n, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: te => (ue.value = te),
      });
    }
  if (a) for (const Y in a) Hp(a[Y], n, t, Y);
  if (l) {
    const Y = Ue(l) ? l.call(t) : l;
    Reflect.ownKeys(Y).forEach(V => {
      Ta(V, Y[V]);
    });
  }
  u && Lf(u, i, 'c');
  function Z(Y, V) {
    Fe(V) ? V.forEach(z => Y(z.bind(t))) : V && Y(V.bind(t));
  }
  if (
    (Z(E0, f),
    Z(Zs, h),
    Z(A0, d),
    Z(C0, g),
    Z(S0, p),
    Z(w0, m),
    Z(D0, M),
    Z(L0, T),
    Z(R0, R),
    Z(Vp, x),
    Z(Gp, y),
    Z(P0, w),
    Fe(D))
  )
    if (D.length) {
      const Y = i.exposed || (i.exposed = {});
      D.forEach(V => {
        Object.defineProperty(Y, V, { get: () => t[V], set: z => (t[V] = z) });
      });
    } else i.exposed || (i.exposed = {});
  b && i.render === Un && (i.render = b),
    q != null && (i.inheritAttrs = q),
    Q && (i.components = Q),
    k && (i.directives = k);
}
function N0(i, e, t = Un, n = !1) {
  Fe(i) && (i = Rc(i));
  for (const r in i) {
    const s = i[r];
    let o;
    rt(s)
      ? 'default' in s
        ? (o = Gi(s.from || r, s.default, !0))
        : (o = Gi(s.from || r))
      : (o = Gi(s)),
      kt(o) && n
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => (o.value = a),
          })
        : (e[r] = o);
  }
}
function Lf(i, e, t) {
  Tn(Fe(i) ? i.map(n => n.bind(e.proxy)) : i.bind(e.proxy), e, t);
}
function Hp(i, e, t, n) {
  const r = n.includes('.') ? zp(t, n) : () => t[n];
  if (At(i)) {
    const s = e[i];
    Ue(s) && Ea(r, s);
  } else if (Ue(i)) Ea(r, i.bind(t));
  else if (rt(i))
    if (Fe(i)) i.forEach(s => Hp(s, e, t, n));
    else {
      const s = Ue(i.handler) ? i.handler.bind(t) : e[i.handler];
      Ue(s) && Ea(r, s, i);
    }
}
function Au(i) {
  const e = i.type,
    { mixins: t, extends: n } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: o },
    } = i.appContext,
    a = s.get(e);
  let l;
  return (
    a
      ? (l = a)
      : !r.length && !t && !n
      ? (l = e)
      : ((l = {}), r.length && r.forEach(c => Ua(l, c, o, !0)), Ua(l, e, o)),
    rt(e) && s.set(e, l),
    l
  );
}
function Ua(i, e, t, n = !1) {
  const { mixins: r, extends: s } = e;
  s && Ua(i, s, t, !0), r && r.forEach(o => Ua(i, o, t, !0));
  for (const o in e)
    if (!(n && o === 'expose')) {
      const a = z0[o] || (t && t[o]);
      i[o] = a ? a(i[o], e[o]) : e[o];
    }
  return i;
}
const z0 = {
  data: Df,
  props: ur,
  emits: ur,
  methods: ur,
  computed: ur,
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  components: ur,
  directives: ur,
  watch: B0,
  provide: Df,
  inject: U0,
};
function Df(i, e) {
  return e
    ? i
      ? function () {
          return Gt(
            Ue(i) ? i.call(this, this) : i,
            Ue(e) ? e.call(this, this) : e
          );
        }
      : e
    : i;
}
function U0(i, e) {
  return ur(Rc(i), Rc(e));
}
function Rc(i) {
  if (Fe(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) e[i[t]] = i[t];
    return e;
  }
  return i;
}
function qt(i, e) {
  return i ? [...new Set([].concat(i, e))] : e;
}
function ur(i, e) {
  return i ? Gt(Gt(Object.create(null), i), e) : e;
}
function B0(i, e) {
  if (!i) return e;
  if (!e) return i;
  const t = Gt(Object.create(null), i);
  for (const n in e) t[n] = qt(i[n], e[n]);
  return t;
}
function k0(i, e, t, n = !1) {
  const r = {},
    s = {};
  Oa(s, ol, 1), (i.propsDefaults = Object.create(null)), Wp(i, e, r, s);
  for (const o in i.propsOptions[0]) o in r || (r[o] = void 0);
  t ? (i.props = n ? r : t0(r)) : i.type.props ? (i.props = r) : (i.props = s),
    (i.attrs = s);
}
function V0(i, e, t, n) {
  const {
      props: r,
      attrs: s,
      vnode: { patchFlag: o },
    } = i,
    a = Xe(r),
    [l] = i.propsOptions;
  let c = !1;
  if ((n || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = i.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (il(i.emitsOptions, h)) continue;
        const d = e[h];
        if (l)
          if (Ge(s, h)) d !== s[h] && ((s[h] = d), (c = !0));
          else {
            const g = Ps(h);
            r[g] = Lc(l, a, g, d, i, !1);
          }
        else d !== s[h] && ((s[h] = d), (c = !0));
      }
    }
  } else {
    Wp(i, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || (!Ge(e, f) && ((u = js(f)) === f || !Ge(e, u)))) &&
        (l
          ? t &&
            (t[f] !== void 0 || t[u] !== void 0) &&
            (r[f] = Lc(l, a, f, void 0, i, !0))
          : delete r[f]);
    if (s !== a)
      for (const f in s) (!e || (!Ge(e, f) && !0)) && (delete s[f], (c = !0));
  }
  c && yi(i, 'set', '$attrs');
}
function Wp(i, e, t, n) {
  const [r, s] = i.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (wa(l)) continue;
      const c = e[l];
      let u;
      r && Ge(r, (u = Ps(l)))
        ? !s || !s.includes(u)
          ? (t[u] = c)
          : ((a || (a = {}))[u] = c)
        : il(i.emitsOptions, l) ||
          ((!(l in n) || c !== n[l]) && ((n[l] = c), (o = !0)));
    }
  if (s) {
    const l = Xe(t),
      c = a || tt;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      t[f] = Lc(r, l, f, c[f], i, !Ge(c, f));
    }
  }
  return o;
}
function Lc(i, e, t, n, r, s) {
  const o = i[t];
  if (o != null) {
    const a = Ge(o, 'default');
    if (a && n === void 0) {
      const l = o.default;
      if (o.type !== Function && Ue(l)) {
        const { propsDefaults: c } = r;
        t in c ? (n = c[t]) : (Ds(r), (n = c[t] = l.call(null, e)), wr());
      } else n = l;
    }
    o[0] &&
      (s && !a ? (n = !1) : o[1] && (n === '' || n === js(t)) && (n = !0));
  }
  return n;
}
function qp(i, e, t = !1) {
  const n = e.propsCache,
    r = n.get(i);
  if (r) return r;
  const s = i.props,
    o = {},
    a = [];
  let l = !1;
  if (!Ue(i)) {
    const u = f => {
      l = !0;
      const [h, d] = qp(f, e, !0);
      Gt(o, h), d && a.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(u),
      i.extends && u(i.extends),
      i.mixins && i.mixins.forEach(u);
  }
  if (!s && !l) return rt(i) && n.set(i, vs), vs;
  if (Fe(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ps(s[u]);
      If(f) && (o[f] = tt);
    }
  else if (s)
    for (const u in s) {
      const f = Ps(u);
      if (If(f)) {
        const h = s[u],
          d = (o[f] = Fe(h) || Ue(h) ? { type: h } : h);
        if (d) {
          const g = Nf(Boolean, d.type),
            p = Nf(String, d.type);
          (d[0] = g > -1),
            (d[1] = p < 0 || g < p),
            (g > -1 || Ge(d, 'default')) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return rt(i) && n.set(i, c), c;
}
function If(i) {
  return i[0] !== '$';
}
function Of(i) {
  const e = i && i.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : i === null ? 'null' : '';
}
function Ff(i, e) {
  return Of(i) === Of(e);
}
function Nf(i, e) {
  return Fe(e) ? e.findIndex(t => Ff(t, i)) : Ue(e) && Ff(e, i) ? 0 : -1;
}
const Xp = i => i[0] === '_' || i === '$stable',
  Cu = i => (Fe(i) ? i.map(Xn) : [Xn(i)]),
  G0 = (i, e, t) => {
    if (e._n) return e;
    const n = Fp((...r) => Cu(e(...r)), t);
    return (n._c = !1), n;
  },
  jp = (i, e, t) => {
    const n = i._ctx;
    for (const r in i) {
      if (Xp(r)) continue;
      const s = i[r];
      if (Ue(s)) e[r] = G0(r, s, n);
      else if (s != null) {
        const o = Cu(s);
        e[r] = () => o;
      }
    }
  },
  $p = (i, e) => {
    const t = Cu(e);
    i.slots.default = () => t;
  },
  H0 = (i, e) => {
    if (i.vnode.shapeFlag & 32) {
      const t = e._;
      t ? ((i.slots = Xe(e)), Oa(e, '_', t)) : jp(e, (i.slots = {}));
    } else (i.slots = {}), e && $p(i, e);
    Oa(i.slots, ol, 1);
  },
  W0 = (i, e, t) => {
    const { vnode: n, slots: r } = i;
    let s = !0,
      o = tt;
    if (n.shapeFlag & 32) {
      const a = e._;
      a
        ? t && a === 1
          ? (s = !1)
          : (Gt(r, e), !t && a === 1 && delete r._)
        : ((s = !e.$stable), jp(e, r)),
        (o = e);
    } else e && ($p(i, e), (o = { default: 1 }));
    if (s) for (const a in r) !Xp(a) && !(a in o) && delete r[a];
  };
function Yp() {
  return {
    app: null,
    config: {
      isNativeTag: y_,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let q0 = 0;
function X0(i, e) {
  return function (n, r = null) {
    Ue(n) || (n = Object.assign({}, n)), r != null && !rt(r) && (r = null);
    const s = Yp(),
      o = new Set();
    let a = !1;
    const l = (s.app = {
      _uid: q0++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: fx,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && Ue(c.install)
              ? (o.add(c), c.install(l, ...u))
              : Ue(c) && (o.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((s.components[c] = u), l) : s.components[c];
      },
      directive(c, u) {
        return u ? ((s.directives[c] = u), l) : s.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const h = Et(n, r);
          return (
            (h.appContext = s),
            u && e ? e(h, c) : i(h, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            Lu(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        a && (i(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (s.provides[c] = u), l;
      },
    });
    return l;
  };
}
function Dc(i, e, t, n, r = !1) {
  if (Fe(i)) {
    i.forEach((h, d) => Dc(h, e && (Fe(e) ? e[d] : e), t, n, r));
    return;
  }
  if (Aa(n) && !r) return;
  const s = n.shapeFlag & 4 ? Lu(n.component) || n.component.proxy : n.el,
    o = r ? null : s,
    { i: a, r: l } = i,
    c = e && e.r,
    u = a.refs === tt ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (At(c)
        ? ((u[c] = null), Ge(f, c) && (f[c] = null))
        : kt(c) && (c.value = null)),
    Ue(l))
  )
    Vi(l, a, 12, [o, u]);
  else {
    const h = At(l),
      d = kt(l);
    if (h || d) {
      const g = () => {
        if (i.f) {
          const p = h ? (Ge(f, l) ? f[l] : u[l]) : l.value;
          r
            ? Fe(p) && pu(p, s)
            : Fe(p)
            ? p.includes(s) || p.push(s)
            : h
            ? ((u[l] = [s]), Ge(f, l) && (f[l] = u[l]))
            : ((l.value = [s]), i.k && (u[i.k] = l.value));
        } else
          h
            ? ((u[l] = o), Ge(f, l) && (f[l] = o))
            : d && ((l.value = o), i.k && (u[i.k] = o));
      };
      o ? ((g.id = -1), $t(g, t)) : g();
    }
  }
}
const $t = x0;
function j0(i) {
  return $0(i);
}
function $0(i, e) {
  const t = A_();
  t.__VUE__ = !0;
  const {
      insert: n,
      remove: r,
      patchProp: s,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: d = Un,
      insertStaticContent: g,
    } = i,
    p = (
      A,
      P,
      X,
      K = null,
      ee = null,
      he = null,
      pe = !1,
      oe = null,
      me = !!P.dynamicChildren
    ) => {
      if (A === P) return;
      A && !mr(A, P) && ((K = le(A)), te(A, ee, he, !0), (A = null)),
        P.patchFlag === -2 && ((me = !1), (P.dynamicChildren = null));
      const { type: ae, ref: E, shapeFlag: S } = P;
      switch (ae) {
        case Pu:
          m(A, P, X, K);
          break;
        case gi:
          _(A, P, X, K);
          break;
        case Tl:
          A == null && x(P, X, K, pe);
          break;
        case zt:
          Q(A, P, X, K, ee, he, pe, oe, me);
          break;
        default:
          S & 1
            ? b(A, P, X, K, ee, he, pe, oe, me)
            : S & 6
            ? k(A, P, X, K, ee, he, pe, oe, me)
            : (S & 64 || S & 128) &&
              ae.process(A, P, X, K, ee, he, pe, oe, me, ve);
      }
      E != null && ee && Dc(E, A && A.ref, he, P || A, !P);
    },
    m = (A, P, X, K) => {
      if (A == null) n((P.el = a(P.children)), X, K);
      else {
        const ee = (P.el = A.el);
        P.children !== A.children && c(ee, P.children);
      }
    },
    _ = (A, P, X, K) => {
      A == null ? n((P.el = l(P.children || '')), X, K) : (P.el = A.el);
    },
    x = (A, P, X, K) => {
      [A.el, A.anchor] = g(A.children, P, X, K, A.el, A.anchor);
    },
    v = ({ el: A, anchor: P }, X, K) => {
      let ee;
      for (; A && A !== P; ) (ee = h(A)), n(A, X, K), (A = ee);
      n(P, X, K);
    },
    y = ({ el: A, anchor: P }) => {
      let X;
      for (; A && A !== P; ) (X = h(A)), r(A), (A = X);
      r(P);
    },
    b = (A, P, X, K, ee, he, pe, oe, me) => {
      (pe = pe || P.type === 'svg'),
        A == null
          ? T(P, X, K, ee, he, pe, oe, me)
          : w(A, P, ee, he, pe, oe, me);
    },
    T = (A, P, X, K, ee, he, pe, oe) => {
      let me, ae;
      const { type: E, props: S, shapeFlag: U, transition: J, dirs: ie } = A;
      if (
        ((me = A.el = o(A.type, he, S && S.is, S)),
        U & 8
          ? u(me, A.children)
          : U & 16 &&
            M(A.children, me, null, K, ee, he && E !== 'foreignObject', pe, oe),
        ie && ir(A, null, K, 'created'),
        S)
      ) {
        for (const Me in S)
          Me !== 'value' &&
            !wa(Me) &&
            s(me, Me, null, S[Me], he, A.children, K, ee, F);
        'value' in S && s(me, 'value', null, S.value),
          (ae = S.onVnodeBeforeMount) && Wn(ae, K, A);
      }
      R(me, A, A.scopeId, pe, K), ie && ir(A, null, K, 'beforeMount');
      const fe = (!ee || (ee && !ee.pendingBranch)) && J && !J.persisted;
      fe && J.beforeEnter(me),
        n(me, P, X),
        ((ae = S && S.onVnodeMounted) || fe || ie) &&
          $t(() => {
            ae && Wn(ae, K, A),
              fe && J.enter(me),
              ie && ir(A, null, K, 'mounted');
          }, ee);
    },
    R = (A, P, X, K, ee) => {
      if ((X && d(A, X), K)) for (let he = 0; he < K.length; he++) d(A, K[he]);
      if (ee) {
        let he = ee.subTree;
        if (P === he) {
          const pe = ee.vnode;
          R(A, pe, pe.scopeId, pe.slotScopeIds, ee.parent);
        }
      }
    },
    M = (A, P, X, K, ee, he, pe, oe, me = 0) => {
      for (let ae = me; ae < A.length; ae++) {
        const E = (A[ae] = oe ? Oi(A[ae]) : Xn(A[ae]));
        p(null, E, P, X, K, ee, he, pe, oe);
      }
    },
    w = (A, P, X, K, ee, he, pe) => {
      const oe = (P.el = A.el);
      let { patchFlag: me, dynamicChildren: ae, dirs: E } = P;
      me |= A.patchFlag & 16;
      const S = A.props || tt,
        U = P.props || tt;
      let J;
      X && rr(X, !1),
        (J = U.onVnodeBeforeUpdate) && Wn(J, X, P, A),
        E && ir(P, A, X, 'beforeUpdate'),
        X && rr(X, !0);
      const ie = ee && P.type !== 'foreignObject';
      if (
        (ae
          ? D(A.dynamicChildren, ae, oe, X, K, ie, he)
          : pe || V(A, P, oe, null, X, K, ie, he, !1),
        me > 0)
      ) {
        if (me & 16) q(oe, P, S, U, X, K, ee);
        else if (
          (me & 2 && S.class !== U.class && s(oe, 'class', null, U.class, ee),
          me & 4 && s(oe, 'style', S.style, U.style, ee),
          me & 8)
        ) {
          const fe = P.dynamicProps;
          for (let Me = 0; Me < fe.length; Me++) {
            const L = fe[Me],
              B = S[L],
              be = U[L];
            (be !== B || L === 'value') &&
              s(oe, L, B, be, ee, A.children, X, K, F);
          }
        }
        me & 1 && A.children !== P.children && u(oe, P.children);
      } else !pe && ae == null && q(oe, P, S, U, X, K, ee);
      ((J = U.onVnodeUpdated) || E) &&
        $t(() => {
          J && Wn(J, X, P, A), E && ir(P, A, X, 'updated');
        }, K);
    },
    D = (A, P, X, K, ee, he, pe) => {
      for (let oe = 0; oe < P.length; oe++) {
        const me = A[oe],
          ae = P[oe],
          E =
            me.el && (me.type === zt || !mr(me, ae) || me.shapeFlag & 70)
              ? f(me.el)
              : X;
        p(me, ae, E, null, K, ee, he, pe, !0);
      }
    },
    q = (A, P, X, K, ee, he, pe) => {
      if (X !== K) {
        if (X !== tt)
          for (const oe in X)
            !wa(oe) &&
              !(oe in K) &&
              s(A, oe, X[oe], null, pe, P.children, ee, he, F);
        for (const oe in K) {
          if (wa(oe)) continue;
          const me = K[oe],
            ae = X[oe];
          me !== ae &&
            oe !== 'value' &&
            s(A, oe, ae, me, pe, P.children, ee, he, F);
        }
        'value' in K && s(A, 'value', X.value, K.value);
      }
    },
    Q = (A, P, X, K, ee, he, pe, oe, me) => {
      const ae = (P.el = A ? A.el : a('')),
        E = (P.anchor = A ? A.anchor : a(''));
      let { patchFlag: S, dynamicChildren: U, slotScopeIds: J } = P;
      J && (oe = oe ? oe.concat(J) : J),
        A == null
          ? (n(ae, X, K), n(E, X, K), M(P.children, X, E, ee, he, pe, oe, me))
          : S > 0 && S & 64 && U && A.dynamicChildren
          ? (D(A.dynamicChildren, U, X, ee, he, pe, oe),
            (P.key != null || (ee && P === ee.subTree)) && Zp(A, P, !0))
          : V(A, P, X, E, ee, he, pe, oe, me);
    },
    k = (A, P, X, K, ee, he, pe, oe, me) => {
      (P.slotScopeIds = oe),
        A == null
          ? P.shapeFlag & 512
            ? ee.ctx.activate(P, X, K, pe, me)
            : I(P, X, K, ee, he, pe, me)
          : $(A, P, me);
    },
    I = (A, P, X, K, ee, he, pe) => {
      const oe = (A.component = rx(A, K, ee));
      if ((rl(A) && (oe.ctx.renderer = ve), ox(oe), oe.asyncDep)) {
        if ((ee && ee.registerDep(oe, Z), !A.el)) {
          const me = (oe.subTree = Et(gi));
          _(null, me, P, X);
        }
        return;
      }
      Z(oe, A, P, X, ee, he, pe);
    },
    $ = (A, P, X) => {
      const K = (P.component = A.component);
      if (m0(A, P, X))
        if (K.asyncDep && !K.asyncResolved) {
          Y(K, P, X);
          return;
        } else (K.next = P), c0(K.update), K.update();
      else (P.el = A.el), (K.vnode = P);
    },
    Z = (A, P, X, K, ee, he, pe) => {
      const oe = () => {
          if (A.isMounted) {
            let { next: E, bu: S, u: U, parent: J, vnode: ie } = A,
              fe = E,
              Me;
            rr(A, !1),
              E ? ((E.el = ie.el), Y(A, E, pe)) : (E = ie),
              S && bl(S),
              (Me = E.props && E.props.onVnodeBeforeUpdate) && Wn(Me, J, E, ie),
              rr(A, !0);
            const L = Sl(A),
              B = A.subTree;
            (A.subTree = L),
              p(B, L, f(B.el), le(B), A, ee, he),
              (E.el = L.el),
              fe === null && g0(A, L.el),
              U && $t(U, ee),
              (Me = E.props && E.props.onVnodeUpdated) &&
                $t(() => Wn(Me, J, E, ie), ee);
          } else {
            let E;
            const { el: S, props: U } = P,
              { bm: J, m: ie, parent: fe } = A,
              Me = Aa(P);
            if (
              (rr(A, !1),
              J && bl(J),
              !Me && (E = U && U.onVnodeBeforeMount) && Wn(E, fe, P),
              rr(A, !0),
              S && Te)
            ) {
              const L = () => {
                (A.subTree = Sl(A)), Te(S, A.subTree, A, ee, null);
              };
              Me
                ? P.type.__asyncLoader().then(() => !A.isUnmounted && L())
                : L();
            } else {
              const L = (A.subTree = Sl(A));
              p(null, L, X, K, A, ee, he), (P.el = L.el);
            }
            if ((ie && $t(ie, ee), !Me && (E = U && U.onVnodeMounted))) {
              const L = P;
              $t(() => Wn(E, fe, L), ee);
            }
            (P.shapeFlag & 256 ||
              (fe && Aa(fe.vnode) && fe.vnode.shapeFlag & 256)) &&
              A.a &&
              $t(A.a, ee),
              (A.isMounted = !0),
              (P = X = K = null);
          }
        },
        me = (A.effect = new xu(oe, () => Eu(ae), A.scope)),
        ae = (A.update = () => me.run());
      (ae.id = A.uid), rr(A, !0), ae();
    },
    Y = (A, P, X) => {
      P.component = A;
      const K = A.vnode.props;
      (A.vnode = P),
        (A.next = null),
        V0(A, P.props, K, X),
        W0(A, P.children, X),
        $s(),
        Af(),
        Ys();
    },
    V = (A, P, X, K, ee, he, pe, oe, me = !1) => {
      const ae = A && A.children,
        E = A ? A.shapeFlag : 0,
        S = P.children,
        { patchFlag: U, shapeFlag: J } = P;
      if (U > 0) {
        if (U & 128) {
          H(ae, S, X, K, ee, he, pe, oe, me);
          return;
        } else if (U & 256) {
          z(ae, S, X, K, ee, he, pe, oe, me);
          return;
        }
      }
      J & 8
        ? (E & 16 && F(ae, ee, he), S !== ae && u(X, S))
        : E & 16
        ? J & 16
          ? H(ae, S, X, K, ee, he, pe, oe, me)
          : F(ae, ee, he, !0)
        : (E & 8 && u(X, ''), J & 16 && M(S, X, K, ee, he, pe, oe, me));
    },
    z = (A, P, X, K, ee, he, pe, oe, me) => {
      (A = A || vs), (P = P || vs);
      const ae = A.length,
        E = P.length,
        S = Math.min(ae, E);
      let U;
      for (U = 0; U < S; U++) {
        const J = (P[U] = me ? Oi(P[U]) : Xn(P[U]));
        p(A[U], J, X, null, ee, he, pe, oe, me);
      }
      ae > E ? F(A, ee, he, !0, !1, S) : M(P, X, K, ee, he, pe, oe, me, S);
    },
    H = (A, P, X, K, ee, he, pe, oe, me) => {
      let ae = 0;
      const E = P.length;
      let S = A.length - 1,
        U = E - 1;
      for (; ae <= S && ae <= U; ) {
        const J = A[ae],
          ie = (P[ae] = me ? Oi(P[ae]) : Xn(P[ae]));
        if (mr(J, ie)) p(J, ie, X, null, ee, he, pe, oe, me);
        else break;
        ae++;
      }
      for (; ae <= S && ae <= U; ) {
        const J = A[S],
          ie = (P[U] = me ? Oi(P[U]) : Xn(P[U]));
        if (mr(J, ie)) p(J, ie, X, null, ee, he, pe, oe, me);
        else break;
        S--, U--;
      }
      if (ae > S) {
        if (ae <= U) {
          const J = U + 1,
            ie = J < E ? P[J].el : K;
          for (; ae <= U; )
            p(
              null,
              (P[ae] = me ? Oi(P[ae]) : Xn(P[ae])),
              X,
              ie,
              ee,
              he,
              pe,
              oe,
              me
            ),
              ae++;
        }
      } else if (ae > U) for (; ae <= S; ) te(A[ae], ee, he, !0), ae++;
      else {
        const J = ae,
          ie = ae,
          fe = new Map();
        for (ae = ie; ae <= U; ae++) {
          const we = (P[ae] = me ? Oi(P[ae]) : Xn(P[ae]));
          we.key != null && fe.set(we.key, ae);
        }
        let Me,
          L = 0;
        const B = U - ie + 1;
        let be = !1,
          Ee = 0;
        const Se = new Array(B);
        for (ae = 0; ae < B; ae++) Se[ae] = 0;
        for (ae = J; ae <= S; ae++) {
          const we = A[ae];
          if (L >= B) {
            te(we, ee, he, !0);
            continue;
          }
          let Ie;
          if (we.key != null) Ie = fe.get(we.key);
          else
            for (Me = ie; Me <= U; Me++)
              if (Se[Me - ie] === 0 && mr(we, P[Me])) {
                Ie = Me;
                break;
              }
          Ie === void 0
            ? te(we, ee, he, !0)
            : ((Se[Ie - ie] = ae + 1),
              Ie >= Ee ? (Ee = Ie) : (be = !0),
              p(we, P[Ie], X, null, ee, he, pe, oe, me),
              L++);
        }
        const Ce = be ? Y0(Se) : vs;
        for (Me = Ce.length - 1, ae = B - 1; ae >= 0; ae--) {
          const we = ie + ae,
            Ie = P[we],
            ke = we + 1 < E ? P[we + 1].el : K;
          Se[ae] === 0
            ? p(null, Ie, X, ke, ee, he, pe, oe, me)
            : be && (Me < 0 || ae !== Ce[Me] ? ue(Ie, X, ke, 2) : Me--);
        }
      }
    },
    ue = (A, P, X, K, ee = null) => {
      const {
        el: he,
        type: pe,
        transition: oe,
        children: me,
        shapeFlag: ae,
      } = A;
      if (ae & 6) {
        ue(A.component.subTree, P, X, K);
        return;
      }
      if (ae & 128) {
        A.suspense.move(P, X, K);
        return;
      }
      if (ae & 64) {
        pe.move(A, P, X, ve);
        return;
      }
      if (pe === zt) {
        n(he, P, X);
        for (let S = 0; S < me.length; S++) ue(me[S], P, X, K);
        n(A.anchor, P, X);
        return;
      }
      if (pe === Tl) {
        v(A, P, X);
        return;
      }
      if (K !== 2 && ae & 1 && oe)
        if (K === 0)
          oe.beforeEnter(he), n(he, P, X), $t(() => oe.enter(he), ee);
        else {
          const { leave: S, delayLeave: U, afterLeave: J } = oe,
            ie = () => n(he, P, X),
            fe = () => {
              S(he, () => {
                ie(), J && J();
              });
            };
          U ? U(he, ie, fe) : fe();
        }
      else n(he, P, X);
    },
    te = (A, P, X, K = !1, ee = !1) => {
      const {
        type: he,
        props: pe,
        ref: oe,
        children: me,
        dynamicChildren: ae,
        shapeFlag: E,
        patchFlag: S,
        dirs: U,
      } = A;
      if ((oe != null && Dc(oe, null, X, A, !0), E & 256)) {
        P.ctx.deactivate(A);
        return;
      }
      const J = E & 1 && U,
        ie = !Aa(A);
      let fe;
      if ((ie && (fe = pe && pe.onVnodeBeforeUnmount) && Wn(fe, P, A), E & 6))
        G(A.component, X, K);
      else {
        if (E & 128) {
          A.suspense.unmount(X, K);
          return;
        }
        J && ir(A, null, P, 'beforeUnmount'),
          E & 64
            ? A.type.remove(A, P, X, ee, ve, K)
            : ae && (he !== zt || (S > 0 && S & 64))
            ? F(ae, P, X, !1, !0)
            : ((he === zt && S & 384) || (!ee && E & 16)) && F(me, P, X),
          K && de(A);
      }
      ((ie && (fe = pe && pe.onVnodeUnmounted)) || J) &&
        $t(() => {
          fe && Wn(fe, P, A), J && ir(A, null, P, 'unmounted');
        }, X);
    },
    de = A => {
      const { type: P, el: X, anchor: K, transition: ee } = A;
      if (P === zt) {
        xe(X, K);
        return;
      }
      if (P === Tl) {
        y(A);
        return;
      }
      const he = () => {
        r(X), ee && !ee.persisted && ee.afterLeave && ee.afterLeave();
      };
      if (A.shapeFlag & 1 && ee && !ee.persisted) {
        const { leave: pe, delayLeave: oe } = ee,
          me = () => pe(X, he);
        oe ? oe(A.el, he, me) : me();
      } else he();
    },
    xe = (A, P) => {
      let X;
      for (; A !== P; ) (X = h(A)), r(A), (A = X);
      r(P);
    },
    G = (A, P, X) => {
      const { bum: K, scope: ee, update: he, subTree: pe, um: oe } = A;
      K && bl(K),
        ee.stop(),
        he && ((he.active = !1), te(pe, A, P, X)),
        oe && $t(oe, P),
        $t(() => {
          A.isUnmounted = !0;
        }, P),
        P &&
          P.pendingBranch &&
          !P.isUnmounted &&
          A.asyncDep &&
          !A.asyncResolved &&
          A.suspenseId === P.pendingId &&
          (P.deps--, P.deps === 0 && P.resolve());
    },
    F = (A, P, X, K = !1, ee = !1, he = 0) => {
      for (let pe = he; pe < A.length; pe++) te(A[pe], P, X, K, ee);
    },
    le = A =>
      A.shapeFlag & 6
        ? le(A.component.subTree)
        : A.shapeFlag & 128
        ? A.suspense.next()
        : h(A.anchor || A.el),
    ce = (A, P, X) => {
      A == null
        ? P._vnode && te(P._vnode, null, null, !0)
        : p(P._vnode || null, A, P, null, null, null, X),
        Af(),
        Lp(),
        (P._vnode = A);
    },
    ve = { p, um: te, m: ue, r: de, mt: I, mc: M, pc: V, pbc: D, n: le, o: i };
  let _e, Te;
  return (
    e && ([_e, Te] = e(ve)), { render: ce, hydrate: _e, createApp: X0(ce, _e) }
  );
}
function rr({ effect: i, update: e }, t) {
  i.allowRecurse = e.allowRecurse = t;
}
function Zp(i, e, t = !1) {
  const n = i.children,
    r = e.children;
  if (Fe(n) && Fe(r))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let a = r[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[s] = Oi(r[s])), (a.el = o.el)),
        t || Zp(o, a));
    }
}
function Y0(i) {
  const e = i.slice(),
    t = [0];
  let n, r, s, o, a;
  const l = i.length;
  for (n = 0; n < l; n++) {
    const c = i[n];
    if (c !== 0) {
      if (((r = t[t.length - 1]), i[r] < c)) {
        (e[n] = r), t.push(n);
        continue;
      }
      for (s = 0, o = t.length - 1; s < o; )
        (a = (s + o) >> 1), i[t[a]] < c ? (s = a + 1) : (o = a);
      c < i[t[s]] && (s > 0 && (e[n] = t[s - 1]), (t[s] = n));
    }
  }
  for (s = t.length, o = t[s - 1]; s-- > 0; ) (t[s] = o), (o = e[o]);
  return t;
}
const Z0 = i => i.__isTeleport,
  zt = Symbol(void 0),
  Pu = Symbol(void 0),
  gi = Symbol(void 0),
  Tl = Symbol(void 0),
  mo = [];
let zn = null;
function ft(i = !1) {
  mo.push((zn = i ? null : []));
}
function K0() {
  mo.pop(), (zn = mo[mo.length - 1] || null);
}
let Lo = 1;
function zf(i) {
  Lo += i;
}
function Kp(i) {
  return (
    (i.dynamicChildren = Lo > 0 ? zn || vs : null),
    K0(),
    Lo > 0 && zn && zn.push(i),
    i
  );
}
function _t(i, e, t, n, r, s) {
  return Kp(nt(i, e, t, n, r, s, !0));
}
function J0(i, e, t, n, r) {
  return Kp(Et(i, e, t, n, r, !0));
}
function Ic(i) {
  return i ? i.__v_isVNode === !0 : !1;
}
function mr(i, e) {
  return i.type === e.type && i.key === e.key;
}
const ol = '__vInternal',
  Jp = ({ key: i }) => (i != null ? i : null),
  Ca = ({ ref: i, ref_key: e, ref_for: t }) =>
    i != null
      ? At(i) || kt(i) || Ue(i)
        ? { i: Kn, r: i, k: e, f: !!t }
        : i
      : null;
function nt(
  i,
  e = null,
  t = null,
  n = 0,
  r = null,
  s = i === zt ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i,
    props: e,
    key: e && Jp(e),
    ref: e && Ca(e),
    scopeId: Op,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    a
      ? (Ru(l, t), s & 128 && i.normalize(l))
      : t && (l.shapeFlag |= At(t) ? 8 : 16),
    Lo > 0 &&
      !o &&
      zn &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      zn.push(l),
    l
  );
}
const Et = Q0;
function Q0(i, e = null, t = null, n = 0, r = null, s = !1) {
  if (((!i || i === I0) && (i = gi), Ic(i))) {
    const a = $i(i, e, !0);
    return (
      t && Ru(a, t),
      Lo > 0 &&
        !s &&
        zn &&
        (a.shapeFlag & 6 ? (zn[zn.indexOf(i)] = a) : zn.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((ux(i) && (i = i.__vccOpts), e)) {
    e = ex(e);
    let { class: a, style: l } = e;
    a && !At(a) && (e.class = Go(a)),
      rt(l) && (bp(l) && !Fe(l) && (l = Gt({}, l)), (e.style = Xi(l)));
  }
  const o = At(i) ? 1 : _0(i) ? 128 : Z0(i) ? 64 : rt(i) ? 4 : Ue(i) ? 2 : 0;
  return nt(i, e, t, n, r, o, s, !0);
}
function ex(i) {
  return i ? (bp(i) || ol in i ? Gt({}, i) : i) : null;
}
function $i(i, e, t = !1) {
  const { props: n, ref: r, patchFlag: s, children: o } = i,
    a = e ? tx(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i.type,
    props: a,
    key: a && Jp(a),
    ref:
      e && e.ref
        ? t && r
          ? Fe(r)
            ? r.concat(Ca(e))
            : [r, Ca(e)]
          : Ca(e)
        : r,
    scopeId: i.scopeId,
    slotScopeIds: i.slotScopeIds,
    children: o,
    target: i.target,
    targetAnchor: i.targetAnchor,
    staticCount: i.staticCount,
    shapeFlag: i.shapeFlag,
    patchFlag: e && i.type !== zt ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: i.dynamicProps,
    dynamicChildren: i.dynamicChildren,
    appContext: i.appContext,
    dirs: i.dirs,
    transition: i.transition,
    component: i.component,
    suspense: i.suspense,
    ssContent: i.ssContent && $i(i.ssContent),
    ssFallback: i.ssFallback && $i(i.ssFallback),
    el: i.el,
    anchor: i.anchor,
  };
}
function Qp(i = ' ', e = 0) {
  return Et(Pu, null, i, e);
}
function Xn(i) {
  return i == null || typeof i == 'boolean'
    ? Et(gi)
    : Fe(i)
    ? Et(zt, null, i.slice())
    : typeof i == 'object'
    ? Oi(i)
    : Et(Pu, null, String(i));
}
function Oi(i) {
  return (i.el === null && i.patchFlag !== -1) || i.memo ? i : $i(i);
}
function Ru(i, e) {
  let t = 0;
  const { shapeFlag: n } = i;
  if (e == null) e = null;
  else if (Fe(e)) t = 16;
  else if (typeof e == 'object')
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Ru(i, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = e._;
      !r && !(ol in e)
        ? (e._ctx = Kn)
        : r === 3 &&
          Kn &&
          (Kn.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (i.patchFlag |= 1024)));
    }
  else
    Ue(e)
      ? ((e = { default: e, _ctx: Kn }), (t = 32))
      : ((e = String(e)), n & 64 ? ((t = 16), (e = [Qp(e)])) : (t = 8));
  (i.children = e), (i.shapeFlag |= t);
}
function tx(...i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    for (const r in n)
      if (r === 'class')
        e.class !== n.class && (e.class = Go([e.class, n.class]));
      else if (r === 'style') e.style = Xi([e.style, n.style]);
      else if (Ja(r)) {
        const s = e[r],
          o = n[r];
        o &&
          s !== o &&
          !(Fe(s) && s.includes(o)) &&
          (e[r] = s ? [].concat(s, o) : o);
      } else r !== '' && (e[r] = n[r]);
  }
  return e;
}
function Wn(i, e, t, n = null) {
  Tn(i, e, 7, [t, n]);
}
const nx = Yp();
let ix = 0;
function rx(i, e, t) {
  const n = i.type,
    r = (e ? e.appContext : i.appContext) || nx,
    s = {
      uid: ix++,
      vnode: i,
      type: n,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new up(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: qp(n, r),
      emitsOptions: Ip(n, r),
      emit: null,
      emitted: null,
      propsDefaults: tt,
      inheritAttrs: n.inheritAttrs,
      ctx: tt,
      data: tt,
      props: tt,
      attrs: tt,
      slots: tt,
      refs: tt,
      setupState: tt,
      setupContext: null,
      suspense: t,
      suspenseId: t ? t.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = e ? e.root : s),
    (s.emit = h0.bind(null, s)),
    i.ce && i.ce(s),
    s
  );
}
let Lt = null;
const sx = () => Lt || Kn,
  Ds = i => {
    (Lt = i), i.scope.on();
  },
  wr = () => {
    Lt && Lt.scope.off(), (Lt = null);
  };
function em(i) {
  return i.vnode.shapeFlag & 4;
}
let Do = !1;
function ox(i, e = !1) {
  Do = e;
  const { props: t, children: n } = i.vnode,
    r = em(i);
  k0(i, t, r, e), H0(i, n);
  const s = r ? ax(i, e) : void 0;
  return (Do = !1), s;
}
function ax(i, e) {
  const t = i.type;
  (i.accessCache = Object.create(null)), (i.proxy = Su(new Proxy(i.ctx, O0)));
  const { setup: n } = t;
  if (n) {
    const r = (i.setupContext = n.length > 1 ? cx(i) : null);
    Ds(i), $s();
    const s = Vi(n, i, 0, [i.props, r]);
    if ((Ys(), wr(), op(s))) {
      if ((s.then(wr, wr), e))
        return s
          .then(o => {
            Uf(i, o, e);
          })
          .catch(o => {
            nl(o, i, 0);
          });
      i.asyncDep = s;
    } else Uf(i, s, e);
  } else tm(i, e);
}
function Uf(i, e, t) {
  Ue(e)
    ? i.type.__ssrInlineRender
      ? (i.ssrRender = e)
      : (i.render = e)
    : rt(e) && (i.setupState = Ep(e)),
    tm(i, t);
}
let Bf;
function tm(i, e, t) {
  const n = i.type;
  if (!i.render) {
    if (!e && Bf && !n.render) {
      const r = n.template || Au(i).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = i.appContext.config,
          { delimiters: a, compilerOptions: l } = n,
          c = Gt(Gt({ isCustomElement: s, delimiters: a }, o), l);
        n.render = Bf(r, c);
      }
    }
    i.render = n.render || Un;
  }
  Ds(i), $s(), F0(i), Ys(), wr();
}
function lx(i) {
  return new Proxy(i.attrs, {
    get(e, t) {
      return cn(i, 'get', '$attrs'), e[t];
    },
  });
}
function cx(i) {
  const e = n => {
    i.exposed = n || {};
  };
  let t;
  return {
    get attrs() {
      return t || (t = lx(i));
    },
    slots: i.slots,
    emit: i.emit,
    expose: e,
  };
}
function Lu(i) {
  if (i.exposed)
    return (
      i.exposeProxy ||
      (i.exposeProxy = new Proxy(Ep(Su(i.exposed)), {
        get(e, t) {
          if (t in e) return e[t];
          if (t in za) return za[t](i);
        },
      }))
    );
}
function ux(i) {
  return Ue(i) && '__vccOpts' in i;
}
const Tt = (i, e) => o0(i, e, Do);
function nm(i, e, t) {
  const n = arguments.length;
  return n === 2
    ? rt(e) && !Fe(e)
      ? Ic(e)
        ? Et(i, null, [e])
        : Et(i, e)
      : Et(i, null, e)
    : (n > 3
        ? (t = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Ic(t) && (t = [t]),
      Et(i, e, t));
}
const fx = '3.2.41',
  hx = 'http://www.w3.org/2000/svg',
  gr = typeof document < 'u' ? document : null,
  kf = gr && gr.createElement('template'),
  dx = {
    insert: (i, e, t) => {
      e.insertBefore(i, t || null);
    },
    remove: i => {
      const e = i.parentNode;
      e && e.removeChild(i);
    },
    createElement: (i, e, t, n) => {
      const r = e
        ? gr.createElementNS(hx, i)
        : gr.createElement(i, t ? { is: t } : void 0);
      return (
        i === 'select' &&
          n &&
          n.multiple != null &&
          r.setAttribute('multiple', n.multiple),
        r
      );
    },
    createText: i => gr.createTextNode(i),
    createComment: i => gr.createComment(i),
    setText: (i, e) => {
      i.nodeValue = e;
    },
    setElementText: (i, e) => {
      i.textContent = e;
    },
    parentNode: i => i.parentNode,
    nextSibling: i => i.nextSibling,
    querySelector: i => gr.querySelector(i),
    setScopeId(i, e) {
      i.setAttribute(e, '');
    },
    insertStaticContent(i, e, t, n, r, s) {
      const o = t ? t.previousSibling : e.lastChild;
      if (r && (r === s || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), t),
            !(r === s || !(r = r.nextSibling));

        );
      else {
        kf.innerHTML = n ? `<svg>${i}</svg>` : i;
        const a = kf.content;
        if (n) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        e.insertBefore(a, t);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        t ? t.previousSibling : e.lastChild,
      ];
    },
  };
function px(i, e, t) {
  const n = i._vtc;
  n && (e = (e ? [e, ...n] : [...n]).join(' ')),
    e == null
      ? i.removeAttribute('class')
      : t
      ? i.setAttribute('class', e)
      : (i.className = e);
}
function mx(i, e, t) {
  const n = i.style,
    r = At(t);
  if (t && !r) {
    for (const s in t) Oc(n, s, t[s]);
    if (e && !At(e)) for (const s in e) t[s] == null && Oc(n, s, '');
  } else {
    const s = n.display;
    r ? e !== t && (n.cssText = t) : e && i.removeAttribute('style'),
      '_vod' in i && (n.display = s);
  }
}
const Vf = /\s*!important$/;
function Oc(i, e, t) {
  if (Fe(t)) t.forEach(n => Oc(i, e, n));
  else if ((t == null && (t = ''), e.startsWith('--'))) i.setProperty(e, t);
  else {
    const n = gx(i, e);
    Vf.test(t)
      ? i.setProperty(js(n), t.replace(Vf, ''), 'important')
      : (i[n] = t);
  }
}
const Gf = ['Webkit', 'Moz', 'ms'],
  El = {};
function gx(i, e) {
  const t = El[e];
  if (t) return t;
  let n = Ps(e);
  if (n !== 'filter' && n in i) return (El[e] = n);
  n = cp(n);
  for (let r = 0; r < Gf.length; r++) {
    const s = Gf[r] + n;
    if (s in i) return (El[e] = s);
  }
  return e;
}
const Hf = 'http://www.w3.org/1999/xlink';
function _x(i, e, t, n, r) {
  if (n && e.startsWith('xlink:'))
    t == null
      ? i.removeAttributeNS(Hf, e.slice(6, e.length))
      : i.setAttributeNS(Hf, e, t);
  else {
    const s = g_(e);
    t == null || (s && !ip(t))
      ? i.removeAttribute(e)
      : i.setAttribute(e, s ? '' : t);
  }
}
function xx(i, e, t, n, r, s, o) {
  if (e === 'innerHTML' || e === 'textContent') {
    n && o(n, r, s), (i[e] = t == null ? '' : t);
    return;
  }
  if (e === 'value' && i.tagName !== 'PROGRESS' && !i.tagName.includes('-')) {
    i._value = t;
    const l = t == null ? '' : t;
    (i.value !== l || i.tagName === 'OPTION') && (i.value = l),
      t == null && i.removeAttribute(e);
    return;
  }
  let a = !1;
  if (t === '' || t == null) {
    const l = typeof i[e];
    l === 'boolean'
      ? (t = ip(t))
      : t == null && l === 'string'
      ? ((t = ''), (a = !0))
      : l === 'number' && ((t = 0), (a = !0));
  }
  try {
    i[e] = t;
  } catch {}
  a && i.removeAttribute(e);
}
function vx(i, e, t, n) {
  i.addEventListener(e, t, n);
}
function yx(i, e, t, n) {
  i.removeEventListener(e, t, n);
}
function Mx(i, e, t, n, r = null) {
  const s = i._vei || (i._vei = {}),
    o = s[e];
  if (n && o) o.value = n;
  else {
    const [a, l] = bx(e);
    if (n) {
      const c = (s[e] = Tx(n, r));
      vx(i, a, c, l);
    } else o && (yx(i, a, o, l), (s[e] = void 0));
  }
}
const Wf = /(?:Once|Passive|Capture)$/;
function bx(i) {
  let e;
  if (Wf.test(i)) {
    e = {};
    let n;
    for (; (n = i.match(Wf)); )
      (i = i.slice(0, i.length - n[0].length)), (e[n[0].toLowerCase()] = !0);
  }
  return [i[2] === ':' ? i.slice(3) : js(i.slice(2)), e];
}
let Al = 0;
const Sx = Promise.resolve(),
  wx = () => Al || (Sx.then(() => (Al = 0)), (Al = Date.now()));
function Tx(i, e) {
  const t = n => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= t.attached) return;
    Tn(Ex(n, t.value), e, 5, [n]);
  };
  return (t.value = i), (t.attached = wx()), t;
}
function Ex(i, e) {
  if (Fe(e)) {
    const t = i.stopImmediatePropagation;
    return (
      (i.stopImmediatePropagation = () => {
        t.call(i), (i._stopped = !0);
      }),
      e.map(n => r => !r._stopped && n && n(r))
    );
  } else return e;
}
const qf = /^on[a-z]/,
  Ax = (i, e, t, n, r = !1, s, o, a, l) => {
    e === 'class'
      ? px(i, n, r)
      : e === 'style'
      ? mx(i, t, n)
      : Ja(e)
      ? du(e) || Mx(i, e, t, n, o)
      : (
          e[0] === '.'
            ? ((e = e.slice(1)), !0)
            : e[0] === '^'
            ? ((e = e.slice(1)), !1)
            : Cx(i, e, n, r)
        )
      ? xx(i, e, n, s, o, a, l)
      : (e === 'true-value'
          ? (i._trueValue = n)
          : e === 'false-value' && (i._falseValue = n),
        _x(i, e, n, r));
  };
function Cx(i, e, t, n) {
  return n
    ? !!(
        e === 'innerHTML' ||
        e === 'textContent' ||
        (e in i && qf.test(e) && Ue(t))
      )
    : e === 'spellcheck' ||
      e === 'draggable' ||
      e === 'translate' ||
      e === 'form' ||
      (e === 'list' && i.tagName === 'INPUT') ||
      (e === 'type' && i.tagName === 'TEXTAREA') ||
      (qf.test(e) && At(t))
    ? !1
    : e in i;
}
const Px = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
b0.props;
const Rx = Gt({ patchProp: Ax }, dx);
let Xf;
function Lx() {
  return Xf || (Xf = j0(Rx));
}
const Dx = (...i) => {
  const e = Lx().createApp(...i),
    { mount: t } = e;
  return (
    (e.mount = n => {
      const r = Ix(n);
      if (!r) return;
      const s = e._component;
      !Ue(s) && !s.render && !s.template && (s.template = r.innerHTML),
        (r.innerHTML = '');
      const o = t(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      );
    }),
    e
  );
};
function Ix(i) {
  return At(i) ? document.querySelector(i) : i;
}
var Ox = !1;
/*!
 * pinia v2.0.23
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Fx = Symbol();
var jf;
(function (i) {
  (i.direct = 'direct'),
    (i.patchObject = 'patch object'),
    (i.patchFunction = 'patch function');
})(jf || (jf = {}));
function Nx() {
  const i = C_(!0),
    e = i.run(() => xr({}));
  let t = [],
    n = [];
  const r = Su({
    install(s) {
      (r._a = s),
        s.provide(Fx, r),
        (s.config.globalProperties.$pinia = r),
        n.forEach(o => t.push(o)),
        (n = []);
    },
    use(s) {
      return !this._a && !Ox ? n.push(s) : t.push(s), this;
    },
    _p: t,
    _a: null,
    _e: i,
    _s: new Map(),
    state: e,
  });
  return r;
}
/*!
 * vue-router v4.1.5
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ds = typeof window < 'u';
function zx(i) {
  return i.__esModule || i[Symbol.toStringTag] === 'Module';
}
const Ze = Object.assign;
function Cl(i, e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    t[n] = kn(r) ? r.map(i) : i(r);
  }
  return t;
}
const go = () => {},
  kn = Array.isArray,
  Ux = /\/$/,
  Bx = i => i.replace(Ux, '');
function Pl(i, e, t = '/') {
  let n,
    r = {},
    s = '',
    o = '';
  const a = e.indexOf('#');
  let l = e.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((n = e.slice(0, l)),
      (s = e.slice(l + 1, a > -1 ? a : e.length)),
      (r = i(s))),
    a > -1 && ((n = n || e.slice(0, a)), (o = e.slice(a, e.length))),
    (n = Hx(n != null ? n : e, t)),
    { fullPath: n + (s && '?') + s + o, path: n, query: r, hash: o }
  );
}
function kx(i, e) {
  const t = e.query ? i(e.query) : '';
  return e.path + (t && '?') + t + (e.hash || '');
}
function $f(i, e) {
  return !e || !i.toLowerCase().startsWith(e.toLowerCase())
    ? i
    : i.slice(e.length) || '/';
}
function Vx(i, e, t) {
  const n = e.matched.length - 1,
    r = t.matched.length - 1;
  return (
    n > -1 &&
    n === r &&
    Is(e.matched[n], t.matched[r]) &&
    im(e.params, t.params) &&
    i(e.query) === i(t.query) &&
    e.hash === t.hash
  );
}
function Is(i, e) {
  return (i.aliasOf || i) === (e.aliasOf || e);
}
function im(i, e) {
  if (Object.keys(i).length !== Object.keys(e).length) return !1;
  for (const t in i) if (!Gx(i[t], e[t])) return !1;
  return !0;
}
function Gx(i, e) {
  return kn(i) ? Yf(i, e) : kn(e) ? Yf(e, i) : i === e;
}
function Yf(i, e) {
  return kn(e)
    ? i.length === e.length && i.every((t, n) => t === e[n])
    : i.length === 1 && i[0] === e;
}
function Hx(i, e) {
  if (i.startsWith('/')) return i;
  if (!i) return e;
  const t = e.split('/'),
    n = i.split('/');
  let r = t.length - 1,
    s,
    o;
  for (s = 0; s < n.length; s++)
    if (((o = n[s]), o !== '.'))
      if (o === '..') r > 1 && r--;
      else break;
  return (
    t.slice(0, r).join('/') +
    '/' +
    n.slice(s - (s === n.length ? 1 : 0)).join('/')
  );
}
var Io;
(function (i) {
  (i.pop = 'pop'), (i.push = 'push');
})(Io || (Io = {}));
var _o;
(function (i) {
  (i.back = 'back'), (i.forward = 'forward'), (i.unknown = '');
})(_o || (_o = {}));
function Wx(i) {
  if (!i)
    if (ds) {
      const e = document.querySelector('base');
      (i = (e && e.getAttribute('href')) || '/'),
        (i = i.replace(/^\w+:\/\/[^\/]+/, ''));
    } else i = '/';
  return i[0] !== '/' && i[0] !== '#' && (i = '/' + i), Bx(i);
}
const qx = /^[^#]+#/;
function Xx(i, e) {
  return i.replace(qx, '#') + e;
}
function jx(i, e) {
  const t = document.documentElement.getBoundingClientRect(),
    n = i.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: n.left - t.left - (e.left || 0),
    top: n.top - t.top - (e.top || 0),
  };
}
const al = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function $x(i) {
  let e;
  if ('el' in i) {
    const t = i.el,
      n = typeof t == 'string' && t.startsWith('#'),
      r =
        typeof t == 'string'
          ? n
            ? document.getElementById(t.slice(1))
            : document.querySelector(t)
          : t;
    if (!r) return;
    e = jx(r, i);
  } else e = i;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function Zf(i, e) {
  return (history.state ? history.state.position - e : -1) + i;
}
const Fc = new Map();
function Yx(i, e) {
  Fc.set(i, e);
}
function Zx(i) {
  const e = Fc.get(i);
  return Fc.delete(i), e;
}
let Kx = () => location.protocol + '//' + location.host;
function rm(i, e) {
  const { pathname: t, search: n, hash: r } = e,
    s = i.indexOf('#');
  if (s > -1) {
    let a = r.includes(i.slice(s)) ? i.slice(s).length : 1,
      l = r.slice(a);
    return l[0] !== '/' && (l = '/' + l), $f(l, '');
  }
  return $f(t, i) + n + r;
}
function Jx(i, e, t, n) {
  let r = [],
    s = [],
    o = null;
  const a = ({ state: h }) => {
    const d = rm(i, location),
      g = t.value,
      p = e.value;
    let m = 0;
    if (h) {
      if (((t.value = d), (e.value = h), o && o === g)) {
        o = null;
        return;
      }
      m = p ? h.position - p.position : 0;
    } else n(d);
    r.forEach(_ => {
      _(t.value, g, {
        delta: m,
        type: Io.pop,
        direction: m ? (m > 0 ? _o.forward : _o.back) : _o.unknown,
      });
    });
  };
  function l() {
    o = t.value;
  }
  function c(h) {
    r.push(h);
    const d = () => {
      const g = r.indexOf(h);
      g > -1 && r.splice(g, 1);
    };
    return s.push(d), d;
  }
  function u() {
    const { history: h } = window;
    !h.state || h.replaceState(Ze({}, h.state, { scroll: al() }), '');
  }
  function f() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', u),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function Kf(i, e, t, n = !1, r = !1) {
  return {
    back: i,
    current: e,
    forward: t,
    replaced: n,
    position: window.history.length,
    scroll: r ? al() : null,
  };
}
function Qx(i) {
  const { history: e, location: t } = window,
    n = { value: rm(i, t) },
    r = { value: e.state };
  r.value ||
    s(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, c, u) {
    const f = i.indexOf('#'),
      h =
        f > -1
          ? (t.host && document.querySelector('base') ? i : i.slice(f)) + l
          : Kx() + i + l;
    try {
      e[u ? 'replaceState' : 'pushState'](c, '', h), (r.value = c);
    } catch (d) {
      console.error(d), t[u ? 'replace' : 'assign'](h);
    }
  }
  function o(l, c) {
    const u = Ze({}, e.state, Kf(r.value.back, l, r.value.forward, !0), c, {
      position: r.value.position,
    });
    s(l, u, !0), (n.value = l);
  }
  function a(l, c) {
    const u = Ze({}, r.value, e.state, { forward: l, scroll: al() });
    s(u.current, u, !0);
    const f = Ze({}, Kf(n.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (n.value = l);
  }
  return { location: n, state: r, push: a, replace: o };
}
function ev(i) {
  i = Wx(i);
  const e = Qx(i),
    t = Jx(i, e.state, e.location, e.replace);
  function n(s, o = !0) {
    o || t.pauseListeners(), history.go(s);
  }
  const r = Ze(
    { location: '', base: i, go: n, createHref: Xx.bind(null, i) },
    e,
    t
  );
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => e.state.value,
    }),
    r
  );
}
function tv(i) {
  return (
    (i = location.host ? i || location.pathname + location.search : ''),
    i.includes('#') || (i += '#'),
    ev(i)
  );
}
function nv(i) {
  return typeof i == 'string' || (i && typeof i == 'object');
}
function sm(i) {
  return typeof i == 'string' || typeof i == 'symbol';
}
const Ei = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  om = Symbol('');
var Jf;
(function (i) {
  (i[(i.aborted = 4)] = 'aborted'),
    (i[(i.cancelled = 8)] = 'cancelled'),
    (i[(i.duplicated = 16)] = 'duplicated');
})(Jf || (Jf = {}));
function Os(i, e) {
  return Ze(new Error(), { type: i, [om]: !0 }, e);
}
function ii(i, e) {
  return i instanceof Error && om in i && (e == null || !!(i.type & e));
}
const Qf = '[^/]+?',
  iv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  rv = /[.+*?^${}()[\]/\\]/g;
function sv(i, e) {
  const t = Ze({}, iv, e),
    n = [];
  let r = t.start ? '^' : '';
  const s = [];
  for (const c of i) {
    const u = c.length ? [] : [90];
    t.strict && !c.length && (r += '/');
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let d = 40 + (t.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += '/'), (r += h.value.replace(rv, '\\$&')), (d += 40);
      else if (h.type === 1) {
        const { value: g, repeatable: p, optional: m, regexp: _ } = h;
        s.push({ name: g, repeatable: p, optional: m });
        const x = _ || Qf;
        if (x !== Qf) {
          d += 10;
          try {
            new RegExp(`(${x})`);
          } catch (y) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${x}): ` + y.message
            );
          }
        }
        let v = p ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        f || (v = m && c.length < 2 ? `(?:/${v})` : '/' + v),
          m && (v += '?'),
          (r += v),
          (d += 20),
          m && (d += -8),
          p && (d += -20),
          x === '.*' && (d += -50);
      }
      u.push(d);
    }
    n.push(u);
  }
  if (t.strict && t.end) {
    const c = n.length - 1;
    n[c][n[c].length - 1] += 0.7000000000000001;
  }
  t.strict || (r += '/?'), t.end ? (r += '$') : t.strict && (r += '(?:/|$)');
  const o = new RegExp(r, t.sensitive ? '' : 'i');
  function a(c) {
    const u = c.match(o),
      f = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const d = u[h] || '',
        g = s[h - 1];
      f[g.name] = d && g.repeatable ? d.split('/') : d;
    }
    return f;
  }
  function l(c) {
    let u = '',
      f = !1;
    for (const h of i) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const d of h)
        if (d.type === 0) u += d.value;
        else if (d.type === 1) {
          const { value: g, repeatable: p, optional: m } = d,
            _ = g in c ? c[g] : '';
          if (kn(_) && !p)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const x = kn(_) ? _.join('/') : _;
          if (!x)
            if (m)
              h.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += x;
        }
    }
    return u || '/';
  }
  return { re: o, score: n, keys: s, parse: a, stringify: l };
}
function ov(i, e) {
  let t = 0;
  for (; t < i.length && t < e.length; ) {
    const n = e[t] - i[t];
    if (n) return n;
    t++;
  }
  return i.length < e.length
    ? i.length === 1 && i[0] === 40 + 40
      ? -1
      : 1
    : i.length > e.length
    ? e.length === 1 && e[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function av(i, e) {
  let t = 0;
  const n = i.score,
    r = e.score;
  for (; t < n.length && t < r.length; ) {
    const s = ov(n[t], r[t]);
    if (s) return s;
    t++;
  }
  if (Math.abs(r.length - n.length) === 1) {
    if (eh(n)) return 1;
    if (eh(r)) return -1;
  }
  return r.length - n.length;
}
function eh(i) {
  const e = i[i.length - 1];
  return i.length > 0 && e[e.length - 1] < 0;
}
const lv = { type: 0, value: '' },
  cv = /[a-zA-Z0-9_]/;
function uv(i) {
  if (!i) return [[]];
  if (i === '/') return [[lv]];
  if (!i.startsWith('/')) throw new Error(`Invalid path "${i}"`);
  function e(d) {
    throw new Error(`ERR (${t})/"${c}": ${d}`);
  }
  let t = 0,
    n = t;
  const r = [];
  let s;
  function o() {
    s && r.push(s), (s = []);
  }
  let a = 0,
    l,
    c = '',
    u = '';
  function f() {
    !c ||
      (t === 0
        ? s.push({ type: 0, value: c })
        : t === 1 || t === 2 || t === 3
        ? (s.length > 1 &&
            (l === '*' || l === '+') &&
            e(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : e('Invalid state to consume buffer'),
      (c = ''));
  }
  function h() {
    c += l;
  }
  for (; a < i.length; ) {
    if (((l = i[a++]), l === '\\' && t !== 2)) {
      (n = t), (t = 4);
      continue;
    }
    switch (t) {
      case 0:
        l === '/' ? (c && f(), o()) : l === ':' ? (f(), (t = 1)) : h();
        break;
      case 4:
        h(), (t = n);
        break;
      case 1:
        l === '('
          ? (t = 2)
          : cv.test(l)
          ? h()
          : (f(), (t = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + l)
            : (t = 3)
          : (u += l);
        break;
      case 3:
        f(), (t = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '');
        break;
      default:
        e('Unknown state');
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${c}"`), f(), o(), r;
}
function fv(i, e, t) {
  const n = sv(uv(i.path), t),
    r = Ze(n, { record: i, parent: e, children: [], alias: [] });
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function hv(i, e) {
  const t = [],
    n = new Map();
  e = ih({ strict: !1, end: !0, sensitive: !1 }, e);
  function r(u) {
    return n.get(u);
  }
  function s(u, f, h) {
    const d = !h,
      g = dv(u);
    g.aliasOf = h && h.record;
    const p = ih(e, u),
      m = [g];
    if ('alias' in u) {
      const v = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const y of v)
        m.push(
          Ze({}, g, {
            components: h ? h.record.components : g.components,
            path: y,
            aliasOf: h ? h.record : g,
          })
        );
    }
    let _, x;
    for (const v of m) {
      const { path: y } = v;
      if (f && y[0] !== '/') {
        const b = f.record.path,
          T = b[b.length - 1] === '/' ? '' : '/';
        v.path = f.record.path + (y && T + y);
      }
      if (
        ((_ = fv(v, f, p)),
        h
          ? h.alias.push(_)
          : ((x = x || _),
            x !== _ && x.alias.push(_),
            d && u.name && !nh(_) && o(u.name)),
        g.children)
      ) {
        const b = g.children;
        for (let T = 0; T < b.length; T++) s(b[T], _, h && h.children[T]);
      }
      (h = h || _), l(_);
    }
    return x
      ? () => {
          o(x);
        }
      : go;
  }
  function o(u) {
    if (sm(u)) {
      const f = n.get(u);
      f &&
        (n.delete(u),
        t.splice(t.indexOf(f), 1),
        f.children.forEach(o),
        f.alias.forEach(o));
    } else {
      const f = t.indexOf(u);
      f > -1 &&
        (t.splice(f, 1),
        u.record.name && n.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function a() {
    return t;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < t.length &&
      av(u, t[f]) >= 0 &&
      (u.record.path !== t[f].record.path || !am(u, t[f]));

    )
      f++;
    t.splice(f, 0, u), u.record.name && !nh(u) && n.set(u.record.name, u);
  }
  function c(u, f) {
    let h,
      d = {},
      g,
      p;
    if ('name' in u && u.name) {
      if (((h = n.get(u.name)), !h)) throw Os(1, { location: u });
      (p = h.record.name),
        (d = Ze(
          th(
            f.params,
            h.keys.filter(x => !x.optional).map(x => x.name)
          ),
          u.params &&
            th(
              u.params,
              h.keys.map(x => x.name)
            )
        )),
        (g = h.stringify(d));
    } else if ('path' in u)
      (g = u.path),
        (h = t.find(x => x.re.test(g))),
        h && ((d = h.parse(g)), (p = h.record.name));
    else {
      if (((h = f.name ? n.get(f.name) : t.find(x => x.re.test(f.path))), !h))
        throw Os(1, { location: u, currentLocation: f });
      (p = h.record.name),
        (d = Ze({}, f.params, u.params)),
        (g = h.stringify(d));
    }
    const m = [];
    let _ = h;
    for (; _; ) m.unshift(_.record), (_ = _.parent);
    return { name: p, path: g, params: d, matched: m, meta: mv(m) };
  }
  return (
    i.forEach(u => s(u)),
    {
      addRoute: s,
      resolve: c,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: r,
    }
  );
}
function th(i, e) {
  const t = {};
  for (const n of e) n in i && (t[n] = i[n]);
  return t;
}
function dv(i) {
  return {
    path: i.path,
    redirect: i.redirect,
    name: i.name,
    meta: i.meta || {},
    aliasOf: void 0,
    beforeEnter: i.beforeEnter,
    props: pv(i),
    children: i.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in i
        ? i.components || null
        : i.component && { default: i.component },
  };
}
function pv(i) {
  const e = {},
    t = i.props || !1;
  if ('component' in i) e.default = t;
  else for (const n in i.components) e[n] = typeof t == 'boolean' ? t : t[n];
  return e;
}
function nh(i) {
  for (; i; ) {
    if (i.record.aliasOf) return !0;
    i = i.parent;
  }
  return !1;
}
function mv(i) {
  return i.reduce((e, t) => Ze(e, t.meta), {});
}
function ih(i, e) {
  const t = {};
  for (const n in i) t[n] = n in e ? e[n] : i[n];
  return t;
}
function am(i, e) {
  return e.children.some(t => t === i || am(i, t));
}
const lm = /#/g,
  gv = /&/g,
  _v = /\//g,
  xv = /=/g,
  vv = /\?/g,
  cm = /\+/g,
  yv = /%5B/g,
  Mv = /%5D/g,
  um = /%5E/g,
  bv = /%60/g,
  fm = /%7B/g,
  Sv = /%7C/g,
  hm = /%7D/g,
  wv = /%20/g;
function Du(i) {
  return encodeURI('' + i)
    .replace(Sv, '|')
    .replace(yv, '[')
    .replace(Mv, ']');
}
function Tv(i) {
  return Du(i).replace(fm, '{').replace(hm, '}').replace(um, '^');
}
function Nc(i) {
  return Du(i)
    .replace(cm, '%2B')
    .replace(wv, '+')
    .replace(lm, '%23')
    .replace(gv, '%26')
    .replace(bv, '`')
    .replace(fm, '{')
    .replace(hm, '}')
    .replace(um, '^');
}
function Ev(i) {
  return Nc(i).replace(xv, '%3D');
}
function Av(i) {
  return Du(i).replace(lm, '%23').replace(vv, '%3F');
}
function Cv(i) {
  return i == null ? '' : Av(i).replace(_v, '%2F');
}
function Ba(i) {
  try {
    return decodeURIComponent('' + i);
  } catch {}
  return '' + i;
}
function Pv(i) {
  const e = {};
  if (i === '' || i === '?') return e;
  const n = (i[0] === '?' ? i.slice(1) : i).split('&');
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(cm, ' '),
      o = s.indexOf('='),
      a = Ba(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Ba(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      kn(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function rh(i) {
  let e = '';
  for (let t in i) {
    const n = i[t];
    if (((t = Ev(t)), n == null)) {
      n !== void 0 && (e += (e.length ? '&' : '') + t);
      continue;
    }
    (kn(n) ? n.map(s => s && Nc(s)) : [n && Nc(n)]).forEach(s => {
      s !== void 0 &&
        ((e += (e.length ? '&' : '') + t), s != null && (e += '=' + s));
    });
  }
  return e;
}
function Rv(i) {
  const e = {};
  for (const t in i) {
    const n = i[t];
    n !== void 0 &&
      (e[t] = kn(n)
        ? n.map(r => (r == null ? null : '' + r))
        : n == null
        ? n
        : '' + n);
  }
  return e;
}
const Lv = Symbol(''),
  sh = Symbol(''),
  Iu = Symbol(''),
  dm = Symbol(''),
  zc = Symbol('');
function eo() {
  let i = [];
  function e(n) {
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r > -1 && i.splice(r, 1);
      }
    );
  }
  function t() {
    i = [];
  }
  return { add: e, list: () => i, reset: t };
}
function Fi(i, e, t, n, r) {
  const s = n && (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
  return () =>
    new Promise((o, a) => {
      const l = f => {
          f === !1
            ? a(Os(4, { from: t, to: e }))
            : f instanceof Error
            ? a(f)
            : nv(f)
            ? a(Os(2, { from: e, to: f }))
            : (s &&
                n.enterCallbacks[r] === s &&
                typeof f == 'function' &&
                s.push(f),
              o());
        },
        c = i.call(n && n.instances[r], e, t, l);
      let u = Promise.resolve(c);
      i.length < 3 && (u = u.then(l)), u.catch(f => a(f));
    });
}
function Rl(i, e, t, n) {
  const r = [];
  for (const s of i)
    for (const o in s.components) {
      let a = s.components[o];
      if (!(e !== 'beforeRouteEnter' && !s.instances[o]))
        if (Dv(a)) {
          const c = (a.__vccOpts || a)[e];
          c && r.push(Fi(c, t, n, s, o));
        } else {
          let l = a();
          r.push(() =>
            l.then(c => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${s.path}"`)
                );
              const u = zx(c) ? c.default : c;
              s.components[o] = u;
              const h = (u.__vccOpts || u)[e];
              return h && Fi(h, t, n, s, o)();
            })
          );
        }
    }
  return r;
}
function Dv(i) {
  return (
    typeof i == 'object' ||
    'displayName' in i ||
    'props' in i ||
    '__vccOpts' in i
  );
}
function oh(i) {
  const e = Gi(Iu),
    t = Gi(dm),
    n = Tt(() => e.resolve(yt(i.to))),
    r = Tt(() => {
      const { matched: l } = n.value,
        { length: c } = l,
        u = l[c - 1],
        f = t.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Is.bind(null, u));
      if (h > -1) return h;
      const d = ah(l[c - 2]);
      return c > 1 && ah(u) === d && f[f.length - 1].path !== d
        ? f.findIndex(Is.bind(null, l[c - 2]))
        : h;
    }),
    s = Tt(() => r.value > -1 && Fv(t.params, n.value.params)),
    o = Tt(
      () =>
        r.value > -1 &&
        r.value === t.matched.length - 1 &&
        im(t.params, n.value.params)
    );
  function a(l = {}) {
    return Ov(l)
      ? e[yt(i.replace) ? 'replace' : 'push'](yt(i.to)).catch(go)
      : Promise.resolve();
  }
  return {
    route: n,
    href: Tt(() => n.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
const Iv = Vn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: oh,
    setup(i, { slots: e }) {
      const t = Ur(oh(i)),
        { options: n } = Gi(Iu),
        r = Tt(() => ({
          [lh(i.activeClass, n.linkActiveClass, 'router-link-active')]:
            t.isActive,
          [lh(
            i.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active'
          )]: t.isExactActive,
        }));
      return () => {
        const s = e.default && e.default(t);
        return i.custom
          ? s
          : nm(
              'a',
              {
                'aria-current': t.isExactActive ? i.ariaCurrentValue : null,
                href: t.href,
                onClick: t.navigate,
                class: r.value,
              },
              s
            );
      };
    },
  }),
  pm = Iv;
function Ov(i) {
  if (
    !(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) &&
    !i.defaultPrevented &&
    !(i.button !== void 0 && i.button !== 0)
  ) {
    if (i.currentTarget && i.currentTarget.getAttribute) {
      const e = i.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(e)) return;
    }
    return i.preventDefault && i.preventDefault(), !0;
  }
}
function Fv(i, e) {
  for (const t in e) {
    const n = e[t],
      r = i[t];
    if (typeof n == 'string') {
      if (n !== r) return !1;
    } else if (!kn(r) || r.length !== n.length || n.some((s, o) => s !== r[o]))
      return !1;
  }
  return !0;
}
function ah(i) {
  return i ? (i.aliasOf ? i.aliasOf.path : i.path) : '';
}
const lh = (i, e, t) => (i != null ? i : e != null ? e : t),
  Nv = Vn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(i, { attrs: e, slots: t }) {
      const n = Gi(zc),
        r = Tt(() => i.route || n.value),
        s = Gi(sh, 0),
        o = Tt(() => {
          let c = yt(s);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = Tt(() => r.value.matched[o.value]);
      Ta(
        sh,
        Tt(() => o.value + 1)
      ),
        Ta(Lv, a),
        Ta(zc, r);
      const l = xr();
      return (
        Ea(
          () => [l.value, a.value, i.name],
          ([c, u, f], [h, d, g]) => {
            u &&
              ((u.instances[f] = c),
              d &&
                d !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards),
                u.updateGuards.size || (u.updateGuards = d.updateGuards))),
              c &&
                u &&
                (!d || !Is(u, d) || !h) &&
                (u.enterCallbacks[f] || []).forEach(p => p(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = r.value,
            u = i.name,
            f = a.value,
            h = f && f.components[u];
          if (!h) return ch(t.default, { Component: h, route: c });
          const d = f.props[u],
            g = d
              ? d === !0
                ? c.params
                : typeof d == 'function'
                ? d(c)
                : d
              : null,
            m = nm(
              h,
              Ze({}, g, e, {
                onVnodeUnmounted: _ => {
                  _.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return ch(t.default, { Component: m, route: c }) || m;
        }
      );
    },
  });
function ch(i, e) {
  if (!i) return null;
  const t = i(e);
  return t.length === 1 ? t[0] : t;
}
const mm = Nv;
function zv(i) {
  const e = hv(i.routes, i),
    t = i.parseQuery || Pv,
    n = i.stringifyQuery || rh,
    r = i.history,
    s = eo(),
    o = eo(),
    a = eo(),
    l = n0(Ei);
  let c = Ei;
  ds &&
    i.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Cl.bind(null, G => '' + G),
    f = Cl.bind(null, Cv),
    h = Cl.bind(null, Ba);
  function d(G, F) {
    let le, ce;
    return (
      sm(G) ? ((le = e.getRecordMatcher(G)), (ce = F)) : (ce = G),
      e.addRoute(ce, le)
    );
  }
  function g(G) {
    const F = e.getRecordMatcher(G);
    F && e.removeRoute(F);
  }
  function p() {
    return e.getRoutes().map(G => G.record);
  }
  function m(G) {
    return !!e.getRecordMatcher(G);
  }
  function _(G, F) {
    if (((F = Ze({}, F || l.value)), typeof G == 'string')) {
      const A = Pl(t, G, F.path),
        P = e.resolve({ path: A.path }, F),
        X = r.createHref(A.fullPath);
      return Ze(A, P, {
        params: h(P.params),
        hash: Ba(A.hash),
        redirectedFrom: void 0,
        href: X,
      });
    }
    let le;
    if ('path' in G) le = Ze({}, G, { path: Pl(t, G.path, F.path).path });
    else {
      const A = Ze({}, G.params);
      for (const P in A) A[P] == null && delete A[P];
      (le = Ze({}, G, { params: f(G.params) })), (F.params = f(F.params));
    }
    const ce = e.resolve(le, F),
      ve = G.hash || '';
    ce.params = u(h(ce.params));
    const _e = kx(n, Ze({}, G, { hash: Tv(ve), path: ce.path })),
      Te = r.createHref(_e);
    return Ze(
      { fullPath: _e, hash: ve, query: n === rh ? Rv(G.query) : G.query || {} },
      ce,
      { redirectedFrom: void 0, href: Te }
    );
  }
  function x(G) {
    return typeof G == 'string' ? Pl(t, G, l.value.path) : Ze({}, G);
  }
  function v(G, F) {
    if (c !== G) return Os(8, { from: F, to: G });
  }
  function y(G) {
    return R(G);
  }
  function b(G) {
    return y(Ze(x(G), { replace: !0 }));
  }
  function T(G) {
    const F = G.matched[G.matched.length - 1];
    if (F && F.redirect) {
      const { redirect: le } = F;
      let ce = typeof le == 'function' ? le(G) : le;
      return (
        typeof ce == 'string' &&
          ((ce =
            ce.includes('?') || ce.includes('#') ? (ce = x(ce)) : { path: ce }),
          (ce.params = {})),
        Ze(
          {
            query: G.query,
            hash: G.hash,
            params: 'path' in ce ? {} : G.params,
          },
          ce
        )
      );
    }
  }
  function R(G, F) {
    const le = (c = _(G)),
      ce = l.value,
      ve = G.state,
      _e = G.force,
      Te = G.replace === !0,
      A = T(le);
    if (A)
      return R(
        Ze(x(A), {
          state: typeof A == 'object' ? Ze({}, ve, A.state) : ve,
          force: _e,
          replace: Te,
        }),
        F || le
      );
    const P = le;
    P.redirectedFrom = F;
    let X;
    return (
      !_e &&
        Vx(n, ce, le) &&
        ((X = Os(16, { to: P, from: ce })), H(ce, ce, !0, !1)),
      (X ? Promise.resolve(X) : w(P, ce))
        .catch(K => (ii(K) ? (ii(K, 2) ? K : z(K)) : Y(K, P, ce)))
        .then(K => {
          if (K) {
            if (ii(K, 2))
              return R(
                Ze({ replace: Te }, x(K.to), {
                  state: typeof K.to == 'object' ? Ze({}, ve, K.to.state) : ve,
                  force: _e,
                }),
                F || P
              );
          } else K = q(P, ce, !0, Te, ve);
          return D(P, ce, K), K;
        })
    );
  }
  function M(G, F) {
    const le = v(G, F);
    return le ? Promise.reject(le) : Promise.resolve();
  }
  function w(G, F) {
    let le;
    const [ce, ve, _e] = Uv(G, F);
    le = Rl(ce.reverse(), 'beforeRouteLeave', G, F);
    for (const A of ce)
      A.leaveGuards.forEach(P => {
        le.push(Fi(P, G, F));
      });
    const Te = M.bind(null, G, F);
    return (
      le.push(Te),
      Wr(le)
        .then(() => {
          le = [];
          for (const A of s.list()) le.push(Fi(A, G, F));
          return le.push(Te), Wr(le);
        })
        .then(() => {
          le = Rl(ve, 'beforeRouteUpdate', G, F);
          for (const A of ve)
            A.updateGuards.forEach(P => {
              le.push(Fi(P, G, F));
            });
          return le.push(Te), Wr(le);
        })
        .then(() => {
          le = [];
          for (const A of G.matched)
            if (A.beforeEnter && !F.matched.includes(A))
              if (kn(A.beforeEnter))
                for (const P of A.beforeEnter) le.push(Fi(P, G, F));
              else le.push(Fi(A.beforeEnter, G, F));
          return le.push(Te), Wr(le);
        })
        .then(
          () => (
            G.matched.forEach(A => (A.enterCallbacks = {})),
            (le = Rl(_e, 'beforeRouteEnter', G, F)),
            le.push(Te),
            Wr(le)
          )
        )
        .then(() => {
          le = [];
          for (const A of o.list()) le.push(Fi(A, G, F));
          return le.push(Te), Wr(le);
        })
        .catch(A => (ii(A, 8) ? A : Promise.reject(A)))
    );
  }
  function D(G, F, le) {
    for (const ce of a.list()) ce(G, F, le);
  }
  function q(G, F, le, ce, ve) {
    const _e = v(G, F);
    if (_e) return _e;
    const Te = F === Ei,
      A = ds ? history.state : {};
    le &&
      (ce || Te
        ? r.replace(G.fullPath, Ze({ scroll: Te && A && A.scroll }, ve))
        : r.push(G.fullPath, ve)),
      (l.value = G),
      H(G, F, le, Te),
      z();
  }
  let Q;
  function k() {
    Q ||
      (Q = r.listen((G, F, le) => {
        if (!xe.listening) return;
        const ce = _(G),
          ve = T(ce);
        if (ve) {
          R(Ze(ve, { replace: !0 }), ce).catch(go);
          return;
        }
        c = ce;
        const _e = l.value;
        ds && Yx(Zf(_e.fullPath, le.delta), al()),
          w(ce, _e)
            .catch(Te =>
              ii(Te, 12)
                ? Te
                : ii(Te, 2)
                ? (R(Te.to, ce)
                    .then(A => {
                      ii(A, 20) &&
                        !le.delta &&
                        le.type === Io.pop &&
                        r.go(-1, !1);
                    })
                    .catch(go),
                  Promise.reject())
                : (le.delta && r.go(-le.delta, !1), Y(Te, ce, _e))
            )
            .then(Te => {
              (Te = Te || q(ce, _e, !1)),
                Te &&
                  (le.delta && !ii(Te, 8)
                    ? r.go(-le.delta, !1)
                    : le.type === Io.pop && ii(Te, 20) && r.go(-1, !1)),
                D(ce, _e, Te);
            })
            .catch(go);
      }));
  }
  let I = eo(),
    $ = eo(),
    Z;
  function Y(G, F, le) {
    z(G);
    const ce = $.list();
    return (
      ce.length ? ce.forEach(ve => ve(G, F, le)) : console.error(G),
      Promise.reject(G)
    );
  }
  function V() {
    return Z && l.value !== Ei
      ? Promise.resolve()
      : new Promise((G, F) => {
          I.add([G, F]);
        });
  }
  function z(G) {
    return (
      Z ||
        ((Z = !G),
        k(),
        I.list().forEach(([F, le]) => (G ? le(G) : F())),
        I.reset()),
      G
    );
  }
  function H(G, F, le, ce) {
    const { scrollBehavior: ve } = i;
    if (!ds || !ve) return Promise.resolve();
    const _e =
      (!le && Zx(Zf(G.fullPath, 0))) ||
      ((ce || !le) && history.state && history.state.scroll) ||
      null;
    return Pp()
      .then(() => ve(G, F, _e))
      .then(Te => Te && $x(Te))
      .catch(Te => Y(Te, G, F));
  }
  const ue = G => r.go(G);
  let te;
  const de = new Set(),
    xe = {
      currentRoute: l,
      listening: !0,
      addRoute: d,
      removeRoute: g,
      hasRoute: m,
      getRoutes: p,
      resolve: _,
      options: i,
      push: y,
      replace: b,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: $.add,
      isReady: V,
      install(G) {
        const F = this;
        G.component('RouterLink', pm),
          G.component('RouterView', mm),
          (G.config.globalProperties.$router = F),
          Object.defineProperty(G.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => yt(l),
          }),
          ds &&
            !te &&
            l.value === Ei &&
            ((te = !0), y(r.location).catch(ve => {}));
        const le = {};
        for (const ve in Ei) le[ve] = Tt(() => l.value[ve]);
        G.provide(Iu, F), G.provide(dm, Ur(le)), G.provide(zc, l);
        const ce = G.unmount;
        de.add(G),
          (G.unmount = function () {
            de.delete(G),
              de.size < 1 &&
                ((c = Ei),
                Q && Q(),
                (Q = null),
                (l.value = Ei),
                (te = !1),
                (Z = !1)),
              ce();
          });
      },
    };
  return xe;
}
function Wr(i) {
  return i.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function Uv(i, e) {
  const t = [],
    n = [],
    r = [],
    s = Math.max(e.matched.length, i.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (i.matched.find(c => Is(c, a)) ? n.push(a) : t.push(a));
    const l = i.matched[o];
    l && (e.matched.find(c => Is(c, l)) || r.push(l));
  }
  return [t, n, r];
}
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Ou = '146',
  qr = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Xr = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Bv = 0,
  uh = 1,
  kv = 2,
  gm = 1,
  Vv = 2,
  uo = 3,
  Fs = 0,
  En = 1,
  di = 2,
  Hi = 0,
  Ss = 1,
  xo = 2,
  fh = 3,
  hh = 4,
  Gv = 5,
  ps = 100,
  Hv = 101,
  Wv = 102,
  dh = 103,
  ph = 104,
  qv = 200,
  Xv = 201,
  jv = 202,
  $v = 203,
  _m = 204,
  xm = 205,
  Yv = 206,
  Zv = 207,
  Kv = 208,
  Jv = 209,
  Qv = 210,
  ey = 0,
  ty = 1,
  ny = 2,
  Uc = 3,
  iy = 4,
  ry = 5,
  sy = 6,
  oy = 7,
  vm = 0,
  ay = 1,
  ly = 2,
  _i = 0,
  cy = 1,
  uy = 2,
  fy = 3,
  hy = 4,
  dy = 5,
  ym = 300,
  Ns = 301,
  zs = 302,
  Bc = 303,
  kc = 304,
  ll = 306,
  Vc = 1e3,
  On = 1001,
  Gc = 1002,
  Yt = 1003,
  mh = 1004,
  gh = 1005,
  vn = 1006,
  py = 1007,
  cl = 1008,
  Dr = 1009,
  my = 1010,
  gy = 1011,
  Mm = 1012,
  _y = 1013,
  vr = 1014,
  yr = 1015,
  Oo = 1016,
  xy = 1017,
  vy = 1018,
  ws = 1020,
  yy = 1021,
  My = 1022,
  Fn = 1023,
  by = 1024,
  Sy = 1025,
  Tr = 1026,
  Us = 1027,
  wy = 1028,
  Ty = 1029,
  Ey = 1030,
  Ay = 1031,
  Cy = 1033,
  Ll = 33776,
  Dl = 33777,
  Il = 33778,
  Ol = 33779,
  _h = 35840,
  xh = 35841,
  vh = 35842,
  yh = 35843,
  Py = 36196,
  Mh = 37492,
  bh = 37496,
  Sh = 37808,
  wh = 37809,
  Th = 37810,
  Eh = 37811,
  Ah = 37812,
  Ch = 37813,
  Ph = 37814,
  Rh = 37815,
  Lh = 37816,
  Dh = 37817,
  Ih = 37818,
  Oh = 37819,
  Fh = 37820,
  Nh = 37821,
  zh = 36492,
  Ir = 3e3,
  lt = 3001,
  Ry = 3200,
  Ly = 3201,
  bm = 0,
  Dy = 1,
  ui = 'srgb',
  Mr = 'srgb-linear',
  Fl = 7680,
  Iy = 519,
  Hc = 35044,
  Uh = '300 es',
  Wc = 1035;
class Br {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const Nt = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0a',
  '0b',
  '0c',
  '0d',
  '0e',
  '0f',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '1a',
  '1b',
  '1c',
  '1d',
  '1e',
  '1f',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '2a',
  '2b',
  '2c',
  '2d',
  '2e',
  '2f',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '3a',
  '3b',
  '3c',
  '3d',
  '3e',
  '3f',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '4a',
  '4b',
  '4c',
  '4d',
  '4e',
  '4f',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '5a',
  '5b',
  '5c',
  '5d',
  '5e',
  '5f',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '6a',
  '6b',
  '6c',
  '6d',
  '6e',
  '6f',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '7a',
  '7b',
  '7c',
  '7d',
  '7e',
  '7f',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '88',
  '89',
  '8a',
  '8b',
  '8c',
  '8d',
  '8e',
  '8f',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99',
  '9a',
  '9b',
  '9c',
  '9d',
  '9e',
  '9f',
  'a0',
  'a1',
  'a2',
  'a3',
  'a4',
  'a5',
  'a6',
  'a7',
  'a8',
  'a9',
  'aa',
  'ab',
  'ac',
  'ad',
  'ae',
  'af',
  'b0',
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'b6',
  'b7',
  'b8',
  'b9',
  'ba',
  'bb',
  'bc',
  'bd',
  'be',
  'bf',
  'c0',
  'c1',
  'c2',
  'c3',
  'c4',
  'c5',
  'c6',
  'c7',
  'c8',
  'c9',
  'ca',
  'cb',
  'cc',
  'cd',
  'ce',
  'cf',
  'd0',
  'd1',
  'd2',
  'd3',
  'd4',
  'd5',
  'd6',
  'd7',
  'd8',
  'd9',
  'da',
  'db',
  'dc',
  'dd',
  'de',
  'df',
  'e0',
  'e1',
  'e2',
  'e3',
  'e4',
  'e5',
  'e6',
  'e7',
  'e8',
  'e9',
  'ea',
  'eb',
  'ec',
  'ed',
  'ee',
  'ef',
  'f0',
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'f6',
  'f7',
  'f8',
  'f9',
  'fa',
  'fb',
  'fc',
  'fd',
  'fe',
  'ff',
];
let Bh = 1234567;
const vo = Math.PI / 180,
  ka = 180 / Math.PI;
function xi() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Nt[i & 255] +
    Nt[(i >> 8) & 255] +
    Nt[(i >> 16) & 255] +
    Nt[(i >> 24) & 255] +
    '-' +
    Nt[e & 255] +
    Nt[(e >> 8) & 255] +
    '-' +
    Nt[((e >> 16) & 15) | 64] +
    Nt[(e >> 24) & 255] +
    '-' +
    Nt[(t & 63) | 128] +
    Nt[(t >> 8) & 255] +
    '-' +
    Nt[(t >> 16) & 255] +
    Nt[(t >> 24) & 255] +
    Nt[n & 255] +
    Nt[(n >> 8) & 255] +
    Nt[(n >> 16) & 255] +
    Nt[(n >> 24) & 255]
  ).toLowerCase();
}
function Pt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Fu(i, e) {
  return ((i % e) + e) % e;
}
function Oy(i, e, t, n, r) {
  return n + ((i - e) * (r - n)) / (t - e);
}
function Fy(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function yo(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ny(i, e, t, n) {
  return yo(i, e, 1 - Math.exp(-t * n));
}
function zy(i, e = 1) {
  return e - Math.abs(Fu(i, e * 2) - e);
}
function Uy(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function By(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function ky(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function Vy(i, e) {
  return i + Math.random() * (e - i);
}
function Gy(i) {
  return i * (0.5 - Math.random());
}
function Hy(i) {
  i !== void 0 && (Bh = i);
  let e = (Bh += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Wy(i) {
  return i * vo;
}
function qy(i) {
  return i * ka;
}
function qc(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function Xy(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Va(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function jy(i, e, t, n, r) {
  const s = Math.cos,
    o = Math.sin,
    a = s(t / 2),
    l = o(t / 2),
    c = s((e + n) / 2),
    u = o((e + n) / 2),
    f = s((e - n) / 2),
    h = o((e - n) / 2),
    d = s((n - e) / 2),
    g = o((n - e) / 2);
  switch (r) {
    case 'XYX':
      i.set(a * u, l * f, l * h, a * c);
      break;
    case 'YZY':
      i.set(l * h, a * u, l * f, a * c);
      break;
    case 'ZXZ':
      i.set(l * f, l * h, a * u, a * c);
      break;
    case 'XZX':
      i.set(a * u, l * g, l * d, a * c);
      break;
    case 'YXY':
      i.set(l * d, a * u, l * g, a * c);
      break;
    case 'ZYZ':
      i.set(l * g, l * d, a * u, a * c);
      break;
    default:
      console.warn(
        'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' +
          r
      );
  }
}
function pi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function et(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
var kh = Object.freeze({
  __proto__: null,
  DEG2RAD: vo,
  RAD2DEG: ka,
  generateUUID: xi,
  clamp: Pt,
  euclideanModulo: Fu,
  mapLinear: Oy,
  inverseLerp: Fy,
  lerp: yo,
  damp: Ny,
  pingpong: zy,
  smoothstep: Uy,
  smootherstep: By,
  randInt: ky,
  randFloat: Vy,
  randFloatSpread: Gy,
  seededRandom: Hy,
  degToRad: Wy,
  radToDeg: qy,
  isPowerOfTwo: qc,
  ceilPowerOfTwo: Xy,
  floorPowerOfTwo: Va,
  setQuaternionFromProperEuler: jy,
  normalize: et,
  denormalize: pi,
});
class De {
  constructor(e = 0, t = 0) {
    (De.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * r + e.x), (this.y = s * r + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class yn {
  constructor() {
    (yn.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      f = n[7],
      h = n[2],
      d = n[5],
      g = n[8],
      p = r[0],
      m = r[3],
      _ = r[6],
      x = r[1],
      v = r[4],
      y = r[7],
      b = r[2],
      T = r[5],
      R = r[8];
    return (
      (s[0] = o * p + a * x + l * b),
      (s[3] = o * m + a * v + l * T),
      (s[6] = o * _ + a * y + l * R),
      (s[1] = c * p + u * x + f * b),
      (s[4] = c * m + u * v + f * T),
      (s[7] = c * _ + u * y + f * R),
      (s[2] = h * p + d * x + g * b),
      (s[5] = h * m + d * v + g * T),
      (s[8] = h * _ + d * y + g * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = u * o - a * c,
      h = a * l - u * s,
      d = c * s - o * l,
      g = t * f + n * h + r * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return (
      (e[0] = f * p),
      (e[1] = (r * c - u * n) * p),
      (e[2] = (a * n - r * o) * p),
      (e[3] = h * p),
      (e[4] = (u * t - r * l) * p),
      (e[5] = (r * s - a * t) * p),
      (e[6] = d * p),
      (e[7] = (n * l - c * t) * p),
      (e[8] = (o * t - n * s) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * o + c * a) + o + e,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      r = this.elements,
      s = r[0],
      o = r[3],
      a = r[6],
      l = r[1],
      c = r[4],
      u = r[7];
    return (
      (r[0] = t * s + n * l),
      (r[3] = t * o + n * c),
      (r[6] = t * a + n * u),
      (r[1] = -n * s + t * l),
      (r[4] = -n * o + t * c),
      (r[7] = -n * a + t * u),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function Sm(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Fo(i) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', i);
}
function Er(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Pa(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const Nl = { [ui]: { [Mr]: Er }, [Mr]: { [ui]: Pa } },
  Pn = {
    legacyMode: !0,
    get workingColorSpace() {
      return Mr;
    },
    set workingColorSpace(i) {
      console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
    },
    convert: function (i, e, t) {
      if (this.legacyMode || e === t || !e || !t) return i;
      if (Nl[e] && Nl[e][t] !== void 0) {
        const n = Nl[e][t];
        return (i.r = n(i.r)), (i.g = n(i.g)), (i.b = n(i.b)), i;
      }
      throw new Error('Unsupported color space conversion.');
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this.workingColorSpace);
    },
  },
  wm = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  xt = { r: 0, g: 0, b: 0 },
  Rn = { h: 0, s: 0, l: 0 },
  Jo = { h: 0, s: 0, l: 0 };
function zl(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
function Qo(i, e) {
  return (e.r = i.r), (e.g = i.g), (e.b = i.b), e;
}
class qe {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == 'number'
        ? this.setHex(e)
        : typeof e == 'string' && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = ui) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Pn.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = Mr) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Pn.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = Mr) {
    if (((e = Fu(e, 1)), (t = Pt(t, 0, 1)), (n = Pt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = zl(o, s, e + 1 / 3)),
        (this.g = zl(o, s, e)),
        (this.b = zl(o, s, e - 1 / 3));
    }
    return Pn.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = ui) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          'THREE.Color: Alpha component of ' + e + ' will be ignored.'
        );
    }
    let r;
    if ((r = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case 'rgb':
        case 'rgba':
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
              Pn.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
              Pn.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          break;
        case 'hsl':
        case 'hsla':
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const l = parseFloat(s[1]) / 360,
              c = parseFloat(s[2]) / 100,
              u = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          Pn.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          Pn.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = ui) {
    const n = wm[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn('THREE.Color: Unknown color ' + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Er(e.r)), (this.g = Er(e.g)), (this.b = Er(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Pa(e.r)), (this.g = Pa(e.g)), (this.b = Pa(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ui) {
    return (
      Pn.fromWorkingColorSpace(Qo(this, xt), e),
      (Pt(xt.r * 255, 0, 255) << 16) ^
        (Pt(xt.g * 255, 0, 255) << 8) ^
        (Pt(xt.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = ui) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Mr) {
    Pn.fromWorkingColorSpace(Qo(this, xt), t);
    const n = xt.r,
      r = xt.g,
      s = xt.b,
      o = Math.max(n, r, s),
      a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const f = o - a;
      switch (((c = u <= 0.5 ? f / (o + a) : f / (2 - o - a)), o)) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Mr) {
    return (
      Pn.fromWorkingColorSpace(Qo(this, xt), t),
      (e.r = xt.r),
      (e.g = xt.g),
      (e.b = xt.b),
      e
    );
  }
  getStyle(e = ui) {
    return (
      Pn.fromWorkingColorSpace(Qo(this, xt), e),
      e !== ui
        ? `color(${e} ${xt.r} ${xt.g} ${xt.b})`
        : `rgb(${(xt.r * 255) | 0},${(xt.g * 255) | 0},${(xt.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Rn),
      (Rn.h += e),
      (Rn.s += t),
      (Rn.l += n),
      this.setHSL(Rn.h, Rn.s, Rn.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Rn), e.getHSL(Jo);
    const n = yo(Rn.h, Jo.h, t),
      r = yo(Rn.s, Jo.s, t),
      s = yo(Rn.l, Jo.l, t);
    return this.setHSL(n, r, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
qe.NAMES = wm;
let jr;
class Tm {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      jr === void 0 && (jr = Fo('canvas')),
        (jr.width = e.width),
        (jr.height = e.height);
      const n = jr.getContext('2d');
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = jr);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
          e
        ),
        t.toDataURL('image/jpeg', 0.6))
      : t.toDataURL('image/png');
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
    ) {
      const t = Fo('canvas');
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext('2d');
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Er(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Er(t[n] / 255) * 255))
          : (t[n] = Er(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'
        ),
        e
      );
  }
}
class Em {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = xi()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: '' },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(Ul(r[o].image)) : s.push(Ul(r[o]));
      } else s = Ul(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ul(i) {
  return (typeof HTMLImageElement < 'u' && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && i instanceof ImageBitmap)
    ? Tm.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let $y = 0;
class un extends Br {
  constructor(
    e = un.DEFAULT_IMAGE,
    t = un.DEFAULT_MAPPING,
    n = On,
    r = On,
    s = vn,
    o = cl,
    a = Fn,
    l = Dr,
    c = 1,
    u = Ir
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: $y++ }),
      (this.uuid = xi()),
      (this.name = ''),
      (this.source = new Em(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new De(0, 0)),
      (this.repeat = new De(1, 1)),
      (this.center = new De(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new yn()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== '{}' && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(e) {
    if (this.mapping !== ym) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Vc:
          e.x = e.x - Math.floor(e.x);
          break;
        case On:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Gc:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Vc:
          e.y = e.y - Math.floor(e.y);
          break;
        case On:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Gc:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
un.DEFAULT_IMAGE = null;
un.DEFAULT_MAPPING = ym;
class Dt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (Dt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      f = l[8],
      h = l[1],
      d = l[5],
      g = l[9],
      p = l[2],
      m = l[6],
      _ = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(f - p) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(f + p) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(c + d + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2,
        y = (d + 1) / 2,
        b = (_ + 1) / 2,
        T = (u + h) / 4,
        R = (f + p) / 4,
        M = (g + m) / 4;
      return (
        v > y && v > b
          ? v < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(v)), (r = T / n), (s = R / n))
          : y > b
          ? y < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(y)), (n = T / r), (s = M / r))
          : b < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(b)), (n = R / s), (r = M / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let x = Math.sqrt(
      (m - g) * (m - g) + (f - p) * (f - p) + (h - u) * (h - u)
    );
    return (
      Math.abs(x) < 0.001 && (x = 1),
      (this.x = (m - g) / x),
      (this.y = (f - p) / x),
      (this.z = (h - u) / x),
      (this.w = Math.acos((c + d + _ - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Or extends Br {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Dt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Dt(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    (this.texture = new un(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : vn),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Em(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
class Am extends un {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = Yt),
      (this.minFilter = Yt),
      (this.wrapR = On),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Yy extends un {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = Yt),
      (this.minFilter = Yt),
      (this.wrapR = On),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Yi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      f = n[r + 3];
    const h = s[o + 0],
      d = s[o + 1],
      g = s[o + 2],
      p = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
      return;
    }
    if (a === 1) {
      (e[t + 0] = h), (e[t + 1] = d), (e[t + 2] = g), (e[t + 3] = p);
      return;
    }
    if (f !== p || l !== h || c !== d || u !== g) {
      let m = 1 - a;
      const _ = l * h + c * d + u * g + f * p,
        x = _ >= 0 ? 1 : -1,
        v = 1 - _ * _;
      if (v > Number.EPSILON) {
        const b = Math.sqrt(v),
          T = Math.atan2(b, _ * x);
        (m = Math.sin(m * T) / b), (a = Math.sin(a * T) / b);
      }
      const y = a * x;
      if (
        ((l = l * m + h * y),
        (c = c * m + d * y),
        (u = u * m + g * y),
        (f = f * m + p * y),
        m === 1 - a)
      ) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        (l *= b), (c *= b), (u *= b), (f *= b);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      f = s[o],
      h = s[o + 1],
      d = s[o + 2],
      g = s[o + 3];
    return (
      (e[t] = a * g + u * f + l * d - c * h),
      (e[t + 1] = l * g + u * h + c * f - a * d),
      (e[t + 2] = c * g + u * d + a * h - l * f),
      (e[t + 3] = u * g - a * f - l * h - c * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      u = a(r / 2),
      f = a(s / 2),
      h = l(n / 2),
      d = l(r / 2),
      g = l(s / 2);
    switch (o) {
      case 'XYZ':
        (this._x = h * u * f + c * d * g),
          (this._y = c * d * f - h * u * g),
          (this._z = c * u * g + h * d * f),
          (this._w = c * u * f - h * d * g);
        break;
      case 'YXZ':
        (this._x = h * u * f + c * d * g),
          (this._y = c * d * f - h * u * g),
          (this._z = c * u * g - h * d * f),
          (this._w = c * u * f + h * d * g);
        break;
      case 'ZXY':
        (this._x = h * u * f - c * d * g),
          (this._y = c * d * f + h * u * g),
          (this._z = c * u * g + h * d * f),
          (this._w = c * u * f - h * d * g);
        break;
      case 'ZYX':
        (this._x = h * u * f - c * d * g),
          (this._y = c * d * f + h * u * g),
          (this._z = c * u * g - h * d * f),
          (this._w = c * u * f + h * d * g);
        break;
      case 'YZX':
        (this._x = h * u * f + c * d * g),
          (this._y = c * d * f + h * u * g),
          (this._z = c * u * g - h * d * f),
          (this._w = c * u * f - h * d * g);
        break;
      case 'XZY':
        (this._x = h * u * f - c * d * g),
          (this._y = c * d * f - h * u * g),
          (this._z = c * u * g + h * d * f),
          (this._w = c * u * f + h * d * g);
        break;
      default:
        console.warn(
          'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      h = n + a + f;
    if (h > 0) {
      const d = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / d),
        (this._x = (u - l) * d),
        (this._y = (s - c) * d),
        (this._z = (o - r) * d);
    } else if (n > a && n > f) {
      const d = 2 * Math.sqrt(1 + n - a - f);
      (this._w = (u - l) / d),
        (this._x = 0.25 * d),
        (this._y = (r + o) / d),
        (this._z = (s + c) / d);
    } else if (a > f) {
      const d = 2 * Math.sqrt(1 + a - n - f);
      (this._w = (s - c) / d),
        (this._x = (r + o) / d),
        (this._y = 0.25 * d),
        (this._z = (l + u) / d);
    } else {
      const d = 2 * Math.sqrt(1 + f - n - a);
      (this._w = (o - r) / d),
        (this._x = (s + c) / d),
        (this._y = (l + u) / d),
        (this._z = 0.25 * d);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Pt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - n * c),
      (this._z = s * u + o * c + n * l - r * a),
      (this._w = o * u - n * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return (
        (this._w = d * o + t * this._w),
        (this._x = d * n + t * this._x),
        (this._y = d * r + t * this._y),
        (this._z = d * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      f = Math.sin((1 - t) * u) / c,
      h = Math.sin(t * u) / c;
    return (
      (this._w = o * f + this._w * h),
      (this._x = n * f + this._x * h),
      (this._y = r * f + this._y * h),
      (this._z = s * f + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, n = 0) {
    (N.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Vh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Vh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * r - a * n,
      u = l * n + a * t - s * r,
      f = l * r + s * n - o * t,
      h = -s * t - o * n - a * r;
    return (
      (this.x = c * l + h * -s + u * -a - f * -o),
      (this.y = u * l + h * -o + f * -s - c * -a),
      (this.z = f * l + h * -a + c * -o - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - n * l),
      (this.z = n * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Bl.copy(this).projectOnVector(e), this.sub(Bl);
  }
  reflect(e) {
    return this.sub(Bl.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Pt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Bl = new N(),
  Vh = new Yi();
class Ho {
  constructor(
    e = new N(1 / 0, 1 / 0, 1 / 0),
    t = new N(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      r = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l],
        f = e[l + 1],
        h = e[l + 2];
      u < t && (t = u),
        f < n && (n = f),
        h < r && (r = h),
        u > s && (s = u),
        f > o && (o = f),
        h > a && (a = h);
    }
    return this.min.set(t, n, r), this.max.set(s, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      r = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l),
        f = e.getY(l),
        h = e.getZ(l);
      u < t && (t = u),
        f < n && (n = f),
        h < r && (r = h),
        u > s && (s = u),
        f > o && (o = f),
        h > a && (a = h);
    }
    return this.min.set(t, n, r), this.max.set(s, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = sr.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, a = s.count; o < a; o++)
          sr.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(sr);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          kl.copy(n.boundingBox),
          kl.applyMatrix4(e.matrixWorld),
          this.union(kl);
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, sr),
      sr.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(to),
      ea.subVectors(this.max, to),
      $r.subVectors(e.a, to),
      Yr.subVectors(e.b, to),
      Zr.subVectors(e.c, to),
      Ai.subVectors(Yr, $r),
      Ci.subVectors(Zr, Yr),
      or.subVectors($r, Zr);
    let t = [
      0,
      -Ai.z,
      Ai.y,
      0,
      -Ci.z,
      Ci.y,
      0,
      -or.z,
      or.y,
      Ai.z,
      0,
      -Ai.x,
      Ci.z,
      0,
      -Ci.x,
      or.z,
      0,
      -or.x,
      -Ai.y,
      Ai.x,
      0,
      -Ci.y,
      Ci.x,
      0,
      -or.y,
      or.x,
      0,
    ];
    return !Vl(t, $r, Yr, Zr, ea) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Vl(t, $r, Yr, Zr, ea))
      ? !1
      : (ta.crossVectors(Ai, Ci),
        (t = [ta.x, ta.y, ta.z]),
        Vl(t, $r, Yr, Zr, ea));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return sr.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(sr).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (ri[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        ri[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        ri[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        ri[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        ri[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        ri[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        ri[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        ri[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(ri),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const ri = [
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
  ],
  sr = new N(),
  kl = new Ho(),
  $r = new N(),
  Yr = new N(),
  Zr = new N(),
  Ai = new N(),
  Ci = new N(),
  or = new N(),
  to = new N(),
  ea = new N(),
  ta = new N(),
  ar = new N();
function Vl(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    ar.fromArray(i, s);
    const a =
        r.x * Math.abs(ar.x) + r.y * Math.abs(ar.y) + r.z * Math.abs(ar.z),
      l = e.dot(ar),
      c = t.dot(ar),
      u = n.dot(ar);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const Zy = new Ho(),
  no = new N(),
  Gl = new N();
class Wo {
  constructor(e = new N(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Zy.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    no.subVectors(e, this.center);
    const t = no.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(no, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Gl.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(no.copy(e.center).add(Gl)),
            this.expandByPoint(no.copy(e.center).sub(Gl))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const si = new N(),
  Hl = new N(),
  na = new N(),
  Pi = new N(),
  Wl = new N(),
  ia = new N(),
  ql = new N();
class Nu {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, si)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = si.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (si.copy(this.direction).multiplyScalar(t).add(this.origin),
        si.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Hl.copy(e).add(t).multiplyScalar(0.5),
      na.copy(t).sub(e).normalize(),
      Pi.copy(this.origin).sub(Hl);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(na),
      a = Pi.dot(this.direction),
      l = -Pi.dot(na),
      c = Pi.lengthSq(),
      u = Math.abs(1 - o * o);
    let f, h, d, g;
    if (u > 0)
      if (((f = o * l - a), (h = o * a - l), (g = s * u), f >= 0))
        if (h >= -g)
          if (h <= g) {
            const p = 1 / u;
            (f *= p),
              (h *= p),
              (d = f * (f + o * h + 2 * a) + h * (o * f + h + 2 * l) + c);
          } else
            (h = s),
              (f = Math.max(0, -(o * h + a))),
              (d = -f * f + h * (h + 2 * l) + c);
        else
          (h = -s),
            (f = Math.max(0, -(o * h + a))),
            (d = -f * f + h * (h + 2 * l) + c);
      else
        h <= -g
          ? ((f = Math.max(0, -(-o * s + a))),
            (h = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (d = -f * f + h * (h + 2 * l) + c))
          : h <= g
          ? ((f = 0),
            (h = Math.min(Math.max(-s, -l), s)),
            (d = h * (h + 2 * l) + c))
          : ((f = Math.max(0, -(o * s + a))),
            (h = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (d = -f * f + h * (h + 2 * l) + c));
    else
      (h = o > 0 ? -s : s),
        (f = Math.max(0, -(o * h + a))),
        (d = -f * f + h * (h + 2 * l) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(f).add(this.origin),
      r && r.copy(na).multiplyScalar(h).add(Hl),
      d
    );
  }
  intersectSphere(e, t) {
    si.subVectors(e.center, this.origin);
    const n = si.dot(this.direction),
      r = si.dot(si) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = n - o,
      l = n + o;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - h.x) * c), (r = (e.max.x - h.x) * c))
        : ((n = (e.max.x - h.x) * c), (r = (e.min.x - h.x) * c)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (o = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (o = (e.min.y - h.y) * u)),
      n > o ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (o < r || isNaN(r)) && (r = o),
      f >= 0
        ? ((a = (e.min.z - h.z) * f), (l = (e.max.z - h.z) * f))
        : ((a = (e.max.z - h.z) * f), (l = (e.min.z - h.z) * f)),
      n > l || a > r) ||
      ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, si) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Wl.subVectors(t, e), ia.subVectors(n, e), ql.crossVectors(Wl, ia);
    let o = this.direction.dot(ql),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Pi.subVectors(this.origin, e);
    const l = a * this.direction.dot(ia.crossVectors(Pi, ia));
    if (l < 0) return null;
    const c = a * this.direction.dot(Wl.cross(Pi));
    if (c < 0 || l + c > o) return null;
    const u = -a * Pi.dot(ql);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ht {
  constructor() {
    (ht.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, r, s, o, a, l, c, u, f, h, d, g, p, m) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = n),
      (_[12] = r),
      (_[1] = s),
      (_[5] = o),
      (_[9] = a),
      (_[13] = l),
      (_[2] = c),
      (_[6] = u),
      (_[10] = f),
      (_[14] = h),
      (_[3] = d),
      (_[7] = g),
      (_[11] = p),
      (_[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ht().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Kr.setFromMatrixColumn(e, 0).length(),
      s = 1 / Kr.setFromMatrixColumn(e, 1).length(),
      o = 1 / Kr.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === 'XYZ') {
      const h = o * u,
        d = o * f,
        g = a * u,
        p = a * f;
      (t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = d + g * c),
        (t[5] = h - p * c),
        (t[9] = -a * l),
        (t[2] = p - h * c),
        (t[6] = g + d * c),
        (t[10] = o * l);
    } else if (e.order === 'YXZ') {
      const h = l * u,
        d = l * f,
        g = c * u,
        p = c * f;
      (t[0] = h + p * a),
        (t[4] = g * a - d),
        (t[8] = o * c),
        (t[1] = o * f),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = d * a - g),
        (t[6] = p + h * a),
        (t[10] = o * l);
    } else if (e.order === 'ZXY') {
      const h = l * u,
        d = l * f,
        g = c * u,
        p = c * f;
      (t[0] = h - p * a),
        (t[4] = -o * f),
        (t[8] = g + d * a),
        (t[1] = d + g * a),
        (t[5] = o * u),
        (t[9] = p - h * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === 'ZYX') {
      const h = o * u,
        d = o * f,
        g = a * u,
        p = a * f;
      (t[0] = l * u),
        (t[4] = g * c - d),
        (t[8] = h * c + p),
        (t[1] = l * f),
        (t[5] = p * c + h),
        (t[9] = d * c - g),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === 'YZX') {
      const h = o * l,
        d = o * c,
        g = a * l,
        p = a * c;
      (t[0] = l * u),
        (t[4] = p - h * f),
        (t[8] = g * f + d),
        (t[1] = f),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = d * f + g),
        (t[10] = h - p * f);
    } else if (e.order === 'XZY') {
      const h = o * l,
        d = o * c,
        g = a * l,
        p = a * c;
      (t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = h * f + p),
        (t[5] = o * u),
        (t[9] = d * f - g),
        (t[2] = g * f - d),
        (t[6] = a * u),
        (t[10] = p * f + h);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ky, e, Jy);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      nn.subVectors(e, t),
      nn.lengthSq() === 0 && (nn.z = 1),
      nn.normalize(),
      Ri.crossVectors(n, nn),
      Ri.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (nn.x += 1e-4) : (nn.z += 1e-4),
        nn.normalize(),
        Ri.crossVectors(n, nn)),
      Ri.normalize(),
      ra.crossVectors(nn, Ri),
      (r[0] = Ri.x),
      (r[4] = ra.x),
      (r[8] = nn.x),
      (r[1] = Ri.y),
      (r[5] = ra.y),
      (r[9] = nn.y),
      (r[2] = Ri.z),
      (r[6] = ra.z),
      (r[10] = nn.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      f = n[5],
      h = n[9],
      d = n[13],
      g = n[2],
      p = n[6],
      m = n[10],
      _ = n[14],
      x = n[3],
      v = n[7],
      y = n[11],
      b = n[15],
      T = r[0],
      R = r[4],
      M = r[8],
      w = r[12],
      D = r[1],
      q = r[5],
      Q = r[9],
      k = r[13],
      I = r[2],
      $ = r[6],
      Z = r[10],
      Y = r[14],
      V = r[3],
      z = r[7],
      H = r[11],
      ue = r[15];
    return (
      (s[0] = o * T + a * D + l * I + c * V),
      (s[4] = o * R + a * q + l * $ + c * z),
      (s[8] = o * M + a * Q + l * Z + c * H),
      (s[12] = o * w + a * k + l * Y + c * ue),
      (s[1] = u * T + f * D + h * I + d * V),
      (s[5] = u * R + f * q + h * $ + d * z),
      (s[9] = u * M + f * Q + h * Z + d * H),
      (s[13] = u * w + f * k + h * Y + d * ue),
      (s[2] = g * T + p * D + m * I + _ * V),
      (s[6] = g * R + p * q + m * $ + _ * z),
      (s[10] = g * M + p * Q + m * Z + _ * H),
      (s[14] = g * w + p * k + m * Y + _ * ue),
      (s[3] = x * T + v * D + y * I + b * V),
      (s[7] = x * R + v * q + y * $ + b * z),
      (s[11] = x * M + v * Q + y * Z + b * H),
      (s[15] = x * w + v * k + y * Y + b * ue),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      f = e[6],
      h = e[10],
      d = e[14],
      g = e[3],
      p = e[7],
      m = e[11],
      _ = e[15];
    return (
      g *
        (+s * l * f -
          r * c * f -
          s * a * h +
          n * c * h +
          r * a * d -
          n * l * d) +
      p *
        (+t * l * d -
          t * c * h +
          s * o * h -
          r * o * d +
          r * c * u -
          s * l * u) +
      m *
        (+t * c * f -
          t * a * d -
          s * o * f +
          n * o * d +
          s * a * u -
          n * c * u) +
      _ *
        (-r * a * u - t * l * f + t * a * h + r * o * f - n * o * h + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = e[9],
      h = e[10],
      d = e[11],
      g = e[12],
      p = e[13],
      m = e[14],
      _ = e[15],
      x = f * m * c - p * h * c + p * l * d - a * m * d - f * l * _ + a * h * _,
      v = g * h * c - u * m * c - g * l * d + o * m * d + u * l * _ - o * h * _,
      y = u * p * c - g * f * c + g * a * d - o * p * d - u * a * _ + o * f * _,
      b = g * f * l - u * p * l - g * a * h + o * p * h + u * a * m - o * f * m,
      T = t * x + n * v + r * y + s * b;
    if (T === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / T;
    return (
      (e[0] = x * R),
      (e[1] =
        (p * h * s -
          f * m * s -
          p * r * d +
          n * m * d +
          f * r * _ -
          n * h * _) *
        R),
      (e[2] =
        (a * m * s -
          p * l * s +
          p * r * c -
          n * m * c -
          a * r * _ +
          n * l * _) *
        R),
      (e[3] =
        (f * l * s -
          a * h * s -
          f * r * c +
          n * h * c +
          a * r * d -
          n * l * d) *
        R),
      (e[4] = v * R),
      (e[5] =
        (u * m * s -
          g * h * s +
          g * r * d -
          t * m * d -
          u * r * _ +
          t * h * _) *
        R),
      (e[6] =
        (g * l * s -
          o * m * s -
          g * r * c +
          t * m * c +
          o * r * _ -
          t * l * _) *
        R),
      (e[7] =
        (o * h * s -
          u * l * s +
          u * r * c -
          t * h * c -
          o * r * d +
          t * l * d) *
        R),
      (e[8] = y * R),
      (e[9] =
        (g * f * s -
          u * p * s -
          g * n * d +
          t * p * d +
          u * n * _ -
          t * f * _) *
        R),
      (e[10] =
        (o * p * s -
          g * a * s +
          g * n * c -
          t * p * c -
          o * n * _ +
          t * a * _) *
        R),
      (e[11] =
        (u * a * s -
          o * f * s -
          u * n * c +
          t * f * c +
          o * n * d -
          t * a * d) *
        R),
      (e[12] = b * R),
      (e[13] =
        (u * p * r -
          g * f * r +
          g * n * h -
          t * p * h -
          u * n * m +
          t * f * m) *
        R),
      (e[14] =
        (g * a * r -
          o * p * r -
          g * n * l +
          t * p * l +
          o * n * m -
          t * a * m) *
        R),
      (e[15] =
        (o * f * r -
          u * a * r +
          u * n * l -
          t * f * l -
          o * n * h +
          t * a * h) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + n,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + n,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      f = a + a,
      h = s * c,
      d = s * u,
      g = s * f,
      p = o * u,
      m = o * f,
      _ = a * f,
      x = l * c,
      v = l * u,
      y = l * f,
      b = n.x,
      T = n.y,
      R = n.z;
    return (
      (r[0] = (1 - (p + _)) * b),
      (r[1] = (d + y) * b),
      (r[2] = (g - v) * b),
      (r[3] = 0),
      (r[4] = (d - y) * T),
      (r[5] = (1 - (h + _)) * T),
      (r[6] = (m + x) * T),
      (r[7] = 0),
      (r[8] = (g + v) * R),
      (r[9] = (m - x) * R),
      (r[10] = (1 - (h + p)) * R),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Kr.set(r[0], r[1], r[2]).length();
    const o = Kr.set(r[4], r[5], r[6]).length(),
      a = Kr.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      Ln.copy(this);
    const c = 1 / s,
      u = 1 / o,
      f = 1 / a;
    return (
      (Ln.elements[0] *= c),
      (Ln.elements[1] *= c),
      (Ln.elements[2] *= c),
      (Ln.elements[4] *= u),
      (Ln.elements[5] *= u),
      (Ln.elements[6] *= u),
      (Ln.elements[8] *= f),
      (Ln.elements[9] *= f),
      (Ln.elements[10] *= f),
      t.setFromRotationMatrix(Ln),
      (n.x = s),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, r, s, o) {
    const a = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (n - r),
      u = (t + e) / (t - e),
      f = (n + r) / (n - r),
      h = -(o + s) / (o - s),
      d = (-2 * o * s) / (o - s);
    return (
      (a[0] = l),
      (a[4] = 0),
      (a[8] = u),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = c),
      (a[9] = f),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = h),
      (a[14] = d),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, o) {
    const a = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - r),
      u = 1 / (o - s),
      f = (t + e) * l,
      h = (n + r) * c,
      d = (o + s) * u;
    return (
      (a[0] = 2 * l),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -f),
      (a[1] = 0),
      (a[5] = 2 * c),
      (a[9] = 0),
      (a[13] = -h),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * u),
      (a[14] = -d),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Kr = new N(),
  Ln = new ht(),
  Ky = new N(0, 0, 0),
  Jy = new N(1, 1, 1),
  Ri = new N(),
  ra = new N(),
  nn = new N(),
  Gh = new ht(),
  Hh = new Yi();
class Ks {
  constructor(e = 0, t = 0, n = 0, r = Ks.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      f = r[2],
      h = r[6],
      d = r[10];
    switch (t) {
      case 'XYZ':
        (this._y = Math.asin(Pt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, d)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-Pt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(Pt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, d)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-Pt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, d)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(Pt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, d)));
        break;
      case 'XZY':
        (this._z = Math.asin(-Pt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, d)), (this._y = 0));
        break;
      default:
        console.warn(
          'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Gh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Gh, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Hh.setFromEuler(this), this.setFromQuaternion(Hh, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      'THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead'
    );
  }
}
Ks.DefaultOrder = 'XYZ';
Ks.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
class Cm {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Qy = 0;
const Wh = new N(),
  Jr = new Yi(),
  oi = new ht(),
  sa = new N(),
  io = new N(),
  eM = new N(),
  tM = new Yi(),
  qh = new N(1, 0, 0),
  Xh = new N(0, 1, 0),
  jh = new N(0, 0, 1),
  nM = { type: 'added' },
  $h = { type: 'removed' };
class It extends Br {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: Qy++ }),
      (this.uuid = xi()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = It.DefaultUp.clone());
    const e = new N(),
      t = new Ks(),
      n = new Yi(),
      r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new ht() },
        normalMatrix: { value: new yn() },
      }),
      (this.matrix = new ht()),
      (this.matrixWorld = new ht()),
      (this.matrixAutoUpdate = It.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = It.DefaultMatrixWorldAutoUpdate),
      (this.layers = new Cm()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Jr.setFromAxisAngle(e, t), this.quaternion.multiply(Jr), this;
  }
  rotateOnWorldAxis(e, t) {
    return Jr.setFromAxisAngle(e, t), this.quaternion.premultiply(Jr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(qh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Xh, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(jh, e);
  }
  translateOnAxis(e, t) {
    return (
      Wh.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Wh.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(qh, e);
  }
  translateY(e) {
    return this.translateOnAxis(Xh, e);
  }
  translateZ(e) {
    return this.translateOnAxis(jh, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(oi.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? sa.copy(e) : sa.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      io.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? oi.lookAt(io, sa, this.up)
        : oi.lookAt(sa, io, this.up),
      this.quaternion.setFromRotationMatrix(oi),
      r &&
        (oi.extractRotation(r.matrixWorld),
        Jr.setFromRotationMatrix(oi),
        this.quaternion.premultiply(Jr.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(nM))
          : console.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent($h)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent($h);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      oi.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), oi.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(oi),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty('id', e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty('name', e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(io, e, eM), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(io, tM, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string',
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: 'Object',
        generator: 'Object3D.toJSON',
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== '' && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== '{}' && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = 'InstancedMesh'),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        f = o(e.shapes),
        h = o(e.skeletons),
        d = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        f.length > 0 && (n.shapes = f),
        h.length > 0 && (n.skeletons = h),
        d.length > 0 && (n.animations = d),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = r), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
It.DefaultUp = new N(0, 1, 0);
It.DefaultMatrixAutoUpdate = !0;
It.DefaultMatrixWorldAutoUpdate = !0;
const Dn = new N(),
  ai = new N(),
  Xl = new N(),
  li = new N(),
  Qr = new N(),
  es = new N(),
  Yh = new N(),
  jl = new N(),
  $l = new N(),
  Yl = new N();
class Yn {
  constructor(e = new N(), t = new N(), n = new N()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Dn.subVectors(e, t), r.cross(Dn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Dn.subVectors(r, t), ai.subVectors(n, t), Xl.subVectors(e, t);
    const o = Dn.dot(Dn),
      a = Dn.dot(ai),
      l = Dn.dot(Xl),
      c = ai.dot(ai),
      u = ai.dot(Xl),
      f = o * c - a * a;
    if (f === 0) return s.set(-2, -1, -1);
    const h = 1 / f,
      d = (c * l - a * u) * h,
      g = (o * u - a * l) * h;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, r) {
    return (
      this.getBarycoord(e, t, n, r, li),
      li.x >= 0 && li.y >= 0 && li.x + li.y <= 1
    );
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return (
      this.getBarycoord(e, t, n, r, li),
      l.set(0, 0),
      l.addScaledVector(s, li.x),
      l.addScaledVector(o, li.y),
      l.addScaledVector(a, li.z),
      l
    );
  }
  static isFrontFacing(e, t, n, r) {
    return Dn.subVectors(n, t), ai.subVectors(e, t), Dn.cross(ai).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Dn.subVectors(this.c, this.b),
      ai.subVectors(this.a, this.b),
      Dn.cross(ai).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Yn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Yn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Yn.getUV(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Yn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Yn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    Qr.subVectors(r, n), es.subVectors(s, n), jl.subVectors(e, n);
    const l = Qr.dot(jl),
      c = es.dot(jl);
    if (l <= 0 && c <= 0) return t.copy(n);
    $l.subVectors(e, r);
    const u = Qr.dot($l),
      f = es.dot($l);
    if (u >= 0 && f <= u) return t.copy(r);
    const h = l * f - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(n).addScaledVector(Qr, o);
    Yl.subVectors(e, s);
    const d = Qr.dot(Yl),
      g = es.dot(Yl);
    if (g >= 0 && d <= g) return t.copy(s);
    const p = d * c - l * g;
    if (p <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), t.copy(n).addScaledVector(es, a);
    const m = u * g - d * f;
    if (m <= 0 && f - u >= 0 && d - g >= 0)
      return (
        Yh.subVectors(s, r),
        (a = (f - u) / (f - u + (d - g))),
        t.copy(r).addScaledVector(Yh, a)
      );
    const _ = 1 / (m + p + h);
    return (
      (o = p * _),
      (a = h * _),
      t.copy(n).addScaledVector(Qr, o).addScaledVector(es, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let iM = 0;
class Ji extends Br {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: iM++ }),
      (this.uuid = xi()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = Ss),
      (this.side = Fs),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = _m),
      (this.blendDst = xm),
      (this.blendEquation = ps),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Uc),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Iy),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Fl),
      (this.stencilZFail = Fl),
      (this.stencilZPass = Fl),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            'THREE.' +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: 'Material',
        generator: 'Material.toJSON',
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== '' && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Ss && (n.blending = this.blending),
      this.side !== Fs && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== '{}' && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures),
        o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Mo extends Ji {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = vm),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const mt = new N(),
  oa = new De();
class An {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        'THREE.BufferAttribute: array should be a Typed Array.'
      );
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = Hc),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        oa.fromBufferAttribute(this, t),
          oa.applyMatrix3(e),
          this.setXY(t, oa.x, oa.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        mt.fromBufferAttribute(this, t),
          mt.applyMatrix3(e),
          this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t),
        mt.applyMatrix4(e),
        this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t),
        mt.applyNormalMatrix(e),
        this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t),
        mt.transformDirection(e),
        this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = et(t, this.array)), (n = et(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = et(t, this.array)),
        (n = et(n, this.array)),
        (r = et(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = et(t, this.array)),
        (n = et(n, this.array)),
        (r = et(r, this.array)),
        (s = et(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== '' && (e.name = this.name),
      this.usage !== Hc && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      'THREE.BufferAttribute: copyColorsArray() was removed in r144.'
    );
  }
  copyVector2sArray() {
    console.error(
      'THREE.BufferAttribute: copyVector2sArray() was removed in r144.'
    );
  }
  copyVector3sArray() {
    console.error(
      'THREE.BufferAttribute: copyVector3sArray() was removed in r144.'
    );
  }
  copyVector4sArray() {
    console.error(
      'THREE.BufferAttribute: copyVector4sArray() was removed in r144.'
    );
  }
}
class Pm extends An {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Rm extends An {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ot extends An {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let rM = 0;
const gn = new ht(),
  Zl = new It(),
  ts = new N(),
  rn = new Ho(),
  ro = new Ho(),
  wt = new N();
class jt extends Br {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: rM++ }),
      (this.uuid = xi()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Sm(e) ? Rm : Pm)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new yn().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return gn.makeRotationFromQuaternion(e), this.applyMatrix4(gn), this;
  }
  rotateX(e) {
    return gn.makeRotationX(e), this.applyMatrix4(gn), this;
  }
  rotateY(e) {
    return gn.makeRotationY(e), this.applyMatrix4(gn), this;
  }
  rotateZ(e) {
    return gn.makeRotationZ(e), this.applyMatrix4(gn), this;
  }
  translate(e, t, n) {
    return gn.makeTranslation(e, t, n), this.applyMatrix4(gn), this;
  }
  scale(e, t, n) {
    return gn.makeScale(e, t, n), this.applyMatrix4(gn), this;
  }
  lookAt(e) {
    return Zl.lookAt(e), Zl.updateMatrix(), this.applyMatrix4(Zl.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(ts).negate(),
      this.translate(ts.x, ts.y, ts.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute('position', new Ot(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ho());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new N(-1 / 0, -1 / 0, -1 / 0),
          new N(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          rn.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (wt.addVectors(this.boundingBox.min, rn.min),
                this.boundingBox.expandByPoint(wt),
                wt.addVectors(this.boundingBox.max, rn.max),
                this.boundingBox.expandByPoint(wt))
              : (this.boundingBox.expandByPoint(rn.min),
                this.boundingBox.expandByPoint(rn.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Wo());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((rn.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ro.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (wt.addVectors(rn.min, ro.min),
                rn.expandByPoint(wt),
                wt.addVectors(rn.max, ro.max),
                rn.expandByPoint(wt))
              : (rn.expandByPoint(ro.min), rn.expandByPoint(ro.max));
        }
      rn.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        wt.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(wt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            wt.fromBufferAttribute(a, c),
              l && (ts.fromBufferAttribute(e, c), wt.add(ts)),
              (r = Math.max(r, n.distanceToSquared(wt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)'
      );
      return;
    }
    const n = e.array,
      r = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = r.length / 3;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new An(new Float32Array(4 * a), 4));
    const l = this.getAttribute('tangent').array,
      c = [],
      u = [];
    for (let D = 0; D < a; D++) (c[D] = new N()), (u[D] = new N());
    const f = new N(),
      h = new N(),
      d = new N(),
      g = new De(),
      p = new De(),
      m = new De(),
      _ = new N(),
      x = new N();
    function v(D, q, Q) {
      f.fromArray(r, D * 3),
        h.fromArray(r, q * 3),
        d.fromArray(r, Q * 3),
        g.fromArray(o, D * 2),
        p.fromArray(o, q * 2),
        m.fromArray(o, Q * 2),
        h.sub(f),
        d.sub(f),
        p.sub(g),
        m.sub(g);
      const k = 1 / (p.x * m.y - m.x * p.y);
      !isFinite(k) ||
        (_.copy(h)
          .multiplyScalar(m.y)
          .addScaledVector(d, -p.y)
          .multiplyScalar(k),
        x
          .copy(d)
          .multiplyScalar(p.x)
          .addScaledVector(h, -m.x)
          .multiplyScalar(k),
        c[D].add(_),
        c[q].add(_),
        c[Q].add(_),
        u[D].add(x),
        u[q].add(x),
        u[Q].add(x));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: n.length }]);
    for (let D = 0, q = y.length; D < q; ++D) {
      const Q = y[D],
        k = Q.start,
        I = Q.count;
      for (let $ = k, Z = k + I; $ < Z; $ += 3) v(n[$ + 0], n[$ + 1], n[$ + 2]);
    }
    const b = new N(),
      T = new N(),
      R = new N(),
      M = new N();
    function w(D) {
      R.fromArray(s, D * 3), M.copy(R);
      const q = c[D];
      b.copy(q),
        b.sub(R.multiplyScalar(R.dot(q))).normalize(),
        T.crossVectors(M, q);
      const k = T.dot(u[D]) < 0 ? -1 : 1;
      (l[D * 4] = b.x),
        (l[D * 4 + 1] = b.y),
        (l[D * 4 + 2] = b.z),
        (l[D * 4 + 3] = k);
    }
    for (let D = 0, q = y.length; D < q; ++D) {
      const Q = y[D],
        k = Q.start,
        I = Q.count;
      for (let $ = k, Z = k + I; $ < Z; $ += 3)
        w(n[$ + 0]), w(n[$ + 1]), w(n[$ + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let n = this.getAttribute('normal');
      if (n === void 0)
        (n = new An(new Float32Array(t.count * 3), 3)),
          this.setAttribute('normal', n);
      else for (let h = 0, d = n.count; h < d; h++) n.setXYZ(h, 0, 0, 0);
      const r = new N(),
        s = new N(),
        o = new N(),
        a = new N(),
        l = new N(),
        c = new N(),
        u = new N(),
        f = new N();
      if (e)
        for (let h = 0, d = e.count; h < d; h += 3) {
          const g = e.getX(h + 0),
            p = e.getX(h + 1),
            m = e.getX(h + 2);
          r.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, p),
            o.fromBufferAttribute(t, m),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            a.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, p),
            c.fromBufferAttribute(n, m),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(p, l.x, l.y, l.z),
            n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let h = 0, d = t.count; h < d; h += 3)
          r.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            o.fromBufferAttribute(t, h + 2),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            n.setXYZ(h + 0, u.x, u.y, u.z),
            n.setXYZ(h + 1, u.x, u.y, u.z),
            n.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        'THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead.'
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      wt.fromBufferAttribute(e, t),
        wt.normalize(),
        e.setXYZ(t, wt.x, wt.y, wt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        f = a.normalized,
        h = new c.constructor(l.length * u);
      let d = 0,
        g = 0;
      for (let p = 0, m = l.length; p < m; p++) {
        a.isInterleavedBufferAttribute
          ? (d = l[p] * a.data.stride + a.offset)
          : (d = l[p] * u);
        for (let _ = 0; _ < u; _++) h[g++] = c[d++];
      }
      return new An(h, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
        ),
        this
      );
    const t = new jt(),
      n = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const h = c[u],
          d = e(h, n);
        l.push(d);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: 'BufferGeometry',
        generator: 'BufferGeometry.toJSON',
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== '' && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let f = 0, h = c.length; f < h; f++) {
        const d = c[f];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        f = s[c];
      for (let h = 0, d = f.length; h < d; h++) u.push(f[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
const Zh = new ht(),
  ns = new Nu(),
  Kl = new Wo(),
  Li = new N(),
  Di = new N(),
  Ii = new N(),
  Jl = new N(),
  Ql = new N(),
  ec = new N(),
  aa = new N(),
  la = new N(),
  ca = new N(),
  ua = new De(),
  fa = new De(),
  ha = new De(),
  tc = new N(),
  da = new N();
class Mn extends It {
  constructor(e = new jt(), t = new Mo()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    if (
      r === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Kl.copy(n.boundingSphere),
      Kl.applyMatrix4(s),
      e.ray.intersectsSphere(Kl) === !1) ||
      (Zh.copy(s).invert(),
      ns.copy(e.ray).applyMatrix4(Zh),
      n.boundingBox !== null && ns.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const a = n.index,
      l = n.attributes.position,
      c = n.morphAttributes.position,
      u = n.morphTargetsRelative,
      f = n.attributes.uv,
      h = n.attributes.uv2,
      d = n.groups,
      g = n.drawRange;
    if (a !== null)
      if (Array.isArray(r))
        for (let p = 0, m = d.length; p < m; p++) {
          const _ = d[p],
            x = r[_.materialIndex],
            v = Math.max(_.start, g.start),
            y = Math.min(
              a.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let b = v, T = y; b < T; b += 3) {
            const R = a.getX(b),
              M = a.getX(b + 1),
              w = a.getX(b + 2);
            (o = pa(this, x, e, ns, l, c, u, f, h, R, M, w)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start),
          m = Math.min(a.count, g.start + g.count);
        for (let _ = p, x = m; _ < x; _ += 3) {
          const v = a.getX(_),
            y = a.getX(_ + 1),
            b = a.getX(_ + 2);
          (o = pa(this, r, e, ns, l, c, u, f, h, v, y, b)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(r))
        for (let p = 0, m = d.length; p < m; p++) {
          const _ = d[p],
            x = r[_.materialIndex],
            v = Math.max(_.start, g.start),
            y = Math.min(
              l.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let b = v, T = y; b < T; b += 3) {
            const R = b,
              M = b + 1,
              w = b + 2;
            (o = pa(this, x, e, ns, l, c, u, f, h, R, M, w)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start),
          m = Math.min(l.count, g.start + g.count);
        for (let _ = p, x = m; _ < x; _ += 3) {
          const v = _,
            y = _ + 1,
            b = _ + 2;
          (o = pa(this, r, e, ns, l, c, u, f, h, v, y, b)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
  }
}
function sM(i, e, t, n, r, s, o, a) {
  let l;
  if (
    (e.side === En
      ? (l = n.intersectTriangle(o, s, r, !0, a))
      : (l = n.intersectTriangle(r, s, o, e.side !== di, a)),
    l === null)
  )
    return null;
  da.copy(a), da.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(da);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: da.clone(), object: i };
}
function pa(i, e, t, n, r, s, o, a, l, c, u, f) {
  Li.fromBufferAttribute(r, c),
    Di.fromBufferAttribute(r, u),
    Ii.fromBufferAttribute(r, f);
  const h = i.morphTargetInfluences;
  if (s && h) {
    aa.set(0, 0, 0), la.set(0, 0, 0), ca.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const m = h[g],
        _ = s[g];
      m !== 0 &&
        (Jl.fromBufferAttribute(_, c),
        Ql.fromBufferAttribute(_, u),
        ec.fromBufferAttribute(_, f),
        o
          ? (aa.addScaledVector(Jl, m),
            la.addScaledVector(Ql, m),
            ca.addScaledVector(ec, m))
          : (aa.addScaledVector(Jl.sub(Li), m),
            la.addScaledVector(Ql.sub(Di), m),
            ca.addScaledVector(ec.sub(Ii), m)));
    }
    Li.add(aa), Di.add(la), Ii.add(ca);
  }
  i.isSkinnedMesh &&
    (i.boneTransform(c, Li), i.boneTransform(u, Di), i.boneTransform(f, Ii));
  const d = sM(i, e, t, n, Li, Di, Ii, tc);
  if (d) {
    a &&
      (ua.fromBufferAttribute(a, c),
      fa.fromBufferAttribute(a, u),
      ha.fromBufferAttribute(a, f),
      (d.uv = Yn.getUV(tc, Li, Di, Ii, ua, fa, ha, new De()))),
      l &&
        (ua.fromBufferAttribute(l, c),
        fa.fromBufferAttribute(l, u),
        ha.fromBufferAttribute(l, f),
        (d.uv2 = Yn.getUV(tc, Li, Di, Ii, ua, fa, ha, new De())));
    const g = { a: c, b: u, c: f, normal: new N(), materialIndex: 0 };
    Yn.getNormal(Li, Di, Ii, g.normal), (d.face = g);
  }
  return d;
}
class qo extends jt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      f = [];
    let h = 0,
      d = 0;
    g('z', 'y', 'x', -1, -1, n, t, e, o, s, 0),
      g('z', 'y', 'x', 1, -1, n, t, -e, o, s, 1),
      g('x', 'z', 'y', 1, 1, e, n, t, r, o, 2),
      g('x', 'z', 'y', 1, -1, e, n, -t, r, o, 3),
      g('x', 'y', 'z', 1, -1, e, t, n, r, s, 4),
      g('x', 'y', 'z', -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new Ot(c, 3)),
      this.setAttribute('normal', new Ot(u, 3)),
      this.setAttribute('uv', new Ot(f, 2));
    function g(p, m, _, x, v, y, b, T, R, M, w) {
      const D = y / R,
        q = b / M,
        Q = y / 2,
        k = b / 2,
        I = T / 2,
        $ = R + 1,
        Z = M + 1;
      let Y = 0,
        V = 0;
      const z = new N();
      for (let H = 0; H < Z; H++) {
        const ue = H * q - k;
        for (let te = 0; te < $; te++) {
          const de = te * D - Q;
          (z[p] = de * x),
            (z[m] = ue * v),
            (z[_] = I),
            c.push(z.x, z.y, z.z),
            (z[p] = 0),
            (z[m] = 0),
            (z[_] = T > 0 ? 1 : -1),
            u.push(z.x, z.y, z.z),
            f.push(te / R),
            f.push(1 - H / M),
            (Y += 1);
        }
      }
      for (let H = 0; H < M; H++)
        for (let ue = 0; ue < R; ue++) {
          const te = h + ue + $ * H,
            de = h + ue + $ * (H + 1),
            xe = h + (ue + 1) + $ * (H + 1),
            G = h + (ue + 1) + $ * H;
          l.push(te, de, G), l.push(de, xe, G), (V += 6);
        }
      a.addGroup(d, V, w), (d += V), (h += Y);
    }
  }
  static fromJSON(e) {
    return new qo(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Bs(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? (e[t][n] = r.clone())
        : Array.isArray(r)
        ? (e[t][n] = r.slice())
        : (e[t][n] = r);
    }
  }
  return e;
}
function Xt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Bs(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function oM(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
const aM = { clone: Bs, merge: Xt };
var lM = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  cM = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Fr extends Ji {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = lM),
      (this.fragmentShader = cM),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Bs(e.uniforms)),
      (this.uniformsGroups = oM(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture
        ? (t.uniforms[r] = { type: 't', value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[r] = { type: 'c', value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[r] = { type: 'v2', value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[r] = { type: 'v3', value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[r] = { type: 'v4', value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[r] = { type: 'm3', value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[r] = { type: 'm4', value: o.toArray() })
        : (t.uniforms[r] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Lm extends It {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new ht()),
      (this.projectionMatrix = new ht()),
      (this.projectionMatrixInverse = new ht());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class on extends Lm {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = ka * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(vo * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return ka * 2 * Math.atan(Math.tan(vo * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, r, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(vo * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (t -= (o.offsetY * n) / c),
        (r *= o.width / l),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const is = 90,
  rs = 1;
class uM extends It {
  constructor(e, t, n) {
    super(), (this.type = 'CubeCamera'), (this.renderTarget = n);
    const r = new on(is, rs, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new N(1, 0, 0)),
      this.add(r);
    const s = new on(is, rs, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new N(-1, 0, 0)),
      this.add(s);
    const o = new on(is, rs, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new N(0, 1, 0)),
      this.add(o);
    const a = new on(is, rs, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new N(0, -1, 0)),
      this.add(a);
    const l = new on(is, rs, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new N(0, 0, 1)),
      this.add(l);
    const c = new on(is, rs, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new N(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [r, s, o, a, l, c] = this.children,
      u = e.getRenderTarget(),
      f = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = _i), (e.xr.enabled = !1);
    const d = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, r),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = d),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = f),
      (e.xr.enabled = h),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Dm extends un {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Ns),
      super(e, t, n, r, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class fM extends Or {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new Dm(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : vn);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new qo(5, 5, 5),
      s = new Fr({
        name: 'CubemapFromEquirect',
        uniforms: Bs(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: En,
        blending: Hi,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Mn(r, s),
      a = t.minFilter;
    return (
      t.minFilter === cl && (t.minFilter = vn),
      new uM(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const nc = new N(),
  hM = new N(),
  dM = new yn();
class fr {
  constructor(e = new N(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = nc.subVectors(n, t).cross(hM.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(nc),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || dM.getNormalMatrix(e),
      r = this.coplanarPoint(nc).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ss = new Wo(),
  ma = new N();
class Im {
  constructor(
    e = new fr(),
    t = new fr(),
    n = new fr(),
    r = new fr(),
    s = new fr(),
    o = new fr()
  ) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      r = n[0],
      s = n[1],
      o = n[2],
      a = n[3],
      l = n[4],
      c = n[5],
      u = n[6],
      f = n[7],
      h = n[8],
      d = n[9],
      g = n[10],
      p = n[11],
      m = n[12],
      _ = n[13],
      x = n[14],
      v = n[15];
    return (
      t[0].setComponents(a - r, f - l, p - h, v - m).normalize(),
      t[1].setComponents(a + r, f + l, p + h, v + m).normalize(),
      t[2].setComponents(a + s, f + c, p + d, v + _).normalize(),
      t[3].setComponents(a - s, f - c, p - d, v - _).normalize(),
      t[4].setComponents(a - o, f - u, p - g, v - x).normalize(),
      t[5].setComponents(a + o, f + u, p + g, v + x).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(ss)
    );
  }
  intersectsSprite(e) {
    return (
      ss.center.set(0, 0, 0),
      (ss.radius = 0.7071067811865476),
      ss.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(ss)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((ma.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (ma.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (ma.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(ma) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Om() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, o) {
    t(s, o), (n = i.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function pM(i, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function r(c, u) {
    const f = c.array,
      h = c.usage,
      d = i.createBuffer();
    i.bindBuffer(u, d), i.bufferData(u, f, h), c.onUploadCallback();
    let g;
    if (f instanceof Float32Array) g = 5126;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.'
          );
      else g = 5123;
    else if (f instanceof Int16Array) g = 5122;
    else if (f instanceof Uint32Array) g = 5125;
    else if (f instanceof Int32Array) g = 5124;
    else if (f instanceof Int8Array) g = 5120;
    else if (f instanceof Uint8Array) g = 5121;
    else if (f instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        'THREE.WebGLAttributes: Unsupported buffer data format: ' + f
      );
    return {
      buffer: d,
      type: g,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, f) {
    const h = u.array,
      d = u.updateRange;
    i.bindBuffer(f, c),
      d.count === -1
        ? i.bufferSubData(f, 0, h)
        : (t
            ? i.bufferSubData(
                f,
                d.offset * h.BYTES_PER_ELEMENT,
                h,
                d.offset,
                d.count
              )
            : i.bufferSubData(
                f,
                d.offset * h.BYTES_PER_ELEMENT,
                h.subarray(d.offset, d.offset + d.count)
              ),
          (d.count = -1));
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const h = n.get(c);
      (!h || h.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = n.get(c);
    f === void 0
      ? n.set(c, r(c, u))
      : f.version < c.version && (s(f.buffer, c, u), (f.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class zu extends jt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      f = e / a,
      h = t / l,
      d = [],
      g = [],
      p = [],
      m = [];
    for (let _ = 0; _ < u; _++) {
      const x = _ * h - o;
      for (let v = 0; v < c; v++) {
        const y = v * f - s;
        g.push(y, -x, 0), p.push(0, 0, 1), m.push(v / a), m.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let x = 0; x < a; x++) {
        const v = x + c * _,
          y = x + c * (_ + 1),
          b = x + 1 + c * (_ + 1),
          T = x + 1 + c * _;
        d.push(v, y, T), d.push(y, b, T);
      }
    this.setIndex(d),
      this.setAttribute('position', new Ot(g, 3)),
      this.setAttribute('normal', new Ot(p, 3)),
      this.setAttribute('uv', new Ot(m, 2));
  }
  static fromJSON(e) {
    return new zu(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var mM = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  gM = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  _M = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  xM = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  vM = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  yM = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  MM = 'vec3 transformed = vec3( position );',
  bM = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  SM = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  wM = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  TM = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  EM = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  AM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  CM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  PM = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  RM = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  LM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  DM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  IM = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  OM = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  FM = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  NM = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  zM = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  UM = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  BM = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  kM = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  VM = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  GM = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  HM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  WM = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  qM = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  XM = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  jM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  $M = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  YM = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  ZM = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  KM = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  JM = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  QM = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  eb = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  tb = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  nb = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,
  ib = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  rb = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  sb = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  ob = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  ab = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lb = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  cb = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  ub = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  fb = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  hb = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  db = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  pb = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  mb = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  gb = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  _b = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  xb = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  vb = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  yb = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Mb = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  bb = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Sb = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  wb = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Tb = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Eb = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Ab = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Cb = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  Pb = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Rb = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Lb = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Db = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Ib = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  Ob = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Fb = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Nb = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  zb = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Ub = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Bb = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  kb = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Vb = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Gb = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Hb = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Wb = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  qb = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Xb = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  jb = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  $b = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  Yb = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Zb = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Kb = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Jb = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Qb = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  eS = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  tS = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  nS = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  iS = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  rS = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  sS = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  oS = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  aS = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  lS = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  cS = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  uS = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  fS = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  hS = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const dS = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  pS = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  mS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  gS = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  _S = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  xS = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  vS = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  yS = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  MS = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  bS = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  SS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  wS = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  TS = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ES = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  AS = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  CS = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  PS = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  RS = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  LS = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  DS = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  IS = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  OS = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  FS = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  NS = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  zS = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  US = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  BS = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  kS = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  VS = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  GS = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  HS = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  WS = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  qS = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  XS = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  ze = {
    alphamap_fragment: mM,
    alphamap_pars_fragment: gM,
    alphatest_fragment: _M,
    alphatest_pars_fragment: xM,
    aomap_fragment: vM,
    aomap_pars_fragment: yM,
    begin_vertex: MM,
    beginnormal_vertex: bM,
    bsdfs: SM,
    iridescence_fragment: wM,
    bumpmap_pars_fragment: TM,
    clipping_planes_fragment: EM,
    clipping_planes_pars_fragment: AM,
    clipping_planes_pars_vertex: CM,
    clipping_planes_vertex: PM,
    color_fragment: RM,
    color_pars_fragment: LM,
    color_pars_vertex: DM,
    color_vertex: IM,
    common: OM,
    cube_uv_reflection_fragment: FM,
    defaultnormal_vertex: NM,
    displacementmap_pars_vertex: zM,
    displacementmap_vertex: UM,
    emissivemap_fragment: BM,
    emissivemap_pars_fragment: kM,
    encodings_fragment: VM,
    encodings_pars_fragment: GM,
    envmap_fragment: HM,
    envmap_common_pars_fragment: WM,
    envmap_pars_fragment: qM,
    envmap_pars_vertex: XM,
    envmap_physical_pars_fragment: rb,
    envmap_vertex: jM,
    fog_vertex: $M,
    fog_pars_vertex: YM,
    fog_fragment: ZM,
    fog_pars_fragment: KM,
    gradientmap_pars_fragment: JM,
    lightmap_fragment: QM,
    lightmap_pars_fragment: eb,
    lights_lambert_fragment: tb,
    lights_lambert_pars_fragment: nb,
    lights_pars_begin: ib,
    lights_toon_fragment: sb,
    lights_toon_pars_fragment: ob,
    lights_phong_fragment: ab,
    lights_phong_pars_fragment: lb,
    lights_physical_fragment: cb,
    lights_physical_pars_fragment: ub,
    lights_fragment_begin: fb,
    lights_fragment_maps: hb,
    lights_fragment_end: db,
    logdepthbuf_fragment: pb,
    logdepthbuf_pars_fragment: mb,
    logdepthbuf_pars_vertex: gb,
    logdepthbuf_vertex: _b,
    map_fragment: xb,
    map_pars_fragment: vb,
    map_particle_fragment: yb,
    map_particle_pars_fragment: Mb,
    metalnessmap_fragment: bb,
    metalnessmap_pars_fragment: Sb,
    morphcolor_vertex: wb,
    morphnormal_vertex: Tb,
    morphtarget_pars_vertex: Eb,
    morphtarget_vertex: Ab,
    normal_fragment_begin: Cb,
    normal_fragment_maps: Pb,
    normal_pars_fragment: Rb,
    normal_pars_vertex: Lb,
    normal_vertex: Db,
    normalmap_pars_fragment: Ib,
    clearcoat_normal_fragment_begin: Ob,
    clearcoat_normal_fragment_maps: Fb,
    clearcoat_pars_fragment: Nb,
    iridescence_pars_fragment: zb,
    output_fragment: Ub,
    packing: Bb,
    premultiplied_alpha_fragment: kb,
    project_vertex: Vb,
    dithering_fragment: Gb,
    dithering_pars_fragment: Hb,
    roughnessmap_fragment: Wb,
    roughnessmap_pars_fragment: qb,
    shadowmap_pars_fragment: Xb,
    shadowmap_pars_vertex: jb,
    shadowmap_vertex: $b,
    shadowmask_pars_fragment: Yb,
    skinbase_vertex: Zb,
    skinning_pars_vertex: Kb,
    skinning_vertex: Jb,
    skinnormal_vertex: Qb,
    specularmap_fragment: eS,
    specularmap_pars_fragment: tS,
    tonemapping_fragment: nS,
    tonemapping_pars_fragment: iS,
    transmission_fragment: rS,
    transmission_pars_fragment: sS,
    uv_pars_fragment: oS,
    uv_pars_vertex: aS,
    uv_vertex: lS,
    uv2_pars_fragment: cS,
    uv2_pars_vertex: uS,
    uv2_vertex: fS,
    worldpos_vertex: hS,
    background_vert: dS,
    background_frag: pS,
    backgroundCube_vert: mS,
    backgroundCube_frag: gS,
    cube_vert: _S,
    cube_frag: xS,
    depth_vert: vS,
    depth_frag: yS,
    distanceRGBA_vert: MS,
    distanceRGBA_frag: bS,
    equirect_vert: SS,
    equirect_frag: wS,
    linedashed_vert: TS,
    linedashed_frag: ES,
    meshbasic_vert: AS,
    meshbasic_frag: CS,
    meshlambert_vert: PS,
    meshlambert_frag: RS,
    meshmatcap_vert: LS,
    meshmatcap_frag: DS,
    meshnormal_vert: IS,
    meshnormal_frag: OS,
    meshphong_vert: FS,
    meshphong_frag: NS,
    meshphysical_vert: zS,
    meshphysical_frag: US,
    meshtoon_vert: BS,
    meshtoon_frag: kS,
    points_vert: VS,
    points_frag: GS,
    shadow_vert: HS,
    shadow_frag: WS,
    sprite_vert: qS,
    sprite_frag: XS,
  },
  ye = {
    common: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new yn() },
      uv2Transform: { value: new yn() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new De(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new qe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new yn() },
    },
    sprite: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      center: { value: new De(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new yn() },
    },
  },
  jn = {
    basic: {
      uniforms: Xt([
        ye.common,
        ye.specularmap,
        ye.envmap,
        ye.aomap,
        ye.lightmap,
        ye.fog,
      ]),
      vertexShader: ze.meshbasic_vert,
      fragmentShader: ze.meshbasic_frag,
    },
    lambert: {
      uniforms: Xt([
        ye.common,
        ye.specularmap,
        ye.envmap,
        ye.aomap,
        ye.lightmap,
        ye.emissivemap,
        ye.bumpmap,
        ye.normalmap,
        ye.displacementmap,
        ye.fog,
        ye.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: ze.meshlambert_vert,
      fragmentShader: ze.meshlambert_frag,
    },
    phong: {
      uniforms: Xt([
        ye.common,
        ye.specularmap,
        ye.envmap,
        ye.aomap,
        ye.lightmap,
        ye.emissivemap,
        ye.bumpmap,
        ye.normalmap,
        ye.displacementmap,
        ye.fog,
        ye.lights,
        {
          emissive: { value: new qe(0) },
          specular: { value: new qe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ze.meshphong_vert,
      fragmentShader: ze.meshphong_frag,
    },
    standard: {
      uniforms: Xt([
        ye.common,
        ye.envmap,
        ye.aomap,
        ye.lightmap,
        ye.emissivemap,
        ye.bumpmap,
        ye.normalmap,
        ye.displacementmap,
        ye.roughnessmap,
        ye.metalnessmap,
        ye.fog,
        ye.lights,
        {
          emissive: { value: new qe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ze.meshphysical_vert,
      fragmentShader: ze.meshphysical_frag,
    },
    toon: {
      uniforms: Xt([
        ye.common,
        ye.aomap,
        ye.lightmap,
        ye.emissivemap,
        ye.bumpmap,
        ye.normalmap,
        ye.displacementmap,
        ye.gradientmap,
        ye.fog,
        ye.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: ze.meshtoon_vert,
      fragmentShader: ze.meshtoon_frag,
    },
    matcap: {
      uniforms: Xt([
        ye.common,
        ye.bumpmap,
        ye.normalmap,
        ye.displacementmap,
        ye.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ze.meshmatcap_vert,
      fragmentShader: ze.meshmatcap_frag,
    },
    points: {
      uniforms: Xt([ye.points, ye.fog]),
      vertexShader: ze.points_vert,
      fragmentShader: ze.points_frag,
    },
    dashed: {
      uniforms: Xt([
        ye.common,
        ye.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ze.linedashed_vert,
      fragmentShader: ze.linedashed_frag,
    },
    depth: {
      uniforms: Xt([ye.common, ye.displacementmap]),
      vertexShader: ze.depth_vert,
      fragmentShader: ze.depth_frag,
    },
    normal: {
      uniforms: Xt([
        ye.common,
        ye.bumpmap,
        ye.normalmap,
        ye.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ze.meshnormal_vert,
      fragmentShader: ze.meshnormal_frag,
    },
    sprite: {
      uniforms: Xt([ye.sprite, ye.fog]),
      vertexShader: ze.sprite_vert,
      fragmentShader: ze.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new yn() }, t2D: { value: null } },
      vertexShader: ze.background_vert,
      fragmentShader: ze.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
      },
      vertexShader: ze.backgroundCube_vert,
      fragmentShader: ze.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: ze.cube_vert,
      fragmentShader: ze.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ze.equirect_vert,
      fragmentShader: ze.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Xt([
        ye.common,
        ye.displacementmap,
        {
          referencePosition: { value: new N() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ze.distanceRGBA_vert,
      fragmentShader: ze.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Xt([
        ye.lights,
        ye.fog,
        { color: { value: new qe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ze.shadow_vert,
      fragmentShader: ze.shadow_frag,
    },
  };
jn.physical = {
  uniforms: Xt([
    jn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new De(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new qe(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new De() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new qe(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new qe(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: ze.meshphysical_vert,
  fragmentShader: ze.meshphysical_frag,
};
function jS(i, e, t, n, r, s, o) {
  const a = new qe(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    h = 0,
    d = null;
  function g(m, _) {
    let x = !1,
      v = _.isScene === !0 ? _.background : null;
    v && v.isTexture && (v = (_.backgroundBlurriness > 0 ? t : e).get(v));
    const y = i.xr,
      b = y.getSession && y.getSession();
    b && b.environmentBlendMode === 'additive' && (v = null),
      v === null ? p(a, l) : v && v.isColor && (p(v, 1), (x = !0)),
      (i.autoClear || x) &&
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      v && (v.isCubeTexture || v.mapping === ll)
        ? (u === void 0 &&
            ((u = new Mn(
              new qo(1, 1, 1),
              new Fr({
                name: 'BackgroundCubeMaterial',
                uniforms: Bs(jn.backgroundCube.uniforms),
                vertexShader: jn.backgroundCube.vertexShader,
                fragmentShader: jn.backgroundCube.fragmentShader,
                side: En,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute('normal'),
            u.geometry.deleteAttribute('uv'),
            (u.onBeforeRender = function (T, R, M) {
              this.matrixWorld.copyPosition(M.matrixWorld);
            }),
            Object.defineProperty(u.material, 'envMap', {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          (u.material.uniforms.envMap.value = v),
          (u.material.uniforms.flipEnvMap.value =
            v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            _.backgroundBlurriness),
          (f !== v || h !== v.version || d !== i.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (f = v),
            (h = v.version),
            (d = i.toneMapping)),
          u.layers.enableAll(),
          m.unshift(u, u.geometry, u.material, 0, 0, null))
        : v &&
          v.isTexture &&
          (c === void 0 &&
            ((c = new Mn(
              new zu(2, 2),
              new Fr({
                name: 'BackgroundMaterial',
                uniforms: Bs(jn.background.uniforms),
                vertexShader: jn.background.vertexShader,
                fragmentShader: jn.background.fragmentShader,
                side: Fs,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute('normal'),
            Object.defineProperty(c.material, 'map', {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.t2D.value = v),
          v.matrixAutoUpdate === !0 && v.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(v.matrix),
          (f !== v || h !== v.version || d !== i.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = v),
            (h = v.version),
            (d = i.toneMapping)),
          c.layers.enableAll(),
          m.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(m, _) {
    n.buffers.color.setClear(m.r, m.g, m.b, _, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (m, _ = 1) {
      a.set(m), (l = _), p(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (m) {
      (l = m), p(a, l);
    },
    render: g,
  };
}
function $S(i, e, t, n) {
  const r = i.getParameter(34921),
    s = n.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = m(null);
  let c = l,
    u = !1;
  function f(I, $, Z, Y, V) {
    let z = !1;
    if (o) {
      const H = p(Y, Z, $);
      c !== H && ((c = H), d(c.object)),
        (z = _(I, Y, Z, V)),
        z && x(I, Y, Z, V);
    } else {
      const H = $.wireframe === !0;
      (c.geometry !== Y.id || c.program !== Z.id || c.wireframe !== H) &&
        ((c.geometry = Y.id), (c.program = Z.id), (c.wireframe = H), (z = !0));
    }
    V !== null && t.update(V, 34963),
      (z || u) &&
        ((u = !1),
        M(I, $, Z, Y),
        V !== null && i.bindBuffer(34963, t.get(V).buffer));
  }
  function h() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function d(I) {
    return n.isWebGL2 ? i.bindVertexArray(I) : s.bindVertexArrayOES(I);
  }
  function g(I) {
    return n.isWebGL2 ? i.deleteVertexArray(I) : s.deleteVertexArrayOES(I);
  }
  function p(I, $, Z) {
    const Y = Z.wireframe === !0;
    let V = a[I.id];
    V === void 0 && ((V = {}), (a[I.id] = V));
    let z = V[$.id];
    z === void 0 && ((z = {}), (V[$.id] = z));
    let H = z[Y];
    return H === void 0 && ((H = m(h())), (z[Y] = H)), H;
  }
  function m(I) {
    const $ = [],
      Z = [],
      Y = [];
    for (let V = 0; V < r; V++) ($[V] = 0), (Z[V] = 0), (Y[V] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: $,
      enabledAttributes: Z,
      attributeDivisors: Y,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function _(I, $, Z, Y) {
    const V = c.attributes,
      z = $.attributes;
    let H = 0;
    const ue = Z.getAttributes();
    for (const te in ue)
      if (ue[te].location >= 0) {
        const xe = V[te];
        let G = z[te];
        if (
          (G === void 0 &&
            (te === 'instanceMatrix' &&
              I.instanceMatrix &&
              (G = I.instanceMatrix),
            te === 'instanceColor' && I.instanceColor && (G = I.instanceColor)),
          xe === void 0 || xe.attribute !== G || (G && xe.data !== G.data))
        )
          return !0;
        H++;
      }
    return c.attributesNum !== H || c.index !== Y;
  }
  function x(I, $, Z, Y) {
    const V = {},
      z = $.attributes;
    let H = 0;
    const ue = Z.getAttributes();
    for (const te in ue)
      if (ue[te].location >= 0) {
        let xe = z[te];
        xe === void 0 &&
          (te === 'instanceMatrix' &&
            I.instanceMatrix &&
            (xe = I.instanceMatrix),
          te === 'instanceColor' && I.instanceColor && (xe = I.instanceColor));
        const G = {};
        (G.attribute = xe),
          xe && xe.data && (G.data = xe.data),
          (V[te] = G),
          H++;
      }
    (c.attributes = V), (c.attributesNum = H), (c.index = Y);
  }
  function v() {
    const I = c.newAttributes;
    for (let $ = 0, Z = I.length; $ < Z; $++) I[$] = 0;
  }
  function y(I) {
    b(I, 0);
  }
  function b(I, $) {
    const Z = c.newAttributes,
      Y = c.enabledAttributes,
      V = c.attributeDivisors;
    (Z[I] = 1),
      Y[I] === 0 && (i.enableVertexAttribArray(I), (Y[I] = 1)),
      V[I] !== $ &&
        ((n.isWebGL2 ? i : e.get('ANGLE_instanced_arrays'))[
          n.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](I, $),
        (V[I] = $));
  }
  function T() {
    const I = c.newAttributes,
      $ = c.enabledAttributes;
    for (let Z = 0, Y = $.length; Z < Y; Z++)
      $[Z] !== I[Z] && (i.disableVertexAttribArray(Z), ($[Z] = 0));
  }
  function R(I, $, Z, Y, V, z) {
    n.isWebGL2 === !0 && (Z === 5124 || Z === 5125)
      ? i.vertexAttribIPointer(I, $, Z, V, z)
      : i.vertexAttribPointer(I, $, Z, Y, V, z);
  }
  function M(I, $, Z, Y) {
    if (
      n.isWebGL2 === !1 &&
      (I.isInstancedMesh || Y.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    v();
    const V = Y.attributes,
      z = Z.getAttributes(),
      H = $.defaultAttributeValues;
    for (const ue in z) {
      const te = z[ue];
      if (te.location >= 0) {
        let de = V[ue];
        if (
          (de === void 0 &&
            (ue === 'instanceMatrix' &&
              I.instanceMatrix &&
              (de = I.instanceMatrix),
            ue === 'instanceColor' &&
              I.instanceColor &&
              (de = I.instanceColor)),
          de !== void 0)
        ) {
          const xe = de.normalized,
            G = de.itemSize,
            F = t.get(de);
          if (F === void 0) continue;
          const le = F.buffer,
            ce = F.type,
            ve = F.bytesPerElement;
          if (de.isInterleavedBufferAttribute) {
            const _e = de.data,
              Te = _e.stride,
              A = de.offset;
            if (_e.isInstancedInterleavedBuffer) {
              for (let P = 0; P < te.locationSize; P++)
                b(te.location + P, _e.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                Y._maxInstanceCount === void 0 &&
                (Y._maxInstanceCount = _e.meshPerAttribute * _e.count);
            } else for (let P = 0; P < te.locationSize; P++) y(te.location + P);
            i.bindBuffer(34962, le);
            for (let P = 0; P < te.locationSize; P++)
              R(
                te.location + P,
                G / te.locationSize,
                ce,
                xe,
                Te * ve,
                (A + (G / te.locationSize) * P) * ve
              );
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let _e = 0; _e < te.locationSize; _e++)
                b(te.location + _e, de.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                Y._maxInstanceCount === void 0 &&
                (Y._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let _e = 0; _e < te.locationSize; _e++) y(te.location + _e);
            i.bindBuffer(34962, le);
            for (let _e = 0; _e < te.locationSize; _e++)
              R(
                te.location + _e,
                G / te.locationSize,
                ce,
                xe,
                G * ve,
                (G / te.locationSize) * _e * ve
              );
          }
        } else if (H !== void 0) {
          const xe = H[ue];
          if (xe !== void 0)
            switch (xe.length) {
              case 2:
                i.vertexAttrib2fv(te.location, xe);
                break;
              case 3:
                i.vertexAttrib3fv(te.location, xe);
                break;
              case 4:
                i.vertexAttrib4fv(te.location, xe);
                break;
              default:
                i.vertexAttrib1fv(te.location, xe);
            }
        }
      }
    }
    T();
  }
  function w() {
    Q();
    for (const I in a) {
      const $ = a[I];
      for (const Z in $) {
        const Y = $[Z];
        for (const V in Y) g(Y[V].object), delete Y[V];
        delete $[Z];
      }
      delete a[I];
    }
  }
  function D(I) {
    if (a[I.id] === void 0) return;
    const $ = a[I.id];
    for (const Z in $) {
      const Y = $[Z];
      for (const V in Y) g(Y[V].object), delete Y[V];
      delete $[Z];
    }
    delete a[I.id];
  }
  function q(I) {
    for (const $ in a) {
      const Z = a[$];
      if (Z[I.id] === void 0) continue;
      const Y = Z[I.id];
      for (const V in Y) g(Y[V].object), delete Y[V];
      delete Z[I.id];
    }
  }
  function Q() {
    k(), (u = !0), c !== l && ((c = l), d(c.object));
  }
  function k() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: f,
    reset: Q,
    resetDefaultState: k,
    dispose: w,
    releaseStatesOfGeometry: D,
    releaseStatesOfProgram: q,
    initAttributes: v,
    enableAttribute: y,
    disableUnusedAttributes: T,
  };
}
function YS(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, f) {
    if (f === 0) return;
    let h, d;
    if (r) (h = i), (d = 'drawArraysInstanced');
    else if (
      ((h = e.get('ANGLE_instanced_arrays')),
      (d = 'drawArraysInstancedANGLE'),
      h === null)
    ) {
      console.error(
        'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    h[d](s, c, u, f), t.update(u, s, f);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function ZS(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const R = e.get('EXT_texture_filter_anisotropic');
      n = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(R) {
    if (R === 'highp') {
      if (
        i.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        i.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return 'highp';
      R = 'mediump';
    }
    return R === 'mediump' &&
      i.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      i.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? 'mediump'
      : 'lowp';
  }
  const o =
    (typeof WebGL2RenderingContext < 'u' &&
      i instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < 'u' &&
      i instanceof WebGL2ComputeRenderingContext);
  let a = t.precision !== void 0 ? t.precision : 'highp';
  const l = s(a);
  l !== a &&
    (console.warn(
      'THREE.WebGLRenderer:',
      a,
      'not supported, using',
      l,
      'instead.'
    ),
    (a = l));
  const c = o || e.has('WEBGL_draw_buffers'),
    u = t.logarithmicDepthBuffer === !0,
    f = i.getParameter(34930),
    h = i.getParameter(35660),
    d = i.getParameter(3379),
    g = i.getParameter(34076),
    p = i.getParameter(34921),
    m = i.getParameter(36347),
    _ = i.getParameter(36348),
    x = i.getParameter(36349),
    v = h > 0,
    y = o || e.has('OES_texture_float'),
    b = v && y,
    T = o ? i.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: h,
    maxTextureSize: d,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: m,
    maxVaryings: _,
    maxFragmentUniforms: x,
    vertexTextures: v,
    floatFragmentTextures: y,
    floatVertexTextures: b,
    maxSamples: T,
  };
}
function KS(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const o = new fr(),
    a = new yn(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h, d) {
      const g = f.length !== 0 || h || n !== 0 || r;
      return (r = h), (t = u(f, d, 0)), (n = f.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (f, h, d) {
      const g = f.clippingPlanes,
        p = f.clipIntersection,
        m = f.clipShadows,
        _ = i.get(f);
      if (!r || g === null || g.length === 0 || (s && !m)) s ? u(null) : c();
      else {
        const x = s ? 0 : n,
          v = x * 4;
        let y = _.clippingState || null;
        (l.value = y), (y = u(g, h, v, d));
        for (let b = 0; b !== v; ++b) y[b] = t[b];
        (_.clippingState = y),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += x);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(f, h, d, g) {
    const p = f !== null ? f.length : 0;
    let m = null;
    if (p !== 0) {
      if (((m = l.value), g !== !0 || m === null)) {
        const _ = d + p * 4,
          x = h.matrixWorldInverse;
        a.getNormalMatrix(x),
          (m === null || m.length < _) && (m = new Float32Array(_));
        for (let v = 0, y = d; v !== p; ++v, y += 4)
          o.copy(f[v]).applyMatrix4(x, a),
            o.normal.toArray(m, y),
            (m[y + 3] = o.constant);
      }
      (l.value = m), (l.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), m;
  }
}
function JS(i) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Bc ? (o.mapping = Ns) : a === kc && (o.mapping = zs), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Bc || a === kc)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new fM(l.height / 2);
            return (
              c.fromEquirectangularTexture(i, o),
              e.set(o, c),
              o.addEventListener('dispose', r),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener('dispose', r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class QS extends Lm {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const gs = 4,
  Kh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  _r = 20,
  ic = new QS(),
  Jh = new qe();
let rc = null;
const hr = (1 + Math.sqrt(5)) / 2,
  os = 1 / hr,
  Qh = [
    new N(1, 1, 1),
    new N(-1, 1, 1),
    new N(1, 1, -1),
    new N(-1, 1, -1),
    new N(0, hr, os),
    new N(0, hr, -os),
    new N(os, 0, hr),
    new N(-os, 0, hr),
    new N(hr, os, 0),
    new N(-hr, os, 0),
  ];
class ed {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (rc = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = id()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = nd()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(rc),
      (e.scissorTest = !1),
      ga(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ns || e.mapping === zs
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (rc = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: vn,
        minFilter: vn,
        generateMipmaps: !1,
        type: Oo,
        format: Fn,
        encoding: Ir,
        depthBuffer: !1,
      },
      r = td(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = td(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = e1(s)),
        (this._blurMaterial = t1(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Mn(this._lodPlanes[0], e);
    this._renderer.compile(t, ic);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new on(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(Jh), (u.toneMapping = _i), (u.autoClear = !1);
    const d = new Mo({
        name: 'PMREM.Background',
        side: En,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Mn(new qo(), d);
    let p = !1;
    const m = e.background;
    m
      ? m.isColor && (d.color.copy(m), (e.background = null), (p = !0))
      : (d.color.copy(Jh), (p = !0));
    for (let _ = 0; _ < 6; _++) {
      const x = _ % 3;
      x === 0
        ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0))
        : x === 1
        ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0))
        : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const v = this._cubeSize;
      ga(r, x * v, _ > 2 ? v : 0, v, v),
        u.setRenderTarget(r),
        p && u.render(g, a),
        u.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = h),
      (u.autoClear = f),
      (e.background = m);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === Ns || e.mapping === zs;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = id()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = nd());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new Mn(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    ga(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, ic);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        o = Qh[(r - 1) % Qh.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, r, 'latitudinal', s),
      this._halfBlur(o, e, n, n, r, 'longitudinal', s);
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== 'latitudinal' &&
      o !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!'
      );
    const u = 3,
      f = new Mn(this._lodPlanes[r], c),
      h = c.uniforms,
      d = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * d) : (2 * Math.PI) / (2 * _r - 1),
      p = s / g,
      m = isFinite(s) ? 1 + Math.floor(u * p) : _r;
    m > _r &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`
      );
    const _ = [];
    let x = 0;
    for (let R = 0; R < _r; ++R) {
      const M = R / p,
        w = Math.exp((-M * M) / 2);
      _.push(w), R === 0 ? (x += w) : R < m && (x += 2 * w);
    }
    for (let R = 0; R < _.length; R++) _[R] = _[R] / x;
    (h.envMap.value = e.texture),
      (h.samples.value = m),
      (h.weights.value = _),
      (h.latitudinal.value = o === 'latitudinal'),
      a && (h.poleAxis.value = a);
    const { _lodMax: v } = this;
    (h.dTheta.value = g), (h.mipInt.value = v - n);
    const y = this._sizeLods[r],
      b = 3 * y * (r > v - gs ? r - v + gs : 0),
      T = 4 * (this._cubeSize - y);
    ga(t, b, T, 3 * y, 2 * y), l.setRenderTarget(t), l.render(f, ic);
  }
}
function e1(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - gs + 1 + Kh.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - gs ? (l = Kh[o - i + gs - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      f = 1 + c,
      h = [u, u, f, u, f, f, u, u, f, f, u, f],
      d = 6,
      g = 6,
      p = 3,
      m = 2,
      _ = 1,
      x = new Float32Array(p * g * d),
      v = new Float32Array(m * g * d),
      y = new Float32Array(_ * g * d);
    for (let T = 0; T < d; T++) {
      const R = ((T % 3) * 2) / 3 - 1,
        M = T > 2 ? 0 : -1,
        w = [
          R,
          M,
          0,
          R + 2 / 3,
          M,
          0,
          R + 2 / 3,
          M + 1,
          0,
          R,
          M,
          0,
          R + 2 / 3,
          M + 1,
          0,
          R,
          M + 1,
          0,
        ];
      x.set(w, p * g * T), v.set(h, m * g * T);
      const D = [T, T, T, T, T, T];
      y.set(D, _ * g * T);
    }
    const b = new jt();
    b.setAttribute('position', new An(x, p)),
      b.setAttribute('uv', new An(v, m)),
      b.setAttribute('faceIndex', new An(y, _)),
      e.push(b),
      r > gs && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function td(i, e, t) {
  const n = new Or(i, e, t);
  return (
    (n.texture.mapping = ll),
    (n.texture.name = 'PMREM.cubeUv'),
    (n.scissorTest = !0),
    n
  );
}
function ga(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function t1(i, e, t) {
  const n = new Float32Array(_r),
    r = new N(0, 1, 0);
  return new Fr({
    name: 'SphericalGaussianBlur',
    defines: {
      n: _r,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Uu(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Hi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function nd() {
  return new Fr({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: Uu(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Hi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function id() {
  return new Fr({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Uu(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Hi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Uu() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function n1(i) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Bc || l === kc,
        u = l === Ns || l === zs;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return (
            t === null && (t = new ed(i)),
            (f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f)),
            e.set(a, f),
            f.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const f = a.image;
            if ((c && f && f.height > 0) || (u && f && r(f))) {
              t === null && (t = new ed(i));
              const h = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, h), a.addEventListener('dispose', s), h.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener('dispose', s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function i1(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case 'WEBGL_depth_texture':
        r =
          i.getExtension('WEBGL_depth_texture') ||
          i.getExtension('MOZ_WEBGL_depth_texture') ||
          i.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        r =
          i.getExtension('EXT_texture_filter_anisotropic') ||
          i.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          i.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        r =
          i.getExtension('WEBGL_compressed_texture_s3tc') ||
          i.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          i.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        r =
          i.getExtension('WEBGL_compressed_texture_pvrtc') ||
          i.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        r = i.getExtension(n);
    }
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t('EXT_color_buffer_float')
        : (t('WEBGL_depth_texture'),
          t('OES_texture_float'),
          t('OES_texture_half_float'),
          t('OES_texture_half_float_linear'),
          t('OES_standard_derivatives'),
          t('OES_element_index_uint'),
          t('OES_vertex_array_object'),
          t('ANGLE_instanced_arrays')),
        t('OES_texture_float_linear'),
        t('EXT_color_buffer_half_float'),
        t('WEBGL_multisampled_render_to_texture');
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          console.warn(
            'THREE.WebGLRenderer: ' + n + ' extension not supported.'
          ),
        r
      );
    },
  };
}
function r1(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function o(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes) e.remove(h.attributes[g]);
    h.removeEventListener('dispose', o), delete r[h.id];
    const d = s.get(h);
    d && (e.remove(d), s.delete(h)),
      n.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(f, h) {
    return (
      r[h.id] === !0 ||
        (h.addEventListener('dispose', o),
        (r[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function l(f) {
    const h = f.attributes;
    for (const g in h) e.update(h[g], 34962);
    const d = f.morphAttributes;
    for (const g in d) {
      const p = d[g];
      for (let m = 0, _ = p.length; m < _; m++) e.update(p[m], 34962);
    }
  }
  function c(f) {
    const h = [],
      d = f.index,
      g = f.attributes.position;
    let p = 0;
    if (d !== null) {
      const x = d.array;
      p = d.version;
      for (let v = 0, y = x.length; v < y; v += 3) {
        const b = x[v + 0],
          T = x[v + 1],
          R = x[v + 2];
        h.push(b, T, T, R, R, b);
      }
    } else {
      const x = g.array;
      p = g.version;
      for (let v = 0, y = x.length / 3 - 1; v < y; v += 3) {
        const b = v + 0,
          T = v + 1,
          R = v + 2;
        h.push(b, T, T, R, R, b);
      }
    }
    const m = new (Sm(h) ? Rm : Pm)(h, 1);
    m.version = p;
    const _ = s.get(f);
    _ && e.remove(_), s.set(f, m);
  }
  function u(f) {
    const h = s.get(f);
    if (h) {
      const d = f.index;
      d !== null && h.version < d.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function s1(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(h) {
    s = h;
  }
  let a, l;
  function c(h) {
    (a = h.type), (l = h.bytesPerElement);
  }
  function u(h, d) {
    i.drawElements(s, d, a, h * l), t.update(d, s, 1);
  }
  function f(h, d, g) {
    if (g === 0) return;
    let p, m;
    if (r) (p = i), (m = 'drawElementsInstanced');
    else if (
      ((p = e.get('ANGLE_instanced_arrays')),
      (m = 'drawElementsInstancedANGLE'),
      p === null)
    ) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    p[m](s, d, a, h * l, g), t.update(d, s, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = f);
}
function o1(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', o);
        break;
    }
  }
  function r() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function a1(i, e) {
  return i[0] - e[0];
}
function l1(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function c1(i, e, t) {
  const n = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new Dt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, f, h) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        p = g !== void 0 ? g.length : 0;
      let m = s.get(u);
      if (m === void 0 || m.count !== p) {
        let $ = function () {
          k.dispose(), s.delete(u), u.removeEventListener('dispose', $);
        };
        m !== void 0 && m.texture.dispose();
        const v = u.morphAttributes.position !== void 0,
          y = u.morphAttributes.normal !== void 0,
          b = u.morphAttributes.color !== void 0,
          T = u.morphAttributes.position || [],
          R = u.morphAttributes.normal || [],
          M = u.morphAttributes.color || [];
        let w = 0;
        v === !0 && (w = 1), y === !0 && (w = 2), b === !0 && (w = 3);
        let D = u.attributes.position.count * w,
          q = 1;
        D > e.maxTextureSize &&
          ((q = Math.ceil(D / e.maxTextureSize)), (D = e.maxTextureSize));
        const Q = new Float32Array(D * q * 4 * p),
          k = new Am(Q, D, q, p);
        (k.type = yr), (k.needsUpdate = !0);
        const I = w * 4;
        for (let Z = 0; Z < p; Z++) {
          const Y = T[Z],
            V = R[Z],
            z = M[Z],
            H = D * q * 4 * Z;
          for (let ue = 0; ue < Y.count; ue++) {
            const te = ue * I;
            v === !0 &&
              (o.fromBufferAttribute(Y, ue),
              (Q[H + te + 0] = o.x),
              (Q[H + te + 1] = o.y),
              (Q[H + te + 2] = o.z),
              (Q[H + te + 3] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(V, ue),
                (Q[H + te + 4] = o.x),
                (Q[H + te + 5] = o.y),
                (Q[H + te + 6] = o.z),
                (Q[H + te + 7] = 0)),
              b === !0 &&
                (o.fromBufferAttribute(z, ue),
                (Q[H + te + 8] = o.x),
                (Q[H + te + 9] = o.y),
                (Q[H + te + 10] = o.z),
                (Q[H + te + 11] = z.itemSize === 4 ? o.w : 1));
          }
        }
        (m = { count: p, texture: k, size: new De(D, q) }),
          s.set(u, m),
          u.addEventListener('dispose', $);
      }
      let _ = 0;
      for (let v = 0; v < d.length; v++) _ += d[v];
      const x = u.morphTargetsRelative ? 1 : 1 - _;
      h.getUniforms().setValue(i, 'morphTargetBaseInfluence', x),
        h.getUniforms().setValue(i, 'morphTargetInfluences', d),
        h.getUniforms().setValue(i, 'morphTargetsTexture', m.texture, t),
        h.getUniforms().setValue(i, 'morphTargetsTextureSize', m.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let p = n[u.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let y = 0; y < g; y++) p[y] = [y, 0];
        n[u.id] = p;
      }
      for (let y = 0; y < g; y++) {
        const b = p[y];
        (b[0] = y), (b[1] = d[y]);
      }
      p.sort(l1);
      for (let y = 0; y < 8; y++)
        y < g && p[y][1]
          ? ((a[y][0] = p[y][0]), (a[y][1] = p[y][1]))
          : ((a[y][0] = Number.MAX_SAFE_INTEGER), (a[y][1] = 0));
      a.sort(a1);
      const m = u.morphAttributes.position,
        _ = u.morphAttributes.normal;
      let x = 0;
      for (let y = 0; y < 8; y++) {
        const b = a[y],
          T = b[0],
          R = b[1];
        T !== Number.MAX_SAFE_INTEGER && R
          ? (m &&
              u.getAttribute('morphTarget' + y) !== m[T] &&
              u.setAttribute('morphTarget' + y, m[T]),
            _ &&
              u.getAttribute('morphNormal' + y) !== _[T] &&
              u.setAttribute('morphNormal' + y, _[T]),
            (r[y] = R),
            (x += R))
          : (m &&
              u.hasAttribute('morphTarget' + y) === !0 &&
              u.deleteAttribute('morphTarget' + y),
            _ &&
              u.hasAttribute('morphNormal' + y) === !0 &&
              u.deleteAttribute('morphNormal' + y),
            (r[y] = 0));
      }
      const v = u.morphTargetsRelative ? 1 : 1 - x;
      h.getUniforms().setValue(i, 'morphTargetBaseInfluence', v),
        h.getUniforms().setValue(i, 'morphTargetInfluences', r);
    }
  }
  return { update: l };
}
function u1(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      f = e.get(l, u);
    return (
      r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', a) === !1 &&
          l.addEventListener('dispose', a),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      f
    );
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener('dispose', a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const Fm = new un(),
  Nm = new Am(),
  zm = new Yy(),
  Um = new Dm(),
  rd = [],
  sd = [],
  od = new Float32Array(16),
  ad = new Float32Array(9),
  ld = new Float32Array(4);
function Js(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = rd[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (rd[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), i[o].toArray(s, a);
  }
  return s;
}
function Mt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function bt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function ul(i, e) {
  let t = sd[e];
  t === void 0 && ((t = new Int32Array(e)), (sd[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function f1(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function h1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Mt(t, e)) return;
    i.uniform2fv(this.addr, e), bt(t, e);
  }
}
function d1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Mt(t, e)) return;
    i.uniform3fv(this.addr, e), bt(t, e);
  }
}
function p1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Mt(t, e)) return;
    i.uniform4fv(this.addr, e), bt(t, e);
  }
}
function m1(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Mt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), bt(t, e);
  } else {
    if (Mt(t, n)) return;
    ld.set(n), i.uniformMatrix2fv(this.addr, !1, ld), bt(t, n);
  }
}
function g1(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Mt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), bt(t, e);
  } else {
    if (Mt(t, n)) return;
    ad.set(n), i.uniformMatrix3fv(this.addr, !1, ad), bt(t, n);
  }
}
function _1(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Mt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), bt(t, e);
  } else {
    if (Mt(t, n)) return;
    od.set(n), i.uniformMatrix4fv(this.addr, !1, od), bt(t, n);
  }
}
function x1(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function v1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Mt(t, e)) return;
    i.uniform2iv(this.addr, e), bt(t, e);
  }
}
function y1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Mt(t, e)) return;
    i.uniform3iv(this.addr, e), bt(t, e);
  }
}
function M1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Mt(t, e)) return;
    i.uniform4iv(this.addr, e), bt(t, e);
  }
}
function b1(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function S1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Mt(t, e)) return;
    i.uniform2uiv(this.addr, e), bt(t, e);
  }
}
function w1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Mt(t, e)) return;
    i.uniform3uiv(this.addr, e), bt(t, e);
  }
}
function T1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Mt(t, e)) return;
    i.uniform4uiv(this.addr, e), bt(t, e);
  }
}
function E1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2D(e || Fm, r);
}
function A1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || zm, r);
}
function C1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || Um, r);
}
function P1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Nm, r);
}
function R1(i) {
  switch (i) {
    case 5126:
      return f1;
    case 35664:
      return h1;
    case 35665:
      return d1;
    case 35666:
      return p1;
    case 35674:
      return m1;
    case 35675:
      return g1;
    case 35676:
      return _1;
    case 5124:
    case 35670:
      return x1;
    case 35667:
    case 35671:
      return v1;
    case 35668:
    case 35672:
      return y1;
    case 35669:
    case 35673:
      return M1;
    case 5125:
      return b1;
    case 36294:
      return S1;
    case 36295:
      return w1;
    case 36296:
      return T1;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return E1;
    case 35679:
    case 36299:
    case 36307:
      return A1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return C1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return P1;
  }
}
function L1(i, e) {
  i.uniform1fv(this.addr, e);
}
function D1(i, e) {
  const t = Js(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function I1(i, e) {
  const t = Js(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function O1(i, e) {
  const t = Js(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function F1(i, e) {
  const t = Js(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function N1(i, e) {
  const t = Js(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function z1(i, e) {
  const t = Js(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function U1(i, e) {
  i.uniform1iv(this.addr, e);
}
function B1(i, e) {
  i.uniform2iv(this.addr, e);
}
function k1(i, e) {
  i.uniform3iv(this.addr, e);
}
function V1(i, e) {
  i.uniform4iv(this.addr, e);
}
function G1(i, e) {
  i.uniform1uiv(this.addr, e);
}
function H1(i, e) {
  i.uniform2uiv(this.addr, e);
}
function W1(i, e) {
  i.uniform3uiv(this.addr, e);
}
function q1(i, e) {
  i.uniform4uiv(this.addr, e);
}
function X1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ul(t, r);
  Mt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Fm, s[o]);
}
function j1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ul(t, r);
  Mt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || zm, s[o]);
}
function $1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ul(t, r);
  Mt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Um, s[o]);
}
function Y1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ul(t, r);
  Mt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Nm, s[o]);
}
function Z1(i) {
  switch (i) {
    case 5126:
      return L1;
    case 35664:
      return D1;
    case 35665:
      return I1;
    case 35666:
      return O1;
    case 35674:
      return F1;
    case 35675:
      return N1;
    case 35676:
      return z1;
    case 5124:
    case 35670:
      return U1;
    case 35667:
    case 35671:
      return B1;
    case 35668:
    case 35672:
      return k1;
    case 35669:
    case 35673:
      return V1;
    case 5125:
      return G1;
    case 36294:
      return H1;
    case 36295:
      return W1;
    case 36296:
      return q1;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return X1;
    case 35679:
    case 36299:
    case 36307:
      return j1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Y1;
  }
}
class K1 {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = R1(t.type));
  }
}
class J1 {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Z1(t.type));
  }
}
class Q1 {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const sc = /(\w+)(\])?(\[|\.)?/g;
function cd(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function ew(i, e, t) {
  const n = i.name,
    r = n.length;
  for (sc.lastIndex = 0; ; ) {
    const s = sc.exec(n),
      o = sc.lastIndex;
    let a = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === '[' && o + 2 === r))) {
      cd(t, c === void 0 ? new K1(a, i, e) : new J1(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && ((f = new Q1(a)), cd(t, f)), (t = f);
    }
  }
}
class Ra {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      ew(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ud(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let tw = 0;
function nw(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? '>' : ' '} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function iw(i) {
  switch (i) {
    case Ir:
      return ['Linear', '( value )'];
    case lt:
      return ['sRGB', '( value )'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported encoding:', i),
        ['Linear', '( value )']
      );
  }
}
function fd(i, e, t) {
  const n = i.getShaderParameter(e, 35713),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === '') return '';
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      nw(i.getShaderSource(e), o)
    );
  } else return r;
}
function rw(i, e) {
  const t = iw(e);
  return 'vec4 ' + i + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function sw(i, e) {
  let t;
  switch (e) {
    case cy:
      t = 'Linear';
      break;
    case uy:
      t = 'Reinhard';
      break;
    case fy:
      t = 'OptimizedCineon';
      break;
    case hy:
      t = 'ACESFilmic';
      break;
    case dy:
      t = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
        (t = 'Linear');
  }
  return (
    'vec3 ' + i + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }'
  );
}
function ow(i) {
  return [
    i.extensionDerivatives ||
    !!i.envMapCubeUVHeight ||
    i.bumpMap ||
    i.tangentSpaceNormalMap ||
    i.clearcoatNormalMap ||
    i.flatShading ||
    i.shaderID === 'physical'
      ? '#extension GL_OES_standard_derivatives : enable'
      : '',
    (i.extensionFragDepth || i.logarithmicDepthBuffer) &&
    i.rendererExtensionFragDepth
      ? '#extension GL_EXT_frag_depth : enable'
      : '',
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers
      ? '#extension GL_EXT_draw_buffers : require'
      : '',
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) &&
    i.rendererExtensionShaderTextureLod
      ? '#extension GL_EXT_shader_texture_lod : enable'
      : '',
  ].filter(fo).join(`
`);
}
function aw(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push('#define ' + t + ' ' + n);
  }
  return e.join(`
`);
}
function lw(i, e) {
  const t = {},
    n = i.getProgramParameter(e, 35721);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2),
      s.type === 35675 && (a = 3),
      s.type === 35676 && (a = 4),
      (t[o] = {
        type: s.type,
        location: i.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function fo(i) {
  return i !== '';
}
function hd(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function dd(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const cw = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Xc(i) {
  return i.replace(cw, uw);
}
function uw(i, e) {
  const t = ze[e];
  if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
  return Xc(t);
}
const fw =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function pd(i) {
  return i.replace(fw, hw);
}
function hw(i, e, t, n) {
  let r = '';
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function md(i) {
  let e =
    'precision ' +
    i.precision +
    ` float;
precision ` +
    i.precision +
    ' int;';
  return (
    i.precision === 'highp'
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === 'mediump'
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === 'lowp' &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function dw(i) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    i.shadowMapType === gm
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : i.shadowMapType === Vv
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : i.shadowMapType === uo && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function pw(i) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (i.envMap)
    switch (i.envMapMode) {
      case Ns:
      case zs:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case ll:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function mw(i) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (i.envMap)
    switch (i.envMapMode) {
      case zs:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function gw(i) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (i.envMap)
    switch (i.combine) {
      case vm:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case ay:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case ly:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function _w(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function xw(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = dw(t),
    c = pw(t),
    u = mw(t),
    f = gw(t),
    h = _w(t),
    d = t.isWebGL2 ? '' : ow(t),
    g = aw(s),
    p = r.createProgram();
  let m,
    _,
    x = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((m = [g].filter(fo).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (_ = [d, g].filter(fo).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((m = [
        md(t),
        '#define SHADER_NAME ' + t.shaderName,
        g,
        t.instancing ? '#define USE_INSTANCING' : '',
        t.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        t.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + u : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMap && t.objectSpaceNormalMap
          ? '#define OBJECTSPACE_NORMALMAP'
          : '',
        t.normalMap && t.tangentSpaceNormalMap
          ? '#define TANGENTSPACE_NORMALMAP'
          : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.displacementMap && t.supportsVertexTextures
          ? '#define USE_DISPLACEMENTMAP'
          : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
        t.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
        t.vertexTangents ? '#define USE_TANGENT' : '',
        t.vertexColors ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUvs ? '#define USE_UV' : '',
        t.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.skinning ? '#define USE_SKINNING' : '',
        t.morphTargets ? '#define USE_MORPHTARGETS' : '',
        t.morphNormals && t.flatShading === !1
          ? '#define USE_MORPHNORMALS'
          : '',
        t.morphColors && t.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
        t.morphTargetsCount > 0 && t.isWebGL2
          ? '#define MORPHTARGETS_TEXTURE'
          : '',
        t.morphTargetsCount > 0 && t.isWebGL2
          ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + t.morphTextureStride
          : '',
        t.morphTargetsCount > 0 && t.isWebGL2
          ? '#define MORPHTARGETS_COUNT ' + t.morphTargetsCount
          : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + l : '',
        t.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? '#define USE_LOGDEPTHBUF_EXT'
          : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
        '	attribute vec3 morphTarget0;',
        '	attribute vec3 morphTarget1;',
        '	attribute vec3 morphTarget2;',
        '	attribute vec3 morphTarget3;',
        '	#ifdef USE_MORPHNORMALS',
        '		attribute vec3 morphNormal0;',
        '		attribute vec3 morphNormal1;',
        '		attribute vec3 morphNormal2;',
        '		attribute vec3 morphNormal3;',
        '	#else',
        '		attribute vec3 morphTarget4;',
        '		attribute vec3 morphTarget5;',
        '		attribute vec3 morphTarget6;',
        '		attribute vec3 morphTarget7;',
        '	#endif',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`,
      ].filter(fo).join(`
`)),
      (_ = [
        d,
        md(t),
        '#define SHADER_NAME ' + t.shaderName,
        g,
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.matcap ? '#define USE_MATCAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + c : '',
        t.envMap ? '#define ' + u : '',
        t.envMap ? '#define ' + f : '',
        h ? '#define CUBEUV_TEXEL_WIDTH ' + h.texelWidth : '',
        h ? '#define CUBEUV_TEXEL_HEIGHT ' + h.texelHeight : '',
        h ? '#define CUBEUV_MAX_MIP ' + h.maxMip + '.0' : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMap && t.objectSpaceNormalMap
          ? '#define OBJECTSPACE_NORMALMAP'
          : '',
        t.normalMap && t.tangentSpaceNormalMap
          ? '#define TANGENTSPACE_NORMALMAP'
          : '',
        t.clearcoat ? '#define USE_CLEARCOAT' : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescence ? '#define USE_IRIDESCENCE' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
        t.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.alphaTest ? '#define USE_ALPHATEST' : '',
        t.sheen ? '#define USE_SHEEN' : '',
        t.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        t.vertexTangents ? '#define USE_TANGENT' : '',
        t.vertexColors || t.instancingColor ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUvs ? '#define USE_UV' : '',
        t.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
        t.gradientMap ? '#define USE_GRADIENTMAP' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + l : '',
        t.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        t.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? '#define USE_LOGDEPTHBUF_EXT'
          : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        t.toneMapping !== _i ? '#define TONE_MAPPING' : '',
        t.toneMapping !== _i ? ze.tonemapping_pars_fragment : '',
        t.toneMapping !== _i ? sw('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        ze.encodings_pars_fragment,
        rw('linearToOutputTexel', t.outputEncoding),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`,
      ].filter(fo).join(`
`))),
    (o = Xc(o)),
    (o = hd(o, t)),
    (o = dd(o, t)),
    (a = Xc(a)),
    (a = hd(a, t)),
    (a = dd(a, t)),
    (o = pd(o)),
    (a = pd(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((x = `#version 300 es
`),
      (m =
        [
          'precision mediump sampler2DArray;',
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        m),
      (_ =
        [
          '#define varying in',
          t.glslVersion === Uh
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          t.glslVersion === Uh ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad',
        ].join(`
`) +
        `
` +
        _));
  const v = x + m + o,
    y = x + _ + a,
    b = ud(r, 35633, v),
    T = ud(r, 35632, y);
  if (
    (r.attachShader(p, b),
    r.attachShader(p, T),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(p, 0, 'position'),
    r.linkProgram(p),
    i.debug.checkShaderErrors)
  ) {
    const w = r.getProgramInfoLog(p).trim(),
      D = r.getShaderInfoLog(b).trim(),
      q = r.getShaderInfoLog(T).trim();
    let Q = !0,
      k = !0;
    if (r.getProgramParameter(p, 35714) === !1) {
      Q = !1;
      const I = fd(r, b, 'vertex'),
        $ = fd(r, T, 'fragment');
      console.error(
        'THREE.WebGLProgram: Shader Error ' +
          r.getError() +
          ' - VALIDATE_STATUS ' +
          r.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          w +
          `
` +
          I +
          `
` +
          $
      );
    } else
      w !== ''
        ? console.warn('THREE.WebGLProgram: Program Info Log:', w)
        : (D === '' || q === '') && (k = !1);
    k &&
      (this.diagnostics = {
        runnable: Q,
        programLog: w,
        vertexShader: { log: D, prefix: m },
        fragmentShader: { log: q, prefix: _ },
      });
  }
  r.deleteShader(b), r.deleteShader(T);
  let R;
  this.getUniforms = function () {
    return R === void 0 && (R = new Ra(r, p)), R;
  };
  let M;
  return (
    (this.getAttributes = function () {
      return M === void 0 && (M = lw(r, p)), M;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = tw++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = b),
    (this.fragmentShader = T),
    this
  );
}
let vw = 0;
class yw {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Mw(e)), t.set(e, n)), n;
  }
}
class Mw {
  constructor(e) {
    (this.id = vw++), (this.code = e), (this.usedTimes = 0);
  }
}
function bw(i, e, t, n, r, s, o) {
  const a = new Cm(),
    l = new yw(),
    c = [],
    u = r.isWebGL2,
    f = r.logarithmicDepthBuffer,
    h = r.vertexTextures;
  let d = r.precision;
  const g = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite',
  };
  function p(M, w, D, q, Q) {
    const k = q.fog,
      I = Q.geometry,
      $ = M.isMeshStandardMaterial ? q.environment : null,
      Z = (M.isMeshStandardMaterial ? t : e).get(M.envMap || $),
      Y = !!Z && Z.mapping === ll ? Z.image.height : null,
      V = g[M.type];
    M.precision !== null &&
      ((d = r.getMaxPrecision(M.precision)),
      d !== M.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          M.precision,
          'not supported, using',
          d,
          'instead.'
        ));
    const z =
        I.morphAttributes.position ||
        I.morphAttributes.normal ||
        I.morphAttributes.color,
      H = z !== void 0 ? z.length : 0;
    let ue = 0;
    I.morphAttributes.position !== void 0 && (ue = 1),
      I.morphAttributes.normal !== void 0 && (ue = 2),
      I.morphAttributes.color !== void 0 && (ue = 3);
    let te, de, xe, G;
    if (V) {
      const Te = jn[V];
      (te = Te.vertexShader), (de = Te.fragmentShader);
    } else
      (te = M.vertexShader),
        (de = M.fragmentShader),
        l.update(M),
        (xe = l.getVertexShaderID(M)),
        (G = l.getFragmentShaderID(M));
    const F = i.getRenderTarget(),
      le = M.alphaTest > 0,
      ce = M.clearcoat > 0,
      ve = M.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: V,
      shaderName: M.type,
      vertexShader: te,
      fragmentShader: de,
      defines: M.defines,
      customVertexShaderID: xe,
      customFragmentShaderID: G,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: d,
      instancing: Q.isInstancedMesh === !0,
      instancingColor: Q.isInstancedMesh === !0 && Q.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding:
        F === null
          ? i.outputEncoding
          : F.isXRRenderTarget === !0
          ? F.texture.encoding
          : Ir,
      map: !!M.map,
      matcap: !!M.matcap,
      envMap: !!Z,
      envMapMode: Z && Z.mapping,
      envMapCubeUVHeight: Y,
      lightMap: !!M.lightMap,
      aoMap: !!M.aoMap,
      emissiveMap: !!M.emissiveMap,
      bumpMap: !!M.bumpMap,
      normalMap: !!M.normalMap,
      objectSpaceNormalMap: M.normalMapType === Dy,
      tangentSpaceNormalMap: M.normalMapType === bm,
      decodeVideoTexture:
        !!M.map && M.map.isVideoTexture === !0 && M.map.encoding === lt,
      clearcoat: ce,
      clearcoatMap: ce && !!M.clearcoatMap,
      clearcoatRoughnessMap: ce && !!M.clearcoatRoughnessMap,
      clearcoatNormalMap: ce && !!M.clearcoatNormalMap,
      iridescence: ve,
      iridescenceMap: ve && !!M.iridescenceMap,
      iridescenceThicknessMap: ve && !!M.iridescenceThicknessMap,
      displacementMap: !!M.displacementMap,
      roughnessMap: !!M.roughnessMap,
      metalnessMap: !!M.metalnessMap,
      specularMap: !!M.specularMap,
      specularIntensityMap: !!M.specularIntensityMap,
      specularColorMap: !!M.specularColorMap,
      opaque: M.transparent === !1 && M.blending === Ss,
      alphaMap: !!M.alphaMap,
      alphaTest: le,
      gradientMap: !!M.gradientMap,
      sheen: M.sheen > 0,
      sheenColorMap: !!M.sheenColorMap,
      sheenRoughnessMap: !!M.sheenRoughnessMap,
      transmission: M.transmission > 0,
      transmissionMap: !!M.transmissionMap,
      thicknessMap: !!M.thicknessMap,
      combine: M.combine,
      vertexTangents: !!M.normalMap && !!I.attributes.tangent,
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!I.attributes.color &&
        I.attributes.color.itemSize === 4,
      vertexUvs:
        !!M.map ||
        !!M.bumpMap ||
        !!M.normalMap ||
        !!M.specularMap ||
        !!M.alphaMap ||
        !!M.emissiveMap ||
        !!M.roughnessMap ||
        !!M.metalnessMap ||
        !!M.clearcoatMap ||
        !!M.clearcoatRoughnessMap ||
        !!M.clearcoatNormalMap ||
        !!M.iridescenceMap ||
        !!M.iridescenceThicknessMap ||
        !!M.displacementMap ||
        !!M.transmissionMap ||
        !!M.thicknessMap ||
        !!M.specularIntensityMap ||
        !!M.specularColorMap ||
        !!M.sheenColorMap ||
        !!M.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!M.map ||
          !!M.bumpMap ||
          !!M.normalMap ||
          !!M.specularMap ||
          !!M.alphaMap ||
          !!M.emissiveMap ||
          !!M.roughnessMap ||
          !!M.metalnessMap ||
          !!M.clearcoatNormalMap ||
          !!M.iridescenceMap ||
          !!M.iridescenceThicknessMap ||
          M.transmission > 0 ||
          !!M.transmissionMap ||
          !!M.thicknessMap ||
          !!M.specularIntensityMap ||
          !!M.specularColorMap ||
          M.sheen > 0 ||
          !!M.sheenColorMap ||
          !!M.sheenRoughnessMap
        ) && !!M.displacementMap,
      fog: !!k,
      useFog: M.fog === !0,
      fogExp2: k && k.isFogExp2,
      flatShading: !!M.flatShading,
      sizeAttenuation: M.sizeAttenuation,
      logarithmicDepthBuffer: f,
      skinning: Q.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: H,
      morphTextureStride: ue,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: M.toneMapped ? i.toneMapping : _i,
      physicallyCorrectLights: i.physicallyCorrectLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === di,
      flipSided: M.side === En,
      useDepthPacking: !!M.depthPacking,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: M.extensions && M.extensions.derivatives,
      extensionFragDepth: M.extensions && M.extensions.fragDepth,
      extensionDrawBuffers: M.extensions && M.extensions.drawBuffers,
      extensionShaderTextureLOD: M.extensions && M.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has('EXT_frag_depth'),
      rendererExtensionDrawBuffers: u || n.has('WEBGL_draw_buffers'),
      rendererExtensionShaderTextureLod: u || n.has('EXT_shader_texture_lod'),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
  }
  function m(M) {
    const w = [];
    if (
      (M.shaderID
        ? w.push(M.shaderID)
        : (w.push(M.customVertexShaderID), w.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (const D in M.defines) w.push(D), w.push(M.defines[D]);
    return (
      M.isRawShaderMaterial === !1 &&
        (_(w, M), x(w, M), w.push(i.outputEncoding)),
      w.push(M.customProgramCacheKey),
      w.join()
    );
  }
  function _(M, w) {
    M.push(w.precision),
      M.push(w.outputEncoding),
      M.push(w.envMapMode),
      M.push(w.envMapCubeUVHeight),
      M.push(w.combine),
      M.push(w.vertexUvs),
      M.push(w.fogExp2),
      M.push(w.sizeAttenuation),
      M.push(w.morphTargetsCount),
      M.push(w.morphAttributeCount),
      M.push(w.numDirLights),
      M.push(w.numPointLights),
      M.push(w.numSpotLights),
      M.push(w.numSpotLightMaps),
      M.push(w.numHemiLights),
      M.push(w.numRectAreaLights),
      M.push(w.numDirLightShadows),
      M.push(w.numPointLightShadows),
      M.push(w.numSpotLightShadows),
      M.push(w.numSpotLightShadowsWithMaps),
      M.push(w.shadowMapType),
      M.push(w.toneMapping),
      M.push(w.numClippingPlanes),
      M.push(w.numClipIntersection),
      M.push(w.depthPacking);
  }
  function x(M, w) {
    a.disableAll(),
      w.isWebGL2 && a.enable(0),
      w.supportsVertexTextures && a.enable(1),
      w.instancing && a.enable(2),
      w.instancingColor && a.enable(3),
      w.map && a.enable(4),
      w.matcap && a.enable(5),
      w.envMap && a.enable(6),
      w.lightMap && a.enable(7),
      w.aoMap && a.enable(8),
      w.emissiveMap && a.enable(9),
      w.bumpMap && a.enable(10),
      w.normalMap && a.enable(11),
      w.objectSpaceNormalMap && a.enable(12),
      w.tangentSpaceNormalMap && a.enable(13),
      w.clearcoat && a.enable(14),
      w.clearcoatMap && a.enable(15),
      w.clearcoatRoughnessMap && a.enable(16),
      w.clearcoatNormalMap && a.enable(17),
      w.iridescence && a.enable(18),
      w.iridescenceMap && a.enable(19),
      w.iridescenceThicknessMap && a.enable(20),
      w.displacementMap && a.enable(21),
      w.specularMap && a.enable(22),
      w.roughnessMap && a.enable(23),
      w.metalnessMap && a.enable(24),
      w.gradientMap && a.enable(25),
      w.alphaMap && a.enable(26),
      w.alphaTest && a.enable(27),
      w.vertexColors && a.enable(28),
      w.vertexAlphas && a.enable(29),
      w.vertexUvs && a.enable(30),
      w.vertexTangents && a.enable(31),
      w.uvsVertexOnly && a.enable(32),
      M.push(a.mask),
      a.disableAll(),
      w.fog && a.enable(0),
      w.useFog && a.enable(1),
      w.flatShading && a.enable(2),
      w.logarithmicDepthBuffer && a.enable(3),
      w.skinning && a.enable(4),
      w.morphTargets && a.enable(5),
      w.morphNormals && a.enable(6),
      w.morphColors && a.enable(7),
      w.premultipliedAlpha && a.enable(8),
      w.shadowMapEnabled && a.enable(9),
      w.physicallyCorrectLights && a.enable(10),
      w.doubleSided && a.enable(11),
      w.flipSided && a.enable(12),
      w.useDepthPacking && a.enable(13),
      w.dithering && a.enable(14),
      w.specularIntensityMap && a.enable(15),
      w.specularColorMap && a.enable(16),
      w.transmission && a.enable(17),
      w.transmissionMap && a.enable(18),
      w.thicknessMap && a.enable(19),
      w.sheen && a.enable(20),
      w.sheenColorMap && a.enable(21),
      w.sheenRoughnessMap && a.enable(22),
      w.decodeVideoTexture && a.enable(23),
      w.opaque && a.enable(24),
      M.push(a.mask);
  }
  function v(M) {
    const w = g[M.type];
    let D;
    if (w) {
      const q = jn[w];
      D = aM.clone(q.uniforms);
    } else D = M.uniforms;
    return D;
  }
  function y(M, w) {
    let D;
    for (let q = 0, Q = c.length; q < Q; q++) {
      const k = c[q];
      if (k.cacheKey === w) {
        (D = k), ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && ((D = new xw(i, w, M, s)), c.push(D)), D;
  }
  function b(M) {
    if (--M.usedTimes === 0) {
      const w = c.indexOf(M);
      (c[w] = c[c.length - 1]), c.pop(), M.destroy();
    }
  }
  function T(M) {
    l.remove(M);
  }
  function R() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: m,
    getUniforms: v,
    acquireProgram: y,
    releaseProgram: b,
    releaseShaderCache: T,
    programs: c,
    dispose: R,
  };
}
function Sw() {
  let i = new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && ((o = {}), i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: r };
}
function ww(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function gd(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function _d() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function o(f, h, d, g, p, m) {
    let _ = i[e];
    return (
      _ === void 0
        ? ((_ = {
            id: f.id,
            object: f,
            geometry: h,
            material: d,
            groupOrder: g,
            renderOrder: f.renderOrder,
            z: p,
            group: m,
          }),
          (i[e] = _))
        : ((_.id = f.id),
          (_.object = f),
          (_.geometry = h),
          (_.material = d),
          (_.groupOrder = g),
          (_.renderOrder = f.renderOrder),
          (_.z = p),
          (_.group = m)),
      e++,
      _
    );
  }
  function a(f, h, d, g, p, m) {
    const _ = o(f, h, d, g, p, m);
    d.transmission > 0
      ? n.push(_)
      : d.transparent === !0
      ? r.push(_)
      : t.push(_);
  }
  function l(f, h, d, g, p, m) {
    const _ = o(f, h, d, g, p, m);
    d.transmission > 0
      ? n.unshift(_)
      : d.transparent === !0
      ? r.unshift(_)
      : t.unshift(_);
  }
  function c(f, h) {
    t.length > 1 && t.sort(f || ww),
      n.length > 1 && n.sort(h || gd),
      r.length > 1 && r.sort(h || gd);
  }
  function u() {
    for (let f = e, h = i.length; f < h; f++) {
      const d = i[f];
      if (d.id === null) break;
      (d.id = null),
        (d.object = null),
        (d.geometry = null),
        (d.material = null),
        (d.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function Tw() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new _d()), i.set(n, [o]))
        : r >= s.length
        ? ((o = new _d()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Ew() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new N(), color: new qe() };
          break;
        case 'SpotLight':
          t = {
            position: new N(),
            direction: new N(),
            color: new qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          t = { position: new N(), color: new qe(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new N(), skyColor: new qe(), groundColor: new qe() };
          break;
        case 'RectAreaLight':
          t = {
            color: new qe(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function Aw() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De(),
          };
          break;
        case 'SpotLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De(),
          };
          break;
        case 'PointLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let Cw = 0;
function Pw(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Rw(i, e) {
  const t = new Ew(),
    n = Aw(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) r.probe.push(new N());
  const s = new N(),
    o = new ht(),
    a = new ht();
  function l(u, f) {
    let h = 0,
      d = 0,
      g = 0;
    for (let q = 0; q < 9; q++) r.probe[q].set(0, 0, 0);
    let p = 0,
      m = 0,
      _ = 0,
      x = 0,
      v = 0,
      y = 0,
      b = 0,
      T = 0,
      R = 0,
      M = 0;
    u.sort(Pw);
    const w = f !== !0 ? Math.PI : 1;
    for (let q = 0, Q = u.length; q < Q; q++) {
      const k = u[q],
        I = k.color,
        $ = k.intensity,
        Z = k.distance,
        Y = k.shadow && k.shadow.map ? k.shadow.map.texture : null;
      if (k.isAmbientLight)
        (h += I.r * $ * w), (d += I.g * $ * w), (g += I.b * $ * w);
      else if (k.isLightProbe)
        for (let V = 0; V < 9; V++)
          r.probe[V].addScaledVector(k.sh.coefficients[V], $);
      else if (k.isDirectionalLight) {
        const V = t.get(k);
        if (
          (V.color.copy(k.color).multiplyScalar(k.intensity * w), k.castShadow)
        ) {
          const z = k.shadow,
            H = n.get(k);
          (H.shadowBias = z.bias),
            (H.shadowNormalBias = z.normalBias),
            (H.shadowRadius = z.radius),
            (H.shadowMapSize = z.mapSize),
            (r.directionalShadow[p] = H),
            (r.directionalShadowMap[p] = Y),
            (r.directionalShadowMatrix[p] = k.shadow.matrix),
            y++;
        }
        (r.directional[p] = V), p++;
      } else if (k.isSpotLight) {
        const V = t.get(k);
        V.position.setFromMatrixPosition(k.matrixWorld),
          V.color.copy(I).multiplyScalar($ * w),
          (V.distance = Z),
          (V.coneCos = Math.cos(k.angle)),
          (V.penumbraCos = Math.cos(k.angle * (1 - k.penumbra))),
          (V.decay = k.decay),
          (r.spot[_] = V);
        const z = k.shadow;
        if (
          (k.map &&
            ((r.spotLightMap[R] = k.map),
            R++,
            z.updateMatrices(k),
            k.castShadow && M++),
          (r.spotLightMatrix[_] = z.matrix),
          k.castShadow)
        ) {
          const H = n.get(k);
          (H.shadowBias = z.bias),
            (H.shadowNormalBias = z.normalBias),
            (H.shadowRadius = z.radius),
            (H.shadowMapSize = z.mapSize),
            (r.spotShadow[_] = H),
            (r.spotShadowMap[_] = Y),
            T++;
        }
        _++;
      } else if (k.isRectAreaLight) {
        const V = t.get(k);
        V.color.copy(I).multiplyScalar($),
          V.halfWidth.set(k.width * 0.5, 0, 0),
          V.halfHeight.set(0, k.height * 0.5, 0),
          (r.rectArea[x] = V),
          x++;
      } else if (k.isPointLight) {
        const V = t.get(k);
        if (
          (V.color.copy(k.color).multiplyScalar(k.intensity * w),
          (V.distance = k.distance),
          (V.decay = k.decay),
          k.castShadow)
        ) {
          const z = k.shadow,
            H = n.get(k);
          (H.shadowBias = z.bias),
            (H.shadowNormalBias = z.normalBias),
            (H.shadowRadius = z.radius),
            (H.shadowMapSize = z.mapSize),
            (H.shadowCameraNear = z.camera.near),
            (H.shadowCameraFar = z.camera.far),
            (r.pointShadow[m] = H),
            (r.pointShadowMap[m] = Y),
            (r.pointShadowMatrix[m] = k.shadow.matrix),
            b++;
        }
        (r.point[m] = V), m++;
      } else if (k.isHemisphereLight) {
        const V = t.get(k);
        V.skyColor.copy(k.color).multiplyScalar($ * w),
          V.groundColor.copy(k.groundColor).multiplyScalar($ * w),
          (r.hemi[v] = V),
          v++;
      }
    }
    x > 0 &&
      (e.isWebGL2 || i.has('OES_texture_float_linear') === !0
        ? ((r.rectAreaLTC1 = ye.LTC_FLOAT_1), (r.rectAreaLTC2 = ye.LTC_FLOAT_2))
        : i.has('OES_texture_half_float_linear') === !0
        ? ((r.rectAreaLTC1 = ye.LTC_HALF_1), (r.rectAreaLTC2 = ye.LTC_HALF_2))
        : console.error(
            'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.'
          )),
      (r.ambient[0] = h),
      (r.ambient[1] = d),
      (r.ambient[2] = g);
    const D = r.hash;
    (D.directionalLength !== p ||
      D.pointLength !== m ||
      D.spotLength !== _ ||
      D.rectAreaLength !== x ||
      D.hemiLength !== v ||
      D.numDirectionalShadows !== y ||
      D.numPointShadows !== b ||
      D.numSpotShadows !== T ||
      D.numSpotMaps !== R) &&
      ((r.directional.length = p),
      (r.spot.length = _),
      (r.rectArea.length = x),
      (r.point.length = m),
      (r.hemi.length = v),
      (r.directionalShadow.length = y),
      (r.directionalShadowMap.length = y),
      (r.pointShadow.length = b),
      (r.pointShadowMap.length = b),
      (r.spotShadow.length = T),
      (r.spotShadowMap.length = T),
      (r.directionalShadowMatrix.length = y),
      (r.pointShadowMatrix.length = b),
      (r.spotLightMatrix.length = T + R - M),
      (r.spotLightMap.length = R),
      (r.numSpotLightShadowsWithMaps = M),
      (D.directionalLength = p),
      (D.pointLength = m),
      (D.spotLength = _),
      (D.rectAreaLength = x),
      (D.hemiLength = v),
      (D.numDirectionalShadows = y),
      (D.numPointShadows = b),
      (D.numSpotShadows = T),
      (D.numSpotMaps = R),
      (r.version = Cw++));
  }
  function c(u, f) {
    let h = 0,
      d = 0,
      g = 0,
      p = 0,
      m = 0;
    const _ = f.matrixWorldInverse;
    for (let x = 0, v = u.length; x < v; x++) {
      const y = u[x];
      if (y.isDirectionalLight) {
        const b = r.directional[h];
        b.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          b.direction.sub(s),
          b.direction.transformDirection(_),
          h++;
      } else if (y.isSpotLight) {
        const b = r.spot[g];
        b.position.setFromMatrixPosition(y.matrixWorld),
          b.position.applyMatrix4(_),
          b.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          b.direction.sub(s),
          b.direction.transformDirection(_),
          g++;
      } else if (y.isRectAreaLight) {
        const b = r.rectArea[p];
        b.position.setFromMatrixPosition(y.matrixWorld),
          b.position.applyMatrix4(_),
          a.identity(),
          o.copy(y.matrixWorld),
          o.premultiply(_),
          a.extractRotation(o),
          b.halfWidth.set(y.width * 0.5, 0, 0),
          b.halfHeight.set(0, y.height * 0.5, 0),
          b.halfWidth.applyMatrix4(a),
          b.halfHeight.applyMatrix4(a),
          p++;
      } else if (y.isPointLight) {
        const b = r.point[d];
        b.position.setFromMatrixPosition(y.matrixWorld),
          b.position.applyMatrix4(_),
          d++;
      } else if (y.isHemisphereLight) {
        const b = r.hemi[m];
        b.direction.setFromMatrixPosition(y.matrixWorld),
          b.direction.transformDirection(_),
          m++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function xd(i, e) {
  const t = new Rw(i, e),
    n = [],
    r = [];
  function s() {
    (n.length = 0), (r.length = 0);
  }
  function o(f) {
    n.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(n, f);
  }
  function c(f) {
    t.setupView(n, f);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: r, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function Lw(i, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new xd(i, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new xd(i, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Dw extends Ji {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = Ry),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Iw extends Ji {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.referencePosition = new N()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Ow = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Fw = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Nw(i, e, t) {
  let n = new Im();
  const r = new De(),
    s = new De(),
    o = new Dt(),
    a = new Dw({ depthPacking: Ly }),
    l = new Iw(),
    c = {},
    u = t.maxTextureSize,
    f = { 0: En, 1: Fs, 2: di },
    h = new Fr({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new De() },
        radius: { value: 4 },
      },
      vertexShader: Ow,
      fragmentShader: Fw,
    }),
    d = h.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new jt();
  g.setAttribute(
    'position',
    new An(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new Mn(g, h),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = gm),
    (this.render = function (y, b, T) {
      if (
        m.enabled === !1 ||
        (m.autoUpdate === !1 && m.needsUpdate === !1) ||
        y.length === 0
      )
        return;
      const R = i.getRenderTarget(),
        M = i.getActiveCubeFace(),
        w = i.getActiveMipmapLevel(),
        D = i.state;
      D.setBlending(Hi),
        D.buffers.color.setClear(1, 1, 1, 1),
        D.buffers.depth.setTest(!0),
        D.setScissorTest(!1);
      for (let q = 0, Q = y.length; q < Q; q++) {
        const k = y[q],
          I = k.shadow;
        if (I === void 0) {
          console.warn('THREE.WebGLShadowMap:', k, 'has no shadow.');
          continue;
        }
        if (I.autoUpdate === !1 && I.needsUpdate === !1) continue;
        r.copy(I.mapSize);
        const $ = I.getFrameExtents();
        if (
          (r.multiply($),
          s.copy(I.mapSize),
          (r.x > u || r.y > u) &&
            (r.x > u &&
              ((s.x = Math.floor(u / $.x)),
              (r.x = s.x * $.x),
              (I.mapSize.x = s.x)),
            r.y > u &&
              ((s.y = Math.floor(u / $.y)),
              (r.y = s.y * $.y),
              (I.mapSize.y = s.y))),
          I.map === null)
        ) {
          const Y = this.type !== uo ? { minFilter: Yt, magFilter: Yt } : {};
          (I.map = new Or(r.x, r.y, Y)),
            (I.map.texture.name = k.name + '.shadowMap'),
            I.camera.updateProjectionMatrix();
        }
        i.setRenderTarget(I.map), i.clear();
        const Z = I.getViewportCount();
        for (let Y = 0; Y < Z; Y++) {
          const V = I.getViewport(Y);
          o.set(s.x * V.x, s.y * V.y, s.x * V.z, s.y * V.w),
            D.viewport(o),
            I.updateMatrices(k, Y),
            (n = I.getFrustum()),
            v(b, T, I.camera, k, this.type);
        }
        I.isPointLightShadow !== !0 && this.type === uo && _(I, T),
          (I.needsUpdate = !1);
      }
      (m.needsUpdate = !1), i.setRenderTarget(R, M, w);
    });
  function _(y, b) {
    const T = e.update(p);
    h.defines.VSM_SAMPLES !== y.blurSamples &&
      ((h.defines.VSM_SAMPLES = y.blurSamples),
      (d.defines.VSM_SAMPLES = y.blurSamples),
      (h.needsUpdate = !0),
      (d.needsUpdate = !0)),
      y.mapPass === null && (y.mapPass = new Or(r.x, r.y)),
      (h.uniforms.shadow_pass.value = y.map.texture),
      (h.uniforms.resolution.value = y.mapSize),
      (h.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.mapPass),
      i.clear(),
      i.renderBufferDirect(b, null, T, h, p, null),
      (d.uniforms.shadow_pass.value = y.mapPass.texture),
      (d.uniforms.resolution.value = y.mapSize),
      (d.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.map),
      i.clear(),
      i.renderBufferDirect(b, null, T, d, p, null);
  }
  function x(y, b, T, R, M, w) {
    let D = null;
    const q =
      T.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (
      (q !== void 0 ? (D = q) : (D = T.isPointLight === !0 ? l : a),
      (i.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0))
    ) {
      const Q = D.uuid,
        k = b.uuid;
      let I = c[Q];
      I === void 0 && ((I = {}), (c[Q] = I));
      let $ = I[k];
      $ === void 0 && (($ = D.clone()), (I[k] = $)), (D = $);
    }
    return (
      (D.visible = b.visible),
      (D.wireframe = b.wireframe),
      w === uo
        ? (D.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (D.side = b.shadowSide !== null ? b.shadowSide : f[b.side]),
      (D.alphaMap = b.alphaMap),
      (D.alphaTest = b.alphaTest),
      (D.clipShadows = b.clipShadows),
      (D.clippingPlanes = b.clippingPlanes),
      (D.clipIntersection = b.clipIntersection),
      (D.displacementMap = b.displacementMap),
      (D.displacementScale = b.displacementScale),
      (D.displacementBias = b.displacementBias),
      (D.wireframeLinewidth = b.wireframeLinewidth),
      (D.linewidth = b.linewidth),
      T.isPointLight === !0 &&
        D.isMeshDistanceMaterial === !0 &&
        (D.referencePosition.setFromMatrixPosition(T.matrixWorld),
        (D.nearDistance = R),
        (D.farDistance = M)),
      D
    );
  }
  function v(y, b, T, R, M) {
    if (y.visible === !1) return;
    if (
      y.layers.test(b.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && M === uo)) &&
      (!y.frustumCulled || n.intersectsObject(y))
    ) {
      y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, y.matrixWorld);
      const q = e.update(y),
        Q = y.material;
      if (Array.isArray(Q)) {
        const k = q.groups;
        for (let I = 0, $ = k.length; I < $; I++) {
          const Z = k[I],
            Y = Q[Z.materialIndex];
          if (Y && Y.visible) {
            const V = x(y, Y, R, T.near, T.far, M);
            i.renderBufferDirect(T, null, q, V, y, Z);
          }
        }
      } else if (Q.visible) {
        const k = x(y, Q, R, T.near, T.far, M);
        i.renderBufferDirect(T, null, q, k, y, null);
      }
    }
    const D = y.children;
    for (let q = 0, Q = D.length; q < Q; q++) v(D[q], b, T, R, M);
  }
}
function zw(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let O = !1;
    const re = new Dt();
    let ge = null;
    const Ae = new Dt(0, 0, 0, 0);
    return {
      setMask: function (Pe) {
        ge !== Pe && !O && (i.colorMask(Pe, Pe, Pe, Pe), (ge = Pe));
      },
      setLocked: function (Pe) {
        O = Pe;
      },
      setClear: function (Pe, je, St, Ft, er) {
        er === !0 && ((Pe *= Ft), (je *= Ft), (St *= Ft)),
          re.set(Pe, je, St, Ft),
          Ae.equals(re) === !1 && (i.clearColor(Pe, je, St, Ft), Ae.copy(re));
      },
      reset: function () {
        (O = !1), (ge = null), Ae.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let O = !1,
      re = null,
      ge = null,
      Ae = null;
    return {
      setTest: function (Pe) {
        Pe ? le(2929) : ce(2929);
      },
      setMask: function (Pe) {
        re !== Pe && !O && (i.depthMask(Pe), (re = Pe));
      },
      setFunc: function (Pe) {
        if (ge !== Pe) {
          switch (Pe) {
            case ey:
              i.depthFunc(512);
              break;
            case ty:
              i.depthFunc(519);
              break;
            case ny:
              i.depthFunc(513);
              break;
            case Uc:
              i.depthFunc(515);
              break;
            case iy:
              i.depthFunc(514);
              break;
            case ry:
              i.depthFunc(518);
              break;
            case sy:
              i.depthFunc(516);
              break;
            case oy:
              i.depthFunc(517);
              break;
            default:
              i.depthFunc(515);
          }
          ge = Pe;
        }
      },
      setLocked: function (Pe) {
        O = Pe;
      },
      setClear: function (Pe) {
        Ae !== Pe && (i.clearDepth(Pe), (Ae = Pe));
      },
      reset: function () {
        (O = !1), (re = null), (ge = null), (Ae = null);
      },
    };
  }
  function o() {
    let O = !1,
      re = null,
      ge = null,
      Ae = null,
      Pe = null,
      je = null,
      St = null,
      Ft = null,
      er = null;
    return {
      setTest: function (it) {
        O || (it ? le(2960) : ce(2960));
      },
      setMask: function (it) {
        re !== it && !O && (i.stencilMask(it), (re = it));
      },
      setFunc: function (it, ni, dn) {
        (ge !== it || Ae !== ni || Pe !== dn) &&
          (i.stencilFunc(it, ni, dn), (ge = it), (Ae = ni), (Pe = dn));
      },
      setOp: function (it, ni, dn) {
        (je !== it || St !== ni || Ft !== dn) &&
          (i.stencilOp(it, ni, dn), (je = it), (St = ni), (Ft = dn));
      },
      setLocked: function (it) {
        O = it;
      },
      setClear: function (it) {
        er !== it && (i.clearStencil(it), (er = it));
      },
      reset: function () {
        (O = !1),
          (re = null),
          (ge = null),
          (Ae = null),
          (Pe = null),
          (je = null),
          (St = null),
          (Ft = null),
          (er = null);
      },
    };
  }
  const a = new r(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    f = new WeakMap();
  let h = {},
    d = {},
    g = new WeakMap(),
    p = [],
    m = null,
    _ = !1,
    x = null,
    v = null,
    y = null,
    b = null,
    T = null,
    R = null,
    M = null,
    w = !1,
    D = null,
    q = null,
    Q = null,
    k = null,
    I = null;
  const $ = i.getParameter(35661);
  let Z = !1,
    Y = 0;
  const V = i.getParameter(7938);
  V.indexOf('WebGL') !== -1
    ? ((Y = parseFloat(/^WebGL (\d)/.exec(V)[1])), (Z = Y >= 1))
    : V.indexOf('OpenGL ES') !== -1 &&
      ((Y = parseFloat(/^OpenGL ES (\d)/.exec(V)[1])), (Z = Y >= 2));
  let z = null,
    H = {};
  const ue = i.getParameter(3088),
    te = i.getParameter(2978),
    de = new Dt().fromArray(ue),
    xe = new Dt().fromArray(te);
  function G(O, re, ge) {
    const Ae = new Uint8Array(4),
      Pe = i.createTexture();
    i.bindTexture(O, Pe),
      i.texParameteri(O, 10241, 9728),
      i.texParameteri(O, 10240, 9728);
    for (let je = 0; je < ge; je++)
      i.texImage2D(re + je, 0, 6408, 1, 1, 0, 6408, 5121, Ae);
    return Pe;
  }
  const F = {};
  (F[3553] = G(3553, 3553, 1)),
    (F[34067] = G(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    le(2929),
    l.setFunc(Uc),
    ee(!1),
    he(uh),
    le(2884),
    X(Hi);
  function le(O) {
    h[O] !== !0 && (i.enable(O), (h[O] = !0));
  }
  function ce(O) {
    h[O] !== !1 && (i.disable(O), (h[O] = !1));
  }
  function ve(O, re) {
    return d[O] !== re
      ? (i.bindFramebuffer(O, re),
        (d[O] = re),
        n && (O === 36009 && (d[36160] = re), O === 36160 && (d[36009] = re)),
        !0)
      : !1;
  }
  function _e(O, re) {
    let ge = p,
      Ae = !1;
    if (O)
      if (
        ((ge = g.get(re)),
        ge === void 0 && ((ge = []), g.set(re, ge)),
        O.isWebGLMultipleRenderTargets)
      ) {
        const Pe = O.texture;
        if (ge.length !== Pe.length || ge[0] !== 36064) {
          for (let je = 0, St = Pe.length; je < St; je++) ge[je] = 36064 + je;
          (ge.length = Pe.length), (Ae = !0);
        }
      } else ge[0] !== 36064 && ((ge[0] = 36064), (Ae = !0));
    else ge[0] !== 1029 && ((ge[0] = 1029), (Ae = !0));
    Ae &&
      (t.isWebGL2
        ? i.drawBuffers(ge)
        : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(ge));
  }
  function Te(O) {
    return m !== O ? (i.useProgram(O), (m = O), !0) : !1;
  }
  const A = { [ps]: 32774, [Hv]: 32778, [Wv]: 32779 };
  if (n) (A[dh] = 32775), (A[ph] = 32776);
  else {
    const O = e.get('EXT_blend_minmax');
    O !== null && ((A[dh] = O.MIN_EXT), (A[ph] = O.MAX_EXT));
  }
  const P = {
    [qv]: 0,
    [Xv]: 1,
    [jv]: 768,
    [_m]: 770,
    [Qv]: 776,
    [Kv]: 774,
    [Yv]: 772,
    [$v]: 769,
    [xm]: 771,
    [Jv]: 775,
    [Zv]: 773,
  };
  function X(O, re, ge, Ae, Pe, je, St, Ft) {
    if (O === Hi) {
      _ === !0 && (ce(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (le(3042), (_ = !0)), O !== Gv)) {
      if (O !== x || Ft !== w) {
        if (
          ((v !== ps || T !== ps) &&
            (i.blendEquation(32774), (v = ps), (T = ps)),
          Ft)
        )
          switch (O) {
            case Ss:
              i.blendFuncSeparate(1, 771, 1, 771);
              break;
            case xo:
              i.blendFunc(1, 1);
              break;
            case fh:
              i.blendFuncSeparate(0, 769, 0, 1);
              break;
            case hh:
              i.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', O);
              break;
          }
        else
          switch (O) {
            case Ss:
              i.blendFuncSeparate(770, 771, 1, 771);
              break;
            case xo:
              i.blendFunc(770, 1);
              break;
            case fh:
              i.blendFuncSeparate(0, 769, 0, 1);
              break;
            case hh:
              i.blendFunc(0, 768);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', O);
              break;
          }
        (y = null), (b = null), (R = null), (M = null), (x = O), (w = Ft);
      }
      return;
    }
    (Pe = Pe || re),
      (je = je || ge),
      (St = St || Ae),
      (re !== v || Pe !== T) &&
        (i.blendEquationSeparate(A[re], A[Pe]), (v = re), (T = Pe)),
      (ge !== y || Ae !== b || je !== R || St !== M) &&
        (i.blendFuncSeparate(P[ge], P[Ae], P[je], P[St]),
        (y = ge),
        (b = Ae),
        (R = je),
        (M = St)),
      (x = O),
      (w = null);
  }
  function K(O, re) {
    O.side === di ? ce(2884) : le(2884);
    let ge = O.side === En;
    re && (ge = !ge),
      ee(ge),
      O.blending === Ss && O.transparent === !1
        ? X(Hi)
        : X(
            O.blending,
            O.blendEquation,
            O.blendSrc,
            O.blendDst,
            O.blendEquationAlpha,
            O.blendSrcAlpha,
            O.blendDstAlpha,
            O.premultipliedAlpha
          ),
      l.setFunc(O.depthFunc),
      l.setTest(O.depthTest),
      l.setMask(O.depthWrite),
      a.setMask(O.colorWrite);
    const Ae = O.stencilWrite;
    c.setTest(Ae),
      Ae &&
        (c.setMask(O.stencilWriteMask),
        c.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask),
        c.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)),
      oe(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits),
      O.alphaToCoverage === !0 ? le(32926) : ce(32926);
  }
  function ee(O) {
    D !== O && (O ? i.frontFace(2304) : i.frontFace(2305), (D = O));
  }
  function he(O) {
    O !== Bv
      ? (le(2884),
        O !== q &&
          (O === uh
            ? i.cullFace(1029)
            : O === kv
            ? i.cullFace(1028)
            : i.cullFace(1032)))
      : ce(2884),
      (q = O);
  }
  function pe(O) {
    O !== Q && (Z && i.lineWidth(O), (Q = O));
  }
  function oe(O, re, ge) {
    O
      ? (le(32823),
        (k !== re || I !== ge) && (i.polygonOffset(re, ge), (k = re), (I = ge)))
      : ce(32823);
  }
  function me(O) {
    O ? le(3089) : ce(3089);
  }
  function ae(O) {
    O === void 0 && (O = 33984 + $ - 1),
      z !== O && (i.activeTexture(O), (z = O));
  }
  function E(O, re, ge) {
    ge === void 0 && (z === null ? (ge = 33984 + $ - 1) : (ge = z));
    let Ae = H[ge];
    Ae === void 0 && ((Ae = { type: void 0, texture: void 0 }), (H[ge] = Ae)),
      (Ae.type !== O || Ae.texture !== re) &&
        (z !== ge && (i.activeTexture(ge), (z = ge)),
        i.bindTexture(O, re || F[O]),
        (Ae.type = O),
        (Ae.texture = re));
  }
  function S() {
    const O = H[z];
    O !== void 0 &&
      O.type !== void 0 &&
      (i.bindTexture(O.type, null), (O.type = void 0), (O.texture = void 0));
  }
  function U() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function J() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function ie() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function fe() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function Me() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function L() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function B() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function be() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function Ee() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function Se() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function Ce(O) {
    de.equals(O) === !1 && (i.scissor(O.x, O.y, O.z, O.w), de.copy(O));
  }
  function we(O) {
    xe.equals(O) === !1 && (i.viewport(O.x, O.y, O.z, O.w), xe.copy(O));
  }
  function Ie(O, re) {
    let ge = f.get(re);
    ge === void 0 && ((ge = new WeakMap()), f.set(re, ge));
    let Ae = ge.get(O);
    Ae === void 0 && ((Ae = i.getUniformBlockIndex(re, O.name)), ge.set(O, Ae));
  }
  function ke(O, re) {
    const Ae = f.get(re).get(O);
    u.get(O) !== Ae &&
      (i.uniformBlockBinding(re, Ae, O.__bindingPointIndex), u.set(O, Ae));
  }
  function Ke() {
    i.disable(3042),
      i.disable(2884),
      i.disable(2929),
      i.disable(32823),
      i.disable(3089),
      i.disable(2960),
      i.disable(32926),
      i.blendEquation(32774),
      i.blendFunc(1, 0),
      i.blendFuncSeparate(1, 0, 1, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(513),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(519, 0, 4294967295),
      i.stencilOp(7680, 7680, 7680),
      i.clearStencil(0),
      i.cullFace(1029),
      i.frontFace(2305),
      i.polygonOffset(0, 0),
      i.activeTexture(33984),
      i.bindFramebuffer(36160, null),
      n === !0 &&
        (i.bindFramebuffer(36009, null), i.bindFramebuffer(36008, null)),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (h = {}),
      (z = null),
      (H = {}),
      (d = {}),
      (g = new WeakMap()),
      (p = []),
      (m = null),
      (_ = !1),
      (x = null),
      (v = null),
      (y = null),
      (b = null),
      (T = null),
      (R = null),
      (M = null),
      (w = !1),
      (D = null),
      (q = null),
      (Q = null),
      (k = null),
      (I = null),
      de.set(0, 0, i.canvas.width, i.canvas.height),
      xe.set(0, 0, i.canvas.width, i.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: le,
    disable: ce,
    bindFramebuffer: ve,
    drawBuffers: _e,
    useProgram: Te,
    setBlending: X,
    setMaterial: K,
    setFlipSided: ee,
    setCullFace: he,
    setLineWidth: pe,
    setPolygonOffset: oe,
    setScissorTest: me,
    activeTexture: ae,
    bindTexture: E,
    unbindTexture: S,
    compressedTexImage2D: U,
    compressedTexImage3D: J,
    texImage2D: Ee,
    texImage3D: Se,
    updateUBOMapping: Ie,
    uniformBlockBinding: ke,
    texStorage2D: B,
    texStorage3D: be,
    texSubImage2D: ie,
    texSubImage3D: fe,
    compressedTexSubImage2D: Me,
    compressedTexSubImage3D: L,
    scissor: Ce,
    viewport: we,
    reset: Ke,
  };
}
function Uw(i, e, t, n, r, s, o) {
  const a = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    u = r.maxTextureSize,
    f = r.maxSamples,
    h = e.has('WEBGL_multisampled_render_to_texture')
      ? e.get('WEBGL_multisampled_render_to_texture')
      : null,
    d = /OculusBrowser/g.test(
      typeof navigator > 'u' ? '' : navigator.userAgent
    ),
    g = new WeakMap();
  let p;
  const m = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function x(E, S) {
    return _ ? new OffscreenCanvas(E, S) : Fo('canvas');
  }
  function v(E, S, U, J) {
    let ie = 1;
    if (
      ((E.width > J || E.height > J) && (ie = J / Math.max(E.width, E.height)),
      ie < 1 || S === !0)
    )
      if (
        (typeof HTMLImageElement < 'u' && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && E instanceof ImageBitmap)
      ) {
        const fe = S ? Va : Math.floor,
          Me = fe(ie * E.width),
          L = fe(ie * E.height);
        p === void 0 && (p = x(Me, L));
        const B = U ? x(Me, L) : p;
        return (
          (B.width = Me),
          (B.height = L),
          B.getContext('2d').drawImage(E, 0, 0, Me, L),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              E.width +
              'x' +
              E.height +
              ') to (' +
              Me +
              'x' +
              L +
              ').'
          ),
          B
        );
      } else
        return (
          'data' in E &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                E.width +
                'x' +
                E.height +
                ').'
            ),
          E
        );
    return E;
  }
  function y(E) {
    return qc(E.width) && qc(E.height);
  }
  function b(E) {
    return a
      ? !1
      : E.wrapS !== On ||
          E.wrapT !== On ||
          (E.minFilter !== Yt && E.minFilter !== vn);
  }
  function T(E, S) {
    return E.generateMipmaps && S && E.minFilter !== Yt && E.minFilter !== vn;
  }
  function R(E) {
    i.generateMipmap(E);
  }
  function M(E, S, U, J, ie = !1) {
    if (a === !1) return S;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let fe = S;
    return (
      S === 6403 &&
        (U === 5126 && (fe = 33326),
        U === 5131 && (fe = 33325),
        U === 5121 && (fe = 33321)),
      S === 33319 &&
        (U === 5126 && (fe = 33328),
        U === 5131 && (fe = 33327),
        U === 5121 && (fe = 33323)),
      S === 6408 &&
        (U === 5126 && (fe = 34836),
        U === 5131 && (fe = 34842),
        U === 5121 && (fe = J === lt && ie === !1 ? 35907 : 32856),
        U === 32819 && (fe = 32854),
        U === 32820 && (fe = 32855)),
      (fe === 33325 ||
        fe === 33326 ||
        fe === 33327 ||
        fe === 33328 ||
        fe === 34842 ||
        fe === 34836) &&
        e.get('EXT_color_buffer_float'),
      fe
    );
  }
  function w(E, S, U) {
    return T(E, U) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== Yt && E.minFilter !== vn)
      ? Math.log2(Math.max(S.width, S.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? S.mipmaps.length
      : 1;
  }
  function D(E) {
    return E === Yt || E === mh || E === gh ? 9728 : 9729;
  }
  function q(E) {
    const S = E.target;
    S.removeEventListener('dispose', q), k(S), S.isVideoTexture && g.delete(S);
  }
  function Q(E) {
    const S = E.target;
    S.removeEventListener('dispose', Q), $(S);
  }
  function k(E) {
    const S = n.get(E);
    if (S.__webglInit === void 0) return;
    const U = E.source,
      J = m.get(U);
    if (J) {
      const ie = J[S.__cacheKey];
      ie.usedTimes--,
        ie.usedTimes === 0 && I(E),
        Object.keys(J).length === 0 && m.delete(U);
    }
    n.remove(E);
  }
  function I(E) {
    const S = n.get(E);
    i.deleteTexture(S.__webglTexture);
    const U = E.source,
      J = m.get(U);
    delete J[S.__cacheKey], o.memory.textures--;
  }
  function $(E) {
    const S = E.texture,
      U = n.get(E),
      J = n.get(S);
    if (
      (J.__webglTexture !== void 0 &&
        (i.deleteTexture(J.__webglTexture), o.memory.textures--),
      E.depthTexture && E.depthTexture.dispose(),
      E.isWebGLCubeRenderTarget)
    )
      for (let ie = 0; ie < 6; ie++)
        i.deleteFramebuffer(U.__webglFramebuffer[ie]),
          U.__webglDepthbuffer &&
            i.deleteRenderbuffer(U.__webglDepthbuffer[ie]);
    else {
      if (
        (i.deleteFramebuffer(U.__webglFramebuffer),
        U.__webglDepthbuffer && i.deleteRenderbuffer(U.__webglDepthbuffer),
        U.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(U.__webglMultisampledFramebuffer),
        U.__webglColorRenderbuffer)
      )
        for (let ie = 0; ie < U.__webglColorRenderbuffer.length; ie++)
          U.__webglColorRenderbuffer[ie] &&
            i.deleteRenderbuffer(U.__webglColorRenderbuffer[ie]);
      U.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(U.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let ie = 0, fe = S.length; ie < fe; ie++) {
        const Me = n.get(S[ie]);
        Me.__webglTexture &&
          (i.deleteTexture(Me.__webglTexture), o.memory.textures--),
          n.remove(S[ie]);
      }
    n.remove(S), n.remove(E);
  }
  let Z = 0;
  function Y() {
    Z = 0;
  }
  function V() {
    const E = Z;
    return (
      E >= l &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            E +
            ' texture units while this GPU supports only ' +
            l
        ),
      (Z += 1),
      E
    );
  }
  function z(E) {
    const S = [];
    return (
      S.push(E.wrapS),
      S.push(E.wrapT),
      S.push(E.wrapR || 0),
      S.push(E.magFilter),
      S.push(E.minFilter),
      S.push(E.anisotropy),
      S.push(E.internalFormat),
      S.push(E.format),
      S.push(E.type),
      S.push(E.generateMipmaps),
      S.push(E.premultiplyAlpha),
      S.push(E.flipY),
      S.push(E.unpackAlignment),
      S.push(E.encoding),
      S.join()
    );
  }
  function H(E, S) {
    const U = n.get(E);
    if (
      (E.isVideoTexture && me(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        U.__version !== E.version)
    ) {
      const J = E.image;
      if (J === null)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but no image data found.'
        );
      else if (J.complete === !1)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
        );
      else {
        ce(U, E, S);
        return;
      }
    }
    t.bindTexture(3553, U.__webglTexture, 33984 + S);
  }
  function ue(E, S) {
    const U = n.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      ce(U, E, S);
      return;
    }
    t.bindTexture(35866, U.__webglTexture, 33984 + S);
  }
  function te(E, S) {
    const U = n.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      ce(U, E, S);
      return;
    }
    t.bindTexture(32879, U.__webglTexture, 33984 + S);
  }
  function de(E, S) {
    const U = n.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      ve(U, E, S);
      return;
    }
    t.bindTexture(34067, U.__webglTexture, 33984 + S);
  }
  const xe = { [Vc]: 10497, [On]: 33071, [Gc]: 33648 },
    G = {
      [Yt]: 9728,
      [mh]: 9984,
      [gh]: 9986,
      [vn]: 9729,
      [py]: 9985,
      [cl]: 9987,
    };
  function F(E, S, U) {
    if (
      (U
        ? (i.texParameteri(E, 10242, xe[S.wrapS]),
          i.texParameteri(E, 10243, xe[S.wrapT]),
          (E === 32879 || E === 35866) &&
            i.texParameteri(E, 32882, xe[S.wrapR]),
          i.texParameteri(E, 10240, G[S.magFilter]),
          i.texParameteri(E, 10241, G[S.minFilter]))
        : (i.texParameteri(E, 10242, 33071),
          i.texParameteri(E, 10243, 33071),
          (E === 32879 || E === 35866) && i.texParameteri(E, 32882, 33071),
          (S.wrapS !== On || S.wrapT !== On) &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
            ),
          i.texParameteri(E, 10240, D(S.magFilter)),
          i.texParameteri(E, 10241, D(S.minFilter)),
          S.minFilter !== Yt &&
            S.minFilter !== vn &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
            )),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      const J = e.get('EXT_texture_filter_anisotropic');
      if (
        (S.type === yr && e.has('OES_texture_float_linear') === !1) ||
        (a === !1 &&
          S.type === Oo &&
          e.has('OES_texture_half_float_linear') === !1)
      )
        return;
      (S.anisotropy > 1 || n.get(S).__currentAnisotropy) &&
        (i.texParameterf(
          E,
          J.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(S.anisotropy, r.getMaxAnisotropy())
        ),
        (n.get(S).__currentAnisotropy = S.anisotropy));
    }
  }
  function le(E, S) {
    let U = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), S.addEventListener('dispose', q));
    const J = S.source;
    let ie = m.get(J);
    ie === void 0 && ((ie = {}), m.set(J, ie));
    const fe = z(S);
    if (fe !== E.__cacheKey) {
      ie[fe] === void 0 &&
        ((ie[fe] = { texture: i.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (U = !0)),
        ie[fe].usedTimes++;
      const Me = ie[E.__cacheKey];
      Me !== void 0 &&
        (ie[E.__cacheKey].usedTimes--, Me.usedTimes === 0 && I(S)),
        (E.__cacheKey = fe),
        (E.__webglTexture = ie[fe].texture);
    }
    return U;
  }
  function ce(E, S, U) {
    let J = 3553;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (J = 35866),
      S.isData3DTexture && (J = 32879);
    const ie = le(E, S),
      fe = S.source;
    t.bindTexture(J, E.__webglTexture, 33984 + U);
    const Me = n.get(fe);
    if (fe.version !== Me.__version || ie === !0) {
      t.activeTexture(33984 + U),
        i.pixelStorei(37440, S.flipY),
        i.pixelStorei(37441, S.premultiplyAlpha),
        i.pixelStorei(3317, S.unpackAlignment),
        i.pixelStorei(37443, 0);
      const L = b(S) && y(S.image) === !1;
      let B = v(S.image, L, !1, u);
      B = ae(S, B);
      const be = y(B) || a,
        Ee = s.convert(S.format, S.encoding);
      let Se = s.convert(S.type),
        Ce = M(S.internalFormat, Ee, Se, S.encoding, S.isVideoTexture);
      F(J, S, be);
      let we;
      const Ie = S.mipmaps,
        ke = a && S.isVideoTexture !== !0,
        Ke = Me.__version === void 0 || ie === !0,
        O = w(S, B, be);
      if (S.isDepthTexture)
        (Ce = 6402),
          a
            ? S.type === yr
              ? (Ce = 36012)
              : S.type === vr
              ? (Ce = 33190)
              : S.type === ws
              ? (Ce = 35056)
              : (Ce = 33189)
            : S.type === yr &&
              console.error(
                'WebGLRenderer: Floating point depth texture requires WebGL2.'
              ),
          S.format === Tr &&
            Ce === 6402 &&
            S.type !== Mm &&
            S.type !== vr &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
            ),
            (S.type = vr),
            (Se = s.convert(S.type))),
          S.format === Us &&
            Ce === 6402 &&
            ((Ce = 34041),
            S.type !== ws &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
              ),
              (S.type = ws),
              (Se = s.convert(S.type)))),
          Ke &&
            (ke
              ? t.texStorage2D(3553, 1, Ce, B.width, B.height)
              : t.texImage2D(3553, 0, Ce, B.width, B.height, 0, Ee, Se, null));
      else if (S.isDataTexture)
        if (Ie.length > 0 && be) {
          ke && Ke && t.texStorage2D(3553, O, Ce, Ie[0].width, Ie[0].height);
          for (let re = 0, ge = Ie.length; re < ge; re++)
            (we = Ie[re]),
              ke
                ? t.texSubImage2D(
                    3553,
                    re,
                    0,
                    0,
                    we.width,
                    we.height,
                    Ee,
                    Se,
                    we.data
                  )
                : t.texImage2D(
                    3553,
                    re,
                    Ce,
                    we.width,
                    we.height,
                    0,
                    Ee,
                    Se,
                    we.data
                  );
          S.generateMipmaps = !1;
        } else
          ke
            ? (Ke && t.texStorage2D(3553, O, Ce, B.width, B.height),
              t.texSubImage2D(3553, 0, 0, 0, B.width, B.height, Ee, Se, B.data))
            : t.texImage2D(3553, 0, Ce, B.width, B.height, 0, Ee, Se, B.data);
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          ke &&
            Ke &&
            t.texStorage3D(35866, O, Ce, Ie[0].width, Ie[0].height, B.depth);
          for (let re = 0, ge = Ie.length; re < ge; re++)
            (we = Ie[re]),
              S.format !== Fn
                ? Ee !== null
                  ? ke
                    ? t.compressedTexSubImage3D(
                        35866,
                        re,
                        0,
                        0,
                        0,
                        we.width,
                        we.height,
                        B.depth,
                        Ee,
                        we.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        re,
                        Ce,
                        we.width,
                        we.height,
                        B.depth,
                        0,
                        we.data,
                        0,
                        0
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : ke
                ? t.texSubImage3D(
                    35866,
                    re,
                    0,
                    0,
                    0,
                    we.width,
                    we.height,
                    B.depth,
                    Ee,
                    Se,
                    we.data
                  )
                : t.texImage3D(
                    35866,
                    re,
                    Ce,
                    we.width,
                    we.height,
                    B.depth,
                    0,
                    Ee,
                    Se,
                    we.data
                  );
        } else {
          ke && Ke && t.texStorage2D(3553, O, Ce, Ie[0].width, Ie[0].height);
          for (let re = 0, ge = Ie.length; re < ge; re++)
            (we = Ie[re]),
              S.format !== Fn
                ? Ee !== null
                  ? ke
                    ? t.compressedTexSubImage2D(
                        3553,
                        re,
                        0,
                        0,
                        we.width,
                        we.height,
                        Ee,
                        we.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        re,
                        Ce,
                        we.width,
                        we.height,
                        0,
                        we.data
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : ke
                ? t.texSubImage2D(
                    3553,
                    re,
                    0,
                    0,
                    we.width,
                    we.height,
                    Ee,
                    Se,
                    we.data
                  )
                : t.texImage2D(
                    3553,
                    re,
                    Ce,
                    we.width,
                    we.height,
                    0,
                    Ee,
                    Se,
                    we.data
                  );
        }
      else if (S.isDataArrayTexture)
        ke
          ? (Ke && t.texStorage3D(35866, O, Ce, B.width, B.height, B.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              B.width,
              B.height,
              B.depth,
              Ee,
              Se,
              B.data
            ))
          : t.texImage3D(
              35866,
              0,
              Ce,
              B.width,
              B.height,
              B.depth,
              0,
              Ee,
              Se,
              B.data
            );
      else if (S.isData3DTexture)
        ke
          ? (Ke && t.texStorage3D(32879, O, Ce, B.width, B.height, B.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              B.width,
              B.height,
              B.depth,
              Ee,
              Se,
              B.data
            ))
          : t.texImage3D(
              32879,
              0,
              Ce,
              B.width,
              B.height,
              B.depth,
              0,
              Ee,
              Se,
              B.data
            );
      else if (S.isFramebufferTexture) {
        if (Ke)
          if (ke) t.texStorage2D(3553, O, Ce, B.width, B.height);
          else {
            let re = B.width,
              ge = B.height;
            for (let Ae = 0; Ae < O; Ae++)
              t.texImage2D(3553, Ae, Ce, re, ge, 0, Ee, Se, null),
                (re >>= 1),
                (ge >>= 1);
          }
      } else if (Ie.length > 0 && be) {
        ke && Ke && t.texStorage2D(3553, O, Ce, Ie[0].width, Ie[0].height);
        for (let re = 0, ge = Ie.length; re < ge; re++)
          (we = Ie[re]),
            ke
              ? t.texSubImage2D(3553, re, 0, 0, Ee, Se, we)
              : t.texImage2D(3553, re, Ce, Ee, Se, we);
        S.generateMipmaps = !1;
      } else
        ke
          ? (Ke && t.texStorage2D(3553, O, Ce, B.width, B.height),
            t.texSubImage2D(3553, 0, 0, 0, Ee, Se, B))
          : t.texImage2D(3553, 0, Ce, Ee, Se, B);
      T(S, be) && R(J),
        (Me.__version = fe.version),
        S.onUpdate && S.onUpdate(S);
    }
    E.__version = S.version;
  }
  function ve(E, S, U) {
    if (S.image.length !== 6) return;
    const J = le(E, S),
      ie = S.source;
    t.bindTexture(34067, E.__webglTexture, 33984 + U);
    const fe = n.get(ie);
    if (ie.version !== fe.__version || J === !0) {
      t.activeTexture(33984 + U),
        i.pixelStorei(37440, S.flipY),
        i.pixelStorei(37441, S.premultiplyAlpha),
        i.pixelStorei(3317, S.unpackAlignment),
        i.pixelStorei(37443, 0);
      const Me = S.isCompressedTexture || S.image[0].isCompressedTexture,
        L = S.image[0] && S.image[0].isDataTexture,
        B = [];
      for (let re = 0; re < 6; re++)
        !Me && !L
          ? (B[re] = v(S.image[re], !1, !0, c))
          : (B[re] = L ? S.image[re].image : S.image[re]),
          (B[re] = ae(S, B[re]));
      const be = B[0],
        Ee = y(be) || a,
        Se = s.convert(S.format, S.encoding),
        Ce = s.convert(S.type),
        we = M(S.internalFormat, Se, Ce, S.encoding),
        Ie = a && S.isVideoTexture !== !0,
        ke = fe.__version === void 0 || J === !0;
      let Ke = w(S, be, Ee);
      F(34067, S, Ee);
      let O;
      if (Me) {
        Ie && ke && t.texStorage2D(34067, Ke, we, be.width, be.height);
        for (let re = 0; re < 6; re++) {
          O = B[re].mipmaps;
          for (let ge = 0; ge < O.length; ge++) {
            const Ae = O[ge];
            S.format !== Fn
              ? Se !== null
                ? Ie
                  ? t.compressedTexSubImage2D(
                      34069 + re,
                      ge,
                      0,
                      0,
                      Ae.width,
                      Ae.height,
                      Se,
                      Ae.data
                    )
                  : t.compressedTexImage2D(
                      34069 + re,
                      ge,
                      we,
                      Ae.width,
                      Ae.height,
                      0,
                      Ae.data
                    )
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
                  )
              : Ie
              ? t.texSubImage2D(
                  34069 + re,
                  ge,
                  0,
                  0,
                  Ae.width,
                  Ae.height,
                  Se,
                  Ce,
                  Ae.data
                )
              : t.texImage2D(
                  34069 + re,
                  ge,
                  we,
                  Ae.width,
                  Ae.height,
                  0,
                  Se,
                  Ce,
                  Ae.data
                );
          }
        }
      } else {
        (O = S.mipmaps),
          Ie &&
            ke &&
            (O.length > 0 && Ke++,
            t.texStorage2D(34067, Ke, we, B[0].width, B[0].height));
        for (let re = 0; re < 6; re++)
          if (L) {
            Ie
              ? t.texSubImage2D(
                  34069 + re,
                  0,
                  0,
                  0,
                  B[re].width,
                  B[re].height,
                  Se,
                  Ce,
                  B[re].data
                )
              : t.texImage2D(
                  34069 + re,
                  0,
                  we,
                  B[re].width,
                  B[re].height,
                  0,
                  Se,
                  Ce,
                  B[re].data
                );
            for (let ge = 0; ge < O.length; ge++) {
              const Pe = O[ge].image[re].image;
              Ie
                ? t.texSubImage2D(
                    34069 + re,
                    ge + 1,
                    0,
                    0,
                    Pe.width,
                    Pe.height,
                    Se,
                    Ce,
                    Pe.data
                  )
                : t.texImage2D(
                    34069 + re,
                    ge + 1,
                    we,
                    Pe.width,
                    Pe.height,
                    0,
                    Se,
                    Ce,
                    Pe.data
                  );
            }
          } else {
            Ie
              ? t.texSubImage2D(34069 + re, 0, 0, 0, Se, Ce, B[re])
              : t.texImage2D(34069 + re, 0, we, Se, Ce, B[re]);
            for (let ge = 0; ge < O.length; ge++) {
              const Ae = O[ge];
              Ie
                ? t.texSubImage2D(
                    34069 + re,
                    ge + 1,
                    0,
                    0,
                    Se,
                    Ce,
                    Ae.image[re]
                  )
                : t.texImage2D(34069 + re, ge + 1, we, Se, Ce, Ae.image[re]);
            }
          }
      }
      T(S, Ee) && R(34067),
        (fe.__version = ie.version),
        S.onUpdate && S.onUpdate(S);
    }
    E.__version = S.version;
  }
  function _e(E, S, U, J, ie) {
    const fe = s.convert(U.format, U.encoding),
      Me = s.convert(U.type),
      L = M(U.internalFormat, fe, Me, U.encoding);
    n.get(S).__hasExternalTextures ||
      (ie === 32879 || ie === 35866
        ? t.texImage3D(ie, 0, L, S.width, S.height, S.depth, 0, fe, Me, null)
        : t.texImage2D(ie, 0, L, S.width, S.height, 0, fe, Me, null)),
      t.bindFramebuffer(36160, E),
      oe(S)
        ? h.framebufferTexture2DMultisampleEXT(
            36160,
            J,
            ie,
            n.get(U).__webglTexture,
            0,
            pe(S)
          )
        : (ie === 3553 || (ie >= 34069 && ie <= 34074)) &&
          i.framebufferTexture2D(36160, J, ie, n.get(U).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Te(E, S, U) {
    if ((i.bindRenderbuffer(36161, E), S.depthBuffer && !S.stencilBuffer)) {
      let J = 33189;
      if (U || oe(S)) {
        const ie = S.depthTexture;
        ie &&
          ie.isDepthTexture &&
          (ie.type === yr ? (J = 36012) : ie.type === vr && (J = 33190));
        const fe = pe(S);
        oe(S)
          ? h.renderbufferStorageMultisampleEXT(36161, fe, J, S.width, S.height)
          : i.renderbufferStorageMultisample(36161, fe, J, S.width, S.height);
      } else i.renderbufferStorage(36161, J, S.width, S.height);
      i.framebufferRenderbuffer(36160, 36096, 36161, E);
    } else if (S.depthBuffer && S.stencilBuffer) {
      const J = pe(S);
      U && oe(S) === !1
        ? i.renderbufferStorageMultisample(36161, J, 35056, S.width, S.height)
        : oe(S)
        ? h.renderbufferStorageMultisampleEXT(
            36161,
            J,
            35056,
            S.width,
            S.height
          )
        : i.renderbufferStorage(36161, 34041, S.width, S.height),
        i.framebufferRenderbuffer(36160, 33306, 36161, E);
    } else {
      const J = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
      for (let ie = 0; ie < J.length; ie++) {
        const fe = J[ie],
          Me = s.convert(fe.format, fe.encoding),
          L = s.convert(fe.type),
          B = M(fe.internalFormat, Me, L, fe.encoding),
          be = pe(S);
        U && oe(S) === !1
          ? i.renderbufferStorageMultisample(36161, be, B, S.width, S.height)
          : oe(S)
          ? h.renderbufferStorageMultisampleEXT(36161, be, B, S.width, S.height)
          : i.renderbufferStorage(36161, B, S.width, S.height);
      }
    }
    i.bindRenderbuffer(36161, null);
  }
  function A(E, S) {
    if (S && S.isWebGLCubeRenderTarget)
      throw new Error(
        'Depth Texture with cube render targets is not supported'
      );
    if (
      (t.bindFramebuffer(36160, E),
      !(S.depthTexture && S.depthTexture.isDepthTexture))
    )
      throw new Error(
        'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
      );
    (!n.get(S.depthTexture).__webglTexture ||
      S.depthTexture.image.width !== S.width ||
      S.depthTexture.image.height !== S.height) &&
      ((S.depthTexture.image.width = S.width),
      (S.depthTexture.image.height = S.height),
      (S.depthTexture.needsUpdate = !0)),
      H(S.depthTexture, 0);
    const J = n.get(S.depthTexture).__webglTexture,
      ie = pe(S);
    if (S.depthTexture.format === Tr)
      oe(S)
        ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, J, 0, ie)
        : i.framebufferTexture2D(36160, 36096, 3553, J, 0);
    else if (S.depthTexture.format === Us)
      oe(S)
        ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, J, 0, ie)
        : i.framebufferTexture2D(36160, 33306, 3553, J, 0);
    else throw new Error('Unknown depthTexture format');
  }
  function P(E) {
    const S = n.get(E),
      U = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (U)
        throw new Error(
          'target.depthTexture not supported in Cube render targets'
        );
      A(S.__webglFramebuffer, E);
    } else if (U) {
      S.__webglDepthbuffer = [];
      for (let J = 0; J < 6; J++)
        t.bindFramebuffer(36160, S.__webglFramebuffer[J]),
          (S.__webglDepthbuffer[J] = i.createRenderbuffer()),
          Te(S.__webglDepthbuffer[J], E, !1);
    } else
      t.bindFramebuffer(36160, S.__webglFramebuffer),
        (S.__webglDepthbuffer = i.createRenderbuffer()),
        Te(S.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(36160, null);
  }
  function X(E, S, U) {
    const J = n.get(E);
    S !== void 0 && _e(J.__webglFramebuffer, E, E.texture, 36064, 3553),
      U !== void 0 && P(E);
  }
  function K(E) {
    const S = E.texture,
      U = n.get(E),
      J = n.get(S);
    E.addEventListener('dispose', Q),
      E.isWebGLMultipleRenderTargets !== !0 &&
        (J.__webglTexture === void 0 && (J.__webglTexture = i.createTexture()),
        (J.__version = S.version),
        o.memory.textures++);
    const ie = E.isWebGLCubeRenderTarget === !0,
      fe = E.isWebGLMultipleRenderTargets === !0,
      Me = y(E) || a;
    if (ie) {
      U.__webglFramebuffer = [];
      for (let L = 0; L < 6; L++)
        U.__webglFramebuffer[L] = i.createFramebuffer();
    } else {
      if (((U.__webglFramebuffer = i.createFramebuffer()), fe))
        if (r.drawBuffers) {
          const L = E.texture;
          for (let B = 0, be = L.length; B < be; B++) {
            const Ee = n.get(L[B]);
            Ee.__webglTexture === void 0 &&
              ((Ee.__webglTexture = i.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
          );
      if (a && E.samples > 0 && oe(E) === !1) {
        const L = fe ? S : [S];
        (U.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (U.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, U.__webglMultisampledFramebuffer);
        for (let B = 0; B < L.length; B++) {
          const be = L[B];
          (U.__webglColorRenderbuffer[B] = i.createRenderbuffer()),
            i.bindRenderbuffer(36161, U.__webglColorRenderbuffer[B]);
          const Ee = s.convert(be.format, be.encoding),
            Se = s.convert(be.type),
            Ce = M(
              be.internalFormat,
              Ee,
              Se,
              be.encoding,
              E.isXRRenderTarget === !0
            ),
            we = pe(E);
          i.renderbufferStorageMultisample(36161, we, Ce, E.width, E.height),
            i.framebufferRenderbuffer(
              36160,
              36064 + B,
              36161,
              U.__webglColorRenderbuffer[B]
            );
        }
        i.bindRenderbuffer(36161, null),
          E.depthBuffer &&
            ((U.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Te(U.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (ie) {
      t.bindTexture(34067, J.__webglTexture), F(34067, S, Me);
      for (let L = 0; L < 6; L++)
        _e(U.__webglFramebuffer[L], E, S, 36064, 34069 + L);
      T(S, Me) && R(34067), t.unbindTexture();
    } else if (fe) {
      const L = E.texture;
      for (let B = 0, be = L.length; B < be; B++) {
        const Ee = L[B],
          Se = n.get(Ee);
        t.bindTexture(3553, Se.__webglTexture),
          F(3553, Ee, Me),
          _e(U.__webglFramebuffer, E, Ee, 36064 + B, 3553),
          T(Ee, Me) && R(3553);
      }
      t.unbindTexture();
    } else {
      let L = 3553;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
        (a
          ? (L = E.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.'
            )),
        t.bindTexture(L, J.__webglTexture),
        F(L, S, Me),
        _e(U.__webglFramebuffer, E, S, 36064, L),
        T(S, Me) && R(L),
        t.unbindTexture();
    }
    E.depthBuffer && P(E);
  }
  function ee(E) {
    const S = y(E) || a,
      U = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let J = 0, ie = U.length; J < ie; J++) {
      const fe = U[J];
      if (T(fe, S)) {
        const Me = E.isWebGLCubeRenderTarget ? 34067 : 3553,
          L = n.get(fe).__webglTexture;
        t.bindTexture(Me, L), R(Me), t.unbindTexture();
      }
    }
  }
  function he(E) {
    if (a && E.samples > 0 && oe(E) === !1) {
      const S = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture],
        U = E.width,
        J = E.height;
      let ie = 16384;
      const fe = [],
        Me = E.stencilBuffer ? 33306 : 36096,
        L = n.get(E),
        B = E.isWebGLMultipleRenderTargets === !0;
      if (B)
        for (let be = 0; be < S.length; be++)
          t.bindFramebuffer(36160, L.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(36160, 36064 + be, 36161, null),
            t.bindFramebuffer(36160, L.__webglFramebuffer),
            i.framebufferTexture2D(36009, 36064 + be, 3553, null, 0);
      t.bindFramebuffer(36008, L.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, L.__webglFramebuffer);
      for (let be = 0; be < S.length; be++) {
        fe.push(36064 + be), E.depthBuffer && fe.push(Me);
        const Ee =
          L.__ignoreDepthValues !== void 0 ? L.__ignoreDepthValues : !1;
        if (
          (Ee === !1 &&
            (E.depthBuffer && (ie |= 256), E.stencilBuffer && (ie |= 1024)),
          B &&
            i.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              L.__webglColorRenderbuffer[be]
            ),
          Ee === !0 &&
            (i.invalidateFramebuffer(36008, [Me]),
            i.invalidateFramebuffer(36009, [Me])),
          B)
        ) {
          const Se = n.get(S[be]).__webglTexture;
          i.framebufferTexture2D(36009, 36064, 3553, Se, 0);
        }
        i.blitFramebuffer(0, 0, U, J, 0, 0, U, J, ie, 9728),
          d && i.invalidateFramebuffer(36008, fe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), B))
        for (let be = 0; be < S.length; be++) {
          t.bindFramebuffer(36160, L.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              36160,
              36064 + be,
              36161,
              L.__webglColorRenderbuffer[be]
            );
          const Ee = n.get(S[be]).__webglTexture;
          t.bindFramebuffer(36160, L.__webglFramebuffer),
            i.framebufferTexture2D(36009, 36064 + be, 3553, Ee, 0);
        }
      t.bindFramebuffer(36009, L.__webglMultisampledFramebuffer);
    }
  }
  function pe(E) {
    return Math.min(f, E.samples);
  }
  function oe(E) {
    const S = n.get(E);
    return (
      a &&
      E.samples > 0 &&
      e.has('WEBGL_multisampled_render_to_texture') === !0 &&
      S.__useRenderToTexture !== !1
    );
  }
  function me(E) {
    const S = o.render.frame;
    g.get(E) !== S && (g.set(E, S), E.update());
  }
  function ae(E, S) {
    const U = E.encoding,
      J = E.format,
      ie = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        E.format === Wc ||
        (U !== Ir &&
          (U === lt
            ? a === !1
              ? e.has('EXT_sRGB') === !0 && J === Fn
                ? ((E.format = Wc),
                  (E.minFilter = vn),
                  (E.generateMipmaps = !1))
                : (S = Tm.sRGBToLinear(S))
              : (J !== Fn || ie !== Dr) &&
                console.warn(
                  'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.'
                )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture encoding:',
                U
              ))),
      S
    );
  }
  (this.allocateTextureUnit = V),
    (this.resetTextureUnits = Y),
    (this.setTexture2D = H),
    (this.setTexture2DArray = ue),
    (this.setTexture3D = te),
    (this.setTextureCube = de),
    (this.rebindTextures = X),
    (this.setupRenderTarget = K),
    (this.updateRenderTargetMipmap = ee),
    (this.updateMultisampleRenderTarget = he),
    (this.setupDepthRenderbuffer = P),
    (this.setupFrameBufferTexture = _e),
    (this.useMultisampledRTT = oe);
}
function Bw(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = null) {
    let a;
    if (s === Dr) return 5121;
    if (s === xy) return 32819;
    if (s === vy) return 32820;
    if (s === my) return 5120;
    if (s === gy) return 5122;
    if (s === Mm) return 5123;
    if (s === _y) return 5124;
    if (s === vr) return 5125;
    if (s === yr) return 5126;
    if (s === Oo)
      return n
        ? 5131
        : ((a = e.get('OES_texture_half_float')),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === yy) return 6406;
    if (s === Fn) return 6408;
    if (s === by) return 6409;
    if (s === Sy) return 6410;
    if (s === Tr) return 6402;
    if (s === Us) return 34041;
    if (s === wy) return 6403;
    if (s === My)
      return (
        console.warn(
          'THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228'
        ),
        6408
      );
    if (s === Wc)
      return (a = e.get('EXT_sRGB')), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Ty) return 36244;
    if (s === Ey) return 33319;
    if (s === Ay) return 33320;
    if (s === Cy) return 36249;
    if (s === Ll || s === Dl || s === Il || s === Ol)
      if (o === lt)
        if (((a = e.get('WEBGL_compressed_texture_s3tc_srgb')), a !== null)) {
          if (s === Ll) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Dl) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Il) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Ol) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get('WEBGL_compressed_texture_s3tc')), a !== null)) {
        if (s === Ll) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Dl) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Il) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Ol) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === _h || s === xh || s === vh || s === yh)
      if (((a = e.get('WEBGL_compressed_texture_pvrtc')), a !== null)) {
        if (s === _h) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === xh) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === vh) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === yh) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === Py)
      return (
        (a = e.get('WEBGL_compressed_texture_etc1')),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Mh || s === bh)
      if (((a = e.get('WEBGL_compressed_texture_etc')), a !== null)) {
        if (s === Mh)
          return o === lt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === bh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Sh ||
      s === wh ||
      s === Th ||
      s === Eh ||
      s === Ah ||
      s === Ch ||
      s === Ph ||
      s === Rh ||
      s === Lh ||
      s === Dh ||
      s === Ih ||
      s === Oh ||
      s === Fh ||
      s === Nh
    )
      if (((a = e.get('WEBGL_compressed_texture_astc')), a !== null)) {
        if (s === Sh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === wh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Th)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Eh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Ah)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ch)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ph)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Rh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Lh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Dh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ih)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Oh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Fh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Nh)
          return o === lt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === zh)
      if (((a = e.get('EXT_texture_compression_bptc')), a !== null)) {
        if (s === zh)
          return o === lt
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === ws
      ? n
        ? 34042
        : ((a = e.get('WEBGL_depth_texture')),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : i[s] !== void 0
      ? i[s]
      : null;
  }
  return { convert: r };
}
class kw extends on {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Ni extends It {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const Vw = { type: 'move' };
class oc {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ni()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ni()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new N()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new N())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ni()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new N()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new N())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: 'disconnected', data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== 'visible-blurred') {
      if (c && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const m = t.getJointPose(p, n);
          if (c.joints[p.jointName] === void 0) {
            const x = new Ni();
            (x.matrixAutoUpdate = !1),
              (x.visible = !1),
              (c.joints[p.jointName] = x),
              c.add(x);
          }
          const _ = c.joints[p.jointName];
          m !== null &&
            (_.matrix.fromArray(m.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = m.radius)),
            (_.visible = m !== null);
        }
        const u = c.joints['index-finger-tip'],
          f = c.joints['thumb-tip'],
          h = u.position.distanceTo(f.position),
          d = 0.02,
          g = 0.005;
        c.inputState.pinching && h > d + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: 'pinchend',
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            h <= d - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: 'pinchstart',
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          r.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(r.linearVelocity))
            : (a.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(r.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Vw)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
}
class Gw extends un {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : Tr), u !== Tr && u !== Us))
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
      );
    n === void 0 && u === Tr && (n = vr),
      n === void 0 && u === Us && (n = ws),
      super(null, r, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : Yt),
      (this.minFilter = l !== void 0 ? l : Yt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Hw extends Br {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      o = null,
      a = 'local-floor',
      l = null,
      c = null,
      u = null,
      f = null,
      h = null,
      d = null;
    const g = t.getContextAttributes();
    let p = null,
      m = null;
    const _ = [],
      x = [],
      v = new on();
    v.layers.enable(1), (v.viewport = new Dt());
    const y = new on();
    y.layers.enable(2), (y.viewport = new Dt());
    const b = [v, y],
      T = new kw();
    T.layers.enable(1), T.layers.enable(2);
    let R = null,
      M = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (z) {
        let H = _[z];
        return (
          H === void 0 && ((H = new oc()), (_[z] = H)), H.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (z) {
        let H = _[z];
        return H === void 0 && ((H = new oc()), (_[z] = H)), H.getGripSpace();
      }),
      (this.getHand = function (z) {
        let H = _[z];
        return H === void 0 && ((H = new oc()), (_[z] = H)), H.getHandSpace();
      });
    function w(z) {
      const H = x.indexOf(z.inputSource);
      if (H === -1) return;
      const ue = _[H];
      ue !== void 0 && ue.dispatchEvent({ type: z.type, data: z.inputSource });
    }
    function D() {
      r.removeEventListener('select', w),
        r.removeEventListener('selectstart', w),
        r.removeEventListener('selectend', w),
        r.removeEventListener('squeeze', w),
        r.removeEventListener('squeezestart', w),
        r.removeEventListener('squeezeend', w),
        r.removeEventListener('end', D),
        r.removeEventListener('inputsourceschange', q);
      for (let z = 0; z < _.length; z++) {
        const H = x[z];
        H !== null && ((x[z] = null), _[z].disconnect(H));
      }
      (R = null),
        (M = null),
        e.setRenderTarget(p),
        (h = null),
        (f = null),
        (u = null),
        (r = null),
        (m = null),
        V.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (z) {
      (s = z),
        n.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
          );
    }),
      (this.setReferenceSpaceType = function (z) {
        (a = z),
          n.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.'
            );
      }),
      (this.getReferenceSpace = function () {
        return l || o;
      }),
      (this.setReferenceSpace = function (z) {
        l = z;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : h;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return d;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (z) {
        if (((r = z), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener('select', w),
            r.addEventListener('selectstart', w),
            r.addEventListener('selectend', w),
            r.addEventListener('squeeze', w),
            r.addEventListener('squeezestart', w),
            r.addEventListener('squeezeend', w),
            r.addEventListener('end', D),
            r.addEventListener('inputsourceschange', q),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const H = {
              antialias: r.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            (h = new XRWebGLLayer(r, t, H)),
              r.updateRenderState({ baseLayer: h }),
              (m = new Or(h.framebufferWidth, h.framebufferHeight, {
                format: Fn,
                type: Dr,
                encoding: e.outputEncoding,
                stencilBuffer: g.stencil,
              }));
          } else {
            let H = null,
              ue = null,
              te = null;
            g.depth &&
              ((te = g.stencil ? 35056 : 33190),
              (H = g.stencil ? Us : Tr),
              (ue = g.stencil ? ws : vr));
            const de = { colorFormat: 32856, depthFormat: te, scaleFactor: s };
            (u = new XRWebGLBinding(r, t)),
              (f = u.createProjectionLayer(de)),
              r.updateRenderState({ layers: [f] }),
              (m = new Or(f.textureWidth, f.textureHeight, {
                format: Fn,
                type: Dr,
                depthTexture: new Gw(
                  f.textureWidth,
                  f.textureHeight,
                  ue,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  H
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const xe = e.properties.get(m);
            xe.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (m.isXRRenderTarget = !0),
            this.setFoveation(1),
            (l = null),
            (o = await r.requestReferenceSpace(a)),
            V.setContext(r),
            V.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: 'sessionstart' });
        }
      });
    function q(z) {
      for (let H = 0; H < z.removed.length; H++) {
        const ue = z.removed[H],
          te = x.indexOf(ue);
        te >= 0 &&
          ((x[te] = null),
          _[te].dispatchEvent({ type: 'disconnected', data: ue }));
      }
      for (let H = 0; H < z.added.length; H++) {
        const ue = z.added[H];
        let te = x.indexOf(ue);
        if (te === -1) {
          for (let xe = 0; xe < _.length; xe++)
            if (xe >= x.length) {
              x.push(ue), (te = xe);
              break;
            } else if (x[xe] === null) {
              (x[xe] = ue), (te = xe);
              break;
            }
          if (te === -1) break;
        }
        const de = _[te];
        de && de.dispatchEvent({ type: 'connected', data: ue });
      }
    }
    const Q = new N(),
      k = new N();
    function I(z, H, ue) {
      Q.setFromMatrixPosition(H.matrixWorld),
        k.setFromMatrixPosition(ue.matrixWorld);
      const te = Q.distanceTo(k),
        de = H.projectionMatrix.elements,
        xe = ue.projectionMatrix.elements,
        G = de[14] / (de[10] - 1),
        F = de[14] / (de[10] + 1),
        le = (de[9] + 1) / de[5],
        ce = (de[9] - 1) / de[5],
        ve = (de[8] - 1) / de[0],
        _e = (xe[8] + 1) / xe[0],
        Te = G * ve,
        A = G * _e,
        P = te / (-ve + _e),
        X = P * -ve;
      H.matrixWorld.decompose(z.position, z.quaternion, z.scale),
        z.translateX(X),
        z.translateZ(P),
        z.matrixWorld.compose(z.position, z.quaternion, z.scale),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const K = G + P,
        ee = F + P,
        he = Te - X,
        pe = A + (te - X),
        oe = ((le * F) / ee) * K,
        me = ((ce * F) / ee) * K;
      z.projectionMatrix.makePerspective(he, pe, oe, me, K, ee);
    }
    function $(z, H) {
      H === null
        ? z.matrixWorld.copy(z.matrix)
        : z.matrixWorld.multiplyMatrices(H.matrixWorld, z.matrix),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    (this.updateCamera = function (z) {
      if (r === null) return;
      (T.near = y.near = v.near = z.near),
        (T.far = y.far = v.far = z.far),
        (R !== T.near || M !== T.far) &&
          (r.updateRenderState({ depthNear: T.near, depthFar: T.far }),
          (R = T.near),
          (M = T.far));
      const H = z.parent,
        ue = T.cameras;
      $(T, H);
      for (let de = 0; de < ue.length; de++) $(ue[de], H);
      T.matrixWorld.decompose(T.position, T.quaternion, T.scale),
        z.matrix.copy(T.matrix),
        z.matrix.decompose(z.position, z.quaternion, z.scale);
      const te = z.children;
      for (let de = 0, xe = te.length; de < xe; de++)
        te[de].updateMatrixWorld(!0);
      ue.length === 2
        ? I(T, v, y)
        : T.projectionMatrix.copy(v.projectionMatrix);
    }),
      (this.getCamera = function () {
        return T;
      }),
      (this.getFoveation = function () {
        if (f !== null) return f.fixedFoveation;
        if (h !== null) return h.fixedFoveation;
      }),
      (this.setFoveation = function (z) {
        f !== null && (f.fixedFoveation = z),
          h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = z);
      });
    let Z = null;
    function Y(z, H) {
      if (((c = H.getViewerPose(l || o)), (d = H), c !== null)) {
        const ue = c.views;
        h !== null &&
          (e.setRenderTargetFramebuffer(m, h.framebuffer),
          e.setRenderTarget(m));
        let te = !1;
        ue.length !== T.cameras.length && ((T.cameras.length = 0), (te = !0));
        for (let de = 0; de < ue.length; de++) {
          const xe = ue[de];
          let G = null;
          if (h !== null) G = h.getViewport(xe);
          else {
            const le = u.getViewSubImage(f, xe);
            (G = le.viewport),
              de === 0 &&
                (e.setRenderTargetTextures(
                  m,
                  le.colorTexture,
                  f.ignoreDepthValues ? void 0 : le.depthStencilTexture
                ),
                e.setRenderTarget(m));
          }
          let F = b[de];
          F === void 0 &&
            ((F = new on()),
            F.layers.enable(de),
            (F.viewport = new Dt()),
            (b[de] = F)),
            F.matrix.fromArray(xe.transform.matrix),
            F.projectionMatrix.fromArray(xe.projectionMatrix),
            F.viewport.set(G.x, G.y, G.width, G.height),
            de === 0 && T.matrix.copy(F.matrix),
            te === !0 && T.cameras.push(F);
        }
      }
      for (let ue = 0; ue < _.length; ue++) {
        const te = x[ue],
          de = _[ue];
        te !== null && de !== void 0 && de.update(te, H, l || o);
      }
      Z && Z(z, H), (d = null);
    }
    const V = new Om();
    V.setAnimationLoop(Y),
      (this.setAnimationLoop = function (z) {
        Z = z;
      }),
      (this.dispose = function () {});
  }
}
function Ww(i, e) {
  function t(p, m) {
    p.fogColor.value.copy(m.color),
      m.isFog
        ? ((p.fogNear.value = m.near), (p.fogFar.value = m.far))
        : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function n(p, m, _, x, v) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? r(p, m)
      : m.isMeshToonMaterial
      ? (r(p, m), u(p, m))
      : m.isMeshPhongMaterial
      ? (r(p, m), c(p, m))
      : m.isMeshStandardMaterial
      ? (r(p, m), f(p, m), m.isMeshPhysicalMaterial && h(p, m, v))
      : m.isMeshMatcapMaterial
      ? (r(p, m), d(p, m))
      : m.isMeshDepthMaterial
      ? r(p, m)
      : m.isMeshDistanceMaterial
      ? (r(p, m), g(p, m))
      : m.isMeshNormalMaterial
      ? r(p, m)
      : m.isLineBasicMaterial
      ? (s(p, m), m.isLineDashedMaterial && o(p, m))
      : m.isPointsMaterial
      ? a(p, m, _, x)
      : m.isSpriteMaterial
      ? l(p, m)
      : m.isShadowMaterial
      ? (p.color.value.copy(m.color), (p.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function r(p, m) {
    (p.opacity.value = m.opacity),
      m.color && p.diffuse.value.copy(m.color),
      m.emissive &&
        p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && (p.map.value = m.map),
      m.alphaMap && (p.alphaMap.value = m.alphaMap),
      m.bumpMap &&
        ((p.bumpMap.value = m.bumpMap),
        (p.bumpScale.value = m.bumpScale),
        m.side === En && (p.bumpScale.value *= -1)),
      m.displacementMap &&
        ((p.displacementMap.value = m.displacementMap),
        (p.displacementScale.value = m.displacementScale),
        (p.displacementBias.value = m.displacementBias)),
      m.emissiveMap && (p.emissiveMap.value = m.emissiveMap),
      m.normalMap &&
        ((p.normalMap.value = m.normalMap),
        p.normalScale.value.copy(m.normalScale),
        m.side === En && p.normalScale.value.negate()),
      m.specularMap && (p.specularMap.value = m.specularMap),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const _ = e.get(m).envMap;
    if (
      (_ &&
        ((p.envMap.value = _),
        (p.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = m.reflectivity),
        (p.ior.value = m.ior),
        (p.refractionRatio.value = m.refractionRatio)),
      m.lightMap)
    ) {
      p.lightMap.value = m.lightMap;
      const y = i.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = m.lightMapIntensity * y;
    }
    m.aoMap &&
      ((p.aoMap.value = m.aoMap), (p.aoMapIntensity.value = m.aoMapIntensity));
    let x;
    m.map
      ? (x = m.map)
      : m.specularMap
      ? (x = m.specularMap)
      : m.displacementMap
      ? (x = m.displacementMap)
      : m.normalMap
      ? (x = m.normalMap)
      : m.bumpMap
      ? (x = m.bumpMap)
      : m.roughnessMap
      ? (x = m.roughnessMap)
      : m.metalnessMap
      ? (x = m.metalnessMap)
      : m.alphaMap
      ? (x = m.alphaMap)
      : m.emissiveMap
      ? (x = m.emissiveMap)
      : m.clearcoatMap
      ? (x = m.clearcoatMap)
      : m.clearcoatNormalMap
      ? (x = m.clearcoatNormalMap)
      : m.clearcoatRoughnessMap
      ? (x = m.clearcoatRoughnessMap)
      : m.iridescenceMap
      ? (x = m.iridescenceMap)
      : m.iridescenceThicknessMap
      ? (x = m.iridescenceThicknessMap)
      : m.specularIntensityMap
      ? (x = m.specularIntensityMap)
      : m.specularColorMap
      ? (x = m.specularColorMap)
      : m.transmissionMap
      ? (x = m.transmissionMap)
      : m.thicknessMap
      ? (x = m.thicknessMap)
      : m.sheenColorMap
      ? (x = m.sheenColorMap)
      : m.sheenRoughnessMap && (x = m.sheenRoughnessMap),
      x !== void 0 &&
        (x.isWebGLRenderTarget && (x = x.texture),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        p.uvTransform.value.copy(x.matrix));
    let v;
    m.aoMap ? (v = m.aoMap) : m.lightMap && (v = m.lightMap),
      v !== void 0 &&
        (v.isWebGLRenderTarget && (v = v.texture),
        v.matrixAutoUpdate === !0 && v.updateMatrix(),
        p.uv2Transform.value.copy(v.matrix));
  }
  function s(p, m) {
    p.diffuse.value.copy(m.color), (p.opacity.value = m.opacity);
  }
  function o(p, m) {
    (p.dashSize.value = m.dashSize),
      (p.totalSize.value = m.dashSize + m.gapSize),
      (p.scale.value = m.scale);
  }
  function a(p, m, _, x) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      (p.size.value = m.size * _),
      (p.scale.value = x * 0.5),
      m.map && (p.map.value = m.map),
      m.alphaMap && (p.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    let v;
    m.map ? (v = m.map) : m.alphaMap && (v = m.alphaMap),
      v !== void 0 &&
        (v.matrixAutoUpdate === !0 && v.updateMatrix(),
        p.uvTransform.value.copy(v.matrix));
  }
  function l(p, m) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      (p.rotation.value = m.rotation),
      m.map && (p.map.value = m.map),
      m.alphaMap && (p.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    let _;
    m.map ? (_ = m.map) : m.alphaMap && (_ = m.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        p.uvTransform.value.copy(_.matrix));
  }
  function c(p, m) {
    p.specular.value.copy(m.specular),
      (p.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function u(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function f(p, m) {
    (p.roughness.value = m.roughness),
      (p.metalness.value = m.metalness),
      m.roughnessMap && (p.roughnessMap.value = m.roughnessMap),
      m.metalnessMap && (p.metalnessMap.value = m.metalnessMap),
      e.get(m).envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function h(p, m, _) {
    (p.ior.value = m.ior),
      m.sheen > 0 &&
        (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (p.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap),
        m.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = m.sheenRoughnessMap)),
      m.clearcoat > 0 &&
        ((p.clearcoat.value = m.clearcoat),
        (p.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap),
        m.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
        m.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = m.clearcoatNormalMap),
          m.side === En && p.clearcoatNormalScale.value.negate())),
      m.iridescence > 0 &&
        ((p.iridescence.value = m.iridescence),
        (p.iridescenceIOR.value = m.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap),
        m.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap)),
      m.transmission > 0 &&
        ((p.transmission.value = m.transmission),
        (p.transmissionSamplerMap.value = _.texture),
        p.transmissionSamplerSize.value.set(_.width, _.height),
        m.transmissionMap && (p.transmissionMap.value = m.transmissionMap),
        (p.thickness.value = m.thickness),
        m.thicknessMap && (p.thicknessMap.value = m.thicknessMap),
        (p.attenuationDistance.value = m.attenuationDistance),
        p.attenuationColor.value.copy(m.attenuationColor)),
      (p.specularIntensity.value = m.specularIntensity),
      p.specularColor.value.copy(m.specularColor),
      m.specularIntensityMap &&
        (p.specularIntensityMap.value = m.specularIntensityMap),
      m.specularColorMap && (p.specularColorMap.value = m.specularColorMap);
  }
  function d(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function g(p, m) {
    p.referencePosition.value.copy(m.referencePosition),
      (p.nearDistance.value = m.nearDistance),
      (p.farDistance.value = m.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function qw(i, e, t, n) {
  let r = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? i.getParameter(35375) : 0;
  function l(x, v) {
    const y = v.program;
    n.uniformBlockBinding(x, y);
  }
  function c(x, v) {
    let y = r[x.id];
    y === void 0 &&
      (g(x), (y = u(x)), (r[x.id] = y), x.addEventListener('dispose', m));
    const b = v.program;
    n.updateUBOMapping(x, b);
    const T = e.render.frame;
    s[x.id] !== T && (h(x), (s[x.id] = T));
  }
  function u(x) {
    const v = f();
    x.__bindingPointIndex = v;
    const y = i.createBuffer(),
      b = x.__size,
      T = x.usage;
    return (
      i.bindBuffer(35345, y),
      i.bufferData(35345, b, T),
      i.bindBuffer(35345, null),
      i.bindBufferBase(35345, v, y),
      y
    );
  }
  function f() {
    for (let x = 0; x < a; x++) if (o.indexOf(x) === -1) return o.push(x), x;
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'
      ),
      0
    );
  }
  function h(x) {
    const v = r[x.id],
      y = x.uniforms,
      b = x.__cache;
    i.bindBuffer(35345, v);
    for (let T = 0, R = y.length; T < R; T++) {
      const M = y[T];
      if (d(M, T, b) === !0) {
        const w = M.value,
          D = M.__offset;
        typeof w == 'number'
          ? ((M.__data[0] = w), i.bufferSubData(35345, D, M.__data))
          : (M.value.isMatrix3
              ? ((M.__data[0] = M.value.elements[0]),
                (M.__data[1] = M.value.elements[1]),
                (M.__data[2] = M.value.elements[2]),
                (M.__data[3] = M.value.elements[0]),
                (M.__data[4] = M.value.elements[3]),
                (M.__data[5] = M.value.elements[4]),
                (M.__data[6] = M.value.elements[5]),
                (M.__data[7] = M.value.elements[0]),
                (M.__data[8] = M.value.elements[6]),
                (M.__data[9] = M.value.elements[7]),
                (M.__data[10] = M.value.elements[8]),
                (M.__data[11] = M.value.elements[0]))
              : w.toArray(M.__data),
            i.bufferSubData(35345, D, M.__data));
      }
    }
    i.bindBuffer(35345, null);
  }
  function d(x, v, y) {
    const b = x.value;
    if (y[v] === void 0)
      return typeof b == 'number' ? (y[v] = b) : (y[v] = b.clone()), !0;
    if (typeof b == 'number') {
      if (y[v] !== b) return (y[v] = b), !0;
    } else {
      const T = y[v];
      if (T.equals(b) === !1) return T.copy(b), !0;
    }
    return !1;
  }
  function g(x) {
    const v = x.uniforms;
    let y = 0;
    const b = 16;
    let T = 0;
    for (let R = 0, M = v.length; R < M; R++) {
      const w = v[R],
        D = p(w);
      if (
        ((w.__data = new Float32Array(
          D.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (w.__offset = y),
        R > 0)
      ) {
        T = y % b;
        const q = b - T;
        T !== 0 && q - D.boundary < 0 && ((y += b - T), (w.__offset = y));
      }
      y += D.storage;
    }
    return (
      (T = y % b), T > 0 && (y += b - T), (x.__size = y), (x.__cache = {}), this
    );
  }
  function p(x) {
    const v = x.value,
      y = { boundary: 0, storage: 0 };
    return (
      typeof v == 'number'
        ? ((y.boundary = 4), (y.storage = 4))
        : v.isVector2
        ? ((y.boundary = 8), (y.storage = 8))
        : v.isVector3 || v.isColor
        ? ((y.boundary = 16), (y.storage = 12))
        : v.isVector4
        ? ((y.boundary = 16), (y.storage = 16))
        : v.isMatrix3
        ? ((y.boundary = 48), (y.storage = 48))
        : v.isMatrix4
        ? ((y.boundary = 64), (y.storage = 64))
        : v.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.'
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            v
          ),
      y
    );
  }
  function m(x) {
    const v = x.target;
    v.removeEventListener('dispose', m);
    const y = o.indexOf(v.__bindingPointIndex);
    o.splice(y, 1), i.deleteBuffer(r[v.id]), delete r[v.id], delete s[v.id];
  }
  function _() {
    for (const x in r) i.deleteBuffer(r[x]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: _ };
}
function Xw() {
  const i = Fo('canvas');
  return (i.style.display = 'block'), i;
}
function Bu(i = {}) {
  this.isWebGLRenderer = !0;
  const e = i.canvas !== void 0 ? i.canvas : Xw(),
    t = i.context !== void 0 ? i.context : null,
    n = i.depth !== void 0 ? i.depth : !0,
    r = i.stencil !== void 0 ? i.stencil : !0,
    s = i.antialias !== void 0 ? i.antialias : !1,
    o = i.premultipliedAlpha !== void 0 ? i.premultipliedAlpha : !0,
    a = i.preserveDrawingBuffer !== void 0 ? i.preserveDrawingBuffer : !1,
    l = i.powerPreference !== void 0 ? i.powerPreference : 'default',
    c =
      i.failIfMajorPerformanceCaveat !== void 0
        ? i.failIfMajorPerformanceCaveat
        : !1;
  let u;
  t !== null
    ? (u = t.getContextAttributes().alpha)
    : (u = i.alpha !== void 0 ? i.alpha : !1);
  let f = null,
    h = null;
  const d = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Ir),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = _i),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn('THREE.WebGLRenderer: .gammaFactor has been removed.'),
            2
          );
        },
        set: function () {
          console.warn('THREE.WebGLRenderer: .gammaFactor has been removed.');
        },
      },
    });
  const p = this;
  let m = !1,
    _ = 0,
    x = 0,
    v = null,
    y = -1,
    b = null;
  const T = new Dt(),
    R = new Dt();
  let M = null,
    w = e.width,
    D = e.height,
    q = 1,
    Q = null,
    k = null;
  const I = new Dt(0, 0, w, D),
    $ = new Dt(0, 0, w, D);
  let Z = !1;
  const Y = new Im();
  let V = !1,
    z = !1,
    H = null;
  const ue = new ht(),
    te = new De(),
    de = new N(),
    xe = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function G() {
    return v === null ? q : 1;
  }
  let F = t;
  function le(C, j) {
    for (let ne = 0; ne < C.length; ne++) {
      const W = C[ne],
        se = e.getContext(W, j);
      if (se !== null) return se;
    }
    return null;
  }
  try {
    const C = {
      alpha: !0,
      depth: n,
      stencil: r,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ('setAttribute' in e && e.setAttribute('data-engine', `three.js r${Ou}`),
      e.addEventListener('webglcontextlost', Ce, !1),
      e.addEventListener('webglcontextrestored', we, !1),
      e.addEventListener('webglcontextcreationerror', Ie, !1),
      F === null)
    ) {
      const j = ['webgl2', 'webgl', 'experimental-webgl'];
      if ((p.isWebGL1Renderer === !0 && j.shift(), (F = le(j, C)), F === null))
        throw le(j)
          ? new Error(
              'Error creating WebGL context with your selected attributes.'
            )
          : new Error('Error creating WebGL context.');
    }
    F.getShaderPrecisionFormat === void 0 &&
      (F.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (C) {
    throw (console.error('THREE.WebGLRenderer: ' + C.message), C);
  }
  let ce,
    ve,
    _e,
    Te,
    A,
    P,
    X,
    K,
    ee,
    he,
    pe,
    oe,
    me,
    ae,
    E,
    S,
    U,
    J,
    ie,
    fe,
    Me,
    L,
    B,
    be;
  function Ee() {
    (ce = new i1(F)),
      (ve = new ZS(F, ce, i)),
      ce.init(ve),
      (L = new Bw(F, ce, ve)),
      (_e = new zw(F, ce, ve)),
      (Te = new o1()),
      (A = new Sw()),
      (P = new Uw(F, ce, _e, A, ve, L, Te)),
      (X = new JS(p)),
      (K = new n1(p)),
      (ee = new pM(F, ve)),
      (B = new $S(F, ce, ee, ve)),
      (he = new r1(F, ee, Te, B)),
      (pe = new u1(F, he, ee, Te)),
      (ie = new c1(F, ve, P)),
      (S = new KS(A)),
      (oe = new bw(p, X, K, ce, ve, B, S)),
      (me = new Ww(p, A)),
      (ae = new Tw()),
      (E = new Lw(ce, ve)),
      (J = new jS(p, X, K, _e, pe, u, o)),
      (U = new Nw(p, pe, ve)),
      (be = new qw(F, Te, ve, _e)),
      (fe = new YS(F, ce, Te, ve)),
      (Me = new s1(F, ce, Te, ve)),
      (Te.programs = oe.programs),
      (p.capabilities = ve),
      (p.extensions = ce),
      (p.properties = A),
      (p.renderLists = ae),
      (p.shadowMap = U),
      (p.state = _e),
      (p.info = Te);
  }
  Ee();
  const Se = new Hw(p, F);
  (this.xr = Se),
    (this.getContext = function () {
      return F;
    }),
    (this.getContextAttributes = function () {
      return F.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const C = ce.get('WEBGL_lose_context');
      C && C.loseContext();
    }),
    (this.forceContextRestore = function () {
      const C = ce.get('WEBGL_lose_context');
      C && C.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return q;
    }),
    (this.setPixelRatio = function (C) {
      C !== void 0 && ((q = C), this.setSize(w, D, !1));
    }),
    (this.getSize = function (C) {
      return C.set(w, D);
    }),
    (this.setSize = function (C, j, ne) {
      if (Se.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (w = C),
        (D = j),
        (e.width = Math.floor(C * q)),
        (e.height = Math.floor(j * q)),
        ne !== !1 && ((e.style.width = C + 'px'), (e.style.height = j + 'px')),
        this.setViewport(0, 0, C, j);
    }),
    (this.getDrawingBufferSize = function (C) {
      return C.set(w * q, D * q).floor();
    }),
    (this.setDrawingBufferSize = function (C, j, ne) {
      (w = C),
        (D = j),
        (q = ne),
        (e.width = Math.floor(C * ne)),
        (e.height = Math.floor(j * ne)),
        this.setViewport(0, 0, C, j);
    }),
    (this.getCurrentViewport = function (C) {
      return C.copy(T);
    }),
    (this.getViewport = function (C) {
      return C.copy(I);
    }),
    (this.setViewport = function (C, j, ne, W) {
      C.isVector4 ? I.set(C.x, C.y, C.z, C.w) : I.set(C, j, ne, W),
        _e.viewport(T.copy(I).multiplyScalar(q).floor());
    }),
    (this.getScissor = function (C) {
      return C.copy($);
    }),
    (this.setScissor = function (C, j, ne, W) {
      C.isVector4 ? $.set(C.x, C.y, C.z, C.w) : $.set(C, j, ne, W),
        _e.scissor(R.copy($).multiplyScalar(q).floor());
    }),
    (this.getScissorTest = function () {
      return Z;
    }),
    (this.setScissorTest = function (C) {
      _e.setScissorTest((Z = C));
    }),
    (this.setOpaqueSort = function (C) {
      Q = C;
    }),
    (this.setTransparentSort = function (C) {
      k = C;
    }),
    (this.getClearColor = function (C) {
      return C.copy(J.getClearColor());
    }),
    (this.setClearColor = function () {
      J.setClearColor.apply(J, arguments);
    }),
    (this.getClearAlpha = function () {
      return J.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      J.setClearAlpha.apply(J, arguments);
    }),
    (this.clear = function (C = !0, j = !0, ne = !0) {
      let W = 0;
      C && (W |= 16384), j && (W |= 256), ne && (W |= 1024), F.clear(W);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener('webglcontextlost', Ce, !1),
        e.removeEventListener('webglcontextrestored', we, !1),
        e.removeEventListener('webglcontextcreationerror', Ie, !1),
        ae.dispose(),
        E.dispose(),
        A.dispose(),
        X.dispose(),
        K.dispose(),
        pe.dispose(),
        B.dispose(),
        be.dispose(),
        oe.dispose(),
        Se.dispose(),
        Se.removeEventListener('sessionstart', Ae),
        Se.removeEventListener('sessionend', Pe),
        H && (H.dispose(), (H = null)),
        je.stop();
    });
  function Ce(C) {
    C.preventDefault(),
      console.log('THREE.WebGLRenderer: Context Lost.'),
      (m = !0);
  }
  function we() {
    console.log('THREE.WebGLRenderer: Context Restored.'), (m = !1);
    const C = Te.autoReset,
      j = U.enabled,
      ne = U.autoUpdate,
      W = U.needsUpdate,
      se = U.type;
    Ee(),
      (Te.autoReset = C),
      (U.enabled = j),
      (U.autoUpdate = ne),
      (U.needsUpdate = W),
      (U.type = se);
  }
  function Ie(C) {
    console.error(
      'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
      C.statusMessage
    );
  }
  function ke(C) {
    const j = C.target;
    j.removeEventListener('dispose', ke), Ke(j);
  }
  function Ke(C) {
    O(C), A.remove(C);
  }
  function O(C) {
    const j = A.get(C).programs;
    j !== void 0 &&
      (j.forEach(function (ne) {
        oe.releaseProgram(ne);
      }),
      C.isShaderMaterial && oe.releaseShaderCache(C));
  }
  (this.renderBufferDirect = function (C, j, ne, W, se, Le) {
    j === null && (j = xe);
    const Oe = se.isMesh && se.matrixWorld.determinant() < 0,
      Be = c_(C, j, ne, W, se);
    _e.setMaterial(W, Oe);
    let Ne = ne.index;
    const $e = ne.attributes.position;
    if (Ne === null) {
      if ($e === void 0 || $e.count === 0) return;
    } else if (Ne.count === 0) return;
    let Ve = 1;
    W.wireframe === !0 && ((Ne = he.getWireframeAttribute(ne)), (Ve = 2)),
      B.setup(se, W, Be, ne, Ne);
    let We,
      at = fe;
    Ne !== null && ((We = ee.get(Ne)), (at = Me), at.setIndex(We));
    const tr = Ne !== null ? Ne.count : $e.count,
      Vr = ne.drawRange.start * Ve,
      Gr = ne.drawRange.count * Ve,
      Gn = Le !== null ? Le.start * Ve : 0,
      Ye = Le !== null ? Le.count * Ve : 1 / 0,
      Hr = Math.max(Vr, Gn),
      pt = Math.min(tr, Vr + Gr, Gn + Ye) - 1,
      pn = Math.max(0, pt - Hr + 1);
    if (pn !== 0) {
      if (se.isMesh)
        W.wireframe === !0
          ? (_e.setLineWidth(W.wireframeLinewidth * G()), at.setMode(1))
          : at.setMode(4);
      else if (se.isLine) {
        let wi = W.linewidth;
        wi === void 0 && (wi = 1),
          _e.setLineWidth(wi * G()),
          se.isLineSegments
            ? at.setMode(1)
            : se.isLineLoop
            ? at.setMode(2)
            : at.setMode(3);
      } else se.isPoints ? at.setMode(0) : se.isSprite && at.setMode(4);
      if (se.isInstancedMesh) at.renderInstances(Hr, pn, se.count);
      else if (ne.isInstancedBufferGeometry) {
        const wi = Math.min(ne.instanceCount, ne._maxInstanceCount);
        at.renderInstances(Hr, pn, wi);
      } else at.render(Hr, pn);
    }
  }),
    (this.compile = function (C, j) {
      function ne(W, se, Le) {
        W.transparent === !0 && W.side === di
          ? ((W.side = En),
            (W.needsUpdate = !0),
            dn(W, se, Le),
            (W.side = Fs),
            (W.needsUpdate = !0),
            dn(W, se, Le),
            (W.side = di))
          : dn(W, se, Le);
      }
      (h = E.get(C)),
        h.init(),
        g.push(h),
        C.traverseVisible(function (W) {
          W.isLight &&
            W.layers.test(j.layers) &&
            (h.pushLight(W), W.castShadow && h.pushShadow(W));
        }),
        h.setupLights(p.physicallyCorrectLights),
        C.traverse(function (W) {
          const se = W.material;
          if (se)
            if (Array.isArray(se))
              for (let Le = 0; Le < se.length; Le++) {
                const Oe = se[Le];
                ne(Oe, C, W);
              }
            else ne(se, C, W);
        }),
        g.pop(),
        (h = null);
    });
  let re = null;
  function ge(C) {
    re && re(C);
  }
  function Ae() {
    je.stop();
  }
  function Pe() {
    je.start();
  }
  const je = new Om();
  je.setAnimationLoop(ge),
    typeof self < 'u' && je.setContext(self),
    (this.setAnimationLoop = function (C) {
      (re = C), Se.setAnimationLoop(C), C === null ? je.stop() : je.start();
    }),
    Se.addEventListener('sessionstart', Ae),
    Se.addEventListener('sessionend', Pe),
    (this.render = function (C, j) {
      if (j !== void 0 && j.isCamera !== !0) {
        console.error(
          'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
        );
        return;
      }
      if (m === !0) return;
      C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(),
        j.parent === null &&
          j.matrixWorldAutoUpdate === !0 &&
          j.updateMatrixWorld(),
        Se.enabled === !0 &&
          Se.isPresenting === !0 &&
          (Se.cameraAutoUpdate === !0 && Se.updateCamera(j),
          (j = Se.getCamera())),
        C.isScene === !0 && C.onBeforeRender(p, C, j, v),
        (h = E.get(C, g.length)),
        h.init(),
        g.push(h),
        ue.multiplyMatrices(j.projectionMatrix, j.matrixWorldInverse),
        Y.setFromProjectionMatrix(ue),
        (z = this.localClippingEnabled),
        (V = S.init(this.clippingPlanes, z, j)),
        (f = ae.get(C, d.length)),
        f.init(),
        d.push(f),
        St(C, j, 0, p.sortObjects),
        f.finish(),
        p.sortObjects === !0 && f.sort(Q, k),
        V === !0 && S.beginShadows();
      const ne = h.state.shadowsArray;
      if (
        (U.render(ne, C, j),
        V === !0 && S.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        J.render(f, C),
        h.setupLights(p.physicallyCorrectLights),
        j.isArrayCamera)
      ) {
        const W = j.cameras;
        for (let se = 0, Le = W.length; se < Le; se++) {
          const Oe = W[se];
          Ft(f, C, Oe, Oe.viewport);
        }
      } else Ft(f, C, j);
      v !== null &&
        (P.updateMultisampleRenderTarget(v), P.updateRenderTargetMipmap(v)),
        C.isScene === !0 && C.onAfterRender(p, C, j),
        B.resetDefaultState(),
        (y = -1),
        (b = null),
        g.pop(),
        g.length > 0 ? (h = g[g.length - 1]) : (h = null),
        d.pop(),
        d.length > 0 ? (f = d[d.length - 1]) : (f = null);
    });
  function St(C, j, ne, W) {
    if (C.visible === !1) return;
    if (C.layers.test(j.layers)) {
      if (C.isGroup) ne = C.renderOrder;
      else if (C.isLOD) C.autoUpdate === !0 && C.update(j);
      else if (C.isLight) h.pushLight(C), C.castShadow && h.pushShadow(C);
      else if (C.isSprite) {
        if (!C.frustumCulled || Y.intersectsSprite(C)) {
          W && de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);
          const Oe = pe.update(C),
            Be = C.material;
          Be.visible && f.push(C, Oe, Be, ne, de.z, null);
        }
      } else if (
        (C.isMesh || C.isLine || C.isPoints) &&
        (C.isSkinnedMesh &&
          C.skeleton.frame !== Te.render.frame &&
          (C.skeleton.update(), (C.skeleton.frame = Te.render.frame)),
        !C.frustumCulled || Y.intersectsObject(C))
      ) {
        W && de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);
        const Oe = pe.update(C),
          Be = C.material;
        if (Array.isArray(Be)) {
          const Ne = Oe.groups;
          for (let $e = 0, Ve = Ne.length; $e < Ve; $e++) {
            const We = Ne[$e],
              at = Be[We.materialIndex];
            at && at.visible && f.push(C, Oe, at, ne, de.z, We);
          }
        } else Be.visible && f.push(C, Oe, Be, ne, de.z, null);
      }
    }
    const Le = C.children;
    for (let Oe = 0, Be = Le.length; Oe < Be; Oe++) St(Le[Oe], j, ne, W);
  }
  function Ft(C, j, ne, W) {
    const se = C.opaque,
      Le = C.transmissive,
      Oe = C.transparent;
    h.setupLightsView(ne),
      Le.length > 0 && er(se, j, ne),
      W && _e.viewport(T.copy(W)),
      se.length > 0 && it(se, j, ne),
      Le.length > 0 && it(Le, j, ne),
      Oe.length > 0 && it(Oe, j, ne),
      _e.buffers.depth.setTest(!0),
      _e.buffers.depth.setMask(!0),
      _e.buffers.color.setMask(!0),
      _e.setPolygonOffset(!1);
  }
  function er(C, j, ne) {
    const W = ve.isWebGL2;
    H === null &&
      (H = new Or(1, 1, {
        generateMipmaps: !0,
        type: ce.has('EXT_color_buffer_half_float') ? Oo : Dr,
        minFilter: cl,
        samples: W && s === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize(te),
      W ? H.setSize(te.x, te.y) : H.setSize(Va(te.x), Va(te.y));
    const se = p.getRenderTarget();
    p.setRenderTarget(H), p.clear();
    const Le = p.toneMapping;
    (p.toneMapping = _i),
      it(C, j, ne),
      (p.toneMapping = Le),
      P.updateMultisampleRenderTarget(H),
      P.updateRenderTargetMipmap(H),
      p.setRenderTarget(se);
  }
  function it(C, j, ne) {
    const W = j.isScene === !0 ? j.overrideMaterial : null;
    for (let se = 0, Le = C.length; se < Le; se++) {
      const Oe = C[se],
        Be = Oe.object,
        Ne = Oe.geometry,
        $e = W === null ? Oe.material : W,
        Ve = Oe.group;
      Be.layers.test(ne.layers) && ni(Be, j, ne, Ne, $e, Ve);
    }
  }
  function ni(C, j, ne, W, se, Le) {
    C.onBeforeRender(p, j, ne, W, se, Le),
      C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse, C.matrixWorld),
      C.normalMatrix.getNormalMatrix(C.modelViewMatrix),
      se.onBeforeRender(p, j, ne, W, C, Le),
      se.transparent === !0 && se.side === di
        ? ((se.side = En),
          (se.needsUpdate = !0),
          p.renderBufferDirect(ne, j, W, se, C, Le),
          (se.side = Fs),
          (se.needsUpdate = !0),
          p.renderBufferDirect(ne, j, W, se, C, Le),
          (se.side = di))
        : p.renderBufferDirect(ne, j, W, se, C, Le),
      C.onAfterRender(p, j, ne, W, se, Le);
  }
  function dn(C, j, ne) {
    j.isScene !== !0 && (j = xe);
    const W = A.get(C),
      se = h.state.lights,
      Le = h.state.shadowsArray,
      Oe = se.state.version,
      Be = oe.getParameters(C, se.state, Le, j, ne),
      Ne = oe.getProgramCacheKey(Be);
    let $e = W.programs;
    (W.environment = C.isMeshStandardMaterial ? j.environment : null),
      (W.fog = j.fog),
      (W.envMap = (C.isMeshStandardMaterial ? K : X).get(
        C.envMap || W.environment
      )),
      $e === void 0 &&
        (C.addEventListener('dispose', ke),
        ($e = new Map()),
        (W.programs = $e));
    let Ve = $e.get(Ne);
    if (Ve !== void 0) {
      if (W.currentProgram === Ve && W.lightsStateVersion === Oe)
        return _f(C, Be), Ve;
    } else
      (Be.uniforms = oe.getUniforms(C)),
        C.onBuild(ne, Be, p),
        C.onBeforeCompile(Be, p),
        (Ve = oe.acquireProgram(Be, Ne)),
        $e.set(Ne, Ve),
        (W.uniforms = Be.uniforms);
    const We = W.uniforms;
    ((!C.isShaderMaterial && !C.isRawShaderMaterial) || C.clipping === !0) &&
      (We.clippingPlanes = S.uniform),
      _f(C, Be),
      (W.needsLights = f_(C)),
      (W.lightsStateVersion = Oe),
      W.needsLights &&
        ((We.ambientLightColor.value = se.state.ambient),
        (We.lightProbe.value = se.state.probe),
        (We.directionalLights.value = se.state.directional),
        (We.directionalLightShadows.value = se.state.directionalShadow),
        (We.spotLights.value = se.state.spot),
        (We.spotLightShadows.value = se.state.spotShadow),
        (We.rectAreaLights.value = se.state.rectArea),
        (We.ltc_1.value = se.state.rectAreaLTC1),
        (We.ltc_2.value = se.state.rectAreaLTC2),
        (We.pointLights.value = se.state.point),
        (We.pointLightShadows.value = se.state.pointShadow),
        (We.hemisphereLights.value = se.state.hemi),
        (We.directionalShadowMap.value = se.state.directionalShadowMap),
        (We.directionalShadowMatrix.value = se.state.directionalShadowMatrix),
        (We.spotShadowMap.value = se.state.spotShadowMap),
        (We.spotLightMatrix.value = se.state.spotLightMatrix),
        (We.spotLightMap.value = se.state.spotLightMap),
        (We.pointShadowMap.value = se.state.pointShadowMap),
        (We.pointShadowMatrix.value = se.state.pointShadowMatrix));
    const at = Ve.getUniforms(),
      tr = Ra.seqWithValue(at.seq, We);
    return (W.currentProgram = Ve), (W.uniformsList = tr), Ve;
  }
  function _f(C, j) {
    const ne = A.get(C);
    (ne.outputEncoding = j.outputEncoding),
      (ne.instancing = j.instancing),
      (ne.skinning = j.skinning),
      (ne.morphTargets = j.morphTargets),
      (ne.morphNormals = j.morphNormals),
      (ne.morphColors = j.morphColors),
      (ne.morphTargetsCount = j.morphTargetsCount),
      (ne.numClippingPlanes = j.numClippingPlanes),
      (ne.numIntersection = j.numClipIntersection),
      (ne.vertexAlphas = j.vertexAlphas),
      (ne.vertexTangents = j.vertexTangents),
      (ne.toneMapping = j.toneMapping);
  }
  function c_(C, j, ne, W, se) {
    j.isScene !== !0 && (j = xe), P.resetTextureUnits();
    const Le = j.fog,
      Oe = W.isMeshStandardMaterial ? j.environment : null,
      Be =
        v === null
          ? p.outputEncoding
          : v.isXRRenderTarget === !0
          ? v.texture.encoding
          : Ir,
      Ne = (W.isMeshStandardMaterial ? K : X).get(W.envMap || Oe),
      $e =
        W.vertexColors === !0 &&
        !!ne.attributes.color &&
        ne.attributes.color.itemSize === 4,
      Ve = !!W.normalMap && !!ne.attributes.tangent,
      We = !!ne.morphAttributes.position,
      at = !!ne.morphAttributes.normal,
      tr = !!ne.morphAttributes.color,
      Vr = W.toneMapped ? p.toneMapping : _i,
      Gr =
        ne.morphAttributes.position ||
        ne.morphAttributes.normal ||
        ne.morphAttributes.color,
      Gn = Gr !== void 0 ? Gr.length : 0,
      Ye = A.get(W),
      Hr = h.state.lights;
    if (V === !0 && (z === !0 || C !== b)) {
      const tn = C === b && W.id === y;
      S.setState(W, C, tn);
    }
    let pt = !1;
    W.version === Ye.__version
      ? ((Ye.needsLights && Ye.lightsStateVersion !== Hr.state.version) ||
          Ye.outputEncoding !== Be ||
          (se.isInstancedMesh && Ye.instancing === !1) ||
          (!se.isInstancedMesh && Ye.instancing === !0) ||
          (se.isSkinnedMesh && Ye.skinning === !1) ||
          (!se.isSkinnedMesh && Ye.skinning === !0) ||
          Ye.envMap !== Ne ||
          (W.fog === !0 && Ye.fog !== Le) ||
          (Ye.numClippingPlanes !== void 0 &&
            (Ye.numClippingPlanes !== S.numPlanes ||
              Ye.numIntersection !== S.numIntersection)) ||
          Ye.vertexAlphas !== $e ||
          Ye.vertexTangents !== Ve ||
          Ye.morphTargets !== We ||
          Ye.morphNormals !== at ||
          Ye.morphColors !== tr ||
          Ye.toneMapping !== Vr ||
          (ve.isWebGL2 === !0 && Ye.morphTargetsCount !== Gn)) &&
        (pt = !0)
      : ((pt = !0), (Ye.__version = W.version));
    let pn = Ye.currentProgram;
    pt === !0 && (pn = dn(W, j, se));
    let wi = !1,
      Qs = !1,
      xl = !1;
    const Ht = pn.getUniforms(),
      nr = Ye.uniforms;
    if (
      (_e.useProgram(pn.program) && ((wi = !0), (Qs = !0), (xl = !0)),
      W.id !== y && ((y = W.id), (Qs = !0)),
      wi || b !== C)
    ) {
      if (
        (Ht.setValue(F, 'projectionMatrix', C.projectionMatrix),
        ve.logarithmicDepthBuffer &&
          Ht.setValue(F, 'logDepthBufFC', 2 / (Math.log(C.far + 1) / Math.LN2)),
        b !== C && ((b = C), (Qs = !0), (xl = !0)),
        W.isShaderMaterial ||
          W.isMeshPhongMaterial ||
          W.isMeshToonMaterial ||
          W.isMeshStandardMaterial ||
          W.envMap)
      ) {
        const tn = Ht.map.cameraPosition;
        tn !== void 0 &&
          tn.setValue(F, de.setFromMatrixPosition(C.matrixWorld));
      }
      (W.isMeshPhongMaterial ||
        W.isMeshToonMaterial ||
        W.isMeshLambertMaterial ||
        W.isMeshBasicMaterial ||
        W.isMeshStandardMaterial ||
        W.isShaderMaterial) &&
        Ht.setValue(F, 'isOrthographic', C.isOrthographicCamera === !0),
        (W.isMeshPhongMaterial ||
          W.isMeshToonMaterial ||
          W.isMeshLambertMaterial ||
          W.isMeshBasicMaterial ||
          W.isMeshStandardMaterial ||
          W.isShaderMaterial ||
          W.isShadowMaterial ||
          se.isSkinnedMesh) &&
          Ht.setValue(F, 'viewMatrix', C.matrixWorldInverse);
    }
    if (se.isSkinnedMesh) {
      Ht.setOptional(F, se, 'bindMatrix'),
        Ht.setOptional(F, se, 'bindMatrixInverse');
      const tn = se.skeleton;
      tn &&
        (ve.floatVertexTextures
          ? (tn.boneTexture === null && tn.computeBoneTexture(),
            Ht.setValue(F, 'boneTexture', tn.boneTexture, P),
            Ht.setValue(F, 'boneTextureSize', tn.boneTextureSize))
          : console.warn(
              'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'
            ));
    }
    const vl = ne.morphAttributes;
    if (
      ((vl.position !== void 0 ||
        vl.normal !== void 0 ||
        (vl.color !== void 0 && ve.isWebGL2 === !0)) &&
        ie.update(se, ne, W, pn),
      (Qs || Ye.receiveShadow !== se.receiveShadow) &&
        ((Ye.receiveShadow = se.receiveShadow),
        Ht.setValue(F, 'receiveShadow', se.receiveShadow)),
      W.isMeshGouraudMaterial &&
        W.envMap !== null &&
        ((nr.envMap.value = Ne),
        (nr.flipEnvMap.value =
          Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1)),
      Qs &&
        (Ht.setValue(F, 'toneMappingExposure', p.toneMappingExposure),
        Ye.needsLights && u_(nr, xl),
        Le && W.fog === !0 && me.refreshFogUniforms(nr, Le),
        me.refreshMaterialUniforms(nr, W, q, D, H),
        Ra.upload(F, Ye.uniformsList, nr, P)),
      W.isShaderMaterial &&
        W.uniformsNeedUpdate === !0 &&
        (Ra.upload(F, Ye.uniformsList, nr, P), (W.uniformsNeedUpdate = !1)),
      W.isSpriteMaterial && Ht.setValue(F, 'center', se.center),
      Ht.setValue(F, 'modelViewMatrix', se.modelViewMatrix),
      Ht.setValue(F, 'normalMatrix', se.normalMatrix),
      Ht.setValue(F, 'modelMatrix', se.matrixWorld),
      W.isShaderMaterial || W.isRawShaderMaterial)
    ) {
      const tn = W.uniformsGroups;
      for (let yl = 0, h_ = tn.length; yl < h_; yl++)
        if (ve.isWebGL2) {
          const xf = tn[yl];
          be.update(xf, pn), be.bind(xf, pn);
        } else
          console.warn(
            'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.'
          );
    }
    return pn;
  }
  function u_(C, j) {
    (C.ambientLightColor.needsUpdate = j),
      (C.lightProbe.needsUpdate = j),
      (C.directionalLights.needsUpdate = j),
      (C.directionalLightShadows.needsUpdate = j),
      (C.pointLights.needsUpdate = j),
      (C.pointLightShadows.needsUpdate = j),
      (C.spotLights.needsUpdate = j),
      (C.spotLightShadows.needsUpdate = j),
      (C.rectAreaLights.needsUpdate = j),
      (C.hemisphereLights.needsUpdate = j);
  }
  function f_(C) {
    return (
      C.isMeshLambertMaterial ||
      C.isMeshToonMaterial ||
      C.isMeshPhongMaterial ||
      C.isMeshStandardMaterial ||
      C.isShadowMaterial ||
      (C.isShaderMaterial && C.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return x;
    }),
    (this.getRenderTarget = function () {
      return v;
    }),
    (this.setRenderTargetTextures = function (C, j, ne) {
      (A.get(C.texture).__webglTexture = j),
        (A.get(C.depthTexture).__webglTexture = ne);
      const W = A.get(C);
      (W.__hasExternalTextures = !0),
        W.__hasExternalTextures &&
          ((W.__autoAllocateDepthBuffer = ne === void 0),
          W.__autoAllocateDepthBuffer ||
            (ce.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'
              ),
              (W.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (C, j) {
      const ne = A.get(C);
      (ne.__webglFramebuffer = j), (ne.__useDefaultFramebuffer = j === void 0);
    }),
    (this.setRenderTarget = function (C, j = 0, ne = 0) {
      (v = C), (_ = j), (x = ne);
      let W = !0,
        se = null,
        Le = !1,
        Oe = !1;
      if (C) {
        const Ne = A.get(C);
        Ne.__useDefaultFramebuffer !== void 0
          ? (_e.bindFramebuffer(36160, null), (W = !1))
          : Ne.__webglFramebuffer === void 0
          ? P.setupRenderTarget(C)
          : Ne.__hasExternalTextures &&
            P.rebindTextures(
              C,
              A.get(C.texture).__webglTexture,
              A.get(C.depthTexture).__webglTexture
            );
        const $e = C.texture;
        ($e.isData3DTexture ||
          $e.isDataArrayTexture ||
          $e.isCompressedArrayTexture) &&
          (Oe = !0);
        const Ve = A.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget
          ? ((se = Ve[j]), (Le = !0))
          : ve.isWebGL2 && C.samples > 0 && P.useMultisampledRTT(C) === !1
          ? (se = A.get(C).__webglMultisampledFramebuffer)
          : (se = Ve),
          T.copy(C.viewport),
          R.copy(C.scissor),
          (M = C.scissorTest);
      } else
        T.copy(I).multiplyScalar(q).floor(),
          R.copy($).multiplyScalar(q).floor(),
          (M = Z);
      if (
        (_e.bindFramebuffer(36160, se) &&
          ve.drawBuffers &&
          W &&
          _e.drawBuffers(C, se),
        _e.viewport(T),
        _e.scissor(R),
        _e.setScissorTest(M),
        Le)
      ) {
        const Ne = A.get(C.texture);
        F.framebufferTexture2D(36160, 36064, 34069 + j, Ne.__webglTexture, ne);
      } else if (Oe) {
        const Ne = A.get(C.texture),
          $e = j || 0;
        F.framebufferTextureLayer(36160, 36064, Ne.__webglTexture, ne || 0, $e);
      }
      y = -1;
    }),
    (this.readRenderTargetPixels = function (C, j, ne, W, se, Le, Oe) {
      if (!(C && C.isWebGLRenderTarget)) {
        console.error(
          'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
        );
        return;
      }
      let Be = A.get(C).__webglFramebuffer;
      if ((C.isWebGLCubeRenderTarget && Oe !== void 0 && (Be = Be[Oe]), Be)) {
        _e.bindFramebuffer(36160, Be);
        try {
          const Ne = C.texture,
            $e = Ne.format,
            Ve = Ne.type;
          if ($e !== Fn && L.convert($e) !== F.getParameter(35739)) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
            );
            return;
          }
          const We =
            Ve === Oo &&
            (ce.has('EXT_color_buffer_half_float') ||
              (ve.isWebGL2 && ce.has('EXT_color_buffer_float')));
          if (
            Ve !== Dr &&
            L.convert(Ve) !== F.getParameter(35738) &&
            !(
              Ve === yr &&
              (ve.isWebGL2 ||
                ce.has('OES_texture_float') ||
                ce.has('WEBGL_color_buffer_float'))
            ) &&
            !We
          ) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
            );
            return;
          }
          j >= 0 &&
            j <= C.width - W &&
            ne >= 0 &&
            ne <= C.height - se &&
            F.readPixels(j, ne, W, se, L.convert($e), L.convert(Ve), Le);
        } finally {
          const Ne = v !== null ? A.get(v).__webglFramebuffer : null;
          _e.bindFramebuffer(36160, Ne);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (C, j, ne = 0) {
      const W = Math.pow(2, -ne),
        se = Math.floor(j.image.width * W),
        Le = Math.floor(j.image.height * W);
      P.setTexture2D(j, 0),
        F.copyTexSubImage2D(3553, ne, 0, 0, C.x, C.y, se, Le),
        _e.unbindTexture();
    }),
    (this.copyTextureToTexture = function (C, j, ne, W = 0) {
      const se = j.image.width,
        Le = j.image.height,
        Oe = L.convert(ne.format),
        Be = L.convert(ne.type);
      P.setTexture2D(ne, 0),
        F.pixelStorei(37440, ne.flipY),
        F.pixelStorei(37441, ne.premultiplyAlpha),
        F.pixelStorei(3317, ne.unpackAlignment),
        j.isDataTexture
          ? F.texSubImage2D(3553, W, C.x, C.y, se, Le, Oe, Be, j.image.data)
          : j.isCompressedTexture
          ? F.compressedTexSubImage2D(
              3553,
              W,
              C.x,
              C.y,
              j.mipmaps[0].width,
              j.mipmaps[0].height,
              Oe,
              j.mipmaps[0].data
            )
          : F.texSubImage2D(3553, W, C.x, C.y, Oe, Be, j.image),
        W === 0 && ne.generateMipmaps && F.generateMipmap(3553),
        _e.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (C, j, ne, W, se = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.'
        );
        return;
      }
      const Le = C.max.x - C.min.x + 1,
        Oe = C.max.y - C.min.y + 1,
        Be = C.max.z - C.min.z + 1,
        Ne = L.convert(W.format),
        $e = L.convert(W.type);
      let Ve;
      if (W.isData3DTexture) P.setTexture3D(W, 0), (Ve = 32879);
      else if (W.isDataArrayTexture) P.setTexture2DArray(W, 0), (Ve = 35866);
      else {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
        );
        return;
      }
      F.pixelStorei(37440, W.flipY),
        F.pixelStorei(37441, W.premultiplyAlpha),
        F.pixelStorei(3317, W.unpackAlignment);
      const We = F.getParameter(3314),
        at = F.getParameter(32878),
        tr = F.getParameter(3316),
        Vr = F.getParameter(3315),
        Gr = F.getParameter(32877),
        Gn = ne.isCompressedTexture ? ne.mipmaps[0] : ne.image;
      F.pixelStorei(3314, Gn.width),
        F.pixelStorei(32878, Gn.height),
        F.pixelStorei(3316, C.min.x),
        F.pixelStorei(3315, C.min.y),
        F.pixelStorei(32877, C.min.z),
        ne.isDataTexture || ne.isData3DTexture
          ? F.texSubImage3D(Ve, se, j.x, j.y, j.z, Le, Oe, Be, Ne, $e, Gn.data)
          : ne.isCompressedArrayTexture
          ? (console.warn(
              'THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'
            ),
            F.compressedTexSubImage3D(
              Ve,
              se,
              j.x,
              j.y,
              j.z,
              Le,
              Oe,
              Be,
              Ne,
              Gn.data
            ))
          : F.texSubImage3D(Ve, se, j.x, j.y, j.z, Le, Oe, Be, Ne, $e, Gn),
        F.pixelStorei(3314, We),
        F.pixelStorei(32878, at),
        F.pixelStorei(3316, tr),
        F.pixelStorei(3315, Vr),
        F.pixelStorei(32877, Gr),
        se === 0 && W.generateMipmaps && F.generateMipmap(Ve),
        _e.unbindTexture();
    }),
    (this.initTexture = function (C) {
      C.isCubeTexture
        ? P.setTextureCube(C, 0)
        : C.isData3DTexture
        ? P.setTexture3D(C, 0)
        : C.isDataArrayTexture || C.isCompressedArrayTexture
        ? P.setTexture2DArray(C, 0)
        : P.setTexture2D(C, 0),
        _e.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (x = 0), (v = null), _e.reset(), B.reset();
    }),
    typeof __THREE_DEVTOOLS__ < 'u' &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent('observe', { detail: this })
      );
}
class jw extends Bu {}
jw.prototype.isWebGL1Renderer = !0;
class Bm extends It {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.backgroundBlurriness = this.backgroundBlurriness),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        'THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.'
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      'THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.'
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class $w {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = Hc),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = xi());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xi()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xi()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Wt = new N();
class Ga {
  constructor(e, t, n, r = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ''),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = r === !0);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Wt.fromBufferAttribute(this, t),
        Wt.applyMatrix4(e),
        this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Wt.fromBufferAttribute(this, t),
        Wt.applyNormalMatrix(e),
        this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Wt.fromBufferAttribute(this, t),
        Wt.transformDirection(e),
        this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  setX(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = et(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = pi(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = et(t, this.array)), (n = et(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = et(t, this.array)),
        (n = et(n, this.array)),
        (r = et(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = et(t, this.array)),
        (n = et(n, this.array)),
        (r = et(r, this.array)),
        (s = et(s, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = r),
      (this.data.array[e + 3] = s),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        'THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.'
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[r + s]);
      }
      return new An(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Ga(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        'THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.'
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
class ku extends Ji {
  constructor(e) {
    super(),
      (this.isSpriteMaterial = !0),
      (this.type = 'SpriteMaterial'),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
let as;
const so = new N(),
  ls = new N(),
  cs = new N(),
  us = new De(),
  oo = new De(),
  km = new ht(),
  _a = new N(),
  ao = new N(),
  xa = new N(),
  vd = new De(),
  ac = new De(),
  yd = new De();
class Vm extends It {
  constructor(e) {
    if (
      (super(), (this.isSprite = !0), (this.type = 'Sprite'), as === void 0)
    ) {
      as = new jt();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new $w(t, 5);
      as.setIndex([0, 1, 2, 0, 2, 3]),
        as.setAttribute('position', new Ga(n, 3, 0, !1)),
        as.setAttribute('uv', new Ga(n, 2, 3, !1));
    }
    (this.geometry = as),
      (this.material = e !== void 0 ? e : new ku()),
      (this.center = new De(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      ls.setFromMatrixScale(this.matrixWorld),
      km.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      cs.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        ls.multiplyScalar(-cs.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && ((s = Math.cos(n)), (r = Math.sin(n)));
    const o = this.center;
    va(_a.set(-0.5, -0.5, 0), cs, o, ls, r, s),
      va(ao.set(0.5, -0.5, 0), cs, o, ls, r, s),
      va(xa.set(0.5, 0.5, 0), cs, o, ls, r, s),
      vd.set(0, 0),
      ac.set(1, 0),
      yd.set(1, 1);
    let a = e.ray.intersectTriangle(_a, ao, xa, !1, so);
    if (
      a === null &&
      (va(ao.set(-0.5, 0.5, 0), cs, o, ls, r, s),
      ac.set(0, 1),
      (a = e.ray.intersectTriangle(_a, xa, ao, !1, so)),
      a === null)
    )
      return;
    const l = e.ray.origin.distanceTo(so);
    l < e.near ||
      l > e.far ||
      t.push({
        distance: l,
        point: so.clone(),
        uv: Yn.getUV(so, _a, ao, xa, vd, ac, yd, new De()),
        face: null,
        object: this,
      });
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.center !== void 0 && this.center.copy(e.center),
      (this.material = e.material),
      this
    );
  }
}
function va(i, e, t, n, r, s) {
  us.subVectors(i, t).addScalar(0.5).multiply(n),
    r !== void 0
      ? ((oo.x = s * us.x - r * us.y), (oo.y = r * us.x + s * us.y))
      : oo.copy(us),
    i.copy(e),
    (i.x += oo.x),
    (i.y += oo.y),
    i.applyMatrix4(km);
}
class Vu extends Ji {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = 'LineBasicMaterial'),
      (this.color = new qe(16777215)),
      (this.linewidth = 1),
      (this.linecap = 'round'),
      (this.linejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Md = new N(),
  bd = new N(),
  Sd = new ht(),
  lc = new Nu(),
  ya = new Wo();
class jc extends It {
  constructor(e = new jt(), t = new Vu()) {
    super(),
      (this.isLine = !0),
      (this.type = 'Line'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Md.fromBufferAttribute(t, r - 1),
          bd.fromBufferAttribute(t, r),
          (n[r] = n[r - 1]),
          (n[r] += Md.distanceTo(bd));
      e.setAttribute('lineDistance', new Ot(n, 1));
    } else
      console.warn(
        'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Line.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ya.copy(n.boundingSphere),
      ya.applyMatrix4(r),
      (ya.radius += s),
      e.ray.intersectsSphere(ya) === !1)
    )
      return;
    Sd.copy(r).invert(), lc.copy(e.ray).applyMatrix4(Sd);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = new N(),
      u = new N(),
      f = new N(),
      h = new N(),
      d = this.isLineSegments ? 2 : 1,
      g = n.index,
      m = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, o.start),
        x = Math.min(g.count, o.start + o.count);
      for (let v = _, y = x - 1; v < y; v += d) {
        const b = g.getX(v),
          T = g.getX(v + 1);
        if (
          (c.fromBufferAttribute(m, b),
          u.fromBufferAttribute(m, T),
          lc.distanceSqToSegment(c, u, h, f) > l)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const M = e.ray.origin.distanceTo(h);
        M < e.near ||
          M > e.far ||
          t.push({
            distance: M,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: v,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const _ = Math.max(0, o.start),
        x = Math.min(m.count, o.start + o.count);
      for (let v = _, y = x - 1; v < y; v += d) {
        if (
          (c.fromBufferAttribute(m, v),
          u.fromBufferAttribute(m, v + 1),
          lc.distanceSqToSegment(c, u, h, f) > l)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const T = e.ray.origin.distanceTo(h);
        T < e.near ||
          T > e.far ||
          t.push({
            distance: T,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: v,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
}
const wd = new N(),
  Td = new N();
class Yw extends jc {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = 'LineSegments');
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        wd.fromBufferAttribute(t, r),
          Td.fromBufferAttribute(t, r + 1),
          (n[r] = r === 0 ? 0 : n[r - 1]),
          (n[r + 1] = n[r] + wd.distanceTo(Td));
      e.setAttribute('lineDistance', new Ot(n, 1));
    } else
      console.warn(
        'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
      );
    return this;
  }
}
class Gm extends Ji {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = 'PointsMaterial'),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Ed = new ht(),
  $c = new Nu(),
  Ma = new Wo(),
  ba = new N();
class Zw extends It {
  constructor(e = new jt(), t = new Gm()) {
    super(),
      (this.isPoints = !0),
      (this.type = 'Points'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Points.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ma.copy(n.boundingSphere),
      Ma.applyMatrix4(r),
      (Ma.radius += s),
      e.ray.intersectsSphere(Ma) === !1)
    )
      return;
    Ed.copy(r).invert(), $c.copy(e.ray).applyMatrix4(Ed);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = n.index,
      f = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, o.start),
        d = Math.min(c.count, o.start + o.count);
      for (let g = h, p = d; g < p; g++) {
        const m = c.getX(g);
        ba.fromBufferAttribute(f, m), Ad(ba, m, l, r, e, t, this);
      }
    } else {
      const h = Math.max(0, o.start),
        d = Math.min(f.count, o.start + o.count);
      for (let g = h, p = d; g < p; g++)
        ba.fromBufferAttribute(f, g), Ad(ba, g, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
}
function Ad(i, e, t, n, r, s, o) {
  const a = $c.distanceSqToPoint(i);
  if (a < t) {
    const l = new N();
    $c.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: o,
    });
  }
}
class Kw extends un {
  constructor(e, t, n, r, s, o, a, l, c) {
    super(e, t, n, r, s, o, a, l, c),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class Jw {
  constructor() {
    (this.type = 'Curve'), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn('THREE.Curve: .getPoint() not implemented.'), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      r = this.getPoint(0),
      s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      (n = this.getPoint(o / e)), (s += n.distanceTo(r)), t.push(s), (r = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let o;
    t ? (o = t) : (o = e * n[s - 1]);
    let a = 0,
      l = s - 1,
      c;
    for (; a <= l; )
      if (((r = Math.floor(a + (l - a) / 2)), (c = n[r] - o), c < 0)) a = r + 1;
      else if (c > 0) l = r - 1;
      else {
        l = r;
        break;
      }
    if (((r = l), n[r] === o)) return r / (s - 1);
    const u = n[r],
      h = n[r + 1] - u,
      d = (o - u) / h;
    return (r + d) / (s - 1);
  }
  getTangent(e, t) {
    let r = e - 1e-4,
      s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const o = this.getPoint(r),
      a = this.getPoint(s),
      l = t || (o.isVector2 ? new De() : new N());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new N(),
      r = [],
      s = [],
      o = [],
      a = new N(),
      l = new ht();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      r[d] = this.getTangentAt(g, new N());
    }
    (s[0] = new N()), (o[0] = new N());
    let c = Number.MAX_VALUE;
    const u = Math.abs(r[0].x),
      f = Math.abs(r[0].y),
      h = Math.abs(r[0].z);
    u <= c && ((c = u), n.set(1, 0, 0)),
      f <= c && ((c = f), n.set(0, 1, 0)),
      h <= c && n.set(0, 0, 1),
      a.crossVectors(r[0], n).normalize(),
      s[0].crossVectors(r[0], a),
      o[0].crossVectors(r[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (
        ((s[d] = s[d - 1].clone()),
        (o[d] = o[d - 1].clone()),
        a.crossVectors(r[d - 1], r[d]),
        a.length() > Number.EPSILON)
      ) {
        a.normalize();
        const g = Math.acos(Pt(r[d - 1].dot(r[d]), -1, 1));
        s[d].applyMatrix4(l.makeRotationAxis(a, g));
      }
      o[d].crossVectors(r[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(Pt(s[0].dot(s[e]), -1, 1));
      (d /= e), r[0].dot(a.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(l.makeRotationAxis(r[g], d * g)),
          o[g].crossVectors(r[g], s[g]);
    }
    return { tangents: r, normals: s, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.5, type: 'Curve', generator: 'Curve.toJSON' },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class Qw extends Jw {
  constructor(
    e = 0,
    t = 0,
    n = 1,
    r = 1,
    s = 0,
    o = Math.PI * 2,
    a = !1,
    l = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = 'EllipseCurve'),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = n),
      (this.yRadius = r),
      (this.aStartAngle = s),
      (this.aEndAngle = o),
      (this.aClockwise = a),
      (this.aRotation = l);
  }
  getPoint(e, t) {
    const n = t || new De(),
      r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += r;
    for (; s > r; ) s -= r;
    s < Number.EPSILON && (o ? (s = 0) : (s = r)),
      this.aClockwise === !0 && !o && (s === r ? (s = -r) : (s = s - r));
    const a = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(a),
      c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation),
        f = Math.sin(this.aRotation),
        h = l - this.aX,
        d = c - this.aY;
      (l = h * u - d * f + this.aX), (c = h * f + d * u + this.aY);
    }
    return n.set(l, c);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
class eT extends Qw {
  constructor(e, t, n, r, s, o) {
    super(e, t, n, n, r, s, o),
      (this.isArcCurve = !0),
      (this.type = 'ArcCurve');
  }
}
class Gu extends jt {
  constructor(e = 0.5, t = 1, n = 8, r = 1, s = 0, o = Math.PI * 2) {
    super(),
      (this.type = 'RingGeometry'),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: r,
        thetaStart: s,
        thetaLength: o,
      }),
      (n = Math.max(3, n)),
      (r = Math.max(1, r));
    const a = [],
      l = [],
      c = [],
      u = [];
    let f = e;
    const h = (t - e) / r,
      d = new N(),
      g = new De();
    for (let p = 0; p <= r; p++) {
      for (let m = 0; m <= n; m++) {
        const _ = s + (m / n) * o;
        (d.x = f * Math.cos(_)),
          (d.y = f * Math.sin(_)),
          l.push(d.x, d.y, d.z),
          c.push(0, 0, 1),
          (g.x = (d.x / t + 1) / 2),
          (g.y = (d.y / t + 1) / 2),
          u.push(g.x, g.y);
      }
      f += h;
    }
    for (let p = 0; p < r; p++) {
      const m = p * (n + 1);
      for (let _ = 0; _ < n; _++) {
        const x = _ + m,
          v = x,
          y = x + n + 1,
          b = x + n + 2,
          T = x + 1;
        a.push(v, y, T), a.push(y, b, T);
      }
    }
    this.setIndex(a),
      this.setAttribute('position', new Ot(l, 3)),
      this.setAttribute('normal', new Ot(c, 3)),
      this.setAttribute('uv', new Ot(u, 2));
  }
  static fromJSON(e) {
    return new Gu(
      e.innerRadius,
      e.outerRadius,
      e.thetaSegments,
      e.phiSegments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class bo extends jt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    r = 0,
    s = Math.PI * 2,
    o = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = 'SphereGeometry'),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: r,
        phiLength: s,
        thetaStart: o,
        thetaLength: a,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const u = [],
      f = new N(),
      h = new N(),
      d = [],
      g = [],
      p = [],
      m = [];
    for (let _ = 0; _ <= n; _++) {
      const x = [],
        v = _ / n;
      let y = 0;
      _ == 0 && o == 0
        ? (y = 0.5 / t)
        : _ == n && l == Math.PI && (y = -0.5 / t);
      for (let b = 0; b <= t; b++) {
        const T = b / t;
        (f.x = -e * Math.cos(r + T * s) * Math.sin(o + v * a)),
          (f.y = e * Math.cos(o + v * a)),
          (f.z = e * Math.sin(r + T * s) * Math.sin(o + v * a)),
          g.push(f.x, f.y, f.z),
          h.copy(f).normalize(),
          p.push(h.x, h.y, h.z),
          m.push(T + y, 1 - v),
          x.push(c++);
      }
      u.push(x);
    }
    for (let _ = 0; _ < n; _++)
      for (let x = 0; x < t; x++) {
        const v = u[_][x + 1],
          y = u[_][x],
          b = u[_ + 1][x],
          T = u[_ + 1][x + 1];
        (_ !== 0 || o > 0) && d.push(v, y, T),
          (_ !== n - 1 || l < Math.PI) && d.push(y, b, T);
      }
    this.setIndex(d),
      this.setAttribute('position', new Ot(g, 3)),
      this.setAttribute('normal', new Ot(p, 3)),
      this.setAttribute('uv', new Ot(m, 2));
  }
  static fromJSON(e) {
    return new bo(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class tT extends Ji {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: '' }),
      (this.type = 'MeshStandardMaterial'),
      (this.color = new qe(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new qe(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = bm),
      (this.normalScale = new De(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: '' }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
const Cd = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class nT {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          r.onProgress !== void 0 && r.onProgress(u, o, a),
          o === a && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, f) {
        return c.push(u, f), this;
      }),
      (this.removeHandler = function (u) {
        const f = c.indexOf(u);
        return f !== -1 && c.splice(f, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let f = 0, h = c.length; f < h; f += 2) {
          const d = c[f],
            g = c[f + 1];
          if ((d.global && (d.lastIndex = 0), d.test(u))) return g;
        }
        return null;
      });
  }
}
const iT = new nT();
class Hm {
  constructor(e) {
    (this.manager = e !== void 0 ? e : iT),
      (this.crossOrigin = 'anonymous'),
      (this.withCredentials = !1),
      (this.path = ''),
      (this.resourcePath = ''),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class rT extends Hm {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = Cd.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = Fo('img');
    function l() {
      u(), Cd.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(f) {
      u(), r && r(f), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener('load', l, !1),
        a.removeEventListener('error', c, !1);
    }
    return (
      a.addEventListener('load', l, !1),
      a.addEventListener('error', c, !1),
      e.slice(0, 5) !== 'data:' &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class fs extends Hm {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new un(),
      o = new rT(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        r
      ),
      s
    );
  }
}
class sT extends It {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = 'Light'),
      (this.color = new qe(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
class oT extends sT {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = 'AmbientLight');
  }
}
class Pd {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Pt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class aT extends Yw {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      r = new jt();
    r.setAttribute('position', new Ot(t, 3)),
      r.setAttribute('color', new Ot(n, 3));
    const s = new Vu({ vertexColors: !0, toneMapped: !1 });
    super(r, s), (this.type = 'AxesHelper');
  }
  setColors(e, t, n) {
    const r = new qe(),
      s = this.geometry.attributes.color.array;
    return (
      r.set(e),
      r.toArray(s, 0),
      r.toArray(s, 3),
      r.set(t),
      r.toArray(s, 6),
      r.toArray(s, 9),
      r.set(n),
      r.toArray(s, 12),
      r.toArray(s, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent('register', { detail: { revision: Ou } })
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = Ou));
function fi(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function Wm(i, e) {
  (i.prototype = Object.create(e.prototype)),
    (i.prototype.constructor = i),
    (i.__proto__ = e);
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ln = {
    autoSleep: 120,
    force3D: 'auto',
    nullTargetWarn: 1,
    units: { lineHeight: '' },
  },
  ks = { duration: 0.5, overwrite: !1, delay: 0 },
  Hu,
  Kt,
  gt,
  bn = 1e8,
  Je = 1 / bn,
  Yc = Math.PI * 2,
  lT = Yc / 4,
  cT = 0,
  qm = Math.sqrt,
  uT = Math.cos,
  fT = Math.sin,
  Ct = function (e) {
    return typeof e == 'string';
  },
  ct = function (e) {
    return typeof e == 'function';
  },
  Mi = function (e) {
    return typeof e == 'number';
  },
  Wu = function (e) {
    return typeof e > 'u';
  },
  ti = function (e) {
    return typeof e == 'object';
  },
  Jt = function (e) {
    return e !== !1;
  },
  Xm = function () {
    return typeof window < 'u';
  },
  Sa = function (e) {
    return ct(e) || Ct(e);
  },
  jm =
    (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  Vt = Array.isArray,
  Zc = /(?:-?\.?\d|\.)+/gi,
  $m = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  _s = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  cc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ym = /[+-]=-?[.\d]+/,
  Zm = /[^,'"\[\]\s]+/gi,
  hT = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  st,
  xn,
  Kc,
  qu,
  fn = {},
  Ha = {},
  Km,
  Jm = function (e) {
    return (Ha = Nr(e, fn)) && hn;
  },
  Xu = function (e, t) {
    return console.warn(
      'Invalid property',
      e,
      'set to',
      t,
      'Missing plugin? gsap.registerPlugin()'
    );
  },
  Wa = function (e, t) {
    return !t && console.warn(e);
  },
  Qm = function (e, t) {
    return (e && (fn[e] = t) && Ha && (Ha[e] = t)) || fn;
  },
  No = function () {
    return 0;
  },
  dT = { suppressEvents: !0, isStart: !0, kill: !1 },
  La = { suppressEvents: !0, kill: !1 },
  pT = { suppressEvents: !0 },
  ju = {},
  Wi = [],
  Jc = {},
  eg,
  sn = {},
  uc = {},
  Rd = 30,
  Da = [],
  $u = '',
  Yu = function (e) {
    var t = e[0],
      n,
      r;
    if ((ti(t) || ct(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Da.length; r-- && !Da[r].targetTest(t); );
      n = Da[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new bg(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  Ar = function (e) {
    return e._gsap || Yu(Sn(e))[0]._gsap;
  },
  tg = function (e, t, n) {
    return (n = e[t]) && ct(n)
      ? e[t]()
      : (Wu(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Qt = function (e, t) {
    return (e = e.split(',')).forEach(t) || e;
  },
  ut = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Rt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Ts = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === '+' ? e + r : n === '-' ? e - r : n === '*' ? e * r : e / r
    );
  },
  mT = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
    return r < n;
  },
  qa = function () {
    var e = Wi.length,
      t = Wi.slice(0),
      n,
      r;
    for (Jc = {}, Wi.length = 0, n = 0; n < e; n++)
      (r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  ng = function (e, t, n, r) {
    Wi.length && qa(),
      e.render(t, n, r || (Kt && t < 0 && (e._initted || e._startAt))),
      Wi.length && qa();
  },
  ig = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + '').match(Zm).length < 2
      ? t
      : Ct(e)
      ? e.trim()
      : e;
  },
  rg = function (e) {
    return e;
  },
  Cn = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  gT = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === 'duration' && e) || r === 'ease' || (t[r] = n[r]);
    };
  },
  Nr = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Ld = function i(e, t) {
    for (var n in t)
      n !== '__proto__' &&
        n !== 'constructor' &&
        n !== 'prototype' &&
        (e[n] = ti(t[n]) ? i(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  Xa = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  So = function (e) {
    var t = e.parent || st,
      n = e.keyframes ? gT(Vt(e.keyframes)) : Cn;
    if (Jt(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  _T = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; );
    return n < 0;
  },
  sg = function (e, t, n, r, s) {
    n === void 0 && (n = '_first'), r === void 0 && (r = '_last');
    var o = e[r],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  fl = function (e, t, n, r) {
    n === void 0 && (n = '_first'), r === void 0 && (r = '_last');
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[n] === t && (e[n] = o),
      o ? (o._prev = s) : e[r] === t && (e[r] = s),
      (t._next = t._prev = t.parent = null);
  },
  Zi = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  Cr = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  xT = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  Qc = function (e, t, n, r) {
    return (
      e._startAt &&
      (Kt
        ? e._startAt.revert(La)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  vT = function i(e) {
    return !e || (e._ts && i(e.parent));
  },
  Dd = function (e) {
    return e._repeat ? Vs(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Vs = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  ja = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  hl = function (e) {
    return (e._end = Rt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || Je) || 0)
    ));
  },
  dl = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = Rt(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        hl(e),
        n._dirty || Cr(n, e)),
      e
    );
  },
  og = function (e, t) {
    var n;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((n = ja(e.rawTime(), t)),
        (!t._dur || Xo(0, t.totalDuration(), n) - t._tTime > Je) &&
          t.render(n, !0)),
      Cr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -Je;
    }
  },
  Zn = function (e, t, n, r) {
    return (
      t.parent && Zi(t),
      (t._start = Rt(
        (Mi(n) ? n : n || e !== st ? _n(e, n, t) : e._time) + t._delay
      )),
      (t._end = Rt(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      sg(e, t, '_first', '_last', e._sort ? '_start' : 0),
      eu(t) || (e._recent = t),
      r || og(e, t),
      e._ts < 0 && dl(e, e._tTime),
      e
    );
  },
  ag = function (e, t) {
    return (
      (fn.ScrollTrigger || Xu('scrollTrigger', t)) &&
      fn.ScrollTrigger.create(t, e)
    );
  },
  lg = function (e, t, n, r, s) {
    if ((Ku(e, t, s), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !Kt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      eg !== an.frame
    )
      return Wi.push(e), (e._lazy = [s, r]), 1;
  },
  yT = function i(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
  },
  eu = function (e) {
    var t = e.data;
    return t === 'isFromStart' || t === 'isStart';
  },
  MT = function (e, t, n, r) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && yT(e) && !(!e._initted && eu(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !eu(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      c,
      u,
      f;
    if (
      (a &&
        e._repeat &&
        ((l = Xo(0, e._tDur, t)),
        (u = Vs(l, a)),
        e._yoyo && u & 1 && (o = 1 - o),
        u !== Vs(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Kt || r || e._zTime === Je || (!t && e._zTime))
    ) {
      if (!e._initted && lg(e, t, r, n, l)) return;
      for (
        f = e._zTime,
          e._zTime = t || (n ? Je : 0),
          n || (n = t && !f),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next);
      t < 0 && Qc(e, t, n, !0),
        e._onUpdate && !n && wn(e, 'onUpdate'),
        l && e._repeat && !n && e.parent && wn(e, 'onRepeat'),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Zi(e, 1),
          !n &&
            !Kt &&
            (wn(e, o ? 'onComplete' : 'onReverseComplete', !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  bT = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n; ) {
        if (r.data === 'isPause' && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n; ) {
        if (r.data === 'isPause' && r._start < t) return r;
        r = r._prev;
      }
  },
  Gs = function (e, t, n, r) {
    var s = e._repeat,
      o = Rt(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Rt(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !r && dl(e, (e._tTime = e._tDur * a)),
      e.parent && hl(e),
      n || Cr(e.parent, e),
      e
    );
  },
  Id = function (e) {
    return e instanceof Zt ? Cr(e) : Gs(e, e._dur);
  },
  ST = { _start: 0, endTime: No, totalDuration: No },
  _n = function i(e, t, n) {
    var r = e.labels,
      s = e._recent || ST,
      o = e.duration() >= bn ? s.endTime(!1) : e._dur,
      a,
      l,
      c;
    return Ct(t) && (isNaN(t) || t in r)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === '%'),
        (a = t.indexOf('=')),
        l === '<' || l === '>'
          ? (a >= 0 && (t = t.replace(/=/, '')),
            (l === '<' ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (a < 0 ? s : n).totalDuration() / 100 : 1))
          : a < 0
          ? (t in r || (r[t] = o), r[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            c && n && (l = (l / 100) * (Vt(n) ? n[0] : n).totalDuration()),
            a > 1 ? i(e, t.substr(0, a - 1), n) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  wo = function (e, t, n) {
    var r = Mi(t[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((r && (o.duration = t[1]), (o.parent = n), e)) {
      for (a = o, l = n; l && !('immediateRender' in a); )
        (a = l.vars.defaults || {}), (l = Jt(l.vars.inherit) && l.parent);
      (o.immediateRender = Jt(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new vt(t[0], o, t[s + 1]);
  },
  Qi = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Xo = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Bt = function (e, t) {
    return !Ct(e) || !(t = hT.exec(e)) ? '' : t[1];
  },
  wT = function (e, t, n) {
    return Qi(n, function (r) {
      return Xo(e, t, r);
    });
  },
  tu = [].slice,
  cg = function (e, t) {
    return (
      e &&
      ti(e) &&
      'length' in e &&
      ((!t && !e.length) || (e.length - 1 in e && ti(e[0]))) &&
      !e.nodeType &&
      e !== xn
    );
  },
  TT = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (r) {
        var s;
        return (Ct(r) && !t) || cg(r, 1)
          ? (s = n).push.apply(s, Sn(r))
          : n.push(r);
      }) || n
    );
  },
  Sn = function (e, t, n) {
    return gt && !t && gt.selector
      ? gt.selector(e)
      : Ct(e) && !n && (Kc || !Hs())
      ? tu.call((t || qu).querySelectorAll(e), 0)
      : Vt(e)
      ? TT(e, n)
      : cg(e)
      ? tu.call(e, 0)
      : e
      ? [e]
      : [];
  },
  nu = function (e) {
    return (
      (e = Sn(e)[0] || Wa('Invalid scope') || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Sn(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? Wa('Invalid scope') || qu.createElement('div')
            : e
        );
      }
    );
  },
  ug = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  fg = function (e) {
    if (ct(e)) return e;
    var t = ti(e) ? e : { each: e },
      n = Pr(t.ease),
      r = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      c = t.axis,
      u = r,
      f = r;
    return (
      Ct(r)
        ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((u = r[0]), (f = r[1])),
      function (h, d, g) {
        var p = (g || t).length,
          m = o[p],
          _,
          x,
          v,
          y,
          b,
          T,
          R,
          M,
          w;
        if (!m) {
          if (((w = t.grid === 'auto' ? 0 : (t.grid || [1, bn])[1]), !w)) {
            for (
              R = -bn;
              R < (R = g[w++].getBoundingClientRect().left) && w < p;

            );
            w--;
          }
          for (
            m = o[p] = [],
              _ = l ? Math.min(w, p) * u - 0.5 : r % w,
              x = w === bn ? 0 : l ? (p * f) / w - 0.5 : (r / w) | 0,
              R = 0,
              M = bn,
              T = 0;
            T < p;
            T++
          )
            (v = (T % w) - _),
              (y = x - ((T / w) | 0)),
              (m[T] = b = c ? Math.abs(c === 'y' ? y : v) : qm(v * v + y * y)),
              b > R && (R = b),
              b < M && (M = b);
          r === 'random' && ug(m),
            (m.max = R - M),
            (m.min = M),
            (m.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (w > p
                    ? p - 1
                    : c
                    ? c === 'y'
                      ? p / w
                      : w
                    : Math.max(w, p / w)) ||
                0) * (r === 'edges' ? -1 : 1)),
            (m.b = p < 0 ? s - p : s),
            (m.u = Bt(t.amount || t.each) || 0),
            (n = n && p < 0 ? vg(n) : n);
        }
        return (
          (p = (m[h] - m.min) / m.max || 0),
          Rt(m.b + (n ? n(p) : p) * m.v) + m.u
        );
      }
    );
  },
  iu = function (e) {
    var t = Math.pow(10, ((e + '').split('.')[1] || '').length);
    return function (n) {
      var r = Rt(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (Mi(n) ? 0 : Bt(n));
    };
  },
  hg = function (e, t) {
    var n = Vt(e),
      r,
      s;
    return (
      !n &&
        ti(e) &&
        ((r = n = e.radius || bn),
        e.values
          ? ((e = Sn(e.values)), (s = !Mi(e[0])) && (r *= r))
          : (e = iu(e.increment))),
      Qi(
        t,
        n
          ? ct(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    c = bn,
                    u = 0,
                    f = e.length,
                    h,
                    d;
                  f--;

                )
                  s
                    ? ((h = e[f].x - a), (d = e[f].y - l), (h = h * h + d * d))
                    : (h = Math.abs(e[f] - a)),
                    h < c && ((c = h), (u = f));
                return (
                  (u = !r || c <= r ? e[u] : o),
                  s || u === o || Mi(o) ? u : u + Bt(o)
                );
              }
          : iu(e)
      )
    );
  },
  dg = function (e, t, n, r) {
    return Qi(Vt(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return Vt(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (r = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                r
            ) / r;
    });
  },
  ET = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (r) {
      return t.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  },
  AT = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Bt(n));
    };
  },
  CT = function (e, t, n) {
    return mg(e, t, 0, 1, n);
  },
  pg = function (e, t, n) {
    return Qi(n, function (r) {
      return e[~~t(r)];
    });
  },
  PT = function i(e, t, n) {
    var r = t - e;
    return Vt(e)
      ? pg(e, i(0, e.length), t)
      : Qi(n, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  },
  RT = function i(e, t, n) {
    var r = t - e,
      s = r * 2;
    return Vt(e)
      ? pg(e, i(0, e.length - 1), t)
      : Qi(n, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  },
  zo = function (e) {
    for (var t = 0, n = '', r, s, o, a; ~(r = e.indexOf('random(', t)); )
      (o = e.indexOf(')', r)),
        (a = e.charAt(r + 7) === '['),
        (s = e.substr(r + 7, o - r - 7).match(a ? Zm : Zc)),
        (n +=
          e.substr(t, r - t) + dg(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return n + e.substr(t, e.length - t);
  },
  mg = function (e, t, n, r, s) {
    var o = t - e,
      a = r - n;
    return Qi(s, function (l) {
      return n + (((l - e) / o) * a || 0);
    });
  },
  LT = function i(e, t, n, r) {
    var s = isNaN(e + t)
      ? 0
      : function (d) {
          return (1 - d) * e + d * t;
        };
    if (!s) {
      var o = Ct(e),
        a = {},
        l,
        c,
        u,
        f,
        h;
      if ((n === !0 && (r = 1) && (n = null), o))
        (e = { p: e }), (t = { p: t });
      else if (Vt(e) && !Vt(t)) {
        for (u = [], f = e.length, h = f - 2, c = 1; c < f; c++)
          u.push(i(e[c - 1], e[c]));
        f--,
          (s = function (g) {
            g *= f;
            var p = Math.min(h, ~~g);
            return u[p](g - p);
          }),
          (n = t);
      } else r || (e = Nr(Vt(e) ? [] : {}, e));
      if (!u) {
        for (l in t) Zu.call(a, e, l, 'get', t[l]);
        s = function (g) {
          return ef(g, a) || (o ? e.p : e);
        };
      }
    }
    return Qi(n, s);
  },
  Od = function (e, t, n) {
    var r = e.labels,
      s = bn,
      o,
      a,
      l;
    for (o in r)
      (a = r[o] - t),
        a < 0 == !!n && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  wn = function (e, t, n) {
    var r = e.vars,
      s = r[t],
      o = gt,
      a = e._ctx,
      l,
      c,
      u;
    if (!!s)
      return (
        (l = r[t + 'Params']),
        (c = r.callbackScope || e),
        n && Wi.length && qa(),
        a && (gt = a),
        (u = l ? s.apply(c, l) : s.call(c)),
        (gt = o),
        u
      );
  },
  ho = function (e) {
    return (
      Zi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Kt),
      e.progress() < 1 && wn(e, 'onInterrupt'),
      e
    );
  },
  xs,
  DT = function (e) {
    e = (!e.name && e.default) || e;
    var t = e.name,
      n = ct(e),
      r =
        t && !n && e.init
          ? function () {
              this._props = [];
            }
          : e,
      s = { init: No, render: ef, add: Zu, kill: $T, modifier: jT, rawVars: 0 },
      o = { targetTest: 0, get: 0, getSetter: Qu, aliases: {}, register: 0 };
    if ((Hs(), e !== r)) {
      if (sn[t]) return;
      Cn(r, Cn(Xa(e, s), o)),
        Nr(r.prototype, Nr(s, Xa(e, o))),
        (sn[(r.prop = t)] = r),
        e.targetTest && (Da.push(r), (ju[t] = 1)),
        (t =
          (t === 'css' ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) +
          'Plugin');
    }
    Qm(t, r), e.register && e.register(hn, r, en);
  },
  Qe = 255,
  po = {
    aqua: [0, Qe, Qe],
    lime: [0, Qe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Qe],
    navy: [0, 0, 128],
    white: [Qe, Qe, Qe],
    olive: [128, 128, 0],
    yellow: [Qe, Qe, 0],
    orange: [Qe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Qe, 0, 0],
    pink: [Qe, 192, 203],
    cyan: [0, Qe, Qe],
    transparent: [Qe, Qe, Qe, 0],
  },
  fc = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : e * 3 < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        Qe +
        0.5) |
        0
    );
  },
  gg = function (e, t, n) {
    var r = e ? (Mi(e) ? [e >> 16, (e >> 8) & Qe, e & Qe] : 0) : po.black,
      s,
      o,
      a,
      l,
      c,
      u,
      f,
      h,
      d,
      g;
    if (!r) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), po[e]))
        r = po[e];
      else if (e.charAt(0) === '#') {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              '#' +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & Qe, r & Qe, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & Qe, e & Qe]);
      } else if (e.substr(0, 3) === 'hsl') {
        if (((r = g = e.match(Zc)), !t))
          (l = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (u = +r[2] / 100),
            (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = fc(l + 1 / 3, s, o)),
            (r[1] = fc(l, s, o)),
            (r[2] = fc(l - 1 / 3, s, o));
        else if (~e.indexOf('='))
          return (r = e.match($m)), n && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(Zc) || po.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !g &&
        ((s = r[0] / Qe),
        (o = r[1] / Qe),
        (a = r[2] / Qe),
        (f = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (u = (f + h) / 2),
        f === h
          ? (l = c = 0)
          : ((d = f - h),
            (c = u > 0.5 ? d / (2 - f - h) : d / (f + h)),
            (l =
              f === s
                ? (o - a) / d + (o < a ? 6 : 0)
                : f === o
                ? (a - s) / d + 2
                : (s - o) / d + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(u * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  _g = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(qi).forEach(function (s) {
        var o = s.match(_s) || [];
        t.push.apply(t, o), n.push((r += o.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  Fd = function (e, t, n) {
    var r = '',
      s = (e + r).match(qi),
      o = t ? 'hsla(' : 'rgba(',
      a = 0,
      l,
      c,
      u,
      f;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (
          (h = gg(h, t, 1)) &&
          o +
            (t ? h[0] + ',' + h[1] + '%,' + h[2] + '%,' + h[3] : h.join(',')) +
            ')'
        );
      })),
      n && ((u = _g(e)), (l = n.c), l.join(r) !== u.c.join(r)))
    )
      for (c = e.replace(qi, '1').split(_s), f = c.length - 1; a < f; a++)
        r +=
          c[a] +
          (~l.indexOf(a)
            ? s.shift() || o + '0,0,0,0)'
            : (u.length ? u : s.length ? s : n).shift());
    if (!c)
      for (c = e.split(qi), f = c.length - 1; a < f; a++) r += c[a] + s[a];
    return r + c[f];
  },
  qi = (function () {
    var i =
        '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e;
    for (e in po) i += '|' + e + '\\b';
    return new RegExp(i + ')', 'gi');
  })(),
  IT = /hsl[a]?\(/,
  xg = function (e) {
    var t = e.join(' '),
      n;
    if (((qi.lastIndex = 0), qi.test(t)))
      return (
        (n = IT.test(t)),
        (e[1] = Fd(e[1], n)),
        (e[0] = Fd(e[0], n, _g(e[1]))),
        !0
      );
  },
  Uo,
  an = (function () {
    var i = Date.now,
      e = 500,
      t = 33,
      n = i(),
      r = n,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      c,
      u,
      f,
      h,
      d,
      g = function p(m) {
        var _ = i() - r,
          x = m === !0,
          v,
          y,
          b,
          T;
        if (
          (_ > e && (n += _ - t),
          (r += _),
          (b = r - n),
          (v = b - o),
          (v > 0 || x) &&
            ((T = ++f.frame),
            (h = b - f.time * 1e3),
            (f.time = b = b / 1e3),
            (o += v + (v >= s ? 4 : s - v)),
            (y = 1)),
          x || (l = c(p)),
          y)
        )
          for (d = 0; d < a.length; d++) a[d](b, h, T, m);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (m) {
          return h / (1e3 / (m || 60));
        },
        wake: function () {
          Km &&
            (!Kc &&
              Xm() &&
              ((xn = Kc = window),
              (qu = xn.document || {}),
              (fn.gsap = hn),
              (xn.gsapVersions || (xn.gsapVersions = [])).push(hn.version),
              Jm(Ha || xn.GreenSockGlobals || (!xn.gsap && xn) || {}),
              (u = xn.requestAnimationFrame)),
            l && f.sleep(),
            (c =
              u ||
              function (m) {
                return setTimeout(m, (o - f.time * 1e3 + 1) | 0);
              }),
            (Uo = 1),
            g(2));
        },
        sleep: function () {
          (u ? xn.cancelAnimationFrame : clearTimeout)(l), (Uo = 0), (c = No);
        },
        lagSmoothing: function (m, _) {
          (e = m || 1 / Je), (t = Math.min(_, e, 0));
        },
        fps: function (m) {
          (s = 1e3 / (m || 240)), (o = f.time * 1e3 + s);
        },
        add: function (m, _, x) {
          var v = _
            ? function (y, b, T, R) {
                m(y, b, T, R), f.remove(v);
              }
            : m;
          return f.remove(m), a[x ? 'unshift' : 'push'](v), Hs(), v;
        },
        remove: function (m, _) {
          ~(_ = a.indexOf(m)) && a.splice(_, 1) && d >= _ && d--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  Hs = function () {
    return !Uo && an.wake();
  },
  He = {},
  OT = /^[\d.\-M][\d.\-,\s]/,
  FT = /["']/g,
  NT = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(':'),
        r = n[0],
        s = 1,
        o = n.length,
        a,
        l,
        c;
      s < o;
      s++
    )
      (l = n[s]),
        (a = s !== o - 1 ? l.lastIndexOf(',') : l.length),
        (c = l.substr(0, a)),
        (t[r] = isNaN(c) ? c.replace(FT, '').trim() : +c),
        (r = l.substr(a + 1).trim());
    return t;
  },
  zT = function (e) {
    var t = e.indexOf('(') + 1,
      n = e.indexOf(')'),
      r = e.indexOf('(', t);
    return e.substring(t, ~r && r < n ? e.indexOf(')', n + 1) : n);
  },
  UT = function (e) {
    var t = (e + '').split('('),
      n = He[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf('{') ? [NT(t[1])] : zT(e).split(',').map(ig)
        )
      : He._CE && OT.test(e)
      ? He._CE('', e)
      : n;
  },
  vg = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  yg = function i(e, t) {
    for (var n = e._first, r; n; )
      n instanceof Zt
        ? i(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline
            ? i(n.timeline, t)
            : ((r = n._ease),
              (n._ease = n._yEase),
              (n._yEase = r),
              (n._yoyo = t))),
        (n = n._next);
  },
  Pr = function (e, t) {
    return (e && (ct(e) ? e : He[e] || UT(e))) || t;
  },
  kr = function (e, t, n, r) {
    n === void 0 &&
      (n = function (l) {
        return 1 - t(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: n, easeInOut: r },
      o;
    return (
      Qt(e, function (a) {
        (He[a] = fn[a] = s), (He[(o = a.toLowerCase())] = n);
        for (var l in s)
          He[
            o + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')
          ] = He[a + '.' + l] = s[l];
      }),
      s
    );
  },
  Mg = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  hc = function i(e, t, n) {
    var r = t >= 1 ? t : 1,
      s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / Yc) * (Math.asin(1 / r) || 0),
      a = function (u) {
        return u === 1 ? 1 : r * Math.pow(2, -10 * u) * fT((u - o) * s) + 1;
      },
      l =
        e === 'out'
          ? a
          : e === 'in'
          ? function (c) {
              return 1 - a(1 - c);
            }
          : Mg(a);
    return (
      (s = Yc / s),
      (l.config = function (c, u) {
        return i(e, c, u);
      }),
      l
    );
  },
  dc = function i(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      r =
        e === 'out'
          ? n
          : e === 'in'
          ? function (s) {
              return 1 - n(1 - s);
            }
          : Mg(n);
    return (
      (r.config = function (s) {
        return i(e, s);
      }),
      r
    );
  };
Qt('Linear,Quad,Cubic,Quart,Quint,Strong', function (i, e) {
  var t = e < 5 ? e + 1 : e;
  kr(
    i + ',Power' + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5
        ? Math.pow(n * 2, t) / 2
        : 1 - Math.pow((1 - n) * 2, t) / 2;
    }
  );
});
He.Linear.easeNone = He.none = He.Linear.easeIn;
kr('Elastic', hc('in'), hc('out'), hc());
(function (i, e) {
  var t = 1 / e,
    n = 2 * t,
    r = 2.5 * t,
    s = function (a) {
      return a < t
        ? i * a * a
        : a < n
        ? i * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < r
        ? i * (a -= 2.25 / e) * a + 0.9375
        : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  kr(
    'Bounce',
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
kr('Expo', function (i) {
  return i ? Math.pow(2, 10 * (i - 1)) : 0;
});
kr('Circ', function (i) {
  return -(qm(1 - i * i) - 1);
});
kr('Sine', function (i) {
  return i === 1 ? 1 : -uT(i * lT) + 1;
});
kr('Back', dc('in'), dc('out'), dc());
He.SteppedEase =
  He.steps =
  fn.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          r = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - Je;
        return function (a) {
          return (((r * Xo(0, o, a)) | 0) + s) * n;
        };
      },
    };
ks.ease = He['quad.out'];
Qt(
  'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
  function (i) {
    return ($u += i + ',' + i + 'Params,');
  }
);
var bg = function (e, t) {
    (this.id = cT++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : tg),
      (this.set = t ? t.getSetter : Qu);
  },
  Ws = (function () {
    function i(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Gs(this, +t.duration, 1, 1),
        (this.data = t.data),
        gt && ((this._ctx = gt), gt.data.push(this)),
        Uo || an.wake();
    }
    var e = i.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0),
            Gs(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, r) {
        if ((Hs(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (dl(this, n), !s._dp || s.parent || og(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) ||
              (this._ts < 0 && n > 0) ||
              (!this._tDur && !n)) &&
            Zn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === Je) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), ng(this, n, r)),
          this
        );
      }),
      (e.time = function (n, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + Dd(this)) %
                (this._dur + this._rDelay) || (n ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (e.totalProgress = function (n, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (n, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                Dd(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (n, r) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * s, r)
          : this._repeat
          ? Vs(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -Je ? 0 : this._rts;
        if (this._rts === n) return this;
        var r =
          this.parent && this._ts ? ja(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -Je ? 0 : this._rts),
          this.totalTime(Xo(-this._delay, this._tDur, r), !0),
          hl(this),
          xT(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Hs(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Je &&
                      (this._tTime -= Je)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && Zn(r, this, n - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          (Jt(n) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (n) {
        var r = this.parent || this._dp;
        return r
          ? n &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ja(r.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = pT);
        var r = Kt;
        return (
          (Kt = n),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(n),
            this.totalTime(-0.01, n.suppressEvents)),
          this.data !== 'nested' && n.kill !== !1 && this.kill(),
          (Kt = r),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var r = this, s = arguments.length ? n : r.rawTime(); r; )
          (s = r._start + s / (r._ts || 1)), (r = r._dp);
        return !this.parent && this.vars.immediateRender ? -1 : s;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), Id(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = n), Id(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, r) {
        return this.totalTime(_n(this, n), Jt(r));
      }),
      (e.restart = function (n, r) {
        return this.play().totalTime(n ? -this._delay : 0, Jt(r));
      }),
      (e.play = function (n, r) {
        return n != null && this.seek(n, r), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (n, r) {
        return (
          n != null && this.seek(n || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (n, r) {
        return n != null && this.seek(n, r), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() &&
              this.timeScale(-this._rts || (n ? -Je : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Je), this;
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          r = this._start,
          s;
        return !!(
          !n ||
          (this._ts &&
            this._initted &&
            n.isActive() &&
            (s = n.rawTime(!0)) >= r &&
            s < this.endTime(!0) - Je)
        );
      }),
      (e.eventCallback = function (n, r, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[n] = r),
                s && (o[n + 'Params'] = s),
                n === 'onUpdate' && (this._onUpdate = r))
              : delete o[n],
            this)
          : o[n];
      }),
      (e.then = function (n) {
        var r = this;
        return new Promise(function (s) {
          var o = ct(n) ? n : rg,
            a = function () {
              var c = r.then;
              (r.then = null),
                ct(o) && (o = o(r)) && (o.then || o === r) && (r.then = c),
                s(o),
                (r.then = c);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a);
        });
      }),
      (e.kill = function () {
        ho(this);
      }),
      i
    );
  })();
Cn(Ws.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Je,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Zt = (function (i) {
  Wm(e, i);
  function e(n, r) {
    var s;
    return (
      n === void 0 && (n = {}),
      (s = i.call(this, n) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!n.smoothChildTiming),
      (s.autoRemoveChildren = !!n.autoRemoveChildren),
      (s._sort = Jt(n.sortChildren)),
      st && Zn(n.parent || st, fi(s), r),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      n.scrollTrigger && ag(fi(s), n.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (r, s, o) {
      return wo(0, arguments, this), this;
    }),
    (t.from = function (r, s, o) {
      return wo(1, arguments, this), this;
    }),
    (t.fromTo = function (r, s, o, a) {
      return wo(2, arguments, this), this;
    }),
    (t.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        So(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new vt(r, s, _n(this, o), 1),
        this
      );
    }),
    (t.call = function (r, s, o) {
      return Zn(this, vt.delayedCall(0, r, s), o);
    }),
    (t.staggerTo = function (r, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new vt(r, o, _n(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (r, s, o, a, l, c, u) {
      return (
        (o.runBackwards = 1),
        (So(o).immediateRender = Jt(o.immediateRender)),
        this.staggerTo(r, s, o, a, l, c, u)
      );
    }),
    (t.staggerFromTo = function (r, s, o, a, l, c, u, f) {
      return (
        (a.startAt = o),
        (So(a).immediateRender = Jt(a.immediateRender)),
        this.staggerTo(r, s, a, l, c, u, f)
      );
    }),
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = r <= 0 ? 0 : Rt(r),
        f = this._zTime < 0 != r < 0 && (this._initted || !c),
        h,
        d,
        g,
        p,
        m,
        _,
        x,
        v,
        y,
        b,
        T,
        R;
      if (
        (this !== st && u > l && r >= 0 && (u = l), u !== this._tTime || o || f)
      ) {
        if (
          (a !== this._time &&
            c &&
            ((u += this._time - a), (r += this._time - a)),
          (h = u),
          (y = this._start),
          (v = this._ts),
          (_ = !v),
          f && (c || (a = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((T = this._yoyo),
            (m = c + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(m * 100 + r, s, o);
          if (
            ((h = Rt(u % m)),
            u === l
              ? ((p = this._repeat), (h = c))
              : ((p = ~~(u / m)),
                p && p === u / m && ((h = c), p--),
                h > c && (h = c)),
            (b = Vs(this._tTime, m)),
            !a && this._tTime && b !== p && (b = p),
            T && p & 1 && ((h = c - h), (R = 1)),
            p !== b && !this._lock)
          ) {
            var M = T && b & 1,
              w = M === (T && p & 1);
            if (
              (p < b && (M = !M),
              (a = M ? 0 : c),
              (this._lock = 1),
              (this.render(a || (R ? 0 : Rt(p * m)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && wn(this, 'onRepeat'),
              this.vars.repeatRefresh && !R && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              w &&
                ((this._lock = 2),
                (a = M ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !R && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            yg(this, R);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((x = bT(this, Rt(a), Rt(h))), x && (u -= h - (h = x._start))),
          (this._tTime = u),
          (this._time = h),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && h && !s && (wn(this, 'onStart'), this._tTime !== u))
        )
          return this;
        if (h >= a && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((g = d._next), (d._act || h >= d._start) && d._ts && x !== d)
            ) {
              if (d.parent !== this) return this.render(r, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (h - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (h - d._start) * d._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !_))
              ) {
                (x = 0), g && (u += this._zTime = -Je);
                break;
              }
            }
            d = g;
          }
        else {
          d = this._last;
          for (var D = r < 0 ? r : h; d; ) {
            if (((g = d._prev), (d._act || D <= d._end) && d._ts && x !== d)) {
              if (d.parent !== this) return this.render(r, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (D - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (D - d._start) * d._ts,
                  s,
                  o || (Kt && (d._initted || d._startAt))
                ),
                h !== this._time || (!this._ts && !_))
              ) {
                (x = 0), g && (u += this._zTime = D ? -Je : Je);
                break;
              }
            }
            d = g;
          }
        }
        if (
          x &&
          !s &&
          (this.pause(),
          (x.render(h >= a ? 0 : -Je)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = y), hl(this), this.render(r, s, o);
        this._onUpdate && !s && wn(this, 'onUpdate', !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (y === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                Zi(this, 1),
              !s &&
                !(r < 0 && !a) &&
                (u || a || !l) &&
                (wn(
                  this,
                  u === l && r >= 0 ? 'onComplete' : 'onReverseComplete',
                  !0
                ),
                this._prom &&
                  !(u < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (r, s) {
      var o = this;
      if ((Mi(s) || (s = _n(this, s, r)), !(r instanceof Ws))) {
        if (Vt(r))
          return (
            r.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Ct(r)) return this.addLabel(r, s);
        if (ct(r)) r = vt.delayedCall(0, r);
        else return this;
      }
      return this !== r ? Zn(this, r, s) : this;
    }),
    (t.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -bn);
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof vt
            ? s && l.push(c)
            : (o && l.push(c), r && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next);
      return l;
    }),
    (t.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o];
    }),
    (t.remove = function (r) {
      return Ct(r)
        ? this.removeLabel(r)
        : ct(r)
        ? this.killTweensOf(r)
        : (fl(this, r),
          r === this._recent && (this._recent = this._last),
          Cr(this));
    }),
    (t.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Rt(
              an.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          i.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (r, s) {
      return (this.labels[r] = _n(this, s)), this;
    }),
    (t.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (t.addPause = function (r, s, o) {
      var a = vt.delayedCall(0, s || No, o);
      return (
        (a.data = 'isPause'), (this._hasPause = 1), Zn(this, a, _n(this, r))
      );
    }),
    (t.removePause = function (r) {
      var s = this._first;
      for (r = _n(this, r); s; )
        s._start === r && s.data === 'isPause' && Zi(s), (s = s._next);
    }),
    (t.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; )
        zi !== a[l] && a[l].kill(r, s);
      return this;
    }),
    (t.getTweensOf = function (r, s) {
      for (var o = [], a = Sn(r), l = this._first, c = Mi(s), u; l; )
        l instanceof vt
          ? mT(l._targets, a) &&
            (c
              ? (!zi || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
          (l = l._next);
      return o;
    }),
    (t.tweenTo = function (r, s) {
      s = s || {};
      var o = this,
        a = _n(o, r),
        l = s,
        c = l.startAt,
        u = l.onStart,
        f = l.onStartParams,
        h = l.immediateRender,
        d,
        g = vt.to(
          o,
          Cn(
            {
              ease: s.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: 'auto',
              duration:
                s.duration ||
                Math.abs(
                  (a - (c && 'time' in c ? c.time : o._time)) / o.timeScale()
                ) ||
                Je,
              onStart: function () {
                if ((o.pause(), !d)) {
                  var m =
                    s.duration ||
                    Math.abs(
                      (a - (c && 'time' in c ? c.time : o._time)) /
                        o.timeScale()
                    );
                  g._dur !== m && Gs(g, m, 0, 1).render(g._time, !0, !0),
                    (d = 1);
                }
                u && u.apply(g, f || []);
              },
            },
            s
          )
        );
      return h ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, Cn({ startAt: { time: _n(this, r) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Od(this, _n(this, r));
    }),
    (t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Od(this, _n(this, r), 1);
    }),
    (t.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + Je);
    }),
    (t.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; )
        a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
      if (s) for (c in l) l[c] >= o && (l[c] += r);
      return Cr(this);
    }),
    (t.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return i.prototype.invalidate.call(this, r);
    }),
    (t.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Cr(this)
      );
    }),
    (t.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        l = bn,
        c,
        u,
        f;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (f = o.parent; a; )
          (c = a._prev),
            a._dirty && a.totalDuration(),
            (u = a._start),
            u > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (Zn(o, a, u - a._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              a._ts &&
              ((s -= u),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
              o.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c);
        Gs(o, o === st && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((st._ts && (ng(st, ja(r, st)), (eg = an.frame)), an.frame >= Rd)) {
        Rd += ln.autoSleep || 120;
        var s = st._first;
        if ((!s || !s._ts) && ln.autoSleep && an._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || an.sleep();
        }
      }
    }),
    e
  );
})(Ws);
Cn(Zt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var BT = function (e, t, n, r, s, o, a) {
    var l = new en(this._pt, e, t, 0, 1, Cg, null, s),
      c = 0,
      u = 0,
      f,
      h,
      d,
      g,
      p,
      m,
      _,
      x;
    for (
      l.b = n,
        l.e = r,
        n += '',
        r += '',
        (_ = ~r.indexOf('random(')) && (r = zo(r)),
        o && ((x = [n, r]), o(x, e, t), (n = x[0]), (r = x[1])),
        h = n.match(cc) || [];
      (f = cc.exec(r));

    )
      (g = f[0]),
        (p = r.substring(c, f.index)),
        d ? (d = (d + 1) % 5) : p.substr(-5) === 'rgba(' && (d = 1),
        g !== h[u++] &&
          ((m = parseFloat(h[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || u === 1 ? p : ',',
            s: m,
            c: g.charAt(1) === '=' ? Ts(m, g) - m : parseFloat(g) - m,
            m: d && d < 4 ? Math.round : 0,
          }),
          (c = cc.lastIndex));
    return (
      (l.c = c < r.length ? r.substring(c, r.length) : ''),
      (l.fp = a),
      (Ym.test(r) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Zu = function (e, t, n, r, s, o, a, l, c, u) {
    ct(r) && (r = r(s || 0, e, o));
    var f = e[t],
      h =
        n !== 'get'
          ? n
          : ct(f)
          ? c
            ? e[
                t.indexOf('set') || !ct(e['get' + t.substr(3)])
                  ? t
                  : 'get' + t.substr(3)
              ](c)
            : e[t]()
          : f,
      d = ct(f) ? (c ? WT : Eg) : Ju,
      g;
    if (
      (Ct(r) &&
        (~r.indexOf('random(') && (r = zo(r)),
        r.charAt(1) === '=' &&
          ((g = Ts(h, r) + (Bt(h) || 0)), (g || g === 0) && (r = g))),
      !u || h !== r || ru)
    )
      return !isNaN(h * r) && r !== ''
        ? ((g = new en(
            this._pt,
            e,
            t,
            +h || 0,
            r - (h || 0),
            typeof f == 'boolean' ? XT : Ag,
            0,
            d
          )),
          c && (g.fp = c),
          a && g.modifier(a, this, e),
          (this._pt = g))
        : (!f && !(t in e) && Xu(t, r),
          BT.call(this, e, t, h, r, d, l || ln.stringFilter, c));
  },
  kT = function (e, t, n, r, s) {
    if (
      (ct(e) && (e = To(e, s, t, n, r)),
      !ti(e) || (e.style && e.nodeType) || Vt(e) || jm(e))
    )
      return Ct(e) ? To(e, s, t, n, r) : e;
    var o = {},
      a;
    for (a in e) o[a] = To(e[a], s, t, n, r);
    return o;
  },
  Sg = function (e, t, n, r, s, o) {
    var a, l, c, u;
    if (
      sn[e] &&
      (a = new sn[e]()).init(
        s,
        a.rawVars ? t[e] : kT(t[e], r, s, o, n),
        n,
        r,
        o
      ) !== !1 &&
      ((n._pt = l = new en(n._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      n !== xs)
    )
      for (c = n._ptLookup[n._targets.indexOf(s)], u = a._props.length; u--; )
        c[a._props[u]] = l;
    return a;
  },
  zi,
  ru,
  Ku = function i(e, t, n) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      c = r.onUpdate,
      u = r.onUpdateParams,
      f = r.callbackScope,
      h = r.runBackwards,
      d = r.yoyoEase,
      g = r.keyframes,
      p = r.autoRevert,
      m = e._dur,
      _ = e._startAt,
      x = e._targets,
      v = e.parent,
      y = v && v.data === 'nested' ? v.vars.targets : x,
      b = e._overwrite === 'auto' && !Hu,
      T = e.timeline,
      R,
      M,
      w,
      D,
      q,
      Q,
      k,
      I,
      $,
      Z,
      Y,
      V,
      z;
    if (
      (T && (!g || !s) && (s = 'none'),
      (e._ease = Pr(s, ks.ease)),
      (e._yEase = d ? vg(Pr(d === !0 ? s : d, ks.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !T && !!r.runBackwards),
      !T || (g && !r.stagger))
    ) {
      if (
        ((I = x[0] ? Ar(x[0]).harness : 0),
        (V = I && r[I.prop]),
        (R = Xa(r, ju)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && h && a && !p ? _.render(-1, !0) : _.revert(h && m ? La : dT),
          (_._lazy = 0)),
        o)
      ) {
        if (
          (Zi(
            (e._startAt = vt.set(
              x,
              Cn(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: Jt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: c,
                  onUpdateParams: u,
                  callbackScope: f,
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          t < 0 && (Kt || (!a && !p)) && e._startAt.revert(La),
          a && m && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (h && m && !_) {
        if (
          (t && (a = !1),
          (w = Cn(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: a && Jt(l),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            R
          )),
          V && (w[I.prop] = V),
          Zi((e._startAt = vt.set(x, w))),
          (e._startAt._dp = 0),
          t < 0 && (Kt ? e._startAt.revert(La) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          i(e._startAt, Je, Je);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (m && Jt(l)) || (l && !m), M = 0;
        M < x.length;
        M++
      ) {
        if (
          ((q = x[M]),
          (k = q._gsap || Yu(x)[M]._gsap),
          (e._ptLookup[M] = Z = {}),
          Jc[k.id] && Wi.length && qa(),
          (Y = y === x ? M : y.indexOf(q)),
          I &&
            ($ = new I()).init(q, V || R, e, Y, y) !== !1 &&
            ((e._pt = D =
              new en(e._pt, q, $.name, 0, 1, $.render, $, 0, $.priority)),
            $._props.forEach(function (H) {
              Z[H] = D;
            }),
            $.priority && (Q = 1)),
          !I || V)
        )
          for (w in R)
            sn[w] && ($ = Sg(w, R, e, Y, q, y))
              ? $.priority && (Q = 1)
              : (Z[w] = D =
                  Zu.call(e, q, w, 'get', R[w], Y, y, 0, r.stringFilter));
        e._op && e._op[M] && e.kill(q, e._op[M]),
          b &&
            e._pt &&
            ((zi = e),
            st.killTweensOf(q, Z, e.globalTime(t)),
            (z = !e.parent),
            (zi = 0)),
          e._pt && l && (Jc[k.id] = 1);
      }
      Q && Pg(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !z),
      g && t <= 0 && T.render(bn, !0, !0);
  },
  VT = function (e, t, n, r, s, o, a) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      u,
      f,
      h;
    if (!l)
      for (
        l = e._ptCache[t] = [], f = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((c = f[h][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c) return (ru = 1), (e.vars[t] = '+=0'), Ku(e, a), (ru = 0), 1;
        l.push(c);
      }
    for (h = l.length; h--; )
      (u = l[h]),
        (c = u._pt || u),
        (c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + o * c.c),
        (c.c = n - c.s),
        u.e && (u.e = ut(n) + Bt(u.e)),
        u.b && (u.b = c.s + Bt(u.b));
  },
  GT = function (e, t) {
    var n = e[0] ? Ar(e[0]).harness : 0,
      r = n && n.aliases,
      s,
      o,
      a,
      l;
    if (!r) return t;
    s = Nr({}, t);
    for (o in r)
      if (o in s) for (l = r[o].split(','), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  HT = function (e, t, n, r) {
    var s = t.ease || r || 'power1.inOut',
      o,
      a;
    if (Vt(t))
      (a = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return a.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = n[o] || (n[o] = [])),
          o === 'ease' || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  To = function (e, t, n, r, s) {
    return ct(e)
      ? e.call(t, n, r, s)
      : Ct(e) && ~e.indexOf('random(')
      ? zo(e)
      : e;
  },
  wg = $u + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  Tg = {};
Qt(wg + ',id,stagger,delay,duration,paused,scrollTrigger', function (i) {
  return (Tg[i] = 1);
});
var vt = (function (i) {
  Wm(e, i);
  function e(n, r, s, o) {
    var a;
    typeof r == 'number' && ((s.duration = r), (r = s), (s = null)),
      (a = i.call(this, o ? r : So(r)) || this);
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      f = l.immediateRender,
      h = l.stagger,
      d = l.overwrite,
      g = l.keyframes,
      p = l.defaults,
      m = l.scrollTrigger,
      _ = l.yoyoEase,
      x = r.parent || st,
      v = (Vt(n) || jm(n) ? Mi(n[0]) : 'length' in r) ? [n] : Sn(n),
      y,
      b,
      T,
      R,
      M,
      w,
      D,
      q;
    if (
      ((a._targets = v.length
        ? Yu(v)
        : Wa(
            'GSAP target ' + n + ' not found. https://greensock.com',
            !ln.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      g || h || Sa(c) || Sa(u))
    ) {
      if (
        ((r = a.vars),
        (y = a.timeline =
          new Zt({
            data: 'nested',
            defaults: p || {},
            targets: x && x.data === 'nested' ? x.vars.targets : v,
          })),
        y.kill(),
        (y.parent = y._dp = fi(a)),
        (y._start = 0),
        h || Sa(c) || Sa(u))
      ) {
        if (((R = v.length), (D = h && fg(h)), ti(h)))
          for (M in h) ~wg.indexOf(M) && (q || (q = {}), (q[M] = h[M]));
        for (b = 0; b < R; b++)
          (T = Xa(r, Tg)),
            (T.stagger = 0),
            _ && (T.yoyoEase = _),
            q && Nr(T, q),
            (w = v[b]),
            (T.duration = +To(c, fi(a), b, w, v)),
            (T.delay = (+To(u, fi(a), b, w, v) || 0) - a._delay),
            !h &&
              R === 1 &&
              T.delay &&
              ((a._delay = u = T.delay), (a._start += u), (T.delay = 0)),
            y.to(w, T, D ? D(b, w, v) : 0),
            (y._ease = He.none);
        y.duration() ? (c = u = 0) : (a.timeline = 0);
      } else if (g) {
        So(Cn(y.vars.defaults, { ease: 'none' })),
          (y._ease = Pr(g.ease || r.ease || 'none'));
        var Q = 0,
          k,
          I,
          $;
        if (Vt(g))
          g.forEach(function (Z) {
            return y.to(v, Z, '>');
          }),
            y.duration();
        else {
          T = {};
          for (M in g)
            M === 'ease' || M === 'easeEach' || HT(M, g[M], T, g.easeEach);
          for (M in T)
            for (
              k = T[M].sort(function (Z, Y) {
                return Z.t - Y.t;
              }),
                Q = 0,
                b = 0;
              b < k.length;
              b++
            )
              (I = k[b]),
                ($ = {
                  ease: I.e,
                  duration: ((I.t - (b ? k[b - 1].t : 0)) / 100) * c,
                }),
                ($[M] = I.v),
                y.to(v, $, Q),
                (Q += $.duration);
          y.duration() < c && y.to({}, { duration: c - y.duration() });
        }
      }
      c || a.duration((c = y.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !Hu && ((zi = fi(a)), st.killTweensOf(v), (zi = 0)),
      Zn(x, fi(a), s),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (f ||
        (!c &&
          !g &&
          a._start === Rt(x._time) &&
          Jt(f) &&
          vT(fi(a)) &&
          x.data !== 'nested')) &&
        ((a._tTime = -Je), a.render(Math.max(0, -u) || 0)),
      m && ag(fi(a), m),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        u = r < 0,
        f = r > l - Je && !u ? l : r < Je ? 0 : r,
        h,
        d,
        g,
        p,
        m,
        _,
        x,
        v,
        y;
      if (!c) MT(this, r, s, o);
      else if (
        f !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((h = f), (v = this.timeline), this._repeat)) {
          if (((p = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(p * 100 + r, s, o);
          if (
            ((h = Rt(f % p)),
            f === l
              ? ((g = this._repeat), (h = c))
              : ((g = ~~(f / p)),
                g && g === f / p && ((h = c), g--),
                h > c && (h = c)),
            (_ = this._yoyo && g & 1),
            _ && ((y = this._yEase), (h = c - h)),
            (m = Vs(this._tTime, p)),
            h === a && !o && this._initted)
          )
            return (this._tTime = f), this;
          g !== m &&
            (v && this._yEase && yg(v, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(Rt(p * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (lg(this, u ? r : h, o, s, f)) return (this._tTime = 0), this;
          if (a !== this._time) return this;
          if (c !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = f),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = x = (y || this._ease)(h / c)),
          this._from && (this.ratio = x = 1 - x),
          h && !a && !s && (wn(this, 'onStart'), this._tTime !== f))
        )
          return this;
        for (d = this._pt; d; ) d.r(x, d.d), (d = d._next);
        (v &&
          v.render(
            r < 0 ? r : !h && _ ? -Je : v._dur * v._ease(h / this._dur),
            s,
            o
          )) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (u && Qc(this, r, s, o), wn(this, 'onUpdate')),
          this._repeat &&
            g !== m &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            wn(this, 'onRepeat'),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (u && !this._onUpdate && Qc(this, r, !0, !0),
            (r || !c) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              Zi(this, 1),
            !s &&
              !(u && !a) &&
              (f || a || _) &&
              (wn(this, f === l ? 'onComplete' : 'onReverseComplete', !0),
              this._prom && !(f < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        i.prototype.invalidate.call(this, r)
      );
    }),
    (t.resetTo = function (r, s, o, a) {
      Uo || an.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Ku(this, l),
        (c = this._ease(l / this._dur)),
        VT(this, r, s, o, a, c, l)
          ? this.resetTo(r, s, o, a)
          : (dl(this, 0),
            this.parent ||
              sg(
                this._dp,
                this,
                '_first',
                '_last',
                this._dp._sort ? '_start' : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (r, s) {
      if ((s === void 0 && (s = 'all'), !r && (!s || s === 'all')))
        return (this._lazy = this._pt = 0), this.parent ? ho(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, zi && zi.vars.overwrite !== !0)
            ._first || ho(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Gs(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? Sn(r) : a,
        c = this._ptLookup,
        u = this._pt,
        f,
        h,
        d,
        g,
        p,
        m,
        _;
      if ((!s || s === 'all') && _T(a, l))
        return s === 'all' && (this._pt = 0), ho(this);
      for (
        f = this._op = this._op || [],
          s !== 'all' &&
            (Ct(s) &&
              ((p = {}),
              Qt(s, function (x) {
                return (p[x] = 1);
              }),
              (s = p)),
            (s = GT(a, s))),
          _ = a.length;
        _--;

      )
        if (~l.indexOf(a[_])) {
          (h = c[_]),
            s === 'all'
              ? ((f[_] = s), (g = h), (d = {}))
              : ((d = f[_] = f[_] || {}), (g = s));
          for (p in g)
            (m = h && h[p]),
              m &&
                ((!('kill' in m.d) || m.d.kill(p) === !0) && fl(this, m, '_pt'),
                delete h[p]),
              d !== 'all' && (d[p] = 1);
        }
      return this._initted && !this._pt && u && ho(this), this;
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2]);
    }),
    (e.from = function (r, s) {
      return wo(1, arguments);
    }),
    (e.delayedCall = function (r, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (r, s, o) {
      return wo(2, arguments);
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }),
    (e.killTweensOf = function (r, s, o) {
      return st.killTweensOf(r, s, o);
    }),
    e
  );
})(Ws);
Cn(vt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Qt('staggerTo,staggerFrom,staggerFromTo', function (i) {
  vt[i] = function () {
    var e = new Zt(),
      t = tu.call(arguments, 0);
    return t.splice(i === 'staggerFromTo' ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var Ju = function (e, t, n) {
    return (e[t] = n);
  },
  Eg = function (e, t, n) {
    return e[t](n);
  },
  WT = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  qT = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Qu = function (e, t) {
    return ct(e[t]) ? Eg : Wu(e[t]) && e.setAttribute ? qT : Ju;
  },
  Ag = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  XT = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Cg = function (e, t) {
    var n = t._pt,
      r = '';
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n; )
        (r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  ef = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  jT = function (e, t, n, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, t, n), (s = o);
  },
  $T = function (e) {
    for (var t = this._pt, n, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? fl(this, t, '_pt')
          : t.dep || (n = 1),
        (t = r);
    return !n;
  },
  YT = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  Pg = function (e) {
    for (var t = e._pt, n, r, s, o; t; ) {
      for (n = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = n);
    }
    e._pt = s;
  },
  en = (function () {
    function i(t, n, r, s, o, a, l, c, u) {
      (this.t = n),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = a || Ag),
        (this.d = l || this),
        (this.set = c || Ju),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = i.prototype;
    return (
      (e.modifier = function (n, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = YT),
          (this.m = n),
          (this.mt = s),
          (this.tween = r);
      }),
      i
    );
  })();
Qt(
  $u +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (i) {
    return (ju[i] = 1);
  }
);
fn.TweenMax = fn.TweenLite = vt;
fn.TimelineLite = fn.TimelineMax = Zt;
st = new Zt({
  sortChildren: !1,
  defaults: ks,
  autoRemoveChildren: !0,
  id: 'root',
  smoothChildTiming: !0,
});
ln.stringFilter = xg;
var qs = [],
  Ia = {},
  ZT = [],
  Nd = 0,
  pc = function (e) {
    return (Ia[e] || ZT).map(function (t) {
      return t();
    });
  },
  su = function () {
    var e = Date.now(),
      t = [];
    e - Nd > 2 &&
      (pc('matchMediaInit'),
      qs.forEach(function (n) {
        var r = n.queries,
          s = n.conditions,
          o,
          a,
          l,
          c;
        for (a in r)
          (o = xn.matchMedia(r[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (c = 1));
        c && (n.revert(), l && t.push(n));
      }),
      pc('matchMediaRevert'),
      t.forEach(function (n) {
        return n.onMatch(n);
      }),
      (Nd = e),
      pc('matchMedia'));
  },
  Rg = (function () {
    function i(t, n) {
      (this.selector = n && nu(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = i.prototype;
    return (
      (e.add = function (n, r, s) {
        ct(n) && ((s = r), (r = n), (n = ct));
        var o = this,
          a = function () {
            var c = gt,
              u = o.selector,
              f;
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = nu(s)),
              (gt = o),
              (f = r.apply(o, arguments)),
              ct(f) && o._r.push(f),
              (gt = c),
              (o.selector = u),
              (o.isReverted = !1),
              f
            );
          };
        return (o.last = a), n === ct ? a(o) : n ? (o[n] = a) : a;
      }),
      (e.ignore = function (n) {
        var r = gt;
        (gt = null), n(this), (gt = r);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof i
              ? n.push.apply(n, r.getTweens())
              : r instanceof vt &&
                  !(r.parent && r.parent.data === 'nested') &&
                  n.push(r);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, r) {
        var s = this;
        if (n) {
          var o = this.getTweens();
          this.data.forEach(function (l) {
            l.data === 'isFlip' &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (c) {
                return o.splice(o.indexOf(c), 1);
              }));
          }),
            o
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, c) {
                return c.g - l.g || -1;
              })
              .forEach(function (l) {
                return l.t.revert(n);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof Ws) && l.revert && l.revert(n);
            }),
            this._r.forEach(function (l) {
              return l(n, s);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), r)) {
          var a = qs.indexOf(this);
          ~a && qs.splice(a, 1);
        }
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      i
    );
  })(),
  KT = (function () {
    function i(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = i.prototype;
    return (
      (e.add = function (n, r, s) {
        ti(n) || (n = { matches: n });
        var o = new Rg(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          u;
        this.contexts.push(o), (r = o.add('onMatch', r)), (o.queries = n);
        for (c in n)
          c === 'all'
            ? (u = 1)
            : ((l = xn.matchMedia(n[c])),
              l &&
                (qs.indexOf(o) < 0 && qs.push(o),
                (a[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(su)
                  : l.addEventListener('change', su)));
        return u && r(o), this;
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (r) {
          return r.kill(n, !0);
        });
      }),
      i
    );
  })(),
  $a = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (r) {
        return DT(r);
      });
    },
    timeline: function (e) {
      return new Zt(e);
    },
    getTweensOf: function (e, t) {
      return st.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      Ct(e) && (e = Sn(e)[0]);
      var s = Ar(e || {}).get,
        o = n ? rg : ig;
      return (
        n === 'native' && (n = ''),
        e &&
          (t
            ? o(((sn[t] && sn[t].get) || s)(e, t, n, r))
            : function (a, l, c) {
                return o(((sn[a] && sn[a].get) || s)(e, a, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Sn(e)), e.length > 1)) {
        var r = e.map(function (u) {
            return hn.quickSetter(u, t, n);
          }),
          s = r.length;
        return function (u) {
          for (var f = s; f--; ) r[f](u);
        };
      }
      e = e[0] || {};
      var o = sn[t],
        a = Ar(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        c = o
          ? function (u) {
              var f = new o();
              (xs._pt = 0),
                f.init(e, n ? u + n : u, xs, 0, [e]),
                f.render(1, f),
                xs._pt && ef(1, xs);
            }
          : a.set(e, l);
      return o
        ? c
        : function (u) {
            return c(e, l, n ? u + n : u, a, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        s = hn.to(
          e,
          Nr(((r = {}), (r[t] = '+=0.1'), (r.paused = !0), r), n || {})
        ),
        o = function (l, c, u) {
          return s.resetTo(t, l, c, u);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return st.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Pr(e.ease, ks.ease)), Ld(ks, e || {});
    },
    config: function (e) {
      return Ld(ln, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || '').split(',').forEach(function (a) {
        return (
          a && !sn[a] && !fn[a] && Wa(t + ' effect requires ' + a + ' plugin.')
        );
      }),
        (uc[t] = function (a, l, c) {
          return n(Sn(a), Cn(l || {}, s), c);
        }),
        o &&
          (Zt.prototype[t] = function (a, l, c) {
            return this.add(uc[t](a, ti(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      He[e] = Pr(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Pr(e, t) : He;
    },
    getById: function (e) {
      return st.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Zt(e),
        r,
        s;
      for (
        n.smoothChildTiming = Jt(e.smoothChildTiming),
          st.remove(n),
          n._dp = 0,
          n._time = n._tTime = st._time,
          r = st._first;
        r;

      )
        (s = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof vt &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Zn(n, r, r._start - r._delay),
          (r = s);
      return Zn(st, n, 0), n;
    },
    context: function (e, t) {
      return e ? new Rg(e, t) : gt;
    },
    matchMedia: function (e) {
      return new KT(e);
    },
    matchMediaRefresh: function () {
      return (
        qs.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || su()
      );
    },
    addEventListener: function (e, t) {
      var n = Ia[e] || (Ia[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Ia[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: PT,
      wrapYoyo: RT,
      distribute: fg,
      random: dg,
      snap: hg,
      normalize: CT,
      getUnit: Bt,
      clamp: wT,
      splitColor: gg,
      toArray: Sn,
      selector: nu,
      mapRange: mg,
      pipe: ET,
      unitize: AT,
      interpolate: LT,
      shuffle: ug,
    },
    install: Jm,
    effects: uc,
    ticker: an,
    updateRoot: Zt.updateRoot,
    plugins: sn,
    globalTimeline: st,
    core: {
      PropTween: en,
      globals: Qm,
      Tween: vt,
      Timeline: Zt,
      Animation: Ws,
      getCache: Ar,
      _removeLinkedListItem: fl,
      reverting: function () {
        return Kt;
      },
      context: function (e) {
        return e && gt && (gt.data.push(e), (e._ctx = gt)), gt;
      },
      suppressOverwrites: function (e) {
        return (Hu = e);
      },
    },
  };
Qt('to,from,fromTo,delayedCall,set,killTweensOf', function (i) {
  return ($a[i] = vt[i]);
});
an.add(Zt.updateRoot);
xs = $a.to({}, { duration: 0 });
var JT = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  QT = function (e, t) {
    var n = e._targets,
      r,
      s,
      o;
    for (r in t)
      for (s = n.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = JT(o, r)),
            o && o.modifier && o.modifier(t[r], e, n[s], r));
  },
  mc = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (a) {
          var l, c;
          if (
            (Ct(s) &&
              ((l = {}),
              Qt(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          QT(a, s);
        };
      },
    };
  },
  hn =
    $a.registerPlugin(
      {
        name: 'attr',
        init: function (e, t, n, r, s) {
          var o, a, l;
          this.tween = n;
          for (o in t)
            (l = e.getAttribute(o) || ''),
              (a = this.add(
                e,
                'setAttribute',
                (l || 0) + '',
                t[o],
                r,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            Kt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: 'endArray',
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      mc('roundProps', iu),
      mc('modifiers'),
      mc('snap', hg)
    ) || $a;
vt.version = Zt.version = hn.version = '3.11.3';
Km = 1;
Xm() && Hs();
He.Power0;
He.Power1;
He.Power2;
He.Power3;
He.Power4;
He.Linear;
He.Quad;
He.Cubic;
He.Quart;
He.Quint;
He.Strong;
He.Elastic;
He.Back;
He.SteppedEase;
He.Bounce;
He.Sine;
He.Expo;
He.Circ;
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var zd,
  Ui,
  Es,
  tf,
  br,
  Ud,
  nf,
  eE = function () {
    return typeof window < 'u';
  },
  bi = {},
  dr = 180 / Math.PI,
  As = Math.PI / 180,
  hs = Math.atan2,
  Bd = 1e8,
  rf = /([A-Z])/g,
  tE = /(left|right|width|margin|padding|x)/i,
  nE = /[\s,\(]\S/,
  mi = {
    autoAlpha: 'opacity,visibility',
    scale: 'scaleX,scaleY',
    alpha: 'opacity',
  },
  ou = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  iE = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  rE = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  sE = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Lg = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Dg = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  oE = function (e, t, n) {
    return (e.style[t] = n);
  },
  aE = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  lE = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  cE = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  uE = function (e, t, n, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = n), o.renderTransform(s, o);
  },
  fE = function (e, t, n, r, s) {
    var o = e._gsap;
    (o[t] = n), o.renderTransform(s, o);
  },
  ot = 'transform',
  Bn = ot + 'Origin',
  hE = function (e, t) {
    var n = this,
      r = this.target,
      s = r.style;
    if (e in bi) {
      if (
        ((this.tfm = this.tfm || {}),
        e !== 'transform' &&
          ((e = mi[e] || e),
          ~e.indexOf(',')
            ? e.split(',').forEach(function (o) {
                return (n.tfm[o] = hi(r, o));
              })
            : (this.tfm[e] = r._gsap.x ? r._gsap[e] : hi(r, e))),
        this.props.indexOf(ot) >= 0)
      )
        return;
      r._gsap.svg &&
        ((this.svgo = r.getAttribute('data-svg-origin')),
        this.props.push(Bn, t, '')),
        (e = ot);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Ig = function (e) {
    e.translate &&
      (e.removeProperty('translate'),
      e.removeProperty('scale'),
      e.removeProperty('rotate'));
  },
  dE = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (n[e[s]] = e[s + 2])
        : n.removeProperty(e[s].replace(rf, '-$1').toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute('data-svg-origin', this.svgo || '')),
        (s = nf()),
        s && !s.isStart && !n[ot] && (Ig(n), (r.uncache = 1));
    }
  },
  Og = function (e, t) {
    var n = { target: e, props: [], revert: dE, save: hE };
    return (
      t &&
        t.split(',').forEach(function (r) {
          return n.save(r);
        }),
      n
    );
  },
  Fg,
  au = function (e, t) {
    var n = Ui.createElementNS
      ? Ui.createElementNS(
          (t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          e
        )
      : Ui.createElement(e);
    return n.style ? n : Ui.createElement(e);
  },
  ei = function i(e, t, n) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(rf, '-$1').toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!n && i(e, Xs(t) || t, 1)) ||
      ''
    );
  },
  kd = 'O,Moz,ms,Ms,Webkit'.split(','),
  Xs = function (e, t, n) {
    var r = t || br,
      s = r.style,
      o = 5;
    if (e in s && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(kd[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? kd[o] : '') + e;
  },
  lu = function () {
    eE() &&
      window.document &&
      ((zd = window),
      (Ui = zd.document),
      (Es = Ui.documentElement),
      (br = au('div') || { style: {} }),
      au('div'),
      (ot = Xs(ot)),
      (Bn = ot + 'Origin'),
      (br.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (Fg = !!Xs('perspective')),
      (nf = hn.core.reverting),
      (tf = 1));
  },
  gc = function i(e) {
    var t = au(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg'
      ),
      n = this.parentNode,
      r = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (Es.appendChild(t),
      t.appendChild(this),
      (this.style.display = 'block'),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = i);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      n && (r ? n.insertBefore(this, r) : n.appendChild(this)),
      Es.removeChild(t),
      (this.style.cssText = s),
      o
    );
  },
  Vd = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Ng = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = gc.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === gc || (t = gc.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Vd(e, ['x', 'cx', 'x1']) || 0,
            y: +Vd(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  zg = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ng(e));
  },
  Bo = function (e, t) {
    if (t) {
      var n = e.style;
      t in bi && t !== Bn && (t = ot),
        n.removeProperty
          ? ((t.substr(0, 2) === 'ms' || t.substr(0, 6) === 'webkit') &&
              (t = '-' + t),
            n.removeProperty(t.replace(rf, '-$1').toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  Bi = function (e, t, n, r, s, o) {
    var a = new en(e._pt, t, n, 0, 1, o ? Dg : Lg);
    return (e._pt = a), (a.b = r), (a.e = s), e._props.push(n), a;
  },
  Gd = { deg: 1, rad: 1, turn: 1 },
  pE = { grid: 1, flex: 1 },
  Ki = function i(e, t, n, r) {
    var s = parseFloat(n) || 0,
      o = (n + '').trim().substr((s + '').length) || 'px',
      a = br.style,
      l = tE.test(t),
      c = e.tagName.toLowerCase() === 'svg',
      u = (c ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
      f = 100,
      h = r === 'px',
      d = r === '%',
      g,
      p,
      m,
      _;
    return r === o || !s || Gd[r] || Gd[o]
      ? s
      : (o !== 'px' && !h && (s = i(e, t, n, 'px')),
        (_ = e.getCTM && zg(e)),
        (d || o === '%') && (bi[t] || ~t.indexOf('adius'))
          ? ((g = _ ? e.getBBox()[l ? 'width' : 'height'] : e[u]),
            ut(d ? (s / g) * f : (s / 100) * g))
          : ((a[l ? 'width' : 'height'] = f + (h ? o : r)),
            (p =
              ~t.indexOf('adius') || (r === 'em' && e.appendChild && !c)
                ? e
                : e.parentNode),
            _ && (p = (e.ownerSVGElement || {}).parentNode),
            (!p || p === Ui || !p.appendChild) && (p = Ui.body),
            (m = p._gsap),
            m && d && m.width && l && m.time === an.time && !m.uncache
              ? ut((s / m.width) * f)
              : ((d || o === '%') &&
                  !pE[ei(p, 'display')] &&
                  (a.position = ei(e, 'position')),
                p === e && (a.position = 'static'),
                p.appendChild(br),
                (g = br[u]),
                p.removeChild(br),
                (a.position = 'absolute'),
                l && d && ((m = Ar(p)), (m.time = an.time), (m.width = p[u])),
                ut(h ? (g * s) / f : g && s ? (f / g) * s : 0))));
  },
  hi = function (e, t, n, r) {
    var s;
    return (
      tf || lu(),
      t in mi &&
        t !== 'transform' &&
        ((t = mi[t]), ~t.indexOf(',') && (t = t.split(',')[0])),
      bi[t] && t !== 'transform'
        ? ((s = Vo(e, r)),
          (s =
            t !== 'transformOrigin'
              ? s[t]
              : s.svg
              ? s.origin
              : Za(ei(e, Bn)) + ' ' + s.zOrigin + 'px'))
        : ((s = e.style[t]),
          (!s || s === 'auto' || r || ~(s + '').indexOf('calc(')) &&
            (s =
              (Ya[t] && Ya[t](e, t, n)) ||
              ei(e, t) ||
              tg(e, t) ||
              (t === 'opacity' ? 1 : 0))),
      n && !~(s + '').trim().indexOf(' ') ? Ki(e, t, s, n) + n : s
    );
  },
  mE = function (e, t, n, r) {
    if (!n || n === 'none') {
      var s = Xs(t, e, 1),
        o = s && ei(e, s, 1);
      o && o !== n
        ? ((t = s), (n = o))
        : t === 'borderColor' && (n = ei(e, 'borderTopColor'));
    }
    var a = new en(this._pt, e.style, t, 0, 1, Cg),
      l = 0,
      c = 0,
      u,
      f,
      h,
      d,
      g,
      p,
      m,
      _,
      x,
      v,
      y,
      b;
    if (
      ((a.b = n),
      (a.e = r),
      (n += ''),
      (r += ''),
      r === 'auto' && ((e.style[t] = r), (r = ei(e, t) || r), (e.style[t] = n)),
      (u = [n, r]),
      xg(u),
      (n = u[0]),
      (r = u[1]),
      (h = n.match(_s) || []),
      (b = r.match(_s) || []),
      b.length)
    ) {
      for (; (f = _s.exec(r)); )
        (m = f[0]),
          (x = r.substring(l, f.index)),
          g
            ? (g = (g + 1) % 5)
            : (x.substr(-5) === 'rgba(' || x.substr(-5) === 'hsla(') && (g = 1),
          m !== (p = h[c++] || '') &&
            ((d = parseFloat(p) || 0),
            (y = p.substr((d + '').length)),
            m.charAt(1) === '=' && (m = Ts(d, m) + y),
            (_ = parseFloat(m)),
            (v = m.substr((_ + '').length)),
            (l = _s.lastIndex - v.length),
            v ||
              ((v = v || ln.units[t] || y),
              l === r.length && ((r += v), (a.e += v))),
            y !== v && (d = Ki(e, t, p, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: x || c === 1 ? x : ',',
              s: d,
              c: _ - d,
              m: (g && g < 4) || t === 'zIndex' ? Math.round : 0,
            }));
      a.c = l < r.length ? r.substring(l, r.length) : '';
    } else a.r = t === 'display' && r === 'none' ? Dg : Lg;
    return Ym.test(r) && (a.e = 0), (this._pt = a), a;
  },
  Hd = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  gE = function (e) {
    var t = e.split(' '),
      n = t[0],
      r = t[1] || '50%';
    return (
      (n === 'top' || n === 'bottom' || r === 'left' || r === 'right') &&
        ((e = n), (n = r), (r = e)),
      (t[0] = Hd[n] || n),
      (t[1] = Hd[r] || r),
      t.join(' ')
    );
  },
  _E = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        s = t.u,
        o = n._gsap,
        a,
        l,
        c;
      if (s === 'all' || s === !0) (r.cssText = ''), (l = 1);
      else
        for (s = s.split(','), c = s.length; --c > -1; )
          (a = s[c]),
            bi[a] && ((l = 1), (a = a === 'transformOrigin' ? Bn : ot)),
            Bo(n, a);
      l &&
        (Bo(n, ot),
        o &&
          (o.svg && n.removeAttribute('transform'),
          Vo(n, 1),
          (o.uncache = 1),
          Ig(r)));
    }
  },
  Ya = {
    clearProps: function (e, t, n, r, s) {
      if (s.data !== 'isFromStart') {
        var o = (e._pt = new en(e._pt, t, n, 0, 0, _E));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(n), 1;
      }
    },
  },
  ko = [1, 0, 0, 1, 0, 0],
  Ug = {},
  Bg = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
  },
  Wd = function (e) {
    var t = ei(e, ot);
    return Bg(t) ? ko : t.substr(7).match($m).map(ut);
  },
  sf = function (e, t) {
    var n = e._gsap || Ar(e),
      r = e.style,
      s = Wd(e),
      o,
      a,
      l,
      c;
    return n.svg && e.getAttribute('transform')
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(',') === '1,0,0,1,0,0' ? ko : s)
      : (s === ko &&
          !e.offsetParent &&
          e !== Es &&
          !n.svg &&
          ((l = r.display),
          (r.display = 'block'),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((c = 1), (a = e.nextElementSibling), Es.appendChild(e)),
          (s = Wd(e)),
          l ? (r.display = l) : Bo(e, 'display'),
          c &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : Es.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  cu = function (e, t, n, r, s, o) {
    var a = e._gsap,
      l = s || sf(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      f = a.xOffset || 0,
      h = a.yOffset || 0,
      d = l[0],
      g = l[1],
      p = l[2],
      m = l[3],
      _ = l[4],
      x = l[5],
      v = t.split(' '),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      T,
      R,
      M,
      w;
    n
      ? l !== ko &&
        (R = d * m - g * p) &&
        ((M = y * (m / R) + b * (-p / R) + (p * x - m * _) / R),
        (w = y * (-g / R) + b * (d / R) - (d * x - g * _) / R),
        (y = M),
        (b = w))
      : ((T = Ng(e)),
        (y = T.x + (~v[0].indexOf('%') ? (y / 100) * T.width : y)),
        (b = T.y + (~(v[1] || v[0]).indexOf('%') ? (b / 100) * T.height : b))),
      r || (r !== !1 && a.smooth)
        ? ((_ = y - c),
          (x = b - u),
          (a.xOffset = f + (_ * d + x * p) - _),
          (a.yOffset = h + (_ * g + x * m) - x))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = y),
      (a.yOrigin = b),
      (a.smooth = !!r),
      (a.origin = t),
      (a.originIsAbsolute = !!n),
      (e.style[Bn] = '0px 0px'),
      o &&
        (Bi(o, a, 'xOrigin', c, y),
        Bi(o, a, 'yOrigin', u, b),
        Bi(o, a, 'xOffset', f, a.xOffset),
        Bi(o, a, 'yOffset', h, a.yOffset)),
      e.setAttribute('data-svg-origin', y + ' ' + b);
  },
  Vo = function (e, t) {
    var n = e._gsap || new bg(e);
    if ('x' in n && !t && !n.uncache) return n;
    var r = e.style,
      s = n.scaleX < 0,
      o = 'px',
      a = 'deg',
      l = getComputedStyle(e),
      c = ei(e, Bn) || '0',
      u,
      f,
      h,
      d,
      g,
      p,
      m,
      _,
      x,
      v,
      y,
      b,
      T,
      R,
      M,
      w,
      D,
      q,
      Q,
      k,
      I,
      $,
      Z,
      Y,
      V,
      z,
      H,
      ue,
      te,
      de,
      xe,
      G;
    return (
      (u = f = h = p = m = _ = x = v = y = 0),
      (d = g = 1),
      (n.svg = !!(e.getCTM && zg(e))),
      l.translate &&
        ((l.translate !== 'none' ||
          l.scale !== 'none' ||
          l.rotate !== 'none') &&
          (r[ot] =
            (l.translate !== 'none'
              ? 'translate3d(' +
                (l.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                ') '
              : '') +
            (l.rotate !== 'none' ? 'rotate(' + l.rotate + ') ' : '') +
            (l.scale !== 'none'
              ? 'scale(' + l.scale.split(' ').join(',') + ') '
              : '') +
            (l[ot] !== 'none' ? l[ot] : '')),
        (r.scale = r.rotate = r.translate = 'none')),
      (R = sf(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((V = e.getBBox()),
            (c = n.xOrigin - V.x + 'px ' + (n.yOrigin - V.y) + 'px'),
            (Y = ''))
          : (Y = !t && e.getAttribute('data-svg-origin')),
        cu(e, Y || c, !!Y || n.originIsAbsolute, n.smooth !== !1, R)),
      (b = n.xOrigin || 0),
      (T = n.yOrigin || 0),
      R !== ko &&
        ((q = R[0]),
        (Q = R[1]),
        (k = R[2]),
        (I = R[3]),
        (u = $ = R[4]),
        (f = Z = R[5]),
        R.length === 6
          ? ((d = Math.sqrt(q * q + Q * Q)),
            (g = Math.sqrt(I * I + k * k)),
            (p = q || Q ? hs(Q, q) * dr : 0),
            (x = k || I ? hs(k, I) * dr + p : 0),
            x && (g *= Math.abs(Math.cos(x * As))),
            n.svg && ((u -= b - (b * q + T * k)), (f -= T - (b * Q + T * I))))
          : ((G = R[6]),
            (de = R[7]),
            (H = R[8]),
            (ue = R[9]),
            (te = R[10]),
            (xe = R[11]),
            (u = R[12]),
            (f = R[13]),
            (h = R[14]),
            (M = hs(G, te)),
            (m = M * dr),
            M &&
              ((w = Math.cos(-M)),
              (D = Math.sin(-M)),
              (Y = $ * w + H * D),
              (V = Z * w + ue * D),
              (z = G * w + te * D),
              (H = $ * -D + H * w),
              (ue = Z * -D + ue * w),
              (te = G * -D + te * w),
              (xe = de * -D + xe * w),
              ($ = Y),
              (Z = V),
              (G = z)),
            (M = hs(-k, te)),
            (_ = M * dr),
            M &&
              ((w = Math.cos(-M)),
              (D = Math.sin(-M)),
              (Y = q * w - H * D),
              (V = Q * w - ue * D),
              (z = k * w - te * D),
              (xe = I * D + xe * w),
              (q = Y),
              (Q = V),
              (k = z)),
            (M = hs(Q, q)),
            (p = M * dr),
            M &&
              ((w = Math.cos(M)),
              (D = Math.sin(M)),
              (Y = q * w + Q * D),
              (V = $ * w + Z * D),
              (Q = Q * w - q * D),
              (Z = Z * w - $ * D),
              (q = Y),
              ($ = V)),
            m &&
              Math.abs(m) + Math.abs(p) > 359.9 &&
              ((m = p = 0), (_ = 180 - _)),
            (d = ut(Math.sqrt(q * q + Q * Q + k * k))),
            (g = ut(Math.sqrt(Z * Z + G * G))),
            (M = hs($, Z)),
            (x = Math.abs(M) > 2e-4 ? M * dr : 0),
            (y = xe ? 1 / (xe < 0 ? -xe : xe) : 0)),
        n.svg &&
          ((Y = e.getAttribute('transform')),
          (n.forceCSS = e.setAttribute('transform', '') || !Bg(ei(e, ot))),
          Y && e.setAttribute('transform', Y))),
      Math.abs(x) > 90 &&
        Math.abs(x) < 270 &&
        (s
          ? ((d *= -1), (x += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((g *= -1), (x += x <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        u -
        ((n.xPercent =
          u &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        o),
      (n.y =
        f -
        ((n.yPercent =
          f &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        o),
      (n.z = h + o),
      (n.scaleX = ut(d)),
      (n.scaleY = ut(g)),
      (n.rotation = ut(p) + a),
      (n.rotationX = ut(m) + a),
      (n.rotationY = ut(_) + a),
      (n.skewX = x + a),
      (n.skewY = v + a),
      (n.transformPerspective = y + o),
      (n.zOrigin = parseFloat(c.split(' ')[2]) || 0) && (r[Bn] = Za(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = ln.force3D),
      (n.renderTransform = n.svg ? vE : Fg ? kg : xE),
      (n.uncache = 0),
      n
    );
  },
  Za = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1];
  },
  _c = function (e, t, n) {
    var r = Bt(t);
    return ut(parseFloat(t) + parseFloat(Ki(e, 'x', n + 'px', r))) + r;
  },
  xE = function (e, t) {
    (t.z = '0px'),
      (t.rotationY = t.rotationX = '0deg'),
      (t.force3D = 0),
      kg(e, t);
  },
  lr = '0deg',
  lo = '0px',
  cr = ') ',
  kg = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      s = n.yPercent,
      o = n.x,
      a = n.y,
      l = n.z,
      c = n.rotation,
      u = n.rotationY,
      f = n.rotationX,
      h = n.skewX,
      d = n.skewY,
      g = n.scaleX,
      p = n.scaleY,
      m = n.transformPerspective,
      _ = n.force3D,
      x = n.target,
      v = n.zOrigin,
      y = '',
      b = (_ === 'auto' && e && e !== 1) || _ === !0;
    if (v && (f !== lr || u !== lr)) {
      var T = parseFloat(u) * As,
        R = Math.sin(T),
        M = Math.cos(T),
        w;
      (T = parseFloat(f) * As),
        (w = Math.cos(T)),
        (o = _c(x, o, R * w * -v)),
        (a = _c(x, a, -Math.sin(T) * -v)),
        (l = _c(x, l, M * w * -v + v));
    }
    m !== lo && (y += 'perspective(' + m + cr),
      (r || s) && (y += 'translate(' + r + '%, ' + s + '%) '),
      (b || o !== lo || a !== lo || l !== lo) &&
        (y +=
          l !== lo || b
            ? 'translate3d(' + o + ', ' + a + ', ' + l + ') '
            : 'translate(' + o + ', ' + a + cr),
      c !== lr && (y += 'rotate(' + c + cr),
      u !== lr && (y += 'rotateY(' + u + cr),
      f !== lr && (y += 'rotateX(' + f + cr),
      (h !== lr || d !== lr) && (y += 'skew(' + h + ', ' + d + cr),
      (g !== 1 || p !== 1) && (y += 'scale(' + g + ', ' + p + cr),
      (x.style[ot] = y || 'translate(0, 0)');
  },
  vE = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      s = n.yPercent,
      o = n.x,
      a = n.y,
      l = n.rotation,
      c = n.skewX,
      u = n.skewY,
      f = n.scaleX,
      h = n.scaleY,
      d = n.target,
      g = n.xOrigin,
      p = n.yOrigin,
      m = n.xOffset,
      _ = n.yOffset,
      x = n.forceCSS,
      v = parseFloat(o),
      y = parseFloat(a),
      b,
      T,
      R,
      M,
      w;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= As),
          (c *= As),
          (b = Math.cos(l) * f),
          (T = Math.sin(l) * f),
          (R = Math.sin(l - c) * -h),
          (M = Math.cos(l - c) * h),
          c &&
            ((u *= As),
            (w = Math.tan(c - u)),
            (w = Math.sqrt(1 + w * w)),
            (R *= w),
            (M *= w),
            u &&
              ((w = Math.tan(u)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (T *= w))),
          (b = ut(b)),
          (T = ut(T)),
          (R = ut(R)),
          (M = ut(M)))
        : ((b = f), (M = h), (T = R = 0)),
      ((v && !~(o + '').indexOf('px')) || (y && !~(a + '').indexOf('px'))) &&
        ((v = Ki(d, 'x', o, 'px')), (y = Ki(d, 'y', a, 'px'))),
      (g || p || m || _) &&
        ((v = ut(v + g - (g * b + p * R) + m)),
        (y = ut(y + p - (g * T + p * M) + _))),
      (r || s) &&
        ((w = d.getBBox()),
        (v = ut(v + (r / 100) * w.width)),
        (y = ut(y + (s / 100) * w.height))),
      (w =
        'matrix(' + b + ',' + T + ',' + R + ',' + M + ',' + v + ',' + y + ')'),
      d.setAttribute('transform', w),
      x && (d.style[ot] = w);
  },
  yE = function (e, t, n, r, s) {
    var o = 360,
      a = Ct(s),
      l = parseFloat(s) * (a && ~s.indexOf('rad') ? dr : 1),
      c = l - r,
      u = r + c + 'deg',
      f,
      h;
    return (
      a &&
        ((f = s.split('_')[1]),
        f === 'short' && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        f === 'cw' && c < 0
          ? (c = ((c + o * Bd) % o) - ~~(c / o) * o)
          : f === 'ccw' && c > 0 && (c = ((c - o * Bd) % o) - ~~(c / o) * o)),
      (e._pt = h = new en(e._pt, t, n, r, c, iE)),
      (h.e = u),
      (h.u = 'deg'),
      e._props.push(n),
      h
    );
  },
  qd = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  ME = function (e, t, n) {
    var r = qd({}, n._gsap),
      s = 'perspective,force3D,transformOrigin,svgOrigin',
      o = n.style,
      a,
      l,
      c,
      u,
      f,
      h,
      d,
      g;
    r.svg
      ? ((c = n.getAttribute('transform')),
        n.setAttribute('transform', ''),
        (o[ot] = t),
        (a = Vo(n, 1)),
        Bo(n, ot),
        n.setAttribute('transform', c))
      : ((c = getComputedStyle(n)[ot]),
        (o[ot] = t),
        (a = Vo(n, 1)),
        (o[ot] = c));
    for (l in bi)
      (c = r[l]),
        (u = a[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((d = Bt(c)),
          (g = Bt(u)),
          (f = d !== g ? Ki(n, l, c, g) : parseFloat(c)),
          (h = parseFloat(u)),
          (e._pt = new en(e._pt, a, l, f, h - f, ou)),
          (e._pt.u = g || 0),
          e._props.push(l));
    qd(a, r);
  };
Qt('padding,margin,Width,Radius', function (i, e) {
  var t = 'Top',
    n = 'Right',
    r = 'Bottom',
    s = 'Left',
    o = (e < 3 ? [t, n, r, s] : [t + s, t + n, r + n, r + s]).map(function (a) {
      return e < 2 ? i + a : 'border' + a + i;
    });
  Ya[e > 1 ? 'border' + i : i] = function (a, l, c, u, f) {
    var h, d;
    if (arguments.length < 4)
      return (
        (h = o.map(function (g) {
          return hi(a, g, c);
        })),
        (d = h.join(' ')),
        d.split(h[0]).length === 5 ? h[0] : d
      );
    (h = (u + '').split(' ')),
      (d = {}),
      o.forEach(function (g, p) {
        return (d[g] = h[p] = h[p] || h[((p - 1) / 2) | 0]);
      }),
      a.init(l, d, f);
  };
});
var Vg = {
  name: 'css',
  register: lu,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, s) {
    var o = this._props,
      a = e.style,
      l = n.vars.startAt,
      c,
      u,
      f,
      h,
      d,
      g,
      p,
      m,
      _,
      x,
      v,
      y,
      b,
      T,
      R,
      M;
    tf || lu(),
      (this.styles = this.styles || Og(e)),
      (M = this.styles.props),
      (this.tween = n);
    for (p in t)
      if (p !== 'autoRound' && ((u = t[p]), !(sn[p] && Sg(p, t, n, r, e, s)))) {
        if (
          ((d = typeof u),
          (g = Ya[p]),
          d === 'function' && ((u = u.call(n, r, e, s)), (d = typeof u)),
          d === 'string' && ~u.indexOf('random(') && (u = zo(u)),
          g)
        )
          g(this, e, p, u, n) && (R = 1);
        else if (p.substr(0, 2) === '--')
          (c = (getComputedStyle(e).getPropertyValue(p) + '').trim()),
            (u += ''),
            (qi.lastIndex = 0),
            qi.test(c) || ((m = Bt(c)), (_ = Bt(u))),
            _ ? m !== _ && (c = Ki(e, p, c, _) + _) : m && (u += m),
            this.add(a, 'setProperty', c, u, r, s, 0, 0, p),
            o.push(p),
            M.push(p, 0, a[p]);
        else if (d !== 'undefined') {
          if (
            (l && p in l
              ? ((c = typeof l[p] == 'function' ? l[p].call(n, r, e, s) : l[p]),
                Ct(c) && ~c.indexOf('random(') && (c = zo(c)),
                Bt(c + '') || (c += ln.units[p] || Bt(hi(e, p)) || ''),
                (c + '').charAt(1) === '=' && (c = hi(e, p)))
              : (c = hi(e, p)),
            (h = parseFloat(c)),
            (x = d === 'string' && u.charAt(1) === '=' && u.substr(0, 2)),
            x && (u = u.substr(2)),
            (f = parseFloat(u)),
            p in mi &&
              (p === 'autoAlpha' &&
                (h === 1 && hi(e, 'visibility') === 'hidden' && f && (h = 0),
                M.push('visibility', 0, a.visibility),
                Bi(
                  this,
                  a,
                  'visibility',
                  h ? 'inherit' : 'hidden',
                  f ? 'inherit' : 'hidden',
                  !f
                )),
              p !== 'scale' &&
                p !== 'transform' &&
                ((p = mi[p]), ~p.indexOf(',') && (p = p.split(',')[0]))),
            (v = p in bi),
            v)
          ) {
            if (
              (this.styles.save(p),
              y ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  Vo(e, t.parseTransform),
                (T = t.smoothOrigin !== !1 && b.smooth),
                (y = this._pt =
                  new en(this._pt, a, ot, 0, 1, b.renderTransform, b, 0, -1)),
                (y.dep = 1)),
              p === 'scale')
            )
              (this._pt = new en(
                this._pt,
                b,
                'scaleY',
                h,
                (x ? Ts(h, x + f) : f) - h || 0,
                ou
              )),
                (this._pt.u = 0),
                o.push('scaleY', p),
                (p += 'X');
            else if (p === 'transformOrigin') {
              M.push(Bn, 0, a[Bn]),
                (u = gE(u)),
                b.svg
                  ? cu(e, u, 0, T, 0, this)
                  : ((_ = parseFloat(u.split(' ')[2]) || 0),
                    _ !== b.zOrigin && Bi(this, b, 'zOrigin', b.zOrigin, _),
                    Bi(this, a, p, Za(c), Za(u)));
              continue;
            } else if (p === 'svgOrigin') {
              cu(e, u, 1, T, 0, this);
              continue;
            } else if (p in Ug) {
              yE(this, b, p, h, x ? Ts(h, x + u) : u);
              continue;
            } else if (p === 'smoothOrigin') {
              Bi(this, b, 'smooth', b.smooth, u);
              continue;
            } else if (p === 'force3D') {
              b[p] = u;
              continue;
            } else if (p === 'transform') {
              ME(this, u, e);
              continue;
            }
          } else p in a || (p = Xs(p) || p);
          if (v || ((f || f === 0) && (h || h === 0) && !nE.test(u) && p in a))
            (m = (c + '').substr((h + '').length)),
              f || (f = 0),
              (_ = Bt(u) || (p in ln.units ? ln.units[p] : m)),
              m !== _ && (h = Ki(e, p, c, _)),
              (this._pt = new en(
                this._pt,
                v ? b : a,
                p,
                h,
                (x ? Ts(h, x + f) : f) - h,
                !v && (_ === 'px' || p === 'zIndex') && t.autoRound !== !1
                  ? sE
                  : ou
              )),
              (this._pt.u = _ || 0),
              m !== _ && _ !== '%' && ((this._pt.b = c), (this._pt.r = rE));
          else if (p in a) mE.call(this, e, p, c, x ? x + u : u);
          else if (p in e) this.add(e, p, c || e[p], x ? x + u : u, r, s);
          else {
            Xu(p, u);
            continue;
          }
          v || (p in a ? M.push(p, 0, a[p]) : M.push(p, 1, c || e[p])),
            o.push(p);
        }
      }
    R && Pg(this);
  },
  render: function (e, t) {
    if (t.tween._time || !nf())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: hi,
  aliases: mi,
  getSetter: function (e, t, n) {
    var r = mi[t];
    return (
      r && r.indexOf(',') < 0 && (t = r),
      t in bi && t !== Bn && (e._gsap.x || hi(e, 'x'))
        ? n && Ud === n
          ? t === 'scale'
            ? cE
            : lE
          : (Ud = n || {}) && (t === 'scale' ? uE : fE)
        : e.style && !Wu(e.style[t])
        ? oE
        : ~t.indexOf('-')
        ? aE
        : Qu(e, t)
    );
  },
  core: { _removeProperty: Bo, _getMatrix: sf },
};
hn.utils.checkPrefix = Xs;
hn.core.getStyleSaver = Og;
(function (i, e, t, n) {
  var r = Qt(i + ',' + e + ',' + t, function (s) {
    bi[s] = 1;
  });
  Qt(e, function (s) {
    (ln.units[s] = 'deg'), (Ug[s] = 1);
  }),
    (mi[r[13]] = i + ',' + e),
    Qt(n, function (s) {
      var o = s.split(':');
      mi[o[1]] = r[o[0]];
    });
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
);
Qt(
  'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
  function (i) {
    ln.units[i] = 'px';
  }
);
hn.registerPlugin(Vg);
var Gg = hn.registerPlugin(Vg) || hn;
Gg.core.Tween;
const Xd = { type: 'change' },
  xc = { type: 'start' },
  jd = { type: 'end' };
class bE extends Br {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = 'none'),
      (this.enabled = !0),
      (this.target = new N()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: 'ArrowLeft',
        UP: 'ArrowUp',
        RIGHT: 'ArrowRight',
        BOTTOM: 'ArrowDown',
      }),
      (this.mouseButtons = {
        LEFT: qr.ROTATE,
        MIDDLE: qr.DOLLY,
        RIGHT: qr.PAN,
      }),
      (this.touches = { ONE: Xr.ROTATE, TWO: Xr.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (L) {
        L.addEventListener('keydown', ae), (this._domElementKeyEvents = L);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Xd),
          n.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const L = new N(),
          B = new Yi().setFromUnitVectors(e.up, new N(0, 1, 0)),
          be = B.clone().invert(),
          Ee = new N(),
          Se = new Yi(),
          Ce = 2 * Math.PI;
        return function () {
          const Ie = n.object.position;
          L.copy(Ie).sub(n.target),
            L.applyQuaternion(B),
            a.setFromVector3(L),
            n.autoRotate && s === r.NONE && w(R()),
            n.enableDamping
              ? ((a.theta += l.theta * n.dampingFactor),
                (a.phi += l.phi * n.dampingFactor))
              : ((a.theta += l.theta), (a.phi += l.phi));
          let ke = n.minAzimuthAngle,
            Ke = n.maxAzimuthAngle;
          return (
            isFinite(ke) &&
              isFinite(Ke) &&
              (ke < -Math.PI ? (ke += Ce) : ke > Math.PI && (ke -= Ce),
              Ke < -Math.PI ? (Ke += Ce) : Ke > Math.PI && (Ke -= Ce),
              ke <= Ke
                ? (a.theta = Math.max(ke, Math.min(Ke, a.theta)))
                : (a.theta =
                    a.theta > (ke + Ke) / 2
                      ? Math.max(ke, a.theta)
                      : Math.min(Ke, a.theta))),
            (a.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            (a.radius *= c),
            (a.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, a.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            L.setFromSpherical(a),
            L.applyQuaternion(be),
            Ie.copy(n.target).add(L),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0)),
            (c = 1),
            f ||
            Ee.distanceToSquared(n.object.position) > o ||
            8 * (1 - Se.dot(n.object.quaternion)) > o
              ? (n.dispatchEvent(Xd),
                Ee.copy(n.object.position),
                Se.copy(n.object.quaternion),
                (f = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener('contextmenu', U),
          n.domElement.removeEventListener('pointerdown', X),
          n.domElement.removeEventListener('pointercancel', he),
          n.domElement.removeEventListener('wheel', me),
          n.domElement.removeEventListener('pointermove', K),
          n.domElement.removeEventListener('pointerup', ee),
          n._domElementKeyEvents !== null &&
            n._domElementKeyEvents.removeEventListener('keydown', ae);
      });
    const n = this,
      r = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = r.NONE;
    const o = 1e-6,
      a = new Pd(),
      l = new Pd();
    let c = 1;
    const u = new N();
    let f = !1;
    const h = new De(),
      d = new De(),
      g = new De(),
      p = new De(),
      m = new De(),
      _ = new De(),
      x = new De(),
      v = new De(),
      y = new De(),
      b = [],
      T = {};
    function R() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function M() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function w(L) {
      l.theta -= L;
    }
    function D(L) {
      l.phi -= L;
    }
    const q = (function () {
        const L = new N();
        return function (be, Ee) {
          L.setFromMatrixColumn(Ee, 0), L.multiplyScalar(-be), u.add(L);
        };
      })(),
      Q = (function () {
        const L = new N();
        return function (be, Ee) {
          n.screenSpacePanning === !0
            ? L.setFromMatrixColumn(Ee, 1)
            : (L.setFromMatrixColumn(Ee, 0), L.crossVectors(n.object.up, L)),
            L.multiplyScalar(be),
            u.add(L);
        };
      })(),
      k = (function () {
        const L = new N();
        return function (be, Ee) {
          const Se = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const Ce = n.object.position;
            L.copy(Ce).sub(n.target);
            let we = L.length();
            (we *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              q((2 * be * we) / Se.clientHeight, n.object.matrix),
              Q((2 * Ee * we) / Se.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (q(
                  (be * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    Se.clientWidth,
                  n.object.matrix
                ),
                Q(
                  (Ee * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    Se.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
                ),
                (n.enablePan = !1));
        };
      })();
    function I(L) {
      n.object.isPerspectiveCamera
        ? (c /= L)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * L)
          )),
          n.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
          ),
          (n.enableZoom = !1));
    }
    function $(L) {
      n.object.isPerspectiveCamera
        ? (c *= L)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / L)
          )),
          n.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
          ),
          (n.enableZoom = !1));
    }
    function Z(L) {
      h.set(L.clientX, L.clientY);
    }
    function Y(L) {
      x.set(L.clientX, L.clientY);
    }
    function V(L) {
      p.set(L.clientX, L.clientY);
    }
    function z(L) {
      d.set(L.clientX, L.clientY),
        g.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const B = n.domElement;
      w((2 * Math.PI * g.x) / B.clientHeight),
        D((2 * Math.PI * g.y) / B.clientHeight),
        h.copy(d),
        n.update();
    }
    function H(L) {
      v.set(L.clientX, L.clientY),
        y.subVectors(v, x),
        y.y > 0 ? I(M()) : y.y < 0 && $(M()),
        x.copy(v),
        n.update();
    }
    function ue(L) {
      m.set(L.clientX, L.clientY),
        _.subVectors(m, p).multiplyScalar(n.panSpeed),
        k(_.x, _.y),
        p.copy(m),
        n.update();
    }
    function te(L) {
      L.deltaY < 0 ? $(M()) : L.deltaY > 0 && I(M()), n.update();
    }
    function de(L) {
      let B = !1;
      switch (L.code) {
        case n.keys.UP:
          k(0, n.keyPanSpeed), (B = !0);
          break;
        case n.keys.BOTTOM:
          k(0, -n.keyPanSpeed), (B = !0);
          break;
        case n.keys.LEFT:
          k(n.keyPanSpeed, 0), (B = !0);
          break;
        case n.keys.RIGHT:
          k(-n.keyPanSpeed, 0), (B = !0);
          break;
      }
      B && (L.preventDefault(), n.update());
    }
    function xe() {
      if (b.length === 1) h.set(b[0].pageX, b[0].pageY);
      else {
        const L = 0.5 * (b[0].pageX + b[1].pageX),
          B = 0.5 * (b[0].pageY + b[1].pageY);
        h.set(L, B);
      }
    }
    function G() {
      if (b.length === 1) p.set(b[0].pageX, b[0].pageY);
      else {
        const L = 0.5 * (b[0].pageX + b[1].pageX),
          B = 0.5 * (b[0].pageY + b[1].pageY);
        p.set(L, B);
      }
    }
    function F() {
      const L = b[0].pageX - b[1].pageX,
        B = b[0].pageY - b[1].pageY,
        be = Math.sqrt(L * L + B * B);
      x.set(0, be);
    }
    function le() {
      n.enableZoom && F(), n.enablePan && G();
    }
    function ce() {
      n.enableZoom && F(), n.enableRotate && xe();
    }
    function ve(L) {
      if (b.length == 1) d.set(L.pageX, L.pageY);
      else {
        const be = Me(L),
          Ee = 0.5 * (L.pageX + be.x),
          Se = 0.5 * (L.pageY + be.y);
        d.set(Ee, Se);
      }
      g.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const B = n.domElement;
      w((2 * Math.PI * g.x) / B.clientHeight),
        D((2 * Math.PI * g.y) / B.clientHeight),
        h.copy(d);
    }
    function _e(L) {
      if (b.length === 1) m.set(L.pageX, L.pageY);
      else {
        const B = Me(L),
          be = 0.5 * (L.pageX + B.x),
          Ee = 0.5 * (L.pageY + B.y);
        m.set(be, Ee);
      }
      _.subVectors(m, p).multiplyScalar(n.panSpeed), k(_.x, _.y), p.copy(m);
    }
    function Te(L) {
      const B = Me(L),
        be = L.pageX - B.x,
        Ee = L.pageY - B.y,
        Se = Math.sqrt(be * be + Ee * Ee);
      v.set(0, Se),
        y.set(0, Math.pow(v.y / x.y, n.zoomSpeed)),
        I(y.y),
        x.copy(v);
    }
    function A(L) {
      n.enableZoom && Te(L), n.enablePan && _e(L);
    }
    function P(L) {
      n.enableZoom && Te(L), n.enableRotate && ve(L);
    }
    function X(L) {
      n.enabled !== !1 &&
        (b.length === 0 &&
          (n.domElement.setPointerCapture(L.pointerId),
          n.domElement.addEventListener('pointermove', K),
          n.domElement.addEventListener('pointerup', ee)),
        J(L),
        L.pointerType === 'touch' ? E(L) : pe(L));
    }
    function K(L) {
      n.enabled !== !1 && (L.pointerType === 'touch' ? S(L) : oe(L));
    }
    function ee(L) {
      ie(L),
        b.length === 0 &&
          (n.domElement.releasePointerCapture(L.pointerId),
          n.domElement.removeEventListener('pointermove', K),
          n.domElement.removeEventListener('pointerup', ee)),
        n.dispatchEvent(jd),
        (s = r.NONE);
    }
    function he(L) {
      ie(L);
    }
    function pe(L) {
      let B;
      switch (L.button) {
        case 0:
          B = n.mouseButtons.LEFT;
          break;
        case 1:
          B = n.mouseButtons.MIDDLE;
          break;
        case 2:
          B = n.mouseButtons.RIGHT;
          break;
        default:
          B = -1;
      }
      switch (B) {
        case qr.DOLLY:
          if (n.enableZoom === !1) return;
          Y(L), (s = r.DOLLY);
          break;
        case qr.ROTATE:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enablePan === !1) return;
            V(L), (s = r.PAN);
          } else {
            if (n.enableRotate === !1) return;
            Z(L), (s = r.ROTATE);
          }
          break;
        case qr.PAN:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(L), (s = r.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            V(L), (s = r.PAN);
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(xc);
    }
    function oe(L) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1) return;
          z(L);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1) return;
          H(L);
          break;
        case r.PAN:
          if (n.enablePan === !1) return;
          ue(L);
          break;
      }
    }
    function me(L) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== r.NONE ||
        (L.preventDefault(), n.dispatchEvent(xc), te(L), n.dispatchEvent(jd));
    }
    function ae(L) {
      n.enabled === !1 || n.enablePan === !1 || de(L);
    }
    function E(L) {
      switch ((fe(L), b.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Xr.ROTATE:
              if (n.enableRotate === !1) return;
              xe(), (s = r.TOUCH_ROTATE);
              break;
            case Xr.PAN:
              if (n.enablePan === !1) return;
              G(), (s = r.TOUCH_PAN);
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Xr.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              le(), (s = r.TOUCH_DOLLY_PAN);
              break;
            case Xr.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ce(), (s = r.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(xc);
    }
    function S(L) {
      switch ((fe(L), s)) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ve(L), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          _e(L), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          A(L), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          P(L), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function U(L) {
      n.enabled !== !1 && L.preventDefault();
    }
    function J(L) {
      b.push(L);
    }
    function ie(L) {
      delete T[L.pointerId];
      for (let B = 0; B < b.length; B++)
        if (b[B].pointerId == L.pointerId) {
          b.splice(B, 1);
          return;
        }
    }
    function fe(L) {
      let B = T[L.pointerId];
      B === void 0 && ((B = new De()), (T[L.pointerId] = B)),
        B.set(L.pageX, L.pageY);
    }
    function Me(L) {
      const B = L.pointerId === b[0].pointerId ? b[1] : b[0];
      return T[B.pointerId];
    }
    n.domElement.addEventListener('contextmenu', U),
      n.domElement.addEventListener('pointerdown', X),
      n.domElement.addEventListener('pointercancel', he),
      n.domElement.addEventListener('wheel', me, { passive: !1 }),
      this.update();
  }
}
class SE {
  constructor(e) {
    Hn(this, 'container');
    Hn(this, 'width');
    Hn(this, 'height');
    Hn(this, 'dpr');
    Hn(this, 'scene');
    Hn(this, 'camera');
    Hn(this, 'renderer');
    Hn(this, 'mesh');
    Hn(this, 'controls');
    var t, n;
    (this.container = e.el),
      (this.dpr = window.devicePixelRatio || 1),
      (this.width = (t = this.container.offsetWidth) != null ? t : 0),
      (this.height = (n = this.container.offsetHeight) != null ? n : 0),
      this.init();
  }
  init() {
    this.setScene(),
      this.setCamera(),
      this.setLight(),
      this.setRenderer(),
      this.setControl();
  }
  setScene() {
    this.scene = new Bm();
  }
  setLight() {
    const e = new oT(16777215, 0.5);
    this.scene.add(e);
  }
  setCamera() {
    (this.camera = new on(45, this.width / this.height, 0.1, 1e4)),
      this.camera.position.set(0, 20, 100);
  }
  setRenderer() {
    var e;
    (this.renderer = new Bu({ antialias: !0 })),
      this.renderer.setSize(this.width, this.height),
      this.renderer.setPixelRatio(this.dpr),
      (this.renderer.shadowMap.enabled = !0),
      (e = this.container) == null || e.appendChild(this.renderer.domElement);
  }
  setControl() {
    (this.controls = new bE(this.camera, this.renderer.domElement)),
      (this.controls.enableDamping = !0),
      (this.controls.enableZoom = !1),
      (this.controls.autoRotate = !0);
    const e = new aT(5);
    this.scene.add(e);
  }
  animate(e) {
    e == null || e(),
      this.controls.update(),
      this.renderer.render(this.scene, this.camera),
      requestAnimationFrame(() => this.animate(e));
  }
  resize() {
    var e, t;
    (this.width = (e = this.container.offsetWidth) != null ? e : 0),
      (this.height = (t = this.container.offsetHeight) != null ? t : 0),
      (this.camera.aspect = this.width / this.height),
      this.camera.updateProjectionMatrix(),
      this.renderer.setSize(this.width, this.height),
      this.renderer.setPixelRatio(window.devicePixelRatio);
  }
}
const wE = '' + new URL('stars.b59efedb.png', import.meta.url).href,
  TE = '' + new URL('map.51d04fce.jpg', import.meta.url).href,
  EE = '' + new URL('earth.74238849.jpg', import.meta.url).href,
  AE = '' + new URL('glow.ef19d813.png', import.meta.url).href,
  CE = '' + new URL('moon.8132a945.jpg', import.meta.url).href,
  PE = '' + new URL('moon_ring.4faf79c0.png', import.meta.url).href,
  RE = { class: 'earth' },
  LE = Vn({
    __name: 'Index',
    setup(i) {
      const e = () => {
          const s = [];
          for (let u = 0; u < 500; u++) {
            const f = new N();
            (f.x = 800 * Math.random() - 400),
              (f.y = 800 * Math.random() - 400),
              (f.z = 800 * Math.random() - 400),
              s.push(f.x, f.y, f.z);
          }
          const o = new jt();
          o.setAttribute('position', new An(new Float32Array(s), 3));
          const a = new fs().load(wE),
            l = new Gm({
              size: 2,
              sizeAttenuation: !0,
              color: 5076687,
              transparent: !0,
              opacity: 1,
              map: a,
            });
          return new Zw(o, l);
        },
        t = () => {
          const s = new Ni(),
            o = new bo(10, 32, 32),
            a = new fs().load(TE),
            l = new Mo({ map: a }),
            c = new Mn(o, l);
          s.add(c);
          const u = new fs().load(EE),
            f = new bo(11, 32, 32),
            h = new Mo({ map: u, alphaMap: u, blending: xo, transparent: !0 }),
            d = new Mn(f, h);
          s.add(d);
          const g = new fs().load(AE),
            p = new ku({
              map: g,
              color: 5076687,
              transparent: !0,
              depthWrite: !1,
              depthTest: !1,
              blending: xo,
            }),
            m = new Vm(p);
          return m.scale.set(30, 30, 0), s.add(m), s;
        },
        n = () => {
          const s = new Ni();
          let o = new fs().load(CE),
            a = new tT({ map: o, emissive: 16777215, emissiveMap: o }),
            l = new bo(3, 32, 32),
            c = new Mn(l, a);
          c.position.set(42, 0, 0), s.add(c);
          let u = new fs().load(PE),
            f = new Mo({
              map: u,
              transparent: !0,
              blending: xo,
              side: di,
              depthWrite: !1,
              opacity: 0.5,
            }),
            h = new Gu(40, 45, 64),
            d = new Mn(h, f);
          (d.rotation.x = -Math.PI / 2), s.add(d);
          const g = { value: 0 };
          return (
            Gg.to(g, {
              value: 1,
              duration: 10,
              repeat: -1,
              ease: 'linear',
              onUpdate: () => {
                (c.position.x = 42 * Math.cos(g.value * Math.PI * 2)),
                  (c.position.z = 42 * Math.sin(g.value * Math.PI * 2)),
                  (c.rotation.y = g.value * Math.PI * 8);
              },
            }),
            s
          );
        },
        r = (s, o) => {
          o == null ||
            o.forEach(a => {
              s.add(a);
            });
        };
      return (
        Zs(() => {
          const s = new SE({ el: document.querySelector('.earth') });
          (s.scene.background = new qe(197393)),
            r(s.scene, [e(), t(), n()]),
            s.animate(),
            window.addEventListener('resize', () => {
              s.resize();
            }),
            console.log(s);
        }),
        (s, o) => (ft(), _t('div', RE))
      );
    },
  });
const pl = (i, e) => {
    const t = i.__vccOpts || i;
    for (const [n, r] of e) t[n] = r;
    return t;
  },
  DE = pl(LE, [['__scopeId', 'data-v-3b001398']]),
  IE = i => (i * Math.PI) / 180,
  $d = (i, e) => {
    const t = IE(360 / e),
      n = [];
    for (let r = 0; r < e; r += 1)
      n.push({ x: i * Math.cos(t * r), y: i * Math.sin(t * r) });
    return n;
  },
  zr = [
    '\u767E\u5EA6',
    '\u7F8E\u56E2',
    '\u4EAC\u4E1C',
    '\u8138\u4E66',
    '\u963F\u91CC\u5DF4\u5DF4',
    '\u54D4\u54E9\u54D4\u54E9',
    '\u5FAE\u8F6F',
    '\u7F51\u6613',
    '\u4E9A\u9A6C\u900A',
    '\u817E\u8BAF\u63A7\u80A1',
    '\u5FAE\u535A',
  ],
  Rr = [
    '\u6BDB\u5229',
    '\u51C0\u5229\u6DA6',
    '\u4EBA\u5747\u521B\u6536',
    '\u8425\u4E1A\u6210\u672C',
    '\u4F01\u4E1A\u81EA\u7531\u73B0\u91D1\u6D41\u91CF',
    '\u5E94\u6536\u8D26\u6B3E\u5468\u8F6C\u5929\u6570',
    '\u603B\u8425\u4E1A\u6536\u5165',
    '\u606F\u7A0E\u6298\u65E7\u644A\u9500\u524D\u5229\u6DA6',
    '\u5B58\u8D27\u5468\u8F6C\u5929\u6570',
    '\u606F\u7A0E\u524D\u5229\u6DA6',
    '\u7814\u53D1\u5229\u6DA6',
  ],
  Lr = [
    '\u5E74\u4EFD',
    '\u5B63\u5EA6',
    '\u65E5\u671F',
    '\u540C\u6BD4',
    '\u73AF\u6BD4',
    '\u6392\u540D',
  ],
  Yd = [...zr, ...Rr, ...zr, ...Rr, ...Lr];
var Hg = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: 'normal',
    autoplay: !0,
    timelineOffset: 0,
  },
  of = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0,
  },
  OE = [
    'translateX',
    'translateY',
    'translateZ',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scale',
    'scaleX',
    'scaleY',
    'scaleZ',
    'skew',
    'skewX',
    'skewY',
    'perspective',
    'matrix',
    'matrix3d',
  ],
  Ka = { CSS: {}, springs: {} };
function Jn(i, e, t) {
  return Math.min(Math.max(i, e), t);
}
function Eo(i, e) {
  return i.indexOf(e) > -1;
}
function vc(i, e) {
  return i.apply(null, e);
}
var Re = {
  arr: function (i) {
    return Array.isArray(i);
  },
  obj: function (i) {
    return Eo(Object.prototype.toString.call(i), 'Object');
  },
  pth: function (i) {
    return Re.obj(i) && i.hasOwnProperty('totalLength');
  },
  svg: function (i) {
    return i instanceof SVGElement;
  },
  inp: function (i) {
    return i instanceof HTMLInputElement;
  },
  dom: function (i) {
    return i.nodeType || Re.svg(i);
  },
  str: function (i) {
    return typeof i == 'string';
  },
  fnc: function (i) {
    return typeof i == 'function';
  },
  und: function (i) {
    return typeof i > 'u';
  },
  nil: function (i) {
    return Re.und(i) || i === null;
  },
  hex: function (i) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i);
  },
  rgb: function (i) {
    return /^rgb/.test(i);
  },
  hsl: function (i) {
    return /^hsl/.test(i);
  },
  col: function (i) {
    return Re.hex(i) || Re.rgb(i) || Re.hsl(i);
  },
  key: function (i) {
    return (
      !Hg.hasOwnProperty(i) &&
      !of.hasOwnProperty(i) &&
      i !== 'targets' &&
      i !== 'keyframes'
    );
  },
};
function Wg(i) {
  var e = /\(([^)]+)\)/.exec(i);
  return e
    ? e[1].split(',').map(function (t) {
        return parseFloat(t);
      })
    : [];
}
function qg(i, e) {
  var t = Wg(i),
    n = Jn(Re.und(t[0]) ? 1 : t[0], 0.1, 100),
    r = Jn(Re.und(t[1]) ? 100 : t[1], 0.1, 100),
    s = Jn(Re.und(t[2]) ? 10 : t[2], 0.1, 100),
    o = Jn(Re.und(t[3]) ? 0 : t[3], 0.1, 100),
    a = Math.sqrt(r / n),
    l = s / (2 * Math.sqrt(r * n)),
    c = l < 1 ? a * Math.sqrt(1 - l * l) : 0,
    u = 1,
    f = l < 1 ? (l * a + -o) / c : -o + a;
  function h(g) {
    var p = e ? (e * g) / 1e3 : g;
    return (
      l < 1
        ? (p =
            Math.exp(-p * l * a) * (u * Math.cos(c * p) + f * Math.sin(c * p)))
        : (p = (u + f * p) * Math.exp(-p * a)),
      g === 0 || g === 1 ? g : 1 - p
    );
  }
  function d() {
    var g = Ka.springs[i];
    if (g) return g;
    for (var p = 1 / 6, m = 0, _ = 0; ; )
      if (((m += p), h(m) === 1)) {
        if ((_++, _ >= 16)) break;
      } else _ = 0;
    var x = m * p * 1e3;
    return (Ka.springs[i] = x), x;
  }
  return e ? h : d;
}
function FE(i) {
  return (
    i === void 0 && (i = 10),
    function (e) {
      return Math.ceil(Jn(e, 1e-6, 1) * i) * (1 / i);
    }
  );
}
var NE = (function () {
    var i = 11,
      e = 1 / (i - 1);
    function t(u, f) {
      return 1 - 3 * f + 3 * u;
    }
    function n(u, f) {
      return 3 * f - 6 * u;
    }
    function r(u) {
      return 3 * u;
    }
    function s(u, f, h) {
      return ((t(f, h) * u + n(f, h)) * u + r(f)) * u;
    }
    function o(u, f, h) {
      return 3 * t(f, h) * u * u + 2 * n(f, h) * u + r(f);
    }
    function a(u, f, h, d, g) {
      var p,
        m,
        _ = 0;
      do (m = f + (h - f) / 2), (p = s(m, d, g) - u), p > 0 ? (h = m) : (f = m);
      while (Math.abs(p) > 1e-7 && ++_ < 10);
      return m;
    }
    function l(u, f, h, d) {
      for (var g = 0; g < 4; ++g) {
        var p = o(f, h, d);
        if (p === 0) return f;
        var m = s(f, h, d) - u;
        f -= m / p;
      }
      return f;
    }
    function c(u, f, h, d) {
      if (!(0 <= u && u <= 1 && 0 <= h && h <= 1)) return;
      var g = new Float32Array(i);
      if (u !== f || h !== d) for (var p = 0; p < i; ++p) g[p] = s(p * e, u, h);
      function m(_) {
        for (var x = 0, v = 1, y = i - 1; v !== y && g[v] <= _; ++v) x += e;
        --v;
        var b = (_ - g[v]) / (g[v + 1] - g[v]),
          T = x + b * e,
          R = o(T, u, h);
        return R >= 0.001 ? l(_, T, u, h) : R === 0 ? T : a(_, x, x + e, u, h);
      }
      return function (_) {
        return (u === f && h === d) || _ === 0 || _ === 1 ? _ : s(m(_), f, d);
      };
    }
    return c;
  })(),
  Xg = (function () {
    var i = {
        linear: function () {
          return function (n) {
            return n;
          };
        },
      },
      e = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function () {
          return function (n) {
            for (var r, s = 4; n < ((r = Math.pow(2, --s)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - s) -
              7.5625 * Math.pow((r * 3 - 2) / 22 - n, 2)
            );
          };
        },
        Elastic: function (n, r) {
          n === void 0 && (n = 1), r === void 0 && (r = 0.5);
          var s = Jn(n, 1, 10),
            o = Jn(r, 0.1, 2);
          return function (a) {
            return a === 0 || a === 1
              ? a
              : -s *
                  Math.pow(2, 10 * (a - 1)) *
                  Math.sin(
                    ((a - 1 - (o / (Math.PI * 2)) * Math.asin(1 / s)) *
                      (Math.PI * 2)) /
                      o
                  );
          };
        },
      },
      t = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
    return (
      t.forEach(function (n, r) {
        e[n] = function () {
          return function (s) {
            return Math.pow(s, r + 2);
          };
        };
      }),
      Object.keys(e).forEach(function (n) {
        var r = e[n];
        (i['easeIn' + n] = r),
          (i['easeOut' + n] = function (s, o) {
            return function (a) {
              return 1 - r(s, o)(1 - a);
            };
          }),
          (i['easeInOut' + n] = function (s, o) {
            return function (a) {
              return a < 0.5 ? r(s, o)(a * 2) / 2 : 1 - r(s, o)(a * -2 + 2) / 2;
            };
          }),
          (i['easeOutIn' + n] = function (s, o) {
            return function (a) {
              return a < 0.5
                ? (1 - r(s, o)(1 - a * 2)) / 2
                : (r(s, o)(a * 2 - 1) + 1) / 2;
            };
          });
      }),
      i
    );
  })();
function af(i, e) {
  if (Re.fnc(i)) return i;
  var t = i.split('(')[0],
    n = Xg[t],
    r = Wg(i);
  switch (t) {
    case 'spring':
      return qg(i, e);
    case 'cubicBezier':
      return vc(NE, r);
    case 'steps':
      return vc(FE, r);
    default:
      return vc(n, r);
  }
}
function jg(i) {
  try {
    var e = document.querySelectorAll(i);
    return e;
  } catch {
    return;
  }
}
function ml(i, e) {
  for (
    var t = i.length,
      n = arguments.length >= 2 ? arguments[1] : void 0,
      r = [],
      s = 0;
    s < t;
    s++
  )
    if (s in i) {
      var o = i[s];
      e.call(n, o, s, i) && r.push(o);
    }
  return r;
}
function gl(i) {
  return i.reduce(function (e, t) {
    return e.concat(Re.arr(t) ? gl(t) : t);
  }, []);
}
function Zd(i) {
  return Re.arr(i)
    ? i
    : (Re.str(i) && (i = jg(i) || i),
      i instanceof NodeList || i instanceof HTMLCollection
        ? [].slice.call(i)
        : [i]);
}
function lf(i, e) {
  return i.some(function (t) {
    return t === e;
  });
}
function cf(i) {
  var e = {};
  for (var t in i) e[t] = i[t];
  return e;
}
function uu(i, e) {
  var t = cf(i);
  for (var n in i) t[n] = e.hasOwnProperty(n) ? e[n] : i[n];
  return t;
}
function _l(i, e) {
  var t = cf(i);
  for (var n in e) t[n] = Re.und(i[n]) ? e[n] : i[n];
  return t;
}
function zE(i) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
  return e ? 'rgba(' + e[1] + ',1)' : i;
}
function UE(i) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    t = i.replace(e, function (a, l, c, u) {
      return l + l + c + c + u + u;
    }),
    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
    r = parseInt(n[1], 16),
    s = parseInt(n[2], 16),
    o = parseInt(n[3], 16);
  return 'rgba(' + r + ',' + s + ',' + o + ',1)';
}
function BE(i) {
  var e =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(i) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(i),
    t = parseInt(e[1], 10) / 360,
    n = parseInt(e[2], 10) / 100,
    r = parseInt(e[3], 10) / 100,
    s = e[4] || 1;
  function o(h, d, g) {
    return (
      g < 0 && (g += 1),
      g > 1 && (g -= 1),
      g < 1 / 6
        ? h + (d - h) * 6 * g
        : g < 1 / 2
        ? d
        : g < 2 / 3
        ? h + (d - h) * (2 / 3 - g) * 6
        : h
    );
  }
  var a, l, c;
  if (n == 0) a = l = c = r;
  else {
    var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
      f = 2 * r - u;
    (a = o(f, u, t + 1 / 3)), (l = o(f, u, t)), (c = o(f, u, t - 1 / 3));
  }
  return 'rgba(' + a * 255 + ',' + l * 255 + ',' + c * 255 + ',' + s + ')';
}
function kE(i) {
  if (Re.rgb(i)) return zE(i);
  if (Re.hex(i)) return UE(i);
  if (Re.hsl(i)) return BE(i);
}
function vi(i) {
  var e =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      i
    );
  if (e) return e[1];
}
function VE(i) {
  if (Eo(i, 'translate') || i === 'perspective') return 'px';
  if (Eo(i, 'rotate') || Eo(i, 'skew')) return 'deg';
}
function fu(i, e) {
  return Re.fnc(i) ? i(e.target, e.id, e.total) : i;
}
function Qn(i, e) {
  return i.getAttribute(e);
}
function uf(i, e, t) {
  var n = vi(e);
  if (lf([t, 'deg', 'rad', 'turn'], n)) return e;
  var r = Ka.CSS[e + t];
  if (!Re.und(r)) return r;
  var s = 100,
    o = document.createElement(i.tagName),
    a =
      i.parentNode && i.parentNode !== document ? i.parentNode : document.body;
  a.appendChild(o), (o.style.position = 'absolute'), (o.style.width = s + t);
  var l = s / o.offsetWidth;
  a.removeChild(o);
  var c = l * parseFloat(e);
  return (Ka.CSS[e + t] = c), c;
}
function $g(i, e, t) {
  if (e in i.style) {
    var n = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      r = i.style[e] || getComputedStyle(i).getPropertyValue(n) || '0';
    return t ? uf(i, r, t) : r;
  }
}
function ff(i, e) {
  if (Re.dom(i) && !Re.inp(i) && (!Re.nil(Qn(i, e)) || (Re.svg(i) && i[e])))
    return 'attribute';
  if (Re.dom(i) && lf(OE, e)) return 'transform';
  if (Re.dom(i) && e !== 'transform' && $g(i, e)) return 'css';
  if (i[e] != null) return 'object';
}
function Yg(i) {
  if (!!Re.dom(i)) {
    for (
      var e = i.style.transform || '',
        t = /(\w+)\(([^)]*)\)/g,
        n = new Map(),
        r;
      (r = t.exec(e));

    )
      n.set(r[1], r[2]);
    return n;
  }
}
function GE(i, e, t, n) {
  var r = Eo(e, 'scale') ? 1 : 0 + VE(e),
    s = Yg(i).get(e) || r;
  return (
    t && (t.transforms.list.set(e, s), (t.transforms.last = e)),
    n ? uf(i, s, n) : s
  );
}
function hf(i, e, t, n) {
  switch (ff(i, e)) {
    case 'transform':
      return GE(i, e, n, t);
    case 'css':
      return $g(i, e, t);
    case 'attribute':
      return Qn(i, e);
    default:
      return i[e] || 0;
  }
}
function df(i, e) {
  var t = /^(\*=|\+=|-=)/.exec(i);
  if (!t) return i;
  var n = vi(i) || 0,
    r = parseFloat(e),
    s = parseFloat(i.replace(t[0], ''));
  switch (t[0][0]) {
    case '+':
      return r + s + n;
    case '-':
      return r - s + n;
    case '*':
      return r * s + n;
  }
}
function Zg(i, e) {
  if (Re.col(i)) return kE(i);
  if (/\s/g.test(i)) return i;
  var t = vi(i),
    n = t ? i.substr(0, i.length - t.length) : i;
  return e ? n + e : n;
}
function pf(i, e) {
  return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
}
function HE(i) {
  return Math.PI * 2 * Qn(i, 'r');
}
function WE(i) {
  return Qn(i, 'width') * 2 + Qn(i, 'height') * 2;
}
function qE(i) {
  return pf(
    { x: Qn(i, 'x1'), y: Qn(i, 'y1') },
    { x: Qn(i, 'x2'), y: Qn(i, 'y2') }
  );
}
function Kg(i) {
  for (var e = i.points, t = 0, n, r = 0; r < e.numberOfItems; r++) {
    var s = e.getItem(r);
    r > 0 && (t += pf(n, s)), (n = s);
  }
  return t;
}
function XE(i) {
  var e = i.points;
  return Kg(i) + pf(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function Jg(i) {
  if (i.getTotalLength) return i.getTotalLength();
  switch (i.tagName.toLowerCase()) {
    case 'circle':
      return HE(i);
    case 'rect':
      return WE(i);
    case 'line':
      return qE(i);
    case 'polyline':
      return Kg(i);
    case 'polygon':
      return XE(i);
  }
}
function jE(i) {
  var e = Jg(i);
  return i.setAttribute('stroke-dasharray', e), e;
}
function $E(i) {
  for (var e = i.parentNode; Re.svg(e) && Re.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function Qg(i, e) {
  var t = e || {},
    n = t.el || $E(i),
    r = n.getBoundingClientRect(),
    s = Qn(n, 'viewBox'),
    o = r.width,
    a = r.height,
    l = t.viewBox || (s ? s.split(' ') : [0, 0, o, a]);
  return {
    el: n,
    viewBox: l,
    x: l[0] / 1,
    y: l[1] / 1,
    w: o,
    h: a,
    vW: l[2],
    vH: l[3],
  };
}
function YE(i, e) {
  var t = Re.str(i) ? jg(i)[0] : i,
    n = e || 100;
  return function (r) {
    return { property: r, el: t, svg: Qg(t), totalLength: Jg(t) * (n / 100) };
  };
}
function ZE(i, e, t) {
  function n(u) {
    u === void 0 && (u = 0);
    var f = e + u >= 1 ? e + u : 0;
    return i.el.getPointAtLength(f);
  }
  var r = Qg(i.el, i.svg),
    s = n(),
    o = n(-1),
    a = n(1),
    l = t ? 1 : r.w / r.vW,
    c = t ? 1 : r.h / r.vH;
  switch (i.property) {
    case 'x':
      return (s.x - r.x) * l;
    case 'y':
      return (s.y - r.y) * c;
    case 'angle':
      return (Math.atan2(a.y - o.y, a.x - o.x) * 180) / Math.PI;
  }
}
function Kd(i, e) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    n = Zg(Re.pth(i) ? i.totalLength : i, e) + '';
  return {
    original: n,
    numbers: n.match(t) ? n.match(t).map(Number) : [0],
    strings: Re.str(i) || e ? n.split(t) : [],
  };
}
function mf(i) {
  var e = i ? gl(Re.arr(i) ? i.map(Zd) : Zd(i)) : [];
  return ml(e, function (t, n, r) {
    return r.indexOf(t) === n;
  });
}
function e_(i) {
  var e = mf(i);
  return e.map(function (t, n) {
    return { target: t, id: n, total: e.length, transforms: { list: Yg(t) } };
  });
}
function KE(i, e) {
  var t = cf(e);
  if ((/^spring/.test(t.easing) && (t.duration = qg(t.easing)), Re.arr(i))) {
    var n = i.length,
      r = n === 2 && !Re.obj(i[0]);
    r
      ? (i = { value: i })
      : Re.fnc(e.duration) || (t.duration = e.duration / n);
  }
  var s = Re.arr(i) ? i : [i];
  return s
    .map(function (o, a) {
      var l = Re.obj(o) && !Re.pth(o) ? o : { value: o };
      return (
        Re.und(l.delay) && (l.delay = a ? 0 : e.delay),
        Re.und(l.endDelay) &&
          (l.endDelay = a === s.length - 1 ? e.endDelay : 0),
        l
      );
    })
    .map(function (o) {
      return _l(o, t);
    });
}
function JE(i) {
  for (
    var e = ml(
        gl(
          i.map(function (s) {
            return Object.keys(s);
          })
        ),
        function (s) {
          return Re.key(s);
        }
      ).reduce(function (s, o) {
        return s.indexOf(o) < 0 && s.push(o), s;
      }, []),
      t = {},
      n = function (s) {
        var o = e[s];
        t[o] = i.map(function (a) {
          var l = {};
          for (var c in a)
            Re.key(c) ? c == o && (l.value = a[c]) : (l[c] = a[c]);
          return l;
        });
      },
      r = 0;
    r < e.length;
    r++
  )
    n(r);
  return t;
}
function QE(i, e) {
  var t = [],
    n = e.keyframes;
  n && (e = _l(JE(n), e));
  for (var r in e) Re.key(r) && t.push({ name: r, tweens: KE(e[r], i) });
  return t;
}
function eA(i, e) {
  var t = {};
  for (var n in i) {
    var r = fu(i[n], e);
    Re.arr(r) &&
      ((r = r.map(function (s) {
        return fu(s, e);
      })),
      r.length === 1 && (r = r[0])),
      (t[n] = r);
  }
  return (
    (t.duration = parseFloat(t.duration)), (t.delay = parseFloat(t.delay)), t
  );
}
function tA(i, e) {
  var t;
  return i.tweens.map(function (n) {
    var r = eA(n, e),
      s = r.value,
      o = Re.arr(s) ? s[1] : s,
      a = vi(o),
      l = hf(e.target, i.name, a, e),
      c = t ? t.to.original : l,
      u = Re.arr(s) ? s[0] : c,
      f = vi(u) || vi(l),
      h = a || f;
    return (
      Re.und(o) && (o = c),
      (r.from = Kd(u, h)),
      (r.to = Kd(df(o, u), h)),
      (r.start = t ? t.end : 0),
      (r.end = r.start + r.delay + r.duration + r.endDelay),
      (r.easing = af(r.easing, r.duration)),
      (r.isPath = Re.pth(s)),
      (r.isPathTargetInsideSVG = r.isPath && Re.svg(e.target)),
      (r.isColor = Re.col(r.from.original)),
      r.isColor && (r.round = 1),
      (t = r),
      r
    );
  });
}
var t_ = {
  css: function (i, e, t) {
    return (i.style[e] = t);
  },
  attribute: function (i, e, t) {
    return i.setAttribute(e, t);
  },
  object: function (i, e, t) {
    return (i[e] = t);
  },
  transform: function (i, e, t, n, r) {
    if ((n.list.set(e, t), e === n.last || r)) {
      var s = '';
      n.list.forEach(function (o, a) {
        s += a + '(' + o + ') ';
      }),
        (i.style.transform = s);
    }
  },
};
function n_(i, e) {
  var t = e_(i);
  t.forEach(function (n) {
    for (var r in e) {
      var s = fu(e[r], n),
        o = n.target,
        a = vi(s),
        l = hf(o, r, a, n),
        c = a || vi(l),
        u = df(Zg(s, c), l),
        f = ff(o, r);
      t_[f](o, r, u, n.transforms, !0);
    }
  });
}
function nA(i, e) {
  var t = ff(i.target, e.name);
  if (t) {
    var n = tA(e, i),
      r = n[n.length - 1];
    return {
      type: t,
      property: e.name,
      animatable: i,
      tweens: n,
      duration: r.end,
      delay: n[0].delay,
      endDelay: r.endDelay,
    };
  }
}
function iA(i, e) {
  return ml(
    gl(
      i.map(function (t) {
        return e.map(function (n) {
          return nA(t, n);
        });
      })
    ),
    function (t) {
      return !Re.und(t);
    }
  );
}
function i_(i, e) {
  var t = i.length,
    n = function (s) {
      return s.timelineOffset ? s.timelineOffset : 0;
    },
    r = {};
  return (
    (r.duration = t
      ? Math.max.apply(
          Math,
          i.map(function (s) {
            return n(s) + s.duration;
          })
        )
      : e.duration),
    (r.delay = t
      ? Math.min.apply(
          Math,
          i.map(function (s) {
            return n(s) + s.delay;
          })
        )
      : e.delay),
    (r.endDelay = t
      ? r.duration -
        Math.max.apply(
          Math,
          i.map(function (s) {
            return n(s) + s.duration - s.endDelay;
          })
        )
      : e.endDelay),
    r
  );
}
var Jd = 0;
function rA(i) {
  var e = uu(Hg, i),
    t = uu(of, i),
    n = QE(t, i),
    r = e_(i.targets),
    s = iA(r, n),
    o = i_(s, t),
    a = Jd;
  return (
    Jd++,
    _l(e, {
      id: a,
      children: [],
      animatables: r,
      animations: s,
      duration: o.duration,
      delay: o.delay,
      endDelay: o.endDelay,
    })
  );
}
var Nn = [],
  r_ = (function () {
    var i;
    function e() {
      !i &&
        (!Qd() || !dt.suspendWhenDocumentHidden) &&
        Nn.length > 0 &&
        (i = requestAnimationFrame(t));
    }
    function t(r) {
      for (var s = Nn.length, o = 0; o < s; ) {
        var a = Nn[o];
        a.paused ? (Nn.splice(o, 1), s--) : (a.tick(r), o++);
      }
      i = o > 0 ? requestAnimationFrame(t) : void 0;
    }
    function n() {
      !dt.suspendWhenDocumentHidden ||
        (Qd()
          ? (i = cancelAnimationFrame(i))
          : (Nn.forEach(function (r) {
              return r._onDocumentVisibility();
            }),
            r_()));
    }
    return (
      typeof document < 'u' && document.addEventListener('visibilitychange', n),
      e
    );
  })();
function Qd() {
  return !!document && document.hidden;
}
function dt(i) {
  i === void 0 && (i = {});
  var e = 0,
    t = 0,
    n = 0,
    r,
    s = 0,
    o = null;
  function a(x) {
    var v =
      window.Promise &&
      new Promise(function (y) {
        return (o = y);
      });
    return (x.finished = v), v;
  }
  var l = rA(i);
  a(l);
  function c() {
    var x = l.direction;
    x !== 'alternate' && (l.direction = x !== 'normal' ? 'normal' : 'reverse'),
      (l.reversed = !l.reversed),
      r.forEach(function (v) {
        return (v.reversed = l.reversed);
      });
  }
  function u(x) {
    return l.reversed ? l.duration - x : x;
  }
  function f() {
    (e = 0), (t = u(l.currentTime) * (1 / dt.speed));
  }
  function h(x, v) {
    v && v.seek(x - v.timelineOffset);
  }
  function d(x) {
    if (l.reversePlayback) for (var y = s; y--; ) h(x, r[y]);
    else for (var v = 0; v < s; v++) h(x, r[v]);
  }
  function g(x) {
    for (var v = 0, y = l.animations, b = y.length; v < b; ) {
      var T = y[v],
        R = T.animatable,
        M = T.tweens,
        w = M.length - 1,
        D = M[w];
      w &&
        (D =
          ml(M, function (F) {
            return x < F.end;
          })[0] || D);
      for (
        var q = Jn(x - D.start - D.delay, 0, D.duration) / D.duration,
          Q = isNaN(q) ? 1 : D.easing(q),
          k = D.to.strings,
          I = D.round,
          $ = [],
          Z = D.to.numbers.length,
          Y = void 0,
          V = 0;
        V < Z;
        V++
      ) {
        var z = void 0,
          H = D.to.numbers[V],
          ue = D.from.numbers[V] || 0;
        D.isPath
          ? (z = ZE(D.value, Q * H, D.isPathTargetInsideSVG))
          : (z = ue + Q * (H - ue)),
          I && ((D.isColor && V > 2) || (z = Math.round(z * I) / I)),
          $.push(z);
      }
      var te = k.length;
      if (!te) Y = $[0];
      else {
        Y = k[0];
        for (var de = 0; de < te; de++) {
          k[de];
          var xe = k[de + 1],
            G = $[de];
          isNaN(G) || (xe ? (Y += G + xe) : (Y += G + ' '));
        }
      }
      t_[T.type](R.target, T.property, Y, R.transforms),
        (T.currentValue = Y),
        v++;
    }
  }
  function p(x) {
    l[x] && !l.passThrough && l[x](l);
  }
  function m() {
    l.remaining && l.remaining !== !0 && l.remaining--;
  }
  function _(x) {
    var v = l.duration,
      y = l.delay,
      b = v - l.endDelay,
      T = u(x);
    (l.progress = Jn((T / v) * 100, 0, 100)),
      (l.reversePlayback = T < l.currentTime),
      r && d(T),
      !l.began && l.currentTime > 0 && ((l.began = !0), p('begin')),
      !l.loopBegan && l.currentTime > 0 && ((l.loopBegan = !0), p('loopBegin')),
      T <= y && l.currentTime !== 0 && g(0),
      ((T >= b && l.currentTime !== v) || !v) && g(v),
      T > y && T < b
        ? (l.changeBegan ||
            ((l.changeBegan = !0), (l.changeCompleted = !1), p('changeBegin')),
          p('change'),
          g(T))
        : l.changeBegan &&
          ((l.changeCompleted = !0), (l.changeBegan = !1), p('changeComplete')),
      (l.currentTime = Jn(T, 0, v)),
      l.began && p('update'),
      x >= v &&
        ((t = 0),
        m(),
        l.remaining
          ? ((e = n),
            p('loopComplete'),
            (l.loopBegan = !1),
            l.direction === 'alternate' && c())
          : ((l.paused = !0),
            l.completed ||
              ((l.completed = !0),
              p('loopComplete'),
              p('complete'),
              !l.passThrough && 'Promise' in window && (o(), a(l)))));
  }
  return (
    (l.reset = function () {
      var x = l.direction;
      (l.passThrough = !1),
        (l.currentTime = 0),
        (l.progress = 0),
        (l.paused = !0),
        (l.began = !1),
        (l.loopBegan = !1),
        (l.changeBegan = !1),
        (l.completed = !1),
        (l.changeCompleted = !1),
        (l.reversePlayback = !1),
        (l.reversed = x === 'reverse'),
        (l.remaining = l.loop),
        (r = l.children),
        (s = r.length);
      for (var v = s; v--; ) l.children[v].reset();
      ((l.reversed && l.loop !== !0) || (x === 'alternate' && l.loop === 1)) &&
        l.remaining++,
        g(l.reversed ? l.duration : 0);
    }),
    (l._onDocumentVisibility = f),
    (l.set = function (x, v) {
      return n_(x, v), l;
    }),
    (l.tick = function (x) {
      (n = x), e || (e = n), _((n + (t - e)) * dt.speed);
    }),
    (l.seek = function (x) {
      _(u(x));
    }),
    (l.pause = function () {
      (l.paused = !0), f();
    }),
    (l.play = function () {
      !l.paused ||
        (l.completed && l.reset(), (l.paused = !1), Nn.push(l), f(), r_());
    }),
    (l.reverse = function () {
      c(), (l.completed = !l.reversed), f();
    }),
    (l.restart = function () {
      l.reset(), l.play();
    }),
    (l.remove = function (x) {
      var v = mf(x);
      s_(v, l);
    }),
    l.reset(),
    l.autoplay && l.play(),
    l
  );
}
function ep(i, e) {
  for (var t = e.length; t--; ) lf(i, e[t].animatable.target) && e.splice(t, 1);
}
function s_(i, e) {
  var t = e.animations,
    n = e.children;
  ep(i, t);
  for (var r = n.length; r--; ) {
    var s = n[r],
      o = s.animations;
    ep(i, o), !o.length && !s.children.length && n.splice(r, 1);
  }
  !t.length && !n.length && e.pause();
}
function sA(i) {
  for (var e = mf(i), t = Nn.length; t--; ) {
    var n = Nn[t];
    s_(e, n);
  }
}
function oA(i, e) {
  e === void 0 && (e = {});
  var t = e.direction || 'normal',
    n = e.easing ? af(e.easing) : null,
    r = e.grid,
    s = e.axis,
    o = e.from || 0,
    a = o === 'first',
    l = o === 'center',
    c = o === 'last',
    u = Re.arr(i),
    f = parseFloat(u ? i[0] : i),
    h = u ? parseFloat(i[1]) : 0,
    d = vi(u ? i[1] : i) || 0,
    g = e.start || 0 + (u ? f : 0),
    p = [],
    m = 0;
  return function (_, x, v) {
    if ((a && (o = 0), l && (o = (v - 1) / 2), c && (o = v - 1), !p.length)) {
      for (var y = 0; y < v; y++) {
        if (!r) p.push(Math.abs(o - y));
        else {
          var b = l ? (r[0] - 1) / 2 : o % r[0],
            T = l ? (r[1] - 1) / 2 : Math.floor(o / r[0]),
            R = y % r[0],
            M = Math.floor(y / r[0]),
            w = b - R,
            D = T - M,
            q = Math.sqrt(w * w + D * D);
          s === 'x' && (q = -w), s === 'y' && (q = -D), p.push(q);
        }
        m = Math.max.apply(Math, p);
      }
      n &&
        (p = p.map(function (k) {
          return n(k / m) * m;
        })),
        t === 'reverse' &&
          (p = p.map(function (k) {
            return s ? (k < 0 ? k * -1 : -k) : Math.abs(m - k);
          }));
    }
    var Q = u ? (h - f) / m : f;
    return g + Q * (Math.round(p[x] * 100) / 100) + d;
  };
}
function aA(i) {
  i === void 0 && (i = {});
  var e = dt(i);
  return (
    (e.duration = 0),
    (e.add = function (t, n) {
      var r = Nn.indexOf(e),
        s = e.children;
      r > -1 && Nn.splice(r, 1);
      function o(h) {
        h.passThrough = !0;
      }
      for (var a = 0; a < s.length; a++) o(s[a]);
      var l = _l(t, uu(of, i));
      l.targets = l.targets || i.targets;
      var c = e.duration;
      (l.autoplay = !1),
        (l.direction = e.direction),
        (l.timelineOffset = Re.und(n) ? c : df(n, c)),
        o(e),
        e.seek(l.timelineOffset);
      var u = dt(l);
      o(u), s.push(u);
      var f = i_(s, i);
      return (
        (e.delay = f.delay),
        (e.endDelay = f.endDelay),
        (e.duration = f.duration),
        e.seek(0),
        e.reset(),
        e.autoplay && e.play(),
        e
      );
    }),
    e
  );
}
dt.version = '3.2.1';
dt.speed = 1;
dt.suspendWhenDocumentHidden = !0;
dt.running = Nn;
dt.remove = sA;
dt.get = hf;
dt.set = n_;
dt.convertPx = uf;
dt.path = YE;
dt.setDashoffset = jE;
dt.stagger = oA;
dt.timeline = aA;
dt.easing = af;
dt.penner = Xg;
dt.random = function (i, e) {
  return Math.floor(Math.random() * (e - i + 1)) + i;
};
var lA =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  o_ = { exports: {} };
/*!
 * TagCloud.js v2.3.0
 * Copyright (c) 2016-2022 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function (i, e) {
  (function (t, n) {
    i.exports = n();
  })(lA, function () {
    function t(f, h) {
      if (!(f instanceof h))
        throw new TypeError('Cannot call a class as a function');
    }
    function n(f, h) {
      for (var d = 0; d < h.length; d++) {
        var g = h[d];
        (g.enumerable = g.enumerable || !1),
          (g.configurable = !0),
          'value' in g && (g.writable = !0),
          Object.defineProperty(f, g.key, g);
      }
    }
    function r(f, h, d) {
      return h && n(f.prototype, h), d && n(f, d), f;
    }
    function s(f, h, d) {
      return (
        h in f
          ? Object.defineProperty(f, h, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (f[h] = d),
        f
      );
    }
    function o() {
      return (
        (o =
          Object.assign ||
          function (f) {
            for (var h = 1; h < arguments.length; h++) {
              var d = arguments[h];
              for (var g in d)
                Object.prototype.hasOwnProperty.call(d, g) && (f[g] = d[g]);
            }
            return f;
          }),
        o.apply(this, arguments)
      );
    }
    function a(f, h) {
      var d = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h &&
          (g = g.filter(function (p) {
            return Object.getOwnPropertyDescriptor(f, p).enumerable;
          })),
          d.push.apply(d, g);
      }
      return d;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var d = arguments[h] != null ? arguments[h] : {};
        h % 2
          ? a(Object(d), !0).forEach(function (g) {
              s(f, g, d[g]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(d))
          : a(Object(d)).forEach(function (g) {
              Object.defineProperty(
                f,
                g,
                Object.getOwnPropertyDescriptor(d, g)
              );
            });
      }
      return f;
    }
    var c = (function () {
      function f() {
        var h =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : document.body,
          d = arguments.length > 1 ? arguments[1] : void 0,
          g = arguments.length > 2 ? arguments[2] : void 0;
        t(this, f);
        var p = this;
        if (!h || h.nodeType !== 1) return new Error('Incorrect element type');
        (p.$container = h),
          (p.texts = d || []),
          (p.config = l(l({}, f._defaultConfig), g || {})),
          (p.radius = p.config.radius),
          (p.depth = 2 * p.radius),
          (p.size = 1.5 * p.radius),
          (p.maxSpeed = f._getMaxSpeed(p.config.maxSpeed)),
          (p.initSpeed = f._getInitSpeed(p.config.initSpeed)),
          (p.direction = p.config.direction),
          (p.keep = p.config.keep),
          (p.paused = !1),
          p._createElment(),
          p._init(),
          f.list.push({ el: p.$el, container: h, instance: p });
      }
      return (
        r(
          f,
          [
            {
              key: '_createElment',
              value: function () {
                var d = this,
                  g = document.createElement('div');
                (g.className = d.config.containerClass),
                  d.config.useContainerInlineStyles &&
                    ((g.style.position = 'relative'),
                    (g.style.width = ''.concat(2 * d.radius, 'px')),
                    (g.style.height = ''.concat(2 * d.radius, 'px'))),
                  (d.items = []),
                  d.texts.forEach(function (p, m) {
                    var _ = d._createTextItem(p, m);
                    g.appendChild(_.el), d.items.push(_);
                  }),
                  d.$container.appendChild(g),
                  (d.$el = g);
              },
            },
            {
              key: '_createTextItem',
              value: function (d) {
                var g =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0,
                  p = this,
                  m = document.createElement('span');
                if (
                  ((m.className = p.config.itemClass),
                  p.config.useItemInlineStyles)
                ) {
                  (m.style.willChange = 'transform, opacity, filter'),
                    (m.style.position = 'absolute'),
                    (m.style.top = '50%'),
                    (m.style.left = '50%'),
                    (m.style.zIndex = g + 1),
                    (m.style.filter = 'alpha(opacity=0)'),
                    (m.style.opacity = 0);
                  var _ = '50% 50%';
                  (m.style.WebkitTransformOrigin = _),
                    (m.style.MozTransformOrigin = _),
                    (m.style.OTransformOrigin = _),
                    (m.style.transformOrigin = _);
                  var x = 'translate3d(-50%, -50%, 0) scale(1)';
                  (m.style.WebkitTransform = x),
                    (m.style.MozTransform = x),
                    (m.style.OTransform = x),
                    (m.style.transform = x);
                }
                return (m.innerText = d), l({ el: m }, p._computePosition(g));
              },
            },
            {
              key: '_computePosition',
              value: function (d) {
                var g =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1,
                  p = this,
                  m = p.texts.length;
                g && (d = Math.floor(Math.random() * (m + 1)));
                var _ = Math.acos(-1 + (2 * d + 1) / m),
                  x = Math.sqrt((m + 1) * Math.PI) * _;
                return {
                  x: (p.size * Math.cos(x) * Math.sin(_)) / 2,
                  y: (p.size * Math.sin(x) * Math.sin(_)) / 2,
                  z: (p.size * Math.cos(_)) / 2,
                };
              },
            },
            {
              key: '_requestInterval',
              value: function (d, g) {
                var p = (function () {
                    return window.requestAnimationFrame;
                  })(),
                  m = new Date().getTime(),
                  _ = {};
                function x() {
                  _.value = p(x);
                  var v = new Date().getTime(),
                    y = v - m;
                  y >= g && (d.call(), (m = new Date().getTime()));
                }
                return (_.value = p(x)), _;
              },
            },
            {
              key: '_init',
              value: function () {
                var d = this;
                (d.active = !1),
                  (d.mouseX0 =
                    d.initSpeed * Math.sin(d.direction * (Math.PI / 180))),
                  (d.mouseY0 =
                    -d.initSpeed * Math.cos(d.direction * (Math.PI / 180))),
                  (d.mouseX = d.mouseX0),
                  (d.mouseY = d.mouseY0);
                var g = window.matchMedia('(hover: hover)');
                (!g || g.matches) &&
                  (f._on(d.$el, 'mouseover', function () {
                    d.active = !0;
                  }),
                  f._on(d.$el, 'mouseout', function () {
                    d.active = !1;
                  }),
                  f._on(d.keep ? window : d.$el, 'mousemove', function (p) {
                    p = p || window.event;
                    var m = d.$el.getBoundingClientRect();
                    (d.mouseX = (p.clientX - (m.left + m.width / 2)) / 5),
                      (d.mouseY = (p.clientY - (m.top + m.height / 2)) / 5);
                  })),
                  d._next(),
                  (d.interval = d._requestInterval(function () {
                    d._next.call(d);
                  }, 10));
              },
            },
            {
              key: '_next',
              value: function () {
                var d = this;
                if (!d.paused) {
                  !d.keep &&
                    !d.active &&
                    ((d.mouseX =
                      Math.abs(d.mouseX - d.mouseX0) < 1
                        ? d.mouseX0
                        : (d.mouseX + d.mouseX0) / 2),
                    (d.mouseY =
                      Math.abs(d.mouseY - d.mouseY0) < 1
                        ? d.mouseY0
                        : (d.mouseY + d.mouseY0) / 2));
                  var g =
                      -(
                        Math.min(Math.max(-d.mouseY, -d.size), d.size) /
                        d.radius
                      ) * d.maxSpeed,
                    p =
                      (Math.min(Math.max(-d.mouseX, -d.size), d.size) /
                        d.radius) *
                      d.maxSpeed;
                  if (!(Math.abs(g) <= 0.01 && Math.abs(p) <= 0.01)) {
                    var m = Math.PI / 180,
                      _ = [
                        Math.sin(g * m),
                        Math.cos(g * m),
                        Math.sin(p * m),
                        Math.cos(p * m),
                      ];
                    d.items.forEach(function (x) {
                      var v = x.x,
                        y = x.y * _[1] + x.z * -_[0],
                        b = x.y * _[0] + x.z * _[1],
                        T = v * _[3] + b * _[2],
                        R = y,
                        M = b * _[3] - v * _[2],
                        w = (2 * d.depth) / (2 * d.depth + M);
                      (x.x = T), (x.y = R), (x.z = M), (x.scale = w.toFixed(3));
                      var D = w * w - 0.25;
                      D = (D > 1 ? 1 : D).toFixed(3);
                      var q = x.el,
                        Q = (x.x - q.offsetWidth / 2).toFixed(2),
                        k = (x.y - q.offsetHeight / 2).toFixed(2),
                        I = 'translate3d('
                          .concat(Q, 'px, ')
                          .concat(k, 'px, 0) scale(')
                          .concat(x.scale, ')');
                      (q.style.WebkitTransform = I),
                        (q.style.MozTransform = I),
                        (q.style.OTransform = I),
                        (q.style.transform = I),
                        (q.style.filter = 'alpha(opacity='.concat(
                          100 * D,
                          ')'
                        )),
                        (q.style.opacity = D);
                    });
                  }
                }
              },
            },
            {
              key: 'update',
              value: function (d) {
                var g = this;
                (g.texts = d || []),
                  g.texts.forEach(function (x, v) {
                    var y = g.items[v];
                    y ||
                      ((y = g._createTextItem(x, v)),
                      o(y, g._computePosition(v, !0)),
                      g.$el.appendChild(y.el),
                      g.items.push(y)),
                      (y.el.innerText = x);
                  });
                var p = g.texts.length,
                  m = g.items.length;
                if (p < m) {
                  var _ = g.items.splice(p, m - p);
                  _.forEach(function (x) {
                    g.$el.removeChild(x.el);
                  });
                }
              },
            },
            {
              key: 'destroy',
              value: function () {
                var d = this;
                d.interval = null;
                var g = f.list.findIndex(function (p) {
                  return p.el === d.$el;
                });
                g !== -1 && f.list.splice(g, 1),
                  d.$container && d.$el && d.$container.removeChild(d.$el);
              },
            },
            {
              key: 'pause',
              value: function () {
                var d = this;
                d.paused = !0;
              },
            },
            {
              key: 'resume',
              value: function () {
                var d = this;
                d.paused = !1;
              },
            },
          ],
          [
            {
              key: '_on',
              value: function (d, g, p, m) {
                d.addEventListener
                  ? d.addEventListener(g, p, m)
                  : d.attachEvent
                  ? d.attachEvent('on'.concat(g), p)
                  : (d['on'.concat(g)] = p);
              },
            },
          ]
        ),
        f
      );
    })();
    (c.list = []),
      (c._defaultConfig = {
        radius: 100,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: !0,
        useContainerInlineStyles: !0,
        useItemInlineStyles: !0,
        containerClass: 'tagcloud',
        itemClass: 'tagcloud--item',
      }),
      (c._getMaxSpeed = function (f) {
        return { slow: 0.5, normal: 1, fast: 2 }[f] || 1;
      }),
      (c._getInitSpeed = function (f) {
        return { slow: 16, normal: 32, fast: 80 }[f] || 32;
      });
    var u = function (f, h, d) {
      typeof f == 'string' && (f = document.querySelectorAll(f)),
        f.forEach || (f = [f]);
      var g = [];
      return (
        f.forEach(function (p) {
          p && g.push(new c(p, h, d));
        }),
        g.length <= 1 ? g[0] : g
      );
    };
    return u;
  });
})(o_);
const a_ = o_.exports,
  cA = Vn({
    __name: 'TagCloud',
    props: {
      name: { type: String, required: !0, default: 'tag' },
      data: { type: Array, required: !1, default: () => [] },
      options: { type: Object, required: !1, default: () => ({}) },
    },
    setup(i) {
      const e = i,
        t = [
          '3D',
          'TagCloud',
          'JavaScript',
          'CSS3',
          'Animation',
          'Interactive',
          'Mouse',
          'Rolling',
          'Sphere',
          '6KB',
          'v2.x',
        ],
        n = Tt(() => `${e.name} tag-cloud`),
        r = () => {
          const o = document.querySelectorAll(`.${e.name} .tagcloud--item`);
          for (const a of o) {
            const l = Math.floor(Math.random() * 3);
            (a.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][l]),
              (a.style.fontSize = ['13px', '16px', '19px'][l]),
              (a.style.fontWeight = 'bolder');
          }
        },
        s = () => {
          const o = {
            useContainerInlineStyles: !1,
            radius: 120,
            keep: !0,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            ...e.options,
          };
          a_(
            [document.querySelector(`.${e.name}`)],
            e.data.length ? e.data : t,
            o
          ),
            r();
        };
      return (
        Zs(() => {
          s();
        }),
        (o, a) => (ft(), _t('div', { class: Go(yt(n)) }, null, 2))
      );
    },
  });
const uA = pl(cA, [['__scopeId', 'data-v-d9535cb1']]),
  fA = { class: 'wheel-wrapper' },
  hA = { class: 'wheel' },
  dA = { class: 'wheel-dimension' },
  pA = { class: 'wheel-text' },
  mA = { class: 'wheel-core' },
  gA = { class: 'wheel-text' },
  _A = Vn({
    __name: 'Index2',
    setup(i) {
      const e = xr(),
        t = xr();
      xr();
      const n = xr(),
        r = Ur({
          cR: 200,
          cCount: 10,
          dR: 400,
          dCount: 8,
          textWidth: 100,
          textHeight: 50,
        }),
        s = Tt(() =>
          $d(r.cR, zr.length).map((a, l) => ({
            x: a.x - r.textWidth / 2,
            y: a.y - r.textHeight / 2,
            fontSize: 12 * (Math.random() + 1),
            value: zr[l],
          }))
        ),
        o = Tt(() =>
          $d(r.dR, Lr.length).map((a, l) => ({
            ...a,
            x: a.x - r.textWidth / 2,
            y: a.y - r.textHeight / 2,
            value: Lr[l],
          }))
        );
      return (a, l) => (
        ft(),
        _t('div', fA, [
          nt('div', hA, [
            nt('div', dA, [
              nt(
                'div',
                {
                  ref_key: 'wheelDimensionRef',
                  ref: n,
                  class: 'dimension-content',
                },
                [
                  nt('div', pA, [
                    (ft(!0),
                    _t(
                      zt,
                      null,
                      Ls(
                        yt(o),
                        (c, u) => (
                          ft(),
                          _t(
                            'div',
                            {
                              key: u,
                              class: 'text',
                              style: Xi({ top: `${c.y}px`, left: `${c.x}px` }),
                            },
                            Cs(c.value),
                            5
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                512
              ),
            ]),
            nt('div', mA, [
              nt(
                'div',
                { ref_key: 'wheelCoreRef', ref: e, class: 'core-content' },
                [
                  nt('div', gA, [
                    (ft(!0),
                    _t(
                      zt,
                      null,
                      Ls(
                        yt(s),
                        (c, u) => (
                          ft(),
                          _t(
                            'div',
                            {
                              key: u,
                              class: 'text',
                              style: Xi({
                                top: `${c.y}px`,
                                left: `${c.x}px`,
                                fontSize: `${c.fontSize}px`,
                              }),
                            },
                            Cs(c.value),
                            5
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                512
              ),
            ]),
            nt(
              'div',
              { ref_key: 'wheelWordRef', ref: t, class: 'wheel-word' },
              [Et(uA, { data: yt(Rr) }, null, 8, ['data'])],
              512
            ),
          ]),
        ])
      );
    },
  });
const xA = Vn({
  __name: 'TagCloud',
  props: {
    name: { type: String, required: !0, default: 'tag' },
    data: { type: Array, required: !1, default: () => [] },
    options: { type: Object, required: !1, default: () => ({}) },
  },
  setup(i) {
    const e = i,
      t = [
        '3D',
        'TagCloud',
        'JavaScript',
        'CSS3',
        'Animation',
        'Interactive',
        'Mouse',
        'Rolling',
        'Sphere',
        '6KB',
        'v2.x',
      ],
      n = Tt(() => `${e.name} tag-cloud`),
      r = () => {
        const o = document.querySelectorAll(`.${e.name} .tagcloud--item`);
        for (const a of o) {
          const l = Math.floor(Math.random() * 3);
          (a.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][l]),
            (a.style.fontSize = ['16px', '20px', '24px'][l]);
        }
      },
      s = () => {
        const o = { radius: 120, keep: !0, ...e.options };
        a_(
          [document.querySelector(`.${e.name}`)],
          e.data.length ? e.data : t,
          o
        ),
          r();
      };
    return (
      Zs(() => {
        s();
      }),
      (o, a) => (ft(), _t('div', { class: Go(yt(n)) }, null, 2))
    );
  },
});
const yc = pl(xA, [['__scopeId', 'data-v-28968002']]),
  vA = { class: 'sphere-wrapper' },
  yA = { class: 'content' },
  MA = { class: 'dimension-cloud' },
  bA = { class: 'core-cloud' },
  SA = { class: 'word-cloud' },
  wA = Vn({
    __name: 'Index',
    setup(i) {
      return (e, t) => (
        ft(),
        _t('div', vA, [
          nt('div', yA, [
            nt('div', MA, [
              Et(
                yc,
                {
                  name: 'dimension',
                  data: yt(Lr),
                  options: { radius: 100, direction: 225 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            nt('div', bA, [
              Et(
                yc,
                {
                  name: 'core',
                  data: yt(Rr),
                  options: { radius: 200, direction: 90 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            nt('div', SA, [
              Et(
                yc,
                { name: 'word', data: yt(zr), options: { radius: 100 } },
                null,
                8,
                ['data']
              ),
            ]),
          ]),
        ])
      );
    },
  });
const TA = i => (i * Math.PI) / 180,
  tp = (i, e) => {
    const t = TA(360 / e),
      n = [];
    for (let r = 0; r < e; r += 1)
      n.push({ x: i * Math.cos(t * r), y: i * Math.sin(t * r) });
    return n;
  },
  EA = { class: 'rotate' },
  AA = { class: 'content' },
  CA = { class: 'box' },
  PA = Vn({
    __name: 'RotateImage',
    setup(i) {
      const e = xr([
          '\u5E74\u4EFD',
          '\u5B63\u5EA6',
          '\u540C\u6BD4',
          '\u73AF\u6BD4',
          '\u6392\u540D',
          '\u5DEE\u5F02',
          '\u5229\u6DA6',
        ]),
        t = n => ({
          transform: `rotateY(${
            (360 / e.value.length) * n
          }deg) rotateZ(-90deg) translateZ(160px)`,
        });
      return (n, r) => (
        ft(),
        _t('div', EA, [
          nt('div', AA, [
            nt('div', CA, [
              (ft(!0),
              _t(
                zt,
                null,
                Ls(
                  e.value,
                  (s, o) => (
                    ft(),
                    _t(
                      'div',
                      { key: o, class: 'circle', style: Xi(t(o)) },
                      Cs(s),
                      5
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
        ])
      );
    },
  });
const RA = pl(PA, [['__scopeId', 'data-v-904bfc5a']]),
  LA = { class: 'ring-wrapper' },
  DA = { class: 'wheel' },
  IA = { class: 'ring core-ring' },
  OA = { ref: 'wheelCoreRef', class: 'content dimension-content' },
  FA = { class: 'wheel-text' },
  NA = { class: 'ring word-ring' },
  zA = { ref: 'wheelCoreRef', class: 'content word-content' },
  UA = { class: 'wheel-text' },
  BA = Vn({
    __name: 'Index',
    setup(i) {
      const e = Ur({ cR: 200, cCount: 10, textWidth: 100, textHeight: 50 }),
        t = Tt(() =>
          tp(e.cR, e.cCount).map((r, s) => {
            const o = 12 * (Math.random() + 1),
              a = zr[s].length * o;
            return {
              x: r.x - a / 2,
              y: r.y - e.textHeight / 2,
              fontSize: o,
              width: a,
              value: zr[s],
            };
          })
        ),
        n = Tt(() =>
          tp(e.cR, Rr.length).map((r, s) => {
            const o = 12 * (Math.random() + 1),
              a = Rr[s].length * o;
            return {
              x: r.x - a / 2,
              y: r.y - e.textHeight / 2,
              fontSize: o,
              width: a,
              value: Rr[s],
            };
          })
        );
      return (r, s) => (
        ft(),
        _t('div', LA, [
          nt('div', DA, [
            nt('div', IA, [
              nt(
                'div',
                OA,
                [
                  nt('div', FA, [
                    (ft(!0),
                    _t(
                      zt,
                      null,
                      Ls(
                        yt(t),
                        (o, a) => (
                          ft(),
                          _t(
                            'div',
                            {
                              key: a,
                              class: 'text',
                              style: Xi({
                                top: `${o.y}px`,
                                left: `${o.x}px`,
                                width: `${o.width}px`,
                                fontSize: `${o.fontSize}px`,
                              }),
                            },
                            Cs(o.value),
                            5
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                512
              ),
            ]),
            nt('div', NA, [
              nt(
                'div',
                zA,
                [
                  nt('div', UA, [
                    (ft(!0),
                    _t(
                      zt,
                      null,
                      Ls(
                        yt(n),
                        (o, a) => (
                          ft(),
                          _t(
                            'div',
                            {
                              key: a,
                              class: 'text',
                              style: Xi({
                                top: `${o.y}px`,
                                left: `${o.x}px`,
                                width: `${o.width}px`,
                                fontSize: `${o.fontSize}px`,
                              }),
                            },
                            Cs(o.value),
                            5
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                512
              ),
            ]),
            Et(RA),
          ]),
        ])
      );
    },
  });
const np = i => i * (Math.PI / 180),
  kA = (i, e) => {
    let t = !1,
      n = { x: 0, y: 0 };
    const r = (s, o) => {
      const a = new Yi().setFromEuler(
        new Ks(np(o.y * 0.4), np(o.x * 0.4), 0, 'XYZ')
      );
      s.quaternion.multiplyQuaternions(a, s.quaternion);
    };
    (i.onmousedown = () => {
      t = !0;
    }),
      (i.onmouseup = () => {
        t = !1;
      }),
      (i.onmousemove = s => {
        const o = { x: s.offsetX - n.x, y: s.offsetY - n.y };
        t && r(e, o), (n = { x: s.offsetX, y: s.offsetY });
      });
  },
  VA = { class: 'text-cloud' },
  GA = Vn({
    __name: 'IndexRotate',
    setup(i) {
      const e = {
          container: null,
          width: 0,
          height: 0,
          scene: null,
          camera: null,
          renderer: null,
          controls: null,
          arcCurve: null,
          textGroup: null,
          dimensionGroup: null,
        },
        t = () => {
          var h, d;
          (e.container = document.querySelector('.text-cloud')),
            (e.width = (h = e.container.offsetWidth) != null ? h : 0),
            (e.height = (d = e.container.offsetHeight) != null ? d : 0),
            (e.scene = new Bm());
        },
        n = () => {
          (e.camera = new on(75, e.width / e.height, 0.1, 1e3)),
            e.camera.position.set(0, 0, 100);
        },
        r = () => {
          var d;
          const h = window.devicePixelRatio || 1;
          (e.renderer = new Bu({ antialias: !0, alpha: !0 })),
            e.renderer.setClearColor(16777215),
            e.renderer.setSize(e.width, e.height),
            e.renderer.setPixelRatio(h),
            (e.renderer.shadowMap.enabled = !0),
            (d = e.container) == null || d.appendChild(e.renderer.domElement);
        },
        s = (h, d, g, p, m) => {
          const _ = window.devicePixelRatio || 1,
            x = document.createElement('canvas'),
            v = x.getContext('2d');
          v.font = `${d || 12}px Arial`;
          const y = 10,
            b = v.measureText(h).width + y * 2,
            T = d + y * 2,
            R = p || (b > 100 ? b : 100),
            M = m || (T > 50 ? T : 50);
          return (
            (x.width = R * _),
            (x.height = M * _),
            v.scale(_, _),
            v.clearRect(0, 0, x.width, x.height),
            v.translate(R / 2, M / 2),
            (v.font = `${d || 12}px Arial`),
            (v.fillStyle = g[Math.floor(Math.random() * g.length)]),
            (v.textBaseline = 'middle'),
            (v.textAlign = 'center'),
            v.fillText(h, 0, 0),
            x
          );
        },
        o = (h, d = 14, g) => {
          const p = s(h, d, g),
            m = p.width / p.height,
            _ = new Kw(p),
            x = new ku({ map: _ }),
            v = new Vm(x);
          return v.scale.set(5.5 * m, 5.5, 1), v;
        },
        a = () => {
          e.textGroup = new Ni();
          for (let h = 0, d = Yd.length; h < d; h++) {
            const g = o(Yd[h], (Math.random() + 1) * 14, [
                '#ff9974',
                '#4c84ff',
                '#35ccd4',
              ]),
              p = Math.acos(-1 + (2 * h) / d),
              m = Math.sqrt(d * Math.PI) * p;
            g.position.setFromSphericalCoords(35, p, m), e.textGroup.add(g);
          }
          e.scene.add(e.textGroup);
        },
        l = () => {
          const h = new jt(),
            d = new eT(0, 0, 60, 0, 2 * Math.PI, !1),
            g = d.getPoints(100);
          h.setFromPoints(g);
          const p = new Vu({ color: 8947848 });
          (e.dimensionGroup = new Ni()),
            (e.arcCurve = new jc(h, p)),
            e.dimensionGroup.add(new jc(h, p));
          for (let m = 0, _ = Lr.length; m < _; m++) {
            const x = o(Lr[m], 20, ['#ff9974']),
              { x: v, y } = d.getPointAt((1 / Lr.length) * m);
            x.position.set(v, y, 0), e.dimensionGroup.add(x);
          }
          (e.dimensionGroup.rotation.x = kh.degToRad(-85)),
            (e.dimensionGroup.rotation.y = kh.degToRad(-15)),
            e.scene.add(e.dimensionGroup);
        };
      let c = new Date().getTime();
      const u = () => {
          let h = new Date().getTime(),
            d = h - c;
          e.textGroup.rotateY(-1e-4 * d),
            e.textGroup.rotateX(1e-4 * d),
            e.dimensionGroup.rotateZ(2e-4 * d),
            e.renderer.render(e.scene, e.camera),
            (c = h),
            requestAnimationFrame(u);
        },
        f = () => {
          t(),
            n(),
            r(),
            a(),
            l(),
            u(),
            console.log(e),
            kA(e.container, e.textGroup);
        };
      return (
        Zs(() => {
          f();
        }),
        (h, d) => (ft(), _t('div', VA))
      );
    },
  });
const l_ = [
    { path: '/earth', name: 'Earth', component: DE },
    { path: '/textWheel', name: 'TextWheel', component: _A },
    { path: '/textSphere', name: 'TextSphere', component: wA },
    { path: '/textRing', name: 'TextRing', component: BA },
    { path: '/textCloud', name: 'TextCloud', component: GA },
  ],
  HA = zv({
    history: tv(),
    routes: [{ path: '/', redirect: '/earth' }, ...l_],
  }),
  WA = { class: 'wrapper' },
  qA = { class: 'container' },
  XA = Vn({
    __name: 'App',
    setup(i) {
      return (e, t) => (
        ft(),
        _t('div', WA, [
          nt('nav', null, [
            (ft(!0),
            _t(
              zt,
              null,
              Ls(
                yt(l_),
                (n, r) => (
                  ft(),
                  J0(
                    yt(pm),
                    { key: n.name, to: n.path },
                    {
                      default: Fp(() => [
                        Qp(Cs(`${r ? ' | ' : ''}${n.name}`), 1),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['to']
                  )
                )
              ),
              128
            )),
          ]),
          nt('section', qA, [Et(yt(mm))]),
        ])
      );
    },
  });
const gf = Dx(XA);
gf.use(Nx());
gf.use(HA);
gf.mount('#app');
