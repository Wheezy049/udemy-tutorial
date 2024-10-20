import React, { useContext } from 'react'
import './cartDropdown.scss'
import Button from '../button/Button'
import { CartContext } from '../../context/CartContext'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'

function CartDropdown() {

  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()

  const goToCheckout = () =>{
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-item'>
          {
            cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))
          }
        </div>
        <Button onClick={goToCheckout}>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown