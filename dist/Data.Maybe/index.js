// Generated by psc-make version 0.5.5
"use strict";
var Prelude = require("Prelude");
var Control_Extend = require("Control.Extend");
var Control_Alt = require("Control.Alt");
var Control_Plus = require("Control.Plus");
var Control_Alternative = require("Control.Alternative");
var Control_MonadPlus = require("Control.MonadPlus");
function Nothing() {

};
Nothing.value = new Nothing();
function Just(value0) {
    this.value0 = value0;
};
Just.create = function (value0) {
    return new Just(value0);
};
var showMaybe = function (__dict_Show_0) {
    return new Prelude.Show(function (_88) {
        if (_88 instanceof Just) {
            return "Just (" + (Prelude.show(__dict_Show_0)(_88.value0) + ")");
        };
        if (_88 instanceof Nothing) {
            return "Nothing";
        };
        throw new Error("Failed pattern match");
    });
};
var semigroupMaybe = function (__dict_Semigroup_1) {
    return new Prelude.Semigroup(function (_86) {
        return function (_87) {
            if (_86 instanceof Nothing) {
                return _87;
            };
            if (_87 instanceof Nothing) {
                return _86;
            };
            if (_86 instanceof Just && _87 instanceof Just) {
                return new Just(Prelude["<>"](__dict_Semigroup_1)(_86.value0)(_87.value0));
            };
            throw new Error("Failed pattern match");
        };
    });
};
var maybe = function (_73) {
    return function (_74) {
        return function (_75) {
            if (_75 instanceof Nothing) {
                return _73;
            };
            if (_75 instanceof Just) {
                return _74(_75.value0);
            };
            throw new Error("Failed pattern match");
        };
    };
};
var isNothing = maybe(true)(Prelude["const"](false));
var isJust = maybe(false)(Prelude["const"](true));
var functorMaybe = function () {
    return new Prelude.Functor(function (_76) {
        return function (_77) {
            if (_77 instanceof Just) {
                return new Just(_76(_77.value0));
            };
            return Nothing.value;
        };
    });
};
var fromMaybe = function (a) {
    return maybe(a)(Prelude.id(Prelude.categoryArr()));
};
var extendMaybe = function () {
    return new Control_Extend.Extend(function (_84) {
        return function (_85) {
            if (_85 instanceof Nothing) {
                return Nothing.value;
            };
            return Just.create(_84(_85));
        };
    }, functorMaybe);
};
var eqMaybe = function (__dict_Eq_3) {
    return new Prelude.Eq(function (a) {
        return function (b) {
            return !Prelude["=="](eqMaybe(__dict_Eq_3))(a)(b);
        };
    }, function (_89) {
        return function (_90) {
            if (_89 instanceof Nothing && _90 instanceof Nothing) {
                return true;
            };
            if (_89 instanceof Just && _90 instanceof Just) {
                return Prelude["=="](__dict_Eq_3)(_89.value0)(_90.value0);
            };
            return false;
        };
    });
};
var ordMaybe = function (__dict_Ord_2) {
    return new Prelude.Ord(function () {
        return eqMaybe(__dict_Ord_2["__superclass_Prelude.Eq_0"]());
    }, function (_91) {
        return function (_92) {
            if (_91 instanceof Just && _92 instanceof Just) {
                return Prelude.compare(__dict_Ord_2)(_91.value0)(_92.value0);
            };
            if (_91 instanceof Nothing && _92 instanceof Nothing) {
                return Prelude.EQ.value;
            };
            if (_91 instanceof Nothing) {
                return Prelude.LT.value;
            };
            if (_92 instanceof Nothing) {
                return Prelude.GT.value;
            };
            throw new Error("Failed pattern match");
        };
    });
};
var applyMaybe = function () {
    return new Prelude.Apply(function (_78) {
        return function (_79) {
            if (_78 instanceof Just) {
                return Prelude["<$>"](functorMaybe())(_78.value0)(_79);
            };
            if (_78 instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match");
        };
    }, functorMaybe);
};
var bindMaybe = function () {
    return new Prelude.Bind(function (_82) {
        return function (_83) {
            if (_82 instanceof Just) {
                return _83(_82.value0);
            };
            if (_82 instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match");
        };
    }, applyMaybe);
};
var applicativeMaybe = function () {
    return new Prelude.Applicative(applyMaybe, Just.create);
};
var monadMaybe = function () {
    return new Prelude.Monad(applicativeMaybe, bindMaybe);
};
var altMaybe = function () {
    return new Control_Alt.Alt(function (_80) {
        return function (_81) {
            if (_80 instanceof Nothing) {
                return _81;
            };
            return _80;
        };
    }, functorMaybe);
};
var plusMaybe = function () {
    return new Control_Plus.Plus(altMaybe, Nothing.value);
};
var alternativeMaybe = function () {
    return new Control_Alternative.Alternative(plusMaybe, applicativeMaybe);
};
var monadPlusMaybe = function () {
    return new Control_MonadPlus.MonadPlus(alternativeMaybe, monadMaybe);
};
module.exports = {
    Nothing: Nothing, 
    Just: Just, 
    isNothing: isNothing, 
    isJust: isJust, 
    fromMaybe: fromMaybe, 
    maybe: maybe, 
    functorMaybe: functorMaybe, 
    applyMaybe: applyMaybe, 
    applicativeMaybe: applicativeMaybe, 
    altMaybe: altMaybe, 
    plusMaybe: plusMaybe, 
    alternativeMaybe: alternativeMaybe, 
    bindMaybe: bindMaybe, 
    monadMaybe: monadMaybe, 
    monadPlusMaybe: monadPlusMaybe, 
    extendMaybe: extendMaybe, 
    semigroupMaybe: semigroupMaybe, 
    showMaybe: showMaybe, 
    eqMaybe: eqMaybe, 
    ordMaybe: ordMaybe
};
