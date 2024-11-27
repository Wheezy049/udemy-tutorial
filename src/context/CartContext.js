import { createContext, useReducer } from "react";


   const addCartItem = (cartItems, productToAdd) => {
    
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id )

      if(existingCartItem){
        return cartItems.map((cartItem) => 
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
      }

      return [...cartItems, {...productToAdd, quantity: 1}]
   }

   const removeCartItem = (cartItems, productToRemove) =>{

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id )

    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => 
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
   }

   const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
  };


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeFromCart: () => {},
    clearItem: () => {}
})

export const CART_ACTION_TYPES = {
  SET_CART_ITEM: 'SET_CART_ITEM',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false
}

const cartReducer = (state, action) =>{
  const { type, payload } = action;

  switch(type){
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return{
        ...state,
        cartItems: payload
      }
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return{
          ...state,
          isCartOpen: payload
        }
      default:
        throw new Error(`Unhandle type ${type} is userReducer`)
  }
}

export const CartProvider = ({children}) =>{
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);

    const [ {cartItems, isCartOpen }, dispatch ] = useReducer(cartReducer, INITIAL_STATE)
    const setCartItems = (item) =>{
      dispatch({type: CART_ACTION_TYPES.SET_CART_ITEM, payload: item})
    }
    const setIsCartOpen = (bool) =>{
      dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool})
    }

   const countItem = cartItems.length
   const total = cartItems.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.price, 0)


     const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
     }

     const removeFromCart = (productToRemove) => {
      setCartItems(removeCartItem(cartItems, productToRemove))
     }

     const clearItem = (productToClear) => {
      setCartItems(clearCartItem(cartItems, productToClear));
    };

    const value  = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, countItem, removeFromCart, clearItem, total} 

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}