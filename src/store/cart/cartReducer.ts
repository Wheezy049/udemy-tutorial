import { CartItem } from "./cartType";
import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cartAction";

export type CartState = {
 readonly isCartOpen: boolean;
 readonly cartItems: CartItem[];
}

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if(setIsCartOpen.match(action)){
    return {
      ...state,
      isCartOpen: action.payload ?? false,
    };
  }

  if(setCartItems.match(action)){
    return {
      ...state,
      cartItems: action.payload ?? [],
    };
  }

  return state
  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEM:
    //   return {
    //     ...state,
    //     cartItems: payload,
    //   };
    // case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      // return {
      //   ...state,
      //   isCartOpen: payload,
      // };
  //   default:
  //     return state;
  // }
};
