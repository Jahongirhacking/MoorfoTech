(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var yt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ca(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sc = { exports: {} },
  fa = {},
  Ec = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rr = Symbol.for("react.element"),
  Im = Symbol.for("react.portal"),
  Lm = Symbol.for("react.fragment"),
  Rm = Symbol.for("react.strict_mode"),
  Dm = Symbol.for("react.profiler"),
  Fm = Symbol.for("react.provider"),
  Um = Symbol.for("react.context"),
  $m = Symbol.for("react.forward_ref"),
  Hm = Symbol.for("react.suspense"),
  Wm = Symbol.for("react.memo"),
  Vm = Symbol.for("react.lazy"),
  Ts = Symbol.iterator;
function Bm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ts && e[Ts]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _c = Object.assign,
  bc = {};
function Fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bc),
    (this.updater = n || Cc);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nc() {}
Nc.prototype = Fn.prototype;
function Sl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bc),
    (this.updater = n || Cc);
}
var El = (Sl.prototype = new Nc());
El.constructor = Sl;
_c(El, Fn.prototype);
El.isPureReactComponent = !0;
var zs = Array.isArray,
  Ac = Object.prototype.hasOwnProperty,
  Cl = { current: null },
  Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oc(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Ac.call(t, r) && !Pc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Rr,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Cl.current,
  };
}
function Ym(e, t) {
  return {
    $$typeof: Rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rr;
}
function Xm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var js = /\/+/g;
function Ma(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xm("" + e.key)
    : t.toString(36);
}
function ki(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Rr:
          case Im:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ma(o, 0) : r),
      zs(i)
        ? ((n = ""),
          e != null && (n = e.replace(js, "$&/") + "/"),
          ki(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (_l(i) &&
            (i = Ym(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(js, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), zs(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = r + Ma(a, l);
      o += ki(a, t, n, s, i);
    }
  else if (((s = Bm(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (s = r + Ma(a, l++)), (o += ki(a, t, n, s, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Xr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ki(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function Km(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  xi = { transition: null },
  Qm = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: xi,
    ReactCurrentOwner: Cl,
  };
L.Children = {
  map: Xr,
  forEach: function (e, t, n) {
    Xr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
L.Component = Fn;
L.Fragment = Lm;
L.Profiler = Dm;
L.PureComponent = Sl;
L.StrictMode = Rm;
L.Suspense = Hm;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _c({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Cl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Ac.call(t, s) &&
        !Pc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Rr, type: e.type, key: i, ref: a, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Um,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fm, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Oc;
L.createFactory = function (e) {
  var t = Oc.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: $m, render: e };
};
L.isValidElement = _l;
L.lazy = function (e) {
  return { $$typeof: Vm, _payload: { _status: -1, _result: e }, _init: Km };
};
L.memo = function (e, t) {
  return { $$typeof: Wm, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = xi.transition;
  xi.transition = {};
  try {
    e();
  } finally {
    xi.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
L.useContext = function (e) {
  return he.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
L.useId = function () {
  return he.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return he.current.useRef(e);
};
L.useState = function (e) {
  return he.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return he.current.useTransition();
};
L.version = "18.2.0";
Ec.exports = L;
var Y = Ec.exports;
const bl = ca(Y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gm = Y,
  Zm = Symbol.for("react.element"),
  qm = Symbol.for("react.fragment"),
  Jm = Object.prototype.hasOwnProperty,
  ep = Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Jm.call(t, r) && !tp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Zm,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: ep.current,
  };
}
fa.Fragment = qm;
fa.jsx = Tc;
fa.jsxs = Tc;
Sc.exports = fa;
var g = Sc.exports,
  po = {},
  zc = { exports: {} },
  Ne = {},
  jc = { exports: {} },
  Mc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, z) {
    var j = A.length;
    A.push(z);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        ie = A[q];
      if (0 < i(ie, z)) (A[q] = z), (A[j] = ie), (j = q);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var z = A[0],
      j = A.pop();
    if (j !== z) {
      A[0] = j;
      e: for (var q = 0, ie = A.length, Br = ie >>> 1; q < Br; ) {
        var Ft = 2 * (q + 1) - 1,
          ja = A[Ft],
          Ut = Ft + 1,
          Yr = A[Ut];
        if (0 > i(ja, j))
          Ut < ie && 0 > i(Yr, ja)
            ? ((A[q] = Yr), (A[Ut] = j), (q = Ut))
            : ((A[q] = ja), (A[Ft] = j), (q = Ft));
        else if (Ut < ie && 0 > i(Yr, j)) (A[q] = Yr), (A[Ut] = j), (q = Ut);
        else break e;
      }
    }
    return z;
  }
  function i(A, z) {
    var j = A.sortIndex - z.sortIndex;
    return j !== 0 ? j : A.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var s = [],
    u = [],
    f = 1,
    m = null,
    v = 3,
    h = !1,
    k = !1,
    S = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(A) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= A)
        r(u), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(u);
    }
  }
  function y(A) {
    if (((S = !1), p(A), !k))
      if (n(s) !== null) (k = !0), Ta(E);
      else {
        var z = n(u);
        z !== null && za(y, z.startTime - A);
      }
  }
  function E(A, z) {
    (k = !1), S && ((S = !1), d(_), (_ = -1)), (h = !0);
    var j = v;
    try {
      for (
        p(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (A && !Le()));

      ) {
        var q = m.callback;
        if (typeof q == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var ie = q(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof ie == "function" ? (m.callback = ie) : m === n(s) && r(s),
            p(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Br = !0;
      else {
        var Ft = n(u);
        Ft !== null && za(y, Ft.startTime - z), (Br = !1);
      }
      return Br;
    } finally {
      (m = null), (v = j), (h = !1);
    }
  }
  var w = !1,
    C = null,
    _ = -1,
    I = 5,
    M = -1;
  function Le() {
    return !(e.unstable_now() - M < I);
  }
  function Wn() {
    if (C !== null) {
      var A = e.unstable_now();
      M = A;
      var z = !0;
      try {
        z = C(!0, A);
      } finally {
        z ? Vn() : ((w = !1), (C = null));
      }
    } else w = !1;
  }
  var Vn;
  if (typeof c == "function")
    Vn = function () {
      c(Wn);
    };
  else if (typeof MessageChannel < "u") {
    var Os = new MessageChannel(),
      Mm = Os.port2;
    (Os.port1.onmessage = Wn),
      (Vn = function () {
        Mm.postMessage(null);
      });
  } else
    Vn = function () {
      O(Wn, 0);
    };
  function Ta(A) {
    (C = A), w || ((w = !0), Vn());
  }
  function za(A, z) {
    _ = O(function () {
      A(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || h || ((k = !0), Ta(E));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (A) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = v;
      }
      var j = v;
      v = z;
      try {
        return A();
      } finally {
        v = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, z) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var j = v;
      v = A;
      try {
        return z();
      } finally {
        v = j;
      }
    }),
    (e.unstable_scheduleCallback = function (A, z, j) {
      var q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? q + j : q))
          : (j = q),
        A)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = j + ie),
        (A = {
          id: f++,
          callback: z,
          priorityLevel: A,
          startTime: j,
          expirationTime: ie,
          sortIndex: -1,
        }),
        j > q
          ? ((A.sortIndex = j),
            t(u, A),
            n(s) === null &&
              A === n(u) &&
              (S ? (d(_), (_ = -1)) : (S = !0), za(y, j - q)))
          : ((A.sortIndex = ie), t(s, A), k || h || ((k = !0), Ta(E))),
        A
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (A) {
      var z = v;
      return function () {
        var j = v;
        v = z;
        try {
          return A.apply(this, arguments);
        } finally {
          v = j;
        }
      };
    });
})(Mc);
jc.exports = Mc;
var np = jc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic = Y,
  be = np;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lc = new Set(),
  vr = {};
function an(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (vr[e] = t, e = 0; e < t.length; e++) Lc.add(t[e]);
}
var rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vo = Object.prototype.hasOwnProperty,
  rp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ms = {},
  Is = {};
function ip(e) {
  return vo.call(Is, e)
    ? !0
    : vo.call(Ms, e)
    ? !1
    : rp.test(e)
    ? (Is[e] = !0)
    : ((Ms[e] = !0), !1);
}
function ap(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function op(e, t, n, r) {
  if (t === null || typeof t > "u" || ap(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ge(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nl = /[\-:]([a-z])/g;
function Al(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Al);
    ue[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Al);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nl, Al);
  ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pl(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (op(t, n, i, r) && (n = null),
    r || i === null
      ? ip(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ct = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Kr = Symbol.for("react.element"),
  un = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  Ol = Symbol.for("react.strict_mode"),
  ho = Symbol.for("react.profiler"),
  Rc = Symbol.for("react.provider"),
  Dc = Symbol.for("react.context"),
  Tl = Symbol.for("react.forward_ref"),
  go = Symbol.for("react.suspense"),
  yo = Symbol.for("react.suspense_list"),
  zl = Symbol.for("react.memo"),
  pt = Symbol.for("react.lazy"),
  Fc = Symbol.for("react.offscreen"),
  Ls = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ls && e[Ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Ia;
function Jn(e) {
  if (Ia === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ia = (t && t[1]) || "";
    }
  return (
    `
` +
    Ia +
    e
  );
}
var La = !1;
function Ra(e, t) {
  if (!e || La) return "";
  La = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var s =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (La = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function lp(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ra(e.type, !1)), e;
    case 11:
      return (e = Ra(e.type.render, !1)), e;
    case 1:
      return (e = Ra(e.type, !0)), e;
    default:
      return "";
  }
}
function wo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case un:
      return "Portal";
    case ho:
      return "Profiler";
    case Ol:
      return "StrictMode";
    case go:
      return "Suspense";
    case yo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dc:
        return (e.displayName || "Context") + ".Consumer";
      case Rc:
        return (e._context.displayName || "Context") + ".Provider";
      case Tl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zl:
        return (
          (t = e.displayName || null), t !== null ? t : wo(e.type) || "Memo"
        );
      case pt:
        (t = e._payload), (e = e._init);
        try {
          return wo(e(t));
        } catch {}
    }
  return null;
}
function sp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wo(t);
    case 8:
      return t === Ol ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Tt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function up(e) {
  var t = Uc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qr(e) {
  e._valueTracker || (e._valueTracker = up(e));
}
function $c(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ii(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ko(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Tt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Hc(e, t) {
  (t = t.checked), t != null && Pl(e, "checked", t, !1);
}
function xo(e, t) {
  Hc(e, t);
  var n = Tt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? So(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && So(e, t.type, Tt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ds(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function So(e, t, n) {
  (t !== "number" || Ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function Cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (er(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Tt(n) };
}
function Wc(e, t) {
  var n = Tt(t.value),
    r = Tt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Us(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Co(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Gr,
  Bc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gr = Gr || document.createElement("div"),
          Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function (e) {
  cp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ir[t] = ir[e]);
  });
});
function Yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ir.hasOwnProperty(e) && ir[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Yc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var fp = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function _o(e, t) {
  if (t) {
    if (fp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function bo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var No = null;
function jl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ao = null,
  _n = null,
  bn = null;
function $s(e) {
  if ((e = Ur(e))) {
    if (typeof Ao != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = ha(t)), Ao(e.stateNode, e.type, t));
  }
}
function Kc(e) {
  _n ? (bn ? bn.push(e) : (bn = [e])) : (_n = e);
}
function Qc() {
  if (_n) {
    var e = _n,
      t = bn;
    if (((bn = _n = null), $s(e), t)) for (e = 0; e < t.length; e++) $s(t[e]);
  }
}
function Gc(e, t) {
  return e(t);
}
function Zc() {}
var Da = !1;
function qc(e, t, n) {
  if (Da) return e(t, n);
  Da = !0;
  try {
    return Gc(e, t, n);
  } finally {
    (Da = !1), (_n !== null || bn !== null) && (Zc(), Qc());
  }
}
function gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ha(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Po = !1;
if (rt)
  try {
    var Yn = {};
    Object.defineProperty(Yn, "passive", {
      get: function () {
        Po = !0;
      },
    }),
      window.addEventListener("test", Yn, Yn),
      window.removeEventListener("test", Yn, Yn);
  } catch {
    Po = !1;
  }
function dp(e, t, n, r, i, a, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var ar = !1,
  Li = null,
  Ri = !1,
  Oo = null,
  mp = {
    onError: function (e) {
      (ar = !0), (Li = e);
    },
  };
function pp(e, t, n, r, i, a, o, l, s) {
  (ar = !1), (Li = null), dp.apply(mp, arguments);
}
function vp(e, t, n, r, i, a, o, l, s) {
  if ((pp.apply(this, arguments), ar)) {
    if (ar) {
      var u = Li;
      (ar = !1), (Li = null);
    } else throw Error(x(198));
    Ri || ((Ri = !0), (Oo = u));
  }
}
function on(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hs(e) {
  if (on(e) !== e) throw Error(x(188));
}
function hp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = on(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Hs(i), e;
        if (a === r) return Hs(i), t;
        a = a.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function ef(e) {
  return (e = hp(e)), e !== null ? tf(e) : null;
}
function tf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nf = be.unstable_scheduleCallback,
  Ws = be.unstable_cancelCallback,
  gp = be.unstable_shouldYield,
  yp = be.unstable_requestPaint,
  J = be.unstable_now,
  wp = be.unstable_getCurrentPriorityLevel,
  Ml = be.unstable_ImmediatePriority,
  rf = be.unstable_UserBlockingPriority,
  Di = be.unstable_NormalPriority,
  kp = be.unstable_LowPriority,
  af = be.unstable_IdlePriority,
  da = null,
  Qe = null;
function xp(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(da, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Cp,
  Sp = Math.log,
  Ep = Math.LN2;
function Cp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sp(e) / Ep) | 0)) | 0;
}
var Zr = 64,
  qr = 4194304;
function tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = tr(l)) : ((a &= o), a !== 0 && (r = tr(a)));
  } else (o = n & ~i), o !== 0 ? (r = tr(o)) : a !== 0 && (r = tr(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function _p(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - He(a),
      l = 1 << o,
      s = i[o];
    s === -1
      ? (!(l & n) || l & r) && (i[o] = _p(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function To(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function of() {
  var e = Zr;
  return (Zr <<= 1), !(Zr & 4194240) && (Zr = 64), e;
}
function Fa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function Np(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - He(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function Il(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var D = 0;
function lf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sf,
  Ll,
  uf,
  cf,
  ff,
  zo = !1,
  Jr = [],
  St = null,
  Et = null,
  Ct = null,
  yr = new Map(),
  wr = new Map(),
  ht = [],
  Ap =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Vs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Ur(t)), t !== null && Ll(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Pp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (St = Xn(St, e, t, n, r, i)), !0;
    case "dragenter":
      return (Et = Xn(Et, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ct = Xn(Ct, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return yr.set(a, Xn(yr.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), wr.set(a, Xn(wr.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function df(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jc(n)), t !== null)) {
          (e.blockedOn = t),
            ff(e.priority, function () {
              uf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (No = r), n.target.dispatchEvent(r), (No = null);
    } else return (t = Ur(n)), t !== null && Ll(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bs(e, t, n) {
  Si(e) && n.delete(t);
}
function Op() {
  (zo = !1),
    St !== null && Si(St) && (St = null),
    Et !== null && Si(Et) && (Et = null),
    Ct !== null && Si(Ct) && (Ct = null),
    yr.forEach(Bs),
    wr.forEach(Bs);
}
function Kn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zo ||
      ((zo = !0),
      be.unstable_scheduleCallback(be.unstable_NormalPriority, Op)));
}
function kr(e) {
  function t(i) {
    return Kn(i, e);
  }
  if (0 < Jr.length) {
    Kn(Jr[0], e);
    for (var n = 1; n < Jr.length; n++) {
      var r = Jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    St !== null && Kn(St, e),
      Et !== null && Kn(Et, e),
      Ct !== null && Kn(Ct, e),
      yr.forEach(t),
      wr.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    df(n), n.blockedOn === null && ht.shift();
}
var Nn = ct.ReactCurrentBatchConfig,
  Ui = !0;
function Tp(e, t, n, r) {
  var i = D,
    a = Nn.transition;
  Nn.transition = null;
  try {
    (D = 1), Rl(e, t, n, r);
  } finally {
    (D = i), (Nn.transition = a);
  }
}
function zp(e, t, n, r) {
  var i = D,
    a = Nn.transition;
  Nn.transition = null;
  try {
    (D = 4), Rl(e, t, n, r);
  } finally {
    (D = i), (Nn.transition = a);
  }
}
function Rl(e, t, n, r) {
  if (Ui) {
    var i = jo(e, t, n, r);
    if (i === null) Qa(e, t, r, $i, n), Vs(e, r);
    else if (Pp(i, e, t, n, r)) r.stopPropagation();
    else if ((Vs(e, r), t & 4 && -1 < Ap.indexOf(e))) {
      for (; i !== null; ) {
        var a = Ur(i);
        if (
          (a !== null && sf(a),
          (a = jo(e, t, n, r)),
          a === null && Qa(e, t, r, $i, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Qa(e, t, r, null, n);
  }
}
var $i = null;
function jo(e, t, n, r) {
  if ((($i = null), (e = jl(r)), (e = Vt(e)), e !== null))
    if (((t = on(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($i = e), null;
}
function mf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wp()) {
        case Ml:
          return 1;
        case rf:
          return 4;
        case Di:
        case kp:
          return 16;
        case af:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Dl = null,
  Ei = null;
function pf() {
  if (Ei) return Ei;
  var e,
    t = Dl,
    n = t.length,
    r,
    i = "value" in wt ? wt.value : wt.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (Ei = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ci(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ei() {
  return !0;
}
function Ys() {
  return !1;
}
function Ae(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? ei
        : Ys),
      (this.isPropagationStopped = Ys),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ei));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ei));
      },
      persist: function () {},
      isPersistent: ei,
    }),
    t
  );
}
var Un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fl = Ae(Un),
  Fr = K({}, Un, { view: 0, detail: 0 }),
  jp = Ae(Fr),
  Ua,
  $a,
  Qn,
  ma = K({}, Fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ul,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qn &&
            (Qn && e.type === "mousemove"
              ? ((Ua = e.screenX - Qn.screenX), ($a = e.screenY - Qn.screenY))
              : ($a = Ua = 0),
            (Qn = e)),
          Ua);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $a;
    },
  }),
  Xs = Ae(ma),
  Mp = K({}, ma, { dataTransfer: 0 }),
  Ip = Ae(Mp),
  Lp = K({}, Fr, { relatedTarget: 0 }),
  Ha = Ae(Lp),
  Rp = K({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dp = Ae(Rp),
  Fp = K({}, Un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Up = Ae(Fp),
  $p = K({}, Un, { data: 0 }),
  Ks = Ae($p),
  Hp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Wp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Vp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vp[e]) ? !!t[e] : !1;
}
function Ul() {
  return Bp;
}
var Yp = K({}, Fr, {
    key: function (e) {
      if (e.key) {
        var t = Hp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ci(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Wp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ul,
    charCode: function (e) {
      return e.type === "keypress" ? Ci(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ci(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xp = Ae(Yp),
  Kp = K({}, ma, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qs = Ae(Kp),
  Qp = K({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ul,
  }),
  Gp = Ae(Qp),
  Zp = K({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qp = Ae(Zp),
  Jp = K({}, ma, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  e1 = Ae(Jp),
  t1 = [9, 13, 27, 32],
  $l = rt && "CompositionEvent" in window,
  or = null;
rt && "documentMode" in document && (or = document.documentMode);
var n1 = rt && "TextEvent" in window && !or,
  vf = rt && (!$l || (or && 8 < or && 11 >= or)),
  Gs = String.fromCharCode(32),
  Zs = !1;
function hf(e, t) {
  switch (e) {
    case "keyup":
      return t1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function r1(e, t) {
  switch (e) {
    case "compositionend":
      return gf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zs = !0), Gs);
    case "textInput":
      return (e = t.data), e === Gs && Zs ? null : e;
    default:
      return null;
  }
}
function i1(e, t) {
  if (fn)
    return e === "compositionend" || (!$l && hf(e, t))
      ? ((e = pf()), (Ei = Dl = wt = null), (fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var a1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!a1[e.type] : t === "textarea";
}
function yf(e, t, n, r) {
  Kc(r),
    (t = Hi(t, "onChange")),
    0 < t.length &&
      ((n = new Fl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  xr = null;
function o1(e) {
  Pf(e, 0);
}
function pa(e) {
  var t = pn(e);
  if ($c(t)) return e;
}
function l1(e, t) {
  if (e === "change") return t;
}
var wf = !1;
if (rt) {
  var Wa;
  if (rt) {
    var Va = "oninput" in document;
    if (!Va) {
      var Js = document.createElement("div");
      Js.setAttribute("oninput", "return;"),
        (Va = typeof Js.oninput == "function");
    }
    Wa = Va;
  } else Wa = !1;
  wf = Wa && (!document.documentMode || 9 < document.documentMode);
}
function eu() {
  lr && (lr.detachEvent("onpropertychange", kf), (xr = lr = null));
}
function kf(e) {
  if (e.propertyName === "value" && pa(xr)) {
    var t = [];
    yf(t, xr, e, jl(e)), qc(o1, t);
  }
}
function s1(e, t, n) {
  e === "focusin"
    ? (eu(), (lr = t), (xr = n), lr.attachEvent("onpropertychange", kf))
    : e === "focusout" && eu();
}
function u1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pa(xr);
}
function c1(e, t) {
  if (e === "click") return pa(t);
}
function f1(e, t) {
  if (e === "input" || e === "change") return pa(t);
}
function d1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ve = typeof Object.is == "function" ? Object.is : d1;
function Sr(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!vo.call(t, i) || !Ve(e[i], t[i])) return !1;
  }
  return !0;
}
function tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nu(e, t) {
  var n = tu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = tu(n);
  }
}
function xf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sf() {
  for (var e = window, t = Ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ii(e.document);
  }
  return t;
}
function Hl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function m1(e) {
  var t = Sf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = nu(n, a));
        var o = nu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var p1 = rt && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  Mo = null,
  sr = null,
  Io = !1;
function ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Io ||
    dn == null ||
    dn !== Ii(r) ||
    ((r = dn),
    "selectionStart" in r && Hl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (sr && Sr(sr, r)) ||
      ((sr = r),
      (r = Hi(Mo, "onSelect")),
      0 < r.length &&
        ((t = new Fl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function ti(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var mn = {
    animationend: ti("Animation", "AnimationEnd"),
    animationiteration: ti("Animation", "AnimationIteration"),
    animationstart: ti("Animation", "AnimationStart"),
    transitionend: ti("Transition", "TransitionEnd"),
  },
  Ba = {},
  Ef = {};
rt &&
  ((Ef = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete mn.animationend.animation,
    delete mn.animationiteration.animation,
    delete mn.animationstart.animation),
  "TransitionEvent" in window || delete mn.transitionend.transition);
function va(e) {
  if (Ba[e]) return Ba[e];
  if (!mn[e]) return e;
  var t = mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ef) return (Ba[e] = t[n]);
  return e;
}
var Cf = va("animationend"),
  _f = va("animationiteration"),
  bf = va("animationstart"),
  Nf = va("transitionend"),
  Af = new Map(),
  iu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Lt(e, t) {
  Af.set(e, t), an(t, [e]);
}
for (var Ya = 0; Ya < iu.length; Ya++) {
  var Xa = iu[Ya],
    v1 = Xa.toLowerCase(),
    h1 = Xa[0].toUpperCase() + Xa.slice(1);
  Lt(v1, "on" + h1);
}
Lt(Cf, "onAnimationEnd");
Lt(_f, "onAnimationIteration");
Lt(bf, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(Nf, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
an(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
an(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
an(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
an(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
an(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var nr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  g1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vp(r, t, void 0, e), (e.currentTarget = null);
}
function Pf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== a && i.isPropagationStopped())) break e;
          au(i, l, u), (a = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== a && i.isPropagationStopped())
          )
            break e;
          au(i, l, u), (a = s);
        }
    }
  }
  if (Ri) throw ((e = Oo), (Ri = !1), (Oo = null), e);
}
function U(e, t) {
  var n = t[Uo];
  n === void 0 && (n = t[Uo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Of(t, e, 2, !1), n.add(r));
}
function Ka(e, t, n) {
  var r = 0;
  t && (r |= 4), Of(n, e, r, t);
}
var ni = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[ni]) {
    (e[ni] = !0),
      Lc.forEach(function (n) {
        n !== "selectionchange" && (g1.has(n) || Ka(n, !1, e), Ka(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ni] || ((t[ni] = !0), Ka("selectionchange", !1, t));
  }
}
function Of(e, t, n, r) {
  switch (mf(t)) {
    case 1:
      var i = Tp;
      break;
    case 4:
      i = zp;
      break;
    default:
      i = Rl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Po ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Qa(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Vt(l)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qc(function () {
    var u = a,
      f = jl(n),
      m = [];
    e: {
      var v = Af.get(e);
      if (v !== void 0) {
        var h = Fl,
          k = e;
        switch (e) {
          case "keypress":
            if (Ci(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Xp;
            break;
          case "focusin":
            (k = "focus"), (h = Ha);
            break;
          case "focusout":
            (k = "blur"), (h = Ha);
            break;
          case "beforeblur":
          case "afterblur":
            h = Ha;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Xs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ip;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Gp;
            break;
          case Cf:
          case _f:
          case bf:
            h = Dp;
            break;
          case Nf:
            h = qp;
            break;
          case "scroll":
            h = jp;
            break;
          case "wheel":
            h = e1;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Up;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Qs;
        }
        var S = (t & 4) !== 0,
          O = !S && e === "scroll",
          d = S ? (v !== null ? v + "Capture" : null) : v;
        S = [];
        for (var c = u, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              d !== null && ((y = gr(c, d)), y != null && S.push(Cr(c, y, p)))),
            O)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((v = new h(v, k, null, n, f)), m.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          v &&
            n !== No &&
            (k = n.relatedTarget || n.fromElement) &&
            (Vt(k) || k[it]))
        )
          break e;
        if (
          (h || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          h
            ? ((k = n.relatedTarget || n.toElement),
              (h = u),
              (k = k ? Vt(k) : null),
              k !== null &&
                ((O = on(k)), k !== O || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((h = null), (k = u)),
          h !== k)
        ) {
          if (
            ((S = Xs),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Qs),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (O = h == null ? v : pn(h)),
            (p = k == null ? v : pn(k)),
            (v = new S(y, c + "leave", h, n, f)),
            (v.target = O),
            (v.relatedTarget = p),
            (y = null),
            Vt(f) === u &&
              ((S = new S(d, c + "enter", k, n, f)),
              (S.target = p),
              (S.relatedTarget = O),
              (y = S)),
            (O = y),
            h && k)
          )
            t: {
              for (S = h, d = k, c = 0, p = S; p; p = sn(p)) c++;
              for (p = 0, y = d; y; y = sn(y)) p++;
              for (; 0 < c - p; ) (S = sn(S)), c--;
              for (; 0 < p - c; ) (d = sn(d)), p--;
              for (; c--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = sn(S)), (d = sn(d));
              }
              S = null;
            }
          else S = null;
          h !== null && ou(m, v, h, S, !1),
            k !== null && O !== null && ou(m, O, k, S, !0);
        }
      }
      e: {
        if (
          ((v = u ? pn(u) : window),
          (h = v.nodeName && v.nodeName.toLowerCase()),
          h === "select" || (h === "input" && v.type === "file"))
        )
          var E = l1;
        else if (qs(v))
          if (wf) E = f1;
          else {
            E = u1;
            var w = s1;
          }
        else
          (h = v.nodeName) &&
            h.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = c1);
        if (E && (E = E(e, u))) {
          yf(m, E, n, f);
          break e;
        }
        w && w(e, v, u),
          e === "focusout" &&
            (w = v._wrapperState) &&
            w.controlled &&
            v.type === "number" &&
            So(v, "number", v.value);
      }
      switch (((w = u ? pn(u) : window), e)) {
        case "focusin":
          (qs(w) || w.contentEditable === "true") &&
            ((dn = w), (Mo = u), (sr = null));
          break;
        case "focusout":
          sr = Mo = dn = null;
          break;
        case "mousedown":
          Io = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Io = !1), ru(m, n, f);
          break;
        case "selectionchange":
          if (p1) break;
        case "keydown":
        case "keyup":
          ru(m, n, f);
      }
      var C;
      if ($l)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        fn
          ? hf(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (vf &&
          n.locale !== "ko" &&
          (fn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && fn && (C = pf())
            : ((wt = f),
              (Dl = "value" in wt ? wt.value : wt.textContent),
              (fn = !0))),
        (w = Hi(u, _)),
        0 < w.length &&
          ((_ = new Ks(_, e, null, n, f)),
          m.push({ event: _, listeners: w }),
          C ? (_.data = C) : ((C = gf(n)), C !== null && (_.data = C)))),
        (C = n1 ? r1(e, n) : i1(e, n)) &&
          ((u = Hi(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Ks("onBeforeInput", "beforeinput", null, n, f)),
            m.push({ event: f, listeners: u }),
            (f.data = C)));
    }
    Pf(m, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = gr(e, n)),
      a != null && r.unshift(Cr(e, a, i)),
      (a = gr(e, t)),
      a != null && r.push(Cr(e, a, i))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ou(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = gr(n, a)), s != null && o.unshift(Cr(n, s, l)))
        : i || ((s = gr(n, a)), s != null && o.push(Cr(n, s, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var y1 = /\r\n?/g,
  w1 = /\u0000|\uFFFD/g;
function lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      y1,
      `
`,
    )
    .replace(w1, "");
}
function ri(e, t, n) {
  if (((t = lu(t)), lu(e) !== t && n)) throw Error(x(425));
}
function Wi() {}
var Lo = null,
  Ro = null;
function Do(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fo = typeof setTimeout == "function" ? setTimeout : void 0,
  k1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  su = typeof Promise == "function" ? Promise : void 0,
  x1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof su < "u"
      ? function (e) {
          return su.resolve(null).then(e).catch(S1);
        }
      : Fo;
function S1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ga(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), kr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  kr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function uu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $n = Math.random().toString(36).slice(2),
  Xe = "__reactFiber$" + $n,
  _r = "__reactProps$" + $n,
  it = "__reactContainer$" + $n,
  Uo = "__reactEvents$" + $n,
  E1 = "__reactListeners$" + $n,
  C1 = "__reactHandles$" + $n;
function Vt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[it] || n[Xe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uu(e); e !== null; ) {
          if ((n = e[Xe])) return n;
          e = uu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ur(e) {
  return (
    (e = e[Xe] || e[it]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function ha(e) {
  return e[_r] || null;
}
var $o = [],
  vn = -1;
function Rt(e) {
  return { current: e };
}
function H(e) {
  0 > vn || ((e.current = $o[vn]), ($o[vn] = null), vn--);
}
function F(e, t) {
  vn++, ($o[vn] = e.current), (e.current = t);
}
var zt = {},
  me = Rt(zt),
  ke = Rt(!1),
  Zt = zt;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Vi() {
  H(ke), H(me);
}
function cu(e, t, n) {
  if (me.current !== zt) throw Error(x(168));
  F(me, t), F(ke, n);
}
function Tf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, sp(e) || "Unknown", i));
  return K({}, n, r);
}
function Bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (Zt = me.current),
    F(me, e),
    F(ke, ke.current),
    !0
  );
}
function fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Tf(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(ke),
      H(me),
      F(me, e))
    : H(ke),
    F(ke, n);
}
var qe = null,
  ga = !1,
  Za = !1;
function zf(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function _1(e) {
  (ga = !0), zf(e);
}
function Dt() {
  if (!Za && qe !== null) {
    Za = !0;
    var e = 0,
      t = D;
    try {
      var n = qe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (ga = !1);
    } catch (i) {
      throw (qe !== null && (qe = qe.slice(e + 1)), nf(Ml, Dt), i);
    } finally {
      (D = t), (Za = !1);
    }
  }
  return null;
}
var hn = [],
  gn = 0,
  Yi = null,
  Xi = 0,
  Oe = [],
  Te = 0,
  qt = null,
  et = 1,
  tt = "";
function $t(e, t) {
  (hn[gn++] = Xi), (hn[gn++] = Yi), (Yi = e), (Xi = t);
}
function jf(e, t, n) {
  (Oe[Te++] = et), (Oe[Te++] = tt), (Oe[Te++] = qt), (qt = e);
  var r = et;
  e = tt;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - He(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (et = (1 << (32 - He(t) + i)) | (n << i) | r),
      (tt = a + e);
  } else (et = (1 << a) | (n << i) | r), (tt = e);
}
function Wl(e) {
  e.return !== null && ($t(e, 1), jf(e, 1, 0));
}
function Vl(e) {
  for (; e === Yi; )
    (Yi = hn[--gn]), (hn[gn] = null), (Xi = hn[--gn]), (hn[gn] = null);
  for (; e === qt; )
    (qt = Oe[--Te]),
      (Oe[Te] = null),
      (tt = Oe[--Te]),
      (Oe[Te] = null),
      (et = Oe[--Te]),
      (Oe[Te] = null);
}
var _e = null,
  Ce = null,
  V = !1,
  Ue = null;
function Mf(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function du(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Ce = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: et, overflow: tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wo(e) {
  if (V) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!du(e, t)) {
        if (Ho(e)) throw Error(x(418));
        t = _t(n.nextSibling);
        var r = _e;
        t && du(e, t)
          ? Mf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (_e = e));
      }
    } else {
      if (Ho(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (_e = e);
    }
  }
}
function mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function ii(e) {
  if (e !== _e) return !1;
  if (!V) return mu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Ho(e)) throw (If(), Error(x(418)));
    for (; t; ) Mf(e, t), (t = _t(t.nextSibling));
  }
  if ((mu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = _e ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function If() {
  for (var e = Ce; e; ) e = _t(e.nextSibling);
}
function jn() {
  (Ce = _e = null), (V = !1);
}
function Bl(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var b1 = ct.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ki = Rt(null),
  Qi = null,
  yn = null,
  Yl = null;
function Xl() {
  Yl = yn = Qi = null;
}
function Kl(e) {
  var t = Ki.current;
  H(Ki), (e._currentValue = t);
}
function Vo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function An(e, t) {
  (Qi = e),
    (Yl = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (Yl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (Qi === null) throw Error(x(308));
      (yn = e), (Qi.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var Bt = null;
function Ql(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Lf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ql(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Gl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ql(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function _i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n);
  }
}
function pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gi(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), o === null ? (a = u) : (o.next = u), (o = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== o &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var m = i.baseState;
    (o = 0), (f = u = s = null), (l = a);
    do {
      var v = l.lane,
        h = l.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var k = e,
            S = l;
          switch (((v = t), (h = n), S.tag)) {
            case 1:
              if (((k = S.payload), typeof k == "function")) {
                m = k.call(h, m, v);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = S.payload),
                (v = typeof k == "function" ? k.call(h, m, v) : k),
                v == null)
              )
                break e;
              m = K({}, m, v);
              break e;
            case 2:
              vt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [l]) : v.push(l));
      } else
        (h = {
          eventTime: h,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = h), (s = m)) : (f = f.next = h),
          (o |= v);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = m),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (en |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var Df = new Ic.Component().refs;
function Bo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ya = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = At(e),
      a = nt(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = bt(e, a, i)),
      t !== null && (We(t, e, i, r), _i(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = At(e),
      a = nt(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = bt(e, a, i)),
      t !== null && (We(t, e, i, r), _i(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = At(e),
      i = nt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = bt(e, i, r)),
      t !== null && (We(t, e, r, n), _i(t, e, r));
  },
};
function hu(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Sr(n, r) || !Sr(i, a)
      : !0
  );
}
function Ff(e, t, n) {
  var r = !1,
    i = zt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Me(a))
      : ((i = xe(t) ? Zt : me.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? zn(e, i) : zt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ya),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function gu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ya.enqueueReplaceState(t, t.state, null);
}
function Yo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Df), Gl(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Me(a))
    : ((a = xe(t) ? Zt : me.current), (i.context = zn(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Bo(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ya.enqueueReplaceState(i, i.state, null),
      Gi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === Df && (l = i.refs = {}),
              o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function ai(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function yu(e) {
  var t = e._init;
  return t(e._payload);
}
function Uf(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = Pt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function a(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = io(p, d.mode, y)), (c.return = d), c)
      : ((c = i(c, p)), (c.return = d), c);
  }
  function s(d, c, p, y) {
    var E = p.type;
    return E === cn
      ? f(d, c, p.props.children, y, p.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === pt &&
            yu(E) === c.type))
      ? ((y = i(c, p.props)), (y.ref = Gn(d, c, p)), (y.return = d), y)
      : ((y = Ti(p.type, p.key, p.props, null, d.mode, y)),
        (y.ref = Gn(d, c, p)),
        (y.return = d),
        y);
  }
  function u(d, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ao(p, d.mode, y)), (c.return = d), c)
      : ((c = i(c, p.children || [])), (c.return = d), c);
  }
  function f(d, c, p, y, E) {
    return c === null || c.tag !== 7
      ? ((c = Gt(p, d.mode, y, E)), (c.return = d), c)
      : ((c = i(c, p)), (c.return = d), c);
  }
  function m(d, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = io("" + c, d.mode, p)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Kr:
          return (
            (p = Ti(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Gn(d, null, c)),
            (p.return = d),
            p
          );
        case un:
          return (c = ao(c, d.mode, p)), (c.return = d), c;
        case pt:
          var y = c._init;
          return m(d, y(c._payload), p);
      }
      if (er(c) || Bn(c))
        return (c = Gt(c, d.mode, p, null)), (c.return = d), c;
      ai(d, c);
    }
    return null;
  }
  function v(d, c, p, y) {
    var E = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : l(d, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Kr:
          return p.key === E ? s(d, c, p, y) : null;
        case un:
          return p.key === E ? u(d, c, p, y) : null;
        case pt:
          return (E = p._init), v(d, c, E(p._payload), y);
      }
      if (er(p) || Bn(p)) return E !== null ? null : f(d, c, p, y, null);
      ai(d, p);
    }
    return null;
  }
  function h(d, c, p, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(p) || null), l(c, d, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Kr:
          return (d = d.get(y.key === null ? p : y.key) || null), s(c, d, y, E);
        case un:
          return (d = d.get(y.key === null ? p : y.key) || null), u(c, d, y, E);
        case pt:
          var w = y._init;
          return h(d, c, p, w(y._payload), E);
      }
      if (er(y) || Bn(y)) return (d = d.get(p) || null), f(c, d, y, E, null);
      ai(c, y);
    }
    return null;
  }
  function k(d, c, p, y) {
    for (
      var E = null, w = null, C = c, _ = (c = 0), I = null;
      C !== null && _ < p.length;
      _++
    ) {
      C.index > _ ? ((I = C), (C = null)) : (I = C.sibling);
      var M = v(d, C, p[_], y);
      if (M === null) {
        C === null && (C = I);
        break;
      }
      e && C && M.alternate === null && t(d, C),
        (c = a(M, c, _)),
        w === null ? (E = M) : (w.sibling = M),
        (w = M),
        (C = I);
    }
    if (_ === p.length) return n(d, C), V && $t(d, _), E;
    if (C === null) {
      for (; _ < p.length; _++)
        (C = m(d, p[_], y)),
          C !== null &&
            ((c = a(C, c, _)), w === null ? (E = C) : (w.sibling = C), (w = C));
      return V && $t(d, _), E;
    }
    for (C = r(d, C); _ < p.length; _++)
      (I = h(C, d, _, p[_], y)),
        I !== null &&
          (e && I.alternate !== null && C.delete(I.key === null ? _ : I.key),
          (c = a(I, c, _)),
          w === null ? (E = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        C.forEach(function (Le) {
          return t(d, Le);
        }),
      V && $t(d, _),
      E
    );
  }
  function S(d, c, p, y) {
    var E = Bn(p);
    if (typeof E != "function") throw Error(x(150));
    if (((p = E.call(p)), p == null)) throw Error(x(151));
    for (
      var w = (E = null), C = c, _ = (c = 0), I = null, M = p.next();
      C !== null && !M.done;
      _++, M = p.next()
    ) {
      C.index > _ ? ((I = C), (C = null)) : (I = C.sibling);
      var Le = v(d, C, M.value, y);
      if (Le === null) {
        C === null && (C = I);
        break;
      }
      e && C && Le.alternate === null && t(d, C),
        (c = a(Le, c, _)),
        w === null ? (E = Le) : (w.sibling = Le),
        (w = Le),
        (C = I);
    }
    if (M.done) return n(d, C), V && $t(d, _), E;
    if (C === null) {
      for (; !M.done; _++, M = p.next())
        (M = m(d, M.value, y)),
          M !== null &&
            ((c = a(M, c, _)), w === null ? (E = M) : (w.sibling = M), (w = M));
      return V && $t(d, _), E;
    }
    for (C = r(d, C); !M.done; _++, M = p.next())
      (M = h(C, d, _, M.value, y)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? _ : M.key),
          (c = a(M, c, _)),
          w === null ? (E = M) : (w.sibling = M),
          (w = M));
    return (
      e &&
        C.forEach(function (Wn) {
          return t(d, Wn);
        }),
      V && $t(d, _),
      E
    );
  }
  function O(d, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === cn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Kr:
          e: {
            for (var E = p.key, w = c; w !== null; ) {
              if (w.key === E) {
                if (((E = p.type), E === cn)) {
                  if (w.tag === 7) {
                    n(d, w.sibling),
                      (c = i(w, p.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  w.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === pt &&
                    yu(E) === w.type)
                ) {
                  n(d, w.sibling),
                    (c = i(w, p.props)),
                    (c.ref = Gn(d, w, p)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, w);
                break;
              } else t(d, w);
              w = w.sibling;
            }
            p.type === cn
              ? ((c = Gt(p.props.children, d.mode, y, p.key)),
                (c.return = d),
                (d = c))
              : ((y = Ti(p.type, p.key, p.props, null, d.mode, y)),
                (y.ref = Gn(d, c, p)),
                (y.return = d),
                (d = y));
          }
          return o(d);
        case un:
          e: {
            for (w = p.key; c !== null; ) {
              if (c.key === w)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ao(p, d.mode, y)), (c.return = d), (d = c);
          }
          return o(d);
        case pt:
          return (w = p._init), O(d, c, w(p._payload), y);
      }
      if (er(p)) return k(d, c, p, y);
      if (Bn(p)) return S(d, c, p, y);
      ai(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = io(p, d.mode, y)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return O;
}
var Mn = Uf(!0),
  $f = Uf(!1),
  $r = {},
  Ge = Rt($r),
  br = Rt($r),
  Nr = Rt($r);
function Yt(e) {
  if (e === $r) throw Error(x(174));
  return e;
}
function Zl(e, t) {
  switch ((F(Nr, t), F(br, e), F(Ge, $r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Co(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Co(t, e));
  }
  H(Ge), F(Ge, t);
}
function In() {
  H(Ge), H(br), H(Nr);
}
function Hf(e) {
  Yt(Nr.current);
  var t = Yt(Ge.current),
    n = Co(t, e.type);
  t !== n && (F(br, e), F(Ge, n));
}
function ql(e) {
  br.current === e && (H(Ge), H(br));
}
var B = Rt(0);
function Zi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qa = [];
function Jl() {
  for (var e = 0; e < qa.length; e++)
    qa[e]._workInProgressVersionPrimary = null;
  qa.length = 0;
}
var bi = ct.ReactCurrentDispatcher,
  Ja = ct.ReactCurrentBatchConfig,
  Jt = 0,
  X = null,
  te = null,
  ae = null,
  qi = !1,
  ur = !1,
  Ar = 0,
  N1 = 0;
function ce() {
  throw Error(x(321));
}
function es(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function ts(e, t, n, r, i, a) {
  if (
    ((Jt = a),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bi.current = e === null || e.memoizedState === null ? T1 : z1),
    (e = n(r, i)),
    ur)
  ) {
    a = 0;
    do {
      if (((ur = !1), (Ar = 0), 25 <= a)) throw Error(x(301));
      (a += 1),
        (ae = te = null),
        (t.updateQueue = null),
        (bi.current = j1),
        (e = n(r, i));
    } while (ur);
  }
  if (
    ((bi.current = Ji),
    (t = te !== null && te.next !== null),
    (Jt = 0),
    (ae = te = X = null),
    (qi = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function ns() {
  var e = Ar !== 0;
  return (Ar = 0), e;
}
function Ye() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (X.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Ie() {
  if (te === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = ae === null ? X.memoizedState : ae.next;
  if (t !== null) (ae = t), (te = e);
  else {
    if (e === null) throw Error(x(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      ae === null ? (X.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eo(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      s = null,
      u = a;
    do {
      var f = u.lane;
      if ((Jt & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = m), (o = r)) : (s = s.next = m),
          (X.lanes |= f),
          (en |= f);
      }
      u = u.next;
    } while (u !== null && u !== a);
    s === null ? (o = r) : (s.next = l),
      Ve(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (X.lanes |= a), (en |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Ve(a, t.memoizedState) || (we = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Wf() {}
function Vf(e, t) {
  var n = X,
    r = Ie(),
    i = t(),
    a = !Ve(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (we = !0)),
    (r = r.queue),
    rs(Xf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Or(9, Yf.bind(null, n, r, i, t), void 0, null),
      oe === null)
    )
      throw Error(x(349));
    Jt & 30 || Bf(n, t, i);
  }
  return i;
}
function Bf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kf(t) && Qf(e);
}
function Xf(e, t, n) {
  return n(function () {
    Kf(t) && Qf(e);
  });
}
function Kf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function Qf(e) {
  var t = at(e, 1);
  t !== null && We(t, e, 1, -1);
}
function wu(e) {
  var t = Ye();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = O1.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function Or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gf() {
  return Ie().memoizedState;
}
function Ni(e, t, n, r) {
  var i = Ye();
  (X.flags |= e),
    (i.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r));
}
function wa(e, t, n, r) {
  var i = Ie();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((a = o.destroy), r !== null && es(r, o.deps))) {
      i.memoizedState = Or(t, n, a, r);
      return;
    }
  }
  (X.flags |= e), (i.memoizedState = Or(1 | t, n, a, r));
}
function ku(e, t) {
  return Ni(8390656, 8, e, t);
}
function rs(e, t) {
  return wa(2048, 8, e, t);
}
function Zf(e, t) {
  return wa(4, 2, e, t);
}
function qf(e, t) {
  return wa(4, 4, e, t);
}
function Jf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wa(4, 4, Jf.bind(null, t, e), n)
  );
}
function is() {}
function td(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && es(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nd(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && es(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rd(e, t, n) {
  return Jt & 21
    ? (Ve(n, t) || ((n = of()), (X.lanes |= n), (en |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function A1(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ja.transition;
  Ja.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Ja.transition = r);
  }
}
function id() {
  return Ie().memoizedState;
}
function P1(e, t, n) {
  var r = At(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ad(e))
  )
    od(t, n);
  else if (((n = Lf(e, t, n, r)), n !== null)) {
    var i = ve();
    We(n, e, r, i), ld(n, t, r);
  }
}
function O1(e, t, n) {
  var r = At(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ad(e)) od(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ve(l, o))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Ql(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Lf(e, t, i, r)),
      n !== null && ((i = ve()), We(n, e, r, i), ld(n, t, r));
  }
}
function ad(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function od(e, t) {
  ur = qi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ld(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n);
  }
}
var Ji = {
    readContext: Me,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  T1 = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ni(4194308, 4, Jf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ni(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ni(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ye();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ye();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = P1.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wu,
    useDebugValue: is,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = wu(!1),
        t = e[0];
      return (e = A1.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = Ye();
      if (V) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(x(349));
        Jt & 30 || Bf(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        ku(Xf.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Or(9, Yf.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ye(),
        t = oe.identifierPrefix;
      if (V) {
        var n = tt,
          r = et;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = N1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  z1 = {
    readContext: Me,
    useCallback: td,
    useContext: Me,
    useEffect: rs,
    useImperativeHandle: ed,
    useInsertionEffect: Zf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: eo,
    useRef: Gf,
    useState: function () {
      return eo(Pr);
    },
    useDebugValue: is,
    useDeferredValue: function (e) {
      var t = Ie();
      return rd(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(Pr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Wf,
    useSyncExternalStore: Vf,
    useId: id,
    unstable_isNewReconciler: !1,
  },
  j1 = {
    readContext: Me,
    useCallback: td,
    useContext: Me,
    useEffect: rs,
    useImperativeHandle: ed,
    useInsertionEffect: Zf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: to,
    useRef: Gf,
    useState: function () {
      return to(Pr);
    },
    useDebugValue: is,
    useDeferredValue: function (e) {
      var t = Ie();
      return te === null ? (t.memoizedState = e) : rd(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = to(Pr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Wf,
    useSyncExternalStore: Vf,
    useId: id,
    unstable_isNewReconciler: !1,
  };
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += lp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var M1 = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ta || ((ta = !0), (rl = r)), Xo(e, t);
    }),
    n
  );
}
function ud(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Xo(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        Xo(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new M1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = K1.bind(null, e, t, n)), t.then(e, e));
}
function Su(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Eu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nt(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var I1 = ct.ReactCurrentOwner,
  we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? $f(t, null, n, r) : Mn(t, e.child, n, r);
}
function Cu(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    An(t, i),
    (r = ts(e, t, n, r, a, i)),
    (n = ns()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ot(e, t, i))
      : (V && n && Wl(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function _u(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !ds(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), cd(e, t, a, r, i))
      : ((e = Ti(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Sr), n(o, r) && e.ref === t.ref)
    )
      return ot(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Pt(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cd(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Sr(a, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), ot(e, t, i);
  }
  return Ko(e, t, n, r, i);
}
function fd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(kn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(kn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        F(kn, Ee),
        (Ee |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(kn, Ee),
      (Ee |= r);
  return pe(e, t, i, n), t.child;
}
function dd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ko(e, t, n, r, i) {
  var a = xe(n) ? Zt : me.current;
  return (
    (a = zn(t, a)),
    An(t, i),
    (n = ts(e, t, n, r, a, i)),
    (r = ns()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ot(e, t, i))
      : (V && r && Wl(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function bu(e, t, n, r, i) {
  if (xe(n)) {
    var a = !0;
    Bi(t);
  } else a = !1;
  if ((An(t, i), t.stateNode === null))
    Ai(e, t), Ff(t, n, r), Yo(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Me(u))
      : ((u = xe(n) ? Zt : me.current), (u = zn(t, u)));
    var f = n.getDerivedStateFromProps,
      m =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && gu(t, o, r, u)),
      (vt = !1);
    var v = t.memoizedState;
    (o.state = v),
      Gi(t, r, o, i),
      (s = t.memoizedState),
      l !== r || v !== s || ke.current || vt
        ? (typeof f == "function" && (Bo(t, n, f, r), (s = t.memoizedState)),
          (l = vt || hu(t, n, l, r, v, s, u))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Rf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : De(t.type, l)),
      (o.props = u),
      (m = t.pendingProps),
      (v = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Me(s))
        : ((s = xe(n) ? Zt : me.current), (s = zn(t, s)));
    var h = n.getDerivedStateFromProps;
    (f =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== m || v !== s) && gu(t, o, r, s)),
      (vt = !1),
      (v = t.memoizedState),
      (o.state = v),
      Gi(t, r, o, i);
    var k = t.memoizedState;
    l !== m || v !== k || ke.current || vt
      ? (typeof h == "function" && (Bo(t, n, h, r), (k = t.memoizedState)),
        (u = vt || hu(t, n, u, r, v, k, s) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qo(e, t, n, r, a, i);
}
function Qo(e, t, n, r, i, a) {
  dd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && fu(t, n, !1), ot(e, t, a);
  (r = t.stateNode), (I1.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Mn(t, e.child, null, a)), (t.child = Mn(t, null, l, a)))
      : pe(e, t, l, a),
    (t.memoizedState = r.state),
    i && fu(t, n, !0),
    t.child
  );
}
function md(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cu(e, t.context, !1),
    Zl(e, t.containerInfo);
}
function Nu(e, t, n, r, i) {
  return jn(), Bl(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var Go = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pd(e, t, n) {
  var r = t.pendingProps,
    i = B.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(B, i & 1),
    e === null)
  )
    return (
      Wo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = Sa(o, r, 0, null)),
              (e = Gt(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Zo(n)),
              (t.memoizedState = Go),
              e)
            : as(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return L1(e, t, o, r, l, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Pt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = Pt(l, a)) : ((a = Gt(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Zo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Go),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Pt(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function as(e, t) {
  return (
    (t = Sa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oi(e, t, n, r) {
  return (
    r !== null && Bl(r),
    Mn(t, e.child, null, n),
    (e = as(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function L1(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = no(Error(x(422)))), oi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = Sa({ mode: "visible", children: r.children }, i, 0, null)),
        (a = Gt(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Mn(t, e.child, null, o),
        (t.child.memoizedState = Zo(o)),
        (t.memoizedState = Go),
        a);
  if (!(t.mode & 1)) return oi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(x(419))), (r = no(a, r, void 0)), oi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), we || l)) {
    if (((r = oe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), at(e, i), We(r, e, i, -1));
    }
    return fs(), (r = no(Error(x(421)))), oi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Q1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ce = _t(i.nextSibling)),
      (_e = t),
      (V = !0),
      (Ue = null),
      e !== null &&
        ((Oe[Te++] = et),
        (Oe[Te++] = tt),
        (Oe[Te++] = qt),
        (et = e.id),
        (tt = e.overflow),
        (qt = t)),
      (t = as(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vo(e.return, t, n);
}
function ro(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function vd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((pe(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
        else if (e.tag === 19) Au(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Zi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ro(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Zi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ro(t, !0, n, null, a);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ai(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function R1(e, t, n) {
  switch (t.tag) {
    case 3:
      md(t), jn();
      break;
    case 5:
      Hf(t);
      break;
    case 1:
      xe(t.type) && Bi(t);
      break;
    case 4:
      Zl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(Ki, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pd(e, t, n)
          : (F(B, B.current & 1),
            (e = ot(e, t, n)),
            e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fd(e, t, n);
  }
  return ot(e, t, n);
}
var hd, qo, gd, yd;
hd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qo = function () {};
gd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Yt(Ge.current);
    var a = null;
    switch (n) {
      case "input":
        (i = ko(e, i)), (r = ko(e, r)), (a = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = Eo(e, i)), (r = Eo(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wi);
    }
    _o(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (vr.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                l[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (a || (a = []), a.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (a = a || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (vr.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && U("scroll", e),
                  a || l === s || (a = []))
                : (a = a || []).push(u, s));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function D1(e, t, n) {
  var r = t.pendingProps;
  switch ((Vl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return xe(t.type) && Vi(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        In(),
        H(ke),
        H(me),
        Jl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ii(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (ol(Ue), (Ue = null)))),
        qo(e, t),
        fe(t),
        null
      );
    case 5:
      ql(t);
      var i = Yt(Nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return fe(t), null;
        }
        if (((e = Yt(Ge.current)), ii(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Xe] = t), (r[_r] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < nr.length; i++) U(nr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Rs(r, a), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Fs(r, a), U("invalid", r);
          }
          _o(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      ri(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      ri(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : vr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), Ds(r, a, !0);
              break;
            case "textarea":
              Qr(r), Us(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Wi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Xe] = t),
            (e[_r] = r),
            hd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = bo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < nr.length; i++) U(nr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                Rs(e, r), (i = ko(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Fs(e, r), (i = Eo(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            _o(n, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === "style"
                  ? Xc(e, s)
                  : a === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Bc(e, s))
                  : a === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && hr(e, s)
                    : typeof s == "number" && hr(e, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (vr.hasOwnProperty(a)
                      ? s != null && a === "onScroll" && U("scroll", e)
                      : s != null && Pl(e, a, s, o));
              }
            switch (n) {
              case "input":
                Qr(e), Ds(e, r, !1);
                break;
              case "textarea":
                Qr(e), Us(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Cn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Wi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) yd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Yt(Nr.current)), Yt(Ge.current), ii(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xe] = t),
            (a = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                ri(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ri(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xe] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (H(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && Ce !== null && t.mode & 1 && !(t.flags & 128))
          If(), jn(), (t.flags |= 98560), (a = !1);
        else if (((a = ii(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(x(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(x(317));
            a[Xe] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (a = !1);
        } else Ue !== null && (ol(Ue), (Ue = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? ne === 0 && (ne = 3) : fs())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        In(), qo(e, t), e === null && Er(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return Kl(t.type._context), fe(t), null;
    case 17:
      return xe(t.type) && Vi(), fe(t), null;
    case 19:
      if ((H(B), (a = t.memoizedState), a === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Zn(a, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Zi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Zn(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            J() > Rn &&
            ((t.flags |= 128), (r = !0), Zn(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zn(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !V)
            )
              return fe(t), null;
          } else
            2 * J() - a.renderingStartTime > Rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zn(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = J()),
          (t.sibling = null),
          (n = B.current),
          F(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        cs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function F1(e, t) {
  switch ((Vl(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && Vi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        In(),
        H(ke),
        H(me),
        Jl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ql(t), null;
    case 13:
      if ((H(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(B), null;
    case 4:
      return In(), null;
    case 10:
      return Kl(t.type._context), null;
    case 22:
    case 23:
      return cs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var li = !1,
  de = !1,
  U1 = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Jo(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Pu = !1;
function $1(e, t) {
  if (((Lo = Ui), (e = Sf()), Hl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            s = -1,
            u = 0,
            f = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var h;
              m !== n || (i !== 0 && m.nodeType !== 3) || (l = o + i),
                m !== a || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (h = m.firstChild) !== null;

            )
              (v = m), (m = h);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++u === i && (l = o),
                v === a && ++f === r && (s = o),
                (h = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = h;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, Ui = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var S = k.memoizedProps,
                    O = k.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : De(t.type, S),
                      O,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (y) {
          G(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (k = Pu), (Pu = !1), k;
}
function cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Jo(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ka(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function el(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xe], delete t[_r], delete t[Uo], delete t[E1], delete t[C1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tl(e, t, n), e = e.sibling; e !== null; ) tl(e, t, n), (e = e.sibling);
}
function nl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nl(e, t, n), e = e.sibling; e !== null; ) nl(e, t, n), (e = e.sibling);
}
var le = null,
  Fe = !1;
function dt(e, t, n) {
  for (n = n.child; n !== null; ) xd(e, t, n), (n = n.sibling);
}
function xd(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(da, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || wn(n, t);
    case 6:
      var r = le,
        i = Fe;
      (le = null),
        dt(e, t, n),
        (le = r),
        (Fe = i),
        le !== null &&
          (Fe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Fe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ga(e.parentNode, n)
              : e.nodeType === 1 && Ga(e, n),
            kr(e))
          : Ga(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Fe),
        (le = n.stateNode.containerInfo),
        (Fe = !0),
        dt(e, t, n),
        (le = r),
        (Fe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Jo(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      dt(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          G(n, t, l);
        }
      dt(e, t, n);
      break;
    case 21:
      dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), dt(e, t, n), (de = r))
        : dt(e, t, n);
      break;
    default:
      dt(e, t, n);
  }
}
function Tu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new U1()),
      t.forEach(function (r) {
        var i = G1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (Fe = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(x(160));
        xd(a, o, i), (le = null), (Fe = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        G(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sd(t, e), (t = t.sibling);
}
function Sd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Be(e), r & 4)) {
        try {
          cr(3, e, e.return), ka(3, e);
        } catch (S) {
          G(e, e.return, S);
        }
        try {
          cr(5, e, e.return);
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 1:
      Re(t, e), Be(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Be(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          hr(i, "");
        } catch (S) {
          G(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && a.type === "radio" && a.name != null && Hc(i, a),
              bo(l, o);
            var u = bo(l, a);
            for (o = 0; o < s.length; o += 2) {
              var f = s[o],
                m = s[o + 1];
              f === "style"
                ? Xc(i, m)
                : f === "dangerouslySetInnerHTML"
                ? Bc(i, m)
                : f === "children"
                ? hr(i, m)
                : Pl(i, f, m, u);
            }
            switch (l) {
              case "input":
                xo(i, a);
                break;
              case "textarea":
                Wc(i, a);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? Cn(i, !!a.multiple, h, !1)
                  : v !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Cn(i, !!a.multiple, a.defaultValue, !0)
                      : Cn(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[_r] = a;
          } catch (S) {
            G(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          kr(t.containerInfo);
        } catch (S) {
          G(e, e.return, S);
        }
      break;
    case 4:
      Re(t, e), Be(e);
      break;
    case 13:
      Re(t, e),
        Be(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ss = J())),
        r & 4 && Tu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (u = de) || f), Re(t, e), (de = u)) : Re(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (N = e, f = e.child; f !== null; ) {
            for (m = N = f; N !== null; ) {
              switch (((v = N), (h = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  cr(4, v, v.return);
                  break;
                case 1:
                  wn(v, v.return);
                  var k = v.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (S) {
                      G(r, n, S);
                    }
                  }
                  break;
                case 5:
                  wn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ju(m);
                    continue;
                  }
              }
              h !== null ? ((h.return = v), (N = h)) : ju(m);
            }
            f = f.sibling;
          }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                (i = m.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Yc("display", o)));
              } catch (S) {
                G(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (f === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (S) {
                G(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            f === m && (f = null), (m = m.return);
          }
          f === m && (f = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Be(e), r & 4 && Tu(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (hr(i, ""), (r.flags &= -33));
          var a = Ou(e);
          nl(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Ou(e);
          tl(e, l, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function H1(e, t, n) {
  (N = e), Ed(e);
}
function Ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || li;
      if (!o) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || de;
        l = li;
        var u = de;
        if (((li = o), (de = s) && !u))
          for (N = i; N !== null; )
            (o = N),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Mu(i)
                : s !== null
                ? ((s.return = o), (N = s))
                : Mu(i);
        for (; a !== null; ) (N = a), Ed(a), (a = a.sibling);
        (N = i), (li = l), (de = u);
      }
      zu(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (N = a)) : zu(e);
  }
}
function zu(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || ka(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && vu(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vu(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var m = f.dehydrated;
                    m !== null && kr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        de || (t.flags & 512 && el(t));
      } catch (v) {
        G(t, t.return, v);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ju(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Mu(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ka(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, i, s);
            }
          }
          var a = t.return;
          try {
            el(t);
          } catch (s) {
            G(t, a, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            el(t);
          } catch (s) {
            G(t, o, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (N = l);
      break;
    }
    N = t.return;
  }
}
var W1 = Math.ceil,
  ea = ct.ReactCurrentDispatcher,
  os = ct.ReactCurrentOwner,
  je = ct.ReactCurrentBatchConfig,
  R = 0,
  oe = null,
  ee = null,
  se = 0,
  Ee = 0,
  kn = Rt(0),
  ne = 0,
  Tr = null,
  en = 0,
  xa = 0,
  ls = 0,
  fr = null,
  ye = null,
  ss = 0,
  Rn = 1 / 0,
  Ze = null,
  ta = !1,
  rl = null,
  Nt = null,
  si = !1,
  kt = null,
  na = 0,
  dr = 0,
  il = null,
  Pi = -1,
  Oi = 0;
function ve() {
  return R & 6 ? J() : Pi !== -1 ? Pi : (Pi = J());
}
function At(e) {
  return e.mode & 1
    ? R & 2 && se !== 0
      ? se & -se
      : b1.transition !== null
      ? (Oi === 0 && (Oi = of()), Oi)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mf(e.type))),
        e)
    : 1;
}
function We(e, t, n, r) {
  if (50 < dr) throw ((dr = 0), (il = null), Error(x(185)));
  Dr(e, n, r),
    (!(R & 2) || e !== oe) &&
      (e === oe && (!(R & 2) && (xa |= n), ne === 4 && gt(e, se)),
      Se(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((Rn = J() + 500), ga && Dt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  bp(e, t);
  var r = Fi(e, e === oe ? se : 0);
  if (r === 0)
    n !== null && Ws(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ws(n), t === 1))
      e.tag === 0 ? _1(Iu.bind(null, e)) : zf(Iu.bind(null, e)),
        x1(function () {
          !(R & 6) && Dt();
        }),
        (n = null);
    else {
      switch (lf(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = rf;
          break;
        case 16:
          n = Di;
          break;
        case 536870912:
          n = af;
          break;
        default:
          n = Di;
      }
      n = Td(n, Cd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cd(e, t) {
  if (((Pi = -1), (Oi = 0), R & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n) return null;
  var r = Fi(e, e === oe ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ra(e, r);
  else {
    t = r;
    var i = R;
    R |= 2;
    var a = bd();
    (oe !== e || se !== t) && ((Ze = null), (Rn = J() + 500), Qt(e, t));
    do
      try {
        Y1();
        break;
      } catch (l) {
        _d(e, l);
      }
    while (1);
    Xl(),
      (ea.current = a),
      (R = i),
      ee !== null ? (t = 0) : ((oe = null), (se = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = To(e)), i !== 0 && ((r = i), (t = al(e, i)))), t === 1)
    )
      throw ((n = Tr), Qt(e, 0), gt(e, r), Se(e, J()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !V1(i) &&
          ((t = ra(e, r)),
          t === 2 && ((a = To(e)), a !== 0 && ((r = a), (t = al(e, a)))),
          t === 1))
      )
        throw ((n = Tr), Qt(e, 0), gt(e, r), Se(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Ht(e, ye, Ze);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = ss + 500 - J()), 10 < t))
          ) {
            if (Fi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Fo(Ht.bind(null, e, ye, Ze), t);
            break;
          }
          Ht(e, ye, Ze);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - He(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * W1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fo(Ht.bind(null, e, ye, Ze), r);
            break;
          }
          Ht(e, ye, Ze);
          break;
        case 5:
          Ht(e, ye, Ze);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? Cd.bind(null, e) : null;
}
function al(e, t) {
  var n = fr;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = ra(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && ol(t)),
    e
  );
}
function ol(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function V1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Ve(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gt(e, t) {
  for (
    t &= ~ls,
      t &= ~xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Iu(e) {
  if (R & 6) throw Error(x(327));
  Pn();
  var t = Fi(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = ra(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = To(e);
    r !== 0 && ((t = r), (n = al(e, r)));
  }
  if (n === 1) throw ((n = Tr), Qt(e, 0), gt(e, t), Se(e, J()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, ye, Ze),
    Se(e, J()),
    null
  );
}
function us(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((Rn = J() + 500), ga && Dt());
  }
}
function tn(e) {
  kt !== null && kt.tag === 0 && !(R & 6) && Pn();
  var t = R;
  R |= 1;
  var n = je.transition,
    r = D;
  try {
    if (((je.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (je.transition = n), (R = t), !(R & 6) && Dt();
  }
}
function cs() {
  (Ee = kn.current), H(kn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), k1(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Vl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vi();
          break;
        case 3:
          In(), H(ke), H(me), Jl();
          break;
        case 5:
          ql(r);
          break;
        case 4:
          In();
          break;
        case 13:
          H(B);
          break;
        case 19:
          H(B);
          break;
        case 10:
          Kl(r.type._context);
          break;
        case 22:
        case 23:
          cs();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (ee = e = Pt(e.current, null)),
    (se = Ee = t),
    (ne = 0),
    (Tr = null),
    (ls = xa = en = 0),
    (ye = fr = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function _d(e, t) {
  do {
    var n = ee;
    try {
      if ((Xl(), (bi.current = Ji), qi)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        qi = !1;
      }
      if (
        ((Jt = 0),
        (ae = te = X = null),
        (ur = !1),
        (Ar = 0),
        (os.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Tr = t), (ee = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          l = n,
          s = t;
        if (
          ((t = se),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = l,
            m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var h = Su(o);
          if (h !== null) {
            (h.flags &= -257),
              Eu(h, o, l, a, t),
              h.mode & 1 && xu(a, u, t),
              (t = h),
              (s = u);
            var k = t.updateQueue;
            if (k === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              xu(a, u, t), fs();
              break e;
            }
            s = Error(x(426));
          }
        } else if (V && l.mode & 1) {
          var O = Su(o);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              Eu(O, o, l, a, t),
              Bl(Ln(s, l));
            break e;
          }
        }
        (a = s = Ln(s, l)),
          ne !== 4 && (ne = 2),
          fr === null ? (fr = [a]) : fr.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var d = sd(a, s, t);
              pu(a, d);
              break e;
            case 1:
              l = s;
              var c = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(p))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var y = ud(a, l, t);
                pu(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Ad(n);
    } catch (E) {
      (t = E), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function bd() {
  var e = ea.current;
  return (ea.current = Ji), e === null ? Ji : e;
}
function fs() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || (!(en & 268435455) && !(xa & 268435455)) || gt(oe, se);
}
function ra(e, t) {
  var n = R;
  R |= 2;
  var r = bd();
  (oe !== e || se !== t) && ((Ze = null), Qt(e, t));
  do
    try {
      B1();
      break;
    } catch (i) {
      _d(e, i);
    }
  while (1);
  if ((Xl(), (R = n), (ea.current = r), ee !== null)) throw Error(x(261));
  return (oe = null), (se = 0), ne;
}
function B1() {
  for (; ee !== null; ) Nd(ee);
}
function Y1() {
  for (; ee !== null && !gp(); ) Nd(ee);
}
function Nd(e) {
  var t = Od(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ad(e) : (ee = t),
    (os.current = null);
}
function Ad(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = F1(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = D1(n, t, Ee)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Ht(e, t, n) {
  var r = D,
    i = je.transition;
  try {
    (je.transition = null), (D = 1), X1(e, t, n, r);
  } finally {
    (je.transition = i), (D = r);
  }
  return null;
}
function X1(e, t, n, r) {
  do Pn();
  while (kt !== null);
  if (R & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Np(e, a),
    e === oe && ((ee = oe = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      si ||
      ((si = !0),
      Td(Di, function () {
        return Pn(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = je.transition), (je.transition = null);
    var o = D;
    D = 1;
    var l = R;
    (R |= 4),
      (os.current = null),
      $1(e, n),
      Sd(n, e),
      m1(Ro),
      (Ui = !!Lo),
      (Ro = Lo = null),
      (e.current = n),
      H1(n),
      yp(),
      (R = l),
      (D = o),
      (je.transition = a);
  } else e.current = n;
  if (
    (si && ((si = !1), (kt = e), (na = i)),
    (a = e.pendingLanes),
    a === 0 && (Nt = null),
    xp(n.stateNode),
    Se(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ta) throw ((ta = !1), (e = rl), (rl = null), e);
  return (
    na & 1 && e.tag !== 0 && Pn(),
    (a = e.pendingLanes),
    a & 1 ? (e === il ? dr++ : ((dr = 0), (il = e))) : (dr = 0),
    Dt(),
    null
  );
}
function Pn() {
  if (kt !== null) {
    var e = lf(na),
      t = je.transition,
      n = D;
    try {
      if (((je.transition = null), (D = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (na = 0), R & 6)) throw Error(x(331));
        var i = R;
        for (R |= 4, N = e.current; N !== null; ) {
          var a = N,
            o = a.child;
          if (N.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (N = u; N !== null; ) {
                  var f = N;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cr(8, f, a);
                  }
                  var m = f.child;
                  if (m !== null) (m.return = f), (N = m);
                  else
                    for (; N !== null; ) {
                      f = N;
                      var v = f.sibling,
                        h = f.return;
                      if ((wd(f), f === u)) {
                        N = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = h), (N = v);
                        break;
                      }
                      N = h;
                    }
                }
              }
              var k = a.alternate;
              if (k !== null) {
                var S = k.child;
                if (S !== null) {
                  k.child = null;
                  do {
                    var O = S.sibling;
                    (S.sibling = null), (S = O);
                  } while (S !== null);
                }
              }
              N = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (N = o);
          else
            e: for (; N !== null; ) {
              if (((a = N), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    cr(9, a, a.return);
                }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (N = d);
                break e;
              }
              N = a.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          o = N;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (N = p);
          else
            e: for (o = c; N !== null; ) {
              if (((l = N), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ka(9, l);
                  }
                } catch (E) {
                  G(l, l.return, E);
                }
              if (l === o) {
                N = null;
                break e;
              }
              var y = l.sibling;
              if (y !== null) {
                (y.return = l.return), (N = y);
                break e;
              }
              N = l.return;
            }
        }
        if (
          ((R = i), Dt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(da, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (je.transition = t);
    }
  }
  return !1;
}
function Lu(e, t, n) {
  (t = Ln(n, t)),
    (t = sd(e, t, 1)),
    (e = bt(e, t, 1)),
    (t = ve()),
    e !== null && (Dr(e, 1, t), Se(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Lu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = Ln(n, e)),
            (e = ud(t, e, 1)),
            (t = bt(t, e, 1)),
            (e = ve()),
            t !== null && (Dr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function K1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (se & n) === n &&
      (ne === 4 || (ne === 3 && (se & 130023424) === se && 500 > J() - ss)
        ? Qt(e, 0)
        : (ls |= n)),
    Se(e, t);
}
function Pd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qr), (qr <<= 1), !(qr & 130023424) && (qr = 4194304))
      : (t = 1));
  var n = ve();
  (e = at(e, t)), e !== null && (Dr(e, t, n), Se(e, n));
}
function Q1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pd(e, n);
}
function G1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Pd(e, n);
}
var Od;
Od = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), R1(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), V && t.flags & 1048576 && jf(t, Xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ai(e, t), (e = t.pendingProps);
      var i = zn(t, me.current);
      An(t, n), (i = ts(null, t, r, e, i, n));
      var a = ns();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((a = !0), Bi(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gl(t),
            (i.updater = ya),
            (t.stateNode = i),
            (i._reactInternals = t),
            Yo(t, r, e, n),
            (t = Qo(null, t, r, !0, a, n)))
          : ((t.tag = 0), V && a && Wl(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ai(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = q1(r)),
          (e = De(r, e)),
          i)
        ) {
          case 0:
            t = Ko(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = Cu(null, t, r, e, n);
            break e;
          case 14:
            t = _u(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        Ko(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        bu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((md(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          Rf(e, t),
          Gi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Ln(Error(x(423)), t)), (t = Nu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ln(Error(x(424)), t)), (t = Nu(e, t, r, n, i));
            break e;
          } else
            for (
              Ce = _t(t.stateNode.containerInfo.firstChild),
                _e = t,
                V = !0,
                Ue = null,
                n = $f(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jn(), r === i)) {
            t = ot(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hf(t),
        e === null && Wo(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Do(r, i) ? (o = null) : a !== null && Do(r, a) && (t.flags |= 32),
        dd(e, t),
        pe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Wo(t), null;
    case 13:
      return pd(e, t, n);
    case 4:
      return (
        Zl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        Cu(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          F(Ki, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (Ve(a.value, o)) {
            if (a.children === i.children && !ke.current) {
              t = ot(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (a.tag === 1) {
                      (s = nt(-1, n & -n)), (s.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (a.lanes |= n),
                      (s = a.alternate),
                      s !== null && (s.lanes |= n),
                      Vo(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Vo(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        An(t, n),
        (i = Me(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = De(r, t.pendingProps)),
        (i = De(r.type, i)),
        _u(e, t, r, i, n)
      );
    case 15:
      return cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        Ai(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Bi(t)) : (e = !1),
        An(t, n),
        Ff(t, r, i),
        Yo(t, r, i, n),
        Qo(null, t, r, !0, e, n)
      );
    case 19:
      return vd(e, t, n);
    case 22:
      return fd(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Td(e, t) {
  return nf(e, t);
}
function Z1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new Z1(e, t, n, r);
}
function ds(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function q1(e) {
  if (typeof e == "function") return ds(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Tl)) return 11;
    if (e === zl) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ti(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) ds(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case cn:
        return Gt(n.children, i, a, t);
      case Ol:
        (o = 8), (i |= 8);
        break;
      case ho:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = ho), (e.lanes = a), e
        );
      case go:
        return (e = ze(13, n, t, i)), (e.elementType = go), (e.lanes = a), e;
      case yo:
        return (e = ze(19, n, t, i)), (e.elementType = yo), (e.lanes = a), e;
      case Fc:
        return Sa(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rc:
              o = 10;
              break e;
            case Dc:
              o = 9;
              break e;
            case Tl:
              o = 11;
              break e;
            case zl:
              o = 14;
              break e;
            case pt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Gt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Sa(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Fc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function io(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function ao(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function J1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fa(0)),
    (this.expirationTimes = Fa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ms(e, t, n, r, i, a, o, l, s) {
  return (
    (e = new J1(e, t, n, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = ze(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gl(a),
    e
  );
}
function ev(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zd(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return Tf(e, n, t);
  }
  return t;
}
function jd(e, t, n, r, i, a, o, l, s) {
  return (
    (e = ms(n, r, !0, e, i, a, o, l, s)),
    (e.context = zd(null)),
    (n = e.current),
    (r = ve()),
    (i = At(n)),
    (a = nt(r, i)),
    (a.callback = t ?? null),
    bt(n, a, i),
    (e.current.lanes = i),
    Dr(e, i, r),
    Se(e, r),
    e
  );
}
function Ea(e, t, n, r) {
  var i = t.current,
    a = ve(),
    o = At(i);
  return (
    (n = zd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nt(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(i, t, o)),
    e !== null && (We(e, i, o, a), _i(e, i, o)),
    o
  );
}
function ia(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ru(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ps(e, t) {
  Ru(e, t), (e = e.alternate) && Ru(e, t);
}
function tv() {
  return null;
}
var Md =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vs(e) {
  this._internalRoot = e;
}
Ca.prototype.render = vs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Ea(e, t, null, null);
};
Ca.prototype.unmount = vs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function () {
      Ea(null, e, null, null);
    }),
      (t[it] = null);
  }
};
function Ca(e) {
  this._internalRoot = e;
}
Ca.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && df(e);
  }
};
function hs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _a(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Du() {}
function nv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = ia(o);
        a.call(u);
      };
    }
    var o = jd(t, r, e, 0, null, !1, !1, "", Du);
    return (
      (e._reactRootContainer = o),
      (e[it] = o.current),
      Er(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ia(s);
      l.call(u);
    };
  }
  var s = ms(e, 0, !1, null, null, !1, !1, "", Du);
  return (
    (e._reactRootContainer = s),
    (e[it] = s.current),
    Er(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      Ea(t, s, n, r);
    }),
    s
  );
}
function ba(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = ia(o);
        l.call(s);
      };
    }
    Ea(t, o, e, i);
  } else o = nv(n, t, e, i, r);
  return ia(o);
}
sf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 &&
          (Il(t, n | 1), Se(t, J()), !(R & 6) && ((Rn = J() + 500), Dt()));
      }
      break;
    case 13:
      tn(function () {
        var r = at(e, 1);
        if (r !== null) {
          var i = ve();
          We(r, e, 1, i);
        }
      }),
        ps(e, 1);
  }
};
Ll = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = ve();
      We(t, e, 134217728, n);
    }
    ps(e, 134217728);
  }
};
uf = function (e) {
  if (e.tag === 13) {
    var t = At(e),
      n = at(e, t);
    if (n !== null) {
      var r = ve();
      We(n, e, t, r);
    }
    ps(e, t);
  }
};
cf = function () {
  return D;
};
ff = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ha(r);
            if (!i) throw Error(x(90));
            $c(r), xo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Wc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Cn(e, !!n.multiple, t, !1);
  }
};
Gc = us;
Zc = tn;
var rv = { usingClientEntryPoint: !1, Events: [Ur, pn, ha, Kc, Qc, us] },
  qn = {
    findFiberByHostInstance: Vt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  iv = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ef(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || tv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ui.isDisabled && ui.supportsFiber)
    try {
      (da = ui.inject(iv)), (Qe = ui);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rv;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hs(t)) throw Error(x(200));
  return ev(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!hs(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = Md;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ms(e, 1, !1, null, null, n, !1, r, i)),
    (e[it] = t.current),
    Er(e.nodeType === 8 ? e.parentNode : e),
    new vs(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = ef(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return tn(e);
};
Ne.hydrate = function (e, t, n) {
  if (!_a(t)) throw Error(x(200));
  return ba(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!hs(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = Md;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = jd(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[it] = t.current),
    Er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ca(t);
};
Ne.render = function (e, t, n) {
  if (!_a(t)) throw Error(x(200));
  return ba(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!_a(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (tn(function () {
        ba(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[it] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = us;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_a(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return ba(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Id() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Id);
    } catch (e) {
      console.error(e);
    }
}
Id(), (zc.exports = Ne);
var av = zc.exports,
  Fu = av;
(po.createRoot = Fu.createRoot), (po.hydrateRoot = Fu.hydrateRoot);
var Ld = { exports: {} },
  ov = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  lv = ov,
  sv = lv;
function Rd() {}
function Dd() {}
Dd.resetWarningCache = Rd;
var uv = function () {
  function e(r, i, a, o, l, s) {
    if (s !== sv) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Dd,
    resetWarningCache: Rd,
  };
  return (n.PropTypes = n), n;
};
Ld.exports = uv();
var cv = Ld.exports;
const T = ca(cv),
  fv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAB4CAMAAACJp+2jAAAAPFBMVEXRBSV+RmGHVjDZP04CmcMAnsYao8YIvjssrM8/sM5Kt9VbvtZtxdyGz+Kb1+e34u3L6/Ph9Pf2+/7+//xC0j7yAAACHElEQVR42u3Z25KDIAwGYHdX2HAUyPu/68rUCrVW96pF5s9VJw4zfoWkmg5jRzEAA8xHMULK47Vi/7NoDUMuJA6ODm/Ml4/S7aZbwFBg5kDHK41OxtywpKeo1Zq2WraDcYk5mbOVOnFa9kNMzFE+pRvA5DvjqM6XhhTXU5YKfirpz2OyJdE/lrrR3Y+TUaVo/OioFYybLaz7aM1qrhf2Yx+Y3MeS7AOj8yFzYx+YXP0sO8HkioljHxjis/IXVdutf4tepD+JOS8ZU1FDeXIzU5WWbWBsxhw8yKiQUliu+8hxEvc0xzotr4DJ59CULh5FSduSTqKJnTFnx8yEab0cXCxp76u0bAKjzhoAVaVO4/r29pgWbWBkxky9vDZf+mlmi3FnHeBKGBGv/AiwfWq2V96ap5ezXDXb3vqPmVKboyaZD1p4vKGqWZPdTbc6aqL42J6FUkmr216RmgItvyhz2qhl1EQ+rmma0+2MmuTmpNkyPMqX4nLX5nXaN7Mz817kwVm0VRntzpRejZo4jQ1hcgnk79redkf4MlOyiuqZ0jpq0tWoSbQzalo9xnl/L4qrtuYrBzDAvAPz1VEMXcVPRzFwRwEMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAA8y7MF39dd5VfHcUw29HAQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADzJviD9WipDKqLa1YAAAAAElFTkSuQmCC",
  dv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAB4CAMAAACJp+2jAAAAWlBMVEU9O3CIKUeyIDRCQXFOTHx2UXZYWYSZVm9nZIycYXxwcZaga4TMZHN8fJ7QdX6LiKeUlLHVh5Ccnbevr8W8ucvFx9buy9HT1N7f3+fy3eDy7/T77e75+v3+//wHa6wVAAADP0lEQVR42u2b7XKbMBAAaUQpVaNK4SMQIr3/a5bYxehkJMtumTszdzOZyUb+wdrE3pGSothhvr3gTHFEGQGu5h8JWaY0/jUFpONUbRKyjBr8i4Kk+3sJVcYMkxv78u8lnahbqBkmu66daFkTjf9Ij3BfGW3tWK5PsLOj8MgNeWScPROuTO1st94tkGSaWu/uXAhXplFlvz7DAcmAPJlGVp23Vpc9AZn5FhOni6rjJPLXmnecgZ92dfsYSUBF53AGXJLqJqXKC/UeKZ9EgqjIVOP8A+2T1blrVhF7ZYrKuS5Brf+GFyciMnpovM9+0z9G+DKndyElCinipPIIXSYZmoAqczs0kWWCtMwnEJqmJyBzIzTdvaH56w1n1rSMh6ZNpOUmUQrNZFpan5SlGJoynZYgJkFolnRDMz8mU0Rkd6buEpRIyyA0KcjAtLwnNAcYmhRk5mC0IB9T5KXlVWiSuM1SoVnfEZokZB4NzSYIzR+vOHMVmiWHJofmTqE5WjetoQmoiZO4Insm3FdGwX1Ka+PkknTOIFyZ2k0gJgGBNRXQZmjiypha+MEoRZCWKSqu13BlxPJV+1QsJMDaTaKxOxOkpexy0zIIzfYTZ8AZk+6t1uVtEkoPU4So5Ew5zDG55iOgec1NEaq+SBIMzTaPniA0Ta+HKHXGT8sEETk6n2+VWsQIZOf8LXykFISOzhvwy9Mk0jKDkGX0g6FpNkMT9+h8moNxuMTk5ADZkNa0jBDuKwNDU4F8VDYjLZfdzp7AVtOclr2/T5mk7ia1HzhzCc3W2zMG1ECqMohGaBYSZGeKYGhKgqEpHwxNRe/oPB2aQ35oUpC5EZp2itBVaJI/Oq+f7ejcdDAt49RAajWpo/NyyccSkFipCEjG1vB3NGFa5tNmaP78jTNLiYzZaZlByKHpp6WZwB7m04WmhKFp/XwMyEFyARVHCU29EK7Mfw5NXBkB/hD+LhIbxP/YwDKBzPcdBu1D0x1oWIZlWIZlWIaezMeBpng50LAMy7AMy7AMy+wq83mg4dBkGZZhGZZhmV1lXg803GYswzIswzIss6vM24GG24xlWIZlWIZldpV5P9Bwm7EMy7AMy7AMy2TOH24ko+fX/DBRAAAAAElFTkSuQmCC",
  mv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAB4AgMAAADDF/UCAAAACVBMVEUdMbnzHB////8ctGWZAAAALklEQVRYw+3LoREAAAgEIJd0Sae026x/0Kn5K8dxHMdxsg8AwNV/juM4juNknwXSzfByI4uAAQAAAABJRU5ErkJggg==";
function Uu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uu(Object(n), !0).forEach(function (r) {
          re(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Uu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function aa(e) {
  "@babel/helpers - typeof";
  return (
    (aa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    aa(e)
  );
}
function pv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $u(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function vv(e, t, n) {
  return (
    t && $u(e.prototype, t),
    n && $u(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function re(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function gs(e, t) {
  return gv(e) || wv(e, t) || Fd(e, t) || xv();
}
function Hr(e) {
  return hv(e) || yv(e) || Fd(e) || kv();
}
function hv(e) {
  if (Array.isArray(e)) return ll(e);
}
function gv(e) {
  if (Array.isArray(e)) return e;
}
function yv(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function wv(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      (a = !0), (l = s);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Fd(e, t) {
  if (e) {
    if (typeof e == "string") return ll(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ll(e, t);
  }
}
function ll(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Hu = function () {},
  ys = {},
  Ud = {},
  $d = null,
  Hd = { mark: Hu, measure: Hu };
try {
  typeof window < "u" && (ys = window),
    typeof document < "u" && (Ud = document),
    typeof MutationObserver < "u" && ($d = MutationObserver),
    typeof performance < "u" && (Hd = performance);
} catch {}
var Sv = ys.navigator || {},
  Wu = Sv.userAgent,
  Vu = Wu === void 0 ? "" : Wu,
  jt = ys,
  W = Ud,
  Bu = $d,
  ci = Hd;
jt.document;
var ft =
    !!W.documentElement &&
    !!W.head &&
    typeof W.addEventListener == "function" &&
    typeof W.createElement == "function",
  Wd = ~Vu.indexOf("MSIE") || ~Vu.indexOf("Trident/"),
  fi,
  di,
  mi,
  pi,
  vi,
  lt = "___FONT_AWESOME___",
  sl = 16,
  Vd = "fa",
  Bd = "svg-inline--fa",
  nn = "data-fa-i2svg",
  ul = "data-fa-pseudo-element",
  Ev = "data-fa-pseudo-element-pending",
  ws = "data-prefix",
  ks = "data-icon",
  Yu = "fontawesome-i2svg",
  Cv = "async",
  _v = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Yd = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  $ = "classic",
  Z = "sharp",
  xs = [$, Z];
function Wr(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[$];
    },
  });
}
var zr = Wr(
    ((fi = {}),
    re(fi, $, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    re(fi, Z, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
    }),
    fi),
  ),
  jr = Wr(
    ((di = {}),
    re(di, $, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    re(di, Z, { solid: "fass", regular: "fasr", light: "fasl" }),
    di),
  ),
  Mr = Wr(
    ((mi = {}),
    re(mi, $, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    re(mi, Z, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }),
    mi),
  ),
  bv = Wr(
    ((pi = {}),
    re(pi, $, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    re(pi, Z, { "fa-solid": "fass", "fa-regular": "fasr", "fa-light": "fasl" }),
    pi),
  ),
  Nv = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
  Xd = "fa-layers-text",
  Av =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Pv = Wr(
    ((vi = {}),
    re(vi, $, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    re(vi, Z, { 900: "fass", 400: "fasr", 300: "fasl" }),
    vi),
  ),
  Kd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Ov = Kd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Tv = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Xt = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Ir = new Set();
Object.keys(jr[$]).map(Ir.add.bind(Ir));
Object.keys(jr[Z]).map(Ir.add.bind(Ir));
var zv = []
    .concat(xs, Hr(Ir), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Xt.GROUP,
      Xt.SWAP_OPACITY,
      Xt.PRIMARY,
      Xt.SECONDARY,
    ])
    .concat(
      Kd.map(function (e) {
        return "".concat(e, "x");
      }),
    )
    .concat(
      Ov.map(function (e) {
        return "w-".concat(e);
      }),
    ),
  mr = jt.FontAwesomeConfig || {};
function jv(e) {
  var t = W.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function Mv(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (W && typeof W.querySelector == "function") {
  var Iv = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  Iv.forEach(function (e) {
    var t = gs(e, 2),
      n = t[0],
      r = t[1],
      i = Mv(jv(n));
    i != null && (mr[r] = i);
  });
}
var Qd = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Vd,
  replacementClass: Bd,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
mr.familyPrefix && (mr.cssPrefix = mr.familyPrefix);
var Dn = b(b({}, Qd), mr);
Dn.autoReplaceSvg || (Dn.observeMutations = !1);
var P = {};
Object.keys(Qd).forEach(function (e) {
  Object.defineProperty(P, e, {
    enumerable: !0,
    set: function (n) {
      (Dn[e] = n),
        pr.forEach(function (r) {
          return r(P);
        });
    },
    get: function () {
      return Dn[e];
    },
  });
});
Object.defineProperty(P, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (Dn.cssPrefix = t),
      pr.forEach(function (n) {
        return n(P);
      });
  },
  get: function () {
    return Dn.cssPrefix;
  },
});
jt.FontAwesomeConfig = P;
var pr = [];
function Lv(e) {
  return (
    pr.push(e),
    function () {
      pr.splice(pr.indexOf(e), 1);
    }
  );
}
var mt = sl,
  Ke = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function Rv(e) {
  if (!(!e || !ft)) {
    var t = W.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = W.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return W.head.insertBefore(t, r), e;
  }
}
var Dv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Lr() {
  for (var e = 12, t = ""; e-- > 0; ) t += Dv[(Math.random() * 62) | 0];
  return t;
}
function Hn(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Ss(e) {
  return e.classList
    ? Hn(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function Gd(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Fv(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(Gd(e[n]), '" ');
    }, "")
    .trim();
}
function Na(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Es(e) {
  return (
    e.size !== Ke.size ||
    e.x !== Ke.x ||
    e.y !== Ke.y ||
    e.rotate !== Ke.rotate ||
    e.flipX ||
    e.flipY
  );
}
function Uv(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(a, " ").concat(o, " ").concat(l) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: s, path: u };
}
function $v(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? sl : n,
    i = e.height,
    a = i === void 0 ? sl : i,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    s = "";
  return (
    l && Wd
      ? (s += "translate("
          .concat(t.x / mt - r / 2, "em, ")
          .concat(t.y / mt - a / 2, "em) "))
      : l
      ? (s += "translate(calc(-50% + "
          .concat(t.x / mt, "em), calc(-50% + ")
          .concat(t.y / mt, "em)) "))
      : (s += "translate(".concat(t.x / mt, "em, ").concat(t.y / mt, "em) ")),
    (s += "scale("
      .concat((t.size / mt) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / mt) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var Hv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Zd() {
  var e = Vd,
    t = Bd,
    n = P.cssPrefix,
    r = P.replacementClass,
    i = Hv;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(a, ".".concat(n, "-"))
      .replace(o, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return i;
}
var Xu = !1;
function oo() {
  P.autoAddCss && !Xu && (Rv(Zd()), (Xu = !0));
}
var Wv = {
    mixout: function () {
      return { dom: { css: Zd, insertCss: oo } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          oo();
        },
        beforeI2svg: function () {
          oo();
        },
      };
    },
  },
  st = jt || {};
st[lt] || (st[lt] = {});
st[lt].styles || (st[lt].styles = {});
st[lt].hooks || (st[lt].hooks = {});
st[lt].shims || (st[lt].shims = []);
var $e = st[lt],
  qd = [],
  Vv = function e() {
    W.removeEventListener("DOMContentLoaded", e),
      (oa = 1),
      qd.map(function (t) {
        return t();
      });
  },
  oa = !1;
ft &&
  ((oa = (W.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    W.readyState,
  )),
  oa || W.addEventListener("DOMContentLoaded", Vv));
function Bv(e) {
  ft && (oa ? setTimeout(e, 0) : qd.push(e));
}
function Vr(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == "string"
    ? Gd(e)
    : "<"
        .concat(t, " ")
        .concat(Fv(r), ">")
        .concat(a.map(Vr).join(""), "</")
        .concat(t, ">");
}
function Ku(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var Yv = function (t, n) {
    return function (r, i, a, o) {
      return t.call(n, r, i, a, o);
    };
  },
  lo = function (t, n, r, i) {
    var a = Object.keys(t),
      o = a.length,
      l = i !== void 0 ? Yv(n, i) : n,
      s,
      u,
      f;
    for (
      r === void 0 ? ((s = 1), (f = t[a[0]])) : ((s = 0), (f = r));
      s < o;
      s++
    )
      (u = a[s]), (f = l(f, t[u], u, t));
    return f;
  };
function Xv(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function cl(e) {
  var t = Xv(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Kv(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Qu(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function fl(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = Qu(t);
  typeof $e.hooks.addPack == "function" && !i
    ? $e.hooks.addPack(e, Qu(t))
    : ($e.styles[e] = b(b({}, $e.styles[e] || {}), a)),
    e === "fas" && fl("fa", t);
}
var hi,
  gi,
  yi,
  xn = $e.styles,
  Qv = $e.shims,
  Gv =
    ((hi = {}),
    re(hi, $, Object.values(Mr[$])),
    re(hi, Z, Object.values(Mr[Z])),
    hi),
  Cs = null,
  Jd = {},
  em = {},
  tm = {},
  nm = {},
  rm = {},
  Zv =
    ((gi = {}),
    re(gi, $, Object.keys(zr[$])),
    re(gi, Z, Object.keys(zr[Z])),
    gi);
function qv(e) {
  return ~zv.indexOf(e);
}
function Jv(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !qv(i) ? i : null;
}
var im = function () {
  var t = function (a) {
    return lo(
      xn,
      function (o, l, s) {
        return (o[s] = lo(l, a, {})), o;
      },
      {},
    );
  };
  (Jd = t(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var l = a[2].filter(function (s) {
        return typeof s == "number";
      });
      l.forEach(function (s) {
        i[s.toString(16)] = o;
      });
    }
    return i;
  })),
    (em = t(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var l = a[2].filter(function (s) {
          return typeof s == "string";
        });
        l.forEach(function (s) {
          i[s] = o;
        });
      }
      return i;
    })),
    (rm = t(function (i, a, o) {
      var l = a[2];
      return (
        (i[o] = o),
        l.forEach(function (s) {
          i[s] = o;
        }),
        i
      );
    }));
  var n = "far" in xn || P.autoFetchSvg,
    r = lo(
      Qv,
      function (i, a) {
        var o = a[0],
          l = a[1],
          s = a[2];
        return (
          l === "far" && !n && (l = "fas"),
          typeof o == "string" && (i.names[o] = { prefix: l, iconName: s }),
          typeof o == "number" &&
            (i.unicodes[o.toString(16)] = { prefix: l, iconName: s }),
          i
        );
      },
      { names: {}, unicodes: {} },
    );
  (tm = r.names),
    (nm = r.unicodes),
    (Cs = Aa(P.styleDefault, { family: P.familyDefault }));
};
Lv(function (e) {
  Cs = Aa(e.styleDefault, { family: P.familyDefault });
});
im();
function _s(e, t) {
  return (Jd[e] || {})[t];
}
function e0(e, t) {
  return (em[e] || {})[t];
}
function Kt(e, t) {
  return (rm[e] || {})[t];
}
function am(e) {
  return tm[e] || { prefix: null, iconName: null };
}
function t0(e) {
  var t = nm[e],
    n = _s("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Mt() {
  return Cs;
}
var bs = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Aa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? $ : n,
    i = zr[r][e],
    a = jr[r][e] || jr[r][i],
    o = e in $e.styles ? e : null;
  return a || o || null;
}
var Gu =
  ((yi = {}), re(yi, $, Object.keys(Mr[$])), re(yi, Z, Object.keys(Mr[Z])), yi);
function Pa(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}),
      re(t, $, "".concat(P.cssPrefix, "-").concat($)),
      re(t, Z, "".concat(P.cssPrefix, "-").concat(Z)),
      t),
    o = null,
    l = $;
  (e.includes(a[$]) ||
    e.some(function (u) {
      return Gu[$].includes(u);
    })) &&
    (l = $),
    (e.includes(a[Z]) ||
      e.some(function (u) {
        return Gu[Z].includes(u);
      })) &&
      (l = Z);
  var s = e.reduce(function (u, f) {
    var m = Jv(P.cssPrefix, f);
    if (
      (xn[f]
        ? ((f = Gv[l].includes(f) ? bv[l][f] : f), (o = f), (u.prefix = f))
        : Zv[l].indexOf(f) > -1
        ? ((o = f), (u.prefix = Aa(f, { family: l })))
        : m
        ? (u.iconName = m)
        : f !== P.replacementClass &&
          f !== a[$] &&
          f !== a[Z] &&
          u.rest.push(f),
      !i && u.prefix && u.iconName)
    ) {
      var v = o === "fa" ? am(u.iconName) : {},
        h = Kt(u.prefix, u.iconName);
      v.prefix && (o = null),
        (u.iconName = v.iconName || h || u.iconName),
        (u.prefix = v.prefix || u.prefix),
        u.prefix === "far" &&
          !xn.far &&
          xn.fas &&
          !P.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, bs());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix &&
      l === Z &&
      (xn.fass || P.autoFetchSvg) &&
      ((s.prefix = "fass"),
      (s.iconName = Kt(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === "fa" || o === "fa") && (s.prefix = Mt() || "fas"),
    s
  );
}
var n0 = (function () {
    function e() {
      pv(this, e), (this.definitions = {});
    }
    return (
      vv(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (n.definitions[l] = b(b({}, n.definitions[l] || {}), o[l])),
                fl(l, o[l]);
              var s = Mr[$][l];
              s && fl(s, o[l]), im();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  l = o.prefix,
                  s = o.iconName,
                  u = o.icon,
                  f = u[2];
                n[l] || (n[l] = {}),
                  f.length > 0 &&
                    f.forEach(function (m) {
                      typeof m == "string" && (n[l][m] = u);
                    }),
                  (n[l][s] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Zu = [],
  Sn = {},
  On = {},
  r0 = Object.keys(On);
function i0(e, t) {
  var n = t.mixoutsTo;
  return (
    (Zu = e),
    (Sn = {}),
    Object.keys(On).forEach(function (r) {
      r0.indexOf(r) === -1 && delete On[r];
    }),
    Zu.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == "function" && (n[o] = i[o]),
            aa(i[o]) === "object" &&
              Object.keys(i[o]).forEach(function (l) {
                n[o] || (n[o] = {}), (n[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          Sn[o] || (Sn[o] = []), Sn[o].push(a[o]);
        });
      }
      r.provides && r.provides(On);
    }),
    n
  );
}
function dl(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var a = Sn[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function rn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = Sn[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function ut() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return On[e] ? On[e].apply(null, t) : void 0;
}
function ml(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || Mt();
  if (t)
    return (t = Kt(n, t) || t), Ku(om.definitions, n, t) || Ku($e.styles, n, t);
}
var om = new n0(),
  a0 = function () {
    (P.autoReplaceSvg = !1), (P.observeMutations = !1), rn("noAuto");
  },
  o0 = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ft
        ? (rn("beforeI2svg", t), ut("pseudoElements2svg", t), ut("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      P.autoReplaceSvg === !1 && (P.autoReplaceSvg = !0),
        (P.observeMutations = !0),
        Bv(function () {
          s0({ autoReplaceSvgRoot: n }), rn("watch", t);
        });
    },
  },
  l0 = {
    icon: function (t) {
      if (t === null) return null;
      if (aa(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Kt(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = Aa(t[0]);
        return { prefix: r, iconName: Kt(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(P.cssPrefix, "-")) > -1 || t.match(Nv))
      ) {
        var i = Pa(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || Mt(),
          iconName: Kt(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var a = Mt();
        return { prefix: a, iconName: Kt(a, t) || t };
      }
    },
  },
  Pe = {
    noAuto: a0,
    config: P,
    dom: o0,
    parse: l0,
    library: om,
    findIconDefinition: ml,
    toHtml: Vr,
  },
  s0 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? W : n;
    (Object.keys($e.styles).length > 0 || P.autoFetchSvg) &&
      ft &&
      P.autoReplaceSvg &&
      Pe.dom.i2svg({ node: r });
  };
function Oa(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return Vr(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (ft) {
          var r = W.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function u0(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (Es(o) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 };
    i.style = Na(
      b(
        b({}, a),
        {},
        {
          "transform-origin": ""
            .concat(u.x + o.x / 16, "em ")
            .concat(u.y + o.y / 16, "em"),
        },
      ),
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function c0(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? "".concat(t, "-").concat(P.cssPrefix, "-").concat(n) : a;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: b(b({}, i), {}, { id: o }), children: r },
      ],
    },
  ];
}
function Ns(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    l = e.symbol,
    s = e.title,
    u = e.maskId,
    f = e.titleId,
    m = e.extra,
    v = e.watchable,
    h = v === void 0 ? !1 : v,
    k = r.found ? r : n,
    S = k.width,
    O = k.height,
    d = i === "fak",
    c = [P.replacementClass, a ? "".concat(P.cssPrefix, "-").concat(a) : ""]
      .filter(function (I) {
        return m.classes.indexOf(I) === -1;
      })
      .filter(function (I) {
        return I !== "" || !!I;
      })
      .concat(m.classes)
      .join(" "),
    p = {
      children: [],
      attributes: b(
        b({}, m.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": a,
          class: c,
          role: m.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(S, " ").concat(O),
        },
      ),
    },
    y =
      d && !~m.classes.indexOf("fa-fw")
        ? { width: "".concat((S / O) * 16 * 0.0625, "em") }
        : {};
  h && (p.attributes[nn] = ""),
    s &&
      (p.children.push({
        tag: "title",
        attributes: {
          id: p.attributes["aria-labelledby"] || "title-".concat(f || Lr()),
        },
        children: [s],
      }),
      delete p.attributes.title);
  var E = b(
      b({}, p),
      {},
      {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: u,
        transform: o,
        symbol: l,
        styles: b(b({}, y), m.styles),
      },
    ),
    w =
      r.found && n.found
        ? ut("generateAbstractMask", E) || { children: [], attributes: {} }
        : ut("generateAbstractIcon", E) || { children: [], attributes: {} },
    C = w.children,
    _ = w.attributes;
  return (E.children = C), (E.attributes = _), l ? c0(E) : u0(E);
}
function qu(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    u = b(
      b(b({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(" ") },
    );
  s && (u[nn] = "");
  var f = b({}, o.styles);
  Es(i) &&
    ((f.transform = $v({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (f["-webkit-transform"] = f.transform));
  var m = Na(f);
  m.length > 0 && (u.style = m);
  var v = [];
  return (
    v.push({ tag: "span", attributes: u, children: [t] }),
    a &&
      v.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }),
    v
  );
}
function f0(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = b(
      b(b({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") },
    ),
    a = Na(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    o
  );
}
var so = $e.styles;
function pl(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = gs(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(P.cssPrefix, "-").concat(Xt.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(P.cssPrefix, "-").concat(Xt.SECONDARY),
                fill: "currentColor",
                d: a[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(P.cssPrefix, "-").concat(Xt.PRIMARY),
                fill: "currentColor",
                d: a[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var d0 = { found: !1, width: 512, height: 512 };
function m0(e, t) {
  !Yd &&
    !P.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'),
    );
}
function vl(e, t) {
  var n = t;
  return (
    t === "fa" && P.styleDefault !== null && (t = Mt()),
    new Promise(function (r, i) {
      if ((ut("missingIconAbstract"), n === "fa")) {
        var a = am(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && so[t] && so[t][e]) {
        var o = so[t][e];
        return r(pl(o));
      }
      m0(e, t),
        r(
          b(
            b({}, d0),
            {},
            {
              icon:
                P.showMissingIcons && e ? ut("missingIconAbstract") || {} : {},
            },
          ),
        );
    })
  );
}
var Ju = function () {},
  hl =
    P.measurePerformance && ci && ci.mark && ci.measure
      ? ci
      : { mark: Ju, measure: Ju },
  rr = 'FA "6.4.2"',
  p0 = function (t) {
    return (
      hl.mark("".concat(rr, " ").concat(t, " begins")),
      function () {
        return lm(t);
      }
    );
  },
  lm = function (t) {
    hl.mark("".concat(rr, " ").concat(t, " ends")),
      hl.measure(
        "".concat(rr, " ").concat(t),
        "".concat(rr, " ").concat(t, " begins"),
        "".concat(rr, " ").concat(t, " ends"),
      );
  },
  As = { begin: p0, end: lm },
  zi = function () {};
function ec(e) {
  var t = e.getAttribute ? e.getAttribute(nn) : null;
  return typeof t == "string";
}
function v0(e) {
  var t = e.getAttribute ? e.getAttribute(ws) : null,
    n = e.getAttribute ? e.getAttribute(ks) : null;
  return t && n;
}
function h0(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(P.replacementClass)
  );
}
function g0() {
  if (P.autoReplaceSvg === !0) return ji.replace;
  var e = ji[P.autoReplaceSvg];
  return e || ji.replace;
}
function y0(e) {
  return W.createElementNS("http://www.w3.org/2000/svg", e);
}
function w0(e) {
  return W.createElement(e);
}
function sm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? y0 : w0) : n;
  if (typeof e == "string") return W.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(sm(o, { ceFn: r }));
    }),
    i
  );
}
function k0(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var ji = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(sm(i), n);
        }),
        n.getAttribute(nn) === null && P.keepOriginalSource)
      ) {
        var r = W.createComment(k0(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~Ss(n).indexOf(P.replacementClass)) return ji.replace(t);
    var i = new RegExp("".concat(P.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(" ").reduce(
        function (l, s) {
          return (
            s === P.replacementClass || s.match(i)
              ? l.toSvg.push(s)
              : l.toNode.push(s),
            l
          );
        },
        { toNode: [], toSvg: [] },
      );
      (r[0].attributes.class = a.toSvg.join(" ")),
        a.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function (l) {
      return Vr(l);
    }).join(`
`);
    n.setAttribute(nn, ""), (n.innerHTML = o);
  },
};
function tc(e) {
  e();
}
function um(e, t) {
  var n = typeof t == "function" ? t : zi;
  if (e.length === 0) n();
  else {
    var r = tc;
    P.mutateApproach === Cv && (r = jt.requestAnimationFrame || tc),
      r(function () {
        var i = g0(),
          a = As.begin("mutate");
        e.map(i), a(), n();
      });
  }
}
var Ps = !1;
function cm() {
  Ps = !0;
}
function gl() {
  Ps = !1;
}
var la = null;
function nc(e) {
  if (Bu && P.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? zi : t,
      r = e.nodeCallback,
      i = r === void 0 ? zi : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? zi : a,
      l = e.observeMutationsRoot,
      s = l === void 0 ? W : l;
    (la = new Bu(function (u) {
      if (!Ps) {
        var f = Mt();
        Hn(u).forEach(function (m) {
          if (
            (m.type === "childList" &&
              m.addedNodes.length > 0 &&
              !ec(m.addedNodes[0]) &&
              (P.searchPseudoElements && o(m.target), n(m.target)),
            m.type === "attributes" &&
              m.target.parentNode &&
              P.searchPseudoElements &&
              o(m.target.parentNode),
            m.type === "attributes" &&
              ec(m.target) &&
              ~Tv.indexOf(m.attributeName))
          )
            if (m.attributeName === "class" && v0(m.target)) {
              var v = Pa(Ss(m.target)),
                h = v.prefix,
                k = v.iconName;
              m.target.setAttribute(ws, h || f),
                k && m.target.setAttribute(ks, k);
            } else h0(m.target) && i(m.target);
        });
      }
    })),
      ft &&
        la.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function x0() {
  la && la.disconnect();
}
function S0(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var a = i.split(":"),
          o = a[0],
          l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function E0(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = Pa(Ss(e));
  return (
    i.prefix || (i.prefix = Mt()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          e0(i.prefix, e.innerText) || _s(i.prefix, cl(e.innerText))),
      !i.iconName &&
        P.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function C0(e) {
  var t = Hn(e.attributes).reduce(function (i, a) {
      return (
        i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    P.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(P.replacementClass, "-title-")
            .concat(r || Lr()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function _0() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ke,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function rc(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = E0(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = C0(e),
    l = dl("parseNodeAttributes", {}, e),
    s = t.styleParser ? S0(e) : [];
  return b(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: Ke,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: s, attributes: o },
    },
    l,
  );
}
var b0 = $e.styles;
function fm(e) {
  var t = P.autoReplaceSvg === "nest" ? rc(e, { styleParser: !1 }) : rc(e);
  return ~t.extra.classes.indexOf(Xd)
    ? ut("generateLayersText", e, t)
    : ut("generateSvgReplacementMutation", e, t);
}
var It = new Set();
xs.map(function (e) {
  It.add("fa-".concat(e));
});
Object.keys(zr[$]).map(It.add.bind(It));
Object.keys(zr[Z]).map(It.add.bind(It));
It = Hr(It);
function ic(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ft) return Promise.resolve();
  var n = W.documentElement.classList,
    r = function (m) {
      return n.add("".concat(Yu, "-").concat(m));
    },
    i = function (m) {
      return n.remove("".concat(Yu, "-").concat(m));
    },
    a = P.autoFetchSvg
      ? It
      : xs
          .map(function (f) {
            return "fa-".concat(f);
          })
          .concat(Object.keys(b0));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(Xd, ":not([").concat(nn, "])")]
    .concat(
      a.map(function (f) {
        return ".".concat(f, ":not([").concat(nn, "])");
      }),
    )
    .join(", ");
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = Hn(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var s = As.begin("onTree"),
    u = l.reduce(function (f, m) {
      try {
        var v = fm(m);
        v && f.push(v);
      } catch (h) {
        Yd || (h.name === "MissingIcon" && console.error(h));
      }
      return f;
    }, []);
  return new Promise(function (f, m) {
    Promise.all(u)
      .then(function (v) {
        um(v, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            s(),
            f();
        });
      })
      .catch(function (v) {
        s(), m(v);
      });
  });
}
function N0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fm(e).then(function (n) {
    n && um([n], t);
  });
}
function A0(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : ml(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : ml(i || {})),
      e(r, b(b({}, n), {}, { mask: i }))
    );
  };
}
var P0 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Ke : r,
      a = n.symbol,
      o = a === void 0 ? !1 : a,
      l = n.mask,
      s = l === void 0 ? null : l,
      u = n.maskId,
      f = u === void 0 ? null : u,
      m = n.title,
      v = m === void 0 ? null : m,
      h = n.titleId,
      k = h === void 0 ? null : h,
      S = n.classes,
      O = S === void 0 ? [] : S,
      d = n.attributes,
      c = d === void 0 ? {} : d,
      p = n.styles,
      y = p === void 0 ? {} : p;
    if (t) {
      var E = t.prefix,
        w = t.iconName,
        C = t.icon;
      return Oa(b({ type: "icon" }, t), function () {
        return (
          rn("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          P.autoA11y &&
            (v
              ? (c["aria-labelledby"] = ""
                  .concat(P.replacementClass, "-title-")
                  .concat(k || Lr()))
              : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
          Ns({
            icons: {
              main: pl(C),
              mask: s
                ? pl(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: E,
            iconName: w,
            transform: b(b({}, Ke), i),
            symbol: o,
            title: v,
            maskId: f,
            titleId: k,
            extra: { attributes: c, styles: y, classes: O },
          })
        );
      });
    }
  },
  O0 = {
    mixout: function () {
      return { icon: A0(P0) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = ic), (n.nodeCallback = N0), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? W : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return ic(i, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            l = r.prefix,
            s = r.transform,
            u = r.symbol,
            f = r.mask,
            m = r.maskId,
            v = r.extra;
          return new Promise(function (h, k) {
            Promise.all([
              vl(i, l),
              f.iconName
                ? vl(f.iconName, f.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (S) {
                var O = gs(S, 2),
                  d = O[0],
                  c = O[1];
                h([
                  n,
                  Ns({
                    icons: { main: d, mask: c },
                    prefix: l,
                    iconName: i,
                    transform: s,
                    symbol: u,
                    maskId: m,
                    title: a,
                    titleId: o,
                    extra: v,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(k);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            o = n.transform,
            l = n.styles,
            s = Na(l);
          s.length > 0 && (i.style = s);
          var u;
          return (
            Es(o) &&
              (u = ut("generateAbstractTransformGrouping", {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(u || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  T0 = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return Oa({ type: "layer" }, function () {
            rn("beforeDOMElementCreation", { assembler: n, params: r });
            var o = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (s) {
                      o = o.concat(s.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(P.cssPrefix, "-layers")]
                      .concat(Hr(a))
                      .join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  z0 = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            l = o === void 0 ? [] : o,
            s = r.attributes,
            u = s === void 0 ? {} : s,
            f = r.styles,
            m = f === void 0 ? {} : f;
          return Oa({ type: "counter", content: n }, function () {
            return (
              rn("beforeDOMElementCreation", { content: n, params: r }),
              f0({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: u,
                  styles: m,
                  classes: ["".concat(P.cssPrefix, "-layers-counter")].concat(
                    Hr(l),
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  j0 = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            a = i === void 0 ? Ke : i,
            o = r.title,
            l = o === void 0 ? null : o,
            s = r.classes,
            u = s === void 0 ? [] : s,
            f = r.attributes,
            m = f === void 0 ? {} : f,
            v = r.styles,
            h = v === void 0 ? {} : v;
          return Oa({ type: "text", content: n }, function () {
            return (
              rn("beforeDOMElementCreation", { content: n, params: r }),
              qu({
                content: n,
                transform: b(b({}, Ke), a),
                title: l,
                extra: {
                  attributes: m,
                  styles: h,
                  classes: ["".concat(P.cssPrefix, "-layers-text")].concat(
                    Hr(u),
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          l = null,
          s = null;
        if (Wd) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            f = n.getBoundingClientRect();
          (l = f.width / u), (s = f.height / u);
        }
        return (
          P.autoA11y && !i && (o.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            qu({
              content: n.innerHTML,
              width: l,
              height: s,
              transform: a,
              title: i,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  M0 = new RegExp('"', "ug"),
  ac = [1105920, 1112319];
function I0(e) {
  var t = e.replace(M0, ""),
    n = Kv(t, 0),
    r = n >= ac[0] && n <= ac[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: cl(i ? t[0] : t), isSecondary: r || i };
}
function oc(e, t) {
  var n = "".concat(Ev).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = Hn(e.children),
      o = a.filter(function (C) {
        return C.getAttribute(ul) === t;
      })[0],
      l = jt.getComputedStyle(e, t),
      s = l.getPropertyValue("font-family").match(Av),
      u = l.getPropertyValue("font-weight"),
      f = l.getPropertyValue("content");
    if (o && !s) return e.removeChild(o), r();
    if (s && f !== "none" && f !== "") {
      var m = l.getPropertyValue("content"),
        v = ~["Sharp"].indexOf(s[2]) ? Z : $,
        h = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(s[2])
          ? jr[v][s[2].toLowerCase()]
          : Pv[v][u],
        k = I0(m),
        S = k.value,
        O = k.isSecondary,
        d = s[0].startsWith("FontAwesome"),
        c = _s(h, S),
        p = c;
      if (d) {
        var y = t0(S);
        y.iconName && y.prefix && ((c = y.iconName), (h = y.prefix));
      }
      if (
        c &&
        !O &&
        (!o || o.getAttribute(ws) !== h || o.getAttribute(ks) !== p)
      ) {
        e.setAttribute(n, p), o && e.removeChild(o);
        var E = _0(),
          w = E.extra;
        (w.attributes[ul] = t),
          vl(c, h)
            .then(function (C) {
              var _ = Ns(
                  b(
                    b({}, E),
                    {},
                    {
                      icons: { main: C, mask: bs() },
                      prefix: h,
                      iconName: p,
                      extra: w,
                      watchable: !0,
                    },
                  ),
                ),
                I = W.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(I, e.firstChild)
                : e.appendChild(I),
                (I.outerHTML = _.map(function (M) {
                  return Vr(M);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function L0(e) {
  return Promise.all([oc(e, "::before"), oc(e, "::after")]);
}
function R0(e) {
  return (
    e.parentNode !== document.head &&
    !~_v.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(ul) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function lc(e) {
  if (ft)
    return new Promise(function (t, n) {
      var r = Hn(e.querySelectorAll("*")).filter(R0).map(L0),
        i = As.begin("searchPseudoElements");
      cm(),
        Promise.all(r)
          .then(function () {
            i(), gl(), t();
          })
          .catch(function () {
            i(), gl(), n();
          });
    });
}
var D0 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = lc), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? W : r;
        P.searchPseudoElements && lc(i);
      };
    },
  },
  sc = !1,
  F0 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            cm(), (sc = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          nc(dl("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          x0();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          sc
            ? gl()
            : nc(dl("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  uc = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var a = i.toLowerCase().split("-"),
          o = a[0],
          l = a.slice(1).join("-");
        if (o && l === "h") return (r.flipX = !0), r;
        if (o && l === "v") return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case "grow":
            r.size = r.size + l;
            break;
          case "shrink":
            r.size = r.size - l;
            break;
          case "left":
            r.x = r.x - l;
            break;
          case "right":
            r.x = r.x + l;
            break;
          case "up":
            r.y = r.y - l;
            break;
          case "down":
            r.y = r.y + l;
            break;
          case "rotate":
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  U0 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return uc(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = uc(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          o = n.iconWidth,
          l = { transform: "translate(".concat(a / 2, " 256)") },
          s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          u = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          f = "rotate(".concat(i.rotate, " 0 0)"),
          m = { transform: "".concat(s, " ").concat(u, " ").concat(f) },
          v = { transform: "translate(".concat((o / 2) * -1, " -256)") },
          h = { outer: l, inner: m, path: v };
        return {
          tag: "g",
          attributes: b({}, h.outer),
          children: [
            {
              tag: "g",
              attributes: b({}, h.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: b(b({}, r.icon.attributes), h.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  uo = { x: 0, y: 0, width: "100%", height: "100%" };
function cc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function $0(e) {
  return e.tag === "g" ? e.children : [e];
}
var H0 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            a = i
              ? Pa(
                  i.split(" ").map(function (o) {
                    return o.trim();
                  }),
                )
              : bs();
          return (
            a.prefix || (a.prefix = Mt()),
            (n.mask = a),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          o = n.mask,
          l = n.maskId,
          s = n.transform,
          u = a.width,
          f = a.icon,
          m = o.width,
          v = o.icon,
          h = Uv({ transform: s, containerWidth: m, iconWidth: u }),
          k = { tag: "rect", attributes: b(b({}, uo), {}, { fill: "white" }) },
          S = f.children ? { children: f.children.map(cc) } : {},
          O = {
            tag: "g",
            attributes: b({}, h.inner),
            children: [
              cc(
                b(
                  { tag: f.tag, attributes: b(b({}, f.attributes), h.path) },
                  S,
                ),
              ),
            ],
          },
          d = { tag: "g", attributes: b({}, h.outer), children: [O] },
          c = "mask-".concat(l || Lr()),
          p = "clip-".concat(l || Lr()),
          y = {
            tag: "mask",
            attributes: b(
              b({}, uo),
              {},
              {
                id: c,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              },
            ),
            children: [k, d],
          },
          E = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: p }, children: $0(v) },
              y,
            ],
          };
        return (
          r.push(E, {
            tag: "rect",
            attributes: b(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(p, ")"),
                mask: "url(#".concat(c, ")"),
              },
              uo,
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  W0 = {
    provides: function (t) {
      var n = !1;
      jt.matchMedia &&
        (n = jt.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            a = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: b(
              b({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              },
            ),
          });
          var o = b(b({}, a), {}, { attributeName: "opacity" }),
            l = {
              tag: "circle",
              attributes: b(b({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: b(
                    b({}, a),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" },
                  ),
                },
                {
                  tag: "animate",
                  attributes: b(b({}, o), {}, { values: "1;0;1;1;0;1;" }),
                },
              ),
            r.push(l),
            r.push({
              tag: "path",
              attributes: b(
                b({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                },
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: b(b({}, o), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: b(
                  b({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  },
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: b(b({}, o), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  V0 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            a = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  B0 = [Wv, O0, T0, z0, j0, D0, F0, U0, H0, W0, V0];
i0(B0, { mixoutsTo: Pe });
Pe.noAuto;
Pe.config;
Pe.library;
Pe.dom;
var yl = Pe.parse;
Pe.findIconDefinition;
Pe.toHtml;
var Y0 = Pe.icon;
Pe.layer;
Pe.text;
Pe.counter;
function fc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fc(Object(n), !0).forEach(function (r) {
          En(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : fc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function sa(e) {
  "@babel/helpers - typeof";
  return (
    (sa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sa(e)
  );
}
function En(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function X0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function K0(e, t) {
  if (e == null) return {};
  var n = X0(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function wl(e) {
  return Q0(e) || G0(e) || Z0(e) || q0();
}
function Q0(e) {
  if (Array.isArray(e)) return kl(e);
}
function G0(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Z0(e, t) {
  if (e) {
    if (typeof e == "string") return kl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return kl(e, t);
  }
}
function kl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function q0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J0(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    l = e.flash,
    s = e.spin,
    u = e.spinPulse,
    f = e.spinReverse,
    m = e.pulse,
    v = e.fixedWidth,
    h = e.inverse,
    k = e.border,
    S = e.listItem,
    O = e.flip,
    d = e.size,
    c = e.rotation,
    p = e.pull,
    y =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": s,
        "fa-spin-reverse": f,
        "fa-spin-pulse": u,
        "fa-pulse": m,
        "fa-fw": v,
        "fa-inverse": h,
        "fa-border": k,
        "fa-li": S,
        "fa-flip": O === !0,
        "fa-flip-horizontal": O === "horizontal" || O === "both",
        "fa-flip-vertical": O === "vertical" || O === "both",
      }),
      En(t, "fa-".concat(d), typeof d < "u" && d !== null),
      En(t, "fa-rotate-".concat(c), typeof c < "u" && c !== null && c !== 0),
      En(t, "fa-pull-".concat(p), typeof p < "u" && p !== null),
      En(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(y)
    .map(function (E) {
      return y[E] ? E : null;
    })
    .filter(function (E) {
      return E;
    });
}
function eh(e) {
  return (e = e - 0), e === e;
}
function dm(e) {
  return eh(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var th = ["style"];
function nh(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function rh(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = dm(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[nh(i)] = a) : (t[i] = a), t;
    }, {});
}
function mm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (s) {
      return mm(e, s);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var f = t.attributes[u];
        switch (u) {
          case "class":
            (s.attrs.className = f), delete t.attributes.class;
            break;
          case "style":
            s.attrs.style = rh(f);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (s.attrs[u.toLowerCase()] = f)
              : (s.attrs[dm(u)] = f);
        }
        return s;
      },
      { attrs: {} },
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    l = K0(n, th);
  return (
    (i.attrs.style = xt(xt({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, xt(xt({}, i.attrs), l)].concat(wl(r)))
  );
}
var pm = !1;
try {
  pm = !0;
} catch {}
function ih() {
  if (!pm && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function dc(e) {
  if (e && sa(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (yl.icon) return yl.icon(e);
  if (e === null) return null;
  if (e && sa(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function co(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? En({}, e, t)
    : {};
}
var ln = bl.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    l = e.titleId,
    s = e.maskId,
    u = dc(n),
    f = co("classes", [].concat(wl(J0(e)), wl(a.split(" ")))),
    m = co(
      "transform",
      typeof e.transform == "string" ? yl.transform(e.transform) : e.transform,
    ),
    v = co("mask", dc(r)),
    h = Y0(
      u,
      xt(
        xt(xt(xt({}, f), m), v),
        {},
        { symbol: i, title: o, titleId: l, maskId: s },
      ),
    );
  if (!h) return ih("Could not find icon", u), null;
  var k = h.abstract,
    S = { ref: t };
  return (
    Object.keys(e).forEach(function (O) {
      ln.defaultProps.hasOwnProperty(O) || (S[O] = e[O]);
    }),
    ah(k[0], S)
  );
});
ln.displayName = "FontAwesomeIcon";
ln.propTypes = {
  beat: T.bool,
  border: T.bool,
  beatFade: T.bool,
  bounce: T.bool,
  className: T.string,
  fade: T.bool,
  flash: T.bool,
  mask: T.oneOfType([T.object, T.array, T.string]),
  maskId: T.string,
  fixedWidth: T.bool,
  inverse: T.bool,
  flip: T.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: T.oneOfType([T.object, T.array, T.string]),
  listItem: T.bool,
  pull: T.oneOf(["right", "left"]),
  pulse: T.bool,
  rotation: T.oneOf([0, 90, 180, 270]),
  shake: T.bool,
  size: T.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: T.bool,
  spinPulse: T.bool,
  spinReverse: T.bool,
  symbol: T.oneOfType([T.bool, T.string]),
  title: T.string,
  titleId: T.string,
  transform: T.oneOfType([T.string, T.object]),
  swapOpacity: T.bool,
};
ln.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var ah = mm.bind(null, bl.createElement),
  oh = {
    prefix: "fas",
    iconName: "laptop",
    icon: [
      640,
      512,
      [128187],
      "f109",
      "M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z",
    ],
  },
  lh = {
    prefix: "fas",
    iconName: "chevron-up",
    icon: [
      512,
      512,
      [],
      "f077",
      "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z",
    ],
  },
  sh = {
    prefix: "fas",
    iconName: "rectangle-ad",
    icon: [
      576,
      512,
      ["ad"],
      "f641",
      "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328H162.8l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v96 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z",
    ],
  },
  uh = {
    prefix: "fas",
    iconName: "gear",
    icon: [
      512,
      512,
      [9881, "cog"],
      "f013",
      "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z",
    ],
  },
  ch = {
    prefix: "fas",
    iconName: "mobile-screen",
    icon: [
      384,
      512,
      ["mobile-android-alt"],
      "f3cf",
      "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z",
    ],
  },
  fh = {
    prefix: "fas",
    iconName: "chevron-down",
    icon: [
      512,
      512,
      [],
      "f078",
      "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z",
    ],
  },
  dh = {
    prefix: "fas",
    iconName: "arrow-up",
    icon: [
      384,
      512,
      [8593],
      "f062",
      "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z",
    ],
  };
const vm = ({ lang: e, setLang: t }) => {
  const [n, r] = Y.useState(!1),
    i = [
      { lang: "uz", flag: fv },
      { lang: "en", flag: dv },
      { lang: "ru", flag: mv },
    ],
    a = i.find((s) => s.lang === e).flag,
    o = (s) => {
      s.stopPropagation(), r((u) => !u);
    },
    l = (s, u) => {
      s.stopPropagation(), t(u), r(!1);
    };
  return (
    Y.useEffect(() => {
      window.addEventListener("click", () => {
        r(!1);
      });
    }, []),
    g.jsxs("div", {
      className: "dropdown",
      children: [
        g.jsxs("button", {
          className: "dropbtn",
          onClick: o,
          children: [
            g.jsx("img", { src: a, alt: "flag of country" }),
            g.jsx(ln, { icon: n ? lh : fh, className: "fa_icon" }),
          ],
        }),
        g.jsx("div", {
          className: `dropdown-content ${n ? "active" : ""}`,
          children: i.map((s) =>
            g.jsx(
              "button",
              {
                onClick: (u) => l(u, s.lang),
                children: g.jsx("img", {
                  src: s.flag,
                  alt: `flag of ${s.lang}`,
                }),
              },
              s.lang,
            ),
          ),
        }),
      ],
    })
  );
};
vm.propTypes = { lang: T.string, setLang: T.func };
const hm = ({ lang: e, setLang: t, isVisible: n }) => {
  const [r, i] = Y.useState(0),
    [a, o] = Y.useState(!1),
    [l, s] = Y.useState(!1),
    [u, f] = Y.useState(!1);
  let m = [];
  if (e === "uz") m = ["Asosiy", "Portfolio", "Hujjatlar", "Bog'lanish"];
  else if (e === "en") m = ["Main", "Portfolio", "Documents", "Contact"];
  else if (e === "ru") m = ["Главный", "Портфолио", "Документы", "Контакт"];
  else throw new Error("Something went wrong with language!");
  const v = ["#main", "#portfolio", "#documents", "#contact"];
  Y.useEffect(() => {
    r < 880 ? s(!0) : s(!1);
  }, [r]);
  const h = () => window.innerWidth,
    k = () => {
      i(h());
    };
  Y.useEffect(() => {
    k(), window.addEventListener("resize", k);
  }, []),
    Y.useEffect(() => {
      a
        ? (document.documentElement.style.setProperty(
            "--secondary-color",
            "#0c0c0c",
          ),
          document.documentElement.style.setProperty("--primary-text", "white"),
          document.documentElement.style.setProperty(
            "--secondary-text",
            "white",
          ),
          document.documentElement.style.setProperty(
            "--card-bgcolor",
            "linear-gradient(225deg, #1b1b1b, #202020)",
          ),
          document.documentElement.style.setProperty(
            "--card-shadow",
            "-5px 5px 15px #161616, 5px -5px 15px #262626",
          ))
        : (document.documentElement.style.setProperty(
            "--secondary-color",
            "aliceblue",
          ),
          document.documentElement.style.setProperty(
            "--primary-text",
            "#0e3842",
          ),
          document.documentElement.style.setProperty(
            "--secondary-text",
            "black",
          ),
          document.documentElement.style.setProperty(
            "--card-bgcolor",
            "linear-gradient(225deg, #cacaca, #f0f0f0)",
          ),
          document.documentElement.style.setProperty(
            "--card-shadow",
            "-20px 20px 60px #bebebe, 20px -20px 60px #ffffff",
          ));
    }, [a]);
  const S = () => {
    o(!a);
  };
  return g.jsxs("nav", {
    className: `navbar ${!n && !u ? "invisible" : ""} has-transition`,
    children: [
      g.jsx("h2", {
        className: "navbar__logo",
        children: h() < 400 ? "MT" : "MoorfoTech",
      }),
      g.jsxs("div", {
        className: "navbar__menu",
        children: [
          g.jsx("ul", {
            className: `navbar__list ${u ? "active" : ""}`,
            onClick: () => {
              u && f(!1);
            },
            children:
              (!l || u) &&
              m.map((O, d) =>
                g.jsx(
                  "li",
                  {
                    className: "navbar__item",
                    children: g.jsx("a", { href: v[d], children: O }),
                  },
                  d,
                ),
              ),
          }),
          g.jsx(vm, { lang: e, setLang: t }),
          g.jsx("button", {
            className: "navbar__toggle-mode-btn",
            onClick: S,
            children: a
              ? g.jsx("i", { className: "fa-solid fa-sun fa_icon" })
              : g.jsx("i", { className: "fa-solid fa-moon fa_icon" }),
          }),
          l &&
            g.jsx("button", {
              className: "navbar__burger-btn",
              onClick: () => f(!u),
              children: g.jsx("i", { className: "fa-solid fa-bars fa_icon" }),
            }),
        ],
      }),
    ],
  });
};
hm.propTypes = { lang: T.string, setLang: T.func, isVisible: T.bool };
const gm = ({ lang: e }) => {
  const t = {};
  return (
    e === "uz"
      ? ((t.title = "MoorfoTech'ga Xush Kelibsiz!"),
        (t.paragraph =
          "Biz sizning kelajakdagi biznesingiz uchun samarali va ishonchli web-loyihalar ishlab chiqishni ta'minlaymiz"),
        (t.btn = "Batafsil"))
      : e === "en"
      ? ((t.title = "Welcome to MoorfoTech!"),
        (t.paragraph =
          "We provide you with an effective and reliable web project development for your future business"),
        (t.btn = "More Details"))
      : e === "ru" &&
        ((t.title = "Добро пожаловать в MoorfoTech!"),
        (t.paragraph =
          "Мы обеспечиваем эффективную и надежную разработку веб-проектов для вашего будущего бизнеса"),
        (t.btn = "Подробнее")),
    g.jsxs("article", {
      className: "banner",
      children: [
        g.jsx("h1", {
          className: "banner__title",
          "data-aos": "fade-up",
          "data-aos-duration": "1500",
          children: t.title,
        }),
        g.jsx("p", {
          "data-aos": "fade-up",
          "data-aos-duration": "1500",
          children: t.paragraph,
        }),
        g.jsx("a", {
          className: "banner__btn btn has-transition",
          href: "#portfolio",
          "data-aos": "fade-up",
          "data-aos-duration": "1500",
          children: t.btn,
        }),
      ],
    })
  );
};
gm.propTypes = { lang: T.string };
var mh = {
    prefix: "fab",
    iconName: "figma",
    icon: [
      384,
      512,
      [],
      "f799",
      "M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z",
    ],
  },
  ph = {
    prefix: "fab",
    iconName: "firefox-browser",
    icon: [
      512,
      512,
      [],
      "e007",
      "M130.22 127.548C130.38 127.558 130.3 127.558 130.22 127.548V127.548ZM481.64 172.898C471.03 147.398 449.56 119.898 432.7 111.168C446.42 138.058 454.37 165.048 457.4 185.168C457.405 185.306 457.422 185.443 457.45 185.578C429.87 116.828 383.098 89.1089 344.9 28.7479C329.908 5.05792 333.976 3.51792 331.82 4.08792L331.7 4.15792C284.99 30.1109 256.365 82.5289 249.12 126.898C232.503 127.771 216.219 131.895 201.19 139.035C199.838 139.649 198.736 140.706 198.066 142.031C197.396 143.356 197.199 144.87 197.506 146.323C197.7 147.162 198.068 147.951 198.586 148.639C199.103 149.327 199.76 149.899 200.512 150.318C201.264 150.737 202.096 150.993 202.954 151.071C203.811 151.148 204.676 151.045 205.491 150.768L206.011 150.558C221.511 143.255 238.408 139.393 255.541 139.238C318.369 138.669 352.698 183.262 363.161 201.528C350.161 192.378 326.811 183.338 304.341 187.248C392.081 231.108 368.541 381.784 246.951 376.448C187.487 373.838 149.881 325.467 146.421 285.648C146.421 285.648 157.671 243.698 227.041 243.698C234.541 243.698 255.971 222.778 256.371 216.698C256.281 214.698 213.836 197.822 197.281 181.518C188.434 172.805 184.229 168.611 180.511 165.458C178.499 163.75 176.392 162.158 174.201 160.688C168.638 141.231 168.399 120.638 173.51 101.058C148.45 112.468 128.96 130.508 114.8 146.428H114.68C105.01 134.178 105.68 93.7779 106.25 85.3479C106.13 84.8179 99.022 89.0159 98.1 89.6579C89.5342 95.7103 81.5528 102.55 74.26 110.088C57.969 126.688 30.128 160.242 18.76 211.318C14.224 231.701 12 255.739 12 263.618C12 398.318 121.21 507.508 255.92 507.508C376.56 507.508 478.939 420.281 496.35 304.888C507.922 228.192 481.64 173.82 481.64 172.898Z",
    ],
  };
const ym = ({ lang: e }) => {
  const t = { title: "", cardIcons: [ch, ph, sh, uh, mh, oh], cardInfos: [] };
  return (
    e === "uz"
      ? ((t.title = "Asosiy"),
        (t.paragraph =
          "Biz IT-ni kompleks rivojlantirish sohasidagi professionallar jamoasimiz. Professional dasturiy mahsulotlar, mobil ilova, veb-sayt va IT loyihalarni texnik qo'llab quvvatlash bilan shug'ullanamiz. Siz uchun aloqalarimizni sezilarli darajada mustahkamlash uchun bizning jamoamiz zamonaviy texnologiyalar va SCRUM metodidan foydalangan holda ishlaydi."),
        (t.cardInfos = [
          "Mobil Ilovalar Yaratish",
          "Web Saytlar yaratish",
          "Reklama Web Saytlari",
          "Texnik Yordam",
          "UI/UX Dizayn",
          "Dasturlar Ishlab Chiqish",
        ]))
      : e === "en"
      ? ((t.title = "Main"),
        (t.paragraph =
          "We are a team of professionals in the field of complex development of IT. We provide technical support for professional software products, mobile application, website and IT projects. Our team works using modern technologies and the SCRUM method to significantly strengthen our relationships for you."),
        (t.cardInfos = [
          "Developing Mobile Apps",
          "Building Web Sites",
          "Advertisement Web Sites",
          "Technical Support",
          "UI/UX Design",
          "Creating Programs",
        ]))
      : e === "ru" &&
        ((t.title = "Главный"),
        (t.paragraph =
          "Мы команда профессионалов в области комплексной разработки IT. Осуществляем техническую поддержку профессиональных программных продуктов, мобильных приложений, веб-сайтов и ИТ-проектов. Наша команда работает с использованием современных технологий и метода SCRUM, чтобы значительно укрепить наши отношения для вас."),
        (t.cardInfos = [
          "Создание Мобильных Приложений",
          "Разработка Веб-Сайтов",
          "Рекламные Веб-Сайты",
          "Техническая Поддержка",
          "UI/UX Дизайн",
          "Разработка Программ",
        ])),
    g.jsxs("main", {
      id: "main",
      className: "main",
      children: [
        g.jsxs("div", {
          className: "main__title-field title-field",
          children: [
            g.jsx("span", { className: "main__title-line title-line" }),
            g.jsx("h1", { className: "main__title title", children: t.title }),
            g.jsx("span", { className: "main__title-line title-line" }),
          ],
        }),
        g.jsx("p", {
          className: "main__about",
          "data-aos": "fade-up",
          children: t.paragraph,
        }),
        g.jsx("div", {
          className: "main__card-container",
          children: t.cardIcons.map((n, r) =>
            g.jsxs(
              "div",
              {
                className: "main__card has-transition",
                "data-aos": `zoom-in-${
                  r % 3 === 0 ? "right" : r % 3 === 1 ? "up" : "left"
                }`,
                children: [
                  g.jsx(ln, { icon: n, className: "fa_icon" }),
                  g.jsx("p", { children: t.cardInfos[r] }),
                ],
              },
              r,
            ),
          ),
        }),
      ],
    })
  );
};
ym.propTypes = { lang: T.string };
const wm = ({ isArrowSticky: e, refContact: t }) =>
  g.jsx("button", {
    style: e
      ? { position: "absolute", bottom: t.current.offsetHeight + 20 + "px" }
      : { position: "fixed", bottom: "20px" },
    className: "arrow-up-btn",
    onClick: () => {
      window.scroll(0, 0);
    },
    children: g.jsx(ln, { icon: dh, className: "fa_icon" }),
  });
wm.propTypes = { isArrowSticky: T.bool, refContact: T.object };
const km = ({ lang: e, contactRef: t }) => {
  const [n, r] = Y.useState(""),
    [i, a] = Y.useState(""),
    o = (s) => {
      s.preventDefault(),
        console.log(n, i),
        console.log("Data is sent to the backend");
    },
    l = {};
  return (
    e === "uz"
      ? ((l.title = "Bog`lanish"),
        (l.info =
          "Savol va murojaatlaringiz bo'lsa ushbu manzillarga yo'llashingiz mumkin. Takliflar uchun oldindan rahmat!"),
        (l.feedbackPlaceholder = "Fikr qoldiring..."),
        (l.emailPlaceholder = "Emailingiz..."),
        (l.send = "Yuborish"),
        (l.location =
          "Qashqadaryo viloyati, G`uzor tumani, Tinchlik mahallasi"))
      : e === "en"
      ? ((l.title = "Contact"),
        (l.info =
          "If you have questions and requests, you can send them to these addresses. Thanks in advance for the suggestions!"),
        (l.feedbackPlaceholder = "Leave feedback..."),
        (l.emailPlaceholder = "Your email..."),
        (l.send = "Send"),
        (l.location = "Tinchlik mahalla, Guzor region, Kashkadarya district"))
      : e === "ru" &&
        ((l.title = "Контакт"),
        (l.info =
          "Если у вас есть вопросы и пожелания, вы можете отправить их по этим адресам. Заранее спасибо за предложения!"),
        (l.feedbackPlaceholder = "Оставить отзыв..."),
        (l.emailPlaceholder = "Ваш э-почта..."),
        (l.send = "Отправить"),
        (l.location = "Тинчлик, Гузорский район, Кашкадарьинская область")),
    g.jsxs("footer", {
      id: "contact",
      className: "contact",
      ref: t,
      children: [
        g.jsxs("div", {
          className: "contact__title-field title-field",
          children: [
            g.jsx("span", { className: "contact__title-line title-line" }),
            g.jsx("h1", {
              className: "contact__title title",
              children: l.title,
            }),
            g.jsx("span", { className: "contact__title-line title-line" }),
          ],
        }),
        g.jsxs("ul", {
          className: "contact__address-list",
          children: [
            g.jsx("li", {
              children: g.jsxs("ul", {
                className: "contact__address-item",
                children: [
                  g.jsx("li", { children: l.info }),
                  g.jsx("li", {
                    children: "© Copyright Jahongir Hayitov 2023",
                  }),
                ],
              }),
            }),
            g.jsx("li", {
              children: g.jsxs("ul", {
                className: "contact__address-item",
                children: [
                  g.jsx("li", {
                    children: g.jsxs("a", {
                      href: "#",
                      children: [
                        g.jsx("i", { className: "fa-solid fa-location-dot" }),
                        " ",
                        l.location,
                      ],
                    }),
                  }),
                  g.jsx("li", {
                    children: g.jsxs("a", {
                      href: "tel:+998(XX)-XXX-XX-XX",
                      children: [
                        g.jsx("i", { className: "fa-solid fa-phone" }),
                        " +998(XX)-XXX-XX-XX",
                      ],
                    }),
                  }),
                  g.jsx("li", {
                    children: g.jsxs("a", {
                      href: "mailto:Jahongirhacking@gmail.com",
                      children: [
                        g.jsx("i", { className: "fa-solid fa-envelope" }),
                        " ",
                        "Jahongirhacking@gmail.com",
                      ],
                    }),
                  }),
                ],
              }),
            }),
            g.jsx("li", {
              children: g.jsxs("ul", {
                className: "contact__address-item",
                children: [
                  g.jsxs("form", {
                    className: "contact__form",
                    children: [
                      g.jsx("input", {
                        type: "text",
                        placeholder: l.feedbackPlaceholder,
                        onChange: (s) => r(s.target.value),
                      }),
                      g.jsx("input", {
                        type: "email",
                        placeholder: l.emailPlaceholder,
                        onChange: (s) => a(s.target.value),
                      }),
                      g.jsx("button", {
                        className: "form__btn btn has-transition",
                        onClick: o,
                        children: l.send,
                      }),
                    ],
                  }),
                  g.jsxs("ul", {
                    className: "contact__social-links",
                    children: [
                      g.jsx("li", {
                        children: g.jsx("a", {
                          href: "https://t.me/JahongirKhayitov",
                          children: g.jsx("i", {
                            className: "fa-brands fa-telegram fa_icon",
                          }),
                        }),
                      }),
                      g.jsx("li", {
                        children: g.jsx("a", {
                          href: "https://www.instagram.com/Jahongir_Khayitov/",
                          children: g.jsx("i", {
                            className: "fa-brands fa-instagram fa_icon",
                          }),
                        }),
                      }),
                      g.jsx("li", {
                        children: g.jsx("a", {
                          href: "#",
                          children: g.jsx("i", {
                            className: "fa-brands fa-facebook fa_icon",
                          }),
                        }),
                      }),
                      g.jsx("li", {
                        children: g.jsx("a", {
                          href: "#",
                          children: g.jsx("i", {
                            className: "fa-brands fa-youtube fa_icon",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
};
km.propTypes = { lang: T.string, contactRef: T.object };
const xm = ({ lang: e }) => {
  const t = { cards: [] };
  for (let n = 0; n < 6; n++)
    t.cards.push({
      img: `./portfolio-images/portfolio-${n}.jpg`,
      description:
        e !== "ru"
          ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates, harum, magnam dicta ut eaque reprehenderit..."
          : "Лорем, ипсум долор сит амет cонсеcтетур адиписиcинг элит. риc волуптатес, дарум, магнам диcта ут эақуе репревендерит...",
      btn: e === "uz" ? "Batafsil" : e === "en" ? "More Details" : "Подробнее",
    });
  return (
    e === "uz"
      ? ((t.title = "Portfolio"), (t.more = "Ko'proq Ko'rish"))
      : e === "en"
      ? ((t.title = "Portfolio"), (t.more = "See More"))
      : e === "ru" && ((t.title = "Портфолио"), (t.more = "Узнать Больше")),
    g.jsxs("section", {
      id: "portfolio",
      className: "portfolio",
      children: [
        g.jsxs("div", {
          className: "portfolio__title-field title-field",
          children: [
            g.jsx("img", { src: "", alt: "" }),
            g.jsx("span", { className: "portfolio__title-line title-line" }),
            g.jsx("h1", {
              className: "portfolio__title title",
              children: t.title,
            }),
            g.jsx("span", { className: "portfolio__title-line title-line" }),
          ],
        }),
        g.jsxs("div", {
          className: "portfolio__card-container",
          children: [
            t.cards.map((n, r) =>
              g.jsxs(
                "div",
                {
                  className: "portfolio__card has-transition",
                  "data-aos": `fade-up${
                    r % 3 === 0 ? "-right" : r % 3 === 1 ? "" : "-left"
                  }`,
                  children: [
                    g.jsx("div", {
                      className:
                        "portfolio__img-wrapper img-wrapper has-transition",
                      style: { backgroundImage: `url(${n.img})` },
                    }),
                    g.jsxs("div", {
                      className: "portfolio__body",
                      children: [
                        g.jsx("p", {
                          className: "portfolio__description",
                          children: n.description,
                        }),
                        g.jsx("button", {
                          className: "portfolio__btn btn has-transition",
                          children: n.btn,
                        }),
                      ],
                    }),
                  ],
                },
                r,
              ),
            ),
            g.jsx("a", { href: "#", className: "small", children: t.more }),
          ],
        }),
      ],
    })
  );
};
xm.propTypes = { lang: T.string };
const Sm = ({ children: e, setShowModal: t }) => {
  const n = Y.useCallback(() => {
    (document.body.style.overflowY = "auto"), t(!1);
  }, [t]);
  return (
    Y.useEffect(() => {
      (document.body.style.overflowY = "hidden"),
        window.addEventListener("keyup", (r) => {
          r.key === "Escape" && n();
        });
    }, [n]),
    g.jsx("div", {
      className: "overlay",
      onClick: n,
      children: g.jsx("div", { className: "modal", children: e }),
    })
  );
};
Sm.propTypes = { children: T.element, setShowModal: T.func };
const Em = ({ lang: e }) => {
  const [t, n] = Y.useState(0),
    [r, i] = Y.useState(!1),
    a = { cards: [] };
  for (let o = 0; o < 4; o++)
    a.cards.push({
      img: `./qrCode-images/qr-${o}.jpg`,
      description:
        e !== "ru"
          ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,asperiores morales... "
          : "Лорем ипсум долор сит амет,  cонсеcтетур адиписиcинг элит.  Маиорес, аспериорес моралес...",
    });
  return (
    e === "uz"
      ? (a.title = "Hujjatlar")
      : e === "en"
      ? (a.title = "Documents")
      : e === "ru" && (a.title = "Документы"),
    g.jsxs(g.Fragment, {
      children: [
        r &&
          g.jsx(Sm, {
            setShowModal: i,
            children: g.jsx("img", {
              id: "qr-code",
              src: a.cards[t].img,
              alt: `QR code no:${t}`,
            }),
          }),
        g.jsxs("section", {
          id: "documents",
          className: "documents",
          children: [
            g.jsxs("div", {
              className: "documents__title-field title-field",
              children: [
                g.jsx("span", { className: "main__title-line title-line" }),
                g.jsx("h1", {
                  className: "main__title title",
                  children: a.title,
                }),
                g.jsx("span", { className: "main__title-line title-line" }),
              ],
            }),
            g.jsx("ul", {
              className: "documents__list",
              children: a.cards.map((o, l) =>
                g.jsxs(
                  "li",
                  {
                    className:
                      "documents__item documents__btn btn has-transition",
                    "data-aos": `fade-up-${l % 2 === 0 ? "right" : "left"}`,
                    onClick: () => {
                      n(l), i(!0);
                    },
                    children: [
                      g.jsx("p", {
                        className: "documents__caption",
                        children: o.description,
                      }),
                      g.jsx("i", { className: "fa-solid fa-right-long" }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
};
Em.propTypes = { lang: T.string };
var Cm = "Expected a function",
  mc = 0 / 0,
  vh = "[object Symbol]",
  hh = /^\s+|\s+$/g,
  gh = /^[-+]0x[0-9a-f]+$/i,
  yh = /^0b[01]+$/i,
  wh = /^0o[0-7]+$/i,
  kh = parseInt,
  xh = typeof yt == "object" && yt && yt.Object === Object && yt,
  Sh = typeof self == "object" && self && self.Object === Object && self,
  Eh = xh || Sh || Function("return this")(),
  Ch = Object.prototype,
  _h = Ch.toString,
  bh = Math.max,
  Nh = Math.min,
  fo = function () {
    return Eh.Date.now();
  };
function Ah(e, t, n) {
  var r,
    i,
    a,
    o,
    l,
    s,
    u = 0,
    f = !1,
    m = !1,
    v = !0;
  if (typeof e != "function") throw new TypeError(Cm);
  (t = pc(t) || 0),
    ua(n) &&
      ((f = !!n.leading),
      (m = "maxWait" in n),
      (a = m ? bh(pc(n.maxWait) || 0, t) : a),
      (v = "trailing" in n ? !!n.trailing : v));
  function h(w) {
    var C = r,
      _ = i;
    return (r = i = void 0), (u = w), (o = e.apply(_, C)), o;
  }
  function k(w) {
    return (u = w), (l = setTimeout(d, t)), f ? h(w) : o;
  }
  function S(w) {
    var C = w - s,
      _ = w - u,
      I = t - C;
    return m ? Nh(I, a - _) : I;
  }
  function O(w) {
    var C = w - s,
      _ = w - u;
    return s === void 0 || C >= t || C < 0 || (m && _ >= a);
  }
  function d() {
    var w = fo();
    if (O(w)) return c(w);
    l = setTimeout(d, S(w));
  }
  function c(w) {
    return (l = void 0), v && r ? h(w) : ((r = i = void 0), o);
  }
  function p() {
    l !== void 0 && clearTimeout(l), (u = 0), (r = s = i = l = void 0);
  }
  function y() {
    return l === void 0 ? o : c(fo());
  }
  function E() {
    var w = fo(),
      C = O(w);
    if (((r = arguments), (i = this), (s = w), C)) {
      if (l === void 0) return k(s);
      if (m) return (l = setTimeout(d, t)), h(s);
    }
    return l === void 0 && (l = setTimeout(d, t)), o;
  }
  return (E.cancel = p), (E.flush = y), E;
}
function Ph(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(Cm);
  return (
    ua(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    Ah(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function ua(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Oh(e) {
  return !!e && typeof e == "object";
}
function Th(e) {
  return typeof e == "symbol" || (Oh(e) && _h.call(e) == vh);
}
function pc(e) {
  if (typeof e == "number") return e;
  if (Th(e)) return mc;
  if (ua(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ua(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(hh, "");
  var n = yh.test(e);
  return n || wh.test(e) ? kh(e.slice(2), n ? 2 : 8) : gh.test(e) ? mc : +e;
}
var zh = Ph;
const jh = ca(zh);
var Mh = "Expected a function",
  vc = 0 / 0,
  Ih = "[object Symbol]",
  Lh = /^\s+|\s+$/g,
  Rh = /^[-+]0x[0-9a-f]+$/i,
  Dh = /^0b[01]+$/i,
  Fh = /^0o[0-7]+$/i,
  Uh = parseInt,
  $h = typeof yt == "object" && yt && yt.Object === Object && yt,
  Hh = typeof self == "object" && self && self.Object === Object && self,
  Wh = $h || Hh || Function("return this")(),
  Vh = Object.prototype,
  Bh = Vh.toString,
  Yh = Math.max,
  Xh = Math.min,
  mo = function () {
    return Wh.Date.now();
  };
function Kh(e, t, n) {
  var r,
    i,
    a,
    o,
    l,
    s,
    u = 0,
    f = !1,
    m = !1,
    v = !0;
  if (typeof e != "function") throw new TypeError(Mh);
  (t = hc(t) || 0),
    xl(n) &&
      ((f = !!n.leading),
      (m = "maxWait" in n),
      (a = m ? Yh(hc(n.maxWait) || 0, t) : a),
      (v = "trailing" in n ? !!n.trailing : v));
  function h(w) {
    var C = r,
      _ = i;
    return (r = i = void 0), (u = w), (o = e.apply(_, C)), o;
  }
  function k(w) {
    return (u = w), (l = setTimeout(d, t)), f ? h(w) : o;
  }
  function S(w) {
    var C = w - s,
      _ = w - u,
      I = t - C;
    return m ? Xh(I, a - _) : I;
  }
  function O(w) {
    var C = w - s,
      _ = w - u;
    return s === void 0 || C >= t || C < 0 || (m && _ >= a);
  }
  function d() {
    var w = mo();
    if (O(w)) return c(w);
    l = setTimeout(d, S(w));
  }
  function c(w) {
    return (l = void 0), v && r ? h(w) : ((r = i = void 0), o);
  }
  function p() {
    l !== void 0 && clearTimeout(l), (u = 0), (r = s = i = l = void 0);
  }
  function y() {
    return l === void 0 ? o : c(mo());
  }
  function E() {
    var w = mo(),
      C = O(w);
    if (((r = arguments), (i = this), (s = w), C)) {
      if (l === void 0) return k(s);
      if (m) return (l = setTimeout(d, t)), h(s);
    }
    return l === void 0 && (l = setTimeout(d, t)), o;
  }
  return (E.cancel = p), (E.flush = y), E;
}
function xl(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Qh(e) {
  return !!e && typeof e == "object";
}
function Gh(e) {
  return typeof e == "symbol" || (Qh(e) && Bh.call(e) == Ih);
}
function hc(e) {
  if (typeof e == "number") return e;
  if (Gh(e)) return vc;
  if (xl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xl(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(Lh, "");
  var n = Dh.test(e);
  return n || Fh.test(e) ? Uh(e.slice(2), n ? 2 : 8) : Rh.test(e) ? vc : +e;
}
var Zh = Kh;
const gc = ca(Zh);
var _m = function () {};
function bm(e) {
  var t = void 0,
    n = void 0,
    r = void 0;
  for (t = 0; t < e.length; t += 1)
    if (
      ((n = e[t]),
      (n.dataset && n.dataset.aos) || ((r = n.children && bm(n.children)), r))
    )
      return !0;
  return !1;
}
function qh(e) {
  e &&
    e.forEach(function (t) {
      var n = Array.prototype.slice.call(t.addedNodes),
        r = Array.prototype.slice.call(t.removedNodes),
        i = n.concat(r);
      if (bm(i)) return _m();
    });
}
function Nm() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}
function Jh() {
  return !!Nm();
}
function eg(e, t) {
  var n = window.document,
    r = Nm(),
    i = new r(qh);
  (_m = t),
    i.observe(n.documentElement, {
      childList: !0,
      subtree: !0,
      removedNodes: !0,
    });
}
var yc = { isSupported: Jh, ready: eg },
  tg = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  ng = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  rg =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  ig =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  ag =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  og =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  lg =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function wc() {
  return navigator.userAgent || navigator.vendor || window.opera || "";
}
var sg = (function () {
    function e() {
      tg(this, e);
    }
    return (
      ng(e, [
        {
          key: "phone",
          value: function () {
            var n = wc();
            return !!(ig.test(n) || ag.test(n.substr(0, 4)));
          },
        },
        {
          key: "mobile",
          value: function () {
            var n = wc();
            return !!(og.test(n) || lg.test(n.substr(0, 4)));
          },
        },
        {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          },
        },
        {
          key: "ie11",
          value: function () {
            return (
              "-ms-scroll-limit" in document.documentElement.style &&
              "-ms-ime-align" in document.documentElement.style
            );
          },
        },
      ]),
      e
    );
  })(),
  Mi = new sg(),
  ug = function (t, n) {
    return (
      n &&
      n.forEach(function (r) {
        return t.classList.add(r);
      })
    );
  },
  cg = function (t, n) {
    return (
      n &&
      n.forEach(function (r) {
        return t.classList.remove(r);
      })
    );
  },
  wi = function (t, n) {
    var r = void 0;
    return (
      Mi.ie11()
        ? ((r = document.createEvent("CustomEvent")),
          r.initCustomEvent(t, !0, !0, { detail: n }))
        : (r = new CustomEvent(t, { detail: n })),
      document.dispatchEvent(r)
    );
  },
  fg = function (t, n) {
    var r = t.options,
      i = t.position,
      a = t.node;
    t.data;
    var o = function () {
        t.animated &&
          (cg(a, r.animatedClassNames),
          wi("aos:out", a),
          t.options.id && wi("aos:in:" + t.options.id, a),
          (t.animated = !1));
      },
      l = function () {
        t.animated ||
          (ug(a, r.animatedClassNames),
          wi("aos:in", a),
          t.options.id && wi("aos:in:" + t.options.id, a),
          (t.animated = !0));
      };
    r.mirror && n >= i.out && !r.once
      ? o()
      : n >= i.in
      ? l()
      : t.animated && !r.once && o();
  },
  kc = function (t) {
    return t.forEach(function (n, r) {
      return fg(n, window.pageYOffset);
    });
  },
  Am = function (t) {
    for (var n = 0, r = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
      (n += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0)),
        (r += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0)),
        (t = t.offsetParent);
    return { top: r, left: n };
  },
  Ot = function (e, t, n) {
    var r = e.getAttribute("data-aos-" + t);
    if (typeof r < "u") {
      if (r === "true") return !0;
      if (r === "false") return !1;
    }
    return r || n;
  },
  dg = function (t, n, r) {
    var i = window.innerHeight,
      a = Ot(t, "anchor"),
      o = Ot(t, "anchor-placement"),
      l = Number(Ot(t, "offset", o ? 0 : n)),
      s = o || r,
      u = t;
    a && document.querySelectorAll(a) && (u = document.querySelectorAll(a)[0]);
    var f = Am(u).top - i;
    switch (s) {
      case "top-bottom":
        break;
      case "center-bottom":
        f += u.offsetHeight / 2;
        break;
      case "bottom-bottom":
        f += u.offsetHeight;
        break;
      case "top-center":
        f += i / 2;
        break;
      case "center-center":
        f += i / 2 + u.offsetHeight / 2;
        break;
      case "bottom-center":
        f += i / 2 + u.offsetHeight;
        break;
      case "top-top":
        f += i;
        break;
      case "bottom-top":
        f += i + u.offsetHeight;
        break;
      case "center-top":
        f += i + u.offsetHeight / 2;
        break;
    }
    return f + l;
  },
  mg = function (t, n) {
    var r = Ot(t, "anchor"),
      i = Ot(t, "offset", n),
      a = t;
    r && document.querySelectorAll(r) && (a = document.querySelectorAll(r)[0]);
    var o = Am(a).top;
    return o + a.offsetHeight - i;
  },
  pg = function (t, n) {
    return (
      t.forEach(function (r, i) {
        var a = Ot(r.node, "mirror", n.mirror),
          o = Ot(r.node, "once", n.once),
          l = Ot(r.node, "id"),
          s = n.useClassNames && r.node.getAttribute("data-aos"),
          u = [n.animatedClassName]
            .concat(s ? s.split(" ") : [])
            .filter(function (f) {
              return typeof f == "string";
            });
        n.initClassName && r.node.classList.add(n.initClassName),
          (r.position = {
            in: dg(r.node, n.offset, n.anchorPlacement),
            out: a && mg(r.node, n.offset),
          }),
          (r.options = { once: o, mirror: a, animatedClassNames: u, id: l });
      }),
      t
    );
  },
  Pm = function () {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (t) {
      return { node: t };
    });
  },
  Je = [],
  xc = !1,
  Q = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50,
  },
  Om = function () {
    return document.all && !window.atob;
  },
  vg = function () {
    return (
      (Je = pg(Je, Q)),
      kc(Je),
      window.addEventListener(
        "scroll",
        jh(function () {
          kc(Je, Q.once);
        }, Q.throttleDelay),
      ),
      Je
    );
  },
  Wt = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    t && (xc = !0), xc && vg();
  },
  Tm = function () {
    if (((Je = Pm()), jm(Q.disable) || Om())) return zm();
    Wt();
  },
  zm = function () {
    Je.forEach(function (t, n) {
      t.node.removeAttribute("data-aos"),
        t.node.removeAttribute("data-aos-easing"),
        t.node.removeAttribute("data-aos-duration"),
        t.node.removeAttribute("data-aos-delay"),
        Q.initClassName && t.node.classList.remove(Q.initClassName),
        Q.animatedClassName && t.node.classList.remove(Q.animatedClassName);
    });
  },
  jm = function (t) {
    return (
      t === !0 ||
      (t === "mobile" && Mi.mobile()) ||
      (t === "phone" && Mi.phone()) ||
      (t === "tablet" && Mi.tablet()) ||
      (typeof t == "function" && t() === !0)
    );
  },
  hg = function (t) {
    return (
      (Q = rg(Q, t)),
      (Je = Pm()),
      !Q.disableMutationObserver &&
        !yc.isSupported() &&
        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
        (Q.disableMutationObserver = !0)),
      Q.disableMutationObserver || yc.ready("[data-aos]", Tm),
      jm(Q.disable) || Om()
        ? zm()
        : (document
            .querySelector("body")
            .setAttribute("data-aos-easing", Q.easing),
          document
            .querySelector("body")
            .setAttribute("data-aos-duration", Q.duration),
          document
            .querySelector("body")
            .setAttribute("data-aos-delay", Q.delay),
          ["DOMContentLoaded", "load"].indexOf(Q.startEvent) === -1
            ? document.addEventListener(Q.startEvent, function () {
                Wt(!0);
              })
            : window.addEventListener("load", function () {
                Wt(!0);
              }),
          Q.startEvent === "DOMContentLoaded" &&
            ["complete", "interactive"].indexOf(document.readyState) > -1 &&
            Wt(!0),
          window.addEventListener("resize", gc(Wt, Q.debounceDelay, !0)),
          window.addEventListener(
            "orientationchange",
            gc(Wt, Q.debounceDelay, !0),
          ),
          Je)
    );
  },
  gg = { init: hg, refresh: Wt, refreshHard: Tm };
function yg() {
  const [e, t] = Y.useState(!1),
    [n, r] = Y.useState(!1),
    [i, a] = Y.useState("uz"),
    o = Y.useRef(null),
    l = () => {
      const { current: s } = o;
      if (window.scrollY >= 70) {
        t(!0);
        const u = s.offsetTop - 70;
        window.scrollY + window.innerHeight < u ? r(!1) : r(!0);
      } else t(!1);
    };
  return (
    Y.useEffect(() => {
      gg.init(), window.addEventListener("scroll", l);
    }, []),
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(hm, { lang: i, setLang: a, isVisible: e }),
        g.jsx(gm, { lang: i }),
        g.jsx(ym, { lang: i }),
        g.jsx(xm, { lang: i }),
        g.jsx(Em, { lang: i }),
        e && g.jsx(wm, { isArrowSticky: n, refContact: o }),
        g.jsx(km, { lang: i, contactRef: o }),
      ],
    })
  );
}
po.createRoot(document.getElementById("root")).render(
  g.jsx(bl.StrictMode, { children: g.jsx(yg, {}) }),
);
