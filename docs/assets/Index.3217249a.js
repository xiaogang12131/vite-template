import { d as g, w as x, c as v } from './data.36e83042.js';
import { T as h } from './TagCloud.04910727.js';
import {
  d as l,
  c as y,
  o as S,
  a as u,
  n as C,
  u as o,
  b as _,
  f as a,
  h as n,
} from './index.690a1545.js';
import { _ as T } from './_plugin-vue_export-helper.cdc0426e.js';
const q = l({
  __name: 'TagCloud',
  props: {
    name: { type: String, required: !0, default: 'tag' },
    data: { type: Array, required: !1, default: () => [] },
    options: { type: Object, required: !1, default: () => ({}) },
  },
  setup(c) {
    const e = c,
      r = [
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
      p = y(() => `${e.name} tag-cloud`),
      m = () => {
        const t = document.querySelectorAll(`.${e.name} .tagcloud--item`);
        for (const s of t) {
          const i = Math.floor(Math.random() * 3);
          (s.style.color = ['#ff9974', '#4c84ff', '#35ccd4'][i]),
            (s.style.fontSize = ['16px', '20px', '24px'][i]);
        }
      },
      f = () => {
        const t = {
          radius: 120,
          keep: !0,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          ...e.options,
        };
        h(
          [document.querySelector(`.${e.name}`)],
          e.data.length ? e.data : r,
          t
        ),
          m();
      };
    return (
      S(() => {
        f();
      }),
      (t, s) => (_(), u('div', { class: C(o(p)) }, null, 2))
    );
  },
});
const d = T(q, [['__scopeId', 'data-v-fae24696']]),
  w = { class: 'sphere-wrapper' },
  I = { class: 'content' },
  $ = { class: 'dimension-cloud' },
  B = { class: 'core-cloud' },
  D = { class: 'word-cloud' },
  z = l({
    __name: 'Index',
    setup(c) {
      return (e, r) => (
        _(),
        u('div', w, [
          a('div', I, [
            a('div', $, [
              n(
                d,
                {
                  name: 'dimension',
                  data: o(g),
                  options: { radius: 100, direction: 225 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            a('div', B, [
              n(
                d,
                {
                  name: 'core',
                  data: o(x),
                  options: { radius: 200, direction: 90 },
                },
                null,
                8,
                ['data']
              ),
            ]),
            a('div', D, [
              n(
                d,
                { name: 'word', data: o(v), options: { radius: 100 } },
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
export { z as default };
