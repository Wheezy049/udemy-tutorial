import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES, CartItem } from "./cartType";
import { CategoryItem } from "../categories/categoryType";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if ( existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], productToClear: CartItem): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems =ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEM, CartItem[]>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => 
    createAction(CART_ACTION_TYPES.SET_CART_ITEM, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems)
  // return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};

export const removeItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
  const newCartItems = removeCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const clearItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
  const newCartItems = clearCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));

export const clearCart = () => {
  return setCartItems([])
  // return createAction(CART_ACTION_TYPES.SET_CART_ITEM, []);
};

