import React, { useContext } from 'react'
// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { CartContext } from '../../context/CartContext'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cartIcon.style'

function CartIcon() {

     const { isCartOpen, setIsCartOpen, countItem } = useContext(CartContext)

     const toggleCart = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleCart}>
       <ShoppingIcon />
       <ItemCount>{countItem}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon