var a_ = Object.defineProperty;
var l_ = (i, e, t) =>
  e in i
    ? a_(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Gn = (i, e, t) => (l_(i, typeof e != 'symbol' ? e + '' : e, t), t);
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
function cu(i, e) {
  const t = Object.create(null),
    n = i.split(',');
  for (let r = 0; r < n.length; r++) t[n[r]] = !0;
  return e ? r => !!t[r.toLowerCase()] : r => !!t[r];
}
const c_ =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  u_ = cu(c_);
function Qd(i) {
  return !!i || i === '';
}
function ds(i) {
  if (Fe(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
      const n = i[t],
        r = Mt(n) ? d_(n) : ds(n);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  } else {
    if (Mt(i)) return i;
    if (it(i)) return i;
  }
}
const f_ = /;(?![^(]*\))/g,
  h_ = /:(.+)/;
function d_(i) {
  const e = {};
  return (
    i.split(f_).forEach(t => {
      if (t) {
        const n = t.split(h_);
        n.length > 1 && (e[n[0].trim()] = n[1].trim());
      }
    }),
    e
  );
}
function qa(i) {
  let e = '';
  if (Mt(i)) e = i;
  else if (Fe(i))
    for (let t = 0; t < i.length; t++) {
      const n = qa(i[t]);
      n && (e += n + ' ');
    }
  else if (it(i)) for (const t in i) i[t] && (e += t + ' ');
  return e.trim();
}
const _c = i =>
    Mt(i)
      ? i
      : i == null
      ? ''
      : Fe(i) || (it(i) && (i.toString === ip || !Ue(i.toString)))
      ? JSON.stringify(i, ep, 2)
      : String(i),
  ep = (i, e) =>
    e && e.__v_isRef
      ? ep(i, e.value)
      : ms(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (t, [n, r]) => ((t[`${n} =>`] = r), t),
            {}
          ),
        }
      : tp(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : it(e) && !Fe(e) && !rp(e)
      ? String(e)
      : e,
  tt = {},
  ps = [],
  Un = () => {},
  p_ = () => !1,
  m_ = /^on[^a-z]/,
  Xa = i => m_.test(i),
  uu = i => i.startsWith('onUpdate:'),
  Ot = Object.assign,
  fu = (i, e) => {
    const t = i.indexOf(e);
    t > -1 && i.splice(t, 1);
  },
  g_ = Object.prototype.hasOwnProperty,
  Ge = (i, e) => g_.call(i, e),
  Fe = Array.isArray,
  ms = i => ja(i) === '[object Map]',
  tp = i => ja(i) === '[object Set]',
  Ue = i => typeof i == 'function',
  Mt = i => typeof i == 'string',
  hu = i => typeof i == 'symbol',
  it = i => i !== null && typeof i == 'object',
  np = i => it(i) && Ue(i.then) && Ue(i.catch),
  ip = Object.prototype.toString,
  ja = i => ip.call(i),
  __ = i => ja(i).slice(8, -1),
  rp = i => ja(i) === '[object Object]',
  du = i => Mt(i) && i !== 'NaN' && i[0] !== '-' && '' + parseInt(i, 10) === i,
  ga = cu(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Ya = i => {
    const e = Object.create(null);
    return t => e[t] || (e[t] = i(t));
  },
  x_ = /-(\w)/g,
  Ss = Ya(i => i.replace(x_, (e, t) => (t ? t.toUpperCase() : ''))),
  v_ = /\B([A-Z])/g,
  ks = Ya(i => i.replace(v_, '-$1').toLowerCase()),
  sp = Ya(i => i.charAt(0).toUpperCase() + i.slice(1)),
  gl = Ya(i => (i ? `on${sp(i)}` : '')),
  _o = (i, e) => !Object.is(i, e),
  _l = (i, e) => {
    for (let t = 0; t < i.length; t++) i[t](e);
  },
  Aa = (i, e, t) => {
    Object.defineProperty(i, e, { configurable: !0, enumerable: !1, value: t });
  },
  y_ = i => {
    const e = parseFloat(i);
    return isNaN(e) ? i : e;
  };
let _f;
const M_ = () =>
  _f ||
  (_f =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let Wn;
class op {
  constructor(e = !1) {
    (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Wn),
      !e && Wn && (this.index = (Wn.scopes || (Wn.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const t = Wn;
      try {
        return (Wn = this), e();
      } finally {
        Wn = t;
      }
    }
  }
  on() {
    Wn = this;
  }
  off() {
    Wn = this.parent;
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
function b_(i) {
  return new op(i);
}
function S_(i, e = Wn) {
  e && e.active && e.effects.push(i);
}
const pu = i => {
    const e = new Set(i);
    return (e.w = 0), (e.n = 0), e;
  },
  ap = i => (i.w & qi) > 0,
  lp = i => (i.n & qi) > 0,
  w_ = ({ deps: i }) => {
    if (i.length) for (let e = 0; e < i.length; e++) i[e].w |= qi;
  },
  T_ = i => {
    const { deps: e } = i;
    if (e.length) {
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        ap(r) && !lp(r) ? r.delete(i) : (e[t++] = r),
          (r.w &= ~qi),
          (r.n &= ~qi);
      }
      e.length = t;
    }
  },
  xc = new WeakMap();
let to = 0,
  qi = 1;
const vc = 30;
let In;
const vr = Symbol(''),
  yc = Symbol('');
class mu {
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      S_(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let e = In,
      t = Ui;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = In),
        (In = this),
        (Ui = !0),
        (qi = 1 << ++to),
        to <= vc ? w_(this) : xf(this),
        this.fn()
      );
    } finally {
      to <= vc && T_(this),
        (qi = 1 << --to),
        (In = this.parent),
        (Ui = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    In === this
      ? (this.deferStop = !0)
      : this.active &&
        (xf(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function xf(i) {
  const { deps: e } = i;
  if (e.length) {
    for (let t = 0; t < e.length; t++) e[t].delete(i);
    e.length = 0;
  }
}
let Ui = !0;
const cp = [];
function Vs() {
  cp.push(Ui), (Ui = !1);
}
function Gs() {
  const i = cp.pop();
  Ui = i === void 0 ? !0 : i;
}
function ln(i, e, t) {
  if (Ui && In) {
    let n = xc.get(i);
    n || xc.set(i, (n = new Map()));
    let r = n.get(t);
    r || n.set(t, (r = pu())), up(r);
  }
}
function up(i, e) {
  let t = !1;
  to <= vc ? lp(i) || ((i.n |= qi), (t = !ap(i))) : (t = !i.has(In)),
    t && (i.add(In), In.deps.push(i));
}
function _i(i, e, t, n, r, s) {
  const o = xc.get(i);
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
          ? du(t) && a.push(o.get('length'))
          : (a.push(o.get(vr)), ms(i) && a.push(o.get(yc)));
        break;
      case 'delete':
        Fe(i) || (a.push(o.get(vr)), ms(i) && a.push(o.get(yc)));
        break;
      case 'set':
        ms(i) && a.push(o.get(vr));
        break;
    }
  if (a.length === 1) a[0] && Mc(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    Mc(pu(l));
  }
}
function Mc(i, e) {
  const t = Fe(i) ? i : [...i];
  for (const n of t) n.computed && vf(n);
  for (const n of t) n.computed || vf(n);
}
function vf(i, e) {
  (i !== In || i.allowRecurse) && (i.scheduler ? i.scheduler() : i.run());
}
const E_ = cu('__proto__,__v_isRef,__isVue'),
  fp = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(i => i !== 'arguments' && i !== 'caller')
      .map(i => Symbol[i])
      .filter(hu)
  ),
  A_ = gu(),
  C_ = gu(!1, !0),
  P_ = gu(!0),
  yf = L_();
function L_() {
  const i = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(e => {
      i[e] = function (...t) {
        const n = Xe(this);
        for (let s = 0, o = this.length; s < o; s++) ln(n, 'get', s + '');
        const r = n[e](...t);
        return r === -1 || r === !1 ? n[e](...t.map(Xe)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(e => {
      i[e] = function (...t) {
        Vs();
        const n = Xe(this)[e].apply(this, t);
        return Gs(), n;
      };
    }),
    i
  );
}
function gu(i = !1, e = !1) {
  return function (n, r, s) {
    if (r === '__v_isReactive') return !i;
    if (r === '__v_isReadonly') return i;
    if (r === '__v_isShallow') return e;
    if (r === '__v_raw' && s === (i ? (e ? X_ : gp) : e ? mp : pp).get(n))
      return n;
    const o = Fe(n);
    if (!i && o && Ge(yf, r)) return Reflect.get(yf, r, s);
    const a = Reflect.get(n, r, s);
    return (hu(r) ? fp.has(r) : E_(r)) || (i || ln(n, 'get', r), e)
      ? a
      : Dt(a)
      ? o && du(r)
        ? a
        : a.value
      : it(a)
      ? i
        ? _p(a)
        : Hs(a)
      : a;
  };
}
const R_ = hp(),
  D_ = hp(!0);
function hp(i = !1) {
  return function (t, n, r, s) {
    let o = t[n];
    if (ws(o) && Dt(o) && !Dt(r)) return !1;
    if (
      !i &&
      (!Ca(r) && !ws(r) && ((o = Xe(o)), (r = Xe(r))),
      !Fe(t) && Dt(o) && !Dt(r))
    )
      return (o.value = r), !0;
    const a = Fe(t) && du(n) ? Number(n) < t.length : Ge(t, n),
      l = Reflect.set(t, n, r, s);
    return (
      t === Xe(s) && (a ? _o(r, o) && _i(t, 'set', n, r) : _i(t, 'add', n, r)),
      l
    );
  };
}
function I_(i, e) {
  const t = Ge(i, e);
  i[e];
  const n = Reflect.deleteProperty(i, e);
  return n && t && _i(i, 'delete', e, void 0), n;
}
function O_(i, e) {
  const t = Reflect.has(i, e);
  return (!hu(e) || !fp.has(e)) && ln(i, 'has', e), t;
}
function F_(i) {
  return ln(i, 'iterate', Fe(i) ? 'length' : vr), Reflect.ownKeys(i);
}
const dp = { get: A_, set: R_, deleteProperty: I_, has: O_, ownKeys: F_ },
  N_ = {
    get: P_,
    set(i, e) {
      return !0;
    },
    deleteProperty(i, e) {
      return !0;
    },
  },
  z_ = Ot({}, dp, { get: C_, set: D_ }),
  _u = i => i,
  $a = i => Reflect.getPrototypeOf(i);
function Bo(i, e, t = !1, n = !1) {
  i = i.__v_raw;
  const r = Xe(i),
    s = Xe(e);
  t || (e !== s && ln(r, 'get', e), ln(r, 'get', s));
  const { has: o } = $a(r),
    a = n ? _u : t ? Mu : xo;
  if (o.call(r, e)) return a(i.get(e));
  if (o.call(r, s)) return a(i.get(s));
  i !== r && i.get(e);
}
function ko(i, e = !1) {
  const t = this.__v_raw,
    n = Xe(t),
    r = Xe(i);
  return (
    e || (i !== r && ln(n, 'has', i), ln(n, 'has', r)),
    i === r ? t.has(i) : t.has(i) || t.has(r)
  );
}
function Vo(i, e = !1) {
  return (
    (i = i.__v_raw), !e && ln(Xe(i), 'iterate', vr), Reflect.get(i, 'size', i)
  );
}
function Mf(i) {
  i = Xe(i);
  const e = Xe(this);
  return $a(e).has.call(e, i) || (e.add(i), _i(e, 'add', i, i)), this;
}
function bf(i, e) {
  e = Xe(e);
  const t = Xe(this),
    { has: n, get: r } = $a(t);
  let s = n.call(t, i);
  s || ((i = Xe(i)), (s = n.call(t, i)));
  const o = r.call(t, i);
  return (
    t.set(i, e), s ? _o(e, o) && _i(t, 'set', i, e) : _i(t, 'add', i, e), this
  );
}
function Sf(i) {
  const e = Xe(this),
    { has: t, get: n } = $a(e);
  let r = t.call(e, i);
  r || ((i = Xe(i)), (r = t.call(e, i))), n && n.call(e, i);
  const s = e.delete(i);
  return r && _i(e, 'delete', i, void 0), s;
}
function wf() {
  const i = Xe(this),
    e = i.size !== 0,
    t = i.clear();
  return e && _i(i, 'clear', void 0, void 0), t;
}
function Go(i, e) {
  return function (n, r) {
    const s = this,
      o = s.__v_raw,
      a = Xe(o),
      l = e ? _u : i ? Mu : xo;
    return (
      !i && ln(a, 'iterate', vr), o.forEach((c, u) => n.call(r, l(c), l(u), s))
    );
  };
}
function Ho(i, e, t) {
  return function (...n) {
    const r = this.__v_raw,
      s = Xe(r),
      o = ms(s),
      a = i === 'entries' || (i === Symbol.iterator && o),
      l = i === 'keys' && o,
      c = r[i](...n),
      u = t ? _u : e ? Mu : xo;
    return (
      !e && ln(s, 'iterate', l ? yc : vr),
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
function bi(i) {
  return function (...e) {
    return i === 'delete' ? !1 : this;
  };
}
function U_() {
  const i = {
      get(s) {
        return Bo(this, s);
      },
      get size() {
        return Vo(this);
      },
      has: ko,
      add: Mf,
      set: bf,
      delete: Sf,
      clear: wf,
      forEach: Go(!1, !1),
    },
    e = {
      get(s) {
        return Bo(this, s, !1, !0);
      },
      get size() {
        return Vo(this);
      },
      has: ko,
      add: Mf,
      set: bf,
      delete: Sf,
      clear: wf,
      forEach: Go(!1, !0),
    },
    t = {
      get(s) {
        return Bo(this, s, !0);
      },
      get size() {
        return Vo(this, !0);
      },
      has(s) {
        return ko.call(this, s, !0);
      },
      add: bi('add'),
      set: bi('set'),
      delete: bi('delete'),
      clear: bi('clear'),
      forEach: Go(!0, !1),
    },
    n = {
      get(s) {
        return Bo(this, s, !0, !0);
      },
      get size() {
        return Vo(this, !0);
      },
      has(s) {
        return ko.call(this, s, !0);
      },
      add: bi('add'),
      set: bi('set'),
      delete: bi('delete'),
      clear: bi('clear'),
      forEach: Go(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(s => {
      (i[s] = Ho(s, !1, !1)),
        (t[s] = Ho(s, !0, !1)),
        (e[s] = Ho(s, !1, !0)),
        (n[s] = Ho(s, !0, !0));
    }),
    [i, t, e, n]
  );
}
const [B_, k_, V_, G_] = U_();
function xu(i, e) {
  const t = e ? (i ? G_ : V_) : i ? k_ : B_;
  return (n, r, s) =>
    r === '__v_isReactive'
      ? !i
      : r === '__v_isReadonly'
      ? i
      : r === '__v_raw'
      ? n
      : Reflect.get(Ge(t, r) && r in n ? t : n, r, s);
}
const H_ = { get: xu(!1, !1) },
  W_ = { get: xu(!1, !0) },
  q_ = { get: xu(!0, !1) },
  pp = new WeakMap(),
  mp = new WeakMap(),
  gp = new WeakMap(),
  X_ = new WeakMap();
function j_(i) {
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
function Y_(i) {
  return i.__v_skip || !Object.isExtensible(i) ? 0 : j_(__(i));
}
function Hs(i) {
  return ws(i) ? i : vu(i, !1, dp, H_, pp);
}
function $_(i) {
  return vu(i, !1, z_, W_, mp);
}
function _p(i) {
  return vu(i, !0, N_, q_, gp);
}
function vu(i, e, t, n, r) {
  if (!it(i) || (i.__v_raw && !(e && i.__v_isReactive))) return i;
  const s = r.get(i);
  if (s) return s;
  const o = Y_(i);
  if (o === 0) return i;
  const a = new Proxy(i, o === 2 ? n : t);
  return r.set(i, a), a;
}
function gs(i) {
  return ws(i) ? gs(i.__v_raw) : !!(i && i.__v_isReactive);
}
function ws(i) {
  return !!(i && i.__v_isReadonly);
}
function Ca(i) {
  return !!(i && i.__v_isShallow);
}
function xp(i) {
  return gs(i) || ws(i);
}
function Xe(i) {
  const e = i && i.__v_raw;
  return e ? Xe(e) : i;
}
function yu(i) {
  return Aa(i, '__v_skip', !0), i;
}
const xo = i => (it(i) ? Hs(i) : i),
  Mu = i => (it(i) ? _p(i) : i);
function vp(i) {
  Ui && In && ((i = Xe(i)), up(i.dep || (i.dep = pu())));
}
function yp(i, e) {
  (i = Xe(i)), i.dep && Mc(i.dep);
}
function Dt(i) {
  return !!(i && i.__v_isRef === !0);
}
function Mp(i) {
  return bp(i, !1);
}
function Z_(i) {
  return bp(i, !0);
}
function bp(i, e) {
  return Dt(i) ? i : new K_(i, e);
}
class K_ {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : Xe(e)),
      (this._value = t ? e : xo(e));
  }
  get value() {
    return vp(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Ca(e) || ws(e);
    (e = t ? e : Xe(e)),
      _o(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : xo(e)), yp(this));
  }
}
function on(i) {
  return Dt(i) ? i.value : i;
}
const J_ = {
  get: (i, e, t) => on(Reflect.get(i, e, t)),
  set: (i, e, t, n) => {
    const r = i[e];
    return Dt(r) && !Dt(t) ? ((r.value = t), !0) : Reflect.set(i, e, t, n);
  },
};
function Sp(i) {
  return gs(i) ? i : new Proxy(i, J_);
}
var wp;
class Q_ {
  constructor(e, t, n, r) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[wp] = !1),
      (this._dirty = !0),
      (this.effect = new mu(e, () => {
        this._dirty || ((this._dirty = !0), yp(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = Xe(this);
    return (
      vp(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
wp = '__v_isReadonly';
function e0(i, e, t = !1) {
  let n, r;
  const s = Ue(i);
  return (
    s ? ((n = i), (r = Un)) : ((n = i.get), (r = i.set)),
    new Q_(n, r, s || !r, t)
  );
}
function Bi(i, e, t, n) {
  let r;
  try {
    r = n ? i(...n) : i();
  } catch (s) {
    Za(s, e, t);
  }
  return r;
}
function wn(i, e, t, n) {
  if (Ue(i)) {
    const s = Bi(i, e, t, n);
    return (
      s &&
        np(s) &&
        s.catch(o => {
          Za(o, e, t);
        }),
      s
    );
  }
  const r = [];
  for (let s = 0; s < i.length; s++) r.push(wn(i[s], e, t, n));
  return r;
}
function Za(i, e, t, n = !0) {
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
      Bi(l, null, 10, [i, o, a]);
      return;
    }
  }
  t0(i, t, r, n);
}
function t0(i, e, t, n = !0) {
  console.error(i);
}
let vo = !1,
  bc = !1;
const Lt = [];
let jn = 0;
const _s = [];
let li = null,
  fr = 0;
const Tp = Promise.resolve();
let bu = null;
function Ep(i) {
  const e = bu || Tp;
  return i ? e.then(this ? i.bind(this) : i) : e;
}
function n0(i) {
  let e = jn + 1,
    t = Lt.length;
  for (; e < t; ) {
    const n = (e + t) >>> 1;
    yo(Lt[n]) < i ? (e = n + 1) : (t = n);
  }
  return e;
}
function Su(i) {
  (!Lt.length || !Lt.includes(i, vo && i.allowRecurse ? jn + 1 : jn)) &&
    (i.id == null ? Lt.push(i) : Lt.splice(n0(i.id), 0, i), Ap());
}
function Ap() {
  !vo && !bc && ((bc = !0), (bu = Tp.then(Pp)));
}
function i0(i) {
  const e = Lt.indexOf(i);
  e > jn && Lt.splice(e, 1);
}
function r0(i) {
  Fe(i)
    ? _s.push(...i)
    : (!li || !li.includes(i, i.allowRecurse ? fr + 1 : fr)) && _s.push(i),
    Ap();
}
function Tf(i, e = vo ? jn + 1 : 0) {
  for (; e < Lt.length; e++) {
    const t = Lt[e];
    t && t.pre && (Lt.splice(e, 1), e--, t());
  }
}
function Cp(i) {
  if (_s.length) {
    const e = [...new Set(_s)];
    if (((_s.length = 0), li)) {
      li.push(...e);
      return;
    }
    for (li = e, li.sort((t, n) => yo(t) - yo(n)), fr = 0; fr < li.length; fr++)
      li[fr]();
    (li = null), (fr = 0);
  }
}
const yo = i => (i.id == null ? 1 / 0 : i.id),
  s0 = (i, e) => {
    const t = yo(i) - yo(e);
    if (t === 0) {
      if (i.pre && !e.pre) return -1;
      if (e.pre && !i.pre) return 1;
    }
    return t;
  };
function Pp(i) {
  (bc = !1), (vo = !0), Lt.sort(s0);
  const e = Un;
  try {
    for (jn = 0; jn < Lt.length; jn++) {
      const t = Lt[jn];
      t && t.active !== !1 && Bi(t, null, 14);
    }
  } finally {
    (jn = 0),
      (Lt.length = 0),
      Cp(),
      (vo = !1),
      (bu = null),
      (Lt.length || _s.length) && Pp();
  }
}
function o0(i, e, ...t) {
  if (i.isUnmounted) return;
  const n = i.vnode.props || tt;
  let r = t;
  const s = e.startsWith('update:'),
    o = s && e.slice(7);
  if (o && o in n) {
    const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: f, trim: h } = n[u] || tt;
    h && (r = t.map(p => p.trim())), f && (r = t.map(y_));
  }
  let a,
    l = n[(a = gl(e))] || n[(a = gl(Ss(e)))];
  !l && s && (l = n[(a = gl(ks(e)))]), l && wn(l, i, 6, r);
  const c = n[a + 'Once'];
  if (c) {
    if (!i.emitted) i.emitted = {};
    else if (i.emitted[a]) return;
    (i.emitted[a] = !0), wn(c, i, 6, r);
  }
}
function Lp(i, e, t = !1) {
  const n = e.emitsCache,
    r = n.get(i);
  if (r !== void 0) return r;
  const s = i.emits;
  let o = {},
    a = !1;
  if (!Ue(i)) {
    const l = c => {
      const u = Lp(c, e, !0);
      u && ((a = !0), Ot(o, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l),
      i.extends && l(i.extends),
      i.mixins && i.mixins.forEach(l);
  }
  return !s && !a
    ? (it(i) && n.set(i, null), null)
    : (Fe(s) ? s.forEach(l => (o[l] = null)) : Ot(o, s),
      it(i) && n.set(i, o),
      o);
}
function Ka(i, e) {
  return !i || !Xa(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      Ge(i, e[0].toLowerCase() + e.slice(1)) || Ge(i, ks(e)) || Ge(i, e));
}
let Zn = null,
  Rp = null;
function Pa(i) {
  const e = Zn;
  return (Zn = i), (Rp = (i && i.type.__scopeId) || null), e;
}
function Dp(i, e = Zn, t) {
  if (!e || i._n) return i;
  const n = (...r) => {
    n._d && Ff(-1);
    const s = Pa(e);
    let o;
    try {
      o = i(...r);
    } finally {
      Pa(s), n._d && Ff(1);
    }
    return o;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function xl(i) {
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
    setupState: p,
    ctx: g,
    inheritAttrs: d,
  } = i;
  let m, _;
  const x = Pa(i);
  try {
    if (t.shapeFlag & 4) {
      const y = r || n;
      (m = qn(u.call(y, y, f, s, p, h, g))), (_ = l);
    } else {
      const y = e;
      (m = qn(
        y.length > 1 ? y(s, { attrs: l, slots: a, emit: c }) : y(s, null)
      )),
        (_ = e.props ? l : a0(l));
    }
  } catch (y) {
    (oo.length = 0), Za(y, i, 1), (m = jt(pi));
  }
  let v = m;
  if (_ && d !== !1) {
    const y = Object.keys(_),
      { shapeFlag: b } = v;
    y.length && b & 7 && (o && y.some(uu) && (_ = l0(_, o)), (v = Xi(v, _)));
  }
  return (
    t.dirs && ((v = Xi(v)), (v.dirs = v.dirs ? v.dirs.concat(t.dirs) : t.dirs)),
    t.transition && (v.transition = t.transition),
    (m = v),
    Pa(x),
    m
  );
}
const a0 = i => {
    let e;
    for (const t in i)
      (t === 'class' || t === 'style' || Xa(t)) && ((e || (e = {}))[t] = i[t]);
    return e;
  },
  l0 = (i, e) => {
    const t = {};
    for (const n in i) (!uu(n) || !(n.slice(9) in e)) && (t[n] = i[n]);
    return t;
  };
function c0(i, e, t) {
  const { props: n, children: r, component: s } = i,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (t && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return n ? Ef(n, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== n[h] && !Ka(c, h)) return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : n === o
      ? !1
      : n
      ? o
        ? Ef(n, o, c)
        : !0
      : !!o;
  return !1;
}
function Ef(i, e, t) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(i).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (e[s] !== i[s] && !Ka(t, s)) return !0;
  }
  return !1;
}
function u0({ vnode: i, parent: e }, t) {
  for (; e && e.subTree === i; ) ((i = e.vnode).el = t), (e = e.parent);
}
const f0 = i => i.__isSuspense;
function h0(i, e) {
  e && e.pendingBranch
    ? Fe(i)
      ? e.effects.push(...i)
      : e.effects.push(i)
    : r0(i);
}
function _a(i, e) {
  if (wt) {
    let t = wt.provides;
    const n = wt.parent && wt.parent.provides;
    n === t && (t = wt.provides = Object.create(n)), (t[i] = e);
  }
}
function ki(i, e, t = !1) {
  const n = wt || Zn;
  if (n) {
    const r =
      n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides;
    if (r && i in r) return r[i];
    if (arguments.length > 1) return t && Ue(e) ? e.call(n.proxy) : e;
  }
}
const Af = {};
function xa(i, e, t) {
  return Ip(i, e, t);
}
function Ip(
  i,
  e,
  { immediate: t, deep: n, flush: r, onTrack: s, onTrigger: o } = tt
) {
  const a = wt;
  let l,
    c = !1,
    u = !1;
  if (
    (Dt(i)
      ? ((l = () => i.value), (c = Ca(i)))
      : gs(i)
      ? ((l = () => i), (n = !0))
      : Fe(i)
      ? ((u = !0),
        (c = i.some(_ => gs(_) || Ca(_))),
        (l = () =>
          i.map(_ => {
            if (Dt(_)) return _.value;
            if (gs(_)) return cs(_);
            if (Ue(_)) return Bi(_, a, 2);
          })))
      : Ue(i)
      ? e
        ? (l = () => Bi(i, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), wn(i, a, 3, [h]);
          })
      : (l = Un),
    e && n)
  ) {
    const _ = l;
    l = () => cs(_());
  }
  let f,
    h = _ => {
      f = m.onStop = () => {
        Bi(_, a, 4);
      };
    };
  if (bo)
    return (h = Un), e ? t && wn(e, a, 3, [l(), u ? [] : void 0, h]) : l(), Un;
  let p = u ? [] : Af;
  const g = () => {
    if (!!m.active)
      if (e) {
        const _ = m.run();
        (n || c || (u ? _.some((x, v) => _o(x, p[v])) : _o(_, p))) &&
          (f && f(), wn(e, a, 3, [_, p === Af ? void 0 : p, h]), (p = _));
      } else m.run();
  };
  g.allowRecurse = !!e;
  let d;
  r === 'sync'
    ? (d = g)
    : r === 'post'
    ? (d = () => kt(g, a && a.suspense))
    : ((g.pre = !0), a && (g.id = a.uid), (d = () => Su(g)));
  const m = new mu(l, d);
  return (
    e
      ? t
        ? g()
        : (p = m.run())
      : r === 'post'
      ? kt(m.run.bind(m), a && a.suspense)
      : m.run(),
    () => {
      m.stop(), a && a.scope && fu(a.scope.effects, m);
    }
  );
}
function d0(i, e, t) {
  const n = this.proxy,
    r = Mt(i) ? (i.includes('.') ? Op(n, i) : () => n[i]) : i.bind(n, n);
  let s;
  Ue(e) ? (s = e) : ((s = e.handler), (t = e));
  const o = wt;
  Ts(this);
  const a = Ip(r, s.bind(n), t);
  return o ? Ts(o) : yr(), a;
}
function Op(i, e) {
  const t = e.split('.');
  return () => {
    let n = i;
    for (let r = 0; r < t.length && n; r++) n = n[t[r]];
    return n;
  };
}
function cs(i, e) {
  if (!it(i) || i.__v_skip || ((e = e || new Set()), e.has(i))) return i;
  if ((e.add(i), Dt(i))) cs(i.value, e);
  else if (Fe(i)) for (let t = 0; t < i.length; t++) cs(i[t], e);
  else if (tp(i) || ms(i))
    i.forEach(t => {
      cs(t, e);
    });
  else if (rp(i)) for (const t in i) cs(i[t], e);
  return i;
}
function p0() {
  const i = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Io(() => {
      i.isMounted = !0;
    }),
    wu(() => {
      i.isUnmounting = !0;
    }),
    i
  );
}
const pn = [Function, Array],
  m0 = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: pn,
      onEnter: pn,
      onAfterEnter: pn,
      onEnterCancelled: pn,
      onBeforeLeave: pn,
      onLeave: pn,
      onAfterLeave: pn,
      onLeaveCancelled: pn,
      onBeforeAppear: pn,
      onAppear: pn,
      onAfterAppear: pn,
      onAppearCancelled: pn,
    },
    setup(i, { slots: e }) {
      const t = Q0(),
        n = p0();
      let r;
      return () => {
        const s = e.default && Np(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const d of s)
            if (d.type !== pi) {
              o = d;
              break;
            }
        }
        const a = Xe(i),
          { mode: l } = a;
        if (n.isLeaving) return vl(o);
        const c = Cf(o);
        if (!c) return vl(o);
        const u = Sc(c, a, n, t);
        wc(c, u);
        const f = t.subTree,
          h = f && Cf(f);
        let p = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const d = g();
          r === void 0 ? (r = d) : d !== r && ((r = d), (p = !0));
        }
        if (h && h.type !== pi && (!hr(c, h) || p)) {
          const d = Sc(h, a, n, t);
          if ((wc(h, d), l === 'out-in'))
            return (
              (n.isLeaving = !0),
              (d.afterLeave = () => {
                (n.isLeaving = !1), t.update();
              }),
              vl(o)
            );
          l === 'in-out' &&
            c.type !== pi &&
            (d.delayLeave = (m, _, x) => {
              const v = Fp(n, h);
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
  g0 = m0;
function Fp(i, e) {
  const { leavingVNodes: t } = i;
  let n = t.get(e.type);
  return n || ((n = Object.create(null)), t.set(e.type, n)), n;
}
function Sc(i, e, t, n) {
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
      onAfterLeave: p,
      onLeaveCancelled: g,
      onBeforeAppear: d,
      onAppear: m,
      onAfterAppear: _,
      onAppearCancelled: x,
    } = e,
    v = String(i.key),
    y = Fp(t, i),
    b = (M, w) => {
      M && wn(M, n, 9, w);
    },
    T = (M, w) => {
      const R = w[1];
      b(M, w),
        Fe(M) ? M.every(q => q.length <= 1) && R() : M.length <= 1 && R();
    },
    L = {
      mode: s,
      persisted: o,
      beforeEnter(M) {
        let w = a;
        if (!t.isMounted)
          if (r) w = d || a;
          else return;
        M._leaveCb && M._leaveCb(!0);
        const R = y[v];
        R && hr(i, R) && R.el._leaveCb && R.el._leaveCb(), b(w, [M]);
      },
      enter(M) {
        let w = l,
          R = c,
          q = u;
        if (!t.isMounted)
          if (r) (w = m || l), (R = _ || c), (q = x || u);
          else return;
        let Q = !1;
        const B = (M._enterCb = I => {
          Q ||
            ((Q = !0),
            I ? b(q, [M]) : b(R, [M]),
            L.delayedLeave && L.delayedLeave(),
            (M._enterCb = void 0));
        });
        w ? T(w, [M, B]) : B();
      },
      leave(M, w) {
        const R = String(i.key);
        if ((M._enterCb && M._enterCb(!0), t.isUnmounting)) return w();
        b(f, [M]);
        let q = !1;
        const Q = (M._leaveCb = B => {
          q ||
            ((q = !0),
            w(),
            B ? b(g, [M]) : b(p, [M]),
            (M._leaveCb = void 0),
            y[R] === i && delete y[R]);
        });
        (y[R] = i), h ? T(h, [M, Q]) : Q();
      },
      clone(M) {
        return Sc(M, e, t, n);
      },
    };
  return L;
}
function vl(i) {
  if (Ja(i)) return (i = Xi(i)), (i.children = null), i;
}
function Cf(i) {
  return Ja(i) ? (i.children ? i.children[0] : void 0) : i;
}
function wc(i, e) {
  i.shapeFlag & 6 && i.component
    ? wc(i.component.subTree, e)
    : i.shapeFlag & 128
    ? ((i.ssContent.transition = e.clone(i.ssContent)),
      (i.ssFallback.transition = e.clone(i.ssFallback)))
    : (i.transition = e);
}
function Np(i, e = !1, t) {
  let n = [],
    r = 0;
  for (let s = 0; s < i.length; s++) {
    let o = i[s];
    const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : s);
    o.type === Vt
      ? (o.patchFlag & 128 && r++, (n = n.concat(Np(o.children, e, a))))
      : (e || o.type !== pi) && n.push(a != null ? Xi(o, { key: a }) : o);
  }
  if (r > 1) for (let s = 0; s < n.length; s++) n[s].patchFlag = -2;
  return n;
}
function Dr(i) {
  return Ue(i) ? { setup: i, name: i.name } : i;
}
const va = i => !!i.type.__asyncLoader,
  Ja = i => i.type.__isKeepAlive;
function _0(i, e) {
  zp(i, 'a', e);
}
function x0(i, e) {
  zp(i, 'da', e);
}
function zp(i, e, t = wt) {
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
  if ((Qa(e, n, t), t)) {
    let r = t.parent;
    for (; r && r.parent; )
      Ja(r.parent.vnode) && v0(n, e, t, r), (r = r.parent);
  }
}
function v0(i, e, t, n) {
  const r = Qa(e, i, n, !0);
  Up(() => {
    fu(n[e], r);
  }, t);
}
function Qa(i, e, t = wt, n = !1) {
  if (t) {
    const r = t[i] || (t[i] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          if (t.isUnmounted) return;
          Vs(), Ts(t);
          const a = wn(e, t, i, o);
          return yr(), Gs(), a;
        });
    return n ? r.unshift(s) : r.push(s), s;
  }
}
const yi =
    i =>
    (e, t = wt) =>
      (!bo || i === 'sp') && Qa(i, (...n) => e(...n), t),
  y0 = yi('bm'),
  Io = yi('m'),
  M0 = yi('bu'),
  b0 = yi('u'),
  wu = yi('bum'),
  Up = yi('um'),
  S0 = yi('sp'),
  w0 = yi('rtg'),
  T0 = yi('rtc');
function E0(i, e = wt) {
  Qa('ec', i, e);
}
function er(i, e, t, n) {
  const r = i.dirs,
    s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[n];
    l && (Vs(), wn(l, t, 8, [i.el, a, i, e]), Gs());
  }
}
const A0 = Symbol();
function ya(i, e, t, n) {
  let r;
  const s = t && t[n];
  if (Fe(i) || Mt(i)) {
    r = new Array(i.length);
    for (let o = 0, a = i.length; o < a; o++)
      r[o] = e(i[o], o, void 0, s && s[o]);
  } else if (typeof i == 'number') {
    r = new Array(i);
    for (let o = 0; o < i; o++) r[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (it(i))
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
const Tc = i => (i ? (Zp(i) ? Pu(i) || i.proxy : Tc(i.parent)) : null),
  La = Ot(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => i.props,
    $attrs: i => i.attrs,
    $slots: i => i.slots,
    $refs: i => i.refs,
    $parent: i => Tc(i.parent),
    $root: i => Tc(i.root),
    $emit: i => i.emit,
    $options: i => Tu(i),
    $forceUpdate: i => i.f || (i.f = () => Su(i.update)),
    $nextTick: i => i.n || (i.n = Ep.bind(i.proxy)),
    $watch: i => d0.bind(i),
  }),
  C0 = {
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
        const p = o[e];
        if (p !== void 0)
          switch (p) {
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
          Ec && (o[e] = 0);
        }
      }
      const u = La[e];
      let f, h;
      if (u) return e === '$attrs' && ln(i, 'get', e), u(i);
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
        Ge(La, o) ||
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
let Ec = !0;
function P0(i) {
  const e = Tu(i),
    t = i.proxy,
    n = i.ctx;
  (Ec = !1), e.beforeCreate && Pf(e.beforeCreate, i, 'bc');
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
    beforeUpdate: p,
    updated: g,
    activated: d,
    deactivated: m,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: v,
    unmounted: y,
    render: b,
    renderTracked: T,
    renderTriggered: L,
    errorCaptured: M,
    serverPrefetch: w,
    expose: R,
    inheritAttrs: q,
    components: Q,
    directives: B,
    filters: I,
  } = e;
  if ((c && L0(c, n, null, i.appContext.config.unwrapInjectedRef), o))
    for (const $ in o) {
      const V = o[$];
      Ue(V) && (n[$] = V.bind(t));
    }
  if (r) {
    const $ = r.call(t, t);
    it($) && (i.data = Hs($));
  }
  if (((Ec = !0), s))
    for (const $ in s) {
      const V = s[$],
        N = Ue(V) ? V.bind(t, t) : Ue(V.get) ? V.get.bind(t, t) : Un,
        H = !Ue(V) && Ue(V.set) ? V.set.bind(t) : Un,
        ue = Bt({ get: N, set: H });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: te => (ue.value = te),
      });
    }
  if (a) for (const $ in a) Bp(a[$], n, t, $);
  if (l) {
    const $ = Ue(l) ? l.call(t) : l;
    Reflect.ownKeys($).forEach(V => {
      _a(V, $[V]);
    });
  }
  u && Pf(u, i, 'c');
  function Z($, V) {
    Fe(V) ? V.forEach(N => $(N.bind(t))) : V && $(V.bind(t));
  }
  if (
    (Z(y0, f),
    Z(Io, h),
    Z(M0, p),
    Z(b0, g),
    Z(_0, d),
    Z(x0, m),
    Z(E0, M),
    Z(T0, T),
    Z(w0, L),
    Z(wu, x),
    Z(Up, y),
    Z(S0, w),
    Fe(R))
  )
    if (R.length) {
      const $ = i.exposed || (i.exposed = {});
      R.forEach(V => {
        Object.defineProperty($, V, { get: () => t[V], set: N => (t[V] = N) });
      });
    } else i.exposed || (i.exposed = {});
  b && i.render === Un && (i.render = b),
    q != null && (i.inheritAttrs = q),
    Q && (i.components = Q),
    B && (i.directives = B);
}
function L0(i, e, t = Un, n = !1) {
  Fe(i) && (i = Ac(i));
  for (const r in i) {
    const s = i[r];
    let o;
    it(s)
      ? 'default' in s
        ? (o = ki(s.from || r, s.default, !0))
        : (o = ki(s.from || r))
      : (o = ki(s)),
      Dt(o) && n
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => (o.value = a),
          })
        : (e[r] = o);
  }
}
function Pf(i, e, t) {
  wn(Fe(i) ? i.map(n => n.bind(e.proxy)) : i.bind(e.proxy), e, t);
}
function Bp(i, e, t, n) {
  const r = n.includes('.') ? Op(t, n) : () => t[n];
  if (Mt(i)) {
    const s = e[i];
    Ue(s) && xa(r, s);
  } else if (Ue(i)) xa(r, i.bind(t));
  else if (it(i))
    if (Fe(i)) i.forEach(s => Bp(s, e, t, n));
    else {
      const s = Ue(i.handler) ? i.handler.bind(t) : e[i.handler];
      Ue(s) && xa(r, s, i);
    }
}
function Tu(i) {
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
      : ((l = {}), r.length && r.forEach(c => Ra(l, c, o, !0)), Ra(l, e, o)),
    it(e) && s.set(e, l),
    l
  );
}
function Ra(i, e, t, n = !1) {
  const { mixins: r, extends: s } = e;
  s && Ra(i, s, t, !0), r && r.forEach(o => Ra(i, o, t, !0));
  for (const o in e)
    if (!(n && o === 'expose')) {
      const a = R0[o] || (t && t[o]);
      i[o] = a ? a(i[o], e[o]) : e[o];
    }
  return i;
}
const R0 = {
  data: Lf,
  props: ar,
  emits: ar,
  methods: ar,
  computed: ar,
  beforeCreate: zt,
  created: zt,
  beforeMount: zt,
  mounted: zt,
  beforeUpdate: zt,
  updated: zt,
  beforeDestroy: zt,
  beforeUnmount: zt,
  destroyed: zt,
  unmounted: zt,
  activated: zt,
  deactivated: zt,
  errorCaptured: zt,
  serverPrefetch: zt,
  components: ar,
  directives: ar,
  watch: I0,
  provide: Lf,
  inject: D0,
};
function Lf(i, e) {
  return e
    ? i
      ? function () {
          return Ot(
            Ue(i) ? i.call(this, this) : i,
            Ue(e) ? e.call(this, this) : e
          );
        }
      : e
    : i;
}
function D0(i, e) {
  return ar(Ac(i), Ac(e));
}
function Ac(i) {
  if (Fe(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) e[i[t]] = i[t];
    return e;
  }
  return i;
}
function zt(i, e) {
  return i ? [...new Set([].concat(i, e))] : e;
}
function ar(i, e) {
  return i ? Ot(Ot(Object.create(null), i), e) : e;
}
function I0(i, e) {
  if (!i) return e;
  if (!e) return i;
  const t = Ot(Object.create(null), i);
  for (const n in e) t[n] = zt(i[n], e[n]);
  return t;
}
function O0(i, e, t, n = !1) {
  const r = {},
    s = {};
  Aa(s, el, 1), (i.propsDefaults = Object.create(null)), kp(i, e, r, s);
  for (const o in i.propsOptions[0]) o in r || (r[o] = void 0);
  t ? (i.props = n ? r : $_(r)) : i.type.props ? (i.props = r) : (i.props = s),
    (i.attrs = s);
}
function F0(i, e, t, n) {
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
        if (Ka(i.emitsOptions, h)) continue;
        const p = e[h];
        if (l)
          if (Ge(s, h)) p !== s[h] && ((s[h] = p), (c = !0));
          else {
            const g = Ss(h);
            r[g] = Cc(l, a, g, p, i, !1);
          }
        else p !== s[h] && ((s[h] = p), (c = !0));
      }
    }
  } else {
    kp(i, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || (!Ge(e, f) && ((u = ks(f)) === f || !Ge(e, u)))) &&
        (l
          ? t &&
            (t[f] !== void 0 || t[u] !== void 0) &&
            (r[f] = Cc(l, a, f, void 0, i, !0))
          : delete r[f]);
    if (s !== a)
      for (const f in s) (!e || (!Ge(e, f) && !0)) && (delete s[f], (c = !0));
  }
  c && _i(i, 'set', '$attrs');
}
function kp(i, e, t, n) {
  const [r, s] = i.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (ga(l)) continue;
      const c = e[l];
      let u;
      r && Ge(r, (u = Ss(l)))
        ? !s || !s.includes(u)
          ? (t[u] = c)
          : ((a || (a = {}))[u] = c)
        : Ka(i.emitsOptions, l) ||
          ((!(l in n) || c !== n[l]) && ((n[l] = c), (o = !0)));
    }
  if (s) {
    const l = Xe(t),
      c = a || tt;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      t[f] = Cc(r, l, f, c[f], i, !Ge(c, f));
    }
  }
  return o;
}
function Cc(i, e, t, n, r, s) {
  const o = i[t];
  if (o != null) {
    const a = Ge(o, 'default');
    if (a && n === void 0) {
      const l = o.default;
      if (o.type !== Function && Ue(l)) {
        const { propsDefaults: c } = r;
        t in c ? (n = c[t]) : (Ts(r), (n = c[t] = l.call(null, e)), yr());
      } else n = l;
    }
    o[0] &&
      (s && !a ? (n = !1) : o[1] && (n === '' || n === ks(t)) && (n = !0));
  }
  return n;
}
function Vp(i, e, t = !1) {
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
      const [h, p] = Vp(f, e, !0);
      Ot(o, h), p && a.push(...p);
    };
    !t && e.mixins.length && e.mixins.forEach(u),
      i.extends && u(i.extends),
      i.mixins && i.mixins.forEach(u);
  }
  if (!s && !l) return it(i) && n.set(i, ps), ps;
  if (Fe(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ss(s[u]);
      Rf(f) && (o[f] = tt);
    }
  else if (s)
    for (const u in s) {
      const f = Ss(u);
      if (Rf(f)) {
        const h = s[u],
          p = (o[f] = Fe(h) || Ue(h) ? { type: h } : h);
        if (p) {
          const g = Of(Boolean, p.type),
            d = Of(String, p.type);
          (p[0] = g > -1),
            (p[1] = d < 0 || g < d),
            (g > -1 || Ge(p, 'default')) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return it(i) && n.set(i, c), c;
}
function Rf(i) {
  return i[0] !== '$';
}
function Df(i) {
  const e = i && i.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : i === null ? 'null' : '';
}
function If(i, e) {
  return Df(i) === Df(e);
}
function Of(i, e) {
  return Fe(e) ? e.findIndex(t => If(t, i)) : Ue(e) && If(e, i) ? 0 : -1;
}
const Gp = i => i[0] === '_' || i === '$stable',
  Eu = i => (Fe(i) ? i.map(qn) : [qn(i)]),
  N0 = (i, e, t) => {
    if (e._n) return e;
    const n = Dp((...r) => Eu(e(...r)), t);
    return (n._c = !1), n;
  },
  Hp = (i, e, t) => {
    const n = i._ctx;
    for (const r in i) {
      if (Gp(r)) continue;
      const s = i[r];
      if (Ue(s)) e[r] = N0(r, s, n);
      else if (s != null) {
        const o = Eu(s);
        e[r] = () => o;
      }
    }
  },
  Wp = (i, e) => {
    const t = Eu(e);
    i.slots.default = () => t;
  },
  z0 = (i, e) => {
    if (i.vnode.shapeFlag & 32) {
      const t = e._;
      t ? ((i.slots = Xe(e)), Aa(e, '_', t)) : Hp(e, (i.slots = {}));
    } else (i.slots = {}), e && Wp(i, e);
    Aa(i.slots, el, 1);
  },
  U0 = (i, e, t) => {
    const { vnode: n, slots: r } = i;
    let s = !0,
      o = tt;
    if (n.shapeFlag & 32) {
      const a = e._;
      a
        ? t && a === 1
          ? (s = !1)
          : (Ot(r, e), !t && a === 1 && delete r._)
        : ((s = !e.$stable), Hp(e, r)),
        (o = e);
    } else e && (Wp(i, e), (o = { default: 1 }));
    if (s) for (const a in r) !Gp(a) && !(a in o) && delete r[a];
  };
function qp() {
  return {
    app: null,
    config: {
      isNativeTag: p_,
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
let B0 = 0;
function k0(i, e) {
  return function (n, r = null) {
    Ue(n) || (n = Object.assign({}, n)), r != null && !it(r) && (r = null);
    const s = qp(),
      o = new Set();
    let a = !1;
    const l = (s.app = {
      _uid: B0++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: sx,
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
          const h = jt(n, r);
          return (
            (h.appContext = s),
            u && e ? e(h, c) : i(h, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            Pu(h.component) || h.component.proxy
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
function Pc(i, e, t, n, r = !1) {
  if (Fe(i)) {
    i.forEach((h, p) => Pc(h, e && (Fe(e) ? e[p] : e), t, n, r));
    return;
  }
  if (va(n) && !r) return;
  const s = n.shapeFlag & 4 ? Pu(n.component) || n.component.proxy : n.el,
    o = r ? null : s,
    { i: a, r: l } = i,
    c = e && e.r,
    u = a.refs === tt ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Mt(c)
        ? ((u[c] = null), Ge(f, c) && (f[c] = null))
        : Dt(c) && (c.value = null)),
    Ue(l))
  )
    Bi(l, a, 12, [o, u]);
  else {
    const h = Mt(l),
      p = Dt(l);
    if (h || p) {
      const g = () => {
        if (i.f) {
          const d = h ? (Ge(f, l) ? f[l] : u[l]) : l.value;
          r
            ? Fe(d) && fu(d, s)
            : Fe(d)
            ? d.includes(s) || d.push(s)
            : h
            ? ((u[l] = [s]), Ge(f, l) && (f[l] = u[l]))
            : ((l.value = [s]), i.k && (u[i.k] = l.value));
        } else
          h
            ? ((u[l] = o), Ge(f, l) && (f[l] = o))
            : p && ((l.value = o), i.k && (u[i.k] = o));
      };
      o ? ((g.id = -1), kt(g, t)) : g();
    }
  }
}
const kt = h0;
function V0(i) {
  return G0(i);
}
function G0(i, e) {
  const t = M_();
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
      setScopeId: p = Un,
      insertStaticContent: g,
    } = i,
    d = (
      A,
      P,
      j,
      K = null,
      ee = null,
      he = null,
      pe = !1,
      oe = null,
      me = !!P.dynamicChildren
    ) => {
      if (A === P) return;
      A && !hr(A, P) && ((K = le(A)), te(A, ee, he, !0), (A = null)),
        P.patchFlag === -2 && ((me = !1), (P.dynamicChildren = null));
      const { type: ae, ref: E, shapeFlag: S } = P;
      switch (ae) {
        case Au:
          m(A, P, j, K);
          break;
        case pi:
          _(A, P, j, K);
          break;
        case yl:
          A == null && x(P, j, K, pe);
          break;
        case Vt:
          Q(A, P, j, K, ee, he, pe, oe, me);
          break;
        default:
          S & 1
            ? b(A, P, j, K, ee, he, pe, oe, me)
            : S & 6
            ? B(A, P, j, K, ee, he, pe, oe, me)
            : (S & 64 || S & 128) &&
              ae.process(A, P, j, K, ee, he, pe, oe, me, ve);
      }
      E != null && ee && Pc(E, A && A.ref, he, P || A, !P);
    },
    m = (A, P, j, K) => {
      if (A == null) n((P.el = a(P.children)), j, K);
      else {
        const ee = (P.el = A.el);
        P.children !== A.children && c(ee, P.children);
      }
    },
    _ = (A, P, j, K) => {
      A == null ? n((P.el = l(P.children || '')), j, K) : (P.el = A.el);
    },
    x = (A, P, j, K) => {
      [A.el, A.anchor] = g(A.children, P, j, K, A.el, A.anchor);
    },
    v = ({ el: A, anchor: P }, j, K) => {
      let ee;
      for (; A && A !== P; ) (ee = h(A)), n(A, j, K), (A = ee);
      n(P, j, K);
    },
    y = ({ el: A, anchor: P }) => {
      let j;
      for (; A && A !== P; ) (j = h(A)), r(A), (A = j);
      r(P);
    },
    b = (A, P, j, K, ee, he, pe, oe, me) => {
      (pe = pe || P.type === 'svg'),
        A == null
          ? T(P, j, K, ee, he, pe, oe, me)
          : w(A, P, ee, he, pe, oe, me);
    },
    T = (A, P, j, K, ee, he, pe, oe) => {
      let me, ae;
      const { type: E, props: S, shapeFlag: z, transition: J, dirs: ie } = A;
      if (
        ((me = A.el = o(A.type, he, S && S.is, S)),
        z & 8
          ? u(me, A.children)
          : z & 16 &&
            M(A.children, me, null, K, ee, he && E !== 'foreignObject', pe, oe),
        ie && er(A, null, K, 'created'),
        S)
      ) {
        for (const Me in S)
          Me !== 'value' &&
            !ga(Me) &&
            s(me, Me, null, S[Me], he, A.children, K, ee, F);
        'value' in S && s(me, 'value', null, S.value),
          (ae = S.onVnodeBeforeMount) && Hn(ae, K, A);
      }
      L(me, A, A.scopeId, pe, K), ie && er(A, null, K, 'beforeMount');
      const fe = (!ee || (ee && !ee.pendingBranch)) && J && !J.persisted;
      fe && J.beforeEnter(me),
        n(me, P, j),
        ((ae = S && S.onVnodeMounted) || fe || ie) &&
          kt(() => {
            ae && Hn(ae, K, A),
              fe && J.enter(me),
              ie && er(A, null, K, 'mounted');
          }, ee);
    },
    L = (A, P, j, K, ee) => {
      if ((j && p(A, j), K)) for (let he = 0; he < K.length; he++) p(A, K[he]);
      if (ee) {
        let he = ee.subTree;
        if (P === he) {
          const pe = ee.vnode;
          L(A, pe, pe.scopeId, pe.slotScopeIds, ee.parent);
        }
      }
    },
    M = (A, P, j, K, ee, he, pe, oe, me = 0) => {
      for (let ae = me; ae < A.length; ae++) {
        const E = (A[ae] = oe ? Ri(A[ae]) : qn(A[ae]));
        d(null, E, P, j, K, ee, he, pe, oe);
      }
    },
    w = (A, P, j, K, ee, he, pe) => {
      const oe = (P.el = A.el);
      let { patchFlag: me, dynamicChildren: ae, dirs: E } = P;
      me |= A.patchFlag & 16;
      const S = A.props || tt,
        z = P.props || tt;
      let J;
      j && tr(j, !1),
        (J = z.onVnodeBeforeUpdate) && Hn(J, j, P, A),
        E && er(P, A, j, 'beforeUpdate'),
        j && tr(j, !0);
      const ie = ee && P.type !== 'foreignObject';
      if (
        (ae
          ? R(A.dynamicChildren, ae, oe, j, K, ie, he)
          : pe || V(A, P, oe, null, j, K, ie, he, !1),
        me > 0)
      ) {
        if (me & 16) q(oe, P, S, z, j, K, ee);
        else if (
          (me & 2 && S.class !== z.class && s(oe, 'class', null, z.class, ee),
          me & 4 && s(oe, 'style', S.style, z.style, ee),
          me & 8)
        ) {
          const fe = P.dynamicProps;
          for (let Me = 0; Me < fe.length; Me++) {
            const D = fe[Me],
              k = S[D],
              be = z[D];
            (be !== k || D === 'value') &&
              s(oe, D, k, be, ee, A.children, j, K, F);
          }
        }
        me & 1 && A.children !== P.children && u(oe, P.children);
      } else !pe && ae == null && q(oe, P, S, z, j, K, ee);
      ((J = z.onVnodeUpdated) || E) &&
        kt(() => {
          J && Hn(J, j, P, A), E && er(P, A, j, 'updated');
        }, K);
    },
    R = (A, P, j, K, ee, he, pe) => {
      for (let oe = 0; oe < P.length; oe++) {
        const me = A[oe],
          ae = P[oe],
          E =
            me.el && (me.type === Vt || !hr(me, ae) || me.shapeFlag & 70)
              ? f(me.el)
              : j;
        d(me, ae, E, null, K, ee, he, pe, !0);
      }
    },
    q = (A, P, j, K, ee, he, pe) => {
      if (j !== K) {
        if (j !== tt)
          for (const oe in j)
            !ga(oe) &&
              !(oe in K) &&
              s(A, oe, j[oe], null, pe, P.children, ee, he, F);
        for (const oe in K) {
          if (ga(oe)) continue;
          const me = K[oe],
            ae = j[oe];
          me !== ae &&
            oe !== 'value' &&
            s(A, oe, ae, me, pe, P.children, ee, he, F);
        }
        'value' in K && s(A, 'value', j.value, K.value);
      }
    },
    Q = (A, P, j, K, ee, he, pe, oe, me) => {
      const ae = (P.el = A ? A.el : a('')),
        E = (P.anchor = A ? A.anchor : a(''));
      let { patchFlag: S, dynamicChildren: z, slotScopeIds: J } = P;
      J && (oe = oe ? oe.concat(J) : J),
        A == null
          ? (n(ae, j, K), n(E, j, K), M(P.children, j, E, ee, he, pe, oe, me))
          : S > 0 && S & 64 && z && A.dynamicChildren
          ? (R(A.dynamicChildren, z, j, ee, he, pe, oe),
            (P.key != null || (ee && P === ee.subTree)) && Xp(A, P, !0))
          : V(A, P, j, E, ee, he, pe, oe, me);
    },
    B = (A, P, j, K, ee, he, pe, oe, me) => {
      (P.slotScopeIds = oe),
        A == null
          ? P.shapeFlag & 512
            ? ee.ctx.activate(P, j, K, pe, me)
            : I(P, j, K, ee, he, pe, me)
          : X(A, P, me);
    },
    I = (A, P, j, K, ee, he, pe) => {
      const oe = (A.component = J0(A, K, ee));
      if ((Ja(A) && (oe.ctx.renderer = ve), ex(oe), oe.asyncDep)) {
        if ((ee && ee.registerDep(oe, Z), !A.el)) {
          const me = (oe.subTree = jt(pi));
          _(null, me, P, j);
        }
        return;
      }
      Z(oe, A, P, j, ee, he, pe);
    },
    X = (A, P, j) => {
      const K = (P.component = A.component);
      if (c0(A, P, j))
        if (K.asyncDep && !K.asyncResolved) {
          $(K, P, j);
          return;
        } else (K.next = P), i0(K.update), K.update();
      else (P.el = A.el), (K.vnode = P);
    },
    Z = (A, P, j, K, ee, he, pe) => {
      const oe = () => {
          if (A.isMounted) {
            let { next: E, bu: S, u: z, parent: J, vnode: ie } = A,
              fe = E,
              Me;
            tr(A, !1),
              E ? ((E.el = ie.el), $(A, E, pe)) : (E = ie),
              S && _l(S),
              (Me = E.props && E.props.onVnodeBeforeUpdate) && Hn(Me, J, E, ie),
              tr(A, !0);
            const D = xl(A),
              k = A.subTree;
            (A.subTree = D),
              d(k, D, f(k.el), le(k), A, ee, he),
              (E.el = D.el),
              fe === null && u0(A, D.el),
              z && kt(z, ee),
              (Me = E.props && E.props.onVnodeUpdated) &&
                kt(() => Hn(Me, J, E, ie), ee);
          } else {
            let E;
            const { el: S, props: z } = P,
              { bm: J, m: ie, parent: fe } = A,
              Me = va(P);
            if (
              (tr(A, !1),
              J && _l(J),
              !Me && (E = z && z.onVnodeBeforeMount) && Hn(E, fe, P),
              tr(A, !0),
              S && Te)
            ) {
              const D = () => {
                (A.subTree = xl(A)), Te(S, A.subTree, A, ee, null);
              };
              Me
                ? P.type.__asyncLoader().then(() => !A.isUnmounted && D())
                : D();
            } else {
              const D = (A.subTree = xl(A));
              d(null, D, j, K, A, ee, he), (P.el = D.el);
            }
            if ((ie && kt(ie, ee), !Me && (E = z && z.onVnodeMounted))) {
              const D = P;
              kt(() => Hn(E, fe, D), ee);
            }
            (P.shapeFlag & 256 ||
              (fe && va(fe.vnode) && fe.vnode.shapeFlag & 256)) &&
              A.a &&
              kt(A.a, ee),
              (A.isMounted = !0),
              (P = j = K = null);
          }
        },
        me = (A.effect = new mu(oe, () => Su(ae), A.scope)),
        ae = (A.update = () => me.run());
      (ae.id = A.uid), tr(A, !0), ae();
    },
    $ = (A, P, j) => {
      P.component = A;
      const K = A.vnode.props;
      (A.vnode = P),
        (A.next = null),
        F0(A, P.props, K, j),
        U0(A, P.children, j),
        Vs(),
        Tf(),
        Gs();
    },
    V = (A, P, j, K, ee, he, pe, oe, me = !1) => {
      const ae = A && A.children,
        E = A ? A.shapeFlag : 0,
        S = P.children,
        { patchFlag: z, shapeFlag: J } = P;
      if (z > 0) {
        if (z & 128) {
          H(ae, S, j, K, ee, he, pe, oe, me);
          return;
        } else if (z & 256) {
          N(ae, S, j, K, ee, he, pe, oe, me);
          return;
        }
      }
      J & 8
        ? (E & 16 && F(ae, ee, he), S !== ae && u(j, S))
        : E & 16
        ? J & 16
          ? H(ae, S, j, K, ee, he, pe, oe, me)
          : F(ae, ee, he, !0)
        : (E & 8 && u(j, ''), J & 16 && M(S, j, K, ee, he, pe, oe, me));
    },
    N = (A, P, j, K, ee, he, pe, oe, me) => {
      (A = A || ps), (P = P || ps);
      const ae = A.length,
        E = P.length,
        S = Math.min(ae, E);
      let z;
      for (z = 0; z < S; z++) {
        const J = (P[z] = me ? Ri(P[z]) : qn(P[z]));
        d(A[z], J, j, null, ee, he, pe, oe, me);
      }
      ae > E ? F(A, ee, he, !0, !1, S) : M(P, j, K, ee, he, pe, oe, me, S);
    },
    H = (A, P, j, K, ee, he, pe, oe, me) => {
      let ae = 0;
      const E = P.length;
      let S = A.length - 1,
        z = E - 1;
      for (; ae <= S && ae <= z; ) {
        const J = A[ae],
          ie = (P[ae] = me ? Ri(P[ae]) : qn(P[ae]));
        if (hr(J, ie)) d(J, ie, j, null, ee, he, pe, oe, me);
        else break;
        ae++;
      }
      for (; ae <= S && ae <= z; ) {
        const J = A[S],
          ie = (P[z] = me ? Ri(P[z]) : qn(P[z]));
        if (hr(J, ie)) d(J, ie, j, null, ee, he, pe, oe, me);
        else break;
        S--, z--;
      }
      if (ae > S) {
        if (ae <= z) {
          const J = z + 1,
            ie = J < E ? P[J].el : K;
          for (; ae <= z; )
            d(
              null,
              (P[ae] = me ? Ri(P[ae]) : qn(P[ae])),
              j,
              ie,
              ee,
              he,
              pe,
              oe,
              me
            ),
              ae++;
        }
      } else if (ae > z) for (; ae <= S; ) te(A[ae], ee, he, !0), ae++;
      else {
        const J = ae,
          ie = ae,
          fe = new Map();
        for (ae = ie; ae <= z; ae++) {
          const we = (P[ae] = me ? Ri(P[ae]) : qn(P[ae]));
          we.key != null && fe.set(we.key, ae);
        }
        let Me,
          D = 0;
        const k = z - ie + 1;
        let be = !1,
          Ee = 0;
        const Se = new Array(k);
        for (ae = 0; ae < k; ae++) Se[ae] = 0;
        for (ae = J; ae <= S; ae++) {
          const we = A[ae];
          if (D >= k) {
            te(we, ee, he, !0);
            continue;
          }
          let De;
          if (we.key != null) De = fe.get(we.key);
          else
            for (Me = ie; Me <= z; Me++)
              if (Se[Me - ie] === 0 && hr(we, P[Me])) {
                De = Me;
                break;
              }
          De === void 0
            ? te(we, ee, he, !0)
            : ((Se[De - ie] = ae + 1),
              De >= Ee ? (Ee = De) : (be = !0),
              d(we, P[De], j, null, ee, he, pe, oe, me),
              D++);
        }
        const Ce = be ? H0(Se) : ps;
        for (Me = Ce.length - 1, ae = k - 1; ae >= 0; ae--) {
          const we = ie + ae,
            De = P[we],
            ke = we + 1 < E ? P[we + 1].el : K;
          Se[ae] === 0
            ? d(null, De, j, ke, ee, he, pe, oe, me)
            : be && (Me < 0 || ae !== Ce[Me] ? ue(De, j, ke, 2) : Me--);
        }
      }
    },
    ue = (A, P, j, K, ee = null) => {
      const {
        el: he,
        type: pe,
        transition: oe,
        children: me,
        shapeFlag: ae,
      } = A;
      if (ae & 6) {
        ue(A.component.subTree, P, j, K);
        return;
      }
      if (ae & 128) {
        A.suspense.move(P, j, K);
        return;
      }
      if (ae & 64) {
        pe.move(A, P, j, ve);
        return;
      }
      if (pe === Vt) {
        n(he, P, j);
        for (let S = 0; S < me.length; S++) ue(me[S], P, j, K);
        n(A.anchor, P, j);
        return;
      }
      if (pe === yl) {
        v(A, P, j);
        return;
      }
      if (K !== 2 && ae & 1 && oe)
        if (K === 0)
          oe.beforeEnter(he), n(he, P, j), kt(() => oe.enter(he), ee);
        else {
          const { leave: S, delayLeave: z, afterLeave: J } = oe,
            ie = () => n(he, P, j),
            fe = () => {
              S(he, () => {
                ie(), J && J();
              });
            };
          z ? z(he, ie, fe) : fe();
        }
      else n(he, P, j);
    },
    te = (A, P, j, K = !1, ee = !1) => {
      const {
        type: he,
        props: pe,
        ref: oe,
        children: me,
        dynamicChildren: ae,
        shapeFlag: E,
        patchFlag: S,
        dirs: z,
      } = A;
      if ((oe != null && Pc(oe, null, j, A, !0), E & 256)) {
        P.ctx.deactivate(A);
        return;
      }
      const J = E & 1 && z,
        ie = !va(A);
      let fe;
      if ((ie && (fe = pe && pe.onVnodeBeforeUnmount) && Hn(fe, P, A), E & 6))
        G(A.component, j, K);
      else {
        if (E & 128) {
          A.suspense.unmount(j, K);
          return;
        }
        J && er(A, null, P, 'beforeUnmount'),
          E & 64
            ? A.type.remove(A, P, j, ee, ve, K)
            : ae && (he !== Vt || (S > 0 && S & 64))
            ? F(ae, P, j, !1, !0)
            : ((he === Vt && S & 384) || (!ee && E & 16)) && F(me, P, j),
          K && de(A);
      }
      ((ie && (fe = pe && pe.onVnodeUnmounted)) || J) &&
        kt(() => {
          fe && Hn(fe, P, A), J && er(A, null, P, 'unmounted');
        }, j);
    },
    de = A => {
      const { type: P, el: j, anchor: K, transition: ee } = A;
      if (P === Vt) {
        xe(j, K);
        return;
      }
      if (P === yl) {
        y(A);
        return;
      }
      const he = () => {
        r(j), ee && !ee.persisted && ee.afterLeave && ee.afterLeave();
      };
      if (A.shapeFlag & 1 && ee && !ee.persisted) {
        const { leave: pe, delayLeave: oe } = ee,
          me = () => pe(j, he);
        oe ? oe(A.el, he, me) : me();
      } else he();
    },
    xe = (A, P) => {
      let j;
      for (; A !== P; ) (j = h(A)), r(A), (A = j);
      r(P);
    },
    G = (A, P, j) => {
      const { bum: K, scope: ee, update: he, subTree: pe, um: oe } = A;
      K && _l(K),
        ee.stop(),
        he && ((he.active = !1), te(pe, A, P, j)),
        oe && kt(oe, P),
        kt(() => {
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
    F = (A, P, j, K = !1, ee = !1, he = 0) => {
      for (let pe = he; pe < A.length; pe++) te(A[pe], P, j, K, ee);
    },
    le = A =>
      A.shapeFlag & 6
        ? le(A.component.subTree)
        : A.shapeFlag & 128
        ? A.suspense.next()
        : h(A.anchor || A.el),
    ce = (A, P, j) => {
      A == null
        ? P._vnode && te(P._vnode, null, null, !0)
        : d(P._vnode || null, A, P, null, null, null, j),
        Tf(),
        Cp(),
        (P._vnode = A);
    },
    ve = {
      p: d,
      um: te,
      m: ue,
      r: de,
      mt: I,
      mc: M,
      pc: V,
      pbc: R,
      n: le,
      o: i,
    };
  let _e, Te;
  return (
    e && ([_e, Te] = e(ve)), { render: ce, hydrate: _e, createApp: k0(ce, _e) }
  );
}
function tr({ effect: i, update: e }, t) {
  i.allowRecurse = e.allowRecurse = t;
}
function Xp(i, e, t = !1) {
  const n = i.children,
    r = e.children;
  if (Fe(n) && Fe(r))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let a = r[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[s] = Ri(r[s])), (a.el = o.el)),
        t || Xp(o, a));
    }
}
function H0(i) {
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
const W0 = i => i.__isTeleport,
  Vt = Symbol(void 0),
  Au = Symbol(void 0),
  pi = Symbol(void 0),
  yl = Symbol(void 0),
  oo = [];
let zn = null;
function nn(i = !1) {
  oo.push((zn = i ? null : []));
}
function q0() {
  oo.pop(), (zn = oo[oo.length - 1] || null);
}
let Mo = 1;
function Ff(i) {
  Mo += i;
}
function jp(i) {
  return (
    (i.dynamicChildren = Mo > 0 ? zn || ps : null),
    q0(),
    Mo > 0 && zn && zn.push(i),
    i
  );
}
function xn(i, e, t, n, r, s) {
  return jp(Dn(i, e, t, n, r, s, !0));
}
function X0(i, e, t, n, r) {
  return jp(jt(i, e, t, n, r, !0));
}
function Lc(i) {
  return i ? i.__v_isVNode === !0 : !1;
}
function hr(i, e) {
  return i.type === e.type && i.key === e.key;
}
const el = '__vInternal',
  Yp = ({ key: i }) => (i != null ? i : null),
  Ma = ({ ref: i, ref_key: e, ref_for: t }) =>
    i != null
      ? Mt(i) || Dt(i) || Ue(i)
        ? { i: Zn, r: i, k: e, f: !!t }
        : i
      : null;
function Dn(
  i,
  e = null,
  t = null,
  n = 0,
  r = null,
  s = i === Vt ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i,
    props: e,
    key: e && Yp(e),
    ref: e && Ma(e),
    scopeId: Rp,
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
      ? (Cu(l, t), s & 128 && i.normalize(l))
      : t && (l.shapeFlag |= Mt(t) ? 8 : 16),
    Mo > 0 &&
      !o &&
      zn &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      zn.push(l),
    l
  );
}
const jt = j0;
function j0(i, e = null, t = null, n = 0, r = null, s = !1) {
  if (((!i || i === A0) && (i = pi), Lc(i))) {
    const a = Xi(i, e, !0);
    return (
      t && Cu(a, t),
      Mo > 0 &&
        !s &&
        zn &&
        (a.shapeFlag & 6 ? (zn[zn.indexOf(i)] = a) : zn.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((rx(i) && (i = i.__vccOpts), e)) {
    e = Y0(e);
    let { class: a, style: l } = e;
    a && !Mt(a) && (e.class = qa(a)),
      it(l) && (xp(l) && !Fe(l) && (l = Ot({}, l)), (e.style = ds(l)));
  }
  const o = Mt(i) ? 1 : f0(i) ? 128 : W0(i) ? 64 : it(i) ? 4 : Ue(i) ? 2 : 0;
  return Dn(i, e, t, n, r, o, s, !0);
}
function Y0(i) {
  return i ? (xp(i) || el in i ? Ot({}, i) : i) : null;
}
function Xi(i, e, t = !1) {
  const { props: n, ref: r, patchFlag: s, children: o } = i,
    a = e ? $0(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i.type,
    props: a,
    key: a && Yp(a),
    ref:
      e && e.ref
        ? t && r
          ? Fe(r)
            ? r.concat(Ma(e))
            : [r, Ma(e)]
          : Ma(e)
        : r,
    scopeId: i.scopeId,
    slotScopeIds: i.slotScopeIds,
    children: o,
    target: i.target,
    targetAnchor: i.targetAnchor,
    staticCount: i.staticCount,
    shapeFlag: i.shapeFlag,
    patchFlag: e && i.type !== Vt ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: i.dynamicProps,
    dynamicChildren: i.dynamicChildren,
    appContext: i.appContext,
    dirs: i.dirs,
    transition: i.transition,
    component: i.component,
    suspense: i.suspense,
    ssContent: i.ssContent && Xi(i.ssContent),
    ssFallback: i.ssFallback && Xi(i.ssFallback),
    el: i.el,
    anchor: i.anchor,
  };
}
function $p(i = ' ', e = 0) {
  return jt(Au, null, i, e);
}
function qn(i) {
  return i == null || typeof i == 'boolean'
    ? jt(pi)
    : Fe(i)
    ? jt(Vt, null, i.slice())
    : typeof i == 'object'
    ? Ri(i)
    : jt(Au, null, String(i));
}
function Ri(i) {
  return (i.el === null && i.patchFlag !== -1) || i.memo ? i : Xi(i);
}
function Cu(i, e) {
  let t = 0;
  const { shapeFlag: n } = i;
  if (e == null) e = null;
  else if (Fe(e)) t = 16;
  else if (typeof e == 'object')
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Cu(i, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = e._;
      !r && !(el in e)
        ? (e._ctx = Zn)
        : r === 3 &&
          Zn &&
          (Zn.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (i.patchFlag |= 1024)));
    }
  else
    Ue(e)
      ? ((e = { default: e, _ctx: Zn }), (t = 32))
      : ((e = String(e)), n & 64 ? ((t = 16), (e = [$p(e)])) : (t = 8));
  (i.children = e), (i.shapeFlag |= t);
}
function $0(...i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    for (const r in n)
      if (r === 'class')
        e.class !== n.class && (e.class = qa([e.class, n.class]));
      else if (r === 'style') e.style = ds([e.style, n.style]);
      else if (Xa(r)) {
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
function Hn(i, e, t, n = null) {
  wn(i, e, 7, [t, n]);
}
const Z0 = qp();
let K0 = 0;
function J0(i, e, t) {
  const n = i.type,
    r = (e ? e.appContext : i.appContext) || Z0,
    s = {
      uid: K0++,
      vnode: i,
      type: n,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new op(!0),
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
      propsOptions: Vp(n, r),
      emitsOptions: Lp(n, r),
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
    (s.emit = o0.bind(null, s)),
    i.ce && i.ce(s),
    s
  );
}
let wt = null;
const Q0 = () => wt || Zn,
  Ts = i => {
    (wt = i), i.scope.on();
  },
  yr = () => {
    wt && wt.scope.off(), (wt = null);
  };
function Zp(i) {
  return i.vnode.shapeFlag & 4;
}
let bo = !1;
function ex(i, e = !1) {
  bo = e;
  const { props: t, children: n } = i.vnode,
    r = Zp(i);
  O0(i, t, r, e), z0(i, n);
  const s = r ? tx(i, e) : void 0;
  return (bo = !1), s;
}
function tx(i, e) {
  const t = i.type;
  (i.accessCache = Object.create(null)), (i.proxy = yu(new Proxy(i.ctx, C0)));
  const { setup: n } = t;
  if (n) {
    const r = (i.setupContext = n.length > 1 ? ix(i) : null);
    Ts(i), Vs();
    const s = Bi(n, i, 0, [i.props, r]);
    if ((Gs(), yr(), np(s))) {
      if ((s.then(yr, yr), e))
        return s
          .then(o => {
            Nf(i, o, e);
          })
          .catch(o => {
            Za(o, i, 0);
          });
      i.asyncDep = s;
    } else Nf(i, s, e);
  } else Kp(i, e);
}
function Nf(i, e, t) {
  Ue(e)
    ? i.type.__ssrInlineRender
      ? (i.ssrRender = e)
      : (i.render = e)
    : it(e) && (i.setupState = Sp(e)),
    Kp(i, t);
}
let zf;
function Kp(i, e, t) {
  const n = i.type;
  if (!i.render) {
    if (!e && zf && !n.render) {
      const r = n.template || Tu(i).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = i.appContext.config,
          { delimiters: a, compilerOptions: l } = n,
          c = Ot(Ot({ isCustomElement: s, delimiters: a }, o), l);
        n.render = zf(r, c);
      }
    }
    i.render = n.render || Un;
  }
  Ts(i), Vs(), P0(i), Gs(), yr();
}
function nx(i) {
  return new Proxy(i.attrs, {
    get(e, t) {
      return ln(i, 'get', '$attrs'), e[t];
    },
  });
}
function ix(i) {
  const e = n => {
    i.exposed = n || {};
  };
  let t;
  return {
    get attrs() {
      return t || (t = nx(i));
    },
    slots: i.slots,
    emit: i.emit,
    expose: e,
  };
}
function Pu(i) {
  if (i.exposed)
    return (
      i.exposeProxy ||
      (i.exposeProxy = new Proxy(Sp(yu(i.exposed)), {
        get(e, t) {
          if (t in e) return e[t];
          if (t in La) return La[t](i);
        },
      }))
    );
}
function rx(i) {
  return Ue(i) && '__vccOpts' in i;
}
const Bt = (i, e) => e0(i, e, bo);
function Jp(i, e, t) {
  const n = arguments.length;
  return n === 2
    ? it(e) && !Fe(e)
      ? Lc(e)
        ? jt(i, null, [e])
        : jt(i, e)
      : jt(i, null, e)
    : (n > 3
        ? (t = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Lc(t) && (t = [t]),
      jt(i, e, t));
}
const sx = '3.2.41',
  ox = 'http://www.w3.org/2000/svg',
  dr = typeof document < 'u' ? document : null,
  Uf = dr && dr.createElement('template'),
  ax = {
    insert: (i, e, t) => {
      e.insertBefore(i, t || null);
    },
    remove: i => {
      const e = i.parentNode;
      e && e.removeChild(i);
    },
    createElement: (i, e, t, n) => {
      const r = e
        ? dr.createElementNS(ox, i)
        : dr.createElement(i, t ? { is: t } : void 0);
      return (
        i === 'select' &&
          n &&
          n.multiple != null &&
          r.setAttribute('multiple', n.multiple),
        r
      );
    },
    createText: i => dr.createTextNode(i),
    createComment: i => dr.createComment(i),
    setText: (i, e) => {
      i.nodeValue = e;
    },
    setElementText: (i, e) => {
      i.textContent = e;
    },
    parentNode: i => i.parentNode,
    nextSibling: i => i.nextSibling,
    querySelector: i => dr.querySelector(i),
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
        Uf.innerHTML = n ? `<svg>${i}</svg>` : i;
        const a = Uf.content;
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
function lx(i, e, t) {
  const n = i._vtc;
  n && (e = (e ? [e, ...n] : [...n]).join(' ')),
    e == null
      ? i.removeAttribute('class')
      : t
      ? i.setAttribute('class', e)
      : (i.className = e);
}
function cx(i, e, t) {
  const n = i.style,
    r = Mt(t);
  if (t && !r) {
    for (const s in t) Rc(n, s, t[s]);
    if (e && !Mt(e)) for (const s in e) t[s] == null && Rc(n, s, '');
  } else {
    const s = n.display;
    r ? e !== t && (n.cssText = t) : e && i.removeAttribute('style'),
      '_vod' in i && (n.display = s);
  }
}
const Bf = /\s*!important$/;
function Rc(i, e, t) {
  if (Fe(t)) t.forEach(n => Rc(i, e, n));
  else if ((t == null && (t = ''), e.startsWith('--'))) i.setProperty(e, t);
  else {
    const n = ux(i, e);
    Bf.test(t)
      ? i.setProperty(ks(n), t.replace(Bf, ''), 'important')
      : (i[n] = t);
  }
}
const kf = ['Webkit', 'Moz', 'ms'],
  Ml = {};
function ux(i, e) {
  const t = Ml[e];
  if (t) return t;
  let n = Ss(e);
  if (n !== 'filter' && n in i) return (Ml[e] = n);
  n = sp(n);
  for (let r = 0; r < kf.length; r++) {
    const s = kf[r] + n;
    if (s in i) return (Ml[e] = s);
  }
  return e;
}
const Vf = 'http://www.w3.org/1999/xlink';
function fx(i, e, t, n, r) {
  if (n && e.startsWith('xlink:'))
    t == null
      ? i.removeAttributeNS(Vf, e.slice(6, e.length))
      : i.setAttributeNS(Vf, e, t);
  else {
    const s = u_(e);
    t == null || (s && !Qd(t))
      ? i.removeAttribute(e)
      : i.setAttribute(e, s ? '' : t);
  }
}
function hx(i, e, t, n, r, s, o) {
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
      ? (t = Qd(t))
      : t == null && l === 'string'
      ? ((t = ''), (a = !0))
      : l === 'number' && ((t = 0), (a = !0));
  }
  try {
    i[e] = t;
  } catch {}
  a && i.removeAttribute(e);
}
function dx(i, e, t, n) {
  i.addEventListener(e, t, n);
}
function px(i, e, t, n) {
  i.removeEventListener(e, t, n);
}
function mx(i, e, t, n, r = null) {
  const s = i._vei || (i._vei = {}),
    o = s[e];
  if (n && o) o.value = n;
  else {
    const [a, l] = gx(e);
    if (n) {
      const c = (s[e] = vx(n, r));
      dx(i, a, c, l);
    } else o && (px(i, a, o, l), (s[e] = void 0));
  }
}
const Gf = /(?:Once|Passive|Capture)$/;
function gx(i) {
  let e;
  if (Gf.test(i)) {
    e = {};
    let n;
    for (; (n = i.match(Gf)); )
      (i = i.slice(0, i.length - n[0].length)), (e[n[0].toLowerCase()] = !0);
  }
  return [i[2] === ':' ? i.slice(3) : ks(i.slice(2)), e];
}
let bl = 0;
const _x = Promise.resolve(),
  xx = () => bl || (_x.then(() => (bl = 0)), (bl = Date.now()));
function vx(i, e) {
  const t = n => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= t.attached) return;
    wn(yx(n, t.value), e, 5, [n]);
  };
  return (t.value = i), (t.attached = xx()), t;
}
function yx(i, e) {
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
const Hf = /^on[a-z]/,
  Mx = (i, e, t, n, r = !1, s, o, a, l) => {
    e === 'class'
      ? lx(i, n, r)
      : e === 'style'
      ? cx(i, t, n)
      : Xa(e)
      ? uu(e) || mx(i, e, t, n, o)
      : (
          e[0] === '.'
            ? ((e = e.slice(1)), !0)
            : e[0] === '^'
            ? ((e = e.slice(1)), !1)
            : bx(i, e, n, r)
        )
      ? hx(i, e, n, s, o, a, l)
      : (e === 'true-value'
          ? (i._trueValue = n)
          : e === 'false-value' && (i._falseValue = n),
        fx(i, e, n, r));
  };
function bx(i, e, t, n) {
  return n
    ? !!(
        e === 'innerHTML' ||
        e === 'textContent' ||
        (e in i && Hf.test(e) && Ue(t))
      )
    : e === 'spellcheck' ||
      e === 'draggable' ||
      e === 'translate' ||
      e === 'form' ||
      (e === 'list' && i.tagName === 'INPUT') ||
      (e === 'type' && i.tagName === 'TEXTAREA') ||
      (Hf.test(e) && Mt(t))
    ? !1
    : e in i;
}
const Sx = {
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
g0.props;
const wx = Ot({ patchProp: Mx }, ax);
let Wf;
function Tx() {
  return Wf || (Wf = V0(wx));
}
const Ex = (...i) => {
  const e = Tx().createApp(...i),
    { mount: t } = e;
  return (
    (e.mount = n => {
      const r = Ax(n);
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
function Ax(i) {
  return Mt(i) ? document.querySelector(i) : i;
}
var Cx = !1;
/*!
 * pinia v2.0.23
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Px = Symbol();
var qf;
(function (i) {
  (i.direct = 'direct'),
    (i.patchObject = 'patch object'),
    (i.patchFunction = 'patch function');
})(qf || (qf = {}));
function Lx() {
  const i = b_(!0),
    e = i.run(() => Mp({}));
  let t = [],
    n = [];
  const r = yu({
    install(s) {
      (r._a = s),
        s.provide(Px, r),
        (s.config.globalProperties.$pinia = r),
        n.forEach(o => t.push(o)),
        (n = []);
    },
    use(s) {
      return !this._a && !Cx ? n.push(s) : t.push(s), this;
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
 */ const as = typeof window < 'u';
function Rx(i) {
  return i.__esModule || i[Symbol.toStringTag] === 'Module';
}
const Ze = Object.assign;
function Sl(i, e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    t[n] = kn(r) ? r.map(i) : i(r);
  }
  return t;
}
const ao = () => {},
  kn = Array.isArray,
  Dx = /\/$/,
  Ix = i => i.replace(Dx, '');
function wl(i, e, t = '/') {
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
    (n = zx(n != null ? n : e, t)),
    { fullPath: n + (s && '?') + s + o, path: n, query: r, hash: o }
  );
}
function Ox(i, e) {
  const t = e.query ? i(e.query) : '';
  return e.path + (t && '?') + t + (e.hash || '');
}
function Xf(i, e) {
  return !e || !i.toLowerCase().startsWith(e.toLowerCase())
    ? i
    : i.slice(e.length) || '/';
}
function Fx(i, e, t) {
  const n = e.matched.length - 1,
    r = t.matched.length - 1;
  return (
    n > -1 &&
    n === r &&
    Es(e.matched[n], t.matched[r]) &&
    Qp(e.params, t.params) &&
    i(e.query) === i(t.query) &&
    e.hash === t.hash
  );
}
function Es(i, e) {
  return (i.aliasOf || i) === (e.aliasOf || e);
}
function Qp(i, e) {
  if (Object.keys(i).length !== Object.keys(e).length) return !1;
  for (const t in i) if (!Nx(i[t], e[t])) return !1;
  return !0;
}
function Nx(i, e) {
  return kn(i) ? jf(i, e) : kn(e) ? jf(e, i) : i === e;
}
function jf(i, e) {
  return kn(e)
    ? i.length === e.length && i.every((t, n) => t === e[n])
    : i.length === 1 && i[0] === e;
}
function zx(i, e) {
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
var So;
(function (i) {
  (i.pop = 'pop'), (i.push = 'push');
})(So || (So = {}));
var lo;
(function (i) {
  (i.back = 'back'), (i.forward = 'forward'), (i.unknown = '');
})(lo || (lo = {}));
function Ux(i) {
  if (!i)
    if (as) {
      const e = document.querySelector('base');
      (i = (e && e.getAttribute('href')) || '/'),
        (i = i.replace(/^\w+:\/\/[^\/]+/, ''));
    } else i = '/';
  return i[0] !== '/' && i[0] !== '#' && (i = '/' + i), Ix(i);
}
const Bx = /^[^#]+#/;
function kx(i, e) {
  return i.replace(Bx, '#') + e;
}
function Vx(i, e) {
  const t = document.documentElement.getBoundingClientRect(),
    n = i.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: n.left - t.left - (e.left || 0),
    top: n.top - t.top - (e.top || 0),
  };
}
const tl = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Gx(i) {
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
    e = Vx(r, i);
  } else e = i;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function Yf(i, e) {
  return (history.state ? history.state.position - e : -1) + i;
}
const Dc = new Map();
function Hx(i, e) {
  Dc.set(i, e);
}
function Wx(i) {
  const e = Dc.get(i);
  return Dc.delete(i), e;
}
let qx = () => location.protocol + '//' + location.host;
function em(i, e) {
  const { pathname: t, search: n, hash: r } = e,
    s = i.indexOf('#');
  if (s > -1) {
    let a = r.includes(i.slice(s)) ? i.slice(s).length : 1,
      l = r.slice(a);
    return l[0] !== '/' && (l = '/' + l), Xf(l, '');
  }
  return Xf(t, i) + n + r;
}
function Xx(i, e, t, n) {
  let r = [],
    s = [],
    o = null;
  const a = ({ state: h }) => {
    const p = em(i, location),
      g = t.value,
      d = e.value;
    let m = 0;
    if (h) {
      if (((t.value = p), (e.value = h), o && o === g)) {
        o = null;
        return;
      }
      m = d ? h.position - d.position : 0;
    } else n(p);
    r.forEach(_ => {
      _(t.value, g, {
        delta: m,
        type: So.pop,
        direction: m ? (m > 0 ? lo.forward : lo.back) : lo.unknown,
      });
    });
  };
  function l() {
    o = t.value;
  }
  function c(h) {
    r.push(h);
    const p = () => {
      const g = r.indexOf(h);
      g > -1 && r.splice(g, 1);
    };
    return s.push(p), p;
  }
  function u() {
    const { history: h } = window;
    !h.state || h.replaceState(Ze({}, h.state, { scroll: tl() }), '');
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
function $f(i, e, t, n = !1, r = !1) {
  return {
    back: i,
    current: e,
    forward: t,
    replaced: n,
    position: window.history.length,
    scroll: r ? tl() : null,
  };
}
function jx(i) {
  const { history: e, location: t } = window,
    n = { value: em(i, t) },
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
          : qx() + i + l;
    try {
      e[u ? 'replaceState' : 'pushState'](c, '', h), (r.value = c);
    } catch (p) {
      console.error(p), t[u ? 'replace' : 'assign'](h);
    }
  }
  function o(l, c) {
    const u = Ze({}, e.state, $f(r.value.back, l, r.value.forward, !0), c, {
      position: r.value.position,
    });
    s(l, u, !0), (n.value = l);
  }
  function a(l, c) {
    const u = Ze({}, r.value, e.state, { forward: l, scroll: tl() });
    s(u.current, u, !0);
    const f = Ze({}, $f(n.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (n.value = l);
  }
  return { location: n, state: r, push: a, replace: o };
}
function Yx(i) {
  i = Ux(i);
  const e = jx(i),
    t = Xx(i, e.state, e.location, e.replace);
  function n(s, o = !0) {
    o || t.pauseListeners(), history.go(s);
  }
  const r = Ze(
    { location: '', base: i, go: n, createHref: kx.bind(null, i) },
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
function $x(i) {
  return (
    (i = location.host ? i || location.pathname + location.search : ''),
    i.includes('#') || (i += '#'),
    Yx(i)
  );
}
function Zx(i) {
  return typeof i == 'string' || (i && typeof i == 'object');
}
function tm(i) {
  return typeof i == 'string' || typeof i == 'symbol';
}
const Si = {
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
  nm = Symbol('');
var Zf;
(function (i) {
  (i[(i.aborted = 4)] = 'aborted'),
    (i[(i.cancelled = 8)] = 'cancelled'),
    (i[(i.duplicated = 16)] = 'duplicated');
})(Zf || (Zf = {}));
function As(i, e) {
  return Ze(new Error(), { type: i, [nm]: !0 }, e);
}
function ni(i, e) {
  return i instanceof Error && nm in i && (e == null || !!(i.type & e));
}
const Kf = '[^/]+?',
  Kx = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Jx = /[.+*?^${}()[\]/\\]/g;
function Qx(i, e) {
  const t = Ze({}, Kx, e),
    n = [];
  let r = t.start ? '^' : '';
  const s = [];
  for (const c of i) {
    const u = c.length ? [] : [90];
    t.strict && !c.length && (r += '/');
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let p = 40 + (t.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += '/'), (r += h.value.replace(Jx, '\\$&')), (p += 40);
      else if (h.type === 1) {
        const { value: g, repeatable: d, optional: m, regexp: _ } = h;
        s.push({ name: g, repeatable: d, optional: m });
        const x = _ || Kf;
        if (x !== Kf) {
          p += 10;
          try {
            new RegExp(`(${x})`);
          } catch (y) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${x}): ` + y.message
            );
          }
        }
        let v = d ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        f || (v = m && c.length < 2 ? `(?:/${v})` : '/' + v),
          m && (v += '?'),
          (r += v),
          (p += 20),
          m && (p += -8),
          d && (p += -20),
          x === '.*' && (p += -50);
      }
      u.push(p);
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
      const p = u[h] || '',
        g = s[h - 1];
      f[g.name] = p && g.repeatable ? p.split('/') : p;
    }
    return f;
  }
  function l(c) {
    let u = '',
      f = !1;
    for (const h of i) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const p of h)
        if (p.type === 0) u += p.value;
        else if (p.type === 1) {
          const { value: g, repeatable: d, optional: m } = p,
            _ = g in c ? c[g] : '';
          if (kn(_) && !d)
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
function ev(i, e) {
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
function tv(i, e) {
  let t = 0;
  const n = i.score,
    r = e.score;
  for (; t < n.length && t < r.length; ) {
    const s = ev(n[t], r[t]);
    if (s) return s;
    t++;
  }
  if (Math.abs(r.length - n.length) === 1) {
    if (Jf(n)) return 1;
    if (Jf(r)) return -1;
  }
  return r.length - n.length;
}
function Jf(i) {
  const e = i[i.length - 1];
  return i.length > 0 && e[e.length - 1] < 0;
}
const nv = { type: 0, value: '' },
  iv = /[a-zA-Z0-9_]/;
function rv(i) {
  if (!i) return [[]];
  if (i === '/') return [[nv]];
  if (!i.startsWith('/')) throw new Error(`Invalid path "${i}"`);
  function e(p) {
    throw new Error(`ERR (${t})/"${c}": ${p}`);
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
          : iv.test(l)
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
function sv(i, e, t) {
  const n = Qx(rv(i.path), t),
    r = Ze(n, { record: i, parent: e, children: [], alias: [] });
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function ov(i, e) {
  const t = [],
    n = new Map();
  e = th({ strict: !1, end: !0, sensitive: !1 }, e);
  function r(u) {
    return n.get(u);
  }
  function s(u, f, h) {
    const p = !h,
      g = av(u);
    g.aliasOf = h && h.record;
    const d = th(e, u),
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
        ((_ = sv(v, f, d)),
        h
          ? h.alias.push(_)
          : ((x = x || _),
            x !== _ && x.alias.push(_),
            p && u.name && !eh(_) && o(u.name)),
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
      : ao;
  }
  function o(u) {
    if (tm(u)) {
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
      tv(u, t[f]) >= 0 &&
      (u.record.path !== t[f].record.path || !im(u, t[f]));

    )
      f++;
    t.splice(f, 0, u), u.record.name && !eh(u) && n.set(u.record.name, u);
  }
  function c(u, f) {
    let h,
      p = {},
      g,
      d;
    if ('name' in u && u.name) {
      if (((h = n.get(u.name)), !h)) throw As(1, { location: u });
      (d = h.record.name),
        (p = Ze(
          Qf(
            f.params,
            h.keys.filter(x => !x.optional).map(x => x.name)
          ),
          u.params &&
            Qf(
              u.params,
              h.keys.map(x => x.name)
            )
        )),
        (g = h.stringify(p));
    } else if ('path' in u)
      (g = u.path),
        (h = t.find(x => x.re.test(g))),
        h && ((p = h.parse(g)), (d = h.record.name));
    else {
      if (((h = f.name ? n.get(f.name) : t.find(x => x.re.test(f.path))), !h))
        throw As(1, { location: u, currentLocation: f });
      (d = h.record.name),
        (p = Ze({}, f.params, u.params)),
        (g = h.stringify(p));
    }
    const m = [];
    let _ = h;
    for (; _; ) m.unshift(_.record), (_ = _.parent);
    return { name: d, path: g, params: p, matched: m, meta: cv(m) };
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
function Qf(i, e) {
  const t = {};
  for (const n of e) n in i && (t[n] = i[n]);
  return t;
}
function av(i) {
  return {
    path: i.path,
    redirect: i.redirect,
    name: i.name,
    meta: i.meta || {},
    aliasOf: void 0,
    beforeEnter: i.beforeEnter,
    props: lv(i),
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
function lv(i) {
  const e = {},
    t = i.props || !1;
  if ('component' in i) e.default = t;
  else for (const n in i.components) e[n] = typeof t == 'boolean' ? t : t[n];
  return e;
}
function eh(i) {
  for (; i; ) {
    if (i.record.aliasOf) return !0;
    i = i.parent;
  }
  return !1;
}
function cv(i) {
  return i.reduce((e, t) => Ze(e, t.meta), {});
}
function th(i, e) {
  const t = {};
  for (const n in i) t[n] = n in e ? e[n] : i[n];
  return t;
}
function im(i, e) {
  return e.children.some(t => t === i || im(i, t));
}
const rm = /#/g,
  uv = /&/g,
  fv = /\//g,
  hv = /=/g,
  dv = /\?/g,
  sm = /\+/g,
  pv = /%5B/g,
  mv = /%5D/g,
  om = /%5E/g,
  gv = /%60/g,
  am = /%7B/g,
  _v = /%7C/g,
  lm = /%7D/g,
  xv = /%20/g;
function Lu(i) {
  return encodeURI('' + i)
    .replace(_v, '|')
    .replace(pv, '[')
    .replace(mv, ']');
}
function vv(i) {
  return Lu(i).replace(am, '{').replace(lm, '}').replace(om, '^');
}
function Ic(i) {
  return Lu(i)
    .replace(sm, '%2B')
    .replace(xv, '+')
    .replace(rm, '%23')
    .replace(uv, '%26')
    .replace(gv, '`')
    .replace(am, '{')
    .replace(lm, '}')
    .replace(om, '^');
}
function yv(i) {
  return Ic(i).replace(hv, '%3D');
}
function Mv(i) {
  return Lu(i).replace(rm, '%23').replace(dv, '%3F');
}
function bv(i) {
  return i == null ? '' : Mv(i).replace(fv, '%2F');
}
function Da(i) {
  try {
    return decodeURIComponent('' + i);
  } catch {}
  return '' + i;
}
function Sv(i) {
  const e = {};
  if (i === '' || i === '?') return e;
  const n = (i[0] === '?' ? i.slice(1) : i).split('&');
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(sm, ' '),
      o = s.indexOf('='),
      a = Da(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Da(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      kn(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function nh(i) {
  let e = '';
  for (let t in i) {
    const n = i[t];
    if (((t = yv(t)), n == null)) {
      n !== void 0 && (e += (e.length ? '&' : '') + t);
      continue;
    }
    (kn(n) ? n.map(s => s && Ic(s)) : [n && Ic(n)]).forEach(s => {
      s !== void 0 &&
        ((e += (e.length ? '&' : '') + t), s != null && (e += '=' + s));
    });
  }
  return e;
}
function wv(i) {
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
const Tv = Symbol(''),
  ih = Symbol(''),
  Ru = Symbol(''),
  cm = Symbol(''),
  Oc = Symbol('');
function Xs() {
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
function Di(i, e, t, n, r) {
  const s = n && (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
  return () =>
    new Promise((o, a) => {
      const l = f => {
          f === !1
            ? a(As(4, { from: t, to: e }))
            : f instanceof Error
            ? a(f)
            : Zx(f)
            ? a(As(2, { from: e, to: f }))
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
function Tl(i, e, t, n) {
  const r = [];
  for (const s of i)
    for (const o in s.components) {
      let a = s.components[o];
      if (!(e !== 'beforeRouteEnter' && !s.instances[o]))
        if (Ev(a)) {
          const c = (a.__vccOpts || a)[e];
          c && r.push(Di(c, t, n, s, o));
        } else {
          let l = a();
          r.push(() =>
            l.then(c => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${s.path}"`)
                );
              const u = Rx(c) ? c.default : c;
              s.components[o] = u;
              const h = (u.__vccOpts || u)[e];
              return h && Di(h, t, n, s, o)();
            })
          );
        }
    }
  return r;
}
function Ev(i) {
  return (
    typeof i == 'object' ||
    'displayName' in i ||
    'props' in i ||
    '__vccOpts' in i
  );
}
function rh(i) {
  const e = ki(Ru),
    t = ki(cm),
    n = Bt(() => e.resolve(on(i.to))),
    r = Bt(() => {
      const { matched: l } = n.value,
        { length: c } = l,
        u = l[c - 1],
        f = t.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Es.bind(null, u));
      if (h > -1) return h;
      const p = sh(l[c - 2]);
      return c > 1 && sh(u) === p && f[f.length - 1].path !== p
        ? f.findIndex(Es.bind(null, l[c - 2]))
        : h;
    }),
    s = Bt(() => r.value > -1 && Pv(t.params, n.value.params)),
    o = Bt(
      () =>
        r.value > -1 &&
        r.value === t.matched.length - 1 &&
        Qp(t.params, n.value.params)
    );
  function a(l = {}) {
    return Cv(l)
      ? e[on(i.replace) ? 'replace' : 'push'](on(i.to)).catch(ao)
      : Promise.resolve();
  }
  return {
    route: n,
    href: Bt(() => n.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
const Av = Dr({
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
    useLink: rh,
    setup(i, { slots: e }) {
      const t = Hs(rh(i)),
        { options: n } = ki(Ru),
        r = Bt(() => ({
          [oh(i.activeClass, n.linkActiveClass, 'router-link-active')]:
            t.isActive,
          [oh(
            i.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active'
          )]: t.isExactActive,
        }));
      return () => {
        const s = e.default && e.default(t);
        return i.custom
          ? s
          : Jp(
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
  um = Av;
function Cv(i) {
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
function Pv(i, e) {
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
function sh(i) {
  return i ? (i.aliasOf ? i.aliasOf.path : i.path) : '';
}
const oh = (i, e, t) => (i != null ? i : e != null ? e : t),
  Lv = Dr({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(i, { attrs: e, slots: t }) {
      const n = ki(Oc),
        r = Bt(() => i.route || n.value),
        s = ki(ih, 0),
        o = Bt(() => {
          let c = on(s);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = Bt(() => r.value.matched[o.value]);
      _a(
        ih,
        Bt(() => o.value + 1)
      ),
        _a(Tv, a),
        _a(Oc, r);
      const l = Mp();
      return (
        xa(
          () => [l.value, a.value, i.name],
          ([c, u, f], [h, p, g]) => {
            u &&
              ((u.instances[f] = c),
              p &&
                p !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c &&
                u &&
                (!p || !Es(u, p) || !h) &&
                (u.enterCallbacks[f] || []).forEach(d => d(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = r.value,
            u = i.name,
            f = a.value,
            h = f && f.components[u];
          if (!h) return ah(t.default, { Component: h, route: c });
          const p = f.props[u],
            g = p
              ? p === !0
                ? c.params
                : typeof p == 'function'
                ? p(c)
                : p
              : null,
            m = Jp(
              h,
              Ze({}, g, e, {
                onVnodeUnmounted: _ => {
                  _.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return ah(t.default, { Component: m, route: c }) || m;
        }
      );
    },
  });
function ah(i, e) {
  if (!i) return null;
  const t = i(e);
  return t.length === 1 ? t[0] : t;
}
const fm = Lv;
function Rv(i) {
  const e = ov(i.routes, i),
    t = i.parseQuery || Sv,
    n = i.stringifyQuery || nh,
    r = i.history,
    s = Xs(),
    o = Xs(),
    a = Xs(),
    l = Z_(Si);
  let c = Si;
  as &&
    i.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Sl.bind(null, G => '' + G),
    f = Sl.bind(null, bv),
    h = Sl.bind(null, Da);
  function p(G, F) {
    let le, ce;
    return (
      tm(G) ? ((le = e.getRecordMatcher(G)), (ce = F)) : (ce = G),
      e.addRoute(ce, le)
    );
  }
  function g(G) {
    const F = e.getRecordMatcher(G);
    F && e.removeRoute(F);
  }
  function d() {
    return e.getRoutes().map(G => G.record);
  }
  function m(G) {
    return !!e.getRecordMatcher(G);
  }
  function _(G, F) {
    if (((F = Ze({}, F || l.value)), typeof G == 'string')) {
      const A = wl(t, G, F.path),
        P = e.resolve({ path: A.path }, F),
        j = r.createHref(A.fullPath);
      return Ze(A, P, {
        params: h(P.params),
        hash: Da(A.hash),
        redirectedFrom: void 0,
        href: j,
      });
    }
    let le;
    if ('path' in G) le = Ze({}, G, { path: wl(t, G.path, F.path).path });
    else {
      const A = Ze({}, G.params);
      for (const P in A) A[P] == null && delete A[P];
      (le = Ze({}, G, { params: f(G.params) })), (F.params = f(F.params));
    }
    const ce = e.resolve(le, F),
      ve = G.hash || '';
    ce.params = u(h(ce.params));
    const _e = Ox(n, Ze({}, G, { hash: vv(ve), path: ce.path })),
      Te = r.createHref(_e);
    return Ze(
      { fullPath: _e, hash: ve, query: n === nh ? wv(G.query) : G.query || {} },
      ce,
      { redirectedFrom: void 0, href: Te }
    );
  }
  function x(G) {
    return typeof G == 'string' ? wl(t, G, l.value.path) : Ze({}, G);
  }
  function v(G, F) {
    if (c !== G) return As(8, { from: F, to: G });
  }
  function y(G) {
    return L(G);
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
  function L(G, F) {
    const le = (c = _(G)),
      ce = l.value,
      ve = G.state,
      _e = G.force,
      Te = G.replace === !0,
      A = T(le);
    if (A)
      return L(
        Ze(x(A), {
          state: typeof A == 'object' ? Ze({}, ve, A.state) : ve,
          force: _e,
          replace: Te,
        }),
        F || le
      );
    const P = le;
    P.redirectedFrom = F;
    let j;
    return (
      !_e &&
        Fx(n, ce, le) &&
        ((j = As(16, { to: P, from: ce })), H(ce, ce, !0, !1)),
      (j ? Promise.resolve(j) : w(P, ce))
        .catch(K => (ni(K) ? (ni(K, 2) ? K : N(K)) : $(K, P, ce)))
        .then(K => {
          if (K) {
            if (ni(K, 2))
              return L(
                Ze({ replace: Te }, x(K.to), {
                  state: typeof K.to == 'object' ? Ze({}, ve, K.to.state) : ve,
                  force: _e,
                }),
                F || P
              );
          } else K = q(P, ce, !0, Te, ve);
          return R(P, ce, K), K;
        })
    );
  }
  function M(G, F) {
    const le = v(G, F);
    return le ? Promise.reject(le) : Promise.resolve();
  }
  function w(G, F) {
    let le;
    const [ce, ve, _e] = Dv(G, F);
    le = Tl(ce.reverse(), 'beforeRouteLeave', G, F);
    for (const A of ce)
      A.leaveGuards.forEach(P => {
        le.push(Di(P, G, F));
      });
    const Te = M.bind(null, G, F);
    return (
      le.push(Te),
      Ur(le)
        .then(() => {
          le = [];
          for (const A of s.list()) le.push(Di(A, G, F));
          return le.push(Te), Ur(le);
        })
        .then(() => {
          le = Tl(ve, 'beforeRouteUpdate', G, F);
          for (const A of ve)
            A.updateGuards.forEach(P => {
              le.push(Di(P, G, F));
            });
          return le.push(Te), Ur(le);
        })
        .then(() => {
          le = [];
          for (const A of G.matched)
            if (A.beforeEnter && !F.matched.includes(A))
              if (kn(A.beforeEnter))
                for (const P of A.beforeEnter) le.push(Di(P, G, F));
              else le.push(Di(A.beforeEnter, G, F));
          return le.push(Te), Ur(le);
        })
        .then(
          () => (
            G.matched.forEach(A => (A.enterCallbacks = {})),
            (le = Tl(_e, 'beforeRouteEnter', G, F)),
            le.push(Te),
            Ur(le)
          )
        )
        .then(() => {
          le = [];
          for (const A of o.list()) le.push(Di(A, G, F));
          return le.push(Te), Ur(le);
        })
        .catch(A => (ni(A, 8) ? A : Promise.reject(A)))
    );
  }
  function R(G, F, le) {
    for (const ce of a.list()) ce(G, F, le);
  }
  function q(G, F, le, ce, ve) {
    const _e = v(G, F);
    if (_e) return _e;
    const Te = F === Si,
      A = as ? history.state : {};
    le &&
      (ce || Te
        ? r.replace(G.fullPath, Ze({ scroll: Te && A && A.scroll }, ve))
        : r.push(G.fullPath, ve)),
      (l.value = G),
      H(G, F, le, Te),
      N();
  }
  let Q;
  function B() {
    Q ||
      (Q = r.listen((G, F, le) => {
        if (!xe.listening) return;
        const ce = _(G),
          ve = T(ce);
        if (ve) {
          L(Ze(ve, { replace: !0 }), ce).catch(ao);
          return;
        }
        c = ce;
        const _e = l.value;
        as && Hx(Yf(_e.fullPath, le.delta), tl()),
          w(ce, _e)
            .catch(Te =>
              ni(Te, 12)
                ? Te
                : ni(Te, 2)
                ? (L(Te.to, ce)
                    .then(A => {
                      ni(A, 20) &&
                        !le.delta &&
                        le.type === So.pop &&
                        r.go(-1, !1);
                    })
                    .catch(ao),
                  Promise.reject())
                : (le.delta && r.go(-le.delta, !1), $(Te, ce, _e))
            )
            .then(Te => {
              (Te = Te || q(ce, _e, !1)),
                Te &&
                  (le.delta && !ni(Te, 8)
                    ? r.go(-le.delta, !1)
                    : le.type === So.pop && ni(Te, 20) && r.go(-1, !1)),
                R(ce, _e, Te);
            })
            .catch(ao);
      }));
  }
  let I = Xs(),
    X = Xs(),
    Z;
  function $(G, F, le) {
    N(G);
    const ce = X.list();
    return (
      ce.length ? ce.forEach(ve => ve(G, F, le)) : console.error(G),
      Promise.reject(G)
    );
  }
  function V() {
    return Z && l.value !== Si
      ? Promise.resolve()
      : new Promise((G, F) => {
          I.add([G, F]);
        });
  }
  function N(G) {
    return (
      Z ||
        ((Z = !G),
        B(),
        I.list().forEach(([F, le]) => (G ? le(G) : F())),
        I.reset()),
      G
    );
  }
  function H(G, F, le, ce) {
    const { scrollBehavior: ve } = i;
    if (!as || !ve) return Promise.resolve();
    const _e =
      (!le && Wx(Yf(G.fullPath, 0))) ||
      ((ce || !le) && history.state && history.state.scroll) ||
      null;
    return Ep()
      .then(() => ve(G, F, _e))
      .then(Te => Te && Gx(Te))
      .catch(Te => $(Te, G, F));
  }
  const ue = G => r.go(G);
  let te;
  const de = new Set(),
    xe = {
      currentRoute: l,
      listening: !0,
      addRoute: p,
      removeRoute: g,
      hasRoute: m,
      getRoutes: d,
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
      onError: X.add,
      isReady: V,
      install(G) {
        const F = this;
        G.component('RouterLink', um),
          G.component('RouterView', fm),
          (G.config.globalProperties.$router = F),
          Object.defineProperty(G.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => on(l),
          }),
          as &&
            !te &&
            l.value === Si &&
            ((te = !0), y(r.location).catch(ve => {}));
        const le = {};
        for (const ve in Si) le[ve] = Bt(() => l.value[ve]);
        G.provide(Ru, F), G.provide(cm, Hs(le)), G.provide(Oc, l);
        const ce = G.unmount;
        de.add(G),
          (G.unmount = function () {
            de.delete(G),
              de.size < 1 &&
                ((c = Si),
                Q && Q(),
                (Q = null),
                (l.value = Si),
                (te = !1),
                (Z = !1)),
              ce();
          });
      },
    };
  return xe;
}
function Ur(i) {
  return i.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function Dv(i, e) {
  const t = [],
    n = [],
    r = [],
    s = Math.max(e.matched.length, i.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (i.matched.find(c => Es(c, a)) ? n.push(a) : t.push(a));
    const l = i.matched[o];
    l && (e.matched.find(c => Es(c, l)) || r.push(l));
  }
  return [t, n, r];
}
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Du = '146',
  Br = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  kr = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Iv = 0,
  lh = 1,
  Ov = 2,
  hm = 1,
  Fv = 2,
  no = 3,
  Cs = 0,
  Tn = 1,
  hi = 2,
  Vi = 0,
  xs = 1,
  co = 2,
  ch = 3,
  uh = 4,
  Nv = 5,
  ls = 100,
  zv = 101,
  Uv = 102,
  fh = 103,
  hh = 104,
  Bv = 200,
  kv = 201,
  Vv = 202,
  Gv = 203,
  dm = 204,
  pm = 205,
  Hv = 206,
  Wv = 207,
  qv = 208,
  Xv = 209,
  jv = 210,
  Yv = 0,
  $v = 1,
  Zv = 2,
  Fc = 3,
  Kv = 4,
  Jv = 5,
  Qv = 6,
  ey = 7,
  mm = 0,
  ty = 1,
  ny = 2,
  mi = 0,
  iy = 1,
  ry = 2,
  sy = 3,
  oy = 4,
  ay = 5,
  gm = 300,
  Ps = 301,
  Ls = 302,
  Nc = 303,
  zc = 304,
  nl = 306,
  Uc = 1e3,
  On = 1001,
  Bc = 1002,
  Gt = 1003,
  dh = 1004,
  ph = 1005,
  Ht = 1006,
  ly = 1007,
  il = 1008,
  Er = 1009,
  cy = 1010,
  uy = 1011,
  _m = 1012,
  fy = 1013,
  mr = 1014,
  gr = 1015,
  wo = 1016,
  hy = 1017,
  dy = 1018,
  vs = 1020,
  py = 1021,
  my = 1022,
  Fn = 1023,
  gy = 1024,
  _y = 1025,
  Mr = 1026,
  Rs = 1027,
  xy = 1028,
  vy = 1029,
  yy = 1030,
  My = 1031,
  by = 1033,
  El = 33776,
  Al = 33777,
  Cl = 33778,
  Pl = 33779,
  mh = 35840,
  gh = 35841,
  _h = 35842,
  xh = 35843,
  Sy = 36196,
  vh = 37492,
  yh = 37496,
  Mh = 37808,
  bh = 37809,
  Sh = 37810,
  wh = 37811,
  Th = 37812,
  Eh = 37813,
  Ah = 37814,
  Ch = 37815,
  Ph = 37816,
  Lh = 37817,
  Rh = 37818,
  Dh = 37819,
  Ih = 37820,
  Oh = 37821,
  Fh = 36492,
  Ar = 3e3,
  at = 3001,
  wy = 3200,
  Ty = 3201,
  xm = 0,
  Ey = 1,
  ci = 'srgb',
  _r = 'srgb-linear',
  Ll = 7680,
  Ay = 519,
  kc = 35044,
  Nh = '300 es',
  Vc = 1035;
class Ir {
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
const Pt = [
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
  ],
  Rl = Math.PI / 180,
  zh = 180 / Math.PI;
function Gi() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Pt[i & 255] +
    Pt[(i >> 8) & 255] +
    Pt[(i >> 16) & 255] +
    Pt[(i >> 24) & 255] +
    '-' +
    Pt[e & 255] +
    Pt[(e >> 8) & 255] +
    '-' +
    Pt[((e >> 16) & 15) | 64] +
    Pt[(e >> 24) & 255] +
    '-' +
    Pt[(t & 63) | 128] +
    Pt[(t >> 8) & 255] +
    '-' +
    Pt[(t >> 16) & 255] +
    Pt[(t >> 24) & 255] +
    Pt[n & 255] +
    Pt[(n >> 8) & 255] +
    Pt[(n >> 16) & 255] +
    Pt[(n >> 24) & 255]
  ).toLowerCase();
}
function Wt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Cy(i, e) {
  return ((i % e) + e) % e;
}
function Dl(i, e, t) {
  return (1 - t) * i + t * e;
}
function Uh(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function Gc(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ii(i, e) {
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
class Ie {
  constructor(e = 0, t = 0) {
    (Ie.prototype.isVector2 = !0), (this.x = e), (this.y = t);
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
class vn {
  constructor() {
    (vn.prototype.isMatrix3 = !0),
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
      p = n[5],
      g = n[8],
      d = r[0],
      m = r[3],
      _ = r[6],
      x = r[1],
      v = r[4],
      y = r[7],
      b = r[2],
      T = r[5],
      L = r[8];
    return (
      (s[0] = o * d + a * x + l * b),
      (s[3] = o * m + a * v + l * T),
      (s[6] = o * _ + a * y + l * L),
      (s[1] = c * d + u * x + f * b),
      (s[4] = c * m + u * v + f * T),
      (s[7] = c * _ + u * y + f * L),
      (s[2] = h * d + p * x + g * b),
      (s[5] = h * m + p * v + g * T),
      (s[8] = h * _ + p * y + g * L),
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
      p = c * s - o * l,
      g = t * f + n * h + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const d = 1 / g;
    return (
      (e[0] = f * d),
      (e[1] = (r * c - u * n) * d),
      (e[2] = (a * n - r * o) * d),
      (e[3] = h * d),
      (e[4] = (u * t - r * l) * d),
      (e[5] = (r * s - a * t) * d),
      (e[6] = p * d),
      (e[7] = (n * l - c * t) * d),
      (e[8] = (o * t - n * s) * d),
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
function vm(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function To(i) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', i);
}
function br(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ba(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const Il = { [ci]: { [_r]: br }, [_r]: { [ci]: ba } },
  Cn = {
    legacyMode: !0,
    get workingColorSpace() {
      return _r;
    },
    set workingColorSpace(i) {
      console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
    },
    convert: function (i, e, t) {
      if (this.legacyMode || e === t || !e || !t) return i;
      if (Il[e] && Il[e][t] !== void 0) {
        const n = Il[e][t];
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
  ym = {
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
  mt = { r: 0, g: 0, b: 0 },
  Pn = { h: 0, s: 0, l: 0 },
  Wo = { h: 0, s: 0, l: 0 };
function Ol(i, e, t) {
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
function qo(i, e) {
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
  setHex(e, t = ci) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Cn.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = _r) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Cn.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = _r) {
    if (((e = Cy(e, 1)), (t = Wt(t, 0, 1)), (n = Wt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = Ol(o, s, e + 1 / 3)),
        (this.g = Ol(o, s, e)),
        (this.b = Ol(o, s, e - 1 / 3));
    }
    return Cn.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = ci) {
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
              Cn.toWorkingColorSpace(this, t),
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
              Cn.toWorkingColorSpace(this, t),
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
          Cn.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          Cn.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = ci) {
    const n = ym[e.toLowerCase()];
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
    return (this.r = br(e.r)), (this.g = br(e.g)), (this.b = br(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = ba(e.r)), (this.g = ba(e.g)), (this.b = ba(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ci) {
    return (
      Cn.fromWorkingColorSpace(qo(this, mt), e),
      (Wt(mt.r * 255, 0, 255) << 16) ^
        (Wt(mt.g * 255, 0, 255) << 8) ^
        (Wt(mt.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = ci) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = _r) {
    Cn.fromWorkingColorSpace(qo(this, mt), t);
    const n = mt.r,
      r = mt.g,
      s = mt.b,
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
  getRGB(e, t = _r) {
    return (
      Cn.fromWorkingColorSpace(qo(this, mt), t),
      (e.r = mt.r),
      (e.g = mt.g),
      (e.b = mt.b),
      e
    );
  }
  getStyle(e = ci) {
    return (
      Cn.fromWorkingColorSpace(qo(this, mt), e),
      e !== ci
        ? `color(${e} ${mt.r} ${mt.g} ${mt.b})`
        : `rgb(${(mt.r * 255) | 0},${(mt.g * 255) | 0},${(mt.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Pn),
      (Pn.h += e),
      (Pn.s += t),
      (Pn.l += n),
      this.setHSL(Pn.h, Pn.s, Pn.l),
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
    this.getHSL(Pn), e.getHSL(Wo);
    const n = Dl(Pn.h, Wo.h, t),
      r = Dl(Pn.s, Wo.s, t),
      s = Dl(Pn.l, Wo.l, t);
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
qe.NAMES = ym;
let Vr;
class Mm {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Vr === void 0 && (Vr = To('canvas')),
        (Vr.width = e.width),
        (Vr.height = e.height);
      const n = Vr.getContext('2d');
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Vr);
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
      const t = To('canvas');
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext('2d');
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = br(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(br(t[n] / 255) * 255))
          : (t[n] = br(t[n]));
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
class bm {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = Gi()),
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
          r[o].isDataTexture ? s.push(Fl(r[o].image)) : s.push(Fl(r[o]));
      } else s = Fl(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Fl(i) {
  return (typeof HTMLImageElement < 'u' && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && i instanceof ImageBitmap)
    ? Mm.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let Py = 0;
class cn extends Ir {
  constructor(
    e = cn.DEFAULT_IMAGE,
    t = cn.DEFAULT_MAPPING,
    n = On,
    r = On,
    s = Ht,
    o = il,
    a = Fn,
    l = Er,
    c = 1,
    u = Ar
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: Py++ }),
      (this.uuid = Gi()),
      (this.name = ''),
      (this.source = new bm(e)),
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
      (this.offset = new Ie(0, 0)),
      (this.repeat = new Ie(1, 1)),
      (this.center = new Ie(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new vn()),
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
    if (this.mapping !== gm) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Uc:
          e.x = e.x - Math.floor(e.x);
          break;
        case On:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Bc:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Uc:
          e.y = e.y - Math.floor(e.y);
          break;
        case On:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Bc:
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
cn.DEFAULT_IMAGE = null;
cn.DEFAULT_MAPPING = gm;
class Tt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (Tt.prototype.isVector4 = !0),
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
      p = l[5],
      g = l[9],
      d = l[2],
      m = l[6],
      _ = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(f - d) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(f + d) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(c + p + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2,
        y = (p + 1) / 2,
        b = (_ + 1) / 2,
        T = (u + h) / 4,
        L = (f + d) / 4,
        M = (g + m) / 4;
      return (
        v > y && v > b
          ? v < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(v)), (r = T / n), (s = L / n))
          : y > b
          ? y < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(y)), (n = T / r), (s = M / r))
          : b < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(b)), (n = L / s), (r = M / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let x = Math.sqrt(
      (m - g) * (m - g) + (f - d) * (f - d) + (h - u) * (h - u)
    );
    return (
      Math.abs(x) < 0.001 && (x = 1),
      (this.x = (m - g) / x),
      (this.y = (f - d) / x),
      (this.z = (h - u) / x),
      (this.w = Math.acos((c + p + _ - 1) / 2)),
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
class Cr extends Ir {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Tt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Tt(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    (this.texture = new cn(
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
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Ht),
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
      (this.texture.source = new bm(t)),
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
class Sm extends cn {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = Gt),
      (this.minFilter = Gt),
      (this.wrapR = On),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ly extends cn {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = Gt),
      (this.minFilter = Gt),
      (this.wrapR = On),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Pr {
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
      p = s[o + 1],
      g = s[o + 2],
      d = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
      return;
    }
    if (a === 1) {
      (e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = d);
      return;
    }
    if (f !== d || l !== h || c !== p || u !== g) {
      let m = 1 - a;
      const _ = l * h + c * p + u * g + f * d,
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
        (c = c * m + p * y),
        (u = u * m + g * y),
        (f = f * m + d * y),
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
      p = s[o + 2],
      g = s[o + 3];
    return (
      (e[t] = a * g + u * f + l * p - c * h),
      (e[t + 1] = l * g + u * h + c * f - a * p),
      (e[t + 2] = c * g + u * p + a * h - l * f),
      (e[t + 3] = u * g - a * f - l * h - c * p),
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
      p = l(r / 2),
      g = l(s / 2);
    switch (o) {
      case 'XYZ':
        (this._x = h * u * f + c * p * g),
          (this._y = c * p * f - h * u * g),
          (this._z = c * u * g + h * p * f),
          (this._w = c * u * f - h * p * g);
        break;
      case 'YXZ':
        (this._x = h * u * f + c * p * g),
          (this._y = c * p * f - h * u * g),
          (this._z = c * u * g - h * p * f),
          (this._w = c * u * f + h * p * g);
        break;
      case 'ZXY':
        (this._x = h * u * f - c * p * g),
          (this._y = c * p * f + h * u * g),
          (this._z = c * u * g + h * p * f),
          (this._w = c * u * f - h * p * g);
        break;
      case 'ZYX':
        (this._x = h * u * f - c * p * g),
          (this._y = c * p * f + h * u * g),
          (this._z = c * u * g - h * p * f),
          (this._w = c * u * f + h * p * g);
        break;
      case 'YZX':
        (this._x = h * u * f + c * p * g),
          (this._y = c * p * f + h * u * g),
          (this._z = c * u * g - h * p * f),
          (this._w = c * u * f - h * p * g);
        break;
      case 'XZY':
        (this._x = h * u * f - c * p * g),
          (this._y = c * p * f - h * u * g),
          (this._z = c * u * g + h * p * f),
          (this._w = c * u * f + h * p * g);
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
      const p = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / p),
        (this._x = (u - l) * p),
        (this._y = (s - c) * p),
        (this._z = (o - r) * p);
    } else if (n > a && n > f) {
      const p = 2 * Math.sqrt(1 + n - a - f);
      (this._w = (u - l) / p),
        (this._x = 0.25 * p),
        (this._y = (r + o) / p),
        (this._z = (s + c) / p);
    } else if (a > f) {
      const p = 2 * Math.sqrt(1 + a - n - f);
      (this._w = (s - c) / p),
        (this._x = (r + o) / p),
        (this._y = 0.25 * p),
        (this._z = (l + u) / p);
    } else {
      const p = 2 * Math.sqrt(1 + f - n - a);
      (this._w = (o - r) / p),
        (this._x = (s + c) / p),
        (this._y = (l + u) / p),
        (this._z = 0.25 * p);
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
    return 2 * Math.acos(Math.abs(Wt(this.dot(e), -1, 1)));
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
      const p = 1 - t;
      return (
        (this._w = p * o + t * this._w),
        (this._x = p * n + t * this._x),
        (this._y = p * r + t * this._y),
        (this._z = p * s + t * this._z),
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
class U {
  constructor(e = 0, t = 0, n = 0) {
    (U.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
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
    return this.applyQuaternion(Bh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Bh.setFromAxisAngle(e, t));
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
    return Nl.copy(this).projectOnVector(e), this.sub(Nl);
  }
  reflect(e) {
    return this.sub(Nl.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Wt(n, -1, 1));
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
const Nl = new U(),
  Bh = new Pr();
class Oo {
  constructor(
    e = new U(1 / 0, 1 / 0, 1 / 0),
    t = new U(-1 / 0, -1 / 0, -1 / 0)
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
    const n = nr.copy(t).multiplyScalar(0.5);
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
          nr.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(nr);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          zl.copy(n.boundingBox),
          zl.applyMatrix4(e.matrixWorld),
          this.union(zl);
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
      this.clampPoint(e.center, nr),
      nr.distanceToSquared(e.center) <= e.radius * e.radius
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
    this.getCenter(js),
      Xo.subVectors(this.max, js),
      Gr.subVectors(e.a, js),
      Hr.subVectors(e.b, js),
      Wr.subVectors(e.c, js),
      wi.subVectors(Hr, Gr),
      Ti.subVectors(Wr, Hr),
      ir.subVectors(Gr, Wr);
    let t = [
      0,
      -wi.z,
      wi.y,
      0,
      -Ti.z,
      Ti.y,
      0,
      -ir.z,
      ir.y,
      wi.z,
      0,
      -wi.x,
      Ti.z,
      0,
      -Ti.x,
      ir.z,
      0,
      -ir.x,
      -wi.y,
      wi.x,
      0,
      -Ti.y,
      Ti.x,
      0,
      -ir.y,
      ir.x,
      0,
    ];
    return !Ul(t, Gr, Hr, Wr, Xo) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ul(t, Gr, Hr, Wr, Xo))
      ? !1
      : (jo.crossVectors(wi, Ti),
        (t = [jo.x, jo.y, jo.z]),
        Ul(t, Gr, Hr, Wr, Xo));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return nr.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(nr).length() * 0.5), e
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
      : (ii[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        ii[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        ii[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        ii[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        ii[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        ii[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        ii[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        ii[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(ii),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const ii = [
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
  ],
  nr = new U(),
  zl = new Oo(),
  Gr = new U(),
  Hr = new U(),
  Wr = new U(),
  wi = new U(),
  Ti = new U(),
  ir = new U(),
  js = new U(),
  Xo = new U(),
  jo = new U(),
  rr = new U();
function Ul(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    rr.fromArray(i, s);
    const a =
        r.x * Math.abs(rr.x) + r.y * Math.abs(rr.y) + r.z * Math.abs(rr.z),
      l = e.dot(rr),
      c = t.dot(rr),
      u = n.dot(rr);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const Ry = new Oo(),
  Ys = new U(),
  Bl = new U();
class Fo {
  constructor(e = new U(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ry.setFromPoints(e).getCenter(n);
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
    Ys.subVectors(e, this.center);
    const t = Ys.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ys, r / n), (this.radius += r);
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
          : (Bl.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Ys.copy(e.center).add(Bl)),
            this.expandByPoint(Ys.copy(e.center).sub(Bl))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ri = new U(),
  kl = new U(),
  Yo = new U(),
  Ei = new U(),
  Vl = new U(),
  $o = new U(),
  Gl = new U();
class Iu {
  constructor(e = new U(), t = new U(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, ri)), this;
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
    const t = ri.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (ri.copy(this.direction).multiplyScalar(t).add(this.origin),
        ri.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    kl.copy(e).add(t).multiplyScalar(0.5),
      Yo.copy(t).sub(e).normalize(),
      Ei.copy(this.origin).sub(kl);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Yo),
      a = Ei.dot(this.direction),
      l = -Ei.dot(Yo),
      c = Ei.lengthSq(),
      u = Math.abs(1 - o * o);
    let f, h, p, g;
    if (u > 0)
      if (((f = o * l - a), (h = o * a - l), (g = s * u), f >= 0))
        if (h >= -g)
          if (h <= g) {
            const d = 1 / u;
            (f *= d),
              (h *= d),
              (p = f * (f + o * h + 2 * a) + h * (o * f + h + 2 * l) + c);
          } else
            (h = s),
              (f = Math.max(0, -(o * h + a))),
              (p = -f * f + h * (h + 2 * l) + c);
        else
          (h = -s),
            (f = Math.max(0, -(o * h + a))),
            (p = -f * f + h * (h + 2 * l) + c);
      else
        h <= -g
          ? ((f = Math.max(0, -(-o * s + a))),
            (h = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (p = -f * f + h * (h + 2 * l) + c))
          : h <= g
          ? ((f = 0),
            (h = Math.min(Math.max(-s, -l), s)),
            (p = h * (h + 2 * l) + c))
          : ((f = Math.max(0, -(o * s + a))),
            (h = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (p = -f * f + h * (h + 2 * l) + c));
    else
      (h = o > 0 ? -s : s),
        (f = Math.max(0, -(o * h + a))),
        (p = -f * f + h * (h + 2 * l) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(f).add(this.origin),
      r && r.copy(Yo).multiplyScalar(h).add(kl),
      p
    );
  }
  intersectSphere(e, t) {
    ri.subVectors(e.center, this.origin);
    const n = ri.dot(this.direction),
      r = ri.dot(ri) - n * n,
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
    return this.intersectBox(e, ri) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Vl.subVectors(t, e), $o.subVectors(n, e), Gl.crossVectors(Vl, $o);
    let o = this.direction.dot(Gl),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Ei.subVectors(this.origin, e);
    const l = a * this.direction.dot($o.crossVectors(Ei, $o));
    if (l < 0) return null;
    const c = a * this.direction.dot(Vl.cross(Ei));
    if (c < 0 || l + c > o) return null;
    const u = -a * Ei.dot(Gl);
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
class pt {
  constructor() {
    (pt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, r, s, o, a, l, c, u, f, h, p, g, d, m) {
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
      (_[3] = p),
      (_[7] = g),
      (_[11] = d),
      (_[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new pt().fromArray(this.elements);
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
      r = 1 / qr.setFromMatrixColumn(e, 0).length(),
      s = 1 / qr.setFromMatrixColumn(e, 1).length(),
      o = 1 / qr.setFromMatrixColumn(e, 2).length();
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
        p = o * f,
        g = a * u,
        d = a * f;
      (t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = p + g * c),
        (t[5] = h - d * c),
        (t[9] = -a * l),
        (t[2] = d - h * c),
        (t[6] = g + p * c),
        (t[10] = o * l);
    } else if (e.order === 'YXZ') {
      const h = l * u,
        p = l * f,
        g = c * u,
        d = c * f;
      (t[0] = h + d * a),
        (t[4] = g * a - p),
        (t[8] = o * c),
        (t[1] = o * f),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = p * a - g),
        (t[6] = d + h * a),
        (t[10] = o * l);
    } else if (e.order === 'ZXY') {
      const h = l * u,
        p = l * f,
        g = c * u,
        d = c * f;
      (t[0] = h - d * a),
        (t[4] = -o * f),
        (t[8] = g + p * a),
        (t[1] = p + g * a),
        (t[5] = o * u),
        (t[9] = d - h * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === 'ZYX') {
      const h = o * u,
        p = o * f,
        g = a * u,
        d = a * f;
      (t[0] = l * u),
        (t[4] = g * c - p),
        (t[8] = h * c + d),
        (t[1] = l * f),
        (t[5] = d * c + h),
        (t[9] = p * c - g),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === 'YZX') {
      const h = o * l,
        p = o * c,
        g = a * l,
        d = a * c;
      (t[0] = l * u),
        (t[4] = d - h * f),
        (t[8] = g * f + p),
        (t[1] = f),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = p * f + g),
        (t[10] = h - d * f);
    } else if (e.order === 'XZY') {
      const h = o * l,
        p = o * c,
        g = a * l,
        d = a * c;
      (t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = h * f + d),
        (t[5] = o * u),
        (t[9] = p * f - g),
        (t[2] = g * f - p),
        (t[6] = a * u),
        (t[10] = d * f + h);
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
    return this.compose(Dy, e, Iy);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      en.subVectors(e, t),
      en.lengthSq() === 0 && (en.z = 1),
      en.normalize(),
      Ai.crossVectors(n, en),
      Ai.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (en.x += 1e-4) : (en.z += 1e-4),
        en.normalize(),
        Ai.crossVectors(n, en)),
      Ai.normalize(),
      Zo.crossVectors(en, Ai),
      (r[0] = Ai.x),
      (r[4] = Zo.x),
      (r[8] = en.x),
      (r[1] = Ai.y),
      (r[5] = Zo.y),
      (r[9] = en.y),
      (r[2] = Ai.z),
      (r[6] = Zo.z),
      (r[10] = en.z),
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
      p = n[13],
      g = n[2],
      d = n[6],
      m = n[10],
      _ = n[14],
      x = n[3],
      v = n[7],
      y = n[11],
      b = n[15],
      T = r[0],
      L = r[4],
      M = r[8],
      w = r[12],
      R = r[1],
      q = r[5],
      Q = r[9],
      B = r[13],
      I = r[2],
      X = r[6],
      Z = r[10],
      $ = r[14],
      V = r[3],
      N = r[7],
      H = r[11],
      ue = r[15];
    return (
      (s[0] = o * T + a * R + l * I + c * V),
      (s[4] = o * L + a * q + l * X + c * N),
      (s[8] = o * M + a * Q + l * Z + c * H),
      (s[12] = o * w + a * B + l * $ + c * ue),
      (s[1] = u * T + f * R + h * I + p * V),
      (s[5] = u * L + f * q + h * X + p * N),
      (s[9] = u * M + f * Q + h * Z + p * H),
      (s[13] = u * w + f * B + h * $ + p * ue),
      (s[2] = g * T + d * R + m * I + _ * V),
      (s[6] = g * L + d * q + m * X + _ * N),
      (s[10] = g * M + d * Q + m * Z + _ * H),
      (s[14] = g * w + d * B + m * $ + _ * ue),
      (s[3] = x * T + v * R + y * I + b * V),
      (s[7] = x * L + v * q + y * X + b * N),
      (s[11] = x * M + v * Q + y * Z + b * H),
      (s[15] = x * w + v * B + y * $ + b * ue),
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
      p = e[14],
      g = e[3],
      d = e[7],
      m = e[11],
      _ = e[15];
    return (
      g *
        (+s * l * f -
          r * c * f -
          s * a * h +
          n * c * h +
          r * a * p -
          n * l * p) +
      d *
        (+t * l * p -
          t * c * h +
          s * o * h -
          r * o * p +
          r * c * u -
          s * l * u) +
      m *
        (+t * c * f -
          t * a * p -
          s * o * f +
          n * o * p +
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
      p = e[11],
      g = e[12],
      d = e[13],
      m = e[14],
      _ = e[15],
      x = f * m * c - d * h * c + d * l * p - a * m * p - f * l * _ + a * h * _,
      v = g * h * c - u * m * c - g * l * p + o * m * p + u * l * _ - o * h * _,
      y = u * d * c - g * f * c + g * a * p - o * d * p - u * a * _ + o * f * _,
      b = g * f * l - u * d * l - g * a * h + o * d * h + u * a * m - o * f * m,
      T = t * x + n * v + r * y + s * b;
    if (T === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / T;
    return (
      (e[0] = x * L),
      (e[1] =
        (d * h * s -
          f * m * s -
          d * r * p +
          n * m * p +
          f * r * _ -
          n * h * _) *
        L),
      (e[2] =
        (a * m * s -
          d * l * s +
          d * r * c -
          n * m * c -
          a * r * _ +
          n * l * _) *
        L),
      (e[3] =
        (f * l * s -
          a * h * s -
          f * r * c +
          n * h * c +
          a * r * p -
          n * l * p) *
        L),
      (e[4] = v * L),
      (e[5] =
        (u * m * s -
          g * h * s +
          g * r * p -
          t * m * p -
          u * r * _ +
          t * h * _) *
        L),
      (e[6] =
        (g * l * s -
          o * m * s -
          g * r * c +
          t * m * c +
          o * r * _ -
          t * l * _) *
        L),
      (e[7] =
        (o * h * s -
          u * l * s +
          u * r * c -
          t * h * c -
          o * r * p +
          t * l * p) *
        L),
      (e[8] = y * L),
      (e[9] =
        (g * f * s -
          u * d * s -
          g * n * p +
          t * d * p +
          u * n * _ -
          t * f * _) *
        L),
      (e[10] =
        (o * d * s -
          g * a * s +
          g * n * c -
          t * d * c -
          o * n * _ +
          t * a * _) *
        L),
      (e[11] =
        (u * a * s -
          o * f * s -
          u * n * c +
          t * f * c +
          o * n * p -
          t * a * p) *
        L),
      (e[12] = b * L),
      (e[13] =
        (u * d * r -
          g * f * r +
          g * n * h -
          t * d * h -
          u * n * m +
          t * f * m) *
        L),
      (e[14] =
        (g * a * r -
          o * d * r -
          g * n * l +
          t * d * l +
          o * n * m -
          t * a * m) *
        L),
      (e[15] =
        (o * f * r -
          u * a * r +
          u * n * l -
          t * f * l -
          o * n * h +
          t * a * h) *
        L),
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
      p = s * u,
      g = s * f,
      d = o * u,
      m = o * f,
      _ = a * f,
      x = l * c,
      v = l * u,
      y = l * f,
      b = n.x,
      T = n.y,
      L = n.z;
    return (
      (r[0] = (1 - (d + _)) * b),
      (r[1] = (p + y) * b),
      (r[2] = (g - v) * b),
      (r[3] = 0),
      (r[4] = (p - y) * T),
      (r[5] = (1 - (h + _)) * T),
      (r[6] = (m + x) * T),
      (r[7] = 0),
      (r[8] = (g + v) * L),
      (r[9] = (m - x) * L),
      (r[10] = (1 - (h + d)) * L),
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
    let s = qr.set(r[0], r[1], r[2]).length();
    const o = qr.set(r[4], r[5], r[6]).length(),
      a = qr.set(r[8], r[9], r[10]).length();
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
      p = (-2 * o * s) / (o - s);
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
      (a[14] = p),
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
      p = (o + s) * u;
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
      (a[14] = -p),
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
const qr = new U(),
  Ln = new pt(),
  Dy = new U(0, 0, 0),
  Iy = new U(1, 1, 1),
  Ai = new U(),
  Zo = new U(),
  en = new U(),
  kh = new pt(),
  Vh = new Pr();
class No {
  constructor(e = 0, t = 0, n = 0, r = No.DefaultOrder) {
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
      p = r[10];
    switch (t) {
      case 'XYZ':
        (this._y = Math.asin(Wt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-Wt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(Wt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, p)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-Wt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(Wt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, p)));
        break;
      case 'XZY':
        (this._z = Math.asin(-Wt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0));
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
      kh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(kh, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Vh.setFromEuler(this), this.setFromQuaternion(Vh, e);
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
No.DefaultOrder = 'XYZ';
No.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
class wm {
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
let Oy = 0;
const Gh = new U(),
  Xr = new Pr(),
  si = new pt(),
  Ko = new U(),
  $s = new U(),
  Fy = new U(),
  Ny = new Pr(),
  Hh = new U(1, 0, 0),
  Wh = new U(0, 1, 0),
  qh = new U(0, 0, 1),
  zy = { type: 'added' },
  Xh = { type: 'removed' };
class Et extends Ir {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: Oy++ }),
      (this.uuid = Gi()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = Et.DefaultUp.clone());
    const e = new U(),
      t = new No(),
      n = new Pr(),
      r = new U(1, 1, 1);
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
        modelViewMatrix: { value: new pt() },
        normalMatrix: { value: new vn() },
      }),
      (this.matrix = new pt()),
      (this.matrixWorld = new pt()),
      (this.matrixAutoUpdate = Et.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = Et.DefaultMatrixWorldAutoUpdate),
      (this.layers = new wm()),
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
    return Xr.setFromAxisAngle(e, t), this.quaternion.multiply(Xr), this;
  }
  rotateOnWorldAxis(e, t) {
    return Xr.setFromAxisAngle(e, t), this.quaternion.premultiply(Xr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Hh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Wh, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(qh, e);
  }
  translateOnAxis(e, t) {
    return (
      Gh.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Gh.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Hh, e);
  }
  translateY(e) {
    return this.translateOnAxis(Wh, e);
  }
  translateZ(e) {
    return this.translateOnAxis(qh, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(si.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ko.copy(e) : Ko.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      $s.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? si.lookAt($s, Ko, this.up)
        : si.lookAt(Ko, $s, this.up),
      this.quaternion.setFromRotationMatrix(si),
      r &&
        (si.extractRotation(r.matrixWorld),
        Xr.setFromRotationMatrix(si),
        this.quaternion.premultiply(Xr.invert()));
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
            e.dispatchEvent(zy))
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
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Xh)),
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
      (t.parent = null), t.dispatchEvent(Xh);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      si.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), si.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(si),
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
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($s, e, Fy), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($s, Ny, e), e
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
        p = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        f.length > 0 && (n.shapes = f),
        h.length > 0 && (n.skeletons = h),
        p.length > 0 && (n.animations = p),
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
Et.DefaultUp = new U(0, 1, 0);
Et.DefaultMatrixAutoUpdate = !0;
Et.DefaultMatrixWorldAutoUpdate = !0;
const Rn = new U(),
  oi = new U(),
  Hl = new U(),
  ai = new U(),
  jr = new U(),
  Yr = new U(),
  jh = new U(),
  Wl = new U(),
  ql = new U(),
  Xl = new U();
class Yn {
  constructor(e = new U(), t = new U(), n = new U()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Rn.subVectors(e, t), r.cross(Rn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Rn.subVectors(r, t), oi.subVectors(n, t), Hl.subVectors(e, t);
    const o = Rn.dot(Rn),
      a = Rn.dot(oi),
      l = Rn.dot(Hl),
      c = oi.dot(oi),
      u = oi.dot(Hl),
      f = o * c - a * a;
    if (f === 0) return s.set(-2, -1, -1);
    const h = 1 / f,
      p = (c * l - a * u) * h,
      g = (o * u - a * l) * h;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, r) {
    return (
      this.getBarycoord(e, t, n, r, ai),
      ai.x >= 0 && ai.y >= 0 && ai.x + ai.y <= 1
    );
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return (
      this.getBarycoord(e, t, n, r, ai),
      l.set(0, 0),
      l.addScaledVector(s, ai.x),
      l.addScaledVector(o, ai.y),
      l.addScaledVector(a, ai.z),
      l
    );
  }
  static isFrontFacing(e, t, n, r) {
    return Rn.subVectors(n, t), oi.subVectors(e, t), Rn.cross(oi).dot(r) < 0;
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
      Rn.subVectors(this.c, this.b),
      oi.subVectors(this.a, this.b),
      Rn.cross(oi).length() * 0.5
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
    jr.subVectors(r, n), Yr.subVectors(s, n), Wl.subVectors(e, n);
    const l = jr.dot(Wl),
      c = Yr.dot(Wl);
    if (l <= 0 && c <= 0) return t.copy(n);
    ql.subVectors(e, r);
    const u = jr.dot(ql),
      f = Yr.dot(ql);
    if (u >= 0 && f <= u) return t.copy(r);
    const h = l * f - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(n).addScaledVector(jr, o);
    Xl.subVectors(e, s);
    const p = jr.dot(Xl),
      g = Yr.dot(Xl);
    if (g >= 0 && p <= g) return t.copy(s);
    const d = p * c - l * g;
    if (d <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), t.copy(n).addScaledVector(Yr, a);
    const m = u * g - p * f;
    if (m <= 0 && f - u >= 0 && p - g >= 0)
      return (
        jh.subVectors(s, r),
        (a = (f - u) / (f - u + (p - g))),
        t.copy(r).addScaledVector(jh, a)
      );
    const _ = 1 / (m + d + h);
    return (
      (o = d * _),
      (a = h * _),
      t.copy(n).addScaledVector(jr, o).addScaledVector(Yr, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Uy = 0;
class $i extends Ir {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: Uy++ }),
      (this.uuid = Gi()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = xs),
      (this.side = Cs),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = dm),
      (this.blendDst = pm),
      (this.blendEquation = ls),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Fc),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Ay),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Ll),
      (this.stencilZFail = Ll),
      (this.stencilZPass = Ll),
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
      this.blending !== xs && (n.blending = this.blending),
      this.side !== Cs && (n.side = this.side),
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
class uo extends $i {
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
      (this.combine = mm),
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
const ht = new U(),
  Jo = new Ie();
class En {
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
      (this.usage = kc),
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
        Jo.fromBufferAttribute(this, t),
          Jo.applyMatrix3(e),
          this.setXY(t, Jo.x, Jo.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ht.fromBufferAttribute(this, t),
          ht.applyMatrix3(e),
          this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t),
        ht.applyMatrix4(e),
        this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t),
        ht.applyNormalMatrix(e),
        this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t),
        ht.transformDirection(e),
        this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ii(t, this.array)), t;
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
    return this.normalized && (t = Ii(t, this.array)), t;
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
    return this.normalized && (t = Ii(t, this.array)), t;
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
    return this.normalized && (t = Ii(t, this.array)), t;
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
      this.usage !== kc && (e.usage = this.usage),
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
class Tm extends En {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Em extends En {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class At extends En {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let By = 0;
const mn = new pt(),
  jl = new Et(),
  $r = new U(),
  tn = new Oo(),
  Zs = new Oo(),
  yt = new U();
class Jt extends Ir {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: By++ }),
      (this.uuid = Gi()),
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
        ? (this.index = new (vm(e) ? Em : Tm)(e, 1))
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
      const s = new vn().getNormalMatrix(e);
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
    return mn.makeRotationFromQuaternion(e), this.applyMatrix4(mn), this;
  }
  rotateX(e) {
    return mn.makeRotationX(e), this.applyMatrix4(mn), this;
  }
  rotateY(e) {
    return mn.makeRotationY(e), this.applyMatrix4(mn), this;
  }
  rotateZ(e) {
    return mn.makeRotationZ(e), this.applyMatrix4(mn), this;
  }
  translate(e, t, n) {
    return mn.makeTranslation(e, t, n), this.applyMatrix4(mn), this;
  }
  scale(e, t, n) {
    return mn.makeScale(e, t, n), this.applyMatrix4(mn), this;
  }
  lookAt(e) {
    return jl.lookAt(e), jl.updateMatrix(), this.applyMatrix4(jl.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter($r).negate(),
      this.translate($r.x, $r.y, $r.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute('position', new At(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Oo());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new U(-1 / 0, -1 / 0, -1 / 0),
          new U(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          tn.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (yt.addVectors(this.boundingBox.min, tn.min),
                this.boundingBox.expandByPoint(yt),
                yt.addVectors(this.boundingBox.max, tn.max),
                this.boundingBox.expandByPoint(yt))
              : (this.boundingBox.expandByPoint(tn.min),
                this.boundingBox.expandByPoint(tn.max));
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
    this.boundingSphere === null && (this.boundingSphere = new Fo());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((tn.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Zs.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (yt.addVectors(tn.min, Zs.min),
                tn.expandByPoint(yt),
                yt.addVectors(tn.max, Zs.max),
                tn.expandByPoint(yt))
              : (tn.expandByPoint(Zs.min), tn.expandByPoint(Zs.max));
        }
      tn.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        yt.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(yt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            yt.fromBufferAttribute(a, c),
              l && ($r.fromBufferAttribute(e, c), yt.add($r)),
              (r = Math.max(r, n.distanceToSquared(yt)));
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
      this.setAttribute('tangent', new En(new Float32Array(4 * a), 4));
    const l = this.getAttribute('tangent').array,
      c = [],
      u = [];
    for (let R = 0; R < a; R++) (c[R] = new U()), (u[R] = new U());
    const f = new U(),
      h = new U(),
      p = new U(),
      g = new Ie(),
      d = new Ie(),
      m = new Ie(),
      _ = new U(),
      x = new U();
    function v(R, q, Q) {
      f.fromArray(r, R * 3),
        h.fromArray(r, q * 3),
        p.fromArray(r, Q * 3),
        g.fromArray(o, R * 2),
        d.fromArray(o, q * 2),
        m.fromArray(o, Q * 2),
        h.sub(f),
        p.sub(f),
        d.sub(g),
        m.sub(g);
      const B = 1 / (d.x * m.y - m.x * d.y);
      !isFinite(B) ||
        (_.copy(h)
          .multiplyScalar(m.y)
          .addScaledVector(p, -d.y)
          .multiplyScalar(B),
        x
          .copy(p)
          .multiplyScalar(d.x)
          .addScaledVector(h, -m.x)
          .multiplyScalar(B),
        c[R].add(_),
        c[q].add(_),
        c[Q].add(_),
        u[R].add(x),
        u[q].add(x),
        u[Q].add(x));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: n.length }]);
    for (let R = 0, q = y.length; R < q; ++R) {
      const Q = y[R],
        B = Q.start,
        I = Q.count;
      for (let X = B, Z = B + I; X < Z; X += 3) v(n[X + 0], n[X + 1], n[X + 2]);
    }
    const b = new U(),
      T = new U(),
      L = new U(),
      M = new U();
    function w(R) {
      L.fromArray(s, R * 3), M.copy(L);
      const q = c[R];
      b.copy(q),
        b.sub(L.multiplyScalar(L.dot(q))).normalize(),
        T.crossVectors(M, q);
      const B = T.dot(u[R]) < 0 ? -1 : 1;
      (l[R * 4] = b.x),
        (l[R * 4 + 1] = b.y),
        (l[R * 4 + 2] = b.z),
        (l[R * 4 + 3] = B);
    }
    for (let R = 0, q = y.length; R < q; ++R) {
      const Q = y[R],
        B = Q.start,
        I = Q.count;
      for (let X = B, Z = B + I; X < Z; X += 3)
        w(n[X + 0]), w(n[X + 1]), w(n[X + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let n = this.getAttribute('normal');
      if (n === void 0)
        (n = new En(new Float32Array(t.count * 3), 3)),
          this.setAttribute('normal', n);
      else for (let h = 0, p = n.count; h < p; h++) n.setXYZ(h, 0, 0, 0);
      const r = new U(),
        s = new U(),
        o = new U(),
        a = new U(),
        l = new U(),
        c = new U(),
        u = new U(),
        f = new U();
      if (e)
        for (let h = 0, p = e.count; h < p; h += 3) {
          const g = e.getX(h + 0),
            d = e.getX(h + 1),
            m = e.getX(h + 2);
          r.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, d),
            o.fromBufferAttribute(t, m),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            a.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, d),
            c.fromBufferAttribute(n, m),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(d, l.x, l.y, l.z),
            n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let h = 0, p = t.count; h < p; h += 3)
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
      yt.fromBufferAttribute(e, t),
        yt.normalize(),
        e.setXYZ(t, yt.x, yt.y, yt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        f = a.normalized,
        h = new c.constructor(l.length * u);
      let p = 0,
        g = 0;
      for (let d = 0, m = l.length; d < m; d++) {
        a.isInterleavedBufferAttribute
          ? (p = l[d] * a.data.stride + a.offset)
          : (p = l[d] * u);
        for (let _ = 0; _ < u; _++) h[g++] = c[p++];
      }
      return new En(h, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
        ),
        this
      );
    const t = new Jt(),
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
          p = e(h, n);
        l.push(p);
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
        const p = c[f];
        u.push(p.toJSON(e.data));
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
      for (let h = 0, p = f.length; h < p; h++) u.push(f[h].clone(t));
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
const Yh = new pt(),
  Zr = new Iu(),
  Yl = new Fo(),
  Ci = new U(),
  Pi = new U(),
  Li = new U(),
  $l = new U(),
  Zl = new U(),
  Kl = new U(),
  Qo = new U(),
  ea = new U(),
  ta = new U(),
  na = new Ie(),
  ia = new Ie(),
  ra = new Ie(),
  Jl = new U(),
  sa = new U();
class yn extends Et {
  constructor(e = new Jt(), t = new uo()) {
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
      Yl.copy(n.boundingSphere),
      Yl.applyMatrix4(s),
      e.ray.intersectsSphere(Yl) === !1) ||
      (Yh.copy(s).invert(),
      Zr.copy(e.ray).applyMatrix4(Yh),
      n.boundingBox !== null && Zr.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const a = n.index,
      l = n.attributes.position,
      c = n.morphAttributes.position,
      u = n.morphTargetsRelative,
      f = n.attributes.uv,
      h = n.attributes.uv2,
      p = n.groups,
      g = n.drawRange;
    if (a !== null)
      if (Array.isArray(r))
        for (let d = 0, m = p.length; d < m; d++) {
          const _ = p[d],
            x = r[_.materialIndex],
            v = Math.max(_.start, g.start),
            y = Math.min(
              a.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let b = v, T = y; b < T; b += 3) {
            const L = a.getX(b),
              M = a.getX(b + 1),
              w = a.getX(b + 2);
            (o = oa(this, x, e, Zr, l, c, u, f, h, L, M, w)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const d = Math.max(0, g.start),
          m = Math.min(a.count, g.start + g.count);
        for (let _ = d, x = m; _ < x; _ += 3) {
          const v = a.getX(_),
            y = a.getX(_ + 1),
            b = a.getX(_ + 2);
          (o = oa(this, r, e, Zr, l, c, u, f, h, v, y, b)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(r))
        for (let d = 0, m = p.length; d < m; d++) {
          const _ = p[d],
            x = r[_.materialIndex],
            v = Math.max(_.start, g.start),
            y = Math.min(
              l.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let b = v, T = y; b < T; b += 3) {
            const L = b,
              M = b + 1,
              w = b + 2;
            (o = oa(this, x, e, Zr, l, c, u, f, h, L, M, w)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const d = Math.max(0, g.start),
          m = Math.min(l.count, g.start + g.count);
        for (let _ = d, x = m; _ < x; _ += 3) {
          const v = _,
            y = _ + 1,
            b = _ + 2;
          (o = oa(this, r, e, Zr, l, c, u, f, h, v, y, b)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
  }
}
function ky(i, e, t, n, r, s, o, a) {
  let l;
  if (
    (e.side === Tn
      ? (l = n.intersectTriangle(o, s, r, !0, a))
      : (l = n.intersectTriangle(r, s, o, e.side !== hi, a)),
    l === null)
  )
    return null;
  sa.copy(a), sa.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(sa);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: sa.clone(), object: i };
}
function oa(i, e, t, n, r, s, o, a, l, c, u, f) {
  Ci.fromBufferAttribute(r, c),
    Pi.fromBufferAttribute(r, u),
    Li.fromBufferAttribute(r, f);
  const h = i.morphTargetInfluences;
  if (s && h) {
    Qo.set(0, 0, 0), ea.set(0, 0, 0), ta.set(0, 0, 0);
    for (let g = 0, d = s.length; g < d; g++) {
      const m = h[g],
        _ = s[g];
      m !== 0 &&
        ($l.fromBufferAttribute(_, c),
        Zl.fromBufferAttribute(_, u),
        Kl.fromBufferAttribute(_, f),
        o
          ? (Qo.addScaledVector($l, m),
            ea.addScaledVector(Zl, m),
            ta.addScaledVector(Kl, m))
          : (Qo.addScaledVector($l.sub(Ci), m),
            ea.addScaledVector(Zl.sub(Pi), m),
            ta.addScaledVector(Kl.sub(Li), m)));
    }
    Ci.add(Qo), Pi.add(ea), Li.add(ta);
  }
  i.isSkinnedMesh &&
    (i.boneTransform(c, Ci), i.boneTransform(u, Pi), i.boneTransform(f, Li));
  const p = ky(i, e, t, n, Ci, Pi, Li, Jl);
  if (p) {
    a &&
      (na.fromBufferAttribute(a, c),
      ia.fromBufferAttribute(a, u),
      ra.fromBufferAttribute(a, f),
      (p.uv = Yn.getUV(Jl, Ci, Pi, Li, na, ia, ra, new Ie()))),
      l &&
        (na.fromBufferAttribute(l, c),
        ia.fromBufferAttribute(l, u),
        ra.fromBufferAttribute(l, f),
        (p.uv2 = Yn.getUV(Jl, Ci, Pi, Li, na, ia, ra, new Ie())));
    const g = { a: c, b: u, c: f, normal: new U(), materialIndex: 0 };
    Yn.getNormal(Ci, Pi, Li, g.normal), (p.face = g);
  }
  return p;
}
class zo extends Jt {
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
      p = 0;
    g('z', 'y', 'x', -1, -1, n, t, e, o, s, 0),
      g('z', 'y', 'x', 1, -1, n, t, -e, o, s, 1),
      g('x', 'z', 'y', 1, 1, e, n, t, r, o, 2),
      g('x', 'z', 'y', 1, -1, e, n, -t, r, o, 3),
      g('x', 'y', 'z', 1, -1, e, t, n, r, s, 4),
      g('x', 'y', 'z', -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new At(c, 3)),
      this.setAttribute('normal', new At(u, 3)),
      this.setAttribute('uv', new At(f, 2));
    function g(d, m, _, x, v, y, b, T, L, M, w) {
      const R = y / L,
        q = b / M,
        Q = y / 2,
        B = b / 2,
        I = T / 2,
        X = L + 1,
        Z = M + 1;
      let $ = 0,
        V = 0;
      const N = new U();
      for (let H = 0; H < Z; H++) {
        const ue = H * q - B;
        for (let te = 0; te < X; te++) {
          const de = te * R - Q;
          (N[d] = de * x),
            (N[m] = ue * v),
            (N[_] = I),
            c.push(N.x, N.y, N.z),
            (N[d] = 0),
            (N[m] = 0),
            (N[_] = T > 0 ? 1 : -1),
            u.push(N.x, N.y, N.z),
            f.push(te / L),
            f.push(1 - H / M),
            ($ += 1);
        }
      }
      for (let H = 0; H < M; H++)
        for (let ue = 0; ue < L; ue++) {
          const te = h + ue + X * H,
            de = h + ue + X * (H + 1),
            xe = h + (ue + 1) + X * (H + 1),
            G = h + (ue + 1) + X * H;
          l.push(te, de, G), l.push(de, xe, G), (V += 6);
        }
      a.addGroup(p, V, w), (p += V), (h += $);
    }
  }
  static fromJSON(e) {
    return new zo(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Ds(i) {
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
function Ut(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Ds(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Vy(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
const Gy = { clone: Ds, merge: Ut };
var Hy = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Wy = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Lr extends $i {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Hy),
      (this.fragmentShader = Wy),
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
      (this.uniforms = Ds(e.uniforms)),
      (this.uniformsGroups = Vy(e.uniformsGroups)),
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
class Am extends Et {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new pt()),
      (this.projectionMatrix = new pt()),
      (this.projectionMatrixInverse = new pt());
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
class qt extends Am {
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
    (this.fov = zh * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Rl * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return zh * 2 * Math.atan(Math.tan(Rl * 0.5 * this.fov) / this.zoom);
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
    let t = (e * Math.tan(Rl * 0.5 * this.fov)) / this.zoom,
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
const Kr = 90,
  Jr = 1;
class qy extends Et {
  constructor(e, t, n) {
    super(), (this.type = 'CubeCamera'), (this.renderTarget = n);
    const r = new qt(Kr, Jr, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new U(1, 0, 0)),
      this.add(r);
    const s = new qt(Kr, Jr, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new U(-1, 0, 0)),
      this.add(s);
    const o = new qt(Kr, Jr, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new U(0, 1, 0)),
      this.add(o);
    const a = new qt(Kr, Jr, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new U(0, -1, 0)),
      this.add(a);
    const l = new qt(Kr, Jr, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new U(0, 0, 1)),
      this.add(l);
    const c = new qt(Kr, Jr, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new U(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [r, s, o, a, l, c] = this.children,
      u = e.getRenderTarget(),
      f = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = mi), (e.xr.enabled = !1);
    const p = n.texture.generateMipmaps;
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
      (n.texture.generateMipmaps = p),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = f),
      (e.xr.enabled = h),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Cm extends cn {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Ps),
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
class Xy extends Cr {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new Cm(
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
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ht);
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
      r = new zo(5, 5, 5),
      s = new Lr({
        name: 'CubemapFromEquirect',
        uniforms: Ds(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Tn,
        blending: Vi,
      });
    s.uniforms.tEquirect.value = t;
    const o = new yn(r, s),
      a = t.minFilter;
    return (
      t.minFilter === il && (t.minFilter = Ht),
      new qy(1, 10, this).update(e, o),
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
const Ql = new U(),
  jy = new U(),
  Yy = new vn();
class lr {
  constructor(e = new U(1, 0, 0), t = 0) {
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
    const r = Ql.subVectors(n, t).cross(jy.subVectors(e, t)).normalize();
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
    const n = e.delta(Ql),
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
    const n = t || Yy.getNormalMatrix(e),
      r = this.coplanarPoint(Ql).applyMatrix4(e),
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
const Qr = new Fo(),
  aa = new U();
class Pm {
  constructor(
    e = new lr(),
    t = new lr(),
    n = new lr(),
    r = new lr(),
    s = new lr(),
    o = new lr()
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
      p = n[9],
      g = n[10],
      d = n[11],
      m = n[12],
      _ = n[13],
      x = n[14],
      v = n[15];
    return (
      t[0].setComponents(a - r, f - l, d - h, v - m).normalize(),
      t[1].setComponents(a + r, f + l, d + h, v + m).normalize(),
      t[2].setComponents(a + s, f + c, d + p, v + _).normalize(),
      t[3].setComponents(a - s, f - c, d - p, v - _).normalize(),
      t[4].setComponents(a - o, f - u, d - g, v - x).normalize(),
      t[5].setComponents(a + o, f + u, d + g, v + x).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Qr)
    );
  }
  intersectsSprite(e) {
    return (
      Qr.center.set(0, 0, 0),
      (Qr.radius = 0.7071067811865476),
      Qr.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Qr)
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
        ((aa.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (aa.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (aa.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(aa) < 0)
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
function Lm() {
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
function $y(i, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function r(c, u) {
    const f = c.array,
      h = c.usage,
      p = i.createBuffer();
    i.bindBuffer(u, p), i.bufferData(u, f, h), c.onUploadCallback();
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
      buffer: p,
      type: g,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, f) {
    const h = u.array,
      p = u.updateRange;
    i.bindBuffer(f, c),
      p.count === -1
        ? i.bufferSubData(f, 0, h)
        : (t
            ? i.bufferSubData(
                f,
                p.offset * h.BYTES_PER_ELEMENT,
                h,
                p.offset,
                p.count
              )
            : i.bufferSubData(
                f,
                p.offset * h.BYTES_PER_ELEMENT,
                h.subarray(p.offset, p.offset + p.count)
              ),
          (p.count = -1));
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
class Ou extends Jt {
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
      p = [],
      g = [],
      d = [],
      m = [];
    for (let _ = 0; _ < u; _++) {
      const x = _ * h - o;
      for (let v = 0; v < c; v++) {
        const y = v * f - s;
        g.push(y, -x, 0), d.push(0, 0, 1), m.push(v / a), m.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let x = 0; x < a; x++) {
        const v = x + c * _,
          y = x + c * (_ + 1),
          b = x + 1 + c * (_ + 1),
          T = x + 1 + c * _;
        p.push(v, y, T), p.push(y, b, T);
      }
    this.setIndex(p),
      this.setAttribute('position', new At(g, 3)),
      this.setAttribute('normal', new At(d, 3)),
      this.setAttribute('uv', new At(m, 2));
  }
  static fromJSON(e) {
    return new Ou(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Zy = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  Ky = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Jy = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Qy = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  eM = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  tM = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  nM = 'vec3 transformed = vec3( position );',
  iM = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  rM = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
  sM = `#ifdef USE_IRIDESCENCE
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
  oM = `#ifdef USE_BUMPMAP
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
  aM = `#if NUM_CLIPPING_PLANES > 0
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
  lM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  cM = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  uM = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  fM = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  hM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  dM = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  pM = `#if defined( USE_COLOR_ALPHA )
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
  mM = `#define PI 3.141592653589793
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
  gM = `#ifdef ENVMAP_TYPE_CUBE_UV
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
  _M = `vec3 transformedNormal = objectNormal;
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
  xM = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  vM = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  yM = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  MM = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  bM = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  SM = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  wM = `#ifdef USE_ENVMAP
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
  TM = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  EM = `#ifdef USE_ENVMAP
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
  AM = `#ifdef USE_ENVMAP
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
  CM = `#ifdef USE_ENVMAP
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
  PM = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  LM = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  RM = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  DM = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  IM = `#ifdef USE_GRADIENTMAP
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
  OM = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  FM = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  NM = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  zM = `varying vec3 vViewPosition;
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
  UM = `uniform bool receiveShadow;
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
  BM = `#if defined( USE_ENVMAP )
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
  kM = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  VM = `varying vec3 vViewPosition;
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
  GM = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  HM = `varying vec3 vViewPosition;
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
  WM = `PhysicalMaterial material;
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
  qM = `struct PhysicalMaterial {
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
  XM = `
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
  jM = `#if defined( RE_IndirectDiffuse )
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
  YM = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  $M = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  ZM = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  KM = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  JM = `#ifdef USE_LOGDEPTHBUF
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
  QM = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  eb = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  tb = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  nb = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ib = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  rb = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  sb = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  ob = `#ifdef USE_MORPHNORMALS
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
  ab = `#ifdef USE_MORPHTARGETS
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
  lb = `#ifdef USE_MORPHTARGETS
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
  cb = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
  ub = `#ifdef OBJECTSPACE_NORMALMAP
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
  fb = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  hb = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  db = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  pb = `#ifdef USE_NORMALMAP
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
  mb = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  gb = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  _b = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  xb = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  vb = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  yb = `vec3 packNormalToRGB( const in vec3 normal ) {
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
  Mb = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  bb = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Sb = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  wb = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Tb = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Eb = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Ab = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  Cb = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  Pb = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
  Lb = `float getShadowMask() {
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
  Rb = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Db = `#ifdef USE_SKINNING
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
  Ib = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ob = `#ifdef USE_SKINNING
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
  Fb = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Nb = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  zb = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Ub = `#ifndef saturate
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
  Bb = `#ifdef USE_TRANSMISSION
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
  kb = `#ifdef USE_TRANSMISSION
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
  Vb = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Gb = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Hb = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Wb = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  qb = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Xb = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  jb = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Yb = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  $b = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Zb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Kb = `#ifdef ENVMAP_TYPE_CUBE
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
  Jb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Qb = `uniform samplerCube tCube;
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
  eS = `#include <common>
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
  tS = `#if DEPTH_PACKING == 3200
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
  nS = `#define DISTANCE
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
  iS = `#define DISTANCE
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
  rS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  sS = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  oS = `uniform float scale;
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
  aS = `uniform vec3 diffuse;
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
  lS = `#include <common>
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
  cS = `uniform vec3 diffuse;
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
  uS = `#define LAMBERT
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
  fS = `#define LAMBERT
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
  hS = `#define MATCAP
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
  dS = `#define MATCAP
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
  pS = `#define NORMAL
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
  mS = `#define NORMAL
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
  gS = `#define PHONG
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
  _S = `#define PHONG
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
  xS = `#define STANDARD
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
  vS = `#define STANDARD
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
  yS = `#define TOON
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
  MS = `#define TOON
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
  bS = `uniform float size;
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
  SS = `uniform vec3 diffuse;
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
  wS = `#include <common>
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
  TS = `uniform vec3 color;
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
  ES = `uniform float rotation;
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
  AS = `uniform vec3 diffuse;
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
    alphamap_fragment: Zy,
    alphamap_pars_fragment: Ky,
    alphatest_fragment: Jy,
    alphatest_pars_fragment: Qy,
    aomap_fragment: eM,
    aomap_pars_fragment: tM,
    begin_vertex: nM,
    beginnormal_vertex: iM,
    bsdfs: rM,
    iridescence_fragment: sM,
    bumpmap_pars_fragment: oM,
    clipping_planes_fragment: aM,
    clipping_planes_pars_fragment: lM,
    clipping_planes_pars_vertex: cM,
    clipping_planes_vertex: uM,
    color_fragment: fM,
    color_pars_fragment: hM,
    color_pars_vertex: dM,
    color_vertex: pM,
    common: mM,
    cube_uv_reflection_fragment: gM,
    defaultnormal_vertex: _M,
    displacementmap_pars_vertex: xM,
    displacementmap_vertex: vM,
    emissivemap_fragment: yM,
    emissivemap_pars_fragment: MM,
    encodings_fragment: bM,
    encodings_pars_fragment: SM,
    envmap_fragment: wM,
    envmap_common_pars_fragment: TM,
    envmap_pars_fragment: EM,
    envmap_pars_vertex: AM,
    envmap_physical_pars_fragment: BM,
    envmap_vertex: CM,
    fog_vertex: PM,
    fog_pars_vertex: LM,
    fog_fragment: RM,
    fog_pars_fragment: DM,
    gradientmap_pars_fragment: IM,
    lightmap_fragment: OM,
    lightmap_pars_fragment: FM,
    lights_lambert_fragment: NM,
    lights_lambert_pars_fragment: zM,
    lights_pars_begin: UM,
    lights_toon_fragment: kM,
    lights_toon_pars_fragment: VM,
    lights_phong_fragment: GM,
    lights_phong_pars_fragment: HM,
    lights_physical_fragment: WM,
    lights_physical_pars_fragment: qM,
    lights_fragment_begin: XM,
    lights_fragment_maps: jM,
    lights_fragment_end: YM,
    logdepthbuf_fragment: $M,
    logdepthbuf_pars_fragment: ZM,
    logdepthbuf_pars_vertex: KM,
    logdepthbuf_vertex: JM,
    map_fragment: QM,
    map_pars_fragment: eb,
    map_particle_fragment: tb,
    map_particle_pars_fragment: nb,
    metalnessmap_fragment: ib,
    metalnessmap_pars_fragment: rb,
    morphcolor_vertex: sb,
    morphnormal_vertex: ob,
    morphtarget_pars_vertex: ab,
    morphtarget_vertex: lb,
    normal_fragment_begin: cb,
    normal_fragment_maps: ub,
    normal_pars_fragment: fb,
    normal_pars_vertex: hb,
    normal_vertex: db,
    normalmap_pars_fragment: pb,
    clearcoat_normal_fragment_begin: mb,
    clearcoat_normal_fragment_maps: gb,
    clearcoat_pars_fragment: _b,
    iridescence_pars_fragment: xb,
    output_fragment: vb,
    packing: yb,
    premultiplied_alpha_fragment: Mb,
    project_vertex: bb,
    dithering_fragment: Sb,
    dithering_pars_fragment: wb,
    roughnessmap_fragment: Tb,
    roughnessmap_pars_fragment: Eb,
    shadowmap_pars_fragment: Ab,
    shadowmap_pars_vertex: Cb,
    shadowmap_vertex: Pb,
    shadowmask_pars_fragment: Lb,
    skinbase_vertex: Rb,
    skinning_pars_vertex: Db,
    skinning_vertex: Ib,
    skinnormal_vertex: Ob,
    specularmap_fragment: Fb,
    specularmap_pars_fragment: Nb,
    tonemapping_fragment: zb,
    tonemapping_pars_fragment: Ub,
    transmission_fragment: Bb,
    transmission_pars_fragment: kb,
    uv_pars_fragment: Vb,
    uv_pars_vertex: Gb,
    uv_vertex: Hb,
    uv2_pars_fragment: Wb,
    uv2_pars_vertex: qb,
    uv2_vertex: Xb,
    worldpos_vertex: jb,
    background_vert: Yb,
    background_frag: $b,
    backgroundCube_vert: Zb,
    backgroundCube_frag: Kb,
    cube_vert: Jb,
    cube_frag: Qb,
    depth_vert: eS,
    depth_frag: tS,
    distanceRGBA_vert: nS,
    distanceRGBA_frag: iS,
    equirect_vert: rS,
    equirect_frag: sS,
    linedashed_vert: oS,
    linedashed_frag: aS,
    meshbasic_vert: lS,
    meshbasic_frag: cS,
    meshlambert_vert: uS,
    meshlambert_frag: fS,
    meshmatcap_vert: hS,
    meshmatcap_frag: dS,
    meshnormal_vert: pS,
    meshnormal_frag: mS,
    meshphong_vert: gS,
    meshphong_frag: _S,
    meshphysical_vert: xS,
    meshphysical_frag: vS,
    meshtoon_vert: yS,
    meshtoon_frag: MS,
    points_vert: bS,
    points_frag: SS,
    shadow_vert: wS,
    shadow_frag: TS,
    sprite_vert: ES,
    sprite_frag: AS,
  },
  ye = {
    common: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new vn() },
      uv2Transform: { value: new vn() },
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
      normalScale: { value: new Ie(1, 1) },
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
      uvTransform: { value: new vn() },
    },
    sprite: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      center: { value: new Ie(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new vn() },
    },
  },
  Xn = {
    basic: {
      uniforms: Ut([
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
      uniforms: Ut([
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
      uniforms: Ut([
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
      uniforms: Ut([
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
      uniforms: Ut([
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
      uniforms: Ut([
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
      uniforms: Ut([ye.points, ye.fog]),
      vertexShader: ze.points_vert,
      fragmentShader: ze.points_frag,
    },
    dashed: {
      uniforms: Ut([
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
      uniforms: Ut([ye.common, ye.displacementmap]),
      vertexShader: ze.depth_vert,
      fragmentShader: ze.depth_frag,
    },
    normal: {
      uniforms: Ut([
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
      uniforms: Ut([ye.sprite, ye.fog]),
      vertexShader: ze.sprite_vert,
      fragmentShader: ze.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new vn() }, t2D: { value: null } },
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
      uniforms: Ut([
        ye.common,
        ye.displacementmap,
        {
          referencePosition: { value: new U() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ze.distanceRGBA_vert,
      fragmentShader: ze.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ut([
        ye.lights,
        ye.fog,
        { color: { value: new qe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ze.shadow_vert,
      fragmentShader: ze.shadow_frag,
    },
  };
Xn.physical = {
  uniforms: Ut([
    Xn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Ie(1, 1) },
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
      transmissionSamplerSize: { value: new Ie() },
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
function CS(i, e, t, n, r, s, o) {
  const a = new qe(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    h = 0,
    p = null;
  function g(m, _) {
    let x = !1,
      v = _.isScene === !0 ? _.background : null;
    v && v.isTexture && (v = (_.backgroundBlurriness > 0 ? t : e).get(v));
    const y = i.xr,
      b = y.getSession && y.getSession();
    b && b.environmentBlendMode === 'additive' && (v = null),
      v === null ? d(a, l) : v && v.isColor && (d(v, 1), (x = !0)),
      (i.autoClear || x) &&
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      v && (v.isCubeTexture || v.mapping === nl)
        ? (u === void 0 &&
            ((u = new yn(
              new zo(1, 1, 1),
              new Lr({
                name: 'BackgroundCubeMaterial',
                uniforms: Ds(Xn.backgroundCube.uniforms),
                vertexShader: Xn.backgroundCube.vertexShader,
                fragmentShader: Xn.backgroundCube.fragmentShader,
                side: Tn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute('normal'),
            u.geometry.deleteAttribute('uv'),
            (u.onBeforeRender = function (T, L, M) {
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
          (f !== v || h !== v.version || p !== i.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (f = v),
            (h = v.version),
            (p = i.toneMapping)),
          u.layers.enableAll(),
          m.unshift(u, u.geometry, u.material, 0, 0, null))
        : v &&
          v.isTexture &&
          (c === void 0 &&
            ((c = new yn(
              new Ou(2, 2),
              new Lr({
                name: 'BackgroundMaterial',
                uniforms: Ds(Xn.background.uniforms),
                vertexShader: Xn.background.vertexShader,
                fragmentShader: Xn.background.fragmentShader,
                side: Cs,
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
          (f !== v || h !== v.version || p !== i.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = v),
            (h = v.version),
            (p = i.toneMapping)),
          c.layers.enableAll(),
          m.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(m, _) {
    n.buffers.color.setClear(m.r, m.g, m.b, _, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (m, _ = 1) {
      a.set(m), (l = _), d(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (m) {
      (l = m), d(a, l);
    },
    render: g,
  };
}
function PS(i, e, t, n) {
  const r = i.getParameter(34921),
    s = n.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = m(null);
  let c = l,
    u = !1;
  function f(I, X, Z, $, V) {
    let N = !1;
    if (o) {
      const H = d($, Z, X);
      c !== H && ((c = H), p(c.object)),
        (N = _(I, $, Z, V)),
        N && x(I, $, Z, V);
    } else {
      const H = X.wireframe === !0;
      (c.geometry !== $.id || c.program !== Z.id || c.wireframe !== H) &&
        ((c.geometry = $.id), (c.program = Z.id), (c.wireframe = H), (N = !0));
    }
    V !== null && t.update(V, 34963),
      (N || u) &&
        ((u = !1),
        M(I, X, Z, $),
        V !== null && i.bindBuffer(34963, t.get(V).buffer));
  }
  function h() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function p(I) {
    return n.isWebGL2 ? i.bindVertexArray(I) : s.bindVertexArrayOES(I);
  }
  function g(I) {
    return n.isWebGL2 ? i.deleteVertexArray(I) : s.deleteVertexArrayOES(I);
  }
  function d(I, X, Z) {
    const $ = Z.wireframe === !0;
    let V = a[I.id];
    V === void 0 && ((V = {}), (a[I.id] = V));
    let N = V[X.id];
    N === void 0 && ((N = {}), (V[X.id] = N));
    let H = N[$];
    return H === void 0 && ((H = m(h())), (N[$] = H)), H;
  }
  function m(I) {
    const X = [],
      Z = [],
      $ = [];
    for (let V = 0; V < r; V++) (X[V] = 0), (Z[V] = 0), ($[V] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: X,
      enabledAttributes: Z,
      attributeDivisors: $,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function _(I, X, Z, $) {
    const V = c.attributes,
      N = X.attributes;
    let H = 0;
    const ue = Z.getAttributes();
    for (const te in ue)
      if (ue[te].location >= 0) {
        const xe = V[te];
        let G = N[te];
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
    return c.attributesNum !== H || c.index !== $;
  }
  function x(I, X, Z, $) {
    const V = {},
      N = X.attributes;
    let H = 0;
    const ue = Z.getAttributes();
    for (const te in ue)
      if (ue[te].location >= 0) {
        let xe = N[te];
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
    (c.attributes = V), (c.attributesNum = H), (c.index = $);
  }
  function v() {
    const I = c.newAttributes;
    for (let X = 0, Z = I.length; X < Z; X++) I[X] = 0;
  }
  function y(I) {
    b(I, 0);
  }
  function b(I, X) {
    const Z = c.newAttributes,
      $ = c.enabledAttributes,
      V = c.attributeDivisors;
    (Z[I] = 1),
      $[I] === 0 && (i.enableVertexAttribArray(I), ($[I] = 1)),
      V[I] !== X &&
        ((n.isWebGL2 ? i : e.get('ANGLE_instanced_arrays'))[
          n.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](I, X),
        (V[I] = X));
  }
  function T() {
    const I = c.newAttributes,
      X = c.enabledAttributes;
    for (let Z = 0, $ = X.length; Z < $; Z++)
      X[Z] !== I[Z] && (i.disableVertexAttribArray(Z), (X[Z] = 0));
  }
  function L(I, X, Z, $, V, N) {
    n.isWebGL2 === !0 && (Z === 5124 || Z === 5125)
      ? i.vertexAttribIPointer(I, X, Z, V, N)
      : i.vertexAttribPointer(I, X, Z, $, V, N);
  }
  function M(I, X, Z, $) {
    if (
      n.isWebGL2 === !1 &&
      (I.isInstancedMesh || $.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    v();
    const V = $.attributes,
      N = Z.getAttributes(),
      H = X.defaultAttributeValues;
    for (const ue in N) {
      const te = N[ue];
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
                $._maxInstanceCount === void 0 &&
                ($._maxInstanceCount = _e.meshPerAttribute * _e.count);
            } else for (let P = 0; P < te.locationSize; P++) y(te.location + P);
            i.bindBuffer(34962, le);
            for (let P = 0; P < te.locationSize; P++)
              L(
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
                $._maxInstanceCount === void 0 &&
                ($._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let _e = 0; _e < te.locationSize; _e++) y(te.location + _e);
            i.bindBuffer(34962, le);
            for (let _e = 0; _e < te.locationSize; _e++)
              L(
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
      const X = a[I];
      for (const Z in X) {
        const $ = X[Z];
        for (const V in $) g($[V].object), delete $[V];
        delete X[Z];
      }
      delete a[I];
    }
  }
  function R(I) {
    if (a[I.id] === void 0) return;
    const X = a[I.id];
    for (const Z in X) {
      const $ = X[Z];
      for (const V in $) g($[V].object), delete $[V];
      delete X[Z];
    }
    delete a[I.id];
  }
  function q(I) {
    for (const X in a) {
      const Z = a[X];
      if (Z[I.id] === void 0) continue;
      const $ = Z[I.id];
      for (const V in $) g($[V].object), delete $[V];
      delete Z[I.id];
    }
  }
  function Q() {
    B(), (u = !0), c !== l && ((c = l), p(c.object));
  }
  function B() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: f,
    reset: Q,
    resetDefaultState: B,
    dispose: w,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: q,
    initAttributes: v,
    enableAttribute: y,
    disableUnusedAttributes: T,
  };
}
function LS(i, e, t, n) {
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
    let h, p;
    if (r) (h = i), (p = 'drawArraysInstanced');
    else if (
      ((h = e.get('ANGLE_instanced_arrays')),
      (p = 'drawArraysInstancedANGLE'),
      h === null)
    ) {
      console.error(
        'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    h[p](s, c, u, f), t.update(u, s, f);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function RS(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const L = e.get('EXT_texture_filter_anisotropic');
      n = i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(L) {
    if (L === 'highp') {
      if (
        i.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        i.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return 'highp';
      L = 'mediump';
    }
    return L === 'mediump' &&
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
    p = i.getParameter(3379),
    g = i.getParameter(34076),
    d = i.getParameter(34921),
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
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: d,
    maxVertexUniforms: m,
    maxVaryings: _,
    maxFragmentUniforms: x,
    vertexTextures: v,
    floatFragmentTextures: y,
    floatVertexTextures: b,
    maxSamples: T,
  };
}
function DS(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const o = new lr(),
    a = new vn(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h, p) {
      const g = f.length !== 0 || h || n !== 0 || r;
      return (r = h), (t = u(f, p, 0)), (n = f.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (f, h, p) {
      const g = f.clippingPlanes,
        d = f.clipIntersection,
        m = f.clipShadows,
        _ = i.get(f);
      if (!r || g === null || g.length === 0 || (s && !m)) s ? u(null) : c();
      else {
        const x = s ? 0 : n,
          v = x * 4;
        let y = _.clippingState || null;
        (l.value = y), (y = u(g, h, v, p));
        for (let b = 0; b !== v; ++b) y[b] = t[b];
        (_.clippingState = y),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += x);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(f, h, p, g) {
    const d = f !== null ? f.length : 0;
    let m = null;
    if (d !== 0) {
      if (((m = l.value), g !== !0 || m === null)) {
        const _ = p + d * 4,
          x = h.matrixWorldInverse;
        a.getNormalMatrix(x),
          (m === null || m.length < _) && (m = new Float32Array(_));
        for (let v = 0, y = p; v !== d; ++v, y += 4)
          o.copy(f[v]).applyMatrix4(x, a),
            o.normal.toArray(m, y),
            (m[y + 3] = o.constant);
      }
      (l.value = m), (l.needsUpdate = !0);
    }
    return (e.numPlanes = d), (e.numIntersection = 0), m;
  }
}
function IS(i) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Nc ? (o.mapping = Ps) : a === zc && (o.mapping = Ls), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Nc || a === zc)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Xy(l.height / 2);
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
class OS extends Am {
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
const us = 4,
  $h = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  pr = 20,
  ec = new OS(),
  Zh = new qe();
let tc = null;
const cr = (1 + Math.sqrt(5)) / 2,
  es = 1 / cr,
  Kh = [
    new U(1, 1, 1),
    new U(-1, 1, 1),
    new U(1, 1, -1),
    new U(-1, 1, -1),
    new U(0, cr, es),
    new U(0, cr, -es),
    new U(es, 0, cr),
    new U(-es, 0, cr),
    new U(cr, es, 0),
    new U(-cr, es, 0),
  ];
class Jh {
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
    (tc = this._renderer.getRenderTarget()), this._setSize(256);
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
      ((this._cubemapMaterial = td()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = ed()),
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
    this._renderer.setRenderTarget(tc),
      (e.scissorTest = !1),
      la(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ps || e.mapping === Ls
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (tc = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Ht,
        minFilter: Ht,
        generateMipmaps: !1,
        type: wo,
        format: Fn,
        encoding: Ar,
        depthBuffer: !1,
      },
      r = Qh(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Qh(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = FS(s)),
        (this._blurMaterial = NS(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new yn(this._lodPlanes[0], e);
    this._renderer.compile(t, ec);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new qt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(Zh), (u.toneMapping = mi), (u.autoClear = !1);
    const p = new uo({
        name: 'PMREM.Background',
        side: Tn,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new yn(new zo(), p);
    let d = !1;
    const m = e.background;
    m
      ? m.isColor && (p.color.copy(m), (e.background = null), (d = !0))
      : (p.color.copy(Zh), (d = !0));
    for (let _ = 0; _ < 6; _++) {
      const x = _ % 3;
      x === 0
        ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0))
        : x === 1
        ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0))
        : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const v = this._cubeSize;
      la(r, x * v, _ > 2 ? v : 0, v, v),
        u.setRenderTarget(r),
        d && u.render(g, a),
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
      r = e.mapping === Ps || e.mapping === Ls;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = td()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = ed());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new yn(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    la(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, ec);
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
        o = Kh[(r - 1) % Kh.length];
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
      f = new yn(this._lodPlanes[r], c),
      h = c.uniforms,
      p = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * pr - 1),
      d = s / g,
      m = isFinite(s) ? 1 + Math.floor(u * d) : pr;
    m > pr &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`
      );
    const _ = [];
    let x = 0;
    for (let L = 0; L < pr; ++L) {
      const M = L / d,
        w = Math.exp((-M * M) / 2);
      _.push(w), L === 0 ? (x += w) : L < m && (x += 2 * w);
    }
    for (let L = 0; L < _.length; L++) _[L] = _[L] / x;
    (h.envMap.value = e.texture),
      (h.samples.value = m),
      (h.weights.value = _),
      (h.latitudinal.value = o === 'latitudinal'),
      a && (h.poleAxis.value = a);
    const { _lodMax: v } = this;
    (h.dTheta.value = g), (h.mipInt.value = v - n);
    const y = this._sizeLods[r],
      b = 3 * y * (r > v - us ? r - v + us : 0),
      T = 4 * (this._cubeSize - y);
    la(t, b, T, 3 * y, 2 * y), l.setRenderTarget(t), l.render(f, ec);
  }
}
function FS(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - us + 1 + $h.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - us ? (l = $h[o - i + us - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      f = 1 + c,
      h = [u, u, f, u, f, f, u, u, f, f, u, f],
      p = 6,
      g = 6,
      d = 3,
      m = 2,
      _ = 1,
      x = new Float32Array(d * g * p),
      v = new Float32Array(m * g * p),
      y = new Float32Array(_ * g * p);
    for (let T = 0; T < p; T++) {
      const L = ((T % 3) * 2) / 3 - 1,
        M = T > 2 ? 0 : -1,
        w = [
          L,
          M,
          0,
          L + 2 / 3,
          M,
          0,
          L + 2 / 3,
          M + 1,
          0,
          L,
          M,
          0,
          L + 2 / 3,
          M + 1,
          0,
          L,
          M + 1,
          0,
        ];
      x.set(w, d * g * T), v.set(h, m * g * T);
      const R = [T, T, T, T, T, T];
      y.set(R, _ * g * T);
    }
    const b = new Jt();
    b.setAttribute('position', new En(x, d)),
      b.setAttribute('uv', new En(v, m)),
      b.setAttribute('faceIndex', new En(y, _)),
      e.push(b),
      r > us && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Qh(i, e, t) {
  const n = new Cr(i, e, t);
  return (
    (n.texture.mapping = nl),
    (n.texture.name = 'PMREM.cubeUv'),
    (n.scissorTest = !0),
    n
  );
}
function la(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function NS(i, e, t) {
  const n = new Float32Array(pr),
    r = new U(0, 1, 0);
  return new Lr({
    name: 'SphericalGaussianBlur',
    defines: {
      n: pr,
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
    vertexShader: Fu(),
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
    blending: Vi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ed() {
  return new Lr({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: Fu(),
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
    blending: Vi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function td() {
  return new Lr({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Fu(),
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
    blending: Vi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Fu() {
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
function zS(i) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Nc || l === zc,
        u = l === Ps || l === Ls;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return (
            t === null && (t = new Jh(i)),
            (f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f)),
            e.set(a, f),
            f.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const f = a.image;
            if ((c && f && f.height > 0) || (u && f && r(f))) {
              t === null && (t = new Jh(i));
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
function US(i) {
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
function BS(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function o(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes) e.remove(h.attributes[g]);
    h.removeEventListener('dispose', o), delete r[h.id];
    const p = s.get(h);
    p && (e.remove(p), s.delete(h)),
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
    const p = f.morphAttributes;
    for (const g in p) {
      const d = p[g];
      for (let m = 0, _ = d.length; m < _; m++) e.update(d[m], 34962);
    }
  }
  function c(f) {
    const h = [],
      p = f.index,
      g = f.attributes.position;
    let d = 0;
    if (p !== null) {
      const x = p.array;
      d = p.version;
      for (let v = 0, y = x.length; v < y; v += 3) {
        const b = x[v + 0],
          T = x[v + 1],
          L = x[v + 2];
        h.push(b, T, T, L, L, b);
      }
    } else {
      const x = g.array;
      d = g.version;
      for (let v = 0, y = x.length / 3 - 1; v < y; v += 3) {
        const b = v + 0,
          T = v + 1,
          L = v + 2;
        h.push(b, T, T, L, L, b);
      }
    }
    const m = new (vm(h) ? Em : Tm)(h, 1);
    m.version = d;
    const _ = s.get(f);
    _ && e.remove(_), s.set(f, m);
  }
  function u(f) {
    const h = s.get(f);
    if (h) {
      const p = f.index;
      p !== null && h.version < p.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function kS(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(h) {
    s = h;
  }
  let a, l;
  function c(h) {
    (a = h.type), (l = h.bytesPerElement);
  }
  function u(h, p) {
    i.drawElements(s, p, a, h * l), t.update(p, s, 1);
  }
  function f(h, p, g) {
    if (g === 0) return;
    let d, m;
    if (r) (d = i), (m = 'drawElementsInstanced');
    else if (
      ((d = e.get('ANGLE_instanced_arrays')),
      (m = 'drawElementsInstancedANGLE'),
      d === null)
    ) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    d[m](s, p, a, h * l, g), t.update(p, s, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = f);
}
function VS(i) {
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
function GS(i, e) {
  return i[0] - e[0];
}
function HS(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function WS(i, e, t) {
  const n = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new Tt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, f, h) {
    const p = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        d = g !== void 0 ? g.length : 0;
      let m = s.get(u);
      if (m === void 0 || m.count !== d) {
        let X = function () {
          B.dispose(), s.delete(u), u.removeEventListener('dispose', X);
        };
        m !== void 0 && m.texture.dispose();
        const v = u.morphAttributes.position !== void 0,
          y = u.morphAttributes.normal !== void 0,
          b = u.morphAttributes.color !== void 0,
          T = u.morphAttributes.position || [],
          L = u.morphAttributes.normal || [],
          M = u.morphAttributes.color || [];
        let w = 0;
        v === !0 && (w = 1), y === !0 && (w = 2), b === !0 && (w = 3);
        let R = u.attributes.position.count * w,
          q = 1;
        R > e.maxTextureSize &&
          ((q = Math.ceil(R / e.maxTextureSize)), (R = e.maxTextureSize));
        const Q = new Float32Array(R * q * 4 * d),
          B = new Sm(Q, R, q, d);
        (B.type = gr), (B.needsUpdate = !0);
        const I = w * 4;
        for (let Z = 0; Z < d; Z++) {
          const $ = T[Z],
            V = L[Z],
            N = M[Z],
            H = R * q * 4 * Z;
          for (let ue = 0; ue < $.count; ue++) {
            const te = ue * I;
            v === !0 &&
              (o.fromBufferAttribute($, ue),
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
                (o.fromBufferAttribute(N, ue),
                (Q[H + te + 8] = o.x),
                (Q[H + te + 9] = o.y),
                (Q[H + te + 10] = o.z),
                (Q[H + te + 11] = N.itemSize === 4 ? o.w : 1));
          }
        }
        (m = { count: d, texture: B, size: new Ie(R, q) }),
          s.set(u, m),
          u.addEventListener('dispose', X);
      }
      let _ = 0;
      for (let v = 0; v < p.length; v++) _ += p[v];
      const x = u.morphTargetsRelative ? 1 : 1 - _;
      h.getUniforms().setValue(i, 'morphTargetBaseInfluence', x),
        h.getUniforms().setValue(i, 'morphTargetInfluences', p),
        h.getUniforms().setValue(i, 'morphTargetsTexture', m.texture, t),
        h.getUniforms().setValue(i, 'morphTargetsTextureSize', m.size);
    } else {
      const g = p === void 0 ? 0 : p.length;
      let d = n[u.id];
      if (d === void 0 || d.length !== g) {
        d = [];
        for (let y = 0; y < g; y++) d[y] = [y, 0];
        n[u.id] = d;
      }
      for (let y = 0; y < g; y++) {
        const b = d[y];
        (b[0] = y), (b[1] = p[y]);
      }
      d.sort(HS);
      for (let y = 0; y < 8; y++)
        y < g && d[y][1]
          ? ((a[y][0] = d[y][0]), (a[y][1] = d[y][1]))
          : ((a[y][0] = Number.MAX_SAFE_INTEGER), (a[y][1] = 0));
      a.sort(GS);
      const m = u.morphAttributes.position,
        _ = u.morphAttributes.normal;
      let x = 0;
      for (let y = 0; y < 8; y++) {
        const b = a[y],
          T = b[0],
          L = b[1];
        T !== Number.MAX_SAFE_INTEGER && L
          ? (m &&
              u.getAttribute('morphTarget' + y) !== m[T] &&
              u.setAttribute('morphTarget' + y, m[T]),
            _ &&
              u.getAttribute('morphNormal' + y) !== _[T] &&
              u.setAttribute('morphNormal' + y, _[T]),
            (r[y] = L),
            (x += L))
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
function qS(i, e, t, n) {
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
const Rm = new cn(),
  Dm = new Sm(),
  Im = new Ly(),
  Om = new Cm(),
  nd = [],
  id = [],
  rd = new Float32Array(16),
  sd = new Float32Array(9),
  od = new Float32Array(4);
function Ws(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = nd[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (nd[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), i[o].toArray(s, a);
  }
  return s;
}
function _t(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function xt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function rl(i, e) {
  let t = id[e];
  t === void 0 && ((t = new Int32Array(e)), (id[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function XS(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function jS(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    i.uniform2fv(this.addr, e), xt(t, e);
  }
}
function YS(i, e) {
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
    if (_t(t, e)) return;
    i.uniform3fv(this.addr, e), xt(t, e);
  }
}
function $S(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    i.uniform4fv(this.addr, e), xt(t, e);
  }
}
function ZS(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), xt(t, e);
  } else {
    if (_t(t, n)) return;
    od.set(n), i.uniformMatrix2fv(this.addr, !1, od), xt(t, n);
  }
}
function KS(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), xt(t, e);
  } else {
    if (_t(t, n)) return;
    sd.set(n), i.uniformMatrix3fv(this.addr, !1, sd), xt(t, n);
  }
}
function JS(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), xt(t, e);
  } else {
    if (_t(t, n)) return;
    rd.set(n), i.uniformMatrix4fv(this.addr, !1, rd), xt(t, n);
  }
}
function QS(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function e1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    i.uniform2iv(this.addr, e), xt(t, e);
  }
}
function t1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (_t(t, e)) return;
    i.uniform3iv(this.addr, e), xt(t, e);
  }
}
function n1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    i.uniform4iv(this.addr, e), xt(t, e);
  }
}
function i1(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function r1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    i.uniform2uiv(this.addr, e), xt(t, e);
  }
}
function s1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (_t(t, e)) return;
    i.uniform3uiv(this.addr, e), xt(t, e);
  }
}
function o1(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    i.uniform4uiv(this.addr, e), xt(t, e);
  }
}
function a1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2D(e || Rm, r);
}
function l1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || Im, r);
}
function c1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || Om, r);
}
function u1(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Dm, r);
}
function f1(i) {
  switch (i) {
    case 5126:
      return XS;
    case 35664:
      return jS;
    case 35665:
      return YS;
    case 35666:
      return $S;
    case 35674:
      return ZS;
    case 35675:
      return KS;
    case 35676:
      return JS;
    case 5124:
    case 35670:
      return QS;
    case 35667:
    case 35671:
      return e1;
    case 35668:
    case 35672:
      return t1;
    case 35669:
    case 35673:
      return n1;
    case 5125:
      return i1;
    case 36294:
      return r1;
    case 36295:
      return s1;
    case 36296:
      return o1;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return a1;
    case 35679:
    case 36299:
    case 36307:
      return l1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return c1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return u1;
  }
}
function h1(i, e) {
  i.uniform1fv(this.addr, e);
}
function d1(i, e) {
  const t = Ws(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function p1(i, e) {
  const t = Ws(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function m1(i, e) {
  const t = Ws(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function g1(i, e) {
  const t = Ws(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function _1(i, e) {
  const t = Ws(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function x1(i, e) {
  const t = Ws(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function v1(i, e) {
  i.uniform1iv(this.addr, e);
}
function y1(i, e) {
  i.uniform2iv(this.addr, e);
}
function M1(i, e) {
  i.uniform3iv(this.addr, e);
}
function b1(i, e) {
  i.uniform4iv(this.addr, e);
}
function S1(i, e) {
  i.uniform1uiv(this.addr, e);
}
function w1(i, e) {
  i.uniform2uiv(this.addr, e);
}
function T1(i, e) {
  i.uniform3uiv(this.addr, e);
}
function E1(i, e) {
  i.uniform4uiv(this.addr, e);
}
function A1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = rl(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Rm, s[o]);
}
function C1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = rl(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || Im, s[o]);
}
function P1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = rl(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Om, s[o]);
}
function L1(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = rl(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Dm, s[o]);
}
function R1(i) {
  switch (i) {
    case 5126:
      return h1;
    case 35664:
      return d1;
    case 35665:
      return p1;
    case 35666:
      return m1;
    case 35674:
      return g1;
    case 35675:
      return _1;
    case 35676:
      return x1;
    case 5124:
    case 35670:
      return v1;
    case 35667:
    case 35671:
      return y1;
    case 35668:
    case 35672:
      return M1;
    case 35669:
    case 35673:
      return b1;
    case 5125:
      return S1;
    case 36294:
      return w1;
    case 36295:
      return T1;
    case 36296:
      return E1;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return A1;
    case 35679:
    case 36299:
    case 36307:
      return C1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return P1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return L1;
  }
}
class D1 {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = f1(t.type));
  }
}
class I1 {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = R1(t.type));
  }
}
class O1 {
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
const nc = /(\w+)(\])?(\[|\.)?/g;
function ad(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function F1(i, e, t) {
  const n = i.name,
    r = n.length;
  for (nc.lastIndex = 0; ; ) {
    const s = nc.exec(n),
      o = nc.lastIndex;
    let a = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === '[' && o + 2 === r))) {
      ad(t, c === void 0 ? new D1(a, i, e) : new I1(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && ((f = new O1(a)), ad(t, f)), (t = f);
    }
  }
}
class Sa {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      F1(s, o, this);
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
function ld(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let N1 = 0;
function z1(i, e) {
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
function U1(i) {
  switch (i) {
    case Ar:
      return ['Linear', '( value )'];
    case at:
      return ['sRGB', '( value )'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported encoding:', i),
        ['Linear', '( value )']
      );
  }
}
function cd(i, e, t) {
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
      z1(i.getShaderSource(e), o)
    );
  } else return r;
}
function B1(i, e) {
  const t = U1(e);
  return 'vec4 ' + i + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function k1(i, e) {
  let t;
  switch (e) {
    case iy:
      t = 'Linear';
      break;
    case ry:
      t = 'Reinhard';
      break;
    case sy:
      t = 'OptimizedCineon';
      break;
    case oy:
      t = 'ACESFilmic';
      break;
    case ay:
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
function V1(i) {
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
  ].filter(io).join(`
`);
}
function G1(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push('#define ' + t + ' ' + n);
  }
  return e.join(`
`);
}
function H1(i, e) {
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
function io(i) {
  return i !== '';
}
function ud(i, e) {
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
function fd(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const W1 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Hc(i) {
  return i.replace(W1, q1);
}
function q1(i, e) {
  const t = ze[e];
  if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
  return Hc(t);
}
const X1 =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function hd(i) {
  return i.replace(X1, j1);
}
function j1(i, e, t, n) {
  let r = '';
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function dd(i) {
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
function Y1(i) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    i.shadowMapType === hm
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : i.shadowMapType === Fv
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : i.shadowMapType === no && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function $1(i) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (i.envMap)
    switch (i.envMapMode) {
      case Ps:
      case Ls:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case nl:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function Z1(i) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (i.envMap)
    switch (i.envMapMode) {
      case Ls:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function K1(i) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (i.envMap)
    switch (i.combine) {
      case mm:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case ty:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case ny:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function J1(i) {
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
function Q1(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = Y1(t),
    c = $1(t),
    u = Z1(t),
    f = K1(t),
    h = J1(t),
    p = t.isWebGL2 ? '' : V1(t),
    g = G1(s),
    d = r.createProgram();
  let m,
    _,
    x = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((m = [g].filter(io).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (_ = [p, g].filter(io).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((m = [
        dd(t),
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
      ].filter(io).join(`
`)),
      (_ = [
        p,
        dd(t),
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
        t.toneMapping !== mi ? '#define TONE_MAPPING' : '',
        t.toneMapping !== mi ? ze.tonemapping_pars_fragment : '',
        t.toneMapping !== mi ? k1('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        ze.encodings_pars_fragment,
        B1('linearToOutputTexel', t.outputEncoding),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`,
      ].filter(io).join(`
`))),
    (o = Hc(o)),
    (o = ud(o, t)),
    (o = fd(o, t)),
    (a = Hc(a)),
    (a = ud(a, t)),
    (a = fd(a, t)),
    (o = hd(o)),
    (a = hd(a)),
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
          t.glslVersion === Nh
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          t.glslVersion === Nh ? '' : '#define gl_FragColor pc_fragColor',
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
    b = ld(r, 35633, v),
    T = ld(r, 35632, y);
  if (
    (r.attachShader(d, b),
    r.attachShader(d, T),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(d, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(d, 0, 'position'),
    r.linkProgram(d),
    i.debug.checkShaderErrors)
  ) {
    const w = r.getProgramInfoLog(d).trim(),
      R = r.getShaderInfoLog(b).trim(),
      q = r.getShaderInfoLog(T).trim();
    let Q = !0,
      B = !0;
    if (r.getProgramParameter(d, 35714) === !1) {
      Q = !1;
      const I = cd(r, b, 'vertex'),
        X = cd(r, T, 'fragment');
      console.error(
        'THREE.WebGLProgram: Shader Error ' +
          r.getError() +
          ' - VALIDATE_STATUS ' +
          r.getProgramParameter(d, 35715) +
          `

Program Info Log: ` +
          w +
          `
` +
          I +
          `
` +
          X
      );
    } else
      w !== ''
        ? console.warn('THREE.WebGLProgram: Program Info Log:', w)
        : (R === '' || q === '') && (B = !1);
    B &&
      (this.diagnostics = {
        runnable: Q,
        programLog: w,
        vertexShader: { log: R, prefix: m },
        fragmentShader: { log: q, prefix: _ },
      });
  }
  r.deleteShader(b), r.deleteShader(T);
  let L;
  this.getUniforms = function () {
    return L === void 0 && (L = new Sa(r, d)), L;
  };
  let M;
  return (
    (this.getAttributes = function () {
      return M === void 0 && (M = H1(r, d)), M;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(d),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = N1++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = d),
    (this.vertexShader = b),
    (this.fragmentShader = T),
    this
  );
}
let ew = 0;
class tw {
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
    return n === void 0 && ((n = new nw(e)), t.set(e, n)), n;
  }
}
class nw {
  constructor(e) {
    (this.id = ew++), (this.code = e), (this.usedTimes = 0);
  }
}
function iw(i, e, t, n, r, s, o) {
  const a = new wm(),
    l = new tw(),
    c = [],
    u = r.isWebGL2,
    f = r.logarithmicDepthBuffer,
    h = r.vertexTextures;
  let p = r.precision;
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
  function d(M, w, R, q, Q) {
    const B = q.fog,
      I = Q.geometry,
      X = M.isMeshStandardMaterial ? q.environment : null,
      Z = (M.isMeshStandardMaterial ? t : e).get(M.envMap || X),
      $ = !!Z && Z.mapping === nl ? Z.image.height : null,
      V = g[M.type];
    M.precision !== null &&
      ((p = r.getMaxPrecision(M.precision)),
      p !== M.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          M.precision,
          'not supported, using',
          p,
          'instead.'
        ));
    const N =
        I.morphAttributes.position ||
        I.morphAttributes.normal ||
        I.morphAttributes.color,
      H = N !== void 0 ? N.length : 0;
    let ue = 0;
    I.morphAttributes.position !== void 0 && (ue = 1),
      I.morphAttributes.normal !== void 0 && (ue = 2),
      I.morphAttributes.color !== void 0 && (ue = 3);
    let te, de, xe, G;
    if (V) {
      const Te = Xn[V];
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
      precision: p,
      instancing: Q.isInstancedMesh === !0,
      instancingColor: Q.isInstancedMesh === !0 && Q.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding:
        F === null
          ? i.outputEncoding
          : F.isXRRenderTarget === !0
          ? F.texture.encoding
          : Ar,
      map: !!M.map,
      matcap: !!M.matcap,
      envMap: !!Z,
      envMapMode: Z && Z.mapping,
      envMapCubeUVHeight: $,
      lightMap: !!M.lightMap,
      aoMap: !!M.aoMap,
      emissiveMap: !!M.emissiveMap,
      bumpMap: !!M.bumpMap,
      normalMap: !!M.normalMap,
      objectSpaceNormalMap: M.normalMapType === Ey,
      tangentSpaceNormalMap: M.normalMapType === xm,
      decodeVideoTexture:
        !!M.map && M.map.isVideoTexture === !0 && M.map.encoding === at,
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
      opaque: M.transparent === !1 && M.blending === xs,
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
      fog: !!B,
      useFog: M.fog === !0,
      fogExp2: B && B.isFogExp2,
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
      shadowMapEnabled: i.shadowMap.enabled && R.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: M.toneMapped ? i.toneMapping : mi,
      physicallyCorrectLights: i.physicallyCorrectLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === hi,
      flipSided: M.side === Tn,
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
      for (const R in M.defines) w.push(R), w.push(M.defines[R]);
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
    let R;
    if (w) {
      const q = Xn[w];
      R = Gy.clone(q.uniforms);
    } else R = M.uniforms;
    return R;
  }
  function y(M, w) {
    let R;
    for (let q = 0, Q = c.length; q < Q; q++) {
      const B = c[q];
      if (B.cacheKey === w) {
        (R = B), ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && ((R = new Q1(i, w, M, s)), c.push(R)), R;
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
  function L() {
    l.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: m,
    getUniforms: v,
    acquireProgram: y,
    releaseProgram: b,
    releaseShaderCache: T,
    programs: c,
    dispose: L,
  };
}
function rw() {
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
function sw(i, e) {
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
function pd(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function md() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function o(f, h, p, g, d, m) {
    let _ = i[e];
    return (
      _ === void 0
        ? ((_ = {
            id: f.id,
            object: f,
            geometry: h,
            material: p,
            groupOrder: g,
            renderOrder: f.renderOrder,
            z: d,
            group: m,
          }),
          (i[e] = _))
        : ((_.id = f.id),
          (_.object = f),
          (_.geometry = h),
          (_.material = p),
          (_.groupOrder = g),
          (_.renderOrder = f.renderOrder),
          (_.z = d),
          (_.group = m)),
      e++,
      _
    );
  }
  function a(f, h, p, g, d, m) {
    const _ = o(f, h, p, g, d, m);
    p.transmission > 0
      ? n.push(_)
      : p.transparent === !0
      ? r.push(_)
      : t.push(_);
  }
  function l(f, h, p, g, d, m) {
    const _ = o(f, h, p, g, d, m);
    p.transmission > 0
      ? n.unshift(_)
      : p.transparent === !0
      ? r.unshift(_)
      : t.unshift(_);
  }
  function c(f, h) {
    t.length > 1 && t.sort(f || sw),
      n.length > 1 && n.sort(h || pd),
      r.length > 1 && r.sort(h || pd);
  }
  function u() {
    for (let f = e, h = i.length; f < h; f++) {
      const p = i[f];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
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
function ow() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new md()), i.set(n, [o]))
        : r >= s.length
        ? ((o = new md()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function aw() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new U(), color: new qe() };
          break;
        case 'SpotLight':
          t = {
            position: new U(),
            direction: new U(),
            color: new qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          t = { position: new U(), color: new qe(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new U(), skyColor: new qe(), groundColor: new qe() };
          break;
        case 'RectAreaLight':
          t = {
            color: new qe(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function lw() {
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
            shadowMapSize: new Ie(),
          };
          break;
        case 'SpotLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ie(),
          };
          break;
        case 'PointLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ie(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let cw = 0;
function uw(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function fw(i, e) {
  const t = new aw(),
    n = lw(),
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
  for (let u = 0; u < 9; u++) r.probe.push(new U());
  const s = new U(),
    o = new pt(),
    a = new pt();
  function l(u, f) {
    let h = 0,
      p = 0,
      g = 0;
    for (let q = 0; q < 9; q++) r.probe[q].set(0, 0, 0);
    let d = 0,
      m = 0,
      _ = 0,
      x = 0,
      v = 0,
      y = 0,
      b = 0,
      T = 0,
      L = 0,
      M = 0;
    u.sort(uw);
    const w = f !== !0 ? Math.PI : 1;
    for (let q = 0, Q = u.length; q < Q; q++) {
      const B = u[q],
        I = B.color,
        X = B.intensity,
        Z = B.distance,
        $ = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight)
        (h += I.r * X * w), (p += I.g * X * w), (g += I.b * X * w);
      else if (B.isLightProbe)
        for (let V = 0; V < 9; V++)
          r.probe[V].addScaledVector(B.sh.coefficients[V], X);
      else if (B.isDirectionalLight) {
        const V = t.get(B);
        if (
          (V.color.copy(B.color).multiplyScalar(B.intensity * w), B.castShadow)
        ) {
          const N = B.shadow,
            H = n.get(B);
          (H.shadowBias = N.bias),
            (H.shadowNormalBias = N.normalBias),
            (H.shadowRadius = N.radius),
            (H.shadowMapSize = N.mapSize),
            (r.directionalShadow[d] = H),
            (r.directionalShadowMap[d] = $),
            (r.directionalShadowMatrix[d] = B.shadow.matrix),
            y++;
        }
        (r.directional[d] = V), d++;
      } else if (B.isSpotLight) {
        const V = t.get(B);
        V.position.setFromMatrixPosition(B.matrixWorld),
          V.color.copy(I).multiplyScalar(X * w),
          (V.distance = Z),
          (V.coneCos = Math.cos(B.angle)),
          (V.penumbraCos = Math.cos(B.angle * (1 - B.penumbra))),
          (V.decay = B.decay),
          (r.spot[_] = V);
        const N = B.shadow;
        if (
          (B.map &&
            ((r.spotLightMap[L] = B.map),
            L++,
            N.updateMatrices(B),
            B.castShadow && M++),
          (r.spotLightMatrix[_] = N.matrix),
          B.castShadow)
        ) {
          const H = n.get(B);
          (H.shadowBias = N.bias),
            (H.shadowNormalBias = N.normalBias),
            (H.shadowRadius = N.radius),
            (H.shadowMapSize = N.mapSize),
            (r.spotShadow[_] = H),
            (r.spotShadowMap[_] = $),
            T++;
        }
        _++;
      } else if (B.isRectAreaLight) {
        const V = t.get(B);
        V.color.copy(I).multiplyScalar(X),
          V.halfWidth.set(B.width * 0.5, 0, 0),
          V.halfHeight.set(0, B.height * 0.5, 0),
          (r.rectArea[x] = V),
          x++;
      } else if (B.isPointLight) {
        const V = t.get(B);
        if (
          (V.color.copy(B.color).multiplyScalar(B.intensity * w),
          (V.distance = B.distance),
          (V.decay = B.decay),
          B.castShadow)
        ) {
          const N = B.shadow,
            H = n.get(B);
          (H.shadowBias = N.bias),
            (H.shadowNormalBias = N.normalBias),
            (H.shadowRadius = N.radius),
            (H.shadowMapSize = N.mapSize),
            (H.shadowCameraNear = N.camera.near),
            (H.shadowCameraFar = N.camera.far),
            (r.pointShadow[m] = H),
            (r.pointShadowMap[m] = $),
            (r.pointShadowMatrix[m] = B.shadow.matrix),
            b++;
        }
        (r.point[m] = V), m++;
      } else if (B.isHemisphereLight) {
        const V = t.get(B);
        V.skyColor.copy(B.color).multiplyScalar(X * w),
          V.groundColor.copy(B.groundColor).multiplyScalar(X * w),
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
      (r.ambient[1] = p),
      (r.ambient[2] = g);
    const R = r.hash;
    (R.directionalLength !== d ||
      R.pointLength !== m ||
      R.spotLength !== _ ||
      R.rectAreaLength !== x ||
      R.hemiLength !== v ||
      R.numDirectionalShadows !== y ||
      R.numPointShadows !== b ||
      R.numSpotShadows !== T ||
      R.numSpotMaps !== L) &&
      ((r.directional.length = d),
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
      (r.spotLightMatrix.length = T + L - M),
      (r.spotLightMap.length = L),
      (r.numSpotLightShadowsWithMaps = M),
      (R.directionalLength = d),
      (R.pointLength = m),
      (R.spotLength = _),
      (R.rectAreaLength = x),
      (R.hemiLength = v),
      (R.numDirectionalShadows = y),
      (R.numPointShadows = b),
      (R.numSpotShadows = T),
      (R.numSpotMaps = L),
      (r.version = cw++));
  }
  function c(u, f) {
    let h = 0,
      p = 0,
      g = 0,
      d = 0,
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
        const b = r.rectArea[d];
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
          d++;
      } else if (y.isPointLight) {
        const b = r.point[p];
        b.position.setFromMatrixPosition(y.matrixWorld),
          b.position.applyMatrix4(_),
          p++;
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
function gd(i, e) {
  const t = new fw(i, e),
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
function hw(i, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new gd(i, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new gd(i, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
class dw extends $i {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = wy),
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
class pw extends $i {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.referencePosition = new U()),
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
const mw = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  gw = `uniform sampler2D shadow_pass;
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
function _w(i, e, t) {
  let n = new Pm();
  const r = new Ie(),
    s = new Ie(),
    o = new Tt(),
    a = new dw({ depthPacking: Ty }),
    l = new pw(),
    c = {},
    u = t.maxTextureSize,
    f = { 0: Tn, 1: Cs, 2: hi },
    h = new Lr({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ie() },
        radius: { value: 4 },
      },
      vertexShader: mw,
      fragmentShader: gw,
    }),
    p = h.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Jt();
  g.setAttribute(
    'position',
    new En(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const d = new yn(g, h),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = hm),
    (this.render = function (y, b, T) {
      if (
        m.enabled === !1 ||
        (m.autoUpdate === !1 && m.needsUpdate === !1) ||
        y.length === 0
      )
        return;
      const L = i.getRenderTarget(),
        M = i.getActiveCubeFace(),
        w = i.getActiveMipmapLevel(),
        R = i.state;
      R.setBlending(Vi),
        R.buffers.color.setClear(1, 1, 1, 1),
        R.buffers.depth.setTest(!0),
        R.setScissorTest(!1);
      for (let q = 0, Q = y.length; q < Q; q++) {
        const B = y[q],
          I = B.shadow;
        if (I === void 0) {
          console.warn('THREE.WebGLShadowMap:', B, 'has no shadow.');
          continue;
        }
        if (I.autoUpdate === !1 && I.needsUpdate === !1) continue;
        r.copy(I.mapSize);
        const X = I.getFrameExtents();
        if (
          (r.multiply(X),
          s.copy(I.mapSize),
          (r.x > u || r.y > u) &&
            (r.x > u &&
              ((s.x = Math.floor(u / X.x)),
              (r.x = s.x * X.x),
              (I.mapSize.x = s.x)),
            r.y > u &&
              ((s.y = Math.floor(u / X.y)),
              (r.y = s.y * X.y),
              (I.mapSize.y = s.y))),
          I.map === null)
        ) {
          const $ = this.type !== no ? { minFilter: Gt, magFilter: Gt } : {};
          (I.map = new Cr(r.x, r.y, $)),
            (I.map.texture.name = B.name + '.shadowMap'),
            I.camera.updateProjectionMatrix();
        }
        i.setRenderTarget(I.map), i.clear();
        const Z = I.getViewportCount();
        for (let $ = 0; $ < Z; $++) {
          const V = I.getViewport($);
          o.set(s.x * V.x, s.y * V.y, s.x * V.z, s.y * V.w),
            R.viewport(o),
            I.updateMatrices(B, $),
            (n = I.getFrustum()),
            v(b, T, I.camera, B, this.type);
        }
        I.isPointLightShadow !== !0 && this.type === no && _(I, T),
          (I.needsUpdate = !1);
      }
      (m.needsUpdate = !1), i.setRenderTarget(L, M, w);
    });
  function _(y, b) {
    const T = e.update(d);
    h.defines.VSM_SAMPLES !== y.blurSamples &&
      ((h.defines.VSM_SAMPLES = y.blurSamples),
      (p.defines.VSM_SAMPLES = y.blurSamples),
      (h.needsUpdate = !0),
      (p.needsUpdate = !0)),
      y.mapPass === null && (y.mapPass = new Cr(r.x, r.y)),
      (h.uniforms.shadow_pass.value = y.map.texture),
      (h.uniforms.resolution.value = y.mapSize),
      (h.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.mapPass),
      i.clear(),
      i.renderBufferDirect(b, null, T, h, d, null),
      (p.uniforms.shadow_pass.value = y.mapPass.texture),
      (p.uniforms.resolution.value = y.mapSize),
      (p.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.map),
      i.clear(),
      i.renderBufferDirect(b, null, T, p, d, null);
  }
  function x(y, b, T, L, M, w) {
    let R = null;
    const q =
      T.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (
      (q !== void 0 ? (R = q) : (R = T.isPointLight === !0 ? l : a),
      (i.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0))
    ) {
      const Q = R.uuid,
        B = b.uuid;
      let I = c[Q];
      I === void 0 && ((I = {}), (c[Q] = I));
      let X = I[B];
      X === void 0 && ((X = R.clone()), (I[B] = X)), (R = X);
    }
    return (
      (R.visible = b.visible),
      (R.wireframe = b.wireframe),
      w === no
        ? (R.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (R.side = b.shadowSide !== null ? b.shadowSide : f[b.side]),
      (R.alphaMap = b.alphaMap),
      (R.alphaTest = b.alphaTest),
      (R.clipShadows = b.clipShadows),
      (R.clippingPlanes = b.clippingPlanes),
      (R.clipIntersection = b.clipIntersection),
      (R.displacementMap = b.displacementMap),
      (R.displacementScale = b.displacementScale),
      (R.displacementBias = b.displacementBias),
      (R.wireframeLinewidth = b.wireframeLinewidth),
      (R.linewidth = b.linewidth),
      T.isPointLight === !0 &&
        R.isMeshDistanceMaterial === !0 &&
        (R.referencePosition.setFromMatrixPosition(T.matrixWorld),
        (R.nearDistance = L),
        (R.farDistance = M)),
      R
    );
  }
  function v(y, b, T, L, M) {
    if (y.visible === !1) return;
    if (
      y.layers.test(b.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && M === no)) &&
      (!y.frustumCulled || n.intersectsObject(y))
    ) {
      y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, y.matrixWorld);
      const q = e.update(y),
        Q = y.material;
      if (Array.isArray(Q)) {
        const B = q.groups;
        for (let I = 0, X = B.length; I < X; I++) {
          const Z = B[I],
            $ = Q[Z.materialIndex];
          if ($ && $.visible) {
            const V = x(y, $, L, T.near, T.far, M);
            i.renderBufferDirect(T, null, q, V, y, Z);
          }
        }
      } else if (Q.visible) {
        const B = x(y, Q, L, T.near, T.far, M);
        i.renderBufferDirect(T, null, q, B, y, null);
      }
    }
    const R = y.children;
    for (let q = 0, Q = R.length; q < Q; q++) v(R[q], b, T, L, M);
  }
}
function xw(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let O = !1;
    const re = new Tt();
    let ge = null;
    const Ae = new Tt(0, 0, 0, 0);
    return {
      setMask: function (Pe) {
        ge !== Pe && !O && (i.colorMask(Pe, Pe, Pe, Pe), (ge = Pe));
      },
      setLocked: function (Pe) {
        O = Pe;
      },
      setClear: function (Pe, je, vt, Ct, Ki) {
        Ki === !0 && ((Pe *= Ct), (je *= Ct), (vt *= Ct)),
          re.set(Pe, je, vt, Ct),
          Ae.equals(re) === !1 && (i.clearColor(Pe, je, vt, Ct), Ae.copy(re));
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
            case Yv:
              i.depthFunc(512);
              break;
            case $v:
              i.depthFunc(519);
              break;
            case Zv:
              i.depthFunc(513);
              break;
            case Fc:
              i.depthFunc(515);
              break;
            case Kv:
              i.depthFunc(514);
              break;
            case Jv:
              i.depthFunc(518);
              break;
            case Qv:
              i.depthFunc(516);
              break;
            case ey:
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
      vt = null,
      Ct = null,
      Ki = null;
    return {
      setTest: function (nt) {
        O || (nt ? le(2960) : ce(2960));
      },
      setMask: function (nt) {
        re !== nt && !O && (i.stencilMask(nt), (re = nt));
      },
      setFunc: function (nt, ti, hn) {
        (ge !== nt || Ae !== ti || Pe !== hn) &&
          (i.stencilFunc(nt, ti, hn), (ge = nt), (Ae = ti), (Pe = hn));
      },
      setOp: function (nt, ti, hn) {
        (je !== nt || vt !== ti || Ct !== hn) &&
          (i.stencilOp(nt, ti, hn), (je = nt), (vt = ti), (Ct = hn));
      },
      setLocked: function (nt) {
        O = nt;
      },
      setClear: function (nt) {
        Ki !== nt && (i.clearStencil(nt), (Ki = nt));
      },
      reset: function () {
        (O = !1),
          (re = null),
          (ge = null),
          (Ae = null),
          (Pe = null),
          (je = null),
          (vt = null),
          (Ct = null),
          (Ki = null);
      },
    };
  }
  const a = new r(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    f = new WeakMap();
  let h = {},
    p = {},
    g = new WeakMap(),
    d = [],
    m = null,
    _ = !1,
    x = null,
    v = null,
    y = null,
    b = null,
    T = null,
    L = null,
    M = null,
    w = !1,
    R = null,
    q = null,
    Q = null,
    B = null,
    I = null;
  const X = i.getParameter(35661);
  let Z = !1,
    $ = 0;
  const V = i.getParameter(7938);
  V.indexOf('WebGL') !== -1
    ? (($ = parseFloat(/^WebGL (\d)/.exec(V)[1])), (Z = $ >= 1))
    : V.indexOf('OpenGL ES') !== -1 &&
      (($ = parseFloat(/^OpenGL ES (\d)/.exec(V)[1])), (Z = $ >= 2));
  let N = null,
    H = {};
  const ue = i.getParameter(3088),
    te = i.getParameter(2978),
    de = new Tt().fromArray(ue),
    xe = new Tt().fromArray(te);
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
    l.setFunc(Fc),
    ee(!1),
    he(lh),
    le(2884),
    j(Vi);
  function le(O) {
    h[O] !== !0 && (i.enable(O), (h[O] = !0));
  }
  function ce(O) {
    h[O] !== !1 && (i.disable(O), (h[O] = !1));
  }
  function ve(O, re) {
    return p[O] !== re
      ? (i.bindFramebuffer(O, re),
        (p[O] = re),
        n && (O === 36009 && (p[36160] = re), O === 36160 && (p[36009] = re)),
        !0)
      : !1;
  }
  function _e(O, re) {
    let ge = d,
      Ae = !1;
    if (O)
      if (
        ((ge = g.get(re)),
        ge === void 0 && ((ge = []), g.set(re, ge)),
        O.isWebGLMultipleRenderTargets)
      ) {
        const Pe = O.texture;
        if (ge.length !== Pe.length || ge[0] !== 36064) {
          for (let je = 0, vt = Pe.length; je < vt; je++) ge[je] = 36064 + je;
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
  const A = { [ls]: 32774, [zv]: 32778, [Uv]: 32779 };
  if (n) (A[fh] = 32775), (A[hh] = 32776);
  else {
    const O = e.get('EXT_blend_minmax');
    O !== null && ((A[fh] = O.MIN_EXT), (A[hh] = O.MAX_EXT));
  }
  const P = {
    [Bv]: 0,
    [kv]: 1,
    [Vv]: 768,
    [dm]: 770,
    [jv]: 776,
    [qv]: 774,
    [Hv]: 772,
    [Gv]: 769,
    [pm]: 771,
    [Xv]: 775,
    [Wv]: 773,
  };
  function j(O, re, ge, Ae, Pe, je, vt, Ct) {
    if (O === Vi) {
      _ === !0 && (ce(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (le(3042), (_ = !0)), O !== Nv)) {
      if (O !== x || Ct !== w) {
        if (
          ((v !== ls || T !== ls) &&
            (i.blendEquation(32774), (v = ls), (T = ls)),
          Ct)
        )
          switch (O) {
            case xs:
              i.blendFuncSeparate(1, 771, 1, 771);
              break;
            case co:
              i.blendFunc(1, 1);
              break;
            case ch:
              i.blendFuncSeparate(0, 769, 0, 1);
              break;
            case uh:
              i.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', O);
              break;
          }
        else
          switch (O) {
            case xs:
              i.blendFuncSeparate(770, 771, 1, 771);
              break;
            case co:
              i.blendFunc(770, 1);
              break;
            case ch:
              i.blendFuncSeparate(0, 769, 0, 1);
              break;
            case uh:
              i.blendFunc(0, 768);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', O);
              break;
          }
        (y = null), (b = null), (L = null), (M = null), (x = O), (w = Ct);
      }
      return;
    }
    (Pe = Pe || re),
      (je = je || ge),
      (vt = vt || Ae),
      (re !== v || Pe !== T) &&
        (i.blendEquationSeparate(A[re], A[Pe]), (v = re), (T = Pe)),
      (ge !== y || Ae !== b || je !== L || vt !== M) &&
        (i.blendFuncSeparate(P[ge], P[Ae], P[je], P[vt]),
        (y = ge),
        (b = Ae),
        (L = je),
        (M = vt)),
      (x = O),
      (w = null);
  }
  function K(O, re) {
    O.side === hi ? ce(2884) : le(2884);
    let ge = O.side === Tn;
    re && (ge = !ge),
      ee(ge),
      O.blending === xs && O.transparent === !1
        ? j(Vi)
        : j(
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
    R !== O && (O ? i.frontFace(2304) : i.frontFace(2305), (R = O));
  }
  function he(O) {
    O !== Iv
      ? (le(2884),
        O !== q &&
          (O === lh
            ? i.cullFace(1029)
            : O === Ov
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
        (B !== re || I !== ge) && (i.polygonOffset(re, ge), (B = re), (I = ge)))
      : ce(32823);
  }
  function me(O) {
    O ? le(3089) : ce(3089);
  }
  function ae(O) {
    O === void 0 && (O = 33984 + X - 1),
      N !== O && (i.activeTexture(O), (N = O));
  }
  function E(O, re, ge) {
    ge === void 0 && (N === null ? (ge = 33984 + X - 1) : (ge = N));
    let Ae = H[ge];
    Ae === void 0 && ((Ae = { type: void 0, texture: void 0 }), (H[ge] = Ae)),
      (Ae.type !== O || Ae.texture !== re) &&
        (N !== ge && (i.activeTexture(ge), (N = ge)),
        i.bindTexture(O, re || F[O]),
        (Ae.type = O),
        (Ae.texture = re));
  }
  function S() {
    const O = H[N];
    O !== void 0 &&
      O.type !== void 0 &&
      (i.bindTexture(O.type, null), (O.type = void 0), (O.texture = void 0));
  }
  function z() {
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
  function D() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (O) {
      console.error('THREE.WebGLState:', O);
    }
  }
  function k() {
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
  function De(O, re) {
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
      (N = null),
      (H = {}),
      (p = {}),
      (g = new WeakMap()),
      (d = []),
      (m = null),
      (_ = !1),
      (x = null),
      (v = null),
      (y = null),
      (b = null),
      (T = null),
      (L = null),
      (M = null),
      (w = !1),
      (R = null),
      (q = null),
      (Q = null),
      (B = null),
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
    setBlending: j,
    setMaterial: K,
    setFlipSided: ee,
    setCullFace: he,
    setLineWidth: pe,
    setPolygonOffset: oe,
    setScissorTest: me,
    activeTexture: ae,
    bindTexture: E,
    unbindTexture: S,
    compressedTexImage2D: z,
    compressedTexImage3D: J,
    texImage2D: Ee,
    texImage3D: Se,
    updateUBOMapping: De,
    uniformBlockBinding: ke,
    texStorage2D: k,
    texStorage3D: be,
    texSubImage2D: ie,
    texSubImage3D: fe,
    compressedTexSubImage2D: Me,
    compressedTexSubImage3D: D,
    scissor: Ce,
    viewport: we,
    reset: Ke,
  };
}
function vw(i, e, t, n, r, s, o) {
  const a = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    u = r.maxTextureSize,
    f = r.maxSamples,
    h = e.has('WEBGL_multisampled_render_to_texture')
      ? e.get('WEBGL_multisampled_render_to_texture')
      : null,
    p = /OculusBrowser/g.test(
      typeof navigator > 'u' ? '' : navigator.userAgent
    ),
    g = new WeakMap();
  let d;
  const m = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function x(E, S) {
    return _ ? new OffscreenCanvas(E, S) : To('canvas');
  }
  function v(E, S, z, J) {
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
        const fe = S ? Gc : Math.floor,
          Me = fe(ie * E.width),
          D = fe(ie * E.height);
        d === void 0 && (d = x(Me, D));
        const k = z ? x(Me, D) : d;
        return (
          (k.width = Me),
          (k.height = D),
          k.getContext('2d').drawImage(E, 0, 0, Me, D),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              E.width +
              'x' +
              E.height +
              ') to (' +
              Me +
              'x' +
              D +
              ').'
          ),
          k
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
    return Uh(E.width) && Uh(E.height);
  }
  function b(E) {
    return a
      ? !1
      : E.wrapS !== On ||
          E.wrapT !== On ||
          (E.minFilter !== Gt && E.minFilter !== Ht);
  }
  function T(E, S) {
    return E.generateMipmaps && S && E.minFilter !== Gt && E.minFilter !== Ht;
  }
  function L(E) {
    i.generateMipmap(E);
  }
  function M(E, S, z, J, ie = !1) {
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
        (z === 5126 && (fe = 33326),
        z === 5131 && (fe = 33325),
        z === 5121 && (fe = 33321)),
      S === 33319 &&
        (z === 5126 && (fe = 33328),
        z === 5131 && (fe = 33327),
        z === 5121 && (fe = 33323)),
      S === 6408 &&
        (z === 5126 && (fe = 34836),
        z === 5131 && (fe = 34842),
        z === 5121 && (fe = J === at && ie === !1 ? 35907 : 32856),
        z === 32819 && (fe = 32854),
        z === 32820 && (fe = 32855)),
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
  function w(E, S, z) {
    return T(E, z) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== Gt && E.minFilter !== Ht)
      ? Math.log2(Math.max(S.width, S.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? S.mipmaps.length
      : 1;
  }
  function R(E) {
    return E === Gt || E === dh || E === ph ? 9728 : 9729;
  }
  function q(E) {
    const S = E.target;
    S.removeEventListener('dispose', q), B(S), S.isVideoTexture && g.delete(S);
  }
  function Q(E) {
    const S = E.target;
    S.removeEventListener('dispose', Q), X(S);
  }
  function B(E) {
    const S = n.get(E);
    if (S.__webglInit === void 0) return;
    const z = E.source,
      J = m.get(z);
    if (J) {
      const ie = J[S.__cacheKey];
      ie.usedTimes--,
        ie.usedTimes === 0 && I(E),
        Object.keys(J).length === 0 && m.delete(z);
    }
    n.remove(E);
  }
  function I(E) {
    const S = n.get(E);
    i.deleteTexture(S.__webglTexture);
    const z = E.source,
      J = m.get(z);
    delete J[S.__cacheKey], o.memory.textures--;
  }
  function X(E) {
    const S = E.texture,
      z = n.get(E),
      J = n.get(S);
    if (
      (J.__webglTexture !== void 0 &&
        (i.deleteTexture(J.__webglTexture), o.memory.textures--),
      E.depthTexture && E.depthTexture.dispose(),
      E.isWebGLCubeRenderTarget)
    )
      for (let ie = 0; ie < 6; ie++)
        i.deleteFramebuffer(z.__webglFramebuffer[ie]),
          z.__webglDepthbuffer &&
            i.deleteRenderbuffer(z.__webglDepthbuffer[ie]);
    else {
      if (
        (i.deleteFramebuffer(z.__webglFramebuffer),
        z.__webglDepthbuffer && i.deleteRenderbuffer(z.__webglDepthbuffer),
        z.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(z.__webglMultisampledFramebuffer),
        z.__webglColorRenderbuffer)
      )
        for (let ie = 0; ie < z.__webglColorRenderbuffer.length; ie++)
          z.__webglColorRenderbuffer[ie] &&
            i.deleteRenderbuffer(z.__webglColorRenderbuffer[ie]);
      z.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(z.__webglDepthRenderbuffer);
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
  function $() {
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
  function N(E) {
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
    const z = n.get(E);
    if (
      (E.isVideoTexture && me(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        z.__version !== E.version)
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
        ce(z, E, S);
        return;
      }
    }
    t.bindTexture(3553, z.__webglTexture, 33984 + S);
  }
  function ue(E, S) {
    const z = n.get(E);
    if (E.version > 0 && z.__version !== E.version) {
      ce(z, E, S);
      return;
    }
    t.bindTexture(35866, z.__webglTexture, 33984 + S);
  }
  function te(E, S) {
    const z = n.get(E);
    if (E.version > 0 && z.__version !== E.version) {
      ce(z, E, S);
      return;
    }
    t.bindTexture(32879, z.__webglTexture, 33984 + S);
  }
  function de(E, S) {
    const z = n.get(E);
    if (E.version > 0 && z.__version !== E.version) {
      ve(z, E, S);
      return;
    }
    t.bindTexture(34067, z.__webglTexture, 33984 + S);
  }
  const xe = { [Uc]: 10497, [On]: 33071, [Bc]: 33648 },
    G = {
      [Gt]: 9728,
      [dh]: 9984,
      [ph]: 9986,
      [Ht]: 9729,
      [ly]: 9985,
      [il]: 9987,
    };
  function F(E, S, z) {
    if (
      (z
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
          i.texParameteri(E, 10240, R(S.magFilter)),
          i.texParameteri(E, 10241, R(S.minFilter)),
          S.minFilter !== Gt &&
            S.minFilter !== Ht &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
            )),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      const J = e.get('EXT_texture_filter_anisotropic');
      if (
        (S.type === gr && e.has('OES_texture_float_linear') === !1) ||
        (a === !1 &&
          S.type === wo &&
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
    let z = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), S.addEventListener('dispose', q));
    const J = S.source;
    let ie = m.get(J);
    ie === void 0 && ((ie = {}), m.set(J, ie));
    const fe = N(S);
    if (fe !== E.__cacheKey) {
      ie[fe] === void 0 &&
        ((ie[fe] = { texture: i.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (z = !0)),
        ie[fe].usedTimes++;
      const Me = ie[E.__cacheKey];
      Me !== void 0 &&
        (ie[E.__cacheKey].usedTimes--, Me.usedTimes === 0 && I(S)),
        (E.__cacheKey = fe),
        (E.__webglTexture = ie[fe].texture);
    }
    return z;
  }
  function ce(E, S, z) {
    let J = 3553;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (J = 35866),
      S.isData3DTexture && (J = 32879);
    const ie = le(E, S),
      fe = S.source;
    t.bindTexture(J, E.__webglTexture, 33984 + z);
    const Me = n.get(fe);
    if (fe.version !== Me.__version || ie === !0) {
      t.activeTexture(33984 + z),
        i.pixelStorei(37440, S.flipY),
        i.pixelStorei(37441, S.premultiplyAlpha),
        i.pixelStorei(3317, S.unpackAlignment),
        i.pixelStorei(37443, 0);
      const D = b(S) && y(S.image) === !1;
      let k = v(S.image, D, !1, u);
      k = ae(S, k);
      const be = y(k) || a,
        Ee = s.convert(S.format, S.encoding);
      let Se = s.convert(S.type),
        Ce = M(S.internalFormat, Ee, Se, S.encoding, S.isVideoTexture);
      F(J, S, be);
      let we;
      const De = S.mipmaps,
        ke = a && S.isVideoTexture !== !0,
        Ke = Me.__version === void 0 || ie === !0,
        O = w(S, k, be);
      if (S.isDepthTexture)
        (Ce = 6402),
          a
            ? S.type === gr
              ? (Ce = 36012)
              : S.type === mr
              ? (Ce = 33190)
              : S.type === vs
              ? (Ce = 35056)
              : (Ce = 33189)
            : S.type === gr &&
              console.error(
                'WebGLRenderer: Floating point depth texture requires WebGL2.'
              ),
          S.format === Mr &&
            Ce === 6402 &&
            S.type !== _m &&
            S.type !== mr &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
            ),
            (S.type = mr),
            (Se = s.convert(S.type))),
          S.format === Rs &&
            Ce === 6402 &&
            ((Ce = 34041),
            S.type !== vs &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
              ),
              (S.type = vs),
              (Se = s.convert(S.type)))),
          Ke &&
            (ke
              ? t.texStorage2D(3553, 1, Ce, k.width, k.height)
              : t.texImage2D(3553, 0, Ce, k.width, k.height, 0, Ee, Se, null));
      else if (S.isDataTexture)
        if (De.length > 0 && be) {
          ke && Ke && t.texStorage2D(3553, O, Ce, De[0].width, De[0].height);
          for (let re = 0, ge = De.length; re < ge; re++)
            (we = De[re]),
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
            ? (Ke && t.texStorage2D(3553, O, Ce, k.width, k.height),
              t.texSubImage2D(3553, 0, 0, 0, k.width, k.height, Ee, Se, k.data))
            : t.texImage2D(3553, 0, Ce, k.width, k.height, 0, Ee, Se, k.data);
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          ke &&
            Ke &&
            t.texStorage3D(35866, O, Ce, De[0].width, De[0].height, k.depth);
          for (let re = 0, ge = De.length; re < ge; re++)
            (we = De[re]),
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
                        k.depth,
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
                        k.depth,
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
                    k.depth,
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
                    k.depth,
                    0,
                    Ee,
                    Se,
                    we.data
                  );
        } else {
          ke && Ke && t.texStorage2D(3553, O, Ce, De[0].width, De[0].height);
          for (let re = 0, ge = De.length; re < ge; re++)
            (we = De[re]),
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
          ? (Ke && t.texStorage3D(35866, O, Ce, k.width, k.height, k.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              k.width,
              k.height,
              k.depth,
              Ee,
              Se,
              k.data
            ))
          : t.texImage3D(
              35866,
              0,
              Ce,
              k.width,
              k.height,
              k.depth,
              0,
              Ee,
              Se,
              k.data
            );
      else if (S.isData3DTexture)
        ke
          ? (Ke && t.texStorage3D(32879, O, Ce, k.width, k.height, k.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              k.width,
              k.height,
              k.depth,
              Ee,
              Se,
              k.data
            ))
          : t.texImage3D(
              32879,
              0,
              Ce,
              k.width,
              k.height,
              k.depth,
              0,
              Ee,
              Se,
              k.data
            );
      else if (S.isFramebufferTexture) {
        if (Ke)
          if (ke) t.texStorage2D(3553, O, Ce, k.width, k.height);
          else {
            let re = k.width,
              ge = k.height;
            for (let Ae = 0; Ae < O; Ae++)
              t.texImage2D(3553, Ae, Ce, re, ge, 0, Ee, Se, null),
                (re >>= 1),
                (ge >>= 1);
          }
      } else if (De.length > 0 && be) {
        ke && Ke && t.texStorage2D(3553, O, Ce, De[0].width, De[0].height);
        for (let re = 0, ge = De.length; re < ge; re++)
          (we = De[re]),
            ke
              ? t.texSubImage2D(3553, re, 0, 0, Ee, Se, we)
              : t.texImage2D(3553, re, Ce, Ee, Se, we);
        S.generateMipmaps = !1;
      } else
        ke
          ? (Ke && t.texStorage2D(3553, O, Ce, k.width, k.height),
            t.texSubImage2D(3553, 0, 0, 0, Ee, Se, k))
          : t.texImage2D(3553, 0, Ce, Ee, Se, k);
      T(S, be) && L(J),
        (Me.__version = fe.version),
        S.onUpdate && S.onUpdate(S);
    }
    E.__version = S.version;
  }
  function ve(E, S, z) {
    if (S.image.length !== 6) return;
    const J = le(E, S),
      ie = S.source;
    t.bindTexture(34067, E.__webglTexture, 33984 + z);
    const fe = n.get(ie);
    if (ie.version !== fe.__version || J === !0) {
      t.activeTexture(33984 + z),
        i.pixelStorei(37440, S.flipY),
        i.pixelStorei(37441, S.premultiplyAlpha),
        i.pixelStorei(3317, S.unpackAlignment),
        i.pixelStorei(37443, 0);
      const Me = S.isCompressedTexture || S.image[0].isCompressedTexture,
        D = S.image[0] && S.image[0].isDataTexture,
        k = [];
      for (let re = 0; re < 6; re++)
        !Me && !D
          ? (k[re] = v(S.image[re], !1, !0, c))
          : (k[re] = D ? S.image[re].image : S.image[re]),
          (k[re] = ae(S, k[re]));
      const be = k[0],
        Ee = y(be) || a,
        Se = s.convert(S.format, S.encoding),
        Ce = s.convert(S.type),
        we = M(S.internalFormat, Se, Ce, S.encoding),
        De = a && S.isVideoTexture !== !0,
        ke = fe.__version === void 0 || J === !0;
      let Ke = w(S, be, Ee);
      F(34067, S, Ee);
      let O;
      if (Me) {
        De && ke && t.texStorage2D(34067, Ke, we, be.width, be.height);
        for (let re = 0; re < 6; re++) {
          O = k[re].mipmaps;
          for (let ge = 0; ge < O.length; ge++) {
            const Ae = O[ge];
            S.format !== Fn
              ? Se !== null
                ? De
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
              : De
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
          De &&
            ke &&
            (O.length > 0 && Ke++,
            t.texStorage2D(34067, Ke, we, k[0].width, k[0].height));
        for (let re = 0; re < 6; re++)
          if (D) {
            De
              ? t.texSubImage2D(
                  34069 + re,
                  0,
                  0,
                  0,
                  k[re].width,
                  k[re].height,
                  Se,
                  Ce,
                  k[re].data
                )
              : t.texImage2D(
                  34069 + re,
                  0,
                  we,
                  k[re].width,
                  k[re].height,
                  0,
                  Se,
                  Ce,
                  k[re].data
                );
            for (let ge = 0; ge < O.length; ge++) {
              const Pe = O[ge].image[re].image;
              De
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
            De
              ? t.texSubImage2D(34069 + re, 0, 0, 0, Se, Ce, k[re])
              : t.texImage2D(34069 + re, 0, we, Se, Ce, k[re]);
            for (let ge = 0; ge < O.length; ge++) {
              const Ae = O[ge];
              De
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
      T(S, Ee) && L(34067),
        (fe.__version = ie.version),
        S.onUpdate && S.onUpdate(S);
    }
    E.__version = S.version;
  }
  function _e(E, S, z, J, ie) {
    const fe = s.convert(z.format, z.encoding),
      Me = s.convert(z.type),
      D = M(z.internalFormat, fe, Me, z.encoding);
    n.get(S).__hasExternalTextures ||
      (ie === 32879 || ie === 35866
        ? t.texImage3D(ie, 0, D, S.width, S.height, S.depth, 0, fe, Me, null)
        : t.texImage2D(ie, 0, D, S.width, S.height, 0, fe, Me, null)),
      t.bindFramebuffer(36160, E),
      oe(S)
        ? h.framebufferTexture2DMultisampleEXT(
            36160,
            J,
            ie,
            n.get(z).__webglTexture,
            0,
            pe(S)
          )
        : (ie === 3553 || (ie >= 34069 && ie <= 34074)) &&
          i.framebufferTexture2D(36160, J, ie, n.get(z).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Te(E, S, z) {
    if ((i.bindRenderbuffer(36161, E), S.depthBuffer && !S.stencilBuffer)) {
      let J = 33189;
      if (z || oe(S)) {
        const ie = S.depthTexture;
        ie &&
          ie.isDepthTexture &&
          (ie.type === gr ? (J = 36012) : ie.type === mr && (J = 33190));
        const fe = pe(S);
        oe(S)
          ? h.renderbufferStorageMultisampleEXT(36161, fe, J, S.width, S.height)
          : i.renderbufferStorageMultisample(36161, fe, J, S.width, S.height);
      } else i.renderbufferStorage(36161, J, S.width, S.height);
      i.framebufferRenderbuffer(36160, 36096, 36161, E);
    } else if (S.depthBuffer && S.stencilBuffer) {
      const J = pe(S);
      z && oe(S) === !1
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
          D = s.convert(fe.type),
          k = M(fe.internalFormat, Me, D, fe.encoding),
          be = pe(S);
        z && oe(S) === !1
          ? i.renderbufferStorageMultisample(36161, be, k, S.width, S.height)
          : oe(S)
          ? h.renderbufferStorageMultisampleEXT(36161, be, k, S.width, S.height)
          : i.renderbufferStorage(36161, k, S.width, S.height);
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
    if (S.depthTexture.format === Mr)
      oe(S)
        ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, J, 0, ie)
        : i.framebufferTexture2D(36160, 36096, 3553, J, 0);
    else if (S.depthTexture.format === Rs)
      oe(S)
        ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, J, 0, ie)
        : i.framebufferTexture2D(36160, 33306, 3553, J, 0);
    else throw new Error('Unknown depthTexture format');
  }
  function P(E) {
    const S = n.get(E),
      z = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (z)
        throw new Error(
          'target.depthTexture not supported in Cube render targets'
        );
      A(S.__webglFramebuffer, E);
    } else if (z) {
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
  function j(E, S, z) {
    const J = n.get(E);
    S !== void 0 && _e(J.__webglFramebuffer, E, E.texture, 36064, 3553),
      z !== void 0 && P(E);
  }
  function K(E) {
    const S = E.texture,
      z = n.get(E),
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
      z.__webglFramebuffer = [];
      for (let D = 0; D < 6; D++)
        z.__webglFramebuffer[D] = i.createFramebuffer();
    } else {
      if (((z.__webglFramebuffer = i.createFramebuffer()), fe))
        if (r.drawBuffers) {
          const D = E.texture;
          for (let k = 0, be = D.length; k < be; k++) {
            const Ee = n.get(D[k]);
            Ee.__webglTexture === void 0 &&
              ((Ee.__webglTexture = i.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
          );
      if (a && E.samples > 0 && oe(E) === !1) {
        const D = fe ? S : [S];
        (z.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (z.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer);
        for (let k = 0; k < D.length; k++) {
          const be = D[k];
          (z.__webglColorRenderbuffer[k] = i.createRenderbuffer()),
            i.bindRenderbuffer(36161, z.__webglColorRenderbuffer[k]);
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
              36064 + k,
              36161,
              z.__webglColorRenderbuffer[k]
            );
        }
        i.bindRenderbuffer(36161, null),
          E.depthBuffer &&
            ((z.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Te(z.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (ie) {
      t.bindTexture(34067, J.__webglTexture), F(34067, S, Me);
      for (let D = 0; D < 6; D++)
        _e(z.__webglFramebuffer[D], E, S, 36064, 34069 + D);
      T(S, Me) && L(34067), t.unbindTexture();
    } else if (fe) {
      const D = E.texture;
      for (let k = 0, be = D.length; k < be; k++) {
        const Ee = D[k],
          Se = n.get(Ee);
        t.bindTexture(3553, Se.__webglTexture),
          F(3553, Ee, Me),
          _e(z.__webglFramebuffer, E, Ee, 36064 + k, 3553),
          T(Ee, Me) && L(3553);
      }
      t.unbindTexture();
    } else {
      let D = 3553;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
        (a
          ? (D = E.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.'
            )),
        t.bindTexture(D, J.__webglTexture),
        F(D, S, Me),
        _e(z.__webglFramebuffer, E, S, 36064, D),
        T(S, Me) && L(D),
        t.unbindTexture();
    }
    E.depthBuffer && P(E);
  }
  function ee(E) {
    const S = y(E) || a,
      z = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let J = 0, ie = z.length; J < ie; J++) {
      const fe = z[J];
      if (T(fe, S)) {
        const Me = E.isWebGLCubeRenderTarget ? 34067 : 3553,
          D = n.get(fe).__webglTexture;
        t.bindTexture(Me, D), L(Me), t.unbindTexture();
      }
    }
  }
  function he(E) {
    if (a && E.samples > 0 && oe(E) === !1) {
      const S = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture],
        z = E.width,
        J = E.height;
      let ie = 16384;
      const fe = [],
        Me = E.stencilBuffer ? 33306 : 36096,
        D = n.get(E),
        k = E.isWebGLMultipleRenderTargets === !0;
      if (k)
        for (let be = 0; be < S.length; be++)
          t.bindFramebuffer(36160, D.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(36160, 36064 + be, 36161, null),
            t.bindFramebuffer(36160, D.__webglFramebuffer),
            i.framebufferTexture2D(36009, 36064 + be, 3553, null, 0);
      t.bindFramebuffer(36008, D.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, D.__webglFramebuffer);
      for (let be = 0; be < S.length; be++) {
        fe.push(36064 + be), E.depthBuffer && fe.push(Me);
        const Ee =
          D.__ignoreDepthValues !== void 0 ? D.__ignoreDepthValues : !1;
        if (
          (Ee === !1 &&
            (E.depthBuffer && (ie |= 256), E.stencilBuffer && (ie |= 1024)),
          k &&
            i.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              D.__webglColorRenderbuffer[be]
            ),
          Ee === !0 &&
            (i.invalidateFramebuffer(36008, [Me]),
            i.invalidateFramebuffer(36009, [Me])),
          k)
        ) {
          const Se = n.get(S[be]).__webglTexture;
          i.framebufferTexture2D(36009, 36064, 3553, Se, 0);
        }
        i.blitFramebuffer(0, 0, z, J, 0, 0, z, J, ie, 9728),
          p && i.invalidateFramebuffer(36008, fe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), k))
        for (let be = 0; be < S.length; be++) {
          t.bindFramebuffer(36160, D.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              36160,
              36064 + be,
              36161,
              D.__webglColorRenderbuffer[be]
            );
          const Ee = n.get(S[be]).__webglTexture;
          t.bindFramebuffer(36160, D.__webglFramebuffer),
            i.framebufferTexture2D(36009, 36064 + be, 3553, Ee, 0);
        }
      t.bindFramebuffer(36009, D.__webglMultisampledFramebuffer);
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
    const z = E.encoding,
      J = E.format,
      ie = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        E.format === Vc ||
        (z !== Ar &&
          (z === at
            ? a === !1
              ? e.has('EXT_sRGB') === !0 && J === Fn
                ? ((E.format = Vc),
                  (E.minFilter = Ht),
                  (E.generateMipmaps = !1))
                : (S = Mm.sRGBToLinear(S))
              : (J !== Fn || ie !== Er) &&
                console.warn(
                  'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.'
                )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture encoding:',
                z
              ))),
      S
    );
  }
  (this.allocateTextureUnit = V),
    (this.resetTextureUnits = $),
    (this.setTexture2D = H),
    (this.setTexture2DArray = ue),
    (this.setTexture3D = te),
    (this.setTextureCube = de),
    (this.rebindTextures = j),
    (this.setupRenderTarget = K),
    (this.updateRenderTargetMipmap = ee),
    (this.updateMultisampleRenderTarget = he),
    (this.setupDepthRenderbuffer = P),
    (this.setupFrameBufferTexture = _e),
    (this.useMultisampledRTT = oe);
}
function yw(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = null) {
    let a;
    if (s === Er) return 5121;
    if (s === hy) return 32819;
    if (s === dy) return 32820;
    if (s === cy) return 5120;
    if (s === uy) return 5122;
    if (s === _m) return 5123;
    if (s === fy) return 5124;
    if (s === mr) return 5125;
    if (s === gr) return 5126;
    if (s === wo)
      return n
        ? 5131
        : ((a = e.get('OES_texture_half_float')),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === py) return 6406;
    if (s === Fn) return 6408;
    if (s === gy) return 6409;
    if (s === _y) return 6410;
    if (s === Mr) return 6402;
    if (s === Rs) return 34041;
    if (s === xy) return 6403;
    if (s === my)
      return (
        console.warn(
          'THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228'
        ),
        6408
      );
    if (s === Vc)
      return (a = e.get('EXT_sRGB')), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === vy) return 36244;
    if (s === yy) return 33319;
    if (s === My) return 33320;
    if (s === by) return 36249;
    if (s === El || s === Al || s === Cl || s === Pl)
      if (o === at)
        if (((a = e.get('WEBGL_compressed_texture_s3tc_srgb')), a !== null)) {
          if (s === El) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Al) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Cl) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Pl) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get('WEBGL_compressed_texture_s3tc')), a !== null)) {
        if (s === El) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Al) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Cl) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Pl) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === mh || s === gh || s === _h || s === xh)
      if (((a = e.get('WEBGL_compressed_texture_pvrtc')), a !== null)) {
        if (s === mh) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === gh) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === _h) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === xh) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === Sy)
      return (
        (a = e.get('WEBGL_compressed_texture_etc1')),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === vh || s === yh)
      if (((a = e.get('WEBGL_compressed_texture_etc')), a !== null)) {
        if (s === vh)
          return o === at ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === yh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Mh ||
      s === bh ||
      s === Sh ||
      s === wh ||
      s === Th ||
      s === Eh ||
      s === Ah ||
      s === Ch ||
      s === Ph ||
      s === Lh ||
      s === Rh ||
      s === Dh ||
      s === Ih ||
      s === Oh
    )
      if (((a = e.get('WEBGL_compressed_texture_astc')), a !== null)) {
        if (s === Mh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === bh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Sh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === wh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Th)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Eh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ah)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Ch)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ph)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Lh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Rh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Dh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Ih)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Oh)
          return o === at
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === Fh)
      if (((a = e.get('EXT_texture_compression_bptc')), a !== null)) {
        if (s === Fh)
          return o === at
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === vs
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
class Mw extends qt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Oi extends Et {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const bw = { type: 'move' };
class ic {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Oi()),
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
        ((this._targetRay = new Oi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new U()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new U())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Oi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new U()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new U())),
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
        for (const d of e.hand.values()) {
          const m = t.getJointPose(d, n);
          if (c.joints[d.jointName] === void 0) {
            const x = new Oi();
            (x.matrixAutoUpdate = !1),
              (x.visible = !1),
              (c.joints[d.jointName] = x),
              c.add(x);
          }
          const _ = c.joints[d.jointName];
          m !== null &&
            (_.matrix.fromArray(m.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = m.radius)),
            (_.visible = m !== null);
        }
        const u = c.joints['index-finger-tip'],
          f = c.joints['thumb-tip'],
          h = u.position.distanceTo(f.position),
          p = 0.02,
          g = 0.005;
        c.inputState.pinching && h > p + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: 'pinchend',
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            h <= p - g &&
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
          this.dispatchEvent(bw)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
}
class Sw extends cn {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : Mr), u !== Mr && u !== Rs))
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
      );
    n === void 0 && u === Mr && (n = mr),
      n === void 0 && u === Rs && (n = vs),
      super(null, r, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : Gt),
      (this.minFilter = l !== void 0 ? l : Gt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class ww extends Ir {
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
      p = null;
    const g = t.getContextAttributes();
    let d = null,
      m = null;
    const _ = [],
      x = [],
      v = new qt();
    v.layers.enable(1), (v.viewport = new Tt());
    const y = new qt();
    y.layers.enable(2), (y.viewport = new Tt());
    const b = [v, y],
      T = new Mw();
    T.layers.enable(1), T.layers.enable(2);
    let L = null,
      M = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (N) {
        let H = _[N];
        return (
          H === void 0 && ((H = new ic()), (_[N] = H)), H.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (N) {
        let H = _[N];
        return H === void 0 && ((H = new ic()), (_[N] = H)), H.getGripSpace();
      }),
      (this.getHand = function (N) {
        let H = _[N];
        return H === void 0 && ((H = new ic()), (_[N] = H)), H.getHandSpace();
      });
    function w(N) {
      const H = x.indexOf(N.inputSource);
      if (H === -1) return;
      const ue = _[H];
      ue !== void 0 && ue.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function R() {
      r.removeEventListener('select', w),
        r.removeEventListener('selectstart', w),
        r.removeEventListener('selectend', w),
        r.removeEventListener('squeeze', w),
        r.removeEventListener('squeezestart', w),
        r.removeEventListener('squeezeend', w),
        r.removeEventListener('end', R),
        r.removeEventListener('inputsourceschange', q);
      for (let N = 0; N < _.length; N++) {
        const H = x[N];
        H !== null && ((x[N] = null), _[N].disconnect(H));
      }
      (L = null),
        (M = null),
        e.setRenderTarget(d),
        (h = null),
        (f = null),
        (u = null),
        (r = null),
        (m = null),
        V.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (N) {
      (s = N),
        n.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
          );
    }),
      (this.setReferenceSpaceType = function (N) {
        (a = N),
          n.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.'
            );
      }),
      (this.getReferenceSpace = function () {
        return l || o;
      }),
      (this.setReferenceSpace = function (N) {
        l = N;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : h;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (N) {
        if (((r = N), r !== null)) {
          if (
            ((d = e.getRenderTarget()),
            r.addEventListener('select', w),
            r.addEventListener('selectstart', w),
            r.addEventListener('selectend', w),
            r.addEventListener('squeeze', w),
            r.addEventListener('squeezestart', w),
            r.addEventListener('squeezeend', w),
            r.addEventListener('end', R),
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
              (m = new Cr(h.framebufferWidth, h.framebufferHeight, {
                format: Fn,
                type: Er,
                encoding: e.outputEncoding,
                stencilBuffer: g.stencil,
              }));
          } else {
            let H = null,
              ue = null,
              te = null;
            g.depth &&
              ((te = g.stencil ? 35056 : 33190),
              (H = g.stencil ? Rs : Mr),
              (ue = g.stencil ? vs : mr));
            const de = { colorFormat: 32856, depthFormat: te, scaleFactor: s };
            (u = new XRWebGLBinding(r, t)),
              (f = u.createProjectionLayer(de)),
              r.updateRenderState({ layers: [f] }),
              (m = new Cr(f.textureWidth, f.textureHeight, {
                format: Fn,
                type: Er,
                depthTexture: new Sw(
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
    function q(N) {
      for (let H = 0; H < N.removed.length; H++) {
        const ue = N.removed[H],
          te = x.indexOf(ue);
        te >= 0 &&
          ((x[te] = null),
          _[te].dispatchEvent({ type: 'disconnected', data: ue }));
      }
      for (let H = 0; H < N.added.length; H++) {
        const ue = N.added[H];
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
    const Q = new U(),
      B = new U();
    function I(N, H, ue) {
      Q.setFromMatrixPosition(H.matrixWorld),
        B.setFromMatrixPosition(ue.matrixWorld);
      const te = Q.distanceTo(B),
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
        j = P * -ve;
      H.matrixWorld.decompose(N.position, N.quaternion, N.scale),
        N.translateX(j),
        N.translateZ(P),
        N.matrixWorld.compose(N.position, N.quaternion, N.scale),
        N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const K = G + P,
        ee = F + P,
        he = Te - j,
        pe = A + (te - j),
        oe = ((le * F) / ee) * K,
        me = ((ce * F) / ee) * K;
      N.projectionMatrix.makePerspective(he, pe, oe, me, K, ee);
    }
    function X(N, H) {
      H === null
        ? N.matrixWorld.copy(N.matrix)
        : N.matrixWorld.multiplyMatrices(H.matrixWorld, N.matrix),
        N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    (this.updateCamera = function (N) {
      if (r === null) return;
      (T.near = y.near = v.near = N.near),
        (T.far = y.far = v.far = N.far),
        (L !== T.near || M !== T.far) &&
          (r.updateRenderState({ depthNear: T.near, depthFar: T.far }),
          (L = T.near),
          (M = T.far));
      const H = N.parent,
        ue = T.cameras;
      X(T, H);
      for (let de = 0; de < ue.length; de++) X(ue[de], H);
      T.matrixWorld.decompose(T.position, T.quaternion, T.scale),
        N.matrix.copy(T.matrix),
        N.matrix.decompose(N.position, N.quaternion, N.scale);
      const te = N.children;
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
      (this.setFoveation = function (N) {
        f !== null && (f.fixedFoveation = N),
          h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = N);
      });
    let Z = null;
    function $(N, H) {
      if (((c = H.getViewerPose(l || o)), (p = H), c !== null)) {
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
            ((F = new qt()),
            F.layers.enable(de),
            (F.viewport = new Tt()),
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
      Z && Z(N, H), (p = null);
    }
    const V = new Lm();
    V.setAnimationLoop($),
      (this.setAnimationLoop = function (N) {
        Z = N;
      }),
      (this.dispose = function () {});
  }
}
function Tw(i, e) {
  function t(d, m) {
    d.fogColor.value.copy(m.color),
      m.isFog
        ? ((d.fogNear.value = m.near), (d.fogFar.value = m.far))
        : m.isFogExp2 && (d.fogDensity.value = m.density);
  }
  function n(d, m, _, x, v) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? r(d, m)
      : m.isMeshToonMaterial
      ? (r(d, m), u(d, m))
      : m.isMeshPhongMaterial
      ? (r(d, m), c(d, m))
      : m.isMeshStandardMaterial
      ? (r(d, m), f(d, m), m.isMeshPhysicalMaterial && h(d, m, v))
      : m.isMeshMatcapMaterial
      ? (r(d, m), p(d, m))
      : m.isMeshDepthMaterial
      ? r(d, m)
      : m.isMeshDistanceMaterial
      ? (r(d, m), g(d, m))
      : m.isMeshNormalMaterial
      ? r(d, m)
      : m.isLineBasicMaterial
      ? (s(d, m), m.isLineDashedMaterial && o(d, m))
      : m.isPointsMaterial
      ? a(d, m, _, x)
      : m.isSpriteMaterial
      ? l(d, m)
      : m.isShadowMaterial
      ? (d.color.value.copy(m.color), (d.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function r(d, m) {
    (d.opacity.value = m.opacity),
      m.color && d.diffuse.value.copy(m.color),
      m.emissive &&
        d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && (d.map.value = m.map),
      m.alphaMap && (d.alphaMap.value = m.alphaMap),
      m.bumpMap &&
        ((d.bumpMap.value = m.bumpMap),
        (d.bumpScale.value = m.bumpScale),
        m.side === Tn && (d.bumpScale.value *= -1)),
      m.displacementMap &&
        ((d.displacementMap.value = m.displacementMap),
        (d.displacementScale.value = m.displacementScale),
        (d.displacementBias.value = m.displacementBias)),
      m.emissiveMap && (d.emissiveMap.value = m.emissiveMap),
      m.normalMap &&
        ((d.normalMap.value = m.normalMap),
        d.normalScale.value.copy(m.normalScale),
        m.side === Tn && d.normalScale.value.negate()),
      m.specularMap && (d.specularMap.value = m.specularMap),
      m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    const _ = e.get(m).envMap;
    if (
      (_ &&
        ((d.envMap.value = _),
        (d.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (d.reflectivity.value = m.reflectivity),
        (d.ior.value = m.ior),
        (d.refractionRatio.value = m.refractionRatio)),
      m.lightMap)
    ) {
      d.lightMap.value = m.lightMap;
      const y = i.physicallyCorrectLights !== !0 ? Math.PI : 1;
      d.lightMapIntensity.value = m.lightMapIntensity * y;
    }
    m.aoMap &&
      ((d.aoMap.value = m.aoMap), (d.aoMapIntensity.value = m.aoMapIntensity));
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
        d.uvTransform.value.copy(x.matrix));
    let v;
    m.aoMap ? (v = m.aoMap) : m.lightMap && (v = m.lightMap),
      v !== void 0 &&
        (v.isWebGLRenderTarget && (v = v.texture),
        v.matrixAutoUpdate === !0 && v.updateMatrix(),
        d.uv2Transform.value.copy(v.matrix));
  }
  function s(d, m) {
    d.diffuse.value.copy(m.color), (d.opacity.value = m.opacity);
  }
  function o(d, m) {
    (d.dashSize.value = m.dashSize),
      (d.totalSize.value = m.dashSize + m.gapSize),
      (d.scale.value = m.scale);
  }
  function a(d, m, _, x) {
    d.diffuse.value.copy(m.color),
      (d.opacity.value = m.opacity),
      (d.size.value = m.size * _),
      (d.scale.value = x * 0.5),
      m.map && (d.map.value = m.map),
      m.alphaMap && (d.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    let v;
    m.map ? (v = m.map) : m.alphaMap && (v = m.alphaMap),
      v !== void 0 &&
        (v.matrixAutoUpdate === !0 && v.updateMatrix(),
        d.uvTransform.value.copy(v.matrix));
  }
  function l(d, m) {
    d.diffuse.value.copy(m.color),
      (d.opacity.value = m.opacity),
      (d.rotation.value = m.rotation),
      m.map && (d.map.value = m.map),
      m.alphaMap && (d.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    let _;
    m.map ? (_ = m.map) : m.alphaMap && (_ = m.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        d.uvTransform.value.copy(_.matrix));
  }
  function c(d, m) {
    d.specular.value.copy(m.specular),
      (d.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function u(d, m) {
    m.gradientMap && (d.gradientMap.value = m.gradientMap);
  }
  function f(d, m) {
    (d.roughness.value = m.roughness),
      (d.metalness.value = m.metalness),
      m.roughnessMap && (d.roughnessMap.value = m.roughnessMap),
      m.metalnessMap && (d.metalnessMap.value = m.metalnessMap),
      e.get(m).envMap && (d.envMapIntensity.value = m.envMapIntensity);
  }
  function h(d, m, _) {
    (d.ior.value = m.ior),
      m.sheen > 0 &&
        (d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (d.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap && (d.sheenColorMap.value = m.sheenColorMap),
        m.sheenRoughnessMap &&
          (d.sheenRoughnessMap.value = m.sheenRoughnessMap)),
      m.clearcoat > 0 &&
        ((d.clearcoat.value = m.clearcoat),
        (d.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap && (d.clearcoatMap.value = m.clearcoatMap),
        m.clearcoatRoughnessMap &&
          (d.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
        m.clearcoatNormalMap &&
          (d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          (d.clearcoatNormalMap.value = m.clearcoatNormalMap),
          m.side === Tn && d.clearcoatNormalScale.value.negate())),
      m.iridescence > 0 &&
        ((d.iridescence.value = m.iridescence),
        (d.iridescenceIOR.value = m.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap && (d.iridescenceMap.value = m.iridescenceMap),
        m.iridescenceThicknessMap &&
          (d.iridescenceThicknessMap.value = m.iridescenceThicknessMap)),
      m.transmission > 0 &&
        ((d.transmission.value = m.transmission),
        (d.transmissionSamplerMap.value = _.texture),
        d.transmissionSamplerSize.value.set(_.width, _.height),
        m.transmissionMap && (d.transmissionMap.value = m.transmissionMap),
        (d.thickness.value = m.thickness),
        m.thicknessMap && (d.thicknessMap.value = m.thicknessMap),
        (d.attenuationDistance.value = m.attenuationDistance),
        d.attenuationColor.value.copy(m.attenuationColor)),
      (d.specularIntensity.value = m.specularIntensity),
      d.specularColor.value.copy(m.specularColor),
      m.specularIntensityMap &&
        (d.specularIntensityMap.value = m.specularIntensityMap),
      m.specularColorMap && (d.specularColorMap.value = m.specularColorMap);
  }
  function p(d, m) {
    m.matcap && (d.matcap.value = m.matcap);
  }
  function g(d, m) {
    d.referencePosition.value.copy(m.referencePosition),
      (d.nearDistance.value = m.nearDistance),
      (d.farDistance.value = m.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Ew(i, e, t, n) {
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
    for (let T = 0, L = y.length; T < L; T++) {
      const M = y[T];
      if (p(M, T, b) === !0) {
        const w = M.value,
          R = M.__offset;
        typeof w == 'number'
          ? ((M.__data[0] = w), i.bufferSubData(35345, R, M.__data))
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
            i.bufferSubData(35345, R, M.__data));
      }
    }
    i.bindBuffer(35345, null);
  }
  function p(x, v, y) {
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
    for (let L = 0, M = v.length; L < M; L++) {
      const w = v[L],
        R = d(w);
      if (
        ((w.__data = new Float32Array(
          R.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (w.__offset = y),
        L > 0)
      ) {
        T = y % b;
        const q = b - T;
        T !== 0 && q - R.boundary < 0 && ((y += b - T), (w.__offset = y));
      }
      y += R.storage;
    }
    return (
      (T = y % b), T > 0 && (y += b - T), (x.__size = y), (x.__cache = {}), this
    );
  }
  function d(x) {
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
function Aw() {
  const i = To('canvas');
  return (i.style.display = 'block'), i;
}
function sl(i = {}) {
  this.isWebGLRenderer = !0;
  const e = i.canvas !== void 0 ? i.canvas : Aw(),
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
  const p = [],
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
    (this.outputEncoding = Ar),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = mi),
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
  const d = this;
  let m = !1,
    _ = 0,
    x = 0,
    v = null,
    y = -1,
    b = null;
  const T = new Tt(),
    L = new Tt();
  let M = null,
    w = e.width,
    R = e.height,
    q = 1,
    Q = null,
    B = null;
  const I = new Tt(0, 0, w, R),
    X = new Tt(0, 0, w, R);
  let Z = !1;
  const $ = new Pm();
  let V = !1,
    N = !1,
    H = null;
  const ue = new pt(),
    te = new Ie(),
    de = new U(),
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
  function le(C, Y) {
    for (let ne = 0; ne < C.length; ne++) {
      const W = C[ne],
        se = e.getContext(W, Y);
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
      ('setAttribute' in e && e.setAttribute('data-engine', `three.js r${Du}`),
      e.addEventListener('webglcontextlost', Ce, !1),
      e.addEventListener('webglcontextrestored', we, !1),
      e.addEventListener('webglcontextcreationerror', De, !1),
      F === null)
    ) {
      const Y = ['webgl2', 'webgl', 'experimental-webgl'];
      if ((d.isWebGL1Renderer === !0 && Y.shift(), (F = le(Y, C)), F === null))
        throw le(Y)
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
    j,
    K,
    ee,
    he,
    pe,
    oe,
    me,
    ae,
    E,
    S,
    z,
    J,
    ie,
    fe,
    Me,
    D,
    k,
    be;
  function Ee() {
    (ce = new US(F)),
      (ve = new RS(F, ce, i)),
      ce.init(ve),
      (D = new yw(F, ce, ve)),
      (_e = new xw(F, ce, ve)),
      (Te = new VS()),
      (A = new rw()),
      (P = new vw(F, ce, _e, A, ve, D, Te)),
      (j = new IS(d)),
      (K = new zS(d)),
      (ee = new $y(F, ve)),
      (k = new PS(F, ce, ee, ve)),
      (he = new BS(F, ee, Te, k)),
      (pe = new qS(F, he, ee, Te)),
      (ie = new WS(F, ve, P)),
      (S = new DS(A)),
      (oe = new iw(d, j, K, ce, ve, k, S)),
      (me = new Tw(d, A)),
      (ae = new ow()),
      (E = new hw(ce, ve)),
      (J = new CS(d, j, K, _e, pe, u, o)),
      (z = new _w(d, pe, ve)),
      (be = new Ew(F, Te, ve, _e)),
      (fe = new LS(F, ce, Te, ve)),
      (Me = new kS(F, ce, Te, ve)),
      (Te.programs = oe.programs),
      (d.capabilities = ve),
      (d.extensions = ce),
      (d.properties = A),
      (d.renderLists = ae),
      (d.shadowMap = z),
      (d.state = _e),
      (d.info = Te);
  }
  Ee();
  const Se = new ww(d, F);
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
      C !== void 0 && ((q = C), this.setSize(w, R, !1));
    }),
    (this.getSize = function (C) {
      return C.set(w, R);
    }),
    (this.setSize = function (C, Y, ne) {
      if (Se.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (w = C),
        (R = Y),
        (e.width = Math.floor(C * q)),
        (e.height = Math.floor(Y * q)),
        ne !== !1 && ((e.style.width = C + 'px'), (e.style.height = Y + 'px')),
        this.setViewport(0, 0, C, Y);
    }),
    (this.getDrawingBufferSize = function (C) {
      return C.set(w * q, R * q).floor();
    }),
    (this.setDrawingBufferSize = function (C, Y, ne) {
      (w = C),
        (R = Y),
        (q = ne),
        (e.width = Math.floor(C * ne)),
        (e.height = Math.floor(Y * ne)),
        this.setViewport(0, 0, C, Y);
    }),
    (this.getCurrentViewport = function (C) {
      return C.copy(T);
    }),
    (this.getViewport = function (C) {
      return C.copy(I);
    }),
    (this.setViewport = function (C, Y, ne, W) {
      C.isVector4 ? I.set(C.x, C.y, C.z, C.w) : I.set(C, Y, ne, W),
        _e.viewport(T.copy(I).multiplyScalar(q).floor());
    }),
    (this.getScissor = function (C) {
      return C.copy(X);
    }),
    (this.setScissor = function (C, Y, ne, W) {
      C.isVector4 ? X.set(C.x, C.y, C.z, C.w) : X.set(C, Y, ne, W),
        _e.scissor(L.copy(X).multiplyScalar(q).floor());
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
      B = C;
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
    (this.clear = function (C = !0, Y = !0, ne = !0) {
      let W = 0;
      C && (W |= 16384), Y && (W |= 256), ne && (W |= 1024), F.clear(W);
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
        e.removeEventListener('webglcontextcreationerror', De, !1),
        ae.dispose(),
        E.dispose(),
        A.dispose(),
        j.dispose(),
        K.dispose(),
        pe.dispose(),
        k.dispose(),
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
      Y = z.enabled,
      ne = z.autoUpdate,
      W = z.needsUpdate,
      se = z.type;
    Ee(),
      (Te.autoReset = C),
      (z.enabled = Y),
      (z.autoUpdate = ne),
      (z.needsUpdate = W),
      (z.type = se);
  }
  function De(C) {
    console.error(
      'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
      C.statusMessage
    );
  }
  function ke(C) {
    const Y = C.target;
    Y.removeEventListener('dispose', ke), Ke(Y);
  }
  function Ke(C) {
    O(C), A.remove(C);
  }
  function O(C) {
    const Y = A.get(C).programs;
    Y !== void 0 &&
      (Y.forEach(function (ne) {
        oe.releaseProgram(ne);
      }),
      C.isShaderMaterial && oe.releaseShaderCache(C));
  }
  (this.renderBufferDirect = function (C, Y, ne, W, se, Re) {
    Y === null && (Y = xe);
    const Oe = se.isMesh && se.matrixWorld.determinant() < 0,
      Be = i_(C, Y, ne, W, se);
    _e.setMaterial(W, Oe);
    let Ne = ne.index;
    const Ye = ne.attributes.position;
    if (Ne === null) {
      if (Ye === void 0 || Ye.count === 0) return;
    } else if (Ne.count === 0) return;
    let Ve = 1;
    W.wireframe === !0 && ((Ne = he.getWireframeAttribute(ne)), (Ve = 2)),
      k.setup(se, W, Be, ne, Ne);
    let We,
      ot = fe;
    Ne !== null && ((We = ee.get(Ne)), (ot = Me), ot.setIndex(We));
    const Ji = Ne !== null ? Ne.count : Ye.count,
      Fr = ne.drawRange.start * Ve,
      Nr = ne.drawRange.count * Ve,
      Vn = Re !== null ? Re.start * Ve : 0,
      $e = Re !== null ? Re.count * Ve : 1 / 0,
      zr = Math.max(Fr, Vn),
      ft = Math.min(Ji, Fr + Nr, Vn + $e) - 1,
      dn = Math.max(0, ft - zr + 1);
    if (dn !== 0) {
      if (se.isMesh)
        W.wireframe === !0
          ? (_e.setLineWidth(W.wireframeLinewidth * G()), ot.setMode(1))
          : ot.setMode(4);
      else if (se.isLine) {
        let Mi = W.linewidth;
        Mi === void 0 && (Mi = 1),
          _e.setLineWidth(Mi * G()),
          se.isLineSegments
            ? ot.setMode(1)
            : se.isLineLoop
            ? ot.setMode(2)
            : ot.setMode(3);
      } else se.isPoints ? ot.setMode(0) : se.isSprite && ot.setMode(4);
      if (se.isInstancedMesh) ot.renderInstances(zr, dn, se.count);
      else if (ne.isInstancedBufferGeometry) {
        const Mi = Math.min(ne.instanceCount, ne._maxInstanceCount);
        ot.renderInstances(zr, dn, Mi);
      } else ot.render(zr, dn);
    }
  }),
    (this.compile = function (C, Y) {
      function ne(W, se, Re) {
        W.transparent === !0 && W.side === hi
          ? ((W.side = Tn),
            (W.needsUpdate = !0),
            hn(W, se, Re),
            (W.side = Cs),
            (W.needsUpdate = !0),
            hn(W, se, Re),
            (W.side = hi))
          : hn(W, se, Re);
      }
      (h = E.get(C)),
        h.init(),
        g.push(h),
        C.traverseVisible(function (W) {
          W.isLight &&
            W.layers.test(Y.layers) &&
            (h.pushLight(W), W.castShadow && h.pushShadow(W));
        }),
        h.setupLights(d.physicallyCorrectLights),
        C.traverse(function (W) {
          const se = W.material;
          if (se)
            if (Array.isArray(se))
              for (let Re = 0; Re < se.length; Re++) {
                const Oe = se[Re];
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
  const je = new Lm();
  je.setAnimationLoop(ge),
    typeof self < 'u' && je.setContext(self),
    (this.setAnimationLoop = function (C) {
      (re = C), Se.setAnimationLoop(C), C === null ? je.stop() : je.start();
    }),
    Se.addEventListener('sessionstart', Ae),
    Se.addEventListener('sessionend', Pe),
    (this.render = function (C, Y) {
      if (Y !== void 0 && Y.isCamera !== !0) {
        console.error(
          'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
        );
        return;
      }
      if (m === !0) return;
      C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(),
        Y.parent === null &&
          Y.matrixWorldAutoUpdate === !0 &&
          Y.updateMatrixWorld(),
        Se.enabled === !0 &&
          Se.isPresenting === !0 &&
          (Se.cameraAutoUpdate === !0 && Se.updateCamera(Y),
          (Y = Se.getCamera())),
        C.isScene === !0 && C.onBeforeRender(d, C, Y, v),
        (h = E.get(C, g.length)),
        h.init(),
        g.push(h),
        ue.multiplyMatrices(Y.projectionMatrix, Y.matrixWorldInverse),
        $.setFromProjectionMatrix(ue),
        (N = this.localClippingEnabled),
        (V = S.init(this.clippingPlanes, N, Y)),
        (f = ae.get(C, p.length)),
        f.init(),
        p.push(f),
        vt(C, Y, 0, d.sortObjects),
        f.finish(),
        d.sortObjects === !0 && f.sort(Q, B),
        V === !0 && S.beginShadows();
      const ne = h.state.shadowsArray;
      if (
        (z.render(ne, C, Y),
        V === !0 && S.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        J.render(f, C),
        h.setupLights(d.physicallyCorrectLights),
        Y.isArrayCamera)
      ) {
        const W = Y.cameras;
        for (let se = 0, Re = W.length; se < Re; se++) {
          const Oe = W[se];
          Ct(f, C, Oe, Oe.viewport);
        }
      } else Ct(f, C, Y);
      v !== null &&
        (P.updateMultisampleRenderTarget(v), P.updateRenderTargetMipmap(v)),
        C.isScene === !0 && C.onAfterRender(d, C, Y),
        k.resetDefaultState(),
        (y = -1),
        (b = null),
        g.pop(),
        g.length > 0 ? (h = g[g.length - 1]) : (h = null),
        p.pop(),
        p.length > 0 ? (f = p[p.length - 1]) : (f = null);
    });
  function vt(C, Y, ne, W) {
    if (C.visible === !1) return;
    if (C.layers.test(Y.layers)) {
      if (C.isGroup) ne = C.renderOrder;
      else if (C.isLOD) C.autoUpdate === !0 && C.update(Y);
      else if (C.isLight) h.pushLight(C), C.castShadow && h.pushShadow(C);
      else if (C.isSprite) {
        if (!C.frustumCulled || $.intersectsSprite(C)) {
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
        !C.frustumCulled || $.intersectsObject(C))
      ) {
        W && de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);
        const Oe = pe.update(C),
          Be = C.material;
        if (Array.isArray(Be)) {
          const Ne = Oe.groups;
          for (let Ye = 0, Ve = Ne.length; Ye < Ve; Ye++) {
            const We = Ne[Ye],
              ot = Be[We.materialIndex];
            ot && ot.visible && f.push(C, Oe, ot, ne, de.z, We);
          }
        } else Be.visible && f.push(C, Oe, Be, ne, de.z, null);
      }
    }
    const Re = C.children;
    for (let Oe = 0, Be = Re.length; Oe < Be; Oe++) vt(Re[Oe], Y, ne, W);
  }
  function Ct(C, Y, ne, W) {
    const se = C.opaque,
      Re = C.transmissive,
      Oe = C.transparent;
    h.setupLightsView(ne),
      Re.length > 0 && Ki(se, Y, ne),
      W && _e.viewport(T.copy(W)),
      se.length > 0 && nt(se, Y, ne),
      Re.length > 0 && nt(Re, Y, ne),
      Oe.length > 0 && nt(Oe, Y, ne),
      _e.buffers.depth.setTest(!0),
      _e.buffers.depth.setMask(!0),
      _e.buffers.color.setMask(!0),
      _e.setPolygonOffset(!1);
  }
  function Ki(C, Y, ne) {
    const W = ve.isWebGL2;
    H === null &&
      (H = new Cr(1, 1, {
        generateMipmaps: !0,
        type: ce.has('EXT_color_buffer_half_float') ? wo : Er,
        minFilter: il,
        samples: W && s === !0 ? 4 : 0,
      })),
      d.getDrawingBufferSize(te),
      W ? H.setSize(te.x, te.y) : H.setSize(Gc(te.x), Gc(te.y));
    const se = d.getRenderTarget();
    d.setRenderTarget(H), d.clear();
    const Re = d.toneMapping;
    (d.toneMapping = mi),
      nt(C, Y, ne),
      (d.toneMapping = Re),
      P.updateMultisampleRenderTarget(H),
      P.updateRenderTargetMipmap(H),
      d.setRenderTarget(se);
  }
  function nt(C, Y, ne) {
    const W = Y.isScene === !0 ? Y.overrideMaterial : null;
    for (let se = 0, Re = C.length; se < Re; se++) {
      const Oe = C[se],
        Be = Oe.object,
        Ne = Oe.geometry,
        Ye = W === null ? Oe.material : W,
        Ve = Oe.group;
      Be.layers.test(ne.layers) && ti(Be, Y, ne, Ne, Ye, Ve);
    }
  }
  function ti(C, Y, ne, W, se, Re) {
    C.onBeforeRender(d, Y, ne, W, se, Re),
      C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse, C.matrixWorld),
      C.normalMatrix.getNormalMatrix(C.modelViewMatrix),
      se.onBeforeRender(d, Y, ne, W, C, Re),
      se.transparent === !0 && se.side === hi
        ? ((se.side = Tn),
          (se.needsUpdate = !0),
          d.renderBufferDirect(ne, Y, W, se, C, Re),
          (se.side = Cs),
          (se.needsUpdate = !0),
          d.renderBufferDirect(ne, Y, W, se, C, Re),
          (se.side = hi))
        : d.renderBufferDirect(ne, Y, W, se, C, Re),
      C.onAfterRender(d, Y, ne, W, se, Re);
  }
  function hn(C, Y, ne) {
    Y.isScene !== !0 && (Y = xe);
    const W = A.get(C),
      se = h.state.lights,
      Re = h.state.shadowsArray,
      Oe = se.state.version,
      Be = oe.getParameters(C, se.state, Re, Y, ne),
      Ne = oe.getProgramCacheKey(Be);
    let Ye = W.programs;
    (W.environment = C.isMeshStandardMaterial ? Y.environment : null),
      (W.fog = Y.fog),
      (W.envMap = (C.isMeshStandardMaterial ? K : j).get(
        C.envMap || W.environment
      )),
      Ye === void 0 &&
        (C.addEventListener('dispose', ke),
        (Ye = new Map()),
        (W.programs = Ye));
    let Ve = Ye.get(Ne);
    if (Ve !== void 0) {
      if (W.currentProgram === Ve && W.lightsStateVersion === Oe)
        return mf(C, Be), Ve;
    } else
      (Be.uniforms = oe.getUniforms(C)),
        C.onBuild(ne, Be, d),
        C.onBeforeCompile(Be, d),
        (Ve = oe.acquireProgram(Be, Ne)),
        Ye.set(Ne, Ve),
        (W.uniforms = Be.uniforms);
    const We = W.uniforms;
    ((!C.isShaderMaterial && !C.isRawShaderMaterial) || C.clipping === !0) &&
      (We.clippingPlanes = S.uniform),
      mf(C, Be),
      (W.needsLights = s_(C)),
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
    const ot = Ve.getUniforms(),
      Ji = Sa.seqWithValue(ot.seq, We);
    return (W.currentProgram = Ve), (W.uniformsList = Ji), Ve;
  }
  function mf(C, Y) {
    const ne = A.get(C);
    (ne.outputEncoding = Y.outputEncoding),
      (ne.instancing = Y.instancing),
      (ne.skinning = Y.skinning),
      (ne.morphTargets = Y.morphTargets),
      (ne.morphNormals = Y.morphNormals),
      (ne.morphColors = Y.morphColors),
      (ne.morphTargetsCount = Y.morphTargetsCount),
      (ne.numClippingPlanes = Y.numClippingPlanes),
      (ne.numIntersection = Y.numClipIntersection),
      (ne.vertexAlphas = Y.vertexAlphas),
      (ne.vertexTangents = Y.vertexTangents),
      (ne.toneMapping = Y.toneMapping);
  }
  function i_(C, Y, ne, W, se) {
    Y.isScene !== !0 && (Y = xe), P.resetTextureUnits();
    const Re = Y.fog,
      Oe = W.isMeshStandardMaterial ? Y.environment : null,
      Be =
        v === null
          ? d.outputEncoding
          : v.isXRRenderTarget === !0
          ? v.texture.encoding
          : Ar,
      Ne = (W.isMeshStandardMaterial ? K : j).get(W.envMap || Oe),
      Ye =
        W.vertexColors === !0 &&
        !!ne.attributes.color &&
        ne.attributes.color.itemSize === 4,
      Ve = !!W.normalMap && !!ne.attributes.tangent,
      We = !!ne.morphAttributes.position,
      ot = !!ne.morphAttributes.normal,
      Ji = !!ne.morphAttributes.color,
      Fr = W.toneMapped ? d.toneMapping : mi,
      Nr =
        ne.morphAttributes.position ||
        ne.morphAttributes.normal ||
        ne.morphAttributes.color,
      Vn = Nr !== void 0 ? Nr.length : 0,
      $e = A.get(W),
      zr = h.state.lights;
    if (V === !0 && (N === !0 || C !== b)) {
      const Qt = C === b && W.id === y;
      S.setState(W, C, Qt);
    }
    let ft = !1;
    W.version === $e.__version
      ? (($e.needsLights && $e.lightsStateVersion !== zr.state.version) ||
          $e.outputEncoding !== Be ||
          (se.isInstancedMesh && $e.instancing === !1) ||
          (!se.isInstancedMesh && $e.instancing === !0) ||
          (se.isSkinnedMesh && $e.skinning === !1) ||
          (!se.isSkinnedMesh && $e.skinning === !0) ||
          $e.envMap !== Ne ||
          (W.fog === !0 && $e.fog !== Re) ||
          ($e.numClippingPlanes !== void 0 &&
            ($e.numClippingPlanes !== S.numPlanes ||
              $e.numIntersection !== S.numIntersection)) ||
          $e.vertexAlphas !== Ye ||
          $e.vertexTangents !== Ve ||
          $e.morphTargets !== We ||
          $e.morphNormals !== ot ||
          $e.morphColors !== Ji ||
          $e.toneMapping !== Fr ||
          (ve.isWebGL2 === !0 && $e.morphTargetsCount !== Vn)) &&
        (ft = !0)
      : ((ft = !0), ($e.__version = W.version));
    let dn = $e.currentProgram;
    ft === !0 && (dn = hn(W, Y, se));
    let Mi = !1,
      qs = !1,
      dl = !1;
    const Ft = dn.getUniforms(),
      Qi = $e.uniforms;
    if (
      (_e.useProgram(dn.program) && ((Mi = !0), (qs = !0), (dl = !0)),
      W.id !== y && ((y = W.id), (qs = !0)),
      Mi || b !== C)
    ) {
      if (
        (Ft.setValue(F, 'projectionMatrix', C.projectionMatrix),
        ve.logarithmicDepthBuffer &&
          Ft.setValue(F, 'logDepthBufFC', 2 / (Math.log(C.far + 1) / Math.LN2)),
        b !== C && ((b = C), (qs = !0), (dl = !0)),
        W.isShaderMaterial ||
          W.isMeshPhongMaterial ||
          W.isMeshToonMaterial ||
          W.isMeshStandardMaterial ||
          W.envMap)
      ) {
        const Qt = Ft.map.cameraPosition;
        Qt !== void 0 &&
          Qt.setValue(F, de.setFromMatrixPosition(C.matrixWorld));
      }
      (W.isMeshPhongMaterial ||
        W.isMeshToonMaterial ||
        W.isMeshLambertMaterial ||
        W.isMeshBasicMaterial ||
        W.isMeshStandardMaterial ||
        W.isShaderMaterial) &&
        Ft.setValue(F, 'isOrthographic', C.isOrthographicCamera === !0),
        (W.isMeshPhongMaterial ||
          W.isMeshToonMaterial ||
          W.isMeshLambertMaterial ||
          W.isMeshBasicMaterial ||
          W.isMeshStandardMaterial ||
          W.isShaderMaterial ||
          W.isShadowMaterial ||
          se.isSkinnedMesh) &&
          Ft.setValue(F, 'viewMatrix', C.matrixWorldInverse);
    }
    if (se.isSkinnedMesh) {
      Ft.setOptional(F, se, 'bindMatrix'),
        Ft.setOptional(F, se, 'bindMatrixInverse');
      const Qt = se.skeleton;
      Qt &&
        (ve.floatVertexTextures
          ? (Qt.boneTexture === null && Qt.computeBoneTexture(),
            Ft.setValue(F, 'boneTexture', Qt.boneTexture, P),
            Ft.setValue(F, 'boneTextureSize', Qt.boneTextureSize))
          : console.warn(
              'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'
            ));
    }
    const pl = ne.morphAttributes;
    if (
      ((pl.position !== void 0 ||
        pl.normal !== void 0 ||
        (pl.color !== void 0 && ve.isWebGL2 === !0)) &&
        ie.update(se, ne, W, dn),
      (qs || $e.receiveShadow !== se.receiveShadow) &&
        (($e.receiveShadow = se.receiveShadow),
        Ft.setValue(F, 'receiveShadow', se.receiveShadow)),
      W.isMeshGouraudMaterial &&
        W.envMap !== null &&
        ((Qi.envMap.value = Ne),
        (Qi.flipEnvMap.value =
          Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1)),
      qs &&
        (Ft.setValue(F, 'toneMappingExposure', d.toneMappingExposure),
        $e.needsLights && r_(Qi, dl),
        Re && W.fog === !0 && me.refreshFogUniforms(Qi, Re),
        me.refreshMaterialUniforms(Qi, W, q, R, H),
        Sa.upload(F, $e.uniformsList, Qi, P)),
      W.isShaderMaterial &&
        W.uniformsNeedUpdate === !0 &&
        (Sa.upload(F, $e.uniformsList, Qi, P), (W.uniformsNeedUpdate = !1)),
      W.isSpriteMaterial && Ft.setValue(F, 'center', se.center),
      Ft.setValue(F, 'modelViewMatrix', se.modelViewMatrix),
      Ft.setValue(F, 'normalMatrix', se.normalMatrix),
      Ft.setValue(F, 'modelMatrix', se.matrixWorld),
      W.isShaderMaterial || W.isRawShaderMaterial)
    ) {
      const Qt = W.uniformsGroups;
      for (let ml = 0, o_ = Qt.length; ml < o_; ml++)
        if (ve.isWebGL2) {
          const gf = Qt[ml];
          be.update(gf, dn), be.bind(gf, dn);
        } else
          console.warn(
            'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.'
          );
    }
    return dn;
  }
  function r_(C, Y) {
    (C.ambientLightColor.needsUpdate = Y),
      (C.lightProbe.needsUpdate = Y),
      (C.directionalLights.needsUpdate = Y),
      (C.directionalLightShadows.needsUpdate = Y),
      (C.pointLights.needsUpdate = Y),
      (C.pointLightShadows.needsUpdate = Y),
      (C.spotLights.needsUpdate = Y),
      (C.spotLightShadows.needsUpdate = Y),
      (C.rectAreaLights.needsUpdate = Y),
      (C.hemisphereLights.needsUpdate = Y);
  }
  function s_(C) {
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
    (this.setRenderTargetTextures = function (C, Y, ne) {
      (A.get(C.texture).__webglTexture = Y),
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
    (this.setRenderTargetFramebuffer = function (C, Y) {
      const ne = A.get(C);
      (ne.__webglFramebuffer = Y), (ne.__useDefaultFramebuffer = Y === void 0);
    }),
    (this.setRenderTarget = function (C, Y = 0, ne = 0) {
      (v = C), (_ = Y), (x = ne);
      let W = !0,
        se = null,
        Re = !1,
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
        const Ye = C.texture;
        (Ye.isData3DTexture ||
          Ye.isDataArrayTexture ||
          Ye.isCompressedArrayTexture) &&
          (Oe = !0);
        const Ve = A.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget
          ? ((se = Ve[Y]), (Re = !0))
          : ve.isWebGL2 && C.samples > 0 && P.useMultisampledRTT(C) === !1
          ? (se = A.get(C).__webglMultisampledFramebuffer)
          : (se = Ve),
          T.copy(C.viewport),
          L.copy(C.scissor),
          (M = C.scissorTest);
      } else
        T.copy(I).multiplyScalar(q).floor(),
          L.copy(X).multiplyScalar(q).floor(),
          (M = Z);
      if (
        (_e.bindFramebuffer(36160, se) &&
          ve.drawBuffers &&
          W &&
          _e.drawBuffers(C, se),
        _e.viewport(T),
        _e.scissor(L),
        _e.setScissorTest(M),
        Re)
      ) {
        const Ne = A.get(C.texture);
        F.framebufferTexture2D(36160, 36064, 34069 + Y, Ne.__webglTexture, ne);
      } else if (Oe) {
        const Ne = A.get(C.texture),
          Ye = Y || 0;
        F.framebufferTextureLayer(36160, 36064, Ne.__webglTexture, ne || 0, Ye);
      }
      y = -1;
    }),
    (this.readRenderTargetPixels = function (C, Y, ne, W, se, Re, Oe) {
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
            Ye = Ne.format,
            Ve = Ne.type;
          if (Ye !== Fn && D.convert(Ye) !== F.getParameter(35739)) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
            );
            return;
          }
          const We =
            Ve === wo &&
            (ce.has('EXT_color_buffer_half_float') ||
              (ve.isWebGL2 && ce.has('EXT_color_buffer_float')));
          if (
            Ve !== Er &&
            D.convert(Ve) !== F.getParameter(35738) &&
            !(
              Ve === gr &&
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
          Y >= 0 &&
            Y <= C.width - W &&
            ne >= 0 &&
            ne <= C.height - se &&
            F.readPixels(Y, ne, W, se, D.convert(Ye), D.convert(Ve), Re);
        } finally {
          const Ne = v !== null ? A.get(v).__webglFramebuffer : null;
          _e.bindFramebuffer(36160, Ne);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (C, Y, ne = 0) {
      const W = Math.pow(2, -ne),
        se = Math.floor(Y.image.width * W),
        Re = Math.floor(Y.image.height * W);
      P.setTexture2D(Y, 0),
        F.copyTexSubImage2D(3553, ne, 0, 0, C.x, C.y, se, Re),
        _e.unbindTexture();
    }),
    (this.copyTextureToTexture = function (C, Y, ne, W = 0) {
      const se = Y.image.width,
        Re = Y.image.height,
        Oe = D.convert(ne.format),
        Be = D.convert(ne.type);
      P.setTexture2D(ne, 0),
        F.pixelStorei(37440, ne.flipY),
        F.pixelStorei(37441, ne.premultiplyAlpha),
        F.pixelStorei(3317, ne.unpackAlignment),
        Y.isDataTexture
          ? F.texSubImage2D(3553, W, C.x, C.y, se, Re, Oe, Be, Y.image.data)
          : Y.isCompressedTexture
          ? F.compressedTexSubImage2D(
              3553,
              W,
              C.x,
              C.y,
              Y.mipmaps[0].width,
              Y.mipmaps[0].height,
              Oe,
              Y.mipmaps[0].data
            )
          : F.texSubImage2D(3553, W, C.x, C.y, Oe, Be, Y.image),
        W === 0 && ne.generateMipmaps && F.generateMipmap(3553),
        _e.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (C, Y, ne, W, se = 0) {
      if (d.isWebGL1Renderer) {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.'
        );
        return;
      }
      const Re = C.max.x - C.min.x + 1,
        Oe = C.max.y - C.min.y + 1,
        Be = C.max.z - C.min.z + 1,
        Ne = D.convert(W.format),
        Ye = D.convert(W.type);
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
        ot = F.getParameter(32878),
        Ji = F.getParameter(3316),
        Fr = F.getParameter(3315),
        Nr = F.getParameter(32877),
        Vn = ne.isCompressedTexture ? ne.mipmaps[0] : ne.image;
      F.pixelStorei(3314, Vn.width),
        F.pixelStorei(32878, Vn.height),
        F.pixelStorei(3316, C.min.x),
        F.pixelStorei(3315, C.min.y),
        F.pixelStorei(32877, C.min.z),
        ne.isDataTexture || ne.isData3DTexture
          ? F.texSubImage3D(Ve, se, Y.x, Y.y, Y.z, Re, Oe, Be, Ne, Ye, Vn.data)
          : ne.isCompressedArrayTexture
          ? (console.warn(
              'THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'
            ),
            F.compressedTexSubImage3D(
              Ve,
              se,
              Y.x,
              Y.y,
              Y.z,
              Re,
              Oe,
              Be,
              Ne,
              Vn.data
            ))
          : F.texSubImage3D(Ve, se, Y.x, Y.y, Y.z, Re, Oe, Be, Ne, Ye, Vn),
        F.pixelStorei(3314, We),
        F.pixelStorei(32878, ot),
        F.pixelStorei(3316, Ji),
        F.pixelStorei(3315, Fr),
        F.pixelStorei(32877, Nr),
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
      (_ = 0), (x = 0), (v = null), _e.reset(), k.reset();
    }),
    typeof __THREE_DEVTOOLS__ < 'u' &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent('observe', { detail: this })
      );
}
class Cw extends sl {}
Cw.prototype.isWebGL1Renderer = !0;
class Nu {
  constructor(e, t = 1, n = 1e3) {
    (this.isFog = !0),
      (this.name = ''),
      (this.color = new qe(e)),
      (this.near = t),
      (this.far = n);
  }
  clone() {
    return new Nu(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: 'Fog',
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
class zu extends Et {
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
class Pw {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = kc),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = Gi());
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
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gi()),
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
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gi()),
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
const Nt = new U();
class Ia {
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
      Nt.fromBufferAttribute(this, t),
        Nt.applyMatrix4(e),
        this.setXYZ(t, Nt.x, Nt.y, Nt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Nt.fromBufferAttribute(this, t),
        Nt.applyNormalMatrix(e),
        this.setXYZ(t, Nt.x, Nt.y, Nt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Nt.fromBufferAttribute(this, t),
        Nt.transformDirection(e),
        this.setXYZ(t, Nt.x, Nt.y, Nt.z);
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
    return this.normalized && (t = Ii(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ii(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ii(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ii(t, this.array)), t;
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
      return new En(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Ia(
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
class ol extends $i {
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
let ts;
const Ks = new U(),
  ns = new U(),
  is = new U(),
  rs = new Ie(),
  Js = new Ie(),
  Fm = new pt(),
  ca = new U(),
  Qs = new U(),
  ua = new U(),
  _d = new Ie(),
  rc = new Ie(),
  xd = new Ie();
class Uu extends Et {
  constructor(e) {
    if (
      (super(), (this.isSprite = !0), (this.type = 'Sprite'), ts === void 0)
    ) {
      ts = new Jt();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new Pw(t, 5);
      ts.setIndex([0, 1, 2, 0, 2, 3]),
        ts.setAttribute('position', new Ia(n, 3, 0, !1)),
        ts.setAttribute('uv', new Ia(n, 2, 3, !1));
    }
    (this.geometry = ts),
      (this.material = e !== void 0 ? e : new ol()),
      (this.center = new Ie(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      ns.setFromMatrixScale(this.matrixWorld),
      Fm.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      is.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        ns.multiplyScalar(-is.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && ((s = Math.cos(n)), (r = Math.sin(n)));
    const o = this.center;
    fa(ca.set(-0.5, -0.5, 0), is, o, ns, r, s),
      fa(Qs.set(0.5, -0.5, 0), is, o, ns, r, s),
      fa(ua.set(0.5, 0.5, 0), is, o, ns, r, s),
      _d.set(0, 0),
      rc.set(1, 0),
      xd.set(1, 1);
    let a = e.ray.intersectTriangle(ca, Qs, ua, !1, Ks);
    if (
      a === null &&
      (fa(Qs.set(-0.5, 0.5, 0), is, o, ns, r, s),
      rc.set(0, 1),
      (a = e.ray.intersectTriangle(ca, ua, Qs, !1, Ks)),
      a === null)
    )
      return;
    const l = e.ray.origin.distanceTo(Ks);
    l < e.near ||
      l > e.far ||
      t.push({
        distance: l,
        point: Ks.clone(),
        uv: Yn.getUV(Ks, ca, Qs, ua, _d, rc, xd, new Ie()),
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
function fa(i, e, t, n, r, s) {
  rs.subVectors(i, t).addScalar(0.5).multiply(n),
    r !== void 0
      ? ((Js.x = s * rs.x - r * rs.y), (Js.y = r * rs.x + s * rs.y))
      : Js.copy(rs),
    i.copy(e),
    (i.x += Js.x),
    (i.y += Js.y),
    i.applyMatrix4(Fm);
}
class Nm extends $i {
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
const vd = new U(),
  yd = new U(),
  Md = new pt(),
  sc = new Iu(),
  ha = new Fo();
class Lw extends Et {
  constructor(e = new Jt(), t = new Nm()) {
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
        vd.fromBufferAttribute(t, r - 1),
          yd.fromBufferAttribute(t, r),
          (n[r] = n[r - 1]),
          (n[r] += vd.distanceTo(yd));
      e.setAttribute('lineDistance', new At(n, 1));
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
      ha.copy(n.boundingSphere),
      ha.applyMatrix4(r),
      (ha.radius += s),
      e.ray.intersectsSphere(ha) === !1)
    )
      return;
    Md.copy(r).invert(), sc.copy(e.ray).applyMatrix4(Md);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = new U(),
      u = new U(),
      f = new U(),
      h = new U(),
      p = this.isLineSegments ? 2 : 1,
      g = n.index,
      m = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, o.start),
        x = Math.min(g.count, o.start + o.count);
      for (let v = _, y = x - 1; v < y; v += p) {
        const b = g.getX(v),
          T = g.getX(v + 1);
        if (
          (c.fromBufferAttribute(m, b),
          u.fromBufferAttribute(m, T),
          sc.distanceSqToSegment(c, u, h, f) > l)
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
      for (let v = _, y = x - 1; v < y; v += p) {
        if (
          (c.fromBufferAttribute(m, v),
          u.fromBufferAttribute(m, v + 1),
          sc.distanceSqToSegment(c, u, h, f) > l)
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
const bd = new U(),
  Sd = new U();
class Rw extends Lw {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = 'LineSegments');
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        bd.fromBufferAttribute(t, r),
          Sd.fromBufferAttribute(t, r + 1),
          (n[r] = r === 0 ? 0 : n[r - 1]),
          (n[r + 1] = n[r] + bd.distanceTo(Sd));
      e.setAttribute('lineDistance', new At(n, 1));
    } else
      console.warn(
        'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
      );
    return this;
  }
}
class zm extends $i {
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
const wd = new pt(),
  Wc = new Iu(),
  da = new Fo(),
  pa = new U();
class Dw extends Et {
  constructor(e = new Jt(), t = new zm()) {
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
      da.copy(n.boundingSphere),
      da.applyMatrix4(r),
      (da.radius += s),
      e.ray.intersectsSphere(da) === !1)
    )
      return;
    wd.copy(r).invert(), Wc.copy(e.ray).applyMatrix4(wd);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = n.index,
      f = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, o.start),
        p = Math.min(c.count, o.start + o.count);
      for (let g = h, d = p; g < d; g++) {
        const m = c.getX(g);
        pa.fromBufferAttribute(f, m), Td(pa, m, l, r, e, t, this);
      }
    } else {
      const h = Math.max(0, o.start),
        p = Math.min(f.count, o.start + o.count);
      for (let g = h, d = p; g < d; g++)
        pa.fromBufferAttribute(f, g), Td(pa, g, l, r, e, t, this);
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
function Td(i, e, t, n, r, s, o) {
  const a = Wc.distanceSqToPoint(i);
  if (a < t) {
    const l = new U();
    Wc.closestPointToPoint(i, l), l.applyMatrix4(n);
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
class Um extends cn {
  constructor(e, t, n, r, s, o, a, l, c) {
    super(e, t, n, r, s, o, a, l, c),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class Bu extends Jt {
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
      p = new U(),
      g = new Ie();
    for (let d = 0; d <= r; d++) {
      for (let m = 0; m <= n; m++) {
        const _ = s + (m / n) * o;
        (p.x = f * Math.cos(_)),
          (p.y = f * Math.sin(_)),
          l.push(p.x, p.y, p.z),
          c.push(0, 0, 1),
          (g.x = (p.x / t + 1) / 2),
          (g.y = (p.y / t + 1) / 2),
          u.push(g.x, g.y);
      }
      f += h;
    }
    for (let d = 0; d < r; d++) {
      const m = d * (n + 1);
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
      this.setAttribute('position', new At(l, 3)),
      this.setAttribute('normal', new At(c, 3)),
      this.setAttribute('uv', new At(u, 2));
  }
  static fromJSON(e) {
    return new Bu(
      e.innerRadius,
      e.outerRadius,
      e.thetaSegments,
      e.phiSegments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class fo extends Jt {
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
      f = new U(),
      h = new U(),
      p = [],
      g = [],
      d = [],
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
          d.push(h.x, h.y, h.z),
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
        (_ !== 0 || o > 0) && p.push(v, y, T),
          (_ !== n - 1 || l < Math.PI) && p.push(y, b, T);
      }
    this.setIndex(p),
      this.setAttribute('position', new At(g, 3)),
      this.setAttribute('normal', new At(d, 3)),
      this.setAttribute('uv', new At(m, 2));
  }
  static fromJSON(e) {
    return new fo(
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
class Iw extends $i {
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
      (this.normalMapType = xm),
      (this.normalScale = new Ie(1, 1)),
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
const Ed = {
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
class Ow {
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
          const p = c[f],
            g = c[f + 1];
          if ((p.global && (p.lastIndex = 0), p.test(u))) return g;
        }
        return null;
      });
  }
}
const Fw = new Ow();
class Bm {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Fw),
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
class Nw extends Bm {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = Ed.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = To('img');
    function l() {
      u(), Ed.add(e, this), t && t(this), s.manager.itemEnd(e);
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
class ss extends Bm {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new cn(),
      o = new Nw(this.manager);
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
class zw extends Et {
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
class Uw extends zw {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = 'AmbientLight');
  }
}
class Ad {
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
          (this.phi = Math.acos(Wt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Bw extends Rw {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      r = new Jt();
    r.setAttribute('position', new At(t, 3)),
      r.setAttribute('color', new At(n, 3));
    const s = new Nm({ vertexColors: !0, toneMapped: !1 });
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
    new CustomEvent('register', { detail: { revision: Du } })
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = Du));
function ui(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function km(i, e) {
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
 */ var an = {
    autoSleep: 120,
    force3D: 'auto',
    nullTargetWarn: 1,
    units: { lineHeight: '' },
  },
  Is = { duration: 0.5, overwrite: !1, delay: 0 },
  ku,
  Yt,
  dt,
  Mn = 1e8,
  Je = 1 / Mn,
  qc = Math.PI * 2,
  kw = qc / 4,
  Vw = 0,
  Vm = Math.sqrt,
  Gw = Math.cos,
  Hw = Math.sin,
  bt = function (e) {
    return typeof e == 'string';
  },
  lt = function (e) {
    return typeof e == 'function';
  },
  xi = function (e) {
    return typeof e == 'number';
  },
  Vu = function (e) {
    return typeof e > 'u';
  },
  ei = function (e) {
    return typeof e == 'object';
  },
  $t = function (e) {
    return e !== !1;
  },
  Gm = function () {
    return typeof window < 'u';
  },
  ma = function (e) {
    return lt(e) || bt(e);
  },
  Hm =
    (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  It = Array.isArray,
  Xc = /(?:-?\.?\d|\.)+/gi,
  Wm = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  fs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  oc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  qm = /[+-]=-?[.\d]+/,
  Xm = /[^,'"\[\]\s]+/gi,
  Ww = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  rt,
  _n,
  jc,
  Gu,
  un = {},
  Oa = {},
  jm,
  Ym = function (e) {
    return (Oa = Rr(e, un)) && fn;
  },
  Hu = function (e, t) {
    return console.warn(
      'Invalid property',
      e,
      'set to',
      t,
      'Missing plugin? gsap.registerPlugin()'
    );
  },
  Fa = function (e, t) {
    return !t && console.warn(e);
  },
  $m = function (e, t) {
    return (e && (un[e] = t) && Oa && (Oa[e] = t)) || un;
  },
  Eo = function () {
    return 0;
  },
  qw = { suppressEvents: !0, isStart: !0, kill: !1 },
  wa = { suppressEvents: !0, kill: !1 },
  Xw = { suppressEvents: !0 },
  Wu = {},
  Hi = [],
  Yc = {},
  Zm,
  rn = {},
  ac = {},
  Cd = 30,
  Ta = [],
  qu = '',
  Xu = function (e) {
    var t = e[0],
      n,
      r;
    if ((ei(t) || lt(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Ta.length; r-- && !Ta[r].targetTest(t); );
      n = Ta[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new xg(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  Sr = function (e) {
    return e._gsap || Xu(bn(e))[0]._gsap;
  },
  Km = function (e, t, n) {
    return (n = e[t]) && lt(n)
      ? e[t]()
      : (Vu(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Zt = function (e, t) {
    return (e = e.split(',')).forEach(t) || e;
  },
  ct = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  St = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  ys = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === '+' ? e + r : n === '-' ? e - r : n === '*' ? e * r : e / r
    );
  },
  jw = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
    return r < n;
  },
  Na = function () {
    var e = Hi.length,
      t = Hi.slice(0),
      n,
      r;
    for (Yc = {}, Hi.length = 0, n = 0; n < e; n++)
      (r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Jm = function (e, t, n, r) {
    Hi.length && Na(),
      e.render(t, n, r || (Yt && t < 0 && (e._initted || e._startAt))),
      Hi.length && Na();
  },
  Qm = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + '').match(Xm).length < 2
      ? t
      : bt(e)
      ? e.trim()
      : e;
  },
  eg = function (e) {
    return e;
  },
  An = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Yw = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === 'duration' && e) || r === 'ease' || (t[r] = n[r]);
    };
  },
  Rr = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Pd = function i(e, t) {
    for (var n in t)
      n !== '__proto__' &&
        n !== 'constructor' &&
        n !== 'prototype' &&
        (e[n] = ei(t[n]) ? i(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  za = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  ho = function (e) {
    var t = e.parent || rt,
      n = e.keyframes ? Yw(It(e.keyframes)) : An;
    if ($t(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  $w = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; );
    return n < 0;
  },
  tg = function (e, t, n, r, s) {
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
  al = function (e, t, n, r) {
    n === void 0 && (n = '_first'), r === void 0 && (r = '_last');
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[n] === t && (e[n] = o),
      o ? (o._prev = s) : e[r] === t && (e[r] = s),
      (t._next = t._prev = t.parent = null);
  },
  ji = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  wr = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  Zw = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  $c = function (e, t, n, r) {
    return (
      e._startAt &&
      (Yt
        ? e._startAt.revert(wa)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  Kw = function i(e) {
    return !e || (e._ts && i(e.parent));
  },
  Ld = function (e) {
    return e._repeat ? Os(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Os = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  Ua = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  ll = function (e) {
    return (e._end = St(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || Je) || 0)
    ));
  },
  cl = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = St(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        ll(e),
        n._dirty || wr(n, e)),
      e
    );
  },
  ng = function (e, t) {
    var n;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((n = Ua(e.rawTime(), t)),
        (!t._dur || Uo(0, t.totalDuration(), n) - t._tTime > Je) &&
          t.render(n, !0)),
      wr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -Je;
    }
  },
  $n = function (e, t, n, r) {
    return (
      t.parent && ji(t),
      (t._start = St(
        (xi(n) ? n : n || e !== rt ? gn(e, n, t) : e._time) + t._delay
      )),
      (t._end = St(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      tg(e, t, '_first', '_last', e._sort ? '_start' : 0),
      Zc(t) || (e._recent = t),
      r || ng(e, t),
      e._ts < 0 && cl(e, e._tTime),
      e
    );
  },
  ig = function (e, t) {
    return (
      (un.ScrollTrigger || Hu('scrollTrigger', t)) &&
      un.ScrollTrigger.create(t, e)
    );
  },
  rg = function (e, t, n, r, s) {
    if ((Yu(e, t, s), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !Yt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Zm !== sn.frame
    )
      return Hi.push(e), (e._lazy = [s, r]), 1;
  },
  Jw = function i(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
  },
  Zc = function (e) {
    var t = e.data;
    return t === 'isFromStart' || t === 'isStart';
  },
  Qw = function (e, t, n, r) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Jw(e) && !(!e._initted && Zc(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Zc(e))))
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
        ((l = Uo(0, e._tDur, t)),
        (u = Os(l, a)),
        e._yoyo && u & 1 && (o = 1 - o),
        u !== Os(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Yt || r || e._zTime === Je || (!t && e._zTime))
    ) {
      if (!e._initted && rg(e, t, r, n, l)) return;
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
      t < 0 && $c(e, t, n, !0),
        e._onUpdate && !n && Sn(e, 'onUpdate'),
        l && e._repeat && !n && e.parent && Sn(e, 'onRepeat'),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && ji(e, 1),
          !n &&
            !Yt &&
            (Sn(e, o ? 'onComplete' : 'onReverseComplete', !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  eT = function (e, t, n) {
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
  Fs = function (e, t, n, r) {
    var s = e._repeat,
      o = St(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : St(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !r && cl(e, (e._tTime = e._tDur * a)),
      e.parent && ll(e),
      n || wr(e.parent, e),
      e
    );
  },
  Rd = function (e) {
    return e instanceof Xt ? wr(e) : Fs(e, e._dur);
  },
  tT = { _start: 0, endTime: Eo, totalDuration: Eo },
  gn = function i(e, t, n) {
    var r = e.labels,
      s = e._recent || tT,
      o = e.duration() >= Mn ? s.endTime(!1) : e._dur,
      a,
      l,
      c;
    return bt(t) && (isNaN(t) || t in r)
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
            c && n && (l = (l / 100) * (It(n) ? n[0] : n).totalDuration()),
            a > 1 ? i(e, t.substr(0, a - 1), n) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  po = function (e, t, n) {
    var r = xi(t[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((r && (o.duration = t[1]), (o.parent = n), e)) {
      for (a = o, l = n; l && !('immediateRender' in a); )
        (a = l.vars.defaults || {}), (l = $t(l.vars.inherit) && l.parent);
      (o.immediateRender = $t(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new gt(t[0], o, t[s + 1]);
  },
  Zi = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Uo = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Rt = function (e, t) {
    return !bt(e) || !(t = Ww.exec(e)) ? '' : t[1];
  },
  nT = function (e, t, n) {
    return Zi(n, function (r) {
      return Uo(e, t, r);
    });
  },
  Kc = [].slice,
  sg = function (e, t) {
    return (
      e &&
      ei(e) &&
      'length' in e &&
      ((!t && !e.length) || (e.length - 1 in e && ei(e[0]))) &&
      !e.nodeType &&
      e !== _n
    );
  },
  iT = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (r) {
        var s;
        return (bt(r) && !t) || sg(r, 1)
          ? (s = n).push.apply(s, bn(r))
          : n.push(r);
      }) || n
    );
  },
  bn = function (e, t, n) {
    return dt && !t && dt.selector
      ? dt.selector(e)
      : bt(e) && !n && (jc || !Ns())
      ? Kc.call((t || Gu).querySelectorAll(e), 0)
      : It(e)
      ? iT(e, n)
      : sg(e)
      ? Kc.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Jc = function (e) {
    return (
      (e = bn(e)[0] || Fa('Invalid scope') || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return bn(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? Fa('Invalid scope') || Gu.createElement('div')
            : e
        );
      }
    );
  },
  og = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  ag = function (e) {
    if (lt(e)) return e;
    var t = ei(e) ? e : { each: e },
      n = Tr(t.ease),
      r = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      c = t.axis,
      u = r,
      f = r;
    return (
      bt(r)
        ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((u = r[0]), (f = r[1])),
      function (h, p, g) {
        var d = (g || t).length,
          m = o[d],
          _,
          x,
          v,
          y,
          b,
          T,
          L,
          M,
          w;
        if (!m) {
          if (((w = t.grid === 'auto' ? 0 : (t.grid || [1, Mn])[1]), !w)) {
            for (
              L = -Mn;
              L < (L = g[w++].getBoundingClientRect().left) && w < d;

            );
            w--;
          }
          for (
            m = o[d] = [],
              _ = l ? Math.min(w, d) * u - 0.5 : r % w,
              x = w === Mn ? 0 : l ? (d * f) / w - 0.5 : (r / w) | 0,
              L = 0,
              M = Mn,
              T = 0;
            T < d;
            T++
          )
            (v = (T % w) - _),
              (y = x - ((T / w) | 0)),
              (m[T] = b = c ? Math.abs(c === 'y' ? y : v) : Vm(v * v + y * y)),
              b > L && (L = b),
              b < M && (M = b);
          r === 'random' && og(m),
            (m.max = L - M),
            (m.min = M),
            (m.v = d =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (w > d
                    ? d - 1
                    : c
                    ? c === 'y'
                      ? d / w
                      : w
                    : Math.max(w, d / w)) ||
                0) * (r === 'edges' ? -1 : 1)),
            (m.b = d < 0 ? s - d : s),
            (m.u = Rt(t.amount || t.each) || 0),
            (n = n && d < 0 ? mg(n) : n);
        }
        return (
          (d = (m[h] - m.min) / m.max || 0),
          St(m.b + (n ? n(d) : d) * m.v) + m.u
        );
      }
    );
  },
  Qc = function (e) {
    var t = Math.pow(10, ((e + '').split('.')[1] || '').length);
    return function (n) {
      var r = St(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (xi(n) ? 0 : Rt(n));
    };
  },
  lg = function (e, t) {
    var n = It(e),
      r,
      s;
    return (
      !n &&
        ei(e) &&
        ((r = n = e.radius || Mn),
        e.values
          ? ((e = bn(e.values)), (s = !xi(e[0])) && (r *= r))
          : (e = Qc(e.increment))),
      Zi(
        t,
        n
          ? lt(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    c = Mn,
                    u = 0,
                    f = e.length,
                    h,
                    p;
                  f--;

                )
                  s
                    ? ((h = e[f].x - a), (p = e[f].y - l), (h = h * h + p * p))
                    : (h = Math.abs(e[f] - a)),
                    h < c && ((c = h), (u = f));
                return (
                  (u = !r || c <= r ? e[u] : o),
                  s || u === o || xi(o) ? u : u + Rt(o)
                );
              }
          : Qc(e)
      )
    );
  },
  cg = function (e, t, n, r) {
    return Zi(It(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return It(e)
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
  rT = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (r) {
      return t.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  },
  sT = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Rt(n));
    };
  },
  oT = function (e, t, n) {
    return fg(e, t, 0, 1, n);
  },
  ug = function (e, t, n) {
    return Zi(n, function (r) {
      return e[~~t(r)];
    });
  },
  aT = function i(e, t, n) {
    var r = t - e;
    return It(e)
      ? ug(e, i(0, e.length), t)
      : Zi(n, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  },
  lT = function i(e, t, n) {
    var r = t - e,
      s = r * 2;
    return It(e)
      ? ug(e, i(0, e.length - 1), t)
      : Zi(n, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  },
  Ao = function (e) {
    for (var t = 0, n = '', r, s, o, a; ~(r = e.indexOf('random(', t)); )
      (o = e.indexOf(')', r)),
        (a = e.charAt(r + 7) === '['),
        (s = e.substr(r + 7, o - r - 7).match(a ? Xm : Xc)),
        (n +=
          e.substr(t, r - t) + cg(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return n + e.substr(t, e.length - t);
  },
  fg = function (e, t, n, r, s) {
    var o = t - e,
      a = r - n;
    return Zi(s, function (l) {
      return n + (((l - e) / o) * a || 0);
    });
  },
  cT = function i(e, t, n, r) {
    var s = isNaN(e + t)
      ? 0
      : function (p) {
          return (1 - p) * e + p * t;
        };
    if (!s) {
      var o = bt(e),
        a = {},
        l,
        c,
        u,
        f,
        h;
      if ((n === !0 && (r = 1) && (n = null), o))
        (e = { p: e }), (t = { p: t });
      else if (It(e) && !It(t)) {
        for (u = [], f = e.length, h = f - 2, c = 1; c < f; c++)
          u.push(i(e[c - 1], e[c]));
        f--,
          (s = function (g) {
            g *= f;
            var d = Math.min(h, ~~g);
            return u[d](g - d);
          }),
          (n = t);
      } else r || (e = Rr(It(e) ? [] : {}, e));
      if (!u) {
        for (l in t) ju.call(a, e, l, 'get', t[l]);
        s = function (g) {
          return Ku(g, a) || (o ? e.p : e);
        };
      }
    }
    return Zi(n, s);
  },
  Dd = function (e, t, n) {
    var r = e.labels,
      s = Mn,
      o,
      a,
      l;
    for (o in r)
      (a = r[o] - t),
        a < 0 == !!n && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Sn = function (e, t, n) {
    var r = e.vars,
      s = r[t],
      o = dt,
      a = e._ctx,
      l,
      c,
      u;
    if (!!s)
      return (
        (l = r[t + 'Params']),
        (c = r.callbackScope || e),
        n && Hi.length && Na(),
        a && (dt = a),
        (u = l ? s.apply(c, l) : s.call(c)),
        (dt = o),
        u
      );
  },
  ro = function (e) {
    return (
      ji(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Yt),
      e.progress() < 1 && Sn(e, 'onInterrupt'),
      e
    );
  },
  hs,
  uT = function (e) {
    e = (!e.name && e.default) || e;
    var t = e.name,
      n = lt(e),
      r =
        t && !n && e.init
          ? function () {
              this._props = [];
            }
          : e,
      s = { init: Eo, render: Ku, add: ju, kill: ET, modifier: TT, rawVars: 0 },
      o = { targetTest: 0, get: 0, getSetter: Zu, aliases: {}, register: 0 };
    if ((Ns(), e !== r)) {
      if (rn[t]) return;
      An(r, An(za(e, s), o)),
        Rr(r.prototype, Rr(s, za(e, o))),
        (rn[(r.prop = t)] = r),
        e.targetTest && (Ta.push(r), (Wu[t] = 1)),
        (t =
          (t === 'css' ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) +
          'Plugin');
    }
    $m(t, r), e.register && e.register(fn, r, Kt);
  },
  Qe = 255,
  so = {
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
  lc = function (e, t, n) {
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
  hg = function (e, t, n) {
    var r = e ? (xi(e) ? [e >> 16, (e >> 8) & Qe, e & Qe] : 0) : so.black,
      s,
      o,
      a,
      l,
      c,
      u,
      f,
      h,
      p,
      g;
    if (!r) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), so[e]))
        r = so[e];
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
        if (((r = g = e.match(Xc)), !t))
          (l = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (u = +r[2] / 100),
            (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = lc(l + 1 / 3, s, o)),
            (r[1] = lc(l, s, o)),
            (r[2] = lc(l - 1 / 3, s, o));
        else if (~e.indexOf('='))
          return (r = e.match(Wm)), n && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(Xc) || so.transparent;
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
          : ((p = f - h),
            (c = u > 0.5 ? p / (2 - f - h) : p / (f + h)),
            (l =
              f === s
                ? (o - a) / p + (o < a ? 6 : 0)
                : f === o
                ? (a - s) / p + 2
                : (s - o) / p + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(u * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  dg = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(Wi).forEach(function (s) {
        var o = s.match(fs) || [];
        t.push.apply(t, o), n.push((r += o.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  Id = function (e, t, n) {
    var r = '',
      s = (e + r).match(Wi),
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
          (h = hg(h, t, 1)) &&
          o +
            (t ? h[0] + ',' + h[1] + '%,' + h[2] + '%,' + h[3] : h.join(',')) +
            ')'
        );
      })),
      n && ((u = dg(e)), (l = n.c), l.join(r) !== u.c.join(r)))
    )
      for (c = e.replace(Wi, '1').split(fs), f = c.length - 1; a < f; a++)
        r +=
          c[a] +
          (~l.indexOf(a)
            ? s.shift() || o + '0,0,0,0)'
            : (u.length ? u : s.length ? s : n).shift());
    if (!c)
      for (c = e.split(Wi), f = c.length - 1; a < f; a++) r += c[a] + s[a];
    return r + c[f];
  },
  Wi = (function () {
    var i =
        '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e;
    for (e in so) i += '|' + e + '\\b';
    return new RegExp(i + ')', 'gi');
  })(),
  fT = /hsl[a]?\(/,
  pg = function (e) {
    var t = e.join(' '),
      n;
    if (((Wi.lastIndex = 0), Wi.test(t)))
      return (
        (n = fT.test(t)),
        (e[1] = Id(e[1], n)),
        (e[0] = Id(e[0], n, dg(e[1]))),
        !0
      );
  },
  Co,
  sn = (function () {
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
      p,
      g = function d(m) {
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
          x || (l = c(d)),
          y)
        )
          for (p = 0; p < a.length; p++) a[p](b, h, T, m);
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
          jm &&
            (!jc &&
              Gm() &&
              ((_n = jc = window),
              (Gu = _n.document || {}),
              (un.gsap = fn),
              (_n.gsapVersions || (_n.gsapVersions = [])).push(fn.version),
              Ym(Oa || _n.GreenSockGlobals || (!_n.gsap && _n) || {}),
              (u = _n.requestAnimationFrame)),
            l && f.sleep(),
            (c =
              u ||
              function (m) {
                return setTimeout(m, (o - f.time * 1e3 + 1) | 0);
              }),
            (Co = 1),
            g(2));
        },
        sleep: function () {
          (u ? _n.cancelAnimationFrame : clearTimeout)(l), (Co = 0), (c = Eo);
        },
        lagSmoothing: function (m, _) {
          (e = m || 1 / Je), (t = Math.min(_, e, 0));
        },
        fps: function (m) {
          (s = 1e3 / (m || 240)), (o = f.time * 1e3 + s);
        },
        add: function (m, _, x) {
          var v = _
            ? function (y, b, T, L) {
                m(y, b, T, L), f.remove(v);
              }
            : m;
          return f.remove(m), a[x ? 'unshift' : 'push'](v), Ns(), v;
        },
        remove: function (m, _) {
          ~(_ = a.indexOf(m)) && a.splice(_, 1) && p >= _ && p--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  Ns = function () {
    return !Co && sn.wake();
  },
  He = {},
  hT = /^[\d.\-M][\d.\-,\s]/,
  dT = /["']/g,
  pT = function (e) {
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
        (t[r] = isNaN(c) ? c.replace(dT, '').trim() : +c),
        (r = l.substr(a + 1).trim());
    return t;
  },
  mT = function (e) {
    var t = e.indexOf('(') + 1,
      n = e.indexOf(')'),
      r = e.indexOf('(', t);
    return e.substring(t, ~r && r < n ? e.indexOf(')', n + 1) : n);
  },
  gT = function (e) {
    var t = (e + '').split('('),
      n = He[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf('{') ? [pT(t[1])] : mT(e).split(',').map(Qm)
        )
      : He._CE && hT.test(e)
      ? He._CE('', e)
      : n;
  },
  mg = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  gg = function i(e, t) {
    for (var n = e._first, r; n; )
      n instanceof Xt
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
  Tr = function (e, t) {
    return (e && (lt(e) ? e : He[e] || gT(e))) || t;
  },
  Or = function (e, t, n, r) {
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
      Zt(e, function (a) {
        (He[a] = un[a] = s), (He[(o = a.toLowerCase())] = n);
        for (var l in s)
          He[
            o + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')
          ] = He[a + '.' + l] = s[l];
      }),
      s
    );
  },
  _g = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  cc = function i(e, t, n) {
    var r = t >= 1 ? t : 1,
      s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / qc) * (Math.asin(1 / r) || 0),
      a = function (u) {
        return u === 1 ? 1 : r * Math.pow(2, -10 * u) * Hw((u - o) * s) + 1;
      },
      l =
        e === 'out'
          ? a
          : e === 'in'
          ? function (c) {
              return 1 - a(1 - c);
            }
          : _g(a);
    return (
      (s = qc / s),
      (l.config = function (c, u) {
        return i(e, c, u);
      }),
      l
    );
  },
  uc = function i(e, t) {
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
          : _g(n);
    return (
      (r.config = function (s) {
        return i(e, s);
      }),
      r
    );
  };
Zt('Linear,Quad,Cubic,Quart,Quint,Strong', function (i, e) {
  var t = e < 5 ? e + 1 : e;
  Or(
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
Or('Elastic', cc('in'), cc('out'), cc());
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
  Or(
    'Bounce',
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
Or('Expo', function (i) {
  return i ? Math.pow(2, 10 * (i - 1)) : 0;
});
Or('Circ', function (i) {
  return -(Vm(1 - i * i) - 1);
});
Or('Sine', function (i) {
  return i === 1 ? 1 : -Gw(i * kw) + 1;
});
Or('Back', uc('in'), uc('out'), uc());
He.SteppedEase =
  He.steps =
  un.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          r = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - Je;
        return function (a) {
          return (((r * Uo(0, o, a)) | 0) + s) * n;
        };
      },
    };
Is.ease = He['quad.out'];
Zt(
  'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
  function (i) {
    return (qu += i + ',' + i + 'Params,');
  }
);
var xg = function (e, t) {
    (this.id = Vw++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Km),
      (this.set = t ? t.getSetter : Zu);
  },
  zs = (function () {
    function i(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Fs(this, +t.duration, 1, 1),
        (this.data = t.data),
        dt && ((this._ctx = dt), dt.data.push(this)),
        Co || sn.wake();
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
            Fs(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, r) {
        if ((Ns(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (cl(this, n), !s._dp || s.parent || ng(s, this); s && s.parent; )
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
            $n(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === Je) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), Jm(this, n, r)),
          this
        );
      }),
      (e.time = function (n, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + Ld(this)) %
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
                Ld(this),
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
          ? Os(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -Je ? 0 : this._rts;
        if (this._rts === n) return this;
        var r =
          this.parent && this._ts ? Ua(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -Je ? 0 : this._rts),
          this.totalTime(Uo(-this._delay, this._tDur, r), !0),
          ll(this),
          Zw(this)
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
                : (Ns(),
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
            r && (r._sort || !this.parent) && $n(r, this, n - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          ($t(n) ? this.totalDuration() : this.duration()) /
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
            ? Ua(r.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = Xw);
        var r = Yt;
        return (
          (Yt = n),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(n),
            this.totalTime(-0.01, n.suppressEvents)),
          this.data !== 'nested' && n.kill !== !1 && this.kill(),
          (Yt = r),
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
          ? ((this._repeat = n === 1 / 0 ? -2 : n), Rd(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = n), Rd(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, r) {
        return this.totalTime(gn(this, n), $t(r));
      }),
      (e.restart = function (n, r) {
        return this.play().totalTime(n ? -this._delay : 0, $t(r));
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
          var o = lt(n) ? n : eg,
            a = function () {
              var c = r.then;
              (r.then = null),
                lt(o) && (o = o(r)) && (o.then || o === r) && (r.then = c),
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
        ro(this);
      }),
      i
    );
  })();
An(zs.prototype, {
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
var Xt = (function (i) {
  km(e, i);
  function e(n, r) {
    var s;
    return (
      n === void 0 && (n = {}),
      (s = i.call(this, n) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!n.smoothChildTiming),
      (s.autoRemoveChildren = !!n.autoRemoveChildren),
      (s._sort = $t(n.sortChildren)),
      rt && $n(n.parent || rt, ui(s), r),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      n.scrollTrigger && ig(ui(s), n.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (r, s, o) {
      return po(0, arguments, this), this;
    }),
    (t.from = function (r, s, o) {
      return po(1, arguments, this), this;
    }),
    (t.fromTo = function (r, s, o, a) {
      return po(2, arguments, this), this;
    }),
    (t.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        ho(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new gt(r, s, gn(this, o), 1),
        this
      );
    }),
    (t.call = function (r, s, o) {
      return $n(this, gt.delayedCall(0, r, s), o);
    }),
    (t.staggerTo = function (r, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new gt(r, o, gn(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (r, s, o, a, l, c, u) {
      return (
        (o.runBackwards = 1),
        (ho(o).immediateRender = $t(o.immediateRender)),
        this.staggerTo(r, s, o, a, l, c, u)
      );
    }),
    (t.staggerFromTo = function (r, s, o, a, l, c, u, f) {
      return (
        (a.startAt = o),
        (ho(a).immediateRender = $t(a.immediateRender)),
        this.staggerTo(r, s, a, l, c, u, f)
      );
    }),
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = r <= 0 ? 0 : St(r),
        f = this._zTime < 0 != r < 0 && (this._initted || !c),
        h,
        p,
        g,
        d,
        m,
        _,
        x,
        v,
        y,
        b,
        T,
        L;
      if (
        (this !== rt && u > l && r >= 0 && (u = l), u !== this._tTime || o || f)
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
            ((h = St(u % m)),
            u === l
              ? ((d = this._repeat), (h = c))
              : ((d = ~~(u / m)),
                d && d === u / m && ((h = c), d--),
                h > c && (h = c)),
            (b = Os(this._tTime, m)),
            !a && this._tTime && b !== d && (b = d),
            T && d & 1 && ((h = c - h), (L = 1)),
            d !== b && !this._lock)
          ) {
            var M = T && b & 1,
              w = M === (T && d & 1);
            if (
              (d < b && (M = !M),
              (a = M ? 0 : c),
              (this._lock = 1),
              (this.render(a || (L ? 0 : St(d * m)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && Sn(this, 'onRepeat'),
              this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1),
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
                this.vars.repeatRefresh && !L && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            gg(this, L);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((x = eT(this, St(a), St(h))), x && (u -= h - (h = x._start))),
          (this._tTime = u),
          (this._time = h),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && h && !s && (Sn(this, 'onStart'), this._tTime !== u))
        )
          return this;
        if (h >= a && r >= 0)
          for (p = this._first; p; ) {
            if (
              ((g = p._next), (p._act || h >= p._start) && p._ts && x !== p)
            ) {
              if (p.parent !== this) return this.render(r, s, o);
              if (
                (p.render(
                  p._ts > 0
                    ? (h - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (h - p._start) * p._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !_))
              ) {
                (x = 0), g && (u += this._zTime = -Je);
                break;
              }
            }
            p = g;
          }
        else {
          p = this._last;
          for (var R = r < 0 ? r : h; p; ) {
            if (((g = p._prev), (p._act || R <= p._end) && p._ts && x !== p)) {
              if (p.parent !== this) return this.render(r, s, o);
              if (
                (p.render(
                  p._ts > 0
                    ? (R - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (R - p._start) * p._ts,
                  s,
                  o || (Yt && (p._initted || p._startAt))
                ),
                h !== this._time || (!this._ts && !_))
              ) {
                (x = 0), g && (u += this._zTime = R ? -Je : Je);
                break;
              }
            }
            p = g;
          }
        }
        if (
          x &&
          !s &&
          (this.pause(),
          (x.render(h >= a ? 0 : -Je)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = y), ll(this), this.render(r, s, o);
        this._onUpdate && !s && Sn(this, 'onUpdate', !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (y === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                ji(this, 1),
              !s &&
                !(r < 0 && !a) &&
                (u || a || !l) &&
                (Sn(
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
      if ((xi(s) || (s = gn(this, s, r)), !(r instanceof zs))) {
        if (It(r))
          return (
            r.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (bt(r)) return this.addLabel(r, s);
        if (lt(r)) r = gt.delayedCall(0, r);
        else return this;
      }
      return this !== r ? $n(this, r, s) : this;
    }),
    (t.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Mn);
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof gt
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
      return bt(r)
        ? this.removeLabel(r)
        : lt(r)
        ? this.killTweensOf(r)
        : (al(this, r),
          r === this._recent && (this._recent = this._last),
          wr(this));
    }),
    (t.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = St(
              sn.time -
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
      return (this.labels[r] = gn(this, s)), this;
    }),
    (t.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (t.addPause = function (r, s, o) {
      var a = gt.delayedCall(0, s || Eo, o);
      return (
        (a.data = 'isPause'), (this._hasPause = 1), $n(this, a, gn(this, r))
      );
    }),
    (t.removePause = function (r) {
      var s = this._first;
      for (r = gn(this, r); s; )
        s._start === r && s.data === 'isPause' && ji(s), (s = s._next);
    }),
    (t.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; )
        Fi !== a[l] && a[l].kill(r, s);
      return this;
    }),
    (t.getTweensOf = function (r, s) {
      for (var o = [], a = bn(r), l = this._first, c = xi(s), u; l; )
        l instanceof gt
          ? jw(l._targets, a) &&
            (c
              ? (!Fi || (l._initted && l._ts)) &&
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
        a = gn(o, r),
        l = s,
        c = l.startAt,
        u = l.onStart,
        f = l.onStartParams,
        h = l.immediateRender,
        p,
        g = gt.to(
          o,
          An(
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
                if ((o.pause(), !p)) {
                  var m =
                    s.duration ||
                    Math.abs(
                      (a - (c && 'time' in c ? c.time : o._time)) /
                        o.timeScale()
                    );
                  g._dur !== m && Fs(g, m, 0, 1).render(g._time, !0, !0),
                    (p = 1);
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
      return this.tweenTo(s, An({ startAt: { time: gn(this, r) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Dd(this, gn(this, r));
    }),
    (t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Dd(this, gn(this, r), 1);
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
      return wr(this);
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
        wr(this)
      );
    }),
    (t.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        l = Mn,
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
              ? ((o._lock = 1), ($n(o, a, u - a._delay, 1)._lock = 0))
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
        Fs(o, o === rt && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((rt._ts && (Jm(rt, Ua(r, rt)), (Zm = sn.frame)), sn.frame >= Cd)) {
        Cd += an.autoSleep || 120;
        var s = rt._first;
        if ((!s || !s._ts) && an.autoSleep && sn._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || sn.sleep();
        }
      }
    }),
    e
  );
})(zs);
An(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var _T = function (e, t, n, r, s, o, a) {
    var l = new Kt(this._pt, e, t, 0, 1, wg, null, s),
      c = 0,
      u = 0,
      f,
      h,
      p,
      g,
      d,
      m,
      _,
      x;
    for (
      l.b = n,
        l.e = r,
        n += '',
        r += '',
        (_ = ~r.indexOf('random(')) && (r = Ao(r)),
        o && ((x = [n, r]), o(x, e, t), (n = x[0]), (r = x[1])),
        h = n.match(oc) || [];
      (f = oc.exec(r));

    )
      (g = f[0]),
        (d = r.substring(c, f.index)),
        p ? (p = (p + 1) % 5) : d.substr(-5) === 'rgba(' && (p = 1),
        g !== h[u++] &&
          ((m = parseFloat(h[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: d || u === 1 ? d : ',',
            s: m,
            c: g.charAt(1) === '=' ? ys(m, g) - m : parseFloat(g) - m,
            m: p && p < 4 ? Math.round : 0,
          }),
          (c = oc.lastIndex));
    return (
      (l.c = c < r.length ? r.substring(c, r.length) : ''),
      (l.fp = a),
      (qm.test(r) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  ju = function (e, t, n, r, s, o, a, l, c, u) {
    lt(r) && (r = r(s || 0, e, o));
    var f = e[t],
      h =
        n !== 'get'
          ? n
          : lt(f)
          ? c
            ? e[
                t.indexOf('set') || !lt(e['get' + t.substr(3)])
                  ? t
                  : 'get' + t.substr(3)
              ](c)
            : e[t]()
          : f,
      p = lt(f) ? (c ? bT : bg) : $u,
      g;
    if (
      (bt(r) &&
        (~r.indexOf('random(') && (r = Ao(r)),
        r.charAt(1) === '=' &&
          ((g = ys(h, r) + (Rt(h) || 0)), (g || g === 0) && (r = g))),
      !u || h !== r || eu)
    )
      return !isNaN(h * r) && r !== ''
        ? ((g = new Kt(
            this._pt,
            e,
            t,
            +h || 0,
            r - (h || 0),
            typeof f == 'boolean' ? wT : Sg,
            0,
            p
          )),
          c && (g.fp = c),
          a && g.modifier(a, this, e),
          (this._pt = g))
        : (!f && !(t in e) && Hu(t, r),
          _T.call(this, e, t, h, r, p, l || an.stringFilter, c));
  },
  xT = function (e, t, n, r, s) {
    if (
      (lt(e) && (e = mo(e, s, t, n, r)),
      !ei(e) || (e.style && e.nodeType) || It(e) || Hm(e))
    )
      return bt(e) ? mo(e, s, t, n, r) : e;
    var o = {},
      a;
    for (a in e) o[a] = mo(e[a], s, t, n, r);
    return o;
  },
  vg = function (e, t, n, r, s, o) {
    var a, l, c, u;
    if (
      rn[e] &&
      (a = new rn[e]()).init(
        s,
        a.rawVars ? t[e] : xT(t[e], r, s, o, n),
        n,
        r,
        o
      ) !== !1 &&
      ((n._pt = l = new Kt(n._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      n !== hs)
    )
      for (c = n._ptLookup[n._targets.indexOf(s)], u = a._props.length; u--; )
        c[a._props[u]] = l;
    return a;
  },
  Fi,
  eu,
  Yu = function i(e, t, n) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      c = r.onUpdate,
      u = r.onUpdateParams,
      f = r.callbackScope,
      h = r.runBackwards,
      p = r.yoyoEase,
      g = r.keyframes,
      d = r.autoRevert,
      m = e._dur,
      _ = e._startAt,
      x = e._targets,
      v = e.parent,
      y = v && v.data === 'nested' ? v.vars.targets : x,
      b = e._overwrite === 'auto' && !ku,
      T = e.timeline,
      L,
      M,
      w,
      R,
      q,
      Q,
      B,
      I,
      X,
      Z,
      $,
      V,
      N;
    if (
      (T && (!g || !s) && (s = 'none'),
      (e._ease = Tr(s, Is.ease)),
      (e._yEase = p ? mg(Tr(p === !0 ? s : p, Is.ease)) : 0),
      p &&
        e._yoyo &&
        !e._repeat &&
        ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
      (e._from = !T && !!r.runBackwards),
      !T || (g && !r.stagger))
    ) {
      if (
        ((I = x[0] ? Sr(x[0]).harness : 0),
        (V = I && r[I.prop]),
        (L = za(r, Wu)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && h && a && !d ? _.render(-1, !0) : _.revert(h && m ? wa : qw),
          (_._lazy = 0)),
        o)
      ) {
        if (
          (ji(
            (e._startAt = gt.set(
              x,
              An(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: $t(l),
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
          t < 0 && (Yt || (!a && !d)) && e._startAt.revert(wa),
          a && m && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (h && m && !_) {
        if (
          (t && (a = !1),
          (w = An(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: a && $t(l),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            L
          )),
          V && (w[I.prop] = V),
          ji((e._startAt = gt.set(x, w))),
          (e._startAt._dp = 0),
          t < 0 && (Yt ? e._startAt.revert(wa) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          i(e._startAt, Je, Je);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (m && $t(l)) || (l && !m), M = 0;
        M < x.length;
        M++
      ) {
        if (
          ((q = x[M]),
          (B = q._gsap || Xu(x)[M]._gsap),
          (e._ptLookup[M] = Z = {}),
          Yc[B.id] && Hi.length && Na(),
          ($ = y === x ? M : y.indexOf(q)),
          I &&
            (X = new I()).init(q, V || L, e, $, y) !== !1 &&
            ((e._pt = R =
              new Kt(e._pt, q, X.name, 0, 1, X.render, X, 0, X.priority)),
            X._props.forEach(function (H) {
              Z[H] = R;
            }),
            X.priority && (Q = 1)),
          !I || V)
        )
          for (w in L)
            rn[w] && (X = vg(w, L, e, $, q, y))
              ? X.priority && (Q = 1)
              : (Z[w] = R =
                  ju.call(e, q, w, 'get', L[w], $, y, 0, r.stringFilter));
        e._op && e._op[M] && e.kill(q, e._op[M]),
          b &&
            e._pt &&
            ((Fi = e),
            rt.killTweensOf(q, Z, e.globalTime(t)),
            (N = !e.parent),
            (Fi = 0)),
          e._pt && l && (Yc[B.id] = 1);
      }
      Q && Tg(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !N),
      g && t <= 0 && T.render(Mn, !0, !0);
  },
  vT = function (e, t, n, r, s, o, a) {
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
        if (!c) return (eu = 1), (e.vars[t] = '+=0'), Yu(e, a), (eu = 0), 1;
        l.push(c);
      }
    for (h = l.length; h--; )
      (u = l[h]),
        (c = u._pt || u),
        (c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + o * c.c),
        (c.c = n - c.s),
        u.e && (u.e = ct(n) + Rt(u.e)),
        u.b && (u.b = c.s + Rt(u.b));
  },
  yT = function (e, t) {
    var n = e[0] ? Sr(e[0]).harness : 0,
      r = n && n.aliases,
      s,
      o,
      a,
      l;
    if (!r) return t;
    s = Rr({}, t);
    for (o in r)
      if (o in s) for (l = r[o].split(','), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  MT = function (e, t, n, r) {
    var s = t.ease || r || 'power1.inOut',
      o,
      a;
    if (It(t))
      (a = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return a.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = n[o] || (n[o] = [])),
          o === 'ease' || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  mo = function (e, t, n, r, s) {
    return lt(e)
      ? e.call(t, n, r, s)
      : bt(e) && ~e.indexOf('random(')
      ? Ao(e)
      : e;
  },
  yg = qu + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  Mg = {};
Zt(yg + ',id,stagger,delay,duration,paused,scrollTrigger', function (i) {
  return (Mg[i] = 1);
});
var gt = (function (i) {
  km(e, i);
  function e(n, r, s, o) {
    var a;
    typeof r == 'number' && ((s.duration = r), (r = s), (s = null)),
      (a = i.call(this, o ? r : ho(r)) || this);
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      f = l.immediateRender,
      h = l.stagger,
      p = l.overwrite,
      g = l.keyframes,
      d = l.defaults,
      m = l.scrollTrigger,
      _ = l.yoyoEase,
      x = r.parent || rt,
      v = (It(n) || Hm(n) ? xi(n[0]) : 'length' in r) ? [n] : bn(n),
      y,
      b,
      T,
      L,
      M,
      w,
      R,
      q;
    if (
      ((a._targets = v.length
        ? Xu(v)
        : Fa(
            'GSAP target ' + n + ' not found. https://greensock.com',
            !an.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = p),
      g || h || ma(c) || ma(u))
    ) {
      if (
        ((r = a.vars),
        (y = a.timeline =
          new Xt({
            data: 'nested',
            defaults: d || {},
            targets: x && x.data === 'nested' ? x.vars.targets : v,
          })),
        y.kill(),
        (y.parent = y._dp = ui(a)),
        (y._start = 0),
        h || ma(c) || ma(u))
      ) {
        if (((L = v.length), (R = h && ag(h)), ei(h)))
          for (M in h) ~yg.indexOf(M) && (q || (q = {}), (q[M] = h[M]));
        for (b = 0; b < L; b++)
          (T = za(r, Mg)),
            (T.stagger = 0),
            _ && (T.yoyoEase = _),
            q && Rr(T, q),
            (w = v[b]),
            (T.duration = +mo(c, ui(a), b, w, v)),
            (T.delay = (+mo(u, ui(a), b, w, v) || 0) - a._delay),
            !h &&
              L === 1 &&
              T.delay &&
              ((a._delay = u = T.delay), (a._start += u), (T.delay = 0)),
            y.to(w, T, R ? R(b, w, v) : 0),
            (y._ease = He.none);
        y.duration() ? (c = u = 0) : (a.timeline = 0);
      } else if (g) {
        ho(An(y.vars.defaults, { ease: 'none' })),
          (y._ease = Tr(g.ease || r.ease || 'none'));
        var Q = 0,
          B,
          I,
          X;
        if (It(g))
          g.forEach(function (Z) {
            return y.to(v, Z, '>');
          }),
            y.duration();
        else {
          T = {};
          for (M in g)
            M === 'ease' || M === 'easeEach' || MT(M, g[M], T, g.easeEach);
          for (M in T)
            for (
              B = T[M].sort(function (Z, $) {
                return Z.t - $.t;
              }),
                Q = 0,
                b = 0;
              b < B.length;
              b++
            )
              (I = B[b]),
                (X = {
                  ease: I.e,
                  duration: ((I.t - (b ? B[b - 1].t : 0)) / 100) * c,
                }),
                (X[M] = I.v),
                y.to(v, X, Q),
                (Q += X.duration);
          y.duration() < c && y.to({}, { duration: c - y.duration() });
        }
      }
      c || a.duration((c = y.duration()));
    } else a.timeline = 0;
    return (
      p === !0 && !ku && ((Fi = ui(a)), rt.killTweensOf(v), (Fi = 0)),
      $n(x, ui(a), s),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (f ||
        (!c &&
          !g &&
          a._start === St(x._time) &&
          $t(f) &&
          Kw(ui(a)) &&
          x.data !== 'nested')) &&
        ((a._tTime = -Je), a.render(Math.max(0, -u) || 0)),
      m && ig(ui(a), m),
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
        p,
        g,
        d,
        m,
        _,
        x,
        v,
        y;
      if (!c) Qw(this, r, s, o);
      else if (
        f !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((h = f), (v = this.timeline), this._repeat)) {
          if (((d = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(d * 100 + r, s, o);
          if (
            ((h = St(f % d)),
            f === l
              ? ((g = this._repeat), (h = c))
              : ((g = ~~(f / d)),
                g && g === f / d && ((h = c), g--),
                h > c && (h = c)),
            (_ = this._yoyo && g & 1),
            _ && ((y = this._yEase), (h = c - h)),
            (m = Os(this._tTime, d)),
            h === a && !o && this._initted)
          )
            return (this._tTime = f), this;
          g !== m &&
            (v && this._yEase && gg(v, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(St(d * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (rg(this, u ? r : h, o, s, f)) return (this._tTime = 0), this;
          if (a !== this._time) return this;
          if (c !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = f),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = x = (y || this._ease)(h / c)),
          this._from && (this.ratio = x = 1 - x),
          h && !a && !s && (Sn(this, 'onStart'), this._tTime !== f))
        )
          return this;
        for (p = this._pt; p; ) p.r(x, p.d), (p = p._next);
        (v &&
          v.render(
            r < 0 ? r : !h && _ ? -Je : v._dur * v._ease(h / this._dur),
            s,
            o
          )) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (u && $c(this, r, s, o), Sn(this, 'onUpdate')),
          this._repeat &&
            g !== m &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Sn(this, 'onRepeat'),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (u && !this._onUpdate && $c(this, r, !0, !0),
            (r || !c) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              ji(this, 1),
            !s &&
              !(u && !a) &&
              (f || a || _) &&
              (Sn(this, f === l ? 'onComplete' : 'onReverseComplete', !0),
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
      Co || sn.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Yu(this, l),
        (c = this._ease(l / this._dur)),
        vT(this, r, s, o, a, c, l)
          ? this.resetTo(r, s, o, a)
          : (cl(this, 0),
            this.parent ||
              tg(
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
        return (this._lazy = this._pt = 0), this.parent ? ro(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, Fi && Fi.vars.overwrite !== !0)
            ._first || ro(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Fs(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? bn(r) : a,
        c = this._ptLookup,
        u = this._pt,
        f,
        h,
        p,
        g,
        d,
        m,
        _;
      if ((!s || s === 'all') && $w(a, l))
        return s === 'all' && (this._pt = 0), ro(this);
      for (
        f = this._op = this._op || [],
          s !== 'all' &&
            (bt(s) &&
              ((d = {}),
              Zt(s, function (x) {
                return (d[x] = 1);
              }),
              (s = d)),
            (s = yT(a, s))),
          _ = a.length;
        _--;

      )
        if (~l.indexOf(a[_])) {
          (h = c[_]),
            s === 'all'
              ? ((f[_] = s), (g = h), (p = {}))
              : ((p = f[_] = f[_] || {}), (g = s));
          for (d in g)
            (m = h && h[d]),
              m &&
                ((!('kill' in m.d) || m.d.kill(d) === !0) && al(this, m, '_pt'),
                delete h[d]),
              p !== 'all' && (p[d] = 1);
        }
      return this._initted && !this._pt && u && ro(this), this;
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2]);
    }),
    (e.from = function (r, s) {
      return po(1, arguments);
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
      return po(2, arguments);
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }),
    (e.killTweensOf = function (r, s, o) {
      return rt.killTweensOf(r, s, o);
    }),
    e
  );
})(zs);
An(gt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Zt('staggerTo,staggerFrom,staggerFromTo', function (i) {
  gt[i] = function () {
    var e = new Xt(),
      t = Kc.call(arguments, 0);
    return t.splice(i === 'staggerFromTo' ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var $u = function (e, t, n) {
    return (e[t] = n);
  },
  bg = function (e, t, n) {
    return e[t](n);
  },
  bT = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  ST = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Zu = function (e, t) {
    return lt(e[t]) ? bg : Vu(e[t]) && e.setAttribute ? ST : $u;
  },
  Sg = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  wT = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  wg = function (e, t) {
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
  Ku = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  TT = function (e, t, n, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, t, n), (s = o);
  },
  ET = function (e) {
    for (var t = this._pt, n, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? al(this, t, '_pt')
          : t.dep || (n = 1),
        (t = r);
    return !n;
  },
  AT = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  Tg = function (e) {
    for (var t = e._pt, n, r, s, o; t; ) {
      for (n = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = n);
    }
    e._pt = s;
  },
  Kt = (function () {
    function i(t, n, r, s, o, a, l, c, u) {
      (this.t = n),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = a || Sg),
        (this.d = l || this),
        (this.set = c || $u),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = i.prototype;
    return (
      (e.modifier = function (n, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = AT),
          (this.m = n),
          (this.mt = s),
          (this.tween = r);
      }),
      i
    );
  })();
Zt(
  qu +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (i) {
    return (Wu[i] = 1);
  }
);
un.TweenMax = un.TweenLite = gt;
un.TimelineLite = un.TimelineMax = Xt;
rt = new Xt({
  sortChildren: !1,
  defaults: Is,
  autoRemoveChildren: !0,
  id: 'root',
  smoothChildTiming: !0,
});
an.stringFilter = pg;
var Us = [],
  Ea = {},
  CT = [],
  Od = 0,
  fc = function (e) {
    return (Ea[e] || CT).map(function (t) {
      return t();
    });
  },
  tu = function () {
    var e = Date.now(),
      t = [];
    e - Od > 2 &&
      (fc('matchMediaInit'),
      Us.forEach(function (n) {
        var r = n.queries,
          s = n.conditions,
          o,
          a,
          l,
          c;
        for (a in r)
          (o = _n.matchMedia(r[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (c = 1));
        c && (n.revert(), l && t.push(n));
      }),
      fc('matchMediaRevert'),
      t.forEach(function (n) {
        return n.onMatch(n);
      }),
      (Od = e),
      fc('matchMedia'));
  },
  Eg = (function () {
    function i(t, n) {
      (this.selector = n && Jc(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = i.prototype;
    return (
      (e.add = function (n, r, s) {
        lt(n) && ((s = r), (r = n), (n = lt));
        var o = this,
          a = function () {
            var c = dt,
              u = o.selector,
              f;
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = Jc(s)),
              (dt = o),
              (f = r.apply(o, arguments)),
              lt(f) && o._r.push(f),
              (dt = c),
              (o.selector = u),
              (o.isReverted = !1),
              f
            );
          };
        return (o.last = a), n === lt ? a(o) : n ? (o[n] = a) : a;
      }),
      (e.ignore = function (n) {
        var r = dt;
        (dt = null), n(this), (dt = r);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof i
              ? n.push.apply(n, r.getTweens())
              : r instanceof gt &&
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
              return !(l instanceof zs) && l.revert && l.revert(n);
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
          var a = Us.indexOf(this);
          ~a && Us.splice(a, 1);
        }
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      i
    );
  })(),
  PT = (function () {
    function i(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = i.prototype;
    return (
      (e.add = function (n, r, s) {
        ei(n) || (n = { matches: n });
        var o = new Eg(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          u;
        this.contexts.push(o), (r = o.add('onMatch', r)), (o.queries = n);
        for (c in n)
          c === 'all'
            ? (u = 1)
            : ((l = _n.matchMedia(n[c])),
              l &&
                (Us.indexOf(o) < 0 && Us.push(o),
                (a[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(tu)
                  : l.addEventListener('change', tu)));
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
  Ba = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (r) {
        return uT(r);
      });
    },
    timeline: function (e) {
      return new Xt(e);
    },
    getTweensOf: function (e, t) {
      return rt.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      bt(e) && (e = bn(e)[0]);
      var s = Sr(e || {}).get,
        o = n ? eg : Qm;
      return (
        n === 'native' && (n = ''),
        e &&
          (t
            ? o(((rn[t] && rn[t].get) || s)(e, t, n, r))
            : function (a, l, c) {
                return o(((rn[a] && rn[a].get) || s)(e, a, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = bn(e)), e.length > 1)) {
        var r = e.map(function (u) {
            return fn.quickSetter(u, t, n);
          }),
          s = r.length;
        return function (u) {
          for (var f = s; f--; ) r[f](u);
        };
      }
      e = e[0] || {};
      var o = rn[t],
        a = Sr(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        c = o
          ? function (u) {
              var f = new o();
              (hs._pt = 0),
                f.init(e, n ? u + n : u, hs, 0, [e]),
                f.render(1, f),
                hs._pt && Ku(1, hs);
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
        s = fn.to(
          e,
          Rr(((r = {}), (r[t] = '+=0.1'), (r.paused = !0), r), n || {})
        ),
        o = function (l, c, u) {
          return s.resetTo(t, l, c, u);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return rt.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Tr(e.ease, Is.ease)), Pd(Is, e || {});
    },
    config: function (e) {
      return Pd(an, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || '').split(',').forEach(function (a) {
        return (
          a && !rn[a] && !un[a] && Fa(t + ' effect requires ' + a + ' plugin.')
        );
      }),
        (ac[t] = function (a, l, c) {
          return n(bn(a), An(l || {}, s), c);
        }),
        o &&
          (Xt.prototype[t] = function (a, l, c) {
            return this.add(ac[t](a, ei(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      He[e] = Tr(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Tr(e, t) : He;
    },
    getById: function (e) {
      return rt.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Xt(e),
        r,
        s;
      for (
        n.smoothChildTiming = $t(e.smoothChildTiming),
          rt.remove(n),
          n._dp = 0,
          n._time = n._tTime = rt._time,
          r = rt._first;
        r;

      )
        (s = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof gt &&
              r.vars.onComplete === r._targets[0]
            )) &&
            $n(n, r, r._start - r._delay),
          (r = s);
      return $n(rt, n, 0), n;
    },
    context: function (e, t) {
      return e ? new Eg(e, t) : dt;
    },
    matchMedia: function (e) {
      return new PT(e);
    },
    matchMediaRefresh: function () {
      return (
        Us.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || tu()
      );
    },
    addEventListener: function (e, t) {
      var n = Ea[e] || (Ea[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Ea[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: aT,
      wrapYoyo: lT,
      distribute: ag,
      random: cg,
      snap: lg,
      normalize: oT,
      getUnit: Rt,
      clamp: nT,
      splitColor: hg,
      toArray: bn,
      selector: Jc,
      mapRange: fg,
      pipe: rT,
      unitize: sT,
      interpolate: cT,
      shuffle: og,
    },
    install: Ym,
    effects: ac,
    ticker: sn,
    updateRoot: Xt.updateRoot,
    plugins: rn,
    globalTimeline: rt,
    core: {
      PropTween: Kt,
      globals: $m,
      Tween: gt,
      Timeline: Xt,
      Animation: zs,
      getCache: Sr,
      _removeLinkedListItem: al,
      reverting: function () {
        return Yt;
      },
      context: function (e) {
        return e && dt && (dt.data.push(e), (e._ctx = dt)), dt;
      },
      suppressOverwrites: function (e) {
        return (ku = e);
      },
    },
  };
Zt('to,from,fromTo,delayedCall,set,killTweensOf', function (i) {
  return (Ba[i] = gt[i]);
});
sn.add(Xt.updateRoot);
hs = Ba.to({}, { duration: 0 });
var LT = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  RT = function (e, t) {
    var n = e._targets,
      r,
      s,
      o;
    for (r in t)
      for (s = n.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = LT(o, r)),
            o && o.modifier && o.modifier(t[r], e, n[s], r));
  },
  hc = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (a) {
          var l, c;
          if (
            (bt(s) &&
              ((l = {}),
              Zt(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          RT(a, s);
        };
      },
    };
  },
  fn =
    Ba.registerPlugin(
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
            Yt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: 'endArray',
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      hc('roundProps', Qc),
      hc('modifiers'),
      hc('snap', lg)
    ) || Ba;
gt.version = Xt.version = fn.version = '3.11.3';
jm = 1;
Gm() && Ns();
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
 */ var Fd,
  Ni,
  Ms,
  Ju,
  xr,
  Nd,
  Qu,
  DT = function () {
    return typeof window < 'u';
  },
  vi = {},
  ur = 180 / Math.PI,
  bs = Math.PI / 180,
  os = Math.atan2,
  zd = 1e8,
  ef = /([A-Z])/g,
  IT = /(left|right|width|margin|padding|x)/i,
  OT = /[\s,\(]\S/,
  di = {
    autoAlpha: 'opacity,visibility',
    scale: 'scaleX,scaleY',
    alpha: 'opacity',
  },
  nu = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  FT = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  NT = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  zT = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Ag = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Cg = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  UT = function (e, t, n) {
    return (e.style[t] = n);
  },
  BT = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  kT = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  VT = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  GT = function (e, t, n, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = n), o.renderTransform(s, o);
  },
  HT = function (e, t, n, r, s) {
    var o = e._gsap;
    (o[t] = n), o.renderTransform(s, o);
  },
  st = 'transform',
  Bn = st + 'Origin',
  WT = function (e, t) {
    var n = this,
      r = this.target,
      s = r.style;
    if (e in vi) {
      if (
        ((this.tfm = this.tfm || {}),
        e !== 'transform' &&
          ((e = di[e] || e),
          ~e.indexOf(',')
            ? e.split(',').forEach(function (o) {
                return (n.tfm[o] = fi(r, o));
              })
            : (this.tfm[e] = r._gsap.x ? r._gsap[e] : fi(r, e))),
        this.props.indexOf(st) >= 0)
      )
        return;
      r._gsap.svg &&
        ((this.svgo = r.getAttribute('data-svg-origin')),
        this.props.push(Bn, t, '')),
        (e = st);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Pg = function (e) {
    e.translate &&
      (e.removeProperty('translate'),
      e.removeProperty('scale'),
      e.removeProperty('rotate'));
  },
  qT = function () {
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
        : n.removeProperty(e[s].replace(ef, '-$1').toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute('data-svg-origin', this.svgo || '')),
        (s = Qu()),
        s && !s.isStart && !n[st] && (Pg(n), (r.uncache = 1));
    }
  },
  Lg = function (e, t) {
    var n = { target: e, props: [], revert: qT, save: WT };
    return (
      t &&
        t.split(',').forEach(function (r) {
          return n.save(r);
        }),
      n
    );
  },
  Rg,
  iu = function (e, t) {
    var n = Ni.createElementNS
      ? Ni.createElementNS(
          (t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          e
        )
      : Ni.createElement(e);
    return n.style ? n : Ni.createElement(e);
  },
  Qn = function i(e, t, n) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(ef, '-$1').toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!n && i(e, Bs(t) || t, 1)) ||
      ''
    );
  },
  Ud = 'O,Moz,ms,Ms,Webkit'.split(','),
  Bs = function (e, t, n) {
    var r = t || xr,
      s = r.style,
      o = 5;
    if (e in s && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Ud[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? Ud[o] : '') + e;
  },
  ru = function () {
    DT() &&
      window.document &&
      ((Fd = window),
      (Ni = Fd.document),
      (Ms = Ni.documentElement),
      (xr = iu('div') || { style: {} }),
      iu('div'),
      (st = Bs(st)),
      (Bn = st + 'Origin'),
      (xr.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (Rg = !!Bs('perspective')),
      (Qu = fn.core.reverting),
      (Ju = 1));
  },
  dc = function i(e) {
    var t = iu(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg'
      ),
      n = this.parentNode,
      r = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (Ms.appendChild(t),
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
      Ms.removeChild(t),
      (this.style.cssText = s),
      o
    );
  },
  Bd = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Dg = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = dc.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === dc || (t = dc.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Bd(e, ['x', 'cx', 'x1']) || 0,
            y: +Bd(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Ig = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Dg(e));
  },
  Po = function (e, t) {
    if (t) {
      var n = e.style;
      t in vi && t !== Bn && (t = st),
        n.removeProperty
          ? ((t.substr(0, 2) === 'ms' || t.substr(0, 6) === 'webkit') &&
              (t = '-' + t),
            n.removeProperty(t.replace(ef, '-$1').toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  zi = function (e, t, n, r, s, o) {
    var a = new Kt(e._pt, t, n, 0, 1, o ? Cg : Ag);
    return (e._pt = a), (a.b = r), (a.e = s), e._props.push(n), a;
  },
  kd = { deg: 1, rad: 1, turn: 1 },
  XT = { grid: 1, flex: 1 },
  Yi = function i(e, t, n, r) {
    var s = parseFloat(n) || 0,
      o = (n + '').trim().substr((s + '').length) || 'px',
      a = xr.style,
      l = IT.test(t),
      c = e.tagName.toLowerCase() === 'svg',
      u = (c ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
      f = 100,
      h = r === 'px',
      p = r === '%',
      g,
      d,
      m,
      _;
    return r === o || !s || kd[r] || kd[o]
      ? s
      : (o !== 'px' && !h && (s = i(e, t, n, 'px')),
        (_ = e.getCTM && Ig(e)),
        (p || o === '%') && (vi[t] || ~t.indexOf('adius'))
          ? ((g = _ ? e.getBBox()[l ? 'width' : 'height'] : e[u]),
            ct(p ? (s / g) * f : (s / 100) * g))
          : ((a[l ? 'width' : 'height'] = f + (h ? o : r)),
            (d =
              ~t.indexOf('adius') || (r === 'em' && e.appendChild && !c)
                ? e
                : e.parentNode),
            _ && (d = (e.ownerSVGElement || {}).parentNode),
            (!d || d === Ni || !d.appendChild) && (d = Ni.body),
            (m = d._gsap),
            m && p && m.width && l && m.time === sn.time && !m.uncache
              ? ct((s / m.width) * f)
              : ((p || o === '%') &&
                  !XT[Qn(d, 'display')] &&
                  (a.position = Qn(e, 'position')),
                d === e && (a.position = 'static'),
                d.appendChild(xr),
                (g = xr[u]),
                d.removeChild(xr),
                (a.position = 'absolute'),
                l && p && ((m = Sr(d)), (m.time = sn.time), (m.width = d[u])),
                ct(h ? (g * s) / f : g && s ? (f / g) * s : 0))));
  },
  fi = function (e, t, n, r) {
    var s;
    return (
      Ju || ru(),
      t in di &&
        t !== 'transform' &&
        ((t = di[t]), ~t.indexOf(',') && (t = t.split(',')[0])),
      vi[t] && t !== 'transform'
        ? ((s = Ro(e, r)),
          (s =
            t !== 'transformOrigin'
              ? s[t]
              : s.svg
              ? s.origin
              : Va(Qn(e, Bn)) + ' ' + s.zOrigin + 'px'))
        : ((s = e.style[t]),
          (!s || s === 'auto' || r || ~(s + '').indexOf('calc(')) &&
            (s =
              (ka[t] && ka[t](e, t, n)) ||
              Qn(e, t) ||
              Km(e, t) ||
              (t === 'opacity' ? 1 : 0))),
      n && !~(s + '').trim().indexOf(' ') ? Yi(e, t, s, n) + n : s
    );
  },
  jT = function (e, t, n, r) {
    if (!n || n === 'none') {
      var s = Bs(t, e, 1),
        o = s && Qn(e, s, 1);
      o && o !== n
        ? ((t = s), (n = o))
        : t === 'borderColor' && (n = Qn(e, 'borderTopColor'));
    }
    var a = new Kt(this._pt, e.style, t, 0, 1, wg),
      l = 0,
      c = 0,
      u,
      f,
      h,
      p,
      g,
      d,
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
      r === 'auto' && ((e.style[t] = r), (r = Qn(e, t) || r), (e.style[t] = n)),
      (u = [n, r]),
      pg(u),
      (n = u[0]),
      (r = u[1]),
      (h = n.match(fs) || []),
      (b = r.match(fs) || []),
      b.length)
    ) {
      for (; (f = fs.exec(r)); )
        (m = f[0]),
          (x = r.substring(l, f.index)),
          g
            ? (g = (g + 1) % 5)
            : (x.substr(-5) === 'rgba(' || x.substr(-5) === 'hsla(') && (g = 1),
          m !== (d = h[c++] || '') &&
            ((p = parseFloat(d) || 0),
            (y = d.substr((p + '').length)),
            m.charAt(1) === '=' && (m = ys(p, m) + y),
            (_ = parseFloat(m)),
            (v = m.substr((_ + '').length)),
            (l = fs.lastIndex - v.length),
            v ||
              ((v = v || an.units[t] || y),
              l === r.length && ((r += v), (a.e += v))),
            y !== v && (p = Yi(e, t, d, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: x || c === 1 ? x : ',',
              s: p,
              c: _ - p,
              m: (g && g < 4) || t === 'zIndex' ? Math.round : 0,
            }));
      a.c = l < r.length ? r.substring(l, r.length) : '';
    } else a.r = t === 'display' && r === 'none' ? Cg : Ag;
    return qm.test(r) && (a.e = 0), (this._pt = a), a;
  },
  Vd = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  YT = function (e) {
    var t = e.split(' '),
      n = t[0],
      r = t[1] || '50%';
    return (
      (n === 'top' || n === 'bottom' || r === 'left' || r === 'right') &&
        ((e = n), (n = r), (r = e)),
      (t[0] = Vd[n] || n),
      (t[1] = Vd[r] || r),
      t.join(' ')
    );
  },
  $T = function (e, t) {
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
            vi[a] && ((l = 1), (a = a === 'transformOrigin' ? Bn : st)),
            Po(n, a);
      l &&
        (Po(n, st),
        o &&
          (o.svg && n.removeAttribute('transform'),
          Ro(n, 1),
          (o.uncache = 1),
          Pg(r)));
    }
  },
  ka = {
    clearProps: function (e, t, n, r, s) {
      if (s.data !== 'isFromStart') {
        var o = (e._pt = new Kt(e._pt, t, n, 0, 0, $T));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(n), 1;
      }
    },
  },
  Lo = [1, 0, 0, 1, 0, 0],
  Og = {},
  Fg = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
  },
  Gd = function (e) {
    var t = Qn(e, st);
    return Fg(t) ? Lo : t.substr(7).match(Wm).map(ct);
  },
  tf = function (e, t) {
    var n = e._gsap || Sr(e),
      r = e.style,
      s = Gd(e),
      o,
      a,
      l,
      c;
    return n.svg && e.getAttribute('transform')
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(',') === '1,0,0,1,0,0' ? Lo : s)
      : (s === Lo &&
          !e.offsetParent &&
          e !== Ms &&
          !n.svg &&
          ((l = r.display),
          (r.display = 'block'),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((c = 1), (a = e.nextElementSibling), Ms.appendChild(e)),
          (s = Gd(e)),
          l ? (r.display = l) : Po(e, 'display'),
          c &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : Ms.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  su = function (e, t, n, r, s, o) {
    var a = e._gsap,
      l = s || tf(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      f = a.xOffset || 0,
      h = a.yOffset || 0,
      p = l[0],
      g = l[1],
      d = l[2],
      m = l[3],
      _ = l[4],
      x = l[5],
      v = t.split(' '),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      T,
      L,
      M,
      w;
    n
      ? l !== Lo &&
        (L = p * m - g * d) &&
        ((M = y * (m / L) + b * (-d / L) + (d * x - m * _) / L),
        (w = y * (-g / L) + b * (p / L) - (p * x - g * _) / L),
        (y = M),
        (b = w))
      : ((T = Dg(e)),
        (y = T.x + (~v[0].indexOf('%') ? (y / 100) * T.width : y)),
        (b = T.y + (~(v[1] || v[0]).indexOf('%') ? (b / 100) * T.height : b))),
      r || (r !== !1 && a.smooth)
        ? ((_ = y - c),
          (x = b - u),
          (a.xOffset = f + (_ * p + x * d) - _),
          (a.yOffset = h + (_ * g + x * m) - x))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = y),
      (a.yOrigin = b),
      (a.smooth = !!r),
      (a.origin = t),
      (a.originIsAbsolute = !!n),
      (e.style[Bn] = '0px 0px'),
      o &&
        (zi(o, a, 'xOrigin', c, y),
        zi(o, a, 'yOrigin', u, b),
        zi(o, a, 'xOffset', f, a.xOffset),
        zi(o, a, 'yOffset', h, a.yOffset)),
      e.setAttribute('data-svg-origin', y + ' ' + b);
  },
  Ro = function (e, t) {
    var n = e._gsap || new xg(e);
    if ('x' in n && !t && !n.uncache) return n;
    var r = e.style,
      s = n.scaleX < 0,
      o = 'px',
      a = 'deg',
      l = getComputedStyle(e),
      c = Qn(e, Bn) || '0',
      u,
      f,
      h,
      p,
      g,
      d,
      m,
      _,
      x,
      v,
      y,
      b,
      T,
      L,
      M,
      w,
      R,
      q,
      Q,
      B,
      I,
      X,
      Z,
      $,
      V,
      N,
      H,
      ue,
      te,
      de,
      xe,
      G;
    return (
      (u = f = h = d = m = _ = x = v = y = 0),
      (p = g = 1),
      (n.svg = !!(e.getCTM && Ig(e))),
      l.translate &&
        ((l.translate !== 'none' ||
          l.scale !== 'none' ||
          l.rotate !== 'none') &&
          (r[st] =
            (l.translate !== 'none'
              ? 'translate3d(' +
                (l.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                ') '
              : '') +
            (l.rotate !== 'none' ? 'rotate(' + l.rotate + ') ' : '') +
            (l.scale !== 'none'
              ? 'scale(' + l.scale.split(' ').join(',') + ') '
              : '') +
            (l[st] !== 'none' ? l[st] : '')),
        (r.scale = r.rotate = r.translate = 'none')),
      (L = tf(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((V = e.getBBox()),
            (c = n.xOrigin - V.x + 'px ' + (n.yOrigin - V.y) + 'px'),
            ($ = ''))
          : ($ = !t && e.getAttribute('data-svg-origin')),
        su(e, $ || c, !!$ || n.originIsAbsolute, n.smooth !== !1, L)),
      (b = n.xOrigin || 0),
      (T = n.yOrigin || 0),
      L !== Lo &&
        ((q = L[0]),
        (Q = L[1]),
        (B = L[2]),
        (I = L[3]),
        (u = X = L[4]),
        (f = Z = L[5]),
        L.length === 6
          ? ((p = Math.sqrt(q * q + Q * Q)),
            (g = Math.sqrt(I * I + B * B)),
            (d = q || Q ? os(Q, q) * ur : 0),
            (x = B || I ? os(B, I) * ur + d : 0),
            x && (g *= Math.abs(Math.cos(x * bs))),
            n.svg && ((u -= b - (b * q + T * B)), (f -= T - (b * Q + T * I))))
          : ((G = L[6]),
            (de = L[7]),
            (H = L[8]),
            (ue = L[9]),
            (te = L[10]),
            (xe = L[11]),
            (u = L[12]),
            (f = L[13]),
            (h = L[14]),
            (M = os(G, te)),
            (m = M * ur),
            M &&
              ((w = Math.cos(-M)),
              (R = Math.sin(-M)),
              ($ = X * w + H * R),
              (V = Z * w + ue * R),
              (N = G * w + te * R),
              (H = X * -R + H * w),
              (ue = Z * -R + ue * w),
              (te = G * -R + te * w),
              (xe = de * -R + xe * w),
              (X = $),
              (Z = V),
              (G = N)),
            (M = os(-B, te)),
            (_ = M * ur),
            M &&
              ((w = Math.cos(-M)),
              (R = Math.sin(-M)),
              ($ = q * w - H * R),
              (V = Q * w - ue * R),
              (N = B * w - te * R),
              (xe = I * R + xe * w),
              (q = $),
              (Q = V),
              (B = N)),
            (M = os(Q, q)),
            (d = M * ur),
            M &&
              ((w = Math.cos(M)),
              (R = Math.sin(M)),
              ($ = q * w + Q * R),
              (V = X * w + Z * R),
              (Q = Q * w - q * R),
              (Z = Z * w - X * R),
              (q = $),
              (X = V)),
            m &&
              Math.abs(m) + Math.abs(d) > 359.9 &&
              ((m = d = 0), (_ = 180 - _)),
            (p = ct(Math.sqrt(q * q + Q * Q + B * B))),
            (g = ct(Math.sqrt(Z * Z + G * G))),
            (M = os(X, Z)),
            (x = Math.abs(M) > 2e-4 ? M * ur : 0),
            (y = xe ? 1 / (xe < 0 ? -xe : xe) : 0)),
        n.svg &&
          (($ = e.getAttribute('transform')),
          (n.forceCSS = e.setAttribute('transform', '') || !Fg(Qn(e, st))),
          $ && e.setAttribute('transform', $))),
      Math.abs(x) > 90 &&
        Math.abs(x) < 270 &&
        (s
          ? ((p *= -1), (x += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180))
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
      (n.scaleX = ct(p)),
      (n.scaleY = ct(g)),
      (n.rotation = ct(d) + a),
      (n.rotationX = ct(m) + a),
      (n.rotationY = ct(_) + a),
      (n.skewX = x + a),
      (n.skewY = v + a),
      (n.transformPerspective = y + o),
      (n.zOrigin = parseFloat(c.split(' ')[2]) || 0) && (r[Bn] = Va(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = an.force3D),
      (n.renderTransform = n.svg ? KT : Rg ? Ng : ZT),
      (n.uncache = 0),
      n
    );
  },
  Va = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1];
  },
  pc = function (e, t, n) {
    var r = Rt(t);
    return ct(parseFloat(t) + parseFloat(Yi(e, 'x', n + 'px', r))) + r;
  },
  ZT = function (e, t) {
    (t.z = '0px'),
      (t.rotationY = t.rotationX = '0deg'),
      (t.force3D = 0),
      Ng(e, t);
  },
  sr = '0deg',
  eo = '0px',
  or = ') ',
  Ng = function (e, t) {
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
      p = n.skewY,
      g = n.scaleX,
      d = n.scaleY,
      m = n.transformPerspective,
      _ = n.force3D,
      x = n.target,
      v = n.zOrigin,
      y = '',
      b = (_ === 'auto' && e && e !== 1) || _ === !0;
    if (v && (f !== sr || u !== sr)) {
      var T = parseFloat(u) * bs,
        L = Math.sin(T),
        M = Math.cos(T),
        w;
      (T = parseFloat(f) * bs),
        (w = Math.cos(T)),
        (o = pc(x, o, L * w * -v)),
        (a = pc(x, a, -Math.sin(T) * -v)),
        (l = pc(x, l, M * w * -v + v));
    }
    m !== eo && (y += 'perspective(' + m + or),
      (r || s) && (y += 'translate(' + r + '%, ' + s + '%) '),
      (b || o !== eo || a !== eo || l !== eo) &&
        (y +=
          l !== eo || b
            ? 'translate3d(' + o + ', ' + a + ', ' + l + ') '
            : 'translate(' + o + ', ' + a + or),
      c !== sr && (y += 'rotate(' + c + or),
      u !== sr && (y += 'rotateY(' + u + or),
      f !== sr && (y += 'rotateX(' + f + or),
      (h !== sr || p !== sr) && (y += 'skew(' + h + ', ' + p + or),
      (g !== 1 || d !== 1) && (y += 'scale(' + g + ', ' + d + or),
      (x.style[st] = y || 'translate(0, 0)');
  },
  KT = function (e, t) {
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
      p = n.target,
      g = n.xOrigin,
      d = n.yOrigin,
      m = n.xOffset,
      _ = n.yOffset,
      x = n.forceCSS,
      v = parseFloat(o),
      y = parseFloat(a),
      b,
      T,
      L,
      M,
      w;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= bs),
          (c *= bs),
          (b = Math.cos(l) * f),
          (T = Math.sin(l) * f),
          (L = Math.sin(l - c) * -h),
          (M = Math.cos(l - c) * h),
          c &&
            ((u *= bs),
            (w = Math.tan(c - u)),
            (w = Math.sqrt(1 + w * w)),
            (L *= w),
            (M *= w),
            u &&
              ((w = Math.tan(u)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (T *= w))),
          (b = ct(b)),
          (T = ct(T)),
          (L = ct(L)),
          (M = ct(M)))
        : ((b = f), (M = h), (T = L = 0)),
      ((v && !~(o + '').indexOf('px')) || (y && !~(a + '').indexOf('px'))) &&
        ((v = Yi(p, 'x', o, 'px')), (y = Yi(p, 'y', a, 'px'))),
      (g || d || m || _) &&
        ((v = ct(v + g - (g * b + d * L) + m)),
        (y = ct(y + d - (g * T + d * M) + _))),
      (r || s) &&
        ((w = p.getBBox()),
        (v = ct(v + (r / 100) * w.width)),
        (y = ct(y + (s / 100) * w.height))),
      (w =
        'matrix(' + b + ',' + T + ',' + L + ',' + M + ',' + v + ',' + y + ')'),
      p.setAttribute('transform', w),
      x && (p.style[st] = w);
  },
  JT = function (e, t, n, r, s) {
    var o = 360,
      a = bt(s),
      l = parseFloat(s) * (a && ~s.indexOf('rad') ? ur : 1),
      c = l - r,
      u = r + c + 'deg',
      f,
      h;
    return (
      a &&
        ((f = s.split('_')[1]),
        f === 'short' && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        f === 'cw' && c < 0
          ? (c = ((c + o * zd) % o) - ~~(c / o) * o)
          : f === 'ccw' && c > 0 && (c = ((c - o * zd) % o) - ~~(c / o) * o)),
      (e._pt = h = new Kt(e._pt, t, n, r, c, FT)),
      (h.e = u),
      (h.u = 'deg'),
      e._props.push(n),
      h
    );
  },
  Hd = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  QT = function (e, t, n) {
    var r = Hd({}, n._gsap),
      s = 'perspective,force3D,transformOrigin,svgOrigin',
      o = n.style,
      a,
      l,
      c,
      u,
      f,
      h,
      p,
      g;
    r.svg
      ? ((c = n.getAttribute('transform')),
        n.setAttribute('transform', ''),
        (o[st] = t),
        (a = Ro(n, 1)),
        Po(n, st),
        n.setAttribute('transform', c))
      : ((c = getComputedStyle(n)[st]),
        (o[st] = t),
        (a = Ro(n, 1)),
        (o[st] = c));
    for (l in vi)
      (c = r[l]),
        (u = a[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((p = Rt(c)),
          (g = Rt(u)),
          (f = p !== g ? Yi(n, l, c, g) : parseFloat(c)),
          (h = parseFloat(u)),
          (e._pt = new Kt(e._pt, a, l, f, h - f, nu)),
          (e._pt.u = g || 0),
          e._props.push(l));
    Hd(a, r);
  };
Zt('padding,margin,Width,Radius', function (i, e) {
  var t = 'Top',
    n = 'Right',
    r = 'Bottom',
    s = 'Left',
    o = (e < 3 ? [t, n, r, s] : [t + s, t + n, r + n, r + s]).map(function (a) {
      return e < 2 ? i + a : 'border' + a + i;
    });
  ka[e > 1 ? 'border' + i : i] = function (a, l, c, u, f) {
    var h, p;
    if (arguments.length < 4)
      return (
        (h = o.map(function (g) {
          return fi(a, g, c);
        })),
        (p = h.join(' ')),
        p.split(h[0]).length === 5 ? h[0] : p
      );
    (h = (u + '').split(' ')),
      (p = {}),
      o.forEach(function (g, d) {
        return (p[g] = h[d] = h[d] || h[((d - 1) / 2) | 0]);
      }),
      a.init(l, p, f);
  };
});
var zg = {
  name: 'css',
  register: ru,
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
      p,
      g,
      d,
      m,
      _,
      x,
      v,
      y,
      b,
      T,
      L,
      M;
    Ju || ru(),
      (this.styles = this.styles || Lg(e)),
      (M = this.styles.props),
      (this.tween = n);
    for (d in t)
      if (d !== 'autoRound' && ((u = t[d]), !(rn[d] && vg(d, t, n, r, e, s)))) {
        if (
          ((p = typeof u),
          (g = ka[d]),
          p === 'function' && ((u = u.call(n, r, e, s)), (p = typeof u)),
          p === 'string' && ~u.indexOf('random(') && (u = Ao(u)),
          g)
        )
          g(this, e, d, u, n) && (L = 1);
        else if (d.substr(0, 2) === '--')
          (c = (getComputedStyle(e).getPropertyValue(d) + '').trim()),
            (u += ''),
            (Wi.lastIndex = 0),
            Wi.test(c) || ((m = Rt(c)), (_ = Rt(u))),
            _ ? m !== _ && (c = Yi(e, d, c, _) + _) : m && (u += m),
            this.add(a, 'setProperty', c, u, r, s, 0, 0, d),
            o.push(d),
            M.push(d, 0, a[d]);
        else if (p !== 'undefined') {
          if (
            (l && d in l
              ? ((c = typeof l[d] == 'function' ? l[d].call(n, r, e, s) : l[d]),
                bt(c) && ~c.indexOf('random(') && (c = Ao(c)),
                Rt(c + '') || (c += an.units[d] || Rt(fi(e, d)) || ''),
                (c + '').charAt(1) === '=' && (c = fi(e, d)))
              : (c = fi(e, d)),
            (h = parseFloat(c)),
            (x = p === 'string' && u.charAt(1) === '=' && u.substr(0, 2)),
            x && (u = u.substr(2)),
            (f = parseFloat(u)),
            d in di &&
              (d === 'autoAlpha' &&
                (h === 1 && fi(e, 'visibility') === 'hidden' && f && (h = 0),
                M.push('visibility', 0, a.visibility),
                zi(
                  this,
                  a,
                  'visibility',
                  h ? 'inherit' : 'hidden',
                  f ? 'inherit' : 'hidden',
                  !f
                )),
              d !== 'scale' &&
                d !== 'transform' &&
                ((d = di[d]), ~d.indexOf(',') && (d = d.split(',')[0]))),
            (v = d in vi),
            v)
          ) {
            if (
              (this.styles.save(d),
              y ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  Ro(e, t.parseTransform),
                (T = t.smoothOrigin !== !1 && b.smooth),
                (y = this._pt =
                  new Kt(this._pt, a, st, 0, 1, b.renderTransform, b, 0, -1)),
                (y.dep = 1)),
              d === 'scale')
            )
              (this._pt = new Kt(
                this._pt,
                b,
                'scaleY',
                h,
                (x ? ys(h, x + f) : f) - h || 0,
                nu
              )),
                (this._pt.u = 0),
                o.push('scaleY', d),
                (d += 'X');
            else if (d === 'transformOrigin') {
              M.push(Bn, 0, a[Bn]),
                (u = YT(u)),
                b.svg
                  ? su(e, u, 0, T, 0, this)
                  : ((_ = parseFloat(u.split(' ')[2]) || 0),
                    _ !== b.zOrigin && zi(this, b, 'zOrigin', b.zOrigin, _),
                    zi(this, a, d, Va(c), Va(u)));
              continue;
            } else if (d === 'svgOrigin') {
              su(e, u, 1, T, 0, this);
              continue;
            } else if (d in Og) {
              JT(this, b, d, h, x ? ys(h, x + u) : u);
              continue;
            } else if (d === 'smoothOrigin') {
              zi(this, b, 'smooth', b.smooth, u);
              continue;
            } else if (d === 'force3D') {
              b[d] = u;
              continue;
            } else if (d === 'transform') {
              QT(this, u, e);
              continue;
            }
          } else d in a || (d = Bs(d) || d);
          if (v || ((f || f === 0) && (h || h === 0) && !OT.test(u) && d in a))
            (m = (c + '').substr((h + '').length)),
              f || (f = 0),
              (_ = Rt(u) || (d in an.units ? an.units[d] : m)),
              m !== _ && (h = Yi(e, d, c, _)),
              (this._pt = new Kt(
                this._pt,
                v ? b : a,
                d,
                h,
                (x ? ys(h, x + f) : f) - h,
                !v && (_ === 'px' || d === 'zIndex') && t.autoRound !== !1
                  ? zT
                  : nu
              )),
              (this._pt.u = _ || 0),
              m !== _ && _ !== '%' && ((this._pt.b = c), (this._pt.r = NT));
          else if (d in a) jT.call(this, e, d, c, x ? x + u : u);
          else if (d in e) this.add(e, d, c || e[d], x ? x + u : u, r, s);
          else {
            Hu(d, u);
            continue;
          }
          v || (d in a ? M.push(d, 0, a[d]) : M.push(d, 1, c || e[d])),
            o.push(d);
        }
      }
    L && Tg(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Qu())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: fi,
  aliases: di,
  getSetter: function (e, t, n) {
    var r = di[t];
    return (
      r && r.indexOf(',') < 0 && (t = r),
      t in vi && t !== Bn && (e._gsap.x || fi(e, 'x'))
        ? n && Nd === n
          ? t === 'scale'
            ? VT
            : kT
          : (Nd = n || {}) && (t === 'scale' ? GT : HT)
        : e.style && !Vu(e.style[t])
        ? UT
        : ~t.indexOf('-')
        ? BT
        : Zu(e, t)
    );
  },
  core: { _removeProperty: Po, _getMatrix: tf },
};
fn.utils.checkPrefix = Bs;
fn.core.getStyleSaver = Lg;
(function (i, e, t, n) {
  var r = Zt(i + ',' + e + ',' + t, function (s) {
    vi[s] = 1;
  });
  Zt(e, function (s) {
    (an.units[s] = 'deg'), (Og[s] = 1);
  }),
    (di[r[13]] = i + ',' + e),
    Zt(n, function (s) {
      var o = s.split(':');
      di[o[1]] = r[o[0]];
    });
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
);
Zt(
  'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
  function (i) {
    an.units[i] = 'px';
  }
);
fn.registerPlugin(zg);
var Ug = fn.registerPlugin(zg) || fn;
Ug.core.Tween;
const Wd = { type: 'change' },
  mc = { type: 'start' },
  qd = { type: 'end' };
class nf extends Ir {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = 'none'),
      (this.enabled = !0),
      (this.target = new U()),
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
        LEFT: Br.ROTATE,
        MIDDLE: Br.DOLLY,
        RIGHT: Br.PAN,
      }),
      (this.touches = { ONE: kr.ROTATE, TWO: kr.DOLLY_PAN }),
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
      (this.listenToKeyEvents = function (D) {
        D.addEventListener('keydown', ae), (this._domElementKeyEvents = D);
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
          n.dispatchEvent(Wd),
          n.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const D = new U(),
          k = new Pr().setFromUnitVectors(e.up, new U(0, 1, 0)),
          be = k.clone().invert(),
          Ee = new U(),
          Se = new Pr(),
          Ce = 2 * Math.PI;
        return function () {
          const De = n.object.position;
          D.copy(De).sub(n.target),
            D.applyQuaternion(k),
            a.setFromVector3(D),
            n.autoRotate && s === r.NONE && w(L()),
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
            D.setFromSpherical(a),
            D.applyQuaternion(be),
            De.copy(n.target).add(D),
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
              ? (n.dispatchEvent(Wd),
                Ee.copy(n.object.position),
                Se.copy(n.object.quaternion),
                (f = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener('contextmenu', z),
          n.domElement.removeEventListener('pointerdown', j),
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
      a = new Ad(),
      l = new Ad();
    let c = 1;
    const u = new U();
    let f = !1;
    const h = new Ie(),
      p = new Ie(),
      g = new Ie(),
      d = new Ie(),
      m = new Ie(),
      _ = new Ie(),
      x = new Ie(),
      v = new Ie(),
      y = new Ie(),
      b = [],
      T = {};
    function L() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function M() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function w(D) {
      l.theta -= D;
    }
    function R(D) {
      l.phi -= D;
    }
    const q = (function () {
        const D = new U();
        return function (be, Ee) {
          D.setFromMatrixColumn(Ee, 0), D.multiplyScalar(-be), u.add(D);
        };
      })(),
      Q = (function () {
        const D = new U();
        return function (be, Ee) {
          n.screenSpacePanning === !0
            ? D.setFromMatrixColumn(Ee, 1)
            : (D.setFromMatrixColumn(Ee, 0), D.crossVectors(n.object.up, D)),
            D.multiplyScalar(be),
            u.add(D);
        };
      })(),
      B = (function () {
        const D = new U();
        return function (be, Ee) {
          const Se = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const Ce = n.object.position;
            D.copy(Ce).sub(n.target);
            let we = D.length();
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
    function I(D) {
      n.object.isPerspectiveCamera
        ? (c /= D)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * D)
          )),
          n.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
          ),
          (n.enableZoom = !1));
    }
    function X(D) {
      n.object.isPerspectiveCamera
        ? (c *= D)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / D)
          )),
          n.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
          ),
          (n.enableZoom = !1));
    }
    function Z(D) {
      h.set(D.clientX, D.clientY);
    }
    function $(D) {
      x.set(D.clientX, D.clientY);
    }
    function V(D) {
      d.set(D.clientX, D.clientY);
    }
    function N(D) {
      p.set(D.clientX, D.clientY),
        g.subVectors(p, h).multiplyScalar(n.rotateSpeed);
      const k = n.domElement;
      w((2 * Math.PI * g.x) / k.clientHeight),
        R((2 * Math.PI * g.y) / k.clientHeight),
        h.copy(p),
        n.update();
    }
    function H(D) {
      v.set(D.clientX, D.clientY),
        y.subVectors(v, x),
        y.y > 0 ? I(M()) : y.y < 0 && X(M()),
        x.copy(v),
        n.update();
    }
    function ue(D) {
      m.set(D.clientX, D.clientY),
        _.subVectors(m, d).multiplyScalar(n.panSpeed),
        B(_.x, _.y),
        d.copy(m),
        n.update();
    }
    function te(D) {
      D.deltaY < 0 ? X(M()) : D.deltaY > 0 && I(M()), n.update();
    }
    function de(D) {
      let k = !1;
      switch (D.code) {
        case n.keys.UP:
          B(0, n.keyPanSpeed), (k = !0);
          break;
        case n.keys.BOTTOM:
          B(0, -n.keyPanSpeed), (k = !0);
          break;
        case n.keys.LEFT:
          B(n.keyPanSpeed, 0), (k = !0);
          break;
        case n.keys.RIGHT:
          B(-n.keyPanSpeed, 0), (k = !0);
          break;
      }
      k && (D.preventDefault(), n.update());
    }
    function xe() {
      if (b.length === 1) h.set(b[0].pageX, b[0].pageY);
      else {
        const D = 0.5 * (b[0].pageX + b[1].pageX),
          k = 0.5 * (b[0].pageY + b[1].pageY);
        h.set(D, k);
      }
    }
    function G() {
      if (b.length === 1) d.set(b[0].pageX, b[0].pageY);
      else {
        const D = 0.5 * (b[0].pageX + b[1].pageX),
          k = 0.5 * (b[0].pageY + b[1].pageY);
        d.set(D, k);
      }
    }
    function F() {
      const D = b[0].pageX - b[1].pageX,
        k = b[0].pageY - b[1].pageY,
        be = Math.sqrt(D * D + k * k);
      x.set(0, be);
    }
    function le() {
      n.enableZoom && F(), n.enablePan && G();
    }
    function ce() {
      n.enableZoom && F(), n.enableRotate && xe();
    }
    function ve(D) {
      if (b.length == 1) p.set(D.pageX, D.pageY);
      else {
        const be = Me(D),
          Ee = 0.5 * (D.pageX + be.x),
          Se = 0.5 * (D.pageY + be.y);
        p.set(Ee, Se);
      }
      g.subVectors(p, h).multiplyScalar(n.rotateSpeed);
      const k = n.domElement;
      w((2 * Math.PI * g.x) / k.clientHeight),
        R((2 * Math.PI * g.y) / k.clientHeight),
        h.copy(p);
    }
    function _e(D) {
      if (b.length === 1) m.set(D.pageX, D.pageY);
      else {
        const k = Me(D),
          be = 0.5 * (D.pageX + k.x),
          Ee = 0.5 * (D.pageY + k.y);
        m.set(be, Ee);
      }
      _.subVectors(m, d).multiplyScalar(n.panSpeed), B(_.x, _.y), d.copy(m);
    }
    function Te(D) {
      const k = Me(D),
        be = D.pageX - k.x,
        Ee = D.pageY - k.y,
        Se = Math.sqrt(be * be + Ee * Ee);
      v.set(0, Se),
        y.set(0, Math.pow(v.y / x.y, n.zoomSpeed)),
        I(y.y),
        x.copy(v);
    }
    function A(D) {
      n.enableZoom && Te(D), n.enablePan && _e(D);
    }
    function P(D) {
      n.enableZoom && Te(D), n.enableRotate && ve(D);
    }
    function j(D) {
      n.enabled !== !1 &&
        (b.length === 0 &&
          (n.domElement.setPointerCapture(D.pointerId),
          n.domElement.addEventListener('pointermove', K),
          n.domElement.addEventListener('pointerup', ee)),
        J(D),
        D.pointerType === 'touch' ? E(D) : pe(D));
    }
    function K(D) {
      n.enabled !== !1 && (D.pointerType === 'touch' ? S(D) : oe(D));
    }
    function ee(D) {
      ie(D),
        b.length === 0 &&
          (n.domElement.releasePointerCapture(D.pointerId),
          n.domElement.removeEventListener('pointermove', K),
          n.domElement.removeEventListener('pointerup', ee)),
        n.dispatchEvent(qd),
        (s = r.NONE);
    }
    function he(D) {
      ie(D);
    }
    function pe(D) {
      let k;
      switch (D.button) {
        case 0:
          k = n.mouseButtons.LEFT;
          break;
        case 1:
          k = n.mouseButtons.MIDDLE;
          break;
        case 2:
          k = n.mouseButtons.RIGHT;
          break;
        default:
          k = -1;
      }
      switch (k) {
        case Br.DOLLY:
          if (n.enableZoom === !1) return;
          $(D), (s = r.DOLLY);
          break;
        case Br.ROTATE:
          if (D.ctrlKey || D.metaKey || D.shiftKey) {
            if (n.enablePan === !1) return;
            V(D), (s = r.PAN);
          } else {
            if (n.enableRotate === !1) return;
            Z(D), (s = r.ROTATE);
          }
          break;
        case Br.PAN:
          if (D.ctrlKey || D.metaKey || D.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(D), (s = r.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            V(D), (s = r.PAN);
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(mc);
    }
    function oe(D) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1) return;
          N(D);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1) return;
          H(D);
          break;
        case r.PAN:
          if (n.enablePan === !1) return;
          ue(D);
          break;
      }
    }
    function me(D) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== r.NONE ||
        (D.preventDefault(), n.dispatchEvent(mc), te(D), n.dispatchEvent(qd));
    }
    function ae(D) {
      n.enabled === !1 || n.enablePan === !1 || de(D);
    }
    function E(D) {
      switch ((fe(D), b.length)) {
        case 1:
          switch (n.touches.ONE) {
            case kr.ROTATE:
              if (n.enableRotate === !1) return;
              xe(), (s = r.TOUCH_ROTATE);
              break;
            case kr.PAN:
              if (n.enablePan === !1) return;
              G(), (s = r.TOUCH_PAN);
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case kr.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              le(), (s = r.TOUCH_DOLLY_PAN);
              break;
            case kr.DOLLY_ROTATE:
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
      s !== r.NONE && n.dispatchEvent(mc);
    }
    function S(D) {
      switch ((fe(D), s)) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ve(D), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          _e(D), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          A(D), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          P(D), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function z(D) {
      n.enabled !== !1 && D.preventDefault();
    }
    function J(D) {
      b.push(D);
    }
    function ie(D) {
      delete T[D.pointerId];
      for (let k = 0; k < b.length; k++)
        if (b[k].pointerId == D.pointerId) {
          b.splice(k, 1);
          return;
        }
    }
    function fe(D) {
      let k = T[D.pointerId];
      k === void 0 && ((k = new Ie()), (T[D.pointerId] = k)),
        k.set(D.pageX, D.pageY);
    }
    function Me(D) {
      const k = D.pointerId === b[0].pointerId ? b[1] : b[0];
      return T[k.pointerId];
    }
    n.domElement.addEventListener('contextmenu', z),
      n.domElement.addEventListener('pointerdown', j),
      n.domElement.addEventListener('pointercancel', he),
      n.domElement.addEventListener('wheel', me, { passive: !1 }),
      this.update();
  }
}
class eE {
  constructor(e) {
    Gn(this, 'container');
    Gn(this, 'width');
    Gn(this, 'height');
    Gn(this, 'dpr');
    Gn(this, 'scene');
    Gn(this, 'camera');
    Gn(this, 'renderer');
    Gn(this, 'mesh');
    Gn(this, 'controls');
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
    this.scene = new zu();
  }
  setLight() {
    const e = new Uw(16777215, 0.5);
    this.scene.add(e);
  }
  setCamera() {
    (this.camera = new qt(45, this.width / this.height, 0.1, 1e4)),
      this.camera.position.set(0, 20, 100);
  }
  setRenderer() {
    var e;
    (this.renderer = new sl({ antialias: !0 })),
      this.renderer.setSize(this.width, this.height),
      this.renderer.setPixelRatio(this.dpr),
      (this.renderer.shadowMap.enabled = !0),
      (e = this.container) == null || e.appendChild(this.renderer.domElement);
  }
  setControl() {
    (this.controls = new nf(this.camera, this.renderer.domElement)),
      (this.controls.enableDamping = !0),
      (this.controls.enableZoom = !1),
      (this.controls.autoRotate = !0);
    const e = new Bw(5);
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
const tE = '' + new URL('stars.b59efedb.png', import.meta.url).href,
  nE = '' + new URL('map.51d04fce.jpg', import.meta.url).href,
  iE = '' + new URL('earth.74238849.jpg', import.meta.url).href,
  rE = '' + new URL('glow.ef19d813.png', import.meta.url).href,
  sE = '' + new URL('moon.8132a945.jpg', import.meta.url).href,
  oE = '' + new URL('moon_ring.4faf79c0.png', import.meta.url).href,
  aE = { class: 'earth' },
  lE = Dr({
    __name: 'Index',
    setup(i) {
      const e = () => {
          const s = [];
          for (let u = 0; u < 500; u++) {
            const f = new U();
            (f.x = 800 * Math.random() - 400),
              (f.y = 800 * Math.random() - 400),
              (f.z = 800 * Math.random() - 400),
              s.push(f.x, f.y, f.z);
          }
          const o = new Jt();
          o.setAttribute('position', new En(new Float32Array(s), 3));
          const a = new ss().load(tE),
            l = new zm({
              size: 2,
              sizeAttenuation: !0,
              color: 5076687,
              transparent: !0,
              opacity: 1,
              map: a,
            });
          return new Dw(o, l);
        },
        t = () => {
          const s = new Oi(),
            o = new fo(10, 32, 32),
            a = new ss().load(nE),
            l = new uo({ map: a }),
            c = new yn(o, l);
          s.add(c);
          const u = new ss().load(iE),
            f = new fo(11, 32, 32),
            h = new uo({ map: u, alphaMap: u, blending: co, transparent: !0 }),
            p = new yn(f, h);
          s.add(p);
          const g = new ss().load(rE),
            d = new ol({
              map: g,
              color: 5076687,
              transparent: !0,
              depthWrite: !1,
              depthTest: !1,
              blending: co,
            }),
            m = new Uu(d);
          return m.scale.set(30, 30, 0), s.add(m), s;
        },
        n = () => {
          const s = new Oi();
          let o = new ss().load(sE),
            a = new Iw({ map: o, emissive: 16777215, emissiveMap: o }),
            l = new fo(3, 32, 32),
            c = new yn(l, a);
          c.position.set(42, 0, 0), s.add(c);
          let u = new ss().load(oE),
            f = new uo({
              map: u,
              transparent: !0,
              blending: co,
              side: hi,
              depthWrite: !1,
              opacity: 0.5,
            }),
            h = new Bu(40, 45, 64),
            p = new yn(h, f);
          (p.rotation.x = -Math.PI / 2), s.add(p);
          const g = { value: 0 };
          return (
            Ug.to(g, {
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
        Io(() => {
          const s = new eE({ el: document.querySelector('.earth') });
          (s.scene.background = new qe(197393)),
            r(s.scene, [e(), t(), n()]),
            s.animate(),
            window.addEventListener('resize', () => {
              s.resize();
            }),
            console.log(s);
        }),
        (s, o) => (nn(), xn('div', aE))
      );
    },
  });
const cE = (i, e) => {
    const t = i.__vccOpts || i;
    for (const [n, r] of e) t[n] = r;
    return t;
  },
  uE = cE(lE, [['__scopeId', 'data-v-3b001398']]),
  fE = ['#ff9974', '#4c84ff', '#35ccd4'],
  Do = [
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
  ou = [
    '\u6BDB\u5229',
    '\u606F\u7A0E\u6298\u65E7\u644A\u9500\u524D\u5229\u6DA6',
    '\u51C0\u5229\u6DA6',
    '\u4EBA\u5747\u521B\u6536',
    '\u8425\u4E1A\u6210\u672C',
    '\u603B\u8425\u4E1A\u6536\u5165',
    '\u5B58\u8D27\u5468\u8F6C\u5929\u6570',
    '\u606F\u7A0E\u524D\u5229\u6DA6',
    '\u7814\u53D1\u5229\u6DA6',
    '\u5E94\u6536\u8D26\u6B3E\u5468\u8F6C\u5929\u6570',
    '\u4F01\u4E1A\u81EA\u7531\u73B0\u91D1\u6D41\u91CF',
  ],
  Ga = [
    '\u5E74\u4EFD',
    '\u5B63\u5EA6',
    '\u65E5\u671F',
    '\u7EF4\u5EA6\u540D\u79F0',
    '\u540C\u6BD4',
    '\u73AF\u6BD4',
    '\u6392\u540D',
  ],
  hE = [...Do, ...ou],
  Xd = [...Do, ...ou, ...Ga, ...Do, ...ou, ...Ga],
  dE = { class: 'text-cloud' },
  pE = Dr({
    __name: 'Index',
    setup(i) {
      const e = {
          container: null,
          width: 0,
          height: 0,
          scene: null,
          camera: null,
          renderer: null,
          controls: null,
          textGroup: null,
        },
        t = () => {
          var f, h;
          (e.container = document.querySelector('.text-cloud')),
            (e.width = (f = e.container.offsetWidth) != null ? f : 0),
            (e.height = (h = e.container.offsetHeight) != null ? h : 0),
            (e.scene = new zu());
        },
        n = () => {
          (e.camera = new qt(75, e.width / e.height, 0.1, 1e3)),
            e.camera.position.set(0, 0, 100);
        },
        r = () => {
          var h;
          const f = window.devicePixelRatio || 1;
          (e.renderer = new sl({ antialias: !0, alpha: !0 })),
            e.renderer.setClearColor(16777215),
            e.renderer.setSize(e.width, e.height),
            e.renderer.setPixelRatio(f),
            (e.renderer.shadowMap.enabled = !0),
            (h = e.container) == null || h.appendChild(e.renderer.domElement);
        },
        s = () => {
          (e.controls = new nf(e.camera, e.renderer.domElement)),
            (e.controls.enableDamping = !0),
            (e.controls.enableZoom = !1);
        };
      let o = new Date().getTime();
      const a = () => {
          let f = new Date().getTime(),
            h = f - o;
          e.textGroup.rotateY(-1e-4 * h),
            e.textGroup.rotateX(1e-4 * h),
            e.renderer.render(e.scene, e.camera),
            e.controls.update(),
            (o = f),
            requestAnimationFrame(a);
        },
        l = (f, h, p, g) => {
          const d = document.createElement('canvas'),
            m = window.devicePixelRatio || 1;
          (d.width = p * m), (d.height = g * m);
          const _ = d.getContext('2d');
          return (
            _.scale(m, m),
            _.clearRect(0, 0, d.width, d.height),
            _.beginPath(),
            _.translate(p / 2, g / 2),
            (_.fillStyle = fE[Math.floor(Math.random() * 3)]),
            (_.font = `${h || 12}px Arial`),
            (_.textBaseline = 'middle'),
            (_.textAlign = 'center'),
            _.fillText(f, 0, 0),
            d
          );
        },
        c = () => {
          e.textGroup = new Oi();
          for (let f = 0, h = Xd.length; f < h; f++) {
            const p = Math.acos(-1 + (2 * f) / h),
              g = Math.sqrt(h * Math.PI) * p,
              d = l(Xd[f], (Math.random() + 1) * 16, 600, 300),
              m = new Um(d);
            (m.generateMipmaps = !1), (m.minFilter = Ht), (m.magFilter = Ht);
            const _ = new ol({ map: m }),
              x = new Uu(_);
            x.scale.set(60, 30, 1),
              x.position.setFromSphericalCoords(50, p, g),
              e.textGroup.add(x);
          }
          e.scene.add(e.textGroup);
        },
        u = () => {
          t(), n(), r(), s(), c(), a();
        };
      return (
        Io(() => {
          u();
        }),
        (f, h) => (nn(), xn('div', dE))
      );
    },
  });
const Ha = i => (i * Math.PI) / 180,
  mE = (i, e, t) => {
    const n = 360 / e,
      r = [];
    for (let s = 0; s < e; s += 1) {
      const o = t != null && t.length ? Ha(t[s]) : Ha(n) * s;
      r.push({
        x: i * Math.cos(o),
        y: i * Math.sin(o),
        radius: t != null && t.length ? t[s] : n * s,
        radian: o,
      });
    }
    return r;
  },
  jd = (i, e, t, n) => {
    const r = 360 / t,
      s = [];
    for (let o = 0; o < t; o += 1) {
      const a = n != null && n.length ? Ha(n[o]) : Ha(r) * o,
        l =
          (i * e) /
          Math.sqrt(
            Math.pow(e * Math.cos(a), 2) + Math.pow(i * Math.sin(a), 2)
          );
      s.push({
        x: l * Math.cos(a),
        y: l * Math.sin(a),
        radius: n != null && n.length ? n[o] : r * o,
        radian: a,
      });
    }
    return s;
  },
  gE = { class: 'cloud' },
  _E = Dr({
    __name: 'Cloud',
    props: {
      data: { type: Array, required: !1, default: () => [] },
      radius: { type: Number, required: !1, default: 42 },
      fontSize: { type: Number, required: !1, default: 14 },
      textScale: { type: Number, required: !1, default: 2.5 },
    },
    setup(i) {
      const e = i,
        t = {
          container: null,
          width: 0,
          height: 0,
          scene: {},
          camera: {},
          renderer: {},
          controls: {},
          textGroup: {},
        },
        n = () => {
          var p, g, d, m;
          (t.container = document.querySelector('.cloud')),
            (t.width =
              (g = (p = t.container) == null ? void 0 : p.offsetWidth) != null
                ? g
                : 0),
            (t.height =
              (m = (d = t.container) == null ? void 0 : d.offsetHeight) != null
                ? m
                : 0),
            (t.scene = new zu()),
            (t.scene.fog = new Nu(14737632, 60, 125));
        },
        r = () => {
          (t.camera = new qt(75, t.width / t.height, 0.1, 1e3)),
            t.camera.position.set(0, 0, 100);
        },
        s = () => {
          (t.controls = new nf(t.camera, t.renderer.domElement)),
            (t.controls.enableDamping = !0),
            (t.controls.enableZoom = !1),
            (t.controls.autoRotate = !0);
        },
        o = () => {
          var g;
          const p = window.devicePixelRatio || 1;
          (t.renderer = new sl({ antialias: !0, alpha: !0 })),
            t.renderer.setClearColor(0, 0),
            t.renderer.setSize(t.width, t.height),
            t.renderer.setPixelRatio(p),
            (t.renderer.shadowMap.enabled = !0),
            (g = t.container) == null || g.appendChild(t.renderer.domElement);
        },
        a = (p, g, d, m, _, x) => {
          const v = window.devicePixelRatio || 1,
            y = document.createElement('canvas'),
            b = y.getContext('2d');
          b.font = `${g || 12}px Arial`;
          const T = 10,
            L = b.measureText(p).width + T * 2,
            M = g + T * 2,
            w = _ || (L > 70 ? L : 70),
            R = x || (M > 30 ? M : 30);
          if (
            ((y.width = w * v),
            (y.height = R * v),
            b.scale(v, v),
            b.clearRect(0, 0, y.width, y.height),
            m)
          ) {
            const B = w,
              I = R,
              X = 6;
            (b.lineWidth = 2),
              b.beginPath(),
              b.moveTo(0 + X, 0),
              b.arcTo(0 + B, 0, 0 + B, 0 + I, X),
              b.arcTo(0 + B, 0 + I, 0, 0 + I, X),
              b.arcTo(0, 0 + I, 0, 0, X),
              b.arcTo(0, 0, 0 + B, 0, X),
              b.closePath(),
              (b.fillStyle = m),
              b.fill();
          }
          return (
            b.translate(w / 2, R / 2),
            (b.font = `${g || 12}px Arial`),
            (b.textBaseline = 'middle'),
            (b.textAlign = 'center'),
            (b.fillStyle = d),
            b.fillText(p, 0, 0),
            y
          );
        },
        l = (p, g = 5) => {
          const d = p.width / p.height,
            m = new Um(p),
            _ = new ol({ map: m }),
            x = new Uu(_);
          return x.scale.set(g * d * e.textScale, g * e.textScale, 1), x;
        },
        c = () => {
          t.textGroup = new Oi();
          for (let p = 0, g = e.data.length; p < g; p++) {
            const d = a(e.data[p], (Math.random() + 1) * e.fontSize, '#2d3d5f'),
              m = l(d),
              _ = Math.acos(-1 + (2.5 * p) / g),
              x = Math.sqrt(g * Math.PI) * _;
            m.position.setFromSphericalCoords(e.radius, _, x),
              t.textGroup.add(m);
          }
          t.scene.add(t.textGroup);
        },
        u = () => {
          var p, g, d, m;
          (t.width =
            (g = (p = t.container) == null ? void 0 : p.offsetWidth) != null
              ? g
              : 0),
            (t.height =
              (m = (d = t.container) == null ? void 0 : d.offsetHeight) != null
                ? m
                : 0),
            (t.camera.aspect = t.width / t.height),
            t.camera.updateProjectionMatrix(),
            t.renderer.setSize(t.width, t.height),
            t.renderer.setPixelRatio(window.devicePixelRatio);
        },
        f = p => {
          p == null || p(),
            t.controls.update(),
            t.renderer.render(t.scene, t.camera),
            requestAnimationFrame(() => {
              f(p);
            });
        },
        h = () => {
          n(), r(), o(), s(), c(), f(() => {}), console.log(t);
        };
      return (
        Io(() => {
          h(), window.addEventListener('resize', u);
        }),
        wu(() => {
          window.removeEventListener('resize', u);
        }),
        (p, g) => (nn(), xn('div', gE))
      );
    },
  });
const xE = { class: 'scene-wrapper' },
  vE = { class: 'scene-content' },
  yE = { class: 'dimension' },
  ME = { class: 'dimension-text' },
  bE = { class: 'core' },
  SE = { class: 'core-content' },
  wE = { class: 'core-text' },
  TE = { class: 'word' },
  EE = Dr({
    __name: 'Index',
    setup(i) {
      const e = Hs({
          cR: 150,
          cCount: 10,
          a: 300,
          b: 60,
          dR: 300,
          dCount: 8,
          roundWidth: 8,
          roundHeight: 8,
          textWidth: 80,
          textHeight: 40,
        }),
        t = Bt(() =>
          mE(e.cR, Do.length).map((o, a) => ({
            x: o.x - e.textWidth / 2,
            y: o.y - e.textHeight / 2,
            fontSize: 10 * (Math.random() + 0.9),
            value: Do[a],
          }))
        ),
        n = [-10, 2, 12, 90, 168, 178, 190],
        r = Bt(() =>
          jd(e.a, e.b, n.length, n).map(o => ({
            ...o,
            x: o.x > 0 ? o.x + e.roundWidth * 0.2 : o.x - e.roundWidth * 0.8,
            y: o.y > 0 ? o.y + e.roundHeight : o.y + e.roundHeight * 1.2,
          }))
        ),
        s = Bt(() =>
          jd(e.a, e.b, Ga.length, n).map((o, a) => {
            let l = o.x > 0 ? o.x + e.textWidth * 0.1 : o.x - e.textWidth * 1.1,
              c = o.y > 0 ? o.y + e.textHeight * 0.4 : o.y - e.textHeight * 0.2;
            return (
              o.radius === 90 && (l = l - e.textWidth * 0.5),
              {
                ...o,
                x: l,
                y: c,
                align: o.radius === 90 ? 'center' : o.x > 0 ? 'left' : 'right',
                value: Ga[a],
              }
            );
          })
        );
      return (o, a) => (
        nn(),
        xn('div', xE, [
          Dn('div', vE, [
            Dn('div', yE, [
              Dn('div', ME, [
                (nn(!0),
                xn(
                  Vt,
                  null,
                  ya(
                    on(r),
                    (l, c) => (
                      nn(),
                      xn(
                        'div',
                        {
                          key: c,
                          class: 'round',
                          style: ds({
                            left: `${l.x}px`,
                            top: `${l.y}px`,
                            animationDelay: `${Math.random() * c}s`,
                          }),
                        },
                        null,
                        4
                      )
                    )
                  ),
                  128
                )),
                (nn(!0),
                xn(
                  Vt,
                  null,
                  ya(
                    on(s),
                    (l, c) => (
                      nn(),
                      xn(
                        'div',
                        {
                          key: c,
                          class: qa(['text', `text-${l.align}`]),
                          style: ds({ left: `${l.x}px`, top: `${l.y}px` }),
                        },
                        _c(l.value),
                        7
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            Dn('div', bE, [
              Dn('div', SE, [
                Dn('div', wE, [
                  (nn(!0),
                  xn(
                    Vt,
                    null,
                    ya(
                      on(t),
                      (l, c) => (
                        nn(),
                        xn(
                          'div',
                          {
                            key: c,
                            class: 'text',
                            style: ds({
                              top: `${l.y}px`,
                              left: `${l.x}px`,
                              fontSize: `${l.fontSize}px`,
                            }),
                          },
                          _c(l.value),
                          5
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
            Dn('div', TE, [jt(_E, { data: on(hE) }, null, 8, ['data'])]),
          ]),
        ])
      );
    },
  });
var Bg = {
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
  rf = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0,
  },
  AE = [
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
  Wa = { CSS: {}, springs: {} };
function Kn(i, e, t) {
  return Math.min(Math.max(i, e), t);
}
function go(i, e) {
  return i.indexOf(e) > -1;
}
function gc(i, e) {
  return i.apply(null, e);
}
var Le = {
  arr: function (i) {
    return Array.isArray(i);
  },
  obj: function (i) {
    return go(Object.prototype.toString.call(i), 'Object');
  },
  pth: function (i) {
    return Le.obj(i) && i.hasOwnProperty('totalLength');
  },
  svg: function (i) {
    return i instanceof SVGElement;
  },
  inp: function (i) {
    return i instanceof HTMLInputElement;
  },
  dom: function (i) {
    return i.nodeType || Le.svg(i);
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
    return Le.und(i) || i === null;
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
    return Le.hex(i) || Le.rgb(i) || Le.hsl(i);
  },
  key: function (i) {
    return (
      !Bg.hasOwnProperty(i) &&
      !rf.hasOwnProperty(i) &&
      i !== 'targets' &&
      i !== 'keyframes'
    );
  },
};
function kg(i) {
  var e = /\(([^)]+)\)/.exec(i);
  return e
    ? e[1].split(',').map(function (t) {
        return parseFloat(t);
      })
    : [];
}
function Vg(i, e) {
  var t = kg(i),
    n = Kn(Le.und(t[0]) ? 1 : t[0], 0.1, 100),
    r = Kn(Le.und(t[1]) ? 100 : t[1], 0.1, 100),
    s = Kn(Le.und(t[2]) ? 10 : t[2], 0.1, 100),
    o = Kn(Le.und(t[3]) ? 0 : t[3], 0.1, 100),
    a = Math.sqrt(r / n),
    l = s / (2 * Math.sqrt(r * n)),
    c = l < 1 ? a * Math.sqrt(1 - l * l) : 0,
    u = 1,
    f = l < 1 ? (l * a + -o) / c : -o + a;
  function h(g) {
    var d = e ? (e * g) / 1e3 : g;
    return (
      l < 1
        ? (d =
            Math.exp(-d * l * a) * (u * Math.cos(c * d) + f * Math.sin(c * d)))
        : (d = (u + f * d) * Math.exp(-d * a)),
      g === 0 || g === 1 ? g : 1 - d
    );
  }
  function p() {
    var g = Wa.springs[i];
    if (g) return g;
    for (var d = 1 / 6, m = 0, _ = 0; ; )
      if (((m += d), h(m) === 1)) {
        if ((_++, _ >= 16)) break;
      } else _ = 0;
    var x = m * d * 1e3;
    return (Wa.springs[i] = x), x;
  }
  return e ? h : p;
}
function CE(i) {
  return (
    i === void 0 && (i = 10),
    function (e) {
      return Math.ceil(Kn(e, 1e-6, 1) * i) * (1 / i);
    }
  );
}
var PE = (function () {
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
    function a(u, f, h, p, g) {
      var d,
        m,
        _ = 0;
      do (m = f + (h - f) / 2), (d = s(m, p, g) - u), d > 0 ? (h = m) : (f = m);
      while (Math.abs(d) > 1e-7 && ++_ < 10);
      return m;
    }
    function l(u, f, h, p) {
      for (var g = 0; g < 4; ++g) {
        var d = o(f, h, p);
        if (d === 0) return f;
        var m = s(f, h, p) - u;
        f -= m / d;
      }
      return f;
    }
    function c(u, f, h, p) {
      if (!(0 <= u && u <= 1 && 0 <= h && h <= 1)) return;
      var g = new Float32Array(i);
      if (u !== f || h !== p) for (var d = 0; d < i; ++d) g[d] = s(d * e, u, h);
      function m(_) {
        for (var x = 0, v = 1, y = i - 1; v !== y && g[v] <= _; ++v) x += e;
        --v;
        var b = (_ - g[v]) / (g[v + 1] - g[v]),
          T = x + b * e,
          L = o(T, u, h);
        return L >= 0.001 ? l(_, T, u, h) : L === 0 ? T : a(_, x, x + e, u, h);
      }
      return function (_) {
        return (u === f && h === p) || _ === 0 || _ === 1 ? _ : s(m(_), f, p);
      };
    }
    return c;
  })(),
  Gg = (function () {
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
          var s = Kn(n, 1, 10),
            o = Kn(r, 0.1, 2);
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
function sf(i, e) {
  if (Le.fnc(i)) return i;
  var t = i.split('(')[0],
    n = Gg[t],
    r = kg(i);
  switch (t) {
    case 'spring':
      return Vg(i, e);
    case 'cubicBezier':
      return gc(PE, r);
    case 'steps':
      return gc(CE, r);
    default:
      return gc(n, r);
  }
}
function Hg(i) {
  try {
    var e = document.querySelectorAll(i);
    return e;
  } catch {
    return;
  }
}
function ul(i, e) {
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
function fl(i) {
  return i.reduce(function (e, t) {
    return e.concat(Le.arr(t) ? fl(t) : t);
  }, []);
}
function Yd(i) {
  return Le.arr(i)
    ? i
    : (Le.str(i) && (i = Hg(i) || i),
      i instanceof NodeList || i instanceof HTMLCollection
        ? [].slice.call(i)
        : [i]);
}
function of(i, e) {
  return i.some(function (t) {
    return t === e;
  });
}
function af(i) {
  var e = {};
  for (var t in i) e[t] = i[t];
  return e;
}
function au(i, e) {
  var t = af(i);
  for (var n in i) t[n] = e.hasOwnProperty(n) ? e[n] : i[n];
  return t;
}
function hl(i, e) {
  var t = af(i);
  for (var n in e) t[n] = Le.und(i[n]) ? e[n] : i[n];
  return t;
}
function LE(i) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
  return e ? 'rgba(' + e[1] + ',1)' : i;
}
function RE(i) {
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
function DE(i) {
  var e =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(i) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(i),
    t = parseInt(e[1], 10) / 360,
    n = parseInt(e[2], 10) / 100,
    r = parseInt(e[3], 10) / 100,
    s = e[4] || 1;
  function o(h, p, g) {
    return (
      g < 0 && (g += 1),
      g > 1 && (g -= 1),
      g < 1 / 6
        ? h + (p - h) * 6 * g
        : g < 1 / 2
        ? p
        : g < 2 / 3
        ? h + (p - h) * (2 / 3 - g) * 6
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
function IE(i) {
  if (Le.rgb(i)) return LE(i);
  if (Le.hex(i)) return RE(i);
  if (Le.hsl(i)) return DE(i);
}
function gi(i) {
  var e =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      i
    );
  if (e) return e[1];
}
function OE(i) {
  if (go(i, 'translate') || i === 'perspective') return 'px';
  if (go(i, 'rotate') || go(i, 'skew')) return 'deg';
}
function lu(i, e) {
  return Le.fnc(i) ? i(e.target, e.id, e.total) : i;
}
function Jn(i, e) {
  return i.getAttribute(e);
}
function lf(i, e, t) {
  var n = gi(e);
  if (of([t, 'deg', 'rad', 'turn'], n)) return e;
  var r = Wa.CSS[e + t];
  if (!Le.und(r)) return r;
  var s = 100,
    o = document.createElement(i.tagName),
    a =
      i.parentNode && i.parentNode !== document ? i.parentNode : document.body;
  a.appendChild(o), (o.style.position = 'absolute'), (o.style.width = s + t);
  var l = s / o.offsetWidth;
  a.removeChild(o);
  var c = l * parseFloat(e);
  return (Wa.CSS[e + t] = c), c;
}
function Wg(i, e, t) {
  if (e in i.style) {
    var n = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      r = i.style[e] || getComputedStyle(i).getPropertyValue(n) || '0';
    return t ? lf(i, r, t) : r;
  }
}
function cf(i, e) {
  if (Le.dom(i) && !Le.inp(i) && (!Le.nil(Jn(i, e)) || (Le.svg(i) && i[e])))
    return 'attribute';
  if (Le.dom(i) && of(AE, e)) return 'transform';
  if (Le.dom(i) && e !== 'transform' && Wg(i, e)) return 'css';
  if (i[e] != null) return 'object';
}
function qg(i) {
  if (!!Le.dom(i)) {
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
function FE(i, e, t, n) {
  var r = go(e, 'scale') ? 1 : 0 + OE(e),
    s = qg(i).get(e) || r;
  return (
    t && (t.transforms.list.set(e, s), (t.transforms.last = e)),
    n ? lf(i, s, n) : s
  );
}
function uf(i, e, t, n) {
  switch (cf(i, e)) {
    case 'transform':
      return FE(i, e, n, t);
    case 'css':
      return Wg(i, e, t);
    case 'attribute':
      return Jn(i, e);
    default:
      return i[e] || 0;
  }
}
function ff(i, e) {
  var t = /^(\*=|\+=|-=)/.exec(i);
  if (!t) return i;
  var n = gi(i) || 0,
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
function Xg(i, e) {
  if (Le.col(i)) return IE(i);
  if (/\s/g.test(i)) return i;
  var t = gi(i),
    n = t ? i.substr(0, i.length - t.length) : i;
  return e ? n + e : n;
}
function hf(i, e) {
  return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
}
function NE(i) {
  return Math.PI * 2 * Jn(i, 'r');
}
function zE(i) {
  return Jn(i, 'width') * 2 + Jn(i, 'height') * 2;
}
function UE(i) {
  return hf(
    { x: Jn(i, 'x1'), y: Jn(i, 'y1') },
    { x: Jn(i, 'x2'), y: Jn(i, 'y2') }
  );
}
function jg(i) {
  for (var e = i.points, t = 0, n, r = 0; r < e.numberOfItems; r++) {
    var s = e.getItem(r);
    r > 0 && (t += hf(n, s)), (n = s);
  }
  return t;
}
function BE(i) {
  var e = i.points;
  return jg(i) + hf(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function Yg(i) {
  if (i.getTotalLength) return i.getTotalLength();
  switch (i.tagName.toLowerCase()) {
    case 'circle':
      return NE(i);
    case 'rect':
      return zE(i);
    case 'line':
      return UE(i);
    case 'polyline':
      return jg(i);
    case 'polygon':
      return BE(i);
  }
}
function kE(i) {
  var e = Yg(i);
  return i.setAttribute('stroke-dasharray', e), e;
}
function VE(i) {
  for (var e = i.parentNode; Le.svg(e) && Le.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function $g(i, e) {
  var t = e || {},
    n = t.el || VE(i),
    r = n.getBoundingClientRect(),
    s = Jn(n, 'viewBox'),
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
function GE(i, e) {
  var t = Le.str(i) ? Hg(i)[0] : i,
    n = e || 100;
  return function (r) {
    return { property: r, el: t, svg: $g(t), totalLength: Yg(t) * (n / 100) };
  };
}
function HE(i, e, t) {
  function n(u) {
    u === void 0 && (u = 0);
    var f = e + u >= 1 ? e + u : 0;
    return i.el.getPointAtLength(f);
  }
  var r = $g(i.el, i.svg),
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
function $d(i, e) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    n = Xg(Le.pth(i) ? i.totalLength : i, e) + '';
  return {
    original: n,
    numbers: n.match(t) ? n.match(t).map(Number) : [0],
    strings: Le.str(i) || e ? n.split(t) : [],
  };
}
function df(i) {
  var e = i ? fl(Le.arr(i) ? i.map(Yd) : Yd(i)) : [];
  return ul(e, function (t, n, r) {
    return r.indexOf(t) === n;
  });
}
function Zg(i) {
  var e = df(i);
  return e.map(function (t, n) {
    return { target: t, id: n, total: e.length, transforms: { list: qg(t) } };
  });
}
function WE(i, e) {
  var t = af(e);
  if ((/^spring/.test(t.easing) && (t.duration = Vg(t.easing)), Le.arr(i))) {
    var n = i.length,
      r = n === 2 && !Le.obj(i[0]);
    r
      ? (i = { value: i })
      : Le.fnc(e.duration) || (t.duration = e.duration / n);
  }
  var s = Le.arr(i) ? i : [i];
  return s
    .map(function (o, a) {
      var l = Le.obj(o) && !Le.pth(o) ? o : { value: o };
      return (
        Le.und(l.delay) && (l.delay = a ? 0 : e.delay),
        Le.und(l.endDelay) &&
          (l.endDelay = a === s.length - 1 ? e.endDelay : 0),
        l
      );
    })
    .map(function (o) {
      return hl(o, t);
    });
}
function qE(i) {
  for (
    var e = ul(
        fl(
          i.map(function (s) {
            return Object.keys(s);
          })
        ),
        function (s) {
          return Le.key(s);
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
            Le.key(c) ? c == o && (l.value = a[c]) : (l[c] = a[c]);
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
function XE(i, e) {
  var t = [],
    n = e.keyframes;
  n && (e = hl(qE(n), e));
  for (var r in e) Le.key(r) && t.push({ name: r, tweens: WE(e[r], i) });
  return t;
}
function jE(i, e) {
  var t = {};
  for (var n in i) {
    var r = lu(i[n], e);
    Le.arr(r) &&
      ((r = r.map(function (s) {
        return lu(s, e);
      })),
      r.length === 1 && (r = r[0])),
      (t[n] = r);
  }
  return (
    (t.duration = parseFloat(t.duration)), (t.delay = parseFloat(t.delay)), t
  );
}
function YE(i, e) {
  var t;
  return i.tweens.map(function (n) {
    var r = jE(n, e),
      s = r.value,
      o = Le.arr(s) ? s[1] : s,
      a = gi(o),
      l = uf(e.target, i.name, a, e),
      c = t ? t.to.original : l,
      u = Le.arr(s) ? s[0] : c,
      f = gi(u) || gi(l),
      h = a || f;
    return (
      Le.und(o) && (o = c),
      (r.from = $d(u, h)),
      (r.to = $d(ff(o, u), h)),
      (r.start = t ? t.end : 0),
      (r.end = r.start + r.delay + r.duration + r.endDelay),
      (r.easing = sf(r.easing, r.duration)),
      (r.isPath = Le.pth(s)),
      (r.isPathTargetInsideSVG = r.isPath && Le.svg(e.target)),
      (r.isColor = Le.col(r.from.original)),
      r.isColor && (r.round = 1),
      (t = r),
      r
    );
  });
}
var Kg = {
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
function Jg(i, e) {
  var t = Zg(i);
  t.forEach(function (n) {
    for (var r in e) {
      var s = lu(e[r], n),
        o = n.target,
        a = gi(s),
        l = uf(o, r, a, n),
        c = a || gi(l),
        u = ff(Xg(s, c), l),
        f = cf(o, r);
      Kg[f](o, r, u, n.transforms, !0);
    }
  });
}
function $E(i, e) {
  var t = cf(i.target, e.name);
  if (t) {
    var n = YE(e, i),
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
function ZE(i, e) {
  return ul(
    fl(
      i.map(function (t) {
        return e.map(function (n) {
          return $E(t, n);
        });
      })
    ),
    function (t) {
      return !Le.und(t);
    }
  );
}
function Qg(i, e) {
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
var Zd = 0;
function KE(i) {
  var e = au(Bg, i),
    t = au(rf, i),
    n = XE(t, i),
    r = Zg(i.targets),
    s = ZE(r, n),
    o = Qg(s, t),
    a = Zd;
  return (
    Zd++,
    hl(e, {
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
  e_ = (function () {
    var i;
    function e() {
      !i &&
        (!Kd() || !ut.suspendWhenDocumentHidden) &&
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
      !ut.suspendWhenDocumentHidden ||
        (Kd()
          ? (i = cancelAnimationFrame(i))
          : (Nn.forEach(function (r) {
              return r._onDocumentVisibility();
            }),
            e_()));
    }
    return (
      typeof document < 'u' && document.addEventListener('visibilitychange', n),
      e
    );
  })();
function Kd() {
  return !!document && document.hidden;
}
function ut(i) {
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
  var l = KE(i);
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
    (e = 0), (t = u(l.currentTime) * (1 / ut.speed));
  }
  function h(x, v) {
    v && v.seek(x - v.timelineOffset);
  }
  function p(x) {
    if (l.reversePlayback) for (var y = s; y--; ) h(x, r[y]);
    else for (var v = 0; v < s; v++) h(x, r[v]);
  }
  function g(x) {
    for (var v = 0, y = l.animations, b = y.length; v < b; ) {
      var T = y[v],
        L = T.animatable,
        M = T.tweens,
        w = M.length - 1,
        R = M[w];
      w &&
        (R =
          ul(M, function (F) {
            return x < F.end;
          })[0] || R);
      for (
        var q = Kn(x - R.start - R.delay, 0, R.duration) / R.duration,
          Q = isNaN(q) ? 1 : R.easing(q),
          B = R.to.strings,
          I = R.round,
          X = [],
          Z = R.to.numbers.length,
          $ = void 0,
          V = 0;
        V < Z;
        V++
      ) {
        var N = void 0,
          H = R.to.numbers[V],
          ue = R.from.numbers[V] || 0;
        R.isPath
          ? (N = HE(R.value, Q * H, R.isPathTargetInsideSVG))
          : (N = ue + Q * (H - ue)),
          I && ((R.isColor && V > 2) || (N = Math.round(N * I) / I)),
          X.push(N);
      }
      var te = B.length;
      if (!te) $ = X[0];
      else {
        $ = B[0];
        for (var de = 0; de < te; de++) {
          B[de];
          var xe = B[de + 1],
            G = X[de];
          isNaN(G) || (xe ? ($ += G + xe) : ($ += G + ' '));
        }
      }
      Kg[T.type](L.target, T.property, $, L.transforms),
        (T.currentValue = $),
        v++;
    }
  }
  function d(x) {
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
    (l.progress = Kn((T / v) * 100, 0, 100)),
      (l.reversePlayback = T < l.currentTime),
      r && p(T),
      !l.began && l.currentTime > 0 && ((l.began = !0), d('begin')),
      !l.loopBegan && l.currentTime > 0 && ((l.loopBegan = !0), d('loopBegin')),
      T <= y && l.currentTime !== 0 && g(0),
      ((T >= b && l.currentTime !== v) || !v) && g(v),
      T > y && T < b
        ? (l.changeBegan ||
            ((l.changeBegan = !0), (l.changeCompleted = !1), d('changeBegin')),
          d('change'),
          g(T))
        : l.changeBegan &&
          ((l.changeCompleted = !0), (l.changeBegan = !1), d('changeComplete')),
      (l.currentTime = Kn(T, 0, v)),
      l.began && d('update'),
      x >= v &&
        ((t = 0),
        m(),
        l.remaining
          ? ((e = n),
            d('loopComplete'),
            (l.loopBegan = !1),
            l.direction === 'alternate' && c())
          : ((l.paused = !0),
            l.completed ||
              ((l.completed = !0),
              d('loopComplete'),
              d('complete'),
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
      return Jg(x, v), l;
    }),
    (l.tick = function (x) {
      (n = x), e || (e = n), _((n + (t - e)) * ut.speed);
    }),
    (l.seek = function (x) {
      _(u(x));
    }),
    (l.pause = function () {
      (l.paused = !0), f();
    }),
    (l.play = function () {
      !l.paused ||
        (l.completed && l.reset(), (l.paused = !1), Nn.push(l), f(), e_());
    }),
    (l.reverse = function () {
      c(), (l.completed = !l.reversed), f();
    }),
    (l.restart = function () {
      l.reset(), l.play();
    }),
    (l.remove = function (x) {
      var v = df(x);
      t_(v, l);
    }),
    l.reset(),
    l.autoplay && l.play(),
    l
  );
}
function Jd(i, e) {
  for (var t = e.length; t--; ) of(i, e[t].animatable.target) && e.splice(t, 1);
}
function t_(i, e) {
  var t = e.animations,
    n = e.children;
  Jd(i, t);
  for (var r = n.length; r--; ) {
    var s = n[r],
      o = s.animations;
    Jd(i, o), !o.length && !s.children.length && n.splice(r, 1);
  }
  !t.length && !n.length && e.pause();
}
function JE(i) {
  for (var e = df(i), t = Nn.length; t--; ) {
    var n = Nn[t];
    t_(e, n);
  }
}
function QE(i, e) {
  e === void 0 && (e = {});
  var t = e.direction || 'normal',
    n = e.easing ? sf(e.easing) : null,
    r = e.grid,
    s = e.axis,
    o = e.from || 0,
    a = o === 'first',
    l = o === 'center',
    c = o === 'last',
    u = Le.arr(i),
    f = parseFloat(u ? i[0] : i),
    h = u ? parseFloat(i[1]) : 0,
    p = gi(u ? i[1] : i) || 0,
    g = e.start || 0 + (u ? f : 0),
    d = [],
    m = 0;
  return function (_, x, v) {
    if ((a && (o = 0), l && (o = (v - 1) / 2), c && (o = v - 1), !d.length)) {
      for (var y = 0; y < v; y++) {
        if (!r) d.push(Math.abs(o - y));
        else {
          var b = l ? (r[0] - 1) / 2 : o % r[0],
            T = l ? (r[1] - 1) / 2 : Math.floor(o / r[0]),
            L = y % r[0],
            M = Math.floor(y / r[0]),
            w = b - L,
            R = T - M,
            q = Math.sqrt(w * w + R * R);
          s === 'x' && (q = -w), s === 'y' && (q = -R), d.push(q);
        }
        m = Math.max.apply(Math, d);
      }
      n &&
        (d = d.map(function (B) {
          return n(B / m) * m;
        })),
        t === 'reverse' &&
          (d = d.map(function (B) {
            return s ? (B < 0 ? B * -1 : -B) : Math.abs(m - B);
          }));
    }
    var Q = u ? (h - f) / m : f;
    return g + Q * (Math.round(d[x] * 100) / 100) + p;
  };
}
function eA(i) {
  i === void 0 && (i = {});
  var e = ut(i);
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
      var l = hl(t, au(rf, i));
      l.targets = l.targets || i.targets;
      var c = e.duration;
      (l.autoplay = !1),
        (l.direction = e.direction),
        (l.timelineOffset = Le.und(n) ? c : ff(n, c)),
        o(e),
        e.seek(l.timelineOffset);
      var u = ut(l);
      o(u), s.push(u);
      var f = Qg(s, i);
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
ut.version = '3.2.1';
ut.speed = 1;
ut.suspendWhenDocumentHidden = !0;
ut.running = Nn;
ut.remove = JE;
ut.get = uf;
ut.set = Jg;
ut.convertPx = lf;
ut.path = GE;
ut.setDashoffset = kE;
ut.stagger = QE;
ut.timeline = eA;
ut.easing = sf;
ut.penner = Gg;
ut.random = function (i, e) {
  return Math.floor(Math.random() * (e - i + 1)) + i;
};
var tA =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  nA = { exports: {} };
/*!
 * TagCloud.js v2.3.0
 * Copyright (c) 2016-2022 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function (i, e) {
  (function (t, n) {
    i.exports = n();
  })(tA, function () {
    function t(f, h) {
      if (!(f instanceof h))
        throw new TypeError('Cannot call a class as a function');
    }
    function n(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        (g.enumerable = g.enumerable || !1),
          (g.configurable = !0),
          'value' in g && (g.writable = !0),
          Object.defineProperty(f, g.key, g);
      }
    }
    function r(f, h, p) {
      return h && n(f.prototype, h), p && n(f, p), f;
    }
    function s(f, h, p) {
      return (
        h in f
          ? Object.defineProperty(f, h, {
              value: p,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (f[h] = p),
        f
      );
    }
    function o() {
      return (
        (o =
          Object.assign ||
          function (f) {
            for (var h = 1; h < arguments.length; h++) {
              var p = arguments[h];
              for (var g in p)
                Object.prototype.hasOwnProperty.call(p, g) && (f[g] = p[g]);
            }
            return f;
          }),
        o.apply(this, arguments)
      );
    }
    function a(f, h) {
      var p = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h &&
          (g = g.filter(function (d) {
            return Object.getOwnPropertyDescriptor(f, d).enumerable;
          })),
          p.push.apply(p, g);
      }
      return p;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var p = arguments[h] != null ? arguments[h] : {};
        h % 2
          ? a(Object(p), !0).forEach(function (g) {
              s(f, g, p[g]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p))
          : a(Object(p)).forEach(function (g) {
              Object.defineProperty(
                f,
                g,
                Object.getOwnPropertyDescriptor(p, g)
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
          p = arguments.length > 1 ? arguments[1] : void 0,
          g = arguments.length > 2 ? arguments[2] : void 0;
        t(this, f);
        var d = this;
        if (!h || h.nodeType !== 1) return new Error('Incorrect element type');
        (d.$container = h),
          (d.texts = p || []),
          (d.config = l(l({}, f._defaultConfig), g || {})),
          (d.radius = d.config.radius),
          (d.depth = 2 * d.radius),
          (d.size = 1.5 * d.radius),
          (d.maxSpeed = f._getMaxSpeed(d.config.maxSpeed)),
          (d.initSpeed = f._getInitSpeed(d.config.initSpeed)),
          (d.direction = d.config.direction),
          (d.keep = d.config.keep),
          (d.paused = !1),
          d._createElment(),
          d._init(),
          f.list.push({ el: d.$el, container: h, instance: d });
      }
      return (
        r(
          f,
          [
            {
              key: '_createElment',
              value: function () {
                var p = this,
                  g = document.createElement('div');
                (g.className = p.config.containerClass),
                  p.config.useContainerInlineStyles &&
                    ((g.style.position = 'relative'),
                    (g.style.width = ''.concat(2 * p.radius, 'px')),
                    (g.style.height = ''.concat(2 * p.radius, 'px'))),
                  (p.items = []),
                  p.texts.forEach(function (d, m) {
                    var _ = p._createTextItem(d, m);
                    g.appendChild(_.el), p.items.push(_);
                  }),
                  p.$container.appendChild(g),
                  (p.$el = g);
              },
            },
            {
              key: '_createTextItem',
              value: function (p) {
                var g =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0,
                  d = this,
                  m = document.createElement('span');
                if (
                  ((m.className = d.config.itemClass),
                  d.config.useItemInlineStyles)
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
                return (m.innerText = p), l({ el: m }, d._computePosition(g));
              },
            },
            {
              key: '_computePosition',
              value: function (p) {
                var g =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1,
                  d = this,
                  m = d.texts.length;
                g && (p = Math.floor(Math.random() * (m + 1)));
                var _ = Math.acos(-1 + (2 * p + 1) / m),
                  x = Math.sqrt((m + 1) * Math.PI) * _;
                return {
                  x: (d.size * Math.cos(x) * Math.sin(_)) / 2,
                  y: (d.size * Math.sin(x) * Math.sin(_)) / 2,
                  z: (d.size * Math.cos(_)) / 2,
                };
              },
            },
            {
              key: '_requestInterval',
              value: function (p, g) {
                var d = (function () {
                    return window.requestAnimationFrame;
                  })(),
                  m = new Date().getTime(),
                  _ = {};
                function x() {
                  _.value = d(x);
                  var v = new Date().getTime(),
                    y = v - m;
                  y >= g && (p.call(), (m = new Date().getTime()));
                }
                return (_.value = d(x)), _;
              },
            },
            {
              key: '_init',
              value: function () {
                var p = this;
                (p.active = !1),
                  (p.mouseX0 =
                    p.initSpeed * Math.sin(p.direction * (Math.PI / 180))),
                  (p.mouseY0 =
                    -p.initSpeed * Math.cos(p.direction * (Math.PI / 180))),
                  (p.mouseX = p.mouseX0),
                  (p.mouseY = p.mouseY0);
                var g = window.matchMedia('(hover: hover)');
                (!g || g.matches) &&
                  (f._on(p.$el, 'mouseover', function () {
                    p.active = !0;
                  }),
                  f._on(p.$el, 'mouseout', function () {
                    p.active = !1;
                  }),
                  f._on(p.keep ? window : p.$el, 'mousemove', function (d) {
                    d = d || window.event;
                    var m = p.$el.getBoundingClientRect();
                    (p.mouseX = (d.clientX - (m.left + m.width / 2)) / 5),
                      (p.mouseY = (d.clientY - (m.top + m.height / 2)) / 5);
                  })),
                  p._next(),
                  (p.interval = p._requestInterval(function () {
                    p._next.call(p);
                  }, 10));
              },
            },
            {
              key: '_next',
              value: function () {
                var p = this;
                if (!p.paused) {
                  !p.keep &&
                    !p.active &&
                    ((p.mouseX =
                      Math.abs(p.mouseX - p.mouseX0) < 1
                        ? p.mouseX0
                        : (p.mouseX + p.mouseX0) / 2),
                    (p.mouseY =
                      Math.abs(p.mouseY - p.mouseY0) < 1
                        ? p.mouseY0
                        : (p.mouseY + p.mouseY0) / 2));
                  var g =
                      -(
                        Math.min(Math.max(-p.mouseY, -p.size), p.size) /
                        p.radius
                      ) * p.maxSpeed,
                    d =
                      (Math.min(Math.max(-p.mouseX, -p.size), p.size) /
                        p.radius) *
                      p.maxSpeed;
                  if (!(Math.abs(g) <= 0.01 && Math.abs(d) <= 0.01)) {
                    var m = Math.PI / 180,
                      _ = [
                        Math.sin(g * m),
                        Math.cos(g * m),
                        Math.sin(d * m),
                        Math.cos(d * m),
                      ];
                    p.items.forEach(function (x) {
                      var v = x.x,
                        y = x.y * _[1] + x.z * -_[0],
                        b = x.y * _[0] + x.z * _[1],
                        T = v * _[3] + b * _[2],
                        L = y,
                        M = b * _[3] - v * _[2],
                        w = (2 * p.depth) / (2 * p.depth + M);
                      (x.x = T), (x.y = L), (x.z = M), (x.scale = w.toFixed(3));
                      var R = w * w - 0.25;
                      R = (R > 1 ? 1 : R).toFixed(3);
                      var q = x.el,
                        Q = (x.x - q.offsetWidth / 2).toFixed(2),
                        B = (x.y - q.offsetHeight / 2).toFixed(2),
                        I = 'translate3d('
                          .concat(Q, 'px, ')
                          .concat(B, 'px, 0) scale(')
                          .concat(x.scale, ')');
                      (q.style.WebkitTransform = I),
                        (q.style.MozTransform = I),
                        (q.style.OTransform = I),
                        (q.style.transform = I),
                        (q.style.filter = 'alpha(opacity='.concat(
                          100 * R,
                          ')'
                        )),
                        (q.style.opacity = R);
                    });
                  }
                }
              },
            },
            {
              key: 'update',
              value: function (p) {
                var g = this;
                (g.texts = p || []),
                  g.texts.forEach(function (x, v) {
                    var y = g.items[v];
                    y ||
                      ((y = g._createTextItem(x, v)),
                      o(y, g._computePosition(v, !0)),
                      g.$el.appendChild(y.el),
                      g.items.push(y)),
                      (y.el.innerText = x);
                  });
                var d = g.texts.length,
                  m = g.items.length;
                if (d < m) {
                  var _ = g.items.splice(d, m - d);
                  _.forEach(function (x) {
                    g.$el.removeChild(x.el);
                  });
                }
              },
            },
            {
              key: 'destroy',
              value: function () {
                var p = this;
                p.interval = null;
                var g = f.list.findIndex(function (d) {
                  return d.el === p.$el;
                });
                g !== -1 && f.list.splice(g, 1),
                  p.$container && p.$el && p.$container.removeChild(p.$el);
              },
            },
            {
              key: 'pause',
              value: function () {
                var p = this;
                p.paused = !0;
              },
            },
            {
              key: 'resume',
              value: function () {
                var p = this;
                p.paused = !1;
              },
            },
          ],
          [
            {
              key: '_on',
              value: function (p, g, d, m) {
                p.addEventListener
                  ? p.addEventListener(g, d, m)
                  : p.attachEvent
                  ? p.attachEvent('on'.concat(g), d)
                  : (p['on'.concat(g)] = d);
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
    var u = function (f, h, p) {
      typeof f == 'string' && (f = document.querySelectorAll(f)),
        f.forEach || (f = [f]);
      var g = [];
      return (
        f.forEach(function (d) {
          d && g.push(new c(d, h, p));
        }),
        g.length <= 1 ? g[0] : g
      );
    };
    return u;
  });
})(nA);
const n_ = [
    { path: '/earth', name: 'Earth', component: uE },
    { path: '/textCloud', name: 'TextCloud', component: pE },
    { path: '/text', name: 'Text', component: EE },
  ],
  iA = Rv({
    history: $x(),
    routes: [{ path: '/', redirect: '/text1' }, ...n_],
  }),
  rA = { class: 'wrapper' },
  sA = { class: 'container' },
  oA = Dr({
    __name: 'App',
    setup(i) {
      return (e, t) => (
        nn(),
        xn('div', rA, [
          Dn('nav', null, [
            (nn(!0),
            xn(
              Vt,
              null,
              ya(
                on(n_),
                (n, r) => (
                  nn(),
                  X0(
                    on(um),
                    { key: n.name, to: n.path },
                    {
                      default: Dp(() => [
                        $p(_c(`${r ? ' | ' : ''}${n.name}`), 1),
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
          Dn('section', sA, [jt(on(fm))]),
        ])
      );
    },
  });
const pf = Ex(oA);
pf.use(Lx());
pf.use(iA);
pf.mount('#app');
