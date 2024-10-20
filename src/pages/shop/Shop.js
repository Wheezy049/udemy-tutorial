import React, { useContext } from 'react'
 import { ProductContext } from '../../context/productContext'
import ProductCard from '../../component/productCard/ProductCard'
import './shop.scss'

function Shop() {

     const { products } = useContext(ProductContext)

  return (
    <div className='products-container'>
        {
            products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default Shop