-- Generated by psc-make version 0.5.5
module Data.Monoid.Product where
import Prim ()
import Prelude ()
import Data.Monoid ()
newtype Product  = Product Prim.Number
foreign import runProduct :: Data.Monoid.Product.Product -> Prim.Number
foreign import instance eqProduct :: Prelude.Eq Data.Monoid.Product.Product
foreign import instance ordProduct :: Prelude.Ord Data.Monoid.Product.Product
foreign import instance showProduct :: Prelude.Show Data.Monoid.Product.Product
foreign import instance semigroupProduct :: Prelude.Semigroup Data.Monoid.Product.Product
foreign import instance monoidProduct :: Data.Monoid.Monoid Data.Monoid.Product.Product
