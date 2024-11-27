import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartTotal, selectCartItems } from '../../store/cart/cartSelector'
import './checkout.scss'
// import { CartContext } from '../../context/CartContext'
import CheckoutItem from '../../component/checkout-item/CheckoutItem'

function Checkout() {

//    const { cartItems, total } = useContext(CartContext)
      const cartItems = useSelector(selectCartItems);
      const total = useSelector(selectCartTotal);

  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div  className='header-block'>
                <span>Product</span>
            </div>
            <div  className='header-block'>
                <span>Description</span>
            </div>
            <div  className='header-block'>
                <span>Quantity</span>
            </div>
            <div  className='header-block'>
                <span>Price</span>
            </div>
            <div  className='header-block'>
                <span>Remove</span>
            </div>
        </div>
       {
        cartItems.map((cartItem)=> {
            return(
                <CheckoutItem  key={cartItem.id} cartItem={cartItem} />
            )
        })
       }
       <span className='total'>Total: ${total}</span>
    </div>
  )
}

export default Checkout