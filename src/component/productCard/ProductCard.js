import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/cartSelector'
import './productCard.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
// import { CartContext } from '../../context/CartContext'

function ProductCard({product}) {

 const { name, price, imageUrl } = product

  // const { addItemToCart } = useContext(CartContext)
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
           <span className='name'>{name}</span>
           <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default ProductCard