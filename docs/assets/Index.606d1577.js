import { c as f, w as l } from './data.36e83042.js';
import {
  d as w,
  r as m,
  b as r,
  a as c,
  f as n,
  F as u,
  g as h,
  i as p,
  t as x,
  e as $,
  c as v,
  u as g,
  h as D,
} from './index.05ccd6f1.js';
import { _ as R } from './_plugin-vue_export-helper.cdc0426e.js';
const S = _ => (_ * Math.PI) / 180,
  y = (_, s) => {
    const d = S(360 / s),
      i = [];
    for (let e = 0; e < s; e += 1)
      i.push({ x: _ * Math.cos(d * e), y: _ * Math.sin(d * e) });
    return i;
  },
  C = { class: 'rotate' },
  z = { class: 'content' },
  I = { class: 'box' },
  B = w({
    __name: 'RotateImage',
    setup(_) {
      const s = m([
          '\u5E74\u4EFD',
          '\u5B63\u5EA6',
          '\u540C\u6BD4',
          '\u73AF\u6BD4',
          '\u6392\u540D',
          '\u5DEE\u5F02',
          '\u5229\u6DA6',
        ]),
        d = i => ({
          transform: `rotateY(${
            (360 / s.value.length) * i
          }deg) rotateZ(-90deg) translateZ(160px)`,
        });
      return (i, e) => (
        r(),
        c('div', C, [
          n('div', z, [
            n('div', I, [
              (r(!0),
              c(
                u,
                null,
                h(
                  s.value,
                  (a, t) => (
                    r(),
                    c(
                      'div',
                      { key: t, class: 'circle', style: p(d(t)) },
                      x(a),
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
const E = R(B, [['__scopeId', 'data-v-904bfc5a']]),
  k = { class: 'ring-wrapper' },
  F = { class: 'wheel' },
  M = { class: 'ring core-ring' },
  b = { ref: 'wheelCoreRef', class: 'content dimension-content' },
  A = { class: 'wheel-text' },
  H = { class: 'ring word-ring' },
  L = { ref: 'wheelCoreRef', class: 'content word-content' },
  W = { class: 'wheel-text' },
  Z = w({
    __name: 'Index',
    setup(_) {
      const s = $({ cR: 200, cCount: 10, textWidth: 100, textHeight: 50 }),
        d = v(() =>
          y(s.cR, s.cCount).map((e, a) => {
            const t = 12 * (Math.random() + 1),
              o = f[a].length * t;
            return {
              x: e.x - o / 2,
              y: e.y - s.textHeight / 2,
              fontSize: t,
              width: o,
              value: f[a],
            };
          })
        ),
        i = v(() =>
          y(s.cR, l.length).map((e, a) => {
            const t = 12 * (Math.random() + 1),
              o = l[a].length * t;
            return {
              x: e.x - o / 2,
              y: e.y - s.textHeight / 2,
              fontSize: t,
              width: o,
              value: l[a],
            };
          })
        );
      return (e, a) => (
        r(),
        c('div', k, [
          n('div', F, [
            n('div', M, [
              n(
                'div',
                b,
                [
                  n('div', A, [
                    (r(!0),
                    c(
                      u,
                      null,
                      h(
                        g(d),
                        (t, o) => (
                          r(),
                          c(
                            'div',
                            {
                              key: o,
                              class: 'text',
                              style: p({
                                top: `${t.y}px`,
                                left: `${t.x}px`,
                                width: `${t.width}px`,
                                fontSize: `${t.fontSize}px`,
                              }),
                            },
                            x(t.value),
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
            n('div', H, [
              n(
                'div',
                L,
                [
                  n('div', W, [
                    (r(!0),
                    c(
                      u,
                      null,
                      h(
                        g(i),
                        (t, o) => (
                          r(),
                          c(
                            'div',
                            {
                              key: o,
                              class: 'text',
                              style: p({
                                top: `${t.y}px`,
                                left: `${t.x}px`,
                                width: `${t.width}px`,
                                fontSize: `${t.fontSize}px`,
                              }),
                            },
                            x(t.value),
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
            D(E),
          ]),
        ])
      );
    },
  });
export { Z as default };
