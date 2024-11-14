import React, { useContext } from 'react'
import './productCard.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { CartContext } from '../../context/CartContext'

function ProductCard({product}) {

 const { name, price, imageUrl } = product

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

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