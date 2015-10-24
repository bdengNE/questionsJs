if (!Function.prototype.bind) {
    Function.prototype.bind = function(a) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var f = Array.prototype.slice.call(arguments, 1), e = this, b = function() {}, c = function() {
            return e.apply(this instanceof b && a ? this : a, f.concat(Array.prototype.slice.call(arguments)))
        };
        b.prototype = this.prototype;
        c.prototype = new b();
        return c
    }
}
if (!Array.prototype.map) {
    Array.prototype.map = function(c) {
        if (this === void 0 || this === null) {
            throw new TypeError()
        }
        var g = Object(this), a = g.length>>>0;
        if (typeof c !== "function") {
            throw new TypeError()
        }
        var f = new Array(a), b = arguments.length >= 2 ? arguments[1]: void 0;
        for (var e = 0; e < a; e++) {
            if (e in g) {
                f[e] = c.call(b, g[e], e, g)
            }
        }
        return f
    }
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
if (!Object.prototype.hasOwnProperty) {
    Object.prototype.hasOwnProperty = function(a) {
        var b = this.__proto__ || this.constructor.prototype;
        return a in this && (!(a in b) || this[a] !== b[a])
    }
}
if (!Object.keys) {
    Object.keys = (function() {
        var c = Object.prototype.hasOwnProperty, e=!({
            toString: null
        }).propertyIsEnumerable("toString"), b = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], a = b.length;
        return function(h) {
            if (typeof h !== "object" && (typeof h !== "function" || h === null)) {
                throw new TypeError("Object.keys called on non-object")
            }
            var f = [], j, g;
            for (j in h) {
                if (c.call(h, j)) {
                    f.push(j)
                }
            }
            if (e) {
                for (g = 0; g < a; g++) {
                    if (c.call(h, b[g])) {
                        f.push(b[g])
                    }
                }
            }
            return f
        }
    }())
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(a, b) {
        if (this === undefined || this === null) {
            throw new TypeError('"this" is null or not defined')
        }
        var c = this.length>>>0;
        b =+ b || 0;
        if (Math.abs(b) === Infinity) {
            b = 0
        }
        if (b < 0) {
            b += c;
            if (b < 0) {
                b = 0
            }
        }
        for (; b < c; b++) {
            if (this[b] === a) {
                return b
            }
        }
        return - 1
    }
}
if (!window.console) {
    var noop = function() {};
    window.console = {
        log: noop,
        error: noop,
        warn: noop,
        info: noop
    }
}
window.Modernizr = function(aq, ap, ao) {
    function ab(b) {
        ah.cssText = b
    }
    function Z(e, c) {
        return ab(ae.join(e + ";") + (c || ""))
    }
    function X(e, c) {
        return typeof e === c
    }
    function V(e, c) {
        return !!~("" + e).indexOf(c)
    }
    function T(f, c) {
        for (var h in f) {
            var g = f[h];
            if (!V(g, "-") && ah[g] !== ao) {
                return c == "pfx" ? g : !0
            }
        }
        return !1
    }
    function R(g, c, k) {
        for (var j in g) {
            var h = c[g[j]];
            if (h !== ao) {
                return k===!1 ? g[j] : X(h, "function") ? h.bind(k || c) : h
            }
        }
        return !1
    }
    function P(g, f, k) {
        var j = g.charAt(0).toUpperCase() + g.slice(1), h = (g + " " + ac.join(j + " ") + j).split(" ");
        return X(f, "string") || X(f, "undefined") ? T(h, f) : (h = (g + " " + aa.join(j + " ") + j).split(" "), R(h, f, k))
    }
    var an = "2.8.3", am = {}, al=!0, ak = ap.documentElement, aj = "modernizr", ai = ap.createElement(aj), ah = ai.style, ag, af = {}.toString, ae = " -webkit- -moz- -o- -ms- ".split(" "), ad = "Webkit Moz O ms", ac = ad.split(" "), aa = ad.toLowerCase().split(" "), Y = {
        svg: "http://www.w3.org/2000/svg"
    }, W = {}, U = {}, S = {}, Q = [], O = Q.slice, N, K = function(v, u, t, s) {
        var r, q, p, o, h = ap.createElement("div"), g = ap.body, b = g || ap.createElement("body");
        if (parseInt(t, 10)) {
            while (t--) {
                p = ap.createElement("div"), p.id = s ? s[t] : aj + (t + 1), h.appendChild(p)
            }
        }
        return r = ["&#173;", '<style id="s', aj, '">', v, "</style>"].join(""), h.id = aj, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = ak.style.overflow, ak.style.overflow = "hidden", ak.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), ak.style.overflow = o), !!q
    }, J = {}.hasOwnProperty, I;
    !X(J, "undefined")&&!X(J.call, "undefined") ? I = function(e, c) {
        return J.call(e, c)
    } : I = function(e, c) {
        return c in e && X(e.constructor.prototype[c], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError
        }
        var g = O.call(arguments, 1), f = function() {
            if (this instanceof f) {
                var b = function() {};
                b.prototype = h.prototype;
                var e = new b, c = h.apply(e, g.concat(O.call(arguments)));
                return Object(c) === c ? c : e
            }
            return h.apply(a, g.concat(O.call(arguments)))
        };
        return f
    }), W.touch = function() {
        var a;
        return "ontouchstart" in aq || aq.DocumentTouch && ap instanceof DocumentTouch ? a=!0 : K(["@media (", ae.join("touch-enabled),("), aj, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
            a = b.offsetTop === 9
        }), a
    }, W.opacity = function() {
        return Z("opacity:.55"), /^0.55$/.test(ah.opacity)
    }, W.csstransforms3d = function() {
        var b=!!P("perspective");
        return b && "webkitPerspective" in ak.style && K("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(a, e) {
            b = a.offsetLeft === 9 && a.offsetHeight === 3
        }), b
    }, W.csstransitions = function() {
        return P("transition")
    }, W.svg = function() {
        return !!ap.createElementNS&&!!ap.createElementNS(Y.svg, "svg").createSVGRect
    };
    for (var M in W) {
        I(W, M) && (N = M.toLowerCase(), am[N] = W[M](), Q.push((am[N] ? "" : "no-") + N))
    }
    return am.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                I(e, f) && am.addTest(f, e[f])
            }
        } else {
            e = e.toLowerCase();
            if (am[e] !== ao) {
                return am
            }
            c = typeof c == "function" ? c() : c, typeof al != "undefined" && al && (ak.className += " " + (c ? "" : "no-") + e), am[e] = c
        }
        return am
    }, ab(""), ai = ag = null, function(aw, av) {
        function B(f, e) {
            var h = f.createElement("p"), g = f.getElementsByTagName("head")[0] || f.documentElement;
            return h.innerHTML = "x<style>" + e + "</style>", g.insertBefore(h.lastChild, g.firstChild)
        }
        function A() {
            var b = t.elements;
            return typeof b == "string" ? b.split(" ") : b
        }
        function z(e) {
            var c = D[e[F]];
            return c || (c = {}, E++, e[F] = E, D[E] = c), c
        }
        function y(b, h, f) {
            h || (h = av);
            if (C) {
                return h.createElement(b)
            }
            f || (f = z(h));
            var e;
            return f.cache[b] ? e = f.cache[b].cloneNode() : H.test(b) ? e = (f.cache[b] = f.createElem(b)).cloneNode() : e = f.createElem(b), e.canHaveChildren&&!ar.test(b)&&!e.tagUrn ? f.frag.appendChild(e) : e
        }
        function x(b, n) {
            b || (b = av);
            if (C) {
                return b.createDocumentFragment()
            }
            n = n || z(b);
            var m = n.frag.cloneNode(), k = 0, j = A(), h = j.length;
            for (; k < h; k++) {
                m.createElement(j[k])
            }
            return m
        }
        function v(e, c) {
            c.cache || (c.cache = {}, c.createElem = e.createElement, c.createFrag = e.createDocumentFragment, c.frag = c.createFrag()), e.createElement = function(a) {
                return t.shivMethods ? y(a, e, c) : c.createElem(a)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + A().join().replace(/[\w\-]+/g, function(b) {
                return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
            }) + ");return n}")(t, c.frag)
        }
        function u(b) {
            b || (b = av);
            var e = z(b);
            return t.shivCSS&&!G&&!e.hasCSS && (e.hasCSS=!!B(b, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), C || v(b, e), b
        }
        var au = "3.7.0", at = aw.html5 || {}, ar = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, H = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, G, F = "_html5shiv", E = 0, D = {}, C;
        (function() {
            try {
                var b = av.createElement("a");
                b.innerHTML = "<xyz></xyz>", G = "hidden" in b, C = b.childNodes.length == 1 || function() {
                    av.createElement("a");
                    var c = av.createDocumentFragment();
                    return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                }()
            } catch (e) {
                G=!0, C=!0
            }
        })();
        var t = {
            elements: at.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: au,
            shivCSS: at.shivCSS!==!1,
            supportsUnknownElements: C,
            shivMethods: at.shivMethods!==!1,
            type: "default",
            shivDocument: u,
            createElement: y,
            createDocumentFragment: x
        };
        aw.html5 = t, u(av)
    }(this, ap), am._version = an, am._prefixes = ae, am._domPrefixes = aa, am._cssomPrefixes = ac, am.testProp = function(b) {
        return T([b])
    }, am.testAllProps = P, am.testStyles = K, ak.className = ak.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (al ? " js " + Q.join(" ") : ""), am
}(this, this.document), Modernizr.addTest("cssfilters", function() {
    var b = document.createElement("div");
    return b.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "), !!b.style.length && (document.documentMode === undefined || document.documentMode > 9)
});
/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function(a6, aJ) {
    var al, A, aF = typeof aJ, aO = a6.location, o = a6.document, b0 = o.documentElement, bm = a6.jQuery, K = a6.$, ad = {}, ba = [], v = "1.10.2", aL = ba.concat, ar = ba.push, a8 = ba.slice, aP = ba.indexOf, C = ad.toString, Y = ad.hasOwnProperty, aT = v.trim, bN = function(e, b8) {
        return new bN.fn.init(e, b8, A)
    }, bE = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, af = /\S+/g, F = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bv = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bl = /^[\],:{}\s]*$/, bo = /(?:^|:|,)(?:\s*\[)+/g, bK = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, a2 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bW = /^-ms-/, aY = /-([\da-z])/gi, P = function(e, b8) {
        return b8.toUpperCase()
    }, b1 = function(e) {
        if (o.addEventListener || e.type === "load" || o.readyState === "complete") {
            bp();
            bN.ready()
        }
    }, bp = function() {
        if (o.addEventListener) {
            o.removeEventListener("DOMContentLoaded", b1, false);
            a6.removeEventListener("load", b1, false)
        } else {
            o.detachEvent("onreadystatechange", b1);
            a6.detachEvent("onload", b1)
        }
    };
    bN.fn = bN.prototype = {
        jquery: v,
        constructor: bN,
        init: function(e, ca, b9) {
            var b8, cb;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    b8 = [null, e, null]
                } else {
                    b8 = bv.exec(e)
                }
                if (b8 && (b8[1] ||!ca)) {
                    if (b8[1]) {
                        ca = ca instanceof bN ? ca[0] : ca;
                        bN.merge(this, bN.parseHTML(b8[1], ca && ca.nodeType ? ca.ownerDocument || ca : o, true));
                        if (a.test(b8[1]) && bN.isPlainObject(ca)) {
                            for (b8 in ca) {
                                if (bN.isFunction(this[b8])) {
                                    this[b8](ca[b8])
                                } else {
                                    this.attr(b8, ca[b8])
                                }
                            }
                        }
                        return this
                    } else {
                        cb = o.getElementById(b8[2]);
                        if (cb && cb.parentNode) {
                            if (cb.id !== b8[2]) {
                                return b9.find(e)
                            }
                            this.length = 1;
                            this[0] = cb
                        }
                        this.context = o;
                        this.selector = e;
                        return this
                    }
                } else {
                    if (!ca || ca.jquery) {
                        return (ca || b9).find(e)
                    } else {
                        return this.constructor(ca).find(e)
                    }
                }
            } else {
                if (e.nodeType) {
                    this.context = this[0] = e;
                    this.length = 1;
                    return this
                } else {
                    if (bN.isFunction(e)) {
                        return b9.ready(e)
                    }
                }
            }
            if (e.selector !== aJ) {
                this.selector = e.selector;
                this.context = e.context
            }
            return bN.makeArray(e, this)
        },
        selector: "",
        length: 0,
        toArray: function() {
            return a8.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        },
        pushStack: function(e) {
            var b8 = bN.merge(this.constructor(), e);
            b8.prevObject = this;
            b8.context = this.context;
            return b8
        },
        each: function(b8, e) {
            return bN.each(this, b8, e)
        },
        ready: function(e) {
            bN.ready.promise().done(e);
            return this
        },
        slice: function() {
            return this.pushStack(a8.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(b9) {
            var e = this.length, b8 =+ b9 + (b9 < 0 ? e : 0);
            return this.pushStack(b8 >= 0 && b8 < e ? [this[b8]] : [])
        },
        map: function(e) {
            return this.pushStack(bN.map(this, function(b9, b8) {
                return e.call(b9, b8, b9)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ar,
        sort: [].sort,
        splice: [].splice
    };
    bN.fn.init.prototype = bN.fn;
    bN.extend = bN.fn.extend = function() {
        var e, ce, b8, b9, ch, cf, cc = arguments[0] || {}, cb = 1, ca = arguments.length, cg = false;
        if (typeof cc === "boolean") {
            cg = cc;
            cc = arguments[1] || {};
            cb = 2
        }
        if (typeof cc !== "object"&&!bN.isFunction(cc)) {
            cc = {}
        }
        if (ca === cb) {
            cc = this;
            --cb
        }
        for (; cb < ca; cb++) {
            if ((ch = arguments[cb]) != null) {
                for (b9 in ch) {
                    e = cc[b9];
                    b8 = ch[b9];
                    if (cc === b8) {
                        continue
                    }
                    if (cg && b8 && (bN.isPlainObject(b8) || (ce = bN.isArray(b8)))) {
                        if (ce) {
                            ce = false;
                            cf = e && bN.isArray(e) ? e : []
                        } else {
                            cf = e && bN.isPlainObject(e) ? e : {}
                        }
                        cc[b9] = bN.extend(cg, cf, b8)
                    } else {
                        if (b8 !== aJ) {
                            cc[b9] = b8
                        }
                    }
                }
            }
        }
        return cc
    };
    bN.extend({
        expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
        noConflict: function(e) {
            if (a6.$ === bN) {
                a6.$ = K
            }
            if (e && a6.jQuery === bN) {
                a6.jQuery = bm
            }
            return bN
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                bN.readyWait++
            } else {
                bN.ready(true)
            }
        },
        ready: function(e) {
            if (e === true?--bN.readyWait : bN.isReady) {
                return 
            }
            if (!o.body) {
                return setTimeout(bN.ready)
            }
            bN.isReady = true;
            if (e !== true&&--bN.readyWait > 0) {
                return 
            }
            al.resolveWith(o, [bN]);
            if (bN.fn.trigger) {
                bN(o).trigger("ready").off("ready")
            }
        },
        isFunction: function(e) {
            return bN.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return bN.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            if (e == null) {
                return String(e)
            }
            return typeof e === "object" || typeof e === "function" ? ad[C.call(e)] || "object" : typeof e
        },
        isPlainObject: function(ca) {
            var b8;
            if (!ca || bN.type(ca) !== "object" || ca.nodeType || bN.isWindow(ca)) {
                return false
            }
            try {
                if (ca.constructor&&!Y.call(ca, "constructor")&&!Y.call(ca.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b9) {
                return false
            }
            if (bN.support.ownLast) {
                for (b8 in ca) {
                    return Y.call(ca, b8)
                }
            }
            for (b8 in ca) {}
            return b8 === aJ || Y.call(ca, b8)
        },
        isEmptyObject: function(b8) {
            var e;
            for (e in b8) {
                return false
            }
            return true
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(cb, b9, ca) {
            if (!cb || typeof cb !== "string") {
                return null
            }
            if (typeof b9 === "boolean") {
                ca = b9;
                b9 = false
            }
            b9 = b9 || o;
            var b8 = a.exec(cb), e=!ca && [];
            if (b8) {
                return [b9.createElement(b8[1])]
            }
            b8 = bN.buildFragment([cb], b9, e);
            if (e) {
                bN(e).remove()
            }
            return bN.merge([], b8.childNodes)
        },
        parseJSON: function(e) {
            if (a6.JSON && a6.JSON.parse) {
                return a6.JSON.parse(e)
            }
            if (e === null) {
                return e
            }
            if (typeof e === "string") {
                e = bN.trim(e);
                if (e) {
                    if (bl.test(e.replace(bK, "@").replace(a2, "]").replace(bo, ""))) {
                        return (new Function("return " + e))()
                    }
                }
            }
            bN.error("Invalid JSON: " + e)
        },
        parseXML: function(ca) {
            var b8, b9;
            if (!ca || typeof ca !== "string") {
                return null
            }
            try {
                if (a6.DOMParser) {
                    b9 = new DOMParser();
                    b8 = b9.parseFromString(ca, "text/xml")
                } else {
                    b8 = new ActiveXObject("Microsoft.XMLDOM");
                    b8.async = "false";
                    b8.loadXML(ca)
                }
            } catch (cb) {
                b8 = aJ
            }
            if (!b8 ||!b8.documentElement || b8.getElementsByTagName("parsererror").length) {
                bN.error("Invalid XML: " + ca)
            }
            return b8
        },
        noop: function() {},
        globalEval: function(e) {
            if (e && bN.trim(e)) {
                (a6.execScript || function(b8) {
                    a6["eval"].call(a6, b8)
                })(e)
            }
        },
        camelCase: function(e) {
            return e.replace(bW, "ms-").replace(aY, P)
        },
        nodeName: function(b8, e) {
            return b8.nodeName && b8.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(cc, ce, b8) {
            var cb, b9 = 0, ca = cc.length, e = ae(cc);
            if (b8) {
                if (e) {
                    for (; b9 < ca; b9++) {
                        cb = ce.apply(cc[b9], b8);
                        if (cb === false) {
                            break
                        }
                    }
                } else {
                    for (b9 in cc) {
                        cb = ce.apply(cc[b9], b8);
                        if (cb === false) {
                            break
                        }
                    }
                }
            } else {
                if (e) {
                    for (; b9 < ca; b9++) {
                        cb = ce.call(cc[b9], b9, cc[b9]);
                        if (cb === false) {
                            break
                        }
                    }
                } else {
                    for (b9 in cc) {
                        cb = ce.call(cc[b9], b9, cc[b9]);
                        if (cb === false) {
                            break
                        }
                    }
                }
            }
            return cc
        },
        trim: aT&&!aT.call("\uFEFF\xA0") ? function(e) {
            return e == null ? "" : aT.call(e)
        }
        : function(e) {
            return e == null ? "" : (e + "").replace(F, "")
        },
        makeArray: function(e, b9) {
            var b8 = b9 || [];
            if (e != null) {
                if (ae(Object(e))) {
                    bN.merge(b8, typeof e === "string" ? [e] : e)
                } else {
                    ar.call(b8, e)
                }
            }
            return b8
        },
        inArray: function(ca, b8, b9) {
            var e;
            if (b8) {
                if (aP) {
                    return aP.call(b8, ca, b9)
                }
                e = b8.length;
                b9 = b9 ? b9 < 0 ? Math.max(0, e + b9) : b9 : 0;
                for (; b9 < e; b9++) {
                    if (b9 in b8 && b8[b9] === ca) {
                        return b9
                    }
                }
            }
            return - 1
        },
        merge: function(cb, b9) {
            var e = b9.length, ca = cb.length, b8 = 0;
            if (typeof e === "number") {
                for (; b8 < e; b8++) {
                    cb[ca++] = b9[b8]
                }
            } else {
                while (b9[b8] !== aJ) {
                    cb[ca++] = b9[b8++]
                }
            }
            cb.length = ca;
            return cb
        },
        grep: function(b8, ce, e) {
            var cc, b9 = [], ca = 0, cb = b8.length;
            e=!!e;
            for (; ca < cb; ca++) {
                cc=!!ce(b8[ca], ca);
                if (e !== cc) {
                    b9.push(b8[ca])
                }
            }
            return b9
        },
        map: function(b9, cf, e) {
            var ce, cb = 0, cc = b9.length, b8 = ae(b9), ca = [];
            if (b8) {
                for (; cb < cc; cb++) {
                    ce = cf(b9[cb], cb, e);
                    if (ce != null) {
                        ca[ca.length] = ce
                    }
                }
            } else {
                for (cb in b9) {
                    ce = cf(b9[cb], cb, e);
                    if (ce != null) {
                        ca[ca.length] = ce
                    }
                }
            }
            return aL.apply([], ca)
        },
        guid: 1,
        proxy: function(cb, ca) {
            var e, b9, b8;
            if (typeof ca === "string") {
                b8 = cb[ca];
                ca = cb;
                cb = b8
            }
            if (!bN.isFunction(cb)) {
                return aJ
            }
            e = a8.call(arguments, 2);
            b9 = function() {
                return cb.apply(ca || this, e.concat(a8.call(arguments)))
            };
            b9.guid = cb.guid = cb.guid || bN.guid++;
            return b9
        },
        access: function(e, cc, cf, ce, ca, ch, cg) {
            var b9 = 0, b8 = e.length, cb = cf == null;
            if (bN.type(cf) === "object") {
                ca = true;
                for (b9 in cf) {
                    bN.access(e, cc, b9, cf[b9], true, ch, cg)
                }
            } else {
                if (ce !== aJ) {
                    ca = true;
                    if (!bN.isFunction(ce)) {
                        cg = true
                    }
                    if (cb) {
                        if (cg) {
                            cc.call(e, ce);
                            cc = null
                        } else {
                            cb = cc;
                            cc = function(ck, cj, cl) {
                                return cb.call(bN(ck), cl)
                            }
                        }
                    }
                    if (cc) {
                        for (; b9 < b8; b9++) {
                            cc(e[b9], cf, cg ? ce : ce.call(e[b9], b9, cc(e[b9], cf)))
                        }
                    }
                }
            }
            return ca ? e : cb ? cc.call(e) : b8 ? cc(e[0], cf) : ch
        },
        now: function() {
            return (new Date()).getTime()
        },
        swap: function(cc, cb, ce, ca) {
            var b9, b8, e = {};
            for (b8 in cb) {
                e[b8] = cc.style[b8];
                cc.style[b8] = cb[b8]
            }
            b9 = ce.apply(cc, ca || []);
            for (b8 in cb) {
                cc.style[b8] = e[b8]
            }
            return b9
        }
    });
    bN.ready.promise = function(cb) {
        if (!al) {
            al = bN.Deferred();
            if (o.readyState === "complete") {
                setTimeout(bN.ready)
            } else {
                if (o.addEventListener) {
                    o.addEventListener("DOMContentLoaded", b1, false);
                    a6.addEventListener("load", b1, false)
                } else {
                    o.attachEvent("onreadystatechange", b1);
                    a6.attachEvent("onload", b1);
                    var ca = false;
                    try {
                        ca = a6.frameElement == null && o.documentElement
                    } catch (b9) {}
                    if (ca && ca.doScroll) {
                        (function b8() {
                            if (!bN.isReady) {
                                try {
                                    ca.doScroll("left")
                                } catch (cc) {
                                    return setTimeout(b8, 50)
                                }
                                bp();
                                bN.ready()
                            }
                        })()
                    }
                }
            }
        }
        return al.promise(cb)
    };
    bN.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b8, e) {
        ad["[object " + e + "]"] = e.toLowerCase()
    });
    function ae(b9) {
        var b8 = b9.length, e = bN.type(b9);
        if (bN.isWindow(b9)) {
            return false
        }
        if (b9.nodeType === 1 && b8) {
            return true
        }
        return e === "array" || e !== "function" && (b8 === 0 || typeof b8 === "number" && b8 > 0 && (b8 - 1) in b9)
    }
    A = bN(o);
    /*!
     * Sizzle CSS Selector Engine v1.10.2
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-07-03
     */
    (function(dk, co) {
        var cD, dn, cj, ct, cM, cP, c0, ds, cN, c3, cH, cu, dd, c7, dl, ch, cK, df = "sizzle" +- (new Date()), cO = dk.document, dp = 0, c8 = 0, cb = cF(), de = cF(), cL = cF(), c1 = false, cJ = function(dt, e) {
            if (dt === e) {
                c1 = true;
                return 0
            }
            return 0
        }, dj = typeof co, cV = 1<<31, cT = ({}).hasOwnProperty, dh = [], di = dh.pop, cR = dh.push, b9 = dh.push, cs = dh.slice, cg = dh.indexOf || function(du) {
            var dt = 0, e = this.length;
            for (; dt < e; dt++) {
                if (this[dt] === du) {
                    return dt
                }
            }
            return - 1
        }, ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cv = "[\\x20\\t\\r\\n\\f]", b8 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cQ = b8.replace("w", "w#"), db = "\\[" + cv + "*(" + b8 + ")" + cv + "*(?:([*^$|!~]?=)" + cv + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cQ + ")|)|)" + cv + "*\\]", cq = ":(" + b8 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + db.replace(3, 8) + ")*)|.*)\\)|)", cx = new RegExp("^" + cv + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cv + "+$", "g"), cA = new RegExp("^" + cv + "*," + cv + "*"), cG = new RegExp("^" + cv + "*([>+~]|" + cv + ")" + cv + "*"), c5 = new RegExp(cv + "*[+~]"), cz = new RegExp("=" + cv + "*([^\\]'\"]*)" + cv + "*\\]", "g"), cX = new RegExp(cq), cY = new RegExp("^" + cQ + "$"), c6 = {
            ID: new RegExp("^#(" + b8 + ")"),
            CLASS: new RegExp("^\\.(" + b8 + ")"),
            TAG: new RegExp("^(" + b8.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + db),
            PSEUDO: new RegExp("^" + cq),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cv + "*(even|odd|(([+-]|)(\\d*)n|)" + cv + "*(?:([+-]|)" + cv + "*(\\d+)|))" + cv + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ca + ")$", "i"),
            needsContext: new RegExp("^" + cv + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cv + "*((?:-\\d)?\\d*)" + cv + "*\\)|)(?=[^-]|$)", "i")
        }, cU = /^[^{]+\{\s*\[native \w/, cW = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, cf = /^(?:input|select|textarea|button)$/i, cr = /^h\d$/i, cS = /'|\\/g, cy = new RegExp("\\\\([\\da-f]{1,6}" + cv + "?|(" + cv + ")|.)", "ig"), c9 = function(e, dv, dt) {
            var du = "0x" + dv - 65536;
            return du !== du || dt ? dv : du < 0 ? String.fromCharCode(du + 65536) : String.fromCharCode(du>>10 | 55296, du & 1023 | 56320)
        };
        try {
            b9.apply((dh = cs.call(cO.childNodes)), cO.childNodes);
            dh[cO.childNodes.length].nodeType
        } catch (cI) {
            b9 = {
                apply: dh.length ? function(dt, e) {
                    cR.apply(dt, cs.call(e))
                }
                : function(dv, du) {
                    var e = dv.length, dt = 0;
                    while ((dv[e++] = du[dt++])) {}
                    dv.length = e - 1
                }
            }
        }
        function cB(dB, dt, dF, dH) {
            var dG, dx, dy, dD, dE, dw, dv, e, du, dC;
            if ((dt ? dt.ownerDocument || dt : cO) !== cH) {
                c3(dt)
            }
            dt = dt || cH;
            dF = dF || [];
            if (!dB || typeof dB !== "string") {
                return dF
            }
            if ((dD = dt.nodeType) !== 1 && dD !== 9) {
                return []
            }
            if (dd&&!dH) {
                if ((dG = cW.exec(dB))) {
                    if ((dy = dG[1])) {
                        if (dD === 9) {
                            dx = dt.getElementById(dy);
                            if (dx && dx.parentNode) {
                                if (dx.id === dy) {
                                    dF.push(dx);
                                    return dF
                                }
                            } else {
                                return dF
                            }
                        } else {
                            if (dt.ownerDocument && (dx = dt.ownerDocument.getElementById(dy)) && cK(dt, dx) && dx.id === dy) {
                                dF.push(dx);
                                return dF
                            }
                        }
                    } else {
                        if (dG[2]) {
                            b9.apply(dF, dt.getElementsByTagName(dB));
                            return dF
                        } else {
                            if ((dy = dG[3]) && dn.getElementsByClassName && dt.getElementsByClassName) {
                                b9.apply(dF, dt.getElementsByClassName(dy));
                                return dF
                            }
                        }
                    }
                }
                if (dn.qsa && (!c7 ||!c7.test(dB))) {
                    e = dv = df;
                    du = dt;
                    dC = dD === 9 && dB;
                    if (dD === 1 && dt.nodeName.toLowerCase() !== "object") {
                        dw = cm(dB);
                        if ((dv = dt.getAttribute("id"))) {
                            e = dv.replace(cS, "\\$&")
                        } else {
                            dt.setAttribute("id", e)
                        }
                        e = "[id='" + e + "'] ";
                        dE = dw.length;
                        while (dE--) {
                            dw[dE] = e + cn(dw[dE])
                        }
                        du = c5.test(dB) && dt.parentNode || dt;
                        dC = dw.join(",")
                    }
                    if (dC) {
                        try {
                            b9.apply(dF, du.querySelectorAll(dC));
                            return dF
                        } catch (dA) {} finally {
                            if (!dv) {
                                dt.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return dm(dB.replace(cx, "$1"), dt, dF, dH)
        }
        function cF() {
            var dt = [];
            function e(du, dv) {
                if (dt.push(du += " ") > ct.cacheLength) {
                    delete e[dt.shift()]
                }
                return (e[du] = dv)
            }
            return e
        }
        function cp(e) {
            e[df] = true;
            return e
        }
        function ck(dt) {
            var dv = cH.createElement("div");
            try {
                return !!dt(dv)
            } catch (du) {
                return false
            } finally {
                if (dv.parentNode) {
                    dv.parentNode.removeChild(dv)
                }
                dv = null
            }
        }
        function dq(dt, dv) {
            var e = dt.split("|"), du = dt.length;
            while (du--) {
                ct.attrHandle[e[du]] = dv
            }
        }
        function cc(dt, e) {
            var dv = e && dt, du = dv && dt.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cV) - (~dt.sourceIndex || cV);
            if (du) {
                return du
            }
            if (dv) {
                while ((dv = dv.nextSibling)) {
                    if (dv === e) {
                        return - 1
                    }
                }
            }
            return dt ? 1 : - 1
        }
        function cC(e) {
            return function(du) {
                var dt = du.nodeName.toLowerCase();
                return dt === "input" && du.type === e
            }
        }
        function ce(e) {
            return function(du) {
                var dt = du.nodeName.toLowerCase();
                return (dt === "input" || dt === "button") && du.type === e
            }
        }
        function dc(e) {
            return cp(function(dt) {
                dt =+ dt;
                return cp(function(du, dy) {
                    var dw, dv = e([], du.length, dt), dx = dv.length;
                    while (dx--) {
                        if (du[(dw = dv[dx])]) {
                            du[dw]=!(dy[dw] = du[dw])
                        }
                    }
                })
            })
        }
        cP = cB.isXML = function(e) {
            var dt = e && (e.ownerDocument || e).documentElement;
            return dt ? dt.nodeName !== "HTML" : false
        };
        dn = cB.support = {};
        c3 = cB.setDocument = function(dt) {
            var du = dt ? dt.ownerDocument || dt: cO, e = du.defaultView;
            if (du === cH || du.nodeType !== 9 ||!du.documentElement) {
                return cH
            }
            cH = du;
            cu = du.documentElement;
            dd=!cP(du);
            if (e && e.attachEvent && e !== e.top) {
                e.attachEvent("onbeforeunload", function() {
                    c3()
                })
            }
            dn.attributes = ck(function(dv) {
                dv.className = "i";
                return !dv.getAttribute("className")
            });
            dn.getElementsByTagName = ck(function(dv) {
                dv.appendChild(du.createComment(""));
                return !dv.getElementsByTagName("*").length
            });
            dn.getElementsByClassName = ck(function(dv) {
                dv.innerHTML = "<div class='a'></div><div class='a i'></div>";
                dv.firstChild.className = "i";
                return dv.getElementsByClassName("i").length === 2
            });
            dn.getById = ck(function(dv) {
                cu.appendChild(dv).id = df;
                return !du.getElementsByName ||!du.getElementsByName(df).length
            });
            if (dn.getById) {
                ct.find.ID = function(dx, dw) {
                    if (typeof dw.getElementById !== dj && dd) {
                        var dv = dw.getElementById(dx);
                        return dv && dv.parentNode ? [dv] : []
                    }
                };
                ct.filter.ID = function(dw) {
                    var dv = dw.replace(cy, c9);
                    return function(dx) {
                        return dx.getAttribute("id") === dv
                    }
                }
            } else {
                delete ct.find.ID;
                ct.filter.ID = function(dw) {
                    var dv = dw.replace(cy, c9);
                    return function(dy) {
                        var dx = typeof dy.getAttributeNode !== dj && dy.getAttributeNode("id");
                        return dx && dx.value === dv
                    }
                }
            }
            ct.find.TAG = dn.getElementsByTagName ? function(dv, dw) {
                if (typeof dw.getElementsByTagName !== dj) {
                    return dw.getElementsByTagName(dv)
                }
            } : function(dv, dA) {
                var dB, dy = [], dx = 0, dw = dA.getElementsByTagName(dv);
                if (dv === "*") {
                    while ((dB = dw[dx++])) {
                        if (dB.nodeType === 1) {
                            dy.push(dB)
                        }
                    }
                    return dy
                }
                return dw
            };
            ct.find.CLASS = dn.getElementsByClassName && function(dw, dv) {
                if (typeof dv.getElementsByClassName !== dj && dd) {
                    return dv.getElementsByClassName(dw)
                }
            };
            dl = [];
            c7 = [];
            if ((dn.qsa = cU.test(du.querySelectorAll))) {
                ck(function(dv) {
                    dv.innerHTML = "<select><option selected=''></option></select>";
                    if (!dv.querySelectorAll("[selected]").length) {
                        c7.push("\\[" + cv + "*(?:value|" + ca + ")")
                    }
                    if (!dv.querySelectorAll(":checked").length) {
                        c7.push(":checked")
                    }
                });
                ck(function(dw) {
                    var dv = du.createElement("input");
                    dv.setAttribute("type", "hidden");
                    dw.appendChild(dv).setAttribute("t", "");
                    if (dw.querySelectorAll("[t^='']").length) {
                        c7.push("[*^$]=" + cv + "*(?:''|\"\")")
                    }
                    if (!dw.querySelectorAll(":enabled").length) {
                        c7.push(":enabled", ":disabled")
                    }
                    dw.querySelectorAll("*,:x");
                    c7.push(",.*:")
                })
            }
            if ((dn.matchesSelector = cU.test((ch = cu.webkitMatchesSelector || cu.mozMatchesSelector || cu.oMatchesSelector || cu.msMatchesSelector)))) {
                ck(function(dv) {
                    dn.disconnectedMatch = ch.call(dv, "div");
                    ch.call(dv, "[s!='']:x");
                    dl.push("!=", cq)
                })
            }
            c7 = c7.length && new RegExp(c7.join("|"));
            dl = dl.length && new RegExp(dl.join("|"));
            cK = cU.test(cu.contains) || cu.compareDocumentPosition ? function(dw, dv) {
                var dy = dw.nodeType === 9 ? dw.documentElement: dw, dx = dv && dv.parentNode;
                return dw === dx||!!(dx && dx.nodeType === 1 && (dy.contains ? dy.contains(dx) : dw.compareDocumentPosition && dw.compareDocumentPosition(dx) & 16))
            } : function(dw, dv) {
                if (dv) {
                    while ((dv = dv.parentNode)) {
                        if (dv === dw) {
                            return true
                        }
                    }
                }
                return false
            };
            cJ = cu.compareDocumentPosition ? function(dw, dv) {
                if (dw === dv) {
                    c1 = true;
                    return 0
                }
                var dx = dv.compareDocumentPosition && dw.compareDocumentPosition && dw.compareDocumentPosition(dv);
                if (dx) {
                    if (dx & 1 || (!dn.sortDetached && dv.compareDocumentPosition(dw) === dx)) {
                        if (dw === du || cK(cO, dw)) {
                            return - 1
                        }
                        if (dv === du || cK(cO, dv)) {
                            return 1
                        }
                        return cN ? (cg.call(cN, dw) - cg.call(cN, dv)) : 0
                    }
                    return dx & 4?-1 : 1
                }
                return dw.compareDocumentPosition?-1 : 1
            } : function(dw, dv) {
                var dD, dA = 0, dC = dw.parentNode, dy = dv.parentNode, dx = [dw], dB = [dv];
                if (dw === dv) {
                    c1 = true;
                    return 0
                } else {
                    if (!dC ||!dy) {
                        return dw === du?-1 : dv === du ? 1 : dC?-1 : dy ? 1 : cN ? (cg.call(cN, dw) - cg.call(cN, dv)) : 0
                    } else {
                        if (dC === dy) {
                            return cc(dw, dv)
                        }
                    }
                }
                dD = dw;
                while ((dD = dD.parentNode)) {
                    dx.unshift(dD)
                }
                dD = dv;
                while ((dD = dD.parentNode)) {
                    dB.unshift(dD)
                }
                while (dx[dA] === dB[dA]) {
                    dA++
                }
                return dA ? cc(dx[dA], dB[dA]) : dx[dA] === cO?-1 : dB[dA] === cO ? 1 : 0
            };
            return du
        };
        cB.matches = function(dt, e) {
            return cB(dt, null, null, e)
        };
        cB.matchesSelector = function(du, dw) {
            if ((du.ownerDocument || du) !== cH) {
                c3(du)
            }
            dw = dw.replace(cz, "='$1']");
            if (dn.matchesSelector && dd && (!dl ||!dl.test(dw)) && (!c7 ||!c7.test(dw))) {
                try {
                    var dt = ch.call(du, dw);
                    if (dt || dn.disconnectedMatch || du.document && du.document.nodeType !== 11) {
                        return dt
                    }
                } catch (dv) {}
            }
            return cB(dw, cH, null, [du]).length > 0
        };
        cB.contains = function(e, dt) {
            if ((e.ownerDocument || e) !== cH) {
                c3(e)
            }
            return cK(e, dt)
        };
        cB.attr = function(du, e) {
            if ((du.ownerDocument || du) !== cH) {
                c3(du)
            }
            var dt = ct.attrHandle[e.toLowerCase()], dv = dt && cT.call(ct.attrHandle, e.toLowerCase()) ? dt(du, e, !dd): co;
            return dv === co ? dn.attributes ||!dd ? du.getAttribute(e) : (dv = du.getAttributeNode(e)) && dv.specified ? dv.value : null : dv
        };
        cB.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        cB.uniqueSort = function(du) {
            var dv, dw = [], e = 0, dt = 0;
            c1=!dn.detectDuplicates;
            cN=!dn.sortStable && du.slice(0);
            du.sort(cJ);
            if (c1) {
                while ((dv = du[dt++])) {
                    if (dv === du[dt]) {
                        e = dw.push(dt)
                    }
                }
                while (e--) {
                    du.splice(dw[e], 1)
                }
            }
            return du
        };
        cM = cB.getText = function(dw) {
            var dv, dt = "", du = 0, e = dw.nodeType;
            if (!e) {
                for (; (dv = dw[du]); du++) {
                    dt += cM(dv)
                }
            } else {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof dw.textContent === "string") {
                        return dw.textContent
                    } else {
                        for (dw = dw.firstChild; dw; dw = dw.nextSibling) {
                            dt += cM(dw)
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return dw.nodeValue
                    }
                }
            }
            return dt
        };
        ct = cB.selectors = {
            cacheLength: 50,
            createPseudo: cp,
            match: c6,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(cy, c9);
                    e[3] = (e[4] || e[5] || "").replace(cy, c9);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            cB.error(e[0])
                        }
                        e[4] =+ (e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] =+ ((e[7] + e[8]) || e[3] === "odd")
                    } else {
                        if (e[3]) {
                            cB.error(e[0])
                        }
                    }
                    return e
                },
                PSEUDO: function(dt) {
                    var e, du=!dt[5] && dt[2];
                    if (c6.CHILD.test(dt[0])) {
                        return null
                    }
                    if (dt[3] && dt[4] !== co) {
                        dt[2] = dt[4]
                    } else {
                        if (du && cX.test(du) && (e = cm(du, true)) && (e = du.indexOf(")", du.length - e) - du.length)) {
                            dt[0] = dt[0].slice(0, e);
                            dt[2] = du.slice(0, e)
                        }
                    }
                    return dt.slice(0, 3)
                }
            },
            filter: {
                TAG: function(dt) {
                    var e = dt.replace(cy, c9).toLowerCase();
                    return dt === "*" ? function() {
                        return true
                    } : function(du) {
                        return du.nodeName && du.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(e) {
                    var dt = cb[e + " "];
                    return dt || (dt = new RegExp("(^|" + cv + ")" + e + "(" + cv + "|$)")) && cb(e, function(du) {
                        return dt.test(typeof du.className === "string" && du.className || typeof du.getAttribute !== dj && du.getAttribute("class") || "")
                    })
                },
                ATTR: function(du, dt, e) {
                    return function(dw) {
                        var dv = cB.attr(dw, du);
                        if (dv == null) {
                            return dt === "!="
                        }
                        if (!dt) {
                            return true
                        }
                        dv += "";
                        return dt === "=" ? dv === e : dt === "!=" ? dv !== e : dt === "^=" ? e && dv.indexOf(e) === 0 : dt === "*=" ? e && dv.indexOf(e)>-1 : dt === "$=" ? e && dv.slice( - e.length) === e : dt === "~=" ? (" " + dv + " ").indexOf(e)>-1 : dt === "|=" ? dv === e || dv.slice(0, e.length + 1) === e + "-" : false
                    }
                },
                CHILD: function(dt, dw, dv, dx, du) {
                    var dA = dt.slice(0, 3) !== "nth", e = dt.slice( - 4) !== "last", dy = dw === "of-type";
                    return dx === 1 && du === 0 ? function(dB) {
                        return !!dB.parentNode
                    } : function(dH, dF, dK) {
                        var dB, dN, dI, dM, dJ, dE, dG = dA !== e ? "nextSibling": "previousSibling", dL = dH.parentNode, dD = dy && dH.nodeName.toLowerCase(), dC=!dK&&!dy;
                        if (dL) {
                            if (dA) {
                                while (dG) {
                                    dI = dH;
                                    while ((dI = dI[dG])) {
                                        if (dy ? dI.nodeName.toLowerCase() === dD : dI.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    dE = dG = dt === "only"&&!dE && "nextSibling"
                                }
                                return true
                            }
                            dE = [e ? dL.firstChild: dL.lastChild];
                            if (e && dC) {
                                dN = dL[df] || (dL[df] = {});
                                dB = dN[dt] || [];
                                dJ = dB[0] === dp && dB[1];
                                dM = dB[0] === dp && dB[2];
                                dI = dJ && dL.childNodes[dJ];
                                while ((dI=++dJ && dI && dI[dG] || (dM = dJ = 0) || dE.pop())
                                    ) {
                                    if (dI.nodeType === 1&&++dM && dI === dH) {
                                        dN[dt] = [dp, dJ, dM];
                                        break
                                    }
                                }
                            } else {
                                if (dC && (dB = (dH[df] || (dH[df] = {}))[dt]) && dB[0] === dp) {
                                    dM = dB[1]
                                } else {
                                    while ((dI=++dJ && dI && dI[dG] || (dM = dJ = 0) || dE.pop())
                                        ) {
                                        if ((dy ? dI.nodeName.toLowerCase() === dD : dI.nodeType === 1)&&++dM) {
                                            if (dC) {
                                                (dI[df] || (dI[df] = {}))[dt] = [dp, dM]
                                            }
                                            if (dI === dH) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            dM -= du;
                            return dM === dx || (dM%dx === 0 && dM / dx >= 0)
                        }
                    }
                },
                PSEUDO: function(dv, du) {
                    var e, dt = ct.pseudos[dv] || ct.setFilters[dv.toLowerCase()] || cB.error("unsupported pseudo: " + dv);
                    if (dt[df]) {
                        return dt(du)
                    }
                    if (dt.length > 1) {
                        e = [dv, dv, "", du];
                        return ct.setFilters.hasOwnProperty(dv.toLowerCase()) ? cp(function(dy, dB) {
                            var dx, dw = dt(dy, du), dA = dw.length;
                            while (dA--) {
                                dx = cg.call(dy, dw[dA]);
                                dy[dx]=!(dB[dx] = dw[dA])
                            }
                        }) : function(dw) {
                            return dt(dw, 0, e)
                        }
                    }
                    return dt
                }
            },
            pseudos: {
                not: cp(function(e) {
                    var dt = [], du = [], dv = c0(e.replace(cx, "$1"));
                    return dv[df] ? cp(function(dx, dD, dB, dy) {
                        var dC, dw = dv(dx, null, dy, []), dA = dx.length;
                        while (dA--) {
                            if ((dC = dw[dA])) {
                                dx[dA]=!(dD[dA] = dC)
                            }
                        }
                    }) : function(dy, dx, dw) {
                        dt[0] = dy;
                        dv(dt, null, dw, du);
                        return !du.pop()
                    }
                }),
                has: cp(function(e) {
                    return function(dt) {
                        return cB(e, dt).length > 0
                    }
                }),
                contains: cp(function(e) {
                    return function(dt) {
                        return (dt.textContent || dt.innerText || cM(dt)).indexOf(e)>-1
                    }
                }),
                lang: cp(function(e) {
                    if (!cY.test(e || "")) {
                        cB.error("unsupported lang: " + e)
                    }
                    e = e.replace(cy, c9).toLowerCase();
                    return function(du) {
                        var dt;
                        do {
                            if ((dt = dd ? du.lang : du.getAttribute("xml:lang") || du.getAttribute("lang"))) {
                                dt = dt.toLowerCase();
                                return dt === e || dt.indexOf(e + "-") === 0
                            }
                        }
                        while ((du = du.parentNode) && du.nodeType === 1);
                        return false
                    }
                }),
                target: function(e) {
                    var dt = dk.location && dk.location.hash;
                    return dt && dt.slice(1) === e.id
                },
                root: function(e) {
                    return e === cu
                },
                focus: function(e) {
                    return e === cH.activeElement && (!cH.hasFocus || cH.hasFocus())&&!!(e.type || e.href||~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === false
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    var dt = e.nodeName.toLowerCase();
                    return (dt === "input"&&!!e.checked) || (dt === "option"&&!!e.selected)
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(e) {
                    return !ct.pseudos.empty(e)
                },
                header: function(e) {
                    return cr.test(e.nodeName)
                },
                input: function(e) {
                    return cf.test(e.nodeName)
                },
                button: function(dt) {
                    var e = dt.nodeName.toLowerCase();
                    return e === "input" && dt.type === "button" || e === "button"
                },
                text: function(dt) {
                    var e;
                    return dt.nodeName.toLowerCase() === "input" && dt.type === "text" && ((e = dt.getAttribute("type")) == null || e.toLowerCase() === dt.type)
                },
                first: dc(function() {
                    return [0]
                }),
                last: dc(function(e, dt) {
                    return [dt - 1]
                }),
                eq: dc(function(e, du, dt) {
                    return [dt < 0 ? dt + du: dt]
                }),
                even: dc(function(e, du) {
                    var dt = 0;
                    for (; dt < du; dt += 2) {
                        e.push(dt)
                    }
                    return e
                }),
                odd: dc(function(e, du) {
                    var dt = 1;
                    for (; dt < du; dt += 2) {
                        e.push(dt)
                    }
                    return e
                }),
                lt: dc(function(e, dv, du) {
                    var dt = du < 0 ? du + dv: du;
                    for (; --dt >= 0;) {
                        e.push(dt)
                    }
                    return e
                }),
                gt: dc(function(e, dv, du) {
                    var dt = du < 0 ? du + dv: du;
                    for (; ++dt < dv;) {
                        e.push(dt)
                    }
                    return e
                })
            }
        };
        ct.pseudos.nth = ct.pseudos.eq;
        for (cD in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            ct.pseudos[cD] = cC(cD)
        }
        for (cD in {
            submit: true,
            reset: true
        }) {
            ct.pseudos[cD] = ce(cD)
        }
        function cZ() {}
        cZ.prototype = ct.filters = ct.pseudos;
        ct.setFilters = new cZ();
        function cm(dw, dC) {
            var dt, dx, dA, dB, dy, du, e, dv = de[dw + " "];
            if (dv) {
                return dC ? 0 : dv.slice(0)
            }
            dy = dw;
            du = [];
            e = ct.preFilter;
            while (dy) {
                if (!dt || (dx = cA.exec(dy))) {
                    if (dx) {
                        dy = dy.slice(dx[0].length) || dy
                    }
                    du.push(dA = [])
                }
                dt = false;
                if ((dx = cG.exec(dy))) {
                    dt = dx.shift();
                    dA.push({
                        value: dt,
                        type: dx[0].replace(cx, " ")
                    });
                    dy = dy.slice(dt.length)
                }
                for (dB in ct.filter) {
                    if ((dx = c6[dB].exec(dy)) && (!e[dB] || (dx = e[dB](dx)))) {
                        dt = dx.shift();
                        dA.push({
                            value: dt,
                            type: dB,
                            matches: dx
                        });
                        dy = dy.slice(dt.length)
                    }
                }
                if (!dt) {
                    break
                }
            }
            return dC ? dy.length : dy ? cB.error(dw) : de(dw, du).slice(0)
        }
        function cn(dv) {
            var du = 0, dt = dv.length, e = "";
            for (; du < dt; du++) {
                e += dv[du].value
            }
            return e
        }
        function cw(dw, du, dv) {
            var e = du.dir, dx = dv && e === "parentNode", dt = c8++;
            return du.first ? function(dB, dA, dy) {
                while ((dB = dB[e])) {
                    if (dB.nodeType === 1 || dx) {
                        return dw(dB, dA, dy)
                    }
                }
            } : function(dD, dB, dA) {
                var dF, dy, dC, dE = dp + " " + dt;
                if (dA) {
                    while ((dD = dD[e])) {
                        if (dD.nodeType === 1 || dx) {
                            if (dw(dD, dB, dA)) {
                                return true
                            }
                        }
                    }
                } else {
                    while ((dD = dD[e])) {
                        if (dD.nodeType === 1 || dx) {
                            dC = dD[df] || (dD[df] = {});
                            if ((dy = dC[e]) && dy[0] === dE) {
                                if ((dF = dy[1]) === true || dF === cj) {
                                    return dF === true
                                }
                            } else {
                                dy = dC[e] = [dE];
                                dy[1] = dw(dD, dB, dA) || cj;
                                if (dy[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        function dr(e) {
            return e.length > 1 ? function(dw, dv, dt) {
                var du = e.length;
                while (du--) {
                    if (!e[du](dw, dv, dt)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }
        function c4(e, dt, du, dv, dy) {
            var dw, dC = [], dx = 0, dA = e.length, dB = dt != null;
            for (; dx < dA; dx++) {
                if ((dw = e[dx])) {
                    if (!du || du(dw, dv, dy)) {
                        dC.push(dw);
                        if (dB) {
                            dt.push(dx)
                        }
                    }
                }
            }
            return dC
        }
        function cl(du, dt, dw, dv, dx, e) {
            if (dv&&!dv[df]) {
                dv = cl(dv)
            }
            if (dx&&!dx[df]) {
                dx = cl(dx, e)
            }
            return cp(function(dJ, dG, dB, dI) {
                var dL, dH, dD, dC = [], dK = [], dA = dG.length, dy = dJ || cE(dt || "*", dB.nodeType ? [dB] : dB, []), dE = du && (dJ ||!dt) ? c4(dy, dC, du, dB, dI): dy, dF = dw ? dx || (dJ ? du : dA || dv) ? []: dG: dE;
                if (dw) {
                    dw(dE, dF, dB, dI)
                }
                if (dv) {
                    dL = c4(dF, dK);
                    dv(dL, [], dB, dI);
                    dH = dL.length;
                    while (dH--) {
                        if ((dD = dL[dH])) {
                            dF[dK[dH]]=!(dE[dK[dH]] = dD)
                        }
                    }
                }
                if (dJ) {
                    if (dx || du) {
                        if (dx) {
                            dL = [];
                            dH = dF.length;
                            while (dH--) {
                                if ((dD = dF[dH])) {
                                    dL.push((dE[dH] = dD))
                                }
                            }
                            dx(null, (dF = []), dL, dI)
                        }
                        dH = dF.length;
                        while (dH--) {
                            if ((dD = dF[dH]) && (dL = dx ? cg.call(dJ, dD) : dC[dH])>-1) {
                                dJ[dL]=!(dG[dL] = dD)
                            }
                        }
                    }
                } else {
                    dF = c4(dF === dG ? dF.splice(dA, dF.length) : dF);
                    if (dx) {
                        dx(null, dG, dF, dI)
                    } else {
                        b9.apply(dG, dF)
                    }
                }
            })
        }
        function dg(dy) {
            var dt, dw, du, dx = dy.length, dC = ct.relative[dy[0].type], dD = dC || ct.relative[" "], dv = dC ? 1: 0, dA = cw(function(dE) {
                return dE === dt
            }, dD, true), dB = cw(function(dE) {
                return cg.call(dt, dE)>-1
            }, dD, true), e = [function(dG, dF, dE) {
                return (!dC && (dE || dF !== ds)) || ((dt = dF).nodeType ? dA(dG, dF, dE) : dB(dG, dF, dE))
            }
            ];
            for (; dv < dx; dv++) {
                if ((dw = ct.relative[dy[dv].type])) {
                    e = [cw(dr(e), dw)]
                } else {
                    dw = ct.filter[dy[dv].type].apply(null, dy[dv].matches);
                    if (dw[df]) {
                        du=++dv;
                        for (; du < dx; du++) {
                            if (ct.relative[dy[du].type]) {
                                break
                            }
                        }
                        return cl(dv > 1 && dr(e), dv > 1 && cn(dy.slice(0, dv - 1).concat({
                            value: dy[dv - 2].type === " " ? "*": ""
                        })).replace(cx, "$1"), dw, dv < du && dg(dy.slice(dv, du)), du < dx && dg((dy = dy.slice(du))), du < dx && cn(dy))
                    }
                    e.push(dw)
                }
            }
            return dr(e)
        }
        function c2(dv, du) {
            var dx = 0, e = du.length > 0, dw = dv.length > 0, dt = function(dI, dC, dH, dG, dO) {
                var dD, dE, dJ, dN = [], dM = 0, dF = "0", dy = dI && [], dK = dO != null, dL = ds, dB = dI || dw && ct.find.TAG("*", dO && dC.parentNode || dC), dA = (dp += dL == null ? 1 : Math.random() || 0.1);
                if (dK) {
                    ds = dC !== cH && dC;
                    cj = dx
                }
                for (; (dD = dB[dF]) != null; dF++) {
                    if (dw && dD) {
                        dE = 0;
                        while ((dJ = dv[dE++])) {
                            if (dJ(dD, dC, dH)) {
                                dG.push(dD);
                                break
                            }
                        }
                        if (dK) {
                            dp = dA;
                            cj=++dx
                        }
                    }
                    if (e) {
                        if ((dD=!dJ && dD)) {
                            dM--
                        }
                        if (dI) {
                            dy.push(dD)
                        }
                    }
                }
                dM += dF;
                if (e && dF !== dM) {
                    dE = 0;
                    while ((dJ = du[dE++])) {
                        dJ(dy, dN, dC, dH)
                    }
                    if (dI) {
                        if (dM > 0) {
                            while (dF--) {
                                if (!(dy[dF] || dN[dF])) {
                                    dN[dF] = di.call(dG)
                                }
                            }
                        }
                        dN = c4(dN)
                    }
                    b9.apply(dG, dN);
                    if (dK&&!dI && dN.length > 0 && (dM + du.length) > 1) {
                        cB.uniqueSort(dG)
                    }
                }
                if (dK) {
                    dp = dA;
                    ds = dL
                }
                return dy
            };
            return e ? cp(dt) : dt
        }
        c0 = cB.compile = function(e, dx) {
            var du, dt = [], dw = [], dv = cL[e + " "];
            if (!dv) {
                if (!dx) {
                    dx = cm(e)
                }
                du = dx.length;
                while (du--) {
                    dv = dg(dx[du]);
                    if (dv[df]) {
                        dt.push(dv)
                    } else {
                        dw.push(dv)
                    }
                }
                dv = cL(e, c2(dw, dt))
            }
            return dv
        };
        function cE(dt, dw, dv) {
            var du = 0, e = dw.length;
            for (; du < e; du++) {
                cB(dt, dw[du], dv)
            }
            return dv
        }
        function dm(du, e, dv, dy) {
            var dw, dB, dt, dC, dA, dx = cm(du);
            if (!dy) {
                if (dx.length === 1) {
                    dB = dx[0] = dx[0].slice(0);
                    if (dB.length > 2 && (dt = dB[0]).type === "ID" && dn.getById && e.nodeType === 9 && dd && ct.relative[dB[1].type]) {
                        e = (ct.find.ID(dt.matches[0].replace(cy, c9), e) || [])[0];
                        if (!e) {
                            return dv
                        }
                        du = du.slice(dB.shift().value.length)
                    }
                    dw = c6.needsContext.test(du) ? 0 : dB.length;
                    while (dw--) {
                        dt = dB[dw];
                        if (ct.relative[(dC = dt.type)]) {
                            break
                        }
                        if ((dA = ct.find[dC])) {
                            if ((dy = dA(dt.matches[0].replace(cy, c9), c5.test(dB[0].type) && e.parentNode || e))) {
                                dB.splice(dw, 1);
                                du = dy.length && cn(dB);
                                if (!du) {
                                    b9.apply(dv, dy);
                                    return dv
                                }
                                break
                            }
                        }
                    }
                }
            }
            c0(du, dx)(dy, e, !dd, dv, c5.test(du));
            return dv
        }
        dn.sortStable = df.split("").sort(cJ).join("") === df;
        dn.detectDuplicates = c1;
        c3();
        dn.sortDetached = ck(function(e) {
            return e.compareDocumentPosition(cH.createElement("div")) & 1
        });
        if (!ck(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#"
        })) {
            dq("type|href|height|width", function(dt, e, du) {
                if (!du) {
                    return dt.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!dn.attributes ||!ck(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === ""
        })) {
            dq("value", function(dt, e, du) {
                if (!du && dt.nodeName.toLowerCase() === "input") {
                    return dt.defaultValue
                }
            })
        }
        if (!ck(function(e) {
            return e.getAttribute("disabled") == null
        })) {
            dq(ca, function(dt, e, dv) {
                var du;
                if (!dv) {
                    return (du = dt.getAttributeNode(e)) && du.specified ? du.value : dt[e] === true ? e.toLowerCase() : null
                }
            })
        }
        bN.find = cB;
        bN.expr = cB.selectors;
        bN.expr[":"] = bN.expr.pseudos;
        bN.unique = cB.uniqueSort;
        bN.text = cB.getText;
        bN.isXMLDoc = cB.isXML;
        bN.contains = cB.contains
    })(a6);
    var b3 = {};
    function ah(b8) {
        var e = b3[b8] = {};
        bN.each(b8.match(af) || [], function(ca, b9) {
            e[b9] = true
        });
        return e
    }
    bN.Callbacks = function(cj) {
        cj = typeof cj === "string" ? (b3[cj] || ah(cj)) : bN.extend({}, cj);
        var cb, ca, e, cc, ce, b9, cf = [], cg=!cj.once && [], b8 = function(ck) {
            ca = cj.memory && ck;
            e = true;
            ce = b9 || 0;
            b9 = 0;
            cc = cf.length;
            cb = true;
            for (; cf && ce < cc; ce++) {
                if (cf[ce].apply(ck[0], ck[1]) === false && cj.stopOnFalse) {
                    ca = false;
                    break
                }
            }
            cb = false;
            if (cf) {
                if (cg) {
                    if (cg.length) {
                        b8(cg.shift())
                    }
                } else {
                    if (ca) {
                        cf = []
                    } else {
                        ch.disable()
                    }
                }
            }
        }, ch = {
            add: function() {
                if (cf) {
                    var cl = cf.length;
                    (function ck(cm) {
                        bN.each(cm, function(co, cn) {
                            var cp = bN.type(cn);
                            if (cp === "function") {
                                if (!cj.unique ||!ch.has(cn)) {
                                    cf.push(cn)
                                }
                            } else {
                                if (cn && cn.length && cp !== "string") {
                                    ck(cn)
                                }
                            }
                        })
                    })(arguments);
                    if (cb) {
                        cc = cf.length
                    } else {
                        if (ca) {
                            b9 = cl;
                            b8(ca)
                        }
                    }
                }
                return this
            },
            remove: function() {
                if (cf) {
                    bN.each(arguments, function(cm, ck) {
                        var cl;
                        while ((cl = bN.inArray(ck, cf, cl))>-1) {
                            cf.splice(cl, 1);
                            if (cb) {
                                if (cl <= cc) {
                                    cc--
                                }
                                if (cl <= ce) {
                                    ce--
                                }
                            }
                        }
                    })
                }
                return this
            },
            has: function(ck) {
                return ck ? bN.inArray(ck, cf)>-1 : !!(cf && cf.length)
            },
            empty: function() {
                cf = [];
                cc = 0;
                return this
            },
            disable: function() {
                cf = cg = ca = aJ;
                return this
            },
            disabled: function() {
                return !cf
            },
            lock: function() {
                cg = aJ;
                if (!ca) {
                    ch.disable()
                }
                return this
            },
            locked: function() {
                return !cg
            },
            fireWith: function(cl, ck) {
                if (cf && (!e || cg)) {
                    ck = ck || [];
                    ck = [cl, ck.slice ? ck.slice(): ck];
                    if (cb) {
                        cg.push(ck)
                    } else {
                        b8(ck)
                    }
                }
                return this
            },
            fire: function() {
                ch.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!e
            }
        };
        return ch
    };
    bN.extend({
        Deferred: function(b9) {
            var b8 = [["resolve", "done", bN.Callbacks("once memory"), "resolved"], ["reject", "fail", bN.Callbacks("once memory"), "rejected"], ["notify", "progress", bN.Callbacks("memory")]], ca = "pending", cb = {
                state: function() {
                    return ca
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var cc = arguments;
                    return bN.Deferred(function(ce) {
                        bN.each(b8, function(cg, cf) {
                            var cj = cf[0], ch = bN.isFunction(cc[cg]) && cc[cg];
                            e[cf[1]](function() {
                                var ck = ch && ch.apply(this, arguments);
                                if (ck && bN.isFunction(ck.promise)) {
                                    ck.promise().done(ce.resolve).fail(ce.reject).progress(ce.notify)
                                } else {
                                    ce[cj + "With"](this === cb ? ce.promise() : this, ch ? [ck] : arguments)
                                }
                            })
                        });
                        cc = null
                    }).promise()
                },
                promise: function(cc) {
                    return cc != null ? bN.extend(cc, cb) : cb
                }
            }, e = {};
            cb.pipe = cb.then;
            bN.each(b8, function(ce, cc) {
                var cg = cc[2], cf = cc[3];
                cb[cc[1]] = cg.add;
                if (cf) {
                    cg.add(function() {
                        ca = cf
                    }, b8[ce^1][2].disable, b8[2][2].lock)
                }
                e[cc[0]] = function() {
                    e[cc[0] + "With"](this === e ? cb : this, arguments);
                    return this
                };
                e[cc[0] + "With"] = cg.fireWith
            });
            cb.promise(e);
            if (b9) {
                b9.call(e, e)
            }
            return e
        },
        when: function(cb) {
            var b9 = 0, ce = a8.call(arguments), e = ce.length, b8 = e !== 1 || (cb && bN.isFunction(cb.promise)) ? e: 0, ch = b8 === 1 ? cb: bN.Deferred(), ca = function(ck, cl, cj) {
                return function(cm) {
                    cl[ck] = this;
                    cj[ck] = arguments.length > 1 ? a8.call(arguments) : cm;
                    if (cj === cg) {
                        ch.notifyWith(cl, cj)
                    } else {
                        if (!(--b8)) {
                            ch.resolveWith(cl, cj)
                        }
                    }
                }
            }, cg, cc, cf;
            if (e > 1) {
                cg = new Array(e);
                cc = new Array(e);
                cf = new Array(e);
                for (; b9 < e; b9++) {
                    if (ce[b9] && bN.isFunction(ce[b9].promise)) {
                        ce[b9].promise().done(ca(b9, cf, ce)).fail(ch.reject).progress(ca(b9, cc, cg))
                    } else {
                        --b8
                    }
                }
            }
            if (!b8) {
                ch.resolveWith(cf, ce)
            }
            return ch.promise()
        }
    });
    bN.support = (function(cl) {
        var ck, ch, cg, cj, cf, ca, cc, b9, cb, b8 = o.createElement("div");
        b8.setAttribute("className", "t");
        b8.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        ck = b8.getElementsByTagName("*") || [];
        ch = b8.getElementsByTagName("a")[0];
        if (!ch ||!ch.style ||!ck.length) {
            return cl
        }
        cj = o.createElement("select");
        ca = cj.appendChild(o.createElement("option"));
        cg = b8.getElementsByTagName("input")[0];
        ch.style.cssText = "top:1px;float:left;opacity:.5";
        cl.getSetAttribute = b8.className !== "t";
        cl.leadingWhitespace = b8.firstChild.nodeType === 3;
        cl.tbody=!b8.getElementsByTagName("tbody").length;
        cl.htmlSerialize=!!b8.getElementsByTagName("link").length;
        cl.style = /top/.test(ch.getAttribute("style"));
        cl.hrefNormalized = ch.getAttribute("href") === "/a";
        cl.opacity = /^0.5/.test(ch.style.opacity);
        cl.cssFloat=!!ch.style.cssFloat;
        cl.checkOn=!!cg.value;
        cl.optSelected = ca.selected;
        cl.enctype=!!o.createElement("form").enctype;
        cl.html5Clone = o.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        cl.inlineBlockNeedsLayout = false;
        cl.shrinkWrapBlocks = false;
        cl.pixelPosition = false;
        cl.deleteExpando = true;
        cl.noCloneEvent = true;
        cl.reliableMarginRight = true;
        cl.boxSizingReliable = true;
        cg.checked = true;
        cl.noCloneChecked = cg.cloneNode(true).checked;
        cj.disabled = true;
        cl.optDisabled=!ca.disabled;
        try {
            delete b8.test
        } catch (ce) {
            cl.deleteExpando = false
        }
        cg = o.createElement("input");
        cg.setAttribute("value", "");
        cl.input = cg.getAttribute("value") === "";
        cg.value = "t";
        cg.setAttribute("type", "radio");
        cl.radioValue = cg.value === "t";
        cg.setAttribute("checked", "t");
        cg.setAttribute("name", "t");
        cf = o.createDocumentFragment();
        cf.appendChild(cg);
        cl.appendChecked = cg.checked;
        cl.checkClone = cf.cloneNode(true).cloneNode(true).lastChild.checked;
        if (b8.attachEvent) {
            b8.attachEvent("onclick", function() {
                cl.noCloneEvent = false
            });
            b8.cloneNode(true).click()
        }
        for (cb in {
            submit: true,
            change: true,
            focusin: true
        }) {
            b8.setAttribute(cc = "on" + cb, "t");
            cl[cb + "Bubbles"] = cc in a6 || b8.attributes[cc].expando === false
        }
        b8.style.backgroundClip = "content-box";
        b8.cloneNode(true).style.backgroundClip = "";
        cl.clearCloneStyle = b8.style.backgroundClip === "content-box";
        for (cb in bN(cl)) {
            break
        }
        cl.ownLast = cb !== "0";
        bN(function() {
            var cm, cp, co, cn = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e = o.getElementsByTagName("body")[0];
            if (!e) {
                return 
            }
            cm = b8 = co = cp = null
        });
        ck = cj = cf = ca = ch = cg = null;
        return cl
    })({});
    var bA = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, aQ = /([A-Z])/g;
    function be(ca, b8, cc, cb) {
        if (!bN.acceptData(ca)) {
            return 
        }
        var cf, ce, cg = bN.expando, ch = ca.nodeType, e = ch ? bN.cache: ca, b9 = ch ? ca[cg]: ca[cg] && cg;
        if ((!b9 ||!e[b9] || (!cb&&!e[b9].data)) && cc === aJ && typeof b8 === "string") {
            return 
        }
        if (!b9) {
            if (ch) {
                b9 = ca[cg] = ba.pop() || bN.guid++
            } else {
                b9 = cg
            }
        }
        if (!e[b9]) {
            e[b9] = ch ? {} : {
                toJSON: bN.noop
            }
        }
        if (typeof b8 === "object" || typeof b8 === "function") {
            if (cb) {
                e[b9] = bN.extend(e[b9], b8)
            } else {
                e[b9].data = bN.extend(e[b9].data, b8)
            }
        }
        ce = e[b9];
        if (!cb) {
            if (!ce.data) {
                ce.data = {}
            }
            ce = ce.data
        }
        if (cc !== aJ) {
            ce[bN.camelCase(b8)] = cc
        }
        if (typeof b8 === "string") {
            cf = ce[b8];
            if (cf == null) {
                cf = ce[bN.camelCase(b8)]
            }
        } else {
            cf = ce
        }
        return cf
    }
    function ac(cb, b9, e) {
        if (!bN.acceptData(cb)) {
            return 
        }
        var ce, ca, cc = cb.nodeType, b8 = cc ? bN.cache: cb, cf = cc ? cb[bN.expando]: bN.expando;
        if (!b8[cf]) {
            return 
        }
        if (b9) {
            ce = e ? b8[cf] : b8[cf].data;
            if (ce) {
                if (!bN.isArray(b9)) {
                    if (b9 in ce) {
                        b9 = [b9]
                    } else {
                        b9 = bN.camelCase(b9);
                        if (b9 in ce) {
                            b9 = [b9]
                        } else {
                            b9 = b9.split(" ")
                        }
                    }
                } else {
                    b9 = b9.concat(bN.map(b9, bN.camelCase))
                }
                ca = b9.length;
                while (ca--) {
                    delete ce[b9[ca]]
                }
                if (e?!Q(ce) : !bN.isEmptyObject(ce)
                    ) {
                    return 
                }
            }
        }
        if (!e) {
            delete b8[cf].data;
            if (!Q(b8[cf])) {
                return 
            }
        }
        if (cc) {
            bN.cleanData([cb], true)
        } else {
            if (bN.support.deleteExpando || b8 != b8.window) {
                delete b8[cf]
            } else {
                b8[cf] = null
            }
        }
    }
    bN.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            e = e.nodeType ? bN.cache[e[bN.expando]] : e[bN.expando];
            return !!e&&!Q(e)
        },
        data: function(b8, e, b9) {
            return be(b8, e, b9)
        },
        removeData: function(b8, e) {
            return ac(b8, e)
        },
        _data: function(b8, e, b9) {
            return be(b8, e, b9, true)
        },
        _removeData: function(b8, e) {
            return ac(b8, e, true)
        },
        acceptData: function(b8) {
            if (b8.nodeType && b8.nodeType !== 1 && b8.nodeType !== 9) {
                return false
            }
            var e = b8.nodeName && bN.noData[b8.nodeName.toLowerCase()];
            return !e || e !== true && b8.getAttribute("classid") === e
        }
    });
    bN.fn.extend({
        data: function(ca, ce) {
            var b8, e, cc = null, b9 = 0, cb = this[0];
            if (ca === aJ) {
                if (this.length) {
                    cc = bN.data(cb);
                    if (cb.nodeType === 1&&!bN._data(cb, "parsedAttrs")) {
                        b8 = cb.attributes;
                        for (; b9 < b8.length; b9++) {
                            e = b8[b9].name;
                            if (e.indexOf("data-") === 0) {
                                e = bN.camelCase(e.slice(5));
                                bC(cb, e, cc[e])
                            }
                        }
                        bN._data(cb, "parsedAttrs", true)
                    }
                }
                return cc
            }
            if (typeof ca === "object") {
                return this.each(function() {
                    bN.data(this, ca)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                bN.data(this, ca, ce)
            }) : cb ? bC(cb, ca, bN.data(cb, ca)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                bN.removeData(this, e)
            })
        }
    });
    function bC(ca, b9, cb) {
        if (cb === aJ && ca.nodeType === 1) {
            var b8 = "data-" + b9.replace(aQ, "-$1").toLowerCase();
            cb = ca.getAttribute(b8);
            if (typeof cb === "string") {
                try {
                    cb = cb === "true" ? true : cb === "false" ? false : cb === "null" ? null : + cb + "" === cb?+cb : bA.test(cb) ? bN.parseJSON(cb) : cb
                } catch (cc) {}
                bN.data(ca, b9, cb)
            } else {
                cb = aJ
            }
        }
        return cb
    }
    function Q(b8) {
        var e;
        for (e in b8) {
            if (e === "data" && bN.isEmptyObject(b8[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    bN.extend({
        queue: function(b9, b8, ca) {
            var e;
            if (b9) {
                b8 = (b8 || "fx") + "queue";
                e = bN._data(b9, b8);
                if (ca) {
                    if (!e || bN.isArray(ca)) {
                        e = bN._data(b9, b8, bN.makeArray(ca))
                    } else {
                        e.push(ca)
                    }
                }
                return e || []
            }
        },
        dequeue: function(cc, cb) {
            cb = cb || "fx";
            var b8 = bN.queue(cc, cb), ce = b8.length, ca = b8.shift(), e = bN._queueHooks(cc, cb), b9 = function() {
                bN.dequeue(cc, cb)
            };
            if (ca === "inprogress") {
                ca = b8.shift();
                ce--
            }
            if (ca) {
                if (cb === "fx") {
                    b8.unshift("inprogress")
                }
                delete e.stop;
                ca.call(cc, b9, e)
            }
            if (!ce && e) {
                e.empty.fire()
            }
        },
        _queueHooks: function(b9, b8) {
            var e = b8 + "queueHooks";
            return bN._data(b9, e) || bN._data(b9, e, {
                empty: bN.Callbacks("once memory").add(function() {
                    bN._removeData(b9, b8 + "queue");
                    bN._removeData(b9, e)
                })
            })
        }
    });
    bN.fn.extend({
        queue: function(e, b8) {
            var b9 = 2;
            if (typeof e !== "string") {
                b8 = e;
                e = "fx";
                b9--
            }
            if (arguments.length < b9) {
                return bN.queue(this[0], e)
            }
            return b8 === aJ ? this : this.each(function() {
                var ca = bN.queue(this, e, b8);
                bN._queueHooks(this, e);
                if (e === "fx" && ca[0] !== "inprogress") {
                    bN.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                bN.dequeue(this, e)
            })
        },
        delay: function(b8, e) {
            b8 = bN.fx ? bN.fx.speeds[b8] || b8 : b8;
            e = e || "fx";
            return this.queue(e, function(ca, b9) {
                var cb = setTimeout(ca, b8);
                b9.stop = function() {
                    clearTimeout(cb)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(b9, ce) {
            var b8, ca = 1, cf = bN.Deferred(), cc = this, e = this.length, cb = function() {
                if (!(--ca)) {
                    cf.resolveWith(cc, [cc])
                }
            };
            if (typeof b9 !== "string") {
                ce = b9;
                b9 = aJ
            }
            b9 = b9 || "fx";
            while (e--) {
                b8 = bN._data(cc[e], b9 + "queueHooks");
                if (b8 && b8.empty) {
                    ca++;
                    b8.empty.add(cb)
                }
            }
            cb();
            return cf.promise(ce)
        }
    });
    var bc, b4, bQ = /[\t\r\n\f]/g, am = /\r/g, aI = /^(?:input|select|textarea|button|object)$/i, G = /^(?:a|area)$/i, au = /^(?:checked|selected)$/i, bT = bN.support.getSetAttribute, bJ = bN.support.input;
    bN.fn.extend({
        attr: function(e, b8) {
            return bN.access(this, bN.attr, e, b8, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                bN.removeAttr(this, e)
            })
        },
        prop: function(e, b8) {
            return bN.access(this, bN.prop, e, b8, arguments.length > 1)
        },
        removeProp: function(e) {
            e = bN.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = aJ;
                    delete this[e]
                } catch (b8) {}
            })
        },
        addClass: function(cf) {
            var b8, e, cg, cb, b9, ca = 0, cc = this.length, ce = typeof cf === "string" && cf;
            if (bN.isFunction(cf)) {
                return this.each(function(ch) {
                    bN(this).addClass(cf.call(this, ch, this.className))
                })
            }
            if (ce) {
                b8 = (cf || "").match(af) || [];
                for (; ca < cc; ca++) {
                    e = this[ca];
                    cg = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bQ, " ") : " ");
                    if (cg) {
                        b9 = 0;
                        while ((cb = b8[b9++])) {
                            if (cg.indexOf(" " + cb + " ") < 0) {
                                cg += cb + " "
                            }
                        }
                        e.className = bN.trim(cg)
                    }
                }
            }
            return this
        },
        removeClass: function(cf) {
            var b8, e, cg, cb, b9, ca = 0, cc = this.length, ce = arguments.length === 0 || typeof cf === "string" && cf;
            if (bN.isFunction(cf)) {
                return this.each(function(ch) {
                    bN(this).removeClass(cf.call(this, ch, this.className))
                })
            }
            if (ce) {
                b8 = (cf || "").match(af) || [];
                for (; ca < cc; ca++) {
                    e = this[ca];
                    cg = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bQ, " ") : "");
                    if (cg) {
                        b9 = 0;
                        while ((cb = b8[b9++])) {
                            while (cg.indexOf(" " + cb + " ") >= 0) {
                                cg = cg.replace(" " + cb + " ", " ")
                            }
                        }
                        e.className = cf ? bN.trim(cg) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(b9, e) {
            var b8 = typeof b9;
            if (typeof e === "boolean" && b8 === "string") {
                return e ? this.addClass(b9) : this.removeClass(b9)
            }
            if (bN.isFunction(b9)) {
                return this.each(function(ca) {
                    bN(this).toggleClass(b9.call(this, ca, this.className, e), e)
                })
            }
            return this.each(function() {
                if (b8 === "string") {
                    var cc, cb = 0, ca = bN(this), ce = b9.match(af) || [];
                    while ((cc = ce[cb++])) {
                        if (ca.hasClass(cc)) {
                            ca.removeClass(cc)
                        } else {
                            ca.addClass(cc)
                        }
                    }
                } else {
                    if (b8 === aF || b8 === "boolean") {
                        if (this.className) {
                            bN._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b9 === false ? "" : bN._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(e) {
            var ca = " " + e + " ", b9 = 0, b8 = this.length;
            for (; b9 < b8; b9++) {
                if (this[b9].nodeType === 1 && (" " + this[b9].className + " ").replace(bQ, " ").indexOf(ca) >= 0) {
                    return true
                }
            }
            return false
        },
        val: function(ca) {
            var b8, e, cb, b9 = this[0];
            if (!arguments.length) {
                if (b9) {
                    e = bN.valHooks[b9.type] || bN.valHooks[b9.nodeName.toLowerCase()];
                    if (e && "get" in e && (b8 = e.get(b9, "value")) !== aJ) {
                        return b8
                    }
                    b8 = b9.value;
                    return typeof b8 === "string" ? b8.replace(am, "") : b8 == null ? "" : b8
                }
                return 
            }
            cb = bN.isFunction(ca);
            return this.each(function(cc) {
                var ce;
                if (this.nodeType !== 1) {
                    return 
                }
                if (cb) {
                    ce = ca.call(this, cc, bN(this).val())
                } else {
                    ce = ca
                }
                if (ce == null) {
                    ce = ""
                } else {
                    if (typeof ce === "number") {
                        ce += ""
                    } else {
                        if (bN.isArray(ce)) {
                            ce = bN.map(ce, function(cf) {
                                return cf == null ? "" : cf + ""
                            })
                        }
                    }
                }
                e = bN.valHooks[this.type] || bN.valHooks[this.nodeName.toLowerCase()];
                if (!e ||!("set" in e) || e.set(this, ce, "value") === aJ) {
                    this.value = ce
                }
            })
        }
    });
    bN.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var b8 = bN.find.attr(e, "value");
                    return b8 != null ? b8 : e.text
                }
            },
            select: {
                get: function(e) {
                    var ce, b9, cg = e.options, cb = e.selectedIndex, ca = e.type === "select-one" || cb < 0, cf = ca ? null: [], cc = ca ? cb + 1: cg.length, b8 = cb < 0 ? cc: ca ? cb: 0;
                    for (; b8 < cc; b8++) {
                        b9 = cg[b8];
                        if ((b9.selected || b8 === cb) && (bN.support.optDisabled?!b9.disabled : b9.getAttribute("disabled") === null) && (!b9.parentNode.disabled ||!bN.nodeName(b9.parentNode, "optgroup"))
                            ) {
                            ce = bN(b9).val();
                            if (ca) {
                                return ce
                            }
                            cf.push(ce)
                        }
                    }
                    return cf
                },
                set: function(cb, cc) {
                    var ce, ca, b8 = cb.options, e = bN.makeArray(cc), b9 = b8.length;
                    while (b9--) {
                        ca = b8[b9];
                        if ((ca.selected = bN.inArray(bN(ca).val(), e) >= 0)) {
                            ce = true
                        }
                    }
                    if (!ce) {
                        cb.selectedIndex =- 1
                    }
                    return e
                }
            }
        },
        attr: function(cb, ca, cc) {
            var e, b9, b8 = cb.nodeType;
            if (!cb || b8 === 3 || b8 === 8 || b8 === 2) {
                return 
            }
            if (typeof cb.getAttribute === aF) {
                return bN.prop(cb, ca, cc)
            }
            if (b8 !== 1 ||!bN.isXMLDoc(cb)) {
                ca = ca.toLowerCase();
                e = bN.attrHooks[ca] || (bN.expr.match.bool.test(ca) ? b4 : bc)
            }
            if (cc !== aJ) {
                if (cc === null) {
                    bN.removeAttr(cb, ca)
                } else {
                    if (e && "set" in e && (b9 = e.set(cb, cc, ca)) !== aJ) {
                        return b9
                    } else {
                        cb.setAttribute(ca, cc + "");
                        return cc
                    }
                }
            } else {
                if (e && "get" in e && (b9 = e.get(cb, ca)) !== null) {
                    return b9
                } else {
                    b9 = bN.find.attr(cb, ca);
                    return b9 == null ? aJ : b9
                }
            }
        },
        removeAttr: function(b9, cb) {
            var e, ca, b8 = 0, cc = cb && cb.match(af);
            if (cc && b9.nodeType === 1) {
                while ((e = cc[b8++])) {
                    ca = bN.propFix[e] || e;
                    if (bN.expr.match.bool.test(e)) {
                        if (bJ && bT ||!au.test(e)) {
                            b9[ca] = false
                        } else {
                            b9[bN.camelCase("default-" + e)] = b9[ca] = false
                        }
                    } else {
                        bN.attr(b9, e, "")
                    }
                    b9.removeAttribute(bT ? e : ca)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, b8) {
                    if (!bN.support.radioValue && b8 === "radio" && bN.nodeName(e, "input")) {
                        var b9 = e.value;
                        e.setAttribute("type", b8);
                        if (b9) {
                            e.value = b9
                        }
                        return b8
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(cc, ca, ce) {
            var b9, e, cb, b8 = cc.nodeType;
            if (!cc || b8 === 3 || b8 === 8 || b8 === 2) {
                return 
            }
            cb = b8 !== 1 ||!bN.isXMLDoc(cc);
            if (cb) {
                ca = bN.propFix[ca] || ca;
                e = bN.propHooks[ca]
            }
            if (ce !== aJ) {
                return e && "set" in e && (b9 = e.set(cc, ce, ca)) !== aJ ? b9 : (cc[ca] = ce)
            } else {
                return e && "get" in e && (b9 = e.get(cc, ca)) !== null ? b9 : cc[ca]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(b8) {
                    var e = bN.find.attr(b8, "tabindex");
                    return e ? parseInt(e, 10) : aI.test(b8.nodeName) || G.test(b8.nodeName) && b8.href ? 0 : - 1
                }
            }
        }
    });
    b4 = {
        set: function(b8, b9, e) {
            if (b9 === false) {
                bN.removeAttr(b8, e)
            } else {
                if (bJ && bT ||!au.test(e)) {
                    b8.setAttribute(!bT && bN.propFix[e] || e, e)
                } else {
                    b8[bN.camelCase("default-" + e)] = b8[e] = true
                }
            }
            return e
        }
    };
    bN.each(bN.expr.match.bool.source.match(/\w+/g), function(b9, b8) {
        var e = bN.expr.attrHandle[b8] || bN.find.attr;
        bN.expr.attrHandle[b8] = bJ && bT ||!au.test(b8) ? function(ce, cb, cf) {
            var cc = bN.expr.attrHandle[cb], ca = cf ? aJ: (bN.expr.attrHandle[cb] = aJ) != e(ce, cb, cf) ? cb.toLowerCase(): null;
            bN.expr.attrHandle[cb] = cc;
            return ca
        } : function(cb, ca, cc) {
            return cc ? aJ : cb[bN.camelCase("default-" + ca)] ? ca.toLowerCase() : null
        }
    });
    if (!bJ ||!bT) {
        bN.attrHooks.value = {
            set: function(b8, b9, e) {
                if (bN.nodeName(b8, "input")) {
                    b8.defaultValue = b9
                } else {
                    return bc && bc.set(b8, b9, e)
                }
            }
        }
    }
    if (!bT) {
        bc = {
            set: function(b9, ca, b8) {
                var e = b9.getAttributeNode(b8);
                if (!e) {
                    b9.setAttributeNode((e = b9.ownerDocument.createAttribute(b8)))
                }
                e.value = ca += "";
                return b8 === "value" || ca === b9.getAttribute(b8) ? ca : aJ
            }
        };
        bN.expr.attrHandle.id = bN.expr.attrHandle.name = bN.expr.attrHandle.coords = function(b9, b8, ca) {
            var e;
            return ca ? aJ : (e = b9.getAttributeNode(b8)) && e.value !== "" ? e.value : null
        };
        bN.valHooks.button = {
            get: function(b9, b8) {
                var e = b9.getAttributeNode(b8);
                return e && e.specified ? e.value : aJ
            },
            set: bc.set
        };
        bN.attrHooks.contenteditable = {
            set: function(b8, b9, e) {
                bc.set(b8, b9 === "" ? false : b9, e)
            }
        };
        bN.each(["width", "height"], function(b8, e) {
            bN.attrHooks[e] = {
                set: function(b9, ca) {
                    if (ca === "") {
                        b9.setAttribute(e, "auto");
                        return ca
                    }
                }
            }
        })
    }
    if (!bN.support.hrefNormalized) {
        bN.each(["href", "src"], function(b8, e) {
            bN.propHooks[e] = {
                get: function(b9) {
                    return b9.getAttribute(e, 4)
                }
            }
        })
    }
    if (!bN.support.style) {
        bN.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || aJ
            },
            set: function(e, b8) {
                return (e.style.cssText = b8 + "")
            }
        }
    }
    if (!bN.support.optSelected) {
        bN.propHooks.selected = {
            get: function(b8) {
                var e = b8.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        }
    }
    bN.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bN.propFix[this.toLowerCase()] = this
    });
    if (!bN.support.enctype) {
        bN.propFix.enctype = "encoding"
    }
    bN.each(["radio", "checkbox"], function() {
        bN.valHooks[this] = {
            set: function(e, b8) {
                if (bN.isArray(b8)) {
                    return (e.checked = bN.inArray(bN(e).val(), b8) >= 0)
                }
            }
        };
        if (!bN.support.checkOn) {
            bN.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    var bL = /^(?:input|select|textarea)$/i, a7 = /^key/, bR = /^(?:mouse|contextmenu)|click/, bF = /^(?:focusinfocus|focusoutblur)$/, by = /^([^.]*)(?:\.(.+)|)$/;
    function U() {
        return true
    }
    function aa() {
        return false
    }
    function an() {
        try {
            return o.activeElement
        } catch (e) {}
    }
    bN.event = {
        global: {},
        add: function(cb, ch, cn, ce, cc) {
            var cf, co, cp, b9, ck, cg, cm, ca, cl, e, b8, cj = bN._data(cb);
            if (!cj) {
                return 
            }
            if (cn.handler) {
                b9 = cn;
                cn = b9.handler;
                cc = b9.selector
            }
            if (!cn.guid) {
                cn.guid = bN.guid++
            }
            if (!(co = cj.events)) {
                co = cj.events = {}
            }
            if (!(cg = cj.handle)) {
                cg = cj.handle = function(cq) {
                    return typeof bN !== aF && (!cq || bN.event.triggered !== cq.type) ? bN.event.dispatch.apply(cg.elem, arguments) : aJ
                };
                cg.elem = cb
            }
            ch = (ch || "").match(af) || [""];
            cp = ch.length;
            while (cp--) {
                cf = by.exec(ch[cp]) || [];
                cl = b8 = cf[1];
                e = (cf[2] || "").split(".").sort();
                if (!cl) {
                    continue
                }
                ck = bN.event.special[cl] || {};
                cl = (cc ? ck.delegateType : ck.bindType) || cl;
                ck = bN.event.special[cl] || {};
                cm = bN.extend({
                    type: cl,
                    origType: b8,
                    data: ce,
                    handler: cn,
                    guid: cn.guid,
                    selector: cc,
                    needsContext: cc && bN.expr.match.needsContext.test(cc),
                    namespace: e.join(".")
                }, b9);
                if (!(ca = co[cl])) {
                    ca = co[cl] = [];
                    ca.delegateCount = 0;
                    if (!ck.setup || ck.setup.call(cb, ce, e, cg) === false) {
                        if (cb.addEventListener) {
                            cb.addEventListener(cl, cg, false)
                        } else {
                            if (cb.attachEvent) {
                                cb.attachEvent("on" + cl, cg)
                            }
                        }
                    }
                }
                if (ck.add) {
                    ck.add.call(cb, cm);
                    if (!cm.handler.guid) {
                        cm.handler.guid = cn.guid
                    }
                }
                if (cc) {
                    ca.splice(ca.delegateCount++, 0, cm)
                } else {
                    ca.push(cm)
                }
                bN.event.global[cl] = true
            }
            cb = null
        },
        remove: function(ca, ch, cp, cb, cg) {
            var ce, cm, cf, cc, co, cn, ck, b9, cl, e, b8, cj = bN.hasData(ca) && bN._data(ca);
            if (!cj ||!(cn = cj.events)) {
                return 
            }
            ch = (ch || "").match(af) || [""];
            co = ch.length;
            while (co--) {
                cf = by.exec(ch[co]) || [];
                cl = b8 = cf[1];
                e = (cf[2] || "").split(".").sort();
                if (!cl) {
                    for (cl in cn) {
                        bN.event.remove(ca, cl + ch[co], cp, cb, true)
                    }
                    continue
                }
                ck = bN.event.special[cl] || {};
                cl = (cb ? ck.delegateType : ck.bindType) || cl;
                b9 = cn[cl] || [];
                cf = cf[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                cc = ce = b9.length;
                while (ce--) {
                    cm = b9[ce];
                    if ((cg || b8 === cm.origType) && (!cp || cp.guid === cm.guid) && (!cf || cf.test(cm.namespace)) && (!cb || cb === cm.selector || cb === "**" && cm.selector)) {
                        b9.splice(ce, 1);
                        if (cm.selector) {
                            b9.delegateCount--
                        }
                        if (ck.remove) {
                            ck.remove.call(ca, cm)
                        }
                    }
                }
                if (cc&&!b9.length) {
                    if (!ck.teardown || ck.teardown.call(ca, e, cj.handle) === false) {
                        bN.removeEvent(ca, cl, cj.handle)
                    }
                    delete cn[cl]
                }
            }
            if (bN.isEmptyObject(cn)) {
                delete cj.handle;
                bN._removeData(ca, "events")
            }
        },
        trigger: function(b8, cg, cb, co) {
            var ch, ca, cm, cn, ck, cf, ce, cc = [cb || o], cl = Y.call(b8, "type") ? b8.type: b8, b9 = Y.call(b8, "namespace") ? b8.namespace.split("."): [];
            cm = cf = cb = cb || o;
            if (cb.nodeType === 3 || cb.nodeType === 8) {
                return 
            }
            if (bF.test(cl + bN.event.triggered)) {
                return 
            }
            if (cl.indexOf(".") >= 0) {
                b9 = cl.split(".");
                cl = b9.shift();
                b9.sort()
            }
            ca = cl.indexOf(":") < 0 && "on" + cl;
            b8 = b8[bN.expando] ? b8 : new bN.Event(cl, typeof b8 === "object" && b8);
            b8.isTrigger = co ? 2 : 3;
            b8.namespace = b9.join(".");
            b8.namespace_re = b8.namespace ? new RegExp("(^|\\.)" + b9.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b8.result = aJ;
            if (!b8.target) {
                b8.target = cb
            }
            cg = cg == null ? [b8] : bN.makeArray(cg, [b8]);
            ck = bN.event.special[cl] || {};
            if (!co && ck.trigger && ck.trigger.apply(cb, cg) === false) {
                return 
            }
            if (!co&&!ck.noBubble&&!bN.isWindow(cb)) {
                cn = ck.delegateType || cl;
                if (!bF.test(cn + cl)) {
                    cm = cm.parentNode
                }
                for (; cm; cm = cm.parentNode) {
                    cc.push(cm);
                    cf = cm
                }
                if (cf === (cb.ownerDocument || o)) {
                    cc.push(cf.defaultView || cf.parentWindow || a6)
                }
            }
            ce = 0;
            while ((cm = cc[ce++])&&!b8.isPropagationStopped()) {
                b8.type = ce > 1 ? cn : ck.bindType || cl;
                ch = (bN._data(cm, "events") || {})[b8.type] && bN._data(cm, "handle");
                if (ch) {
                    ch.apply(cm, cg)
                }
                ch = ca && cm[ca];
                if (ch && bN.acceptData(cm) && ch.apply && ch.apply(cm, cg) === false) {
                    b8.preventDefault()
                }
            }
            b8.type = cl;
            if (!co&&!b8.isDefaultPrevented()) {
                if ((!ck._default || ck._default.apply(cc.pop(), cg) === false) && bN.acceptData(cb)) {
                    if (ca && cb[cl]&&!bN.isWindow(cb)) {
                        cf = cb[ca];
                        if (cf) {
                            cb[ca] = null
                        }
                        bN.event.triggered = cl;
                        try {
                            cb[cl]()
                        } catch (cj) {}
                        bN.event.triggered = aJ;
                        if (cf) {
                            cb[ca] = cf
                        }
                    }
                }
            }
            return b8.result
        },
        dispatch: function(e) {
            e = bN.event.fix(e);
            var cb, cc, ch, b8, ca, cg = [], cf = a8.call(arguments), b9 = (bN._data(this, "events") || {})[e.type] || [], ce = bN.event.special[e.type] || {};
            cf[0] = e;
            e.delegateTarget = this;
            if (ce.preDispatch && ce.preDispatch.call(this, e) === false) {
                return 
            }
            cg = bN.event.handlers.call(this, e, b9);
            cb = 0;
            while ((b8 = cg[cb++])&&!e.isPropagationStopped()) {
                e.currentTarget = b8.elem;
                ca = 0;
                while ((ch = b8.handlers[ca++])&&!e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(ch.namespace)) {
                        e.handleObj = ch;
                        e.data = ch.data;
                        cc = ((bN.event.special[ch.origType] || {}).handle || ch.handler).apply(b8.elem, cf);
                        if (cc !== aJ) {
                            if ((e.result = cc) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (ce.postDispatch) {
                ce.postDispatch.call(this, e)
            }
            return e.result
        },
        handlers: function(e, b9) {
            var b8, cf, cc, cb, ce = [], ca = b9.delegateCount, cg = e.target;
            if (ca && cg.nodeType && (!e.button || e.type !== "click")) {
                for (; cg != this; cg = cg.parentNode || this) {
                    if (cg.nodeType === 1 && (cg.disabled !== true || e.type !== "click")) {
                        cc = [];
                        for (cb = 0; cb < ca; cb++) {
                            cf = b9[cb];
                            b8 = cf.selector + " ";
                            if (cc[b8] === aJ) {
                                cc[b8] = cf.needsContext ? bN(b8, this).index(cg) >= 0 : bN.find(b8, this, null, [cg]).length
                            }
                            if (cc[b8]) {
                                cc.push(cf)
                            }
                        }
                        if (cc.length) {
                            ce.push({
                                elem: cg,
                                handlers: cc
                            })
                        }
                    }
                }
            }
            if (ca < b9.length) {
                ce.push({
                    elem: this,
                    handlers: b9.slice(ca)
                })
            }
            return ce
        },
        fix: function(ca) {
            if (ca[bN.expando]) {
                return ca
            }
            var b8, ce, cc, b9 = ca.type, e = ca, cb = this.fixHooks[b9];
            if (!cb) {
                this.fixHooks[b9] = cb = bR.test(b9) ? this.mouseHooks : a7.test(b9) ? this.keyHooks : {}
            }
            cc = cb.props ? this.props.concat(cb.props) : this.props;
            ca = new bN.Event(e);
            b8 = cc.length;
            while (b8--) {
                ce = cc[b8];
                ca[ce] = e[ce]
            }
            if (!ca.target) {
                ca.target = e.srcElement || o
            }
            if (ca.target.nodeType === 3) {
                ca.target = ca.target.parentNode
            }
            ca.metaKey=!!ca.metaKey;
            return cb.filter ? cb.filter(ca, e) : ca
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(b8, e) {
                if (b8.which == null) {
                    b8.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return b8
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(ca, b9) {
                var e, cb, cc, b8 = b9.button, ce = b9.fromElement;
                if (ca.pageX == null && b9.clientX != null) {
                    cb = ca.target.ownerDocument || o;
                    cc = cb.documentElement;
                    e = cb.body;
                    ca.pageX = b9.clientX + (cc && cc.scrollLeft || e && e.scrollLeft || 0) - (cc && cc.clientLeft || e && e.clientLeft || 0);
                    ca.pageY = b9.clientY + (cc && cc.scrollTop || e && e.scrollTop || 0) - (cc && cc.clientTop || e && e.clientTop || 0)
                }
                if (!ca.relatedTarget && ce) {
                    ca.relatedTarget = ce === ca.target ? b9.toElement : ce
                }
                if (!ca.which && b8 !== aJ) {
                    ca.which = (b8 & 1 ? 1 : (b8 & 2 ? 3 : (b8 & 4 ? 2 : 0)))
                }
                return ca
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== an() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (b8) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === an() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (bN.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return bN.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== aJ) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function(b9, cb, ca, b8) {
            var cc = bN.extend(new bN.Event(), ca, {
                type: b9,
                isSimulated: true,
                originalEvent: {}
            });
            if (b8) {
                bN.event.trigger(cc, null, cb)
            } else {
                bN.event.dispatch.call(cb, cc)
            }
            if (cc.isDefaultPrevented()) {
                ca.preventDefault()
            }
        }
    };
    bN.removeEvent = o.removeEventListener ? function(b8, e, b9) {
        if (b8.removeEventListener) {
            b8.removeEventListener(e, b9, false)
        }
    } : function(b9, b8, ca) {
        var e = "on" + b8;
        if (b9.detachEvent) {
            if (typeof b9[e] === aF) {
                b9[e] = null
            }
            b9.detachEvent(e, ca)
        }
    };
    bN.Event = function(b8, e) {
        if (!(this instanceof bN.Event)) {
            return new bN.Event(b8, e)
        }
        if (b8 && b8.type) {
            this.originalEvent = b8;
            this.type = b8.type;
            this.isDefaultPrevented = (b8.defaultPrevented || b8.returnValue === false || b8.getPreventDefault && b8.getPreventDefault()) ? U : aa
        } else {
            this.type = b8
        }
        if (e) {
            bN.extend(this, e)
        }
        this.timeStamp = b8 && b8.timeStamp || bN.now();
        this[bN.expando] = true
    };
    bN.Event.prototype = {
        isDefaultPrevented: aa,
        isPropagationStopped: aa,
        isImmediatePropagationStopped: aa,
        preventDefault: function() {
            var b8 = this.originalEvent;
            this.isDefaultPrevented = U;
            if (!b8) {
                return 
            }
            if (b8.preventDefault) {
                b8.preventDefault()
            } else {
                b8.returnValue = false
            }
        },
        stopPropagation: function() {
            var b8 = this.originalEvent;
            this.isPropagationStopped = U;
            if (!b8) {
                return 
            }
            if (b8.stopPropagation) {
                b8.stopPropagation()
            }
            b8.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = U;
            this.stopPropagation()
        }
    };
    bN.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b8, e) {
        bN.event.special[b8] = {
            delegateType: e,
            bindType: e,
            handle: function(cb) {
                var b9, ce = this, cc = cb.relatedTarget, ca = cb.handleObj;
                if (!cc || (cc !== ce&&!bN.contains(ce, cc))) {
                    cb.type = ca.origType;
                    b9 = ca.handler.apply(this, arguments);
                    cb.type = e
                }
                return b9
            }
        }
    });
    if (!bN.support.submitBubbles) {
        bN.event.special.submit = {
            setup: function() {
                if (bN.nodeName(this, "form")) {
                    return false
                }
                bN.event.add(this, "click._submit keypress._submit", function(ca) {
                    var b9 = ca.target, b8 = bN.nodeName(b9, "input") || bN.nodeName(b9, "button") ? b9.form: aJ;
                    if (b8&&!bN._data(b8, "submitBubbles")) {
                        bN.event.add(b8, "submit._submit", function(e) {
                            e._submit_bubble = true
                        });
                        bN._data(b8, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode&&!e.isTrigger) {
                        bN.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            },
            teardown: function() {
                if (bN.nodeName(this, "form")) {
                    return false
                }
                bN.event.remove(this, "._submit")
            }
        }
    }
    if (!bN.support.changeBubbles) {
        bN.event.special.change = {
            setup: function() {
                if (bL.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bN.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        bN.event.add(this, "click._change", function(e) {
                            if (this._just_changed&&!e.isTrigger) {
                                this._just_changed = false
                            }
                            bN.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                bN.event.add(this, "beforeactivate._change", function(b9) {
                    var b8 = b9.target;
                    if (bL.test(b8.nodeName)&&!bN._data(b8, "changeBubbles")) {
                        bN.event.add(b8, "change._change", function(e) {
                            if (this.parentNode&&!e.isSimulated&&!e.isTrigger) {
                                bN.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bN._data(b8, "changeBubbles", true)
                    }
                })
            },
            handle: function(b8) {
                var e = b8.target;
                if (this !== e || b8.isSimulated || b8.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return b8.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                bN.event.remove(this, "._change");
                return !bL.test(this.nodeName)
            }
        }
    }
    if (!bN.support.focusinBubbles) {
        bN.each({
            focus: "focusin",
            blur: "focusout"
        }, function(ca, e) {
            var b8 = 0, b9 = function(cb) {
                bN.event.simulate(e, cb.target, bN.event.fix(cb), true)
            };
            bN.event.special[e] = {
                setup: function() {
                    if (b8++===0) {
                        o.addEventListener(ca, b9, true)
                    }
                },
                teardown: function() {
                    if (--b8 === 0) {
                        o.removeEventListener(ca, b9, true)
                    }
                }
            }
        })
    }
    bN.fn.extend({
        on: function(b9, e, cc, cb, b8) {
            var ca, ce;
            if (typeof b9 === "object") {
                if (typeof e !== "string") {
                    cc = cc || e;
                    e = aJ
                }
                for (ca in b9) {
                    this.on(ca, e, cc, b9[ca], b8)
                }
                return this
            }
            if (cc == null && cb == null) {
                cb = e;
                cc = e = aJ
            } else {
                if (cb == null) {
                    if (typeof e === "string") {
                        cb = cc;
                        cc = aJ
                    } else {
                        cb = cc;
                        cc = e;
                        e = aJ
                    }
                }
            }
            if (cb === false) {
                cb = aa
            } else {
                if (!cb) {
                    return this
                }
            }
            if (b8 === 1) {
                ce = cb;
                cb = function(cf) {
                    bN().off(cf);
                    return ce.apply(this, arguments)
                };
                cb.guid = ce.guid || (ce.guid = bN.guid++)
            }
            return this.each(function() {
                bN.event.add(this, b9, cb, cc, e)
            })
        },
        one: function(b8, e, ca, b9) {
            return this.on(b8, e, ca, b9, 1)
        },
        off: function(b9, e, cb) {
            var b8, ca;
            if (b9 && b9.preventDefault && b9.handleObj) {
                b8 = b9.handleObj;
                bN(b9.delegateTarget).off(b8.namespace ? b8.origType + "." + b8.namespace : b8.origType, b8.selector, b8.handler);
                return this
            }
            if (typeof b9 === "object") {
                for (ca in b9) {
                    this.off(ca, e, b9[ca])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                cb = e;
                e = aJ
            }
            if (cb === false) {
                cb = aa
            }
            return this.each(function() {
                bN.event.remove(this, b9, cb, e)
            })
        },
        trigger: function(e, b8) {
            return this.each(function() {
                bN.event.trigger(e, b8, this)
            })
        },
        triggerHandler: function(e, b9) {
            var b8 = this[0];
            if (b8) {
                return bN.event.trigger(e, b9, b8, true)
            }
        }
    });
    var aq = /^.[^:#\[\.,]*$/, bx = /^(?:parents|prev(?:Until|All))/, B = bN.expr.match.needsContext, bB = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    bN.fn.extend({
        find: function(b8) {
            var cb, ca = [], b9 = this, e = b9.length;
            if (typeof b8 !== "string") {
                return this.pushStack(bN(b8).filter(function() {
                    for (cb = 0; cb < e; cb++) {
                        if (bN.contains(b9[cb], this)) {
                            return true
                        }
                    }
                }))
            }
            for (cb = 0; cb < e; cb++) {
                bN.find(b8, b9[cb], ca)
            }
            ca = this.pushStack(e > 1 ? bN.unique(ca) : ca);
            ca.selector = this.selector ? this.selector + " " + b8 : b8;
            return ca
        },
        has: function(ca) {
            var b9, b8 = bN(ca, this), e = b8.length;
            return this.filter(function() {
                for (b9 = 0; b9 < e; b9++) {
                    if (bN.contains(this, b8[b9])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(aR(this, e || [], true))
        },
        filter: function(e) {
            return this.pushStack(aR(this, e || [], false))
        },
        is: function(e) {
            return !!aR(this, typeof e === "string" && B.test(e) ? bN(e) : e || [], false).length
        },
        closest: function(cb, ca) {
            var cc, b9 = 0, e = this.length, b8 = [], ce = B.test(cb) || typeof cb !== "string" ? bN(cb, ca || this.context): 0;
            for (; b9 < e; b9++) {
                for (cc = this[b9]; cc && cc !== ca; cc = cc.parentNode) {
                    if (cc.nodeType < 11 && (ce ? ce.index(cc)>-1 : cc.nodeType === 1 && bN.find.matchesSelector(cc, cb))) {
                        cc = b8.push(cc);
                        break
                    }
                }
            }
            return this.pushStack(b8.length > 1 ? bN.unique(b8) : b8)
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : - 1
            }
            if (typeof e === "string") {
                return bN.inArray(this[0], bN(e))
            }
            return bN.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(e, b8) {
            var ca = typeof e === "string" ? bN(e, b8): bN.makeArray(e && e.nodeType ? [e] : e), b9 = bN.merge(this.get(), ca);
            return this.pushStack(bN.unique(b9))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function a0(b8, e) {
        do {
            b8 = b8[e]
        }
        while (b8 && b8.nodeType !== 1);
        return b8
    }
    bN.each({
        parent: function(b8) {
            var e = b8.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function(e) {
            return bN.dir(e, "parentNode")
        },
        parentsUntil: function(b8, e, b9) {
            return bN.dir(b8, "parentNode", b9)
        },
        next: function(e) {
            return a0(e, "nextSibling")
        },
        prev: function(e) {
            return a0(e, "previousSibling")
        },
        nextAll: function(e) {
            return bN.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return bN.dir(e, "previousSibling")
        },
        nextUntil: function(b8, e, b9) {
            return bN.dir(b8, "nextSibling", b9)
        },
        prevUntil: function(b8, e, b9) {
            return bN.dir(b8, "previousSibling", b9)
        },
        siblings: function(e) {
            return bN.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return bN.sibling(e.firstChild)
        },
        contents: function(e) {
            return bN.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bN.merge([], e.childNodes)
        }
    }, function(e, b8) {
        bN.fn[e] = function(cb, b9) {
            var ca = bN.map(this, b8, cb);
            if (e.slice( - 5) !== "Until") {
                b9 = cb
            }
            if (b9 && typeof b9 === "string") {
                ca = bN.filter(b9, ca)
            }
            if (this.length > 1) {
                if (!bB[e]) {
                    ca = bN.unique(ca)
                }
                if (bx.test(e)) {
                    ca = ca.reverse()
                }
            }
            return this.pushStack(ca)
        }
    });
    bN.extend({
        filter: function(ca, e, b9) {
            var b8 = e[0];
            if (b9) {
                ca = ":not(" + ca + ")"
            }
            return e.length === 1 && b8.nodeType === 1 ? bN.find.matchesSelector(b8, ca) ? [b8] : [] : bN.find.matches(ca, bN.grep(e, function(cb) {
                return cb.nodeType === 1
            }))
        },
        dir: function(b9, b8, cb) {
            var e = [], ca = b9[b8];
            while (ca && ca.nodeType !== 9 && (cb === aJ || ca.nodeType !== 1 ||!bN(ca).is(cb))) {
                if (ca.nodeType === 1) {
                    e.push(ca)
                }
                ca = ca[b8]
            }
            return e
        },
        sibling: function(b9, b8) {
            var e = [];
            for (; b9; b9 = b9.nextSibling) {
                if (b9.nodeType === 1 && b9 !== b8) {
                    e.push(b9)
                }
            }
            return e
        }
    });
    function aR(b9, e, b8) {
        if (bN.isFunction(e)) {
            return bN.grep(b9, function(cb, ca) {
                return !!e.call(cb, ca, cb) !== b8
            })
        }
        if (e.nodeType) {
            return bN.grep(b9, function(ca) {
                return (ca === e) !== b8
            })
        }
        if (typeof e === "string") {
            if (aq.test(e)) {
                return bN.filter(e, b9, b8)
            }
            e = bN.filter(e, b9)
        }
        return bN.grep(b9, function(ca) {
            return (bN.inArray(ca, e) >= 0) !== b8
        })
    }
    function D(e) {
        var b9 = f.split("|"), b8 = e.createDocumentFragment();
        if (b8.createElement) {
            while (b9.length) {
                b8.createElement(b9.pop())
            }
        }
        return b8
    }
    var f = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", aD = / jQuery\d+="(?:null|\d+)"/g, N = new RegExp("<(?:" + f + ")[\\s/>]", "i"), b7 = /^\s+/, aG = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, p = /<([\w:]+)/, b2 = /<tbody/i, M = /<|&#?\w+;/, ao = /<(?:script|style|link)/i, t = /^(?:checkbox|radio)$/i, bY = /checked\s*(?:[^=]|=\s*.checked.)/i, bD = /^$|\/(?:java|ecma)script/i, av = /^true\/(.*)/, aN = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, W = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: bN.support.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    }, aV = D(o), m = aV.appendChild(o.createElement("div"));
    W.optgroup = W.option;
    W.tbody = W.tfoot = W.colgroup = W.caption = W.thead;
    W.th = W.td;
    bN.fn.extend({
        text: function(e) {
            return bN.access(this, function(b8) {
                return b8 === aJ ? bN.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(b8))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b8 = a4(this, e);
                    b8.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b8 = a4(this, e);
                    b8.insertBefore(e, b8.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        remove: function(e, cb) {
            var ca, b8 = e ? bN.filter(e, this): this, b9 = 0;
            for (; (ca = b8[b9]) != null; b9++) {
                if (!cb && ca.nodeType === 1) {
                    bN.cleanData(n(ca))
                }
                if (ca.parentNode) {
                    if (cb && bN.contains(ca.ownerDocument, ca)) {
                        bw(n(ca, "script"))
                    }
                    ca.parentNode.removeChild(ca)
                }
            }
            return this
        },
        empty: function() {
            var b8, e = 0;
            for (; (b8 = this[e]) != null; e++) {
                if (b8.nodeType === 1) {
                    bN.cleanData(n(b8, false))
                }
                while (b8.firstChild) {
                    b8.removeChild(b8.firstChild)
                }
                if (b8.options && bN.nodeName(b8, "select")) {
                    b8.options.length = 0
                }
            }
            return this
        },
        clone: function(b8, e) {
            b8 = b8 == null ? false : b8;
            e = e == null ? b8 : e;
            return this.map(function() {
                return bN.clone(this, b8, e)
            })
        },
        html: function(e) {
            return bN.access(this, function(cb) {
                var ca = this[0] || {}, b9 = 0, b8 = this.length;
                if (cb === aJ) {
                    return ca.nodeType === 1 ? ca.innerHTML.replace(aD, "") : aJ
                }
                if (typeof cb === "string"&&!ao.test(cb) && (bN.support.htmlSerialize ||!N.test(cb)) && (bN.support.leadingWhitespace ||!b7.test(cb))&&!W[(p.exec(cb) || ["", ""])[1].toLowerCase()]) {
                    cb = cb.replace(aG, "<$1></$2>");
                    try {
                        for (; b9 < b8; b9++) {
                            ca = this[b9] || {};
                            if (ca.nodeType === 1) {
                                bN.cleanData(n(ca, false));
                                ca.innerHTML = cb
                            }
                        }
                        ca = 0
                    } catch (cc) {}
                }
                if (ca) {
                    this.empty().append(cb)
                }
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = bN.map(this, function(b9) {
                return [b9.nextSibling, b9.parentNode]
            }), b8 = 0;
            this.domManip(arguments, function(cb) {
                var ca = e[b8++], b9 = e[b8++];
                if (b9) {
                    if (ca && ca.parentNode !== b9) {
                        ca = this.nextSibling
                    }
                    bN(this).remove();
                    b9.insertBefore(cb, ca)
                }
            }, true);
            return b8 ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(ch, cn, b9) {
            ch = aL.apply([], ch);
            var cf, ca, e, cc, cl, cg, ce = 0, cb = this.length, ck = this, cm = cb - 1, cj = ch[0], b8 = bN.isFunction(cj);
            if (b8 ||!(cb <= 1 || typeof cj !== "string" || bN.support.checkClone ||!bY.test(cj))) {
                return this.each(function(cp) {
                    var co = ck.eq(cp);
                    if (b8) {
                        ch[0] = cj.call(this, cp, co.html())
                    }
                    co.domManip(ch, cn, b9)
                })
            }
            if (cb) {
                cg = bN.buildFragment(ch, this[0].ownerDocument, false, !b9 && this);
                cf = cg.firstChild;
                if (cg.childNodes.length === 1) {
                    cg = cf
                }
                if (cf) {
                    cc = bN.map(n(cg, "script"), x);
                    e = cc.length;
                    for (; ce < cb; ce++) {
                        ca = cg;
                        if (ce !== cm) {
                            ca = bN.clone(ca, true, true);
                            if (e) {
                                bN.merge(cc, n(ca, "script"))
                            }
                        }
                        cn.call(this[ce], ca, ce)
                    }
                    if (e) {
                        cl = cc[cc.length - 1].ownerDocument;
                        bN.map(cc, bh);
                        for (ce = 0; ce < e; ce++) {
                            ca = cc[ce];
                            if (bD.test(ca.type || "")&&!bN._data(ca, "globalEval") && bN.contains(cl, ca)) {
                                if (ca.src) {
                                    bN._evalUrl(ca.src)
                                } else {
                                    bN.globalEval((ca.text || ca.textContent || ca.innerHTML || "").replace(aN, ""))
                                }
                            }
                        }
                    }
                    cg = cf = null
                }
            }
            return this
        }
    });
    function a4(b8, e) {
        return bN.nodeName(b8, "table") && bN.nodeName(e.nodeType === 1 ? e : e.firstChild, "tr") ? b8.getElementsByTagName("tbody")[0] || b8.appendChild(b8.ownerDocument.createElement("tbody")) : b8
    }
    function x(e) {
        e.type = (bN.find.attr(e, "type") !== null) + "/" + e.type;
        return e
    }
    function bh(b8) {
        var e = av.exec(b8.type);
        if (e) {
            b8.type = e[1]
        } else {
            b8.removeAttribute("type")
        }
        return b8
    }
    function bw(e, b9) {
        var ca, b8 = 0;
        for (; (ca = e[b8]) != null; b8++) {
            bN._data(ca, "globalEval", !b9 || bN._data(b9[b8], "globalEval"))
        }
    }
    function aw(cf, b8) {
        if (b8.nodeType !== 1 ||!bN.hasData(cf)) {
            return 
        }
        var cb, ca, e, ce = bN._data(cf), cc = bN._data(b8, ce), b9 = ce.events;
        if (b9) {
            delete cc.handle;
            cc.events = {};
            for (cb in b9) {
                for (ca = 0, e = b9[cb].length; ca < e; ca++) {
                    bN.event.add(b8, cb, b9[cb][ca])
                }
            }
        }
        if (cc.data) {
            cc.data = bN.extend({}, cc.data)
        }
    }
    function T(cb, b8) {
        var cc, ca, b9;
        if (b8.nodeType !== 1) {
            return 
        }
        cc = b8.nodeName.toLowerCase();
        if (!bN.support.noCloneEvent && b8[bN.expando]) {
            b9 = bN._data(b8);
            for (ca in b9.events) {
                bN.removeEvent(b8, ca, b9.handle)
            }
            b8.removeAttribute(bN.expando)
        }
        if (cc === "script" && b8.text !== cb.text) {
            x(b8).text = cb.text;
            bh(b8)
        } else {
            if (cc === "object") {
                if (b8.parentNode) {
                    b8.outerHTML = cb.outerHTML
                }
                if (bN.support.html5Clone && (cb.innerHTML&&!bN.trim(b8.innerHTML))) {
                    b8.innerHTML = cb.innerHTML
                }
            } else {
                if (cc === "input" && t.test(cb.type)) {
                    b8.defaultChecked = b8.checked = cb.checked;
                    if (b8.value !== cb.value) {
                        b8.value = cb.value
                    }
                } else {
                    if (cc === "option") {
                        b8.defaultSelected = b8.selected = cb.defaultSelected
                    } else {
                        if (cc === "input" || cc === "textarea") {
                            b8.defaultValue = cb.defaultValue
                        }
                    }
                }
            }
        }
    }
    bN.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, b8) {
        bN.fn[e] = function(b9) {
            var ca, cc = 0, cb = [], cf = bN(b9), ce = cf.length - 1;
            for (; cc <= ce; cc++) {
                ca = cc === ce ? this : this.clone(true);
                bN(cf[cc])[b8](ca);
                ar.apply(cb, ca.get())
            }
            return this.pushStack(cb)
        }
    });
    function n(ca, e) {
        var b8, cb, b9 = 0, cc = typeof ca.getElementsByTagName !== aF ? ca.getElementsByTagName(e || "*"): typeof ca.querySelectorAll !== aF ? ca.querySelectorAll(e || "*"): aJ;
        if (!cc) {
            for (cc = [], b8 = ca.childNodes || ca; (cb = b8[b9]) != null; b9++) {
                if (!e || bN.nodeName(cb, e)) {
                    cc.push(cb)
                } else {
                    bN.merge(cc, n(cb, e))
                }
            }
        }
        return e === aJ || e && bN.nodeName(ca, e) ? bN.merge([ca], cc) : cc
    }
    function bZ(e) {
        if (t.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }
    bN.extend({
        clone: function(b8, ca, e) {
            var cc, b9, cg, cb, ce, cf = bN.contains(b8.ownerDocument, b8);
            if (bN.support.html5Clone || bN.isXMLDoc(b8) ||!N.test("<" + b8.nodeName + ">")) {
                cg = b8.cloneNode(true)
            } else {
                m.innerHTML = b8.outerHTML;
                m.removeChild(cg = m.firstChild)
            }
            if ((!bN.support.noCloneEvent ||!bN.support.noCloneChecked) && (b8.nodeType === 1 || b8.nodeType === 11)&&!bN.isXMLDoc(b8)) {
                cc = n(cg);
                ce = n(b8);
                for (cb = 0; (b9 = ce[cb]) != null; ++cb) {
                    if (cc[cb]) {
                        T(b9, cc[cb])
                    }
                }
            }
            if (ca) {
                if (e) {
                    ce = ce || n(b8);
                    cc = cc || n(cg);
                    for (cb = 0; (b9 = ce[cb]) != null; cb++) {
                        aw(b9, cc[cb])
                    }
                } else {
                    aw(b8, cg)
                }
            }
            cc = n(cg, "script");
            if (cc.length > 0) {
                bw(cc, !cf && n(b8, "script"))
            }
            cc = ce = b9 = null;
            return cg
        },
        buildFragment: function(b8, ca, cg, cm) {
            var ch, cc, cf, cl, cn, ck, b9, ce = b8.length, cb = D(ca), e = [], cj = 0;
            for (; cj < ce; cj++) {
                cc = b8[cj];
                if (cc || cc === 0) {
                    if (bN.type(cc) === "object") {
                        bN.merge(e, cc.nodeType ? [cc] : cc)
                    } else {
                        if (!M.test(cc)) {
                            e.push(ca.createTextNode(cc))
                        } else {
                            cl = cl || cb.appendChild(ca.createElement("div"));
                            cn = (p.exec(cc) || ["", ""])[1].toLowerCase();
                            b9 = W[cn] || W._default;
                            cl.innerHTML = b9[1] + cc.replace(aG, "<$1></$2>") + b9[2];
                            ch = b9[0];
                            while (ch--) {
                                cl = cl.lastChild
                            }
                            if (!bN.support.leadingWhitespace && b7.test(cc)) {
                                e.push(ca.createTextNode(b7.exec(cc)[0]))
                            }
                            if (!bN.support.tbody) {
                                cc = cn === "table"&&!b2.test(cc) ? cl.firstChild : b9[1] === "<table>"&&!b2.test(cc) ? cl : 0;
                                ch = cc && cc.childNodes.length;
                                while (ch--) {
                                    if (bN.nodeName((ck = cc.childNodes[ch]), "tbody")&&!ck.childNodes.length) {
                                        cc.removeChild(ck)
                                    }
                                }
                            }
                            bN.merge(e, cl.childNodes);
                            cl.textContent = "";
                            while (cl.firstChild) {
                                cl.removeChild(cl.firstChild)
                            }
                            cl = cb.lastChild
                        }
                    }
                }
            }
            if (cl) {
                cb.removeChild(cl)
            }
            if (!bN.support.appendChecked) {
                bN.grep(n(e, "input"), bZ)
            }
            cj = 0;
            while ((cc = e[cj++])) {
                if (cm && bN.inArray(cc, cm)!==-1) {
                    continue
                }
                cf = bN.contains(cc.ownerDocument, cc);
                cl = n(cb.appendChild(cc), "script");
                if (cf) {
                    bw(cl)
                }
                if (cg) {
                    ch = 0;
                    while ((cc = cl[ch++])) {
                        if (bD.test(cc.type || "")) {
                            cg.push(cc)
                        }
                    }
                }
            }
            cl = null;
            return cb
        },
        cleanData: function(b8, ch) {
            var ca, cg, b9, cb, cc = 0, cj = bN.expando, e = bN.cache, ce = bN.support.deleteExpando, cf = bN.event.special;
            for (; (ca = b8[cc]) != null; cc++) {
                if (ch || bN.acceptData(ca)) {
                    b9 = ca[cj];
                    cb = b9 && e[b9];
                    if (cb) {
                        if (cb.events) {
                            for (cg in cb.events) {
                                if (cf[cg]) {
                                    bN.event.remove(ca, cg)
                                } else {
                                    bN.removeEvent(ca, cg, cb.handle)
                                }
                            }
                        }
                        if (e[b9]) {
                            delete e[b9];
                            if (ce) {
                                delete ca[cj]
                            } else {
                                if (typeof ca.removeAttribute !== aF) {
                                    ca.removeAttribute(cj)
                                } else {
                                    ca[cj] = null
                                }
                            }
                            ba.push(b9)
                        }
                    }
                }
            }
        },
        _evalUrl: function(e) {
            return bN.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            })
        }
    });
    bN.fn.extend({
        wrapAll: function(e) {
            if (bN.isFunction(e)) {
                return this.each(function(b9) {
                    bN(this).wrapAll(e.call(this, b9))
                })
            }
            if (this[0]) {
                var b8 = bN(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b8.insertBefore(this[0])
                }
                b8.map(function() {
                    var b9 = this;
                    while (b9.firstChild && b9.firstChild.nodeType === 1) {
                        b9 = b9.firstChild
                    }
                    return b9
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (bN.isFunction(e)) {
                return this.each(function(b8) {
                    bN(this).wrapInner(e.call(this, b8))
                })
            }
            return this.each(function() {
                var b8 = bN(this), b9 = b8.contents();
                if (b9.length) {
                    b9.wrapAll(e)
                } else {
                    b8.append(e)
                }
            })
        },
        wrap: function(e) {
            var b8 = bN.isFunction(e);
            return this.each(function(b9) {
                bN(this).wrapAll(b8 ? e.call(this, b9) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!bN.nodeName(this, "body")) {
                    bN(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    var aH, bs, H, bk = /alpha\([^)]*\)/i, aW = /opacity\s*=\s*([^)]*)/, br = /^(top|right|bottom|left)$/, I = /^(none|table(?!-c[ea]).+)/, a1 = /^margin/, bd = new RegExp("^(" + bE + ")(.*)$", "i"), Z = new RegExp("^(" + bE + ")(?!px)[a-z%]+$", "i"), V = new RegExp("^([+-])=(" + bE + ")", "i"), bn = {
        BODY: "block"
    }, bg = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bG = {
        letterSpacing: 0,
        fontWeight: 400
    }, bX = ["Top", "Right", "Bottom", "Left"], ay = ["Webkit", "O", "Moz", "ms"];
    function b(ca, b8) {
        if (b8 in ca) {
            return b8
        }
        var cb = b8.charAt(0).toUpperCase() + b8.slice(1), e = b8, b9 = ay.length;
        while (b9--) {
            b8 = ay[b9] + cb;
            if (b8 in ca) {
                return b8
            }
        }
        return e
    }
    function S(b8, e) {
        b8 = e || b8;
        return bN.css(b8, "display") === "none" ||!bN.contains(b8.ownerDocument, b8)
    }
    function s(ce, e) {
        var cf, cb, cc, b8 = [], b9 = 0, ca = ce.length;
        for (; b9 < ca; b9++) {
            cb = ce[b9];
            if (!cb.style) {
                continue
            }
            b8[b9] = bN._data(cb, "olddisplay");
            cf = cb.style.display;
            if (e) {
                if (!b8[b9] && cf === "none") {
                    cb.style.display = ""
                }
                if (cb.style.display === "" && S(cb)) {
                    b8[b9] = bN._data(cb, "olddisplay", bI(cb.nodeName))
                }
            } else {
                if (!b8[b9]) {
                    cc = S(cb);
                    if (cf && cf !== "none" ||!cc) {
                        bN._data(cb, "olddisplay", cc ? cf : bN.css(cb, "display"))
                    }
                }
            }
        }
        for (b9 = 0; b9 < ca; b9++) {
            cb = ce[b9];
            if (!cb.style) {
                continue
            }
            if (!e || cb.style.display === "none" || cb.style.display === "") {
                cb.style.display = e ? b8[b9] || "" : "none"
            }
        }
        return ce
    }
    bN.fn.extend({
        css: function(e, b8) {
            return bN.access(this, function(ce, ca, cf) {
                var b9, cc, cg = {}, cb = 0;
                if (bN.isArray(ca)) {
                    cc = bs(ce);
                    b9 = ca.length;
                    for (; cb < b9; cb++) {
                        cg[ca[cb]] = bN.css(ce, ca[cb], false, cc)
                    }
                    return cg
                }
                return cf !== aJ ? bN.style(ce, ca, cf) : bN.css(ce, ca)
            }, e, b8, arguments.length > 1)
        },
        show: function() {
            return s(this, true)
        },
        hide: function() {
            return s(this)
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (S(this)) {
                    bN(this).show()
                } else {
                    bN(this).hide()
                }
            })
        }
    });
    bN.extend({
        cssHooks: {
            opacity: {
                get: function(b9, b8) {
                    if (b8) {
                        var e = H(b9, "opacity");
                        return e === "" ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": bN.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(ca, b9, ch, cb) {
            if (!ca || ca.nodeType === 3 || ca.nodeType === 8 ||!ca.style) {
                return 
            }
            var cf, cg, cj, cc = bN.camelCase(b9), b8 = ca.style;
            b9 = bN.cssProps[cc] || (bN.cssProps[cc] = b(b8, cc));
            cj = bN.cssHooks[b9] || bN.cssHooks[cc];
            if (ch !== aJ) {
                cg = typeof ch;
                if (cg === "string" && (cf = V.exec(ch))) {
                    ch = (cf[1] + 1) * cf[2] + parseFloat(bN.css(ca, b9));
                    cg = "number"
                }
                if (ch == null || cg === "number" && isNaN(ch)) {
                    return 
                }
                if (cg === "number"&&!bN.cssNumber[cc]) {
                    ch += "px"
                }
                if (!bN.support.clearCloneStyle && ch === "" && b9.indexOf("background") === 0) {
                    b8[b9] = "inherit"
                }
                if (!cj ||!("set" in cj) || (ch = cj.set(ca, ch, cb)) !== aJ) {
                    try {
                        b8[b9] = ch
                    } catch (ce) {}
                }
            } else {
                if (cj && "get" in cj && (cf = cj.get(ca, false, cb)) !== aJ) {
                    return cf
                }
                return b8[b9]
            }
        },
        css: function(ce, cb, b8, cc) {
            var ca, cf, e, b9 = bN.camelCase(cb);
            cb = bN.cssProps[b9] || (bN.cssProps[b9] = b(ce.style, b9));
            e = bN.cssHooks[cb] || bN.cssHooks[b9];
            if (e && "get" in e) {
                cf = e.get(ce, true, b8)
            }
            if (cf === aJ) {
                cf = H(ce, cb, cc)
            }
            if (cf === "normal" && cb in bG) {
                cf = bG[cb]
            }
            if (b8 === "" || b8) {
                ca = parseFloat(cf);
                return b8 === true || bN.isNumeric(ca) ? ca || 0 : cf
            }
            return cf
        }
    });
    if (a6.getComputedStyle) {
        bs = function(e) {
            return a6.getComputedStyle(e, null)
        };
        H = function(cb, b9, ce) {
            var ca, b8, cg, cc = ce || bs(cb), cf = cc ? cc.getPropertyValue(b9) || cc[b9]: aJ, e = cb.style;
            if (cc) {
                if (cf === ""&&!bN.contains(cb.ownerDocument, cb)) {
                    cf = bN.style(cb, b9)
                }
                if (Z.test(cf) && a1.test(b9)) {
                    ca = e.width;
                    b8 = e.minWidth;
                    cg = e.maxWidth;
                    e.minWidth = e.maxWidth = e.width = cf;
                    cf = cc.width;
                    e.width = ca;
                    e.minWidth = b8;
                    e.maxWidth = cg
                }
            }
            return cf
        }
    } else {
        if (o.documentElement.currentStyle) {
            bs = function(e) {
                return e.currentStyle
            };
            H = function(ca, b8, ce) {
                var b9, cc, cf, cb = ce || bs(ca), cg = cb ? cb[b8]: aJ, e = ca.style;
                if (cg == null && e && e[b8]) {
                    cg = e[b8]
                }
                if (Z.test(cg)&&!br.test(b8)) {
                    b9 = e.left;
                    cc = ca.runtimeStyle;
                    cf = cc && cc.left;
                    if (cf) {
                        cc.left = ca.currentStyle.left
                    }
                    e.left = b8 === "fontSize" ? "1em" : cg;
                    cg = e.pixelLeft + "px";
                    e.left = b9;
                    if (cf) {
                        cc.left = cf
                    }
                }
                return cg === "" ? "auto" : cg
            }
        }
    }
    function aM(e, b9, ca) {
        var b8 = bd.exec(b9);
        return b8 ? Math.max(0, b8[1] - (ca || 0)) + (b8[2] || "px") : b9
    }
    function az(cb, b8, e, ce, ca) {
        var b9 = e === (ce ? "border" : "content") ? 4: b8 === "width" ? 1: 0, cc = 0;
        for (; b9 < 4; b9 += 2) {
            if (e === "margin") {
                cc += bN.css(cb, e + bX[b9], true, ca)
            }
            if (ce) {
                if (e === "content") {
                    cc -= bN.css(cb, "padding" + bX[b9], true, ca)
                }
                if (e !== "margin") {
                    cc -= bN.css(cb, "border" + bX[b9] + "Width", true, ca)
                }
            } else {
                cc += bN.css(cb, "padding" + bX[b9], true, ca);
                if (e !== "padding") {
                    cc += bN.css(cb, "border" + bX[b9] + "Width", true, ca)
                }
            }
        }
        return cc
    }
    function y(cb, b8, e) {
        var ca = true, cc = b8 === "width" ? cb.offsetWidth: cb.offsetHeight, b9 = bs(cb), ce = bN.support.boxSizing && bN.css(cb, "boxSizing", false, b9) === "border-box";
        if (cc <= 0 || cc == null) {
            cc = H(cb, b8, b9);
            if (cc < 0 || cc == null) {
                cc = cb.style[b8]
            }
            if (Z.test(cc)) {
                return cc
            }
            ca = ce && (bN.support.boxSizingReliable || cc === cb.style[b8]);
            cc = parseFloat(cc) || 0
        }
        return (cc + az(cb, b8, e || (ce ? "border" : "content"), ca, b9)) + "px"
    }
    function bI(b9) {
        var b8 = o, e = bn[b9];
        if (!e) {
            e = a5(b9, b8);
            if (e === "none" ||!e) {
                aH = (aH || bN("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b8.documentElement);
                b8 = (aH[0].contentWindow || aH[0].contentDocument).document;
                b8.write("<!doctype html><html><body>");
                b8.close();
                e = a5(b9, b8);
                aH.detach()
            }
            bn[b9] = e
        }
        return e
    }
    function a5(e, ca) {
        var b8 = bN(ca.createElement(e)).appendTo(ca.body), b9 = bN.css(b8[0], "display");
        b8.remove();
        return b9
    }
    bN.each(["height", "width"], function(b8, e) {
        bN.cssHooks[e] = {
            get: function(cb, ca, b9) {
                if (ca) {
                    return cb.offsetWidth === 0 && I.test(bN.css(cb, "display")) ? bN.swap(cb, bg, function() {
                        return y(cb, e, b9)
                    }) : y(cb, e, b9)
                }
            },
            set: function(cb, cc, b9) {
                var ca = b9 && bs(cb);
                return aM(cb, cc, b9 ? az(cb, e, b9, bN.support.boxSizing && bN.css(cb, "boxSizing", false, ca) === "border-box", ca) : 0)
            }
        }
    });
    if (!bN.support.opacity) {
        bN.cssHooks.opacity = {
            get: function(b8, e) {
                return aW.test((e && b8.currentStyle ? b8.currentStyle.filter : b8.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            },
            set: function(cb, cc) {
                var ca = cb.style, b8 = cb.currentStyle, e = bN.isNumeric(cc) ? "alpha(opacity=" + cc * 100 + ")": "", b9 = b8 && b8.filter || ca.filter || "";
                ca.zoom = 1;
                if ((cc >= 1 || cc === "") && bN.trim(b9.replace(bk, "")) === "" && ca.removeAttribute) {
                    ca.removeAttribute("filter");
                    if (cc === "" || b8&&!b8.filter) {
                        return 
                    }
                }
                ca.filter = bk.test(b9) ? b9.replace(bk, e) : b9 + " " + e
            }
        }
    }
    bN(function() {
        if (!bN.support.reliableMarginRight) {
            bN.cssHooks.marginRight = {
                get: function(b8, e) {
                    if (e) {
                        return bN.swap(b8, {
                            display: "inline-block"
                        }, H, [b8, "marginRight"])
                    }
                }
            }
        }
        if (!bN.support.pixelPosition && bN.fn.position) {
            bN.each(["top", "left"], function(e, b8) {
                bN.cssHooks[b8] = {
                    get: function(ca, b9) {
                        if (b9) {
                            b9 = H(ca, b8);
                            return Z.test(b9) ? bN(ca).position()[b8] + "px" : b9
                        }
                    }
                }
            })
        }
    });
    if (bN.expr && bN.expr.filters) {
        bN.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bN.support.reliableHiddenOffsets && ((e.style && e.style.display) || bN.css(e, "display")) === "none")
        };
        bN.expr.filters.visible = function(e) {
            return !bN.expr.filters.hidden(e)
        }
    }
    bN.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, b8) {
        bN.cssHooks[e + b8] = {
            expand: function(cb) {
                var ca = 0, b9 = {}, cc = typeof cb === "string" ? cb.split(" "): [cb];
                for (; ca < 4; ca++) {
                    b9[e + bX[ca] + b8] = cc[ca] || cc[ca - 2] || cc[0]
                }
                return b9
            }
        };
        if (!a1.test(e)) {
            bN.cssHooks[e + b8].set = aM
        }
    });
    var bz = /%20/g, aU = /\[\]$/, X = /\r?\n/g, c = /^(?:submit|button|image|reset|file)$/i, ax = /^(?:input|select|textarea|keygen)/i;
    bN.fn.extend({
        serialize: function() {
            return bN.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = bN.prop(this, "elements");
                return e ? bN.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name&&!bN(this).is(":disabled") && ax.test(this.nodeName)&&!c.test(e) && (this.checked ||!t.test(e))
            }).map(function(e, b8) {
                var b9 = bN(this).val();
                return b9 == null ? null : bN.isArray(b9) ? bN.map(b9, function(ca) {
                    return {
                        name: b8.name,
                        value: ca.replace(X, "\r\n")
                    }
                }) : {
                    name: b8.name,
                    value: b9.replace(X, "\r\n")
                }
            }).get()
        }
    });
    bN.param = function(e, b9) {
        var ca, b8 = [], cb = function(cc, ce) {
            ce = bN.isFunction(ce) ? ce() : (ce == null ? "" : ce);
            b8[b8.length] = encodeURIComponent(cc) + "=" + encodeURIComponent(ce)
        };
        if (b9 === aJ) {
            b9 = bN.ajaxSettings && bN.ajaxSettings.traditional
        }
        if (bN.isArray(e) || (e.jquery&&!bN.isPlainObject(e))) {
            bN.each(e, function() {
                cb(this.name, this.value)
            })
        } else {
            for (ca in e) {
                k(ca, e[ca], b9, cb)
            }
        }
        return b8.join("&").replace(bz, "+")
    };
    function k(b9, cb, b8, ca) {
        var e;
        if (bN.isArray(cb)) {
            bN.each(cb, function(ce, cc) {
                if (b8 || aU.test(b9)) {
                    ca(b9, cc)
                } else {
                    k(b9 + "[" + (typeof cc === "object" ? ce : "") + "]", cc, b8, ca)
                }
            })
        } else {
            if (!b8 && bN.type(cb) === "object") {
                for (e in cb) {
                    k(b9 + "[" + e + "]", cb[e], b8, ca)
                }
            } else {
                ca(b9, cb)
            }
        }
    }
    bN.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(b8, e) {
        bN.fn[e] = function(ca, b9) {
            return arguments.length > 0 ? this.on(e, null, ca, b9) : this.trigger(e)
        }
    });
    bN.fn.extend({
        hover: function(e, b8) {
            return this.mouseenter(e).mouseleave(b8 || e)
        },
        bind: function(e, b9, b8) {
            return this.on(e, null, b9, b8)
        },
        unbind: function(e, b8) {
            return this.off(e, null, b8)
        },
        delegate: function(e, b8, ca, b9) {
            return this.on(b8, e, ca, b9)
        },
        undelegate: function(e, b8, b9) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(b8, e || "**", b9)
        }
    });
    var b6, ab, bS = bN.now(), aC = /\?/, at = /#.*$/, R = /([?&])_=[^&]*/, aj = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, E = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, r = /^(?:GET|HEAD)$/, aK = /^\/\//, aX = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, b5 = bN.fn.load, z = {}, bb = {}, aZ = "*/".concat("*");
    try {
        ab = aO.href
    } catch (bj) {
        ab = o.createElement("a");
        ab.href = "";
        ab = ab.href
    }
    b6 = aX.exec(ab.toLowerCase()) || [];
    function bP(e) {
        return function(cb, cc) {
            if (typeof cb !== "string") {
                cc = cb;
                cb = "*"
            }
            var b8, b9 = 0, ca = cb.toLowerCase().match(af) || [];
            if (bN.isFunction(cc)) {
                while ((b8 = ca[b9++])) {
                    if (b8[0] === "+") {
                        b8 = b8.slice(1) || "*";
                        (e[b8] = e[b8] || []).unshift(cc)
                    } else {
                        (e[b8] = e[b8] || []).push(cc)
                    }
                }
            }
        }
    }
    function q(e, b9, ce, ca) {
        var b8 = {}, cb = (e === bb);
        function cc(cf) {
            var cg;
            b8[cf] = true;
            bN.each(e[cf] || [], function(cj, ch) {
                var ck = ch(b9, ce, ca);
                if (typeof ck === "string"&&!cb&&!b8[ck]) {
                    b9.dataTypes.unshift(ck);
                    cc(ck);
                    return false
                } else {
                    if (cb) {
                        return !(cg = ck)
                    }
                }
            });
            return cg
        }
        return cc(b9.dataTypes[0]) ||!b8["*"] && cc("*")
    }
    function u(b9, ca) {
        var e, b8, cb = bN.ajaxSettings.flatOptions || {};
        for (b8 in ca) {
            if (ca[b8] !== aJ) {
                (cb[b8] ? b9 : (e || (e = {})))[b8] = ca[b8]
            }
        }
        if (e) {
            bN.extend(true, b9, e)
        }
        return b9
    }
    bN.fn.load = function(ca, ce, cf) {
        if (typeof ca !== "string" && b5) {
            return b5.apply(this, arguments)
        }
        var e, b9, cb, b8 = this, cc = ca.indexOf(" ");
        if (cc >= 0) {
            e = ca.slice(cc, ca.length);
            ca = ca.slice(0, cc)
        }
        if (bN.isFunction(ce)) {
            cf = ce;
            ce = aJ
        } else {
            if (ce && typeof ce === "object") {
                cb = "POST"
            }
        }
        if (b8.length > 0) {
            bN.ajax({
                url: ca,
                type: cb,
                dataType: "html",
                data: ce
            }).done(function(cg) {
                b9 = arguments;
                b8.html(e ? bN("<div>").append(bN.parseHTML(cg)).find(e) : cg)
            }).complete(cf && function(ch, cg) {
                b8.each(cf, b9 || [ch.responseText, cg, ch])
            })
        }
        return this
    };
    bN.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b8) {
        bN.fn[b8] = function(b9) {
            return this.on(b8, b9)
        }
    });
    bN.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ab,
            type: "GET",
            isLocal: E.test(b6[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": aZ,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": bN.parseJSON,
                "text xml": bN.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(b8, e) {
            return e ? u(u(b8, bN.ajaxSettings), e) : u(bN.ajaxSettings, b8)
        },
        ajaxPrefilter: bP(z),
        ajaxTransport: bP(bb),
        ajax: function(cc, b9) {
            if (typeof cc === "object") {
                b9 = cc;
                cc = aJ
            }
            b9 = b9 || {};
            var cn, cp, ce, cu, cj, b8, cq, ca, ch = bN.ajaxSetup({}, b9), cw = ch.context || ch, cl = ch.context && (cw.nodeType || cw.jquery) ? bN(cw): bN.event, cv = bN.Deferred(), cs = bN.Callbacks("once memory"), cf = ch.statusCode || {}, cm = {}, ct = {}, cb = 0, cg = "canceled", co = {
                readyState: 0,
                getResponseHeader: function(cx) {
                    var e;
                    if (cb === 2) {
                        if (!ca) {
                            ca = {};
                            while ((e = aj.exec(cu))) {
                                ca[e[1].toLowerCase()] = e[2]
                            }
                        }
                        e = ca[cx.toLowerCase()]
                    }
                    return e == null ? null : e
                },
                getAllResponseHeaders: function() {
                    return cb === 2 ? cu : null
                },
                setRequestHeader: function(cx, cy) {
                    var e = cx.toLowerCase();
                    if (!cb) {
                        cx = ct[e] = ct[e] || cx;
                        cm[cx] = cy
                    }
                    return this
                },
                overrideMimeType: function(e) {
                    if (!cb) {
                        ch.mimeType = e
                    }
                    return this
                },
                statusCode: function(cx) {
                    var e;
                    if (cx) {
                        if (cb < 2) {
                            for (e in cx) {
                                cf[e] = [cf[e], cx[e]]
                            }
                        } else {
                            co.always(cx[co.status])
                        }
                    }
                    return this
                },
                abort: function(cx) {
                    var e = cx || cg;
                    if (cq) {
                        cq.abort(e)
                    }
                    ck(0, e);
                    return this
                }
            };
            cv.promise(co).complete = cs.add;
            co.success = co.done;
            co.error = co.fail;
            ch.url = ((cc || ch.url || ab) + "").replace(at, "").replace(aK, b6[1] + "//");
            ch.type = b9.method || b9.type || ch.method || ch.type;
            ch.dataTypes = bN.trim(ch.dataType || "*").toLowerCase().match(af) || [""];
            if (ch.crossDomain == null) {
                cn = aX.exec(ch.url.toLowerCase());
                ch.crossDomain=!!(cn && (cn[1] !== b6[1] || cn[2] !== b6[2] || (cn[3] || (cn[1] === "http:" ? "80" : "443")) !== (b6[3] || (b6[1] === "http:" ? "80" : "443"))))
            }
            if (ch.data && ch.processData && typeof ch.data !== "string") {
                ch.data = bN.param(ch.data, ch.traditional)
            }
            q(z, ch, b9, co);
            if (cb === 2) {
                return co
            }
            b8 = ch.global;
            if (b8 && bN.active++===0) {
                bN.event.trigger("ajaxStart")
            }
            ch.type = ch.type.toUpperCase();
            ch.hasContent=!r.test(ch.type);
            ce = ch.url;
            if (!ch.hasContent) {
                if (ch.data) {
                    ce = (ch.url += (aC.test(ce) ? "&" : "?") + ch.data);
                    delete ch.data
                }
                if (ch.cache === false) {
                    ch.url = R.test(ce) ? ce.replace(R, "$1_=" + bS++) : ce + (aC.test(ce) ? "&" : "?") + "_=" + bS++
                }
            }
            if (ch.ifModified) {
                if (bN.lastModified[ce]) {
                    co.setRequestHeader("If-Modified-Since", bN.lastModified[ce])
                }
                if (bN.etag[ce]) {
                    co.setRequestHeader("If-None-Match", bN.etag[ce])
                }
            }
            if (ch.data && ch.hasContent && ch.contentType !== false || b9.contentType) {
                co.setRequestHeader("Content-Type", ch.contentType)
            }
            co.setRequestHeader("Accept", ch.dataTypes[0] && ch.accepts[ch.dataTypes[0]] ? ch.accepts[ch.dataTypes[0]] + (ch.dataTypes[0] !== "*" ? ", " + aZ + "; q=0.01" : "") : ch.accepts["*"]);
            for (cp in ch.headers) {
                co.setRequestHeader(cp, ch.headers[cp])
            }
            if (ch.beforeSend && (ch.beforeSend.call(cw, co, ch) === false || cb === 2)) {
                return co.abort()
            }
            cg = "abort";
            for (cp in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                co[cp](ch[cp])
            }
            cq = q(bb, ch, b9, co);
            if (!cq) {
                ck( - 1, "No Transport")
            } else {
                co.readyState = 1;
                if (b8) {
                    cl.trigger("ajaxSend", [co, ch])
                }
                if (ch.async && ch.timeout > 0) {
                    cj = setTimeout(function() {
                        co.abort("timeout")
                    }, ch.timeout)
                }
                try {
                    cb = 1;
                    cq.send(cm, ck)
                } catch (cr) {
                    if (cb < 2) {
                        ck( - 1, cr)
                    } else {
                        throw cr
                    }
                }
            }
            function ck(cB, cx, cC, cz) {
                var e, cF, cD, cA, cE, cy = cx;
                if (cb === 2) {
                    return 
                }
                cb = 2;
                if (cj) {
                    clearTimeout(cj)
                }
                cq = aJ;
                cu = cz || "";
                co.readyState = cB > 0 ? 4 : 0;
                e = cB >= 200 && cB < 300 || cB === 304;
                if (cC) {
                    cA = h(ch, co, cC)
                }
                cA = ai(ch, cA, co, e);
                if (e) {
                    if (ch.ifModified) {
                        cE = co.getResponseHeader("Last-Modified");
                        if (cE) {
                            bN.lastModified[ce] = cE
                        }
                        cE = co.getResponseHeader("etag");
                        if (cE) {
                            bN.etag[ce] = cE
                        }
                    }
                    if (cB === 204 || ch.type === "HEAD") {
                        cy = "nocontent"
                    } else {
                        if (cB === 304) {
                            cy = "notmodified"
                        } else {
                            cy = cA.state;
                            cF = cA.data;
                            cD = cA.error;
                            e=!cD
                        }
                    }
                } else {
                    cD = cy;
                    if (cB ||!cy) {
                        cy = "error";
                        if (cB < 0) {
                            cB = 0
                        }
                    }
                }
                co.status = cB;
                co.statusText = (cx || cy) + "";
                if (e) {
                    cv.resolveWith(cw, [cF, cy, co])
                } else {
                    cv.rejectWith(cw, [co, cy, cD])
                }
                co.statusCode(cf);
                cf = aJ;
                if (b8) {
                    cl.trigger(e ? "ajaxSuccess" : "ajaxError", [co, ch, e ? cF: cD])
                }
                cs.fireWith(cw, [co, cy]);
                if (b8) {
                    cl.trigger("ajaxComplete", [co, ch]);
                    if (!(--bN.active)) {
                        bN.event.trigger("ajaxStop")
                    }
                }
            }
            return co
        },
        getJSON: function(e, b8, b9) {
            return bN.get(e, b8, b9, "json")
        },
        getScript: function(e, b8) {
            return bN.get(e, aJ, b8, "script")
        }
    });
    bN.each(["get", "post"], function(e, b8) {
        bN[b8] = function(b9, cb, cc, ca) {
            if (bN.isFunction(cb)) {
                ca = ca || cc;
                cc = cb;
                cb = aJ
            }
            return bN.ajax({
                url: b9,
                type: b8,
                dataType: ca,
                data: cb,
                success: cc
            })
        }
    });
    function h(cg, cf, cb) {
        var e, ca, b9, cc, b8 = cg.contents, ce = cg.dataTypes;
        while (ce[0] === "*") {
            ce.shift();
            if (ca === aJ) {
                ca = cg.mimeType || cf.getResponseHeader("Content-Type")
            }
        }
        if (ca) {
            for (cc in b8) {
                if (b8[cc] && b8[cc].test(ca)) {
                    ce.unshift(cc);
                    break
                }
            }
        }
        if (ce[0] in cb) {
            b9 = ce[0]
        } else {
            for (cc in cb) {
                if (!ce[0] || cg.converters[cc + " " + ce[0]]) {
                    b9 = cc;
                    break
                }
                if (!e) {
                    e = cc
                }
            }
            b9 = b9 || e
        }
        if (b9) {
            if (b9 !== ce[0]) {
                ce.unshift(b9)
            }
            return cb[b9]
        }
    }
    function ai(cl, cb, ch, b9) {
        var b8, cf, cj, cc, ca, ck = {}, cg = cl.dataTypes.slice();
        if (cg[1]) {
            for (cj in cl.converters) {
                ck[cj.toLowerCase()] = cl.converters[cj]
            }
        }
        cf = cg.shift();
        while (cf) {
            if (cl.responseFields[cf]) {
                ch[cl.responseFields[cf]] = cb
            }
            if (!ca && b9 && cl.dataFilter) {
                cb = cl.dataFilter(cb, cl.dataType)
            }
            ca = cf;
            cf = cg.shift();
            if (cf) {
                if (cf === "*") {
                    cf = ca
                } else {
                    if (ca !== "*" && ca !== cf) {
                        cj = ck[ca + " " + cf] || ck["* " + cf];
                        if (!cj) {
                            for (b8 in ck) {
                                cc = b8.split(" ");
                                if (cc[1] === cf) {
                                    cj = ck[ca + " " + cc[0]] || ck["* " + cc[0]];
                                    if (cj) {
                                        if (cj === true) {
                                            cj = ck[b8]
                                        } else {
                                            if (ck[b8] !== true) {
                                                cf = cc[0];
                                                cg.unshift(cc[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (cj !== true) {
                            if (cj && cl["throws"]) {
                                cb = cj(cb)
                            } else {
                                try {
                                    cb = cj(cb)
                                } catch (ce) {
                                    return {
                                        state: "parsererror",
                                        error: cj ? ce: "No conversion from " + ca + " to " + cf
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: cb
        }
    }
    bN.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                bN.globalEval(e);
                return e
            }
        }
    });
    bN.ajaxPrefilter("script", function(e) {
        if (e.cache === aJ) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    bN.ajaxTransport("script", function(b9) {
        if (b9.crossDomain) {
            var e, b8 = o.head || bN("head")[0] || o.documentElement;
            return {
                send: function(ca, cb) {
                    e = o.createElement("script");
                    e.async = true;
                    if (b9.scriptCharset) {
                        e.charset = b9.scriptCharset
                    }
                    e.src = b9.url;
                    e.onload = e.onreadystatechange = function(ce, cc) {
                        if (cc ||!e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (e.parentNode) {
                                e.parentNode.removeChild(e)
                            }
                            e = null;
                            if (!cc) {
                                cb(200, "success")
                            }
                        }
                    };
                    b8.insertBefore(e, b8.firstChild)
                },
                abort: function() {
                    if (e) {
                        e.onload(aJ, true)
                    }
                }
            }
        }
    });
    var bu = [], a9 = /(=)\?(?=&|$)|\?\?/;
    bN.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = bu.pop() || (bN.expando + "_" + (bS++));
            this[e] = true;
            return e
        }
    });
    bN.ajaxPrefilter("json jsonp", function(ca, e, cb) {
        var ce, b8, b9, cc = ca.jsonp !== false && (a9.test(ca.url) ? "url" : typeof ca.data === "string"&&!(ca.contentType || "").indexOf("application/x-www-form-urlencoded") && a9.test(ca.data) && "data");
        if (cc || ca.dataTypes[0] === "jsonp") {
            ce = ca.jsonpCallback = bN.isFunction(ca.jsonpCallback) ? ca.jsonpCallback() : ca.jsonpCallback;
            if (cc) {
                ca[cc] = ca[cc].replace(a9, "$1" + ce)
            } else {
                if (ca.jsonp !== false) {
                    ca.url += (aC.test(ca.url) ? "&" : "?") + ca.jsonp + "=" + ce
                }
            }
            ca.converters["script json"] = function() {
                if (!b9) {
                    bN.error(ce + " was not called")
                }
                return b9[0]
            };
            ca.dataTypes[0] = "json";
            b8 = a6[ce];
            a6[ce] = function() {
                b9 = arguments
            };
            cb.always(function() {
                a6[ce] = b8;
                if (ca[ce]) {
                    ca.jsonpCallback = e.jsonpCallback;
                    bu.push(ce)
                }
                if (b9 && bN.isFunction(b8)) {
                    b8(b9[0])
                }
                b9 = b8 = aJ
            });
            return "script"
        }
    });
    var ak, aA, aB = 0, aS = a6.ActiveXObject && function() {
        var e;
        for (e in ak) {
            ak[e](aJ, true)
        }
    };
    function bH() {
        try {
            return new a6.XMLHttpRequest()
        } catch (b8) {}
    }
    function bi() {
        try {
            return new a6.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b8) {}
    }
    bN.ajaxSettings.xhr = a6.ActiveXObject ? function() {
        return !this.isLocal && bH() || bi()
    } : bH;
    aA = bN.ajaxSettings.xhr();
    bN.support.cors=!!aA && ("withCredentials" in aA);
    aA = bN.support.ajax=!!aA;
    if (aA) {
        bN.ajaxTransport(function(e) {
            if (!e.crossDomain || bN.support.cors) {
                var b8;
                return {
                    send: function(cf, b9) {
                        var cc, ca, ce = e.xhr();
                        if (e.username) {
                            ce.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            ce.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (ca in e.xhrFields) {
                                ce[ca] = e.xhrFields[ca]
                            }
                        }
                        if (e.mimeType && ce.overrideMimeType) {
                            ce.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain&&!cf["X-Requested-With"]) {
                            cf["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (ca in cf) {
                                ce.setRequestHeader(ca, cf[ca])
                            }
                        } catch (cb) {}
                        ce.send((e.hasContent && e.data) || null);
                        b8 = function(cj, ch) {
                            var cg, ck, cn, cl;
                            try {
                                if (b8 && (ch || ce.readyState === 4)) {
                                    b8 = aJ;
                                    if (cc) {
                                        ce.onreadystatechange = bN.noop;
                                        if (aS) {
                                            delete ak[cc]
                                        }
                                    }
                                    if (ch) {
                                        if (ce.readyState !== 4) {
                                            ce.abort()
                                        }
                                    } else {
                                        cl = {};
                                        cg = ce.status;
                                        ck = ce.getAllResponseHeaders();
                                        if (typeof ce.responseText === "string") {
                                            cl.text = ce.responseText
                                        }
                                        try {
                                            cn = ce.statusText
                                        } catch (cm) {
                                            cn = ""
                                        }
                                        if (!cg && e.isLocal&&!e.crossDomain) {
                                            cg = cl.text ? 200 : 404
                                        } else {
                                            if (cg === 1223) {
                                                cg = 204
                                            }
                                        }
                                    }
                                }
                            } catch (co) {
                                if (!ch) {
                                    b9( - 1, co)
                                }
                            }
                            if (cl) {
                                b9(cg, cn, cl, ck)
                            }
                        };
                        if (!e.async) {
                            b8()
                        } else {
                            if (ce.readyState === 4) {
                                setTimeout(b8)
                            } else {
                                cc=++aB;
                                if (aS) {
                                    if (!ak) {
                                        ak = {};
                                        bN(a6).unload(aS)
                                    }
                                    ak[cc] = b8
                                }
                                ce.onreadystatechange = b8
                            }
                        }
                    },
                    abort: function() {
                        if (b8) {
                            b8(aJ, true)
                        }
                    }
                }
            }
        })
    }
    var O, ag, bV = /^(?:toggle|show|hide)$/, bO = new RegExp("^(?:([+-])=|)(" + bE + ")([a-z%]*)$", "i"), bU = /queueHooks$/, aE = [j], a3 = {
        "*": [function(e, ce) {
            var cg = this.createTween(e, ce), cb = cg.cur(), ca = bO.exec(ce), cf = ca && ca[3] || (bN.cssNumber[e] ? "" : "px"), b8 = (bN.cssNumber[e] || cf !== "px"&&+cb) && bO.exec(bN.css(cg.elem, e)), b9 = 1, cc = 20;
            if (b8 && b8[3] !== cf) {
                cf = cf || b8[3];
                ca = ca || [];
                b8 =+ cb || 1;
                do {
                    b9 = b9 || ".5";
                    b8 = b8 / b9;
                    bN.style(cg.elem, e, b8 + cf)
                }
                while (b9 !== (b9 = cg.cur() / cb) && b9 !== 1&&--cc)
                }
            if (ca) {
                b8 = cg.start =+ b8||+cb || 0;
                cg.unit = cf;
                cg.end = ca[1] ? b8 + (ca[1] + 1) * ca[2] : + ca[2]
            }
            return cg
        }
        ]
    };
    function bq() {
        setTimeout(function() {
            O = aJ
        });
        return (O = bN.now())
    }
    function bf(cb, ce, ca) {
        var b8, cc = (a3[ce] || []).concat(a3["*"]),
        e = 0,
        b9 = cc.length;
        for (;
        e < b9;
        e++) {
            if ((b8 = cc[e].call(ca,
            ce,
            cb))) {
                return b8
            }
        }
    }
    function g(b9, ce, ch) {
        var cj, e, cc = 0, b8 = aE.length, cg = bN.Deferred().always(function() {
            delete cb.elem
        }), cb = function() {
            if (e) {
                return false
            }
            var cp = O || bq(), cm = Math.max(0, ca.startTime + ca.duration - cp), ck = cm / ca.duration || 0, co = 1 - ck, cl = 0, cn = ca.tweens.length;
            for (; cl < cn; cl++) {
                ca.tweens[cl].run(co)
            }
            cg.notifyWith(b9, [ca, co, cm]);
            if (co < 1 && cn) {
                return cm
            } else {
                cg.resolveWith(b9, [ca]);
                return false
            }
        }, ca = cg.promise({
            elem: b9,
            props: bN.extend({}, ce),
            opts: bN.extend(true, {
                specialEasing: {}
            }, ch),
            originalProperties: ce,
            originalOptions: ch,
            startTime: O || bq(),
            duration: ch.duration,
            tweens: [],
            createTween: function(cm, ck) {
                var cl = bN.Tween(b9, ca.opts, cm, ck, ca.opts.specialEasing[cm] || ca.opts.easing);
                ca.tweens.push(cl);
                return cl
            },
            stop: function(cl) {
                var ck = 0, cm = cl ? ca.tweens.length: 0;
                if (e) {
                    return this
                }
                e = true;
                for (; ck < cm; ck++) {
                    ca.tweens[ck].run(1)
                }
                if (cl) {
                    cg.resolveWith(b9, [ca, cl])
                } else {
                    cg.rejectWith(b9, [ca, cl])
                }
                return this
            }
        }), cf = ca.props;
        ap(cf, ca.opts.specialEasing);
        for (; cc < b8; cc++) {
            cj = aE[cc].call(ca, b9, cf, ca.opts);
            if (cj) {
                return cj
            }
        }
        bN.map(cf, bf, ca);
        if (bN.isFunction(ca.opts.start)) {
            ca.opts.start.call(b9, ca)
        }
        bN.fx.timer(bN.extend(cb, {
            elem: b9,
            anim: ca,
            queue: ca.opts.queue
        }));
        return ca.progress(ca.opts.progress).done(ca.opts.done, ca.opts.complete).fail(ca.opts.fail).always(ca.opts.always)
    }
    function ap(ca, cc) {
        var b9, b8, ce, cb, e;
        for (b9 in ca) {
            b8 = bN.camelCase(b9);
            ce = cc[b8];
            cb = ca[b9];
            if (bN.isArray(cb)) {
                ce = cb[1];
                cb = ca[b9] = cb[0]
            }
            if (b9 !== b8) {
                ca[b8] = cb;
                delete ca[b9]
            }
            e = bN.cssHooks[b8];
            if (e && "expand" in e) {
                cb = e.expand(cb);
                delete ca[b8];
                for (b9 in cb) {
                    if (!(b9 in ca)) {
                        ca[b9] = cb[b9];
                        cc[b9] = ce
                    }
                }
            } else {
                cc[b8] = ce
            }
        }
    }
    bN.Animation = bN.extend(g, {
        tweener: function(b8, cb) {
            if (bN.isFunction(b8)) {
                cb = b8;
                b8 = ["*"]
            } else {
                b8 = b8.split(" ")
            }
            var ca, e = 0, b9 = b8.length;
            for (; e < b9; e++) {
                ca = b8[e];
                a3[ca] = a3[ca] || [];
                a3[ca].unshift(cb)
            }
        },
        prefilter: function(b8, e) {
            if (e) {
                aE.unshift(b8)
            } else {
                aE.push(b8)
            }
        }
    });
    function j(ca, cf, e) {
        var b9, ch, cc, cl, cm, cj, cb = this, cg = {}, b8 = ca.style, ce = ca.nodeType && S(ca), ck = bN._data(ca, "fxshow");
        if (!e.queue) {
            cm = bN._queueHooks(ca, "fx");
            if (cm.unqueued == null) {
                cm.unqueued = 0;
                cj = cm.empty.fire;
                cm.empty.fire = function() {
                    if (!cm.unqueued) {
                        cj()
                    }
                }
            }
            cm.unqueued++;
            cb.always(function() {
                cb.always(function() {
                    cm.unqueued--;
                    if (!bN.queue(ca, "fx").length) {
                        cm.empty.fire()
                    }
                })
            })
        }
        if (ca.nodeType === 1 && ("height" in cf || "width" in cf)) {
            e.overflow = [b8.overflow, b8.overflowX, b8.overflowY];
            if (bN.css(ca, "display") === "inline" && bN.css(ca, "float") === "none") {
                if (!bN.support.inlineBlockNeedsLayout || bI(ca.nodeName) === "inline") {
                    b8.display = "inline-block"
                } else {
                    b8.zoom = 1
                }
            }
        }
        if (e.overflow) {
            b8.overflow = "hidden";
            if (!bN.support.shrinkWrapBlocks) {
                cb.always(function() {
                    b8.overflow = e.overflow[0];
                    b8.overflowX = e.overflow[1];
                    b8.overflowY = e.overflow[2]
                })
            }
        }
        for (b9 in cf) {
            ch = cf[b9];
            if (bV.exec(ch)) {
                delete cf[b9];
                cc = cc || ch === "toggle";
                if (ch === (ce ? "hide" : "show")) {
                    continue
                }
                cg[b9] = ck && ck[b9] || bN.style(ca, b9)
            }
        }
        if (!bN.isEmptyObject(cg)) {
            if (ck) {
                if ("hidden" in ck) {
                    ce = ck.hidden
                }
            } else {
                ck = bN._data(ca, "fxshow", {})
            }
            if (cc) {
                ck.hidden=!ce
            }
            if (ce) {
                bN(ca).show()
            } else {
                cb.done(function() {
                    bN(ca).hide()
                })
            }
            cb.done(function() {
                var cn;
                bN._removeData(ca, "fxshow");
                for (cn in cg) {
                    bN.style(ca, cn, cg[cn])
                }
            });
            for (b9 in cg) {
                cl = bf(ce ? ck[b9] : 0, b9, cb);
                if (!(b9 in ck)) {
                    ck[b9] = cl.start;
                    if (ce) {
                        cl.end = cl.start;
                        cl.start = b9 === "width" || b9 === "height" ? 1 : 0
                    }
                }
            }
        }
    }
    function J(b9, b8, cb, e, ca) {
        return new J.prototype.init(b9, b8, cb, e, ca)
    }
    bN.Tween = J;
    J.prototype = {
        constructor: J,
        init: function(ca, b8, cc, e, cb, b9) {
            this.elem = ca;
            this.prop = cc;
            this.easing = cb || "swing";
            this.options = b8;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = b9 || (bN.cssNumber[cc] ? "" : "px")
        },
        cur: function() {
            var e = J.propHooks[this.prop];
            return e && e.get ? e.get(this) : J.propHooks._default.get(this)
        },
        run: function(b9) {
            var b8, e = J.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b8 = bN.easing[this.easing](b9, this.options.duration * b9, 0, 1, this.options.duration)
            } else {
                this.pos = b8 = b9
            }
            this.now = (this.end - this.start) * b8 + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (e && e.set) {
                e.set(this)
            } else {
                J.propHooks._default.set(this)
            }
            return this
        }
    };
    J.prototype.init.prototype = J.prototype;
    J.propHooks = {
        _default: {
            get: function(b8) {
                var e;
                if (b8.elem[b8.prop] != null && (!b8.elem.style || b8.elem.style[b8.prop] == null)) {
                    return b8.elem[b8.prop]
                }
                e = bN.css(b8.elem, b8.prop, "");
                return !e || e === "auto" ? 0 : e
            },
            set: function(e) {
                if (bN.fx.step[e.prop]) {
                    bN.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[bN.cssProps[e.prop]] != null || bN.cssHooks[e.prop])) {
                        bN.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    J.propHooks.scrollTop = J.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    bN.each(["toggle", "show", "hide"], function(b8, e) {
        var b9 = bN.fn[e];
        bN.fn[e] = function(ca, cc, cb) {
            return ca == null || typeof ca === "boolean" ? b9.apply(this, arguments) : this.animate(bM(e, true), ca, cc, cb)
        }
    });
    bN.fn.extend({
        fadeTo: function(e, ca, b9, b8) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: ca
            }, e, b9, b8)
        },
        animate: function(ce, ca, cc, cb) {
            var b9 = bN.isEmptyObject(ce), e = bN.speed(ca, cc, cb), b8 = function() {
                var cf = g(this, bN.extend({}, ce), e);
                if (b9 || bN._data(this, "finish")) {
                    cf.stop(true)
                }
            };
            b8.finish = b8;
            return b9 || e.queue === false ? this.each(b8) : this.queue(e.queue, b8)
        },
        stop: function(b9, b8, e) {
            var ca = function(cb) {
                var cc = cb.stop;
                delete cb.stop;
                cc(e)
            };
            if (typeof b9 !== "string") {
                e = b8;
                b8 = b9;
                b9 = aJ
            }
            if (b8 && b9 !== false) {
                this.queue(b9 || "fx", [])
            }
            return this.each(function() {
                var cf = true, cb = b9 != null && b9 + "queueHooks", ce = bN.timers, cc = bN._data(this);
                if (cb) {
                    if (cc[cb] && cc[cb].stop) {
                        ca(cc[cb])
                    }
                } else {
                    for (cb in cc) {
                        if (cc[cb] && cc[cb].stop && bU.test(cb)) {
                            ca(cc[cb])
                        }
                    }
                }
                for (cb = ce.length; cb--;) {
                    if (ce[cb].elem === this && (b9 == null || ce[cb].queue === b9)) {
                        ce[cb].anim.stop(e);
                        cf = false;
                        ce.splice(cb, 1)
                    }
                }
                if (cf ||!e) {
                    bN.dequeue(this, b9)
                }
            })
        },
        finish: function(e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function() {
                var ca, ce = bN._data(this), b9 = ce[e + "queue"], b8 = ce[e + "queueHooks"], cc = bN.timers, cb = b9 ? b9.length: 0;
                ce.finish = true;
                bN.queue(this, e, []);
                if (b8 && b8.stop) {
                    b8.stop.call(this, true)
                }
                for (ca = cc.length; ca--;) {
                    if (cc[ca].elem === this && cc[ca].queue === e) {
                        cc[ca].anim.stop(true);
                        cc.splice(ca, 1)
                    }
                }
                for (ca = 0; ca < cb; ca++) {
                    if (b9[ca] && b9[ca].finish) {
                        b9[ca].finish.call(this)
                    }
                }
                delete ce.finish
            })
        }
    });
    function bM(b9, cb) {
        var ca, e = {
            height: b9
        }, b8 = 0;
        cb = cb ? 1 : 0;
        for (; b8 < 4; b8 += 2 - cb) {
            ca = bX[b8];
            e["margin" + ca] = e["padding" + ca] = b9
        }
        if (cb) {
            e.opacity = e.width = b9
        }
        return e
    }
    bN.each({
        slideDown: bM("show"),
        slideUp: bM("hide"),
        slideToggle: bM("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, b8) {
        bN.fn[e] = function(b9, cb, ca) {
            return this.animate(b8, b9, cb, ca)
        }
    });
    bN.speed = function(b9, ca, b8) {
        var e = b9 && typeof b9 === "object" ? bN.extend({}, b9): {
            complete: b8 ||!b8 && ca || bN.isFunction(b9) && b9,
            duration: b9,
            easing: b8 && ca || ca&&!bN.isFunction(ca) && ca
        };
        e.duration = bN.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bN.fx.speeds ? bN.fx.speeds[e.duration] : bN.fx.speeds._default;
        if (e.queue == null || e.queue === true) {
            e.queue = "fx"
        }
        e.old = e.complete;
        e.complete = function() {
            if (bN.isFunction(e.old)) {
                e.old.call(this)
            }
            if (e.queue) {
                bN.dequeue(this, e.queue)
            }
        };
        return e
    };
    bN.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    bN.timers = [];
    bN.fx = J.prototype.init;
    bN.fx.tick = function() {
        var b9, b8 = bN.timers, e = 0;
        O = bN.now();
        for (; e < b8.length; e++) {
            b9 = b8[e];
            if (!b9() && b8[e] === b9) {
                b8.splice(e--, 1)
            }
        }
        if (!b8.length) {
            bN.fx.stop()
        }
        O = aJ
    };
    bN.fx.timer = function(e) {
        if (e() && bN.timers.push(e)) {
            bN.fx.start()
        }
    };
    bN.fx.interval = 13;
    bN.fx.start = function() {
        if (!ag) {
            ag = setInterval(bN.fx.tick, bN.fx.interval)
        }
    };
    bN.fx.stop = function() {
        clearInterval(ag);
        ag = null
    };
    bN.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    bN.fx.step = {};
    if (bN.expr && bN.expr.filters) {
        bN.expr.filters.animated = function(e) {
            return bN.grep(bN.timers, function(b8) {
                return e === b8.elem
            }).length
        }
    }
    bN.fn.offset = function(b8) {
        if (arguments.length) {
            return b8 === aJ ? this : this.each(function(ce) {
                bN.offset.setOffset(this, b8, ce)
            })
        }
        var e, cc, ca = {
            top: 0,
            left: 0
        }, b9 = this[0], cb = b9 && b9.ownerDocument;
        if (!cb) {
            return 
        }
        e = cb.documentElement;
        if (!bN.contains(e, b9)) {
            return ca
        }
        if (typeof b9.getBoundingClientRect !== aF) {
            ca = b9.getBoundingClientRect()
        }
        cc = bt(cb);
        return {
            top: ca.top + (cc.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: ca.left + (cc.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }
    };
    bN.offset = {
        setOffset: function(ca, cl, ce) {
            var cf = bN.css(ca, "position");
            if (cf === "static") {
                ca.style.position = "relative"
            }
            var cc = bN(ca), b8 = cc.offset(), e = bN.css(ca, "top"), cj = bN.css(ca, "left"), ck = (cf === "absolute" || cf === "fixed") && bN.inArray("auto", [e, cj])>-1, ch = {}, cg = {}, b9, cb;
            if (ck) {
                cg = cc.position();
                b9 = cg.top;
                cb = cg.left
            } else {
                b9 = parseFloat(e) || 0;
                cb = parseFloat(cj) || 0
            }
            if (bN.isFunction(cl)) {
                cl = cl.call(ca, ce, b8)
            }
            if (cl.top != null) {
                ch.top = (cl.top - b8.top) + b9
            }
            if (cl.left != null) {
                ch.left = (cl.left - b8.left) + cb
            }
            if ("using" in cl) {
                cl.using.call(ca, ch)
            } else {
                cc.css(ch)
            }
        }
    };
    bN.fn.extend({
        position: function() {
            if (!this[0]) {
                return 
            }
            var b9, ca, e = {
                top: 0,
                left: 0
            }, b8 = this[0];
            if (bN.css(b8, "position") === "fixed") {
                ca = b8.getBoundingClientRect()
            } else {
                b9 = this.offsetParent();
                ca = this.offset();
                if (!bN.nodeName(b9[0], "html")) {
                    e = b9.offset()
                }
                e.top += bN.css(b9[0], "borderTopWidth", true);
                e.left += bN.css(b9[0], "borderLeftWidth", true)
            }
            return {
                top: ca.top - e.top - bN.css(b8, "marginTop", true),
                left: ca.left - e.left - bN.css(b8, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || b0;
                while (e && (!bN.nodeName(e, "html") && bN.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || b0
            })
        }
    });
    bN.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b9, b8) {
        var e = /Y/.test(b8);
        bN.fn[b9] = function(ca) {
            return bN.access(this, function(cb, cf, ce) {
                var cc = bt(cb);
                if (ce === aJ) {
                    return cc ? (b8 in cc) ? cc[b8] : cc.document.documentElement[cf] : cb[cf]
                }
                if (cc) {
                    cc.scrollTo(!e ? ce : bN(cc).scrollLeft(), e ? ce : bN(cc).scrollTop())
                } else {
                    cb[cf] = ce
                }
            }, b9, ca, arguments.length, null)
        }
    });
    function bt(e) {
        return bN.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    bN.each({
        Height: "height",
        Width: "width"
    }, function(e, b8) {
        bN.each({
            padding: "inner" + e,
            content: b8,
            "": "outer" + e
        }, function(b9, ca) {
            bN.fn[ca] = function(cf, ce) {
                var cc = arguments.length && (b9 || typeof cf !== "boolean"), cb = b9 || (cf === true || ce === true ? "margin" : "border");
                return bN.access(this, function(ch, cg, cj) {
                    var ck;
                    if (bN.isWindow(ch)) {
                        return ch.document.documentElement["client" + e]
                    }
                    if (ch.nodeType === 9) {
                        ck = ch.documentElement;
                        return Math.max(ch.body["scroll" + e], ck["scroll" + e], ch.body["offset" + e], ck["offset" + e], ck["client" + e])
                    }
                    return cj === aJ ? bN.css(ch, cg, cb) : bN.style(ch, cg, cj, cb)
                }, b8, cc ? cf : aJ, cc, null)
            }
        })
    });
    bN.fn.size = function() {
        return this.length
    };
    bN.fn.andSelf = bN.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = bN
    } else {
        a6.jQuery = a6.$ = bN;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return bN
            })
        }
    }
})(window);
var FlashDetect = new function() {
    var a = this;
    a.installed = false;
    a.raw = "";
    a.major =- 1;
    a.minor =- 1;
    a.revision =- 1;
    a.revisionStr = "";
    var b = [{
        name: "ShockwaveFlash.ShockwaveFlash.7",
        version: function(j) {
            return e(j)
        }
    }, {
        name: "ShockwaveFlash.ShockwaveFlash.6",
        version: function(m) {
            var j = "6,0,21";
            try {
                m.AllowScriptAccess = "always";
                j = e(m)
            } catch (k) {}
            return j
        }
    }, {
        name: "ShockwaveFlash.ShockwaveFlash",
        version: function(j) {
            return e(j)
        }
    }
    ];
    var e = function(m) {
        var j =- 1;
        try {
            j = m.GetVariable("$version")
        } catch (k) {}
        return j
    };
    var h = function(j) {
        var m =- 1;
        try {
            m = new ActiveXObject(j)
        } catch (k) {
            m = {
                activeXError: true
            }
        }
        return m
    };
    var c = function(k) {
        var j = k.split(",");
        return {
            raw: k,
            major: parseInt(j[0].split(" ")[1], 10),
            minor: parseInt(j[1], 10),
            revision: parseInt(j[2], 10),
            revisionStr: j[2]
        }
    };
    var g = function(n) {
        var k = n.split(/ +/);
        var m = k[2].split(/\./);
        var j = k[3];
        return {
            raw: n,
            major: parseInt(m[0], 10),
            minor: parseInt(m[1], 10),
            revisionStr: j,
            revision: f(j)
        }
    };
    var f = function(j) {
        return parseInt(j.replace(/[a-zA-Z]/g, ""), 10) || a.revision
    };
    a.majorAtLeast = function(j) {
        return a.major >= j
    };
    a.minorAtLeast = function(j) {
        return a.minor >= j
    };
    a.revisionAtLeast = function(j) {
        return a.revision >= j
    };
    a.versionAtLeast = function(k) {
        var m = [a.major, a.minor, a.revision];
        var j = Math.min(m.length, arguments.length);
        for (i = 0; i < j; i++) {
            if (m[i] >= arguments[i]) {
                if (i + 1 < j && m[i] == arguments[i]) {
                    continue
                } else {
                    return true
                }
            } else {
                return false
            }
        }
    };
    a.FlashDetect = function() {
        if (navigator.plugins && navigator.plugins.length > 0) {
            var n = "application/x-shockwave-flash";
            var m = navigator.mimeTypes;
            if (m && m[n] && m[n].enabledPlugin && m[n].enabledPlugin.description) {
                var j = m[n].enabledPlugin.description;
                var o = g(j);
                a.raw = o.raw;
                a.major = o.major;
                a.minor = o.minor;
                a.revisionStr = o.revisionStr;
                a.revision = o.revision;
                a.installed = true
            }
        } else {
            if (navigator.appVersion.indexOf("Mac")==-1 && window.execScript) {
                var j =- 1;
                for (var k = 0; k < b.length && j==-1; k++) {
                    var p = h(b[k].name);
                    if (!p.activeXError) {
                        a.installed = true;
                        j = b[k].version(p);
                        if (j!=-1) {
                            var o = c(j);
                            a.raw = o.raw;
                            a.major = o.major;
                            a.minor = o.minor;
                            a.revision = o.revision;
                            a.revisionStr = o.revisionStr
                        }
                    }
                }
            }
        }
    }()
};
FlashDetect.JS_RELEASE = "1.0.4";
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;
!function(b) {
    var e = Array.isArray ? Array.isArray: function h(m) {
        return Object.prototype.toString.call(m) === "[object Array]"
    };
    var f = 10;
    function j() {
        this._events = {};
        if (this._conf) {
            a.call(this, this._conf)
        }
    }
    function a(m) {
        if (m) {
            this._conf = m;
            m.delimiter && (this.delimiter = m.delimiter);
            m.maxListeners && (this._events.maxListeners = m.maxListeners);
            m.wildcard && (this.wildcard = m.wildcard);
            m.newListener && (this.newListener = m.newListener);
            if (this.wildcard) {
                this.listenerTree = {}
            }
        }
    }
    function k(m) {
        this._events = {};
        this.newListener = false;
        a.call(this, m)
    }
    function c(n, v, B, p) {
        if (!B) {
            return []
        }
        var x = [], s, r, z, A, u, t, o, m = v.length, q = v[p], y = v[p + 1];
        if (p === m && B._listeners) {
            if (typeof B._listeners === "function") {
                n && n.push(B._listeners);
                return [B]
            } else {
                for (s = 0, r = B._listeners.length; s < r; s++) {
                    n && n.push(B._listeners[s])
                }
                return [B]
            }
        }
        if ((q === "*" || q === "**") || B[q]) {
            if (q === "*") {
                for (z in B) {
                    if (z !== "_listeners" && B.hasOwnProperty(z)) {
                        x = x.concat(c(n, v, B[z], p + 1))
                    }
                }
                return x
            } else {
                if (q === "**") {
                    o = (p + 1 === m || (p + 2 === m && y === "*"));
                    if (o && B._listeners) {
                        x = x.concat(c(n, v, B, m))
                    }
                    for (z in B) {
                        if (z !== "_listeners" && B.hasOwnProperty(z)) {
                            if (z === "*" || z === "**") {
                                if (B[z]._listeners&&!o) {
                                    x = x.concat(c(n, v, B[z], m))
                                }
                                x = x.concat(c(n, v, B[z], p))
                            } else {
                                if (z === y) {
                                    x = x.concat(c(n, v, B[z], p + 2))
                                } else {
                                    x = x.concat(c(n, v, B[z], p))
                                }
                            }
                        }
                    }
                    return x
                }
            }
            x = x.concat(c(n, v, B[q], p + 1))
        }
        A = B["*"];
        if (A) {
            c(n, v, A, p + 1)
        }
        u = B["**"];
        if (u) {
            if (p < m) {
                if (u._listeners) {
                    c(n, v, u, m)
                }
                for (z in u) {
                    if (z !== "_listeners" && u.hasOwnProperty(z)) {
                        if (z === y) {
                            c(n, v, u[z], p + 2)
                        } else {
                            if (z === q) {
                                c(n, v, u[z], p + 1)
                            } else {
                                t = {};
                                t[z] = u[z];
                                c(n, v, {
                                    "**": t
                                }, p + 1)
                            }
                        }
                    }
                }
            } else {
                if (u._listeners) {
                    c(n, v, u, m)
                } else {
                    if (u["*"] && u["*"]._listeners) {
                        c(n, v, u["*"], m)
                    }
                }
            }
        }
        return x
    }
    function g(s, t) {
        s = typeof s === "string" ? s.split(this.delimiter) : s.slice();
        for (var r = 0, p = s.length; r + 1 < p; r++) {
            if (s[r] === "**" && s[r + 1] === "**") {
                return 
            }
        }
        var o = this.listenerTree;
        var q = s.shift();
        while (q) {
            if (!o[q]) {
                o[q] = {}
            }
            o = o[q];
            if (s.length === 0) {
                if (!o._listeners) {
                    o._listeners = t
                } else {
                    if (typeof o._listeners === "function") {
                        o._listeners = [o._listeners, t]
                    } else {
                        if (e(o._listeners)) {
                            o._listeners.push(t);
                            if (!o._listeners.warned) {
                                var n = f;
                                if (typeof this._events.maxListeners !== "undefined") {
                                    n = this._events.maxListeners
                                }
                                if (n > 0 && o._listeners.length > n) {
                                    o._listeners.warned = true
                                }
                            }
                        }
                    }
                }
                return true
            }
            q = s.shift()
        }
        return true
    }
    k.prototype.delimiter = ".";
    k.prototype.setMaxListeners = function(m) {
        this._events || j.call(this);
        this._events.maxListeners = m;
        if (!this._conf) {
            this._conf = {}
        }
        this._conf.maxListeners = m
    };
    k.prototype.event = "";
    k.prototype.once = function(n, m) {
        this.many(n, 1, m);
        return this
    };
    k.prototype.many = function(p, m, o) {
        var n = this;
        if (typeof o !== "function") {
            throw new Error("many only accepts instances of Function")
        }
        function q() {
            if (--m === 0) {
                n.off(p, q)
            }
            o.apply(this, arguments)
        }
        q._origin = o;
        this.on(p, q);
        return n
    };
    k.prototype.emit = function() {
        this._events || j.call(this);
        var s = arguments[0];
        if (s === "newListener"&&!this.newListener) {
            if (!this._events.newListener) {
                return false
            }
        }
        if (this._all) {
            var m = arguments.length;
            var n = new Array(m - 1);
            for (var o = 1; o < m; o++) {
                n[o - 1] = arguments[o]
            }
            for (o = 0, m = this._all.length; o < m; o++) {
                this.event = s;
                this._all[o].apply(this, n)
            }
        }
        if (s === "error") {
            if (!this._all&&!this._events.error&&!(this.wildcard && this.listenerTree.error)) {
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        var r;
        if (this.wildcard) {
            r = [];
            var q = typeof s === "string" ? s.split(this.delimiter): s.slice();
            c.call(this, r, q, this.listenerTree, 0)
        } else {
            r = this._events[s]
        }
        if (typeof r === "function") {
            this.event = s;
            if (arguments.length === 1) {
                r.call(this)
            } else {
                if (arguments.length > 1) {
                    switch (arguments.length) {
                    case 2:
                        r.call(this, arguments[1]);
                        break;
                    case 3:
                        r.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        var m = arguments.length;
                        var n = new Array(m - 1);
                        for (var o = 1; o < m; o++) {
                            n[o - 1] = arguments[o]
                        }
                        r.apply(this, n)
                    }
                }
            }
            return true
        } else {
            if (r) {
                var m = arguments.length;
                var n = new Array(m - 1);
                for (var o = 1; o < m; o++) {
                    n[o - 1] = arguments[o]
                }
                var p = r.slice();
                for (var o = 0, m = p.length; o < m; o++) {
                    this.event = s;
                    p[o].apply(this, n)
                }
                return (p.length > 0)||!!this._all
            } else {
                return !!this._all
            }
        }
    };
    k.prototype.on = function(o, p) {
        if (typeof o === "function") {
            this.onAny(o);
            return this
        }
        if (typeof p !== "function") {
            throw new Error("on only accepts instances of Function")
        }
        this._events || j.call(this);
        this.emit("newListener", o, p);
        if (this.wildcard) {
            g.call(this, o, p);
            return this
        }
        if (!this._events[o]) {
            this._events[o] = p
        } else {
            if (typeof this._events[o] === "function") {
                this._events[o] = [this._events[o], p]
            } else {
                if (e(this._events[o])) {
                    this._events[o].push(p);
                    if (!this._events[o].warned) {
                        var n = f;
                        if (typeof this._events.maxListeners !== "undefined") {
                            n = this._events.maxListeners
                        }
                        if (n > 0 && this._events[o].length > n) {
                            this._events[o].warned = true
                        }
                    }
                }
            }
        }
        return this
    };
    k.prototype.onAny = function(m) {
        if (typeof m !== "function") {
            throw new Error("onAny only accepts instances of Function")
        }
        if (!this._all) {
            this._all = []
        }
        this._all.push(m);
        return this
    };
    k.prototype.addListener = k.prototype.on;
    k.prototype.off = function(s, n) {
        if (typeof n !== "function") {
            throw new Error("removeListener only takes instances of Function")
        }
        var o, v = [];
        if (this.wildcard) {
            var t = typeof s === "string" ? s.split(this.delimiter): s.slice();
            v = c.call(this, null, t, this.listenerTree, 0)
        } else {
            if (!this._events[s]) {
                return this
            }
            o = this._events[s];
            v.push({
                _listeners: o
            })
        }
        for (var u = 0; u < v.length; u++) {
            var r = v[u];
            o = r._listeners;
            if (e(o)) {
                var q =- 1;
                for (var p = 0, m = o.length; p < m; p++) {
                    if (o[p] === n || (o[p].listener && o[p].listener === n) || (o[p]._origin && o[p]._origin === n)) {
                        q = p;
                        break
                    }
                }
                if (q < 0) {
                    continue
                }
                if (this.wildcard) {
                    r._listeners.splice(q, 1)
                } else {
                    this._events[s].splice(q, 1)
                }
                if (o.length === 0) {
                    if (this.wildcard) {
                        delete r._listeners
                    } else {
                        delete this._events[s]
                    }
                }
                return this
            } else {
                if (o === n || (o.listener && o.listener === n) || (o._origin && o._origin === n)) {
                    if (this.wildcard) {
                        delete r._listeners
                    } else {
                        delete this._events[s]
                    }
                }
            }
        }
        return this
    };
    k.prototype.offAny = function(p) {
        var o = 0, m = 0, n;
        if (p && this._all && this._all.length > 0) {
            n = this._all;
            for (o = 0, m = n.length; o < m; o++) {
                if (p === n[o]) {
                    n.splice(o, 1);
                    return this
                }
            }
        } else {
            this._all = []
        }
        return this
    };
    k.prototype.removeListener = k.prototype.off;
    k.prototype.removeAllListeners = function(q) {
        if (arguments.length === 0) {
            !this._events || j.call(this);
            return this
        }
        if (this.wildcard) {
            var p = typeof q === "string" ? q.split(this.delimiter): q.slice();
            var o = c.call(this, null, p, this.listenerTree, 0);
            for (var n = 0; n < o.length; n++) {
                var m = o[n];
                m._listeners = null
            }
        } else {
            if (!this._events[q]) {
                return this
            }
            this._events[q] = null
        }
        return this
    };
    k.prototype.listeners = function(o) {
        if (this.wildcard) {
            var m = [];
            var n = typeof o === "string" ? o.split(this.delimiter): o.slice();
            c.call(this, m, n, this.listenerTree, 0);
            return m
        }
        this._events || j.call(this);
        if (!this._events[o]) {
            this._events[o] = []
        }
        if (!e(this._events[o])) {
            this._events[o] = [this._events[o]]
        }
        return this._events[o]
    };
    k.prototype.listenersAny = function() {
        if (this._all) {
            return this._all
        } else {
            return []
        }
    };
    if (typeof define === "function" && define.amd) {
        define(function() {
            return k
        })
    } else {
        if (typeof exports === "object") {
            exports.EventEmitter2 = k
        } else {
            window.EventEmitter2 = k
        }
    }
}();
decodeURIComponentSafe = function(a) {
    try {
        a = decodeURIComponent(a)
    } catch (b) {}
    return a
};
(function(c) {
    var b = c.scrollTo = function(f, e, g) {
        c(window).scrollTo(f, e, g)
    };
    b.defaults = {
        axis: "xy",
        duration: parseFloat(c.fn.jquery) >= 1.3 ? 0: 1,
        limit: true
    };
    b.window = function(e) {
        return c(window)._scrollable()
    };
    c.fn._scrollable = function() {
        return this.map(function() {
            var f = this, g=!f.nodeName || c.inArray(f.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])!=-1;
            if (!g) {
                return f
            }
            var e = (f.contentWindow || f).document || f.ownerDocument || f;
            return /webkit/i.test(navigator.userAgent) || e.compatMode == "BackCompat" ? e.body : e.documentElement
        })
    };
    c.fn.scrollTo = function(k, j, h) {
        if (typeof j == "object") {
            h = j;
            j = 0
        }
        if (typeof h == "function") {
            h = {
                onAfter: h
            }
        }
        if (k == "max") {
            k = 9000000000
        }
        h = c.extend({}, b.defaults, h);
        j = j || h.duration;
        h.queue = h.queue && h.axis.length > 1;
        if (h.queue) {
            j/=2
        }
        h.offset = a(h.offset);
        h.over = a(h.over);
        return this._scrollable().each(function() {
            if (k == null) {
                return 
            }
            var p = this, m = c(p), n = k, g, e = {}, o = m.is("html,body");
            switch (typeof n) {
            case"number":
            case"string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                    n = a(n);
                    break
                }
                n = c(n, this);
                if (!n.length) {
                    return 
                }
            case"object":
                if (n.is || n.style) {
                    g = (n = c(n)).offset()
                }
            }
            c.each(h.axis.split(""), function(v, t) {
                var r = t == "x" ? "Left": "Top", y = r.toLowerCase(), u = "scroll" + r, s = p[u], q = b.max(p, t);
                if (g) {
                    e[u] = g[y] + (o ? 0 : s - m.offset()[y]);
                    if (h.margin) {
                        e[u] -= parseInt(n.css("margin" + r)) || 0;
                        e[u] -= parseInt(n.css("border" + r + "Width")) || 0
                    }
                    e[u] += h.offset[y] || 0;
                    if (h.over[y]) {
                        e[u] += n[t == "x" ? "width": "height"]() * h.over[y]
                    }
                } else {
                    var x = n[y];
                    e[u] = x.slice && x.slice( - 1) == "%" ? parseFloat(x) / 100 * q : x
                }
                if (h.limit && /^\d+$/.test(e[u])) {
                    e[u] = e[u] <= 0 ? 0 : Math.min(e[u], q)
                }
                if (!v && h.queue) {
                    if (s != e[u]) {
                        f(h.onAfterFirst)
                    }
                    delete e[u]
                }
            });
            f(h.onAfter);
            function f(q) {
                m.animate(e, j, h.easing, q && function() {
                    q.call(this, k, h)
                })
            }
        }).end()
    };
    b.max = function(h, g) {
        var m = g == "x" ? "Width": "Height", f = "scroll" + m;
        if (!c(h).is("html,body")) {
            return h[f] - c(h)[m.toLowerCase()]()
        }
        var k = "client" + m, j = h.ownerDocument.documentElement, e = h.ownerDocument.body;
        return Math.max(j[f], e[f]) - Math.min(j[k], e[k])
    };
    function a(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
})(jQuery);
!(function(h) {
    var b = 1000, c = 60 * b, e = 60 * c, f = 24 * e, a = 7 * f, j = f * 365, g = j / 12;
    var k = [[0.7 * c, "just now"], [1.5 * c, "1 min ago"], [60 * c, "min ago", c], [1.5 * e, "an hr ago"], [f, "hrs ago", e], [1.5 * f, "1 day ago"], [14 * f, "days ago", f], [g, "weeks ago", a], [1.5 * g, "a month ago"], [j, "months ago", g], [1.5 * j, "a year ago"], [Number.MAX_VALUE, "years ago", j]];
    h.relativeDate = function(o, n) {
        !n && (n = (new Date).getTime());
        n instanceof Date && (n = n.getTime());
        o instanceof Date && (o = o.getTime());
        var r = n - o, q, p, m;
        for (p =- 1, m = k.length; ++p < m;) {
            q = k[p];
            if (r < q[0]) {
                return q[2] == undefined ? q[1] : Math.round(r / q[2]) + " " + q[1]
            }
        }
    }
})(window);
(function(a) {
    var c = "…";
    function e(k, j) {
        var g = 0;
        var m = k - 1;
        var n =- 1;
        var h;
        while (g <= m) {
            h=~~((g + m) / 2);
            var f = j(h);
            if (f < 0) {
                m = h - 1
            } else {
                if (f > 0) {
                    g = h + 1
                } else {
                    g = h + 1
                }
            }
            n = h
        }
        return n
    }
    var b = {};
    a.fn.ellipsis = function(k) {
        k = k || {};
        var o = false, j = 120;
        for (var p = 0; p < this.length; p++) {
            var m = a(this[p]), t, u, f = k.id && b[k.id + p];
            if (f) {
                t = f.content;
                u = f.maxHeight
            } else {
                t = m.html();
                if (k.firstParagraph) {
                    var s = m.find("p");
                    if (s.length && s.first().text().length > j) {
                        u = a(s[0]).outerHeight()
                    }
                }
                u = u || Math.ceil(parseFloat(m.css("max-height")));
                var v = m.prop("scrollHeight");
                if (v <= u) {
                    continue
                }
            }
            var h = a(this[p].cloneNode(true)).hide().css("position", "absolute").css("overflow", "visible").css("max-height", "none").css("width", m.width()).height("auto");
            h.html(t);
            m.after(h);
            if (h.height() > u) {
                var g = t, q = function(x) {
                    var y = g.substr(0, x);
                    h.html(y + c)
                }, n = function(y) {
                    q(y);
                    var x = h.height();
                    if (x > u) {
                        return - 1
                    } else {
                        if (x < u) {
                            return 1
                        } else {
                            return 0
                        }
                    }
                }, r = e(t.length - 1, n);
                m.html(g.substr(0, r - 2) + c);
                o = true
            } else {
                if (f) {
                    m.html(t)
                }
            }
            h.remove();
            if (k.id) {
                b[k.id + p] = {
                    content: t,
                    maxHeight: u
                }
            }
        }
        return o
    }
}(jQuery));
!(function() {
    var v = /^[\s,#]+/, q = /\s+$/, r = 0, a = Math, D = a.round, j = a.min, n = a.max, m = a.random;
    var B = function B(I, K) {
        I = (I) ? I : "";
        K = K || {};
        if (I instanceof B) {
            return I
        }
        if (!(this instanceof B)) {
            return new B(I, K)
        }
        var J = s(I);
        this._r = J.r, this._g = J.g, this._b = J.b, this._a = J.a, this._roundA = D(100 * this._a) / 100, this._format = K.format || J.format;
        this._gradientType = K.gradientType;
        if (this._r < 1) {
            this._r = D(this._r)
        }
        if (this._g < 1) {
            this._g = D(this._g)
        }
        if (this._b < 1) {
            this._b = D(this._b)
        }
        this._ok = J.ok;
        this._tc_id = r++
    };
    B.prototype = {
        isValid: function() {
            return this._ok
        },
        getAlpha: function() {
            return this._a
        },
        setAlpha: function(I) {
            this._a = t(I);
            this._roundA = D(100 * this._a) / 100
        },
        toHsv: function() {
            var I = u(this._r, this._g, this._b);
            return {
                h: I.h * 360,
                s: I.s,
                v: I.v,
                a: this._a
            }
        },
        toHsvString: function() {
            var J = u(this._r, this._g, this._b);
            var M = D(J.h * 360), K = D(J.s * 100), I = D(J.v * 100);
            return (this._a == 1) ? "hsv(" + M + ", " + K + "%, " + I + "%)" : "hsva(" + M + ", " + K + "%, " + I + "%, " + this._roundA + ")"
        },
        toHsl: function() {
            var I = E(this._r, this._g, this._b);
            return {
                h: I.h * 360,
                s: I.s,
                l: I.l,
                a: this._a
            }
        },
        toHslString: function() {
            var J = E(this._r, this._g, this._b);
            var M = D(J.h * 360), K = D(J.s * 100), I = D(J.l * 100);
            return (this._a == 1) ? "hsl(" + M + ", " + K + "%, " + I + "%)" : "hsla(" + M + ", " + K + "%, " + I + "%, " + this._roundA + ")"
        },
        toHex: function(I) {
            return C(this._r, this._g, this._b, I)
        },
        toHexString: function(I) {
            return "#" + this.toHex(I)
        },
        toHex8: function() {
            return f(this._r, this._g, this._b, this._a)
        },
        toHex8String: function() {
            return "#" + this.toHex8()
        },
        toRgb: function() {
            return {
                r: D(this._r),
                g: D(this._g),
                b: D(this._b),
                a: this._a
            }
        },
        toRgbString: function() {
            return (this._a == 1) ? "rgb(" + D(this._r) + ", " + D(this._g) + ", " + D(this._b) + ")" : "rgba(" + D(this._r) + ", " + D(this._g) + ", " + D(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
            return {
                r: D(G(this._r, 255) * 100) + "%",
                g: D(G(this._g, 255) * 100) + "%",
                b: D(G(this._b, 255) * 100) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function() {
            return (this._a == 1) ? "rgb(" + D(G(this._r, 255) * 100) + "%, " + D(G(this._g, 255) * 100) + "%, " + D(G(this._b, 255) * 100) + "%)" : "rgba(" + D(G(this._r, 255) * 100) + "%, " + D(G(this._g, 255) * 100) + "%, " + D(G(this._b, 255) * 100) + "%, " + this._roundA + ")"
        },
        toFilter: function(M) {
            var N = "#" + f(this._r, this._g, this._b, this._a);
            var J = N;
            var I = this._gradientType ? "GradientType = 1, ": "";
            if (M) {
                var K = B(M);
                J = K.toHex8String()
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + I + "startColorstr=" + N + ",endColorstr=" + J + ")"
        },
        toString: function(N) {
            var J=!!N;
            N = N || this._format;
            var M = false;
            var I=!J && this._a < 1 && this._a > 0;
            var K = I && (N === "hex" || N === "hex6" || N === "hex3" || N === "name");
            if (K) {
                return this.toRgbString()
            }
            if (N === "rgb") {
                M = this.toRgbString()
            }
            if (N === "prgb") {
                M = this.toPercentageRgbString()
            }
            if (N === "hex" || N === "hex6") {
                M = this.toHexString()
            }
            if (N === "hex3") {
                M = this.toHexString(true)
            }
            if (N === "hex8") {
                M = this.toHex8String()
            }
            if (N === "hsl") {
                M = this.toHslString()
            }
            if (N === "hsv") {
                M = this.toHsvString()
            }
            return M || this.toHexString()
        }
    };
    B.fromRatio = function(I, M) {
        if (typeof I == "object") {
            var J = {};
            for (var K in I) {
                if (I.hasOwnProperty(K)) {
                    if (K === "a") {
                        J[K] = I[K]
                    } else {
                        J[K] = h(I[K])
                    }
                }
            }
            I = J
        }
        return B(I, M)
    };
    function s(J) {
        var K = {
            r: 0,
            g: 0,
            b: 0
        };
        var I = 1;
        var M = false;
        var N = false;
        if (typeof J == "string") {
            J = k(J)
        }
        if (typeof J == "object") {
            if (J.hasOwnProperty("r") && J.hasOwnProperty("g") && J.hasOwnProperty("b")) {
                K = o(J.r, J.g, J.b);
                M = true;
                N = String(J.r).substr( - 1) === "%" ? "prgb" : "rgb"
            } else {
                if (J.hasOwnProperty("h") && J.hasOwnProperty("s") && J.hasOwnProperty("v")) {
                    J.s = h(J.s);
                    J.v = h(J.v);
                    K = z(J.h, J.s, J.v);
                    M = true;
                    N = "hsv"
                } else {
                    if (J.hasOwnProperty("h") && J.hasOwnProperty("s") && J.hasOwnProperty("l")) {
                        J.s = h(J.s);
                        J.l = h(J.l);
                        K = p(J.h, J.s, J.l);
                        M = true;
                        N = "hsl"
                    }
                }
            }
            if (J.hasOwnProperty("a")) {
                I = J.a
            }
        }
        I = t(I);
        return {
            ok: M,
            format: J.format || N,
            r: j(255, n(K.r, 0)),
            g: j(255, n(K.g, 0)),
            b: j(255, n(K.b, 0)),
            a: I
        }
    }
    function o(K, J, I) {
        return {
            r: G(K, 255) * 255,
            g: G(J, 255) * 255,
            b: G(I, 255) * 255
        }
    }
    function E(I, N, P) {
        I = G(I, 255);
        N = G(N, 255);
        P = G(P, 255);
        var Q = n(I, N, P), K = j(I, N, P);
        var M, R, J = (Q + K) / 2;
        if (Q == K) {
            M = R = 0
        } else {
            var O = Q - K;
            R = J > 0.5 ? O / (2 - Q - K) : O / (Q + K);
            switch (Q) {
            case I:
                M = (N - P) / O + (N < P ? 6 : 0);
                break;
            case N:
                M = (P - I) / O + 2;
                break;
            case P:
                M = (I - N) / O + 4;
                break
            }
            M/=6
        }
        return {
            h: M,
            s: R,
            l: J
        }
    }
    function p(O, R, N) {
        var I, P, Q;
        O = G(O, 360);
        R = G(R, 100);
        N = G(N, 100);
        function M(U, T, S) {
            if (S < 0) {
                S += 1
            }
            if (S > 1) {
                S -= 1
            }
            if (S < 1 / 6) {
                return U + (T - U) * 6 * S
            }
            if (S < 1 / 2) {
                return T
            }
            if (S < 2 / 3) {
                return U + (T - U) * (2 / 3 - S) * 6
            }
            return U
        }
        if (R === 0) {
            I = P = Q = N
        } else {
            var J = N < 0.5 ? N * (1 + R): N + R - N * R;
            var K = 2 * N - J;
            I = M(K, J, O + 1 / 3);
            P = M(K, J, O);
            Q = M(K, J, O - 1 / 3)
        }
        return {
            r: I * 255,
            g: P * 255,
            b: Q * 255
        }
    }
    function u(I, M, O) {
        I = G(I, 255);
        M = G(M, 255);
        O = G(O, 255);
        var P = n(I, M, O), J = j(I, M, O);
        var K, R, Q = P;
        var N = P - J;
        R = P === 0 ? 0 : N / P;
        if (P == J) {
            K = 0
        } else {
            switch (P) {
            case I:
                K = (M - O) / N + (M < O ? 6 : 0);
                break;
            case M:
                K = (O - I) / N + 2;
                break;
            case O:
                K = (I - M) / N + 4;
                break
            }
            K/=6
        }
        return {
            h: K,
            s: R,
            v: Q
        }
    }
    function z(N, U, S) {
        N = G(N, 360) * 6;
        U = G(U, 100);
        S = G(S, 100);
        var M = a.floor(N), P = N - M, K = S * (1 - U), J = S * (1 - P * U), T = S * (1 - (1 - P) * U), R = M%6, I = [S, J, K, K, T, S][R], O = [T, S, S, J, K, K][R], Q = [K, K, T, S, S, J][R];
        return {
            r: I * 255,
            g: O * 255,
            b: Q * 255
        }
    }
    function C(M, K, I, N) {
        var J = [g(D(M).toString(16)), g(D(K).toString(16)), g(D(I).toString(16))];
        if (N && J[0].charAt(0) == J[0].charAt(1) && J[1].charAt(0) == J[1].charAt(1) && J[2].charAt(0) == J[2].charAt(1)) {
            return J[0].charAt(0) + J[1].charAt(0) + J[2].charAt(0)
        }
        return J.join("")
    }
    function f(N, M, I, J) {
        var K = [g(F(J)), g(D(N).toString(16)), g(D(M).toString(16)), g(D(I).toString(16))];
        return K.join("")
    }
    B.equals = function(J, I) {
        if (!J ||!I) {
            return false
        }
        return B(J).toRgbString() == B(I).toRgbString()
    };
    B.random = function() {
        return B.fromRatio({
            r: m(),
            g: m(),
            b: m()
        })
    };
    B.desaturate = function(J, K) {
        K = (K === 0) ? 0 : (K || 10);
        var I = B(J).toHsl();
        I.s -= K / 100;
        I.s = y(I.s);
        return B(I)
    };
    B.saturate = function(J, K) {
        K = (K === 0) ? 0 : (K || 10);
        var I = B(J).toHsl();
        I.s += K / 100;
        I.s = y(I.s);
        return B(I)
    };
    B.greyscale = function(I) {
        return B.desaturate(I, 100)
    };
    B.lighten = function(J, K) {
        K = (K === 0) ? 0 : (K || 10);
        var I = B(J).toHsl();
        I.l += K / 100;
        I.l = y(I.l);
        return B(I)
    };
    B.darken = function(J, K) {
        K = (K === 0) ? 0 : (K || 10);
        var I = B(J).toHsl();
        I.l -= K / 100;
        I.l = y(I.l);
        return B(I)
    };
    B.complement = function(J) {
        var I = B(J).toHsl();
        I.h = (I.h + 180)%360;
        return B(I)
    };
    B.triad = function(J) {
        var I = B(J).toHsl();
        var K = I.h;
        return [B(J), B({
            h: (K + 120)%360,
            s: I.s,
            l: I.l
        }), B({
            h: (K + 240)%360,
            s: I.s,
            l: I.l
        })]
    };
    B.tetrad = function(J) {
        var I = B(J).toHsl();
        var K = I.h;
        return [B(J), B({
            h: (K + 90)%360,
            s: I.s,
            l: I.l
        }), B({
            h: (K + 180)%360,
            s: I.s,
            l: I.l
        }), B({
            h: (K + 270)%360,
            s: I.s,
            l: I.l
        })]
    };
    B.splitcomplement = function(J) {
        var I = B(J).toHsl();
        var K = I.h;
        return [B(J), B({
            h: (K + 72)%360,
            s: I.s,
            l: I.l
        }), B({
            h: (K + 216)%360,
            s: I.s,
            l: I.l
        })]
    };
    B.analogous = function(J, N, O) {
        N = N || 6;
        O = O || 30;
        var I = B(J).toHsl();
        var M = 360 / O;
        var K = [B(J)];
        for (I.h = ((I.h - (M * N>>1)) + 720)%360; --N;) {
            I.h = (I.h + M)%360;
            K.push(B(I))
        }
        return K
    };
    B.monochromatic = function(K, O) {
        O = O || 6;
        var N = B(K).toHsv();
        var Q = N.h, P = N.s, J = N.v;
        var M = [];
        var I = 1 / O;
        while (O--) {
            M.push(B({
                h: Q,
                s: P,
                v: J
            }));
            J = (J + I)%1
        }
        return M
    };
    B.readability = function(N, K) {
        var M = B(N).toRgb();
        var J = B(K).toRgb();
        var I = (M.r * 299 + M.g * 587 + M.b * 114) / 1000;
        var P = (J.r * 299 + J.g * 587 + J.b * 114) / 1000;
        var O = (Math.max(M.r, J.r) - Math.min(M.r, J.r) + Math.max(M.g, J.g) - Math.min(M.g, J.g) + Math.max(M.b, J.b) - Math.min(M.b, J.b));
        return {
            brightness: Math.abs(I - P),
            color: O
        }
    };
    B.readable = function(J, I) {
        var K = B.readability(J, I);
        return K.brightness > 125 && K.color > 500
    };
    B.mostReadable = function(Q, P) {
        var M = null;
        var J = 0;
        var R = false;
        for (var O = 0; O < P.length; O++) {
            var K = B.readability(Q, P[O]);
            var N = K.brightness > 125 && K.color > 500;
            var I = 3 * (K.brightness / 125) + (K.color / 500);
            if ((N&&!R) || (N && R && I > J) || ((!N) && (!R) && I > J)) {
                R = N;
                J = I;
                M = B(P[O])
            }
        }
        return M
    };
    function e(K) {
        var J = {};
        for (var I in K) {
            if (K.hasOwnProperty(I)) {
                J[K[I]] = I
            }
        }
        return J
    }
    function t(I) {
        I = parseFloat(I);
        if (isNaN(I) || I < 0 || I > 1) {
            I = 1
        }
        return I
    }
    function G(K, I) {
        if (x(K)) {
            K = "100%"
        }
        var J = H(K);
        K = j(I, n(0, parseFloat(K)));
        if (J) {
            K = parseInt(K * I, 10) / 100
        }
        if ((a.abs(K - I) < 0.000001)) {
            return 1
        }
        return (K%I) / parseFloat(I)
    }
    function y(I) {
        return j(1, n(0, I))
    }
    function c(I) {
        return parseInt(I, 16)
    }
    function x(I) {
        return typeof I == "string" && I.indexOf(".")!=-1 && parseFloat(I) === 1
    }
    function H(I) {
        return typeof I === "string" && I.indexOf("%")!=-1
    }
    function g(I) {
        return I.length == 1 ? "0" + I : "" + I
    }
    function h(I) {
        if (I <= 1) {
            I = (I * 100) + "%"
        }
        return I
    }
    function F(I) {
        return Math.round(parseFloat(I) * 255).toString(16)
    }
    function A(I) {
        return (c(I) / 255)
    }
    var b = (function() {
        var N = "[-\\+]?\\d+%?";
        var M = "[-\\+]?\\d*\\.\\d+%?";
        var I = "(?:" + M + ")|(?:" + N + ")";
        var K = "[\\s|\\(]+(" + I + ")[,|\\s]+(" + I + ")[,|\\s]+(" + I + ")\\s*\\)?";
        var J = "[\\s|\\(]+(" + I + ")[,|\\s]+(" + I + ")[,|\\s]+(" + I + ")[,|\\s]+(" + I + ")\\s*\\)?";
        return {
            rgb: new RegExp("rgb" + K),
            rgba: new RegExp("rgba" + J),
            hsl: new RegExp("hsl" + K),
            hsla: new RegExp("hsla" + J),
            hsv: new RegExp("hsv" + K),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        }
    })();
    function k(I) {
        I = I.replace(v, "").replace(q, "").toLowerCase();
        if (I == "transparent") {
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: "name"
            }
        }
        var J;
        if ((J = b.rgb.exec(I))) {
            return {
                r: J[1],
                g: J[2],
                b: J[3]
            }
        }
        if ((J = b.rgba.exec(I))) {
            return {
                r: J[1],
                g: J[2],
                b: J[3],
                a: J[4]
            }
        }
        if ((J = b.hsl.exec(I))) {
            return {
                h: J[1],
                s: J[2],
                l: J[3]
            }
        }
        if ((J = b.hsla.exec(I))) {
            return {
                h: J[1],
                s: J[2],
                l: J[3],
                a: J[4]
            }
        }
        if ((J = b.hsv.exec(I))) {
            return {
                h: J[1],
                s: J[2],
                v: J[3]
            }
        }
        if ((J = b.hex8.exec(I))) {
            return {
                a: A(J[1]),
                r: c(J[2]),
                g: c(J[3]),
                b: c(J[4]),
                format: "hex8"
            }
        }
        if ((J = b.hex6.exec(I))) {
            return {
                r: c(J[1]),
                g: c(J[2]),
                b: c(J[3]),
                format: "hex"
            }
        }
        if ((J = b.hex3.exec(I))) {
            return {
                r: c(J[1] + "" + J[1]),
                g: c(J[2] + "" + J[2]),
                b: c(J[3] + "" + J[3]),
                format: "hex"
            }
        }
        return false
    }
    window.tinycolor = B
})();
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
;
var Handlebars = (function() {
    var g = (function() {
        var h;
        function j(k) {
            this.string = k
        }
        j.prototype.toString = function() {
            return "" + this.string
        };
        h = j;
        return h
    })();
    var c = (function(s) {
        var t = {};
        var m = s;
        var u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };
        var h = /[&<>"'`]/g;
        var n = /[&<>"'`]/;
        function v(x) {
            return u[x] || "&amp;"
        }
        function r(z, y) {
            for (var x in y) {
                if (Object.prototype.hasOwnProperty.call(y, x)) {
                    z[x] = y[x]
                }
            }
        }
        t.extend = r;
        var k = Object.prototype.toString;
        t.toString = k;
        var j = function(x) {
            return typeof x === "function"
        };
        if (j(/x/)) {
            j = function(x) {
                return typeof x === "function" && k.call(x) === "[object Function]"
            }
        }
        var j;
        t.isFunction = j;
        var q = Array.isArray || function(x) {
            return (x && typeof x === "object") ? k.call(x) === "[object Array]" : false
        };
        t.isArray = q;
        function p(x) {
            if (x instanceof m) {
                return x.toString()
            } else {
                if (!x && x !== 0) {
                    return ""
                }
            }
            x = "" + x;
            if (!n.test(x)) {
                return x
            }
            return x.replace(h, v)
        }
        t.escapeExpression = p;
        function o(x) {
            if (!x && x !== 0) {
                return true
            } else {
                if (q(x) && x.length === 0) {
                    return true
                } else {
                    return false
                }
            }
        }
        t.isEmpty = o;
        return t
    })(g);
    var e = (function() {
        var j;
        var k = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        function h(q, p) {
            var n;
            if (p && p.firstLine) {
                n = p.firstLine;
                q += " - " + n + ":" + p.firstColumn
            }
            var o = Error.prototype.constructor.call(this, q);
            for (var m = 0; m < k.length; m++) {
                this[k[m]] = o[k[m]]
            }
            if (n) {
                this.lineNumber = n;
                this.column = p.firstColumn
            }
        }
        h.prototype = new Error();
        j = h;
        return j
    })();
    var f = (function(u, y) {
        var x = {};
        var s = u;
        var q = y;
        var A = "1.3.0";
        x.VERSION = A;
        var j = 4;
        x.COMPILER_REVISION = j;
        var n = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: ">= 1.0.0"
        };
        x.REVISION_CHANGES = n;
        var r = s.isArray, m = s.isFunction, k = s.toString, h = "[object Object]";
        function p(C, B) {
            this.helpers = C || {};
            this.partials = B || {};
            t(this)
        }
        x.HandlebarsEnvironment = p;
        p.prototype = {
            constructor: p,
            logger: v,
            log: o,
            registerHelper: function(C, D, B) {
                if (k.call(C) === h) {
                    if (B || D) {
                        throw new q("Arg not supported with multiple helpers")
                    }
                    s.extend(this.helpers, C)
                } else {
                    if (B) {
                        D.not = B
                    }
                    this.helpers[C] = D
                }
            },
            registerPartial: function(B, C) {
                if (k.call(B) === h) {
                    s.extend(this.partials, B)
                } else {
                    this.partials[B] = C
                }
            }
        };
        function t(B) {
            B.registerHelper("helperMissing", function(C) {
                if (arguments.length === 2) {
                    return undefined
                } else {
                    throw new q("Missing helper: '" + C + "'")
                }
            });
            B.registerHelper("blockHelperMissing", function(E, D) {
                var C = D.inverse || function() {}, F = D.fn;
                if (m(E)) {
                    E = E.call(this)
                }
                if (E === true) {
                    return F(this)
                } else {
                    if (E === false || E == null) {
                        return C(this)
                    } else {
                        if (r(E)) {
                            if (E.length > 0) {
                                return B.helpers.each(E, D)
                            } else {
                                return C(this)
                            }
                        } else {
                            return F(E)
                        }
                    }
                }
            });
            B.registerHelper("each", function(C, K) {
                var I = K.fn, E = K.inverse;
                var G = 0, H = "", F;
                if (m(C)) {
                    C = C.call(this)
                }
                if (K.data) {
                    F = z(K.data)
                }
                if (C && typeof C === "object") {
                    if (r(C)) {
                        for (var D = C.length; G < D; G++) {
                            if (F) {
                                F.index = G;
                                F.first = (G === 0);
                                F.last = (G === (C.length - 1))
                            }
                            H = H + I(C[G], {
                                data: F
                            })
                        }
                    } else {
                        for (var J in C) {
                            if (C.hasOwnProperty(J)) {
                                if (F) {
                                    F.key = J;
                                    F.index = G;
                                    F.first = (G === 0)
                                }
                                H = H + I(C[J], {
                                    data: F
                                });
                                G++
                            }
                        }
                    }
                }
                if (G === 0) {
                    H = E(this)
                }
                return H
            });
            B.registerHelper("if", function(D, C) {
                if (m(D)) {
                    D = D.call(this)
                }
                if ((!C.hash.includeZero&&!D) || s.isEmpty(D)) {
                    return C.inverse(this)
                } else {
                    return C.fn(this)
                }
            });
            B.registerHelper("unless", function(D, C) {
                return B.helpers["if"].call(this, D, {
                    fn: C.inverse,
                    inverse: C.fn,
                    hash: C.hash
                })
            });
            B.registerHelper("with", function(D, C) {
                if (m(D)) {
                    D = D.call(this)
                }
                if (!s.isEmpty(D)) {
                    return C.fn(D)
                }
            });
            B.registerHelper("log", function(D, C) {
                var E = C.data && C.data.level != null ? parseInt(C.data.level, 10): 1;
                B.log(E, D)
            })
        }
        var v = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(D, B) {
                if (v.level <= D) {
                    var C = v.methodMap[D];
                    if (typeof console !== "undefined" && console[C]) {
                        console[C].call(console, B)
                    }
                }
            }
        };
        x.logger = v;
        function o(C, B) {
            v.log(C, B)
        }
        x.log = o;
        var z = function(B) {
            var C = {};
            s.extend(C, B);
            return C
        };
        x.createFrame = z;
        return x
    })(c, e);
    var b = (function(s, x, m) {
        var u = {};
        var r = s;
        var p = x;
        var k = m.COMPILER_REVISION;
        var o = m.REVISION_CHANGES;
        function j(A) {
            var z = A && A[0] || 1, C = k;
            if (z !== C) {
                if (z < C) {
                    var y = o[C], B = o[z];
                    throw new p("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + y + ") or downgrade your runtime to an older version (" + B + ").")
                } else {
                    throw new p("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + A[1] + ").")
                }
            }
        }
        u.checkRevision = j;
        function t(y, B) {
            if (!B) {
                throw new p("No environment passed to template")
            }
            var A = function(D, F, H, I, G, J) {
                var C = B.VM.invokePartial.apply(this, arguments);
                if (C != null) {
                    return C
                }
                if (B.compile) {
                    var E = {
                        helpers: I,
                        partials: G,
                        data: J
                    };
                    G[F] = B.compile(D, {
                        data: J !== undefined
                    }, B);
                    return G[F](H, E)
                } else {
                    throw new p("The partial " + F + " could not be compiled when running in runtime-only mode")
                }
            };
            var z = {
                escapeExpression: r.escapeExpression,
                invokePartial: A,
                programs: [],
                program: function(D, E, F) {
                    var C = this.programs[D];
                    if (F) {
                        C = q(D, E, F)
                    } else {
                        if (!C) {
                            C = this.programs[D] = q(D, E)
                        }
                    }
                    return C
                },
                merge: function(E, D) {
                    var C = E || D;
                    if (E && D && (E !== D)) {
                        C = {};
                        r.extend(C, D);
                        r.extend(C, E)
                    }
                    return C
                },
                programWithDepth: B.VM.programWithDepth,
                noop: B.VM.noop,
                compilerInfo: null
            };
            return function(F, D) {
                D = D || {};
                var G = D.partial ? D: B, H, E;
                if (!D.partial) {
                    H = D.helpers;
                    E = D.partials
                }
                var C = y.call(z, G, F, H, E, D.data);
                if (!D.partial) {
                    B.VM.checkRevision(z.compilerInfo)
                }
                return C
            }
        }
        u.template = t;
        function n(z, A, B) {
            var y = Array.prototype.slice.call(arguments, 3);
            var C = function(E, D) {
                D = D || {};
                return A.apply(this, [E, D.data || B].concat(y))
            };
            C.program = z;
            C.depth = y.length;
            return C
        }
        u.programWithDepth = n;
        function q(y, z, A) {
            var B = function(D, C) {
                C = C || {};
                return z(D, C.data || A)
            };
            B.program = y;
            B.depth = 0;
            return B
        }
        u.program = q;
        function h(y, A, C, D, B, E) {
            var z = {
                partial: true,
                helpers: D,
                partials: B,
                data: E
            };
            if (y === undefined) {
                throw new p("The partial " + A + " could not be found")
            } else {
                if (y instanceof Function) {
                    return y(C, z)
                }
            }
        }
        u.invokePartial = h;
        function v() {
            return ""
        }
        u.noop = v;
        return u
    })(c, e, f);
    var a = (function(t, v, k, p, s) {
        var u;
        var h = t;
        var m = v;
        var o = k;
        var r = p;
        var n = s;
        var q = function() {
            var x = new h.HandlebarsEnvironment();
            r.extend(x, h);
            x.SafeString = m;
            x.Exception = o;
            x.Utils = r;
            x.VM = n;
            x.template = function(y) {
                return n.template(y, x)
            };
            return x
        };
        var j = q();
        j.create = q;
        u = j;
        return u
    })(f, g, e, c, b);
    return a
})();
var DDG = {
    Data: {},
    Mixins: {},
    Models: {
        AnswerItems: {},
        Settings: {},
        AnswerSelectLists: {}
    },
    Pages: {},
    Views: {
        AnswerBar: {
            Answers: {},
            Meta: {}
        },
        Bang: {},
        Maps: {},
        Modals: {},
        Region: {},
        Settings: {}
    },
    Text: {},
    Utils: {
        Settings: {}
    }
};
!function(a) {
    a.Data.templates = {
        groups: {
            base: {
                item: "base_item",
                detail: "base_detail",
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: false,
                    rowHighlight: false,
                    keySpacing: false,
                    moreAt: false
                }
            },
            text: {
                item: "text_item",
                detail: "text_detail"
            },
            info: {
                item: "basic_image_item",
                detail: "basic_info_detail",
                options: {
                    moreAt: true,
                    aux: false
                }
            },
            products: {
                item: "products_item",
                detail: "products_detail",
                item_detail: "products_item_detail",
                wrap_detail: "base_detail",
                options: {
                    rating: true,
                    price: true,
                    brand: true,
                    hideReviewText: false
                }
            },
            products_simple: {
                item: "basic_image_item",
                detail: "products_detail",
                item_detail: "products_item_detail",
                wrap_detail: "base_detail",
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: true
                }
            },
            movies: {
                item: "basic_image_item",
                detail: "products_detail",
                item_detail: "products_item_detail",
                wrap_detail: "base_detail",
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: true
                },
                variants: {
                    tile: "poster"
                },
                elClass: {
                    tileBody: "is-hidden"
                }
            },
            media: {
                item: "media_item",
                detail: "basic_info_detail",
                item_detail: "media_item_detail",
                options: {
                    moreAt: true,
                    aux: false
                }
            },
            icon: {
                item: "text_item",
                detail: "basic_icon_detail",
                item_detail: "products_item_detail"
            },
            places: {
                item: "places_item",
                detail: "places_detail"
            },
            list: {
                item: "text_item",
                detail: "list_detail"
            },
            images: {
                item: "images_item",
                detail: "images_detail"
            },
            videos: {
                item: "videos_item",
                detail: "videos_detail"
            }
        },
        viewVariants: {
            bgColor: {
                dark: "bg-clr--dk",
                dark2: "bg-clr--dk2",
                light: "bg-clr--lt",
                light2: "bg-clr--lt2",
                light3: "bg-clr--lt3",
                red: "bg-clr--red",
                redLight: "bg-clr--red-light",
                redDark: "bg-clr--red-dark",
                blue: "bg-clr--blue",
                blueLight: "bg-clr--blue-light",
                blueDark: "bg-clr--blue-dark",
                purple: "bg-clr--purple",
                green: "bg-clr--green",
                gold: "bg-clr--gold"
            },
            detail: {
                light: "detail--l"
            },
            tile: {
                narrow: "tile--c--n",
                wide: "tile--c--w",
                xwide: "tile--c--xw",
                video: "tile--b--i--vid tile--c",
                poster: "tile--b--i--mov  tile--c--n",
                local: {
                    tile: "tile--loc",
                    tileFront: "tile--loc__main",
                    tileBack: "tile--loc__alt"
                },
                basic1: [{
                    tileTitle: "2line"
                }, {
                    tileSnippet: "small"
                }
                ],
                basic2: [{
                    tileTitle: "3line-small"
                }, {
                    tileSnippet: "large"
                }
                ],
                basic3: [{
                    tileTitle: "3line-large"
                }, {
                    tileSnippet: "small"
                }
                ],
                basic4: [{
                    tileTitle: "1line-large"
                }, {
                    tileSnippet: "large"
                }
                ]
            },
            tileTitle: {
                "1line": "tile__title--1",
                "1line-large": "tile__title--1lg",
                "2line": "tile__title--2",
                "3line": "tile__title--3",
                "4line": "tile__title--4",
                "3line-small": "tile__title--3sm",
                "3line-large": "tile__title--3lg"
            },
            tileSubtitle: {
                "2line": "tile__sub--2"
            },
            tileSnippet: {
                small: "tile__content--sm",
                large: "tile__content--lg"
            },
            tileFooter: {
                "2line": {
                    tileFoot: "tile__foot--2",
                    tileBody: "has-foot--2"
                },
                "3line": {
                    tileFoot: "tile__foot--3",
                    tileBody: "has-foot--3"
                },
                "4line": {
                    tileFoot: "tile__foot--4",
                    tileBody: "has-foot--4"
                }
            },
            tileRating: {
                starsLeft: "tile__rating--left",
                starsRight: "tile__rating--right"
            },
            iconImage: {
                small: "c-icon__img-wrap--sm",
                medium: "c-icon__img-wrap--md",
                large: "c-icon__img-wrap--lg"
            },
            iconBadge: {
                small: "c-icon__badge--sm",
                medium: "c-icon__badge--md",
                large: "c-icon__badge--lg"
            },
            iconTitle: {
                large: "c-icon__title--lg"
            },
            productSub: {
                noMax: "c-product__subtitle--nm"
            }
        }
    }
}(DDG);
!function() {
    var a = ["l", "ln", "lp", "lnp", "ld", "ldn", "ldp", "ldnp"];
    for (var b = 0, c; c = a[b]; b += 1) {
        if (!this[c]) {
            this[c] = function(e) {
                return e
            }
        }
    }
}(window);
DDG.Data.Settings = {
    colors: {
        b: "ecf5f8",
        b2: "2e4a57",
        ct: "9f9f9f",
        d: "e7eed5",
        g: "215017",
        g2: "ecf8ee",
        kt: "333333",
        o: "ffebcd",
        p: "693E68",
        r: "d44c2a",
        r2: "7c2c1f",
        r3: "fff",
        r4: "d3B5B0",
        w: "fff"
    },
    fonts: {
        a: "Arial",
        b: "Trebuchet MS",
        c: "Century Gothic",
        e: "Segoe UI",
        g: "Georgia",
        h: "Helvetica",
        n: "Sans-serif",
        o: "Tahoma",
        p: "Proxima Nova",
        s: "Serif",
        t: "Times",
        u: "Helvetica Neue",
        v: "Verdana"
    },
    k1: {
        "default": "1",
        desc: "If you still want to support us, %shelp spread DuckDuckGo%s",
        desc2: "<a href='https://duckduckgo.com/spread'>",
        desc3: "</a>",
        name: "Advertisements",
        type: "boolean"
    },
    k5: {
        "default": "-1",
        desc: "Changes what happens when you click on a video thumbnail",
        name: "Video Playback",
        type: "dropdown",
        values: {
            "1": "Always play on DuckDuckGo",
            "2": "Open on third-party site",
            "-1": "Prompt me"
        }
    },
    k7: {
        "default": "ffffff",
        desc: "Change the background color across the entire site",
        name: "Background Color",
        type: "color",
        values: "colors"
    },
    k8: {
        "default": "595959",
        desc: "Changes the color of the result description text",
        name: "Result Description Color",
        type: "color",
        values: {
            g: "595959"
        }
    },
    k9: {
        "default": "292929",
        desc: "Changes the title link color for each result",
        name: "Result Title Color",
        type: "color",
        values: {
            b: "1168cc",
            g: "292929"
        }
    },
    ka: {
        "default": "p",
        desc: "Changes the title link font for each result",
        name: "Result Title Font",
        order: ["a", "c", "g", "h", "u", "p", "n", "e", "s", "t", "o", "b", "v"],
        type: "dropdowncustom",
        values: "fonts"
    },
    kaa: {
        "default": "292929",
        desc: "Changes the title link color for each result",
        name: "Result Visited Title Color",
        type: "color",
        values: {
            g: "292929",
            p: "6830bb"
        }
    },
    kac: {
        "default": "1",
        desc: "Show suggestions under the search box as you type",
        name: "Auto-Suggest",
        type: "boolean"
    },
    kad: {
        "default": "wt_WT",
        desc: "Changes the language across the entire site",
        name: "Language",
        order: ["wt_WT"],
        type: "dropdown",
        values: "languages"
    },
    kae: {
        "default": "-1",
        featured: ["-1", "b", "c", "d"],
        name: "Theme",
        type: "thumbnail",
        values: {
            "-1": {
                color1: "333",
                color2: "888",
                id: "-1",
                name: "Default",
                settings: {
                    k7: null,
                    k8: null,
                    k9: null,
                    ka: null,
                    kaa: null,
                    kac: null,
                    kaf: null,
                    kag: null,
                    kai: null,
                    kf: null,
                    kj: null,
                    km: null,
                    ko: null,
                    kt: null,
                    kx: null,
                    ky: null
                }
            },
            b: {
                color1: "3434d4",
                color2: "047d00",
                id: "b",
                name: "Basic",
                settings: {
                    k8: "444",
                    k9: "142ace",
                    ka: "h",
                    kaa: "5500A3",
                    kaf: "1",
                    kai: "1",
                    kf: "-1",
                    kt: "h",
                    kx: "009636",
                    ky: "fff"
                }
            },
            c: {
                color1: "0f6ccc",
                color2: "ca4323",
                id: "c",
                name: "Contrast",
                settings: {
                    k8: "333",
                    k9: "3a7fb4",
                    kaa: "6d59a3",
                    kaf: "1",
                    kx: "bd4b2b"
                }
            },
            d: {
                color1: "444",
                color2: "222",
                id: "d",
                name: "Dark",
                settings: {
                    k7: "333",
                    kj: "333"
                }
            },
            r: {
                id: "r",
                name: "Retro",
                settings: {
                    k8: "333",
                    k9: "1168cc",
                    ka: "n",
                    kaa: "6830bb",
                    kaf: "1",
                    kag: "1",
                    kj: "d44c2a",
                    km: "m",
                    ko: "1",
                    kt: "n",
                    kx: "c14100"
                }
            },
            t: {
                id: "t",
                name: "Terminal",
                settings: {
                    k7: "222",
                    k8: "ccc",
                    k9: "50f148",
                    kaa: "ad4ad2",
                    kj: "222",
                    kx: "a1ac25"
                }
            }
        }
    },
    kaf: {
        "default": "1",
        desc: "Show the full URL for each result",
        name: "Result Full URLs",
        type: "boolean"
    },
    kag: {
        "default": "-1",
        desc: "Shows the search button background",
        name: "Search Button Background",
        type: "boolean"
    },
    kah: {
        desc: "Stores the previous region that was set",
        name: "Previous Region",
        values: "regions"
    },
    kai: {
        "default": "-1",
        desc: "Show the Result URL line above the snippet text",
        name: "Result URLs above snippet",
        type: "boolean"
    },
    kaj: {
        "default": "-1",
        desc: "Preferred units of measure",
        name: "Units of Measure",
        order: ["-1", "m", "u"],
        type: "dropdown",
        values: {
            "-1": "No Preference (Default)",
            m: "Metric (Kilograms, Meters, Celsius)",
            u: "US based (Pounds, Feet, Fahrenheit)"
        }
    },
    kak: {
        "default": "1",
        desc: "Show links to instructions for how to add DDG to your browser",
        name: "Browser Instructions",
        type: "boolean"
    },
    kal: {
        "default": "1",
        desc: "Show animations on the homepage",
        name: "Homepage Animations",
        type: "boolean"
    },
    kc: {
        "default": "1",
        desc: "Loads more results when scrolling",
        name: "Auto-Load",
        type: "boolean"
    },
    kd: {
        desc: "Prevent sharing of your search with sites you click on",
        name: "Redirect",
        type: "boolean"
    },
    kf: {
        compositeKey: {
            "-1:-1": "-1",
            "-1:1": "w",
            "1:-1": "1",
            "1:1": "fw"
        },
        "default": "1",
        subsettings: [{
            "default": "1",
            desc: "Show favicons for each result",
            id: "kf_fav",
            name: "Site Icons",
            type: "boolean"
        }, {
            "default": "-1",
            desc: "Show Web of Trust icons for each result",
            id: "kf_wot",
            name: "WOT Icons",
            type: "boolean"
        }
        ],
        type: "composite"
    },
    kg: {
        "default": "g",
        desc: "Search queries are included in URL (if off, searches will use POST requests)",
        name: "GET requests",
        type: "boolean",
        values: {
            "1": "g",
            "-1": "p"
        }
    },
    kh: {
        "default": "1",
        desc: "Use encrypted version of the site",
        name: "HTTPS",
        type: "boolean"
    },
    kj: {
        "default": "ffffff",
        desc: "Changes the header color across the entire site",
        name: "Header Color",
        type: "color",
        values: "colors"
    },
    kk: {
        "default": "1",
        desc: "Enables keyboard shortcuts on the site",
        name: "Keyboard Shortcuts",
        type: "boolean"
    },
    kl: {
        "default": "wt-wt",
        desc: "Changes results to be region specific",
        name: "Region",
        order: ["wt-wt"],
        type: "dropdown",
        values: "regions"
    },
    km: {
        "default": "l",
        desc: "Center align the results page (instead of left aligned)",
        name: "Center Alignment",
        type: "boolean",
        values: {
            "1": "m",
            "-1": "l"
        }
    },
    kn: {
        "default": "-1",
        desc: "Opens results in new windows/tabs",
        name: "New Window",
        type: "boolean"
    },
    ko: {
        "default": "s",
        desc: "Changes how much space the header takes up and what happens to it when you scroll",
        name: "Header Behavior",
        type: "dropdown",
        values: {
            "1": "On & Floating",
            "-1": "Off",
            s: "On & Scrolling"
        }
    },
    kp: {
        "default": "1",
        desc: "Omits objectionable (mostly adult) material",
        name: "Safe Search",
        type: "boolean"
    },
    ks: {
        "default": "n",
        desc: "Changes the font size across the entire site",
        name: "Font Size",
        order: ["t", "l", "n", "m", "s"],
        type: "dropdown",
        values: {
            l: "Larger",
            m: "Medium",
            n: "Large",
            s: "Small",
            t: "Largest"
        }
    },
    kt: {
        "default": "p",
        desc: "Changes the font across the entire site",
        name: "Font",
        order: ["a", "c", "g", "h", "u", "p", "n", "e", "s", "t", "o", "b", "v"],
        type: "dropdowncustom",
        values: "fonts"
    },
    ku: {
        "default": "-1",
        desc: "Underline the title link for each result",
        name: "Result Title Underline",
        type: "boolean"
    },
    kv: {
        compositeKey: {
            "-1:-1": "-1",
            "-1:1": "m",
            "1:-1": "l",
            "1:1": "1"
        },
        "default": "1",
        name: "Page #'s",
        subsettings: [{
            "default": "1",
            desc: "Show page numbers at result page breaks",
            id: "kv_num",
            name: "Page Break #'s",
            type: "boolean"
        }, {
            "default": "1",
            desc: "Show horizontal lines at result page breaks",
            id: "kv_lin",
            name: "Page Break Lines",
            type: "boolean"
        }
        ],
        type: "composite"
    },
    kw: {
        "default": "n",
        desc: "Controls the width of the search box and results",
        name: "Page Width",
        order: ["s", "w", "n"],
        type: "dropdown",
        values: {
            n: "Normal",
            s: "Super Wide",
            w: "Wide"
        }
    },
    kx: {
        "default": "858585",
        desc: "Changes the color of the result URL",
        name: "Result URL Color",
        type: "color",
        values: {
            b: "10385d",
            e: "858585",
            g: "0f5c17",
            l: "222222",
            o: "d15d0d",
            p: "732883",
            r: "c14100"
        }
    },
    ky: {
        "default": "f7f7f7",
        desc: "Changes the background color when hovering over a result",
        name: "Result Highlight Color",
        type: "color",
        values: {
            b: "eaf5fc",
            e: "f7f7f7",
            g: "eef6da",
            p: "fff0f9",
            t: "fcf5ea",
            y: "fffbd3"
        }
    },
    kz: {
        "default": "1",
        desc: "Automatically open relevant Instant Answers",
        name: "Instant Answers",
        type: "boolean"
    },
    languages: {
        af_ZA: "Afrikaans in Suid-Afrika",
        ar_DZ: "العربية في الجزائر",
        ar_EG: "العربية - مصر",
        ar_JO: "العربية في الأردن",
        ar_SA: " العربية - السعودية",
        ast_ES: "Asturianu n'Asturies",
        be_BY: "Беларуская ў Беларусі",
        bg_BG: "Български в България",
        bn_BD: "বাংলা (বাংলাদেশ)",
        bn_IN: "বাংলা (ভারত)",
        br_FR: "Breizh e Brezhoneg",
        bs_BA: "Bosanski u Bosni i Hercegovini",
        ca_ES: "Català a Catalunya",
        cs_CZ: "Česky v České republice",
        cy_GB: "Cymraeg yng Nghymru",
        da_DK: "Dansk i Danmark",
        de_CH: "Deutsch in der Schweiz",
        de_DE: "Deutsch in Deutschland",
        en_AU: "English in Australia",
        en_CA: "English in Canada",
        en_GB: "English in United Kingdom",
        en_US: "English of United States",
        eo_XX: "Esperanto",
        es_AR: "Español de Argentina",
        es_CL: "Español en Chile",
        es_CO: "Español de Colombia",
        es_CR: "Español de Costa Rica",
        es_EC: "Español en Ecuador",
        es_ES: "Español de España",
        es_MX: "Español Mexicano",
        es_PE: "Español Peruano",
        es_UY: "Español de Uruguay",
        es_VE: "Español venezolano",
        et_EE: "Eesti keel Eestis",
        "eu_ES-PV": "Euskara Euskal Herrian",
        fa_IR: "فارسی در ایران",
        fi_FI: "Suomi Suomessa",
        fr_BE: "Français en Belgique",
        fr_CA: "Français Canadien",
        fr_CH: "Français de Suisse",
        fr_FR: "Français en France",
        ga_IE: "Gaeilge na Éireann",
        gd_GB: "Gàidhlig san Rìoghachd Aonaichte",
        gl_ES: "Galego de Galicia",
        gr_GR: "Ελληνικά στην Ελλάδα",
        gu_IN: "ગુજરાતનું ગુજરાતી",
        he_IL: "עברית בישראל",
        hi_IN: "भारत की हिन्दी",
        hr_HR: "Hrvatski in Croatia",
        hu_HU: "Magyar Magyarországon",
        hy_AM: "Հայերեն Հայաստանում",
        id_ID: "Indonesia di Indonesia",
        io_XX: "Ido",
        is_IS: "Íslenska fyrir Ísland",
        it_IT: "La lingua italiana in Italia",
        ja_JP: "日本の日本語",
        ka_GE: "ქართული საქართველოში",
        kn_IN: "ಕನ್ನಡ",
        ko_KR: "대한민국의 한국어",
        kw_GB: "Kernewek yn Kernow",
        ky_KG: "Кыргызстандын кыргыз тили",
        latin_ROME: "Latina Romae",
        lt_LT: "Lietuvos Lietuvių",
        lv_LV: "Latviski Latvijā",
        ml_IN: "ഇന്ത്യയിലെ മലയാളം",
        mr_IN: "इंडियाची मराठी",
        ms_MY: "Bahasa Malaysia di Malaysia",
        nb_NO: "Norsk bokmål i Norge",
        ne_NP: "नेपाल को नेपाली",
        nl_BE: "Belgisch-Nederlands",
        nl_NL: "Nederlands in Nederland",
        nn_NO: "Norsk nynorsk i Norge",
        pirate_XX: "Haarrrr Pirate on Pirate Island",
        pl_PL: "Polski w Polsce",
        pt_BR: "Português do Brasil",
        pt_PT: "Português de Portugal",
        ro_RO: "Romana in Romania",
        ru_RU: "Русский России",
        si_LK: "ශ්රී ලංකාවේ සිංහල",
        sk_SK: "Slovenčina na Slovensku",
        sl_SI: "Slovenski jezik v Sloveniji",
        sq_AL: "Shqip ne Shqiperi",
        sr_RS: "Serbian in Serbia",
        sv_SE: "Svenska i Sverige",
        ta_IN: "இந்தியாவில் தமிழ்",
        te_IN: "భారతదేశంలో తెలుగు",
        th_TH: "ไทย ในประเทศไทย",
        tl_PH: "Tagalog sa Pilipinas",
        tokipona_XX: "Toki Pona",
        tr_TR: "Türkiye'de Türkçe",
        uk_UA: "Українська",
        ur_PK: "پاکستانی اردو",
        vi_VI: "Tiếng Việt ở Việt Nam",
        wt_WT: "Browser preferred language",
        zh_CN: "简体中文",
        zh_TW: "台灣中文"
    },
    regions: {
        "wt-wt": "No Region Selected",
        "ar-es": "Argentina",
        "au-en": "Australia",
        "at-de": "Austria",
        "be-fr": "Belgium (fr)",
        "be-nl": "Belgium (nl)",
        "br-pt": "Brazil",
        "bg-bg": "Bulgaria",
        "ca-en": "Canada",
        "ca-fr": "Canada (fr)",
        "ct-ca": "Catalonia",
        "cl-es": "Chile",
        "cn-zh": "China",
        "co-es": "Colombia",
        "hr-hr": "Croatia",
        "cz-cs": "Czech Republic",
        "dk-da": "Denmark",
        "ee-et": "Estonia",
        "fi-fi": "Finland",
        "fr-fr": "France",
        "de-de": "Germany",
        "gr-el": "Greece",
        "hk-tzh": "Hong Kong",
        "hu-hu": "Hungary",
        "in-en": "India",
        "id-id": "Indonesia",
        "id-en": "Indonesia (en)",
        "ie-en": "Ireland",
        "il-he": "Israel",
        "it-it": "Italy",
        "jp-jp": "Japan",
        "kr-kr": "Korea",
        "xl-es": "Latin America",
        "lv-lv": "Latvia",
        "lt-lt": "Lithuania",
        "my-ms": "Malaysia",
        "my-en": "Malaysia (en)",
        "mx-es": "Mexico",
        "nl-nl": "Netherlands",
        "nz-en": "New Zealand",
        "no-no": "Norway",
        "pe-es": "Peru",
        "ph-en": "Philippines",
        "ph-tl": "Philippines (tl)",
        "pl-pl": "Poland",
        "pt-pt": "Portugal",
        "ro-ro": "Romania",
        "ru-ru": "Russia",
        "xa-ar": "Saudi Arabia",
        "xa-en": "Saudi Arabia (en)",
        "sg-en": "Singapore",
        "sk-sk": "Slovakia",
        "sl-sl": "Slovenia",
        "za-en": "South Africa",
        "es-es": "Spain",
        "es-ca": "Spain (ca)",
        "se-sv": "Sweden",
        "ch-de": "Switzerland (de)",
        "ch-fr": "Switzerland (fr)",
        "ch-it": "Switzerland (it)",
        "tw-tzh": "Taiwan",
        "th-th": "Thailand",
        "tr-tr": "Turkey",
        "ua-uk": "Ukraine",
        "uk-en": "United Kingdom",
        "us-en": "United States",
        "us-es": "United States (es)",
        "vn-vi": "Vietnam"
    },
    tabs: [{
        id: "general",
        name: "General",
        settings: ["kl", "kad", "break", "kp", "kz", "break", "kc", "kac", "kn", "k1", "kk", "kaj", "break", "kv", "break", "kak", "kal"]
    }, {
        id: "theme",
        name: "Theme",
        settings: ["kae"]
    }, {
        id: "appearance",
        name: "Appearance",
        settings: ["Page Appearance", "kt", "ks", "kw", "km", "k7", "break", "Header Appearance", "ko", "kj", "break", "Results Appearance", "ka", "k9", "kaa", "ku", "break", "k8", "kx", "ky", "kaf", "kai", "break", "kf"]
    }, {
        id: "privacy",
        name: "Privacy",
        settings: ["kd", "kh", "kg", "k5"]
    }
    ]
};
!function(a) {
    a.Data.languages = {
        fontSubsets: {
            normal: ["sq", "eu", "br", "ch", "da", "nl", "en", "fo", "fi", "fr", "gl", "de", "is", "it", "mg", "no", "pt", "es", "sv"],
            afrikaans: ["af"],
            catalan: ["ca"],
            cyrillic: ["ru", "ab", "av", "ba", "be", "bg", "ce", "cv", "uk", "kk", "ku", "kv", "ky", "mk", "mn", "os", "tg", "tt", "ug", "uz", "sr"],
            esperanto: ["eo"],
            estonian: ["et"],
            greek: ["el", "gr"],
            hungarian: ["hu"],
            lithuanian: ["lt", "sl"],
            maltese: ["mt"],
            polish: ["pl"],
            romanian: ["ro"],
            serbian: ["sr", "bs", "hr", "sl", "lv"],
            slovak: ["sk", "sl", "lv"],
            turkish: ["tr"],
            welsh: ["cy"],
            czech: ["cs", "sl", "lv"]
        },
        languageFontLookup: {
            af: "afrikaans",
            ca: "catalan",
            eo: "esperanto",
            et: "estonian",
            el: "greek",
            gr: "greek",
            hu: "hungarian",
            lt: "lithuanian",
            mt: "maletese",
            pl: "polish",
            ro: "romanian",
            tr: "turkish",
            cy: "welsh",
            cs: "czech",
            sk: "slovak",
            sl: "serbian",
            bs: "serbian",
            hr: "serbian",
            lv: "serbian",
            ru: "cyrillic",
            ab: "cyrillic",
            av: "cyrillic",
            ba: "cyrillic",
            be: "cyrillic",
            bg: "cyrillic",
            ce: "cyrillic",
            cv: "cyrillic",
            uk: "cyrillic",
            kk: "cyrillic",
            ku: "cyrillic",
            kv: "cyrillic",
            ky: "cyrillic",
            mk: "cyrillic",
            mn: "cyrillic",
            os: "cyrillic",
            tg: "cyrillic",
            tt: "cyrillic",
            ug: "cyrillic",
            uz: "cyrillic",
            sr: ["serbian", "cyrillic"]
        }
    }
}(DDG);
DDG.Data.Apps = {
    isIPhone: "https://itunes.apple.com/us/app/id663592361?mt=8",
    isAndroid: "market://details?id=com.duckduckgo.mobile.android"
};
!function(a) {
    a.Data.Homepage = {
        queries: [{
            href: "/?q=tilt+shift+images&ia=images",
            label: "tilt shift images"
        }, {
            href: "/?q=thailand+beach+images&ia=images",
            label: "thailand beach images"
        }, {
            href: "/?q=gopro+videos&ia=videos",
            label: "gopro videos"
        }, {
            href: "/?q=jimmy+fallon+videos&ia=videos",
            label: "jimmy fallon videos"
        }, {
            href: "/?q=weather+in+encinitas&ia=forecast",
            label: "weather in encinitas"
        }, {
            href: "/?q=weather+in+paris&ia=forecast",
            label: "weather in paris"
        }, {
            href: "/?q=sorbet+recipes&ia=recipes",
            label: "sorbet recipes"
        }, {
            href: "/?q=tilapia+recipes&ia=recipes",
            label: "tilapia recipes"
        }, {
            href: "/?q=thai+food+in+San+Francisco&ia=places",
            label: "thai food in San Francisco"
        }, {
            href: "/?q=bars+near+me",
            label: "bars near me"
        }, {
            href: "/?q=katz%27s+deli+new+york&ia=places",
            label: "katz's deli new york"
        }, {
            href: "/?q=orange&ia=meanings",
            label: "orange"
        }, {
            href: "/?q=daft+punk+soundcloud&ia=soundcloud",
            label: "daft punk soundcloud"
        }, {
            href: "/?q=8oz+to+grams&ia=answer",
            label: "8oz to grams"
        }, {
            href: "/?q=define+superlative&ia=definition",
            label: "define superlative"
        }, {
            href: "/?q=people+in+space&ia=answer",
            label: "people in space"
        }
        ]
    }
}(DDG);
DDG.Data.StaticIAs = [{
    id: "images",
    name: "Images",
    meta: {
        idField: "image",
        autoExpand: 1,
        developer: [{
            name: "DDG Team"
        }
        ],
        signal_from: "images"
    },
    parameters: [{
        key: "size",
        values: [{
            id: "",
            name: lp("size", "All Sizes")
        }, {
            id: "s",
            name: lp("size", "Small")
        }, {
            id: "m",
            name: lp("size", "Medium")
        }, {
            id: "l",
            name: lp("size", "Large")
        }
        ]
    }
    ],
    sources: [{
        id: "ddg",
        name: "DuckDuckGo",
        requeryURL: "/i.js?o=json&q=",
        parameters: {
            size: ["", "s", "m", "l"]
        }
    }
    ],
    templates: DDG.Data.templates.groups.images,
    deferredURL: "/i.js?o=json&q="
}, {
    id: "videos",
    name: "Videos",
    model: "Video",
    meta: {
        idField: "id",
        developer: [{
            name: "DDG Team"
        }
        ],
        signal_from: "videos"
    },
    templates: DDG.Data.templates.groups.videos,
    deferredURL: "/v.js?o=json&strict=1&q="
}
];
DDG.Data.DeferredIAs = {
    news: {
        id: "news",
        name: "News",
        meta: {
            idField: "news",
            developer: [{
                name: "DDG Team"
            }
            ],
            signal_from: "news",
            rerender: ["image"]
        },
        templates: {
            item: "news_item"
        },
        deferredURL: "/news.js?o=json&q=",
        onItemShown: function(a) {
            if (!a.fetch_image || a.image || a.fetched_image) {
                return 
            }
            a.fetched_image = 1;
            $.getJSON("/f.js?o=json&i=1&u=" + a.url, function(b) {
                if (b && b.image) {
                    a.set("image", b.image)
                }
            })
        }
    }
};
!function(a) {
    a.Mixins.Events = {
        bindEvents: function(f) {
            if (!this._bEvents) {
                this._bEvents = []
            }
            for (var e = 0, c; c = f[e]; e++) {
                if (c.length < 2 ||!c[0] ||!c[1] ||!c[2]) {
                    continue
                }
                var b = {
                    bound: c[2].bind(this),
                    evt: c
                };
                if (typeof c[0] === "string") {
                    this.$ && this.$(c[0]).on(c[1], b.bound)
                } else {
                    c[0].on(c[1], b.bound)
                }
                this._bEvents.push(b)
            }
        },
        unbindEvents: function() {
            while (this._bEvents && this._bEvents.length) {
                var c = this._bEvents[this._bEvents.length - 1], b = c.evt;
                if (b) {
                    if (typeof b[0] === "string") {
                        this.$ && this.$(b[0]).off(b[1], c.bound)
                    } else {
                        b[0].off(b[1], c.bound)
                    }
                }
                this._bEvents.pop()
            }
            this._bEvents = null
        }
    }
}(DDG);
!function(a) {
    var b = a.Models;
    b.Base = function(c) {
        this.setMaxListeners(500);
        $.extend(this, c)
    };
    b.Base.prototype = $.extend({}, EventEmitter2.prototype, a.Mixins.Events, {
        set: function(c, j, f) {
            if (typeof c === "object") {
                for (var e in c) {
                    this.set(e, c[e], j)
                }
            }
            f = f || {};
            var h = this[c], g = h !== j;
            this[c] = j;
            !f.silent && g && this._emitChange(c, h)
        },
        UUID: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(g) {
                var f = Math.random() * 16 | 0, e = g == "x" ? f: (f & 3 | 8);
                return e.toString(16)
            })
        },
        _emitChange: function(c, e) {
            var f = this[c];
            this.emit("change:" + c, f, e);
            this.emit("change", c, f, e)
        }
    })
}(DDG);
!function(s) {
    var m = s.Models.Base, f, g = 1440, k = 1079, j = 864, e = 634, c = 425, r = [{
        id: "xl",
        width: g
    }, {
        id: "l",
        width: k
    }, {
        id: "m",
        width: j
    }, {
        id: "s",
        width: e
    }, {
        id: "xs",
        width: c
    }
    ], p = {
        xl: 94,
        l: 94,
        m: 58,
        s: 0,
        xs: 0
    }, u = c * 0.75, n = c * 0.9, h = c, b = e, o = Math.ceil(e * 1.25);
    s.Models.Device = f = function(y) {
        m.call(this, y);
        var z = this.ua, A = y.host || window.location.host;
        this.isEdge = /edge\//.test(z) ? true : false;
        if (!this.isEdge) {
            this.isIE = ie = d.all ? true : false;
            this.isIE9 = ie9 = /msie 9/.test(z) ? true : false;
            this.isIE10p = ie10p = /msie 1[0123456789]/.test(z) ? true : false;
            this.isIE11p = ie11p = /trident\/[789]/.test(z) || /edge\/[0123456789]/.test(z) ? true : false;
            if (ie10p || ie11p) {
                this.isIE = ie = true
            }
        }
        this.isSafari = is = /\([windows|macintosh|ipad|iphone].* version.* safari/.test(z) ? true : false;
        this.isWebkit = iw = /webkit/.test(z) ? true : false;
        this.isChrome = ir = /chrome(?!frame)|crios/.test(z)&&!/vivaldi/.test(z)&&!this.isIE&&!this.isEdge ? true : false;
        this.isFirefox = im = /firefox/.test(z) ? true : false;
        this.isFirefox38AndUp = this.isFirefox && /firefox\/(38|39|[4-9][0-9])\./.test(z) ? true : false;
        this.isOpera = io = /opera/.test(z) ? true : false;
        this.isOperaMini = /opera mini|opios/.test(z) ? true : false;
        this.isOperaMobile = /opera mobi/.test(z) ? true : false;
        this.isIPad = ipa = /ipad/.test(z) ? true : false;
        this.isIPhone = iph = /iphone/.test(z) ? true : false;
        this.isIDevice = ip = (ipa || iph);
        this.isIOS8p = ip8 = (ip && /os (8|9|10|11)|os 10_10/.test(z)) ? true : false;
        this.isOldIOS = ip && /os [12345]/.test(z) ? true : false;
        this.isIOS8pSafari = (this.isIOS8p&&!this.isChrome&&!this.isOperaMini) ? true : false;
        this.isAndroid = ia = /android/.test(z) ? true : false;
        this.isChrome31AndUpOnAndroid = this.isAndroid && this.isChrome && /chrome\/(3[1-9]|[4-9][0-9])\./.test(z) ? true : false;
        this.isSilk = is_silk = /silk/.test(z) ? true : false;
        this.isKonqueror = is_konqueror = /konqueror/.test(z) ? true : false;
        this.isOSX = iosx = /mac os x [0-9]/.test(z) ? true : false;
        this.isWindows = /windows/.test(z) ? true : false;
        this.isOnion=!!A.match(/\.onion$/i);
        this.isRetina = is_retina = this.dpr > 1;
        this.is2x = s.is2x = this.dpr > 1;
        this.is3x = s.is3x = this.dpr > 2;
        var x = "Browser";
        if (ipa) {
            x = "iPad"
        } else {
            if (/seamonkey/.test(z)) {
                x = "SeaMonkey"
            } else {
                if (/iceape/.test(z)) {
                    x = "Iceape"
                } else {
                    if (/palemoon/.test(z)) {
                        x = "PaleMoon"
                    } else {
                        if (im) {
                            x = "Firefox"
                        } else {
                            if (ia) {
                                x = "Android"
                            } else {
                                if (/xbox/.test(z)) {
                                    x = "xBox"
                                } else {
                                    if (/midori/.test(z)) {
                                        x = "Midori"
                                    } else {
                                        if (/opr/.test(z)) {
                                            x = "Opera"
                                        } else {
                                            if (/maxthon/.test(z)) {
                                                x = "Maxthon"
                                            } else {
                                                if (/vivaldi/.test(z)) {
                                                    x = "Vivaldi"
                                                } else {
                                                    if (this.isChrome) {
                                                        x = "Chrome"
                                                    } else {
                                                        if (/fennec/.test(z)) {
                                                            x = "Fennec"
                                                        } else {
                                                            if (/epiphany/.test(z)) {
                                                                x = "Epiphany"
                                                            } else {
                                                                if (this.isFirefox) {
                                                                    x = "Firefox"
                                                                } else {
                                                                    if (/uzbl/.test(z)) {
                                                                        x = "Uzbl"
                                                                    } else {
                                                                        if (this.isEdge) {
                                                                            x = "Edge"
                                                                        } else {
                                                                            if (this.isIE && navigator.platform === "Win64"&&!q() && Modernizr.touch && document.documentElement.clientWidth == screen.width) {
                                                                                x = "IEMetro"
                                                                            } else {
                                                                                if (this.isIE) {
                                                                                    x = "IE"
                                                                                } else {
                                                                                    if (this.isOpera) {
                                                                                        x = "Opera"
                                                                                    } else {
                                                                                        if (this.isIPhone) {
                                                                                            x = "iPhone"
                                                                                        } else {
                                                                                            if (/arora/.test(z)) {
                                                                                                x = "Arora"
                                                                                            } else {
                                                                                                if (this.isSafari) {
                                                                                                    x = "Safari"
                                                                                                } else {
                                                                                                    if (this.isKonqueror) {
                                                                                                        x = "Konqueror"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.browserName = s.browserName = x;
        this.displayBrowserName = this.browserName;
        if (x === "IEMetro") {
            this.displayBrowserName = "IE"
        } else {
            if (x === "iPhone" || x === "iPad") {
                this.displayBrowserName = "Safari"
            }
        }
        this.isSafariWithNativeDDG = t(this.browserName, this.isMobileDevice);
        this.isFirefoxWithNativeDDG = a(this.browserName, this.isMobileDevice);
        this._updateScreenSize();
        this._updateIsMobileDevice();
        if (this.isMobileDevice && this.browserName === "Firefox") {
            if (screen.width && screen.width < this.width) {
                this.width = viewport_width = screen.width
            }
            if (screen.height && screen.height < this.height) {
                this.height = viewport_height = screen.height
            }
            this._updateIsMobileDevice()
        }
        var v = (this.width < 600 || (this.width < 800 && this.height < 500)) ? 1: 0;
        if (v !== this.isMobile) {
            this.isMobile = is_mobile = v;
            this.emit("changed:mobile")
        }
        this.$scrollDoc = $("html,body");
        this.pixelId = (this.isMobile || this.isMobileDevice) ? "m" : "d";
        window.onresize = this._onResize.bind(this);
        window.onscroll = this._onScroll.bind(this)
    };
    f.prototype = $.extend({}, m.prototype, {
        scrollTop: function(x, v) {
            if (typeof x === "undefined") {
                if (typeof this._scrollTop !== "undefined") {
                    return this._scrollTop
                } else {
                    return this._scrollTop = s.$doc.scrollTop()
                }
            }
            if (x === this.scrollTop()) {
                return 
            }
            if (v&&!$.isNumeric(v)) {
                v = s.animation_speed
            }
            if (!v) {
                this.$scrollDoc.scrollTop(x)
            } else {
                this.$scrollDoc.animate({
                    scrollTop: x
                }, {
                    duration: v
                })
            }
            return this._scrollTop = x
        },
        getBrowserMoreURL: function() {
            var v = "https://duck.co/help/desktop/";
            if (this.isChrome) {
                return v + "chrome"
            } else {
                if (this.isOpera) {
                    return v + "opera"
                } else {
                    if (this.isSafari&&!this.isSafariWithNativeDDG) {
                        return v + "safari"
                    } else {
                        if (this.browserName === "SeaMonkey") {
                            return "https://addons.mozilla.org/seamonkey/addon/duckduckgo-ssl/"
                        } else {
                            if (this.isFirefox) {
                                return v + "firefox"
                            }
                        }
                    }
                }
            }
        },
        canAddToBrowser: function() {
            var v = this.getAddToBrowserDirections();
            return v.useForSearch || v.setAsHomepage
        },
        getAddToBrowserDirections: function() {
            if (this._addToBrowserDirections) {
                return this._addToBrowserDirections
            }
            var v = this.browserName, y, x;
            if (this.isSilk || ((this.isMobileDevice || this.isMobile)&&!this.isIOS8pSafari&&!this.isChrome31AndUpOnAndroid)) {
                return this._addToBrowserDirections = {}
            }
            if (v === "IE") {
                x = "ie"
            } else {
                if (v === "SeaMonkey") {
                    x = "seamonkey"
                } else {
                    if (v === "PaleMoon") {
                        x = "palemoon"
                    } else {
                        if (this.isFirefoxWithNativeDDG) {
                            x = "firefox"
                        } else {
                            if (v === "Firefox") {
                                x = "firefox_old"
                            } else {
                                if (this.isChrome && this.isAndroid) {
                                    x = "chrome_android"
                                } else {
                                    if (v === "Chrome") {
                                        x = "chrome"
                                    } else {
                                        if (v === "Maxthon"&&!this.isOSX) {
                                            x = "maxthon"
                                        } else {
                                            if (this.isSafariWithNativeDDG) {
                                                x = "safari"
                                            } else {
                                                if (this.isIOS8p) {
                                                    x = "ios8"
                                                } else {
                                                    if (v === "Safari" && window.postMessage && this.isOSX) {
                                                        x = "safari_old"
                                                    } else {
                                                        if (v === "Safari" && window.postMessage) {
                                                            x = "safari_windows"
                                                        } else {
                                                            if (v === "Opera") {
                                                                x = "opera"
                                                            } else {
                                                                if (v === "Vivaldi") {
                                                                    x = "vivaldi"
                                                                } else {
                                                                    if (v === "Edge") {
                                                                        x = "edge"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (v === "IE") {
                y = "ie"
            } else {
                if (v.match(/^Firefox|PaleMoon|SeaMonkey$/)) {
                    y = "firefox"
                } else {
                    if (v === "Maxthon") {
                        y = "maxthon"
                    } else {
                        if (v === "Chrome") {
                            y = "chrome"
                        } else {
                            if (v === "Safari") {
                                y = "safari"
                            } else {
                                if (v === "Opera") {
                                    y = "opera"
                                } else {
                                    if (v === "Vivaldi") {
                                        y = "vivaldi"
                                    } else {
                                        if (v === "Edge") {
                                            y = "edge"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return this._addToBrowserDirections = {
                useForSearch: x && ("use_for_search_" + x),
                setAsHomepage: y && ("set_as_homepage_" + y)
            }
        },
        isTeapot: function() {
            return this.width >= b && this.height <= o
        },
        isMobileLandscape: function() {
            return this.isMobile && (this.height <= u || this.height <= n && this.width >= h)
        },
        isMobilePortrait: function() {
            return this.isMobile&&!this.isMobileLandscape()
        },
        widthBreakpoint: function() {
            var v = r.length;
            while (--v) {
                var x = r[v];
                if (this.width < x.width) {
                    return x.id
                }
            }
            return r[0].id
        },
        gutterSize: function() {
            return p[this.widthBreakpoint()]
        },
        _updateScreenSize: function() {
            var v, x, y = document.documentElement;
            v = Math.max(y.clientWidth, window.innerWidth || 0);
            x = Math.max(y.clientHeight, window.innerHeight || 0);
            if (v !== this.width || x !== this.height) {
                this.width = viewport_width = v;
                this.height = viewport_height = x;
                return true
            }
            return false
        },
        _updateIsMobileDevice: function() {
            var v = /mobile/.test(this.ua) ? 1: 0;
            if (this.isOperaMobile || this.isOperaMini || this.isIDevice || this.isAndroid || this.isSilk || (this.width < 600 && this.height < 400)) {
                v = 1
            }
            this.isMobileDevice = is_mobile_device = v
        },
        _onResize: function(v) {
            if (this._updateScreenSize()) {
                this.emit("resize", v)
            }
        },
        _onScroll: function(v) {
            delete this._scrollTop;
            this.emit("scroll", v)
        }
    });
    function t(x, y) {
        if (x !== "Safari" || y) {
            return false
        }
        var v = new RegExp("Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/").exec(navigator.userAgent);
        if (!v ||!v.length) {
            return false
        }
        v.shift();
        v = v.map(function(z) {
            return z || 0
        }).join("");
        return v && v > 706
    }
    function a(v, x) {
        if (v !== "Firefox" || x) {
            return false
        }
        return navigator.buildID && parseInt(navigator.buildID) >= 20141028112145
    }
    function q() {
        var v;
        try {
            v=!!new ActiveXObject("htmlfile")
        } catch (x) {}
        return v
    }
}(DDG);
!function(c) {
    var a = c.Models.Base, e = 500, b = {
        13: "enter",
        27: "escape",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    c.Models.Keyboard = function(f) {
        a.call(this, f);
        if (!c.device.isMobileDevice) {
            $(document).on("keydown", this._onKeydown.bind(this))
        }
    };
    c.Models.Keyboard.prototype = $.extend({}, a.prototype, {
        namespaced: function(f) {
            if (!f) {
                return !!this.namespace
            }
            return this.namespace && this.namespace.match(f)
        },
        focusedOnInput: function() {
            var f = document.activeElement;
            return f && (f.nodeName === "INPUT" || f.nodeName === "TEXTAREA")
        },
        _onKeydown: function(h) {
            var g = h.keyCode;
            clearTimeout(this._activeTimeout);
            this.set("active", 1);
            if (!fq && (!kk || kk == "1")&&!h.ctrlKey&&!h.metaKey&&!this.focusedOnInput()) {
                if (this.enableSERPShortcuts) {
                    this._onSERPKeydown(h)
                }
                if (g == 13) {
                    nke()
                }
                if (g == 84) {
                    nkt()
                }
                if (h.shiftKey && g == 49) {
                    nkex()
                }
                if (!io) {
                    if (g == 49) {
                        nkex()
                    }
                }
            }
            var f = b[g];
            if (f&&!h.altKey&&!h.shiftKey) {
                if (this.namespace) {
                    this.emit(f + "." + this.namespace, h)
                }
                this.emit(f, h)
            }
            this._activeTimeout = setTimeout(function() {
                clearTimeout(this._activeTimeout);
                this.set("active")
            }.bind(this), e)
        },
        _onSERPKeydown: function(g) {
            var f = g.keyCode;
            if (f == 40 || f == 74) {
                g.preventDefault();
                nkda()
            }
            if (f == 38 || f == 75) {
                g.preventDefault();
                nkua()
            }
            if (!im) {
                if (g.shiftKey === true && f == 191) {
                    nks()
                }
                if (f == 191) {
                    nks()
                }
            }
            if (f == 79 || f == 76) {
                nko()
            }
            if (f == 222 || f == 86) {
                nkn()
            }
            if (f == 111 || f == 72) {
                nks()
            }
            if (f == 73) {
                nki()
            }
            if (f == 82) {
                nkr()
            }
            if (f == 32) {
                nksb()
            }
            if (f == 77) {
                nkm()
            }
            if (f == 83) {
                nksp()
            }
            if (f == 68) {
                nkd(g)
            }
        }
    })
}(DDG);
var d = document;
var w = window;
var cd, ci, dz, da, fk, fb, fs, fm, fe, fl, fo, fa, fn, fq, fz, ie, idom, io, il, ir, is, ga, gd, rc, rd, rs, rsd, rdc, rsc, rtc, rii, rin, rir, rl, rp, reb, rebc, sx, sy, tl, tlz, tac, tr, ts, tn, tsl, tz, nir, kurl, is_mobile, dow, iosx;
fb = ci = irl = idom = il = dz = da = dam = daiq = daia = fz = tl = tlz = sx = sy = fl = fo = fa = fn = rdc = rtc = rsc = rii = rin = rebc = tsl = tac = tn = tz = fe = fmx = fmy = ieof = iad = iad2 = iad3 = iadt = 0;
kurl = "";
rpc = fk = fs = 1;
tr = new Array();
ts = new Array();
rd = new Array();
rsd = new Array();
reb = new Array();
DDG.device = new DDG.Models.Device({
    ua: navigator.userAgent.toLowerCase(),
    dpr: window.devicePixelRatio
});
!function(a) {
    window.onerror = function(c, b, e) {
        if (!c || c === ": " || c.match(/Script error|Cannot read property \'style\'|atomicFindClose|bestpriceninja|ModifyLinkTargets|browserToolsLoaded|__gCrWeb|mobiGetClick|savingsslider/)) {
            return false
        }
        if (!b ||!b.match(/^http/i) || b.match(/checkpoint|main\.js/)) {
            return false
        }
        return nutp("jse_" + encodeURIComponent(c + "_" + b + "_" + e))
    }
}(DDG);
!function(c) {
    var b = c.Models, a = b.Base;
    b.Hidden = function(e) {
        a.call(this, e);
        this._vals = {}
    };
    b.Hidden.prototype = $.extend({}, a.prototype, {
        set: function(e, f) {
            this._vals[e] = f;
            this.emit("change")
        },
        get: function(e) {
            return this._vals[e]
        },
        clear: function(e) {
            delete this._vals[e];
            this.emit("change")
        },
        toJSON: function() {
            return $.extend({}, this._vals)
        }
    });
    c.hidden = new b.Hidden()
}(DDG);
!function(b) {
    var a = b.Models.Base;
    b.Models.Ads = function(c) {
        a.call(this, c);
        this.ads = [];
        this.defaultAds = []
    };
    b.Models.Ads.prototype = $.extend({}, a.prototype, {
        block: function() {
            this.set("blocked", 1)
        },
        isBlocked: function() {
            return !!(this.blocked ||!DDG.settings.isDefault("k1"))
        },
        getAds: function() {
            return this.ads.length ? this.ads : this.defaultAds
        },
        hasAds: function() {
            var c = this.getAds();
            return !!(c.length || this.pendingAds)
        },
        hasSiteLinks: function(e) {
            e = e || this.getAds();
            var f = e.length && e[0].n >= 2 ? 1: 0, c = this.pendingAds && this.pendingAdsHaveSitelinks;
            return !!(f || c)
        },
        setPendingAds: function(c) {
            if (this.isBlocked()) {
                return 
            }
            this.set({
                pendingAds: 1,
                pendingAdsHaveSitelinks: c
            })
        },
        setDefaultAds: function(c) {
            if (this.isBlocked() || this.ads.length ||!c ||!c.length) {
                return 
            }
            this.set("defaultAds", c.map(function(f) {
                var e = this._makeAffiliateAd(f);
                return {
                    a: f.a.substring(0, 75) + (f.a.length > 75 ? "..." : ""),
                    d: f.d,
                    m: 0,
                    s: e.s,
                    p: 1,
                    c: e.c,
                    u: e.u,
                    h: 0,
                    k: 0,
                    i: f.i,
                    t: f.t.substring(0, 60) + (f.t.length > 60 ? "..." : ""),
                    "IE fix": 1
                }
            }.bind(this)))
        },
        setAds: function(c) {
            if (this.isBlocked() ||!c ||!c.length) {
                return 
            }
            this.set("ads", c)
        },
        load: function(e) {
            if (this.loaded || this.isBlocked()) {
                return 
            }
            nrj(e);
            var c = "/y.js?x=1&q=" + rq + "&l=" + rl;
            c += ra ? "&a=" + ra : "";
            c += "&safe=" + (!DDG.settings.isDefault("kp")?-1 : 1);
            nrj(c);
            this.set("loaded", 1)
        },
        _makeAffiliateAd: function(e) {
            var c = {}, f = e.k;
            if (f === "skimlinks") {
                c.c = "http://ad.ddg.gg/?id=40063X1035282&xs=1&url=" + encodeURIComponent(e.c) + "&sref=" + encodeURIComponent("https://duckduckgo.com");
                c.u = "http://ad.ddg.gg/?id=40063X1035282&xs=1&url=" + encodeURIComponent(e.u) + "&sref=" + encodeURIComponent("https://duckduckgo.com")
            } else {
                c.c = "/y.js?u2=" + encodeURIComponent(e.c) + (w.ra ? "&a=" + w.ra : "");
                c.u = "/y.js?u2=" + encodeURIComponent(e.u) + (w.ra ? "&a=" + w.ra : "")
            }
            c.s = f;
            return c
        }
    })
}(DDG);
!function(e) {
    var j = e.Data.Settings.regions, h = "kl", f = "kah", c = "wt-wt", a = e.Models.Base, n;
    n = e.Models.Settings.Region = function(o) {
        this.settings = o.settings;
        o.id = o.id || this.settings.get(h);
        o.prevId = o.prevId || this.settings.get(f);
        a.call(this, o);
        this.settings.on("change:" + h, this.setId.bind(this));
        this.settings.on("change:" + f, this.setPrevId.bind(this))
    };
    n.prototype = $.extend({}, a.prototype, {
        getId: function() {
            return this.id || this.getDefaultId()
        },
        getPrevId: function() {
            return (this.id === this.prevId || this.prevId === this.getDefaultId()) ? null : this.prevId
        },
        getDefaultId: function() {
            return c
        },
        hasRegion: function() {
            return this.getId() && this.getId() !== this.getDefaultId()
        },
        setId: function(r, p) {
            if (r === this.id) {
                return 
            }
            var o = this, q = this.id;
            this.id = r;
            if (p && p.saveToSettings) {
                if (q&&!p.dontSavePrev && q !== this.getDefaultId()) {
                    this.settings.set(f, q)
                }
                this.settings.set(h, r, {
                    saveToCloud: true
                }, function() {
                    o.emit("change:id", o.id)
                })
            } else {
                this.emit("change:id", this.id)
            }
        },
        setPrevId: function(o) {
            this.prevId = o
        },
        reset: function() {
            this.prevId = null;
            this.settings.clear(f);
            this.setId(this.getDefaultId(), {
                saveToSettings: true,
                dontSavePrev: true
            })
        },
        disableSuggested: function(o) {
            this.reset();
            this.prevId = this.getDefaultId();
            this.settings.set(f, this.prevId, {
                saveToCloud: true
            }, o)
        },
        disabledSuggested: function() {
            return this.prevId && this.prevId === this.getDefaultId()
        },
        getName: function(o) {
            o = o || this.getId();
            return j[o] || j[this.getDefaultId()]
        },
        getSmallIconURL: function(o) {
            return k(o || this.getId())
        },
        getXSmallIconURL: function(o) {
            return b(o || this.getId())
        },
        getLargeIconURL: function(o) {
            return g(o || this.getId())
        },
        getAll: function(o) {
            var r = [], p;
            for (var q in j) {
                p = j[q];
                if (!o && q === "wt-wt") {
                    continue
                }
                r.push({
                    id: q,
                    name: p,
                    countryCode: m(q)
                })
            }
            return r
        },
        fetchSuggested: function(o) {
            var p = function(q) {
                if (q === "us") {
                    return o()
                }
                var v = [];
                for (var t in j) {
                    var u = t.split("-")[0];
                    if (u === q) {
                        v.push(t)
                    }
                }
                if (!v.length) {
                    return o()
                }
                if (v.length === 1 ||!window.locale) {
                    return o(null, v[0])
                }
                var x = window.locale.split("_")[0];
                for (var s = 0; s < v.length; s++) {
                    var r = v[s].split("-")[1];
                    if (x === r) {
                        return o(null, v[s])
                    }
                }
                return o(null, v[0])
            };
            $.ajax({
                url: "/country.json",
                success: function(q) {
                    if (q && q.country) {
                        p(q.country.toLowerCase())
                    } else {
                        o()
                    }
                },
                error: function(q) {
                    return o(q)
                }
            })
        }
    });
    var m = function(o) {
        return o.split("-")[0]
    }, k = function(o) {
        return "/assets/flags/" + (DDG.is3x ? "60" : DDG.is2x ? "40" : "20") + "/" + m(o) + ".png?v=4"
    }, b = function(o) {
        return "/assets/flags/" + (DDG.is3x ? "48" : DDG.is2x ? "32" : "16") + "/" + m(o) + ".png?v=3"
    }, g = function(o) {
        return "/assets/flags/" + (DDG.is3x ? "96" : DDG.is2x ? "64" : "32") + "/" + m(o) + ".png?v=4"
    }
}(DDG);
!function(b) {
    var a = "kae", c = b.Data.Settings[a];
    b.Models.Settings.Themes = {
        KEY: a,
        getAll: function() {
            return DDG.objectToArray(c.values)
        },
        getFeaturedThemes: function() {
            return c.featured.map(function(e) {
                return c.values[e]
            })
        },
        getSettingsForTheme: function(j) {
            var h = c.values[j], e = c.values[c["default"]].settings;
            if (h) {
                return $.extend({}, e, h.settings)
            }
            var f = tinycolor(j);
            if (f.isValid()) {
                var g = f.toHexString();
                return $.extend({}, e, {
                    kj: g,
                    k7: g
                })
            }
            return $.extend({}, e)
        }
    }
}(DDG);
!function(h) {
    var b = "/settings.js", g = "application/json", k = "Error ", f = " CloudSave Settings", e = k + "Loading" + f, c = k + "Saving" + f, j = k + "Deleting" + f, a = {
        url: b,
        type: "POST",
        dataType: "json",
        contentType: g,
        processData: false
    };
    h.Models.Settings.CloudSave = {
        keyField: "objectKey",
        isKeyField: function(m) {
            return m === this.keyField || m === "key"
        },
        load: function(m, n) {
            if (!m) {
                return n(e)
            }
            $.ajax({
                url: b + "?key=" + m,
                dataType: "json",
                success: function(o) {
                    n(null, o)
                },
                error: function() {
                    n(e)
                }
            })
        },
        save: function(m, o, n) {
            if (!m ||!o) {
                return n && n(c)
            }
            $.ajax($.extend({
                data: JSON.stringify({
                    command: "write",
                    objectKey: m,
                    obj: o
                }),
                success: function() {
                    n && n(null, o)
                },
                error: function() {
                    n && n(c)
                }
            }, a))
        },
        destroy: function(m, n) {
            if (!m) {
                return n(j)
            }
            $.ajax($.extend({
                type: "POST",
                data: JSON.stringify({
                    command: "delete",
                    objectKey: m
                }),
                success: function() {
                    n && n(null, true)
                },
                error: function(o) {
                    n && n(j)
                }
            }, a))
        },
        phraseToKey: function(m) {
            var n = new jsSHA(m, "ASCII"), o = n.getHash("SHA-512", "HEX");
            return o
        },
        validatePassPhrase: function(m, o) {
            if (!m) {
                return o(lp("cloudsave", "Please enter a pass phrase"))
            }
            if (m.length < 9) {
                return o(lp("cloudsave", "Pass phrase must be at least 9 characters long"))
            }
            var n = this.phraseToKey(m);
            $.ajax({
                url: b + "?key=" + n,
                dataType: "json",
                success: function() {
                    o(lp("cloudsave", "Pass phrase is already taken."))
                },
                error: function() {
                    o(null, true)
                }
            })
        },
        suggestPassPhrase: function(m) {
            $.ajax($.extend({
                type: "POST",
                data: JSON.stringify({
                    command: "passphrase"
                }),
                success: function(n) {
                    m(null, n.passphrase)
                },
                error: function() {
                    m(true)
                }
            }, a))
        }
    }
}(DDG);
!function(j, p) {
    var k = "January 12, 2025", c = "abcdefghijklmnopqrstuvwxyz", o = p.location.protocol + "//" + p.location.host + "/", m = j.Data.Settings, q = j.Models.Settings.CloudSave, s = j.Models.Settings.Themes, e = j.Models.Base, b;
    b = j.Models.Settings.Settings = function(t) {
        t = t || {};
        if (t.cloudSaveKey) {
            this.setCloudSaveKey(t.cloudSaveKey)
        }
        this._settings = {};
        this._savedSettings = {};
        this._urlSettings = {};
        this.region = new j.Models.Settings.Region({
            settings: this
        });
        this.cloudsave = q;
        this.themes = s;
        this._setDefaults();
        this._setFromURLParams();
        this._setFromQuerystring();
        this._backfillGlobals();
        this._setFromCookie()
    };
    b.prototype = $.extend({}, e.prototype, {
        THEME_KEY: s.KEY,
        AUTOCOMPLETE_KEY: "kac",
        LANGUAGE_KEY: "kad",
        POST_KEY: "kg",
        get: function(t) {
            var u = this._settings[t] || this.getDefault(t);
            u = g(t, u);
            return u
        },
        getDefault: function(t) {
            var u = m[t];
            return u && u["default"]
        },
        isDefault: function(t) {
            return this.get(t) === this.getDefault(t)
        },
        getData: function(v) {
            var x = $.extend({}, m[v]);
            x.id = v;
            if (typeof x.values === "string") {
                x.values = $.extend({}, m[x.values])
            }
            if (x.values && x.order) {
                var y, t = {};
                for (var u = 0; u < x.order.length; u++) {
                    y = x.order[u];
                    t[y] = x.values[y]
                }
                for (y in x.values) {
                    if (!t[y]) {
                        t[y] = x.values[y]
                    }
                }
                x.values = t
            }
            return x
        },
        set: function(t, y, v, u) {
            v = v || {};
            y = g(t, y);
            var x = v.saveToCloud && this._cloudSaveKey;
            if (y === undefined || y === "" || y === null || (this.isDefault(this.THEME_KEY) && y === this.getDefault(t))) {
                this.clear(t, v, u);
                if (t === this.THEME_KEY && v.forceTheme) {
                    this._applyTheme(this.getDefault(t), v)
                }
                return 
            }
            this._settings[t] = y;
            p[t] = y;
            if (v.saveToCookie || typeof v.saveToCookie === "undefined") {
                if (typeof y === "string") {
                    y = y.replace("#", "")
                }
                this._savedSettings[t] = y;
                f(r(t), y, v)
            }
            this.emit("change:" + t, y);
            this.emit("change", t);
            if (t === this.THEME_KEY) {
                this._applyTheme(y, v)
            }
            if (v.saveToCloud && this._cloudSaveKey) {
                this.saveToCloud(u)
            } else {
                u && u()
            }
        },
        setTheme: function(u, t) {
            t = t || {};
            t.forceTheme = true;
            this.set(this.THEME_KEY, u, t)
        },
        setBulk: function(v, u) {
            if (v[this.THEME_KEY]) {
                this.set(this.THEME_KEY, v[this.THEME_KEY], u)
            }
            for (var t in v) {
                if (t !== this.THEME_KEY) {
                    this.set(t, v[t], u)
                }
            }
        },
        clear: function(t, v, u) {
            v = v || {};
            p[t] = "";
            delete this._settings[t];
            delete this._savedSettings[t];
            if (v.saveToCookie || typeof v.saveToCookie === "undefined") {
                f(r(t), "", {
                    expires: new Date()
                })
            }
            if (v.saveToCloud) {
                this.saveToCloud(u)
            }
            this.emit("change:" + t);
            this.emit("change", t)
        },
        clearAll: function() {
            for (var t in this._settings) {
                this.clear(t)
            }
        },
        toQueryString: function(t) {
            return $.param(this.toJSON(t))
        },
        toJSON: function(t) {
            t = t || {};
            if (t.onlyURLParams) {
                return $.extend({}, this._urlSettings)
            }
            return $.extend({}, t.all ? this._settings : this._savedSettings)
        },
        toBookmarkletURL: function(u) {
            var t = this.toQueryString(u);
            return t ? o + "?" + t : o
        },
        toCloudSaveBookmarkletURL: function() {
            var t = this.getCloudSaveKey();
            return t ? o + "?key=" + t : o
        },
        getCloudSaveKey: function() {
            return this._cloudSaveKey
        },
        setCloudSaveKey: function(t) {
            f(q.keyField, t);
            this._cloudSaveKey = t;
            this.emit("change:cloudsave");
            return t
        },
        setCloudSavePassPhrase: function(t) {
            return this.setCloudSaveKey(q.phraseToKey(t))
        },
        loadFromCloud: function(t) {
            t = t || {};
            q.load(this._cloudSaveKey, function(x, v) {
                if (v) {
                    if (t && t.clearAll) {
                        this.clearAll()
                    }
                    this._cloudSettings = v;
                    for (var u in v) {
                        if (this._urlSettings[u]) {
                            delete v[u]
                        }
                    }
                    this.setBulk(v);
                    f(q.keyField, this._cloudSaveKey)
                } else {
                    this.clearCloudSave()
                }
                this.emit(t.initial ? "loaded-initial" : "loaded", x, v)
            }.bind(this))
        },
        saveToCloud: function(t) {
            q.save(this._cloudSaveKey, this._savedSettings, t)
        },
        clearCloudSave: function(u, t) {
            if (u && u.deleteFromServer) {
                q.destroy(this._cloudSaveKey, t)
            }
            this.clear(q.keyField);
            this._cloudSaveKey = null;
            this.emit("change:cloudsave")
        },
        getFontName: function(u) {
            var t = m.fonts[u];
            if (t && t === "Proxima Nova") {
                t = "DDG_ProximaNova, DDG_ProximaNova_UI_1, DDG_ProximaNova_UI_2, DDG_ProximaNova_UI_3, DDG_ProximaNova_UI_4, DDG_ProximaNova_UI_5, DDG_ProximaNova_UI_6"
            }
            return t
        },
        _applyTheme: function(x, u) {
            u = u || {};
            var v = s.getSettingsForTheme(x);
            for (var t in v) {
                if (!u.forceTheme && this._settings[t]) {
                    continue
                }
                this.clear(t);
                this.set(t, v[t] || this.getDefault(t), {
                    saveToCookie: false
                })
            }
        },
        _setDefaults: function() {
            var u = j.device, t = 1;
            if (u.isChrome || (u.isSafari&&!u.isAndroid&&!u.isWindows&&!u.isOldIOS) || u.isFirefox38AndUp) {
                t =- 1
            }
            kd = m.kd["default"] = t
        },
        _setFromQuerystring: function() {
            var t, x = /\+/g, v = /([^&=]+)=?([^&]*)/g, z = function(C) {
                return decodeURIComponentSafe(C.replace(x, " "))
            }, B = p.location.search + p.location.hash, y = B.substring(1);
            while (t = v.exec(y)) {
                var u = z(t[1]), A = z(t[2]);
                if (A.match(/<|>/)) {
                    continue
                }
                if (q.isKeyField(u)&&!this.getCloudSaveKey()) {
                    this._urlSettings[u] = A;
                    this.setCloudSaveKey(A)
                } else {
                    if (u.charAt(0) === "k" || u === "t") {
                        this._urlSettings[u] = A
                    }
                }
            }
            this.setBulk(this._urlSettings, {
                saveToCookie: false
            })
        },
        _setFromURLParams: function() {
            if (!p.settings_url_params) {
                return 
            }
            for (var t in p.settings_url_params) {
                var u = p.settings_url_params[t];
                if (q.isKeyField(t)&&!this.getCloudSaveKey()) {
                    this._urlSettings[t] = u;
                    this.setCloudSaveKey(u)
                } else {
                    if (!this._urlSettings[t]) {
                        this._urlSettings[t] = u
                    }
                }
            }
            this.setBulk(this._urlSettings, {
                saveToCookie: false
            })
        },
        _setFromCookie: function() {
            if (!document.cookie) {
                return 
            }
            var x = {}, v = document.cookie.split("; ");
            for (var u = 0; u < v.length; u++) {
                var y = v[u].split("=");
                if (y && y.length == 2) {
                    var t = h(y[0]), z = a(y[1]);
                    if (q.isKeyField(t)) {
                        this.setCloudSaveKey(z)
                    } else {
                        if (z&&!this._urlSettings[t]) {
                            x[t] = z
                        }
                    }
                }
            }
            this.setBulk(x)
        },
        _backfillGlobals: function() {
            var u = 0, t, x;
            for (; u < 10; u++) {
                t = h(u.toString());
                if (!p[t]) {
                    p[t] = ""
                }
            }
            for (u = 0; u < c.length; u++) {
                var v = c.charAt(u);
                t = h(v);
                x = h("a" + v);
                if (!p[t]) {
                    p[t] = ""
                }
                if (!p[x]) {
                    p[x] = ""
                }
            }
        }
    });
    var a = function(t) {
        if (!t) {
            return ""
        }
        if (t.indexOf('"') === 0) {
            t = t.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        return t ? decodeURIComponent(t.replace(/\+/g, " ")) : ""
    }, f = function(t, v, u) {
        u = u || {};
        u.expires = u.expires || new Date(k);
        document.cookie = [encodeURIComponent(t), "=", encodeURIComponent(v), u.expires ? "; expires=" + u.expires.toUTCString(): "", u.path ? "; path=" + u.path: "", u.domain ? "; domain=" + u.domain: "", u.secure ? "; secure": ""].join("")
    }, r = function(t) {
        if (t.charAt(0) === "k") {
            return t.substr(1, t.length)
        } else {
            return t
        }
    }, h = function(t) {
        if (q.isKeyField(t)) {
            return t
        }
        return "k" + t
    }, n = function(t) {
        var u = m[t];
        return typeof u.values === "object" ? u.values : m[u.values]
    }, g = function(u, x) {
        if (!x ||!u) {
            return x
        }
        var v = m[u];
        if (v && v.type === "color") {
            var t = n(u);
            x = t[x] || x
        }
        return x
    };
    j.settings = new b({
        cloudSaveKey: p.key || p[q.keyField]
    })
}(DDG, this);
!function(s) {
    var j, e = {
        s: "set-text--small",
        m: "set-text--medium",
        l: "set-text--larger",
        t: "set-text--largest"
    }, a = {
        w: "set-wide",
        s: "set-super-wide"
    }, q = s.Data.languages.languageFontLookup, h = s.Data.languages.fontSubsets, g = tinycolor;
    s.Utils.Settings.LiveUpdater = j = function(x) {
        this.settings = x.settings;
        this.$html = s.$html || $("html");
        this.$body = $("body");
        this.isHomePage = x.isHomePage;
        this.isDarkBg = false;
        var v = this;
        this.settings.on("change", function(y) {
            v[y] && v[y](v.settings.get(y))
        })
    };
    j.prototype = {
        updateAll: function() {
            for (var x in j.prototype) {
                var v = j.prototype[x];
                if (x.charAt(0) == "k") {
                    this[x](this.settings.get(x))
                }
            }
        },
        loadFonts: function() {
            if (!this.settings.isDefault("kt")&&!this.settings.isDefault("ka")) {
                return 
            }
            var E = s.Data.languages.resultLanguages || {}, A = Object.keys(E) || [], v = [], x = 0, D = 6, C = "";
            if (!this.settings.isDefault("kad")) {
                A.unshift(this.settings.get("kad").split("_")[0])
            }
            if (locale) {
                A.unshift(locale.split("_")[0])
            }
            if (A && A.length) {
                for (var B = 0; B < A.length; B++) {
                    var y = A[B];
                    if (q[y] && v.indexOf(y)===-1) {
                        var F = $.isArray(q[y]) ? q[y]: [q[y]];
                        for (var z = 0; z < F.length; z++) {
                            C += s.exec_template("theme_font", {
                                name: "_UI_" + x,
                                lang: F[z]
                            });
                            v = v.concat(h[F[z]]);
                            x++
                        }
                        if (x >= D) {
                            break
                        }
                    }
                }
            }
            this._clearCSS("customFonts");
            if (C) {
                this.$customFontscss = t(C)
            }
        },
        k1: function(x) {
            var v = (x && x == "-1") ? "addClass": "removeClass";
            this.$html[v]("no-ads")
        },
        km: function(x) {
            var v = (x && x === "m") ? "addClass": "removeClass";
            this.$html[v]("set-align-center")
        },
        ks: function(y) {
            for (var v in e) {
                this.$html.removeClass(e[v])
            }
            var x = e[y];
            x && this.$html.addClass(x)
        },
        kw: function(x) {
            this.$html.removeClass("set-wide").removeClass("set-super-wide");
            var v = a[x];
            v && this.$html.addClass(v)
        },
        kh: function(v) {
            if (!d.x) {
                return 
            }
            if ((!v || v == "1")&&!d.location.port && d.location.protocol != "https:" && w.location.hostname.indexOf(".onion")==-1) {
                d.x.action = "https://" + w.location.host + "/"
            } else {
                if ((v && v == "-1") && d.location.protocol != "http:") {
                    d.x.action = "http://" + w.location.host + "/"
                } else {
                    if (this.settings.get("kg") === "p" && ir) {
                        d.x.action = w.location.protocol + "//" + w.location.host + "/"
                    } else {
                        d.x.action = "/"
                    }
                }
            }
        },
        kg: function(v) {
            if (!d.x) {
                return 
            }
            d.x.method = (v && v === "p") ? "POST" : "GET";
            if (v && v === "p") {
                d.title = "DuckDuckGo"
            }
            if (ir && v && v === "p") {
                d.x.action = window.location.protocol + "//" + window.location.host + "//"
            }
        },
        ko: function(v) {
            if (this.isHomePage) {
                return 
            }
            s.isHeaderFixed = false;
            this.$html.removeClass("set-header--menu");
            this.$html.removeClass("set-header--fixed");
            if (v == "1") {
                s.isHeaderFixed = true;
                this.$html.addClass("set-header--fixed")
            } else {
                if (v == "-2" || v == "-1") {
                    this.$html.addClass("set-header--menu");
                    delete s._header_height
                }
            }
        },
        ku: function(v) {
            $(".results")[m(v)]("set-underlined-links")
        },
        kaf: function(v) {
            $(".results")[m(v)]("full-urls")
        },
        kad: function(v) {
            this.loadFonts()
        },
        kag: function(v) {
            $(".search__button")[m(v)]("search__button--active")
        },
        kt: function(z) {
            this._clearCSS("kt");
            if (!z || z == this.settings.getDefault("kt")) {
                return 
            }
            var v = this.settings.getFontName(z) || z, y = this.settings.getFontName(this.settings.getDefault("kt")), x = v.match(/Helvetica|Arial|Sans-serif/) ? true: false;
            if (v.match(/Helvetica/)) {
                v += ",sans-serif"
            }
            this.$ktcss = t(s.exec_template("theme_custom_font", {
                fontStack: v + "," + y,
                lightenWeight: x
            }))
        },
        ka: function(y) {
            this._clearCSS("ka");
            if (!y || y == this.settings.getDefault("ka")) {
                return 
            }
            var v = this.settings.getFontName(y) || y, x = this.settings.getFontName(this.settings.getDefault("ka"));
            if (v.match(/Helvetica/)) {
                v += ",sans-serif"
            }
            this.$kacss = t(".result__a { font-family:" + v + "," + x + ";}")
        },
        kj: function(C) {
            this.$html.removeClass("dark-header");
            this._clearCSS("kj");
            if (!C || C == this.settings.getDefault("kj")) {
                return ""
            }
            var v = C, A = f(v), B = A.root.toHsl().l > 0.5, x = A.root.toRgbString().replace(/rgb\(|\)/g, ""), z = A.root.toHexString(), y = "";
            if (!B || A.root.toHsl().s > 0.5) {
                this.$html.addClass("dark-header")
            }
            if (B) {
                y += s.exec_template("theme_header", {
                    color: z,
                    rgb: x,
                    bottomBorder: A.darker[0],
                    topBorder: A.darker[4],
                    link: A.text[2],
                    activeLink: A.text[0]
                });
                if (!this.isHomePage) {
                    this.isDarkBg = false;
                    y += r(A);
                    y += s.exec_template("theme_header_menu_button", {
                        icon: A.text[3],
                        hoverBg: A.text[2],
                        hoverColor: A.lighter[2]
                    });
                    y += s.exec_template("theme_zci", {
                        color: z,
                        bg: A.lighter[4],
                        detail: A.lighter[2],
                        border: A.darker[0],
                        bottomBorder: A.darker[0],
                        outline: A.darker[5],
                        text: A.text[1],
                        link: A.text[0],
                        activeLink: A.text[0],
                        tileNav: A.darker[2],
                        modeBg: A.darker[2],
                        modeText: A.text[1],
                        accent1: A.darker[3],
                        accent2: A.darker[4],
                        accent3: A.darker[2],
                        accentText: A.text[2],
                        accentText2: A.text[3]
                    })
                }
            } else {
                y += s.exec_template("theme_header", {
                    color: z,
                    rgb: x,
                    bottomBorder: A.darker[0],
                    topBorder: A.darker[2],
                    link: A.text[2],
                    activeLink: A.text[0]
                });
                if (!this.isHomePage) {
                    this.isDarkBg = true;
                    y += s.exec_template("theme_header_menu_button", {
                        icon: A.text[4],
                        hoverBg: A.text[2],
                        hoverColor: A.darker[2]
                    });
                    if (this.settings.get(this.settings.THEME_KEY) !== "r") {
                        y += u(A);
                        y += k(A);
                        y += s.exec_template("theme_zci", {
                            color: z,
                            bg: A.darker[1],
                            detail: A.darker[2],
                            border: A.darker[3],
                            bottomBorder: A.darker[2],
                            outline: A.lighter[5],
                            text: A.text[1],
                            link: A.text[0],
                            activeLink: A.text[3],
                            tileNav: A.darker[0],
                            modeBg: A.lighter[1],
                            modeText: A.text[4],
                            accent1: A.lighter[2],
                            accent2: A.lighter[3],
                            accent3: A.lighter[7],
                            accentText: A.text[2],
                            accentText2: A.text[3]
                        })
                    }
                }
            }
            this.$kjcss = t(y)
        },
        k7: function(v) {
            this.$html.removeClass("dark-bg");
            this.$k7css && this.$k7css.remove();
            delete this.$k7css;
            if (!v || v == this.settings.getDefault("k7")) {
                return 
            }
            var A = g(v).toHexString(), x = f(A), D = x.root.toHsl().l > 0.5, E = x.text[0], y = x.text[3], C = D ? x.darker[1]: x.lighter[1], z = D ? x.darker[0]: x.lighter[2], B = "";
            B += s.exec_template("theme_background", {
                bg: A,
                text: E,
                textTint: y,
                bgTint: C,
                bgTint2: z
            });
            B += s.exec_template("theme_sidemenu", {
                bg: x.darker[1],
                border: x.darker[2],
                text: x.text[5],
                link: x.text[3],
                activeLink: x.text[0]
            });
            if (this.isHomePage) {
                B += s.exec_template("theme_header_menu_button", {
                    icon: D ? x.darker[4]: x.text[4],
                    hoverBg: C,
                    border: C
                });
                if (!D || x.root.toHsl().s > 0.5) {
                    this.$html.addClass("dark-bg");
                    this.isDarkBg = true
                }
                if (!D) {
                    B += u(x);
                    B += k(x)
                } else {
                    B += r(x)
                }
            } else {
                B += s.exec_template("theme_result_snippet", {
                    color: y
                });
                B += s.exec_template("theme_result_web_links", {
                    color: y
                });
                B += s.exec_template("theme_result_highlight", {
                    color: C
                });
                B += s.exec_template("theme_result_message", {
                    textColor: y,
                    bgColor: x.darker[1],
                    borderColor: x.darker[2],
                    linkColor: E
                })
            }
            this.$k7css = t(B)
        },
        ky: function(x) {
            this._clearCSS("ky");
            if (is_mobile ||!x || x == this.settings.getDefault("ky")) {
                return 
            }
            var v = g(x);
            if (v.isValid()) {
                this.$kycss = t(s.exec_template("theme_result_highlight", {
                    color: v.toHexString()
                }))
            }
        },
        k9: function(y) {
            this._clearCSS("k9");
            if (!y || y == this.settings.getDefault("k9")) {
                return 
            }
            var v = g(y);
            if (v.isValid()) {
                var x = v.toHsl().l > 0.5;
                this.$k9css = t(s.exec_template("theme_result_title", {
                    color: v.toHexString(),
                    officialSiteBg: x ? "#fff": "#666",
                    officialSiteText: x ? "#666": "#fff"
                }))
            }
        },
        k8: function(x) {
            this._clearCSS("k8");
            if (!x || x == this.settings.getDefault("k8")) {
                return 
            }
            var v = g(x);
            if (v.isValid()) {
                this.$k8css = t(s.exec_template("theme_result_snippet", {
                    color: v.toHexString()
                }))
            }
        },
        kaa: function(A) {
            this._clearCSS("kaa");
            var y = A && A === this.settings.getDefault("kaa"), v = this.settings.get("k9") === this.settings.getDefault("k9");
            if (!A || (y && v)) {
                return 
            }
            var x = g(A), z = y ? "block": "none";
            if (x.isValid()) {
                this.$kaacss = t(".result__check { display: " + z + ";} .results a.result__a:visited { color:" + x.toHexString() + ";}")
            }
        },
        kx: function(x) {
            this._clearCSS("kx");
            if (!x || x == this.settings.getDefault("kx")) {
                return 
            }
            var v = g(x);
            if (v.isValid()) {
                this.$kxcss = t(s.exec_template("theme_result_web_links", {
                    color: v.toHexString()
                }))
            }
        },
        kf: function(v) {
            if (v && v === "-1") {
                $(".result__icon").addClass("is-hidden")
            } else {
                $(".result__icon").removeClass("is-hidden");
                s.ImageLoader.loadMore()
            }
        },
        kai: function(v) {
            if (!v || v == this.settings.getDefault("kai")) {
                $(".result--url-above-snippet").removeClass("result--url-above-snippet");
                $(".result__snippet").each(function(y, z) {
                    var x = $(z), A = x.parent().find(".result__extras");
                    A.before(x)
                })
            } else {
                $(".result").addClass("result--url-above-snippet");
                $(".result__snippet").each(function(y, z) {
                    var x = $(z), A = x.parent().find(".result__extras");
                    A.after(x)
                })
            }
        },
        _clearCSS: function(v) {
            var y = "$" + v + "css", x = this[y];
            x && x.remove();
            delete this[y]
        }
    };
    var t = function(v) {
        return $("<div />", {
            html: "&shy;<style>" + v + "</style>"
        }).children().appendTo("body")
    }, m = function(v) {
        return (v && v == "1") ? "addClass" : "removeClass"
    }, p = function(x, v) {
        x = g(x);
        return g.lighten(x, v * (1 - x.toHsl().l)).toHexString()
    }, c = function(x, v) {
        x = g(x);
        return g.darken(x, v * x.toHsl().l).toHexString()
    }, o = function(x, v) {
        x = g(x);
        return g.desaturate(x, v * x.toHsl().s).toHexString()
    }, b = function(x, v) {
        x = g(x);
        return g.saturate(x, v * (1 - x.toHsl().s)).toHexString()
    }, n = function(v, x, B, A) {
        var z = [];
        for (var y = 1; y <= x; y++) {
            z.push(A(v, B * y))
        }
        return z
    }, f = function(y) {
        y = g(y);
        var F = y.toHsl().l > 0.5, A = g.monochromatic(g.desaturate(y, 80), 20), G = g.mostReadable(y, A), B = g(G).toHsl().l > 0.5, x = F ? 10: 4, E = F ? 4: 10, D = y.toHsl().s > 0.5;
        if (F) {
            E += E * y.toHsl().s
        }
        var v = n(G, 10, 5, B ? c : p), C = n(y, 8, E, c), z = n(y, 8, x, p);
        return {
            root: y,
            text: v,
            lighter: z,
            darker: C
        }
    }, u = function(v) {
        return s.exec_template("theme_search_bar", {
            bg: v.darker[1],
            border: v.darker[2],
            iconText: v.text[0],
            buttonBg: v.darker[3],
            inputText: v.text[0],
            altInputText: v.text[5]
        })
    }, k = function(x) {
        var v = g(x.darker[2]).toRgb();
        return s.exec_template("theme_autocomplete", {
            bg: "rgb(" + v.r + "," + v.g + "," + v.b + ")",
            border: x.darker[0],
            lightText: x.text[1],
            darkText: x.text[5],
            selectedBg: x.lighter[3]
        })
    }, r = function(v) {
        return s.exec_template("theme_search_bar", {
            bg: "#fff",
            border: v.darker[2],
            iconText: v.darker[4],
            buttonBg: v.darker[4]
        })
    }
}(DDG);
!function(a) {
    a.Pages.Base = function(b) {
        this.views = {};
        a.keyboard = this.keyboard = new a.Models.Keyboard();
        a.ready(this.ready.bind(this))
    };
    a.Pages.Base.prototype = {
        ready: function() {
            if (is_mobile) {
                a.addClass("html", a.$html, "is-mobile")
            }
            if (is_mobile_device) {
                a.addClass("html", a.$html, "is-mobile-device")
            } else {
                a.addClass("html", a.$html, "is-not-mobile-device")
            }
            a.settings.on("loaded-initial", this._onSettingsLoaded.bind(this));
            a.settings.loadFromCloud({
                initial: true
            });
            this.initSideMenu();
            this.initHeader()
        },
        initSideMenu: function() {
            this.sideMenu = new a.Views.SideMenu($.extend({
                pageType: this.pageType,
                settings: a.settings,
                appendLinkTo: ".js-header-wrap",
                appendTo: ".js-site-wrapper"
            }, this.sideMenuOps || {}));
            this.sideMenu.on("opened", function() {
                if (this.searchbar && this.searchbar.hasFocus) {
                    this._restoreSearchFocus = true;
                    this.searchbar.unfocus()
                }
            }.bind(this));
            this.sideMenu.on("closed", function() {
                if (this._restoreSearchFocus) {
                    this.searchbar.focus();
                    delete this._restoreSearchFocus
                }
            }.bind(this))
        },
        initHeader: function() {
            var b = (Modernizr.touch) ? "touchstart": "click";
            $("#header_wrapper").on(b, function() {
                a.device.scrollTop(0, a.animation_speed)
            });
            this.searchbar = new a.Views.SearchBar({
                el: ".js-search-form",
                settings: a.settings,
                hidden: a.hidden
            });
            this.searchbar.on("focus", function() {
                this.sideMenu && this.sideMenu.hide()
            }.bind(this))
        },
        notify: function(b) {
            if (!this.notifications) {
                this.notifications = new a.Views.Notification({
                    appendTo: "body"
                })
            }
            this.notifications.flash(b)
        },
        _onSettingsLoaded: function() {
            var b = a.settings.toQueryString({
                onlyURLParams: true
            });
            if (b) {
                kurl += "&" + b
            }
            if (this.liveUpdater) {
                a.settings.updater = new a.Utils.Settings.LiveUpdater({
                    isHomePage: this.pageType === "home",
                    settings: a.settings
                });
                a.settings.updater.updateAll();
                a.settings.on("change:kae", this.notify.bind(this, l("Theme Changed")))
            }
        }
    }
}(DDG);
!function(b) {
    var a = b.Pages.Base;
    b.Pages.Home = function(c) {
        a.call(this, c)
    };
    b.Pages.Home.prototype = $.extend({}, a.prototype, {
        pageType: "home",
        liveUpdater: true,
        ready: function() {
            a.prototype.ready.call(this);
            if (!is_mobile_device) {
                this.searchbar.focus()
            }
            if (Modernizr.touch && ip) {
                window.onorientationchange = function() {
                    b.$win.scrollTop(0)
                }
            }
            this.views.tagline = new DDG.Views.HomepageTagline({
                appendTo: ".js-tag-home"
            });
            if (!b.settings.isDefault("kak")) {
                return 
            }
            var e = b.device, c = $(".js-foot-home");
            if (e.canAddToBrowser()) {
                this.views.badge = new b.Views.AddToBrowserBadge({
                    appendTo: c
                });
                if (e.isMobile) {
                    c.addClass("show-on-small-screens")
                }
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Pages.Base, c = {
        text: lp("wedonttrackyou", "We don't %s you.", lp("wedonttrackyou", "track")),
        href: "/privacy"
    };
    b.add_safe_search_message = function() {
        if (b.page && b.page.views.messages) {
            b.page.views.messages._showSafeSearchMessage()
        }
    };
    b.Pages.SERP = function(e) {
        this._showSafeSearch = e.showSafeSearch;
        a.call(this, e);
        this.ads = new b.Models.Ads();
        b.device.on("scroll", this._onScroll.bind(this))
    };
    b.Pages.SERP.prototype = $.extend({}, a.prototype, {
        pageType: "serp",
        liveUpdater: true,
        sideMenuOps: {
            showRegion: true,
            message: c
        },
        ready: function() {
            a.prototype.ready.call(this);
            this.keyboard.enableSERPShortcuts = 1;
            if (is_twitter) {
                b.display_twitter_status()
            }
            this.views.ads = new b.Views.Ads({
                model: this.ads,
                "$el": $("#ads")
            });
            this.views.messages = new b.Views.SERPMessages({
                ads: this.ads,
                searchbar: this.searchbar,
                safeSearch: this._showSafeSearch,
                siteSearch: iqs,
                bangs: b.Data.bangs && b.Data.bangs.suggestion,
                "$el": $("#message")
            });
            var e = $(".js-lazyload-favicon");
            for (var g = 0, h; h = e[g]; g++) {
                b.ImageLoader.register(h, b.services.getURL("icons") + h.getAttribute("data-src"), "scrollY")
            }
            b.duckbar.onReady();
            b.touchOrClick(".js-scroll-top-button", function(f) {
                f.stopPropagation();
                f.preventDefault();
                b.device.scrollTop(0, b.animation_speed)
            });
            this.serpRegion = new b.Views.Region.Switch({
                region: b.settings.region,
                appendTo: ".js-results-sidebar"
            });
            b.settings.region.on("change:id", function() {
                this.searchbar.requery()
            }.bind(this));
            b.is_zci_official_site = $(".zci-official-site").length
        },
        fallbackToDefaultAds: function() {
            this.views.ads && this.views.ads.fallbackToDefault()
        },
        onDeepStarted: function() {
            b.is_deep_started = new Date().getTime();
            b.duckbar.show("deep_start");
            if (b.settings.updater) {
                b.settings.updater.loadFonts()
            }
        },
        onDeepFinished: function() {
            b.is_deep_loaded = new Date().getTime();
            this.fallbackToDefaultAds();
            nutp("l_" + b.device.pixelId);
            !DDG.settings.isDefault("k1") && nutp("adb_off");
            b.duckbar.show("deep_end");
            b.make_official()
        },
        _onScroll: function(j) {
            if (b.settings.isDefault("kc")&&!b.device.isOpera) {
                nrb(j)
            }
            var g = b.hasClass("back-to-top-sidebar", "can-show"), h = b.device.scrollTop(), f = b.get_header_height();
            if (!g && h > f) {
                b.addClass("back-to-top-sidebar", $(".js-results-sidebar-mid"), "can-show")
            } else {
                if (g && h < f) {
                    b.removeClass("back-to-top-sidebar", $(".js-results-sidebar-mid"), "can-show")
                }
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Pages.Base;
    b.Pages.Static = function(c) {
        a.call(this, c)
    };
    b.Pages.Static.prototype = $.extend({}, a.prototype, {
        pageType: "static",
        sideMenuOps: {
            hideThemes: true,
            showPress: true
        },
        ready: function() {
            if (location.pathname === "/about") {
                this.sideMenuOps.hideAbout = true
            } else {
                if (location.pathname === "/privacy") {
                    this.sideMenuOps.hidePrivacy = true
                } else {
                    if (location.pathname === "/tour") {
                        this.sideMenuOps.hideTour = true
                    } else {
                        if (location.pathname === "/app") {
                            this.sideMenuOps.hideApp = true
                        } else {
                            if (location.pathname === "/bang") {
                                this.sideMenuOps.hideBang = true
                            }
                        }
                    }
                }
            }
            a.prototype.ready.call(this);
            $(".js-show-header").click(function(c) {
                c.preventDefault();
                c.stopPropagation();
                this.searchbar.focus()
            }.bind(this));
            this.$anchors = $(".js-anchor");
            this.$anchorLinks = $(".js-anchor-link");
            this.$anchorLinks.on("click", this._onAnchorLinkClick.bind(this));
            this.$popouts = $(".js-popout");
            this.$popovers = $(".js-popover");
            this._createPopouts();
            this._createPopovers()
        },
        addTo: function(f, c) {
            var g = DDG.Utils.AddTo.getData();
            if (g[f]) {
                var e = new b.Views.AddTo({
                    appendTo: c,
                    data: g[f]
                })
            }
        },
        _onAnchorLinkClick: function(j) {
            j.preventDefault();
            var h = j.currentTarget.hash.substr(1), f = this.$anchors, c = "";
            for (var g = 0; f.length > g; g++) {
                if (f[g].name == h || f[g].id == h) {
                    c = $(f[g]);
                    break
                }
            }
            if (c) {
                b.device.scrollTop(c.offset().top, 500)
            }
        },
        _createPopouts: function() {
            this.views.popouts = [];
            var f, c, e = 0;
            for (; this.$popouts.length > e; e++) {
                f = $(this.$popouts[e]);
                c = f.find(".js-popout-link");
                this.views.popouts.push(new b.Views.Modals.Popout({
                    $el: f,
                    $link: c
                }))
            }
        },
        _createPopovers: function() {
            this.views.popovers = [];
            var f, c, e = 0;
            for (; this.$popovers.length > e; e++) {
                f = $(this.$popovers[e]);
                c = $(f.attr("data-js-selector"));
                this.views.popovers.push(new b.Views.Modals.Popover({
                    $el: f,
                    $link: c
                }))
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Pages.Static;
    b.Pages.Tour = function(c) {
        a.call(this, c)
    };
    b.Pages.Tour.prototype = $.extend({}, a.prototype, {
        ready: function() {
            a.prototype.ready.call(this);
            var c = $(".js-tour-img");
            DDG.ImageLoader.registerAll(c, "scrollY");
            this.slider1 = new DDG.Views.Slider({
                el: ".js-tour-1",
                items: ".js-tour-img",
                timeout: 5000
            });
            this.slider2 = new DDG.Views.Slider({
                el: ".js-tour-2",
                items: ".js-tour-img",
                timeout: 5000
            });
            this.slider3 = new DDG.Views.Slider({
                el: ".js-tour-3",
                items: ".js-tour-img",
                timeout: 5000
            });
            this.slider4 = new DDG.Views.Slider({
                el: ".js-tour-quotes",
                items: ".js-quote",
                timeout: 8000,
                animate: 1,
                nav: {
                    className: "tour-quote-nav"
                }
            })
        }
    })
}(DDG);
!function(b) {
    var a = b.Pages.Static;
    b.Pages.About = function(c) {
        a.call(this, c)
    };
    b.Pages.About.prototype = $.extend({}, a.prototype, {
        ready: function() {
            a.prototype.ready.call(this);
            var c = $(".js-lazyload"), f = $(".js-lazysvg"), e = $(".js-timeline-start");
            this.$timelineNav = $(".js-timeline-nav");
            DDG.ImageLoader.registerAll(c, "scrollY");
            DDG.ImageLoader.registerAll(f, "scrollY", {
                svg: true
            });
            if (Modernizr.touch) {
                var g = nrj("/js/build/hammer.min.js");
                g.onload = this._bindTouch.bind(this)
            }
            this.timeline = new DDG.Views.Slider({
                el: ".js-timeline-slider",
                items: ".js-timeline-item",
                slideEl: ".js-timeline-box",
                next: ".js-timeline-next",
                prev: ".js-timeline-prev",
                noLoop: 1,
                animate: 1,
                animateCallback: this._onTimelineAnimate.bind(this),
                nav: {
                    className: "js-timeline-nav-item",
                    bindOnly: true
                }
            });
            this.newsSlider = new DDG.Views.Slider({
                el: ".js-news-slider",
                items: ".js-news-item",
                slideEl: ".js-news-slider-wrap",
                animate: 1,
                nav: {
                    className: "js-news-nav",
                    bindOnly: true
                }
            });
            e.on("click", this._onTimelineStartClick.bind(this))
        },
        _bindTouch: function() {
            var c = this;
            Hammer(this.timeline.$el[0], {
                dragLockToAxis: true
            }).on("dragleft dragright swipeleft swiperight", c._onSwipe.bind(c, "timeline"));
            Hammer(this.newsSlider.$el[0], {
                dragLockToAxis: true
            }).on("dragleft dragright swipeleft swiperight", c._onSwipe.bind(c, "newsSlider"))
        },
        _onSwipe: function(f, c) {
            c.gesture.preventDefault();
            if (!f) {
                f = "timeline"
            }
            switch (c.type) {
            case"dragleft":
            case"swipeleft":
                this[f]._onNextClick();
                c.gesture.stopDetect();
                break;
            case"dragright":
            case"swiperight":
                this[f]._onPrevClick();
                c.gesture.stopDetect();
                break
            }
        },
        _onTimelineAnimate: function(c) {
            if (c === 0) {
                this.$timelineNav.css("margin-left", "")
            } else {
                this.$timelineNav.css("margin-left", "-" + (12 + this.timeline.$nav[c].offsetLeft) + "px")
            }
        },
        _onTimelineStartClick: function(c) {
            c.preventDefault();
            this.timeline.advanceSlides();
            this.timeline._timing = 8000;
            this.timeline._killTimer = 1;
            this.timeline.setTimer()
        }
    })
}(DDG);
!function(c) {
    var a = c.Pages.Static, b = "is-invisible";
    c.Pages.App = function(e) {
        a.call(this, e)
    };
    c.Pages.App.prototype = $.extend({}, a.prototype, {
        _toggleDeviceVisiblity: function() {
            var e = this.$devices.filter("." + b), f = this.$devices.not("." + b);
            f.addClass(b);
            setTimeout(function() {
                e.removeClass(b)
            }, 300)
        },
        ready: function() {
            a.prototype.ready.call(this);
            var e = $(".js-lazyload"), f = $(".js-lazysvg");
            this.$devices = $(".js-device");
            DDG.ImageLoader.registerAll(e, "scrollY");
            DDG.ImageLoader.registerAll(f, "scrollY", {
                svg: true
            });
            setInterval(this._toggleDeviceVisiblity.bind(this), 8000);
            this.reviewSlider = new DDG.Views.Slider({
                el: ".js-reviews-slider",
                items: ".js-review",
                timeout: 8000,
                animate: 1,
                nav: {
                    className: "review-nav"
                }
            })
        }
    })
}(DDG);
!function(c) {
    var b = c.Pages.Static, a = ".js-spread-callout", e = "is-hidden";
    c.Pages.Spread = function(f) {
        b.call(this, f)
    };
    c.Pages.Spread.prototype = $.extend({}, b.prototype, {
        ready: function() {
            b.prototype.ready.call(this);
            var f = $(".js-lazysvg");
            DDG.ImageLoader.registerAll(f, "scrollY", {
                svg: true
            });
            this._showHiddenContent()
        },
        _checkReferrer: function() {
            if (!d.referrer) {
                return true
            }
            var f = /^https?:\/\/(\w+\.)?(duckduckgo\.com|duck\.co)/;
            return f.test(d.referrer)
        },
        _showHiddenContent: function() {
            if (this._checkReferrer()) {
                $(a).removeClass(e)
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Pages.Static;
    b.Pages.DDH = function(c) {
        a.call(this, c)
    };
    b.Pages.DDH.prototype = $.extend({}, a.prototype, {
        ready: function() {
            a.prototype.ready.call(this);
            var c = $(".js-lazyload"), e = $(".js-lazysvg");
            DDG.ImageLoader.registerAll(c, "scrollY");
            DDG.ImageLoader.registerAll(e, "scrollY", {
                svg: true
            });
            this.heroSlider = new DDG.Views.Slider({
                el: ".js-hero-slides",
                items: ".js-hero-text",
                next: ".js-hero-slides-next",
                prev: ".js-hero-slides-prev",
                timeout: 8000,
                animate: 1,
                nav: {
                    className: "js-hero-img",
                    bindOnly: true,
                    noClick: true
                }
            });
            this.quoteSlider = new DDG.Views.Slider({
                el: ".js-ddh-quotes",
                items: ".js-quote",
                timeout: 8000,
                animate: 1,
                nav: {
                    className: "ddh-quote-nav"
                }
            })
        },
        initHeader: function() {},
        initSideMenu: function() {}
    })
}(DDG);
!function(b) {
    var a = b.Pages.Base;
    b.Pages.Settings = function(c) {
        this.$parent = typeof c.appendTo === "string" ? $(c.appendTo) : c.appendTo;
        a.call(this, c);
        b.require("settings", this._render.bind(this))
    };
    b.Pages.Settings.prototype = $.extend({}, a.prototype, {
        pageType: "settings",
        liveUpdater: true,
        sideMenuOps: {
            hideThemes: true,
            hideSettings: true
        },
        _render: function() {
            this.main = new b.Views.Settings.Main({
                settings: b.settings,
                appendTo: this.$parent
            })
        }
    })
}(DDG);
!function(f) {
    var e = f.Pages.Static, a = 1500, c = "header-wrap--fixed", b = "bang__nav--fixed";
    f.Pages.Bang = function(g) {
        this.model = new DDG.Models.BangList();
        e.call(this, g)
    };
    f.Pages.Bang.prototype = $.extend({}, e.prototype, {
        _layoutTemplate: "bang_layout",
        _render: function(g) {
            this.$wrap.append(DDG.exec_template(this._layoutTemplate, {
                numBangs: g.length
            }));
            this.$bangHeader = this.$wrap.find(".js-bang-header");
            this.$results = this.$wrap.find(".js-bang-results");
            this.$nav = this.$wrap.find(".js-bang-nav")
        },
        _updateNavOffset: function() {
            if (this._isNavFixed && this.$header.hasClass(c)) {
                this.$nav.css("top", this.$header.outerHeight())
            } else {
                this.$nav.css("top", 0)
            }
        },
        _showSearchWithQuery: function(g) {
            if (f.device.isIDevice) {
                f.device.scrollTop(0)
            } else {
                this.$header.addClass(c)
            }
            this.searchbar.focus();
            this.searchbar.$input.val(g);
            this.searchbar.$input.focus();
            this._updateNavOffset()
        },
        _onBangClick: function(g) {
            this._lastBangClicked = g;
            this._showSearchWithQuery("!" + g + " ")
        },
        _onSearchUnfocus: function() {
            this.$header.removeClass(c);
            this._updateNavOffset()
        },
        _onAboutBangClick: function(j) {
            j.preventDefault();
            j.stopImmediatePropagation();
            var h = $(j.currentTarget).data("query"), g = $(j.currentTarget).data("bang");
            this._lastBangClicked = g;
            this._showSearchWithQuery("!" + g + " " + h)
        },
        _updateDocHeight: function() {
            this._docHeight = f.$doc.height()
        },
        _updateNavFixThreshold: function() {
            this._navFixThreshold = this.$bangHeader.offset().top + this.$bangHeader.outerHeight()
        },
        _onModelFilter: function() {
            if (this._navFixThreshold && f.device.scrollTop() > this._navFixThreshold) {
                f.device.scrollTop(this._navFixThreshold - 10)
            } else {
                if (!this._navFixThreshold) {
                    this._updateNavFixThreshold()
                }
            }
        },
        _fixedNavOn: function() {
            this._isNavFixed = true;
            this.$nav.addClass(b);
            this.$results.css("padding-top", this.$nav.outerHeight());
            this._updateNavOffset()
        },
        _fixedNavOff: function() {
            this._isNavFixed = false;
            this.$results.css("padding-top", 0);
            this.$nav.removeClass(b);
            this._updateNavOffset()
        },
        _onScroll: function() {
            var g = f.device.scrollTop();
            if (g > this._navFixThreshold&&!this._isNavFixed) {
                this._fixedNavOn()
            } else {
                if (g < this._navFixThreshold && this._isNavFixed) {
                    this._fixedNavOff()
                }
            }
            if (this._docHeight - g < a) {
                this.results.showMoreResultSets()
            }
        },
        _onImageLoad: function() {
            if (this.$nav) {
                this._navFixThreshold = this.$nav.offset().top
            }
        },
        _onSubmit: function() {
            nutp("bscl_" + this.model.lastFilterUsed + "_" + this._lastBangUsed)
        },
        _addListeners: function() {
            this.searchbar.on("unfocus", this._onSearchUnfocus.bind(this));
            $(".js-about-bang-link").click(this._onAboutBangClick.bind(this));
            this.model.on("filter", this._onModelFilter.bind(this));
            this.results.on("clicked-bang", this._onBangClick.bind(this));
            this.results.on("added-results", this._updateDocHeight.bind(this));
            f.device.on("scroll", this._onScroll.bind(this));
            this.$header.find("form").submit(this._onSubmit.bind(this));
            f.device.on("resize", this._updateNavFixThreshold.bind(this));
            if (f.device.isIDevice) {
                this.$nav.find("select, input").focus(function() {
                    if (this._isNavFixed) {
                        this._fixedNavOff();
                        f.device.scrollTop(this._navFixThreshold)
                    }
                }.bind(this))
            }
        },
        ready: function() {
            e.prototype.ready.call(this);
            this.$wrap = $(".js-bangs-wrap");
            this.$header = $("#header_wrapper");
            this._docHeight = f.$doc.height();
            this._lastBangClicked = "";
            var g = $(".js-lazyload").on("load", this._onImageLoad.bind(this)), k = $(".js-lazysvg").on("load", this._onImageLoad.bind(this)), j = $(".js-lazyretina").on("load", this._onImageLoad.bind(this));
            DDG.ImageLoader.registerAll(g, "scrollY");
            DDG.ImageLoader.registerAll(k, "scrollY", {
                svg: true
            });
            DDG.ImageLoader.registerAll(j, "scrollY", {
                retinaPng: true
            });
            var h;
            if (DDG.Data.bangs.version) {
                h = "/bang.v" + DDG.Data.bangs.version + ".js"
            } else {
                h = "/bang.js"
            }
            $.getJSON(h, function(m) {
                this._render(m);
                this.model.setBangs(m);
                this.nav = new DDG.Views.Bang.Nav({
                    model: this.model
                });
                this.results = new DDG.Views.Bang.Results({
                    model: this.model
                });
                this._addListeners();
                this.model.resetFilter()
            }.bind(this))
        }
    })
}(DDG);
!function(env) {
    var queue = [];
    env.ready = function(fn, boost) {
        if ($.isReady) {
            return fn()
        }
        if (boost) {
            queue.unshift(fn)
        } else {
            queue.push(fn)
        }
    };
    $(document).ready(function() {
        var fn;
        while (fn = queue.shift()) {
            fn()
        }
        var $scripts = $(".script-run-on-ready");
        for (var i = 0; i < $scripts.length; i++) {
            var s = $scripts[i].innerHTML.replace(/\/\*|\*\/$/g, "");
            eval(s)
        }
    })
}(DDG);
!function(a) {
    a.services = {
        domain: "duckduckgo.com",
        icons: {
            sub: "icons",
            path: "/ip2/"
        },
        images: {
            sub: "images",
            path: "/iu/"
        },
        autocomplete: {
            sub: "ac",
            path: "/ac/"
        },
        getURL: function(e) {
            var c = this[e], b = a.device.isOnion;
            return b ? c.path : "//" + c.sub + "." + this.domain + c.path
        }
    }
}(DDG);
DDG.assets_loaded = [];
DDG.templates = {};
DDG.first_result = "r1-0";
DDG.is_deep_started = 0;
DDG.is_deep_loaded = 0;
DDG.is_header_fixed = true;
DDG.first_source = false;
DDG.last_selection = "";
DDG.animation_speed = 300;
DDG.isJSURL = function(a) {
    return !a || a === "javascript:;" || a === "#"
};
DDG.detect_intent_link = function(a) {
    var b = 0;
    if (ip && a.hostname == "itunes.apple.com") {
        b = 1
    } else {
        if (ia && a.hostname == "play.google.com") {
            b = 1
        }
    }
    return b
};
DDG.get_http_redirect = function(e) {
    var b = e.href;
    if ((!kd || kd == 1) && e.href.indexOf("/l/?")==-1&&!DDG.isInternalURL(e.href)&&!DDG.detect_intent_link(e)) {
        var c = b.match(/^https/) || DDG.device.isOnion, a = c ? "": "http://r.duckduckgo.com";
        b = a + "/l/?kh=-1&uddg=" + encodeURIComponent(e.href);
        nua("nul", e, 500)
    }
    return b
};
DDG.get_query_encoded = function() {
    return rq
};
DDG.get_query = function() {
    return decodeURIComponentSafe(rq)
};
DDG.get_is_safe_search = function() {
    return DDG.settings.isDefault("kp")
};
DDG.stem = function(a) {
    return a.replace(/(?:s)$/, "")
};
DDG.get_asset_path = function(b, a) {
    if (Spice && Spice.sharedir_map && Spice.sharedir_map[b]) {
        return "/share/" + Spice.sharedir_map[b].path + "/" + a
    }
    return "/share/spice/" + b + "/" + spice_version + "/" + a
};
DDG.get_now = function() {
    var a = new Date();
    return a.getTime()
};
DDG.report_bad_query = function() {
    var b = document.getElementById("feedback_modal_title");
    var a = "https://collect.duckduckgo.com/collect.js?type=relevancy&q=" + rq;
    if (rl) {
        a += "&region=" + rl
    }
    if (locale) {
        a += "&language=" + locale
    }
    a += "&safe=" + ((rp && rp == "-1")?-1 : 1);
    if (DDG.first_source) {
        a += "&source=" + DDG.first_source
    }
    nrj(a);
    b.innerHTML = "Thanks!"
};
DDG.get_twitter_image = function(a) {
    if (!a ||!a.profile_image) {
        return 
    }
    var e = d.createElement("div");
    e.id = "twitter_status";
    var c = d.createElement("a");
    c.href = "https://twitter.com/" + a.user + "/status/" + a.status;
    var b = nur("", "", DDG.getImageProxyURL(a.profile_image), 24, 24);
    if (b) {
        c.appendChild(b);
        e.appendChild(c);
        d.body.appendChild(e)
    }
};
DDG.display_twitter_status = function() {
    if (is_twitter) {
        var b = new RegExp("^(.*)/(.*)$");
        if (b.test(is_twitter)) {
            var c = RegExp.$1;
            var a = RegExp.$2;
            if (c && a) {
                nrj("/tw.js?user=" + c + "&status=" + a + "&callback=DDG.get_twitter_image")
            }
        }
    }
};
DDG.$win = $(window);
DDG.$doc = $(document);
DDG.$html = $("html");
DDG._$cache = {};
DDG.$ = function(a) {
    return DDG._$cache[a.toString()] || (DDG._$cache[a.toString()] = $(a))
};
DDG._$classCache = {};
DDG.addClass = function(c, b, a) {
    DDG._$classCache[c + a] = true;
    b.addClass(a)
};
DDG.removeClass = function(c, b, a) {
    delete DDG._$classCache[c + a];
    b.removeClass(a)
};
DDG.hasClass = function(b, a) {
    return DDG._$classCache[b + a]
};
DDG.toggleClass = function(c, b, a) {
    if (DDG.hasClass(c, a)) {
        DDG.removeClass(c, b, a)
    } else {
        DDG.addClass(c, b, a)
    }
};
DDG.get_header_height = function() {
    return typeof DDG._header_height !== "undefined" ? DDG._header_height : (DDG._header_height = DDG.$("#header_wrapper").outerHeight())
};
DDG.normalize_official = function(a) {
    var b = /^https?:\/\/(?:www.|)([^\/]+)\/?/;
    a = a.replace(b, "$1");
    return a
};
DDG.make_official = function() {
    var c = DDG.duckbar.isOfficialSiteValid();
    if (!c&&!DDG.is_zci_official_site) {
        return 
    }
    if (DDG.duckbar.activeTabId !== "about") {
        return 
    }
    if ($(".badge--official").length) {
        $(".badge--official").removeClass("is-hidden");
        return 
    }
    var b = $("#r1-0").find(".result__a");
    if (!b.length) {
        return 
    }
    var a = b.attr("href"), f = b.html(), g = f && f.split(/[\-|]/);
    if (!a ||!c ||!f) {
        return 
    }
    a = DDG.normalize_official(a);
    c = DDG.normalize_official(c);
    if (a !== c) {
        return 
    }
    var h = g[0];
    if (h.length > 53) {
        h = h.slice(0, 49) + "... "
    } else {
        h += " "
    }
    b.html(h);
    var e = l("Official Site");
    b.parent().before('<i class="result__badge  badge--official" title="' + e + '">' + e + "</i>")
};
DDG.add_official_snippet = function(g, e) {
    if (!$(".badge--official").length) {
        return 
    }
    var c = $("#r1-0");
    if (!c.length) {
        return 
    }
    if (DDG.settings.get("kf") == "-1") {
        c.find(".result__icon").addClass(".is-hidden")
    }
    var b = c.find(".result__a").attr("href");
    b = DDG.normalize_official(b);
    g = DDG.normalize_official(g);
    if (g != b) {
        return 
    }
    var a = c.find(".result__snippet");
    if (a.length) {
        return 
    }
    var f = c.find(".result__extras");
    if (!f.length) {
        return 
    }
    div = d.createElement("div");
    $(div).addClass("result__snippet");
    $(div).html(e);
    if (!DDG.settings.isDefault("kai")) {
        $(div).insertAfter(f);
        f.parent().addClass("result--url-above-snippet")
    } else {
        $(div).insertBefore(f)
    }
};
DDG.wrapLinkClicks = function(a, b) {
    b = b || {};
    a = (typeof a === "string") ? $(a) : a;
    a.each(function(c, e) {
        if (DDG.isInternalURL(e.href)) {
            return 
        }
        if (kn && kn == "1") {
            e.target = "_blank"
        }
        $(e).on("click", function(f) {
            b.beforeFn && b.beforeFn();
            b.nutp && nutp(b.nutp);
            return nrl(f, this)
        })
    })
};
DDG.unwrapLinkClicks = function(a) {
    a = (typeof a === "string") ? $(a) : a;
    a.each(function(b, c) {
        $(c).off("click")
    })
};
DDG.touchOrClick = function(f, e, c) {
    c = typeof e === "object" ? e : c || {};
    e = typeof e === "function" ? e : null;
    var a, b = c.namespace || "touchOrClick";
    f = (typeof f === "string") ? $(f) : f;
    if (e) {
        if (Modernizr.touch) {
            f.on("touchstart." + b, function(g) {
                a = DDG.get_now();
                e(g)
            });
            f.on("click." + b, function(h) {
                var g = DDG.get_now();
                if (!a || (g - a) > 1000) {
                    a = 0;
                    return e(h)
                }
                a = 0;
                h.preventDefault();
                h.stopPropagation();
                return false
            })
        } else {
            f.on("click." + b, e)
        }
    } else {
        if (Modernizr.touch) {
            f.off("touchstart." + b);
            f.off("click." + b)
        } else {
            f.off("click." + b)
        }
    }
};
DDG.tap = function(c, m, a) {
    a = a || {};
    c = typeof c === "string" ? $(c) : c;
    var h, g, o, n, b, f, k = a.pxThreshold || 20, e = a.namespace || "tap", j = function() {
        h = g = o = n = b = f = 0
    };
    if (m) {
        c.on("touchstart." + e, function(p) {
            j();
            var q = p.originalEvent.touches && p.originalEvent.touches[0];
            if (q) {
                b = DDG.get_now();
                h = q.clientX;
                g = q.clientY
            }
        });
        c.on("touchmove." + e, function(p) {
            var q = p.originalEvent.touches && p.originalEvent.touches[0];
            if (q) {
                o = q.clientX;
                n = q.clientY
            }
        });
        c.on("touchend." + e, function(p) {
            if ((h && g&&!(o && n)) || (Math.abs(o - h) < k && Math.abs(n - g) < k)) {
                f = true;
                m.call(this, p)
            }
        });
        c.on("click." + e, function(p) {
            if (f) {
                p.preventDefault();
                p.stopPropagation();
                j();
                return false
            } else {
                if (a.fallbackToClick) {
                    j();
                    m.call(this, p)
                }
            }
        })
    } else {
        c.off("touchstart." + e);
        c.off("touchmove." + e);
        c.off("touchend." + e);
        c.off("click." + e)
    }
};
function nutp(b) {
    if (!DDG.duckpan) {
        var a = Math.ceil(Math.random() * 10000000);
        return $('<img src="/t/' + b + "?" + a + '"/>')
    }
}
function nua(j, k, h, g, b, e, c, a) {
    if (!b) {
        b = tr.length;
        tr[b] = k
    }
    if (!h) {
        h = 10
    }
    if (!g) {
        setTimeout(j + "(tr[" + b + "]," + e + "," + c + "," + a + ");", h)
    } else {
        if (!tsl) {
            tsl = ts.length;
            setTimeout(j + "(tr[" + b + "]," + e + "," + c + "," + a + ");tsl=0", 10)
        } else {
            setTimeout("nua(" + j + ",0,1," + b + "," + e + "," + c + "," + a + ")", 100)
        }
    }
}
function nkdc(a) {
    var b;
    if (a) {
        b = a.ctrlKey
    }
    return b
}
function nkdm(a) {
    var b;
    if (!ie && a) {
        b = a.metaKey
    }
    return b
}
function nkdt(a) {
    var b;
    if (a) {
        b = a.altKey
    }
    return b
}
function nkds(a) {
    var b;
    if (a) {
        b = a.shiftKey
    }
    return b
}
function nrl(b, a) {
    var c, e;
    b = b || window.event;
    fl = 1;
    c = nkdc(b) || nkdm(b) || "";
    if (!c && kn && kn == "1" && a && a.href&&!DDG.isInternalURL(a.href)) {
        c = 1
    }
    if (!c && (nkds(b) || fm || b.button && ((!ie || ie9 || ie10p) && b.button == 1 || ie && b.button == 4))) {
        c = 1
    }
    if (c) {
        a.href = DDG.get_http_redirect(a);
        if (nkds(b)&&!ie&&!is) {
            nua("nug", a.href, "", "", "", c);
            return false
        } else {
            return true
        }
    } else {
        e = DDG.get_http_redirect(a);
        nua("nug", e);
        return false
    }
}
function nul(b) {
    var a, c;
    var a = b.href.indexOf("/l/?kh=-1&uddg=");
    if (a!=-1) {
        c = decodeURIComponent(b.href.substring(a + 15))
    }
    if (c) {
        b.href = c
    }
    fl = 0
}
function nuo(e, c) {
    DDG.device.scrollTop(e || 0, c)
}
function nrg(h, b, e, f, c) {
    var a, g;
    if (!b) {
        b = 0
    }
    e = e || window.event;
    if (!c) {
        c = h.getElementsByTagName("a")[0]
    }
    if (!f) {
        f = nkdc(e) || nkdm(e) || fn
    }
    if (!f && kn && kn == "1") {
        f = 1
    }
    if (is_mobile_device) {
        if (rc && rc != h) {
            nro(rc)
        }
        nrv(h);
        rc = h
    }
    if (!DDG.isJSURL(c.href)) {
        h && nhr(h.id);
        if (fl) {
            fl = 0
        } else {
            fl = 1;
            a = DDG.get_http_redirect(c);
            if (f) {
                nug(a, f)
            } else {
                nua("nug", a, "", "", "", f)
            }
        }
    } else {
        if (fl) {
            fl = 0
        } else {
            if (DDG.isJSURL(c.href)) {
                c.onclick()
            }
        }
    }
}
function nug(e, g) {
    var b, c, f, a;
    fl = 0;
    fn = 0;
    a = "";
    if (window.getSelection) {
        a = window.getSelection().toString()
    } else {
        if (document.selection) {
            a = document.selection.createRange();
            a = a.text
        }
    }
    var h = a == DDG.last_selection ? 1: 0;
    DDG.last_selection = a;
    if (!h) {
        return false
    }
    if (g) {
        window.open(e)
    } else {
        if (w.postMessage&&!is&&!ip&&!is_konqueror && kg != "p" && (!kd || kd == 1)) {
            b = document.getElementById("iframe_hidden");
            b.contentWindow.postMessage("ddg:" + e, location.protocol + "//" + location.hostname)
        } else {
            if ((ie || ip || ir || is || im) && e.indexOf("http")!=-1 && kg != "p" && (!kd || kd == 1)) {
                if (d.getElementById("iframe_hidden")) {
                    d.body.removeChild(d.getElementById("iframe_hidden"))
                }
                c = "<html><head><meta name='referrer' content='origin'></head><body><script language='JavaScript'>parent.window.location.href=\"" + e + '";<\/script></body></html>';
                b = d.createElement("iframe");
                b.id = "iframe_hidden";
                d.body.appendChild(b);
                f = b.document;
                if (b.contentDocument) {
                    f = b.contentDocument
                } else {
                    if (b.contentWindow) {
                        f = b.contentWindow.document
                    }
                }
                f.open();
                f.writeln(c);
                f.close()
            } else {
                w.location = e
            }
        }
    }
}
function nrv(a, h, q, c) {
    if (!a) {
        return false
    }
    var g, n, r, o, m, k, f, j, p, e;
    g = a;
    a = a.parentNode;
    if (g.id == "r1-" + (parseInt(r1c) - 1)) {
        if (!il && nrb && (!kc || kc != "-1")) {
            nrb("", 1)
        }
    }
    if (!h) {
        var b = $(g);
        if (!b.hasClass("highlight")) {
            b.addClass("highlight");
            if (b.hasClass("highlight_sponsored")) {
                b.addClass("highlight_sponsored_hover")
            }
            n = nun(g);
            o = b.offset().top;
            m = DDG.device.scrollTop();
            if (c && n&&!fq && o > m) {
                n.focus();
                n.onclick = function(s) {
                    return nrl(s, this)
                }
            }
        }
    }
}
function nun(a) {
    return a.getElementsByTagName("a")[0]
}
function nro(j) {
    var h, f, e, b, g, c;
    if (!j) {
        return false
    }
    var a = $(j);
    if (a.hasClass("highlight")) {
        a.removeClass("highlight");
        if (a.hasClass("highlight_sponsored_hover")) {
            a.removeClass("highlight_sponsored_hover")
        }
        h = nun(j);
        if (h&&!fq) {
            h.blur()
        }
    }
}
function nrm(f, e) {
    var s, k, h, b, m, p, g, a, c, j, n, r, q, t, o;
    if (fq) {
        return false
    }
    if (fo) {
        setTimeout("nrm(" + f + ",'" + e + "')", 100);
        return false
    }
    fo = 1;
    s = new RegExp("r(\\d+)-(\\d+)");
    k = new RegExp("rl([ei])(\\d+)-(\\d+)");
    h = new RegExp("rld-(\\d+)");
    if (e) {
        if (s.test(e)) {
            b = RegExp.$1 || 0;
            m = RegExp.$2 || 0
        } else {
            if (e == "zero_click_wrapper" || e == "did_you_mean") {
                b = 1;
                m =- 1
            } else {
                fo = 0;
                return false
            }
        }
    } else {
        if (rc && rc.id == "zero_click_wrapper") {
            b = 1;
            m =- 1
        } else {
            if (rc && rc.id == "did_you_mean") {
                b = 1;
                m =- 1
            } else {
                if (rc && s.test(rc.id)) {
                    b = RegExp.$1 || 0;
                    m = RegExp.$2 || 0
                } else {
                    if (rc && k.test(rc.id)) {
                        b = rs ? 1 : 2;
                        n = 1
                    } else {
                        if (rc && h.test(rc.id)) {
                            b = 1;
                            n = 1
                        } else {
                            rc = d.getElementById(DDG.first_result);
                            if (!rc) {
                                rc = d.getElementById("zero_click_wrapper")
                            }
                            if (!rc) {
                                rc = d.getElementById("did_you_mean")
                            }
                            if (!rc) {
                                fo = 0;
                                return false
                            } else {
                                m = 0;
                                b = 1
                            }
                        }
                    }
                }
            }
        }
    }
    switch (f) {
    case 1:
        if (rc && rc.id && rc.id == DDG.first_result&&!$(rc).hasClass("highlight")) {} else {
            m++
        }
        break;
    case 2:
        m--;
        break;
    case 3:
        b++;
        m = 0;
        break;
    case 4:
        b--;
        m = 0;
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        m++;
        break;
    default:
        m++
    }
    a = "r" + b + "-" + m;
    if (m<=-1) {
        if (d.getElementById("did_you_mean")) {
            a = "did_you_mean"
        } else {
            a = "zero_click_wrapper"
        }
    }
    c = d.getElementById(a);
    j = 0;
    if (e) {
        j = d.getElementById(e)
    }
    if (f == 1 && b == 2&&!c && r1c) {
        a = DDG.first_result;
        c = d.getElementById(a)
    }
    o = DDG.device.scrollTop();
    if (f == 1) {
        if ($("#" + a).length > 0) {
            t = $("#" + a).offset().top
        }
        if (t && (t < o || t > (o + viewport_height))) {
            p = 0;
            while (p>-1) {
                g = d.getElementById("r1-" + p);
                if (!g) {
                    break
                }
                t = $(g).offset().top;
                if (t - 90 < o) {
                    p++
                } else {
                    c = g;
                    break
                }
            }
        }
    }
    if (f == 2 && a !== "zero_click_wrapper") {
        if ($("#" + a).length > 0) {
            t = $("#" + a).offset().top
        }
        if (t < o || t > (o + viewport_height)) {
            p = r1c - 2;
            while (p > 0) {
                g = d.getElementById("r1-" + p);
                t = $(g).offset().top;
                if (!g) {
                    break
                }
                if (t > (o + viewport_height)) {
                    p--
                } else {
                    c = g;
                    break
                }
            }
        }
    }
    if (j&&!c && f == 7 && j.nextSibling && j.nextSibling.firstChild) {
        if (j.nextSibling.firstChild.onclick) {
            j.nextSibling.firstChild.onclick()
        }
        fo = 0;
        return 
    } else {
        if (!j&&!c && f == 7 && rc && rc.nextSibling && rc.nextSibling.firstChild) {
            if (rc.nextSibling.firstChild.onclick) {
                rc.nextSibling.firstChild.onclick()
            }
            fo = 0;
            return 
        }
    }
    if ((a == "zero_click_wrapper" || a == "did_you_mean") && $(c).css("display") == "none") {
        fo = 0;
        return 
    }
    if (n) {
        switch (f) {
        case 1:
            if (b == 2) {
                c = rc.nextSibling.nextSibling;
                if (!c) {
                    a = DDG.first_result;
                    c = d.getElementById(a)
                } else {
                    if ($(c).css("display") == "none") {
                        c = c.nextSibling.firstChild;
                        if (!c.id && c.nextSibling) {
                            c = c.nextSibling
                        }
                    }
                }
            } else {
                if (b == 1 && rc.nextSibling.nextSibling) {
                    c = rc.nextSibling.nextSibling.nextSibling
                } else {
                    if (1) {
                        a = DDG.first_result;
                        c = d.getElementById(a)
                    } else {
                        c = rc.nextSibling.firstChild
                    }
                }
            }
            break;
        case 2:
            c = rc.previousSibling.previousSibling;
            if ($(c).css("display") == "none") {
                c = c.nextSibling.lastChild
            }
            break;
        case 4:
            break;
        case 7:
            if (rc.nextSibling.nextSibling) {
                c = rc.nextSibling.nextSibling.nextSibling
            } else {
                c = rc.nextSibling.firstChild
            }
            break;
        default:
            fo = 0;
            return false
        }
    }
    if (c) {
        if (b == 1 && k.test(c.id)) {
            c = c.nextSibling.firstChild
        }
        if (f != 7) {
            if (rc) {
                nua("nro", rc)
            }
        }
        if (f != 5 && (b == 2 || rs) && $(c.parentNode).css("display") == "none") {
            r = c;
            while (r.parentNode.id != "zero_click_topics" && r.parentNode.id != "links" && r.parentNode.id != "content") {
                r = r.parentNode;
                if (!q && $(r).css("display") == "block") {
                    q = r
                }
            }
            if (q && n) {
                c = r.nextSibling.nextSibling
            } else {
                if ($(r).css("display") == "none") {
                    c = r.previousSibling
                } else {
                    if (r.nextSibling && $(r.nextSibling).css("display") == "block") {
                        c = q.lastChild.previousSibling
                    } else {
                        if (f == 2 && r.previousSibling) {
                            c = r.previousSibling
                        } else {
                            if (f == 1 && r.nextSibling && $(r.nextSibling).css("display") == "none") {
                                c = r.nextSibling.nextSibling.firstChild.nextSibling
                            } else {
                                if (f == 1&&!r.nextSibling) {
                                    c = r.previousSibling
                                }
                            }
                        }
                    }
                }
            }
            if (k.test(c.id) && rs && RegExp.$1 == "e") {
                c = c.nextSibling.firstChild
            }
        }
        nua("nrv", c, 0, 1, 0, f == 7 ? 1 : 0, f == 5 || f == 7 ? 1 : 0, 1);
        if (f != 7) {
            rc = c
        }
        if (f != 7 && rc && rc.id) {
            if (fk && (m > 6 || f == 2)) {
                if (!io) {
                    nua("nrs", rc, 0, 1, 0, 1, f == 5 ? 0 : f == 1 ? 1 : - 1)
                } else {
                    nrs(rc, 1, f == 5 ? 0 : f == 1 ? 1 : - 1)
                }
            } else {
                if (!io) {
                    nua("nrs", rc, 0, 1)
                } else {
                    nrs(rc, 0, 0)
                }
            }
        }
    } else {
        if (b == 1 && a != "zero_click_wrapper" && a != "did_you_mean"&&!ieof && (!rs ||!it)&&++ci < 20) {
            nrv(d.getElementById("r1-" + parseInt(r1c - 1)), 1);
            setTimeout("nrm(" + f + ",'" + e + "')", 100)
        }
    }
    if (io && f == 1 && nrb) {
        nrb()
    }
    fo = 0
}
function nrs(b, f, e) {
    var g, a, c, j, h;
    g = $(b).offset().top;
    c = $(b).outerHeight();
    a = DDG.device.scrollTop();
    h = viewport_height / 2;
    if (!c || g == a) {
        return 
    }
    if (f || g + c + 10 > viewport_height + a || g - 10 < a) {
        j = g - h;
        if (!e || e == 1 && g - a > h || e==-1 && g - a < h) {
            DDG.device.scrollTop(j)
        }
    }
}
function nki(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (rii) {
        nrm(5, rii)
    }
}
function nkr(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1
}
function nkda(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(1)
}
function nkua(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(2)
}
function nke(c) {
    if (fq) {
        if ($("#bang").css("display") == "block") {
            nbb(d.getElementById("bang"))
        }
        return false
    }
    if (c && (nkdc(c) || nkdm(c) || nkds(c) || nkdt(c) || fa)) {
        return false
    }
    fk = 1;
    if (rc && (!kn || kn != "1")) {
        var b = new RegExp("rl([ei])(\\d+)-(\\d+)");
        var a = new RegExp("^r2-(\\d+)$");
        if (rc.id && b.test(rc.id)) {
            if (a.test(rc.nextSibling.firstChild.id)) {
                rc = rc.nextSibling.firstChild
            } else {
                rc = rc.nextSibling.firstChild.nextSibling
            }
            nrv(rc)
        } else {
            rc.click()
        }
    }
}
function nko(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (rc) {
        rc.click()
    }
}
function nkt(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    rc = "";
    DDG.device.scrollTop(0)
}
function nkd(b) {
    if (fq) {
        return false
    }
    if (b && (nkdc(b) || nkdm(b) || nkds(b) || nkdt(b) || fa)) {
        return false
    }
    fk = 1;
    var a = rc.getElementsByTagName("a");
    nrg(rc, null, null, null, a[a.length - 1])
}
function nkn(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    fn = 1;
    if (rc) {
        rc.click()
    }
}
function nkm(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (d.getElementById(DDG.first_result)) {
        nrm(5, DDG.first_result)
    }
}
function nkex(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1
}
function nksb(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (!il && nrb) {
        nrb()
    }
}
function nksp(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(5, "did_you_mean")
}
function nks(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || fa)) {
        return false
    }
    fk = 1;
    setTimeout("d.x.q.focus()", 10);
    setTimeout("d.x.q.select()", 15);
    if (ko && ko == "s") {
        setTimeout(function() {
            DDG.device.scrollTop(0)
        }, 10)
    }
}
function nhs(a) {
    nrm(5, a)
}
function nhr(a) {
    d.getElementById("state_hidden").value = a
}
function nrp(f, g, h) {
    var a, j, e;
    if (!f) {
        return false
    }
    var c = d.getElementById("zero_click_abstract");
    var b = d.getElementById("did_you_means");
    if (!d.getElementById("special_page_header") && (!c || $("#zero_click_abstract").css("display") == "none" || h == 1) && $("#did_you_means").css("display") == "none") {
        e = f.replace(/%20/i, "+");
        if (d.referrer.indexOf(e)!=-1 && e.indexOf("duckduck")==-1) {
            return false
        }
        var j = d.createElement("div");
        j.id = "did_you_mean";
        j.innerHTML = "<b>" + l("Did you mean") + " </b>";
        j.className = "msg msg--result msg--spelling";
        link = d.createElement("a");
        link.innerHTML = decodeURIComponentSafe(g);
        link.href = "/?q=" + f + (rv ? "&v=" + rv : "") + (kurl ? kurl : "");
        link.onclick = function() {
            nutp("sp_" + f);
            fl = 1
        };
        j.appendChild(link);
        j.appendChild(d.createTextNode("?"));
        $(j).addClass("highlight_s");
        a = b;
        a.insertBefore(j, a.firstChild);
        $(b).css("display", "block");
        if (nir) {
            nir("s")
        }
    }
}
function nrn(au, H) {
    if (!au ||!H) {
        return 
    }
    var N, aq, am, ak, aj, ai, J, g, B, A, v, u, k, Q, ac, h, ap, ag, r, q, at, ao, an, V, b, s, af, aa, Z, X, C, o, P, O, G, Y, E, U, ab, ad, ae, M, I, ah;
    r = new RegExp("^.*?//(?:ww[\\dw]+s?\\.|)([^/?:#]+)");
    A = v = u = ab = ad = "";
    switch (au) {
    case"d":
        ap = "1";
        h = d.getElementById("links");
        ag = r1c;
        break;
    case"a":
        ag = r3c;
        ap = "a";
        if (!ag) {
            h = d.getElementById("ads")
        } else {
            var W = DDG.page.ads.hasSiteLinks(H) ? "has-ad--sitelinks": "", a = H.length > 1&&!DDG.device.isMobile ? "has-ad--x2": "", c = $('<div class="results--ads has-ad ' + a + " " + W + '"></div>');
            $("#links").append(c);
            h = c[0]
        }
        break
    }
    C = H.length;
    if (au == "a" && DDG.page.ads.isBlocked()) {
        return 
    }
    if (au == "a"&&!DDG.page.ads.hasAds() && DDG.is_deep_loaded && DDG.get_now() - DDG.is_deep_loaded > 500) {
        return 
    }
    if (au == "a"&&!ag) {
        DDG.page.ads.setAds(H)
    }
    if (au == "a") {
        nutp("ad_" + (H[0].s || "default"))
    }
    if (rq.indexOf("site%3A")!=-1) {
        iqs = 1
    }
    ae = au == "d" && rds == 30 ? 1 : 0;
    if (ae) {
        DDG.page.onDeepStarted()
    }
    var m = "";
    var S = DDG.duckbar.maybeOfficialSite();
    if (au == "d" && ae && (r1c || rad)) {
        for (ao = 0; ao < ag; ao++) {
            var T = $("#r1-" + ao + " a");
            for (an = 0; an < T.length; an++) {
                if ($(T[an]).hasClass("result__url")) {
                    if (r.test(T[an].href)) {
                        rd[RegExp.$1] = T[an].href;
                        var F = $(T[an]).find(".result__url__domain").text();
                        if (ao == 0) {
                            m = F;
                            rd[F] = 1
                        }
                        if (kf && (kf == "w" || kf == "fw" || kf == "b") && ae&&!rs) {
                            ad += (ad ? "," : "") + RegExp.$1 + ":r1-" + ao
                        }
                    }
                }
            }
        }
    }
    if (!C && (au == "r" && rsc <= 0 || au == "d" && rv == "d")) {
        if (au == "d"&&!r1c) {
            aq = d.getElementById("rfd");
            $(aq).css("display", "none")
        }
        au = "r";
        H.x = new Array();
        H.x["t"] = "EOH"
    }
    G = 0;
    if (au == "d" && (H[C - 1]["t"] == "EOP" || H[C - 1]["t"] == "EOF")) {
        G = 1;
        ieof = 1;
        il = 1;
        if (H[C - 1]["t"] == "EOP") {
            G = 2
        }
    }
    if (au == "d") {
        $(".js-results-loading").remove();
        if (H.length > 1) {
            $(".js-result-sep.is-hidden").removeClass("is-hidden")
        }
    }
    V = b = o = P = O = 0;
    for (var N = 0; N < H.length; N++) {
        V++;
        E = 0;
        if (!H[N]) {
            continue
        }
        if (!DDG.settings.isDefault("k1") && H[N]["p"]) {
            continue
        }
        if (au == "a" && is_mobile && N > 0) {
            continue
        }
        if (!I && au == "d" && H[N]["k"]) {
            I = N
        }
        if (V == 1 && rv == "i") {
            setTimeout('top.location.replace("' + H[N]["u"] + '")', 100);
            return 
        }
        var al = H[N]["u"] || "";
        var R = H[N]["d"] || "";
        R = R.split("/");
        var s = R.shift() || "";
        var af = R.join("/") || "";
        Y = 0;
        if (au == "d" && H[N]["t"] == "EOP") {
            Y = 1;
            continue
        } else {
            if (au == "d" && H[N]["t"] == "EOF") {
                Y = 1;
                continue
            }
        }
        if (au == "d"&&!Y&&!H[N]["p"]) {
            if (!s || ((m || S) && rd[s]) || rd[H[N]["u"]]) {
                if (m && rd[s]) {
                    DDG.add_official_snippet(H[N]["c"], H[N]["a"])
                }
                if (b == 0 && V == C&&!ae) {
                    nrj("/l.js?q=" + rq);
                    G = 1
                }
                if (V == C) {
                    E = 1
                } else {
                    continue
                }
            } else {
                rd[s] = H[N]["u"];
                rd[H[N]["u"]] = H[N]["u"]
            }
            if (N == (H.length - 1) && H[N]["n"]) {
                DDG.page.deepNextURL = H[N]["n"]
            }
        }
        if (rv == "d" && au == "d") {
            rsc++;
            nrj("/r.js?u=" + encodeURIComponent(H[N]["c"]) + "&q=" + rq + (!DDG.settings.isDefault("kp") ? "&p=1" : ""));
            if (ag != 0) {
                continue
            }
        }
        if (!E) {
            b++;
            aq = d.createElement("div");
            aq.id = "r" + ap + "-" + ag++;
            $(aq).addClass("result results_links" + (au == "d"&&!H[N]["h"] ? "_deep" : "") + " highlight_" + au);
            if (au == "d") {
                var n = H[N]["t"] + " " + H[N]["a"];
                if (kf && (kf == "w" || kf == "fw" || kf == "b") && s&&!Y) {
                    ad += (ad ? "," : "") + s + ":" + aq.id
                }
            }
            if (au == "i"&&!rii) {
                rii = aq.id
            } else {
                if (au == "n"&&!rin) {
                    rin = aq.id
                } else {
                    if (au == "t"&&!rir) {
                        rir = aq.id
                    }
                }
            }
        }
        if (au == "d"&&!G && V == C&&!o || au == "r" && rsc <= 0) {
            am = d.createElement("div");
            $(am).addClass("result  result--more");
            g = d.createElement("a");
            g.href = "javascript:;";
            g.onclick = function() {
                nsr(this)
            };
            if (au == "d" || au == "r") {
                g.className = "result__a";
                if (au == "d") {
                    am.id = "rld-" + ++rdc
                } else {
                    if (au == "r") {
                        am.id = "rle0-1"
                    }
                }
                if (au == "r"&&!r1hc) {
                    g.appendChild(d.createTextNode(l("Get Web links") + "..."))
                } else {
                    g.appendChild(d.createTextNode(l("Load More")));
                    g.className = "result--more__btn  btn  btn--alt  btn--full"
                }
            } else {
                if (au == "t") {
                    am.id = "rli1-" + ++rtc;
                    g.appendChild(d.createTextNode(l("More Related Topics") + "..."))
                }
            }
            am.appendChild(g);
            if (au == "r"&&!E) {
                o = am;
                O = ak
            } else {
                if (au == "r") {
                    h.appendChild(ak)
                }
                h.appendChild(am)
            }
            am = d.createElement("div");
            if (au == "d") {
                am.id = "rrd-" + rdc
            } else {
                if (au == "r") {
                    am.id = "rre0-1"
                } else {
                    if (au == "t") {
                        am.id = "rri1-" + rtc
                    }
                }
            }
            $(am).css("display", "none");
            if (au == "r") {
                ak = d.createElement("div");
                ak.id = "r" + ap + "-" + ag++;
                am.appendChild(ak)
            }
            if (au == "r"&&!E) {
                P = am
            } else {
                h.appendChild(am);
                h = am;
                o = 1;
                if (au == "r" && ag <= 6) {
                    nua("nsr", h.previousSibling.firstChild, 0, 0, 0, 1)
                }
            }
        }
        if (E) {
            continue
        }
        h.ig = "result__icon__img";
        var p = "";
        if ((au == "d" || au == "r" || (au == "a" && C == 1)) && H[N]["i"] != "") {
            p = d.createElement("span");
            p.className = "result__icon";
            if (kf == "-1") {
                p.className += " is-hidden"
            }
            if (au != "a") {
                var e = H[N]["i"];
                Q = l("Search domain %s", e)
            }
            if (nur) {
                var f = typeof H[N]["i"] === "string" && H[N]["i"].indexOf("http") == 0 ? "/iu?u=" + H[N]["i"]: DDG.get_favicon_url(H[N]["i"]);
                k = nur(h.ig, Q, f, 16, 16)
            }
            if (k) {
                k.className = h.ig;
                if (au == "a") {
                    p.appendChild(k)
                } else {
                    g = d.createElement("a");
                    g.href = (iqs ? "/?q=" + rq : "/?q=" + rq + "+site:" + H[N]["i"]) + (kurl ? kurl : "");
                    g.title = Q;
                    g.appendChild(k);
                    g.onclick = function() {
                        fl = 1
                    };
                    p.appendChild(g)
                }
            }
        }
        am = d.createElement("div");
        $(am).addClass("result__body  links_" + (ap == 1 || ap == "a" ? "main" : "zero_click"));
        if ((au == "d" || au == "a")&&!H[N]["h"]) {
            $(am).addClass("links_deep")
        }
        if (au != "r") {
            g = d.createElement("a");
            check = d.createElement("a");
            if (au == "d" || au == "a") {
                g.className = "result__a";
                check.className = "result__check";
                check.innerHTML = '<span class="result__check__tt">' + l("Your browser indicates if you've visited this link") + "</span>"
            }
            g.href = H[N]["c"];
            check.href = H[N]["c"];
            if (kn && kn == "1" && g && g.href && g.getAttribute("href").indexOf("http")!=-1) {
                g.target = "_blank";
                check.target = "_blank"
            }
            M = d.createElement("h2");
            M.className = "result__title";
            g.innerHTML = H[N]["t"];
            B = g;
            M.appendChild(g);
            M.appendChild(check);
            am.appendChild(M);
            if (H[N]["o"]) {
                var ah = $("#r1-0 .badge--official");
                if (!ah ||!ah[0] || ah.length == 0) {
                    ah = d.createElement("span");
                    ah.className = "result__badge  badge--official";
                    ah.innerHTML = ah.title = l("Official Site");
                    am.insertBefore(ah, M)
                }
            }
        }
        if (au == "d" || au == "a") {
            if (H[N]["h"] && H[N]["a"]) {
                J = d.createElement("span");
                J.innerHTML = " " + H[N]["a"];
                am.appendChild(J)
            } else {
                if (H[N]["a"]) {
                    aj = d.createElement("div");
                    aj.className = "result__snippet";
                    if (au == "a") {
                        v = d.createElement("a");
                        v.href = H[N]["c"];
                        if (kn && kn == "1" && v.getAttribute("href").indexOf("http")!=-1) {
                            v.target = "_blank"
                        }
                        $(v).html(H[N]["a"]);
                        aj.appendChild(v)
                    } else {
                        aj.innerHTML = H[N]["a"]
                    }
                    am.appendChild(aj)
                }
            }
            ak = d.createElement("div");
            ak.className = "result__extras";
            ai = d.createElement("div");
            ai.className = "result__extras__url";
            if (p) {
                ai.appendChild(p)
            }
            ak.appendChild(ai);
            A = d.createElement("a");
            A.className = "result__url";
            A.href = H[N]["c"];
            if (kn && kn == "1" && A.getAttribute("href").indexOf("http")!=-1) {
                A.target = "_blank"
            }
            if (au !== "a") {
                link3text1 = d.createElement("span");
                link3text1.className = "result__url__domain";
                link3text1.appendChild(d.createTextNode(s));
                link3text2 = d.createElement("span");
                link3text2.className = "result__url__full";
                if (af) {
                    link3text2.appendChild(d.createTextNode("/" + af))
                }
                A.appendChild(link3text1);
                A.appendChild(link3text2)
            } else {
                A.appendChild(d.createTextNode(H[N]["d"]))
            }
            ai.appendChild(A);
            if (H[N]["l"]) {
                J = d.createElement("span");
                J.className = "result__sitelinks";
                J.innerHTML = H[N]["l"];
                ak.appendChild(J);
                if (au == "a") {
                    var ar = $(J).find("a");
                    if (ar.length) {
                        ar.each(function() {
                            $(this).click(function(j, x) {
                                nutp("ad_" + j + "_c");
                                return nrl(x, this)
                            }.bind(this, H[N].s))
                        })
                    }
                }
            }
            if (!Y) {
                if (H[N]["e"]) {
                    J = d.createElement("span");
                    J.className = "result__menu  result__menu--show";
                    J.innerHTML = H[N]["e"];
                    ak.appendChild(J)
                }
                if (!iqs&&!H[N]["p"]) {
                    u = d.createElement("a");
                    u.href = iqs ? "/?q=" + rq : "/?q=" + rq + "+site:" + H[N]["i"];
                    if (kurl) {
                        u.href += kurl
                    }
                    var K = lp("additional_info_at", "More results"), e = H[N]["i"];
                    u.appendChild(d.createTextNode(K));
                    u.title = l("Search domain %s", e);
                    u.className = "result__menu";
                    ak.appendChild(u)
                } else {
                    if (H[N]["p"]) {
                        u = d.createElement("a");
                        u.href = "https://duck.co/help/company/advertising-and-affiliates";
                        u.onclick = function() {
                            fl = 1
                        };
                        var D = l("Ad");
                        u.appendChild(d.createTextNode(D));
                        u.className = "result__badge  badge--ad";
                        am.insertBefore(u, M);
                        aq.className += "  result--ad  highlight_sponsored  sponsored";
                        if (aq.id == DDG.first_result) {
                            DDG.first_result = "r" + ap + "-" + ag
                        }
                    }
                }
            }
            if (!aj ||!kai || kai != "1") {
                am.appendChild(ak)
            } else {
                am.insertBefore(ak, am.lastChild);
                am.className += " result--url-above-snippet"
            }
        } else {
            if (au == "t" && H[N]["a"] != "") {
                J = d.createElement("span");
                J.innerHTML = " - " + H[N]["a"];
                J.className = "hidden";
                $(J).css("display", "none");
                am.appendChild(J)
            } else {
                if (au == "i") {} else {
                    if (au == "r") {
                        $(am).addClass("result__snippet");
                        am.innerHTML += H[N]["a"] + "<br>";
                        g = d.createElement("a");
                        g.href = H[N]["c"];
                        if (kn && kn == "1" && g.getAttribute("href").indexOf("http")!=-1) {
                            g.target = "_blank"
                        }
                        g.innerHTML += "" + H[N]["d"];
                        am.appendChild(g);
                        if (H[N]["t"]) {
                            J = d.createElement("span");
                            $(J).addClass("result__url");
                            J.innerHTML += " [" + H[N]["t"] + "]";
                            am.appendChild(J)
                        } else {
                            J = d.createElement("span");
                            J.innerHTML += " ";
                            am.appendChild(J)
                        }
                    }
                }
            }
        }
        aq.appendChild(am);
        if (au == "t") {
            h.options[h.options.length] = new Option(H[N]["t"], H[N]["u"] + (rv ? "?v=" + rv : ""))
        } else {
            if (rv == "d" && au == "d") {
                am = d.getElementById("zero_click_answer") || d.getElementById("rfd") || "";
                if (am) {
                    if (am.id == "zero_click_answer") {
                        $(am).css("padding-bottom", "5px")
                    }
                    am.parentNode.insertBefore(aq, am.nextSibling)
                }
            } else {
                if (au == "i") {
                    h.insertBefore(aq, h.firstChild)
                } else {
                    h.appendChild(aq);
                    if (!rc && aq.id == DDG.first_result) {
                        rc = aq
                    }
                }
            }
        }
        if (au == "r" && o && P) {
            h.appendChild(O);
            h.appendChild(o);
            h.appendChild(P);
            h = o;
            if (ag <= 6) {
                nua("nsr", o.firstChild, 0, 0, 0, 1)
            }
        }
        if (au == "d" && b == 1) {
            U = 0;
            q = new RegExp("^r1-(\\d+)$");
            if (rc && q.test(rc.id)) {
                at = RegExp.$1
            }
            U = at == ag ? 1 : 0;
            if (fk && U && (!aq.previousSibling || aq.previousSibling.id.indexOf("r1-")==-1)) {
                nrm(6, aq.id)
            }
        }
        var t = function(j, x, y) {
            if (j === "a") {
                nutp("ad_" + x + "_c")
            }
            return nrl(y, this)
        };
        if (B) {
            B.onclick = t.bind(B, au, H[N].s)
        }
        if (A) {
            A.onclick = t.bind(A, au, H[N].s)
        }
        if (v) {
            v.onclick = t.bind(v, au, H[N].s)
        }
        if (u) {
            u.onclick = function(j) {
                return nrl(j, this)
            }
        }
        if (au == "i") {
            break
        }
    }
    if (au == "d" && H[0] && H[0]["s"]&&!d.getElementById("powered_by")) {
        DDG.first_source = H[0]["s"];
        am = d.createElement("div");
        am.id = "powered_by";
        am.className = "results--powered";
        for (var ao = 0; ao < H.length; ao++) {
            if (H[ao] && H[ao]["s"] && H[ao]["s"].indexOf("yandex")!=-1) {
                H[0]["s"] = "yandex"
            }
        }
        if (ag > 5 && H[0]["s"] && H[0]["s"] != "disco" && H[0]["s"] != "boss" && H[0]["s"] != "yahooss") {
            var g;
            if (H[0]["s"].indexOf("yandex")!=-1) {
                H[0]["s"] = "yandex"
            }
            if (H[0]["s"].indexOf("boss")!=-1) {
                H[0]["s"] = "yahoo"
            }
            if (H[0]["s"].indexOf("bing")!=-1) {
                H[0]["s"] = "bing"
            }
            g = d.createElement("a");
            g.href = "https://duck.co/help/results/sources";
            g.target = "_blank";
            g.innerHTML = l("In partnership with");
            g.onclick = function() {
                fl = 1
            };
            am.appendChild(g);
            g = d.createElement("a");
            g.href = "/" + H[0]["s"] + "/";
            g.target = "_blank";
            g.innerHTML = ' <span class="results--powered__badge  badge--' + H[0]["s"] + '" title="' + H[0]["s"] + '"></span>';
            g.onclick = function() {
                fl = 1
            };
            am.appendChild(g);
            aq = $(".js-results-sidebar-alt");
            if (aq) {
                aq.append(am)
            }
        }
    }
    if (ap == "a") {
        r3c = ag
    } else {
        r1c = ag
    }
    if (ae && I) {
        DDG.page.ads.setDefaultAds([H[I]])
    }
    H = null;
    if (nir) {
        nir(au)
    }
    DDG.ImageLoader.locateUnloaded();
    if (ad) {
        nrj("/o.js?d=" + ad + (kf && kf == "b" ? "&t=b" : ""))
    }
    if (ae) {
        DDG.page.onDeepFinished()
    }
    if (G) {
        nrj("/l.js?q=" + rq)
    }
    if (nrb) {
        nrb()
    }
}
function nrj(c, e) {
    if (DDG.assets_loaded[c]) {
        return false
    }
    DDG.assets_loaded[c] = 1;
    var b, a;
    b = d.createElement("script");
    b.type = "text/javascript";
    if (!e) {
        b.async = true
    } else {
        b.async = false
    }
    b.src = c;
    b.onerror = function(f) {
        var g = f && f.target && f.target.src;
        nutp("nrjerr_" + g)
    };
    a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a);
    return b
}
function nrc(c) {
    if (DDG.assets_loaded[c]) {
        return false
    }
    DDG.assets_loaded[c] = 1;
    var b, a;
    b = d.createElement("link");
    b.type = "text/css";
    b.rel = "stylesheet";
    b.async = true;
    b.href = c;
    b.media = "screen";
    a = document.getElementsByTagName("head")[0];
    a.parentNode.insertBefore(b, a)
}
function nur(b, f, e, a, c) {
    return DDG.ImageLoader.make({
        className: b,
        title: f,
        src: e,
        height: a,
        width: c,
        alt: "",
        visibility: "visible",
        lazyLoad: "scrollY"
    })
}
function nsr(j, z, h) {
    var p, n, m, g, k, r, u, s, q, y, b, A, e;
    m = new RegExp("^r[lr](.*)-(\\d+)$");
    j = j.parentNode;
    if (j.id && m.test(j.id)) {
        k = RegExp.$1 || 0;
        r = RegExp.$2 || 0
    }
    if (k && r) {
        if (tn == j.id) {
            return false
        }
        tn = j.id;
        e = p = n = 0;
        g = new RegExp("^r1-(\\d+)$");
        if (rc && g.test(rc.id)) {
            p = RegExp.$1
        }
        if (j.previousSibling && g.test(j.previousSibling.id)) {
            n = RegExp.$1
        }
        e = p && n && parseInt(p) == parseInt(n) + 1 ? 1 : 0;
        if (!fk) {
            e = 2
        }
        u = d.getElementById("rl" + k + "-" + r);
        s = d.getElementById("rr" + k + "-" + r);
        q = d.getElementById("rl" + k + "-" + (parseInt(r) + 1));
        var x = DDG.settings.get("kv");
        if (x && x != "-1" && rds != 0 && (rds != 1 || r1hc) && k && k.indexOf("i")==-1) {
            u.onmouseover = function() {};
            u.onmouseout = function() {};
            u.onclick = function() {};
            u.className = "result result--sep is-hidden js-result-sep";
            var v=++rpc;
            if (x == "m") {
                u.className += " result--sep--hr";
                u.innerHTML = ""
            } else {
                if (x == "l") {
                    u.innerHTML = '<div class="result__pagenum">' + l("Page %s", v) + "</div>"
                } else {
                    u.className += " result--sep--hr has-pagenum";
                    u.innerHTML = '<div class="result__pagenum  result__pagenum--side">' + v + "</div>"
                }
            }
        } else {
            $(u).css("display", "none")
        }
        s.style.display = "block";
        if (q&&!z) {
            $(q).css("display", "block")
        } else {
            if (!q && (k == "d" || k == "e0"&&!fd) && DDG.page.deepNextURL) {
                A = d.createElement("img");
                var a = "l3", f = DDG.settings.get("k7"), o = tinycolor(f), c = o.isValid() && o.toHsl().l < 0.5;
                if (c) {
                    a += "-dark"
                }
                if (DDG.is2x || DDG.is3x) {
                    a += ".retina"
                }
                a += ".gif";
                A.src = a;
                A.width = "32";
                A.height = "32";
                b = d.createElement("span");
                b.className = (DDG.settings.isDefault("kc")) ? "result--more  result--load-btn" : "btn result--more  result--load-btn";
                b.className += " js-results-loading";
                b.appendChild(A);
                s.parentNode.appendChild(b);
                tl = A;
                if (rv == "d") {
                    rv = ""
                }
                if (rds) {
                    rds += 50
                } else {
                    rds += 30
                }
                nrj(DDG.page.deepNextURL, 1);
                delete DDG.page.deepNextURL
            }
        }
        if (!z&&!h && e == 1) {
            if (j.nextSibling.firstChild) {
                nrm(6, j.nextSibling.firstChild.id)
            }
        }
    }
}
function nui(b) {
    var a = navigator.userAgent.toLowerCase();
    if (!b && w.external && "AddSearchProvider" in w.external) {
        w.external.AddSearchProvider("https://" + w.location.host + "/opensearch.xml");
        if (!ir) {
            setTimeout("top.location.replace('https://duckduckgo.com/')", 10)
        }
    }
}
function nir(g) {
    var a, f, e, b, c;
    e = (g) ? ".highlight_" + g : ".result";
    a = $(e);
    a.each(function(h, j) {
        f = $(j);
        if (f.attr("data-nir")) {
            return 
        }
        if (!is_mobile_device) {
            f.on("mouseenter", function(k) {
                if (fk || fe) {
                    return false
                }
                if (ky && ky==-1) {
                    return false
                }
                if (rc && rc != this) {
                    nua("nro", rc)
                }
                nua("nrv", this);
                rc = this
            });
            f.on("mouseleave", function(k) {
                if (fk || fe) {
                    return false
                }
                if (ky && ky==-1) {
                    return false
                }
                nua("nro", this)
            })
        }
        if (g != "a") {
            f.click(function(k) {
                if (!fe) {
                    nrg(this, 0, k, 0)
                }
            })
        }
        f.attr("data-nir", 1);
        if (!g || g == "a" || g == "v") {
            b = f.find("a");
            for (c = 0; c < b.length; c++) {
                if (!b[c].onclick&&!rs) {
                    b[c].onclick = function(k) {
                        this.blur();
                        return nrl(k || window.event, this)
                    }
                } else {
                    if (!b[c].onclick) {
                        b[c].onclick = function() {
                            this.blur();
                            fl = 1
                        }
                    }
                }
                if (kn && kn === "1"&&!DDG.isInternalURL(b[c].href)) {
                    b[c].target = "_blank"
                }
            }
        }
    })
}
function ncku(a) {
    if (!ie&&!a.metaKey) {
        fa = 0
    }
}
function nckd(a) {
    if (!ie && a.metaKey) {
        fa = 1
    }
}
function nckp(a) {}
function ncf(g) {
    var h, a, c, j, k;
    fmx = g.clientX;
    fmy = g.clientY;
    if (fmx > viewport_width - 100 && fmy > parseInt(viewport_height) - 17) {
        if (!il && nrb) {
            nrb()
        }
    }
    h = "";
    if (g.srcElement) {
        h = g.srcElement
    } else {
        h = g.target
    }
    var f = 0;
    if (ie && (nkdc(g) || nkdm(g))) {
        f = 1
    }
    var b = g.which && g.which == 2;
    var m = g.which && g.which == 3;
    if (f || b || m) {
        fm = 1;
        while (h && h != window) {
            if (h.nodeName && h.nodeName == "A") {
                if (DDG.isJSURL(h.href)) {
                    h.onclick();
                    return false
                } else {
                    h.href = DDG.get_http_redirect(h)
                }
                fl = 1;
                break
            }
            a = h.id;
            if (a&&!m) {
                if (a == "links") {
                    break
                }
                if (rc && a == rc.id) {
                    nrg(rc, 0, g, 1)
                }
            }
            if (h.parentNode) {
                h = h.parentNode
            } else {
                break
            }
        }
    } else {
        fm = 0
    }
}
function ncg(a) {
    fmx = 0;
    fmy = 0;
    if (a.clientX > viewport_width - 25) {
        if (!il && nrb) {
            nrb()
        }
    }
}
function nkf(c) {
    var b, a;
    if (ie) {
        b = c.clientX + d.body.scrollLeft;
        a = c.clientY + d.body.scrollTop
    } else {
        b = c.pageX;
        a = c.pageY
    }
    if (fk && sx && sy && (sx != b || sy != a)) {
        fk = 0
    }
    sx = b;
    sy = a
}
var mousewheelevt = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll": "mousewheel";
if (document.attachEvent) {
    document.attachEvent("on" + mousewheelevt, nkw)
} else {
    if (document.addEventListener) {
        document.addEventListener(mousewheelevt, nkw, false)
    }
}
function nkw(a) {
    if (io&&!il && nrb) {
        nrb()
    }
    fk = 0
}
function nis() {
    var c, a;
    setTimeout("idom=1;", 250);
    if (fq) {
        return false
    }
    var b = d.getElementById("state_hidden").value;
    if (b) {
        nhs(b)
    } else {
        rc = d.getElementById(DDG.first_result)
    }
    fs = 0;
    if (!il && nrb) {
        nrb()
    }
}
function nrrel(p) {
    var n, b, o, a, h, g, j, m, e, c, k;
    if (d.getElementById("nrreld")) {
        return 
    }
    a = d.getElementById("links");
    m = p.r && p.r.length ? 1 : 0;
    e = r1c || d.getElementById("did_you_mean") || d.getElementById("zero_click_answer") || rad || $("#zero_click_wrapper").css("visibility") == "visible" ? 1 : 0;
    h = d.createElement("div");
    h.id = "nrreld";
    h.className = "no-results";
    if (d.getElementById("zero_click_answer")&&!r1c) {
        $(h).addClass("t-m")
    }
    if (rq.indexOf("sort%3Adate")!=-1 || rq.indexOf("s%3Ad")!=-1) {
        c = 1
    } else {
        c = ""
    }
    g = d.createElement("div");
    g.innerHTML = "No " + (e ? "more " : "") + (c ? "date " : "") + "results." + (m ? " Try:" : "");
    h.appendChild(g);
    if (m) {
        h.className += " has-related";
        for (var f = 0; f < p.r.length; f++) {
            b = p.u[f];
            n = p.r[f];
            g = d.createElement("div");
            j = d.createElement("a");
            j.href = "/?q=" + encodeURIComponent(b) + (kurl ? kurl : "");
            if (kurl) {
                j.href += kurl
            }
            j.innerHTML = n;
            g.className = "no-results__related-search";
            g.appendChild(j);
            h.appendChild(g)
        }
    }
    g = d.createElement("div");
    h.appendChild(g);
    a.appendChild(h);
    nutp("related_" + rq)
}
function nrwot(a) {
    var e, m, c, j, h, b, f, g, k;
    for (e = 0; m = a[e]; e++) {
        if (!m.d ||!m.r ||!m.t) {
            continue
        }
        c = $("#" + m.d + " .result__extras__url");
        if (!c.length) {
            continue
        }
        b = m.r;
        g = m.t;
        k = "";
        if (b <= 2) {
            k = l("Warning! Site could be harmful.")
        } else {
            if (b >= 4) {
                k = l("Site has good reputation.")
            }
        }
        f = DDG.ImageLoader.make({
            title: k,
            src: "/wot/" + b + ".png",
            width: 16,
            height: 16
        });
        j = $('<span class="result__icon"></span>');
        h = $('<a href="https://www.mywot.com/en/scorecard/' + g + '" title="' + k + '"></a>');
        h.append(f);
        j.append(h);
        if (kf === "w") {
            c.find(".result__icon").addClass("is-hidden")
        }
        c.prepend(j);
        h.click(function(n) {
            fl = 1;
            nrl(n, this)
        })
    }
}
function nrb(b, c) {
    var e, o, g, j, m, k, n, f, a, h;
    if (fs) {
        return false
    }
    fs = 1;
    m = document.body.scrollHeight;
    k = DDG.device.scrollTop();
    g = k + viewport_height >= m - 500 ? 1 : 0;
    j = 0;
    if (!c && fmx && fmy && fmx > viewport_width - 100 && fmy < parseInt(viewport_height) - 17) {
        fs = 0;
        return 
    }
    if (g || j || c) {
        for (f = parseInt(r1c) - 1; f >= 0; f--) {
            a = d.getElementById("r1-" + f);
            h = a.parentNode;
            if ($(h).css("display") == "block") {
                nrm(7, "r1-" + f);
                break
            }
        }
    }
    fs = 0
}
function nip(a) {
    var b;
    if (!a && ie) {
        setTimeout("d.x.reset()", 50)
    }
    if (!a && w.postMessage) {
        b = d.createElement("iframe");
        b.id = "iframe_hidden";
        b.src = "/post2.html";
        d.body.appendChild(b)
    }
    if (!a) {
        if (nir) {
            nir("v")
        }
        DDG.ready(function() {
            setTimeout("nis()", 250);
            $(document).on("mousemove", nkf);
            $(document).on("mouseup", ncg);
            $(document).on("keydown", nckd);
            $(document).on("keypress", nckp);
            $(document).on("keyup", ncku)
        })
    }
    $(document).on("mousedown", ncf)
}
if (ir) {
    window.onload = fnChromeLoad
}
function fnChromeLoad(a) {
    irl = 1
}(function(b) {
    var a;
    if (!b.DDG) {
        b.DDG = {}
    }
    a = b.DDG;
    a.abbrevNumber = function(c) {
        if (!$.isNumeric(c)) {
            return c
        }
        if (c < 1000) {
            return c
        }
        if (c < 10000) {
            return (Math.round(c / 100) / 10) + "K"
        }
        if (c < 1000000) {
            return Math.round(c / 1000) + "K"
        }
        if (c < 10000000) {
            return (Math.round(c / 100000) / 10) + "M"
        }
        if (c < 1000000000) {
            return Math.round(c / 1000000) + "M"
        }
        if (c < 10000000000) {
            return Math.round(c / 100000000) + "B"
        }
        return Math.round(c / 1000000000) + "B"
    };
    a.capitalize = function(c) {
        return c.charAt(0).toUpperCase() + c.slice(1)
    };
    a.capitalizeWords = function(c) {
        c = c.replace(/\w\S+/g, a.capitalize);
        c = c.replace(/\b(?:Of|And|The|At|By|In|To|A|For|An|On|Or)\b/g, function(e) {
            return e.toLowerCase()
        });
        return c
    };
    a.commifyNumber = function(c) {
        if (!$.isNumeric(c)) {
            return c
        }
        var e = c.toString().split(".");
        e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return e.join(".")
    };
    a.eventToCoordinates = function(f) {
        var g = f.originalEvent, c = (g.touches && g.touches.length) ? g.touches[0]: f;
        return {
            x: c.clientX,
            y: c.clientY
        }
    };
    a.exec_template = function(f, g) {
        if (!f) {
            throw new Error("DDG.exec_template: template is null")
        }
        var e, c;
        if ($.isFunction(f)) {
            c = f
        } else {
            if (a.templates[f]) {
                c = a.templates[f]
            } else {
                if (f.match(/^DDH\./)) {
                    c = a.getProperty(window, f)
                }
            }
        }
        if (!c) {
            throw new Error("Template Not Found: " + f)
        }
        e = c(g || {});
        if (!e) {
            throw new Error("Error Rendering Template: " + f, g)
        }
        return e
    };
    a.$exec_template = function(c, e) {
        var f = a.exec_template(c, e);
        return f && $(f)
    };
    a.findInArray = function(c, f, h) {
        for (var e = 0; e < c.length; e++) {
            var g = c[e];
            if (g && g[f] === h) {
                return g
            }
        }
    };
    a.formatDuration = function(g) {
        var j = 3600000, e = 60000, f = 1000;
        var c = Math.floor(g / j), h = Math.floor((g - (c * j)) / e), m = Math.round((g - (c * j) - (h * e)) / f);
        if (c && h < 10) {
            h = "0" + h
        }
        if (m < 10) {
            m = "0" + m
        }
        var k = h + ":" + m;
        if (c) {
            k = c + ":" + k
        }
        return k
    };
    a.getDateFromString = function(c) {
        var f = c.match(/([\d]{4})\-([\d]{2})\-([\d]{2})(?:(T|\s)([\d]{2}):([\d]{2}):([\d]{2,}))?($|Z|\s)?(UTC)?/);
        if (f) {
            for (var e = 0; e < 10; e++) {
                if (f[e] === undefined) {
                    f[e] = false
                }
            }
            if (f[8] === "Z" || f[9] === "UTC") {
                c = new Date(Date.UTC(f[1], f[2] - 1, f[3], f[5], f[6], f[7]))
            } else {
                c = new Date(f[1], f[2] - 1, f[3], f[5], f[6], f[7])
            }
            return c
        }
    };
    a.get_favicon_url = function(m) {
        if (!m || typeof m !== "string") {
            return 
        }
        var j, c, o, f, k, g, h = "", n = a.settings && a.settings.updater && a.settings.updater.isDarkBg, e = /wikipedia|amazon|youtube|yelp|apple|vimeo|metrolyrics|spotify|wolfram|metrolyrics|wordnik|brainyquote|soundcloud/;
        darkVariants = /wikipedia/;
        o = /^.*?\/\/([^\/\?\:\#]+)/;
        f = o.exec(m);
        if (f && $.isArray(f)) {
            j = f[1]
        } else {
            j = m
        }
        k = j.match(e);
        if (k) {
            if (n && darkVariants.test(k)) {
                h = ".white"
            }
            g = a.is3x ? ".3x" : a.is2x ? ".2x" : "";
            c = "/assets/icons/favicons/" + k + h + g + ".png"
        }
        if (!c) {
            c = a.services.getURL("icons") + j + ".ico"
        }
        return c
    };
    a.getImageProxyURL = function(c, e) {
        if (a.isInternalURL(c)) {
            return c
        }
        c = (e) ? c : encodeURIComponent(c);
        return a.services.getURL("images") + "?u=" + c + "&f=1"
    };
    a.getOrdinal = function(f) {
        if (!f) {
            return ""
        }
        var e = ["th", "st", "nd", "rd"], c = f%100;
        return f + (e[(c - 20)%10] || e[c] || e[0])
    };
    a.getProperty = function(g, f) {
        if (!f) {
            return null
        }
        var j = f.split("."), h = g;
        for (var e = 0, c = j.length; e < c; e++) {
            if (!h) {
                return null
            }
            h = h[j[e]]
        }
        return h
    };
    a.inject = function(e, j) {
        var h = e.split("."), f;
        for (var c = 0, k; k = h[c]; c++) {
            var g = c === h.length - 1;
            if (c === 0) {
                if (!window[k]) {
                    window[k] = {}
                }
                if (g) {
                    window[k] = j
                }
                f = window[k]
            } else {
                if (!f[k]) {
                    f[k] = {}
                }
                if (g) {
                    f[k] = j
                }
                f = f[k]
            }
        }
    };
    a.isInternalURL = function(c) {
        return !c || c.indexOf("http")==-1
    };
    a.isNumber = function(c) {
        return !isNaN(parseFloat(c)) && isFinite(c)
    };
    a.objectToArray = function(c) {
        return Object.keys(c).map(function(e) {
            return c[e]
        })
    };
    a.parseAbstract = function(g) {
        var e = /^(.*)\((.*)\)(.*)/, f = e.exec(g);
        var c = {
            content: g,
            main: g
        };
        if (f) {
            c.head = f[1];
            c.subTitle = f[2] || "";
            c.tail = f[3] || "";
            c.main = c.head + c.tail
        }
        return c
    };
    a.parse_link = function(g, f) {
        var c, h, j, e;
        if (!f) {
            f = "url"
        }
        h = $("<p>" + g + "</p>");
        j = h.find("a");
        if (j.length) {
            e = $(j[0])
        } else {
            c = h.text();
            f = ""
        }
        if (f === "text") {
            c = e.text()
        } else {
            if (f === "rest") {
                e.remove();
                c = h.text();
                if (c) {
                    c = c.replace(/^(\-|\:|\;|,|"|'|\s)+/, "")
                }
            } else {
                if (f === "url") {
                    c = e[0].href
                }
            }
        }
        return c
    };
    a.pluralize = function(e, f, c) {
        e = parseFloat(e);
        if (!e && e !== 0) {
            return ""
        }
        if (e === 1) {
            return f
        } else {
            return c || (f + "s")
        }
    };
    a.querystringParam = function(c) {
        c = c.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var f = new RegExp("[\\?&]" + c + "=([^&#]*)"), e = f.exec(location.search);
        return e === null ? "" : decodeURIComponentSafe(e[1].replace(/\+/g, " "))
    };
    a.scaleToFit = function(f, c, h, g) {
        var e = {
            width: f,
            height: c
        };
        if (h && e.width > h) {
            e.width = h;
            e.height = (h / f) * c
        }
        if (g && e.height > g) {
            e.height = g;
            e.width = (g / c) * f
        }
        return e
    };
    a.shuffle = function(c) {
        for (var g = c.length - 1; g > 0; g--) {
            var f = Math.floor(Math.random() * (g + 1)), e = c[g];
            c[g] = c[f];
            c[f] = e
        }
        return c
    };
    a.strip_all_html = function(f) {
        var c = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*", e = new RegExp("<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b" + c + ">[\\s\\S]*?<\/script\\s*|style\\b" + c + ">[\\s\\S]*?</style\\s*|/?[a-z]" + c + ")>", "gi"), g;
        while (f !== g) {
            g = f;
            f = f.replace(e, "")
        }
        return f.replace(/</g, "&lt;")
    };
    a.strip_href = function(c) {
        if (c) {
            return c.replace(/(src|href)\s*=\s*(['"])/gi, "_$1=$2")
        }
        return ""
    };
    a.strip_html = function(c) {
        if (!c) {
            return ""
        }
        return String(c).replace(/<\/?[^>]+>/g, "")
    };
    a.strip_non_alpha = function(c) {
        if (c) {
            c = c.replace(/\W/g, "")
        }
        return c
    };
    a.toHTTPS = function(c) {
        return c && c.replace(/^http:/, "https:")
    };
    a.toHTTP = function(c) {
        return c && c.replace(/^https/, "http")
    }
})(this);
(function() {
    var c = {
        "sort:date": 1,
        "s:d": 1,
        "!safeoff": 1
    }, b = /[';,.]/g, a = /[\s-]+/;
    DDG.getRelevants = function(j) {
        if (j.num === undefined) {
            j.num = j.candidates.length
        }
        var e = [];
        var h = DDG.get_query();
        h.replace("'", "");
        j.candidates = j.candidates.sort(j.comparator);
        for (var f = 0, g; g = j.candidates[f]; f++) {
            if (DDG.isRelevant(g.comparable, j.skipArray, j.minWordLength, j.strict)) {
                if (f > j.num) {
                    return e
                } else {
                    e.push(g)
                }
            }
        }
        return e
    };
    DDG.isRelevant = function(f, g, h, e) {
        return DDG.stringsRelevant(f.toLowerCase(), DDG.get_query().toLowerCase(), g, h, e)
    };
    DDG.stringsRelevant = function(g, e, v, q, C) {
        if (v instanceof Array) {
            var r = {};
            for (var s = 0; s < v.length; s++) {
                var p = v[s].toLowerCase();
                r[p] = 1
            }
            v = r
        }
        if (q === undefined) {
            q = 4
        }
        if (v === undefined) {
            v = c
        } else {
            for (var B in c) {
                if (c[B]) {
                    v[B] = 1
                }
            }
        }
        g = g.replace(b, "");
        e = e.replace(b, "");
        var x = g.split(a);
        var u = e.split(a);
        var y = [];
        var A = [];
        for (var s = 0; s < x.length; s++) {
            var t = x[s].toLowerCase();
            if (t && t.length >= q&&!v[t]) {
                y.push(t)
            }
        }
        for (var s = 0; s < u.length; s++) {
            var t = u[s].toLowerCase();
            if (t && t.length >= q&&!v[t]) {
                A.push(t)
            }
        }
        x = y;
        u = A;
        var m, j;
        if (C) {
            if (x.length >= u.length) {
                m = u;
                j = x
            } else {
                m = x;
                j = u
            }
        } else {
            if (x.length >= u.length) {
                m = x;
                j = u
            } else {
                m = u;
                j = x
            }
        }
        var f = {};
        var o = {};
        var k = 0;
        var z = 0;
        for (var s = 0; s < j.length; s++) {
            var t = j[s].toLowerCase();
            var n = t.substring(0, q);
            f[n] = t;
            z++
        }
        f.length = z;
        for (var s = 0; s < m.length; s++) {
            var t = m[s].toLowerCase();
            var h = t.substring(0, q);
            if (!(h in o) && f[h]) {
                o[h] = 1;
                k++
            }
        }
        if (f.length > 0 && f.length <= 2 && k == f.length) {
            return true
        } else {
            if (f.length > 2 && k >= f.length - 1) {
                return true
            }
        }
        return false
    }
})();
!function(b, a) {
    a.SM2_DEFER = true;
    var f, e = 0;
    loadedSm = 0;
    init = function() {
        if (f) {
            return 
        }
        f = window.soundManager = new SoundManager();
        f.url = "/soundmanager2/swf";
        f.flashVersion = 9;
        f.useFlashBlock = false;
        f.useHTML5Audio = true;
        f.ontimeout(function() {
            loadedSm = 1;
            c.ready = 0
        });
        f.beginDelayedInit();
        f.onready(function() {
            loadedSm = 1;
            c.ready = 1
        })
    };
    var c = b.audio = {
        requires: function() {
            if (!e) {
                nrj("soundmanager2/script/soundmanager2-nodebug-jsmin.js", 1);
                e = 1;
                return false
            } else {
                if (!f && window.SoundManager) {
                    init();
                    return false
                } else {
                    if (f && loadedSm) {
                        return c
                    }
                }
            }
            return false
        },
        play: function(k, g, j) {
            if (!c.ready) {
                return false
            }
            var h = f.getSoundById(k);
            if (h) {
                h.play()
            } else {
                h = f.createSound($.extend(j || {}, {
                    id: k,
                    url: g
                }))
            }
            return h
        },
        pause: function(h) {
            if (!c.ready) {
                return false
            }
            var g = f.getSoundById(h);
            if (g) {
                g.pause()
            }
        },
        stop: function(h) {
            if (!c.ready) {
                return false
            }
            var g = f.getSoundById(h);
            if (g) {
                g.stop()
            } else {
                f.stopAll()
            }
        }
    }
}(DDG, this);
!function(e) {
    var j = {}, a = [], b = {}, g = ["title", "id", "height", "width", "className", "alt", "visibility"];
    e.ImageLoader = {
        make: function(p) {
            var n = d.createElement("img");
            for (var o = 0, m; m = g[o]; o++) {
                if (p[m]) {
                    n[m] = p[m]
                }
            }
            if (p.lazyLoad) {
                this.register(n, p.src, p.lazyLoad)
            } else {
                n.src = p.src
            }
            return n
        },
        register: function(n, p, m) {
            var o = {
                src: p,
                el: n,
                trigger: m || "none"
            };
            if (m && m === "scrollY") {
                if (k(o)) {
                    if (!f(o)) {
                        c(o)
                    }
                } else {
                    h(o)
                }
            } else {
                if (!f(o)) {
                    c(o)
                }
            }
        },
        registerAll: function(t, p, r) {
            if (!t ||!t.length) {
                return 
            }
            var n, s, o = "data-src", m = "";
            r = r || {};
            if (r.svg) {
                m = Modernizr.svg ? ".svg" : ".png"
            }
            if (r.svgData && Modernizr.svg) {
                o = "data-svg"
            }
            if (r.retinaPng) {
                m = e.device.isRetina ? "@2x.png" : ".png"
            }
            for (var q = 0; q < t.length; q++) {
                n = t[q];
                s = $(n).attr(o) + m;
                this.register(n, s, p)
            }
        },
        locateUnloaded: function() {
            var m = a.length;
            for (var n = 0; n < m; n++) {
                var o = a[n];
                if (k(o)) {
                    if (!f(o)) {
                        c(o)
                    }
                    a.splice(n, 1);
                    n--;
                    m--
                }
            }
        },
        trigger: function(n) {
            if (!j[n]) {
                return 
            }
            var o = j[n];
            for (var m = 0; m < o.length; m++) {
                f(o[m], true)
            }
            delete j[n];
            b[n] = 1
        },
        loadMore: function() {
            if (!j.scrollY ||!j.scrollY.length) {
                return 
            }
            var m;
            while (m = j.scrollY.shift()) {
                f(m, true)
            }
        }
    };
    e.device.on("resize", function() {
        e.ImageLoader.loadMore()
    });
    e.device.on("scroll", function() {
        e.ImageLoader.loadMore()
    });
    function k(m) {
        if (!m.el.parentNode) {
            return false
        }
        m.offset = $(m.el).offset();
        return true
    }
    function h(m) {
        a.push(m)
    }
    function f(n, m) {
        if (m) {
            n.el.src = n.src;
            return true
        }
        if (n.trigger === "scrollY") {
            var o = e.device.scrollTop();
            if (n.offset.top > o && (n.offset.top - o) < viewport_height) {
                n.el.src = n.src;
                return true
            }
        }
        if (n.trigger !== "none" && b[n.trigger]) {
            n.el.src = n.src;
            return true
        }
        return false
    }
    function c(p) {
        var n = j[p.trigger];
        if (!n) {
            j[p.trigger] = n = []
        }
        if (p.trigger === "scrollY") {
            for (var m = 0; m < n.length; m++) {
                var o = n[m];
                if (p.offset.top > o.offset.top) {
                    continue
                }
                break
            }
            n.splice(m, 0, p)
        } else {
            n.push(p)
        }
    }
}(DDG);
!function(a) {
    a.Utils.ABTester = function(b) {
        b = b || {};
        b.numVersions = b.numVersions || 2;
        if (b.englishOnly && window.locale.indexOf("en_") !== 0) {
            this._versionIndex = 0;
            this.version = ""
        } else {
            this._versionIndex = Math.round(Math.random() * (b.numVersions - 1));
            this.version = String.fromCharCode(this._versionIndex + 97)
        }
    };
    a.Utils.ABTester.prototype = $.extend({}, {
        pick: function(b) {
            return b[this._versionIndex]
        }
    })
}(DDG);
!function(e) {
    var c = e.Models.Base, b, h = 412, f = 312, a = 12;
    e.Models.Answer = b = function(m) {
        c.call(this, m);
        this.meta = new e.Models.AnswerMeta(this.meta);
        this.name = this.name || this.duckbar_topic || this.topic || "Answer";
        if (this.name === "qa") {
            this.name = "Q/A"
        }
        this.nameId = e.strip_non_alpha(this.name.toLowerCase());
        this.id = this.id || this.nameId;
        this.pixelId = this.meta.id || this.from || this.id;
        this.pixelId = this.pixelId.toLowerCase();
        this.type = this.type || this.id.match(/^images|news|videos$/) ? "static" : "new";
        var k = e.stem(this.name), n = new RegExp("\\b(" + this.name + "|" + k + ")\\b", "i");
        this.queryMatch = n.test(decodeURIComponentSafe(this.queryEncoded)) ? 1 : 0;
        this.signal = this.signal || "low";
        if (this.rt !== "A" && this.rt !== "C" && this.rt !== "D" && this.queryMatch) {
            this.signal = "high"
        }
        if (this.signal !== "high" && this.signal !== "medium") {
            this.signal = "low"
        }
        if (this.type === "static") {
            this.signal = "low"
        }
        if (e.duckpan) {
            this.signal = "high"
        }
        this.items = [];
        this.itemsById = {};
        this.topics = [];
        this.topicsById = {};
        this.canExpand = true;
        this._loadMoreCount = 0;
        this._pagesToShow = Math.floor(Math.random() * 3);
        if (m.parameters) {
            this.parameters = m.parameters.map(function(o) {
                return new e.Models.AnswerSelectLists.Parameter(o)
            }.bind(this))
        }
        if (m.sources) {
            m.sources.forEach(function(o) {
                o.requeryURL += this.queryEncoded
            }.bind(this));
            this.sources = new e.Models.AnswerSelectLists.Source({
                values: m.sources,
                parameters: this.parameters
            })
        }
    };
    b.prototype = $.extend({}, c.prototype, {
        addItems: function(v, t) {
            if ($.isEmptyObject(t)) {
                t = null
            }
            this.templates = t || this.templates || {};
            this.set("deferredURL");
            this.set("isLoading");
            if (!v) {
                v = []
            } else {
                if (!$.isArray(v)) {
                    v = [v]
                }
            }
            var r = this.model || "Base", k = this.meta.idField, o = this.meta.topicField || "answerItemTopic", m = 0, p = 0;
            if (!e.Models.AnswerItems[r]) {
                r = "Base"
            }
            if (r === "FatheadListItem") {
                v = j(v, this)
            }
            for (var n = 0; n < v.length; n++) {
                var u = new e.Models.AnswerItems[r]($.extend({
                    templates: this.templates,
                    parentId: this.id,
                    answerMeta: this.meta,
                    idField: k
                }, v[n]));
                if (!this.itemsById[u.id]) {
                    this.items.push(u);
                    this.itemsById[u.id] = u;
                    u.on("change:selected", this._onItemSelectedChanged.bind(this, u));
                    u.on("change:highlighted", this._onItemHighlightedChanged.bind(this, u));
                    ++m;
                    if (o && u[o]) {
                        var s = u[o], q = this.topicsById[s];
                        if (!q) {
                            q = new e.Models.AnswerItemTopic({
                                id: s,
                                name: s,
                                hideCount: this.meta.hideTopicCount
                            });
                            this.topics.push(q);
                            this.topicsById[q.id] = q;
                            ++p;
                            this.bindEvents([[q, "change:selected", this._onTopicSelectedChanged.bind(this, q)], [q, "change:highlighted", this._onTopicHighlightedChanged.bind(this, q)]])
                        }
                        u.set("topic", q);
                        q.addItem(u)
                    }
                }
            }
            if (p) {
                this._emitChange("topics")
            }
            if (m) {
                this._emitChange("items")
            } else {
                if (!this.items.length) {
                    this.set("failed", true)
                } else {
                    if (!v.length) {
                        this.emit("no-results")
                    } else {}
                }
            }
            this._updateCanExpand()
        },
        canLoadMore: function() {
            return !this.isLoading && this.meta.next
        },
        canLoadOnScroll: function() {
            var k = this.expanded && this.canLoadMore()&&!is_mobile_device && e.settings.isDefault("kc");
            if (k && this._loadMoreCount < this._pagesToShow) {
                return true
            } else {
                if (!this._nutpLoadMore && this._loadMoreCount >= this._pagesToShow) {
                    nutp("lm_" + this.pixelId + "_i_" + this._pagesToShow);
                    this._nutpLoadMore = 1
                }
                return false
            }
        },
        loadMore: function() {
            if (!this.canLoadMore()) {
                return 
            }
            this.set("isLoading", true);
            var k = this.meta.next;
            this.meta.loadedNext();
            this._loadMoreCount++;
            if (this._nutpLoadMore&&!this._sentNutpLoadMore) {
                nutp("lm_" + this.pixelId + "_c_" + this._pagesToShow);
                this._sentNutpLoadMore = 1
            }
            if (k.match(/(?:&|\?)cb=([^&?]+)/i)) {
                return nrj(k)
            }
            $.ajax({
                url: k,
                dataType: "json",
                success: this._onLoadedMore.bind(this),
                error: this._onLoadError.bind(this)
            })
        },
        loadDeferred: function() {
            if (this.isLoading ||!this.deferredURL) {
                return 
            }
            if ((this.id === "images" || this.id === "videos") && this.iqa && DDG.get_is_safe_search()) {
                return this._onDeferredLoaded({
                    results: []
                })
            }
            this.set("isLoading", 1);
            var k = this.deferredURL;
            if (this.deferredQueries && this.deferredQueries.length) {
                k += this.deferredQueries.shift()
            } else {
                k += this.queryEncoded
            }
            if (this.sources) {
                k += "&" + this.sources.getParameterQueryString()
            }
            $.ajax({
                type: "GET",
                url: k,
                dataType: "json",
                async: true,
                success: this._onDeferredLoaded.bind(this),
                error: this._onLoadError.bind(this)
            })
        },
        indexOfSelectedItem: function() {
            if (!this.selectedItem) {
                return 
            }
            if ($.isNumeric(this._selectedItemIdx)) {
                return this._selectedItemIdx
            }
            return this._selectedItemIdx = this.items.indexOf(this.selectedItem)
        },
        getNextItem: function() {
            var k = this.indexOfSelectedItem();
            return $.isNumeric(k) && this.items[k + 1]
        },
        getPrevItem: function() {
            var k = this.indexOfSelectedItem();
            return $.isNumeric(k) && this.items[k - 1]
        },
        selectNextItem: function() {
            var k = this.getNextItem();
            return k && k.select()
        },
        selectPrevItem: function() {
            var k = this.getPrevItem();
            return k && k.select()
        },
        getQuerystringItemId: function(k) {
            return k.idField ? k.id : this.items.indexOf(k)
        },
        getDetailHeight: function() {
            var k = this.meta.options || {}, n = k.detailHeight || h, m = k.detailHeightShort || f;
            return e.device.isTeapot() ? m : n
        },
        _addItemsFromResponse: function(k) {
            if (!k) {
                return 
            }
            this.meta.update({
                next: k.next,
                searchTerm: k.searchTerm
            });
            this.addItems(k.results || k)
        },
        _updateCanExpand: function() {
            var k;
            if (e.device.isMobile) {
                k = true
            } else {
                if (this.meta.disableModeSwitch || this.meta.itemsExpand || this.meta.itemsWidthVaries) {
                    k = false
                } else {
                    if (this.items.length >= (this.meta.minItemsForModeSwitch || a)) {
                        k = true
                    } else {
                        k = false
                    }
                }
            }
            this.set("canExpand", k)
        },
        requery: function() {
            this.set("isRequerying", 1);
            this.meta.reset();
            $.ajax({
                type: "GET",
                url: this.sources.getRequeryURL(),
                dataType: "json",
                async: true,
                success: this._onRequery.bind(this),
                error: this._onLoadError.bind(this)
            })
        },
        _onDeferredLoaded: function(k) {
            this.set("isLoading");
            if ((!k ||!k.length) && this.deferredQueries && this.deferredQueries.length) {
                this.set("isLoading", 0);
                return this.loadDeferred()
            }
            if (this.deferredQueries&&!this.deferredQueries.length) {
                nutp("iaff_" + this.pixelId + "_deferred");
                delete this.deferredQueries
            }
            if (!this.deferredURL) {
                return 
            }
            this.set("deferredURL");
            this._addItemsFromResponse(k)
        },
        _onRequery: function(k) {
            this.set("isRequerying");
            this.set("selectedItem");
            this.items.forEach(function(m) {
                m.removeAllListeners()
            });
            this.items = [];
            this.itemsById = {};
            this._loadMoreCount = 0;
            this._addItemsFromResponse(k);
            this.set("expanded", 1)
        },
        _onLoadedMore: function(k) {
            this.set("isLoading");
            this._addItemsFromResponse(k)
        },
        _onLoadError: function() {
            this.set("isLoading");
            this.set("isRequerying");
            if (!this.items.length) {
                this.set("failed", 1)
            }
        },
        _onItemSelectedChanged: function(k) {
            delete this._selectedItemIdx;
            if (k && k.selected) {
                if (this.highlightedItem) {
                    this.highlightedItem.unhighlight()
                }
                if (this.selectedItem && k !== this.selectedItem) {
                    this._pendingSelectedItem = k;
                    this.selectedItem.unselect()
                }
                this.set("selectedItem", k)
            } else {
                if (this._pendingSelectedItem) {
                    delete this._pendingSelectedItem
                } else {
                    this.set("selectedItem")
                }
            }
        },
        _onItemHighlightedChanged: function(k) {
            if (k && k.highlighted) {
                if (this.highlightedItem && k !== this.highlightedItem) {
                    this._pendingHighlightedItem = k;
                    this.highlightedItem.unhighlight()
                } else {
                    this.set("highlightedItem", k)
                }
            } else {
                if (this._pendingHighlightedItem) {
                    delete this._pendingHighlightedItem
                } else {
                    this.set("highlightedItem")
                }
            }
        },
        _onTopicSelectedChanged: function(k) {
            if (k && k.selected) {
                if (this.selectedTopic && k !== this.selectedTopic) {
                    this.selectedTopic.unselect()
                }
                this.set("selectedTopic", k)
            } else {
                if (k === this.selectedTopic&&!k.selected) {
                    this.set("selectedTopic")
                }
            }
        },
        _onTopicHighlightedChanged: function(k) {
            if (k && k.highlighted) {
                if (this.highlightedTopic && k !== this.highlightedTopic) {
                    this.highlightedTopic.unhighlight()
                }
                this.set("highlightedTopic", k)
            } else {
                if (k === this.highlightedTopic&&!k.highlighted) {
                    this.set("highlightedTopic")
                }
            }
        }
    });
    function j(r, u) {
        if (!r ||!r.length ||!r[0].RelatedTopics) {
            return r
        }
        var t = [], q = u.name.toLowerCase(), k = r[0].RelatedTopics, s, m, n;
        for (var p = 0; p < k.length; p++) {
            s = k[p];
            if (!s.Name) {
                if (q === "list") {
                    if (!n || n !== s.Text.charAt(0)) {
                        n = s.Text.charAt(0)
                    }
                    s.answerItemTopic = n;
                    u.meta.hideTopicCount = 1
                } else {
                    s.answerItemTopic = "Top"
                }
                if (!g(s)) {
                    t.push(s)
                }
            } else {
                for (var o = 0; o < s.Topics.length; o++) {
                    m = s.Topics[o];
                    m.answerItemTopic = s.Name;
                    if (!g(m)) {
                        t.push(m)
                    }
                }
            }
        }
        return t
    }
    function g(m) {
        if (!m.Result ||!m.Text) {
            return true
        }
        var k = e.parse_link(m.Result, "text");
        if (k && k === m.Text) {
            return true
        }
        return false
    }
}(DDG);
!function(c) {
    var b = c.Models.Base, a;
    c.Models.AnswerMeta = a = function(e) {
        b.call(this, e)
    };
    a.prototype = $.extend({}, b.prototype, {
        loadedURLs: {},
        loadedNext: function() {
            if (this.next) {
                this.loadedURLs[this.next] = true;
                this.next = null
            }
        },
        reset: function() {
            this.loadedURLs = {}
        },
        update: function(e) {
            if (!e || typeof e != "object") {
                return 
            }
            for (var f in e) {
                if (f === "next" && this.loadedURLs[e[f]]) {
                    continue
                }
                if (f === "searchTerm" && this.searchTerm) {
                    continue
                }
                this.set(f, e[f])
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Models.Base;
    b.Models.AnswerItemTopic = function(c) {
        a.call(this, c);
        this.items = []
    };
    b.Models.AnswerItemTopic.prototype = $.extend({}, a.prototype, {
        addItem: function(c) {
            this.items.push(c);
            this._emitChange("items")
        },
        removeItem: function(e) {
            var c = this.items.indexOf(e);
            if (c>-1) {
                this.items.splice(c, 1);
                this._emitChange("items")
            }
        },
        select: function() {
            this.unhighlight();
            this.set("selected", 1)
        },
        unselect: function() {
            this.set("selected")
        },
        highlight: function() {
            if (this.selected) {
                return 
            }
            this.set("highlighted", 1)
        },
        unhighlight: function() {
            this.set("highlighted")
        }
    })
}(DDG);
!function(c) {
    var b = c.Models.Base, a = /^[a-zA-Z]/;
    c.Models.BangList = function() {
        b.call(this)
    };
    c.Models.BangList.prototype = $.extend({}, b.prototype, {
        _getGroupingChar: function(e) {
            if (a.test(e)) {
                return e[0].toLowerCase()
            } else {
                return "#"
            }
        },
        _getBangCategoryArray: function(e, f) {
            if (!e) {
                return this._bangsWithoutCategory
            }
            if (!this._bangsByCategory[e]) {
                this._bangsByCategory[e] = {};
                this.primaryCategories.push(e);
                this.secondaryCategories[e] = []
            }
            if (!this._bangsByCategory[e][f]) {
                this._bangsByCategory[e][f] = [];
                this.secondaryCategories[e].push(f)
            }
            return this._bangsByCategory[e][f]
        },
        _sortBangs: function(e, g) {
            var f = new RegExp("^" + g, "i");
            e.sort(function(j, h) {
                var m = g.length / j.s.length, k = g.length / h.s.length, n = f.test(j.s) ? 1: 0, o = f.test(h.s) ? 1: 0;
                if (o - n) {
                    return o - n
                } else {
                    return k - m
                }
            })
        },
        filterByString: function(e) {
            var h, j = [], k = "Results for " + e, g = new RegExp(e, "i");
            for (var f = 0; f < this.allBangs.length; f++) {
                h = this.allBangs[f];
                if (g.test(h.s)) {
                    h = $.extend(null, {}, h);
                    h.s = h.s.replace(g, "<strong>$&</strong>");
                    j.push(h)
                }
            }
            this._sortBangs(j, "<strong>" + e + "</strong>");
            this.lastFilterUsed = "str";
            this.emit("filter", [{
                title: k,
                bangs: j
            }
            ])
        },
        filterByCharacter: function(e) {
            this.lastFilterUsed = "chr";
            this.emit("filter", [{
                title: e,
                bangs: this._bangsByCharacter[e]
            }
            ])
        },
        filterByCategory: function(g) {
            var e = [], h;
            this.lastFilterUsed = "cat";
            if (g === "uncategorized") {
                this.emit("filter", [{
                    title: "Uncategorized",
                    bangs: this._bangsWithoutCategory
                }
                ]);
                return 
            }
            for (var f = 0; f < this.secondaryCategories[g].length; f++) {
                h = this.secondaryCategories[g][f];
                e.push({
                    title: h,
                    bangs: this._bangsByCategory[g][h]
                })
            }
            this.emit("filter", e)
        },
        resetFilter: function() {
            var f = [], g, h;
            this.lastFilterUsed = "all";
            for (var e = 0; e < this.characters.length; e++) {
                h = this.characters[e];
                g = {
                    title: h,
                    bangs: this._bangsByCharacter[h]
                };
                f.push(g)
            }
            this.emit("filter", f)
        },
        setBangs: function(e) {
            var h, g, j, f;
            this._bangsByCharacter = {};
            this.characters = [];
            this._bangsByCategory = {};
            this._bangsWithoutCategory = [];
            this.primaryCategories = [];
            this.secondaryCategories = [];
            for (f = 0; f < e.length; f++) {
                h = this._getGroupingChar(e[f].t);
                g = c.capitalizeWords(e[f].c || "");
                j = c.capitalizeWords(e[f].sc || "");
                if (!this._bangsByCharacter[h]) {
                    this._bangsByCharacter[h] = [];
                    this.characters.push(h)
                }
                this._bangsByCharacter[h].push(e[f]);
                this._getBangCategoryArray(g, j).push(e[f])
            }
            this.characters.sort();
            this.primaryCategories.sort();
            for (f = 0; f < this.primaryCategories.length; f++) {
                this.secondaryCategories[this.primaryCategories[f]].sort()
            }
            this.allBangs = e
        }
    })
}(DDG);
!function(k) {
    var f = {
        answer: 1,
        about: 2,
        meanings: 3
    }, n = {
        wolfram_alpha: 1,
        nlp_fathead: 1
    }, h = {
        nlp_wiki: 1,
        nlp_qa: 1,
        nlp_lyrics: 1
    }, c = {
        mlb_games: 300,
        nfl_games: 299,
        answer: 200,
        places: 100,
        recipes: 90,
        apps: 70,
        weather: 60,
        forecast: 60,
        about: 50,
        meanings: 40,
        videos: - 10,
        images: - 20
    }, e = {
        forecast: 250,
        lyrics: 250,
        news: 250,
        nlp_longtail: 250,
        nlp_lyrics: 250,
        nlp_qa: 250,
        nlp_wiki: 250,
        places: 250
    }, o = 250, j = 5000, m = 4000, g = {
        high: 3,
        medium: 2,
        low: 1
    }, b = {
        "item-selected": "onItemSelected",
        "item-unselected": "onItemUnselected",
        "item-shown": "onItemShown",
        show: "onShow",
        hide: "onHide"
    }, a = DDG.get_now();
    k.duckbar = {
        id: "duckbar",
        tabs: {},
        froms: {},
        homeTab: null,
        activeTabId: null,
        futureSignals: [],
        officialSites: {},
        failedIA: {},
        nutpTabs: {},
        isReady: false,
        onReady: function() {
            this.isReady = true;
            this.$zeroClickWrapper = $("#zero_click_wrapper");
            this.$home = $("#duckbar_home_button");
            this.$el = $("#duckbar");
            k.keyboard.on("left", this._openNext.bind(this, "l"));
            k.keyboard.on("right", this._openNext.bind(this, "r"));
            DDG.Data.StaticIAs.forEach(this.add.bind(this));
            if (this.addOnReady) {
                for (var p = 0, q; q = this.addOnReady[p]; p++) {
                    this.add(q)
                }
            }
            this.show("static");
            setTimeout("DDG.duckbar.show('placeholder')", j);
            setTimeout("DDG.duckbar.show('placeholder_images')", m)
        },
        getOrCreateTab: function(r) {
            var q = new DDG.DuckbarTab(r), p = this.tabs[q.id];
            if (q.from) {
                this.froms[q.from] = q
            }
            if (p) {
                if (q.signal === "high" && p.signal !== "high") {
                    p.signal = "high"
                } else {
                    if (q.signal === "medium" && p.signal === "low") {
                        p.signal = "medium"
                    }
                }
                return p
            }
            this.tabs[q.id] = q;
            q.render(this.$zeroClickWrapper);
            q.on("open", this.open.bind(this, q.id));
            return q
        },
        getActiveTab: function() {
            return this.tabs[this.activeTabId]
        },
        addPlaceholder: function(p) {
            if (this.openedTab || this.placeholder || k.history.get("iac") ||!k.settings.isDefault("kz")) {
                return 
            }
            this.placeholder = new k.Views.AnswerBar.Answers.Placeholder({
                model: new k.Models.Answer({
                    id: "placeholder"
                }),
                signalWait: p,
                appendTo: this.$zeroClickWrapper
            });
            DDG.addClass(this.id, DDG.$html, "has-active-zci");
            nutp("iaop_" + p)
        },
        removePlaceholder: function(p) {
            this.placeholder.destroy();
            delete this.placeholder
        },
        open: function(r, t) {
            t = t || {};
            if ((k.history.get("ia") || k.history.get("iac")) && t.autoOpened) {
                return 
            }
            if (t.autoOpened && this.openedTab) {
                return 
            }
            if (t.autoOpened&&!k.settings.isDefault("kz")) {
                return 
            }
            this.openedTab = 1;
            if (this.placeholder) {
                this.removePlaceholder("open")
            }
            if (this.getActiveTab()) {
                var p = this.getActiveTab();
                if (p.id === r && (t.autoOpened || t.qsOpened)) {
                    return 
                }
                if (this.activeTabId === r && DDG.hasClass(this.id, "at-zci-bottom")) {
                    k.device.scrollTop(0, DDG.animation_speed);
                    return 
                }
                DDG.ImageLoader.loadMore();
                p.hide();
                if (this.activeTabId === r) {
                    DDG.removeClass(this.id, DDG.$html, "has-active-zci");
                    this.activeTabId = null;
                    clearTimeout(this._showTimer);
                    return 
                }
            }
            this.activeTabId = r;
            var s = this.tabs[r], q = t.autoOpened ? "iaoi": t.qsOpened ? "iaoq": "iaoe", u = s.model.meta;
            if (!this.nutpTabs[q + s.pixelId]) {
                nutp(q + "_" + s.pixelId);
                this.nutpTabs[q + "_" + s.pixelId] = 1
            }
            DDG.make_official();
            DDG.addClass(this.id, DDG.$html, "has-active-zci");
            if (t.qsOpened&&!this.homeTab && s.type !== "static") {
                this.homeTab = s;
                s.moveLink("home");
                $("#duckbar_static_sep").removeClass("is-hidden")
            }
            if (typeof u.autoExpand === "undefined") {
                u.autoExpand = is_mobile ? 1 : 0
            } else {
                if (u.autoExpand&&!is_mobile && (t.autoOpened || t.qsOpened)) {
                    u.autoExpand = 0
                }
            }
            if (u.autoExpand && typeof u.autoExpandRows === "undefined") {
                u.autoExpandRows = (is_mobile && (t.autoOpened || t.qsOpened)) ? 1 : 0
            }
            s.show({
                loadDeferred: !t.autoOpened || (t.autoOpened && t.is_last_resort_tab),
                saveHistory: !(t.is_last_resort_tab)
            });
            if (!t.autoOpened&&!t.qsOpened) {
                k.device.scrollTop(0)
            }
        },
        _openNext: function(r) {
            if (k.keyboard.namespaced(/^autocomplete$/) || k.keyboard.focusedOnInput()) {
                return 
            }
            var r = r || "r", v = this.getActiveTab();
            if (!v ||!v.model.active) {
                return 
            }
            if (v.model.selectedItem) {
                return false
            }
            var q = this.$el.find(".js-zci-link"), p = 0;
            for (var t = 0; t < q.length; t++) {
                if ($(q[t]).hasClass("is-active")) {
                    p = t;
                    break
                }
            }
            var u = r === "r" ? p + 1: p - 1, x = q[u];
            if (!x) {
                return 
            }
            var s = $(x).attr("data-zci-link");
            this.open(s)
        },
        add: function(t) {
            if (!this.isReady) {
                if (!this.addOnReady) {
                    this.addOnReady = []
                }
                this.addOnReady.push(t);
                return 
            }
            delete this.failedIA[t.id];
            if (t && t.from && t.official_site) {
                if (this.officialSites[t.official_site]) {
                    this.officialSites[t.official_site].push(t.from)
                } else {
                    this.officialSites[t.official_site] = [t.from]
                }
            }
            t.rt = rt;
            t.query = k.get_query();
            t.queryEncoded = k.get_query_encoded();
            t.iqa = iqa;
            var r = this.getOrCreateTab(t);
            if (!t.deferredURL) {
                r.append(t)
            }
            for (var p in b) {
                var q = t[b[p]];
                if (q && typeof q === "function") {
                    r.on(p, q)
                }
            }
            var s = k.history.get("ia");
            if (s && (s === r.id || s === r.nameId)) {
                setTimeout(this.open.bind(this, r.id, {
                    qsOpened: 1
                }), 1)
            }
            setTimeout(this.show.bind(this, "add"), 1);
            return r
        },
        add_array: function(p) {
            for (var q = 0; q < p.length; q++) {
                this.add(p[q])
            }
        },
        addDeferred: function(r, p) {
            var q = DDG.Data.DeferredIAs[r];
            q.deferredQueries = p;
            this.add(q);
            nutp("ias_" + q.id)
        },
        add_local: function(q) {
            if (!q ||!q.results ||!q.results.length) {
                return this.failed("places")
            }
            var p = q.results[0].engine, r = p.toLowerCase();
            DDG.require("maps", this.add.bind(this, {
                name: "places",
                id: "maps_places",
                model: "Place",
                allowMultipleCalls: true,
                data: q.results,
                signal: q.signal,
                templates: {
                    item: "places_item",
                    detail: "places_detail"
                },
                meta: {
                    next: q.next,
                    searchTerm: q.query,
                    sourceName: p,
                    sourceUrl: q.more_at,
                    developer: [{
                        name: "DDG Team"
                    }
                    ],
                    signal_from: "maps_places",
                    options: {
                        item_footer: "places_item_footer_" + r,
                        detail_rating: "places_detail_rating_" + r
                    }
                }
            }))
        },
        add_directions: function(p) {
            if (!p ||!p.length) {
                return this.failed("maps")
            }
            DDG.require("maps", this.add.bind(this, {
                name: "directions",
                from: "maps",
                data: p
            }))
        },
        _get_precedence_tab: function(s) {
            var p =- 1000, r = "";
            for (var q = 0; q < s.length; q++) {
                var t = s[q], u = 0;
                if (c[t.id]) {
                    u = c[t.id]
                }
                if (!u && c[t.from]) {
                    u = c[t.from]
                }
                if (t.queryMatch) {
                    u += 1000
                }
                if (u > p) {
                    p = u;
                    r = t
                }
            }
            if (!r) {
                r = s[0]
            }
            return r
        },
        show: function(J) {
            var O = {}, G = "", t = DDG.get_now(), y = [], D = [], C = 0, r = [], I = [], x = [], v = 0, H = t - a;
            for (var K in this.futureSignals) {
                K = this.futureSignals[K];
                if (!v && n[K.from]) {
                    v = 1
                }
            }
            for (var K in this.futureSignals) {
                K = this.futureSignals[K];
                if (K.signal == "high") {
                    y[K.from] = 1
                } else {
                    if (K.signal == "medium") {
                        D[K.from] = 1
                    } else {
                        continue
                    }
                }
                if (v && h[K.from]) {
                    continue
                }
                if (this.failedIA[K.from] || this.failedIA[K.fromStripped]) {
                    continue
                }
                if (this.froms[K.from]) {
                    continue
                }
                if (this.tabs[K.from]) {
                    var s = this.tabs[K.from];
                    if (s.type !== "static") {
                        continue
                    } else {
                        if (s.numItems() !== 0) {
                            continue
                        }
                    }
                }
                if ((t - K.now) < K.timeout) {
                    C = K.from;
                    if (!this.openedTab&&!this.placeholder && K.openPlaceholder) {
                        this.addPlaceholder(K.from)
                    }
                    break
                }
            }
            for (var N in this.tabs) {
                s = this.tabs[N];
                if (!v && f[s.id]) {
                    v = 1
                }
            }
            for (var N in this.tabs) {
                s = this.tabs[N];
                if (!s.linkIsShowing) {
                    O[s.id] = s
                }
                if (this.openedTab) {
                    continue
                }
                var q = 0;
                if (y[s.id] || y[s.from]) {
                    q = 1
                }
                if (q) {}
                if (!q && (!s.signal || s.signal !== "high")) {
                    if (s.type !== "static") {
                        if (s.signal === "medium" || D[s.id] || D[s.from]) {
                            I.push(s)
                        } else {
                            x.push(s)
                        }
                    }
                    continue
                }
                if (v && h[s.from]) {
                    continue
                }
                if (s.type === "static" && (s.numItems() === 0)) {
                    continue
                }
                if (!G) {
                    r.push(s)
                } else {
                    if (q) {
                        r.push(s)
                    }
                }
            }
            var B = 0, A = 0;
            if (!DDG.is_deep_started&&!r.length) {
                B = 1
            }
            if (C&&!r.length) {
                B = 1;
                A = 1
            }
            var M = C in e ? e[C]: 0;
            if (!this.openedTab && B) {
                if (!this.placeholder && DDG.is_deep_loaded && (t - DDG.is_deep_loaded) > o + M && A) {
                    this.addPlaceholder(C)
                }
                if (this._showTimer) {
                    clearTimeout(this._showTimer)
                }
                this._showTimer = setTimeout(this.show.bind(this, "self"), 50);
                return 
            }
            var F = "";
            var z = 0;
            if (!this.openedTab) {
                if (r.length) {
                    for (var s in r) {
                        s = r[s];
                        if (y[s.id] || y[s.from]) {
                            F = s;
                            break
                        }
                    }
                    if (!F) {
                        F = this._get_precedence_tab(r)
                    }
                } else {
                    if (I.length) {
                        F = this._get_precedence_tab(I);
                        if (!this.isOfficialSiteValid() && F === this.tabs.about && this.tabs.meanings) {
                            F = this.tabs.meanings
                        }
                    } else {
                        if (this.tabs.answer) {
                            F = this.tabs.answer
                        } else {
                            if (this.tabs.about) {
                                F = this.tabs.about
                            } else {
                                if (this.tabs.meanings) {
                                    F = this.tabs.meanings
                                } else {
                                    if (this.placeholder && (H > m ||!B)) {
                                        F = I.length ? this._get_precedence_tab(I) : "";
                                        if (!F) {
                                            F = x.length ? this._get_precedence_tab(x) : ""
                                        }
                                        if (!F) {
                                            if (iqbi) {
                                                this.placeholder.showNoResults()
                                            } else {
                                                if (this.failedIA.embed || (H > m)) {
                                                    F = this.tabs.images;
                                                    z = 1
                                                } else {
                                                    if (DDG.embed.callback) {
                                                        DDG.embed.callback();
                                                        F = this.tabs.embed
                                                    }
                                                }
                                            }
                                        }
                                        if (F) {
                                            nutp("iaof_" + F.pixelId);
                                            nutp("iaff_" + this.placeholder.signalWait)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (!this.homeTab && F&&!this.openedTab) {
                this.homeTab = F;
                if (F.type != "static") {
                    F.moveLink("home");
                    $("#duckbar_static_sep").removeClass("is-hidden")
                }
            }
            for (s in O) {
                s = O[s];
                s.showLink();
                nutp("ias_" + s.pixelId);
                if (s.type == "new") {
                    $("#duckbar_dynamic_sep").removeClass("is-hidden")
                }
            }
            if (!this.openedTab && F) {
                if (!this.placeholder) {
                    var E = F.from || F.id, p = F.timeAdded - (k.is_deep_loaded || t), u = o + (e[E] || 0);
                    if (p > u) {
                        if (!this._sentBlockedNutp) {
                            nutp("iaoid_" + F.pixelId + "_" + p);
                            this._sentBlockedNutp = true
                        }
                        return 
                    }
                }
                this.open(F.id, {
                    autoOpened: true,
                    is_last_resort_tab: z
                })
            } else {
                if (this.placeholder && H > j) {
                    this.placeholder.showNoResults()
                }
            }
        },
        numOfficialSites: function() {
            var p = Object.keys(this.officialSites);
            return p.length
        },
        maybeOfficialSite: function() {
            if (this.isOfficialSiteValid()) {
                return 1
            }
            if (rt === "D" && this.froms.main_answer) {
                return 0
            }
            if (this.numOfficialSites()) {
                return 1
            }
            return 0
        },
        isOfficialSiteValid: function() {
            if (this.numOfficialSites() !== 1) {
                return false
            }
            var u = Object.keys(this.officialSites);
            var q = ["deep_answer", "main_answer"], s = u[0], p = this.officialSites[s];
            for (var t = 0, r; r = q[t]; t++) {
                if (this.froms[r]) {
                    if (p.indexOf(r)===-1) {
                        return false
                    }
                }
            }
            return s
        },
        failed: function(p) {
            this.failedIA[p] = true;
            this.failedIA[this.stripNamespace(p)] = true;
            if (this.tabs[p]) {
                this.tabs[p].failed()
            }
        },
        future_signal_tab: function(p) {
            if (!p) {
                return 
            }
            if (!p.from) {
                return 
            }
            p.fromStripped = this.stripNamespace(p.from);
            if (!p.signal) {
                p.signal = "high"
            }
            if (!p.timeout) {
                p.timeout = (p.signal === "high") ? 3000 : 1500
            }
            p.now = DDG.get_now();
            if (this.failedIA[p.from]) {
                return 
            }
            this.futureSignals.push(p);
            this.futureSignals = this.futureSignals.sort(function(r, q) {
                if (g[r.signal] > g[q.signal]) {
                    return - 1
                } else {
                    if (g[r.signal] < g[q.signal]) {
                        return 1
                    } else {
                        return 0
                    }
                }
            })
        },
        stripNamespace: function(q) {
            var p = q.match(/(.*)_(.*)$/);
            if (p) {
                return p[p.length - 1]
            } else {
                return q
            }
        },
        _onScroll: function(v) {
            if (!this.getActiveTab()) {
                return 
            }
            var s = k.device.scrollTop(), p = DDG.$html, u = this.getActiveTab(), r = u.getHeight({
                subtractMenu: true
            }), q = DDG.get_header_height(), t = DDG.hasClass(this.id, "is-inactive"), x = DDG.hasClass(this.id, "is-past-zci");
            if (!DDG.isHeaderFixed) {
                r = r + q
            }
            if (!t && s > r) {
                DDG.addClass(this.id, this.$el, "is-inactive");
                DDG.addClass(this.id, p, "at-zci-bottom")
            } else {
                if (t && s < r) {
                    DDG.removeClass(this.id, this.$el, "is-inactive");
                    DDG.removeClass(this.id, p, "at-zci-bottom")
                }
            }
            if (DDG.isHeaderFixed) {
                if (!x && s > (r + q)) {
                    DDG.addClass(this.id, p, "is-past-zci")
                } else {
                    if (x && s < (r + q)) {
                        DDG.removeClass(this.id, p, "is-past-zci")
                    }
                }
            }
        }
    };
    k.device.on("scroll", k.duckbar._onScroll.bind(k.duckbar))
}(DDG);
!function(a) {
    var f = ["Detail", "GridTiles"], e = {
        images: ["Images"],
        maps_maps: ["Map"],
        maps_places: ["Map", "Places"],
        videos: ["GridTiles"]
    }, b = {
        Audio: "GridTiles",
        Videos: "GridTiles"
    }, c = {
        videos: {
            noDetailWhen: function() {
                return DDG.settings.get("k5") == "2"
            },
            detailOverlay: "VideoDetailOverlay"
        },
        qa: {
            noDetailWhen: function() {
                return a.device.isMobile
            }
        }
    };
    a.DuckbarTab = function(g) {
        this.model = new a.Models.Answer(g);
        this.id = this.model.id;
        this.name = this.model.name;
        this.nameId = this.model.nameId;
        this.type = this.model.type;
        this.signal = this.model.signal;
        this.pixelId = this.model.pixelId;
        this.from = this.model.from;
        this.timeAdded = new Date().getTime();
        this.items = this.model.items;
        if (g.view) {
            this.availableViews = [g.view]
        } else {
            if ($.isArray(g.views)) {
                this.availableViews = g.views
            } else {
                this.availableViews = e[this.id] || f
            }
        }
        this.viewIndex = 0;
        if (c[this.model.id]) {
            this.model.meta.options = $.extend(this.model.meta.options || {}, c[this.model.id])
        }
        this.model.on("change:items", this._onItemsChanged.bind(this))
    };
    a.DuckbarTab.prototype = $.extend({}, EventEmitter2.prototype, {
        render: function(h) {
            this.$linkParent = $("#duckbar_" + this.type);
            this.$linkParent.addClass("has-zci");
            var g = this.$menuItem = $(DDG.exec_template("duckbar_tab", this.model));
            this.$linkParent.append(g);
            this.$link = g.find(".js-zci-link--" + this.id);
            this.$link.on("click", this._onLinkClick.bind(this));
            this.$parent = h;
            this.view = this._createView();
            if (this.type === "static") {
                this.showLink()
            }
        },
        append: function(g) {
            if (!g) {
                return 
            }
            this.model.meta.update(g.meta);
            g.data = $.isArray(g.data) ? g.data : [g.data || g];
            this.model.addItems(g.data, g.templates)
        },
        numItems: function() {
            return this.model.items.length
        },
        show: function(g) {
            if (this.model.active) {
                return 
            }
            if (g.loadDeferred) {
                this.model.loadDeferred()
            }
            this.$link.removeClass("is-highlighted");
            this.$link.addClass("is-active");
            if (this.$indicator) {
                this.$indicator.remove();
                delete this.$indicator
            }
            this.model.set("active", 1);
            this.emit("show");
            a.history.clear("iac");
            if (this._stashedHistory) {
                a.history.set(this._stashedHistory);
                delete this._stashedHistory
            }
            if (g.saveHistory) {
                a.history.set({
                    ia: this.nameId
                })
            }
        },
        hide: function() {
            if (!this.model.active) {
                return 
            }
            this._stashedHistory = a.history.getNamespace("ia");
            a.history.clearNamespace("ia");
            a.history.set({
                iac: 1
            });
            this.$link.removeClass("is-active");
            this.model.set("active");
            this.emit("hide")
        },
        showLink: function() {
            if (this.linkIsShowing) {
                return 
            }
            this.$menuItem.removeClass("is-hidden");
            this.linkIsShowing = true
        },
        hideLink: function() {
            if (!this.linkIsShowing) {
                return 
            }
            this.$menuItem.addClass("is-hidden");
            this.linkIsShowing = false
        },
        moveLink: function(g) {
            if (this.$linkParent.find("li").length === 1) {
                this.$linkParent.removeClass("has-zci")
            }
            this.model.set("type", g);
            this.type = this.model.type;
            this.$linkParent = $("#duckbar_" + this.type);
            this.$linkParent.append(this.$link.parent());
            this.$linkParent.addClass("has-zci")
        },
        highlightLink: function() {
            if (this.isHighlighted) {
                return 
            }
            this.$link.append('<span class="zcm__underline"></span>');
            this.$link.addClass("is-highlighted");
            this.isHighlighted = true
        },
        getHeight: function(g) {
            return this.view && this.view.getHeight(g)
        },
        failed: function() {
            this.model.set("failed", true)
        },
        _createView: function() {
            var g = this._getViewClass();
            return new g({
                model: this.model,
                appendTo: this.$parent,
                events: {
                    close: this._onViewClose.bind(this),
                    "item-selected": this.emit.bind(this, "item-selected"),
                    "item-unselected": this.emit.bind(this, "item-unselected"),
                    "item-shown": this.emit.bind(this, "item-shown")
                }
            })
        },
        _upgradeView: function() {
            if (!this.availableViews[this.viewIndex + 1]) {
                return false
            }
            this.viewIndex++;
            var g = this._getViewClass(), h = g.prototype.isValid.call({
                requiredTemplates: g.prototype.requiredTemplates,
                model: this.model
            });
            if (!h) {
                return this._upgradeView()
            }
            this.view.destroy();
            this.view = this._createView();
            return true
        },
        _getViewClass: function() {
            var h = (typeof this.availableViews === "string") ? this.availableViews: this.availableViews[this.viewIndex], g = b[h];
            if (g) {
                h = g
            }
            return a.Views.AnswerBar.Answers[h]
        },
        _onViewClose: function() {
            this.emit("open")
        },
        _onLinkClick: function(g) {
            g.preventDefault();
            g.stopPropagation();
            this.emit("open")
        },
        _onItemsChanged: function() {
            if (!this.view) {
                return 
            }
            if (!this.view.isValid()) {
                if (!this._upgradeView()) {
                    return 
                }
            }
        }
    })
}(DDG);
!function(c) {
    var a = c.Models.Base, b = c.Models.AnswerSelectLists;
    b.Base = function(e) {
        a.call(this, e);
        this.select(this.values[0].id)
    };
    b.Base.prototype = $.extend({}, a.prototype, {
        select: function(e) {
            var f;
            this.values.forEach(function(g) {
                if (g.id === e) {
                    g.selected = true;
                    f = g
                } else {
                    g.selected = false
                }
            });
            this.set("selected", f)
        }
    })
}(DDG);
!function(c) {
    var b = c.Models.AnswerSelectLists, a = b.Base;
    b.Parameter = function(e) {
        a.call(this, e)
    };
    b.Parameter.prototype = $.extend({}, a.prototype, {
        serialize: function() {
            if (!this.selected ||!this.selected.id || this.disabled) {
                return ""
            }
            return this.key + ":" + this.selected.id
        }
    })
}(DDG);
!function(c) {
    var b = c.Models.AnswerSelectLists, a = b.Base;
    b.Source = function(e) {
        e.key = "src";
        a.call(this, e)
    };
    b.Source.prototype = $.extend({}, a.prototype, {
        getParameterQueryString: function() {
            var e = "f=";
            e += this.parameters.map(function(f) {
                return f.serialize()
            }).join(",");
            return e
        },
        getRequeryURL: function() {
            var e = this.selected.requeryURL;
            if (e.indexOf("?")===-1) {
                e += "?"
            } else {
                e += "&"
            }
            e += this.getParameterQueryString();
            return e
        },
        _updateParameters: function() {
            var e = this.selected.parameters;
            this.parameters.forEach(function(f) {
                f.disabled=!e[f.key];
                f.values.forEach(function(g) {
                    g.disabled = f.disabled || e[f.key].indexOf(g.id)===-1
                });
                f._emitChange("disabled")
            })
        },
        select: function(e) {
            a.prototype.select.call(this, e);
            this._updateParameters();
            this._deselectInvalidParameters()
        },
        _deselectInvalidParameters: function() {
            this.parameters.forEach(function(e) {
                if (e.selected && e.selected.disabled) {
                    e.select(e.values[0].id)
                }
            })
        }
    })
}(DDG);
!function(c) {
    var b = c.Models.Base, a;
    c.Models.AnswerItems.Base = a = function(e) {
        if (this.transform) {
            e = this.transform(e)
        }
        b.call(this, e);
        this._updateId()
    };
    a.extend = function(f) {
        var e = function(g) {
            a.call(this, g)
        };
        e.prototype = $.extend({}, a.prototype, f || {});
        return e
    };
    a.prototype = $.extend({}, b.prototype, {
        select: function() {
            this.unhighlight();
            this.set("selected", 1);
            if (this.topic) {
                this.topic.select()
            }
        },
        unselect: function() {
            this.set("selected");
            if (this.topic) {
                this.topic.unselect()
            }
        },
        highlight: function() {
            if (this.selected) {
                return 
            }
            this.set("highlighted", 1);
            if (this.topic) {
                this.topic.highlight()
            }
        },
        unhighlight: function() {
            this.set("highlighted");
            if (this.topic) {
                this.topic.unhighlight()
            }
        },
        toTemplateObject: function() {
            return $.extend({}, this, {
                meta: this.meta ? $.extend({}, this.answerMeta, this.meta): this.answerMeta
            })
        },
        _updateId: function() {
            if (typeof this.idField === "string" && this[this.idField]) {
                return this.id = this[this.idField]
            }
            if ($.isArray(this.idField)) {
                this.id = this.idField.map(function(e) {
                    return this[e]
                }, this).join("");
                if (this.id) {
                    return this.id
                }
            }
            return this.id = this.UUID()
        },
        getItemTemplate: function() {
            var e = this.templates, f = e.item;
            if (c.device.isMobile) {
                f = e.item_mobile || f
            }
            return f
        },
        getDetailTemplate: function() {
            var e = this.templates, f = e.detail;
            if (c.device.isMobile) {
                f = e.detail_mobile || f
            }
            return f
        },
        getItemDetailTemplate: function() {
            var e = this.templates, f = e.item_detail || e.detail;
            if (c.device.isMobile) {
                f = e.item_detail_mobile || e.detail_mobile || f
            }
            return f
        },
        canShowItemDetail: function() {
            if (!this.getItemDetailTemplate()) {
                return false
            }
            var e = this.answerMeta.options;
            if (e && e.noDetailWhen && e.noDetailWhen(this)) {
                return false
            }
            return true
        }
    })
}(DDG);
!function(a) {
    a.Models.AnswerItems.Audio = a.Models.AnswerItems.Base.extend({
        idField: "url"
    })
}(DDG);
!function(e) {
    var a = e.Models.AnswerItems.Base, h = 220, j = 150, b = 180, c = 120, k = 150, f = 90, m = 30;
    e.Models.AnswerItems.FatheadArticle = a.extend({
        transform: function(p) {
            var o = p.ImageWidth, n = p.ImageHeight, t = o / n, s = e.device;
            p.infoboxData = g(p);
            if (p.Image && o && n) {
                var r = j, q = h;
                if (s.isMobile) {
                    r = f;
                    q = k
                } else {
                    if (s.isTeapot()) {
                        r = c;
                        q = b
                    }
                }
                p.imageTile = p.ImageIsLogo || t > (q / r);
                if (p.imageTile) {
                    r -= m
                } else {
                    q = null
                }
                p.imageLoadingSize = e.scaleToFit(o, n, q, r)
            }
            return p
        }
    });
    var g = function(n) {
        if (n.Infobox) {
            return n.Infobox.content
        }
        if (n.RelatedTopics && n.RelatedTopics.length) {
            var p = [{
                heading: l("Related Topics")
            }
            ];
            for (var o = 0; o < n.RelatedTopics.length; o++) {
                var q = n.RelatedTopics[o];
                p.push({
                    url: q.FirstURL,
                    urlTitle: q.Text
                })
            }
            return p
        }
        return null
    }
}(DDG);
!function(b) {
    var a;
    b.Models.AnswerItems.FatheadListItem = a = b.Models.AnswerItems.Base.extend({
        idField: "FirstURL"
    })
}(DDG);
!function(g) {
    var f = g.Models.AnswerItems.Base, e = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    g.Models.AnswerItems.Place = f.extend({
        idField: "id",
        transform: function(y) {
            if (y.image === "") {
                delete y.image
            }
            y.polygonPoints = y.polygonPoints || y.polygonpoints;
            y.isRegion = y.polygonPoints && y.polygonPoints.length;
            var t = y.lat || y.latitude || (y.coordinates && y.coordinates.latitude) || (y.center && y.center[1]), m = y.lon || y.longitude || (y.coordinates && y.coordinates.longitude) || (y.center && y.center[0]);
            if (t&&!isNaN(t) && m&&!isNaN(m)) {
                y.latLng = [t, m];
                if (g.get_query().match(/latitude|longitude/i)) {
                    var s, k, o = "&#176;";
                    if (t > 0) {
                        s = t + o + " N, "
                    } else {
                        s = (t*-1) + o + " S, "
                    }
                    if (m > 0) {
                        k = m + o + " E"
                    } else {
                        k = (m*-1) + o + " W"
                    }
                    y.displayLatLon = s + k
                }
            }
            y.neighborhoodOrCity = (y.neighborhood && y.neighborhood !== "") ? y.neighborhood : y.city;
            if (y.engine === "Yelp") {
                y.ratingImageURL = "/assets/yelp-stars/" + y.rating + (Modernizr.svg ? ".svg" : ".v102.png")
            } else {
                if (y.engine === "Foursquare") {
                    if (y.rating > 7) {
                        y.ratingClass = "foursquare--high"
                    } else {
                        if (y.rating > 5) {
                            y.ratingClass = "foursquare--med"
                        } else {
                            if (y.rating) {
                                y.ratingClass = "foursquare--low"
                            }
                        }
                    }
                    if (!y.rating) {
                        y.rating = "n/a"
                    }
                }
            }
            y.rating = y.rating;
            y.hoursToday = y.hours && y.hours[h()];
            y.hours = b(y.hours);
            if (y.place_id) {
                var j = c(y);
                y.name = j.name;
                y.address = j.address;
                if (y.isRegion && (y.polygonPoints.length === 101 || y.polygonPoints.length === 16)) {
                    y.isRegion = false
                }
            }
            if (y.place_name) {
                if (y.address) {
                    var p = y.place_name.split(",");
                    y.name = p[0];
                    if (y.context) {
                        var n, x, v, q;
                        y.context.forEach(function(B) {
                            switch (B.id.split(".")[0]) {
                            case"place":
                                n = B.text;
                                break;
                            case"postcode":
                                x = B.text;
                                break;
                            case"region":
                                v = B.text;
                                break;
                            case"country":
                                q = B.country;
                                break;
                            default:
                            }
                        });
                        if (n !== v) {
                            y.address = x ? n + ", " + v + ", " + x : n + ", " + v
                        } else {
                            y.address = x ? n + ", " + x : n
                        }
                    }
                } else {
                    y.name = y.text;
                    if (y.context) {
                        var A, z, r, u;
                        y.context.forEach(function(B) {
                            switch (B.id.split(".")[0]) {
                            case"place":
                                A = B.text;
                                break;
                            case"postcode":
                                z = B.text;
                                break;
                            case"region":
                                r = B.text;
                                break;
                            case"country":
                                u = B.text;
                                break;
                            default:
                            }
                        });
                        if (A) {
                            if (A !== r) {
                                y.name = A;
                                y.address = r
                            } else {
                                y.name = A;
                                y.address = u
                            }
                        } else {
                            if (r) {
                                if (y.name !== r) {
                                    y.address = r
                                } else {
                                    y.address = u
                                }
                            }
                        }
                    }
                }
            }
            y.directions = a(y);
            return y
        }
    });
    var a = function(k) {
        var j = "https://bing.com/maps/?obox=1&q=";
        if (ip) {
            j = "maps://maps.apple.com/?q="
        } else {
            if (iosx) {
                j = "http://maps.apple.com/?q="
            } else {
                if (ia) {
                    j = "https://maps.google.com/?q="
                }
            }
        }
        var m = k.address || k.name || "";
        if (k.name && m !== k.name && k.address_lines && k.address_lines.length && k.address_lines.length < 2) {
            m = k.name + ", " + k.address
        }
        return j + encodeURIComponent(m)
    };
    var b = function(j) {
        j = (!j || typeof j !== "object" || $.isArray(j)) ? {} : j;
        var m = Object.keys(j);
        if (!m.length) {
            return null
        }
        var k = h();
        return e.map(function(n) {
            return {
                day: n,
                hours: j[n] || "Closed",
                isToday: n === k
            }
        })
    }, h = function() {
        return e[new Date().getDay()]
    }, c = function(s) {
        if (!s.address) {
            return {}
        }
        var k = s.display_name.split(",")[0], q = s.address, m = [], j = [], t;
        if (q.house_number) {
            if (q.house_number === k) {
                t = true
            } else {
                m.push(q.house_number)
            }
        }
        if (q.address27 && q.address27 !== k) {
            if (t) {
                k += " " + q.address27
            } else {
                m.push(q.address27)
            }
        } else {
            if (q.road && k !== q.road) {
                if (t) {
                    k += " " + q.road
                } else {
                    m.push(q.road)
                }
            }
        }
        if (["city", "state", "country", "census"].indexOf(s.type)>-1) {
            m = []
        }
        if (q.city && k !== q.city) {
            j.push(q.city)
        }
        if (q.state && k !== q.state) {
            j.push(q.state)
        }
        if (q.postcode && k !== q.postcode) {
            var o = q.postcode.split(";"), p = o[0], r = (o.length > 1) ? o[o.length - 1]: null, n = (r) ? p + "-" + r: p;
            j.push(n)
        }
        if (q.country&&!j.length && k !== q.country) {
            j.push(q.country)
        }
        if (m.length) {
            newAddress = m.join(" ") + ", " + j.join(", ")
        } else {
            newAddress = j.join(", ")
        }
        return {
            name: k,
            address: newAddress
        }
    }
}(DDG);
!function(a) {
    a.Models.AnswerItems.Product = a.Models.AnswerItems.Base.extend({
        idField: ["ASIN", "img_m", "img"]
    })
}(DDG);
!function(g) {
    var f = g.Models.AnswerItems.Base, e = {
        YouTube: {
            embedURL: "https://www.youtube-nocookie.com/embed/",
            searchURL: "https://www.youtube.com/results?search_query=",
            userURL: "https://www.youtube.com/user/",
            url: "https://www.youtube.com/watch?v=",
            params: {
                wmode: "transparent",
                iv_load_policy: 3,
                autoplay: 1,
                html5: 1,
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                theme: "light"
            }
        },
        Vimeo: {
            embedURL: "https://player.vimeo.com/video/",
            searchURL: "https://www.vimeo.com/search?q=",
            userURL: "https://vimeo.com/",
            url: "https://vimeo.com/",
            params: {
                api: 0,
                autoplay: 1
            }
        }
    };
    g.Models.AnswerItems.Video = f.extend({
        idField: "id",
        transform: function(h) {
            var j = e[h.provider];
            h.embedURL = j.embedURL + h.id + "?" + $.param(j.params);
            h.faviconURL = g.get_favicon_url(h.provider.toLowerCase());
            h.musicVideoData = a(h);
            h.url = j.url + h.id;
            h.searchURL = j.searchURL + rq;
            h.userURL = j.userURL + h.uploader;
            h.username = h.display_name;
            h.viewCount = b(h);
            h.publishedDate = c(h.published);
            return h
        },
        getITunesData: function(k) {
            var m = this.musicVideo();
            if (!m) {
                return k()
            }
            if (this._iTunesData) {
                return k(null, this._iTunesData)
            }
            var h = this, j = "/iit/" + encodeURIComponent(m.title);
            $.ajax({
                url: j,
                dataType: "json",
                success: function(n) {
                    h._iTunesData = n;
                    k(null, n)
                },
                error: function() {
                    k()
                }
            })
        }
    });
    var b = function(j) {
        var k = 0;
        if (j.statistics && j.statistics.viewCount) {
            k = parseInt(j.statistics.viewCount);
            if (!$.isNumeric(k)) {
                k = 0
            }
        }
        if (!k && j.duration.match(/\d+:\d+:\d+/)) {
            return lp("video", "Preview")
        }
        var h = lnp("video", "%d view", "%.0f views", k);
        return h.replace(/(\d)(?=(\d{3})+(\.\d+|)\b)/g, "$1,")
    }, a = function(q) {
        if (!q.category || q.category !== "Music") {
            return 
        }
        var p = q.title.replace(/\(.*\)|\[.*\]/g, "");
        p = p.replace(/\s+f(?:ea|)t\..*$/g, "");
        p = p.replace(/^\s+|\s+$/g, "");
        var j = p.split(" - "), n = j[0], k = j[1] || n, r = k !== n ? k + " " + n: k, m = "/iit/" + encodeURIComponent(p), o = encodeURIComponent("!a " + r), h = encodeURIComponent("!spotify " + r);
        return {
            title: p,
            artist: n,
            song: k,
            iTunesURL: m,
            amazonURL: o,
            spotifyURL: h
        }
    }, c = function(j) {
        var h = DDG.getDateFromString(j);
        return h.toDateString().substr(4)
    }
}(DDG);
!function(a) {
    a.Views.Base = function(b) {
        this.model = b.model;
        this.views = this.views || {};
        this.$parent = (typeof b.appendTo === "string") ? $(b.appendTo) : b.appendTo;
        this.$before = (typeof b.before === "string") ? $(b.before) : b.before;
        this.$after = (typeof b.after === "string") ? $(b.after) : b.after;
        if (b.events) {
            for (var c in b.events) {
                this.on(c, b.events[c])
            }
        }
        this._render(b)
    };
    a.Views.Base.prototype = $.extend({}, EventEmitter2.prototype, a.Mixins.Events, {
        destroy: function() {
            this.unbindEvents();
            this.destroyChildViews();
            this.$el.remove()
        },
        destroyChildViews: function() {
            !function b(e) {
                if (!e) {
                    return 
                }
                var f;
                if ($.isArray(e)) {
                    for (var g = 0; g < e.length; g++) {
                        f = e[g];
                        if (f && $.isArray(f)) {
                            b(f)
                        } else {
                            f && f.destroy && f.destroy()
                        }
                    }
                    e = null
                } else {
                    for (var h in e) {
                        f = e[h];
                        if (f && $.isArray(f)) {
                            b(f)
                        } else {
                            f && f.destroy && f.destroy()
                        }
                        delete e[h]
                    }
                }
            }(this.views);
            delete this.views
        },
        _render: function(b) {
            if (!this.$el) {
                if (b && b.$el) {
                    this.$el = b.$el
                } else {
                    this.$el = DDG.$exec_template(this.template, b || {})
                }
            }
            if (!this.$el) {
                throw new Error("Template Not Found: " + this.template)
            }
            this._addToDOM();
            this.$ = this.$el.find.bind(this.$el)
        },
        _rerender: function() {
            var c = this.$el.prev();
            if (c.length) {
                delete this.$parent;
                this.$after = c
            } else {
                var b = this.$el.next();
                if (b.length) {
                    delete this.$parent;
                    this.$before = b
                }
            }
            this.$el.remove();
            delete this.$el;
            this._render();
            this.emit("rerender")
        },
        _addToDOM: function() {
            if (this.$parent) {
                this.$parent.append(this.$el)
            } else {
                if (this.$before) {
                    this.$before.before(this.$el)
                } else {
                    if (this.$after) {
                        this.$after.after(this.$el)
                    }
                }
            }
        },
        _cacheElems: function(f, c) {
            for (var e = 0; e < c.length; e++) {
                var b = f + "-" + c[e], g = "$" + c[e].replace(/-/g, "");
                this[g] = this.$(b)
            }
        }
    })
}(DDG);
!function(f) {
    var a = f.Views.Base, q = "nav-menu__item", b = "is-open", m = "has-slideout-open", g = ".js-side-menu-open", j = ".js-side-menu-region", c = ".js-side-menu-msg", e = "theme-is-selected", p = "menuTouchOrClick";
    f.Views.SideMenu = function(s) {
        this.settings = f.settings;
        this.pageType = s.pageType;
        this.featuredThemes = this.settings.themes.getFeaturedThemes();
        a.call(this, s);
        f.tap(g, n.bind(this), {
            fallbackToClick: true
        });
        f.tap(this.$close, n.bind(this), {
            fallbackToClick: true
        });
        f.touchOrClick(c, function(t) {
            nutp("hl")
        });
        for (var r = 0; r < this.$theme.length; r++) {
            f.touchOrClick($(this.$theme[r]), h.bind(this, this.featuredThemes[r].id))
        }
        f.tap(j, o.bind(this), {
            fallbackToClick: true
        });
        this.$("a").click(k.bind(this));
        this.$el.bind("touchstart click", function(t) {
            t.stopPropagation()
        });
        this.settings.on("change:" + this.settings.THEME_KEY, this._selectTheme.bind(this))
    };
    f.Views.SideMenu.prototype = $.extend({}, a.prototype, {
        template: "side_menu",
        linkTemplate: "side_menu_link",
        show: function() {
            if (this._isShowing) {
                return 
            }
            f.ImageLoader.trigger("sidemenu");
            this.$el.css("display", "block");
            this.$el.addClass(b);
            f.$html.addClass(m);
            f.touchOrClick(f.$doc, function() {
                this.hide()
            }.bind(this), {
                namespace: p
            });
            this._isShowing = true;
            this.emit("opened")
        },
        hide: function() {
            if (!this._isShowing) {
                return 
            }
            this.$el.removeClass(b);
            f.$html.removeClass(m);
            f.touchOrClick(f.$doc, "", {
                namespace: p
            });
            this._isShowing = false;
            this.emit("closed")
        },
        _render: function(v) {
            var x = f.device, y = x.canAddToBrowser(), t = DDG.$exec_template(this.linkTemplate, v), z = f.settings.isDefault("kak"), u = this.pageType !== "home", s = f.querystringParam("t");
            v.themes = this.featuredThemes;
            if (v.showRegion) {
                v.region = {
                    hasRegion: this.settings.region.hasRegion(),
                    name: this.settings.region.getName(),
                    iconURL: this.settings.region.getSmallIconURL()
                }
            }
            if (x.isMobileDevice && y) {
                for (var r in f.Data.Apps) {
                    if (x[r]) {
                        v.addToBrowserLinks = [{
                            href: f.Data.Apps[r],
                            title: l("Get App")
                        }
                        ]
                    }
                }
            }
            a.prototype._render.call(this, v);
            this._cacheElems(".js-side-menu", ["close", "add-to", "theme"]);
            $(v.appendLinkTo).append(t);
            this._selectTheme(this.settings.get(this.settings.THEME_KEY));
            if (z && u&&!x.isMobileDevice) {
                if (s) {
                    this.views.spread = new f.Views.SpreadBadge({
                        appendTo: this.$el
                    })
                } else {
                    if (y) {
                        this.views.addToBrowser = new f.Views.AddToBrowserBadge({
                            noBreak: true,
                            appendTo: this.$el
                        })
                    }
                }
            }
        },
        _selectTheme: function(s) {
            this.$("." + e).removeClass(e);
            s = s || this.settings.getDefault(this.settings.THEME_KEY);
            for (var r = 0; r < this.featuredThemes.length; r++) {
                if (s === this.featuredThemes[r].id) {
                    $(this.$theme[r]).addClass(e)
                }
            }
        }
    });
    var k = function(s) {
        var r = $(s.target).attr("href");
        if (r !== "#") {
            nutp("sml_" + r)
        }
    }, n = function(s) {
        s.preventDefault();
        s.stopPropagation();
        if (Modernizr.touch) {
            var r = DDG.get_now();
            if (this._lastTime && r - this._lastTime < 600) {
                return 
            }
            this._lastTime = r
        }
        if (!this._isShowing) {
            nutp("smo_" + this.pageType);
            this.show()
        } else {
            this.hide()
        }
    }, h = function(s, r) {
        r.preventDefault();
        r.stopPropagation();
        this.nutpTimeout && clearTimeout(this.nutpTimeout);
        nutp("smtc_" + s);
        this.settings.setTheme(s, {
            saveToCloud: true
        });
        this.nutpTimeout = setTimeout(function() {
            nutp("smtf_" + s)
        }, 3000)
    }, o = function(r) {
        r.preventDefault();
        this.views.regionSelector = this.views.regionSelector || new f.Views.Region.Selector({
            region: this.settings.region,
            appendTo: $("body")
        });
        this.views.regionSelector.show()
    }
}(DDG);
!function(e) {
    var a = e.Views.Base, k = "js-search-setting-input";
    e.Views.SearchBar = function(o) {
        this.settings = o.settings;
        this.hidden = o.hidden;
        this.$el = typeof o.el === "string" ? $(o.el) : o.el;
        a.call(this, o)
    };
    e.Views.SearchBar.prototype = $.extend({}, a.prototype, {
        _render: function(o) {
            a.prototype._render.call(this, o);
            this._cacheElems(".js-search", ["input", "clear", "button", "hidden", "overlay"]);
            this.$body = $("body");
            this._upgradeToJSForm();
            this._updateInput(w.rq && e.get_query());
            this.$input.on("keyup", m.bind(this)).on("touchstart focus", j.bind(this));
            this.$clear.add(this.$button).on("focus", b.bind(this));
            e.keyboard.on("escape.searchbar", g.bind(this));
            e.touchOrClick(this.$clear, n.bind(this));
            e.touchOrClick(this.$el, c.bind(this));
            if (Modernizr.touch) {
                this.$button.on("touchstart", f.bind(this))
            }
            this.$input[0].setAttribute("autocapitalize", "off");
            this.$input[0].setAttribute("autocorrect", "off");
            this.settings.on("change:" + this.settings.AUTOCOMPLETE_KEY, this._updateAutocomplete.bind(this));
            this.settings.on("change", this._updateHiddenFields.bind(this));
            this.settings.on("change:cloudsave", this._updateHiddenFields.bind(this));
            this.hidden.on("change", this._updateHiddenFields.bind(this));
            this._updateAutocomplete();
            this._updateHiddenFields()
        },
        focus: function() {
            if (fq) {
                return 
            }
            fq = 1;
            this.$input.focus();
            this.$el.addClass("search--focus");
            e.$html.addClass("has-search-focus");
            e.tap(this.$body, h.bind(this), {
                fallbackToClick: true,
                namespace: "searchbar"
            });
            this.hasFocus = true
        },
        unfocus: function() {
            if (!fq) {
                return 
            }
            fq = 0;
            this.$input.blur();
            this.$el.removeClass("search--focus");
            e.$html.removeClass("has-search-focus");
            e.tap(this.$body, null, {
                namespace: "searchbar"
            });
            if (e.keyboard.namespace === "searchbar") {
                e.keyboard.set("namespace")
            }
            this.hasFocus = false
        },
        requery: function() {
            this._updateHiddenFields();
            this.$el.submit()
        },
        _autocompleteOn: function() {
            if (!this.$input || this.autocomplete) {
                return 
            }
            this.autocomplete = new DDG.Views.AutoComplete({
                $input: this.$input
            });
            this.autocomplete.on("submit", function() {
                this.$el.submit()
            }.bind(this));
            this.$el.append(this.autocomplete.$el)
        },
        _autocompleteOff: function() {
            this.autocomplete && this.autocomplete.destroy();
            delete this.autocomplete
        },
        _clearForm: function() {
            if (this.autocomplete) {
                this.autocomplete.clear();
                this.autocomplete.hide()
            }
            this.$input.val("") && this.$input.focus();
            this._updateInput()
        },
        _upgradeToJSForm: function() {
            this.$el.addClass("search--adv").removeClass("search");
            this.$input.addClass("search__input--adv").removeClass("search__input");
            this.$el.hover(function() {
                $(this).addClass("search--hover")
            }, function() {
                $(this).removeClass("search--hover")
            })
        },
        _updateAutocomplete: function() {
            var o = this.settings.get(this.settings.AUTOCOMPLETE_KEY);
            if (o && o == "-1") {
                this._autocompleteOff()
            } else {
                this._autocompleteOn()
            }
        },
        _updateHiddenFields: function() {
            this.$el.find("." + k).remove();
            var p = this.settings.toJSON({
                onlyURLParams: true
            });
            p = $.extend({}, p, this.hidden.toJSON());
            for (var o in p) {
                this.$hidden.append('<input type="hidden" name="' + o + '" value="' + p[o] + '" class="' + k + '" />')
            }
        },
        _updateInput: function(o) {
            this._updateClearButton()
        },
        _updateClearButton: function() {
            if (!this.$input) {
                return 
            }
            var o = this.$input.val();
            if (!o || o === "") {
                this.$el.removeClass("has-text");
                this.$clear.addClass("empty");
                this._hasText = ""
            } else {
                if (!this._hasText) {
                    this.$el.addClass("has-text");
                    this.$clear.removeClass("empty");
                    this._hasText = 1
                }
            }
        },
        _updateOverlay: function(p) {
            if (!this.$input) {
                return 
            }
            p = p || this.$input.val();
            var o = this.getSiteQuery(p);
            if (o) {
                if (!this._hasOverlay) {
                    this.$el.addClass("has-overlay");
                    this._hasOverlay = true
                }
                this.$overlay.text(o.before);
                this.$overlay.append($('<span class="search__overlay__site"></span>').text(o.site));
                if (o.after) {
                    this.$overlay.append(document.createTextNode(o.after))
                }
            } else {
                if (this._hasOverlay) {
                    this.$el.removeClass("has-overlay");
                    this._hasOverlay = false
                }
            }
        },
        getSiteQuery: function(q) {
            if (!q) {
                return false
            }
            q = e.strip_html(q);
            var p = /^(.*)(site:([^\s]+))(.*)$/, o = q.match(p);
            if (!o ||!o.length) {
                return 
            }
            return {
                all: o[0],
                url: o[3],
                site: o[2],
                before: o[1],
                after: o[4],
                query: o[1] + o[4]
            }
        },
        addBangToSiteInQuery: function(o, p) {
            return p.replace(new RegExp("(^|\\s)(" + o + ")($|\\s)", "i"), "$1!$2$3")
        }
    });
    var m = function() {
        this.focus();
        if (!e.keyboard.namespace) {
            e.keyboard.set("namespace", "searchbar")
        }
        this._updateClearButton()
    }, n = function(o) {
        o.preventDefault();
        o.stopPropagation();
        this._clearForm()
    }, b = function(o) {
        e.keyboard.set("namespace", "searchbar")
    }, j = function(o) {
        o.stopPropagation();
        e.keyboard.set("namespace", "searchbar");
        this.emit("focus");
        this.focus()
    }, f = function(o) {
        o.stopPropagation()
    }, c = function(o) {
        o.stopPropagation();
        this.focus()
    }, h = function(o) {
        e.device.isMobileDevice && o.preventDefault();
        o.stopPropagation();
        this.emit("unfocus");
        this.unfocus()
    }, g = function(o) {
        if (this.autocomplete && this.autocomplete.isVisible()) {
            this.autocomplete.hide()
        } else {
            this.unfocus()
        }
    }
}(DDG);
!function(c) {
    var b = c.Views.Base, a = "no-scroll";
    c.Views.Slider = function(e) {
        e = e || {};
        this.$el = e.$el || e.el && $(e.el);
        b.call(this, e);
        this.init(e)
    };
    c.Views.Slider.prototype = $.extend({}, b.prototype, {
        init: function(h) {
            if (!h.items) {
                return 
            }
            this.items = [];
            this.$items = this.$el.find(h.items);
            this.noLoop = h.noLoop || "";
            if (h.next && h.prev) {
                this.$next = this.$el.find(h.next);
                this.$prev = this.$el.find(h.prev);
                this.$next.bind("click", this._onNextClick.bind(this));
                this.$prev.bind("click", this._onPrevClick.bind(this))
            }
            if (h.nav) {
                this.nav = h.nav;
                this.nav.className = h.nav.className || "slider-nav";
                if (this.nav.bindOnly) {
                    this.$nav = this.$el.find("." + this.nav.className)
                }
            }
            for (var g = 0, e = this.$items.length; g < e; g++) {
                var j = {}, f = $(this.$items[g]);
                j.idx = g;
                j.$html = f;
                if (h.nav) {
                    if (h.nav.bindOnly || h.nav.noBind) {
                        j.$nav = $(this.$nav[g]);
                        j.$nav.on("click", this._onNavClick.bind(this, g))
                    } else {
                        j.$nav = this._makeNav(g)
                    }
                }
                this.items[g] = j
            }
            this.items[0].$html.addClass("is-first");
            this.activeByIndex(0);
            if (h.animate) {
                this._animate = true;
                this.$slideEl = (h.slideEl) ? this.$el.find(h.slideEl) : this.items[0].$html;
                this.slideCb = h.animateCallback || ""
            }
            if (h.timeout) {
                this._timing = parseInt(h.timeout);
                this.setTimer();
                if (h.killtimeronclick) {
                    this._killTimer = 1
                }
            }
        },
        _makeNav: function(f) {
            if (!this.$navWrap) {
                this.$navWrap = this._makeNavWrap()
            }
            var e = $('<li class="' + this.nav.className + '__item"></li>');
            e.on("click", this._onNavClick.bind(this, f));
            e.appendTo(this.$navWrap);
            return e
        },
        _makeNavWrap: function() {
            var e = $('<ul class="' + this.nav.className + '"></ul>');
            e.appendTo(this.$el);
            return e
        },
        setTimer: function() {
            this.clearTimer();
            var e = this;
            this.Timer = setTimeout(function() {
                e.advanceSlides()
            }, this._timing)
        },
        clearTimer: function() {
            var e = this;
            clearTimeout(e.Timer)
        },
        killTimer: function() {
            this.clearTimer();
            this._timing = ""
        },
        advanceSlides: function(e) {
            if (!e) {
                e = 1
            }
            e = parseInt(e);
            var f = this._activeItem.idx + e;
            if (this.noLoop && (f >= this.items.length || f < 0)) {
                return false
            }
            if (f >= this.items.length) {
                f = 0
            } else {
                if (f < 0) {
                    f = this.items.length - 1
                }
            }
            this.activeByIndex(f);
            if (this._timing) {
                this.setTimer()
            }
        },
        activeByIndex: function(e) {
            var f = this.items[e];
            if (!f) {
                return 
            }
            this.deactivate();
            this._activeItem = f;
            this._activeItem.$html.addClass("is-active");
            if (this.nav) {
                this._activeItem.$nav.addClass("is-active")
            }
            if (this.noLoop && this.$next && this.$prev) {
                this._checkLoopPosition(e)
            }
            if (this._animate) {
                this.slideItems(e)
            }
        },
        deactivate: function() {
            if (!this._activeItem) {
                return 
            }
            this._activeItem.$html.removeClass("is-active");
            if (this.nav) {
                this._activeItem.$nav.removeClass("is-active")
            }
        },
        slideItems: function(e) {
            var f = e * 100;
            this.$slideEl.css("margin-left", "-" + f + "%");
            if (this.slideCb) {
                this.slideCb(e)
            }
        },
        _checkLoopPosition: function(e) {
            if (this.$curNav) {
                this.$curNav.removeClass(a);
                delete this.$curNav
            }
            if (e === 0) {
                this.$prev.addClass(a);
                this.$curNav = this.$prev
            } else {
                if (e == this.items.length - 1) {
                    this.$next.addClass(a);
                    this.$curNav = this.$next
                }
            }
        },
        _onNextClick: function() {
            if (this._killTimer) {
                this.killTimer()
            }
            this.advanceSlides()
        },
        _onPrevClick: function() {
            if (this._killTimer) {
                this.killTimer()
            }
            this.advanceSlides( - 1)
        },
        _onNavClick: function(f, g) {
            if (this.nav.noClick) {
                return 
            }
            if (this._killTimer) {
                this.killTimer()
            }
            this.activeByIndex(f);
            if (this._timing) {
                this.setTimer()
            }
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.Base;
    c.Views.PlayButton = function(g) {
        this.url = g.url;
        b.call(this, g);
        this.$btn = this.$(".js-play-btn-icn");
        this.$err = this.$(".js-play-btn-err");
        this.$btn.on("click", f.bind(this))
    };
    c.Views.PlayButton.prototype = $.extend({}, b.prototype, {
        template: "play_button"
    });
    var f = function() {
        this.$btn.addClass("is-loading");
        this.$btn.text("");
        c.require("audio", a.bind(this))
    }, a = function(h) {
        if (!h ||!h.ready) {
            return e.call(this)
        }
        var g = this;
        h.play("id", this.url, {
            autoPlay: true,
            onload: function(j) {
                if (!j) {
                    e.call(g)
                }
            },
            onplay: function() {
                g.$btn.removeClass("is-loading");
                g.$btn.addClass("is-playing")
            },
            onfinish: function() {
                g.$btn.removeClass("is-playing");
                g.$btn.text("►")
            }
        })
    }, e = function() {
        this.$btn.addClass("is-hidden");
        this.$err.removeClass("is-hidden");
        this.$err.text("Audio Unavailable")
    }
}(DDG);
!function(c) {
    var b = c.Views.Base, e = 50, a = 50, f = 2000;
    c.Views.Notification = function(g) {
        b.call(this, g);
        this.$text = this.$(".js-notification-text");
        this._initTime = new Date().getTime();
        this.$el.on("click touchstart", function(h) {
            h.stopPropagation();
            this.hide()
        }.bind(this))
    };
    c.Views.Notification.prototype = $.extend({}, b.prototype, {
        template: "notification",
        flash: function(h, g) {
            if (new Date().getTime() - this._initTime < e) {
                return setTimeout(this.flash.bind(this, h, g), a)
            }
            this.hide();
            this.$text.text(h);
            this.$el.addClass("is-showing");
            this._timeout = setTimeout(this.hide.bind(this), g || f)
        },
        hide: function() {
            if (this._timeout) {
                clearTimeout(this._timeout);
                delete this._timeout
            }
            this.$el.removeClass("is-showing")
        }
    })
}(DDG);
!function(c) {
    var a = c.Views.Base, e = "imgFallback=/assets/icons/favicons/bang.png", g = "acp", b = g + "--highlight", m = g + "--bang", j = "acp-wrap--bang", h = "acp-wrap__column--left", f = "acp-wrap__column--right", k = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };
    c.Views.AutoComplete = function(n) {
        a.call(this, n);
        this.$input = n.$input;
        this.$wrap = this.$(".acp-wrap");
        this.$footer = this.$(".acp-footer");
        this._endpoint = c.services.getURL("autocomplete");
        this.$el.on("mouseleave.autocomplete", this._onMouseLeave.bind(this)).on("mousemove.autocomplete", this._onMouseMove.bind(this)).on("mouseenter.autocomplete", "." + g, this._onMouseEnter.bind(this)).on("touchstart.autocomplete", "." + g, this._onTouchStart.bind(this)).on("click.autocomplete", "." + g, this._onClick.bind(this));
        this.$input.on("keyup.autocomplete", this._onKeyUp.bind(this)).on("blur.autocomplete", this._onBlur.bind(this)).on("paste.autocomplete", this._onPaste.bind(this)).on("click.autocomplete", this.show.bind(this));
        this.bindEvents([[c.keyboard, "escape.autocomplete", this._onEscape], [c.keyboard, "enter.autocomplete", this._onEnter], [c.keyboard, "up.autocomplete", this._onUp], [c.keyboard, "down.autocomplete", this._onDown], [c.keyboard, "left.autocomplete", this._onLeft], [c.keyboard, "right.autocomplete", this._onRight], [c.keyboard, "down.searchbar", this._onSearchBarDown]])
    };
    c.Views.AutoComplete.prototype = $.extend({}, a.prototype, {
        template: "autocomplete",
        suggestions: [],
        _cache: {},
        _highlightedIndex: - 1,
        _currentQuery: "",
        _visible: false,
        _bangLayoutTemplate: "autocomplete_bang_layout",
        _textItemTemplate: "autocomplete_text_item",
        _bangItemTemplate: "autocomplete_bang_item",
        destroy: function() {
            this.$input.off(".autocomplete");
            a.prototype.destroy.call(this)
        },
        _onMouseMove: function(n) {
            this._mouseMoved = true
        },
        _onMouseEnter: function(o) {
            var n = $(o.currentTarget).data("index");
            if (this._mouseMoved&&!c.keyboard.active) {
                this._highlightItem(n);
                this._selectItem(n)
            }
        },
        _onMouseLeave: function() {
            if (this._mouseMoved) {
                this._highlightItem( - 1);
                this._selectItem( - 1)
            }
        },
        _onTouchStart: function(o) {
            o.stopPropagation();
            var n = $(o.currentTarget).data("index");
            this._highlightItem(n);
            this._selectItem(n)
        },
        _onBlur: function(n) {
            if (this._highlightedIndex>-1) {
                return 
            }
            this.hide()
        },
        _onClick: function(p) {
            var n = $(p.currentTarget), o = n.data("index");
            this._selectItem(o);
            if (!this.isBangQuery(this._currentQuery)) {
                this.emit("submit")
            }
            this.clear();
            this.hide();
            this._focusInput()
        },
        _updateScroll: function() {
            var o, q, r, p, n;
            o = this.$("." + g + "." + b);
            if (o.length === 0) {
                return 
            }
            q = this.$wrap.scrollTop();
            r = parseInt(this.$wrap.css("height"));
            p = o.position().top;
            n = p + parseInt(o.css("height")) + 2 * parseInt(o.css("padding-bottom"));
            if (p < 0) {
                this.$wrap.scrollTop(q + p)
            } else {
                if (n > r) {
                    this.$wrap.scrollTop(q + n - r)
                }
            }
        },
        _onEscape: function(n) {
            if (!this._visible) {
                return 
            }
            this._highlightItem( - 1);
            this._selectItem( - 1);
            this._focusInput();
            this.hide()
        },
        _onEnter: function(n) {
            if (!this._visible) {
                return 
            }
            this._selectItem(this._highlightedIndex);
            if (this.isBangQuery(this._currentQuery)) {
                n.stopImmediatePropagation();
                n.preventDefault();
                this._focusInput()
            } else {
                this.emit("submit")
            }
            this.clear();
            this.hide()
        },
        _onSearchBarDown: function(n) {
            if (!this._visible) {
                return 
            }
            this._onDown(n);
            c.keyboard.set("namespace", "autocomplete");
            if (this.isBangQuery(this._currentQuery)) {
                this.$input.blur()
            }
        },
        _onPaste: function(n) {
            setTimeout(function() {
                this._currentQuery = this.$input.val();
                this._getSuggestions(this._currentQuery)
            }.bind(this), 0)
        },
        _onKeyUp: function(o) {
            var n = o.keyCode;
            if (this.$input.val() === this._currentQuery || n === k.UP || n === k.DOWN || n === k.LEFT || n === k.RIGHT || n === k.RETURN || n === k.ESC) {
                return 
            }
            this._currentQuery = this.$input.val();
            if (this._currentQuery) {
                this._getSuggestions(this._currentQuery)
            } else {
                this.suggestions = [];
                this.hide()
            }
        },
        _selectItem: function(n) {
            if (n===-1) {
                this.$input.val(this._currentQuery);
                return 
            } else {
                if (!this.suggestions[n]) {
                    return 
                }
            }
            var p = this.suggestions[n].phrase, o = this.isBangQuery(this._currentQuery);
            if (o) {
                p += " "
            }
            this.$input.val(p)
        },
        _highlightItem: function(n) {
            this.$("." + b).removeClass(b);
            if (n>-1) {
                this.$("." + g + "[data-index='" + n + "']").addClass(b)
            }
            this._highlightedIndex = n
        },
        isBangQuery: function(n) {
            return !!n.match(/^![^! ]*\s?$/)
        },
        _isColumnLayout: function() {
            return this.isBangQuery(this._currentQuery)&&!c.device.isMobile
        },
        _renderBangResults: function(q) {
            var r = this._bangItemTemplate, p, t, n = c.device.isMobile, s, o;
            this.$wrap.append(DDG.$exec_template(this._bangLayoutTemplate));
            p = this.$("." + h);
            t = this.$("." + f);
            s = Math.ceil(q.length / 2);
            $.each(q, function(v, u) {
                u.i = v;
                u.originalQuery = this._currentQuery;
                if (u.phrase.length > 11) {
                    u.longPhrase = true
                }
                u.image += "?" + e;
                o = DDG.exec_template(r, u);
                if (v < s || n) {
                    p.append(o)
                } else {
                    t.append(o)
                }
            }.bind(this));
            this.$wrap.addClass(j);
            this.$footer.removeClass("is-hidden")
        },
        _renderTextResults: function(o) {
            var p = this._textItemTemplate, n = c.strip_all_html(this._currentQuery);
            $.each(o, function(r, q) {
                var s = c.strip_all_html(q.phrase);
                this.$wrap.append(DDG.$exec_template(p, {
                    i: r,
                    phrase: s.replace(n, "<strong>" + n + "</strong>")
                }))
            }.bind(this));
            this.$wrap.removeClass(j);
            this.$footer.addClass("is-hidden")
        },
        _displayResults: function(n) {
            if (n.length === 0) {
                this.hide();
                return 
            }
            if (!this._visible) {
                this.show()
            }
            this._mouseMoved = false;
            this._highlightedIndex =- 1;
            this.$wrap.html("");
            if (this.isBangQuery(this._currentQuery)) {
                this._renderBangResults(n)
            } else {
                this._renderTextResults(n)
            }
        },
        _getSuggestions: function(n) {
            if (this._cache[n]) {
                this.suggestions = this._cache[n];
                return this._displayResults(this._cache[n])
            }
            $.ajax({
                url: this._endpoint,
                crossDomain: true,
                data: {
                    q: c.strip_all_html(n)
                },
                type: "GET",
                context: this,
                dataType: "jsonp"
            }).fail(function() {
                this.hide()
            }).done(function(o) {
                if (n !== this._currentQuery) {
                    return 
                }
                this.suggestions = o;
                this._cache[n] = o;
                this._displayResults(o)
            })
        },
        _selectItemByOffset: function(o) {
            var n = this._highlightedIndex + o;
            if (n >= this.suggestions.length) {
                return 
            }
            this._highlightItem(n);
            this._selectItem(n);
            this._updateScroll()
        },
        _focusInput: function() {
            var n = this.$input.val();
            this.$input.focus().val(n)
        },
        _onUp: function(o) {
            o.preventDefault();
            var n = Math.ceil(this.suggestions.length / 2);
            if (this._highlightedIndex === 0) {
                this._focusInput()
            }
            if (this._isColumnLayout() && this._highlightedIndex === n) {
                return 
            }
            this._selectItemByOffset( - 1)
        },
        _onDown: function(p) {
            p.preventDefault();
            var o = Math.ceil(this.suggestions.length / 2), n;
            n = this._highlightedIndex === this.suggestions.length - 1 || (this._isColumnLayout() && this._highlightedIndex === o - 1);
            if (n) {
                return 
            }
            this._selectItemByOffset(1)
        },
        _onLeft: function(o) {
            if (!this.isBangQuery(this._currentQuery)) {
                return 
            }
            o.preventDefault();
            var n = Math.ceil(this.suggestions.length / 2);
            if (this._isColumnLayout() && this._highlightedIndex >= n) {
                this._selectItemByOffset( - n)
            }
        },
        _onRight: function(o) {
            if (!this.isBangQuery(this._currentQuery)) {
                return 
            }
            o.preventDefault();
            var n = Math.ceil(this.suggestions.length / 2);
            if (this._isColumnLayout() && this._highlightedIndex < n) {
                this._selectItemByOffset(n)
            }
        },
        show: function() {
            if (this.suggestions.length > 0) {
                this._visible = true;
                this._mouseMoved = false;
                this.$el.show()
            }
        },
        hide: function() {
            this._visible = false;
            this._mouseMoved = false;
            this.$el.hide();
            if (c.keyboard.namespace === "autocomplete") {
                c.keyboard.set("namespace")
            }
        },
        clear: function() {
            this._cache = {};
            this.suggestions = [];
            this._highlightedIndex =- 1;
            this._currentQuery = ""
        },
        isVisible: function() {
            return this._visible
        }
    })
}(DDG);
!function(e) {
    var c = e.Views.Base, a = "has-ad", f = "has-ad--x2", b = "has-ad--sitelinks";
    e.Views.Ads = function(g) {
        c.call(this, g);
        this.bindEvents([[this.model, "change:ads", this._updateHeight], [this.model, "change:defaultAds", this._updateHeight], [this.model, "change:pendingAds", this._updateHeight]])
    };
    e.Views.Ads.prototype = $.extend({}, c.prototype, {
        fallbackToDefault: function() {
            if (this.model.isBlocked() || this.model.ads.length) {
                return 
            }
            var g = this.model.getAds();
            if (g && g.length) {
                this.$el.addClass(a);
                nrn("a", g)
            } else {
                if (this.$el.hasClass(a)) {
                    this.$el.removeClass(a)
                }
            }
        },
        _updateHeight: function() {
            if (this.model.isBlocked()) {
                return 
            }
            this.$el.toggleClass(a, this.model.hasAds());
            this.$el.toggleClass(b, this.model.hasSiteLinks());
            var h = this.model.getAds(), g = h.length > 1&&!e.device.isMobile;
            this.$el.toggleClass(f, g)
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Base;
    BANG_REQUERY_TIMEOUT = 500, BANG_SHORT_MESSAGE_THRESHOLD = 800;
    b.Views.SERPMessages = function(c) {
        this.ads = c.ads;
        this.searchbar = c.searchbar;
        a.call(this, c);
        if (c.safeSearch) {
            this._showSafeSearchMessage()
        } else {
            if (c.siteSearch) {
                this._showSiteMessage()
            } else {
                if (c.bangs) {
                    this._showBangMessage(c.bangs)
                }
            }
        }
    };
    b.Views.SERPMessages.prototype = $.extend({}, a.prototype, {
        _showSafeSearchMessage: function() {
            if (!b.settings.isDefault("kp")) {
                return 
            }
            this.$el.append(b.exec_template("safe_search", {
                searchTerm: "<b>" + rqd + "</b>",
                tempURL: "/?q=" + rq + " !safeoff" + kurl
            }));
            this.$(".js-safe-search-perm").on("click", function(c) {
                c.preventDefault();
                b.settings && b.settings.set("kp", "-1", {
                    saveToCloud: true
                }, function() {
                    window.location.reload()
                })
            })
        },
        _showSiteMessage: function() {
            var e = this.searchbar.getSiteQuery(DDG.get_query()), c;
            if (e) {
                c = DDG.$exec_template("site_query", {
                    url: encodeURIComponent(e.url),
                    queryEncoded: encodeURIComponent(e.query)
                });
                c.find(".js-site-query-term").text(e.query);
                c.find(".js-site-query-url").text(e.url);
                this.$el.append(c)
            }
        },
        _showBangMessage: function(c) {
            this.$el.append(DDG.exec_template("bang_suggestion", {
                siteName: c.site,
                bangName: "!" + c.bang,
                showShortMessage: b.device.width < BANG_SHORT_MESSAGE_THRESHOLD
            }));
            this.$(".js-bang-link").click(c.bang, this._onBangClick.bind(this))
        },
        _onBangClick: function(h) {
            h.preventDefault();
            var c = h.data, g = this.searchbar.$input.val(), f = this.searchbar.addBangToSiteInQuery(h.data, g);
            this.searchbar.$input.val(f);
            setTimeout(function() {
                this.searchbar.requery()
            }.bind(this), BANG_REQUERY_TIMEOUT)
        }
    })
}(DDG);
!function(f) {
    var b = f.Views.Base, e = f.Views.AnswerBar.Meta, c = 43, a = {
        itemType: l("Items"),
        expandModeIcon: "G",
        exitModeIcon: "×",
        minTopicsForMenu: 3
    };
    e.MetaBar = function(h) {
        if (h.heading) {
            h.primaryText = h.heading
        }
        if (h.altMeta) {
            h.secondaryText = h.altMeta
        }
        $.extend(this, a, h);
        this.itemType = f.capitalizeWords(this.itemType);
        this.parent = h.parent;
        this.notFixed = h.notFixed;
        this.showParams = this.model.parameters && this.model.parameters.length;
        this.showSources = this.model.sources && this.model.sources.values.length > 1;
        b.call(this, h);
        var g = this.model;
        this.bindEvents([[g, "change:items", this._onItemsChanged], [g, "change:expanded", this._onExpandedChanged], [g, "change:canExpand", this._onExpandedChanged], [g, "change:topics", this._createTopicMenu], [f.device, "scroll", this._onScroll]])
    };
    e.MetaBar.prototype = $.extend({}, b.prototype, {
        template: "metabar",
        show: function() {
            this.$el.removeClass("is-hidden");
            this._height = this.$el.outerHeight(true)
        },
        hide: function() {
            this.$el.addClass("is-hidden")
        },
        updateSearchTerm: function(g) {
            this.searchTerm = g;
            this.$term.html(this.searchTerm);
            if (this.searchTerm) {
                if (!is_mobile) {
                    this.$for.show()
                }
                if (!is_mobile && this.searchTerm.match(new RegExp(this.itemType, "gi"))) {
                    this.$itemtype.hide()
                } else {
                    this.$itemtype.show()
                }
            } else {
                this.$for.hide()
            }
        },
        getHeight: function() {
            return c
        },
        isStuck: function() {
            return DDG.hasClass(this.id, "is-stuck")
        },
        _render: function() {
            b.prototype._render.call(this, $.extend({}, this, {
                showMoreAt: this.sourceName,
                showDropdowns: this.showParams || this.showSources,
                hideMoreAtText: is_mobile,
                showingHTML: DDG.exec_template("metabar_showing", this)
            }));
            DDG.wrapLinkClicks(this.$("a"), {
                nutp: "iag_" + this.model.pixelId
            });
            if (Modernizr.touch || is_mobile) {
                this.$el.removeClass("metabar--fixed").addClass("metabar--unsticky")
            }
            this._cacheElems(".js-metabar", ["count", "primary", "loading", "mode", "term", "itemtype", "for", "dropdowns"]);
            DDG.touchOrClick(this.$mode, this._onModeClick.bind(this));
            this._updateMode();
            this._updateCount();
            this.updateSearchTerm(this.searchTerm);
            this._createTopicMenu();
            this._createAttribution();
            this._createSourceDropdown();
            this._createParameterDropdowns()
        },
        _createTopicMenu: function() {
            var g = this.views, h = this.model, j = this.model.topics;
            if (!g.topicMenu && j.length && j.length >= this.minTopicsForMenu) {
                g.topicMenu = new f.Views.AnswerBar.Meta.TopicMenu({
                    model: h,
                    appendTo: this.$(".js-metabar")
                });
                this.$primary.hide()
            }
        },
        _createAttribution: function() {
            if (!this.model.meta.developer) {
                return false
            }
            var g = this.$(".js-attribution");
            this.views.attribution = new f.Views.AttributionModal($.extend({
                nutp: "iaa_" + this.model.pixelId,
                appendTo: g,
                hiddenParent: true,
                popout: {
                    direction: (this.sourceName) ? "bottom": "bottom-left"
                }
            }, this.model.meta))
        },
        _createParameterDropdowns: function() {
            if (!this.showParams) {
                return 
            }
            this.views.parameters = [];
            this.model.parameters.forEach(function(h) {
                var g = new e.FilterDropdown({
                    model: h,
                    answer: this.model,
                    appendTo: this.$dropdowns
                });
                this.views.parameters.push(g)
            }.bind(this))
        },
        _createSourceDropdown: function() {
            if (!this.showSources) {
                return 
            }
            this.views.source = new e.FilterDropdown({
                model: this.model.sources,
                answer: this.model,
                appendTo: this.$dropdowns
            })
        },
        _updateCount: function() {
            var g = this.model.items.length;
            if (!g) {
                return 
            }
            this.$loading.hide();
            this.$primary.removeClass("is-loading");
            this.$dropdowns.removeClass("is-loading");
            this.$count && this.$count.text(Handlebars.helpers.numFormat(g))
        },
        _updateMode: function() {
            var t = this, k = t.model, m = k.expanded, n = k.items.length, j = t.$mode, o = f.device.isMobile, s = k.meta, h = t.exitModeIcon, g = t.expandModeIcon, r = function() {
                t._modeSwitchEnabled = true;
                j.removeClass("is-disabled");
                j.text(h);
                j.attr("title", l("Click to collapse"))
            }, q = function() {
                t._modeSwitchEnabled = true;
                j.removeClass("is-disabled");
                j.text(g);
                j.attr("title", l("Click to expand"))
            }, p = function() {
                t._modeSwitchEnabled = false;
                j.addClass("is-disabled");
                j.text(g);
                j.attr("title", l("Grid mode disabled for this answer"))
            };
            if (o || m) {
                r()
            } else {
                if (s.hideModeSwitch) {
                    j.addClass("is-hidden")
                } else {
                    if (k.canExpand) {
                        q()
                    } else {
                        p()
                    }
                }
            }
        },
        _onScroll: function() {
            if (Modernizr.touch || f.device.isMobile ||!this.parent ||!this.model.active || this.notFixed) {
                return 
            }
            var o = DDG.hasClass(this.id, "is-stuck"), g = DDG.hasClass(this.id, "at-bottom");
            if (!this.model.expanded) {
                if (o) {
                    DDG.removeClass(this.id, this.$el, "is-stuck");
                    this.emit("stuck", false)
                }
                if (g) {
                    DDG.removeClass(this.id, this.$el, "at-bottom")
                }
                return 
            }
            var m = f.device.scrollTop(), n = this.parent.getHeight(), k = 0, j = n - c, h = DDG.get_header_height();
            k+=!DDG.isHeaderFixed ? h : 0;
            j += k;
            if (m > k&&!o) {
                DDG.addClass(this.id, this.$el, "is-stuck");
                this.emit("stuck", true)
            } else {
                if (m <= k && o) {
                    DDG.removeClass(this.id, this.$el, "is-stuck");
                    this.emit("stuck", false)
                }
            }
            if (!g && m > j) {
                DDG.addClass(this.id, this.$el, "at-bottom")
            } else {
                if (g && m < j) {
                    DDG.removeClass(this.id, this.$el, "at-bottom")
                }
            }
        },
        _onModeClick: function(g) {
            g.preventDefault();
            g.stopPropagation();
            if (!this._modeSwitchEnabled) {
                return 
            }
            if (f.device.isMobile) {
                return this.emit("close")
            }
            this.model.set("expanded", !this.model.expanded)
        },
        _onItemsChanged: function() {
            this._updateCount();
            this._updateMode()
        },
        _onExpandedChanged: function() {
            this._updateMode()
        }
    })
}(DDG);
!function(c) {
    var a = c.Views.Base, b = c.Views.AnswerBar.Meta;
    b.TopicMenu = function(e) {
        this.views = {
            topics: {}
        };
        a.call(this, e);
        this.bindEvents([[this.model, "change:topics", this._updateTopics], [this.model, "change:selectedTopic", this._onSelectedTopicChanged]])
    };
    b.TopicMenu.prototype = $.extend({}, a.prototype, {
        template: "topic_menu",
        destroy: function() {
            a.prototype.destroy.call(this);
            this._removeDocHandler()
        },
        _render: function() {
            a.prototype._render.call(this);
            this.$menu = this.$(".js-topic-menu");
            this._updateTopics()
        },
        _updateTopics: function() {
            var h, e = this.model.topics, f = this.views.topics;
            for (var j in f) {
                if (!e[j]) {
                    f[j].destroy();
                    delete f[j]
                }
            }
            for (var g = 0; g < e.length; g++) {
                h = e[g];
                if (!f[h.id]) {
                    this.views.topics[h.id] = new b.TopicMenuItem({
                        model: h,
                        appendTo: this.$menu
                    })
                }
            }
        },
        _addDocHandler: function() {
            DDG.$doc.on("click.topicmenu", this._onDocClick.bind(this));
            this._boundToDoc = 1
        },
        _removeDocHandler: function() {
            DDG.$doc.off("click.topicmenu");
            this._boundToDoc = 0
        },
        _onSelectedTopicChanged: function() {
            if (this.model.selectedTopic&&!this._boundToDoc) {
                this._addDocHandler()
            } else {
                this._removeDocHandler()
            }
        },
        _onDocClick: function() {
            if (this.model.selectedTopic) {
                this.model.selectedTopic.unselect()
            }
        }
    })
}(DDG);
!function(f) {
    var c = f.Views.Base, e = f.Views.AnswerBar.Meta, a = "is-selected", b = "is-highlighted";
    e.TopicMenuItem = function(g) {
        c.call(this, g);
        this.bindEvents([[this.$link, "click", this._onClick], [this.model, "change:highlighted", this._onHighlightedChanged], [this.model, "change:selected", this._onSelectedChanged], [this.model, "change:count", this._onCountChanged]])
    };
    e.TopicMenuItem.prototype = $.extend({}, c.prototype, {
        template: "topic_menu_item",
        _render: function() {
            c.prototype._render.call(this, this.model);
            this._cacheElems(".js-topic-menu", ["link", "count"])
        },
        _onHighlightedChanged: function() {
            this.$link.toggleClass(b, !!this.model.highlighted)
        },
        _onSelectedChanged: function() {
            this.$link.toggleClass(a, !!this.model.selected)
        },
        _onCountChanged: function() {
            if (this.model.hideCount) {
                return 
            }
            this.$count.text(this.model.items.length)
        },
        _onClick: function(g) {
            g.preventDefault();
            g.stopPropagation();
            this.model.select()
        }
    })
}(DDG);
!function(f) {
    var c = f.Views.Base, e = f.Views.AnswerBar.Meta, b = "is-showing", h = "metabar__dropdown__item", j = h + "--disabled", g = h + "--selected", a = h + "--active";
    e.FilterDropdown = function(k) {
        c.call(this, k);
        this.answer = k.answer
    };
    e.FilterDropdown.prototype = $.extend({}, c.prototype, {
        template: "filter_dropdown",
        _render: function(m) {
            c.prototype._render.call(this, this.model);
            this._cacheElems(".js-dropdown", ["selected", "items", "popout"]);
            this.bindEvents([[this.$selected, "click", this._onClick], [this.$selected, "blur", this._onBlur], [this.$items, "mouseenter touchstart", this._onItemMouseEnter], [this.$items, "mouseleave touchend", this._onItemMouseLeave], [this.$items, "click", this._onItemClick], [this.model, "change:disabled", this._onDisabledChange], [this.model, "change:selected", this._onSelectedChange]]);
            var k = f.history.getComposite("iaf", this.model.key);
            if (k) {
                this.model.select(k)
            }
        },
        _setValue: function(m) {
            var k = this.$items.filter("[data-value='" + m + "']");
            $("." + g).removeClass(g);
            k.addClass(g);
            this.$selected.html(k.html());
            this._currentValue = m;
            if (m) {
                f.history.setComposite("iaf", this.model.key, m)
            } else {
                f.history.clearComposite("iaf", this.model.key)
            }
        },
        _hideDropdown: function() {
            this.$popout.removeClass(b)
        },
        _onClick: function(k) {
            k.preventDefault();
            if (!this.$popout.hasClass(b)) {
                this.$popout.addClass(b)
            } else {
                this._hideDropdown()
            }
        },
        _onBlur: function(k) {
            if (this.$("." + a).length) {
                return 
            }
            this._hideDropdown()
        },
        _onItemClick: function(m) {
            m.preventDefault();
            var k = $(m.currentTarget), n = k.data("value");
            if (n !== this._currentValue&&!k.hasClass(j)) {
                this._setValue(n);
                if (!this._firstUse) {
                    this._firstUse = true;
                    nutp(this.model.key)
                }
                this.model.select(n);
                this.answer.requery()
            }
            this._hideDropdown()
        },
        _onItemMouseEnter: function(k) {
            $(k.currentTarget).addClass(a)
        },
        _onItemMouseLeave: function(k) {
            $(k.currentTarget).removeClass(a)
        },
        _onDisabledChange: function() {
            if (this.model.disabled) {
                this.$el.hide()
            } else {
                this.$el.show()
            }
            this.model.values.forEach(function(k) {
                this.$items.find("[data-value='" + k.id + "']").toggleClass(j, k.disabled)
            }.bind(this))
        },
        _onSelectedChange: function() {
            var k = this.model.selected.id;
            if (this._currentValue !== k) {
                this._setValue(k)
            }
        }
    })
}(DDG);
!function(c) {
    var a = c.Views.Base, b = c.Views.AnswerBar;
    b.InfoBox = function(e) {
        a.call(this, e);
        this.$tile = this.$(".js-infobox-tile");
        this.$expand = this.$(".js-tile-expand");
        this.$lastInfo = this.$(".info:last");
        if (this.model.expanded) {
            this._expand()
        }
        this.bindEvents([[this.model, "change:expanded", this._onAnswerExpandedChanged], [this.model, "change:active", this._onAnswerActiveChanged], [this.$expand, "click", this._onExpandClick], ["a", "click", function() {
            nutp("ibc")
        }
        ], [c.device, "resize", this._onResize]])
    };
    b.InfoBox.prototype = $.extend({}, a.prototype, {
        template: "infobox",
        _expand: function() {
            if (!this._canExpand()) {
                return 
            }
            this.$tile.addClass("is-open")
        },
        _collapse: function() {
            if (!this._canExpand()) {
                return 
            }
            this.$tile.removeClass("is-open")
        },
        _canExpand: function() {
            if (!this.$lastInfo || typeof this._isExpandable === "boolean") {
                return this._isExpandable
            }
            if (this.model.expanded) {
                return this._isExpandable = true
            }
            var e = this.$lastInfo.position().top + this.$lastInfo.outerHeight(true), f = this.$tile.outerHeight();
            return (this._isExpandable = e > f)
        },
        _showHideExpandLink: function() {
            if (this._canExpand()) {
                this.$expand.removeClass("is-hidden")
            } else {
                this.$expand.addClass("is-hidden")
            }
        },
        _onExpandClick: function() {
            this.model.set("expanded", !this.model.expanded)
        },
        _onResize: function() {
            delete this._isExpandable;
            this._showHideExpandLink()
        },
        _onAnswerActiveChanged: function() {
            if (this.model.active) {
                delete this._isExpandable;
                this._showHideExpandLink()
            }
        },
        _onAnswerExpandedChanged: function() {
            if (this.model.expanded) {
                this._expand()
            } else {
                this._collapse()
            }
        }
    })
}(DDG);
!function(e) {
    var c = e.Views.Base, f = "is-hidden", a = "is-selected", b = "highlight", g = 8;
    e.Views.AnswerBar.Tile = function(j) {
        this.answer = j.answer;
        this.noDetail = j.noDetail;
        c.call(this, j);
        this.bindEvents([[this.model, "change:visible", this._updateVisible], [this.model, "change:partiallyVisible", this._updateVisible], [this.model, "change:selected", this._onSelectedChanged], [this.model, "change:highlighted", this._onHighlightedChanged], [this.answer, "change:active", this._onAnswerActiveChanged], [this.answer, "change:expanded", this._onAnswerExpandedChanged], [e.device, "resize", this._onResize]]);
        var h = this.answer.meta.rerender;
        if (h) {
            this.bindEvents(h.map(function(k) {
                return [this.model, "change:" + k, this._rerender]
            }.bind(this)))
        }
    };
    e.Views.AnswerBar.Tile.prototype = $.extend({}, c.prototype, {
        show: function() {
            this.$el.removeClass(f)
        },
        hide: function() {
            this.$el.addClass(f)
        },
        getMargins: function() {
            return {
                x: parseFloat(this.$el.css("margin-left"), 10),
                top: parseFloat(this.$el.css("margin-top"), 10),
                bottom: g
            }
        },
        _render: function() {
            this.template = this.model.getItemTemplate();
            c.prototype._render.call(this, this.model.toTemplateObject());
            e.ImageLoader.registerAll(this.$(".js-lazyload"), this.model.id);
            e.ImageLoader.registerAll(this.$(".js-lazysvg"), this.model.id, {
                svg: true
            });
            this.$ellipsis = this.$(".js-ellipsis");
            this.$el.on("click", this._onClick.bind(this));
            this.$el.on("mousedown", this._onMouseDown.bind(this));
            var h = this.$("a");
            if (h.length) {
                h.on("touchstart touchend", function(j) {
                    j.stopPropagation()
                });
                DDG.wrapLinkClicks(h, {
                    nutp: "iag_" + this.answer.pixelId,
                    beforeFn: function() {
                        this.model.select()
                    }.bind(this)
                })
            }
            if (this.answer.meta.itemsHighlight !== false) {
                this.$el.on("mouseenter", this._onMouseEnter.bind(this));
                this.$el.on("mouseleave", this._onMouseLeave.bind(this))
            }
            this._updateEllipsis({
                force: true
            })
        },
        _updateEllipsis: function(h) {
            h = h || {};
            if (h.force) {
                this._hasBeenEllipsized = false
            }
            if (this._hasBeenEllipsized ||!this.answer.active ||!this.model.visible ||!this.$ellipsis.length || e.device.isMobile) {
                return 
            }
            this.$ellipsis.ellipsis({
                id: this.model.id
            });
            this._hasBeenEllipsized = true
        },
        _updateVisible: function() {
            if (this.model.visible || this.model.partiallyVisible) {
                e.ImageLoader.trigger(this.model.id);
                this._updateEllipsis()
            }
        },
        _updateMargin: function() {
            if (e.device.isMobile) {
                return 
            }
            var j = g;
            if (!this.noDetail && this.model.getItemDetailTemplate() && this.answer.expanded && this.model.selected) {
                var h = this.answer.items[this.answer.items.length - 1].gridRow;
                if (!h || h !== this.model.gridRow) {
                    j*=2
                } else {
                    j -= 1
                }
                j += this.answer.getDetailHeight()
            }
            j = j + "px";
            if (this._marginBottom === j) {
                return 
            }
            this._marginBottom = j;
            this.$el.css({
                marginBottom: j
            })
        },
        _rerender: function() {
            c.prototype._rerender.call(this);
            this._onHighlightedChanged();
            this._onSelectedChanged()
        },
        _onHighlightedChanged: function() {
            this.$el.toggleClass(b, !!this.model.highlighted)
        },
        _onSelectedChanged: function() {
            if (this.model.selected) {
                e.history.set({
                    iai: this.answer.getQuerystringItemId(this.model)
                })
            }
            this.$el.toggleClass(a, !!this.model.selected);
            this._updateMargin()
        },
        _onAnswerActiveChanged: function() {
            this._updateEllipsis()
        },
        _onAnswerExpandedChanged: function() {
            this._updateMargin();
            this._updateEllipsis({
                force: true
            })
        },
        _onMouseDown: function(j) {
            j.stopPropagation();
            var k = 0;
            if (ie && (nkdc(j) || nkdm(j))) {
                k = 1
            }
            var m = j.which && j.which == 2;
            var h = j.which && j.which == 3;
            if (k || m || h) {
                fm = 1;
                if (!h) {
                    this._onClick(j, 1)
                }
            } else {
                fm = 0
            }
        },
        _onClick: function(k, j) {
            k.stopPropagation();
            if (this.model.selected) {
                return this.model.unselect()
            }
            if (!this.noDetail && this.model.canShowItemDetail()) {
                k.preventDefault();
                return this.model.select()
            }
            var h;
            if (k.target && k.target.nodeName === "A") {
                h = k.target
            } else {
                h = this.$el[0];
                h.href = this.$el.attr("data-link")
            }
            if (h.href) {
                e.history.set({
                    iai: this.answer.getQuerystringItemId(this.model)
                });
                nutp("iag_" + this.answer.pixelId);
                return nrg(null, null, k, j, h)
            }
            this.model.select()
        },
        _onMouseEnter: function(h) {
            if (e.keyboard.active) {
                return 
            }
            this.model.highlight()
        },
        _onMouseLeave: function(h) {
            this.model.unhighlight()
        },
        _onResize: function(h) {
            this._updateEllipsis({
                force: true
            });
            this._updateMargin()
        }
    })
}(DDG);
!function(g) {
    var a = g.Views.AnswerBar.Tile, k = "is-loading", c = "is-paused", h = "is-unavailable", f, b = 0, e = 0;
    g.Views.AnswerBar.AudioTile = function(m) {
        a.call(this, m);
        this.bindEvents([[g.keyboard, "space." + this.answer.id, this._onSpace]])
    };
    g.Views.AnswerBar.AudioTile.prototype = $.extend({}, a.prototype, {
        play: function() {
            if (b) {
                this.showError("Playback Unavailable");
                return 
            }
            this.$el.addClass(k);
            if (!this.$action) {
                this.$action = this.$(".audio-controls__action");
                this.$time = this.$(".audio-controls__time");
                this.$progress = this.$(".audio-controls__progress");
                this.$loadProgress = this.$(".audio-controls__progress-loading");
                this.$loadProgressFill = this.$(".audio-controls__progress-loading .rotated-fill");
                this.$playProgress = this.$(".audio-controls__progress-playback");
                this.$playProgressFill = this.$(".audio-controls__progress-playback .rotated-fill")
            }
            if (!f) {
                g.require("audio", function(m) {
                    f = m;
                    if (f && f.ready) {
                        if (g.device.isIDevice || g.device.isAndroid) {
                            this.$el.removeClass(k);
                            return 
                        }
                    } else {
                        b = 1
                    }
                    this.play()
                }.bind(this));
                return 
            }
            this.$el.removeClass(c);
            this.$action.text("║");
            this.isPlaying = 1;
            this.hasStartedPlaying = 0;
            if (this.sound) {
                f.play(this.model.id);
                this._onLoadProgress()
            } else {
                this.sound = f.play(this.model.id, this.model.streamURL, {
                    autoPlay: true,
                    whileloading: this._onLoadProgress.bind(this),
                    whileplaying: this._onPlayProgress.bind(this),
                    onload: this._onLoadFinished.bind(this),
                    onfinish: this._onPlayFinished.bind(this)
                })
            }
        },
        pause: function() {
            if (!f ||!f.ready) {
                return 
            }
            f.pause(this.model.id);
            this.$el.removeClass(k);
            this.$el.addClass(c);
            this.$action.text("►");
            this.isPlaying = 0
        },
        stop: function() {
            if (!f ||!f.ready) {
                return 
            }
            f.stop(this.model.id);
            this.$el.removeClass(k);
            this.$el.removeClass(c);
            this.$action.text("►");
            if (!this.$el.hasClass(h)) {
                this.$time.text("")
            }
            this.$loadProgress.removeClass("gt50");
            this.$playProgress.removeClass("gt50");
            j(this.$loadProgressFill, 0);
            j(this.$playProgressFill, 0);
            this.isPlaying = 0
        },
        showError: function(m) {
            this.$time.text(m);
            this.$el.addClass(h)
        },
        _onSelectedChanged: function() {
            a.prototype._onSelectedChanged.call(this);
            if (this.model.selected) {
                this.play()
            } else {
                this.stop()
            }
        },
        _onClick: function(m) {
            m.preventDefault();
            if (this.model.selected) {
                this.isPlaying ? this.pause() : this.play()
            } else {
                this.model.select()
            }
        },
        _onSpace: function(m) {
            if (this.model.selected) {
                if (this.isPlaying) {
                    m.preventDefault();
                    this.pause()
                } else {
                    if (this.answer.active) {
                        m.preventDefault();
                        this.play()
                    }
                }
            }
        },
        _onLoadProgress: function() {
            var m = (this.sound.bytesLoaded / this.sound.bytesTotal) * 100;
            if (m > 50) {
                this.$loadProgress.addClass("gt50");
                return j(this.$loadProgressFill, 100)
            }
            j(this.$loadProgressFill, m)
        },
        _onLoadFinished: function(m) {
            if (m) {
                return 
            }
            this.showError("Stream Unavailable");
            f.stop();
            if (this.answer.autoplaying) {
                this.answer.selectNextItem()
            }
        },
        _onPlayProgress: function() {
            if (!this.sound ||!this.model.duration) {
                return 
            }
            if (!this.hasStartedPlaying) {
                this.$el.removeClass(k);
                this.hasStartedPlaying = 1
            }
            var n = this.model.duration - this.sound.position, m = (this.sound.position / this.model.duration) * 100;
            this.$time.text("-" + DDG.formatDuration(n));
            if (m > 50) {
                this.$playProgress.addClass("gt50")
            }
            j(this.$playProgressFill, m)
        },
        _onPlayFinished: function() {
            this.stop();
            if (this.answer.meta.autoplay !== false) {
                this.answer.autoplaying = 1;
                this.answer.selectNextItem()
            }
        }
    });
    var j = function(n, o) {
        var m = (360 / 100 * o) + "deg";
        n.css({
            "-moz-transform": "rotate(" + m + ")",
            "-webkit-transform": "rotate(" + m + ")",
            "-o-transform": "rotate(" + m + ")",
            transform: "rotate(" + m + ")"
        })
    }
}(DDG);
!function(c) {
    var b = c.Views.Base, e = "can-expand", a = "has-chomp-expanded";
    c.Views.AnswerBar.Detail = function(g) {
        this.answer = g.answer;
        this.template = g.template;
        this.canExpand = g.canExpand;
        this.canWrap = g.canWrap;
        b.call(this, g);
        if (this.canExpand) {
            this.bindEvents([[this.answer, "change:expanded", this._updateExpandableContent], [this.answer, "change:active", this._updateExpandableContent], [c.device, "resize", this._updateExpandableContent]])
        }
        var f = this.answer.meta.rerender;
        if (f) {
            this.bindEvents(f.map(function(h) {
                return [this.model, "change:" + h, this._rerender]
            }.bind(this)))
        }
    };
    c.Views.AnswerBar.Detail.prototype = $.extend({}, b.prototype, {
        _render: function(k) {
            var g = this.model.toTemplateObject(), f = $.extend({}, g, k), o = this.model.templates.wrap_detail, j = this.template;
            if (this.canWrap && o) {
                f = {
                    content: c.exec_template(j, g)
                };
                this.template = o
            }
            b.prototype._render.call(this, f);
            this.template = j;
            c.wrapLinkClicks(this.$("a"), {
                nutp: "iag_" + this.answer.pixelId
            });
            var m = this.$(".js-sized-img");
            if (m.length) {
                m.on("load error", function() {
                    $(this).css({
                        height: "auto",
                        width: "auto"
                    })
                })
            }
            var h = this.$("img");
            if (h.length) {
                h.error(function() {
                    $(this).hide()
                })
            }
            if (this.canExpand) {
                this.$expandContent = this.$(".js-ellipsis,.js-chomp");
                if (this.$expandContent.length) {
                    this.expandContent = this.$expandContent.html();
                    this.expandUseEllipsis = this.$(".js-ellipsis").length;
                    this.$expandLink = this.$(".js-chomp-link");
                    this._updateExpandableContent();
                    if (this.$expandLink.length) {
                        this.$expandLink.on("click", function() {
                            this.answer.set("expanded", !this.answer.expanded)
                        }.bind(this))
                    }
                    var n = this.$(".js-detail-img");
                    if (n.length&&!n.width()) {
                        n.load(function() {
                            this._updateExpandableContent()
                        }.bind(this))
                    }
                }
            }
        },
        _updateExpandableContent: function() {
            if (!this.answer.active ||!this.expandContent) {
                return 
            }
            this.$expandContent.html(this.expandContent);
            if (this.answer.expanded) {
                if (is_mobile || this.$expandContent.outerHeight() < this.$expandContent.prop("scrollHeight") - 1) {
                    this.$expandLink.addClass(e)
                }
                this.$el.addClass(a)
            } else {
                this.$el.removeClass(a);
                this.$expandLink.toggleClass(e, this.expandUseEllipsis ? this.$expandContent.ellipsis({
                    firstParagraph: true
                }) : this.$expandContent.outerHeight() < this.$expandContent.prop("scrollHeight") - 1)
            }
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.AnswerBar.Detail, e = 0.55, a = 500;
    c.Views.AnswerBar.ImageDetail = function(f) {
        this.parentPadding = f.parentPadding;
        b.call(this, f);
        this.bindEvents([[this.model, "change:selected", this._onSelectedChanged], [c.device, "resize", this._onResize]])
    };
    c.Views.AnswerBar.ImageDetail.prototype = $.extend({}, b.prototype, {
        _render: function() {
            b.prototype._render.call(this, {
                detail: this._getDimensions()
            });
            if (this.model.selected) {
                this._onSelectedChanged()
            }
        },
        _getDimensions: function() {
            var n = c.device, g = n.isMobile;
            var m = g ? n.width: n.width * e, k = g ? n.height: this.answer.getDetailHeight() - (this.parentPadding * 2), h = this.model, j = Math.min(h.width, m), f = j / h.width * h.height;
            if (f > k) {
                f = k;
                j = f / h.height * h.width
            }
            return {
                width: j + "px",
                height: f + "px"
            }
        },
        _loadHighRes: function() {
            if (this.$highRes) {
                return 
            }
            this.$highRes = this.$(".js-detail-img-high");
            this.$highRes.attr("src", c.getImageProxyURL(this.model.image_mobile || this.model.image)).css({
                display: "block"
            })
        },
        _onSelectedChanged: function() {
            var f = this.model;
            if (this.model.selected) {
                this._loadHighResTimeout = setTimeout(this._loadHighRes.bind(this), a)
            } else {
                clearTimeout(this._loadHighResTimeout)
            }
        },
        _onResize: function() {
            if (!this.$imgs) {
                this.$imgs = this.$(".js-detail-img")
            }
            this.$imgs.css(this._getDimensions())
        }
    })
}(DDG);
!function(e) {
    var c = e.Views.AnswerBar.Detail, f = 0.75, a = 110, b = 76;
    e.Views.AnswerBar.VideoDetail = function(g) {
        this.parentPadding = g.parentPadding;
        c.call(this, g);
        this.bindEvents([[this.model, "change:selected", this._updateContent], [e.settings, "change:k5", this._updateContent], [e.device, "resize", this._onResize]])
    };
    e.Views.AnswerBar.VideoDetail.prototype = $.extend({}, c.prototype, {
        template: "videos_detail",
        destroy: function() {
            clearTimeout(this._embedTimeout);
            c.prototype.destroy.call(this)
        },
        _render: function() {
            c.prototype._render.call(this);
            this.$videoWrap = this.$(".js-video");
            this.$video = this.$(".js-video-media");
            this._updateSize();
            this._updateContent()
        },
        _renderEmbed: function() {
            if (!this.model.selected) {
                return 
            }
            var g = DDG.exec_template(DDG.templates.videos_detail_embed, this.model);
            this.$video.empty().append(g)
        },
        _renderPrivacy: function() {
            this.views.privacy = new e.Views.AnswerBar.VideoDetailOverlay({
                model: this.model,
                appendTo: this.$video
            })
        },
        _shouldShowPrivacy: function() {
            return !e.device.isMobile && this.model.selected && e.settings.isDefault("k5")
        },
        _shouldShowEmbed: function() {
            return this.model.selected && e.settings.get("k5") == 1
        },
        _updateSize: function() {
            var h = e.device, m = h.widthBreakpoint(), j = h.gutterSize(), o = j ? j + a: this.parentPadding * 2, k = j ? this.parentPadding * 2: this.parentPadding * 2 + b, n = h.width - o, p=!h.isMobileLandscape() && (m === "m" || m === "s" || m === "xs") ? n : n * f, q = this.answer.getDetailHeight() - k, s = 16 / 9, g = p, r = p / s;
            if (r > q) {
                r = q;
                g = r * s
            }
            this.$videoWrap.css({
                width: g + "px"
            });
            this.$video.css({
                height: r + "px",
                width: g + "px"
            })
        },
        _updateContent: function() {
            if (this._shouldShowPrivacy()) {
                this._renderPrivacy()
            } else {
                if (this._shouldShowEmbed()) {
                    if (e.device.isMobile) {
                        this._embedTimeout = setTimeout(this._renderEmbed.bind(this), e.animation_speed + 100)
                    } else {
                        this._renderEmbed()
                    }
                } else {
                    this.$video.empty()
                }
            }
        },
        _onResize: function() {
            this._updateSize()
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.AnswerBar.VideoDetailOverlay = function(c) {
        a.call(this, c)
    };
    b.Views.AnswerBar.VideoDetailOverlay.prototype = $.extend({}, a.prototype, {
        template: "videos_detail_privacy",
        shouldShow: function() {
            return DDG.settings.isDefault("k5")
        },
        _render: function() {
            a.prototype._render.call(this);
            this._cacheElems(".js-video-privacy", ["watch", "leave", "remember", "remember-label"]);
            DDG.tap(this.$watch, this._onWatchClick.bind(this), {
                fallbackToClick: true
            });
            DDG.tap(this.$leave, this._onLeaveClick.bind(this), {
                fallbackToClick: true
            });
            DDG.tap(this.$remember, this._onRememberClick.bind(this));
            DDG.tap(this.$rememberlabel, this._onRememberClick.bind(this))
        },
        _shouldRemember: function() {
            return this.$remember[0].checked
        },
        _updateSetting: function(c) {
            var e = this._shouldRemember();
            DDG.settings.set("k5", c, {
                saveToCloud: e,
                saveToCookie: e
            })
        },
        _onWatchClick: function(c) {
            c.preventDefault();
            this._updateSetting("1");
            this.destroy()
        },
        _onLeaveClick: function(c) {
            c.preventDefault();
            this._updateSetting("2");
            nug(this.model.url);
            this.destroy()
        },
        _onRememberClick: function() {
            this.$remember.prop("checked", !this.$remember.prop("checked"))
        }
    })
}(DDG);
!function(j) {
    var a = j.Views.Base, c = 0.4, e = 0.8, f = 20, k = "is-hidden", g = "has-open-detail", m = "can-scroll", n = "is-touching", h = {
        images_detail: "ImageDetail",
        videos_detail: "VideoDetail"
    }, b = {
        images_detail: 1
    };
    j.Views.AnswerBar.DetailSlider = function(o) {
        a.call(this, o);
        this.bindEvents([[this.model, "change:active", this._onActiveChanged], [this.model, "change:selectedItem", this._onSelectedItemChanged], [j.device, "resize", this._onResize]])
    };
    j.Views.AnswerBar.DetailSlider.prototype = $.extend({}, a.prototype, {
        template: "detail_slider",
        destroy: function() {
            this._hide();
            a.prototype.destroy.call(this)
        },
        position: function(o) {
            if (j.device.isMobile) {
                return 
            }
            if (this._top === o) {
                return 
            }
            this._top = o;
            this.$el.css({
                top: o
            })
        },
        _show: function() {
            if (this._isShowing) {
                return 
            }
            this.$el.removeClass(k);
            this._updateSelectedItem();
            if (j.device.isMobile) {
                j.$html.addClass(g);
                this._focus()
            }
            this._isShowing = 1
        },
        _hide: function() {
            if (!this._isShowing) {
                return 
            }
            this.$el.addClass(k);
            if (j.device.isMobile) {
                j.$html.removeClass(g)
            }
            this._unbindTouchEvents();
            this.destroyChildViews();
            this.views = {};
            this._isShowing = 0
        },
        _focus: function() {
            this.$el.addClass("has-focus");
            this._focused = 1
        },
        _unfocus: function() {
            this.$el.removeClass("has-focus");
            this._focused = 0
        },
        _render: function() {
            var r = $.extend({}, this.model), o = j.device.isMobile;
            if (!o) {
                r.detailHeight = this.model.getDetailHeight() + "px"
            }
            if (o&&!Modernizr.touch) {
                r.mobileAndNoTouch = 1
            }
            a.prototype._render.call(this, r);
            var t = this.model.meta.options, p = t && t.detailOverlay;
            if (o && p) {
                this.overlayClass = j.Views.AnswerBar[p]
            }
            if (o && this.model.items.length) {
                var s = this.model.items[0], q = s.getItemDetailTemplate();
                if (b[q]) {
                    this.$el.addClass("detail--xd")
                }
            }
            this._cacheElems(".js-detail", ["panes", "close", "next", "prev"]);
            j.tap(this.$close, this._onCloseClick.bind(this), {
                fallbackToClick: true
            });
            j.tap(this.$next, this._onNextClick.bind(this), {
                fallbackToClick: true
            });
            j.tap(this.$prev, this._onPrevClick.bind(this), {
                fallbackToClick: true
            });
            if (j.device.isMobile && Modernizr.touch) {
                this.$el.on("touchstart", this._onTouchStart.bind(this))
            }
            if (this.model.selectedItem) {
                this._show()
            }
        },
        _createPane: function(q, r) {
            if (!q) {
                return 
            }
            var p = q.getItemDetailTemplate(), o = h[p] || "Detail";
            return new j.Views.AnswerBar.DetailSliderPane({
                answer: this.model,
                model: q,
                pos: r,
                detailView: o,
                appendTo: this.$panes
            })
        },
        _updateDOM: function() {
            var o = this.views;
            if (o.prev) {
                o.prev.resetPosition( - 1)
            }
            if (o.cur) {
                o.cur.resetPosition(0)
            }
            if (o.next) {
                o.next.resetPosition(1)
            }
            this.$prev.toggleClass(m, !!o.prev);
            this.$next.toggleClass(m, !!o.next)
        },
        _updateSelectedItem: function() {
            if (this.views.prev && this.views.prev.model === this.model.selectedItem) {
                this.views.next && this.views.next.destroy();
                this.views.next = this.views.cur;
                this.views.cur = this.views.prev;
                this.views.prev = this._createPane(this.model.getPrevItem(), - 1)
            } else {
                if (this.views.next && this.views.next.model === this.model.selectedItem) {
                    this.views.prev && this.views.prev.destroy();
                    this.views.prev = this.views.cur;
                    this.views.cur = this.views.next;
                    this.views.next = this._createPane(this.model.getNextItem(), 1)
                } else {
                    this.destroyChildViews();
                    this.views = {
                        prev: this._createPane(this.model.getPrevItem(), - 1),
                        cur: this._createPane(this.model.selectedItem),
                        next: this._createPane(this.model.getNextItem(), 1)
                    }
                }
            }
            this._updateDOM();
            if (this.overlayClass && this.overlayClass.prototype.shouldShow()) {
                this.views.overlay && this.views.overlay.destroy();
                this.views.overlay = new this.overlayClass({
                    model: this.model.selectedItem,
                    appendTo: this.$el
                })
            }
        },
        _unbindTouchEvents: function() {
            this.$el.removeClass(n);
            j.$doc.off("touchmove.detail");
            j.$doc.off("touchend.detail")
        },
        _onTouchStart: function(o) {
            this._touchStart = j.eventToCoordinates(o);
            this._touchStartTime = new Date().getTime();
            this.$el.addClass(n);
            j.$doc.on("touchmove.detail", this._onTouchMove.bind(this));
            j.$doc.on("touchend.detail", this._onTouchEnd.bind(this))
        },
        _onTouchMove: function(p) {
            p.stopPropagation();
            p.preventDefault();
            var o = j.eventToCoordinates(p), q = o.x - this._touchStart.x;
            if (q > 0 && this.views.prev) {
                this.views.prev.translateX(q)
            } else {
                if (this.views.next) {
                    this.views.next.translateX(q)
                }
            }
            if (this.views.cur) {
                this.views.cur.translateX(q)
            }
            this._touchDist = q
        },
        _onTouchEnd: function(v) {
            var u = this._touchDist / j.device.width, q = new Date().getTime() - this._touchStartTime, t = Math.abs(u) > c, s = (Math.abs(this._touchDist) / q) > e, r = Math.abs(this._touchDist || 0) < f, p, o;
            if (t || s) {
                if (u > 0) {
                    if (this.model.getPrevItem()) {
                        this.model.selectPrevItem();
                        p = 1
                    }
                } else {
                    if (this.model.getNextItem()) {
                        this.model.selectNextItem()
                    }
                }
            } else {
                if (r) {
                    o = 1
                }
            }
            if (!p) {
                this._updateDOM()
            }
            if (o) {
                if (!this._focused) {
                    v.preventDefault();
                    v.stopPropagation();
                    this._focus()
                } else {
                    if (!v.target || v.target.nodeName !== "A") {
                        this._unfocus()
                    }
                }
            }
            this._unbindTouchEvents();
            delete this._touchStart;
            delete this._touchDist
        },
        _onCloseClick: function(o) {
            o.stopPropagation();
            o.preventDefault();
            this.model.selectedItem.unselect()
        },
        _onNextClick: function() {
            this.model.selectNextItem()
        },
        _onPrevClick: function() {
            this.model.selectPrevItem()
        },
        _onActiveChanged: function() {
            if (!this.model.active) {
                this._hide()
            } else {
                if (this.model.selectedItem) {
                    this._show()
                }
            }
        },
        _onSelectedItemChanged: function() {
            if (this.model.selectedItem) {
                this._updateSelectedItem();
                this._show()
            } else {
                this._hide()
            }
        },
        _onResize: function() {
            if (j.device.isMobile) {
                return 
            }
            this.$el.css({
                height: this.model.getDetailHeight() + "px"
            })
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.Base, a = 16;
    c.Views.AnswerBar.DetailSliderPane = function(e) {
        this.answer = e.answer;
        this._pos = e.pos;
        this.detailView = e.detailView;
        b.call(this, e);
        this.bindEvents([[this.answer, "change:expanded", this._onExpandedChanged], [c.device, "resize", this._onResize]])
    };
    c.Views.AnswerBar.DetailSliderPane.prototype = $.extend({}, b.prototype, {
        template: "detail_slider_pane",
        resetPosition: function(e) {
            if (this._pos === e&&!this._translateX) {
                return 
            }
            this._translateX = 0;
            this._pos = e;
            this._updateLeft()
        },
        translateX: function(e) {
            if (this._translateX === e) {
                return 
            }
            this._translateX = e;
            this._updateLeft()
        },
        _render: function() {
            b.prototype._render.call(this, this._getMeasurements());
            var e = this.model.getItemDetailTemplate();
            this.views.detail = new c.Views.AnswerBar[this.detailView]({
                model: this.model,
                answer: this.answer,
                template: e,
                parentPadding: a,
                appendTo: this.$el
            });
            this._updateLeft()
        },
        _updateDOM: function() {
            this.$el.css(this._getMeasurements())
        },
        _updateLeft: function() {
            var f = this._getLeft();
            if (c.device.isMobile && Modernizr.csstransforms3d) {
                var e = "translate3d(" + f + "px,0px,0px)";
                this.$el.css({
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    transform: e
                })
            } else {
                this.$el.css({
                    left: f + "px"
                })
            }
        },
        _getLeft: function() {
            var e = (this._pos || 0) * c.device.width;
            if (this._translateX) {
                e += this._translateX
            }
            return e
        },
        _getMeasurements: function() {
            var g = c.device, k = g.isMobile, j = g.isMobilePortrait(), n = k ? c.device.height: this.answer.getDetailHeight(), m = a, p = m * 2, h = g.isMobile ? m: this.answer.expanded ? m: m + g.gutterSize(), o = j ? p: m, e = n - o - m, f = c.device.width;
            f -= (m + h);
            return {
                lineHeight: e + "px",
                height: e + "px",
                width: f + "px",
                padding: [o, m, m, h].join("px ") + "px"
            }
        },
        _onExpandedChanged: function() {
            this._updateDOM()
        },
        _onResize: function() {
            this._updateDOM();
            this._updateLeft()
        }
    })
}(DDG);
!function(e) {
    var b = e.Views.Base, c = e.Views.AnswerBar.Answers, a = "is-expanded";
    c.Base = function(g) {
        this.views = {
            items: [],
            itemsById: {}
        };
        g.id = g.model.id;
        b.call(this, g);
        this._deferShow = g.deferShow;
        var f = this.model;
        this.bindEvents([[e.device, "resize", this._onResize], [e.keyboard, "escape." + this.model.id, this._onEscape], [f, "change:active", this._onActiveChanged], [f, "change:expanded", this._onExpandedChanged], [f, "change:items", this._onItemsChanged], [f, "change:isRequerying", this._onRequeryingChanged]]);
        if (this.isValid()) {
            if (f.active) {
                this.show()
            }
            if (f.expanded) {
                this._expand()
            }
            if (f.items.length) {
                this._updateItems()
            }
        }
    };
    c.Base.prototype = $.extend({}, b.prototype, {
        template: "base",
        isValid: function() {
            if (this.requiredTemplates) {
                for (var k = 0; k < this.requiredTemplates.length; k++) {
                    var h = this.requiredTemplates[k], f = h + "_mobile";
                    for (var g = 0; g < this.model.items.length; g++) {
                        var m = this.model.items[g];
                        if (!m.templates || (!m.templates[h]&&!m.templates[f])) {
                            return false
                        }
                    }
                }
            }
            if (this.maxItems && (this.model.items.length > this.maxItems)) {
                return false
            }
            return true
        },
        show: function() {
            this.$el.addClass("is-active");
            e.keyboard.set("namespace", this.model.id);
            if (this.shouldExpandOnShow()) {
                this.model.set("expanded", 1)
            }
            if (this.model.expanded) {
                e.history.set({
                    iax: 1
                })
            }
        },
        hide: function() {
            this.$el.removeClass("is-active");
            e.keyboard.set("namespace")
        },
        getHeight: function() {
            if (this._height) {
                return this._height
            }
            return this.$el && (this._height = this.$el.outerHeight())
        },
        getWidth: function() {
            if (this._width) {
                return this._width
            }
            return this.$el && (this._width = this.$el.width())
        },
        showNoResults: function() {
            if (!this.$noResults) {
                this.$noResults = e.$exec_template("no_results");
                this.$el.append(this.$noResults)
            }
            this.$noResults.show();
            this._showingNoResults = 1
        },
        hideNoResults: function() {
            this.$noResults.hide();
            this._showingNoResults = 0
        },
        shouldExpandOnShow: function() {
            return e.history.get("iax")
        },
        _updateItems: function() {},
        _expand: function() {
            this.$el.addClass(a);
            e.history.set({
                iax: 1
            })
        },
        _collapse: function() {
            this.$el.removeClass(a);
            e.history.clear("iax")
        },
        _onActiveChanged: function() {
            if (this.model.active&&!this._deferShow) {
                this.show()
            } else {
                this.hide()
            }
        },
        _onExpandedChanged: function() {
            if (this.model.expanded) {
                this._expand()
            } else {
                this._collapse()
            }
        },
        _onRequeryingChanged: function(g) {
            this.$el.toggleClass("is-requerying", g);
            if (!g) {
                for (var f = 0; f < this.views.items.length; f++) {
                    this.views.items[f].destroy()
                }
                this.views.items = [];
                this.views.itemsById = {}
            }
        },
        _onItemsChanged: function() {
            if (this.isValid()) {
                this._updateItems()
            }
        },
        _onResize: function() {
            this._height = null;
            this._width = null
        },
        _onEscape: function() {
            this.model.set("expanded")
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.AnswerBar.Answers, a = b.Base;
    b.Detail = function(e) {
        a.call(this, e)
    };
    b.Detail.prototype = $.extend({}, a.prototype, {
        template: "base",
        maxItems: 1,
        requiredTemplates: ["detail"],
        show: function() {
            a.prototype.show.call(this);
            if (this.model.items.length) {
                this.emit("item-shown", this.model.items[0])
            }
        },
        _updateItems: function() {
            if (this.views.items.length ||!this.model.items.length) {
                return 
            }
            var e = this.model.items[0];
            this.views.items.push(new c.Views.AnswerBar.Detail({
                model: e,
                answer: this.model,
                template: e.getDetailTemplate(),
                canExpand: true,
                canWrap: true,
                appendTo: this.$el
            }));
            if (e.infoboxData) {
                this.views.infobox = new c.Views.AnswerBar.InfoBox({
                    model: this.model,
                    data: e.infoboxData,
                    appendTo: this.$el
                })
            }
            if (this.model.meta && this.model.meta.developer) {
                this.views.attribution = new c.Views.AttributionModal($.extend({
                    nutp: "iaa_" + this.model.pixelId,
                    appendTo: this.$el,
                    popout: {
                        direction: "bottom-left",
                        className: (e.infoboxData) ? "attribution-wrap--infobox": "attribution-wrap--top"
                    }
                }, this.model.meta))
            }
        }
    })
}(DDG);
!function(g) {
    var f = g.Views.AnswerBar.Answers, b = f.Base, h = 100, e = 2000, c = 4, a = 5, j = {
        audio_item: "AudioTile"
    };
    f.Tiles = function(m) {
        var k = m.model, n = k.id;
        this._scrollLeft = 0;
        this.noDetail = m.noDetail;
        this.bindEvents([[k, "change:isLoading", this._onIsLoadingChanged], [k, "change:failed", this._onLoadFailed], [k, "change:selectedItem", this._onSelectedItemChanged], [k, "change:isRequerying", this._onIsRequeryingChanged], [k, "no-results", this.removeLoadMore], [g.keyboard, "left." + n, this.selectPrevItem], [g.keyboard, "right." + n, this.selectNextItem]]);
        b.call(this, m);
        this._updateLoadingMore()
    };
    f.Tiles.prototype = $.extend({}, b.prototype, {
        template: "tiles",
        requiredTemplates: ["item"],
        destroy: function() {
            clearTimeout(this._expandTimeout);
            clearTimeout(this._flickTimeout);
            b.prototype.destroy.call(this)
        },
        _updateItems: function() {
            if (!this.model.items.length) {
                return this.showNoResults()
            } else {
                if (this._showingNoResults) {
                    this.hideNoResults()
                }
            }
            this.removeLoadMore();
            for (var k = 0; k < this.model.items.length; k++) {
                var m = this.model.items[k];
                m.num = m.num || k + 1;
                if (!this.views.itemsById[m.id]) {
                    this._appendItem(m)
                }
            }
            if (this.model.meta.next) {
                this.addLoadMore()
            }
            delete this._height;
            this._scrollLeft = this.$jsTiles.scrollLeft();
            this._updateScrollNav();
            this._selectItemFromQuerystring()
        },
        _appendItem: function(n) {
            var k = n.getItemTemplate(), o = j[k] || "Tile", m = new g.Views.AnswerBar[o]({
                model: n,
                answer: this.model,
                noDetail: this.noDetail,
                appendTo: this.$jsTiles
            });
            this.views.items.push(m);
            this.views.itemsById[n.id] = m;
            m.width = this.getTileWidth(m)
        },
        show: function() {
            b.prototype.show.call(this);
            var k = this.model;
            this._updateWidths();
            if (k.selectedItem) {
                g.history.set({
                    iai: k.getQuerystringItemId(k.selectedItem)
                })
            }
            this._onResize();
            this._selectItemFromQuerystring();
            this._selectItemFromMeta();
            this.model.items.map(function(m) {
                if (m.visible) {
                    this.emit("item-shown", m)
                }
            }.bind(this))
        },
        hide: function() {
            clearTimeout(this._flickTimeout);
            clearTimeout(this._expandTimeout);
            b.prototype.hide.call(this)
        },
        shouldExpandOnShow: function() {
            return false
        },
        selectNextItem: function() {
            this.model.selectNextItem();
            if (this.model.indexOfSelectedItem() >= (this.model.items.length - 1)) {
                this.model.loadMore()
            }
        },
        selectPrevItem: function() {
            this.model.selectPrevItem()
        },
        getTileWidth: function(k) {
            if (k.$el) {
                var m = this.model.meta;
                if (m.variableTileWidth || m.itemsWidthVaries || m.itemsExpand) {
                    return k.$el.outerWidth() + (this.getTileMargins().x * 2)
                }
                if (!this.tileWidth) {
                    this.tileWidth = k.$el.outerWidth() + (this.getTileMargins().x * 2)
                }
            }
            return this.tileWidth
        },
        getSelectedTileWidth: function() {
            return this.model.selectedItem && this.getTileWidth(this.views.itemsById[this.model.selectedItem.id])
        },
        getTileMargins: function() {
            if (this._tileMargins) {
                return this._tileMargins
            }
            if (!this.views.items.length) {
                return {
                    x: 0,
                    top: 0,
                    bottom: 0
                }
            }
            return this._tileMargins = this.views.items[0].getMargins()
        },
        getLoadMoreWidth: function() {
            if (!this._showingLoadMore) {
                return 0
            }
            return this.views.items.length && this.getTileWidth(this.views.items[0])
        },
        _render: function() {
            b.prototype._render.call(this, {
                id: this.model.id,
                meta: this.model.meta
            });
            this.$tileview = this.$(".tileview");
            this.$tileWrap = this.$(".tile-wrap");
            this.$jsTiles = this.$(".js-tiles");
            this.$jsTiles.on("mousewheel", this._onMouseWheel.bind(this));
            if (window.addEventListener) {
                this.$jsTiles[0].addEventListener("wheel", this._onMouseWheel.bind(this))
            }
            this.$jsTiles.addClass("tileview__" + this.model.id);
            this.$jsTiles.bind("touchend", this._onJsTilesTouchEnd.bind(this));
            this.$loadMore = g.$exec_template("tiles_load_more", {
                id: this.model.id,
                name: this.model.name
            });
            this._onResize()
        },
        _createDetailSlider: function() {
            if (this.views.detail || this.noDetail) {
                return 
            }
            this.views.detail = new g.Views.AnswerBar.DetailSlider({
                model: this.model,
                appendTo: this.$el
            })
        },
        _updateVisibleItems: function() {
            var t = this._scrollLeft - g.device.gutterSize(), r = t + viewport_width, y = 0, v = {
                offscreenRight: [],
                offscreenLeft: [],
                visible: []
            }, q, s, k;
            for (q = 0; s = this.views.items[q]; q++) {
                var o = y + s.width, n = y, m = o, p = 0, u = 0;
                if (n < t) {
                    v.offscreenLeft.push(s);
                    if (m > t) {
                        u = 1
                    }
                } else {
                    if (m > r) {
                        v.offscreenRight.push(s);
                        if (n < r) {
                            u = 1
                        }
                    } else {
                        p = 1;
                        v.visible.push(s)
                    }
                }
                k = (p || u) && this.model.active&&!s.model.visible;
                s.model.set({
                    visible: p,
                    partiallyVisible: u
                });
                y += s.width;
                if (k) {
                    this.emit("item-shown", s.model)
                }
            }
            if (this._showingLoadMore) {
                var x = {
                    width: this.getLoadMoreWidth()
                };
                if (y + x.width > r) {
                    x.visible = 0;
                    v.offscreenRight.push(x)
                } else {
                    x.visible = 1;
                    v.visible.push(x)
                }
            }
            return v
        },
        _selectItemFromQuerystring: function() {
            var k = this.model, p = g.history.get("iai"), o = g.history.get("ia"), n, m;
            if (!k.active || k.selectedItem) {
                return 
            }
            if (o === k.nameId && typeof p !== "undefined") {
                n = k.itemsById[p];
                if (!n && $.isNumeric(p)) {
                    n = k.items[p]
                }
                if (n) {
                    if (this._rowsToShow&&!n.visible) {
                        this._loadMore()
                    }
                    n.select();
                    this._scrollToTile(this.views.itemsById[n.id], {
                        animated: false
                    })
                } else {
                    if (k.meta.next) {
                        this._loadMore()
                    }
                }
            }
        },
        _selectItemFromMeta: function() {
            var k = this.model, n = k.meta;
            if (!k.active || k.selectedItem) {
                return 
            }
            if (!k.selectedItem && n.selectedItem) {
                var m = k.itemsById[n.selectedItem];
                m && m.select();
                this._scrollToTile(this.views.itemsById[m.id], {
                    animated: false
                })
            }
        },
        _updateScrollNav: function() {
            if (!this.views.items.length) {
                return 
            }
            if (!this.$leftScrollNav) {
                this.$leftScrollNav = g.$exec_template("tiles_scroll_nav", {
                    dir: "prev"
                });
                this.$rightScrollNav = g.$exec_template("tiles_scroll_nav", {
                    dir: "next"
                });
                this.$jsTiles.prepend(this.$leftScrollNav);
                this.$jsTiles.prepend(this.$rightScrollNav);
                this.$leftScrollNav.bind("click", this._onLeftScrollClick.bind(this));
                this.$rightScrollNav.bind("click", this._onRightScrollClick.bind(this))
            }
            var n = this._updateVisibleItems(), m = n.offscreenLeft.length, k = n.offscreenRight.length;
            this.$leftScrollNav.attr("data-items", m);
            this.$rightScrollNav.attr("data-items", k);
            this.$leftScrollNav.removeClass("can-scroll");
            this.$rightScrollNav.removeClass("can-scroll");
            if (m > 0) {
                this.$leftScrollNav.addClass("can-scroll")
            }
            if (k > 0) {
                this.$rightScrollNav.addClass("can-scroll")
            }
            if (this.model.active && this.model.meta.next&&!this.model.expanded && k < 3) {
                this._loadMore()
            }
            this.emit("scrolled", n)
        },
        _scrollHorizontal: function(k) {
            var m = this._scrollLeft, r = g.device.gutterSize(), n = this._getTotalTileWidth(), p = viewport_width - r, s;
            if (k === "right") {
                s = Math.min(m + p, n + r)
            } else {
                s = Math.max(m - p, 0)
            }
            var q, u = 0;
            for (var o = 0, v; v = this.views.items[o]; o++) {
                if (s >= u && s <= (u + v.width)) {
                    q = v
                }
                u += v.width
            }
            if (!q && this._showingLoadMore && this.$loadMore) {
                q = {
                    "$el": this.$loadMore
                }
            }
            this._scrollToTile(q)
        },
        _scrollToTile: function(p, k) {
            if (!p ||!p.$el) {
                return 
            }
            var m = k && typeof k.animated !== "undefined" ? k.animated: true, o = this.model, s = o.meta, r = 0, n = 0, t, q = this._getTotalTileWidth() + g.device.gutterSize() + h - g.device.width;
            for (; t = this.views.items[n]; n++) {
                if (t === p) {
                    break
                }
                r += t.width
            }
            if (s.itemsExpand && n > this._lastExpandedTileIndex) {
                r -= this._lastExpandedTileDiff
            }
            r = Math.min(r, q);
            if (this._scrollLeft === r) {
                return 
            }
            this._scrollLeft = r;
            if (m) {
                this._autoScrolling = true;
                this.$jsTiles.stop().animate({
                    scrollLeft: this._scrollLeft
                }, g.animation_speed, function() {
                    this._autoScrolling = false
                }.bind(this))
            } else {
                this.$jsTiles.scrollLeft(this._scrollLeft)
            }
            this._updateScrollNav()
        },
        _updateDetailViewPosition: function() {
            var n = this.model.selectedItem;
            if (!n || g.device.isMobile ||!this.views.detail) {
                return 
            }
            if (!this.model.expanded) {
                this.views.detail.position("auto");
                return 
            }
            var m = this.views.itemsById[n.id], k = parseInt(m.$el.position().top), p = this.getTileMargins(), o = k + parseInt(m.$el.outerHeight()) + p.bottom;
            if (this.views.metabar&&!this.views.metabar.isStuck()) {
                o += this.views.metabar.getHeight()
            }
            this.views.detail.position(o + "px")
        },
        _updateWidths: function() {
            delete this.tileWidth;
            for (var m = 0, k; k = this.views.items[m]; m++) {
                k.width = this.getTileWidth(k)
            }
        },
        _getTotalTileWidth: function() {
            var m = 0;
            for (var k = 0; k < this.views.items.length; k++) {
                m += this.views.items[k].width
            }
            m += this.getLoadMoreWidth();
            return m
        },
        showNoResults: function() {
            b.prototype.showNoResults.call(this);
            this.$leftScrollNav && this.$leftScrollNav.hide();
            this.$rightScrollNav && this.$rightScrollNav.hide()
        },
        hideNoResults: function() {
            b.prototype.hideNoResults.call(this);
            this.$leftScrollNav && this.$leftScrollNav.show();
            this.$rightScrollNav && this.$rightScrollNav.show()
        },
        addLoadMore: function() {
            if (this._showingLoadMore) {
                return 
            }
            this.$jsTiles.append(this.$loadMore);
            this.$loadMore.click(this._onLoadMoreClick.bind(this));
            this._showingLoadMore = true
        },
        removeLoadMore: function() {
            this.$loadMore.remove();
            this._showingLoadMore = false
        },
        _loadMore: function() {
            if (this.model.isLoading) {
                return 
            }
            if (this._rowsToShow) {
                this.views.metabar && this.views.metabar.show();
                if (is_mobile&&!this.model.canLoadOnScroll()) {
                    this._loadMoreMobile()
                } else {
                    this.$(".tile.is-hidden").removeClass("is-hidden");
                    delete this._rowsToShow;
                    if (!this.model.meta.next) {
                        this.removeLoadMore()
                    }
                }
                return 
            }
            this.model.loadMore()
        },
        _loadMoreMobile: function() {
            var n, q, p = c, o = g.device.width, k = this.views.items.length, m = function(r) {
                return k - r < a - 1
            };
            for (n = 0; n < k && p; n++) {
                q = this.views.items[n].$el;
                if (q.is(":visible")) {
                    continue
                }
                if (o - q.outerWidth() < 0&&!m(n)) {
                    o = g.device.width;
                    p--
                }
                if (p) {
                    q.removeClass("is-hidden");
                    o -= q.outerWidth()
                }
            }
            this._rowsToShow += c - p;
            if (this.views.items[k - 1].$el.is(":visible")) {
                delete this._rowsToShow;
                this.views.metabar && this.views.metabar.show();
                if (!this.model.meta.next) {
                    this.removeLoadMore()
                }
            }
        },
        _updateLoadingMore: function() {
            if (this.$loadMore) {
                if (this.model.isLoading) {
                    this.$loadMore.addClass("is-disabled")
                } else {
                    this.$loadMore.removeClass("is-disabled")
                }
            }
        },
        _updateAfterItemExpand: function() {
            clearTimeout(this._expandTimeout);
            var k = this.getSelectedTileWidth();
            this._expandTimeout = setTimeout(function() {
                this._updateWidths();
                this._updateScrollNav();
                if (this.model.selectedItem) {
                    var m = this.getSelectedTileWidth();
                    this._lastExpandedTileDiff = m - k;
                    this._lastExpandedTileIndex = this.model.indexOfSelectedItem()
                } else {
                    delete this._lastExpandedTileIndex;
                    delete this._lastExpandedTileDiff
                }
            }.bind(this), g.animation_speed + 150)
        },
        _onLeftScrollClick: function(k) {
            k.preventDefault();
            this._scrollHorizontal("left")
        },
        _onRightScrollClick: function(k) {
            k.preventDefault();
            this._scrollHorizontal("right")
        },
        _onJsTilesTouchEnd: function() {
            this._scrollLeft = this.$jsTiles.scrollLeft();
            this._updateVisibleItems();
            if (this._flickTimeout) {
                clearTimeout(this._flickTimeout)
            }
            this._flickTimeout = setTimeout(function() {
                if (this._scrollLeft !== this.$jsTiles.scrollLeft()) {
                    this._scrollLeft = this.$jsTiles.scrollLeft();
                    this._updateVisibleItems()
                }
            }.bind(this), e)
        },
        _onMouseWheel: function(m) {
            if (this._autoScrolling) {
                return 
            }
            var k = m.originalEvent ? (m.originalEvent.wheelDeltaX*-1): m.deltaX;
            if (!k) {
                return 
            }
            m.preventDefault();
            this.$jsTiles.scrollLeft(this._scrollLeft + k);
            this._scrollLeft = this.$jsTiles.scrollLeft();
            this._updateScrollNav();
            return false
        },
        _onEscape: function() {
            if (this.model.selectedItem) {
                this.model.selectedItem.unselect()
            } else {
                b.prototype._onEscape.call(this)
            }
        },
        _onLoadMoreClick: function(k) {
            k.preventDefault();
            this._loadMore()
        },
        _onResize: function() {
            b.prototype._onResize.call(this);
            this._updateWidths();
            this._updateScrollNav();
            delete this._height;
            delete this._tileMargins
        },
        _onIsLoadingChanged: function() {
            this._updateLoadingMore()
        },
        _onLoadFailed: function() {
            this.removeLoadMore();
            this._updateItems()
        },
        _shouldScrollToTileOnItemSelect: function() {
            var k = this.model.selectedItem;
            return k&&!k.visible
        },
        _onSelectedItemChanged: function() {
            delete this._height;
            var k = this.model, o = k.meta;
            if (!k.selectedItem) {
                g.history.clear("iai");
                if (o.itemsExpand) {
                    this._updateAfterItemExpand()
                }
                return 
            }
            var n = k.selectedItem, m = this.views.itemsById[n.id];
            if (this._shouldScrollToTileOnItemSelect()) {
                this._scrollToTile(m)
            }
            if (o.itemsExpand) {
                this._updateAfterItemExpand()
            }
            if (n.canShowItemDetail()&&!this.views.detail) {
                this._createDetailSlider()
            }
            this._updateDetailViewPosition()
        },
        _onIsRequeryingChanged: function(k) {
            if (k) {
                delete this._rowsToShow;
                this._scrollToTile(this.views.items[0])
            }
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.AnswerBar.Answers, a = b.Tiles;
    b.GridTiles = function(f) {
        var e = f.model;
        a.call(this, f);
        this.bindEvents([[e, "change:canExpand", this._onCanExpandChanged], [e, "change:selectedTopic", this._onSelectedTopicChanged]]);
        this._createMetaBar()
    };
    b.GridTiles.prototype = $.extend({}, a.prototype, {
        _updateItems: function() {
            a.prototype._updateItems.call(this);
            var e = this.views.metabar;
            if (e&&!e.searchTerm && this.model.meta.searchTerm) {
                e.updateSearchTerm(this.model.meta.searchTerm)
            }
            if (this._rowsToShow) {
                this._updateHiddenRows()
            }
        },
        _appendItem: function(f) {
            a.prototype._appendItem.call(this, f);
            if (c.device.isMobile) {
                var e = this.views.items[this.views.items.length - 1];
                this.bindEvents([[e, "rerender", this._updateHiddenRows]])
            }
        },
        shouldExpandOnShow: function() {
            return this.model.canExpand && c.history.get("iax")
        },
        _shouldScrollToTileOnItemSelect: function() {
            var f = this.model, h = f.selectedItem, g = this.views.itemsById[h.id], e = c.device.isMobile, j = f.expanded&&!e;
            return j ||!h.visible
        },
        show: function() {
            a.prototype.show.call(this);
            var e = this.model, f = e.meta;
            if (!e.expanded && e.canExpand) {
                if (f.autoExpand) {
                    this.model.set("expanded", 1);
                    if (f.autoExpandRows) {
                        this._rowsToShow = f.autoExpandRows;
                        this._updateHiddenRows()
                    }
                    f.autoExpand = 0
                }
            }
        },
        hide: function() {
            clearTimeout(this._detailTimeout);
            a.prototype.hide.call(this)
        },
        _updateVisibleItems: function() {
            var f = {
                offscreenRight: [],
                offscreenLeft: [],
                visible: []
            }, e, g, h;
            if (this.model.expanded) {
                for (e = 0; g = this.views.items[e]; e++) {
                    h = this.model.active&&!g.model.visible;
                    g.model.set({
                        visible: 1,
                        partiallyVisible: 0
                    });
                    f.visible.push(g);
                    if (h) {
                        this.emit("item-shown", g.model)
                    }
                }
            } else {
                f = a.prototype._updateVisibleItems.call(this)
            }
            return f
        },
        _collapse: function() {
            a.prototype._collapse.call(this);
            if (this.model.selectedItem) {
                this.model.selectedItem.unselect()
            }
            c.device.scrollTop(0);
            if (is_mobile) {
                this.emit("close");
                return 
            }
            this.$jsTiles.removeClass("has-tiles--grid").addClass("has-tiles");
            this.$tileview.removeClass("tileview--grid").addClass("tileview");
            delete this._height;
            delete this._tileMargins;
            this._updateScrollNav();
            if (c.hidden.get("pia")) {
                c.hidden.clear("pia")
            }
        },
        _expand: function() {
            a.prototype._expand.call(this);
            this.$tileview.removeClass("tileview").addClass("tileview--grid");
            this.$jsTiles.removeClass("has-tiles").addClass("has-tiles--grid");
            this._updateVisibleItems();
            delete this._height;
            delete this._tileMargins;
            if (this.views.detail && this.model.selectedItem) {
                this._updateDetailViewPosition();
                this._scrollToTile(this.views.itemsById[this.model.selectedItem.id]);
                clearTimeout(this._detailTimeout);
                this._detailTimeout = setTimeout(this._updateDetailViewPosition.bind(this), c.animation_speed)
            }
            var e = $(".js-pia-value");
            if ((c.history.get("pia") === this.model.pixelId || e.val() === this.model.pixelId)&&!this._hasSentIarq) {
                this._hasSentIarq = true;
                nutp("iarq_" + this.model.pixelId + "_" + c.device.pixelId)
            } else {
                c.hidden.set("pia", this.model.pixelId)
            }
        },
        getHeight: function(f) {
            var e = a.prototype.getHeight.call(this, f);
            return (f && f.subtractMenu && this.views.metabar) ? e - this.views.metabar.getHeight() : e
        },
        destroy: function() {
            clearTimeout(this._detailTimeout);
            a.prototype.destroy.call(this)
        },
        _createMetaBar: function() {
            if (this.views.metabar) {
                return 
            }
            this.views.metabar = new c.Views.AnswerBar.Meta.MetaBar($.extend({
                model: this.model,
                itemType: this.itemType,
                parent: this,
                before: this.$tileWrap
            }, this.model.meta));
            this.views.metabar.on("stuck", this._onMetabarStuckChanged.bind(this));
            this.views.metabar.on("close", this.emit.bind(this, "close"))
        },
        _scrollToTile: function(h, f) {
            if (!h ||!h.$el) {
                return 
            }
            var g = f && typeof f.animated !== "undefined" ? f.animated: true, e = this.model;
            if (!e.expanded) {
                a.prototype._scrollToTile.call(this, h, f)
            } else {
                var k = h.$el.offset().top, j = this.getTileMargins(), m = Math.max(k - j.top - j.bottom, 0);
                if (this.views.metabar) {
                    m -= this.views.metabar.getHeight()
                }
                if (c.isHeaderFixed) {
                    m -= c.get_header_height()
                }
                m = Math.round(m);
                if (is_mobile_device ||!g) {
                    c.device.scrollTop(m)
                } else {
                    c.device.scrollTop(m, true)
                }
            }
        },
        _updateHiddenRows: function() {
            if (!this.model.expanded ||!this._rowsToShow) {
                return 
            }
            this.views.metabar && this.views.metabar.hide();
            var k = 0, f = null, g = 0, j, e, h = 0;
            for (; j = this.views.items[h]; h++) {
                if (g) {
                    j.hide();
                    continue
                }
                if (j.model.gridRow) {
                    k = j.model.gridRow
                } else {
                    e = j.$el.position().top;
                    if (f === null || e !== f) {
                        k++;
                        f = e
                    }
                }
                if (k > this._rowsToShow) {
                    g = 1;
                    j.hide();
                    continue
                }
                j.show()
            }
            g && this.addLoadMore()
        },
        _getGridTileAt: function(e, j) {
            e = e || 0;
            j = j || 0;
            for (var g = 0, f; f = this.views.items[g]; g++) {
                var h = f.$el.offset();
                if (h.left >= e && h.top >= j) {
                    return f
                }
            }
            return null
        },
        _scrollToSelectedTopic: function() {
            if (!this.model.selectedTopic) {
                return 
            }
            this._scrollToTile(this.views.itemsById[this.model.selectedTopic.items[0].id])
        },
        _onCanExpandChanged: function() {
            if (this.model.expanded&&!this.model.canExpand) {
                this.model.set("expanded")
            }
        },
        _onMetabarStuckChanged: function(e) {
            if (this.model.expanded&&!c.device.isMobile) {
                this._updateDetailViewPosition()
            }
        },
        _onResize: function() {
            a.prototype._onResize.call(this);
            this._updateHiddenRows();
            this._updateDetailViewPosition()
        },
        _onSelectedTopicChanged: function() {
            var e = this.model.selectedTopic;
            this.$(".active-topic").removeClass("active-topic");
            if (e) {
                var h = this.views.itemsById;
                this._scrollToSelectedTopic();
                DDG.addClass(this.model.id, this.$el, "at-topic");
                for (var f = 0; f < e.items.length; f++) {
                    var g = h[e.items[f].id];
                    g.$el.addClass("active-topic")
                }
            } else {
                DDG.removeClass(this.model.id, this.$el, "at-topic")
            }
        },
        _onJsTilesTouchEnd: function() {
            if (!this.model.expanded) {
                a.prototype._onJsTilesTouchEnd.call(this)
            }
        },
        _onMouseWheel: function(f) {
            if (!this.model.expanded) {
                a.prototype._onMouseWheel.call(this, f)
            }
        }
    })
}(DDG);
!function(g) {
    var f = g.Views.AnswerBar.Answers, c = f.GridTiles, m = 163, n = 60, a = 120, h = 48, k = 240, j = 2, e = 300;
    f.Images = function(o) {
        this.scrollHandler = this._onScroll.bind(this);
        c.call(this, o)
    };
    f.Images.prototype = $.extend({}, c.prototype, {
        itemType: "Images",
        requiredTemplates: null,
        show: function() {
            if (!is_mobile_device) {
                g.device.on("scroll", this.scrollHandler)
            }
            c.prototype.show.call(this)
        },
        hide: function() {
            g.device.removeListener("scroll", this.scrollHandler);
            c.prototype.hide.call(this)
        },
        _updateItems: function() {
            c.prototype._updateItems.call(this);
            if (this.model.expanded) {
                this._recalcTileGridDimensions();
                this._updateTileWidths();
                this._checkLoadMore()
            }
            this._updateHiddenRows();
            delete this._height;
            this._updateDetailViewPosition()
        },
        _appendItem: function(q) {
            var o = is_mobile ? h: n, p = is_mobile ? a: m;
            q.loadHighRes=!is_mobile;
            if ((q.width > o) && (q.height > p)) {
                q.tileWidth = Math.ceil((p / q.height) * q.width)
            } else {
                if (q.width > o) {
                    q.tileWidth = q.width
                } else {
                    q.tileWidth = o
                }
            }
            c.prototype._appendItem.call(this, q)
        },
        getTileWidth: function(o) {
            return o.model.tileWidth + (this.getTileMargins().x * 2)
        },
        getLoadMoreWidth: function() {
            return this._loadMoreTileWidth || k
        },
        _expand: function() {
            this.$jsTiles.css("width", this.getWidth());
            c.prototype._expand.call(this);
            this._recalcTileGridDimensions();
            this._updateTileWidths();
            g.history.set({
                ia: "images"
            });
            this._checkLoadMore()
        },
        _collapse: function() {
            c.prototype._collapse.call(this);
            this._toggleTrailingTileVisibility();
            this.$jsTiles.css("width", "auto");
            this._updateTileWidths()
        },
        _recalcTileGridDimensions: function() {
            if (!this.views.items.length) {
                return 
            }
            var q = [], o = 0, v = this.getWidth(), u = this.getTileMargins().x * 2, p = 1, t, s;
            for (var r = 0; t = this.views.items[r]; r++) {
                s = t.model;
                s.gridWidth = s.tileWidth;
                delete s.killMinWidth;
                o += s.gridWidth + u;
                q.push(s);
                s.gridRow = p;
                if (o > v) {
                    b(q, o - v);
                    o = 0;
                    q = [];
                    p++
                }
            }
            if (p > 1) {
                this._toggleTrailingTileVisibility(p, v - o)
            }
        },
        _toggleTrailingTileVisibility: function(o, r) {
            var q;
            for (var p = 0; q = this.views.items[p]; p++) {
                if (q.model.gridRow === o && r > n) {
                    q.model.set({
                        hidden: 1
                    });
                    q.$el.addClass("is-hidden")
                } else {
                    if (q.model.hidden) {
                        delete q.model.hidden;
                        q.$el.removeClass("is-hidden")
                    }
                }
            }
        },
        _updateTileWidths: function() {
            var r = this.getTileMargins(), q;
            for (var o = 0, p; p = this.views.items[o]; o++) {
                if (p.$el) {
                    q = p.model;
                    p.$el.css({
                        width: this.model.expanded ? q.gridWidth: q.tileWidth,
                        marginLeft: r.x + "px",
                        marginRight: r.x + "px"
                    });
                    if (q.killMinWidth) {
                        p.$el.css({
                            minWidth: 0
                        })
                    }
                }
            }
            if (!is_mobile) {
                this.$loadMore.css({
                    width: ((this.model.expanded) ? e : this.getLoadMoreWidth()) + "px",
                    marginLeft: (this.model.expanded) ? "auto": r.x + "px",
                    marginRight: (this.model.expanded) ? "auto": r.x + "px"
                })
            }
        },
        _onResize: function() {
            this._width = null;
            this.$jsTiles.css("width", this.getWidth());
            c.prototype._onResize.call(this);
            if (this.views.items.length && this.model.expanded) {
                this._recalcTileGridDimensions();
                this._updateTileWidths();
                this._checkLoadMore()
            }
        },
        _onScroll: function() {
            this._checkLoadMore()
        },
        _checkLoadMore: function() {
            if (!this.model.canLoadOnScroll()) {
                return 
            }
            var s, o, r = g.device, t = this.views.items.length - 1, q = this.views.items[t], u = (r.height - (g.get_header_height() + this.views.metabar.getHeight())), p = ((u + r.scrollTop()) / m) + j;
            if (q && q.model.gridRow < p) {
                this.model.loadMore()
            }
        }
    });
    var b = function(p, v) {
        var s = Math.floor(v / p.length), t = is_mobile ? h: n;
        for (var o = 0, r; r = p[o]; o++) {
            var q = s;
            if (r.gridWidth - s < t) {
                q = r.gridWidth - t
            }
            r.gridWidth -= q;
            v -= q
        }
        var u = Math.ceil(v);
        for (o = 0; r = p[o]; o++) {
            if (r.gridWidth - u > t) {
                r.gridWidth -= u;
                break
            } else {
                if (o === p.length - 1) {
                    r.gridWidth -= u;
                    r.killMinWidth = 1
                }
            }
        }
    }
}(DDG);
!function(e) {
    var c = e.Views.AnswerBar.Answers, b = c.Base, g = 46, a = 60, f = (g + a) / 2;
    c.Map = function(h) {
        b.call(this, h)
    };
    c.Map.prototype = $.extend({}, b.prototype, {
        template: "maps",
        maxItems: 1,
        _updateItems: function() {
            var h = this.model.items[0];
            this._showDetailOverlay = h.name && h.address && h.url;
            this._createMap();
            this._createDetailOverlay(h);
            if (h.isRegion) {
                this.views.map.addLocationAsPolygon(h, {
                    pixelId: this.model.pixelId
                })
            } else {
                this.views.map.addLocationAsMarker(h, {
                    pixelId: this.model.pixelId,
                    type: "star",
                    canFocus: false
                })
            }
            this.views.map.resetZoom()
        },
        show: function() {
            b.prototype.show.call(this);
            this._updateMapPadding();
            this.views.map && this.views.map.show();
            var h = this.model.items[0].marker;
            if (!this._showDetailOverlay && h) {
                setTimeout(function() {
                    h.openPopup()
                }, 100)
            }
        },
        hide: function() {
            b.prototype.hide.call(this);
            this.views.map && this.views.map.hide()
        },
        _createMap: function() {
            if (this.views.map) {
                return 
            }
            this.views.map = new e.Views.Maps.Map({
                showExpansionButton: true,
                expanded: this.model.expanded,
                zoomLevel: this.model.meta.zoomLevel,
                appendTo: this.$el
            });
            this.views.map.on("expand-click", this._onExpandClick.bind(this))
        },
        _createDetailOverlay: function(k) {
            var j = k.getDetailTemplate(), m = this.model.id;
            if (!j ||!this._showDetailOverlay) {
                this.views.map.setPadding({
                    top: f
                });
                return 
            }
            var h = this.views.itemsById[k.id] = {
                model: k,
                "$html": DDG.$exec_template(j, k.toTemplateObject())
            };
            this.$el.append(h.$html);
            this.views.items.push(h);
            DDG.wrapLinkClicks(h.$html.find("a"), {
                nutp: "iag_" + this.model.pixelId
            });
            h.$hours = this.$(".js-tile-map-with-hours");
            if (h.$hours.length) {
                DDG.touchOrClick(".js-map-hours-expand", this._onHoursExpandClick.bind(this));
                DDG.touchOrClick(".js-map-hours-close", this._onHoursCloseClick.bind(this))
            }
        },
        _expand: function() {
            b.prototype._expand.call(this);
            if (this.views.map) {
                this.views.map.expand();
                this.views.map.enableScrollWheel()
            }
            this._fitToExpandedMapHeight()
        },
        _collapse: function() {
            b.prototype._collapse.call(this);
            this.$el.css({
                height: "auto"
            });
            if (this.views.map) {
                this.views.map.collapse();
                this.views.map.disableScrollWheel()
            }
        },
        _fitToExpandedMapHeight: function() {
            if (this.model.expanded) {
                this.$el.css({
                    height: this.views.map.getHeight() + "px"
                })
            }
        },
        _updateMapPadding: function() {
            if (!this.views.items.length ||!this._showDetailOverlay) {
                return 
            }
            var h = this.views.items[0], k = h.$html.find(".js-tile-map"), j = k.position();
            if (is_mobile) {
                k.addClass("tile--map--mob");
                this.views.map.setPadding({
                    top: (j.top + k.outerHeight())
                })
            } else {
                this.views.map.setPadding({
                    left: (j.left + k.outerWidth())
                })
            }
        },
        _onExpandClick: function() {
            this.model.set("expanded", !this.model.expanded)
        },
        _onHoursExpandClick: function(h) {
            h.preventDefault();
            this.views.items[0].$hours.addClass("is-showing-hours")
        },
        _onHoursCloseClick: function(h) {
            h.preventDefault();
            this.views.items[0].$hours.removeClass("is-showing-hours")
        },
        _onResize: function() {
            b.prototype._onResize.call(this);
            this._fitToExpandedMapHeight();
            this._updateMapPadding()
        }
    })
}(DDG);
!function(f) {
    var e = f.Views.AnswerBar.Answers, c = e.Base, h = 46, a = 7, b = "Places", g = "@";
    e.Places = function(j) {
        j.model.meta.minItemsForModeSwitch = 1;
        c.call(this, j);
        this.bindEvents([[this.model, "change:selectedItem", this._onSelectedItemChanged]])
    };
    e.Places.prototype = $.extend({}, c.prototype, {
        template: "maps",
        _tilesHasBeenRendered: false,
        show: function() {
            c.prototype.show.call(this);
            this.views.tiles.show();
            this._tilesHasBeenRendered = true;
            if (this.views.meta) {
                this.views.meta.show()
            }
            if (this.views.map) {
                this._updateMapPadding();
                if (this.model.selectedItem) {
                    this.views.map.zoom(this.model.selectedItem)
                }
            }
        },
        hide: function() {
            c.prototype.hide.call(this);
            this.views.tiles && this.views.tiles.hide()
        },
        removeLoadMore: function() {
            this.views.tiles && this.views.tiles.removeLoadMore()
        },
        _render: function() {
            c.prototype._render.call(this, this.model);
            if (!is_mobile) {
                this._createMetaBar()
            }
            this._createTileView()
        },
        _updateItems: function() {
            if (!this.model.items.length) {
                return 
            }
            for (var j = 0, k; k = this.model.items[j]; j++) {
                if (!k.marker) {
                    if (this.views.map) {
                        if (k.isRegion) {
                            this.views.map.addLocationAsPolygon(k)
                        } else {
                            this.views.map.addLocationAsMarker(k, {
                                canFocus: true
                            })
                        }
                    }
                    k.on("change:selected", this._onItemSelectedChanged.bind(this, k));
                    k.on("change:highlighted", this._onItemHighlightedChanged.bind(this, k))
                }
            }
            if (this.model.meta.next) {
                this.views.tiles.hasNextURL = 1;
                this.views.tiles.addLoadMore()
            }
            this._updateMarkers()
        },
        _createTileView: function() {
            var j = new e.Tiles({
                model: this.model,
                noDetail: true,
                deferShow: true,
                appendTo: this.$el
            });
            this.$el.addClass("has-tileview");
            this.views.tiles = j;
            this.bindEvents([[j, "scrolled", this._onTilesScroll], [j, "load-more", this._onTilesLoadMore]])
        },
        _createMap: function() {
            if (this.views.map) {
                return 
            }
            this.views.map = new f.Views.Maps.Map({
                showDetailOverlay: this.model.items.length === 1,
                pinIcon: this.model.meta.pinIcon,
                pinIconSelected: this.model.meta.pinIconSelected,
                appendTo: this.$el
            });
            if (is_mobile) {
                this.$mobileClose = $('<a href="#" class="btn--icon  mapview__close">×</a>');
                this.$el.append(this.$mobileClose);
                this.$mobileClose.on("touch click", this._onMobileCloseClick.bind(this))
            }
            this.model.items.map(function(j) {
                if (j.isRegion) {
                    this.views.map.addLocationAsPolygon(j, {
                        pixelId: this.model.pixelId
                    })
                } else {
                    this.views.map.addLocationAsMarker(j, {
                        pixelId: this.model.pixelId,
                        canFocus: true
                    })
                }
            }, this);
            this.bindEvents([[this.views.map, "selected", this._onMapLocationSelected], [this.views.map, "unselected", this._onMapLocationUnselected]]);
            this.views.map.resetZoom()
        },
        _createMetaBar: function() {
            this.views.meta = new f.Views.AnswerBar.Meta.MetaBar($.extend({
                model: this.model,
                itemType: b,
                sourceIcon: true,
                expandModeIcon: g,
                minItemsForModeSwitch: 1,
                parent: this,
                notFixed: true,
                appendTo: this.$el
            }, this.model.meta))
        },
        _updateMapPadding: function() {
            var m = a + h, k = 0, o = this.views.meta, n = this.views.map, j = this.views.tiles;
            if (o) {
                m += o.getHeight()
            }
            if (j) {
                k += j.getHeight()
            }
            n.setPadding({
                top: m,
                bottom: k
            })
        },
        _expand: function() {
            clearTimeout(this._hideTimeout);
            this.$el.css({
                height: this.$el.outerHeight() + "px"
            });
            if (!this.views.map) {
                this._createMap();
                this._updateMarkers()
            }
            this.model.meta.autoExpand = 0;
            c.prototype._expand.call(this);
            this._updateMapPadding();
            var j = this.views.map;
            j.expand();
            j.show();
            j.enableScrollWheel();
            this._fitToExpandedMapHeight()
        },
        _collapse: function() {
            var j = this.views.tiles.getHeight();
            if (this.views.meta) {
                j += this.views.meta.getHeight()
            }
            this.$el.css({
                height: j + "px"
            });
            var m = this.views.map, k = this.model.selectedItem;
            if (k) {
                k.unselect()
            }
            m.collapse();
            m.hideControls();
            m.disableScrollWheel();
            this._hideTimeout = setTimeout(function() {
                c.prototype._collapse.call(this);
                m.showControls();
                m.hide()
            }.bind(this), DDG.animation_speed)
        },
        _fitToExpandedMapHeight: function() {
            if (this.model.expanded) {
                this.$el.css({
                    height: this.views.map.getHeight() + "px"
                })
            }
        },
        _updateMarkers: function() {
            if (!this.views.tiles ||!this.model.items.length) {
                return 
            }
            for (var k = 0, m; m = this.model.items[k]; k++) {
                if (m.marker) {
                    var j = m.visible ? "pin": "dot";
                    m.marker.setType(j);
                    if (j === "dot") {
                        m.marker.closePopup();
                        m.marker.unfocus()
                    }
                }
            }
        },
        _onMapLocationSelected: function(j) {
            j.select()
        },
        _onMapLocationUnselected: function(j) {
            j.unselect()
        },
        _onItemHighlightedChanged: function(j) {
            var k = this.views.map;
            if (k) {
                if (j.highlighted) {
                    k.focus(j, {
                        popup: false
                    })
                } else {
                    k.unfocus(j)
                }
            }
        },
        _onItemSelectedChanged: function(j) {
            var k = this.views.map;
            if (k) {
                if (j.selected) {
                    k.select(j, {
                        silent: true,
                        animate: this._tilesHasBeenRendered
                    })
                } else {
                    k.unselect(j, {
                        silent: true
                    })
                }
            }
        },
        _onSelectedItemChanged: function() {
            if (this.model.selectedItem) {
                this.model.set("expanded", 1)
            }
        },
        _onTilesScroll: function() {
            this._updateMarkers()
        },
        _onTilesLoadMore: function() {
            this.emit("load-more")
        },
        _onMobileCloseClick: function(j) {
            j.preventDefault();
            this.model.set("expanded")
        },
        _onEscape: function(j) {
            this.model.set("expanded")
        },
        _onResize: function() {
            c.prototype._onResize.call(this);
            if (this.model.expanded) {
                this._fitToExpandedMapHeight()
            }
        }
    })
}(DDG);
!function(f) {
    var e = f.Views.AnswerBar.Answers, b = e.Base, c = {
        about: {
            mobile: 309,
            desktop: 151,
            desktopTall: 181
        },
        images: {
            mobile: 185,
            desktop: 216
        },
        maps_maps: {
            mobile: 205,
            desktop: 242
        },
        maps_places: {
            mobile: 205,
            desktop: 242
        },
        news: {
            desktop: 298
        },
        nlp_qa: {
            mobile: 133,
            desktop: 253
        },
        places: {
            mobile: 205,
            desktop: 242
        },
        products: {
            mobile: 271,
            desktop: 227,
            desktopTall: 267
        },
        recipes: {
            mobile: 286,
            desktop: 210,
            desktopTall: 282
        },
        sound_cloud: {
            mobile: 330,
            desktop: 311
        },
        time: {
            mobile: 154,
            desktop: 154
        },
        videos: {
            mobile: 247,
            desktop: 227,
            desktopTall: 272
        }
    }, a = 190;
    e.Placeholder = function(g) {
        this.signalWait = g.signalWait;
        this.timeAdded = new Date().getTime();
        b.call(this, g);
        this.show();
        this.updateHeight()
    };
    e.Placeholder.prototype = $.extend({}, b.prototype, {
        updateHeight: function() {
            var j = c[this.signalWait], h = f.device, g;
            if (j) {
                if (h.isMobile) {
                    g = j.mobile || a
                } else {
                    if (h.isTeapot()) {
                        g = j.desktop || a
                    } else {
                        g = j.desktopTall || j.desktop || a
                    }
                }
            }
            this.$el.height(g)
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.Base, a = "bang__nav__char", f = a + "--selected", e = 200;
    c.Views.Bang.Nav = function(g) {
        g.appendTo = ".js-bang-nav";
        b.call(this, g)
    };
    c.Views.Bang.Nav.prototype = $.extend({}, b.prototype, {
        template: "bang_nav",
        _onNavClick: function(h) {
            h.preventDefault();
            var g = $(h.currentTarget).parent().data("char");
            if (g === "all") {
                this.resetFilter()
            } else {
                this.$("." + f).removeClass(f);
                this.$("." + a + "[data-char='" + g + "']").addClass(f);
                this.$bangSearch.val("");
                this.$categories.find("option:first-child()").prop("selected", "selected");
                this.model.filterByCharacter(g)
            }
        },
        _onCategoryChange: function(h) {
            var g = $(h.currentTarget).find("option:selected").val();
            if (g === "all") {
                this.resetFilter()
            } else {
                if (g) {
                    this.$("." + f).removeClass(f);
                    this.$bangSearch.val("");
                    this.model.filterByCategory(g)
                }
            }
        },
        _searchByText: function(g) {
            if (g === this._lastSearch) {
                return 
            }
            if (g) {
                this.$("." + f).removeClass(f);
                this.$categories.find("option:first-child()").prop("selected", "selected");
                this.model.filterByString(g)
            } else {
                this.resetFilter()
            }
            this._lastSearch = g
        },
        _onBangSearchUp: function(g) {
            var h = $(g.currentTarget).val();
            if (this._searchTimeout) {
                clearTimeout(this._searchTimeout)
            }
            this._searchTimeout = setTimeout(function() {
                this._searchByText(h)
            }.bind(this), e)
        },
        resetFilter: function() {
            this.$("." + f).removeClass(f);
            this.$("." + a + "[data-char='all']").addClass(f);
            this.$bangSearch.val("");
            this.$categories.find("option:first-child()").prop("selected", "selected");
            this.model.resetFilter()
        },
        _render: function() {
            b.prototype._render.call(this, {
                chars: this.model.characters,
                categories: this.model.primaryCategories
            });
            this.$categories = this.$(".js-categories-list");
            this.$characterLinks = this.$(".js-char-link");
            this.$bangSearch = this.$(".js-bang-search");
            this.$bangSearch.keyup(this._onBangSearchUp.bind(this));
            this.$characterLinks.click(this._onNavClick.bind(this));
            this.$categories.change(this._onCategoryChange.bind(this))
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Base, e = 500, g = 800, c = 150, f = 2;
    b.Views.Bang.Results = function(h) {
        h = h || {};
        h.$el = $(".js-bang-results");
        a.call(this, h);
        this._addListeners();
        this._resultSetsLeftToRender = [];
        this._numColumns = this._getNumColumns()
    };
    b.Views.Bang.Results.prototype = $.extend({}, a.prototype, {
        _resultSetTemplate: "bang_resultset",
        _resultTemplate: "bang_result",
        _getResultSetMarkup: function(m) {
            var h, j;
            h = DDG.$exec_template(this._resultSetTemplate, {
                title: m.title,
                numColumns: this._numColumns
            });
            j = h.find(".js-bang-column");
            for (var k = 0; k < m.bangs.length; k++) {
                j.eq(k%this._numColumns).append(DDG.exec_template(this._resultTemplate, m.bangs[k]))
            }
            return h[0].outerHTML
        },
        _transitionToMarkup: function(h) {
            this.$el.addClass("is-transitioning");
            this._transitioning = true;
            setTimeout(function() {
                this.$el.html(h);
                this._transitioning = false;
                this.$el.removeClass("is-transitioning");
                this.emit("added-results")
            }.bind(this), c)
        },
        _onBangFilter: function(h) {
            var j = "", m = Math.min(h.length, f);
            this._resultSets = h;
            for (var k = 0; k < m; k++) {
                j += this._getResultSetMarkup(h[k])
            }
            this._resultSetsLeftToRender = h.slice(m);
            if (h[0].bangs.length) {
                this._transitionToMarkup(j)
            } else {
                this.$el.html(j)
            }
        },
        showMoreResultSets: function() {
            if (this._resultSetsLeftToRender.length === 0 || this._transitioning) {
                return 
            }
            var h = "", k = Math.min(this._resultSetsLeftToRender.length, f);
            for (var j = 0; j < k; j++) {
                h += this._getResultSetMarkup(this._resultSetsLeftToRender.shift())
            }
            this.$el.append(h);
            this.emit("added-results")
        },
        _onBangClick: function(j) {
            j.preventDefault();
            j.stopImmediatePropagation();
            var h = $(j.currentTarget).data("name");
            this.emit("clicked-bang", h)
        },
        _getNumColumns: function() {
            var h = 3;
            if (DDG.device.width < e) {
                h = 1
            } else {
                if (DDG.device.width < g) {
                    h = 2
                }
            }
            return h
        },
        _onResize: function() {
            var h = this._getNumColumns();
            if (this._numColumns !== h) {
                this._numColumns = h;
                this._onBangFilter(this._resultSets)
            }
        },
        _addListeners: function() {
            b.device.on("resize", this._onResize.bind(this));
            this.model.on("filter", this._onBangFilter.bind(this));
            this.$el.on("click", ".js-bang-result", this._onBangClick.bind(this))
        }
    })
}(DDG);
!function(o) {
    var k = "duckduckgo.ljdfs9k9", m = '<a href="http://mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/" class="mapbox-improve-map">Improve this map</a>', j = '<div class="mapview__map"><div class="mapview__map__bottom-shadow"></div></div>', n = (is_mobile&&!DDG.is2x&&!DDG.is3x) ? "jpg70": "png", g = "maps_marker_popup", f = {
        attribution: m,
        autoscale: true,
        bounds: [ - 180, - 85, 180, 85],
        maxzoom: 18,
        minzoom: 3,
        id: k,
        tilejson: "2.0.0",
        tiles: [DDG.getImageProxyURL("https://a.tiles.mapbox.com/v4/" + k + "/{z}/{x}/{y}." + n + "?access_token=pk.eyJ1IjoiZHVja2R1Y2tnbyIsImEiOiJiczA0MnE4In0.-Df8dM1SoUB2myaUu2_YdA", 1), DDG.getImageProxyURL("https://b.tiles.mapbox.com/v4/" + k + "/{z}/{x}/{y}." + n + "?access_token=pk.eyJ1IjoiZHVja2R1Y2tnbyIsImEiOiJiczA0MnE4In0.-Df8dM1SoUB2myaUu2_YdA", 1), DDG.getImageProxyURL("https://c.tiles.mapbox.com/v4/" + k + "/{z}/{x}/{y}." + n + "?access_token=pk.eyJ1IjoiZHVja2R1Y2tnbyIsImEiOiJiczA0MnE4In0.-Df8dM1SoUB2myaUu2_YdA", 1), DDG.getImageProxyURL("https://d.tiles.mapbox.com/v4/" + k + "/{z}/{x}/{y}." + n + "?access_token=pk.eyJ1IjoiZHVja2R1Y2tnbyIsImEiOiJiczA0MnE4In0.-Df8dM1SoUB2myaUu2_YdA", 1)]
    }, p = 15, q = [10, 17], e = 30, h = 0.8, c = 800, a = 1, r = 400;
    var b = o.Views.Base;
    o.Views.Maps.Map = function(s) {
        this._showExpansionButton = s.showExpansionButton;
        this._pinIcon = s.pinIcon;
        this._pinIconSelected = s.pinIconSelected;
        this._expanded = s.expanded;
        this.zoomLevel = s.zoomLevel;
        b.call(this, s);
        this.locations = [];
        this.polygonLocations = [];
        this.setPadding();
        this.bindEvents([[o.device, "resize", this._onResize]])
    };
    o.Views.Maps.Map.prototype = $.extend({}, b.prototype, {
        show: function() {
            this.$el.show();
            this._onResize()
        },
        hide: function() {
            this.$el.hide()
        },
        showControls: function() {
            this.$el.removeClass("controls-hidden")
        },
        hideControls: function() {
            this.$el.addClass("controls-hidden")
        },
        resetSize: function() {
            this._map.invalidateSize()
        },
        resetZoom: function(s) {
            if (!this.locations ||!this.locations.length) {
                return 
            }
            var u = L.latLngBounds([]);
            for (var t = 0, v; v = this.locations[t]; t++) {
                if (v.polygon) {
                    u.extend(v.polygon.getBounds())
                } else {
                    if (this.locations.length < 2 && v.bbox && v.bbox.length) {
                        if (v.bbox[1] !== v.bbox[3] && v.bbox[0] !== v.bbox[2]) {
                            u.extend(L.latLngBounds(L.latLng(v.bbox[1], v.bbox[0]), L.latLng(v.bbox[3], v.bbox[2])))
                        } else {
                            u.extend(v.latLng)
                        }
                    } else {
                        if (v.latLng && v.latLng.length) {
                            u.extend(v.latLng)
                        }
                    }
                }
            }
            this._fitBounds(u, {
                animate: !!s,
                allowUserZoomLevel: false,
                maxZoom: this.zoomLevel
            })
        },
        setPadding: function(s) {
            s = s || {};
            this._paddingLeftTop = L.point(parseInt(s.left || 0), parseInt(s.top || 0));
            this._paddingRightBottom = L.point(parseInt(s.right || 0), parseInt(s.bottom || 0))
        },
        addLocationAsMarker: function(t, s) {
            this._addMarker(t, s);
            this.locations.push(t)
        },
        addLocationAsPolygon: function(y, v) {
            var u = [];
            for (var t = 0; t < y.polygonPoints.length; t++) {
                var x = y.polygonPoints[t];
                u.push(new L.LatLng(x[1], x[0]))
            }
            var s = new L.Polygon(u, {
                color: "#333",
                opacity: 0.75,
                weight: 2,
                dashArray: "1,2",
                fillColor: "#000",
                fillOpacity: 0.05
            });
            s.addTo(this._map);
            y.polygon = s;
            this.locations.push(y);
            this.polygonLocations.push(y);
            this._addMarker(y, {
                pixelId: v && v.pixelId,
                type: "star",
                canFocus: false
            })
        },
        zoom: function(t, s) {
            this._fitBounds(L.latLngBounds([t.latLng]), {
                animate: !!(s && s.animate),
                allowUserZoomLevel: true
            })
        },
        getHeight: function() {
            return this._height || this.$el.outerHeight()
        },
        expand: function() {
            this._expanded = true;
            if (this.views.expansionButton) {
                this.views.expansionButton.setExpanded(true)
            }
            this._onResize()
        },
        collapse: function() {
            this._expanded = false;
            if (this.views.expansionButton) {
                this.views.expansionButton.setExpanded(false)
            }
            this.$el.css({
                height: "100%"
            });
            delete this._height;
            this._onResize()
        },
        focus: function(t, s) {
            s = s || {};
            if (t.marker) {
                t.marker.focus();
                if (s.popup) {
                    t.marker.openPopup()
                }
            }
            t.isFocused = true
        },
        unfocus: function(t, s) {
            if (!t.isFocused) {
                return 
            }
            if (this._selectedLocation && this._selectedLocation === t) {
                return 
            }
            s = s || {};
            if (t.marker) {
                t.marker.unfocus();
                if (s.popup) {
                    t.marker.closePopup()
                }
            }
            delete t.isFocused
        },
        select: function(t, s) {
            s = s || {};
            if (this._selectedLocation === t) {
                return 
            }
            if (this._selectedLocation) {
                this.unselect(s)
            }
            if (typeof s.animate === "undefined") {
                s.animate = true
            }
            this.focus(t, {
                popup: true
            });
            this.zoom(t, {
                animate: s.animate
            });
            this._selectedLocation = t;
            if (!s.silent) {
                this.emit("selected", t)
            }
        },
        unselect: function(t, s) {
            s = s || t || {};
            if (t !== this._selectedLocation) {
                return 
            }
            var u = this._selectedLocation;
            delete this._selectedLocation;
            this.unfocus(u, {
                popup: true
            });
            if (s.zoom) {
                this.resetZoom(true)
            }
            if (!s.silent) {
                this.emit("unselected", u)
            }
        },
        enableScrollWheel: function() {
            this._map.scrollWheelZoom.addHooks()
        },
        disableScrollWheel: function() {
            this._map.scrollWheelZoom.removeHooks()
        },
        _render: function() {
            if (this._map) {
                return 
            }
            this.$el = $(j);
            this._addToDOM();
            this._map = L.mapbox.map(this.$el[0], f, {
                zoomControl: (is_mobile) ? false: true,
                scrollWheelZoom: false
            });
            if (L.Browser.retina && this._map.tileLayer) {
                var s = this._map.tileLayer, t = s.options;
                t.detectRetina = true;
                t.tileSize = Math.floor(t.tileSize / 2);
                t.zoomOffset++;
                t.minZoom = Math.max(0, t.minZoom);
                t.maxZoom--;
                s.redraw()
            }
            this._map.infoControl.setPosition("bottomright");
            if (!is_mobile) {
                L.DomUtil.addClass(this._map.infoControl._container, "active");
                L.DomUtil.addClass(this._map.infoControl._container, "not-mobile");
                this._map.infoControl._active = true;
                this._map.infoControl._update()
            }
            if (this._showExpansionButton) {
                this.views.expansionButton = o.Views.Maps.ExpansionButton({
                    expanded: this._expanded
                });
                this._map.addControl(this.views.expansionButton);
                this.bindEvents([[this.views.expansionButton, "click", this.emit.bind(this, "expand-click")]])
            }
            if (!is_mobile) {
                this._map.zoomControl.setPosition("topright")
            }
            this.bindEvents([[this._map, "zoomstart", this._onMapZoomStart], [this._map, "zoomend", this._onMapZoomEnd]])
        },
        _addMarker: function(u, t) {
            t = t || {};
            if (!u.latLng) {
                return 
            }
            var s = o.Views.Maps.Marker(u.latLng, {
                pixelId: t.pixelId,
                popupContent: o.exec_template(g, u),
                popupOptions: {
                    closeButton: false,
                    closeOnClick: false
                },
                type: t.type || "pin",
                pinText: u.pinText || u.num,
                pinIcon: this._pinIcon,
                pinIconSelected: this._pinIconSelected,
                clickable: t.canFocus
            });
            s.addTo(this._map);
            if (t.canFocus) {
                s.on("mouseover", this._onMarkerMouseEnter.bind(this, u));
                s.on("mouseout", this._onMarkerMouseLeave.bind(this, u));
                s.on("click", this._onMarkerClick.bind(this, u))
            }
            u.marker = s;
            return s
        },
        _updatePolygonMarker: function() {},
        _fitBounds: function(z, v) {
            var y;
            if (this._userZoomed) {
                y = this._map.getZoom();
                if (!v.allowUserZoomLevel || y < q[0] || y > q[1]) {
                    this._userZoomed = false
                }
            }
            if (!this._userZoomed) {
                y = this._map.getBoundsZoom(z, false, this._paddingLeftTop.add(this._paddingRightBottom));
                y = (y > p) ? p : y;
                this._lastAutoZoom =+ new Date();
                if (v.maxZoom && y > v.maxZoom) {
                    y = v.maxZoom
                }
            }
            var u = this._paddingRightBottom.subtract(this._paddingLeftTop).divideBy(2), x = this._map.project(z.getSouthWest(), y), t = this._map.project(z.getNorthEast(), y), s = this._map.unproject(x.add(t).divideBy(2).add(u), y);
            this._map.setView(s, y, {
                animate: !!v.animate,
                maxZoom: y
            })
        },
        _updateHeight: function() {
            if (!this._expanded) {
                return 
            }
            var u = Math.round(viewport_height - this.$el.offset().top), t = (viewport_height < c) ? a: h, s = Math.round(u * t);
            s = Math.max(s, r);
            if (ipa) {
                s -= 20
            }
            this._height = s;
            this.$el.css({
                height: this._height + "px"
            })
        },
        _onResize: function() {
            this._updateHeight();
            this.resetSize();
            this.resetZoom()
        },
        _onMarkerClick: function(s) {
            this.select(s)
        },
        _onMarkerMouseEnter: function(s) {
            this.focus(s, {
                popup: !this._selectedLocation
            })
        },
        _onMarkerMouseLeave: function(s) {
            this.unfocus(s, {
                popup: !this._selectedLocation
            })
        },
        _onMapZoomStart: function(t) {
            var s =+ new Date();
            if (s - this._lastAutoZoom > 500) {
                this._userZoomed = true
            }
        },
        _onMapZoomEnd: function(s) {
            this._updatePolygonMarker()
        }
    })
}(DDG);
!function(a) {
    var b = "mapview-marker";
    a.Views.Maps.Marker = function(g, f) {
        var e = L.Icon.extend({
            options: {
                className: b,
                iconSize: [26, 46],
                iconAnchor: [13, 36],
                popupOffset: [0, - 30],
                dotPopupOffset: [0, 0],
                type: "pin",
                pinText: null,
                pinIcon: null,
                pinIconSelected: null
            },
            createIcon: function() {
                var m = this.options.pinIcon, k = this.options.pinIconSelected, n = this.options.pinText;
                this.$el = this.$el || $('<div><div class="mapview-marker__dot"></div></div>');
                if (m) {
                    this.$icn = $('<span class="mapview-marker__icn ddgsi ' + m + '"></span>');
                    this.$el.append(this.$icn)
                }
                if (k) {
                    this.$sel = $('<span class="mapview-marker__icn mapview-marker__icn--sel  ddgsi ' + k + '"></span>');
                    this.$el.append(this.$sel)
                }
                if (n) {
                    var j = m ? "hide-on-unfocused ": "", h = k ? "hide-on-focused ": "";
                    this.$txt = $('<span class="mapview-marker__num ' + j + h + '">' + n + "</span>");
                    this.$el.append(this.$txt)
                }
                this._setIconStyles(this.$el[0], "icon");
                if (this.options.focused) {
                    this.focus()
                }
                if (this.options.type !== "pin") {
                    this.setType(this.options.type)
                }
                return this.$el[0]
            },
            createShadow: function() {
                return null
            },
            getPopupOffset: function() {
                return this.options[this.type + "PopupOffset"] || this.options.popupOffset
            },
            focus: function() {
                this._preFocusPinType = this.type;
                this.setType("pin");
                this.$el.addClass("has-focus")
            },
            unfocus: function() {
                if (this._preFocusPinType) {
                    this.setType(this._preFocusPinType);
                    delete this._preFocusPinType
                }
                this.$el.removeClass("has-focus")
            },
            setType: function(h) {
                if (this.type === h) {
                    return false
                }
                this.$el.removeClass(b + "-" + this.type);
                this.type = h;
                this.$el.addClass(b + "-" + this.type);
                return true
            },
            show: function() {
                this.$el.show()
            },
            hide: function() {
                this.$el.hide()
            }
        });
        var c = L.Marker.extend({
            initialize: function(j, h) {
                L.Marker.prototype.initialize.call(this, j, h);
                this.pixelId = h.pixelId;
                if (h.popupContent) {
                    this.bindPopup(h.popupContent, h.popupOptions)
                }
                return true
            },
            bindPopup: function(j, h) {
                h = h || {};
                if (this._popup) {
                    this._popup.setContent(j)
                } else {
                    this._popup = new L.Popup(h, this);
                    this._popup.setContent(j)
                }
            },
            openPopup: function() {
                var h = this, j = this.options.icon.getPopupOffset();
                L.setOptions(this._popup, {
                    offset: j
                });
                L.Marker.prototype.openPopup.call(this);
                DDG.wrapLinkClicks($(this._popup._wrapper).find("a"), {
                    nutp: "iag_" + h.pixelId
                })
            },
            closePopup: function() {
                DDG.unwrapLinkClicks($(this._popup._wrapper).find("a"));
                L.Marker.prototype.closePopup.call(this)
            },
            show: function() {
                this.options.icon.show()
            },
            hide: function() {
                this.options.icon.hide()
            },
            focus: function() {
                this.options.icon.focus();
                this.setZIndexOffset(1000)
            },
            unfocus: function() {
                this.options.icon.unfocus();
                this.setZIndexOffset(0)
            },
            setType: function(h) {
                this.options.icon.setType(h)
            }
        });
        return new c(g, L.extend({
            icon: new e(f)
        }, f))
    }
}(DDG);
!function(a) {
    a.Views.Maps.ExpansionButton = function(c) {
        var b = L.Control.extend({
            options: {
                position: "bottomright",
                className: "leaflet-control-expandmap ddgsi"
            },
            includes: L.Mixin.Events,
            onAdd: function(f) {
                var e = L.DomUtil.create("div", "leaflet-bar leaflet-control");
                this._link = L.DomUtil.create("a", this.options.className, e);
                this._link.href = "#";
                this._updateButtonState();
                L.DomEvent.addListener(this._link, "click", L.DomEvent.stopPropagation).addListener(this._link, "click", L.DomEvent.preventDefault).addListener(this._link, "click", this._onClick, this);
                return e
            },
            show: function() {
                this._link.style.display = "block"
            },
            hide: function() {
                this._link.style.display = "none"
            },
            setExpanded: function(e) {
                this.options.expanded = e;
                this._updateButtonState()
            },
            _updateButtonState: function() {
                this._link.innerHTML = this.options.expanded ? "^" : "v"
            },
            _onClick: function() {
                this.fireEvent("click")
            }
        });
        return new b(c)
    }
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.Modals.Base = function(c) {
        this.nutp = c.nutp;
        a.call(this, c)
    };
    b.Views.Modals.Base.prototype = $.extend({}, a.prototype, {
        show: function() {
            this.isShowing = true;
            this.emit("shown")
        },
        hide: function() {
            this.isShowing = false;
            this.emit("hidden")
        },
        toggle: function() {
            return this.isShowing ? this.hide() : this.show()
        },
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.$link = c.$link || "";
            if (this.$link) {
                this._bindLink()
            }
        },
        _bindLink: function() {
            this.$link.on("click", this._onLinkClick.bind(this))
        },
        _onLinkClick: function(c) {
            c.preventDefault();
            c.stopPropagation();
            if (this.nutp&&!this.isShowing) {
                nutp(this.nutp)
            }
            this.toggle()
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Modals.Base;
    b.Views.Modals.Popover = function(c) {
        a.call(this, c)
    };
    b.Views.Modals.Popover.prototype = $.extend({}, a.prototype, {
        show: function() {
            a.prototype.show.call(this);
            this.$el.addClass("is-showing")
        },
        hide: function() {
            a.prototype.hide.call(this);
            this.$el.removeClass("is-showing")
        },
        _render: function(e) {
            a.prototype._render.call(this, e);
            var c = this;
            b.touchOrClick(".js-popover-close", function(f) {
                f.preventDefault();
                c.hide()
            })
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Modals.Base, c = "is-showing";
    b.Views.Modals.Popout = function(e) {
        a.call(this, e)
    };
    b.Views.Modals.Popout.prototype = $.extend({}, a.prototype, {
        show: function() {
            a.prototype.show.call(this);
            this.$main.addClass(c);
            this._addDocHandler()
        },
        hide: function() {
            a.prototype.hide.call(this);
            this.$main.removeClass(c);
            this._removeDocHandler()
        },
        destroy: function() {
            a.prototype.destroy.call(this);
            this._removeDocHandler()
        },
        _render: function(e) {
            a.prototype._render.call(this, e);
            this._cacheElems(".js-popout", ["main", "link"]);
            if (this.$link&&!e.$link) {
                this._bindLink()
            }
        },
        _addDocHandler: function() {
            b.$doc.on("click.popout", this._onDocClick.bind(this));
            this._boundToDoc = 1
        },
        _removeDocHandler: function() {
            b.$doc.off("click.popout");
            this._boundToDoc = 0
        },
        _onDocClick: function() {
            this.hide()
        }
    })
}(DDG);
!function(g) {
    var b = g.Views.Slider, c = 50;
    g.Views.HomepageTagline = function(m) {
        b.call(this, m)
    };
    g.Views.HomepageTagline.prototype = $.extend({}, b.prototype, {
        template: "homepage_tagline",
        _render: function(o) {
            var m = g.settings.isDefault("kal");
            o.items = ".js-tag-item";
            if (m) {
                o.timeout = 6000;
                o.nav = {
                    className: "tag-home__nav"
                }
            }
            var n = j(g.Data.Homepage.queries), p = lp("frontpage", "The search engine that doesn't track you.") + ' <span class="hide--screen-xs">' + lp("frontpage", "%sLearn More%s.", '<a href="/about">', "</a>") + "</span>";
            o.taglines = g.shuffle([lp("frontpage", "New to DuckDuckGo? %sTake a Tour.%s", '<a href="/tour">', "</a>"), lp("frontpage", "Already a fan? %sHelp Spread DuckDuckGo!%s", '<a href="/spread">', "</a>"), lp("frontpage", "Did you know you can %scustomize%s DuckDuckGo?", '<a href="/settings">', "</a>"), lp("frontpage", "Need ideas? Try %s.", n)]);
            o.taglines.unshift(p);
            b.prototype._render.call(this, o);
            if (Modernizr.touch) {
                this.$el.on("touchstart.tagline", e.bind(this))
            }
            this.$("a").click(function(r) {
                var q = $(r.target).attr("href");
                if (q !== "#") {
                    nutp("htl_" + q)
                }
            })
        },
        _makeNavWrap: function() {
            var o = this.nav.className, m = $('<ul class="' + o + '__wrap"></ul>'), p = $('<div class="' + o + '__close ddgsi">×</div>'), n = $('<div class="' + o + '"></div>');
            m.append(p);
            n.append(m);
            this.$el.append(n);
            p.click(k.bind(this));
            m.click(this.advanceSlides.bind(this, 1));
            return m
        },
        _onNavClick: function(m, n) {
            n.stopPropagation();
            b.prototype._onNavClick.call(this, m, n)
        }
    });
    function j(m) {
        var n = m[Math.floor(Math.random() * m.length)];
        return '<a href="' + n.href + '">' + n.label + "</a>"
    }
    function f(n) {
        var m = n.originalEvent.touches, o = m && m[0];
        return o && o.clientX
    }
    function e(m) {
        g.$doc.on("touchmove.tagline", a.bind(this));
        g.$doc.on("touchend.tagline", h.bind(this));
        this._startX = f(m)
    }
    function a(n) {
        var m = f(n);
        if (m) {
            var o = m - this._startX;
            if (Math.abs(o) > c) {
                this.advanceSlides(o > 0?-1 : 1);
                h.call(this)
            }
        }
    }
    function h() {
        g.$doc.off("touchmove.tagline");
        g.$doc.off("touchend.tagline")
    }
    function k() {
        this.activeByIndex(0);
        this.killTimer();
        this.$navWrap.remove();
        g.settings.set("kal", - 1, {
            saveToCloud: true
        })
    }
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.AddToBrowserBadge = function(f) {
        f.displayBrowserName = b.device.displayBrowserName;
        f.browserId = f.displayBrowserName.toLowerCase();
        if (b.device.isIOS8p) {
            this.template = "add_to_browser_badge_ios"
        }
        if (b.device.isAndroid) {
            this.template = "add_to_browser_badge_android"
        }
        a.call(this, f);
        this.bindEvents([[this.$el, "click", c], [".js-badge-link-close", "click", e]])
    };
    b.Views.AddToBrowserBadge.prototype = $.extend({}, a.prototype, {
        template: "add_to_browser_badge",
        showModal: function() {
            if (!this.views.modal) {
                var f = b.device.isIOS8p || b.device.isAndroid ? "AddToBrowserModalBlurred": "AddToBrowserModal";
                this.views.modal = new b.Views[f]({
                    appendTo: $("body")
                })
            }
            setTimeout(function() {
                this.views.modal.show()
            }.bind(this), 50)
        }
    });
    function c(f) {
        f.preventDefault();
        if (b.device.isMobileDevice && fq) {
            return false
        }
        nutp("hm");
        this.showModal()
    }
    function e(f) {
        f.preventDefault();
        f.stopPropagation();
        b.settings.set("kak", - 1, {
            saveToCloud: true
        });
        this.destroy()
    }
}(DDG);
!function(c) {
    var b = c.Views.Modals.Popover, a = "js-add-to-browser", e = "is-hidden";
    c.Views.AddToBrowserModal = function(f) {
        b.call(this, f)
    };
    c.Views.AddToBrowserModal.prototype = $.extend({}, b.prototype, {
        template: "add_to_browser_modal",
        _render: function() {
            var m = c.device, o = m.getAddToBrowserDirections(), j = {
                displayBrowserName: m.displayBrowserName
            }, g = o.useForSearch && c.exec_template(o.useForSearch, j), f = o.setAsHomepage && c.exec_template(o.setAsHomepage, j), n = m.getBrowserMoreURL(), k = g && f, h = k || n;
            b.prototype._render.call(this, $.extend(j, {
                useForSearch: g,
                setAsHomepage: f,
                moreURL: n,
                hasToggle: k,
                hasFooter: h
            }));
            if (k) {
                this.$("." + a + "-search-link").click(this._showDirections.bind(this, "search"));
                this.$("." + a + "-homepage-link").click(this._showDirections.bind(this, "homepage"))
            }
            this.$(".js-btn-nui").click(function() {
                nui();
                this.$(".has-btn").removeClass("has-btn");
                this.$(".js-hide-on-nui").addClass(e);
                this.$(".js-show-on-nui").removeClass(e);
                return false
            }.bind(this));
            this.$el.click(function(p) {
                p.preventDefault && p.stopPropagation()
            })
        },
        _showDirections: function(f, j) {
            j.preventDefault();
            j.stopPropagation();
            var g = f === "search" ? "homepage": "search", k = "." + a + "-" + g, h = "." + a + "-" + f;
            this.$(k).addClass(e);
            this.$(k + "-link").removeClass(e);
            this.$(h).removeClass(e);
            this.$(h + "-link").addClass(e)
        }
    })
}(DDG);
!function(e) {
    var c = e.Views.Modals.Base;
    e.Views.AddToBrowserModalBlurred = function(f) {
        c.call(this, f)
    };
    e.Views.AddToBrowserModalBlurred.prototype = $.extend({}, c.prototype, {
        template: "add_to_browser_modal_blurred",
        _render: function(f) {
            f = f || {};
            f.content = e.exec_template(e.device.getAddToBrowserDirections().useForSearch);
            c.prototype._render.call(this, f);
            this.$backdrop = $('<div class="add-to-browser--blurred__backdrop"></div>');
            $("body").append(this.$backdrop);
            this._measureHeight();
            e.device.on("resize", this._measureHeight.bind(this));
            DDG.touchOrClick(this.$backdrop, a.bind(this));
            DDG.touchOrClick(this.$el, a.bind(this))
        },
        show: function() {
            e.$html.addClass("blurred-animation").addClass("is-blurred");
            this.$backdrop.addClass("is-showing");
            b(this.$el, "translate3d(0px," + this._translateY + "px,0px)");
            c.prototype.show.call(this)
        },
        hide: function() {
            b(this.$el, "translate3d(0px,0px,0px)");
            e.$html.removeClass("is-blurred");
            this.$backdrop.removeClass("is-showing");
            c.prototype.hide.call(this);
            setTimeout(function() {
                e.$html.removeClass("blurred-animation")
            }, 300)
        },
        _measureHeight: function() {
            this._translateY = this.$el.outerHeight()*-1;
            if (this.isShowing) {
                b(this.$el, "translate3d(0px", + this._translateY + "px,0px)")
            }
        }
    });
    var b = function(f, g) {
        f.css({
            "-webkit-transform": g,
            transform: g
        })
    }, a = function(f) {
        f.preventDefault();
        f.stopPropagation();
        this.hide()
    }
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.SpreadBadge = function(c) {
        a.call(this, c);
        b.ImageLoader.registerAll(this.$(".js-lazysvg"), "sidemenu", {
            svg: true
        });
        this.bindEvents([[this.$el, "click", this._onClick], [".js-badge-link-close", "click", this._onCloseClick]])
    };
    b.Views.SpreadBadge.prototype = $.extend({}, a.prototype, {
        template: "spread_badge",
        _onClick: function() {
            nutp("sm_spread");
            window.location.href = "/spread"
        },
        _onCloseClick: function() {
            b.settings.set("kak", - 1, {
                saveToCloud: true
            });
            this.destroy()
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Modals.Popout, c = "is-hidden";
    b.Views.AttributionModal = function(e) {
        a.call(this, e)
    };
    b.Views.AttributionModal.prototype = $.extend({}, a.prototype, {
        template: "attribution",
        _render: function(g) {
            if (!g.developer ||!$.isArray(g.developer) ||!g.developer.length) {
                return false
            }
            g.showDev = true;
            for (var f = 0; f < g.developer.length; f++) {
                var e = g.developer[f];
                if (!e ||!e.name || e.name == "DDG Team" || e.name == "DuckDuckGo" || e.name == "duckduckgo") {
                    g.showDev = false
                }
            }
            a.prototype._render.call(this, g);
            if (g.hiddenParent) {
                this.$parent.removeClass(c)
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.Region.Switch = function(c) {
        this.region = c.region;
        a.call(this, c);
        this.region.fetchSuggested(function(f, e) {
            if (!e) {
                return 
            }
            this.suggestedRegionId = e;
            this._rerender()
        }.bind(this))
    };
    b.Views.Region.Switch.prototype = $.extend({}, a.prototype, {
        template: "region_switch",
        _render: function() {
            var c = this.region.hasRegion(), e;
            this.regionId = c ? this.region.getId() : !this.region.disabledSuggested() && (this.region.prevId || this.suggestedRegionId);
            if (this.regionId) {
                e = {
                    name: this.region.getName(this.regionId),
                    iconURL: this.region.getSmallIconURL(this.regionId)
                }
            }
            a.prototype._render.call(this, {
                region: e,
                isOn: c,
                noRegionIconURL: this.region.getSmallIconURL(this.region.getDefaultId())
            });
            b.tap(".js-switch", onSwitchClick.bind(this), {
                fallbackToClick: true
            });
            b.tap(".js-region-switch-label", onLabelClick.bind(this), {
                fallbackToClick: true
            });
            b.tap(".js-region-switch-flag", onFlagClick.bind(this), {
                fallbackToClick: true
            });
            b.tap(".js-region-switch-clear", onClearClick.bind(this), {
                fallbackToClick: true
            })
        },
        _rerender: function() {
            this.$el.remove();
            delete this.$el;
            this._render()
        }
    });
    onLabelClick = function(c) {
        return this.regionId ? onSwitchClick.call(this, c) : onFlagClick.call(this, c)
    }, onSwitchClick = function(f) {
        var c = this.region.hasRegion(), g = c ? this.region.getDefaultId(): this.regionId;
        if (c) {
            this.$el.removeClass("is-on")
        } else {
            this.$el.addClass("is-on")
        }
        this.region.setId(g, {
            saveToSettings: true
        })
    }, onFlagClick = function(c) {
        c.preventDefault();
        this.views.selector = this.views.selector || new b.Views.Region.Selector({
            region: this.region,
            appendTo: $("body")
        });
        this.views.selector.show()
    }, onClearClick = function(c) {
        c.preventDefault();
        this.region.disableSuggested();
        this._rerender()
    }
}(DDG);
!function(b) {
    var a = b.Views.Modals.Popover, e = [{
        className: "region-xs",
        viewportWidth: 413,
        cols: 2
    }, {
        className: "region-s",
        viewportWidth: 616,
        cols: 3
    }, {
        className: "region-m",
        viewportWidth: 840,
        cols: 4
    }, {
        className: "region-xl",
        viewportWidth: 1400,
        cols: 5
    }
    ];
    b.Views.Region.Selector = function(j) {
        this.region = j.region;
        a.call(this, j);
        this.bindEvents([[this.region, "change:id", this._updateSelected], [b.device, "resize", c]])
    };
    b.Views.Region.Selector.prototype = $.extend({}, a.prototype, {
        template: "region_selector",
        show: function() {
            this._updateSize();
            this._renderRegions();
            this._updateSelected();
            a.prototype.show.call(this)
        },
        _renderRegions: function() {
            var k = h(this.region.getAll(), this._size.cols), j = b.exec_template("region_selector_regions", {
                columns: k
            });
            this.$(".js-region-form").html(j);
            this.$("input:radio[name='region']").change(g.bind(this))
        },
        _updateSize: function() {
            if (this._size) {
                this.$el.removeClass(this._size.className)
            }
            this._size = e[0];
            for (var j = 1; j < e.length; j++) {
                if (viewport_width >= e[j].viewportWidth) {
                    this._size = e[j]
                }
            }
            this.$el.addClass(this._size.className)
        },
        _updateSelected: function() {
            var j = this.$("#region--" + this.region.getId());
            this.$(".is-selected").removeClass("is-selected");
            if (j && j.length) {
                j.addClass("is-selected");
                this.$("#" + this.region.getId()).prop("checked", true);
                this.$el.addClass("has-region")
            } else {
                this.$el.removeClass("has-region")
            }
            if (this.$regionHeaderCurrent) {
                this.$regionHeaderCurrent.remove()
            }
            this.$regionHeaderCurrent = b.$exec_template("region_selector_current", {
                id: this.region.getId(),
                name: this.region.getName(),
                iconURL: this.region.getLargeIconURL(),
                hasRegion: this.region.hasRegion()
            });
            this.$(".region__header__section").after(this.$regionHeaderCurrent);
            this.$(".js-region-clear").click(f.bind(this))
        },
        _changeRegion: function(j) {
            this.hide();
            this.region.setId(j, {
                saveToSettings: true
            })
        }
    });
    var h = function(q, n) {
        var p = Math.ceil(q.length / n), m = [];
        for (var k = 0; k < n; k++) {
            var o = Math.max(m.length * p, 0), j = o + p;
            m.push(q.slice(o, j))
        }
        return m
    }, g = function() {
        this._changeRegion(this.$("input[name='region']:checked").val())
    }, f = function(j) {
        j.preventDefault();
        this.region.reset()
    }, c = function() {
        if (!this.isShowing) {
            return 
        }
        this._updateSize();
        this._renderRegions();
        this._updateSelected()
    }
}(DDG);
!function(b) {
    var e = {
        audio: {
            require: DDG.audio.requires
        },
        maps: {
            require: function() {
                return window.L || c("maps")
            },
            load: function() {
                nrc("/js/mapbox/mapbox-1.6.2.css", 1);
                nrj("/js/mapbox/mapbox-1.6.2.js", 1)
            }
        },
        settings: {
            require: function() {
                return DDG.Views.Settings.Main || c("settings")
            },
            load: function() {
                nrj(settings_js_version, 1)
            }
        },
        "moment.js": {
            require: function() {
                return window.moment || c("moment.js")
            },
            load: function() {
                nrj("/js/moment.2.9.0.min.js", 1)
            }
        },
        "masonry.js": {
            require: function() {
                return window.Masonry || c("masonry.js")
            },
            load: function() {
                nrj("/js/masonry.pkgd.min.js", 1)
            }
        },
        mathquill: {
            require: function() {
                return $.fn.mathquill || c("mathquill")
            },
            load: function() {
                nrj("/js/mathquill-0.9.4/mathquill.min.js", 1);
                nrc("/js/mathquill-0.9.4/mathquill.css", 1)
            }
        },
        sports: {
            require: function() {
                return window.ddg_spice_sports_games || c("sports")
            },
            load: function() {
                nrj(DDG.get_asset_path("sports", "sports.spice.js"), 1)
            }
        }
    }, c = function(g) {
        var f = e[g];
        if (!f || f.required) {
            return false
        }
        f.load();
        f.required = true
    }, a = function(j, h) {
        var k = e[j], f = k && k.require;
        if (typeof f !== "function") {
            if (j.match(/^\//)) {
                $.getScript(j, function(m, n, o) {
                    h()
                });
                return 
            }
            return h()
        }
        var g = f();
        if (g) {
            return h(g)
        }
        setTimeout(b.require.bind(this, j, h), 25)
    };
    b.require = function(j, h) {
        if ($.isArray(j)) {
            var g = [];
            $.each(j, function(n, m) {
                a(m, function(o) {
                    g[n] = o
                })
            });
            var k, f;
            k = setTimeout(function() {
                var m = j.map(function(o, n) {
                    return o + ((g[n]) ? ":loaded" : ":timeout")
                });
                clearInterval(f)
            }, 5000);
            f = setInterval(function() {
                var m = true;
                $.each(j, function(n) {
                    if (m&&!g[n]) {
                        m = false
                    }
                });
                if (m) {
                    clearInterval(k);
                    clearInterval(f);
                    h.apply(null, g)
                }
            }, 25)
        } else {
            a(j, h)
        }
    }
}(DDG);
(function(a) {
    Handlebars.registerHelper("and", function() {
        var c = Array.prototype.slice.call(arguments), b = c.pop();
        for (var e = 0; e < c.length; e++) {
            if (!c[e]) {
                return 
            }
        }
        return b.fn(this)
    });
    Handlebars.registerHelper("commifyNumber", function(b) {
        return DDG.commifyNumber(b)
    });
    Handlebars.registerHelper("concat", function(h, f) {
        if (!h) {
            return ""
        }
        var e = f.hash.sep || "", j = f.hash.conj || "", b = h.length, c = "";
        if (b === 1) {
            return f.fn(h[0])
        }
        if (b === 2) {
            return f.fn(h[0]) + j + f.fn(h[1])
        }
        if (b === 3) {
            return f.fn(h[0]) + e + " " + f.fn(h[1]) + j + f.fn(h[2])
        }
        for (var g = 0; g < b; g++) {
            if (g == b - 1) {
                c += e + j
            } else {
                if (g > 0) {
                    c += e + " "
                }
            }
            c += f.fn(h[g])
        }
        return c
    });
    Handlebars.registerHelper("condense", function(e, h) {
        var c = 0, g = 0;
        var f = h.hash.truncation || "...";
        if (h.hash.maxlen) {
            c = parseInt(h.hash.maxlen, 10)
        }
        if (h.hash.fuzz) {
            g = parseInt(h.hash.fuzz, 10)
        }
        if (!e) {
            return ""
        }
        if (g > c) {
            g = 0
        }
        if (c && e.length > c) {
            var b;
            if (e.length > c && e.lastIndexOf(".", c) + 1 !== 0) {
                b = e.substr(0, e.lastIndexOf(".", c)) + f
            } else {
                if (e.length > c - g && e.lastIndexOf(" ", c) !== 0) {
                    b = e.substr(0, e.lastIndexOf(" ", c)) + f
                }
            }
            if (!(b.length < (c + g) && b.length > (c - g))) {
                return e.substring(0, c) + f
            }
            return b
        }
        return e
    });
    Handlebars.registerHelper("domain", function(b) {
        var c = new RegExp("^.*?//([^/?:#]+)");
        if (c.test(b)) {
            return RegExp.$1.replace("www.", "")
        }
    });
    Handlebars.registerHelper("durationFormat", function(c, b) {
        return DDG.formatDuration(c)
    });
    Handlebars.registerHelper("ellipsis", function(k, c, m) {
        if (!k) {
            return ""
        }
        if (DDG.isNumber(k)) {
            k = k + ""
        }
        if (m && m.hash.parseFirst) {
            k = DDG.parse_link(k, "rest")
        }
        if (!$.isNumeric(c) && (m && m.hash.fallback)) {
            c = m.hash.fallback
        }
        var n = [], g = 0, h = k.split(" ");
        for (var e = 0; e < h.length; e++) {
            g += h[e].length + (e < h.length - 1 ? 1 : 0);
            if (g <= c) {
                n.push(h[e])
            }
        }
        if (n.length === 0) {
            return k
        }
        var b = h.length > n.length;
        n = n.join(" ");
        var f = n.split("<b>").length - 1;
        var j = n.split("</b>").length - 1;
        n += f > j ? "</b>" : "";
        if (b&&!(n[n.length - 1].match(/\.$/))) {
            return n + "..."
        }
        return n
    });
    Handlebars.registerHelper("favicon", function(g, o) {
        var k = g || this.source_url, c = o && o.hash || {}, f = c.lazyload, m = c.className || "zci__more-at__icon", n = c.w || "16", j = c.h || "16", b = DDG.get_favicon_url(k), e = '<img width="' + n + '" height="' + j + '" class="' + m;
        if (f) {
            e += ' js-lazyload" data-src="' + b + '" />'
        } else {
            e += '" src="' + b + '" />'
        }
        return e
    });
    Handlebars.registerHelper("firstLetter", function(b) {
        return b.charAt(0).toLowerCase()
    });
    Handlebars.registerHelper("formatSubtitle", function(b) {
        if (!b) {
            return "&nbsp;"
        }
        b = $.isArray(b) ? b : [b];
        return DDG.exec_template("subtitle", {
            components: b
        })
    });
    Handlebars.registerHelper("formatTitle", function(f, b) {
        var c = b.hash;
        if (c.parseFirst) {
            f = DDG.parse_link(f, "text")
        }
        var e = DDG.parseAbstract(f);
        return DDG.exec_template("title", {
            tagName: c.el || "span",
            className: c.className || "title",
            classNameSec: c.classNameSec,
            subTitle: !c.noSub && e.subTitle,
            optSub: c.optSub,
            title: Handlebars.helpers.ellipsis(e.main, c.ellipsis),
            href: (c.href && this[c.href]) || c.href,
            hrefTitle: e.main&&!e.main.match(/<b>/) ? e.main: null
        })
    });
    Handlebars.registerHelper("imageProxy", function(b) {
        return DDG.getImageProxyURL(b)
    });
    Handlebars.registerHelper("include", function(h, c) {
        var f = c && c.hash || {}, g = f.wrap, e = $.extend(this, f), b = "";
        b = DDG.exec_template(h, e);
        if (b && g) {
            return Spice.exec_template(g, {
                content: b
            })
        }
        return b
    });
    Handlebars.registerHelper("keys", function(f, e) {
        var c = "";
        for (var b in f) {
            c += e.fn($.extend({}, this, {
                key: b,
                value: f[b]
            }))
        }
        return c
    });
    Handlebars.registerHelper("l", function() {
        return l.apply(window, arguments)
    });
    Handlebars.registerHelper("lp", function() {
        return lp.apply(window, arguments)
    });
    Handlebars.registerHelper("loop", function(c, g) {
        var b, f;
        c = Math.min(c, 100);
        if (g.data) {
            f = Handlebars.createFrame(g.data)
        }
        b = "";
        for (var e = 0; e < c; e++) {
            if (f) {
                f.index = e;
                f.max = c
            }
            b += g.fn(this, {
                data: f
            })
        }
        return b
    });
    Handlebars.registerHelper("lyricsAbstract", function(b) {
        return b.split(/<(?:<b>)?break(?:<\/b>)?>/).join("<br />")
    });
    Handlebars.registerHelper("lyricsTitle", function(g, c) {
        var h = /^(.*?):\slyrics:\s(?:(.*?):\s(.*?)$|(.*?)$)/, b = h.exec(g), f = b[1], e = b[4] || b[3] + " (" + b[2] + ")";
        return DDG.exec_template("title", {
            tagName: "h1",
            className: "c-info__title",
            title: f,
            subTitle: e,
            href: c
        })
    });
    Handlebars.registerHelper("makeRelative", function(b) {
        if (/^https?:\/\/(?:[^\.]+\.|)duckduckgo.com\/?(.*)$/.test(b)) {
            return RegExp.$1
        } else {
            return b
        }
    });
    Handlebars.registerHelper("momentDate", function(g, c) {
        if (!moment) {
            return ""
        }
        var e = c && c.hash || {}, b = moment.utc(g, "YYYY-MM-DD HH:mm:ss"), f = e.format || "ddd MMM D";
        return b.local().format(f)
    });
    Handlebars.registerHelper("momentTime", function(c) {
        if (!moment) {
            return ""
        }
        var b = moment.utc(c, "YYYY-MM-DD HH:mm:ss");
        return b.local().format("LT")
    });
    Handlebars.registerHelper("moreAt", function(g, e, c) {
        var f = c && c.hash || {};
        g = g || {};
        if (typeof g === "string") {
            if (!e) {
                return 
            }
            g = {
                sourceUrl: g,
                sourceName: e,
                sourceIcon: true
            }
        } else {
            if (g.repo === "fathead") {
                if (!e) {
                    return 
                }
                g.sourceUrl = e;
                g.sourceName = g.src_name;
                g.sourceIcon = true
            } else {
                if (g.repo === "longtail") {
                    if (!e) {
                        return 
                    }
                    if (e === "none") {
                        return 
                    }
                    g.sourceName = g.name;
                    g.sourceUrl = e;
                    g.sourceIcon = true
                } else {
                    if (!g.sourceIconUrl && g.sourceUrl&&!g.sourceLogo && g.sourceIcon !== false) {
                        g.sourceIcon = true
                    }
                }
            }
        }
        if (!g.sourceUrl) {
            return 
        }
        g.className = "zci__more-at";
        g.iconClassName = "zci__more-at__icon";
        var b = g.moreAtText = (DDG.templates.more_at_text(g) || "").trim();
        if (f.noIcon) {
            g.sourceIcon = false
        }
        if (f.className) {
            g.className = f.className
        }
        if (f.iconClassName) {
            g.iconClassName = f.iconClassName
        }
        if (f.iconUrl) {
            g.sourceIconUrl = f.iconUrl;
            g.sourceIcon = false
        }
        if (f.iconPlaceholder) {
            g.sourceIconUrl = "/assets/icon_favicon_placeholder.v104.png";
            g.sourceIcon = false
        }
        if (!g.hideMoreAtText&&!f.hideMoreAtText&&!f.dynamicMoreAtText&&!(is_mobile && f.sourceOnlyMobile)) {
            g.moreAtText = l("More at %s ", b)
        }
        if (f.dynamicMoreAtText) {
            g.moreAtText = (g.moreAtText.length < f.dynamicMoreAtText) ? l("More at %s ", b) : g.moreAtText
        }
        return DDG.templates.more_at(g)
    });
    Handlebars.registerHelper("numFormat", function(e, c) {
        if (!e) {
            return ""
        }
        var b = ",", f = e.toString();
        if (c && c.hash && c.hash.delimiter) {
            b = c.hash.delimiter
        }
        return f.replace(/\b(\d+)((\.\d+)*)\b/g, function(h, g, j) {
            return (g.charAt(0) > 0&&!(j || ".").lastIndexOf(".") ? g.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : g) + j
        })
    });
    Handlebars.registerHelper("ordinal", function(b) {
        return DDG.getOrdinal(b)
    });
    Handlebars.registerHelper("plural", function(b, c) {
        var e = DDG.pluralize(b, c.hash.singular, c.hash.plural);
        if (!e) {
            return 
        }
        if (c.hash.delimiter) {
            b = Handlebars.helpers.numFormat(b, c)
        }
        return b + " " + e
    });
    Handlebars.registerHelper("priceSymbols", function(c, f) {
        var e = "", b = 0;
        for (b = 0; b < f; b++) {
            if (b < c) {
                e += "<b>$</b>"
            } else {
                e += "$"
            }
        }
        return e
    });
    Handlebars.registerHelper("renderStars", function(b) {
        if (typeof b === "string") {
            b = {
                rating: b
            }
        }
        return DDG.templates.stars(b)
    });
    Handlebars.registerHelper("retinaImage", function(c) {
        var b = c.split(".");
        b[b.length - 2] += DDG.device.is3x ? "@3x" : DDG.device.is2x ? "@2x" : "";
        return b.join(".")
    });
    Handlebars.registerHelper("reviewCount", function(h, e, k, b) {
        if (!h || h === "") {
            h = 0
        }
        var g, j = '<span class="review-count">', f = "</span>", c = h;
        if (b && b === true) {
            c = DDG.abbrevNumber(h)
        } else {
            c = DDG.commifyNumber(h)
        }
        if (k === true) {
            if (!h) {
                return ""
            }
            g = j + c + f
        } else {
            g = ln("%2$s %1$s %3$s review", "%2$s %1$s %3$s reviews", c, j, f)
        }
        if (e) {
            g = '<a href="' + e + '">' + g + "</a>"
        }
        return g
    });
    Handlebars.registerHelper("starRating", function(c) {
        c = $.isNumeric(c) ? c : 0;
        var b = c.toString();
        if (b.match(/(\d)\.(\d)/)) {
            var e = parseInt(RegExp.$1, 10);
            var f = parseInt(RegExp.$2, 10) > 4 ? 5: 0;
            if (e > 5) {
                e = 5
            }
            c = e;
            if (f && e < 5) {
                c += "-" + f
            }
        } else {
            c = Math.floor(c)
        }
        return Handlebars.helpers.renderStars({
            rating: c
        })
    });
    Handlebars.registerHelper("starsAndReviews", function(c, e, b, f) {
        return Handlebars.helpers.starRating(c) + Handlebars.helpers.reviewCount(e, b, f, true)
    });
    Handlebars.registerHelper("stripHTML", function(c, b) {
        return b.fn(DDG.strip_html(c))
    });
    Handlebars.registerHelper("table-each", function(f, c) {
        if (!f) {
            return ""
        }
        var b = "";
        if (f.record_keys) {
            var h = f.record_keys;
            for (var e in h) {
                if (f.record_data[h[e]]) {
                    b += c.fn({
                        key: h[e],
                        value: f.record_data[h[e]]
                    })
                }
            }
        } else {
            for (var g in f.record_data) {
                b += c.fn({
                    key: g,
                    value: f.record_data[g]
                })
            }
        }
        return b
    });
    Handlebars.registerHelper("toHTTP", function(b) {
        return DDG.toHTTP(b)
    });
    Handlebars.registerHelper("toHTTPS", function(b) {
        return DDG.toHTTPS(b)
    });
    Handlebars.registerHelper("trim", function(b) {
        if (b) {
            return b.trim()
        }
    });
    Handlebars.registerHelper("stripNonAlpha", function(b) {
        if (b) {
            return DDG.strip_non_alpha(b.toLowerCase())
        }
    })
})(this);
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["add_to_browser_badge"] = Handlebars.template(function(f, p, e, n, m) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    m = m || {};
    var j = "", b, g, o = e.helperMissing, h = "function", k = this.escapeExpression, q = this;
    function c(v, u) {
        var s, t, r;
        s = (t = e.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Set DuckDuckGo as your %sdefault search engine", "", r) : o.call(v, "l", "Set DuckDuckGo as your %sdefault search engine", "", r));
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }
    function a(v, u) {
        var s, t, r;
        s = (t = e.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Set DuckDuckGo as your %sdefault search engine", "<br/>", r) : o.call(v, "l", "Set DuckDuckGo as your %sdefault search engine", "<br/>", r));
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }
    j += '<div class="badge-link"><i class="badge-link__icon browser--';
    if (g = e.browserId) {
        b = g.call(p, {
            hash: {},
            data: m
        })
    } else {
        g = (p && p.browserId);
        b = typeof g === h ? g.call(p, {
            hash: {},
            data: m
        }) : g
    }
    j += k(b) + '"></i><span class="badge-link__text">';
    b = e["if"].call(p, (p && p.noBreak), {
        hash: {},
        inverse: q.program(3, a, m),
        fn: q.program(1, c, m),
        data: m
    });
    if (b || b === 0) {
        j += b
    }
    j += '</span><span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div>';
    return j
});
this["DDG"]["templates"]["add_to_browser_badge_android"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<div class="add-to-browser-badge--lite  btn  btn--wire">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Add to Home Screen", m) : j.call(k, "l", "Add to Home Screen", m));
    if (a || a === 0) {
        f += a
    }
    f += "</div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_badge_ios"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<div class="add-to-browser-badge--lite  btn  btn--wire">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Use in Safari", m) : j.call(k, "l", "Use in Safari", m));
    if (a || a === 0) {
        f += a
    }
    f += "</div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_modal"] = Handlebars.template(function(e, s, q, j, u) {
    this.compilerInfo = [4, ">= 1.0.0"];
    q = this.merge(q, e.helpers);
    u = u || {};
    var r = "", f, p = q.helperMissing, b = "function", o = this, a = this.escapeExpression;
    function n(B, A) {
        var v = "", y, z, x;
        v += '<div class="js-add-to-browser-search"><h1 class="add-to-browser__title">';
        y = (z = q.l || (B && B.l), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "Set as Default Search Engine", x) : p.call(B, "l", "Set as Default Search Engine", x));
        if (y || y === 0) {
            v += y
        }
        v += "</h1>";
        if (z = q.useForSearch) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.useForSearch);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        if (y || y === 0) {
            v += y
        }
        v += "</div>";
        return v
    }
    function m(B, A) {
        var v = "", y, z, x;
        v += '<div class="';
        y = q["if"].call(B, (B && B.hasToggle), {
            hash: {},
            inverse: o.noop,
            fn: o.program(4, k, A),
            data: A
        });
        if (y || y === 0) {
            v += y
        }
        v += ' js-add-to-browser-homepage"><h1 class="add-to-browser__title">';
        y = (z = q.l || (B && B.l), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "Set as Homepage", x) : p.call(B, "l", "Set as Homepage", x));
        if (y || y === 0) {
            v += y
        }
        v += "</h1>";
        if (z = q.setAsHomepage) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.setAsHomepage);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        if (y || y === 0) {
            v += y
        }
        v += "</div>";
        return v
    }
    function k(x, v) {
        return "is-hidden"
    }
    function h(z, y) {
        var v = "", x;
        v += '<div class="add-to-browser__footer">';
        x = q["if"].call(z, (z && z.hasToggle), {
            hash: {},
            inverse: o.noop,
            fn: o.program(7, g, y),
            data: y
        });
        if (x || x === 0) {
            v += x
        }
        x = q["if"].call(z, (z && z.moreURL), {
            hash: {},
            inverse: o.noop,
            fn: o.program(9, c, y),
            data: y
        });
        if (x || x === 0) {
            v += x
        }
        v += "</div>";
        return v
    }
    function g(B, A) {
        var v = "", y, z, x;
        v += '<a class="add-to-browser__toggle-search is-hidden js-add-to-browser-search-link" href="#">';
        y = (z = q.l || (B && B.l), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "Set as Default Search Engine", x) : p.call(B, "l", "Set as Default Search Engine", x));
        if (y || y === 0) {
            v += y
        }
        v += '</a><a class="add-to-browser__toggle-homepage js-add-to-browser-homepage-link" href="#">';
        y = (z = q.l || (B && B.l), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "Set as Homepage", x) : p.call(B, "l", "Set as Homepage", x));
        if (y || y === 0) {
            v += y
        }
        v += "</a>";
        return v
    }
    function c(B, A) {
        var v = "", y, z, x;
        y = q["if"].call(B, (B && B.hasToggle), {
            hash: {},
            inverse: o.noop,
            fn: o.program(10, t, A),
            data: A
        });
        if (y || y === 0) {
            v += y
        }
        v += '<a class="add-to-browser__more" href="';
        if (z = q.moreURL) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.moreURL);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        v += a(y) + '" target="_blank">';
        y = (z = q.l || (B && B.l), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "Extensions & More", x) : p.call(B, "l", "Extensions & More", x));
        if (y || y === 0) {
            v += y
        }
        v += "</a>";
        return v
    }
    function t(x, v) {
        return '<span class="sep"></span>'
    }
    r += '<div class="popover  popover--dk"><a href="#" class="popover__esc  js-popover-close"></a><div class="popover__wrap"><div class="popover__box  popover__box--add-to-browser">';
    f = q["if"].call(s, (s && s.useForSearch), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, n, u),
        data: u
    });
    if (f || f === 0) {
        r += f
    }
    f = q["if"].call(s, (s && s.setAsHomepage), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, m, u),
        data: u
    });
    if (f || f === 0) {
        r += f
    }
    f = q["if"].call(s, (s && s.hasFooter), {
        hash: {},
        inverse: o.noop,
        fn: o.program(6, h, u),
        data: u
    });
    if (f || f === 0) {
        r += f
    }
    r += '<a href="#" class="popover__box__close  js-popover-close">X</a></div></div></div>';
    return r
});
this["DDG"]["templates"]["add_to_browser_modal_blurred"] = Handlebars.template(function(c, k, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var g = "", a, e, f = "function";
    g += '<div class="add-to-browser--blurred">';
    if (e = b.content) {
        a = e.call(k, {
            hash: {},
            data: h
        })
    } else {
        e = (k && k.content);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: h
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["autocomplete"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<div class="search__autocomplete" style="position: absolute; display: none;"><div class="acp-wrap"></div><div class="acp-footer is-hidden"><span class="acp-footer__instructions">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Select a !bang for a direct site search", m) : j.call(k, "l", "Select a !bang for a direct site search", m));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="acp-footer__link"><a class="no-visited" href=\'/bang\'>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "View all !bangs", m) : j.call(k, "l", "View all !bangs", m));
    if (a || a === 0) {
        f += a
    }
    f += "</a></span></div></div>";
    return f
});
this["DDG"]["templates"]["autocomplete_bang_item"] = Handlebars.template(function(f, p, e, n, m) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    m = m || {};
    var j = "", b, g, o = e.helperMissing, k = this.escapeExpression, h = "function", r = this;
    function c(t, s) {
        return "acp--long-phrase"
    }
    function a(x, v) {
        var s = "", u, t;
        s += '<div class="acp--bang__img-wrap"><img src="' + k((u = e.imageProxy || (x && x.imageProxy), t = {
            hash: {},
            data: v
        }, u ? u.call(x, (x && x.image), t) : o.call(x, "imageProxy", (x && x.image), t))) + '" class="acp--bang__img" alt="" /></div>';
        return s
    }
    function q(x, v) {
        var s = "", t, u;
        s += '<span class="acp--bang__snippet">';
        if (u = e.snippet) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.snippet);
            t = typeof u === h ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        s += k(t) + "</span>";
        return s
    }
    j += '<div class="acp acp--bang ';
    b = e["if"].call(p, (p && p.longPhrase), {
        hash: {},
        inverse: r.noop,
        fn: r.program(1, c, m),
        data: m
    });
    if (b || b === 0) {
        j += b
    }
    j += '" data-index="';
    if (g = e.i) {
        b = g.call(p, {
            hash: {},
            data: m
        })
    } else {
        g = (p && p.i);
        b = typeof g === h ? g.call(p, {
            hash: {},
            data: m
        }) : g
    }
    j += k(b) + '">';
    b = e["if"].call(p, (p && p.image), {
        hash: {},
        inverse: r.noop,
        fn: r.program(3, a, m),
        data: m
    });
    if (b || b === 0) {
        j += b
    }
    j += '<div class="acp--bang__body"><span class="acp--bang__phrase">';
    if (g = e.phrase) {
        b = g.call(p, {
            hash: {},
            data: m
        })
    } else {
        g = (p && p.phrase);
        b = typeof g === h ? g.call(p, {
            hash: {},
            data: m
        }) : g
    }
    j += k(b) + "</span>";
    b = e["if"].call(p, (p && p.snippet), {
        hash: {},
        inverse: r.noop,
        fn: r.program(5, q, m),
        data: m
    });
    if (b || b === 0) {
        j += b
    }
    j += "</div></div>";
    return j
});
this["DDG"]["templates"]["autocomplete_bang_layout"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="acp-wrap__column acp-wrap__column--left"></div><div class="acp-wrap__column acp-wrap__column--right"></div>'
});
this["DDG"]["templates"]["autocomplete_text_item"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += '<div class="acp" data-index="';
    if (e = b.i) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.i);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + '">';
    if (e = b.phrase) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.phrase);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["homepage_tagline"] = Handlebars.template(function(e, k, c, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    h = h || {};
    var g = "", a, f = "function", m = this;
    function b(q, p) {
        var n = "", o;
        n += '<div class="tag-home__item  js-tag-item">';
        o = (typeof q === f ? q.apply(q) : q);
        if (o || o === 0) {
            n += o
        }
        n += "</div>";
        return n
    }
    g += '<div class="tag-home__wrapper">';
    a = c.each.call(k, (k && k.taglines), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, h),
        data: h
    });
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["notification"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="notification"><div class="notification__wrap"><div class="notification__text  js-notification-text"></div></div></div>'
});
this["DDG"]["templates"]["onoffswitch"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += '<div class="frm__switch  frm-input"><input id="';
    if (e = b.id) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.id);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + '" class="frm__switch__inp  ';
    if (e = b.className) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.className);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + '" type="checkbox" /><label class="frm__switch__label  btn" for="';
    if (e = b.id) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.id);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + '"><span class="frm__switch-on">On</span><span class="frm__switch-off">Off</span></label></div>';
    return g
});
this["DDG"]["templates"]["region_selector"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<div class="popover  popover--dk  popover--notransition  popover--scroll"><a href="#" class="popover__esc  js-popover-close"></a><div class="popover__wrap"><div class="popover__box  popover__box--region"><div class="popover__box__content"><div class="region__header"><div class="region__header__section  region__header__section--title"><h6>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "For region-centric results", m) : j.call(k, "l", "For region-centric results", m));
    if (a || a === 0) {
        f += a
    }
    f += "</h6><h5>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Please select a region", m) : j.call(k, "l", "Please select a region", m));
    if (a || a === 0) {
        f += a
    }
    f += '</h5></div><a href="#"  class="popover__box__close  js-popover-close">X</a></div><form class="region__body  frm  js-region-form"></form></div></div></div></div>';
    return f
});
this["DDG"]["templates"]["region_selector_current"] = Handlebars.template(function(f, p, e, n, m) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    m = m || {};
    var j = "", b, g, r, o = e.helperMissing, q = this, k = this.escapeExpression, h = "function";
    function c(t, s) {
        return "has-region"
    }
    function a(y, x) {
        var s = "", u, v, t;
        s += '<a href="#" class="region__header__clear  js-region-clear">';
        u = (v = e.l || (y && y.l), t = {
            hash: {},
            data: x
        }, v ? v.call(y, "Clear", t) : o.call(y, "l", "Clear", t));
        if (u || u === 0) {
            s += u
        }
        s += "</a>";
        return s
    }
    j += '<div class="region__header__section  region__header__section--current"><div class="region-flag__wrap  region-flag__wrap--large ';
    b = e["if"].call(p, (p && p.hasRegion), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, m),
        data: m
    });
    if (b || b === 0) {
        j += b
    }
    j += '"><img class="region-flag__img  region-flag__img--large" src="' + k((g = e.imageProxy || (p && p.imageProxy), r = {
        hash: {},
        data: m
    }, g ? g.call(p, (p && p.iconURL), r) : o.call(p, "imageProxy", (p && p.iconURL), r))) + '" alt="';
    if (g = e.name) {
        b = g.call(p, {
            hash: {},
            data: m
        })
    } else {
        g = (p && p.name);
        b = typeof g === h ? g.call(p, {
            hash: {},
            data: m
        }) : g
    }
    j += k(b) + '" /></div><h6>';
    b = (g = e.l || (p && p.l), r = {
        hash: {},
        data: m
    }, g ? g.call(p, "Current Region:", r) : o.call(p, "l", "Current Region:", r));
    if (b || b === 0) {
        j += b
    }
    j += '</h6><h5 class="region__header__current-name">';
    if (g = e.name) {
        b = g.call(p, {
            hash: {},
            data: m
        })
    } else {
        g = (p && p.name);
        b = typeof g === h ? g.call(p, {
            hash: {},
            data: m
        }) : g
    }
    j += k(b);
    b = e["if"].call(p, (p && p.hasRegion), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, m),
        data: m
    });
    if (b || b === 0) {
        j += b
    }
    j += '</h5></div><span class="clearfix"></span>';
    return j
});
this["DDG"]["templates"]["region_selector_regions"] = Handlebars.template(function(f, n, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var h = "", a, g = "function", j = this.escapeExpression, o = this;
    function c(s, r) {
        var p = "", q;
        p += '<div class="region__col">';
        q = e.each.call(s, s, {
            hash: {},
            inverse: o.noop,
            fn: o.program(2, b, r),
            data: r
        });
        if (q || q === 0) {
            p += q
        }
        p += "</div>";
        return p
    }
    function b(t, s) {
        var p = "", q, r;
        p += '<label class="region__item" id="region--';
        if (r = e.id) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.id);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + '"><span class="region-indicator__spr  flag-sm  flag-sm-';
        if (r = e.countryCode) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.countryCode);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + '"></span><input type="radio"  name="region"  id="';
        if (r = e.id) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.id);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + '"  value="';
        if (r = e.id) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.id);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + '" />';
        if (r = e.name) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.name);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + "</label>";
        return p
    }
    a = e.each.call(n, (n && n.columns), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, k),
        data: k
    });
    if (a || a === 0) {
        h += a
    }
    h += '<span class="clearfix"></span>';
    return h
});
this["DDG"]["templates"]["region_switch"] = Handlebars.template(function(f, t, r, k, y) {
    this.compilerInfo = [4, ">= 1.0.0"];
    r = this.merge(r, f.helpers);
    y = y || {};
    var s = "", h, a, e, q = r.helperMissing, p = this, c = "function", b = this.escapeExpression;
    function o(A, z) {
        return "is-on"
    }
    function n(C, B) {
        var z = "", A;
        z += '<a class="switch  js-switch" href="#" title="';
        A = r["if"].call(C, (C && C.isOn), {
            hash: {},
            inverse: p.program(6, j, B),
            fn: p.program(4, m, B),
            data: B
        });
        if (A || A === 0) {
            z += A
        }
        z += '"><span class="switch__on t-xxs ddgsi">✓</span><span class="switch__knob"></span></a>';
        return z
    }
    function m(D, C) {
        var A, B, z;
        A = (B = r.l || (D && D.l), z = {
            hash: {},
            data: C
        }, B ? B.call(D, "Turn Off Region", z) : q.call(D, "l", "Turn Off Region", z));
        if (A || A === 0) {
            return A
        } else {
            return ""
        }
    }
    function j(D, C) {
        var A, B, z;
        A = (B = r.l || (D && D.l), z = {
            hash: {},
            data: C
        }, B ? B.call(D, "Switch to %s", ((A = (D && D.region)), A == null || A === false ? A : A.name), z) : q.call(D, "l", "Switch to %s", ((A = (D && D.region)), A == null || A === false ? A : A.name), z));
        if (A || A === 0) {
            return A
        } else {
            return ""
        }
    }
    function g(A, z) {
        return "has-region"
    }
    function x(B, A) {
        var z;
        return b(((z = ((z = (B && B.region)), z == null || z === false ? z : z.iconURL)), typeof z === c ? z.apply(B) : z))
    }
    function v(C, B) {
        var z, A;
        if (A = r.noRegionIconURL) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.noRegionIconURL);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        return b(z)
    }
    function u(E, D) {
        var z = "", B, C, A;
        z += '<a class="region-switch__clear ddgsi js-region-switch-clear" href="#" title="';
        B = (C = r.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "Clear Region", A) : q.call(E, "l", "Clear Region", A));
        if (B || B === 0) {
            z += B
        }
        z += '">X</a>';
        return z
    }
    s += '<div class="region-switch ';
    h = r["if"].call(t, (t && t.isOn), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, o, y),
        data: y
    });
    if (h || h === 0) {
        s += h
    }
    s += ' hide--mob"><span class="region-switch__label  t-s  js-region-switch-label hide--screen-m">';
    h = (a = r.l || (t && t.l), e = {
        hash: {},
        data: y
    }, a ? a.call(t, "Region", e) : q.call(t, "l", "Region", e));
    if (h || h === 0) {
        s += h
    }
    s += "</span>";
    h = r["if"].call(t, (t && t.region), {
        hash: {},
        inverse: p.noop,
        fn: p.program(3, n, y),
        data: y
    });
    if (h || h === 0) {
        s += h
    }
    s += '<a class="region-flag__wrap region-flag__wrap--small  ';
    h = r["if"].call(t, (t && t.region), {
        hash: {},
        inverse: p.noop,
        fn: p.program(8, g, y),
        data: y
    });
    if (h || h === 0) {
        s += h
    }
    s += ' js-region-switch-flag" href="#" title="';
    h = (a = r.l || (t && t.l), e = {
        hash: {},
        data: y
    }, a ? a.call(t, "Change Region", e) : q.call(t, "l", "Change Region", e));
    if (h || h === 0) {
        s += h
    }
    s += '"><img class="region-flag__img" src="';
    h = r["if"].call(t, (t && t.region), {
        hash: {},
        inverse: p.program(12, v, y),
        fn: p.program(10, x, y),
        data: y
    });
    if (h || h === 0) {
        s += h
    }
    s += '" /></a>';
    h = r["if"].call(t, (t && t.region), {
        hash: {},
        inverse: p.noop,
        fn: p.program(14, u, y),
        data: y
    });
    if (h || h === 0) {
        s += h
    }
    s += "</div>";
    return s
});
this["DDG"]["templates"]["set_as_homepage_chrome"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).", "<b>", "(&#x2261;)</b>", m) : j.call(k, "l", "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).", "<b>", "(&#x2261;)</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Select %sSettings%s from the drop-down menu.", "<b>", "</b>", m) : j.call(k, "l", "Select %sSettings%s from the drop-down menu.", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.", "<b>", "</b>", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.", "<b>", "</b>", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click %sUse current pages%s then %sClick OK%s.", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Click %sUse current pages%s then %sClick OK%s.", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_edge"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the %s...%s icon at the top right:", "<b>", "</b>", n) : k.call(m, "l", "Click the %s...%s icon at the top right:", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:47px;" src="' + g((e = b.imageProxy || (m && m.imageProxy), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/edge.jpg", n) : k.call(m, "imageProxy", "/assets/add-to-browser/edge.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sSettings%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sSettings%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Under %sOpen with%s select %sA specific page or pages%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Under %sOpen with%s select %sA specific page or pages%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %s+%s!", "<b>", "</b>", n) : k.call(m, "l", "Click %s+%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_firefox"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Drag %sThis Button%s on top of the home icon:", '<a class="btn btn--primary btn--inline" style="cursor:move;" href="https://duckduckgo.com">', "</a>", n) : k.call(m, "l", "Drag %sThis Button%s on top of the home icon:", '<a class="btn btn--primary btn--inline" style="cursor:move;" href="https://duckduckgo.com">', "</a>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:80px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/firefox_homepage.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/firefox_homepage.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sYes%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sYes%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_ie"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the arrow to the right of the %shome icon%s", "<b>", "</b>", n) : k.call(m, "l", "Click the arrow to the right of the %shome icon%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:121px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/ie_homepage.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/ie_homepage.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sAdd or change home page...%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sAdd or change home page...%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)", "<b>", "</b>", n) : k.call(m, "l", "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sYes%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sYes%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_maxthon"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s", "<b>", "</b>", "<b>", "<b>&#x2261;</b>", "</b>", n) : k.call(m, "l", "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s", "<b>", "</b>", "<b>", "<b>&#x2261;</b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/maxthon_homepage.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/maxthon_homepage.jpg", n))) + '" />';
    return f
});
this["DDG"]["templates"]["set_as_homepage_opera"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Under On startup select %sOpen a specific page or set of pages%s", "<b>", "</b>", m) : j.call(k, "l", "Under On startup select %sOpen a specific page or set of pages%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Enter %shttps://duckduckgo.com%s", "<b>", "</b>", m) : j.call(k, "l", "Enter %shttps://duckduckgo.com%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_safari"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Select %sPreferences%s.", "<b>", "</b>", m) : j.call(k, "l", "Select %sPreferences%s.", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click the %sGeneral%s tab.", "<b>", "</b>", m) : j.call(k, "l", "Click the %sGeneral%s tab.", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Where it says Homepage click %sSet to Current Page%s.", "<b>", "</b>", m) : j.call(k, "l", "Where it says Homepage click %sSet to Current Page%s.", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "If you want, select Home Page next to New windows and New tabs (open with).", m) : j.call(k, "l", "If you want, select Home Page next to New windows and New tabs (open with).", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Close window.", m) : j.call(k, "l", "Close window.", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_vivaldi"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "In the menu at the top select %sTools%s > %sSettings%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "In the menu at the top select %sTools%s > %sSettings%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com", "<b>", "</b>", n) : k.call(m, "l", "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/vivaldi_homepage.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/vivaldi_homepage.jpg", n))) + '" />';
    return f
});
this["DDG"]["templates"]["side_menu"] = Handlebars.template(function(j, y, v, p, E) {
    this.compilerInfo = [4, ">= 1.0.0"];
    v = this.merge(v, j.helpers);
    E = E || {};
    var x = "", k, a, e, c = "function", b = this.escapeExpression, u = v.helperMissing, t = this;
    function s(K, J) {
        var F = "", H, I, G;
        F += '<ul class="nav-menu--theme"><li class="nav-menu__heading"><span>';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Themes", G) : u.call(K, "l", "Themes", G));
        if (H || H === 0) {
            F += H
        }
        F += '</span></li><li class="nav-menu__item"><ul class="nav-menu__themes">';
        H = v.each.call(K, (K && K.themes), {
            hash: {},
            inverse: t.noop,
            fn: t.program(2, r, J),
            data: J
        });
        if (H || H === 0) {
            F += H
        }
        F += '</ul></li><li class="nav-menu__item clear"><a href="/settings#theme">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "More Themes", G) : u.call(K, "l", "More Themes", G));
        if (H || H === 0) {
            F += H
        }
        F += '</a></li><li class="nav-menu__item"><a href="/settings" tabindex="-1">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Advanced Settings", G) : u.call(K, "l", "Advanced Settings", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li></ul>";
        return F
    }
    function r(J, I) {
        var F = "", G, H;
        F += '<li class="nav-menu__theme  js-side-menu-theme"><span class="nav-menu__theme-color"><span class="nav-menu__theme-color-top" style="background-color:#';
        if (H = v.color1) {
            G = H.call(J, {
                hash: {},
                data: I
            })
        } else {
            H = (J && J.color1);
            G = typeof H === c ? H.call(J, {
                hash: {},
                data: I
            }) : H
        }
        F += b(G) + ';"></span><span class="nav-menu__theme-color-bot" style="background-color:#';
        if (H = v.color2) {
            G = H.call(J, {
                hash: {},
                data: I
            })
        } else {
            H = (J && J.color2);
            G = typeof H === c ? H.call(J, {
                hash: {},
                data: I
            }) : H
        }
        F += b(G) + ';"></span></span></li>';
        return F
    }
    function q(H, G) {
        var F;
        F = v["if"].call(H, (H && H.hideSettings), {
            hash: {},
            inverse: t.program(5, o, G),
            fn: t.noop,
            data: G
        });
        if (F || F === 0) {
            return F
        } else {
            return ""
        }
    }
    function o(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="/settings">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Settings", G) : u.call(K, "l", "Settings", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function n(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="/about">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "About", G) : u.call(K, "l", "About", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function h(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="/tour">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Tour", G) : u.call(K, "l", "Tour", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function D(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="/privacy">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Privacy", G) : u.call(K, "l", "Privacy", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function C(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="https://duck.co/help/company/press">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Press", G) : u.call(K, "l", "Press", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function B(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="/bang">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Bangs", G) : u.call(K, "l", "Bangs", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function A(K, J) {
        var F = "", H, I, G;
        F += '<li class="nav-menu__item"><a href="/app">';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "App", G) : u.call(K, "l", "App", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></li>";
        return F
    }
    function z(K, J) {
        var F = "", H, I, G;
        F += '<ul class="nav-menu--add-to  js-side-menu-add-to"><li class="nav-menu__heading"><span>';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Add DuckDuckGo", G) : u.call(K, "l", "Add DuckDuckGo", G));
        if (H || H === 0) {
            F += H
        }
        F += "</span></li>";
        H = v.each.call(K, (K && K.addToBrowserLinks), {
            hash: {},
            inverse: t.noop,
            fn: t.program(20, m, J),
            data: J
        });
        if (H || H === 0) {
            F += H
        }
        F += "</ul>";
        return F
    }
    function m(J, I) {
        var F = "", G, H;
        F += '<li class="nav-menu__item"><a href="';
        if (H = v.href) {
            G = H.call(J, {
                hash: {},
                data: I
            })
        } else {
            H = (J && J.href);
            G = typeof H === c ? H.call(J, {
                hash: {},
                data: I
            }) : H
        }
        F += b(G) + '" class="';
        if (H = v.className) {
            G = H.call(J, {
                hash: {},
                data: I
            })
        } else {
            H = (J && J.className);
            G = typeof H === c ? H.call(J, {
                hash: {},
                data: I
            }) : H
        }
        F += b(G) + '">';
        if (H = v.title) {
            G = H.call(J, {
                hash: {},
                data: I
            })
        } else {
            H = (J && J.title);
            G = typeof H === c ? H.call(J, {
                hash: {},
                data: I
            }) : H
        }
        F += b(G) + "</a></li>";
        return F
    }
    function g(K, J) {
        var F = "", H, I, G;
        F += '<ul class="nav-menu--region show--mob"><li class="nav-menu__heading"><span>';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Region Setting", G) : u.call(K, "l", "Region Setting", G));
        if (H || H === 0) {
            F += H
        }
        F += '</span></li><li class="nav-menu__item  js-side-menu-region"><a class="region-sidemenu" href="#" title="';
        H = (I = v.l || (K && K.l), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "Change Region", G) : u.call(K, "l", "Change Region", G));
        if (H || H === 0) {
            F += H
        }
        F += '"><div class="region-flag__wrap  region-flag__wrap--small  ';
        H = v["if"].call(K, ((H = (K && K.region)), H == null || H === false ? H : H.hasRegion), {
            hash: {},
            inverse: t.noop,
            fn: t.program(23, f, J),
            data: J
        });
        if (H || H === 0) {
            F += H
        }
        F += '"><img class="region-flag__img" src="' + b(((H = ((H = (K && K.region)), H == null || H === false ? H : H.iconURL)), typeof H === c ? H.apply(K) : H)) + '" alt="';
        if (I = v.name) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.name);
            H = typeof I === c ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += b(H) + '" /></div>' + b(((H = ((H = (K && K.region)), H == null || H === false ? H : H.name)), typeof H === c ? H.apply(K) : H)) + "</a></li></ul>";
        return F
    }
    function f(G, F) {
        return "has-region"
    }
    x += '<div class="nav-menu--slideout"><ul class="nav-menu__list"><i class="nav-menu__close  js-side-menu-close">X</i>';
    k = v["if"].call(y, (y && y.hideThemes), {
        hash: {},
        inverse: t.program(1, s, E),
        fn: t.noop,
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    x += '<ul class="nav-menu--main"><li class="nav-menu__heading"><span>';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Menu", e) : u.call(y, "l", "Menu", e));
    if (k || k === 0) {
        x += k
    }
    x += "</span></li>";
    k = v["if"].call(y, (y && y.hideThemes), {
        hash: {},
        inverse: t.noop,
        fn: t.program(4, q, E),
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.hideAbout), {
        hash: {},
        inverse: t.program(7, n, E),
        fn: t.noop,
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.hideTour), {
        hash: {},
        inverse: t.program(9, h, E),
        fn: t.noop,
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.hidePrivacy), {
        hash: {},
        inverse: t.program(11, D, E),
        fn: t.noop,
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.showPress), {
        hash: {},
        inverse: t.noop,
        fn: t.program(13, C, E),
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.hideBang), {
        hash: {},
        inverse: t.program(15, B, E),
        fn: t.noop,
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.hideApp), {
        hash: {},
        inverse: t.program(17, A, E),
        fn: t.noop,
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    x += '<li class="nav-menu__item  hide--mob"><a href="https://duck.co/help">';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Help", e) : u.call(y, "l", "Help", e));
    if (k || k === 0) {
        x += k
    }
    x += '</a></li></ul><ul class="nav-menu--community  hide--mob"><li class="nav-menu__heading"><span>';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Get Involved", e) : u.call(y, "l", "Get Involved", e));
    if (k || k === 0) {
        x += k
    }
    x += '</span></li><li class="nav-menu__item"><a href="http://duckduckhack.com">';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Develop", e) : u.call(y, "l", "Develop", e));
    if (k || k === 0) {
        x += k
    }
    x += '</a></li><li class="nav-menu__item"><a href="https://duck.co">';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Community", e) : u.call(y, "l", "Community", e));
    if (k || k === 0) {
        x += k
    }
    x += '</a></li><li class="nav-menu__item"><a href="/spread">';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Spread", e) : u.call(y, "l", "Spread", e));
    if (k || k === 0) {
        x += k
    }
    x += '</a></li><li class="nav-menu__item"><a href="/feedback">';
    k = (a = v.l || (y && y.l), e = {
        hash: {},
        data: E
    }, a ? a.call(y, "Feedback", e) : u.call(y, "l", "Feedback", e));
    if (k || k === 0) {
        x += k
    }
    x += "</a></li></ul>";
    k = v["if"].call(y, (y && y.addToBrowserLinks), {
        hash: {},
        inverse: t.noop,
        fn: t.program(19, z, E),
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    k = v["if"].call(y, (y && y.showRegion), {
        hash: {},
        inverse: t.noop,
        fn: t.program(22, g, E),
        data: E
    });
    if (k || k === 0) {
        x += k
    }
    x += "</ul></div>";
    return x
});
this["DDG"]["templates"]["side_menu_link"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var g = "", a, f = "function", h = this.escapeExpression, n = this;
    function b(r, q) {
        var o = "", p;
        o += '<a class="header--aside__msg  js-side-menu-msg" href="' + h(((p = ((p = (r && r.message)), p == null || p === false ? p : p.href)), typeof p === f ? p.apply(r) : p)) + '">' + h(((p = ((p = (r && r.message)), p == null || p === false ? p : p.text)), typeof p === f ? p.apply(r) : p)) + "</a>";
        return o
    }
    g += '<div class="header--aside">';
    a = c["if"].call(m, (m && m.message), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        g += a
    }
    g += '<a class="header__button--menu  js-side-menu-open" href="#">&#8694;</a></div>';
    return g
});
this["DDG"]["templates"]["spread_badge"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<div class="badge-link  badge-link--spread"><img class="badge-link__icon  js-lazysvg" data-src="/assets/spread/share" /><span class="badge-link__title">';
    a = (e = b.lp || (k && k.lp), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "spread_badge", "Love DuckDuckGo?", m) : j.call(k, "lp", "spread_badge", "Love DuckDuckGo?", m));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="badge-link__text">';
    a = (e = b.lp || (k && k.lp), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "spread_badge", "Get your friends to switch and help us grow!", m) : j.call(k, "lp", "spread_badge", "Get your friends to switch and help us grow!", m));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div>';
    return f
});
this["DDG"]["templates"]["use_for_search_chrome"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn"><span class="js-hide-on-nui">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", n) : k.call(m, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="js-show-on-nui is-hidden">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sOK%s in the popup. %sNOTE%s: If OK button is disabled, it was already added. Click %sCancel%s and proceed to the next step.", "<b>", "</b>", "<br /><br /><b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Click %sOK%s in the popup. %sNOTE%s: If OK button is disabled, it was already added. Click %sCancel%s and proceed to the next step.", "<b>", "</b>", "<br /><br /><b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</span></li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the %s icon in the top toolbar", "<b>&#x2261;</b>", n) : k.call(m, "l", "Click the %s icon in the top toolbar", "<b>&#x2261;</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:42px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/chrome.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/chrome.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sSettings%s", "<b>", "</b>", n) : k.call(m, "l", "Select %sSettings%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Under %sSearch%s section, click %sManage search engines...%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Under %sSearch%s section, click %sManage search engines...%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Find DuckDuckGo in the displayed list and click %sMake Default%s", "<b>", "</b>", n) : k.call(m, "l", "Find DuckDuckGo in the displayed list and click %sMake Default%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_chrome_android"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += "<img style='width:90px;height:90px;display:block;margin:0 auto 40px;box-shadow: 0 0 15px -3px rgba(0,0,0,0.35);' class='circle' src='/assets/android-chrome-menu.svg' />";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Press %sMenu > Add to homescreen > Add%s!", "<b>", "</b>", m) : j.call(k, "l", "Press %sMenu > Add to homescreen > Add%s!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["use_for_search_edge"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the %s...%s icon at the top right:", "<b>", "</b>", n) : k.call(m, "l", "Click the %s...%s icon at the top right:", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:47px;" src="' + g((e = b.imageProxy || (m && m.imageProxy), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/edge.jpg", n) : k.call(m, "imageProxy", "/assets/add-to-browser/edge.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sSettings%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sSettings%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Scroll down and click %sView advanced settings%s", "<b>", "</b>", n) : k.call(m, "l", "Scroll down and click %sView advanced settings%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Under %sSearch in the address bar with%s select %sAdd New%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Under %sSearch in the address bar with%s select %sAdd New%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sDuckDuckGo%s and click %sAdd as default%s!", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s and click %sAdd as default%s!", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_firefox"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the magnifying glass in the search box (at the top of the browser)", n) : k.call(m, "l", "Click the magnifying glass in the search box (at the top of the browser)", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sChange Search Settings%s in the drop down", "<b>", "</b>", n) : k.call(m, "l", "Click %sChange Search Settings%s in the drop down", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sDuckDuckGo%s in the Default Search Engine drop down", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s in the Default Search Engine drop down", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:145px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/firefox.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/firefox.jpg", n))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_firefox_old"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", n) : k.call(m, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Check %sMake this the current search engine%s", "<b>", "</b>", n) : k.call(m, "l", "Check %sMake this the current search engine%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:219px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/firefox_old.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/firefox_old.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sAdd%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sAdd%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_ie"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", n) : k.call(m, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, 'Make sure to check %s"Make this my default search provider"%s', "<b>", "</b>", n) : k.call(m, "l", 'Make sure to check %s"Make this my default search provider"%s', "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:200.5px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/ie.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/ie.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sAdd%s", "<b>", "</b>", n) : k.call(m, "l", "Click %sAdd%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_ios8"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += "<img style='width:64px;height:64px;display:block;margin:0 auto 5px;' src='/assets/ios-settings-icon.png' />";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Open %sSettings > Safari > Search Engine%s and select DuckDuckGo!", "<b>", "</b>", m) : j.call(k, "l", "Open %sSettings > Safari > Search Engine%s and select DuckDuckGo!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["use_for_search_maxthon"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Go to Options.", m) : j.call(k, "l", "Go to Options.", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Go to Search Engine.", m) : j.call(k, "l", "Go to Search Engine.", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click add.", m) : j.call(k, "l", "Click add.", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s", "<ol><li><b>", "</b>", "</li><li><b>", "</b>", "https://duckduckgo.com/?q=%s</li><li><b>", "</b>", "</li></ol>", m) : j.call(k, "l", "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s", "<ol><li><b>", "</b>", "</li><li><b>", "</b>", "https://duckduckgo.com/?q=%s</li><li><b>", "</b>", "</li></ol>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click OK.", m) : j.call(k, "l", "Click OK.", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_opera"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Under Search click the drop down and select %sDuckDuckGo%s", "<b>", "</b>", n) : k.call(m, "l", "Under Search click the drop down and select %sDuckDuckGo%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/opera.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/opera.jpg", n))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_palemoon"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the drop down in the search box", n) : k.call(m, "l", "Click the drop down in the search box", n));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:137px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/palemoon.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/palemoon.jpg", n))) + '" /></li><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Selected %sDuckDuckGo%s", "<b>", "</b>", n) : k.call(m, "l", "Selected %sDuckDuckGo%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_safari"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Open a new tab or window", n) : k.call(m, "l", "Open a new tab or window", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click the magnifying glass in the search bar", n) : k.call(m, "l", "Click the magnifying glass in the search bar", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select DuckDuckGo!", n) : k.call(m, "l", "Select DuckDuckGo!", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/safari.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/safari.jpg", n))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_safari_old"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click %sHere%s to download the DuckDuckGo extension", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz">', "</a>", m) : j.call(k, "l", "Click %sHere%s to download the DuckDuckGo extension", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "After it downloads, locate the extension file and double-click it to install", m) : j.call(k, "l", "After it downloads, locate the extension file and double-click it to install", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_safari_windows"] = Handlebars.template(function(c, k, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, m, j = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz" target="com.duckduckgo.safari-HKE973VLUW">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz" target="com.duckduckgo.safari-HKE973VLUW">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click %sOpen%s to download and open the DuckDuckGo Safari extension", "<b>", "</b>", m) : j.call(k, "l", "Click %sOpen%s to download and open the DuckDuckGo Safari extension", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "After it downloads and opens, click %sInstall%s", "<b>", "</b>", m) : j.call(k, "l", "After it downloads and opens, click %sInstall%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: g
    }, e ? e.call(k, "Click the Duck icon at the top of your browser to search!", m) : j.call(k, "l", "Click the Duck icon at the top of your browser to search!", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_seamonkey"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "l", "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "In the side menu select %sInternet Search%s", "<b>", "</b>", n) : k.call(m, "l", "In the side menu select %sInternet Search%s", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "In the drop down select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "In the drop down select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/seamonkey.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/seamonkey.jpg", n))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_vivaldi"] = Handlebars.template(function(c, m, b, j, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, n, k = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Click on the magnifying glass in the search box at the top right", n) : k.call(m, "l", "Click on the magnifying glass in the search box at the top right", n));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:145px;" src="' + g((e = b.retinaImage || (m && m.retinaImage), n = {
        hash: {},
        data: h
    }, e ? e.call(m, "/assets/add-to-browser/vivaldi.jpg", n) : k.call(m, "retinaImage", "/assets/add-to-browser/vivaldi.jpg", n))) + '" />';
    return f
});
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["bang_layout"] = Handlebars.template(function(b, k, a, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    a = this.merge(a, b.helpers);
    g = g || {};
    var e = "", c, m, j = a.helperMissing, f = this.escapeExpression;
    e += '<div class="bang__list-header js-bang-header"><h2 class="bang__list-header__title">' + f((c = a.commifyNumber || (k && k.commifyNumber), m = {
        hash: {},
        data: g
    }, c ? c.call(k, (k && k.numBangs), m) : j.call(k, "commifyNumber", (k && k.numBangs), m))) + ' bangs and counting</h2><p class="bang__list-header__snippet">Click on a bang to try it out. See one missing? <a href="/newbang">Make a suggestion!</a></p></div><div class="bang__nav js-bang-nav"></div><div class="bang__results js-bang-results"></div>';
    return e
});
this["DDG"]["templates"]["bang_nav"] = Handlebars.template(function(f, n, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var h = "", b, g = "function", j = this.escapeExpression, o = this;
    function c(r, q) {
        var p = "";
        p += '<option value="' + j((typeof r === g ? r.apply(r) : r)) + '">' + j((typeof r === g ? r.apply(r) : r)) + "</option>";
        return p
    }
    function a(r, q) {
        var p = "";
        p += '<li class="bang__nav__char" data-char="' + j((typeof r === g ? r.apply(r) : r)) + '"><a class="js-char-link" href="#">' + j((typeof r === g ? r.apply(r) : r)) + "</a></li>";
        return p
    }
    h += '<div class="bang__nav__cw"><div class="bang__nav__cat-search"><div class="frm__select  frm__select--no-first"><select class="js-categories-list"><option value="" disabled selected>Pick a category</option><option value="all">All categories</option>';
    b = e.each.call(n, (n && n.categories), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        h += b
    }
    h += '<option value="uncategorized">Uncategorized</option></select></div><input placeholder="Search" class="frm__input js-bang-search" type="text"/><i class="bang__nav__loupe"></i></div><ul class="bang__nav__chars"><li class="bang__nav__char bang__nav__char--selected" data-char="all"><a class="js-char-link" href="#">all</a></li>';
    b = e.each.call(n, (n && n.chars), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        h += b
    }
    h += "</ul></div>";
    return h
});
this["DDG"]["templates"]["bang_result"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += '<a href="#" class="bang__result js-bang-result" data-name="';
    if (e = b.t) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.t);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + '"><div class="bang__result__site-name">';
    if (e = b.s) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.s);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="bang__result__bang-wrap"><span class="bang__result__bang-name">!';
    if (e = b.t) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.t);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "</span></div></a>";
    return g
});
this["DDG"]["templates"]["bang_resultset"] = Handlebars.template(function(e, o, c, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    k = k || {};
    var h = "", a, f, q, g = "function", j = this.escapeExpression, p = this, n = c.helperMissing;
    function b(v, u) {
        var r = "", s, t;
        r += '<div class="bang__resultset__column bang__resultset__column--';
        if (t = c.numColumns) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.numColumns);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += j(s) + '-col js-bang-column"></div>';
        return r
    }
    h += '<div class="bang__resultset"><h3 class="bang__resultset__title"><span>';
    if (f = c.title) {
        a = f.call(o, {
            hash: {},
            data: k
        })
    } else {
        f = (o && o.title);
        a = typeof f === g ? f.call(o, {
            hash: {},
            data: k
        }) : f
    }
    h += j(a) + "</span></h3><div>";
    a = (f = c.loop || (o && o.loop), q = {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, b, k),
        data: k
    }, f ? f.call(o, (o && o.numColumns), q) : n.call(o, "loop", (o && o.numColumns), q));
    if (a || a === 0) {
        h += a
    }
    h += "</div></div>";
    return h
});
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["theme_autocomplete"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".search__autocomplete,.acp-wrap__column.acp-wrap__column--left {border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.acp-wrap,.acp-footer {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.acp, .acp--bang {color: ";
    if (e = b.darkText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.darkText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.acp strong,.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__snippet {color: ";
    if (e = b.lightText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lightText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.acp--highlight {background-color: ";
    if (e = b.selectedBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.selectedBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_background"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += "body,.body--home,.site-wrapper {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.region-switch__label,.tag-home__link,.tag-home__link:hover,.tag-home__link:visited,.tag-home__link:active,.tag-home__nav__close:hover,.results,.msg {color: ";
    if (e = b.textTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.textTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tag-home__nav__wrap:hover {background-color: ";
    if (e = b.bgTint2) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint2);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.result__check {color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.result__check:visited {color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.result__a,.result__a:hover,.result__a:active,.highlight .result__a,.highlight .result__a:hover,.result__a:visited,.tag-home,.page-settings,.frm__label,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.settings-page-wrapper .set-side a,.settings-page-wrapper .set-side a:hover,.settings-page-wrapper .set-side a:active {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";text-decoration: underline;}.btn--top,.result--sep--hr:before,.result--load-btn,.feedback--button.btn--wire {color: ";
    if (e = b.textTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.textTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.btn--top:hover,.feedback--button.btn--wire:hover {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.results--powered {color: ";
    if (e = b.textTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.textTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.set-bookmarklet,.set-reset,.set-head,.set-thumbnail__img,.set-main-footer,.frm__color__swatch {border-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.cloudsave {background-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.set-bookmarklet__input,.set-bookmarklet__data,.btn,.btn:visited,.btn:hover,.frm__input {background-color: ";
    if (e = b.bgTint2) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint2);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.textTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.textTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.add-to-browser__directions .btn.btn--primary {background-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: transparent;color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.frm__hr,.btn:active {border-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.btn.is-active,.btn.btn--primary,.btn--primary:hover,.is-checked .btn.frm__switch__label {color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.bgTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.textTint) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.textTint);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.switch,.region-flag__bg {background-color: ";
    if (e = b.bgTint2) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgTint2);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.region-switch__label-status-on {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_custom_font"] = Handlebars.template(function(e, n, c, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    k = k || {};
    var h = "", a, f, g = "function", j = this.escapeExpression, o = this;
    function b(q, p) {
        return ".zci b,.zcm b,.zcm__link,.tile--s h1,.tile--s h2,.tile--s h3,.tile--s h4,.tile--s h5,.tile--s h6,.badge--official,.badge--ad {font-weight: 500;}"
    }
    h += "body,input,textarea,.search__input--adv {font-family: ";
    if (f = c.fontStack) {
        a = f.call(n, {
            hash: {},
            data: k
        })
    } else {
        f = (n && n.fontStack);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: k
        }) : f
    }
    h += j(a) + ";}";
    a = c["if"].call(n, (n && n.lightenWeight), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, b, k),
        data: k
    });
    if (a || a === 0) {
        h += a
    }
    return h
});
this["DDG"]["templates"]["theme_font"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += "@font-face {font-family: 'DDG_ProximaNova";
    if (e = b.name) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.name);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "';src: url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.eot');src: url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.eot?#iefix') format('embedded-opentype'),url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.woff') format('woff'),url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.ttf') format('truetype'),url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.svg#proxima_nova_ltsemibold') format('svg');font-weight: 600;font-style: normal;}@font-face {font-family: 'DDG_ProximaNova";
    if (e = b.name) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.name);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "';src: url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.eot');src: url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.eot?#iefix') format('embedded-opentype'),url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.woff') format('woff'),url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.ttf') format('truetype'),url('/font/";
    if (e = b.lang) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.lang);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.svg#proxima_nova_rgregular') format('svg');font-weight: normal;font-style: normal;}";
    return g
});
this["DDG"]["templates"]["theme_header"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".header-wrap, .has-active-zci .header-wrap, .has-active-zci .header-wrap .zcm__link:before, .has-active-zci .header-wrap .zcm__link:after, .has-zcm .header-wrap:before, .has-zcm .header-wrap:after, .has-zcm .header-wrap .header:after {background-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.no-touch .header-wrap .zcm__link.is-active {background-color: transparent;}.header-wrap.header-wrap--home {background: none;}.has-active-zci .header-wrap {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bottomBorder);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.header-wrap, .header-wrap--home {border-top-color: ";
    if (e = b.topBorder) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.topBorder);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.site-wrapper-border {background-color: ";
    if (e = b.topBorder) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.topBorder);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.no-touch .site-wrapper .zcm__link, .zcm__link, .zcm__link:visited {color: ";
    if (e = b.link) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.link);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zcm__link:hover,.zcm__link:active,.zcm__link.is-active {background-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.activeLink) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.activeLink);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.no-touch .header-wrap .zcm__link.is-active {color: ";
    if (e = b.activeLink) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.activeLink);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zcm__sep--h:before {border-left-color: ";
    if (e = b.bottomBorder) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bottomBorder);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.lt-ie9 .header-wrap {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bottomBorder);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.set-header--menu.has-zcm.is-mobile .header--aside {background: -moz-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 100%);background: -webkit-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + "),1) 100%);background: -o-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 40%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 100%);background: -ms-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 100%);background: linear-gradient(to right, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 100%);}.is-mobile .zcm-wrap--header:before,.is-mobile .zcm-wrap--header:after {background: -moz-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 50%, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 100%);background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0)), color-stop(50%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1)), color-stop(100%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0)));background: -webkit-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 50%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 100%);background: -o-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 50%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 100%);background: -ms-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 50%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 100%);background: linear-gradient(to right, rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",1) 50%,rgba(";
    if (e = b.rgb) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.rgb);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ",0) 100%);}";
    return g
});
this["DDG"]["templates"]["theme_header_menu_button"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".btn--icon,.header__button--menu,.no-touch .btn--icon,.no-touch .header__button,.no-touch .header__button--menu {color: ";
    if (e = b.icon) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.icon);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.header--aside__msg,.header--aside__msg:hover {color: ";
    if (e = b.hoverBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.hoverBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.no-touch .btn--icon:hover,.no-touch .header__button:hover,.no-touch .header__button--menu:hover, .no-touch .header__button:focus, .no-touch .header__button--menu:focus {color: ";
    if (e = b.hoverColor) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.hoverColor);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.hoverBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.hoverBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_highlight"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result.highlight,.msg--result.highlight,.msg--box {background: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.result.result--ad.highlight {background: none;}";
    return g
});
this["DDG"]["templates"]["theme_result_message"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".msg--bang__bang-name {color: ";
    if (e = b.textColor) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.textColor);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.bgColor) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bgColor);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.borderColor) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.borderColor);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.msg--bang__bangs-link,.msg--bang__bangs-link:hover,.msg--bang__bangs-link:visited,.msg--bang__bangs-link:active,.msg--spelling :link,.msg--spelling :link:visited,.msg--spelling :link:hover,.msg--spelling :link:active {color: ";
    if (e = b.linkColor) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.linkColor);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_snippet"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result__snippet,.result__snippet b,.result__snippet a,.result__snippet a:hover,.result__snippet a:active,.result__snippet a:visited {color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + " !important;}";
    return g
});
this["DDG"]["templates"]["theme_result_title"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result a.result__a,.result a.result__a:hover,.result a.result__a:active,.result--url-above-snippet a.result__menu,.result--url-above-snippet a.result__menu:hover,.result--url-above-snippet a.result__menu:active,.result--url-above-snippet a.result__menu:visited,.msg--spelling :link,.msg--spelling :visited,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover {color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.badge--official {background-color: ";
    if (e = b.officialSiteBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.officialSiteBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.officialSiteText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.officialSiteText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_web_links"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result__url,.result__url:visited,.result__url:active,.result__url:hover,a.result__menu,a.result__menu:hover,a.result__menu:active,a.result__menu:visited,.result--ad .result__url,.result--ad .result__url:hover,.result--ad .result__url:active,.result--ad .result__url:visited,.sponsored__sitelink, .sponsored__sitelink b, .sponsored__sitelink:visited,.sponsored__sitelink:hover {color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_search_bar"] = Handlebars.template(function(e, n, c, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    k = k || {};
    var h = "", a, f, g = "function", j = this.escapeExpression, o = this;
    function b(t, s) {
        var p = "", q, r;
        p += ".search__input--adv,.search__overlay {color: ";
        if (r = c.inputText) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.inputText);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + ";}.search__overlay__site {color: ";
        if (r = c.altinputText) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.altinputText);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + ";}";
        return p
    }
    h += ".search--home,.search--header {background-color: ";
    if (f = c.bg) {
        a = f.call(n, {
            hash: {},
            data: k
        })
    } else {
        f = (n && n.bg);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: k
        }) : f
    }
    h += j(a) + ";border-color: ";
    if (f = c.border) {
        a = f.call(n, {
            hash: {},
            data: k
        })
    } else {
        f = (n && n.border);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: k
        }) : f
    }
    h += j(a) + ";}.search__clear,.search__button,.search--home.has-text .search__clear {color: ";
    if (f = c.iconText) {
        a = f.call(n, {
            hash: {},
            data: k
        })
    } else {
        f = (n && n.iconText);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: k
        }) : f
    }
    h += j(a) + ";}.search__button:hover,.search__button--active,.search:hover .search__button,.search__input:focus ~ .search__button,.search--header.has-text.search--hover .search__button,.search--header.has-text.search--focus .search__button,.search--home.has-text .search__button,.search__button:focus,.search:hover .search__button:focus,.search--header.has-text.search--hover .search__button:hover,.search--header.has-text.search--focus .search__button:hover,.search--home.has-text .search__button:focus,.search--home.has-text .search__button:hover {background-color: ";
    if (f = c.buttonBg) {
        a = f.call(n, {
            hash: {},
            data: k
        })
    } else {
        f = (n && n.buttonBg);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: k
        }) : f
    }
    h += j(a) + ";}";
    a = c["if"].call(n, (n && n.inputText), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, b, k),
        data: k
    });
    if (a || a === 0) {
        h += a
    }
    return h
});
this["DDG"]["templates"]["theme_sidemenu"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".nav-menu,.nav-menu--slideout {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.nav-menu--slideout {border-left-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;}.nav-menu__icon,.nav-menu__close,.nav-menu__item,.nav-menu__item--secondary,.nav-menu__item > a,.nav-menu__item--secondary > a,.nav-menu__item > a:visited,.nav-menu__item--secondary > a:visited {color: ";
    if (e = b.link) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.link);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.nav-menu__item > a:hover {color: ";
    if (e = b.activeLink) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.activeLink);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.nav-menu__heading,.nav-menu__heading--primary {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.nav-menu__theme.theme-is-selected {border-color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_zci"] = Handlebars.template(function(c, m, b, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    j = j || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".zci, .zci:before,.tileview .metabar--fixed,.tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck,.mapview.is-expanded .zci {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-bottom-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci-wrap {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.set-header--fixed .tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-top-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci.is-active {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bottomBorder);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci__body,.zci__detail,.zci__caption,.zci__header,.zci__body h1, .zci__detail h1,.zci__body h2, .zci__detail h2,.zci__body h3, .zci__detail h3,.zci__body h4, .zci__detail h4,.zci__body h5, .zci__detail h5,.zci__body h6, .zci__detail h6,.metabar,.c-detail__title,.c-detail__title__sub,.c-detail__desc,.c-detail__filemeta,.c-detail__more,.c-detail__user,.c-detail__count,.c-detail__date,.c-info,.c-info__title,.c-icon,.c-icon__title,.c-icon__content,.c-score,.metabar__dropdown__selected,.metabar__dropdown__selected:hover,.metabar__dropdown__selected:focus,.metabar__dropdown__item:hover,.metabar__dropdown__item.metabar__dropdown__item--active,.metabar__dropdown__item {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.detail--l .detail__media, .detail--products .detail__media, .detail--qa .detail__media, .detail--about .detail__media,.detail--l .detail__media:after, .detail--products .detail__media:after, .detail--qa .detail__media:after, .detail--about .detail__media:after {background: none;}a,a.no-visited,.zci__body a,.zci__detail a,.zcm__link--sub,.zcm__link--sub:visited,.zci__body .chomp--link,.metabar .zci__more-at,.zci__body .zci__more-at,.zci__body .c-detail__rating :link,.zci__more-at,.tile--loc__more,.c-info__link,.c-icon__link,.chomp--link__mr,.chomp--link__ls {color: ";
    if (e = b.link) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.link);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci__body a:hover,.detail__body a:hover,.zci__body a:active,.zci__body a:active,.zcm__link--sub.is-here,.zcm__item.is-here .zcm__link--sub,.zci__body .chomp--link:hover,.zci__more-at:hover,.c-info__link:hover,.c-icon__link:hover,.zcm__link--sub:hover,.zcm__link--sub.is-highlighted,.chomp--link:hover .chomp--link__mr,.chomp--link:hover .chomp--link__ls {color: ";
    if (e = b.activeLink) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.activeLink);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci pre,.zci code {color: ";
    if (e = b.modeText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.modeText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.modeBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.modeBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci pre,.zci code,.c-list__items,.record__cell {border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.metabar__mode,.metabar__dropdown__item:hover,.metabar__dropdown__item.metabar__dropdown__item--active {background-color: ";
    if (e = b.modeBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.modeBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.metabar__mode.is-disabled,.metabar__mode.is-disabled:hover,.metabar__mode.is-disabled:active {color: ";
    if (e = b.modeBg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.modeBg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: transparent;}.detail {background-color: ";
    if (e = b.detail) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.detail);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.detail__close {color: ";
    if (e = b.accent1) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent1);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.detail__close:hover,.detail__close:active{color: ";
    if (e = b.accent2) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent2);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.detail__media--pr {border-right-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile--img:after {border-bottom-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.sep,.sep--small,.sep--before:before,.sep--after:after {border-color: ";
    if (e = b.accent1) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent1);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.mapview.is-expanded .metabar,.tileview--grid .metabar--fixed:before  {background-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile-nav.can-scroll,.tile-nav.can-scroll:after,.tile-nav.can-scroll:hover {background-color: ";
    if (e = b.tileNav) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.tileNav);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + " !important;}.chomp--link__icn,.count__i:after {color: ";
    if (e = b.accent3) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent3);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile-nav--sm {color: ";
    if (e = b.accentText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accentText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.accent1) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent1);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile-nav--sm:hover,.tile-nav--sm:active {background-color: ";
    if (e = b.accent2) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent2);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.c-detail__links__btn,.zci .btn--primary,.zci .btn.btn--primary,.c-detail__links__btn:hover,.zci .btn--primary:hover,.zci__body a.btn--primary:hover {color: ";
    if (e = b.accentText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accentText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.accent1) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent1);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.star,.count__i,.tileview__message,.tileview__message:before,.tile--loc .tile__media__no-img  {color: ";
    if (e = b.accent1) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent1);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile, .tile--s, .tile--info .tile--map {border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.highlight.tile, .highlight.tile--s, .highlight.tile--info, .highlight.tile--map,.is-selected.tile, .is-selected.tile--s, .is-selected.tile--info, .is-selected.tile--map,.highlight.tile--f .tile--f__main, .highlight.tile--f .tile--f__alt, .is-selected.tile--f .tile--f__alt {border-color: ";
    if (e = b.outline) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.outline);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";outline-color: ";
    if (e = b.outline) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.outline);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.highlight.tile--no-highlight, .highlight.tile--no-highlight:active, .tile--no-highlight.is-selected {border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";outline: none;}.tile--m {background-color: ";
    if (e = b.detail) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.detail);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.link) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.link);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile--m:hover {background-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.activeLink) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.activeLink);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.is-mobile .has-tiles--grid .tile--m, .is-mobile .has-tiles--grid .tile--m:hover {background-color: ";
    if (e = b.detail) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.detail);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.detail) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.detail);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.bg-clr--dk,.bg-clr--dk2,.bg-clr--slate,.bg-clr--slate-light  {background-color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.bg-clr--lt,.bg-clr--lt2,.bg-clr--lt3,.bg-clr--grey-dark,.bg-clr--grey-light,.bg-clr--grey {background-color: ";
    if (e = b.accentText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accentText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.text--primary,.tx-clr--dk,.tx-clr--dk2,.tx-clr--slate,.tx-clr--slate-light {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.zci__subheader,.zci__header__sub,.c-info__sub,.c-info__title__sub,.c-icon__sub,.c-score__head,.c-score__foot,.text--secondary,.tx-clr--grey-dark,.tx-clr--grey-light,.tx-clr--grey,.tx-clr--lt,.tx-clr--lt2,.tx-clr--lt3 {color: ";
    if (e = b.accentText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accentText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile, .tile__title, .tile h4, .tile--m--mob, .at-topic .tile__title, .at-topic .tile.active-topic .tile__title, .at-topic .tile.highlight .tile__title, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile--loc, .tile .tile__price b {color: ";
    if (e = b.text) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.text);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile, .tile--s, .bg-tile, .tile--m--mob, .tile__media--pr, .at-topic .tile.active-topic, .at-topic .tile.highlight, .tile__foot--news, .tile--f__main, .tile--f__alt, .tile__num:before, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile__media .tile__media__img, .popout {background-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--top:after {border-top-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--left:after {border-left-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--right:after {border-right-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--bottom:after,.popout--bottom-left:after,.popout--bottom-right:after {border-bottom-color: ";
    if (e = b.color) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.color);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile__expand, .tile__expand:hover,.bg-clr--platinum-darker,.bg-clr--platinum-dark,.bg-clr--platinum-light,.bg-clr--platinum,.bg-clr--silver-dark,.bg-clr--silver-light,.bg-clr--silver {background: ";
    if (e = b.accent1) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accent1);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.at-topic .tile,.tile--loc .tile__media__no-img {background: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile__sub, .tile__sub--2, .tile__title__sub, .tile__foot, .tile__footer, .tile__link, .tile--audio .tile__footer, .tile__count, .tile--b--i .tile__source, .tile__neighborhood, .tile__more-at, .tile__title a:visited,.tx-clr--platinum-darker, .tx-clr--platinum-dark, .tx-clr--platinum-light, .tx-clr--platinum,.tx-clr--silver-dark, .tx-clr--silver-light, .tx-clr--silver {color: ";
    if (e = b.accentText2) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accentText2);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile--b--i .tile__description, .tile__content, .tile__content--qa, .tile__content--news, .tile__tx, .tile__expand, .tile__expand:hover, .tile__num, .tile__phone, .info__label, .info__value, .tile__foot, .tile__foot--news, .attribution--link__icon {color: ";
    if (e = b.accentText) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.accentText);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile--info .info, .tile__expand, .tile__expand:hover, .attribution__hr, .c-score__line, .c-score__foot, .has-score .c-score__line__name, .is-mobile .no-score .c-score__line--home, .c-score__line--vs1:before, .c-score__line--vs1:after {border-color: ";
    if (e = b.bg) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.bg);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile--f__main, .tile--f__alt, .csstransforms3d .tile--f__main, .csstransforms3d .tile--f__alt, .is-mobile .c-info__link, .popout {border-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--top:before {border-top-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--left:before {border-left-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--right:before {border-right-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.popout--bottom:before,.popout--bottom-left:before,.popout--bottom-right:before {border-bottom-color: ";
    if (e = b.border) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.border);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}.tile .tile__price {color: ";
    if (e = b.detail) {
        a = e.call(m, {
            hash: {},
            data: j
        })
    } else {
        e = (m && m.detail);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: j
        }) : e
    }
    g += h(a) + ";}";
    return g
});

