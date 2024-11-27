import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectcartCount, selectIsCartOpen } from '../../store/cart/cartSelector'
import { setIsCartOpen } from '../../store/cart/cartAction'
// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
// import { CartContext } from '../../context/CartContext'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cartIcon.style'

function CartIcon() {

    //  const { isCartOpen, setIsCartOpen, countItem } = useContext(CartContext)

    const dispatch = useDispatch();
    const cartCount = useSelector(selectcartCount);
    const isCartOpen = useSelector(selectIsCartOpen);


     const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCart}>
       <ShoppingIcon />
       <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon