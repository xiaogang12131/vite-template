import {
  d as Oe,
  c as ee,
  o as Ge,
  a as F,
  n as Ee,
  u as U,
  b as V,
  r as W,
  e as Xe,
  f as D,
  F as me,
  g as ye,
  w as xe,
  v as be,
  h as er,
  i as we,
  t as Me,
} from './index.3ebe2365.js';
import { w as rr, c as _e, d as Ce } from './data.36e83042.js';
import { T as tr } from './TagCloud.04910727.js';
import { _ as nr } from './_plugin-vue_export-helper.cdc0426e.js';
const ar = e => (e * Math.PI) / 180,
  Te = (e, r) => {
    const n = ar(360 / r),
      i = [];
    for (let t = 0; t < r; t += 1)
      i.push({ x: e * Math.cos(n * t), y: e * Math.sin(n * t) });
    return i;
  };
var Le = {
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
  ne = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0,
  },
  ir = [
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
  N = { CSS: {}, springs: {} };
function I(e, r, n) {
  return Math.min(Math.max(e, r), n);
}
function H(e, r) {
  return e.indexOf(r) > -1;
}
function X(e, r) {
  return e.apply(null, r);
}
var l = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return H(Object.prototype.toString.call(e), 'Object');
  },
  pth: function (e) {
    return l.obj(e) && e.hasOwnProperty('totalLength');
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || l.svg(e);
  },
  str: function (e) {
    return typeof e == 'string';
  },
  fnc: function (e) {
    return typeof e == 'function';
  },
  und: function (e) {
    return typeof e > 'u';
  },
  nil: function (e) {
    return l.und(e) || e === null;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return l.hex(e) || l.rgb(e) || l.hsl(e);
  },
  key: function (e) {
    return (
      !Le.hasOwnProperty(e) &&
      !ne.hasOwnProperty(e) &&
      e !== 'targets' &&
      e !== 'keyframes'
    );
  },
};
function Be(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r
    ? r[1].split(',').map(function (n) {
        return parseFloat(n);
      })
    : [];
}
function Ae(e, r) {
  var n = Be(e),
    i = I(l.und(n[0]) ? 1 : n[0], 0.1, 100),
    t = I(l.und(n[1]) ? 100 : n[1], 0.1, 100),
    o = I(l.und(n[2]) ? 10 : n[2], 0.1, 100),
    u = I(l.und(n[3]) ? 0 : n[3], 0.1, 100),
    s = Math.sqrt(t / i),
    a = o / (2 * Math.sqrt(t * i)),
    h = a < 1 ? s * Math.sqrt(1 - a * a) : 0,
    c = 1,
    f = a < 1 ? (a * s + -u) / h : -u + s;
  function p(m) {
    var d = r ? (r * m) / 1e3 : m;
    return (
      a < 1
        ? (d =
            Math.exp(-d * a * s) * (c * Math.cos(h * d) + f * Math.sin(h * d)))
        : (d = (c + f * d) * Math.exp(-d * s)),
      m === 0 || m === 1 ? m : 1 - d
    );
  }
  function _() {
    var m = N.springs[e];
    if (m) return m;
    for (var d = 1 / 6, y = 0, w = 0; ; )
      if (((y += d), p(y) === 1)) {
        if ((w++, w >= 16)) break;
      } else w = 0;
    var g = y * d * 1e3;
    return (N.springs[e] = g), g;
  }
  return r ? p : _;
}
function or(e) {
  return (
    e === void 0 && (e = 10),
    function (r) {
      return Math.ceil(I(r, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var ur = (function () {
    var e = 11,
      r = 1 / (e - 1);
    function n(c, f) {
      return 1 - 3 * f + 3 * c;
    }
    function i(c, f) {
      return 3 * f - 6 * c;
    }
    function t(c) {
      return 3 * c;
    }
    function o(c, f, p) {
      return ((n(f, p) * c + i(f, p)) * c + t(f)) * c;
    }
    function u(c, f, p) {
      return 3 * n(f, p) * c * c + 2 * i(f, p) * c + t(f);
    }
    function s(c, f, p, _, m) {
      var d,
        y,
        w = 0;
      do (y = f + (p - f) / 2), (d = o(y, _, m) - c), d > 0 ? (p = y) : (f = y);
      while (Math.abs(d) > 1e-7 && ++w < 10);
      return y;
    }
    function a(c, f, p, _) {
      for (var m = 0; m < 4; ++m) {
        var d = u(f, p, _);
        if (d === 0) return f;
        var y = o(f, p, _) - c;
        f -= y / d;
      }
      return f;
    }
    function h(c, f, p, _) {
      if (!(0 <= c && c <= 1 && 0 <= p && p <= 1)) return;
      var m = new Float32Array(e);
      if (c !== f || p !== _) for (var d = 0; d < e; ++d) m[d] = o(d * r, c, p);
      function y(w) {
        for (var g = 0, v = 1, C = e - 1; v !== C && m[v] <= w; ++v) g += r;
        --v;
        var O = (w - m[v]) / (m[v + 1] - m[v]),
          x = g + O * r,
          E = u(x, c, p);
        return E >= 0.001 ? a(w, x, c, p) : E === 0 ? x : s(w, g, g + r, c, p);
      }
      return function (w) {
        return (c === f && p === _) || w === 0 || w === 1 ? w : o(y(w), f, _);
      };
    }
    return h;
  })(),
  Fe = (function () {
    var e = {
        linear: function () {
          return function (i) {
            return i;
          };
        },
      },
      r = {
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
            for (var t, o = 4; i < ((t = Math.pow(2, --o)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - o) -
              7.5625 * Math.pow((t * 3 - 2) / 22 - i, 2)
            );
          };
        },
        Elastic: function (i, t) {
          i === void 0 && (i = 1), t === void 0 && (t = 0.5);
          var o = I(i, 1, 10),
            u = I(t, 0.1, 2);
          return function (s) {
            return s === 0 || s === 1
              ? s
              : -o *
                  Math.pow(2, 10 * (s - 1)) *
                  Math.sin(
                    ((s - 1 - (u / (Math.PI * 2)) * Math.asin(1 / o)) *
                      (Math.PI * 2)) /
                      u
                  );
          };
        },
      },
      n = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
    return (
      n.forEach(function (i, t) {
        r[i] = function () {
          return function (o) {
            return Math.pow(o, t + 2);
          };
        };
      }),
      Object.keys(r).forEach(function (i) {
        var t = r[i];
        (e['easeIn' + i] = t),
          (e['easeOut' + i] = function (o, u) {
            return function (s) {
              return 1 - t(o, u)(1 - s);
            };
          }),
          (e['easeInOut' + i] = function (o, u) {
            return function (s) {
              return s < 0.5 ? t(o, u)(s * 2) / 2 : 1 - t(o, u)(s * -2 + 2) / 2;
            };
          }),
          (e['easeOutIn' + i] = function (o, u) {
            return function (s) {
              return s < 0.5
                ? (1 - t(o, u)(1 - s * 2)) / 2
                : (t(o, u)(s * 2 - 1) + 1) / 2;
            };
          });
      }),
      e
    );
  })();
function ae(e, r) {
  if (l.fnc(e)) return e;
  var n = e.split('(')[0],
    i = Fe[n],
    t = Be(e);
  switch (n) {
    case 'spring':
      return Ae(e, r);
    case 'cubicBezier':
      return X(ur, t);
    case 'steps':
      return X(or, t);
    default:
      return X(i, t);
  }
}
function Ve(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function Z(e, r) {
  for (
    var n = e.length,
      i = arguments.length >= 2 ? arguments[1] : void 0,
      t = [],
      o = 0;
    o < n;
    o++
  )
    if (o in e) {
      var u = e[o];
      r.call(i, u, o, e) && t.push(u);
    }
  return t;
}
function K(e) {
  return e.reduce(function (r, n) {
    return r.concat(l.arr(n) ? K(n) : n);
  }, []);
}
function Se(e) {
  return l.arr(e)
    ? e
    : (l.str(e) && (e = Ve(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection
        ? [].slice.call(e)
        : [e]);
}
function ie(e, r) {
  return e.some(function (n) {
    return n === r;
  });
}
function oe(e) {
  var r = {};
  for (var n in e) r[n] = e[n];
  return r;
}
function re(e, r) {
  var n = oe(e);
  for (var i in e) n[i] = r.hasOwnProperty(i) ? r[i] : e[i];
  return n;
}
function Q(e, r) {
  var n = oe(e);
  for (var i in r) n[i] = l.und(e[i]) ? r[i] : e[i];
  return n;
}
function sr(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? 'rgba(' + r[1] + ',1)' : e;
}
function cr(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    n = e.replace(r, function (s, a, h, c) {
      return a + a + h + h + c + c;
    }),
    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
    t = parseInt(i[1], 16),
    o = parseInt(i[2], 16),
    u = parseInt(i[3], 16);
  return 'rgba(' + t + ',' + o + ',' + u + ',1)';
}
function fr(e) {
  var r =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
    n = parseInt(r[1], 10) / 360,
    i = parseInt(r[2], 10) / 100,
    t = parseInt(r[3], 10) / 100,
    o = r[4] || 1;
  function u(p, _, m) {
    return (
      m < 0 && (m += 1),
      m > 1 && (m -= 1),
      m < 1 / 6
        ? p + (_ - p) * 6 * m
        : m < 1 / 2
        ? _
        : m < 2 / 3
        ? p + (_ - p) * (2 / 3 - m) * 6
        : p
    );
  }
  var s, a, h;
  if (i == 0) s = a = h = t;
  else {
    var c = t < 0.5 ? t * (1 + i) : t + i - t * i,
      f = 2 * t - c;
    (s = u(f, c, n + 1 / 3)), (a = u(f, c, n)), (h = u(f, c, n - 1 / 3));
  }
  return 'rgba(' + s * 255 + ',' + a * 255 + ',' + h * 255 + ',' + o + ')';
}
function lr(e) {
  if (l.rgb(e)) return sr(e);
  if (l.hex(e)) return cr(e);
  if (l.hsl(e)) return fr(e);
}
function k(e) {
  var r =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e
    );
  if (r) return r[1];
}
function dr(e) {
  if (H(e, 'translate') || e === 'perspective') return 'px';
  if (H(e, 'rotate') || H(e, 'skew')) return 'deg';
}
function te(e, r) {
  return l.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function P(e, r) {
  return e.getAttribute(r);
}
function ue(e, r, n) {
  var i = k(r);
  if (ie([n, 'deg', 'rad', 'turn'], i)) return r;
  var t = N.CSS[r + n];
  if (!l.und(t)) return t;
  var o = 100,
    u = document.createElement(e.tagName),
    s =
      e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  s.appendChild(u), (u.style.position = 'absolute'), (u.style.width = o + n);
  var a = o / u.offsetWidth;
  s.removeChild(u);
  var h = a * parseFloat(r);
  return (N.CSS[r + n] = h), h;
}
function Re(e, r, n) {
  if (r in e.style) {
    var i = r.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      t = e.style[r] || getComputedStyle(e).getPropertyValue(i) || '0';
    return n ? ue(e, t, n) : t;
  }
}
function se(e, r) {
  if (l.dom(e) && !l.inp(e) && (!l.nil(P(e, r)) || (l.svg(e) && e[r])))
    return 'attribute';
  if (l.dom(e) && ie(ir, r)) return 'transform';
  if (l.dom(e) && r !== 'transform' && Re(e, r)) return 'css';
  if (e[r] != null) return 'object';
}
function ze(e) {
  if (!!l.dom(e)) {
    for (
      var r = e.style.transform || '',
        n = /(\w+)\(([^)]*)\)/g,
        i = new Map(),
        t;
      (t = n.exec(r));

    )
      i.set(t[1], t[2]);
    return i;
  }
}
function vr(e, r, n, i) {
  var t = H(r, 'scale') ? 1 : 0 + dr(r),
    o = ze(e).get(r) || t;
  return (
    n && (n.transforms.list.set(r, o), (n.transforms.last = r)),
    i ? ue(e, o, i) : o
  );
}
function ce(e, r, n, i) {
  switch (se(e, r)) {
    case 'transform':
      return vr(e, r, i, n);
    case 'css':
      return Re(e, r, n);
    case 'attribute':
      return P(e, r);
    default:
      return e[r] || 0;
  }
}
function fe(e, r) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n) return e;
  var i = k(e) || 0,
    t = parseFloat(r),
    o = parseFloat(e.replace(n[0], ''));
  switch (n[0][0]) {
    case '+':
      return t + o + i;
    case '-':
      return t - o + i;
    case '*':
      return t * o + i;
  }
}
function je(e, r) {
  if (l.col(e)) return lr(e);
  if (/\s/g.test(e)) return e;
  var n = k(e),
    i = n ? e.substr(0, e.length - n.length) : e;
  return r ? i + r : i;
}
function le(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function gr(e) {
  return Math.PI * 2 * P(e, 'r');
}
function hr(e) {
  return P(e, 'width') * 2 + P(e, 'height') * 2;
}
function pr(e) {
  return le({ x: P(e, 'x1'), y: P(e, 'y1') }, { x: P(e, 'x2'), y: P(e, 'y2') });
}
function $e(e) {
  for (var r = e.points, n = 0, i, t = 0; t < r.numberOfItems; t++) {
    var o = r.getItem(t);
    t > 0 && (n += le(i, o)), (i = o);
  }
  return n;
}
function mr(e) {
  var r = e.points;
  return $e(e) + le(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function We(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case 'circle':
      return gr(e);
    case 'rect':
      return hr(e);
    case 'line':
      return pr(e);
    case 'polyline':
      return $e(e);
    case 'polygon':
      return mr(e);
  }
}
function yr(e) {
  var r = We(e);
  return e.setAttribute('stroke-dasharray', r), r;
}
function xr(e) {
  for (var r = e.parentNode; l.svg(r) && l.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function He(e, r) {
  var n = r || {},
    i = n.el || xr(e),
    t = i.getBoundingClientRect(),
    o = P(i, 'viewBox'),
    u = t.width,
    s = t.height,
    a = n.viewBox || (o ? o.split(' ') : [0, 0, u, s]);
  return {
    el: i,
    viewBox: a,
    x: a[0] / 1,
    y: a[1] / 1,
    w: u,
    h: s,
    vW: a[2],
    vH: a[3],
  };
}
function br(e, r) {
  var n = l.str(e) ? Ve(e)[0] : e,
    i = r || 100;
  return function (t) {
    return { property: t, el: n, svg: He(n), totalLength: We(n) * (i / 100) };
  };
}
function wr(e, r, n) {
  function i(c) {
    c === void 0 && (c = 0);
    var f = r + c >= 1 ? r + c : 0;
    return e.el.getPointAtLength(f);
  }
  var t = He(e.el, e.svg),
    o = i(),
    u = i(-1),
    s = i(1),
    a = n ? 1 : t.w / t.vW,
    h = n ? 1 : t.h / t.vH;
  switch (e.property) {
    case 'x':
      return (o.x - t.x) * a;
    case 'y':
      return (o.y - t.y) * h;
    case 'angle':
      return (Math.atan2(s.y - u.y, s.x - u.x) * 180) / Math.PI;
  }
}
function Ie(e, r) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    i = je(l.pth(e) ? e.totalLength : e, r) + '';
  return {
    original: i,
    numbers: i.match(n) ? i.match(n).map(Number) : [0],
    strings: l.str(e) || r ? i.split(n) : [],
  };
}
function de(e) {
  var r = e ? K(l.arr(e) ? e.map(Se) : Se(e)) : [];
  return Z(r, function (n, i, t) {
    return t.indexOf(n) === i;
  });
}
function qe(e) {
  var r = de(e);
  return r.map(function (n, i) {
    return { target: n, id: i, total: r.length, transforms: { list: ze(n) } };
  });
}
function Mr(e, r) {
  var n = oe(r);
  if ((/^spring/.test(n.easing) && (n.duration = Ae(n.easing)), l.arr(e))) {
    var i = e.length,
      t = i === 2 && !l.obj(e[0]);
    t ? (e = { value: e }) : l.fnc(r.duration) || (n.duration = r.duration / i);
  }
  var o = l.arr(e) ? e : [e];
  return o
    .map(function (u, s) {
      var a = l.obj(u) && !l.pth(u) ? u : { value: u };
      return (
        l.und(a.delay) && (a.delay = s ? 0 : r.delay),
        l.und(a.endDelay) && (a.endDelay = s === o.length - 1 ? r.endDelay : 0),
        a
      );
    })
    .map(function (u) {
      return Q(u, n);
    });
}
function _r(e) {
  for (
    var r = Z(
        K(
          e.map(function (o) {
            return Object.keys(o);
          })
        ),
        function (o) {
          return l.key(o);
        }
      ).reduce(function (o, u) {
        return o.indexOf(u) < 0 && o.push(u), o;
      }, []),
      n = {},
      i = function (o) {
        var u = r[o];
        n[u] = e.map(function (s) {
          var a = {};
          for (var h in s)
            l.key(h) ? h == u && (a.value = s[h]) : (a[h] = s[h]);
          return a;
        });
      },
      t = 0;
    t < r.length;
    t++
  )
    i(t);
  return n;
}
function Cr(e, r) {
  var n = [],
    i = r.keyframes;
  i && (r = Q(_r(i), r));
  for (var t in r) l.key(t) && n.push({ name: t, tweens: Mr(r[t], e) });
  return n;
}
function Tr(e, r) {
  var n = {};
  for (var i in e) {
    var t = te(e[i], r);
    l.arr(t) &&
      ((t = t.map(function (o) {
        return te(o, r);
      })),
      t.length === 1 && (t = t[0])),
      (n[i] = t);
  }
  return (
    (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n
  );
}
function Sr(e, r) {
  var n;
  return e.tweens.map(function (i) {
    var t = Tr(i, r),
      o = t.value,
      u = l.arr(o) ? o[1] : o,
      s = k(u),
      a = ce(r.target, e.name, s, r),
      h = n ? n.to.original : a,
      c = l.arr(o) ? o[0] : h,
      f = k(c) || k(a),
      p = s || f;
    return (
      l.und(u) && (u = h),
      (t.from = Ie(c, p)),
      (t.to = Ie(fe(u, c), p)),
      (t.start = n ? n.end : 0),
      (t.end = t.start + t.delay + t.duration + t.endDelay),
      (t.easing = ae(t.easing, t.duration)),
      (t.isPath = l.pth(o)),
      (t.isPathTargetInsideSVG = t.isPath && l.svg(r.target)),
      (t.isColor = l.col(t.from.original)),
      t.isColor && (t.round = 1),
      (n = t),
      t
    );
  });
}
var Ue = {
  css: function (e, r, n) {
    return (e.style[r] = n);
  },
  attribute: function (e, r, n) {
    return e.setAttribute(r, n);
  },
  object: function (e, r, n) {
    return (e[r] = n);
  },
  transform: function (e, r, n, i, t) {
    if ((i.list.set(r, n), r === i.last || t)) {
      var o = '';
      i.list.forEach(function (u, s) {
        o += s + '(' + u + ') ';
      }),
        (e.style.transform = o);
    }
  },
};
function Ne(e, r) {
  var n = qe(e);
  n.forEach(function (i) {
    for (var t in r) {
      var o = te(r[t], i),
        u = i.target,
        s = k(o),
        a = ce(u, t, s, i),
        h = s || k(a),
        c = fe(je(o, h), a),
        f = se(u, t);
      Ue[f](u, t, c, i.transforms, !0);
    }
  });
}
function Ir(e, r) {
  var n = se(e.target, r.name);
  if (n) {
    var i = Sr(r, e),
      t = i[i.length - 1];
    return {
      type: n,
      property: r.name,
      animatable: e,
      tweens: i,
      duration: t.end,
      delay: i[0].delay,
      endDelay: t.endDelay,
    };
  }
}
function Pr(e, r) {
  return Z(
    K(
      e.map(function (n) {
        return r.map(function (i) {
          return Ir(n, i);
        });
      })
    ),
    function (n) {
      return !l.und(n);
    }
  );
}
function Ze(e, r) {
  var n = e.length,
    i = function (o) {
      return o.timelineOffset ? o.timelineOffset : 0;
    },
    t = {};
  return (
    (t.duration = n
      ? Math.max.apply(
          Math,
          e.map(function (o) {
            return i(o) + o.duration;
          })
        )
      : r.duration),
    (t.delay = n
      ? Math.min.apply(
          Math,
          e.map(function (o) {
            return i(o) + o.delay;
          })
        )
      : r.delay),
    (t.endDelay = n
      ? t.duration -
        Math.max.apply(
          Math,
          e.map(function (o) {
            return i(o) + o.duration - o.endDelay;
          })
        )
      : r.endDelay),
    t
  );
}
var Pe = 0;
function Dr(e) {
  var r = re(Le, e),
    n = re(ne, e),
    i = Cr(n, e),
    t = qe(e.targets),
    o = Pr(t, i),
    u = Ze(o, n),
    s = Pe;
  return (
    Pe++,
    Q(r, {
      id: s,
      children: [],
      animatables: t,
      animations: o,
      duration: u.duration,
      delay: u.delay,
      endDelay: u.endDelay,
    })
  );
}
var S = [],
  Ke = (function () {
    var e;
    function r() {
      !e &&
        (!De() || !b.suspendWhenDocumentHidden) &&
        S.length > 0 &&
        (e = requestAnimationFrame(n));
    }
    function n(t) {
      for (var o = S.length, u = 0; u < o; ) {
        var s = S[u];
        s.paused ? (S.splice(u, 1), o--) : (s.tick(t), u++);
      }
      e = u > 0 ? requestAnimationFrame(n) : void 0;
    }
    function i() {
      !b.suspendWhenDocumentHidden ||
        (De()
          ? (e = cancelAnimationFrame(e))
          : (S.forEach(function (t) {
              return t._onDocumentVisibility();
            }),
            Ke()));
    }
    return (
      typeof document < 'u' && document.addEventListener('visibilitychange', i),
      r
    );
  })();
function De() {
  return !!document && document.hidden;
}
function b(e) {
  e === void 0 && (e = {});
  var r = 0,
    n = 0,
    i = 0,
    t,
    o = 0,
    u = null;
  function s(g) {
    var v =
      window.Promise &&
      new Promise(function (C) {
        return (u = C);
      });
    return (g.finished = v), v;
  }
  var a = Dr(e);
  s(a);
  function h() {
    var g = a.direction;
    g !== 'alternate' && (a.direction = g !== 'normal' ? 'normal' : 'reverse'),
      (a.reversed = !a.reversed),
      t.forEach(function (v) {
        return (v.reversed = a.reversed);
      });
  }
  function c(g) {
    return a.reversed ? a.duration - g : g;
  }
  function f() {
    (r = 0), (n = c(a.currentTime) * (1 / b.speed));
  }
  function p(g, v) {
    v && v.seek(g - v.timelineOffset);
  }
  function _(g) {
    if (a.reversePlayback) for (var C = o; C--; ) p(g, t[C]);
    else for (var v = 0; v < o; v++) p(g, t[v]);
  }
  function m(g) {
    for (var v = 0, C = a.animations, O = C.length; v < O; ) {
      var x = C[v],
        E = x.animatable,
        R = x.tweens,
        L = R.length - 1,
        M = R[L];
      L &&
        (M =
          Z(R, function (Ye) {
            return g < Ye.end;
          })[0] || M);
      for (
        var B = I(g - M.start - M.delay, 0, M.duration) / M.duration,
          q = isNaN(B) ? 1 : M.easing(B),
          T = M.to.strings,
          J = M.round,
          Y = [],
          Je = M.to.numbers.length,
          A = void 0,
          z = 0;
        z < Je;
        z++
      ) {
        var j = void 0,
          ve = M.to.numbers[z],
          ge = M.from.numbers[z] || 0;
        M.isPath
          ? (j = wr(M.value, q * ve, M.isPathTargetInsideSVG))
          : (j = ge + q * (ve - ge)),
          J && ((M.isColor && z > 2) || (j = Math.round(j * J) / J)),
          Y.push(j);
      }
      var he = T.length;
      if (!he) A = Y[0];
      else {
        A = T[0];
        for (var $ = 0; $ < he; $++) {
          T[$];
          var pe = T[$ + 1],
            G = Y[$];
          isNaN(G) || (pe ? (A += G + pe) : (A += G + ' '));
        }
      }
      Ue[x.type](E.target, x.property, A, E.transforms),
        (x.currentValue = A),
        v++;
    }
  }
  function d(g) {
    a[g] && !a.passThrough && a[g](a);
  }
  function y() {
    a.remaining && a.remaining !== !0 && a.remaining--;
  }
  function w(g) {
    var v = a.duration,
      C = a.delay,
      O = v - a.endDelay,
      x = c(g);
    (a.progress = I((x / v) * 100, 0, 100)),
      (a.reversePlayback = x < a.currentTime),
      t && _(x),
      !a.began && a.currentTime > 0 && ((a.began = !0), d('begin')),
      !a.loopBegan && a.currentTime > 0 && ((a.loopBegan = !0), d('loopBegin')),
      x <= C && a.currentTime !== 0 && m(0),
      ((x >= O && a.currentTime !== v) || !v) && m(v),
      x > C && x < O
        ? (a.changeBegan ||
            ((a.changeBegan = !0), (a.changeCompleted = !1), d('changeBegin')),
          d('change'),
          m(x))
        : a.changeBegan &&
          ((a.changeCompleted = !0), (a.changeBegan = !1), d('changeComplete')),
      (a.currentTime = I(x, 0, v)),
      a.began && d('update'),
      g >= v &&
        ((n = 0),
        y(),
        a.remaining
          ? ((r = i),
            d('loopComplete'),
            (a.loopBegan = !1),
            a.direction === 'alternate' && h())
          : ((a.paused = !0),
            a.completed ||
              ((a.completed = !0),
              d('loopComplete'),
              d('complete'),
              !a.passThrough && 'Promise' in window && (u(), s(a)))));
  }
  return (
    (a.reset = function () {
      var g = a.direction;
      (a.passThrough = !1),
        (a.currentTime = 0),
        (a.progress = 0),
        (a.paused = !0),
        (a.began = !1),
        (a.loopBegan = !1),
        (a.changeBegan = !1),
        (a.completed = !1),
        (a.changeCompleted = !1),
        (a.reversePlayback = !1),
        (a.reversed = g === 'reverse'),
        (a.remaining = a.loop),
        (t = a.children),
        (o = t.length);
      for (var v = o; v--; ) a.children[v].reset();
      ((a.reversed && a.loop !== !0) || (g === 'alternate' && a.loop === 1)) &&
        a.remaining++,
        m(a.reversed ? a.duration : 0);
    }),
    (a._onDocumentVisibility = f),
    (a.set = function (g, v) {
      return Ne(g, v), a;
    }),
    (a.tick = function (g) {
      (i = g), r || (r = i), w((i + (n - r)) * b.speed);
    }),
    (a.seek = function (g) {
      w(c(g));
    }),
    (a.pause = function () {
      (a.paused = !0), f();
    }),
    (a.play = function () {
      !a.paused ||
        (a.completed && a.reset(), (a.paused = !1), S.push(a), f(), Ke());
    }),
    (a.reverse = function () {
      h(), (a.completed = !a.reversed), f();
    }),
    (a.restart = function () {
      a.reset(), a.play();
    }),
    (a.remove = function (g) {
      var v = de(g);
      Qe(v, a);
    }),
    a.reset(),
    a.autoplay && a.play(),
    a
  );
}
function ke(e, r) {
  for (var n = r.length; n--; ) ie(e, r[n].animatable.target) && r.splice(n, 1);
}
function Qe(e, r) {
  var n = r.animations,
    i = r.children;
  ke(e, n);
  for (var t = i.length; t--; ) {
    var o = i[t],
      u = o.animations;
    ke(e, u), !u.length && !o.children.length && i.splice(t, 1);
  }
  !n.length && !i.length && r.pause();
}
function kr(e) {
  for (var r = de(e), n = S.length; n--; ) {
    var i = S[n];
    Qe(r, i);
  }
}
function Or(e, r) {
  r === void 0 && (r = {});
  var n = r.direction || 'normal',
    i = r.easing ? ae(r.easing) : null,
    t = r.grid,
    o = r.axis,
    u = r.from || 0,
    s = u === 'first',
    a = u === 'center',
    h = u === 'last',
    c = l.arr(e),
    f = parseFloat(c ? e[0] : e),
    p = c ? parseFloat(e[1]) : 0,
    _ = k(c ? e[1] : e) || 0,
    m = r.start || 0 + (c ? f : 0),
    d = [],
    y = 0;
  return function (w, g, v) {
    if ((s && (u = 0), a && (u = (v - 1) / 2), h && (u = v - 1), !d.length)) {
      for (var C = 0; C < v; C++) {
        if (!t) d.push(Math.abs(u - C));
        else {
          var O = a ? (t[0] - 1) / 2 : u % t[0],
            x = a ? (t[1] - 1) / 2 : Math.floor(u / t[0]),
            E = C % t[0],
            R = Math.floor(C / t[0]),
            L = O - E,
            M = x - R,
            B = Math.sqrt(L * L + M * M);
          o === 'x' && (B = -L), o === 'y' && (B = -M), d.push(B);
        }
        y = Math.max.apply(Math, d);
      }
      i &&
        (d = d.map(function (T) {
          return i(T / y) * y;
        })),
        n === 'reverse' &&
          (d = d.map(function (T) {
            return o ? (T < 0 ? T * -1 : -T) : Math.abs(y - T);
          }));
    }
    var q = c ? (p - f) / y : f;
    return m + q * (Math.round(d[g] * 100) / 100) + _;
  };
}
function Er(e) {
  e === void 0 && (e = {});
  var r = b(e);
  return (
    (r.duration = 0),
    (r.add = function (n, i) {
      var t = S.indexOf(r),
        o = r.children;
      t > -1 && S.splice(t, 1);
      function u(p) {
        p.passThrough = !0;
      }
      for (var s = 0; s < o.length; s++) u(o[s]);
      var a = Q(n, re(ne, e));
      a.targets = a.targets || e.targets;
      var h = r.duration;
      (a.autoplay = !1),
        (a.direction = r.direction),
        (a.timelineOffset = l.und(i) ? h : fe(i, h)),
        u(r),
        r.seek(a.timelineOffset);
      var c = b(a);
      u(c), o.push(c);
      var f = Ze(o, e);
      return (
        (r.delay = f.delay),
        (r.endDelay = f.endDelay),
        (r.duration = f.duration),
        r.seek(0),
        r.reset(),
        r.autoplay && r.play(),
        r
      );
    }),
    r
  );
}
b.version = '3.2.1';
b.speed = 1;
b.suspendWhenDocumentHidden = !0;
b.running = S;
b.remove = kr;
b.get = ce;
b.set = Ne;
b.convertPx = ue;
b.path = br;
b.setDashoffset = yr;
b.stagger = Or;
b.timeline = Er;
b.easing = ae;
b.penner = Fe;
b.random = function (e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
const Lr = Oe({
  __name: 'TagCloud',
  props: {
    name: { type: String, required: !0, default: 'tag' },
    data: { type: Array, required: !1, default: () => [] },
    options: { type: Object, required: !1, default: () => ({}) },
  },
  setup(e) {
    const r = e,
      n = [
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
      i = ee(() => `${r.name} tag-cloud`),
      t = () => {
        const u = document.querySelectorAll(`.${r.name} .tagcloud--item`);
        for (const s of u) {
          const a = Math.floor(Math.random() * 3);
          (s.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][a]),
            (s.style.fontSize = ['12px', '16px', '18px'][a]),
            (s.style.fontWeight = 'bolder');
        }
      },
      o = () => {
        const u = {
          useContainerInlineStyles: !1,
          radius: 120,
          keep: !0,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          ...r.options,
        };
        tr(
          [document.querySelector(`.${r.name}`)],
          r.data.length ? r.data : n,
          u
        ),
          t();
      };
    return (
      Ge(() => {
        o();
      }),
      (u, s) => (V(), F('div', { class: Ee(U(i)) }, null, 2))
    );
  },
});
const Br = nr(Lr, [['__scopeId', 'data-v-2ff06d8d']]),
  Ar = { class: 'wheel-wrapper' },
  Fr = { class: 'wheel' },
  Vr = { class: 'wheel-dimension' },
  Rr = { class: 'wheel-text' },
  zr = { class: 'wheel-core' },
  jr = { class: 'wheel-text' },
  $r = { class: 'word-content' },
  Nr = Oe({
    __name: 'Index2',
    setup(e) {
      const r = W(),
        n = W();
      W();
      const i = W(),
        t = Xe({
          cR: 200,
          cCount: 10,
          dR: 400,
          dCount: 8,
          textWidth: 100,
          textHeight: 50,
        }),
        o = W(!0),
        u = ee(() =>
          Te(t.cR, _e.length).map((a, h) => ({
            x: a.x - t.textWidth / 2,
            y: a.y - t.textHeight / 2,
            fontSize: 12 * (Math.random() + 1),
            value: _e[h],
          }))
        ),
        s = ee(() =>
          Te(t.dR, Ce.length).map((a, h) => ({
            ...a,
            x: a.x - t.textWidth / 2,
            y: a.y - t.textHeight / 2,
            value: Ce[h],
          }))
        );
      return (a, h) => (
        V(),
        F('div', Ar, [
          D('div', Fr, [
            D('div', Vr, [
              D(
                'div',
                {
                  ref_key: 'wheelDimensionRef',
                  ref: i,
                  class: 'dimension-content',
                },
                [
                  D('div', Rr, [
                    (V(!0),
                    F(
                      me,
                      null,
                      ye(
                        U(s),
                        (c, f) => (
                          V(),
                          F(
                            'div',
                            {
                              key: f,
                              class: 'text',
                              style: we({ top: `${c.y}px`, left: `${c.x}px` }),
                            },
                            Me(c.value),
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
            D('div', zr, [
              D(
                'div',
                { ref_key: 'wheelCoreRef', ref: r, class: 'core-content' },
                [
                  D('div', jr, [
                    (V(!0),
                    F(
                      me,
                      null,
                      ye(
                        U(u),
                        (c, f) => (
                          V(),
                          F(
                            'div',
                            {
                              key: f,
                              class: 'text',
                              style: we({
                                top: `${c.y}px`,
                                left: `${c.x}px`,
                                fontSize: `${c.fontSize}px`,
                              }),
                            },
                            Me(c.value),
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
            D(
              'div',
              {
                ref_key: 'wheelWordRef',
                ref: n,
                class: Ee(['wheel-word', { 'wheel-tag': o.value }]),
              },
              [
                xe(er(Br, { data: U(rr) }, null, 8, ['data']), [[be, o.value]]),
                xe(D('div', $r, null, 512), [[be, !o.value]]),
              ],
              2
            ),
          ]),
        ])
      );
    },
  });
export { Nr as default };
