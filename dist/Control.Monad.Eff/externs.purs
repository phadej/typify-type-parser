-- Generated by psc-make version 0.5.5
module Control.Monad.Eff where
import Prim ()
import Prelude ()
type Pure a = forall e. Control.Monad.Eff.Eff e a
foreign import data Eff :: # ! -> * -> *
foreign import foreachE :: forall e a. [a] -> (a -> Control.Monad.Eff.Eff e Prelude.Unit) -> Control.Monad.Eff.Eff e Prelude.Unit
foreign import forE :: forall e. Prim.Number -> Prim.Number -> (Prim.Number -> Control.Monad.Eff.Eff e Prelude.Unit) -> Control.Monad.Eff.Eff e Prelude.Unit
foreign import whileE :: forall e a. Control.Monad.Eff.Eff e Prim.Boolean -> Control.Monad.Eff.Eff e a -> Control.Monad.Eff.Eff e Prelude.Unit
foreign import untilE :: forall e. Control.Monad.Eff.Eff e Prim.Boolean -> Control.Monad.Eff.Eff e Prelude.Unit
foreign import runPure :: forall a. Control.Monad.Eff.Pure a -> a
foreign import bindE :: forall e a b. Control.Monad.Eff.Eff e a -> (a -> Control.Monad.Eff.Eff e b) -> Control.Monad.Eff.Eff e b
foreign import returnE :: forall e a. a -> Control.Monad.Eff.Eff e a
foreign import instance functorEff :: Prelude.Functor (Control.Monad.Eff.Eff e)
foreign import instance applyEff :: Prelude.Apply (Control.Monad.Eff.Eff e)
foreign import instance applicativeEff :: Prelude.Applicative (Control.Monad.Eff.Eff e)
foreign import instance bindEff :: Prelude.Bind (Control.Monad.Eff.Eff e)
foreign import instance monadEff :: Prelude.Monad (Control.Monad.Eff.Eff e)
