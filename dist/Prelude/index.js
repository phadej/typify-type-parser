// Generated by psc-make version 0.5.5
"use strict";
var Unit = {
    create: function (value) {
        return value;
    }
};
function LT() {

};
LT.value = new LT();
function GT() {

};
GT.value = new GT();
function EQ() {

};
EQ.value = new EQ();
function Semigroupoid($less$less$less) {
    this["<<<"] = $less$less$less;
};
function Category(__superclass_Prelude$dotSemigroupoid_0, id) {
    this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
    this.id = id;
};
function Show(show) {
    this.show = show;
};
function Functor($less$dollar$greater) {
    this["<$>"] = $less$dollar$greater;
};
function Apply($less$times$greater, __superclass_Prelude$dotFunctor_0) {
    this["<*>"] = $less$times$greater;
    this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
};
function Applicative(__superclass_Prelude$dotApply_0, pure) {
    this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    this.pure = pure;
};
function Bind($greater$greater$eq, __superclass_Prelude$dotApply_0) {
    this[">>="] = $greater$greater$eq;
    this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
};
function Monad(__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
    this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
    this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
};
function Num($percent, $times, $plus, $minus, $div, negate) {
    this["%"] = $percent;
    this["*"] = $times;
    this["+"] = $plus;
    this["-"] = $minus;
    this["/"] = $div;
    this.negate = negate;
};
function Eq($div$eq, $eq$eq) {
    this["/="] = $div$eq;
    this["=="] = $eq$eq;
};
function Ord(__superclass_Prelude$dotEq_0, compare) {
    this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
    this.compare = compare;
};
function Bits($amp, $up, complement, shl, shr, zshr, $bar) {
    this["&"] = $amp;
    this["^"] = $up;
    this.complement = complement;
    this.shl = shl;
    this.shr = shr;
    this.zshr = zshr;
    this["|"] = $bar;
};
function BoolLike($amp$amp, not, $bar$bar) {
    this["&&"] = $amp$amp;
    this.not = not;
    this["||"] = $bar$bar;
};
function Semigroup($less$greater) {
    this["<>"] = $less$greater;
};
function cons(e) {  return function (l) {    return [e].concat(l);  };};
function showStringImpl(s) {  return JSON.stringify(s);};
function showNumberImpl(n) {  return n.toString();};
function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
function numNegate(n) {  return -n;};
function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
function unsafeCompareImpl(lt) {  return function (eq) {    return function (gt) {      return function (x) {        return function (y) {          return x < y ? lt : x > y ? gt : eq;        };      };    };  };};
function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
function numComplement(n) {  return ~n;};
function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
function boolNot(b) {  return !b;};
function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
var $bar$bar = function (dict) {
    return dict["||"];
};
var $bar = function (dict) {
    return dict["|"];
};
var $up = function (dict) {
    return dict["^"];
};
var $greater$greater$eq = function (dict) {
    return dict[">>="];
};
var $eq$eq = function (dict) {
    return dict["=="];
};
var $less$greater = function (dict) {
    return dict["<>"];
};
var $less$less$less = function (dict) {
    return dict["<<<"];
};
var $greater$greater$greater = function (__dict_Semigroupoid_0) {
    return function (f) {
        return function (g) {
            return $less$less$less(__dict_Semigroupoid_0)(g)(f);
        };
    };
};
var $less$times$greater = function (dict) {
    return dict["<*>"];
};
var $less$dollar$greater = function (dict) {
    return dict["<$>"];
};
var $colon = cons;
var $div$eq = function (dict) {
    return dict["/="];
};
var $div = function (dict) {
    return dict["/"];
};
var $minus = function (dict) {
    return dict["-"];
};
var $plus$plus = function (__dict_Semigroup_1) {
    return $less$greater(__dict_Semigroup_1);
};
var $plus = function (dict) {
    return dict["+"];
};
var $times = function (dict) {
    return dict["*"];
};
var $amp$amp = function (dict) {
    return dict["&&"];
};
var $amp = function (dict) {
    return dict["&"];
};
var $percent = function (dict) {
    return dict["%"];
};
var $dollar = function (f) {
    return function (x) {
        return f(x);
    };
};
var $hash = function (x) {
    return function (f) {
        return f(x);
    };
};
var zshr = function (dict) {
    return dict.zshr;
};
var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
var unit = {};
var shr = function (dict) {
    return dict.shr;
};
var showUnit = function () {
    return new Show(function (_27) {
        return "Unit {}";
    });
};
var showString = function () {
    return new Show(showStringImpl);
};
var showOrdering = function () {
    return new Show(function (_35) {
        if (_35 instanceof LT) {
            return "LT";
        };
        if (_35 instanceof GT) {
            return "GT";
        };
        if (_35 instanceof EQ) {
            return "EQ";
        };
        throw new Error("Failed pattern match");
    });
};
var showNumber = function () {
    return new Show(showNumberImpl);
};
var showBoolean = function () {
    return new Show(function (_28) {
        if (_28) {
            return "true";
        };
        if (!_28) {
            return "false";
        };
        throw new Error("Failed pattern match");
    });
};
var show = function (dict) {
    return dict.show;
};
var showArray = function (__dict_Show_2) {
    return new Show(showArrayImpl(show(__dict_Show_2)));
};
var shl = function (dict) {
    return dict.shl;
};
var semigroupoidArr = function () {
    return new Semigroupoid(function (f) {
        return function (g) {
            return function (x) {
                return f(g(x));
            };
        };
    });
};
var semigroupUnit = function () {
    return new Semigroup(function (_42) {
        return function (_43) {
            return {};
        };
    });
};
var semigroupString = function () {
    return new Semigroup(concatString);
};
var semigroupArr = function (__dict_Semigroup_3) {
    return new Semigroup(function (f) {
        return function (g) {
            return function (x) {
                return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
            };
        };
    });
};
var pure = function (dict) {
    return dict.pure;
};
var $$return = function (__dict_Monad_4) {
    return pure(__dict_Monad_4["__superclass_Prelude.Applicative_0"]());
};
var numNumber = function () {
    return new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
};
var not = function (dict) {
    return dict.not;
};
var negate = function (dict) {
    return dict.negate;
};
var liftM1 = function (__dict_Monad_5) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_5["__superclass_Prelude.Bind_1"]())(a)(function (_0) {
                return $$return(__dict_Monad_5)(f(_0));
            });
        };
    };
};
var liftA1 = function (__dict_Applicative_6) {
    return function (f) {
        return function (a) {
            return $less$times$greater(__dict_Applicative_6["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_6)(f))(a);
        };
    };
};
var id = function (dict) {
    return dict.id;
};
var functorArr = function () {
    return new Functor($less$less$less(semigroupoidArr()));
};
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var eqUnit = function () {
    return new Eq(function (_31) {
        return function (_32) {
            return false;
        };
    }, function (_29) {
        return function (_30) {
            return true;
        };
    });
};
var ordUnit = function () {
    return new Ord(eqUnit, function (_36) {
        return function (_37) {
            return EQ.value;
        };
    });
};
var eqString = function () {
    return new Eq(refIneq, refEq);
};
var ordString = function () {
    return new Ord(eqString, unsafeCompare);
};
var eqNumber = function () {
    return new Eq(refIneq, refEq);
};
var ordNumber = function () {
    return new Ord(eqNumber, unsafeCompare);
};
var eqBoolean = function () {
    return new Eq(refIneq, refEq);
};
var ordBoolean = function () {
    return new Ord(eqBoolean, function (_38) {
        return function (_39) {
            if (!_38 && !_39) {
                return EQ.value;
            };
            if (!_38 && _39) {
                return LT.value;
            };
            if (_38 && _39) {
                return EQ.value;
            };
            if (_38 && !_39) {
                return GT.value;
            };
            throw new Error("Failed pattern match");
        };
    });
};
var $$const = function (_23) {
    return function (_24) {
        return _23;
    };
};
var $$void = function (__dict_Functor_8) {
    return function (fa) {
        return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
    };
};
var complement = function (dict) {
    return dict.complement;
};
var compare = function (dict) {
    return dict.compare;
};
var $less = function (__dict_Ord_10) {
    return function (a1) {
        return function (a2) {
            var _343 = compare(__dict_Ord_10)(a1)(a2);
            if (_343 instanceof LT) {
                return true;
            };
            return false;
        };
    };
};
var $less$eq = function (__dict_Ord_11) {
    return function (a1) {
        return function (a2) {
            var _344 = compare(__dict_Ord_11)(a1)(a2);
            if (_344 instanceof GT) {
                return false;
            };
            return true;
        };
    };
};
var $greater = function (__dict_Ord_12) {
    return function (a1) {
        return function (a2) {
            var _345 = compare(__dict_Ord_12)(a1)(a2);
            if (_345 instanceof GT) {
                return true;
            };
            return false;
        };
    };
};
var $greater$eq = function (__dict_Ord_13) {
    return function (a1) {
        return function (a2) {
            var _346 = compare(__dict_Ord_13)(a1)(a2);
            if (_346 instanceof LT) {
                return false;
            };
            return true;
        };
    };
};
var categoryArr = function () {
    return new Category(semigroupoidArr, function (x) {
        return x;
    });
};
var boolLikeBoolean = function () {
    return new BoolLike(boolAnd, boolNot, boolOr);
};
var eqArray = function (__dict_Eq_7) {
    return new Eq(function (xs) {
        return function (ys) {
            return not(boolLikeBoolean())($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
        };
    }, function (xs) {
        return function (ys) {
            return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
        };
    });
};
var ordArray = function (__dict_Ord_9) {
    return new Ord(function () {
        return eqArray(__dict_Ord_9["__superclass_Prelude.Eq_0"]());
    }, function (_40) {
        return function (_41) {
            if (_40.length === 0 && _41.length === 0) {
                return EQ.value;
            };
            if (_40.length === 0) {
                return LT.value;
            };
            if (_41.length === 0) {
                return GT.value;
            };
            if (_40.length >= 1) {
                var _353 = _40.slice(1);
                if (_41.length >= 1) {
                    var _351 = _41.slice(1);
                    var _349 = compare(__dict_Ord_9)(_40[0])(_41[0]);
                    if (_349 instanceof EQ) {
                        return compare(ordArray(__dict_Ord_9))(_353)(_351);
                    };
                    return _349;
                };
            };
            throw new Error("Failed pattern match");
        };
    });
};
var eqOrdering = function () {
    return new Eq(function (x) {
        return function (y) {
            return not(boolLikeBoolean())($eq$eq(eqOrdering())(x)(y));
        };
    }, function (_33) {
        return function (_34) {
            if (_33 instanceof LT && _34 instanceof LT) {
                return true;
            };
            if (_33 instanceof GT && _34 instanceof GT) {
                return true;
            };
            if (_33 instanceof EQ && _34 instanceof EQ) {
                return true;
            };
            return false;
        };
    });
};
var bitsNumber = function () {
    return new Bits(numAnd, numXor, numComplement, numShl, numShr, numZshr, numOr);
};
var asTypeOf = function (_25) {
    return function (_26) {
        return _25;
    };
};
var applyArr = function () {
    return new Apply(function (f) {
        return function (g) {
            return function (x) {
                return f(x)(g(x));
            };
        };
    }, functorArr);
};
var bindArr = function () {
    return new Bind(function (m) {
        return function (f) {
            return function (x) {
                return f(m(x))(x);
            };
        };
    }, applyArr);
};
var applicativeArr = function () {
    return new Applicative(applyArr, $$const);
};
var monadArr = function () {
    return new Monad(applicativeArr, bindArr);
};
var ap = function (__dict_Monad_14) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]())(f)(function (_2) {
                return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]())(a)(function (_1) {
                    return $$return(__dict_Monad_14)(_2(_1));
                });
            });
        };
    };
};
module.exports = {
    Unit: Unit, 
    LT: LT, 
    GT: GT, 
    EQ: EQ, 
    Semigroup: Semigroup, 
    BoolLike: BoolLike, 
    Bits: Bits, 
    Ord: Ord, 
    Eq: Eq, 
    Num: Num, 
    Monad: Monad, 
    Bind: Bind, 
    Applicative: Applicative, 
    Apply: Apply, 
    Functor: Functor, 
    Show: Show, 
    Category: Category, 
    Semigroupoid: Semigroupoid, 
    unit: unit, 
    "++": $plus$plus, 
    "<>": $less$greater, 
    not: not, 
    "||": $bar$bar, 
    "&&": $amp$amp, 
    complement: complement, 
    zshr: zshr, 
    shr: shr, 
    shl: shl, 
    "^": $up, 
    "|": $bar, 
    "&": $amp, 
    ">=": $greater$eq, 
    "<=": $less$eq, 
    ">": $greater, 
    "<": $less, 
    compare: compare, 
    refIneq: refIneq, 
    refEq: refEq, 
    "/=": $div$eq, 
    "==": $eq$eq, 
    negate: negate, 
    "%": $percent, 
    "/": $div, 
    "*": $times, 
    "-": $minus, 
    "+": $plus, 
    ap: ap, 
    liftM1: liftM1, 
    "return": $$return, 
    ">>=": $greater$greater$eq, 
    liftA1: liftA1, 
    pure: pure, 
    "<*>": $less$times$greater, 
    "void": $$void, 
    "<$>": $less$dollar$greater, 
    show: show, 
    cons: cons, 
    ":": $colon, 
    "#": $hash, 
    "$": $dollar, 
    id: id, 
    ">>>": $greater$greater$greater, 
    "<<<": $less$less$less, 
    asTypeOf: asTypeOf, 
    "const": $$const, 
    flip: flip, 
    semigroupoidArr: semigroupoidArr, 
    categoryArr: categoryArr, 
    showUnit: showUnit, 
    showString: showString, 
    showBoolean: showBoolean, 
    showNumber: showNumber, 
    showArray: showArray, 
    functorArr: functorArr, 
    applyArr: applyArr, 
    applicativeArr: applicativeArr, 
    bindArr: bindArr, 
    monadArr: monadArr, 
    numNumber: numNumber, 
    eqUnit: eqUnit, 
    eqString: eqString, 
    eqNumber: eqNumber, 
    eqBoolean: eqBoolean, 
    eqArray: eqArray, 
    eqOrdering: eqOrdering, 
    showOrdering: showOrdering, 
    ordUnit: ordUnit, 
    ordBoolean: ordBoolean, 
    ordNumber: ordNumber, 
    ordString: ordString, 
    ordArray: ordArray, 
    bitsNumber: bitsNumber, 
    boolLikeBoolean: boolLikeBoolean, 
    semigroupUnit: semigroupUnit, 
    semigroupString: semigroupString, 
    semigroupArr: semigroupArr
};
