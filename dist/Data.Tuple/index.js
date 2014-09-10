// Generated by psc-make version 0.5.5
"use strict";
var Prelude = require("Prelude");
var Data_Array = require("Data.Array");
var Data_Monoid = require("Data.Monoid");
var Control_Lazy = require("Control.Lazy");
var Control_Extend = require("Control.Extend");
var Control_Comonad = require("Control.Comonad");
function Tuple(value0, value1) {
    this.value0 = value0;
    this.value1 = value1;
};
Tuple.create = function (value0) {
    return function (value1) {
        return new Tuple(value0, value1);
    };
};
var zip = Data_Array.zipWith(Tuple.create);
var unzip = function (_170) {
    if (_170.length >= 1) {
        var _546 = _170.slice(1);
        var _540 = unzip(_546);
        return new Tuple(Prelude[":"]((_170[0]).value0)(_540.value0), Prelude[":"]((_170[0]).value1)(_540.value1));
    };
    if (_170.length === 0) {
        return new Tuple([  ], [  ]);
    };
    throw new Error("Failed pattern match");
};
var uncurry = function (_168) {
    return function (_169) {
        return _168(_169.value0)(_169.value1);
    };
};
var swap = function (_171) {
    return new Tuple(_171.value1, _171.value0);
};
var snd = function (_167) {
    return _167.value1;
};
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return new Prelude.Show(function (_172) {
            return "Tuple (" + (Prelude.show(__dict_Show_0)(_172.value0) + (") (" + (Prelude.show(__dict_Show_1)(_172.value1) + ")")));
        });
    };
};
var semigroupoidTuple = function () {
    return new Prelude.Semigroupoid(function (_177) {
        return function (_178) {
            return new Tuple(_178.value0, _177.value1);
        };
    });
};
var semigroupTuple = function (__dict_Semigroup_2) {
    return function (__dict_Semigroup_3) {
        return new Prelude.Semigroup(function (_179) {
            return function (_180) {
                return new Tuple(Prelude["<>"](__dict_Semigroup_2)(_179.value0)(_180.value0), Prelude["<>"](__dict_Semigroup_3)(_179.value1)(_180.value1));
            };
        });
    };
};
var monoidTuple = function (__dict_Monoid_6) {
    return function (__dict_Monoid_7) {
        return new Data_Monoid.Monoid(function () {
            return semigroupTuple(__dict_Monoid_6["__superclass_Prelude.Semigroup_0"]())(__dict_Monoid_7["__superclass_Prelude.Semigroup_0"]());
        }, new Tuple(Data_Monoid.mempty(__dict_Monoid_6), Data_Monoid.mempty(__dict_Monoid_7)));
    };
};
var functorTuple = function () {
    return new Prelude.Functor(function (_181) {
        return function (_182) {
            return new Tuple(_182.value0, _181(_182.value1));
        };
    });
};
var fst = function (_166) {
    return _166.value0;
};
var lazyLazy1Tuple = function (__dict_Lazy1_9) {
    return function (__dict_Lazy1_10) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer1(__dict_Lazy1_9)(function (_) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer1(__dict_Lazy1_10)(function (_) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var lazyLazy2Tuple = function (__dict_Lazy2_11) {
    return function (__dict_Lazy2_12) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer2(__dict_Lazy2_11)(function (_) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer2(__dict_Lazy2_12)(function (_) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var lazyTuple = function (__dict_Lazy_13) {
    return function (__dict_Lazy_14) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer(__dict_Lazy_13)(function (_) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer(__dict_Lazy_14)(function (_) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var extendTuple = function () {
    return new Control_Extend.Extend(function (_187) {
        return function (_188) {
            return new Tuple(_188.value0, _187(_188));
        };
    }, functorTuple);
};
var eqTuple = function (__dict_Eq_15) {
    return function (__dict_Eq_16) {
        return new Prelude.Eq(function (t1) {
            return function (t2) {
                return !Prelude["=="](eqTuple(__dict_Eq_15)(__dict_Eq_16))(t1)(t2);
            };
        }, function (_173) {
            return function (_174) {
                return Prelude["=="](__dict_Eq_15)(_173.value0)(_174.value0) && Prelude["=="](__dict_Eq_16)(_173.value1)(_174.value1);
            };
        });
    };
};
var ordTuple = function (__dict_Ord_4) {
    return function (__dict_Ord_5) {
        return new Prelude.Ord(function () {
            return eqTuple(__dict_Ord_4["__superclass_Prelude.Eq_0"]())(__dict_Ord_5["__superclass_Prelude.Eq_0"]());
        }, function (_175) {
            return function (_176) {
                var _591 = Prelude.compare(__dict_Ord_4)(_175.value0)(_176.value0);
                if (_591 instanceof Prelude.EQ) {
                    return Prelude.compare(__dict_Ord_5)(_175.value1)(_176.value1);
                };
                return _591;
            };
        });
    };
};
var curry = function (f) {
    return function (a) {
        return function (b) {
            return f(new Tuple(a, b));
        };
    };
};
var comonadTuple = function () {
    return new Control_Comonad.Comonad(extendTuple, snd);
};
var applyTuple = function (__dict_Semigroup_18) {
    return new Prelude.Apply(function (_183) {
        return function (_184) {
            return new Tuple(Prelude["<>"](__dict_Semigroup_18)(_183.value0)(_184.value0), _183.value1(_184.value1));
        };
    }, functorTuple);
};
var bindTuple = function (__dict_Semigroup_17) {
    return new Prelude.Bind(function (_185) {
        return function (_186) {
            var _604 = _186(_185.value1);
            return new Tuple(Prelude["<>"](__dict_Semigroup_17)(_185.value0)(_604.value0), _604.value1);
        };
    }, function () {
        return applyTuple(__dict_Semigroup_17);
    });
};
var applicativeTuple = function (__dict_Monoid_19) {
    return new Prelude.Applicative(function () {
        return applyTuple(__dict_Monoid_19["__superclass_Prelude.Semigroup_0"]());
    }, Tuple.create(Data_Monoid.mempty(__dict_Monoid_19)));
};
var monadTuple = function (__dict_Monoid_8) {
    return new Prelude.Monad(function () {
        return applicativeTuple(__dict_Monoid_8);
    }, function () {
        return bindTuple(__dict_Monoid_8["__superclass_Prelude.Semigroup_0"]());
    });
};
module.exports = {
    Tuple: Tuple, 
    swap: swap, 
    unzip: unzip, 
    zip: zip, 
    uncurry: uncurry, 
    curry: curry, 
    snd: snd, 
    fst: fst, 
    showTuple: showTuple, 
    eqTuple: eqTuple, 
    ordTuple: ordTuple, 
    semigroupoidTuple: semigroupoidTuple, 
    semigroupTuple: semigroupTuple, 
    monoidTuple: monoidTuple, 
    functorTuple: functorTuple, 
    applyTuple: applyTuple, 
    applicativeTuple: applicativeTuple, 
    bindTuple: bindTuple, 
    monadTuple: monadTuple, 
    extendTuple: extendTuple, 
    comonadTuple: comonadTuple, 
    lazyTuple: lazyTuple, 
    lazyLazy1Tuple: lazyLazy1Tuple, 
    lazyLazy2Tuple: lazyLazy2Tuple
};
