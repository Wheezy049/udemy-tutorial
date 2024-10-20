import { createContext, useState } from "react";
import SHOP_DATA from '../shopData.json'


export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({children}) =>{
     
    const [products, setProducts] = useState(SHOP_DATA)


   return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
}