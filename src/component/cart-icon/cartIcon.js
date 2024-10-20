import React, { useContext } from 'react'
import './cartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { CartContext } from '../../context/CartContext'

function CartIcon() {

     const { isCartOpen, setIsCartOpen, countItem } = useContext(CartContext)

     const toggleCart = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
       <ShoppingIcon className='shopping-icon' />
       <span className='item-count'>{countItem}</span>
    </div>
  )
}

export default CartIcon