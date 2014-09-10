-- Generated by psc-make version 0.5.5
module Data.Monoid where
import Prim ()
import Prelude ()
import Data.Array ()
import Data.Maybe ()
class (Prelude.Semigroup m) <= Monoid m where
  mempty :: m
foreign import instance monoidString :: Data.Monoid.Monoid Prim.String
foreign import instance monoidArray :: Data.Monoid.Monoid [a]
foreign import instance monoidUnit :: Data.Monoid.Monoid Prelude.Unit
foreign import instance monoidArr :: (Data.Monoid.Monoid b) => Data.Monoid.Monoid (a -> b)
foreign import instance monoidMaybe :: (Prelude.Semigroup a) => Data.Monoid.Monoid (Data.Maybe.Maybe a)
