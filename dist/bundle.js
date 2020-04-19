!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var u = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                    Object.defineProperty(r, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
            )
                for (var u in e)
                    n.d(
                        r,
                        u,
                        function (t) {
                            return e[t];
                        }.bind(null, u)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 0));
})([
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r,
            u = (function () {
                function e() { }
                return (
                    (e.add = function (e, t) {
                        return "Class Add" + (e + t);
                    }),
                    (e.subtract = function (e, t) {
                        return "Class Subtract" + (e - t);
                    }),
                    (e.multiply = function (e, t) {
                        return "Class Multiply " + e * t;
                    }),
                    (e.value = "Class Value"),
                    e
                );
            })();
        !(function (e) {
            (e.add = function (e, t) {
                return "Namespace Add" + (e + t);
            }),
                (e.subtract = function (e, t) {
                    return "Namespace Subtract" + (e - t);
                }),
                (e.multiply = function (e, t) {
                    return "Namespace Multiply " + e * t;
                }),
                (e.value = "Namespace Value");
        })(r || (r = {}));
        console.log(u.add(1, 1)),
            console.log("Const Add" + (2 + 2)),
            console.log(r.add(3, 3)),
            console.log(
                (function (e, t) {
                    return "NoWrap Add" + (e + t);
                })(4, 4)
            );
    },
]);
