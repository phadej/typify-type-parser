-- Generated by psc-make version 0.5.5
module Data.Monoid.Last where
import Prim ()
import Prelude ()
import Data.Maybe ()
import Data.Monoid ()
newtype Last a = Last (Data.Maybe.Maybe a)
foreign import runLast :: forall a. Data.Monoid.Last.Last a -> Data.Maybe.Maybe a
foreign import instance eqLast :: (Prelude.Eq a) => Prelude.Eq (Data.Monoid.Last.Last a)
foreign import instance ordLast :: (Prelude.Ord a) => Prelude.Ord (Data.Monoid.Last.Last a)
foreign import instance showLast :: (Prelude.Show a) => Prelude.Show (Data.Monoid.Last.Last a)
foreign import instance semigroupLast :: Prelude.Semigroup (Data.Monoid.Last.Last a)
foreign import instance monoidLast :: Data.Monoid.Monoid (Data.Monoid.Last.Last a)
