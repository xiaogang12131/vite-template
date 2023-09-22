var P =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  w = { exports: {} };
/*!
 * TagCloud.js v2.3.0
 * Copyright (c) 2016-2022 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function (M, z) {
  (function (y, d) {
    M.exports = d();
  })(P, function () {
    function y(a, i) {
      if (!(a instanceof i))
        throw new TypeError('Cannot call a class as a function');
    }
    function d(a, i) {
      for (var e = 0; e < i.length; e++) {
        var t = i[e];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          'value' in t && (t.writable = !0),
          Object.defineProperty(a, t.key, t);
      }
    }
    function T(a, i, e) {
      return i && d(a.prototype, i), e && d(a, e), a;
    }
    function O(a, i, e) {
      return (
        i in a
          ? Object.defineProperty(a, i, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = e),
        a
      );
    }
    function p() {
      return (
        (p =
          Object.assign ||
          function (a) {
            for (var i = 1; i < arguments.length; i++) {
              var e = arguments[i];
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            }
            return a;
          }),
        p.apply(this, arguments)
      );
    }
    function x(a, i) {
      var e = Object.keys(a);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(a);
        i &&
          (t = t.filter(function (n) {
            return Object.getOwnPropertyDescriptor(a, n).enumerable;
          })),
          e.push.apply(e, t);
      }
      return e;
    }
    function v(a) {
      for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i] != null ? arguments[i] : {};
        i % 2
          ? x(Object(e), !0).forEach(function (t) {
              O(a, t, e[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
          : x(Object(e)).forEach(function (t) {
              Object.defineProperty(
                a,
                t,
                Object.getOwnPropertyDescriptor(e, t)
              );
            });
      }
      return a;
    }
    var f = (function () {
      function a() {
        var i =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : document.body,
          e = arguments.length > 1 ? arguments[1] : void 0,
          t = arguments.length > 2 ? arguments[2] : void 0;
        y(this, a);
        var n = this;
        if (!i || i.nodeType !== 1) return new Error('Incorrect element type');
        (n.$container = i),
          (n.texts = e || []),
          (n.config = v(v({}, a._defaultConfig), t || {})),
          (n.radius = n.config.radius),
          (n.depth = 2 * n.radius),
          (n.size = 1.5 * n.radius),
          (n.maxSpeed = a._getMaxSpeed(n.config.maxSpeed)),
          (n.initSpeed = a._getInitSpeed(n.config.initSpeed)),
          (n.direction = n.config.direction),
          (n.keep = n.config.keep),
          (n.paused = !1),
          n._createElment(),
          n._init(),
          a.list.push({ el: n.$el, container: i, instance: n });
      }
      return (
        T(
          a,
          [
            {
              key: '_createElment',
              value: function () {
                var e = this,
                  t = document.createElement('div');
                (t.className = e.config.containerClass),
                  e.config.useContainerInlineStyles &&
                    ((t.style.position = 'relative'),
                    (t.style.width = ''.concat(2 * e.radius, 'px')),
                    (t.style.height = ''.concat(2 * e.radius, 'px'))),
                  (e.items = []),
                  e.texts.forEach(function (n, r) {
                    var o = e._createTextItem(n, r);
                    t.appendChild(o.el), e.items.push(o);
                  }),
                  e.$container.appendChild(t),
                  (e.$el = t);
              },
            },
            {
              key: '_createTextItem',
              value: function (e) {
                var t =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0,
                  n = this,
                  r = document.createElement('span');
                if (
                  ((r.className = n.config.itemClass),
                  n.config.useItemInlineStyles)
                ) {
                  (r.style.willChange = 'transform, opacity, filter'),
                    (r.style.position = 'absolute'),
                    (r.style.top = '50%'),
                    (r.style.left = '50%'),
                    (r.style.zIndex = t + 1),
                    (r.style.filter = 'alpha(opacity=0)'),
                    (r.style.opacity = 0);
                  var o = '50% 50%';
                  (r.style.WebkitTransformOrigin = o),
                    (r.style.MozTransformOrigin = o),
                    (r.style.OTransformOrigin = o),
                    (r.style.transformOrigin = o);
                  var s = 'translate3d(-50%, -50%, 0) scale(1)';
                  (r.style.WebkitTransform = s),
                    (r.style.MozTransform = s),
                    (r.style.OTransform = s),
                    (r.style.transform = s);
                }
                return (r.innerText = e), v({ el: r }, n._computePosition(t));
              },
            },
            {
              key: '_computePosition',
              value: function (e) {
                var t =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1,
                  n = this,
                  r = n.texts.length;
                t && (e = Math.floor(Math.random() * (r + 1)));
                var o = Math.acos(-1 + (2 * e + 1) / r),
                  s = Math.sqrt((r + 1) * Math.PI) * o;
                return {
                  x: (n.size * Math.cos(s) * Math.sin(o)) / 2,
                  y: (n.size * Math.sin(s) * Math.sin(o)) / 2,
                  z: (n.size * Math.cos(o)) / 2,
                };
              },
            },
            {
              key: '_requestInterval',
              value: function (e, t) {
                var n = (function () {
                    return window.requestAnimationFrame;
                  })(),
                  r = new Date().getTime(),
                  o = {};
                function s() {
                  o.value = n(s);
                  var u = new Date().getTime(),
                    l = u - r;
                  l >= t && (e.call(), (r = new Date().getTime()));
                }
                return (o.value = n(s)), o;
              },
            },
            {
              key: '_init',
              value: function () {
                var e = this;
                (e.active = !1),
                  (e.mouseX0 =
                    e.initSpeed * Math.sin(e.direction * (Math.PI / 180))),
                  (e.mouseY0 =
                    -e.initSpeed * Math.cos(e.direction * (Math.PI / 180))),
                  (e.mouseX = e.mouseX0),
                  (e.mouseY = e.mouseY0);
                var t = window.matchMedia('(hover: hover)');
                (!t || t.matches) &&
                  (a._on(e.$el, 'mouseover', function () {
                    e.active = !0;
                  }),
                  a._on(e.$el, 'mouseout', function () {
                    e.active = !1;
                  }),
                  a._on(e.keep ? window : e.$el, 'mousemove', function (n) {
                    n = n || window.event;
                    var r = e.$el.getBoundingClientRect();
                    (e.mouseX = (n.clientX - (r.left + r.width / 2)) / 5),
                      (e.mouseY = (n.clientY - (r.top + r.height / 2)) / 5);
                  })),
                  e._next(),
                  (e.interval = e._requestInterval(function () {
                    e._next.call(e);
                  }, 10));
              },
            },
            {
              key: '_next',
              value: function () {
                var e = this;
                if (!e.paused) {
                  !e.keep &&
                    !e.active &&
                    ((e.mouseX =
                      Math.abs(e.mouseX - e.mouseX0) < 1
                        ? e.mouseX0
                        : (e.mouseX + e.mouseX0) / 2),
                    (e.mouseY =
                      Math.abs(e.mouseY - e.mouseY0) < 1
                        ? e.mouseY0
                        : (e.mouseY + e.mouseY0) / 2));
                  var t =
                      -(
                        Math.min(Math.max(-e.mouseY, -e.size), e.size) /
                        e.radius
                      ) * e.maxSpeed,
                    n =
                      (Math.min(Math.max(-e.mouseX, -e.size), e.size) /
                        e.radius) *
                      e.maxSpeed;
                  if (!(Math.abs(t) <= 0.01 && Math.abs(n) <= 0.01)) {
                    var r = Math.PI / 180,
                      o = [
                        Math.sin(t * r),
                        Math.cos(t * r),
                        Math.sin(n * r),
                        Math.cos(n * r),
                      ];
                    e.items.forEach(function (s) {
                      var u = s.x,
                        l = s.y * o[1] + s.z * -o[0],
                        _ = s.y * o[0] + s.z * o[1],
                        S = u * o[3] + _ * o[2],
                        C = l,
                        b = _ * o[3] - u * o[2],
                        g = (2 * e.depth) / (2 * e.depth + b);
                      (s.x = S), (s.y = C), (s.z = b), (s.scale = g.toFixed(3));
                      var m = g * g - 0.25;
                      m = (m > 1 ? 1 : m).toFixed(3);
                      var c = s.el,
                        E = (s.x - c.offsetWidth / 2).toFixed(2),
                        k = (s.y - c.offsetHeight / 2).toFixed(2),
                        h = 'translate3d('
                          .concat(E, 'px, ')
                          .concat(k, 'px, 0) scale(')
                          .concat(s.scale, ')');
                      (c.style.WebkitTransform = h),
                        (c.style.MozTransform = h),
                        (c.style.OTransform = h),
                        (c.style.transform = h),
                        (c.style.filter = 'alpha(opacity='.concat(
                          100 * m,
                          ')'
                        )),
                        (c.style.opacity = m);
                    });
                  }
                }
              },
            },
            {
              key: 'update',
              value: function (e) {
                var t = this;
                (t.texts = e || []),
                  t.texts.forEach(function (s, u) {
                    var l = t.items[u];
                    l ||
                      ((l = t._createTextItem(s, u)),
                      p(l, t._computePosition(u, !0)),
                      t.$el.appendChild(l.el),
                      t.items.push(l)),
                      (l.el.innerText = s);
                  });
                var n = t.texts.length,
                  r = t.items.length;
                if (n < r) {
                  var o = t.items.splice(n, r - n);
                  o.forEach(function (s) {
                    t.$el.removeChild(s.el);
                  });
                }
              },
            },
            {
              key: 'destroy',
              value: function () {
                var e = this;
                e.interval = null;
                var t = a.list.findIndex(function (n) {
                  return n.el === e.$el;
                });
                t !== -1 && a.list.splice(t, 1),
                  e.$container && e.$el && e.$container.removeChild(e.$el);
              },
            },
            {
              key: 'pause',
              value: function () {
                var e = this;
                e.paused = !0;
              },
            },
            {
              key: 'resume',
              value: function () {
                var e = this;
                e.paused = !1;
              },
            },
          ],
          [
            {
              key: '_on',
              value: function (e, t, n, r) {
                e.addEventListener
                  ? e.addEventListener(t, n, r)
                  : e.attachEvent
                  ? e.attachEvent('on'.concat(t), n)
                  : (e['on'.concat(t)] = n);
              },
            },
          ]
        ),
        a
      );
    })();
    (f.list = []),
      (f._defaultConfig = {
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
      (f._getMaxSpeed = function (a) {
        return { slow: 0.5, normal: 1, fast: 2 }[a] || 1;
      }),
      (f._getInitSpeed = function (a) {
        return { slow: 16, normal: 32, fast: 80 }[a] || 32;
      });
    var I = function (a, i, e) {
      typeof a == 'string' && (a = document.querySelectorAll(a)),
        a.forEach || (a = [a]);
      var t = [];
      return (
        a.forEach(function (n) {
          n && t.push(new f(n, i, e));
        }),
        t.length <= 1 ? t[0] : t
      );
    };
    return I;
  });
})(w);
const $ = w.exports;
export { $ as T };
