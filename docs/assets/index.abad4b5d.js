(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver(r => {
    for (const s of r)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && i(a);
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
const od =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  ad = Wa(od);
function $u(n) {
  return !!n || n === '';
}
function ti(n) {
  if (Oe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const i = n[t],
        r = vt(i) ? ud(i) : ti(i);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  } else {
    if (vt(n)) return n;
    if (tt(n)) return n;
  }
}
const ld = /;(?![^(]*\))/g,
  cd = /:(.+)/;
function ud(n) {
  const e = {};
  return (
    n.split(ld).forEach(t => {
      if (t) {
        const i = t.split(cd);
        i.length > 1 && (e[i[0].trim()] = i[1].trim());
      }
    }),
    e
  );
}
function as(n) {
  let e = '';
  if (vt(n)) e = n;
  else if (Oe(n))
    for (let t = 0; t < n.length; t++) {
      const i = as(n[t]);
      i && (e += i + ' ');
    }
  else if (tt(n)) for (const t in n) n[t] && (e += t + ' ');
  return e.trim();
}
const vr = n =>
    vt(n)
      ? n
      : n == null
      ? ''
      : Oe(n) || (tt(n) && (n.toString === Ju || !Ue(n.toString)))
      ? JSON.stringify(n, Yu, 2)
      : String(n),
  Yu = (n, e) =>
    e && e.__v_isRef
      ? Yu(n, e.value)
      : dr(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (t, [i, r]) => ((t[`${i} =>`] = r), t),
            {}
          ),
        }
      : Zu(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : tt(e) && !Oe(e) && !Qu(e)
      ? String(e)
      : e,
  Ke = {},
  hr = [],
  sn = () => {},
  fd = () => !1,
  hd = /^on[^a-z]/,
  ro = n => hd.test(n),
  qa = n => n.startsWith('onUpdate:'),
  At = Object.assign,
  Xa = (n, e) => {
    const t = n.indexOf(e);
    t > -1 && n.splice(t, 1);
  },
  dd = Object.prototype.hasOwnProperty,
  Ge = (n, e) => dd.call(n, e),
  Oe = Array.isArray,
  dr = n => so(n) === '[object Map]',
  Zu = n => so(n) === '[object Set]',
  Ue = n => typeof n == 'function',
  vt = n => typeof n == 'string',
  ja = n => typeof n == 'symbol',
  tt = n => n !== null && typeof n == 'object',
  Ku = n => tt(n) && Ue(n.then) && Ue(n.catch),
  Ju = Object.prototype.toString,
  so = n => Ju.call(n),
  pd = n => so(n).slice(8, -1),
  Qu = n => so(n) === '[object Object]',
  $a = n => vt(n) && n !== 'NaN' && n[0] !== '-' && '' + parseInt(n, 10) === n,
  ks = Wa(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  oo = n => {
    const e = Object.create(null);
    return t => e[t] || (e[t] = n(t));
  },
  md = /-(\w)/g,
  xr = oo(n => n.replace(md, (e, t) => (t ? t.toUpperCase() : ''))),
  gd = /\B([A-Z])/g,
  Pr = oo(n => n.replace(gd, '-$1').toLowerCase()),
  ef = oo(n => n.charAt(0).toUpperCase() + n.slice(1)),
  Eo = oo(n => (n ? `on${ef(n)}` : '')),
  Qr = (n, e) => !Object.is(n, e),
  To = (n, e) => {
    for (let t = 0; t < n.length; t++) n[t](e);
  },
  js = (n, e, t) => {
    Object.defineProperty(n, e, { configurable: !0, enumerable: !1, value: t });
  },
  _d = n => {
    const e = parseFloat(n);
    return isNaN(e) ? n : e;
  };
let Pl;
const vd = () =>
  Pl ||
  (Pl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let un;
class tf {
  constructor(e = !1) {
    (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = un),
      !e && un && (this.index = (un.scopes || (un.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const t = un;
      try {
        return (un = this), e();
      } finally {
        un = t;
      }
    }
  }
  on() {
    un = this;
  }
  off() {
    un = this.parent;
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
function xd(n) {
  return new tf(n);
}
function yd(n, e = un) {
  e && e.active && e.effects.push(n);
}
const Ya = n => {
    const e = new Set(n);
    return (e.w = 0), (e.n = 0), e;
  },
  nf = n => (n.w & ni) > 0,
  rf = n => (n.n & ni) > 0,
  Md = ({ deps: n }) => {
    if (n.length) for (let e = 0; e < n.length; e++) n[e].w |= ni;
  },
  bd = n => {
    const { deps: e } = n;
    if (e.length) {
      let t = 0;
      for (let i = 0; i < e.length; i++) {
        const r = e[i];
        nf(r) && !rf(r) ? r.delete(n) : (e[t++] = r),
          (r.w &= ~ni),
          (r.n &= ~ni);
      }
      e.length = t;
    }
  },
  ga = new WeakMap();
let Wr = 0,
  ni = 1;
const _a = 30;
let Qt;
const Si = Symbol(''),
  va = Symbol('');
class Za {
  constructor(e, t = null, i) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      yd(this, i);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Qt,
      t = Zn;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Qt),
        (Qt = this),
        (Zn = !0),
        (ni = 1 << ++Wr),
        Wr <= _a ? Md(this) : Rl(this),
        this.fn()
      );
    } finally {
      Wr <= _a && bd(this),
        (ni = 1 << --Wr),
        (Qt = this.parent),
        (Zn = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Qt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Rl(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Rl(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let t = 0; t < e.length; t++) e[t].delete(n);
    e.length = 0;
  }
}
let Zn = !0;
const sf = [];
function Rr() {
  sf.push(Zn), (Zn = !1);
}
function Dr() {
  const n = sf.pop();
  Zn = n === void 0 ? !0 : n;
}
function Ut(n, e, t) {
  if (Zn && Qt) {
    let i = ga.get(n);
    i || ga.set(n, (i = new Map()));
    let r = i.get(t);
    r || i.set(t, (r = Ya())), of(r);
  }
}
function of(n, e) {
  let t = !1;
  Wr <= _a ? rf(n) || ((n.n |= ni), (t = !nf(n))) : (t = !n.has(Qt)),
    t && (n.add(Qt), Qt.deps.push(n));
}
function Fn(n, e, t, i, r, s) {
  const a = ga.get(n);
  if (!a) return;
  let o = [];
  if (e === 'clear') o = [...a.values()];
  else if (t === 'length' && Oe(n))
    a.forEach((l, c) => {
      (c === 'length' || c >= i) && o.push(l);
    });
  else
    switch ((t !== void 0 && o.push(a.get(t)), e)) {
      case 'add':
        Oe(n)
          ? $a(t) && o.push(a.get('length'))
          : (o.push(a.get(Si)), dr(n) && o.push(a.get(va)));
        break;
      case 'delete':
        Oe(n) || (o.push(a.get(Si)), dr(n) && o.push(a.get(va)));
        break;
      case 'set':
        dr(n) && o.push(a.get(Si));
        break;
    }
  if (o.length === 1) o[0] && xa(o[0]);
  else {
    const l = [];
    for (const c of o) c && l.push(...c);
    xa(Ya(l));
  }
}
function xa(n, e) {
  const t = Oe(n) ? n : [...n];
  for (const i of t) i.computed && Dl(i);
  for (const i of t) i.computed || Dl(i);
}
function Dl(n, e) {
  (n !== Qt || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const Sd = Wa('__proto__,__v_isRef,__isVue'),
  af = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(n => n !== 'arguments' && n !== 'caller')
      .map(n => Symbol[n])
      .filter(ja)
  ),
  wd = Ka(),
  Ed = Ka(!1, !0),
  Td = Ka(!0),
  Il = Ad();
function Ad() {
  const n = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(e => {
      n[e] = function (...t) {
        const i = We(this);
        for (let s = 0, a = this.length; s < a; s++) Ut(i, 'get', s + '');
        const r = i[e](...t);
        return r === -1 || r === !1 ? i[e](...t.map(We)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(e => {
      n[e] = function (...t) {
        Rr();
        const i = We(this)[e].apply(this, t);
        return Dr(), i;
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
    if (r === '__v_raw' && s === (n ? (e ? Hd : hf) : e ? ff : uf).get(i))
      return i;
    const a = Oe(i);
    if (!n && a && Ge(Il, r)) return Reflect.get(Il, r, s);
    const o = Reflect.get(i, r, s);
    return (ja(r) ? af.has(r) : Sd(r)) || (n || Ut(i, 'get', r), e)
      ? o
      : Tt(o)
      ? a && $a(r)
        ? o
        : o.value
      : tt(o)
      ? n
        ? df(o)
        : Oi(o)
      : o;
  };
}
const Cd = lf(),
  Ld = lf(!0);
function lf(n = !1) {
  return function (t, i, r, s) {
    let a = t[i];
    if (yr(a) && Tt(a) && !Tt(r)) return !1;
    if (
      !n &&
      (!$s(r) && !yr(r) && ((a = We(a)), (r = We(r))),
      !Oe(t) && Tt(a) && !Tt(r))
    )
      return (a.value = r), !0;
    const o = Oe(t) && $a(i) ? Number(i) < t.length : Ge(t, i),
      l = Reflect.set(t, i, r, s);
    return (
      t === We(s) && (o ? Qr(r, a) && Fn(t, 'set', i, r) : Fn(t, 'add', i, r)),
      l
    );
  };
}
function Pd(n, e) {
  const t = Ge(n, e);
  n[e];
  const i = Reflect.deleteProperty(n, e);
  return i && t && Fn(n, 'delete', e, void 0), i;
}
function Rd(n, e) {
  const t = Reflect.has(n, e);
  return (!ja(e) || !af.has(e)) && Ut(n, 'has', e), t;
}
function Dd(n) {
  return Ut(n, 'iterate', Oe(n) ? 'length' : Si), Reflect.ownKeys(n);
}
const cf = { get: wd, set: Cd, deleteProperty: Pd, has: Rd, ownKeys: Dd },
  Id = {
    get: Td,
    set(n, e) {
      return !0;
    },
    deleteProperty(n, e) {
      return !0;
    },
  },
  Fd = At({}, cf, { get: Ed, set: Ld }),
  Ja = n => n,
  ao = n => Reflect.getPrototypeOf(n);
function hs(n, e, t = !1, i = !1) {
  n = n.__v_raw;
  const r = We(n),
    s = We(e);
  t || (e !== s && Ut(r, 'get', e), Ut(r, 'get', s));
  const { has: a } = ao(r),
    o = i ? Ja : t ? nl : es;
  if (a.call(r, e)) return o(n.get(e));
  if (a.call(r, s)) return o(n.get(s));
  n !== r && n.get(e);
}
function ds(n, e = !1) {
  const t = this.__v_raw,
    i = We(t),
    r = We(n);
  return (
    e || (n !== r && Ut(i, 'has', n), Ut(i, 'has', r)),
    n === r ? t.has(n) : t.has(n) || t.has(r)
  );
}
function ps(n, e = !1) {
  return (
    (n = n.__v_raw), !e && Ut(We(n), 'iterate', Si), Reflect.get(n, 'size', n)
  );
}
function Fl(n) {
  n = We(n);
  const e = We(this);
  return ao(e).has.call(e, n) || (e.add(n), Fn(e, 'add', n, n)), this;
}
function Ol(n, e) {
  e = We(e);
  const t = We(this),
    { has: i, get: r } = ao(t);
  let s = i.call(t, n);
  s || ((n = We(n)), (s = i.call(t, n)));
  const a = r.call(t, n);
  return (
    t.set(n, e), s ? Qr(e, a) && Fn(t, 'set', n, e) : Fn(t, 'add', n, e), this
  );
}
function Nl(n) {
  const e = We(this),
    { has: t, get: i } = ao(e);
  let r = t.call(e, n);
  r || ((n = We(n)), (r = t.call(e, n))), i && i.call(e, n);
  const s = e.delete(n);
  return r && Fn(e, 'delete', n, void 0), s;
}
function zl() {
  const n = We(this),
    e = n.size !== 0,
    t = n.clear();
  return e && Fn(n, 'clear', void 0, void 0), t;
}
function ms(n, e) {
  return function (i, r) {
    const s = this,
      a = s.__v_raw,
      o = We(a),
      l = e ? Ja : n ? nl : es;
    return (
      !n && Ut(o, 'iterate', Si), a.forEach((c, u) => i.call(r, l(c), l(u), s))
    );
  };
}
function gs(n, e, t) {
  return function (...i) {
    const r = this.__v_raw,
      s = We(r),
      a = dr(s),
      o = n === 'entries' || (n === Symbol.iterator && a),
      l = n === 'keys' && a,
      c = r[n](...i),
      u = t ? Ja : e ? nl : es;
    return (
      !e && Ut(s, 'iterate', l ? va : Si),
      {
        next() {
          const { value: f, done: h } = c.next();
          return h
            ? { value: f, done: h }
            : { value: o ? [u(f[0]), u(f[1])] : u(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function zn(n) {
  return function (...e) {
    return n === 'delete' ? !1 : this;
  };
}
function Od() {
  const n = {
      get(s) {
        return hs(this, s);
      },
      get size() {
        return ps(this);
      },
      has: ds,
      add: Fl,
      set: Ol,
      delete: Nl,
      clear: zl,
      forEach: ms(!1, !1),
    },
    e = {
      get(s) {
        return hs(this, s, !1, !0);
      },
      get size() {
        return ps(this);
      },
      has: ds,
      add: Fl,
      set: Ol,
      delete: Nl,
      clear: zl,
      forEach: ms(!1, !0),
    },
    t = {
      get(s) {
        return hs(this, s, !0);
      },
      get size() {
        return ps(this, !0);
      },
      has(s) {
        return ds.call(this, s, !0);
      },
      add: zn('add'),
      set: zn('set'),
      delete: zn('delete'),
      clear: zn('clear'),
      forEach: ms(!0, !1),
    },
    i = {
      get(s) {
        return hs(this, s, !0, !0);
      },
      get size() {
        return ps(this, !0);
      },
      has(s) {
        return ds.call(this, s, !0);
      },
      add: zn('add'),
      set: zn('set'),
      delete: zn('delete'),
      clear: zn('clear'),
      forEach: ms(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(s => {
      (n[s] = gs(s, !1, !1)),
        (t[s] = gs(s, !0, !1)),
        (e[s] = gs(s, !1, !0)),
        (i[s] = gs(s, !0, !0));
    }),
    [n, t, e, i]
  );
}
const [Nd, zd, Ud, Bd] = Od();
function Qa(n, e) {
  const t = e ? (n ? Bd : Ud) : n ? zd : Nd;
  return (i, r, s) =>
    r === '__v_isReactive'
      ? !n
      : r === '__v_isReadonly'
      ? n
      : r === '__v_raw'
      ? i
      : Reflect.get(Ge(t, r) && r in i ? t : i, r, s);
}
const kd = { get: Qa(!1, !1) },
  Vd = { get: Qa(!1, !0) },
  Gd = { get: Qa(!0, !1) },
  uf = new WeakMap(),
  ff = new WeakMap(),
  hf = new WeakMap(),
  Hd = new WeakMap();
function Wd(n) {
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
function qd(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : Wd(pd(n));
}
function Oi(n) {
  return yr(n) ? n : el(n, !1, cf, kd, uf);
}
function Xd(n) {
  return el(n, !1, Fd, Vd, ff);
}
function df(n) {
  return el(n, !0, Id, Gd, hf);
}
function el(n, e, t, i, r) {
  if (!tt(n) || (n.__v_raw && !(e && n.__v_isReactive))) return n;
  const s = r.get(n);
  if (s) return s;
  const a = qd(n);
  if (a === 0) return n;
  const o = new Proxy(n, a === 2 ? i : t);
  return r.set(n, o), o;
}
function pr(n) {
  return yr(n) ? pr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function yr(n) {
  return !!(n && n.__v_isReadonly);
}
function $s(n) {
  return !!(n && n.__v_isShallow);
}
function pf(n) {
  return pr(n) || yr(n);
}
function We(n) {
  const e = n && n.__v_raw;
  return e ? We(e) : n;
}
function tl(n) {
  return js(n, '__v_skip', !0), n;
}
const es = n => (tt(n) ? Oi(n) : n),
  nl = n => (tt(n) ? df(n) : n);
function mf(n) {
  Zn && Qt && ((n = We(n)), of(n.dep || (n.dep = Ya())));
}
function gf(n, e) {
  (n = We(n)), n.dep && xa(n.dep);
}
function Tt(n) {
  return !!(n && n.__v_isRef === !0);
}
function xi(n) {
  return _f(n, !1);
}
function jd(n) {
  return _f(n, !0);
}
function _f(n, e) {
  return Tt(n) ? n : new $d(n, e);
}
class $d {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : We(e)),
      (this._value = t ? e : es(e));
  }
  get value() {
    return mf(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || $s(e) || yr(e);
    (e = t ? e : We(e)),
      Qr(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : es(e)), gf(this));
  }
}
function ft(n) {
  return Tt(n) ? n.value : n;
}
const Yd = {
  get: (n, e, t) => ft(Reflect.get(n, e, t)),
  set: (n, e, t, i) => {
    const r = n[e];
    return Tt(r) && !Tt(t) ? ((r.value = t), !0) : Reflect.set(n, e, t, i);
  },
};
function vf(n) {
  return pr(n) ? n : new Proxy(n, Yd);
}
var xf;
class Zd {
  constructor(e, t, i, r) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[xf] = !1),
      (this._dirty = !0),
      (this.effect = new Za(e, () => {
        this._dirty || ((this._dirty = !0), gf(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = i);
  }
  get value() {
    const e = We(this);
    return (
      mf(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
xf = '__v_isReadonly';
function Kd(n, e, t = !1) {
  let i, r;
  const s = Ue(n);
  return (
    s ? ((i = n), (r = sn)) : ((i = n.get), (r = n.set)),
    new Zd(i, r, s || !r, t)
  );
}
function Kn(n, e, t, i) {
  let r;
  try {
    r = i ? n(...i) : n();
  } catch (s) {
    lo(s, e, t);
  }
  return r;
}
function Xt(n, e, t, i) {
  if (Ue(n)) {
    const s = Kn(n, e, t, i);
    return (
      s &&
        Ku(s) &&
        s.catch(a => {
          lo(a, e, t);
        }),
      s
    );
  }
  const r = [];
  for (let s = 0; s < n.length; s++) r.push(Xt(n[s], e, t, i));
  return r;
}
function lo(n, e, t, i = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy,
      o = t;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](n, a, o) === !1) return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Kn(l, null, 10, [n, a, o]);
      return;
    }
  }
  Jd(n, t, r, i);
}
function Jd(n, e, t, i = !0) {
  console.error(n);
}
let ts = !1,
  ya = !1;
const Et = [];
let dn = 0;
const mr = [];
let An = null,
  mi = 0;
const yf = Promise.resolve();
let il = null;
function Mf(n) {
  const e = il || yf;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function Qd(n) {
  let e = dn + 1,
    t = Et.length;
  for (; e < t; ) {
    const i = (e + t) >>> 1;
    ns(Et[i]) < n ? (e = i + 1) : (t = i);
  }
  return e;
}
function rl(n) {
  (!Et.length || !Et.includes(n, ts && n.allowRecurse ? dn + 1 : dn)) &&
    (n.id == null ? Et.push(n) : Et.splice(Qd(n.id), 0, n), bf());
}
function bf() {
  !ts && !ya && ((ya = !0), (il = yf.then(wf)));
}
function ep(n) {
  const e = Et.indexOf(n);
  e > dn && Et.splice(e, 1);
}
function tp(n) {
  Oe(n)
    ? mr.push(...n)
    : (!An || !An.includes(n, n.allowRecurse ? mi + 1 : mi)) && mr.push(n),
    bf();
}
function Ul(n, e = ts ? dn + 1 : 0) {
  for (; e < Et.length; e++) {
    const t = Et[e];
    t && t.pre && (Et.splice(e, 1), e--, t());
  }
}
function Sf(n) {
  if (mr.length) {
    const e = [...new Set(mr)];
    if (((mr.length = 0), An)) {
      An.push(...e);
      return;
    }
    for (An = e, An.sort((t, i) => ns(t) - ns(i)), mi = 0; mi < An.length; mi++)
      An[mi]();
    (An = null), (mi = 0);
  }
}
const ns = n => (n.id == null ? 1 / 0 : n.id),
  np = (n, e) => {
    const t = ns(n) - ns(e);
    if (t === 0) {
      if (n.pre && !e.pre) return -1;
      if (e.pre && !n.pre) return 1;
    }
    return t;
  };
function wf(n) {
  (ya = !1), (ts = !0), Et.sort(np);
  const e = sn;
  try {
    for (dn = 0; dn < Et.length; dn++) {
      const t = Et[dn];
      t && t.active !== !1 && Kn(t, null, 14);
    }
  } finally {
    (dn = 0),
      (Et.length = 0),
      Sf(),
      (ts = !1),
      (il = null),
      (Et.length || mr.length) && wf();
  }
}
function ip(n, e, ...t) {
  if (n.isUnmounted) return;
  const i = n.vnode.props || Ke;
  let r = t;
  const s = e.startsWith('update:'),
    a = s && e.slice(7);
  if (a && a in i) {
    const u = `${a === 'modelValue' ? 'model' : a}Modifiers`,
      { number: f, trim: h } = i[u] || Ke;
    h && (r = t.map(d => d.trim())), f && (r = t.map(_d));
  }
  let o,
    l = i[(o = Eo(e))] || i[(o = Eo(xr(e)))];
  !l && s && (l = i[(o = Eo(Pr(e)))]), l && Xt(l, n, 6, r);
  const c = i[o + 'Once'];
  if (c) {
    if (!n.emitted) n.emitted = {};
    else if (n.emitted[o]) return;
    (n.emitted[o] = !0), Xt(c, n, 6, r);
  }
}
function Ef(n, e, t = !1) {
  const i = e.emitsCache,
    r = i.get(n);
  if (r !== void 0) return r;
  const s = n.emits;
  let a = {},
    o = !1;
  if (!Ue(n)) {
    const l = c => {
      const u = Ef(c, e, !0);
      u && ((o = !0), At(a, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l),
      n.extends && l(n.extends),
      n.mixins && n.mixins.forEach(l);
  }
  return !s && !o
    ? (tt(n) && i.set(n, null), null)
    : (Oe(s) ? s.forEach(l => (a[l] = null)) : At(a, s),
      tt(n) && i.set(n, a),
      a);
}
function co(n, e) {
  return !n || !ro(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      Ge(n, e[0].toLowerCase() + e.slice(1)) || Ge(n, Pr(e)) || Ge(n, e));
}
let mn = null,
  Tf = null;
function Ys(n) {
  const e = mn;
  return (mn = n), (Tf = (n && n.type.__scopeId) || null), e;
}
function Af(n, e = mn, t) {
  if (!e || n._n) return n;
  const i = (...r) => {
    i._d && $l(-1);
    const s = Ys(e);
    let a;
    try {
      a = n(...r);
    } finally {
      Ys(s), i._d && $l(1);
    }
    return a;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function Ao(n) {
  const {
    type: e,
    vnode: t,
    proxy: i,
    withProxy: r,
    props: s,
    propsOptions: [a],
    slots: o,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: d,
    ctx: g,
    inheritAttrs: m,
  } = n;
  let p, _;
  const x = Ys(n);
  try {
    if (t.shapeFlag & 4) {
      const b = r || i;
      (p = fn(u.call(b, b, f, s, d, h, g))), (_ = l);
    } else {
      const b = e;
      (p = fn(
        b.length > 1 ? b(s, { attrs: l, slots: o, emit: c }) : b(s, null)
      )),
        (_ = e.props ? l : rp(l));
    }
  } catch (b) {
    (jr.length = 0), lo(b, n, 1), (p = _t(Pn));
  }
  let y = p;
  if (_ && m !== !1) {
    const b = Object.keys(_),
      { shapeFlag: S } = y;
    b.length && S & 7 && (a && b.some(qa) && (_ = sp(_, a)), (y = ii(y, _)));
  }
  return (
    t.dirs && ((y = ii(y)), (y.dirs = y.dirs ? y.dirs.concat(t.dirs) : t.dirs)),
    t.transition && (y.transition = t.transition),
    (p = y),
    Ys(x),
    p
  );
}
const rp = n => {
    let e;
    for (const t in n)
      (t === 'class' || t === 'style' || ro(t)) && ((e || (e = {}))[t] = n[t]);
    return e;
  },
  sp = (n, e) => {
    const t = {};
    for (const i in n) (!qa(i) || !(i.slice(9) in e)) && (t[i] = n[i]);
    return t;
  };
function op(n, e, t) {
  const { props: i, children: r, component: s } = n,
    { props: a, children: o, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (t && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return i ? Bl(i, a, c) : !!a;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (a[h] !== i[h] && !co(c, h)) return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable)
      ? !0
      : i === a
      ? !1
      : i
      ? a
        ? Bl(i, a, c)
        : !0
      : !!a;
  return !1;
}
function Bl(n, e, t) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(n).length) return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== n[s] && !co(t, s)) return !0;
  }
  return !1;
}
function ap({ vnode: n, parent: e }, t) {
  for (; e && e.subTree === n; ) ((n = e.vnode).el = t), (e = e.parent);
}
const lp = n => n.__isSuspense;
function cp(n, e) {
  e && e.pendingBranch
    ? Oe(n)
      ? e.effects.push(...n)
      : e.effects.push(n)
    : tp(n);
}
function Vs(n, e) {
  if (yt) {
    let t = yt.provides;
    const i = yt.parent && yt.parent.provides;
    i === t && (t = yt.provides = Object.create(i)), (t[n] = e);
  }
}
function Jn(n, e, t = !1) {
  const i = yt || mn;
  if (i) {
    const r =
      i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides;
    if (r && n in r) return r[n];
    if (arguments.length > 1) return t && Ue(e) ? e.call(i.proxy) : e;
  }
}
const kl = {};
function Gs(n, e, t) {
  return Cf(n, e, t);
}
function Cf(
  n,
  e,
  { immediate: t, deep: i, flush: r, onTrack: s, onTrigger: a } = Ke
) {
  const o = yt;
  let l,
    c = !1,
    u = !1;
  if (
    (Tt(n)
      ? ((l = () => n.value), (c = $s(n)))
      : pr(n)
      ? ((l = () => n), (i = !0))
      : Oe(n)
      ? ((u = !0),
        (c = n.some(_ => pr(_) || $s(_))),
        (l = () =>
          n.map(_ => {
            if (Tt(_)) return _.value;
            if (pr(_)) return cr(_);
            if (Ue(_)) return Kn(_, o, 2);
          })))
      : Ue(n)
      ? e
        ? (l = () => Kn(n, o, 2))
        : (l = () => {
            if (!(o && o.isUnmounted)) return f && f(), Xt(n, o, 3, [h]);
          })
      : (l = sn),
    e && i)
  ) {
    const _ = l;
    l = () => cr(_());
  }
  let f,
    h = _ => {
      f = p.onStop = () => {
        Kn(_, o, 4);
      };
    };
  if (rs)
    return (h = sn), e ? t && Xt(e, o, 3, [l(), u ? [] : void 0, h]) : l(), sn;
  let d = u ? [] : kl;
  const g = () => {
    if (!!p.active)
      if (e) {
        const _ = p.run();
        (i || c || (u ? _.some((x, y) => Qr(x, d[y])) : Qr(_, d))) &&
          (f && f(), Xt(e, o, 3, [_, d === kl ? void 0 : d, h]), (d = _));
      } else p.run();
  };
  g.allowRecurse = !!e;
  let m;
  r === 'sync'
    ? (m = g)
    : r === 'post'
    ? (m = () => It(g, o && o.suspense))
    : ((g.pre = !0), o && (g.id = o.uid), (m = () => rl(g)));
  const p = new Za(l, m);
  return (
    e
      ? t
        ? g()
        : (d = p.run())
      : r === 'post'
      ? It(p.run.bind(p), o && o.suspense)
      : p.run(),
    () => {
      p.stop(), o && o.scope && Xa(o.scope.effects, p);
    }
  );
}
function up(n, e, t) {
  const i = this.proxy,
    r = vt(n) ? (n.includes('.') ? Lf(i, n) : () => i[n]) : n.bind(i, i);
  let s;
  Ue(e) ? (s = e) : ((s = e.handler), (t = e));
  const a = yt;
  br(this);
  const o = Cf(r, s.bind(i), t);
  return a ? br(a) : wi(), o;
}
function Lf(n, e) {
  const t = e.split('.');
  return () => {
    let i = n;
    for (let r = 0; r < t.length && i; r++) i = i[t[r]];
    return i;
  };
}
function cr(n, e) {
  if (!tt(n) || n.__v_skip || ((e = e || new Set()), e.has(n))) return n;
  if ((e.add(n), Tt(n))) cr(n.value, e);
  else if (Oe(n)) for (let t = 0; t < n.length; t++) cr(n[t], e);
  else if (Zu(n) || dr(n))
    n.forEach(t => {
      cr(t, e);
    });
  else if (Qu(n)) for (const t in n) cr(n[t], e);
  return n;
}
function fp() {
  const n = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ls(() => {
      n.isMounted = !0;
    }),
    If(() => {
      n.isUnmounting = !0;
    }),
    n
  );
}
const Vt = [Function, Array],
  hp = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Vt,
      onEnter: Vt,
      onAfterEnter: Vt,
      onEnterCancelled: Vt,
      onBeforeLeave: Vt,
      onLeave: Vt,
      onAfterLeave: Vt,
      onLeaveCancelled: Vt,
      onBeforeAppear: Vt,
      onAppear: Vt,
      onAfterAppear: Vt,
      onAppearCancelled: Vt,
    },
    setup(n, { slots: e }) {
      const t = Zp(),
        i = fp();
      let r;
      return () => {
        const s = e.default && Rf(e.default(), !0);
        if (!s || !s.length) return;
        let a = s[0];
        if (s.length > 1) {
          for (const m of s)
            if (m.type !== Pn) {
              a = m;
              break;
            }
        }
        const o = We(n),
          { mode: l } = o;
        if (i.isLeaving) return Co(a);
        const c = Vl(a);
        if (!c) return Co(a);
        const u = Ma(c, o, i, t);
        ba(c, u);
        const f = t.subTree,
          h = f && Vl(f);
        let d = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const m = g();
          r === void 0 ? (r = m) : m !== r && ((r = m), (d = !0));
        }
        if (h && h.type !== Pn && (!gi(c, h) || d)) {
          const m = Ma(h, o, i, t);
          if ((ba(h, m), l === 'out-in'))
            return (
              (i.isLeaving = !0),
              (m.afterLeave = () => {
                (i.isLeaving = !1), t.update();
              }),
              Co(a)
            );
          l === 'in-out' &&
            c.type !== Pn &&
            (m.delayLeave = (p, _, x) => {
              const y = Pf(i, h);
              (y[String(h.key)] = h),
                (p._leaveCb = () => {
                  _(), (p._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = x);
            });
        }
        return a;
      };
    },
  },
  dp = hp;
function Pf(n, e) {
  const { leavingVNodes: t } = n;
  let i = t.get(e.type);
  return i || ((i = Object.create(null)), t.set(e.type, i)), i;
}
function Ma(n, e, t, i) {
  const {
      appear: r,
      mode: s,
      persisted: a = !1,
      onBeforeEnter: o,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: h,
      onAfterLeave: d,
      onLeaveCancelled: g,
      onBeforeAppear: m,
      onAppear: p,
      onAfterAppear: _,
      onAppearCancelled: x,
    } = e,
    y = String(n.key),
    b = Pf(t, n),
    S = (M, L) => {
      M && Xt(M, i, 9, L);
    },
    P = (M, L) => {
      const R = L[1];
      S(M, L),
        Oe(M) ? M.every(Y => Y.length <= 1) && R() : M.length <= 1 && R();
    },
    B = {
      mode: s,
      persisted: a,
      beforeEnter(M) {
        let L = o;
        if (!t.isMounted)
          if (r) L = m || o;
          else return;
        M._leaveCb && M._leaveCb(!0);
        const R = b[y];
        R && gi(n, R) && R.el._leaveCb && R.el._leaveCb(), S(L, [M]);
      },
      enter(M) {
        let L = l,
          R = c,
          Y = u;
        if (!t.isMounted)
          if (r) (L = p || l), (R = _ || c), (Y = x || u);
          else return;
        let de = !1;
        const G = (M._enterCb = z => {
          de ||
            ((de = !0),
            z ? S(Y, [M]) : S(R, [M]),
            B.delayedLeave && B.delayedLeave(),
            (M._enterCb = void 0));
        });
        L ? P(L, [M, G]) : G();
      },
      leave(M, L) {
        const R = String(n.key);
        if ((M._enterCb && M._enterCb(!0), t.isUnmounting)) return L();
        S(f, [M]);
        let Y = !1;
        const de = (M._leaveCb = G => {
          Y ||
            ((Y = !0),
            L(),
            G ? S(g, [M]) : S(d, [M]),
            (M._leaveCb = void 0),
            b[R] === n && delete b[R]);
        });
        (b[R] = n), h ? P(h, [M, de]) : de();
      },
      clone(M) {
        return Ma(M, e, t, i);
      },
    };
  return B;
}
function Co(n) {
  if (uo(n)) return (n = ii(n)), (n.children = null), n;
}
function Vl(n) {
  return uo(n) ? (n.children ? n.children[0] : void 0) : n;
}
function ba(n, e) {
  n.shapeFlag & 6 && n.component
    ? ba(n.component.subTree, e)
    : n.shapeFlag & 128
    ? ((n.ssContent.transition = e.clone(n.ssContent)),
      (n.ssFallback.transition = e.clone(n.ssFallback)))
    : (n.transition = e);
}
function Rf(n, e = !1, t) {
  let i = [],
    r = 0;
  for (let s = 0; s < n.length; s++) {
    let a = n[s];
    const o = t == null ? a.key : String(t) + String(a.key != null ? a.key : s);
    a.type === wt
      ? (a.patchFlag & 128 && r++, (i = i.concat(Rf(a.children, e, o))))
      : (e || a.type !== Pn) && i.push(o != null ? ii(a, { key: o }) : a);
  }
  if (r > 1) for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
  return i;
}
function vn(n) {
  return Ue(n) ? { setup: n, name: n.name } : n;
}
const Hs = n => !!n.type.__asyncLoader,
  uo = n => n.type.__isKeepAlive;
function pp(n, e) {
  Df(n, 'a', e);
}
function mp(n, e) {
  Df(n, 'da', e);
}
function Df(n, e, t = yt) {
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
  if ((fo(e, i, t), t)) {
    let r = t.parent;
    for (; r && r.parent; )
      uo(r.parent.vnode) && gp(i, e, t, r), (r = r.parent);
  }
}
function gp(n, e, t, i) {
  const r = fo(e, n, i, !0);
  Ff(() => {
    Xa(i[e], r);
  }, t);
}
function fo(n, e, t = yt, i = !1) {
  if (t) {
    const r = t[n] || (t[n] = []),
      s =
        e.__weh ||
        (e.__weh = (...a) => {
          if (t.isUnmounted) return;
          Rr(), br(t);
          const o = Xt(e, t, n, a);
          return wi(), Dr(), o;
        });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const On =
    n =>
    (e, t = yt) =>
      (!rs || n === 'sp') && fo(n, (...i) => e(...i), t),
  _p = On('bm'),
  ls = On('m'),
  vp = On('bu'),
  xp = On('u'),
  If = On('bum'),
  Ff = On('um'),
  yp = On('sp'),
  Mp = On('rtg'),
  bp = On('rtc');
function Sp(n, e = yt) {
  fo('ec', n, e);
}
function ai(n, e, t, i) {
  const r = n.dirs,
    s = e && e.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (Rr(), Xt(l, t, 8, [n.el, o, n, e]), Dr());
  }
}
const wp = Symbol();
function Mr(n, e, t, i) {
  let r;
  const s = t && t[i];
  if (Oe(n) || vt(n)) {
    r = new Array(n.length);
    for (let a = 0, o = n.length; a < o; a++)
      r[a] = e(n[a], a, void 0, s && s[a]);
  } else if (typeof n == 'number') {
    r = new Array(n);
    for (let a = 0; a < n; a++) r[a] = e(a + 1, a, void 0, s && s[a]);
  } else if (tt(n))
    if (n[Symbol.iterator])
      r = Array.from(n, (a, o) => e(a, o, void 0, s && s[o]));
    else {
      const a = Object.keys(n);
      r = new Array(a.length);
      for (let o = 0, l = a.length; o < l; o++) {
        const c = a[o];
        r[o] = e(n[c], c, o, s && s[o]);
      }
    }
  else r = [];
  return t && (t[i] = r), r;
}
const Sa = n => (n ? (Xf(n) ? cl(n) || n.proxy : Sa(n.parent)) : null),
  Zs = At(Object.create(null), {
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
    $nextTick: n => n.n || (n.n = Mf.bind(n.proxy)),
    $watch: n => up.bind(n),
  }),
  Ep = {
    get({ _: n }, e) {
      const {
        ctx: t,
        setupState: i,
        data: r,
        props: s,
        accessCache: a,
        type: o,
        appContext: l,
      } = n;
      let c;
      if (e[0] !== '$') {
        const d = a[e];
        if (d !== void 0)
          switch (d) {
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
          if (i !== Ke && Ge(i, e)) return (a[e] = 1), i[e];
          if (r !== Ke && Ge(r, e)) return (a[e] = 2), r[e];
          if ((c = n.propsOptions[0]) && Ge(c, e)) return (a[e] = 3), s[e];
          if (t !== Ke && Ge(t, e)) return (a[e] = 4), t[e];
          wa && (a[e] = 0);
        }
      }
      const u = Zs[e];
      let f, h;
      if (u) return e === '$attrs' && Ut(n, 'get', e), u(n);
      if ((f = o.__cssModules) && (f = f[e])) return f;
      if (t !== Ke && Ge(t, e)) return (a[e] = 4), t[e];
      if (((h = l.config.globalProperties), Ge(h, e))) return h[e];
    },
    set({ _: n }, e, t) {
      const { data: i, setupState: r, ctx: s } = n;
      return r !== Ke && Ge(r, e)
        ? ((r[e] = t), !0)
        : i !== Ke && Ge(i, e)
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
      a
    ) {
      let o;
      return (
        !!t[a] ||
        (n !== Ke && Ge(n, a)) ||
        (e !== Ke && Ge(e, a)) ||
        ((o = s[0]) && Ge(o, a)) ||
        Ge(i, a) ||
        Ge(Zs, a) ||
        Ge(r.config.globalProperties, a)
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
function Tp(n) {
  const e = sl(n),
    t = n.proxy,
    i = n.ctx;
  (wa = !1), e.beforeCreate && Gl(e.beforeCreate, n, 'bc');
  const {
    data: r,
    computed: s,
    methods: a,
    watch: o,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: g,
    activated: m,
    deactivated: p,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: y,
    unmounted: b,
    render: S,
    renderTracked: P,
    renderTriggered: B,
    errorCaptured: M,
    serverPrefetch: L,
    expose: R,
    inheritAttrs: Y,
    components: de,
    directives: G,
    filters: z,
  } = e;
  if ((c && Ap(c, i, null, n.appContext.config.unwrapInjectedRef), a))
    for (const Z in a) {
      const W = a[Z];
      Ue(W) && (i[Z] = W.bind(t));
    }
  if (r) {
    const Z = r.call(t, t);
    tt(Z) && (n.data = Oi(Z));
  }
  if (((wa = !0), s))
    for (const Z in s) {
      const W = s[Z],
        U = Ue(W) ? W.bind(t, t) : Ue(W.get) ? W.get.bind(t, t) : sn,
        X = !Ue(W) && Ue(W.set) ? W.set.bind(t) : sn,
        ue = gt({ get: U, set: X });
      Object.defineProperty(i, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: oe => (ue.value = oe),
      });
    }
  if (o) for (const Z in o) Of(o[Z], i, t, Z);
  if (l) {
    const Z = Ue(l) ? l.call(t) : l;
    Reflect.ownKeys(Z).forEach(W => {
      Vs(W, Z[W]);
    });
  }
  u && Gl(u, n, 'c');
  function ie(Z, W) {
    Oe(W) ? W.forEach(U => Z(U.bind(t))) : W && Z(W.bind(t));
  }
  if (
    (ie(_p, f),
    ie(ls, h),
    ie(vp, d),
    ie(xp, g),
    ie(pp, m),
    ie(mp, p),
    ie(Sp, M),
    ie(bp, P),
    ie(Mp, B),
    ie(If, x),
    ie(Ff, b),
    ie(yp, L),
    Oe(R))
  )
    if (R.length) {
      const Z = n.exposed || (n.exposed = {});
      R.forEach(W => {
        Object.defineProperty(Z, W, { get: () => t[W], set: U => (t[W] = U) });
      });
    } else n.exposed || (n.exposed = {});
  S && n.render === sn && (n.render = S),
    Y != null && (n.inheritAttrs = Y),
    de && (n.components = de),
    G && (n.directives = G);
}
function Ap(n, e, t = sn, i = !1) {
  Oe(n) && (n = Ea(n));
  for (const r in n) {
    const s = n[r];
    let a;
    tt(s)
      ? 'default' in s
        ? (a = Jn(s.from || r, s.default, !0))
        : (a = Jn(s.from || r))
      : (a = Jn(s)),
      Tt(a) && i
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: o => (a.value = o),
          })
        : (e[r] = a);
  }
}
function Gl(n, e, t) {
  Xt(Oe(n) ? n.map(i => i.bind(e.proxy)) : n.bind(e.proxy), e, t);
}
function Of(n, e, t, i) {
  const r = i.includes('.') ? Lf(t, i) : () => t[i];
  if (vt(n)) {
    const s = e[n];
    Ue(s) && Gs(r, s);
  } else if (Ue(n)) Gs(r, n.bind(t));
  else if (tt(n))
    if (Oe(n)) n.forEach(s => Of(s, e, t, i));
    else {
      const s = Ue(n.handler) ? n.handler.bind(t) : e[n.handler];
      Ue(s) && Gs(r, s, n);
    }
}
function sl(n) {
  const e = n.type,
    { mixins: t, extends: i } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: a },
    } = n.appContext,
    o = s.get(e);
  let l;
  return (
    o
      ? (l = o)
      : !r.length && !t && !i
      ? (l = e)
      : ((l = {}), r.length && r.forEach(c => Ks(l, c, a, !0)), Ks(l, e, a)),
    tt(e) && s.set(e, l),
    l
  );
}
function Ks(n, e, t, i = !1) {
  const { mixins: r, extends: s } = e;
  s && Ks(n, s, t, !0), r && r.forEach(a => Ks(n, a, t, !0));
  for (const a in e)
    if (!(i && a === 'expose')) {
      const o = Cp[a] || (t && t[a]);
      n[a] = o ? o(n[a], e[a]) : e[a];
    }
  return n;
}
const Cp = {
  data: Hl,
  props: hi,
  emits: hi,
  methods: hi,
  computed: hi,
  beforeCreate: Pt,
  created: Pt,
  beforeMount: Pt,
  mounted: Pt,
  beforeUpdate: Pt,
  updated: Pt,
  beforeDestroy: Pt,
  beforeUnmount: Pt,
  destroyed: Pt,
  unmounted: Pt,
  activated: Pt,
  deactivated: Pt,
  errorCaptured: Pt,
  serverPrefetch: Pt,
  components: hi,
  directives: hi,
  watch: Pp,
  provide: Hl,
  inject: Lp,
};
function Hl(n, e) {
  return e
    ? n
      ? function () {
          return At(
            Ue(n) ? n.call(this, this) : n,
            Ue(e) ? e.call(this, this) : e
          );
        }
      : e
    : n;
}
function Lp(n, e) {
  return hi(Ea(n), Ea(e));
}
function Ea(n) {
  if (Oe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Pt(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function hi(n, e) {
  return n ? At(At(Object.create(null), n), e) : e;
}
function Pp(n, e) {
  if (!n) return e;
  if (!e) return n;
  const t = At(Object.create(null), n);
  for (const i in e) t[i] = Pt(n[i], e[i]);
  return t;
}
function Rp(n, e, t, i = !1) {
  const r = {},
    s = {};
  js(s, ho, 1), (n.propsDefaults = Object.create(null)), Nf(n, e, r, s);
  for (const a in n.propsOptions[0]) a in r || (r[a] = void 0);
  t ? (n.props = i ? r : Xd(r)) : n.type.props ? (n.props = r) : (n.props = s),
    (n.attrs = s);
}
function Dp(n, e, t, i) {
  const {
      props: r,
      attrs: s,
      vnode: { patchFlag: a },
    } = n,
    o = We(r),
    [l] = n.propsOptions;
  let c = !1;
  if ((i || a > 0) && !(a & 16)) {
    if (a & 8) {
      const u = n.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (co(n.emitsOptions, h)) continue;
        const d = e[h];
        if (l)
          if (Ge(s, h)) d !== s[h] && ((s[h] = d), (c = !0));
          else {
            const g = xr(h);
            r[g] = Ta(l, o, g, d, n, !1);
          }
        else d !== s[h] && ((s[h] = d), (c = !0));
      }
    }
  } else {
    Nf(n, e, r, s) && (c = !0);
    let u;
    for (const f in o)
      (!e || (!Ge(e, f) && ((u = Pr(f)) === f || !Ge(e, u)))) &&
        (l
          ? t &&
            (t[f] !== void 0 || t[u] !== void 0) &&
            (r[f] = Ta(l, o, f, void 0, n, !0))
          : delete r[f]);
    if (s !== o)
      for (const f in s) (!e || (!Ge(e, f) && !0)) && (delete s[f], (c = !0));
  }
  c && Fn(n, 'set', '$attrs');
}
function Nf(n, e, t, i) {
  const [r, s] = n.propsOptions;
  let a = !1,
    o;
  if (e)
    for (let l in e) {
      if (ks(l)) continue;
      const c = e[l];
      let u;
      r && Ge(r, (u = xr(l)))
        ? !s || !s.includes(u)
          ? (t[u] = c)
          : ((o || (o = {}))[u] = c)
        : co(n.emitsOptions, l) ||
          ((!(l in i) || c !== i[l]) && ((i[l] = c), (a = !0)));
    }
  if (s) {
    const l = We(t),
      c = o || Ke;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      t[f] = Ta(r, l, f, c[f], n, !Ge(c, f));
    }
  }
  return a;
}
function Ta(n, e, t, i, r, s) {
  const a = n[t];
  if (a != null) {
    const o = Ge(a, 'default');
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && Ue(l)) {
        const { propsDefaults: c } = r;
        t in c ? (i = c[t]) : (br(r), (i = c[t] = l.call(null, e)), wi());
      } else i = l;
    }
    a[0] &&
      (s && !o ? (i = !1) : a[1] && (i === '' || i === Pr(t)) && (i = !0));
  }
  return i;
}
function zf(n, e, t = !1) {
  const i = e.propsCache,
    r = i.get(n);
  if (r) return r;
  const s = n.props,
    a = {},
    o = [];
  let l = !1;
  if (!Ue(n)) {
    const u = f => {
      l = !0;
      const [h, d] = zf(f, e, !0);
      At(a, h), d && o.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(u),
      n.extends && u(n.extends),
      n.mixins && n.mixins.forEach(u);
  }
  if (!s && !l) return tt(n) && i.set(n, hr), hr;
  if (Oe(s))
    for (let u = 0; u < s.length; u++) {
      const f = xr(s[u]);
      Wl(f) && (a[f] = Ke);
    }
  else if (s)
    for (const u in s) {
      const f = xr(u);
      if (Wl(f)) {
        const h = s[u],
          d = (a[f] = Oe(h) || Ue(h) ? { type: h } : h);
        if (d) {
          const g = jl(Boolean, d.type),
            m = jl(String, d.type);
          (d[0] = g > -1),
            (d[1] = m < 0 || g < m),
            (g > -1 || Ge(d, 'default')) && o.push(f);
        }
      }
    }
  const c = [a, o];
  return tt(n) && i.set(n, c), c;
}
function Wl(n) {
  return n[0] !== '$';
}
function ql(n) {
  const e = n && n.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : n === null ? 'null' : '';
}
function Xl(n, e) {
  return ql(n) === ql(e);
}
function jl(n, e) {
  return Oe(e) ? e.findIndex(t => Xl(t, n)) : Ue(e) && Xl(e, n) ? 0 : -1;
}
const Uf = n => n[0] === '_' || n === '$stable',
  ol = n => (Oe(n) ? n.map(fn) : [fn(n)]),
  Ip = (n, e, t) => {
    if (e._n) return e;
    const i = Af((...r) => ol(e(...r)), t);
    return (i._c = !1), i;
  },
  Bf = (n, e, t) => {
    const i = n._ctx;
    for (const r in n) {
      if (Uf(r)) continue;
      const s = n[r];
      if (Ue(s)) e[r] = Ip(r, s, i);
      else if (s != null) {
        const a = ol(s);
        e[r] = () => a;
      }
    }
  },
  kf = (n, e) => {
    const t = ol(e);
    n.slots.default = () => t;
  },
  Fp = (n, e) => {
    if (n.vnode.shapeFlag & 32) {
      const t = e._;
      t ? ((n.slots = We(e)), js(e, '_', t)) : Bf(e, (n.slots = {}));
    } else (n.slots = {}), e && kf(n, e);
    js(n.slots, ho, 1);
  },
  Op = (n, e, t) => {
    const { vnode: i, slots: r } = n;
    let s = !0,
      a = Ke;
    if (i.shapeFlag & 32) {
      const o = e._;
      o
        ? t && o === 1
          ? (s = !1)
          : (At(r, e), !t && o === 1 && delete r._)
        : ((s = !e.$stable), Bf(e, r)),
        (a = e);
    } else e && (kf(n, e), (a = { default: 1 }));
    if (s) for (const o in r) !Uf(o) && !(o in a) && delete r[o];
  };
function Vf() {
  return {
    app: null,
    config: {
      isNativeTag: fd,
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
let Np = 0;
function zp(n, e) {
  return function (i, r = null) {
    Ue(i) || (i = Object.assign({}, i)), r != null && !tt(r) && (r = null);
    const s = Vf(),
      a = new Set();
    let o = !1;
    const l = (s.app = {
      _uid: Np++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: nm,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          a.has(c) ||
            (c && Ue(c.install)
              ? (a.add(c), c.install(l, ...u))
              : Ue(c) && (a.add(c), c(l, ...u))),
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
        if (!o) {
          const h = _t(i, r);
          return (
            (h.appContext = s),
            u && e ? e(h, c) : n(h, c, f),
            (o = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            cl(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        o && (n(null, l._container), delete l._container.__vue_app__);
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
    n.forEach((h, d) => Aa(h, e && (Oe(e) ? e[d] : e), t, i, r));
    return;
  }
  if (Hs(i) && !r) return;
  const s = i.shapeFlag & 4 ? cl(i.component) || i.component.proxy : i.el,
    a = r ? null : s,
    { i: o, r: l } = n,
    c = e && e.r,
    u = o.refs === Ke ? (o.refs = {}) : o.refs,
    f = o.setupState;
  if (
    (c != null &&
      c !== l &&
      (vt(c)
        ? ((u[c] = null), Ge(f, c) && (f[c] = null))
        : Tt(c) && (c.value = null)),
    Ue(l))
  )
    Kn(l, o, 12, [a, u]);
  else {
    const h = vt(l),
      d = Tt(l);
    if (h || d) {
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
            ? ((u[l] = a), Ge(f, l) && (f[l] = a))
            : d && ((l.value = a), n.k && (u[n.k] = a));
      };
      a ? ((g.id = -1), It(g, t)) : g();
    }
  }
}
const It = cp;
function Up(n) {
  return Bp(n);
}
function Bp(n, e) {
  const t = vd();
  t.__VUE__ = !0;
  const {
      insert: i,
      remove: r,
      patchProp: s,
      createElement: a,
      createText: o,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: d = sn,
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
      E && !gi(E, A) && ((j = ae(E)), oe(E, K, he, !0), (E = null)),
        A.patchFlag === -2 && ((me = !1), (A.dynamicChildren = null));
      const { type: se, ref: w, shapeFlag: v } = A;
      switch (se) {
        case al:
          p(E, A, H, j);
          break;
        case Pn:
          _(E, A, H, j);
          break;
        case Lo:
          E == null && x(A, H, j, pe);
          break;
        case wt:
          de(E, A, H, j, K, he, pe, re, me);
          break;
        default:
          v & 1
            ? S(E, A, H, j, K, he, pe, re, me)
            : v & 6
            ? G(E, A, H, j, K, he, pe, re, me)
            : (v & 64 || v & 128) &&
              se.process(E, A, H, j, K, he, pe, re, me, ve);
      }
      w != null && K && Aa(w, E && E.ref, he, A || E, !A);
    },
    p = (E, A, H, j) => {
      if (E == null) i((A.el = o(A.children)), H, j);
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
    y = ({ el: E, anchor: A }, H, j) => {
      let K;
      for (; E && E !== A; ) (K = h(E)), i(E, H, j), (E = K);
      i(A, H, j);
    },
    b = ({ el: E, anchor: A }) => {
      let H;
      for (; E && E !== A; ) (H = h(E)), r(E), (E = H);
      r(A);
    },
    S = (E, A, H, j, K, he, pe, re, me) => {
      (pe = pe || A.type === 'svg'),
        E == null ? P(A, H, j, K, he, pe, re, me) : L(E, A, K, he, pe, re, me);
    },
    P = (E, A, H, j, K, he, pe, re) => {
      let me, se;
      const { type: w, props: v, shapeFlag: F, transition: $, dirs: Q } = E;
      if (
        ((me = E.el = a(E.type, he, v && v.is, v)),
        F & 8
          ? u(me, E.children)
          : F & 16 &&
            M(E.children, me, null, j, K, he && w !== 'foreignObject', pe, re),
        Q && ai(E, null, j, 'created'),
        v)
      ) {
        for (const ye in v)
          ye !== 'value' &&
            !ks(ye) &&
            s(me, ye, null, v[ye], he, E.children, j, K, I);
        'value' in v && s(me, 'value', null, v.value),
          (se = v.onVnodeBeforeMount) && cn(se, j, E);
      }
      B(me, E, E.scopeId, pe, j), Q && ai(E, null, j, 'beforeMount');
      const fe = (!K || (K && !K.pendingBranch)) && $ && !$.persisted;
      fe && $.beforeEnter(me),
        i(me, A, H),
        ((se = v && v.onVnodeMounted) || fe || Q) &&
          It(() => {
            se && cn(se, j, E),
              fe && $.enter(me),
              Q && ai(E, null, j, 'mounted');
          }, K);
    },
    B = (E, A, H, j, K) => {
      if ((H && d(E, H), j)) for (let he = 0; he < j.length; he++) d(E, j[he]);
      if (K) {
        let he = K.subTree;
        if (A === he) {
          const pe = K.vnode;
          B(E, pe, pe.scopeId, pe.slotScopeIds, K.parent);
        }
      }
    },
    M = (E, A, H, j, K, he, pe, re, me = 0) => {
      for (let se = me; se < E.length; se++) {
        const w = (E[se] = re ? Xn(E[se]) : fn(E[se]));
        m(null, w, A, H, j, K, he, pe, re);
      }
    },
    L = (E, A, H, j, K, he, pe) => {
      const re = (A.el = E.el);
      let { patchFlag: me, dynamicChildren: se, dirs: w } = A;
      me |= E.patchFlag & 16;
      const v = E.props || Ke,
        F = A.props || Ke;
      let $;
      H && li(H, !1),
        ($ = F.onVnodeBeforeUpdate) && cn($, H, A, E),
        w && ai(A, E, H, 'beforeUpdate'),
        H && li(H, !0);
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
        It(() => {
          $ && cn($, H, A, E), w && ai(A, E, H, 'updated');
        }, j);
    },
    R = (E, A, H, j, K, he, pe) => {
      for (let re = 0; re < A.length; re++) {
        const me = E[re],
          se = A[re],
          w =
            me.el && (me.type === wt || !gi(me, se) || me.shapeFlag & 70)
              ? f(me.el)
              : H;
        m(me, se, w, null, j, K, he, pe, !0);
      }
    },
    Y = (E, A, H, j, K, he, pe) => {
      if (H !== j) {
        if (H !== Ke)
          for (const re in H)
            !ks(re) &&
              !(re in j) &&
              s(E, re, H[re], null, pe, A.children, K, he, I);
        for (const re in j) {
          if (ks(re)) continue;
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
      const se = (A.el = E ? E.el : o('')),
        w = (A.anchor = E ? E.anchor : o(''));
      let { patchFlag: v, dynamicChildren: F, slotScopeIds: $ } = A;
      $ && (re = re ? re.concat($) : $),
        E == null
          ? (i(se, H, j), i(w, H, j), M(A.children, H, w, K, he, pe, re, me))
          : v > 0 && v & 64 && F && E.dynamicChildren
          ? (R(E.dynamicChildren, F, H, K, he, pe, re),
            (A.key != null || (K && A === K.subTree)) && Gf(E, A, !0))
          : W(E, A, H, w, K, he, pe, re, me);
    },
    G = (E, A, H, j, K, he, pe, re, me) => {
      (A.slotScopeIds = re),
        E == null
          ? A.shapeFlag & 512
            ? K.ctx.activate(A, H, j, pe, me)
            : z(A, H, j, K, he, pe, me)
          : te(E, A, me);
    },
    z = (E, A, H, j, K, he, pe) => {
      const re = (E.component = Yp(E, j, K));
      if ((uo(E) && (re.ctx.renderer = ve), Kp(re), re.asyncDep)) {
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
      if (op(E, A, H))
        if (j.asyncDep && !j.asyncResolved) {
          Z(j, A, H);
          return;
        } else (j.next = A), ep(j.update), j.update();
      else (A.el = E.el), (j.vnode = A);
    },
    ie = (E, A, H, j, K, he, pe) => {
      const re = () => {
          if (E.isMounted) {
            let { next: w, bu: v, u: F, parent: $, vnode: Q } = E,
              fe = w,
              ye;
            li(E, !1),
              w ? ((w.el = Q.el), Z(E, w, pe)) : (w = Q),
              v && To(v),
              (ye = w.props && w.props.onVnodeBeforeUpdate) && cn(ye, $, w, Q),
              li(E, !0);
            const C = Ao(E),
              O = E.subTree;
            (E.subTree = C),
              m(O, C, f(O.el), ae(O), E, K, he),
              (w.el = C.el),
              fe === null && ap(E, C.el),
              F && It(F, K),
              (ye = w.props && w.props.onVnodeUpdated) &&
                It(() => cn(ye, $, w, Q), K);
          } else {
            let w;
            const { el: v, props: F } = A,
              { bm: $, m: Q, parent: fe } = E,
              ye = Hs(A);
            if (
              (li(E, !1),
              $ && To($),
              !ye && (w = F && F.onVnodeBeforeMount) && cn(w, fe, A),
              li(E, !0),
              v && Ee)
            ) {
              const C = () => {
                (E.subTree = Ao(E)), Ee(v, E.subTree, E, K, null);
              };
              ye
                ? A.type.__asyncLoader().then(() => !E.isUnmounted && C())
                : C();
            } else {
              const C = (E.subTree = Ao(E));
              m(null, C, H, j, E, K, he), (A.el = C.el);
            }
            if ((Q && It(Q, K), !ye && (w = F && F.onVnodeMounted))) {
              const C = A;
              It(() => cn(w, fe, C), K);
            }
            (A.shapeFlag & 256 ||
              (fe && Hs(fe.vnode) && fe.vnode.shapeFlag & 256)) &&
              E.a &&
              It(E.a, K),
              (E.isMounted = !0),
              (A = H = j = null);
          }
        },
        me = (E.effect = new Za(re, () => rl(se), E.scope)),
        se = (E.update = () => me.run());
      (se.id = E.uid), li(E, !0), se();
    },
    Z = (E, A, H) => {
      A.component = E;
      const j = E.vnode.props;
      (E.vnode = A),
        (E.next = null),
        Dp(E, A.props, j, H),
        Op(E, A.children, H),
        Rr(),
        Ul(),
        Dr();
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
          U(se, v, H, j, K, he, pe, re, me);
          return;
        }
      }
      $ & 8
        ? (w & 16 && I(se, K, he), v !== se && u(H, v))
        : w & 16
        ? $ & 16
          ? X(se, v, H, j, K, he, pe, re, me)
          : I(se, K, he, !0)
        : (w & 8 && u(H, ''), $ & 16 && M(v, H, j, K, he, pe, re, me));
    },
    U = (E, A, H, j, K, he, pe, re, me) => {
      (E = E || hr), (A = A || hr);
      const se = E.length,
        w = A.length,
        v = Math.min(se, w);
      let F;
      for (F = 0; F < v; F++) {
        const $ = (A[F] = me ? Xn(A[F]) : fn(A[F]));
        m(E[F], $, H, null, K, he, pe, re, me);
      }
      se > w ? I(E, K, he, !0, !1, v) : M(A, H, j, K, he, pe, re, me, v);
    },
    X = (E, A, H, j, K, he, pe, re, me) => {
      let se = 0;
      const w = A.length;
      let v = E.length - 1,
        F = w - 1;
      for (; se <= v && se <= F; ) {
        const $ = E[se],
          Q = (A[se] = me ? Xn(A[se]) : fn(A[se]));
        if (gi($, Q)) m($, Q, H, null, K, he, pe, re, me);
        else break;
        se++;
      }
      for (; se <= v && se <= F; ) {
        const $ = E[v],
          Q = (A[F] = me ? Xn(A[F]) : fn(A[F]));
        if (gi($, Q)) m($, Q, H, null, K, he, pe, re, me);
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
              (A[se] = me ? Xn(A[se]) : fn(A[se])),
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
          const Se = (A[se] = me ? Xn(A[se]) : fn(A[se]));
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
              if (be[ye - Q] === 0 && gi(Se, A[ye])) {
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
        const Ce = Me ? kp(be) : hr;
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
      if (pe === wt) {
        i(he, A, H);
        for (let v = 0; v < me.length; v++) ue(me[v], A, H, j);
        i(E.anchor, A, H);
        return;
      }
      if (pe === Lo) {
        y(E, A, H);
        return;
      }
      if (j !== 2 && se & 1 && re)
        if (j === 0) re.beforeEnter(he), i(he, A, H), It(() => re.enter(he), K);
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
        Q = !Hs(E);
      let fe;
      if ((Q && (fe = pe && pe.onVnodeBeforeUnmount) && cn(fe, A, E), w & 6))
        V(E.component, H, j);
      else {
        if (w & 128) {
          E.suspense.unmount(H, j);
          return;
        }
        $ && ai(E, null, A, 'beforeUnmount'),
          w & 64
            ? E.type.remove(E, A, H, K, ve, j)
            : se && (he !== wt || (v > 0 && v & 64))
            ? I(se, A, H, !1, !0)
            : ((he === wt && v & 384) || (!K && w & 16)) && I(me, A, H),
          j && le(E);
      }
      ((Q && (fe = pe && pe.onVnodeUnmounted)) || $) &&
        It(() => {
          fe && cn(fe, A, E), $ && ai(E, null, A, 'unmounted');
        }, H);
    },
    le = E => {
      const { type: A, el: H, anchor: j, transition: K } = E;
      if (A === wt) {
        we(H, j);
        return;
      }
      if (A === Lo) {
        b(E);
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
      j && To(j),
        K.stop(),
        he && ((he.active = !1), oe(pe, E, A, H)),
        re && It(re, A),
        It(() => {
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
        Ul(),
        Sf(),
        (A._vnode = E);
    },
    ve = {
      p: m,
      um: oe,
      m: ue,
      r: le,
      mt: z,
      mc: M,
      pc: W,
      pbc: R,
      n: ae,
      o: n,
    };
  let _e, Ee;
  return (
    e && ([_e, Ee] = e(ve)), { render: ce, hydrate: _e, createApp: zp(ce, _e) }
  );
}
function li({ effect: n, update: e }, t) {
  n.allowRecurse = e.allowRecurse = t;
}
function Gf(n, e, t = !1) {
  const i = n.children,
    r = e.children;
  if (Oe(i) && Oe(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = r[s] = Xn(r[s])), (o.el = a.el)),
        t || Gf(a, o));
    }
}
function kp(n) {
  const e = n.slice(),
    t = [0];
  let i, r, s, a, o;
  const l = n.length;
  for (i = 0; i < l; i++) {
    const c = n[i];
    if (c !== 0) {
      if (((r = t[t.length - 1]), n[r] < c)) {
        (e[i] = r), t.push(i);
        continue;
      }
      for (s = 0, a = t.length - 1; s < a; )
        (o = (s + a) >> 1), n[t[o]] < c ? (s = o + 1) : (a = o);
      c < n[t[s]] && (s > 0 && (e[i] = t[s - 1]), (t[s] = i));
    }
  }
  for (s = t.length, a = t[s - 1]; s-- > 0; ) (t[s] = a), (a = e[a]);
  return t;
}
const Vp = n => n.__isTeleport,
  wt = Symbol(void 0),
  al = Symbol(void 0),
  Pn = Symbol(void 0),
  Lo = Symbol(void 0),
  jr = [];
let rn = null;
function at(n = !1) {
  jr.push((rn = n ? null : []));
}
function Gp() {
  jr.pop(), (rn = jr[jr.length - 1] || null);
}
let is = 1;
function $l(n) {
  is += n;
}
function Hf(n) {
  return (
    (n.dynamicChildren = is > 0 ? rn || hr : null),
    Gp(),
    is > 0 && rn && rn.push(n),
    n
  );
}
function ut(n, e, t, i, r, s) {
  return Hf(Je(n, e, t, i, r, s, !0));
}
function Hp(n, e, t, i, r) {
  return Hf(_t(n, e, t, i, r, !0));
}
function Ca(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function gi(n, e) {
  return n.type === e.type && n.key === e.key;
}
const ho = '__vInternal',
  Wf = ({ key: n }) => (n != null ? n : null),
  Ws = ({ ref: n, ref_key: e, ref_for: t }) =>
    n != null
      ? vt(n) || Tt(n) || Ue(n)
        ? { i: mn, r: n, k: e, f: !!t }
        : n
      : null;
function Je(
  n,
  e = null,
  t = null,
  i = 0,
  r = null,
  s = n === wt ? 0 : 1,
  a = !1,
  o = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && Wf(e),
    ref: e && Ws(e),
    scopeId: Tf,
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
    o
      ? (ll(l, t), s & 128 && n.normalize(l))
      : t && (l.shapeFlag |= vt(t) ? 8 : 16),
    is > 0 &&
      !a &&
      rn &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      rn.push(l),
    l
  );
}
const _t = Wp;
function Wp(n, e = null, t = null, i = 0, r = null, s = !1) {
  if (((!n || n === wp) && (n = Pn), Ca(n))) {
    const o = ii(n, e, !0);
    return (
      t && ll(o, t),
      is > 0 &&
        !s &&
        rn &&
        (o.shapeFlag & 6 ? (rn[rn.indexOf(n)] = o) : rn.push(o)),
      (o.patchFlag |= -2),
      o
    );
  }
  if ((tm(n) && (n = n.__vccOpts), e)) {
    e = qp(e);
    let { class: o, style: l } = e;
    o && !vt(o) && (e.class = as(o)),
      tt(l) && (pf(l) && !Oe(l) && (l = At({}, l)), (e.style = ti(l)));
  }
  const a = vt(n) ? 1 : lp(n) ? 128 : Vp(n) ? 64 : tt(n) ? 4 : Ue(n) ? 2 : 0;
  return Je(n, e, t, i, r, a, s, !0);
}
function qp(n) {
  return n ? (pf(n) || ho in n ? At({}, n) : n) : null;
}
function ii(n, e, t = !1) {
  const { props: i, ref: r, patchFlag: s, children: a } = n,
    o = e ? Xp(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: o,
    key: o && Wf(o),
    ref:
      e && e.ref
        ? t && r
          ? Oe(r)
            ? r.concat(Ws(e))
            : [r, Ws(e)]
          : Ws(e)
        : r,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: a,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    patchFlag: e && n.type !== wt ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: n.transition,
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && ii(n.ssContent),
    ssFallback: n.ssFallback && ii(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
  };
}
function qf(n = ' ', e = 0) {
  return _t(al, null, n, e);
}
function fn(n) {
  return n == null || typeof n == 'boolean'
    ? _t(Pn)
    : Oe(n)
    ? _t(wt, null, n.slice())
    : typeof n == 'object'
    ? Xn(n)
    : _t(al, null, String(n));
}
function Xn(n) {
  return (n.el === null && n.patchFlag !== -1) || n.memo ? n : ii(n);
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
      !r && !(ho in e)
        ? (e._ctx = mn)
        : r === 3 &&
          mn &&
          (mn.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (n.patchFlag |= 1024)));
    }
  else
    Ue(e)
      ? ((e = { default: e, _ctx: mn }), (t = 32))
      : ((e = String(e)), i & 64 ? ((t = 16), (e = [qf(e)])) : (t = 8));
  (n.children = e), (n.shapeFlag |= t);
}
function Xp(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    for (const r in i)
      if (r === 'class')
        e.class !== i.class && (e.class = as([e.class, i.class]));
      else if (r === 'style') e.style = ti([e.style, i.style]);
      else if (ro(r)) {
        const s = e[r],
          a = i[r];
        a &&
          s !== a &&
          !(Oe(s) && s.includes(a)) &&
          (e[r] = s ? [].concat(s, a) : a);
      } else r !== '' && (e[r] = i[r]);
  }
  return e;
}
function cn(n, e, t, i = null) {
  Xt(n, e, 7, [t, i]);
}
const jp = Vf();
let $p = 0;
function Yp(n, e, t) {
  const i = n.type,
    r = (e ? e.appContext : n.appContext) || jp,
    s = {
      uid: $p++,
      vnode: n,
      type: i,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new tf(!0),
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
      propsOptions: zf(i, r),
      emitsOptions: Ef(i, r),
      emit: null,
      emitted: null,
      propsDefaults: Ke,
      inheritAttrs: i.inheritAttrs,
      ctx: Ke,
      data: Ke,
      props: Ke,
      attrs: Ke,
      slots: Ke,
      refs: Ke,
      setupState: Ke,
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
    (s.emit = ip.bind(null, s)),
    n.ce && n.ce(s),
    s
  );
}
let yt = null;
const Zp = () => yt || mn,
  br = n => {
    (yt = n), n.scope.on();
  },
  wi = () => {
    yt && yt.scope.off(), (yt = null);
  };
function Xf(n) {
  return n.vnode.shapeFlag & 4;
}
let rs = !1;
function Kp(n, e = !1) {
  rs = e;
  const { props: t, children: i } = n.vnode,
    r = Xf(n);
  Rp(n, t, r, e), Fp(n, i);
  const s = r ? Jp(n, e) : void 0;
  return (rs = !1), s;
}
function Jp(n, e) {
  const t = n.type;
  (n.accessCache = Object.create(null)), (n.proxy = tl(new Proxy(n.ctx, Ep)));
  const { setup: i } = t;
  if (i) {
    const r = (n.setupContext = i.length > 1 ? em(n) : null);
    br(n), Rr();
    const s = Kn(i, n, 0, [n.props, r]);
    if ((Dr(), wi(), Ku(s))) {
      if ((s.then(wi, wi), e))
        return s
          .then(a => {
            Yl(n, a, e);
          })
          .catch(a => {
            lo(a, n, 0);
          });
      n.asyncDep = s;
    } else Yl(n, s, e);
  } else jf(n, e);
}
function Yl(n, e, t) {
  Ue(e)
    ? n.type.__ssrInlineRender
      ? (n.ssrRender = e)
      : (n.render = e)
    : tt(e) && (n.setupState = vf(e)),
    jf(n, t);
}
let Zl;
function jf(n, e, t) {
  const i = n.type;
  if (!n.render) {
    if (!e && Zl && !i.render) {
      const r = i.template || sl(n).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: a } = n.appContext.config,
          { delimiters: o, compilerOptions: l } = i,
          c = At(At({ isCustomElement: s, delimiters: o }, a), l);
        i.render = Zl(r, c);
      }
    }
    n.render = i.render || sn;
  }
  br(n), Rr(), Tp(n), Dr(), wi();
}
function Qp(n) {
  return new Proxy(n.attrs, {
    get(e, t) {
      return Ut(n, 'get', '$attrs'), e[t];
    },
  });
}
function em(n) {
  const e = i => {
    n.exposed = i || {};
  };
  let t;
  return {
    get attrs() {
      return t || (t = Qp(n));
    },
    slots: n.slots,
    emit: n.emit,
    expose: e,
  };
}
function cl(n) {
  if (n.exposed)
    return (
      n.exposeProxy ||
      (n.exposeProxy = new Proxy(vf(tl(n.exposed)), {
        get(e, t) {
          if (t in e) return e[t];
          if (t in Zs) return Zs[t](n);
        },
      }))
    );
}
function tm(n) {
  return Ue(n) && '__vccOpts' in n;
}
const gt = (n, e) => Kd(n, e, rs);
function $f(n, e, t) {
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
const nm = '3.2.41',
  im = 'http://www.w3.org/2000/svg',
  _i = typeof document < 'u' ? document : null,
  Kl = _i && _i.createElement('template'),
  rm = {
    insert: (n, e, t) => {
      e.insertBefore(n, t || null);
    },
    remove: n => {
      const e = n.parentNode;
      e && e.removeChild(n);
    },
    createElement: (n, e, t, i) => {
      const r = e
        ? _i.createElementNS(im, n)
        : _i.createElement(n, t ? { is: t } : void 0);
      return (
        n === 'select' &&
          i &&
          i.multiple != null &&
          r.setAttribute('multiple', i.multiple),
        r
      );
    },
    createText: n => _i.createTextNode(n),
    createComment: n => _i.createComment(n),
    setText: (n, e) => {
      n.nodeValue = e;
    },
    setElementText: (n, e) => {
      n.textContent = e;
    },
    parentNode: n => n.parentNode,
    nextSibling: n => n.nextSibling,
    querySelector: n => _i.querySelector(n),
    setScopeId(n, e) {
      n.setAttribute(e, '');
    },
    insertStaticContent(n, e, t, i, r, s) {
      const a = t ? t.previousSibling : e.lastChild;
      if (r && (r === s || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), t),
            !(r === s || !(r = r.nextSibling));

        );
      else {
        Kl.innerHTML = i ? `<svg>${n}</svg>` : n;
        const o = Kl.content;
        if (i) {
          const l = o.firstChild;
          for (; l.firstChild; ) o.appendChild(l.firstChild);
          o.removeChild(l);
        }
        e.insertBefore(o, t);
      }
      return [
        a ? a.nextSibling : e.firstChild,
        t ? t.previousSibling : e.lastChild,
      ];
    },
  };
function sm(n, e, t) {
  const i = n._vtc;
  i && (e = (e ? [e, ...i] : [...i]).join(' ')),
    e == null
      ? n.removeAttribute('class')
      : t
      ? n.setAttribute('class', e)
      : (n.className = e);
}
function om(n, e, t) {
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
const Jl = /\s*!important$/;
function La(n, e, t) {
  if (Oe(t)) t.forEach(i => La(n, e, i));
  else if ((t == null && (t = ''), e.startsWith('--'))) n.setProperty(e, t);
  else {
    const i = am(n, e);
    Jl.test(t)
      ? n.setProperty(Pr(i), t.replace(Jl, ''), 'important')
      : (n[i] = t);
  }
}
const Ql = ['Webkit', 'Moz', 'ms'],
  Po = {};
function am(n, e) {
  const t = Po[e];
  if (t) return t;
  let i = xr(e);
  if (i !== 'filter' && i in n) return (Po[e] = i);
  i = ef(i);
  for (let r = 0; r < Ql.length; r++) {
    const s = Ql[r] + i;
    if (s in n) return (Po[e] = s);
  }
  return e;
}
const ec = 'http://www.w3.org/1999/xlink';
function lm(n, e, t, i, r) {
  if (i && e.startsWith('xlink:'))
    t == null
      ? n.removeAttributeNS(ec, e.slice(6, e.length))
      : n.setAttributeNS(ec, e, t);
  else {
    const s = ad(e);
    t == null || (s && !$u(t))
      ? n.removeAttribute(e)
      : n.setAttribute(e, s ? '' : t);
  }
}
function cm(n, e, t, i, r, s, a) {
  if (e === 'innerHTML' || e === 'textContent') {
    i && a(i, r, s), (n[e] = t == null ? '' : t);
    return;
  }
  if (e === 'value' && n.tagName !== 'PROGRESS' && !n.tagName.includes('-')) {
    n._value = t;
    const l = t == null ? '' : t;
    (n.value !== l || n.tagName === 'OPTION') && (n.value = l),
      t == null && n.removeAttribute(e);
    return;
  }
  let o = !1;
  if (t === '' || t == null) {
    const l = typeof n[e];
    l === 'boolean'
      ? (t = $u(t))
      : t == null && l === 'string'
      ? ((t = ''), (o = !0))
      : l === 'number' && ((t = 0), (o = !0));
  }
  try {
    n[e] = t;
  } catch {}
  o && n.removeAttribute(e);
}
function um(n, e, t, i) {
  n.addEventListener(e, t, i);
}
function fm(n, e, t, i) {
  n.removeEventListener(e, t, i);
}
function hm(n, e, t, i, r = null) {
  const s = n._vei || (n._vei = {}),
    a = s[e];
  if (i && a) a.value = i;
  else {
    const [o, l] = dm(e);
    if (i) {
      const c = (s[e] = gm(i, r));
      um(n, o, c, l);
    } else a && (fm(n, o, a, l), (s[e] = void 0));
  }
}
const tc = /(?:Once|Passive|Capture)$/;
function dm(n) {
  let e;
  if (tc.test(n)) {
    e = {};
    let i;
    for (; (i = n.match(tc)); )
      (n = n.slice(0, n.length - i[0].length)), (e[i[0].toLowerCase()] = !0);
  }
  return [n[2] === ':' ? n.slice(3) : Pr(n.slice(2)), e];
}
let Ro = 0;
const pm = Promise.resolve(),
  mm = () => Ro || (pm.then(() => (Ro = 0)), (Ro = Date.now()));
function gm(n, e) {
  const t = i => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= t.attached) return;
    Xt(_m(i, t.value), e, 5, [i]);
  };
  return (t.value = n), (t.attached = mm()), t;
}
function _m(n, e) {
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
const nc = /^on[a-z]/,
  vm = (n, e, t, i, r = !1, s, a, o, l) => {
    e === 'class'
      ? sm(n, i, r)
      : e === 'style'
      ? om(n, t, i)
      : ro(e)
      ? qa(e) || hm(n, e, t, i, a)
      : (
          e[0] === '.'
            ? ((e = e.slice(1)), !0)
            : e[0] === '^'
            ? ((e = e.slice(1)), !1)
            : xm(n, e, i, r)
        )
      ? cm(n, e, i, s, a, o, l)
      : (e === 'true-value'
          ? (n._trueValue = i)
          : e === 'false-value' && (n._falseValue = i),
        lm(n, e, i, r));
  };
function xm(n, e, t, i) {
  return i
    ? !!(
        e === 'innerHTML' ||
        e === 'textContent' ||
        (e in n && nc.test(e) && Ue(t))
      )
    : e === 'spellcheck' ||
      e === 'draggable' ||
      e === 'translate' ||
      e === 'form' ||
      (e === 'list' && n.tagName === 'INPUT') ||
      (e === 'type' && n.tagName === 'TEXTAREA') ||
      (nc.test(e) && vt(t))
    ? !1
    : e in n;
}
const ym = {
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
dp.props;
const Mm = At({ patchProp: vm }, rm);
let ic;
function bm() {
  return ic || (ic = Up(Mm));
}
const Sm = (...n) => {
  const e = bm().createApp(...n),
    { mount: t } = e;
  return (
    (e.mount = i => {
      const r = wm(i);
      if (!r) return;
      const s = e._component;
      !Ue(s) && !s.render && !s.template && (s.template = r.innerHTML),
        (r.innerHTML = '');
      const a = t(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        a
      );
    }),
    e
  );
};
function wm(n) {
  return vt(n) ? document.querySelector(n) : n;
}
var Em = !1;
/*!
 * pinia v2.0.23
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Tm = Symbol();
var rc;
(function (n) {
  (n.direct = 'direct'),
    (n.patchObject = 'patch object'),
    (n.patchFunction = 'patch function');
})(rc || (rc = {}));
function Am() {
  const n = xd(!0),
    e = n.run(() => xi({}));
  let t = [],
    i = [];
  const r = tl({
    install(s) {
      (r._a = s),
        s.provide(Tm, r),
        (s.config.globalProperties.$pinia = r),
        i.forEach(a => t.push(a)),
        (i = []);
    },
    use(s) {
      return !this._a && !Em ? i.push(s) : t.push(s), this;
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
function Cm(n) {
  return n.__esModule || n[Symbol.toStringTag] === 'Module';
}
const $e = Object.assign;
function Do(n, e) {
  const t = {};
  for (const i in e) {
    const r = e[i];
    t[i] = an(r) ? r.map(n) : n(r);
  }
  return t;
}
const $r = () => {},
  an = Array.isArray,
  Lm = /\/$/,
  Pm = n => n.replace(Lm, '');
function Io(n, e, t = '/') {
  let i,
    r = {},
    s = '',
    a = '';
  const o = e.indexOf('#');
  let l = e.indexOf('?');
  return (
    o < l && o >= 0 && (l = -1),
    l > -1 &&
      ((i = e.slice(0, l)),
      (s = e.slice(l + 1, o > -1 ? o : e.length)),
      (r = n(s))),
    o > -1 && ((i = i || e.slice(0, o)), (a = e.slice(o, e.length))),
    (i = Fm(i != null ? i : e, t)),
    { fullPath: i + (s && '?') + s + a, path: i, query: r, hash: a }
  );
}
function Rm(n, e) {
  const t = e.query ? n(e.query) : '';
  return e.path + (t && '?') + t + (e.hash || '');
}
function sc(n, e) {
  return !e || !n.toLowerCase().startsWith(e.toLowerCase())
    ? n
    : n.slice(e.length) || '/';
}
function Dm(n, e, t) {
  const i = e.matched.length - 1,
    r = t.matched.length - 1;
  return (
    i > -1 &&
    i === r &&
    Sr(e.matched[i], t.matched[r]) &&
    Yf(e.params, t.params) &&
    n(e.query) === n(t.query) &&
    e.hash === t.hash
  );
}
function Sr(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function Yf(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length) return !1;
  for (const t in n) if (!Im(n[t], e[t])) return !1;
  return !0;
}
function Im(n, e) {
  return an(n) ? oc(n, e) : an(e) ? oc(e, n) : n === e;
}
function oc(n, e) {
  return an(e)
    ? n.length === e.length && n.every((t, i) => t === e[i])
    : n.length === 1 && n[0] === e;
}
function Fm(n, e) {
  if (n.startsWith('/')) return n;
  if (!n) return e;
  const t = e.split('/'),
    i = n.split('/');
  let r = t.length - 1,
    s,
    a;
  for (s = 0; s < i.length; s++)
    if (((a = i[s]), a !== '.'))
      if (a === '..') r > 1 && r--;
      else break;
  return (
    t.slice(0, r).join('/') +
    '/' +
    i.slice(s - (s === i.length ? 1 : 0)).join('/')
  );
}
var ss;
(function (n) {
  (n.pop = 'pop'), (n.push = 'push');
})(ss || (ss = {}));
var Yr;
(function (n) {
  (n.back = 'back'), (n.forward = 'forward'), (n.unknown = '');
})(Yr || (Yr = {}));
function Om(n) {
  if (!n)
    if (ar) {
      const e = document.querySelector('base');
      (n = (e && e.getAttribute('href')) || '/'),
        (n = n.replace(/^\w+:\/\/[^\/]+/, ''));
    } else n = '/';
  return n[0] !== '/' && n[0] !== '#' && (n = '/' + n), Pm(n);
}
const Nm = /^[^#]+#/;
function zm(n, e) {
  return n.replace(Nm, '#') + e;
}
function Um(n, e) {
  const t = document.documentElement.getBoundingClientRect(),
    i = n.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: i.left - t.left - (e.left || 0),
    top: i.top - t.top - (e.top || 0),
  };
}
const po = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Bm(n) {
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
    e = Um(r, n);
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
function km(n, e) {
  Pa.set(n, e);
}
function Vm(n) {
  const e = Pa.get(n);
  return Pa.delete(n), e;
}
let Gm = () => location.protocol + '//' + location.host;
function Zf(n, e) {
  const { pathname: t, search: i, hash: r } = e,
    s = n.indexOf('#');
  if (s > -1) {
    let o = r.includes(n.slice(s)) ? n.slice(s).length : 1,
      l = r.slice(o);
    return l[0] !== '/' && (l = '/' + l), sc(l, '');
  }
  return sc(t, n) + i + r;
}
function Hm(n, e, t, i) {
  let r = [],
    s = [],
    a = null;
  const o = ({ state: h }) => {
    const d = Zf(n, location),
      g = t.value,
      m = e.value;
    let p = 0;
    if (h) {
      if (((t.value = d), (e.value = h), a && a === g)) {
        a = null;
        return;
      }
      p = m ? h.position - m.position : 0;
    } else i(d);
    r.forEach(_ => {
      _(t.value, g, {
        delta: p,
        type: ss.pop,
        direction: p ? (p > 0 ? Yr.forward : Yr.back) : Yr.unknown,
      });
    });
  };
  function l() {
    a = t.value;
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
    !h.state || h.replaceState($e({}, h.state, { scroll: po() }), '');
  }
  function f() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener('popstate', o),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', o),
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
    scroll: r ? po() : null,
  };
}
function Wm(n) {
  const { history: e, location: t } = window,
    i = { value: Zf(n, t) },
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
          : Gm() + n + l;
    try {
      e[u ? 'replaceState' : 'pushState'](c, '', h), (r.value = c);
    } catch (d) {
      console.error(d), t[u ? 'replace' : 'assign'](h);
    }
  }
  function a(l, c) {
    const u = $e({}, e.state, lc(r.value.back, l, r.value.forward, !0), c, {
      position: r.value.position,
    });
    s(l, u, !0), (i.value = l);
  }
  function o(l, c) {
    const u = $e({}, r.value, e.state, { forward: l, scroll: po() });
    s(u.current, u, !0);
    const f = $e({}, lc(i.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (i.value = l);
  }
  return { location: i, state: r, push: o, replace: a };
}
function qm(n) {
  n = Om(n);
  const e = Wm(n),
    t = Hm(n, e.state, e.location, e.replace);
  function i(s, a = !0) {
    a || t.pauseListeners(), history.go(s);
  }
  const r = $e(
    { location: '', base: n, go: i, createHref: zm.bind(null, n) },
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
function Xm(n) {
  return (
    (n = location.host ? n || location.pathname + location.search : ''),
    n.includes('#') || (n += '#'),
    qm(n)
  );
}
function jm(n) {
  return typeof n == 'string' || (n && typeof n == 'object');
}
function Kf(n) {
  return typeof n == 'string' || typeof n == 'symbol';
}
const Un = {
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
  Jf = Symbol('');
var cc;
(function (n) {
  (n[(n.aborted = 4)] = 'aborted'),
    (n[(n.cancelled = 8)] = 'cancelled'),
    (n[(n.duplicated = 16)] = 'duplicated');
})(cc || (cc = {}));
function wr(n, e) {
  return $e(new Error(), { type: n, [Jf]: !0 }, e);
}
function Mn(n, e) {
  return n instanceof Error && Jf in n && (e == null || !!(n.type & e));
}
const uc = '[^/]+?',
  $m = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ym = /[.+*?^${}()[\]/\\]/g;
function Zm(n, e) {
  const t = $e({}, $m, e),
    i = [];
  let r = t.start ? '^' : '';
  const s = [];
  for (const c of n) {
    const u = c.length ? [] : [90];
    t.strict && !c.length && (r += '/');
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let d = 40 + (t.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += '/'), (r += h.value.replace(Ym, '\\$&')), (d += 40);
      else if (h.type === 1) {
        const { value: g, repeatable: m, optional: p, regexp: _ } = h;
        s.push({ name: g, repeatable: m, optional: p });
        const x = _ || uc;
        if (x !== uc) {
          d += 10;
          try {
            new RegExp(`(${x})`);
          } catch (b) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${x}): ` + b.message
            );
          }
        }
        let y = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        f || (y = p && c.length < 2 ? `(?:/${y})` : '/' + y),
          p && (y += '?'),
          (r += y),
          (d += 20),
          p && (d += -8),
          m && (d += -20),
          x === '.*' && (d += -50);
      }
      u.push(d);
    }
    i.push(u);
  }
  if (t.strict && t.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += 0.7000000000000001;
  }
  t.strict || (r += '/?'), t.end ? (r += '$') : t.strict && (r += '(?:/|$)');
  const a = new RegExp(r, t.sensitive ? '' : 'i');
  function o(c) {
    const u = c.match(a),
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
    for (const h of n) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const d of h)
        if (d.type === 0) u += d.value;
        else if (d.type === 1) {
          const { value: g, repeatable: m, optional: p } = d,
            _ = g in c ? c[g] : '';
          if (an(_) && !m)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const x = an(_) ? _.join('/') : _;
          if (!x)
            if (p)
              h.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += x;
        }
    }
    return u || '/';
  }
  return { re: a, score: i, keys: s, parse: o, stringify: l };
}
function Km(n, e) {
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
function Jm(n, e) {
  let t = 0;
  const i = n.score,
    r = e.score;
  for (; t < i.length && t < r.length; ) {
    const s = Km(i[t], r[t]);
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
const Qm = { type: 0, value: '' },
  eg = /[a-zA-Z0-9_]/;
function tg(n) {
  if (!n) return [[]];
  if (n === '/') return [[Qm]];
  if (!n.startsWith('/')) throw new Error(`Invalid path "${n}"`);
  function e(d) {
    throw new Error(`ERR (${t})/"${c}": ${d}`);
  }
  let t = 0,
    i = t;
  const r = [];
  let s;
  function a() {
    s && r.push(s), (s = []);
  }
  let o = 0,
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
  for (; o < n.length; ) {
    if (((l = n[o++]), l === '\\' && t !== 2)) {
      (i = t), (t = 4);
      continue;
    }
    switch (t) {
      case 0:
        l === '/' ? (c && f(), a()) : l === ':' ? (f(), (t = 1)) : h();
        break;
      case 4:
        h(), (t = i);
        break;
      case 1:
        l === '('
          ? (t = 2)
          : eg.test(l)
          ? h()
          : (f(), (t = 0), l !== '*' && l !== '?' && l !== '+' && o--);
        break;
      case 2:
        l === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + l)
            : (t = 3)
          : (u += l);
        break;
      case 3:
        f(), (t = 0), l !== '*' && l !== '?' && l !== '+' && o--, (u = '');
        break;
      default:
        e('Unknown state');
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${c}"`), f(), a(), r;
}
function ng(n, e, t) {
  const i = Zm(tg(n.path), t),
    r = $e(i, { record: n, parent: e, children: [], alias: [] });
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function ig(n, e) {
  const t = [],
    i = new Map();
  e = pc({ strict: !1, end: !0, sensitive: !1 }, e);
  function r(u) {
    return i.get(u);
  }
  function s(u, f, h) {
    const d = !h,
      g = rg(u);
    g.aliasOf = h && h.record;
    const m = pc(e, u),
      p = [g];
    if ('alias' in u) {
      const y = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const b of y)
        p.push(
          $e({}, g, {
            components: h ? h.record.components : g.components,
            path: b,
            aliasOf: h ? h.record : g,
          })
        );
    }
    let _, x;
    for (const y of p) {
      const { path: b } = y;
      if (f && b[0] !== '/') {
        const S = f.record.path,
          P = S[S.length - 1] === '/' ? '' : '/';
        y.path = f.record.path + (b && P + b);
      }
      if (
        ((_ = ng(y, f, m)),
        h
          ? h.alias.push(_)
          : ((x = x || _),
            x !== _ && x.alias.push(_),
            d && u.name && !dc(_) && a(u.name)),
        g.children)
      ) {
        const S = g.children;
        for (let P = 0; P < S.length; P++) s(S[P], _, h && h.children[P]);
      }
      (h = h || _), l(_);
    }
    return x
      ? () => {
          a(x);
        }
      : $r;
  }
  function a(u) {
    if (Kf(u)) {
      const f = i.get(u);
      f &&
        (i.delete(u),
        t.splice(t.indexOf(f), 1),
        f.children.forEach(a),
        f.alias.forEach(a));
    } else {
      const f = t.indexOf(u);
      f > -1 &&
        (t.splice(f, 1),
        u.record.name && i.delete(u.record.name),
        u.children.forEach(a),
        u.alias.forEach(a));
    }
  }
  function o() {
    return t;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < t.length &&
      Jm(u, t[f]) >= 0 &&
      (u.record.path !== t[f].record.path || !Qf(u, t[f]));

    )
      f++;
    t.splice(f, 0, u), u.record.name && !dc(u) && i.set(u.record.name, u);
  }
  function c(u, f) {
    let h,
      d = {},
      g,
      m;
    if ('name' in u && u.name) {
      if (((h = i.get(u.name)), !h)) throw wr(1, { location: u });
      (m = h.record.name),
        (d = $e(
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
        (g = h.stringify(d));
    } else if ('path' in u)
      (g = u.path),
        (h = t.find(x => x.re.test(g))),
        h && ((d = h.parse(g)), (m = h.record.name));
    else {
      if (((h = f.name ? i.get(f.name) : t.find(x => x.re.test(f.path))), !h))
        throw wr(1, { location: u, currentLocation: f });
      (m = h.record.name),
        (d = $e({}, f.params, u.params)),
        (g = h.stringify(d));
    }
    const p = [];
    let _ = h;
    for (; _; ) p.unshift(_.record), (_ = _.parent);
    return { name: m, path: g, params: d, matched: p, meta: og(p) };
  }
  return (
    n.forEach(u => s(u)),
    {
      addRoute: s,
      resolve: c,
      removeRoute: a,
      getRoutes: o,
      getRecordMatcher: r,
    }
  );
}
function hc(n, e) {
  const t = {};
  for (const i of e) i in n && (t[i] = n[i]);
  return t;
}
function rg(n) {
  return {
    path: n.path,
    redirect: n.redirect,
    name: n.name,
    meta: n.meta || {},
    aliasOf: void 0,
    beforeEnter: n.beforeEnter,
    props: sg(n),
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
function sg(n) {
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
function og(n) {
  return n.reduce((e, t) => $e(e, t.meta), {});
}
function pc(n, e) {
  const t = {};
  for (const i in n) t[i] = i in e ? e[i] : n[i];
  return t;
}
function Qf(n, e) {
  return e.children.some(t => t === n || Qf(n, t));
}
const eh = /#/g,
  ag = /&/g,
  lg = /\//g,
  cg = /=/g,
  ug = /\?/g,
  th = /\+/g,
  fg = /%5B/g,
  hg = /%5D/g,
  nh = /%5E/g,
  dg = /%60/g,
  ih = /%7B/g,
  pg = /%7C/g,
  rh = /%7D/g,
  mg = /%20/g;
function ul(n) {
  return encodeURI('' + n)
    .replace(pg, '|')
    .replace(fg, '[')
    .replace(hg, ']');
}
function gg(n) {
  return ul(n).replace(ih, '{').replace(rh, '}').replace(nh, '^');
}
function Ra(n) {
  return ul(n)
    .replace(th, '%2B')
    .replace(mg, '+')
    .replace(eh, '%23')
    .replace(ag, '%26')
    .replace(dg, '`')
    .replace(ih, '{')
    .replace(rh, '}')
    .replace(nh, '^');
}
function _g(n) {
  return Ra(n).replace(cg, '%3D');
}
function vg(n) {
  return ul(n).replace(eh, '%23').replace(ug, '%3F');
}
function xg(n) {
  return n == null ? '' : vg(n).replace(lg, '%2F');
}
function Js(n) {
  try {
    return decodeURIComponent('' + n);
  } catch {}
  return '' + n;
}
function yg(n) {
  const e = {};
  if (n === '' || n === '?') return e;
  const i = (n[0] === '?' ? n.slice(1) : n).split('&');
  for (let r = 0; r < i.length; ++r) {
    const s = i[r].replace(th, ' '),
      a = s.indexOf('='),
      o = Js(a < 0 ? s : s.slice(0, a)),
      l = a < 0 ? null : Js(s.slice(a + 1));
    if (o in e) {
      let c = e[o];
      an(c) || (c = e[o] = [c]), c.push(l);
    } else e[o] = l;
  }
  return e;
}
function mc(n) {
  let e = '';
  for (let t in n) {
    const i = n[t];
    if (((t = _g(t)), i == null)) {
      i !== void 0 && (e += (e.length ? '&' : '') + t);
      continue;
    }
    (an(i) ? i.map(s => s && Ra(s)) : [i && Ra(i)]).forEach(s => {
      s !== void 0 &&
        ((e += (e.length ? '&' : '') + t), s != null && (e += '=' + s));
    });
  }
  return e;
}
function Mg(n) {
  const e = {};
  for (const t in n) {
    const i = n[t];
    i !== void 0 &&
      (e[t] = an(i)
        ? i.map(r => (r == null ? null : '' + r))
        : i == null
        ? i
        : '' + i);
  }
  return e;
}
const bg = Symbol(''),
  gc = Symbol(''),
  fl = Symbol(''),
  sh = Symbol(''),
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
function jn(n, e, t, i, r) {
  const s = i && (i.enterCallbacks[r] = i.enterCallbacks[r] || []);
  return () =>
    new Promise((a, o) => {
      const l = f => {
          f === !1
            ? o(wr(4, { from: t, to: e }))
            : f instanceof Error
            ? o(f)
            : jm(f)
            ? o(wr(2, { from: e, to: f }))
            : (s &&
                i.enterCallbacks[r] === s &&
                typeof f == 'function' &&
                s.push(f),
              a());
        },
        c = n.call(i && i.instances[r], e, t, l);
      let u = Promise.resolve(c);
      n.length < 3 && (u = u.then(l)), u.catch(f => o(f));
    });
}
function Fo(n, e, t, i) {
  const r = [];
  for (const s of n)
    for (const a in s.components) {
      let o = s.components[a];
      if (!(e !== 'beforeRouteEnter' && !s.instances[a]))
        if (Sg(o)) {
          const c = (o.__vccOpts || o)[e];
          c && r.push(jn(c, t, i, s, a));
        } else {
          let l = o();
          r.push(() =>
            l.then(c => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${a}" at "${s.path}"`)
                );
              const u = Cm(c) ? c.default : c;
              s.components[a] = u;
              const h = (u.__vccOpts || u)[e];
              return h && jn(h, t, i, s, a)();
            })
          );
        }
    }
  return r;
}
function Sg(n) {
  return (
    typeof n == 'object' ||
    'displayName' in n ||
    'props' in n ||
    '__vccOpts' in n
  );
}
function _c(n) {
  const e = Jn(fl),
    t = Jn(sh),
    i = gt(() => e.resolve(ft(n.to))),
    r = gt(() => {
      const { matched: l } = i.value,
        { length: c } = l,
        u = l[c - 1],
        f = t.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Sr.bind(null, u));
      if (h > -1) return h;
      const d = vc(l[c - 2]);
      return c > 1 && vc(u) === d && f[f.length - 1].path !== d
        ? f.findIndex(Sr.bind(null, l[c - 2]))
        : h;
    }),
    s = gt(() => r.value > -1 && Tg(t.params, i.value.params)),
    a = gt(
      () =>
        r.value > -1 &&
        r.value === t.matched.length - 1 &&
        Yf(t.params, i.value.params)
    );
  function o(l = {}) {
    return Eg(l)
      ? e[ft(n.replace) ? 'replace' : 'push'](ft(n.to)).catch($r)
      : Promise.resolve();
  }
  return {
    route: i,
    href: gt(() => i.value.href),
    isActive: s,
    isExactActive: a,
    navigate: o,
  };
}
const wg = vn({
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
        { options: i } = Jn(fl),
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
          : $f(
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
  oh = wg;
function Eg(n) {
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
function Tg(n, e) {
  for (const t in e) {
    const i = e[t],
      r = n[t];
    if (typeof i == 'string') {
      if (i !== r) return !1;
    } else if (!an(r) || r.length !== i.length || i.some((s, a) => s !== r[a]))
      return !1;
  }
  return !0;
}
function vc(n) {
  return n ? (n.aliasOf ? n.aliasOf.path : n.path) : '';
}
const xc = (n, e, t) => (n != null ? n : e != null ? e : t),
  Ag = vn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(n, { attrs: e, slots: t }) {
      const i = Jn(Da),
        r = gt(() => n.route || i.value),
        s = Jn(gc, 0),
        a = gt(() => {
          let c = ft(s);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        o = gt(() => r.value.matched[a.value]);
      Vs(
        gc,
        gt(() => a.value + 1)
      ),
        Vs(bg, o),
        Vs(Da, r);
      const l = xi();
      return (
        Gs(
          () => [l.value, o.value, n.name],
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
                (!d || !Sr(u, d) || !h) &&
                (u.enterCallbacks[f] || []).forEach(m => m(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = r.value,
            u = n.name,
            f = o.value,
            h = f && f.components[u];
          if (!h) return yc(t.default, { Component: h, route: c });
          const d = f.props[u],
            g = d
              ? d === !0
                ? c.params
                : typeof d == 'function'
                ? d(c)
                : d
              : null,
            p = $f(
              h,
              $e({}, g, e, {
                onVnodeUnmounted: _ => {
                  _.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return yc(t.default, { Component: p, route: c }) || p;
        }
      );
    },
  });
function yc(n, e) {
  if (!n) return null;
  const t = n(e);
  return t.length === 1 ? t[0] : t;
}
const ah = Ag;
function Cg(n) {
  const e = ig(n.routes, n),
    t = n.parseQuery || yg,
    i = n.stringifyQuery || mc,
    r = n.history,
    s = Nr(),
    a = Nr(),
    o = Nr(),
    l = jd(Un);
  let c = Un;
  ar &&
    n.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Do.bind(null, V => '' + V),
    f = Do.bind(null, xg),
    h = Do.bind(null, Js);
  function d(V, I) {
    let ae, ce;
    return (
      Kf(V) ? ((ae = e.getRecordMatcher(V)), (ce = I)) : (ce = V),
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
  function p(V) {
    return !!e.getRecordMatcher(V);
  }
  function _(V, I) {
    if (((I = $e({}, I || l.value)), typeof V == 'string')) {
      const E = Io(t, V, I.path),
        A = e.resolve({ path: E.path }, I),
        H = r.createHref(E.fullPath);
      return $e(E, A, {
        params: h(A.params),
        hash: Js(E.hash),
        redirectedFrom: void 0,
        href: H,
      });
    }
    let ae;
    if ('path' in V) ae = $e({}, V, { path: Io(t, V.path, I.path).path });
    else {
      const E = $e({}, V.params);
      for (const A in E) E[A] == null && delete E[A];
      (ae = $e({}, V, { params: f(V.params) })), (I.params = f(I.params));
    }
    const ce = e.resolve(ae, I),
      ve = V.hash || '';
    ce.params = u(h(ce.params));
    const _e = Rm(i, $e({}, V, { hash: gg(ve), path: ce.path })),
      Ee = r.createHref(_e);
    return $e(
      { fullPath: _e, hash: ve, query: i === mc ? Mg(V.query) : V.query || {} },
      ce,
      { redirectedFrom: void 0, href: Ee }
    );
  }
  function x(V) {
    return typeof V == 'string' ? Io(t, V, l.value.path) : $e({}, V);
  }
  function y(V, I) {
    if (c !== V) return wr(8, { from: I, to: V });
  }
  function b(V) {
    return B(V);
  }
  function S(V) {
    return b($e(x(V), { replace: !0 }));
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
        Dm(i, ce, ae) &&
        ((H = wr(16, { to: A, from: ce })), X(ce, ce, !0, !1)),
      (H ? Promise.resolve(H) : L(A, ce))
        .catch(j => (Mn(j) ? (Mn(j, 2) ? j : U(j)) : Z(j, A, ce)))
        .then(j => {
          if (j) {
            if (Mn(j, 2))
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
  function M(V, I) {
    const ae = y(V, I);
    return ae ? Promise.reject(ae) : Promise.resolve();
  }
  function L(V, I) {
    let ae;
    const [ce, ve, _e] = Lg(V, I);
    ae = Fo(ce.reverse(), 'beforeRouteLeave', V, I);
    for (const E of ce)
      E.leaveGuards.forEach(A => {
        ae.push(jn(A, V, I));
      });
    const Ee = M.bind(null, V, I);
    return (
      ae.push(Ee),
      ki(ae)
        .then(() => {
          ae = [];
          for (const E of s.list()) ae.push(jn(E, V, I));
          return ae.push(Ee), ki(ae);
        })
        .then(() => {
          ae = Fo(ve, 'beforeRouteUpdate', V, I);
          for (const E of ve)
            E.updateGuards.forEach(A => {
              ae.push(jn(A, V, I));
            });
          return ae.push(Ee), ki(ae);
        })
        .then(() => {
          ae = [];
          for (const E of V.matched)
            if (E.beforeEnter && !I.matched.includes(E))
              if (an(E.beforeEnter))
                for (const A of E.beforeEnter) ae.push(jn(A, V, I));
              else ae.push(jn(E.beforeEnter, V, I));
          return ae.push(Ee), ki(ae);
        })
        .then(
          () => (
            V.matched.forEach(E => (E.enterCallbacks = {})),
            (ae = Fo(_e, 'beforeRouteEnter', V, I)),
            ae.push(Ee),
            ki(ae)
          )
        )
        .then(() => {
          ae = [];
          for (const E of a.list()) ae.push(jn(E, V, I));
          return ae.push(Ee), ki(ae);
        })
        .catch(E => (Mn(E, 8) ? E : Promise.reject(E)))
    );
  }
  function R(V, I, ae) {
    for (const ce of o.list()) ce(V, I, ae);
  }
  function Y(V, I, ae, ce, ve) {
    const _e = y(V, I);
    if (_e) return _e;
    const Ee = I === Un,
      E = ar ? history.state : {};
    ae &&
      (ce || Ee
        ? r.replace(V.fullPath, $e({ scroll: Ee && E && E.scroll }, ve))
        : r.push(V.fullPath, ve)),
      (l.value = V),
      X(V, I, ae, Ee),
      U();
  }
  let de;
  function G() {
    de ||
      (de = r.listen((V, I, ae) => {
        if (!we.listening) return;
        const ce = _(V),
          ve = P(ce);
        if (ve) {
          B($e(ve, { replace: !0 }), ce).catch($r);
          return;
        }
        c = ce;
        const _e = l.value;
        ar && km(ac(_e.fullPath, ae.delta), po()),
          L(ce, _e)
            .catch(Ee =>
              Mn(Ee, 12)
                ? Ee
                : Mn(Ee, 2)
                ? (B(Ee.to, ce)
                    .then(E => {
                      Mn(E, 20) &&
                        !ae.delta &&
                        ae.type === ss.pop &&
                        r.go(-1, !1);
                    })
                    .catch($r),
                  Promise.reject())
                : (ae.delta && r.go(-ae.delta, !1), Z(Ee, ce, _e))
            )
            .then(Ee => {
              (Ee = Ee || Y(ce, _e, !1)),
                Ee &&
                  (ae.delta && !Mn(Ee, 8)
                    ? r.go(-ae.delta, !1)
                    : ae.type === ss.pop && Mn(Ee, 20) && r.go(-1, !1)),
                R(ce, _e, Ee);
            })
            .catch($r);
      }));
  }
  let z = Nr(),
    te = Nr(),
    ie;
  function Z(V, I, ae) {
    U(V);
    const ce = te.list();
    return (
      ce.length ? ce.forEach(ve => ve(V, I, ae)) : console.error(V),
      Promise.reject(V)
    );
  }
  function W() {
    return ie && l.value !== Un
      ? Promise.resolve()
      : new Promise((V, I) => {
          z.add([V, I]);
        });
  }
  function U(V) {
    return (
      ie ||
        ((ie = !V),
        G(),
        z.list().forEach(([I, ae]) => (V ? ae(V) : I())),
        z.reset()),
      V
    );
  }
  function X(V, I, ae, ce) {
    const { scrollBehavior: ve } = n;
    if (!ar || !ve) return Promise.resolve();
    const _e =
      (!ae && Vm(ac(V.fullPath, 0))) ||
      ((ce || !ae) && history.state && history.state.scroll) ||
      null;
    return Mf()
      .then(() => ve(V, I, _e))
      .then(Ee => Ee && Bm(Ee))
      .catch(Ee => Z(Ee, V, I));
  }
  const ue = V => r.go(V);
  let oe;
  const le = new Set(),
    we = {
      currentRoute: l,
      listening: !0,
      addRoute: d,
      removeRoute: g,
      hasRoute: p,
      getRoutes: m,
      resolve: _,
      options: n,
      push: b,
      replace: S,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: s.add,
      beforeResolve: a.add,
      afterEach: o.add,
      onError: te.add,
      isReady: W,
      install(V) {
        const I = this;
        V.component('RouterLink', oh),
          V.component('RouterView', ah),
          (V.config.globalProperties.$router = I),
          Object.defineProperty(V.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => ft(l),
          }),
          ar &&
            !oe &&
            l.value === Un &&
            ((oe = !0), b(r.location).catch(ve => {}));
        const ae = {};
        for (const ve in Un) ae[ve] = gt(() => l.value[ve]);
        V.provide(fl, I), V.provide(sh, Oi(ae)), V.provide(Da, l);
        const ce = V.unmount;
        le.add(V),
          (V.unmount = function () {
            le.delete(V),
              le.size < 1 &&
                ((c = Un),
                de && de(),
                (de = null),
                (l.value = Un),
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
function Lg(n, e) {
  const t = [],
    i = [],
    r = [],
    s = Math.max(e.matched.length, n.matched.length);
  for (let a = 0; a < s; a++) {
    const o = e.matched[a];
    o && (n.matched.find(c => Sr(c, o)) ? i.push(o) : t.push(o));
    const l = n.matched[a];
    l && (e.matched.find(c => Sr(c, l)) || r.push(l));
  }
  return [t, i, r];
}
const Pg = n => (n * Math.PI) / 180,
  Mc = (n, e) => {
    const t = Pg(360 / e),
      i = [];
    for (let r = 0; r < e; r += 1)
      i.push({ x: n * Math.cos(t * r), y: n * Math.sin(t * r) });
    return i;
  },
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
  Ei = [
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
  Ti = [
    '\u5E74\u4EFD',
    '\u5B63\u5EA6',
    '\u540C\u6BD4',
    '\u73AF\u6BD4',
    '\u6392\u540D',
  ],
  bc = [...Li, ...Ei, ...Li, ...Ei, ...Ti];
var lh = {
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
  hl = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0,
  },
  Rg = [
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
  Qs = { CSS: {}, springs: {} };
function gn(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function Zr(n, e) {
  return n.indexOf(e) > -1;
}
function Oo(n, e) {
  return n.apply(null, e);
}
var Pe = {
  arr: function (n) {
    return Array.isArray(n);
  },
  obj: function (n) {
    return Zr(Object.prototype.toString.call(n), 'Object');
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
      !lh.hasOwnProperty(n) &&
      !hl.hasOwnProperty(n) &&
      n !== 'targets' &&
      n !== 'keyframes'
    );
  },
};
function ch(n) {
  var e = /\(([^)]+)\)/.exec(n);
  return e
    ? e[1].split(',').map(function (t) {
        return parseFloat(t);
      })
    : [];
}
function uh(n, e) {
  var t = ch(n),
    i = gn(Pe.und(t[0]) ? 1 : t[0], 0.1, 100),
    r = gn(Pe.und(t[1]) ? 100 : t[1], 0.1, 100),
    s = gn(Pe.und(t[2]) ? 10 : t[2], 0.1, 100),
    a = gn(Pe.und(t[3]) ? 0 : t[3], 0.1, 100),
    o = Math.sqrt(r / i),
    l = s / (2 * Math.sqrt(r * i)),
    c = l < 1 ? o * Math.sqrt(1 - l * l) : 0,
    u = 1,
    f = l < 1 ? (l * o + -a) / c : -a + o;
  function h(g) {
    var m = e ? (e * g) / 1e3 : g;
    return (
      l < 1
        ? (m =
            Math.exp(-m * l * o) * (u * Math.cos(c * m) + f * Math.sin(c * m)))
        : (m = (u + f * m) * Math.exp(-m * o)),
      g === 0 || g === 1 ? g : 1 - m
    );
  }
  function d() {
    var g = Qs.springs[n];
    if (g) return g;
    for (var m = 1 / 6, p = 0, _ = 0; ; )
      if (((p += m), h(p) === 1)) {
        if ((_++, _ >= 16)) break;
      } else _ = 0;
    var x = p * m * 1e3;
    return (Qs.springs[n] = x), x;
  }
  return e ? h : d;
}
function Dg(n) {
  return (
    n === void 0 && (n = 10),
    function (e) {
      return Math.ceil(gn(e, 1e-6, 1) * n) * (1 / n);
    }
  );
}
var Ig = (function () {
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
    function a(u, f, h) {
      return 3 * t(f, h) * u * u + 2 * i(f, h) * u + r(f);
    }
    function o(u, f, h, d, g) {
      var m,
        p,
        _ = 0;
      do (p = f + (h - f) / 2), (m = s(p, d, g) - u), m > 0 ? (h = p) : (f = p);
      while (Math.abs(m) > 1e-7 && ++_ < 10);
      return p;
    }
    function l(u, f, h, d) {
      for (var g = 0; g < 4; ++g) {
        var m = a(f, h, d);
        if (m === 0) return f;
        var p = s(f, h, d) - u;
        f -= p / m;
      }
      return f;
    }
    function c(u, f, h, d) {
      if (!(0 <= u && u <= 1 && 0 <= h && h <= 1)) return;
      var g = new Float32Array(n);
      if (u !== f || h !== d) for (var m = 0; m < n; ++m) g[m] = s(m * e, u, h);
      function p(_) {
        for (var x = 0, y = 1, b = n - 1; y !== b && g[y] <= _; ++y) x += e;
        --y;
        var S = (_ - g[y]) / (g[y + 1] - g[y]),
          P = x + S * e,
          B = a(P, u, h);
        return B >= 0.001 ? l(_, P, u, h) : B === 0 ? P : o(_, x, x + e, u, h);
      }
      return function (_) {
        return (u === f && h === d) || _ === 0 || _ === 1 ? _ : s(p(_), f, d);
      };
    }
    return c;
  })(),
  fh = (function () {
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
          var s = gn(i, 1, 10),
            a = gn(r, 0.1, 2);
          return function (o) {
            return o === 0 || o === 1
              ? o
              : -s *
                  Math.pow(2, 10 * (o - 1)) *
                  Math.sin(
                    ((o - 1 - (a / (Math.PI * 2)) * Math.asin(1 / s)) *
                      (Math.PI * 2)) /
                      a
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
          (n['easeOut' + i] = function (s, a) {
            return function (o) {
              return 1 - r(s, a)(1 - o);
            };
          }),
          (n['easeInOut' + i] = function (s, a) {
            return function (o) {
              return o < 0.5 ? r(s, a)(o * 2) / 2 : 1 - r(s, a)(o * -2 + 2) / 2;
            };
          }),
          (n['easeOutIn' + i] = function (s, a) {
            return function (o) {
              return o < 0.5
                ? (1 - r(s, a)(1 - o * 2)) / 2
                : (r(s, a)(o * 2 - 1) + 1) / 2;
            };
          });
      }),
      n
    );
  })();
function dl(n, e) {
  if (Pe.fnc(n)) return n;
  var t = n.split('(')[0],
    i = fh[t],
    r = ch(n);
  switch (t) {
    case 'spring':
      return uh(n, e);
    case 'cubicBezier':
      return Oo(Ig, r);
    case 'steps':
      return Oo(Dg, r);
    default:
      return Oo(i, r);
  }
}
function hh(n) {
  try {
    var e = document.querySelectorAll(n);
    return e;
  } catch {
    return;
  }
}
function mo(n, e) {
  for (
    var t = n.length,
      i = arguments.length >= 2 ? arguments[1] : void 0,
      r = [],
      s = 0;
    s < t;
    s++
  )
    if (s in n) {
      var a = n[s];
      e.call(i, a, s, n) && r.push(a);
    }
  return r;
}
function go(n) {
  return n.reduce(function (e, t) {
    return e.concat(Pe.arr(t) ? go(t) : t);
  }, []);
}
function Sc(n) {
  return Pe.arr(n)
    ? n
    : (Pe.str(n) && (n = hh(n) || n),
      n instanceof NodeList || n instanceof HTMLCollection
        ? [].slice.call(n)
        : [n]);
}
function pl(n, e) {
  return n.some(function (t) {
    return t === e;
  });
}
function ml(n) {
  var e = {};
  for (var t in n) e[t] = n[t];
  return e;
}
function Ia(n, e) {
  var t = ml(n);
  for (var i in n) t[i] = e.hasOwnProperty(i) ? e[i] : n[i];
  return t;
}
function _o(n, e) {
  var t = ml(n);
  for (var i in e) t[i] = Pe.und(n[i]) ? e[i] : n[i];
  return t;
}
function Fg(n) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
  return e ? 'rgba(' + e[1] + ',1)' : n;
}
function Og(n) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    t = n.replace(e, function (o, l, c, u) {
      return l + l + c + c + u + u;
    }),
    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
    r = parseInt(i[1], 16),
    s = parseInt(i[2], 16),
    a = parseInt(i[3], 16);
  return 'rgba(' + r + ',' + s + ',' + a + ',1)';
}
function Ng(n) {
  var e =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
    t = parseInt(e[1], 10) / 360,
    i = parseInt(e[2], 10) / 100,
    r = parseInt(e[3], 10) / 100,
    s = e[4] || 1;
  function a(h, d, g) {
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
  var o, l, c;
  if (i == 0) o = l = c = r;
  else {
    var u = r < 0.5 ? r * (1 + i) : r + i - r * i,
      f = 2 * r - u;
    (o = a(f, u, t + 1 / 3)), (l = a(f, u, t)), (c = a(f, u, t - 1 / 3));
  }
  return 'rgba(' + o * 255 + ',' + l * 255 + ',' + c * 255 + ',' + s + ')';
}
function zg(n) {
  if (Pe.rgb(n)) return Fg(n);
  if (Pe.hex(n)) return Og(n);
  if (Pe.hsl(n)) return Ng(n);
}
function Rn(n) {
  var e =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      n
    );
  if (e) return e[1];
}
function Ug(n) {
  if (Zr(n, 'translate') || n === 'perspective') return 'px';
  if (Zr(n, 'rotate') || Zr(n, 'skew')) return 'deg';
}
function Fa(n, e) {
  return Pe.fnc(n) ? n(e.target, e.id, e.total) : n;
}
function _n(n, e) {
  return n.getAttribute(e);
}
function gl(n, e, t) {
  var i = Rn(e);
  if (pl([t, 'deg', 'rad', 'turn'], i)) return e;
  var r = Qs.CSS[e + t];
  if (!Pe.und(r)) return r;
  var s = 100,
    a = document.createElement(n.tagName),
    o =
      n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
  o.appendChild(a), (a.style.position = 'absolute'), (a.style.width = s + t);
  var l = s / a.offsetWidth;
  o.removeChild(a);
  var c = l * parseFloat(e);
  return (Qs.CSS[e + t] = c), c;
}
function dh(n, e, t) {
  if (e in n.style) {
    var i = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      r = n.style[e] || getComputedStyle(n).getPropertyValue(i) || '0';
    return t ? gl(n, r, t) : r;
  }
}
function _l(n, e) {
  if (Pe.dom(n) && !Pe.inp(n) && (!Pe.nil(_n(n, e)) || (Pe.svg(n) && n[e])))
    return 'attribute';
  if (Pe.dom(n) && pl(Rg, e)) return 'transform';
  if (Pe.dom(n) && e !== 'transform' && dh(n, e)) return 'css';
  if (n[e] != null) return 'object';
}
function ph(n) {
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
function Bg(n, e, t, i) {
  var r = Zr(e, 'scale') ? 1 : 0 + Ug(e),
    s = ph(n).get(e) || r;
  return (
    t && (t.transforms.list.set(e, s), (t.transforms.last = e)),
    i ? gl(n, s, i) : s
  );
}
function vl(n, e, t, i) {
  switch (_l(n, e)) {
    case 'transform':
      return Bg(n, e, i, t);
    case 'css':
      return dh(n, e, t);
    case 'attribute':
      return _n(n, e);
    default:
      return n[e] || 0;
  }
}
function xl(n, e) {
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
function mh(n, e) {
  if (Pe.col(n)) return zg(n);
  if (/\s/g.test(n)) return n;
  var t = Rn(n),
    i = t ? n.substr(0, n.length - t.length) : n;
  return e ? i + e : i;
}
function yl(n, e) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
function kg(n) {
  return Math.PI * 2 * _n(n, 'r');
}
function Vg(n) {
  return _n(n, 'width') * 2 + _n(n, 'height') * 2;
}
function Gg(n) {
  return yl(
    { x: _n(n, 'x1'), y: _n(n, 'y1') },
    { x: _n(n, 'x2'), y: _n(n, 'y2') }
  );
}
function gh(n) {
  for (var e = n.points, t = 0, i, r = 0; r < e.numberOfItems; r++) {
    var s = e.getItem(r);
    r > 0 && (t += yl(i, s)), (i = s);
  }
  return t;
}
function Hg(n) {
  var e = n.points;
  return gh(n) + yl(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function _h(n) {
  if (n.getTotalLength) return n.getTotalLength();
  switch (n.tagName.toLowerCase()) {
    case 'circle':
      return kg(n);
    case 'rect':
      return Vg(n);
    case 'line':
      return Gg(n);
    case 'polyline':
      return gh(n);
    case 'polygon':
      return Hg(n);
  }
}
function Wg(n) {
  var e = _h(n);
  return n.setAttribute('stroke-dasharray', e), e;
}
function qg(n) {
  for (var e = n.parentNode; Pe.svg(e) && Pe.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function vh(n, e) {
  var t = e || {},
    i = t.el || qg(n),
    r = i.getBoundingClientRect(),
    s = _n(i, 'viewBox'),
    a = r.width,
    o = r.height,
    l = t.viewBox || (s ? s.split(' ') : [0, 0, a, o]);
  return {
    el: i,
    viewBox: l,
    x: l[0] / 1,
    y: l[1] / 1,
    w: a,
    h: o,
    vW: l[2],
    vH: l[3],
  };
}
function Xg(n, e) {
  var t = Pe.str(n) ? hh(n)[0] : n,
    i = e || 100;
  return function (r) {
    return { property: r, el: t, svg: vh(t), totalLength: _h(t) * (i / 100) };
  };
}
function jg(n, e, t) {
  function i(u) {
    u === void 0 && (u = 0);
    var f = e + u >= 1 ? e + u : 0;
    return n.el.getPointAtLength(f);
  }
  var r = vh(n.el, n.svg),
    s = i(),
    a = i(-1),
    o = i(1),
    l = t ? 1 : r.w / r.vW,
    c = t ? 1 : r.h / r.vH;
  switch (n.property) {
    case 'x':
      return (s.x - r.x) * l;
    case 'y':
      return (s.y - r.y) * c;
    case 'angle':
      return (Math.atan2(o.y - a.y, o.x - a.x) * 180) / Math.PI;
  }
}
function wc(n, e) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    i = mh(Pe.pth(n) ? n.totalLength : n, e) + '';
  return {
    original: i,
    numbers: i.match(t) ? i.match(t).map(Number) : [0],
    strings: Pe.str(n) || e ? i.split(t) : [],
  };
}
function Ml(n) {
  var e = n ? go(Pe.arr(n) ? n.map(Sc) : Sc(n)) : [];
  return mo(e, function (t, i, r) {
    return r.indexOf(t) === i;
  });
}
function xh(n) {
  var e = Ml(n);
  return e.map(function (t, i) {
    return { target: t, id: i, total: e.length, transforms: { list: ph(t) } };
  });
}
function $g(n, e) {
  var t = ml(e);
  if ((/^spring/.test(t.easing) && (t.duration = uh(t.easing)), Pe.arr(n))) {
    var i = n.length,
      r = i === 2 && !Pe.obj(n[0]);
    r
      ? (n = { value: n })
      : Pe.fnc(e.duration) || (t.duration = e.duration / i);
  }
  var s = Pe.arr(n) ? n : [n];
  return s
    .map(function (a, o) {
      var l = Pe.obj(a) && !Pe.pth(a) ? a : { value: a };
      return (
        Pe.und(l.delay) && (l.delay = o ? 0 : e.delay),
        Pe.und(l.endDelay) &&
          (l.endDelay = o === s.length - 1 ? e.endDelay : 0),
        l
      );
    })
    .map(function (a) {
      return _o(a, t);
    });
}
function Yg(n) {
  for (
    var e = mo(
        go(
          n.map(function (s) {
            return Object.keys(s);
          })
        ),
        function (s) {
          return Pe.key(s);
        }
      ).reduce(function (s, a) {
        return s.indexOf(a) < 0 && s.push(a), s;
      }, []),
      t = {},
      i = function (s) {
        var a = e[s];
        t[a] = n.map(function (o) {
          var l = {};
          for (var c in o)
            Pe.key(c) ? c == a && (l.value = o[c]) : (l[c] = o[c]);
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
function Zg(n, e) {
  var t = [],
    i = e.keyframes;
  i && (e = _o(Yg(i), e));
  for (var r in e) Pe.key(r) && t.push({ name: r, tweens: $g(e[r], n) });
  return t;
}
function Kg(n, e) {
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
function Jg(n, e) {
  var t;
  return n.tweens.map(function (i) {
    var r = Kg(i, e),
      s = r.value,
      a = Pe.arr(s) ? s[1] : s,
      o = Rn(a),
      l = vl(e.target, n.name, o, e),
      c = t ? t.to.original : l,
      u = Pe.arr(s) ? s[0] : c,
      f = Rn(u) || Rn(l),
      h = o || f;
    return (
      Pe.und(a) && (a = c),
      (r.from = wc(u, h)),
      (r.to = wc(xl(a, u), h)),
      (r.start = t ? t.end : 0),
      (r.end = r.start + r.delay + r.duration + r.endDelay),
      (r.easing = dl(r.easing, r.duration)),
      (r.isPath = Pe.pth(s)),
      (r.isPathTargetInsideSVG = r.isPath && Pe.svg(e.target)),
      (r.isColor = Pe.col(r.from.original)),
      r.isColor && (r.round = 1),
      (t = r),
      r
    );
  });
}
var yh = {
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
      i.list.forEach(function (a, o) {
        s += o + '(' + a + ') ';
      }),
        (n.style.transform = s);
    }
  },
};
function Mh(n, e) {
  var t = xh(n);
  t.forEach(function (i) {
    for (var r in e) {
      var s = Fa(e[r], i),
        a = i.target,
        o = Rn(s),
        l = vl(a, r, o, i),
        c = o || Rn(l),
        u = xl(mh(s, c), l),
        f = _l(a, r);
      yh[f](a, r, u, i.transforms, !0);
    }
  });
}
function Qg(n, e) {
  var t = _l(n.target, e.name);
  if (t) {
    var i = Jg(e, n),
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
function e_(n, e) {
  return mo(
    go(
      n.map(function (t) {
        return e.map(function (i) {
          return Qg(t, i);
        });
      })
    ),
    function (t) {
      return !Pe.und(t);
    }
  );
}
function bh(n, e) {
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
function t_(n) {
  var e = Ia(lh, n),
    t = Ia(hl, n),
    i = Zg(t, n),
    r = xh(n.targets),
    s = e_(r, i),
    a = bh(s, t),
    o = Ec;
  return (
    Ec++,
    _o(e, {
      id: o,
      children: [],
      animatables: r,
      animations: s,
      duration: a.duration,
      delay: a.delay,
      endDelay: a.endDelay,
    })
  );
}
var en = [],
  Sh = (function () {
    var n;
    function e() {
      !n &&
        (!Tc() || !rt.suspendWhenDocumentHidden) &&
        en.length > 0 &&
        (n = requestAnimationFrame(t));
    }
    function t(r) {
      for (var s = en.length, a = 0; a < s; ) {
        var o = en[a];
        o.paused ? (en.splice(a, 1), s--) : (o.tick(r), a++);
      }
      n = a > 0 ? requestAnimationFrame(t) : void 0;
    }
    function i() {
      !rt.suspendWhenDocumentHidden ||
        (Tc()
          ? (n = cancelAnimationFrame(n))
          : (en.forEach(function (r) {
              return r._onDocumentVisibility();
            }),
            Sh()));
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
    a = null;
  function o(x) {
    var y =
      window.Promise &&
      new Promise(function (b) {
        return (a = b);
      });
    return (x.finished = y), y;
  }
  var l = t_(n);
  o(l);
  function c() {
    var x = l.direction;
    x !== 'alternate' && (l.direction = x !== 'normal' ? 'normal' : 'reverse'),
      (l.reversed = !l.reversed),
      r.forEach(function (y) {
        return (y.reversed = l.reversed);
      });
  }
  function u(x) {
    return l.reversed ? l.duration - x : x;
  }
  function f() {
    (e = 0), (t = u(l.currentTime) * (1 / rt.speed));
  }
  function h(x, y) {
    y && y.seek(x - y.timelineOffset);
  }
  function d(x) {
    if (l.reversePlayback) for (var b = s; b--; ) h(x, r[b]);
    else for (var y = 0; y < s; y++) h(x, r[y]);
  }
  function g(x) {
    for (var y = 0, b = l.animations, S = b.length; y < S; ) {
      var P = b[y],
        B = P.animatable,
        M = P.tweens,
        L = M.length - 1,
        R = M[L];
      L &&
        (R =
          mo(M, function (I) {
            return x < I.end;
          })[0] || R);
      for (
        var Y = gn(x - R.start - R.delay, 0, R.duration) / R.duration,
          de = isNaN(Y) ? 1 : R.easing(Y),
          G = R.to.strings,
          z = R.round,
          te = [],
          ie = R.to.numbers.length,
          Z = void 0,
          W = 0;
        W < ie;
        W++
      ) {
        var U = void 0,
          X = R.to.numbers[W],
          ue = R.from.numbers[W] || 0;
        R.isPath
          ? (U = jg(R.value, de * X, R.isPathTargetInsideSVG))
          : (U = ue + de * (X - ue)),
          z && ((R.isColor && W > 2) || (U = Math.round(U * z) / z)),
          te.push(U);
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
      yh[P.type](B.target, P.property, Z, B.transforms),
        (P.currentValue = Z),
        y++;
    }
  }
  function m(x) {
    l[x] && !l.passThrough && l[x](l);
  }
  function p() {
    l.remaining && l.remaining !== !0 && l.remaining--;
  }
  function _(x) {
    var y = l.duration,
      b = l.delay,
      S = y - l.endDelay,
      P = u(x);
    (l.progress = gn((P / y) * 100, 0, 100)),
      (l.reversePlayback = P < l.currentTime),
      r && d(P),
      !l.began && l.currentTime > 0 && ((l.began = !0), m('begin')),
      !l.loopBegan && l.currentTime > 0 && ((l.loopBegan = !0), m('loopBegin')),
      P <= b && l.currentTime !== 0 && g(0),
      ((P >= S && l.currentTime !== y) || !y) && g(y),
      P > b && P < S
        ? (l.changeBegan ||
            ((l.changeBegan = !0), (l.changeCompleted = !1), m('changeBegin')),
          m('change'),
          g(P))
        : l.changeBegan &&
          ((l.changeCompleted = !0), (l.changeBegan = !1), m('changeComplete')),
      (l.currentTime = gn(P, 0, y)),
      l.began && m('update'),
      x >= y &&
        ((t = 0),
        p(),
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
              !l.passThrough && 'Promise' in window && (a(), o(l)))));
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
      for (var y = s; y--; ) l.children[y].reset();
      ((l.reversed && l.loop !== !0) || (x === 'alternate' && l.loop === 1)) &&
        l.remaining++,
        g(l.reversed ? l.duration : 0);
    }),
    (l._onDocumentVisibility = f),
    (l.set = function (x, y) {
      return Mh(x, y), l;
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
        (l.completed && l.reset(), (l.paused = !1), en.push(l), f(), Sh());
    }),
    (l.reverse = function () {
      c(), (l.completed = !l.reversed), f();
    }),
    (l.restart = function () {
      l.reset(), l.play();
    }),
    (l.remove = function (x) {
      var y = Ml(x);
      wh(y, l);
    }),
    l.reset(),
    l.autoplay && l.play(),
    l
  );
}
function Ac(n, e) {
  for (var t = e.length; t--; ) pl(n, e[t].animatable.target) && e.splice(t, 1);
}
function wh(n, e) {
  var t = e.animations,
    i = e.children;
  Ac(n, t);
  for (var r = i.length; r--; ) {
    var s = i[r],
      a = s.animations;
    Ac(n, a), !a.length && !s.children.length && i.splice(r, 1);
  }
  !t.length && !i.length && e.pause();
}
function n_(n) {
  for (var e = Ml(n), t = en.length; t--; ) {
    var i = en[t];
    wh(e, i);
  }
}
function i_(n, e) {
  e === void 0 && (e = {});
  var t = e.direction || 'normal',
    i = e.easing ? dl(e.easing) : null,
    r = e.grid,
    s = e.axis,
    a = e.from || 0,
    o = a === 'first',
    l = a === 'center',
    c = a === 'last',
    u = Pe.arr(n),
    f = parseFloat(u ? n[0] : n),
    h = u ? parseFloat(n[1]) : 0,
    d = Rn(u ? n[1] : n) || 0,
    g = e.start || 0 + (u ? f : 0),
    m = [],
    p = 0;
  return function (_, x, y) {
    if ((o && (a = 0), l && (a = (y - 1) / 2), c && (a = y - 1), !m.length)) {
      for (var b = 0; b < y; b++) {
        if (!r) m.push(Math.abs(a - b));
        else {
          var S = l ? (r[0] - 1) / 2 : a % r[0],
            P = l ? (r[1] - 1) / 2 : Math.floor(a / r[0]),
            B = b % r[0],
            M = Math.floor(b / r[0]),
            L = S - B,
            R = P - M,
            Y = Math.sqrt(L * L + R * R);
          s === 'x' && (Y = -L), s === 'y' && (Y = -R), m.push(Y);
        }
        p = Math.max.apply(Math, m);
      }
      i &&
        (m = m.map(function (G) {
          return i(G / p) * p;
        })),
        t === 'reverse' &&
          (m = m.map(function (G) {
            return s ? (G < 0 ? G * -1 : -G) : Math.abs(p - G);
          }));
    }
    var de = u ? (h - f) / p : f;
    return g + de * (Math.round(m[x] * 100) / 100) + d;
  };
}
function r_(n) {
  n === void 0 && (n = {});
  var e = rt(n);
  return (
    (e.duration = 0),
    (e.add = function (t, i) {
      var r = en.indexOf(e),
        s = e.children;
      r > -1 && en.splice(r, 1);
      function a(h) {
        h.passThrough = !0;
      }
      for (var o = 0; o < s.length; o++) a(s[o]);
      var l = _o(t, Ia(hl, n));
      l.targets = l.targets || n.targets;
      var c = e.duration;
      (l.autoplay = !1),
        (l.direction = e.direction),
        (l.timelineOffset = Pe.und(i) ? c : xl(i, c)),
        a(e),
        e.seek(l.timelineOffset);
      var u = rt(l);
      a(u), s.push(u);
      var f = bh(s, n);
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
rt.remove = n_;
rt.get = vl;
rt.set = Mh;
rt.convertPx = gl;
rt.path = Xg;
rt.setDashoffset = Wg;
rt.stagger = i_;
rt.timeline = r_;
rt.easing = dl;
rt.penner = fh;
rt.random = function (n, e) {
  return Math.floor(Math.random() * (e - n + 1)) + n;
};
var s_ =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Eh = { exports: {} };
/*!
 * TagCloud.js v2.3.0
 * Copyright (c) 2016-2022 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function (n, e) {
  (function (t, i) {
    n.exports = i();
  })(s_, function () {
    function t(f, h) {
      if (!(f instanceof h))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(f, h) {
      for (var d = 0; d < h.length; d++) {
        var g = h[d];
        (g.enumerable = g.enumerable || !1),
          (g.configurable = !0),
          'value' in g && (g.writable = !0),
          Object.defineProperty(f, g.key, g);
      }
    }
    function r(f, h, d) {
      return h && i(f.prototype, h), d && i(f, d), f;
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
    function a() {
      return (
        (a =
          Object.assign ||
          function (f) {
            for (var h = 1; h < arguments.length; h++) {
              var d = arguments[h];
              for (var g in d)
                Object.prototype.hasOwnProperty.call(d, g) && (f[g] = d[g]);
            }
            return f;
          }),
        a.apply(this, arguments)
      );
    }
    function o(f, h) {
      var d = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h &&
          (g = g.filter(function (m) {
            return Object.getOwnPropertyDescriptor(f, m).enumerable;
          })),
          d.push.apply(d, g);
      }
      return d;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var d = arguments[h] != null ? arguments[h] : {};
        h % 2
          ? o(Object(d), !0).forEach(function (g) {
              s(f, g, d[g]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(d))
          : o(Object(d)).forEach(function (g) {
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
        var m = this;
        if (!h || h.nodeType !== 1) return new Error('Incorrect element type');
        (m.$container = h),
          (m.texts = d || []),
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
                var d = this,
                  g = document.createElement('div');
                (g.className = d.config.containerClass),
                  d.config.useContainerInlineStyles &&
                    ((g.style.position = 'relative'),
                    (g.style.width = ''.concat(2 * d.radius, 'px')),
                    (g.style.height = ''.concat(2 * d.radius, 'px'))),
                  (d.items = []),
                  d.texts.forEach(function (m, p) {
                    var _ = d._createTextItem(m, p);
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
                  m = this,
                  p = document.createElement('span');
                if (
                  ((p.className = m.config.itemClass),
                  m.config.useItemInlineStyles)
                ) {
                  (p.style.willChange = 'transform, opacity, filter'),
                    (p.style.position = 'absolute'),
                    (p.style.top = '50%'),
                    (p.style.left = '50%'),
                    (p.style.zIndex = g + 1),
                    (p.style.filter = 'alpha(opacity=0)'),
                    (p.style.opacity = 0);
                  var _ = '50% 50%';
                  (p.style.WebkitTransformOrigin = _),
                    (p.style.MozTransformOrigin = _),
                    (p.style.OTransformOrigin = _),
                    (p.style.transformOrigin = _);
                  var x = 'translate3d(-50%, -50%, 0) scale(1)';
                  (p.style.WebkitTransform = x),
                    (p.style.MozTransform = x),
                    (p.style.OTransform = x),
                    (p.style.transform = x);
                }
                return (p.innerText = d), l({ el: p }, m._computePosition(g));
              },
            },
            {
              key: '_computePosition',
              value: function (d) {
                var g =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1,
                  m = this,
                  p = m.texts.length;
                g && (d = Math.floor(Math.random() * (p + 1)));
                var _ = Math.acos(-1 + (2 * d + 1) / p),
                  x = Math.sqrt((p + 1) * Math.PI) * _;
                return {
                  x: (m.size * Math.cos(x) * Math.sin(_)) / 2,
                  y: (m.size * Math.sin(x) * Math.sin(_)) / 2,
                  z: (m.size * Math.cos(_)) / 2,
                };
              },
            },
            {
              key: '_requestInterval',
              value: function (d, g) {
                var m = (function () {
                    return window.requestAnimationFrame;
                  })(),
                  p = new Date().getTime(),
                  _ = {};
                function x() {
                  _.value = m(x);
                  var y = new Date().getTime(),
                    b = y - p;
                  b >= g && (d.call(), (p = new Date().getTime()));
                }
                return (_.value = m(x)), _;
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
                  f._on(d.keep ? window : d.$el, 'mousemove', function (m) {
                    m = m || window.event;
                    var p = d.$el.getBoundingClientRect();
                    (d.mouseX = (m.clientX - (p.left + p.width / 2)) / 5),
                      (d.mouseY = (m.clientY - (p.top + p.height / 2)) / 5);
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
                    m =
                      (Math.min(Math.max(-d.mouseX, -d.size), d.size) /
                        d.radius) *
                      d.maxSpeed;
                  if (!(Math.abs(g) <= 0.01 && Math.abs(m) <= 0.01)) {
                    var p = Math.PI / 180,
                      _ = [
                        Math.sin(g * p),
                        Math.cos(g * p),
                        Math.sin(m * p),
                        Math.cos(m * p),
                      ];
                    d.items.forEach(function (x) {
                      var y = x.x,
                        b = x.y * _[1] + x.z * -_[0],
                        S = x.y * _[0] + x.z * _[1],
                        P = y * _[3] + S * _[2],
                        B = b,
                        M = S * _[3] - y * _[2],
                        L = (2 * d.depth) / (2 * d.depth + M);
                      (x.x = P), (x.y = B), (x.z = M), (x.scale = L.toFixed(3));
                      var R = L * L - 0.25;
                      R = (R > 1 ? 1 : R).toFixed(3);
                      var Y = x.el,
                        de = (x.x - Y.offsetWidth / 2).toFixed(2),
                        G = (x.y - Y.offsetHeight / 2).toFixed(2),
                        z = 'translate3d('
                          .concat(de, 'px, ')
                          .concat(G, 'px, 0) scale(')
                          .concat(x.scale, ')');
                      (Y.style.WebkitTransform = z),
                        (Y.style.MozTransform = z),
                        (Y.style.OTransform = z),
                        (Y.style.transform = z),
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
              value: function (d) {
                var g = this;
                (g.texts = d || []),
                  g.texts.forEach(function (x, y) {
                    var b = g.items[y];
                    b ||
                      ((b = g._createTextItem(x, y)),
                      a(b, g._computePosition(y, !0)),
                      g.$el.appendChild(b.el),
                      g.items.push(b)),
                      (b.el.innerText = x);
                  });
                var m = g.texts.length,
                  p = g.items.length;
                if (m < p) {
                  var _ = g.items.splice(m, p - m);
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
                var g = f.list.findIndex(function (m) {
                  return m.el === d.$el;
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
              value: function (d, g, m, p) {
                d.addEventListener
                  ? d.addEventListener(g, m, p)
                  : d.attachEvent
                  ? d.attachEvent('on'.concat(g), m)
                  : (d['on'.concat(g)] = m);
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
        f.forEach(function (m) {
          m && g.push(new c(m, h, d));
        }),
        g.length <= 1 ? g[0] : g
      );
    };
    return u;
  });
})(Eh);
const Th = Eh.exports,
  o_ = vn({
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
          const a = document.querySelectorAll(`.${e.name} .tagcloud--item`);
          for (const o of a) {
            const l = Math.floor(Math.random() * 3);
            (o.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][l]),
              (o.style.fontSize = ['13px', '16px', '19px'][l]),
              (o.style.fontWeight = 'bolder');
          }
        },
        s = () => {
          const a = {
            useContainerInlineStyles: !1,
            radius: 120,
            keep: !0,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            ...e.options,
          };
          Th(
            [document.querySelector(`.${e.name}`)],
            e.data.length ? e.data : t,
            a
          ),
            r();
        };
      return (
        ls(() => {
          s();
        }),
        (a, o) => (at(), ut('div', { class: as(ft(i)) }, null, 2))
      );
    },
  });
const bl = (n, e) => {
    const t = n.__vccOpts || n;
    for (const [i, r] of e) t[i] = r;
    return t;
  },
  a_ = bl(o_, [['__scopeId', 'data-v-d9535cb1']]),
  l_ = { class: 'wheel-wrapper' },
  c_ = { class: 'wheel' },
  u_ = { class: 'wheel-dimension' },
  f_ = { class: 'wheel-text' },
  h_ = { class: 'wheel-core' },
  d_ = { class: 'wheel-text' },
  p_ = vn({
    __name: 'Index2',
    setup(n) {
      const e = xi(),
        t = xi();
      xi();
      const i = xi(),
        r = Oi({
          cR: 200,
          cCount: 10,
          dR: 400,
          dCount: 8,
          textWidth: 100,
          textHeight: 50,
        }),
        s = gt(() =>
          Mc(r.cR, Li.length).map((o, l) => ({
            x: o.x - r.textWidth / 2,
            y: o.y - r.textHeight / 2,
            fontSize: 12 * (Math.random() + 1),
            value: Li[l],
          }))
        ),
        a = gt(() =>
          Mc(r.dR, Ti.length).map((o, l) => ({
            ...o,
            x: o.x - r.textWidth / 2,
            y: o.y - r.textHeight / 2,
            value: Ti[l],
          }))
        );
      return (o, l) => (
        at(),
        ut('div', l_, [
          Je('div', c_, [
            Je('div', u_, [
              Je(
                'div',
                {
                  ref_key: 'wheelDimensionRef',
                  ref: i,
                  class: 'dimension-content',
                },
                [
                  Je('div', f_, [
                    (at(!0),
                    ut(
                      wt,
                      null,
                      Mr(
                        ft(a),
                        (c, u) => (
                          at(),
                          ut(
                            'div',
                            {
                              key: u,
                              class: 'text',
                              style: ti({ top: `${c.y}px`, left: `${c.x}px` }),
                            },
                            vr(c.value),
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
            Je('div', h_, [
              Je(
                'div',
                { ref_key: 'wheelCoreRef', ref: e, class: 'core-content' },
                [
                  Je('div', d_, [
                    (at(!0),
                    ut(
                      wt,
                      null,
                      Mr(
                        ft(s),
                        (c, u) => (
                          at(),
                          ut(
                            'div',
                            {
                              key: u,
                              class: 'text',
                              style: ti({
                                top: `${c.y}px`,
                                left: `${c.x}px`,
                                fontSize: `${c.fontSize}px`,
                              }),
                            },
                            vr(c.value),
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
              { ref_key: 'wheelWordRef', ref: t, class: 'wheel-word' },
              [_t(a_, { data: ft(Ei) }, null, 8, ['data'])],
              512
            ),
          ]),
        ])
      );
    },
  });
const m_ = vn({
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
        const a = document.querySelectorAll(`.${e.name} .tagcloud--item`);
        for (const o of a) {
          const l = Math.floor(Math.random() * 3);
          (o.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][l]),
            (o.style.fontSize = ['16px', '20px', '24px'][l]);
        }
      },
      s = () => {
        const a = { radius: 120, keep: !0, ...e.options };
        Th(
          [document.querySelector(`.${e.name}`)],
          e.data.length ? e.data : t,
          a
        ),
          r();
      };
    return (
      ls(() => {
        s();
      }),
      (a, o) => (at(), ut('div', { class: as(ft(i)) }, null, 2))
    );
  },
});
const No = bl(m_, [['__scopeId', 'data-v-28968002']]),
  g_ = { class: 'sphere-wrapper' },
  __ = { class: 'content' },
  v_ = { class: 'dimension-cloud' },
  x_ = { class: 'core-cloud' },
  y_ = { class: 'word-cloud' },
  M_ = vn({
    __name: 'Index',
    setup(n) {
      return (e, t) => (
        at(),
        ut('div', g_, [
          Je('div', __, [
            Je('div', v_, [
              _t(
                No,
                {
                  name: 'dimension',
                  data: ft(Ti),
                  options: { radius: 100, direction: 225 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            Je('div', x_, [
              _t(
                No,
                {
                  name: 'core',
                  data: ft(Ei),
                  options: { radius: 200, direction: 90 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            Je('div', y_, [
              _t(
                No,
                { name: 'word', data: ft(Li), options: { radius: 100 } },
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
const b_ = n => (n * Math.PI) / 180,
  Cc = (n, e) => {
    const t = b_(360 / e),
      i = [];
    for (let r = 0; r < e; r += 1)
      i.push({ x: n * Math.cos(t * r), y: n * Math.sin(t * r) });
    return i;
  },
  S_ = { class: 'rotate' },
  w_ = { class: 'content' },
  E_ = { class: 'box' },
  T_ = vn({
    __name: 'RotateImage',
    setup(n) {
      const e = xi([
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
        ut('div', S_, [
          Je('div', w_, [
            Je('div', E_, [
              (at(!0),
              ut(
                wt,
                null,
                Mr(
                  e.value,
                  (s, a) => (
                    at(),
                    ut(
                      'div',
                      { key: a, class: 'circle', style: ti(t(a)) },
                      vr(s),
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
const A_ = bl(T_, [['__scopeId', 'data-v-904bfc5a']]),
  C_ = { class: 'ring-wrapper' },
  L_ = { class: 'wheel' },
  P_ = { class: 'ring core-ring' },
  R_ = { ref: 'wheelCoreRef', class: 'content dimension-content' },
  D_ = { class: 'wheel-text' },
  I_ = { class: 'ring word-ring' },
  F_ = { ref: 'wheelCoreRef', class: 'content word-content' },
  O_ = { class: 'wheel-text' },
  N_ = vn({
    __name: 'Index',
    setup(n) {
      const e = Oi({ cR: 200, cCount: 10, textWidth: 100, textHeight: 50 }),
        t = gt(() =>
          Cc(e.cR, e.cCount).map((r, s) => {
            const a = 12 * (Math.random() + 1),
              o = Li[s].length * a;
            return {
              x: r.x - o / 2,
              y: r.y - e.textHeight / 2,
              fontSize: a,
              width: o,
              value: Li[s],
            };
          })
        ),
        i = gt(() =>
          Cc(e.cR, Ei.length).map((r, s) => {
            const a = 12 * (Math.random() + 1),
              o = Ei[s].length * a;
            return {
              x: r.x - o / 2,
              y: r.y - e.textHeight / 2,
              fontSize: a,
              width: o,
              value: Ei[s],
            };
          })
        );
      return (r, s) => (
        at(),
        ut('div', C_, [
          Je('div', L_, [
            Je('div', P_, [
              Je(
                'div',
                R_,
                [
                  Je('div', D_, [
                    (at(!0),
                    ut(
                      wt,
                      null,
                      Mr(
                        ft(t),
                        (a, o) => (
                          at(),
                          ut(
                            'div',
                            {
                              key: o,
                              class: 'text',
                              style: ti({
                                top: `${a.y}px`,
                                left: `${a.x}px`,
                                width: `${a.width}px`,
                                fontSize: `${a.fontSize}px`,
                              }),
                            },
                            vr(a.value),
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
            Je('div', I_, [
              Je(
                'div',
                F_,
                [
                  Je('div', O_, [
                    (at(!0),
                    ut(
                      wt,
                      null,
                      Mr(
                        ft(i),
                        (a, o) => (
                          at(),
                          ut(
                            'div',
                            {
                              key: o,
                              class: 'text',
                              style: ti({
                                top: `${a.y}px`,
                                left: `${a.x}px`,
                                width: `${a.width}px`,
                                fontSize: `${a.fontSize}px`,
                              }),
                            },
                            vr(a.value),
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
            _t(A_),
          ]),
        ])
      );
    },
  });
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Sl = '146',
  Vi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Gi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  z_ = 0,
  Lc = 1,
  U_ = 2,
  Ah = 1,
  B_ = 2,
  qr = 3,
  Er = 0,
  jt = 1,
  $n = 2,
  Qn = 0,
  gr = 1,
  Pc = 2,
  Rc = 3,
  Dc = 4,
  k_ = 5,
  lr = 100,
  V_ = 101,
  G_ = 102,
  Ic = 103,
  Fc = 104,
  H_ = 200,
  W_ = 201,
  q_ = 202,
  X_ = 203,
  Ch = 204,
  Lh = 205,
  j_ = 206,
  $_ = 207,
  Y_ = 208,
  Z_ = 209,
  K_ = 210,
  J_ = 0,
  Q_ = 1,
  e0 = 2,
  Oa = 3,
  t0 = 4,
  n0 = 5,
  i0 = 6,
  r0 = 7,
  Ph = 0,
  s0 = 1,
  o0 = 2,
  Dn = 0,
  a0 = 1,
  l0 = 2,
  c0 = 3,
  u0 = 4,
  f0 = 5,
  Rh = 300,
  Tr = 301,
  Ar = 302,
  Na = 303,
  za = 304,
  vo = 306,
  Ua = 1e3,
  tn = 1001,
  Ba = 1002,
  Ft = 1003,
  Oc = 1004,
  Nc = 1005,
  Ht = 1006,
  h0 = 1007,
  xo = 1008,
  Pi = 1009,
  d0 = 1010,
  p0 = 1011,
  Dh = 1012,
  m0 = 1013,
  yi = 1014,
  Mi = 1015,
  os = 1016,
  g0 = 1017,
  _0 = 1018,
  _r = 1020,
  v0 = 1021,
  x0 = 1022,
  nn = 1023,
  y0 = 1024,
  M0 = 1025,
  Ai = 1026,
  Cr = 1027,
  b0 = 1028,
  S0 = 1029,
  w0 = 1030,
  E0 = 1031,
  T0 = 1033,
  zo = 33776,
  Uo = 33777,
  Bo = 33778,
  ko = 33779,
  zc = 35840,
  Uc = 35841,
  Bc = 35842,
  kc = 35843,
  A0 = 36196,
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
  C0 = 3200,
  L0 = 3201,
  P0 = 0,
  R0 = 1,
  Cn = 'srgb',
  bi = 'srgb-linear',
  Vo = 7680,
  D0 = 519,
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
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const St = [
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
let su = 1234567;
const Kr = Math.PI / 180,
  eo = 180 / Math.PI;
function In() {
  const n = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    St[n & 255] +
    St[(n >> 8) & 255] +
    St[(n >> 16) & 255] +
    St[(n >> 24) & 255] +
    '-' +
    St[e & 255] +
    St[(e >> 8) & 255] +
    '-' +
    St[((e >> 16) & 15) | 64] +
    St[(e >> 24) & 255] +
    '-' +
    St[(t & 63) | 128] +
    St[(t >> 8) & 255] +
    '-' +
    St[(t >> 16) & 255] +
    St[(t >> 24) & 255] +
    St[i & 255] +
    St[(i >> 8) & 255] +
    St[(i >> 16) & 255] +
    St[(i >> 24) & 255]
  ).toLowerCase();
}
function xt(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function wl(n, e) {
  return ((n % e) + e) % e;
}
function I0(n, e, t, i, r) {
  return i + ((n - e) * (r - i)) / (t - e);
}
function F0(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function Jr(n, e, t) {
  return (1 - t) * n + t * e;
}
function O0(n, e, t, i) {
  return Jr(n, e, 1 - Math.exp(-t * i));
}
function N0(n, e = 1) {
  return e - Math.abs(wl(n, e * 2) - e);
}
function z0(n, e, t) {
  return n <= e
    ? 0
    : n >= t
    ? 1
    : ((n = (n - e) / (t - e)), n * n * (3 - 2 * n));
}
function U0(n, e, t) {
  return n <= e
    ? 0
    : n >= t
    ? 1
    : ((n = (n - e) / (t - e)), n * n * n * (n * (n * 6 - 15) + 10));
}
function B0(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function k0(n, e) {
  return n + Math.random() * (e - n);
}
function V0(n) {
  return n * (0.5 - Math.random());
}
function G0(n) {
  n !== void 0 && (su = n);
  let e = (su += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function H0(n) {
  return n * Kr;
}
function W0(n) {
  return n * eo;
}
function Ga(n) {
  return (n & (n - 1)) === 0 && n !== 0;
}
function q0(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function to(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function X0(n, e, t, i, r) {
  const s = Math.cos,
    a = Math.sin,
    o = s(t / 2),
    l = a(t / 2),
    c = s((e + i) / 2),
    u = a((e + i) / 2),
    f = s((e - i) / 2),
    h = a((e - i) / 2),
    d = s((i - e) / 2),
    g = a((i - e) / 2);
  switch (r) {
    case 'XYX':
      n.set(o * u, l * f, l * h, o * c);
      break;
    case 'YZY':
      n.set(l * h, o * u, l * f, o * c);
      break;
    case 'ZXZ':
      n.set(l * f, l * h, o * u, o * c);
      break;
    case 'XZX':
      n.set(o * u, l * g, l * d, o * c);
      break;
    case 'YXY':
      n.set(l * d, o * u, l * g, o * c);
      break;
    case 'ZYZ':
      n.set(l * g, l * d, o * u, o * c);
      break;
    default:
      console.warn(
        'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' +
          r
      );
  }
}
function Ln(n, e) {
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
function Ze(n, e) {
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
var ou = Object.freeze({
  __proto__: null,
  DEG2RAD: Kr,
  RAD2DEG: eo,
  generateUUID: In,
  clamp: xt,
  euclideanModulo: wl,
  mapLinear: I0,
  inverseLerp: F0,
  lerp: Jr,
  damp: O0,
  pingpong: N0,
  smoothstep: z0,
  smootherstep: U0,
  randInt: B0,
  randFloat: k0,
  randFloatSpread: V0,
  seededRandom: G0,
  degToRad: H0,
  radToDeg: W0,
  isPowerOfTwo: Ga,
  ceilPowerOfTwo: q0,
  floorPowerOfTwo: to,
  setQuaternionFromProperEuler: X0,
  normalize: Ze,
  denormalize: Ln,
});
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
      a = this.y - e.y;
    return (this.x = s * i - a * r + e.x), (this.y = s * r + a * i + e.y), this;
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
  set(e, t, i, r, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = o),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = i),
      (u[7] = a),
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
      a = i[0],
      o = i[3],
      l = i[6],
      c = i[1],
      u = i[4],
      f = i[7],
      h = i[2],
      d = i[5],
      g = i[8],
      m = r[0],
      p = r[3],
      _ = r[6],
      x = r[1],
      y = r[4],
      b = r[7],
      S = r[2],
      P = r[5],
      B = r[8];
    return (
      (s[0] = a * m + o * x + l * S),
      (s[3] = a * p + o * y + l * P),
      (s[6] = a * _ + o * b + l * B),
      (s[1] = c * m + u * x + f * S),
      (s[4] = c * p + u * y + f * P),
      (s[7] = c * _ + u * b + f * B),
      (s[2] = h * m + d * x + g * S),
      (s[5] = h * p + d * y + g * P),
      (s[8] = h * _ + d * b + g * B),
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
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * a * u - t * o * c - i * s * u + i * o * l + r * s * c - r * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = u * a - o * c,
      h = o * l - u * s,
      d = c * s - a * l,
      g = t * f + i * h + r * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / g;
    return (
      (e[0] = f * m),
      (e[1] = (r * c - u * i) * m),
      (e[2] = (o * i - r * a) * m),
      (e[3] = h * m),
      (e[4] = (u * t - r * l) * m),
      (e[5] = (r * s - o * t) * m),
      (e[6] = d * m),
      (e[7] = (i * l - c * t) * m),
      (e[8] = (a * t - i * s) * m),
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
  setUvTransform(e, t, i, r, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * a + c * o) + a + e,
        -r * c,
        r * l,
        -r * (-c * a + l * o) + o + t,
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
      a = r[3],
      o = r[6],
      l = r[1],
      c = r[4],
      u = r[7];
    return (
      (r[0] = t * s + i * l),
      (r[3] = t * a + i * c),
      (r[6] = t * o + i * u),
      (r[1] = -i * s + t * l),
      (r[4] = -i * a + t * c),
      (r[7] = -i * o + t * u),
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
function Ih(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return !0;
  return !1;
}
function no(n) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', n);
}
function Ci(n) {
  return n < 0.04045
    ? n * 0.0773993808
    : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function qs(n) {
  return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
const Go = { [Cn]: { [bi]: Ci }, [bi]: { [Cn]: qs } },
  Yt = {
    legacyMode: !0,
    get workingColorSpace() {
      return bi;
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
  Fh = {
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
  ct = { r: 0, g: 0, b: 0 },
  Zt = { h: 0, s: 0, l: 0 },
  _s = { h: 0, s: 0, l: 0 };
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
function vs(n, e) {
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
  setHex(e, t = Cn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Yt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, r = bi) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      Yt.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, i, r = bi) {
    if (((e = wl(e, 1)), (t = xt(t, 0, 1)), (i = xt(i, 0, 1)), t === 0))
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        a = 2 * i - s;
      (this.r = Ho(a, s, e + 1 / 3)),
        (this.g = Ho(a, s, e)),
        (this.b = Ho(a, s, e - 1 / 3));
    }
    return Yt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Cn) {
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
      const a = r[1],
        o = r[2];
      switch (a) {
        case 'rgb':
        case 'rgba':
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
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
                o
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
                o
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
        a = s.length;
      if (a === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          Yt.toWorkingColorSpace(this, t),
          this
        );
      if (a === 6)
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
  setColorName(e, t = Cn) {
    const i = Fh[e.toLowerCase()];
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
    return (this.r = qs(e.r)), (this.g = qs(e.g)), (this.b = qs(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Cn) {
    return (
      Yt.fromWorkingColorSpace(vs(this, ct), e),
      (xt(ct.r * 255, 0, 255) << 16) ^
        (xt(ct.g * 255, 0, 255) << 8) ^
        (xt(ct.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Cn) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = bi) {
    Yt.fromWorkingColorSpace(vs(this, ct), t);
    const i = ct.r,
      r = ct.g,
      s = ct.b,
      a = Math.max(i, r, s),
      o = Math.min(i, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const f = a - o;
      switch (((c = u <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
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
  getRGB(e, t = bi) {
    return (
      Yt.fromWorkingColorSpace(vs(this, ct), t),
      (e.r = ct.r),
      (e.g = ct.g),
      (e.b = ct.b),
      e
    );
  }
  getStyle(e = Cn) {
    return (
      Yt.fromWorkingColorSpace(vs(this, ct), e),
      e !== Cn
        ? `color(${e} ${ct.r} ${ct.g} ${ct.b})`
        : `rgb(${(ct.r * 255) | 0},${(ct.g * 255) | 0},${(ct.b * 255) | 0})`
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
    this.getHSL(Zt), e.getHSL(_s);
    const i = Jr(Zt.h, _s.h, t),
      r = Jr(Zt.s, _s.s, t),
      s = Jr(Zt.l, _s.l, t);
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
Qe.NAMES = Fh;
let Hi;
class Oh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Hi === void 0 && (Hi = no('canvas')),
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
      const t = no('canvas');
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext('2d');
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = Ci(s[a] / 255) * 255;
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
class Nh {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = In()),
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
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Wo(r[a].image)) : s.push(Wo(r[a]));
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
    ? Oh.getDataURL(n)
    : n.data
    ? {
        data: Array.from(n.data),
        width: n.width,
        height: n.height,
        type: n.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let j0 = 0;
class $t extends Ni {
  constructor(
    e = $t.DEFAULT_IMAGE,
    t = $t.DEFAULT_MAPPING,
    i = tn,
    r = tn,
    s = Ht,
    a = xo,
    o = nn,
    l = Pi,
    c = 1,
    u = Ri
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: j0++ }),
      (this.uuid = In()),
      (this.name = ''),
      (this.source = new Nh(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = i),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Ie(0, 0)),
      (this.repeat = new Ie(1, 1)),
      (this.center = new Ie(0, 0)),
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
    if (this.mapping !== Rh) return e;
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
$t.DEFAULT_MAPPING = Rh;
class Mt {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    (Mt.prototype.isVector4 = !0),
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
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * i + a[8] * r + a[12] * s),
      (this.y = a[1] * t + a[5] * i + a[9] * r + a[13] * s),
      (this.z = a[2] * t + a[6] * i + a[10] * r + a[14] * s),
      (this.w = a[3] * t + a[7] * i + a[11] * r + a[15] * s),
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
      d = l[5],
      g = l[9],
      m = l[2],
      p = l[6],
      _ = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(f - m) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(f + m) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(c + d + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2,
        b = (d + 1) / 2,
        S = (_ + 1) / 2,
        P = (u + h) / 4,
        B = (f + m) / 4,
        M = (g + p) / 4;
      return (
        y > b && y > S
          ? y < 0.01
            ? ((i = 0), (r = 0.707106781), (s = 0.707106781))
            : ((i = Math.sqrt(y)), (r = P / i), (s = B / i))
          : b > S
          ? b < 0.01
            ? ((i = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(b)), (i = P / r), (s = M / r))
          : S < 0.01
          ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(S)), (i = B / s), (r = M / s)),
        this.set(i, r, s, t),
        this
      );
    }
    let x = Math.sqrt(
      (p - g) * (p - g) + (f - m) * (f - m) + (h - u) * (h - u)
    );
    return (
      Math.abs(x) < 0.001 && (x = 1),
      (this.x = (p - g) / x),
      (this.y = (f - m) / x),
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
      (this.scissor = new Mt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Mt(0, 0, e, t));
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
      (this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : Ht),
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
      (this.texture.source = new Nh(t)),
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
class zh extends $t {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = Ft),
      (this.minFilter = Ft),
      (this.wrapR = tn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class $0 extends $t {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = Ft),
      (this.minFilter = Ft),
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
  static slerpFlat(e, t, i, r, s, a, o) {
    let l = i[r + 0],
      c = i[r + 1],
      u = i[r + 2],
      f = i[r + 3];
    const h = s[a + 0],
      d = s[a + 1],
      g = s[a + 2],
      m = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
      return;
    }
    if (o === 1) {
      (e[t + 0] = h), (e[t + 1] = d), (e[t + 2] = g), (e[t + 3] = m);
      return;
    }
    if (f !== m || l !== h || c !== d || u !== g) {
      let p = 1 - o;
      const _ = l * h + c * d + u * g + f * m,
        x = _ >= 0 ? 1 : -1,
        y = 1 - _ * _;
      if (y > Number.EPSILON) {
        const S = Math.sqrt(y),
          P = Math.atan2(S, _ * x);
        (p = Math.sin(p * P) / S), (o = Math.sin(o * P) / S);
      }
      const b = o * x;
      if (
        ((l = l * p + h * b),
        (c = c * p + d * b),
        (u = u * p + g * b),
        (f = f * p + m * b),
        p === 1 - o)
      ) {
        const S = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        (l *= S), (c *= S), (u *= S), (f *= S);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, i, r, s, a) {
    const o = i[r],
      l = i[r + 1],
      c = i[r + 2],
      u = i[r + 3],
      f = s[a],
      h = s[a + 1],
      d = s[a + 2],
      g = s[a + 3];
    return (
      (e[t] = o * g + u * f + l * d - c * h),
      (e[t + 1] = l * g + u * h + c * f - o * d),
      (e[t + 2] = c * g + u * d + o * h - l * f),
      (e[t + 3] = u * g - o * f - l * h - c * d),
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
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(i / 2),
      u = o(r / 2),
      f = o(s / 2),
      h = l(i / 2),
      d = l(r / 2),
      g = l(s / 2);
    switch (a) {
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
          'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + a
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
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      h = i + o + f;
    if (h > 0) {
      const d = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / d),
        (this._x = (u - l) * d),
        (this._y = (s - c) * d),
        (this._z = (a - r) * d);
    } else if (i > o && i > f) {
      const d = 2 * Math.sqrt(1 + i - o - f);
      (this._w = (u - l) / d),
        (this._x = 0.25 * d),
        (this._y = (r + a) / d),
        (this._z = (s + c) / d);
    } else if (o > f) {
      const d = 2 * Math.sqrt(1 + o - i - f);
      (this._w = (s - c) / d),
        (this._x = (r + a) / d),
        (this._y = 0.25 * d),
        (this._z = (l + u) / d);
    } else {
      const d = 2 * Math.sqrt(1 + f - i - o);
      (this._w = (a - r) / d),
        (this._x = (s + c) / d),
        (this._y = (l + u) / d),
        (this._z = 0.25 * d);
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
    return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1)));
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
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = i * u + a * o + r * c - s * l),
      (this._y = r * u + a * l + s * o - i * c),
      (this._z = s * u + a * c + i * l - r * o),
      (this._w = a * u - i * o - r * l - s * c),
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
      a = this._w;
    let o = a * e._w + i * e._x + r * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = i), (this._y = r), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return (
        (this._w = d * a + t * this._w),
        (this._x = d * i + t * this._x),
        (this._y = d * r + t * this._y),
        (this._z = d * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      f = Math.sin((1 - t) * u) / c,
      h = Math.sin(t * u) / c;
    return (
      (this._w = a * f + this._w * h),
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
class N {
  constructor(e = 0, t = 0, i = 0) {
    (N.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
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
      a = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * a),
      (this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * a),
      (this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = l * t + a * r - o * i,
      u = l * i + o * t - s * r,
      f = l * r + s * i - a * t,
      h = -s * t - a * i - o * r;
    return (
      (this.x = c * l + h * -s + u * -o - f * -a),
      (this.y = u * l + h * -a + f * -s - c * -o),
      (this.z = f * l + h * -o + c * -a - u * -s),
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
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * o),
      (this.y = s * a - i * l),
      (this.z = i * o - r * a),
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
    return Math.acos(xt(i, -1, 1));
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
const qo = new N(),
  au = new Ii();
class cs {
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
      i = 1 / 0,
      r = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l],
        f = e[l + 1],
        h = e[l + 2];
      u < t && (t = u),
        f < i && (i = f),
        h < r && (r = h),
        u > s && (s = u),
        f > a && (a = f),
        h > o && (o = h);
    }
    return this.min.set(t, i, r), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      i = 1 / 0,
      r = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l),
        f = e.getY(l),
        h = e.getZ(l);
      u < t && (t = u),
        f < i && (i = f),
        h < r && (r = h),
        u > s && (s = u),
        f > a && (a = f),
        h > o && (o = h);
    }
    return this.min.set(t, i, r), this.max.set(s, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = ci.copy(t).multiplyScalar(0.5);
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
        for (let a = 0, o = s.count; a < o; a++)
          ci.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(ci);
      } else
        i.boundingBox === null && i.computeBoundingBox(),
          Xo.copy(i.boundingBox),
          Xo.applyMatrix4(e.matrixWorld),
          this.union(Xo);
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
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
      this.clampPoint(e.center, ci),
      ci.distanceToSquared(e.center) <= e.radius * e.radius
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
      xs.subVectors(this.max, zr),
      Wi.subVectors(e.a, zr),
      qi.subVectors(e.b, zr),
      Xi.subVectors(e.c, zr),
      Bn.subVectors(qi, Wi),
      kn.subVectors(Xi, qi),
      ui.subVectors(Wi, Xi);
    let t = [
      0,
      -Bn.z,
      Bn.y,
      0,
      -kn.z,
      kn.y,
      0,
      -ui.z,
      ui.y,
      Bn.z,
      0,
      -Bn.x,
      kn.z,
      0,
      -kn.x,
      ui.z,
      0,
      -ui.x,
      -Bn.y,
      Bn.x,
      0,
      -kn.y,
      kn.x,
      0,
      -ui.y,
      ui.x,
      0,
    ];
    return !jo(t, Wi, qi, Xi, xs) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !jo(t, Wi, qi, Xi, xs))
      ? !1
      : (ys.crossVectors(Bn, kn),
        (t = [ys.x, ys.y, ys.z]),
        jo(t, Wi, qi, Xi, xs));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return ci.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(ci).length() * 0.5), e
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
      : (bn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        bn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        bn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        bn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        bn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        bn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        bn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        bn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(bn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const bn = [
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
  ],
  ci = new N(),
  Xo = new cs(),
  Wi = new N(),
  qi = new N(),
  Xi = new N(),
  Bn = new N(),
  kn = new N(),
  ui = new N(),
  zr = new N(),
  xs = new N(),
  ys = new N(),
  fi = new N();
function jo(n, e, t, i, r) {
  for (let s = 0, a = n.length - 3; s <= a; s += 3) {
    fi.fromArray(n, s);
    const o =
        r.x * Math.abs(fi.x) + r.y * Math.abs(fi.y) + r.z * Math.abs(fi.z),
      l = e.dot(fi),
      c = t.dot(fi),
      u = i.dot(fi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const Y0 = new cs(),
  Ur = new N(),
  $o = new N();
class yo {
  constructor(e = new N(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Y0.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
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
const Sn = new N(),
  Yo = new N(),
  Ms = new N(),
  Vn = new N(),
  Zo = new N(),
  bs = new N(),
  Ko = new N();
class Uh {
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
    return this.origin.copy(this.at(e, Sn)), this;
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
    const t = Sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Sn.copy(this.direction).multiplyScalar(t).add(this.origin),
        Sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, r) {
    Yo.copy(e).add(t).multiplyScalar(0.5),
      Ms.copy(t).sub(e).normalize(),
      Vn.copy(this.origin).sub(Yo);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Ms),
      o = Vn.dot(this.direction),
      l = -Vn.dot(Ms),
      c = Vn.lengthSq(),
      u = Math.abs(1 - a * a);
    let f, h, d, g;
    if (u > 0)
      if (((f = a * l - o), (h = a * o - l), (g = s * u), f >= 0))
        if (h >= -g)
          if (h <= g) {
            const m = 1 / u;
            (f *= m),
              (h *= m),
              (d = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * l) + c);
          } else
            (h = s),
              (f = Math.max(0, -(a * h + o))),
              (d = -f * f + h * (h + 2 * l) + c);
        else
          (h = -s),
            (f = Math.max(0, -(a * h + o))),
            (d = -f * f + h * (h + 2 * l) + c);
      else
        h <= -g
          ? ((f = Math.max(0, -(-a * s + o))),
            (h = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (d = -f * f + h * (h + 2 * l) + c))
          : h <= g
          ? ((f = 0),
            (h = Math.min(Math.max(-s, -l), s)),
            (d = h * (h + 2 * l) + c))
          : ((f = Math.max(0, -(a * s + o))),
            (h = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (d = -f * f + h * (h + 2 * l) + c));
    else
      (h = a > 0 ? -s : s),
        (f = Math.max(0, -(a * h + o))),
        (d = -f * f + h * (h + 2 * l) + c);
    return (
      i && i.copy(this.direction).multiplyScalar(f).add(this.origin),
      r && r.copy(Ms).multiplyScalar(h).add(Yo),
      d
    );
  }
  intersectSphere(e, t) {
    Sn.subVectors(e.center, this.origin);
    const i = Sn.dot(this.direction),
      r = Sn.dot(Sn) - i * i,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = i - a,
      l = i + a;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let i, r, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((i = (e.min.x - h.x) * c), (r = (e.max.x - h.x) * c))
        : ((i = (e.max.x - h.x) * c), (r = (e.min.x - h.x) * c)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (a = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (a = (e.min.y - h.y) * u)),
      i > a ||
      s > r ||
      ((s > i || isNaN(i)) && (i = s),
      (a < r || isNaN(r)) && (r = a),
      f >= 0
        ? ((o = (e.min.z - h.z) * f), (l = (e.max.z - h.z) * f))
        : ((o = (e.max.z - h.z) * f), (l = (e.min.z - h.z) * f)),
      i > l || o > r) ||
      ((o > i || i !== i) && (i = o), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(i >= 0 ? i : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Sn) !== null;
  }
  intersectTriangle(e, t, i, r, s) {
    Zo.subVectors(t, e), bs.subVectors(i, e), Ko.crossVectors(Zo, bs);
    let a = this.direction.dot(Ko),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Vn.subVectors(this.origin, e);
    const l = o * this.direction.dot(bs.crossVectors(Vn, bs));
    if (l < 0) return null;
    const c = o * this.direction.dot(Zo.cross(Vn));
    if (c < 0 || l + c > a) return null;
    const u = -o * Vn.dot(Ko);
    return u < 0 ? null : this.at(u / a, s);
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
class lt {
  constructor() {
    (lt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, i, r, s, a, o, l, c, u, f, h, d, g, m, p) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = i),
      (_[12] = r),
      (_[1] = s),
      (_[5] = a),
      (_[9] = o),
      (_[13] = l),
      (_[2] = c),
      (_[6] = u),
      (_[10] = f),
      (_[14] = h),
      (_[3] = d),
      (_[7] = g),
      (_[11] = m),
      (_[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new lt().fromArray(this.elements);
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
      a = 1 / ji.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * r),
      (t[1] = i[1] * r),
      (t[2] = i[2] * r),
      (t[3] = 0),
      (t[4] = i[4] * s),
      (t[5] = i[5] * s),
      (t[6] = i[6] * s),
      (t[7] = 0),
      (t[8] = i[8] * a),
      (t[9] = i[9] * a),
      (t[10] = i[10] * a),
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
      a = Math.cos(i),
      o = Math.sin(i),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === 'XYZ') {
      const h = a * u,
        d = a * f,
        g = o * u,
        m = o * f;
      (t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = d + g * c),
        (t[5] = h - m * c),
        (t[9] = -o * l),
        (t[2] = m - h * c),
        (t[6] = g + d * c),
        (t[10] = a * l);
    } else if (e.order === 'YXZ') {
      const h = l * u,
        d = l * f,
        g = c * u,
        m = c * f;
      (t[0] = h + m * o),
        (t[4] = g * o - d),
        (t[8] = a * c),
        (t[1] = a * f),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = d * o - g),
        (t[6] = m + h * o),
        (t[10] = a * l);
    } else if (e.order === 'ZXY') {
      const h = l * u,
        d = l * f,
        g = c * u,
        m = c * f;
      (t[0] = h - m * o),
        (t[4] = -a * f),
        (t[8] = g + d * o),
        (t[1] = d + g * o),
        (t[5] = a * u),
        (t[9] = m - h * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === 'ZYX') {
      const h = a * u,
        d = a * f,
        g = o * u,
        m = o * f;
      (t[0] = l * u),
        (t[4] = g * c - d),
        (t[8] = h * c + m),
        (t[1] = l * f),
        (t[5] = m * c + h),
        (t[9] = d * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === 'YZX') {
      const h = a * l,
        d = a * c,
        g = o * l,
        m = o * c;
      (t[0] = l * u),
        (t[4] = m - h * f),
        (t[8] = g * f + d),
        (t[1] = f),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = d * f + g),
        (t[10] = h - m * f);
    } else if (e.order === 'XZY') {
      const h = a * l,
        d = a * c,
        g = o * l,
        m = o * c;
      (t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = h * f + m),
        (t[5] = a * u),
        (t[9] = d * f - g),
        (t[2] = g * f - d),
        (t[6] = o * u),
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
    return this.compose(Z0, e, K0);
  }
  lookAt(e, t, i) {
    const r = this.elements;
    return (
      Nt.subVectors(e, t),
      Nt.lengthSq() === 0 && (Nt.z = 1),
      Nt.normalize(),
      Gn.crossVectors(i, Nt),
      Gn.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (Nt.x += 1e-4) : (Nt.z += 1e-4),
        Nt.normalize(),
        Gn.crossVectors(i, Nt)),
      Gn.normalize(),
      Ss.crossVectors(Nt, Gn),
      (r[0] = Gn.x),
      (r[4] = Ss.x),
      (r[8] = Nt.x),
      (r[1] = Gn.y),
      (r[5] = Ss.y),
      (r[9] = Nt.y),
      (r[2] = Gn.z),
      (r[6] = Ss.z),
      (r[10] = Nt.z),
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
      a = i[0],
      o = i[4],
      l = i[8],
      c = i[12],
      u = i[1],
      f = i[5],
      h = i[9],
      d = i[13],
      g = i[2],
      m = i[6],
      p = i[10],
      _ = i[14],
      x = i[3],
      y = i[7],
      b = i[11],
      S = i[15],
      P = r[0],
      B = r[4],
      M = r[8],
      L = r[12],
      R = r[1],
      Y = r[5],
      de = r[9],
      G = r[13],
      z = r[2],
      te = r[6],
      ie = r[10],
      Z = r[14],
      W = r[3],
      U = r[7],
      X = r[11],
      ue = r[15];
    return (
      (s[0] = a * P + o * R + l * z + c * W),
      (s[4] = a * B + o * Y + l * te + c * U),
      (s[8] = a * M + o * de + l * ie + c * X),
      (s[12] = a * L + o * G + l * Z + c * ue),
      (s[1] = u * P + f * R + h * z + d * W),
      (s[5] = u * B + f * Y + h * te + d * U),
      (s[9] = u * M + f * de + h * ie + d * X),
      (s[13] = u * L + f * G + h * Z + d * ue),
      (s[2] = g * P + m * R + p * z + _ * W),
      (s[6] = g * B + m * Y + p * te + _ * U),
      (s[10] = g * M + m * de + p * ie + _ * X),
      (s[14] = g * L + m * G + p * Z + _ * ue),
      (s[3] = x * P + y * R + b * z + S * W),
      (s[7] = x * B + y * Y + b * te + S * U),
      (s[11] = x * M + y * de + b * ie + S * X),
      (s[15] = x * L + y * G + b * Z + S * ue),
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
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      f = e[6],
      h = e[10],
      d = e[14],
      g = e[3],
      m = e[7],
      p = e[11],
      _ = e[15];
    return (
      g *
        (+s * l * f -
          r * c * f -
          s * o * h +
          i * c * h +
          r * o * d -
          i * l * d) +
      m *
        (+t * l * d -
          t * c * h +
          s * a * h -
          r * a * d +
          r * c * u -
          s * l * u) +
      p *
        (+t * c * f -
          t * o * d -
          s * a * f +
          i * a * d +
          s * o * u -
          i * c * u) +
      _ *
        (-r * o * u - t * l * f + t * o * h + r * a * f - i * a * h + i * l * u)
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
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = e[9],
      h = e[10],
      d = e[11],
      g = e[12],
      m = e[13],
      p = e[14],
      _ = e[15],
      x = f * p * c - m * h * c + m * l * d - o * p * d - f * l * _ + o * h * _,
      y = g * h * c - u * p * c - g * l * d + a * p * d + u * l * _ - a * h * _,
      b = u * m * c - g * f * c + g * o * d - a * m * d - u * o * _ + a * f * _,
      S = g * f * l - u * m * l - g * o * h + a * m * h + u * o * p - a * f * p,
      P = t * x + i * y + r * b + s * S;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const B = 1 / P;
    return (
      (e[0] = x * B),
      (e[1] =
        (m * h * s -
          f * p * s -
          m * r * d +
          i * p * d +
          f * r * _ -
          i * h * _) *
        B),
      (e[2] =
        (o * p * s -
          m * l * s +
          m * r * c -
          i * p * c -
          o * r * _ +
          i * l * _) *
        B),
      (e[3] =
        (f * l * s -
          o * h * s -
          f * r * c +
          i * h * c +
          o * r * d -
          i * l * d) *
        B),
      (e[4] = y * B),
      (e[5] =
        (u * p * s -
          g * h * s +
          g * r * d -
          t * p * d -
          u * r * _ +
          t * h * _) *
        B),
      (e[6] =
        (g * l * s -
          a * p * s -
          g * r * c +
          t * p * c +
          a * r * _ -
          t * l * _) *
        B),
      (e[7] =
        (a * h * s -
          u * l * s +
          u * r * c -
          t * h * c -
          a * r * d +
          t * l * d) *
        B),
      (e[8] = b * B),
      (e[9] =
        (g * f * s -
          u * m * s -
          g * i * d +
          t * m * d +
          u * i * _ -
          t * f * _) *
        B),
      (e[10] =
        (a * m * s -
          g * o * s +
          g * i * c -
          t * m * c -
          a * i * _ +
          t * o * _) *
        B),
      (e[11] =
        (u * o * s -
          a * f * s -
          u * i * c +
          t * f * c +
          a * i * d -
          t * o * d) *
        B),
      (e[12] = S * B),
      (e[13] =
        (u * m * r -
          g * f * r +
          g * i * h -
          t * m * h -
          u * i * p +
          t * f * p) *
        B),
      (e[14] =
        (g * o * r -
          a * m * r -
          g * i * l +
          t * m * l +
          a * i * p -
          t * o * p) *
        B),
      (e[15] =
        (a * f * r -
          u * o * r +
          u * i * l -
          t * f * l -
          a * i * h +
          t * o * h) *
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
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + i,
        c * o - r * l,
        c * l + r * o,
        0,
        c * o + r * l,
        u * o + i,
        u * l - r * a,
        0,
        c * l - r * o,
        u * l + r * a,
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
  makeShear(e, t, i, r, s, a) {
    return this.set(1, i, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const r = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      u = a + a,
      f = o + o,
      h = s * c,
      d = s * u,
      g = s * f,
      m = a * u,
      p = a * f,
      _ = o * f,
      x = l * c,
      y = l * u,
      b = l * f,
      S = i.x,
      P = i.y,
      B = i.z;
    return (
      (r[0] = (1 - (m + _)) * S),
      (r[1] = (d + b) * S),
      (r[2] = (g - y) * S),
      (r[3] = 0),
      (r[4] = (d - b) * P),
      (r[5] = (1 - (h + _)) * P),
      (r[6] = (p + x) * P),
      (r[7] = 0),
      (r[8] = (g + y) * B),
      (r[9] = (p - x) * B),
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
    const a = ji.set(r[4], r[5], r[6]).length(),
      o = ji.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      Kt.copy(this);
    const c = 1 / s,
      u = 1 / a,
      f = 1 / o;
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
      (i.y = a),
      (i.z = o),
      this
    );
  }
  makePerspective(e, t, i, r, s, a) {
    const o = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (i - r),
      u = (t + e) / (t - e),
      f = (i + r) / (i - r),
      h = -(a + s) / (a - s),
      d = (-2 * a * s) / (a - s);
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = u),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = f),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = h),
      (o[14] = d),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, r, s, a) {
    const o = this.elements,
      l = 1 / (t - e),
      c = 1 / (i - r),
      u = 1 / (a - s),
      f = (t + e) * l,
      h = (i + r) * c,
      d = (a + s) * u;
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -f),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -h),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * u),
      (o[14] = -d),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
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
const ji = new N(),
  Kt = new lt(),
  Z0 = new N(0, 0, 0),
  K0 = new N(1, 1, 1),
  Gn = new N(),
  Ss = new N(),
  Nt = new N(),
  lu = new lt(),
  cu = new Ii();
class us {
  constructor(e = 0, t = 0, i = 0, r = us.DefaultOrder) {
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
      a = r[4],
      o = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      f = r[2],
      h = r[6],
      d = r[10];
    switch (t) {
      case 'XYZ':
        (this._y = Math.asin(xt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, d)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-xt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(xt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, d)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-xt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, d)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(xt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, d)));
        break;
      case 'XZY':
        (this._z = Math.asin(-xt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, d)), (this._y = 0));
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
us.DefaultOrder = 'XYZ';
us.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
class Bh {
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
let J0 = 0;
const uu = new N(),
  $i = new Ii(),
  wn = new lt(),
  ws = new N(),
  Br = new N(),
  Q0 = new N(),
  ev = new Ii(),
  fu = new N(1, 0, 0),
  hu = new N(0, 1, 0),
  du = new N(0, 0, 1),
  tv = { type: 'added' },
  pu = { type: 'removed' };
class Dt extends Ni {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: J0++ }),
      (this.uuid = In()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = Dt.DefaultUp.clone());
    const e = new N(),
      t = new us(),
      i = new Ii(),
      r = new N(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s),
      i._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new lt() },
        normalMatrix: { value: new qt() },
      }),
      (this.matrix = new lt()),
      (this.matrixWorld = new lt()),
      (this.matrixAutoUpdate = Dt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = Dt.DefaultMatrixWorldAutoUpdate),
      (this.layers = new Bh()),
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
    return e.applyMatrix4(wn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? ws.copy(e) : ws.set(e, t, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      Br.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? wn.lookAt(Br, ws, this.up)
        : wn.lookAt(ws, Br, this.up),
      this.quaternion.setFromRotationMatrix(wn),
      r &&
        (wn.extractRotation(r.matrixWorld),
        $i.setFromRotationMatrix(wn),
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
            e.dispatchEvent(tv))
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
      wn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), wn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(wn),
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
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Br, e, Q0), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Br, ev, e), e
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
      for (let s = 0, a = r.length; s < a; s++) {
        const o = r[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
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
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
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
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
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
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        u = a(e.images),
        f = a(e.shapes),
        h = a(e.skeletons),
        d = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (i.geometries = o),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        u.length > 0 && (i.images = u),
        f.length > 0 && (i.shapes = f),
        h.length > 0 && (i.skeletons = h),
        d.length > 0 && (i.animations = d),
        g.length > 0 && (i.nodes = g);
    }
    return (i.object = r), i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
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
Dt.DefaultUp = new N(0, 1, 0);
Dt.DefaultMatrixAutoUpdate = !0;
Dt.DefaultMatrixWorldAutoUpdate = !0;
const Jt = new N(),
  En = new N(),
  Jo = new N(),
  Tn = new N(),
  Yi = new N(),
  Zi = new N(),
  mu = new N(),
  Qo = new N(),
  ea = new N(),
  ta = new N();
class pn {
  constructor(e = new N(), t = new N(), i = new N()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, r) {
    r.subVectors(i, t), Jt.subVectors(e, t), r.cross(Jt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, r, s) {
    Jt.subVectors(r, t), En.subVectors(i, t), Jo.subVectors(e, t);
    const a = Jt.dot(Jt),
      o = Jt.dot(En),
      l = Jt.dot(Jo),
      c = En.dot(En),
      u = En.dot(Jo),
      f = a * c - o * o;
    if (f === 0) return s.set(-2, -1, -1);
    const h = 1 / f,
      d = (c * l - o * u) * h,
      g = (a * u - o * l) * h;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, i, r) {
    return (
      this.getBarycoord(e, t, i, r, Tn),
      Tn.x >= 0 && Tn.y >= 0 && Tn.x + Tn.y <= 1
    );
  }
  static getUV(e, t, i, r, s, a, o, l) {
    return (
      this.getBarycoord(e, t, i, r, Tn),
      l.set(0, 0),
      l.addScaledVector(s, Tn.x),
      l.addScaledVector(a, Tn.y),
      l.addScaledVector(o, Tn.z),
      l
    );
  }
  static isFrontFacing(e, t, i, r) {
    return Jt.subVectors(i, t), En.subVectors(e, t), Jt.cross(En).dot(r) < 0;
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
      En.subVectors(this.a, this.b),
      Jt.cross(En).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return pn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return pn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, i, r, s) {
    return pn.getUV(e, this.a, this.b, this.c, t, i, r, s);
  }
  containsPoint(e) {
    return pn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return pn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      r = this.b,
      s = this.c;
    let a, o;
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
      return (a = l / (l - u)), t.copy(i).addScaledVector(Yi, a);
    ta.subVectors(e, s);
    const d = Yi.dot(ta),
      g = Zi.dot(ta);
    if (g >= 0 && d <= g) return t.copy(s);
    const m = d * c - l * g;
    if (m <= 0 && c >= 0 && g <= 0)
      return (o = c / (c - g)), t.copy(i).addScaledVector(Zi, o);
    const p = u * g - d * f;
    if (p <= 0 && f - u >= 0 && d - g >= 0)
      return (
        mu.subVectors(s, r),
        (o = (f - u) / (f - u + (d - g))),
        t.copy(r).addScaledVector(mu, o)
      );
    const _ = 1 / (p + m + h);
    return (
      (a = m * _),
      (o = h * _),
      t.copy(i).addScaledVector(Yi, a).addScaledVector(Zi, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let nv = 0;
class Ir extends Ni {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: nv++ }),
      (this.uuid = In()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = gr),
      (this.side = Er),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Ch),
      (this.blendDst = Lh),
      (this.blendEquation = lr),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Oa),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = D0),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Vo),
      (this.stencilZFail = Vo),
      (this.stencilZPass = Vo),
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
      this.blending !== gr && (i.blending = this.blending),
      this.side !== Er && (i.side = this.side),
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
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures),
        a = r(e.images);
      s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a);
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
class kh extends Ir {
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
      (this.combine = Ph),
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
const ot = new N(),
  Es = new Ie();
class on {
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
        Es.fromBufferAttribute(this, t),
          Es.applyMatrix3(e),
          this.setXY(t, Es.x, Es.y);
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
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Ze(t, this.array)), (i = Ze(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ze(t, this.array)),
        (i = Ze(i, this.array)),
        (r = Ze(r, this.array))),
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
        ((t = Ze(t, this.array)),
        (i = Ze(i, this.array)),
        (r = Ze(r, this.array)),
        (s = Ze(s, this.array))),
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
class Vh extends on {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Gh extends on {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class ei extends on {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let iv = 0;
const Gt = new lt(),
  na = new Dt(),
  Ki = new N(),
  zt = new cs(),
  kr = new cs(),
  mt = new N();
class xn extends Ni {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: iv++ }),
      (this.uuid = In()),
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
        ? (this.index = new (Ih(e) ? Gh : Vh)(e, 1))
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
    return Gt.makeRotationFromQuaternion(e), this.applyMatrix4(Gt), this;
  }
  rotateX(e) {
    return Gt.makeRotationX(e), this.applyMatrix4(Gt), this;
  }
  rotateY(e) {
    return Gt.makeRotationY(e), this.applyMatrix4(Gt), this;
  }
  rotateZ(e) {
    return Gt.makeRotationZ(e), this.applyMatrix4(Gt), this;
  }
  translate(e, t, i) {
    return Gt.makeTranslation(e, t, i), this.applyMatrix4(Gt), this;
  }
  scale(e, t, i) {
    return Gt.makeScale(e, t, i), this.applyMatrix4(Gt), this;
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
    return this.setAttribute('position', new ei(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new cs());
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
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          zt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (mt.addVectors(this.boundingBox.min, zt.min),
                this.boundingBox.expandByPoint(mt),
                mt.addVectors(this.boundingBox.max, zt.max),
                this.boundingBox.expandByPoint(mt))
              : (this.boundingBox.expandByPoint(zt.min),
                this.boundingBox.expandByPoint(zt.max));
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
    this.boundingSphere === null && (this.boundingSphere = new yo());
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
      const i = this.boundingSphere.center;
      if ((zt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          kr.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (mt.addVectors(zt.min, kr.min),
                zt.expandByPoint(mt),
                mt.addVectors(zt.max, kr.max),
                zt.expandByPoint(mt))
              : (zt.expandByPoint(kr.min), zt.expandByPoint(kr.max));
        }
      zt.getCenter(i);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        mt.fromBufferAttribute(e, s),
          (r = Math.max(r, i.distanceToSquared(mt)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            mt.fromBufferAttribute(o, c),
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
      a = t.uv.array,
      o = r.length / 3;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new on(new Float32Array(4 * o), 4));
    const l = this.getAttribute('tangent').array,
      c = [],
      u = [];
    for (let R = 0; R < o; R++) (c[R] = new N()), (u[R] = new N());
    const f = new N(),
      h = new N(),
      d = new N(),
      g = new Ie(),
      m = new Ie(),
      p = new Ie(),
      _ = new N(),
      x = new N();
    function y(R, Y, de) {
      f.fromArray(r, R * 3),
        h.fromArray(r, Y * 3),
        d.fromArray(r, de * 3),
        g.fromArray(a, R * 2),
        m.fromArray(a, Y * 2),
        p.fromArray(a, de * 2),
        h.sub(f),
        d.sub(f),
        m.sub(g),
        p.sub(g);
      const G = 1 / (m.x * p.y - p.x * m.y);
      !isFinite(G) ||
        (_.copy(h)
          .multiplyScalar(p.y)
          .addScaledVector(d, -m.y)
          .multiplyScalar(G),
        x
          .copy(d)
          .multiplyScalar(m.x)
          .addScaledVector(h, -p.x)
          .multiplyScalar(G),
        c[R].add(_),
        c[Y].add(_),
        c[de].add(_),
        u[R].add(x),
        u[Y].add(x),
        u[de].add(x));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: i.length }]);
    for (let R = 0, Y = b.length; R < Y; ++R) {
      const de = b[R],
        G = de.start,
        z = de.count;
      for (let te = G, ie = G + z; te < ie; te += 3)
        y(i[te + 0], i[te + 1], i[te + 2]);
    }
    const S = new N(),
      P = new N(),
      B = new N(),
      M = new N();
    function L(R) {
      B.fromArray(s, R * 3), M.copy(B);
      const Y = c[R];
      S.copy(Y),
        S.sub(B.multiplyScalar(B.dot(Y))).normalize(),
        P.crossVectors(M, Y);
      const G = P.dot(u[R]) < 0 ? -1 : 1;
      (l[R * 4] = S.x),
        (l[R * 4 + 1] = S.y),
        (l[R * 4 + 2] = S.z),
        (l[R * 4 + 3] = G);
    }
    for (let R = 0, Y = b.length; R < Y; ++R) {
      const de = b[R],
        G = de.start,
        z = de.count;
      for (let te = G, ie = G + z; te < ie; te += 3)
        L(i[te + 0]), L(i[te + 1]), L(i[te + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let i = this.getAttribute('normal');
      if (i === void 0)
        (i = new on(new Float32Array(t.count * 3), 3)),
          this.setAttribute('normal', i);
      else for (let h = 0, d = i.count; h < d; h++) i.setXYZ(h, 0, 0, 0);
      const r = new N(),
        s = new N(),
        a = new N(),
        o = new N(),
        l = new N(),
        c = new N(),
        u = new N(),
        f = new N();
      if (e)
        for (let h = 0, d = e.count; h < d; h += 3) {
          const g = e.getX(h + 0),
            m = e.getX(h + 1),
            p = e.getX(h + 2);
          r.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, m),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, s),
            f.subVectors(r, s),
            u.cross(f),
            o.fromBufferAttribute(i, g),
            l.fromBufferAttribute(i, m),
            c.fromBufferAttribute(i, p),
            o.add(u),
            l.add(u),
            c.add(u),
            i.setXYZ(g, o.x, o.y, o.z),
            i.setXYZ(m, l.x, l.y, l.z),
            i.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let h = 0, d = t.count; h < d; h += 3)
          r.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            a.fromBufferAttribute(t, h + 2),
            u.subVectors(a, s),
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
    function e(o, l) {
      const c = o.array,
        u = o.itemSize,
        f = o.normalized,
        h = new c.constructor(l.length * u);
      let d = 0,
        g = 0;
      for (let m = 0, p = l.length; m < p; m++) {
        o.isInterleavedBufferAttribute
          ? (d = l[m] * o.data.stride + o.offset)
          : (d = l[m] * u);
        for (let _ = 0; _ < u; _++) h[g++] = c[d++];
      }
      return new on(h, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
        ),
        this
      );
    const t = new xn(),
      i = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const l = r[o],
        c = e(l, i);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, f = c.length; u < f; u++) {
        const h = c[u],
          d = e(h, i);
        l.push(d);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
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
        const d = c[f];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
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
      for (let h = 0, d = f.length; h < d; h++) u.push(f[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
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
const gu = new lt(),
  Ji = new Uh(),
  ia = new yo(),
  Hn = new N(),
  Wn = new N(),
  qn = new N(),
  ra = new N(),
  sa = new N(),
  oa = new N(),
  Ts = new N(),
  As = new N(),
  Cs = new N(),
  Ls = new Ie(),
  Ps = new Ie(),
  Rs = new Ie(),
  aa = new N(),
  Ds = new N();
class Yn extends Dt {
  constructor(e = new xn(), t = new kh()) {
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
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
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
    let a;
    const o = i.index,
      l = i.attributes.position,
      c = i.morphAttributes.position,
      u = i.morphTargetsRelative,
      f = i.attributes.uv,
      h = i.attributes.uv2,
      d = i.groups,
      g = i.drawRange;
    if (o !== null)
      if (Array.isArray(r))
        for (let m = 0, p = d.length; m < p; m++) {
          const _ = d[m],
            x = r[_.materialIndex],
            y = Math.max(_.start, g.start),
            b = Math.min(
              o.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let S = y, P = b; S < P; S += 3) {
            const B = o.getX(S),
              M = o.getX(S + 1),
              L = o.getX(S + 2);
            (a = Is(this, x, e, Ji, l, c, u, f, h, B, M, L)),
              a &&
                ((a.faceIndex = Math.floor(S / 3)),
                (a.face.materialIndex = _.materialIndex),
                t.push(a));
          }
        }
      else {
        const m = Math.max(0, g.start),
          p = Math.min(o.count, g.start + g.count);
        for (let _ = m, x = p; _ < x; _ += 3) {
          const y = o.getX(_),
            b = o.getX(_ + 1),
            S = o.getX(_ + 2);
          (a = Is(this, r, e, Ji, l, c, u, f, h, y, b, S)),
            a && ((a.faceIndex = Math.floor(_ / 3)), t.push(a));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(r))
        for (let m = 0, p = d.length; m < p; m++) {
          const _ = d[m],
            x = r[_.materialIndex],
            y = Math.max(_.start, g.start),
            b = Math.min(
              l.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let S = y, P = b; S < P; S += 3) {
            const B = S,
              M = S + 1,
              L = S + 2;
            (a = Is(this, x, e, Ji, l, c, u, f, h, B, M, L)),
              a &&
                ((a.faceIndex = Math.floor(S / 3)),
                (a.face.materialIndex = _.materialIndex),
                t.push(a));
          }
        }
      else {
        const m = Math.max(0, g.start),
          p = Math.min(l.count, g.start + g.count);
        for (let _ = m, x = p; _ < x; _ += 3) {
          const y = _,
            b = _ + 1,
            S = _ + 2;
          (a = Is(this, r, e, Ji, l, c, u, f, h, y, b, S)),
            a && ((a.faceIndex = Math.floor(_ / 3)), t.push(a));
        }
      }
  }
}
function rv(n, e, t, i, r, s, a, o) {
  let l;
  if (
    (e.side === jt
      ? (l = i.intersectTriangle(a, s, r, !0, o))
      : (l = i.intersectTriangle(r, s, a, e.side !== $n, o)),
    l === null)
  )
    return null;
  Ds.copy(o), Ds.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(Ds);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Ds.clone(), object: n };
}
function Is(n, e, t, i, r, s, a, o, l, c, u, f) {
  Hn.fromBufferAttribute(r, c),
    Wn.fromBufferAttribute(r, u),
    qn.fromBufferAttribute(r, f);
  const h = n.morphTargetInfluences;
  if (s && h) {
    Ts.set(0, 0, 0), As.set(0, 0, 0), Cs.set(0, 0, 0);
    for (let g = 0, m = s.length; g < m; g++) {
      const p = h[g],
        _ = s[g];
      p !== 0 &&
        (ra.fromBufferAttribute(_, c),
        sa.fromBufferAttribute(_, u),
        oa.fromBufferAttribute(_, f),
        a
          ? (Ts.addScaledVector(ra, p),
            As.addScaledVector(sa, p),
            Cs.addScaledVector(oa, p))
          : (Ts.addScaledVector(ra.sub(Hn), p),
            As.addScaledVector(sa.sub(Wn), p),
            Cs.addScaledVector(oa.sub(qn), p)));
    }
    Hn.add(Ts), Wn.add(As), qn.add(Cs);
  }
  n.isSkinnedMesh &&
    (n.boneTransform(c, Hn), n.boneTransform(u, Wn), n.boneTransform(f, qn));
  const d = rv(n, e, t, i, Hn, Wn, qn, aa);
  if (d) {
    o &&
      (Ls.fromBufferAttribute(o, c),
      Ps.fromBufferAttribute(o, u),
      Rs.fromBufferAttribute(o, f),
      (d.uv = pn.getUV(aa, Hn, Wn, qn, Ls, Ps, Rs, new Ie()))),
      l &&
        (Ls.fromBufferAttribute(l, c),
        Ps.fromBufferAttribute(l, u),
        Rs.fromBufferAttribute(l, f),
        (d.uv2 = pn.getUV(aa, Hn, Wn, qn, Ls, Ps, Rs, new Ie())));
    const g = { a: c, b: u, c: f, normal: new N(), materialIndex: 0 };
    pn.getNormal(Hn, Wn, qn, g.normal), (d.face = g);
  }
  return d;
}
class fs extends xn {
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, a = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      u = [],
      f = [];
    let h = 0,
      d = 0;
    g('z', 'y', 'x', -1, -1, i, t, e, a, s, 0),
      g('z', 'y', 'x', 1, -1, i, t, -e, a, s, 1),
      g('x', 'z', 'y', 1, 1, e, i, t, r, a, 2),
      g('x', 'z', 'y', 1, -1, e, i, -t, r, a, 3),
      g('x', 'y', 'z', 1, -1, e, t, i, r, s, 4),
      g('x', 'y', 'z', -1, -1, e, t, -i, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new ei(c, 3)),
      this.setAttribute('normal', new ei(u, 3)),
      this.setAttribute('uv', new ei(f, 2));
    function g(m, p, _, x, y, b, S, P, B, M, L) {
      const R = b / B,
        Y = S / M,
        de = b / 2,
        G = S / 2,
        z = P / 2,
        te = B + 1,
        ie = M + 1;
      let Z = 0,
        W = 0;
      const U = new N();
      for (let X = 0; X < ie; X++) {
        const ue = X * Y - G;
        for (let oe = 0; oe < te; oe++) {
          const le = oe * R - de;
          (U[m] = le * x),
            (U[p] = ue * y),
            (U[_] = z),
            c.push(U.x, U.y, U.z),
            (U[m] = 0),
            (U[p] = 0),
            (U[_] = P > 0 ? 1 : -1),
            u.push(U.x, U.y, U.z),
            f.push(oe / B),
            f.push(1 - X / M),
            (Z += 1);
        }
      }
      for (let X = 0; X < M; X++)
        for (let ue = 0; ue < B; ue++) {
          const oe = h + ue + te * X,
            le = h + ue + te * (X + 1),
            we = h + (ue + 1) + te * (X + 1),
            V = h + (ue + 1) + te * X;
          l.push(oe, le, V), l.push(le, we, V), (W += 6);
        }
      o.addGroup(d, W, L), (d += W), (h += Z);
    }
  }
  static fromJSON(e) {
    return new fs(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Lr(n) {
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
function Rt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Lr(n[t]);
    for (const r in i) e[r] = i[r];
  }
  return e;
}
function sv(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
const ov = { clone: Lr, merge: Rt };
var av = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  lv = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Fi extends Ir {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = av),
      (this.fragmentShader = lv),
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
      (this.uniforms = Lr(e.uniforms)),
      (this.uniformsGroups = sv(e.uniformsGroups)),
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
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: 't', value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[r] = { type: 'c', value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[r] = { type: 'v2', value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[r] = { type: 'v3', value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[r] = { type: 'v4', value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[r] = { type: 'm3', value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[r] = { type: 'm4', value: a.toArray() })
        : (t.uniforms[r] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const i = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Hh extends Dt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new lt()),
      (this.projectionMatrix = new lt()),
      (this.projectionMatrixInverse = new lt());
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
class Wt extends Hh {
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
    (this.fov = eo * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Kr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return eo * 2 * Math.atan(Math.tan(Kr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, i, r, s, a) {
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
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Kr * 0.5 * this.fov)) / this.zoom,
      i = 2 * t,
      r = this.aspect * i,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * r) / l),
        (t -= (a.offsetY * i) / c),
        (r *= a.width / l),
        (i *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
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
class cv extends Dt {
  constructor(e, t, i) {
    super(), (this.type = 'CubeCamera'), (this.renderTarget = i);
    const r = new Wt(Qi, er, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new N(1, 0, 0)),
      this.add(r);
    const s = new Wt(Qi, er, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new N(-1, 0, 0)),
      this.add(s);
    const a = new Wt(Qi, er, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(new N(0, 1, 0)),
      this.add(a);
    const o = new Wt(Qi, er, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(new N(0, -1, 0)),
      this.add(o);
    const l = new Wt(Qi, er, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new N(0, 0, 1)),
      this.add(l);
    const c = new Wt(Qi, er, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new N(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const i = this.renderTarget,
      [r, s, a, o, l, c] = this.children,
      u = e.getRenderTarget(),
      f = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = Dn), (e.xr.enabled = !1);
    const d = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0),
      e.render(t, r),
      e.setRenderTarget(i, 1),
      e.render(t, s),
      e.setRenderTarget(i, 2),
      e.render(t, a),
      e.setRenderTarget(i, 3),
      e.render(t, o),
      e.setRenderTarget(i, 4),
      e.render(t, l),
      (i.texture.generateMipmaps = d),
      e.setRenderTarget(i, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = f),
      (e.xr.enabled = h),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class Wh extends $t {
  constructor(e, t, i, r, s, a, o, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Tr),
      super(e, t, i, r, s, a, o, l, c, u),
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
class uv extends Di {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      r = [i, i, i, i, i, i];
    (this.texture = new Wh(
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
      r = new fs(5, 5, 5),
      s = new Fi({
        name: 'CubemapFromEquirect',
        uniforms: Lr(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: jt,
        blending: Qn,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Yn(r, s),
      o = t.minFilter;
    return (
      t.minFilter === xo && (t.minFilter = Ht),
      new cv(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, i, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, i, r);
    e.setRenderTarget(s);
  }
}
const la = new N(),
  fv = new N(),
  hv = new qt();
class di {
  constructor(e = new N(1, 0, 0), t = 0) {
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
    const r = la.subVectors(i, t).cross(fv.subVectors(e, t)).normalize();
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
    const i = t || hv.getNormalMatrix(e),
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
const tr = new yo(),
  Fs = new N();
class qh {
  constructor(
    e = new di(),
    t = new di(),
    i = new di(),
    r = new di(),
    s = new di(),
    a = new di()
  ) {
    this.planes = [e, t, i, r, s, a];
  }
  set(e, t, i, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(i),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
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
      a = i[2],
      o = i[3],
      l = i[4],
      c = i[5],
      u = i[6],
      f = i[7],
      h = i[8],
      d = i[9],
      g = i[10],
      m = i[11],
      p = i[12],
      _ = i[13],
      x = i[14],
      y = i[15];
    return (
      t[0].setComponents(o - r, f - l, m - h, y - p).normalize(),
      t[1].setComponents(o + r, f + l, m + h, y + p).normalize(),
      t[2].setComponents(o + s, f + c, m + d, y + _).normalize(),
      t[3].setComponents(o - s, f - c, m - d, y - _).normalize(),
      t[4].setComponents(o - a, f - u, m - g, y - x).normalize(),
      t[5].setComponents(o + a, f + u, m + g, y + x).normalize(),
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
        ((Fs.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Fs.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Fs.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Fs) < 0)
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
function Xh() {
  let n = null,
    e = !1,
    t = null,
    i = null;
  function r(s, a) {
    t(s, a), (i = n.requestAnimationFrame(r));
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
function dv(n, e) {
  const t = e.isWebGL2,
    i = new WeakMap();
  function r(c, u) {
    const f = c.array,
      h = c.usage,
      d = n.createBuffer();
    n.bindBuffer(u, d), n.bufferData(u, f, h), c.onUploadCallback();
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
    n.bindBuffer(f, c),
      d.count === -1
        ? n.bufferSubData(f, 0, h)
        : (t
            ? n.bufferSubData(
                f,
                d.offset * h.BYTES_PER_ELEMENT,
                h,
                d.offset,
                d.count
              )
            : n.bufferSubData(
                f,
                d.offset * h.BYTES_PER_ELEMENT,
                h.subarray(d.offset, d.offset + d.count)
              ),
          (d.count = -1));
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), i.get(c);
  }
  function o(c) {
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
  return { get: a, remove: o, update: l };
}
class El extends xn {
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
      a = t / 2,
      o = Math.floor(i),
      l = Math.floor(r),
      c = o + 1,
      u = l + 1,
      f = e / o,
      h = t / l,
      d = [],
      g = [],
      m = [],
      p = [];
    for (let _ = 0; _ < u; _++) {
      const x = _ * h - a;
      for (let y = 0; y < c; y++) {
        const b = y * f - s;
        g.push(b, -x, 0), m.push(0, 0, 1), p.push(y / o), p.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let x = 0; x < o; x++) {
        const y = x + c * _,
          b = x + c * (_ + 1),
          S = x + 1 + c * (_ + 1),
          P = x + 1 + c * _;
        d.push(y, b, P), d.push(b, S, P);
      }
    this.setIndex(d),
      this.setAttribute('position', new ei(g, 3)),
      this.setAttribute('normal', new ei(m, 3)),
      this.setAttribute('uv', new ei(p, 2));
  }
  static fromJSON(e) {
    return new El(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var pv = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  mv = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  gv = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  _v = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  vv = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  xv = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  yv = 'vec3 transformed = vec3( position );',
  Mv = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bv = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
  Sv = `#ifdef USE_IRIDESCENCE
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
  wv = `#ifdef USE_BUMPMAP
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
  Ev = `#if NUM_CLIPPING_PLANES > 0
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
  Tv = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Av = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Cv = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Lv = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Pv = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Rv = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Dv = `#if defined( USE_COLOR_ALPHA )
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
  Iv = `#define PI 3.141592653589793
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
  Fv = `#ifdef ENVMAP_TYPE_CUBE_UV
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
  Ov = `vec3 transformedNormal = objectNormal;
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
  Nv = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  zv = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Uv = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Bv = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  kv = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  Vv = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Gv = `#ifdef USE_ENVMAP
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
  Hv = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Wv = `#ifdef USE_ENVMAP
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
  qv = `#ifdef USE_ENVMAP
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
  Xv = `#ifdef USE_ENVMAP
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
  jv = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  $v = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Yv = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Zv = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Kv = `#ifdef USE_GRADIENTMAP
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
  Jv = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Qv = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  ex = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  tx = `varying vec3 vViewPosition;
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
  nx = `uniform bool receiveShadow;
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
  ix = `#if defined( USE_ENVMAP )
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
  rx = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  sx = `varying vec3 vViewPosition;
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
  ox = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  ax = `varying vec3 vViewPosition;
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
  lx = `PhysicalMaterial material;
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
  cx = `struct PhysicalMaterial {
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
  ux = `
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
  fx = `#if defined( RE_IndirectDiffuse )
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
  hx = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  dx = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  px = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  mx = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  gx = `#ifdef USE_LOGDEPTHBUF
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
  _x = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  vx = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  xx = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  yx = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Mx = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  bx = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Sx = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  wx = `#ifdef USE_MORPHNORMALS
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
  Ex = `#ifdef USE_MORPHTARGETS
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
  Tx = `#ifdef USE_MORPHTARGETS
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
  Ax = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
  Cx = `#ifdef OBJECTSPACE_NORMALMAP
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
  Lx = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Px = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Rx = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Dx = `#ifdef USE_NORMALMAP
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
  Ix = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Fx = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Ox = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Nx = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  zx = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Ux = `vec3 packNormalToRGB( const in vec3 normal ) {
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
  Bx = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  kx = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Vx = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Gx = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Hx = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Wx = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  qx = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  Xx = `#if NUM_SPOT_LIGHT_COORDS > 0
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
  jx = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
  $x = `float getShadowMask() {
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
  Yx = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Zx = `#ifdef USE_SKINNING
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
  Kx = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Jx = `#ifdef USE_SKINNING
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
  Qx = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  ey = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  ty = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  ny = `#ifndef saturate
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
  iy = `#ifdef USE_TRANSMISSION
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
  ry = `#ifdef USE_TRANSMISSION
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
  sy = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  oy = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  ay = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  ly = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  cy = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  uy = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  fy = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const hy = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  dy = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  py = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  my = `#ifdef ENVMAP_TYPE_CUBE
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
  gy = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  _y = `uniform samplerCube tCube;
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
  vy = `#include <common>
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
  xy = `#if DEPTH_PACKING == 3200
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
  yy = `#define DISTANCE
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
  My = `#define DISTANCE
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
  by = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Sy = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  wy = `uniform float scale;
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
  Ey = `uniform vec3 diffuse;
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
  Ty = `#include <common>
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
  Ay = `uniform vec3 diffuse;
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
  Cy = `#define LAMBERT
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
  Ly = `#define LAMBERT
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
  Py = `#define MATCAP
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
  Ry = `#define MATCAP
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
  Dy = `#define NORMAL
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
  Iy = `#define NORMAL
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
  Fy = `#define PHONG
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
  Oy = `#define PHONG
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
  Ny = `#define STANDARD
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
  zy = `#define STANDARD
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
  Uy = `#define TOON
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
  By = `#define TOON
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
  ky = `uniform float size;
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
  Vy = `uniform vec3 diffuse;
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
  Gy = `#include <common>
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
  Hy = `uniform vec3 color;
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
  Wy = `uniform float rotation;
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
  qy = `uniform vec3 diffuse;
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
    alphamap_fragment: pv,
    alphamap_pars_fragment: mv,
    alphatest_fragment: gv,
    alphatest_pars_fragment: _v,
    aomap_fragment: vv,
    aomap_pars_fragment: xv,
    begin_vertex: yv,
    beginnormal_vertex: Mv,
    bsdfs: bv,
    iridescence_fragment: Sv,
    bumpmap_pars_fragment: wv,
    clipping_planes_fragment: Ev,
    clipping_planes_pars_fragment: Tv,
    clipping_planes_pars_vertex: Av,
    clipping_planes_vertex: Cv,
    color_fragment: Lv,
    color_pars_fragment: Pv,
    color_pars_vertex: Rv,
    color_vertex: Dv,
    common: Iv,
    cube_uv_reflection_fragment: Fv,
    defaultnormal_vertex: Ov,
    displacementmap_pars_vertex: Nv,
    displacementmap_vertex: zv,
    emissivemap_fragment: Uv,
    emissivemap_pars_fragment: Bv,
    encodings_fragment: kv,
    encodings_pars_fragment: Vv,
    envmap_fragment: Gv,
    envmap_common_pars_fragment: Hv,
    envmap_pars_fragment: Wv,
    envmap_pars_vertex: qv,
    envmap_physical_pars_fragment: ix,
    envmap_vertex: Xv,
    fog_vertex: jv,
    fog_pars_vertex: $v,
    fog_fragment: Yv,
    fog_pars_fragment: Zv,
    gradientmap_pars_fragment: Kv,
    lightmap_fragment: Jv,
    lightmap_pars_fragment: Qv,
    lights_lambert_fragment: ex,
    lights_lambert_pars_fragment: tx,
    lights_pars_begin: nx,
    lights_toon_fragment: rx,
    lights_toon_pars_fragment: sx,
    lights_phong_fragment: ox,
    lights_phong_pars_fragment: ax,
    lights_physical_fragment: lx,
    lights_physical_pars_fragment: cx,
    lights_fragment_begin: ux,
    lights_fragment_maps: fx,
    lights_fragment_end: hx,
    logdepthbuf_fragment: dx,
    logdepthbuf_pars_fragment: px,
    logdepthbuf_pars_vertex: mx,
    logdepthbuf_vertex: gx,
    map_fragment: _x,
    map_pars_fragment: vx,
    map_particle_fragment: xx,
    map_particle_pars_fragment: yx,
    metalnessmap_fragment: Mx,
    metalnessmap_pars_fragment: bx,
    morphcolor_vertex: Sx,
    morphnormal_vertex: wx,
    morphtarget_pars_vertex: Ex,
    morphtarget_vertex: Tx,
    normal_fragment_begin: Ax,
    normal_fragment_maps: Cx,
    normal_pars_fragment: Lx,
    normal_pars_vertex: Px,
    normal_vertex: Rx,
    normalmap_pars_fragment: Dx,
    clearcoat_normal_fragment_begin: Ix,
    clearcoat_normal_fragment_maps: Fx,
    clearcoat_pars_fragment: Ox,
    iridescence_pars_fragment: Nx,
    output_fragment: zx,
    packing: Ux,
    premultiplied_alpha_fragment: Bx,
    project_vertex: kx,
    dithering_fragment: Vx,
    dithering_pars_fragment: Gx,
    roughnessmap_fragment: Hx,
    roughnessmap_pars_fragment: Wx,
    shadowmap_pars_fragment: qx,
    shadowmap_pars_vertex: Xx,
    shadowmap_vertex: jx,
    shadowmask_pars_fragment: $x,
    skinbase_vertex: Yx,
    skinning_pars_vertex: Zx,
    skinning_vertex: Kx,
    skinnormal_vertex: Jx,
    specularmap_fragment: Qx,
    specularmap_pars_fragment: ey,
    tonemapping_fragment: ty,
    tonemapping_pars_fragment: ny,
    transmission_fragment: iy,
    transmission_pars_fragment: ry,
    uv_pars_fragment: sy,
    uv_pars_vertex: oy,
    uv_vertex: ay,
    uv2_pars_fragment: ly,
    uv2_pars_vertex: cy,
    uv2_vertex: uy,
    worldpos_vertex: fy,
    background_vert: hy,
    background_frag: dy,
    backgroundCube_vert: py,
    backgroundCube_frag: my,
    cube_vert: gy,
    cube_frag: _y,
    depth_vert: vy,
    depth_frag: xy,
    distanceRGBA_vert: yy,
    distanceRGBA_frag: My,
    equirect_vert: by,
    equirect_frag: Sy,
    linedashed_vert: wy,
    linedashed_frag: Ey,
    meshbasic_vert: Ty,
    meshbasic_frag: Ay,
    meshlambert_vert: Cy,
    meshlambert_frag: Ly,
    meshmatcap_vert: Py,
    meshmatcap_frag: Ry,
    meshnormal_vert: Dy,
    meshnormal_frag: Iy,
    meshphong_vert: Fy,
    meshphong_frag: Oy,
    meshphysical_vert: Ny,
    meshphysical_frag: zy,
    meshtoon_vert: Uy,
    meshtoon_frag: By,
    points_vert: ky,
    points_frag: Vy,
    shadow_vert: Gy,
    shadow_frag: Hy,
    sprite_vert: Wy,
    sprite_frag: qy,
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
      center: { value: new Ie(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new qt() },
    },
  },
  hn = {
    basic: {
      uniforms: Rt([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.fog,
      ]),
      vertexShader: ze.meshbasic_vert,
      fragmentShader: ze.meshbasic_frag,
    },
    lambert: {
      uniforms: Rt([
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
      vertexShader: ze.meshlambert_vert,
      fragmentShader: ze.meshlambert_frag,
    },
    phong: {
      uniforms: Rt([
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
      vertexShader: ze.meshphong_vert,
      fragmentShader: ze.meshphong_frag,
    },
    standard: {
      uniforms: Rt([
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
      vertexShader: ze.meshphysical_vert,
      fragmentShader: ze.meshphysical_frag,
    },
    toon: {
      uniforms: Rt([
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
      vertexShader: ze.meshtoon_vert,
      fragmentShader: ze.meshtoon_frag,
    },
    matcap: {
      uniforms: Rt([
        xe.common,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ze.meshmatcap_vert,
      fragmentShader: ze.meshmatcap_frag,
    },
    points: {
      uniforms: Rt([xe.points, xe.fog]),
      vertexShader: ze.points_vert,
      fragmentShader: ze.points_frag,
    },
    dashed: {
      uniforms: Rt([
        xe.common,
        xe.fog,
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
      uniforms: Rt([xe.common, xe.displacementmap]),
      vertexShader: ze.depth_vert,
      fragmentShader: ze.depth_frag,
    },
    normal: {
      uniforms: Rt([
        xe.common,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ze.meshnormal_vert,
      fragmentShader: ze.meshnormal_frag,
    },
    sprite: {
      uniforms: Rt([xe.sprite, xe.fog]),
      vertexShader: ze.sprite_vert,
      fragmentShader: ze.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new qt() }, t2D: { value: null } },
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
      uniforms: Rt([
        xe.common,
        xe.displacementmap,
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
      uniforms: Rt([
        xe.lights,
        xe.fog,
        { color: { value: new Qe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ze.shadow_vert,
      fragmentShader: ze.shadow_frag,
    },
  };
hn.physical = {
  uniforms: Rt([
    hn.standard.uniforms,
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
      sheenColor: { value: new Qe(0) },
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
      attenuationColor: { value: new Qe(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Qe(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: ze.meshphysical_vert,
  fragmentShader: ze.meshphysical_frag,
};
function Xy(n, e, t, i, r, s, a) {
  const o = new Qe(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    h = 0,
    d = null;
  function g(p, _) {
    let x = !1,
      y = _.isScene === !0 ? _.background : null;
    y && y.isTexture && (y = (_.backgroundBlurriness > 0 ? t : e).get(y));
    const b = n.xr,
      S = b.getSession && b.getSession();
    S && S.environmentBlendMode === 'additive' && (y = null),
      y === null ? m(o, l) : y && y.isColor && (m(y, 1), (x = !0)),
      (n.autoClear || x) &&
        n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil),
      y && (y.isCubeTexture || y.mapping === vo)
        ? (u === void 0 &&
            ((u = new Yn(
              new fs(1, 1, 1),
              new Fi({
                name: 'BackgroundCubeMaterial',
                uniforms: Lr(hn.backgroundCube.uniforms),
                vertexShader: hn.backgroundCube.vertexShader,
                fragmentShader: hn.backgroundCube.fragmentShader,
                side: jt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute('normal'),
            u.geometry.deleteAttribute('uv'),
            (u.onBeforeRender = function (P, B, M) {
              this.matrixWorld.copyPosition(M.matrixWorld);
            }),
            Object.defineProperty(u.material, 'envMap', {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          (u.material.uniforms.envMap.value = y),
          (u.material.uniforms.flipEnvMap.value =
            y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            _.backgroundBlurriness),
          (f !== y || h !== y.version || d !== n.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (f = y),
            (h = y.version),
            (d = n.toneMapping)),
          u.layers.enableAll(),
          p.unshift(u, u.geometry, u.material, 0, 0, null))
        : y &&
          y.isTexture &&
          (c === void 0 &&
            ((c = new Yn(
              new El(2, 2),
              new Fi({
                name: 'BackgroundMaterial',
                uniforms: Lr(hn.background.uniforms),
                vertexShader: hn.background.vertexShader,
                fragmentShader: hn.background.fragmentShader,
                side: Er,
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
          (c.material.uniforms.t2D.value = y),
          y.matrixAutoUpdate === !0 && y.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(y.matrix),
          (f !== y || h !== y.version || d !== n.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = y),
            (h = y.version),
            (d = n.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(p, _) {
    i.buffers.color.setClear(p.r, p.g, p.b, _, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, _ = 1) {
      o.set(p), (l = _), m(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      (l = p), m(o, l);
    },
    render: g,
  };
}
function jy(n, e, t, i) {
  const r = n.getParameter(34921),
    s = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    a = i.isWebGL2 || s !== null,
    o = {},
    l = p(null);
  let c = l,
    u = !1;
  function f(z, te, ie, Z, W) {
    let U = !1;
    if (a) {
      const X = m(Z, ie, te);
      c !== X && ((c = X), d(c.object)),
        (U = _(z, Z, ie, W)),
        U && x(z, Z, ie, W);
    } else {
      const X = te.wireframe === !0;
      (c.geometry !== Z.id || c.program !== ie.id || c.wireframe !== X) &&
        ((c.geometry = Z.id), (c.program = ie.id), (c.wireframe = X), (U = !0));
    }
    W !== null && t.update(W, 34963),
      (U || u) &&
        ((u = !1),
        M(z, te, ie, Z),
        W !== null && n.bindBuffer(34963, t.get(W).buffer));
  }
  function h() {
    return i.isWebGL2 ? n.createVertexArray() : s.createVertexArrayOES();
  }
  function d(z) {
    return i.isWebGL2 ? n.bindVertexArray(z) : s.bindVertexArrayOES(z);
  }
  function g(z) {
    return i.isWebGL2 ? n.deleteVertexArray(z) : s.deleteVertexArrayOES(z);
  }
  function m(z, te, ie) {
    const Z = ie.wireframe === !0;
    let W = o[z.id];
    W === void 0 && ((W = {}), (o[z.id] = W));
    let U = W[te.id];
    U === void 0 && ((U = {}), (W[te.id] = U));
    let X = U[Z];
    return X === void 0 && ((X = p(h())), (U[Z] = X)), X;
  }
  function p(z) {
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
      object: z,
      attributes: {},
      index: null,
    };
  }
  function _(z, te, ie, Z) {
    const W = c.attributes,
      U = te.attributes;
    let X = 0;
    const ue = ie.getAttributes();
    for (const oe in ue)
      if (ue[oe].location >= 0) {
        const we = W[oe];
        let V = U[oe];
        if (
          (V === void 0 &&
            (oe === 'instanceMatrix' &&
              z.instanceMatrix &&
              (V = z.instanceMatrix),
            oe === 'instanceColor' && z.instanceColor && (V = z.instanceColor)),
          we === void 0 || we.attribute !== V || (V && we.data !== V.data))
        )
          return !0;
        X++;
      }
    return c.attributesNum !== X || c.index !== Z;
  }
  function x(z, te, ie, Z) {
    const W = {},
      U = te.attributes;
    let X = 0;
    const ue = ie.getAttributes();
    for (const oe in ue)
      if (ue[oe].location >= 0) {
        let we = U[oe];
        we === void 0 &&
          (oe === 'instanceMatrix' &&
            z.instanceMatrix &&
            (we = z.instanceMatrix),
          oe === 'instanceColor' && z.instanceColor && (we = z.instanceColor));
        const V = {};
        (V.attribute = we),
          we && we.data && (V.data = we.data),
          (W[oe] = V),
          X++;
      }
    (c.attributes = W), (c.attributesNum = X), (c.index = Z);
  }
  function y() {
    const z = c.newAttributes;
    for (let te = 0, ie = z.length; te < ie; te++) z[te] = 0;
  }
  function b(z) {
    S(z, 0);
  }
  function S(z, te) {
    const ie = c.newAttributes,
      Z = c.enabledAttributes,
      W = c.attributeDivisors;
    (ie[z] = 1),
      Z[z] === 0 && (n.enableVertexAttribArray(z), (Z[z] = 1)),
      W[z] !== te &&
        ((i.isWebGL2 ? n : e.get('ANGLE_instanced_arrays'))[
          i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](z, te),
        (W[z] = te));
  }
  function P() {
    const z = c.newAttributes,
      te = c.enabledAttributes;
    for (let ie = 0, Z = te.length; ie < Z; ie++)
      te[ie] !== z[ie] && (n.disableVertexAttribArray(ie), (te[ie] = 0));
  }
  function B(z, te, ie, Z, W, U) {
    i.isWebGL2 === !0 && (ie === 5124 || ie === 5125)
      ? n.vertexAttribIPointer(z, te, ie, W, U)
      : n.vertexAttribPointer(z, te, ie, Z, W, U);
  }
  function M(z, te, ie, Z) {
    if (
      i.isWebGL2 === !1 &&
      (z.isInstancedMesh || Z.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    y();
    const W = Z.attributes,
      U = ie.getAttributes(),
      X = te.defaultAttributeValues;
    for (const ue in U) {
      const oe = U[ue];
      if (oe.location >= 0) {
        let le = W[ue];
        if (
          (le === void 0 &&
            (ue === 'instanceMatrix' &&
              z.instanceMatrix &&
              (le = z.instanceMatrix),
            ue === 'instanceColor' &&
              z.instanceColor &&
              (le = z.instanceColor)),
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
                S(oe.location + A, _e.meshPerAttribute);
              z.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = _e.meshPerAttribute * _e.count);
            } else for (let A = 0; A < oe.locationSize; A++) b(oe.location + A);
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
                S(oe.location + _e, le.meshPerAttribute);
              z.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let _e = 0; _e < oe.locationSize; _e++) b(oe.location + _e);
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
    for (const z in o) {
      const te = o[z];
      for (const ie in te) {
        const Z = te[ie];
        for (const W in Z) g(Z[W].object), delete Z[W];
        delete te[ie];
      }
      delete o[z];
    }
  }
  function R(z) {
    if (o[z.id] === void 0) return;
    const te = o[z.id];
    for (const ie in te) {
      const Z = te[ie];
      for (const W in Z) g(Z[W].object), delete Z[W];
      delete te[ie];
    }
    delete o[z.id];
  }
  function Y(z) {
    for (const te in o) {
      const ie = o[te];
      if (ie[z.id] === void 0) continue;
      const Z = ie[z.id];
      for (const W in Z) g(Z[W].object), delete Z[W];
      delete ie[z.id];
    }
  }
  function de() {
    G(), (u = !0), c !== l && ((c = l), d(c.object));
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
    initAttributes: y,
    enableAttribute: b,
    disableUnusedAttributes: P,
  };
}
function $y(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, u) {
    n.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, f) {
    if (f === 0) return;
    let h, d;
    if (r) (h = n), (d = 'drawArraysInstanced');
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
  (this.setMode = a), (this.render = o), (this.renderInstances = l);
}
function Yy(n, e, t) {
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
  const a =
    (typeof WebGL2RenderingContext < 'u' &&
      n instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < 'u' &&
      n instanceof WebGL2ComputeRenderingContext);
  let o = t.precision !== void 0 ? t.precision : 'highp';
  const l = s(o);
  l !== o &&
    (console.warn(
      'THREE.WebGLRenderer:',
      o,
      'not supported, using',
      l,
      'instead.'
    ),
    (o = l));
  const c = a || e.has('WEBGL_draw_buffers'),
    u = t.logarithmicDepthBuffer === !0,
    f = n.getParameter(34930),
    h = n.getParameter(35660),
    d = n.getParameter(3379),
    g = n.getParameter(34076),
    m = n.getParameter(34921),
    p = n.getParameter(36347),
    _ = n.getParameter(36348),
    x = n.getParameter(36349),
    y = h > 0,
    b = a || e.has('OES_texture_float'),
    S = y && b,
    P = a ? n.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: h,
    maxTextureSize: d,
    maxCubemapSize: g,
    maxAttributes: m,
    maxVertexUniforms: p,
    maxVaryings: _,
    maxFragmentUniforms: x,
    vertexTextures: y,
    floatFragmentTextures: b,
    floatVertexTextures: S,
    maxSamples: P,
  };
}
function Zy(n) {
  const e = this;
  let t = null,
    i = 0,
    r = !1,
    s = !1;
  const a = new di(),
    o = new qt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h, d) {
      const g = f.length !== 0 || h || i !== 0 || r;
      return (r = h), (t = u(f, d, 0)), (i = f.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (f, h, d) {
      const g = f.clippingPlanes,
        m = f.clipIntersection,
        p = f.clipShadows,
        _ = n.get(f);
      if (!r || g === null || g.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const x = s ? 0 : i,
          y = x * 4;
        let b = _.clippingState || null;
        (l.value = b), (b = u(g, h, y, d));
        for (let S = 0; S !== y; ++S) b[S] = t[S];
        (_.clippingState = b),
          (this.numIntersection = m ? this.numPlanes : 0),
          (this.numPlanes += x);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function u(f, h, d, g) {
    const m = f !== null ? f.length : 0;
    let p = null;
    if (m !== 0) {
      if (((p = l.value), g !== !0 || p === null)) {
        const _ = d + m * 4,
          x = h.matrixWorldInverse;
        o.getNormalMatrix(x),
          (p === null || p.length < _) && (p = new Float32Array(_));
        for (let y = 0, b = d; y !== m; ++y, b += 4)
          a.copy(f[y]).applyMatrix4(x, o),
            a.normal.toArray(p, b),
            (p[b + 3] = a.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = m), (e.numIntersection = 0), p;
  }
}
function Ky(n) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Na ? (a.mapping = Tr) : o === za && (a.mapping = Ar), a;
  }
  function i(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Na || o === za)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new uv(l.height / 2);
            return (
              c.fromEquirectangularTexture(n, a),
              e.set(a, c),
              a.addEventListener('dispose', r),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener('dispose', r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: i, dispose: s };
}
class Jy extends Hh {
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, a = 2e3) {
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
      (this.far = a),
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
  setViewOffset(e, t, i, r, s, a) {
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
      (this.view.height = a),
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
      a = i + e,
      o = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far),
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
const ur = 4,
  _u = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  vi = 20,
  ca = new Jy(),
  vu = new Qe();
let ua = null;
const pi = (1 + Math.sqrt(5)) / 2,
  nr = 1 / pi,
  xu = [
    new N(1, 1, 1),
    new N(-1, 1, 1),
    new N(1, 1, -1),
    new N(-1, 1, -1),
    new N(0, pi, nr),
    new N(0, pi, -nr),
    new N(nr, 0, pi),
    new N(-nr, 0, pi),
    new N(pi, nr, 0),
    new N(-pi, nr, 0),
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
      Os(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Tr || e.mapping === Ar
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
        magFilter: Ht,
        minFilter: Ht,
        generateMipmaps: !1,
        type: os,
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
      } = Qy(s)),
        (this._blurMaterial = eM(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Yn(this._lodPlanes[0], e);
    this._renderer.compile(t, ca);
  }
  _sceneToCubeUV(e, t, i, r) {
    const o = new Wt(90, 1, t, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(vu), (u.toneMapping = Dn), (u.autoClear = !1);
    const d = new kh({
        name: 'PMREM.Background',
        side: jt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Yn(new fs(), d);
    let m = !1;
    const p = e.background;
    p
      ? p.isColor && (d.color.copy(p), (e.background = null), (m = !0))
      : (d.color.copy(vu), (m = !0));
    for (let _ = 0; _ < 6; _++) {
      const x = _ % 3;
      x === 0
        ? (o.up.set(0, l[_], 0), o.lookAt(c[_], 0, 0))
        : x === 1
        ? (o.up.set(0, 0, l[_]), o.lookAt(0, c[_], 0))
        : (o.up.set(0, l[_], 0), o.lookAt(0, 0, c[_]));
      const y = this._cubeSize;
      Os(r, x * y, _ > 2 ? y : 0, y, y),
        u.setRenderTarget(r),
        m && u.render(g, o),
        u.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = h),
      (u.autoClear = f),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      r = e.mapping === Tr || e.mapping === Ar;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Su()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = bu());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new Yn(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Os(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(a, ca);
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
        a = xu[(r - 1) % xu.length];
      this._blur(e, r - 1, r, s, a);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, i, r, 'latitudinal', s),
      this._halfBlur(a, e, i, i, r, 'longitudinal', s);
  }
  _halfBlur(e, t, i, r, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== 'latitudinal' &&
      a !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!'
      );
    const u = 3,
      f = new Yn(this._lodPlanes[r], c),
      h = c.uniforms,
      d = this._sizeLods[i] - 1,
      g = isFinite(s) ? Math.PI / (2 * d) : (2 * Math.PI) / (2 * vi - 1),
      m = s / g,
      p = isFinite(s) ? 1 + Math.floor(u * m) : vi;
    p > vi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`
      );
    const _ = [];
    let x = 0;
    for (let B = 0; B < vi; ++B) {
      const M = B / m,
        L = Math.exp((-M * M) / 2);
      _.push(L), B === 0 ? (x += L) : B < p && (x += 2 * L);
    }
    for (let B = 0; B < _.length; B++) _[B] = _[B] / x;
    (h.envMap.value = e.texture),
      (h.samples.value = p),
      (h.weights.value = _),
      (h.latitudinal.value = a === 'latitudinal'),
      o && (h.poleAxis.value = o);
    const { _lodMax: y } = this;
    (h.dTheta.value = g), (h.mipInt.value = y - i);
    const b = this._sizeLods[r],
      S = 3 * b * (r > y - ur ? r - y + ur : 0),
      P = 4 * (this._cubeSize - b);
    Os(t, S, P, 3 * b, 2 * b), l.setRenderTarget(t), l.render(f, ca);
  }
}
function Qy(n) {
  const e = [],
    t = [],
    i = [];
  let r = n;
  const s = n - ur + 1 + _u.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > n - ur ? (l = _u[a - n + ur - 1]) : a === 0 && (l = 0), i.push(l);
    const c = 1 / (o - 2),
      u = -c,
      f = 1 + c,
      h = [u, u, f, u, f, f, u, u, f, f, u, f],
      d = 6,
      g = 6,
      m = 3,
      p = 2,
      _ = 1,
      x = new Float32Array(m * g * d),
      y = new Float32Array(p * g * d),
      b = new Float32Array(_ * g * d);
    for (let P = 0; P < d; P++) {
      const B = ((P % 3) * 2) / 3 - 1,
        M = P > 2 ? 0 : -1,
        L = [
          B,
          M,
          0,
          B + 2 / 3,
          M,
          0,
          B + 2 / 3,
          M + 1,
          0,
          B,
          M,
          0,
          B + 2 / 3,
          M + 1,
          0,
          B,
          M + 1,
          0,
        ];
      x.set(L, m * g * P), y.set(h, p * g * P);
      const R = [P, P, P, P, P, P];
      b.set(R, _ * g * P);
    }
    const S = new xn();
    S.setAttribute('position', new on(x, m)),
      S.setAttribute('uv', new on(y, p)),
      S.setAttribute('faceIndex', new on(b, _)),
      e.push(S),
      r > ur && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function Mu(n, e, t) {
  const i = new Di(n, e, t);
  return (
    (i.texture.mapping = vo),
    (i.texture.name = 'PMREM.cubeUv'),
    (i.scissorTest = !0),
    i
  );
}
function Os(n, e, t, i, r) {
  n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r);
}
function eM(n, e, t) {
  const i = new Float32Array(vi),
    r = new N(0, 1, 0);
  return new Fi({
    name: 'SphericalGaussianBlur',
    defines: {
      n: vi,
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
    vertexShader: Tl(),
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
    blending: Qn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function bu() {
  return new Fi({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: Tl(),
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
    blending: Qn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Su() {
  return new Fi({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Tl(),
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
    blending: Qn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Tl() {
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
function tM(n) {
  let e = new WeakMap(),
    t = null;
  function i(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Na || l === za,
        u = l === Tr || l === Ar;
      if (c || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let f = e.get(o);
          return (
            t === null && (t = new yu(n)),
            (f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f)),
            e.set(o, f),
            f.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const f = o.image;
            if ((c && f && f.height > 0) || (u && f && r(f))) {
              t === null && (t = new yu(n));
              const h = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, h), o.addEventListener('dispose', s), h.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener('dispose', s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: i, dispose: a };
}
function nM(n) {
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
function iM(n, e, t, i) {
  const r = {},
    s = new WeakMap();
  function a(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes) e.remove(h.attributes[g]);
    h.removeEventListener('dispose', a), delete r[h.id];
    const d = s.get(h);
    d && (e.remove(d), s.delete(h)),
      i.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(f, h) {
    return (
      r[h.id] === !0 ||
        (h.addEventListener('dispose', a),
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
      const m = d[g];
      for (let p = 0, _ = m.length; p < _; p++) e.update(m[p], 34962);
    }
  }
  function c(f) {
    const h = [],
      d = f.index,
      g = f.attributes.position;
    let m = 0;
    if (d !== null) {
      const x = d.array;
      m = d.version;
      for (let y = 0, b = x.length; y < b; y += 3) {
        const S = x[y + 0],
          P = x[y + 1],
          B = x[y + 2];
        h.push(S, P, P, B, B, S);
      }
    } else {
      const x = g.array;
      m = g.version;
      for (let y = 0, b = x.length / 3 - 1; y < b; y += 3) {
        const S = y + 0,
          P = y + 1,
          B = y + 2;
        h.push(S, P, P, B, B, S);
      }
    }
    const p = new (Ih(h) ? Gh : Vh)(h, 1);
    p.version = m;
    const _ = s.get(f);
    _ && e.remove(_), s.set(f, p);
  }
  function u(f) {
    const h = s.get(f);
    if (h) {
      const d = f.index;
      d !== null && h.version < d.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function rM(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function a(h) {
    s = h;
  }
  let o, l;
  function c(h) {
    (o = h.type), (l = h.bytesPerElement);
  }
  function u(h, d) {
    n.drawElements(s, d, o, h * l), t.update(d, s, 1);
  }
  function f(h, d, g) {
    if (g === 0) return;
    let m, p;
    if (r) (m = n), (p = 'drawElementsInstanced');
    else if (
      ((m = e.get('ANGLE_instanced_arrays')),
      (p = 'drawElementsInstancedANGLE'),
      m === null)
    ) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    m[p](s, d, o, h * l, g), t.update(d, s, g);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = f);
}
function sM(n) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, a, o) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', a);
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
function oM(n, e) {
  return n[0] - e[0];
}
function aM(n, e) {
  return Math.abs(e[1]) - Math.abs(n[1]);
}
function lM(n, e, t) {
  const i = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    a = new Mt(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, u, f, h) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        p = m !== void 0 ? m.length : 0;
      let _ = s.get(u);
      if (_ === void 0 || _.count !== p) {
        let ie = function () {
          z.dispose(), s.delete(u), u.removeEventListener('dispose', ie);
        };
        var g = ie;
        _ !== void 0 && _.texture.dispose();
        const b = u.morphAttributes.position !== void 0,
          S = u.morphAttributes.normal !== void 0,
          P = u.morphAttributes.color !== void 0,
          B = u.morphAttributes.position || [],
          M = u.morphAttributes.normal || [],
          L = u.morphAttributes.color || [];
        let R = 0;
        b === !0 && (R = 1), S === !0 && (R = 2), P === !0 && (R = 3);
        let Y = u.attributes.position.count * R,
          de = 1;
        Y > e.maxTextureSize &&
          ((de = Math.ceil(Y / e.maxTextureSize)), (Y = e.maxTextureSize));
        const G = new Float32Array(Y * de * 4 * p),
          z = new zh(G, Y, de, p);
        (z.type = Mi), (z.needsUpdate = !0);
        const te = R * 4;
        for (let Z = 0; Z < p; Z++) {
          const W = B[Z],
            U = M[Z],
            X = L[Z],
            ue = Y * de * 4 * Z;
          for (let oe = 0; oe < W.count; oe++) {
            const le = oe * te;
            b === !0 &&
              (a.fromBufferAttribute(W, oe),
              (G[ue + le + 0] = a.x),
              (G[ue + le + 1] = a.y),
              (G[ue + le + 2] = a.z),
              (G[ue + le + 3] = 0)),
              S === !0 &&
                (a.fromBufferAttribute(U, oe),
                (G[ue + le + 4] = a.x),
                (G[ue + le + 5] = a.y),
                (G[ue + le + 6] = a.z),
                (G[ue + le + 7] = 0)),
              P === !0 &&
                (a.fromBufferAttribute(X, oe),
                (G[ue + le + 8] = a.x),
                (G[ue + le + 9] = a.y),
                (G[ue + le + 10] = a.z),
                (G[ue + le + 11] = X.itemSize === 4 ? a.w : 1));
          }
        }
        (_ = { count: p, texture: z, size: new Ie(Y, de) }),
          s.set(u, _),
          u.addEventListener('dispose', ie);
      }
      let x = 0;
      for (let b = 0; b < d.length; b++) x += d[b];
      const y = u.morphTargetsRelative ? 1 : 1 - x;
      h.getUniforms().setValue(n, 'morphTargetBaseInfluence', y),
        h.getUniforms().setValue(n, 'morphTargetInfluences', d),
        h.getUniforms().setValue(n, 'morphTargetsTexture', _.texture, t),
        h.getUniforms().setValue(n, 'morphTargetsTextureSize', _.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let p = i[u.id];
      if (p === void 0 || p.length !== m) {
        p = [];
        for (let S = 0; S < m; S++) p[S] = [S, 0];
        i[u.id] = p;
      }
      for (let S = 0; S < m; S++) {
        const P = p[S];
        (P[0] = S), (P[1] = d[S]);
      }
      p.sort(aM);
      for (let S = 0; S < 8; S++)
        S < m && p[S][1]
          ? ((o[S][0] = p[S][0]), (o[S][1] = p[S][1]))
          : ((o[S][0] = Number.MAX_SAFE_INTEGER), (o[S][1] = 0));
      o.sort(oM);
      const _ = u.morphAttributes.position,
        x = u.morphAttributes.normal;
      let y = 0;
      for (let S = 0; S < 8; S++) {
        const P = o[S],
          B = P[0],
          M = P[1];
        B !== Number.MAX_SAFE_INTEGER && M
          ? (_ &&
              u.getAttribute('morphTarget' + S) !== _[B] &&
              u.setAttribute('morphTarget' + S, _[B]),
            x &&
              u.getAttribute('morphNormal' + S) !== x[B] &&
              u.setAttribute('morphNormal' + S, x[B]),
            (r[S] = M),
            (y += M))
          : (_ &&
              u.hasAttribute('morphTarget' + S) === !0 &&
              u.deleteAttribute('morphTarget' + S),
            x &&
              u.hasAttribute('morphNormal' + S) === !0 &&
              u.deleteAttribute('morphNormal' + S),
            (r[S] = 0));
      }
      const b = u.morphTargetsRelative ? 1 : 1 - y;
      h.getUniforms().setValue(n, 'morphTargetBaseInfluence', b),
        h.getUniforms().setValue(n, 'morphTargetInfluences', r);
    }
  }
  return { update: l };
}
function cM(n, e, t, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
      u = l.geometry,
      f = e.get(l, u);
    return (
      r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', o) === !1 &&
          l.addEventListener('dispose', o),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      f
    );
  }
  function a() {
    r = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener('dispose', o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const jh = new $t(),
  $h = new zh(),
  Yh = new $0(),
  Zh = new Wh(),
  wu = [],
  Eu = [],
  Tu = new Float32Array(16),
  Au = new Float32Array(9),
  Cu = new Float32Array(4);
function Fr(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = e * t;
  let s = wu[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (wu[r] = s)), e !== 0)) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), n[a].toArray(s, o);
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
function Mo(n, e) {
  let t = Eu[e];
  t === void 0 && ((t = new Int32Array(e)), (Eu[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function uM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), (t[0] = e));
}
function fM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    n.uniform2fv(this.addr, e), dt(t, e);
  }
}
function hM(n, e) {
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
function dM(n, e) {
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
function pM(n, e) {
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
function mM(n, e) {
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
function gM(n, e) {
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
function _M(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), (t[0] = e));
}
function vM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    n.uniform2iv(this.addr, e), dt(t, e);
  }
}
function xM(n, e) {
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
function yM(n, e) {
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
function MM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), (t[0] = e));
}
function bM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    n.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function SM(n, e) {
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
function wM(n, e) {
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
function EM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2D(e || jh, r);
}
function TM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture3D(e || Yh, r);
}
function AM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTextureCube(e || Zh, r);
}
function CM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2DArray(e || $h, r);
}
function LM(n) {
  switch (n) {
    case 5126:
      return uM;
    case 35664:
      return fM;
    case 35665:
      return hM;
    case 35666:
      return dM;
    case 35674:
      return pM;
    case 35675:
      return mM;
    case 35676:
      return gM;
    case 5124:
    case 35670:
      return _M;
    case 35667:
    case 35671:
      return vM;
    case 35668:
    case 35672:
      return xM;
    case 35669:
    case 35673:
      return yM;
    case 5125:
      return MM;
    case 36294:
      return bM;
    case 36295:
      return SM;
    case 36296:
      return wM;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return EM;
    case 35679:
    case 36299:
    case 36307:
      return TM;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return AM;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return CM;
  }
}
function PM(n, e) {
  n.uniform1fv(this.addr, e);
}
function RM(n, e) {
  const t = Fr(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function DM(n, e) {
  const t = Fr(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function IM(n, e) {
  const t = Fr(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function FM(n, e) {
  const t = Fr(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function OM(n, e) {
  const t = Fr(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function NM(n, e) {
  const t = Fr(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function zM(n, e) {
  n.uniform1iv(this.addr, e);
}
function UM(n, e) {
  n.uniform2iv(this.addr, e);
}
function BM(n, e) {
  n.uniform3iv(this.addr, e);
}
function kM(n, e) {
  n.uniform4iv(this.addr, e);
}
function VM(n, e) {
  n.uniform1uiv(this.addr, e);
}
function GM(n, e) {
  n.uniform2uiv(this.addr, e);
}
function HM(n, e) {
  n.uniform3uiv(this.addr, e);
}
function WM(n, e) {
  n.uniform4uiv(this.addr, e);
}
function qM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Mo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || jh, s[a]);
}
function XM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Mo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || Yh, s[a]);
}
function jM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Mo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || Zh, s[a]);
}
function $M(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Mo(t, r);
  ht(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || $h, s[a]);
}
function YM(n) {
  switch (n) {
    case 5126:
      return PM;
    case 35664:
      return RM;
    case 35665:
      return DM;
    case 35666:
      return IM;
    case 35674:
      return FM;
    case 35675:
      return OM;
    case 35676:
      return NM;
    case 5124:
    case 35670:
      return zM;
    case 35667:
    case 35671:
      return UM;
    case 35668:
    case 35672:
      return BM;
    case 35669:
    case 35673:
      return kM;
    case 5125:
      return VM;
    case 36294:
      return GM;
    case 36295:
      return HM;
    case 36296:
      return WM;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return qM;
    case 35679:
    case 36299:
    case 36307:
      return XM;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return jM;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $M;
  }
}
class ZM {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.setValue = LM(t.type));
  }
}
class KM {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = YM(t.type));
  }
}
class JM {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], i);
    }
  }
}
const fa = /(\w+)(\])?(\[|\.)?/g;
function Lu(n, e) {
  n.seq.push(e), (n.map[e.id] = e);
}
function QM(n, e, t) {
  const i = n.name,
    r = i.length;
  for (fa.lastIndex = 0; ; ) {
    const s = fa.exec(i),
      a = fa.lastIndex;
    let o = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === '[' && a + 2 === r))) {
      Lu(t, c === void 0 ? new ZM(o, n, e) : new KM(o, n, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && ((f = new JM(o)), Lu(t, f)), (t = f);
    }
  }
}
class Xs {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(t, 35718);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r),
        a = e.getUniformLocation(t, s.name);
      QM(s, a, this);
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
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = i[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function Pu(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
let eb = 0;
function tb(n, e) {
  const t = n.split(`
`),
    i = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === e ? '>' : ' '} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
function nb(n) {
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
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      tb(n.getShaderSource(e), a)
    );
  } else return r;
}
function ib(n, e) {
  const t = nb(e);
  return 'vec4 ' + n + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function rb(n, e) {
  let t;
  switch (e) {
    case a0:
      t = 'Linear';
      break;
    case l0:
      t = 'Reinhard';
      break;
    case c0:
      t = 'OptimizedCineon';
      break;
    case u0:
      t = 'ACESFilmic';
      break;
    case f0:
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
function sb(n) {
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
function ob(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push('#define ' + t + ' ' + i);
  }
  return e.join(`
`);
}
function ab(n, e) {
  const t = {},
    i = n.getProgramParameter(e, 35721);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    s.type === 35674 && (o = 2),
      s.type === 35675 && (o = 3),
      s.type === 35676 && (o = 4),
      (t[a] = {
        type: s.type,
        location: n.getAttribLocation(e, a),
        locationSize: o,
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
const lb = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ha(n) {
  return n.replace(lb, cb);
}
function cb(n, e) {
  const t = ze[e];
  if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
  return Ha(t);
}
const ub =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Fu(n) {
  return n.replace(ub, fb);
}
function fb(n, e, t, i) {
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
function hb(n) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    n.shadowMapType === Ah
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : n.shadowMapType === B_
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : n.shadowMapType === qr && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function db(n) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (n.envMap)
    switch (n.envMapMode) {
      case Tr:
      case Ar:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case vo:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function pb(n) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (n.envMap)
    switch (n.envMapMode) {
      case Ar:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function mb(n) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (n.envMap)
    switch (n.combine) {
      case Ph:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case s0:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case o0:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function gb(n) {
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
function _b(n, e, t, i) {
  const r = n.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = hb(t),
    c = db(t),
    u = pb(t),
    f = mb(t),
    h = gb(t),
    d = t.isWebGL2 ? '' : sb(t),
    g = ob(s),
    m = r.createProgram();
  let p,
    _,
    x = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((p = [g].filter(Xr).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (_ = [d, g].filter(Xr).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((p = [
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
        d,
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
        t.toneMapping !== Dn ? ze.tonemapping_pars_fragment : '',
        t.toneMapping !== Dn ? rb('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        ze.encodings_pars_fragment,
        ib('linearToOutputTexel', t.outputEncoding),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`,
      ].filter(Xr).join(`
`))),
    (a = Ha(a)),
    (a = Du(a, t)),
    (a = Iu(a, t)),
    (o = Ha(o)),
    (o = Du(o, t)),
    (o = Iu(o, t)),
    (a = Fu(a)),
    (o = Fu(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((x = `#version 300 es
`),
      (p =
        [
          'precision mediump sampler2DArray;',
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        p),
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
  const y = x + p + a,
    b = x + _ + o,
    S = Pu(r, 35633, y),
    P = Pu(r, 35632, b);
  if (
    (r.attachShader(m, S),
    r.attachShader(m, P),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(m, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(m, 0, 'position'),
    r.linkProgram(m),
    n.debug.checkShaderErrors)
  ) {
    const L = r.getProgramInfoLog(m).trim(),
      R = r.getShaderInfoLog(S).trim(),
      Y = r.getShaderInfoLog(P).trim();
    let de = !0,
      G = !0;
    if (r.getProgramParameter(m, 35714) === !1) {
      de = !1;
      const z = Ru(r, S, 'vertex'),
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
          z +
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
        vertexShader: { log: R, prefix: p },
        fragmentShader: { log: Y, prefix: _ },
      });
  }
  r.deleteShader(S), r.deleteShader(P);
  let B;
  this.getUniforms = function () {
    return B === void 0 && (B = new Xs(r, m)), B;
  };
  let M;
  return (
    (this.getAttributes = function () {
      return M === void 0 && (M = ab(r, m)), M;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = eb++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = S),
    (this.fragmentShader = P),
    this
  );
}
let vb = 0;
class xb {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(i),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
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
    return i === void 0 && ((i = new yb(e)), t.set(e, i)), i;
  }
}
class yb {
  constructor(e) {
    (this.id = vb++), (this.code = e), (this.usedTimes = 0);
  }
}
function Mb(n, e, t, i, r, s, a) {
  const o = new Bh(),
    l = new xb(),
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
  function m(M, L, R, Y, de) {
    const G = Y.fog,
      z = de.geometry,
      te = M.isMeshStandardMaterial ? Y.environment : null,
      ie = (M.isMeshStandardMaterial ? t : e).get(M.envMap || te),
      Z = !!ie && ie.mapping === vo ? ie.image.height : null,
      W = g[M.type];
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
    const U =
        z.morphAttributes.position ||
        z.morphAttributes.normal ||
        z.morphAttributes.color,
      X = U !== void 0 ? U.length : 0;
    let ue = 0;
    z.morphAttributes.position !== void 0 && (ue = 1),
      z.morphAttributes.normal !== void 0 && (ue = 2),
      z.morphAttributes.color !== void 0 && (ue = 3);
    let oe, le, we, V;
    if (W) {
      const Ee = hn[W];
      (oe = Ee.vertexShader), (le = Ee.fragmentShader);
    } else
      (oe = M.vertexShader),
        (le = M.fragmentShader),
        l.update(M),
        (we = l.getVertexShaderID(M)),
        (V = l.getFragmentShaderID(M));
    const I = n.getRenderTarget(),
      ae = M.alphaTest > 0,
      ce = M.clearcoat > 0,
      ve = M.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: W,
      shaderName: M.type,
      vertexShader: oe,
      fragmentShader: le,
      defines: M.defines,
      customVertexShaderID: we,
      customFragmentShaderID: V,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: d,
      instancing: de.isInstancedMesh === !0,
      instancingColor: de.isInstancedMesh === !0 && de.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding:
        I === null
          ? n.outputEncoding
          : I.isXRRenderTarget === !0
          ? I.texture.encoding
          : Ri,
      map: !!M.map,
      matcap: !!M.matcap,
      envMap: !!ie,
      envMapMode: ie && ie.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!M.lightMap,
      aoMap: !!M.aoMap,
      emissiveMap: !!M.emissiveMap,
      bumpMap: !!M.bumpMap,
      normalMap: !!M.normalMap,
      objectSpaceNormalMap: M.normalMapType === R0,
      tangentSpaceNormalMap: M.normalMapType === P0,
      decodeVideoTexture:
        !!M.map && M.map.isVideoTexture === !0 && M.map.encoding === it,
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
      opaque: M.transparent === !1 && M.blending === gr,
      alphaMap: !!M.alphaMap,
      alphaTest: ae,
      gradientMap: !!M.gradientMap,
      sheen: M.sheen > 0,
      sheenColorMap: !!M.sheenColorMap,
      sheenRoughnessMap: !!M.sheenRoughnessMap,
      transmission: M.transmission > 0,
      transmissionMap: !!M.transmissionMap,
      thicknessMap: !!M.thicknessMap,
      combine: M.combine,
      vertexTangents: !!M.normalMap && !!z.attributes.tangent,
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!z.attributes.color &&
        z.attributes.color.itemSize === 4,
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
      fog: !!G,
      useFog: M.fog === !0,
      fogExp2: G && G.isFogExp2,
      flatShading: !!M.flatShading,
      sizeAttenuation: M.sizeAttenuation,
      logarithmicDepthBuffer: f,
      skinning: de.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
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
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: n.shadowMap.enabled && R.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: M.toneMapped ? n.toneMapping : Dn,
      physicallyCorrectLights: n.physicallyCorrectLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === $n,
      flipSided: M.side === jt,
      useDepthPacking: !!M.depthPacking,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: M.extensions && M.extensions.derivatives,
      extensionFragDepth: M.extensions && M.extensions.fragDepth,
      extensionDrawBuffers: M.extensions && M.extensions.drawBuffers,
      extensionShaderTextureLOD: M.extensions && M.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || i.has('EXT_frag_depth'),
      rendererExtensionDrawBuffers: u || i.has('WEBGL_draw_buffers'),
      rendererExtensionShaderTextureLod: u || i.has('EXT_shader_texture_lod'),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
  }
  function p(M) {
    const L = [];
    if (
      (M.shaderID
        ? L.push(M.shaderID)
        : (L.push(M.customVertexShaderID), L.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (const R in M.defines) L.push(R), L.push(M.defines[R]);
    return (
      M.isRawShaderMaterial === !1 &&
        (_(L, M), x(L, M), L.push(n.outputEncoding)),
      L.push(M.customProgramCacheKey),
      L.join()
    );
  }
  function _(M, L) {
    M.push(L.precision),
      M.push(L.outputEncoding),
      M.push(L.envMapMode),
      M.push(L.envMapCubeUVHeight),
      M.push(L.combine),
      M.push(L.vertexUvs),
      M.push(L.fogExp2),
      M.push(L.sizeAttenuation),
      M.push(L.morphTargetsCount),
      M.push(L.morphAttributeCount),
      M.push(L.numDirLights),
      M.push(L.numPointLights),
      M.push(L.numSpotLights),
      M.push(L.numSpotLightMaps),
      M.push(L.numHemiLights),
      M.push(L.numRectAreaLights),
      M.push(L.numDirLightShadows),
      M.push(L.numPointLightShadows),
      M.push(L.numSpotLightShadows),
      M.push(L.numSpotLightShadowsWithMaps),
      M.push(L.shadowMapType),
      M.push(L.toneMapping),
      M.push(L.numClippingPlanes),
      M.push(L.numClipIntersection),
      M.push(L.depthPacking);
  }
  function x(M, L) {
    o.disableAll(),
      L.isWebGL2 && o.enable(0),
      L.supportsVertexTextures && o.enable(1),
      L.instancing && o.enable(2),
      L.instancingColor && o.enable(3),
      L.map && o.enable(4),
      L.matcap && o.enable(5),
      L.envMap && o.enable(6),
      L.lightMap && o.enable(7),
      L.aoMap && o.enable(8),
      L.emissiveMap && o.enable(9),
      L.bumpMap && o.enable(10),
      L.normalMap && o.enable(11),
      L.objectSpaceNormalMap && o.enable(12),
      L.tangentSpaceNormalMap && o.enable(13),
      L.clearcoat && o.enable(14),
      L.clearcoatMap && o.enable(15),
      L.clearcoatRoughnessMap && o.enable(16),
      L.clearcoatNormalMap && o.enable(17),
      L.iridescence && o.enable(18),
      L.iridescenceMap && o.enable(19),
      L.iridescenceThicknessMap && o.enable(20),
      L.displacementMap && o.enable(21),
      L.specularMap && o.enable(22),
      L.roughnessMap && o.enable(23),
      L.metalnessMap && o.enable(24),
      L.gradientMap && o.enable(25),
      L.alphaMap && o.enable(26),
      L.alphaTest && o.enable(27),
      L.vertexColors && o.enable(28),
      L.vertexAlphas && o.enable(29),
      L.vertexUvs && o.enable(30),
      L.vertexTangents && o.enable(31),
      L.uvsVertexOnly && o.enable(32),
      M.push(o.mask),
      o.disableAll(),
      L.fog && o.enable(0),
      L.useFog && o.enable(1),
      L.flatShading && o.enable(2),
      L.logarithmicDepthBuffer && o.enable(3),
      L.skinning && o.enable(4),
      L.morphTargets && o.enable(5),
      L.morphNormals && o.enable(6),
      L.morphColors && o.enable(7),
      L.premultipliedAlpha && o.enable(8),
      L.shadowMapEnabled && o.enable(9),
      L.physicallyCorrectLights && o.enable(10),
      L.doubleSided && o.enable(11),
      L.flipSided && o.enable(12),
      L.useDepthPacking && o.enable(13),
      L.dithering && o.enable(14),
      L.specularIntensityMap && o.enable(15),
      L.specularColorMap && o.enable(16),
      L.transmission && o.enable(17),
      L.transmissionMap && o.enable(18),
      L.thicknessMap && o.enable(19),
      L.sheen && o.enable(20),
      L.sheenColorMap && o.enable(21),
      L.sheenRoughnessMap && o.enable(22),
      L.decodeVideoTexture && o.enable(23),
      L.opaque && o.enable(24),
      M.push(o.mask);
  }
  function y(M) {
    const L = g[M.type];
    let R;
    if (L) {
      const Y = hn[L];
      R = ov.clone(Y.uniforms);
    } else R = M.uniforms;
    return R;
  }
  function b(M, L) {
    let R;
    for (let Y = 0, de = c.length; Y < de; Y++) {
      const G = c[Y];
      if (G.cacheKey === L) {
        (R = G), ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && ((R = new _b(n, L, M, s)), c.push(R)), R;
  }
  function S(M) {
    if (--M.usedTimes === 0) {
      const L = c.indexOf(M);
      (c[L] = c[c.length - 1]), c.pop(), M.destroy();
    }
  }
  function P(M) {
    l.remove(M);
  }
  function B() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: S,
    releaseShaderCache: P,
    programs: c,
    dispose: B,
  };
}
function bb() {
  let n = new WeakMap();
  function e(s) {
    let a = n.get(s);
    return a === void 0 && ((a = {}), n.set(s, a)), a;
  }
  function t(s) {
    n.delete(s);
  }
  function i(s, a, o) {
    n.get(s)[a] = o;
  }
  function r() {
    n = new WeakMap();
  }
  return { get: e, remove: t, update: i, dispose: r };
}
function Sb(n, e) {
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
  function a(f, h, d, g, m, p) {
    let _ = n[e];
    return (
      _ === void 0
        ? ((_ = {
            id: f.id,
            object: f,
            geometry: h,
            material: d,
            groupOrder: g,
            renderOrder: f.renderOrder,
            z: m,
            group: p,
          }),
          (n[e] = _))
        : ((_.id = f.id),
          (_.object = f),
          (_.geometry = h),
          (_.material = d),
          (_.groupOrder = g),
          (_.renderOrder = f.renderOrder),
          (_.z = m),
          (_.group = p)),
      e++,
      _
    );
  }
  function o(f, h, d, g, m, p) {
    const _ = a(f, h, d, g, m, p);
    d.transmission > 0
      ? i.push(_)
      : d.transparent === !0
      ? r.push(_)
      : t.push(_);
  }
  function l(f, h, d, g, m, p) {
    const _ = a(f, h, d, g, m, p);
    d.transmission > 0
      ? i.unshift(_)
      : d.transparent === !0
      ? r.unshift(_)
      : t.unshift(_);
  }
  function c(f, h) {
    t.length > 1 && t.sort(f || Sb),
      i.length > 1 && i.sort(h || Nu),
      r.length > 1 && r.sort(h || Nu);
  }
  function u() {
    for (let f = e, h = n.length; f < h; f++) {
      const d = n[f];
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
    transmissive: i,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function wb() {
  let n = new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let a;
    return (
      s === void 0
        ? ((a = new zu()), n.set(i, [a]))
        : r >= s.length
        ? ((a = new zu()), s.push(a))
        : (a = s[r]),
      a
    );
  }
  function t() {
    n = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Eb() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new N(), color: new Qe() };
          break;
        case 'SpotLight':
          t = {
            position: new N(),
            direction: new N(),
            color: new Qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          t = { position: new N(), color: new Qe(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new N(), skyColor: new Qe(), groundColor: new Qe() };
          break;
        case 'RectAreaLight':
          t = {
            color: new Qe(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N(),
          };
          break;
      }
      return (n[e.id] = t), t;
    },
  };
}
function Tb() {
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
      return (n[e.id] = t), t;
    },
  };
}
let Ab = 0;
function Cb(n, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (n.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (n.map ? 1 : 0)
  );
}
function Lb(n, e) {
  const t = new Eb(),
    i = Tb(),
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
    a = new lt(),
    o = new lt();
  function l(u, f) {
    let h = 0,
      d = 0,
      g = 0;
    for (let Y = 0; Y < 9; Y++) r.probe[Y].set(0, 0, 0);
    let m = 0,
      p = 0,
      _ = 0,
      x = 0,
      y = 0,
      b = 0,
      S = 0,
      P = 0,
      B = 0,
      M = 0;
    u.sort(Cb);
    const L = f !== !0 ? Math.PI : 1;
    for (let Y = 0, de = u.length; Y < de; Y++) {
      const G = u[Y],
        z = G.color,
        te = G.intensity,
        ie = G.distance,
        Z = G.shadow && G.shadow.map ? G.shadow.map.texture : null;
      if (G.isAmbientLight)
        (h += z.r * te * L), (d += z.g * te * L), (g += z.b * te * L);
      else if (G.isLightProbe)
        for (let W = 0; W < 9; W++)
          r.probe[W].addScaledVector(G.sh.coefficients[W], te);
      else if (G.isDirectionalLight) {
        const W = t.get(G);
        if (
          (W.color.copy(G.color).multiplyScalar(G.intensity * L), G.castShadow)
        ) {
          const U = G.shadow,
            X = i.get(G);
          (X.shadowBias = U.bias),
            (X.shadowNormalBias = U.normalBias),
            (X.shadowRadius = U.radius),
            (X.shadowMapSize = U.mapSize),
            (r.directionalShadow[m] = X),
            (r.directionalShadowMap[m] = Z),
            (r.directionalShadowMatrix[m] = G.shadow.matrix),
            b++;
        }
        (r.directional[m] = W), m++;
      } else if (G.isSpotLight) {
        const W = t.get(G);
        W.position.setFromMatrixPosition(G.matrixWorld),
          W.color.copy(z).multiplyScalar(te * L),
          (W.distance = ie),
          (W.coneCos = Math.cos(G.angle)),
          (W.penumbraCos = Math.cos(G.angle * (1 - G.penumbra))),
          (W.decay = G.decay),
          (r.spot[_] = W);
        const U = G.shadow;
        if (
          (G.map &&
            ((r.spotLightMap[B] = G.map),
            B++,
            U.updateMatrices(G),
            G.castShadow && M++),
          (r.spotLightMatrix[_] = U.matrix),
          G.castShadow)
        ) {
          const X = i.get(G);
          (X.shadowBias = U.bias),
            (X.shadowNormalBias = U.normalBias),
            (X.shadowRadius = U.radius),
            (X.shadowMapSize = U.mapSize),
            (r.spotShadow[_] = X),
            (r.spotShadowMap[_] = Z),
            P++;
        }
        _++;
      } else if (G.isRectAreaLight) {
        const W = t.get(G);
        W.color.copy(z).multiplyScalar(te),
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
          const U = G.shadow,
            X = i.get(G);
          (X.shadowBias = U.bias),
            (X.shadowNormalBias = U.normalBias),
            (X.shadowRadius = U.radius),
            (X.shadowMapSize = U.mapSize),
            (X.shadowCameraNear = U.camera.near),
            (X.shadowCameraFar = U.camera.far),
            (r.pointShadow[p] = X),
            (r.pointShadowMap[p] = Z),
            (r.pointShadowMatrix[p] = G.shadow.matrix),
            S++;
        }
        (r.point[p] = W), p++;
      } else if (G.isHemisphereLight) {
        const W = t.get(G);
        W.skyColor.copy(G.color).multiplyScalar(te * L),
          W.groundColor.copy(G.groundColor).multiplyScalar(te * L),
          (r.hemi[y] = W),
          y++;
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
      (r.ambient[1] = d),
      (r.ambient[2] = g);
    const R = r.hash;
    (R.directionalLength !== m ||
      R.pointLength !== p ||
      R.spotLength !== _ ||
      R.rectAreaLength !== x ||
      R.hemiLength !== y ||
      R.numDirectionalShadows !== b ||
      R.numPointShadows !== S ||
      R.numSpotShadows !== P ||
      R.numSpotMaps !== B) &&
      ((r.directional.length = m),
      (r.spot.length = _),
      (r.rectArea.length = x),
      (r.point.length = p),
      (r.hemi.length = y),
      (r.directionalShadow.length = b),
      (r.directionalShadowMap.length = b),
      (r.pointShadow.length = S),
      (r.pointShadowMap.length = S),
      (r.spotShadow.length = P),
      (r.spotShadowMap.length = P),
      (r.directionalShadowMatrix.length = b),
      (r.pointShadowMatrix.length = S),
      (r.spotLightMatrix.length = P + B - M),
      (r.spotLightMap.length = B),
      (r.numSpotLightShadowsWithMaps = M),
      (R.directionalLength = m),
      (R.pointLength = p),
      (R.spotLength = _),
      (R.rectAreaLength = x),
      (R.hemiLength = y),
      (R.numDirectionalShadows = b),
      (R.numPointShadows = S),
      (R.numSpotShadows = P),
      (R.numSpotMaps = B),
      (r.version = Ab++));
  }
  function c(u, f) {
    let h = 0,
      d = 0,
      g = 0,
      m = 0,
      p = 0;
    const _ = f.matrixWorldInverse;
    for (let x = 0, y = u.length; x < y; x++) {
      const b = u[x];
      if (b.isDirectionalLight) {
        const S = r.directional[h];
        S.direction.setFromMatrixPosition(b.matrixWorld),
          s.setFromMatrixPosition(b.target.matrixWorld),
          S.direction.sub(s),
          S.direction.transformDirection(_),
          h++;
      } else if (b.isSpotLight) {
        const S = r.spot[g];
        S.position.setFromMatrixPosition(b.matrixWorld),
          S.position.applyMatrix4(_),
          S.direction.setFromMatrixPosition(b.matrixWorld),
          s.setFromMatrixPosition(b.target.matrixWorld),
          S.direction.sub(s),
          S.direction.transformDirection(_),
          g++;
      } else if (b.isRectAreaLight) {
        const S = r.rectArea[m];
        S.position.setFromMatrixPosition(b.matrixWorld),
          S.position.applyMatrix4(_),
          o.identity(),
          a.copy(b.matrixWorld),
          a.premultiply(_),
          o.extractRotation(a),
          S.halfWidth.set(b.width * 0.5, 0, 0),
          S.halfHeight.set(0, b.height * 0.5, 0),
          S.halfWidth.applyMatrix4(o),
          S.halfHeight.applyMatrix4(o),
          m++;
      } else if (b.isPointLight) {
        const S = r.point[d];
        S.position.setFromMatrixPosition(b.matrixWorld),
          S.position.applyMatrix4(_),
          d++;
      } else if (b.isHemisphereLight) {
        const S = r.hemi[p];
        S.direction.setFromMatrixPosition(b.matrixWorld),
          S.direction.transformDirection(_),
          p++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Uu(n, e) {
  const t = new Lb(n, e),
    i = [],
    r = [];
  function s() {
    (i.length = 0), (r.length = 0);
  }
  function a(f) {
    i.push(f);
  }
  function o(f) {
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
    pushLight: a,
    pushShadow: o,
  };
}
function Pb(n, e) {
  let t = new WeakMap();
  function i(s, a = 0) {
    const o = t.get(s);
    let l;
    return (
      o === void 0
        ? ((l = new Uu(n, e)), t.set(s, [l]))
        : a >= o.length
        ? ((l = new Uu(n, e)), o.push(l))
        : (l = o[a]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: i, dispose: r };
}
class Rb extends Ir {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = C0),
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
class Db extends Ir {
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
const Ib = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Fb = `uniform sampler2D shadow_pass;
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
function Ob(n, e, t) {
  let i = new qh();
  const r = new Ie(),
    s = new Ie(),
    a = new Mt(),
    o = new Rb({ depthPacking: L0 }),
    l = new Db(),
    c = {},
    u = t.maxTextureSize,
    f = { 0: jt, 1: Er, 2: $n },
    h = new Fi({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ie() },
        radius: { value: 4 },
      },
      vertexShader: Ib,
      fragmentShader: Fb,
    }),
    d = h.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new xn();
  g.setAttribute(
    'position',
    new on(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const m = new Yn(g, h),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ah),
    (this.render = function (b, S, P) {
      if (
        p.enabled === !1 ||
        (p.autoUpdate === !1 && p.needsUpdate === !1) ||
        b.length === 0
      )
        return;
      const B = n.getRenderTarget(),
        M = n.getActiveCubeFace(),
        L = n.getActiveMipmapLevel(),
        R = n.state;
      R.setBlending(Qn),
        R.buffers.color.setClear(1, 1, 1, 1),
        R.buffers.depth.setTest(!0),
        R.setScissorTest(!1);
      for (let Y = 0, de = b.length; Y < de; Y++) {
        const G = b[Y],
          z = G.shadow;
        if (z === void 0) {
          console.warn('THREE.WebGLShadowMap:', G, 'has no shadow.');
          continue;
        }
        if (z.autoUpdate === !1 && z.needsUpdate === !1) continue;
        r.copy(z.mapSize);
        const te = z.getFrameExtents();
        if (
          (r.multiply(te),
          s.copy(z.mapSize),
          (r.x > u || r.y > u) &&
            (r.x > u &&
              ((s.x = Math.floor(u / te.x)),
              (r.x = s.x * te.x),
              (z.mapSize.x = s.x)),
            r.y > u &&
              ((s.y = Math.floor(u / te.y)),
              (r.y = s.y * te.y),
              (z.mapSize.y = s.y))),
          z.map === null)
        ) {
          const Z = this.type !== qr ? { minFilter: Ft, magFilter: Ft } : {};
          (z.map = new Di(r.x, r.y, Z)),
            (z.map.texture.name = G.name + '.shadowMap'),
            z.camera.updateProjectionMatrix();
        }
        n.setRenderTarget(z.map), n.clear();
        const ie = z.getViewportCount();
        for (let Z = 0; Z < ie; Z++) {
          const W = z.getViewport(Z);
          a.set(s.x * W.x, s.y * W.y, s.x * W.z, s.y * W.w),
            R.viewport(a),
            z.updateMatrices(G, Z),
            (i = z.getFrustum()),
            y(S, P, z.camera, G, this.type);
        }
        z.isPointLightShadow !== !0 && this.type === qr && _(z, P),
          (z.needsUpdate = !1);
      }
      (p.needsUpdate = !1), n.setRenderTarget(B, M, L);
    });
  function _(b, S) {
    const P = e.update(m);
    h.defines.VSM_SAMPLES !== b.blurSamples &&
      ((h.defines.VSM_SAMPLES = b.blurSamples),
      (d.defines.VSM_SAMPLES = b.blurSamples),
      (h.needsUpdate = !0),
      (d.needsUpdate = !0)),
      b.mapPass === null && (b.mapPass = new Di(r.x, r.y)),
      (h.uniforms.shadow_pass.value = b.map.texture),
      (h.uniforms.resolution.value = b.mapSize),
      (h.uniforms.radius.value = b.radius),
      n.setRenderTarget(b.mapPass),
      n.clear(),
      n.renderBufferDirect(S, null, P, h, m, null),
      (d.uniforms.shadow_pass.value = b.mapPass.texture),
      (d.uniforms.resolution.value = b.mapSize),
      (d.uniforms.radius.value = b.radius),
      n.setRenderTarget(b.map),
      n.clear(),
      n.renderBufferDirect(S, null, P, d, m, null);
  }
  function x(b, S, P, B, M, L) {
    let R = null;
    const Y =
      P.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (
      (Y !== void 0 ? (R = Y) : (R = P.isPointLight === !0 ? l : o),
      (n.localClippingEnabled &&
        S.clipShadows === !0 &&
        Array.isArray(S.clippingPlanes) &&
        S.clippingPlanes.length !== 0) ||
        (S.displacementMap && S.displacementScale !== 0) ||
        (S.alphaMap && S.alphaTest > 0))
    ) {
      const de = R.uuid,
        G = S.uuid;
      let z = c[de];
      z === void 0 && ((z = {}), (c[de] = z));
      let te = z[G];
      te === void 0 && ((te = R.clone()), (z[G] = te)), (R = te);
    }
    return (
      (R.visible = S.visible),
      (R.wireframe = S.wireframe),
      L === qr
        ? (R.side = S.shadowSide !== null ? S.shadowSide : S.side)
        : (R.side = S.shadowSide !== null ? S.shadowSide : f[S.side]),
      (R.alphaMap = S.alphaMap),
      (R.alphaTest = S.alphaTest),
      (R.clipShadows = S.clipShadows),
      (R.clippingPlanes = S.clippingPlanes),
      (R.clipIntersection = S.clipIntersection),
      (R.displacementMap = S.displacementMap),
      (R.displacementScale = S.displacementScale),
      (R.displacementBias = S.displacementBias),
      (R.wireframeLinewidth = S.wireframeLinewidth),
      (R.linewidth = S.linewidth),
      P.isPointLight === !0 &&
        R.isMeshDistanceMaterial === !0 &&
        (R.referencePosition.setFromMatrixPosition(P.matrixWorld),
        (R.nearDistance = B),
        (R.farDistance = M)),
      R
    );
  }
  function y(b, S, P, B, M) {
    if (b.visible === !1) return;
    if (
      b.layers.test(S.layers) &&
      (b.isMesh || b.isLine || b.isPoints) &&
      (b.castShadow || (b.receiveShadow && M === qr)) &&
      (!b.frustumCulled || i.intersectsObject(b))
    ) {
      b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, b.matrixWorld);
      const Y = e.update(b),
        de = b.material;
      if (Array.isArray(de)) {
        const G = Y.groups;
        for (let z = 0, te = G.length; z < te; z++) {
          const ie = G[z],
            Z = de[ie.materialIndex];
          if (Z && Z.visible) {
            const W = x(b, Z, B, P.near, P.far, M);
            n.renderBufferDirect(P, null, Y, W, b, ie);
          }
        }
      } else if (de.visible) {
        const G = x(b, de, B, P.near, P.far, M);
        n.renderBufferDirect(P, null, Y, G, b, null);
      }
    }
    const R = b.children;
    for (let Y = 0, de = R.length; Y < de; Y++) y(R[Y], S, P, B, M);
  }
}
function Nb(n, e, t) {
  const i = t.isWebGL2;
  function r() {
    let D = !1;
    const ee = new Mt();
    let ge = null;
    const Ae = new Mt(0, 0, 0, 0);
    return {
      setMask: function (Le) {
        ge !== Le && !D && (n.colorMask(Le, Le, Le, Le), (ge = Le));
      },
      setLocked: function (Le) {
        D = Le;
      },
      setClear: function (Le, qe, pt, bt, ri) {
        ri === !0 && ((Le *= bt), (qe *= bt), (pt *= bt)),
          ee.set(Le, qe, pt, bt),
          Ae.equals(ee) === !1 && (n.clearColor(Le, qe, pt, bt), Ae.copy(ee));
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
            case J_:
              n.depthFunc(512);
              break;
            case Q_:
              n.depthFunc(519);
              break;
            case e0:
              n.depthFunc(513);
              break;
            case Oa:
              n.depthFunc(515);
              break;
            case t0:
              n.depthFunc(514);
              break;
            case n0:
              n.depthFunc(518);
              break;
            case i0:
              n.depthFunc(516);
              break;
            case r0:
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
  function a() {
    let D = !1,
      ee = null,
      ge = null,
      Ae = null,
      Le = null,
      qe = null,
      pt = null,
      bt = null,
      ri = null;
    return {
      setTest: function (et) {
        D || (et ? ae(2960) : ce(2960));
      },
      setMask: function (et) {
        ee !== et && !D && (n.stencilMask(et), (ee = et));
      },
      setFunc: function (et, yn, Bt) {
        (ge !== et || Ae !== yn || Le !== Bt) &&
          (n.stencilFunc(et, yn, Bt), (ge = et), (Ae = yn), (Le = Bt));
      },
      setOp: function (et, yn, Bt) {
        (qe !== et || pt !== yn || bt !== Bt) &&
          (n.stencilOp(et, yn, Bt), (qe = et), (pt = yn), (bt = Bt));
      },
      setLocked: function (et) {
        D = et;
      },
      setClear: function (et) {
        ri !== et && (n.clearStencil(et), (ri = et));
      },
      reset: function () {
        (D = !1),
          (ee = null),
          (ge = null),
          (Ae = null),
          (Le = null),
          (qe = null),
          (pt = null),
          (bt = null),
          (ri = null);
      },
    };
  }
  const o = new r(),
    l = new s(),
    c = new a(),
    u = new WeakMap(),
    f = new WeakMap();
  let h = {},
    d = {},
    g = new WeakMap(),
    m = [],
    p = null,
    _ = !1,
    x = null,
    y = null,
    b = null,
    S = null,
    P = null,
    B = null,
    M = null,
    L = !1,
    R = null,
    Y = null,
    de = null,
    G = null,
    z = null;
  const te = n.getParameter(35661);
  let ie = !1,
    Z = 0;
  const W = n.getParameter(7938);
  W.indexOf('WebGL') !== -1
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(W)[1])), (ie = Z >= 1))
    : W.indexOf('OpenGL ES') !== -1 &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(W)[1])), (ie = Z >= 2));
  let U = null,
    X = {};
  const ue = n.getParameter(3088),
    oe = n.getParameter(2978),
    le = new Mt().fromArray(ue),
    we = new Mt().fromArray(oe);
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
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    ae(2929),
    l.setFunc(Oa),
    K(!1),
    he(Lc),
    ae(2884),
    H(Qn);
  function ae(D) {
    h[D] !== !0 && (n.enable(D), (h[D] = !0));
  }
  function ce(D) {
    h[D] !== !1 && (n.disable(D), (h[D] = !1));
  }
  function ve(D, ee) {
    return d[D] !== ee
      ? (n.bindFramebuffer(D, ee),
        (d[D] = ee),
        i && (D === 36009 && (d[36160] = ee), D === 36160 && (d[36009] = ee)),
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
    return p !== D ? (n.useProgram(D), (p = D), !0) : !1;
  }
  const E = { [lr]: 32774, [V_]: 32778, [G_]: 32779 };
  if (i) (E[Ic] = 32775), (E[Fc] = 32776);
  else {
    const D = e.get('EXT_blend_minmax');
    D !== null && ((E[Ic] = D.MIN_EXT), (E[Fc] = D.MAX_EXT));
  }
  const A = {
    [H_]: 0,
    [W_]: 1,
    [q_]: 768,
    [Ch]: 770,
    [K_]: 776,
    [Y_]: 774,
    [j_]: 772,
    [X_]: 769,
    [Lh]: 771,
    [Z_]: 775,
    [$_]: 773,
  };
  function H(D, ee, ge, Ae, Le, qe, pt, bt) {
    if (D === Qn) {
      _ === !0 && (ce(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (ae(3042), (_ = !0)), D !== k_)) {
      if (D !== x || bt !== L) {
        if (
          ((y !== lr || P !== lr) &&
            (n.blendEquation(32774), (y = lr), (P = lr)),
          bt)
        )
          switch (D) {
            case gr:
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
            case gr:
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
        (b = null), (S = null), (B = null), (M = null), (x = D), (L = bt);
      }
      return;
    }
    (Le = Le || ee),
      (qe = qe || ge),
      (pt = pt || Ae),
      (ee !== y || Le !== P) &&
        (n.blendEquationSeparate(E[ee], E[Le]), (y = ee), (P = Le)),
      (ge !== b || Ae !== S || qe !== B || pt !== M) &&
        (n.blendFuncSeparate(A[ge], A[Ae], A[qe], A[pt]),
        (b = ge),
        (S = Ae),
        (B = qe),
        (M = pt)),
      (x = D),
      (L = null);
  }
  function j(D, ee) {
    D.side === $n ? ce(2884) : ae(2884);
    let ge = D.side === jt;
    ee && (ge = !ge),
      K(ge),
      D.blending === gr && D.transparent === !1
        ? H(Qn)
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
      o.setMask(D.colorWrite);
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
    D !== z_
      ? (ae(2884),
        D !== Y &&
          (D === Lc
            ? n.cullFace(1029)
            : D === U_
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
        (G !== ee || z !== ge) && (n.polygonOffset(ee, ge), (G = ee), (z = ge)))
      : ce(32823);
  }
  function me(D) {
    D ? ae(3089) : ce(3089);
  }
  function se(D) {
    D === void 0 && (D = 33984 + te - 1),
      U !== D && (n.activeTexture(D), (U = D));
  }
  function w(D, ee, ge) {
    ge === void 0 && (U === null ? (ge = 33984 + te - 1) : (ge = U));
    let Ae = X[ge];
    Ae === void 0 && ((Ae = { type: void 0, texture: void 0 }), (X[ge] = Ae)),
      (Ae.type !== D || Ae.texture !== ee) &&
        (U !== ge && (n.activeTexture(ge), (U = ge)),
        n.bindTexture(D, ee || I[D]),
        (Ae.type = D),
        (Ae.texture = ee));
  }
  function v() {
    const D = X[U];
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
      (U = null),
      (X = {}),
      (d = {}),
      (g = new WeakMap()),
      (m = []),
      (p = null),
      (_ = !1),
      (x = null),
      (y = null),
      (b = null),
      (S = null),
      (P = null),
      (B = null),
      (M = null),
      (L = !1),
      (R = null),
      (Y = null),
      (de = null),
      (G = null),
      (z = null),
      le.set(0, 0, n.canvas.width, n.canvas.height),
      we.set(0, 0, n.canvas.width, n.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
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
function zb(n, e, t, i, r, s, a) {
  const o = r.isWebGL2,
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
  let m;
  const p = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function x(w, v) {
    return _ ? new OffscreenCanvas(w, v) : no('canvas');
  }
  function y(w, v, F, $) {
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
        const fe = v ? to : Math.floor,
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
  function b(w) {
    return Ga(w.width) && Ga(w.height);
  }
  function S(w) {
    return o
      ? !1
      : w.wrapS !== tn ||
          w.wrapT !== tn ||
          (w.minFilter !== Ft && w.minFilter !== Ht);
  }
  function P(w, v) {
    return w.generateMipmaps && v && w.minFilter !== Ft && w.minFilter !== Ht;
  }
  function B(w) {
    n.generateMipmap(w);
  }
  function M(w, v, F, $, Q = !1) {
    if (o === !1) return v;
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
      (w.isFramebufferTexture && w.minFilter !== Ft && w.minFilter !== Ht)
      ? Math.log2(Math.max(v.width, v.height)) + 1
      : w.mipmaps !== void 0 && w.mipmaps.length > 0
      ? w.mipmaps.length
      : w.isCompressedTexture && Array.isArray(w.image)
      ? v.mipmaps.length
      : 1;
  }
  function R(w) {
    return w === Ft || w === Oc || w === Nc ? 9728 : 9729;
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
      $ = p.get(F);
    if ($) {
      const Q = $[v.__cacheKey];
      Q.usedTimes--,
        Q.usedTimes === 0 && z(w),
        Object.keys($).length === 0 && p.delete(F);
    }
    i.remove(w);
  }
  function z(w) {
    const v = i.get(w);
    n.deleteTexture(v.__webglTexture);
    const F = w.source,
      $ = p.get(F);
    delete $[v.__cacheKey], a.memory.textures--;
  }
  function te(w) {
    const v = w.texture,
      F = i.get(w),
      $ = i.get(v);
    if (
      ($.__webglTexture !== void 0 &&
        (n.deleteTexture($.__webglTexture), a.memory.textures--),
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
          (n.deleteTexture(ye.__webglTexture), a.memory.textures--),
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
  function U(w) {
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
      [Ft]: 9728,
      [Oc]: 9984,
      [Nc]: 9986,
      [Ht]: 9729,
      [h0]: 9985,
      [xo]: 9987,
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
          v.minFilter !== Ft &&
            v.minFilter !== Ht &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
            )),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      const $ = e.get('EXT_texture_filter_anisotropic');
      if (
        (v.type === Mi && e.has('OES_texture_float_linear') === !1) ||
        (o === !1 &&
          v.type === os &&
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
    let Q = p.get($);
    Q === void 0 && ((Q = {}), p.set($, Q));
    const fe = U(v);
    if (fe !== w.__cacheKey) {
      Q[fe] === void 0 &&
        ((Q[fe] = { texture: n.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (F = !0)),
        Q[fe].usedTimes++;
      const ye = Q[w.__cacheKey];
      ye !== void 0 &&
        (Q[w.__cacheKey].usedTimes--, ye.usedTimes === 0 && z(v)),
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
      const C = S(v) && b(v.image) === !1;
      let O = y(v.image, C, !1, u);
      O = se(v, O);
      const Me = b(O) || o,
        Te = s.convert(v.format, v.encoding);
      let be = s.convert(v.type),
        Ce = M(v.internalFormat, Te, be, v.encoding, v.isVideoTexture);
      I($, v, Me);
      let Se;
      const De = v.mipmaps,
        ke = o && v.isVideoTexture !== !0,
        Ye = ye.__version === void 0 || Q === !0,
        D = L(v, O, Me);
      if (v.isDepthTexture)
        (Ce = 6402),
          o
            ? v.type === Mi
              ? (Ce = 36012)
              : v.type === yi
              ? (Ce = 33190)
              : v.type === _r
              ? (Ce = 35056)
              : (Ce = 33189)
            : v.type === Mi &&
              console.error(
                'WebGLRenderer: Floating point depth texture requires WebGL2.'
              ),
          v.format === Ai &&
            Ce === 6402 &&
            v.type !== Dh &&
            v.type !== yi &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
            ),
            (v.type = yi),
            (be = s.convert(v.type))),
          v.format === Cr &&
            Ce === 6402 &&
            ((Ce = 34041),
            v.type !== _r &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
              ),
              (v.type = _r),
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
          ? (O[ee] = y(v.image[ee], !1, !0, c))
          : (O[ee] = C ? v.image[ee].image : v.image[ee]),
          (O[ee] = se(v, O[ee]));
      const Me = O[0],
        Te = b(Me) || o,
        be = s.convert(v.format, v.encoding),
        Ce = s.convert(v.type),
        Se = M(v.internalFormat, be, Ce, v.encoding),
        De = o && v.isVideoTexture !== !0,
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
      C = M(F.internalFormat, fe, ye, F.encoding);
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
          (Q.type === Mi ? ($ = 36012) : Q.type === yi && ($ = 33190));
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
          O = M(fe.internalFormat, ye, C, fe.encoding),
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
    else if (v.depthTexture.format === Cr)
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
        a.memory.textures++);
    const Q = w.isWebGLCubeRenderTarget === !0,
      fe = w.isWebGLMultipleRenderTargets === !0,
      ye = b(w) || o;
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
              ((Te.__webglTexture = n.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
          );
      if (o && w.samples > 0 && re(w) === !1) {
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
            Ce = M(
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
        (o
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
    const v = b(w) || o,
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
    if (o && w.samples > 0 && re(w) === !1) {
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
          d && n.invalidateFramebuffer(36008, fe);
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
      o &&
      w.samples > 0 &&
      e.has('WEBGL_multisampled_render_to_texture') === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function me(w) {
    const v = a.render.frame;
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
            ? o === !1
              ? e.has('EXT_sRGB') === !0 && $ === nn
                ? ((w.format = Va),
                  (w.minFilter = Ht),
                  (w.generateMipmaps = !1))
                : (v = Oh.sRGBToLinear(v))
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
function Ub(n, e, t) {
  const i = t.isWebGL2;
  function r(s, a = null) {
    let o;
    if (s === Pi) return 5121;
    if (s === g0) return 32819;
    if (s === _0) return 32820;
    if (s === d0) return 5120;
    if (s === p0) return 5122;
    if (s === Dh) return 5123;
    if (s === m0) return 5124;
    if (s === yi) return 5125;
    if (s === Mi) return 5126;
    if (s === os)
      return i
        ? 5131
        : ((o = e.get('OES_texture_half_float')),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (s === v0) return 6406;
    if (s === nn) return 6408;
    if (s === y0) return 6409;
    if (s === M0) return 6410;
    if (s === Ai) return 6402;
    if (s === Cr) return 34041;
    if (s === b0) return 6403;
    if (s === x0)
      return (
        console.warn(
          'THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228'
        ),
        6408
      );
    if (s === Va)
      return (o = e.get('EXT_sRGB')), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === S0) return 36244;
    if (s === w0) return 33319;
    if (s === E0) return 33320;
    if (s === T0) return 36249;
    if (s === zo || s === Uo || s === Bo || s === ko)
      if (a === it)
        if (((o = e.get('WEBGL_compressed_texture_s3tc_srgb')), o !== null)) {
          if (s === zo) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Uo) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Bo) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === ko) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get('WEBGL_compressed_texture_s3tc')), o !== null)) {
        if (s === zo) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Uo) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Bo) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === ko) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === zc || s === Uc || s === Bc || s === kc)
      if (((o = e.get('WEBGL_compressed_texture_pvrtc')), o !== null)) {
        if (s === zc) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Uc) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Bc) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === kc) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === A0)
      return (
        (o = e.get('WEBGL_compressed_texture_etc1')),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Vc || s === Gc)
      if (((o = e.get('WEBGL_compressed_texture_etc')), o !== null)) {
        if (s === Vc)
          return a === it ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Gc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
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
      if (((o = e.get('WEBGL_compressed_texture_astc')), o !== null)) {
        if (s === Hc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Wc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === qc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Xc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === jc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === $c)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Yc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Zc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Kc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Jc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Qc)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === eu)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === tu)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === nu)
          return a === it
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === iu)
      if (((o = e.get('EXT_texture_compression_bptc')), o !== null)) {
        if (s === iu)
          return a === it
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === _r
      ? i
        ? 34042
        : ((o = e.get('WEBGL_depth_texture')),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : n[s] !== void 0
      ? n[s]
      : null;
  }
  return { convert: r };
}
class Bb extends Wt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class fr extends Dt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const kb = { type: 'move' };
class ha {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new fr()),
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
        ((this._targetRay = new fr()),
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
        ((this._grip = new fr()),
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
  update(e, t, i) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== 'visible-blurred') {
      if (c && e.hand) {
        a = !0;
        for (const m of e.hand.values()) {
          const p = t.getJointPose(m, i);
          if (c.joints[m.jointName] === void 0) {
            const x = new fr();
            (x.matrixAutoUpdate = !1),
              (x.visible = !1),
              (c.joints[m.jointName] = x),
              c.add(x);
          }
          const _ = c.joints[m.jointName];
          p !== null &&
            (_.matrix.fromArray(p.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = p.radius)),
            (_.visible = p !== null);
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
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, i)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(kb)));
    }
    return (
      o !== null && (o.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
}
class Vb extends $t {
  constructor(e, t, i, r, s, a, o, l, c, u) {
    if (((u = u !== void 0 ? u : Ai), u !== Ai && u !== Cr))
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
      );
    i === void 0 && u === Ai && (i = yi),
      i === void 0 && u === Cr && (i = _r),
      super(null, r, s, a, o, l, u, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : Ft),
      (this.minFilter = l !== void 0 ? l : Ft),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Gb extends Ni {
  constructor(e, t) {
    super();
    const i = this;
    let r = null,
      s = 1,
      a = null,
      o = 'local-floor',
      l = null,
      c = null,
      u = null,
      f = null,
      h = null,
      d = null;
    const g = t.getContextAttributes();
    let m = null,
      p = null;
    const _ = [],
      x = [],
      y = new Wt();
    y.layers.enable(1), (y.viewport = new Mt());
    const b = new Wt();
    b.layers.enable(2), (b.viewport = new Mt());
    const S = [y, b],
      P = new Bb();
    P.layers.enable(1), P.layers.enable(2);
    let B = null,
      M = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let X = _[U];
        return (
          X === void 0 && ((X = new ha()), (_[U] = X)), X.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let X = _[U];
        return X === void 0 && ((X = new ha()), (_[U] = X)), X.getGripSpace();
      }),
      (this.getHand = function (U) {
        let X = _[U];
        return X === void 0 && ((X = new ha()), (_[U] = X)), X.getHandSpace();
      });
    function L(U) {
      const X = x.indexOf(U.inputSource);
      if (X === -1) return;
      const ue = _[X];
      ue !== void 0 && ue.dispatchEvent({ type: U.type, data: U.inputSource });
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
      for (let U = 0; U < _.length; U++) {
        const X = x[U];
        X !== null && ((x[U] = null), _[U].disconnect(X));
      }
      (B = null),
        (M = null),
        e.setRenderTarget(m),
        (h = null),
        (f = null),
        (u = null),
        (r = null),
        (p = null),
        W.stop(),
        (i.isPresenting = !1),
        i.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (U) {
      (s = U),
        i.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
          );
    }),
      (this.setReferenceSpaceType = function (U) {
        (o = U),
          i.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.'
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (U) {
        l = U;
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
      (this.setSession = async function (U) {
        if (((r = U), r !== null)) {
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
              (p = new Di(h.framebufferWidth, h.framebufferHeight, {
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
              (X = g.stencil ? Cr : Ai),
              (ue = g.stencil ? _r : yi));
            const le = { colorFormat: 32856, depthFormat: oe, scaleFactor: s };
            (u = new XRWebGLBinding(r, t)),
              (f = u.createProjectionLayer(le)),
              r.updateRenderState({ layers: [f] }),
              (p = new Di(f.textureWidth, f.textureHeight, {
                format: nn,
                type: Pi,
                depthTexture: new Vb(
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
            const we = e.properties.get(p);
            we.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (p.isXRRenderTarget = !0),
            this.setFoveation(1),
            (l = null),
            (a = await r.requestReferenceSpace(o)),
            W.setContext(r),
            W.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: 'sessionstart' });
        }
      });
    function Y(U) {
      for (let X = 0; X < U.removed.length; X++) {
        const ue = U.removed[X],
          oe = x.indexOf(ue);
        oe >= 0 &&
          ((x[oe] = null),
          _[oe].dispatchEvent({ type: 'disconnected', data: ue }));
      }
      for (let X = 0; X < U.added.length; X++) {
        const ue = U.added[X];
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
    const de = new N(),
      G = new N();
    function z(U, X, ue) {
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
      X.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(H),
        U.translateZ(A),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const j = V + A,
        K = I + A,
        he = Ee - H,
        pe = E + (oe - H),
        re = ((ae * I) / K) * j,
        me = ((ce * I) / K) * j;
      U.projectionMatrix.makePerspective(he, pe, re, me, j, K);
    }
    function te(U, X) {
      X === null
        ? U.matrixWorld.copy(U.matrix)
        : U.matrixWorld.multiplyMatrices(X.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    (this.updateCamera = function (U) {
      if (r === null) return;
      (P.near = b.near = y.near = U.near),
        (P.far = b.far = y.far = U.far),
        (B !== P.near || M !== P.far) &&
          (r.updateRenderState({ depthNear: P.near, depthFar: P.far }),
          (B = P.near),
          (M = P.far));
      const X = U.parent,
        ue = P.cameras;
      te(P, X);
      for (let le = 0; le < ue.length; le++) te(ue[le], X);
      P.matrixWorld.decompose(P.position, P.quaternion, P.scale),
        U.matrix.copy(P.matrix),
        U.matrix.decompose(U.position, U.quaternion, U.scale);
      const oe = U.children;
      for (let le = 0, we = oe.length; le < we; le++)
        oe[le].updateMatrixWorld(!0);
      ue.length === 2
        ? z(P, y, b)
        : P.projectionMatrix.copy(y.projectionMatrix);
    }),
      (this.getCamera = function () {
        return P;
      }),
      (this.getFoveation = function () {
        if (f !== null) return f.fixedFoveation;
        if (h !== null) return h.fixedFoveation;
      }),
      (this.setFoveation = function (U) {
        f !== null && (f.fixedFoveation = U),
          h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = U);
      });
    let ie = null;
    function Z(U, X) {
      if (((c = X.getViewerPose(l || a)), (d = X), c !== null)) {
        const ue = c.views;
        h !== null &&
          (e.setRenderTargetFramebuffer(p, h.framebuffer),
          e.setRenderTarget(p));
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
                  p,
                  ae.colorTexture,
                  f.ignoreDepthValues ? void 0 : ae.depthStencilTexture
                ),
                e.setRenderTarget(p));
          }
          let I = S[le];
          I === void 0 &&
            ((I = new Wt()),
            I.layers.enable(le),
            (I.viewport = new Mt()),
            (S[le] = I)),
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
        oe !== null && le !== void 0 && le.update(oe, X, l || a);
      }
      ie && ie(U, X), (d = null);
    }
    const W = new Xh();
    W.setAnimationLoop(Z),
      (this.setAnimationLoop = function (U) {
        ie = U;
      }),
      (this.dispose = function () {});
  }
}
function Hb(n, e) {
  function t(m, p) {
    m.fogColor.value.copy(p.color),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, _, x, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? r(m, p)
      : p.isMeshToonMaterial
      ? (r(m, p), u(m, p))
      : p.isMeshPhongMaterial
      ? (r(m, p), c(m, p))
      : p.isMeshStandardMaterial
      ? (r(m, p), f(m, p), p.isMeshPhysicalMaterial && h(m, p, y))
      : p.isMeshMatcapMaterial
      ? (r(m, p), d(m, p))
      : p.isMeshDepthMaterial
      ? r(m, p)
      : p.isMeshDistanceMaterial
      ? (r(m, p), g(m, p))
      : p.isMeshNormalMaterial
      ? r(m, p)
      : p.isLineBasicMaterial
      ? (s(m, p), p.isLineDashedMaterial && a(m, p))
      : p.isPointsMaterial
      ? o(m, p, _, x)
      : p.isSpriteMaterial
      ? l(m, p)
      : p.isShadowMaterial
      ? (m.color.value.copy(p.color), (m.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    (m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && (m.map.value = p.map),
      p.alphaMap && (m.alphaMap.value = p.alphaMap),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        (m.bumpScale.value = p.bumpScale),
        p.side === jt && (m.bumpScale.value *= -1)),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      p.emissiveMap && (m.emissiveMap.value = p.emissiveMap),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        m.normalScale.value.copy(p.normalScale),
        p.side === jt && m.normalScale.value.negate()),
      p.specularMap && (m.specularMap.value = p.specularMap),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const _ = e.get(p).envMap;
    if (
      (_ &&
        ((m.envMap.value = _),
        (m.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (m.reflectivity.value = p.reflectivity),
        (m.ior.value = p.ior),
        (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap)
    ) {
      m.lightMap.value = p.lightMap;
      const b = n.physicallyCorrectLights !== !0 ? Math.PI : 1;
      m.lightMapIntensity.value = p.lightMapIntensity * b;
    }
    p.aoMap &&
      ((m.aoMap.value = p.aoMap), (m.aoMapIntensity.value = p.aoMapIntensity));
    let x;
    p.map
      ? (x = p.map)
      : p.specularMap
      ? (x = p.specularMap)
      : p.displacementMap
      ? (x = p.displacementMap)
      : p.normalMap
      ? (x = p.normalMap)
      : p.bumpMap
      ? (x = p.bumpMap)
      : p.roughnessMap
      ? (x = p.roughnessMap)
      : p.metalnessMap
      ? (x = p.metalnessMap)
      : p.alphaMap
      ? (x = p.alphaMap)
      : p.emissiveMap
      ? (x = p.emissiveMap)
      : p.clearcoatMap
      ? (x = p.clearcoatMap)
      : p.clearcoatNormalMap
      ? (x = p.clearcoatNormalMap)
      : p.clearcoatRoughnessMap
      ? (x = p.clearcoatRoughnessMap)
      : p.iridescenceMap
      ? (x = p.iridescenceMap)
      : p.iridescenceThicknessMap
      ? (x = p.iridescenceThicknessMap)
      : p.specularIntensityMap
      ? (x = p.specularIntensityMap)
      : p.specularColorMap
      ? (x = p.specularColorMap)
      : p.transmissionMap
      ? (x = p.transmissionMap)
      : p.thicknessMap
      ? (x = p.thicknessMap)
      : p.sheenColorMap
      ? (x = p.sheenColorMap)
      : p.sheenRoughnessMap && (x = p.sheenRoughnessMap),
      x !== void 0 &&
        (x.isWebGLRenderTarget && (x = x.texture),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        m.uvTransform.value.copy(x.matrix));
    let y;
    p.aoMap ? (y = p.aoMap) : p.lightMap && (y = p.lightMap),
      y !== void 0 &&
        (y.isWebGLRenderTarget && (y = y.texture),
        y.matrixAutoUpdate === !0 && y.updateMatrix(),
        m.uv2Transform.value.copy(y.matrix));
  }
  function s(m, p) {
    m.diffuse.value.copy(p.color), (m.opacity.value = p.opacity);
  }
  function a(m, p) {
    (m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale);
  }
  function o(m, p, _, x) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * _),
      (m.scale.value = x * 0.5),
      p.map && (m.map.value = p.map),
      p.alphaMap && (m.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    let y;
    p.map ? (y = p.map) : p.alphaMap && (y = p.alphaMap),
      y !== void 0 &&
        (y.matrixAutoUpdate === !0 && y.updateMatrix(),
        m.uvTransform.value.copy(y.matrix));
  }
  function l(m, p) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && (m.map.value = p.map),
      p.alphaMap && (m.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    let _;
    p.map ? (_ = p.map) : p.alphaMap && (_ = p.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        m.uvTransform.value.copy(_.matrix));
  }
  function c(m, p) {
    m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4));
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function f(m, p) {
    (m.roughness.value = p.roughness),
      (m.metalness.value = p.metalness),
      p.roughnessMap && (m.roughnessMap.value = p.roughnessMap),
      p.metalnessMap && (m.metalnessMap.value = p.metalnessMap),
      e.get(p).envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function h(m, p, _) {
    (m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap),
        p.sheenRoughnessMap &&
          (m.sheenRoughnessMap.value = p.sheenRoughnessMap)),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap),
        p.clearcoatRoughnessMap &&
          (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
        p.clearcoatNormalMap &&
          (m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          (m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          p.side === jt && m.clearcoatNormalScale.value.negate())),
      p.iridescence > 0 &&
        ((m.iridescence.value = p.iridescence),
        (m.iridescenceIOR.value = p.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap),
        p.iridescenceThicknessMap &&
          (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap)),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = _.texture),
        m.transmissionSamplerSize.value.set(_.width, _.height),
        p.transmissionMap && (m.transmissionMap.value = p.transmissionMap),
        (m.thickness.value = p.thickness),
        p.thicknessMap && (m.thicknessMap.value = p.thicknessMap),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularIntensityMap &&
        (m.specularIntensityMap.value = p.specularIntensityMap),
      p.specularColorMap && (m.specularColorMap.value = p.specularColorMap);
  }
  function d(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function g(m, p) {
    m.referencePosition.value.copy(p.referencePosition),
      (m.nearDistance.value = p.nearDistance),
      (m.farDistance.value = p.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: i };
}
function Wb(n, e, t, i) {
  let r = {},
    s = {},
    a = [];
  const o = t.isWebGL2 ? n.getParameter(35375) : 0;
  function l(x, y) {
    const b = y.program;
    i.uniformBlockBinding(x, b);
  }
  function c(x, y) {
    let b = r[x.id];
    b === void 0 &&
      (g(x), (b = u(x)), (r[x.id] = b), x.addEventListener('dispose', p));
    const S = y.program;
    i.updateUBOMapping(x, S);
    const P = e.render.frame;
    s[x.id] !== P && (h(x), (s[x.id] = P));
  }
  function u(x) {
    const y = f();
    x.__bindingPointIndex = y;
    const b = n.createBuffer(),
      S = x.__size,
      P = x.usage;
    return (
      n.bindBuffer(35345, b),
      n.bufferData(35345, S, P),
      n.bindBuffer(35345, null),
      n.bindBufferBase(35345, y, b),
      b
    );
  }
  function f() {
    for (let x = 0; x < o; x++) if (a.indexOf(x) === -1) return a.push(x), x;
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'
      ),
      0
    );
  }
  function h(x) {
    const y = r[x.id],
      b = x.uniforms,
      S = x.__cache;
    n.bindBuffer(35345, y);
    for (let P = 0, B = b.length; P < B; P++) {
      const M = b[P];
      if (d(M, P, S) === !0) {
        const L = M.value,
          R = M.__offset;
        typeof L == 'number'
          ? ((M.__data[0] = L), n.bufferSubData(35345, R, M.__data))
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
              : L.toArray(M.__data),
            n.bufferSubData(35345, R, M.__data));
      }
    }
    n.bindBuffer(35345, null);
  }
  function d(x, y, b) {
    const S = x.value;
    if (b[y] === void 0)
      return typeof S == 'number' ? (b[y] = S) : (b[y] = S.clone()), !0;
    if (typeof S == 'number') {
      if (b[y] !== S) return (b[y] = S), !0;
    } else {
      const P = b[y];
      if (P.equals(S) === !1) return P.copy(S), !0;
    }
    return !1;
  }
  function g(x) {
    const y = x.uniforms;
    let b = 0;
    const S = 16;
    let P = 0;
    for (let B = 0, M = y.length; B < M; B++) {
      const L = y[B],
        R = m(L);
      if (
        ((L.__data = new Float32Array(
          R.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (L.__offset = b),
        B > 0)
      ) {
        P = b % S;
        const Y = S - P;
        P !== 0 && Y - R.boundary < 0 && ((b += S - P), (L.__offset = b));
      }
      b += R.storage;
    }
    return (
      (P = b % S), P > 0 && (b += S - P), (x.__size = b), (x.__cache = {}), this
    );
  }
  function m(x) {
    const y = x.value,
      b = { boundary: 0, storage: 0 };
    return (
      typeof y == 'number'
        ? ((b.boundary = 4), (b.storage = 4))
        : y.isVector2
        ? ((b.boundary = 8), (b.storage = 8))
        : y.isVector3 || y.isColor
        ? ((b.boundary = 16), (b.storage = 12))
        : y.isVector4
        ? ((b.boundary = 16), (b.storage = 16))
        : y.isMatrix3
        ? ((b.boundary = 48), (b.storage = 48))
        : y.isMatrix4
        ? ((b.boundary = 64), (b.storage = 64))
        : y.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.'
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            y
          ),
      b
    );
  }
  function p(x) {
    const y = x.target;
    y.removeEventListener('dispose', p);
    const b = a.indexOf(y.__bindingPointIndex);
    a.splice(b, 1), n.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
  }
  function _() {
    for (const x in r) n.deleteBuffer(r[x]);
    (a = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: _ };
}
function qb() {
  const n = no('canvas');
  return (n.style.display = 'block'), n;
}
function Kh(n = {}) {
  this.isWebGLRenderer = !0;
  const e = n.canvas !== void 0 ? n.canvas : qb(),
    t = n.context !== void 0 ? n.context : null,
    i = n.depth !== void 0 ? n.depth : !0,
    r = n.stencil !== void 0 ? n.stencil : !0,
    s = n.antialias !== void 0 ? n.antialias : !1,
    a = n.premultipliedAlpha !== void 0 ? n.premultipliedAlpha : !0,
    o = n.preserveDrawingBuffer !== void 0 ? n.preserveDrawingBuffer : !1,
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
  let p = !1,
    _ = 0,
    x = 0,
    y = null,
    b = -1,
    S = null;
  const P = new Mt(),
    B = new Mt();
  let M = null,
    L = e.width,
    R = e.height,
    Y = 1,
    de = null,
    G = null;
  const z = new Mt(0, 0, L, R),
    te = new Mt(0, 0, L, R);
  let ie = !1;
  const Z = new qh();
  let W = !1,
    U = !1,
    X = null;
  const ue = new lt(),
    oe = new Ie(),
    le = new N(),
    we = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function V() {
    return y === null ? Y : 1;
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
      premultipliedAlpha: a,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ('setAttribute' in e && e.setAttribute('data-engine', `three.js r${Sl}`),
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
    (ce = new nM(I)),
      (ve = new Yy(I, ce, n)),
      ce.init(ve),
      (C = new Ub(I, ce, ve)),
      (_e = new Nb(I, ce, ve)),
      (Ee = new sM()),
      (E = new bb()),
      (A = new zb(I, ce, _e, E, ve, C, Ee)),
      (H = new Ky(m)),
      (j = new tM(m)),
      (K = new dv(I, ve)),
      (O = new jy(I, ce, K, ve)),
      (he = new iM(I, K, Ee, O)),
      (pe = new cM(I, he, K, Ee)),
      (Q = new lM(I, ve, A)),
      (v = new Zy(E)),
      (re = new Mb(m, H, j, ce, ve, O, v)),
      (me = new Hb(m, E)),
      (se = new wb()),
      (w = new Pb(ce, ve)),
      ($ = new Xy(m, H, j, _e, pe, u, a)),
      (F = new Ob(m, pe, ve)),
      (Me = new Wb(I, Ee, ve, _e)),
      (fe = new $y(I, ce, Ee, ve)),
      (ye = new rM(I, ce, Ee, ve)),
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
  const be = new Gb(m, I);
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
      return T.copy(z);
    }),
    (this.setViewport = function (T, q, J, k) {
      T.isVector4 ? z.set(T.x, T.y, T.z, T.w) : z.set(T, q, J, k),
        _e.viewport(P.copy(z).multiplyScalar(Y).floor());
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
      (p = !0);
  }
  function Se() {
    console.log('THREE.WebGLRenderer: Context Restored.'), (p = !1);
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
    const Fe = ne.isMesh && ne.matrixWorld.determinant() < 0,
      Be = nd(T, q, J, k, ne);
    _e.setMaterial(k, Fe);
    let Ne = J.index;
    const Xe = J.attributes.position;
    if (Ne === null) {
      if (Xe === void 0 || Xe.count === 0) return;
    } else if (Ne.count === 0) return;
    let Ve = 1;
    k.wireframe === !0 && ((Ne = he.getWireframeAttribute(J)), (Ve = 2)),
      O.setup(ne, k, Be, J, Ne);
    let He,
      nt = fe;
    Ne !== null && ((He = K.get(Ne)), (nt = ye), nt.setIndex(He));
    const si = Ne !== null ? Ne.count : Xe.count,
      zi = J.drawRange.start * Ve,
      Ui = J.drawRange.count * Ve,
      ln = Re !== null ? Re.start * Ve : 0,
      je = Re !== null ? Re.count * Ve : 1 / 0,
      Bi = Math.max(zi, ln),
      st = Math.min(si, zi + Ui, ln + je) - 1,
      kt = Math.max(0, st - Bi + 1);
    if (kt !== 0) {
      if (ne.isMesh)
        k.wireframe === !0
          ? (_e.setLineWidth(k.wireframeLinewidth * V()), nt.setMode(1))
          : nt.setMode(4);
      else if (ne.isLine) {
        let Nn = k.linewidth;
        Nn === void 0 && (Nn = 1),
          _e.setLineWidth(Nn * V()),
          ne.isLineSegments
            ? nt.setMode(1)
            : ne.isLineLoop
            ? nt.setMode(2)
            : nt.setMode(3);
      } else ne.isPoints ? nt.setMode(0) : ne.isSprite && nt.setMode(4);
      if (ne.isInstancedMesh) nt.renderInstances(Bi, kt, ne.count);
      else if (J.isInstancedBufferGeometry) {
        const Nn = Math.min(J.instanceCount, J._maxInstanceCount);
        nt.renderInstances(Bi, kt, Nn);
      } else nt.render(Bi, kt);
    }
  }),
    (this.compile = function (T, q) {
      function J(k, ne, Re) {
        k.transparent === !0 && k.side === $n
          ? ((k.side = jt),
            (k.needsUpdate = !0),
            Bt(k, ne, Re),
            (k.side = Er),
            (k.needsUpdate = !0),
            Bt(k, ne, Re),
            (k.side = $n))
          : Bt(k, ne, Re);
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
                const Fe = ne[Re];
                J(Fe, T, k);
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
  const qe = new Xh();
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
      if (p === !0) return;
      T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
        q.parent === null &&
          q.matrixWorldAutoUpdate === !0 &&
          q.updateMatrixWorld(),
        be.enabled === !0 &&
          be.isPresenting === !0 &&
          (be.cameraAutoUpdate === !0 && be.updateCamera(q),
          (q = be.getCamera())),
        T.isScene === !0 && T.onBeforeRender(m, T, q, y),
        (h = w.get(T, g.length)),
        h.init(),
        g.push(h),
        ue.multiplyMatrices(q.projectionMatrix, q.matrixWorldInverse),
        Z.setFromProjectionMatrix(ue),
        (U = this.localClippingEnabled),
        (W = v.init(this.clippingPlanes, U, q)),
        (f = se.get(T, d.length)),
        f.init(),
        d.push(f),
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
          const Fe = k[ne];
          bt(f, T, Fe, Fe.viewport);
        }
      } else bt(f, T, q);
      y !== null &&
        (A.updateMultisampleRenderTarget(y), A.updateRenderTargetMipmap(y)),
        T.isScene === !0 && T.onAfterRender(m, T, q),
        O.resetDefaultState(),
        (b = -1),
        (S = null),
        g.pop(),
        g.length > 0 ? (h = g[g.length - 1]) : (h = null),
        d.pop(),
        d.length > 0 ? (f = d[d.length - 1]) : (f = null);
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
          const Fe = pe.update(T),
            Be = T.material;
          Be.visible && f.push(T, Fe, Be, J, le.z, null);
        }
      } else if (
        (T.isMesh || T.isLine || T.isPoints) &&
        (T.isSkinnedMesh &&
          T.skeleton.frame !== Ee.render.frame &&
          (T.skeleton.update(), (T.skeleton.frame = Ee.render.frame)),
        !T.frustumCulled || Z.intersectsObject(T))
      ) {
        k && le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);
        const Fe = pe.update(T),
          Be = T.material;
        if (Array.isArray(Be)) {
          const Ne = Fe.groups;
          for (let Xe = 0, Ve = Ne.length; Xe < Ve; Xe++) {
            const He = Ne[Xe],
              nt = Be[He.materialIndex];
            nt && nt.visible && f.push(T, Fe, nt, J, le.z, He);
          }
        } else Be.visible && f.push(T, Fe, Be, J, le.z, null);
      }
    }
    const Re = T.children;
    for (let Fe = 0, Be = Re.length; Fe < Be; Fe++) pt(Re[Fe], q, J, k);
  }
  function bt(T, q, J, k) {
    const ne = T.opaque,
      Re = T.transmissive,
      Fe = T.transparent;
    h.setupLightsView(J),
      Re.length > 0 && ri(ne, q, J),
      k && _e.viewport(P.copy(k)),
      ne.length > 0 && et(ne, q, J),
      Re.length > 0 && et(Re, q, J),
      Fe.length > 0 && et(Fe, q, J),
      _e.buffers.depth.setTest(!0),
      _e.buffers.depth.setMask(!0),
      _e.buffers.color.setMask(!0),
      _e.setPolygonOffset(!1);
  }
  function ri(T, q, J) {
    const k = ve.isWebGL2;
    X === null &&
      (X = new Di(1, 1, {
        generateMipmaps: !0,
        type: ce.has('EXT_color_buffer_half_float') ? os : Pi,
        minFilter: xo,
        samples: k && s === !0 ? 4 : 0,
      })),
      m.getDrawingBufferSize(oe),
      k ? X.setSize(oe.x, oe.y) : X.setSize(to(oe.x), to(oe.y));
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
      const Fe = T[ne],
        Be = Fe.object,
        Ne = Fe.geometry,
        Xe = k === null ? Fe.material : k,
        Ve = Fe.group;
      Be.layers.test(J.layers) && yn(Be, q, J, Ne, Xe, Ve);
    }
  }
  function yn(T, q, J, k, ne, Re) {
    T.onBeforeRender(m, q, J, k, ne, Re),
      T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse, T.matrixWorld),
      T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
      ne.onBeforeRender(m, q, J, k, T, Re),
      ne.transparent === !0 && ne.side === $n
        ? ((ne.side = jt),
          (ne.needsUpdate = !0),
          m.renderBufferDirect(J, q, k, ne, T, Re),
          (ne.side = Er),
          (ne.needsUpdate = !0),
          m.renderBufferDirect(J, q, k, ne, T, Re),
          (ne.side = $n))
        : m.renderBufferDirect(J, q, k, ne, T, Re),
      T.onAfterRender(m, q, J, k, ne, Re);
  }
  function Bt(T, q, J) {
    q.isScene !== !0 && (q = we);
    const k = E.get(T),
      ne = h.state.lights,
      Re = h.state.shadowsArray,
      Fe = ne.state.version,
      Be = re.getParameters(T, ne.state, Re, q, J),
      Ne = re.getProgramCacheKey(Be);
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
    let Ve = Xe.get(Ne);
    if (Ve !== void 0) {
      if (k.currentProgram === Ve && k.lightsStateVersion === Fe)
        return Cl(T, Be), Ve;
    } else
      (Be.uniforms = re.getUniforms(T)),
        T.onBuild(J, Be, m),
        T.onBeforeCompile(Be, m),
        (Ve = re.acquireProgram(Be, Ne)),
        Xe.set(Ne, Ve),
        (k.uniforms = Be.uniforms);
    const He = k.uniforms;
    ((!T.isShaderMaterial && !T.isRawShaderMaterial) || T.clipping === !0) &&
      (He.clippingPlanes = v.uniform),
      Cl(T, Be),
      (k.needsLights = rd(T)),
      (k.lightsStateVersion = Fe),
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
      si = Xs.seqWithValue(nt.seq, He);
    return (k.currentProgram = Ve), (k.uniformsList = si), Ve;
  }
  function Cl(T, q) {
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
  function nd(T, q, J, k, ne) {
    q.isScene !== !0 && (q = we), A.resetTextureUnits();
    const Re = q.fog,
      Fe = k.isMeshStandardMaterial ? q.environment : null,
      Be =
        y === null
          ? m.outputEncoding
          : y.isXRRenderTarget === !0
          ? y.texture.encoding
          : Ri,
      Ne = (k.isMeshStandardMaterial ? j : H).get(k.envMap || Fe),
      Xe =
        k.vertexColors === !0 &&
        !!J.attributes.color &&
        J.attributes.color.itemSize === 4,
      Ve = !!k.normalMap && !!J.attributes.tangent,
      He = !!J.morphAttributes.position,
      nt = !!J.morphAttributes.normal,
      si = !!J.morphAttributes.color,
      zi = k.toneMapped ? m.toneMapping : Dn,
      Ui =
        J.morphAttributes.position ||
        J.morphAttributes.normal ||
        J.morphAttributes.color,
      ln = Ui !== void 0 ? Ui.length : 0,
      je = E.get(k),
      Bi = h.state.lights;
    if (W === !0 && (U === !0 || T !== S)) {
      const Ot = T === S && k.id === b;
      v.setState(k, T, Ot);
    }
    let st = !1;
    k.version === je.__version
      ? ((je.needsLights && je.lightsStateVersion !== Bi.state.version) ||
          je.outputEncoding !== Be ||
          (ne.isInstancedMesh && je.instancing === !1) ||
          (!ne.isInstancedMesh && je.instancing === !0) ||
          (ne.isSkinnedMesh && je.skinning === !1) ||
          (!ne.isSkinnedMesh && je.skinning === !0) ||
          je.envMap !== Ne ||
          (k.fog === !0 && je.fog !== Re) ||
          (je.numClippingPlanes !== void 0 &&
            (je.numClippingPlanes !== v.numPlanes ||
              je.numIntersection !== v.numIntersection)) ||
          je.vertexAlphas !== Xe ||
          je.vertexTangents !== Ve ||
          je.morphTargets !== He ||
          je.morphNormals !== nt ||
          je.morphColors !== si ||
          je.toneMapping !== zi ||
          (ve.isWebGL2 === !0 && je.morphTargetsCount !== ln)) &&
        (st = !0)
      : ((st = !0), (je.__version = k.version));
    let kt = je.currentProgram;
    st === !0 && (kt = Bt(k, q, ne));
    let Nn = !1,
      Or = !1,
      bo = !1;
    const Ct = kt.getUniforms(),
      oi = je.uniforms;
    if (
      (_e.useProgram(kt.program) && ((Nn = !0), (Or = !0), (bo = !0)),
      k.id !== b && ((b = k.id), (Or = !0)),
      Nn || S !== T)
    ) {
      if (
        (Ct.setValue(I, 'projectionMatrix', T.projectionMatrix),
        ve.logarithmicDepthBuffer &&
          Ct.setValue(I, 'logDepthBufFC', 2 / (Math.log(T.far + 1) / Math.LN2)),
        S !== T && ((S = T), (Or = !0), (bo = !0)),
        k.isShaderMaterial ||
          k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshStandardMaterial ||
          k.envMap)
      ) {
        const Ot = Ct.map.cameraPosition;
        Ot !== void 0 &&
          Ot.setValue(I, le.setFromMatrixPosition(T.matrixWorld));
      }
      (k.isMeshPhongMaterial ||
        k.isMeshToonMaterial ||
        k.isMeshLambertMaterial ||
        k.isMeshBasicMaterial ||
        k.isMeshStandardMaterial ||
        k.isShaderMaterial) &&
        Ct.setValue(I, 'isOrthographic', T.isOrthographicCamera === !0),
        (k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshLambertMaterial ||
          k.isMeshBasicMaterial ||
          k.isMeshStandardMaterial ||
          k.isShaderMaterial ||
          k.isShadowMaterial ||
          ne.isSkinnedMesh) &&
          Ct.setValue(I, 'viewMatrix', T.matrixWorldInverse);
    }
    if (ne.isSkinnedMesh) {
      Ct.setOptional(I, ne, 'bindMatrix'),
        Ct.setOptional(I, ne, 'bindMatrixInverse');
      const Ot = ne.skeleton;
      Ot &&
        (ve.floatVertexTextures
          ? (Ot.boneTexture === null && Ot.computeBoneTexture(),
            Ct.setValue(I, 'boneTexture', Ot.boneTexture, A),
            Ct.setValue(I, 'boneTextureSize', Ot.boneTextureSize))
          : console.warn(
              'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'
            ));
    }
    const So = J.morphAttributes;
    if (
      ((So.position !== void 0 ||
        So.normal !== void 0 ||
        (So.color !== void 0 && ve.isWebGL2 === !0)) &&
        Q.update(ne, J, k, kt),
      (Or || je.receiveShadow !== ne.receiveShadow) &&
        ((je.receiveShadow = ne.receiveShadow),
        Ct.setValue(I, 'receiveShadow', ne.receiveShadow)),
      k.isMeshGouraudMaterial &&
        k.envMap !== null &&
        ((oi.envMap.value = Ne),
        (oi.flipEnvMap.value =
          Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1)),
      Or &&
        (Ct.setValue(I, 'toneMappingExposure', m.toneMappingExposure),
        je.needsLights && id(oi, bo),
        Re && k.fog === !0 && me.refreshFogUniforms(oi, Re),
        me.refreshMaterialUniforms(oi, k, Y, R, X),
        Xs.upload(I, je.uniformsList, oi, A)),
      k.isShaderMaterial &&
        k.uniformsNeedUpdate === !0 &&
        (Xs.upload(I, je.uniformsList, oi, A), (k.uniformsNeedUpdate = !1)),
      k.isSpriteMaterial && Ct.setValue(I, 'center', ne.center),
      Ct.setValue(I, 'modelViewMatrix', ne.modelViewMatrix),
      Ct.setValue(I, 'normalMatrix', ne.normalMatrix),
      Ct.setValue(I, 'modelMatrix', ne.matrixWorld),
      k.isShaderMaterial || k.isRawShaderMaterial)
    ) {
      const Ot = k.uniformsGroups;
      for (let wo = 0, sd = Ot.length; wo < sd; wo++)
        if (ve.isWebGL2) {
          const Ll = Ot[wo];
          Me.update(Ll, kt), Me.bind(Ll, kt);
        } else
          console.warn(
            'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.'
          );
    }
    return kt;
  }
  function id(T, q) {
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
  function rd(T) {
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
      return y;
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
      (y = T), (_ = q), (x = J);
      let k = !0,
        ne = null,
        Re = !1,
        Fe = !1;
      if (T) {
        const Ne = E.get(T);
        Ne.__useDefaultFramebuffer !== void 0
          ? (_e.bindFramebuffer(36160, null), (k = !1))
          : Ne.__webglFramebuffer === void 0
          ? A.setupRenderTarget(T)
          : Ne.__hasExternalTextures &&
            A.rebindTextures(
              T,
              E.get(T.texture).__webglTexture,
              E.get(T.depthTexture).__webglTexture
            );
        const Xe = T.texture;
        (Xe.isData3DTexture ||
          Xe.isDataArrayTexture ||
          Xe.isCompressedArrayTexture) &&
          (Fe = !0);
        const Ve = E.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget
          ? ((ne = Ve[q]), (Re = !0))
          : ve.isWebGL2 && T.samples > 0 && A.useMultisampledRTT(T) === !1
          ? (ne = E.get(T).__webglMultisampledFramebuffer)
          : (ne = Ve),
          P.copy(T.viewport),
          B.copy(T.scissor),
          (M = T.scissorTest);
      } else
        P.copy(z).multiplyScalar(Y).floor(),
          B.copy(te).multiplyScalar(Y).floor(),
          (M = ie);
      if (
        (_e.bindFramebuffer(36160, ne) &&
          ve.drawBuffers &&
          k &&
          _e.drawBuffers(T, ne),
        _e.viewport(P),
        _e.scissor(B),
        _e.setScissorTest(M),
        Re)
      ) {
        const Ne = E.get(T.texture);
        I.framebufferTexture2D(36160, 36064, 34069 + q, Ne.__webglTexture, J);
      } else if (Fe) {
        const Ne = E.get(T.texture),
          Xe = q || 0;
        I.framebufferTextureLayer(36160, 36064, Ne.__webglTexture, J || 0, Xe);
      }
      b = -1;
    }),
    (this.readRenderTargetPixels = function (T, q, J, k, ne, Re, Fe) {
      if (!(T && T.isWebGLRenderTarget)) {
        console.error(
          'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
        );
        return;
      }
      let Be = E.get(T).__webglFramebuffer;
      if ((T.isWebGLCubeRenderTarget && Fe !== void 0 && (Be = Be[Fe]), Be)) {
        _e.bindFramebuffer(36160, Be);
        try {
          const Ne = T.texture,
            Xe = Ne.format,
            Ve = Ne.type;
          if (Xe !== nn && C.convert(Xe) !== I.getParameter(35739)) {
            console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
            );
            return;
          }
          const He =
            Ve === os &&
            (ce.has('EXT_color_buffer_half_float') ||
              (ve.isWebGL2 && ce.has('EXT_color_buffer_float')));
          if (
            Ve !== Pi &&
            C.convert(Ve) !== I.getParameter(35738) &&
            !(
              Ve === Mi &&
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
          const Ne = y !== null ? E.get(y).__webglFramebuffer : null;
          _e.bindFramebuffer(36160, Ne);
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
        Fe = C.convert(J.format),
        Be = C.convert(J.type);
      A.setTexture2D(J, 0),
        I.pixelStorei(37440, J.flipY),
        I.pixelStorei(37441, J.premultiplyAlpha),
        I.pixelStorei(3317, J.unpackAlignment),
        q.isDataTexture
          ? I.texSubImage2D(3553, k, T.x, T.y, ne, Re, Fe, Be, q.image.data)
          : q.isCompressedTexture
          ? I.compressedTexSubImage2D(
              3553,
              k,
              T.x,
              T.y,
              q.mipmaps[0].width,
              q.mipmaps[0].height,
              Fe,
              q.mipmaps[0].data
            )
          : I.texSubImage2D(3553, k, T.x, T.y, Fe, Be, q.image),
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
        Fe = T.max.y - T.min.y + 1,
        Be = T.max.z - T.min.z + 1,
        Ne = C.convert(k.format),
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
        si = I.getParameter(3316),
        zi = I.getParameter(3315),
        Ui = I.getParameter(32877),
        ln = J.isCompressedTexture ? J.mipmaps[0] : J.image;
      I.pixelStorei(3314, ln.width),
        I.pixelStorei(32878, ln.height),
        I.pixelStorei(3316, T.min.x),
        I.pixelStorei(3315, T.min.y),
        I.pixelStorei(32877, T.min.z),
        J.isDataTexture || J.isData3DTexture
          ? I.texSubImage3D(Ve, ne, q.x, q.y, q.z, Re, Fe, Be, Ne, Xe, ln.data)
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
              Fe,
              Be,
              Ne,
              ln.data
            ))
          : I.texSubImage3D(Ve, ne, q.x, q.y, q.z, Re, Fe, Be, Ne, Xe, ln),
        I.pixelStorei(3314, He),
        I.pixelStorei(32878, nt),
        I.pixelStorei(3316, si),
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
      (_ = 0), (x = 0), (y = null), _e.reset(), O.reset();
    }),
    typeof __THREE_DEVTOOLS__ < 'u' &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent('observe', { detail: this })
      );
}
class Xb extends Kh {}
Xb.prototype.isWebGL1Renderer = !0;
class jb extends Dt {
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
class $b {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = ka),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = In());
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
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = In()),
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
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = In()),
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
const Lt = new N();
class io {
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
      Lt.fromBufferAttribute(this, t),
        Lt.applyMatrix4(e),
        this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Lt.fromBufferAttribute(this, t),
        Lt.applyNormalMatrix(e),
        this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Lt.fromBufferAttribute(this, t),
        Lt.transformDirection(e),
        this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = Ze(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setXY(e, t, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = Ze(t, this.array)), (i = Ze(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Ze(t, this.array)),
        (i = Ze(i, this.array)),
        (r = Ze(r, this.array))),
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
        ((t = Ze(t, this.array)),
        (i = Ze(i, this.array)),
        (r = Ze(r, this.array)),
        (s = Ze(s, this.array))),
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
      return new on(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new io(
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
class Jh extends Ir {
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
const Vr = new N(),
  rr = new N(),
  sr = new N(),
  or = new Ie(),
  Gr = new Ie(),
  Qh = new lt(),
  Ns = new N(),
  Hr = new N(),
  zs = new N(),
  Bu = new Ie(),
  da = new Ie(),
  ku = new Ie();
class Yb extends Dt {
  constructor(e) {
    if (
      (super(), (this.isSprite = !0), (this.type = 'Sprite'), ir === void 0)
    ) {
      ir = new xn();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        i = new $b(t, 5);
      ir.setIndex([0, 1, 2, 0, 2, 3]),
        ir.setAttribute('position', new io(i, 3, 0, !1)),
        ir.setAttribute('uv', new io(i, 2, 3, !1));
    }
    (this.geometry = ir),
      (this.material = e !== void 0 ? e : new Jh()),
      (this.center = new Ie(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      rr.setFromMatrixScale(this.matrixWorld),
      Qh.copy(e.camera.matrixWorld),
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
    const a = this.center;
    Us(Ns.set(-0.5, -0.5, 0), sr, a, rr, r, s),
      Us(Hr.set(0.5, -0.5, 0), sr, a, rr, r, s),
      Us(zs.set(0.5, 0.5, 0), sr, a, rr, r, s),
      Bu.set(0, 0),
      da.set(1, 0),
      ku.set(1, 1);
    let o = e.ray.intersectTriangle(Ns, Hr, zs, !1, Vr);
    if (
      o === null &&
      (Us(Hr.set(-0.5, 0.5, 0), sr, a, rr, r, s),
      da.set(0, 1),
      (o = e.ray.intersectTriangle(Ns, zs, Hr, !1, Vr)),
      o === null)
    )
      return;
    const l = e.ray.origin.distanceTo(Vr);
    l < e.near ||
      l > e.far ||
      t.push({
        distance: l,
        point: Vr.clone(),
        uv: pn.getUV(Vr, Ns, Hr, zs, Bu, da, ku, new Ie()),
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
function Us(n, e, t, i, r, s) {
  or.subVectors(n, t).addScalar(0.5).multiply(i),
    r !== void 0
      ? ((Gr.x = s * or.x - r * or.y), (Gr.y = r * or.x + s * or.y))
      : Gr.copy(or),
    n.copy(e),
    (n.x += Gr.x),
    (n.y += Gr.y),
    n.applyMatrix4(Qh);
}
class ed extends Ir {
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
const Vu = new N(),
  Gu = new N(),
  Hu = new lt(),
  pa = new Uh(),
  Bs = new yo();
class Wu extends Dt {
  constructor(e = new xn(), t = new ed()) {
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
      e.setAttribute('lineDistance', new ei(i, 1));
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
      a = i.drawRange;
    if (
      (i.boundingSphere === null && i.computeBoundingSphere(),
      Bs.copy(i.boundingSphere),
      Bs.applyMatrix4(r),
      (Bs.radius += s),
      e.ray.intersectsSphere(Bs) === !1)
    )
      return;
    Hu.copy(r).invert(), pa.copy(e.ray).applyMatrix4(Hu);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = new N(),
      u = new N(),
      f = new N(),
      h = new N(),
      d = this.isLineSegments ? 2 : 1,
      g = i.index,
      p = i.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, a.start),
        x = Math.min(g.count, a.start + a.count);
      for (let y = _, b = x - 1; y < b; y += d) {
        const S = g.getX(y),
          P = g.getX(y + 1);
        if (
          (c.fromBufferAttribute(p, S),
          u.fromBufferAttribute(p, P),
          pa.distanceSqToSegment(c, u, h, f) > l)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const M = e.ray.origin.distanceTo(h);
        M < e.near ||
          M > e.far ||
          t.push({
            distance: M,
            point: f.clone().applyMatrix4(this.matrixWorld),
            index: y,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const _ = Math.max(0, a.start),
        x = Math.min(p.count, a.start + a.count);
      for (let y = _, b = x - 1; y < b; y += d) {
        if (
          (c.fromBufferAttribute(p, y),
          u.fromBufferAttribute(p, y + 1),
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
            index: y,
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
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
class Zb extends $t {
  constructor(e, t, i, r, s, a, o, l, c) {
    super(e, t, i, r, s, a, o, l, c),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class Kb {
  constructor() {
    (this.type = 'Curve'), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn('THREE.Curve: .getPoint() not implemented.'), null;
  }
  getPointAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
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
    let i,
      r = this.getPoint(0),
      s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      (i = this.getPoint(a / e)), (s += i.distanceTo(r)), t.push(s), (r = i);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const i = this.getLengths();
    let r = 0;
    const s = i.length;
    let a;
    t ? (a = t) : (a = e * i[s - 1]);
    let o = 0,
      l = s - 1,
      c;
    for (; o <= l; )
      if (((r = Math.floor(o + (l - o) / 2)), (c = i[r] - a), c < 0)) o = r + 1;
      else if (c > 0) l = r - 1;
      else {
        l = r;
        break;
      }
    if (((r = l), i[r] === a)) return r / (s - 1);
    const u = i[r],
      h = i[r + 1] - u,
      d = (a - u) / h;
    return (r + d) / (s - 1);
  }
  getTangent(e, t) {
    let r = e - 1e-4,
      s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const a = this.getPoint(r),
      o = this.getPoint(s),
      l = t || (a.isVector2 ? new Ie() : new N());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t) {
    const i = new N(),
      r = [],
      s = [],
      a = [],
      o = new N(),
      l = new lt();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      r[d] = this.getTangentAt(g, new N());
    }
    (s[0] = new N()), (a[0] = new N());
    let c = Number.MAX_VALUE;
    const u = Math.abs(r[0].x),
      f = Math.abs(r[0].y),
      h = Math.abs(r[0].z);
    u <= c && ((c = u), i.set(1, 0, 0)),
      f <= c && ((c = f), i.set(0, 1, 0)),
      h <= c && i.set(0, 0, 1),
      o.crossVectors(r[0], i).normalize(),
      s[0].crossVectors(r[0], o),
      a[0].crossVectors(r[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (
        ((s[d] = s[d - 1].clone()),
        (a[d] = a[d - 1].clone()),
        o.crossVectors(r[d - 1], r[d]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        const g = Math.acos(xt(r[d - 1].dot(r[d]), -1, 1));
        s[d].applyMatrix4(l.makeRotationAxis(o, g));
      }
      a[d].crossVectors(r[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(xt(s[0].dot(s[e]), -1, 1));
      (d /= e), r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(l.makeRotationAxis(r[g], d * g)),
          a[g].crossVectors(r[g], s[g]);
    }
    return { tangents: r, normals: s, binormals: a };
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
class Jb extends Kb {
  constructor(
    e = 0,
    t = 0,
    i = 1,
    r = 1,
    s = 0,
    a = Math.PI * 2,
    o = !1,
    l = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = 'EllipseCurve'),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = i),
      (this.yRadius = r),
      (this.aStartAngle = s),
      (this.aEndAngle = a),
      (this.aClockwise = o),
      (this.aRotation = l);
  }
  getPoint(e, t) {
    const i = t || new Ie(),
      r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += r;
    for (; s > r; ) s -= r;
    s < Number.EPSILON && (a ? (s = 0) : (s = r)),
      this.aClockwise === !0 && !a && (s === r ? (s = -r) : (s = s - r));
    const o = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(o),
      c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation),
        f = Math.sin(this.aRotation),
        h = l - this.aX,
        d = c - this.aY;
      (l = h * u - d * f + this.aX), (c = h * f + d * u + this.aY);
    }
    return i.set(l, c);
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
class Qb extends Jb {
  constructor(e, t, i, r, s, a) {
    super(e, t, i, i, r, s, a),
      (this.isArcCurve = !0),
      (this.type = 'ArcCurve');
  }
}
class qu {
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
          (this.phi = Math.acos(xt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent('register', { detail: { revision: Sl } })
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = Sl));
const Xu = { type: 'change' },
  ma = { type: 'start' },
  ju = { type: 'end' };
class eS extends Ni {
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
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
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
          i.dispatchEvent(Xu),
          i.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const C = new N(),
          O = new Ii().setFromUnitVectors(e.up, new N(0, 1, 0)),
          Me = O.clone().invert(),
          Te = new N(),
          be = new Ii(),
          Ce = 2 * Math.PI;
        return function () {
          const De = i.object.position;
          C.copy(De).sub(i.target),
            C.applyQuaternion(O),
            o.setFromVector3(C),
            i.autoRotate && s === r.NONE && L(B()),
            i.enableDamping
              ? ((o.theta += l.theta * i.dampingFactor),
                (o.phi += l.phi * i.dampingFactor))
              : ((o.theta += l.theta), (o.phi += l.phi));
          let ke = i.minAzimuthAngle,
            Ye = i.maxAzimuthAngle;
          return (
            isFinite(ke) &&
              isFinite(Ye) &&
              (ke < -Math.PI ? (ke += Ce) : ke > Math.PI && (ke -= Ce),
              Ye < -Math.PI ? (Ye += Ce) : Ye > Math.PI && (Ye -= Ce),
              ke <= Ye
                ? (o.theta = Math.max(ke, Math.min(Ye, o.theta)))
                : (o.theta =
                    o.theta > (ke + Ye) / 2
                      ? Math.max(ke, o.theta)
                      : Math.min(Ye, o.theta))),
            (o.phi = Math.max(
              i.minPolarAngle,
              Math.min(i.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            (o.radius *= c),
            (o.radius = Math.max(
              i.minDistance,
              Math.min(i.maxDistance, o.radius)
            )),
            i.enableDamping === !0
              ? i.target.addScaledVector(u, i.dampingFactor)
              : i.target.add(u),
            C.setFromSpherical(o),
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
            Te.distanceToSquared(i.object.position) > a ||
            8 * (1 - be.dot(i.object.quaternion)) > a
              ? (i.dispatchEvent(Xu),
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
    const a = 1e-6,
      o = new qu(),
      l = new qu();
    let c = 1;
    const u = new N();
    let f = !1;
    const h = new Ie(),
      d = new Ie(),
      g = new Ie(),
      m = new Ie(),
      p = new Ie(),
      _ = new Ie(),
      x = new Ie(),
      y = new Ie(),
      b = new Ie(),
      S = [],
      P = {};
    function B() {
      return ((2 * Math.PI) / 60 / 60) * i.autoRotateSpeed;
    }
    function M() {
      return Math.pow(0.95, i.zoomSpeed);
    }
    function L(C) {
      l.theta -= C;
    }
    function R(C) {
      l.phi -= C;
    }
    const Y = (function () {
        const C = new N();
        return function (Me, Te) {
          C.setFromMatrixColumn(Te, 0), C.multiplyScalar(-Me), u.add(C);
        };
      })(),
      de = (function () {
        const C = new N();
        return function (Me, Te) {
          i.screenSpacePanning === !0
            ? C.setFromMatrixColumn(Te, 1)
            : (C.setFromMatrixColumn(Te, 0), C.crossVectors(i.object.up, C)),
            C.multiplyScalar(Me),
            u.add(C);
        };
      })(),
      G = (function () {
        const C = new N();
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
    function z(C) {
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
    function U(C) {
      d.set(C.clientX, C.clientY),
        g.subVectors(d, h).multiplyScalar(i.rotateSpeed);
      const O = i.domElement;
      L((2 * Math.PI * g.x) / O.clientHeight),
        R((2 * Math.PI * g.y) / O.clientHeight),
        h.copy(d),
        i.update();
    }
    function X(C) {
      y.set(C.clientX, C.clientY),
        b.subVectors(y, x),
        b.y > 0 ? z(M()) : b.y < 0 && te(M()),
        x.copy(y),
        i.update();
    }
    function ue(C) {
      p.set(C.clientX, C.clientY),
        _.subVectors(p, m).multiplyScalar(i.panSpeed),
        G(_.x, _.y),
        m.copy(p),
        i.update();
    }
    function oe(C) {
      C.deltaY < 0 ? te(M()) : C.deltaY > 0 && z(M()), i.update();
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
      if (S.length === 1) h.set(S[0].pageX, S[0].pageY);
      else {
        const C = 0.5 * (S[0].pageX + S[1].pageX),
          O = 0.5 * (S[0].pageY + S[1].pageY);
        h.set(C, O);
      }
    }
    function V() {
      if (S.length === 1) m.set(S[0].pageX, S[0].pageY);
      else {
        const C = 0.5 * (S[0].pageX + S[1].pageX),
          O = 0.5 * (S[0].pageY + S[1].pageY);
        m.set(C, O);
      }
    }
    function I() {
      const C = S[0].pageX - S[1].pageX,
        O = S[0].pageY - S[1].pageY,
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
      if (S.length == 1) d.set(C.pageX, C.pageY);
      else {
        const Me = ye(C),
          Te = 0.5 * (C.pageX + Me.x),
          be = 0.5 * (C.pageY + Me.y);
        d.set(Te, be);
      }
      g.subVectors(d, h).multiplyScalar(i.rotateSpeed);
      const O = i.domElement;
      L((2 * Math.PI * g.x) / O.clientHeight),
        R((2 * Math.PI * g.y) / O.clientHeight),
        h.copy(d);
    }
    function _e(C) {
      if (S.length === 1) p.set(C.pageX, C.pageY);
      else {
        const O = ye(C),
          Me = 0.5 * (C.pageX + O.x),
          Te = 0.5 * (C.pageY + O.y);
        p.set(Me, Te);
      }
      _.subVectors(p, m).multiplyScalar(i.panSpeed), G(_.x, _.y), m.copy(p);
    }
    function Ee(C) {
      const O = ye(C),
        Me = C.pageX - O.x,
        Te = C.pageY - O.y,
        be = Math.sqrt(Me * Me + Te * Te);
      y.set(0, be),
        b.set(0, Math.pow(y.y / x.y, i.zoomSpeed)),
        z(b.y),
        x.copy(y);
    }
    function E(C) {
      i.enableZoom && Ee(C), i.enablePan && _e(C);
    }
    function A(C) {
      i.enableZoom && Ee(C), i.enableRotate && ve(C);
    }
    function H(C) {
      i.enabled !== !1 &&
        (S.length === 0 &&
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
        S.length === 0 &&
          (i.domElement.releasePointerCapture(C.pointerId),
          i.domElement.removeEventListener('pointermove', j),
          i.domElement.removeEventListener('pointerup', K)),
        i.dispatchEvent(ju),
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
          U(C);
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
        (C.preventDefault(), i.dispatchEvent(ma), oe(C), i.dispatchEvent(ju));
    }
    function se(C) {
      i.enabled === !1 || i.enablePan === !1 || le(C);
    }
    function w(C) {
      switch ((fe(C), S.length)) {
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
      S.push(C);
    }
    function Q(C) {
      delete P[C.pointerId];
      for (let O = 0; O < S.length; O++)
        if (S[O].pointerId == C.pointerId) {
          S.splice(O, 1);
          return;
        }
    }
    function fe(C) {
      let O = P[C.pointerId];
      O === void 0 && ((O = new Ie()), (P[C.pointerId] = O)),
        O.set(C.pageX, C.pageY);
    }
    function ye(C) {
      const O = C.pointerId === S[0].pointerId ? S[1] : S[0];
      return P[O.pointerId];
    }
    i.domElement.addEventListener('contextmenu', F),
      i.domElement.addEventListener('pointerdown', H),
      i.domElement.addEventListener('pointercancel', he),
      i.domElement.addEventListener('wheel', me, { passive: !1 }),
      this.update();
  }
}
const tS = { class: 'text-cloud' },
  nS = vn({
    __name: 'Index1',
    setup(n) {
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
          coreGroup: null,
          dimensionGroup: null,
        },
        t = () => {
          var d, g;
          (e.container = document.querySelector('.text-cloud')),
            (e.width = (d = e.container.offsetWidth) != null ? d : 0),
            (e.height = (g = e.container.offsetHeight) != null ? g : 0),
            (e.scene = new jb());
        },
        i = () => {
          (e.camera = new Wt(75, e.width / e.height, 0.1, 1e3)),
            e.camera.position.set(0, 0, 100);
        },
        r = () => {
          var g;
          const d = window.devicePixelRatio || 1;
          (e.renderer = new Kh({ antialias: !0, alpha: !0 })),
            e.renderer.setClearColor(16777215),
            e.renderer.setSize(e.width, e.height),
            e.renderer.setPixelRatio(d),
            (e.renderer.shadowMap.enabled = !0),
            (g = e.container) == null || g.appendChild(e.renderer.domElement);
        },
        s = () => {
          (e.controls = new eS(e.camera, e.renderer.domElement)),
            (e.controls.enableDamping = !0),
            (e.controls.enableZoom = !1);
        },
        a = (d, g, m, p, _) => {
          const x = document.createElement('canvas'),
            y = window.devicePixelRatio || 1;
          (x.width = p * y), (x.height = _ * y);
          const b = x.getContext('2d');
          return (
            b.scale(y, y),
            b.clearRect(0, 0, x.width, x.height),
            b.beginPath(),
            b.translate(p / 2, _ / 2),
            (b.fillStyle = m[Math.floor(Math.random() * m.length)]),
            (b.font = `${g || 12}px Arial`),
            (b.textBaseline = 'middle'),
            (b.textAlign = 'center'),
            b.fillText(d, 0, 0),
            x
          );
        },
        o = (d, g = 14, m, p = 600, _ = 300) => {
          const x = a(d, g, m, p, _),
            y = new Zb(x),
            b = new Jh({ map: y }),
            S = new Yb(b);
          return S.scale.set(p / 10, _ / 10, 1), S;
        },
        l = () => {
          e.textGroup = new fr();
          for (let d = 0, g = bc.length; d < g; d++) {
            const m = o(bc[d], (Math.random() + 1) * 16, [
                '#ff9974',
                '#35ccd4',
              ]),
              p = Math.acos(-1 + (2 * d) / g),
              _ = Math.sqrt(g * Math.PI) * p;
            m.position.setFromSphericalCoords(40, p, _), e.textGroup.add(m);
          }
          e.scene.add(e.textGroup);
        },
        c = () => {
          const d = new xn(),
            g = new Qb(0, 0, 60, 0, 2 * Math.PI, !1),
            m = g.getPoints(100);
          d.setFromPoints(m);
          const p = new ed({ color: 8947848 });
          (e.dimensionGroup = new fr()),
            (e.arcCurve = new Wu(d, p)),
            e.dimensionGroup.add(new Wu(d, p));
          for (let _ = 0, x = Ti.length; _ < x; _++) {
            const y = o(Ti[_], 18, ['#4c84ff']),
              { x: b, y: S } = g.getPointAt((1 / Ti.length) * _);
            y.position.set(b, S, 0), e.dimensionGroup.add(y);
          }
          (e.dimensionGroup.rotation.x = ou.degToRad(-85)),
            (e.dimensionGroup.rotation.y = ou.degToRad(-15)),
            e.scene.add(e.dimensionGroup);
        };
      let u = new Date().getTime();
      const f = () => {
          let d = new Date().getTime(),
            g = d - u;
          e.textGroup.rotateY(-1e-4 * g),
            e.textGroup.rotateX(1e-4 * g),
            e.dimensionGroup.rotateZ(2e-4 * g),
            e.renderer.render(e.scene, e.camera),
            e.controls.update(),
            (u = d),
            requestAnimationFrame(f);
        },
        h = () => {
          t(), i(), r(), s(), l(), c(), f(), console.log(e);
        };
      return (
        ls(() => {
          h();
        }),
        (d, g) => (at(), ut('div', tS))
      );
    },
  });
const td = [
    { path: '/textWheel', name: 'TextWheel', component: p_ },
    { path: '/textSphere', name: 'TextSphere', component: M_ },
    { path: '/textRing', name: 'TextRing', component: N_ },
    { path: '/textCloud', name: 'TextCloud', component: nS },
  ],
  iS = Cg({
    history: Xm(),
    routes: [{ path: '/', redirect: '/textCloud' }, ...td],
  }),
  rS = { class: 'wrapper' },
  sS = { class: 'container' },
  oS = vn({
    __name: 'App',
    setup(n) {
      return (e, t) => (
        at(),
        ut('div', rS, [
          Je('nav', null, [
            (at(!0),
            ut(
              wt,
              null,
              Mr(
                ft(td),
                (i, r) => (
                  at(),
                  Hp(
                    ft(oh),
                    { key: i.name, to: i.path },
                    {
                      default: Af(() => [
                        qf(vr(`${r ? ' | ' : ''}${i.name}`), 1),
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
          Je('section', sS, [_t(ft(ah))]),
        ])
      );
    },
  });
const Al = Sm(oS);
Al.use(Am());
Al.use(iS);
Al.mount('#app');