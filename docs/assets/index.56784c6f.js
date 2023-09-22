(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver(r => {
    for (const s of r)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
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
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
function Wa(n, e) {
  const t = Object.create(null),
    i = n.split(',');
  for (let r = 0; r < i.length; r++) t[i[r]] = !0;
  return e ? r => !!t[r.toLowerCase()] : r => !!t[r];
}
const ad =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  ld = Wa(ad);
function Yu(n) {
  return !!n || n === '';
}
function ni(n) {
  if (Oe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const i = n[t],
        r = vt(i) ? fd(i) : ni(i);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  } else {
    if (vt(n)) return n;
    if (tt(n)) return n;
  }
}
const cd = /;(?![^(]*\))/g,
  ud = /:(.+)/;
function fd(n) {
  const e = {};
  return (
    n.split(cd).forEach(t => {
      if (t) {
        const i = t.split(ud);
        i.length > 1 && (e[i[0].trim()] = i[1].trim());
      }
    }),
    e
  );
}
function Cr(n) {
  let e = '';
  if (vt(n)) e = n;
  else if (Oe(n))
    for (let t = 0; t < n.length; t++) {
      const i = Cr(n[t]);
      i && (e += i + ' ');
    }
  else if (tt(n)) for (const t in n) n[t] && (e += t + ' ');
  return e.trim();
}
const gr = n =>
    vt(n)
      ? n
      : n == null
      ? ''
      : Oe(n) || (tt(n) && (n.toString === Qu || !Ne(n.toString)))
      ? JSON.stringify(n, Zu, 2)
      : String(n),
  Zu = (n, e) =>
    e && e.__v_isRef
      ? Zu(n, e.value)
      : fr(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (t, [i, r]) => ((t[`${i} =>`] = r), t),
            {}
          ),
        }
      : Ku(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : tt(e) && !Oe(e) && !ef(e)
      ? String(e)
      : e,
  Ze = {},
  ur = [],
  on = () => {},
  hd = () => !1,
  dd = /^on[^a-z]/,
  to = n => dd.test(n),
  qa = n => n.startsWith('onUpdate:'),
  Tt = Object.assign,
  Xa = (n, e) => {
    const t = n.indexOf(e);
    t > -1 && n.splice(t, 1);
  },
  pd = Object.prototype.hasOwnProperty,
  Ge = (n, e) => pd.call(n, e),
  Oe = Array.isArray,
  fr = n => no(n) === '[object Map]',
  Ku = n => no(n) === '[object Set]',
  Ne = n => typeof n == 'function',
  vt = n => typeof n == 'string',
  ja = n => typeof n == 'symbol',
  tt = n => n !== null && typeof n == 'object',
  Ju = n => tt(n) && Ne(n.then) && Ne(n.catch),
  Qu = Object.prototype.toString,
  no = n => Qu.call(n),
  md = n => no(n).slice(8, -1),
  ef = n => no(n) === '[object Object]',
  $a = n => vt(n) && n !== 'NaN' && n[0] !== '-' && '' + parseInt(n, 10) === n,
  Us = Wa(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  io = n => {
    const e = Object.create(null);
    return t => e[t] || (e[t] = n(t));
  },
  gd = /-(\w)/g,
  _r = io(n => n.replace(gd, (e, t) => (t ? t.toUpperCase() : ''))),
  _d = /\B([A-Z])/g,
  Lr = io(n => n.replace(_d, '-$1').toLowerCase()),
  tf = io(n => n.charAt(0).toUpperCase() + n.slice(1)),
  So = io(n => (n ? `on${tf(n)}` : '')),
  Jr = (n, e) => !Object.is(n, e),
  wo = (n, e) => {
    for (let t = 0; t < n.length; t++) n[t](e);
  },
  qs = (n, e, t) => {
    Object.defineProperty(n, e, { configurable: !0, enumerable: !1, value: t });
  },
  vd = n => {
    const e = parseFloat(n);
    return isNaN(e) ? n : e;
  };
let Cl;
const xd = () =>
  Cl ||
  (Cl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let hn;
class nf {
  constructor(e = !1) {
    (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = hn),
      !e && hn && (this.index = (hn.scopes || (hn.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const t = hn;
      try {
        return (hn = this), e();
      } finally {
        hn = t;
      }
    }
  }
  on() {
    hn = this;
  }
  off() {
    hn = this.parent;
  }
  stop(e) {
    if (this.active) {
      let t, i;
      for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].stop();
      for (t = 0, i = this.cleanups.length; t < i; t++) this.cleanups[t]();
      if (this.scopes)
        for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].stop(!0);
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
function yd(n) {
  return new nf(n);
}
function Md(n, e = hn) {
  e && e.active && e.effects.push(n);
}
const Ya = n => {
    const e = new Set(n);
    return (e.w = 0), (e.n = 0), e;
  },
  rf = n => (n.w & ii) > 0,
  sf = n => (n.n & ii) > 0,
  bd = ({ deps: n }) => {
    if (n.length) for (let e = 0; e < n.length; e++) n[e].w |= ii;
  },
  Sd = n => {
    const { deps: e } = n;
    if (e.length) {
      let t = 0;
      for (let i = 0; i < e.length; i++) {
        const r = e[i];
        rf(r) && !sf(r) ? r.delete(n) : (e[t++] = r),
          (r.w &= ~ii),
          (r.n &= ~ii);
      }
      e.length = t;
    }
  },
  ga = new WeakMap();
let Wr = 0,
  ii = 1;
const _a = 30;
let Qt;
const wi = Symbol(''),
  va = Symbol('');
class Za {
  constructor(e, t = null, i) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Md(this, i);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Qt,
      t = Kn;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Qt),
        (Qt = this),
        (Kn = !0),
        (ii = 1 << ++Wr),
        Wr <= _a ? bd(this) : Ll(this),
        this.fn()
      );
    } finally {
      Wr <= _a && Sd(this),
        (ii = 1 << --Wr),
        (Qt = this.parent),
        (Kn = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Qt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ll(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ll(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let t = 0; t < e.length; t++) e[t].delete(n);
    e.length = 0;
  }
}
let Kn = !0;
const of = [];
function Pr() {
  of.push(Kn), (Kn = !1);
}
function Rr() {
  const n = of.pop();
  Kn = n === void 0 ? !0 : n;
}
function Bt(n, e, t) {
  if (Kn && Qt) {
    let i = ga.get(n);
    i || ga.set(n, (i = new Map()));
    let r = i.get(t);
    r || i.set(t, (r = Ya())), af(r);
  }
}
function af(n, e) {
  let t = !1;
  Wr <= _a ? sf(n) || ((n.n |= ii), (t = !rf(n))) : (t = !n.has(Qt)),
    t && (n.add(Qt), Qt.deps.push(n));
}
function In(n, e, t, i, r, s) {
  const o = ga.get(n);
  if (!o) return;
  let a = [];
  if (e === 'clear') a = [...o.values()];
  else if (t === 'length' && Oe(n))
    o.forEach((l, c) => {
      (c === 'length' || c >= i) && a.push(l);
    });
  else
    switch ((t !== void 0 && a.push(o.get(t)), e)) {
      case 'add':
        Oe(n)
          ? $a(t) && a.push(o.get('length'))
          : (a.push(o.get(wi)), fr(n) && a.push(o.get(va)));
        break;
      case 'delete':
        Oe(n) || (a.push(o.get(wi)), fr(n) && a.push(o.get(va)));
        break;
      case 'set':
        fr(n) && a.push(o.get(wi));
        break;
    }
  if (a.length === 1) a[0] && xa(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    xa(Ya(l));
  }
}
function xa(n, e) {
  const t = Oe(n) ? n : [...n];
  for (const i of t) i.computed && Pl(i);
  for (const i of t) i.computed || Pl(i);
}
function Pl(n, e) {
  (n !== Qt || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const wd = Wa('__proto__,__v_isRef,__isVue'),
  lf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(n => n !== 'arguments' && n !== 'caller')
      .map(n => Symbol[n])
      .filter(ja)
  ),
  Ed = Ka(),
  Td = Ka(!1, !0),
  Ad = Ka(!0),
  Rl = Cd();
function Cd() {
  const n = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(e => {
      n[e] = function (...t) {
        const i = We(this);
        for (let s = 0, o = this.length; s < o; s++) Bt(i, 'get', s + '');
        const r = i[e](...t);
        return r === -1 || r === !1 ? i[e](...t.map(We)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(e => {
      n[e] = function (...t) {
        Pr();
        const i = We(this)[e].apply(this, t);
        return Rr(), i;
      };
    }),
    n
  );
}
function Ka(n = !1, e = !1) {
  return function (i, r, s) {
    if (r === '__v_isReactive') return !n;
    if (r === '__v_isReadonly') return n;
    if (r === '__v_isShallow') return e;
    if (r === '__v_raw' && s === (n ? (e ? Wd : df) : e ? hf : ff).get(i))
      return i;
    const o = Oe(i);
    if (!n && o && Ge(Rl, r)) return Reflect.get(Rl, r, s);
    const a = Reflect.get(i, r, s);
    return (ja(r) ? lf.has(r) : wd(r)) || (n || Bt(i, 'get', r), e)
      ? a
      : Et(a)
      ? o && $a(r)
        ? a
        : a.value
      : tt(a)
      ? n
        ? pf(a)
        : Oi(a)
      : a;
  };
}
const Ld = cf(),
  Pd = cf(!0);
function cf(n = !1) {
  return function (t, i, r, s) {
    let o = t[i];
    if (vr(o) && Et(o) && !Et(r)) return !1;
    if (
      !n &&
      (!Xs(r) && !vr(r) && ((o = We(o)), (r = We(r))),
      !Oe(t) && Et(o) && !Et(r))
    )
      return (o.value = r), !0;
    const a = Oe(t) && $a(i) ? Number(i) < t.length : Ge(t, i),
      l = Reflect.set(t, i, r, s);
    return (
      t === We(s) && (a ? Jr(r, o) && In(t, 'set', i, r) : In(t, 'add', i, r)),
      l
    );
  };
}
function Rd(n, e) {
  const t = Ge(n, e);
  n[e];
  const i = Reflect.deleteProperty(n, e);
  return i && t && In(n, 'delete', e, void 0), i;
}
function Dd(n, e) {
  const t = Reflect.has(n, e);
  return (!ja(e) || !lf.has(e)) && Bt(n, 'has', e), t;
}
function Id(n) {
  return Bt(n, 'iterate', Oe(n) ? 'length' : wi), Reflect.ownKeys(n);
}
const uf = { get: Ed, set: Ld, deleteProperty: Rd, has: Dd, ownKeys: Id },
  Fd = {
    get: Ad,
    set(n, e) {
      return !0;
    },
    deleteProperty(n, e) {
      return !0;
    },
  },
  Od = Tt({}, uf, { get: Td, set: Pd }),
  Ja = n => n,
  ro = n => Reflect.getPrototypeOf(n);
function us(n, e, t = !1, i = !1) {
  n = n.__v_raw;
  const r = We(n),
    s = We(e);
  t || (e !== s && Bt(r, 'get', e), Bt(r, 'get', s));
  const { has: o } = ro(r),
    a = i ? Ja : t ? nl : Qr;
  if (o.call(r, e)) return a(n.get(e));
  if (o.call(r, s)) return a(n.get(s));
  n !== r && n.get(e);
}
function fs(n, e = !1) {
  const t = this.__v_raw,
    i = We(t),
    r = We(n);
  return (
    e || (n !== r && Bt(i, 'has', n), Bt(i, 'has', r)),
    n === r ? t.has(n) : t.has(n) || t.has(r)
  );
}
function hs(n, e = !1) {
  return (
    (n = n.__v_raw), !e && Bt(We(n), 'iterate', wi), Reflect.get(n, 'size', n)
  );
}
function Dl(n) {
  n = We(n);
  const e = We(this);
  return ro(e).has.call(e, n) || (e.add(n), In(e, 'add', n, n)), this;
}
function Il(n, e) {
  e = We(e);
  const t = We(this),
    { has: i, get: r } = ro(t);
  let s = i.call(t, n);
  s || ((n = We(n)), (s = i.call(t, n)));
  const o = r.call(t, n);
  return (
    t.set(n, e), s ? Jr(e, o) && In(t, 'set', n, e) : In(t, 'add', n, e), this
  );
}
function Fl(n) {
  const e = We(this),
    { has: t, get: i } = ro(e);
  let r = t.call(e, n);
  r || ((n = We(n)), (r = t.call(e, n))), i && i.call(e, n);
  const s = e.delete(n);
  return r && In(e, 'delete', n, void 0), s;
}
function Ol() {
  const n = We(this),
    e = n.size !== 0,
    t = n.clear();
  return e && In(n, 'clear', void 0, void 0), t;
}
function ds(n, e) {
  return function (i, r) {
    const s = this,
      o = s.__v_raw,
      a = We(o),
      l = e ? Ja : n ? nl : Qr;
    return (
      !n && Bt(a, 'iterate', wi), o.forEach((c, u) => i.call(r, l(c), l(u), s))
    );
  };
}
function ps(n, e, t) {
  return function (...i) {
    const r = this.__v_raw,
      s = We(r),
      o = fr(s),
      a = n === 'entries' || (n === Symbol.iterator && o),
      l = n === 'keys' && o,
      c = r[n](...i),
      u = t ? Ja : e ? nl : Qr;
    return (
      !e && Bt(s, 'iterate', l ? va : wi),
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
function Nn(n) {
  return function (...e) {
    return n === 'delete' ? !1 : this;
  };
}
function Nd() {
  const n = {
      get(s) {
        return us(this, s);
      },
      get size() {
        return hs(this);
      },
      has: fs,
      add: Dl,
      set: Il,
      delete: Fl,
      clear: Ol,
      forEach: ds(!1, !1),
    },
    e = {
      get(s) {
        return us(this, s, !1, !0);
      },
      get size() {
        return hs(this);
      },
      has: fs,
      add: Dl,
      set: Il,
      delete: Fl,
      clear: Ol,
      forEach: ds(!1, !0),
    },
    t = {
      get(s) {
        return us(this, s, !0);
      },
      get size() {
        return hs(this, !0);
      },
      has(s) {
        return fs.call(this, s, !0);
      },
      add: Nn('add'),
      set: Nn('set'),
      delete: Nn('delete'),
      clear: Nn('clear'),
      forEach: ds(!0, !1),
    },
    i = {
      get(s) {
        return us(this, s, !0, !0);
      },
      get size() {
        return hs(this, !0);
      },
      has(s) {
        return fs.call(this, s, !0);
      },
      add: Nn('add'),
      set: Nn('set'),
      delete: Nn('delete'),
      clear: Nn('clear'),
      forEach: ds(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(s => {
      (n[s] = ps(s, !1, !1)),
        (t[s] = ps(s, !0, !1)),
        (e[s] = ps(s, !1, !0)),
        (i[s] = ps(s, !0, !0));
    }),
    [n, t, e, i]
  );
}
const [zd, Ud, Bd, kd] = Nd();
function Qa(n, e) {
  const t = e ? (n ? kd : Bd) : n ? Ud : zd;
  return (i, r, s) =>
    r === '__v_isReactive'
      ? !n
      : r === '__v_isReadonly'
      ? n
      : r === '__v_raw'
      ? i
      : Reflect.get(Ge(t, r) && r in i ? t : i, r, s);
}
const Vd = { get: Qa(!1, !1) },
  Gd = { get: Qa(!1, !0) },
  Hd = { get: Qa(!0, !1) },
  ff = new WeakMap(),
  hf = new WeakMap(),
  df = new WeakMap(),
  Wd = new WeakMap();
function qd(n) {
  switch (n) {
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
function Xd(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : qd(md(n));
}
function Oi(n) {
  return vr(n) ? n : el(n, !1, uf, Vd, ff);
}
function jd(n) {
  return el(n, !1, Od, Gd, hf);
}
function pf(n) {
  return el(n, !0, Fd, Hd, df);
}
function el(n, e, t, i, r) {
  if (!tt(n) || (n.__v_raw && !(e && n.__v_isReactive))) return n;
  const s = r.get(n);
  if (s) return s;
  const o = Xd(n);
  if (o === 0) return n;
  const a = new Proxy(n, o === 2 ? i : t);
  return r.set(n, a), a;
}
function hr(n) {
  return vr(n) ? hr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function vr(n) {
  return !!(n && n.__v_isReadonly);
}
function Xs(n) {
  return !!(n && n.__v_isShallow);
}
function mf(n) {
  return hr(n) || vr(n);
}
function We(n) {
  const e = n && n.__v_raw;
  return e ? We(e) : n;
}
function tl(n) {
  return qs(n, '__v_skip', !0), n;
}
const Qr = n => (tt(n) ? Oi(n) : n),
  nl = n => (tt(n) ? pf(n) : n);
function gf(n) {
  Kn && Qt && ((n = We(n)), af(n.dep || (n.dep = Ya())));
}
function _f(n, e) {
  (n = We(n)), n.dep && xa(n.dep);
}
function Et(n) {
  return !!(n && n.__v_isRef === !0);
}
function jn(n) {
  return vf(n, !1);
}
function $d(n) {
  return vf(n, !0);
}
function vf(n, e) {
  return Et(n) ? n : new Yd(n, e);
}
class Yd {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : We(e)),
      (this._value = t ? e : Qr(e));
  }
  get value() {
    return gf(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Xs(e) || vr(e);
    (e = t ? e : We(e)),
      Jr(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : Qr(e)), _f(this));
  }
}
function ut(n) {
  return Et(n) ? n.value : n;
}
const Zd = {
  get: (n, e, t) => ut(Reflect.get(n, e, t)),
  set: (n, e, t, i) => {
    const r = n[e];
    return Et(r) && !Et(t) ? ((r.value = t), !0) : Reflect.set(n, e, t, i);
  },
};
function xf(n) {
  return hr(n) ? n : new Proxy(n, Zd);
}
var yf;
class Kd {
  constructor(e, t, i, r) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[yf] = !1),
      (this._dirty = !0),
      (this.effect = new Za(e, () => {
        this._dirty || ((this._dirty = !0), _f(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = i);
  }
  get value() {
    const e = We(this);
    return (
      gf(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
yf = '__v_isReadonly';
function Jd(n, e, t = !1) {
  let i, r;
  const s = Ne(n);
  return (
    s ? ((i = n), (r = on)) : ((i = n.get), (r = n.set)),
    new Kd(i, r, s || !r, t)
  );
}
function Jn(n, e, t, i) {
  let r;
  try {
    r = i ? n(...i) : n();
  } catch (s) {
    so(s, e, t);
  }
  return r;
}
function Xt(n, e, t, i) {
  if (Ne(n)) {
    const s = Jn(n, e, t, i);
    return (
      s &&
        Ju(s) &&
        s.catch(o => {
          so(o, e, t);
        }),
      s
    );
  }
  const r = [];
  for (let s = 0; s < n.length; s++) r.push(Xt(n[s], e, t, i));
  return r;
}
function so(n, e, t, i = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy,
      a = t;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](n, o, a) === !1) return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Jn(l, null, 10, [n, o, a]);
      return;
    }
  }
  Qd(n, t, r, i);
}
function Qd(n, e, t, i = !0) {
  console.error(n);
}
let es = !1,
  ya = !1;
const wt = [];
let mn = 0;
const dr = [];
let Cn = null,
  gi = 0;
const Mf = Promise.resolve();
let il = null;
function bf(n) {
  const e = il || Mf;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function ep(n) {
  let e = mn + 1,
    t = wt.length;
  for (; e < t; ) {
    const i = (e + t) >>> 1;
    ts(wt[i]) < n ? (e = i + 1) : (t = i);
  }
  return e;
}
function rl(n) {
  (!wt.length || !wt.includes(n, es && n.allowRecurse ? mn + 1 : mn)) &&
    (n.id == null ? wt.push(n) : wt.splice(ep(n.id), 0, n), Sf());
}
function Sf() {
  !es && !ya && ((ya = !0), (il = Mf.then(Ef)));
}
function tp(n) {
  const e = wt.indexOf(n);
  e > mn && wt.splice(e, 1);
}
function np(n) {
  Oe(n)
    ? dr.push(...n)
    : (!Cn || !Cn.includes(n, n.allowRecurse ? gi + 1 : gi)) && dr.push(n),
    Sf();
}
function Nl(n, e = es ? mn + 1 : 0) {
  for (; e < wt.length; e++) {
    const t = wt[e];
    t && t.pre && (wt.splice(e, 1), e--, t());
  }
}
function wf(n) {
  if (dr.length) {
    const e = [...new Set(dr)];
    if (((dr.length = 0), Cn)) {
      Cn.push(...e);
      return;
    }
    for (Cn = e, Cn.sort((t, i) => ts(t) - ts(i)), gi = 0; gi < Cn.length; gi++)
      Cn[gi]();
    (Cn = null), (gi = 0);
  }
}
const ts = n => (n.id == null ? 1 / 0 : n.id),
  ip = (n, e) => {
    const t = ts(n) - ts(e);
    if (t === 0) {
      if (n.pre && !e.pre) return -1;
      if (e.pre && !n.pre) return 1;
    }
    return t;
  };
function Ef(n) {
  (ya = !1), (es = !0), wt.sort(ip);
  const e = on;
  try {
    for (mn = 0; mn < wt.length; mn++) {
      const t = wt[mn];
      t && t.active !== !1 && Jn(t, null, 14);
    }
  } finally {
    (mn = 0),
      (wt.length = 0),
      wf(),
      (es = !1),
      (il = null),
      (wt.length || dr.length) && Ef();
  }
}
function rp(n, e, ...t) {
  if (n.isUnmounted) return;
  const i = n.vnode.props || Ze;
  let r = t;
  const s = e.startsWith('update:'),
    o = s && e.slice(7);
  if (o && o in i) {
    const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: f, trim: h } = i[u] || Ze;
    h && (r = t.map(p => p.trim())), f && (r = t.map(vd));
  }
  let a,
    l = i[(a = So(e))] || i[(a = So(_r(e)))];
  !l && s && (l = i[(a = So(Lr(e)))]), l && Xt(l, n, 6, r);
  const c = i[a + 'Once'];
  if (c) {
    if (!n.emitted) n.emitted = {};
    else if (n.emitted[a]) return;
    (n.emitted[a] = !0), Xt(c, n, 6, r);
  }
}
function Tf(n, e, t = !1) {
  const i = e.emitsCache,
    r = i.get(n);
  if (r !== void 0) return r;
  const s = n.emits;
  let o = {},
    a = !1;
  if (!Ne(n)) {
    const l = c => {
      const u = Tf(c, e, !0);
      u && ((a = !0), Tt(o, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l),
      n.extends && l(n.extends),
      n.mixins && n.mixins.forEach(l);
  }
  return !s && !a
    ? (tt(n) && i.set(n, null), null)
    : (Oe(s) ? s.forEach(l => (o[l] = null)) : Tt(o, s),
      tt(n) && i.set(n, o),
      o);
}
function oo(n, e) {
  return !n || !to(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      Ge(n, e[0].toLowerCase() + e.slice(1)) || Ge(n, Lr(e)) || Ge(n, e));
}
let rn = null,
  Af = null;
function js(n) {
  const e = rn;
  return (rn = n), (Af = (n && n.type.__scopeId) || null), e;
}
function Cf(n, e = rn, t) {
  if (!e || n._n) return n;
  const i = (...r) => {
    i._d && jl(-1);
    const s = js(e);
    let o;
    try {
      o = n(...r);
    } finally {
      js(s), i._d && jl(1);
    }
    return o;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function Eo(n) {
  const {
    type: e,
    vnode: t,
    proxy: i,
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
    inheritAttrs: m,
  } = n;
  let d, _;
  const x = js(n);
  try {
    if (t.shapeFlag & 4) {
      const S = r || i;
      (d = dn(u.call(S, S, f, s, p, h, g))), (_ = l);
    } else {
      const S = e;
      (d = dn(
        S.length > 1 ? S(s, { attrs: l, slots: a, emit: c }) : S(s, null)
      )),
        (_ = e.props ? l : sp(l));
    }
  } catch (S) {
    ($r.length = 0), so(S, n, 1), (d = _t(Pn));
  }
  let M = d;
  if (_ && m !== !1) {
    const S = Object.keys(_),
      { shapeFlag: b } = M;
    S.length && b & 7 && (o && S.some(qa) && (_ = op(_, o)), (M = ri(M, _)));
  }
  return (
    t.dirs && ((M = ri(M)), (M.dirs = M.dirs ? M.dirs.concat(t.dirs) : t.dirs)),
    t.transition && (M.transition = t.transition),
    (d = M),
    js(x),
    d
  );
}
const sp = n => {
    let e;
    for (const t in n)
      (t === 'class' || t === 'style' || to(t)) && ((e || (e = {}))[t] = n[t]);
    return e;
  },
  op = (n, e) => {
    const t = {};
    for (const i in n) (!qa(i) || !(i.slice(9) in e)) && (t[i] = n[i]);
    return t;
  };
function ap(n, e, t) {
  const { props: i, children: r, component: s } = n,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (t && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return i ? zl(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== i[h] && !oo(c, h)) return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : i === o
      ? !1
      : i
      ? o
        ? zl(i, o, c)
        : !0
      : !!o;
  return !1;
}
function zl(n, e, t) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(n).length) return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== n[s] && !oo(t, s)) return !0;
  }
  return !1;
}
function lp({ vnode: n, parent: e }, t) {
  for (; e && e.subTree === n; ) ((n = e.vnode).el = t), (e = e.parent);
}
const cp = n => n.__isSuspense;
function up(n, e) {
  e && e.pendingBranch
    ? Oe(n)
      ? e.effects.push(...n)
      : e.effects.push(n)
    : np(n);
}
function Bs(n, e) {
  if (xt) {
    let t = xt.provides;
    const i = xt.parent && xt.parent.provides;
    i === t && (t = xt.provides = Object.create(i)), (t[n] = e);
  }
}
function Qn(n, e, t = !1) {
  const i = xt || rn;
  if (i) {
    const r =
      i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides;
    if (r && n in r) return r[n];
    if (arguments.length > 1) return t && Ne(e) ? e.call(i.proxy) : e;
  }
}
const Ul = {};
function ks(n, e, t) {
  return Lf(n, e, t);
}
function Lf(
  n,
  e,
  { immediate: t, deep: i, flush: r, onTrack: s, onTrigger: o } = Ze
) {
  const a = xt;
  let l,
    c = !1,
    u = !1;
  if (
    (Et(n)
      ? ((l = () => n.value), (c = Xs(n)))
      : hr(n)
      ? ((l = () => n), (i = !0))
      : Oe(n)
      ? ((u = !0),
        (c = n.some(_ => hr(_) || Xs(_))),
        (l = () =>
          n.map(_ => {
            if (Et(_)) return _.value;
            if (hr(_)) return yi(_);
            if (Ne(_)) return Jn(_, a, 2);
          })))
      : Ne(n)
      ? e
        ? (l = () => Jn(n, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), Xt(n, a, 3, [h]);
          })
      : (l = on),
    e && i)
  ) {
    const _ = l;
    l = () => yi(_());
  }
  let f,
    h = _ => {
      f = d.onStop = () => {
        Jn(_, a, 4);
      };
    };
  if (is)
    return (h = on), e ? t && Xt(e, a, 3, [l(), u ? [] : void 0, h]) : l(), on;
  let p = u ? [] : Ul;
  const g = () => {
    if (!!d.active)
      if (e) {
        const _ = d.run();
        (i || c || (u ? _.some((x, M) => Jr(x, p[M])) : Jr(_, p))) &&
          (f && f(), Xt(e, a, 3, [_, p === Ul ? void 0 : p, h]), (p = _));
      } else d.run();
  };
  g.allowRecurse = !!e;
  let m;
  r === 'sync'
    ? (m = g)
    : r === 'post'
    ? (m = () => Dt(g, a && a.suspense))
    : ((g.pre = !0), a && (g.id = a.uid), (m = () => rl(g)));
  const d = new Za(l, m);
  return (
    e
      ? t
        ? g()
        : (p = d.run())
      : r === 'post'
      ? Dt(d.run.bind(d), a && a.suspense)
      : d.run(),
    () => {
      d.stop(), a && a.scope && Xa(a.scope.effects, d);
    }
  );
}
function fp(n, e, t) {
  const i = this.proxy,
    r = vt(n) ? (n.includes('.') ? Pf(i, n) : () => i[n]) : n.bind(i, i);
  let s;
  Ne(e) ? (s = e) : ((s = e.handler), (t = e));
  const o = xt;
  yr(this);
  const a = Lf(r, s.bind(i), t);
  return o ? yr(o) : Ei(), a;
}
function Pf(n, e) {
  const t = e.split('.');
  return () => {
    let i = n;
    for (let r = 0; r < t.length && i; r++) i = i[t[r]];
    return i;
  };
}
function yi(n, e) {
  if (!tt(n) || n.__v_skip || ((e = e || new Set()), e.has(n))) return n;
  if ((e.add(n), Et(n))) yi(n.value, e);
  else if (Oe(n)) for (let t = 0; t < n.length; t++) yi(n[t], e);
  else if (Ku(n) || fr(n))
    n.forEach(t => {
      yi(t, e);
    });
  else if (ef(n)) for (const t in n) yi(n[t], e);
  return n;
}
function hp() {
  const n = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    os(() => {
      n.isMounted = !0;
    }),
    Ff(() => {
      n.isUnmounting = !0;
    }),
    n
  );
}
const Gt = [Function, Array],
  dp = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Gt,
      onEnter: Gt,
      onAfterEnter: Gt,
      onEnterCancelled: Gt,
      onBeforeLeave: Gt,
      onLeave: Gt,
      onAfterLeave: Gt,
      onLeaveCancelled: Gt,
      onBeforeAppear: Gt,
      onAppear: Gt,
      onAfterAppear: Gt,
      onAppearCancelled: Gt,
    },
    setup(n, { slots: e }) {
      const t = Kp(),
        i = hp();
      let r;
      return () => {
        const s = e.default && Df(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const m of s)
            if (m.type !== Pn) {
              o = m;
              break;
            }
        }
        const a = We(n),
          { mode: l } = a;
        if (i.isLeaving) return To(o);
        const c = Bl(o);
        if (!c) return To(o);
        const u = Ma(c, a, i, t);
        ba(c, u);
        const f = t.subTree,
          h = f && Bl(f);
        let p = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const m = g();
          r === void 0 ? (r = m) : m !== r && ((r = m), (p = !0));
        }
        if (h && h.type !== Pn && (!_i(c, h) || p)) {
          const m = Ma(h, a, i, t);
          if ((ba(h, m), l === 'out-in'))
            return (
              (i.isLeaving = !0),
              (m.afterLeave = () => {
                (i.isLeaving = !1), t.update();
              }),
              To(o)
            );
          l === 'in-out' &&
            c.type !== Pn &&
            (m.delayLeave = (d, _, x) => {
              const M = Rf(i, h);
              (M[String(h.key)] = h),
                (d._leaveCb = () => {
                  _(), (d._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = x);
            });
        }
        return o;
      };
    },
  },
  pp = dp;
function Rf(n, e) {
  const { leavingVNodes: t } = n;
  let i = t.get(e.type);
  return i || ((i = Object.create(null)), t.set(e.type, i)), i;
}
function Ma(n, e, t, i) {
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
      onBeforeAppear: m,
      onAppear: d,
      onAfterAppear: _,
      onAppearCancelled: x,
    } = e,
    M = String(n.key),
    S = Rf(t, n),
    b = (y, L) => {
      y && Xt(y, i, 9, L);
    },
    P = (y, L) => {
      const R = L[1];
      b(y, L),
        Oe(y) ? y.every(Y => Y.length <= 1) && R() : y.length <= 1 && R();
    },
    B = {
      mode: s,
      persisted: o,
      beforeEnter(y) {
        let L = a;
        if (!t.isMounted)
          if (r) L = m || a;
          else return;
        y._leaveCb && y._leaveCb(!0);
        const R = S[M];
        R && _i(n, R) && R.el._leaveCb && R.el._leaveCb(), b(L, [y]);
      },
      enter(y) {
        let L = l,
          R = c,
          Y = u;
        if (!t.isMounted)
          if (r) (L = d || l), (R = _ || c), (Y = x || u);
          else return;
        let de = !1;
        const G = (y._enterCb = N => {
          de ||
            ((de = !0),
            N ? b(Y, [y]) : b(R, [y]),
            B.delayedLeave && B.delayedLeave(),
            (y._enterCb = void 0));
        });
        L ? P(L, [y, G]) : G();
      },
      leave(y, L) {
        const R = String(n.key);
        if ((y._enterCb && y._enterCb(!0), t.isUnmounting)) return L();
        b(f, [y]);
        let Y = !1;
        const de = (y._leaveCb = G => {
          Y ||
            ((Y = !0),
            L(),
            G ? b(g, [y]) : b(p, [y]),
            (y._leaveCb = void 0),
            S[R] === n && delete S[R]);
        });
        (S[R] = n), h ? P(h, [y, de]) : de();
      },
      clone(y) {
        return Ma(y, e, t, i);
      },
    };
  return B;
}
function To(n) {
  if (ao(n)) return (n = ri(n)), (n.children = null), n;
}
function Bl(n) {
  return ao(n) ? (n.children ? n.children[0] : void 0) : n;
}
function ba(n, e) {
  n.shapeFlag & 6 && n.component
    ? ba(n.component.subTree, e)
    : n.shapeFlag & 128
    ? ((n.ssContent.transition = e.clone(n.ssContent)),
      (n.ssFallback.transition = e.clone(n.ssFallback)))
    : (n.transition = e);
}
function Df(n, e = !1, t) {
  let i = [],
    r = 0;
  for (let s = 0; s < n.length; s++) {
    let o = n[s];
    const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : s);
    o.type === St
      ? (o.patchFlag & 128 && r++, (i = i.concat(Df(o.children, e, a))))
      : (e || o.type !== Pn) && i.push(a != null ? ri(o, { key: a }) : o);
  }
  if (r > 1) for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
  return i;
}
function xn(n) {
  return Ne(n) ? { setup: n, name: n.name } : n;
}
const Vs = n => !!n.type.__asyncLoader,
  ao = n => n.type.__isKeepAlive;
function mp(n, e) {
  If(n, 'a', e);
}
function gp(n, e) {
  If(n, 'da', e);
}
function If(n, e, t = xt) {
  const i =
    n.__wdc ||
    (n.__wdc = () => {
      let r = t;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return n();
    });
  if ((lo(e, i, t), t)) {
    let r = t.parent;
    for (; r && r.parent; )
      ao(r.parent.vnode) && _p(i, e, t, r), (r = r.parent);
  }
}
function _p(n, e, t, i) {
  const r = lo(e, n, i, !0);
  Of(() => {
    Xa(i[e], r);
  }, t);
}
function lo(n, e, t = xt, i = !1) {
  if (t) {
    const r = t[n] || (t[n] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          if (t.isUnmounted) return;
          Pr(), yr(t);
          const a = Xt(e, t, n, o);
          return Ei(), Rr(), a;
        });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Fn =
    n =>
    (e, t = xt) =>
      (!is || n === 'sp') && lo(n, (...i) => e(...i), t),
  vp = Fn('bm'),
  os = Fn('m'),
  xp = Fn('bu'),
  yp = Fn('u'),
  Ff = Fn('bum'),
  Of = Fn('um'),
  Mp = Fn('sp'),
  bp = Fn('rtg'),
  Sp = Fn('rtc');
function wp(n, e = xt) {
  lo('ec', n, e);
}
function kl(n, e) {
  const t = rn;
  if (t === null) return n;
  const i = uo(t) || t.proxy,
    r = n.dirs || (n.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [o, a, l, c = Ze] = e[s];
    Ne(o) && (o = { mounted: o, updated: o }),
      o.deep && yi(a),
      r.push({
        dir: o,
        instance: i,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      });
  }
  return n;
}
function li(n, e, t, i) {
  const r = n.dirs,
    s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[i];
    l && (Pr(), Xt(l, t, 8, [n.el, a, n, e]), Rr());
  }
}
const Ep = Symbol();
function xr(n, e, t, i) {
  let r;
  const s = t && t[i];
  if (Oe(n) || vt(n)) {
    r = new Array(n.length);
    for (let o = 0, a = n.length; o < a; o++)
      r[o] = e(n[o], o, void 0, s && s[o]);
  } else if (typeof n == 'number') {
    r = new Array(n);
    for (let o = 0; o < n; o++) r[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (tt(n))
    if (n[Symbol.iterator])
      r = Array.from(n, (o, a) => e(o, a, void 0, s && s[a]));
    else {
      const o = Object.keys(n);
      r = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        r[a] = e(n[c], c, a, s && s[a]);
      }
    }
  else r = [];
  return t && (t[i] = r), r;
}
const Sa = n => (n ? (jf(n) ? uo(n) || n.proxy : Sa(n.parent)) : null),
  $s = Tt(Object.create(null), {
    $: n => n,
    $el: n => n.vnode.el,
    $data: n => n.data,
    $props: n => n.props,
    $attrs: n => n.attrs,
    $slots: n => n.slots,
    $refs: n => n.refs,
    $parent: n => Sa(n.parent),
    $root: n => Sa(n.root),
    $emit: n => n.emit,
    $options: n => sl(n),
    $forceUpdate: n => n.f || (n.f = () => rl(n.update)),
    $nextTick: n => n.n || (n.n = bf.bind(n.proxy)),
    $watch: n => fp.bind(n),
  }),
  Tp = {
    get({ _: n }, e) {
      const {
        ctx: t,
        setupState: i,
        data: r,
        props: s,
        accessCache: o,
        type: a,
        appContext: l,
      } = n;
      let c;
      if (e[0] !== '$') {
        const p = o[e];
        if (p !== void 0)
          switch (p) {
            case 1:
              return i[e];
            case 2:
              return r[e];
            case 4:
              return t[e];
            case 3:
              return s[e];
          }
        else {
          if (i !== Ze && Ge(i, e)) return (o[e] = 1), i[e];
          if (r !== Ze && Ge(r, e)) return (o[e] = 2), r[e];
          if ((c = n.propsOptions[0]) && Ge(c, e)) return (o[e] = 3), s[e];
          if (t !== Ze && Ge(t, e)) return (o[e] = 4), t[e];
          wa && (o[e] = 0);
        }
      }
      const u = $s[e];
      let f, h;
      if (u) return e === '$attrs' && Bt(n, 'get', e), u(n);
      if ((f = a.__cssModules) && (f = f[e])) return f;
      if (t !== Ze && Ge(t, e)) return (o[e] = 4), t[e];
      if (((h = l.config.globalProperties), Ge(h, e))) return h[e];
    },
    set({ _: n }, e, t) {
      const { data: i, setupState: r, ctx: s } = n;
      return r !== Ze && Ge(r, e)
        ? ((r[e] = t), !0)
        : i !== Ze && Ge(i, e)
        ? ((i[e] = t), !0)
        : Ge(n.props, e) || (e[0] === '$' && e.slice(1) in n)
        ? !1
        : ((s[e] = t), !0);
    },
    has(
      {
        _: {
          data: n,
          setupState: e,
          accessCache: t,
          ctx: i,
          appContext: r,
          propsOptions: s,
        },
      },
      o
    ) {
      let a;
      return (
        !!t[o] ||
        (n !== Ze && Ge(n, o)) ||
        (e !== Ze && Ge(e, o)) ||
        ((a = s[0]) && Ge(a, o)) ||
        Ge(i, o) ||
        Ge($s, o) ||
        Ge(r.config.globalProperties, o)
      );
    },
    defineProperty(n, e, t) {
      return (
        t.get != null
          ? (n._.accessCache[e] = 0)
          : Ge(t, 'value') && this.set(n, e, t.value, null),
        Reflect.defineProperty(n, e, t)
      );
    },
  };
let wa = !0;
function Ap(n) {
  const e = sl(n),
    t = n.proxy,
    i = n.ctx;
  (wa = !1), e.beforeCreate && Vl(e.beforeCreate, n, 'bc');
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
    activated: m,
    deactivated: d,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: M,
    unmounted: S,
    render: b,
    renderTracked: P,
    renderTriggered: B,
    errorCaptured: y,
    serverPrefetch: L,
    expose: R,
    inheritAttrs: Y,
    components: de,
    directives: G,
    filters: N,
  } = e;
  if ((c && Cp(c, i, null, n.appContext.config.unwrapInjectedRef), o))
    for (const Z in o) {
      const W = o[Z];
      Ne(W) && (i[Z] = W.bind(t));
    }
  if (r) {
    const Z = r.call(t, t);
    tt(Z) && (n.data = Oi(Z));
  }
  if (((wa = !0), s))
    for (const Z in s) {
      const W = s[Z],
        z = Ne(W) ? W.bind(t, t) : Ne(W.get) ? W.get.bind(t, t) : on,
        X = !Ne(W) && Ne(W.set) ? W.set.bind(t) : on,
        ue = gt({ get: z, set: X });
      Object.defineProperty(i, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: oe => (ue.value = oe),
      });
    }
  if (a) for (const Z in a) Nf(a[Z], i, t, Z);
  if (l) {
    const Z = Ne(l) ? l.call(t) : l;
    Reflect.ownKeys(Z).forEach(W => {
      Bs(W, Z[W]);
    });
  }
  u && Vl(u, n, 'c');
  function ie(Z, W) {
    Oe(W) ? W.forEach(z => Z(z.bind(t))) : W && Z(W.bind(t));
  }
  if (
    (ie(vp, f),
    ie(os, h),
    ie(xp, p),
    ie(yp, g),
    ie(mp, m),
    ie(gp, d),
    ie(wp, y),
    ie(Sp, P),
    ie(bp, B),
    ie(Ff, x),
    ie(Of, S),
    ie(Mp, L),
    Oe(R))
  )
    if (R.length) {
      const Z = n.exposed || (n.exposed = {});
      R.forEach(W => {
        Object.defineProperty(Z, W, { get: () => t[W], set: z => (t[W] = z) });
      });
    } else n.exposed || (n.exposed = {});
  b && n.render === on && (n.render = b),
    Y != null && (n.inheritAttrs = Y),
    de && (n.components = de),
    G && (n.directives = G);
}
function Cp(n, e, t = on, i = !1) {
  Oe(n) && (n = Ea(n));
  for (const r in n) {
    const s = n[r];
    let o;
    tt(s)
      ? 'default' in s
        ? (o = Qn(s.from || r, s.default, !0))
        : (o = Qn(s.from || r))
      : (o = Qn(s)),
      Et(o) && i
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => (o.value = a),
          })
        : (e[r] = o);
  }
}
function Vl(n, e, t) {
  Xt(Oe(n) ? n.map(i => i.bind(e.proxy)) : n.bind(e.proxy), e, t);
}
function Nf(n, e, t, i) {
  const r = i.includes('.') ? Pf(t, i) : () => t[i];
  if (vt(n)) {
    const s = e[n];
    Ne(s) && ks(r, s);
  } else if (Ne(n)) ks(r, n.bind(t));
  else if (tt(n))
    if (Oe(n)) n.forEach(s => Nf(s, e, t, i));
    else {
      const s = Ne(n.handler) ? n.handler.bind(t) : e[n.handler];
      Ne(s) && ks(r, s, n);
    }
}
function sl(n) {
  const e = n.type,
    { mixins: t, extends: i } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: o },
    } = n.appContext,
    a = s.get(e);
  let l;
  return (
    a
      ? (l = a)
      : !r.length && !t && !i
      ? (l = e)
      : ((l = {}), r.length && r.forEach(c => Ys(l, c, o, !0)), Ys(l, e, o)),
    tt(e) && s.set(e, l),
    l
  );
}
function Ys(n, e, t, i = !1) {
  const { mixins: r, extends: s } = e;
  s && Ys(n, s, t, !0), r && r.forEach(o => Ys(n, o, t, !0));
  for (const o in e)
    if (!(i && o === 'expose')) {
      const a = Lp[o] || (t && t[o]);
      n[o] = a ? a(n[o], e[o]) : e[o];
    }
  return n;
}
const Lp = {
  data: Gl,
  props: di,
  emits: di,
  methods: di,
  computed: di,
  beforeCreate: Lt,
  created: Lt,
  beforeMount: Lt,
  mounted: Lt,
  beforeUpdate: Lt,
  updated: Lt,
  beforeDestroy: Lt,
  beforeUnmount: Lt,
  destroyed: Lt,
  unmounted: Lt,
  activated: Lt,
  deactivated: Lt,
  errorCaptured: Lt,
  serverPrefetch: Lt,
  components: di,
  directives: di,
  watch: Rp,
  provide: Gl,
  inject: Pp,
};
function Gl(n, e) {
  return e
    ? n
      ? function () {
          return Tt(
            Ne(n) ? n.call(this, this) : n,
            Ne(e) ? e.call(this, this) : e
          );
        }
      : e
    : n;
}
function Pp(n, e) {
  return di(Ea(n), Ea(e));
}
function Ea(n) {
  if (Oe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Lt(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function di(n, e) {
  return n ? Tt(Tt(Object.create(null), n), e) : e;
}
function Rp(n, e) {
  if (!n) return e;
  if (!e) return n;
  const t = Tt(Object.create(null), n);
  for (const i in e) t[i] = Lt(n[i], e[i]);
  return t;
}
function Dp(n, e, t, i = !1) {
  const r = {},
    s = {};
  qs(s, co, 1), (n.propsDefaults = Object.create(null)), zf(n, e, r, s);
  for (const o in n.propsOptions[0]) o in r || (r[o] = void 0);
  t ? (n.props = i ? r : jd(r)) : n.type.props ? (n.props = r) : (n.props = s),
    (n.attrs = s);
}
function Ip(n, e, t, i) {
  const {
      props: r,
      attrs: s,
      vnode: { patchFlag: o },
    } = n,
    a = We(r),
    [l] = n.propsOptions;
  let c = !1;
  if ((i || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = n.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (oo(n.emitsOptions, h)) continue;
        const p = e[h];
        if (l)
          if (Ge(s, h)) p !== s[h] && ((s[h] = p), (c = !0));
          else {
            const g = _r(h);
            r[g] = Ta(l, a, g, p, n, !1);
          }
        else p !== s[h] && ((s[h] = p), (c = !0));
      }
    }
  } else {
    zf(n, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || (!Ge(e, f) && ((u = Lr(f)) === f || !Ge(e, u)))) &&
        (l
          ? t &&
            (t[f] !== void 0 || t[u] !== void 0) &&
            (r[f] = Ta(l, a, f, void 0, n, !0))
          : delete r[f]);
    if (s !== a)
      for (const f in s) (!e || (!Ge(e, f) && !0)) && (delete s[f], (c = !0));
  }
  c && In(n, 'set', '$attrs');
}
function zf(n, e, t, i) {
  const [r, s] = n.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (Us(l)) continue;
      const c = e[l];
      let u;
      r && Ge(r, (u = _r(l)))
        ? !s || !s.includes(u)
          ? (t[u] = c)
          : ((a || (a = {}))[u] = c)
        : oo(n.emitsOptions, l) ||
          ((!(l in i) || c !== i[l]) && ((i[l] = c), (o = !0)));
    }
  if (s) {
    const l = We(t),
      c = a || Ze;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      t[f] = Ta(r, l, f, c[f], n, !Ge(c, f));
    }
  }
  return o;
}
function Ta(n, e, t, i, r, s) {
  const o = n[t];
  if (o != null) {
    const a = Ge(o, 'default');
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && Ne(l)) {
        const { propsDefaults: c } = r;
        t in c ? (i = c[t]) : (yr(r), (i = c[t] = l.call(null, e)), Ei());
      } else i = l;
    }
    o[0] &&
      (s && !a ? (i = !1) : o[1] && (i === '' || i === Lr(t)) && (i = !0));
  }
  return i;
}
function Uf(n, e, t = !1) {
  const i = e.propsCache,
    r = i.get(n);
  if (r) return r;
  const s = n.props,
    o = {},
    a = [];
  let l = !1;
  if (!Ne(n)) {
    const u = f => {
      l = !0;
      const [h, p] = Uf(f, e, !0);
      Tt(o, h), p && a.push(...p);
    };
    !t && e.mixins.length && e.mixins.forEach(u),
      n.extends && u(n.extends),
      n.mixins && n.mixins.forEach(u);
  }
  if (!s && !l) return tt(n) && i.set(n, ur), ur;
  if (Oe(s))
    for (let u = 0; u < s.length; u++) {
      const f = _r(s[u]);
      Hl(f) && (o[f] = Ze);
    }
  else if (s)
    for (const u in s) {
      const f = _r(u);
      if (Hl(f)) {
        const h = s[u],
          p = (o[f] = Oe(h) || Ne(h) ? { type: h } : h);
        if (p) {
          const g = Xl(Boolean, p.type),
            m = Xl(String, p.type);
          (p[0] = g > -1),
            (p[1] = m < 0 || g < m),
            (g > -1 || Ge(p, 'default')) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return tt(n) && i.set(n, c), c;
}
function Hl(n) {
  return n[0] !== '$';
}
function Wl(n) {
  const e = n && n.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : n === null ? 'null' : '';
}
function ql(n, e) {
  return Wl(n) === Wl(e);
}
function Xl(n, e) {
  return Oe(e) ? e.findIndex(t => ql(t, n)) : Ne(e) && ql(e, n) ? 0 : -1;
}
const Bf = n => n[0] === '_' || n === '$stable',
  ol = n => (Oe(n) ? n.map(dn) : [dn(n)]),
  Fp = (n, e, t) => {
    if (e._n) return e;
    const i = Cf((...r) => ol(e(...r)), t);
    return (i._c = !1), i;
  },
  kf = (n, e, t) => {
    const i = n._ctx;
    for (const r in n) {
      if (Bf(r)) continue;
      const s = n[r];
      if (Ne(s)) e[r] = Fp(r, s, i);
      else if (s != null) {
        const o = ol(s);
        e[r] = () => o;
      }
    }
  },
  Vf = (n, e) => {
    const t = ol(e);
    n.slots.default = () => t;
  },
  Op = (n, e) => {
    if (n.vnode.shapeFlag & 32) {
      const t = e._;
      t ? ((n.slots = We(e)), qs(e, '_', t)) : kf(e, (n.slots = {}));
    } else (n.slots = {}), e && Vf(n, e);
    qs(n.slots, co, 1);
  },
  Np = (n, e, t) => {
    const { vnode: i, slots: r } = n;
    let s = !0,
      o = Ze;
    if (i.shapeFlag & 32) {
      const a = e._;
      a
        ? t && a === 1
          ? (s = !1)
          : (Tt(r, e), !t && a === 1 && delete r._)
        : ((s = !e.$stable), kf(e, r)),
        (o = e);
    } else e && (Vf(n, e), (o = { default: 1 }));
    if (s) for (const a in r) !Bf(a) && !(a in o) && delete r[a];
  };
function Gf() {
  return {
    app: null,
    config: {
      isNativeTag: hd,
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
let zp = 0;
function Up(n, e) {
  return function (i, r = null) {
    Ne(i) || (i = Object.assign({}, i)), r != null && !tt(r) && (r = null);
    const s = Gf(),
      o = new Set();
    let a = !1;
    const l = (s.app = {
      _uid: zp++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: im,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && Ne(c.install)
              ? (o.add(c), c.install(l, ...u))
              : Ne(c) && (o.add(c), c(l, ...u))),
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
          const h = _t(i, r);
          return (
            (h.appContext = s),
            u && e ? e(h, c) : n(h, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            uo(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        a && (n(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (s.provides[c] = u), l;
      },
    });
    return l;
  };
}
function Aa(n, e, t, i, r = !1) {
  if (Oe(n)) {
    n.forEach((h, p) => Aa(h, e && (Oe(e) ? e[p] : e), t, i, r));
    return;
  }
  if (Vs(i) && !r) return;
  const s = i.shapeFlag & 4 ? uo(i.component) || i.component.proxy : i.el,
    o = r ? null : s,
    { i: a, r: l } = n,
    c = e && e.r,
    u = a.refs === Ze ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (vt(c)
        ? ((u[c] = null), Ge(f, c) && (f[c] = null))
        : Et(c) && (c.value = null)),
    Ne(l))
  )
    Jn(l, a, 12, [o, u]);
  else {
    const h = vt(l),
      p = Et(l);
    if (h || p) {
      const g = () => {
        if (n.f) {
          const m = h ? (Ge(f, l) ? f[l] : u[l]) : l.value;
          r
            ? Oe(m) && Xa(m, s)
            : Oe(m)
            ? m.includes(s) || m.push(s)
            : h
            ? ((u[l] = [s]), Ge(f, l) && (f[l] = u[l]))
            : ((l.value = [s]), n.k && (u[n.k] = l.value));
        } else
          h
            ? ((u[l] = o), Ge(f, l) && (f[l] = o))
            : p && ((l.value = o), n.k && (u[n.k] = o));
      };
      o ? ((g.id = -1), Dt(g, t)) : g();
    }
  }
}
const Dt = up;
function Bp(n) {
  return kp(n);
}
function kp(n, e) {
  const t = xd();
  t.__VUE__ = !0;
  const {
      insert: i,
      remove: r,
      patchProp: s,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: p = on,
      insertStaticContent: g,
    } = n,
    m = (
      E,
      A,
      H,
      j = null,
      K = null,
      he = null,
      pe = !1,
      re = null,
      me = !!A.dynamicChildren
    ) => {
      if (E === A) return;
      E && !_i(E, A) && ((j = ae(E)), oe(E, K, he, !0), (E = null)),
        A.patchFlag === -2 && ((me = !1), (A.dynamicChildren = null));
      const { type: se, ref: w, shapeFlag: v } = A;
      switch (se) {
        case al:
          d(E, A, H, j);
          break;
        case Pn:
          _(E, A, H, j);
          break;
        case Ao:
          E == null && x(A, H, j, pe);
          break;
        case St:
          de(E, A, H, j, K, he, pe, re, me);
          break;
        default:
          v & 1
            ? b(E, A, H, j, K, he, pe, re, me)
            : v & 6
            ? G(E, A, H, j, K, he, pe, re, me)
            : (v & 64 || v & 128) &&
              se.process(E, A, H, j, K, he, pe, re, me, ve);
      }
      w != null && K && Aa(w, E && E.ref, he, A || E, !A);
    },
    d = (E, A, H, j) => {
      if (E == null) i((A.el = a(A.children)), H, j);
      else {
        const K = (A.el = E.el);
        A.children !== E.children && c(K, A.children);
      }
    },
    _ = (E, A, H, j) => {
      E == null ? i((A.el = l(A.children || '')), H, j) : (A.el = E.el);
    },
    x = (E, A, H, j) => {
      [E.el, E.anchor] = g(E.children, A, H, j, E.el, E.anchor);
    },
    M = ({ el: E, anchor: A }, H, j) => {
      let K;
      for (; E && E !== A; ) (K = h(E)), i(E, H, j), (E = K);
      i(A, H, j);
    },
    S = ({ el: E, anchor: A }) => {
      let H;
      for (; E && E !== A; ) (H = h(E)), r(E), (E = H);
      r(A);
    },
    b = (E, A, H, j, K, he, pe, re, me) => {
      (pe = pe || A.type === 'svg'),
        E == null ? P(A, H, j, K, he, pe, re, me) : L(E, A, K, he, pe, re, me);
    },
    P = (E, A, H, j, K, he, pe, re) => {
      let me, se;
      const { type: w, props: v, shapeFlag: F, transition: $, dirs: Q } = E;
      if (
        ((me = E.el = o(E.type, he, v && v.is, v)),
        F & 8
          ? u(me, E.children)
          : F & 16 &&
            y(E.children, me, null, j, K, he && w !== 'foreignObject', pe, re),
        Q && li(E, null, j, 'created'),
        v)
      ) {
        for (const ye in v)
          ye !== 'value' &&
            !Us(ye) &&
            s(me, ye, null, v[ye], he, E.children, j, K, I);
        'value' in v && s(me, 'value', null, v.value),
          (se = v.onVnodeBeforeMount) && fn(se, j, E);
      }
      B(me, E, E.scopeId, pe, j), Q && li(E, null, j, 'beforeMount');
      const fe = (!K || (K && !K.pendingBranch)) && $ && !$.persisted;
      fe && $.beforeEnter(me),
        i(me, A, H),
        ((se = v && v.onVnodeMounted) || fe || Q) &&
          Dt(() => {
            se && fn(se, j, E),
              fe && $.enter(me),
              Q && li(E, null, j, 'mounted');
          }, K);
    },
    B = (E, A, H, j, K) => {
      if ((H && p(E, H), j)) for (let he = 0; he < j.length; he++) p(E, j[he]);
      if (K) {
        let he = K.subTree;
        if (A === he) {
          const pe = K.vnode;
          B(E, pe, pe.scopeId, pe.slotScopeIds, K.parent);
        }
      }
    },
    y = (E, A, H, j, K, he, pe, re, me = 0) => {
      for (let se = me; se < E.length; se++) {
        const w = (E[se] = re ? qn(E[se]) : dn(E[se]));
        m(null, w, A, H, j, K, he, pe, re);
      }
    },
    L = (E, A, H, j, K, he, pe) => {
      const re = (A.el = E.el);
      let { patchFlag: me, dynamicChildren: se, dirs: w } = A;
      me |= E.patchFlag & 16;
      const v = E.props || Ze,
        F = A.props || Ze;
      let $;
      H && ci(H, !1),
        ($ = F.onVnodeBeforeUpdate) && fn($, H, A, E),
        w && li(A, E, H, 'beforeUpdate'),
        H && ci(H, !0);
      const Q = K && A.type !== 'foreignObject';
      if (
        (se
          ? R(E.dynamicChildren, se, re, H, j, Q, he)
          : pe || W(E, A, re, null, H, j, Q, he, !1),
        me > 0)
      ) {
        if (me & 16) Y(re, A, v, F, H, j, K);
        else if (
          (me & 2 && v.class !== F.class && s(re, 'class', null, F.class, K),
          me & 4 && s(re, 'style', v.style, F.style, K),
          me & 8)
        ) {
          const fe = A.dynamicProps;
          for (let ye = 0; ye < fe.length; ye++) {
            const C = fe[ye],
              O = v[C],
              Me = F[C];
            (Me !== O || C === 'value') &&
              s(re, C, O, Me, K, E.children, H, j, I);
          }
        }
        me & 1 && E.children !== A.children && u(re, A.children);
      } else !pe && se == null && Y(re, A, v, F, H, j, K);
      (($ = F.onVnodeUpdated) || w) &&
        Dt(() => {
          $ && fn($, H, A, E), w && li(A, E, H, 'updated');
        }, j);
    },
    R = (E, A, H, j, K, he, pe) => {
      for (let re = 0; re < A.length; re++) {
        const me = E[re],
          se = A[re],
          w =
            me.el && (me.type === St || !_i(me, se) || me.shapeFlag & 70)
              ? f(me.el)
              : H;
        m(me, se, w, null, j, K, he, pe, !0);
      }
    },
    Y = (E, A, H, j, K, he, pe) => {
      if (H !== j) {
        if (H !== Ze)
          for (const re in H)
            !Us(re) &&
              !(re in j) &&
              s(E, re, H[re], null, pe, A.children, K, he, I);
        for (const re in j) {
          if (Us(re)) continue;
          const me = j[re],
            se = H[re];
          me !== se &&
            re !== 'value' &&
            s(E, re, se, me, pe, A.children, K, he, I);
        }
        'value' in j && s(E, 'value', H.value, j.value);
      }
    },
    de = (E, A, H, j, K, he, pe, re, me) => {
      const se = (A.el = E ? E.el : a('')),
        w = (A.anchor = E ? E.anchor : a(''));
      let { patchFlag: v, dynamicChildren: F, slotScopeIds: $ } = A;
      $ && (re = re ? re.concat($) : $),
        E == null
          ? (i(se, H, j), i(w, H, j), y(A.children, H, w, K, he, pe, re, me))
          : v > 0 && v & 64 && F && E.dynamicChildren
          ? (R(E.dynamicChildren, F, H, K, he, pe, re),
            (A.key != null || (K && A === K.subTree)) && Hf(E, A, !0))
          : W(E, A, H, w, K, he, pe, re, me);
    },
    G = (E, A, H, j, K, he, pe, re, me) => {
      (A.slotScopeIds = re),
        E == null
          ? A.shapeFlag & 512
            ? K.ctx.activate(A, H, j, pe, me)
            : N(A, H, j, K, he, pe, me)
          : te(E, A, me);
    },
    N = (E, A, H, j, K, he, pe) => {
      const re = (E.component = Zp(E, j, K));
      if ((ao(E) && (re.ctx.renderer = ve), Jp(re), re.asyncDep)) {
        if ((K && K.registerDep(re, ie), !E.el)) {
          const me = (re.subTree = _t(Pn));
          _(null, me, A, H);
        }
        return;
      }
      ie(re, E, A, H, K, he, pe);
    },
    te = (E, A, H) => {
      const j = (A.component = E.component);
      if (ap(E, A, H))
        if (j.asyncDep && !j.asyncResolved) {
          Z(j, A, H);
          return;
        } else (j.next = A), tp(j.update), j.update();
      else (A.el = E.el), (j.vnode = A);
    },
    ie = (E, A, H, j, K, he, pe) => {
      const re = () => {
          if (E.isMounted) {
            let { next: w, bu: v, u: F, parent: $, vnode: Q } = E,
              fe = w,
              ye;
            ci(E, !1),
              w ? ((w.el = Q.el), Z(E, w, pe)) : (w = Q),
              v && wo(v),
              (ye = w.props && w.props.onVnodeBeforeUpdate) && fn(ye, $, w, Q),
              ci(E, !0);
            const C = Eo(E),
              O = E.subTree;
            (E.subTree = C),
              m(O, C, f(O.el), ae(O), E, K, he),
              (w.el = C.el),
              fe === null && lp(E, C.el),
              F && Dt(F, K),
              (ye = w.props && w.props.onVnodeUpdated) &&
                Dt(() => fn(ye, $, w, Q), K);
          } else {
            let w;
            const { el: v, props: F } = A,
              { bm: $, m: Q, parent: fe } = E,
              ye = Vs(A);
            if (
              (ci(E, !1),
              $ && wo($),
              !ye && (w = F && F.onVnodeBeforeMount) && fn(w, fe, A),
              ci(E, !0),
              v && Ee)
            ) {
              const C = () => {
                (E.subTree = Eo(E)), Ee(v, E.subTree, E, K, null);
              };
              ye
                ? A.type.__asyncLoader().then(() => !E.isUnmounted && C())
                : C();
            } else {
              const C = (E.subTree = Eo(E));
              m(null, C, H, j, E, K, he), (A.el = C.el);
            }
            if ((Q && Dt(Q, K), !ye && (w = F && F.onVnodeMounted))) {
              const C = A;
              Dt(() => fn(w, fe, C), K);
            }
            (A.shapeFlag & 256 ||
              (fe && Vs(fe.vnode) && fe.vnode.shapeFlag & 256)) &&
              E.a &&
              Dt(E.a, K),
              (E.isMounted = !0),
              (A = H = j = null);
          }
        },
        me = (E.effect = new Za(re, () => rl(se), E.scope)),
        se = (E.update = () => me.run());
      (se.id = E.uid), ci(E, !0), se();
    },
    Z = (E, A, H) => {
      A.component = E;
      const j = E.vnode.props;
      (E.vnode = A),
        (E.next = null),
        Ip(E, A.props, j, H),
        Np(E, A.children, H),
        Pr(),
        Nl(),
        Rr();
    },
    W = (E, A, H, j, K, he, pe, re, me = !1) => {
      const se = E && E.children,
        w = E ? E.shapeFlag : 0,
        v = A.children,
        { patchFlag: F, shapeFlag: $ } = A;
      if (F > 0) {
        if (F & 128) {
          X(se, v, H, j, K, he, pe, re, me);
          return;
        } else if (F & 256) {
          z(se, v, H, j, K, he, pe, re, me);
          return;
        }
      }
      $ & 8
        ? (w & 16 && I(se, K, he), v !== se && u(H, v))
        : w & 16
        ? $ & 16
          ? X(se, v, H, j, K, he, pe, re, me)
          : I(se, K, he, !0)
        : (w & 8 && u(H, ''), $ & 16 && y(v, H, j, K, he, pe, re, me));
    },
    z = (E, A, H, j, K, he, pe, re, me) => {
      (E = E || ur), (A = A || ur);
      const se = E.length,
        w = A.length,
        v = Math.min(se, w);
      let F;
      for (F = 0; F < v; F++) {
        const $ = (A[F] = me ? qn(A[F]) : dn(A[F]));
        m(E[F], $, H, null, K, he, pe, re, me);
      }
      se > w ? I(E, K, he, !0, !1, v) : y(A, H, j, K, he, pe, re, me, v);
    },
    X = (E, A, H, j, K, he, pe, re, me) => {
      let se = 0;
      const w = A.length;
      let v = E.length - 1,
        F = w - 1;
      for (; se <= v && se <= F; ) {
        const $ = E[se],
          Q = (A[se] = me ? qn(A[se]) : dn(A[se]));
        if (_i($, Q)) m($, Q, H, null, K, he, pe, re, me);
        else break;
        se++;
      }
      for (; se <= v && se <= F; ) {
        const $ = E[v],
          Q = (A[F] = me ? qn(A[F]) : dn(A[F]));
        if (_i($, Q)) m($, Q, H, null, K, he, pe, re, me);
        else break;
        v--, F--;
      }
      if (se > v) {
        if (se <= F) {
          const $ = F + 1,
            Q = $ < w ? A[$].el : j;
          for (; se <= F; )
            m(
              null,
              (A[se] = me ? qn(A[se]) : dn(A[se])),
              H,
              Q,
              K,
              he,
              pe,
              re,
              me
            ),
              se++;
        }
      } else if (se > F) for (; se <= v; ) oe(E[se], K, he, !0), se++;
      else {
        const $ = se,
          Q = se,
          fe = new Map();
        for (se = Q; se <= F; se++) {
          const Se = (A[se] = me ? qn(A[se]) : dn(A[se]));
          Se.key != null && fe.set(Se.key, se);
        }
        let ye,
          C = 0;
        const O = F - Q + 1;
        let Me = !1,
          Te = 0;
        const be = new Array(O);
        for (se = 0; se < O; se++) be[se] = 0;
        for (se = $; se <= v; se++) {
          const Se = E[se];
          if (C >= O) {
            oe(Se, K, he, !0);
            continue;
          }
          let De;
          if (Se.key != null) De = fe.get(Se.key);
          else
            for (ye = Q; ye <= F; ye++)
              if (be[ye - Q] === 0 && _i(Se, A[ye])) {
                De = ye;
                break;
              }
          De === void 0
            ? oe(Se, K, he, !0)
            : ((be[De - Q] = se + 1),
              De >= Te ? (Te = De) : (Me = !0),
              m(Se, A[De], H, null, K, he, pe, re, me),
              C++);
        }
        const Ce = Me ? Vp(be) : ur;
        for (ye = Ce.length - 1, se = O - 1; se >= 0; se--) {
          const Se = Q + se,
            De = A[Se],
            ke = Se + 1 < w ? A[Se + 1].el : j;
          be[se] === 0
            ? m(null, De, H, ke, K, he, pe, re, me)
            : Me && (ye < 0 || se !== Ce[ye] ? ue(De, H, ke, 2) : ye--);
        }
      }
    },
    ue = (E, A, H, j, K = null) => {
      const {
        el: he,
        type: pe,
        transition: re,
        children: me,
        shapeFlag: se,
      } = E;
      if (se & 6) {
        ue(E.component.subTree, A, H, j);
        return;
      }
      if (se & 128) {
        E.suspense.move(A, H, j);
        return;
      }
      if (se & 64) {
        pe.move(E, A, H, ve);
        return;
      }
      if (pe === St) {
        i(he, A, H);
        for (let v = 0; v < me.length; v++) ue(me[v], A, H, j);
        i(E.anchor, A, H);
        return;
      }
      if (pe === Ao) {
        M(E, A, H);
        return;
      }
      if (j !== 2 && se & 1 && re)
        if (j === 0) re.beforeEnter(he), i(he, A, H), Dt(() => re.enter(he), K);
        else {
          const { leave: v, delayLeave: F, afterLeave: $ } = re,
            Q = () => i(he, A, H),
            fe = () => {
              v(he, () => {
                Q(), $ && $();
              });
            };
          F ? F(he, Q, fe) : fe();
        }
      else i(he, A, H);
    },
    oe = (E, A, H, j = !1, K = !1) => {
      const {
        type: he,
        props: pe,
        ref: re,
        children: me,
        dynamicChildren: se,
        shapeFlag: w,
        patchFlag: v,
        dirs: F,
      } = E;
      if ((re != null && Aa(re, null, H, E, !0), w & 256)) {
        A.ctx.deactivate(E);
        return;
      }
      const $ = w & 1 && F,
        Q = !Vs(E);
      let fe;
      if ((Q && (fe = pe && pe.onVnodeBeforeUnmount) && fn(fe, A, E), w & 6))
        V(E.component, H, j);
      else {
        if (w & 128) {
          E.suspense.unmount(H, j);
          return;
        }
        $ && li(E, null, A, 'beforeUnmount'),
          w & 64
            ? E.type.remove(E, A, H, K, ve, j)
            : se && (he !== St || (v > 0 && v & 64))
            ? I(se, A, H, !1, !0)
            : ((he === St && v & 384) || (!K && w & 16)) && I(me, A, H),
          j && le(E);
      }
      ((Q && (fe = pe && pe.onVnodeUnmounted)) || $) &&
        Dt(() => {
          fe && fn(fe, A, E), $ && li(E, null, A, 'unmounted');
        }, H);
    },
    le = E => {
      const { type: A, el: H, anchor: j, transition: K } = E;
      if (A === St) {
        we(H, j);
        return;
      }
      if (A === Ao) {
        S(E);
        return;
      }
      const he = () => {
        r(H), K && !K.persisted && K.afterLeave && K.afterLeave();
      };
      if (E.shapeFlag & 1 && K && !K.persisted) {
        const { leave: pe, delayLeave: re } = K,
          me = () => pe(H, he);
        re ? re(E.el, he, me) : me();
      } else he();
    },
    we = (E, A) => {
      let H;
      for (; E !== A; ) (H = h(E)), r(E), (E = H);
      r(A);
    },
    V = (E, A, H) => {
      const { bum: j, scope: K, update: he, subTree: pe, um: re } = E;
      j && wo(j),
        K.stop(),
        he && ((he.active = !1), oe(pe, E, A, H)),
        re && Dt(re, A),
        Dt(() => {
          E.isUnmounted = !0;
        }, A),
        A &&
          A.pendingBranch &&
          !A.isUnmounted &&
          E.asyncDep &&
          !E.asyncResolved &&
          E.suspenseId === A.pendingId &&
          (A.deps--, A.deps === 0 && A.resolve());
    },
    I = (E, A, H, j = !1, K = !1, he = 0) => {
      for (let pe = he; pe < E.length; pe++) oe(E[pe], A, H, j, K);
    },
    ae = E =>
      E.shapeFlag & 6
        ? ae(E.component.subTree)
        : E.shapeFlag & 128
        ? E.suspense.next()
        : h(E.anchor || E.el),
    ce = (E, A, H) => {
      E == null
        ? A._vnode && oe(A._vnode, null, null, !0)
        : m(A._vnode || null, E, A, null, null, null, H),
        Nl(),
        wf(),
        (A._vnode = E);
    },
    ve = {
      p: m,
      um: oe,
      m: ue,
      r: le,
      mt: N,
      mc: y,
      pc: W,
      pbc: R,
      n: ae,
      o: n,
    };
  let _e, Ee;
  return (
    e && ([_e, Ee] = e(ve)), { render: ce, hydrate: _e, createApp: Up(ce, _e) }
  );
}
function ci({ effect: n, update: e }, t) {
  n.allowRecurse = e.allowRecurse = t;
}
function Hf(n, e, t = !1) {
  const i = n.children,
    r = e.children;
  if (Oe(i) && Oe(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let a = r[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[s] = qn(r[s])), (a.el = o.el)),
        t || Hf(o, a));
    }
}
function Vp(n) {
  const e = n.slice(),
    t = [0];
  let i, r, s, o, a;
  const l = n.length;
  for (i = 0; i < l; i++) {
    const c = n[i];
    if (c !== 0) {
      if (((r = t[t.length - 1]), n[r] < c)) {
        (e[i] = r), t.push(i);
        continue;
      }
      for (s = 0, o = t.length - 1; s < o; )
        (a = (s + o) >> 1), n[t[a]] < c ? (s = a + 1) : (o = a);
      c < n[t[s]] && (s > 0 && (e[i] = t[s - 1]), (t[s] = i));
    }
  }
  for (s = t.length, o = t[s - 1]; s-- > 0; ) (t[s] = o), (o = e[o]);
  return t;
}
const Gp = n => n.__isTeleport,
  St = Symbol(void 0),
  al = Symbol(void 0),
  Pn = Symbol(void 0),
  Ao = Symbol(void 0),
  $r = [];
let sn = null;
function at(n = !1) {
  $r.push((sn = n ? null : []));
}
function Hp() {
  $r.pop(), (sn = $r[$r.length - 1] || null);
}
let ns = 1;
function jl(n) {
  ns += n;
}
function Wf(n) {
  return (
    (n.dynamicChildren = ns > 0 ? sn || ur : null),
    Hp(),
    ns > 0 && sn && sn.push(n),
    n
  );
}
function ct(n, e, t, i, r, s) {
  return Wf(Je(n, e, t, i, r, s, !0));
}
function Wp(n, e, t, i, r) {
  return Wf(_t(n, e, t, i, r, !0));
}
function Ca(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function _i(n, e) {
  return n.type === e.type && n.key === e.key;
}
const co = '__vInternal',
  qf = ({ key: n }) => (n != null ? n : null),
  Gs = ({ ref: n, ref_key: e, ref_for: t }) =>
    n != null
      ? vt(n) || Et(n) || Ne(n)
        ? { i: rn, r: n, k: e, f: !!t }
        : n
      : null;
function Je(
  n,
  e = null,
  t = null,
  i = 0,
  r = null,
  s = n === St ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && qf(e),
    ref: e && Gs(e),
    scopeId: Af,
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
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    a
      ? (ll(l, t), s & 128 && n.normalize(l))
      : t && (l.shapeFlag |= vt(t) ? 8 : 16),
    ns > 0 &&
      !o &&
      sn &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      sn.push(l),
    l
  );
}
const _t = qp;
function qp(n, e = null, t = null, i = 0, r = null, s = !1) {
  if (((!n || n === Ep) && (n = Pn), Ca(n))) {
    const a = ri(n, e, !0);
    return (
      t && ll(a, t),
      ns > 0 &&
        !s &&
        sn &&
        (a.shapeFlag & 6 ? (sn[sn.indexOf(n)] = a) : sn.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((nm(n) && (n = n.__vccOpts), e)) {
    e = Xp(e);
    let { class: a, style: l } = e;
    a && !vt(a) && (e.class = Cr(a)),
      tt(l) && (mf(l) && !Oe(l) && (l = Tt({}, l)), (e.style = ni(l)));
  }
  const o = vt(n) ? 1 : cp(n) ? 128 : Gp(n) ? 64 : tt(n) ? 4 : Ne(n) ? 2 : 0;
  return Je(n, e, t, i, r, o, s, !0);
}
function Xp(n) {
  return n ? (mf(n) || co in n ? Tt({}, n) : n) : null;
}
function ri(n, e, t = !1) {
  const { props: i, ref: r, patchFlag: s, children: o } = n,
    a = e ? jp(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: a,
    key: a && qf(a),
    ref:
      e && e.ref
        ? t && r
          ? Oe(r)
            ? r.concat(Gs(e))
            : [r, Gs(e)]
          : Gs(e)
        : r,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: o,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    patchFlag: e && n.type !== St ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: n.transition,
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && ri(n.ssContent),
    ssFallback: n.ssFallback && ri(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
  };
}
function Xf(n = ' ', e = 0) {
  return _t(al, null, n, e);
}
function dn(n) {
  return n == null || typeof n == 'boolean'
    ? _t(Pn)
    : Oe(n)
    ? _t(St, null, n.slice())
    : typeof n == 'object'
    ? qn(n)
    : _t(al, null, String(n));
}
function qn(n) {
  return (n.el === null && n.patchFlag !== -1) || n.memo ? n : ri(n);
}
function ll(n, e) {
  let t = 0;
  const { shapeFlag: i } = n;
  if (e == null) e = null;
  else if (Oe(e)) t = 16;
  else if (typeof e == 'object')
    if (i & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), ll(n, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = e._;
      !r && !(co in e)
        ? (e._ctx = rn)
        : r === 3 &&
          rn &&
          (rn.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (n.patchFlag |= 1024)));
    }
  else
    Ne(e)
      ? ((e = { default: e, _ctx: rn }), (t = 32))
      : ((e = String(e)), i & 64 ? ((t = 16), (e = [Xf(e)])) : (t = 8));
  (n.children = e), (n.shapeFlag |= t);
}
function jp(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    for (const r in i)
      if (r === 'class')
        e.class !== i.class && (e.class = Cr([e.class, i.class]));
      else if (r === 'style') e.style = ni([e.style, i.style]);
      else if (to(r)) {
        const s = e[r],
          o = i[r];
        o &&
          s !== o &&
          !(Oe(s) && s.includes(o)) &&
          (e[r] = s ? [].concat(s, o) : o);
      } else r !== '' && (e[r] = i[r]);
  }
  return e;
}
function fn(n, e, t, i = null) {
  Xt(n, e, 7, [t, i]);
}
const $p = Gf();
let Yp = 0;
function Zp(n, e, t) {
  const i = n.type,
    r = (e ? e.appContext : n.appContext) || $p,
    s = {
      uid: Yp++,
      vnode: n,
      type: i,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new nf(!0),
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
      propsOptions: Uf(i, r),
      emitsOptions: Tf(i, r),
      emit: null,
      emitted: null,
      propsDefaults: Ze,
      inheritAttrs: i.inheritAttrs,
      ctx: Ze,
      data: Ze,
      props: Ze,
      attrs: Ze,
      slots: Ze,
      refs: Ze,
      setupState: Ze,
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
    (s.emit = rp.bind(null, s)),
    n.ce && n.ce(s),
    s
  );
}
let xt = null;
const Kp = () => xt || rn,
  yr = n => {
    (xt = n), n.scope.on();
  },
  Ei = () => {
    xt && xt.scope.off(), (xt = null);
  };
function jf(n) {
  return n.vnode.shapeFlag & 4;
}
let is = !1;
function Jp(n, e = !1) {
  is = e;
  const { props: t, children: i } = n.vnode,
    r = jf(n);
  Dp(n, t, r, e), Op(n, i);
  const s = r ? Qp(n, e) : void 0;
  return (is = !1), s;
}
function Qp(n, e) {
  const t = n.type;
  (n.accessCache = Object.create(null)), (n.proxy = tl(new Proxy(n.ctx, Tp)));
  const { setup: i } = t;
  if (i) {
    const r = (n.setupContext = i.length > 1 ? tm(n) : null);
    yr(n), Pr();
    const s = Jn(i, n, 0, [n.props, r]);
    if ((Rr(), Ei(), Ju(s))) {
      if ((s.then(Ei, Ei), e))
        return s
          .then(o => {
            $l(n, o, e);
          })
          .catch(o => {
            so(o, n, 0);
          });
      n.asyncDep = s;
    } else $l(n, s, e);
  } else $f(n, e);
}
function $l(n, e, t) {
  Ne(e)
    ? n.type.__ssrInlineRender
      ? (n.ssrRender = e)
      : (n.render = e)
    : tt(e) && (n.setupState = xf(e)),
    $f(n, t);
}
let Yl;
function $f(n, e, t) {
  const i = n.type;
  if (!n.render) {
    if (!e && Yl && !i.render) {
      const r = i.template || sl(n).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = n.appContext.config,
          { delimiters: a, compilerOptions: l } = i,
          c = Tt(Tt({ isCustomElement: s, delimiters: a }, o), l);
        i.render = Yl(r, c);
      }
    }
    n.render = i.render || on;
  }
  yr(n), Pr(), Ap(n), Rr(), Ei();
}
function em(n) {
  return new Proxy(n.attrs, {
    get(e, t) {
      return Bt(n, 'get', '$attrs'), e[t];
    },
  });
}
function tm(n) {
  const e = i => {
    n.exposed = i || {};
  };
  let t;
  return {
    get attrs() {
      return t || (t = em(n));
    },
    slots: n.slots,
    emit: n.emit,
    expose: e,
  };
}
function uo(n) {
  if (n.exposed)
    return (
      n.exposeProxy ||
      (n.exposeProxy = new Proxy(xf(tl(n.exposed)), {
        get(e, t) {
          if (t in e) return e[t];
          if (t in $s) return $s[t](n);
        },
      }))
    );
}
function nm(n) {
  return Ne(n) && '__vccOpts' in n;
}
const gt = (n, e) => Jd(n, e, is);
function Yf(n, e, t) {
  const i = arguments.length;
  return i === 2
    ? tt(e) && !Oe(e)
      ? Ca(e)
        ? _t(n, null, [e])
        : _t(n, e)
      : _t(n, null, e)
    : (i > 3
        ? (t = Array.prototype.slice.call(arguments, 2))
        : i === 3 && Ca(t) && (t = [t]),
      _t(n, e, t));
}
const im = '3.2.41',
  rm = 'http://www.w3.org/2000/svg',
  vi = typeof document < 'u' ? document : null,
  Zl = vi && vi.createElement('template'),
  sm = {
    insert: (n, e, t) => {
      e.insertBefore(n, t || null);
    },
    remove: n => {
      const e = n.parentNode;
      e && e.removeChild(n);
    },
    createElement: (n, e, t, i) => {
      const r = e
        ? vi.createElementNS(rm, n)
        : vi.createElement(n, t ? { is: t } : void 0);
      return (
        n === 'select' &&
          i &&
          i.multiple != null &&
          r.setAttribute('multiple', i.multiple),
        r
      );
    },
    createText: n => vi.createTextNode(n),
    createComment: n => vi.createComment(n),
    setText: (n, e) => {
      n.nodeValue = e;
    },
    setElementText: (n, e) => {
      n.textContent = e;
    },
    parentNode: n => n.parentNode,
    nextSibling: n => n.nextSibling,
    querySelector: n => vi.querySelector(n),
    setScopeId(n, e) {
      n.setAttribute(e, '');
    },
    insertStaticContent(n, e, t, i, r, s) {
      const o = t ? t.previousSibling : e.lastChild;
      if (r && (r === s || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), t),
            !(r === s || !(r = r.nextSibling));

        );
      else {
        Zl.innerHTML = i ? `<svg>${n}</svg>` : n;
        const a = Zl.content;
        if (i) {
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
function om(n, e, t) {
  const i = n._vtc;
  i && (e = (e ? [e, ...i] : [...i]).join(' ')),
    e == null
      ? n.removeAttribute('class')
      : t
      ? n.setAttribute('class', e)
      : (n.className = e);
}
function am(n, e, t) {
  const i = n.style,
    r = vt(t);
  if (t && !r) {
    for (const s in t) La(i, s, t[s]);
    if (e && !vt(e)) for (const s in e) t[s] == null && La(i, s, '');
  } else {
    const s = i.display;
    r ? e !== t && (i.cssText = t) : e && n.removeAttribute('style'),
      '_vod' in n && (i.display = s);
  }
}
const Kl = /\s*!important$/;
function La(n, e, t) {
  if (Oe(t)) t.forEach(i => La(n, e, i));
  else if ((t == null && (t = ''), e.startsWith('--'))) n.setProperty(e, t);
  else {
    const i = lm(n, e);
    Kl.test(t)
      ? n.setProperty(Lr(i), t.replace(Kl, ''), 'important')
      : (n[i] = t);
  }
}
const Jl = ['Webkit', 'Moz', 'ms'],
  Co = {};
function lm(n, e) {
  const t = Co[e];
  if (t) return t;
  let i = _r(e);
  if (i !== 'filter' && i in n) return (Co[e] = i);
  i = tf(i);
  for (let r = 0; r < Jl.length; r++) {
    const s = Jl[r] + i;
    if (s in n) return (Co[e] = s);
  }
  return e;
}
const Ql = 'http://www.w3.org/1999/xlink';
function cm(n, e, t, i, r) {
  if (i && e.startsWith('xlink:'))
    t == null
      ? n.removeAttributeNS(Ql, e.slice(6, e.length))
      : n.setAttributeNS(Ql, e, t);
  else {
    const s = ld(e);
    t == null || (s && !Yu(t))
      ? n.removeAttribute(e)
      : n.setAttribute(e, s ? '' : t);
  }
}
function um(n, e, t, i, r, s, o) {
  if (e === 'innerHTML' || e === 'textContent') {
    i && o(i, r, s), (n[e] = t == null ? '' : t);
    return;
  }
  if (e === 'value' && n.tagName !== 'PROGRESS' && !n.tagName.includes('-')) {
    n._value = t;
    const l = t == null ? '' : t;
    (n.value !== l || n.tagName === 'OPTION') && (n.value = l),
      t == null && n.removeAttribute(e);
    return;
  }
  let a = !1;
  if (t === '' || t == null) {
    const l = typeof n[e];
    l === 'boolean'
      ? (t = Yu(t))
      : t == null && l === 'string'
      ? ((t = ''), (a = !0))
      : l === 'number' && ((t = 0), (a = !0));
  }
  try {
    n[e] = t;
  } catch {}
  a && n.removeAttribute(e);
}
function fm(n, e, t, i) {
  n.addEventListener(e, t, i);
}
function hm(n, e, t, i) {
  n.removeEventListener(e, t, i);
}
function dm(n, e, t, i, r = null) {
  const s = n._vei || (n._vei = {}),
    o = s[e];
  if (i && o) o.value = i;
  else {
    const [a, l] = pm(e);
    if (i) {
      const c = (s[e] = _m(i, r));
      fm(n, a, c, l);
    } else o && (hm(n, a, o, l), (s[e] = void 0));
  }
}
const ec = /(?:Once|Passive|Capture)$/;
function pm(n) {
  let e;
  if (ec.test(n)) {
    e = {};
    let i;
    for (; (i = n.match(ec)); )
      (n = n.slice(0, n.length - i[0].length)), (e[i[0].toLowerCase()] = !0);
  }
  return [n[2] === ':' ? n.slice(3) : Lr(n.slice(2)), e];
}
let Lo = 0;
const mm = Promise.resolve(),
  gm = () => Lo || (mm.then(() => (Lo = 0)), (Lo = Date.now()));
function _m(n, e) {
  const t = i => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= t.attached) return;
    Xt(vm(i, t.value), e, 5, [i]);
  };
  return (t.value = n), (t.attached = gm()), t;
}
function vm(n, e) {
  if (Oe(e)) {
    const t = n.stopImmediatePropagation;
    return (
      (n.stopImmediatePropagation = () => {
        t.call(n), (n._stopped = !0);
      }),
      e.map(i => r => !r._stopped && i && i(r))
    );
  } else return e;
}
const tc = /^on[a-z]/,
  xm = (n, e, t, i, r = !1, s, o, a, l) => {
    e === 'class'
      ? om(n, i, r)
      : e === 'style'
      ? am(n, t, i)
      : to(e)
      ? qa(e) || dm(n, e, t, i, o)
      : (
          e[0] === '.'
            ? ((e = e.slice(1)), !0)
            : e[0] === '^'
            ? ((e = e.slice(1)), !1)
            : ym(n, e, i, r)
        )
      ? um(n, e, i, s, o, a, l)
      : (e === 'true-value'
          ? (n._trueValue = i)
          : e === 'false-value' && (n._falseValue = i),
        cm(n, e, i, r));
  };
function ym(n, e, t, i) {
  return i
    ? !!(
        e === 'innerHTML' ||
        e === 'textContent' ||
        (e in n && tc.test(e) && Ne(t))
      )
    : e === 'spellcheck' ||
      e === 'draggable' ||
      e === 'translate' ||
      e === 'form' ||
      (e === 'list' && n.tagName === 'INPUT') ||
      (e === 'type' && n.tagName === 'TEXTAREA') ||
      (tc.test(e) && vt(t))
    ? !1
    : e in n;
}
const Mm = {
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
pp.props;
const nc = {
  beforeMount(n, { value: e }, { transition: t }) {
    (n._vod = n.style.display === 'none' ? '' : n.style.display),
      t && e ? t.beforeEnter(n) : Or(n, e);
  },
  mounted(n, { value: e }, { transition: t }) {
    t && e && t.enter(n);
  },
  updated(n, { value: e, oldValue: t }, { transition: i }) {
    !e != !t &&
      (i
        ? e
          ? (i.beforeEnter(n), Or(n, !0), i.enter(n))
          : i.leave(n, () => {
              Or(n, !1);
            })
        : Or(n, e));
  },
  beforeUnmount(n, { value: e }) {
    Or(n, e);
  },
};
function Or(n, e) {
  n.style.display = e ? n._vod : 'none';
}
const bm = Tt({ patchProp: xm }, sm);
let ic;
function Sm() {
  return ic || (ic = Bp(bm));
}
const wm = (...n) => {
  const e = Sm().createApp(...n),
    { mount: t } = e;
  return (
    (e.mount = i => {
      const r = Em(i);
      if (!r) return;
      const s = e._component;
      !Ne(s) && !s.render && !s.template && (s.template = r.innerHTML),
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
function Em(n) {
  return vt(n) ? document.querySelector(n) : n;
}
var Tm = !1;
/*!
 * pinia v2.0.23
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Am = Symbol();
var rc;
(function (n) {
  (n.direct = 'direct'),
    (n.patchObject = 'patch object'),
    (n.patchFunction = 'patch function');
})(rc || (rc = {}));
function Cm() {
  const n = yd(!0),
    e = n.run(() => jn({}));
  let t = [],
    i = [];
  const r = tl({
    install(s) {
      (r._a = s),
        s.provide(Am, r),
        (s.config.globalProperties.$pinia = r),
        i.forEach(o => t.push(o)),
        (i = []);
    },
    use(s) {
      return !this._a && !Tm ? i.push(s) : t.push(s), this;
    },
    _p: t,
    _a: null,
    _e: n,
    _s: new Map(),
    state: e,
  });
  return r;
}
/*!
 * vue-router v4.1.5
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ar = typeof window < 'u';
function Lm(n) {
  return n.__esModule || n[Symbol.toStringTag] === 'Module';
}
const $e = Object.assign;
function Po(n, e) {
  const t = {};
  for (const i in e) {
    const r = e[i];
    t[i] = cn(r) ? r.map(n) : n(r);
  }
  return t;
}
const Yr = () => {},
  cn = Array.isArray,
  Pm = /\/$/,
  Rm = n => n.replace(Pm, '');
function Ro(n, e, t = '/') {
  let i,
    r = {},
    s = '',
    o = '';
  const a = e.indexOf('#');
  let l = e.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((i = e.slice(0, l)),
      (s = e.slice(l + 1, a > -1 ? a : e.length)),
      (r = n(s))),
    a > -1 && ((i = i || e.slice(0, a)), (o = e.slice(a, e.length))),
    (i = Om(i != null ? i : e, t)),
    { fullPath: i + (s && '?') + s + o, path: i, query: r, hash: o }
  );
}
function Dm(n, e) {
  const t = e.query ? n(e.query) : '';
  return e.path + (t && '?') + t + (e.hash || '');
}
function sc(n, e) {
  return !e || !n.toLowerCase().startsWith(e.toLowerCase())
    ? n
    : n.slice(e.length) || '/';
}
function Im(n, e, t) {
  const i = e.matched.length - 1,
    r = t.matched.length - 1;
  return (
    i > -1 &&
    i === r &&
    Mr(e.matched[i], t.matched[r]) &&
    Zf(e.params, t.params) &&
    n(e.query) === n(t.query) &&
    e.hash === t.hash
  );
}
function Mr(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function Zf(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length) return !1;
  for (const t in n) if (!Fm(n[t], e[t])) return !1;
  return !0;
}
function Fm(n, e) {
  return cn(n) ? oc(n, e) : cn(e) ? oc(e, n) : n === e;
}
function oc(n, e) {
  return cn(e)
    ? n.length === e.length && n.every((t, i) => t === e[i])
    : n.length === 1 && n[0] === e;
}
function Om(n, e) {
  if (n.startsWith('/')) return n;
  if (!n) return e;
  const t = e.split('/'),
    i = n.split('/');
  let r = t.length - 1,
    s,
    o;
  for (s = 0; s < i.length; s++)
    if (((o = i[s]), o !== '.'))
      if (o === '..') r > 1 && r--;
      else break;
  return (
    t.slice(0, r).join('/') +
    '/' +
    i.slice(s - (s === i.length ? 1 : 0)).join('/')
  );
}
var rs;
(function (n) {
  (n.pop = 'pop'), (n.push = 'push');
})(rs || (rs = {}));
var Zr;
(function (n) {
  (n.back = 'back'), (n.forward = 'forward'), (n.unknown = '');
})(Zr || (Zr = {}));
function Nm(n) {
  if (!n)
    if (ar) {
      const e = document.querySelector('base');
      (n = (e && e.getAttribute('href')) || '/'),
        (n = n.replace(/^\w+:\/\/[^\/]+/, ''));
    } else n = '/';
  return n[0] !== '/' && n[0] !== '#' && (n = '/' + n), Rm(n);
}
const zm = /^[^#]+#/;
function Um(n, e) {
  return n.replace(zm, '#') + e;
}
function Bm(n, e) {
  const t = document.documentElement.getBoundingClientRect(),
    i = n.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: i.left - t.left - (e.left || 0),
    top: i.top - t.top - (e.top || 0),
  };
}
const fo = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function km(n) {
  let e;
  if ('el' in n) {
    const t = n.el,
      i = typeof t == 'string' && t.startsWith('#'),
      r =
        typeof t == 'string'
          ? i
            ? document.getElementById(t.slice(1))
            : document.querySelector(t)
          : t;
    if (!r) return;
    e = Bm(r, n);
  } else e = n;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function ac(n, e) {
  return (history.state ? history.state.position - e : -1) + n;
}
const Pa = new Map();
function Vm(n, e) {
  Pa.set(n, e);
}
function Gm(n) {
  const e = Pa.get(n);
  return Pa.delete(n), e;
}
let Hm = () => location.protocol + '//' + location.host;
function Kf(n, e) {
  const { pathname: t, search: i, hash: r } = e,
    s = n.indexOf('#');
  if (s > -1) {
    let a = r.includes(n.slice(s)) ? n.slice(s).length : 1,
      l = r.slice(a);
    return l[0] !== '/' && (l = '/' + l), sc(l, '');
  }
  return sc(t, n) + i + r;
}
function Wm(n, e, t, i) {
  let r = [],
    s = [],
    o = null;
  const a = ({ state: h }) => {
    const p = Kf(n, location),
      g = t.value,
      m = e.value;
    let d = 0;
    if (h) {
      if (((t.value = p), (e.value = h), o && o === g)) {
        o = null;
        return;
      }
      d = m ? h.position - m.position : 0;
    } else i(p);
    r.forEach(_ => {
      _(t.value, g, {
        delta: d,
        type: rs.pop,
        direction: d ? (d > 0 ? Zr.forward : Zr.back) : Zr.unknown,
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
    !h.state || h.replaceState($e({}, h.state, { scroll: fo() }), '');
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
function lc(n, e, t, i = !1, r = !1) {
  return {
    back: n,
    current: e,
    forward: t,
    replaced: i,
    position: window.history.length,
    scroll: r ? fo() : null,
  };
}
function qm(n) {
  const { history: e, location: t } = window,
    i = { value: Kf(n, t) },
    r = { value: e.state };
  r.value ||
    s(
      i.value,
      {
        back: null,
        current: i.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, c, u) {
    const f = n.indexOf('#'),
      h =
        f > -1
          ? (t.host && document.querySelector('base') ? n : n.slice(f)) + l
          : Hm() + n + l;
    try {
      e[u ? 'replaceState' : 'pushState'](c, '', h), (r.value = c);
    } catch (p) {
      console.error(p), t[u ? 'replace' : 'assign'](h);
    }
  }
  function o(l, c) {
    const u = $e({}, e.state, lc(r.value.back, l, r.value.forward, !0), c, {
      position: r.value.position,
    });
    s(l, u, !0), (i.value = l);
  }
  function a(l, c) {
    const u = $e({}, r.value, e.state, { forward: l, scroll: fo() });
    s(u.current, u, !0);
    const f = $e({}, lc(i.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (i.value = l);
  }
  return { location: i, state: r, push: a, replace: o };
}
function Xm(n) {
  n = Nm(n);
  const e = qm(n),
    t = Wm(n, e.state, e.location, e.replace);
  function i(s, o = !0) {
    o || t.pauseListeners(), history.go(s);
  }
  const r = $e(
    { location: '', base: n, go: i, createHref: Um.bind(null, n) },
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
function jm(n) {
  return (
    (n = location.host ? n || location.pathname + location.search : ''),
    n.includes('#') || (n += '#'),
    Xm(n)
  );
}
function $m(n) {
  return typeof n == 'string' || (n && typeof n == 'object');
}
function Jf(n) {
  return typeof n == 'string' || typeof n == 'symbol';
}
const zn = {
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
  Qf = Symbol('');
var cc;
(function (n) {
  (n[(n.aborted = 4)] = 'aborted'),
    (n[(n.cancelled = 8)] = 'cancelled'),
    (n[(n.duplicated = 16)] = 'duplicated');
})(cc || (cc = {}));
function br(n, e) {
  return $e(new Error(), { type: n, [Qf]: !0 }, e);
}
function bn(n, e) {
  return n instanceof Error && Qf in n && (e == null || !!(n.type & e));
}
const uc = '[^/]+?',
  Ym = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Zm = /[.+*?^${}()[\]/\\]/g;
function Km(n, e) {
  const t = $e({}, Ym, e),
    i = [];
  let r = t.start ? '^' : '';
  const s = [];
  for (const c of n) {
    const u = c.length ? [] : [90];
    t.strict && !c.length && (r += '/');
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let p = 40 + (t.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += '/'), (r += h.value.replace(Zm, '\\$&')), (p += 40);
      else if (h.type === 1) {
        const { value: g, repeatable: m, optional: d, regexp: _ } = h;
        s.push({ name: g, repeatable: m, optional: d });
        const x = _ || uc;
        if (x !== uc) {
          p += 10;
          try {
            new RegExp(`(${x})`);
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${x}): ` + S.message
            );
          }
        }
        let M = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        f || (M = d && c.length < 2 ? `(?:/${M})` : '/' + M),
          d && (M += '?'),
          (r += M),
          (p += 20),
          d && (p += -8),
          m && (p += -20),
          x === '.*' && (p += -50);
      }
      u.push(p);
    }
    i.push(u);
  }
  if (t.strict && t.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += 0.7000000000000001;
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
    for (const h of n) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const p of h)
        if (p.type === 0) u += p.value;
        else if (p.type === 1) {
          const { value: g, repeatable: m, optional: d } = p,
            _ = g in c ? c[g] : '';
          if (cn(_) && !m)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const x = cn(_) ? _.join('/') : _;
          if (!x)
            if (d)
              h.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += x;
        }
    }
    return u || '/';
  }
  return { re: o, score: i, keys: s, parse: a, stringify: l };
}
function Jm(n, e) {
  let t = 0;
  for (; t < n.length && t < e.length; ) {
    const i = e[t] - n[t];
    if (i) return i;
    t++;
  }
  return n.length < e.length
    ? n.length === 1 && n[0] === 40 + 40
      ? -1
      : 1
    : n.length > e.length
    ? e.length === 1 && e[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Qm(n, e) {
  let t = 0;
  const i = n.score,
    r = e.score;
  for (; t < i.length && t < r.length; ) {
    const s = Jm(i[t], r[t]);
    if (s) return s;
    t++;
  }
  if (Math.abs(r.length - i.length) === 1) {
    if (fc(i)) return 1;
    if (fc(r)) return -1;
  }
  return r.length - i.length;
}
function fc(n) {
  const e = n[n.length - 1];
  return n.length > 0 && e[e.length - 1] < 0;
}
const eg = { type: 0, value: '' },
  tg = /[a-zA-Z0-9_]/;
function ng(n) {
  if (!n) return [[]];
  if (n === '/') return [[eg]];
  if (!n.startsWith('/')) throw new Error(`Invalid path "${n}"`);
  function e(p) {
    throw new Error(`ERR (${t})/"${c}": ${p}`);
  }
  let t = 0,
    i = t;
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
  for (; a < n.length; ) {
    if (((l = n[a++]), l === '\\' && t !== 2)) {
      (i = t), (t = 4);
      continue;
    }
    switch (t) {
      case 0:
        l === '/' ? (c && f(), o()) : l === ':' ? (f(), (t = 1)) : h();
        break;
      case 4:
        h(), (t = i);
        break;
      case 1:
        l === '('
          ? (t = 2)
          : tg.test(l)
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
function ig(n, e, t) {
  const i = Km(ng(n.path), t),
    r = $e(i, { record: n, parent: e, children: [], alias: [] });
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function rg(n, e) {
  const t = [],
    i = new Map();
  e = pc({ strict: !1, end: !0, sensitive: !1 }, e);
  function r(u) {
    return i.get(u);
  }
  function s(u, f, h) {
    const p = !h,
      g = sg(u);
    g.aliasOf = h && h.record;
    const m = pc(e, u),
      d = [g];
    if ('alias' in u) {
      const M = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const S of M)
        d.push(
          $e({}, g, {
            components: h ? h.record.components : g.components,
            path: S,
            aliasOf: h ? h.record : g,
          })
        );
    }
    let _, x;
    for (const M of d) {
      const { path: S } = M;
      if (f && S[0] !== '/') {
        const b = f.record.path,
          P = b[b.length - 1] === '/' ? '' : '/';
        M.path = f.record.path + (S && P + S);
      }
      if (
        ((_ = ig(M, f, m)),
        h
          ? h.alias.push(_)
          : ((x = x || _),
            x !== _ && x.alias.push(_),
            p && u.name && !dc(_) && o(u.name)),
        g.children)
      ) {
        const b = g.children;
        for (let P = 0; P < b.length; P++) s(b[P], _, h && h.children[P]);
      }
      (h = h || _), l(_);
    }
    return x
      ? () => {
          o(x);
        }
      : Yr;
  }
  function o(u) {
    if (Jf(u)) {
      const f = i.get(u);
      f &&
        (i.delete(u),
        t.splice(t.indexOf(f), 1),
        f.children.forEach(o),
        f.alias.forEach(o));
    } else {
      const f = t.indexOf(u);
      f > -1 &&
        (t.splice(f, 1),
        u.record.name && i.delete(u.record.name),
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
      Qm(u, t[f]) >= 0 &&
      (u.record.path !== t[f].record.path || !eh(u, t[f]));

    )
      f++;
    t.splice(f, 0, u), u.record.name && !dc(u) && i.set(u.record.name, u);
  }
  function c(u, f) {
    let h,
      p = {},
      g,
      m;
    if ('name' in u && u.name) {
      if (((h = i.get(u.name)), !h)) throw br(1, { location: u });
      (m = h.record.name),
        (p = $e(
          hc(
            f.params,
            h.keys.filter(x => !x.optional).map(x => x.name)
          ),
          u.params &&
            hc(
              u.params,
              h.keys.map(x => x.name)
            )
        )),
        (g = h.stringify(p));
    } else if ('path' in u)
      (g = u.path),
        (h = t.find(x => x.re.test(g))),
        h && ((p = h.parse(g)), (m = h.record.name));
    else {
      if (((h = f.name ? i.get(f.name) : t.find(x => x.re.test(f.path))), !h))
        throw br(1, { location: u, currentLocation: f });
      (m = h.record.name),
        (p = $e({}, f.params, u.params)),
        (g = h.stringify(p));
    }
    const d = [];
    let _ = h;
    for (; _; ) d.unshift(_.record), (_ = _.parent);
    return { name: m, path: g, params: p, matched: d, meta: ag(d) };
  }
  return (
    n.forEach(u => s(u)),
    {
      addRoute: s,
      resolve: c,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: r,
    }
  );
}
function hc(n, e) {
  const t = {};
  for (const i of e) i in n && (t[i] = n[i]);
  return t;
}
function sg(n) {
  return {
    path: n.path,
    redirect: n.redirect,
    name: n.name,
    meta: n.meta || {},
    aliasOf: void 0,
    beforeEnter: n.beforeEnter,
    props: og(n),
    children: n.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in n
        ? n.components || null
        : n.component && { default: n.component },
  };
}
function og(n) {
  const e = {},
    t = n.props || !1;
  if ('component' in n) e.default = t;
  else for (const i in n.components) e[i] = typeof t == 'boolean' ? t : t[i];
  return e;
}
function dc(n) {
  for (; n; ) {
    if (n.record.aliasOf) return !0;
    n = n.parent;
  }
  return !1;
}
function ag(n) {
  return n.reduce((e, t) => $e(e, t.meta), {});
}
function pc(n, e) {
  const t = {};
  for (const i in n) t[i] = i in e ? e[i] : n[i];
  return t;
}
function eh(n, e) {
  return e.children.some(t => t === n || eh(n, t));
}
const th = /#/g,
  lg = /&/g,
  cg = /\//g,
  ug = /=/g,
  fg = /\?/g,
  nh = /\+/g,
  hg = /%5B/g,
  dg = /%5D/g,
  ih = /%5E/g,
  pg = /%60/g,
  rh = /%7B/g,
  mg = /%7C/g,
  sh = /%7D/g,
  gg = /%20/g;
function cl(n) {
  return encodeURI('' + n)
    .replace(mg, '|')
    .replace(hg, '[')
    .replace(dg, ']');
}
function _g(n) {
  return cl(n).replace(rh, '{').replace(sh, '}').replace(ih, '^');
}
function Ra(n) {
  return cl(n)
    .replace(nh, '%2B')
    .replace(gg, '+')
    .replace(th, '%23')
    .replace(lg, '%26')
    .replace(pg, '`')
    .replace(rh, '{')
    .replace(sh, '}')
    .replace(ih, '^');
}
function vg(n) {
  return Ra(n).replace(ug, '%3D');
}
function xg(n) {
  return cl(n).replace(th, '%23').replace(fg, '%3F');
}
function yg(n) {
  return n == null ? '' : xg(n).replace(cg, '%2F');
}
function Zs(n) {
  try {
    return decodeURIComponent('' + n);
  } catch {}
  return '' + n;
}
function Mg(n) {
  const e = {};
  if (n === '' || n === '?') return e;
  const i = (n[0] === '?' ? n.slice(1) : n).split('&');
  for (let r = 0; r < i.length; ++r) {
    const s = i[r].replace(nh, ' '),
      o = s.indexOf('='),
      a = Zs(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Zs(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      cn(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function mc(n) {
  let e = '';
  for (let t in n) {
    const i = n[t];
    if (((t = vg(t)), i == null)) {
      i !== void 0 && (e += (e.length ? '&' : '') + t);
      continue;
    }
    (cn(i) ? i.map(s => s && Ra(s)) : [i && Ra(i)]).forEach(s => {
      s !== void 0 &&
        ((e += (e.length ? '&' : '') + t), s != null && (e += '=' + s));
    });
  }
  return e;
}
function bg(n) {
  const e = {};
  for (const t in n) {
    const i = n[t];
    i !== void 0 &&
      (e[t] = cn(i)
        ? i.map(r => (r == null ? null : '' + r))
        : i == null
        ? i
        : '' + i);
  }
  return e;
}
const Sg = Symbol(''),
  gc = Symbol(''),
  ul = Symbol(''),
  oh = Symbol(''),
  Da = Symbol('');
function Nr() {
  let n = [];
  function e(i) {
    return (
      n.push(i),
      () => {
        const r = n.indexOf(i);
        r > -1 && n.splice(r, 1);
      }
    );
  }
  function t() {
    n = [];
  }
  return { add: e, list: () => n, reset: t };
}
function Xn(n, e, t, i, r) {
  const s = i && (i.enterCallbacks[r] = i.enterCallbacks[r] || []);
  return () =>
    new Promise((o, a) => {
      const l = f => {
          f === !1
            ? a(br(4, { from: t, to: e }))
            : f instanceof Error
            ? a(f)
            : $m(f)
            ? a(br(2, { from: e, to: f }))
            : (s &&
                i.enterCallbacks[r] === s &&
                typeof f == 'function' &&
                s.push(f),
              o());
        },
        c = n.call(i && i.instances[r], e, t, l);
      let u = Promise.resolve(c);
      n.length < 3 && (u = u.then(l)), u.catch(f => a(f));
    });
}
function Do(n, e, t, i) {
  const r = [];
  for (const s of n)
    for (const o in s.components) {
      let a = s.components[o];
      if (!(e !== 'beforeRouteEnter' && !s.instances[o]))
        if (wg(a)) {
          const c = (a.__vccOpts || a)[e];
          c && r.push(Xn(c, t, i, s, o));
        } else {
          let l = a();
          r.push(() =>
            l.then(c => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${s.path}"`)
                );
              const u = Lm(c) ? c.default : c;
              s.components[o] = u;
              const h = (u.__vccOpts || u)[e];
              return h && Xn(h, t, i, s, o)();
            })
          );
        }
    }
  return r;
}
function wg(n) {
  return (
    typeof n == 'object' ||
    'displayName' in n ||
    'props' in n ||
    '__vccOpts' in n
  );
}
function _c(n) {
  const e = Qn(ul),
    t = Qn(oh),
    i = gt(() => e.resolve(ut(n.to))),
    r = gt(() => {
      const { matched: l } = i.value,
        { length: c } = l,
        u = l[c - 1],
        f = t.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Mr.bind(null, u));
      if (h > -1) return h;
      const p = vc(l[c - 2]);
      return c > 1 && vc(u) === p && f[f.length - 1].path !== p
        ? f.findIndex(Mr.bind(null, l[c - 2]))
        : h;
    }),
    s = gt(() => r.value > -1 && Ag(t.params, i.value.params)),
    o = gt(
      () =>
        r.value > -1 &&
        r.value === t.matched.length - 1 &&
        Zf(t.params, i.value.params)
    );
  function a(l = {}) {
    return Tg(l)
      ? e[ut(n.replace) ? 'replace' : 'push'](ut(n.to)).catch(Yr)
      : Promise.resolve();
  }
  return {
    route: i,
    href: gt(() => i.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
const Eg = xn({
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
    useLink: _c,
    setup(n, { slots: e }) {
      const t = Oi(_c(n)),
        { options: i } = Qn(ul),
        r = gt(() => ({
          [xc(n.activeClass, i.linkActiveClass, 'router-link-active')]:
            t.isActive,
          [xc(
            n.exactActiveClass,
            i.linkExactActiveClass,
            'router-link-exact-active'
          )]: t.isExactActive,
        }));
      return () => {
        const s = e.default && e.default(t);
        return n.custom
          ? s
          : Yf(
              'a',
              {
                'aria-current': t.isExactActive ? n.ariaCurrentValue : null,
                href: t.href,
                onClick: t.navigate,
                class: r.value,
              },
              s
            );
      };
    },
  }),
  ah = Eg;
function Tg(n) {
  if (
    !(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) &&
    !n.defaultPrevented &&
    !(n.button !== void 0 && n.button !== 0)
  ) {
    if (n.currentTarget && n.currentTarget.getAttribute) {
      const e = n.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(e)) return;
    }
    return n.preventDefault && n.preventDefault(), !0;
  }
}
function Ag(n, e) {
  for (const t in e) {
    const i = e[t],
      r = n[t];
    if (typeof i == 'string') {
      if (i !== r) return !1;
    } else if (!cn(r) || r.length !== i.length || i.some((s, o) => s !== r[o]))
      return !1;
  }
  return !0;
}
function vc(n) {
  return n ? (n.aliasOf ? n.aliasOf.path : n.path) : '';
}
const xc = (n, e, t) => (n != null ? n : e != null ? e : t),
  Cg = xn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(n, { attrs: e, slots: t }) {
      const i = Qn(Da),
        r = gt(() => n.route || i.value),
        s = Qn(gc, 0),
        o = gt(() => {
          let c = ut(s);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = gt(() => r.value.matched[o.value]);
      Bs(
        gc,
        gt(() => o.value + 1)
      ),
        Bs(Sg, a),
        Bs(Da, r);
      const l = jn();
      return (
        ks(
          () => [l.value, a.value, n.name],
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
                (!p || !Mr(u, p) || !h) &&
                (u.enterCallbacks[f] || []).forEach(m => m(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = r.value,
            u = n.name,
            f = a.value,
            h = f && f.components[u];
          if (!h) return yc(t.default, { Component: h, route: c });
          const p = f.props[u],
            g = p
              ? p === !0
                ? c.params
                : typeof p == 'function'
                ? p(c)
                : p
              : null,
            d = Yf(
              h,
              $e({}, g, e, {
                onVnodeUnmounted: _ => {
                  _.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return yc(t.default, { Component: d, route: c }) || d;
        }
      );
    },
  });
function yc(n, e) {
  if (!n) return null;
  const t = n(e);
  return t.length === 1 ? t[0] : t;
}
const lh = Cg;
function Lg(n) {
  const e = rg(n.routes, n),
    t = n.parseQuery || Mg,
    i = n.stringifyQuery || mc,
    r = n.history,
    s = Nr(),
    o = Nr(),
    a = Nr(),
    l = $d(zn);
  let c = zn;
  ar &&
    n.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Po.bind(null, V => '' + V),
    f = Po.bind(null, yg),
    h = Po.bind(null, Zs);
  function p(V, I) {
    let ae, ce;
    return (
      Jf(V) ? ((ae = e.getRecordMatcher(V)), (ce = I)) : (ce = V),
      e.addRoute(ce, ae)
    );
  }
  function g(V) {
    const I = e.getRecordMatcher(V);
    I && e.removeRoute(I);
  }
  function m() {
    return e.getRoutes().map(V => V.record);
  }
  function d(V) {
    return !!e.getRecordMatcher(V);
  }
  function _(V, I) {
    if (((I = $e({}, I || l.value)), typeof V == 'string')) {
      const E = Ro(t, V, I.path),
        A = e.resolve({ path: E.path }, I),
        H = r.createHref(E.fullPath);
      return $e(E, A, {
        params: h(A.params),
        hash: Zs(E.hash),
        redirectedFrom: void 0,
        href: H,
      });
    }
    let ae;
    if ('path' in V) ae = $e({}, V, { path: Ro(t, V.path, I.path).path });
    else {
      const E = $e({}, V.params);
      for (const A in E) E[A] == null && delete E[A];
      (ae = $e({}, V, { params: f(V.params) })), (I.params = f(I.params));
    }
    const ce = e.resolve(ae, I),
      ve = V.hash || '';
    ce.params = u(h(ce.params));
    const _e = Dm(i, $e({}, V, { hash: _g(ve), path: ce.path })),
      Ee = r.createHref(_e);
    return $e(
      { fullPath: _e, hash: ve, query: i === mc ? bg(V.query) : V.query || {} },
      ce,
      { redirectedFrom: void 0, href: Ee }
    );
  }
  function x(V) {
    return typeof V == 'string' ? Ro(t, V, l.value.path) : $e({}, V);
  }
  function M(V, I) {
    if (c !== V) return br(8, { from: I, to: V });
  }
  function S(V) {
    return B(V);
  }
  function b(V) {
    return S($e(x(V), { replace: !0 }));
  }
  function P(V) {
    const I = V.matched[V.matched.length - 1];
    if (I && I.redirect) {
      const { redirect: ae } = I;
      let ce = typeof ae == 'function' ? ae(V) : ae;
      return (
        typeof ce == 'string' &&
          ((ce =
            ce.includes('?') || ce.includes('#') ? (ce = x(ce)) : { path: ce }),
          (ce.params = {})),
        $e(
          {
            query: V.query,
            hash: V.hash,
            params: 'path' in ce ? {} : V.params,
          },
          ce
        )
      );
    }
  }
  function B(V, I) {
    const ae = (c = _(V)),
      ce = l.value,
      ve = V.state,
      _e = V.force,
      Ee = V.replace === !0,
      E = P(ae);
    if (E)
      return B(
        $e(x(E), {
          state: typeof E == 'object' ? $e({}, ve, E.state) : ve,
          force: _e,
          replace: Ee,
        }),
        I || ae
      );
    const A = ae;
    A.redirectedFrom = I;
    let H;
    return (
      !_e &&
        Im(i, ce, ae) &&
        ((H = br(16, { to: A, from: ce })), X(ce, ce, !0, !1)),
      (H ? Promise.resolve(H) : L(A, ce))
        .catch(j => (bn(j) ? (bn(j, 2) ? j : z(j)) : Z(j, A, ce)))
        .then(j => {
          if (j) {
            if (bn(j, 2))
              return B(
                $e({ replace: Ee }, x(j.to), {
                  state: typeof j.to == 'object' ? $e({}, ve, j.to.state) : ve,
                  force: _e,
                }),
                I || A
              );
          } else j = Y(A, ce, !0, Ee, ve);
          return R(A, ce, j), j;
        })
    );
  }
  function y(V, I) {
    const ae = M(V, I);
    return ae ? Promise.reject(ae) : Promise.resolve();
  }
  function L(V, I) {
    let ae;
    const [ce, ve, _e] = Pg(V, I);
    ae = Do(ce.reverse(), 'beforeRouteLeave', V, I);
    for (const E of ce)
      E.leaveGuards.forEach(A => {
        ae.push(Xn(A, V, I));
      });
    const Ee = y.bind(null, V, I);
    return (
      ae.push(Ee),
      ki(ae)
        .then(() => {
          ae = [];
          for (const E of s.list()) ae.push(Xn(E, V, I));
          return ae.push(Ee), ki(ae);
        })
        .then(() => {
          ae = Do(ve, 'beforeRouteUpdate', V, I);
          for (const E of ve)
            E.updateGuards.forEach(A => {
              ae.push(Xn(A, V, I));
            });
          return ae.push(Ee), ki(ae);
        })
        .then(() => {
          ae = [];
          for (const E of V.matched)
            if (E.beforeEnter && !I.matched.includes(E))
              if (cn(E.beforeEnter))
                for (const A of E.beforeEnter) ae.push(Xn(A, V, I));
              else ae.push(Xn(E.beforeEnter, V, I));
          return ae.push(Ee), ki(ae);
        })
        .then(
          () => (
            V.matched.forEach(E => (E.enterCallbacks = {})),
            (ae = Do(_e, 'beforeRouteEnter', V, I)),
            ae.push(Ee),
            ki(ae)
          )
        )
        .then(() => {
          ae = [];
          for (const E of o.list()) ae.push(Xn(E, V, I));
          return ae.push(Ee), ki(ae);
        })
        .catch(E => (bn(E, 8) ? E : Promise.reject(E)))
    );
  }
  function R(V, I, ae) {
    for (const ce of a.list()) ce(V, I, ae);
  }
  function Y(V, I, ae, ce, ve) {
    const _e = M(V, I);
    if (_e) return _e;
    const Ee = I === zn,
      E = ar ? history.state : {};
    ae &&
      (ce || Ee
        ? r.replace(V.fullPath, $e({ scroll: Ee && E && E.scroll }, ve))
        : r.push(V.fullPath, ve)),
      (l.value = V),
      X(V, I, ae, Ee),
      z();
  }
  let de;
  function G() {
    de ||
      (de = r.listen((V, I, ae) => {
        if (!we.listening) return;
        const ce = _(V),
          ve = P(ce);
        if (ve) {
          B($e(ve, { replace: !0 }), ce).catch(Yr);
          return;
        }
        c = ce;
        const _e = l.value;
        ar && Vm(ac(_e.fullPath, ae.delta), fo()),
          L(ce, _e)
            .catch(Ee =>
              bn(Ee, 12)
                ? Ee
                : bn(Ee, 2)
                ? (B(Ee.to, ce)
                    .then(E => {
                      bn(E, 20) &&
                        !ae.delta &&
                        ae.type === rs.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Yr),
                  Promise.reject())
                : (ae.delta && r.go(-ae.delta, !1), Z(Ee, ce, _e))
            )
            .then(Ee => {
              (Ee = Ee || Y(ce, _e, !1)),
                Ee &&
                  (ae.delta && !bn(Ee, 8)
                    ? r.go(-ae.delta, !1)
                    : ae.type === rs.pop && bn(Ee, 20) && r.go(-1, !1)),
                R(ce, _e, Ee);
            })
            .catch(Yr);
      }));
  }
  let N = Nr(),
    te = Nr(),
    ie;
  function Z(V, I, ae) {
    z(V);
    const ce = te.list();
    return (
      ce.length ? ce.forEach(ve => ve(V, I, ae)) : console.error(V),
      Promise.reject(V)
    );
  }
  function W() {
    return ie && l.value !== zn
      ? Promise.resolve()
      : new Promise((V, I) => {
          N.add([V, I]);
        });
  }
  function z(V) {
    return (
      ie ||
        ((ie = !V),
        G(),
        N.list().forEach(([I, ae]) => (V ? ae(V) : I())),
        N.reset()),
      V
    );
  }
  function X(V, I, ae, ce) {
    const { scrollBehavior: ve } = n;
    if (!ar || !ve) return Promise.resolve();
    const _e =
      (!ae && Gm(ac(V.fullPath, 0))) ||
      ((ce || !ae) && history.state && history.state.scroll) ||
      null;
    return bf()
      .then(() => ve(V, I, _e))
      .then(Ee => Ee && km(Ee))
      .catch(Ee => Z(Ee, V, I));
  }
  const ue = V => r.go(V);
  let oe;
  const le = new Set(),
    we = {
      currentRoute: l,
      listening: !0,
      addRoute: p,
      removeRoute: g,
      hasRoute: d,
      getRoutes: m,
      resolve: _,
      options: n,
      push: S,
      replace: b,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: te.add,
      isReady: W,
      install(V) {
        const I = this;
        V.component('RouterLink', ah),
          V.component('RouterView', lh),
          (V.config.globalProperties.$router = I),
          Object.defineProperty(V.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => ut(l),
          }),
          ar &&
            !oe &&
            l.value === zn &&
            ((oe = !0), S(r.location).catch(ve => {}));
        const ae = {};
        for (const ve in zn) ae[ve] = gt(() => l.value[ve]);
        V.provide(ul, I), V.provide(oh, Oi(ae)), V.provide(Da, l);
        const ce = V.unmount;
        le.add(V),
          (V.unmount = function () {
            le.delete(V),
              le.size < 1 &&
                ((c = zn),
                de && de(),
                (de = null),
                (l.value = zn),
                (oe = !1),
                (ie = !1)),
              ce();
          });
      },
    };
  return we;
}
function ki(n) {
  return n.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function Pg(n, e) {
  const t = [],
    i = [],
    r = [],
    s = Math.max(e.matched.length, n.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (n.matched.find(c => Mr(c, a)) ? i.push(a) : t.push(a));
    const l = n.matched[o];
    l && (e.matched.find(c => Mr(c, l)) || r.push(l));
  }
  return [t, i, r];
}
const Rg = n => (n * Math.PI) / 180,
  Mc = (n, e) => {
    const t = Rg(360 / e),
      i = [];
    for (let r = 0; r < e; r += 1)
      i.push({ x: n * Math.cos(t * r), y: n * Math.sin(t * r) });
    return i;
  },
  Dg = ['#ff9974', '#4c84ff', '#35ccd4'],
  Li = [
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
  Ti = [
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
  Ks = [
    '\u5E74\u4EFD',
    '\u5B63\u5EA6',
    '\u540C\u6BD4',
    '\u73AF\u6BD4',
    '\u6392\u540D',
  ],
  bc = [...Li, ...Ti, ...Li, ...Ti, ...Ks];
var ch = {
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
  fl = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0,
  },
  Ig = [
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
  Js = { CSS: {}, springs: {} };
function _n(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function Kr(n, e) {
  return n.indexOf(e) > -1;
}
function Io(n, e) {
  return n.apply(null, e);
}
var Pe = {
  arr: function (n) {
    return Array.isArray(n);
  },
  obj: function (n) {
    return Kr(Object.prototype.toString.call(n), 'Object');
  },
  pth: function (n) {
    return Pe.obj(n) && n.hasOwnProperty('totalLength');
  },
  svg: function (n) {
    return n instanceof SVGElement;
  },
  inp: function (n) {
    return n instanceof HTMLInputElement;
  },
  dom: function (n) {
    return n.nodeType || Pe.svg(n);
  },
  str: function (n) {
    return typeof n == 'string';
  },
  fnc: function (n) {
    return typeof n == 'function';
  },
  und: function (n) {
    return typeof n > 'u';
  },
  nil: function (n) {
    return Pe.und(n) || n === null;
  },
  hex: function (n) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
  },
  rgb: function (n) {
    return /^rgb/.test(n);
  },
  hsl: function (n) {
    return /^hsl/.test(n);
  },
  col: function (n) {
    return Pe.hex(n) || Pe.rgb(n) || Pe.hsl(n);
  },
  key: function (n) {
    return (
      !ch.hasOwnProperty(n) &&
      !fl.hasOwnProperty(n) &&
      n !== 'targets' &&
      n !== 'keyframes'
    );
  },
};
function uh(n) {
  var e = /\(([^)]+)\)/.exec(n);
  return e
    ? e[1].split(',').map(function (t) {
        return parseFloat(t);
      })
    : [];
}
function fh(n, e) {
  var t = uh(n),
    i = _n(Pe.und(t[0]) ? 1 : t[0], 0.1, 100),
    r = _n(Pe.und(t[1]) ? 100 : t[1], 0.1, 100),
    s = _n(Pe.und(t[2]) ? 10 : t[2], 0.1, 100),
    o = _n(Pe.und(t[3]) ? 0 : t[3], 0.1, 100),
    a = Math.sqrt(r / i),
    l = s / (2 * Math.sqrt(r * i)),
    c = l < 1 ? a * Math.sqrt(1 - l * l) : 0,
    u = 1,
    f = l < 1 ? (l * a + -o) / c : -o + a;
  function h(g) {
    var m = e ? (e * g) / 1e3 : g;
    return (
      l < 1
        ? (m =
            Math.exp(-m * l * a) * (u * Math.cos(c * m) + f * Math.sin(c * m)))
        : (m = (u + f * m) * Math.exp(-m * a)),
      g === 0 || g === 1 ? g : 1 - m
    );
  }
  function p() {
    var g = Js.springs[n];
    if (g) return g;
    for (var m = 1 / 6, d = 0, _ = 0; ; )
      if (((d += m), h(d) === 1)) {
        if ((_++, _ >= 16)) break;
      } else _ = 0;
    var x = d * m * 1e3;
    return (Js.springs[n] = x), x;
  }
  return e ? h : p;
}
function Fg(n) {
  return (
    n === void 0 && (n = 10),
    function (e) {
      return Math.ceil(_n(e, 1e-6, 1) * n) * (1 / n);
    }
  );
}
var Og = (function () {
    var n = 11,
      e = 1 / (n - 1);
    function t(u, f) {
      return 1 - 3 * f + 3 * u;
    }
    function i(u, f) {
      return 3 * f - 6 * u;
    }
    function r(u) {
      return 3 * u;
    }
    function s(u, f, h) {
      return ((t(f, h) * u + i(f, h)) * u + r(f)) * u;
    }
    function o(u, f, h) {
      return 3 * t(f, h) * u * u + 2 * i(f, h) * u + r(f);
    }
    function a(u, f, h, p, g) {
      var m,
        d,
        _ = 0;
      do (d = f + (h - f) / 2), (m = s(d, p, g) - u), m > 0 ? (h = d) : (f = d);
      while (Math.abs(m) > 1e-7 && ++_ < 10);
      return d;
    }
    function l(u, f, h, p) {
      for (var g = 0; g < 4; ++g) {
        var m = o(f, h, p);
        if (m === 0) return f;
        var d = s(f, h, p) - u;
        f -= d / m;
      }
      return f;
    }
    function c(u, f, h, p) {
      if (!(0 <= u && u <= 1 && 0 <= h && h <= 1)) return;
      var g = new Float32Array(n);
      if (u !== f || h !== p) for (var m = 0; m < n; ++m) g[m] = s(m * e, u, h);
      function d(_) {
        for (var x = 0, M = 1, S = n - 1; M !== S && g[M] <= _; ++M) x += e;
        --M;
        var b = (_ - g[M]) / (g[M + 1] - g[M]),
          P = x + b * e,
          B = o(P, u, h);
        return B >= 0.001 ? l(_, P, u, h) : B === 0 ? P : a(_, x, x + e, u, h);
      }
      return function (_) {
        return (u === f && h === p) || _ === 0 || _ === 1 ? _ : s(d(_), f, p);
      };
    }
    return c;
  })(),
  hh = (function () {
    var n = {
        linear: function () {
          return function (i) {
            return i;
          };
        },
      },
      e = {
        Sine: function () {
          return function (i) {
            return 1 - Math.cos((i * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (i) {
            return 1 - Math.sqrt(1 - i * i);
          };
        },
        Back: function () {
          return function (i) {
            return i * i * (3 * i - 2);
          };
        },
        Bounce: function () {
          return function (i) {
            for (var r, s = 4; i < ((r = Math.pow(2, --s)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - s) -
              7.5625 * Math.pow((r * 3 - 2) / 22 - i, 2)
            );
          };
        },
        Elastic: function (i, r) {
          i === void 0 && (i = 1), r === void 0 && (r = 0.5);
          var s = _n(i, 1, 10),
            o = _n(r, 0.1, 2);
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
      t.forEach(function (i, r) {
        e[i] = function () {
          return function (s) {
            return Math.pow(s, r + 2);
          };
        };
      }),
      Object.keys(e).forEach(function (i) {
        var r = e[i];
        (n['easeIn' + i] = r),
          (n['easeOut' + i] = function (s, o) {
            return function (a) {
              return 1 - r(s, o)(1 - a);
            };
          }),
          (n['easeInOut' + i] = function (s, o) {
            return function (a) {
              return a < 0.5 ? r(s, o)(a * 2) / 2 : 1 - r(s, o)(a * -2 + 2) / 2;
            };
          }),
          (n['easeOutIn' + i] = function (s, o) {
            return function (a) {
              return a < 0.5
                ? (1 - r(s, o)(1 - a * 2)) / 2
                : (r(s, o)(a * 2 - 1) + 1) / 2;
            };
          });
      }),
      n
    );
  })();
function hl(n, e) {
  if (Pe.fnc(n)) return n;
  var t = n.split('(')[0],
    i = hh[t],
    r = uh(n);
  switch (t) {
    case 'spring':
      return fh(n, e);
    case 'cubicBezier':
      return Io(Og, r);
    case 'steps':
      return Io(Fg, r);
    default:
      return Io(i, r);
  }
}
function dh(n) {
  try {
    var e = document.querySelectorAll(n);
    return e;
  } catch {
    return;
  }
}
function ho(n, e) {
  for (
    var t = n.length,
      i = arguments.length >= 2 ? arguments[1] : void 0,
      r = [],
      s = 0;
    s < t;
    s++
  )
    if (s in n) {
      var o = n[s];
      e.call(i, o, s, n) && r.push(o);
    }
  return r;
}
function po(n) {
  return n.reduce(function (e, t) {
    return e.concat(Pe.arr(t) ? po(t) : t);
  }, []);
}
function Sc(n) {
  return Pe.arr(n)
    ? n
    : (Pe.str(n) && (n = dh(n) || n),
      n instanceof NodeList || n instanceof HTMLCollection
        ? [].slice.call(n)
        : [n]);
}
function dl(n, e) {
  return n.some(function (t) {
    return t === e;
  });
}
function pl(n) {
  var e = {};
  for (var t in n) e[t] = n[t];
  return e;
}
function Ia(n, e) {
  var t = pl(n);
  for (var i in n) t[i] = e.hasOwnProperty(i) ? e[i] : n[i];
  return t;
}
function mo(n, e) {
  var t = pl(n);
  for (var i in e) t[i] = Pe.und(n[i]) ? e[i] : n[i];
  return t;
}
function Ng(n) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
  return e ? 'rgba(' + e[1] + ',1)' : n;
}
function zg(n) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    t = n.replace(e, function (a, l, c, u) {
      return l + l + c + c + u + u;
    }),
    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
    r = parseInt(i[1], 16),
    s = parseInt(i[2], 16),
    o = parseInt(i[3], 16);
  return 'rgba(' + r + ',' + s + ',' + o + ',1)';
}
function Ug(n) {
  var e =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
    t = parseInt(e[1], 10) / 360,
    i = parseInt(e[2], 10) / 100,
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
  if (i == 0) a = l = c = r;
  else {
    var u = r < 0.5 ? r * (1 + i) : r + i - r * i,
      f = 2 * r - u;
    (a = o(f, u, t + 1 / 3)), (l = o(f, u, t)), (c = o(f, u, t - 1 / 3));
  }
  return 'rgba(' + a * 255 + ',' + l * 255 + ',' + c * 255 + ',' + s + ')';
}
function Bg(n) {
  if (Pe.rgb(n)) return Ng(n);
  if (Pe.hex(n)) return zg(n);
  if (Pe.hsl(n)) return Ug(n);
}
function Rn(n) {
  var e =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      n
    );
  if (e) return e[1];
}
function kg(n) {
  if (Kr(n, 'translate') || n === 'perspective') return 'px';
  if (Kr(n, 'rotate') || Kr(n, 'skew')) return 'deg';
}
function Fa(n, e) {
  return Pe.fnc(n) ? n(e.target, e.id, e.total) : n;
}
function vn(n, e) {
  return n.getAttribute(e);
}
function ml(n, e, t) {
  var i = Rn(e);
  if (dl([t, 'deg', 'rad', 'turn'], i)) return e;
  var r = Js.CSS[e + t];
  if (!Pe.und(r)) return r;
  var s = 100,
    o = document.createElement(n.tagName),
    a =
      n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
  a.appendChild(o), (o.style.position = 'absolute'), (o.style.width = s + t);
  var l = s / o.offsetWidth;
  a.removeChild(o);
  var c = l * parseFloat(e);
  return (Js.CSS[e + t] = c), c;
}
function ph(n, e, t) {
  if (e in n.style) {
    var i = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      r = n.style[e] || getComputedStyle(n).getPropertyValue(i) || '0';
    return t ? ml(n, r, t) : r;
  }
}
function gl(n, e) {
  if (Pe.dom(n) && !Pe.inp(n) && (!Pe.nil(vn(n, e)) || (Pe.svg(n) && n[e])))
    return 'attribute';
  if (Pe.dom(n) && dl(Ig, e)) return 'transform';
  if (Pe.dom(n) && e !== 'transform' && ph(n, e)) return 'css';
  if (n[e] != null) return 'object';
}
function mh(n) {
  if (!!Pe.dom(n)) {
    for (
      var e = n.style.transform || '',
        t = /(\w+)\(([^)]*)\)/g,
        i = new Map(),
        r;
      (r = t.exec(e));

    )
      i.set(r[1], r[2]);
    return i;
  }
}
function Vg(n, e, t, i) {
  var r = Kr(e, 'scale') ? 1 : 0 + kg(e),
    s = mh(n).get(e) || r;
  return (
    t && (t.transforms.list.set(e, s), (t.transforms.last = e)),
    i ? ml(n, s, i) : s
  );
}
function _l(n, e, t, i) {
  switch (gl(n, e)) {
    case 'transform':
      return Vg(n, e, i, t);
    case 'css':
      return ph(n, e, t);
    case 'attribute':
      return vn(n, e);
    default:
      return n[e] || 0;
  }
}
function vl(n, e) {
  var t = /^(\*=|\+=|-=)/.exec(n);
  if (!t) return n;
  var i = Rn(n) || 0,
    r = parseFloat(e),
    s = parseFloat(n.replace(t[0], ''));
  switch (t[0][0]) {
    case '+':
      return r + s + i;
    case '-':
      return r - s + i;
    case '*':
      return r * s + i;
  }
}
function gh(n, e) {
  if (Pe.col(n)) return Bg(n);
  if (/\s/g.test(n)) return n;
  var t = Rn(n),
    i = t ? n.substr(0, n.length - t.length) : n;
  return e ? i + e : i;
}
function xl(n, e) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
function Gg(n) {
  return Math.PI * 2 * vn(n, 'r');
}
function Hg(n) {
  return vn(n, 'width') * 2 + vn(n, 'height') * 2;
}
function Wg(n) {
  return xl(
    { x: vn(n, 'x1'), y: vn(n, 'y1') },
    { x: vn(n, 'x2'), y: vn(n, 'y2') }
  );
}
function _h(n) {
  for (var e = n.points, t = 0, i, r = 0; r < e.numberOfItems; r++) {
    var s = e.getItem(r);
    r > 0 && (t += xl(i, s)), (i = s);
  }
  return t;
}
function qg(n) {
  var e = n.points;
  return _h(n) + xl(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function vh(n) {
  if (n.getTotalLength) return n.getTotalLength();
  switch (n.tagName.toLowerCase()) {
    case 'circle':
      return Gg(n);
    case 'rect':
      return Hg(n);
    case 'line':
      return Wg(n);
    case 'polyline':
      return _h(n);
    case 'polygon':
      return qg(n);
  }
}
function Xg(n) {
  var e = vh(n);
  return n.setAttribute('stroke-dasharray', e), e;
}
function jg(n) {
  for (var e = n.parentNode; Pe.svg(e) && Pe.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function xh(n, e) {
  var t = e || {},
    i = t.el || jg(n),
    r = i.getBoundingClientRect(),
    s = vn(i, 'viewBox'),
    o = r.width,
    a = r.height,
    l = t.viewBox || (s ? s.split(' ') : [0, 0, o, a]);
  return {
    el: i,
    viewBox: l,
    x: l[0] / 1,
    y: l[1] / 1,
    w: o,
    h: a,
    vW: l[2],
    vH: l[3],
  };
}
function $g(n, e) {
  var t = Pe.str(n) ? dh(n)[0] : n,
    i = e || 100;
  return function (r) {
    return { property: r, el: t, svg: xh(t), totalLength: vh(t) * (i / 100) };
  };
}
function Yg(n, e, t) {
  function i(u) {
    u === void 0 && (u = 0);
    var f = e + u >= 1 ? e + u : 0;
    return n.el.getPointAtLength(f);
  }
  var r = xh(n.el, n.svg),
    s = i(),
    o = i(-1),
    a = i(1),
    l = t ? 1 : r.w / r.vW,
    c = t ? 1 : r.h / r.vH;
  switch (n.property) {
    case 'x':
      return (s.x - r.x) * l;
    case 'y':
      return (s.y - r.y) * c;
    case 'angle':
      return (Math.atan2(a.y - o.y, a.x - o.x) * 180) / Math.PI;
  }
}
function wc(n, e) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    i = gh(Pe.pth(n) ? n.totalLength : n, e) + '';
  return {
    original: i,
    numbers: i.match(t) ? i.match(t).map(Number) : [0],
    strings: Pe.str(n) || e ? i.split(t) : [],
  };
}
function yl(n) {
  var e = n ? po(Pe.arr(n) ? n.map(Sc) : Sc(n)) : [];
  return ho(e, function (t, i, r) {
    return r.indexOf(t) === i;
  });
}
function yh(n) {
  var e = yl(n);
  return e.map(function (t, i) {
    return { target: t, id: i, total: e.length, transforms: { list: mh(t) } };
  });
}
function Zg(n, e) {
  var t = pl(e);
  if ((/^spring/.test(t.easing) && (t.duration = fh(t.easing)), Pe.arr(n))) {
    var i = n.length,
      r = i === 2 && !Pe.obj(n[0]);
    r
      ? (n = { value: n })
      : Pe.fnc(e.duration) || (t.duration = e.duration / i);
  }
  var s = Pe.arr(n) ? n : [n];
  return s
    .map(function (o, a) {
      var l = Pe.obj(o) && !Pe.pth(o) ? o : { value: o };
      return (
        Pe.und(l.delay) && (l.delay = a ? 0 : e.delay),
        Pe.und(l.endDelay) &&
          (l.endDelay = a === s.length - 1 ? e.endDelay : 0),
        l
      );
    })
    .map(function (o) {
      return mo(o, t);
    });
}
function Kg(n) {
  for (
    var e = ho(
        po(
          n.map(function (s) {
            return Object.keys(s);
          })
        ),
        function (s) {
          return Pe.key(s);
        }
      ).reduce(function (s, o) {
        return s.indexOf(o) < 0 && s.push(o), s;
      }, []),
      t = {},
      i = function (s) {
        var o = e[s];
        t[o] = n.map(function (a) {
          var l = {};
          for (var c in a)
            Pe.key(c) ? c == o && (l.value = a[c]) : (l[c] = a[c]);
          return l;
        });
      },
      r = 0;
    r < e.length;
    r++
  )
    i(r);
  return t;
}
function Jg(n, e) {
  var t = [],
    i = e.keyframes;
  i && (e = mo(Kg(i), e));
  for (var r in e) Pe.key(r) && t.push({ name: r, tweens: Zg(e[r], n) });
  return t;
}
function Qg(n, e) {
  var t = {};
  for (var i in n) {
    var r = Fa(n[i], e);
    Pe.arr(r) &&
      ((r = r.map(function (s) {
        return Fa(s, e);
      })),
      r.length === 1 && (r = r[0])),
      (t[i] = r);
  }
  return (
    (t.duration = parseFloat(t.duration)), (t.delay = parseFloat(t.delay)), t
  );
}
function e_(n, e) {
  var t;
  return n.tweens.map(function (i) {
    var r = Qg(i, e),
      s = r.value,
      o = Pe.arr(s) ? s[1] : s,
      a = Rn(o),
      l = _l(e.target, n.name, a, e),
      c = t ? t.to.original : l,
      u = Pe.arr(s) ? s[0] : c,
      f = Rn(u) || Rn(l),
      h = a || f;
    return (
      Pe.und(o) && (o = c),
      (r.from = wc(u, h)),
      (r.to = wc(vl(o, u), h)),
      (r.start = t ? t.end : 0),
      (r.end = r.start + r.delay + r.duration + r.endDelay),
      (r.easing = hl(r.easing, r.duration)),
      (r.isPath = Pe.pth(s)),
      (r.isPathTargetInsideSVG = r.isPath && Pe.svg(e.target)),
      (r.isColor = Pe.col(r.from.original)),
      r.isColor && (r.round = 1),
      (t = r),
      r
    );
  });
}
var Mh = {
  css: function (n, e, t) {
    return (n.style[e] = t);
  },
  attribute: function (n, e, t) {
    return n.setAttribute(e, t);
  },
  object: function (n, e, t) {
    return (n[e] = t);
  },
  transform: function (n, e, t, i, r) {
    if ((i.list.set(e, t), e === i.last || r)) {
      var s = '';
      i.list.forEach(function (o, a) {
        s += a + '(' + o + ') ';
      }),
        (n.style.transform = s);
    }
  },
};
function bh(n, e) {
  var t = yh(n);
  t.forEach(function (i) {
    for (var r in e) {
      var s = Fa(e[r], i),
        o = i.target,
        a = Rn(s),
        l = _l(o, r, a, i),
        c = a || Rn(l),
        u = vl(gh(s, c), l),
        f = gl(o, r);
      Mh[f](o, r, u, i.transforms, !0);
    }
  });
}
function t_(n, e) {
  var t = gl(n.target, e.name);
  if (t) {
    var i = e_(e, n),
      r = i[i.length - 1];
    return {
      type: t,
      property: e.name,
      animatable: n,
      tweens: i,
      duration: r.end,
      delay: i[0].delay,
      endDelay: r.endDelay,
    };
  }
}
function n_(n, e) {
  return ho(
    po(
      n.map(function (t) {
        return e.map(function (i) {
          return t_(t, i);
        });
      })
    ),
    function (t) {
      return !Pe.und(t);
    }
  );
}
function Sh(n, e) {
  var t = n.length,
    i = function (s) {
      return s.timelineOffset ? s.timelineOffset : 0;
    },
    r = {};
  return (
    (r.duration = t
      ? Math.max.apply(
          Math,
          n.map(function (s) {
            return i(s) + s.duration;
          })
        )
      : e.duration),
    (r.delay = t
      ? Math.min.apply(
          Math,
          n.map(function (s) {
            return i(s) + s.delay;
          })
        )
      : e.delay),
    (r.endDelay = t
      ? r.duration -
        Math.max.apply(
          Math,
          n.map(function (s) {
            return i(s) + s.duration - s.endDelay;
          })
        )
      : e.endDelay),
    r
  );
}
var Ec = 0;
function i_(n) {
  var e = Ia(ch, n),
    t = Ia(fl, n),
    i = Jg(t, n),
    r = yh(n.targets),
    s = n_(r, i),
    o = Sh(s, t),
    a = Ec;
  return (
    Ec++,
    mo(e, {
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
var en = [],
  wh = (function () {
    var n;
    function e() {
      !n &&
        (!Tc() || !rt.suspendWhenDocumentHidden) &&
        en.length > 0 &&
        (n = requestAnimationFrame(t));
    }
    function t(r) {
      for (var s = en.length, o = 0; o < s; ) {
        var a = en[o];
        a.paused ? (en.splice(o, 1), s--) : (a.tick(r), o++);
      }
      n = o > 0 ? requestAnimationFrame(t) : void 0;
    }
    function i() {
      !rt.suspendWhenDocumentHidden ||
        (Tc()
          ? (n = cancelAnimationFrame(n))
          : (en.forEach(function (r) {
              return r._onDocumentVisibility();
            }),
            wh()));
    }
    return (
      typeof document < 'u' && document.addEventListener('visibilitychange', i),
      e
    );
  })();
function Tc() {
  return !!document && document.hidden;
}
function rt(n) {
  n === void 0 && (n = {});
  var e = 0,
    t = 0,
    i = 0,
    r,
    s = 0,
    o = null;
  function a(x) {
    var M =
      window.Promise &&
      new Promise(function (S) {
        return (o = S);
      });
    return (x.finished = M), M;
  }
  var l = i_(n);
  a(l);
  function c() {
    var x = l.direction;
    x !== 'alternate' && (l.direction = x !== 'normal' ? 'normal' : 'reverse'),
      (l.reversed = !l.reversed),
      r.forEach(function (M) {
        return (M.reversed = l.reversed);
      });
  }
  function u(x) {
    return l.reversed ? l.duration - x : x;
  }
  function f() {
    (e = 0), (t = u(l.currentTime) * (1 / rt.speed));
  }
  function h(x, M) {
    M && M.seek(x - M.timelineOffset);
  }
  function p(x) {
    if (l.reversePlayback) for (var S = s; S--; ) h(x, r[S]);
    else for (var M = 0; M < s; M++) h(x, r[M]);
  }
  function g(x) {
    for (var M = 0, S = l.animations, b = S.length; M < b; ) {
      var P = S[M],
        B = P.animatable,
        y = P.tweens,
        L = y.length - 1,
        R = y[L];
      L &&
        (R =
          ho(y, function (I) {
            return x < I.end;
          })[0] || R);
      for (
        var Y = _n(x - R.start - R.delay, 0, R.duration) / R.duration,
          de = isNaN(Y) ? 1 : R.easing(Y),
          G = R.to.strings,
          N = R.round,
          te = [],
          ie = R.to.numbers.length,
          Z = void 0,
          W = 0;
        W < ie;
        W++
      ) {
        var z = void 0,
          X = R.to.numbers[W],
          ue = R.from.numbers[W] || 0;
        R.isPath
          ? (z = Yg(R.value, de * X, R.isPathTargetInsideSVG))
          : (z = ue + de * (X - ue)),
          N && ((R.isColor && W > 2) || (z = Math.round(z * N) / N)),
          te.push(z);
      }
      var oe = G.length;
      if (!oe) Z = te[0];
      else {
        Z = G[0];
        for (var le = 0; le < oe; le++) {
          G[le];
          var we = G[le + 1],
            V = te[le];
          isNaN(V) || (we ? (Z += V + we) : (Z += V + ' '));
        }
      }
      Mh[P.type](B.target, P.property, Z, B.transforms),
        (P.currentValue = Z),
        M++;
    }
  }
  function m(x) {
    l[x] && !l.passThrough && l[x](l);
  }
  function d() {
    l.remaining && l.remaining !== !0 && l.remaining--;
  }
  function _(x) {
    var M = l.duration,
      S = l.delay,
      b = M - l.endDelay,
      P = u(x);
    (l.progress = _n((P / M) * 100, 0, 100)),
      (l.reversePlayback = P < l.currentTime),
      r && p(P),
      !l.began && l.currentTime > 0 && ((l.began = !0), m('begin')),
      !l.loopBegan && l.currentTime > 0 && ((l.loopBegan = !0), m('loopBegin')),
      P <= S && l.currentTime !== 0 && g(0),
      ((P >= b && l.currentTime !== M) || !M) && g(M),
      P > S && P < b
        ? (l.changeBegan ||
            ((l.changeBegan = !0), (l.changeCompleted = !1), m('changeBegin')),
          m('change'),
          g(P))
        : l.changeBegan &&
          ((l.changeCompleted = !0), (l.changeBegan = !1), m('changeComplete')),
      (l.currentTime = _n(P, 0, M)),
      l.began && m('update'),
      x >= M &&
        ((t = 0),
        d(),
        l.remaining
          ? ((e = i),
            m('loopComplete'),
            (l.loopBegan = !1),
            l.direction === 'alternate' && c())
          : ((l.paused = !0),
            l.completed ||
              ((l.completed = !0),
              m('loopComplete'),
              m('complete'),
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
      for (var M = s; M--; ) l.children[M].reset();
      ((l.reversed && l.loop !== !0) || (x === 'alternate' && l.loop === 1)) &&
        l.remaining++,
        g(l.reversed ? l.duration : 0);
    }),
    (l._onDocumentVisibility = f),
    (l.set = function (x, M) {
      return bh(x, M), l;
    }),
    (l.tick = function (x) {
      (i = x), e || (e = i), _((i + (t - e)) * rt.speed);
    }),
    (l.seek = function (x) {
      _(u(x));
    }),
    (l.pause = function () {
      (l.paused = !0), f();
    }),
    (l.play = function () {
      !l.paused ||
        (l.completed && l.reset(), (l.paused = !1), en.push(l), f(), wh());
    }),
    (l.reverse = function () {
      c(), (l.completed = !l.reversed), f();
    }),
    (l.restart = function () {
      l.reset(), l.play();
    }),
    (l.remove = function (x) {
      var M = yl(x);
      Eh(M, l);
    }),
    l.reset(),
    l.autoplay && l.play(),
    l
  );
}
function Ac(n, e) {
  for (var t = e.length; t--; ) dl(n, e[t].animatable.target) && e.splice(t, 1);
}
function Eh(n, e) {
  var t = e.animations,
    i = e.children;
  Ac(n, t);
  for (var r = i.length; r--; ) {
    var s = i[r],
      o = s.animations;
    Ac(n, o), !o.length && !s.children.length && i.splice(r, 1);
  }
  !t.length && !i.length && e.pause();
}
function r_(n) {
  for (var e = yl(n), t = en.length; t--; ) {
    var i = en[t];
    Eh(e, i);
  }
}
function s_(n, e) {
  e === void 0 && (e = {});
  var t = e.direction || 'normal',
    i = e.easing ? hl(e.easing) : null,
    r = e.grid,
    s = e.axis,
    o = e.from || 0,
    a = o === 'first',
    l = o === 'center',
    c = o === 'last',
    u = Pe.arr(n),
    f = parseFloat(u ? n[0] : n),
    h = u ? parseFloat(n[1]) : 0,
    p = Rn(u ? n[1] : n) || 0,
    g = e.start || 0 + (u ? f : 0),
    m = [],
    d = 0;
  return function (_, x, M) {
    if ((a && (o = 0), l && (o = (M - 1) / 2), c && (o = M - 1), !m.length)) {
      for (var S = 0; S < M; S++) {
        if (!r) m.push(Math.abs(o - S));
        else {
          var b = l ? (r[0] - 1) / 2 : o % r[0],
            P = l ? (r[1] - 1) / 2 : Math.floor(o / r[0]),
            B = S % r[0],
            y = Math.floor(S / r[0]),
            L = b - B,
            R = P - y,
            Y = Math.sqrt(L * L + R * R);
          s === 'x' && (Y = -L), s === 'y' && (Y = -R), m.push(Y);
        }
        d = Math.max.apply(Math, m);
      }
      i &&
        (m = m.map(function (G) {
          return i(G / d) * d;
        })),
        t === 'reverse' &&
          (m = m.map(function (G) {
            return s ? (G < 0 ? G * -1 : -G) : Math.abs(d - G);
          }));
    }
    var de = u ? (h - f) / d : f;
    return g + de * (Math.round(m[x] * 100) / 100) + p;
  };
}
function o_(n) {
  n === void 0 && (n = {});
  var e = rt(n);
  return (
    (e.duration = 0),
    (e.add = function (t, i) {
      var r = en.indexOf(e),
        s = e.children;
      r > -1 && en.splice(r, 1);
      function o(h) {
        h.passThrough = !0;
      }
      for (var a = 0; a < s.length; a++) o(s[a]);
      var l = mo(t, Ia(fl, n));
      l.targets = l.targets || n.targets;
      var c = e.duration;
      (l.autoplay = !1),
        (l.direction = e.direction),
        (l.timelineOffset = Pe.und(i) ? c : vl(i, c)),
        o(e),
        e.seek(l.timelineOffset);
      var u = rt(l);
      o(u), s.push(u);
      var f = Sh(s, n);
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
rt.version = '3.2.1';
rt.speed = 1;
rt.suspendWhenDocumentHidden = !0;
rt.running = en;
rt.remove = r_;
rt.get = _l;
rt.set = bh;
rt.convertPx = ml;
rt.path = $g;
rt.setDashoffset = Xg;
rt.stagger = s_;
rt.timeline = o_;
rt.easing = hl;
rt.penner = hh;
rt.random = function (n, e) {
  return Math.floor(Math.random() * (e - n + 1)) + n;
};
var a_ =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Th = { exports: {} };
/*!
 * TagCloud.js v2.3.0
 * Copyright (c) 2016-2022 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function (n, e) {
  (function (t, i) {
    n.exports = i();
  })(a_, function () {
    function t(f, h) {
      if (!(f instanceof h))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        (g.enumerable = g.enumerable || !1),
          (g.configurable = !0),
          'value' in g && (g.writable = !0),
          Object.defineProperty(f, g.key, g);
      }
    }
    function r(f, h, p) {
      return h && i(f.prototype, h), p && i(f, p), f;
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
          (g = g.filter(function (m) {
            return Object.getOwnPropertyDescriptor(f, m).enumerable;
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
        var m = this;
        if (!h || h.nodeType !== 1) return new Error('Incorrect element type');
        (m.$container = h),
          (m.texts = p || []),
          (m.config = l(l({}, f._defaultConfig), g || {})),
          (m.radius = m.config.radius),
          (m.depth = 2 * m.radius),
          (m.size = 1.5 * m.radius),
          (m.maxSpeed = f._getMaxSpeed(m.config.maxSpeed)),
          (m.initSpeed = f._getInitSpeed(m.config.initSpeed)),
          (m.direction = m.config.direction),
          (m.keep = m.config.keep),
          (m.paused = !1),
          m._createElment(),
          m._init(),
          f.list.push({ el: m.$el, container: h, instance: m });
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
                  p.texts.forEach(function (m, d) {
                    var _ = p._createTextItem(m, d);
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
                  m = this,
                  d = document.createElement('span');
                if (
                  ((d.className = m.config.itemClass),
                  m.config.useItemInlineStyles)
                ) {
                  (d.style.willChange = 'transform, opacity, filter'),
                    (d.style.position = 'absolute'),
                    (d.style.top = '50%'),
                    (d.style.left = '50%'),
                    (d.style.zIndex = g + 1),
                    (d.style.filter = 'alpha(opacity=0)'),
                    (d.style.opacity = 0);
                  var _ = '50% 50%';
                  (d.style.WebkitTransformOrigin = _),
                    (d.style.MozTransformOrigin = _),
                    (d.style.OTransformOrigin = _),
                    (d.style.transformOrigin = _);
                  var x = 'translate3d(-50%, -50%, 0) scale(1)';
                  (d.style.WebkitTransform = x),
                    (d.style.MozTransform = x),
                    (d.style.OTransform = x),
                    (d.style.transform = x);
                }
                return (d.innerText = p), l({ el: d }, m._computePosition(g));
              },
            },
            {
              key: '_computePosition',
              value: function (p) {
                var g =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1,
                  m = this,
                  d = m.texts.length;
                g && (p = Math.floor(Math.random() * (d + 1)));
                var _ = Math.acos(-1 + (2 * p + 1) / d),
                  x = Math.sqrt((d + 1) * Math.PI) * _;
                return {
                  x: (m.size * Math.cos(x) * Math.sin(_)) / 2,
                  y: (m.size * Math.sin(x) * Math.sin(_)) / 2,
                  z: (m.size * Math.cos(_)) / 2,
                };
              },
            },
            {
              key: '_requestInterval',
              value: function (p, g) {
                var m = (function () {
                    return window.requestAnimationFrame;
                  })(),
                  d = new Date().getTime(),
                  _ = {};
                function x() {
                  _.value = m(x);
                  var M = new Date().getTime(),
                    S = M - d;
                  S >= g && (p.call(), (d = new Date().getTime()));
                }
                return (_.value = m(x)), _;
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
                  f._on(p.keep ? window : p.$el, 'mousemove', function (m) {
                    m = m || window.event;
                    var d = p.$el.getBoundingClientRect();
                    (p.mouseX = (m.clientX - (d.left + d.width / 2)) / 5),
                      (p.mouseY = (m.clientY - (d.top + d.height / 2)) / 5);
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
                    m =
                      (Math.min(Math.max(-p.mouseX, -p.size), p.size) /
                        p.radius) *
                      p.maxSpeed;
                  if (!(Math.abs(g) <= 0.01 && Math.abs(m) <= 0.01)) {
                    var d = Math.PI / 180,
                      _ = [
                        Math.sin(g * d),
                        Math.cos(g * d),
                        Math.sin(m * d),
                        Math.cos(m * d),
                      ];
                    p.items.forEach(function (x) {
                      var M = x.x,
                        S = x.y * _[1] + x.z * -_[0],
                        b = x.y * _[0] + x.z * _[1],
                        P = M * _[3] + b * _[2],
                        B = S,
                        y = b * _[3] - M * _[2],
                        L = (2 * p.depth) / (2 * p.depth + y);
                      (x.x = P), (x.y = B), (x.z = y), (x.scale = L.toFixed(3));
                      var R = L * L - 0.25;
                      R = (R > 1 ? 1 : R).toFixed(3);
                      var Y = x.el,
                        de = (x.x - Y.offsetWidth / 2).toFixed(2),
                        G = (x.y - Y.offsetHeight / 2).toFixed(2),
                        N = 'translate3d('
                          .concat(de, 'px, ')
                          .concat(G, 'px, 0) scale(')
                          .concat(x.scale, ')');
                      (Y.style.WebkitTransform = N),
                        (Y.style.MozTransform = N),
                        (Y.style.OTransform = N),
                        (Y.style.transform = N),
                        (Y.style.filter = 'alpha(opacity='.concat(
                          100 * R,
                          ')'
                        )),
                        (Y.style.opacity = R);
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
                  g.texts.forEach(function (x, M) {
                    var S = g.items[M];
                    S ||
                      ((S = g._createTextItem(x, M)),
                      o(S, g._computePosition(M, !0)),
                      g.$el.appendChild(S.el),
                      g.items.push(S)),
                      (S.el.innerText = x);
                  });
                var m = g.texts.length,
                  d = g.items.length;
                if (m < d) {
                  var _ = g.items.splice(m, d - m);
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
                var g = f.list.findIndex(function (m) {
                  return m.el === p.$el;
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
              value: function (p, g, m, d) {
                p.addEventListener
                  ? p.addEventListener(g, m, d)
                  : p.attachEvent
                  ? p.attachEvent('on'.concat(g), m)
                  : (p['on'.concat(g)] = m);
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
        f.forEach(function (m) {
          m && g.push(new c(m, h, p));
        }),
        g.length <= 1 ? g[0] : g
      );
    };
    return u;
  });
})(Th);
const Ah = Th.exports,
  l_ = xn({
    __name: 'TagCloud',
    props: {
      name: { type: String, required: !0, default: 'tag' },
      data: { type: Array, required: !1, default: () => [] },
      options: { type: Object, required: !1, default: () => ({}) },
    },
    setup(n) {
      const e = n,
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
        i = gt(() => `${e.name} tag-cloud`),
        r = () => {
          const o = document.querySelectorAll(`.${e.name} .tagcloud--item`);
          for (const a of o) {
            const l = Math.floor(Math.random() * 3);
            (a.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][l]),
              (a.style.fontSize = ['12px', '16px', '18px'][l]),
              (a.style.fontWeight = 'bolder');
          }
        },
        s = () => {
          const o = {
            useContainerInlineStyles: !1,
            radius: 120,
            keep: !0,
            maxSpeed: 'fast',
            initSpeed: 'normal',
            ...e.options,
          };
          Ah(
            [document.querySelector(`.${e.name}`)],
            e.data.length ? e.data : t,
            o
          ),
            r();
        };
      return (
        os(() => {
          s();
        }),
        (o, a) => (at(), ct('div', { class: Cr(ut(i)) }, null, 2))
      );
    },
  });
const Ml = (n, e) => {
    const t = n.__vccOpts || n;
    for (const [i, r] of e) t[i] = r;
    return t;
  },
  c_ = Ml(l_, [['__scopeId', 'data-v-2ff06d8d']]),
  u_ = { class: 'wheel-wrapper' },
  f_ = { class: 'wheel' },
  h_ = { class: 'wheel-dimension' },
  d_ = { class: 'wheel-text' },
  p_ = { class: 'wheel-core' },
  m_ = { class: 'wheel-text' },
  g_ = { class: 'word-content' },
  __ = xn({
    __name: 'Index2',
    setup(n) {
      const e = jn(),
        t = jn();
      jn();
      const i = jn(),
        r = Oi({
          cR: 200,
          cCount: 10,
          dR: 400,
          dCount: 8,
          textWidth: 100,
          textHeight: 50,
        }),
        s = jn(!0),
        o = gt(() =>
          Mc(r.cR, Li.length).map((l, c) => ({
            x: l.x - r.textWidth / 2,
            y: l.y - r.textHeight / 2,
            fontSize: 12 * (Math.random() + 1),
            value: Li[c],
          }))
        ),
        a = gt(() =>
          Mc(r.dR, Ks.length).map((l, c) => ({
            ...l,
            x: l.x - r.textWidth / 2,
            y: l.y - r.textHeight / 2,
            value: Ks[c],
          }))
        );
      return (l, c) => (
        at(),
        ct('div', u_, [
          Je('div', f_, [
            Je('div', h_, [
              Je(
                'div',
                {
                  ref_key: 'wheelDimensionRef',
                  ref: i,
                  class: 'dimension-content',
                },
                [
                  Je('div', d_, [
                    (at(!0),
                    ct(
                      St,
                      null,
                      xr(
                        ut(a),
                        (u, f) => (
                          at(),
                          ct(
                            'div',
                            {
                              key: f,
                              class: 'text',
                              style: ni({ top: `${u.y}px`, left: `${u.x}px` }),
                            },
                            gr(u.value),
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
            Je('div', p_, [
              Je(
                'div',
                { ref_key: 'wheelCoreRef', ref: e, class: 'core-content' },
                [
                  Je('div', m_, [
                    (at(!0),
                    ct(
                      St,
                      null,
                      xr(
                        ut(o),
                        (u, f) => (
                          at(),
                          ct(
                            'div',
                            {
                              key: f,
                              class: 'text',
                              style: ni({
                                top: `${u.y}px`,
                                left: `${u.x}px`,
                                fontSize: `${u.fontSize}px`,
                              }),
                            },
                            gr(u.value),
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
            Je(
              'div',
              {
                ref_key: 'wheelWordRef',
                ref: t,
                class: Cr(['wheel-word', { 'wheel-tag': s.value }]),
              },
              [
                kl(_t(c_, { data: ut(Ti) }, null, 8, ['data']), [
                  [nc, s.value],
                ]),
                kl(Je('div', g_, null, 512), [[nc, !s.value]]),
              ],
              2
            ),
          ]),
        ])
      );
    },
  });
const v_ = xn({
  __name: 'TagCloud',
  props: {
    name: { type: String, required: !0, default: 'tag' },
    data: { type: Array, required: !1, default: () => [] },
    options: { type: Object, required: !1, default: () => ({}) },
  },
  setup(n) {
    const e = n,
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
      i = gt(() => `${e.name} tag-cloud`),
      r = () => {
        const o = document.querySelectorAll(`.${e.name} .tagcloud--item`);
        for (const a of o) {
          const l = Math.floor(Math.random() * 3);
          (a.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][l]),
            (a.style.fontSize = ['16px', '20px', '24px'][l]);
        }
      },
      s = () => {
        const o = {
          radius: 120,
          keep: !0,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          ...e.options,
        };
        Ah(
          [document.querySelector(`.${e.name}`)],
          e.data.length ? e.data : t,
          o
        ),
          r();
      };
    return (
      os(() => {
        s();
      }),
      (o, a) => (at(), ct('div', { class: Cr(ut(i)) }, null, 2))
    );
  },
});
const Fo = Ml(v_, [['__scopeId', 'data-v-fae24696']]),
  x_ = { class: 'sphere-wrapper' },
  y_ = { class: 'content' },
  M_ = { class: 'dimension-cloud' },
  b_ = { class: 'core-cloud' },
  S_ = { class: 'word-cloud' },
  w_ = xn({
    __name: 'Index',
    setup(n) {
      return (e, t) => (
        at(),
        ct('div', x_, [
          Je('div', y_, [
            Je('div', M_, [
              _t(
                Fo,
                {
                  name: 'dimension',
                  data: ut(Ks),
                  options: { radius: 100, direction: 225 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            Je('div', b_, [
              _t(
                Fo,
                {
                  name: 'core',
                  data: ut(Ti),
                  options: { radius: 200, direction: 90 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            Je('div', S_, [
              _t(
                Fo,
                { name: 'word', data: ut(Li), options: { radius: 100 } },
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
const E_ = n => (n * Math.PI) / 180,
  Cc = (n, e) => {
    const t = E_(360 / e),
      i = [];
    for (let r = 0; r < e; r += 1)
      i.push({ x: n * Math.cos(t * r), y: n * Math.sin(t * r) });
    return i;
  },
  T_ = { class: 'rotate' },
  A_ = { class: 'content' },
  C_ = { class: 'box' },
  L_ = xn({
    __name: 'RotateImage',
    setup(n) {
      const e = jn([
          '\u5E74\u4EFD',
          '\u5B63\u5EA6',
          '\u540C\u6BD4',
          '\u73AF\u6BD4',
          '\u6392\u540D',
          '\u5DEE\u5F02',
          '\u5229\u6DA6',
        ]),
        t = i => ({
          transform: `rotateY(${
            (360 / e.value.length) * i
          }deg) rotateZ(-90deg) translateZ(160px)`,
        });
      return (i, r) => (
        at(),
        ct('div', T_, [
          Je('div', A_, [
            Je('div', C_, [
              (at(!0),
              ct(
                St,
                null,
                xr(
                  e.value,
                  (s, o) => (
                    at(),
                    ct(
                      'div',
                      { key: o, class: 'circle', style: ni(t(o)) },
                      gr(s),
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
const P_ = Ml(L_, [['__scopeId', 'data-v-904bfc5a']]),
  R_ = { class: 'ring-wrapper' },
  D_ = { class: 'wheel' },
  I_ = { class: 'ring core-ring' },
  F_ = { ref: 'wheelCoreRef', class: 'content dimension-content' },
  O_ = { class: 'wheel-text' },
  N_ = { class: 'ring word-ring' },
  z_ = { ref: 'wheelCoreRef', class: 'content word-content' },
  U_ = { class: 'wheel-text' },
  B_ = xn({
    __name: 'Index',
    setup(n) {
      const e = Oi({ cR: 200, cCount: 10, textWidth: 100, textHeight: 50 }),
        t = gt(() =>
          Cc(e.cR, e.cCount).map((r, s) => {
            const o = 12 * (Math.random() + 1),
              a = Li[s].length * o;
            return {
              x: r.x - a / 2,
              y: r.y - e.textHeight / 2,
              fontSize: o,
              width: a,
              value: Li[s],
            };
          })
        ),
        i = gt(() =>
          Cc(e.cR, Ti.length).map((r, s) => {
            const o = 12 * (Math.random() + 1),
              a = Ti[s].length * o;
            return {
              x: r.x - a / 2,
              y: r.y - e.textHeight / 2,
              fontSize: o,
              width: a,
              value: Ti[s],
            };
          })
        );
      return (r, s) => (
        at(),
        ct('div', R_, [
          Je('div', D_, [
            Je('div', I_, [
              Je(
                'div',
                F_,
                [
                  Je('div', O_, [
                    (at(!0),
                    ct(
                      St,
                      null,
                      xr(
                        ut(t),
                        (o, a) => (
                          at(),
                          ct(
                            'div',
                            {
                              key: a,
                              class: 'text',
                              style: ni({
                                top: `${o.y}px`,
                                left: `${o.x}px`,
                                width: `${o.width}px`,
                                fontSize: `${o.fontSize}px`,
                              }),
                            },
                            gr(o.value),
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
            Je('div', N_, [
              Je(
                'div',
                z_,
                [
                  Je('div', U_, [
                    (at(!0),
                    ct(
                      St,
                      null,
                      xr(
                        ut(i),
                        (o, a) => (
                          at(),
                          ct(
                            'div',
                            {
                              key: a,
                              class: 'text',
                              style: ni({
                                top: `${o.y}px`,
                                left: `${o.x}px`,
                                width: `${o.width}px`,
                                fontSize: `${o.fontSize}px`,
                              }),
                            },
                            gr(o.value),
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
            _t(P_),
          ]),
        ])
      );
    },
  });
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const bl = '146',
  Vi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Gi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  k_ = 0,
  Lc = 1,
  V_ = 2,
  Ch = 1,
  G_ = 2,
  qr = 3,
  Sr = 0,
  jt = 1,
  $n = 2,
  ei = 0,
  pr = 1,
  Pc = 2,
  Rc = 3,
  Dc = 4,
  H_ = 5,
  lr = 100,
  W_ = 101,
  q_ = 102,
  Ic = 103,
  Fc = 104,
  X_ = 200,
  j_ = 201,
  $_ = 202,
  Y_ = 203,
  Lh = 204,
  Ph = 205,
  Z_ = 206,
  K_ = 207,
  J_ = 208,
  Q_ = 209,
  e0 = 210,
  t0 = 0,
  n0 = 1,
  i0 = 2,
  Oa = 3,
  r0 = 4,
  s0 = 5,
  o0 = 6,
  a0 = 7,
  Rh = 0,
  l0 = 1,
  c0 = 2,
  Dn = 0,
  u0 = 1,
  f0 = 2,
  h0 = 3,
  d0 = 4,
  p0 = 5,
  Dh = 300,
  wr = 301,
  Er = 302,
  Na = 303,
  za = 304,
  go = 306,
  Ua = 1e3,
  tn = 1001,
  Ba = 1002,
  It = 1003,
  Oc = 1004,
  Nc = 1005,
  Ft = 1006,
  m0 = 1007,
  _o = 1008,
  Pi = 1009,
  g0 = 1010,
  _0 = 1011,
  Ih = 1012,
  v0 = 1013,
  Mi = 1014,
  bi = 1015,
  ss = 1016,
  x0 = 1017,
  y0 = 1018,
  mr = 1020,
  M0 = 1021,
  b0 = 1022,
  nn = 1023,
  S0 = 1024,
  w0 = 1025,
  Ai = 1026,
  Tr = 1027,
  E0 = 1028,
  T0 = 1029,
  A0 = 1030,
  C0 = 1031,
  L0 = 1033,
  Oo = 33776,
  No = 33777,
  zo = 33778,
  Uo = 33779,
  zc = 35840,
  Uc = 35841,
  Bc = 35842,
  kc = 35843,
  P0 = 36196,
  Vc = 37492,
  Gc = 37496,
  Hc = 37808,
  Wc = 37809,
  qc = 37810,
  Xc = 37811,
  jc = 37812,
  $c = 37813,
  Yc = 37814,
  Zc = 37815,
  Kc = 37816,
  Jc = 37817,
  Qc = 37818,
  eu = 37819,
  tu = 37820,
  nu = 37821,
  iu = 36492,
  Ri = 3e3,
  it = 3001,
  R0 = 3200,
  D0 = 3201,
  I0 = 0,
  F0 = 1,
  Ln = 'srgb',
  Si = 'srgb-linear',
  Bo = 7680,
  O0 = 519,
  ka = 35044,
  ru = '300 es',
  Va = 1035;
class Ni {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(t) !== -1;
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
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const bt = [
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
  ko = Math.PI / 180,
  su = 180 / Math.PI;
function ti() {
  const n = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    bt[n & 255] +
    bt[(n >> 8) & 255] +
    bt[(n >> 16) & 255] +
    bt[(n >> 24) & 255] +
    '-' +
    bt[e & 255] +
    bt[(e >> 8) & 255] +
    '-' +
    bt[((e >> 16) & 15) | 64] +
    bt[(e >> 24) & 255] +
    '-' +
    bt[(t & 63) | 128] +
    bt[(t >> 8) & 255] +
    '-' +
    bt[(t >> 16) & 255] +
    bt[(t >> 24) & 255] +
    bt[i & 255] +
    bt[(i >> 8) & 255] +
    bt[(i >> 16) & 255] +
    bt[(i >> 24) & 255]
  ).toLowerCase();
}
function Ot(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function N0(n, e) {
  return ((n % e) + e) % e;
}
function Vo(n, e, t) {
  return (1 - t) * n + t * e;
}
function ou(n) {
  return (n & (n - 1)) === 0 && n !== 0;
}
function Ga(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Yn(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function Ke(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
class Fe {
  constructor(e = 0, t = 0) {
    (Fe.prototype.isVector2 = !0), (this.x = e), (this.y = t);
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
      i = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * i + r[6]),
      (this.y = r[1] * t + r[4] * i + r[7]),
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
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
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
      i = this.y - e.y;
    return t * t + i * i;
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
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this
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
    const i = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * i - o * r + e.x), (this.y = s * r + o * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class qt {
  constructor() {
    (qt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, i, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = i),
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
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
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
    const i = e.elements,
      r = t.elements,
      s = this.elements,
      o = i[0],
      a = i[3],
      l = i[6],
      c = i[1],
      u = i[4],
      f = i[7],
      h = i[2],
      p = i[5],
      g = i[8],
      m = r[0],
      d = r[3],
      _ = r[6],
      x = r[1],
      M = r[4],
      S = r[7],
      b = r[2],
      P = r[5],
      B = r[8];
    return (
      (s[0] = o * m + a * x + l * b),
      (s[3] = o * d + a * M + l * P),
      (s[6] = o * _ + a * S + l * B),
      (s[1] = c * m + u * x + f * b),
      (s[4] = c * d + u * M + f * P),
      (s[7] = c * _ + u * S + f * B),
      (s[2] = h * m + p * x + g * b),
      (s[5] = h * d + p * M + g * P),
      (s[8] = h * _ + p * S + g * B),
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
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - i * s * u + i * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
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
      g = t * f + i * h + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / g;
    return (
      (e[0] = f * m),
      (e[1] = (r * c - u * i) * m),
      (e[2] = (a * i - r * o) * m),
      (e[3] = h * m),
      (e[4] = (u * t - r * l) * m),
      (e[5] = (r * s - a * t) * m),
      (e[6] = p * m),
      (e[7] = (i * l - c * t) * m),
      (e[8] = (o * t - i * s) * m),
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
  setUvTransform(e, t, i, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * o + c * a) + o + e,
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
    const i = this.elements;
    return (
      (i[0] *= e),
      (i[3] *= e),
      (i[6] *= e),
      (i[1] *= t),
      (i[4] *= t),
      (i[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      i = Math.sin(e),
      r = this.elements,
      s = r[0],
      o = r[3],
      a = r[6],
      l = r[1],
      c = r[4],
      u = r[7];
    return (
      (r[0] = t * s + i * l),
      (r[3] = t * o + i * c),
      (r[6] = t * a + i * u),
      (r[1] = -i * s + t * l),
      (r[4] = -i * o + t * c),
      (r[7] = -i * a + t * u),
      this
    );
  }
  translate(e, t) {
    const i = this.elements;
    return (
      (i[0] += e * i[2]),
      (i[3] += e * i[5]),
      (i[6] += e * i[8]),
      (i[1] += t * i[2]),
      (i[4] += t * i[5]),
      (i[7] += t * i[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function Fh(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return !0;
  return !1;
}
function Qs(n) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', n);
}
function Ci(n) {
  return n < 0.04045
    ? n * 0.0773993808
    : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Hs(n) {
  return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
const Go = { [Ln]: { [Si]: Ci }, [Si]: { [Ln]: Hs } },
  Yt = {
    legacyMode: !0,
    get workingColorSpace() {
      return Si;
    },
    set workingColorSpace(n) {
      console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
    },
    convert: function (n, e, t) {
      if (this.legacyMode || e === t || !e || !t) return n;
      if (Go[e] && Go[e][t] !== void 0) {
        const i = Go[e][t];
        return (n.r = i(n.r)), (n.g = i(n.g)), (n.b = i(n.b)), n;
      }
      throw new Error('Unsupported color space conversion.');
    },
    fromWorkingColorSpace: function (n, e) {
      return this.convert(n, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (n, e) {
      return this.convert(n, e, this.workingColorSpace);
    },
  },
  Oh = {
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
  lt = { r: 0, g: 0, b: 0 },
  Zt = { h: 0, s: 0, l: 0 },
  ms = { h: 0, s: 0, l: 0 };
function Ho(n, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? n + (e - n) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? n + (e - n) * 6 * (2 / 3 - t)
      : n
  );
}
function gs(n, e) {
  return (e.r = n.r), (e.g = n.g), (e.b = n.b), e;
}
class Qe {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && i === void 0 ? this.set(e) : this.setRGB(e, t, i)
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
  setHex(e, t = Ln) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Yt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, r = Si) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      Yt.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, i, r = Si) {
    if (((e = N0(e, 1)), (t = Ot(t, 0, 1)), (i = Ot(i, 0, 1)), t === 0))
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        o = 2 * i - s;
      (this.r = Ho(o, s, e + 1 / 3)),
        (this.g = Ho(o, s, e)),
        (this.b = Ho(o, s, e - 1 / 3));
    }
    return Yt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ln) {
    function i(s) {
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
              Yt.toWorkingColorSpace(this, t),
              i(s[4]),
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
              Yt.toWorkingColorSpace(this, t),
              i(s[4]),
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
            return i(s[4]), this.setHSL(l, c, u, t);
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
          Yt.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          Yt.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ln) {
    const i = Oh[e.toLowerCase()];
    return (
      i !== void 0
        ? this.setHex(i, t)
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
    return (this.r = Ci(e.r)), (this.g = Ci(e.g)), (this.b = Ci(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Hs(e.r)), (this.g = Hs(e.g)), (this.b = Hs(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ln) {
    return (
      Yt.fromWorkingColorSpace(gs(this, lt), e),
      (Ot(lt.r * 255, 0, 255) << 16) ^
        (Ot(lt.g * 255, 0, 255) << 8) ^
        (Ot(lt.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Ln) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Si) {
    Yt.fromWorkingColorSpace(gs(this, lt), t);
    const i = lt.r,
      r = lt.g,
      s = lt.b,
      o = Math.max(i, r, s),
      a = Math.min(i, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const f = o - a;
      switch (((c = u <= 0.5 ? f / (o + a) : f / (2 - o - a)), o)) {
        case i:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / f + 2;
          break;
        case s:
          l = (i - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Si) {
    return (
      Yt.fromWorkingColorSpace(gs(this, lt), t),
      (e.r = lt.r),
      (e.g = lt.g),
      (e.b = lt.b),
      e
    );
  }
  getStyle(e = Ln) {
    return (
      Yt.fromWorkingColorSpace(gs(this, lt), e),
      e !== Ln
        ? `color(${e} ${lt.r} ${lt.g} ${lt.b})`
        : `rgb(${(lt.r * 255) | 0},${(lt.g * 255) | 0},${(lt.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, i) {
    return (
      this.getHSL(Zt),
      (Zt.h += e),
      (Zt.s += t),
      (Zt.l += i),
      this.setHSL(Zt.h, Zt.s, Zt.l),
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
  lerpColors(e, t, i) {
    return (
      (this.r = e.r + (t.r - e.r) * i),
      (this.g = e.g + (t.g - e.g) * i),
      (this.b = e.b + (t.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Zt), e.getHSL(ms);
    const i = Vo(Zt.h, ms.h, t),
      r = Vo(Zt.s, ms.s, t),
      s = Vo(Zt.l, ms.l, t);
    return this.setHSL(i, r, s), this;
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
Qe.NAMES = Oh;
let Hi;
class Nh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Hi === void 0 && (Hi = Qs('canvas')),
        (Hi.width = e.width),
        (Hi.height = e.height);
      const i = Hi.getContext('2d');
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (t = Hi);
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
      const t = Qs('canvas');
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext('2d');
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Ci(s[o] / 255) * 255;
      return i.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[i] = Math.floor(Ci(t[i] / 255) * 255))
          : (t[i] = Ci(t[i]));
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
class zh {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = ti()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: '' },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(Wo(r[o].image)) : s.push(Wo(r[o]));
      } else s = Wo(r);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function Wo(n) {
  return (typeof HTMLImageElement < 'u' && n instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && n instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && n instanceof ImageBitmap)
    ? Nh.getDataURL(n)
    : n.data
    ? {
        data: Array.from(n.data),
        width: n.width,
        height: n.height,
        type: n.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let z0 = 0;
class $t extends Ni {
  constructor(
    e = $t.DEFAULT_IMAGE,
    t = $t.DEFAULT_MAPPING,
    i = tn,
    r = tn,
    s = Ft,
    o = _o,
    a = nn,
    l = Pi,
    c = 1,
    u = Ri
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: z0++ }),
      (this.uuid = ti()),
      (this.name = ''),
      (this.source = new zh(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = i),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Fe(0, 0)),
      (this.repeat = new Fe(1, 1)),
      (this.center = new Fe(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new qt()),
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
    const i = {
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
      JSON.stringify(this.userData) !== '{}' && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(e) {
    if (this.mapping !== Dh) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ua:
          e.x = e.x - Math.floor(e.x);
          break;
        case tn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ba:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ua:
          e.y = e.y - Math.floor(e.y);
          break;
        case tn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ba:
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
$t.DEFAULT_IMAGE = null;
$t.DEFAULT_MAPPING = Dh;
class yt {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    (yt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = i),
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
  set(e, t, i, r) {
    return (this.x = e), (this.y = t), (this.z = i), (this.w = r), this;
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
      i = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * i + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * i + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * i + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * i + o[11] * r + o[15] * s),
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
    let t, i, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      f = l[8],
      h = l[1],
      p = l[5],
      g = l[9],
      m = l[2],
      d = l[6],
      _ = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(f - m) < 0.01 &&
      Math.abs(g - d) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(f + m) < 0.1 &&
        Math.abs(g + d) < 0.1 &&
        Math.abs(c + p + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2,
        S = (p + 1) / 2,
        b = (_ + 1) / 2,
        P = (u + h) / 4,
        B = (f + m) / 4,
        y = (g + d) / 4;
      return (
        M > S && M > b
          ? M < 0.01
            ? ((i = 0), (r = 0.707106781), (s = 0.707106781))
            : ((i = Math.sqrt(M)), (r = P / i), (s = B / i))
          : S > b
          ? S < 0.01
            ? ((i = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(S)), (i = P / r), (s = y / r))
          : b < 0.01
          ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(b)), (i = B / s), (r = y / s)),
        this.set(i, r, s, t),
        this
      );
    }
    let x = Math.sqrt(
      (d - g) * (d - g) + (f - m) * (f - m) + (h - u) * (h - u)
    );
    return (
      Math.abs(x) < 0.001 && (x = 1),
      (this.x = (d - g) / x),
      (this.y = (f - m) / x),
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
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
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
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      (this.w = e.w + (t.w - e.w) * i),
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
class Di extends Ni {
  constructor(e = 1, t = 1, i = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new yt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new yt(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    (this.texture = new $t(
      r,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        i.generateMipmaps !== void 0 ? i.generateMipmaps : !1),
      (this.texture.internalFormat =
        i.internalFormat !== void 0 ? i.internalFormat : null),
      (this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : Ft),
      (this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0),
      (this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1),
      (this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null),
      (this.samples = i.samples !== void 0 ? i.samples : 0);
  }
  setSize(e, t, i = 1) {
    (this.width !== e || this.height !== t || this.depth !== i) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = i),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = i),
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
      (this.texture.source = new zh(t)),
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
class Uh extends $t {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = It),
      (this.minFilter = It),
      (this.wrapR = tn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class U0 extends $t {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = It),
      (this.minFilter = It),
      (this.wrapR = tn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ii {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = r);
  }
  static slerpFlat(e, t, i, r, s, o, a) {
    let l = i[r + 0],
      c = i[r + 1],
      u = i[r + 2],
      f = i[r + 3];
    const h = s[o + 0],
      p = s[o + 1],
      g = s[o + 2],
      m = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
      return;
    }
    if (a === 1) {
      (e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = m);
      return;
    }
    if (f !== m || l !== h || c !== p || u !== g) {
      let d = 1 - a;
      const _ = l * h + c * p + u * g + f * m,
        x = _ >= 0 ? 1 : -1,
        M = 1 - _ * _;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M),
          P = Math.atan2(b, _ * x);
        (d = Math.sin(d * P) / b), (a = Math.sin(a * P) / b);
      }
      const S = a * x;
      if (
        ((l = l * d + h * S),
        (c = c * d + p * S),
        (u = u * d + g * S),
        (f = f * d + m * S),
        d === 1 - a)
      ) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        (l *= b), (c *= b), (u *= b), (f *= b);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, i, r, s, o) {
    const a = i[r],
      l = i[r + 1],
      c = i[r + 2],
      u = i[r + 3],
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
  set(e, t, i, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
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
    const i = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(i / 2),
      u = a(r / 2),
      f = a(s / 2),
      h = l(i / 2),
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
    const i = t / 2,
      r = Math.sin(i);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      i = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      h = i + a + f;
    if (h > 0) {
      const p = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / p),
        (this._x = (u - l) * p),
        (this._y = (s - c) * p),
        (this._z = (o - r) * p);
    } else if (i > a && i > f) {
      const p = 2 * Math.sqrt(1 + i - a - f);
      (this._w = (u - l) / p),
        (this._x = 0.25 * p),
        (this._y = (r + o) / p),
        (this._z = (s + c) / p);
    } else if (a > f) {
      const p = 2 * Math.sqrt(1 + a - i - f);
      (this._w = (s - c) / p),
        (this._x = (r + o) / p),
        (this._y = 0.25 * p),
        (this._z = (l + u) / p);
    } else {
      const p = 2 * Math.sqrt(1 + f - i - a);
      (this._w = (o - r) / p),
        (this._x = (s + c) / p),
        (this._y = (l + u) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ot(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const r = Math.min(1, t / i);
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
    const i = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = i * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - i * c),
      (this._z = s * u + o * c + i * l - r * a),
      (this._w = o * u - i * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + i * e._x + r * e._y + s * e._z;
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
      return (this._w = o), (this._x = i), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * o + t * this._w),
        (this._x = p * i + t * this._x),
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
      (this._x = i * f + this._x * h),
      (this._y = r * f + this._y * h),
      (this._z = s * f + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      i = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      i * Math.sin(s),
      i * Math.cos(s),
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
  constructor(e = 0, t = 0, i = 0) {
    (U.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
  }
  set(e, t, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = i),
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
    return this.applyQuaternion(au.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(au.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * i + s[6] * r),
      (this.y = s[1] * t + s[4] * i + s[7] * r),
      (this.z = s[2] * t + s[5] * i + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * r - a * i,
      u = l * i + a * t - s * r,
      f = l * r + s * i - o * t,
      h = -s * t - o * i - a * r;
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
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * i + s[8] * r),
      (this.y = s[1] * t + s[5] * i + s[9] * r),
      (this.z = s[2] * t + s[6] * i + s[10] * r),
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
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
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
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - i * l),
      (this.z = i * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return qo.copy(this).projectOnVector(e), this.sub(qo);
  }
  reflect(e) {
    return this.sub(qo.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Ot(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y,
      r = this.z - e.z;
    return t * t + i * i + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(i)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return (
      (this.x = e * Math.sin(t)), (this.y = i), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = i), (this.z = r), this;
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
      i = Math.sqrt(1 - e ** 2);
    return (
      (this.x = i * Math.cos(t)), (this.y = i * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const qo = new U(),
  au = new Ii();
class as {
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
      i = 1 / 0,
      r = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l],
        f = e[l + 1],
        h = e[l + 2];
      u < t && (t = u),
        f < i && (i = f),
        h < r && (r = h),
        u > s && (s = u),
        f > o && (o = f),
        h > a && (a = h);
    }
    return this.min.set(t, i, r), this.max.set(s, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      i = 1 / 0,
      r = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l),
        f = e.getY(l),
        h = e.getZ(l);
      u < t && (t = u),
        f < i && (i = f),
        h < r && (r = h),
        u > s && (s = u),
        f > o && (o = f),
        h > a && (a = h);
    }
    return this.min.set(t, i, r), this.max.set(s, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = ui.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
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
    const i = e.geometry;
    if (i !== void 0)
      if (t && i.attributes != null && i.attributes.position !== void 0) {
        const s = i.attributes.position;
        for (let o = 0, a = s.count; o < a; o++)
          ui.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(ui);
      } else
        i.boundingBox === null && i.computeBoundingBox(),
          Xo.copy(i.boundingBox),
          Xo.applyMatrix4(e.matrixWorld),
          this.union(Xo);
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
      this.clampPoint(e.center, ui),
      ui.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, i;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      t <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(zr),
      _s.subVectors(this.max, zr),
      Wi.subVectors(e.a, zr),
      qi.subVectors(e.b, zr),
      Xi.subVectors(e.c, zr),
      Un.subVectors(qi, Wi),
      Bn.subVectors(Xi, qi),
      fi.subVectors(Wi, Xi);
    let t = [
      0,
      -Un.z,
      Un.y,
      0,
      -Bn.z,
      Bn.y,
      0,
      -fi.z,
      fi.y,
      Un.z,
      0,
      -Un.x,
      Bn.z,
      0,
      -Bn.x,
      fi.z,
      0,
      -fi.x,
      -Un.y,
      Un.x,
      0,
      -Bn.y,
      Bn.x,
      0,
      -fi.y,
      fi.x,
      0,
    ];
    return !jo(t, Wi, qi, Xi, _s) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !jo(t, Wi, qi, Xi, _s))
      ? !1
      : (vs.crossVectors(Un, Bn),
        (t = [vs.x, vs.y, vs.z]),
        jo(t, Wi, qi, Xi, _s));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return ui.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(ui).length() * 0.5), e
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
      : (Sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Sn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Sn = [
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
  ],
  ui = new U(),
  Xo = new as(),
  Wi = new U(),
  qi = new U(),
  Xi = new U(),
  Un = new U(),
  Bn = new U(),
  fi = new U(),
  zr = new U(),
  _s = new U(),
  vs = new U(),
  hi = new U();
function jo(n, e, t, i, r) {
  for (let s = 0, o = n.length - 3; s <= o; s += 3) {
    hi.fromArray(n, s);
    const a =
        r.x * Math.abs(hi.x) + r.y * Math.abs(hi.y) + r.z * Math.abs(hi.z),
      l = e.dot(hi),
      c = t.dot(hi),
      u = i.dot(hi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const B0 = new as(),
  Ur = new U(),
  $o = new U();
class vo {
  constructor(e = new U(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : B0.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, i.distanceToSquared(e[s]));
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
    const i = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      i > this.radius * this.radius &&
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
    Ur.subVectors(e, this.center);
    const t = Ur.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t),
        r = (i - this.radius) * 0.5;
      this.center.addScaledVector(Ur, r / i), (this.radius += r);
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
          : ($o.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Ur.copy(e.center).add($o)),
            this.expandByPoint(Ur.copy(e.center).sub($o))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = new U(),
  Yo = new U(),
  xs = new U(),
  kn = new U(),
  Zo = new U(),
  ys = new U(),
  Ko = new U();
class Bh {
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
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(i).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (wn.copy(this.direction).multiplyScalar(t).add(this.origin),
        wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, r) {
    Yo.copy(e).add(t).multiplyScalar(0.5),
      xs.copy(t).sub(e).normalize(),
      kn.copy(this.origin).sub(Yo);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(xs),
      a = kn.dot(this.direction),
      l = -kn.dot(xs),
      c = kn.lengthSq(),
      u = Math.abs(1 - o * o);
    let f, h, p, g;
    if (u > 0)
      if (((f = o * l - a), (h = o * a - l), (g = s * u), f >= 0))
        if (h >= -g)
          if (h <= g) {
            const m = 1 / u;
            (f *= m),
              (h *= m),
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
      i && i.copy(this.direction).multiplyScalar(f).add(this.origin),
      r && r.copy(xs).multiplyScalar(h).add(Yo),
      p
    );
  }
  intersectSphere(e, t) {
    wn.subVectors(e.center, this.origin);
    const i = wn.dot(this.direction),
      r = wn.dot(wn) - i * i,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = i - o,
      l = i + o;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((i = (e.min.x - h.x) * c), (r = (e.max.x - h.x) * c))
        : ((i = (e.max.x - h.x) * c), (r = (e.min.x - h.x) * c)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (o = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (o = (e.min.y - h.y) * u)),
      i > o ||
      s > r ||
      ((s > i || isNaN(i)) && (i = s),
      (o < r || isNaN(r)) && (r = o),
      f >= 0
        ? ((a = (e.min.z - h.z) * f), (l = (e.max.z - h.z) * f))
        : ((a = (e.max.z - h.z) * f), (l = (e.min.z - h.z) * f)),
      i > l || a > r) ||
      ((a > i || i !== i) && (i = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(i >= 0 ? i : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, i, r, s) {
    Zo.subVectors(t, e), ys.subVectors(i, e), Ko.crossVectors(Zo, ys);
    let o = this.direction.dot(Ko),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    kn.subVectors(this.origin, e);
    const l = a * this.direction.dot(ys.crossVectors(kn, ys));
    if (l < 0) return null;
    const c = a * this.direction.dot(Zo.cross(kn));
    if (c < 0 || l + c > o) return null;
    const u = -a * kn.dot(Ko);
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
class ft {
  constructor() {
    (ft.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, i, r, s, o, a, l, c, u, f, h, p, g, m, d) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = i),
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
      (_[11] = m),
      (_[15] = d),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ft().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      (t[9] = i[9]),
      (t[10] = i[10]),
      (t[11] = i[11]),
      (t[12] = i[12]),
      (t[13] = i[13]),
      (t[14] = i[14]),
      (t[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      i = e.elements;
    return (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this;
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
  extractBasis(e, t, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, i) {
    return (
      this.set(
        e.x,
        t.x,
        i.x,
        0,
        e.y,
        t.y,
        i.y,
        0,
        e.z,
        t.z,
        i.z,
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
      i = e.elements,
      r = 1 / ji.setFromMatrixColumn(e, 0).length(),
      s = 1 / ji.setFromMatrixColumn(e, 1).length(),
      o = 1 / ji.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * r),
      (t[1] = i[1] * r),
      (t[2] = i[2] * r),
      (t[3] = 0),
      (t[4] = i[4] * s),
      (t[5] = i[5] * s),
      (t[6] = i[6] * s),
      (t[7] = 0),
      (t[8] = i[8] * o),
      (t[9] = i[9] * o),
      (t[10] = i[10] * o),
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
      i = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(i),
      a = Math.sin(i),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === 'XYZ') {
      const h = o * u,
        p = o * f,
        g = a * u,
        m = a * f;
      (t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = p + g * c),
        (t[5] = h - m * c),
        (t[9] = -a * l),
        (t[2] = m - h * c),
        (t[6] = g + p * c),
        (t[10] = o * l);
    } else if (e.order === 'YXZ') {
      const h = l * u,
        p = l * f,
        g = c * u,
        m = c * f;
      (t[0] = h + m * a),
        (t[4] = g * a - p),
        (t[8] = o * c),
        (t[1] = o * f),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = p * a - g),
        (t[6] = m + h * a),
        (t[10] = o * l);
    } else if (e.order === 'ZXY') {
      const h = l * u,
        p = l * f,
        g = c * u,
        m = c * f;
      (t[0] = h - m * a),
        (t[4] = -o * f),
        (t[8] = g + p * a),
        (t[1] = p + g * a),
        (t[5] = o * u),
        (t[9] = m - h * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === 'ZYX') {
      const h = o * u,
        p = o * f,
        g = a * u,
        m = a * f;
      (t[0] = l * u),
        (t[4] = g * c - p),
        (t[8] = h * c + m),
        (t[1] = l * f),
        (t[5] = m * c + h),
        (t[9] = p * c - g),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === 'YZX') {
      const h = o * l,
        p = o * c,
        g = a * l,
        m = a * c;
      (t[0] = l * u),
        (t[4] = m - h * f),
        (t[8] = g * f + p),
        (t[1] = f),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = p * f + g),
        (t[10] = h - m * f);
    } else if (e.order === 'XZY') {
      const h = o * l,
        p = o * c,
        g = a * l,
        m = a * c;
      (t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = h * f + m),
        (t[5] = o * u),
        (t[9] = p * f - g),
        (t[2] = g * f - p),
        (t[6] = a * u),
        (t[10] = m * f + h);
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
    return this.compose(k0, e, V0);
  }
  lookAt(e, t, i) {
    const r = this.elements;
    return (
      zt.subVectors(e, t),
      zt.lengthSq() === 0 && (zt.z = 1),
      zt.normalize(),
      Vn.crossVectors(i, zt),
      Vn.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (zt.x += 1e-4) : (zt.z += 1e-4),
        zt.normalize(),
        Vn.crossVectors(i, zt)),
      Vn.normalize(),
      Ms.crossVectors(zt, Vn),
      (r[0] = Vn.x),
      (r[4] = Ms.x),
      (r[8] = zt.x),
      (r[1] = Vn.y),
      (r[5] = Ms.y),
      (r[9] = zt.y),
      (r[2] = Vn.z),
      (r[6] = Ms.z),
      (r[10] = zt.z),
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
    const i = e.elements,
      r = t.elements,
      s = this.elements,
      o = i[0],
      a = i[4],
      l = i[8],
      c = i[12],
      u = i[1],
      f = i[5],
      h = i[9],
      p = i[13],
      g = i[2],
      m = i[6],
      d = i[10],
      _ = i[14],
      x = i[3],
      M = i[7],
      S = i[11],
      b = i[15],
      P = r[0],
      B = r[4],
      y = r[8],
      L = r[12],
      R = r[1],
      Y = r[5],
      de = r[9],
      G = r[13],
      N = r[2],
      te = r[6],
      ie = r[10],
      Z = r[14],
      W = r[3],
      z = r[7],
      X = r[11],
      ue = r[15];
    return (
      (s[0] = o * P + a * R + l * N + c * W),
      (s[4] = o * B + a * Y + l * te + c * z),
      (s[8] = o * y + a * de + l * ie + c * X),
      (s[12] = o * L + a * G + l * Z + c * ue),
      (s[1] = u * P + f * R + h * N + p * W),
      (s[5] = u * B + f * Y + h * te + p * z),
      (s[9] = u * y + f * de + h * ie + p * X),
      (s[13] = u * L + f * G + h * Z + p * ue),
      (s[2] = g * P + m * R + d * N + _ * W),
      (s[6] = g * B + m * Y + d * te + _ * z),
      (s[10] = g * y + m * de + d * ie + _ * X),
      (s[14] = g * L + m * G + d * Z + _ * ue),
      (s[3] = x * P + M * R + S * N + b * W),
      (s[7] = x * B + M * Y + S * te + b * z),
      (s[11] = x * y + M * de + S * ie + b * X),
      (s[15] = x * L + M * G + S * Z + b * ue),
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
      i = e[4],
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
      m = e[7],
      d = e[11],
      _ = e[15];
    return (
      g *
        (+s * l * f -
          r * c * f -
          s * a * h +
          i * c * h +
          r * a * p -
          i * l * p) +
      m *
        (+t * l * p -
          t * c * h +
          s * o * h -
          r * o * p +
          r * c * u -
          s * l * u) +
      d *
        (+t * c * f -
          t * a * p -
          s * o * f +
          i * o * p +
          s * a * u -
          i * c * u) +
      _ *
        (-r * a * u - t * l * f + t * a * h + r * o * f - i * o * h + i * l * u)
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
  setPosition(e, t, i) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
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
      m = e[13],
      d = e[14],
      _ = e[15],
      x = f * d * c - m * h * c + m * l * p - a * d * p - f * l * _ + a * h * _,
      M = g * h * c - u * d * c - g * l * p + o * d * p + u * l * _ - o * h * _,
      S = u * m * c - g * f * c + g * a * p - o * m * p - u * a * _ + o * f * _,
      b = g * f * l - u * m * l - g * a * h + o * m * h + u * a * d - o * f * d,
      P = t * x + i * M + r * S + s * b;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const B = 1 / P;
    return (
      (e[0] = x * B),
      (e[1] =
        (m * h * s -
          f * d * s -
          m * r * p +
          i * d * p +
          f * r * _ -
          i * h * _) *
        B),
      (e[2] =
        (a * d * s -
          m * l * s +
          m * r * c -
          i * d * c -
          a * r * _ +
          i * l * _) *
        B),
      (e[3] =
        (f * l * s -
          a * h * s -
          f * r * c +
          i * h * c +
          a * r * p -
          i * l * p) *
        B),
      (e[4] = M * B),
      (e[5] =
        (u * d * s -
          g * h * s +
          g * r * p -
          t * d * p -
          u * r * _ +
          t * h * _) *
        B),
      (e[6] =
        (g * l * s -
          o * d * s -
          g * r * c +
          t * d * c +
          o * r * _ -
          t * l * _) *
        B),
      (e[7] =
        (o * h * s -
          u * l * s +
          u * r * c -
          t * h * c -
          o * r * p +
          t * l * p) *
        B),
      (e[8] = S * B),
      (e[9] =
        (g * f * s -
          u * m * s -
          g * i * p +
          t * m * p +
          u * i * _ -
          t * f * _) *
        B),
      (e[10] =
        (o * m * s -
          g * a * s +
          g * i * c -
          t * m * c -
          o * i * _ +
          t * a * _) *
        B),
      (e[11] =
        (u * a * s -
          o * f * s -
          u * i * c +
          t * f * c +
          o * i * p -
          t * a * p) *
        B),
      (e[12] = b * B),
      (e[13] =
        (u * m * r -
          g * f * r +
          g * i * h -
          t * m * h -
          u * i * d +
          t * f * d) *
        B),
      (e[14] =
        (g * a * r -
          o * m * r -
          g * i * l +
          t * m * l +
          o * i * d -
          t * a * d) *
        B),
      (e[15] =
        (o * f * r -
          u * a * r +
          u * i * l -
          t * f * l -
          o * i * h +
          t * a * h) *
        B),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      i = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= i),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= i),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= i),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= i),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, r));
  }
  makeTranslation(e, t, i) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t),
      r = Math.sin(t),
      s = 1 - i,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + i,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + i,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + i,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, r, s, o) {
    return this.set(1, i, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
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
      m = o * u,
      d = o * f,
      _ = a * f,
      x = l * c,
      M = l * u,
      S = l * f,
      b = i.x,
      P = i.y,
      B = i.z;
    return (
      (r[0] = (1 - (m + _)) * b),
      (r[1] = (p + S) * b),
      (r[2] = (g - M) * b),
      (r[3] = 0),
      (r[4] = (p - S) * P),
      (r[5] = (1 - (h + _)) * P),
      (r[6] = (d + x) * P),
      (r[7] = 0),
      (r[8] = (g + M) * B),
      (r[9] = (d - x) * B),
      (r[10] = (1 - (h + m)) * B),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, i) {
    const r = this.elements;
    let s = ji.set(r[0], r[1], r[2]).length();
    const o = ji.set(r[4], r[5], r[6]).length(),
      a = ji.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      Kt.copy(this);
    const c = 1 / s,
      u = 1 / o,
      f = 1 / a;
    return (
      (Kt.elements[0] *= c),
      (Kt.elements[1] *= c),
      (Kt.elements[2] *= c),
      (Kt.elements[4] *= u),
      (Kt.elements[5] *= u),
      (Kt.elements[6] *= u),
      (Kt.elements[8] *= f),
      (Kt.elements[9] *= f),
      (Kt.elements[10] *= f),
      t.setFromRotationMatrix(Kt),
      (i.x = s),
      (i.y = o),
      (i.z = a),
      this
    );
  }
  makePerspective(e, t, i, r, s, o) {
    const a = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (i - r),
      u = (t + e) / (t - e),
      f = (i + r) / (i - r),
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
  makeOrthographic(e, t, i, r, s, o) {
    const a = this.elements,
      l = 1 / (t - e),
      c = 1 / (i - r),
      u = 1 / (o - s),
      f = (t + e) * l,
      h = (i + r) * c,
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
      i = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      (e[t + 9] = i[9]),
      (e[t + 10] = i[10]),
      (e[t + 11] = i[11]),
      (e[t + 12] = i[12]),
      (e[t + 13] = i[13]),
      (e[t + 14] = i[14]),
      (e[t + 15] = i[15]),
      e
    );
  }
}
const ji = new U(),
  Kt = new ft(),
  k0 = new U(0, 0, 0),
  V0 = new U(1, 1, 1),
  Vn = new U(),
  Ms = new U(),
  zt = new U(),
  lu = new ft(),
  cu = new Ii();
class ls {
  constructor(e = 0, t = 0, i = 0, r = ls.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
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
  set(e, t, i, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
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
  setFromRotationMatrix(e, t = this._order, i = !0) {
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
        (this._y = Math.asin(Ot(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-Ot(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(Ot(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, p)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-Ot(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(Ot(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, p)));
        break;
      case 'XZY':
        (this._z = Math.asin(-Ot(o, -1, 1))),
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
    return (this._order = t), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return (
      lu.makeRotationFromQuaternion(e), this.setFromRotationMatrix(lu, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return cu.setFromEuler(this), this.setFromQuaternion(cu, e);
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
ls.DefaultOrder = 'XYZ';
ls.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
class kh {
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
let G0 = 0;
const uu = new U(),
  $i = new Ii(),
  En = new ft(),
  bs = new U(),
  Br = new U(),
  H0 = new U(),
  W0 = new Ii(),
  fu = new U(1, 0, 0),
  hu = new U(0, 1, 0),
  du = new U(0, 0, 1),
  q0 = { type: 'added' },
  pu = { type: 'removed' };
class Rt extends Ni {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: G0++ }),
      (this.uuid = ti()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = Rt.DefaultUp.clone());
    const e = new U(),
      t = new ls(),
      i = new Ii(),
      r = new U(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s),
      i._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new ft() },
        normalMatrix: { value: new qt() },
      }),
      (this.matrix = new ft()),
      (this.matrixWorld = new ft()),
      (this.matrixAutoUpdate = Rt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = Rt.DefaultMatrixWorldAutoUpdate),
      (this.layers = new kh()),
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
    return $i.setFromAxisAngle(e, t), this.quaternion.multiply($i), this;
  }
  rotateOnWorldAxis(e, t) {
    return $i.setFromAxisAngle(e, t), this.quaternion.premultiply($i), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(fu, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(hu, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(du, e);
  }
  translateOnAxis(e, t) {
    return (
      uu.copy(e).applyQuaternion(this.quaternion),
      this.position.add(uu.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(fu, e);
  }
  translateY(e) {
    return this.translateOnAxis(hu, e);
  }
  translateZ(e) {
    return this.translateOnAxis(du, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(En.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? bs.copy(e) : bs.set(e, t, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      Br.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? En.lookAt(Br, bs, this.up)
        : En.lookAt(bs, Br, this.up),
      this.quaternion.setFromRotationMatrix(En),
      r &&
        (En.extractRotation(r.matrixWorld),
        $i.setFromRotationMatrix(En),
        this.quaternion.premultiply($i.invert()));
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
            e.dispatchEvent(q0))
          : console.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(pu)),
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
      (t.parent = null), t.dispatchEvent(pu);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      En.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), En.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(En),
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
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectByProperty(e, t);
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
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Br, e, H0), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Br, W0, e), e
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
    for (let i = 0, r = t.length; i < r; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) t[i].traverseVisible(e);
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
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (e === !0 &&
        i !== null &&
        i.matrixWorldAutoUpdate === !0 &&
        i.updateWorldMatrix(!0, !1),
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
      i = {};
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
      (i.metadata = {
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
      a.length > 0 && (i.geometries = a),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        u.length > 0 && (i.images = u),
        f.length > 0 && (i.shapes = f),
        h.length > 0 && (i.skeletons = h),
        p.length > 0 && (i.animations = p),
        g.length > 0 && (i.nodes = g);
    }
    return (i.object = r), i;
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
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
Rt.DefaultUp = new U(0, 1, 0);
Rt.DefaultMatrixAutoUpdate = !0;
Rt.DefaultMatrixWorldAutoUpdate = !0;
const Jt = new U(),
  Tn = new U(),
  Jo = new U(),
  An = new U(),
  Yi = new U(),
  Zi = new U(),
  mu = new U(),
  Qo = new U(),
  ea = new U(),
  ta = new U();
class gn {
  constructor(e = new U(), t = new U(), i = new U()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, r) {
    r.subVectors(i, t), Jt.subVectors(e, t), r.cross(Jt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, r, s) {
    Jt.subVectors(r, t), Tn.subVectors(i, t), Jo.subVectors(e, t);
    const o = Jt.dot(Jt),
      a = Jt.dot(Tn),
      l = Jt.dot(Jo),
      c = Tn.dot(Tn),
      u = Tn.dot(Jo),
      f = o * c - a * a;
    if (f === 0) return s.set(-2, -1, -1);
    const h = 1 / f,
      p = (c * l - a * u) * h,
      g = (o * u - a * l) * h;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, i, r) {
    return (
      this.getBarycoord(e, t, i, r, An),
      An.x >= 0 && An.y >= 0 && An.x + An.y <= 1
    );
  }
  static getUV(e, t, i, r, s, o, a, l) {
    return (
      this.getBarycoord(e, t, i, r, An),
      l.set(0, 0),
      l.addScaledVector(s, An.x),
      l.addScaledVector(o, An.y),
      l.addScaledVector(a, An.z),
      l
    );
  }
  static isFrontFacing(e, t, i, r) {
    return Jt.subVectors(i, t), Tn.subVectors(e, t), Jt.cross(Tn).dot(r) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, r) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, i, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, i),
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
      Jt.subVectors(this.c, this.b),
      Tn.subVectors(this.a, this.b),
      Jt.cross(Tn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return gn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return gn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, i, r, s) {
    return gn.getUV(e, this.a, this.b, this.c, t, i, r, s);
  }
  containsPoint(e) {
    return gn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return gn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    Yi.subVectors(r, i), Zi.subVectors(s, i), Qo.subVectors(e, i);
    const l = Yi.dot(Qo),
      c = Zi.dot(Qo);
    if (l <= 0 && c <= 0) return t.copy(i);
    ea.subVectors(e, r);
    const u = Yi.dot(ea),
      f = Zi.dot(ea);
    if (u >= 0 && f <= u) return t.copy(r);
    const h = l * f - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(i).addScaledVector(Yi, o);
    ta.subVectors(e, s);
    const p = Yi.dot(ta),
      g = Zi.dot(ta);
    if (g >= 0 && p <= g) return t.copy(s);
    const m = p * c - l * g;
    if (m <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), t.copy(i).addScaledVector(Zi, a);
    const d = u * g - p * f;
    if (d <= 0 && f - u >= 0 && p - g >= 0)
      return (
        mu.subVectors(s, r),
        (a = (f - u) / (f - u + (p - g))),
        t.copy(r).addScaledVector(mu, a)
      );
    const _ = 1 / (d + m + h);
    return (
      (o = m * _),
      (a = h * _),
      t.copy(i).addScaledVector(Yi, o).addScaledVector(Zi, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let X0 = 0;
class Dr extends Ni {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: X0++ }),
      (this.uuid = ti()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = pr),
      (this.side = Sr),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Lh),
      (this.blendDst = Ph),
      (this.blendEquation = lr),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Oa),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = O0),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Bo),
      (this.stencilZFail = Bo),
      (this.stencilZPass = Bo),
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
        const i = e[t];
        if (i === void 0) {
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
          ? r.set(i)
          : r && r.isVector3 && i && i.isVector3
          ? r.copy(i)
          : (this[t] = i);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.5,
        type: 'Material',
        generator: 'Material.toJSON',
      },
    };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== '' && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== pr && (i.blending = this.blending),
      this.side !== Sr && (i.side = this.side),
      this.vertexColors && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = this.transparent),
      (i.depthFunc = this.depthFunc),
      (i.depthTest = this.depthTest),
      (i.depthWrite = this.depthWrite),
      (i.colorWrite = this.colorWrite),
      (i.stencilWrite = this.stencilWrite),
      (i.stencilWriteMask = this.stencilWriteMask),
      (i.stencilFunc = this.stencilFunc),
      (i.stencilRef = this.stencilRef),
      (i.stencilFuncMask = this.stencilFuncMask),
      (i.stencilFail = this.stencilFail),
      (i.stencilZFail = this.stencilZFail),
      (i.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (i.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (i.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = this.flatShading),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      JSON.stringify(this.userData) !== '{}' && (i.userData = this.userData);
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
      s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o);
    }
    return i;
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
    let i = null;
    if (t !== null) {
      const r = t.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s) i[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = i),
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
class Vh extends Dr {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new Qe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Rh),
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
const ot = new U(),
  Ss = new Fe();
class an {
  constructor(e, t, i) {
    if (Array.isArray(e))
      throw new TypeError(
        'THREE.BufferAttribute: array should be a Typed Array.'
      );
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = i === !0),
      (this.usage = ka),
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
  copyAt(e, t, i) {
    (e *= this.itemSize), (i *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        Ss.fromBufferAttribute(this, t),
          Ss.applyMatrix3(e),
          this.setXY(t, Ss.x, Ss.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        ot.fromBufferAttribute(this, t),
          ot.applyMatrix3(e),
          this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ot.fromBufferAttribute(this, t),
        ot.applyMatrix4(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ot.fromBufferAttribute(this, t),
        ot.applyNormalMatrix(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ot.fromBufferAttribute(this, t),
        ot.transformDirection(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Ke(t, this.array)), (i = Ke(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ke(t, this.array)),
        (i = Ke(i, this.array)),
        (r = Ke(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, i, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ke(t, this.array)),
        (i = Ke(i, this.array)),
        (r = Ke(r, this.array)),
        (s = Ke(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
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
      this.usage !== ka && (e.usage = this.usage),
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
class Gh extends an {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Hh extends an {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class ln extends an {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let j0 = 0;
const Ht = new ft(),
  na = new Rt(),
  Ki = new U(),
  Ut = new as(),
  kr = new as(),
  mt = new U();
class yn extends Ni {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: j0++ }),
      (this.uuid = ti()),
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
        ? (this.index = new (Fh(e) ? Hh : Gh)(e, 1))
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
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
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
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new qt().getNormalMatrix(e);
      i.applyNormalMatrix(s), (i.needsUpdate = !0);
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
    return Ht.makeRotationFromQuaternion(e), this.applyMatrix4(Ht), this;
  }
  rotateX(e) {
    return Ht.makeRotationX(e), this.applyMatrix4(Ht), this;
  }
  rotateY(e) {
    return Ht.makeRotationY(e), this.applyMatrix4(Ht), this;
  }
  rotateZ(e) {
    return Ht.makeRotationZ(e), this.applyMatrix4(Ht), this;
  }
  translate(e, t, i) {
    return Ht.makeTranslation(e, t, i), this.applyMatrix4(Ht), this;
  }
  scale(e, t, i) {
    return Ht.makeScale(e, t, i), this.applyMatrix4(Ht), this;
  }
  lookAt(e) {
    return na.lookAt(e), na.updateMatrix(), this.applyMatrix4(na.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Ki).negate(),
      this.translate(Ki.x, Ki.y, Ki.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute('position', new ln(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new as());
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
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          Ut.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (mt.addVectors(this.boundingBox.min, Ut.min),
                this.boundingBox.expandByPoint(mt),
                mt.addVectors(this.boundingBox.max, Ut.max),
                this.boundingBox.expandByPoint(mt))
              : (this.boundingBox.expandByPoint(Ut.min),
                this.boundingBox.expandByPoint(Ut.max));
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
    this.boundingSphere === null && (this.boundingSphere = new vo());
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
      const i = this.boundingSphere.center;
      if ((Ut.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          kr.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (mt.addVectors(Ut.min, kr.min),
                Ut.expandByPoint(mt),
                mt.addVectors(Ut.max, kr.max),
                Ut.expandByPoint(mt))
              : (Ut.expandByPoint(kr.min), Ut.expandByPoint(kr.max));
        }
      Ut.getCenter(i);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        mt.fromBufferAttribute(e, s),
          (r = Math.max(r, i.distanceToSquared(mt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            mt.fromBufferAttribute(a, c),
              l && (Ki.fromBufferAttribute(e, c), mt.add(Ki)),
              (r = Math.max(r, i.distanceToSquared(mt)));
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
    const i = e.array,
      r = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = r.length / 3;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new an(new Float32Array(4 * a), 4));
    const l = this.getAttribute('tangent').array,
      c = [],
      u = [];
    for (let R = 0; R < a; R++) (c[R] = new U()), (u[R] = new U());
    const f = new U(),
      h = new U(),
      p = new U(),
      g = new Fe(),
      m = new Fe(),
      d = new Fe(),
      _ = new U(),
      x = new U();
    function M(R, Y, de) {
      f.fromArray(r, R * 3),
        h.fromArray(r, Y * 3),
        p.fromArray(r, de * 3),
        g.fromArray(o, R * 2),
        m.fromArray(o, Y * 2),
        d.fromArray(o, de * 2),
        h.sub(f),
        p.sub(f),
        m.sub(g),
        d.sub(g);
      const G = 1 / (m.x * d.y - d.x * m.y);
      !isFinite(G) ||
        (_.copy(h)
          .multiplyScalar(d.y)
          .addScaledVector(p, -m.y)
          .multiplyScalar(G),
        x
          .copy(p)
          .multiplyScalar(m.x)
          .addScaledVector(h, -d.x)
          .multiplyScalar(G),
        c[R].add(_),
        c[Y].add(_),
        c[de].add(_),
        u[R].add(x),
        u[Y].add(x),
        u[de].add(x));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: i.length }]);
    for (let R = 0, Y = S.length; R < Y; ++R) {
      const de = S[R],
        G = de.start,
        N = de.count;
      for (let te = G, ie = G + N; te < ie; te += 3)
        M(i[te + 0], i[te + 1], i[te + 2]);
    }
    const b = new U(),
      P = new U(),
      B = new U(),
      y = new U();
    function L(R) {
      B.fromArray(s, R * 3), y.copy(B);
      const Y = c[R];
      b.copy(Y),
        b.sub(B.multiplyScalar(B.dot(Y))).normalize(),
        P.crossVectors(y, Y);
      const G = P.dot(u[R]) < 0 ? -1 : 1;
      (l[R * 4] = b.x),
        (l[R * 4 + 1] = b.y),
        (l[R * 4 + 2] = b.z),
        (l[R * 4 + 3] = G);
    }
    for (let R = 0, Y = S.length; R < Y; ++R) {
      const de = S[R],
        G = de.start,
        N = de.count;
      for (let te = G, ie = G + N; te < ie; te += 3)
        L(i[te + 0]), L(i[te + 1]), L(i[te + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let i = this.getAttribute('normal');
      if (i === void 0)
        (i = new an(new Float32Array(t.count * 3), 3)),
          this.setAttribute('normal', i);
      else for (let h = 0, p = i.count; h < p; h++) i.setXYZ(h, 0, 0, 0);
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
            m = e.getX(h + 1),
            d = e.getX(h + 2);
          r.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, m),
            o.fromBufferAttribute(t, d),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            a.fromBufferAttribute(i, g),
            l.fromBufferAttribute(i, m),
            c.fromBufferAttribute(i, d),
            a.add(u),
            l.add(u),
            c.add(u),
            i.setXYZ(g, a.x, a.y, a.z),
            i.setXYZ(m, l.x, l.y, l.z),
            i.setXYZ(d, c.x, c.y, c.z);
        }
      else
        for (let h = 0, p = t.count; h < p; h += 3)
          r.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            o.fromBufferAttribute(t, h + 2),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            i.setXYZ(h + 0, u.x, u.y, u.z),
            i.setXYZ(h + 1, u.x, u.y, u.z),
            i.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
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
    for (let t = 0, i = e.count; t < i; t++)
      mt.fromBufferAttribute(e, t),
        mt.normalize(),
        e.setXYZ(t, mt.x, mt.y, mt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        f = a.normalized,
        h = new c.constructor(l.length * u);
      let p = 0,
        g = 0;
      for (let m = 0, d = l.length; m < d; m++) {
        a.isInterleavedBufferAttribute
          ? (p = l[m] * a.data.stride + a.offset)
          : (p = l[m] * u);
        for (let _ = 0; _ < u; _++) h[g++] = c[p++];
      }
      return new an(h, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
        ),
        this
      );
    const t = new yn(),
      i = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, i);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const h = c[u],
          p = e(h, i);
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
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
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
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
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
const gu = new ft(),
  Ji = new Bh(),
  ia = new vo(),
  Gn = new U(),
  Hn = new U(),
  Wn = new U(),
  ra = new U(),
  sa = new U(),
  oa = new U(),
  ws = new U(),
  Es = new U(),
  Ts = new U(),
  As = new Fe(),
  Cs = new Fe(),
  Ls = new Fe(),
  aa = new U(),
  Ps = new U();
class Zn extends Rt {
  constructor(e = new yn(), t = new Vh()) {
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
      i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
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
    const i = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    if (
      r === void 0 ||
      (i.boundingSphere === null && i.computeBoundingSphere(),
      ia.copy(i.boundingSphere),
      ia.applyMatrix4(s),
      e.ray.intersectsSphere(ia) === !1) ||
      (gu.copy(s).invert(),
      Ji.copy(e.ray).applyMatrix4(gu),
      i.boundingBox !== null && Ji.intersectsBox(i.boundingBox) === !1)
    )
      return;
    let o;
    const a = i.index,
      l = i.attributes.position,
      c = i.morphAttributes.position,
      u = i.morphTargetsRelative,
      f = i.attributes.uv,
      h = i.attributes.uv2,
      p = i.groups,
      g = i.drawRange;
    if (a !== null)
      if (Array.isArray(r))
        for (let m = 0, d = p.length; m < d; m++) {
          const _ = p[m],
            x = r[_.materialIndex],
            M = Math.max(_.start, g.start),
            S = Math.min(
              a.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let b = M, P = S; b < P; b += 3) {
            const B = a.getX(b),
              y = a.getX(b + 1),
              L = a.getX(b + 2);
            (o = Rs(this, x, e, Ji, l, c, u, f, h, B, y, L)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const m = Math.max(0, g.start),
          d = Math.min(a.count, g.start + g.count);
        for (let _ = m, x = d; _ < x; _ += 3) {
          const M = a.getX(_),
            S = a.getX(_ + 1),
            b = a.getX(_ + 2);
          (o = Rs(this, r, e, Ji, l, c, u, f, h, M, S, b)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(r))
        for (let m = 0, d = p.length; m < d; m++) {
          const _ = p[m],
            x = r[_.materialIndex],
            M = Math.max(_.start, g.start),
            S = Math.min(
              l.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let b = M, P = S; b < P; b += 3) {
            const B = b,
              y = b + 1,
              L = b + 2;
            (o = Rs(this, x, e, Ji, l, c, u, f, h, B, y, L)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const m = Math.max(0, g.start),
          d = Math.min(l.count, g.start + g.count);
        for (let _ = m, x = d; _ < x; _ += 3) {
          const M = _,
            S = _ + 1,
            b = _ + 2;
          (o = Rs(this, r, e, Ji, l, c, u, f, h, M, S, b)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
  }
}
function $0(n, e, t, i, r, s, o, a) {
  let l;
  if (
    (e.side === jt
      ? (l = i.intersectTriangle(o, s, r, !0, a))
      : (l = i.intersectTriangle(r, s, o, e.side !== $n, a)),
    l === null)
  )
    return null;
  Ps.copy(a), Ps.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(Ps);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Ps.clone(), object: n };
}
function Rs(n, e, t, i, r, s, o, a, l, c, u, f) {
  Gn.fromBufferAttribute(r, c),
    Hn.fromBufferAttribute(r, u),
    Wn.fromBufferAttribute(r, f);
  const h = n.morphTargetInfluences;
  if (s && h) {
    ws.set(0, 0, 0), Es.set(0, 0, 0), Ts.set(0, 0, 0);
    for (let g = 0, m = s.length; g < m; g++) {
      const d = h[g],
        _ = s[g];
      d !== 0 &&
        (ra.fromBufferAttribute(_, c),
        sa.fromBufferAttribute(_, u),
        oa.fromBufferAttribute(_, f),
        o
          ? (ws.addScaledVector(ra, d),
            Es.addScaledVector(sa, d),
            Ts.addScaledVector(oa, d))
          : (ws.addScaledVector(ra.sub(Gn), d),
            Es.addScaledVector(sa.sub(Hn), d),
            Ts.addScaledVector(oa.sub(Wn), d)));
    }
    Gn.add(ws), Hn.add(Es), Wn.add(Ts);
  }
  n.isSkinnedMesh &&
    (n.boneTransform(c, Gn), n.boneTransform(u, Hn), n.boneTransform(f, Wn));
  const p = $0(n, e, t, i, Gn, Hn, Wn, aa);
  if (p) {
    a &&
      (As.fromBufferAttribute(a, c),
      Cs.fromBufferAttribute(a, u),
      Ls.fromBufferAttribute(a, f),
      (p.uv = gn.getUV(aa, Gn, Hn, Wn, As, Cs, Ls, new Fe()))),
      l &&
        (As.fromBufferAttribute(l, c),
        Cs.fromBufferAttribute(l, u),
        Ls.fromBufferAttribute(l, f),
        (p.uv2 = gn.getUV(aa, Gn, Hn, Wn, As, Cs, Ls, new Fe())));
    const g = { a: c, b: u, c: f, normal: new U(), materialIndex: 0 };
    gn.getNormal(Gn, Hn, Wn, g.normal), (p.face = g);
  }
  return p;
}
class cs extends yn {
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
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
    g('z', 'y', 'x', -1, -1, i, t, e, o, s, 0),
      g('z', 'y', 'x', 1, -1, i, t, -e, o, s, 1),
      g('x', 'z', 'y', 1, 1, e, i, t, r, o, 2),
      g('x', 'z', 'y', 1, -1, e, i, -t, r, o, 3),
      g('x', 'y', 'z', 1, -1, e, t, i, r, s, 4),
      g('x', 'y', 'z', -1, -1, e, t, -i, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new ln(c, 3)),
      this.setAttribute('normal', new ln(u, 3)),
      this.setAttribute('uv', new ln(f, 2));
    function g(m, d, _, x, M, S, b, P, B, y, L) {
      const R = S / B,
        Y = b / y,
        de = S / 2,
        G = b / 2,
        N = P / 2,
        te = B + 1,
        ie = y + 1;
      let Z = 0,
        W = 0;
      const z = new U();
      for (let X = 0; X < ie; X++) {
        const ue = X * Y - G;
        for (let oe = 0; oe < te; oe++) {
          const le = oe * R - de;
          (z[m] = le * x),
            (z[d] = ue * M),
            (z[_] = N),
            c.push(z.x, z.y, z.z),
            (z[m] = 0),
            (z[d] = 0),
            (z[_] = P > 0 ? 1 : -1),
            u.push(z.x, z.y, z.z),
            f.push(oe / B),
            f.push(1 - X / y),
            (Z += 1);
        }
      }
      for (let X = 0; X < y; X++)
        for (let ue = 0; ue < B; ue++) {
          const oe = h + ue + te * X,
            le = h + ue + te * (X + 1),
            we = h + (ue + 1) + te * (X + 1),
            V = h + (ue + 1) + te * X;
          l.push(oe, le, V), l.push(le, we, V), (W += 6);
        }
      a.addGroup(p, W, L), (p += W), (h += Z);
    }
  }
  static fromJSON(e) {
    return new cs(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Ar(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const r = n[t][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? (e[t][i] = r.clone())
        : Array.isArray(r)
        ? (e[t][i] = r.slice())
        : (e[t][i] = r);
    }
  }
  return e;
}
function Pt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Ar(n[t]);
    for (const r in i) e[r] = i[r];
  }
  return e;
}
function Y0(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
const Z0 = { clone: Ar, merge: Pt };
var K0 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  J0 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Fi extends Dr {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = K0),
      (this.fragmentShader = J0),
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
      (this.uniforms = Ar(e.uniforms)),
      (this.uniformsGroups = Y0(e.uniformsGroups)),
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
    const i = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Wh extends Rt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new ft()),
      (this.projectionMatrix = new ft()),
      (this.projectionMatrixInverse = new ft());
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
class Wt extends Wh {
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
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
    (this.fov = su * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ko * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return su * 2 * Math.atan(Math.tan(ko * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, i, r, s, o) {
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
      (this.view.offsetX = i),
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
    let t = (e * Math.tan(ko * 0.5 * this.fov)) / this.zoom,
      i = 2 * t,
      r = this.aspect * i,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (t -= (o.offsetY * i) / c),
        (r *= o.width / l),
        (i *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + r, t, t - i, e, this.far),
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
const Qi = 90,
  er = 1;
class Q0 extends Rt {
  constructor(e, t, i) {
    super(), (this.type = 'CubeCamera'), (this.renderTarget = i);
    const r = new Wt(Qi, er, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new U(1, 0, 0)),
      this.add(r);
    const s = new Wt(Qi, er, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new U(-1, 0, 0)),
      this.add(s);
    const o = new Wt(Qi, er, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new U(0, 1, 0)),
      this.add(o);
    const a = new Wt(Qi, er, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new U(0, -1, 0)),
      this.add(a);
    const l = new Wt(Qi, er, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new U(0, 0, 1)),
      this.add(l);
    const c = new Wt(Qi, er, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new U(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const i = this.renderTarget,
      [r, s, o, a, l, c] = this.children,
      u = e.getRenderTarget(),
      f = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = Dn), (e.xr.enabled = !1);
    const p = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0),
      e.render(t, r),
      e.setRenderTarget(i, 1),
      e.render(t, s),
      e.setRenderTarget(i, 2),
      e.render(t, o),
      e.setRenderTarget(i, 3),
      e.render(t, a),
      e.setRenderTarget(i, 4),
      e.render(t, l),
      (i.texture.generateMipmaps = p),
      e.setRenderTarget(i, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = f),
      (e.xr.enabled = h),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class qh extends $t {
  constructor(e, t, i, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : wr),
      super(e, t, i, r, s, o, a, l, c, u),
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
class ev extends Di {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      r = [i, i, i, i, i, i];
    (this.texture = new qh(
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
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ft);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const i = {
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
      r = new cs(5, 5, 5),
      s = new Fi({
        name: 'CubemapFromEquirect',
        uniforms: Ar(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: jt,
        blending: ei,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Zn(r, s),
      a = t.minFilter;
    return (
      t.minFilter === _o && (t.minFilter = Ft),
      new Q0(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, i, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, i, r);
    e.setRenderTarget(s);
  }
}
const la = new U(),
  tv = new U(),
  nv = new qt();
class pi {
  constructor(e = new U(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, i, r) {
    return this.normal.set(e, t, i), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const r = la.subVectors(i, t).cross(tv.subVectors(e, t)).normalize();
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
    const i = e.delta(la),
      r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(i).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (t < 0 && i > 0) || (i < 0 && t > 0);
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
    const i = t || nv.getNormalMatrix(e),
      r = this.coplanarPoint(la).applyMatrix4(e),
      s = this.normal.applyMatrix3(i).normalize();
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
const tr = new vo(),
  Ds = new U();
class Xh {
  constructor(
    e = new pi(),
    t = new pi(),
    i = new pi(),
    r = new pi(),
    s = new pi(),
    o = new pi()
  ) {
    this.planes = [e, t, i, r, s, o];
  }
  set(e, t, i, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(i),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      i = e.elements,
      r = i[0],
      s = i[1],
      o = i[2],
      a = i[3],
      l = i[4],
      c = i[5],
      u = i[6],
      f = i[7],
      h = i[8],
      p = i[9],
      g = i[10],
      m = i[11],
      d = i[12],
      _ = i[13],
      x = i[14],
      M = i[15];
    return (
      t[0].setComponents(a - r, f - l, m - h, M - d).normalize(),
      t[1].setComponents(a + r, f + l, m + h, M + d).normalize(),
      t[2].setComponents(a + s, f + c, m + p, M + _).normalize(),
      t[3].setComponents(a - s, f - c, m - p, M - _).normalize(),
      t[4].setComponents(a - o, f - u, m - g, M - x).normalize(),
      t[5].setComponents(a + o, f + u, m + g, M + x).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(tr)
    );
  }
  intersectsSprite(e) {
    return (
      tr.center.set(0, 0, 0),
      (tr.radius = 0.7071067811865476),
      tr.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(tr)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      i = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(i) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = t[i];
      if (
        ((Ds.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Ds.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Ds.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Ds) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function jh() {
  let n = null,
    e = !1,
    t = null,
    i = null;
  function r(s, o) {
    t(s, o), (i = n.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((i = n.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      n.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      n = s;
    },
  };
}
function iv(n, e) {
  const t = e.isWebGL2,
    i = new WeakMap();
  function r(c, u) {
    const f = c.array,
      h = c.usage,
      p = n.createBuffer();
    n.bindBuffer(u, p), n.bufferData(u, f, h), c.onUploadCallback();
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
    n.bindBuffer(f, c),
      p.count === -1
        ? n.bufferSubData(f, 0, h)
        : (t
            ? n.bufferSubData(
                f,
                p.offset * h.BYTES_PER_ELEMENT,
                h,
                p.offset,
                p.count
              )
            : n.bufferSubData(
                f,
                p.offset * h.BYTES_PER_ELEMENT,
                h.subarray(p.offset, p.offset + p.count)
              ),
          (p.count = -1));
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), i.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = i.get(c);
    u && (n.deleteBuffer(u.buffer), i.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const h = i.get(c);
      (!h || h.version < c.version) &&
        i.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = i.get(c);
    f === void 0
      ? i.set(c, r(c, u))
      : f.version < c.version && (s(f.buffer, c, u), (f.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class Sl extends yn {
  constructor(e = 1, t = 1, i = 1, r = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: r,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(i),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      f = e / a,
      h = t / l,
      p = [],
      g = [],
      m = [],
      d = [];
    for (let _ = 0; _ < u; _++) {
      const x = _ * h - o;
      for (let M = 0; M < c; M++) {
        const S = M * f - s;
        g.push(S, -x, 0), m.push(0, 0, 1), d.push(M / a), d.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let x = 0; x < a; x++) {
        const M = x + c * _,
          S = x + c * (_ + 1),
          b = x + 1 + c * (_ + 1),
          P = x + 1 + c * _;
        p.push(M, S, P), p.push(S, b, P);
      }
    this.setIndex(p),
      this.setAttribute('position', new ln(g, 3)),
      this.setAttribute('normal', new ln(m, 3)),
      this.setAttribute('uv', new ln(d, 2));
  }
  static fromJSON(e) {
    return new Sl(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var rv = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  sv = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ov = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  av = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  lv = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  cv = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  uv = 'vec3 transformed = vec3( position );',
  fv = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  hv = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
  dv = `#ifdef USE_IRIDESCENCE
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
  pv = `#ifdef USE_BUMPMAP
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
  mv = `#if NUM_CLIPPING_PLANES > 0
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
  gv = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  _v = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  vv = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  xv = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  yv = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Mv = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  bv = `#if defined( USE_COLOR_ALPHA )
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
  Sv = `#define PI 3.141592653589793
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
  wv = `#ifdef ENVMAP_TYPE_CUBE_UV
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
  Ev = `vec3 transformedNormal = objectNormal;
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
  Tv = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Av = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Cv = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Lv = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Pv = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  Rv = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Dv = `#ifdef USE_ENVMAP
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
  Iv = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Fv = `#ifdef USE_ENVMAP
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
  Ov = `#ifdef USE_ENVMAP
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
  Nv = `#ifdef USE_ENVMAP
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
  zv = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Uv = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Bv = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  kv = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Vv = `#ifdef USE_GRADIENTMAP
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
  Gv = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Hv = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Wv = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  qv = `varying vec3 vViewPosition;
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
  Xv = `uniform bool receiveShadow;
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
  jv = `#if defined( USE_ENVMAP )
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
  $v = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Yv = `varying vec3 vViewPosition;
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
  Zv = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Kv = `varying vec3 vViewPosition;
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
  Jv = `PhysicalMaterial material;
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
  Qv = `struct PhysicalMaterial {
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
  ex = `
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
  tx = `#if defined( RE_IndirectDiffuse )
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
  nx = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  ix = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  rx = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  sx = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  ox = `#ifdef USE_LOGDEPTHBUF
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
  ax = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  lx = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  cx = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  ux = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  fx = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  hx = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  dx = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  px = `#ifdef USE_MORPHNORMALS
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
  mx = `#ifdef USE_MORPHTARGETS
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
  gx = `#ifdef USE_MORPHTARGETS
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
  _x = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
  vx = `#ifdef OBJECTSPACE_NORMALMAP
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
  xx = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  yx = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Mx = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  bx = `#ifdef USE_NORMALMAP
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
  Sx = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  wx = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Ex = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Tx = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Ax = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Cx = `vec3 packNormalToRGB( const in vec3 normal ) {
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
  Lx = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Px = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Rx = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Dx = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Ix = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Fx = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Ox = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  Nx = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  zx = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
  Ux = `float getShadowMask() {
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
  Bx = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  kx = `#ifdef USE_SKINNING
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
  Vx = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Gx = `#ifdef USE_SKINNING
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
  Hx = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Wx = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  qx = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Xx = `#ifndef saturate
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
  jx = `#ifdef USE_TRANSMISSION
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
  $x = `#ifdef USE_TRANSMISSION
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
  Yx = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Zx = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Kx = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Jx = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  Qx = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  ey = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  ty = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ny = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  iy = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  ry = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  sy = `#ifdef ENVMAP_TYPE_CUBE
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
  oy = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  ay = `uniform samplerCube tCube;
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
  ly = `#include <common>
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
  cy = `#if DEPTH_PACKING == 3200
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
  uy = `#define DISTANCE
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
  fy = `#define DISTANCE
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
  hy = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  dy = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  py = `uniform float scale;
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
  my = `uniform vec3 diffuse;
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
  gy = `#include <common>
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
  _y = `uniform vec3 diffuse;
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
  vy = `#define LAMBERT
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
  xy = `#define LAMBERT
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
  yy = `#define MATCAP
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
  My = `#define MATCAP
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
  by = `#define NORMAL
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
  Sy = `#define NORMAL
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
  wy = `#define PHONG
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
  Ey = `#define PHONG
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
  Ty = `#define STANDARD
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
  Ay = `#define STANDARD
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
  Cy = `#define TOON
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
  Ly = `#define TOON
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
  Py = `uniform float size;
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
  Ry = `uniform vec3 diffuse;
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
  Dy = `#include <common>
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
  Iy = `uniform vec3 color;
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
  Fy = `uniform float rotation;
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
  Oy = `uniform vec3 diffuse;
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
  Ue = {
    alphamap_fragment: rv,
    alphamap_pars_fragment: sv,
    alphatest_fragment: ov,
    alphatest_pars_fragment: av,
    aomap_fragment: lv,
    aomap_pars_fragment: cv,
    begin_vertex: uv,
    beginnormal_vertex: fv,
    bsdfs: hv,
    iridescence_fragment: dv,
    bumpmap_pars_fragment: pv,
    clipping_planes_fragment: mv,
    clipping_planes_pars_fragment: gv,
    clipping_planes_pars_vertex: _v,
    clipping_planes_vertex: vv,
    color_fragment: xv,
    color_pars_fragment: yv,
    color_pars_vertex: Mv,
    color_vertex: bv,
    common: Sv,
    cube_uv_reflection_fragment: wv,
    defaultnormal_vertex: Ev,
    displacementmap_pars_vertex: Tv,
    displacementmap_vertex: Av,
    emissivemap_fragment: Cv,
    emissivemap_pars_fragment: Lv,
    encodings_fragment: Pv,
    encodings_pars_fragment: Rv,
    envmap_fragment: Dv,
    envmap_common_pars_fragment: Iv,
    envmap_pars_fragment: Fv,
    envmap_pars_vertex: Ov,
    envmap_physical_pars_fragment: jv,
    envmap_vertex: Nv,
    fog_vertex: zv,
    fog_pars_vertex: Uv,
    fog_fragment: Bv,
    fog_pars_fragment: kv,
    gradientmap_pars_fragment: Vv,
    lightmap_fragment: Gv,
    lightmap_pars_fragment: Hv,
    lights_lambert_fragment: Wv,
    lights_lambert_pars_fragment: qv,
    lights_pars_begin: Xv,
    lights_toon_fragment: $v,
    lights_toon_pars_fragment: Yv,
    lights_phong_fragment: Zv,
    lights_phong_pars_fragment: Kv,
    lights_physical_fragment: Jv,
    lights_physical_pars_fragment: Qv,
    lights_fragment_begin: ex,
    lights_fragment_maps: tx,
    lights_fragment_end: nx,
    logdepthbuf_fragment: ix,
    logdepthbuf_pars_fragment: rx,
    logdepthbuf_pars_vertex: sx,
    logdepthbuf_vertex: ox,
    map_fragment: ax,
    map_pars_fragment: lx,
    map_particle_fragment: cx,
    map_particle_pars_fragment: ux,
    metalnessmap_fragment: fx,
    metalnessmap_pars_fragment: hx,
    morphcolor_vertex: dx,
    morphnormal_vertex: px,
    morphtarget_pars_vertex: mx,
    morphtarget_vertex: gx,
    normal_fragment_begin: _x,
    normal_fragment_maps: vx,
    normal_pars_fragment: xx,
    normal_pars_vertex: yx,
    normal_vertex: Mx,
    normalmap_pars_fragment: bx,
    clearcoat_normal_fragment_begin: Sx,
    clearcoat_normal_fragment_maps: wx,
    clearcoat_pars_fragment: Ex,
    iridescence_pars_fragment: Tx,
    output_fragment: Ax,
    packing: Cx,
    premultiplied_alpha_fragment: Lx,
    project_vertex: Px,
    dithering_fragment: Rx,
    dithering_pars_fragment: Dx,
    roughnessmap_fragment: Ix,
    roughnessmap_pars_fragment: Fx,
    shadowmap_pars_fragment: Ox,
    shadowmap_pars_vertex: Nx,
    shadowmap_vertex: zx,
    shadowmask_pars_fragment: Ux,
    skinbase_vertex: Bx,
    skinning_pars_vertex: kx,
    skinning_vertex: Vx,
    skinnormal_vertex: Gx,
    specularmap_fragment: Hx,
    specularmap_pars_fragment: Wx,
    tonemapping_fragment: qx,
    tonemapping_pars_fragment: Xx,
    transmission_fragment: jx,
    transmission_pars_fragment: $x,
    uv_pars_fragment: Yx,
    uv_pars_vertex: Zx,
    uv_vertex: Kx,
    uv2_pars_fragment: Jx,
    uv2_pars_vertex: Qx,
    uv2_vertex: ey,
    worldpos_vertex: ty,
    background_vert: ny,
    background_frag: iy,
    backgroundCube_vert: ry,
    backgroundCube_frag: sy,
    cube_vert: oy,
    cube_frag: ay,
    depth_vert: ly,
    depth_frag: cy,
    distanceRGBA_vert: uy,
    distanceRGBA_frag: fy,
    equirect_vert: hy,
    equirect_frag: dy,
    linedashed_vert: py,
    linedashed_frag: my,
    meshbasic_vert: gy,
    meshbasic_frag: _y,
    meshlambert_vert: vy,
    meshlambert_frag: xy,
    meshmatcap_vert: yy,
    meshmatcap_frag: My,
    meshnormal_vert: by,
    meshnormal_frag: Sy,
    meshphong_vert: wy,
    meshphong_frag: Ey,
    meshphysical_vert: Ty,
    meshphysical_frag: Ay,
    meshtoon_vert: Cy,
    meshtoon_frag: Ly,
    points_vert: Py,
    points_frag: Ry,
    shadow_vert: Dy,
    shadow_frag: Iy,
    sprite_vert: Fy,
    sprite_frag: Oy,
  },
  xe = {
    common: {
      diffuse: { value: new Qe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new qt() },
      uv2Transform: { value: new qt() },
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
      normalScale: { value: new Fe(1, 1) },
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
      fogColor: { value: new Qe(16777215) },
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
      diffuse: { value: new Qe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new qt() },
    },
    sprite: {
      diffuse: { value: new Qe(16777215) },
      opacity: { value: 1 },
      center: { value: new Fe(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new qt() },
    },
  },
  pn = {
    basic: {
      uniforms: Pt([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.fog,
      ]),
      vertexShader: Ue.meshbasic_vert,
      fragmentShader: Ue.meshbasic_frag,
    },
    lambert: {
      uniforms: Pt([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        xe.lights,
        { emissive: { value: new Qe(0) } },
      ]),
      vertexShader: Ue.meshlambert_vert,
      fragmentShader: Ue.meshlambert_frag,
    },
    phong: {
      uniforms: Pt([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        xe.lights,
        {
          emissive: { value: new Qe(0) },
          specular: { value: new Qe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ue.meshphong_vert,
      fragmentShader: Ue.meshphong_frag,
    },
    standard: {
      uniforms: Pt([
        xe.common,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.roughnessmap,
        xe.metalnessmap,
        xe.fog,
        xe.lights,
        {
          emissive: { value: new Qe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ue.meshphysical_vert,
      fragmentShader: Ue.meshphysical_frag,
    },
    toon: {
      uniforms: Pt([
        xe.common,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.gradientmap,
        xe.fog,
        xe.lights,
        { emissive: { value: new Qe(0) } },
      ]),
      vertexShader: Ue.meshtoon_vert,
      fragmentShader: Ue.meshtoon_frag,
    },
    matcap: {
      uniforms: Pt([
        xe.common,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ue.meshmatcap_vert,
      fragmentShader: Ue.meshmatcap_frag,
    },
    points: {
      uniforms: Pt([xe.points, xe.fog]),
      vertexShader: Ue.points_vert,
      fragmentShader: Ue.points_frag,
    },
    dashed: {
      uniforms: Pt([
        xe.common,
        xe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ue.linedashed_vert,
      fragmentShader: Ue.linedashed_frag,
    },
    depth: {
      uniforms: Pt([xe.common, xe.displacementmap]),
      vertexShader: Ue.depth_vert,
      fragmentShader: Ue.depth_frag,
    },
    normal: {
      uniforms: Pt([
        xe.common,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ue.meshnormal_vert,
      fragmentShader: Ue.meshnormal_frag,
    },
    sprite: {
      uniforms: Pt([xe.sprite, xe.fog]),
      vertexShader: Ue.sprite_vert,
      fragmentShader: Ue.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new qt() }, t2D: { value: null } },
      vertexShader: Ue.background_vert,
      fragmentShader: Ue.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
      },
      vertexShader: Ue.backgroundCube_vert,
      fragmentShader: Ue.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ue.cube_vert,
      fragmentShader: Ue.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ue.equirect_vert,
      fragmentShader: Ue.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Pt([
        xe.common,
        xe.displacementmap,
        {
          referencePosition: { value: new U() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ue.distanceRGBA_vert,
      fragmentShader: Ue.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Pt([
        xe.lights,
        xe.fog,
        { color: { value: new Qe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ue.shadow_vert,
      fragmentShader: Ue.shadow_frag,
    },
  };
pn.physical = {
  uniforms: Pt([
    pn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Fe(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Qe(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Fe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Qe(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Qe(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag,
};
function Ny(n, e, t, i, r, s, o) {
  const a = new Qe(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    h = 0,
    p = null;
  function g(d, _) {
    let x = !1,
      M = _.isScene === !0 ? _.background : null;
    M && M.isTexture && (M = (_.backgroundBlurriness > 0 ? t : e).get(M));
    const S = n.xr,
      b = S.getSession && S.getSession();
    b && b.environmentBlendMode === 'additive' && (M = null),
      M === null ? m(a, l) : M && M.isColor && (m(M, 1), (x = !0)),
      (n.autoClear || x) &&
        n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === go)
        ? (u === void 0 &&
            ((u = new Zn(
              new cs(1, 1, 1),
              new Fi({
                name: 'BackgroundCubeMaterial',
                uniforms: Ar(pn.backgroundCube.uniforms),
                vertexShader: pn.backgroundCube.vertexShader,
                fragmentShader: pn.backgroundCube.fragmentShader,
                side: jt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute('normal'),
            u.geometry.deleteAttribute('uv'),
            (u.onBeforeRender = function (P, B, y) {
              this.matrixWorld.copyPosition(y.matrixWorld);
            }),
            Object.defineProperty(u.material, 'envMap', {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          (u.material.uniforms.envMap.value = M),
          (u.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            _.backgroundBlurriness),
          (f !== M || h !== M.version || p !== n.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (f = M),
            (h = M.version),
            (p = n.toneMapping)),
          u.layers.enableAll(),
          d.unshift(u, u.geometry, u.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (c === void 0 &&
            ((c = new Zn(
              new Sl(2, 2),
              new Fi({
                name: 'BackgroundMaterial',
                uniforms: Ar(pn.background.uniforms),
                vertexShader: pn.background.vertexShader,
                fragmentShader: pn.background.fragmentShader,
                side: Sr,
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
          (c.material.uniforms.t2D.value = M),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(M.matrix),
          (f !== M || h !== M.version || p !== n.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = M),
            (h = M.version),
            (p = n.toneMapping)),
          c.layers.enableAll(),
          d.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(d, _) {
    i.buffers.color.setClear(d.r, d.g, d.b, _, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (d, _ = 1) {
      a.set(d), (l = _), m(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (d) {
      (l = d), m(a, l);
    },
    render: g,
  };
}
function zy(n, e, t, i) {
  const r = n.getParameter(34921),
    s = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    o = i.isWebGL2 || s !== null,
    a = {},
    l = d(null);
  let c = l,
    u = !1;
  function f(N, te, ie, Z, W) {
    let z = !1;
    if (o) {
      const X = m(Z, ie, te);
      c !== X && ((c = X), p(c.object)),
        (z = _(N, Z, ie, W)),
        z && x(N, Z, ie, W);
    } else {
      const X = te.wireframe === !0;
      (c.geometry !== Z.id || c.program !== ie.id || c.wireframe !== X) &&
        ((c.geometry = Z.id), (c.program = ie.id), (c.wireframe = X), (z = !0));
    }
    W !== null && t.update(W, 34963),
      (z || u) &&
        ((u = !1),
        y(N, te, ie, Z),
        W !== null && n.bindBuffer(34963, t.get(W).buffer));
  }
  function h() {
    return i.isWebGL2 ? n.createVertexArray() : s.createVertexArrayOES();
  }
  function p(N) {
    return i.isWebGL2 ? n.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function g(N) {
    return i.isWebGL2 ? n.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function m(N, te, ie) {
    const Z = ie.wireframe === !0;
    let W = a[N.id];
    W === void 0 && ((W = {}), (a[N.id] = W));
    let z = W[te.id];
    z === void 0 && ((z = {}), (W[te.id] = z));
    let X = z[Z];
    return X === void 0 && ((X = d(h())), (z[Z] = X)), X;
  }
  function d(N) {
    const te = [],
      ie = [],
      Z = [];
    for (let W = 0; W < r; W++) (te[W] = 0), (ie[W] = 0), (Z[W] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: te,
      enabledAttributes: ie,
      attributeDivisors: Z,
      object: N,
      attributes: {},
      index: null,
    };
  }
  function _(N, te, ie, Z) {
    const W = c.attributes,
      z = te.attributes;
    let X = 0;
    const ue = ie.getAttributes();
    for (const oe in ue)
      if (ue[oe].location >= 0) {
        const we = W[oe];
        let V = z[oe];
        if (
          (V === void 0 &&
            (oe === 'instanceMatrix' &&
              N.instanceMatrix &&
              (V = N.instanceMatrix),
            oe === 'instanceColor' && N.instanceColor && (V = N.instanceColor)),
          we === void 0 || we.attribute !== V || (V && we.data !== V.data))
        )
          return !0;
        X++;
      }
    return c.attributesNum !== X || c.index !== Z;
  }
  function x(N, te, ie, Z) {
    const W = {},
      z = te.attributes;
    let X = 0;
    const ue = ie.getAttributes();
    for (const oe in ue)
      if (ue[oe].location >= 0) {
        let we = z[oe];
        we === void 0 &&
          (oe === 'instanceMatrix' &&
            N.instanceMatrix &&
            (we = N.instanceMatrix),
          oe === 'instanceColor' && N.instanceColor && (we = N.instanceColor));
        const V = {};
        (V.attribute = we),
          we && we.data && (V.data = we.data),
          (W[oe] = V),
          X++;
      }
    (c.attributes = W), (c.attributesNum = X), (c.index = Z);
  }
  function M() {
    const N = c.newAttributes;
    for (let te = 0, ie = N.length; te < ie; te++) N[te] = 0;
  }
  function S(N) {
    b(N, 0);
  }
  function b(N, te) {
    const ie = c.newAttributes,
      Z = c.enabledAttributes,
      W = c.attributeDivisors;
    (ie[N] = 1),
      Z[N] === 0 && (n.enableVertexAttribArray(N), (Z[N] = 1)),
      W[N] !== te &&
        ((i.isWebGL2 ? n : e.get('ANGLE_instanced_arrays'))[
          i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](N, te),
        (W[N] = te));
  }
  function P() {
    const N = c.newAttributes,
      te = c.enabledAttributes;
    for (let ie = 0, Z = te.length; ie < Z; ie++)
      te[ie] !== N[ie] && (n.disableVertexAttribArray(ie), (te[ie] = 0));
  }
  function B(N, te, ie, Z, W, z) {
    i.isWebGL2 === !0 && (ie === 5124 || ie === 5125)
      ? n.vertexAttribIPointer(N, te, ie, W, z)
      : n.vertexAttribPointer(N, te, ie, Z, W, z);
  }
  function y(N, te, ie, Z) {
    if (
      i.isWebGL2 === !1 &&
      (N.isInstancedMesh || Z.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    M();
    const W = Z.attributes,
      z = ie.getAttributes(),
      X = te.defaultAttributeValues;
    for (const ue in z) {
      const oe = z[ue];
      if (oe.location >= 0) {
        let le = W[ue];
        if (
          (le === void 0 &&
            (ue === 'instanceMatrix' &&
              N.instanceMatrix &&
              (le = N.instanceMatrix),
            ue === 'instanceColor' &&
              N.instanceColor &&
              (le = N.instanceColor)),
          le !== void 0)
        ) {
          const we = le.normalized,
            V = le.itemSize,
            I = t.get(le);
          if (I === void 0) continue;
          const ae = I.buffer,
            ce = I.type,
            ve = I.bytesPerElement;
          if (le.isInterleavedBufferAttribute) {
            const _e = le.data,
              Ee = _e.stride,
              E = le.offset;
            if (_e.isInstancedInterleavedBuffer) {
              for (let A = 0; A < oe.locationSize; A++)
                b(oe.location + A, _e.meshPerAttribute);
              N.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = _e.meshPerAttribute * _e.count);
            } else for (let A = 0; A < oe.locationSize; A++) S(oe.location + A);
            n.bindBuffer(34962, ae);
            for (let A = 0; A < oe.locationSize; A++)
              B(
                oe.location + A,
                V / oe.locationSize,
                ce,
                we,
                Ee * ve,
                (E + (V / oe.locationSize) * A) * ve
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let _e = 0; _e < oe.locationSize; _e++)
                b(oe.location + _e, le.meshPerAttribute);
              N.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let _e = 0; _e < oe.locationSize; _e++) S(oe.location + _e);
            n.bindBuffer(34962, ae);
            for (let _e = 0; _e < oe.locationSize; _e++)
              B(
                oe.location + _e,
                V / oe.locationSize,
                ce,
                we,
                V * ve,
                (V / oe.locationSize) * _e * ve
              );
          }
        } else if (X !== void 0) {
          const we = X[ue];
          if (we !== void 0)
            switch (we.length) {
              case 2:
                n.vertexAttrib2fv(oe.location, we);
                break;
              case 3:
                n.vertexAttrib3fv(oe.location, we);
                break;
              case 4:
                n.vertexAttrib4fv(oe.location, we);
                break;
              default:
                n.vertexAttrib1fv(oe.location, we);
            }
        }
      }
    }
    P();
  }
  function L() {
    de();
    for (const N in a) {
      const te = a[N];
      for (const ie in te) {
        const Z = te[ie];
        for (const W in Z) g(Z[W].object), delete Z[W];
        delete te[ie];
      }
      delete a[N];
    }
  }
  function R(N) {
    if (a[N.id] === void 0) return;
    const te = a[N.id];
    for (const ie in te) {
      const Z = te[ie];
      for (const W in Z) g(Z[W].object), delete Z[W];
      delete te[ie];
    }
    delete a[N.id];
  }
  function Y(N) {
    for (const te in a) {
      const ie = a[te];
      if (ie[N.id] === void 0) continue;
      const Z = ie[N.id];
      for (const W in Z) g(Z[W].object), delete Z[W];
      delete ie[N.id];
    }
  }
  function de() {
    G(), (u = !0), c !== l && ((c = l), p(c.object));
  }
  function G() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: f,
    reset: de,
    resetDefaultState: G,
    dispose: L,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: Y,
    initAttributes: M,
    enableAttribute: S,
    disableUnusedAttributes: P,
  };
}
function Uy(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    n.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, f) {
    if (f === 0) return;
    let h, p;
    if (r) (h = n), (p = 'drawArraysInstanced');
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
function By(n, e, t) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const B = e.get('EXT_texture_filter_anisotropic');
      i = n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function s(B) {
    if (B === 'highp') {
      if (
        n.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        n.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return 'highp';
      B = 'mediump';
    }
    return B === 'mediump' &&
      n.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      n.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? 'mediump'
      : 'lowp';
  }
  const o =
    (typeof WebGL2RenderingContext < 'u' &&
      n instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < 'u' &&
      n instanceof WebGL2ComputeRenderingContext);
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
    f = n.getParameter(34930),
    h = n.getParameter(35660),
    p = n.getParameter(3379),
    g = n.getParameter(34076),
    m = n.getParameter(34921),
    d = n.getParameter(36347),
    _ = n.getParameter(36348),
    x = n.getParameter(36349),
    M = h > 0,
    S = o || e.has('OES_texture_float'),
    b = M && S,
    P = o ? n.getParameter(36183) : 0;
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
    maxAttributes: m,
    maxVertexUniforms: d,
    maxVaryings: _,
    maxFragmentUniforms: x,
    vertexTextures: M,
    floatFragmentTextures: S,
    floatVertexTextures: b,
    maxSamples: P,
  };
}
function ky(n) {
  const e = this;
  let t = null,
    i = 0,
    r = !1,
    s = !1;
  const o = new pi(),
    a = new qt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h, p) {
      const g = f.length !== 0 || h || i !== 0 || r;
      return (r = h), (t = u(f, p, 0)), (i = f.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (f, h, p) {
      const g = f.clippingPlanes,
        m = f.clipIntersection,
        d = f.clipShadows,
        _ = n.get(f);
      if (!r || g === null || g.length === 0 || (s && !d)) s ? u(null) : c();
      else {
        const x = s ? 0 : i,
          M = x * 4;
        let S = _.clippingState || null;
        (l.value = S), (S = u(g, h, M, p));
        for (let b = 0; b !== M; ++b) S[b] = t[b];
        (_.clippingState = S),
          (this.numIntersection = m ? this.numPlanes : 0),
          (this.numPlanes += x);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function u(f, h, p, g) {
    const m = f !== null ? f.length : 0;
    let d = null;
    if (m !== 0) {
      if (((d = l.value), g !== !0 || d === null)) {
        const _ = p + m * 4,
          x = h.matrixWorldInverse;
        a.getNormalMatrix(x),
          (d === null || d.length < _) && (d = new Float32Array(_));
        for (let M = 0, S = p; M !== m; ++M, S += 4)
          o.copy(f[M]).applyMatrix4(x, a),
            o.normal.toArray(d, S),
            (d[S + 3] = o.constant);
      }
      (l.value = d), (l.needsUpdate = !0);
    }
    return (e.numPlanes = m), (e.numIntersection = 0), d;
  }
}
function Vy(n) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Na ? (o.mapping = wr) : a === za && (o.mapping = Er), o;
  }
  function i(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Na || a === za)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new ev(l.height / 2);
            return (
              c.fromEquirectangularTexture(n, o),
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
  return { get: i, dispose: s };
}
class Gy extends Wh {
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = i),
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
  setViewOffset(e, t, i, r, s, o) {
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
      (this.view.offsetX = i),
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
      i = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = i - e,
      o = i + e,
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
const cr = 4,
  _u = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  xi = 20,
  ca = new Gy(),
  vu = new Qe();
let ua = null;
const mi = (1 + Math.sqrt(5)) / 2,
  nr = 1 / mi,
  xu = [
    new U(1, 1, 1),
    new U(-1, 1, 1),
    new U(1, 1, -1),
    new U(-1, 1, -1),
    new U(0, mi, nr),
    new U(0, mi, -nr),
    new U(nr, 0, mi),
    new U(-nr, 0, mi),
    new U(mi, nr, 0),
    new U(-mi, nr, 0),
  ];
class yu {
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
  fromScene(e, t = 0, i = 0.1, r = 100) {
    (ua = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, i, r, s),
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
      ((this._cubemapMaterial = Su()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = bu()),
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
    this._renderer.setRenderTarget(ua),
      (e.scissorTest = !1),
      Is(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === wr || e.mapping === Er
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (ua = this._renderer.getRenderTarget());
    const i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: Ft,
        minFilter: Ft,
        generateMipmaps: !1,
        type: ss,
        format: nn,
        encoding: Ri,
        depthBuffer: !1,
      },
      r = Mu(e, t, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Mu(e, t, i));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Hy(s)),
        (this._blurMaterial = Wy(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Zn(this._lodPlanes[0], e);
    this._renderer.compile(t, ca);
  }
  _sceneToCubeUV(e, t, i, r) {
    const a = new Wt(90, 1, t, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(vu), (u.toneMapping = Dn), (u.autoClear = !1);
    const p = new Vh({
        name: 'PMREM.Background',
        side: jt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Zn(new cs(), p);
    let m = !1;
    const d = e.background;
    d
      ? d.isColor && (p.color.copy(d), (e.background = null), (m = !0))
      : (p.color.copy(vu), (m = !0));
    for (let _ = 0; _ < 6; _++) {
      const x = _ % 3;
      x === 0
        ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0))
        : x === 1
        ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0))
        : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const M = this._cubeSize;
      Is(r, x * M, _ > 2 ? M : 0, M, M),
        u.setRenderTarget(r),
        m && u.render(g, a),
        u.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = h),
      (u.autoClear = f),
      (e.background = d);
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      r = e.mapping === wr || e.mapping === Er;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Su()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = bu());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new Zn(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Is(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, ca);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        o = xu[(r - 1) % xu.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, i, r, 'latitudinal', s),
      this._halfBlur(o, e, i, i, r, 'longitudinal', s);
  }
  _halfBlur(e, t, i, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== 'latitudinal' &&
      o !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!'
      );
    const u = 3,
      f = new Zn(this._lodPlanes[r], c),
      h = c.uniforms,
      p = this._sizeLods[i] - 1,
      g = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * xi - 1),
      m = s / g,
      d = isFinite(s) ? 1 + Math.floor(u * m) : xi;
    d > xi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xi}`
      );
    const _ = [];
    let x = 0;
    for (let B = 0; B < xi; ++B) {
      const y = B / m,
        L = Math.exp((-y * y) / 2);
      _.push(L), B === 0 ? (x += L) : B < d && (x += 2 * L);
    }
    for (let B = 0; B < _.length; B++) _[B] = _[B] / x;
    (h.envMap.value = e.texture),
      (h.samples.value = d),
      (h.weights.value = _),
      (h.latitudinal.value = o === 'latitudinal'),
      a && (h.poleAxis.value = a);
    const { _lodMax: M } = this;
    (h.dTheta.value = g), (h.mipInt.value = M - i);
    const S = this._sizeLods[r],
      b = 3 * S * (r > M - cr ? r - M + cr : 0),
      P = 4 * (this._cubeSize - S);
    Is(t, b, P, 3 * S, 2 * S), l.setRenderTarget(t), l.render(f, ca);
  }
}
function Hy(n) {
  const e = [],
    t = [],
    i = [];
  let r = n;
  const s = n - cr + 1 + _u.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > n - cr ? (l = _u[o - n + cr - 1]) : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2),
      u = -c,
      f = 1 + c,
      h = [u, u, f, u, f, f, u, u, f, f, u, f],
      p = 6,
      g = 6,
      m = 3,
      d = 2,
      _ = 1,
      x = new Float32Array(m * g * p),
      M = new Float32Array(d * g * p),
      S = new Float32Array(_ * g * p);
    for (let P = 0; P < p; P++) {
      const B = ((P % 3) * 2) / 3 - 1,
        y = P > 2 ? 0 : -1,
        L = [
          B,
          y,
          0,
          B + 2 / 3,
          y,
          0,
          B + 2 / 3,
          y + 1,
          0,
          B,
          y,
          0,
          B + 2 / 3,
          y + 1,
          0,
          B,
          y + 1,
          0,
        ];
      x.set(L, m * g * P), M.set(h, d * g * P);
      const R = [P, P, P, P, P, P];
      S.set(R, _ * g * P);
    }
    const b = new yn();
    b.setAttribute('position', new an(x, m)),
      b.setAttribute('uv', new an(M, d)),
      b.setAttribute('faceIndex', new an(S, _)),
      e.push(b),
      r > cr && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function Mu(n, e, t) {
  const i = new Di(n, e, t);
  return (
    (i.texture.mapping = go),
    (i.texture.name = 'PMREM.cubeUv'),
    (i.scissorTest = !0),
    i
  );
}
function Is(n, e, t, i, r) {
  n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r);
}
function Wy(n, e, t) {
  const i = new Float32Array(xi),
    r = new U(0, 1, 0);
  return new Fi({
    name: 'SphericalGaussianBlur',
    defines: {
      n: xi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${n}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: wl(),
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
    blending: ei,
    depthTest: !1,
    depthWrite: !1,
  });
}
function bu() {
  return new Fi({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: wl(),
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
    blending: ei,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Su() {
  return new Fi({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: wl(),
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
    blending: ei,
    depthTest: !1,
    depthWrite: !1,
  });
}
function wl() {
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
function qy(n) {
  let e = new WeakMap(),
    t = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Na || l === za,
        u = l === wr || l === Er;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return (
            t === null && (t = new yu(n)),
            (f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f)),
            e.set(a, f),
            f.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const f = a.image;
            if ((c && f && f.height > 0) || (u && f && r(f))) {
              t === null && (t = new yu(n));
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
  return { get: i, dispose: o };
}
function Xy(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let r;
    switch (i) {
      case 'WEBGL_depth_texture':
        r =
          n.getExtension('WEBGL_depth_texture') ||
          n.getExtension('MOZ_WEBGL_depth_texture') ||
          n.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        r =
          n.getExtension('EXT_texture_filter_anisotropic') ||
          n.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          n.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        r =
          n.getExtension('WEBGL_compressed_texture_s3tc') ||
          n.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          n.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        r =
          n.getExtension('WEBGL_compressed_texture_pvrtc') ||
          n.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        r = n.getExtension(i);
    }
    return (e[i] = r), r;
  }
  return {
    has: function (i) {
      return t(i) !== null;
    },
    init: function (i) {
      i.isWebGL2
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
    get: function (i) {
      const r = t(i);
      return (
        r === null &&
          console.warn(
            'THREE.WebGLRenderer: ' + i + ' extension not supported.'
          ),
        r
      );
    },
  };
}
function jy(n, e, t, i) {
  const r = {},
    s = new WeakMap();
  function o(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes) e.remove(h.attributes[g]);
    h.removeEventListener('dispose', o), delete r[h.id];
    const p = s.get(h);
    p && (e.remove(p), s.delete(h)),
      i.releaseStatesOfGeometry(h),
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
      const m = p[g];
      for (let d = 0, _ = m.length; d < _; d++) e.update(m[d], 34962);
    }
  }
  function c(f) {
    const h = [],
      p = f.index,
      g = f.attributes.position;
    let m = 0;
    if (p !== null) {
      const x = p.array;
      m = p.version;
      for (let M = 0, S = x.length; M < S; M += 3) {
        const b = x[M + 0],
          P = x[M + 1],
          B = x[M + 2];
        h.push(b, P, P, B, B, b);
      }
    } else {
      const x = g.array;
      m = g.version;
      for (let M = 0, S = x.length / 3 - 1; M < S; M += 3) {
        const b = M + 0,
          P = M + 1,
          B = M + 2;
        h.push(b, P, P, B, B, b);
      }
    }
    const d = new (Fh(h) ? Hh : Gh)(h, 1);
    d.version = m;
    const _ = s.get(f);
    _ && e.remove(_), s.set(f, d);
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
function $y(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function o(h) {
    s = h;
  }
  let a, l;
  function c(h) {
    (a = h.type), (l = h.bytesPerElement);
  }
  function u(h, p) {
    n.drawElements(s, p, a, h * l), t.update(p, s, 1);
  }
  function f(h, p, g) {
    if (g === 0) return;
    let m, d;
    if (r) (m = n), (d = 'drawElementsInstanced');
    else if (
      ((m = e.get('ANGLE_instanced_arrays')),
      (d = 'drawElementsInstancedANGLE'),
      m === null)
    ) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    m[d](s, p, a, h * l, g), t.update(p, s, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = f);
}
function Yy(n) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, o, a) {
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
    update: i,
  };
}
function Zy(n, e) {
  return n[0] - e[0];
}
function Ky(n, e) {
  return Math.abs(e[1]) - Math.abs(n[1]);
}
function Jy(n, e, t) {
  const i = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new yt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, f, h) {
    const p = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        d = m !== void 0 ? m.length : 0;
      let _ = s.get(u);
      if (_ === void 0 || _.count !== d) {
        let ie = function () {
          N.dispose(), s.delete(u), u.removeEventListener('dispose', ie);
        };
        var g = ie;
        _ !== void 0 && _.texture.dispose();
        const S = u.morphAttributes.position !== void 0,
          b = u.morphAttributes.normal !== void 0,
          P = u.morphAttributes.color !== void 0,
          B = u.morphAttributes.position || [],
          y = u.morphAttributes.normal || [],
          L = u.morphAttributes.color || [];
        let R = 0;
        S === !0 && (R = 1), b === !0 && (R = 2), P === !0 && (R = 3);
        let Y = u.attributes.position.count * R,
          de = 1;
        Y > e.maxTextureSize &&
          ((de = Math.ceil(Y / e.maxTextureSize)), (Y = e.maxTextureSize));
        const G = new Float32Array(Y * de * 4 * d),
          N = new Uh(G, Y, de, d);
        (N.type = bi), (N.needsUpdate = !0);
        const te = R * 4;
        for (let Z = 0; Z < d; Z++) {
          const W = B[Z],
            z = y[Z],
            X = L[Z],
            ue = Y * de * 4 * Z;
          for (let oe = 0; oe < W.count; oe++) {
            const le = oe * te;
            S === !0 &&
              (o.fromBufferAttribute(W, oe),
              (G[ue + le + 0] = o.x),
              (G[ue + le + 1] = o.y),
              (G[ue + le + 2] = o.z),
              (G[ue + le + 3] = 0)),
              b === !0 &&
                (o.fromBufferAttribute(z, oe),
                (G[ue + le + 4] = o.x),
                (G[ue + le + 5] = o.y),
                (G[ue + le + 6] = o.z),
                (G[ue + le + 7] = 0)),
              P === !0 &&
                (o.fromBufferAttribute(X, oe),
                (G[ue + le + 8] = o.x),
                (G[ue + le + 9] = o.y),
                (G[ue + le + 10] = o.z),
                (G[ue + le + 11] = X.itemSize === 4 ? o.w : 1));
          }
        }
        (_ = { count: d, texture: N, size: new Fe(Y, de) }),
          s.set(u, _),
          u.addEventListener('dispose', ie);
      }
      let x = 0;
      for (let S = 0; S < p.length; S++) x += p[S];
      const M = u.morphTargetsRelative ? 1 : 1 - x;
      h.getUniforms().setValue(n, 'morphTargetBaseInfluence', M),
        h.getUniforms().setValue(n, 'morphTargetInfluences', p),
        h.getUniforms().setValue(n, 'morphTargetsTexture', _.texture, t),
        h.getUniforms().setValue(n, 'morphTargetsTextureSize', _.size);
    } else {
      const m = p === void 0 ? 0 : p.length;
      let d = i[u.id];
      if (d === void 0 || d.length !== m) {
        d = [];
        for (let b = 0; b < m; b++) d[b] = [b, 0];
        i[u.id] = d;
      }
      for (let b = 0; b < m; b++) {
        const P = d[b];
        (P[0] = b), (P[1] = p[b]);
      }
      d.sort(Ky);
      for (let b = 0; b < 8; b++)
        b < m && d[b][1]
          ? ((a[b][0] = d[b][0]), (a[b][1] = d[b][1]))
          : ((a[b][0] = Number.MAX_SAFE_INTEGER), (a[b][1] = 0));
      a.sort(Zy);
      const _ = u.morphAttributes.position,
        x = u.morphAttributes.normal;
      let M = 0;
      for (let b = 0; b < 8; b++) {
        const P = a[b],
          B = P[0],
          y = P[1];
        B !== Number.MAX_SAFE_INTEGER && y
          ? (_ &&
              u.getAttribute('morphTarget' + b) !== _[B] &&
              u.setAttribute('morphTarget' + b, _[B]),
            x &&
              u.getAttribute('morphNormal' + b) !== x[B] &&
              u.setAttribute('morphNormal' + b, x[B]),
            (r[b] = y),
            (M += y))
          : (_ &&
              u.hasAttribute('morphTarget' + b) === !0 &&
              u.deleteAttribute('morphTarget' + b),
            x &&
              u.hasAttribute('morphNormal' + b) === !0 &&
              u.deleteAttribute('morphNormal' + b),
            (r[b] = 0));
      }
      const S = u.morphTargetsRelative ? 1 : 1 - M;
      h.getUniforms().setValue(n, 'morphTargetBaseInfluence', S),
        h.getUniforms().setValue(n, 'morphTargetInfluences', r);
    }
  }
  return { update: l };
}
function Qy(n, e, t, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
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
const $h = new $t(),
  Yh = new Uh(),
  Zh = new U0(),
  Kh = new qh(),
  wu = [],
  Eu = [],
  Tu = new Float32Array(16),
  Au = new Float32Array(9),
  Cu = new Float32Array(4);
function Ir(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = e * t;
  let s = wu[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (wu[r] = s)), e !== 0)) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), n[o].toArray(s, a);
  }
  return s;
}
function ht(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return !1;
  return !0;
}
function dt(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function xo(n, e) {
  let t = Eu[e];
  t === void 0 && ((t = new Int32Array(e)), (Eu[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function eM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), (t[0] = e));
}
function tM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    n.uniform2fv(this.addr, e), dt(t, e);
  }
}
function nM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (n.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (ht(t, e)) return;
    n.uniform3fv(this.addr, e), dt(t, e);
  }
}
function iM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ht(t, e)) return;
    n.uniform4fv(this.addr, e), dt(t, e);
  }
}
function rM(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (ht(t, e)) return;
    n.uniformMatrix2fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ht(t, i)) return;
    Cu.set(i), n.uniformMatrix2fv(this.addr, !1, Cu), dt(t, i);
  }
}
function sM(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (ht(t, e)) return;
    n.uniformMatrix3fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ht(t, i)) return;
    Au.set(i), n.uniformMatrix3fv(this.addr, !1, Au), dt(t, i);
  }
}
function oM(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (ht(t, e)) return;
    n.uniformMatrix4fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ht(t, i)) return;
    Tu.set(i), n.uniformMatrix4fv(this.addr, !1, Tu), dt(t, i);
  }
}
function aM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), (t[0] = e));
}
function lM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    n.uniform2iv(this.addr, e), dt(t, e);
  }
}
function cM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ht(t, e)) return;
    n.uniform3iv(this.addr, e), dt(t, e);
  }
}
function uM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ht(t, e)) return;
    n.uniform4iv(this.addr, e), dt(t, e);
  }
}
function fM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), (t[0] = e));
}
function hM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    n.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function dM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ht(t, e)) return;
    n.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function pM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ht(t, e)) return;
    n.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function mM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2D(e || $h, r);
}
function gM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture3D(e || Zh, r);
}
function _M(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTextureCube(e || Kh, r);
}
function vM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2DArray(e || Yh, r);
}
function xM(n) {
  switch (n) {
    case 5126:
      return eM;
    case 35664:
      return tM;
    case 35665:
      return nM;
    case 35666:
      return iM;
    case 35674:
      return rM;
    case 35675:
      return sM;
    case 35676:
      return oM;
    case 5124:
    case 35670:
      return aM;
    case 35667:
    case 35671:
      return lM;
    case 35668:
    case 35672:
      return cM;
    case 35669:
    case 35673:
      return uM;
    case 5125:
      return fM;
    case 36294:
      return hM;
    case 36295:
      return dM;
    case 36296:
      return pM;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mM;
    case 35679:
    case 36299:
    case 36307:
      return gM;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _M;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vM;
  }
}
function yM(n, e) {
  n.uniform1fv(this.addr, e);
}
function MM(n, e) {
  const t = Ir(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function bM(n, e) {
  const t = Ir(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function SM(n, e) {
  const t = Ir(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function wM(n, e) {
  const t = Ir(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function EM(n, e) {
  const t = Ir(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function TM(n, e) {
  const t = Ir(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function AM(n, e) {
  n.uniform1iv(this.addr, e);
}
function CM(n, e) {
  n.uniform2iv(this.addr, e);
}
function LM(n, e) {
  n.uniform3iv(this.addr, e);
}
function PM(n, e) {
  n.uniform4iv(this.addr, e);
}
function RM(n, e) {
  n.uniform1uiv(this.addr, e);
}
function DM(n, e) {
  n.uniform2uiv(this.addr, e);
}
function IM(n, e) {
  n.uniform3uiv(this.addr, e);
}
function FM(n, e) {
  n.uniform4uiv(this.addr, e);
}
function OM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = xo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || $h, s[o]);
}
function NM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = xo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || Zh, s[o]);
}
function zM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = xo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Kh, s[o]);
}
function UM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = xo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Yh, s[o]);
}
function BM(n) {
  switch (n) {
    case 5126:
      return yM;
    case 35664:
      return MM;
    case 35665:
      return bM;
    case 35666:
      return SM;
    case 35674:
      return wM;
    case 35675:
      return EM;
    case 35676:
      return TM;
    case 5124:
    case 35670:
      return AM;
    case 35667:
    case 35671:
      return CM;
    case 35668:
    case 35672:
      return LM;
    case 35669:
    case 35673:
      return PM;
    case 5125:
      return RM;
    case 36294:
      return DM;
    case 36295:
      return IM;
    case 36296:
      return FM;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return OM;
    case 35679:
    case 36299:
    case 36307:
      return NM;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return zM;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return UM;
  }
}
class kM {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.setValue = xM(t.type));
  }
}
class VM {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = BM(t.type));
  }
}
class GM {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], i);
    }
  }
}
const fa = /(\w+)(\])?(\[|\.)?/g;
function Lu(n, e) {
  n.seq.push(e), (n.map[e.id] = e);
}
function HM(n, e, t) {
  const i = n.name,
    r = i.length;
  for (fa.lastIndex = 0; ; ) {
    const s = fa.exec(i),
      o = fa.lastIndex;
    let a = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === '[' && o + 2 === r))) {
      Lu(t, c === void 0 ? new kM(a, n, e) : new VM(a, n, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && ((f = new GM(a)), Lu(t, f)), (t = f);
    }
  }
}
class Ws {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(t, 35718);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      HM(s, o, this);
    }
  }
  setValue(e, t, i, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    const r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = i[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function Pu(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
let WM = 0;
function qM(n, e) {
  const t = n.split(`
`),
    i = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    i.push(`${a === e ? '>' : ' '} ${a}: ${t[o]}`);
  }
  return i.join(`
`);
}
function XM(n) {
  switch (n) {
    case Ri:
      return ['Linear', '( value )'];
    case it:
      return ['sRGB', '( value )'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported encoding:', n),
        ['Linear', '( value )']
      );
  }
}
function Ru(n, e, t) {
  const i = n.getShaderParameter(e, 35713),
    r = n.getShaderInfoLog(e).trim();
  if (i && r === '') return '';
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
      qM(n.getShaderSource(e), o)
    );
  } else return r;
}
function jM(n, e) {
  const t = XM(e);
  return 'vec4 ' + n + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function $M(n, e) {
  let t;
  switch (e) {
    case u0:
      t = 'Linear';
      break;
    case f0:
      t = 'Reinhard';
      break;
    case h0:
      t = 'OptimizedCineon';
      break;
    case d0:
      t = 'ACESFilmic';
      break;
    case p0:
      t = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
        (t = 'Linear');
  }
  return (
    'vec3 ' + n + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }'
  );
}
function YM(n) {
  return [
    n.extensionDerivatives ||
    !!n.envMapCubeUVHeight ||
    n.bumpMap ||
    n.tangentSpaceNormalMap ||
    n.clearcoatNormalMap ||
    n.flatShading ||
    n.shaderID === 'physical'
      ? '#extension GL_OES_standard_derivatives : enable'
      : '',
    (n.extensionFragDepth || n.logarithmicDepthBuffer) &&
    n.rendererExtensionFragDepth
      ? '#extension GL_EXT_frag_depth : enable'
      : '',
    n.extensionDrawBuffers && n.rendererExtensionDrawBuffers
      ? '#extension GL_EXT_draw_buffers : require'
      : '',
    (n.extensionShaderTextureLOD || n.envMap || n.transmission) &&
    n.rendererExtensionShaderTextureLod
      ? '#extension GL_EXT_shader_texture_lod : enable'
      : '',
  ].filter(Xr).join(`
`);
}
function ZM(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push('#define ' + t + ' ' + i);
  }
  return e.join(`
`);
}
function KM(n, e) {
  const t = {},
    i = n.getProgramParameter(e, 35721);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2),
      s.type === 35675 && (a = 3),
      s.type === 35676 && (a = 4),
      (t[o] = {
        type: s.type,
        location: n.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function Xr(n) {
  return n !== '';
}
function Du(n, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n
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
function Iu(n, e) {
  return n
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const JM = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ha(n) {
  return n.replace(JM, QM);
}
function QM(n, e) {
  const t = Ue[e];
  if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
  return Ha(t);
}
const eb =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Fu(n) {
  return n.replace(eb, tb);
}
function tb(n, e, t, i) {
  let r = '';
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += i
      .replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ou(n) {
  let e =
    'precision ' +
    n.precision +
    ` float;
precision ` +
    n.precision +
    ' int;';
  return (
    n.precision === 'highp'
      ? (e += `
#define HIGH_PRECISION`)
      : n.precision === 'mediump'
      ? (e += `
#define MEDIUM_PRECISION`)
      : n.precision === 'lowp' &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function nb(n) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    n.shadowMapType === Ch
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : n.shadowMapType === G_
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : n.shadowMapType === qr && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function ib(n) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (n.envMap)
    switch (n.envMapMode) {
      case wr:
      case Er:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case go:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function rb(n) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (n.envMap)
    switch (n.envMapMode) {
      case Er:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function sb(n) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (n.envMap)
    switch (n.combine) {
      case Rh:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case l0:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case c0:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function ob(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    i = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: i,
    maxMip: t,
  };
}
function ab(n, e, t, i) {
  const r = n.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = nb(t),
    c = ib(t),
    u = rb(t),
    f = sb(t),
    h = ob(t),
    p = t.isWebGL2 ? '' : YM(t),
    g = ZM(s),
    m = r.createProgram();
  let d,
    _,
    x = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((d = [g].filter(Xr).join(`
`)),
      d.length > 0 &&
        (d += `
`),
      (_ = [p, g].filter(Xr).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((d = [
        Ou(t),
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
      ].filter(Xr).join(`
`)),
      (_ = [
        p,
        Ou(t),
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
        t.toneMapping !== Dn ? '#define TONE_MAPPING' : '',
        t.toneMapping !== Dn ? Ue.tonemapping_pars_fragment : '',
        t.toneMapping !== Dn ? $M('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        Ue.encodings_pars_fragment,
        jM('linearToOutputTexel', t.outputEncoding),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`,
      ].filter(Xr).join(`
`))),
    (o = Ha(o)),
    (o = Du(o, t)),
    (o = Iu(o, t)),
    (a = Ha(a)),
    (a = Du(a, t)),
    (a = Iu(a, t)),
    (o = Fu(o)),
    (a = Fu(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((x = `#version 300 es
`),
      (d =
        [
          'precision mediump sampler2DArray;',
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        d),
      (_ =
        [
          '#define varying in',
          t.glslVersion === ru
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          t.glslVersion === ru ? '' : '#define gl_FragColor pc_fragColor',
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
  const M = x + d + o,
    S = x + _ + a,
    b = Pu(r, 35633, M),
    P = Pu(r, 35632, S);
  if (
    (r.attachShader(m, b),
    r.attachShader(m, P),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(m, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(m, 0, 'position'),
    r.linkProgram(m),
    n.debug.checkShaderErrors)
  ) {
    const L = r.getProgramInfoLog(m).trim(),
      R = r.getShaderInfoLog(b).trim(),
      Y = r.getShaderInfoLog(P).trim();
    let de = !0,
      G = !0;
    if (r.getProgramParameter(m, 35714) === !1) {
      de = !1;
      const N = Ru(r, b, 'vertex'),
        te = Ru(r, P, 'fragment');
      console.error(
        'THREE.WebGLProgram: Shader Error ' +
          r.getError() +
          ' - VALIDATE_STATUS ' +
          r.getProgramParameter(m, 35715) +
          `

Program Info Log: ` +
          L +
          `
` +
          N +
          `
` +
          te
      );
    } else
      L !== ''
        ? console.warn('THREE.WebGLProgram: Program Info Log:', L)
        : (R === '' || Y === '') && (G = !1);
    G &&
      (this.diagnostics = {
        runnable: de,
        programLog: L,
        vertexShader: { log: R, prefix: d },
        fragmentShader: { log: Y, prefix: _ },
      });
  }
  r.deleteShader(b), r.deleteShader(P);
  let B;
  this.getUniforms = function () {
    return B === void 0 && (B = new Ws(r, m)), B;
  };
  let y;
  return (
    (this.getAttributes = function () {
      return y === void 0 && (y = KM(r, m)), y;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = WM++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = b),
    (this.fragmentShader = P),
    this
  );
}
let lb = 0;
class cb {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(i),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
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
    let i = t.get(e);
    return i === void 0 && ((i = new Set()), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && ((i = new ub(e)), t.set(e, i)), i;
  }
}
class ub {
  constructor(e) {
    (this.id = lb++), (this.code = e), (this.usedTimes = 0);
  }
}
function fb(n, e, t, i, r, s, o) {
  const a = new kh(),
    l = new cb(),
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
  function m(y, L, R, Y, de) {
    const G = Y.fog,
      N = de.geometry,
      te = y.isMeshStandardMaterial ? Y.environment : null,
      ie = (y.isMeshStandardMaterial ? t : e).get(y.envMap || te),
      Z = !!ie && ie.mapping === go ? ie.image.height : null,
      W = g[y.type];
    y.precision !== null &&
      ((p = r.getMaxPrecision(y.precision)),
      p !== y.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          y.precision,
          'not supported, using',
          p,
          'instead.'
        ));
    const z =
        N.morphAttributes.position ||
        N.morphAttributes.normal ||
        N.morphAttributes.color,
      X = z !== void 0 ? z.length : 0;
    let ue = 0;
    N.morphAttributes.position !== void 0 && (ue = 1),
      N.morphAttributes.normal !== void 0 && (ue = 2),
      N.morphAttributes.color !== void 0 && (ue = 3);
    let oe, le, we, V;
    if (W) {
      const Ee = pn[W];
      (oe = Ee.vertexShader), (le = Ee.fragmentShader);
    } else
      (oe = y.vertexShader),
        (le = y.fragmentShader),
        l.update(y),
        (we = l.getVertexShaderID(y)),
        (V = l.getFragmentShaderID(y));
    const I = n.getRenderTarget(),
      ae = y.alphaTest > 0,
      ce = y.clearcoat > 0,
      ve = y.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: W,
      shaderName: y.type,
      vertexShader: oe,
      fragmentShader: le,
      defines: y.defines,
      customVertexShaderID: we,
      customFragmentShaderID: V,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: p,
      instancing: de.isInstancedMesh === !0,
      instancingColor: de.isInstancedMesh === !0 && de.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding:
        I === null
          ? n.outputEncoding
          : I.isXRRenderTarget === !0
          ? I.texture.encoding
          : Ri,
      map: !!y.map,
      matcap: !!y.matcap,
      envMap: !!ie,
      envMapMode: ie && ie.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!y.lightMap,
      aoMap: !!y.aoMap,
      emissiveMap: !!y.emissiveMap,
      bumpMap: !!y.bumpMap,
      normalMap: !!y.normalMap,
      objectSpaceNormalMap: y.normalMapType === F0,
      tangentSpaceNormalMap: y.normalMapType === I0,
      decodeVideoTexture:
        !!y.map && y.map.isVideoTexture === !0 && y.map.encoding === it,
      clearcoat: ce,
      clearcoatMap: ce && !!y.clearcoatMap,
      clearcoatRoughnessMap: ce && !!y.clearcoatRoughnessMap,
      clearcoatNormalMap: ce && !!y.clearcoatNormalMap,
      iridescence: ve,
      iridescenceMap: ve && !!y.iridescenceMap,
      iridescenceThicknessMap: ve && !!y.iridescenceThicknessMap,
      displacementMap: !!y.displacementMap,
      roughnessMap: !!y.roughnessMap,
      metalnessMap: !!y.metalnessMap,
      specularMap: !!y.specularMap,
      specularIntensityMap: !!y.specularIntensityMap,
      specularColorMap: !!y.specularColorMap,
      opaque: y.transparent === !1 && y.blending === pr,
      alphaMap: !!y.alphaMap,
      alphaTest: ae,
      gradientMap: !!y.gradientMap,
      sheen: y.sheen > 0,
      sheenColorMap: !!y.sheenColorMap,
      sheenRoughnessMap: !!y.sheenRoughnessMap,
      transmission: y.transmission > 0,
      transmissionMap: !!y.transmissionMap,
      thicknessMap: !!y.thicknessMap,
      combine: y.combine,
      vertexTangents: !!y.normalMap && !!N.attributes.tangent,
      vertexColors: y.vertexColors,
      vertexAlphas:
        y.vertexColors === !0 &&
        !!N.attributes.color &&
        N.attributes.color.itemSize === 4,
      vertexUvs:
        !!y.map ||
        !!y.bumpMap ||
        !!y.normalMap ||
        !!y.specularMap ||
        !!y.alphaMap ||
        !!y.emissiveMap ||
        !!y.roughnessMap ||
        !!y.metalnessMap ||
        !!y.clearcoatMap ||
        !!y.clearcoatRoughnessMap ||
        !!y.clearcoatNormalMap ||
        !!y.iridescenceMap ||
        !!y.iridescenceThicknessMap ||
        !!y.displacementMap ||
        !!y.transmissionMap ||
        !!y.thicknessMap ||
        !!y.specularIntensityMap ||
        !!y.specularColorMap ||
        !!y.sheenColorMap ||
        !!y.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!y.map ||
          !!y.bumpMap ||
          !!y.normalMap ||
          !!y.specularMap ||
          !!y.alphaMap ||
          !!y.emissiveMap ||
          !!y.roughnessMap ||
          !!y.metalnessMap ||
          !!y.clearcoatNormalMap ||
          !!y.iridescenceMap ||
          !!y.iridescenceThicknessMap ||
          y.transmission > 0 ||
          !!y.transmissionMap ||
          !!y.thicknessMap ||
          !!y.specularIntensityMap ||
          !!y.specularColorMap ||
          y.sheen > 0 ||
          !!y.sheenColorMap ||
          !!y.sheenRoughnessMap
        ) && !!y.displacementMap,
      fog: !!G,
      useFog: y.fog === !0,
      fogExp2: G && G.isFogExp2,
      flatShading: !!y.flatShading,
      sizeAttenuation: y.sizeAttenuation,
      logarithmicDepthBuffer: f,
      skinning: de.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: X,
      morphTextureStride: ue,
      numDirLights: L.directional.length,
      numPointLights: L.point.length,
      numSpotLights: L.spot.length,
      numSpotLightMaps: L.spotLightMap.length,
      numRectAreaLights: L.rectArea.length,
      numHemiLights: L.hemi.length,
      numDirLightShadows: L.directionalShadowMap.length,
      numPointLightShadows: L.pointShadowMap.length,
      numSpotLightShadows: L.spotShadowMap.length,
      numSpotLightShadowsWithMaps: L.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: n.shadowMap.enabled && R.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: y.toneMapped ? n.toneMapping : Dn,
      physicallyCorrectLights: n.physicallyCorrectLights,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === $n,
      flipSided: y.side === jt,
      useDepthPacking: !!y.depthPacking,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionDerivatives: y.extensions && y.extensions.derivatives,
      extensionFragDepth: y.extensions && y.extensions.fragDepth,
      extensionDrawBuffers: y.extensions && y.extensions.drawBuffers,
      extensionShaderTextureLOD: y.extensions && y.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || i.has('EXT_frag_depth'),
      rendererExtensionDrawBuffers: u || i.has('WEBGL_draw_buffers'),
      rendererExtensionShaderTextureLod: u || i.has('EXT_shader_texture_lod'),
      customProgramCacheKey: y.customProgramCacheKey(),
    };
  }
  function d(y) {
    const L = [];
    if (
      (y.shaderID
        ? L.push(y.shaderID)
        : (L.push(y.customVertexShaderID), L.push(y.customFragmentShaderID)),
      y.defines !== void 0)
    )
      for (const R in y.defines) L.push(R), L.push(y.defines[R]);
    return (
      y.isRawShaderMaterial === !1 &&
        (_(L, y), x(L, y), L.push(n.outputEncoding)),
      L.push(y.customProgramCacheKey),
      L.join()
    );
  }
  function _(y, L) {
    y.push(L.precision),
      y.push(L.outputEncoding),
      y.push(L.envMapMode),
      y.push(L.envMapCubeUVHeight),
      y.push(L.combine),
      y.push(L.vertexUvs),
      y.push(L.fogExp2),
      y.push(L.sizeAttenuation),
      y.push(L.morphTargetsCount),
      y.push(L.morphAttributeCount),
      y.push(L.numDirLights),
      y.push(L.numPointLights),
      y.push(L.numSpotLights),
      y.push(L.numSpotLightMaps),
      y.push(L.numHemiLights),
      y.push(L.numRectAreaLights),
      y.push(L.numDirLightShadows),
      y.push(L.numPointLightShadows),
      y.push(L.numSpotLightShadows),
      y.push(L.numSpotLightShadowsWithMaps),
      y.push(L.shadowMapType),
      y.push(L.toneMapping),
      y.push(L.numClippingPlanes),
      y.push(L.numClipIntersection),
      y.push(L.depthPacking);
  }
  function x(y, L) {
    a.disableAll(),
      L.isWebGL2 && a.enable(0),
      L.supportsVertexTextures && a.enable(1),
      L.instancing && a.enable(2),
      L.instancingColor && a.enable(3),
      L.map && a.enable(4),
      L.matcap && a.enable(5),
      L.envMap && a.enable(6),
      L.lightMap && a.enable(7),
      L.aoMap && a.enable(8),
      L.emissiveMap && a.enable(9),
      L.bumpMap && a.enable(10),
      L.normalMap && a.enable(11),
      L.objectSpaceNormalMap && a.enable(12),
      L.tangentSpaceNormalMap && a.enable(13),
      L.clearcoat && a.enable(14),
      L.clearcoatMap && a.enable(15),
      L.clearcoatRoughnessMap && a.enable(16),
      L.clearcoatNormalMap && a.enable(17),
      L.iridescence && a.enable(18),
      L.iridescenceMap && a.enable(19),
      L.iridescenceThicknessMap && a.enable(20),
      L.displacementMap && a.enable(21),
      L.specularMap && a.enable(22),
      L.roughnessMap && a.enable(23),
      L.metalnessMap && a.enable(24),
      L.gradientMap && a.enable(25),
      L.alphaMap && a.enable(26),
      L.alphaTest && a.enable(27),
      L.vertexColors && a.enable(28),
      L.vertexAlphas && a.enable(29),
      L.vertexUvs && a.enable(30),
      L.vertexTangents && a.enable(31),
      L.uvsVertexOnly && a.enable(32),
      y.push(a.mask),
      a.disableAll(),
      L.fog && a.enable(0),
      L.useFog && a.enable(1),
      L.flatShading && a.enable(2),
      L.logarithmicDepthBuffer && a.enable(3),
      L.skinning && a.enable(4),
      L.morphTargets && a.enable(5),
      L.morphNormals && a.enable(6),
      L.morphColors && a.enable(7),
      L.premultipliedAlpha && a.enable(8),
      L.shadowMapEnabled && a.enable(9),
      L.physicallyCorrectLights && a.enable(10),
      L.doubleSided && a.enable(11),
      L.flipSided && a.enable(12),
      L.useDepthPacking && a.enable(13),
      L.dithering && a.enable(14),
      L.specularIntensityMap && a.enable(15),
      L.specularColorMap && a.enable(16),
      L.transmission && a.enable(17),
      L.transmissionMap && a.enable(18),
      L.thicknessMap && a.enable(19),
      L.sheen && a.enable(20),
      L.sheenColorMap && a.enable(21),
      L.sheenRoughnessMap && a.enable(22),
      L.decodeVideoTexture && a.enable(23),
      L.opaque && a.enable(24),
      y.push(a.mask);
  }
  function M(y) {
    const L = g[y.type];
    let R;
    if (L) {
      const Y = pn[L];
      R = Z0.clone(Y.uniforms);
    } else R = y.uniforms;
    return R;
  }
  function S(y, L) {
    let R;
    for (let Y = 0, de = c.length; Y < de; Y++) {
      const G = c[Y];
      if (G.cacheKey === L) {
        (R = G), ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && ((R = new ab(n, L, y, s)), c.push(R)), R;
  }
  function b(y) {
    if (--y.usedTimes === 0) {
      const L = c.indexOf(y);
      (c[L] = c[c.length - 1]), c.pop(), y.destroy();
    }
  }
  function P(y) {
    l.remove(y);
  }
  function B() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: d,
    getUniforms: M,
    acquireProgram: S,
    releaseProgram: b,
    releaseShaderCache: P,
    programs: c,
    dispose: B,
  };
}
function hb() {
  let n = new WeakMap();
  function e(s) {
    let o = n.get(s);
    return o === void 0 && ((o = {}), n.set(s, o)), o;
  }
  function t(s) {
    n.delete(s);
  }
  function i(s, o, a) {
    n.get(s)[o] = a;
  }
  function r() {
    n = new WeakMap();
  }
  return { get: e, remove: t, update: i, dispose: r };
}
function db(n, e) {
  return n.groupOrder !== e.groupOrder
    ? n.groupOrder - e.groupOrder
    : n.renderOrder !== e.renderOrder
    ? n.renderOrder - e.renderOrder
    : n.material.id !== e.material.id
    ? n.material.id - e.material.id
    : n.z !== e.z
    ? n.z - e.z
    : n.id - e.id;
}
function Nu(n, e) {
  return n.groupOrder !== e.groupOrder
    ? n.groupOrder - e.groupOrder
    : n.renderOrder !== e.renderOrder
    ? n.renderOrder - e.renderOrder
    : n.z !== e.z
    ? e.z - n.z
    : n.id - e.id;
}
function zu() {
  const n = [];
  let e = 0;
  const t = [],
    i = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (i.length = 0), (r.length = 0);
  }
  function o(f, h, p, g, m, d) {
    let _ = n[e];
    return (
      _ === void 0
        ? ((_ = {
            id: f.id,
            object: f,
            geometry: h,
            material: p,
            groupOrder: g,
            renderOrder: f.renderOrder,
            z: m,
            group: d,
          }),
          (n[e] = _))
        : ((_.id = f.id),
          (_.object = f),
          (_.geometry = h),
          (_.material = p),
          (_.groupOrder = g),
          (_.renderOrder = f.renderOrder),
          (_.z = m),
          (_.group = d)),
      e++,
      _
    );
  }
  function a(f, h, p, g, m, d) {
    const _ = o(f, h, p, g, m, d);
    p.transmission > 0
      ? i.push(_)
      : p.transparent === !0
      ? r.push(_)
      : t.push(_);
  }
  function l(f, h, p, g, m, d) {
    const _ = o(f, h, p, g, m, d);
    p.transmission > 0
      ? i.unshift(_)
      : p.transparent === !0
      ? r.unshift(_)
      : t.unshift(_);
  }
  function c(f, h) {
    t.length > 1 && t.sort(f || db),
      i.length > 1 && i.sort(h || Nu),
      r.length > 1 && r.sort(h || Nu);
  }
  function u() {
    for (let f = e, h = n.length; f < h; f++) {
      const p = n[f];
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
    transmissive: i,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function pb() {
  let n = new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let o;
    return (
      s === void 0
        ? ((o = new zu()), n.set(i, [o]))
        : r >= s.length
        ? ((o = new zu()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function t() {
    n = new WeakMap();
  }
  return { get: e, dispose: t };
}
function mb() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new U(), color: new Qe() };
          break;
        case 'SpotLight':
          t = {
            position: new U(),
            direction: new U(),
            color: new Qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          t = { position: new U(), color: new Qe(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new U(), skyColor: new Qe(), groundColor: new Qe() };
          break;
        case 'RectAreaLight':
          t = {
            color: new Qe(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U(),
          };
          break;
      }
      return (n[e.id] = t), t;
    },
  };
}
function gb() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
          };
          break;
        case 'SpotLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
          };
          break;
        case 'PointLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (n[e.id] = t), t;
    },
  };
}
let _b = 0;
function vb(n, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (n.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (n.map ? 1 : 0)
  );
}
function xb(n, e) {
  const t = new mb(),
    i = gb(),
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
    o = new ft(),
    a = new ft();
  function l(u, f) {
    let h = 0,
      p = 0,
      g = 0;
    for (let Y = 0; Y < 9; Y++) r.probe[Y].set(0, 0, 0);
    let m = 0,
      d = 0,
      _ = 0,
      x = 0,
      M = 0,
      S = 0,
      b = 0,
      P = 0,
      B = 0,
      y = 0;
    u.sort(vb);
    const L = f !== !0 ? Math.PI : 1;
    for (let Y = 0, de = u.length; Y < de; Y++) {
      const G = u[Y],
        N = G.color,
        te = G.intensity,
        ie = G.distance,
        Z = G.shadow && G.shadow.map ? G.shadow.map.texture : null;
      if (G.isAmbientLight)
        (h += N.r * te * L), (p += N.g * te * L), (g += N.b * te * L);
      else if (G.isLightProbe)
        for (let W = 0; W < 9; W++)
          r.probe[W].addScaledVector(G.sh.coefficients[W], te);
      else if (G.isDirectionalLight) {
        const W = t.get(G);
        if (
          (W.color.copy(G.color).multiplyScalar(G.intensity * L), G.castShadow)
        ) {
          const z = G.shadow,
            X = i.get(G);
          (X.shadowBias = z.bias),
            (X.shadowNormalBias = z.normalBias),
            (X.shadowRadius = z.radius),
            (X.shadowMapSize = z.mapSize),
            (r.directionalShadow[m] = X),
            (r.directionalShadowMap[m] = Z),
            (r.directionalShadowMatrix[m] = G.shadow.matrix),
            S++;
        }
        (r.directional[m] = W), m++;
      } else if (G.isSpotLight) {
        const W = t.get(G);
        W.position.setFromMatrixPosition(G.matrixWorld),
          W.color.copy(N).multiplyScalar(te * L),
          (W.distance = ie),
          (W.coneCos = Math.cos(G.angle)),
          (W.penumbraCos = Math.cos(G.angle * (1 - G.penumbra))),
          (W.decay = G.decay),
          (r.spot[_] = W);
        const z = G.shadow;
        if (
          (G.map &&
            ((r.spotLightMap[B] = G.map),
            B++,
            z.updateMatrices(G),
            G.castShadow && y++),
          (r.spotLightMatrix[_] = z.matrix),
          G.castShadow)
        ) {
          const X = i.get(G);
          (X.shadowBias = z.bias),
            (X.shadowNormalBias = z.normalBias),
            (X.shadowRadius = z.radius),
            (X.shadowMapSize = z.mapSize),
            (r.spotShadow[_] = X),
            (r.spotShadowMap[_] = Z),
            P++;
        }
        _++;
      } else if (G.isRectAreaLight) {
        const W = t.get(G);
        W.color.copy(N).multiplyScalar(te),
          W.halfWidth.set(G.width * 0.5, 0, 0),
          W.halfHeight.set(0, G.height * 0.5, 0),
          (r.rectArea[x] = W),
          x++;
      } else if (G.isPointLight) {
        const W = t.get(G);
        if (
          (W.color.copy(G.color).multiplyScalar(G.intensity * L),
          (W.distance = G.distance),
          (W.decay = G.decay),
          G.castShadow)
        ) {
          const z = G.shadow,
            X = i.get(G);
          (X.shadowBias = z.bias),
            (X.shadowNormalBias = z.normalBias),
            (X.shadowRadius = z.radius),
            (X.shadowMapSize = z.mapSize),
            (X.shadowCameraNear = z.camera.near),
            (X.shadowCameraFar = z.camera.far),
            (r.pointShadow[d] = X),
            (r.pointShadowMap[d] = Z),
            (r.pointShadowMatrix[d] = G.shadow.matrix),
            b++;
        }
        (r.point[d] = W), d++;
      } else if (G.isHemisphereLight) {
        const W = t.get(G);
        W.skyColor.copy(G.color).multiplyScalar(te * L),
          W.groundColor.copy(G.groundColor).multiplyScalar(te * L),
          (r.hemi[M] = W),
          M++;
      }
    }
    x > 0 &&
      (e.isWebGL2 || n.has('OES_texture_float_linear') === !0
        ? ((r.rectAreaLTC1 = xe.LTC_FLOAT_1), (r.rectAreaLTC2 = xe.LTC_FLOAT_2))
        : n.has('OES_texture_half_float_linear') === !0
        ? ((r.rectAreaLTC1 = xe.LTC_HALF_1), (r.rectAreaLTC2 = xe.LTC_HALF_2))
        : console.error(
            'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.'
          )),
      (r.ambient[0] = h),
      (r.ambient[1] = p),
      (r.ambient[2] = g);
    const R = r.hash;
    (R.directionalLength !== m ||
      R.pointLength !== d ||
      R.spotLength !== _ ||
      R.rectAreaLength !== x ||
      R.hemiLength !== M ||
      R.numDirectionalShadows !== S ||
      R.numPointShadows !== b ||
      R.numSpotShadows !== P ||
      R.numSpotMaps !== B) &&
      ((r.directional.length = m),
      (r.spot.length = _),
      (r.rectArea.length = x),
      (r.point.length = d),
      (r.hemi.length = M),
      (r.directionalShadow.length = S),
      (r.directionalShadowMap.length = S),
      (r.pointShadow.length = b),
      (r.pointShadowMap.length = b),
      (r.spotShadow.length = P),
      (r.spotShadowMap.length = P),
      (r.directionalShadowMatrix.length = S),
      (r.pointShadowMatrix.length = b),
      (r.spotLightMatrix.length = P + B - y),
      (r.spotLightMap.length = B),
      (r.numSpotLightShadowsWithMaps = y),
      (R.directionalLength = m),
      (R.pointLength = d),
      (R.spotLength = _),
      (R.rectAreaLength = x),
      (R.hemiLength = M),
      (R.numDirectionalShadows = S),
      (R.numPointShadows = b),
      (R.numSpotShadows = P),
      (R.numSpotMaps = B),
      (r.version = _b++));
  }
  function c(u, f) {
    let h = 0,
      p = 0,
      g = 0,
      m = 0,
      d = 0;
    const _ = f.matrixWorldInverse;
    for (let x = 0, M = u.length; x < M; x++) {
      const S = u[x];
      if (S.isDirectionalLight) {
        const b = r.directional[h];
        b.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          b.direction.sub(s),
          b.direction.transformDirection(_),
          h++;
      } else if (S.isSpotLight) {
        const b = r.spot[g];
        b.position.setFromMatrixPosition(S.matrixWorld),
          b.position.applyMatrix4(_),
          b.direction.setFromMatrixPosition(S.matrixWorld),
          s.setFromMatrixPosition(S.target.matrixWorld),
          b.direction.sub(s),
          b.direction.transformDirection(_),
          g++;
      } else if (S.isRectAreaLight) {
        const b = r.rectArea[m];
        b.position.setFromMatrixPosition(S.matrixWorld),
          b.position.applyMatrix4(_),
          a.identity(),
          o.copy(S.matrixWorld),
          o.premultiply(_),
          a.extractRotation(o),
          b.halfWidth.set(S.width * 0.5, 0, 0),
          b.halfHeight.set(0, S.height * 0.5, 0),
          b.halfWidth.applyMatrix4(a),
          b.halfHeight.applyMatrix4(a),
          m++;
      } else if (S.isPointLight) {
        const b = r.point[p];
        b.position.setFromMatrixPosition(S.matrixWorld),
          b.position.applyMatrix4(_),
          p++;
      } else if (S.isHemisphereLight) {
        const b = r.hemi[d];
        b.direction.setFromMatrixPosition(S.matrixWorld),
          b.direction.transformDirection(_),
          d++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Uu(n, e) {
  const t = new xb(n, e),
    i = [],
    r = [];
  function s() {
    (i.length = 0), (r.length = 0);
  }
  function o(f) {
    i.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(i, f);
  }
  function c(f) {
    t.setupView(i, f);
  }
  return {
    init: s,
    state: { lightsArray: i, shadowsArray: r, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function yb(n, e) {
  let t = new WeakMap();
  function i(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new Uu(n, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new Uu(n, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: i, dispose: r };
}
class Mb extends Dr {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = R0),
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
class bb extends Dr {
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
const Sb = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  wb = `uniform sampler2D shadow_pass;
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
function Eb(n, e, t) {
  let i = new Xh();
  const r = new Fe(),
    s = new Fe(),
    o = new yt(),
    a = new Mb({ depthPacking: D0 }),
    l = new bb(),
    c = {},
    u = t.maxTextureSize,
    f = { 0: jt, 1: Sr, 2: $n },
    h = new Fi({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Fe() },
        radius: { value: 4 },
      },
      vertexShader: Sb,
      fragmentShader: wb,
    }),
    p = h.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new yn();
  g.setAttribute(
    'position',
    new an(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const m = new Zn(g, h),
    d = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ch),
    (this.render = function (S, b, P) {
      if (
        d.enabled === !1 ||
        (d.autoUpdate === !1 && d.needsUpdate === !1) ||
        S.length === 0
      )
        return;
      const B = n.getRenderTarget(),
        y = n.getActiveCubeFace(),
        L = n.getActiveMipmapLevel(),
        R = n.state;
      R.setBlending(ei),
        R.buffers.color.setClear(1, 1, 1, 1),
        R.buffers.depth.setTest(!0),
        R.setScissorTest(!1);
      for (let Y = 0, de = S.length; Y < de; Y++) {
        const G = S[Y],
          N = G.shadow;
        if (N === void 0) {
          console.warn('THREE.WebGLShadowMap:', G, 'has no shadow.');
          continue;
        }
        if (N.autoUpdate === !1 && N.needsUpdate === !1) continue;
        r.copy(N.mapSize);
        const te = N.getFrameExtents();
        if (
          (r.multiply(te),
          s.copy(N.mapSize),
          (r.x > u || r.y > u) &&
            (r.x > u &&
              ((s.x = Math.floor(u / te.x)),
              (r.x = s.x * te.x),
              (N.mapSize.x = s.x)),
            r.y > u &&
              ((s.y = Math.floor(u / te.y)),
              (r.y = s.y * te.y),
              (N.mapSize.y = s.y))),
          N.map === null)
        ) {
          const Z = this.type !== qr ? { minFilter: It, magFilter: It } : {};
          (N.map = new Di(r.x, r.y, Z)),
            (N.map.texture.name = G.name + '.shadowMap'),
            N.camera.updateProjectionMatrix();
        }
        n.setRenderTarget(N.map), n.clear();
        const ie = N.getViewportCount();
        for (let Z = 0; Z < ie; Z++) {
          const W = N.getViewport(Z);
          o.set(s.x * W.x, s.y * W.y, s.x * W.z, s.y * W.w),
            R.viewport(o),
            N.updateMatrices(G, Z),
            (i = N.getFrustum()),
            M(b, P, N.camera, G, this.type);
        }
        N.isPointLightShadow !== !0 && this.type === qr && _(N, P),
          (N.needsUpdate = !1);
      }
      (d.needsUpdate = !1), n.setRenderTarget(B, y, L);
    });
  function _(S, b) {
    const P = e.update(m);
    h.defines.VSM_SAMPLES !== S.blurSamples &&
      ((h.defines.VSM_SAMPLES = S.blurSamples),
      (p.defines.VSM_SAMPLES = S.blurSamples),
      (h.needsUpdate = !0),
      (p.needsUpdate = !0)),
      S.mapPass === null && (S.mapPass = new Di(r.x, r.y)),
      (h.uniforms.shadow_pass.value = S.map.texture),
      (h.uniforms.resolution.value = S.mapSize),
      (h.uniforms.radius.value = S.radius),
      n.setRenderTarget(S.mapPass),
      n.clear(),
      n.renderBufferDirect(b, null, P, h, m, null),
      (p.uniforms.shadow_pass.value = S.mapPass.texture),
      (p.uniforms.resolution.value = S.mapSize),
      (p.uniforms.radius.value = S.radius),
      n.setRenderTarget(S.map),
      n.clear(),
      n.renderBufferDirect(b, null, P, p, m, null);
  }
  function x(S, b, P, B, y, L) {
    let R = null;
    const Y =
      P.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (
      (Y !== void 0 ? (R = Y) : (R = P.isPointLight === !0 ? l : a),
      (n.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0))
    ) {
      const de = R.uuid,
        G = b.uuid;
      let N = c[de];
      N === void 0 && ((N = {}), (c[de] = N));
      let te = N[G];
      te === void 0 && ((te = R.clone()), (N[G] = te)), (R = te);
    }
    return (
      (R.visible = b.visible),
      (R.wireframe = b.wireframe),
      L === qr
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
      P.isPointLight === !0 &&
        R.isMeshDistanceMaterial === !0 &&
        (R.referencePosition.setFromMatrixPosition(P.matrixWorld),
        (R.nearDistance = B),
        (R.farDistance = y)),
      R
    );
  }
  function M(S, b, P, B, y) {
    if (S.visible === !1) return;
    if (
      S.layers.test(b.layers) &&
      (S.isMesh || S.isLine || S.isPoints) &&
      (S.castShadow || (S.receiveShadow && y === qr)) &&
      (!S.frustumCulled || i.intersectsObject(S))
    ) {
      S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, S.matrixWorld);
      const Y = e.update(S),
        de = S.material;
      if (Array.isArray(de)) {
        const G = Y.groups;
        for (let N = 0, te = G.length; N < te; N++) {
          const ie = G[N],
            Z = de[ie.materialIndex];
          if (Z && Z.visible) {
            const W = x(S, Z, B, P.near, P.far, y);
            n.renderBufferDirect(P, null, Y, W, S, ie);
          }
        }
      } else if (de.visible) {
        const G = x(S, de, B, P.near, P.far, y);
        n.renderBufferDirect(P, null, Y, G, S, null);
      }
    }
    const R = S.children;
    for (let Y = 0, de = R.length; Y < de; Y++) M(R[Y], b, P, B, y);
  }
}
function Tb(n, e, t) {
  const i = t.isWebGL2;
  function r() {
    let D = !1;
    const ee = new yt();
    let ge = null;
    const Ae = new yt(0, 0, 0, 0);
    return {
      setMask: function (Le) {
        ge !== Le && !D && (n.colorMask(Le, Le, Le, Le), (ge = Le));
      },
      setLocked: function (Le) {
        D = Le;
      },
      setClear: function (Le, qe, pt, Mt, si) {
        si === !0 && ((Le *= Mt), (qe *= Mt), (pt *= Mt)),
          ee.set(Le, qe, pt, Mt),
          Ae.equals(ee) === !1 && (n.clearColor(Le, qe, pt, Mt), Ae.copy(ee));
      },
      reset: function () {
        (D = !1), (ge = null), Ae.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let D = !1,
      ee = null,
      ge = null,
      Ae = null;
    return {
      setTest: function (Le) {
        Le ? ae(2929) : ce(2929);
      },
      setMask: function (Le) {
        ee !== Le && !D && (n.depthMask(Le), (ee = Le));
      },
      setFunc: function (Le) {
        if (ge !== Le) {
          switch (Le) {
            case t0:
              n.depthFunc(512);
              break;
            case n0:
              n.depthFunc(519);
              break;
            case i0:
              n.depthFunc(513);
              break;
            case Oa:
              n.depthFunc(515);
              break;
            case r0:
              n.depthFunc(514);
              break;
            case s0:
              n.depthFunc(518);
              break;
            case o0:
              n.depthFunc(516);
              break;
            case a0:
              n.depthFunc(517);
              break;
            default:
              n.depthFunc(515);
          }
          ge = Le;
        }
      },
      setLocked: function (Le) {
        D = Le;
      },
      setClear: function (Le) {
        Ae !== Le && (n.clearDepth(Le), (Ae = Le));
      },
      reset: function () {
        (D = !1), (ee = null), (ge = null), (Ae = null);
      },
    };
  }
  function o() {
    let D = !1,
      ee = null,
      ge = null,
      Ae = null,
      Le = null,
      qe = null,
      pt = null,
      Mt = null,
      si = null;
    return {
      setTest: function (et) {
        D || (et ? ae(2960) : ce(2960));
      },
      setMask: function (et) {
        ee !== et && !D && (n.stencilMask(et), (ee = et));
      },
      setFunc: function (et, Mn, kt) {
        (ge !== et || Ae !== Mn || Le !== kt) &&
          (n.stencilFunc(et, Mn, kt), (ge = et), (Ae = Mn), (Le = kt));
      },
      setOp: function (et, Mn, kt) {
        (qe !== et || pt !== Mn || Mt !== kt) &&
          (n.stencilOp(et, Mn, kt), (qe = et), (pt = Mn), (Mt = kt));
      },
      setLocked: function (et) {
        D = et;
      },
      setClear: function (et) {
        si !== et && (n.clearStencil(et), (si = et));
      },
      reset: function () {
        (D = !1),
          (ee = null),
          (ge = null),
          (Ae = null),
          (Le = null),
          (qe = null),
          (pt = null),
          (Mt = null),
          (si = null);
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
    m = [],
    d = null,
    _ = !1,
    x = null,
    M = null,
    S = null,
    b = null,
    P = null,
    B = null,
    y = null,
    L = !1,
    R = null,
    Y = null,
    de = null,
    G = null,
    N = null;
  const te = n.getParameter(35661);
  let ie = !1,
    Z = 0;
  const W = n.getParameter(7938);
  W.indexOf('WebGL') !== -1
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(W)[1])), (ie = Z >= 1))
    : W.indexOf('OpenGL ES') !== -1 &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(W)[1])), (ie = Z >= 2));
  let z = null,
    X = {};
  const ue = n.getParameter(3088),
    oe = n.getParameter(2978),
    le = new yt().fromArray(ue),
    we = new yt().fromArray(oe);
  function V(D, ee, ge) {
    const Ae = new Uint8Array(4),
      Le = n.createTexture();
    n.bindTexture(D, Le),
      n.texParameteri(D, 10241, 9728),
      n.texParameteri(D, 10240, 9728);
    for (let qe = 0; qe < ge; qe++)
      n.texImage2D(ee + qe, 0, 6408, 1, 1, 0, 6408, 5121, Ae);
    return Le;
  }
  const I = {};
  (I[3553] = V(3553, 3553, 1)),
    (I[34067] = V(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    ae(2929),
    l.setFunc(Oa),
    K(!1),
    he(Lc),
    ae(2884),
    H(ei);
  function ae(D) {
    h[D] !== !0 && (n.enable(D), (h[D] = !0));
  }
  function ce(D) {
    h[D] !== !1 && (n.disable(D), (h[D] = !1));
  }
  function ve(D, ee) {
    return p[D] !== ee
      ? (n.bindFramebuffer(D, ee),
        (p[D] = ee),
        i && (D === 36009 && (p[36160] = ee), D === 36160 && (p[36009] = ee)),
        !0)
      : !1;
  }
  function _e(D, ee) {
    let ge = m,
      Ae = !1;
    if (D)
      if (
        ((ge = g.get(ee)),
        ge === void 0 && ((ge = []), g.set(ee, ge)),
        D.isWebGLMultipleRenderTargets)
      ) {
        const Le = D.texture;
        if (ge.length !== Le.length || ge[0] !== 36064) {
          for (let qe = 0, pt = Le.length; qe < pt; qe++) ge[qe] = 36064 + qe;
          (ge.length = Le.length), (Ae = !0);
        }
      } else ge[0] !== 36064 && ((ge[0] = 36064), (Ae = !0));
    else ge[0] !== 1029 && ((ge[0] = 1029), (Ae = !0));
    Ae &&
      (t.isWebGL2
        ? n.drawBuffers(ge)
        : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(ge));
  }
  function Ee(D) {
    return d !== D ? (n.useProgram(D), (d = D), !0) : !1;
  }
  const E = { [lr]: 32774, [W_]: 32778, [q_]: 32779 };
  if (i) (E[Ic] = 32775), (E[Fc] = 32776);
  else {
    const D = e.get('EXT_blend_minmax');
    D !== null && ((E[Ic] = D.MIN_EXT), (E[Fc] = D.MAX_EXT));
  }
  const A = {
    [X_]: 0,
    [j_]: 1,
    [$_]: 768,
    [Lh]: 770,
    [e0]: 776,
    [J_]: 774,
    [Z_]: 772,
    [Y_]: 769,
    [Ph]: 771,
    [Q_]: 775,
    [K_]: 773,
  };
  function H(D, ee, ge, Ae, Le, qe, pt, Mt) {
    if (D === ei) {
      _ === !0 && (ce(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (ae(3042), (_ = !0)), D !== H_)) {
      if (D !== x || Mt !== L) {
        if (
          ((M !== lr || P !== lr) &&
            (n.blendEquation(32774), (M = lr), (P = lr)),
          Mt)
        )
          switch (D) {
            case pr:
              n.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Pc:
              n.blendFunc(1, 1);
              break;
            case Rc:
              n.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Dc:
              n.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', D);
              break;
          }
        else
          switch (D) {
            case pr:
              n.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Pc:
              n.blendFunc(770, 1);
              break;
            case Rc:
              n.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Dc:
              n.blendFunc(0, 768);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', D);
              break;
          }
        (S = null), (b = null), (B = null), (y = null), (x = D), (L = Mt);
      }
      return;
    }
    (Le = Le || ee),
      (qe = qe || ge),
      (pt = pt || Ae),
      (ee !== M || Le !== P) &&
        (n.blendEquationSeparate(E[ee], E[Le]), (M = ee), (P = Le)),
      (ge !== S || Ae !== b || qe !== B || pt !== y) &&
        (n.blendFuncSeparate(A[ge], A[Ae], A[qe], A[pt]),
        (S = ge),
        (b = Ae),
        (B = qe),
        (y = pt)),
      (x = D),
      (L = null);
  }
  function j(D, ee) {
    D.side === $n ? ce(2884) : ae(2884);
    let ge = D.side === jt;
    ee && (ge = !ge),
      K(ge),
      D.blending === pr && D.transparent === !1
        ? H(ei)
        : H(
            D.blending,
            D.blendEquation,
            D.blendSrc,
            D.blendDst,
            D.blendEquationAlpha,
            D.blendSrcAlpha,
            D.blendDstAlpha,
            D.premultipliedAlpha
          ),
      l.setFunc(D.depthFunc),
      l.setTest(D.depthTest),
      l.setMask(D.depthWrite),
      a.setMask(D.colorWrite);
    const Ae = D.stencilWrite;
    c.setTest(Ae),
      Ae &&
        (c.setMask(D.stencilWriteMask),
        c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
      re(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
      D.alphaToCoverage === !0 ? ae(32926) : ce(32926);
  }
  function K(D) {
    R !== D && (D ? n.frontFace(2304) : n.frontFace(2305), (R = D));
  }
  function he(D) {
    D !== k_
      ? (ae(2884),
        D !== Y &&
          (D === Lc
            ? n.cullFace(1029)
            : D === V_
            ? n.cullFace(1028)
            : n.cullFace(1032)))
      : ce(2884),
      (Y = D);
  }
  function pe(D) {
    D !== de && (ie && n.lineWidth(D), (de = D));
  }
  function re(D, ee, ge) {
    D
      ? (ae(32823),
        (G !== ee || N !== ge) && (n.polygonOffset(ee, ge), (G = ee), (N = ge)))
      : ce(32823);
  }
  function me(D) {
    D ? ae(3089) : ce(3089);
  }
  function se(D) {
    D === void 0 && (D = 33984 + te - 1),
      z !== D && (n.activeTexture(D), (z = D));
  }
  function w(D, ee, ge) {
    ge === void 0 && (z === null ? (ge = 33984 + te - 1) : (ge = z));
    let Ae = X[ge];
    Ae === void 0 && ((Ae = { type: void 0, texture: void 0 }), (X[ge] = Ae)),
      (Ae.type !== D || Ae.texture !== ee) &&
        (z !== ge && (n.activeTexture(ge), (z = ge)),
        n.bindTexture(D, ee || I[D]),
        (Ae.type = D),
        (Ae.texture = ee));
  }
  function v() {
    const D = X[z];
    D !== void 0 &&
      D.type !== void 0 &&
      (n.bindTexture(D.type, null), (D.type = void 0), (D.texture = void 0));
  }
  function F() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function $() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function Q() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function fe() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function ye() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function C() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function O() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function Me() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function Te() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function be() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (D) {
      console.error('THREE.WebGLState:', D);
    }
  }
  function Ce(D) {
    le.equals(D) === !1 && (n.scissor(D.x, D.y, D.z, D.w), le.copy(D));
  }
  function Se(D) {
    we.equals(D) === !1 && (n.viewport(D.x, D.y, D.z, D.w), we.copy(D));
  }
  function De(D, ee) {
    let ge = f.get(ee);
    ge === void 0 && ((ge = new WeakMap()), f.set(ee, ge));
    let Ae = ge.get(D);
    Ae === void 0 && ((Ae = n.getUniformBlockIndex(ee, D.name)), ge.set(D, Ae));
  }
  function ke(D, ee) {
    const Ae = f.get(ee).get(D);
    u.get(D) !== Ae &&
      (n.uniformBlockBinding(ee, Ae, D.__bindingPointIndex), u.set(D, Ae));
  }
  function Ye() {
    n.disable(3042),
      n.disable(2884),
      n.disable(2929),
      n.disable(32823),
      n.disable(3089),
      n.disable(2960),
      n.disable(32926),
      n.blendEquation(32774),
      n.blendFunc(1, 0),
      n.blendFuncSeparate(1, 0, 1, 0),
      n.colorMask(!0, !0, !0, !0),
      n.clearColor(0, 0, 0, 0),
      n.depthMask(!0),
      n.depthFunc(513),
      n.clearDepth(1),
      n.stencilMask(4294967295),
      n.stencilFunc(519, 0, 4294967295),
      n.stencilOp(7680, 7680, 7680),
      n.clearStencil(0),
      n.cullFace(1029),
      n.frontFace(2305),
      n.polygonOffset(0, 0),
      n.activeTexture(33984),
      n.bindFramebuffer(36160, null),
      i === !0 &&
        (n.bindFramebuffer(36009, null), n.bindFramebuffer(36008, null)),
      n.useProgram(null),
      n.lineWidth(1),
      n.scissor(0, 0, n.canvas.width, n.canvas.height),
      n.viewport(0, 0, n.canvas.width, n.canvas.height),
      (h = {}),
      (z = null),
      (X = {}),
      (p = {}),
      (g = new WeakMap()),
      (m = []),
      (d = null),
      (_ = !1),
      (x = null),
      (M = null),
      (S = null),
      (b = null),
      (P = null),
      (B = null),
      (y = null),
      (L = !1),
      (R = null),
      (Y = null),
      (de = null),
      (G = null),
      (N = null),
      le.set(0, 0, n.canvas.width, n.canvas.height),
      we.set(0, 0, n.canvas.width, n.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: ae,
    disable: ce,
    bindFramebuffer: ve,
    drawBuffers: _e,
    useProgram: Ee,
    setBlending: H,
    setMaterial: j,
    setFlipSided: K,
    setCullFace: he,
    setLineWidth: pe,
    setPolygonOffset: re,
    setScissorTest: me,
    activeTexture: se,
    bindTexture: w,
    unbindTexture: v,
    compressedTexImage2D: F,
    compressedTexImage3D: $,
    texImage2D: Te,
    texImage3D: be,
    updateUBOMapping: De,
    uniformBlockBinding: ke,
    texStorage2D: O,
    texStorage3D: Me,
    texSubImage2D: Q,
    texSubImage3D: fe,
    compressedTexSubImage2D: ye,
    compressedTexSubImage3D: C,
    scissor: Ce,
    viewport: Se,
    reset: Ye,
  };
}
function Ab(n, e, t, i, r, s, o) {
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
  let m;
  const d = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function x(w, v) {
    return _ ? new OffscreenCanvas(w, v) : Qs('canvas');
  }
  function M(w, v, F, $) {
    let Q = 1;
    if (
      ((w.width > $ || w.height > $) && (Q = $ / Math.max(w.width, w.height)),
      Q < 1 || v === !0)
    )
      if (
        (typeof HTMLImageElement < 'u' && w instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && w instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && w instanceof ImageBitmap)
      ) {
        const fe = v ? Ga : Math.floor,
          ye = fe(Q * w.width),
          C = fe(Q * w.height);
        m === void 0 && (m = x(ye, C));
        const O = F ? x(ye, C) : m;
        return (
          (O.width = ye),
          (O.height = C),
          O.getContext('2d').drawImage(w, 0, 0, ye, C),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              w.width +
              'x' +
              w.height +
              ') to (' +
              ye +
              'x' +
              C +
              ').'
          ),
          O
        );
      } else
        return (
          'data' in w &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                w.width +
                'x' +
                w.height +
                ').'
            ),
          w
        );
    return w;
  }
  function S(w) {
    return ou(w.width) && ou(w.height);
  }
  function b(w) {
    return a
      ? !1
      : w.wrapS !== tn ||
          w.wrapT !== tn ||
          (w.minFilter !== It && w.minFilter !== Ft);
  }
  function P(w, v) {
    return w.generateMipmaps && v && w.minFilter !== It && w.minFilter !== Ft;
  }
  function B(w) {
    n.generateMipmap(w);
  }
  function y(w, v, F, $, Q = !1) {
    if (a === !1) return v;
    if (w !== null) {
      if (n[w] !== void 0) return n[w];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          w +
          "'"
      );
    }
    let fe = v;
    return (
      v === 6403 &&
        (F === 5126 && (fe = 33326),
        F === 5131 && (fe = 33325),
        F === 5121 && (fe = 33321)),
      v === 33319 &&
        (F === 5126 && (fe = 33328),
        F === 5131 && (fe = 33327),
        F === 5121 && (fe = 33323)),
      v === 6408 &&
        (F === 5126 && (fe = 34836),
        F === 5131 && (fe = 34842),
        F === 5121 && (fe = $ === it && Q === !1 ? 35907 : 32856),
        F === 32819 && (fe = 32854),
        F === 32820 && (fe = 32855)),
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
  function L(w, v, F) {
    return P(w, F) === !0 ||
      (w.isFramebufferTexture && w.minFilter !== It && w.minFilter !== Ft)
      ? Math.log2(Math.max(v.width, v.height)) + 1
      : w.mipmaps !== void 0 && w.mipmaps.length > 0
      ? w.mipmaps.length
      : w.isCompressedTexture && Array.isArray(w.image)
      ? v.mipmaps.length
      : 1;
  }
  function R(w) {
    return w === It || w === Oc || w === Nc ? 9728 : 9729;
  }
  function Y(w) {
    const v = w.target;
    v.removeEventListener('dispose', Y), G(v), v.isVideoTexture && g.delete(v);
  }
  function de(w) {
    const v = w.target;
    v.removeEventListener('dispose', de), te(v);
  }
  function G(w) {
    const v = i.get(w);
    if (v.__webglInit === void 0) return;
    const F = w.source,
      $ = d.get(F);
    if ($) {
      const Q = $[v.__cacheKey];
      Q.usedTimes--,
        Q.usedTimes === 0 && N(w),
        Object.keys($).length === 0 && d.delete(F);
    }
    i.remove(w);
  }
  function N(w) {
    const v = i.get(w);
    n.deleteTexture(v.__webglTexture);
    const F = w.source,
      $ = d.get(F);
    delete $[v.__cacheKey], o.memory.textures--;
  }
  function te(w) {
    const v = w.texture,
      F = i.get(w),
      $ = i.get(v);
    if (
      ($.__webglTexture !== void 0 &&
        (n.deleteTexture($.__webglTexture), o.memory.textures--),
      w.depthTexture && w.depthTexture.dispose(),
      w.isWebGLCubeRenderTarget)
    )
      for (let Q = 0; Q < 6; Q++)
        n.deleteFramebuffer(F.__webglFramebuffer[Q]),
          F.__webglDepthbuffer && n.deleteRenderbuffer(F.__webglDepthbuffer[Q]);
    else {
      if (
        (n.deleteFramebuffer(F.__webglFramebuffer),
        F.__webglDepthbuffer && n.deleteRenderbuffer(F.__webglDepthbuffer),
        F.__webglMultisampledFramebuffer &&
          n.deleteFramebuffer(F.__webglMultisampledFramebuffer),
        F.__webglColorRenderbuffer)
      )
        for (let Q = 0; Q < F.__webglColorRenderbuffer.length; Q++)
          F.__webglColorRenderbuffer[Q] &&
            n.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);
      F.__webglDepthRenderbuffer &&
        n.deleteRenderbuffer(F.__webglDepthRenderbuffer);
    }
    if (w.isWebGLMultipleRenderTargets)
      for (let Q = 0, fe = v.length; Q < fe; Q++) {
        const ye = i.get(v[Q]);
        ye.__webglTexture &&
          (n.deleteTexture(ye.__webglTexture), o.memory.textures--),
          i.remove(v[Q]);
      }
    i.remove(v), i.remove(w);
  }
  let ie = 0;
  function Z() {
    ie = 0;
  }
  function W() {
    const w = ie;
    return (
      w >= l &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            w +
            ' texture units while this GPU supports only ' +
            l
        ),
      (ie += 1),
      w
    );
  }
  function z(w) {
    const v = [];
    return (
      v.push(w.wrapS),
      v.push(w.wrapT),
      v.push(w.wrapR || 0),
      v.push(w.magFilter),
      v.push(w.minFilter),
      v.push(w.anisotropy),
      v.push(w.internalFormat),
      v.push(w.format),
      v.push(w.type),
      v.push(w.generateMipmaps),
      v.push(w.premultiplyAlpha),
      v.push(w.flipY),
      v.push(w.unpackAlignment),
      v.push(w.encoding),
      v.join()
    );
  }
  function X(w, v) {
    const F = i.get(w);
    if (
      (w.isVideoTexture && me(w),
      w.isRenderTargetTexture === !1 &&
        w.version > 0 &&
        F.__version !== w.version)
    ) {
      const $ = w.image;
      if ($ === null)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but no image data found.'
        );
      else if ($.complete === !1)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
        );
      else {
        ce(F, w, v);
        return;
      }
    }
    t.bindTexture(3553, F.__webglTexture, 33984 + v);
  }
  function ue(w, v) {
    const F = i.get(w);
    if (w.version > 0 && F.__version !== w.version) {
      ce(F, w, v);
      return;
    }
    t.bindTexture(35866, F.__webglTexture, 33984 + v);
  }
  function oe(w, v) {
    const F = i.get(w);
    if (w.version > 0 && F.__version !== w.version) {
      ce(F, w, v);
      return;
    }
    t.bindTexture(32879, F.__webglTexture, 33984 + v);
  }
  function le(w, v) {
    const F = i.get(w);
    if (w.version > 0 && F.__version !== w.version) {
      ve(F, w, v);
      return;
    }
    t.bindTexture(34067, F.__webglTexture, 33984 + v);
  }
  const we = { [Ua]: 10497, [tn]: 33071, [Ba]: 33648 },
    V = {
      [It]: 9728,
      [Oc]: 9984,
      [Nc]: 9986,
      [Ft]: 9729,
      [m0]: 9985,
      [_o]: 9987,
    };
  function I(w, v, F) {
    if (
      (F
        ? (n.texParameteri(w, 10242, we[v.wrapS]),
          n.texParameteri(w, 10243, we[v.wrapT]),
          (w === 32879 || w === 35866) &&
            n.texParameteri(w, 32882, we[v.wrapR]),
          n.texParameteri(w, 10240, V[v.magFilter]),
          n.texParameteri(w, 10241, V[v.minFilter]))
        : (n.texParameteri(w, 10242, 33071),
          n.texParameteri(w, 10243, 33071),
          (w === 32879 || w === 35866) && n.texParameteri(w, 32882, 33071),
          (v.wrapS !== tn || v.wrapT !== tn) &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
            ),
          n.texParameteri(w, 10240, R(v.magFilter)),
          n.texParameteri(w, 10241, R(v.minFilter)),
          v.minFilter !== It &&
            v.minFilter !== Ft &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
            )),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      const $ = e.get('EXT_texture_filter_anisotropic');
      if (
        (v.type === bi && e.has('OES_texture_float_linear') === !1) ||
        (a === !1 &&
          v.type === ss &&
          e.has('OES_texture_half_float_linear') === !1)
      )
        return;
      (v.anisotropy > 1 || i.get(v).__currentAnisotropy) &&
        (n.texParameterf(
          w,
          $.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(v.anisotropy, r.getMaxAnisotropy())
        ),
        (i.get(v).__currentAnisotropy = v.anisotropy));
    }
  }
  function ae(w, v) {
    let F = !1;
    w.__webglInit === void 0 &&
      ((w.__webglInit = !0), v.addEventListener('dispose', Y));
    const $ = v.source;
    let Q = d.get($);
    Q === void 0 && ((Q = {}), d.set($, Q));
    const fe = z(v);
    if (fe !== w.__cacheKey) {
      Q[fe] === void 0 &&
        ((Q[fe] = { texture: n.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (F = !0)),
        Q[fe].usedTimes++;
      const ye = Q[w.__cacheKey];
      ye !== void 0 &&
        (Q[w.__cacheKey].usedTimes--, ye.usedTimes === 0 && N(v)),
        (w.__cacheKey = fe),
        (w.__webglTexture = Q[fe].texture);
    }
    return F;
  }
  function ce(w, v, F) {
    let $ = 3553;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && ($ = 35866),
      v.isData3DTexture && ($ = 32879);
    const Q = ae(w, v),
      fe = v.source;
    t.bindTexture($, w.__webglTexture, 33984 + F);
    const ye = i.get(fe);
    if (fe.version !== ye.__version || Q === !0) {
      t.activeTexture(33984 + F),
        n.pixelStorei(37440, v.flipY),
        n.pixelStorei(37441, v.premultiplyAlpha),
        n.pixelStorei(3317, v.unpackAlignment),
        n.pixelStorei(37443, 0);
      const C = b(v) && S(v.image) === !1;
      let O = M(v.image, C, !1, u);
      O = se(v, O);
      const Me = S(O) || a,
        Te = s.convert(v.format, v.encoding);
      let be = s.convert(v.type),
        Ce = y(v.internalFormat, Te, be, v.encoding, v.isVideoTexture);
      I($, v, Me);
      let Se;
      const De = v.mipmaps,
        ke = a && v.isVideoTexture !== !0,
        Ye = ye.__version === void 0 || Q === !0,
        D = L(v, O, Me);
      if (v.isDepthTexture)
        (Ce = 6402),
          a
            ? v.type === bi
              ? (Ce = 36012)
              : v.type === Mi
              ? (Ce = 33190)
              : v.type === mr
              ? (Ce = 35056)
              : (Ce = 33189)
            : v.type === bi &&
              console.error(
                'WebGLRenderer: Floating point depth texture requires WebGL2.'
              ),
          v.format === Ai &&
            Ce === 6402 &&
            v.type !== Ih &&
            v.type !== Mi &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
            ),
            (v.type = Mi),
            (be = s.convert(v.type))),
          v.format === Tr &&
            Ce === 6402 &&
            ((Ce = 34041),
            v.type !== mr &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
              ),
              (v.type = mr),
              (be = s.convert(v.type)))),
          Ye &&
            (ke
              ? t.texStorage2D(3553, 1, Ce, O.width, O.height)
              : t.texImage2D(3553, 0, Ce, O.width, O.height, 0, Te, be, null));
      else if (v.isDataTexture)
        if (De.length > 0 && Me) {
          ke && Ye && t.texStorage2D(3553, D, Ce, De[0].width, De[0].height);
          for (let ee = 0, ge = De.length; ee < ge; ee++)
            (Se = De[ee]),
              ke
                ? t.texSubImage2D(
                    3553,
                    ee,
                    0,
                    0,
                    Se.width,
                    Se.height,
                    Te,
                    be,
                    Se.data
                  )
                : t.texImage2D(
                    3553,
                    ee,
                    Ce,
                    Se.width,
                    Se.height,
                    0,
                    Te,
                    be,
                    Se.data
                  );
          v.generateMipmaps = !1;
        } else
          ke
            ? (Ye && t.texStorage2D(3553, D, Ce, O.width, O.height),
              t.texSubImage2D(3553, 0, 0, 0, O.width, O.height, Te, be, O.data))
            : t.texImage2D(3553, 0, Ce, O.width, O.height, 0, Te, be, O.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          ke &&
            Ye &&
            t.texStorage3D(35866, D, Ce, De[0].width, De[0].height, O.depth);
          for (let ee = 0, ge = De.length; ee < ge; ee++)
            (Se = De[ee]),
              v.format !== nn
                ? Te !== null
                  ? ke
                    ? t.compressedTexSubImage3D(
                        35866,
                        ee,
                        0,
                        0,
                        0,
                        Se.width,
                        Se.height,
                        O.depth,
                        Te,
                        Se.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        ee,
                        Ce,
                        Se.width,
                        Se.height,
                        O.depth,
                        0,
                        Se.data,
                        0,
                        0
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : ke
                ? t.texSubImage3D(
                    35866,
                    ee,
                    0,
                    0,
                    0,
                    Se.width,
                    Se.height,
                    O.depth,
                    Te,
                    be,
                    Se.data
                  )
                : t.texImage3D(
                    35866,
                    ee,
                    Ce,
                    Se.width,
                    Se.height,
                    O.depth,
                    0,
                    Te,
                    be,
                    Se.data
                  );
        } else {
          ke && Ye && t.texStorage2D(3553, D, Ce, De[0].width, De[0].height);
          for (let ee = 0, ge = De.length; ee < ge; ee++)
            (Se = De[ee]),
              v.format !== nn
                ? Te !== null
                  ? ke
                    ? t.compressedTexSubImage2D(
                        3553,
                        ee,
                        0,
                        0,
                        Se.width,
                        Se.height,
                        Te,
                        Se.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        ee,
                        Ce,
                        Se.width,
                        Se.height,
                        0,
                        Se.data
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : ke
                ? t.texSubImage2D(
                    3553,
                    ee,
                    0,
                    0,
                    Se.width,
                    Se.height,
                    Te,
                    be,
                    Se.data
                  )
                : t.texImage2D(
                    3553,
                    ee,
                    Ce,
                    Se.width,
                    Se.height,
                    0,
                    Te,
                    be,
                    Se.data
                  );
        }
      else if (v.isDataArrayTexture)
        ke
          ? (Ye && t.texStorage3D(35866, D, Ce, O.width, O.height, O.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              O.width,
              O.height,
              O.depth,
              Te,
              be,
              O.data
            ))
          : t.texImage3D(
              35866,
              0,
              Ce,
              O.width,
              O.height,
              O.depth,
              0,
              Te,
              be,
              O.data
            );
      else if (v.isData3DTexture)
        ke
          ? (Ye && t.texStorage3D(32879, D, Ce, O.width, O.height, O.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              O.width,
              O.height,
              O.depth,
              Te,
              be,
              O.data
            ))
          : t.texImage3D(
              32879,
              0,
              Ce,
              O.width,
              O.height,
              O.depth,
              0,
              Te,
              be,
              O.data
            );
      else if (v.isFramebufferTexture) {
        if (Ye)
          if (ke) t.texStorage2D(3553, D, Ce, O.width, O.height);
          else {
            let ee = O.width,
              ge = O.height;
            for (let Ae = 0; Ae < D; Ae++)
              t.texImage2D(3553, Ae, Ce, ee, ge, 0, Te, be, null),
                (ee >>= 1),
                (ge >>= 1);
          }
      } else if (De.length > 0 && Me) {
        ke && Ye && t.texStorage2D(3553, D, Ce, De[0].width, De[0].height);
        for (let ee = 0, ge = De.length; ee < ge; ee++)
          (Se = De[ee]),
            ke
              ? t.texSubImage2D(3553, ee, 0, 0, Te, be, Se)
              : t.texImage2D(3553, ee, Ce, Te, be, Se);
        v.generateMipmaps = !1;
      } else
        ke
          ? (Ye && t.texStorage2D(3553, D, Ce, O.width, O.height),
            t.texSubImage2D(3553, 0, 0, 0, Te, be, O))
          : t.texImage2D(3553, 0, Ce, Te, be, O);
      P(v, Me) && B($),
        (ye.__version = fe.version),
        v.onUpdate && v.onUpdate(v);
    }
    w.__version = v.version;
  }
  function ve(w, v, F) {
    if (v.image.length !== 6) return;
    const $ = ae(w, v),
      Q = v.source;
    t.bindTexture(34067, w.__webglTexture, 33984 + F);
    const fe = i.get(Q);
    if (Q.version !== fe.__version || $ === !0) {
      t.activeTexture(33984 + F),
        n.pixelStorei(37440, v.flipY),
        n.pixelStorei(37441, v.premultiplyAlpha),
        n.pixelStorei(3317, v.unpackAlignment),
        n.pixelStorei(37443, 0);
      const ye = v.isCompressedTexture || v.image[0].isCompressedTexture,
        C = v.image[0] && v.image[0].isDataTexture,
        O = [];
      for (let ee = 0; ee < 6; ee++)
        !ye && !C
          ? (O[ee] = M(v.image[ee], !1, !0, c))
          : (O[ee] = C ? v.image[ee].image : v.image[ee]),
          (O[ee] = se(v, O[ee]));
      const Me = O[0],
        Te = S(Me) || a,
        be = s.convert(v.format, v.encoding),
        Ce = s.convert(v.type),
        Se = y(v.internalFormat, be, Ce, v.encoding),
        De = a && v.isVideoTexture !== !0,
        ke = fe.__version === void 0 || $ === !0;
      let Ye = L(v, Me, Te);
      I(34067, v, Te);
      let D;
      if (ye) {
        De && ke && t.texStorage2D(34067, Ye, Se, Me.width, Me.height);
        for (let ee = 0; ee < 6; ee++) {
          D = O[ee].mipmaps;
          for (let ge = 0; ge < D.length; ge++) {
            const Ae = D[ge];
            v.format !== nn
              ? be !== null
                ? De
                  ? t.compressedTexSubImage2D(
                      34069 + ee,
                      ge,
                      0,
                      0,
                      Ae.width,
                      Ae.height,
                      be,
                      Ae.data
                    )
                  : t.compressedTexImage2D(
                      34069 + ee,
                      ge,
                      Se,
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
                  34069 + ee,
                  ge,
                  0,
                  0,
                  Ae.width,
                  Ae.height,
                  be,
                  Ce,
                  Ae.data
                )
              : t.texImage2D(
                  34069 + ee,
                  ge,
                  Se,
                  Ae.width,
                  Ae.height,
                  0,
                  be,
                  Ce,
                  Ae.data
                );
          }
        }
      } else {
        (D = v.mipmaps),
          De &&
            ke &&
            (D.length > 0 && Ye++,
            t.texStorage2D(34067, Ye, Se, O[0].width, O[0].height));
        for (let ee = 0; ee < 6; ee++)
          if (C) {
            De
              ? t.texSubImage2D(
                  34069 + ee,
                  0,
                  0,
                  0,
                  O[ee].width,
                  O[ee].height,
                  be,
                  Ce,
                  O[ee].data
                )
              : t.texImage2D(
                  34069 + ee,
                  0,
                  Se,
                  O[ee].width,
                  O[ee].height,
                  0,
                  be,
                  Ce,
                  O[ee].data
                );
            for (let ge = 0; ge < D.length; ge++) {
              const Le = D[ge].image[ee].image;
              De
                ? t.texSubImage2D(
                    34069 + ee,
                    ge + 1,
                    0,
                    0,
                    Le.width,
                    Le.height,
                    be,
                    Ce,
                    Le.data
                  )
                : t.texImage2D(
                    34069 + ee,
                    ge + 1,
                    Se,
                    Le.width,
                    Le.height,
                    0,
                    be,
                    Ce,
                    Le.data
                  );
            }
          } else {
            De
              ? t.texSubImage2D(34069 + ee, 0, 0, 0, be, Ce, O[ee])
              : t.texImage2D(34069 + ee, 0, Se, be, Ce, O[ee]);
            for (let ge = 0; ge < D.length; ge++) {
              const Ae = D[ge];
              De
                ? t.texSubImage2D(
                    34069 + ee,
                    ge + 1,
                    0,
                    0,
                    be,
                    Ce,
                    Ae.image[ee]
                  )
                : t.texImage2D(34069 + ee, ge + 1, Se, be, Ce, Ae.image[ee]);
            }
          }
      }
      P(v, Te) && B(34067),
        (fe.__version = Q.version),
        v.onUpdate && v.onUpdate(v);
    }
    w.__version = v.version;
  }
  function _e(w, v, F, $, Q) {
    const fe = s.convert(F.format, F.encoding),
      ye = s.convert(F.type),
      C = y(F.internalFormat, fe, ye, F.encoding);
    i.get(v).__hasExternalTextures ||
      (Q === 32879 || Q === 35866
        ? t.texImage3D(Q, 0, C, v.width, v.height, v.depth, 0, fe, ye, null)
        : t.texImage2D(Q, 0, C, v.width, v.height, 0, fe, ye, null)),
      t.bindFramebuffer(36160, w),
      re(v)
        ? h.framebufferTexture2DMultisampleEXT(
            36160,
            $,
            Q,
            i.get(F).__webglTexture,
            0,
            pe(v)
          )
        : (Q === 3553 || (Q >= 34069 && Q <= 34074)) &&
          n.framebufferTexture2D(36160, $, Q, i.get(F).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Ee(w, v, F) {
    if ((n.bindRenderbuffer(36161, w), v.depthBuffer && !v.stencilBuffer)) {
      let $ = 33189;
      if (F || re(v)) {
        const Q = v.depthTexture;
        Q &&
          Q.isDepthTexture &&
          (Q.type === bi ? ($ = 36012) : Q.type === Mi && ($ = 33190));
        const fe = pe(v);
        re(v)
          ? h.renderbufferStorageMultisampleEXT(36161, fe, $, v.width, v.height)
          : n.renderbufferStorageMultisample(36161, fe, $, v.width, v.height);
      } else n.renderbufferStorage(36161, $, v.width, v.height);
      n.framebufferRenderbuffer(36160, 36096, 36161, w);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const $ = pe(v);
      F && re(v) === !1
        ? n.renderbufferStorageMultisample(36161, $, 35056, v.width, v.height)
        : re(v)
        ? h.renderbufferStorageMultisampleEXT(
            36161,
            $,
            35056,
            v.width,
            v.height
          )
        : n.renderbufferStorage(36161, 34041, v.width, v.height),
        n.framebufferRenderbuffer(36160, 33306, 36161, w);
    } else {
      const $ = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let Q = 0; Q < $.length; Q++) {
        const fe = $[Q],
          ye = s.convert(fe.format, fe.encoding),
          C = s.convert(fe.type),
          O = y(fe.internalFormat, ye, C, fe.encoding),
          Me = pe(v);
        F && re(v) === !1
          ? n.renderbufferStorageMultisample(36161, Me, O, v.width, v.height)
          : re(v)
          ? h.renderbufferStorageMultisampleEXT(36161, Me, O, v.width, v.height)
          : n.renderbufferStorage(36161, O, v.width, v.height);
      }
    }
    n.bindRenderbuffer(36161, null);
  }
  function E(w, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error(
        'Depth Texture with cube render targets is not supported'
      );
    if (
      (t.bindFramebuffer(36160, w),
      !(v.depthTexture && v.depthTexture.isDepthTexture))
    )
      throw new Error(
        'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
      );
    (!i.get(v.depthTexture).__webglTexture ||
      v.depthTexture.image.width !== v.width ||
      v.depthTexture.image.height !== v.height) &&
      ((v.depthTexture.image.width = v.width),
      (v.depthTexture.image.height = v.height),
      (v.depthTexture.needsUpdate = !0)),
      X(v.depthTexture, 0);
    const $ = i.get(v.depthTexture).__webglTexture,
      Q = pe(v);
    if (v.depthTexture.format === Ai)
      re(v)
        ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, $, 0, Q)
        : n.framebufferTexture2D(36160, 36096, 3553, $, 0);
    else if (v.depthTexture.format === Tr)
      re(v)
        ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, $, 0, Q)
        : n.framebufferTexture2D(36160, 33306, 3553, $, 0);
    else throw new Error('Unknown depthTexture format');
  }
  function A(w) {
    const v = i.get(w),
      F = w.isWebGLCubeRenderTarget === !0;
    if (w.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (F)
        throw new Error(
          'target.depthTexture not supported in Cube render targets'
        );
      E(v.__webglFramebuffer, w);
    } else if (F) {
      v.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        t.bindFramebuffer(36160, v.__webglFramebuffer[$]),
          (v.__webglDepthbuffer[$] = n.createRenderbuffer()),
          Ee(v.__webglDepthbuffer[$], w, !1);
    } else
      t.bindFramebuffer(36160, v.__webglFramebuffer),
        (v.__webglDepthbuffer = n.createRenderbuffer()),
        Ee(v.__webglDepthbuffer, w, !1);
    t.bindFramebuffer(36160, null);
  }
  function H(w, v, F) {
    const $ = i.get(w);
    v !== void 0 && _e($.__webglFramebuffer, w, w.texture, 36064, 3553),
      F !== void 0 && A(w);
  }
  function j(w) {
    const v = w.texture,
      F = i.get(w),
      $ = i.get(v);
    w.addEventListener('dispose', de),
      w.isWebGLMultipleRenderTargets !== !0 &&
        ($.__webglTexture === void 0 && ($.__webglTexture = n.createTexture()),
        ($.__version = v.version),
        o.memory.textures++);
    const Q = w.isWebGLCubeRenderTarget === !0,
      fe = w.isWebGLMultipleRenderTargets === !0,
      ye = S(w) || a;
    if (Q) {
      F.__webglFramebuffer = [];
      for (let C = 0; C < 6; C++)
        F.__webglFramebuffer[C] = n.createFramebuffer();
    } else {
      if (((F.__webglFramebuffer = n.createFramebuffer()), fe))
        if (r.drawBuffers) {
          const C = w.texture;
          for (let O = 0, Me = C.length; O < Me; O++) {
            const Te = i.get(C[O]);
            Te.__webglTexture === void 0 &&
              ((Te.__webglTexture = n.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
          );
      if (a && w.samples > 0 && re(w) === !1) {
        const C = fe ? v : [v];
        (F.__webglMultisampledFramebuffer = n.createFramebuffer()),
          (F.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, F.__webglMultisampledFramebuffer);
        for (let O = 0; O < C.length; O++) {
          const Me = C[O];
          (F.__webglColorRenderbuffer[O] = n.createRenderbuffer()),
            n.bindRenderbuffer(36161, F.__webglColorRenderbuffer[O]);
          const Te = s.convert(Me.format, Me.encoding),
            be = s.convert(Me.type),
            Ce = y(
              Me.internalFormat,
              Te,
              be,
              Me.encoding,
              w.isXRRenderTarget === !0
            ),
            Se = pe(w);
          n.renderbufferStorageMultisample(36161, Se, Ce, w.width, w.height),
            n.framebufferRenderbuffer(
              36160,
              36064 + O,
              36161,
              F.__webglColorRenderbuffer[O]
            );
        }
        n.bindRenderbuffer(36161, null),
          w.depthBuffer &&
            ((F.__webglDepthRenderbuffer = n.createRenderbuffer()),
            Ee(F.__webglDepthRenderbuffer, w, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (Q) {
      t.bindTexture(34067, $.__webglTexture), I(34067, v, ye);
      for (let C = 0; C < 6; C++)
        _e(F.__webglFramebuffer[C], w, v, 36064, 34069 + C);
      P(v, ye) && B(34067), t.unbindTexture();
    } else if (fe) {
      const C = w.texture;
      for (let O = 0, Me = C.length; O < Me; O++) {
        const Te = C[O],
          be = i.get(Te);
        t.bindTexture(3553, be.__webglTexture),
          I(3553, Te, ye),
          _e(F.__webglFramebuffer, w, Te, 36064 + O, 3553),
          P(Te, ye) && B(3553);
      }
      t.unbindTexture();
    } else {
      let C = 3553;
      (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) &&
        (a
          ? (C = w.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.'
            )),
        t.bindTexture(C, $.__webglTexture),
        I(C, v, ye),
        _e(F.__webglFramebuffer, w, v, 36064, C),
        P(v, ye) && B(C),
        t.unbindTexture();
    }
    w.depthBuffer && A(w);
  }
  function K(w) {
    const v = S(w) || a,
      F = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
    for (let $ = 0, Q = F.length; $ < Q; $++) {
      const fe = F[$];
      if (P(fe, v)) {
        const ye = w.isWebGLCubeRenderTarget ? 34067 : 3553,
          C = i.get(fe).__webglTexture;
        t.bindTexture(ye, C), B(ye), t.unbindTexture();
      }
    }
  }
  function he(w) {
    if (a && w.samples > 0 && re(w) === !1) {
      const v = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture],
        F = w.width,
        $ = w.height;
      let Q = 16384;
      const fe = [],
        ye = w.stencilBuffer ? 33306 : 36096,
        C = i.get(w),
        O = w.isWebGLMultipleRenderTargets === !0;
      if (O)
        for (let Me = 0; Me < v.length; Me++)
          t.bindFramebuffer(36160, C.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(36160, 36064 + Me, 36161, null),
            t.bindFramebuffer(36160, C.__webglFramebuffer),
            n.framebufferTexture2D(36009, 36064 + Me, 3553, null, 0);
      t.bindFramebuffer(36008, C.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, C.__webglFramebuffer);
      for (let Me = 0; Me < v.length; Me++) {
        fe.push(36064 + Me), w.depthBuffer && fe.push(ye);
        const Te =
          C.__ignoreDepthValues !== void 0 ? C.__ignoreDepthValues : !1;
        if (
          (Te === !1 &&
            (w.depthBuffer && (Q |= 256), w.stencilBuffer && (Q |= 1024)),
          O &&
            n.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              C.__webglColorRenderbuffer[Me]
            ),
          Te === !0 &&
            (n.invalidateFramebuffer(36008, [ye]),
            n.invalidateFramebuffer(36009, [ye])),
          O)
        ) {
          const be = i.get(v[Me]).__webglTexture;
          n.framebufferTexture2D(36009, 36064, 3553, be, 0);
        }
        n.blitFramebuffer(0, 0, F, $, 0, 0, F, $, Q, 9728),
          p && n.invalidateFramebuffer(36008, fe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), O))
        for (let Me = 0; Me < v.length; Me++) {
          t.bindFramebuffer(36160, C.__webglMultisampledFramebuffer),
            n.framebufferRenderbuffer(
              36160,
              36064 + Me,
              36161,
              C.__webglColorRenderbuffer[Me]
            );
          const Te = i.get(v[Me]).__webglTexture;
          t.bindFramebuffer(36160, C.__webglFramebuffer),
            n.framebufferTexture2D(36009, 36064 + Me, 3553, Te, 0);
        }
      t.bindFramebuffer(36009, C.__webglMultisampledFramebuffer);
    }
  }
  function pe(w) {
    return Math.min(f, w.samples);
  }
  function re(w) {
    const v = i.get(w);
    return (
      a &&
      w.samples > 0 &&
      e.has('WEBGL_multisampled_render_to_texture') === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function me(w) {
    const v = o.render.frame;
    g.get(w) !== v && (g.set(w, v), w.update());
  }
  function se(w, v) {
    const F = w.encoding,
      $ = w.format,
      Q = w.type;
    return (
      w.isCompressedTexture === !0 ||
        w.isVideoTexture === !0 ||
        w.format === Va ||
        (F !== Ri &&
          (F === it
            ? a === !1
              ? e.has('EXT_sRGB') === !0 && $ === nn
                ? ((w.format = Va),
                  (w.minFilter = Ft),
                  (w.generateMipmaps = !1))
                : (v = Nh.sRGBToLinear(v))
              : ($ !== nn || Q !== Pi) &&
                console.warn(
                  'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.'
                )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture encoding:',
                F
              ))),
      v
    );
  }
  (this.allocateTextureUnit = W),
    (this.resetTextureUnits = Z),
    (this.setTexture2D = X),
    (this.setTexture2DArray = ue),
    (this.setTexture3D = oe),
    (this.setTextureCube = le),
    (this.rebindTextures = H),
    (this.setupRenderTarget = j),
    (this.updateRenderTargetMipmap = K),
    (this.updateMultisampleRenderTarget = he),
    (this.setupDepthRenderbuffer = A),
    (this.setupFrameBufferTexture = _e),
    (this.useMultisampledRTT = re);
}
function Cb(n, e, t) {
  const i = t.isWebGL2;
  function r(s, o = null) {
    let a;
    if (s === Pi) return 5121;
    if (s === x0) return 32819;
    if (s === y0) return 32820;
    if (s === g0) return 5120;
    if (s === _0) return 5122;
    if (s === Ih) return 5123;
    if (s === v0) return 5124;
    if (s === Mi) return 5125;
    if (s === bi) return 5126;
    if (s === ss)
      return i
        ? 5131
        : ((a = e.get('OES_texture_half_float')),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === M0) return 6406;
    if (s === nn) return 6408;
    if (s === S0) return 6409;
    if (s === w0) return 6410;
    if (s === Ai) return 6402;
    if (s === Tr) return 34041;
    if (s === E0) return 6403;
    if (s === b0)
      return (
        console.warn(
          'THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228'
        ),
        6408
      );
    if (s === Va)
      return (a = e.get('EXT_sRGB')), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === T0) return 36244;
    if (s === A0) return 33319;
    if (s === C0) return 33320;
    if (s === L0) return 36249;
    if (s === Oo || s === No || s === zo || s === Uo)
      if (o === it)
        if (((a = e.get('WEBGL_compressed_texture_s3tc_srgb')), a !== null)) {
          if (s === Oo) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === No) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === zo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Uo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get('WEBGL_compressed_texture_s3tc')), a !== null)) {
        if (s === Oo) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === No) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === zo) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Uo) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === zc || s === Uc || s === Bc || s === kc)
      if (((a = e.get('WEBGL_compressed_texture_pvrtc')), a !== null)) {
        if (s === zc) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Uc) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Bc) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === kc) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === P0)
      return (
        (a = e.get('WEBGL_compressed_texture_etc1')),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Vc || s === Gc)
      if (((a = e.get('WEBGL_compressed_texture_etc')), a !== null)) {
        if (s === Vc)
          return o === it ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Gc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Hc ||
      s === Wc ||
      s === qc ||
      s === Xc ||
      s === jc ||
      s === $c ||
      s === Yc ||
      s === Zc ||
      s === Kc ||
      s === Jc ||
      s === Qc ||
      s === eu ||
      s === tu ||
      s === nu
    )
      if (((a = e.get('WEBGL_compressed_texture_astc')), a !== null)) {
        if (s === Hc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Wc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === qc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Xc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === jc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === $c)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Yc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Zc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Kc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Jc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Qc)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === eu)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === tu)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === nu)
          return o === it
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === iu)
      if (((a = e.get('EXT_texture_compression_bptc')), a !== null)) {
        if (s === iu)
          return o === it
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === mr
      ? i
        ? 34042
        : ((a = e.get('WEBGL_depth_texture')),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : n[s] !== void 0
      ? n[s]
      : null;
  }
  return { convert: r };
}
class Lb extends Wt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class jr extends Rt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const Pb = { type: 'move' };
class ha {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new jr()),
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
        ((this._targetRay = new jr()),
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
        ((this._grip = new jr()),
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
  update(e, t, i) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== 'visible-blurred') {
      if (c && e.hand) {
        o = !0;
        for (const m of e.hand.values()) {
          const d = t.getJointPose(m, i);
          if (c.joints[m.jointName] === void 0) {
            const x = new jr();
            (x.matrixAutoUpdate = !1),
              (x.visible = !1),
              (c.joints[m.jointName] = x),
              c.add(x);
          }
          const _ = c.joints[m.jointName];
          d !== null &&
            (_.matrix.fromArray(d.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = d.radius)),
            (_.visible = d !== null);
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
          ((s = t.getPose(e.gripSpace, i)),
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
        ((r = t.getPose(e.targetRaySpace, i)),
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
          this.dispatchEvent(Pb)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
}
class Rb extends $t {
  constructor(e, t, i, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : Ai), u !== Ai && u !== Tr))
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
      );
    i === void 0 && u === Ai && (i = Mi),
      i === void 0 && u === Tr && (i = mr),
      super(null, r, s, o, a, l, u, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : It),
      (this.minFilter = l !== void 0 ? l : It),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Db extends Ni {
  constructor(e, t) {
    super();
    const i = this;
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
    let m = null,
      d = null;
    const _ = [],
      x = [],
      M = new Wt();
    M.layers.enable(1), (M.viewport = new yt());
    const S = new Wt();
    S.layers.enable(2), (S.viewport = new yt());
    const b = [M, S],
      P = new Lb();
    P.layers.enable(1), P.layers.enable(2);
    let B = null,
      y = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (z) {
        let X = _[z];
        return (
          X === void 0 && ((X = new ha()), (_[z] = X)), X.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (z) {
        let X = _[z];
        return X === void 0 && ((X = new ha()), (_[z] = X)), X.getGripSpace();
      }),
      (this.getHand = function (z) {
        let X = _[z];
        return X === void 0 && ((X = new ha()), (_[z] = X)), X.getHandSpace();
      });
    function L(z) {
      const X = x.indexOf(z.inputSource);
      if (X === -1) return;
      const ue = _[X];
      ue !== void 0 && ue.dispatchEvent({ type: z.type, data: z.inputSource });
    }
    function R() {
      r.removeEventListener('select', L),
        r.removeEventListener('selectstart', L),
        r.removeEventListener('selectend', L),
        r.removeEventListener('squeeze', L),
        r.removeEventListener('squeezestart', L),
        r.removeEventListener('squeezeend', L),
        r.removeEventListener('end', R),
        r.removeEventListener('inputsourceschange', Y);
      for (let z = 0; z < _.length; z++) {
        const X = x[z];
        X !== null && ((x[z] = null), _[z].disconnect(X));
      }
      (B = null),
        (y = null),
        e.setRenderTarget(m),
        (h = null),
        (f = null),
        (u = null),
        (r = null),
        (d = null),
        W.stop(),
        (i.isPresenting = !1),
        i.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (z) {
      (s = z),
        i.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
          );
    }),
      (this.setReferenceSpaceType = function (z) {
        (a = z),
          i.isPresenting === !0 &&
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
        return p;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (z) {
        if (((r = z), r !== null)) {
          if (
            ((m = e.getRenderTarget()),
            r.addEventListener('select', L),
            r.addEventListener('selectstart', L),
            r.addEventListener('selectend', L),
            r.addEventListener('squeeze', L),
            r.addEventListener('squeezestart', L),
            r.addEventListener('squeezeend', L),
            r.addEventListener('end', R),
            r.addEventListener('inputsourceschange', Y),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const X = {
              antialias: r.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            (h = new XRWebGLLayer(r, t, X)),
              r.updateRenderState({ baseLayer: h }),
              (d = new Di(h.framebufferWidth, h.framebufferHeight, {
                format: nn,
                type: Pi,
                encoding: e.outputEncoding,
                stencilBuffer: g.stencil,
              }));
          } else {
            let X = null,
              ue = null,
              oe = null;
            g.depth &&
              ((oe = g.stencil ? 35056 : 33190),
              (X = g.stencil ? Tr : Ai),
              (ue = g.stencil ? mr : Mi));
            const le = { colorFormat: 32856, depthFormat: oe, scaleFactor: s };
            (u = new XRWebGLBinding(r, t)),
              (f = u.createProjectionLayer(le)),
              r.updateRenderState({ layers: [f] }),
              (d = new Di(f.textureWidth, f.textureHeight, {
                format: nn,
                type: Pi,
                depthTexture: new Rb(
                  f.textureWidth,
                  f.textureHeight,
                  ue,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  X
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const we = e.properties.get(d);
            we.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (d.isXRRenderTarget = !0),
            this.setFoveation(1),
            (l = null),
            (o = await r.requestReferenceSpace(a)),
            W.setContext(r),
            W.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: 'sessionstart' });
        }
      });
    function Y(z) {
      for (let X = 0; X < z.removed.length; X++) {
        const ue = z.removed[X],
          oe = x.indexOf(ue);
        oe >= 0 &&
          ((x[oe] = null),
          _[oe].dispatchEvent({ type: 'disconnected', data: ue }));
      }
      for (let X = 0; X < z.added.length; X++) {
        const ue = z.added[X];
        let oe = x.indexOf(ue);
        if (oe === -1) {
          for (let we = 0; we < _.length; we++)
            if (we >= x.length) {
              x.push(ue), (oe = we);
              break;
            } else if (x[we] === null) {
              (x[we] = ue), (oe = we);
              break;
            }
          if (oe === -1) break;
        }
        const le = _[oe];
        le && le.dispatchEvent({ type: 'connected', data: ue });
      }
    }
    const de = new U(),
      G = new U();
    function N(z, X, ue) {
      de.setFromMatrixPosition(X.matrixWorld),
        G.setFromMatrixPosition(ue.matrixWorld);
      const oe = de.distanceTo(G),
        le = X.projectionMatrix.elements,
        we = ue.projectionMatrix.elements,
        V = le[14] / (le[10] - 1),
        I = le[14] / (le[10] + 1),
        ae = (le[9] + 1) / le[5],
        ce = (le[9] - 1) / le[5],
        ve = (le[8] - 1) / le[0],
        _e = (we[8] + 1) / we[0],
        Ee = V * ve,
        E = V * _e,
        A = oe / (-ve + _e),
        H = A * -ve;
      X.matrixWorld.decompose(z.position, z.quaternion, z.scale),
        z.translateX(H),
        z.translateZ(A),
        z.matrixWorld.compose(z.position, z.quaternion, z.scale),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const j = V + A,
        K = I + A,
        he = Ee - H,
        pe = E + (oe - H),
        re = ((ae * I) / K) * j,
        me = ((ce * I) / K) * j;
      z.projectionMatrix.makePerspective(he, pe, re, me, j, K);
    }
    function te(z, X) {
      X === null
        ? z.matrixWorld.copy(z.matrix)
        : z.matrixWorld.multiplyMatrices(X.matrixWorld, z.matrix),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    (this.updateCamera = function (z) {
      if (r === null) return;
      (P.near = S.near = M.near = z.near),
        (P.far = S.far = M.far = z.far),
        (B !== P.near || y !== P.far) &&
          (r.updateRenderState({ depthNear: P.near, depthFar: P.far }),
          (B = P.near),
          (y = P.far));
      const X = z.parent,
        ue = P.cameras;
      te(P, X);
      for (let le = 0; le < ue.length; le++) te(ue[le], X);
      P.matrixWorld.decompose(P.position, P.quaternion, P.scale),
        z.matrix.copy(P.matrix),
        z.matrix.decompose(z.position, z.quaternion, z.scale);
      const oe = z.children;
      for (let le = 0, we = oe.length; le < we; le++)
        oe[le].updateMatrixWorld(!0);
      ue.length === 2
        ? N(P, M, S)
        : P.projectionMatrix.copy(M.projectionMatrix);
    }),
      (this.getCamera = function () {
        return P;
      }),
      (this.getFoveation = function () {
        if (f !== null) return f.fixedFoveation;
        if (h !== null) return h.fixedFoveation;
      }),
      (this.setFoveation = function (z) {
        f !== null && (f.fixedFoveation = z),
          h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = z);
      });
    let ie = null;
    function Z(z, X) {
      if (((c = X.getViewerPose(l || o)), (p = X), c !== null)) {
        const ue = c.views;
        h !== null &&
          (e.setRenderTargetFramebuffer(d, h.framebuffer),
          e.setRenderTarget(d));
        let oe = !1;
        ue.length !== P.cameras.length && ((P.cameras.length = 0), (oe = !0));
        for (let le = 0; le < ue.length; le++) {
          const we = ue[le];
          let V = null;
          if (h !== null) V = h.getViewport(we);
          else {
            const ae = u.getViewSubImage(f, we);
            (V = ae.viewport),
              le === 0 &&
                (e.setRenderTargetTextures(
                  d,
                  ae.colorTexture,
                  f.ignoreDepthValues ? void 0 : ae.depthStencilTexture
                ),
                e.setRenderTarget(d));
          }
          let I = b[le];
          I === void 0 &&
            ((I = new Wt()),
            I.layers.enable(le),
            (I.viewport = new yt()),
            (b[le] = I)),
            I.matrix.fromArray(we.transform.matrix),
            I.projectionMatrix.fromArray(we.projectionMatrix),
            I.viewport.set(V.x, V.y, V.width, V.height),
            le === 0 && P.matrix.copy(I.matrix),
            oe === !0 && P.cameras.push(I);
        }
      }
      for (let ue = 0; ue < _.length; ue++) {
        const oe = x[ue],
          le = _[ue];
        oe !== null && le !== void 0 && le.update(oe, X, l || o);
      }
      ie && ie(z, X), (p = null);
    }
    const W = new jh();
    W.setAnimationLoop(Z),
      (this.setAnimationLoop = function (z) {
        ie = z;
      }),
      (this.dispose = function () {});
  }
}
function Ib(n, e) {
  function t(m, d) {
    m.fogColor.value.copy(d.color),
      d.isFog
        ? ((m.fogNear.value = d.near), (m.fogFar.value = d.far))
        : d.isFogExp2 && (m.fogDensity.value = d.density);
  }
  function i(m, d, _, x, M) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial
      ? r(m, d)
      : d.isMeshToonMaterial
      ? (r(m, d), u(m, d))
      : d.isMeshPhongMaterial
      ? (r(m, d), c(m, d))
      : d.isMeshStandardMaterial
      ? (r(m, d), f(m, d), d.isMeshPhysicalMaterial && h(m, d, M))
      : d.isMeshMatcapMaterial
      ? (r(m, d), p(m, d))
      : d.isMeshDepthMaterial
      ? r(m, d)
      : d.isMeshDistanceMaterial
      ? (r(m, d), g(m, d))
      : d.isMeshNormalMaterial
      ? r(m, d)
      : d.isLineBasicMaterial
      ? (s(m, d), d.isLineDashedMaterial && o(m, d))
      : d.isPointsMaterial
      ? a(m, d, _, x)
      : d.isSpriteMaterial
      ? l(m, d)
      : d.isShadowMaterial
      ? (m.color.value.copy(d.color), (m.opacity.value = d.opacity))
      : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function r(m, d) {
    (m.opacity.value = d.opacity),
      d.color && m.diffuse.value.copy(d.color),
      d.emissive &&
        m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
      d.map && (m.map.value = d.map),
      d.alphaMap && (m.alphaMap.value = d.alphaMap),
      d.bumpMap &&
        ((m.bumpMap.value = d.bumpMap),
        (m.bumpScale.value = d.bumpScale),
        d.side === jt && (m.bumpScale.value *= -1)),
      d.displacementMap &&
        ((m.displacementMap.value = d.displacementMap),
        (m.displacementScale.value = d.displacementScale),
        (m.displacementBias.value = d.displacementBias)),
      d.emissiveMap && (m.emissiveMap.value = d.emissiveMap),
      d.normalMap &&
        ((m.normalMap.value = d.normalMap),
        m.normalScale.value.copy(d.normalScale),
        d.side === jt && m.normalScale.value.negate()),
      d.specularMap && (m.specularMap.value = d.specularMap),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    const _ = e.get(d).envMap;
    if (
      (_ &&
        ((m.envMap.value = _),
        (m.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (m.reflectivity.value = d.reflectivity),
        (m.ior.value = d.ior),
        (m.refractionRatio.value = d.refractionRatio)),
      d.lightMap)
    ) {
      m.lightMap.value = d.lightMap;
      const S = n.physicallyCorrectLights !== !0 ? Math.PI : 1;
      m.lightMapIntensity.value = d.lightMapIntensity * S;
    }
    d.aoMap &&
      ((m.aoMap.value = d.aoMap), (m.aoMapIntensity.value = d.aoMapIntensity));
    let x;
    d.map
      ? (x = d.map)
      : d.specularMap
      ? (x = d.specularMap)
      : d.displacementMap
      ? (x = d.displacementMap)
      : d.normalMap
      ? (x = d.normalMap)
      : d.bumpMap
      ? (x = d.bumpMap)
      : d.roughnessMap
      ? (x = d.roughnessMap)
      : d.metalnessMap
      ? (x = d.metalnessMap)
      : d.alphaMap
      ? (x = d.alphaMap)
      : d.emissiveMap
      ? (x = d.emissiveMap)
      : d.clearcoatMap
      ? (x = d.clearcoatMap)
      : d.clearcoatNormalMap
      ? (x = d.clearcoatNormalMap)
      : d.clearcoatRoughnessMap
      ? (x = d.clearcoatRoughnessMap)
      : d.iridescenceMap
      ? (x = d.iridescenceMap)
      : d.iridescenceThicknessMap
      ? (x = d.iridescenceThicknessMap)
      : d.specularIntensityMap
      ? (x = d.specularIntensityMap)
      : d.specularColorMap
      ? (x = d.specularColorMap)
      : d.transmissionMap
      ? (x = d.transmissionMap)
      : d.thicknessMap
      ? (x = d.thicknessMap)
      : d.sheenColorMap
      ? (x = d.sheenColorMap)
      : d.sheenRoughnessMap && (x = d.sheenRoughnessMap),
      x !== void 0 &&
        (x.isWebGLRenderTarget && (x = x.texture),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        m.uvTransform.value.copy(x.matrix));
    let M;
    d.aoMap ? (M = d.aoMap) : d.lightMap && (M = d.lightMap),
      M !== void 0 &&
        (M.isWebGLRenderTarget && (M = M.texture),
        M.matrixAutoUpdate === !0 && M.updateMatrix(),
        m.uv2Transform.value.copy(M.matrix));
  }
  function s(m, d) {
    m.diffuse.value.copy(d.color), (m.opacity.value = d.opacity);
  }
  function o(m, d) {
    (m.dashSize.value = d.dashSize),
      (m.totalSize.value = d.dashSize + d.gapSize),
      (m.scale.value = d.scale);
  }
  function a(m, d, _, x) {
    m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      (m.size.value = d.size * _),
      (m.scale.value = x * 0.5),
      d.map && (m.map.value = d.map),
      d.alphaMap && (m.alphaMap.value = d.alphaMap),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    let M;
    d.map ? (M = d.map) : d.alphaMap && (M = d.alphaMap),
      M !== void 0 &&
        (M.matrixAutoUpdate === !0 && M.updateMatrix(),
        m.uvTransform.value.copy(M.matrix));
  }
  function l(m, d) {
    m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      (m.rotation.value = d.rotation),
      d.map && (m.map.value = d.map),
      d.alphaMap && (m.alphaMap.value = d.alphaMap),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    let _;
    d.map ? (_ = d.map) : d.alphaMap && (_ = d.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        m.uvTransform.value.copy(_.matrix));
  }
  function c(m, d) {
    m.specular.value.copy(d.specular),
      (m.shininess.value = Math.max(d.shininess, 1e-4));
  }
  function u(m, d) {
    d.gradientMap && (m.gradientMap.value = d.gradientMap);
  }
  function f(m, d) {
    (m.roughness.value = d.roughness),
      (m.metalness.value = d.metalness),
      d.roughnessMap && (m.roughnessMap.value = d.roughnessMap),
      d.metalnessMap && (m.metalnessMap.value = d.metalnessMap),
      e.get(d).envMap && (m.envMapIntensity.value = d.envMapIntensity);
  }
  function h(m, d, _) {
    (m.ior.value = d.ior),
      d.sheen > 0 &&
        (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        (m.sheenRoughness.value = d.sheenRoughness),
        d.sheenColorMap && (m.sheenColorMap.value = d.sheenColorMap),
        d.sheenRoughnessMap &&
          (m.sheenRoughnessMap.value = d.sheenRoughnessMap)),
      d.clearcoat > 0 &&
        ((m.clearcoat.value = d.clearcoat),
        (m.clearcoatRoughness.value = d.clearcoatRoughness),
        d.clearcoatMap && (m.clearcoatMap.value = d.clearcoatMap),
        d.clearcoatRoughnessMap &&
          (m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap),
        d.clearcoatNormalMap &&
          (m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
          (m.clearcoatNormalMap.value = d.clearcoatNormalMap),
          d.side === jt && m.clearcoatNormalScale.value.negate())),
      d.iridescence > 0 &&
        ((m.iridescence.value = d.iridescence),
        (m.iridescenceIOR.value = d.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1]),
        d.iridescenceMap && (m.iridescenceMap.value = d.iridescenceMap),
        d.iridescenceThicknessMap &&
          (m.iridescenceThicknessMap.value = d.iridescenceThicknessMap)),
      d.transmission > 0 &&
        ((m.transmission.value = d.transmission),
        (m.transmissionSamplerMap.value = _.texture),
        m.transmissionSamplerSize.value.set(_.width, _.height),
        d.transmissionMap && (m.transmissionMap.value = d.transmissionMap),
        (m.thickness.value = d.thickness),
        d.thicknessMap && (m.thicknessMap.value = d.thicknessMap),
        (m.attenuationDistance.value = d.attenuationDistance),
        m.attenuationColor.value.copy(d.attenuationColor)),
      (m.specularIntensity.value = d.specularIntensity),
      m.specularColor.value.copy(d.specularColor),
      d.specularIntensityMap &&
        (m.specularIntensityMap.value = d.specularIntensityMap),
      d.specularColorMap && (m.specularColorMap.value = d.specularColorMap);
  }
  function p(m, d) {
    d.matcap && (m.matcap.value = d.matcap);
  }
  function g(m, d) {
    m.referencePosition.value.copy(d.referencePosition),
      (m.nearDistance.value = d.nearDistance),
      (m.farDistance.value = d.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: i };
}
function Fb(n, e, t, i) {
  let r = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? n.getParameter(35375) : 0;
  function l(x, M) {
    const S = M.program;
    i.uniformBlockBinding(x, S);
  }
  function c(x, M) {
    let S = r[x.id];
    S === void 0 &&
      (g(x), (S = u(x)), (r[x.id] = S), x.addEventListener('dispose', d));
    const b = M.program;
    i.updateUBOMapping(x, b);
    const P = e.render.frame;
    s[x.id] !== P && (h(x), (s[x.id] = P));
  }
  function u(x) {
    const M = f();
    x.__bindingPointIndex = M;
    const S = n.createBuffer(),
      b = x.__size,
      P = x.usage;
    return (
      n.bindBuffer(35345, S),
      n.bufferData(35345, b, P),
      n.bindBuffer(35345, null),
      n.bindBufferBase(35345, M, S),
      S
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
    const M = r[x.id],
      S = x.uniforms,
      b = x.__cache;
    n.bindBuffer(35345, M);
    for (let P = 0, B = S.length; P < B; P++) {
      const y = S[P];
      if (p(y, P, b) === !0) {
        const L = y.value,
          R = y.__offset;
        typeof L == 'number'
          ? ((y.__data[0] = L), n.bufferSubData(35345, R, y.__data))
          : (y.value.isMatrix3
              ? ((y.__data[0] = y.value.elements[0]),
                (y.__data[1] = y.value.elements[1]),
                (y.__data[2] = y.value.elements[2]),
                (y.__data[3] = y.value.elements[0]),
                (y.__data[4] = y.value.elements[3]),
                (y.__data[5] = y.value.elements[4]),
                (y.__data[6] = y.value.elements[5]),
                (y.__data[7] = y.value.elements[0]),
                (y.__data[8] = y.value.elements[6]),
                (y.__data[9] = y.value.elements[7]),
                (y.__data[10] = y.value.elements[8]),
                (y.__data[11] = y.value.elements[0]))
              : L.toArray(y.__data),
            n.bufferSubData(35345, R, y.__data));
      }
    }
    n.bindBuffer(35345, null);
  }
  function p(x, M, S) {
    const b = x.value;
    if (S[M] === void 0)
      return typeof b == 'number' ? (S[M] = b) : (S[M] = b.clone()), !0;
    if (typeof b == 'number') {
      if (S[M] !== b) return (S[M] = b), !0;
    } else {
      const P = S[M];
      if (P.equals(b) === !1) return P.copy(b), !0;
    }
    return !1;
  }
  function g(x) {
    const M = x.uniforms;
    let S = 0;
    const b = 16;
    let P = 0;
    for (let B = 0, y = M.length; B < y; B++) {
      const L = M[B],
        R = m(L);
      if (
        ((L.__data = new Float32Array(
          R.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (L.__offset = S),
        B > 0)
      ) {
        P = S % b;
        const Y = b - P;
        P !== 0 && Y - R.boundary < 0 && ((S += b - P), (L.__offset = S));
      }
      S += R.storage;
    }
    return (
      (P = S % b), P > 0 && (S += b - P), (x.__size = S), (x.__cache = {}), this
    );
  }
  function m(x) {
    const M = x.value,
      S = { boundary: 0, storage: 0 };
    return (
      typeof M == 'number'
        ? ((S.boundary = 4), (S.storage = 4))
        : M.isVector2
        ? ((S.boundary = 8), (S.storage = 8))
        : M.isVector3 || M.isColor
        ? ((S.boundary = 16), (S.storage = 12))
        : M.isVector4
        ? ((S.boundary = 16), (S.storage = 16))
        : M.isMatrix3
        ? ((S.boundary = 48), (S.storage = 48))
        : M.isMatrix4
        ? ((S.boundary = 64), (S.storage = 64))
        : M.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.'
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            M
          ),
      S
    );
  }
  function d(x) {
    const M = x.target;
    M.removeEventListener('dispose', d);
    const S = o.indexOf(M.__bindingPointIndex);
    o.splice(S, 1), n.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function _() {
    for (const x in r) n.deleteBuffer(r[x]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: _ };
}
function Ob() {
  const n = Qs('canvas');
  return (n.style.display = 'block'), n;
}
function Jh(n = {}) {
  this.isWebGLRenderer = !0;
  const e = n.canvas !== void 0 ? n.canvas : Ob(),
    t = n.context !== void 0 ? n.context : null,
    i = n.depth !== void 0 ? n.depth : !0,
    r = n.stencil !== void 0 ? n.stencil : !0,
    s = n.antialias !== void 0 ? n.antialias : !1,
    o = n.premultipliedAlpha !== void 0 ? n.premultipliedAlpha : !0,
    a = n.preserveDrawingBuffer !== void 0 ? n.preserveDrawingBuffer : !1,
    l = n.powerPreference !== void 0 ? n.powerPreference : 'default',
    c =
      n.failIfMajorPerformanceCaveat !== void 0
        ? n.failIfMajorPerformanceCaveat
        : !1;
  let u;
  t !== null
    ? (u = t.getContextAttributes().alpha)
    : (u = n.alpha !== void 0 ? n.alpha : !1);
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
    (this.outputEncoding = Ri),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Dn),
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
  const m = this;
  let d = !1,
    _ = 0,
    x = 0,
    M = null,
    S = -1,
    b = null;
  const P = new yt(),
    B = new yt();
  let y = null,
    L = e.width,
    R = e.height,
    Y = 1,
    de = null,
    G = null;
  const N = new yt(0, 0, L, R),
    te = new yt(0, 0, L, R);
  let ie = !1;
  const Z = new Xh();
  let W = !1,
    z = !1,
    X = null;
  const ue = new ft(),
    oe = new Fe(),
    le = new U(),
    we = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function V() {
    return M === null ? Y : 1;
  }
  let I = t;
  function ae(T, q) {
    for (let J = 0; J < T.length; J++) {
      const k = T[J],
        ne = e.getContext(k, q);
      if (ne !== null) return ne;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: i,
      stencil: r,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ('setAttribute' in e && e.setAttribute('data-engine', `three.js r${bl}`),
      e.addEventListener('webglcontextlost', Ce, !1),
      e.addEventListener('webglcontextrestored', Se, !1),
      e.addEventListener('webglcontextcreationerror', De, !1),
      I === null)
    ) {
      const q = ['webgl2', 'webgl', 'experimental-webgl'];
      if ((m.isWebGL1Renderer === !0 && q.shift(), (I = ae(q, T)), I === null))
        throw ae(q)
          ? new Error(
              'Error creating WebGL context with your selected attributes.'
            )
          : new Error('Error creating WebGL context.');
    }
    I.getShaderPrecisionFormat === void 0 &&
      (I.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (T) {
    throw (console.error('THREE.WebGLRenderer: ' + T.message), T);
  }
  let ce,
    ve,
    _e,
    Ee,
    E,
    A,
    H,
    j,
    K,
    he,
    pe,
    re,
    me,
    se,
    w,
    v,
    F,
    $,
    Q,
    fe,
    ye,
    C,
    O,
    Me;
  function Te() {
    (ce = new Xy(I)),
      (ve = new By(I, ce, n)),
      ce.init(ve),
      (C = new Cb(I, ce, ve)),
      (_e = new Tb(I, ce, ve)),
      (Ee = new Yy()),
      (E = new hb()),
      (A = new Ab(I, ce, _e, E, ve, C, Ee)),
      (H = new Vy(m)),
      (j = new qy(m)),
      (K = new iv(I, ve)),
      (O = new zy(I, ce, K, ve)),
      (he = new jy(I, K, Ee, O)),
      (pe = new Qy(I, he, K, Ee)),
      (Q = new Jy(I, ve, A)),
      (v = new ky(E)),
      (re = new fb(m, H, j, ce, ve, O, v)),
      (me = new Ib(m, E)),
      (se = new pb()),
      (w = new yb(ce, ve)),
      ($ = new Ny(m, H, j, _e, pe, u, o)),
      (F = new Eb(m, pe, ve)),
      (Me = new Fb(I, Ee, ve, _e)),
      (fe = new Uy(I, ce, Ee, ve)),
      (ye = new $y(I, ce, Ee, ve)),
      (Ee.programs = re.programs),
      (m.capabilities = ve),
      (m.extensions = ce),
      (m.properties = E),
      (m.renderLists = se),
      (m.shadowMap = F),
      (m.state = _e),
      (m.info = Ee);
  }
  Te();
  const be = new Db(m, I);
  (this.xr = be),
    (this.getContext = function () {
      return I;
    }),
    (this.getContextAttributes = function () {
      return I.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const T = ce.get('WEBGL_lose_context');
      T && T.loseContext();
    }),
    (this.forceContextRestore = function () {
      const T = ce.get('WEBGL_lose_context');
      T && T.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return Y;
    }),
    (this.setPixelRatio = function (T) {
      T !== void 0 && ((Y = T), this.setSize(L, R, !1));
    }),
    (this.getSize = function (T) {
      return T.set(L, R);
    }),
    (this.setSize = function (T, q, J) {
      if (be.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (L = T),
        (R = q),
        (e.width = Math.floor(T * Y)),
        (e.height = Math.floor(q * Y)),
        J !== !1 && ((e.style.width = T + 'px'), (e.style.height = q + 'px')),
        this.setViewport(0, 0, T, q);
    }),
    (this.getDrawingBufferSize = function (T) {
      return T.set(L * Y, R * Y).floor();
    }),
    (this.setDrawingBufferSize = function (T, q, J) {
      (L = T),
        (R = q),
        (Y = J),
        (e.width = Math.floor(T * J)),
        (e.height = Math.floor(q * J)),
        this.setViewport(0, 0, T, q);
    }),
    (this.getCurrentViewport = function (T) {
      return T.copy(P);
    }),
    (this.getViewport = function (T) {
      return T.copy(N);
    }),
    (this.setViewport = function (T, q, J, k) {
      T.isVector4 ? N.set(T.x, T.y, T.z, T.w) : N.set(T, q, J, k),
        _e.viewport(P.copy(N).multiplyScalar(Y).floor());
    }),
    (this.getScissor = function (T) {
      return T.copy(te);
    }),
    (this.setScissor = function (T, q, J, k) {
      T.isVector4 ? te.set(T.x, T.y, T.z, T.w) : te.set(T, q, J, k),
        _e.scissor(B.copy(te).multiplyScalar(Y).floor());
    }),
    (this.getScissorTest = function () {
      return ie;
    }),
    (this.setScissorTest = function (T) {
      _e.setScissorTest((ie = T));
    }),
    (this.setOpaqueSort = function (T) {
      de = T;
    }),
    (this.setTransparentSort = function (T) {
      G = T;
    }),
    (this.getClearColor = function (T) {
      return T.copy($.getClearColor());
    }),
    (this.setClearColor = function () {
      $.setClearColor.apply($, arguments);
    }),
    (this.getClearAlpha = function () {
      return $.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      $.setClearAlpha.apply($, arguments);
    }),
    (this.clear = function (T = !0, q = !0, J = !0) {
      let k = 0;
      T && (k |= 16384), q && (k |= 256), J && (k |= 1024), I.clear(k);
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
        e.removeEventListener('webglcontextrestored', Se, !1),
        e.removeEventListener('webglcontextcreationerror', De, !1),
        se.dispose(),
        w.dispose(),
        E.dispose(),
        H.dispose(),
        j.dispose(),
        pe.dispose(),
        O.dispose(),
        Me.dispose(),
        re.dispose(),
        be.dispose(),
        be.removeEventListener('sessionstart', Ae),
        be.removeEventListener('sessionend', Le),
        X && (X.dispose(), (X = null)),
        qe.stop();
    });
  function Ce(T) {
    T.preventDefault(),
      console.log('THREE.WebGLRenderer: Context Lost.'),
      (d = !0);
  }
  function Se() {
    console.log('THREE.WebGLRenderer: Context Restored.'), (d = !1);
    const T = Ee.autoReset,
      q = F.enabled,
      J = F.autoUpdate,
      k = F.needsUpdate,
      ne = F.type;
    Te(),
      (Ee.autoReset = T),
      (F.enabled = q),
      (F.autoUpdate = J),
      (F.needsUpdate = k),
      (F.type = ne);
  }
  function De(T) {
    console.error(
      'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
      T.statusMessage
    );
  }
  function ke(T) {
    const q = T.target;
    q.removeEventListener('dispose', ke), Ye(q);
  }
  function Ye(T) {
    D(T), E.remove(T);
  }
  function D(T) {
    const q = E.get(T).programs;
    q !== void 0 &&
      (q.forEach(function (J) {
        re.releaseProgram(J);
      }),
      T.isShaderMaterial && re.releaseShaderCache(T));
  }
  (this.renderBufferDirect = function (T, q, J, k, ne, Re) {
    q === null && (q = we);
    const Ie = ne.isMesh && ne.matrixWorld.determinant() < 0,
      Be = id(T, q, J, k, ne);
    _e.setMaterial(k, Ie);
    let ze = J.index;
    const Xe = J.attributes.position;
    if (ze === null) {
      if (Xe === void 0 || Xe.count === 0) return;
    } else if (ze.count === 0) return;
    let Ve = 1;
    k.wireframe === !0 && ((ze = he.getWireframeAttribute(J)), (Ve = 2)),
      O.setup(ne, k, Be, J, ze);
    let He,
      nt = fe;
    ze !== null && ((He = K.get(ze)), (nt = ye), nt.setIndex(He));
    const oi = ze !== null ? ze.count : Xe.count,
      zi = J.drawRange.start * Ve,
      Ui = J.drawRange.count * Ve,
      un = Re !== null ? Re.start * Ve : 0,
      je = Re !== null ? Re.count * Ve : 1 / 0,
      Bi = Math.max(zi, un),
      st = Math.min(oi, zi + Ui, un + je) - 1,
      Vt = Math.max(0, st - Bi + 1);
    if (Vt !== 0) {
      if (ne.isMesh)
        k.wireframe === !0
          ? (_e.setLineWidth(k.wireframeLinewidth * V()), nt.setMode(1))
          : nt.setMode(4);
      else if (ne.isLine) {
        let On = k.linewidth;
        On === void 0 && (On = 1),
          _e.setLineWidth(On * V()),
          ne.isLineSegments
            ? nt.setMode(1)
            : ne.isLineLoop
            ? nt.setMode(2)
            : nt.setMode(3);
      } else ne.isPoints ? nt.setMode(0) : ne.isSprite && nt.setMode(4);
      if (ne.isInstancedMesh) nt.renderInstances(Bi, Vt, ne.count);
      else if (J.isInstancedBufferGeometry) {
        const On = Math.min(J.instanceCount, J._maxInstanceCount);
        nt.renderInstances(Bi, Vt, On);
      } else nt.render(Bi, Vt);
    }
  }),
    (this.compile = function (T, q) {
      function J(k, ne, Re) {
        k.transparent === !0 && k.side === $n
          ? ((k.side = jt),
            (k.needsUpdate = !0),
            kt(k, ne, Re),
            (k.side = Sr),
            (k.needsUpdate = !0),
            kt(k, ne, Re),
            (k.side = $n))
          : kt(k, ne, Re);
      }
      (h = w.get(T)),
        h.init(),
        g.push(h),
        T.traverseVisible(function (k) {
          k.isLight &&
            k.layers.test(q.layers) &&
            (h.pushLight(k), k.castShadow && h.pushShadow(k));
        }),
        h.setupLights(m.physicallyCorrectLights),
        T.traverse(function (k) {
          const ne = k.material;
          if (ne)
            if (Array.isArray(ne))
              for (let Re = 0; Re < ne.length; Re++) {
                const Ie = ne[Re];
                J(Ie, T, k);
              }
            else J(ne, T, k);
        }),
        g.pop(),
        (h = null);
    });
  let ee = null;
  function ge(T) {
    ee && ee(T);
  }
  function Ae() {
    qe.stop();
  }
  function Le() {
    qe.start();
  }
  const qe = new jh();
  qe.setAnimationLoop(ge),
    typeof self < 'u' && qe.setContext(self),
    (this.setAnimationLoop = function (T) {
      (ee = T), be.setAnimationLoop(T), T === null ? qe.stop() : qe.start();
    }),
    be.addEventListener('sessionstart', Ae),
    be.addEventListener('sessionend', Le),
    (this.render = function (T, q) {
      if (q !== void 0 && q.isCamera !== !0) {
        console.error(
          'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
        );
        return;
      }
      if (d === !0) return;
      T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
        q.parent === null &&
          q.matrixWorldAutoUpdate === !0 &&
          q.updateMatrixWorld(),
        be.enabled === !0 &&
          be.isPresenting === !0 &&
          (be.cameraAutoUpdate === !0 && be.updateCamera(q),
          (q = be.getCamera())),
        T.isScene === !0 && T.onBeforeRender(m, T, q, M),
        (h = w.get(T, g.length)),
        h.init(),
        g.push(h),
        ue.multiplyMatrices(q.projectionMatrix, q.matrixWorldInverse),
        Z.setFromProjectionMatrix(ue),
        (z = this.localClippingEnabled),
        (W = v.init(this.clippingPlanes, z, q)),
        (f = se.get(T, p.length)),
        f.init(),
        p.push(f),
        pt(T, q, 0, m.sortObjects),
        f.finish(),
        m.sortObjects === !0 && f.sort(de, G),
        W === !0 && v.beginShadows();
      const J = h.state.shadowsArray;
      if (
        (F.render(J, T, q),
        W === !0 && v.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        $.render(f, T),
        h.setupLights(m.physicallyCorrectLights),
        q.isArrayCamera)
      ) {
        const k = q.cameras;
        for (let ne = 0, Re = k.length; ne < Re; ne++) {
          const Ie = k[ne];
          Mt(f, T, Ie, Ie.viewport);
        }
      } else Mt(f, T, q);
      M !== null &&
        (A.updateMultisampleRenderTarget(M), A.updateRenderTargetMipmap(M)),
        T.isScene === !0 && T.onAfterRender(m, T, q),
        O.resetDefaultState(),
        (S = -1),
        (b = null),
        g.pop(),
        g.length > 0 ? (h = g[g.length - 1]) : (h = null),
        p.pop(),
        p.length > 0 ? (f = p[p.length - 1]) : (f = null);
    });
  function pt(T, q, J, k) {
    if (T.visible === !1) return;
    if (T.layers.test(q.layers)) {
      if (T.isGroup) J = T.renderOrder;
      else if (T.isLOD) T.autoUpdate === !0 && T.update(q);
      else if (T.isLight) h.pushLight(T), T.castShadow && h.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || Z.intersectsSprite(T)) {
          k && le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);
          const Ie = pe.update(T),
            Be = T.material;
          Be.visible && f.push(T, Ie, Be, J, le.z, null);
        }
      } else if (
        (T.isMesh || T.isLine || T.isPoints) &&
        (T.isSkinnedMesh &&
          T.skeleton.frame !== Ee.render.frame &&
          (T.skeleton.update(), (T.skeleton.frame = Ee.render.frame)),
        !T.frustumCulled || Z.intersectsObject(T))
      ) {
        k && le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);
        const Ie = pe.update(T),
          Be = T.material;
        if (Array.isArray(Be)) {
          const ze = Ie.groups;
          for (let Xe = 0, Ve = ze.length; Xe < Ve; Xe++) {
            const He = ze[Xe],
              nt = Be[He.materialIndex];
            nt && nt.visible && f.push(T, Ie, nt, J, le.z, He);
          }
        } else Be.visible && f.push(T, Ie, Be, J, le.z, null);
      }
    }
    const Re = T.children;
    for (let Ie = 0, Be = Re.length; Ie < Be; Ie++) pt(Re[Ie], q, J, k);
  }
  function Mt(T, q, J, k) {
    const ne = T.opaque,
      Re = T.transmissive,
      Ie = T.transparent;
    h.setupLightsView(J),
      Re.length > 0 && si(ne, q, J),
      k && _e.viewport(P.copy(k)),
      ne.length > 0 && et(ne, q, J),
      Re.length > 0 && et(Re, q, J),
      Ie.length > 0 && et(Ie, q, J),
      _e.buffers.depth.setTest(!0),
      _e.buffers.depth.setMask(!0),
      _e.buffers.color.setMask(!0),
      _e.setPolygonOffset(!1);
  }
  function si(T, q, J) {
    const k = ve.isWebGL2;
    X === null &&
      (X = new Di(1, 1, {
        generateMipmaps: !0,
        type: ce.has('EXT_color_buffer_half_float') ? ss : Pi,
        minFilter: _o,
        samples: k && s === !0 ? 4 : 0,
      })),
      m.getDrawingBufferSize(oe),
      k ? X.setSize(oe.x, oe.y) : X.setSize(Ga(oe.x), Ga(oe.y));
    const ne = m.getRenderTarget();
    m.setRenderTarget(X), m.clear();
    const Re = m.toneMapping;
    (m.toneMapping = Dn),
      et(T, q, J),
      (m.toneMapping = Re),
      A.updateMultisampleRenderTarget(X),
      A.updateRenderTargetMipmap(X),
      m.setRenderTarget(ne);
  }
  function et(T, q, J) {
    const k = q.isScene === !0 ? q.overrideMaterial : null;
    for (let ne = 0, Re = T.length; ne < Re; ne++) {
      const Ie = T[ne],
        Be = Ie.object,
        ze = Ie.geometry,
        Xe = k === null ? Ie.material : k,
        Ve = Ie.group;
      Be.layers.test(J.layers) && Mn(Be, q, J, ze, Xe, Ve);
    }
  }
  function Mn(T, q, J, k, ne, Re) {
    T.onBeforeRender(m, q, J, k, ne, Re),
      T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse, T.matrixWorld),
      T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
      ne.onBeforeRender(m, q, J, k, T, Re),
      ne.transparent === !0 && ne.side === $n
        ? ((ne.side = jt),
          (ne.needsUpdate = !0),
          m.renderBufferDirect(J, q, k, ne, T, Re),
          (ne.side = Sr),
          (ne.needsUpdate = !0),
          m.renderBufferDirect(J, q, k, ne, T, Re),
          (ne.side = $n))
        : m.renderBufferDirect(J, q, k, ne, T, Re),
      T.onAfterRender(m, q, J, k, ne, Re);
  }
  function kt(T, q, J) {
    q.isScene !== !0 && (q = we);
    const k = E.get(T),
      ne = h.state.lights,
      Re = h.state.shadowsArray,
      Ie = ne.state.version,
      Be = re.getParameters(T, ne.state, Re, q, J),
      ze = re.getProgramCacheKey(Be);
    let Xe = k.programs;
    (k.environment = T.isMeshStandardMaterial ? q.environment : null),
      (k.fog = q.fog),
      (k.envMap = (T.isMeshStandardMaterial ? j : H).get(
        T.envMap || k.environment
      )),
      Xe === void 0 &&
        (T.addEventListener('dispose', ke),
        (Xe = new Map()),
        (k.programs = Xe));
    let Ve = Xe.get(ze);
    if (Ve !== void 0) {
      if (k.currentProgram === Ve && k.lightsStateVersion === Ie)
        return Tl(T, Be), Ve;
    } else
      (Be.uniforms = re.getUniforms(T)),
        T.onBuild(J, Be, m),
        T.onBeforeCompile(Be, m),
        (Ve = re.acquireProgram(Be, ze)),
        Xe.set(ze, Ve),
        (k.uniforms = Be.uniforms);
    const He = k.uniforms;
    ((!T.isShaderMaterial && !T.isRawShaderMaterial) || T.clipping === !0) &&
      (He.clippingPlanes = v.uniform),
      Tl(T, Be),
      (k.needsLights = sd(T)),
      (k.lightsStateVersion = Ie),
      k.needsLights &&
        ((He.ambientLightColor.value = ne.state.ambient),
        (He.lightProbe.value = ne.state.probe),
        (He.directionalLights.value = ne.state.directional),
        (He.directionalLightShadows.value = ne.state.directionalShadow),
        (He.spotLights.value = ne.state.spot),
        (He.spotLightShadows.value = ne.state.spotShadow),
        (He.rectAreaLights.value = ne.state.rectArea),
        (He.ltc_1.value = ne.state.rectAreaLTC1),
        (He.ltc_2.value = ne.state.rectAreaLTC2),
        (He.pointLights.value = ne.state.point),
        (He.pointLightShadows.value = ne.state.pointShadow),
        (He.hemisphereLights.value = ne.state.hemi),
        (He.directionalShadowMap.value = ne.state.directionalShadowMap),
        (He.directionalShadowMatrix.value = ne.state.directionalShadowMatrix),
        (He.spotShadowMap.value = ne.state.spotShadowMap),
        (He.spotLightMatrix.value = ne.state.spotLightMatrix),
        (He.spotLightMap.value = ne.state.spotLightMap),
        (He.pointShadowMap.value = ne.state.pointShadowMap),
        (He.pointShadowMatrix.value = ne.state.pointShadowMatrix));
    const nt = Ve.getUniforms(),
      oi = Ws.seqWithValue(nt.seq, He);
    return (k.currentProgram = Ve), (k.uniformsList = oi), Ve;
  }
  function Tl(T, q) {
    const J = E.get(T);
    (J.outputEncoding = q.outputEncoding),
      (J.instancing = q.instancing),
      (J.skinning = q.skinning),
      (J.morphTargets = q.morphTargets),
      (J.morphNormals = q.morphNormals),
      (J.morphColors = q.morphColors),
      (J.morphTargetsCount = q.morphTargetsCount),
      (J.numClippingPlanes = q.numClippingPlanes),
      (J.numIntersection = q.numClipIntersection),
      (J.vertexAlphas = q.vertexAlphas),
      (J.vertexTangents = q.vertexTangents),
      (J.toneMapping = q.toneMapping);
  }
  function id(T, q, J, k, ne) {
    q.isScene !== !0 && (q = we), A.resetTextureUnits();
    const Re = q.fog,
      Ie = k.isMeshStandardMaterial ? q.environment : null,
      Be =
        M === null
          ? m.outputEncoding
          : M.isXRRenderTarget === !0
          ? M.texture.encoding
          : Ri,
      ze = (k.isMeshStandardMaterial ? j : H).get(k.envMap || Ie),
      Xe =
        k.vertexColors === !0 &&
        !!J.attributes.color &&
        J.attributes.color.itemSize === 4,
      Ve = !!k.normalMap && !!J.attributes.tangent,
      He = !!J.morphAttributes.position,
      nt = !!J.morphAttributes.normal,
      oi = !!J.morphAttributes.color,
      zi = k.toneMapped ? m.toneMapping : Dn,
      Ui =
        J.morphAttributes.position ||
        J.morphAttributes.normal ||
        J.morphAttributes.color,
      un = Ui !== void 0 ? Ui.length : 0,
      je = E.get(k),
      Bi = h.state.lights;
    if (W === !0 && (z === !0 || T !== b)) {
      const Nt = T === b && k.id === S;
      v.setState(k, T, Nt);
    }
    let st = !1;
    k.version === je.__version
      ? ((je.needsLights && je.lightsStateVersion !== Bi.state.version) ||
          je.outputEncoding !== Be ||
          (ne.isInstancedMesh && je.instancing === !1) ||
          (!ne.isInstancedMesh && je.instancing === !0) ||
          (ne.isSkinnedMesh && je.skinning === !1) ||
          (!ne.isSkinnedMesh && je.skinning === !0) ||
          je.envMap !== ze ||
          (k.fog === !0 && je.fog !== Re) ||
          (je.numClippingPlanes !== void 0 &&
            (je.numClippingPlanes !== v.numPlanes ||
              je.numIntersection !== v.numIntersection)) ||
          je.vertexAlphas !== Xe ||
          je.vertexTangents !== Ve ||
          je.morphTargets !== He ||
          je.morphNormals !== nt ||
          je.morphColors !== oi ||
          je.toneMapping !== zi ||
          (ve.isWebGL2 === !0 && je.morphTargetsCount !== un)) &&
        (st = !0)
      : ((st = !0), (je.__version = k.version));
    let Vt = je.currentProgram;
    st === !0 && (Vt = kt(k, q, ne));
    let On = !1,
      Fr = !1,
      yo = !1;
    const At = Vt.getUniforms(),
      ai = je.uniforms;
    if (
      (_e.useProgram(Vt.program) && ((On = !0), (Fr = !0), (yo = !0)),
      k.id !== S && ((S = k.id), (Fr = !0)),
      On || b !== T)
    ) {
      if (
        (At.setValue(I, 'projectionMatrix', T.projectionMatrix),
        ve.logarithmicDepthBuffer &&
          At.setValue(I, 'logDepthBufFC', 2 / (Math.log(T.far + 1) / Math.LN2)),
        b !== T && ((b = T), (Fr = !0), (yo = !0)),
        k.isShaderMaterial ||
          k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshStandardMaterial ||
          k.envMap)
      ) {
        const Nt = At.map.cameraPosition;
        Nt !== void 0 &&
          Nt.setValue(I, le.setFromMatrixPosition(T.matrixWorld));
      }
      (k.isMeshPhongMaterial ||
        k.isMeshToonMaterial ||
        k.isMeshLambertMaterial ||
        k.isMeshBasicMaterial ||
        k.isMeshStandardMaterial ||
        k.isShaderMaterial) &&
        At.setValue(I, 'isOrthographic', T.isOrthographicCamera === !0),
        (k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshLambertMaterial ||
          k.isMeshBasicMaterial ||
          k.isMeshStandardMaterial ||
          k.isShaderMaterial ||
          k.isShadowMaterial ||
          ne.isSkinnedMesh) &&
          At.setValue(I, 'viewMatrix', T.matrixWorldInverse);
    }
    if (ne.isSkinnedMesh) {
      At.setOptional(I, ne, 'bindMatrix'),
        At.setOptional(I, ne, 'bindMatrixInverse');
      const Nt = ne.skeleton;
      Nt &&
        (ve.floatVertexTextures
          ? (Nt.boneTexture === null && Nt.computeBoneTexture(),
            At.setValue(I, 'boneTexture', Nt.boneTexture, A),
            At.setValue(I, 'boneTextureSize', Nt.boneTextureSize))
          : console.warn(
              'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'
            ));
    }
    const Mo = J.morphAttributes;
    if (
      ((Mo.position !== void 0 ||
        Mo.normal !== void 0 ||
        (Mo.color !== void 0 && ve.isWebGL2 === !0)) &&
        Q.update(ne, J, k, Vt),
      (Fr || je.receiveShadow !== ne.receiveShadow) &&
        ((je.receiveShadow = ne.receiveShadow),
        At.setValue(I, 'receiveShadow', ne.receiveShadow)),
      k.isMeshGouraudMaterial &&
        k.envMap !== null &&
        ((ai.envMap.value = ze),
        (ai.flipEnvMap.value =
          ze.isCubeTexture && ze.isRenderTargetTexture === !1 ? -1 : 1)),
      Fr &&
        (At.setValue(I, 'toneMappingExposure', m.toneMappingExposure),
        je.needsLights && rd(ai, yo),
        Re && k.fog === !0 && me.refreshFogUniforms(ai, Re),
        me.refreshMaterialUniforms(ai, k, Y, R, X),
        Ws.upload(I, je.uniformsList, ai, A)),
      k.isShaderMaterial &&
        k.uniformsNeedUpdate === !0 &&
        (Ws.upload(I, je.uniformsList, ai, A), (k.uniformsNeedUpdate = !1)),
      k.isSpriteMaterial && At.setValue(I, 'center', ne.center),
      At.setValue(I, 'modelViewMatrix', ne.modelViewMatrix),
      At.setValue(I, 'normalMatrix', ne.normalMatrix),
      At.setValue(I, 'modelMatrix', ne.matrixWorld),
      k.isShaderMaterial || k.isRawShaderMaterial)
    ) {
      const Nt = k.uniformsGroups;
      for (let bo = 0, od = Nt.length; bo < od; bo++)
        if (ve.isWebGL2) {
          const Al = Nt[bo];
          Me.update(Al, Vt), Me.bind(Al, Vt);
        } else
          console.warn(
            'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.'
          );
    }
    return Vt;
  }
  function rd(T, q) {
    (T.ambientLightColor.needsUpdate = q),
      (T.lightProbe.needsUpdate = q),
      (T.directionalLights.needsUpdate = q),
      (T.directionalLightShadows.needsUpdate = q),
      (T.pointLights.needsUpdate = q),
      (T.pointLightShadows.needsUpdate = q),
      (T.spotLights.needsUpdate = q),
      (T.spotLightShadows.needsUpdate = q),
      (T.rectAreaLights.needsUpdate = q),
      (T.hemisphereLights.needsUpdate = q);
  }
  function sd(T) {
    return (
      T.isMeshLambertMaterial ||
      T.isMeshToonMaterial ||
      T.isMeshPhongMaterial ||
      T.isMeshStandardMaterial ||
      T.isShadowMaterial ||
      (T.isShaderMaterial && T.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return x;
    }),
    (this.getRenderTarget = function () {
      return M;
    }),
    (this.setRenderTargetTextures = function (T, q, J) {
      (E.get(T.texture).__webglTexture = q),
        (E.get(T.depthTexture).__webglTexture = J);
      const k = E.get(T);
      (k.__hasExternalTextures = !0),
        k.__hasExternalTextures &&
          ((k.__autoAllocateDepthBuffer = J === void 0),
          k.__autoAllocateDepthBuffer ||
            (ce.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'
              ),
              (k.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (T, q) {
      const J = E.get(T);
      (J.__webglFramebuffer = q), (J.__useDefaultFramebuffer = q === void 0);
    }),
    (this.setRenderTarget = function (T, q = 0, J = 0) {
      (M = T), (_ = q), (x = J);
      let k = !0,
        ne = null,
        Re = !1,
        Ie = !1;
      if (T) {
        const ze = E.get(T);
        ze.__useDefaultFramebuffer !== void 0
          ? (_e.bindFramebuffer(36160, null), (k = !1))
          : ze.__webglFramebuffer === void 0
          ? A.setupRenderTarget(T)
          : ze.__hasExternalTextures &&
            A.rebindTextures(
              T,
              E.get(T.texture).__webglTexture,
              E.get(T.depthTexture).__webglTexture
            );
        const Xe = T.texture;
        (Xe.isData3DTexture ||
          Xe.isDataArrayTexture ||
          Xe.isCompressedArrayTexture) &&
          (Ie = !0);
        const Ve = E.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget
          ? ((ne = Ve[q]), (Re = !0))
          : ve.isWebGL2 && T.samples > 0 && A.useMultisampledRTT(T) === !1
          ? (ne = E.get(T).__webglMultisampledFramebuffer)
          : (ne = Ve),
          P.copy(T.viewport),
          B.copy(T.scissor),
          (y = T.scissorTest);
      } else
        P.copy(N).multiplyScalar(Y).floor(),
          B.copy(te).multiplyScalar(Y).floor(),
          (y = ie);
      if (
        (_e.bindFramebuffer(36160, ne) &&
          ve.drawBuffers &&
          k &&
          _e.drawBuffers(T, ne),
        _e.viewport(P),
        _e.scissor(B),
        _e.setScissorTest(y),
        Re)
      ) {
        const ze = E.get(T.texture);
        I.framebufferTexture2D(36160, 36064, 34069 + q, ze.__webglTexture, J);
      } else if (Ie) {
        const ze = E.get(T.texture),
          Xe = q || 0;
        I.framebufferTextureLayer(36160, 36064, ze.__webglTexture, J || 0, Xe);
      }
      S = -1;
    }),
    (this.readRenderTargetPixels = function (T, q, J, k, ne, Re, Ie) {
      if (!(T && T.isWebGLRenderTarget)) {
        console.error(
          'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
        );
        return;
      }
      let Be = E.get(T).__webglFramebuffer;
      if ((T.isWebGLCubeRenderTarget && Ie !== void 0 && (Be = Be[Ie]), Be)) {
        _e.bindFramebuffer(36160, Be);
        try {
          const ze = T.texture,
            Xe = ze.format,
            Ve = ze.type;
          if (Xe !== nn && C.convert(Xe) !== I.getParameter(35739)) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
            );
            return;
          }
          const He =
            Ve === ss &&
            (ce.has('EXT_color_buffer_half_float') ||
              (ve.isWebGL2 && ce.has('EXT_color_buffer_float')));
          if (
            Ve !== Pi &&
            C.convert(Ve) !== I.getParameter(35738) &&
            !(
              Ve === bi &&
              (ve.isWebGL2 ||
                ce.has('OES_texture_float') ||
                ce.has('WEBGL_color_buffer_float'))
            ) &&
            !He
          ) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
            );
            return;
          }
          q >= 0 &&
            q <= T.width - k &&
            J >= 0 &&
            J <= T.height - ne &&
            I.readPixels(q, J, k, ne, C.convert(Xe), C.convert(Ve), Re);
        } finally {
          const ze = M !== null ? E.get(M).__webglFramebuffer : null;
          _e.bindFramebuffer(36160, ze);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (T, q, J = 0) {
      const k = Math.pow(2, -J),
        ne = Math.floor(q.image.width * k),
        Re = Math.floor(q.image.height * k);
      A.setTexture2D(q, 0),
        I.copyTexSubImage2D(3553, J, 0, 0, T.x, T.y, ne, Re),
        _e.unbindTexture();
    }),
    (this.copyTextureToTexture = function (T, q, J, k = 0) {
      const ne = q.image.width,
        Re = q.image.height,
        Ie = C.convert(J.format),
        Be = C.convert(J.type);
      A.setTexture2D(J, 0),
        I.pixelStorei(37440, J.flipY),
        I.pixelStorei(37441, J.premultiplyAlpha),
        I.pixelStorei(3317, J.unpackAlignment),
        q.isDataTexture
          ? I.texSubImage2D(3553, k, T.x, T.y, ne, Re, Ie, Be, q.image.data)
          : q.isCompressedTexture
          ? I.compressedTexSubImage2D(
              3553,
              k,
              T.x,
              T.y,
              q.mipmaps[0].width,
              q.mipmaps[0].height,
              Ie,
              q.mipmaps[0].data
            )
          : I.texSubImage2D(3553, k, T.x, T.y, Ie, Be, q.image),
        k === 0 && J.generateMipmaps && I.generateMipmap(3553),
        _e.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (T, q, J, k, ne = 0) {
      if (m.isWebGL1Renderer) {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.'
        );
        return;
      }
      const Re = T.max.x - T.min.x + 1,
        Ie = T.max.y - T.min.y + 1,
        Be = T.max.z - T.min.z + 1,
        ze = C.convert(k.format),
        Xe = C.convert(k.type);
      let Ve;
      if (k.isData3DTexture) A.setTexture3D(k, 0), (Ve = 32879);
      else if (k.isDataArrayTexture) A.setTexture2DArray(k, 0), (Ve = 35866);
      else {
        console.warn(
          'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
        );
        return;
      }
      I.pixelStorei(37440, k.flipY),
        I.pixelStorei(37441, k.premultiplyAlpha),
        I.pixelStorei(3317, k.unpackAlignment);
      const He = I.getParameter(3314),
        nt = I.getParameter(32878),
        oi = I.getParameter(3316),
        zi = I.getParameter(3315),
        Ui = I.getParameter(32877),
        un = J.isCompressedTexture ? J.mipmaps[0] : J.image;
      I.pixelStorei(3314, un.width),
        I.pixelStorei(32878, un.height),
        I.pixelStorei(3316, T.min.x),
        I.pixelStorei(3315, T.min.y),
        I.pixelStorei(32877, T.min.z),
        J.isDataTexture || J.isData3DTexture
          ? I.texSubImage3D(Ve, ne, q.x, q.y, q.z, Re, Ie, Be, ze, Xe, un.data)
          : J.isCompressedArrayTexture
          ? (console.warn(
              'THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'
            ),
            I.compressedTexSubImage3D(
              Ve,
              ne,
              q.x,
              q.y,
              q.z,
              Re,
              Ie,
              Be,
              ze,
              un.data
            ))
          : I.texSubImage3D(Ve, ne, q.x, q.y, q.z, Re, Ie, Be, ze, Xe, un),
        I.pixelStorei(3314, He),
        I.pixelStorei(32878, nt),
        I.pixelStorei(3316, oi),
        I.pixelStorei(3315, zi),
        I.pixelStorei(32877, Ui),
        ne === 0 && k.generateMipmaps && I.generateMipmap(Ve),
        _e.unbindTexture();
    }),
    (this.initTexture = function (T) {
      T.isCubeTexture
        ? A.setTextureCube(T, 0)
        : T.isData3DTexture
        ? A.setTexture3D(T, 0)
        : T.isDataArrayTexture || T.isCompressedArrayTexture
        ? A.setTexture2DArray(T, 0)
        : A.setTexture2D(T, 0),
        _e.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (x = 0), (M = null), _e.reset(), O.reset();
    }),
    typeof __THREE_DEVTOOLS__ < 'u' &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent('observe', { detail: this })
      );
}
class Nb extends Jh {}
Nb.prototype.isWebGL1Renderer = !0;
class zb extends Rt {
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
class Ub {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = ka),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = ti());
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
  copyAt(e, t, i) {
    (e *= this.stride), (i *= t.stride);
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ti()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ti()),
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
const Ct = new U();
class eo {
  constructor(e, t, i, r = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ''),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = i),
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
    for (let t = 0, i = this.data.count; t < i; t++)
      Ct.fromBufferAttribute(this, t),
        Ct.applyMatrix4(e),
        this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Ct.fromBufferAttribute(this, t),
        Ct.applyNormalMatrix(e),
        this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Ct.fromBufferAttribute(this, t),
        Ct.transformDirection(e),
        this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = Ke(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Yn(t, this.array)), t;
  }
  setXY(e, t, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = Ke(t, this.array)), (i = Ke(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Ke(t, this.array)),
        (i = Ke(i, this.array)),
        (r = Ke(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, i, r, s) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Ke(t, this.array)),
        (i = Ke(i, this.array)),
        (r = Ke(r, this.array)),
        (s = Ke(s, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
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
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[r + s]);
      }
      return new an(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new eo(
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
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
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
class Qh extends Dr {
  constructor(e) {
    super(),
      (this.isSpriteMaterial = !0),
      (this.type = 'SpriteMaterial'),
      (this.color = new Qe(16777215)),
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
let ir;
const Vr = new U(),
  rr = new U(),
  sr = new U(),
  or = new Fe(),
  Gr = new Fe(),
  ed = new ft(),
  Fs = new U(),
  Hr = new U(),
  Os = new U(),
  Bu = new Fe(),
  da = new Fe(),
  ku = new Fe();
class Bb extends Rt {
  constructor(e) {
    if (
      (super(), (this.isSprite = !0), (this.type = 'Sprite'), ir === void 0)
    ) {
      ir = new yn();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        i = new Ub(t, 5);
      ir.setIndex([0, 1, 2, 0, 2, 3]),
        ir.setAttribute('position', new eo(i, 3, 0, !1)),
        ir.setAttribute('uv', new eo(i, 2, 3, !1));
    }
    (this.geometry = ir),
      (this.material = e !== void 0 ? e : new Qh()),
      (this.center = new Fe(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      rr.setFromMatrixScale(this.matrixWorld),
      ed.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      sr.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        rr.multiplyScalar(-sr.z);
    const i = this.material.rotation;
    let r, s;
    i !== 0 && ((s = Math.cos(i)), (r = Math.sin(i)));
    const o = this.center;
    Ns(Fs.set(-0.5, -0.5, 0), sr, o, rr, r, s),
      Ns(Hr.set(0.5, -0.5, 0), sr, o, rr, r, s),
      Ns(Os.set(0.5, 0.5, 0), sr, o, rr, r, s),
      Bu.set(0, 0),
      da.set(1, 0),
      ku.set(1, 1);
    let a = e.ray.intersectTriangle(Fs, Hr, Os, !1, Vr);
    if (
      a === null &&
      (Ns(Hr.set(-0.5, 0.5, 0), sr, o, rr, r, s),
      da.set(0, 1),
      (a = e.ray.intersectTriangle(Fs, Os, Hr, !1, Vr)),
      a === null)
    )
      return;
    const l = e.ray.origin.distanceTo(Vr);
    l < e.near ||
      l > e.far ||
      t.push({
        distance: l,
        point: Vr.clone(),
        uv: gn.getUV(Vr, Fs, Hr, Os, Bu, da, ku, new Fe()),
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
function Ns(n, e, t, i, r, s) {
  or.subVectors(n, t).addScalar(0.5).multiply(i),
    r !== void 0
      ? ((Gr.x = s * or.x - r * or.y), (Gr.y = r * or.x + s * or.y))
      : Gr.copy(or),
    n.copy(e),
    (n.x += Gr.x),
    (n.y += Gr.y),
    n.applyMatrix4(ed);
}
class td extends Dr {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = 'LineBasicMaterial'),
      (this.color = new Qe(16777215)),
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
const Vu = new U(),
  Gu = new U(),
  Hu = new ft(),
  pa = new Bh(),
  zs = new vo();
class kb extends Rt {
  constructor(e = new yn(), t = new td()) {
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
        i = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Vu.fromBufferAttribute(t, r - 1),
          Gu.fromBufferAttribute(t, r),
          (i[r] = i[r - 1]),
          (i[r] += Vu.distanceTo(Gu));
      e.setAttribute('lineDistance', new ln(i, 1));
    } else
      console.warn(
        'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
      );
    return this;
  }
  raycast(e, t) {
    const i = this.geometry,
      r = this.matrixWorld,
      s = e.params.Line.threshold,
      o = i.drawRange;
    if (
      (i.boundingSphere === null && i.computeBoundingSphere(),
      zs.copy(i.boundingSphere),
      zs.applyMatrix4(r),
      (zs.radius += s),
      e.ray.intersectsSphere(zs) === !1)
    )
      return;
    Hu.copy(r).invert(), pa.copy(e.ray).applyMatrix4(Hu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = new U(),
      u = new U(),
      f = new U(),
      h = new U(),
      p = this.isLineSegments ? 2 : 1,
      g = i.index,
      d = i.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, o.start),
        x = Math.min(g.count, o.start + o.count);
      for (let M = _, S = x - 1; M < S; M += p) {
        const b = g.getX(M),
          P = g.getX(M + 1);
        if (
          (c.fromBufferAttribute(d, b),
          u.fromBufferAttribute(d, P),
          pa.distanceSqToSegment(c, u, h, f) > l)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const y = e.ray.origin.distanceTo(h);
        y < e.near ||
          y > e.far ||
          t.push({
            distance: y,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const _ = Math.max(0, o.start),
        x = Math.min(d.count, o.start + o.count);
      for (let M = _, S = x - 1; M < S; M += p) {
        if (
          (c.fromBufferAttribute(d, M),
          u.fromBufferAttribute(d, M + 1),
          pa.distanceSqToSegment(c, u, h, f) > l)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const P = e.ray.origin.distanceTo(h);
        P < e.near ||
          P > e.far ||
          t.push({
            distance: P,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
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
const Wu = new U(),
  qu = new U();
class Vb extends kb {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = 'LineSegments');
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        i = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Wu.fromBufferAttribute(t, r),
          qu.fromBufferAttribute(t, r + 1),
          (i[r] = r === 0 ? 0 : i[r - 1]),
          (i[r + 1] = i[r] + Wu.distanceTo(qu));
      e.setAttribute('lineDistance', new ln(i, 1));
    } else
      console.warn(
        'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
      );
    return this;
  }
}
class Gb extends $t {
  constructor(e, t, i, r, s, o, a, l, c) {
    super(e, t, i, r, s, o, a, l, c),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class Xu {
  constructor(e = 1, t = 0, i = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = i), this;
  }
  set(e, t, i) {
    return (this.radius = e), (this.phi = t), (this.theta = i), this;
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
  setFromCartesianCoords(e, t, i) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + i * i)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, i)),
          (this.phi = Math.acos(Ot(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Hb extends Vb {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      i = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      r = new yn();
    r.setAttribute('position', new ln(t, 3)),
      r.setAttribute('color', new ln(i, 3));
    const s = new td({ vertexColors: !0, toneMapped: !1 });
    super(r, s), (this.type = 'AxesHelper');
  }
  setColors(e, t, i) {
    const r = new Qe(),
      s = this.geometry.attributes.color.array;
    return (
      r.set(e),
      r.toArray(s, 0),
      r.toArray(s, 3),
      r.set(t),
      r.toArray(s, 6),
      r.toArray(s, 9),
      r.set(i),
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
    new CustomEvent('register', { detail: { revision: bl } })
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = bl));
const ju = { type: 'change' },
  ma = { type: 'start' },
  $u = { type: 'end' };
class Wb extends Ni {
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
        LEFT: Vi.ROTATE,
        MIDDLE: Vi.DOLLY,
        RIGHT: Vi.PAN,
      }),
      (this.touches = { ONE: Gi.ROTATE, TWO: Gi.DOLLY_PAN }),
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
      (this.listenToKeyEvents = function (C) {
        C.addEventListener('keydown', se), (this._domElementKeyEvents = C);
      }),
      (this.saveState = function () {
        i.target0.copy(i.target),
          i.position0.copy(i.object.position),
          (i.zoom0 = i.object.zoom);
      }),
      (this.reset = function () {
        i.target.copy(i.target0),
          i.object.position.copy(i.position0),
          (i.object.zoom = i.zoom0),
          i.object.updateProjectionMatrix(),
          i.dispatchEvent(ju),
          i.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const C = new U(),
          O = new Ii().setFromUnitVectors(e.up, new U(0, 1, 0)),
          Me = O.clone().invert(),
          Te = new U(),
          be = new Ii(),
          Ce = 2 * Math.PI;
        return function () {
          const De = i.object.position;
          C.copy(De).sub(i.target),
            C.applyQuaternion(O),
            a.setFromVector3(C),
            i.autoRotate && s === r.NONE && L(B()),
            i.enableDamping
              ? ((a.theta += l.theta * i.dampingFactor),
                (a.phi += l.phi * i.dampingFactor))
              : ((a.theta += l.theta), (a.phi += l.phi));
          let ke = i.minAzimuthAngle,
            Ye = i.maxAzimuthAngle;
          return (
            isFinite(ke) &&
              isFinite(Ye) &&
              (ke < -Math.PI ? (ke += Ce) : ke > Math.PI && (ke -= Ce),
              Ye < -Math.PI ? (Ye += Ce) : Ye > Math.PI && (Ye -= Ce),
              ke <= Ye
                ? (a.theta = Math.max(ke, Math.min(Ye, a.theta)))
                : (a.theta =
                    a.theta > (ke + Ye) / 2
                      ? Math.max(ke, a.theta)
                      : Math.min(Ye, a.theta))),
            (a.phi = Math.max(
              i.minPolarAngle,
              Math.min(i.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            (a.radius *= c),
            (a.radius = Math.max(
              i.minDistance,
              Math.min(i.maxDistance, a.radius)
            )),
            i.enableDamping === !0
              ? i.target.addScaledVector(u, i.dampingFactor)
              : i.target.add(u),
            C.setFromSpherical(a),
            C.applyQuaternion(Me),
            De.copy(i.target).add(C),
            i.object.lookAt(i.target),
            i.enableDamping === !0
              ? ((l.theta *= 1 - i.dampingFactor),
                (l.phi *= 1 - i.dampingFactor),
                u.multiplyScalar(1 - i.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0)),
            (c = 1),
            f ||
            Te.distanceToSquared(i.object.position) > o ||
            8 * (1 - be.dot(i.object.quaternion)) > o
              ? (i.dispatchEvent(ju),
                Te.copy(i.object.position),
                be.copy(i.object.quaternion),
                (f = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        i.domElement.removeEventListener('contextmenu', F),
          i.domElement.removeEventListener('pointerdown', H),
          i.domElement.removeEventListener('pointercancel', he),
          i.domElement.removeEventListener('wheel', me),
          i.domElement.removeEventListener('pointermove', j),
          i.domElement.removeEventListener('pointerup', K),
          i._domElementKeyEvents !== null &&
            i._domElementKeyEvents.removeEventListener('keydown', se);
      });
    const i = this,
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
      a = new Xu(),
      l = new Xu();
    let c = 1;
    const u = new U();
    let f = !1;
    const h = new Fe(),
      p = new Fe(),
      g = new Fe(),
      m = new Fe(),
      d = new Fe(),
      _ = new Fe(),
      x = new Fe(),
      M = new Fe(),
      S = new Fe(),
      b = [],
      P = {};
    function B() {
      return ((2 * Math.PI) / 60 / 60) * i.autoRotateSpeed;
    }
    function y() {
      return Math.pow(0.95, i.zoomSpeed);
    }
    function L(C) {
      l.theta -= C;
    }
    function R(C) {
      l.phi -= C;
    }
    const Y = (function () {
        const C = new U();
        return function (Me, Te) {
          C.setFromMatrixColumn(Te, 0), C.multiplyScalar(-Me), u.add(C);
        };
      })(),
      de = (function () {
        const C = new U();
        return function (Me, Te) {
          i.screenSpacePanning === !0
            ? C.setFromMatrixColumn(Te, 1)
            : (C.setFromMatrixColumn(Te, 0), C.crossVectors(i.object.up, C)),
            C.multiplyScalar(Me),
            u.add(C);
        };
      })(),
      G = (function () {
        const C = new U();
        return function (Me, Te) {
          const be = i.domElement;
          if (i.object.isPerspectiveCamera) {
            const Ce = i.object.position;
            C.copy(Ce).sub(i.target);
            let Se = C.length();
            (Se *= Math.tan(((i.object.fov / 2) * Math.PI) / 180)),
              Y((2 * Me * Se) / be.clientHeight, i.object.matrix),
              de((2 * Te * Se) / be.clientHeight, i.object.matrix);
          } else
            i.object.isOrthographicCamera
              ? (Y(
                  (Me * (i.object.right - i.object.left)) /
                    i.object.zoom /
                    be.clientWidth,
                  i.object.matrix
                ),
                de(
                  (Te * (i.object.top - i.object.bottom)) /
                    i.object.zoom /
                    be.clientHeight,
                  i.object.matrix
                ))
              : (console.warn(
                  'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
                ),
                (i.enablePan = !1));
        };
      })();
    function N(C) {
      i.object.isPerspectiveCamera
        ? (c /= C)
        : i.object.isOrthographicCamera
        ? ((i.object.zoom = Math.max(
            i.minZoom,
            Math.min(i.maxZoom, i.object.zoom * C)
          )),
          i.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
          ),
          (i.enableZoom = !1));
    }
    function te(C) {
      i.object.isPerspectiveCamera
        ? (c *= C)
        : i.object.isOrthographicCamera
        ? ((i.object.zoom = Math.max(
            i.minZoom,
            Math.min(i.maxZoom, i.object.zoom / C)
          )),
          i.object.updateProjectionMatrix(),
          (f = !0))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
          ),
          (i.enableZoom = !1));
    }
    function ie(C) {
      h.set(C.clientX, C.clientY);
    }
    function Z(C) {
      x.set(C.clientX, C.clientY);
    }
    function W(C) {
      m.set(C.clientX, C.clientY);
    }
    function z(C) {
      p.set(C.clientX, C.clientY),
        g.subVectors(p, h).multiplyScalar(i.rotateSpeed);
      const O = i.domElement;
      L((2 * Math.PI * g.x) / O.clientHeight),
        R((2 * Math.PI * g.y) / O.clientHeight),
        h.copy(p),
        i.update();
    }
    function X(C) {
      M.set(C.clientX, C.clientY),
        S.subVectors(M, x),
        S.y > 0 ? N(y()) : S.y < 0 && te(y()),
        x.copy(M),
        i.update();
    }
    function ue(C) {
      d.set(C.clientX, C.clientY),
        _.subVectors(d, m).multiplyScalar(i.panSpeed),
        G(_.x, _.y),
        m.copy(d),
        i.update();
    }
    function oe(C) {
      C.deltaY < 0 ? te(y()) : C.deltaY > 0 && N(y()), i.update();
    }
    function le(C) {
      let O = !1;
      switch (C.code) {
        case i.keys.UP:
          G(0, i.keyPanSpeed), (O = !0);
          break;
        case i.keys.BOTTOM:
          G(0, -i.keyPanSpeed), (O = !0);
          break;
        case i.keys.LEFT:
          G(i.keyPanSpeed, 0), (O = !0);
          break;
        case i.keys.RIGHT:
          G(-i.keyPanSpeed, 0), (O = !0);
          break;
      }
      O && (C.preventDefault(), i.update());
    }
    function we() {
      if (b.length === 1) h.set(b[0].pageX, b[0].pageY);
      else {
        const C = 0.5 * (b[0].pageX + b[1].pageX),
          O = 0.5 * (b[0].pageY + b[1].pageY);
        h.set(C, O);
      }
    }
    function V() {
      if (b.length === 1) m.set(b[0].pageX, b[0].pageY);
      else {
        const C = 0.5 * (b[0].pageX + b[1].pageX),
          O = 0.5 * (b[0].pageY + b[1].pageY);
        m.set(C, O);
      }
    }
    function I() {
      const C = b[0].pageX - b[1].pageX,
        O = b[0].pageY - b[1].pageY,
        Me = Math.sqrt(C * C + O * O);
      x.set(0, Me);
    }
    function ae() {
      i.enableZoom && I(), i.enablePan && V();
    }
    function ce() {
      i.enableZoom && I(), i.enableRotate && we();
    }
    function ve(C) {
      if (b.length == 1) p.set(C.pageX, C.pageY);
      else {
        const Me = ye(C),
          Te = 0.5 * (C.pageX + Me.x),
          be = 0.5 * (C.pageY + Me.y);
        p.set(Te, be);
      }
      g.subVectors(p, h).multiplyScalar(i.rotateSpeed);
      const O = i.domElement;
      L((2 * Math.PI * g.x) / O.clientHeight),
        R((2 * Math.PI * g.y) / O.clientHeight),
        h.copy(p);
    }
    function _e(C) {
      if (b.length === 1) d.set(C.pageX, C.pageY);
      else {
        const O = ye(C),
          Me = 0.5 * (C.pageX + O.x),
          Te = 0.5 * (C.pageY + O.y);
        d.set(Me, Te);
      }
      _.subVectors(d, m).multiplyScalar(i.panSpeed), G(_.x, _.y), m.copy(d);
    }
    function Ee(C) {
      const O = ye(C),
        Me = C.pageX - O.x,
        Te = C.pageY - O.y,
        be = Math.sqrt(Me * Me + Te * Te);
      M.set(0, be),
        S.set(0, Math.pow(M.y / x.y, i.zoomSpeed)),
        N(S.y),
        x.copy(M);
    }
    function E(C) {
      i.enableZoom && Ee(C), i.enablePan && _e(C);
    }
    function A(C) {
      i.enableZoom && Ee(C), i.enableRotate && ve(C);
    }
    function H(C) {
      i.enabled !== !1 &&
        (b.length === 0 &&
          (i.domElement.setPointerCapture(C.pointerId),
          i.domElement.addEventListener('pointermove', j),
          i.domElement.addEventListener('pointerup', K)),
        $(C),
        C.pointerType === 'touch' ? w(C) : pe(C));
    }
    function j(C) {
      i.enabled !== !1 && (C.pointerType === 'touch' ? v(C) : re(C));
    }
    function K(C) {
      Q(C),
        b.length === 0 &&
          (i.domElement.releasePointerCapture(C.pointerId),
          i.domElement.removeEventListener('pointermove', j),
          i.domElement.removeEventListener('pointerup', K)),
        i.dispatchEvent($u),
        (s = r.NONE);
    }
    function he(C) {
      Q(C);
    }
    function pe(C) {
      let O;
      switch (C.button) {
        case 0:
          O = i.mouseButtons.LEFT;
          break;
        case 1:
          O = i.mouseButtons.MIDDLE;
          break;
        case 2:
          O = i.mouseButtons.RIGHT;
          break;
        default:
          O = -1;
      }
      switch (O) {
        case Vi.DOLLY:
          if (i.enableZoom === !1) return;
          Z(C), (s = r.DOLLY);
          break;
        case Vi.ROTATE:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (i.enablePan === !1) return;
            W(C), (s = r.PAN);
          } else {
            if (i.enableRotate === !1) return;
            ie(C), (s = r.ROTATE);
          }
          break;
        case Vi.PAN:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (i.enableRotate === !1) return;
            ie(C), (s = r.ROTATE);
          } else {
            if (i.enablePan === !1) return;
            W(C), (s = r.PAN);
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && i.dispatchEvent(ma);
    }
    function re(C) {
      switch (s) {
        case r.ROTATE:
          if (i.enableRotate === !1) return;
          z(C);
          break;
        case r.DOLLY:
          if (i.enableZoom === !1) return;
          X(C);
          break;
        case r.PAN:
          if (i.enablePan === !1) return;
          ue(C);
          break;
      }
    }
    function me(C) {
      i.enabled === !1 ||
        i.enableZoom === !1 ||
        s !== r.NONE ||
        (C.preventDefault(), i.dispatchEvent(ma), oe(C), i.dispatchEvent($u));
    }
    function se(C) {
      i.enabled === !1 || i.enablePan === !1 || le(C);
    }
    function w(C) {
      switch ((fe(C), b.length)) {
        case 1:
          switch (i.touches.ONE) {
            case Gi.ROTATE:
              if (i.enableRotate === !1) return;
              we(), (s = r.TOUCH_ROTATE);
              break;
            case Gi.PAN:
              if (i.enablePan === !1) return;
              V(), (s = r.TOUCH_PAN);
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (i.touches.TWO) {
            case Gi.DOLLY_PAN:
              if (i.enableZoom === !1 && i.enablePan === !1) return;
              ae(), (s = r.TOUCH_DOLLY_PAN);
              break;
            case Gi.DOLLY_ROTATE:
              if (i.enableZoom === !1 && i.enableRotate === !1) return;
              ce(), (s = r.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && i.dispatchEvent(ma);
    }
    function v(C) {
      switch ((fe(C), s)) {
        case r.TOUCH_ROTATE:
          if (i.enableRotate === !1) return;
          ve(C), i.update();
          break;
        case r.TOUCH_PAN:
          if (i.enablePan === !1) return;
          _e(C), i.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (i.enableZoom === !1 && i.enablePan === !1) return;
          E(C), i.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (i.enableZoom === !1 && i.enableRotate === !1) return;
          A(C), i.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function F(C) {
      i.enabled !== !1 && C.preventDefault();
    }
    function $(C) {
      b.push(C);
    }
    function Q(C) {
      delete P[C.pointerId];
      for (let O = 0; O < b.length; O++)
        if (b[O].pointerId == C.pointerId) {
          b.splice(O, 1);
          return;
        }
    }
    function fe(C) {
      let O = P[C.pointerId];
      O === void 0 && ((O = new Fe()), (P[C.pointerId] = O)),
        O.set(C.pageX, C.pageY);
    }
    function ye(C) {
      const O = C.pointerId === b[0].pointerId ? b[1] : b[0];
      return P[O.pointerId];
    }
    i.domElement.addEventListener('contextmenu', F),
      i.domElement.addEventListener('pointerdown', H),
      i.domElement.addEventListener('pointercancel', he),
      i.domElement.addEventListener('wheel', me, { passive: !1 }),
      this.update();
  }
}
const qb = { class: 'text-cloud' },
  Xb = xn({
    __name: 'Index',
    setup(n) {
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
          var u, f;
          (e.container = document.querySelector('.text-cloud')),
            (e.width = (u = e.container.offsetWidth) != null ? u : 0),
            (e.height = (f = e.container.offsetHeight) != null ? f : 0),
            (e.scene = new zb());
        },
        i = () => {
          (e.camera = new Wt(75, e.width / e.height, 0.1, 1e3)),
            e.camera.position.set(0, 0, 100);
        },
        r = () => {
          var u;
          (e.renderer = new Jh({ antialias: !0, alpha: !0 })),
            e.renderer.setClearColor(16777215),
            e.renderer.setSize(e.width, e.height),
            e.renderer.setPixelRatio(window.devicePixelRatio),
            (e.renderer.shadowMap.enabled = !0),
            (u = e.container) == null || u.appendChild(e.renderer.domElement);
        },
        s = () => {
          (e.controls = new Wb(e.camera, e.renderer.domElement)),
            (e.controls.enableDamping = !0),
            (e.controls.enableZoom = !1);
          const u = new Hb(5);
          e.scene.add(u);
        },
        o = () => {
          e.textGroup.rotateY(-0.001),
            e.textGroup.rotateX(0.001),
            e.renderer.render(e.scene, e.camera),
            e.controls.update(),
            requestAnimationFrame(o);
        },
        a = (u, f, h, p) => {
          const g = document.createElement('canvas');
          (g.width = h), (g.height = p);
          const m = g.getContext('2d');
          return (
            m.clearRect(0, 0, m.canvas.width, m.canvas.height),
            m.beginPath(),
            m.translate(h / 2, p / 2),
            (m.fillStyle = Dg[Math.floor(Math.random() * 3)]),
            (m.font = `${f || 12}px Arial`),
            (m.textBaseline = 'middle'),
            (m.textAlign = 'center'),
            m.fillText(u, 0, 0),
            g
          );
        },
        l = () => {
          e.textGroup = new jr();
          for (let u = 0, f = bc.length; u < f; u++) {
            const h = Math.acos(-1 + (2 * u) / f),
              p = Math.sqrt(f * Math.PI) * h,
              g = a(bc[u], (Math.random() + 1) * 14, 600, 300),
              m = new Gb(g);
            (m.generateMipmaps = !1), (m.minFilter = Ft), (m.magFilter = Ft);
            const d = new Qh({ map: m }),
              _ = new Bb(d);
            _.scale.set(60, 30, 1),
              _.position.setFromSphericalCoords(50, h, p),
              e.textGroup.add(_);
          }
          e.scene.add(e.textGroup);
        },
        c = () => {
          t(), i(), l(), r(), s(), o();
        };
      return (
        os(() => {
          c();
        }),
        (u, f) => (at(), ct('div', qb))
      );
    },
  });
const nd = [
    { path: '/textWheel', name: 'TextWheel', component: __ },
    { path: '/textSphere', name: 'TextSphere', component: w_ },
    { path: '/textRing', name: 'TextRing', component: B_ },
    { path: '/textCloud', name: 'TextCloud', component: Xb },
  ],
  jb = Lg({
    history: jm(),
    routes: [{ path: '/', redirect: '/textWheel' }, ...nd],
  }),
  $b = { class: 'wrapper' },
  Yb = { class: 'container' },
  Zb = xn({
    __name: 'App',
    setup(n) {
      return (e, t) => (
        at(),
        ct('div', $b, [
          Je('nav', null, [
            (at(!0),
            ct(
              St,
              null,
              xr(
                ut(nd),
                (i, r) => (
                  at(),
                  Wp(
                    ut(ah),
                    { key: i.name, to: i.path },
                    {
                      default: Cf(() => [
                        Xf(gr(`${r ? ' | ' : ''}${i.name}`), 1),
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
          Je('section', Yb, [_t(ut(lh))]),
        ])
      );
    },
  });
const El = wm(Zb);
El.use(Cm());
El.use(jb);
El.mount('#app');
