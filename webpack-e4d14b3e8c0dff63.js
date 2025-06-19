/* 注入代码 */

let prevText = '';

setInterval(() => {
  const list = document.querySelectorAll('div.px-8.mx-auto.pt-6.w-full > div:not(.justify-end):last-of-type pre > .relative > div');
  const texts = Array.from(list).map((item) => item.textContent);
  const nowText = texts.join('\n\n');
  if (nowText !== prevText) {
    prevText = nowText;
    console.log(texts);
  }
}, 1000);

/* 下面的代码不要动 */
( () => {
    "use strict";
    var e = {}
      , t = {};
    function r(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var o = t[a] = {
            exports: {}
        }
          , c = !0;
        try {
            e[a].call(o.exports, o, o.exports, r),
            c = !1
        } finally {
            c && delete t[a]
        }
        return o.exports
    }
    r.m = e,
    ( () => {
        var e = [];
        r.O = (t, a, n, o) => {
            if (a) {
                o = o || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > o; c--)
                    e[c] = e[c - 1];
                e[c] = [a, n, o];
                return
            }
            for (var f = 1 / 0, c = 0; c < e.length; c++) {
                for (var [a,n,o] = e[c], d = !0, i = 0; i < a.length; i++)
                    (!1 & o || f >= o) && Object.keys(r.O).every(e => r.O[e](a[i])) ? a.splice(i--, 1) : (d = !1,
                    o < f && (f = o));
                if (d) {
                    e.splice(c--, 1);
                    var l = n();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
    }
    )(),
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    ( () => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        r.t = function(a, n) {
            if (1 & n && (a = this(a)),
            8 & n || "object" == typeof a && a && (4 & n && a.__esModule || 16 & n && "function" == typeof a.then))
                return a;
            var o = Object.create(null);
            r.r(o);
            var c = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var f = 2 & n && a; "object" == typeof f && !~e.indexOf(f); f = t(f))
                Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
            return c.default = () => a,
            r.d(o, c),
            o
        }
    }
    )(),
    r.d = (e, t) => {
        for (var a in t)
            r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    r.f = {},
    r.e = e => Promise.all(Object.keys(r.f).reduce( (t, a) => (r.f[a](e, t),
    t), [])),
    r.u = e => 4472 === e ? "static/chunks/4472-6827ff7720de1d6f.js" : "static/chunks/" + (({
        1613: "3e4f334f",
        4219: "703630e8",
        5036: "c88fdbb8"
    })[e] || e) + "." + ({
        167: "6e1d71fe84f4d8ff",
        267: "d9bd66aec450499e",
        300: "515881c6c621666f",
        609: "d16bdb71b99989d9",
        713: "b8e305343bba77d5",
        1033: "dfa13f5029fee899",
        1075: "e979d573974f4e2b",
        1196: "dd4246e51b07bd0c",
        1292: "48d010a0adf1801f",
        1598: "6f675d3424e2a65e",
        1613: "d23abaef069aa451",
        2767: "beedeed3c9883ebe",
        2908: "8ddfe7c324f8020e",
        3306: "926e6ac605a417fa",
        3340: "557b4f4899e67262",
        3985: "7aab0d8517da5522",
        4219: "8c7ff8612885ac25",
        4275: "9f15889ff2efa80d",
        4298: "4d6f17218556b923",
        4353: "a7f142bda5ec72dc",
        4574: "e60f36182b974eea",
        4944: "565b4e8ee882afdb",
        5036: "9f0fb699bcef8b26",
        5275: "addcc98d32fc2f72",
        5929: "4c9e499b77191c65",
        6109: "922a9610a8763ecc",
        6305: "f3966e6187ea66c2",
        6784: "2269e5a870cd00de",
        6941: "a5a43479695f91b5",
        7103: "6a7f214122c910c5",
        7155: "0128b82a7d5dd71c",
        7571: "dbfc2d903e6dfdd8",
        8129: "e7702699ec5063f8",
        8835: "62809b2a5baebbe5",
        8900: "8c13929ad43b045a",
        9e3: "f80b01af7abc46a7",
        9120: "6bfce9d5b02bb5ce",
        9134: "cb4b30ad6e935b01",
        9278: "884f4f5bec789aef",
        9582: "96a980810c188693",
        9781: "6c47891f6f28eb46"
    })[e] + ".js",
    r.miniCssF = e => "static/css/147938f4748e8065.css",
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        var e = {}
          , t = "_N_E:";
        r.l = (a, n, o, c) => {
            if (e[a]) {
                e[a].push(n);
                return
            }
            if (void 0 !== o)
                for (var f, d, i = document.getElementsByTagName("script"), l = 0; l < i.length; l++) {
                    var u = i[l];
                    if (u.getAttribute("src") == a || u.getAttribute("data-webpack") == t + o) {
                        f = u;
                        break
                    }
                }
            f || (d = !0,
            (f = document.createElement("script")).charset = "utf-8",
            f.timeout = 120,
            r.nc && f.setAttribute("nonce", r.nc),
            f.setAttribute("data-webpack", t + o),
            f.src = r.tu(a)),
            e[a] = [n];
            var s = (t, r) => {
                f.onerror = f.onload = null,
                clearTimeout(b);
                var n = e[a];
                if (delete e[a],
                f.parentNode && f.parentNode.removeChild(f),
                n && n.forEach(e => e(r)),
                t)
                    return t(r)
            }
              , b = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
            }), 12e4);
            f.onerror = s.bind(null, f.onerror),
            f.onload = s.bind(null, f.onload),
            d && document.head.appendChild(f)
        }
    }
    )(),
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e;
        r.tt = () => (void 0 === e && (e = {
            createScriptURL: e => e
        },
        "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e)
    }
    )(),
    r.tu = e => r.tt().createScriptURL(e),
    r.p = "/_next/",
    ( () => {
        var e = (e, t, r, a) => {
            var n = document.createElement("link");
            return n.rel = "stylesheet",
            n.type = "text/css",
            n.onerror = n.onload = o => {
                if (n.onerror = n.onload = null,
                "load" === o.type)
                    r();
                else {
                    var c = o && ("load" === o.type ? "missing" : o.type)
                      , f = o && o.target && o.target.href || t
                      , d = Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                    d.code = "CSS_CHUNK_LOAD_FAILED",
                    d.type = c,
                    d.request = f,
                    n.parentNode.removeChild(n),
                    a(d)
                }
            }
            ,
            n.href = t,
            function(e) {
                if ("function" == typeof _N_E_STYLE_LOAD) {
                    let {href: t, onload: r, onerror: a} = e;
                    _N_E_STYLE_LOAD(0 === t.indexOf(window.location.origin) ? new URL(t).pathname : t).then( () => null == r ? void 0 : r.call(e, {
                        type: "load"
                    }), () => null == a ? void 0 : a.call(e, {}))
                } else
                    document.head.appendChild(e)
            }(n),
            n
        }
          , t = (e, t) => {
            for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                var n = r[a]
                  , o = n.getAttribute("data-href") || n.getAttribute("href");
                if ("stylesheet" === n.rel && (o === e || o === t))
                    return n
            }
            for (var c = document.getElementsByTagName("style"), a = 0; a < c.length; a++) {
                var n = c[a]
                  , o = n.getAttribute("data-href");
                if (o === e || o === t)
                    return n
            }
        }
          , a = a => new Promise( (n, o) => {
            var c = r.miniCssF(a)
              , f = r.p + c;
            if (t(c, f))
                return n();
            e(a, f, n, o)
        }
        )
          , n = {
            8068: 0
        };
        r.f.miniCss = (e, t) => {
            n[e] ? t.push(n[e]) : 0 !== n[e] && ({
                2425: 1
            })[e] && t.push(n[e] = a(e).then( () => {
                n[e] = 0
            }
            , t => {
                throw delete n[e],
                t
            }
            ))
        }
    }
    )(),
    ( () => {
        var e = {
            8068: 0,
            1673: 0,
            7227: 0,
            8768: 0,
            7483: 0,
            8279: 0,
            7029: 0,
            9034: 0,
            939: 0,
            6525: 0,
            4949: 0,
            2647: 0,
            4935: 0,
            3989: 0,
            2948: 0,
            2015: 0,
            7050: 0,
            1416: 0,
            4759: 0,
            5102: 0
        };
        r.f.j = (t, a) => {
            var n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n) {
                if (n)
                    a.push(n[2]);
                else if (/^(2(015|425|647|948)|4(759|935|949)|7(029|050|227|483)|8([07]68|279)|1416|1673|3989|5102|6525|9034|939)$/.test(t))
                    e[t] = 0;
                else {
                    var o = new Promise( (r, a) => n = e[t] = [r, a]);
                    a.push(n[2] = o);
                    var c = r.p + r.u(t)
                      , f = Error();
                    r.l(c, a => {
                        if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var o = a && ("load" === a.type ? "missing" : a.type)
                              , c = a && a.target && a.target.src;
                            f.message = "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")",
                            f.name = "ChunkLoadError",
                            f.type = o,
                            f.request = c,
                            n[1](f)
                        }
                    }
                    , "chunk-" + t, t)
                }
            }
        }
        ,
        r.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var n, o, [c,f,d] = a, i = 0;
            if (c.some(t => 0 !== e[t])) {
                for (n in f)
                    r.o(f, n) && (r.m[n] = f[n]);
                if (d)
                    var l = d(r)
            }
            for (t && t(a); i < c.length; i++)
                o = c[i],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(l)
        }
          , a = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )()
}
)();
