import React, { useContext } from 'react'
import Button from '../button/Button'
import { CartContext } from '../../context/CartContext'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cartDropdown.style'

function CartDropdown() {

  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()

  const goToCheckout = () =>{
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
        <CartItems className='cart-item'>
          { cartItems.length ? (
            cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))):(
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
          }
        </CartItems>
        <Button onClick={goToCheckout}>Go to Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown