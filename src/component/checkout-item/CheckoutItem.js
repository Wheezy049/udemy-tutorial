import React, { useContext } from 'react'
import './checkoutItem.scss'
import { CartContext } from '../../context/CartContext'

function CheckoutItem({cartItem}) {
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItem, addItemToCart, removeFromCart } = useContext(CartContext)

    const clearCartHandler = () => clearItem(cartItem);

    const addItemHandler = () => addItemToCart(cartItem)
    const removeCartHandler = () => removeFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
       <div className='image-container'>
          <img src={imageUrl} alt={`${name}`} />
       </div>
       <span className='name'>{name}</span>
       <span className='quantity'>
        <div className='arrow' onClick={removeCartHandler}>&#10094;</div>
         <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
        </span>
       <span className='price'>{price}</span>
       <div className='remove-button' onClick={clearCartHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem