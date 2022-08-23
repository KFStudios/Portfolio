!(function (t) {
  var e = {};
  function i(r) {
    if (e[r]) return e[r].exports;
    var n = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, r) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 6));
})([
  function (t, e, i) {
    "use strict";
    (function (t, r) {
      i.d(e, "e", function () {
        return n;
      }),
        i.d(e, "g", function () {
          return o;
        }),
        i.d(e, "f", function () {
          return s;
        }),
        i.d(e, "c", function () {
          return l;
        }),
        i.d(e, "a", function () {
          return h;
        }),
        i.d(e, "b", function () {
          return c;
        }),
        i.d(e, "d", function () {
          return u;
        });
      /*!
       * VERSION: 2.1.3
       * DATE: 2019-05-17
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      var n =
          "undefined" != typeof window
            ? window
            : t.exports && void 0 !== r
            ? r
            : {},
        s = (function (t) {
          var e = {},
            i = t.document,
            r = (t.GreenSockGlobals = t.GreenSockGlobals || t);
          if (r.TweenLite) return r.TweenLite;
          var n,
            s,
            o,
            a,
            l,
            h = function (t) {
              var e,
                i = t.split("."),
                n = r;
              for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
              return n;
            },
            c = h("com.greensock"),
            u = function (t) {
              var e,
                i = [],
                r = t.length;
              for (e = 0; e !== r; i.push(t[e++]));
              return i;
            },
            d = function () {},
            f = (function () {
              var t = Object.prototype.toString,
                e = t.call([]);
              return function (i) {
                return (
                  null != i &&
                  (i instanceof Array ||
                    ("object" == typeof i && !!i.push && t.call(i) === e))
                );
              };
            })(),
            p = {},
            g = function (t, i, n, s) {
              (this.sc = p[t] ? p[t].sc : []),
                (p[t] = this),
                (this.gsClass = null),
                (this.func = n);
              var o = [];
              (this.check = function (a) {
                for (var l, c, u, d, f = i.length, m = f; --f > -1; )
                  (l = p[i[f]] || new g(i[f], [])).gsClass
                    ? ((o[f] = l.gsClass), m--)
                    : a && l.sc.push(this);
                if (0 === m && n)
                  for (
                    u = (c = ("com.greensock." + t).split(".")).pop(),
                      d = h(c.join("."))[u] = this.gsClass = n.apply(n, o),
                      s && (r[u] = e[u] = d),
                      f = 0;
                    f < this.sc.length;
                    f++
                  )
                    this.sc[f].check();
              }),
                this.check(!0);
            },
            m = (t._gsDefine = function (t, e, i, r) {
              return new g(t, e, i, r);
            }),
            _ = (c._class = function (t, e, i) {
              return (
                (e = e || function () {}),
                m(
                  t,
                  [],
                  function () {
                    return e;
                  },
                  i
                ),
                e
              );
            });
          m.globals = r;
          var v = [0, 0, 1, 1],
            y = _(
              "easing.Ease",
              function (t, e, i, r) {
                (this._func = t),
                  (this._type = i || 0),
                  (this._power = r || 0),
                  (this._params = e ? v.concat(e) : v);
              },
              !0
            ),
            x = (y.map = {}),
            b = (y.register = function (t, e, i, r) {
              for (
                var n,
                  s,
                  o,
                  a,
                  l = e.split(","),
                  h = l.length,
                  u = (i || "easeIn,easeOut,easeInOut").split(",");
                --h > -1;

              )
                for (
                  s = l[h],
                    n = r ? _("easing." + s, null, !0) : c.easing[s] || {},
                    o = u.length;
                  --o > -1;

                )
                  (a = u[o]),
                    (x[s + "." + a] =
                      x[a + s] =
                      n[a] =
                        t.getRatio ? t : t[a] || new t());
            });
          for (
            (o = y.prototype)._calcEnd = !1,
              o.getRatio = function (t) {
                if (this._func)
                  return (
                    (this._params[0] = t), this._func.apply(null, this._params)
                  );
                var e = this._type,
                  i = this._power,
                  r =
                    1 === e
                      ? 1 - t
                      : 2 === e
                      ? t
                      : t < 0.5
                      ? 2 * t
                      : 2 * (1 - t);
                return (
                  1 === i
                    ? (r *= r)
                    : 2 === i
                    ? (r *= r * r)
                    : 3 === i
                    ? (r *= r * r * r)
                    : 4 === i && (r *= r * r * r * r),
                  1 === e ? 1 - r : 2 === e ? r : t < 0.5 ? r / 2 : 1 - r / 2
                );
              },
              s = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                .length;
            --s > -1;

          )
            (o = n[s] + ",Power" + s),
              b(new y(null, null, 1, s), o, "easeOut", !0),
              b(
                new y(null, null, 2, s),
                o,
                "easeIn" + (0 === s ? ",easeNone" : "")
              ),
              b(new y(null, null, 3, s), o, "easeInOut");
          (x.linear = c.easing.Linear.easeIn),
            (x.swing = c.easing.Quad.easeInOut);
          var w = _("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
          });
          ((o = w.prototype).addEventListener = function (t, e, i, r, n) {
            n = n || 0;
            var s,
              o,
              h = this._listeners[t],
              c = 0;
            for (
              this !== a || l || a.wake(),
                null == h && (this._listeners[t] = h = []),
                o = h.length;
              --o > -1;

            )
              (s = h[o]).c === e && s.s === i
                ? h.splice(o, 1)
                : 0 === c && s.pr < n && (c = o + 1);
            h.splice(c, 0, { c: e, s: i, up: r, pr: n });
          }),
            (o.removeEventListener = function (t, e) {
              var i,
                r = this._listeners[t];
              if (r)
                for (i = r.length; --i > -1; )
                  if (r[i].c === e) return void r.splice(i, 1);
            }),
            (o.dispatchEvent = function (t) {
              var e,
                i,
                r,
                n = this._listeners[t];
              if (n)
                for (
                  (e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget;
                  --e > -1;

                )
                  (r = n[e]) &&
                    (r.up
                      ? r.c.call(r.s || i, { type: t, target: i })
                      : r.c.call(r.s || i));
            });
          var S = t.requestAnimationFrame,
            T = t.cancelAnimationFrame,
            P =
              Date.now ||
              function () {
                return new Date().getTime();
              },
            C = P();
          for (s = (n = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !S; )
            (S = t[n[s] + "RequestAnimationFrame"]),
              (T =
                t[n[s] + "CancelAnimationFrame"] ||
                t[n[s] + "CancelRequestAnimationFrame"]);
          _("Ticker", function (t, e) {
            var r,
              n,
              s,
              o,
              h,
              c = this,
              u = P(),
              f = !(!1 === e || !S) && "auto",
              p = 500,
              g = 33,
              m = function (t) {
                var e,
                  i,
                  a = P() - C;
                a > p && (u += a - g),
                  (C += a),
                  (c.time = (C - u) / 1e3),
                  (e = c.time - h),
                  (!r || e > 0 || !0 === t) &&
                    (c.frame++, (h += e + (e >= o ? 0.004 : o - e)), (i = !0)),
                  !0 !== t && (s = n(m)),
                  i && c.dispatchEvent("tick");
              };
            w.call(c),
              (c.time = c.frame = 0),
              (c.tick = function () {
                m(!0);
              }),
              (c.lagSmoothing = function (t, e) {
                if (!arguments.length) return p < 1e8;
                (p = t || 1e8), (g = Math.min(e, p, 0));
              }),
              (c.sleep = function () {
                null != s &&
                  (f && T ? T(s) : clearTimeout(s),
                  (n = d),
                  (s = null),
                  c === a && (l = !1));
              }),
              (c.wake = function (t) {
                null !== s
                  ? c.sleep()
                  : t
                  ? (u += -C + (C = P()))
                  : c.frame > 10 && (C = P() - p + 5),
                  (n =
                    0 === r
                      ? d
                      : f && S
                      ? S
                      : function (t) {
                          return setTimeout(t, (1e3 * (h - c.time) + 1) | 0);
                        }),
                  c === a && (l = !0),
                  m(2);
              }),
              (c.fps = function (t) {
                if (!arguments.length) return r;
                (o = 1 / ((r = t) || 60)), (h = this.time + o), c.wake();
              }),
              (c.useRAF = function (t) {
                if (!arguments.length) return f;
                c.sleep(), (f = t), c.fps(r);
              }),
              c.fps(t),
              setTimeout(function () {
                "auto" === f &&
                  c.frame < 5 &&
                  "hidden" !== (i || {}).visibilityState &&
                  c.useRAF(!1);
              }, 1500);
          }),
            ((o = c.Ticker.prototype =
              new c.events.EventDispatcher()).constructor = c.Ticker);
          var k = _("core.Animation", function (t, e) {
            if (
              ((this.vars = e = e || {}),
              (this._duration = this._totalDuration = t || 0),
              (this._delay = Number(e.delay) || 0),
              (this._timeScale = 1),
              (this._active = !!e.immediateRender),
              (this.data = e.data),
              (this._reversed = !!e.reversed),
              H)
            ) {
              l || a.wake();
              var i = this.vars.useFrames ? X : H;
              i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
          });
          (a = k.ticker = new c.Ticker()),
            ((o = k.prototype)._dirty = o._gc = o._initted = o._paused = !1),
            (o._totalTime = o._time = 0),
            (o._rawPrevTime = -1),
            (o._next = o._last = o._onUpdate = o._timeline = o.timeline = null),
            (o._paused = !1);
          var A = function () {
            l &&
              P() - C > 2e3 &&
              ("hidden" !== (i || {}).visibilityState || !a.lagSmoothing()) &&
              a.wake();
            var t = setTimeout(A, 2e3);
            t.unref && t.unref();
          };
          A(),
            (o.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (o.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (o.resume = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!1);
            }),
            (o.seek = function (t, e) {
              return this.totalTime(Number(t), !1 !== e);
            }),
            (o.restart = function (t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (o.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (o.render = function (t, e, i) {}),
            (o.invalidate = function () {
              return (
                (this._time = this._totalTime = 0),
                (this._initted = this._gc = !1),
                (this._rawPrevTime = -1),
                (!this._gc && this.timeline) || this._enabled(!0),
                this
              );
            }),
            (o.isActive = function () {
              var t,
                e = this._timeline,
                i = this._startTime;
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < i + this.totalDuration() / this._timeScale - 1e-8)
              );
            }),
            (o._enabled = function (t, e) {
              return (
                l || a.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                !0 !== e &&
                  (t && !this.timeline
                    ? this._timeline.add(this, this._startTime - this._delay)
                    : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              );
            }),
            (o._kill = function (t, e) {
              return this._enabled(!1, !1);
            }),
            (o.kill = function (t, e) {
              return this._kill(t, e), this;
            }),
            (o._uncache = function (t) {
              for (var e = t ? this : this.timeline; e; )
                (e._dirty = !0), (e = e.timeline);
              return this;
            }),
            (o._swapSelfInParams = function (t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i;
            }),
            (o._callback = function (t) {
              var e = this.vars,
                i = e[t],
                r = e[t + "Params"],
                n = e[t + "Scope"] || e.callbackScope || this;
              switch (r ? r.length : 0) {
                case 0:
                  i.call(n);
                  break;
                case 1:
                  i.call(n, r[0]);
                  break;
                case 2:
                  i.call(n, r[0], r[1]);
                  break;
                default:
                  i.apply(n, r);
              }
            }),
            (o.eventCallback = function (t, e, i, r) {
              if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e
                  ? delete n[t]
                  : ((n[t] = e),
                    (n[t + "Params"] =
                      f(i) && -1 !== i.join("").indexOf("{self}")
                        ? this._swapSelfInParams(i)
                        : i),
                    (n[t + "Scope"] = r)),
                  "onUpdate" === t && (this._onUpdate = e);
              }
              return this;
            }),
            (o.delay = function (t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                    this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (o.duration = function (t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                    this._time > 0 &&
                    this._time < this._duration &&
                    0 !== t &&
                    this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration);
            }),
            (o.totalDuration = function (t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              );
            }),
            (o.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time;
            }),
            (o.totalTime = function (t, e, i) {
              if ((l || a.wake(), !arguments.length)) return this._totalTime;
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration();
                  var r = this._totalDuration,
                    n = this._timeline;
                  if (
                    (t > r && !i && (t = r),
                    (this._startTime =
                      (this._paused ? this._pauseTime : n._time) -
                      (this._reversed ? r - t : t) / this._timeScale),
                    n._dirty || this._uncache(!1),
                    n._timeline)
                  )
                    for (; n._timeline; )
                      n._timeline._time !==
                        (n._startTime + n._totalTime) / n._timeScale &&
                        n.totalTime(n._totalTime, !0),
                        (n = n._timeline);
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime === t && 0 !== this._duration) ||
                    (E.length && K(), this.render(t, e, !1), E.length && K());
              }
              return this;
            }),
            (o.progress = o.totalProgress =
              function (t, e) {
                var i = this.duration();
                return arguments.length
                  ? this.totalTime(i * t, e)
                  : i
                  ? this._time / i
                  : this.ratio;
              }),
            (o.startTime = function (t) {
              return arguments.length
                ? (t !== this._startTime &&
                    ((this._startTime = t),
                    this.timeline &&
                      this.timeline._sortChildren &&
                      this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime;
            }),
            (o.endTime = function (t) {
              return (
                this._startTime +
                (0 != t ? this.totalDuration() : this.duration()) /
                  this._timeScale
              );
            }),
            (o.timeScale = function (t) {
              if (!arguments.length) return this._timeScale;
              var e, i;
              for (
                t = t || 1e-8,
                  this._timeline &&
                    this._timeline.smoothChildTiming &&
                    ((i =
                      (e = this._pauseTime) || 0 === e
                        ? e
                        : this._timeline.totalTime()),
                    (this._startTime =
                      i - ((i - this._startTime) * this._timeScale) / t)),
                  this._timeScale = t,
                  i = this.timeline;
                i && i.timeline;

              )
                (i._dirty = !0), i.totalDuration(), (i = i.timeline);
              return this;
            }),
            (o.reversed = function (t) {
              return arguments.length
                ? (t != this._reversed &&
                    ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed;
            }),
            (o.paused = function (t) {
              if (!arguments.length) return this._paused;
              var e,
                i,
                r = this._timeline;
              return (
                t != this._paused &&
                  r &&
                  (l || t || a.wake(),
                  (i = (e = r.rawTime()) - this._pauseTime),
                  !t &&
                    r.smoothChildTiming &&
                    ((this._startTime += i), this._uncache(!1)),
                  (this._pauseTime = t ? e : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                    0 !== i &&
                    this._initted &&
                    this.duration() &&
                    ((e = r.smoothChildTiming
                      ? this._totalTime
                      : (e - this._startTime) / this._timeScale),
                    this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
              );
            });
          var M = _("core.SimpleTimeline", function (t) {
            k.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((o = M.prototype = new k()).constructor = M),
            (o.kill()._gc = !1),
            (o._first = o._last = o._recent = null),
            (o._sortChildren = !1),
            (o.add = o.insert =
              function (t, e, i, r) {
                var n, s;
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (n = this._last),
                  this._sortChildren)
                )
                  for (s = t._startTime; n && n._startTime > s; ) n = n._prev;
                return (
                  n
                    ? ((t._next = n._next), (n._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = n),
                  (this._recent = t),
                  this._timeline && this._uncache(!0),
                  this
                );
              }),
            (o._remove = function (t, e) {
              return (
                t.timeline === this &&
                  (e || t._enabled(!1, !0),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._first === t && (this._first = t._next),
                  t._next
                    ? (t._next._prev = t._prev)
                    : this._last === t && (this._last = t._prev),
                  (t._next = t._prev = t.timeline = null),
                  t === this._recent && (this._recent = this._last),
                  this._timeline && this._uncache(!0)),
                this
              );
            }),
            (o.render = function (t, e, i) {
              var r,
                n = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; n; )
                (r = n._next),
                  (n._active || (t >= n._startTime && !n._paused && !n._gc)) &&
                    (n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                  (n = r);
            }),
            (o.rawTime = function () {
              return l || a.wake(), this._totalTime;
            });
          var R = _(
              "TweenLite",
              function (e, i, r) {
                if (
                  (k.call(this, i, r),
                  (this.render = R.prototype.render),
                  null == e)
                )
                  throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                var n,
                  s,
                  o,
                  a =
                    e.jquery ||
                    (e.length &&
                      e !== t &&
                      e[0] &&
                      (e[0] === t ||
                        (e[0].nodeType && e[0].style && !e.nodeType))),
                  l = this.vars.overwrite;
                if (
                  ((this._overwrite = l =
                    null == l
                      ? W[R.defaultOverwrite]
                      : "number" == typeof l
                      ? l >> 0
                      : W[l]),
                  (a || e instanceof Array || (e.push && f(e))) &&
                    "number" != typeof e[0])
                )
                  for (
                    this._targets = o = u(e),
                      this._propLookup = [],
                      this._siblings = [],
                      n = 0;
                    n < o.length;
                    n++
                  )
                    (s = o[n])
                      ? "string" != typeof s
                        ? s.length &&
                          s !== t &&
                          s[0] &&
                          (s[0] === t ||
                            (s[0].nodeType && s[0].style && !s.nodeType))
                          ? (o.splice(n--, 1),
                            (this._targets = o = o.concat(u(s))))
                          : ((this._siblings[n] = Z(s, this, !1)),
                            1 === l &&
                              this._siblings[n].length > 1 &&
                              $(s, this, null, 1, this._siblings[n]))
                        : "string" == typeof (s = o[n--] = R.selector(s)) &&
                          o.splice(n + 1, 1)
                      : o.splice(n--, 1);
                else
                  (this._propLookup = {}),
                    (this._siblings = Z(e, this, !1)),
                    1 === l &&
                      this._siblings.length > 1 &&
                      $(e, this, null, 1, this._siblings);
                (this.vars.immediateRender ||
                  (0 === i &&
                    0 === this._delay &&
                    !1 !== this.vars.immediateRender)) &&
                  ((this._time = -1e-8),
                  this.render(Math.min(0, -this._delay)));
              },
              !0
            ),
            O = function (e) {
              return (
                e &&
                e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
              );
            };
          ((o = R.prototype = new k()).constructor = R),
            (o.kill()._gc = !1),
            (o.ratio = 0),
            (o._firstPT = o._targets = o._overwrittenProps = o._startAt = null),
            (o._notifyPluginsOfEnabled = o._lazy = !1),
            (R.version = "2.1.3"),
            (R.defaultEase = o._ease = new y(null, null, 1, 1)),
            (R.defaultOverwrite = "auto"),
            (R.ticker = a),
            (R.autoSleep = 120),
            (R.lagSmoothing = function (t, e) {
              a.lagSmoothing(t, e);
            }),
            (R.selector =
              t.$ ||
              t.jQuery ||
              function (e) {
                var r = t.$ || t.jQuery;
                return r
                  ? ((R.selector = r), r(e))
                  : (i || (i = t.document),
                    i
                      ? i.querySelectorAll
                        ? i.querySelectorAll(e)
                        : i.getElementById(
                            "#" === e.charAt(0) ? e.substr(1) : e
                          )
                      : e);
              });
          var E = [],
            F = {},
            B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            I = /[\+-]=-?[\.\d]/,
            L = function (t) {
              for (var e, i = this._firstPT; i; )
                (e = i.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join("")
                    : this.start
                  : i.c * t + i.s),
                  i.m
                    ? (e = i.m.call(
                        this._tween,
                        e,
                        this._target || i.t,
                        this._tween
                      ))
                    : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f
                    ? i.fp
                      ? i.t[i.p](i.fp, e)
                      : i.t[i.p](e)
                    : (i.t[i.p] = e),
                  (i = i._next);
            },
            N = function (t) {
              return ((1e3 * t) | 0) / 1e3 + "";
            },
            U = function (t, e, i, r) {
              var n,
                s,
                o,
                a,
                l,
                h,
                c,
                u = [],
                d = 0,
                f = "",
                p = 0;
              for (
                u.start = t,
                  u.end = e,
                  t = u[0] = t + "",
                  e = u[1] = e + "",
                  i && (i(u), (t = u[0]), (e = u[1])),
                  u.length = 0,
                  n = t.match(B) || [],
                  s = e.match(B) || [],
                  r &&
                    ((r._next = null),
                    (r.blob = 1),
                    (u._firstPT = u._applyPT = r)),
                  l = s.length,
                  a = 0;
                a < l;
                a++
              )
                (c = s[a]),
                  (f += (h = e.substr(d, e.indexOf(c, d) - d)) || !a ? h : ","),
                  (d += h.length),
                  p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
                  c === n[a] || n.length <= a
                    ? (f += c)
                    : (f && (u.push(f), (f = "")),
                      (o = parseFloat(n[a])),
                      u.push(o),
                      (u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: o,
                        c:
                          ("=" === c.charAt(1)
                            ? parseInt(c.charAt(0) + "1", 10) *
                              parseFloat(c.substr(2))
                            : parseFloat(c) - o) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : N,
                      })),
                  (d += c.length);
              return (
                (f += e.substr(d)) && u.push(f),
                (u.setRatio = L),
                I.test(e) && (u.end = null),
                u
              );
            },
            V = function (t, e, i, r, n, s, o, a, l) {
              "function" == typeof r && (r = r(l || 0, t));
              var h = typeof t[e],
                c =
                  "function" !== h
                    ? ""
                    : e.indexOf("set") ||
                      "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3),
                u = "get" !== i ? i : c ? (o ? t[c](o) : t[c]()) : t[e],
                d = "string" == typeof r && "=" === r.charAt(1),
                f = {
                  t: t,
                  p: e,
                  s: u,
                  f: "function" === h,
                  pg: 0,
                  n: n || e,
                  m: s ? ("function" == typeof s ? s : Math.round) : 0,
                  pr: 0,
                  c: d
                    ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2))
                    : parseFloat(r) - u || 0,
                };
              if (
                (("number" != typeof u || ("number" != typeof r && !d)) &&
                  (o ||
                  isNaN(u) ||
                  (!d && isNaN(r)) ||
                  "boolean" == typeof u ||
                  "boolean" == typeof r
                    ? ((f.fp = o),
                      (f = {
                        t: U(
                          u,
                          d
                            ? parseFloat(f.s) +
                                f.c +
                                (f.s + "").replace(/[0-9\-\.]/g, "")
                            : r,
                          a || R.defaultStringFilter,
                          f
                        ),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: n || e,
                        pr: 0,
                        m: 0,
                      }))
                    : ((f.s = parseFloat(u)),
                      d || (f.c = parseFloat(r) - f.s || 0))),
                f.c)
              )
                return (
                  (f._next = this._firstPT) && (f._next._prev = f),
                  (this._firstPT = f),
                  f
                );
            },
            j = (R._internals = {
              isArray: f,
              isSelector: O,
              lazyTweens: E,
              blobDif: U,
            }),
            D = (R._plugins = {}),
            z = (j.tweenLookup = {}),
            G = 0,
            q = (j.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1,
            }),
            W = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0,
            },
            X = (k._rootFramesTimeline = new M()),
            H = (k._rootTimeline = new M()),
            Y = 30,
            K = (j.lazyRender = function () {
              var t,
                e,
                i = E.length;
              for (F = {}, t = 0; t < i; t++)
                (e = E[t]) &&
                  !1 !== e._lazy &&
                  (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
              E.length = 0;
            });
          (H._startTime = a.time),
            (X._startTime = a.frame),
            (H._active = X._active = !0),
            setTimeout(K, 1),
            (k._updateRoot = R.render =
              function () {
                var t, e, i;
                if (
                  (E.length && K(),
                  H.render((a.time - H._startTime) * H._timeScale, !1, !1),
                  X.render((a.frame - X._startTime) * X._timeScale, !1, !1),
                  E.length && K(),
                  a.frame >= Y)
                ) {
                  for (i in ((Y = a.frame + (parseInt(R.autoSleep, 10) || 120)),
                  z)) {
                    for (t = (e = z[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete z[i];
                  }
                  if (
                    (!(i = H._first) || i._paused) &&
                    R.autoSleep &&
                    !X._first &&
                    1 === a._listeners.tick.length
                  ) {
                    for (; i && i._paused; ) i = i._next;
                    i || a.sleep();
                  }
                }
              }),
            a.addEventListener("tick", k._updateRoot);
          var Z = function (t, e, i) {
              var r,
                n,
                s = t._gsTweenID;
              if (
                (z[s || (t._gsTweenID = s = "t" + G++)] ||
                  (z[s] = { target: t, tweens: [] }),
                e && (((r = z[s].tweens)[(n = r.length)] = e), i))
              )
                for (; --n > -1; ) r[n] === e && r.splice(n, 1);
              return z[s].tweens;
            },
            J = function (t, e, i, r) {
              var n,
                s,
                o = t.vars.onOverwrite;
              return (
                o && (n = o(t, e, i, r)),
                (o = R.onOverwrite) && (s = o(t, e, i, r)),
                !1 !== n && !1 !== s
              );
            },
            $ = function (t, e, i, r, n) {
              var s, o, a, l;
              if (1 === r || r >= 4) {
                for (l = n.length, s = 0; s < l; s++)
                  if ((a = n[s]) !== e)
                    a._gc || (a._kill(null, t, e) && (o = !0));
                  else if (5 === r) break;
                return o;
              }
              var h,
                c = e._startTime + 1e-8,
                u = [],
                d = 0,
                f = 0 === e._duration;
              for (s = n.length; --s > -1; )
                (a = n[s]) === e ||
                  a._gc ||
                  a._paused ||
                  (a._timeline !== e._timeline
                    ? ((h = h || Q(e, 0, f)), 0 === Q(a, h, f) && (u[d++] = a))
                    : a._startTime <= c &&
                      a._startTime + a.totalDuration() / a._timeScale > c &&
                      (((f || !a._initted) && c - a._startTime <= 2e-8) ||
                        (u[d++] = a)));
              for (s = d; --s > -1; )
                if (
                  ((l = (a = u[s])._firstPT),
                  2 === r && a._kill(i, t, e) && (o = !0),
                  2 !== r || (!a._firstPT && a._initted && l))
                ) {
                  if (2 !== r && !J(a, e)) continue;
                  a._enabled(!1, !1) && (o = !0);
                }
              return o;
            },
            Q = function (t, e, i) {
              for (
                var r = t._timeline, n = r._timeScale, s = t._startTime;
                r._timeline;

              ) {
                if (((s += r._startTime), (n *= r._timeScale), r._paused))
                  return -100;
                r = r._timeline;
              }
              return (s /= n) > e
                ? s - e
                : (i && s === e) || (!t._initted && s - e < 2e-8)
                ? 1e-8
                : (s += t.totalDuration() / t._timeScale / n) > e + 1e-8
                ? 0
                : s - e - 1e-8;
            };
          (o._init = function () {
            var t,
              e,
              i,
              r,
              n,
              s,
              o = this.vars,
              a = this._overwrittenProps,
              l = this._duration,
              h = !!o.immediateRender,
              c = o.ease,
              u = this._startAt;
            if (o.startAt) {
              for (r in (u && (u.render(-1, !0), u.kill()),
              (n = {}),
              o.startAt))
                n[r] = o.startAt[r];
              if (
                ((n.data = "isStart"),
                (n.overwrite = !1),
                (n.immediateRender = !0),
                (n.lazy = h && !1 !== o.lazy),
                (n.startAt = n.delay = null),
                (n.onUpdate = o.onUpdate),
                (n.onUpdateParams = o.onUpdateParams),
                (n.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
                (this._startAt = R.to(this.target || {}, 0, n)),
                h)
              )
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return;
            } else if (o.runBackwards && 0 !== l)
              if (u) u.render(-1, !0), u.kill(), (this._startAt = null);
              else {
                for (r in (0 !== this._time && (h = !1), (i = {}), o))
                  (q[r] && "autoCSS" !== r) || (i[r] = o[r]);
                if (
                  ((i.overwrite = 0),
                  (i.data = "isFromStart"),
                  (i.lazy = h && !1 !== o.lazy),
                  (i.immediateRender = h),
                  (this._startAt = R.to(this.target, 0, i)),
                  h)
                ) {
                  if (0 === this._time) return;
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null);
              }
            if (
              ((this._ease = c =
                c
                  ? c instanceof y
                    ? c
                    : "function" == typeof c
                    ? new y(c, o.easeParams)
                    : x[c] || R.defaultEase
                  : R.defaultEase),
              o.easeParams instanceof Array &&
                c.config &&
                (this._ease = c.config.apply(c, o.easeParams)),
              (this._easeType = this._ease._type),
              (this._easePower = this._ease._power),
              (this._firstPT = null),
              this._targets)
            )
              for (s = this._targets.length, t = 0; t < s; t++)
                this._initProps(
                  this._targets[t],
                  (this._propLookup[t] = {}),
                  this._siblings[t],
                  a ? a[t] : null,
                  t
                ) && (e = !0);
            else
              e = this._initProps(
                this.target,
                this._propLookup,
                this._siblings,
                a,
                0
              );
            if (
              (e && R._onPluginEvent("_onInitAllProps", this),
              a &&
                (this._firstPT ||
                  ("function" != typeof this.target && this._enabled(!1, !1))),
              o.runBackwards)
            )
              for (i = this._firstPT; i; )
                (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = o.onUpdate), (this._initted = !0);
          }),
            (o._initProps = function (e, i, r, n, s) {
              var o, a, l, h, c, u;
              if (null == e) return !1;
              for (o in (F[e._gsTweenID] && K(),
              this.vars.css ||
                (e.style &&
                  e !== t &&
                  e.nodeType &&
                  D.css &&
                  !1 !== this.vars.autoCSS &&
                  (function (t, e) {
                    var i,
                      r = {};
                    for (i in t)
                      q[i] ||
                        (i in e &&
                          "transform" !== i &&
                          "x" !== i &&
                          "y" !== i &&
                          "width" !== i &&
                          "height" !== i &&
                          "className" !== i &&
                          "border" !== i) ||
                        !(!D[i] || (D[i] && D[i]._autoCSS)) ||
                        ((r[i] = t[i]), delete t[i]);
                    t.css = r;
                  })(this.vars, e)),
              this.vars))
                if (((u = this.vars[o]), q[o]))
                  u &&
                    (u instanceof Array || (u.push && f(u))) &&
                    -1 !== u.join("").indexOf("{self}") &&
                    (this.vars[o] = u = this._swapSelfInParams(u, this));
                else if (
                  D[o] &&
                  (h = new D[o]())._onInitTween(e, this.vars[o], this, s)
                ) {
                  for (
                    this._firstPT = c =
                      {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: h._priority,
                        m: 0,
                      },
                      a = h._overwriteProps.length;
                    --a > -1;

                  )
                    i[h._overwriteProps[a]] = this._firstPT;
                  (h._priority || h._onInitAllProps) && (l = !0),
                    (h._onDisable || h._onEnable) &&
                      (this._notifyPluginsOfEnabled = !0),
                    c._next && (c._next._prev = c);
                } else
                  i[o] = V.call(
                    this,
                    e,
                    o,
                    "get",
                    u,
                    o,
                    0,
                    null,
                    this.vars.stringFilter,
                    s
                  );
              return n && this._kill(n, e)
                ? this._initProps(e, i, r, n, s)
                : this._overwrite > 1 &&
                  this._firstPT &&
                  r.length > 1 &&
                  $(e, this, i, this._overwrite, r)
                ? (this._kill(i, e), this._initProps(e, i, r, n, s))
                : (this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration)) &&
                    (F[e._gsTweenID] = !0),
                  l);
            }),
            (o.render = function (t, e, i) {
              var r,
                n,
                s,
                o,
                a = this._time,
                l = this._duration,
                h = this._rawPrevTime;
              if (t >= l - 1e-8 && t >= 0)
                (this._totalTime = this._time = l),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(1)
                    : 1),
                  this._reversed ||
                    ((r = !0),
                    (n = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (h < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === h && "isPause" !== this.data)) &&
                      h !== t &&
                      ((i = !0), h > 1e-8 && (n = "onReverseComplete")),
                    (this._rawPrevTime = o = !e || t || h === t ? t : 1e-8));
              else if (t < 1e-8)
                (this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== a || (0 === l && h > 0)) &&
                    ((n = "onReverseComplete"), (r = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === l &&
                        (this._initted || !this.vars.lazy || i) &&
                        (h >= 0 &&
                          (1e-8 !== h || "isPause" !== this.data) &&
                          (i = !0),
                        (this._rawPrevTime = o =
                          !e || t || h === t ? t : 1e-8))),
                  (!this._initted ||
                    (this._startAt && this._startAt.progress())) &&
                    (i = !0);
              else if (((this._totalTime = this._time = t), this._easeType)) {
                var c = t / l,
                  u = this._easeType,
                  d = this._easePower;
                (1 === u || (3 === u && c >= 0.5)) && (c = 1 - c),
                  3 === u && (c *= 2),
                  1 === d
                    ? (c *= c)
                    : 2 === d
                    ? (c *= c * c)
                    : 3 === d
                    ? (c *= c * c * c)
                    : 4 === d && (c *= c * c * c * c),
                  (this.ratio =
                    1 === u
                      ? 1 - c
                      : 2 === u
                      ? c
                      : t / l < 0.5
                      ? c / 2
                      : 1 - c / 2);
              } else this.ratio = this._ease.getRatio(t / l);
              if (this._time !== a || i) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return;
                  if (
                    !i &&
                    this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration))
                  )
                    return (
                      (this._time = this._totalTime = a),
                      (this._rawPrevTime = h),
                      E.push(this),
                      void (this._lazy = [t, e])
                    );
                  this._time && !r
                    ? (this.ratio = this._ease.getRatio(this._time / l))
                    : r &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(
                        0 === this._time ? 0 : 1
                      ));
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active ||
                      (!this._paused &&
                        this._time !== a &&
                        t >= 0 &&
                        (this._active = !0)),
                    0 === a &&
                      (this._startAt &&
                        (t >= 0
                          ? this._startAt.render(t, !0, i)
                          : n || (n = "_dummyGS")),
                      this.vars.onStart &&
                        ((0 === this._time && 0 !== l) ||
                          e ||
                          this._callback("onStart"))),
                    s = this._firstPT;
                  s;

                )
                  s.f
                    ? s.t[s.p](s.c * this.ratio + s.s)
                    : (s.t[s.p] = s.c * this.ratio + s.s),
                    (s = s._next);
                this._onUpdate &&
                  (t < 0 &&
                    this._startAt &&
                    -1e-4 !== t &&
                    this._startAt.render(t, !0, i),
                  e ||
                    ((this._time !== a || r || i) &&
                      this._callback("onUpdate"))),
                  n &&
                    ((this._gc && !i) ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      r &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[n] && this._callback(n),
                      0 === l &&
                        1e-8 === this._rawPrevTime &&
                        1e-8 !== o &&
                        (this._rawPrevTime = 0)));
              }
            }),
            (o._kill = function (t, e, i) {
              if (
                ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
              )
                return (this._lazy = !1), this._enabled(!1, !1);
              e =
                "string" != typeof e
                  ? e || this._targets || this.target
                  : R.selector(e) || e;
              var r,
                n,
                s,
                o,
                a,
                l,
                h,
                c,
                u,
                d =
                  i &&
                  this._time &&
                  i._startTime === this._startTime &&
                  this._timeline === i._timeline,
                p = this._firstPT;
              if ((f(e) || O(e)) && "number" != typeof e[0])
                for (r = e.length; --r > -1; )
                  this._kill(t, e[r], i) && (l = !0);
              else {
                if (this._targets) {
                  for (r = this._targets.length; --r > -1; )
                    if (e === this._targets[r]) {
                      (a = this._propLookup[r] || {}),
                        (this._overwrittenProps = this._overwrittenProps || []),
                        (n = this._overwrittenProps[r] =
                          t ? this._overwrittenProps[r] || {} : "all");
                      break;
                    }
                } else {
                  if (e !== this.target) return !1;
                  (a = this._propLookup),
                    (n = this._overwrittenProps =
                      t ? this._overwrittenProps || {} : "all");
                }
                if (a) {
                  if (
                    ((h = t || a),
                    (c =
                      t !== n &&
                      "all" !== n &&
                      t !== a &&
                      ("object" != typeof t || !t._tempKill)),
                    i && (R.onOverwrite || this.vars.onOverwrite))
                  ) {
                    for (s in h) a[s] && (u || (u = []), u.push(s));
                    if ((u || !t) && !J(this, i, e, u)) return !1;
                  }
                  for (s in h)
                    (o = a[s]) &&
                      (d && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                      o.pg && o.t._kill(h) && (l = !0),
                      (o.pg && 0 !== o.t._overwriteProps.length) ||
                        (o._prev
                          ? (o._prev._next = o._next)
                          : o === this._firstPT && (this._firstPT = o._next),
                        o._next && (o._next._prev = o._prev),
                        (o._next = o._prev = null)),
                      delete a[s]),
                      c && (n[s] = 1);
                  !this._firstPT && this._initted && p && this._enabled(!1, !1);
                }
              }
              return l;
            }),
            (o.invalidate = function () {
              this._notifyPluginsOfEnabled &&
                R._onPluginEvent("_onDisable", this);
              var t = this._time;
              return (
                (this._firstPT =
                  this._overwrittenProps =
                  this._startAt =
                  this._onUpdate =
                    null),
                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                (this._propLookup = this._targets ? {} : []),
                k.prototype.invalidate.call(this),
                this.vars.immediateRender &&
                  ((this._time = -1e-8),
                  this.render(t, !1, !1 !== this.vars.lazy)),
                this
              );
            }),
            (o._enabled = function (t, e) {
              if ((l || a.wake(), t && this._gc)) {
                var i,
                  r = this._targets;
                if (r)
                  for (i = r.length; --i > -1; )
                    this._siblings[i] = Z(r[i], this, !0);
                else this._siblings = Z(this.target, this, !0);
              }
              return (
                k.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                  R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              );
            }),
            (R.to = function (t, e, i) {
              return new R(t, e, i);
            }),
            (R.from = function (t, e, i) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                new R(t, e, i)
              );
            }),
            (R.fromTo = function (t, e, i, r) {
              return (
                (r.startAt = i),
                (r.immediateRender =
                  0 != r.immediateRender && 0 != i.immediateRender),
                new R(t, e, r)
              );
            }),
            (R.delayedCall = function (t, e, i, r, n) {
              return new R(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0,
              });
            }),
            (R.set = function (t, e) {
              return new R(t, 0, e);
            }),
            (R.getTweensOf = function (t, e) {
              if (null == t) return [];
              var i, r, n, s;
              if (
                ((t = "string" != typeof t ? t : R.selector(t) || t),
                (f(t) || O(t)) && "number" != typeof t[0])
              ) {
                for (i = t.length, r = []; --i > -1; )
                  r = r.concat(R.getTweensOf(t[i], e));
                for (i = r.length; --i > -1; )
                  for (s = r[i], n = i; --n > -1; )
                    s === r[n] && r.splice(i, 1);
              } else if (t._gsTweenID)
                for (i = (r = Z(t).concat()).length; --i > -1; )
                  (r[i]._gc || (e && !r[i].isActive())) && r.splice(i, 1);
              return r || [];
            }),
            (R.killTweensOf = R.killDelayedCallsTo =
              function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var r = R.getTweensOf(t, e), n = r.length; --n > -1; )
                  r[n]._kill(i, t);
              });
          var tt = _(
            "plugins.TweenPlugin",
            function (t, e) {
              (this._overwriteProps = (t || "").split(",")),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = tt.prototype);
            },
            !0
          );
          if (
            ((o = tt.prototype),
            (tt.version = "1.19.0"),
            (tt.API = 2),
            (o._firstPT = null),
            (o._addTween = V),
            (o.setRatio = L),
            (o._kill = function (t) {
              var e,
                i = this._overwriteProps,
                r = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; r; )
                null != t[r.n] &&
                  (r._next && (r._next._prev = r._prev),
                  r._prev
                    ? ((r._prev._next = r._next), (r._prev = null))
                    : this._firstPT === r && (this._firstPT = r._next)),
                  (r = r._next);
              return !1;
            }),
            (o._mod = o._roundProps =
              function (t) {
                for (var e, i = this._firstPT; i; )
                  (e =
                    t[this._propName] ||
                    (null != i.n &&
                      t[i.n.split(this._propName + "_").join("")])) &&
                    "function" == typeof e &&
                    (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                    (i = i._next);
              }),
            (R._onPluginEvent = function (t, e) {
              var i,
                r,
                n,
                s,
                o,
                a = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; a; ) {
                  for (o = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
                  (a._prev = r ? r._prev : s) ? (a._prev._next = a) : (n = a),
                    (a._next = r) ? (r._prev = a) : (s = a),
                    (a = o);
                }
                a = e._firstPT = n;
              }
              for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                  (a = a._next);
              return i;
            }),
            (tt.activate = function (t) {
              for (var e = t.length; --e > -1; )
                t[e].API === tt.API && (D[new t[e]()._propName] = t[e]);
              return !0;
            }),
            (m.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e,
                i = t.propName,
                r = t.priority || 0,
                n = t.overwriteProps,
                s = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps",
                },
                o = _(
                  "plugins." +
                    i.charAt(0).toUpperCase() +
                    i.substr(1) +
                    "Plugin",
                  function () {
                    tt.call(this, i, r), (this._overwriteProps = n || []);
                  },
                  !0 === t.global
                ),
                a = (o.prototype = new tt(i));
              for (e in ((a.constructor = o), (o.API = t.API), s))
                "function" == typeof t[e] && (a[s[e]] = t[e]);
              return (o.version = t.version), tt.activate([o]), o;
            }),
            (n = t._gsQueue))
          ) {
            for (s = 0; s < n.length; s++) n[s]();
            for (o in p)
              p[o].func ||
                t.console.log("GSAP encountered missing dependency: " + o);
          }
          return (l = !1), R;
        })(n),
        o = n.GreenSockGlobals,
        a = o.com.greensock,
        l = a.core.SimpleTimeline,
        h = a.core.Animation,
        c = o.Ease,
        u = (o.Linear, o.Power1, o.Power2, o.Power3, o.Power4, o.TweenPlugin);
      a.events.EventDispatcher;
    }.call(this, i(4)(t), i(3)));
  },
  function (t, e) {
    t.exports = "/images/church.svg";
  },
  function (t, e) {
    t.exports = "/images/arrow.svg";
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e) {
    (function (e) {
      t.exports = e;
    }.call(this, {}));
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    i(8),
      i(9),
      i(10),
      i(11),
      i(12),
      i(13),
      i(1),
      i(14),
      i(2),
      i(15),
      i(16),
      i(17);
    i(7).install();
  },
  function (t, e) {
    function i() {
      return (
        "serviceWorker" in navigator &&
        ("https:" === window.location.protocol ||
          "localhost" === window.location.hostname ||
          0 === window.location.hostname.indexOf("127."))
      );
    }
    (e.install = function (t) {
      if ((t || (t = {}), i())) navigator.serviceWorker.register("sw.js", {});
      else;
    }),
      (e.applyUpdate = function (t, e) {}),
      (e.update = function () {
        i() &&
          navigator.serviceWorker.getRegistration().then(function (t) {
            if (t) return t.update();
          });
      });
  },
  function (t, e) {
    t.exports = "fonts/Wasa-Medium.otf";
  },
  function (t, e) {
    t.exports = "fonts/Ogg-Roman.otf";
  },
  function (t, e) {
    t.exports = "fonts/Ogg-Italic.otf";
  },
  function (t, e, i) {
    t.exports =
      '<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="IE=edge"> <title>Jesus Is King</title> <meta name=description content="Non official website for the release of Jesus Is King by Kanye West"/> <meta name=keywords content="Kanye West release Jesus Is King"/> <meta name=author content="Guillaume Colombel"> <meta name=robots content="index, follow"/> <meta property=og:title content="Jesus is King"> <meta property=og:type content=website> <meta property=og:url content=https://jesusisking.netlify.com/ > <meta property=og:description content="Non official website for the release of Jesus Is King by Kanye West"> <meta property=og:image content=https://res.cloudinary.com/dhjjylcis/image/upload/v1572258453/Capture_d_e%CC%81cran_2019-10-28_a%CC%80_11.27.16_m5fw5m.png> <meta property=og:image:width content=3352> <meta property=og:image:height content=1658> <meta name=twitter:card content=summary_large_image> <meta name=twitter:site content=@guicolombel> <meta name=twitter:title content="Jesus Is King"> <meta name=twitter:description content="Non official website for the release of Jesus Is King by Kanye West"> <meta name=twitter:image content=https://res.cloudinary.com/dhjjylcis/image/upload/v1572258453/Capture_d_e%CC%81cran_2019-10-28_a%CC%80_11.27.16_m5fw5m.png> <meta name=theme-color content=#FDD904> <meta name=msapplication-navbutton-color content=#FDD904> <meta name=apple-mobile-web-app-status-bar-style content=black-translucent> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-54330717-3"></script> <script>function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-54330717-3")</script> </head> <body> <section class=loading> <span>AR1331A</span> <span>33RPM</span> <br/> <span>1202-1210 MATEO ST.</span> <span>LOS ANGELES, CA 90021</span> <div class=loading-bar> <div class=loading-bar__item></div> </div> </section> <div class=warning> <span>Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox</span> </div> <div class=container> <header role=banner class=header> <img class=church src=' +
      i(1) +
      ' alt="church logo"> <a href=https://open.spotify.com/album/0FgZKfoU2Br5sHOfvZKTI9 target=_blank rel="noopener nofollow">Listen to the album <img src=' +
      i(2) +
      ' alt=arrow></a> </header> <section class=hero> <div id=interactive__homepage><canvas width=750 height=1624></canvas></div> <div id=interactive__text>JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING JESUS IS KING</div> <h1 class=hero__title>Loading</h1> <div id=canvas></div> </section> <span class=a-sound>Enable sound to fully enjoy the experience !</span> <section class=konami> <div id=background> <div id=image></div> <div id=glow></div> </div> <canvas id=waves></canvas> <div id=controls> <input id=volume name=volume type=range min=0 max=100 value=15 step=1> </div> <img class=m-n src=https://media.giphy.com/media/l2JHPriZtl8lCOwjS/source.gif alt=konami> </section> <span class=o-mobile>Tap on your device and have fun!</span> <footer class=footer> <p class=footer__credits>Crédits : AD & Dev by <a href=https://guillaumecolombel.fr target=_blank>Guillaume Colombel</a> • 3D by <a href=https://sketchfab.com/hereIstand target=_blank rel="noopener nofollow">hereIstand</a> • Fonts used <a href=https://typefaces.pizza/fr target=_blank rel="noopener nofollow">Wasa</a></p> <a class=footer__link-right href=https://shop.kanyewest.com data-text=Shop target=_blank rel="noopener nofollow">Shop</a> </footer> </div> <script src=https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js></script> <script src=https://threejs.org/examples/js/loaders/OBJLoader.js></script> </body> </html>';
  },
  function (t, e, i) {},
  function (t, e, i) {
    "use strict";
    (function (t, e) {
      i(19);
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      console.log(
        "%c 🕹 Have you tried the Konami Code?",
        "color: #171B22; font-family: Arial; font-size: 1rem; padding: 20px 0;"
      ),
        new TimelineLite()
          .to(".loading-bar__item", 3, {
            width: "100%",
            ease: Power2.easeInOut,
          })
          .to(".loading-bar", 0.5, { opacity: 0, ease: Power2.easeIn })
          .staggerFromTo(
            ".loading span",
            1,
            { opacity: 1 },
            { opacity: 0, ease: Power2.easeInOut },
            0.25
          )
          .to(".loading", 1, { height: 0, ease: Expo.easeInOut })
          .staggerFromTo(
            ".hero__title span",
            0.5,
            { opacity: 0 },
            { opacity: 1, ease: Power2.easeInOut },
            0.25
          );
      var n,
        s,
        o,
        a = (function () {
          function t(t, e) {
            for (var i in e) {
              var r = e[i];
              (r.configurable = !0), r.value && (r.writable = !0);
            }
            Object.defineProperties(t, e);
          }
          return function (e, i, r) {
            return i && t(e.prototype, i), r && t(e, r), e;
          };
        })(),
        l = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        };
      new ((function () {
        function t() {
          var e =
            void 0 === arguments[0]
              ? [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
              : arguments[0];
          l(this, t);
          var i = {
            callback: function () {
              alert("Hello Konami.");
            },
          };
          (this.key_array = []),
            (this.key_count = 0),
            (this.callback = i.callback),
            (this.command = e);
        }
        return (
          a(t, {
            keyDown: {
              value: function (t) {
                var e,
                  i,
                  r = this.key_array.length,
                  n = t.keyCode;
                (this.key_array[r] = n),
                  (e = r - 1),
                  (i = this.command.length),
                  this.key_array[e] === this.command[e]
                    ? (this.key_count++, this.key_count === i && this.action())
                    : this.reset();
              },
            },
            eventListener: {
              value: function () {
                var t = this,
                  e = window.document;
                try {
                  e.addEventListener(
                    "keydown",
                    function (e) {
                      t.keyDown(e);
                    },
                    !1
                  );
                } catch (i) {
                  e.attachEvent("keydown", function (e) {
                    t.keyDown(e);
                  });
                }
              },
            },
            action: {
              value: function () {
                this.callback(), this.reset();
              },
            },
            reset: {
              value: function () {
                (this.key_array = []), (this.key_count = 0);
              },
            },
            init: {
              value: function () {
                var t = this,
                  e = void 0 === arguments[0] ? this.callback : arguments[0];
                (this.callback = e),
                  setTimeout(function () {
                    t.eventListener();
                  }, 0);
              },
            },
          }),
          t
        );
      })())().init(function () {
        var t = window.document,
          e = t.querySelector("#interactive__homepage"),
          i = t.querySelector(".hero__title"),
          r = t.querySelector("#canvas"),
          n = t.querySelector(".konami"),
          s = t.querySelector(".a-sound"),
          o = t.querySelector(".m-n"),
          a = new TimelineLite();
        r.parentNode.removeChild(r),
          e.parentNode.removeChild(e),
          (t.body.style.backgroundColor = "#E8911F"),
          (i.style.color = "#000"),
          (i.innerHTML = "Loading"),
          a
            .fromTo(
              i,
              0.5,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, ease: Power2.easeInOut }
            )
            .to(i, 0.5, { opacity: 0, y: -50, ease: Power2.easeInOut }, "+=1.5")
            .fromTo(
              n,
              0.6,
              { display: "block", opacity: 0 },
              { opacity: 1, ease: Power2.easeInOut }
            )
            .fromTo(
              s,
              0.6,
              { y: 40 },
              { y: 0, opacity: 1, ease: Power2.easeInOut }
            )
            .to(
              s,
              0.5,
              { y: -40, opacity: 0, ease: Power2.easeInOut },
              "+=2.25"
            )
            .to(o, 0.5, {
              opacity: 1,
              ease: Expo.easeInOut,
              onComplete: function () {
                var e,
                  i,
                  r,
                  n,
                  s,
                  o,
                  a = [
                    "https://media.giphy.com/media/61VzGiRUQp3pZ8omne/giphy.gif",
                    "https://media.giphy.com/media/l2JHPriZtl8lCOwjS/source.gif",
                    "https://media.giphy.com/media/9Xh1CGm4Hzo4g/source.gif",
                    "https://media.giphy.com/media/aI6O9VZvuTe36/source.gif",
                  ],
                  l =
                    (document.getElementById("controls"),
                    document.getElementById("volume")),
                  h = document.getElementById("background"),
                  c = document.getElementById("image"),
                  u =
                    (document.getElementById("glow"),
                    document.getElementById("waves")),
                  d =
                    (u.getContext("2d"),
                    function () {
                      c.style.backgroundImage = "url(".concat(
                        a[Math.floor(Math.random() * a.length)],
                        ")"
                      );
                    }),
                  f = window.AudioContext || window.webkitAudioContext || !1,
                  p = function t() {
                    requestAnimationFrame(t),
                      (function () {
                        n.getByteTimeDomainData(o);
                        var t =
                          o.reduce(function (t, e) {
                            return t + e;
                          }) / o.length;
                        t > 128.5
                          ? h.classList.add("active")
                          : h.classList.remove("active"),
                          t > 140 && d();
                      })();
                  };
                i ||
                  (f
                    ? ((r = new f()),
                      (n = r.createAnalyser()),
                      ((e = new Audio()).src = "images/kanye.mp3"),
                      (e.crossOrigin = "anonymous"),
                      (e.volume = 0.5),
                      (s = r.createMediaElementSource(e)).connect(
                        r.destination
                      ),
                      s.connect(n),
                      (n.fftSize = 256),
                      (n.smoothingTimeConstant = 0.75),
                      (o = new Uint8Array(n.frequencyBinCount)),
                      new Uint8Array(n.frequencyBinCount))
                    : ((t.querySelector(".warning").style.opacity = 1),
                      console.log(
                        "Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox"
                      )),
                  p(),
                  (l.onchange = function (t) {
                    return (e.volume = t.target.value / 100);
                  }),
                  d(),
                  e.play(),
                  (i = !0));
              },
            });
      });
      var h,
        c,
        u,
        d,
        f,
        p,
        g,
        m,
        _,
        y,
        x = 0,
        b = 0,
        w = window.innerWidth / 2,
        S = window.innerHeight / 2;
      function T() {
        (w = window.innerWidth / 2),
          (S = window.innerHeight / 2),
          (n.aspect = window.innerWidth / window.innerHeight),
          n.updateProjectionMatrix(),
          o.setSize(window.innerWidth, window.innerHeight);
      }
      function P(t) {
        (x = (t.clientX - w) / 2), (b = -1.5 * (t.clientY - S));
      }
      !(function () {
        var t = document.getElementById("canvas");
        ((n = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          2e3
        )).position.z = 300),
          (n.position.x = 300),
          (n.position.y = 300),
          (s = new THREE.Scene());
        var e = new THREE.AmbientLight(12303291);
        s.add(e);
        var i = new THREE.DirectionalLight(14540253);
        i.position.set(0, 0, 1), s.add(i);
        var r = new THREE.LoadingManager();
        r.onProgress = function (t, e, i) {};
        var a = new THREE.Texture();
        new THREE.ImageLoader(r).load(
          "./images/Verdammnis_und_Erlîsung_tex.png",
          function (t) {
            (a.image = t), (a.needsUpdate = !0);
          }
        ),
          new THREE.OBJLoader(r).load(
            "./images/Verdammnis_und_Erlîsung.obj",
            function (t) {
              t.traverse(function (t) {
                t instanceof THREE.Mesh && (t.material.map = a);
              }),
                (t.scale.x = 30),
                (t.scale.y = 30),
                (t.scale.z = 30),
                (t.rotation.y = 20),
                (t.position.y = 0),
                s.add(t);
            },
            function (t) {
              if (t.lengthComputable) {
                var e = (t.loaded / t.total) * 100;
                Math.round(e, 2);
              }
            },
            function (t) {}
          ),
          (o = new THREE.WebGLRenderer({
            alpha: !0,
            antialias: !0,
          })).setPixelRatio(window.devicePixelRatio),
          o.setSize(window.innerWidth, window.innerHeight),
          t.appendChild(o.domElement),
          document.addEventListener("mousemove", P, !1),
          window.addEventListener("resize", T, !1);
      })(),
        (function t() {
          requestAnimationFrame(t),
            (n.position.x += 0.05 * (x - n.position.x)),
            (n.position.y += 0.05 * (b - n.position.y)),
            n.lookAt(s.position),
            o.render(s, n);
        })(),
        ((self || window).Two = (function (n) {
          var s;
          s =
            "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : this;
          var o = Object.prototype.toString,
            a = {
              _indexAmount: 0,
              natural: {
                slice: Array.prototype.slice,
                indexOf: Array.prototype.indexOf,
                keys: Object.keys,
                bind: Function.prototype.bind,
                create: Object.create,
              },
              identity: function (t) {
                return t;
              },
              isArguments: function (t) {
                return "[object Arguments]" === o.call(t);
              },
              isFunction: function (t) {
                return "[object Function]" === o.call(t);
              },
              isString: function (t) {
                return "[object String]" === o.call(t);
              },
              isNumber: function (t) {
                return "[object Number]" === o.call(t);
              },
              isDate: function (t) {
                return "[object Date]" === o.call(t);
              },
              isRegExp: function (t) {
                return "[object RegExp]" === o.call(t);
              },
              isError: function (t) {
                return "[object Error]" === o.call(t);
              },
              isFinite: (function (t) {
                function e(e) {
                  return t.apply(this, arguments);
                }
                return (
                  (e.toString = function () {
                    return t.toString();
                  }),
                  e
                );
              })(function (t) {
                return isFinite(t) && !isNaN(parseFloat(t));
              }),
              isNaN: function (t) {
                return a.isNumber(t) && t !== +t;
              },
              isBoolean: function (t) {
                return !0 === t || !1 === t || "[object Boolean]" === o.call(t);
              },
              isNull: function (t) {
                return null === t;
              },
              isUndefined: function (t) {
                return void 0 === t;
              },
              isEmpty: function (t) {
                return (
                  null == t ||
                  (b && (a.isArray(t) || a.isString(t) || a.isArguments(t))
                    ? 0 === t.length
                    : 0 === a.keys(t).length)
                );
              },
              isElement: function (t) {
                return !(!t || 1 !== t.nodeType);
              },
              isArray:
                Array.isArray ||
                function (t) {
                  return "[object Array]" === o.call(t);
                },
              isObject: function (t) {
                var e = r(t);
                return "function" === e || ("object" === e && !!t);
              },
              toArray: function (t) {
                return t
                  ? a.isArray(t)
                    ? v.call(t)
                    : b(t)
                    ? a.map(t, a.identity)
                    : a.values(t)
                  : [];
              },
              range: function (t, e, i) {
                null == e && ((e = t || 0), (t = 0)), (i = i || 1);
                for (
                  var r = Math.max(Math.ceil((e - t) / i), 0),
                    n = Array(r),
                    s = 0;
                  s < r;
                  s++, t += i
                )
                  n[s] = t;
                return n;
              },
              indexOf: function (t, e) {
                if (a.natural.indexOf) return a.natural.indexOf.call(t, e);
                for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
                return -1;
              },
              has: function (t, e) {
                return null != t && hasOwnProperty.call(t, e);
              },
              bind: function (t, e) {
                var i = a.natural.bind;
                if (i && t.bind === i) return i.apply(t, v.call(arguments, 1));
                var r = v.call(arguments, 2);
                return function () {
                  t.apply(e, r);
                };
              },
              extend: function (t) {
                for (var e = v.call(arguments, 1), i = 0; i < e.length; i++) {
                  var r = e[i];
                  for (var n in r) t[n] = r[n];
                }
                return t;
              },
              defaults: function (t) {
                for (var e = v.call(arguments, 1), i = 0; i < e.length; i++) {
                  var r = e[i];
                  for (var n in r) void 0 === t[n] && (t[n] = r[n]);
                }
                return t;
              },
              keys: function (t) {
                if (!a.isObject(t)) return [];
                if (a.natural.keys) return a.natural.keys(t);
                var e = [];
                for (var i in t) a.has(t, i) && e.push(i);
                return e;
              },
              values: function (t) {
                for (var e = a.keys(t), i = [], r = 0; r < e.length; r++) {
                  var n = e[r];
                  i.push(t[n]);
                }
                return i;
              },
              each: function (t, e, i) {
                for (
                  var r = i || this,
                    n = !b(t) && a.keys(t),
                    s = (n || t).length,
                    o = 0;
                  o < s;
                  o++
                ) {
                  var l = n ? n[o] : o;
                  e.call(r, t[l], l, t);
                }
                return t;
              },
              map: function (t, e, i) {
                for (
                  var r = i || this,
                    n = !b(t) && a.keys(t),
                    s = (n || t).length,
                    o = [],
                    l = 0;
                  l < s;
                  l++
                ) {
                  var h = n ? n[l] : l;
                  o[l] = e.call(r, t[h], h, t);
                }
                return o;
              },
              once: function (t) {
                var e = !1;
                return function () {
                  return e ? t : ((e = !0), t.apply(this, arguments));
                };
              },
              after: function (t, e) {
                return function () {
                  for (; --t < 1; ) return e.apply(this, arguments);
                };
              },
              uniqueId: function (t) {
                var e = ++a._indexAmount + "";
                return t ? t + e : e;
              },
            },
            l = Math.sin,
            h = Math.cos,
            c = (Math.acos, Math.atan2, Math.sqrt),
            u = (Math.round, Math.abs),
            d = Math.PI,
            f = d / 2,
            p = Math.pow,
            g = Math.min,
            m = Math.max,
            _ = 0,
            v = a.natural.slice,
            y = s.performance && s.performance.now ? s.performance : Date,
            x = Math.pow(2, 53) - 1,
            b = function (t) {
              var e,
                i = null == (e = t) ? void 0 : e.length;
              return "number" == typeof i && 0 <= i && i <= x;
            },
            w = {
              temp: s.document ? s.document.createElement("div") : {},
              hasEventListeners: a.isFunction(s.addEventListener),
              bind: function (t, e, i, r) {
                return (
                  this.hasEventListeners
                    ? t.addEventListener(e, i, !!r)
                    : t.attachEvent("on" + e, i),
                  w
                );
              },
              unbind: function (t, e, i, r) {
                return (
                  w.hasEventListeners
                    ? t.removeEventListeners(e, i, !!r)
                    : t.detachEvent("on" + e, i),
                  w
                );
              },
              getRequestAnimationFrame: function () {
                var t,
                  e = 0,
                  i = ["ms", "moz", "webkit", "o"],
                  r = s.requestAnimationFrame;
                if (!r) {
                  for (var n = 0; n < i.length; n++)
                    (r = s[i[n] + "RequestAnimationFrame"] || r),
                      (t =
                        s[i[n] + "CancelAnimationFrame"] ||
                        s[i[n] + "CancelRequestAnimationFrame"] ||
                        t);
                  r =
                    r ||
                    function (t, i) {
                      var r = new Date().getTime(),
                        n = Math.max(0, 16 - (r - e)),
                        o = s.setTimeout(function () {
                          t(r + n);
                        }, n);
                      return (e = r + n), o;
                    };
                }
                return (r.init = a.once(B)), r;
              },
            },
            S = (s.Two = function (t) {
              var e = a.defaults(t || {}, {
                fullscreen: !1,
                width: 640,
                height: 480,
                type: S.Types.svg,
                autostart: !1,
              });
              if (
                (a.each(
                  e,
                  function (t, e) {
                    /fullscreen/i.test(e) ||
                      /autostart/i.test(e) ||
                      (this[e] = t);
                  },
                  this
                ),
                a.isElement(e.domElement))
              ) {
                var i = e.domElement.tagName.toLowerCase();
                /^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(
                  this.type + "-" + i
                ) || (this.type = S.Types[i]);
              }
              if (
                ((this.renderer = new S[this.type](this)),
                S.Utils.setPlaying.call(this, e.autostart),
                (this.frameCount = 0),
                e.fullscreen)
              ) {
                var r = a.bind(O, this);
                a.extend(document.body.style, { overflow: "hidden" }),
                  a.extend(this.renderer.domElement.style, {
                    display: "block",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed",
                  }),
                  w.bind(s, "resize", r),
                  r();
              } else
                a.isElement(e.domElement) ||
                  (this.renderer.setSize(e.width, e.height, this.ratio),
                  (this.width = e.width),
                  (this.height = e.height));
              this.renderer.bind(S.Events.resize, a.bind(E, this)),
                (this.scene = this.renderer.scene),
                S.Instances.push(this),
                e.autostart && F.init();
            });
          a.extend(S, {
            root: s,
            nextFrameID: null,
            Array: s.Float32Array || Array,
            Types: {
              webgl: "WebGLRenderer",
              svg: "SVGRenderer",
              canvas: "CanvasRenderer",
            },
            Version: "v0.7.0-beta.4",
            PublishDate: "2019-01-29T09:17:29+01:00",
            Identifier: "two-",
            Events: {
              play: "play",
              pause: "pause",
              update: "update",
              render: "render",
              resize: "resize",
              change: "change",
              remove: "remove",
              insert: "insert",
              order: "order",
              load: "load",
            },
            Commands: {
              move: "M",
              line: "L",
              curve: "C",
              arc: "A",
              close: "Z",
            },
            Resolution: 12,
            Instances: [],
            noConflict: function () {
              return (s.Two = n), S;
            },
            uniqueId: function () {
              var t = _;
              return _++, t;
            },
            Utils: a.extend(a, {
              performance: y,
              defineProperty: function (t) {
                var e = "_" + t,
                  i = "_flag" + t.charAt(0).toUpperCase() + t.slice(1);
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  get: function () {
                    return this[e];
                  },
                  set: function (t) {
                    (this[e] = t), (this[i] = !0);
                  },
                });
              },
              Image: null,
              isHeadless: !1,
              shim: function (t, e) {
                return (
                  S.CanvasRenderer.Utils.shim(t),
                  a.isUndefined(e) || (S.Utils.Image = e),
                  (S.Utils.isHeadless = !0),
                  t
                );
              },
              release: function (t) {
                if (a.isObject(t))
                  return (
                    a.isFunction(t.unbind) && t.unbind(),
                    t.vertices &&
                      (a.isFunction(t.vertices.unbind) && t.vertices.unbind(),
                      a.each(t.vertices, function (t) {
                        a.isFunction(t.unbind) && t.unbind();
                      })),
                    t.children &&
                      a.each(t.children, function (t) {
                        S.Utils.release(t);
                      }),
                    t
                  );
              },
              xhr: function (t, e) {
                var i = new XMLHttpRequest();
                return (
                  i.open("GET", t),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && e(i.responseText);
                  }),
                  i.send(),
                  i
                );
              },
              Curve: {
                CollinearityEpsilon: p(10, -30),
                RecursionLimit: 16,
                CuspLimit: 0,
                Tolerance: {
                  distance: 0.25,
                  angle: 0,
                  epsilon: Number.EPSILON,
                },
                abscissas: [
                  [0.5773502691896257],
                  [0, 0.7745966692414834],
                  [0.33998104358485626, 0.8611363115940526],
                  [0, 0.5384693101056831, 0.906179845938664],
                  [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
                  [
                    0, 0.4058451513773972, 0.7415311855993945,
                    0.9491079123427585,
                  ],
                  [
                    0.1834346424956498, 0.525532409916329, 0.7966664774136267,
                    0.9602898564975363,
                  ],
                  [
                    0, 0.3242534234038089, 0.6133714327005904,
                    0.8360311073266358, 0.9681602395076261,
                  ],
                  [
                    0.14887433898163122, 0.4333953941292472, 0.6794095682990244,
                    0.8650633666889845, 0.9739065285171717,
                  ],
                  [
                    0, 0.26954315595234496, 0.5190961292068118,
                    0.7301520055740494, 0.8870625997680953, 0.978228658146057,
                  ],
                  [
                    0.1252334085114689, 0.3678314989981802, 0.5873179542866175,
                    0.7699026741943047, 0.9041172563704749, 0.9815606342467192,
                  ],
                  [
                    0, 0.2304583159551348, 0.44849275103644687,
                    0.6423493394403402, 0.8015780907333099, 0.9175983992229779,
                    0.9841830547185881,
                  ],
                  [
                    0.10805494870734367, 0.31911236892788974,
                    0.5152486363581541, 0.6872929048116855, 0.827201315069765,
                    0.9284348836635735, 0.9862838086968123,
                  ],
                  [
                    0, 0.20119409399743451, 0.3941513470775634,
                    0.5709721726085388, 0.7244177313601701, 0.8482065834104272,
                    0.937273392400706, 0.9879925180204854,
                  ],
                  [
                    0.09501250983763744, 0.2816035507792589,
                    0.45801677765722737, 0.6178762444026438, 0.755404408355003,
                    0.8656312023878318, 0.9445750230732326, 0.9894009349916499,
                  ],
                ],
                weights: [
                  [1],
                  [0.8888888888888888, 0.5555555555555556],
                  [0.6521451548625461, 0.34785484513745385],
                  [
                    0.5688888888888889, 0.47862867049936647,
                    0.23692688505618908,
                  ],
                  [
                    0.46791393457269104, 0.3607615730481386,
                    0.17132449237917036,
                  ],
                  [
                    0.4179591836734694, 0.3818300505051189, 0.27970539148927664,
                    0.1294849661688697,
                  ],
                  [
                    0.362683783378362, 0.31370664587788727, 0.22238103445337448,
                    0.10122853629037626,
                  ],
                  [
                    0.3302393550012598, 0.31234707704000286,
                    0.26061069640293544, 0.1806481606948574,
                    0.08127438836157441,
                  ],
                  [
                    0.29552422471475287, 0.26926671930999635,
                    0.21908636251598204, 0.1494513491505806,
                    0.06667134430868814,
                  ],
                  [
                    0.2729250867779006, 0.26280454451024665,
                    0.23319376459199048, 0.18629021092773426,
                    0.1255803694649046, 0.05566856711617366,
                  ],
                  [
                    0.24914704581340277, 0.2334925365383548,
                    0.20316742672306592, 0.16007832854334622,
                    0.10693932599531843, 0.04717533638651183,
                  ],
                  [
                    0.2325515532308739, 0.22628318026289723, 0.2078160475368885,
                    0.17814598076194574, 0.13887351021978725,
                    0.09212149983772845, 0.04048400476531588,
                  ],
                  [
                    0.2152638534631578, 0.2051984637212956, 0.18553839747793782,
                    0.15720316715819355, 0.12151857068790319,
                    0.08015808715976021, 0.03511946033175186,
                  ],
                  [
                    0.2025782419255613, 0.19843148532711158, 0.1861610000155622,
                    0.16626920581699392, 0.13957067792615432,
                    0.10715922046717194, 0.07036604748810812,
                    0.03075324199611727,
                  ],
                  [
                    0.1894506104550685, 0.18260341504492358,
                    0.16915651939500254, 0.14959598881657674,
                    0.12462897125553388, 0.09515851168249279,
                    0.062253523938647894, 0.027152459411754096,
                  ],
                ],
              },
              devicePixelRatio: s.devicePixelRatio || 1,
              getBackingStoreRatio: function (t) {
                return (
                  t.webkitBackingStorePixelRatio ||
                  t.mozBackingStorePixelRatio ||
                  t.msBackingStorePixelRatio ||
                  t.oBackingStorePixelRatio ||
                  t.backingStorePixelRatio ||
                  1
                );
              },
              getRatio: function (t) {
                return S.Utils.devicePixelRatio / k(t);
              },
              setPlaying: function (t) {
                return (this.playing = !!t), this;
              },
              getComputedMatrix: function (t, e) {
                e = (e && e.identity()) || new S.Matrix();
                for (var i = t, r = []; i && i._matrix; )
                  r.push(i._matrix), (i = i.parent);
                r.reverse();
                for (var n = 0; n < r.length; n++) {
                  var s = r[n].elements;
                  e.multiply(
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    s[5],
                    s[6],
                    s[7],
                    s[8],
                    s[9]
                  );
                }
                return e;
              },
              deltaTransformPoint: function (t, e, i) {
                var r = e * t.a + i * t.c + 0,
                  n = e * t.b + i * t.d + 0;
                return new S.Vector(r, n);
              },
              decomposeMatrix: function (t) {
                var e = S.Utils.deltaTransformPoint(t, 0, 1),
                  i = S.Utils.deltaTransformPoint(t, 1, 0),
                  r = (180 / Math.PI) * Math.atan2(e.y, e.x) - 90,
                  n = (180 / Math.PI) * Math.atan2(i.y, i.x);
                return {
                  translateX: t.e,
                  translateY: t.f,
                  scaleX: Math.sqrt(t.a * t.a + t.b * t.b),
                  scaleY: Math.sqrt(t.c * t.c + t.d * t.d),
                  skewX: r,
                  skewY: n,
                  rotation: r,
                };
              },
              extractCSSText: function (t, e) {
                var i, r, n, s;
                e || (e = {}), (i = t.split(";"));
                for (var o = 0; o < i.length; o++)
                  (n = (r = i[o].split(":"))[0]),
                    (s = r[1]),
                    a.isUndefined(n) ||
                      a.isUndefined(s) ||
                      (e[n] = s.replace(/\s/, ""));
                return e;
              },
              getSvgStyles: function (t) {
                for (var e = {}, i = 0; i < t.style.length; i++) {
                  var r = t.style[i];
                  e[r] = t.style[r];
                }
                return e;
              },
              applySvgViewBox: function (t, e) {
                var i = e.split(/\s/),
                  r = parseFloat(i[0]),
                  n = parseFloat(i[1]),
                  s = parseFloat(i[2]),
                  o = parseFloat(i[3]),
                  a = Math.min(this.width / s, this.height / o);
                return (
                  (t.translation.x -= r * a),
                  (t.translation.y -= n * a),
                  (t.scale = a),
                  t
                );
              },
              applySvgAttributes: function (t, e, i) {
                var r,
                  n,
                  o,
                  l,
                  h = {},
                  c = {},
                  u = {};
                if (s.getComputedStyle) {
                  var d = s.getComputedStyle(t);
                  for (r = d.length; r--; )
                    (o = d[(n = d[r])]), a.isUndefined(o) || (h[n] = o);
                }
                for (r = 0; r < t.attributes.length; r++)
                  (l = t.attributes[r]),
                    /style/i.test(l.nodeName)
                      ? S.Utils.extractCSSText(l.value, u)
                      : (c[l.nodeName] = l.value);
                for (n in (a.isUndefined(h.opacity) ||
                  ((h["stroke-opacity"] = h.opacity),
                  (h["fill-opacity"] = h.opacity),
                  delete h.opacity),
                i && a.defaults(h, i),
                a.extend(h, c, u),
                (h.visible =
                  !(a.isUndefined(h.display) && /none/i.test(h.display)) ||
                  (a.isUndefined(h.visibility) &&
                    /hidden/i.test(h.visibility))),
                h))
                  switch (((o = h[n]), n)) {
                    case "transform":
                      if (/none/i.test(o)) break;
                      var f =
                        t.transform &&
                        t.transform.baseVal &&
                        0 < t.transform.baseVal.length
                          ? t.transform.baseVal[0].matrix
                          : t.getCTM
                          ? t.getCTM()
                          : null;
                      if (a.isNull(f)) break;
                      var p = S.Utils.decomposeMatrix(f);
                      e.translation.set(p.translateX, p.translateY),
                        (e.rotation = p.rotation),
                        (e.scale = new S.Vector(p.scaleX, p.scaleY));
                      var g = parseFloat((h.x + "").replace("px")),
                        m = parseFloat((h.y + "").replace("px"));
                      g && (e.translation.x = g), m && (e.translation.y = m);
                      break;
                    case "viewBox":
                      S.Utils.applySvgViewBox.call(this, e, o);
                      break;
                    case "visible":
                      e.visible = o;
                      break;
                    case "stroke-linecap":
                      e.cap = o;
                      break;
                    case "stroke-linejoin":
                      e.join = o;
                      break;
                    case "stroke-miterlimit":
                      e.miter = o;
                      break;
                    case "stroke-width":
                      e.linewidth = parseFloat(o);
                      break;
                    case "opacity":
                    case "stroke-opacity":
                    case "fill-opacity":
                      e instanceof S.Group || (e.opacity = parseFloat(o));
                      break;
                    case "fill":
                    case "stroke":
                      /url\(\#.*\)/i.test(o)
                        ? (e[n] = this.getById(
                            o.replace(/url\(\#(.*)\)/i, "$1")
                          ))
                        : (e[n] = /none/i.test(o) ? "transparent" : o);
                      break;
                    case "id":
                      e.id = o;
                      break;
                    case "class":
                    case "className":
                      e.classList = o.split(" ");
                  }
                return h;
              },
              read: {
                svg: function (t) {
                  var e = S.Utils.read.g.call(this, t);
                  return t.getAttribute("viewBox"), e;
                },
                g: function (t) {
                  var e,
                    i = new S.Group();
                  e = S.Utils.getSvgStyles.call(this, t);
                  for (var r = 0, n = t.childNodes.length; r < n; r++) {
                    var s = t.childNodes[r],
                      o = s.nodeName;
                    if (!o) return;
                    var a = o.replace(/svg\:/gi, "").toLowerCase();
                    if (a in S.Utils.read) {
                      var l = S.Utils.read[a].call(i, s, e);
                      i.add(l);
                    }
                  }
                  return i;
                },
                polygon: function (t, e) {
                  var i = t.getAttribute("points"),
                    r = [];
                  i.replace(
                    /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,
                    function (t, e, i) {
                      r.push(new S.Anchor(parseFloat(e), parseFloat(i)));
                    }
                  );
                  var n = new S.Path(r, !0).noStroke();
                  return (
                    (n.fill = "black"),
                    S.Utils.applySvgAttributes.call(this, t, n, e),
                    n
                  );
                },
                polyline: function (t, e) {
                  var i = S.Utils.read.polygon.call(this, t, e);
                  return (i.closed = !1), i;
                },
                path: function (t, e) {
                  var i,
                    r,
                    n = t.getAttribute("d"),
                    s = new S.Anchor(),
                    o = !1,
                    l = !1,
                    h = n.match(/[a-df-z][^a-df-z]*/gi),
                    c = h.length - 1;
                  a.each(h.slice(0), function (t, e) {
                    var i,
                      r,
                      n,
                      s,
                      o,
                      a,
                      l,
                      c,
                      u,
                      d = t[0],
                      f = d.toLowerCase(),
                      p = t
                        .slice(1)
                        .trim()
                        .split(/[\s,]+|(?=\s?[+\-])/),
                      g = [],
                      m = !1;
                    for (o = 0; o < p.length; o++)
                      if ((i = p[o]).indexOf(".") !== i.lastIndexOf(".")) {
                        for (
                          n = (r = i.split("."))[0] + "." + r[1],
                            p.splice(o, 1, n),
                            s = 2;
                          s < r.length;
                          s++
                        )
                          p.splice(o + s - 1, 0, "0." + r[s]);
                        m = !0;
                      }
                    switch (
                      (m && (t = d + p.join(",")), e <= 0 && (h = []), f)
                    ) {
                      case "h":
                      case "v":
                        1 < p.length && (u = 1);
                        break;
                      case "m":
                      case "l":
                      case "t":
                        2 < p.length && (u = 2);
                        break;
                      case "s":
                      case "q":
                        4 < p.length && (u = 4);
                        break;
                      case "c":
                        6 < p.length && (u = 6);
                        break;
                      case "a":
                        7 < p.length && (u = 7);
                    }
                    if (u) {
                      for (o = 0, l = p.length, c = 0; o < l; o += u) {
                        if (((a = d), 0 < c))
                          switch (d) {
                            case "m":
                              a = "l";
                              break;
                            case "M":
                              a = "L";
                          }
                        g.push(a + p.slice(o, o + u).join(" ")), c++;
                      }
                      h = Array.prototype.concat.apply(h, g);
                    } else h.push(t);
                  });
                  var u = [];
                  if (
                    (a.each(h, function (t, e) {
                      var n,
                        h,
                        d,
                        f,
                        g,
                        m,
                        _,
                        v,
                        y,
                        x,
                        b,
                        w,
                        T = t[0],
                        P = T.toLowerCase();
                      switch (
                        ((r = (r = (r = t.slice(1).trim()).replace(
                          /(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g,
                          function (t, e, i) {
                            return parseFloat(e) * p(10, i);
                          }
                        )).split(/[\s,]+|(?=\s?[+\-])/)),
                        (l = T === P),
                        P)
                      ) {
                        case "z":
                          if (c <= e) o = !0;
                          else
                            for (
                              h = s.x,
                                d = s.y,
                                n = new S.Anchor(
                                  h,
                                  d,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  S.Commands.close
                                ),
                                e = u.length - 1;
                              0 <= e;
                              e--
                            ) {
                              var C = u[e];
                              if (/m/i.test(C.command)) {
                                s = C;
                                break;
                              }
                            }
                          break;
                        case "m":
                        case "l":
                          (i = void 0),
                            (h = parseFloat(r[0])),
                            (d = parseFloat(r[1])),
                            (n = new S.Anchor(
                              h,
                              d,
                              void 0,
                              void 0,
                              void 0,
                              void 0,
                              /m/i.test(P) ? S.Commands.move : S.Commands.line
                            )),
                            l && n.addSelf(s),
                            (s = n);
                          break;
                        case "h":
                        case "v":
                          var k = /h/i.test(P) ? "x" : "y",
                            A = /x/i.test(k) ? "y" : "x";
                          ((n = new S.Anchor(
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            S.Commands.line
                          ))[k] = parseFloat(r[0])),
                            (n[A] = s[A]),
                            l && (n[k] += s[k]),
                            (s = n);
                          break;
                        case "c":
                        case "s":
                          (f = s.x),
                            (g = s.y),
                            i || (i = new S.Vector()),
                            (b = /c/i.test(P)
                              ? ((m = parseFloat(r[0])),
                                (_ = parseFloat(r[1])),
                                (v = parseFloat(r[2])),
                                (y = parseFloat(r[3])),
                                (x = parseFloat(r[4])),
                                parseFloat(r[5]))
                              : ((m = (w = R(s, i, l)).x),
                                (_ = w.y),
                                (v = parseFloat(r[0])),
                                (y = parseFloat(r[1])),
                                (x = parseFloat(r[2])),
                                parseFloat(r[3]))),
                            l &&
                              ((m += f),
                              (_ += g),
                              (v += f),
                              (y += g),
                              (x += f),
                              (b += g)),
                            a.isObject(s.controls) ||
                              S.Anchor.AppendCurveProperties(s),
                            s.controls.right.set(m - s.x, _ - s.y),
                            (n = new S.Anchor(
                              x,
                              b,
                              v - x,
                              y - b,
                              void 0,
                              void 0,
                              S.Commands.curve
                            )),
                            (i = (s = n).controls.left);
                          break;
                        case "t":
                        case "q":
                          (f = s.x),
                            (g = s.y),
                            i || (i = new S.Vector()),
                            (_ = i.isZero() ? ((m = f), g) : ((m = i.x), i.y)),
                            (b = /q/i.test(P)
                              ? ((v = parseFloat(r[0])),
                                (y = parseFloat(r[1])),
                                (x = parseFloat(r[2])),
                                parseFloat(r[3]))
                              : ((v = (w = R(s, i, l)).x),
                                (y = w.y),
                                (x = parseFloat(r[0])),
                                parseFloat(r[1]))),
                            l &&
                              ((m += f),
                              (_ += g),
                              (v += f),
                              (y += g),
                              (x += f),
                              (b += g)),
                            a.isObject(s.controls) ||
                              S.Anchor.AppendCurveProperties(s),
                            s.controls.right.set(m - s.x, _ - s.y),
                            (n = new S.Anchor(
                              x,
                              b,
                              v - x,
                              y - b,
                              void 0,
                              void 0,
                              S.Commands.curve
                            )),
                            (i = (s = n).controls.left);
                          break;
                        case "a":
                          (f = s.x), (g = s.y);
                          var M = parseFloat(r[0]),
                            O = parseFloat(r[1]),
                            E = parseFloat(r[2]),
                            F = parseFloat(r[3]),
                            B = parseFloat(r[4]);
                          (x = parseFloat(r[5])),
                            (b = parseFloat(r[6])),
                            l && ((x += f), (b += g));
                          var I = new S.Anchor(x, b);
                          (I.command = S.Commands.arc),
                            (I.rx = M),
                            (I.ry = O),
                            (I.xAxisRotation = E),
                            (I.largeArcFlag = F),
                            (I.sweepFlag = B),
                            (s = n = I),
                            (i = void 0);
                      }
                      n && (a.isArray(n) ? (u = u.concat(n)) : u.push(n));
                    }),
                    !(u.length <= 1))
                  ) {
                    (n = new S.Path(u, o, void 0, !0).noStroke()).fill =
                      "black";
                    var d = n.getBoundingClientRect(!0);
                    return (
                      (d.centroid = {
                        x: d.left + d.width / 2,
                        y: d.top + d.height / 2,
                      }),
                      a.each(n.vertices, function (t) {
                        t.subSelf(d.centroid);
                      }),
                      n.translation.addSelf(d.centroid),
                      S.Utils.applySvgAttributes.call(this, t, n, e),
                      n
                    );
                  }
                },
                circle: function (t, e) {
                  var i = parseFloat(t.getAttribute("cx")),
                    r = parseFloat(t.getAttribute("cy")),
                    n = parseFloat(t.getAttribute("r")),
                    s = new S.Circle(i, r, n).noStroke();
                  return (
                    (s.fill = "black"),
                    S.Utils.applySvgAttributes.call(this, t, s, e),
                    s
                  );
                },
                ellipse: function (t, e) {
                  var i = parseFloat(t.getAttribute("cx")),
                    r = parseFloat(t.getAttribute("cy")),
                    n = parseFloat(t.getAttribute("rx")),
                    s = parseFloat(t.getAttribute("ry")),
                    o = new S.Ellipse(i, r, n, s).noStroke();
                  return (
                    (o.fill = "black"),
                    S.Utils.applySvgAttributes.call(this, t, o, e),
                    o
                  );
                },
                rect: function (t, e) {
                  var i = parseFloat(t.getAttribute("rx")),
                    r = parseFloat(t.getAttribute("ry"));
                  if (!a.isNaN(i) || !a.isNaN(r))
                    return S.Utils.read["rounded-rect"](t);
                  var n = parseFloat(t.getAttribute("x")) || 0,
                    s = parseFloat(t.getAttribute("y")) || 0,
                    o = parseFloat(t.getAttribute("width")),
                    l = parseFloat(t.getAttribute("height")),
                    h = o / 2,
                    c = l / 2,
                    u = new S.Rectangle(n + h, s + c, o, l).noStroke();
                  return (
                    (u.fill = "black"),
                    S.Utils.applySvgAttributes.call(this, t, u, e),
                    u
                  );
                },
                "rounded-rect": function (t, e) {
                  var i = parseFloat(t.getAttribute("x")) || 0,
                    r = parseFloat(t.getAttribute("y")) || 0,
                    n = parseFloat(t.getAttribute("rx")) || 0,
                    s = parseFloat(t.getAttribute("ry")) || 0,
                    o = parseFloat(t.getAttribute("width")),
                    a = parseFloat(t.getAttribute("height")),
                    l = o / 2,
                    h = a / 2,
                    c = new S.Vector(n, s),
                    u = new S.RoundedRectangle(
                      i + l,
                      r + h,
                      o,
                      a,
                      c
                    ).noStroke();
                  return (
                    (u.fill = "black"),
                    S.Utils.applySvgAttributes.call(this, t, u, e),
                    u
                  );
                },
                line: function (t, e) {
                  var i = parseFloat(t.getAttribute("x1")),
                    r = parseFloat(t.getAttribute("y1")),
                    n = parseFloat(t.getAttribute("x2")),
                    s = parseFloat(t.getAttribute("y2")),
                    o = new S.Line(i, r, n, s).noFill();
                  return S.Utils.applySvgAttributes.call(this, t, o, e), o;
                },
                lineargradient: function (t, e) {
                  for (
                    var i = parseFloat(t.getAttribute("x1")),
                      r = parseFloat(t.getAttribute("y1")),
                      n = parseFloat(t.getAttribute("x2")),
                      s = parseFloat(t.getAttribute("y2")),
                      o = (n + i) / 2,
                      l = (s + r) / 2,
                      h = [],
                      c = 0;
                    c < t.children.length;
                    c++
                  ) {
                    var u,
                      d = t.children[c],
                      f = parseFloat(d.getAttribute("offset")),
                      p = d.getAttribute("stop-color"),
                      g = d.getAttribute("stop-opacity"),
                      m = d.getAttribute("style");
                    a.isNull(p) &&
                      (p =
                        (u =
                          !!m && m.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/)) &&
                        1 < u.length
                          ? u[1]
                          : void 0),
                      a.isNull(g) &&
                        (g =
                          (u =
                            !!m && m.match(/stop\-opacity\:\s?([0-9\.\-]*)/)) &&
                          1 < u.length
                            ? parseFloat(u[1])
                            : 1),
                      h.push(new S.Gradient.Stop(f, p, g));
                  }
                  var _ = new S.LinearGradient(i - o, r - l, n - o, s - l, h);
                  return S.Utils.applySvgAttributes.call(this, t, _, e), _;
                },
                radialgradient: function (t, e) {
                  var i = parseFloat(t.getAttribute("cx")) || 0,
                    r = parseFloat(t.getAttribute("cy")) || 0,
                    n = parseFloat(t.getAttribute("r")),
                    s = parseFloat(t.getAttribute("fx")),
                    o = parseFloat(t.getAttribute("fy"));
                  a.isNaN(s) && (s = i), a.isNaN(o) && (o = r);
                  for (
                    var l = u(i + s) / 2, h = u(r + o) / 2, c = [], d = 0;
                    d < t.children.length;
                    d++
                  ) {
                    var f,
                      p = t.children[d],
                      g = parseFloat(p.getAttribute("offset")),
                      m = p.getAttribute("stop-color"),
                      _ = p.getAttribute("stop-opacity"),
                      v = p.getAttribute("style");
                    a.isNull(m) &&
                      (m =
                        (f =
                          !!v && v.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/)) &&
                        1 < f.length
                          ? f[1]
                          : void 0),
                      a.isNull(_) &&
                        (_ =
                          (f =
                            !!v && v.match(/stop\-opacity\:\s?([0-9\.\-]*)/)) &&
                          1 < f.length
                            ? parseFloat(f[1])
                            : 1),
                      c.push(new S.Gradient.Stop(g, m, _));
                  }
                  var y = new S.RadialGradient(
                    i - l,
                    r - h,
                    n,
                    c,
                    s - l,
                    o - h
                  );
                  return S.Utils.applySvgAttributes.call(this, t, y, e), y;
                },
              },
              subdivide: function (t, e, i, r, n, s, o, a, l) {
                var h = (l = l || S.Utils.Curve.RecursionLimit) + 1;
                if (u(t - o) < 0.001 && u(e - a) < 0.001)
                  return [new S.Anchor(o, a)];
                for (var c = [], d = 0; d < h; d++) {
                  var f = d / h,
                    p = A(f, t, i, n, o),
                    g = A(f, e, r, s, a);
                  c.push(new S.Anchor(p, g));
                }
                return c;
              },
              getComponentOnCubicBezier: function (t, e, i, r, n) {
                var s = 1 - t;
                return (
                  s * s * s * e +
                  3 * s * s * t * i +
                  3 * s * t * t * r +
                  t * t * t * n
                );
              },
              getCurveLength: function (t, e, i, r, n, s, o, a, l) {
                if (t === i && e === r && n === o && s === a) {
                  var h = o - t,
                    u = a - e;
                  return c(h * h + u * u);
                }
                var d = 9 * (i - n) + 3 * (o - t),
                  f = 6 * (t + n) - 12 * i,
                  p = 3 * (i - t),
                  g = 9 * (r - s) + 3 * (a - e),
                  m = 6 * (e + s) - 12 * r,
                  _ = 3 * (r - e);
                return M(
                  function (t) {
                    var e = (d * t + f) * t + p,
                      i = (g * t + m) * t + _;
                    return c(e * e + i * i);
                  },
                  0,
                  1,
                  l || S.Utils.Curve.RecursionLimit
                );
              },
              getCurveBoundingBox: function (t, e, i, r, n, s, o, a) {
                for (
                  var l, h, c, d, f, p, g, m, _ = [], v = [[], []], y = 0;
                  y < 2;
                  ++y
                )
                  if (
                    ((c =
                      0 == y
                        ? ((h = 6 * t - 12 * i + 6 * n),
                          (l = -3 * t + 9 * i - 9 * n + 3 * o),
                          3 * i - 3 * t)
                        : ((h = 6 * e - 12 * r + 6 * s),
                          (l = -3 * e + 9 * r - 9 * s + 3 * a),
                          3 * r - 3 * e)),
                    u(l) < 1e-12)
                  ) {
                    if (u(h) < 1e-12) continue;
                    0 < (d = -c / h) && d < 1 && _.push(d);
                  } else
                    (g = h * h - 4 * c * l),
                      (m = Math.sqrt(g)),
                      g < 0 ||
                        (0 < (f = (-h + m) / (2 * l)) && f < 1 && _.push(f),
                        0 < (p = (-h - m) / (2 * l)) && p < 1 && _.push(p));
                for (var x, b = _.length, w = b; b--; )
                  (x = 1 - (d = _[b])),
                    (v[0][b] =
                      x * x * x * t +
                      3 * x * x * d * i +
                      3 * x * d * d * n +
                      d * d * d * o),
                    (v[1][b] =
                      x * x * x * e +
                      3 * x * x * d * r +
                      3 * x * d * d * s +
                      d * d * d * a);
                return (
                  (v[0][w] = t),
                  (v[1][w] = e),
                  (v[0][w + 1] = o),
                  (v[1][w + 1] = a),
                  (v[0].length = v[1].length = w + 2),
                  {
                    min: {
                      x: Math.min.apply(0, v[0]),
                      y: Math.min.apply(0, v[1]),
                    },
                    max: {
                      x: Math.max.apply(0, v[0]),
                      y: Math.max.apply(0, v[1]),
                    },
                  }
                );
              },
              integrate: function (t, e, i, r) {
                for (
                  var n = S.Utils.Curve.abscissas[r - 2],
                    s = S.Utils.Curve.weights[r - 2],
                    o = 0.5 * (i - e),
                    a = o + e,
                    l = 0,
                    h = (r + 1) >> 1,
                    c = 1 & r ? s[l++] * t(a) : 0;
                  l < h;

                ) {
                  var u = o * n[l];
                  c += s[l++] * (t(a + u) + t(a - u));
                }
                return o * c;
              },
              getCurveFromPoints: function (t, e) {
                for (var i = t.length, r = i - 1, n = 0; n < i; n++) {
                  var s = t[n];
                  a.isObject(s.controls) || S.Anchor.AppendCurveProperties(s);
                  var o = e ? C(n - 1, i) : m(n - 1, 0),
                    l = e ? C(n + 1, i) : g(n + 1, r),
                    h = t[o],
                    c = s,
                    u = t[l];
                  P(h, c, u),
                    (c.command = 0 === n ? S.Commands.move : S.Commands.curve);
                }
              },
              getControlPoints: function (t, e, i) {
                var r = S.Vector.angleBetween(t, e),
                  n = S.Vector.angleBetween(i, e),
                  s = S.Vector.distanceBetween(t, e),
                  o = S.Vector.distanceBetween(i, e),
                  c = (r + n) / 2;
                return (
                  s < 1e-4 || o < 1e-4
                    ? a.isBoolean(e.relative) &&
                      !e.relative &&
                      (e.controls.left.copy(e), e.controls.right.copy(e))
                    : ((s *= 0.33),
                      (o *= 0.33),
                      n < r ? (c += f) : (c -= f),
                      (e.controls.left.x = h(c) * s),
                      (e.controls.left.y = l(c) * s),
                      (c -= d),
                      (e.controls.right.x = h(c) * o),
                      (e.controls.right.y = l(c) * o),
                      a.isBoolean(e.relative) &&
                        !e.relative &&
                        ((e.controls.left.x += e.x),
                        (e.controls.left.y += e.y),
                        (e.controls.right.x += e.x),
                        (e.controls.right.y += e.y))),
                  e
                );
              },
              getReflection: function (t, e, i) {
                return new S.Vector(
                  2 * t.x - (e.x + t.x) - (i ? t.x : 0),
                  2 * t.y - (e.y + t.y) - (i ? t.y : 0)
                );
              },
              getAnchorsFromArcData: function (t, e, i, r, n, s, o) {
                new S.Matrix().translate(t.x, t.y).rotate(e);
                var l = S.Resolution;
                return a.map(a.range(l), function (t) {
                  var e = (t + 1) / l;
                  o && (e = 1 - e);
                  var a = e * s + n,
                    h = i * Math.cos(a),
                    c = r * Math.sin(a),
                    u = new S.Anchor(h, c);
                  return (
                    S.Anchor.AppendCurveProperties(u),
                    (u.command = S.Commands.line),
                    u
                  );
                });
              },
              lerp: function (t, e, i) {
                return i * (e - t) + t;
              },
              toFixed: function (t) {
                return Math.floor(1e3 * t) / 1e3;
              },
              mod: function (t, e) {
                for (; t < 0; ) t += e;
                return t % e;
              },
              Collection: function () {
                Array.call(this),
                  1 < arguments.length
                    ? Array.prototype.push.apply(this, arguments)
                    : arguments[0] &&
                      Array.isArray(arguments[0]) &&
                      Array.prototype.push.apply(this, arguments[0]);
              },
              Error: function (t) {
                (this.name = "two.js"), (this.message = t);
              },
              Events: {
                on: function (t, e) {
                  return (
                    this._events || (this._events = {}),
                    (this._events[t] || (this._events[t] = [])).push(e),
                    this
                  );
                },
                off: function (t, e) {
                  if (!this._events) return this;
                  if (!t && !e) return (this._events = {}), this;
                  for (
                    var i = t ? [t] : a.keys(this._events), r = 0, n = i.length;
                    r < n;
                    r++
                  ) {
                    t = i[r];
                    var s = this._events[t];
                    if (s) {
                      var o = [];
                      if (e)
                        for (var l = 0, h = s.length; l < h; l++) {
                          var c = s[l];
                          (c = c.handler ? c.handler : c),
                            e && e !== c && o.push(c);
                        }
                      this._events[t] = o;
                    }
                  }
                  return this;
                },
                trigger: function (t) {
                  if (!this._events) return this;
                  var e = v.call(arguments, 1),
                    i = this._events[t];
                  return i && T(this, i, e), this;
                },
                listen: function (t, e, i) {
                  return t && t.on(e, ev), this;
                },
                ignore: function (t, e, i) {
                  return t.off(e, i), this;
                },
              },
            }),
          }),
            (S.Utils.Events.bind = S.Utils.Events.on),
            (S.Utils.Events.unbind = S.Utils.Events.off);
          var T = function (t, e, i) {
            var r;
            switch (i.length) {
              case 0:
                r = function (r) {
                  e[r].call(t, i[0]);
                };
                break;
              case 1:
                r = function (r) {
                  e[r].call(t, i[0], i[1]);
                };
                break;
              case 2:
                r = function (r) {
                  e[r].call(t, i[0], i[1], i[2]);
                };
                break;
              case 3:
                r = function (r) {
                  e[r].call(t, i[0], i[1], i[2], i[3]);
                };
                break;
              default:
                r = function (r) {
                  e[r].apply(t, i);
                };
            }
            for (var n = 0; n < e.length; n++) r(n);
          };
          (S.Utils.Error.prototype = new Error()),
            (S.Utils.Error.prototype.constructor = S.Utils.Error),
            (S.Utils.Collection.prototype = new Array()),
            (S.Utils.Collection.prototype.constructor = S.Utils.Collection),
            a.extend(S.Utils.Collection.prototype, S.Utils.Events, {
              pop: function () {
                var t = Array.prototype.pop.apply(this, arguments);
                return this.trigger(S.Events.remove, [t]), t;
              },
              shift: function () {
                var t = Array.prototype.shift.apply(this, arguments);
                return this.trigger(S.Events.remove, [t]), t;
              },
              push: function () {
                var t = Array.prototype.push.apply(this, arguments);
                return this.trigger(S.Events.insert, arguments), t;
              },
              unshift: function () {
                var t = Array.prototype.unshift.apply(this, arguments);
                return this.trigger(S.Events.insert, arguments), t;
              },
              splice: function () {
                var t,
                  e = Array.prototype.splice.apply(this, arguments);
                return (
                  this.trigger(S.Events.remove, e),
                  2 < arguments.length &&
                    ((t = this.slice(
                      arguments[0],
                      arguments[0] + arguments.length - 2
                    )),
                    this.trigger(S.Events.insert, t),
                    this.trigger(S.Events.order)),
                  e
                );
              },
              sort: function () {
                return (
                  Array.prototype.sort.apply(this, arguments),
                  this.trigger(S.Events.order),
                  this
                );
              },
              reverse: function () {
                return (
                  Array.prototype.reverse.apply(this, arguments),
                  this.trigger(S.Events.order),
                  this
                );
              },
            }),
            S.Utils.getAnchorsFromArcData;
          var P = S.Utils.getControlPoints,
            C =
              (S.Utils.getCurveFromPoints,
              S.Utils.solveSegmentIntersection,
              S.Utils.decoupleShapes,
              S.Utils.mod),
            k = S.Utils.getBackingStoreRatio,
            A = S.Utils.getComponentOnCubicBezier,
            M = (S.Utils.getCurveLength, S.Utils.integrate),
            R = S.Utils.getReflection;
          function O() {
            var t = document.body.getBoundingClientRect(),
              e = (this.width = t.width),
              i = (this.height = t.height);
            this.renderer.setSize(e, i, this.ratio);
          }
          function E(t, e) {
            (this.width = t),
              (this.height = e),
              this.trigger(S.Events.resize, t, e);
          }
          a.extend(S.prototype, S.Utils.Events, {
            constructor: S,
            appendTo: function (t) {
              return t.appendChild(this.renderer.domElement), this;
            },
            play: function () {
              return (
                S.Utils.setPlaying.call(this, !0),
                F.init(),
                this.trigger(S.Events.play)
              );
            },
            pause: function () {
              return (this.playing = !1), this.trigger(S.Events.pause);
            },
            update: function () {
              var t = !!this._lastFrame,
                e = y.now();
              t &&
                (this.timeDelta = parseFloat((e - this._lastFrame).toFixed(3))),
                (this._lastFrame = e);
              var i = this.width,
                r = this.height,
                n = this.renderer;
              return (
                (i === n.width && r === n.height) ||
                  n.setSize(i, r, this.ratio),
                this.trigger(S.Events.update, this.frameCount, this.timeDelta),
                this.render()
              );
            },
            render: function () {
              return (
                this.renderer.render(),
                this.trigger(S.Events.render, this.frameCount++)
              );
            },
            add: function (t) {
              var e = t;
              return (
                e instanceof Array || (e = a.toArray(arguments)),
                this.scene.add(e),
                this
              );
            },
            remove: function (t) {
              var e = t;
              return (
                e instanceof Array || (e = a.toArray(arguments)),
                this.scene.remove(e),
                this
              );
            },
            clear: function () {
              return this.scene.remove(this.scene.children), this;
            },
            makeLine: function (t, e, i, r) {
              var n = new S.Line(t, e, i, r);
              return this.scene.add(n), n;
            },
            makeRectangle: function (t, e, i, r) {
              var n = new S.Rectangle(t, e, i, r);
              return this.scene.add(n), n;
            },
            makeRoundedRectangle: function (t, e, i, r, n) {
              var s = new S.RoundedRectangle(t, e, i, r, n);
              return this.scene.add(s), s;
            },
            makeCircle: function (t, e, i) {
              var r = new S.Circle(t, e, i);
              return this.scene.add(r), r;
            },
            makeEllipse: function (t, e, i, r) {
              var n = new S.Ellipse(t, e, i, r);
              return this.scene.add(n), n;
            },
            makeStar: function (t, e, i, r, n) {
              var s = new S.Star(t, e, i, r, n);
              return this.scene.add(s), s;
            },
            makeCurve: function (t) {
              var e = arguments.length,
                i = t;
              if (!a.isArray(t)) {
                i = [];
                for (var r = 0; r < e; r += 2) {
                  var n = arguments[r];
                  if (!a.isNumber(n)) break;
                  var s = arguments[r + 1];
                  i.push(new S.Anchor(n, s));
                }
              }
              var o = arguments[e - 1],
                l = new S.Path(i, !(a.isBoolean(o) ? o : void 0), !0),
                h = l.getBoundingClientRect();
              return (
                l
                  .center()
                  .translation.set(h.left + h.width / 2, h.top + h.height / 2),
                this.scene.add(l),
                l
              );
            },
            makePolygon: function (t, e, i, r) {
              var n = new S.Polygon(t, e, i, r);
              return this.scene.add(n), n;
            },
            makeArcSegment: function (t, e, i, r, n, s, o) {
              var a = new S.ArcSegment(t, e, i, r, n, s, o);
              return this.scene.add(a), a;
            },
            makePath: function (t) {
              var e = arguments.length,
                i = t;
              if (!a.isArray(t)) {
                i = [];
                for (var r = 0; r < e; r += 2) {
                  var n = arguments[r];
                  if (!a.isNumber(n)) break;
                  var s = arguments[r + 1];
                  i.push(new S.Anchor(n, s));
                }
              }
              var o = arguments[e - 1],
                l = new S.Path(i, !(a.isBoolean(o) ? o : void 0)),
                h = l.getBoundingClientRect();
              return (
                l
                  .center()
                  .translation.set(h.left + h.width / 2, h.top + h.height / 2),
                this.scene.add(l),
                l
              );
            },
            makeText: function (t, e, i, r) {
              var n = new S.Text(t, e, i, r);
              return this.add(n), n;
            },
            makeLinearGradient: function (t, e, i, r) {
              var n = v.call(arguments, 4),
                s = new S.LinearGradient(t, e, i, r, n);
              return this.add(s), s;
            },
            makeRadialGradient: function (t, e, i) {
              var r = v.call(arguments, 3),
                n = new S.RadialGradient(t, e, i, r);
              return this.add(n), n;
            },
            makeSprite: function (t, e, i, r, n, s, o) {
              var a = new S.Sprite(t, e, i, r, n, s);
              return o && a.play(), this.add(a), a;
            },
            makeImageSequence: function (t, e, i, r, n) {
              var s = new S.ImageSequence(t, e, i, r);
              return n && s.play(), this.add(s), s;
            },
            makeTexture: function (t, e) {
              return new S.Texture(t, e);
            },
            makeGroup: function (t) {
              var e = t;
              e instanceof Array || (e = a.toArray(arguments));
              var i = new S.Group();
              return this.scene.add(i), i.add(e), i;
            },
            interpret: function (t, e, i) {
              var r = t.tagName.toLowerCase();
              if (((i = void 0 === i || i), !(r in S.Utils.read))) return null;
              var n = S.Utils.read[r].call(this, t);
              return (
                i && this.add(e && n instanceof S.Group ? n.children : n), n
              );
            },
            load: function (t, e) {
              var i,
                r,
                n,
                s = new S.Group(),
                o = a.bind(function (t) {
                  for (
                    w.temp.innerHTML = t, r = 0;
                    r < w.temp.children.length;
                    r++
                  )
                    if (((i = w.temp.children[r]), /svg/i.test(i.nodeName)))
                      for (n = 0; n < i.children.length; n++)
                        s.add(this.interpret(i.children[n]));
                    else s.add(this.interpret(i));
                  if (a.isFunction(e)) {
                    var o =
                      w.temp.children.length <= 1
                        ? w.temp.children[0]
                        : w.temp.children;
                    e(s, o);
                  }
                }, this);
              return /.*\.svg$/gi.test(t) ? S.Utils.xhr(t, o) : o(t), s;
            },
          });
          var F = w.getRequestAnimationFrame();
          function B() {
            for (var t = 0; t < S.Instances.length; t++) {
              var e = S.Instances[t];
              e.playing && e.update();
            }
            S.nextFrameID = F(B);
          }
          return (
            e.exports
              ? (e.exports = S)
              : "function" == typeof define &&
                i(5) &&
                define("two", [], function () {
                  return S;
                }),
            S
          );
        })((void 0 !== t ? t : self || window).Two)),
        (m = (void 0 !== t ? t : self || window).Two),
        (_ = m.Utils),
        (y = m.Registry =
          function () {
            this.map = {};
          }),
        _.extend(y.prototype, {
          constructor: y,
          add: function (t, e) {
            return (this.map[t] = e), this;
          },
          remove: function (t) {
            return delete this.map[t], this;
          },
          get: function (t) {
            return this.map[t];
          },
          contains: function (t) {
            return t in this.map;
          },
        }),
        (function (t) {
          var e = t.Utils,
            i = (t.Vector = function (t, e) {
              (this.x = t || 0), (this.y = e || 0);
            });
          e.extend(i, {
            zero: new t.Vector(),
            add: function (t, e) {
              return new i(t.x + e.x, t.y + e.y);
            },
            sub: function (t, e) {
              return new i(t.x - e.x, t.y - e.y);
            },
            subtract: function (t, e) {
              return i.sub(t, e);
            },
            ratioBetween: function (t, e) {
              return (t.x * e.x + t.y * e.y) / (t.length() * e.length());
            },
            angleBetween: function (t, e) {
              var i, r;
              return (
                (r =
                  4 <= arguments.length
                    ? ((i = t - arguments[2]), e - arguments[3])
                    : ((i = t.x - e.x), t.y - e.y)),
                Math.atan2(r, i)
              );
            },
            distanceBetween: function (t, e) {
              return Math.sqrt(i.distanceBetweenSquared(t, e));
            },
            distanceBetweenSquared: function (t, e) {
              var i = t.x - e.x,
                r = t.y - e.y;
              return i * i + r * r;
            },
            MakeObservable: function (i) {
              i.bind = i.on = function () {
                return (
                  this._bound ||
                    ((this._x = this.x),
                    (this._y = this.y),
                    Object.defineProperty(this, "x", n),
                    Object.defineProperty(this, "y", s),
                    e.extend(this, r),
                    (this._bound = !0)),
                  t.Utils.Events.bind.apply(this, arguments),
                  this
                );
              };
            },
          }),
            e.extend(i.prototype, t.Utils.Events, {
              constructor: i,
              set: function (t, e) {
                return (this.x = t), (this.y = e), this;
              },
              copy: function (t) {
                return (this.x = t.x), (this.y = t.y), this;
              },
              clear: function () {
                return (this.x = 0), (this.y = 0), this;
              },
              clone: function () {
                return new i(this.x, this.y);
              },
              add: function (t, i) {
                return (
                  arguments.length <= 0 ||
                    (arguments.length <= 1
                      ? e.isNumber(t)
                        ? ((this.x += t), (this.y += t))
                        : t &&
                          e.isNumber(t.x) &&
                          e.isNumber(t.y) &&
                          ((this.x += t.x), (this.y += t.y))
                      : ((this.x += t), (this.y += i))),
                  this
                );
              },
              addSelf: function (t) {
                return this.add.apply(this, arguments);
              },
              sub: function (t, i) {
                return (
                  arguments.length <= 0 ||
                    (arguments.length <= 1
                      ? e.isNumber(t)
                        ? ((this.x -= t), (this.y -= t))
                        : t &&
                          e.isNumber(t.x) &&
                          e.isNumber(t.y) &&
                          ((this.x -= t.x), (this.y -= t.y))
                      : ((this.x -= t), (this.y -= i))),
                  this
                );
              },
              subtract: function () {
                return this.sub.apply(this, arguments);
              },
              subSelf: function (t) {
                return this.sub.apply(this, arguments);
              },
              subtractSelf: function (t) {
                return this.sub.apply(this, arguments);
              },
              multiply: function (t, i) {
                return (
                  arguments.length <= 0 ||
                    (arguments.length <= 1
                      ? e.isNumber(t)
                        ? ((this.x *= t), (this.y *= t))
                        : t &&
                          e.isNumber(t.x) &&
                          e.isNumber(t.y) &&
                          ((this.x *= t.x), (this.y *= t.y))
                      : ((this.x *= t), (this.y *= i))),
                  this
                );
              },
              multiplySelf: function (t) {
                return this.multiply.apply(this, arguments);
              },
              multiplyScalar: function (t) {
                return this.multiply(t);
              },
              divide: function (t, i) {
                return (
                  arguments.length <= 0 ||
                    (arguments.length <= 1
                      ? e.isNumber(t)
                        ? ((this.x /= t), (this.y /= t))
                        : t &&
                          e.isNumber(t.x) &&
                          e.isNumber(t.y) &&
                          ((this.x /= t.x), (this.y /= t.y))
                      : ((this.x /= t), (this.y /= i)),
                    e.isNaN(this.x) && (this.x = 0),
                    e.isNaN(this.y) && (this.y = 0)),
                  this
                );
              },
              divideSelf: function (t) {
                return this.divide.apply(this, arguments);
              },
              divideScalar: function (t) {
                return this.divide(t);
              },
              negate: function () {
                return this.multiply(-1);
              },
              dot: function (t) {
                return this.x * t.x + this.y * t.y;
              },
              length: function () {
                return Math.sqrt(this.lengthSquared());
              },
              lengthSquared: function () {
                return this.x * this.x + this.y * this.y;
              },
              normalize: function () {
                return this.divideScalar(this.length());
              },
              distanceTo: function (t) {
                return Math.sqrt(this.distanceToSquared(t));
              },
              distanceToSquared: function (t) {
                var e = this.x - t.x,
                  i = this.y - t.y;
                return e * e + i * i;
              },
              setLength: function (t) {
                return this.normalize().multiplyScalar(t);
              },
              equals: function (t, e) {
                return (e = void 0 === e ? 1e-4 : e), this.distanceTo(t) < e;
              },
              lerp: function (t, e) {
                var i = (t.x - this.x) * e + this.x,
                  r = (t.y - this.y) * e + this.y;
                return this.set(i, r);
              },
              isZero: function (t) {
                return (t = void 0 === t ? 1e-4 : t), this.length() < t;
              },
              toString: function () {
                return this.x + ", " + this.y;
              },
              toObject: function () {
                return { x: this.x, y: this.y };
              },
              rotate: function (t) {
                var e = Math.cos(t),
                  i = Math.sin(t);
                return (
                  (this.x = this.x * e - this.y * i),
                  (this.y = this.x * i + this.y * e),
                  this
                );
              },
            });
          var r = {
              constructor: i,
              set: function (e, i) {
                return (
                  (this._x = e), (this._y = i), this.trigger(t.Events.change)
                );
              },
              copy: function (e) {
                return (
                  (this._x = e.x),
                  (this._y = e.y),
                  this.trigger(t.Events.change)
                );
              },
              clear: function () {
                return (
                  (this._x = 0), (this._y = 0), this.trigger(t.Events.change)
                );
              },
              clone: function () {
                return new i(this._x, this._y);
              },
              add: function (i, r) {
                return arguments.length <= 0
                  ? this
                  : (arguments.length <= 1
                      ? e.isNumber(i)
                        ? ((this._x += i), (this._y += i))
                        : i &&
                          e.isNumber(i.x) &&
                          e.isNumber(i.y) &&
                          ((this._x += i.x), (this._y += i.y))
                      : ((this._x += i), (this._y += r)),
                    this.trigger(t.Events.change));
              },
              sub: function (i, r) {
                return arguments.length <= 0
                  ? this
                  : (arguments.length <= 1
                      ? e.isNumber(i)
                        ? ((this._x -= i), (this._y -= i))
                        : i &&
                          e.isNumber(i.x) &&
                          e.isNumber(i.y) &&
                          ((this._x -= i.x), (this._y -= i.y))
                      : ((this._x -= i), (this._y -= r)),
                    this.trigger(t.Events.change));
              },
              multiply: function (i, r) {
                return arguments.length <= 0
                  ? this
                  : (arguments.length <= 1
                      ? e.isNumber(i)
                        ? ((this._x *= i), (this._y *= i))
                        : i &&
                          e.isNumber(i.x) &&
                          e.isNumber(i.y) &&
                          ((this._x *= i.x), (this._y *= i.y))
                      : ((this._x *= i), (this._y *= r)),
                    this.trigger(t.Events.change));
              },
              divide: function (i, r) {
                return arguments.length <= 0
                  ? this
                  : (arguments.length <= 1
                      ? e.isNumber(i)
                        ? ((this._x /= i), (this._y /= i))
                        : i &&
                          e.isNumber(i.x) &&
                          e.isNumber(i.y) &&
                          ((this._x /= i.x), (this._y /= i.y))
                      : ((this._x /= i), (this._y /= r)),
                    e.isNaN(this._x) && (this._x = 0),
                    e.isNaN(this._y) && (this._y = 0),
                    this.trigger(t.Events.change));
              },
              dot: function (t) {
                return this._x * t.x + this._y * t.y;
              },
              lengthSquared: function () {
                return this._x * this._x + this._y * this._y;
              },
              distanceToSquared: function (t) {
                var e = this._x - t.x,
                  i = this._y - t.y;
                return e * e + i * i;
              },
              lerp: function (t, e) {
                var i = (t.x - this._x) * e + this._x,
                  r = (t.y - this._y) * e + this._y;
                return this.set(i, r);
              },
              toString: function () {
                return this._x + ", " + this._y;
              },
              toObject: function () {
                return { x: this._x, y: this._y };
              },
              rotate: function (t) {
                var e = Math.cos(t),
                  i = Math.sin(t);
                return (
                  (this._x = this._x * e - this._y * i),
                  (this._y = this._x * i + this._y * e),
                  this
                );
              },
            },
            n = {
              enumerable: !0,
              get: function () {
                return this._x;
              },
              set: function (e) {
                (this._x = e), this.trigger(t.Events.change, "x");
              },
            },
            s = {
              enumerable: !0,
              get: function () {
                return this._y;
              },
              set: function (e) {
                (this._y = e), this.trigger(t.Events.change, "y");
              },
            };
          i.MakeObservable(i.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Commands,
            i = t.Utils,
            r = (t.Anchor = function (r, n, s, o, a, l, h) {
              t.Vector.call(this, r, n),
                (this._broadcast = i.bind(function () {
                  this.trigger(t.Events.change);
                }, this)),
                (this._command = h || e.move),
                (this._relative = !0);
              var c = i.isNumber(s),
                u = i.isNumber(o),
                d = i.isNumber(a),
                f = i.isNumber(l);
              (c || u || d || f) && t.Anchor.AppendCurveProperties(this),
                c && (this.controls.left.x = s),
                u && (this.controls.left.y = o),
                d && (this.controls.right.x = a),
                f && (this.controls.right.y = l);
            });
          i.extend(t.Anchor, {
            AppendCurveProperties: function (e) {
              (e.relative = !0),
                (e.controls = {}),
                (e.controls.left = new t.Vector(0, 0)),
                (e.controls.right = new t.Vector(0, 0));
            },
            MakeObservable: function (s) {
              Object.defineProperty(s, "command", {
                enumerable: !0,
                get: function () {
                  return this._command;
                },
                set: function (n) {
                  return (
                    (this._command = n),
                    this._command !== e.curve ||
                      i.isObject(this.controls) ||
                      r.AppendCurveProperties(this),
                    this.trigger(t.Events.change)
                  );
                },
              }),
                Object.defineProperty(s, "relative", {
                  enumerable: !0,
                  get: function () {
                    return this._relative;
                  },
                  set: function (e) {
                    return this._relative == e
                      ? this
                      : ((this._relative = !!e), this.trigger(t.Events.change));
                  },
                }),
                i.extend(s, t.Vector.prototype, n),
                (s.bind = s.on =
                  function () {
                    var e = this._bound;
                    t.Vector.prototype.bind.apply(this, arguments),
                      e || i.extend(this, n);
                  });
            },
          });
          var n = {
            constructor: t.Anchor,
            listen: function () {
              return (
                i.isObject(this.controls) ||
                  t.Anchor.AppendCurveProperties(this),
                this.controls.left.bind(t.Events.change, this._broadcast),
                this.controls.right.bind(t.Events.change, this._broadcast),
                this
              );
            },
            ignore: function () {
              return (
                this.controls.left.unbind(t.Events.change, this._broadcast),
                this.controls.right.unbind(t.Events.change, this._broadcast),
                this
              );
            },
            copy: function (e) {
              return (
                (this.x = e.x),
                (this.y = e.y),
                i.isString(e.command) && (this.command = e.command),
                i.isObject(e.controls) &&
                  (i.isObject(this.controls) ||
                    t.Anchor.AppendCurveProperties(this),
                  this.controls.left.copy(e.controls.left),
                  this.controls.right.copy(e.controls.right)),
                i.isBoolean(e.relative) && (this.relative = e.relative),
                this.command === t.Commands.arc &&
                  ((this.rx = e.rx),
                  (this.ry = e.ry),
                  (this.xAxisRotation = e.xAxisRotation),
                  (this.largeArcFlag = e.largeArcFlag),
                  (this.sweepFlag = e.sweepFlag)),
                this
              );
            },
            clone: function () {
              var e = this.controls,
                i = new t.Anchor(
                  this.x,
                  this.y,
                  e && e.left.x,
                  e && e.left.y,
                  e && e.right.x,
                  e && e.right.y,
                  this.command
                );
              return (i.relative = this._relative), i;
            },
            toObject: function () {
              var t = { x: this.x, y: this.y };
              return (
                this._command && (t.command = this._command),
                this._relative && (t.relative = this._relative),
                this.controls &&
                  (t.controls = {
                    left: this.controls.left.toObject(),
                    right: this.controls.right.toObject(),
                  }),
                t
              );
            },
            toString: function () {
              return this.controls
                ? [
                    this._x,
                    this._y,
                    this.controls.left.x,
                    this.controls.left.y,
                    this.controls.right.x,
                    this.controls.right.y,
                    this._command,
                    this._relative ? 1 : 0,
                  ].join(", ")
                : [this._x, this._y].join(", ");
            },
          };
          t.Anchor.MakeObservable(t.Anchor.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = Math.cos,
            i = Math.sin,
            r = Math.tan,
            n = t.Utils,
            s = n.toFixed,
            o = [],
            a = (t.Matrix = function (e, i, r, s, o, a) {
              this.elements = new t.Array(9);
              var l = e;
              n.isArray(l) || (l = n.toArray(arguments)),
                this.identity(),
                0 < l.length && this.set(l);
            });
          n.extend(a, {
            Identity: [1, 0, 0, 0, 1, 0, 0, 0, 1],
            Multiply: function (e, i, r) {
              if (i.length <= 3) {
                var n = e,
                  s = i[0] || 0,
                  o = i[1] || 0,
                  a = i[2] || 0;
                return {
                  x: n[0] * s + n[1] * o + n[2] * a,
                  y: n[3] * s + n[4] * o + n[5] * a,
                  z: n[6] * s + n[7] * o + n[8] * a,
                };
              }
              var l = e[0],
                h = e[1],
                c = e[2],
                u = e[3],
                d = e[4],
                f = e[5],
                p = e[6],
                g = e[7],
                m = e[8],
                _ = i[0],
                v = i[1],
                y = i[2],
                x = i[3],
                b = i[4],
                w = i[5],
                S = i[6],
                T = i[7],
                P = i[8];
              return (
                ((r = r || new t.Array(9))[0] = l * _ + h * x + c * S),
                (r[1] = l * v + h * b + c * T),
                (r[2] = l * y + h * w + c * P),
                (r[3] = u * _ + d * x + f * S),
                (r[4] = u * v + d * b + f * T),
                (r[5] = u * y + d * w + f * P),
                (r[6] = p * _ + g * x + m * S),
                (r[7] = p * v + g * b + m * T),
                (r[8] = p * y + g * w + m * P),
                r
              );
            },
          }),
            n.extend(a.prototype, t.Utils.Events, {
              constructor: a,
              manual: !1,
              set: function (e) {
                var i = e;
                return (
                  1 < arguments.length && (i = n.toArray(arguments)),
                  (this.elements[0] = i[0]),
                  (this.elements[1] = i[1]),
                  (this.elements[2] = i[2]),
                  (this.elements[3] = i[3]),
                  (this.elements[4] = i[4]),
                  (this.elements[5] = i[5]),
                  (this.elements[6] = i[6]),
                  (this.elements[7] = i[7]),
                  (this.elements[8] = i[8]),
                  this.trigger(t.Events.change)
                );
              },
              identity: function () {
                return (
                  (this.elements[0] = a.Identity[0]),
                  (this.elements[1] = a.Identity[1]),
                  (this.elements[2] = a.Identity[2]),
                  (this.elements[3] = a.Identity[3]),
                  (this.elements[4] = a.Identity[4]),
                  (this.elements[5] = a.Identity[5]),
                  (this.elements[6] = a.Identity[6]),
                  (this.elements[7] = a.Identity[7]),
                  (this.elements[8] = a.Identity[8]),
                  this.trigger(t.Events.change)
                );
              },
              multiply: function (e, i, r, n, s, o, a, l, h) {
                var c = arguments,
                  u = c.length;
                if (u <= 1)
                  return (
                    (this.elements[0] *= e),
                    (this.elements[1] *= e),
                    (this.elements[2] *= e),
                    (this.elements[3] *= e),
                    (this.elements[4] *= e),
                    (this.elements[5] *= e),
                    (this.elements[6] *= e),
                    (this.elements[7] *= e),
                    (this.elements[8] *= e),
                    this.trigger(t.Events.change)
                  );
                if (u <= 3)
                  return (
                    (e = e || 0),
                    (i = i || 0),
                    (r = r || 0),
                    {
                      x: (s = this.elements)[0] * e + s[1] * i + s[2] * r,
                      y: s[3] * e + s[4] * i + s[5] * r,
                      z: s[6] * e + s[7] * i + s[8] * r,
                    }
                  );
                var d = this.elements,
                  f = c,
                  p = d[0],
                  g = d[1],
                  m = d[2],
                  _ = d[3],
                  v = d[4],
                  y = d[5],
                  x = d[6],
                  b = d[7],
                  w = d[8],
                  S = f[0],
                  T = f[1],
                  P = f[2],
                  C = f[3],
                  k = f[4],
                  A = f[5],
                  M = f[6],
                  R = f[7],
                  O = f[8];
                return (
                  (this.elements[0] = p * S + g * C + m * M),
                  (this.elements[1] = p * T + g * k + m * R),
                  (this.elements[2] = p * P + g * A + m * O),
                  (this.elements[3] = _ * S + v * C + y * M),
                  (this.elements[4] = _ * T + v * k + y * R),
                  (this.elements[5] = _ * P + v * A + y * O),
                  (this.elements[6] = x * S + b * C + w * M),
                  (this.elements[7] = x * T + b * k + w * R),
                  (this.elements[8] = x * P + b * A + w * O),
                  this.trigger(t.Events.change)
                );
              },
              inverse: function (e) {
                var i = this.elements;
                e = e || new t.Matrix();
                var r = i[0],
                  n = i[1],
                  s = i[2],
                  o = i[3],
                  a = i[4],
                  l = i[5],
                  h = i[6],
                  c = i[7],
                  u = i[8],
                  d = u * a - l * c,
                  f = -u * o + l * h,
                  p = c * o - a * h,
                  g = r * d + n * f + s * p;
                return g
                  ? ((g = 1 / g),
                    (e.elements[0] = d * g),
                    (e.elements[1] = (-u * n + s * c) * g),
                    (e.elements[2] = (l * n - s * a) * g),
                    (e.elements[3] = f * g),
                    (e.elements[4] = (u * r - s * h) * g),
                    (e.elements[5] = (-l * r + s * o) * g),
                    (e.elements[6] = p * g),
                    (e.elements[7] = (-c * r + n * h) * g),
                    (e.elements[8] = (a * r - n * o) * g),
                    e)
                  : null;
              },
              scale: function (t, e) {
                return (
                  arguments.length <= 1 && (e = t),
                  this.multiply(t, 0, 0, 0, e, 0, 0, 0, 1)
                );
              },
              rotate: function (t) {
                var r = e(t),
                  n = i(t);
                return this.multiply(r, -n, 0, n, r, 0, 0, 0, 1);
              },
              translate: function (t, e) {
                return this.multiply(1, 0, t, 0, 1, e, 0, 0, 1);
              },
              skewX: function (t) {
                var e = r(t);
                return this.multiply(1, e, 0, 0, 1, 0, 0, 0, 1);
              },
              skewY: function (t) {
                var e = r(t);
                return this.multiply(1, 0, 0, e, 1, 0, 0, 0, 1);
              },
              toString: function (t) {
                return (o.length = 0), this.toArray(t, o), o.join(" ");
              },
              toArray: function (t, e) {
                var i = this.elements,
                  r = !!e,
                  n = s(i[0]),
                  o = s(i[1]),
                  a = s(i[2]),
                  l = s(i[3]),
                  h = s(i[4]),
                  c = s(i[5]);
                if (t) {
                  var u = s(i[6]),
                    d = s(i[7]),
                    f = s(i[8]);
                  return r
                    ? ((e[0] = n),
                      (e[1] = l),
                      (e[2] = u),
                      (e[3] = o),
                      (e[4] = h),
                      (e[5] = d),
                      (e[6] = a),
                      (e[7] = c),
                      void (e[8] = f))
                    : [n, l, u, o, h, d, a, c, f];
                }
                return r
                  ? ((e[0] = n),
                    (e[1] = l),
                    (e[2] = o),
                    (e[3] = h),
                    (e[4] = a),
                    void (e[5] = c))
                  : [n, l, o, h, a, c];
              },
              clone: function () {
                var e, i, r, n, s, o, a, l, h;
                (e = this.elements[0]),
                  (i = this.elements[1]),
                  (r = this.elements[2]),
                  (n = this.elements[3]),
                  (s = this.elements[4]),
                  (o = this.elements[5]),
                  (a = this.elements[6]),
                  (l = this.elements[7]),
                  (h = this.elements[8]);
                var c = new t.Matrix(e, i, r, n, s, o, a, l, h);
                return (c.manual = this.manual), c;
              },
            });
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils.mod,
            i = t.Utils.toFixed,
            r = t.Utils,
            n = {
              version: 1.1,
              ns: "http://www.w3.org/2000/svg",
              xlink: "http://www.w3.org/1999/xlink",
              alignments: { left: "start", center: "middle", right: "end" },
              createElement: function (t, e) {
                var i = t,
                  s = document.createElementNS(n.ns, i);
                return (
                  "svg" === i &&
                    (e = r.defaults(e || {}, { version: n.version })),
                  r.isEmpty(e) || n.setAttributes(s, e),
                  s
                );
              },
              setAttributes: function (t, e) {
                for (var i = Object.keys(e), r = 0; r < i.length; r++)
                  /href/.test(i[r])
                    ? t.setAttributeNS(n.xlink, i[r], e[i[r]])
                    : t.setAttribute(i[r], e[i[r]]);
                return this;
              },
              removeAttributes: function (t, e) {
                for (var i in e) t.removeAttribute(i);
                return this;
              },
              toString: function (r, n) {
                for (
                  var s, o = r.length, a = o - 1, l = "", h = 0;
                  h < o;
                  h++
                ) {
                  var c,
                    u,
                    d,
                    f,
                    p,
                    g,
                    m,
                    _,
                    v,
                    y,
                    x,
                    b,
                    w,
                    S,
                    T = r[h],
                    P = n ? e(h - 1, o) : Math.max(h - 1, 0),
                    C = n ? e(h + 1, o) : Math.min(h + 1, a),
                    k = r[P],
                    A = r[C],
                    M = i(T.x),
                    R = i(T.y);
                  switch (T.command) {
                    case t.Commands.close:
                      c = t.Commands.close;
                      break;
                    case t.Commands.arc:
                      (y = T.rx),
                        (x = T.ry),
                        (b = T.xAxisRotation),
                        (w = T.largeArcFlag),
                        (S = T.sweepFlag),
                        (c =
                          t.Commands.arc +
                          " " +
                          y +
                          " " +
                          x +
                          " " +
                          b +
                          " " +
                          w +
                          " " +
                          S +
                          " " +
                          M +
                          " " +
                          R);
                      break;
                    case t.Commands.curve:
                      (g = (k.controls && k.controls.right) || t.Vector.zero),
                        (m = (T.controls && T.controls.left) || t.Vector.zero),
                        (d = k.relative
                          ? ((u = i(g.x + k.x)), i(g.y + k.y))
                          : ((u = i(g.x)), i(g.y))),
                        (p = T.relative
                          ? ((f = i(m.x + T.x)), i(m.y + T.y))
                          : ((f = i(m.x)), i(m.y))),
                        (c =
                          (0 === h ? t.Commands.move : t.Commands.curve) +
                          " " +
                          u +
                          " " +
                          d +
                          " " +
                          f +
                          " " +
                          p +
                          " " +
                          M +
                          " " +
                          R);
                      break;
                    case t.Commands.move:
                      (s = T), (c = t.Commands.move + " " + M + " " + R);
                      break;
                    default:
                      c = T.command + " " + M + " " + R;
                  }
                  a <= h &&
                    n &&
                    (T.command === t.Commands.curve &&
                      ((A = s),
                      (_ = (T.controls && T.controls.right) || T),
                      (v = (A.controls && A.controls.left) || A),
                      (d = T.relative
                        ? ((u = i(_.x + T.x)), i(_.y + T.y))
                        : ((u = i(_.x)), i(_.y))),
                      (p = A.relative
                        ? ((f = i(v.x + A.x)), i(v.y + A.y))
                        : ((f = i(v.x)), i(v.y))),
                      (c +=
                        " C " +
                        u +
                        " " +
                        d +
                        " " +
                        f +
                        " " +
                        p +
                        " " +
                        (M = i(A.x)) +
                        " " +
                        (R = i(A.y)))),
                    T.command !== t.Commands.close && (c += " Z")),
                    (l += c + " ");
                }
                return l;
              },
              getClip: function (t) {
                var e = t._renderer.clip;
                if (!e) {
                  for (var i = t; i.parent; ) i = i.parent;
                  (e = t._renderer.clip = n.createElement("clipPath")),
                    i.defs.appendChild(e);
                }
                return e;
              },
              group: {
                appendChild: function (t) {
                  var e = t._renderer.elem;
                  if (e) {
                    var i = e.nodeName;
                    !i ||
                      /(radial|linear)gradient/i.test(i) ||
                      t._clip ||
                      this.elem.appendChild(e);
                  }
                },
                removeChild: function (t) {
                  var e = t._renderer.elem;
                  e &&
                    e.parentNode == this.elem &&
                    e.nodeName &&
                    (t._clip || this.elem.removeChild(e));
                },
                orderChild: function (t) {
                  this.elem.appendChild(t._renderer.elem);
                },
                renderChild: function (t) {
                  n[t._renderer.type].render.call(t, this);
                },
                render: function (t) {
                  if (
                    (this._update(), 0 === this._opacity && !this._flagOpacity)
                  )
                    return this;
                  this._renderer.elem ||
                    ((this._renderer.elem = n.createElement("g", {
                      id: this.id,
                    })),
                    t.appendChild(this._renderer.elem));
                  var e = this._matrix.manual || this._flagMatrix,
                    i = { domElement: t, elem: this._renderer.elem };
                  e &&
                    this._renderer.elem.setAttribute(
                      "transform",
                      "matrix(" + this._matrix.toString() + ")"
                    );
                  for (var r = 0; r < this.children.length; r++) {
                    var s = this.children[r];
                    n[s._renderer.type].render.call(s, t);
                  }
                  return (
                    this._flagOpacity &&
                      this._renderer.elem.setAttribute(
                        "opacity",
                        this._opacity
                      ),
                    this._flagClassName &&
                      this._renderer.elem.setAttribute(
                        "class",
                        this._className
                      ),
                    this._flagAdditions &&
                      this.additions.forEach(n.group.appendChild, i),
                    this._flagSubtractions &&
                      this.subtractions.forEach(n.group.removeChild, i),
                    this._flagOrder &&
                      this.children.forEach(n.group.orderChild, i),
                    this._flagMask &&
                      (this._mask
                        ? this._renderer.elem.setAttribute(
                            "clip-path",
                            "url(#" + this._mask.id + ")"
                          )
                        : this._renderer.elem.removeAttribute("clip-path")),
                    this.flagReset()
                  );
                },
              },
              path: {
                render: function (t) {
                  if (
                    (this._update(), 0 === this._opacity && !this._flagOpacity)
                  )
                    return this;
                  var e = {};
                  if (
                    ((this._matrix.manual || this._flagMatrix) &&
                      (e.transform = "matrix(" + this._matrix.toString() + ")"),
                    this._flagVertices)
                  ) {
                    var i = n.toString(this._renderer.vertices, this._closed);
                    e.d = i;
                  }
                  if (
                    (this._fill &&
                      this._fill._renderer &&
                      (this._fill._update(),
                      n[this._fill._renderer.type].render.call(
                        this._fill,
                        t,
                        !0
                      )),
                    this._flagFill &&
                      (e.fill =
                        this._fill && this._fill.id
                          ? "url(#" + this._fill.id + ")"
                          : this._fill),
                    this._stroke &&
                      this._stroke._renderer &&
                      (this._stroke._update(),
                      n[this._stroke._renderer.type].render.call(
                        this._stroke,
                        t,
                        !0
                      )),
                    this._flagStroke &&
                      (e.stroke =
                        this._stroke && this._stroke.id
                          ? "url(#" + this._stroke.id + ")"
                          : this._stroke),
                    this._flagLinewidth &&
                      (e["stroke-width"] = this._linewidth),
                    this._flagOpacity &&
                      ((e["stroke-opacity"] = this._opacity),
                      (e["fill-opacity"] = this._opacity)),
                    this._flagClassName && (e.class = this._className),
                    this._flagVisible &&
                      (e.visibility = this._visible ? "visible" : "hidden"),
                    this._flagCap && (e["stroke-linecap"] = this._cap),
                    this._flagJoin && (e["stroke-linejoin"] = this._join),
                    this._flagMiter && (e["stroke-miterlimit"] = this._miter),
                    this.dashes &&
                      0 < this.dashes.length &&
                      (e["stroke-dasharray"] = this.dashes.join(" ")),
                    this._renderer.elem
                      ? n.setAttributes(this._renderer.elem, e)
                      : ((e.id = this.id),
                        (this._renderer.elem = n.createElement("path", e)),
                        t.appendChild(this._renderer.elem)),
                    this._flagClip)
                  ) {
                    var r = n.getClip(this),
                      s = this._renderer.elem;
                    this._clip
                      ? (s.removeAttribute("id"),
                        r.setAttribute("id", this.id),
                        r.appendChild(s))
                      : (r.removeAttribute("id"),
                        s.setAttribute("id", this.id),
                        this.parent._renderer.elem.appendChild(s));
                  }
                  return this.flagReset();
                },
              },
              text: {
                render: function (t) {
                  this._update();
                  var e = {};
                  if (
                    ((this._matrix.manual || this._flagMatrix) &&
                      (e.transform = "matrix(" + this._matrix.toString() + ")"),
                    this._flagFamily && (e["font-family"] = this._family),
                    this._flagSize && (e["font-size"] = this._size),
                    this._flagLeading && (e["line-height"] = this._leading),
                    this._flagAlignment &&
                      (e["text-anchor"] =
                        n.alignments[this._alignment] || this._alignment),
                    this._flagBaseline &&
                      (e["alignment-baseline"] = e["dominant-baseline"] =
                        this._baseline),
                    this._flagStyle && (e["font-style"] = this._style),
                    this._flagWeight && (e["font-weight"] = this._weight),
                    this._flagDecoration &&
                      (e["text-decoration"] = this._decoration),
                    this._fill &&
                      this._fill._renderer &&
                      (this._fill._update(),
                      n[this._fill._renderer.type].render.call(
                        this._fill,
                        t,
                        !0
                      )),
                    this._flagFill &&
                      (e.fill =
                        this._fill && this._fill.id
                          ? "url(#" + this._fill.id + ")"
                          : this._fill),
                    this._stroke &&
                      this._stroke._renderer &&
                      (this._stroke._update(),
                      n[this._stroke._renderer.type].render.call(
                        this._stroke,
                        t,
                        !0
                      )),
                    this._flagStroke &&
                      (e.stroke =
                        this._stroke && this._stroke.id
                          ? "url(#" + this._stroke.id + ")"
                          : this._stroke),
                    this._flagLinewidth &&
                      (e["stroke-width"] = this._linewidth),
                    this._flagOpacity && (e.opacity = this._opacity),
                    this._flagClassName && (e.class = this._className),
                    this._flagVisible &&
                      (e.visibility = this._visible ? "visible" : "hidden"),
                    this.dashes &&
                      0 < this.dashes.length &&
                      (e["stroke-dasharray"] = this.dashes.join(" ")),
                    this._renderer.elem
                      ? n.setAttributes(this._renderer.elem, e)
                      : ((e.id = this.id),
                        (this._renderer.elem = n.createElement("text", e)),
                        t.defs.appendChild(this._renderer.elem)),
                    this._flagClip)
                  ) {
                    var i = n.getClip(this),
                      r = this._renderer.elem;
                    this._clip
                      ? (r.removeAttribute("id"),
                        i.setAttribute("id", this.id),
                        i.appendChild(r))
                      : (i.removeAttribute("id"),
                        r.setAttribute("id", this.id),
                        this.parent._renderer.elem.appendChild(r));
                  }
                  return (
                    this._flagValue &&
                      (this._renderer.elem.textContent = this._value),
                    this.flagReset()
                  );
                },
              },
              "linear-gradient": {
                render: function (t, e) {
                  e || this._update();
                  var i = {};
                  if (
                    (this._flagEndPoints &&
                      ((i.x1 = this.left._x),
                      (i.y1 = this.left._y),
                      (i.x2 = this.right._x),
                      (i.y2 = this.right._y)),
                    this._flagSpread && (i.spreadMethod = this._spread),
                    this._renderer.elem
                      ? n.setAttributes(this._renderer.elem, i)
                      : ((i.id = this.id),
                        (i.gradientUnits = "userSpaceOnUse"),
                        (this._renderer.elem = n.createElement(
                          "linearGradient",
                          i
                        )),
                        t.defs.appendChild(this._renderer.elem)),
                    this._flagStops)
                  ) {
                    var r =
                      this._renderer.elem.childNodes.length !==
                      this.stops.length;
                    r && (this._renderer.elem.childNodes.length = 0);
                    for (var s = 0; s < this.stops.length; s++) {
                      var o = this.stops[s],
                        a = {};
                      o._flagOffset && (a.offset = 100 * o._offset + "%"),
                        o._flagColor && (a["stop-color"] = o._color),
                        o._flagOpacity && (a["stop-opacity"] = o._opacity),
                        o._renderer.elem
                          ? n.setAttributes(o._renderer.elem, a)
                          : (o._renderer.elem = n.createElement("stop", a)),
                        r && this._renderer.elem.appendChild(o._renderer.elem),
                        o.flagReset();
                    }
                  }
                  return this.flagReset();
                },
              },
              "radial-gradient": {
                render: function (t, e) {
                  e || this._update();
                  var i = {};
                  if (
                    (this._flagCenter &&
                      ((i.cx = this.center._x), (i.cy = this.center._y)),
                    this._flagFocal &&
                      ((i.fx = this.focal._x), (i.fy = this.focal._y)),
                    this._flagRadius && (i.r = this._radius),
                    this._flagSpread && (i.spreadMethod = this._spread),
                    this._renderer.elem
                      ? n.setAttributes(this._renderer.elem, i)
                      : ((i.id = this.id),
                        (i.gradientUnits = "userSpaceOnUse"),
                        (this._renderer.elem = n.createElement(
                          "radialGradient",
                          i
                        )),
                        t.defs.appendChild(this._renderer.elem)),
                    this._flagStops)
                  ) {
                    var r =
                      this._renderer.elem.childNodes.length !==
                      this.stops.length;
                    r && (this._renderer.elem.childNodes.length = 0);
                    for (var s = 0; s < this.stops.length; s++) {
                      var o = this.stops[s],
                        a = {};
                      o._flagOffset && (a.offset = 100 * o._offset + "%"),
                        o._flagColor && (a["stop-color"] = o._color),
                        o._flagOpacity && (a["stop-opacity"] = o._opacity),
                        o._renderer.elem
                          ? n.setAttributes(o._renderer.elem, a)
                          : (o._renderer.elem = n.createElement("stop", a)),
                        r && this._renderer.elem.appendChild(o._renderer.elem),
                        o.flagReset();
                    }
                  }
                  return this.flagReset();
                },
              },
              texture: {
                render: function (e, i) {
                  i || this._update();
                  var s = {},
                    o = { x: 0, y: 0 },
                    a = this.image;
                  if (this._flagLoaded && this.loaded)
                    switch (a.nodeName.toLowerCase()) {
                      case "canvas":
                        o.href = o["xlink:href"] = a.toDataURL("image/png");
                        break;
                      case "img":
                      case "image":
                        o.href = o["xlink:href"] = this.src;
                    }
                  if (
                    ((this._flagOffset ||
                      this._flagLoaded ||
                      this._flagScale) &&
                      ((s.x = this._offset.x),
                      (s.y = this._offset.y),
                      a &&
                        ((s.x -= a.width / 2),
                        (s.y -= a.height / 2),
                        this._scale instanceof t.Vector
                          ? ((s.x *= this._scale.x), (s.y *= this._scale.y))
                          : ((s.x *= this._scale), (s.y *= this._scale))),
                      0 < s.x && (s.x *= -1),
                      0 < s.y && (s.y *= -1)),
                    (this._flagScale || this._flagLoaded || this._flagRepeat) &&
                      ((s.width = 0), (s.height = 0), a))
                  ) {
                    switch (
                      ((o.width = s.width = a.width),
                      (o.height = s.height = a.height),
                      this._repeat)
                    ) {
                      case "no-repeat":
                        (s.width += 1), (s.height += 1);
                    }
                    this._scale instanceof t.Vector
                      ? ((s.width *= this._scale.x),
                        (s.height *= this._scale.y))
                      : ((s.width *= this._scale), (s.height *= this._scale));
                  }
                  return (
                    (this._flagScale || this._flagLoaded) &&
                      (this._renderer.image
                        ? r.isEmpty(o) ||
                          n.setAttributes(this._renderer.image, o)
                        : (this._renderer.image = n.createElement("image", o))),
                    this._renderer.elem
                      ? r.isEmpty(s) || n.setAttributes(this._renderer.elem, s)
                      : ((s.id = this.id),
                        (s.patternUnits = "userSpaceOnUse"),
                        (this._renderer.elem = n.createElement("pattern", s)),
                        e.defs.appendChild(this._renderer.elem)),
                    this._renderer.elem &&
                      this._renderer.image &&
                      !this._renderer.appended &&
                      (this._renderer.elem.appendChild(this._renderer.image),
                      (this._renderer.appended = !0)),
                    this.flagReset()
                  );
                },
              },
            },
            s = (t[t.Types.svg] = function (e) {
              (this.domElement = e.domElement || n.createElement("svg")),
                (this.scene = new t.Group()),
                ((this.scene.parent = this).defs = n.createElement("defs")),
                this.domElement.appendChild(this.defs),
                (this.domElement.defs = this.defs),
                (this.domElement.style.overflow = "hidden");
            });
          r.extend(s, { Utils: n }),
            r.extend(s.prototype, t.Utils.Events, {
              constructor: s,
              setSize: function (e, i) {
                return (
                  (this.width = e),
                  (this.height = i),
                  n.setAttributes(this.domElement, { width: e, height: i }),
                  this.trigger(t.Events.resize, e, i)
                );
              },
              render: function () {
                return n.group.render.call(this.scene, this.domElement), this;
              },
            });
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils.mod,
            i = t.Utils.toFixed,
            r = t.Utils.getRatio,
            n = t.Utils,
            s = [],
            o = 2 * Math.PI,
            a = Math.max,
            l = Math.min,
            h = Math.abs,
            c = Math.sin,
            u = Math.cos,
            d = Math.acos,
            f = Math.sqrt,
            p = function (t) {
              return (
                1 == t[0] &&
                0 == t[3] &&
                0 == t[1] &&
                1 == t[4] &&
                0 == t[2] &&
                0 == t[5]
              );
            },
            g = {
              isHidden: /(none|transparent)/i,
              alignments: { left: "start", middle: "center", right: "end" },
              shim: function (t, e) {
                return (
                  (t.tagName = t.nodeName = e || "canvas"),
                  (t.nodeType = 1),
                  (t.getAttribute = function (t) {
                    return this[t];
                  }),
                  (t.setAttribute = function (t, e) {
                    return (this[t] = e), this;
                  }),
                  t
                );
              },
              group: {
                renderChild: function (t) {
                  g[t._renderer.type].render.call(t, this.ctx, !0, this.clip);
                },
                render: function (t) {
                  this._update();
                  var e = this._matrix.elements,
                    i = this.parent;
                  this._renderer.opacity =
                    this._opacity *
                    (i && i._renderer ? i._renderer.opacity : 1);
                  var r = p(e),
                    n = this._mask;
                  if (
                    (this._renderer.context || (this._renderer.context = {}),
                    (this._renderer.context.ctx = t),
                    r ||
                      (t.save(),
                      t.transform(e[0], e[3], e[1], e[4], e[2], e[5])),
                    n && g[n._renderer.type].render.call(n, t, !0),
                    0 < this.opacity && 0 !== this.scale)
                  )
                    for (var s = 0; s < this.children.length; s++) {
                      var o = this.children[s];
                      g[o._renderer.type].render.call(o, t);
                    }
                  return r || t.restore(), this.flagReset();
                },
              },
              path: {
                render: function (r, o, l) {
                  var h,
                    c,
                    u,
                    d,
                    f,
                    m,
                    _,
                    v,
                    y,
                    x,
                    b,
                    w,
                    S,
                    T,
                    P,
                    C,
                    k,
                    A,
                    M,
                    R,
                    O,
                    E,
                    F,
                    B,
                    I,
                    L,
                    N,
                    U,
                    V,
                    j,
                    D,
                    z,
                    G;
                  if (
                    (this._update(),
                    (h = this._matrix.elements),
                    (c = this._stroke),
                    (u = this._linewidth),
                    (d = this._fill),
                    (f = this._opacity * this.parent._renderer.opacity),
                    (m = this._visible),
                    (_ = this._cap),
                    (v = this._join),
                    (y = this._miter),
                    (x = this._closed),
                    (S = (w = (b = this._renderer.vertices).length) - 1),
                    (D = p(h)),
                    (G = this.dashes),
                    (j = this._clip),
                    !o && (!m || j))
                  )
                    return this;
                  D ||
                    (r.save(), r.transform(h[0], h[3], h[1], h[4], h[2], h[5])),
                    d &&
                      (n.isString(d)
                        ? (r.fillStyle = d)
                        : (g[d._renderer.type].render.call(d, r),
                          (r.fillStyle = d._renderer.effect))),
                    c &&
                      (n.isString(c)
                        ? (r.strokeStyle = c)
                        : (g[c._renderer.type].render.call(c, r),
                          (r.strokeStyle = c._renderer.effect))),
                    u && (r.lineWidth = u),
                    y && (r.miterLimit = y),
                    v && (r.lineJoin = v),
                    _ && (r.lineCap = _),
                    n.isNumber(f) && (r.globalAlpha = f),
                    G && 0 < G.length && r.setLineDash(G),
                    r.beginPath();
                  for (var q = 0; q < b.length; q++)
                    switch (
                      ((k = b[q]), (U = i(k.x)), (V = i(k.y)), k.command)
                    ) {
                      case t.Commands.close:
                        r.closePath();
                        break;
                      case t.Commands.arc:
                        var W = k.rx,
                          X = k.ry,
                          H = k.xAxisRotation,
                          Y = k.largeArcFlag,
                          K = k.sweepFlag;
                        C = b[(P = x ? e(q - 1, w) : a(q - 1, 0))];
                        var Z = i(C.x),
                          J = i(C.y);
                        g.renderSvgArcCommand(r, Z, J, W, X, Y, K, H, U, V);
                        break;
                      case t.Commands.curve:
                        (P = x ? e(q - 1, w) : Math.max(q - 1, 0)),
                          (T = x ? e(q + 1, w) : Math.min(q + 1, S)),
                          (C = b[P]),
                          (A = b[T]),
                          (B =
                            (C.controls && C.controls.right) || t.Vector.zero),
                          (I =
                            (k.controls && k.controls.left) || t.Vector.zero),
                          (F = C._relative
                            ? ((E = B.x + i(C.x)), B.y + i(C.y))
                            : ((E = i(B.x)), i(B.y))),
                          (O = k._relative
                            ? ((R = I.x + i(k.x)), I.y + i(k.y))
                            : ((R = i(I.x)), i(I.y))),
                          r.bezierCurveTo(E, F, R, O, U, V),
                          S <= q &&
                            x &&
                            ((A = M),
                            (L =
                              (k.controls && k.controls.right) ||
                              t.Vector.zero),
                            (N =
                              (A.controls && A.controls.left) || t.Vector.zero),
                            (F = k._relative
                              ? ((E = L.x + i(k.x)), L.y + i(k.y))
                              : ((E = i(L.x)), i(L.y))),
                            (O = A._relative
                              ? ((R = N.x + i(A.x)), N.y + i(A.y))
                              : ((R = i(N.x)), i(N.y))),
                            (U = i(A.x)),
                            (V = i(A.y)),
                            r.bezierCurveTo(E, F, R, O, U, V));
                        break;
                      case t.Commands.line:
                        r.lineTo(U, V);
                        break;
                      case t.Commands.move:
                        (M = k), r.moveTo(U, V);
                    }
                  return (
                    x && r.closePath(),
                    j ||
                      l ||
                      (g.isHidden.test(d) ||
                        ((z = d._renderer && d._renderer.offset) &&
                          (r.save(),
                          r.translate(
                            -d._renderer.offset.x,
                            -d._renderer.offset.y
                          ),
                          r.scale(d._renderer.scale.x, d._renderer.scale.y)),
                        r.fill(),
                        z && r.restore()),
                      g.isHidden.test(c) ||
                        ((z = c._renderer && c._renderer.offset) &&
                          (r.save(),
                          r.translate(
                            -c._renderer.offset.x,
                            -c._renderer.offset.y
                          ),
                          r.scale(c._renderer.scale.x, c._renderer.scale.y),
                          (r.lineWidth = u / c._renderer.scale.x)),
                        r.stroke(),
                        z && r.restore())),
                    D || r.restore(),
                    j && !l && r.clip(),
                    G && 0 < G.length && r.setLineDash(s),
                    this.flagReset()
                  );
                },
              },
              text: {
                render: function (t, e, r) {
                  this._update();
                  var o,
                    a,
                    l,
                    h,
                    c,
                    u,
                    d,
                    f = this._matrix.elements,
                    m = this._stroke,
                    _ = this._linewidth,
                    v = this._fill,
                    y = this._opacity * this.parent._renderer.opacity,
                    x = this._visible,
                    b = p(f),
                    w =
                      v._renderer &&
                      v._renderer.offset &&
                      m._renderer &&
                      m._renderer.offset,
                    S = this.dashes,
                    T = this._clip;
                  return e || (x && !T)
                    ? (b ||
                        (t.save(),
                        t.transform(f[0], f[3], f[1], f[4], f[2], f[5])),
                      w ||
                        (t.font = [
                          this._style,
                          this._weight,
                          this._size + "px/" + this._leading + "px",
                          this._family,
                        ].join(" ")),
                      (t.textAlign =
                        g.alignments[this._alignment] || this._alignment),
                      (t.textBaseline = this._baseline),
                      v &&
                        (n.isString(v)
                          ? (t.fillStyle = v)
                          : (g[v._renderer.type].render.call(v, t),
                            (t.fillStyle = v._renderer.effect))),
                      m &&
                        (n.isString(m)
                          ? (t.strokeStyle = m)
                          : (g[m._renderer.type].render.call(m, t),
                            (t.strokeStyle = m._renderer.effect))),
                      _ && (t.lineWidth = _),
                      n.isNumber(y) && (t.globalAlpha = y),
                      S && 0 < S.length && t.setLineDash(S),
                      T ||
                        r ||
                        (g.isHidden.test(v) ||
                          (v._renderer && v._renderer.offset
                            ? ((u = i(v._renderer.scale.x)),
                              (d = i(v._renderer.scale.y)),
                              t.save(),
                              t.translate(
                                -i(v._renderer.offset.x),
                                -i(v._renderer.offset.y)
                              ),
                              t.scale(u, d),
                              (o = this._size / v._renderer.scale.y),
                              (a = this._leading / v._renderer.scale.y),
                              (t.font = [
                                this._style,
                                this._weight,
                                i(o) + "px/",
                                i(a) + "px",
                                this._family,
                              ].join(" ")),
                              (l = v._renderer.offset.x / v._renderer.scale.x),
                              (h = v._renderer.offset.y / v._renderer.scale.y),
                              t.fillText(this.value, i(l), i(h)),
                              t.restore())
                            : t.fillText(this.value, 0, 0)),
                        g.isHidden.test(m) ||
                          (m._renderer && m._renderer.offset
                            ? ((u = i(m._renderer.scale.x)),
                              (d = i(m._renderer.scale.y)),
                              t.save(),
                              t.translate(
                                -i(m._renderer.offset.x),
                                -i(m._renderer.offset.y)
                              ),
                              t.scale(u, d),
                              (o = this._size / m._renderer.scale.y),
                              (a = this._leading / m._renderer.scale.y),
                              (t.font = [
                                this._style,
                                this._weight,
                                i(o) + "px/",
                                i(a) + "px",
                                this._family,
                              ].join(" ")),
                              (l = m._renderer.offset.x / m._renderer.scale.x),
                              (h = m._renderer.offset.y / m._renderer.scale.y),
                              (c = _ / m._renderer.scale.x),
                              (t.lineWidth = i(c)),
                              t.strokeText(this.value, i(l), i(h)),
                              t.restore())
                            : t.strokeText(this.value, 0, 0))),
                      b || t.restore(),
                      T && !r && t.clip(),
                      S && 0 < S.length && t.setLineDash(s),
                      this.flagReset())
                    : this;
                },
              },
              "linear-gradient": {
                render: function (t) {
                  if (
                    (this._update(),
                    !this._renderer.effect ||
                      this._flagEndPoints ||
                      this._flagStops)
                  ) {
                    this._renderer.effect = t.createLinearGradient(
                      this.left._x,
                      this.left._y,
                      this.right._x,
                      this.right._y
                    );
                    for (var e = 0; e < this.stops.length; e++) {
                      var i = this.stops[e];
                      this._renderer.effect.addColorStop(i._offset, i._color);
                    }
                  }
                  return this.flagReset();
                },
              },
              "radial-gradient": {
                render: function (t) {
                  if (
                    (this._update(),
                    !this._renderer.effect ||
                      this._flagCenter ||
                      this._flagFocal ||
                      this._flagRadius ||
                      this._flagStops)
                  ) {
                    this._renderer.effect = t.createRadialGradient(
                      this.center._x,
                      this.center._y,
                      0,
                      this.focal._x,
                      this.focal._y,
                      this._radius
                    );
                    for (var e = 0; e < this.stops.length; e++) {
                      var i = this.stops[e];
                      this._renderer.effect.addColorStop(i._offset, i._color);
                    }
                  }
                  return this.flagReset();
                },
              },
              texture: {
                render: function (e) {
                  this._update();
                  var i = this.image;
                  return (
                    (!this._renderer.effect ||
                      ((this._flagLoaded ||
                        this._flagImage ||
                        this._flagVideo ||
                        this._flagRepeat) &&
                        this.loaded)) &&
                      (this._renderer.effect = e.createPattern(
                        this.image,
                        this._repeat
                      )),
                    (this._flagOffset || this._flagLoaded || this._flagScale) &&
                      (this._renderer.offset instanceof t.Vector ||
                        (this._renderer.offset = new t.Vector()),
                      (this._renderer.offset.x = -this._offset.x),
                      (this._renderer.offset.y = -this._offset.y),
                      i &&
                        ((this._renderer.offset.x += i.width / 2),
                        (this._renderer.offset.y += i.height / 2),
                        this._scale instanceof t.Vector
                          ? ((this._renderer.offset.x *= this._scale.x),
                            (this._renderer.offset.y *= this._scale.y))
                          : ((this._renderer.offset.x *= this._scale),
                            (this._renderer.offset.y *= this._scale)))),
                    (this._flagScale || this._flagLoaded) &&
                      (this._renderer.scale instanceof t.Vector ||
                        (this._renderer.scale = new t.Vector()),
                      this._scale instanceof t.Vector
                        ? this._renderer.scale.copy(this._scale)
                        : this._renderer.scale.set(this._scale, this._scale)),
                    this.flagReset()
                  );
                },
              },
              renderSvgArcCommand: function (i, r, n, s, l, d, p, g, m, v) {
                (g = (g * Math.PI) / 180), (s = h(s)), (l = h(l));
                var y = (r - m) / 2,
                  x = (n - v) / 2,
                  b = u(g) * y + c(g) * x,
                  w = -c(g) * y + u(g) * x,
                  S = s * s,
                  T = l * l,
                  P = b * b,
                  C = w * w,
                  k = P / S + C / T;
                if (1 < k) {
                  var A = f(k);
                  (S = (s *= A) * s), (T = (l *= A) * l);
                }
                var M = S * C + T * P,
                  R = f(a(0, (S * T - M) / M));
                d === p && (R = -R);
                var O = (R * s * w) / l,
                  E = (-R * l * b) / s,
                  F = u(g) * O - c(g) * E + (r + m) / 2,
                  B = c(g) * O + u(g) * E + (n + v) / 2,
                  I = _(1, 0, (b - O) / s, (w - E) / l);
                !(function (i, r, n, s, a, l, h, c, u) {
                  var d = t.Utils.Curve.Tolerance.epsilon,
                    f = h - l,
                    p = Math.abs(f) < d;
                  (f = e(f, o)) < d && (f = p ? 0 : o),
                    !0 !== c || p || (f === o ? (f = -o) : (f -= o));
                  for (var g = 0; g < t.Resolution; g++) {
                    var m = l + (g / (t.Resolution - 1)) * f,
                      _ = r + s * Math.cos(m),
                      v = n + a * Math.sin(m);
                    if (0 !== u) {
                      var y = Math.cos(u),
                        x = Math.sin(u),
                        b = _ - r,
                        w = v - n;
                      (_ = b * y - w * x + r), (v = b * x + w * y + n);
                    }
                    i.lineTo(_, v);
                  }
                })(
                  i,
                  F,
                  B,
                  s,
                  l,
                  I,
                  I +
                    (_((b - O) / s, (w - E) / l, (-b - O) / s, (-w - E) / l) %
                      o),
                  0 === p,
                  g
                );
              },
            },
            m = (t[t.Types.canvas] = function (e) {
              var i = !1 !== e.smoothing;
              (this.domElement =
                e.domElement || document.createElement("canvas")),
                (this.ctx = this.domElement.getContext("2d")),
                (this.overdraw = e.overdraw || !1),
                n.isUndefined(this.ctx.imageSmoothingEnabled) ||
                  (this.ctx.imageSmoothingEnabled = i),
                (this.scene = new t.Group()),
                (this.scene.parent = this);
            });
          function _(t, e, i, r) {
            var n = t * i + e * r,
              s = f(t * t + e * e) * f(i * i + r * r),
              o = d(a(-1, l(1, n / s)));
            return t * r - e * i < 0 && (o = -o), o;
          }
          n.extend(m, { Utils: g }),
            n.extend(m.prototype, t.Utils.Events, {
              constructor: m,
              setSize: function (e, i, s) {
                return (
                  (this.width = e),
                  (this.height = i),
                  (this.ratio = n.isUndefined(s) ? r(this.ctx) : s),
                  (this.domElement.width = e * this.ratio),
                  (this.domElement.height = i * this.ratio),
                  this.domElement.style &&
                    n.extend(this.domElement.style, {
                      width: e + "px",
                      height: i + "px",
                    }),
                  this.trigger(t.Events.resize, e, i, s)
                );
              },
              render: function () {
                var t = 1 === this.ratio;
                return (
                  t ||
                    (this.ctx.save(), this.ctx.scale(this.ratio, this.ratio)),
                  this.overdraw ||
                    this.ctx.clearRect(0, 0, this.width, this.height),
                  g.group.render.call(this.scene, this.ctx),
                  t || this.ctx.restore(),
                  this
                );
              },
            });
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.root,
            i = t.Matrix.Multiply,
            r = t.Utils.mod,
            n = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            s = new t.Array(9),
            o = t.Utils.getRatio,
            a = (t.Utils.getComputedMatrix, t.Utils.toFixed),
            l = t[t.Types.canvas].Utils,
            h = t.Utils,
            c = {
              isHidden: /(none|transparent)/i,
              canvas: e.document
                ? e.document.createElement("canvas")
                : { getContext: h.identity },
              alignments: { left: "start", middle: "center", right: "end" },
              matrix: new t.Matrix(),
              uv: new t.Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
              group: {
                removeChild: function (t, e) {
                  if (t.children)
                    for (var i = 0; i < t.children.length; i++)
                      c.group.removeChild(t.children[i], e);
                  else
                    e.deleteTexture(t._renderer.texture),
                      delete t._renderer.texture;
                },
                renderChild: function (t) {
                  c[t._renderer.type].render.call(t, this.gl, this.program);
                },
                render: function (e, r) {
                  this._update();
                  var n = this.parent,
                    o = (n._matrix && n._matrix.manual) || n._flagMatrix,
                    a = this._matrix.manual || this._flagMatrix;
                  if (
                    ((o || a) &&
                      (this._renderer.matrix ||
                        (this._renderer.matrix = new t.Array(9)),
                      this._matrix.toArray(!0, s),
                      i(s, n._renderer.matrix, this._renderer.matrix),
                      (this._renderer.scale = this._scale * n._renderer.scale),
                      o && (this._flagMatrix = !0)),
                    this._mask &&
                      (e.enable(e.STENCIL_TEST),
                      e.stencilFunc(e.ALWAYS, 1, 1),
                      e.colorMask(!1, !1, !1, !0),
                      e.stencilOp(e.KEEP, e.KEEP, e.INCR),
                      c[this._mask._renderer.type].render.call(
                        this._mask,
                        e,
                        r,
                        this
                      ),
                      e.colorMask(!0, !0, !0, !0),
                      e.stencilFunc(e.NOTEQUAL, 0, 1),
                      e.stencilOp(e.KEEP, e.KEEP, e.KEEP)),
                    (this._flagOpacity = n._flagOpacity || this._flagOpacity),
                    (this._renderer.opacity =
                      this._opacity *
                      (n && n._renderer ? n._renderer.opacity : 1)),
                    this._flagSubtractions)
                  )
                    for (var l = 0; l < this.subtractions.length; l++)
                      c.group.removeChild(this.subtractions[l], e);
                  for (l = 0; l < this.children.length; l++) {
                    var h = this.children[l];
                    c[h._renderer.type].render.call(h, e, r);
                  }
                  return (
                    this.children.forEach(c.group.renderChild, {
                      gl: e,
                      program: r,
                    }),
                    this._mask &&
                      (e.colorMask(!1, !1, !1, !1),
                      e.stencilOp(e.KEEP, e.KEEP, e.DECR),
                      c[this._mask._renderer.type].render.call(
                        this._mask,
                        e,
                        r,
                        this
                      ),
                      e.colorMask(!0, !0, !0, !0),
                      e.stencilFunc(e.NOTEQUAL, 0, 1),
                      e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
                      e.disable(e.STENCIL_TEST)),
                    this.flagReset()
                  );
                },
              },
              path: {
                updateCanvas: function (e) {
                  var i,
                    n,
                    s,
                    o,
                    u,
                    d,
                    f,
                    p,
                    g,
                    m,
                    _,
                    v,
                    y,
                    x,
                    b,
                    w = e._renderer.vertices,
                    S = this.canvas,
                    T = this.ctx,
                    P = e._renderer.scale,
                    C = e._stroke,
                    k = e._linewidth,
                    A = e._fill,
                    M = e._renderer.opacity || e._opacity,
                    R = e._cap,
                    O = e._join,
                    E = e._miter,
                    F = e._closed,
                    B = e.dashes,
                    I = w.length,
                    L = I - 1;
                  (S.width = Math.max(
                    Math.ceil(e._renderer.rect.width * P),
                    1
                  )),
                    (S.height = Math.max(
                      Math.ceil(e._renderer.rect.height * P),
                      1
                    ));
                  var N,
                    U = e._renderer.rect.centroid,
                    V = U.x,
                    j = U.y;
                  T.clearRect(0, 0, S.width, S.height),
                    A &&
                      (h.isString(A)
                        ? (T.fillStyle = A)
                        : (c[A._renderer.type].render.call(A, T, e),
                          (T.fillStyle = A._renderer.effect))),
                    C &&
                      (h.isString(C)
                        ? (T.strokeStyle = C)
                        : (c[C._renderer.type].render.call(C, T, e),
                          (T.strokeStyle = C._renderer.effect))),
                    k && (T.lineWidth = k),
                    E && (T.miterLimit = E),
                    O && (T.lineJoin = O),
                    R && (T.lineCap = R),
                    h.isNumber(M) && (T.globalAlpha = M),
                    B && 0 < B.length && T.setLineDash(B),
                    T.save(),
                    T.scale(P, P),
                    T.translate(V, j),
                    T.beginPath();
                  for (var D = 0; D < w.length; D++) {
                    var z = w[D];
                    switch (((y = a(z.x)), (x = a(z.y)), z.command)) {
                      case t.Commands.close:
                        T.closePath();
                        break;
                      case t.Commands.arc:
                        var G = z.rx,
                          q = z.ry,
                          W = z.xAxisRotation,
                          X = z.largeArcFlag,
                          H = z.sweepFlag;
                        s = w[(n = F ? r(D - 1, I) : max(D - 1, 0))];
                        var Y = a(s.x),
                          K = a(s.y);
                        l.renderSvgArcCommand(T, Y, K, G, q, X, H, W, y, x);
                        break;
                      case t.Commands.curve:
                        (n = F ? r(D - 1, I) : Math.max(D - 1, 0)),
                          (i = F ? r(D + 1, I) : Math.min(D + 1, L)),
                          (s = w[n]),
                          (o = w[i]),
                          (g =
                            (s.controls && s.controls.right) || t.Vector.zero),
                          (m =
                            (z.controls && z.controls.left) || t.Vector.zero),
                          (p = s._relative
                            ? ((f = a(g.x + s.x)), a(g.y + s.y))
                            : ((f = a(g.x)), a(g.y))),
                          (d = z._relative
                            ? ((u = a(m.x + z.x)), a(m.y + z.y))
                            : ((u = a(m.x)), a(m.y))),
                          T.bezierCurveTo(f, p, u, d, y, x),
                          L <= D &&
                            F &&
                            ((o = N),
                            (_ =
                              (z.controls && z.controls.right) ||
                              t.Vector.zero),
                            (v =
                              (o.controls && o.controls.left) || t.Vector.zero),
                            (p = z._relative
                              ? ((f = a(_.x + z.x)), a(_.y + z.y))
                              : ((f = a(_.x)), a(_.y))),
                            (d = o._relative
                              ? ((u = a(v.x + o.x)), a(v.y + o.y))
                              : ((u = a(v.x)), a(v.y))),
                            (y = a(o.x)),
                            (x = a(o.y)),
                            T.bezierCurveTo(f, p, u, d, y, x));
                        break;
                      case t.Commands.line:
                        T.lineTo(y, x);
                        break;
                      case t.Commands.move:
                        (N = z), T.moveTo(y, x);
                    }
                  }
                  F && T.closePath(),
                    c.isHidden.test(A) ||
                      ((b = A._renderer && A._renderer.offset) &&
                        (T.save(),
                        T.translate(
                          -A._renderer.offset.x,
                          -A._renderer.offset.y
                        ),
                        T.scale(A._renderer.scale.x, A._renderer.scale.y)),
                      T.fill(),
                      b && T.restore()),
                    c.isHidden.test(C) ||
                      ((b = C._renderer && C._renderer.offset) &&
                        (T.save(),
                        T.translate(
                          -C._renderer.offset.x,
                          -C._renderer.offset.y
                        ),
                        T.scale(C._renderer.scale.x, C._renderer.scale.y),
                        (T.lineWidth = k / C._renderer.scale.x)),
                      T.stroke(),
                      b && T.restore()),
                    T.restore();
                },
                getBoundingClientRect: function (t, e, i) {
                  var r,
                    n,
                    s = 1 / 0,
                    o = -1 / 0,
                    a = 1 / 0,
                    l = -1 / 0;
                  t.forEach(function (t) {
                    var e,
                      i,
                      r,
                      n,
                      h,
                      c,
                      u = t.x,
                      d = t.y,
                      f = t.controls;
                    (a = Math.min(d, a)),
                      (s = Math.min(u, s)),
                      (o = Math.max(u, o)),
                      (l = Math.max(d, l)),
                      t.controls &&
                        ((h = f.left),
                        (c = f.right),
                        h &&
                          c &&
                          ((e = t._relative ? h.x + u : h.x),
                          (i = t._relative ? h.y + d : h.y),
                          (r = t._relative ? c.x + u : c.x),
                          (n = t._relative ? c.y + d : c.y),
                          e &&
                            i &&
                            r &&
                            n &&
                            ((a = Math.min(i, n, a)),
                            (s = Math.min(e, r, s)),
                            (o = Math.max(e, r, o)),
                            (l = Math.max(i, n, l)))));
                  }),
                    h.isNumber(e) && ((a -= e), (s -= e), (o += e), (l += e)),
                    (r = o - s),
                    (n = l - a),
                    (i.top = a),
                    (i.left = s),
                    (i.right = o),
                    (i.bottom = l),
                    (i.width = r),
                    (i.height = n),
                    i.centroid || (i.centroid = {}),
                    (i.centroid.x = -s),
                    (i.centroid.y = -a);
                },
                render: function (e, r, n) {
                  if (!this._visible || !this._opacity) return this;
                  this._update();
                  var o = this.parent,
                    a = o._matrix.manual || o._flagMatrix,
                    l = this._matrix.manual || this._flagMatrix,
                    u =
                      this._flagVertices ||
                      this._flagFill ||
                      (this._fill instanceof t.LinearGradient &&
                        (this._fill._flagSpread ||
                          this._fill._flagStops ||
                          this._fill._flagEndPoints)) ||
                      (this._fill instanceof t.RadialGradient &&
                        (this._fill._flagSpread ||
                          this._fill._flagStops ||
                          this._fill._flagRadius ||
                          this._fill._flagCenter ||
                          this._fill._flagFocal)) ||
                      (this._fill instanceof t.Texture &&
                        ((this._fill._flagLoaded && this._fill.loaded) ||
                          this._fill._flagImage ||
                          this._fill._flagVideo ||
                          this._fill._flagRepeat ||
                          this._fill._flagOffset ||
                          this._fill._flagScale)) ||
                      (this._stroke instanceof t.LinearGradient &&
                        (this._stroke._flagSpread ||
                          this._stroke._flagStops ||
                          this._stroke._flagEndPoints)) ||
                      (this._stroke instanceof t.RadialGradient &&
                        (this._stroke._flagSpread ||
                          this._stroke._flagStops ||
                          this._stroke._flagRadius ||
                          this._stroke._flagCenter ||
                          this._stroke._flagFocal)) ||
                      (this._stroke instanceof t.Texture &&
                        ((this._stroke._flagLoaded && this._stroke.loaded) ||
                          this._stroke._flagImage ||
                          this._stroke._flagVideo ||
                          this._stroke._flagRepeat ||
                          this._stroke._flagOffset ||
                          this._fill._flagScale)) ||
                      this._flagStroke ||
                      this._flagLinewidth ||
                      this._flagOpacity ||
                      o._flagOpacity ||
                      this._flagVisible ||
                      this._flagCap ||
                      this._flagJoin ||
                      this._flagMiter ||
                      this._flagScale ||
                      (this.dashes && 0 < this.dashes.length) ||
                      !this._renderer.texture;
                  return (
                    (a || l) &&
                      (this._renderer.matrix ||
                        (this._renderer.matrix = new t.Array(9)),
                      this._matrix.toArray(!0, s),
                      i(s, o._renderer.matrix, this._renderer.matrix),
                      (this._renderer.scale = this._scale * o._renderer.scale)),
                    u
                      ? (this._renderer.rect || (this._renderer.rect = {}),
                        this._renderer.triangles ||
                          (this._renderer.triangles = new t.Array(12)),
                        (this._renderer.opacity =
                          this._opacity * o._renderer.opacity),
                        c.path.getBoundingClientRect(
                          this._renderer.vertices,
                          this._linewidth,
                          this._renderer.rect
                        ),
                        c.getTriangles(
                          this._renderer.rect,
                          this._renderer.triangles
                        ),
                        c.updateBuffer.call(c, e, this, r),
                        c.updateTexture.call(c, e, this))
                      : (h.isString(this._fill) || this._fill._update(),
                        h.isString(this._stroke) || this._stroke._update()),
                    !this._clip || n
                      ? (e.bindBuffer(
                          e.ARRAY_BUFFER,
                          this._renderer.textureCoordsBuffer
                        ),
                        e.vertexAttribPointer(
                          r.textureCoords,
                          2,
                          e.FLOAT,
                          !1,
                          0,
                          0
                        ),
                        e.bindTexture(e.TEXTURE_2D, this._renderer.texture),
                        e.uniformMatrix3fv(r.matrix, !1, this._renderer.matrix),
                        e.bindBuffer(e.ARRAY_BUFFER, this._renderer.buffer),
                        e.vertexAttribPointer(r.position, 2, e.FLOAT, !1, 0, 0),
                        e.drawArrays(e.TRIANGLES, 0, 6),
                        this.flagReset())
                      : void 0
                  );
                },
              },
              text: {
                updateCanvas: function (t) {
                  var e = this.canvas,
                    i = this.ctx,
                    r = t._renderer.scale,
                    n = t._stroke,
                    s = t._linewidth * r,
                    o = t._fill,
                    l = t._renderer.opacity || t._opacity,
                    u = t.dashes;
                  (e.width = Math.max(
                    Math.ceil(t._renderer.rect.width * r),
                    1
                  )),
                    (e.height = Math.max(
                      Math.ceil(t._renderer.rect.height * r),
                      1
                    ));
                  var d,
                    f,
                    p,
                    g,
                    m,
                    _,
                    v,
                    y = t._renderer.rect.centroid,
                    x = y.x,
                    b = y.y,
                    w =
                      o._renderer &&
                      o._renderer.offset &&
                      n._renderer &&
                      n._renderer.offset;
                  i.clearRect(0, 0, e.width, e.height),
                    w ||
                      (i.font = [
                        t._style,
                        t._weight,
                        t._size + "px/" + t._leading + "px",
                        t._family,
                      ].join(" ")),
                    (i.textAlign = "center"),
                    (i.textBaseline = "middle"),
                    o &&
                      (h.isString(o)
                        ? (i.fillStyle = o)
                        : (c[o._renderer.type].render.call(o, i, t),
                          (i.fillStyle = o._renderer.effect))),
                    n &&
                      (h.isString(n)
                        ? (i.strokeStyle = n)
                        : (c[n._renderer.type].render.call(n, i, t),
                          (i.strokeStyle = n._renderer.effect))),
                    s && (i.lineWidth = s),
                    h.isNumber(l) && (i.globalAlpha = l),
                    u && 0 < u.length && i.setLineDash(u),
                    i.save(),
                    i.scale(r, r),
                    i.translate(x, b),
                    c.isHidden.test(o) ||
                      (o._renderer && o._renderer.offset
                        ? ((_ = a(o._renderer.scale.x)),
                          (v = a(o._renderer.scale.y)),
                          i.save(),
                          i.translate(
                            -a(o._renderer.offset.x),
                            -a(o._renderer.offset.y)
                          ),
                          i.scale(_, v),
                          (d = t._size / o._renderer.scale.y),
                          (f = t._leading / o._renderer.scale.y),
                          (i.font = [
                            t._style,
                            t._weight,
                            a(d) + "px/",
                            a(f) + "px",
                            t._family,
                          ].join(" ")),
                          (p = o._renderer.offset.x / o._renderer.scale.x),
                          (g = o._renderer.offset.y / o._renderer.scale.y),
                          i.fillText(t.value, a(p), a(g)),
                          i.restore())
                        : i.fillText(t.value, 0, 0)),
                    c.isHidden.test(n) ||
                      (n._renderer && n._renderer.offset
                        ? ((_ = a(n._renderer.scale.x)),
                          (v = a(n._renderer.scale.y)),
                          i.save(),
                          i.translate(
                            -a(n._renderer.offset.x),
                            -a(n._renderer.offset.y)
                          ),
                          i.scale(_, v),
                          (d = t._size / n._renderer.scale.y),
                          (f = t._leading / n._renderer.scale.y),
                          (i.font = [
                            t._style,
                            t._weight,
                            a(d) + "px/",
                            a(f) + "px",
                            t._family,
                          ].join(" ")),
                          (p = n._renderer.offset.x / n._renderer.scale.x),
                          (g = n._renderer.offset.y / n._renderer.scale.y),
                          (m = s / n._renderer.scale.x),
                          (i.lineWidth = a(m)),
                          i.strokeText(t.value, a(p), a(g)),
                          i.restore())
                        : i.strokeText(t.value, 0, 0)),
                    i.restore();
                },
                getBoundingClientRect: function (t, e) {
                  var i = c.ctx;
                  (i.font = [
                    t._style,
                    t._weight,
                    t._size + "px/" + t._leading + "px",
                    t._family,
                  ].join(" ")),
                    (i.textAlign = "center"),
                    (i.textBaseline = t._baseline);
                  var r = 1.25 * i.measureText(t._value).width,
                    n = 1.25 * Math.max(t._size, t._leading);
                  this._linewidth &&
                    !c.isHidden.test(this._stroke) &&
                    ((r += 2 * this._linewidth), (n += 2 * this._linewidth));
                  var s = r / 2,
                    o = n / 2;
                  switch (c.alignments[t._alignment] || t._alignment) {
                    case c.alignments.left:
                      (e.left = 0), (e.right = r);
                      break;
                    case c.alignments.right:
                      (e.left = -r), (e.right = 0);
                      break;
                    default:
                      (e.left = -s), (e.right = s);
                  }
                  switch (t._baseline) {
                    case "bottom":
                      (e.top = -n), (e.bottom = 0);
                      break;
                    case "top":
                      (e.top = 0), (e.bottom = n);
                      break;
                    default:
                      (e.top = -o), (e.bottom = o);
                  }
                  (e.width = r),
                    (e.height = n),
                    e.centroid || (e.centroid = {}),
                    (e.centroid.x = s),
                    (e.centroid.y = o);
                },
                render: function (e, r, n) {
                  if (!this._visible || !this._opacity) return this;
                  this._update();
                  var o = this.parent,
                    a = o._matrix.manual || o._flagMatrix,
                    l = this._matrix.manual || this._flagMatrix,
                    u =
                      this._flagVertices ||
                      this._flagFill ||
                      (this._fill instanceof t.LinearGradient &&
                        (this._fill._flagSpread ||
                          this._fill._flagStops ||
                          this._fill._flagEndPoints)) ||
                      (this._fill instanceof t.RadialGradient &&
                        (this._fill._flagSpread ||
                          this._fill._flagStops ||
                          this._fill._flagRadius ||
                          this._fill._flagCenter ||
                          this._fill._flagFocal)) ||
                      (this._fill instanceof t.Texture &&
                        ((this._fill._flagLoaded && this._fill.loaded) ||
                          this._fill._flagImage ||
                          this._fill._flagVideo ||
                          this._fill._flagRepeat ||
                          this._fill._flagOffset ||
                          this._fill._flagScale)) ||
                      (this._stroke instanceof t.LinearGradient &&
                        (this._stroke._flagSpread ||
                          this._stroke._flagStops ||
                          this._stroke._flagEndPoints)) ||
                      (this._stroke instanceof t.RadialGradient &&
                        (this._stroke._flagSpread ||
                          this._stroke._flagStops ||
                          this._stroke._flagRadius ||
                          this._stroke._flagCenter ||
                          this._stroke._flagFocal)) ||
                      (this._stroke instanceof t.Texture &&
                        ((this._stroke._flagLoaded && this._stroke.loaded) ||
                          this._stroke._flagImage ||
                          this._stroke._flagVideo ||
                          this._stroke._flagRepeat ||
                          this._stroke._flagOffset ||
                          this._fill._flagScale)) ||
                      this._flagStroke ||
                      this._flagLinewidth ||
                      this._flagOpacity ||
                      o._flagOpacity ||
                      this._flagVisible ||
                      this._flagScale ||
                      this._flagValue ||
                      this._flagFamily ||
                      this._flagSize ||
                      this._flagLeading ||
                      this._flagAlignment ||
                      this._flagBaseline ||
                      this._flagStyle ||
                      this._flagWeight ||
                      this._flagDecoration ||
                      (this.dashes && 0 < this.dashes.length) ||
                      !this._renderer.texture;
                  return (
                    (a || l) &&
                      (this._renderer.matrix ||
                        (this._renderer.matrix = new t.Array(9)),
                      this._matrix.toArray(!0, s),
                      i(s, o._renderer.matrix, this._renderer.matrix),
                      (this._renderer.scale = this._scale * o._renderer.scale)),
                    u
                      ? (this._renderer.rect || (this._renderer.rect = {}),
                        this._renderer.triangles ||
                          (this._renderer.triangles = new t.Array(12)),
                        (this._renderer.opacity =
                          this._opacity * o._renderer.opacity),
                        c.text.getBoundingClientRect(this, this._renderer.rect),
                        c.getTriangles(
                          this._renderer.rect,
                          this._renderer.triangles
                        ),
                        c.updateBuffer.call(c, e, this, r),
                        c.updateTexture.call(c, e, this))
                      : (h.isString(this._fill) || this._fill._update(),
                        h.isString(this._stroke) || this._stroke._update()),
                    !this._clip || n
                      ? (e.bindBuffer(
                          e.ARRAY_BUFFER,
                          this._renderer.textureCoordsBuffer
                        ),
                        e.vertexAttribPointer(
                          r.textureCoords,
                          2,
                          e.FLOAT,
                          !1,
                          0,
                          0
                        ),
                        e.bindTexture(e.TEXTURE_2D, this._renderer.texture),
                        e.uniformMatrix3fv(r.matrix, !1, this._renderer.matrix),
                        e.bindBuffer(e.ARRAY_BUFFER, this._renderer.buffer),
                        e.vertexAttribPointer(r.position, 2, e.FLOAT, !1, 0, 0),
                        e.drawArrays(e.TRIANGLES, 0, 6),
                        this.flagReset())
                      : void 0
                  );
                },
              },
              "linear-gradient": {
                render: function (t, e) {
                  if (t.canvas.getContext("2d")) {
                    if (
                      (this._update(),
                      !this._renderer.effect ||
                        this._flagEndPoints ||
                        this._flagStops)
                    ) {
                      this._renderer.effect = t.createLinearGradient(
                        this.left._x,
                        this.left._y,
                        this.right._x,
                        this.right._y
                      );
                      for (var i = 0; i < this.stops.length; i++) {
                        var r = this.stops[i];
                        this._renderer.effect.addColorStop(r._offset, r._color);
                      }
                    }
                    return this.flagReset();
                  }
                },
              },
              "radial-gradient": {
                render: function (t, e) {
                  if (t.canvas.getContext("2d")) {
                    if (
                      (this._update(),
                      !this._renderer.effect ||
                        this._flagCenter ||
                        this._flagFocal ||
                        this._flagRadius ||
                        this._flagStops)
                    ) {
                      this._renderer.effect = t.createRadialGradient(
                        this.center._x,
                        this.center._y,
                        0,
                        this.focal._x,
                        this.focal._y,
                        this._radius
                      );
                      for (var i = 0; i < this.stops.length; i++) {
                        var r = this.stops[i];
                        this._renderer.effect.addColorStop(r._offset, r._color);
                      }
                    }
                    return this.flagReset();
                  }
                },
              },
              texture: {
                render: function (e, i) {
                  if (e.canvas.getContext("2d")) {
                    this._update();
                    var r = this.image;
                    if (
                      (this._flagLoaded ||
                        this._flagImage ||
                        this._flagVideo ||
                        this._flagRepeat) &&
                      this.loaded
                    )
                      this._renderer.effect = e.createPattern(r, this._repeat);
                    else if (!this._renderer.effect) return this.flagReset();
                    return (
                      (this._flagOffset ||
                        this._flagLoaded ||
                        this._flagScale) &&
                        (this._renderer.offset instanceof t.Vector ||
                          (this._renderer.offset = new t.Vector()),
                        (this._renderer.offset.x = -this._offset.x),
                        (this._renderer.offset.y = -this._offset.y),
                        r &&
                          ((this._renderer.offset.x += r.width / 2),
                          (this._renderer.offset.y += r.height / 2),
                          this._scale instanceof t.Vector
                            ? ((this._renderer.offset.x *= this._scale.x),
                              (this._renderer.offset.y *= this._scale.y))
                            : ((this._renderer.offset.x *= this._scale),
                              (this._renderer.offset.y *= this._scale)))),
                      (this._flagScale || this._flagLoaded) &&
                        (this._renderer.scale instanceof t.Vector ||
                          (this._renderer.scale = new t.Vector()),
                        this._scale instanceof t.Vector
                          ? this._renderer.scale.copy(this._scale)
                          : this._renderer.scale.set(this._scale, this._scale)),
                      this.flagReset()
                    );
                  }
                },
              },
              getTriangles: function (t, e) {
                var i = t.top,
                  r = t.left,
                  n = t.right,
                  s = t.bottom;
                (e[0] = r),
                  (e[1] = i),
                  (e[2] = n),
                  (e[3] = i),
                  (e[4] = r),
                  (e[5] = s),
                  (e[6] = r),
                  (e[7] = s),
                  (e[8] = n),
                  (e[9] = i),
                  (e[10] = n),
                  (e[11] = s);
              },
              updateTexture: function (t, e) {
                this[e._renderer.type].updateCanvas.call(c, e),
                  e._renderer.texture && t.deleteTexture(e._renderer.texture),
                  t.bindBuffer(t.ARRAY_BUFFER, e._renderer.textureCoordsBuffer),
                  (e._renderer.texture = t.createTexture()),
                  t.bindTexture(t.TEXTURE_2D, e._renderer.texture),
                  t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_WRAP_S,
                    t.CLAMP_TO_EDGE
                  ),
                  t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_WRAP_T,
                    t.CLAMP_TO_EDGE
                  ),
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                  this.canvas.width <= 0 ||
                    this.canvas.height <= 0 ||
                    t.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      t.RGBA,
                      t.RGBA,
                      t.UNSIGNED_BYTE,
                      this.canvas
                    );
              },
              updateBuffer: function (t, e, i) {
                h.isObject(e._renderer.buffer) &&
                  t.deleteBuffer(e._renderer.buffer),
                  (e._renderer.buffer = t.createBuffer()),
                  t.bindBuffer(t.ARRAY_BUFFER, e._renderer.buffer),
                  t.enableVertexAttribArray(i.position),
                  t.bufferData(
                    t.ARRAY_BUFFER,
                    e._renderer.triangles,
                    t.STATIC_DRAW
                  ),
                  h.isObject(e._renderer.textureCoordsBuffer) &&
                    t.deleteBuffer(e._renderer.textureCoordsBuffer),
                  (e._renderer.textureCoordsBuffer = t.createBuffer()),
                  t.bindBuffer(t.ARRAY_BUFFER, e._renderer.textureCoordsBuffer),
                  t.enableVertexAttribArray(i.textureCoords),
                  t.bufferData(t.ARRAY_BUFFER, this.uv, t.STATIC_DRAW);
              },
              program: {
                create: function (e, i) {
                  var r, n;
                  if (
                    ((r = e.createProgram()),
                    h.each(i, function (t) {
                      e.attachShader(r, t);
                    }),
                    e.linkProgram(r),
                    !e.getProgramParameter(r, e.LINK_STATUS))
                  )
                    throw (
                      ((n = e.getProgramInfoLog(r)),
                      e.deleteProgram(r),
                      new t.Utils.Error("unable to link program: " + n))
                    );
                  return r;
                },
              },
              shaders: {
                create: function (e, i, r) {
                  var n, s;
                  if (
                    ((n = e.createShader(e[r])),
                    e.shaderSource(n, i),
                    e.compileShader(n),
                    !e.getShaderParameter(n, e.COMPILE_STATUS))
                  )
                    throw (
                      ((s = e.getShaderInfoLog(n)),
                      e.deleteShader(n),
                      new t.Utils.Error(
                        "unable to compile shader " + n + ": " + s
                      ))
                    );
                  return n;
                },
                types: { vertex: "VERTEX_SHADER", fragment: "FRAGMENT_SHADER" },
                vertex: [
                  "attribute vec2 a_position;",
                  "attribute vec2 a_textureCoords;",
                  "",
                  "uniform mat3 u_matrix;",
                  "uniform vec2 u_resolution;",
                  "",
                  "varying vec2 v_textureCoords;",
                  "",
                  "void main() {",
                  "   vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;",
                  "   vec2 normal = projected / u_resolution;",
                  "   vec2 clipspace = (normal * 2.0) - 1.0;",
                  "",
                  "   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);",
                  "   v_textureCoords = a_textureCoords;",
                  "}",
                ].join("\n"),
                fragment: [
                  "precision mediump float;",
                  "",
                  "uniform sampler2D u_image;",
                  "varying vec2 v_textureCoords;",
                  "",
                  "void main() {",
                  "  gl_FragColor = texture2D(u_image, v_textureCoords);",
                  "}",
                ].join("\n"),
              },
              TextureRegistry: new t.Registry(),
            };
          c.ctx = c.canvas.getContext("2d");
          var u = (t[t.Types.webgl] = function (e) {
            var i, r, s, o;
            if (
              ((this.domElement =
                e.domElement || document.createElement("canvas")),
              h.isUndefined(e.offscreenElement) ||
                ((c.canvas = e.offscreenElement),
                (c.ctx = c.canvas.getContext("2d"))),
              (this.scene = new t.Group()),
              ((this.scene.parent = this)._renderer = {
                matrix: new t.Array(n),
                scale: 1,
                opacity: 1,
              }),
              (this._flagMatrix = !0),
              (i = h.defaults(e || {}, {
                antialias: !1,
                alpha: !0,
                premultipliedAlpha: !0,
                stencil: !0,
                preserveDrawingBuffer: !0,
                overdraw: !1,
              })),
              (this.overdraw = i.overdraw),
              (r = this.ctx =
                this.domElement.getContext("webgl", i) ||
                this.domElement.getContext("experimental-webgl", i)),
              !this.ctx)
            )
              throw new t.Utils.Error(
                "unable to create a webgl context. Try using another renderer."
              );
            (s = c.shaders.create(r, c.shaders.vertex, c.shaders.types.vertex)),
              (o = c.shaders.create(
                r,
                c.shaders.fragment,
                c.shaders.types.fragment
              )),
              (this.program = c.program.create(r, [s, o])),
              r.useProgram(this.program),
              (this.program.position = r.getAttribLocation(
                this.program,
                "a_position"
              )),
              (this.program.matrix = r.getUniformLocation(
                this.program,
                "u_matrix"
              )),
              (this.program.textureCoords = r.getAttribLocation(
                this.program,
                "a_textureCoords"
              )),
              r.disable(r.DEPTH_TEST),
              r.enable(r.BLEND),
              r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD),
              r.blendFuncSeparate(
                r.SRC_ALPHA,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
          });
          h.extend(u, { Utils: c }),
            h.extend(u.prototype, t.Utils.Events, {
              constructor: u,
              setSize: function (e, i, r) {
                (this.width = e),
                  (this.height = i),
                  (this.ratio = h.isUndefined(r) ? o(this.ctx) : r),
                  (this.domElement.width = e * this.ratio),
                  (this.domElement.height = i * this.ratio),
                  h.isObject(this.domElement.style) &&
                    h.extend(this.domElement.style, {
                      width: e + "px",
                      height: i + "px",
                    }),
                  (e *= this.ratio),
                  (i *= this.ratio),
                  (this._renderer.matrix[0] =
                    this._renderer.matrix[4] =
                    this._renderer.scale =
                      this.ratio),
                  (this._flagMatrix = !0),
                  this.ctx.viewport(0, 0, e, i);
                var n = this.ctx.getUniformLocation(
                  this.program,
                  "u_resolution"
                );
                return (
                  this.ctx.uniform2f(n, e, i),
                  this.trigger(t.Events.resize, e, i, r)
                );
              },
              render: function () {
                var t = this.ctx;
                return (
                  this.overdraw ||
                    t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
                  c.group.render.call(this.scene, t, this.program),
                  (this._flagMatrix = !1),
                  this
                );
              },
            });
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils,
            i = (t.Shape = function () {
              (this._renderer = {}),
                (this._renderer.flagMatrix = e.bind(i.FlagMatrix, this)),
                (this.isShape = !0),
                (this.id = t.Identifier + t.uniqueId()),
                (this.classList = []),
                (this._matrix = new t.Matrix()),
                (this.translation = new t.Vector()),
                (this.rotation = 0),
                (this.scale = 1);
            });
          e.extend(i, {
            FlagMatrix: function () {
              this._flagMatrix = !0;
            },
            MakeObservable: function (e) {
              var r = {
                enumerable: !1,
                get: function () {
                  return this._translation;
                },
                set: function (e) {
                  this._translation &&
                    this._translation.unbind(
                      t.Events.change,
                      this._renderer.flagMatrix
                    ),
                    (this._translation = e),
                    this._translation.bind(
                      t.Events.change,
                      this._renderer.flagMatrix
                    ),
                    i.FlagMatrix.call(this);
                },
              };
              Object.defineProperty(e, "translation", r),
                Object.defineProperty(e, "position", r),
                Object.defineProperty(e, "rotation", {
                  enumerable: !0,
                  get: function () {
                    return this._rotation;
                  },
                  set: function (t) {
                    (this._rotation = t), (this._flagMatrix = !0);
                  },
                }),
                Object.defineProperty(e, "scale", {
                  enumerable: !0,
                  get: function () {
                    return this._scale;
                  },
                  set: function (e) {
                    this._scale instanceof t.Vector &&
                      this._scale.unbind(
                        t.Events.change,
                        this._renderer.flagMatrix
                      ),
                      (this._scale = e),
                      this._scale instanceof t.Vector &&
                        this._scale.bind(
                          t.Events.change,
                          this._renderer.flagMatrix
                        ),
                      (this._flagMatrix = !0),
                      (this._flagScale = !0);
                  },
                });
            },
          }),
            e.extend(i.prototype, t.Utils.Events, {
              _flagMatrix: !0,
              _flagScale: !1,
              _translation: null,
              _rotation: 0,
              _scale: 1,
              constructor: i,
              addTo: function (t) {
                return t.add(this), this;
              },
              clone: function (t) {
                var e = new i();
                return (
                  e.translation.copy(this.translation),
                  (e.rotation = this.rotation),
                  (e.scale = this.scale),
                  t && t.add(e),
                  e._update()
                );
              },
              _update: function (e) {
                return (
                  !this._matrix.manual &&
                    this._flagMatrix &&
                    (this._matrix
                      .identity()
                      .translate(this.translation.x, this.translation.y),
                    this._scale instanceof t.Vector
                      ? this._matrix.scale(this._scale.x, this._scale.y)
                      : this._matrix.scale(this._scale),
                    this._matrix.rotate(this.rotation)),
                  e &&
                    this.parent &&
                    this.parent._update &&
                    this.parent._update(),
                  this
                );
              },
              flagReset: function () {
                return (this._flagMatrix = this._flagScale = !1), this;
              },
            }),
            i.MakeObservable(i.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = Math.min,
            i = Math.max,
            r = (Math.round, Math.ceil),
            n = Math.floor,
            s = t.Utils.getComputedMatrix,
            o = {},
            a = t.Utils;
          a.each(t.Commands, function (t, e) {
            o[e] = new RegExp(t);
          });
          var l = (t.Path = function (e, i, r, n) {
            t.Shape.call(this),
              (this._renderer.type = "path"),
              (this._renderer.flagVertices = a.bind(l.FlagVertices, this)),
              (this._renderer.bindVertices = a.bind(l.BindVertices, this)),
              (this._renderer.unbindVertices = a.bind(l.UnbindVertices, this)),
              (this._renderer.flagFill = a.bind(l.FlagFill, this)),
              (this._renderer.flagStroke = a.bind(l.FlagStroke, this)),
              (this._renderer.vertices = []),
              (this._renderer.collection = []),
              (this._closed = !!i),
              (this._curved = !!r),
              (this.beginning = 0),
              (this.ending = 1),
              (this.fill = "#E8911F"),
              (this.stroke = "white"),
              (this.linewidth = 1),
              (this.opacity = 1),
              (this.className = ""),
              (this.visible = !0),
              (this.cap = "butt"),
              (this.join = "miter"),
              (this.miter = 4),
              (this.vertices = e),
              (this.automatic = !n),
              (this.dashes = []);
          });
          function h(t, e) {
            if (0 === e || 1 === e) return !0;
            for (
              var i = t._length * e, r = 0, n = 0;
              n < t._lengths.length;
              n++
            ) {
              var s = t._lengths[n];
              if (i <= r) return 0 <= i - r;
              r += s;
            }
            return !1;
          }
          function c(t, e) {
            var i = t._length;
            if (e <= 0) return 0;
            if (i <= e) return t._lengths.length - 1;
            for (var r = 0, n = 0; r < t._lengths.length; r++) {
              if (n + t._lengths[r] >= e)
                return (e -= n), Math.max(r - 1, 0) + e / t._lengths[r];
              n += t._lengths[r];
            }
            return -1;
          }
          function u(e, i, r) {
            var n,
              s,
              o,
              a,
              l,
              h,
              c,
              u,
              d = i.controls && i.controls.right,
              f = e.controls && e.controls.left;
            return (
              (n = i.x),
              (l = i.y),
              (s = (d || i).x),
              (h = (d || i).y),
              (o = (f || e).x),
              (c = (f || e).y),
              (a = e.x),
              (u = e.y),
              d && i._relative && ((s += i.x), (h += i.y)),
              f && e._relative && ((o += e.x), (c += e.y)),
              t.Utils.getCurveLength(n, l, s, h, o, c, a, u, r)
            );
          }
          function d(e, i, r) {
            var n,
              s,
              o,
              a,
              l,
              h,
              c,
              u,
              d = i.controls && i.controls.right,
              f = e.controls && e.controls.left;
            return (
              (n = i.x),
              (l = i.y),
              (s = (d || i).x),
              (h = (d || i).y),
              (o = (f || e).x),
              (c = (f || e).y),
              (a = e.x),
              (u = e.y),
              d && i._relative && ((s += i.x), (h += i.y)),
              f && e._relative && ((o += e.x), (c += e.y)),
              t.Utils.subdivide(n, l, s, h, o, c, a, u, r)
            );
          }
          a.extend(l, {
            Properties: [
              "fill",
              "stroke",
              "linewidth",
              "opacity",
              "className",
              "visible",
              "cap",
              "join",
              "miter",
              "closed",
              "curved",
              "automatic",
              "beginning",
              "ending",
            ],
            Utils: { getCurveLength: u },
            FlagVertices: function () {
              (this._flagVertices = !0),
                (this._flagLength = !0),
                this.parent && (this.parent._flagLength = !0);
            },
            BindVertices: function (e) {
              for (var i = e.length; i--; )
                e[i].bind(t.Events.change, this._renderer.flagVertices);
              this._renderer.flagVertices();
            },
            UnbindVertices: function (e) {
              for (var i = e.length; i--; )
                e[i].unbind(t.Events.change, this._renderer.flagVertices);
              this._renderer.flagVertices();
            },
            FlagFill: function () {
              this._flagFill = !0;
            },
            FlagStroke: function () {
              this._flagStroke = !0;
            },
            MakeObservable: function (e) {
              t.Shape.MakeObservable(e),
                a.each(l.Properties.slice(2, 9), t.Utils.defineProperty, e),
                Object.defineProperty(e, "fill", {
                  enumerable: !0,
                  get: function () {
                    return this._fill;
                  },
                  set: function (e) {
                    (this._fill instanceof t.Gradient ||
                      this._fill instanceof t.LinearGradient ||
                      this._fill instanceof t.RadialGradient ||
                      this._fill instanceof t.Texture) &&
                      this._fill.unbind(
                        t.Events.change,
                        this._renderer.flagFill
                      ),
                      (this._fill = e),
                      (this._flagFill = !0),
                      (this._fill instanceof t.Gradient ||
                        this._fill instanceof t.LinearGradient ||
                        this._fill instanceof t.RadialGradient ||
                        this._fill instanceof t.Texture) &&
                        this._fill.bind(
                          t.Events.change,
                          this._renderer.flagFill
                        );
                  },
                }),
                Object.defineProperty(e, "stroke", {
                  enumerable: !0,
                  get: function () {
                    return this._stroke;
                  },
                  set: function (e) {
                    (this._stroke instanceof t.Gradient ||
                      this._stroke instanceof t.LinearGradient ||
                      this._stroke instanceof t.RadialGradient ||
                      this._stroke instanceof t.Texture) &&
                      this._stroke.unbind(
                        t.Events.change,
                        this._renderer.flagStroke
                      ),
                      (this._stroke = e),
                      (this._flagStroke = !0),
                      (this._stroke instanceof t.Gradient ||
                        this._stroke instanceof t.LinearGradient ||
                        this._stroke instanceof t.RadialGradient ||
                        this._stroke instanceof t.Texture) &&
                        this._stroke.bind(
                          t.Events.change,
                          this._renderer.flagStroke
                        );
                  },
                }),
                Object.defineProperty(e, "length", {
                  get: function () {
                    return (
                      this._flagLength && this._updateLength(), this._length
                    );
                  },
                }),
                Object.defineProperty(e, "closed", {
                  enumerable: !0,
                  get: function () {
                    return this._closed;
                  },
                  set: function (t) {
                    (this._closed = !!t), (this._flagVertices = !0);
                  },
                }),
                Object.defineProperty(e, "curved", {
                  enumerable: !0,
                  get: function () {
                    return this._curved;
                  },
                  set: function (t) {
                    (this._curved = !!t), (this._flagVertices = !0);
                  },
                }),
                Object.defineProperty(e, "automatic", {
                  enumerable: !0,
                  get: function () {
                    return this._automatic;
                  },
                  set: function (t) {
                    if (t !== this._automatic) {
                      this._automatic = !!t;
                      var e = this._automatic ? "ignore" : "listen";
                      a.each(this.vertices, function (t) {
                        t[e]();
                      });
                    }
                  },
                }),
                Object.defineProperty(e, "beginning", {
                  enumerable: !0,
                  get: function () {
                    return this._beginning;
                  },
                  set: function (t) {
                    (this._beginning = t), (this._flagVertices = !0);
                  },
                }),
                Object.defineProperty(e, "ending", {
                  enumerable: !0,
                  get: function () {
                    return this._ending;
                  },
                  set: function (t) {
                    (this._ending = t), (this._flagVertices = !0);
                  },
                }),
                Object.defineProperty(e, "vertices", {
                  enumerable: !0,
                  get: function () {
                    return this._collection;
                  },
                  set: function (e) {
                    this._renderer.flagVertices;
                    var i = this._renderer.bindVertices,
                      r = this._renderer.unbindVertices;
                    this._collection &&
                      this._collection
                        .unbind(t.Events.insert, i)
                        .unbind(t.Events.remove, r),
                      e instanceof t.Utils.Collection
                        ? (this._collection = e)
                        : (this._collection = new t.Utils.Collection(e || [])),
                      this._collection
                        .bind(t.Events.insert, i)
                        .bind(t.Events.remove, r),
                      i(this._collection);
                  },
                }),
                Object.defineProperty(e, "clip", {
                  enumerable: !0,
                  get: function () {
                    return this._clip;
                  },
                  set: function (t) {
                    (this._clip = t), (this._flagClip = !0);
                  },
                });
            },
          }),
            a.extend(l.prototype, t.Shape.prototype, {
              _flagVertices: !0,
              _flagLength: !0,
              _flagFill: !0,
              _flagStroke: !0,
              _flagLinewidth: !0,
              _flagOpacity: !0,
              _flagVisible: !0,
              _flagClassName: !0,
              _flagCap: !0,
              _flagJoin: !0,
              _flagMiter: !0,
              _flagClip: !1,
              _length: 0,
              _fill: "#E8911F",
              _stroke: "transparent",
              _linewidth: 1,
              _opacity: 1,
              _className: "",
              _visible: !0,
              _cap: "round",
              _join: "round",
              _miter: 4,
              _closed: !0,
              _curved: !1,
              _automatic: !0,
              _beginning: 0,
              _ending: 1,
              _clip: !1,
              constructor: l,
              clone: function (t) {
                var e = new l();
                e.vertices = this.vertices;
                for (var i = 0; i < l.Properties.length; i++) {
                  var r = l.Properties[i];
                  e[r] = this[r];
                }
                return (
                  e.translation.copy(this.translation),
                  (e.rotation = this.rotation),
                  (e.scale = this.scale),
                  t && t.add(e),
                  e._update()
                );
              },
              toObject: function () {
                var e = {
                  vertices: a.map(this.vertices, function (t) {
                    return t.toObject();
                  }),
                };
                return (
                  a.each(
                    t.Shape.Properties,
                    function (t) {
                      e[t] = this[t];
                    },
                    this
                  ),
                  (e.translation = this.translation.toObject()),
                  (e.rotation = this.rotation),
                  (e.scale =
                    this.scale instanceof t.Vector
                      ? this.scale.toObject()
                      : this.scale),
                  e
                );
              },
              noFill: function () {
                return (this.fill = "transparent"), this;
              },
              noStroke: function () {
                return (this.stroke = "transparent"), this;
              },
              corner: function () {
                var t = this.getBoundingClientRect(!0);
                return (
                  (t.centroid = {
                    x: t.left + t.width / 2,
                    y: t.top + t.height / 2,
                  }),
                  a.each(this.vertices, function (e) {
                    e.addSelf(t.centroid);
                  }),
                  this
                );
              },
              center: function () {
                var t = this.getBoundingClientRect(!0);
                return (
                  (t.centroid = {
                    x: t.left + t.width / 2,
                    y: t.top + t.height / 2,
                  }),
                  a.each(this.vertices, function (e) {
                    e.subSelf(t.centroid);
                  }),
                  this
                );
              },
              remove: function () {
                return this.parent && this.parent.remove(this), this;
              },
              getBoundingClientRect: function (r) {
                var n,
                  o,
                  a,
                  l,
                  h,
                  c,
                  u,
                  d,
                  f = 1 / 0,
                  p = -1 / 0,
                  g = 1 / 0,
                  m = -1 / 0;
                if (
                  (this._update(!0),
                  (n = r ? this._matrix : s(this)),
                  (o = this.linewidth / 2),
                  (a = this._renderer.vertices.length) <= 0)
                )
                  return (
                    (v = n.multiply(0, 0, 1)),
                    {
                      top: v.y,
                      left: v.x,
                      right: v.x,
                      bottom: v.y,
                      width: 0,
                      height: 0,
                    }
                  );
                for (l = 1; l < a; l++)
                  if (
                    ((d = this._renderer.vertices[l]),
                    (h = this._renderer.vertices[l - 1]).controls && d.controls)
                  ) {
                    (c = h.relative
                      ? n.multiply(
                          h.controls.right.x + h.x,
                          h.controls.right.y + h.y,
                          1
                        )
                      : n.multiply(h.controls.right.x, h.controls.right.y, 1)),
                      (h = n.multiply(h.x, h.y, 1)),
                      (u = d.relative
                        ? n.multiply(
                            d.controls.left.x + d.x,
                            d.controls.left.y + d.y,
                            1
                          )
                        : n.multiply(d.controls.left.x, d.controls.left.y, 1)),
                      (d = n.multiply(d.x, d.y, 1));
                    var _ = t.Utils.getCurveBoundingBox(
                      h.x,
                      h.y,
                      c.x,
                      c.y,
                      u.x,
                      u.y,
                      d.x,
                      d.y
                    );
                    (g = e(_.min.y - o, g)),
                      (f = e(_.min.x - o, f)),
                      (p = i(_.max.x + o, p)),
                      (m = i(_.max.y + o, m));
                  } else
                    l <= 1 &&
                      ((h = n.multiply(h.x, h.y, 1)),
                      (g = e(h.y - o, g)),
                      (f = e(h.x - o, f)),
                      (p = i(h.x + o, p)),
                      (m = i(h.y + o, m))),
                      (d = n.multiply(d.x, d.y, 1)),
                      (g = e(d.y - o, g)),
                      (f = e(d.x - o, f)),
                      (p = i(d.x + o, p)),
                      (m = i(d.y + o, m));
                return {
                  top: g,
                  left: f,
                  right: p,
                  bottom: m,
                  width: p - f,
                  height: m - g,
                };
              },
              getPointAt: function (e, i) {
                for (
                  var r,
                    n,
                    s,
                    o,
                    l,
                    h,
                    c,
                    u,
                    d,
                    f,
                    p,
                    g,
                    m,
                    _,
                    v,
                    y = this.length * Math.min(Math.max(e, 0), 1),
                    x = this.vertices.length,
                    b = x - 1,
                    w = null,
                    S = null,
                    T = 0,
                    P = this._lengths.length,
                    C = 0;
                  T < P;
                  T++
                ) {
                  if (C + this._lengths[T] >= y) {
                    this._closed
                      ? ((r = t.Utils.mod(T, x)),
                        (n = t.Utils.mod(T - 1, x)),
                        0 === T && ((r = n), (n = T)))
                      : ((r = T), (n = Math.min(Math.max(T - 1, 0), b))),
                      (w = this.vertices[r]),
                      (S = this.vertices[n]),
                      (y -= C),
                      (e = 0 !== this._lengths[T] ? y / this._lengths[T] : 0);
                    break;
                  }
                  C += this._lengths[T];
                }
                if (a.isNull(w) || a.isNull(S)) return null;
                if (!w) return S;
                if (!S) return w;
                (v = S.controls && S.controls.right),
                  (_ = w.controls && w.controls.left),
                  (l = S.x),
                  (f = S.y),
                  (h = (v || S).x),
                  (p = (v || S).y),
                  (c = (_ || w).x),
                  (g = (_ || w).y),
                  (u = w.x),
                  (m = w.y),
                  v && S.relative && ((h += S.x), (p += S.y)),
                  _ && w.relative && ((c += w.x), (g += w.y)),
                  (o = t.Utils.getComponentOnCubicBezier(e, l, h, c, u)),
                  (d = t.Utils.getComponentOnCubicBezier(e, f, p, g, m));
                var k = t.Utils.lerp(l, h, e),
                  A = t.Utils.lerp(f, p, e),
                  M = t.Utils.lerp(h, c, e),
                  R = t.Utils.lerp(p, g, e),
                  O = t.Utils.lerp(c, u, e),
                  E = t.Utils.lerp(g, m, e),
                  F = t.Utils.lerp(k, M, e),
                  B = t.Utils.lerp(A, R, e),
                  I = t.Utils.lerp(M, O, e),
                  L = t.Utils.lerp(R, E, e);
                return a.isObject(i)
                  ? ((i.x = o),
                    (i.y = d),
                    a.isObject(i.controls) || t.Anchor.AppendCurveProperties(i),
                    (i.controls.left.x = F),
                    (i.controls.left.y = B),
                    (i.controls.right.x = I),
                    (i.controls.right.y = L),
                    (a.isBoolean(i.relative) && !i.relative) ||
                      ((i.controls.left.x -= o),
                      (i.controls.left.y -= d),
                      (i.controls.right.x -= o),
                      (i.controls.right.y -= d)),
                    (i.t = e),
                    i)
                  : (((s = new t.Anchor(
                      o,
                      d,
                      F - o,
                      B - d,
                      I - o,
                      L - d,
                      this._curved ? t.Commands.curve : t.Commands.line
                    )).t = e),
                    s);
              },
              plot: function () {
                if (this.curved)
                  return (
                    t.Utils.getCurveFromPoints(this._collection, this.closed),
                    this
                  );
                for (var e = 0; e < this._collection.length; e++)
                  this._collection[e].command =
                    0 === e ? t.Commands.move : t.Commands.line;
                return this;
              },
              subdivide: function (e) {
                this._update();
                var i = this.vertices.length - 1,
                  r = this.vertices[i],
                  n =
                    this._closed ||
                    this.vertices[i]._command === t.Commands.close,
                  s = [];
                return (
                  a.each(
                    this.vertices,
                    function (o, l) {
                      if (l <= 0 && !n) r = o;
                      else {
                        if (o.command === t.Commands.move)
                          return (
                            s.push(new t.Anchor(r.x, r.y)),
                            0 < l &&
                              (s[s.length - 1].command = t.Commands.line),
                            void (r = o)
                          );
                        var h = d(o, r, e);
                        (s = s.concat(h)),
                          a.each(h, function (e, i) {
                            i <= 0 && r.command === t.Commands.move
                              ? (e.command = t.Commands.move)
                              : (e.command = t.Commands.line);
                          }),
                          i <= l &&
                            (this._closed && this._automatic
                              ? ((h = d((r = o), r, e)),
                                (s = s.concat(h)),
                                a.each(h, function (e, i) {
                                  i <= 0 && r.command === t.Commands.move
                                    ? (e.command = t.Commands.move)
                                    : (e.command = t.Commands.line);
                                }))
                              : n && s.push(new t.Anchor(o.x, o.y)),
                            (s[s.length - 1].command = n
                              ? t.Commands.close
                              : t.Commands.line)),
                          (r = o);
                      }
                    },
                    this
                  ),
                  (this._automatic = !1),
                  (this._curved = !1),
                  (this.vertices = s),
                  this
                );
              },
              _updateLength: function (e, i) {
                i || this._update();
                var r = this.vertices.length - 1,
                  n = this.vertices[r],
                  s = 0;
                return (
                  a.isUndefined(this._lengths) && (this._lengths = []),
                  a.each(
                    this.vertices,
                    function (i, r) {
                      if (r <= 0 || i.command === t.Commands.move)
                        return (n = i), void (this._lengths[r] = 0);
                      (this._lengths[r] = u(i, n, e)),
                        (this._lengths[r] = t.Utils.toFixed(this._lengths[r])),
                        (s += this._lengths[r]),
                        (n = i);
                    },
                    this
                  ),
                  (this._length = s),
                  (this._flagLength = !1),
                  this
                );
              },
              _update: function () {
                if (this._flagVertices) {
                  this._automatic && this.plot(),
                    this._flagLength && this._updateLength(void 0, !0);
                  for (
                    var e,
                      i,
                      s,
                      o,
                      a,
                      l = this._collection.length,
                      u = this._closed,
                      d = Math.min(this._beginning, this._ending),
                      f = Math.max(this._beginning, this._ending),
                      p = c(this, d * this._length),
                      g = c(this, f * this._length),
                      m = r(p),
                      _ = n(g),
                      v = (this._renderer.vertices.length = 0);
                    v < l;
                    v++
                  )
                    this._renderer.collection.length <= v &&
                      this._renderer.collection.push(new t.Anchor()),
                      _ < v && !i
                        ? ((a = this._renderer.collection[v]).copy(
                            this._collection[v]
                          ),
                          this.getPointAt(f, a),
                          (a.command = this._renderer.collection[v].command),
                          this._renderer.vertices.push(a),
                          (i = a),
                          (s = this._collection[v - 1]) &&
                            s.controls &&
                            (a.controls.right.clear(),
                            this._renderer.collection[v - 1].controls.right
                              .clear()
                              .lerp(s.controls.right, a.t)))
                        : m <= v &&
                          v <= _ &&
                          ((a = this._renderer.collection[v].copy(
                            this._collection[v]
                          )),
                          this._renderer.vertices.push(a),
                          v === _ && h(this, f)
                            ? ((i = a),
                              !u && i.controls && i.controls.right.clear())
                            : v === m &&
                              h(this, d) &&
                              (((e = a).command = t.Commands.move),
                              !u && e.controls && e.controls.left.clear()));
                  0 < m &&
                    !e &&
                    ((v = m - 1),
                    (a = this._renderer.collection[v]).copy(
                      this._collection[v]
                    ),
                    this.getPointAt(d, a),
                    (a.command = t.Commands.move),
                    this._renderer.vertices.unshift(a),
                    (e = a),
                    (o = this._collection[v + 1]) &&
                      o.controls &&
                      (a.controls.left.clear(),
                      this._renderer.collection[v + 1].controls.left
                        .copy(o.controls.left)
                        .lerp(t.Vector.zero, a.t)));
                }
                return t.Shape.prototype._update.apply(this, arguments), this;
              },
              flagReset: function () {
                return (
                  (this._flagVertices =
                    this._flagFill =
                    this._flagStroke =
                    this._flagLinewidth =
                    this._flagOpacity =
                    this._flagVisible =
                    this._flagCap =
                    this._flagJoin =
                    this._flagMiter =
                    this._flagClassName =
                    this._flagClip =
                      !1),
                  t.Shape.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            l.MakeObservable(l.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Path,
            i = t.Utils,
            r = (t.Line = function (i, r, n, s) {
              e.call(this, [new t.Anchor(i, r), new t.Anchor(n, s)]),
                (this.vertices[0].command = t.Commands.move),
                (this.vertices[1].command = t.Commands.line),
                (this.automatic = !1);
            });
          i.extend(r.prototype, e.prototype),
            (r.prototype.constructor = r),
            e.MakeObservable(r.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Path,
            i = t.Utils,
            r = (t.Rectangle = function (i, r, n, s) {
              e.call(
                this,
                [
                  new t.Anchor(),
                  new t.Anchor(),
                  new t.Anchor(),
                  new t.Anchor(),
                ],
                !0,
                !1,
                !0
              ),
                (this.width = n),
                (this.height = s),
                (this.origin = new t.Vector()),
                this.translation.set(i, r),
                this._update();
            });
          i.extend(r, {
            Properties: ["width", "height"],
            MakeObservable: function (n) {
              e.MakeObservable(n),
                i.each(r.Properties, t.Utils.defineProperty, n),
                Object.defineProperty(n, "origin", {
                  enumerable: !0,
                  get: function () {
                    return this._origin;
                  },
                  set: function (e) {
                    this._origin &&
                      this._origin.unbind(
                        t.Events.change,
                        this._renderer.flagVertices
                      ),
                      (this._origin = e),
                      this._origin.bind(
                        t.Events.change,
                        this._renderer.flagVertices
                      ),
                      this._renderer.flagVertices();
                  },
                });
            },
          }),
            i.extend(r.prototype, e.prototype, {
              _width: 0,
              _height: 0,
              _flagWidth: 0,
              _flagHeight: 0,
              _origin: null,
              constructor: r,
              _update: function () {
                if (this._flagWidth || this._flagHeight) {
                  var i = this._width / 2,
                    r = this._height / 2;
                  (this.vertices[0].set(-i, -r).add(this._origin).command =
                    t.Commands.move),
                    (this.vertices[1].set(i, -r).add(this._origin).command =
                      t.Commands.line),
                    (this.vertices[2].set(i, r).add(this._origin).command =
                      t.Commands.line),
                    (this.vertices[3].set(-i, r).add(this._origin).command =
                      t.Commands.line),
                    this.vertices[4] &&
                      (this.vertices[4].set(-i, -r).add(this._origin).command =
                        t.Commands.line);
                }
                return e.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  (this._flagWidth = this._flagHeight = !1),
                  e.prototype.flagReset.call(this),
                  this
                );
              },
              clone: function (e) {
                var n = new r(0, 0, this.width, this.height);
                return (
                  n.translation.copy(this.translation),
                  (n.rotation = this.rotation),
                  (n.scale = this.scale),
                  i.each(
                    t.Path.Properties,
                    function (t) {
                      n[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(n),
                  n
                );
              },
            }),
            r.MakeObservable(r.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Path,
            i = 2 * Math.PI,
            r = Math.PI / 2,
            n = Math.cos,
            s = Math.sin,
            o = t.Utils,
            a = (4 / 3) * Math.tan(Math.PI / 8),
            l = (t.Ellipse = function (i, r, n, s, a) {
              o.isNumber(s) || (s = n);
              var l = a || 5,
                h = o.map(
                  o.range(l),
                  function (e) {
                    return new t.Anchor();
                  },
                  this
                );
              e.call(this, h, !0, !0, !0),
                (this.width = 2 * n),
                (this.height = 2 * s),
                this._update(),
                this.translation.set(i, r);
            });
          o.extend(l, {
            Properties: ["width", "height"],
            MakeObservable: function (i) {
              e.MakeObservable(i),
                o.each(l.Properties, t.Utils.defineProperty, i);
            },
          }),
            o.extend(l.prototype, e.prototype, {
              _width: 0,
              _height: 0,
              _flagWidth: !1,
              _flagHeight: !1,
              constructor: l,
              _update: function () {
                if (this._flagWidth || this._flagHeight)
                  for (
                    var o = 0, l = this.vertices.length, h = l - 1;
                    o < l;
                    o++
                  ) {
                    var c = (o / h) * i,
                      u = this._width / 2,
                      d = this._height / 2,
                      f = (n(c), s(c), u * n(c)),
                      p = d * s(c),
                      g = 0 === o ? 0 : u * a * n(c - r),
                      m = 0 === o ? 0 : d * a * s(c - r),
                      _ =
                        ((u = o === h ? 0 : u * a * n(c + r)),
                        (d = o === h ? 0 : d * a * s(c + r)),
                        this.vertices[o]);
                    (_.command = 0 === o ? t.Commands.move : t.Commands.curve),
                      _.set(f, p),
                      _.controls.left.set(g, m),
                      _.controls.right.set(u, d);
                  }
                return e.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  (this._flagWidth = this._flagHeight = !1),
                  e.prototype.flagReset.call(this),
                  this
                );
              },
              clone: function (e) {
                var i = this.width / 2,
                  r = this.height / 2,
                  n = this.vertices.length,
                  s = new l(0, 0, i, r, n);
                return (
                  s.translation.copy(this.translation),
                  (s.rotation = this.rotation),
                  (s.scale = this.scale),
                  o.each(
                    t.Path.Properties,
                    function (t) {
                      s[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(s),
                  s
                );
              },
            }),
            l.MakeObservable(l.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Path,
            i = 2 * Math.PI,
            r = Math.PI / 2,
            n = Math.cos,
            s = Math.sin,
            o = t.Utils,
            a = (4 / 3) * Math.tan(Math.PI / 8),
            l = (t.Circle = function (i, r, n, s) {
              var a = s || 5,
                l = o.map(
                  o.range(a),
                  function (e) {
                    return new t.Anchor();
                  },
                  this
                );
              e.call(this, l, !0, !0, !0),
                (this.radius = n),
                this._update(),
                this.translation.set(i, r);
            });
          o.extend(l, {
            Properties: ["radius"],
            MakeObservable: function (i) {
              e.MakeObservable(i),
                o.each(l.Properties, t.Utils.defineProperty, i);
            },
          }),
            o.extend(l.prototype, e.prototype, {
              _radius: 0,
              _flagRadius: !1,
              constructor: l,
              _update: function () {
                if (this._flagRadius)
                  for (
                    var o = 0, l = this.vertices.length, h = l - 1;
                    o < l;
                    o++
                  ) {
                    var c = (o / h) * i,
                      u = this._radius,
                      d = (n(c), s(c), u * a),
                      f = u * n(c),
                      p = u * s(c),
                      g = 0 === o ? 0 : d * n(c - r),
                      m = 0 === o ? 0 : d * s(c - r),
                      _ = o === h ? 0 : d * n(c + r),
                      v = o === h ? 0 : d * s(c + r),
                      y = this.vertices[o];
                    (y.command = 0 === o ? t.Commands.move : t.Commands.curve),
                      y.set(f, p),
                      y.controls.left.set(g, m),
                      y.controls.right.set(_, v);
                  }
                return e.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  (this._flagRadius = !1),
                  e.prototype.flagReset.call(this),
                  this
                );
              },
              clone: function (e) {
                var i = new l(0, 0, this.radius, this.vertices.length);
                return (
                  i.translation.copy(this.translation),
                  (i.rotation = this.rotation),
                  (i.scale = this.scale),
                  o.each(
                    t.Path.Properties,
                    function (t) {
                      i[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(i),
                  i
                );
              },
            }),
            l.MakeObservable(l.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Path,
            i = 2 * Math.PI,
            r = Math.cos,
            n = Math.sin,
            s = t.Utils,
            o = (t.Polygon = function (t, i, r, n) {
              (n = Math.max(n || 0, 3)),
                e.call(this),
                (this.closed = !0),
                (this.automatic = !1),
                (this.width = 2 * r),
                (this.height = 2 * r),
                (this.sides = n),
                this._update(),
                this.translation.set(t, i);
            });
          s.extend(o, {
            Properties: ["width", "height", "sides"],
            MakeObservable: function (i) {
              e.MakeObservable(i),
                s.each(o.Properties, t.Utils.defineProperty, i);
            },
          }),
            s.extend(o.prototype, e.prototype, {
              _width: 0,
              _height: 0,
              _sides: 0,
              _flagWidth: !1,
              _flagHeight: !1,
              _flagSides: !1,
              constructor: o,
              _update: function () {
                if (this._flagWidth || this._flagHeight || this._flagSides) {
                  var s = this._sides,
                    o = s + 1,
                    a = this.vertices.length;
                  s < a && (this.vertices.splice(s - 1, a - s), (a = s));
                  for (var l = 0; l < o; l++) {
                    var h = i * ((l + 0.5) / s) + Math.PI / 2,
                      c = (this._width * r(h)) / 2,
                      u = (this._height * n(h)) / 2;
                    a <= l
                      ? this.vertices.push(new t.Anchor(c, u))
                      : this.vertices[l].set(c, u),
                      (this.vertices[l].command =
                        0 === l ? t.Commands.move : t.Commands.line);
                  }
                }
                return e.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  (this._flagWidth = this._flagHeight = this._flagSides = !1),
                  e.prototype.flagReset.call(this),
                  this
                );
              },
              clone: function (e) {
                var i = new o(0, 0, this.radius, this.sides);
                return (
                  i.translation.copy(this.translation),
                  (i.rotation = this.rotation),
                  (i.scale = this.scale),
                  s.each(
                    t.Path.Properties,
                    function (t) {
                      i[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(i),
                  i
                );
              },
            }),
            o.MakeObservable(o.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Path,
            i = (Math.PI, 2 * Math.PI),
            r = Math.PI / 2,
            n = (Math.cos, Math.sin, Math.abs, t.Utils),
            s = (t.ArcSegment = function (i, r, s, o, a, l, h) {
              var c = h || 3 * t.Resolution,
                u = n.map(n.range(c), function () {
                  return new t.Anchor();
                });
              e.call(this, u, !0, !1, !0),
                (this.innerRadius = s),
                (this.outerRadius = o),
                (this.startAngle = a),
                (this.endAngle = l),
                this._update(),
                this.translation.set(i, r);
            });
          function o(t, e) {
            for (; t < 0; ) t += e;
            return t % e;
          }
          n.extend(s, {
            Properties: [
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
            ],
            MakeObservable: function (i) {
              e.MakeObservable(i),
                n.each(s.Properties, t.Utils.defineProperty, i);
            },
          }),
            n.extend(s.prototype, e.prototype, {
              _flagStartAngle: !1,
              _flagEndAngle: !1,
              _flagInnerRadius: !1,
              _flagOuterRadius: !1,
              _startAngle: 0,
              _endAngle: i,
              _innerRadius: 0,
              _outerRadius: 0,
              constructor: s,
              _update: function () {
                if (
                  this._flagStartAngle ||
                  this._flagEndAngle ||
                  this._flagInnerRadius ||
                  this._flagOuterRadius
                ) {
                  var n,
                    s = this._startAngle,
                    a = this._endAngle,
                    l = this._innerRadius,
                    h = this._outerRadius,
                    c = o(s, i) === o(a, i),
                    u = 0 < l,
                    d = this.vertices,
                    f = u ? d.length / 2 : d.length,
                    p = 0;
                  c ? f-- : u || (f -= 2);
                  for (var g = 0, m = f - 1; g < f; g++) {
                    var _ = g / m,
                      v = d[p],
                      y = _ * (a - s) + s,
                      x = (a - s) / f,
                      b = h * Math.cos(y),
                      w = h * Math.sin(y);
                    switch (g) {
                      case 0:
                        n = t.Commands.move;
                        break;
                      default:
                        n = t.Commands.curve;
                    }
                    if (
                      ((v.command = n),
                      (v.x = b),
                      (v.y = w),
                      v.controls.left.clear(),
                      v.controls.right.clear(),
                      v.command === t.Commands.curve)
                    ) {
                      var S = (h * x) / Math.PI;
                      (v.controls.left.x = S * Math.cos(y - r)),
                        (v.controls.left.y = S * Math.sin(y - r)),
                        (v.controls.right.x = S * Math.cos(y + r)),
                        (v.controls.right.y = S * Math.sin(y + r)),
                        1 === g && v.controls.left.multiplyScalar(2),
                        g === m && v.controls.right.multiplyScalar(2);
                    }
                    p++;
                  }
                  if (u) {
                    for (
                      c
                        ? ((d[p].command = t.Commands.close), p++)
                        : (m = --f - 1),
                        g = 0;
                      g < f;
                      g++
                    )
                      (_ = g / m),
                        (v = d[p]),
                        (y = (1 - _) * (a - s) + s),
                        (x = (a - s) / f),
                        (b = l * Math.cos(y)),
                        (w = l * Math.sin(y)),
                        (n = t.Commands.curve),
                        g <= 0 && (n = c ? t.Commands.move : t.Commands.line),
                        (v.command = n),
                        (v.x = b),
                        (v.y = w),
                        v.controls.left.clear(),
                        v.controls.right.clear(),
                        v.command === t.Commands.curve &&
                          ((S = (l * x) / Math.PI),
                          (v.controls.left.x = S * Math.cos(y + r)),
                          (v.controls.left.y = S * Math.sin(y + r)),
                          (v.controls.right.x = S * Math.cos(y - r)),
                          (v.controls.right.y = S * Math.sin(y - r)),
                          1 === g && v.controls.left.multiplyScalar(2),
                          g === m && v.controls.right.multiplyScalar(2)),
                        p++;
                    d[p].copy(d[0]), (d[p].command = t.Commands.line);
                  } else
                    c ||
                      ((d[p].command = t.Commands.line),
                      (d[p].x = 0),
                      (d[p].y = 0),
                      d[++p].copy(d[0]),
                      (d[p].command = t.Commands.line));
                }
                return e.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  e.prototype.flagReset.call(this),
                  (this._flagStartAngle =
                    this._flagEndAngle =
                    this._flagInnerRadius =
                    this._flagOuterRadius =
                      !1),
                  this
                );
              },
              clone: function (e) {
                var i = this.innerRadius,
                  r = this.outerradius,
                  o = this.startAngle,
                  a = this.endAngle,
                  l = this.vertices.length,
                  h = new s(0, 0, i, r, o, a, l);
                return (
                  h.translation.copy(this.translation),
                  (h.rotation = this.rotation),
                  (h.scale = this.scale),
                  n.each(
                    t.Path.Properties,
                    function (t) {
                      h[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(h),
                  h
                );
              },
            }),
            s.MakeObservable(s.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (h = (void 0 !== t ? t : self || window).Two),
        (c = h.Path),
        (u = 2 * Math.PI),
        (d = Math.cos),
        (f = Math.sin),
        (p = h.Utils),
        (g = h.Star =
          function (t, e, i, r, n) {
            arguments.length <= 3 && (i = (r = i) / 2),
              (!p.isNumber(n) || n <= 0) && (n = 5),
              c.call(this),
              (this.closed = !0),
              (this.automatic = !1),
              (this.innerRadius = i),
              (this.outerRadius = r),
              (this.sides = n),
              this._update(),
              this.translation.set(t, e);
          }),
        p.extend(g, {
          Properties: ["innerRadius", "outerRadius", "sides"],
          MakeObservable: function (t) {
            c.MakeObservable(t),
              p.each(g.Properties, h.Utils.defineProperty, t);
          },
        }),
        p.extend(g.prototype, c.prototype, {
          _innerRadius: 0,
          _outerRadius: 0,
          _sides: 0,
          _flagInnerRadius: !1,
          _flagOuterRadius: !1,
          _flagSides: !1,
          constructor: g,
          _update: function () {
            if (
              this._flagInnerRadius ||
              this._flagOuterRadius ||
              this._flagSides
            ) {
              var t = 2 * this._sides,
                e = t + 1,
                i = this.vertices.length;
              t < i && (this.vertices.splice(t - 1, i - t), (i = t));
              for (var r = 0; r < e; r++) {
                var n = u * ((r + 0.5) / t),
                  s = (r % 2 ? this._outerRadius : this._innerRadius) / 2,
                  o = s * d(n),
                  a = s * f(n);
                i <= r
                  ? this.vertices.push(new h.Anchor(o, a))
                  : this.vertices[r].set(o, a),
                  (this.vertices[r].command =
                    0 === r ? h.Commands.move : h.Commands.line);
              }
            }
            return c.prototype._update.call(this), this;
          },
          flagReset: function () {
            return (
              (this._flagInnerRadius =
                this._flagOuterRadius =
                this._flagSides =
                  !1),
              c.prototype.flagReset.call(this),
              this
            );
          },
          clone: function (t) {
            var e = this.innerRadius,
              i = this.outerRadius,
              r = this.sides,
              n = new g(0, 0, e, i, r);
            return (
              n.translation.copy(this.translation),
              (n.rotation = this.rotation),
              (n.scale = this.scale),
              p.each(
                h.Path.Properties,
                function (t) {
                  n[t] = this[t];
                },
                this
              ),
              t && t.add(n),
              n
            );
          },
        }),
        g.MakeObservable(g.prototype),
        (function (t) {
          var e = t.Path,
            i = t.Utils,
            r = (t.RoundedRectangle = function (n, s, o, a, l) {
              i.isUndefined(l) && (l = Math.floor(Math.min(o, a) / 12));
              var h = i.map(i.range(10), function (e) {
                return new t.Anchor(
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0 === e ? t.Commands.move : t.Commands.curve
                );
              });
              e.call(this, h),
                (this.closed = !0),
                (this.automatic = !1),
                (this._renderer.flagRadius = i.bind(r.FlagRadius, this)),
                (this.width = o),
                (this.height = a),
                (this.radius = l),
                this._update(),
                this.translation.set(n, s);
            });
          i.extend(r, {
            Properties: ["width", "height"],
            FlagRadius: function () {
              this._flagRadius = !0;
            },
            MakeObservable: function (n) {
              e.MakeObservable(n),
                i.each(r.Properties, t.Utils.defineProperty, n),
                Object.defineProperty(n, "radius", {
                  enumerable: !0,
                  get: function () {
                    return this._radius;
                  },
                  set: function (e) {
                    this._radius instanceof t.Vector &&
                      this._radius.unbind(
                        t.Events.change,
                        this._renderer.flagRadius
                      ),
                      (this._radius = e),
                      this._radius instanceof t.Vector &&
                        this._radius.bind(
                          t.Events.change,
                          this._renderer.flagRadius
                        ),
                      (this._flagRadius = !0);
                  },
                });
            },
          }),
            i.extend(r.prototype, e.prototype, {
              _width: 0,
              _height: 0,
              _radius: 0,
              _flagWidth: !1,
              _flagHeight: !1,
              _flagRadius: !1,
              constructor: r,
              _update: function () {
                if (this._flagWidth || this._flagHeight || this._flagRadius) {
                  var i,
                    r,
                    n,
                    s = this._width,
                    o = this._height;
                  r =
                    this._radius instanceof t.Vector
                      ? ((i = this._radius.x), this._radius.y)
                      : ((i = this._radius), this._radius);
                  var a = s / 2,
                    l = o / 2;
                  ((n = this.vertices[0]).x = -(a - i)),
                    (n.y = -l),
                    ((n = this.vertices[1]).x = a - i),
                    (n.y = -l),
                    n.controls.left.clear(),
                    (n.controls.right.x = i),
                    (n.controls.right.y = 0),
                    ((n = this.vertices[2]).x = a),
                    (n.y = -(l - r)),
                    n.controls.right.clear(),
                    n.controls.left.clear(),
                    ((n = this.vertices[3]).x = a),
                    (n.y = l - r),
                    n.controls.left.clear(),
                    (n.controls.right.x = 0),
                    (n.controls.right.y = r),
                    ((n = this.vertices[4]).x = a - i),
                    (n.y = l),
                    n.controls.right.clear(),
                    n.controls.left.clear(),
                    ((n = this.vertices[5]).x = -(a - i)),
                    (n.y = l),
                    n.controls.left.clear(),
                    (n.controls.right.x = -i),
                    (n.controls.right.y = 0),
                    ((n = this.vertices[6]).x = -a),
                    (n.y = l - r),
                    n.controls.left.clear(),
                    n.controls.right.clear(),
                    ((n = this.vertices[7]).x = -a),
                    (n.y = -(l - r)),
                    n.controls.left.clear(),
                    (n.controls.right.x = 0),
                    (n.controls.right.y = -r),
                    ((n = this.vertices[8]).x = -(a - i)),
                    (n.y = -l),
                    n.controls.left.clear(),
                    n.controls.right.clear(),
                    (n = this.vertices[9]).copy(this.vertices[8]);
                }
                return e.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  (this._flagWidth = this._flagHeight = this._flagRadius = !1),
                  e.prototype.flagReset.call(this),
                  this
                );
              },
              clone: function (e) {
                var n = this.width,
                  s = this.height,
                  o = this.radius,
                  a = new r(0, 0, n, s, o);
                return (
                  a.translation.copy(this.translation),
                  (a.rotation = this.rotation),
                  (a.scale = this.scale),
                  i.each(
                    t.Path.Properties,
                    function (t) {
                      a[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(a),
                  a
                );
              },
            }),
            r.MakeObservable(r.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.root,
            i = t.Utils.getComputedMatrix,
            r = t.Utils,
            n =
              ((e.document
                ? e.document.createElement("canvas")
                : (console.warn(
                    "Two.js: Unable to create canvas for Two.Text measurements."
                  ),
                  { getContext: r.identity })
              ).getContext("2d"),
              (t.Text = function (e, i, n, s) {
                if (
                  (t.Shape.call(this),
                  (this._renderer.type = "text"),
                  (this._renderer.flagFill = r.bind(t.Text.FlagFill, this)),
                  (this._renderer.flagStroke = r.bind(t.Text.FlagStroke, this)),
                  (this.value = e),
                  r.isNumber(i) && (this.translation.x = i),
                  r.isNumber(n) && (this.translation.y = n),
                  (this.dashes = []),
                  !r.isObject(s))
                )
                  return this;
                r.each(
                  t.Text.Properties,
                  function (t) {
                    t in s && (this[t] = s[t]);
                  },
                  this
                );
              }));
          r.extend(t.Text, {
            Ratio: 0.6,
            Properties: [
              "value",
              "family",
              "size",
              "leading",
              "alignment",
              "linewidth",
              "style",
              "className",
              "weight",
              "decoration",
              "baseline",
              "opacity",
              "visible",
              "fill",
              "stroke",
            ],
            FlagFill: function () {
              this._flagFill = !0;
            },
            FlagStroke: function () {
              this._flagStroke = !0;
            },
            MakeObservable: function (e) {
              t.Shape.MakeObservable(e),
                r.each(
                  t.Text.Properties.slice(0, 13),
                  t.Utils.defineProperty,
                  e
                ),
                Object.defineProperty(e, "fill", {
                  enumerable: !0,
                  get: function () {
                    return this._fill;
                  },
                  set: function (e) {
                    (this._fill instanceof t.Gradient ||
                      this._fill instanceof t.LinearGradient ||
                      this._fill instanceof t.RadialGradient ||
                      this._fill instanceof t.Texture) &&
                      this._fill.unbind(
                        t.Events.change,
                        this._renderer.flagFill
                      ),
                      (this._fill = e),
                      (this._flagFill = !0),
                      (this._fill instanceof t.Gradient ||
                        this._fill instanceof t.LinearGradient ||
                        this._fill instanceof t.RadialGradient ||
                        this._fill instanceof t.Texture) &&
                        this._fill.bind(
                          t.Events.change,
                          this._renderer.flagFill
                        );
                  },
                }),
                Object.defineProperty(e, "stroke", {
                  enumerable: !0,
                  get: function () {
                    return this._stroke;
                  },
                  set: function (e) {
                    (this._stroke instanceof t.Gradient ||
                      this._stroke instanceof t.LinearGradient ||
                      this._stroke instanceof t.RadialGradient ||
                      this._stroke instanceof t.Texture) &&
                      this._stroke.unbind(
                        t.Events.change,
                        this._renderer.flagStroke
                      ),
                      (this._stroke = e),
                      (this._flagStroke = !0),
                      (this._stroke instanceof t.Gradient ||
                        this._stroke instanceof t.LinearGradient ||
                        this._stroke instanceof t.RadialGradient ||
                        this._stroke instanceof t.Texture) &&
                        this._stroke.bind(
                          t.Events.change,
                          this._renderer.flagStroke
                        );
                  },
                }),
                Object.defineProperty(e, "clip", {
                  enumerable: !0,
                  get: function () {
                    return this._clip;
                  },
                  set: function (t) {
                    (this._clip = t), (this._flagClip = !0);
                  },
                });
            },
          }),
            r.extend(t.Text.prototype, t.Shape.prototype, {
              _flagValue: !0,
              _flagFamily: !0,
              _flagSize: !0,
              _flagLeading: !0,
              _flagAlignment: !0,
              _flagBaseline: !0,
              _flagStyle: !0,
              _flagWeight: !0,
              _flagDecoration: !0,
              _flagFill: !0,
              _flagStroke: !0,
              _flagLinewidth: !0,
              _flagOpacity: !0,
              _flagClassName: !0,
              _flagVisible: !0,
              _flagClip: !1,
              _value: "",
              _family: "sans-serif",
              _size: 13,
              _leading: 17,
              _alignment: "center",
              _baseline: "middle",
              _style: "normal",
              _weight: 500,
              _decoration: "none",
              _fill: "white",
              _stroke: "transparent",
              _linewidth: 1,
              _opacity: 1,
              _className: "",
              _visible: !0,
              _clip: !1,
              constructor: t.Text,
              remove: function () {
                return this.parent && this.parent.remove(this), this;
              },
              clone: function (e) {
                var i = new t.Text(this.value);
                return (
                  i.translation.copy(this.translation),
                  (i.rotation = this.rotation),
                  (i.scale = this.scale),
                  r.each(
                    t.Text.Properties,
                    function (t) {
                      i[t] = this[t];
                    },
                    this
                  ),
                  e && e.add(i),
                  i._update()
                );
              },
              toObject: function () {
                var e = {
                  translation: this.translation.toObject(),
                  rotation: this.rotation,
                  scale: this.scale,
                };
                return (
                  r.each(
                    t.Text.Properties,
                    function (t) {
                      e[t] = this[t];
                    },
                    this
                  ),
                  e
                );
              },
              noStroke: function () {
                return (this.stroke = "transparent"), this;
              },
              noFill: function () {
                return (this.fill = "transparent"), this;
              },
              getBoundingClientRect: function (t) {
                var e, r, s, o, a, l;
                this._update(!0), (e = t ? this._matrix : i(this));
                var h = this.leading,
                  c = this.value.length * this.size * n.Ratio;
                switch (this.alignment) {
                  case "left":
                    (s = 0), (o = c);
                    break;
                  case "right":
                    (s = -c), (o = 0);
                    break;
                  default:
                    (s = -c / 2), (o = c / 2);
                }
                switch (this.baseline) {
                  case "top":
                    (a = 0), (l = h);
                    break;
                  case "bottom":
                    (a = -h), (l = 0);
                    break;
                  default:
                    (a = -h / 2), (l = h / 2);
                }
                return {
                  top: (a = (r = e.multiply(s, a, 1)).y),
                  left: (s = r.x),
                  right: (o = (r = e.multiply(o, l, 1)).x),
                  bottom: (l = r.y),
                  width: o - s,
                  height: l - a,
                };
              },
              flagReset: function () {
                return (
                  (this._flagValue =
                    this._flagFamily =
                    this._flagSize =
                    this._flagLeading =
                    this._flagAlignment =
                    this._flagFill =
                    this._flagStroke =
                    this._flagLinewidth =
                    this._flagOpacity =
                    this._flagVisible =
                    this._flagClip =
                    this._flagDecoration =
                    this._flagClassName =
                    this._flagBaseline =
                      !1),
                  t.Shape.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            t.Text.MakeObservable(t.Text.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils,
            i = (t.Stop = function (t, r, n) {
              (this._renderer = {}),
                (this._renderer.type = "stop"),
                (this.offset = e.isNumber(t) ? t : i.Index <= 0 ? 0 : 1),
                (this.opacity = e.isNumber(n) ? n : 1),
                (this.color = e.isString(r)
                  ? r
                  : i.Index <= 0
                  ? "#E8911F"
                  : "white"),
                (i.Index = (i.Index + 1) % 2);
            });
          e.extend(i, {
            Index: 0,
            Properties: ["offset", "opacity", "color"],
            MakeObservable: function (t) {
              e.each(
                i.Properties,
                function (t) {
                  var e = "_" + t,
                    i = "_flag" + t.charAt(0).toUpperCase() + t.slice(1);
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    get: function () {
                      return this[e];
                    },
                    set: function (t) {
                      (this[e] = t),
                        (this[i] = !0),
                        this.parent && (this.parent._flagStops = !0);
                    },
                  });
                },
                t
              );
            },
          }),
            e.extend(i.prototype, t.Utils.Events, {
              constructor: i,
              clone: function () {
                var t = new i();
                return (
                  e.each(
                    i.Properties,
                    function (e) {
                      t[e] = this[e];
                    },
                    this
                  ),
                  t
                );
              },
              toObject: function () {
                var t = {};
                return (
                  e.each(
                    i.Properties,
                    function (e) {
                      t[e] = this[e];
                    },
                    this
                  ),
                  t
                );
              },
              flagReset: function () {
                return (
                  (this._flagOffset = this._flagColor = this._flagOpacity = !1),
                  this
                );
              },
            }),
            i.MakeObservable(i.prototype),
            (i.prototype.constructor = i);
          var r = (t.Gradient = function (i) {
            (this._renderer = {}),
              (this._renderer.type = "gradient"),
              (this.id = t.Identifier + t.uniqueId()),
              (this.classList = []),
              (this._renderer.flagStops = e.bind(r.FlagStops, this)),
              (this._renderer.bindStops = e.bind(r.BindStops, this)),
              (this._renderer.unbindStops = e.bind(r.UnbindStops, this)),
              (this.spread = "pad"),
              (this.stops = i);
          });
          e.extend(r, {
            Stop: i,
            Properties: ["spread"],
            MakeObservable: function (i) {
              e.each(r.Properties, t.Utils.defineProperty, i),
                Object.defineProperty(i, "stops", {
                  enumerable: !0,
                  get: function () {
                    return this._stops;
                  },
                  set: function (e) {
                    this._renderer.flagStops;
                    var i = this._renderer.bindStops,
                      r = this._renderer.unbindStops;
                    this._stops &&
                      this._stops
                        .unbind(t.Events.insert, i)
                        .unbind(t.Events.remove, r),
                      (this._stops = new t.Utils.Collection(
                        (e || []).slice(0)
                      )),
                      this._stops
                        .bind(t.Events.insert, i)
                        .bind(t.Events.remove, r),
                      i(this._stops);
                  },
                });
            },
            FlagStops: function () {
              this._flagStops = !0;
            },
            BindStops: function (e) {
              for (var i = e.length; i--; )
                e[i].bind(t.Events.change, this._renderer.flagStops),
                  (e[i].parent = this);
              this._renderer.flagStops();
            },
            UnbindStops: function (e) {
              for (var i = e.length; i--; )
                e[i].unbind(t.Events.change, this._renderer.flagStops),
                  delete e[i].parent;
              this._renderer.flagStops();
            },
          }),
            e.extend(r.prototype, t.Utils.Events, {
              _flagStops: !1,
              _flagSpread: !1,
              clone: function (i) {
                var n = e.map(this.stops, function (t) {
                    return t.clone();
                  }),
                  s = new r(n);
                return (
                  e.each(
                    t.Gradient.Properties,
                    function (t) {
                      s[t] = this[t];
                    },
                    this
                  ),
                  i && i.add(s),
                  s
                );
              },
              toObject: function () {
                var t = {
                  stops: e.map(this.stops, function (t) {
                    return t.toObject();
                  }),
                };
                return (
                  e.each(
                    r.Properties,
                    function (e) {
                      t[e] = this[e];
                    },
                    this
                  ),
                  t
                );
              },
              _update: function () {
                return (
                  (this._flagSpread || this._flagStops) &&
                    this.trigger(t.Events.change),
                  this
                );
              },
              flagReset: function () {
                return (this._flagSpread = this._flagStops = !1), this;
              },
            }),
            r.MakeObservable(r.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils,
            i = (t.LinearGradient = function (r, n, s, o, a) {
              t.Gradient.call(this, a),
                (this._renderer.type = "linear-gradient");
              var l = e.bind(i.FlagEndPoints, this);
              (this.left = new t.Vector().bind(t.Events.change, l)),
                (this.right = new t.Vector().bind(t.Events.change, l)),
                e.isNumber(r) && (this.left.x = r),
                e.isNumber(n) && (this.left.y = n),
                e.isNumber(s) && (this.right.x = s),
                e.isNumber(o) && (this.right.y = o);
            });
          e.extend(i, {
            Stop: t.Gradient.Stop,
            MakeObservable: function (e) {
              t.Gradient.MakeObservable(e);
            },
            FlagEndPoints: function () {
              this._flagEndPoints = !0;
            },
          }),
            e.extend(i.prototype, t.Gradient.prototype, {
              _flagEndPoints: !1,
              constructor: i,
              clone: function (r) {
                var n = e.map(this.stops, function (t) {
                    return t.clone();
                  }),
                  s = new i(
                    this.left._x,
                    this.left._y,
                    this.right._x,
                    this.right._y,
                    n
                  );
                return (
                  e.each(
                    t.Gradient.Properties,
                    function (t) {
                      s[t] = this[t];
                    },
                    this
                  ),
                  r && r.add(s),
                  s
                );
              },
              toObject: function () {
                var e = t.Gradient.prototype.toObject.call(this);
                return (
                  (e.left = this.left.toObject()),
                  (e.right = this.right.toObject()),
                  e
                );
              },
              _update: function () {
                return (
                  (this._flagEndPoints ||
                    this._flagSpread ||
                    this._flagStops) &&
                    this.trigger(t.Events.change),
                  this
                );
              },
              flagReset: function () {
                return (
                  (this._flagEndPoints = !1),
                  t.Gradient.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            i.MakeObservable(i.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils,
            i = (t.RadialGradient = function (i, r, n, s, o, a) {
              t.Gradient.call(this, s),
                (this._renderer.type = "radial-gradient"),
                (this.center = new t.Vector().bind(
                  t.Events.change,
                  e.bind(function () {
                    this._flagCenter = !0;
                  }, this)
                )),
                (this.radius = e.isNumber(n) ? n : 20),
                (this.focal = new t.Vector().bind(
                  t.Events.change,
                  e.bind(function () {
                    this._flagFocal = !0;
                  }, this)
                )),
                e.isNumber(i) && (this.center.x = i),
                e.isNumber(r) && (this.center.y = r),
                this.focal.copy(this.center),
                e.isNumber(o) && (this.focal.x = o),
                e.isNumber(a) && (this.focal.y = a);
            });
          e.extend(i, {
            Stop: t.Gradient.Stop,
            Properties: ["radius"],
            MakeObservable: function (r) {
              t.Gradient.MakeObservable(r),
                e.each(i.Properties, t.Utils.defineProperty, r);
            },
          }),
            e.extend(i.prototype, t.Gradient.prototype, {
              _flagRadius: !1,
              _flagCenter: !1,
              _flagFocal: !1,
              constructor: i,
              clone: function (r) {
                var n = e.map(this.stops, function (t) {
                    return t.clone();
                  }),
                  s = new i(
                    this.center._x,
                    this.center._y,
                    this._radius,
                    n,
                    this.focal._x,
                    this.focal._y
                  );
                return (
                  e.each(
                    t.Gradient.Properties.concat(i.Properties),
                    function (t) {
                      s[t] = this[t];
                    },
                    this
                  ),
                  r && r.add(s),
                  s
                );
              },
              toObject: function () {
                var r = t.Gradient.prototype.toObject.call(this);
                return (
                  e.each(
                    i.Properties,
                    function (t) {
                      r[t] = this[t];
                    },
                    this
                  ),
                  (r.center = this.center.toObject()),
                  (r.focal = this.focal.toObject()),
                  r
                );
              },
              _update: function () {
                return (
                  (this._flagRadius ||
                    this._flatCenter ||
                    this._flagFocal ||
                    this._flagSpread ||
                    this._flagStops) &&
                    this.trigger(t.Events.change),
                  this
                );
              },
              flagReset: function () {
                return (
                  (this._flagRadius = this._flagCenter = this._flagFocal = !1),
                  t.Gradient.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            i.MakeObservable(i.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e,
            i = t.root,
            r = t.Utils,
            n = {
              video: /\.(mp4|webm|ogg)$/i,
              image: /\.(jpe?g|png|gif|tiff)$/i,
              effect: /texture|gradient/i,
            };
          i.document && (e = document.createElement("a"));
          var s = (t.Texture = function (e, i) {
            if (
              ((this._renderer = {}),
              (this._renderer.type = "texture"),
              (this._renderer.flagOffset = r.bind(s.FlagOffset, this)),
              (this._renderer.flagScale = r.bind(s.FlagScale, this)),
              (this.id = t.Identifier + t.uniqueId()),
              (this.classList = []),
              (this.offset = new t.Vector()),
              r.isFunction(i))
            ) {
              var n = r.bind(function () {
                this.unbind(t.Events.load, n), r.isFunction(i) && i();
              }, this);
              this.bind(t.Events.load, n);
            }
            r.isString(e) ? (this.src = e) : r.isElement(e) && (this.image = e),
              this._update();
          });
          r.extend(s, {
            Properties: ["src", "loaded", "repeat"],
            RegularExpressions: n,
            ImageRegistry: new t.Registry(),
            getAbsoluteURL: function (t) {
              return e ? ((e.href = t), e.href) : t;
            },
            loadHeadlessBuffer: new Function(
              "texture",
              "loaded",
              [
                'var fs = require("fs");',
                "var buffer = fs.readFileSync(texture.src);",
                "texture.image.src = buffer;",
                "loaded();",
              ].join("\n")
            ),
            getImage: function (e) {
              var r,
                o = s.getAbsoluteURL(e);
              return s.ImageRegistry.contains(o)
                ? s.ImageRegistry.get(o)
                : (t.Utils.Image
                    ? ((r = new t.Utils.Image()),
                      t.CanvasRenderer.Utils.shim(r, "img"))
                    : i.document
                    ? (r = n.video.test(o)
                        ? document.createElement("video")
                        : document.createElement("img"))
                    : console.warn(
                        "Two.js: no prototypical image defined for Two.Texture"
                      ),
                  (r.crossOrigin = "anonymous"),
                  r);
            },
            Register: {
              canvas: function (t, e) {
                (t._src = "#" + t.id),
                  s.ImageRegistry.add(t.src, t.image),
                  r.isFunction(e) && e();
              },
              img: function (e, i) {
                var n = function t(n) {
                    r.isFunction(e.image.removeEventListener) &&
                      (e.image.removeEventListener("load", t, !1),
                      e.image.removeEventListener("error", o, !1)),
                      r.isFunction(i) && i();
                  },
                  o = function i(s) {
                    throw (
                      (r.isFunction(e.image.removeEventListener) &&
                        (e.image.removeEventListener("load", n, !1),
                        e.image.removeEventListener("error", i, !1)),
                      new t.Utils.Error("unable to load " + e.src))
                    );
                  };
                r.isNumber(e.image.width) &&
                0 < e.image.width &&
                r.isNumber(e.image.height) &&
                0 < e.image.height
                  ? n()
                  : r.isFunction(e.image.addEventListener) &&
                    (e.image.addEventListener("load", n, !1),
                    e.image.addEventListener("error", o, !1)),
                  (e._src = s.getAbsoluteURL(e._src)),
                  (e.image && e.image.getAttribute("two-src")) ||
                    (e.image.setAttribute("two-src", e.src),
                    s.ImageRegistry.add(e.src, e.image),
                    t.Utils.isHeadless
                      ? s.loadHeadlessBuffer(e, n)
                      : (e.image.src = e.src));
              },
              video: function (e, i) {
                var n = function t(n) {
                    e.image.removeEventListener("canplaythrough", t, !1),
                      e.image.removeEventListener("error", o, !1),
                      (e.image.width = e.image.videoWidth),
                      (e.image.height = e.image.videoHeight),
                      e.image.play(),
                      r.isFunction(i) && i();
                  },
                  o = function i(r) {
                    throw (
                      (e.image.removeEventListener("canplaythrough", n, !1),
                      e.image.removeEventListener("error", i, !1),
                      new t.Utils.Error("unable to load " + e.src))
                    );
                  };
                if (
                  ((e._src = s.getAbsoluteURL(e._src)),
                  e.image.addEventListener("canplaythrough", n, !1),
                  e.image.addEventListener("error", o, !1),
                  !e.image || !e.image.getAttribute("two-src"))
                ) {
                  if (t.Utils.isHeadless)
                    throw new t.Utils.Error(
                      "video textures are not implemented in headless environments."
                    );
                  e.image.setAttribute("two-src", e.src),
                    s.ImageRegistry.add(e.src, e.image),
                    (e.image.src = e.src),
                    (e.image.loop = !0),
                    e.image.load();
                }
              },
            },
            load: function (t, e) {
              t.src;
              var i = t.image,
                r = i && i.nodeName.toLowerCase();
              t._flagImage &&
                (/canvas/i.test(r)
                  ? s.Register.canvas(t, e)
                  : ((t._src = i.getAttribute("two-src") || i.src),
                    s.Register[r](t, e))),
                t._flagSrc &&
                  (i || (t.image = s.getImage(t.src)),
                  (r = t.image.nodeName.toLowerCase()),
                  s.Register[r](t, e));
            },
            FlagOffset: function () {
              this._flagOffset = !0;
            },
            FlagScale: function () {
              this._flagScale = !0;
            },
            MakeObservable: function (e) {
              r.each(s.Properties, t.Utils.defineProperty, e),
                Object.defineProperty(e, "image", {
                  enumerable: !0,
                  get: function () {
                    return this._image;
                  },
                  set: function (t) {
                    var e;
                    switch (t && t.nodeName.toLowerCase()) {
                      case "canvas":
                        e = "#" + t.id;
                        break;
                      default:
                        e = t.src;
                    }
                    s.ImageRegistry.contains(e)
                      ? (this._image = s.ImageRegistry.get(t.src))
                      : (this._image = t),
                      (this._flagImage = !0);
                  },
                }),
                Object.defineProperty(e, "offset", {
                  enumerable: !0,
                  get: function () {
                    return this._offset;
                  },
                  set: function (e) {
                    this._offset &&
                      this._offset.unbind(
                        t.Events.change,
                        this._renderer.flagOffset
                      ),
                      (this._offset = e),
                      this._offset.bind(
                        t.Events.change,
                        this._renderer.flagOffset
                      ),
                      (this._flagOffset = !0);
                  },
                }),
                Object.defineProperty(e, "scale", {
                  enumerable: !0,
                  get: function () {
                    return this._scale;
                  },
                  set: function (e) {
                    this._scale instanceof t.Vector &&
                      this._scale.unbind(
                        t.Events.change,
                        this._renderer.flagScale
                      ),
                      (this._scale = e),
                      this._scale instanceof t.Vector &&
                        this._scale.bind(
                          t.Events.change,
                          this._renderer.flagScale
                        ),
                      (this._flagScale = !0);
                  },
                });
            },
          }),
            r.extend(s.prototype, t.Utils.Events, t.Shape.prototype, {
              _flagSrc: !1,
              _flagImage: !1,
              _flagVideo: !1,
              _flagLoaded: !1,
              _flagRepeat: !1,
              _flagOffset: !1,
              _flagScale: !1,
              _src: "",
              _image: null,
              _loaded: !1,
              _repeat: "no-repeat",
              _scale: 1,
              _offset: null,
              constructor: s,
              clone: function () {
                return new s(this.src);
              },
              toObject: function () {
                return { src: this.src, image: this.image };
              },
              _update: function () {
                return (
                  (this._flagSrc || this._flagImage) &&
                    (this.trigger(t.Events.change),
                    (this._flagSrc || this._flagImage) &&
                      ((this.loaded = !1),
                      s.load(
                        this,
                        r.bind(function () {
                          (this.loaded = !0),
                            this.trigger(t.Events.change).trigger(
                              t.Events.load
                            );
                        }, this)
                      ))),
                  this._image &&
                    4 <= this._image.readyState &&
                    (this._flagVideo = !0),
                  this
                );
              },
              flagReset: function () {
                return (
                  (this._flagSrc =
                    this._flagImage =
                    this._flagLoaded =
                    this._flagVideo =
                    this._flagScale =
                    this._flagOffset =
                      !1),
                  this
                );
              },
            }),
            s.MakeObservable(s.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils,
            i = t.Path,
            r = t.Rectangle,
            n = (t.Sprite = function (r, n, s, o, a, l) {
              i.call(
                this,
                [
                  new t.Anchor(),
                  new t.Anchor(),
                  new t.Anchor(),
                  new t.Anchor(),
                ],
                !0
              ),
                this.noStroke(),
                this.noFill(),
                r instanceof t.Texture
                  ? (this.texture = r)
                  : e.isString(r) && (this.texture = new t.Texture(r)),
                (this.origin = new t.Vector()),
                this._update(),
                this.translation.set(n || 0, s || 0),
                e.isNumber(o) && (this.columns = o),
                e.isNumber(a) && (this.rows = a),
                e.isNumber(l) && (this.frameRate = l);
            });
          e.extend(n, {
            Properties: ["texture", "columns", "rows", "frameRate", "index"],
            MakeObservable: function (i) {
              r.MakeObservable(i),
                e.each(n.Properties, t.Utils.defineProperty, i);
            },
          }),
            e.extend(n.prototype, r.prototype, {
              _flagTexture: !1,
              _flagColumns: !1,
              _flagRows: !1,
              _flagFrameRate: !1,
              flagIndex: !1,
              _amount: 1,
              _duration: 0,
              _startTime: 0,
              _playing: !1,
              _firstFrame: 0,
              _lastFrame: 0,
              _loop: !0,
              _texture: null,
              _columns: 1,
              _rows: 1,
              _frameRate: 0,
              _index: 0,
              _origin: null,
              constructor: n,
              play: function (t, i, r) {
                return (
                  (this._playing = !0),
                  (this._firstFrame = 0),
                  (this._lastFrame = this.amount - 1),
                  (this._startTime = e.performance.now()),
                  e.isNumber(t) && (this._firstFrame = t),
                  e.isNumber(i) && (this._lastFrame = i),
                  e.isFunction(r)
                    ? (this._onLastFrame = r)
                    : delete this._onLastFrame,
                  this._index !== this._firstFrame &&
                    (this._startTime -=
                      (1e3 * Math.abs(this._index - this._firstFrame)) /
                      this._frameRate),
                  this
                );
              },
              pause: function () {
                return (this._playing = !1), this;
              },
              stop: function () {
                return (this._playing = !1), (this._index = 0), this;
              },
              clone: function (t) {
                var e = new n(
                  this.texture,
                  this.translation.x,
                  this.translation.y,
                  this.columns,
                  this.rows,
                  this.frameRate
                );
                return (
                  this.playing &&
                    (e.play(this._firstFrame, this._lastFrame),
                    (e._loop = this._loop)),
                  t && t.add(e),
                  e
                );
              },
              _update: function () {
                var t,
                  i,
                  n,
                  s,
                  o,
                  a,
                  l,
                  h,
                  c,
                  u = this._texture,
                  d = this._columns,
                  f = this._rows;
                if (
                  ((this._flagColumns || this._flagRows) &&
                    (this._amount = this._columns * this._rows),
                  this._flagFrameRate &&
                    (this._duration = (1e3 * this._amount) / this._frameRate),
                  this._flagTexture && (this.fill = this._texture),
                  this._texture.loaded)
                ) {
                  (t = (l = u.image.width) / d),
                    (i = (h = u.image.height) / f),
                    (s = this._amount),
                    this.width !== t && (this.width = t),
                    this.height !== i && (this.height = i),
                    this._playing &&
                      0 < this._frameRate &&
                      (e.isNaN(this._lastFrame) && (this._lastFrame = s - 1),
                      (n = e.performance.now() - this._startTime),
                      (o =
                        (1e3 * ((c = this._lastFrame + 1) - this._firstFrame)) /
                        this._frameRate),
                      this._loop ? (n %= o) : (n = Math.min(n, o)),
                      (a = e.lerp(this._firstFrame, c, n / o)),
                      (a = Math.floor(a)) !== this._index &&
                        (this._index = a) >= this._lastFrame - 1 &&
                        this._onLastFrame &&
                        this._onLastFrame());
                  var p = -t * (this._index % d) + (l - t) / 2,
                    g = -i * Math.floor(this._index / d) + (h - i) / 2;
                  p !== u.offset.x && (u.offset.x = p),
                    g !== u.offset.y && (u.offset.y = g);
                }
                return r.prototype._update.call(this), this;
              },
              flagReset: function () {
                return (
                  (this._flagTexture =
                    this._flagColumns =
                    this._flagRows =
                    this._flagFrameRate =
                      !1),
                  r.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            n.MakeObservable(n.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = t.Utils,
            i = t.Path,
            r = t.Rectangle,
            n = (t.ImageSequence = function (r, s, o, a) {
              i.call(
                this,
                [
                  new t.Anchor(),
                  new t.Anchor(),
                  new t.Anchor(),
                  new t.Anchor(),
                ],
                !0
              ),
                (this._renderer.flagTextures = e.bind(n.FlagTextures, this)),
                (this._renderer.bindTextures = e.bind(n.BindTextures, this)),
                (this._renderer.unbindTextures = e.bind(
                  n.UnbindTextures,
                  this
                )),
                this.noStroke(),
                this.noFill(),
                (this.textures = e.map(r, n.GenerateTexture, this)),
                (this.origin = new t.Vector()),
                this._update(),
                this.translation.set(s || 0, o || 0),
                e.isNumber(a)
                  ? (this.frameRate = a)
                  : (this.frameRate = n.DefaultFrameRate);
            });
          e.extend(n, {
            Properties: ["frameRate", "index"],
            DefaultFrameRate: 30,
            FlagTextures: function () {
              this._flagTextures = !0;
            },
            BindTextures: function (e) {
              for (var i = e.length; i--; )
                e[i].bind(t.Events.change, this._renderer.flagTextures);
              this._renderer.flagTextures();
            },
            UnbindTextures: function (e) {
              for (var i = e.length; i--; )
                e[i].unbind(t.Events.change, this._renderer.flagTextures);
              this._renderer.flagTextures();
            },
            MakeObservable: function (i) {
              r.MakeObservable(i),
                e.each(n.Properties, t.Utils.defineProperty, i),
                Object.defineProperty(i, "textures", {
                  enumerable: !0,
                  get: function () {
                    return this._textures;
                  },
                  set: function (e) {
                    this._renderer.flagTextures;
                    var i = this._renderer.bindTextures,
                      r = this._renderer.unbindTextures;
                    this._textures &&
                      this._textures
                        .unbind(t.Events.insert, i)
                        .unbind(t.Events.remove, r),
                      (this._textures = new t.Utils.Collection(
                        (e || []).slice(0)
                      )),
                      this._textures
                        .bind(t.Events.insert, i)
                        .bind(t.Events.remove, r),
                      i(this._textures);
                  },
                });
            },
            GenerateTexture: function (i) {
              return i instanceof t.Texture
                ? i
                : e.isString(i)
                ? new t.Texture(i)
                : void 0;
            },
          }),
            e.extend(n.prototype, r.prototype, {
              _flagTextures: !1,
              _flagFrameRate: !1,
              _flagIndex: !1,
              _amount: 1,
              _duration: 0,
              _index: 0,
              _startTime: 0,
              _playing: !1,
              _firstFrame: 0,
              _lastFrame: 0,
              _loop: !0,
              _textures: null,
              _frameRate: 0,
              _origin: null,
              constructor: n,
              play: function (t, i, r) {
                return (
                  (this._playing = !0),
                  (this._firstFrame = 0),
                  (this._lastFrame = this.amount - 1),
                  (this._startTime = e.performance.now()),
                  e.isNumber(t) && (this._firstFrame = t),
                  e.isNumber(i) && (this._lastFrame = i),
                  e.isFunction(r)
                    ? (this._onLastFrame = r)
                    : delete this._onLastFrame,
                  this._index !== this._firstFrame &&
                    (this._startTime -=
                      (1e3 * Math.abs(this._index - this._firstFrame)) /
                      this._frameRate),
                  this
                );
              },
              pause: function () {
                return (this._playing = !1), this;
              },
              stop: function () {
                return (this._playing = !1), (this._index = 0), this;
              },
              clone: function (t) {
                var e = new n(
                  this.textures,
                  this.translation.x,
                  this.translation.y,
                  this.frameRate
                );
                return (
                  (e._loop = this._loop),
                  this._playing && e.play(),
                  t && t.add(e),
                  e
                );
              },
              _update: function () {
                var i,
                  n,
                  s,
                  o,
                  a,
                  l,
                  h,
                  c,
                  u = this._textures;
                return (
                  this._flagTextures && (this._amount = u.length),
                  this._flagFrameRate &&
                    (this._duration = (1e3 * this._amount) / this._frameRate),
                  this._playing && 0 < this._frameRate
                    ? ((o = this._amount),
                      e.isNaN(this._lastFrame) && (this._lastFrame = o - 1),
                      (s = e.performance.now() - this._startTime),
                      (a =
                        (1e3 * ((c = this._lastFrame + 1) - this._firstFrame)) /
                        this._frameRate),
                      this._loop ? (s %= a) : (s = Math.min(s, a)),
                      (h = e.lerp(this._firstFrame, c, s / a)),
                      (h = Math.floor(h)) !== this._index &&
                        ((this._index = h),
                        (l = u[this._index]).loaded &&
                          ((i = l.image.width),
                          (n = l.image.height),
                          this.width !== i && (this.width = i),
                          this.height !== n && (this.height = n),
                          (this.fill = l),
                          h >= this._lastFrame - 1 &&
                            this._onLastFrame &&
                            this._onLastFrame())))
                    : (!this._flagIndex && this.fill instanceof t.Texture) ||
                      ((l = u[this._index]).loaded &&
                        ((i = l.image.width),
                        (n = l.image.height),
                        this.width !== i && (this.width = i),
                        this.height !== n && (this.height = n)),
                      (this.fill = l)),
                  r.prototype._update.call(this),
                  this
                );
              },
              flagReset: function () {
                return (
                  (this._flagTextures = this._flagFrameRate = !1),
                  r.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            n.MakeObservable(n.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (t) {
          var e = Math.min,
            i = Math.max,
            r = t.Utils,
            n = function e() {
              t.Utils.Collection.apply(this, arguments),
                Object.defineProperty(this, "_events", {
                  value: {},
                  enumerable: !1,
                }),
                (this.ids = {}),
                this.on(t.Events.insert, this.attach),
                this.on(t.Events.remove, this.detach),
                e.prototype.attach.apply(this, arguments);
            };
          (n.prototype = new t.Utils.Collection()),
            r.extend(n.prototype, {
              constructor: n,
              attach: function (t) {
                for (var e = 0; e < t.length; e++) this.ids[t[e].id] = t[e];
                return this;
              },
              detach: function (t) {
                for (var e = 0; e < t.length; e++) delete this.ids[t[e].id];
                return this;
              },
            });
          var s = (t.Group = function (e) {
            t.Shape.call(this, !0),
              (this._renderer.type = "group"),
              (this.additions = []),
              (this.subtractions = []),
              (this.children = r.isArray(e) ? e : arguments);
          });
          function o(t, e) {
            var i,
              n = t.parent;
            return n === e
              ? (this.additions.push(t), void (this._flagAdditions = !0))
              : (n &&
                  n.children.ids[t.id] &&
                  ((i = r.indexOf(n.children, t)),
                  n.children.splice(i, 1),
                  0 <= (i = r.indexOf(n.additions, t))
                    ? n.additions.splice(i, 1)
                    : (n.subtractions.push(t), (n._flagSubtractions = !0))),
                e
                  ? ((t.parent = e),
                    this.additions.push(t),
                    void (this._flagAdditions = !0))
                  : (0 <= (i = r.indexOf(this.additions, t))
                      ? this.additions.splice(i, 1)
                      : (this.subtractions.push(t),
                        (this._flagSubtractions = !0)),
                    void delete t.parent));
          }
          r.extend(s, {
            Children: n,
            InsertChildren: function (t) {
              for (var e = 0; e < t.length; e++) o.call(this, t[e], this);
            },
            RemoveChildren: function (t) {
              for (var e = 0; e < t.length; e++) o.call(this, t[e]);
            },
            OrderChildren: function (t) {
              this._flagOrder = !0;
            },
            Properties: [
              "fill",
              "stroke",
              "linewidth",
              "visible",
              "cap",
              "join",
              "miter",
            ],
            MakeObservable: function (e) {
              var i = t.Group.Properties;
              Object.defineProperty(e, "opacity", {
                enumerable: !0,
                get: function () {
                  return this._opacity;
                },
                set: function (t) {
                  (this._flagOpacity = this._opacity !== t),
                    (this._opacity = t);
                },
              }),
                Object.defineProperty(e, "className", {
                  enumerable: !0,
                  get: function () {
                    return this._className;
                  },
                  set: function (t) {
                    (this._flagClassName = this._className !== t),
                      (this._className = t);
                  },
                }),
                Object.defineProperty(e, "beginning", {
                  enumerable: !0,
                  get: function () {
                    return this._beginning;
                  },
                  set: function (t) {
                    (this._flagBeginning = this._beginning !== t),
                      (this._beginning = t);
                  },
                }),
                Object.defineProperty(e, "ending", {
                  enumerable: !0,
                  get: function () {
                    return this._ending;
                  },
                  set: function (t) {
                    (this._flagEnding = this._ending !== t), (this._ending = t);
                  },
                }),
                Object.defineProperty(e, "length", {
                  enumerable: !0,
                  get: function () {
                    if (this._flagLength || this._length <= 0)
                      for (
                        var t = (this._length = 0);
                        t < this.children.length;
                        t++
                      ) {
                        var e = this.children[t];
                        this._length += e.length;
                      }
                    return this._length;
                  },
                }),
                t.Shape.MakeObservable(e),
                s.MakeGetterSetters(e, i),
                Object.defineProperty(e, "children", {
                  enumerable: !0,
                  get: function () {
                    return this._children;
                  },
                  set: function (e) {
                    var i = r.bind(s.InsertChildren, this),
                      o = r.bind(s.RemoveChildren, this),
                      a = r.bind(s.OrderChildren, this);
                    this._children && this._children.unbind(),
                      (this._children = new n(e)),
                      this._children.bind(t.Events.insert, i),
                      this._children.bind(t.Events.remove, o),
                      this._children.bind(t.Events.order, a);
                  },
                }),
                Object.defineProperty(e, "mask", {
                  enumerable: !0,
                  get: function () {
                    return this._mask;
                  },
                  set: function (t) {
                    (this._mask = t),
                      (this._flagMask = !0),
                      t.clip || (t.clip = !0);
                  },
                });
            },
            MakeGetterSetters: function (t, e) {
              r.isArray(e) || (e = [e]),
                r.each(e, function (e) {
                  s.MakeGetterSetter(t, e);
                });
            },
            MakeGetterSetter: function (t, e) {
              var i = "_" + e;
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return this[i];
                },
                set: function (t) {
                  (this[i] = t),
                    r.each(this.children, function (i) {
                      i[e] = t;
                    });
                },
              });
            },
          }),
            r.extend(s.prototype, t.Shape.prototype, {
              _flagAdditions: !1,
              _flagSubtractions: !1,
              _flagOrder: !1,
              _flagOpacity: !0,
              _flagClassName: !1,
              _flagBeginning: !1,
              _flagEnding: !1,
              _flagLength: !1,
              _flagMask: !1,
              _fill: "#E8911F",
              _stroke: "transparent",
              _linewidth: 1,
              _opacity: 1,
              _className: "",
              _visible: !0,
              _cap: "round",
              _join: "round",
              _miter: 4,
              _closed: !0,
              _curved: !1,
              _automatic: !0,
              _beginning: 0,
              _ending: 1,
              _length: 0,
              _mask: null,
              constructor: s,
              clone: function (t) {
                var e = new s(),
                  i = r.map(this.children, function (t) {
                    return t.clone();
                  });
                return (
                  e.add(i),
                  (e.opacity = this.opacity),
                  this.mask && (e.mask = this.mask),
                  e.translation.copy(this.translation),
                  (e.rotation = this.rotation),
                  (e.scale = this.scale),
                  (e.className = this.className),
                  t && t.add(e),
                  e._update()
                );
              },
              toObject: function () {
                var e = {
                  children: [],
                  translation: this.translation.toObject(),
                  rotation: this.rotation,
                  scale:
                    this.scale instanceof t.Vector
                      ? this.scale.toObject()
                      : this.scale,
                  opacity: this.opacity,
                  className: this.className,
                  mask: this.mask ? this.mask.toObject() : null,
                };
                return (
                  r.each(
                    this.children,
                    function (t, i) {
                      e.children[i] = t.toObject();
                    },
                    this
                  ),
                  e
                );
              },
              corner: function () {
                var t = this.getBoundingClientRect(!0),
                  e = { x: t.left, y: t.top };
                return (
                  this.children.forEach(function (t) {
                    t.translation.sub(e);
                  }),
                  this
                );
              },
              center: function () {
                var t = this.getBoundingClientRect(!0);
                return (
                  (t.centroid = {
                    x: t.left + t.width / 2,
                    y: t.top + t.height / 2,
                  }),
                  this.children.forEach(function (e) {
                    e.isShape && e.translation.sub(t.centroid);
                  }),
                  this
                );
              },
              getById: function (t) {
                return (
                  (function t(e, i) {
                    if (e.id === i) return e;
                    if (e.children)
                      for (var r = e.children.length; r--; ) {
                        var n = t(e.children[r], i);
                        if (n) return n;
                      }
                  })(this, t) || null
                );
              },
              getByClassName: function (t) {
                var e = [];
                return (function t(i, r) {
                  return (
                    -1 != i.classList.indexOf(r)
                      ? e.push(i)
                      : i.children &&
                        i.children.forEach(function (e) {
                          t(e, r);
                        }),
                    e
                  );
                })(this, t);
              },
              getByType: function (e) {
                var i = [];
                return (function e(r, n) {
                  for (var s in r.children)
                    r.children[s] instanceof n
                      ? i.push(r.children[s])
                      : r.children[s] instanceof t.Group && e(r.children[s], n);
                  return i;
                })(this, e);
              },
              add: function (t) {
                t = t instanceof Array ? t.slice() : r.toArray(arguments);
                for (var e = 0; e < t.length; e++)
                  t[e] && t[e].id && this.children.push(t[e]);
                return this;
              },
              remove: function (t) {
                var e = arguments.length,
                  i = this.parent;
                if (e <= 0 && i) return i.remove(this), this;
                t = t instanceof Array ? t.slice() : r.toArray(arguments);
                for (var n = 0; n < t.length; n++)
                  t[n] &&
                    this.children.ids[t[n].id] &&
                    this.children.splice(r.indexOf(this.children, t[n]), 1);
                return this;
              },
              getBoundingClientRect: function (n) {
                var s;
                this._update(!0);
                for (
                  var o = 1 / 0,
                    a = -1 / 0,
                    l = 1 / 0,
                    h = -1 / 0,
                    c = t.Texture.RegularExpressions.effect,
                    u = 0;
                  u < this.children.length;
                  u++
                ) {
                  var d = this.children[u];
                  d.visible &&
                    !c.test(d._renderer.type) &&
                    ((s = d.getBoundingClientRect(n)),
                    r.isNumber(s.top) &&
                      r.isNumber(s.left) &&
                      r.isNumber(s.right) &&
                      r.isNumber(s.bottom) &&
                      ((l = e(s.top, l)),
                      (o = e(s.left, o)),
                      (a = i(s.right, a)),
                      (h = i(s.bottom, h))));
                }
                return {
                  top: l,
                  left: o,
                  right: a,
                  bottom: h,
                  width: a - o,
                  height: h - l,
                };
              },
              noFill: function () {
                return (
                  this.children.forEach(function (t) {
                    t.noFill();
                  }),
                  this
                );
              },
              noStroke: function () {
                return (
                  this.children.forEach(function (t) {
                    t.noStroke();
                  }),
                  this
                );
              },
              subdivide: function () {
                var t = arguments;
                return (
                  this.children.forEach(function (e) {
                    e.subdivide.apply(e, t);
                  }),
                  this
                );
              },
              _update: function () {
                if (this._flagBeginning || this._flagEnding)
                  for (
                    var e = Math.min(this._beginning, this._ending),
                      i = Math.max(this._beginning, this._ending),
                      r = this.length,
                      n = 0,
                      s = e * r,
                      o = i * r,
                      a = 0;
                    a < this.children.length;
                    a++
                  ) {
                    var l = this.children[a],
                      h = l.length;
                    (l.ending =
                      n + h < s
                        ? (l.beginning = 1)
                        : o < n
                        ? (l.beginning = 0)
                        : n < s && s < n + h
                        ? ((l.beginning = (s - n) / h), 1)
                        : n < o && o < n + h
                        ? ((l.beginning = 0), (o - n) / h)
                        : ((l.beginning = 0), 1)),
                      (n += h);
                  }
                return t.Shape.prototype._update.apply(this, arguments);
              },
              flagReset: function () {
                return (
                  this._flagAdditions &&
                    ((this.additions.length = 0), (this._flagAdditions = !1)),
                  this._flagSubtractions &&
                    ((this.subtractions.length = 0),
                    (this._flagSubtractions = !1)),
                  (this._flagOrder =
                    this._flagMask =
                    this._flagOpacity =
                      this._flagClassName),
                  (this._flagBeginning = this._flagEnding = !1),
                  t.Shape.prototype.flagReset.call(this),
                  this
                );
              },
            }),
            s.MakeObservable(s.prototype);
        })((void 0 !== t ? t : self || window).Two),
        (function (n) {
          "object" ==
            ("undefined" == typeof exports ? "undefined" : r(exports)) &&
          void 0 !== e
            ? (e.exports = n())
            : "function" == typeof define && i(5)
            ? define([], n)
            : (("undefined" != typeof window
                ? window
                : void 0 !== t
                ? t
                : "undefined" != typeof self
                ? self
                : this
              ).Matter = n());
        })(function () {
          return (function t(e, i, r) {
            function n(o, a) {
              if (!i[o]) {
                if (!e[o]) {
                  if (s) return s(o, !0);
                  var l = new Error("Cannot find module '" + o + "'");
                  throw ((l.code = "MODULE_NOT_FOUND"), l);
                }
                var h = (i[o] = { exports: {} });
                e[o][0].call(
                  h.exports,
                  function (t) {
                    return n(e[o][1][t] || t);
                  },
                  h,
                  h.exports,
                  t,
                  e,
                  i,
                  r
                );
              }
              return i[o].exports;
            }
            for (var s = !1, o = 0; o < r.length; o++) n(r[o]);
            return n;
          })(
            {
              1: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vertices"),
                    s = t("../geometry/Vector"),
                    o = t("../core/Sleeping"),
                    a = (t("../render/Render"), t("../core/Common")),
                    l = t("../geometry/Bounds"),
                    h = t("../geometry/Axes");
                  !(function () {
                    (r._inertiaScale = 4),
                      (r._nextCollidingGroupId = 1),
                      (r._nextNonCollidingGroupId = -1),
                      (r._nextCategory = 1),
                      (r.create = function (e) {
                        var i = {
                            id: a.nextId(),
                            type: "body",
                            label: "Body",
                            parts: [],
                            plugin: {},
                            angle: 0,
                            vertices: n.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                            position: { x: 0, y: 0 },
                            force: { x: 0, y: 0 },
                            torque: 0,
                            positionImpulse: { x: 0, y: 0 },
                            constraintImpulse: { x: 0, y: 0, angle: 0 },
                            totalContacts: 0,
                            speed: 0,
                            angularSpeed: 0,
                            velocity: { x: 0, y: 0 },
                            angularVelocity: 0,
                            isSensor: !1,
                            isStatic: !1,
                            isSleeping: !1,
                            motion: 0,
                            sleepThreshold: 60,
                            density: 0.001,
                            restitution: 0,
                            friction: 0.1,
                            frictionStatic: 0.5,
                            frictionAir: 0.01,
                            collisionFilter: {
                              category: 1,
                              mask: 4294967295,
                              group: 0,
                            },
                            slop: 0.05,
                            timeScale: 1,
                            render: {
                              visible: !0,
                              opacity: 1,
                              sprite: {
                                xScale: 1,
                                yScale: 1,
                                xOffset: 0,
                                yOffset: 0,
                              },
                              lineWidth: 0,
                            },
                          },
                          r = a.extend(i, e);
                        return t(r, e), r;
                      }),
                      (r.nextGroup = function (t) {
                        return t
                          ? r._nextNonCollidingGroupId--
                          : r._nextCollidingGroupId++;
                      }),
                      (r.nextCategory = function () {
                        return (
                          (r._nextCategory = r._nextCategory << 1),
                          r._nextCategory
                        );
                      });
                    var t = function (t, e) {
                      (e = e || {}),
                        r.set(t, {
                          bounds: t.bounds || l.create(t.vertices),
                          positionPrev: t.positionPrev || s.clone(t.position),
                          anglePrev: t.anglePrev || t.angle,
                          vertices: t.vertices,
                          parts: t.parts || [t],
                          isStatic: t.isStatic,
                          isSleeping: t.isSleeping,
                          parent: t.parent || t,
                        }),
                        n.rotate(t.vertices, t.angle, t.position),
                        h.rotate(t.axes, t.angle),
                        l.update(t.bounds, t.vertices, t.velocity),
                        r.set(t, {
                          axes: e.axes || t.axes,
                          area: e.area || t.area,
                          mass: e.mass || t.mass,
                          inertia: e.inertia || t.inertia,
                        });
                      var i = t.isStatic
                        ? "#2e2b44"
                        : a.choose([
                            "#006BA6",
                            "#0496FF",
                            "#FFBC42",
                            "#D81159",
                            "#8F2D56",
                          ]);
                      (t.render.fillStyle = t.render.fillStyle || i),
                        (t.render.strokeStyle =
                          t.render.strokeStyle || "white"),
                        (t.render.sprite.xOffset +=
                          -(t.bounds.min.x - t.position.x) /
                          (t.bounds.max.x - t.bounds.min.x)),
                        (t.render.sprite.yOffset +=
                          -(t.bounds.min.y - t.position.y) /
                          (t.bounds.max.y - t.bounds.min.y));
                    };
                    (r.set = function (t, e, i) {
                      var n;
                      for (n in ("string" == typeof e &&
                        ((n = e), ((e = {})[n] = i)),
                      e))
                        if (((i = e[n]), e.hasOwnProperty(n)))
                          switch (n) {
                            case "isStatic":
                              r.setStatic(t, i);
                              break;
                            case "isSleeping":
                              o.set(t, i);
                              break;
                            case "mass":
                              r.setMass(t, i);
                              break;
                            case "density":
                              r.setDensity(t, i);
                              break;
                            case "inertia":
                              r.setInertia(t, i);
                              break;
                            case "vertices":
                              r.setVertices(t, i);
                              break;
                            case "position":
                              r.setPosition(t, i);
                              break;
                            case "angle":
                              r.setAngle(t, i);
                              break;
                            case "velocity":
                              r.setVelocity(t, i);
                              break;
                            case "angularVelocity":
                              r.setAngularVelocity(t, i);
                              break;
                            case "parts":
                              r.setParts(t, i);
                              break;
                            default:
                              t[n] = i;
                          }
                    }),
                      (r.setStatic = function (t, e) {
                        for (var i = 0; i < t.parts.length; i++) {
                          var r = t.parts[i];
                          (r.isStatic = e)
                            ? ((r._original = {
                                restitution: r.restitution,
                                friction: r.friction,
                                mass: r.mass,
                                inertia: r.inertia,
                                density: r.density,
                                inverseMass: r.inverseMass,
                                inverseInertia: r.inverseInertia,
                              }),
                              (r.restitution = 0),
                              (r.friction = 1),
                              (r.mass = r.inertia = r.density = 1 / 0),
                              (r.inverseMass = r.inverseInertia = 0),
                              (r.positionPrev.x = r.position.x),
                              (r.positionPrev.y = r.position.y),
                              (r.anglePrev = r.angle),
                              (r.angularVelocity = 0),
                              (r.speed = 0),
                              (r.angularSpeed = 0),
                              (r.motion = 0))
                            : r._original &&
                              ((r.restitution = r._original.restitution),
                              (r.friction = r._original.friction),
                              (r.mass = r._original.mass),
                              (r.inertia = r._original.inertia),
                              (r.density = r._original.density),
                              (r.inverseMass = r._original.inverseMass),
                              (r.inverseInertia = r._original.inverseInertia),
                              delete r._original);
                        }
                      }),
                      (r.setMass = function (t, e) {
                        var i = t.inertia / (t.mass / 6);
                        (t.inertia = i * (e / 6)),
                          (t.inverseInertia = 1 / t.inertia),
                          (t.mass = e),
                          (t.inverseMass = 1 / t.mass),
                          (t.density = t.mass / t.area);
                      }),
                      (r.setDensity = function (t, e) {
                        r.setMass(t, e * t.area), (t.density = e);
                      }),
                      (r.setInertia = function (t, e) {
                        (t.inertia = e), (t.inverseInertia = 1 / t.inertia);
                      }),
                      (r.setVertices = function (t, e) {
                        e[0].body === t
                          ? (t.vertices = e)
                          : (t.vertices = n.create(e, t)),
                          (t.axes = h.fromVertices(t.vertices)),
                          (t.area = n.area(t.vertices)),
                          r.setMass(t, t.density * t.area);
                        var i = n.centre(t.vertices);
                        n.translate(t.vertices, i, -1),
                          r.setInertia(
                            t,
                            r._inertiaScale * n.inertia(t.vertices, t.mass)
                          ),
                          n.translate(t.vertices, t.position),
                          l.update(t.bounds, t.vertices, t.velocity);
                      }),
                      (r.setParts = function (t, e, i) {
                        var s;
                        for (
                          e = e.slice(0),
                            t.parts.length = 0,
                            t.parts.push(t),
                            t.parent = t,
                            s = 0;
                          s < e.length;
                          s++
                        ) {
                          var o = e[s];
                          o !== t && (o.parent = t).parts.push(o);
                        }
                        if (1 !== t.parts.length) {
                          if ((i = void 0 === i || i)) {
                            var a = [];
                            for (s = 0; s < e.length; s++)
                              a = a.concat(e[s].vertices);
                            n.clockwiseSort(a);
                            var l = n.hull(a),
                              h = n.centre(l);
                            r.setVertices(t, l), n.translate(t.vertices, h);
                          }
                          var c = r._totalProperties(t);
                          (t.area = c.area),
                            ((t.parent = t).position.x = c.centre.x),
                            (t.position.y = c.centre.y),
                            (t.positionPrev.x = c.centre.x),
                            (t.positionPrev.y = c.centre.y),
                            r.setMass(t, c.mass),
                            r.setInertia(t, c.inertia),
                            r.setPosition(t, c.centre);
                        }
                      }),
                      (r.setPosition = function (t, e) {
                        var i = s.sub(e, t.position);
                        (t.positionPrev.x += i.x), (t.positionPrev.y += i.y);
                        for (var r = 0; r < t.parts.length; r++) {
                          var o = t.parts[r];
                          (o.position.x += i.x),
                            (o.position.y += i.y),
                            n.translate(o.vertices, i),
                            l.update(o.bounds, o.vertices, t.velocity);
                        }
                      }),
                      (r.setAngle = function (t, e) {
                        var i = e - t.angle;
                        t.anglePrev += i;
                        for (var r = 0; r < t.parts.length; r++) {
                          var o = t.parts[r];
                          (o.angle += i),
                            n.rotate(o.vertices, i, t.position),
                            h.rotate(o.axes, i),
                            l.update(o.bounds, o.vertices, t.velocity),
                            0 < r &&
                              s.rotateAbout(
                                o.position,
                                i,
                                t.position,
                                o.position
                              );
                        }
                      }),
                      (r.setVelocity = function (t, e) {
                        (t.positionPrev.x = t.position.x - e.x),
                          (t.positionPrev.y = t.position.y - e.y),
                          (t.velocity.x = e.x),
                          (t.velocity.y = e.y),
                          (t.speed = s.magnitude(t.velocity));
                      }),
                      (r.setAngularVelocity = function (t, e) {
                        (t.anglePrev = t.angle - e),
                          (t.angularVelocity = e),
                          (t.angularSpeed = Math.abs(t.angularVelocity));
                      }),
                      (r.translate = function (t, e) {
                        r.setPosition(t, s.add(t.position, e));
                      }),
                      (r.rotate = function (t, e, i) {
                        if (i) {
                          var n = Math.cos(e),
                            s = Math.sin(e),
                            o = t.position.x - i.x,
                            a = t.position.y - i.y;
                          r.setPosition(t, {
                            x: i.x + (o * n - a * s),
                            y: i.y + (o * s + a * n),
                          }),
                            r.setAngle(t, t.angle + e);
                        } else r.setAngle(t, t.angle + e);
                      }),
                      (r.scale = function (t, e, i, s) {
                        var o = 0,
                          a = 0;
                        s = s || t.position;
                        for (var c = 0; c < t.parts.length; c++) {
                          var u = t.parts[c];
                          n.scale(u.vertices, e, i, s),
                            (u.axes = h.fromVertices(u.vertices)),
                            (u.area = n.area(u.vertices)),
                            r.setMass(u, t.density * u.area),
                            n.translate(u.vertices, {
                              x: -u.position.x,
                              y: -u.position.y,
                            }),
                            r.setInertia(
                              u,
                              r._inertiaScale * n.inertia(u.vertices, u.mass)
                            ),
                            n.translate(u.vertices, {
                              x: u.position.x,
                              y: u.position.y,
                            }),
                            0 < c && ((o += u.area), (a += u.inertia)),
                            (u.position.x = s.x + (u.position.x - s.x) * e),
                            (u.position.y = s.y + (u.position.y - s.y) * i),
                            l.update(u.bounds, u.vertices, t.velocity);
                        }
                        1 < t.parts.length &&
                          ((t.area = o),
                          t.isStatic ||
                            (r.setMass(t, t.density * o), r.setInertia(t, a))),
                          t.circleRadius &&
                            (e === i
                              ? (t.circleRadius *= e)
                              : (t.circleRadius = null));
                      }),
                      (r.update = function (t, e, i, r) {
                        var o = Math.pow(e * i * t.timeScale, 2),
                          a = 1 - t.frictionAir * i * t.timeScale,
                          c = t.position.x - t.positionPrev.x,
                          u = t.position.y - t.positionPrev.y;
                        (t.velocity.x = c * a * r + (t.force.x / t.mass) * o),
                          (t.velocity.y = u * a * r + (t.force.y / t.mass) * o),
                          (t.positionPrev.x = t.position.x),
                          (t.positionPrev.y = t.position.y),
                          (t.position.x += t.velocity.x),
                          (t.position.y += t.velocity.y),
                          (t.angularVelocity =
                            (t.angle - t.anglePrev) * a * r +
                            (t.torque / t.inertia) * o),
                          (t.anglePrev = t.angle),
                          (t.angle += t.angularVelocity),
                          (t.speed = s.magnitude(t.velocity)),
                          (t.angularSpeed = Math.abs(t.angularVelocity));
                        for (var d = 0; d < t.parts.length; d++) {
                          var f = t.parts[d];
                          n.translate(f.vertices, t.velocity),
                            0 < d &&
                              ((f.position.x += t.velocity.x),
                              (f.position.y += t.velocity.y)),
                            0 !== t.angularVelocity &&
                              (n.rotate(
                                f.vertices,
                                t.angularVelocity,
                                t.position
                              ),
                              h.rotate(f.axes, t.angularVelocity),
                              0 < d &&
                                s.rotateAbout(
                                  f.position,
                                  t.angularVelocity,
                                  t.position,
                                  f.position
                                )),
                            l.update(f.bounds, f.vertices, t.velocity);
                        }
                      }),
                      (r.applyForce = function (t, e, i) {
                        (t.force.x += i.x), (t.force.y += i.y);
                        var r = e.x - t.position.x,
                          n = e.y - t.position.y;
                        t.torque += r * i.y - n * i.x;
                      }),
                      (r._totalProperties = function (t) {
                        for (
                          var e = {
                              mass: 0,
                              area: 0,
                              inertia: 0,
                              centre: { x: 0, y: 0 },
                            },
                            i = 1 === t.parts.length ? 0 : 1;
                          i < t.parts.length;
                          i++
                        ) {
                          var r = t.parts[i],
                            n = r.mass !== 1 / 0 ? r.mass : 1;
                          (e.mass += n),
                            (e.area += r.area),
                            (e.inertia += r.inertia),
                            (e.centre = s.add(e.centre, s.mult(r.position, n)));
                        }
                        return (e.centre = s.div(e.centre, e.mass)), e;
                      });
                  })();
                },
                {
                  "../core/Common": 14,
                  "../core/Sleeping": 22,
                  "../geometry/Axes": 25,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                  "../geometry/Vertices": 29,
                  "../render/Render": 31,
                },
              ],
              2: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../core/Events"),
                    s = t("../core/Common"),
                    o = t("../geometry/Bounds"),
                    a = t("./Body");
                  (r.create = function (t) {
                    return s.extend(
                      {
                        id: s.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {},
                      },
                      t
                    );
                  }),
                    (r.setModified = function (t, e, i, n) {
                      if (
                        ((t.isModified = e),
                        i && t.parent && r.setModified(t.parent, e, i, n),
                        n)
                      )
                        for (var s = 0; s < t.composites.length; s++) {
                          var o = t.composites[s];
                          r.setModified(o, e, i, n);
                        }
                    }),
                    (r.add = function (t, e) {
                      var i = [].concat(e);
                      n.trigger(t, "beforeAdd", { object: e });
                      for (var o = 0; o < i.length; o++) {
                        var a = i[o];
                        switch (a.type) {
                          case "body":
                            if (a.parent !== a) {
                              s.warn(
                                "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                              );
                              break;
                            }
                            r.addBody(t, a);
                            break;
                          case "constraint":
                            r.addConstraint(t, a);
                            break;
                          case "composite":
                            r.addComposite(t, a);
                            break;
                          case "mouseConstraint":
                            r.addConstraint(t, a.constraint);
                        }
                      }
                      return n.trigger(t, "afterAdd", { object: e }), t;
                    }),
                    (r.remove = function (t, e, i) {
                      var s = [].concat(e);
                      n.trigger(t, "beforeRemove", { object: e });
                      for (var o = 0; o < s.length; o++) {
                        var a = s[o];
                        switch (a.type) {
                          case "body":
                            r.removeBody(t, a, i);
                            break;
                          case "constraint":
                            r.removeConstraint(t, a, i);
                            break;
                          case "composite":
                            r.removeComposite(t, a, i);
                            break;
                          case "mouseConstraint":
                            r.removeConstraint(t, a.constraint);
                        }
                      }
                      return n.trigger(t, "afterRemove", { object: e }), t;
                    }),
                    (r.addComposite = function (t, e) {
                      return (
                        t.composites.push(e),
                        (e.parent = t),
                        r.setModified(t, !0, !0, !1),
                        t
                      );
                    }),
                    (r.removeComposite = function (t, e, i) {
                      var n = s.indexOf(t.composites, e);
                      if (
                        (-1 !== n &&
                          (r.removeCompositeAt(t, n),
                          r.setModified(t, !0, !0, !1)),
                        i)
                      )
                        for (var o = 0; o < t.composites.length; o++)
                          r.removeComposite(t.composites[o], e, !0);
                      return t;
                    }),
                    (r.removeCompositeAt = function (t, e) {
                      return (
                        t.composites.splice(e, 1),
                        r.setModified(t, !0, !0, !1),
                        t
                      );
                    }),
                    (r.addBody = function (t, e) {
                      return t.bodies.push(e), r.setModified(t, !0, !0, !1), t;
                    }),
                    (r.removeBody = function (t, e, i) {
                      var n = s.indexOf(t.bodies, e);
                      if (
                        (-1 !== n &&
                          (r.removeBodyAt(t, n), r.setModified(t, !0, !0, !1)),
                        i)
                      )
                        for (var o = 0; o < t.composites.length; o++)
                          r.removeBody(t.composites[o], e, !0);
                      return t;
                    }),
                    (r.removeBodyAt = function (t, e) {
                      return (
                        t.bodies.splice(e, 1), r.setModified(t, !0, !0, !1), t
                      );
                    }),
                    (r.addConstraint = function (t, e) {
                      return (
                        t.constraints.push(e), r.setModified(t, !0, !0, !1), t
                      );
                    }),
                    (r.removeConstraint = function (t, e, i) {
                      var n = s.indexOf(t.constraints, e);
                      if ((-1 !== n && r.removeConstraintAt(t, n), i))
                        for (var o = 0; o < t.composites.length; o++)
                          r.removeConstraint(t.composites[o], e, !0);
                      return t;
                    }),
                    (r.removeConstraintAt = function (t, e) {
                      return (
                        t.constraints.splice(e, 1),
                        r.setModified(t, !0, !0, !1),
                        t
                      );
                    }),
                    (r.clear = function (t, e, i) {
                      if (i)
                        for (var n = 0; n < t.composites.length; n++)
                          r.clear(t.composites[n], e, !0);
                      return (
                        e
                          ? (t.bodies = t.bodies.filter(function (t) {
                              return t.isStatic;
                            }))
                          : (t.bodies.length = 0),
                        (t.constraints.length = 0),
                        (t.composites.length = 0),
                        r.setModified(t, !0, !0, !1),
                        t
                      );
                    }),
                    (r.allBodies = function (t) {
                      for (
                        var e = [].concat(t.bodies), i = 0;
                        i < t.composites.length;
                        i++
                      )
                        e = e.concat(r.allBodies(t.composites[i]));
                      return e;
                    }),
                    (r.allConstraints = function (t) {
                      for (
                        var e = [].concat(t.constraints), i = 0;
                        i < t.composites.length;
                        i++
                      )
                        e = e.concat(r.allConstraints(t.composites[i]));
                      return e;
                    }),
                    (r.allComposites = function (t) {
                      for (
                        var e = [].concat(t.composites), i = 0;
                        i < t.composites.length;
                        i++
                      )
                        e = e.concat(r.allComposites(t.composites[i]));
                      return e;
                    }),
                    (r.get = function (t, e, i) {
                      var n, s;
                      switch (i) {
                        case "body":
                          n = r.allBodies(t);
                          break;
                        case "constraint":
                          n = r.allConstraints(t);
                          break;
                        case "composite":
                          n = r.allComposites(t).concat(t);
                      }
                      return n
                        ? 0 ===
                          (s = n.filter(function (t) {
                            return t.id.toString() === e.toString();
                          })).length
                          ? null
                          : s[0]
                        : null;
                    }),
                    (r.move = function (t, e, i) {
                      return r.remove(t, e), r.add(i, e), t;
                    }),
                    (r.rebase = function (t) {
                      for (
                        var e = r
                            .allBodies(t)
                            .concat(r.allConstraints(t))
                            .concat(r.allComposites(t)),
                          i = 0;
                        i < e.length;
                        i++
                      )
                        e[i].id = s.nextId();
                      return r.setModified(t, !0, !0, !1), t;
                    }),
                    (r.translate = function (t, e, i) {
                      for (
                        var n = i ? r.allBodies(t) : t.bodies, s = 0;
                        s < n.length;
                        s++
                      )
                        a.translate(n[s], e);
                      return r.setModified(t, !0, !0, !1), t;
                    }),
                    (r.rotate = function (t, e, i, n) {
                      for (
                        var s = Math.cos(e),
                          o = Math.sin(e),
                          l = n ? r.allBodies(t) : t.bodies,
                          h = 0;
                        h < l.length;
                        h++
                      ) {
                        var c = l[h],
                          u = c.position.x - i.x,
                          d = c.position.y - i.y;
                        a.setPosition(c, {
                          x: i.x + (u * s - d * o),
                          y: i.y + (u * o + d * s),
                        }),
                          a.rotate(c, e);
                      }
                      return r.setModified(t, !0, !0, !1), t;
                    }),
                    (r.scale = function (t, e, i, n, s) {
                      for (
                        var o = s ? r.allBodies(t) : t.bodies, l = 0;
                        l < o.length;
                        l++
                      ) {
                        var h = o[l],
                          c = h.position.x - n.x,
                          u = h.position.y - n.y;
                        a.setPosition(h, { x: n.x + c * e, y: n.y + u * i }),
                          a.scale(h, e, i);
                      }
                      return r.setModified(t, !0, !0, !1), t;
                    }),
                    (r.bounds = function (t) {
                      for (
                        var e = r.allBodies(t), i = [], n = 0;
                        n < e.length;
                        n += 1
                      ) {
                        var s = e[n];
                        i.push(s.bounds.min, s.bounds.max);
                      }
                      return o.create(i);
                    });
                },
                {
                  "../core/Common": 14,
                  "../core/Events": 16,
                  "../geometry/Bounds": 26,
                  "./Body": 1,
                },
              ],
              3: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Composite"),
                    s = (t("../constraint/Constraint"), t("../core/Common"));
                  r.create = function (t) {
                    var e = n.create();
                    return s.extend(
                      e,
                      {
                        label: "World",
                        gravity: { x: 0, y: 1, scale: 0.001 },
                        bounds: {
                          min: { x: -1 / 0, y: -1 / 0 },
                          max: { x: 1 / 0, y: 1 / 0 },
                        },
                      },
                      t
                    );
                  };
                },
                {
                  "../constraint/Constraint": 12,
                  "../core/Common": 14,
                  "./Composite": 2,
                },
              ],
              4: [
                function (t, e, i) {
                  var r = {};
                  ((e.exports = r).create = function (t) {
                    return {
                      id: r.id(t),
                      vertex: t,
                      normalImpulse: 0,
                      tangentImpulse: 0,
                    };
                  }),
                    (r.id = function (t) {
                      return t.body.id + "_" + t.index;
                    });
                },
                {},
              ],
              5: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./SAT"),
                    s = t("./Pair"),
                    o = t("../geometry/Bounds");
                  (r.collisions = function (t, e) {
                    for (
                      var i = [], a = e.pairs.table, l = 0;
                      l < t.length;
                      l++
                    ) {
                      var h = t[l][0],
                        c = t[l][1];
                      if (
                        ((!h.isStatic && !h.isSleeping) ||
                          (!c.isStatic && !c.isSleeping)) &&
                        r.canCollide(h.collisionFilter, c.collisionFilter) &&
                        o.overlaps(h.bounds, c.bounds)
                      )
                        for (
                          var u = 1 < h.parts.length ? 1 : 0;
                          u < h.parts.length;
                          u++
                        )
                          for (
                            var d = h.parts[u], f = 1 < c.parts.length ? 1 : 0;
                            f < c.parts.length;
                            f++
                          ) {
                            var p = c.parts[f];
                            if (
                              (d === h && p === c) ||
                              o.overlaps(d.bounds, p.bounds)
                            ) {
                              var g,
                                m = a[s.id(d, p)];
                              g = m && m.isActive ? m.collision : null;
                              var _ = n.collides(d, p, g);
                              _.collided && i.push(_);
                            }
                          }
                    }
                    return i;
                  }),
                    (r.canCollide = function (t, e) {
                      return t.group === e.group && 0 !== t.group
                        ? 0 < t.group
                        : 0 != (t.mask & e.category) &&
                            0 != (e.mask & t.category);
                    });
                },
                { "../geometry/Bounds": 26, "./Pair": 7, "./SAT": 11 },
              ],
              6: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Pair"),
                    s = t("./Detector"),
                    o = t("../core/Common");
                  (r.create = function (t) {
                    var e = {
                      controller: r,
                      detector: s.collisions,
                      buckets: {},
                      pairs: {},
                      pairsList: [],
                      bucketWidth: 48,
                      bucketHeight: 48,
                    };
                    return o.extend(e, t);
                  }),
                    (r.update = function (t, e, i, n) {
                      var s,
                        o,
                        a,
                        l,
                        h,
                        c = i.world,
                        u = t.buckets,
                        d = !1;
                      for (s = 0; s < e.length; s++) {
                        var f = e[s];
                        if (
                          (!f.isSleeping || n) &&
                          !(
                            f.bounds.max.x < c.bounds.min.x ||
                            f.bounds.min.x > c.bounds.max.x ||
                            f.bounds.max.y < c.bounds.min.y ||
                            f.bounds.min.y > c.bounds.max.y
                          )
                        ) {
                          var p = r._getRegion(t, f);
                          if (!f.region || p.id !== f.region.id || n) {
                            (f.region && !n) || (f.region = p);
                            var g = r._regionUnion(p, f.region);
                            for (o = g.startCol; o <= g.endCol; o++)
                              for (a = g.startRow; a <= g.endRow; a++) {
                                l = u[(h = r._getBucketId(o, a))];
                                var m =
                                    o >= p.startCol &&
                                    o <= p.endCol &&
                                    a >= p.startRow &&
                                    a <= p.endRow,
                                  _ =
                                    o >= f.region.startCol &&
                                    o <= f.region.endCol &&
                                    a >= f.region.startRow &&
                                    a <= f.region.endRow;
                                !m &&
                                  _ &&
                                  _ &&
                                  l &&
                                  r._bucketRemoveBody(t, l, f),
                                  (f.region === p || (m && !_) || n) &&
                                    (l || (l = r._createBucket(u, h)),
                                    r._bucketAddBody(t, l, f));
                              }
                            (f.region = p), (d = !0);
                          }
                        }
                      }
                      d && (t.pairsList = r._createActivePairsList(t));
                    }),
                    (r.clear = function (t) {
                      (t.buckets = {}), (t.pairs = {}), (t.pairsList = []);
                    }),
                    (r._regionUnion = function (t, e) {
                      var i = Math.min(t.startCol, e.startCol),
                        n = Math.max(t.endCol, e.endCol),
                        s = Math.min(t.startRow, e.startRow),
                        o = Math.max(t.endRow, e.endRow);
                      return r._createRegion(i, n, s, o);
                    }),
                    (r._getRegion = function (t, e) {
                      var i = e.bounds,
                        n = Math.floor(i.min.x / t.bucketWidth),
                        s = Math.floor(i.max.x / t.bucketWidth),
                        o = Math.floor(i.min.y / t.bucketHeight),
                        a = Math.floor(i.max.y / t.bucketHeight);
                      return r._createRegion(n, s, o, a);
                    }),
                    (r._createRegion = function (t, e, i, r) {
                      return {
                        id: t + "," + e + "," + i + "," + r,
                        startCol: t,
                        endCol: e,
                        startRow: i,
                        endRow: r,
                      };
                    }),
                    (r._getBucketId = function (t, e) {
                      return "C" + t + "R" + e;
                    }),
                    (r._createBucket = function (t, e) {
                      return (t[e] = []);
                    }),
                    (r._bucketAddBody = function (t, e, i) {
                      for (var r = 0; r < e.length; r++) {
                        var s = e[r];
                        if (!(i.id === s.id || (i.isStatic && s.isStatic))) {
                          var o = n.id(i, s),
                            a = t.pairs[o];
                          a ? (a[2] += 1) : (t.pairs[o] = [i, s, 1]);
                        }
                      }
                      e.push(i);
                    }),
                    (r._bucketRemoveBody = function (t, e, i) {
                      e.splice(o.indexOf(e, i), 1);
                      for (var r = 0; r < e.length; r++) {
                        var s = e[r],
                          a = n.id(i, s),
                          l = t.pairs[a];
                        l && (l[2] -= 1);
                      }
                    }),
                    (r._createActivePairsList = function (t) {
                      var e,
                        i,
                        r = [];
                      e = o.keys(t.pairs);
                      for (var n = 0; n < e.length; n++)
                        0 < (i = t.pairs[e[n]])[2]
                          ? r.push(i)
                          : delete t.pairs[e[n]];
                      return r;
                    });
                },
                { "../core/Common": 14, "./Detector": 5, "./Pair": 7 },
              ],
              7: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Contact");
                  (r.create = function (t, e) {
                    var i = t.bodyA,
                      n = t.bodyB,
                      s = t.parentA,
                      o = t.parentB,
                      a = {
                        id: r.id(i, n),
                        bodyA: i,
                        bodyB: n,
                        contacts: {},
                        activeContacts: [],
                        separation: 0,
                        isActive: !0,
                        isSensor: i.isSensor || n.isSensor,
                        timeCreated: e,
                        timeUpdated: e,
                        inverseMass: s.inverseMass + o.inverseMass,
                        friction: Math.min(s.friction, o.friction),
                        frictionStatic: Math.max(
                          s.frictionStatic,
                          o.frictionStatic
                        ),
                        restitution: Math.max(s.restitution, o.restitution),
                        slop: Math.max(s.slop, o.slop),
                      };
                    return r.update(a, t, e), a;
                  }),
                    (r.update = function (t, e, i) {
                      var s = t.contacts,
                        o = e.supports,
                        a = t.activeContacts,
                        l = e.parentA,
                        h = e.parentB;
                      if (
                        ((t.collision = e),
                        (t.inverseMass = l.inverseMass + h.inverseMass),
                        (t.friction = Math.min(l.friction, h.friction)),
                        (t.frictionStatic = Math.max(
                          l.frictionStatic,
                          h.frictionStatic
                        )),
                        (t.restitution = Math.max(
                          l.restitution,
                          h.restitution
                        )),
                        (t.slop = Math.max(l.slop, h.slop)),
                        (a.length = 0),
                        e.collided)
                      ) {
                        for (var c = 0; c < o.length; c++) {
                          var u = o[c],
                            d = n.id(u),
                            f = s[d];
                          f ? a.push(f) : a.push((s[d] = n.create(u)));
                        }
                        (t.separation = e.depth), r.setActive(t, !0, i);
                      } else !0 === t.isActive && r.setActive(t, !1, i);
                    }),
                    (r.setActive = function (t, e, i) {
                      e
                        ? ((t.isActive = !0), (t.timeUpdated = i))
                        : ((t.isActive = !1), (t.activeContacts.length = 0));
                    }),
                    (r.id = function (t, e) {
                      return t.id < e.id
                        ? "A" + t.id + "B" + e.id
                        : "A" + e.id + "B" + t.id;
                    });
                },
                { "./Contact": 4 },
              ],
              8: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Pair"),
                    s = t("../core/Common");
                  (r._pairMaxIdleLife = 1e3),
                    (r.create = function (t) {
                      return s.extend(
                        {
                          table: {},
                          list: [],
                          collisionStart: [],
                          collisionActive: [],
                          collisionEnd: [],
                        },
                        t
                      );
                    }),
                    (r.update = function (t, e, i) {
                      var r,
                        o,
                        a,
                        l,
                        h = t.list,
                        c = t.table,
                        u = t.collisionStart,
                        d = t.collisionEnd,
                        f = t.collisionActive,
                        p = [];
                      for (
                        u.length = 0, d.length = 0, l = f.length = 0;
                        l < e.length;
                        l++
                      )
                        (r = e[l]).collided &&
                          ((o = n.id(r.bodyA, r.bodyB)),
                          p.push(o),
                          (a = c[o])
                            ? (a.isActive ? f.push(a) : u.push(a),
                              n.update(a, r, i))
                            : ((a = n.create(r, i)),
                              (c[o] = a),
                              u.push(a),
                              h.push(a)));
                      for (l = 0; l < h.length; l++)
                        (a = h[l]).isActive &&
                          -1 === s.indexOf(p, a.id) &&
                          (n.setActive(a, !1, i), d.push(a));
                    }),
                    (r.removeOld = function (t, e) {
                      var i,
                        n,
                        s,
                        o,
                        a = t.list,
                        l = t.table,
                        h = [];
                      for (o = 0; o < a.length; o++)
                        (n = (i = a[o]).collision).bodyA.isSleeping ||
                        n.bodyB.isSleeping
                          ? (i.timeUpdated = e)
                          : e - i.timeUpdated > r._pairMaxIdleLife && h.push(o);
                      for (o = 0; o < h.length; o++)
                        delete l[(i = a[(s = h[o] - o)]).id], a.splice(s, 1);
                    }),
                    (r.clear = function (t) {
                      return (
                        (t.table = {}),
                        (t.list.length = 0),
                        (t.collisionStart.length = 0),
                        (t.collisionActive.length = 0),
                        (t.collisionEnd.length = 0),
                        t
                      );
                    });
                },
                { "../core/Common": 14, "./Pair": 7 },
              ],
              9: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vector"),
                    s = t("./SAT"),
                    o = t("../geometry/Bounds"),
                    a = t("../factory/Bodies"),
                    l = t("../geometry/Vertices");
                  (r.collides = function (t, e) {
                    for (var i = [], r = 0; r < e.length; r++) {
                      var n = e[r];
                      if (o.overlaps(n.bounds, t.bounds))
                        for (
                          var a = 1 === n.parts.length ? 0 : 1;
                          a < n.parts.length;
                          a++
                        ) {
                          var l = n.parts[a];
                          if (o.overlaps(l.bounds, t.bounds)) {
                            var h = s.collides(l, t);
                            if (h.collided) {
                              i.push(h);
                              break;
                            }
                          }
                        }
                    }
                    return i;
                  }),
                    (r.ray = function (t, e, i, s) {
                      s = s || 1e-100;
                      for (
                        var o = n.angle(e, i),
                          l = n.magnitude(n.sub(e, i)),
                          h = 0.5 * (i.x + e.x),
                          c = 0.5 * (i.y + e.y),
                          u = a.rectangle(h, c, l, s, { angle: o }),
                          d = r.collides(u, t),
                          f = 0;
                        f < d.length;
                        f += 1
                      ) {
                        var p = d[f];
                        p.body = p.bodyB = p.bodyA;
                      }
                      return d;
                    }),
                    (r.region = function (t, e, i) {
                      for (var r = [], n = 0; n < t.length; n++) {
                        var s = t[n],
                          a = o.overlaps(s.bounds, e);
                        ((a && !i) || (!a && i)) && r.push(s);
                      }
                      return r;
                    }),
                    (r.point = function (t, e) {
                      for (var i = [], r = 0; r < t.length; r++) {
                        var n = t[r];
                        if (o.contains(n.bounds, e))
                          for (
                            var s = 1 === n.parts.length ? 0 : 1;
                            s < n.parts.length;
                            s++
                          ) {
                            var a = n.parts[s];
                            if (
                              o.contains(a.bounds, e) &&
                              l.contains(a.vertices, e)
                            ) {
                              i.push(n);
                              break;
                            }
                          }
                      }
                      return i;
                    });
                },
                {
                  "../factory/Bodies": 23,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                  "../geometry/Vertices": 29,
                  "./SAT": 11,
                },
              ],
              10: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vertices"),
                    s = t("../geometry/Vector"),
                    o = t("../core/Common"),
                    a = t("../geometry/Bounds");
                  (r._restingThresh = 4),
                    (r._restingThreshTangent = 6),
                    (r._positionDampen = 0.9),
                    (r._positionWarming = 0.8),
                    (r._frictionNormalMultiplier = 5),
                    (r.preSolvePosition = function (t) {
                      var e, i, r;
                      for (e = 0; e < t.length; e++)
                        (i = t[e]).isActive &&
                          ((r = i.activeContacts.length),
                          (i.collision.parentA.totalContacts += r),
                          (i.collision.parentB.totalContacts += r));
                    }),
                    (r.solvePosition = function (t, e) {
                      var i,
                        n,
                        o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        f = s._temp[0],
                        p = s._temp[1],
                        g = s._temp[2],
                        m = s._temp[3];
                      for (i = 0; i < t.length; i++)
                        (n = t[i]).isActive &&
                          !n.isSensor &&
                          ((a = (o = n.collision).parentA),
                          (l = o.parentB),
                          (h = o.normal),
                          (c = s.sub(
                            s.add(l.positionImpulse, l.position, f),
                            s.add(
                              a.positionImpulse,
                              s.sub(l.position, o.penetration, p),
                              g
                            ),
                            m
                          )),
                          (n.separation = s.dot(h, c)));
                      for (i = 0; i < t.length; i++)
                        (n = t[i]).isActive &&
                          !n.isSensor &&
                          ((a = (o = n.collision).parentA),
                          (l = o.parentB),
                          (h = o.normal),
                          (d = (n.separation - n.slop) * e),
                          (a.isStatic || l.isStatic) && (d *= 2),
                          a.isStatic ||
                            a.isSleeping ||
                            ((u = r._positionDampen / a.totalContacts),
                            (a.positionImpulse.x += h.x * d * u),
                            (a.positionImpulse.y += h.y * d * u)),
                          l.isStatic ||
                            l.isSleeping ||
                            ((u = r._positionDampen / l.totalContacts),
                            (l.positionImpulse.x -= h.x * d * u),
                            (l.positionImpulse.y -= h.y * d * u)));
                    }),
                    (r.postSolvePosition = function (t) {
                      for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (
                          (i.totalContacts = 0) !== i.positionImpulse.x ||
                          0 !== i.positionImpulse.y
                        ) {
                          for (var o = 0; o < i.parts.length; o++) {
                            var l = i.parts[o];
                            n.translate(l.vertices, i.positionImpulse),
                              a.update(l.bounds, l.vertices, i.velocity),
                              (l.position.x += i.positionImpulse.x),
                              (l.position.y += i.positionImpulse.y);
                          }
                          (i.positionPrev.x += i.positionImpulse.x),
                            (i.positionPrev.y += i.positionImpulse.y),
                            s.dot(i.positionImpulse, i.velocity) < 0
                              ? ((i.positionImpulse.x = 0),
                                (i.positionImpulse.y = 0))
                              : ((i.positionImpulse.x *= r._positionWarming),
                                (i.positionImpulse.y *= r._positionWarming));
                        }
                      }
                    }),
                    (r.preSolveVelocity = function (t) {
                      var e,
                        i,
                        r,
                        n,
                        o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        f,
                        p,
                        g,
                        m = s._temp[0],
                        _ = s._temp[1];
                      for (e = 0; e < t.length; e++)
                        if ((r = t[e]).isActive && !r.isSensor)
                          for (
                            n = r.activeContacts,
                              a = (o = r.collision).parentA,
                              l = o.parentB,
                              h = o.normal,
                              c = o.tangent,
                              i = 0;
                            i < n.length;
                            i++
                          )
                            (d = (u = n[i]).vertex),
                              (f = u.normalImpulse),
                              (p = u.tangentImpulse),
                              (0 === f && 0 === p) ||
                                ((m.x = h.x * f + c.x * p),
                                (m.y = h.y * f + c.y * p),
                                a.isStatic ||
                                  a.isSleeping ||
                                  ((g = s.sub(d, a.position, _)),
                                  (a.positionPrev.x += m.x * a.inverseMass),
                                  (a.positionPrev.y += m.y * a.inverseMass),
                                  (a.anglePrev +=
                                    s.cross(g, m) * a.inverseInertia)),
                                l.isStatic ||
                                  l.isSleeping ||
                                  ((g = s.sub(d, l.position, _)),
                                  (l.positionPrev.x -= m.x * l.inverseMass),
                                  (l.positionPrev.y -= m.y * l.inverseMass),
                                  (l.anglePrev -=
                                    s.cross(g, m) * l.inverseInertia)));
                    }),
                    (r.solveVelocity = function (t, e) {
                      for (
                        var i = e * e,
                          n = s._temp[0],
                          a = s._temp[1],
                          l = s._temp[2],
                          h = s._temp[3],
                          c = s._temp[4],
                          u = s._temp[5],
                          d = 0;
                        d < t.length;
                        d++
                      ) {
                        var f = t[d];
                        if (f.isActive && !f.isSensor) {
                          var p = f.collision,
                            g = p.parentA,
                            m = p.parentB,
                            _ = p.normal,
                            v = p.tangent,
                            y = f.activeContacts,
                            x = 1 / y.length;
                          (g.velocity.x = g.position.x - g.positionPrev.x),
                            (g.velocity.y = g.position.y - g.positionPrev.y),
                            (m.velocity.x = m.position.x - m.positionPrev.x),
                            (m.velocity.y = m.position.y - m.positionPrev.y),
                            (g.angularVelocity = g.angle - g.anglePrev),
                            (m.angularVelocity = m.angle - m.anglePrev);
                          for (var b = 0; b < y.length; b++) {
                            var w = y[b],
                              S = w.vertex,
                              T = s.sub(S, g.position, a),
                              P = s.sub(S, m.position, l),
                              C = s.add(
                                g.velocity,
                                s.mult(s.perp(T), g.angularVelocity),
                                h
                              ),
                              k = s.add(
                                m.velocity,
                                s.mult(s.perp(P), m.angularVelocity),
                                c
                              ),
                              A = s.sub(C, k, u),
                              M = s.dot(_, A),
                              R = s.dot(v, A),
                              O = Math.abs(R),
                              E = o.sign(R),
                              F = (1 + f.restitution) * M,
                              B =
                                o.clamp(f.separation + M, 0, 1) *
                                r._frictionNormalMultiplier,
                              I = R,
                              L = 1 / 0;
                            O > f.friction * f.frictionStatic * B * i &&
                              ((L = O),
                              (I = o.clamp(f.friction * E * i, -L, L)));
                            var N = s.cross(T, _),
                              U = s.cross(P, _),
                              V =
                                x /
                                (g.inverseMass +
                                  m.inverseMass +
                                  g.inverseInertia * N * N +
                                  m.inverseInertia * U * U);
                            if (
                              ((F *= V),
                              (I *= V),
                              M < 0 && M * M > r._restingThresh * i)
                            )
                              w.normalImpulse = 0;
                            else {
                              var j = w.normalImpulse;
                              (w.normalImpulse = Math.min(
                                w.normalImpulse + F,
                                0
                              )),
                                (F = w.normalImpulse - j);
                            }
                            if (R * R > r._restingThreshTangent * i)
                              w.tangentImpulse = 0;
                            else {
                              var D = w.tangentImpulse;
                              (w.tangentImpulse = o.clamp(
                                w.tangentImpulse + I,
                                -L,
                                L
                              )),
                                (I = w.tangentImpulse - D);
                            }
                            (n.x = _.x * F + v.x * I),
                              (n.y = _.y * F + v.y * I),
                              g.isStatic ||
                                g.isSleeping ||
                                ((g.positionPrev.x += n.x * g.inverseMass),
                                (g.positionPrev.y += n.y * g.inverseMass),
                                (g.anglePrev +=
                                  s.cross(T, n) * g.inverseInertia)),
                              m.isStatic ||
                                m.isSleeping ||
                                ((m.positionPrev.x -= n.x * m.inverseMass),
                                (m.positionPrev.y -= n.y * m.inverseMass),
                                (m.anglePrev -=
                                  s.cross(P, n) * m.inverseInertia));
                          }
                        }
                      }
                    });
                },
                {
                  "../core/Common": 14,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                  "../geometry/Vertices": 29,
                },
              ],
              11: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vertices"),
                    s = t("../geometry/Vector");
                  (r.collides = function (t, e, i) {
                    var o,
                      a,
                      l,
                      h,
                      c = !1;
                    if (i) {
                      var u = t.parent,
                        d = e.parent,
                        f =
                          u.speed * u.speed +
                          u.angularSpeed * u.angularSpeed +
                          d.speed * d.speed +
                          d.angularSpeed * d.angularSpeed;
                      (c = i && i.collided && f < 0.2), (h = i);
                    } else h = { collided: !1, bodyA: t, bodyB: e };
                    if (i && c) {
                      var p = h.axisBody,
                        g = p === t ? e : t,
                        m = [p.axes[i.axisNumber]];
                      if (
                        ((l = r._overlapAxes(p.vertices, g.vertices, m)),
                        (h.reused = !0),
                        l.overlap <= 0)
                      )
                        return (h.collided = !1), h;
                    } else {
                      if (
                        (o = r._overlapAxes(t.vertices, e.vertices, t.axes))
                          .overlap <= 0
                      )
                        return (h.collided = !1), h;
                      if (
                        (a = r._overlapAxes(e.vertices, t.vertices, e.axes))
                          .overlap <= 0
                      )
                        return (h.collided = !1), h;
                      o.overlap < a.overlap
                        ? ((l = o), (h.axisBody = t))
                        : ((l = a), (h.axisBody = e)),
                        (h.axisNumber = l.axisNumber);
                    }
                    (h.bodyA = t.id < e.id ? t : e),
                      (h.bodyB = t.id < e.id ? e : t),
                      (h.collided = !0),
                      (h.depth = l.overlap),
                      (h.parentA = h.bodyA.parent),
                      (h.parentB = h.bodyB.parent),
                      (t = h.bodyA),
                      (e = h.bodyB),
                      s.dot(l.axis, s.sub(e.position, t.position)) < 0
                        ? (h.normal = { x: l.axis.x, y: l.axis.y })
                        : (h.normal = { x: -l.axis.x, y: -l.axis.y }),
                      (h.tangent = s.perp(h.normal)),
                      (h.penetration = h.penetration || {}),
                      (h.penetration.x = h.normal.x * h.depth),
                      (h.penetration.y = h.normal.y * h.depth);
                    var _ = r._findSupports(t, e, h.normal),
                      v = [];
                    if (
                      (n.contains(t.vertices, _[0]) && v.push(_[0]),
                      n.contains(t.vertices, _[1]) && v.push(_[1]),
                      v.length < 2)
                    ) {
                      var y = r._findSupports(e, t, s.neg(h.normal));
                      n.contains(e.vertices, y[0]) && v.push(y[0]),
                        v.length < 2 &&
                          n.contains(e.vertices, y[1]) &&
                          v.push(y[1]);
                    }
                    return v.length < 1 && (v = [_[0]]), (h.supports = v), h;
                  }),
                    (r._overlapAxes = function (t, e, i) {
                      for (
                        var n,
                          o,
                          a = s._temp[0],
                          l = s._temp[1],
                          h = { overlap: Number.MAX_VALUE },
                          c = 0;
                        c < i.length;
                        c++
                      ) {
                        if (
                          ((o = i[c]),
                          r._projectToAxis(a, t, o),
                          r._projectToAxis(l, e, o),
                          (n = Math.min(a.max - l.min, l.max - a.min)) <= 0)
                        )
                          return (h.overlap = n), h;
                        n < h.overlap &&
                          ((h.overlap = n), (h.axis = o), (h.axisNumber = c));
                      }
                      return h;
                    }),
                    (r._projectToAxis = function (t, e, i) {
                      for (
                        var r = s.dot(e[0], i), n = r, o = 1;
                        o < e.length;
                        o += 1
                      ) {
                        var a = s.dot(e[o], i);
                        n < a ? (n = a) : a < r && (r = a);
                      }
                      (t.min = r), (t.max = n);
                    }),
                    (r._findSupports = function (t, e, i) {
                      for (
                        var r,
                          n,
                          o,
                          a,
                          l = Number.MAX_VALUE,
                          h = s._temp[0],
                          c = e.vertices,
                          u = t.position,
                          d = 0;
                        d < c.length;
                        d++
                      )
                        (n = c[d]),
                          (h.x = n.x - u.x),
                          (h.y = n.y - u.y),
                          (r = -s.dot(i, h)) < l && ((l = r), (o = n));
                      return (
                        (n = c[0 <= o.index - 1 ? o.index - 1 : c.length - 1]),
                        (h.x = n.x - u.x),
                        (h.y = n.y - u.y),
                        (l = -s.dot(i, h)),
                        (a = n),
                        (n = c[(o.index + 1) % c.length]),
                        (h.x = n.x - u.x),
                        (h.y = n.y - u.y),
                        (r = -s.dot(i, h)) < l && (a = n),
                        [o, a]
                      );
                    });
                },
                { "../geometry/Vector": 28, "../geometry/Vertices": 29 },
              ],
              12: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vertices"),
                    s = t("../geometry/Vector"),
                    o = t("../core/Sleeping"),
                    a = t("../geometry/Bounds"),
                    l = t("../geometry/Axes"),
                    h = t("../core/Common");
                  (r._warming = 0.4),
                    (r._torqueDampen = 1),
                    (r._minLength = 1e-6),
                    (r.create = function (t) {
                      var e = t;
                      e.bodyA && !e.pointA && (e.pointA = { x: 0, y: 0 }),
                        e.bodyB && !e.pointB && (e.pointB = { x: 0, y: 0 });
                      var i = e.bodyA
                          ? s.add(e.bodyA.position, e.pointA)
                          : e.pointA,
                        r = e.bodyB
                          ? s.add(e.bodyB.position, e.pointB)
                          : e.pointB,
                        n = s.magnitude(s.sub(i, r));
                      (e.length = void 0 !== e.length ? e.length : n),
                        (e.id = e.id || h.nextId()),
                        (e.label = e.label || "Constraint"),
                        (e.type = "constraint"),
                        (e.stiffness = e.stiffness || (0 < e.length ? 1 : 0.7)),
                        (e.damping = e.damping || 0),
                        (e.angularStiffness = e.angularStiffness || 0),
                        (e.angleA = e.bodyA ? e.bodyA.angle : e.angleA),
                        (e.angleB = e.bodyB ? e.bodyB.angle : e.angleB),
                        (e.plugin = {});
                      var o = {
                        visible: !0,
                        lineWidth: 2,
                        strokeStyle: "#ffffff",
                        type: "line",
                        anchors: !0,
                      };
                      return (
                        0 === e.length && 0.1 < e.stiffness
                          ? ((o.type = "pin"), (o.anchors = !1))
                          : e.stiffness < 0.9 && (o.type = "spring"),
                        (e.render = h.extend(o, e.render)),
                        e
                      );
                    }),
                    (r.preSolveAll = function (t) {
                      for (var e = 0; e < t.length; e += 1) {
                        var i = t[e],
                          r = i.constraintImpulse;
                        i.isStatic ||
                          (0 === r.x && 0 === r.y && 0 === r.angle) ||
                          ((i.position.x += r.x),
                          (i.position.y += r.y),
                          (i.angle += r.angle));
                      }
                    }),
                    (r.solveAll = function (t, e) {
                      for (var i = 0; i < t.length; i += 1) {
                        var n = t[i],
                          s = !n.bodyA || (n.bodyA && n.bodyA.isStatic),
                          o = !n.bodyB || (n.bodyB && n.bodyB.isStatic);
                        (s || o) && r.solve(t[i], e);
                      }
                      for (i = 0; i < t.length; i += 1)
                        (s =
                          !(n = t[i]).bodyA || (n.bodyA && n.bodyA.isStatic)),
                          (o = !n.bodyB || (n.bodyB && n.bodyB.isStatic)),
                          s || o || r.solve(t[i], e);
                    }),
                    (r.solve = function (t, e) {
                      var i = t.bodyA,
                        n = t.bodyB,
                        o = t.pointA,
                        a = t.pointB;
                      if (i || n) {
                        i &&
                          !i.isStatic &&
                          (s.rotate(o, i.angle - t.angleA, o),
                          (t.angleA = i.angle)),
                          n &&
                            !n.isStatic &&
                            (s.rotate(a, n.angle - t.angleB, a),
                            (t.angleB = n.angle));
                        var l = o,
                          h = a;
                        if (
                          (i && (l = s.add(i.position, o)),
                          n && (h = s.add(n.position, a)),
                          l && h)
                        ) {
                          var c = s.sub(l, h),
                            u = s.magnitude(c);
                          u < r._minLength && (u = r._minLength);
                          var d,
                            f,
                            p,
                            g,
                            m,
                            _ = (u - t.length) / u,
                            v = t.stiffness < 1 ? t.stiffness * e : t.stiffness,
                            y = s.mult(c, _ * v),
                            x =
                              (i ? i.inverseMass : 0) + (n ? n.inverseMass : 0),
                            b =
                              x +
                              ((i ? i.inverseInertia : 0) +
                                (n ? n.inverseInertia : 0));
                          if (t.damping) {
                            var w = s.create();
                            (p = s.div(c, u)),
                              (m = s.sub(
                                (n && s.sub(n.position, n.positionPrev)) || w,
                                (i && s.sub(i.position, i.positionPrev)) || w
                              )),
                              (g = s.dot(p, m));
                          }
                          i &&
                            !i.isStatic &&
                            ((f = i.inverseMass / x),
                            (i.constraintImpulse.x -= y.x * f),
                            (i.constraintImpulse.y -= y.y * f),
                            (i.position.x -= y.x * f),
                            (i.position.y -= y.y * f),
                            t.damping &&
                              ((i.positionPrev.x -= t.damping * p.x * g * f),
                              (i.positionPrev.y -= t.damping * p.y * g * f)),
                            (d =
                              (s.cross(o, y) / b) *
                              r._torqueDampen *
                              i.inverseInertia *
                              (1 - t.angularStiffness)),
                            (i.constraintImpulse.angle -= d),
                            (i.angle -= d)),
                            n &&
                              !n.isStatic &&
                              ((f = n.inverseMass / x),
                              (n.constraintImpulse.x += y.x * f),
                              (n.constraintImpulse.y += y.y * f),
                              (n.position.x += y.x * f),
                              (n.position.y += y.y * f),
                              t.damping &&
                                ((n.positionPrev.x += t.damping * p.x * g * f),
                                (n.positionPrev.y += t.damping * p.y * g * f)),
                              (d =
                                (s.cross(a, y) / b) *
                                r._torqueDampen *
                                n.inverseInertia *
                                (1 - t.angularStiffness)),
                              (n.constraintImpulse.angle += d),
                              (n.angle += d));
                        }
                      }
                    }),
                    (r.postSolveAll = function (t) {
                      for (var e = 0; e < t.length; e++) {
                        var i = t[e],
                          h = i.constraintImpulse;
                        if (
                          !(
                            i.isStatic ||
                            (0 === h.x && 0 === h.y && 0 === h.angle)
                          )
                        ) {
                          o.set(i, !1);
                          for (var c = 0; c < i.parts.length; c++) {
                            var u = i.parts[c];
                            n.translate(u.vertices, h),
                              0 < c &&
                                ((u.position.x += h.x), (u.position.y += h.y)),
                              0 !== h.angle &&
                                (n.rotate(u.vertices, h.angle, i.position),
                                l.rotate(u.axes, h.angle),
                                0 < c &&
                                  s.rotateAbout(
                                    u.position,
                                    h.angle,
                                    i.position,
                                    u.position
                                  )),
                              a.update(u.bounds, u.vertices, i.velocity);
                          }
                          (h.angle *= r._warming),
                            (h.x *= r._warming),
                            (h.y *= r._warming);
                        }
                      }
                    });
                },
                {
                  "../core/Common": 14,
                  "../core/Sleeping": 22,
                  "../geometry/Axes": 25,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                  "../geometry/Vertices": 29,
                },
              ],
              13: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vertices"),
                    s = t("../core/Sleeping"),
                    o = t("../core/Mouse"),
                    a = t("../core/Events"),
                    l = t("../collision/Detector"),
                    h = t("./Constraint"),
                    c = t("../body/Composite"),
                    u = t("../core/Common"),
                    d = t("../geometry/Bounds");
                  (r.create = function (t, e) {
                    var i = (t ? t.mouse : null) || (e ? e.mouse : null);
                    i ||
                      (t && t.render && t.render.canvas
                        ? (i = o.create(t.render.canvas))
                        : e && e.element
                        ? (i = o.create(e.element))
                        : ((i = o.create()),
                          u.warn(
                            "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                          )));
                    var n = {
                        type: "mouseConstraint",
                        mouse: i,
                        element: null,
                        body: null,
                        constraint: h.create({
                          label: "Mouse Constraint",
                          pointA: i.position,
                          pointB: { x: 0, y: 0 },
                          length: 0.01,
                          stiffness: 0.1,
                          angularStiffness: 1,
                          render: { strokeStyle: "#90EE90", lineWidth: 3 },
                        }),
                        collisionFilter: {
                          category: 1,
                          mask: 4294967295,
                          group: 0,
                        },
                      },
                      s = u.extend(n, e);
                    return (
                      a.on(t, "beforeUpdate", function () {
                        var e = c.allBodies(t.world);
                        r.update(s, e), r._triggerEvents(s);
                      }),
                      s
                    );
                  }),
                    (r.update = function (t, e) {
                      var i = t.mouse,
                        r = t.constraint,
                        o = t.body;
                      if (0 === i.button) {
                        if (r.bodyB)
                          s.set(r.bodyB, !1), (r.pointA = i.position);
                        else
                          for (var h = 0; h < e.length; h++)
                            if (
                              ((o = e[h]),
                              d.contains(o.bounds, i.position) &&
                                l.canCollide(
                                  o.collisionFilter,
                                  t.collisionFilter
                                ))
                            )
                              for (
                                var c = 1 < o.parts.length ? 1 : 0;
                                c < o.parts.length;
                                c++
                              ) {
                                var u = o.parts[c];
                                if (n.contains(u.vertices, i.position)) {
                                  (r.pointA = i.position),
                                    (r.bodyB = t.body = o),
                                    (r.pointB = {
                                      x: i.position.x - o.position.x,
                                      y: i.position.y - o.position.y,
                                    }),
                                    (r.angleB = o.angle),
                                    s.set(o, !1),
                                    a.trigger(t, "startdrag", {
                                      mouse: i,
                                      body: o,
                                    });
                                  break;
                                }
                              }
                      } else
                        (r.bodyB = t.body = null),
                          (r.pointB = null),
                          o && a.trigger(t, "enddrag", { mouse: i, body: o });
                    }),
                    (r._triggerEvents = function (t) {
                      var e = t.mouse,
                        i = e.sourceEvents;
                      i.mousemove && a.trigger(t, "mousemove", { mouse: e }),
                        i.mousedown && a.trigger(t, "mousedown", { mouse: e }),
                        i.mouseup && a.trigger(t, "mouseup", { mouse: e }),
                        o.clearSourceEvents(e);
                    });
                },
                {
                  "../body/Composite": 2,
                  "../collision/Detector": 5,
                  "../core/Common": 14,
                  "../core/Events": 16,
                  "../core/Mouse": 19,
                  "../core/Sleeping": 22,
                  "../geometry/Bounds": 26,
                  "../geometry/Vertices": 29,
                  "./Constraint": 12,
                },
              ],
              14: [
                function (e, i, n) {
                  (function (t) {
                    var n = {};
                    (i.exports = n),
                      (function () {
                        (n._nextId = 0),
                          (n._seed = 0),
                          (n._nowStartTime = +new Date()),
                          (n.extend = function (t, e) {
                            var i, r;
                            r =
                              "boolean" == typeof e
                                ? ((i = 2), e)
                                : ((i = 1), !0);
                            for (var s = i; s < arguments.length; s++) {
                              var o = arguments[s];
                              if (o)
                                for (var a in o)
                                  r && o[a] && o[a].constructor === Object
                                    ? t[a] && t[a].constructor !== Object
                                      ? (t[a] = o[a])
                                      : ((t[a] = t[a] || {}),
                                        n.extend(t[a], r, o[a]))
                                    : (t[a] = o[a]);
                            }
                            return t;
                          }),
                          (n.clone = function (t, e) {
                            return n.extend({}, e, t);
                          }),
                          (n.keys = function (t) {
                            if (Object.keys) return Object.keys(t);
                            var e = [];
                            for (var i in t) e.push(i);
                            return e;
                          }),
                          (n.values = function (t) {
                            var e = [];
                            if (Object.keys) {
                              for (
                                var i = Object.keys(t), r = 0;
                                r < i.length;
                                r++
                              )
                                e.push(t[i[r]]);
                              return e;
                            }
                            for (var n in t) e.push(t[n]);
                            return e;
                          }),
                          (n.get = function (t, e, i, r) {
                            e = e.split(".").slice(i, r);
                            for (var n = 0; n < e.length; n += 1) t = t[e[n]];
                            return t;
                          }),
                          (n.set = function (t, e, i, r, s) {
                            var o = e.split(".").slice(r, s);
                            return (n.get(t, e, 0, -1)[o[o.length - 1]] = i);
                          }),
                          (n.shuffle = function (t) {
                            for (var e = t.length - 1; 0 < e; e--) {
                              var i = Math.floor(n.random() * (e + 1)),
                                r = t[e];
                              (t[e] = t[i]), (t[i] = r);
                            }
                            return t;
                          }),
                          (n.choose = function (t) {
                            return t[Math.floor(n.random() * t.length)];
                          }),
                          (n.isElement = function (t) {
                            return "undefined" != typeof HTMLElement
                              ? t instanceof HTMLElement
                              : !!(t && t.nodeType && t.nodeName);
                          }),
                          (n.isArray = function (t) {
                            return (
                              "[object Array]" ===
                              Object.prototype.toString.call(t)
                            );
                          }),
                          (n.isFunction = function (t) {
                            return "function" == typeof t;
                          }),
                          (n.isPlainObject = function (t) {
                            return "object" == r(t) && t.constructor === Object;
                          }),
                          (n.isString = function (t) {
                            return "[object String]" === toString.call(t);
                          }),
                          (n.clamp = function (t, e, i) {
                            return t < e ? e : i < t ? i : t;
                          }),
                          (n.sign = function (t) {
                            return t < 0 ? -1 : 1;
                          }),
                          (n.now = function () {
                            if (window.performance) {
                              if (window.performance.now)
                                return window.performance.now();
                              if (window.performance.webkitNow)
                                return window.performance.webkitNow();
                            }
                            return new Date() - n._nowStartTime;
                          }),
                          (n.random = function (t, e) {
                            return (
                              (e = void 0 !== e ? e : 1),
                              (t = void 0 !== t ? t : 0) + i() * (e - t)
                            );
                          });
                        var i = function () {
                          return (
                            (n._seed = (9301 * n._seed + 49297) % 233280),
                            n._seed / 233280
                          );
                        };
                        (n.colorToNumber = function (t) {
                          return (
                            3 == (t = t.replace("#", "")).length &&
                              (t =
                                t.charAt(0) +
                                t.charAt(0) +
                                t.charAt(1) +
                                t.charAt(1) +
                                t.charAt(2) +
                                t.charAt(2)),
                            parseInt(t, 16)
                          );
                        }),
                          (n.logLevel = 1),
                          (n.log = function () {
                            console &&
                              0 < n.logLevel &&
                              n.logLevel <= 3 &&
                              console.log.apply(
                                console,
                                ["matter-js:"].concat(
                                  Array.prototype.slice.call(arguments)
                                )
                              );
                          }),
                          (n.info = function () {
                            console &&
                              0 < n.logLevel &&
                              n.logLevel <= 2 &&
                              console.info.apply(
                                console,
                                ["matter-js:"].concat(
                                  Array.prototype.slice.call(arguments)
                                )
                              );
                          }),
                          (n.warn = function () {
                            console &&
                              0 < n.logLevel &&
                              n.logLevel <= 3 &&
                              console.warn.apply(
                                console,
                                ["matter-js:"].concat(
                                  Array.prototype.slice.call(arguments)
                                )
                              );
                          }),
                          (n.nextId = function () {
                            return n._nextId++;
                          }),
                          (n.indexOf = function (t, e) {
                            if (t.indexOf) return t.indexOf(e);
                            for (var i = 0; i < t.length; i++)
                              if (t[i] === e) return i;
                            return -1;
                          }),
                          (n.map = function (t, e) {
                            if (t.map) return t.map(e);
                            for (var i = [], r = 0; r < t.length; r += 1)
                              i.push(e(t[r]));
                            return i;
                          }),
                          (n.topologicalSort = function (t) {
                            var e = [],
                              i = [],
                              r = [];
                            for (var s in t)
                              i[s] || r[s] || n._topologicalSort(s, i, r, t, e);
                            return e;
                          }),
                          (n._topologicalSort = function (t, e, i, r, s) {
                            var o = r[t] || [];
                            i[t] = !0;
                            for (var a = 0; a < o.length; a += 1) {
                              var l = o[a];
                              i[l] || e[l] || n._topologicalSort(l, e, i, r, s);
                            }
                            (i[t] = !1), (e[t] = !0), s.push(t);
                          }),
                          (n.chain = function () {
                            for (
                              var t = [], e = 0;
                              e < arguments.length;
                              e += 1
                            ) {
                              var i = arguments[e];
                              i._chained
                                ? t.push.apply(t, i._chained)
                                : t.push(i);
                            }
                            var r = function () {
                              for (
                                var e,
                                  i = new Array(arguments.length),
                                  r = 0,
                                  n = arguments.length;
                                r < n;
                                r++
                              )
                                i[r] = arguments[r];
                              for (r = 0; r < t.length; r += 1) {
                                var s = t[r].apply(e, i);
                                void 0 !== s && (e = s);
                              }
                              return e;
                            };
                            return (r._chained = t), r;
                          }),
                          (n.chainPathBefore = function (t, e, i) {
                            return n.set(t, e, n.chain(i, n.get(t, e)));
                          }),
                          (n.chainPathAfter = function (t, e, i) {
                            return n.set(t, e, n.chain(n.get(t, e), i));
                          }),
                          (n._requireGlobal = function (i, r) {
                            return (
                              ("undefined" != typeof window
                                ? window[i]
                                : void 0 !== t
                                ? t[i]
                                : null) || e(r)
                            );
                          });
                      })();
                  }.call(
                    this,
                    void 0 !== t
                      ? t
                      : "undefined" != typeof self
                      ? self
                      : "undefined" != typeof window
                      ? window
                      : {}
                  ));
                },
                {},
              ],
              15: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../body/World"),
                    s = t("./Sleeping"),
                    o = t("../collision/Resolver"),
                    a = t("../render/Render"),
                    l = t("../collision/Pairs"),
                    h = (t("./Metrics"), t("../collision/Grid")),
                    c = t("./Events"),
                    u = t("../body/Composite"),
                    d = t("../constraint/Constraint"),
                    f = t("./Common"),
                    p = t("../body/Body");
                  (r.create = function (t, e) {
                    (e = (e = f.isElement(t) ? e : t) || {}),
                      ((t = f.isElement(t) ? t : null) || e.render) &&
                        f.warn(
                          "Engine.create: engine.render is deprecated (see docs)"
                        );
                    var i = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        timing: { timestamp: 0, timeScale: 1 },
                        broadphase: { controller: h },
                      },
                      r = f.extend(i, e);
                    if (t || r.render) {
                      var s = { element: t, controller: a };
                      r.render = f.extend(s, r.render);
                    }
                    return (
                      r.render &&
                        r.render.controller &&
                        (r.render = r.render.controller.create(r.render)),
                      r.render && (r.render.engine = r),
                      (r.world = e.world || n.create(r.world)),
                      (r.pairs = l.create()),
                      (r.broadphase = r.broadphase.controller.create(
                        r.broadphase
                      )),
                      (r.metrics = r.metrics || { extended: !1 }),
                      r
                    );
                  }),
                    (r.update = function (t, e, i) {
                      (e = e || 1e3 / 60), (i = i || 1);
                      var n,
                        a,
                        h = t.world,
                        f = t.timing,
                        p = t.broadphase;
                      f.timestamp += e * f.timeScale;
                      var g = { timestamp: f.timestamp };
                      c.trigger(t, "beforeUpdate", g);
                      var m = u.allBodies(h),
                        _ = u.allConstraints(h);
                      for (
                        t.enableSleeping && s.update(m, f.timeScale),
                          r._bodiesApplyGravity(m, h.gravity),
                          r._bodiesUpdate(m, e, f.timeScale, i, h.bounds),
                          d.preSolveAll(m),
                          n = 0;
                        n < t.constraintIterations;
                        n++
                      )
                        d.solveAll(_, f.timeScale);
                      d.postSolveAll(m),
                        (a = p.controller
                          ? (h.isModified && p.controller.clear(p),
                            p.controller.update(p, m, t, h.isModified),
                            p.pairsList)
                          : m),
                        h.isModified && u.setModified(h, !1, !1, !0);
                      var v = p.detector(a, t),
                        y = t.pairs,
                        x = f.timestamp;
                      for (
                        l.update(y, v, x),
                          l.removeOld(y, x),
                          t.enableSleeping &&
                            s.afterCollisions(y.list, f.timeScale),
                          0 < y.collisionStart.length &&
                            c.trigger(t, "collisionStart", {
                              pairs: y.collisionStart,
                            }),
                          o.preSolvePosition(y.list),
                          n = 0;
                        n < t.positionIterations;
                        n++
                      )
                        o.solvePosition(y.list, f.timeScale);
                      for (
                        o.postSolvePosition(m), d.preSolveAll(m), n = 0;
                        n < t.constraintIterations;
                        n++
                      )
                        d.solveAll(_, f.timeScale);
                      for (
                        d.postSolveAll(m), o.preSolveVelocity(y.list), n = 0;
                        n < t.velocityIterations;
                        n++
                      )
                        o.solveVelocity(y.list, f.timeScale);
                      return (
                        0 < y.collisionActive.length &&
                          c.trigger(t, "collisionActive", {
                            pairs: y.collisionActive,
                          }),
                        0 < y.collisionEnd.length &&
                          c.trigger(t, "collisionEnd", {
                            pairs: y.collisionEnd,
                          }),
                        r._bodiesClearForces(m),
                        c.trigger(t, "afterUpdate", g),
                        t
                      );
                    }),
                    (r.merge = function (t, e) {
                      if ((f.extend(t, e), e.world)) {
                        (t.world = e.world), r.clear(t);
                        for (
                          var i = u.allBodies(t.world), n = 0;
                          n < i.length;
                          n++
                        ) {
                          var o = i[n];
                          s.set(o, !1), (o.id = f.nextId());
                        }
                      }
                    }),
                    (r.clear = function (t) {
                      var e = t.world;
                      l.clear(t.pairs);
                      var i = t.broadphase;
                      if (i.controller) {
                        var r = u.allBodies(e);
                        i.controller.clear(i), i.controller.update(i, r, t, !0);
                      }
                    }),
                    (r._bodiesClearForces = function (t) {
                      for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        (i.force.x = 0), (i.force.y = 0), (i.torque = 0);
                      }
                    }),
                    (r._bodiesApplyGravity = function (t, e) {
                      var i = void 0 !== e.scale ? e.scale : 0.001;
                      if ((0 !== e.x || 0 !== e.y) && 0 !== i)
                        for (var r = 0; r < t.length; r++) {
                          var n = t[r];
                          n.isStatic ||
                            n.isSleeping ||
                            ((n.force.y += n.mass * e.y * i),
                            (n.force.x += n.mass * e.x * i));
                        }
                    }),
                    (r._bodiesUpdate = function (t, e, i, r, n) {
                      for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        o.isStatic || o.isSleeping || p.update(o, e, i, r);
                      }
                    });
                },
                {
                  "../body/Body": 1,
                  "../body/Composite": 2,
                  "../body/World": 3,
                  "../collision/Grid": 6,
                  "../collision/Pairs": 8,
                  "../collision/Resolver": 10,
                  "../constraint/Constraint": 12,
                  "../render/Render": 31,
                  "./Common": 14,
                  "./Events": 16,
                  "./Metrics": 18,
                  "./Sleeping": 22,
                },
              ],
              16: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Common");
                  (r.on = function (t, e, i) {
                    for (var r, n = e.split(" "), s = 0; s < n.length; s++)
                      (r = n[s]),
                        (t.events = t.events || {}),
                        (t.events[r] = t.events[r] || []),
                        t.events[r].push(i);
                    return i;
                  }),
                    (r.off = function (t, e, i) {
                      if (e) {
                        "function" == typeof e &&
                          ((i = e), (e = n.keys(t.events).join(" ")));
                        for (var r = e.split(" "), s = 0; s < r.length; s++) {
                          var o = t.events[r[s]],
                            a = [];
                          if (i && o)
                            for (var l = 0; l < o.length; l++)
                              o[l] !== i && a.push(o[l]);
                          t.events[r[s]] = a;
                        }
                      } else t.events = {};
                    }),
                    (r.trigger = function (t, e, i) {
                      var r, s, o, a;
                      if (t.events) {
                        i || (i = {}), (r = e.split(" "));
                        for (var l = 0; l < r.length; l++)
                          if (((s = r[l]), (o = t.events[s]))) {
                            ((a = n.clone(i, !1)).name = s), (a.source = t);
                            for (var h = 0; h < o.length; h++)
                              o[h].apply(t, [a]);
                          }
                      }
                    });
                },
                { "./Common": 14 },
              ],
              17: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Plugin"),
                    s = t("./Common");
                  (r.name = "matter-js"),
                    (r.version = "0.14.2"),
                    (r.uses = []),
                    (r.used = []),
                    (r.use = function () {
                      n.use(r, Array.prototype.slice.call(arguments));
                    }),
                    (r.before = function (t, e) {
                      return (
                        (t = t.replace(/^Matter./, "")),
                        s.chainPathBefore(r, t, e)
                      );
                    }),
                    (r.after = function (t, e) {
                      return (
                        (t = t.replace(/^Matter./, "")),
                        s.chainPathAfter(r, t, e)
                      );
                    });
                },
                { "./Common": 14, "./Plugin": 20 },
              ],
              18: [
                function (t, e, i) {},
                { "../body/Composite": 2, "./Common": 14 },
              ],
              19: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../core/Common");
                  (r.create = function (t) {
                    var e = {};
                    return (
                      t ||
                        n.log(
                          "Mouse.create: element was undefined, defaulting to document.body",
                          "warn"
                        ),
                      (e.element = t || document.body),
                      (e.absolute = { x: 0, y: 0 }),
                      (e.position = { x: 0, y: 0 }),
                      (e.mousedownPosition = { x: 0, y: 0 }),
                      (e.mouseupPosition = { x: 0, y: 0 }),
                      (e.offset = { x: 0, y: 0 }),
                      (e.scale = { x: 1, y: 1 }),
                      (e.wheelDelta = 0),
                      (e.button = -1),
                      (e.pixelRatio =
                        e.element.getAttribute("data-pixel-ratio") || 1),
                      (e.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null,
                      }),
                      (e.mousemove = function (t) {
                        var i = r._getRelativeMousePosition(
                          t,
                          e.element,
                          e.pixelRatio
                        );
                        t.changedTouches &&
                          ((e.button = 0), t.preventDefault()),
                          (e.absolute.x = i.x),
                          (e.absolute.y = i.y),
                          (e.position.x =
                            e.absolute.x * e.scale.x + e.offset.x),
                          (e.position.y =
                            e.absolute.y * e.scale.y + e.offset.y),
                          (e.sourceEvents.mousemove = t);
                      }),
                      (e.mousedown = function (t) {
                        var i = r._getRelativeMousePosition(
                          t,
                          e.element,
                          e.pixelRatio
                        );
                        t.changedTouches
                          ? ((e.button = 0), t.preventDefault())
                          : (e.button = t.button),
                          (e.absolute.x = i.x),
                          (e.absolute.y = i.y),
                          (e.position.x =
                            e.absolute.x * e.scale.x + e.offset.x),
                          (e.position.y =
                            e.absolute.y * e.scale.y + e.offset.y),
                          (e.mousedownPosition.x = e.position.x),
                          (e.mousedownPosition.y = e.position.y),
                          (e.sourceEvents.mousedown = t);
                      }),
                      (e.mouseup = function (t) {
                        var i = r._getRelativeMousePosition(
                          t,
                          e.element,
                          e.pixelRatio
                        );
                        t.changedTouches && t.preventDefault(),
                          (e.button = -1),
                          (e.absolute.x = i.x),
                          (e.absolute.y = i.y),
                          (e.position.x =
                            e.absolute.x * e.scale.x + e.offset.x),
                          (e.position.y =
                            e.absolute.y * e.scale.y + e.offset.y),
                          (e.mouseupPosition.x = e.position.x),
                          (e.mouseupPosition.y = e.position.y),
                          (e.sourceEvents.mouseup = t);
                      }),
                      (e.mousewheel = function (t) {
                        (e.wheelDelta = Math.max(
                          -1,
                          Math.min(1, t.wheelDelta || -t.detail)
                        )),
                          t.preventDefault();
                      }),
                      r.setElement(e, e.element),
                      e
                    );
                  }),
                    (r.setElement = function (t, e) {
                      var i = { passive: !1 };
                      (t.element = e).addEventListener(
                        "mousemove",
                        t.mousemove,
                        i
                      ),
                        e.addEventListener("mousedown", t.mousedown, i),
                        e.addEventListener("mouseup", t.mouseup, i),
                        e.addEventListener("mousewheel", t.mousewheel, i),
                        e.addEventListener("DOMMouseScroll", t.mousewheel, i),
                        e.addEventListener("touchmove", t.mousemove, i),
                        e.addEventListener("touchstart", t.mousedown, i),
                        e.addEventListener("touchend", t.mouseup, i);
                    }),
                    (r.clearSourceEvents = function (t) {
                      (t.sourceEvents.mousemove = null),
                        (t.sourceEvents.mousedown = null),
                        (t.sourceEvents.mouseup = null),
                        (t.sourceEvents.mousewheel = null),
                        (t.wheelDelta = 0);
                    }),
                    (r.setOffset = function (t, e) {
                      (t.offset.x = e.x),
                        (t.offset.y = e.y),
                        (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                        (t.position.y = t.absolute.y * t.scale.y + t.offset.y);
                    }),
                    (r.setScale = function (t, e) {
                      (t.scale.x = e.x),
                        (t.scale.y = e.y),
                        (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                        (t.position.y = t.absolute.y * t.scale.y + t.offset.y);
                    }),
                    (r._getRelativeMousePosition = function (t, e, i) {
                      var r,
                        n,
                        s = e.getBoundingClientRect(),
                        o =
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body,
                        a =
                          void 0 !== window.pageXOffset
                            ? window.pageXOffset
                            : o.scrollLeft,
                        l =
                          void 0 !== window.pageYOffset
                            ? window.pageYOffset
                            : o.scrollTop,
                        h = t.changedTouches;
                      return (
                        (n = h
                          ? ((r = h[0].pageX - s.left - a),
                            h[0].pageY - s.top - l)
                          : ((r = t.pageX - s.left - a), t.pageY - s.top - l)),
                        {
                          x:
                            r /
                            ((e.clientWidth / (e.width || e.clientWidth)) * i),
                          y:
                            n /
                            ((e.clientHeight / (e.height || e.clientHeight)) *
                              i),
                        }
                      );
                    });
                },
                { "../core/Common": 14 },
              ],
              20: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Common");
                  (r._registry = {}),
                    (r.register = function (t) {
                      if (
                        (r.isPlugin(t) ||
                          n.warn(
                            "Plugin.register:",
                            r.toString(t),
                            "does not implement all required fields."
                          ),
                        t.name in r._registry)
                      ) {
                        var e = r._registry[t.name],
                          i = r.versionParse(t.version).number,
                          s = r.versionParse(e.version).number;
                        s < i
                          ? (n.warn(
                              "Plugin.register:",
                              r.toString(e),
                              "was upgraded to",
                              r.toString(t)
                            ),
                            (r._registry[t.name] = t))
                          : i < s
                          ? n.warn(
                              "Plugin.register:",
                              r.toString(e),
                              "can not be downgraded to",
                              r.toString(t)
                            )
                          : t !== e &&
                            n.warn(
                              "Plugin.register:",
                              r.toString(t),
                              "is already registered to different plugin object"
                            );
                      } else r._registry[t.name] = t;
                      return t;
                    }),
                    (r.resolve = function (t) {
                      return r._registry[r.dependencyParse(t).name];
                    }),
                    (r.toString = function (t) {
                      return "string" == typeof t
                        ? t
                        : (t.name || "anonymous") +
                            "@" +
                            (t.version || t.range || "0.0.0");
                    }),
                    (r.isPlugin = function (t) {
                      return t && t.name && t.version && t.install;
                    }),
                    (r.isUsed = function (t, e) {
                      return -1 < t.used.indexOf(e);
                    }),
                    (r.isFor = function (t, e) {
                      var i = t.for && r.dependencyParse(t.for);
                      return (
                        !t.for ||
                        (e.name === i.name &&
                          r.versionSatisfies(e.version, i.range))
                      );
                    }),
                    (r.use = function (t, e) {
                      if (
                        ((t.uses = (t.uses || []).concat(e || [])),
                        0 !== t.uses.length)
                      ) {
                        for (
                          var i = r.dependencies(t),
                            s = n.topologicalSort(i),
                            o = [],
                            a = 0;
                          a < s.length;
                          a += 1
                        )
                          if (s[a] !== t.name) {
                            var l = r.resolve(s[a]);
                            l
                              ? r.isUsed(t, l.name) ||
                                (r.isFor(l, t) ||
                                  (n.warn(
                                    "Plugin.use:",
                                    r.toString(l),
                                    "is for",
                                    l.for,
                                    "but installed on",
                                    r.toString(t) + "."
                                  ),
                                  (l._warned = !0)),
                                l.install
                                  ? l.install(t)
                                  : (n.warn(
                                      "Plugin.use:",
                                      r.toString(l),
                                      "does not specify an install function."
                                    ),
                                    (l._warned = !0)),
                                l._warned
                                  ? (o.push("ðŸ”¶ " + r.toString(l)),
                                    delete l._warned)
                                  : o.push("âœ… " + r.toString(l)),
                                t.used.push(l.name))
                              : o.push("âŒ " + s[a]);
                          }
                        0 < o.length && n.info(o.join("  "));
                      } else
                        n.warn(
                          "Plugin.use:",
                          r.toString(t),
                          "does not specify any dependencies to install."
                        );
                    }),
                    (r.dependencies = function (t, e) {
                      var i = r.dependencyParse(t),
                        s = i.name;
                      if (!(s in (e = e || {}))) {
                        (t = r.resolve(t) || t),
                          (e[s] = n.map(t.uses || [], function (e) {
                            r.isPlugin(e) && r.register(e);
                            var s = r.dependencyParse(e),
                              o = r.resolve(e);
                            return (
                              o && !r.versionSatisfies(o.version, s.range)
                                ? (n.warn(
                                    "Plugin.dependencies:",
                                    r.toString(o),
                                    "does not satisfy",
                                    r.toString(s),
                                    "used by",
                                    r.toString(i) + "."
                                  ),
                                  (o._warned = !0),
                                  (t._warned = !0))
                                : o ||
                                  (n.warn(
                                    "Plugin.dependencies:",
                                    r.toString(e),
                                    "used by",
                                    r.toString(i),
                                    "could not be resolved."
                                  ),
                                  (t._warned = !0)),
                              s.name
                            );
                          }));
                        for (var o = 0; o < e[s].length; o += 1)
                          r.dependencies(e[s][o], e);
                        return e;
                      }
                    }),
                    (r.dependencyParse = function (t) {
                      return n.isString(t)
                        ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(
                            t
                          ) ||
                            n.warn(
                              "Plugin.dependencyParse:",
                              t,
                              "is not a valid dependency string."
                            ),
                          {
                            name: t.split("@")[0],
                            range: t.split("@")[1] || "*",
                          })
                        : { name: t.name, range: t.range || t.version };
                    }),
                    (r.versionParse = function (t) {
                      /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/.test(t) ||
                        n.warn(
                          "Plugin.versionParse:",
                          t,
                          "is not a valid version or range."
                        );
                      var e = t.split("-");
                      t = e[0];
                      var i = isNaN(Number(t[0])),
                        r = i ? t.substr(1) : t,
                        s = n.map(r.split("."), function (t) {
                          return Number(t);
                        });
                      return {
                        isRange: i,
                        version: r,
                        range: t,
                        operator: i ? t[0] : "",
                        parts: s,
                        prerelease: e[1],
                        number: 1e8 * s[0] + 1e4 * s[1] + s[2],
                      };
                    }),
                    (r.versionSatisfies = function (t, e) {
                      e = e || "*";
                      var i = r.versionParse(e),
                        n = i.parts,
                        s = r.versionParse(t),
                        o = s.parts;
                      if (i.isRange) {
                        if ("*" === i.operator || "*" === t) return !0;
                        if ("~" === i.operator)
                          return o[0] === n[0] && o[1] === n[1] && o[2] >= n[2];
                        if ("^" === i.operator)
                          return 0 < n[0]
                            ? o[0] === n[0] && s.number >= i.number
                            : 0 < n[1]
                            ? o[1] === n[1] && o[2] >= n[2]
                            : o[2] === n[2];
                      }
                      return t === e || "*" === t;
                    });
                },
                { "./Common": 14 },
              ],
              21: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Events"),
                    s = t("./Engine"),
                    o = t("./Common");
                  !(function () {
                    var t, e, i;
                    "undefined" != typeof window &&
                      ((t =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame),
                      (e =
                        window.cancelAnimationFrame ||
                        window.mozCancelAnimationFrame ||
                        window.webkitCancelAnimationFrame ||
                        window.msCancelAnimationFrame)),
                      t ||
                        ((t = function (t) {
                          i = setTimeout(function () {
                            t(o.now());
                          }, 1e3 / 60);
                        }),
                        (e = function () {
                          clearTimeout(i);
                        })),
                      (r.create = function (t) {
                        var e = o.extend(
                          {
                            fps: 60,
                            correction: 1,
                            deltaSampleSize: 60,
                            counterTimestamp: 0,
                            frameCounter: 0,
                            deltaHistory: [],
                            timePrev: null,
                            timeScalePrev: 1,
                            frameRequestId: null,
                            isFixed: !1,
                            enabled: !0,
                          },
                          t
                        );
                        return (
                          (e.delta = e.delta || 1e3 / e.fps),
                          (e.deltaMin = e.deltaMin || 1e3 / e.fps),
                          (e.deltaMax = e.deltaMax || 1e3 / (0.5 * e.fps)),
                          (e.fps = 1e3 / e.delta),
                          e
                        );
                      }),
                      (r.run = function (e, i) {
                        return (
                          void 0 !== e.positionIterations &&
                            ((i = e), (e = r.create())),
                          (function n(s) {
                            (e.frameRequestId = t(n)),
                              s && e.enabled && r.tick(e, i, s);
                          })(),
                          e
                        );
                      }),
                      (r.tick = function (t, e, i) {
                        var r,
                          o = e.timing,
                          a = 1,
                          l = { timestamp: o.timestamp };
                        n.trigger(t, "beforeTick", l),
                          n.trigger(e, "beforeTick", l),
                          t.isFixed
                            ? (r = t.delta)
                            : ((r = i - t.timePrev || t.delta),
                              (t.timePrev = i),
                              t.deltaHistory.push(r),
                              (t.deltaHistory = t.deltaHistory.slice(
                                -t.deltaSampleSize
                              )),
                              (a =
                                (r =
                                  (r =
                                    (r = Math.min.apply(null, t.deltaHistory)) <
                                    t.deltaMin
                                      ? t.deltaMin
                                      : r) > t.deltaMax
                                    ? t.deltaMax
                                    : r) / t.delta),
                              (t.delta = r)),
                          0 !== t.timeScalePrev &&
                            (a *= o.timeScale / t.timeScalePrev),
                          0 === o.timeScale && (a = 0),
                          (t.timeScalePrev = o.timeScale),
                          (t.correction = a),
                          (t.frameCounter += 1),
                          1e3 <= i - t.counterTimestamp &&
                            ((t.fps =
                              t.frameCounter *
                              ((i - t.counterTimestamp) / 1e3)),
                            (t.counterTimestamp = i),
                            (t.frameCounter = 0)),
                          n.trigger(t, "tick", l),
                          n.trigger(e, "tick", l),
                          e.world.isModified &&
                            e.render &&
                            e.render.controller &&
                            e.render.controller.clear &&
                            e.render.controller.clear(e.render),
                          n.trigger(t, "beforeUpdate", l),
                          s.update(e, r, a),
                          n.trigger(t, "afterUpdate", l),
                          e.render &&
                            e.render.controller &&
                            (n.trigger(t, "beforeRender", l),
                            n.trigger(e, "beforeRender", l),
                            e.render.controller.world(e.render),
                            n.trigger(t, "afterRender", l),
                            n.trigger(e, "afterRender", l)),
                          n.trigger(t, "afterTick", l),
                          n.trigger(e, "afterTick", l);
                      }),
                      (r.stop = function (t) {
                        e(t.frameRequestId);
                      }),
                      (r.start = function (t, e) {
                        r.run(t, e);
                      });
                  })();
                },
                { "./Common": 14, "./Engine": 15, "./Events": 16 },
              ],
              22: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("./Events");
                  (r._motionWakeThreshold = 0.18),
                    (r._motionSleepThreshold = 0.08),
                    (r._minBias = 0.9),
                    (r.update = function (t, e) {
                      for (var i = e * e * e, n = 0; n < t.length; n++) {
                        var s = t[n],
                          o =
                            s.speed * s.speed + s.angularSpeed * s.angularSpeed;
                        if (0 === s.force.x && 0 === s.force.y) {
                          var a = Math.min(s.motion, o),
                            l = Math.max(s.motion, o);
                          (s.motion = r._minBias * a + (1 - r._minBias) * l),
                            0 < s.sleepThreshold &&
                            s.motion < r._motionSleepThreshold * i
                              ? ((s.sleepCounter += 1),
                                s.sleepCounter >= s.sleepThreshold &&
                                  r.set(s, !0))
                              : 0 < s.sleepCounter && (s.sleepCounter -= 1);
                        } else r.set(s, !1);
                      }
                    }),
                    (r.afterCollisions = function (t, e) {
                      for (var i = e * e * e, n = 0; n < t.length; n++) {
                        var s = t[n];
                        if (s.isActive) {
                          var o = s.collision,
                            a = o.bodyA.parent,
                            l = o.bodyB.parent;
                          if (
                            !(
                              (a.isSleeping && l.isSleeping) ||
                              a.isStatic ||
                              l.isStatic
                            ) &&
                            (a.isSleeping || l.isSleeping)
                          ) {
                            var h = a.isSleeping && !a.isStatic ? a : l,
                              c = h === a ? l : a;
                            !h.isStatic &&
                              c.motion > r._motionWakeThreshold * i &&
                              r.set(h, !1);
                          }
                        }
                      }
                    }),
                    (r.set = function (t, e) {
                      var i = t.isSleeping;
                      e
                        ? ((t.isSleeping = !0),
                          (t.sleepCounter = t.sleepThreshold),
                          (t.positionImpulse.x = 0),
                          (t.positionImpulse.y = 0),
                          (t.positionPrev.x = t.position.x),
                          (t.positionPrev.y = t.position.y),
                          (t.anglePrev = t.angle),
                          (t.speed = 0),
                          (t.angularSpeed = 0),
                          (t.motion = 0),
                          i || n.trigger(t, "sleepStart"))
                        : ((t.isSleeping = !1),
                          (t.sleepCounter = 0),
                          i && n.trigger(t, "sleepEnd"));
                    });
                },
                { "./Events": 16 },
              ],
              23: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n,
                    s = t("../geometry/Vertices"),
                    o = t("../core/Common"),
                    a = t("../body/Body"),
                    l = t("../geometry/Bounds"),
                    h = t("../geometry/Vector");
                  (r.rectangle = function (t, e, i, r, n) {
                    n = n || {};
                    var l = {
                      label: "Rectangle Body",
                      position: { x: t, y: e },
                      vertices: s.fromPath(
                        "L 0 0 L " + i + " 0 L " + i + " " + r + " L 0 " + r
                      ),
                    };
                    if (n.chamfer) {
                      var h = n.chamfer;
                      (l.vertices = s.chamfer(
                        l.vertices,
                        h.radius,
                        h.quality,
                        h.qualityMin,
                        h.qualityMax
                      )),
                        delete n.chamfer;
                    }
                    return a.create(o.extend({}, l, n));
                  }),
                    (r.trapezoid = function (t, e, i, r, n, l) {
                      l = l || {};
                      var h,
                        c = i * (n *= 0.5),
                        u = c + (1 - 2 * n) * i,
                        d = u + c;
                      h =
                        n < 0.5
                          ? "L 0 0 L " +
                            c +
                            " " +
                            -r +
                            " L " +
                            u +
                            " " +
                            -r +
                            " L " +
                            d +
                            " 0"
                          : "L 0 0 L " + u + " " + -r + " L " + d + " 0";
                      var f = {
                        label: "Trapezoid Body",
                        position: { x: t, y: e },
                        vertices: s.fromPath(h),
                      };
                      if (l.chamfer) {
                        var p = l.chamfer;
                        (f.vertices = s.chamfer(
                          f.vertices,
                          p.radius,
                          p.quality,
                          p.qualityMin,
                          p.qualityMax
                        )),
                          delete l.chamfer;
                      }
                      return a.create(o.extend({}, f, l));
                    }),
                    (r.circle = function (t, e, i, n, s) {
                      n = n || {};
                      var a = { label: "Circle Body", circleRadius: i };
                      s = s || 25;
                      var l = Math.ceil(Math.max(10, Math.min(s, i)));
                      return (
                        l % 2 == 1 && (l += 1),
                        r.polygon(t, e, l, i, o.extend({}, a, n))
                      );
                    }),
                    (r.polygon = function (t, e, i, n, l) {
                      if (((l = l || {}), i < 3)) return r.circle(t, e, n, l);
                      for (
                        var h = (2 * Math.PI) / i, c = "", u = 0.5 * h, d = 0;
                        d < i;
                        d += 1
                      ) {
                        var f = u + d * h,
                          p = Math.cos(f) * n,
                          g = Math.sin(f) * n;
                        c += "L " + p.toFixed(3) + " " + g.toFixed(3) + " ";
                      }
                      var m = {
                        label: "Polygon Body",
                        position: { x: t, y: e },
                        vertices: s.fromPath(c),
                      };
                      if (l.chamfer) {
                        var _ = l.chamfer;
                        (m.vertices = s.chamfer(
                          m.vertices,
                          _.radius,
                          _.quality,
                          _.qualityMin,
                          _.qualityMax
                        )),
                          delete l.chamfer;
                      }
                      return a.create(o.extend({}, m, l));
                    }),
                    (r.fromVertices = function (t, e, i, r, c, u, d) {
                      var f, p, g, m, _, v, y, x, b;
                      for (
                        n || (n = o._requireGlobal("decomp", "poly-decomp")),
                          r = r || {},
                          p = [],
                          c = void 0 !== c && c,
                          u = void 0 !== u ? u : 0.01,
                          d = void 0 !== d ? d : 10,
                          n ||
                            o.warn(
                              "Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."
                            ),
                          o.isArray(i[0]) || (i = [i]),
                          x = 0;
                        x < i.length;
                        x += 1
                      )
                        if (((m = i[x]), (g = s.isConvex(m)) || !n))
                          (m = g ? s.clockwiseSort(m) : s.hull(m)),
                            p.push({ position: { x: t, y: e }, vertices: m });
                        else {
                          var w = m.map(function (t) {
                            return [t.x, t.y];
                          });
                          n.makeCCW(w),
                            !1 !== u && n.removeCollinearPoints(w, u);
                          var S = n.quickDecomp(w);
                          for (_ = 0; _ < S.length; _++) {
                            var T = S[_].map(function (t) {
                              return { x: t[0], y: t[1] };
                            });
                            (0 < d && s.area(T) < d) ||
                              p.push({ position: s.centre(T), vertices: T });
                          }
                        }
                      for (_ = 0; _ < p.length; _++)
                        p[_] = a.create(o.extend(p[_], r));
                      if (c)
                        for (_ = 0; _ < p.length; _++) {
                          var P = p[_];
                          for (v = _ + 1; v < p.length; v++) {
                            var C = p[v];
                            if (l.overlaps(P.bounds, C.bounds)) {
                              var k = P.vertices,
                                A = C.vertices;
                              for (y = 0; y < P.vertices.length; y++)
                                for (b = 0; b < C.vertices.length; b++) {
                                  var M = h.magnitudeSquared(
                                      h.sub(k[(y + 1) % k.length], A[b])
                                    ),
                                    R = h.magnitudeSquared(
                                      h.sub(k[y], A[(b + 1) % A.length])
                                    );
                                  M < 5 &&
                                    R < 5 &&
                                    ((k[y].isInternal = !0),
                                    (A[b].isInternal = !0));
                                }
                            }
                          }
                        }
                      return 1 < p.length
                        ? ((f = a.create(o.extend({ parts: p.slice(0) }, r))),
                          a.setPosition(f, { x: t, y: e }),
                          f)
                        : p[0];
                    });
                },
                {
                  "../body/Body": 1,
                  "../core/Common": 14,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                  "../geometry/Vertices": 29,
                },
              ],
              24: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../body/Composite"),
                    s = t("../constraint/Constraint"),
                    o = t("../core/Common"),
                    a = t("../body/Body"),
                    l = t("./Bodies");
                  (r.stack = function (t, e, i, r, s, o, l) {
                    for (
                      var h,
                        c = n.create({ label: "Stack" }),
                        u = t,
                        d = e,
                        f = 0,
                        p = 0;
                      p < r;
                      p++
                    ) {
                      for (var g = 0, m = 0; m < i; m++) {
                        var _ = l(u, d, m, p, h, f);
                        if (_) {
                          var v = _.bounds.max.y - _.bounds.min.y,
                            y = _.bounds.max.x - _.bounds.min.x;
                          g < v && (g = v),
                            a.translate(_, { x: 0.5 * y, y: 0.5 * v }),
                            (u = _.bounds.max.x + s),
                            n.addBody(c, _),
                            (h = _),
                            (f += 1);
                        } else u += s;
                      }
                      (d += g + o), (u = t);
                    }
                    return c;
                  }),
                    (r.chain = function (t, e, i, r, a, l) {
                      for (var h = t.bodies, c = 1; c < h.length; c++) {
                        var u = h[c - 1],
                          d = h[c],
                          f = u.bounds.max.y - u.bounds.min.y,
                          p = u.bounds.max.x - u.bounds.min.x,
                          g = d.bounds.max.y - d.bounds.min.y,
                          m = {
                            bodyA: u,
                            pointA: { x: p * e, y: f * i },
                            bodyB: d,
                            pointB: {
                              x: (d.bounds.max.x - d.bounds.min.x) * r,
                              y: g * a,
                            },
                          },
                          _ = o.extend(m, l);
                        n.addConstraint(t, s.create(_));
                      }
                      return (t.label += " Chain"), t;
                    }),
                    (r.mesh = function (t, e, i, r, a) {
                      var l,
                        h,
                        c,
                        u,
                        d,
                        f = t.bodies;
                      for (l = 0; l < i; l++) {
                        for (h = 1; h < e; h++)
                          (c = f[h - 1 + l * e]),
                            (u = f[h + l * e]),
                            n.addConstraint(
                              t,
                              s.create(o.extend({ bodyA: c, bodyB: u }, a))
                            );
                        if (0 < l)
                          for (h = 0; h < e; h++)
                            (c = f[h + (l - 1) * e]),
                              (u = f[h + l * e]),
                              n.addConstraint(
                                t,
                                s.create(o.extend({ bodyA: c, bodyB: u }, a))
                              ),
                              r &&
                                0 < h &&
                                ((d = f[h - 1 + (l - 1) * e]),
                                n.addConstraint(
                                  t,
                                  s.create(o.extend({ bodyA: d, bodyB: u }, a))
                                )),
                              r &&
                                h < e - 1 &&
                                ((d = f[h + 1 + (l - 1) * e]),
                                n.addConstraint(
                                  t,
                                  s.create(o.extend({ bodyA: d, bodyB: u }, a))
                                ));
                      }
                      return (t.label += " Mesh"), t;
                    }),
                    (r.pyramid = function (t, e, i, n, s, o, l) {
                      return r.stack(
                        t,
                        e,
                        i,
                        n,
                        s,
                        o,
                        function (e, r, o, h, c, u) {
                          var d = Math.min(n, Math.ceil(i / 2)),
                            f = c ? c.bounds.max.x - c.bounds.min.x : 0;
                          if (!(d < h || o < (h = d - h) || i - 1 - h < o))
                            return (
                              1 === u &&
                                a.translate(c, {
                                  x: (o + (i % 2 == 1 ? 1 : -1)) * f,
                                  y: 0,
                                }),
                              l(t + (c ? o * f : 0) + o * s, r, o, h, c, u)
                            );
                        }
                      );
                    }),
                    (r.newtonsCradle = function (t, e, i, r, o) {
                      for (
                        var a = n.create({ label: "Newtons Cradle" }), h = 0;
                        h < i;
                        h++
                      ) {
                        var c = l.circle(t + h * (1.9 * r), e + o, r, {
                            inertia: 1 / 0,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 1e-4,
                            slop: 1,
                          }),
                          u = s.create({
                            pointA: { x: t + h * (1.9 * r), y: e },
                            bodyB: c,
                          });
                        n.addBody(a, c), n.addConstraint(a, u);
                      }
                      return a;
                    }),
                    (r.car = function (t, e, i, r, o) {
                      var h = a.nextGroup(!0),
                        c = 0.5 * -i + 20,
                        u = 0.5 * i - 20,
                        d = n.create({ label: "Car" }),
                        f = l.rectangle(t, e, i, r, {
                          collisionFilter: { group: h },
                          chamfer: { radius: 0.5 * r },
                          density: 2e-4,
                        }),
                        p = l.circle(t + c, e + 0, o, {
                          collisionFilter: { group: h },
                          friction: 0.8,
                        }),
                        g = l.circle(t + u, e + 0, o, {
                          collisionFilter: { group: h },
                          friction: 0.8,
                        }),
                        m = s.create({
                          bodyB: f,
                          pointB: { x: c, y: 0 },
                          bodyA: p,
                          stiffness: 1,
                          length: 0,
                        }),
                        _ = s.create({
                          bodyB: f,
                          pointB: { x: u, y: 0 },
                          bodyA: g,
                          stiffness: 1,
                          length: 0,
                        });
                      return (
                        n.addBody(d, f),
                        n.addBody(d, p),
                        n.addBody(d, g),
                        n.addConstraint(d, m),
                        n.addConstraint(d, _),
                        d
                      );
                    }),
                    (r.softBody = function (t, e, i, n, s, a, h, c, u, d) {
                      (u = o.extend({ inertia: 1 / 0 }, u)),
                        (d = o.extend(
                          {
                            stiffness: 0.2,
                            render: { type: "line", anchors: !1 },
                          },
                          d
                        ));
                      var f = r.stack(t, e, i, n, s, a, function (t, e) {
                        return l.circle(t, e, c, u);
                      });
                      return r.mesh(f, i, n, h, d), (f.label = "Soft Body"), f;
                    });
                },
                {
                  "../body/Body": 1,
                  "../body/Composite": 2,
                  "../constraint/Constraint": 12,
                  "../core/Common": 14,
                  "./Bodies": 23,
                },
              ],
              25: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vector"),
                    s = t("../core/Common");
                  (r.fromVertices = function (t) {
                    for (var e = {}, i = 0; i < t.length; i++) {
                      var r = (i + 1) % t.length,
                        o = n.normalise({
                          x: t[r].y - t[i].y,
                          y: t[i].x - t[r].x,
                        }),
                        a = 0 === o.y ? 1 / 0 : o.x / o.y;
                      e[(a = a.toFixed(3).toString())] = o;
                    }
                    return s.values(e);
                  }),
                    (r.rotate = function (t, e) {
                      if (0 !== e)
                        for (
                          var i = Math.cos(e), r = Math.sin(e), n = 0;
                          n < t.length;
                          n++
                        ) {
                          var s,
                            o = t[n];
                          (s = o.x * i - o.y * r),
                            (o.y = o.x * r + o.y * i),
                            (o.x = s);
                        }
                    });
                },
                { "../core/Common": 14, "../geometry/Vector": 28 },
              ],
              26: [
                function (t, e, i) {
                  var r = {};
                  ((e.exports = r).create = function (t) {
                    var e = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return t && r.update(e, t), e;
                  }),
                    (r.update = function (t, e, i) {
                      (t.min.x = 1 / 0),
                        (t.max.x = -1 / 0),
                        (t.min.y = 1 / 0),
                        (t.max.y = -1 / 0);
                      for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.x > t.max.x && (t.max.x = n.x),
                          n.x < t.min.x && (t.min.x = n.x),
                          n.y > t.max.y && (t.max.y = n.y),
                          n.y < t.min.y && (t.min.y = n.y);
                      }
                      i &&
                        (0 < i.x ? (t.max.x += i.x) : (t.min.x += i.x),
                        0 < i.y ? (t.max.y += i.y) : (t.min.y += i.y));
                    }),
                    (r.contains = function (t, e) {
                      return (
                        e.x >= t.min.x &&
                        e.x <= t.max.x &&
                        e.y >= t.min.y &&
                        e.y <= t.max.y
                      );
                    }),
                    (r.overlaps = function (t, e) {
                      return (
                        t.min.x <= e.max.x &&
                        t.max.x >= e.min.x &&
                        t.max.y >= e.min.y &&
                        t.min.y <= e.max.y
                      );
                    }),
                    (r.translate = function (t, e) {
                      (t.min.x += e.x),
                        (t.max.x += e.x),
                        (t.min.y += e.y),
                        (t.max.y += e.y);
                    }),
                    (r.shift = function (t, e) {
                      var i = t.max.x - t.min.x,
                        r = t.max.y - t.min.y;
                      (t.min.x = e.x),
                        (t.max.x = e.x + i),
                        (t.min.y = e.y),
                        (t.max.y = e.y + r);
                    });
                },
                {},
              ],
              27: [
                function (t, e, i) {
                  var r = {};
                  (e.exports = r), t("../geometry/Bounds");
                  var n = t("../core/Common");
                  (r.pathToVertices = function (t, e) {
                    "undefined" == typeof window ||
                      "SVGPathSeg" in window ||
                      n.warn(
                        "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
                      );
                    var i,
                      s,
                      o,
                      a,
                      l,
                      h,
                      c,
                      u,
                      d,
                      f,
                      p,
                      g = [],
                      m = 0,
                      _ = 0,
                      v = 0;
                    e = e || 15;
                    var y = function (t, e, i) {
                        var r = i % 2 == 1 && 1 < i;
                        if (!d || t != d.x || e != d.y) {
                          p = d && r ? ((f = d.x), d.y) : (f = 0);
                          var n = { x: f + t, y: p + e };
                          (!r && d) || (d = n),
                            g.push(n),
                            (_ = f + t),
                            (v = p + e);
                        }
                      },
                      x = function (t) {
                        var e = t.pathSegTypeAsLetter.toUpperCase();
                        if ("Z" !== e) {
                          switch (e) {
                            case "M":
                            case "L":
                            case "T":
                            case "C":
                            case "S":
                            case "Q":
                              (_ = t.x), (v = t.y);
                              break;
                            case "H":
                              _ = t.x;
                              break;
                            case "V":
                              v = t.y;
                          }
                          y(_, v, t.pathSegType);
                        }
                      };
                    for (
                      r._svgPathToAbsolute(t),
                        o = t.getTotalLength(),
                        h = [],
                        i = 0;
                      i < t.pathSegList.numberOfItems;
                      i += 1
                    )
                      h.push(t.pathSegList.getItem(i));
                    for (c = h.concat(); m < o; ) {
                      if ((l = h[t.getPathSegAtLength(m)]) != u) {
                        for (; c.length && c[0] != l; ) x(c.shift());
                        u = l;
                      }
                      switch (l.pathSegTypeAsLetter.toUpperCase()) {
                        case "C":
                        case "T":
                        case "S":
                        case "Q":
                        case "A":
                          (a = t.getPointAtLength(m)), y(a.x, a.y, 0);
                      }
                      m += e;
                    }
                    for (i = 0, s = c.length; i < s; ++i) x(c[i]);
                    return g;
                  }),
                    (r._svgPathToAbsolute = function (t) {
                      for (
                        var e,
                          i,
                          r,
                          n,
                          s,
                          o,
                          a = t.pathSegList,
                          l = 0,
                          h = 0,
                          c = a.numberOfItems,
                          u = 0;
                        u < c;
                        ++u
                      ) {
                        var d = a.getItem(u),
                          f = d.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(f))
                          "x" in d && (l = d.x), "y" in d && (h = d.y);
                        else
                          switch (
                            ("x1" in d && (r = l + d.x1),
                            "x2" in d && (s = l + d.x2),
                            "y1" in d && (n = h + d.y1),
                            "y2" in d && (o = h + d.y2),
                            "x" in d && (l += d.x),
                            "y" in d && (h += d.y),
                            f)
                          ) {
                            case "m":
                              a.replaceItem(
                                t.createSVGPathSegMovetoAbs(l, h),
                                u
                              );
                              break;
                            case "l":
                              a.replaceItem(
                                t.createSVGPathSegLinetoAbs(l, h),
                                u
                              );
                              break;
                            case "h":
                              a.replaceItem(
                                t.createSVGPathSegLinetoHorizontalAbs(l),
                                u
                              );
                              break;
                            case "v":
                              a.replaceItem(
                                t.createSVGPathSegLinetoVerticalAbs(h),
                                u
                              );
                              break;
                            case "c":
                              a.replaceItem(
                                t.createSVGPathSegCurvetoCubicAbs(
                                  l,
                                  h,
                                  r,
                                  n,
                                  s,
                                  o
                                ),
                                u
                              );
                              break;
                            case "s":
                              a.replaceItem(
                                t.createSVGPathSegCurvetoCubicSmoothAbs(
                                  l,
                                  h,
                                  s,
                                  o
                                ),
                                u
                              );
                              break;
                            case "q":
                              a.replaceItem(
                                t.createSVGPathSegCurvetoQuadraticAbs(
                                  l,
                                  h,
                                  r,
                                  n
                                ),
                                u
                              );
                              break;
                            case "t":
                              a.replaceItem(
                                t.createSVGPathSegCurvetoQuadraticSmoothAbs(
                                  l,
                                  h
                                ),
                                u
                              );
                              break;
                            case "a":
                              a.replaceItem(
                                t.createSVGPathSegArcAbs(
                                  l,
                                  h,
                                  d.r1,
                                  d.r2,
                                  d.angle,
                                  d.largeArcFlag,
                                  d.sweepFlag
                                ),
                                u
                              );
                              break;
                            case "z":
                            case "Z":
                              (l = e), (h = i);
                          }
                        ("M" != f && "m" != f) || ((e = l), (i = h));
                      }
                    });
                },
                { "../core/Common": 14, "../geometry/Bounds": 26 },
              ],
              28: [
                function (t, e, i) {
                  var r = {};
                  ((e.exports = r).create = function (t, e) {
                    return { x: t || 0, y: e || 0 };
                  }),
                    (r.clone = function (t) {
                      return { x: t.x, y: t.y };
                    }),
                    (r.magnitude = function (t) {
                      return Math.sqrt(t.x * t.x + t.y * t.y);
                    }),
                    (r.magnitudeSquared = function (t) {
                      return t.x * t.x + t.y * t.y;
                    }),
                    (r.rotate = function (t, e, i) {
                      var r = Math.cos(e),
                        n = Math.sin(e);
                      i || (i = {});
                      var s = t.x * r - t.y * n;
                      return (i.y = t.x * n + t.y * r), (i.x = s), i;
                    }),
                    (r.rotateAbout = function (t, e, i, r) {
                      var n = Math.cos(e),
                        s = Math.sin(e);
                      r || (r = {});
                      var o = i.x + ((t.x - i.x) * n - (t.y - i.y) * s);
                      return (
                        (r.y = i.y + ((t.x - i.x) * s + (t.y - i.y) * n)),
                        (r.x = o),
                        r
                      );
                    }),
                    (r.normalise = function (t) {
                      var e = r.magnitude(t);
                      return 0 === e
                        ? { x: 0, y: 0 }
                        : { x: t.x / e, y: t.y / e };
                    }),
                    (r.dot = function (t, e) {
                      return t.x * e.x + t.y * e.y;
                    }),
                    (r.cross = function (t, e) {
                      return t.x * e.y - t.y * e.x;
                    }),
                    (r.cross3 = function (t, e, i) {
                      return (
                        (e.x - t.x) * (i.y - t.y) - (e.y - t.y) * (i.x - t.x)
                      );
                    }),
                    (r.add = function (t, e, i) {
                      return (
                        i || (i = {}), (i.x = t.x + e.x), (i.y = t.y + e.y), i
                      );
                    }),
                    (r.sub = function (t, e, i) {
                      return (
                        i || (i = {}), (i.x = t.x - e.x), (i.y = t.y - e.y), i
                      );
                    }),
                    (r.mult = function (t, e) {
                      return { x: t.x * e, y: t.y * e };
                    }),
                    (r.div = function (t, e) {
                      return { x: t.x / e, y: t.y / e };
                    }),
                    (r.perp = function (t, e) {
                      return { x: (e = !0 === e ? -1 : 1) * -t.y, y: e * t.x };
                    }),
                    (r.neg = function (t) {
                      return { x: -t.x, y: -t.y };
                    }),
                    (r.angle = function (t, e) {
                      return Math.atan2(e.y - t.y, e.x - t.x);
                    }),
                    (r._temp = [
                      r.create(),
                      r.create(),
                      r.create(),
                      r.create(),
                      r.create(),
                      r.create(),
                    ]);
                },
                {},
              ],
              29: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Vector"),
                    s = t("../core/Common");
                  (r.create = function (t, e) {
                    for (var i = [], r = 0; r < t.length; r++) {
                      var n = t[r],
                        s = {
                          x: n.x,
                          y: n.y,
                          index: r,
                          body: e,
                          isInternal: !1,
                        };
                      i.push(s);
                    }
                    return i;
                  }),
                    (r.fromPath = function (t, e) {
                      var i = [];
                      return (
                        t.replace(
                          /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi,
                          function (t, e, r) {
                            i.push({ x: parseFloat(e), y: parseFloat(r) });
                          }
                        ),
                        r.create(i, e)
                      );
                    }),
                    (r.centre = function (t) {
                      for (
                        var e,
                          i,
                          s,
                          o = r.area(t, !0),
                          a = { x: 0, y: 0 },
                          l = 0;
                        l < t.length;
                        l++
                      )
                        (s = (l + 1) % t.length),
                          (e = n.cross(t[l], t[s])),
                          (i = n.mult(n.add(t[l], t[s]), e)),
                          (a = n.add(a, i));
                      return n.div(a, 6 * o);
                    }),
                    (r.mean = function (t) {
                      for (var e = { x: 0, y: 0 }, i = 0; i < t.length; i++)
                        (e.x += t[i].x), (e.y += t[i].y);
                      return n.div(e, t.length);
                    }),
                    (r.area = function (t, e) {
                      for (
                        var i = 0, r = t.length - 1, n = 0;
                        n < t.length;
                        n++
                      )
                        (i += (t[r].x - t[n].x) * (t[r].y + t[n].y)), (r = n);
                      return e ? i / 2 : Math.abs(i) / 2;
                    }),
                    (r.inertia = function (t, e) {
                      for (
                        var i, r, s = 0, o = 0, a = t, l = 0;
                        l < a.length;
                        l++
                      )
                        (r = (l + 1) % a.length),
                          (s +=
                            (i = Math.abs(n.cross(a[r], a[l]))) *
                            (n.dot(a[r], a[r]) +
                              n.dot(a[r], a[l]) +
                              n.dot(a[l], a[l]))),
                          (o += i);
                      return (e / 6) * (s / o);
                    }),
                    (r.translate = function (t, e, i) {
                      var r;
                      if (i)
                        for (r = 0; r < t.length; r++)
                          (t[r].x += e.x * i), (t[r].y += e.y * i);
                      else
                        for (r = 0; r < t.length; r++)
                          (t[r].x += e.x), (t[r].y += e.y);
                      return t;
                    }),
                    (r.rotate = function (t, e, i) {
                      if (0 !== e) {
                        for (
                          var r = Math.cos(e), n = Math.sin(e), s = 0;
                          s < t.length;
                          s++
                        ) {
                          var o = t[s],
                            a = o.x - i.x,
                            l = o.y - i.y;
                          (o.x = i.x + (a * r - l * n)),
                            (o.y = i.y + (a * n + l * r));
                        }
                        return t;
                      }
                    }),
                    (r.contains = function (t, e) {
                      for (var i = 0; i < t.length; i++) {
                        var r = t[i],
                          n = t[(i + 1) % t.length];
                        if (
                          0 <
                          (e.x - r.x) * (n.y - r.y) + (e.y - r.y) * (r.x - n.x)
                        )
                          return !1;
                      }
                      return !0;
                    }),
                    (r.scale = function (t, e, i, s) {
                      if (1 === e && 1 === i) return t;
                      var o, a;
                      s = s || r.centre(t);
                      for (var l = 0; l < t.length; l++)
                        (o = t[l]),
                          (a = n.sub(o, s)),
                          (t[l].x = s.x + a.x * e),
                          (t[l].y = s.y + a.y * i);
                      return t;
                    }),
                    (r.chamfer = function (t, e, i, r, o) {
                      (e = "number" == typeof e ? [e] : e || [8]),
                        (i = void 0 !== i ? i : -1),
                        (r = r || 2),
                        (o = o || 14);
                      for (var a = [], l = 0; l < t.length; l++) {
                        var h = t[0 <= l - 1 ? l - 1 : t.length - 1],
                          c = t[l],
                          u = t[(l + 1) % t.length],
                          d = e[l < e.length ? l : e.length - 1];
                        if (0 !== d) {
                          var f = n.normalise({ x: c.y - h.y, y: h.x - c.x }),
                            p = n.normalise({ x: u.y - c.y, y: c.x - u.x }),
                            g = Math.sqrt(2 * Math.pow(d, 2)),
                            m = n.mult(s.clone(f), d),
                            _ = n.normalise(n.mult(n.add(f, p), 0.5)),
                            v = n.sub(c, n.mult(_, g)),
                            y = i;
                          -1 === i && (y = 1.75 * Math.pow(d, 0.32)),
                            (y = s.clamp(y, r, o)) % 2 == 1 && (y += 1);
                          for (
                            var x = Math.acos(n.dot(f, p)) / y, b = 0;
                            b < y;
                            b++
                          )
                            a.push(n.add(n.rotate(m, x * b), v));
                        } else a.push(c);
                      }
                      return a;
                    }),
                    (r.clockwiseSort = function (t) {
                      var e = r.mean(t);
                      return (
                        t.sort(function (t, i) {
                          return n.angle(e, t) - n.angle(e, i);
                        }),
                        t
                      );
                    }),
                    (r.isConvex = function (t) {
                      var e,
                        i,
                        r,
                        n,
                        s = 0,
                        o = t.length;
                      if (o < 3) return null;
                      for (e = 0; e < o; e++)
                        if (
                          ((r = (e + 2) % o),
                          (n =
                            (t[(i = (e + 1) % o)].x - t[e].x) *
                            (t[r].y - t[i].y)),
                          (n -= (t[i].y - t[e].y) * (t[r].x - t[i].x)) < 0
                            ? (s |= 1)
                            : 0 < n && (s |= 2),
                          3 === s)
                        )
                          return !1;
                      return 0 !== s || null;
                    }),
                    (r.hull = function (t) {
                      var e,
                        i,
                        r = [],
                        s = [];
                      for (
                        (t = t.slice(0)).sort(function (t, e) {
                          var i = t.x - e.x;
                          return 0 !== i ? i : t.y - e.y;
                        }),
                          i = 0;
                        i < t.length;
                        i += 1
                      ) {
                        for (
                          e = t[i];
                          2 <= s.length &&
                          n.cross3(s[s.length - 2], s[s.length - 1], e) <= 0;

                        )
                          s.pop();
                        s.push(e);
                      }
                      for (i = t.length - 1; 0 <= i; i -= 1) {
                        for (
                          e = t[i];
                          2 <= r.length &&
                          n.cross3(r[r.length - 2], r[r.length - 1], e) <= 0;

                        )
                          r.pop();
                        r.push(e);
                      }
                      return r.pop(), s.pop(), r.concat(s);
                    });
                },
                { "../core/Common": 14, "../geometry/Vector": 28 },
              ],
              30: [
                function (t, e, i) {
                  var r = (e.exports = t("../core/Matter"));
                  (r.Body = t("../body/Body")),
                    (r.Composite = t("../body/Composite")),
                    (r.World = t("../body/World")),
                    (r.Contact = t("../collision/Contact")),
                    (r.Detector = t("../collision/Detector")),
                    (r.Grid = t("../collision/Grid")),
                    (r.Pairs = t("../collision/Pairs")),
                    (r.Pair = t("../collision/Pair")),
                    (r.Query = t("../collision/Query")),
                    (r.Resolver = t("../collision/Resolver")),
                    (r.SAT = t("../collision/SAT")),
                    (r.Constraint = t("../constraint/Constraint")),
                    (r.MouseConstraint = t("../constraint/MouseConstraint")),
                    (r.Common = t("../core/Common")),
                    (r.Engine = t("../core/Engine")),
                    (r.Events = t("../core/Events")),
                    (r.Mouse = t("../core/Mouse")),
                    (r.Runner = t("../core/Runner")),
                    (r.Sleeping = t("../core/Sleeping")),
                    (r.Plugin = t("../core/Plugin")),
                    (r.Bodies = t("../factory/Bodies")),
                    (r.Composites = t("../factory/Composites")),
                    (r.Axes = t("../geometry/Axes")),
                    (r.Bounds = t("../geometry/Bounds")),
                    (r.Svg = t("../geometry/Svg")),
                    (r.Vector = t("../geometry/Vector")),
                    (r.Vertices = t("../geometry/Vertices")),
                    (r.Render = t("../render/Render")),
                    (r.RenderPixi = t("../render/RenderPixi")),
                    (r.World.add = r.Composite.add),
                    (r.World.remove = r.Composite.remove),
                    (r.World.addComposite = r.Composite.addComposite),
                    (r.World.addBody = r.Composite.addBody),
                    (r.World.addConstraint = r.Composite.addConstraint),
                    (r.World.clear = r.Composite.clear),
                    (r.Engine.run = r.Runner.run);
                },
                {
                  "../body/Body": 1,
                  "../body/Composite": 2,
                  "../body/World": 3,
                  "../collision/Contact": 4,
                  "../collision/Detector": 5,
                  "../collision/Grid": 6,
                  "../collision/Pair": 7,
                  "../collision/Pairs": 8,
                  "../collision/Query": 9,
                  "../collision/Resolver": 10,
                  "../collision/SAT": 11,
                  "../constraint/Constraint": 12,
                  "../constraint/MouseConstraint": 13,
                  "../core/Common": 14,
                  "../core/Engine": 15,
                  "../core/Events": 16,
                  "../core/Matter": 17,
                  "../core/Metrics": 18,
                  "../core/Mouse": 19,
                  "../core/Plugin": 20,
                  "../core/Runner": 21,
                  "../core/Sleeping": 22,
                  "../factory/Bodies": 23,
                  "../factory/Composites": 24,
                  "../geometry/Axes": 25,
                  "../geometry/Bounds": 26,
                  "../geometry/Svg": 27,
                  "../geometry/Vector": 28,
                  "../geometry/Vertices": 29,
                  "../render/Render": 31,
                  "../render/RenderPixi": 32,
                },
              ],
              31: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../core/Common"),
                    s = t("../body/Composite"),
                    o = t("../geometry/Bounds"),
                    a = t("../core/Events"),
                    l = t("../collision/Grid"),
                    h = t("../geometry/Vector"),
                    c = t("../core/Mouse");
                  !(function () {
                    var t, e;
                    "undefined" != typeof window &&
                      ((t =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (t) {
                          window.setTimeout(function () {
                            t(n.now());
                          }, 1e3 / 60);
                        }),
                      (e =
                        window.cancelAnimationFrame ||
                        window.mozCancelAnimationFrame ||
                        window.webkitCancelAnimationFrame ||
                        window.msCancelAnimationFrame)),
                      (r.create = function (t) {
                        var e = {
                            controller: r,
                            engine: null,
                            element: null,
                            canvas: null,
                            mouse: null,
                            frameRequestId: null,
                            options: {
                              width: 800,
                              height: 600,
                              pixelRatio: 1,
                              background: "#18181d",
                              wireframeBackground: "#0f0f13",
                              hasBounds: !!t.bounds,
                              enabled: !0,
                              wireframes: !0,
                              showSleeping: !0,
                              showDebug: !1,
                              showBroadphase: !1,
                              showBounds: !1,
                              showVelocity: !1,
                              showCollisions: !1,
                              showSeparations: !1,
                              showAxes: !1,
                              showPositions: !1,
                              showAngleIndicator: !1,
                              showIds: !1,
                              showShadows: !1,
                              showVertexNumbers: !1,
                              showConvexHulls: !1,
                              showInternalEdges: !1,
                              showMousePosition: !1,
                            },
                          },
                          s = n.extend(e, t);
                        return (
                          s.canvas &&
                            ((s.canvas.width =
                              s.options.width || s.canvas.width),
                            (s.canvas.height =
                              s.options.height || s.canvas.height)),
                          (s.mouse = t.mouse),
                          (s.engine = t.engine),
                          (s.canvas =
                            s.canvas || i(s.options.width, s.options.height)),
                          (s.context = s.canvas.getContext("2d")),
                          (s.textures = {}),
                          (s.bounds = s.bounds || {
                            min: { x: 0, y: 0 },
                            max: { x: s.canvas.width, y: s.canvas.height },
                          }),
                          1 !== s.options.pixelRatio &&
                            r.setPixelRatio(s, s.options.pixelRatio),
                          n.isElement(s.element)
                            ? s.element.appendChild(s.canvas)
                            : s.canvas.parentNode ||
                              n.log(
                                "Render.create: options.element was undefined, render.canvas was created but not appended",
                                "warn"
                              ),
                          s
                        );
                      }),
                      (r.run = function (e) {
                        !(function i(n) {
                          (e.frameRequestId = t(i)), r.world(e);
                        })();
                      }),
                      (r.stop = function (t) {
                        e(t.frameRequestId);
                      }),
                      (r.setPixelRatio = function (t, e) {
                        var i = t.options,
                          r = t.canvas;
                        "auto" === e && (e = u(r)),
                          (i.pixelRatio = e),
                          r.setAttribute("data-pixel-ratio", e),
                          (r.width = i.width * e),
                          (r.height = i.height * e),
                          (r.style.width = i.width + "px"),
                          (r.style.height = i.height + "px"),
                          t.context.scale(e, e);
                      }),
                      (r.lookAt = function (t, e, i, r) {
                        (r = void 0 === r || r),
                          (e = n.isArray(e) ? e : [e]),
                          (i = i || { x: 0, y: 0 });
                        for (
                          var s = {
                              min: { x: 1 / 0, y: 1 / 0 },
                              max: { x: -1 / 0, y: -1 / 0 },
                            },
                            o = 0;
                          o < e.length;
                          o += 1
                        ) {
                          var a = e[o],
                            l = a.bounds
                              ? a.bounds.min
                              : a.min || a.position || a,
                            h = a.bounds
                              ? a.bounds.max
                              : a.max || a.position || a;
                          l &&
                            h &&
                            (l.x < s.min.x && (s.min.x = l.x),
                            h.x > s.max.x && (s.max.x = h.x),
                            l.y < s.min.y && (s.min.y = l.y),
                            h.y > s.max.y && (s.max.y = h.y));
                        }
                        var u = s.max.x - s.min.x + 2 * i.x,
                          d = s.max.y - s.min.y + 2 * i.y,
                          f = t.canvas.height,
                          p = t.canvas.width / f,
                          g = u / d,
                          m = 1,
                          _ = 1;
                        p < g ? (_ = g / p) : (m = p / g),
                          (t.options.hasBounds = !0),
                          (t.bounds.min.x = s.min.x),
                          (t.bounds.max.x = s.min.x + u * m),
                          (t.bounds.min.y = s.min.y),
                          (t.bounds.max.y = s.min.y + d * _),
                          r &&
                            ((t.bounds.min.x += 0.5 * u - u * m * 0.5),
                            (t.bounds.max.x += 0.5 * u - u * m * 0.5),
                            (t.bounds.min.y += 0.5 * d - d * _ * 0.5),
                            (t.bounds.max.y += 0.5 * d - d * _ * 0.5)),
                          (t.bounds.min.x -= i.x),
                          (t.bounds.max.x -= i.x),
                          (t.bounds.min.y -= i.y),
                          (t.bounds.max.y -= i.y),
                          t.mouse &&
                            (c.setScale(t.mouse, {
                              x:
                                (t.bounds.max.x - t.bounds.min.x) /
                                t.canvas.width,
                              y:
                                (t.bounds.max.y - t.bounds.min.y) /
                                t.canvas.height,
                            }),
                            c.setOffset(t.mouse, t.bounds.min));
                      }),
                      (r.startViewTransform = function (t) {
                        var e = t.bounds.max.x - t.bounds.min.x,
                          i = t.bounds.max.y - t.bounds.min.y,
                          r = e / t.options.width,
                          n = i / t.options.height;
                        t.context.scale(1 / r, 1 / n),
                          t.context.translate(-t.bounds.min.x, -t.bounds.min.y);
                      }),
                      (r.endViewTransform = function (t) {
                        t.context.setTransform(
                          t.options.pixelRatio,
                          0,
                          0,
                          t.options.pixelRatio,
                          0,
                          0
                        );
                      }),
                      (r.world = function (t) {
                        var e,
                          i = t.engine,
                          n = i.world,
                          u = t.canvas,
                          d = t.context,
                          p = t.options,
                          g = s.allBodies(n),
                          m = s.allConstraints(n),
                          _ = p.wireframes
                            ? p.wireframeBackground
                            : p.background,
                          v = [],
                          y = [],
                          x = { timestamp: i.timing.timestamp };
                        if (
                          (a.trigger(t, "beforeRender", x),
                          t.currentBackground !== _ && f(t, _),
                          (d.globalCompositeOperation = "source-in"),
                          (d.fillStyle = "transparent"),
                          d.fillRect(0, 0, u.width, u.height),
                          (d.globalCompositeOperation = "source-over"),
                          p.hasBounds)
                        ) {
                          for (e = 0; e < g.length; e++) {
                            var b = g[e];
                            o.overlaps(b.bounds, t.bounds) && v.push(b);
                          }
                          for (e = 0; e < m.length; e++) {
                            var w = m[e],
                              S = w.bodyA,
                              T = w.bodyB,
                              P = w.pointA,
                              C = w.pointB;
                            S && (P = h.add(S.position, w.pointA)),
                              T && (C = h.add(T.position, w.pointB)),
                              P &&
                                C &&
                                (o.contains(t.bounds, P) ||
                                  o.contains(t.bounds, C)) &&
                                y.push(w);
                          }
                          r.startViewTransform(t),
                            t.mouse &&
                              (c.setScale(t.mouse, {
                                x:
                                  (t.bounds.max.x - t.bounds.min.x) /
                                  t.canvas.width,
                                y:
                                  (t.bounds.max.y - t.bounds.min.y) /
                                  t.canvas.height,
                              }),
                              c.setOffset(t.mouse, t.bounds.min));
                        } else (y = m), (v = g);
                        !p.wireframes || (i.enableSleeping && p.showSleeping)
                          ? r.bodies(t, v, d)
                          : (p.showConvexHulls && r.bodyConvexHulls(t, v, d),
                            r.bodyWireframes(t, v, d)),
                          p.showBounds && r.bodyBounds(t, v, d),
                          (p.showAxes || p.showAngleIndicator) &&
                            r.bodyAxes(t, v, d),
                          p.showPositions && r.bodyPositions(t, v, d),
                          p.showVelocity && r.bodyVelocity(t, v, d),
                          p.showIds && r.bodyIds(t, v, d),
                          p.showSeparations &&
                            r.separations(t, i.pairs.list, d),
                          p.showCollisions && r.collisions(t, i.pairs.list, d),
                          p.showVertexNumbers && r.vertexNumbers(t, v, d),
                          p.showMousePosition && r.mousePosition(t, t.mouse, d),
                          r.constraints(y, d),
                          p.showBroadphase &&
                            i.broadphase.controller === l &&
                            r.grid(t, i.broadphase, d),
                          p.showDebug && r.debug(t, d),
                          p.hasBounds && r.endViewTransform(t),
                          a.trigger(t, "afterRender", x);
                      }),
                      (r.debug = function (t, e) {
                        var i = e,
                          r = t.engine,
                          n = r.world,
                          o = r.metrics,
                          a = t.options;
                        if (
                          (s.allBodies(n),
                          500 <= r.timing.timestamp - (t.debugTimestamp || 0))
                        ) {
                          var l = "";
                          o.timing &&
                            (l += "fps: " + Math.round(o.timing.fps) + "    "),
                            (t.debugString = l),
                            (t.debugTimestamp = r.timing.timestamp);
                        }
                        if (t.debugString) {
                          (i.font = "12px Arial"),
                            a.wireframes
                              ? (i.fillStyle = "rgba(255,255,255,0.5)")
                              : (i.fillStyle = "rgba(0,0,0,0)");
                          for (
                            var h = t.debugString.split("\n"), c = 0;
                            c < h.length;
                            c++
                          )
                            i.fillText(h[c], 50, 50 + 18 * c);
                        }
                      }),
                      (r.constraints = function (t, e) {
                        for (var i = e, r = 0; r < t.length; r++) {
                          var s = t[r];
                          if (s.render.visible && s.pointA && s.pointB) {
                            var o,
                              a,
                              l = s.bodyA,
                              c = s.bodyB;
                            if (
                              ((o = l ? h.add(l.position, s.pointA) : s.pointA),
                              "pin" === s.render.type)
                            )
                              i.beginPath(),
                                i.arc(o.x, o.y, 3, 0, 2 * Math.PI),
                                i.closePath();
                            else {
                              if (
                                ((a = c
                                  ? h.add(c.position, s.pointB)
                                  : s.pointB),
                                i.beginPath(),
                                i.moveTo(o.x, o.y),
                                "spring" === s.render.type)
                              )
                                for (
                                  var u,
                                    d = h.sub(a, o),
                                    f = h.perp(h.normalise(d)),
                                    p = Math.ceil(
                                      n.clamp(s.length / 5, 12, 20)
                                    ),
                                    g = 1;
                                  g < p;
                                  g += 1
                                )
                                  (u = g % 2 == 0 ? 1 : -1),
                                    i.lineTo(
                                      o.x + d.x * (g / p) + f.x * u * 4,
                                      o.y + d.y * (g / p) + f.y * u * 4
                                    );
                              i.lineTo(a.x, a.y);
                            }
                            s.render.lineWidth &&
                              ((i.lineWidth = s.render.lineWidth),
                              (i.strokeStyle = s.render.strokeStyle),
                              i.stroke()),
                              s.render.anchors &&
                                ((i.fillStyle = s.render.strokeStyle),
                                i.beginPath(),
                                i.arc(o.x, o.y, 3, 0, 2 * Math.PI),
                                i.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                                i.closePath(),
                                i.fill());
                          }
                        }
                      }),
                      (r.bodyShadows = function (t, e, i) {
                        for (var r = i, n = (t.engine, 0); n < e.length; n++) {
                          var s = e[n];
                          if (s.render.visible) {
                            if (s.circleRadius)
                              r.beginPath(),
                                r.arc(
                                  s.position.x,
                                  s.position.y,
                                  s.circleRadius,
                                  0,
                                  2 * Math.PI
                                ),
                                r.closePath();
                            else {
                              r.beginPath(),
                                r.moveTo(s.vertices[0].x, s.vertices[0].y);
                              for (var o = 1; o < s.vertices.length; o++)
                                r.lineTo(s.vertices[o].x, s.vertices[o].y);
                              r.closePath();
                            }
                            var a = s.position.x - 0.5 * t.options.width,
                              l = s.position.y - 0.2 * t.options.height,
                              h = Math.abs(a) + Math.abs(l);
                            (r.shadowColor = "rgba(0,0,0,0.15)"),
                              (r.shadowOffsetX = 0.05 * a),
                              (r.shadowOffsetY = 0.05 * l),
                              (r.shadowBlur = 1 + 12 * Math.min(1, h / 1e3)),
                              r.fill(),
                              (r.shadowColor = null),
                              (r.shadowOffsetX = null),
                              (r.shadowOffsetY = null),
                              (r.shadowBlur = null);
                          }
                        }
                      }),
                      (r.bodies = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o,
                          a = i,
                          l = (t.engine, t.options),
                          h = l.showInternalEdges || !l.wireframes;
                        for (s = 0; s < e.length; s++)
                          if ((r = e[s]).render.visible)
                            for (
                              o = 1 < r.parts.length ? 1 : 0;
                              o < r.parts.length;
                              o++
                            )
                              if ((n = r.parts[o]).render.visible) {
                                if (
                                  (l.showSleeping && r.isSleeping
                                    ? (a.globalAlpha = 0.5 * n.render.opacity)
                                    : 1 !== n.render.opacity &&
                                      (a.globalAlpha = n.render.opacity),
                                  n.render.sprite &&
                                    n.render.sprite.texture &&
                                    !l.wireframes)
                                ) {
                                  var c = n.render.sprite,
                                    u = d(t, c.texture);
                                  a.translate(n.position.x, n.position.y),
                                    a.rotate(n.angle),
                                    a.drawImage(
                                      u,
                                      u.width * -c.xOffset * c.xScale,
                                      u.height * -c.yOffset * c.yScale,
                                      u.width * c.xScale,
                                      u.height * c.yScale
                                    ),
                                    a.rotate(-n.angle),
                                    a.translate(-n.position.x, -n.position.y);
                                } else {
                                  if (n.circleRadius)
                                    a.beginPath(),
                                      a.arc(
                                        n.position.x,
                                        n.position.y,
                                        n.circleRadius,
                                        0,
                                        2 * Math.PI
                                      );
                                  else {
                                    a.beginPath(),
                                      a.moveTo(
                                        n.vertices[0].x,
                                        n.vertices[0].y
                                      );
                                    for (var f = 1; f < n.vertices.length; f++)
                                      !n.vertices[f - 1].isInternal || h
                                        ? a.lineTo(
                                            n.vertices[f].x,
                                            n.vertices[f].y
                                          )
                                        : a.moveTo(
                                            n.vertices[f].x,
                                            n.vertices[f].y
                                          ),
                                        n.vertices[f].isInternal &&
                                          !h &&
                                          a.moveTo(
                                            n.vertices[
                                              (f + 1) % n.vertices.length
                                            ].x,
                                            n.vertices[
                                              (f + 1) % n.vertices.length
                                            ].y
                                          );
                                    a.lineTo(n.vertices[0].x, n.vertices[0].y),
                                      a.closePath();
                                  }
                                  l.wireframes
                                    ? ((a.lineWidth = 1),
                                      (a.strokeStyle = "#bbb"),
                                      a.stroke())
                                    : ((a.fillStyle = n.render.fillStyle),
                                      n.render.lineWidth &&
                                        ((a.lineWidth = n.render.lineWidth),
                                        (a.strokeStyle = n.render.strokeStyle),
                                        a.stroke()),
                                      a.fill());
                                }
                                a.globalAlpha = 1;
                              }
                      }),
                      (r.bodyWireframes = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o,
                          a,
                          l = i,
                          h = t.options.showInternalEdges;
                        for (l.beginPath(), s = 0; s < e.length; s++)
                          if ((r = e[s]).render.visible)
                            for (
                              a = 1 < r.parts.length ? 1 : 0;
                              a < r.parts.length;
                              a++
                            ) {
                              for (
                                n = r.parts[a],
                                  l.moveTo(n.vertices[0].x, n.vertices[0].y),
                                  o = 1;
                                o < n.vertices.length;
                                o++
                              )
                                !n.vertices[o - 1].isInternal || h
                                  ? l.lineTo(n.vertices[o].x, n.vertices[o].y)
                                  : l.moveTo(n.vertices[o].x, n.vertices[o].y),
                                  n.vertices[o].isInternal &&
                                    !h &&
                                    l.moveTo(
                                      n.vertices[(o + 1) % n.vertices.length].x,
                                      n.vertices[(o + 1) % n.vertices.length].y
                                    );
                              l.lineTo(n.vertices[0].x, n.vertices[0].y);
                            }
                        (l.lineWidth = 1), (l.strokeStyle = "#bbb"), l.stroke();
                      }),
                      (r.bodyConvexHulls = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o = i;
                        for (o.beginPath(), n = 0; n < e.length; n++)
                          if (
                            (r = e[n]).render.visible &&
                            1 !== r.parts.length
                          ) {
                            for (
                              o.moveTo(r.vertices[0].x, r.vertices[0].y), s = 1;
                              s < r.vertices.length;
                              s++
                            )
                              o.lineTo(r.vertices[s].x, r.vertices[s].y);
                            o.lineTo(r.vertices[0].x, r.vertices[0].y);
                          }
                        (o.lineWidth = 1),
                          (o.strokeStyle = "rgba(255,255,255,0.2)"),
                          o.stroke();
                      }),
                      (r.vertexNumbers = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o = i;
                        for (r = 0; r < e.length; r++) {
                          var a = e[r].parts;
                          for (s = 1 < a.length ? 1 : 0; s < a.length; s++) {
                            var l = a[s];
                            for (n = 0; n < l.vertices.length; n++)
                              (o.fillStyle = "rgba(255,255,255,0.2)"),
                                o.fillText(
                                  r + "_" + n,
                                  l.position.x +
                                    0.8 * (l.vertices[n].x - l.position.x),
                                  l.position.y +
                                    0.8 * (l.vertices[n].y - l.position.y)
                                );
                          }
                        }
                      }),
                      (r.mousePosition = function (t, e, i) {
                        var r = i;
                        (r.fillStyle = "rgba(255,255,255,0.8)"),
                          r.fillText(
                            e.position.x + "  " + e.position.y,
                            e.position.x + 5,
                            e.position.y - 5
                          );
                      }),
                      (r.bodyBounds = function (t, e, i) {
                        var r = i,
                          n = (t.engine, t.options);
                        r.beginPath();
                        for (var s = 0; s < e.length; s++)
                          if (e[s].render.visible)
                            for (
                              var o = e[s].parts, a = 1 < o.length ? 1 : 0;
                              a < o.length;
                              a++
                            ) {
                              var l = o[a];
                              r.rect(
                                l.bounds.min.x,
                                l.bounds.min.y,
                                l.bounds.max.x - l.bounds.min.x,
                                l.bounds.max.y - l.bounds.min.y
                              );
                            }
                        n.wireframes
                          ? (r.strokeStyle = "rgba(255,255,255,0.08)")
                          : (r.strokeStyle = "rgba(0,0,0,0.1)"),
                          (r.lineWidth = 1),
                          r.stroke();
                      }),
                      (r.bodyAxes = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o,
                          a = i,
                          l = (t.engine, t.options);
                        for (a.beginPath(), n = 0; n < e.length; n++) {
                          var h = e[n],
                            c = h.parts;
                          if (h.render.visible)
                            if (l.showAxes)
                              for (s = 1 < c.length ? 1 : 0; s < c.length; s++)
                                for (r = c[s], o = 0; o < r.axes.length; o++) {
                                  var u = r.axes[o];
                                  a.moveTo(r.position.x, r.position.y),
                                    a.lineTo(
                                      r.position.x + 20 * u.x,
                                      r.position.y + 20 * u.y
                                    );
                                }
                            else
                              for (s = 1 < c.length ? 1 : 0; s < c.length; s++)
                                for (r = c[s], o = 0; o < r.axes.length; o++)
                                  a.moveTo(r.position.x, r.position.y),
                                    a.lineTo(
                                      (r.vertices[0].x +
                                        r.vertices[r.vertices.length - 1].x) /
                                        2,
                                      (r.vertices[0].y +
                                        r.vertices[r.vertices.length - 1].y) /
                                        2
                                    );
                        }
                        l.wireframes
                          ? ((a.strokeStyle = "indianred"), (a.lineWidth = 1))
                          : ((a.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                            (a.globalCompositeOperation = "overlay"),
                            (a.lineWidth = 2)),
                          a.stroke(),
                          (a.globalCompositeOperation = "source-over");
                      }),
                      (r.bodyPositions = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o,
                          a = i,
                          l = (t.engine, t.options);
                        for (a.beginPath(), s = 0; s < e.length; s++)
                          if ((r = e[s]).render.visible)
                            for (o = 0; o < r.parts.length; o++)
                              (n = r.parts[o]),
                                a.arc(
                                  n.position.x,
                                  n.position.y,
                                  3,
                                  0,
                                  2 * Math.PI,
                                  !1
                                ),
                                a.closePath();
                        for (
                          l.wireframes
                            ? (a.fillStyle = "indianred")
                            : (a.fillStyle = "rgba(0,0,0,0)"),
                            a.fill(),
                            a.beginPath(),
                            s = 0;
                          s < e.length;
                          s++
                        )
                          (r = e[s]).render.visible &&
                            (a.arc(
                              r.positionPrev.x,
                              r.positionPrev.y,
                              2,
                              0,
                              2 * Math.PI,
                              !1
                            ),
                            a.closePath());
                        (a.fillStyle = "rgba(255,165,0,0.8)"), a.fill();
                      }),
                      (r.bodyVelocity = function (t, e, i) {
                        var r = i;
                        r.beginPath();
                        for (var n = 0; n < e.length; n++) {
                          var s = e[n];
                          s.render.visible &&
                            (r.moveTo(s.position.x, s.position.y),
                            r.lineTo(
                              s.position.x +
                                2 * (s.position.x - s.positionPrev.x),
                              s.position.y +
                                2 * (s.position.y - s.positionPrev.y)
                            ));
                        }
                        (r.lineWidth = 3),
                          (r.strokeStyle = "cornflowerblue"),
                          r.stroke();
                      }),
                      (r.bodyIds = function (t, e, i) {
                        var r,
                          n,
                          s = i;
                        for (r = 0; r < e.length; r++)
                          if (e[r].render.visible) {
                            var o = e[r].parts;
                            for (n = 1 < o.length ? 1 : 0; n < o.length; n++) {
                              var a = o[n];
                              (s.font = "12px Arial"),
                                (s.fillStyle = "rgba(255,255,255,0.5)"),
                                s.fillText(
                                  a.id,
                                  a.position.x + 10,
                                  a.position.y - 10
                                );
                            }
                          }
                      }),
                      (r.collisions = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o,
                          a = i,
                          l = t.options;
                        for (a.beginPath(), s = 0; s < e.length; s++)
                          if ((r = e[s]).isActive)
                            for (
                              n = r.collision, o = 0;
                              o < r.activeContacts.length;
                              o++
                            ) {
                              var h = r.activeContacts[o].vertex;
                              a.rect(h.x - 1.5, h.y - 1.5, 3.5, 3.5);
                            }
                        for (
                          l.wireframes
                            ? (a.fillStyle = "rgba(255,255,255,0.7)")
                            : (a.fillStyle = "orange"),
                            a.fill(),
                            a.beginPath(),
                            s = 0;
                          s < e.length;
                          s++
                        )
                          if (
                            (r = e[s]).isActive &&
                            ((n = r.collision), 0 < r.activeContacts.length)
                          ) {
                            var c = r.activeContacts[0].vertex.x,
                              u = r.activeContacts[0].vertex.y;
                            2 === r.activeContacts.length &&
                              ((c =
                                (r.activeContacts[0].vertex.x +
                                  r.activeContacts[1].vertex.x) /
                                2),
                              (u =
                                (r.activeContacts[0].vertex.y +
                                  r.activeContacts[1].vertex.y) /
                                2)),
                              n.bodyB === n.supports[0].body ||
                              !0 === n.bodyA.isStatic
                                ? a.moveTo(
                                    c - 8 * n.normal.x,
                                    u - 8 * n.normal.y
                                  )
                                : a.moveTo(
                                    c + 8 * n.normal.x,
                                    u + 8 * n.normal.y
                                  ),
                              a.lineTo(c, u);
                          }
                        l.wireframes
                          ? (a.strokeStyle = "rgba(255,165,0,0.7)")
                          : (a.strokeStyle = "orange"),
                          (a.lineWidth = 1),
                          a.stroke();
                      }),
                      (r.separations = function (t, e, i) {
                        var r,
                          n,
                          s,
                          o,
                          a,
                          l = i,
                          h = t.options;
                        for (l.beginPath(), a = 0; a < e.length; a++)
                          if ((r = e[a]).isActive) {
                            s = (n = r.collision).bodyA;
                            var c = 1;
                            (o = n.bodyB).isStatic || s.isStatic || (c = 0.5),
                              o.isStatic && (c = 0),
                              l.moveTo(o.position.x, o.position.y),
                              l.lineTo(
                                o.position.x - n.penetration.x * c,
                                o.position.y - n.penetration.y * c
                              ),
                              (c = 1),
                              o.isStatic || s.isStatic || (c = 0.5),
                              s.isStatic && (c = 0),
                              l.moveTo(s.position.x, s.position.y),
                              l.lineTo(
                                s.position.x + n.penetration.x * c,
                                s.position.y + n.penetration.y * c
                              );
                          }
                        h.wireframes
                          ? (l.strokeStyle = "rgba(255,165,0,0.5)")
                          : (l.strokeStyle = "orange"),
                          l.stroke();
                      }),
                      (r.grid = function (t, e, i) {
                        var r = i;
                        t.options.wireframes
                          ? (r.strokeStyle = "rgba(255,180,0,0.1)")
                          : (r.strokeStyle = "rgba(255,180,0,0.5)"),
                          r.beginPath();
                        for (
                          var s = n.keys(e.buckets), o = 0;
                          o < s.length;
                          o++
                        ) {
                          var a = s[o];
                          if (!(e.buckets[a].length < 2)) {
                            var l = a.split(/C|R/);
                            r.rect(
                              0.5 + parseInt(l[1], 10) * e.bucketWidth,
                              0.5 + parseInt(l[2], 10) * e.bucketHeight,
                              e.bucketWidth,
                              e.bucketHeight
                            );
                          }
                        }
                        (r.lineWidth = 1), r.stroke();
                      }),
                      (r.inspector = function (t, e) {
                        t.engine;
                        var i,
                          r = t.selected,
                          n = t.render,
                          s = n.options;
                        if (s.hasBounds) {
                          var o = n.bounds.max.x - n.bounds.min.x,
                            a = n.bounds.max.y - n.bounds.min.y,
                            l = o / n.options.width,
                            h = a / n.options.height;
                          e.scale(1 / l, 1 / h),
                            e.translate(-n.bounds.min.x, -n.bounds.min.y);
                        }
                        for (var c = 0; c < r.length; c++) {
                          var u = r[c].data;
                          switch (
                            (e.translate(0.5, 0.5),
                            (e.lineWidth = 1),
                            (e.strokeStyle = "rgba(255,165,0,0.9)"),
                            e.setLineDash([1, 2]),
                            u.type)
                          ) {
                            case "body":
                              (i = u.bounds),
                                e.beginPath(),
                                e.rect(
                                  Math.floor(i.min.x - 3),
                                  Math.floor(i.min.y - 3),
                                  Math.floor(i.max.x - i.min.x + 6),
                                  Math.floor(i.max.y - i.min.y + 6)
                                ),
                                e.closePath(),
                                e.stroke();
                              break;
                            case "constraint":
                              var d = u.pointA;
                              u.bodyA && (d = u.pointB),
                                e.beginPath(),
                                e.arc(d.x, d.y, 10, 0, 2 * Math.PI),
                                e.closePath(),
                                e.stroke();
                          }
                          e.setLineDash([]), e.translate(-0.5, -0.5);
                        }
                        null !== t.selectStart &&
                          (e.translate(0.5, 0.5),
                          (e.lineWidth = 1),
                          (e.strokeStyle = "rgba(255,165,0,0.6)"),
                          (e.fillStyle = "rgba(255,165,0,0.1)"),
                          (i = t.selectBounds),
                          e.beginPath(),
                          e.rect(
                            Math.floor(i.min.x),
                            Math.floor(i.min.y),
                            Math.floor(i.max.x - i.min.x),
                            Math.floor(i.max.y - i.min.y)
                          ),
                          e.closePath(),
                          e.stroke(),
                          e.fill(),
                          e.translate(-0.5, -0.5)),
                          s.hasBounds && e.setTransform(1, 0, 0, 1, 0, 0);
                      });
                    var i = function (t, e) {
                        var i = document.createElement("canvas");
                        return (
                          (i.width = t),
                          (i.height = e),
                          (i.oncontextmenu = function () {
                            return !1;
                          }),
                          (i.onselectstart = function () {
                            return !1;
                          }),
                          i
                        );
                      },
                      u = function (t) {
                        var e = t.getContext("2d");
                        return (
                          (window.devicePixelRatio || 1) /
                          (e.webkitBackingStorePixelRatio ||
                            e.mozBackingStorePixelRatio ||
                            e.msBackingStorePixelRatio ||
                            e.oBackingStorePixelRatio ||
                            e.backingStorePixelRatio ||
                            1)
                        );
                      },
                      d = function (t, e) {
                        var i = t.textures[e];
                        return (
                          i || (((i = t.textures[e] = new Image()).src = e), i)
                        );
                      },
                      f = function (t, e) {
                        var i = e;
                        /(jpg|gif|png)$/.test(e) && (i = "url(" + e + ")"),
                          (t.canvas.style.background = i),
                          (t.canvas.style.backgroundSize = "contain"),
                          (t.currentBackground = e);
                      };
                  })();
                },
                {
                  "../body/Composite": 2,
                  "../collision/Grid": 6,
                  "../core/Common": 14,
                  "../core/Events": 16,
                  "../core/Mouse": 19,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                },
              ],
              32: [
                function (t, e, i) {
                  var r = {};
                  e.exports = r;
                  var n = t("../geometry/Bounds"),
                    s = t("../body/Composite"),
                    o = t("../core/Common"),
                    a = t("../core/Events"),
                    l = t("../geometry/Vector");
                  !(function () {
                    var t, e;
                    "undefined" != typeof window &&
                      ((t =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (t) {
                          window.setTimeout(function () {
                            t(o.now());
                          }, 1e3 / 60);
                        }),
                      (e =
                        window.cancelAnimationFrame ||
                        window.mozCancelAnimationFrame ||
                        window.webkitCancelAnimationFrame ||
                        window.msCancelAnimationFrame)),
                      (r.create = function (t) {
                        o.warn(
                          "RenderPixi.create: Matter.RenderPixi is deprecated (see docs)"
                        );
                        var e = {
                            controller: r,
                            engine: null,
                            element: null,
                            frameRequestId: null,
                            canvas: null,
                            renderer: null,
                            container: null,
                            spriteContainer: null,
                            pixiOptions: null,
                            options: {
                              width: 800,
                              height: 600,
                              background: "#fafafa",
                              wireframeBackground: "#222",
                              hasBounds: !1,
                              enabled: !0,
                              wireframes: !0,
                              showSleeping: !0,
                              showDebug: !1,
                              showBroadphase: !1,
                              showBounds: !1,
                              showVelocity: !1,
                              showCollisions: !1,
                              showAxes: !1,
                              showPositions: !1,
                              showAngleIndicator: !1,
                              showIds: !1,
                              showShadows: !1,
                            },
                          },
                          i = o.extend(e, t),
                          n =
                            !i.options.wireframes &&
                            "transparent" === i.options.background;
                        return (
                          (i.pixiOptions = i.pixiOptions || {
                            view: i.canvas,
                            transparent: n,
                            antialias: !0,
                            backgroundColor: t.background,
                          }),
                          (i.mouse = t.mouse),
                          (i.engine = t.engine),
                          (i.renderer =
                            i.renderer ||
                            new PIXI.WebGLRenderer(
                              i.options.width,
                              i.options.height,
                              i.pixiOptions
                            )),
                          (i.container = i.container || new PIXI.Container()),
                          (i.spriteContainer =
                            i.spriteContainer || new PIXI.Container()),
                          (i.canvas = i.canvas || i.renderer.view),
                          (i.bounds = i.bounds || {
                            min: { x: 0, y: 0 },
                            max: { x: i.options.width, y: i.options.height },
                          }),
                          a.on(i.engine, "beforeUpdate", function () {
                            r.clear(i);
                          }),
                          (i.textures = {}),
                          (i.sprites = {}),
                          (i.primitives = {}),
                          i.container.addChild(i.spriteContainer),
                          o.isElement(i.element)
                            ? i.element.appendChild(i.canvas)
                            : o.warn(
                                'No "render.element" passed, "render.canvas" was not inserted into document.'
                              ),
                          (i.canvas.oncontextmenu = function () {
                            return !1;
                          }),
                          (i.canvas.onselectstart = function () {
                            return !1;
                          }),
                          i
                        );
                      }),
                      (r.run = function (e) {
                        !(function i(n) {
                          (e.frameRequestId = t(i)), r.world(e);
                        })();
                      }),
                      (r.stop = function (t) {
                        e(t.frameRequestId);
                      }),
                      (r.clear = function (t) {
                        for (
                          var e = t.container, i = t.spriteContainer;
                          e.children[0];

                        )
                          e.removeChild(e.children[0]);
                        for (; i.children[0]; ) i.removeChild(i.children[0]);
                        var r = t.sprites["bg-0"];
                        (t.textures = {}),
                          (t.sprites = {}),
                          (t.primitives = {}),
                          (t.sprites["bg-0"] = r) && e.addChildAt(r, 0),
                          t.container.addChild(t.spriteContainer),
                          (t.currentBackground = null),
                          e.scale.set(1, 1),
                          e.position.set(0, 0);
                      }),
                      (r.setBackground = function (t, e) {
                        if (t.currentBackground !== e) {
                          var i = e.indexOf && -1 !== e.indexOf("#"),
                            r = t.sprites["bg-0"];
                          if (i) {
                            var n = o.colorToNumber(e);
                            (t.renderer.backgroundColor = n),
                              r && t.container.removeChild(r);
                          } else if (!r) {
                            var s = c(t, e);
                            ((r = t.sprites["bg-0"] =
                              new PIXI.Sprite(s)).position.x = 0),
                              (r.position.y = 0),
                              t.container.addChildAt(r, 0);
                          }
                          t.currentBackground = e;
                        }
                      }),
                      (r.world = function (t) {
                        var e,
                          i = t.engine.world,
                          o = t.renderer,
                          a = t.container,
                          h = t.options,
                          c = s.allBodies(i),
                          u = s.allConstraints(i),
                          d = [];
                        h.wireframes
                          ? r.setBackground(t, h.wireframeBackground)
                          : r.setBackground(t, h.background);
                        var f = t.bounds.max.x - t.bounds.min.x,
                          p = t.bounds.max.y - t.bounds.min.y,
                          g = f / t.options.width,
                          m = p / t.options.height;
                        if (h.hasBounds) {
                          for (e = 0; e < c.length; e++) {
                            var _ = c[e];
                            _.render.sprite.visible = n.overlaps(
                              _.bounds,
                              t.bounds
                            );
                          }
                          for (e = 0; e < u.length; e++) {
                            var v = u[e],
                              y = v.bodyA,
                              x = v.bodyB,
                              b = v.pointA,
                              w = v.pointB;
                            y && (b = l.add(y.position, v.pointA)),
                              x && (w = l.add(x.position, v.pointB)),
                              b &&
                                w &&
                                (n.contains(t.bounds, b) ||
                                  n.contains(t.bounds, w)) &&
                                d.push(v);
                          }
                          a.scale.set(1 / g, 1 / m),
                            a.position.set(
                              -t.bounds.min.x * (1 / g),
                              -t.bounds.min.y * (1 / m)
                            );
                        } else d = u;
                        for (e = 0; e < c.length; e++) r.body(t, c[e]);
                        for (e = 0; e < d.length; e++) r.constraint(t, d[e]);
                        o.render(a);
                      }),
                      (r.constraint = function (t, e) {
                        t.engine;
                        var i = e.bodyA,
                          r = e.bodyB,
                          n = e.pointA,
                          s = e.pointB,
                          a = t.container,
                          l = e.render,
                          h = "c-" + e.id,
                          c = t.primitives[h];
                        c || (c = t.primitives[h] = new PIXI.Graphics()),
                          l.visible && e.pointA && e.pointB
                            ? (-1 === o.indexOf(a.children, c) && a.addChild(c),
                              c.clear(),
                              c.beginFill(0, 0),
                              c.lineStyle(
                                l.lineWidth,
                                o.colorToNumber(l.strokeStyle),
                                1
                              ),
                              i
                                ? c.moveTo(
                                    i.position.x + n.x,
                                    i.position.y + n.y
                                  )
                                : c.moveTo(n.x, n.y),
                              r
                                ? c.lineTo(
                                    r.position.x + s.x,
                                    r.position.y + s.y
                                  )
                                : c.lineTo(s.x, s.y),
                              c.endFill())
                            : c.clear();
                      }),
                      (r.body = function (t, e) {
                        t.engine;
                        var r = e.render;
                        if (r.visible)
                          if (r.sprite && r.sprite.texture) {
                            var n = "b-" + e.id,
                              s = t.sprites[n],
                              a = t.spriteContainer;
                            s || (s = t.sprites[n] = i(t, e)),
                              -1 === o.indexOf(a.children, s) && a.addChild(s),
                              (s.position.x = e.position.x),
                              (s.position.y = e.position.y),
                              (s.rotation = e.angle),
                              (s.scale.x = r.sprite.xScale || 1),
                              (s.scale.y = r.sprite.yScale || 1);
                          } else {
                            var l = "b-" + e.id,
                              c = t.primitives[l],
                              u = t.container;
                            c ||
                              ((c = t.primitives[l] = h(t, e)).initialAngle =
                                e.angle),
                              -1 === o.indexOf(u.children, c) && u.addChild(c),
                              (c.position.x = e.position.x),
                              (c.position.y = e.position.y),
                              (c.rotation = e.angle - c.initialAngle);
                          }
                      });
                    var i = function (t, e) {
                        var i = e.render.sprite.texture,
                          r = c(t, i),
                          n = new PIXI.Sprite(r);
                        return (
                          (n.anchor.x = e.render.sprite.xOffset),
                          (n.anchor.y = e.render.sprite.yOffset),
                          n
                        );
                      },
                      h = function (t, e) {
                        var i,
                          r = e.render,
                          n = t.options,
                          s = new PIXI.Graphics(),
                          a = o.colorToNumber(r.fillStyle),
                          l = o.colorToNumber(r.strokeStyle),
                          h = o.colorToNumber(r.strokeStyle),
                          c = o.colorToNumber("#bbb"),
                          u = o.colorToNumber("#CD5C5C");
                        s.clear();
                        for (
                          var d = 1 < e.parts.length ? 1 : 0;
                          d < e.parts.length;
                          d++
                        ) {
                          (i = e.parts[d]),
                            n.wireframes
                              ? (s.beginFill(0, 0), s.lineStyle(1, c, 1))
                              : (s.beginFill(a, 1),
                                s.lineStyle(r.lineWidth, l, 1)),
                            s.moveTo(
                              i.vertices[0].x - e.position.x,
                              i.vertices[0].y - e.position.y
                            );
                          for (var f = 1; f < i.vertices.length; f++)
                            s.lineTo(
                              i.vertices[f].x - e.position.x,
                              i.vertices[f].y - e.position.y
                            );
                          s.lineTo(
                            i.vertices[0].x - e.position.x,
                            i.vertices[0].y - e.position.y
                          ),
                            s.endFill(),
                            (n.showAngleIndicator || n.showAxes) &&
                              (s.beginFill(0, 0),
                              n.wireframes
                                ? s.lineStyle(1, u, 1)
                                : s.lineStyle(1, h),
                              s.moveTo(
                                i.position.x - e.position.x,
                                i.position.y - e.position.y
                              ),
                              s.lineTo(
                                (i.vertices[0].x +
                                  i.vertices[i.vertices.length - 1].x) /
                                  2 -
                                  e.position.x,
                                (i.vertices[0].y +
                                  i.vertices[i.vertices.length - 1].y) /
                                  2 -
                                  e.position.y
                              ),
                              s.endFill());
                        }
                        return s;
                      },
                      c = function (t, e) {
                        var i = t.textures[e];
                        return (
                          i || (i = t.textures[e] = PIXI.Texture.fromImage(e)),
                          i
                        );
                      };
                  })();
                },
                {
                  "../body/Composite": 2,
                  "../core/Common": 14,
                  "../core/Events": 16,
                  "../geometry/Bounds": 26,
                  "../geometry/Vector": 28,
                },
              ],
            },
            {},
            [30]
          )(30);
        });
      var C = /debug/i.test(window.location.href),
        k = new Two.Vector(),
        A = [],
        M = [],
        R = [],
        O = new Two({ type: Two.Types.canvas, fullscreen: !0 }).appendTo(
          document.querySelector("#interactive__homepage")
        ),
        E = { width: O.width, height: O.height },
        F = Matter.Runner.create(),
        B = Matter.Engine.create();
      B.world.gravity.y = 1;
      var I = { thickness: 50, properties: { isStatic: !0 } };
      (I.left = z(I.thickness, O.height + I.thickness)),
        (I.right = z(I.thickness, O.height + I.thickness)),
        (I.bottom = z(O.width + I.thickness, I.thickness)),
        Matter.World.add(B.world, [
          I.left.entity,
          I.right.entity,
          I.bottom.entity,
        ]);
      var L = {
        size: G(),
        weight: 400,
        color: "#E8911F",
        leading: G(),
        family: "Wasa, sans-serif",
        margin: { top: 5, left: 15, right: 15, bottom: 15 },
      };
      function N(t) {
        return function () {
          (M.isReady = !0),
            (t.rect = t.getBoundingClientRect()),
            (t.rect.ratio = t.rect.width / t.rect.height),
            (t.isReady = !0);
        };
      }
      function U() {
        var t = I.thickness,
          e = 1.25 * O.width,
          i = 1.25 * O.height;
        (k.x = O.width / 2 - O.width / 2 - t / 2),
          (k.y = O.height / 2),
          Matter.Body.setPosition(I.left.entity, k),
          Matter.Body.scale(
            I.left.entity,
            1 / I.left.entity.scale.x,
            1 / I.left.entity.scale.y
          ),
          Matter.Body.scale(I.left.entity, t, i),
          (I.left.entity.scale.x = t),
          (I.left.entity.scale.y = i),
          (k.x = O.width / 2 + O.width / 2 + t / 2),
          (k.y = O.height / 2),
          Matter.Body.setPosition(I.right.entity, k),
          Matter.Body.scale(
            I.right.entity,
            1 / I.right.entity.scale.x,
            1 / I.right.entity.scale.y
          ),
          Matter.Body.scale(I.right.entity, t, i),
          (I.right.entity.scale.x = t),
          (I.right.entity.scale.y = i),
          (k.x = O.width / 2),
          (k.y = O.height + t / 2),
          Matter.Body.setPosition(I.bottom.entity, k),
          Matter.Body.scale(
            I.bottom.entity,
            1 / I.bottom.entity.scale.x,
            1 / I.bottom.entity.scale.y
          ),
          Matter.Body.scale(I.bottom.entity, e, t),
          (I.bottom.entity.scale.x = e),
          (I.bottom.entity.scale.y = t),
          O.renderer.domElement.setAttribute(
            "data-pixel-ratio",
            O.renderer.ratio
          );
        for (
          var r = G(), n = 0.8 * r, s = 0;
          s < O.scene.children.length;
          s++
        ) {
          var o = O.scene.children[s];
          if (o.isWord || o.isLetter || o.isSymbol) {
            var a,
              l = o.text,
              h = o.rectangle,
              c = o.entity;
            l
              ? ((l.size = r),
                (l.leading = n),
                (a = l.getBoundingClientRect(!0)))
              : ((a = {
                  width: (o.rect.width * (1.33 * r)) / 300,
                  height: (o.rect.height * (1.33 * r)) / 300,
                }),
                (o.destinationScale = (1.33 * r) / 300)),
              (h.width = a.width),
              (h.height = a.height),
              Matter.Body.scale(c, 1 / c.scale.x, 1 / c.scale.y),
              Matter.Body.scale(c, a.width, a.height),
              (k.x = (O.width * c.position.x) / E.width),
              (k.y = (O.height * c.position.y) / E.height),
              c.scale.set(a.width, a.height),
              Matter.Body.setPosition(c, k);
          }
        }
        (E.width = O.width), (E.height = O.height);
      }
      function V() {
        for (var t = 0; t < A.length; t++) {
          var e = A[t],
            i = e.object;
          if (
            (e.object.position.copy(e.position),
            (e.object.rotation = e.angle),
            i.isSymbol)
          ) {
            var r = i.destinationScale - i.scale;
            r < 0.01 && -0.01 < r
              ? (i.scale = i.destinationScale)
              : (i.scale += 0.66 * (i.destinationScale - i.scale));
          }
        }
        O.render();
      }
      function j(t) {
        if (!t.object.isSymbol) {
          var e = t.object,
            i = e.text.value.split(""),
            r = e.text.getBoundingClientRect(!0),
            n = t.angle,
            s = [],
            o = (function (t) {
              for (var e = 0; e < A.length; e++) if (A[e].id === t.id) return e;
              return -1;
            })(t);
          0 <= o && A.splice(o, 1);
          for (var a = 0; a < i.length; a++) {
            var l = (a + 0.5) / i.length,
              h = i[a],
              c = new Two.Group();
            c.isLetter = !0;
            var u = e.text.clone();
            u.value = h;
            var d = u.getBoundingClientRect(!0),
              f = l * r.width - r.width / 2,
              p = e.position.x + f * Math.cos(n),
              g = e.position.y + f * Math.sin(n);
            (c.translation.x = p),
              (c.translation.y = g),
              (u.translation.y = 14);
            var m = new Two.Rectangle(0, 0, d.width, d.height);
            (m.stroke = "rgb(green)"),
              m.noFill(),
              (m.opacity = 0.75),
              (m.visible = C),
              (t = Matter.Bodies.rectangle(p, g, 1, 1)),
              Matter.Body.scale(t, d.width, d.height),
              Matter.Body.rotate(t, n),
              Matter.Body.setMass(t, 2.5);
            var _ = l * Math.PI * 2;
            (k.x = 0.33 * Math.cos(_)),
              (k.y = 0.33 * Math.sin(_)),
              Matter.Body.applyForce(t, t.position, k),
              (t.scale = new Two.Vector(d.width, d.height)),
              (t.object = c),
              A.push(t),
              s.push(t),
              (c.text = u),
              (c.rectangle = m),
              (c.entity = t),
              c.add(u, m),
              O.add(c);
          }
          Matter.World.remove(B.world, e.entity),
            e.remove(),
            Two.Utils.release(e),
            Matter.World.add(B.world, s);
        }
      }
      function D(t) {
        for (var e = 0; e < A.length; e++) {
          var i = A[e],
            r = i.position.x - t.x,
            n = i.position.y - t.y,
            s = Math.atan2(n, r),
            o = 5 / Math.sqrt(r * r + n + n);
          o || (o = 1),
            (k.x = o * Math.cos(s)),
            (k.y = o * Math.sin(s)),
            Matter.Body.applyForce(i, i.position, k);
        }
      }
      function z(t, e) {
        var i = O.makeRectangle(0, 0, t, e);
        i.visible = C;
        var r = Matter.Bodies.rectangle(0, 0, 1, 1, I.properties);
        return (
          Matter.Body.scale(r, t, e),
          (r.position = i.position),
          (r.scale = new Two.Vector(t, e)),
          (i.entity = r),
          i
        );
      }
      function G() {
        var t = O.width,
          e = (O.height, O.height / O.width);
        return (
          O.width,
          O.height,
          2 < e
            ? 0.14 * t
            : 1.75 < e && e < 2.01
            ? 0.13 * t
            : 1.5 < e && e < 1.76
            ? 0.12 * t
            : 1.25 < e && e < 1.51
            ? 0.11 * t
            : 1 < e && e < 1.26
            ? 0.105 * t
            : 0.9 < e && e < 1.01
            ? 0.095 * t
            : 0.7 < e && e < 0.91
            ? 0.085 * t
            : 0.6 < e && e < 0.71
            ? 0.08 * t
            : 0.5 < e && e < 0.61
            ? 0.075 * t
            : 0.45 < e && e < 0.51
            ? 0.07 * t
            : 0.4 < e && e < 0.46
            ? 0.065 * t
            : 0.35 < e && e < 0.41
            ? 0.06 * t
            : 0.3 < e && e < 0.36
            ? 0.055 * t
            : 0.25 < e && e < 0.31
            ? 0.05 * t
            : 0.2 < e && e < 0.26
            ? 0.045 * t
            : 0.1 < e && e < 0.11
            ? 0.032 * t
            : 0.03 * t
        );
      }
      function q(t, e, i) {
        return Math.min(Math.max(t, e), i);
      }
      (function () {
        for (
          var t = document.querySelector("#interactive__text").childNodes,
            e = 0;
          e < t.length;
          e++
        ) {
          var i = t[e];
          R = R.concat(r(i));
        }
        function r(t) {
          var e,
            i,
            n,
            s,
            o = [],
            a = {};
          if (0 < t.childNodes.length) {
            switch (t.tagName.toLowerCase()) {
              case "em":
                a.style = "italic";
                break;
              case "span":
                break;
              case "b":
              case "strong":
                a.weight = 700;
            }
            for (
              o.push({ styles: a, value: [] }), i = 0;
              i < t.childNodes.length;
              i++
            )
              (e = r(t.childNodes[i])), (o[0].value = o[0].value.concat(e));
          } else
            for (e = t.textContent.split(/\s+/i), n = 0; n < e.length; n++)
              (s = e[n]) && o.push(s);
          return o;
        }
      })(),
        (function () {
          M.index = 0;
          for (
            var t = document.querySelectorAll("#interactive__images > *"),
              e = 0;
            e < t.length;
            e++
          ) {
            var i = t[e].getAttribute("svg-src"),
              r = new Two.Group(),
              n = new Two.Texture(i, N(r)),
              s = new Two.Sprite(n);
            (s.scale = 0.5), r.add(s), M.push(r);
          }
        })(),
        (function () {
          for (
            var t,
              e,
              i,
              r,
              n,
              s,
              o = L.margin.left,
              a = L.leading,
              l = [{ width: L.margin.right, index: 0 }],
              h = (l.index = 0);
            h < R.length;
            h++
          ) {
            var c = R[h],
              u = new Two.Group(),
              d = new Two.Text("", 0, 0, L);
            if (((u.isWord = !0), c.value))
              for (var f in ((d.value = c.value.join(" ")), c.styles))
                d[f] = c.styles[f];
            else d.value = c;
            (t = o + (i = d.getBoundingClientRect(!0)).width / 2),
              (e = a + i.height / 2),
              (r = o + i.width),
              O.width < r &&
                ((l[l.index].width += L.margin.right),
                l.index++,
                l.push({ width: L.margin.left, index: h }),
                (o = L.margin.left),
                (a += L.leading + L.margin.top + L.margin.bottom),
                (t = o + i.width / 2),
                (e = a + i.height / 2)),
              (u.translation.x = t),
              (u.translation.y = e),
              (d.translation.y = 14);
            var p = new Two.Rectangle(0, 0, i.width, i.height);
            (p.stroke = "rgb(green)"),
              p.noFill(),
              (p.opacity = 0.75),
              (p.visible = C);
            var g = Matter.Bodies.rectangle(t, e, 1, 1);
            Matter.Body.scale(g, i.width, i.height),
              Matter.Body.rotate(
                g,
                (Math.random() * Math.PI) / 16 - Math.PI / 32
              ),
              (g.scale = new Two.Vector(i.width, i.height)),
              (g.object = u),
              A.push(g);
            var m = i.width + L.margin.left + L.margin.right;
            (o += m),
              (l[l.index].width += m),
              (u.text = d),
              (u.rectangle = p),
              (u.entity = g),
              u.add(d, p),
              O.add(u);
          }
          s = Math.max(e - O.height, 0);
          for (var _ = 0; _ < l.length; _++) {
            var v = l[_],
              y = l[_ + 1],
              x = A.length;
            (n = Math.max(O.width - v.width, 0)),
              (n *= Math.random()),
              y && (x = y.index);
            for (var b = v.index; b < x; b++)
              (g = A[b]),
                (k.x = g.position.x + n),
                (k.y = g.position.y - s),
                Matter.Body.setPosition(g, k);
            v.index;
          }
          Matter.World.add(B.world, A);
        })(),
        U(),
        (function () {
          var t,
            e = document.body,
            i = Matter.Mouse.create(e),
            r = Matter.MouseConstraint.create(B, {
              mouse: i,
              constraint: { stiffness: 0.2 },
            }),
            n = 0,
            s = !1,
            o = !1,
            a = document.body.querySelector("header"),
            l = { passive: !1 },
            h = !0;
          function c() {
            Matter.Mouse.clearSourceEvents(i),
              e.removeEventListener("touchmove", i.mousemove, l),
              e.removeEventListener("touchstart", i.mousedown, l),
              e.removeEventListener("touchend", i.mouseup, l),
              (h = !1);
          }
          c(),
            e.addEventListener(
              "dblclick",
              function (e) {
                o || (t && (D(i.position), j(t)), (t = null));
              },
              !1
            ),
            e.addEventListener(
              "mousedown",
              function (e) {
                var i = a.getBoundingClientRect();
                (o = e.clientY < i.bottom), (s = !1), (t = null);
              },
              !1
            ),
            e.addEventListener(
              "touchstart",
              function (r) {
                var n = a.getBoundingClientRect();
                (o =
                  !!(r.touches && 0 < r.touches.length) &&
                  r.touches[0].clientY < n.bottom)
                  ? c()
                  : h ||
                    (i.mousedown(r),
                    e.addEventListener("touchmove", i.mousemove, l),
                    e.addEventListener("touchstart", i.mousedown, l),
                    e.addEventListener("touchend", i.mouseup, l),
                    (h = !0)),
                  (s = !0),
                  (t = null);
              },
              !1
            ),
            Matter.Events.on(r, "mousedown", function (e) {
              o ||
                (!t &&
                  M.isReady &&
                  (function (t) {
                    var e = 1.33 * G(),
                      i = (function t() {
                        var e = M[M.index];
                        return (
                          (M.index = (M.index + 1) % M.length),
                          e.isReady ? e : t()
                        );
                      })(),
                      r = i.clone(),
                      n = [];
                    (r.isSymbol = !0),
                      (r.symbol = (function (t) {
                        for (var e = 0; e < t.children.length; e++) {
                          var i = t.children[e];
                          if (/path/i.test(i._renderer.type)) return i;
                        }
                        return null;
                      })(r)),
                      (r.symbol.scale = 0.5);
                    var s = t.x,
                      o = t.y,
                      a = {
                        width: (i.rect.width * (1.33 * e)) / 300,
                        height: (i.rect.height * (1.33 * e)) / 300,
                      };
                    (r.scale = 0),
                      (r.destinationScale = (1.33 * e) / 300),
                      (r.rect = i.rect),
                      r.position.set(s, o);
                    var l = new Two.Rectangle(
                      0,
                      0,
                      i.rect.width,
                      i.rect.height
                    );
                    (l.stroke = "rgb(green)"),
                      l.noFill(),
                      (l.opacity = 0.75),
                      (l.visible = C);
                    var h = (Math.random() * Math.PI) / 16 - Math.PI / 32,
                      c = Matter.Bodies.rectangle(s, o, 1, 1);
                    Matter.Body.scale(c, a.width, a.height),
                      Matter.Body.rotate(c, h),
                      Matter.Body.setMass(c, 2.5),
                      (c.scale = new Two.Vector(a.width, a.height)),
                      (c.object = r),
                      A.push(c),
                      n.push(c),
                      (r.rectangle = l),
                      (r.entity = c),
                      r.add(l),
                      O.add(r),
                      Matter.World.add(B.world, n);
                  })(i.position));
            }),
            Matter.Events.on(r, "startdrag", function (e) {
              if (!o && ((t = e.source.body), s)) {
                var r = Date.now();
                r - n <= 300 && t && (D(i.position), j(t)), (n = r);
              }
            }),
            Matter.World.add(B.world, r);
        })(),
        O.bind("resize", U),
        window.addEventListener(
          "deviceorientation",
          function (t) {
            var e = void 0 !== window.orientation ? window.orientation : 0,
              i = B.world.gravity;
            0 === e
              ? ((i.x = q(t.gamma, -90, 90) / 90),
                (i.y = q(t.beta, -90, 90) / 90))
              : 180 === e
              ? ((i.x = q(t.gamma, -90, 90) / 90),
                (i.y = q(-t.beta, -90, 90) / 90))
              : 90 === e
              ? ((i.x = q(t.beta, -90, 90) / 90),
                (i.y = q(-t.gamma, -90, 90) / 90))
              : -90 === e &&
                ((i.x = q(-t.beta, -90, 90) / 90),
                (i.y = q(t.gamma, -90, 90) / 90));
          },
          !1
        ),
        (O.playing = !0),
        Matter.Runner.run(F, B),
        Matter.Events.on(B, "afterUpdate", V);
    }.call(this, i(3), i(4)(t)));
  },
  function (t, e) {
    t.exports = "/images/favicon.png";
  },
  function (t, e) {
    t.exports = "/images/kanye.mp3";
  },
  function (t, e) {
    t.exports = "/images/Verdammnis_und_Erlîsung.obj";
  },
  function (t, e) {
    t.exports = "/images/Verdammnis_und_Erlîsung_tex.png";
  },
  ,
  function (t, e, i) {
    "use strict";
    var r = i(0);
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ r.e._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function () {
        var t = function (t) {
            var e,
              i = [],
              r = t.length;
            for (e = 0; e !== r; i.push(t[e++]));
            return i;
          },
          e = function (t, e, i) {
            var r,
              n,
              s = t.cycle;
            for (r in s)
              (n = s[r]),
                (t[r] =
                  "function" == typeof n ? n(i, e[i], e) : n[i % n.length]);
            delete t.cycle;
          },
          i = function (t) {
            if ("function" == typeof t) return t;
            var e = "object" == typeof t ? t : { each: t },
              i = e.ease,
              r = e.from || 0,
              n = e.base || 0,
              s = {},
              o = isNaN(r),
              a = e.axis,
              l = { center: 0.5, end: 1 }[r] || 0;
            return function (t, h, c) {
              var u,
                d,
                f,
                p,
                g,
                m,
                _,
                v,
                y,
                x = (c || e).length,
                b = s[x];
              if (!b) {
                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                  for (
                    _ = -1 / 0;
                    _ < (_ = c[y++].getBoundingClientRect().left) && y < x;

                  );
                  y--;
                }
                for (
                  b = s[x] = [],
                    u = o ? Math.min(y, x) * l - 0.5 : r % y,
                    d = o ? (x * l) / y - 0.5 : (r / y) | 0,
                    _ = 0,
                    v = 1 / 0,
                    m = 0;
                  m < x;
                  m++
                )
                  (f = (m % y) - u),
                    (p = d - ((m / y) | 0)),
                    (b[m] = g =
                      a
                        ? Math.abs("y" === a ? p : f)
                        : Math.sqrt(f * f + p * p)),
                    g > _ && (_ = g),
                    g < v && (v = g);
                (b.max = _ - v),
                  (b.min = v),
                  (b.v = x =
                    e.amount ||
                    e.each *
                      (y > x
                        ? x - 1
                        : a
                        ? "y" === a
                          ? x / y
                          : y
                        : Math.max(y, x / y)) ||
                    0),
                  (b.b = x < 0 ? n - x : n);
              }
              return (
                (x = (b[t] - b.min) / b.max),
                b.b + (i ? i.getRatio(x) : x) * b.v
              );
            };
          },
          n = function (t, e, i) {
            r.f.call(this, t, e, i),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._repeat && this._uncache(!0),
              (this.render = n.prototype.render);
          },
          s = r.f._internals,
          o = s.isSelector,
          a = s.isArray,
          l = (n.prototype = r.f.to({}, 0.1, {})),
          h = [];
        (n.version = "2.1.3"),
          (l.constructor = n),
          (l.kill()._gc = !1),
          (n.killTweensOf = n.killDelayedCallsTo = r.f.killTweensOf),
          (n.getTweensOf = r.f.getTweensOf),
          (n.lagSmoothing = r.f.lagSmoothing),
          (n.ticker = r.f.ticker),
          (n.render = r.f.render),
          (n.distribute = i),
          (l.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._yoyoEase = null),
              this._uncache(!0),
              r.f.prototype.invalidate.call(this)
            );
          }),
          (l.updateTo = function (t, e) {
            var i,
              n = this.ratio,
              s = this.vars.immediateRender || t.immediateRender;
            for (i in (e &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay)),
            t))
              this.vars[i] = t[i];
            if (this._initted || s)
              if (e) (this._initted = !1), s && this.render(0, !0, !0);
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  r.f._onPluginEvent("_onDisable", this),
                this._time / this._duration > 0.998)
              ) {
                var o = this._totalTime;
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(o, !0, !1);
              } else if (
                ((this._initted = !1), this._init(), this._time > 0 || s)
              )
                for (var a, l = 1 / (1 - n), h = this._firstPT; h; )
                  (a = h.s + h.c), (h.c *= l), (h.s = a - h.c), (h = h._next);
            return this;
          }),
          (l.render = function (t, e, i) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate());
            var n,
              o,
              a,
              l,
              h,
              c,
              u,
              d,
              f,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              g = this._time,
              m = this._totalTime,
              _ = this._cycle,
              v = this._duration,
              y = this._rawPrevTime;
            if (
              (t >= p - 1e-8 && t >= 0
                ? ((this._totalTime = p),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = v),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((n = !0),
                    (o = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (y < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === y && "isPause" !== this.data)) &&
                      y !== t &&
                      ((i = !0), y > 1e-8 && (o = "onReverseComplete")),
                    (this._rawPrevTime = d = !e || t || y === t ? t : 1e-8)))
                : t < 1e-8
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== m || (0 === v && y > 0)) &&
                    ((o = "onReverseComplete"), (n = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === v &&
                        (this._initted || !this.vars.lazy || i) &&
                        (y >= 0 && (i = !0),
                        (this._rawPrevTime = d =
                          !e || t || y === t ? t : 1e-8))),
                  this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((l = v + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / l &&
                      m <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      ((this._time = v - this._time),
                      (f = this._yoyoEase || this.vars.yoyoEase) &&
                        (this._yoyoEase ||
                          (!0 !== f || this._initted
                            ? (this._yoyoEase = f =
                                !0 === f
                                  ? this._ease
                                  : f instanceof r.b
                                  ? f
                                  : r.b.map[f])
                            : ((f = this.vars.ease),
                              (this._yoyoEase = f =
                                f
                                  ? f instanceof r.b
                                    ? f
                                    : "function" == typeof f
                                    ? new r.b(f, this.vars.easeParams)
                                    : r.b.map[f] || r.f.defaultEase
                                  : r.f.defaultEase))),
                        (this.ratio = f
                          ? 1 - f.getRatio((v - this._time) / v)
                          : 0))),
                    this._time > v
                      ? (this._time = v)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType && !f
                    ? ((h = this._time / v),
                      (1 === (c = this._easeType) || (3 === c && h >= 0.5)) &&
                        (h = 1 - h),
                      3 === c && (h *= 2),
                      1 === (u = this._easePower)
                        ? (h *= h)
                        : 2 === u
                        ? (h *= h * h)
                        : 3 === u
                        ? (h *= h * h * h)
                        : 4 === u && (h *= h * h * h * h),
                      (this.ratio =
                        1 === c
                          ? 1 - h
                          : 2 === c
                          ? h
                          : this._time / v < 0.5
                          ? h / 2
                          : 1 - h / 2))
                    : f || (this.ratio = this._ease.getRatio(this._time / v))),
              g !== this._time || i || _ !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return;
                if (
                  !i &&
                  this._firstPT &&
                  ((!1 !== this.vars.lazy && this._duration) ||
                    (this.vars.lazy && !this._duration))
                )
                  return (
                    (this._time = g),
                    (this._totalTime = m),
                    (this._rawPrevTime = y),
                    (this._cycle = _),
                    s.lazyTweens.push(this),
                    void (this._lazy = [t, e])
                  );
                !this._time || n || f
                  ? n &&
                    this._ease._calcEnd &&
                    !f &&
                    (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  : (this.ratio = this._ease.getRatio(this._time / v));
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active ||
                    (!this._paused &&
                      this._time !== g &&
                      t >= 0 &&
                      (this._active = !0)),
                  0 === m &&
                    (2 === this._initted && t > 0 && this._init(),
                    this._startAt &&
                      (t >= 0
                        ? this._startAt.render(t, !0, i)
                        : o || (o = "_dummyGS")),
                    this.vars.onStart &&
                      ((0 === this._totalTime && 0 !== v) ||
                        e ||
                        this._callback("onStart"))),
                  a = this._firstPT;
                a;

              )
                a.f
                  ? a.t[a.p](a.c * this.ratio + a.s)
                  : (a.t[a.p] = a.c * this.ratio + a.s),
                  (a = a._next);
              this._onUpdate &&
                (t < 0 &&
                  this._startAt &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                e ||
                  ((this._totalTime !== m || o) && this._callback("onUpdate"))),
                this._cycle !== _ &&
                  (e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat"))),
                o &&
                  ((this._gc && !i) ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startTime &&
                      this._startAt.render(t, !0, i),
                    n &&
                      (this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[o] && this._callback(o),
                    0 === v &&
                      1e-8 === this._rawPrevTime &&
                      1e-8 !== d &&
                      (this._rawPrevTime = 0)));
            } else
              m !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (n.to = function (t, e, i) {
            return new n(t, e, i);
          }),
          (n.from = function (t, e, i) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              new n(t, e, i)
            );
          }),
          (n.fromTo = function (t, e, i, r) {
            return (
              (r.startAt = i),
              (r.immediateRender =
                0 != r.immediateRender && 0 != i.immediateRender),
              new n(t, e, r)
            );
          }),
          (n.staggerTo = n.allTo =
            function (s, l, c, u, d, f, p) {
              var g,
                m,
                _,
                v,
                y = [],
                x = i(c.stagger || u),
                b = c.cycle,
                w = (c.startAt || h).cycle;
              for (
                a(s) ||
                  ("string" == typeof s && (s = r.f.selector(s) || s),
                  o(s) && (s = t(s))),
                  g = (s = s || []).length - 1,
                  _ = 0;
                _ <= g;
                _++
              ) {
                for (v in ((m = {}), c)) m[v] = c[v];
                if (
                  (b &&
                    (e(m, s, _),
                    null != m.duration &&
                      ((l = m.duration), delete m.duration)),
                  w)
                ) {
                  for (v in ((w = m.startAt = {}), c.startAt))
                    w[v] = c.startAt[v];
                  e(m.startAt, s, _);
                }
                (m.delay = x(_, s[_], s) + (m.delay || 0)),
                  _ === g &&
                    d &&
                    (m.onComplete = function () {
                      c.onComplete &&
                        c.onComplete.apply(
                          c.onCompleteScope || this,
                          arguments
                        ),
                        d.apply(p || c.callbackScope || this, f || h);
                    }),
                  (y[_] = new n(s[_], l, m));
              }
              return y;
            }),
          (n.staggerFrom = n.allFrom =
            function (t, e, i, r, s, o, a) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                n.staggerTo(t, e, i, r, s, o, a)
              );
            }),
          (n.staggerFromTo = n.allFromTo =
            function (t, e, i, r, s, o, a, l) {
              return (
                (r.startAt = i),
                (r.immediateRender =
                  0 != r.immediateRender && 0 != i.immediateRender),
                n.staggerTo(t, e, r, s, o, a, l)
              );
            }),
          (n.delayedCall = function (t, e, i, r, s) {
            return new n(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: i,
              callbackScope: r,
              onReverseComplete: e,
              onReverseCompleteParams: i,
              immediateRender: !1,
              useFrames: s,
              overwrite: 0,
            });
          }),
          (n.set = function (t, e) {
            return new n(t, 0, e);
          }),
          (n.isTweening = function (t) {
            return r.f.getTweensOf(t, !0).length > 0;
          });
        var c = function (t, e) {
            for (var i = [], n = 0, s = t._first; s; )
              s instanceof r.f
                ? (i[n++] = s)
                : (e && (i[n++] = s), (n = (i = i.concat(c(s, e))).length)),
                (s = s._next);
            return i;
          },
          u = (n.getAllTweens = function (t) {
            return c(r.a._rootTimeline, t).concat(
              c(r.a._rootFramesTimeline, t)
            );
          });
        (n.killAll = function (t, e, i, n) {
          null == e && (e = !0), null == i && (i = !0);
          var s,
            o,
            a,
            l = u(0 != n),
            h = l.length,
            c = e && i && n;
          for (a = 0; a < h; a++)
            (o = l[a]),
              (c ||
                o instanceof r.c ||
                ((s = o.target === o.vars.onComplete) && i) ||
                (e && !s)) &&
                (t
                  ? o.totalTime(o._reversed ? 0 : o.totalDuration())
                  : o._enabled(!1, !1));
        }),
          (n.killChildTweensOf = function (e, i) {
            if (null != e) {
              var l,
                h,
                c,
                u,
                d,
                f = s.tweenLookup;
              if (
                ("string" == typeof e && (e = r.f.selector(e) || e),
                o(e) && (e = t(e)),
                a(e))
              )
                for (u = e.length; --u > -1; ) n.killChildTweensOf(e[u], i);
              else {
                for (c in ((l = []), f))
                  for (h = f[c].target.parentNode; h; )
                    h === e && (l = l.concat(f[c].tweens)), (h = h.parentNode);
                for (d = l.length, u = 0; u < d; u++)
                  i && l[u].totalTime(l[u].totalDuration()),
                    l[u]._enabled(!1, !1);
              }
            }
          });
        var d = function (t, e, i, n) {
          (e = !1 !== e), (i = !1 !== i);
          for (
            var s, o, a = u((n = !1 !== n)), l = e && i && n, h = a.length;
            --h > -1;

          )
            (o = a[h]),
              (l ||
                o instanceof r.c ||
                ((s = o.target === o.vars.onComplete) && i) ||
                (e && !s)) &&
                o.paused(t);
        };
        return (
          (n.pauseAll = function (t, e, i) {
            d(!0, t, e, i);
          }),
          (n.resumeAll = function (t, e, i) {
            d(!1, t, e, i);
          }),
          (n.globalTimeScale = function (t) {
            var e = r.a._rootTimeline,
              i = r.f.ticker.time;
            return arguments.length
              ? ((t = t || 1e-8),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e = r.a._rootFramesTimeline),
                (i = r.f.ticker.frame),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e._timeScale = r.a._rootTimeline._timeScale = t),
                t)
              : e._timeScale;
          }),
          (l.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this.duration()
              ? this._time / this._duration
              : this.ratio;
          }),
          (l.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (l.time = function (t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
              r = this._cycle,
              n = r * (i + this._repeatDelay);
            return (
              t > i && (t = i),
              this.totalTime(
                this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t,
                e
              )
            );
          }),
          (l.duration = function (t) {
            return arguments.length
              ? r.a.prototype.duration.call(this, t)
              : this._duration;
          }),
          (l.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration);
          }),
          (l.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (l.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (l.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          n
        );
      },
      !0
    );
    var n = r.g.TweenMax;
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    r.e._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function () {
        var t,
          e,
          i,
          n,
          s = function () {
            r.d.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = s.prototype.setRatio);
          },
          o = r.e._gsDefine.globals,
          a = {},
          l = (s.prototype = new r.d("css"));
        (l.constructor = s),
          (s.version = "2.1.3"),
          (s.API = 2),
          (s.defaultTransformPerspective = 0),
          (s.defaultSkewType = "compensated"),
          (s.defaultSmoothOrigin = !0),
          (l = "px"),
          (s.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: "",
          });
        var h,
          c,
          u,
          d,
          f,
          p,
          g,
          m,
          _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
          b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          S = /opacity *= *([^)]*)/i,
          T = /opacity:([^;]*)/i,
          P = /alpha\(opacity *=.+?\)/i,
          C = /^(rgb|hsl)/,
          k = /([A-Z])/g,
          A = /-([a-z])/gi,
          M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          R = function (t, e) {
            return e.toUpperCase();
          },
          O = /(?:Left|Right|Width)/i,
          E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          B = /,(?=[^\)]*(?:\(|$))/gi,
          I = /[\s,\(]/i,
          L = Math.PI / 180,
          N = 180 / Math.PI,
          U = {},
          V = { style: {} },
          j = r.e.document || {
            createElement: function () {
              return V;
            },
          },
          D = function (t, e) {
            var i = j.createElementNS
              ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
              : j.createElement(t);
            return i.style ? i : j.createElement(t);
          },
          z = D("div"),
          G = D("img"),
          q = (s._internals = { _specialProps: a }),
          W = (r.e.navigator || {}).userAgent || "",
          X = (function () {
            var t = W.indexOf("Android"),
              e = D("a");
            return (
              (u =
                -1 !== W.indexOf("Safari") &&
                -1 === W.indexOf("Chrome") &&
                (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3)),
              (f = u && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6),
              (d = -1 !== W.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) &&
                (p = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          H = function (t) {
            return S.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          Y = function (t) {
            r.e.console && console.log(t);
          },
          K = "",
          Z = "",
          J = function (t, e) {
            var i,
              r,
              n = (e = e || z).style;
            if (void 0 !== n[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                r = 5;
              --r > -1 && void 0 === n[i[r] + t];

            );
            return r >= 0
              ? ((K = "-" + (Z = 3 === r ? "ms" : i[r]).toLowerCase() + "-"),
                Z + t)
              : null;
          },
          $ =
            "undefined" != typeof window
              ? window
              : j.defaultView || { getComputedStyle: function () {} },
          Q = function (t) {
            return $.getComputedStyle(t);
          },
          tt = (s.getStyle = function (t, e, i, r, n) {
            var s;
            return X || "opacity" !== e
              ? (!r && t.style[e]
                  ? (s = t.style[e])
                  : (i = i || Q(t))
                  ? (s =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(k, "-$1").toLowerCase()))
                  : t.currentStyle && (s = t.currentStyle[e]),
                null == n ||
                (s && "none" !== s && "auto" !== s && "auto auto" !== s)
                  ? s
                  : n)
              : H(t);
          }),
          et = (q.convertToPixels = function (t, e, i, n, o) {
            if ("px" === n || (!n && "lineHeight" !== e)) return i;
            if ("auto" === n || !i) return 0;
            var a,
              l,
              h,
              c = O.test(e),
              u = t,
              d = z.style,
              f = i < 0,
              p = 1 === i;
            if ((f && (i = -i), p && (i *= 100), "lineHeight" !== e || n))
              if ("%" === n && -1 !== e.indexOf("border"))
                a = (i / 100) * (c ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((d.cssText =
                    "border:0 solid red;position:" +
                    tt(t, "position") +
                    ";line-height:0;"),
                  "%" !== n &&
                    u.appendChild &&
                    "v" !== n.charAt(0) &&
                    "rem" !== n)
                )
                  d[c ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                else {
                  if (
                    ((u = t.parentNode || j.body),
                    -1 !== tt(u, "display").indexOf("flex") &&
                      (d.position = "absolute"),
                    (l = u._gsCache),
                    (h = r.f.ticker.frame),
                    l && c && l.time === h)
                  )
                    return (l.width * i) / 100;
                  d[c ? "width" : "height"] = i + n;
                }
                u.appendChild(z),
                  (a = parseFloat(z[c ? "offsetWidth" : "offsetHeight"])),
                  u.removeChild(z),
                  c &&
                    "%" === n &&
                    !1 !== s.cacheWidths &&
                    (((l = u._gsCache = u._gsCache || {}).time = h),
                    (l.width = (a / i) * 100)),
                  0 !== a || o || (a = et(t, e, i, n, !0));
              }
            else
              (l = Q(t).lineHeight),
                (t.style.lineHeight = i),
                (a = parseFloat(Q(t).lineHeight)),
                (t.style.lineHeight = l);
            return p && (a /= 100), f ? -a : a;
          }),
          it = (q.calculateOffset = function (t, e, i) {
            if ("absolute" !== tt(t, "position", i)) return 0;
            var r = "left" === e ? "Left" : "Top",
              n = tt(t, "margin" + r, i);
            return (
              t["offset" + r] - (et(t, e, parseFloat(n), n.replace(w, "")) || 0)
            );
          }),
          rt = function (t, e) {
            var i,
              r,
              n,
              s = {};
            if ((e = e || Q(t)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 !== (n = e[i]).indexOf("-transform") && Bt !== n) ||
                    (s[n.replace(A, R)] = e.getPropertyValue(n));
              else
                for (i in e)
                  (-1 !== i.indexOf("Transform") && Ft !== i) || (s[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === s[i] &&
                  (s[i.replace(A, R)] = e[i]);
            return (
              X || (s.opacity = H(t)),
              (r = Ht(t, e, !1)),
              (s.rotation = r.rotation),
              (s.skewX = r.skewX),
              (s.scaleX = r.scaleX),
              (s.scaleY = r.scaleY),
              (s.x = r.x),
              (s.y = r.y),
              Lt &&
                ((s.z = r.z),
                (s.rotationX = r.rotationX),
                (s.rotationY = r.rotationY),
                (s.scaleZ = r.scaleZ)),
              s.filters && delete s.filters,
              s
            );
          },
          nt = function (t, e, i, r, n) {
            var s,
              o,
              a,
              l = {},
              h = t.style;
            for (o in i)
              "cssText" !== o &&
                "length" !== o &&
                isNaN(o) &&
                (e[o] !== (s = i[o]) || (n && n[o])) &&
                -1 === o.indexOf("Origin") &&
                (("number" != typeof s && "string" != typeof s) ||
                  ((l[o] =
                    "auto" !== s || ("left" !== o && "top" !== o)
                      ? ("" !== s && "auto" !== s && "none" !== s) ||
                        "string" != typeof e[o] ||
                        "" === e[o].replace(b, "")
                        ? s
                        : 0
                      : it(t, o)),
                  void 0 !== h[o] && (a = new yt(h, o, h[o], a))));
            if (r) for (o in r) "className" !== o && (l[o] = r[o]);
            return { difs: l, firstMPT: a };
          },
          st = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          at = function (t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
              return (i || Q(t))[e] || 0;
            if (t.getCTM && qt(t)) return t.getBBox()[e] || 0;
            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              n = st[e],
              s = n.length;
            for (i = i || Q(t); --s > -1; )
              (r -= parseFloat(tt(t, "padding" + n[s], i, !0)) || 0),
                (r -= parseFloat(tt(t, "border" + n[s] + "Width", i, !0)) || 0);
            return r;
          },
          lt = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null != t && "" !== t) || (t = "0 0");
            var i,
              r = t.split(" "),
              n =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : r[0],
              s =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : r[1];
            if (r.length > 3 && !e) {
              for (
                r = t.split(", ").join(",").split(","), t = [], i = 0;
                i < r.length;
                i++
              )
                t.push(lt(r[i]));
              return t.join(",");
            }
            return (
              null == s
                ? (s = "center" === n ? "50%" : "0")
                : "center" === s && (s = "50%"),
              ("center" === n ||
                (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) &&
                (n = "50%"),
              (t = n + " " + s + (r.length > 2 ? " " + r[2] : "")),
              e &&
                ((e.oxp = -1 !== n.indexOf("%")),
                (e.oyp = -1 !== s.indexOf("%")),
                (e.oxr = "=" === n.charAt(1)),
                (e.oyr = "=" === s.charAt(1)),
                (e.ox = parseFloat(n.replace(b, ""))),
                (e.oy = parseFloat(s.replace(b, ""))),
                (e.v = t)),
              e || t
            );
          },
          ht = function (t, e) {
            return (
              "function" == typeof t && (t = t(m, g)),
              "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            );
          },
          ct = function (t, e) {
            "function" == typeof t && (t = t(m, g));
            var i = "string" == typeof t && "=" === t.charAt(1);
            return (
              "string" == typeof t &&
                "v" === t.charAt(t.length - 2) &&
                (t =
                  (i ? t.substr(0, 2) : 0) +
                  window[
                    "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                  ] *
                    (parseFloat(i ? t.substr(2) : t) / 100)),
              null == t
                ? e
                : i
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            );
          },
          ut = function (t, e, i, r) {
            var n, s, o, a;
            return (
              "function" == typeof t && (t = t(m, g)),
              null == t
                ? (o = e)
                : "number" == typeof t
                ? (o = t)
                : (360,
                  (n = t.split("_")),
                  (s =
                    ((a = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(n[0].substr(2))
                      : parseFloat(n[0])) *
                      (-1 === t.indexOf("rad") ? 1 : N) -
                    (a ? 0 : e)),
                  n.length &&
                    (r && (r[i] = e + s),
                    -1 !== t.indexOf("short") &&
                      (s %= 360) !== s % 180 &&
                      (s = s < 0 ? s + 360 : s - 360),
                    -1 !== t.indexOf("_cw") && s < 0
                      ? (s =
                          ((s + 3599999999640) % 360) - 360 * ((s / 360) | 0))
                      : -1 !== t.indexOf("ccw") &&
                        s > 0 &&
                        (s =
                          ((s - 3599999999640) % 360) - 360 * ((s / 360) | 0))),
                  (o = e + s)),
              o < 1e-6 && o > -1e-6 && (o = 0),
              o
            );
          },
          dt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ft = function (t, e, i) {
            return (
              (255 *
                (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
              0
            );
          },
          pt = (s.parseColor = function (t, e) {
            var i, r, n, s, o, a, l, h, c, u, d;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  dt[t])
                )
                  i = dt[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    ((r = t.charAt(1)),
                    (n = t.charAt(2)),
                    (s = t.charAt(3)),
                    (t = "#" + r + r + n + n + s + s)),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = d = t.match(_)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(v);
                  } else
                    (o = (Number(i[0]) % 360) / 360),
                      (a = Number(i[1]) / 100),
                      (r =
                        2 * (l = Number(i[2]) / 100) -
                        (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                      i.length > 3 && (i[3] = Number(i[3])),
                      (i[0] = ft(o + 1 / 3, r, n)),
                      (i[1] = ft(o, r, n)),
                      (i[2] = ft(o - 1 / 3, r, n));
                else i = t.match(_) || dt.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = dt.black;
            return (
              e &&
                !d &&
                ((r = i[0] / 255),
                (n = i[1] / 255),
                (s = i[2] / 255),
                (l = ((h = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2),
                h === c
                  ? (o = a = 0)
                  : ((u = h - c),
                    (a = l > 0.5 ? u / (2 - h - c) : u / (h + c)),
                    (o =
                      h === r
                        ? (n - s) / u + (n < s ? 6 : 0)
                        : h === n
                        ? (s - r) / u + 2
                        : (r - n) / u + 4),
                    (o *= 60)),
                (i[0] = (o + 0.5) | 0),
                (i[1] = (100 * a + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          gt = function (t, e) {
            var i,
              r,
              n,
              s = t.match(mt) || [],
              o = 0,
              a = "";
            if (!s.length) return t;
            for (i = 0; i < s.length; i++)
              (r = s[i]),
                (o += (n = t.substr(o, t.indexOf(r, o) - o)).length + r.length),
                3 === (r = pt(r, e)).length && r.push(1),
                (a +=
                  n +
                  (e
                    ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3]
                    : "rgba(" + r.join(",")) +
                  ")");
            return a + t.substr(o);
          },
          mt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (l in dt) mt += "|" + l + "\\b";
        (mt = new RegExp(mt + ")", "gi")),
          (s.colorStringFilter = function (t) {
            var e,
              i = t[0] + " " + t[1];
            mt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = gt(t[0], e)),
              (t[1] = gt(t[1], e))),
              (mt.lastIndex = 0);
          }),
          r.f.defaultStringFilter ||
            (r.f.defaultStringFilter = s.colorStringFilter);
        var _t = function (t, e, i, r) {
            if (null == t)
              return function (t) {
                return t;
              };
            var n,
              s = e ? (t.match(mt) || [""])[0] : "",
              o = t.split(s).join("").match(y) || [],
              a = t.substr(0, t.indexOf(o[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              h = -1 !== t.indexOf(" ") ? " " : ",",
              c = o.length,
              u = c > 0 ? o[0].replace(_, "") : "";
            return c
              ? (n = e
                  ? function (t) {
                      var e, d, f, p;
                      if ("number" == typeof t) t += u;
                      else if (r && B.test(t)) {
                        for (
                          p = t.replace(B, "|").split("|"), f = 0;
                          f < p.length;
                          f++
                        )
                          p[f] = n(p[f]);
                        return p.join(",");
                      }
                      if (
                        ((e = (t.match(mt) || [s])[0]),
                        (f = (d = t.split(e).join("").match(y) || []).length),
                        c > f--)
                      )
                        for (; ++f < c; )
                          d[f] = i ? d[((f - 1) / 2) | 0] : o[f];
                      return (
                        a +
                        d.join(h) +
                        h +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, s, d;
                      if ("number" == typeof t) t += u;
                      else if (r && B.test(t)) {
                        for (
                          s = t.replace(B, "|").split("|"), d = 0;
                          d < s.length;
                          d++
                        )
                          s[d] = n(s[d]);
                        return s.join(",");
                      }
                      if (
                        ((d = (e = t.match("," === h ? y : x) || []).length),
                        c > d--)
                      )
                        for (; ++d < c; )
                          e[d] = i ? e[((d - 1) / 2) | 0] : o[d];
                      return (
                        ((a && "none" !== t && t.substr(0, t.indexOf(e[0]))) ||
                          a) +
                        e.join(h) +
                        l
                      );
                    })
              : function (t) {
                  return t;
                };
          },
          vt = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, r, n, s, o, a) {
                var l,
                  h = (i + "").split(" ");
                for (a = {}, l = 0; l < 4; l++)
                  a[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                return n.parse(e, a, s, o);
              }
            );
          },
          yt =
            ((q._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, i, r, n, s, o = this.data, a = o.proxy, l = o.firstMPT;
                l;

              )
                (e = a[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (o.autoRotate &&
                  (o.autoRotate.rotation = o.mod
                    ? o.mod.call(this._tween, a.rotation, this.t, this._tween)
                    : a.rotation),
                1 === t || 0 === t)
              )
                for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++)
                        n += i["xn" + r] + i["xs" + (r + 1)];
                      i[s] = n;
                    }
                  } else i[s] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (t, e, i, r, n) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = n),
                r && ((r._prev = this), (this._next = r));
            }),
          xt =
            ((q._parseToProxy = function (t, e, i, r, n, s) {
              var o,
                a,
                l,
                h,
                c,
                u = r,
                d = {},
                f = {},
                p = i._transform,
                g = U;
              for (
                i._transform = null,
                  U = e,
                  r = c = i.parse(t, e, r, n),
                  U = g,
                  s &&
                    ((i._transform = p),
                    u && ((u._prev = null), u._prev && (u._prev._next = null)));
                r && r !== u;

              ) {
                if (
                  r.type <= 1 &&
                  ((f[(a = r.p)] = r.s + r.c),
                  (d[a] = r.s),
                  s || ((h = new yt(r, "s", a, h, r.r)), (r.c = 0)),
                  1 === r.type)
                )
                  for (o = r.l; --o > 0; )
                    (l = "xn" + o),
                      (f[(a = r.p + "_" + l)] = r.data[l]),
                      (d[a] = r[l]),
                      s || (h = new yt(r, l, a, h, r.rxp[l]));
                r = r._next;
              }
              return { proxy: d, end: f, firstMPT: h, pt: c };
            }),
            (q.CSSPropTween = function (e, i, r, s, o, a, l, h, c, u, d) {
              (this.t = e),
                (this.p = i),
                (this.s = r),
                (this.c = s),
                (this.n = l || i),
                e instanceof xt || n.push(this.n),
                (this.r = h ? ("function" == typeof h ? h : Math.round) : h),
                (this.type = a || 0),
                c && ((this.pr = c), (t = !0)),
                (this.b = void 0 === u ? r : u),
                (this.e = void 0 === d ? r + s : d),
                o && ((this._next = o), (o._prev = this));
            })),
          bt = function (t, e, i, r, n, s) {
            var o = new xt(t, e, i, r - i, n, -1, s);
            return (o.b = i), (o.e = o.xs0 = r), o;
          },
          wt = (s.parseComplex = function (t, e, i, r, n, o, a, l, c, u) {
            (i = i || o || ""),
              "function" == typeof r && (r = r(m, g)),
              (a = new xt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, r)),
              (r += ""),
              n &&
                mt.test(r + i) &&
                ((r = [i, r]), s.colorStringFilter(r), (i = r[0]), (r = r[1]));
            var d,
              f,
              p,
              y,
              x,
              b,
              w,
              S,
              T,
              P,
              C,
              k,
              A,
              M = i.split(", ").join(",").split(" "),
              R = r.split(", ").join(",").split(" "),
              O = M.length,
              E = !1 !== h;
            for (
              (-1 === r.indexOf(",") && -1 === i.indexOf(",")) ||
                (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl")
                  ? ((M = M.join(" ").replace(B, ", ").split(" ")),
                    (R = R.join(" ").replace(B, ", ").split(" ")))
                  : ((M = M.join(" ").split(",").join(", ").split(" ")),
                    (R = R.join(" ").split(",").join(", ").split(" "))),
                (O = M.length)),
                O !== R.length && (O = (M = (o || "").split(" ")).length),
                a.plugin = c,
                a.setRatio = u,
                mt.lastIndex = 0,
                d = 0;
              d < O;
              d++
            )
              if (((y = M[d]), (x = R[d] + ""), (S = parseFloat(y)) || 0 === S))
                a.appendXtra(
                  "",
                  S,
                  ht(x, S),
                  x.replace(v, ""),
                  !(!E || -1 === x.indexOf("px")) && Math.round,
                  !0
                );
              else if (n && mt.test(y))
                (k = ")" + ((k = x.indexOf(")") + 1) ? x.substr(k) : "")),
                  (A = -1 !== x.indexOf("hsl") && X),
                  (P = x),
                  (y = pt(y, A)),
                  (x = pt(x, A)),
                  (T = y.length + x.length > 6) && !X && 0 === x[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(R[d]).join("transparent")))
                    : (X || (T = !1),
                      A
                        ? a
                            .appendXtra(
                              P.substr(0, P.indexOf("hsl")) +
                                (T ? "hsla(" : "hsl("),
                              y[0],
                              ht(x[0], y[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", y[1], ht(x[1], y[1]), "%,", !1)
                            .appendXtra(
                              "",
                              y[2],
                              ht(x[2], y[2]),
                              T ? "%," : "%" + k,
                              !1
                            )
                        : a
                            .appendXtra(
                              P.substr(0, P.indexOf("rgb")) +
                                (T ? "rgba(" : "rgb("),
                              y[0],
                              x[0] - y[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", y[1], x[1] - y[1], ",", Math.round)
                            .appendXtra(
                              "",
                              y[2],
                              x[2] - y[2],
                              T ? "," : k,
                              Math.round
                            ),
                      T &&
                        ((y = y.length < 4 ? 1 : y[3]),
                        a.appendXtra(
                          "",
                          y,
                          (x.length < 4 ? 1 : x[3]) - y,
                          k,
                          !1
                        ))),
                  (mt.lastIndex = 0);
              else if ((b = y.match(_))) {
                if (!(w = x.match(v)) || w.length !== b.length) return a;
                for (p = 0, f = 0; f < b.length; f++)
                  (C = b[f]),
                    (P = y.indexOf(C, p)),
                    a.appendXtra(
                      y.substr(p, P - p),
                      Number(C),
                      ht(w[f], C),
                      "",
                      !(!E || "px" !== y.substr(P + C.length, 2)) && Math.round,
                      0 === f
                    ),
                    (p = P + C.length);
                a["xs" + a.l] += y.substr(p);
              } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
            if (-1 !== r.indexOf("=") && a.data) {
              for (k = a.xs0 + a.data.s, d = 1; d < a.l; d++)
                k += a["xs" + d] + a.data["xn" + d];
              a.e = k + a["xs" + d];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          St = 9;
        for ((l = xt.prototype).l = l.pr = 0; --St > 0; )
          (l["xn" + St] = 0), (l["xs" + St] = "");
        (l.xs0 = ""),
          (l._next =
            l._prev =
            l.xfirst =
            l.data =
            l.plugin =
            l.setRatio =
            l.rxp =
              null),
          (l.appendXtra = function (t, e, i, r, n, s) {
            var o = this,
              a = o.l;
            return (
              (o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || ""),
              i || 0 === a || o.plugin
                ? (o.l++,
                  (o.type = o.setRatio ? 2 : 1),
                  (o["xs" + o.l] = r || ""),
                  a > 0
                    ? ((o.data["xn" + a] = e + i),
                      (o.rxp["xn" + a] = n),
                      (o["xn" + a] = e),
                      o.plugin ||
                        ((o.xfirst = new xt(
                          o,
                          "xn" + a,
                          e,
                          i,
                          o.xfirst || o,
                          0,
                          o.n,
                          n,
                          o.pr
                        )),
                        (o.xfirst.xs0 = 0)),
                      o)
                    : ((o.data = { s: e + i }),
                      (o.rxp = {}),
                      (o.s = e),
                      (o.c = i),
                      (o.r = n),
                      o))
                : ((o["xs" + a] += e + (r || "")), o)
            );
          });
        var Tt = function (t, e) {
            (e = e || {}),
              (this.p = (e.prefix && J(t)) || t),
              (a[t] = a[this.p] = this),
              (this.format =
                e.formatter ||
                _t(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.allowFunc = e.allowFunc),
              (this.pr = e.priority || 0);
          },
          Pt = (q._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var r,
              n = t.split(","),
              s = e.defaultValue;
            for (i = i || [s], r = 0; r < n.length; r++)
              (e.prefix = 0 === r && e.prefix),
                (e.defaultValue = i[r] || s),
                new Tt(n[r], e);
          }),
          Ct = (q._registerPluginProp = function (t) {
            if (!a[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              Pt(t, {
                parser: function (t, i, r, n, s, l, h) {
                  var c = o.com.greensock.plugins[e];
                  return c
                    ? (c._cssRegister(), a[r].parse(t, i, r, n, s, l, h))
                    : (Y("Error: " + e + " js file not loaded."), s);
                },
              });
            }
          });
        ((l = Tt.prototype).parseComplex = function (t, e, i, r, n, s) {
          var o,
            a,
            l,
            h,
            c,
            u,
            d = this.keyword;
          if (
            (this.multi &&
              (B.test(i) || B.test(e)
                ? ((a = e.replace(B, "|").split("|")),
                  (l = i.replace(B, "|").split("|")))
                : d && ((a = [e]), (l = [i]))),
            l)
          ) {
            for (
              h = l.length > a.length ? l.length : a.length, o = 0;
              o < h;
              o++
            )
              (e = a[o] = a[o] || this.dflt),
                (i = l[o] = l[o] || this.dflt),
                d &&
                  (c = e.indexOf(d)) !== (u = i.indexOf(d)) &&
                  (-1 === u
                    ? (a[o] = a[o].split(d).join(""))
                    : -1 === c && (a[o] += " " + d));
            (e = a.join(", ")), (i = l.join(", "));
          }
          return wt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s);
        }),
          (l.parse = function (t, e, r, n, s, o, a) {
            return this.parseComplex(
              t.style,
              this.format(tt(t, this.p, i, !1, this.dflt)),
              this.format(e),
              s,
              o
            );
          }),
          (s.registerSpecialProp = function (t, e, i) {
            Pt(t, {
              parser: function (t, r, n, s, o, a, l) {
                var h = new xt(t, n, 0, 0, o, 2, n, !1, i);
                return (h.plugin = a), (h.setRatio = e(t, r, s._tween, n)), h;
              },
              priority: i,
            });
          }),
          (s.useSVGTransformAttr = !0);
        var kt,
          At,
          Mt,
          Rt,
          Ot,
          Et =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Ft = J("transform"),
          Bt = K + "transform",
          It = J("transformOrigin"),
          Lt = null !== J("perspective"),
          Nt = (q.Transform = function () {
            (this.perspective = parseFloat(s.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === s.defaultForce3D || !Lt) &&
                (s.defaultForce3D || "auto"));
          }),
          Ut = r.e.SVGElement,
          Vt = function (t, e, i) {
            var r,
              n = j.createElementNS("http://www.w3.org/2000/svg", t),
              s = /([a-z])([A-Z])/g;
            for (r in i)
              n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
            return e.appendChild(n), n;
          },
          jt = j.documentElement || {},
          Dt =
            ((Ot = p || (/Android/i.test(W) && !r.e.chrome)),
            j.createElementNS &&
              jt.appendChild &&
              !Ot &&
              ((At = Vt("svg", jt)),
              (Rt = (Mt = Vt("rect", At, {
                width: 100,
                height: 50,
                x: 100,
              })).getBoundingClientRect().width),
              (Mt.style[It] = "50% 50%"),
              (Mt.style[Ft] = "scaleX(0.5)"),
              (Ot = Rt === Mt.getBoundingClientRect().width && !(d && Lt)),
              jt.removeChild(At)),
            Ot),
          zt = function (t, e, i, r, n, o) {
            var a,
              l,
              h,
              c,
              u,
              d,
              f,
              p,
              g,
              m,
              _,
              v,
              y,
              x,
              b = t._gsTransform,
              w = Xt(t, !0);
            b && ((y = b.xOrigin), (x = b.yOrigin)),
              (!r || (a = r.split(" ")).length < 2) &&
                (0 === (f = t.getBBox()).x &&
                  0 === f.y &&
                  f.width + f.height === 0 &&
                  (f = {
                    x:
                      parseFloat(
                        t.hasAttribute("x")
                          ? t.getAttribute("x")
                          : t.hasAttribute("cx")
                          ? t.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        t.hasAttribute("y")
                          ? t.getAttribute("y")
                          : t.hasAttribute("cy")
                          ? t.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (a = [
                  (-1 !== (e = lt(e).split(" "))[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * f.width
                    : parseFloat(e[0])) + f.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * f.height
                    : parseFloat(e[1])) + f.y,
                ])),
              (i.xOrigin = c = parseFloat(a[0])),
              (i.yOrigin = u = parseFloat(a[1])),
              r &&
                w !== Wt &&
                ((d = w[0]),
                (f = w[1]),
                (p = w[2]),
                (g = w[3]),
                (m = w[4]),
                (_ = w[5]),
                (v = d * g - f * p) &&
                  ((l = c * (g / v) + u * (-p / v) + (p * _ - g * m) / v),
                  (h = c * (-f / v) + u * (d / v) - (d * _ - f * m) / v),
                  (c = i.xOrigin = a[0] = l),
                  (u = i.yOrigin = a[1] = h))),
              b &&
                (o &&
                  ((i.xOffset = b.xOffset), (i.yOffset = b.yOffset), (b = i)),
                n || (!1 !== n && !1 !== s.defaultSmoothOrigin)
                  ? ((l = c - y),
                    (h = u - x),
                    (b.xOffset += l * w[0] + h * w[2] - l),
                    (b.yOffset += l * w[1] + h * w[3] - h))
                  : (b.xOffset = b.yOffset = 0)),
              o || t.setAttribute("data-svg-origin", a.join(" "));
          },
          Gt = function (t) {
            var e,
              i = D(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              n = this.nextSibling,
              s = this.style.cssText;
            if (
              (jt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Gt);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              n ? r.insertBefore(this, n) : r.appendChild(this),
              jt.removeChild(i),
              (this.style.cssText = s),
              e
            );
          },
          qt = function (t) {
            return !(
              !Ut ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (t) {
                try {
                  return t.getBBox();
                } catch (e) {
                  return Gt.call(t, !0);
                }
              })(t)
            );
          },
          Wt = [1, 0, 0, 1, 0, 0],
          Xt = function (t, e) {
            var i,
              r,
              n,
              s,
              o,
              a,
              l,
              h = t._gsTransform || new Nt(),
              c = t.style;
            if (
              (Ft
                ? (r = tt(t, Bt, null, !0))
                : t.currentStyle &&
                  (r =
                    (r = t.currentStyle.filter.match(E)) && 4 === r.length
                      ? [
                          r[0].substr(4),
                          Number(r[2].substr(4)),
                          Number(r[1].substr(4)),
                          r[3].substr(4),
                          h.x || 0,
                          h.y || 0,
                        ].join(",")
                      : ""),
              (i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r),
              Ft &&
                i &&
                !t.offsetParent &&
                t !== jt &&
                ((s = c.display),
                (c.display = "block"),
                ((l = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (a = t.nextSibling), jt.appendChild(t)),
                (i =
                  !(r = tt(t, Bt, null, !0)) ||
                  "none" === r ||
                  "matrix(1, 0, 0, 1, 0, 0)" === r),
                s ? (c.display = s) : Jt(c, "display"),
                o &&
                  (a
                    ? l.insertBefore(t, a)
                    : l
                    ? l.appendChild(t)
                    : jt.removeChild(t))),
              (h.svg || (t.getCTM && qt(t))) &&
                (i &&
                  -1 !== (c[Ft] + "").indexOf("matrix") &&
                  ((r = c[Ft]), (i = 0)),
                (n = t.getAttribute("transform")),
                i &&
                  n &&
                  ((r =
                    "matrix(" +
                    (n = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    n.b +
                    "," +
                    n.c +
                    "," +
                    n.d +
                    "," +
                    n.e +
                    "," +
                    n.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Wt;
            for (n = (r || "").match(_) || [], St = n.length; --St > -1; )
              (s = Number(n[St])),
                (n[St] = (o = s - (s |= 0))
                  ? ((1e5 * o + (o < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s
                  : s);
            return e && n.length > 6
              ? [n[0], n[1], n[4], n[5], n[12], n[13]]
              : n;
          },
          Ht = (q.getTransform = function (t, e, i, n) {
            if (t._gsTransform && i && !n) return t._gsTransform;
            var o,
              a,
              l,
              h,
              c,
              u,
              d = (i && t._gsTransform) || new Nt(),
              f = d.scaleX < 0,
              p =
                (Lt &&
                  (parseFloat(tt(t, It, e, !1, "0 0 0").split(" ")[2]) ||
                    d.zOrigin)) ||
                0,
              g = parseFloat(s.defaultTransformPerspective) || 0;
            if (
              ((d.svg = !(!t.getCTM || !qt(t))),
              d.svg &&
                (zt(
                  t,
                  tt(t, It, e, !1, "50% 50%") + "",
                  d,
                  t.getAttribute("data-svg-origin")
                ),
                (kt = s.useSVGTransformAttr || Dt)),
              (o = Xt(t)) !== Wt)
            ) {
              if (16 === o.length) {
                var m,
                  _,
                  v,
                  y,
                  x,
                  b = o[0],
                  w = o[1],
                  S = o[2],
                  T = o[3],
                  P = o[4],
                  C = o[5],
                  k = o[6],
                  A = o[7],
                  M = o[8],
                  R = o[9],
                  O = o[10],
                  E = o[12],
                  F = o[13],
                  B = o[14],
                  I = o[11],
                  L = Math.atan2(k, O);
                d.zOrigin &&
                  ((E = M * (B = -d.zOrigin) - o[12]),
                  (F = R * B - o[13]),
                  (B = O * B + d.zOrigin - o[14])),
                  (d.rotationX = L * N),
                  L &&
                    ((m = P * (y = Math.cos(-L)) + M * (x = Math.sin(-L))),
                    (_ = C * y + R * x),
                    (v = k * y + O * x),
                    (M = P * -x + M * y),
                    (R = C * -x + R * y),
                    (O = k * -x + O * y),
                    (I = A * -x + I * y),
                    (P = m),
                    (C = _),
                    (k = v)),
                  (L = Math.atan2(-S, O)),
                  (d.rotationY = L * N),
                  L &&
                    ((_ = w * (y = Math.cos(-L)) - R * (x = Math.sin(-L))),
                    (v = S * y - O * x),
                    (R = w * x + R * y),
                    (O = S * x + O * y),
                    (I = T * x + I * y),
                    (b = m = b * y - M * x),
                    (w = _),
                    (S = v)),
                  (L = Math.atan2(w, b)),
                  (d.rotation = L * N),
                  L &&
                    ((m = b * (y = Math.cos(L)) + w * (x = Math.sin(L))),
                    (_ = P * y + C * x),
                    (v = M * y + R * x),
                    (w = w * y - b * x),
                    (C = C * y - P * x),
                    (R = R * y - M * x),
                    (b = m),
                    (P = _),
                    (M = v)),
                  d.rotationX &&
                    Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 &&
                    ((d.rotationX = d.rotation = 0),
                    (d.rotationY = 180 - d.rotationY)),
                  (L = Math.atan2(P, C)),
                  (d.scaleX =
                    ((1e5 * Math.sqrt(b * b + w * w + S * S) + 0.5) | 0) / 1e5),
                  (d.scaleY =
                    ((1e5 * Math.sqrt(C * C + k * k) + 0.5) | 0) / 1e5),
                  (d.scaleZ =
                    ((1e5 * Math.sqrt(M * M + R * R + O * O) + 0.5) | 0) / 1e5),
                  (b /= d.scaleX),
                  (P /= d.scaleY),
                  (w /= d.scaleX),
                  (C /= d.scaleY),
                  Math.abs(L) > 2e-5
                    ? ((d.skewX = L * N),
                      (P = 0),
                      "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(L)))
                    : (d.skewX = 0),
                  (d.perspective = I ? 1 / (I < 0 ? -I : I) : 0),
                  (d.x = E),
                  (d.y = F),
                  (d.z = B),
                  d.svg &&
                    ((d.x -= d.xOrigin - (d.xOrigin * b - d.yOrigin * P)),
                    (d.y -= d.yOrigin - (d.yOrigin * w - d.xOrigin * C)));
              } else if (
                !Lt ||
                n ||
                !o.length ||
                d.x !== o[4] ||
                d.y !== o[5] ||
                (!d.rotationX && !d.rotationY)
              ) {
                var U = o.length >= 6,
                  V = U ? o[0] : 1,
                  j = o[1] || 0,
                  D = o[2] || 0,
                  z = U ? o[3] : 1;
                (d.x = o[4] || 0),
                  (d.y = o[5] || 0),
                  (l = Math.sqrt(V * V + j * j)),
                  (h = Math.sqrt(z * z + D * D)),
                  (c = V || j ? Math.atan2(j, V) * N : d.rotation || 0),
                  (u = D || z ? Math.atan2(D, z) * N + c : d.skewX || 0),
                  (d.scaleX = l),
                  (d.scaleY = h),
                  (d.rotation = c),
                  (d.skewX = u),
                  Lt &&
                    ((d.rotationX = d.rotationY = d.z = 0),
                    (d.perspective = g),
                    (d.scaleZ = 1)),
                  d.svg &&
                    ((d.x -= d.xOrigin - (d.xOrigin * V + d.yOrigin * D)),
                    (d.y -= d.yOrigin - (d.xOrigin * j + d.yOrigin * z)));
              }
              for (a in (Math.abs(d.skewX) > 90 &&
                Math.abs(d.skewX) < 270 &&
                (f
                  ? ((d.scaleX *= -1),
                    (d.skewX += d.rotation <= 0 ? 180 : -180),
                    (d.rotation += d.rotation <= 0 ? 180 : -180))
                  : ((d.scaleY *= -1), (d.skewX += d.skewX <= 0 ? 180 : -180))),
              (d.zOrigin = p),
              d))
                d[a] < 2e-5 && d[a] > -2e-5 && (d[a] = 0);
            }
            return (
              i &&
                ((t._gsTransform = d),
                d.svg &&
                  (kt && t.style[Ft]
                    ? r.f.delayedCall(0.001, function () {
                        Jt(t.style, Ft);
                      })
                    : !kt &&
                      t.getAttribute("transform") &&
                      r.f.delayedCall(0.001, function () {
                        t.removeAttribute("transform");
                      }))),
              d
            );
          }),
          Yt = function (t) {
            var e,
              i,
              r = this.data,
              n = -r.rotation * L,
              s = n + r.skewX * L,
              o = ((Math.cos(n) * r.scaleX * 1e5) | 0) / 1e5,
              a = ((Math.sin(n) * r.scaleX * 1e5) | 0) / 1e5,
              l = ((Math.sin(s) * -r.scaleY * 1e5) | 0) / 1e5,
              h = ((Math.cos(s) * r.scaleY * 1e5) | 0) / 1e5,
              c = this.t.style,
              u = this.t.currentStyle;
            if (u) {
              (i = a), (a = -l), (l = -i), (e = u.filter), (c.filter = "");
              var d,
                f,
                g = this.t.offsetWidth,
                m = this.t.offsetHeight,
                _ = "absolute" !== u.position,
                v =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  o +
                  ", M12=" +
                  a +
                  ", M21=" +
                  l +
                  ", M22=" +
                  h,
                y = r.x + (g * r.xPercent) / 100,
                x = r.y + (m * r.yPercent) / 100;
              if (
                (null != r.ox &&
                  ((y +=
                    (d = (r.oxp ? g * r.ox * 0.01 : r.ox) - g / 2) -
                    (d * o +
                      (f = (r.oyp ? m * r.oy * 0.01 : r.oy) - m / 2) * a)),
                  (x += f - (d * l + f * h))),
                (v += _
                  ? ", Dx=" +
                    ((d = g / 2) - (d * o + (f = m / 2) * a) + y) +
                    ", Dy=" +
                    (f - (d * l + f * h) + x) +
                    ")"
                  : ", sizingMethod='auto expand')"),
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (c.filter = e.replace(F, v))
                  : (c.filter = v + " " + e),
                (0 !== t && 1 !== t) ||
                  (1 === o &&
                    0 === a &&
                    0 === l &&
                    1 === h &&
                    ((_ && -1 === v.indexOf("Dx=0, Dy=0")) ||
                      (S.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf("Alpha")) &&
                        c.removeAttribute("filter")))),
                !_)
              ) {
                var b,
                  T,
                  P,
                  C = p < 8 ? 1 : -1;
                for (
                  d = r.ieOffsetX || 0,
                    f = r.ieOffsetY || 0,
                    r.ieOffsetX = Math.round(
                      (g - ((o < 0 ? -o : o) * g + (a < 0 ? -a : a) * m)) / 2 +
                        y
                    ),
                    r.ieOffsetY = Math.round(
                      (m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * g)) / 2 +
                        x
                    ),
                    St = 0;
                  St < 4;
                  St++
                )
                  (P =
                    (i =
                      -1 !== (b = u[(T = ot[St])]).indexOf("px")
                        ? parseFloat(b)
                        : et(this.t, T, parseFloat(b), b.replace(w, "")) ||
                          0) !== r[T]
                      ? St < 2
                        ? -r.ieOffsetX
                        : -r.ieOffsetY
                      : St < 2
                      ? d - r.ieOffsetX
                      : f - r.ieOffsetY),
                    (c[T] =
                      (r[T] = Math.round(
                        i - P * (0 === St || 2 === St ? 1 : C)
                      )) + "px");
              }
            }
          },
          Kt =
            (q.set3DTransformRatio =
            q.setTransformRatio =
              function (t) {
                var e,
                  i,
                  r,
                  n,
                  s,
                  o,
                  a,
                  l,
                  h,
                  c,
                  u,
                  f,
                  p,
                  g,
                  m,
                  _,
                  v,
                  y,
                  x,
                  b,
                  w = this.data,
                  S = this.t.style,
                  T = w.rotation,
                  P = w.rotationX,
                  C = w.rotationY,
                  k = w.scaleX,
                  A = w.scaleY,
                  M = w.scaleZ,
                  R = w.x,
                  O = w.y,
                  E = w.z,
                  F = w.svg,
                  B = w.perspective,
                  I = w.force3D,
                  N = w.skewY,
                  U = w.skewX;
                if (
                  (N && ((U += N), (T += N)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== I ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      I) ||
                    E ||
                    B ||
                    C ||
                    P ||
                    1 !== M
                  ) ||
                    (kt && F) ||
                    !Lt)
                )
                  T || U || F
                    ? ((T *= L),
                      (b = U * L),
                      1e5,
                      (i = Math.cos(T) * k),
                      (s = Math.sin(T) * k),
                      (r = Math.sin(T - b) * -A),
                      (o = Math.cos(T - b) * A),
                      b &&
                        "simple" === w.skewType &&
                        ((e = Math.tan(b - N * L)),
                        (r *= e = Math.sqrt(1 + e * e)),
                        (o *= e),
                        N &&
                          ((e = Math.tan(N * L)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (s *= e))),
                      F &&
                        ((R +=
                          w.xOrigin -
                          (w.xOrigin * i + w.yOrigin * r) +
                          w.xOffset),
                        (O +=
                          w.yOrigin -
                          (w.xOrigin * s + w.yOrigin * o) +
                          w.yOffset),
                        kt &&
                          (w.xPercent || w.yPercent) &&
                          ((m = this.t.getBBox()),
                          (R += 0.01 * w.xPercent * m.width),
                          (O += 0.01 * w.yPercent * m.height)),
                        R < (m = 1e-6) && R > -m && (R = 0),
                        O < m && O > -m && (O = 0)),
                      (x =
                        ((1e5 * i) | 0) / 1e5 +
                        "," +
                        ((1e5 * s) | 0) / 1e5 +
                        "," +
                        ((1e5 * r) | 0) / 1e5 +
                        "," +
                        ((1e5 * o) | 0) / 1e5 +
                        "," +
                        R +
                        "," +
                        O +
                        ")"),
                      F && kt
                        ? this.t.setAttribute("transform", "matrix(" + x)
                        : (S[Ft] =
                            (w.xPercent || w.yPercent
                              ? "translate(" +
                                w.xPercent +
                                "%," +
                                w.yPercent +
                                "%) matrix("
                              : "matrix(") + x))
                    : (S[Ft] =
                        (w.xPercent || w.yPercent
                          ? "translate(" +
                            w.xPercent +
                            "%," +
                            w.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        k +
                        ",0,0," +
                        A +
                        "," +
                        R +
                        "," +
                        O +
                        ")");
                else {
                  if (
                    (d &&
                      (k < (m = 1e-4) && k > -m && (k = M = 2e-5),
                      A < m && A > -m && (A = M = 2e-5),
                      !B || w.z || w.rotationX || w.rotationY || (B = 0)),
                    T || U)
                  )
                    (T *= L),
                      (_ = i = Math.cos(T)),
                      (v = s = Math.sin(T)),
                      U &&
                        ((T -= U * L),
                        (_ = Math.cos(T)),
                        (v = Math.sin(T)),
                        "simple" === w.skewType &&
                          ((e = Math.tan((U - N) * L)),
                          (_ *= e = Math.sqrt(1 + e * e)),
                          (v *= e),
                          w.skewY &&
                            ((e = Math.tan(N * L)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (s *= e)))),
                      (r = -v),
                      (o = _);
                  else {
                    if (!(C || P || 1 !== M || B || F))
                      return void (S[Ft] =
                        (w.xPercent || w.yPercent
                          ? "translate(" +
                            w.xPercent +
                            "%," +
                            w.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        R +
                        "px," +
                        O +
                        "px," +
                        E +
                        "px)" +
                        (1 !== k || 1 !== A
                          ? " scale(" + k + "," + A + ")"
                          : ""));
                    (i = o = 1), (r = s = 0);
                  }
                  (c = 1),
                    (n = a = l = h = u = f = 0),
                    (p = B ? -1 / B : 0),
                    (g = w.zOrigin),
                    (m = 1e-6),
                    ",",
                    "0",
                    (T = C * L) &&
                      ((_ = Math.cos(T)),
                      (l = -(v = Math.sin(T))),
                      (u = p * -v),
                      (n = i * v),
                      (a = s * v),
                      (c = _),
                      (p *= _),
                      (i *= _),
                      (s *= _)),
                    (T = P * L) &&
                      ((e = r * (_ = Math.cos(T)) + n * (v = Math.sin(T))),
                      (y = o * _ + a * v),
                      (h = c * v),
                      (f = p * v),
                      (n = r * -v + n * _),
                      (a = o * -v + a * _),
                      (c *= _),
                      (p *= _),
                      (r = e),
                      (o = y)),
                    1 !== M && ((n *= M), (a *= M), (c *= M), (p *= M)),
                    1 !== A && ((r *= A), (o *= A), (h *= A), (f *= A)),
                    1 !== k && ((i *= k), (s *= k), (l *= k), (u *= k)),
                    (g || F) &&
                      (g && ((R += n * -g), (O += a * -g), (E += c * -g + g)),
                      F &&
                        ((R +=
                          w.xOrigin -
                          (w.xOrigin * i + w.yOrigin * r) +
                          w.xOffset),
                        (O +=
                          w.yOrigin -
                          (w.xOrigin * s + w.yOrigin * o) +
                          w.yOffset)),
                      R < m && R > -m && (R = "0"),
                      O < m && O > -m && (O = "0"),
                      E < m && E > -m && (E = 0)),
                    (x =
                      w.xPercent || w.yPercent
                        ? "translate(" +
                          w.xPercent +
                          "%," +
                          w.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (x +=
                      (i < m && i > -m ? "0" : i) +
                      "," +
                      (s < m && s > -m ? "0" : s) +
                      "," +
                      (l < m && l > -m ? "0" : l)),
                    (x +=
                      "," +
                      (u < m && u > -m ? "0" : u) +
                      "," +
                      (r < m && r > -m ? "0" : r) +
                      "," +
                      (o < m && o > -m ? "0" : o)),
                    P || C || 1 !== M
                      ? ((x +=
                          "," +
                          (h < m && h > -m ? "0" : h) +
                          "," +
                          (f < m && f > -m ? "0" : f) +
                          "," +
                          (n < m && n > -m ? "0" : n)),
                        (x +=
                          "," +
                          (a < m && a > -m ? "0" : a) +
                          "," +
                          (c < m && c > -m ? "0" : c) +
                          "," +
                          (p < m && p > -m ? "0" : p) +
                          ","))
                      : (x += ",0,0,0,0,1,0,"),
                    (x +=
                      R + "," + O + "," + E + "," + (B ? 1 + -E / B : 1) + ")"),
                    (S[Ft] = x);
                }
              });
        ((l = Nt.prototype).x =
          l.y =
          l.z =
          l.skewX =
          l.skewY =
          l.rotation =
          l.rotationX =
          l.rotationY =
          l.zOrigin =
          l.xPercent =
          l.yPercent =
          l.xOffset =
          l.yOffset =
            0),
          (l.scaleX = l.scaleY = l.scaleZ = 1),
          Pt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, r, n, o, a, l) {
                if (n._lastParsedTransform === l) return o;
                n._lastParsedTransform = l;
                var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                h && (l.scale = h(m, t));
                var c,
                  u,
                  d,
                  f,
                  p,
                  _,
                  v,
                  y,
                  x,
                  b = t._gsTransform,
                  w = t.style,
                  S = Et.length,
                  T = l,
                  P = {},
                  C = Ht(t, i, !0, T.parseTransform),
                  k =
                    T.transform &&
                    ("function" == typeof T.transform
                      ? T.transform(m, g)
                      : T.transform);
                if (
                  ((C.skewType = T.skewType || C.skewType || s.defaultSkewType),
                  (n._transform = C),
                  "rotationZ" in T && (T.rotation = T.rotationZ),
                  k && "string" == typeof k && Ft)
                )
                  ((u = z.style)[Ft] = k),
                    (u.display = "block"),
                    (u.position = "absolute"),
                    -1 !== k.indexOf("%") &&
                      ((u.width = tt(t, "width")),
                      (u.height = tt(t, "height"))),
                    j.body.appendChild(z),
                    (c = Ht(z, null, !1)),
                    "simple" === C.skewType &&
                      (c.scaleY *= Math.cos(c.skewX * L)),
                    C.svg &&
                      ((_ = C.xOrigin),
                      (v = C.yOrigin),
                      (c.x -= C.xOffset),
                      (c.y -= C.yOffset),
                      (T.transformOrigin || T.svgOrigin) &&
                        ((k = {}),
                        zt(
                          t,
                          lt(T.transformOrigin),
                          k,
                          T.svgOrigin,
                          T.smoothOrigin,
                          !0
                        ),
                        (_ = k.xOrigin),
                        (v = k.yOrigin),
                        (c.x -= k.xOffset - C.xOffset),
                        (c.y -= k.yOffset - C.yOffset)),
                      (_ || v) &&
                        ((y = Xt(z, !0)),
                        (c.x -= _ - (_ * y[0] + v * y[2])),
                        (c.y -= v - (_ * y[1] + v * y[3])))),
                    j.body.removeChild(z),
                    c.perspective || (c.perspective = C.perspective),
                    null != T.xPercent &&
                      (c.xPercent = ct(T.xPercent, C.xPercent)),
                    null != T.yPercent &&
                      (c.yPercent = ct(T.yPercent, C.yPercent));
                else if ("object" == typeof T) {
                  if (
                    ((c = {
                      scaleX: ct(
                        null != T.scaleX ? T.scaleX : T.scale,
                        C.scaleX
                      ),
                      scaleY: ct(
                        null != T.scaleY ? T.scaleY : T.scale,
                        C.scaleY
                      ),
                      scaleZ: ct(T.scaleZ, C.scaleZ),
                      x: ct(T.x, C.x),
                      y: ct(T.y, C.y),
                      z: ct(T.z, C.z),
                      xPercent: ct(T.xPercent, C.xPercent),
                      yPercent: ct(T.yPercent, C.yPercent),
                      perspective: ct(T.transformPerspective, C.perspective),
                    }),
                    null != (p = T.directionalRotation))
                  )
                    if ("object" == typeof p) for (u in p) T[u] = p[u];
                    else T.rotation = p;
                  "string" == typeof T.x &&
                    -1 !== T.x.indexOf("%") &&
                    ((c.x = 0), (c.xPercent = ct(T.x, C.xPercent))),
                    "string" == typeof T.y &&
                      -1 !== T.y.indexOf("%") &&
                      ((c.y = 0), (c.yPercent = ct(T.y, C.yPercent))),
                    (c.rotation = ut(
                      "rotation" in T
                        ? T.rotation
                        : "shortRotation" in T
                        ? T.shortRotation + "_short"
                        : C.rotation,
                      C.rotation,
                      "rotation",
                      P
                    )),
                    Lt &&
                      ((c.rotationX = ut(
                        "rotationX" in T
                          ? T.rotationX
                          : "shortRotationX" in T
                          ? T.shortRotationX + "_short"
                          : C.rotationX || 0,
                        C.rotationX,
                        "rotationX",
                        P
                      )),
                      (c.rotationY = ut(
                        "rotationY" in T
                          ? T.rotationY
                          : "shortRotationY" in T
                          ? T.shortRotationY + "_short"
                          : C.rotationY || 0,
                        C.rotationY,
                        "rotationY",
                        P
                      ))),
                    (c.skewX = ut(T.skewX, C.skewX)),
                    (c.skewY = ut(T.skewY, C.skewY));
                }
                for (
                  Lt &&
                    null != T.force3D &&
                    ((C.force3D = T.force3D), (f = !0)),
                    (d =
                      C.force3D ||
                      C.z ||
                      C.rotationX ||
                      C.rotationY ||
                      c.z ||
                      c.rotationX ||
                      c.rotationY ||
                      c.perspective) ||
                      null == T.scale ||
                      (c.scaleZ = 1);
                  --S > -1;

                )
                  ((k = c[(x = Et[S])] - C[x]) > 1e-6 ||
                    k < -1e-6 ||
                    null != T[x] ||
                    null != U[x]) &&
                    ((f = !0),
                    (o = new xt(C, x, C[x], k, o)),
                    x in P && (o.e = P[x]),
                    (o.xs0 = 0),
                    (o.plugin = a),
                    n._overwriteProps.push(o.n));
                return (
                  (k =
                    "function" == typeof T.transformOrigin
                      ? T.transformOrigin(m, g)
                      : T.transformOrigin),
                  C.svg &&
                    (k || T.svgOrigin) &&
                    ((_ = C.xOffset),
                    (v = C.yOffset),
                    zt(t, lt(k), c, T.svgOrigin, T.smoothOrigin),
                    (o = bt(
                      C,
                      "xOrigin",
                      (b ? C : c).xOrigin,
                      c.xOrigin,
                      o,
                      "transformOrigin"
                    )),
                    (o = bt(
                      C,
                      "yOrigin",
                      (b ? C : c).yOrigin,
                      c.yOrigin,
                      o,
                      "transformOrigin"
                    )),
                    (_ === C.xOffset && v === C.yOffset) ||
                      ((o = bt(
                        C,
                        "xOffset",
                        b ? _ : C.xOffset,
                        C.xOffset,
                        o,
                        "transformOrigin"
                      )),
                      (o = bt(
                        C,
                        "yOffset",
                        b ? v : C.yOffset,
                        C.yOffset,
                        o,
                        "transformOrigin"
                      ))),
                    (k = "0px 0px")),
                  (k || (Lt && d && C.zOrigin)) &&
                    (Ft
                      ? ((f = !0),
                        (x = It),
                        k ||
                          (k =
                            (k = (tt(t, x, i, !1, "50% 50%") + "").split(
                              " "
                            ))[0] +
                            " " +
                            k[1] +
                            " " +
                            C.zOrigin +
                            "px"),
                        (k += ""),
                        ((o = new xt(w, x, 0, 0, o, -1, "transformOrigin")).b =
                          w[x]),
                        (o.plugin = a),
                        Lt
                          ? ((u = C.zOrigin),
                            (k = k.split(" ")),
                            (C.zOrigin =
                              (k.length > 2 ? parseFloat(k[2]) : u) || 0),
                            (o.xs0 = o.e =
                              k[0] + " " + (k[1] || "50%") + " 0px"),
                            ((o = new xt(C, "zOrigin", 0, 0, o, -1, o.n)).b =
                              u),
                            (o.xs0 = o.e = C.zOrigin))
                          : (o.xs0 = o.e = k))
                      : lt(k + "", C)),
                  f &&
                    (n._transformType =
                      (C.svg && kt) || (!d && 3 !== this._transformType)
                        ? 2
                        : 3),
                  h && (l.scale = h),
                  o
                );
              },
              allowFunc: !0,
              prefix: !0,
            }
          ),
          Pt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          Pt("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: _t("inset(0% 0% 0% 0%)", !1, !0),
          }),
          Pt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, r, n, s, o, a) {
              r = this.format(r);
              var l,
                h,
                c,
                u,
                d,
                f,
                p,
                g,
                m,
                _,
                v,
                y,
                x,
                b,
                w,
                S,
                T = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                P = t.style;
              for (
                m = parseFloat(t.offsetWidth),
                  _ = parseFloat(t.offsetHeight),
                  l = r.split(" "),
                  h = 0;
                h < T.length;
                h++
              )
                this.p.indexOf("border") && (T[h] = J(T[h])),
                  -1 !== (d = u = tt(t, T[h], i, !1, "0px")).indexOf(" ") &&
                    ((u = d.split(" ")), (d = u[0]), (u = u[1])),
                  (f = c = l[h]),
                  (p = parseFloat(d)),
                  (y = d.substr((p + "").length)),
                  (x = "=" === f.charAt(1))
                    ? ((g = parseInt(f.charAt(0) + "1", 10)),
                      (f = f.substr(2)),
                      (g *= parseFloat(f)),
                      (v = f.substr((g + "").length - (g < 0 ? 1 : 0)) || ""))
                    : ((g = parseFloat(f)), (v = f.substr((g + "").length))),
                  "" === v && (v = e[n] || y),
                  v !== y &&
                    ((b = et(t, "borderLeft", p, y)),
                    (w = et(t, "borderTop", p, y)),
                    "%" === v
                      ? ((d = (b / m) * 100 + "%"), (u = (w / _) * 100 + "%"))
                      : "em" === v
                      ? ((d = b / (S = et(t, "borderLeft", 1, "em")) + "em"),
                        (u = w / S + "em"))
                      : ((d = b + "px"), (u = w + "px")),
                    x &&
                      ((f = parseFloat(d) + g + v),
                      (c = parseFloat(u) + g + v))),
                  (o = wt(P, T[h], d + " " + u, f + " " + c, !1, "0px", o));
              return o;
            },
            prefix: !0,
            formatter: _t("0px 0px 0px 0px", !1, !0),
          }),
          Pt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, r, n, s, o) {
                return wt(
                  t.style,
                  r,
                  this.format(tt(t, r, i, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  s
                );
              },
              prefix: !0,
              formatter: _t("0px 0px", !1, !0),
            }
          ),
          Pt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, r, n, s, o) {
              var a,
                l,
                h,
                c,
                u,
                d,
                f = "background-position",
                g = i || Q(t),
                m = this.format(
                  (g
                    ? p
                      ? g.getPropertyValue(f + "-x") +
                        " " +
                        g.getPropertyValue(f + "-y")
                      : g.getPropertyValue(f)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                _ = this.format(e);
              if (
                (-1 !== m.indexOf("%")) != (-1 !== _.indexOf("%")) &&
                _.split(",").length < 2 &&
                (d = tt(t, "backgroundImage").replace(M, "")) &&
                "none" !== d
              ) {
                for (
                  a = m.split(" "),
                    l = _.split(" "),
                    G.setAttribute("src", d),
                    h = 2;
                  --h > -1;

                )
                  (c = -1 !== (m = a[h]).indexOf("%")) !==
                    (-1 !== l[h].indexOf("%")) &&
                    ((u =
                      0 === h
                        ? t.offsetWidth - G.width
                        : t.offsetHeight - G.height),
                    (a[h] = c
                      ? (parseFloat(m) / 100) * u + "px"
                      : (parseFloat(m) / u) * 100 + "%"));
                m = a.join(" ");
              }
              return this.parseComplex(t.style, m, _, s, o);
            },
            formatter: lt,
          }),
          Pt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : lt(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          Pt("perspective", { defaultValue: "0px", prefix: !0 }),
          Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          Pt("transformStyle", { prefix: !0 }),
          Pt("backfaceVisibility", { prefix: !0 }),
          Pt("userSelect", { prefix: !0 }),
          Pt("margin", {
            parser: vt("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          Pt("padding", {
            parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          Pt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, r, n, s, o) {
              var a, l, h;
              return (
                p < 9
                  ? ((l = t.currentStyle),
                    (h = p < 8 ? " " : ","),
                    (a =
                      "rect(" +
                      l.clipTop +
                      h +
                      l.clipRight +
                      h +
                      l.clipBottom +
                      h +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(h)))
                  : ((a = this.format(tt(t, this.p, i, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, a, e, s, o)
              );
            },
          }),
          Pt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          Pt("autoRound,strictUnits", {
            parser: function (t, e, i, r, n) {
              return n;
            },
          }),
          Pt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, r, n, s, o) {
              var a = tt(t, "borderTopWidth", i, !1, "0px"),
                l = this.format(e).split(" "),
                h = l[0].replace(w, "");
              return (
                "px" !== h &&
                  (a = parseFloat(a) / et(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(
                  t.style,
                  this.format(
                    a +
                      " " +
                      tt(t, "borderTopStyle", i, !1, "solid") +
                      " " +
                      tt(t, "borderTopColor", i, !1, "#000")
                  ),
                  l.join(" "),
                  s,
                  o
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(mt) || ["#000"])[0]
              );
            },
          }),
          Pt("borderWidth", {
            parser: vt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          Pt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, r, n, s) {
              var o = t.style,
                a = "cssFloat" in o ? "cssFloat" : "styleFloat";
              return new xt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e);
            },
          });
        var Zt = function (t) {
          var e,
            i = this.t,
            r = i.filter || tt(this.data, "filter") || "",
            n = (this.s + this.c * t) | 0;
          100 === n &&
            (-1 === r.indexOf("atrix(") &&
            -1 === r.indexOf("radient(") &&
            -1 === r.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !tt(this.data, "filter")))
              : ((i.filter = r.replace(P, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"),
              -1 === r.indexOf("pacity")
                ? (0 === n && this.xn1) ||
                  (i.filter = r + " alpha(opacity=" + n + ")")
                : (i.filter = r.replace(S, "opacity=" + n)));
        };
        Pt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, r, n, s, o) {
            var a = parseFloat(tt(t, "opacity", i, !1, "1")),
              l = t.style,
              h = "autoAlpha" === r;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
              h &&
                1 === a &&
                "hidden" === tt(t, "visibility", i) &&
                0 !== e &&
                (a = 0),
              X
                ? (s = new xt(l, "opacity", a, e - a, s))
                : (((s = new xt(l, "opacity", 100 * a, 100 * (e - a), s)).xn1 =
                    h ? 1 : 0),
                  (l.zoom = 1),
                  (s.type = 2),
                  (s.b = "alpha(opacity=" + s.s + ")"),
                  (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                  (s.data = t),
                  (s.plugin = o),
                  (s.setRatio = Zt)),
              h &&
                (((s = new xt(
                  l,
                  "visibility",
                  0,
                  0,
                  s,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== a ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                n._overwriteProps.push(s.n),
                n._overwriteProps.push(r)),
              s
            );
          },
        });
        var Jt = function (t, e) {
            e &&
              (t.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  t.removeProperty(e.replace(k, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          $t = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Jt(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        Pt("className", {
          parser: function (e, r, n, s, o, a, l) {
            var h,
              c,
              u,
              d,
              f,
              p = e.getAttribute("class") || "",
              g = e.style.cssText;
            if (
              (((o = s._classNamePT = new xt(e, n, 0, 0, o, 2)).setRatio = $t),
              (o.pr = -11),
              (t = !0),
              (o.b = p),
              (c = rt(e, i)),
              (u = e._gsClassPT))
            ) {
              for (d = {}, f = u.data; f; ) (d[f.p] = 1), (f = f._next);
              u.setRatio(1);
            }
            return (
              (e._gsClassPT = o),
              (o.e =
                "=" !== r.charAt(1)
                  ? r
                  : p.replace(
                      new RegExp("(?:\\s|^)" + r.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === r.charAt(0) ? " " + r.substr(2) : "")),
              e.setAttribute("class", o.e),
              (h = nt(e, c, rt(e), l, d)),
              e.setAttribute("class", p),
              (o.data = h.firstMPT),
              e.style.cssText !== g && (e.style.cssText = g),
              (o = o.xfirst = s.parse(e, h.difs, o, a))
            );
          },
        });
        var Qt = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              r,
              n,
              s,
              o = this.t.style,
              l = a.transform.parse;
            if ("all" === this.e) (o.cssText = ""), (n = !0);
            else
              for (
                r = (e = this.e.split(" ").join("").split(",")).length;
                --r > -1;

              )
                (i = e[r]),
                  a[i] &&
                    (a[i].parse === l
                      ? (n = !0)
                      : (i = "transformOrigin" === i ? It : a[i].p)),
                  Jt(o, i);
            n &&
              (Jt(o, Ft),
              (s = this.t._gsTransform) &&
                (s.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          Pt("clearProps", {
            parser: function (e, i, r, n, s) {
              return (
                ((s = new xt(e, r, 0, 0, s, 2)).setRatio = Qt),
                (s.e = i),
                (s.pr = -10),
                (s.data = n._tween),
                (t = !0),
                s
              );
            },
          }),
            l = "bezier,throwProps,physicsProps,physics2D".split(","),
            St = l.length;
          St--;

        )
          Ct(l[St]);
        ((l = s.prototype)._firstPT =
          l._lastParsedTransform =
          l._transform =
            null),
          (l._onInitTween = function (r, o, l, d) {
            if (!r.nodeType) return !1;
            (this._target = g = r),
              (this._tween = l),
              (this._vars = o),
              (m = d),
              (h = o.autoRound),
              (t = !1),
              (e = o.suffixMap || s.suffixMap),
              (i = Q(r)),
              (n = this._overwriteProps);
            var p,
              _,
              v,
              y,
              x,
              b,
              w,
              S,
              P,
              C = r.style;
            if (
              (c &&
                "" === C.zIndex &&
                (("auto" !== (p = tt(r, "zIndex", i)) && "" !== p) ||
                  this._addLazySet(C, "zIndex", 0)),
              "string" == typeof o &&
                ((y = C.cssText),
                (p = rt(r, i)),
                (C.cssText = y + ";" + o),
                (p = nt(r, p, rt(r)).difs),
                !X && T.test(o) && (p.opacity = parseFloat(RegExp.$1)),
                (o = p),
                (C.cssText = y)),
              o.className
                ? (this._firstPT = _ =
                    a.className.parse(
                      r,
                      o.className,
                      "className",
                      this,
                      null,
                      null,
                      o
                    ))
                : (this._firstPT = _ = this.parse(r, o, null)),
              this._transformType)
            ) {
              for (
                P = 3 === this._transformType,
                  Ft
                    ? u &&
                      ((c = !0),
                      "" === C.zIndex &&
                        (("auto" !== (w = tt(r, "zIndex", i)) && "" !== w) ||
                          this._addLazySet(C, "zIndex", 0)),
                      f &&
                        this._addLazySet(
                          C,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (P ? "visible" : "hidden")
                        ))
                    : (C.zoom = 1),
                  v = _;
                v && v._next;

              )
                v = v._next;
              (S = new xt(r, "transform", 0, 0, null, 2)),
                this._linkCSSP(S, null, v),
                (S.setRatio = Ft ? Kt : Yt),
                (S.data = this._transform || Ht(r, i, !0)),
                (S.tween = l),
                (S.pr = -1),
                n.pop();
            }
            if (t) {
              for (; _; ) {
                for (b = _._next, v = y; v && v.pr > _.pr; ) v = v._next;
                (_._prev = v ? v._prev : x) ? (_._prev._next = _) : (y = _),
                  (_._next = v) ? (v._prev = _) : (x = _),
                  (_ = b);
              }
              this._firstPT = y;
            }
            return !0;
          }),
          (l.parse = function (t, r, n, s) {
            var o,
              l,
              c,
              u,
              d,
              f,
              p,
              _,
              v,
              y,
              x = t.style;
            for (o in r) {
              if (
                ((f = r[o]),
                (l = a[o]),
                "function" != typeof f || (l && l.allowFunc) || (f = f(m, g)),
                l)
              )
                n = l.parse(t, f, o, this, n, s, r);
              else {
                if ("--" === o.substr(0, 2)) {
                  this._tween._propLookup[o] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    Q(t).getPropertyValue(o) + "",
                    f + "",
                    o,
                    !1,
                    o
                  );
                  continue;
                }
                (d = tt(t, o, i) + ""),
                  (v = "string" == typeof f),
                  "color" === o ||
                  "fill" === o ||
                  "stroke" === o ||
                  -1 !== o.indexOf("Color") ||
                  (v && C.test(f))
                    ? (v ||
                        (f =
                          ((f = pt(f)).length > 3 ? "rgba(" : "rgb(") +
                          f.join(",") +
                          ")"),
                      (n = wt(x, o, d, f, !0, "transparent", n, 0, s)))
                    : v && I.test(f)
                    ? (n = wt(x, o, d, f, !0, null, n, 0, s))
                    : ((p =
                        (c = parseFloat(d)) || 0 === c
                          ? d.substr((c + "").length)
                          : ""),
                      ("" !== d && "auto" !== d) ||
                        ("width" === o || "height" === o
                          ? ((c = at(t, o, i)), (p = "px"))
                          : "left" === o || "top" === o
                          ? ((c = it(t, o, i)), (p = "px"))
                          : ((c = "opacity" !== o ? 0 : 1), (p = ""))),
                      (y = v && "=" === f.charAt(1))
                        ? ((u = parseInt(f.charAt(0) + "1", 10)),
                          (f = f.substr(2)),
                          (u *= parseFloat(f)),
                          (_ = f.replace(w, "")))
                        : ((u = parseFloat(f)),
                          (_ = v ? f.replace(w, "") : "")),
                      "" === _ && (_ = o in e ? e[o] : p),
                      (f = u || 0 === u ? (y ? u + c : u) + _ : r[o]),
                      p !== _ &&
                        (("" === _ && "lineHeight" !== o) ||
                          ((u || 0 === u) &&
                            c &&
                            ((c = et(t, o, c, p)),
                            "%" === _
                              ? ((c /= et(t, o, 100, "%") / 100),
                                !0 !== r.strictUnits && (d = c + "%"))
                              : "em" === _ ||
                                "rem" === _ ||
                                "vw" === _ ||
                                "vh" === _
                              ? (c /= et(t, o, 1, _))
                              : "px" !== _ &&
                                ((u = et(t, o, u, _)), (_ = "px")),
                            y && (u || 0 === u) && (f = u + c + _)))),
                      y && (u += c),
                      (!c && 0 !== c) || (!u && 0 !== u)
                        ? void 0 !== x[o] &&
                          (f || (f + "" != "NaN" && null != f))
                          ? ((n = new xt(
                              x,
                              o,
                              u || c || 0,
                              0,
                              n,
                              -1,
                              o,
                              !1,
                              0,
                              d,
                              f
                            )).xs0 =
                              "none" !== f ||
                              ("display" !== o && -1 === o.indexOf("Style"))
                                ? f
                                : d)
                          : Y("invalid " + o + " tween value: " + r[o])
                        : ((n = new xt(
                            x,
                            o,
                            c,
                            u - c,
                            n,
                            0,
                            o,
                            !1 !== h && ("px" === _ || "zIndex" === o),
                            0,
                            d,
                            f
                          )).xs0 = _));
              }
              s && n && !n.plugin && (n.plugin = s);
            }
            return n;
          }),
          (l.setRatio = function (t) {
            var e,
              i,
              r,
              n = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; n; ) {
                  if (
                    ((e = n.c * t + n.s),
                    n.r ? (e = n.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                    n.type)
                  )
                    if (1 === n.type)
                      if (2 === (r = n.l))
                        n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                      else if (3 === r)
                        n.t[n.p] =
                          n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                      else if (4 === r)
                        n.t[n.p] =
                          n.xs0 +
                          e +
                          n.xs1 +
                          n.xn1 +
                          n.xs2 +
                          n.xn2 +
                          n.xs3 +
                          n.xn3 +
                          n.xs4;
                      else if (5 === r)
                        n.t[n.p] =
                          n.xs0 +
                          e +
                          n.xs1 +
                          n.xn1 +
                          n.xs2 +
                          n.xn2 +
                          n.xs3 +
                          n.xn3 +
                          n.xs4 +
                          n.xn4 +
                          n.xs5;
                      else {
                        for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++)
                          i += n["xn" + r] + n["xs" + (r + 1)];
                        n.t[n.p] = i;
                      }
                    else
                      -1 === n.type
                        ? (n.t[n.p] = n.xs0)
                        : n.setRatio && n.setRatio(t);
                  else n.t[n.p] = e + n.xs0;
                  n = n._next;
                }
              else
                for (; n; )
                  2 !== n.type ? (n.t[n.p] = n.b) : n.setRatio(t),
                    (n = n._next);
            else
              for (; n; ) {
                if (2 !== n.type)
                  if (n.r && -1 !== n.type)
                    if (((e = n.r(n.s + n.c)), n.type)) {
                      if (1 === n.type) {
                        for (
                          r = n.l, i = n.xs0 + e + n.xs1, r = 1;
                          r < n.l;
                          r++
                        )
                          i += n["xn" + r] + n["xs" + (r + 1)];
                        n.t[n.p] = i;
                      }
                    } else n.t[n.p] = e + n.xs0;
                  else n.t[n.p] = n.e;
                else n.setRatio(t);
                n = n._next;
              }
          }),
          (l._enableTransforms = function (t) {
            (this._transform = this._transform || Ht(this._target, i, !0)),
              (this._transformType =
                (this._transform.svg && kt) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var te = function (t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (l._addLazySet = function (t, e, i) {
          var r = (this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2));
          (r.e = i), (r.setRatio = te), (r.data = this);
        }),
          (l._linkCSSP = function (t, e, i, r) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (r = !0)),
                i
                  ? (i._next = t)
                  : r || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (l._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (l._kill = function (t) {
            var e,
              i,
              n,
              s = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((s = {}), t)) s[i] = t[i];
              (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((n = e.xfirst) && n._prev
                  ? this._linkCSSP(n._prev, e._next, n._prev._prev)
                  : n === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, n._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return r.d.prototype._kill.call(this, s);
          });
        var ee = function (t, e, i) {
          var r, n, s, o;
          if (t.slice) for (n = t.length; --n > -1; ) ee(t[n], e, i);
          else
            for (n = (r = t.childNodes).length; --n > -1; )
              (o = (s = r[n]).type),
                s.style && (e.push(rt(s)), i && i.push(s)),
                (1 !== o && 9 !== o && 11 !== o) ||
                  !s.childNodes.length ||
                  ee(s, e, i);
        };
        return (
          (s.cascadeTo = function (t, e, i) {
            var n,
              s,
              o,
              a,
              l = r.f.to(t, e, i),
              h = [l],
              c = [],
              u = [],
              d = [],
              f = r.f._internals.reservedProps;
            for (
              t = l._targets || l.target,
                ee(t, c, d),
                l.render(e, !0, !0),
                ee(t, u),
                l.render(0, !0, !0),
                l._enabled(!0),
                n = d.length;
              --n > -1;

            )
              if ((s = nt(d[n], c[n], u[n])).firstMPT) {
                for (o in ((s = s.difs), i)) f[o] && (s[o] = i[o]);
                for (o in ((a = {}), s)) a[o] = c[n][o];
                h.push(r.f.fromTo(d[n], e, a, s));
              }
            return h;
          }),
          r.d.activate([s]),
          s
        );
      },
      !0
    );
    var s = r.g.CSSPlugin,
      o = r.e._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (t, e, i, r) {
          var n, s;
          if ("function" != typeof t.setAttribute) return !1;
          for (n in e)
            "function" == typeof (s = e[n]) && (s = s(r, t)),
              this._addTween(
                t,
                "setAttribute",
                t.getAttribute(n) + "",
                s + "",
                n,
                !1,
                n
              ),
              this._overwriteProps.push(n);
          return !0;
        },
      }),
      a = r.e._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function (t, e, i) {
          return (this._tween = i), !0;
        },
      }),
      l = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (i) {
          return ((Math.round(i / t) * t * e) | 0) / e;
        };
      },
      h = function (t, e) {
        for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
      },
      c = a.prototype;
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ (c._onInitAllProps = function () {
      var t,
        e,
        i,
        r,
        n = this._tween,
        s = n.vars.roundProps,
        o = {},
        a = n._propLookup.roundProps;
      if ("object" != typeof s || s.push)
        for (
          "string" == typeof s && (s = s.split(",")), i = s.length;
          --i > -1;

        )
          o[s[i]] = Math.round;
      else for (r in s) o[r] = l(s[r]);
      for (r in o)
        for (t = n._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(o)
              : t.n === r &&
                (2 === t.f && t.t
                  ? h(t.t._firstPT, o[r])
                  : (this._add(t.t, r, t.s, t.c, o[r]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : n._firstPT === t && (n._firstPT = e),
                    (t._next = t._prev = null),
                    (n._propLookup[r] = a))),
            (t = e);
      return !1;
    }),
      (c._add = function (t, e, i, r, n) {
        this._addTween(t, e, i, i + r, e, n || Math.round),
          this._overwriteProps.push(e);
      });
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var u = r.e._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, r) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var n,
          s,
          o,
          a,
          l,
          h,
          c = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (n in e)
          "useRadians" !== n &&
            ("function" == typeof (a = e[n]) && (a = a(r, t)),
            (s = (h = (a + "").split("_"))[0]),
            (o = parseFloat(
              "function" != typeof t[n]
                ? t[n]
                : t[
                    n.indexOf("set") ||
                    "function" != typeof t["get" + n.substr(3)]
                      ? n
                      : "get" + n.substr(3)
                  ]()
            )),
            (l =
              (a = this.finals[n] =
                "string" == typeof s && "=" === s.charAt(1)
                  ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                  : Number(s) || 0) - o),
            h.length &&
              (-1 !== (s = h.join("_")).indexOf("short") &&
                (l %= c) !== l % (c / 2) &&
                (l = l < 0 ? l + c : l - c),
              -1 !== s.indexOf("_cw") && l < 0
                ? (l = ((l + 9999999999 * c) % c) - ((l / c) | 0) * c)
                : -1 !== s.indexOf("ccw") &&
                  l > 0 &&
                  (l = ((l - 9999999999 * c) % c) - ((l / c) | 0) * c)),
            (l > 1e-6 || l < -1e-6) &&
              (this._addTween(t, n, o, o + l, n),
              this._overwriteProps.push(n)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    });
    (u._autoCSS = !0),
      /*!
       * VERSION: 2.1.3
       * DATE: 2019-05-17
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      r.e._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function () {
          var t = function (t) {
              r.c.call(this, t);
              var e,
                i,
                n = this.vars;
              for (i in ((this._labels = {}),
              (this.autoRemoveChildren = !!n.autoRemoveChildren),
              (this.smoothChildTiming = !!n.smoothChildTiming),
              (this._sortChildren = !0),
              (this._onUpdate = n.onUpdate),
              n))
                (e = n[i]),
                  s(e) &&
                    -1 !== e.join("").indexOf("{self}") &&
                    (n[i] = this._swapSelfInParams(e));
              s(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
            },
            e = r.f._internals,
            i = (t._internals = {}),
            n = e.isSelector,
            s = e.isArray,
            o = e.lazyTweens,
            a = e.lazyRender,
            l = r.e._gsDefine.globals,
            h = function (t) {
              var e,
                i = {};
              for (e in t) i[e] = t[e];
              return i;
            },
            c = function (t, e, i) {
              var r,
                n,
                s = t.cycle;
              for (r in s)
                (n = s[r]),
                  (t[r] =
                    "function" == typeof n ? n(i, e[i], e) : n[i % n.length]);
              delete t.cycle;
            },
            u = (i.pauseCallback = function () {}),
            d = function (t, e, i, r) {
              var n = "immediateRender";
              return n in e || (e[n] = !((i && !1 === i[n]) || r)), e;
            },
            f = function (t) {
              if ("function" == typeof t) return t;
              var e = "object" == typeof t ? t : { each: t },
                i = e.ease,
                r = e.from || 0,
                n = e.base || 0,
                s = {},
                o = isNaN(r),
                a = e.axis,
                l = { center: 0.5, end: 1 }[r] || 0;
              return function (t, h, c) {
                var u,
                  d,
                  f,
                  p,
                  g,
                  m,
                  _,
                  v,
                  y,
                  x = (c || e).length,
                  b = s[x];
                if (!b) {
                  if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                    for (
                      _ = -1 / 0;
                      _ < (_ = c[y++].getBoundingClientRect().left) && y < x;

                    );
                    y--;
                  }
                  for (
                    b = s[x] = [],
                      u = o ? Math.min(y, x) * l - 0.5 : r % y,
                      d = o ? (x * l) / y - 0.5 : (r / y) | 0,
                      _ = 0,
                      v = 1 / 0,
                      m = 0;
                    m < x;
                    m++
                  )
                    (f = (m % y) - u),
                      (p = d - ((m / y) | 0)),
                      (b[m] = g =
                        a
                          ? Math.abs("y" === a ? p : f)
                          : Math.sqrt(f * f + p * p)),
                      g > _ && (_ = g),
                      g < v && (v = g);
                  (b.max = _ - v),
                    (b.min = v),
                    (b.v = x =
                      e.amount ||
                      e.each *
                        (y > x
                          ? x - 1
                          : a
                          ? "y" === a
                            ? x / y
                            : y
                          : Math.max(y, x / y)) ||
                      0),
                    (b.b = x < 0 ? n - x : n);
                }
                return (
                  (x = (b[t] - b.min) / b.max),
                  b.b + (i ? i.getRatio(x) : x) * b.v
                );
              };
            },
            p = (t.prototype = new r.c());
          return (
            (t.version = "2.1.3"),
            (t.distribute = f),
            (p.constructor = t),
            (p.kill()._gc = p._forcingPlayhead = p._hasPause = !1),
            (p.to = function (t, e, i, n) {
              var s = (i.repeat && l.TweenMax) || r.f;
              return e ? this.add(new s(t, e, i), n) : this.set(t, i, n);
            }),
            (p.from = function (t, e, i, n) {
              return this.add(
                ((i.repeat && l.TweenMax) || r.f).from(t, e, d(0, i)),
                n
              );
            }),
            (p.fromTo = function (t, e, i, n, s) {
              var o = (n.repeat && l.TweenMax) || r.f;
              return (
                (n = d(0, n, i)),
                e ? this.add(o.fromTo(t, e, i, n), s) : this.set(t, n, s)
              );
            }),
            (p.staggerTo = function (e, i, s, o, a, l, u, d) {
              var p,
                g,
                m = new t({
                  onComplete: l,
                  onCompleteParams: u,
                  callbackScope: d,
                  smoothChildTiming: this.smoothChildTiming,
                }),
                _ = f(s.stagger || o),
                v = s.startAt,
                y = s.cycle;
              for (
                "string" == typeof e && (e = r.f.selector(e) || e),
                  n((e = e || [])) &&
                    (e = (function (t) {
                      var e,
                        i = [],
                        r = t.length;
                      for (e = 0; e !== r; i.push(t[e++]));
                      return i;
                    })(e)),
                  g = 0;
                g < e.length;
                g++
              )
                (p = h(s)),
                  v && ((p.startAt = h(v)), v.cycle && c(p.startAt, e, g)),
                  y &&
                    (c(p, e, g),
                    null != p.duration &&
                      ((i = p.duration), delete p.duration)),
                  m.to(e[g], i, p, _(g, e[g], e));
              return this.add(m, a);
            }),
            (p.staggerFrom = function (t, e, i, r, n, s, o, a) {
              return (
                (i.runBackwards = !0),
                this.staggerTo(t, e, d(0, i), r, n, s, o, a)
              );
            }),
            (p.staggerFromTo = function (t, e, i, r, n, s, o, a, l) {
              return (
                (r.startAt = i), this.staggerTo(t, e, d(0, r, i), n, s, o, a, l)
              );
            }),
            (p.call = function (t, e, i, n) {
              return this.add(r.f.delayedCall(0, t, e, i), n);
            }),
            (p.set = function (t, e, i) {
              return this.add(new r.f(t, 0, d(0, e, null, !0)), i);
            }),
            (t.exportRoot = function (e, i) {
              null == (e = e || {}).smoothChildTiming &&
                (e.smoothChildTiming = !0);
              var n,
                s,
                o,
                a,
                l = new t(e),
                h = l._timeline;
              for (
                null == i && (i = !0),
                  h._remove(l, !0),
                  l._startTime = 0,
                  l._rawPrevTime = l._time = l._totalTime = h._time,
                  o = h._first;
                o;

              )
                (a = o._next),
                  (i && o instanceof r.f && o.target === o.vars.onComplete) ||
                    ((s = o._startTime - o._delay) < 0 && (n = 1), l.add(o, s)),
                  (o = a);
              return h.add(l, 0), n && l.totalDuration(), l;
            }),
            (p.add = function (e, i, n, o) {
              var a, l, h, c, u, d;
              if (
                ("number" != typeof i &&
                  (i = this._parseTimeOrLabel(i, 0, !0, e)),
                !(e instanceof r.a))
              ) {
                if (e instanceof Array || (e && e.push && s(e))) {
                  for (
                    n = n || "normal", o = o || 0, a = i, l = e.length, h = 0;
                    h < l;
                    h++
                  )
                    s((c = e[h])) && (c = new t({ tweens: c })),
                      this.add(c, a),
                      "string" != typeof c &&
                        "function" != typeof c &&
                        ("sequence" === n
                          ? (a =
                              c._startTime + c.totalDuration() / c._timeScale)
                          : "start" === n && (c._startTime -= c.delay())),
                      (a += o);
                  return this._uncache(!0);
                }
                if ("string" == typeof e) return this.addLabel(e, i);
                if ("function" != typeof e)
                  throw (
                    "Cannot add " +
                    e +
                    " into the timeline; it is not a tween, timeline, function, or string."
                  );
                e = r.f.delayedCall(0, e);
              }
              if (
                (r.c.prototype.add.call(this, e, i),
                (e._time || (!e._duration && e._initted)) &&
                  ((a = (this.rawTime() - e._startTime) * e._timeScale),
                  (!e._duration ||
                    Math.abs(Math.max(0, Math.min(e.totalDuration(), a))) -
                      e._totalTime >
                      1e-5) &&
                    e.render(a, !1, !1)),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (d = (u = this).rawTime() > e._startTime; u._timeline; )
                  d && u._timeline.smoothChildTiming
                    ? u.totalTime(u._totalTime, !0)
                    : u._gc && u._enabled(!0, !1),
                    (u = u._timeline);
              return this;
            }),
            (p.remove = function (t) {
              if (t instanceof r.a) {
                this._remove(t, !1);
                var e = (t._timeline = t.vars.useFrames
                  ? r.a._rootFramesTimeline
                  : r.a._rootTimeline);
                return (
                  (t._startTime =
                    (t._paused ? t._pauseTime : e._time) -
                    (t._reversed
                      ? t.totalDuration() - t._totalTime
                      : t._totalTime) /
                      t._timeScale),
                  this
                );
              }
              if (t instanceof Array || (t && t.push && s(t))) {
                for (var i = t.length; --i > -1; ) this.remove(t[i]);
                return this;
              }
              return "string" == typeof t
                ? this.removeLabel(t)
                : this.kill(null, t);
            }),
            (p._remove = function (t, e) {
              return (
                r.c.prototype._remove.call(this, t, e),
                this._last
                  ? this._time > this.duration() &&
                    ((this._time = this._duration),
                    (this._totalTime = this._totalDuration))
                  : (this._time =
                      this._totalTime =
                      this._duration =
                      this._totalDuration =
                        0),
                this
              );
            }),
            (p.append = function (t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
            }),
            (p.insert = p.insertMultiple =
              function (t, e, i, r) {
                return this.add(t, e || 0, i, r);
              }),
            (p.appendMultiple = function (t, e, i, r) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r);
            }),
            (p.addLabel = function (t, e) {
              return (this._labels[t] = this._parseTimeOrLabel(e)), this;
            }),
            (p.addPause = function (t, e, i, n) {
              var s = r.f.delayedCall(0, u, i, n || this);
              return (
                (s.vars.onComplete = s.vars.onReverseComplete = e),
                (s.data = "isPause"),
                (this._hasPause = !0),
                this.add(s, t)
              );
            }),
            (p.removeLabel = function (t) {
              return delete this._labels[t], this;
            }),
            (p.getLabelTime = function (t) {
              return null != this._labels[t] ? this._labels[t] : -1;
            }),
            (p._parseTimeOrLabel = function (t, e, i, n) {
              var o, a;
              if (n instanceof r.a && n.timeline === this) this.remove(n);
              else if (n && (n instanceof Array || (n.push && s(n))))
                for (a = n.length; --a > -1; )
                  n[a] instanceof r.a &&
                    n[a].timeline === this &&
                    this.remove(n[a]);
              if (
                ((o =
                  "number" != typeof t || e
                    ? this.duration() > 99999999999
                      ? this.recent().endTime(!1)
                      : this._duration
                    : 0),
                "string" == typeof e)
              )
                return this._parseTimeOrLabel(
                  e,
                  i && "number" == typeof t && null == this._labels[e]
                    ? t - o
                    : 0,
                  i
                );
              if (
                ((e = e || 0),
                "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
              )
                null == t && (t = o);
              else {
                if (-1 === (a = t.indexOf("=")))
                  return null == this._labels[t]
                    ? i
                      ? (this._labels[t] = o + e)
                      : e
                    : this._labels[t] + e;
                (e =
                  parseInt(t.charAt(a - 1) + "1", 10) *
                  Number(t.substr(a + 1))),
                  (t =
                    a > 1
                      ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, i)
                      : o);
              }
              return Number(t) + e;
            }),
            (p.seek = function (t, e) {
              return this.totalTime(
                "number" == typeof t ? t : this._parseTimeOrLabel(t),
                !1 !== e
              );
            }),
            (p.stop = function () {
              return this.paused(!0);
            }),
            (p.gotoAndPlay = function (t, e) {
              return this.play(t, e);
            }),
            (p.gotoAndStop = function (t, e) {
              return this.pause(t, e);
            }),
            (p.render = function (t, e, i) {
              this._gc && this._enabled(!0, !1);
              var r,
                n,
                s,
                l,
                h,
                c,
                u,
                d,
                f = this._time,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._startTime,
                m = this._timeScale,
                _ = this._paused;
              if (
                (f !== this._time && (t += this._time - f),
                this._hasPause && !this._forcingPlayhead && !e)
              ) {
                if (t > f)
                  for (r = this._first; r && r._startTime <= t && !c; )
                    r._duration ||
                      "isPause" !== r.data ||
                      r.ratio ||
                      (0 === r._startTime && 0 === this._rawPrevTime) ||
                      (c = r),
                      (r = r._next);
                else
                  for (r = this._last; r && r._startTime >= t && !c; )
                    r._duration ||
                      ("isPause" === r.data && r._rawPrevTime > 0 && (c = r)),
                      (r = r._prev);
                c &&
                  ((this._time = this._totalTime = t = c._startTime),
                  (d =
                    this._startTime +
                    (this._reversed ? this._duration - t : t) /
                      this._timeScale));
              }
              if (t >= p - 1e-8 && t >= 0)
                (this._totalTime = this._time = p),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((n = !0),
                    (l = "onComplete"),
                    (h = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      ((t <= 0 && t >= -1e-8) ||
                        this._rawPrevTime < 0 ||
                        1e-8 === this._rawPrevTime) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((h = !0),
                      this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : 1e-8),
                  (t = p + 1e-4);
              else if (t < 1e-8)
                if (
                  ((this._totalTime = this._time = 0),
                  t > -1e-8 && (t = 0),
                  (0 !== f ||
                    (0 === this._duration &&
                      1e-8 !== this._rawPrevTime &&
                      (this._rawPrevTime > 0 ||
                        (t < 0 && this._rawPrevTime >= 0)))) &&
                    ((l = "onReverseComplete"), (n = this._reversed)),
                  t < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((h = n = !0), (l = "onReverseComplete"))
                      : this._rawPrevTime >= 0 && this._first && (h = !0),
                    (this._rawPrevTime = t);
                else {
                  if (
                    ((this._rawPrevTime =
                      this._duration || !e || t || this._rawPrevTime === t
                        ? t
                        : 1e-8),
                    0 === t && n)
                  )
                    for (r = this._first; r && 0 === r._startTime; )
                      r._duration || (n = !1), (r = r._next);
                  (t = 0), this._initted || (h = !0);
                }
              else this._totalTime = this._time = this._rawPrevTime = t;
              if ((this._time !== f && this._first) || i || h || c) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== f &&
                      t > 0 &&
                      (this._active = !0)),
                  0 === f &&
                    this.vars.onStart &&
                    ((0 === this._time && this._duration) ||
                      e ||
                      this._callback("onStart")),
                  (u = this._time) >= f)
                )
                  for (
                    r = this._first;
                    r &&
                    ((s = r._next), u === this._time && (!this._paused || _));

                  )
                    (r._active ||
                      (r._startTime <= u && !r._paused && !r._gc)) &&
                      (c === r && (this.pause(), (this._pauseTime = d)),
                      r._reversed
                        ? r.render(
                            (r._dirty ? r.totalDuration() : r._totalDuration) -
                              (t - r._startTime) * r._timeScale,
                            e,
                            i
                          )
                        : r.render((t - r._startTime) * r._timeScale, e, i)),
                      (r = s);
                else
                  for (
                    r = this._last;
                    r &&
                    ((s = r._prev), u === this._time && (!this._paused || _));

                  ) {
                    if (
                      r._active ||
                      (r._startTime <= f && !r._paused && !r._gc)
                    ) {
                      if (c === r) {
                        for (c = r._prev; c && c.endTime() > this._time; )
                          c.render(
                            c._reversed
                              ? c.totalDuration() -
                                  (t - c._startTime) * c._timeScale
                              : (t - c._startTime) * c._timeScale,
                            e,
                            i
                          ),
                            (c = c._prev);
                        (c = null), this.pause(), (this._pauseTime = d);
                      }
                      r._reversed
                        ? r.render(
                            (r._dirty ? r.totalDuration() : r._totalDuration) -
                              (t - r._startTime) * r._timeScale,
                            e,
                            i
                          )
                        : r.render((t - r._startTime) * r._timeScale, e, i);
                    }
                    r = s;
                  }
                this._onUpdate &&
                  (e || (o.length && a(), this._callback("onUpdate"))),
                  l &&
                    (this._gc ||
                      (g !== this._startTime && m === this._timeScale) ||
                      ((0 === this._time || p >= this.totalDuration()) &&
                        (n &&
                          (o.length && a(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !e && this.vars[l] && this._callback(l))));
              }
            }),
            (p._hasPausedChild = function () {
              for (var e = this._first; e; ) {
                if (e._paused || (e instanceof t && e._hasPausedChild()))
                  return !0;
                e = e._next;
              }
              return !1;
            }),
            (p.getChildren = function (t, e, i, n) {
              n = n || -9999999999;
              for (var s = [], o = this._first, a = 0; o; )
                o._startTime < n ||
                  (o instanceof r.f
                    ? !1 !== e && (s[a++] = o)
                    : (!1 !== i && (s[a++] = o),
                      !1 !== t &&
                        (a = (s = s.concat(o.getChildren(!0, e, i))).length))),
                  (o = o._next);
              return s;
            }),
            (p.getTweensOf = function (t, e) {
              var i,
                n,
                s = this._gc,
                o = [],
                a = 0;
              for (
                s && this._enabled(!0, !0), n = (i = r.f.getTweensOf(t)).length;
                --n > -1;

              )
                (i[n].timeline === this || (e && this._contains(i[n]))) &&
                  (o[a++] = i[n]);
              return s && this._enabled(!1, !0), o;
            }),
            (p.recent = function () {
              return this._recent;
            }),
            (p._contains = function (t) {
              for (var e = t.timeline; e; ) {
                if (e === this) return !0;
                e = e.timeline;
              }
              return !1;
            }),
            (p.shiftChildren = function (t, e, i) {
              i = i || 0;
              for (var r, n = this._first, s = this._labels; n; )
                n._startTime >= i && (n._startTime += t), (n = n._next);
              if (e) for (r in s) s[r] >= i && (s[r] += t);
              return this._uncache(!0);
            }),
            (p._kill = function (t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (
                var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                  r = i.length,
                  n = !1;
                --r > -1;

              )
                i[r]._kill(t, e) && (n = !0);
              return n;
            }),
            (p.clear = function (t) {
              var e = this.getChildren(!1, !0, !0),
                i = e.length;
              for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0);
            }),
            (p.invalidate = function () {
              for (var t = this._first; t; ) t.invalidate(), (t = t._next);
              return r.a.prototype.invalidate.call(this);
            }),
            (p._enabled = function (t, e) {
              if (t === this._gc)
                for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
              return r.c.prototype._enabled.call(this, t, e);
            }),
            (p.totalTime = function (t, e, i) {
              this._forcingPlayhead = !0;
              var n = r.a.prototype.totalTime.apply(this, arguments);
              return (this._forcingPlayhead = !1), n;
            }),
            (p.duration = function (t) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== t &&
                    this.timeScale(this._duration / t),
                  this)
                : (this._dirty && this.totalDuration(), this._duration);
            }),
            (p.totalDuration = function (t) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (
                    var e, i, r = 0, n = this, s = n._last, o = 999999999999;
                    s;

                  )
                    (e = s._prev),
                      s._dirty && s.totalDuration(),
                      s._startTime > o &&
                      n._sortChildren &&
                      !s._paused &&
                      !n._calculatingDuration
                        ? ((n._calculatingDuration = 1),
                          n.add(s, s._startTime - s._delay),
                          (n._calculatingDuration = 0))
                        : (o = s._startTime),
                      s._startTime < 0 &&
                        !s._paused &&
                        ((r -= s._startTime),
                        n._timeline.smoothChildTiming &&
                          ((n._startTime += s._startTime / n._timeScale),
                          (n._time -= s._startTime),
                          (n._totalTime -= s._startTime),
                          (n._rawPrevTime -= s._startTime)),
                        n.shiftChildren(-s._startTime, !1, -9999999999),
                        (o = 0)),
                      (i = s._startTime + s._totalDuration / s._timeScale) >
                        r && (r = i),
                      (s = e);
                  (n._duration = n._totalDuration = r), (n._dirty = !1);
                }
                return this._totalDuration;
              }
              return t && this.totalDuration()
                ? this.timeScale(this._totalDuration / t)
                : this;
            }),
            (p.paused = function (t) {
              if (!1 === t && this._paused)
                for (var e = this._first; e; )
                  e._startTime === this._time &&
                    "isPause" === e.data &&
                    (e._rawPrevTime = 0),
                    (e = e._next);
              return r.a.prototype.paused.apply(this, arguments);
            }),
            (p.usesFrames = function () {
              for (var t = this._timeline; t._timeline; ) t = t._timeline;
              return t === r.a._rootFramesTimeline;
            }),
            (p.rawTime = function (t) {
              return t &&
                (this._paused ||
                  (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                ? this._totalTime % (this._duration + this._repeatDelay)
                : this._paused
                ? this._totalTime
                : (this._timeline.rawTime(t) - this._startTime) *
                  this._timeScale;
            }),
            t
          );
        },
        !0
      );
    var d = r.g.TimelineLite;
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ r.e._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function () {
        var t = function (t) {
            d.call(this, t),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !!this.vars.yoyo),
              (this._dirty = !0);
          },
          e = r.f._internals,
          i = e.lazyTweens,
          n = e.lazyRender,
          s = r.e._gsDefine.globals,
          o = new r.b(null, null, 1, 0),
          a = (t.prototype = new d());
        return (
          (a.constructor = t),
          (a.kill()._gc = !1),
          (t.version = "2.1.3"),
          (a.invalidate = function () {
            return (
              (this._yoyo = !!this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              d.prototype.invalidate.call(this)
            );
          }),
          (a.addCallback = function (t, e, i, n) {
            return this.add(r.f.delayedCall(0, t, i, n), e);
          }),
          (a.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    r = i.length,
                    n = this._parseTimeOrLabel(e);
                  --r > -1;

                )
                  i[r]._startTime === n && i[r]._enabled(!1, !1);
            return this;
          }),
          (a.removePause = function (t) {
            return this.removeCallback(d._internals.pauseCallback, t);
          }),
          (a.tweenTo = function (t, e) {
            e = e || {};
            var i,
              n,
              a,
              l = {
                ease: o,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              h = (e.repeat && s.TweenMax) || r.f;
            for (n in e) l[n] = e[n];
            return (
              (l.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(l.time) - this._time) / this._timeScale ||
                0.001),
              (a = new h(this, i, l)),
              (l.onStart = function () {
                a.target.paused(!0),
                  a.vars.time === a.target.time() ||
                    i !== a.duration() ||
                    a.isFromTo ||
                    a
                      .duration(
                        Math.abs(a.vars.time - a.target.time()) /
                          a.target._timeScale
                      )
                      .render(a.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || a,
                      e.onStartParams || []
                    );
              }),
              a
            );
          }),
          (a.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var r = this.tweenTo(e, i);
            return (
              (r.isFromTo = 1),
              r.duration(Math.abs(r.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (a.render = function (t, e, r) {
            this._gc && this._enabled(!0, !1);
            var s,
              o,
              a,
              l,
              h,
              c,
              u,
              d,
              f,
              p = this._time,
              g = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._duration,
              _ = this._totalTime,
              v = this._startTime,
              y = this._timeScale,
              x = this._rawPrevTime,
              b = this._paused,
              w = this._cycle;
            if (
              (p !== this._time && (t += this._time - p),
              t >= g - 1e-8 && t >= 0)
            )
              this._locked ||
                ((this._totalTime = g), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (l = "onComplete"),
                  (h = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-8) || x < 0 || 1e-8 === x) &&
                    x !== t &&
                    this._first &&
                    ((h = !0), x > 1e-8 && (l = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-8),
                this._yoyo && 1 & this._cycle
                  ? (this._time = t = 0)
                  : ((this._time = m), (t = m + 1e-4));
            else if (t < 1e-8)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                t > -1e-8 && (t = 0),
                (0 !== p ||
                  (0 === m &&
                    1e-8 !== x &&
                    (x > 0 || (t < 0 && x >= 0)) &&
                    !this._locked)) &&
                  ((l = "onReverseComplete"), (o = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((h = o = !0), (l = "onReverseComplete"))
                    : x >= 0 && this._first && (h = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    m || !e || t || this._rawPrevTime === t ? t : 1e-8),
                  0 === t && o)
                )
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (o = !1), (s = s._next);
                (t = 0), this._initted || (h = !0);
              }
            else
              0 === m && x < 0 && (h = !0),
                (this._time = this._rawPrevTime = t),
                this._locked ||
                  ((this._totalTime = t),
                  0 !== this._repeat &&
                    ((c = m + this._repeatDelay),
                    (this._cycle = (this._totalTime / c) >> 0),
                    this._cycle &&
                      this._cycle === this._totalTime / c &&
                      _ <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * c),
                    this._yoyo &&
                      1 & this._cycle &&
                      (this._time = m - this._time),
                    this._time > m
                      ? ((this._time = m), (t = m + 1e-4))
                      : this._time < 0
                      ? (this._time = t = 0)
                      : (t = this._time)));
            if (this._hasPause && !this._forcingPlayhead && !e) {
              if ((t = this._time) > p || (this._repeat && w !== this._cycle))
                for (s = this._first; s && s._startTime <= t && !u; )
                  s._duration ||
                    "isPause" !== s.data ||
                    s.ratio ||
                    (0 === s._startTime && 0 === this._rawPrevTime) ||
                    (u = s),
                    (s = s._next);
              else
                for (s = this._last; s && s._startTime >= t && !u; )
                  s._duration ||
                    ("isPause" === s.data && s._rawPrevTime > 0 && (u = s)),
                    (s = s._prev);
              u &&
                ((f =
                  this._startTime +
                  (this._reversed
                    ? this._duration - u._startTime
                    : u._startTime) /
                    this._timeScale),
                u._startTime < m &&
                  ((this._time = this._rawPrevTime = t = u._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay))));
            }
            if (this._cycle !== w && !this._locked) {
              var S = this._yoyo && 0 != (1 & w),
                T = S === (this._yoyo && 0 != (1 & this._cycle)),
                P = this._totalTime,
                C = this._cycle,
                k = this._rawPrevTime,
                A = this._time;
              if (
                ((this._totalTime = w * m),
                this._cycle < w ? (S = !S) : (this._totalTime += m),
                (this._time = p),
                (this._rawPrevTime = 0 === m ? x - 1e-4 : x),
                (this._cycle = w),
                (this._locked = !0),
                (p = S ? 0 : m),
                this.render(p, e, 0 === m),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = C),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                p !== this._time)
              )
                return;
              if (
                (T &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (p = S ? m + 1e-4 : -1e-4),
                  this.render(p, !0, !1)),
                (this._locked = !1),
                this._paused && !b)
              )
                return;
              (this._time = A),
                (this._totalTime = P),
                (this._cycle = C),
                (this._rawPrevTime = k);
            }
            if ((this._time !== p && this._first) || r || h || u) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== _ &&
                    t > 0 &&
                    (this._active = !0)),
                0 === _ &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                (d = this._time) >= p)
              )
                for (
                  s = this._first;
                  s &&
                  ((a = s._next), d === this._time && (!this._paused || b));

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (u === s && (this.pause(), (this._pauseTime = f)),
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          r
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, r)),
                    (s = a);
              else
                for (
                  s = this._last;
                  s &&
                  ((a = s._prev), d === this._time && (!this._paused || b));

                ) {
                  if (
                    s._active ||
                    (s._startTime <= p && !s._paused && !s._gc)
                  ) {
                    if (u === s) {
                      for (u = s._prev; u && u.endTime() > this._time; )
                        u.render(
                          u._reversed
                            ? u.totalDuration() -
                                (t - u._startTime) * u._timeScale
                            : (t - u._startTime) * u._timeScale,
                          e,
                          r
                        ),
                          (u = u._prev);
                      (u = null), this.pause(), (this._pauseTime = f);
                    }
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          r
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, r);
                  }
                  s = a;
                }
              this._onUpdate &&
                (e || (i.length && n(), this._callback("onUpdate"))),
                l &&
                  (this._locked ||
                    this._gc ||
                    (v !== this._startTime && y === this._timeScale) ||
                    ((0 === this._time || g >= this.totalDuration()) &&
                      (o &&
                        (i.length && n(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))));
            } else
              _ !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (a.getActive = function (t, e, i) {
            var r,
              n,
              s = [],
              o = this.getChildren(t || null == t, e || null == t, !!i),
              a = 0,
              l = o.length;
            for (r = 0; r < l; r++) (n = o[r]).isActive() && (s[a++] = n);
            return s;
          }),
          (a.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              r = i.length;
            for (e = 0; e < r; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (a.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (a.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (a.invalidate = function () {
            return (this._locked = !1), d.prototype.invalidate.call(this);
          }),
          (a.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (a.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (a.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (d.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (a.time = function (t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
              r = this._cycle,
              n = r * (i + this._repeatDelay);
            return (
              t > i && (t = i),
              this.totalTime(
                this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t,
                e
              )
            );
          }),
          (a.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (a.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (a.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (a.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          t
        );
      },
      !0
    );
    var f = r.g.TimelineMax,
      p = 180 / Math.PI,
      g = [],
      m = [],
      _ = [],
      v = {},
      y = r.e._gsDefine.globals,
      x = function (t, e, i, r) {
        i === r && (i = r - (r - e) / 1e6),
          t === e && (e = t + (i - t) / 1e6),
          (this.a = t),
          (this.b = e),
          (this.c = i),
          (this.d = r),
          (this.da = r - t),
          (this.ca = i - t),
          (this.ba = e - t);
      },
      b = function (t, e, i, r) {
        var n = { a: t },
          s = {},
          o = {},
          a = { c: r },
          l = (t + e) / 2,
          h = (e + i) / 2,
          c = (i + r) / 2,
          u = (l + h) / 2,
          d = (h + c) / 2,
          f = (d - u) / 8;
        return (
          (n.b = l + (t - l) / 4),
          (s.b = u + f),
          (n.c = s.a = (n.b + s.b) / 2),
          (s.c = o.a = (u + d) / 2),
          (o.b = d - f),
          (a.b = c + (r - c) / 4),
          (o.c = a.a = (o.b + a.b) / 2),
          [n, s, o, a]
        );
      },
      w = function (t, e, i, r, n) {
        var s,
          o,
          a,
          l,
          h,
          c,
          u,
          d,
          f,
          p,
          v,
          y,
          x,
          w = t.length - 1,
          S = 0,
          T = t[0].a;
        for (s = 0; s < w; s++)
          (o = (h = t[S]).a),
            (a = h.d),
            (l = t[S + 1].d),
            n
              ? ((v = g[s]),
                (x = (((y = m[s]) + v) * e * 0.25) / (r ? 0.5 : _[s] || 0.5)),
                (d =
                  a -
                  ((c = a - (a - o) * (r ? 0.5 * e : 0 !== v ? x / v : 0)) +
                    ((((u = a + (l - a) * (r ? 0.5 * e : 0 !== y ? x / y : 0)) -
                      c) *
                      ((3 * v) / (v + y) + 0.5)) /
                      4 || 0))))
              : (d =
                  a -
                  ((c = a - (a - o) * e * 0.5) + (u = a + (l - a) * e * 0.5)) /
                    2),
            (c += d),
            (u += d),
            (h.c = f = c),
            (h.b = 0 !== s ? T : (T = h.a + 0.6 * (h.c - h.a))),
            (h.da = a - o),
            (h.ca = f - o),
            (h.ba = T - o),
            i
              ? ((p = b(o, T, f, a)),
                t.splice(S, 1, p[0], p[1], p[2], p[3]),
                (S += 4))
              : S++,
            (T = u);
        ((h = t[S]).b = T),
          (h.c = T + 0.4 * (h.d - T)),
          (h.da = h.d - h.a),
          (h.ca = h.c - h.a),
          (h.ba = T - h.a),
          i &&
            ((p = b(h.a, T, h.c, h.d)), t.splice(S, 1, p[0], p[1], p[2], p[3]));
      },
      S = function (t, e, i, r) {
        var n,
          s,
          o,
          a,
          l,
          h,
          c = [];
        if (r)
          for (s = (t = [r].concat(t)).length; --s > -1; )
            "string" == typeof (h = t[s][e]) &&
              "=" === h.charAt(1) &&
              (t[s][e] = r[e] + Number(h.charAt(0) + h.substr(2)));
        if ((n = t.length - 2) < 0)
          return (c[0] = new x(t[0][e], 0, 0, t[0][e])), c;
        for (s = 0; s < n; s++)
          (o = t[s][e]),
            (a = t[s + 1][e]),
            (c[s] = new x(o, 0, 0, a)),
            i &&
              ((l = t[s + 2][e]),
              (g[s] = (g[s] || 0) + (a - o) * (a - o)),
              (m[s] = (m[s] || 0) + (l - a) * (l - a)));
        return (c[s] = new x(t[s][e], 0, 0, t[s + 1][e])), c;
      },
      T = function (t, e, i, r, n, s) {
        var o,
          a,
          l,
          h,
          c,
          u,
          d,
          f,
          p = {},
          y = [],
          x = s || t[0];
        for (a in ((n =
          "string" == typeof n
            ? "," + n + ","
            : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == e && (e = 1),
        t[0]))
          y.push(a);
        if (t.length > 1) {
          for (f = t[t.length - 1], d = !0, o = y.length; --o > -1; )
            if (((a = y[o]), Math.abs(x[a] - f[a]) > 0.05)) {
              d = !1;
              break;
            }
          d &&
            ((t = t.concat()),
            s && t.unshift(s),
            t.push(t[1]),
            (s = t[t.length - 3]));
        }
        for (g.length = m.length = _.length = 0, o = y.length; --o > -1; )
          (a = y[o]),
            (v[a] = -1 !== n.indexOf("," + a + ",")),
            (p[a] = S(t, a, v[a], s));
        for (o = g.length; --o > -1; )
          (g[o] = Math.sqrt(g[o])), (m[o] = Math.sqrt(m[o]));
        if (!r) {
          for (o = y.length; --o > -1; )
            if (v[a])
              for (u = (l = p[y[o]]).length - 1, h = 0; h < u; h++)
                (c = l[h + 1].da / m[h] + l[h].da / g[h] || 0),
                  (_[h] = (_[h] || 0) + c * c);
          for (o = _.length; --o > -1; ) _[o] = Math.sqrt(_[o]);
        }
        for (o = y.length, h = i ? 4 : 1; --o > -1; )
          (l = p[(a = y[o])]),
            w(l, e, i, r, v[a]),
            d && (l.splice(0, h), l.splice(l.length - h, h));
        return p;
      },
      P = function (t, e, i) {
        for (
          var r, n, s, o, a, l, h, c, u, d, f, p = 1 / i, g = t.length;
          --g > -1;

        )
          for (
            s = (d = t[g]).a,
              o = d.d - s,
              a = d.c - s,
              l = d.b - s,
              r = n = 0,
              c = 1;
            c <= i;
            c++
          )
            (r =
              n -
              (n =
                ((h = p * c) * h * o + 3 * (u = 1 - h) * (h * a + u * l)) * h)),
              (e[(f = g * i + c - 1)] = (e[f] || 0) + r * r);
      },
      C = r.e._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.9",
        API: 2,
        global: !0,
        init: function (t, e, i) {
          (this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var r,
            n,
            s,
            o,
            a,
            l = e.values || [],
            h = {},
            c = l[0],
            u = e.autoRotate || i.vars.orientToBezier;
          for (r in ((this._autoRotate = u
            ? u instanceof Array
              ? u
              : [["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]]
            : null),
          c))
            this._props.push(r);
          for (s = this._props.length; --s > -1; )
            (r = this._props[s]),
              this._overwriteProps.push(r),
              (n = this._func[r] = "function" == typeof t[r]),
              (h[r] = n
                ? t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
                : parseFloat(t[r])),
              a || (h[r] !== l[0][r] && (a = h));
          if (
            ((this._beziers =
              "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                ? T(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    "thruBasic" === e.type,
                    e.correlate,
                    a
                  )
                : (function (t, e, i) {
                    var r,
                      n,
                      s,
                      o,
                      a,
                      l,
                      h,
                      c,
                      u,
                      d,
                      f,
                      p = {},
                      g = "cubic" === (e = e || "soft") ? 3 : 2,
                      m = "soft" === e,
                      _ = [];
                    if (
                      (m && i && (t = [i].concat(t)),
                      null == t || t.length < g + 1)
                    )
                      throw "invalid Bezier data";
                    for (u in t[0]) _.push(u);
                    for (l = _.length; --l > -1; ) {
                      for (
                        p[(u = _[l])] = a = [], d = 0, c = t.length, h = 0;
                        h < c;
                        h++
                      )
                        (r =
                          null == i
                            ? t[h][u]
                            : "string" == typeof (f = t[h][u]) &&
                              "=" === f.charAt(1)
                            ? i[u] + Number(f.charAt(0) + f.substr(2))
                            : Number(f)),
                          m &&
                            h > 1 &&
                            h < c - 1 &&
                            (a[d++] = (r + a[d - 2]) / 2),
                          (a[d++] = r);
                      for (c = d - g + 1, d = 0, h = 0; h < c; h += g)
                        (r = a[h]),
                          (n = a[h + 1]),
                          (s = a[h + 2]),
                          (o = 2 === g ? 0 : a[h + 3]),
                          (a[d++] = f =
                            3 === g
                              ? new x(r, n, s, o)
                              : new x(r, (2 * n + r) / 3, (2 * n + s) / 3, s));
                      a.length = d;
                    }
                    return p;
                  })(l, e.type, h)),
            (this._segCount = this._beziers[r].length),
            this._timeRes)
          ) {
            var d = (function (t, e) {
              var i,
                r,
                n,
                s,
                o = [],
                a = [],
                l = 0,
                h = 0,
                c = (e = e >> 0 || 6) - 1,
                u = [],
                d = [];
              for (i in t) P(t[i], o, e);
              for (n = o.length, r = 0; r < n; r++)
                (l += Math.sqrt(o[r])),
                  (d[(s = r % e)] = l),
                  s === c &&
                    ((h += l),
                    (u[(s = (r / e) >> 0)] = d),
                    (a[s] = h),
                    (l = 0),
                    (d = []));
              return { length: h, lengths: a, segments: u };
            })(this._beziers, this._timeRes);
            (this._length = d.length),
              (this._lengths = d.lengths),
              (this._segments = d.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length);
          }
          if ((u = this._autoRotate))
            for (
              this._initialRotations = [],
                u[0] instanceof Array || (this._autoRotate = u = [u]),
                s = u.length;
              --s > -1;

            ) {
              for (o = 0; o < 3; o++)
                (r = u[s][o]),
                  (this._func[r] =
                    "function" == typeof t[r] &&
                    t[
                      r.indexOf("set") ||
                      "function" != typeof t["get" + r.substr(3)]
                        ? r
                        : "get" + r.substr(3)
                    ]);
              (r = u[s][2]),
                (this._initialRotations[s] =
                  (this._func[r]
                    ? this._func[r].call(this._target)
                    : this._target[r]) || 0),
                this._overwriteProps.push(r);
            }
          return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
        },
        set: function (t) {
          var e,
            i,
            r,
            n,
            s,
            o,
            a,
            l,
            h,
            c,
            u,
            d = this._segCount,
            f = this._func,
            g = this._target,
            m = t !== this._startRatio;
          if (this._timeRes) {
            if (
              ((h = this._lengths),
              (c = this._curSeg),
              (u = t * this._length),
              (r = this._li),
              u > this._l2 && r < d - 1)
            ) {
              for (l = d - 1; r < l && (this._l2 = h[++r]) <= u; );
              (this._l1 = h[r - 1]),
                (this._li = r),
                (this._curSeg = c = this._segments[r]),
                (this._s2 = c[(this._s1 = this._si = 0)]);
            } else if (u < this._l1 && r > 0) {
              for (; r > 0 && (this._l1 = h[--r]) >= u; );
              0 === r && u < this._l1 ? (this._l1 = 0) : r++,
                (this._l2 = h[r]),
                (this._li = r),
                (this._curSeg = c = this._segments[r]),
                (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
                (this._s2 = c[this._si]);
            }
            if (
              ((e = r),
              (u -= this._l1),
              (r = this._si),
              u > this._s2 && r < c.length - 1)
            ) {
              for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= u; );
              (this._s1 = c[r - 1]), (this._si = r);
            } else if (u < this._s1 && r > 0) {
              for (; r > 0 && (this._s1 = c[--r]) >= u; );
              0 === r && u < this._s1 ? (this._s1 = 0) : r++,
                (this._s2 = c[r]),
                (this._si = r);
            }
            o =
              1 === t
                ? 1
                : (r + (u - this._s1) / (this._s2 - this._s1)) * this._prec ||
                  0;
          } else
            o =
              (t - (e = t < 0 ? 0 : t >= 1 ? d - 1 : (d * t) >> 0) * (1 / d)) *
              d;
          for (i = 1 - o, r = this._props.length; --r > -1; )
            (n = this._props[r]),
              (a =
                (o * o * (s = this._beziers[n][e]).da +
                  3 * i * (o * s.ca + i * s.ba)) *
                  o +
                s.a),
              this._mod[n] && (a = this._mod[n](a, g)),
              f[n] ? g[n](a) : (g[n] = a);
          if (this._autoRotate) {
            var _,
              v,
              y,
              x,
              b,
              w,
              S,
              T = this._autoRotate;
            for (r = T.length; --r > -1; )
              (n = T[r][2]),
                (w = T[r][3] || 0),
                (S = !0 === T[r][4] ? 1 : p),
                (s = this._beziers[T[r][0]]),
                (_ = this._beziers[T[r][1]]),
                s &&
                  _ &&
                  ((s = s[e]),
                  (_ = _[e]),
                  (v = s.a + (s.b - s.a) * o),
                  (v += ((x = s.b + (s.c - s.b) * o) - v) * o),
                  (x += (s.c + (s.d - s.c) * o - x) * o),
                  (y = _.a + (_.b - _.a) * o),
                  (y += ((b = _.b + (_.c - _.b) * o) - y) * o),
                  (b += (_.c + (_.d - _.c) * o - b) * o),
                  (a = m
                    ? Math.atan2(b - y, x - v) * S + w
                    : this._initialRotations[r]),
                  this._mod[n] && (a = this._mod[n](a, g)),
                  f[n] ? g[n](a) : (g[n] = a));
          }
        },
      }),
      k = C.prototype;
    /*!
     * VERSION: 1.3.9
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ (C.bezierThrough = T),
      (C.cubicToQuadratic = b),
      (C._autoCSS = !0),
      (C.quadraticToCubic = function (t, e, i) {
        return new x(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
      }),
      (C._cssRegister = function () {
        var t = y.CSSPlugin;
        if (t) {
          var e = t._internals,
            i = e._parseToProxy,
            r = e._setPluginRatio,
            n = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function (t, e, s, o, a, l) {
              e instanceof Array && (e = { values: e }), (l = new C());
              var h,
                c,
                u,
                d = e.values,
                f = d.length - 1,
                p = [],
                g = {};
              if (f < 0) return a;
              for (h = 0; h <= f; h++)
                (u = i(t, d[h], o, a, l, f !== h)), (p[h] = u.end);
              for (c in e) g[c] = e[c];
              return (
                (g.values = p),
                ((a = new n(t, "bezier", 0, 0, u.pt, 2)).data = u),
                (a.plugin = l),
                (a.setRatio = r),
                0 === g.autoRotate && (g.autoRotate = !0),
                !g.autoRotate ||
                  g.autoRotate instanceof Array ||
                  ((h = !0 === g.autoRotate ? 0 : Number(g.autoRotate)),
                  (g.autoRotate =
                    null != u.end.left
                      ? [["left", "top", "rotation", h, !1]]
                      : null != u.end.x && [["x", "y", "rotation", h, !1]])),
                g.autoRotate &&
                  (o._transform || o._enableTransforms(!1),
                  (u.autoRotate = o._target._gsTransform),
                  (u.proxy.rotation = u.autoRotate.rotation || 0),
                  o._overwriteProps.push("rotation")),
                l._onInitTween(u.proxy, g, o._tween),
                a
              );
            },
          });
        }
      }),
      (k._mod = function (t) {
        for (var e, i = this._overwriteProps, r = i.length; --r > -1; )
          (e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e);
      }),
      (k._kill = function (t) {
        var e,
          i,
          r = this._props;
        for (e in this._beziers)
          if (e in t)
            for (
              delete this._beziers[e], delete this._func[e], i = r.length;
              --i > -1;

            )
              r[i] === e && r.splice(i, 1);
        if ((r = this._autoRotate))
          for (i = r.length; --i > -1; ) t[r[i][2]] && r.splice(i, 1);
        return this._super._kill.call(this, t);
      }),
      /*!
       * VERSION: 1.16.1
       * DATE: 2018-08-27
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       **/
      r.e._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function () {
          var t,
            e,
            i,
            n,
            s = r.e.GreenSockGlobals || r.e,
            o = s.com.greensock,
            a = 2 * Math.PI,
            l = Math.PI / 2,
            h = o._class,
            c = function (t, e) {
              var i = h("easing." + t, function () {}, !0),
                n = (i.prototype = new r.b());
              return (n.constructor = i), (n.getRatio = e), i;
            },
            u = r.b.register || function () {},
            d = function (t, e, i, r, n) {
              var s = h(
                "easing." + t,
                { easeOut: new e(), easeIn: new i(), easeInOut: new r() },
                !0
              );
              return u(s, t), s;
            },
            f = function (t, e, i) {
              (this.t = t),
                (this.v = e),
                i &&
                  ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - e),
                  (this.gap = i.t - t));
            },
            p = function (t, e) {
              var i = h(
                  "easing." + t,
                  function (t) {
                    (this._p1 = t || 0 === t ? t : 1.70158),
                      (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                n = (i.prototype = new r.b());
              return (
                (n.constructor = i),
                (n.getRatio = e),
                (n.config = function (t) {
                  return new i(t);
                }),
                i
              );
            },
            g = d(
              "Back",
              p("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
              }),
              p("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1);
              }),
              p("BackInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
              })
            ),
            m = h(
              "easing.SlowMo",
              function (t, e, i) {
                (e = e || 0 === e ? e : 0.7),
                  null == t ? (t = 0.7) : t > 1 && (t = 1),
                  (this._p = 1 !== t ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === i);
              },
              !0
            ),
            _ = (m.prototype = new r.b());
          return (
            (_.constructor = m),
            (_.getRatio = function (t) {
              var e = t + (0.5 - t) * this._p;
              return t < this._p1
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 === t
                    ? 0
                    : 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e;
            }),
            (m.ease = new m(0.7, 0.7)),
            (_.config = m.config =
              function (t, e, i) {
                return new m(t, e, i);
              }),
            ((_ = (t = h(
              "easing.SteppedEase",
              function (t, e) {
                (t = t || 1),
                  (this._p1 = 1 / t),
                  (this._p2 = t + (e ? 0 : 1)),
                  (this._p3 = e ? 1 : 0);
              },
              !0
            )).prototype =
              new r.b()).constructor = t),
            (_.getRatio = function (t) {
              return (
                t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
                (((this._p2 * t) | 0) + this._p3) * this._p1
              );
            }),
            (_.config = t.config =
              function (e, i) {
                return new t(e, i);
              }),
            ((_ = (e = h(
              "easing.ExpoScaleEase",
              function (t, e, i) {
                (this._p1 = Math.log(e / t)),
                  (this._p2 = e - t),
                  (this._p3 = t),
                  (this._ease = i);
              },
              !0
            )).prototype =
              new r.b()).constructor = e),
            (_.getRatio = function (t) {
              return (
                this._ease && (t = this._ease.getRatio(t)),
                (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
              );
            }),
            (_.config = e.config =
              function (t, i, r) {
                return new e(t, i, r);
              }),
            ((_ = (i = h(
              "easing.RoughEase",
              function (t) {
                for (
                  var e,
                    i,
                    n,
                    s,
                    o,
                    a,
                    l = (t = t || {}).taper || "none",
                    h = [],
                    c = 0,
                    u = 0 | (t.points || 20),
                    d = u,
                    p = !1 !== t.randomize,
                    g = !0 === t.clamp,
                    m = t.template instanceof r.b ? t.template : null,
                    _ = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                  --d > -1;

                )
                  (e = p ? Math.random() : (1 / u) * d),
                    (i = m ? m.getRatio(e) : e),
                    (n =
                      "none" === l
                        ? _
                        : "out" === l
                        ? (s = 1 - e) * s * _
                        : "in" === l
                        ? e * e * _
                        : e < 0.5
                        ? (s = 2 * e) * s * 0.5 * _
                        : (s = 2 * (1 - e)) * s * 0.5 * _),
                    p
                      ? (i += Math.random() * n - 0.5 * n)
                      : d % 2
                      ? (i += 0.5 * n)
                      : (i -= 0.5 * n),
                    g && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
                    (h[c++] = { x: e, y: i });
                for (
                  h.sort(function (t, e) {
                    return t.x - e.x;
                  }),
                    a = new f(1, 1, null),
                    d = u;
                  --d > -1;

                )
                  (o = h[d]), (a = new f(o.x, o.y, a));
                this._prev = new f(0, 0, 0 !== a.t ? a : a.next);
              },
              !0
            )).prototype =
              new r.b()).constructor = i),
            (_.getRatio = function (t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && t <= e.t; ) e = e.prev;
              return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
            }),
            (_.config = function (t) {
              return new i(t);
            }),
            (i.ease = new i()),
            d(
              "Bounce",
              c("BounceOut", function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              }),
              c("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75
                  ? 1 - 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
              }),
              c("BounceInOut", function (t) {
                var e = t < 0.5;
                return (
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? (t *= 7.5625 * t)
                    : (t =
                        t < 2 / 2.75
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : t < 2.5 / 2.75
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                );
              })
            ),
            d(
              "Circ",
              c("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t);
              }),
              c("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
              }),
              c("CircInOut", function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              })
            ),
            d(
              "Elastic",
              (n = function (t, e, i) {
                var n = h(
                    "easing." + t,
                    function (t, e) {
                      (this._p1 = t >= 1 ? t : 1),
                        (this._p2 = (e || i) / (t < 1 ? t : 1)),
                        (this._p3 =
                          (this._p2 / a) * (Math.asin(1 / this._p1) || 0)),
                        (this._p2 = a / this._p2);
                    },
                    !0
                  ),
                  s = (n.prototype = new r.b());
                return (
                  (s.constructor = n),
                  (s.getRatio = e),
                  (s.config = function (t, e) {
                    return new n(t, e);
                  }),
                  n
                );
              })(
                "ElasticOut",
                function (t) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin((t - this._p3) * this._p2) +
                    1
                  );
                },
                0.3
              ),
              n(
                "ElasticIn",
                function (t) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t - this._p3) * this._p2)
                  );
                },
                0.3
              ),
              n(
                "ElasticInOut",
                function (t) {
                  return (t *= 2) < 1
                    ? this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        -0.5
                    : this._p1 *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        0.5 +
                        1;
                },
                0.45
              )
            ),
            d(
              "Expo",
              c("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t);
              }),
              c("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001;
              }),
              c("ExpoInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              })
            ),
            d(
              "Sine",
              c("SineOut", function (t) {
                return Math.sin(t * l);
              }),
              c("SineIn", function (t) {
                return 1 - Math.cos(t * l);
              }),
              c("SineInOut", function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              })
            ),
            h(
              "easing.EaseLookup",
              {
                find: function (t) {
                  return r.b.map[t];
                },
              },
              !0
            ),
            u(s.SlowMo, "SlowMo", "ease,"),
            u(i, "RoughEase", "ease,"),
            u(t, "SteppedEase", "ease,"),
            g
          );
        },
        !0
      );
    var A = r.g.Back,
      M = r.g.Elastic,
      R = r.g.Bounce,
      O = r.g.RoughEase,
      E = r.g.SlowMo,
      F = r.g.SteppedEase,
      B = r.g.Circ,
      I = r.g.Expo,
      L = r.g.Sine,
      N = r.g.ExpoScaleEase;
    n._autoActivated = [d, f, s, o, C, a, u, A, M, R, O, E, F, B, I, L, N];
  },
]);
//# sourceMappingURL=main.8d46db8bb091d740ee7f.js.map
