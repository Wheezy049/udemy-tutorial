import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./checkoutItem.scss";
// import { CartContext } from '../../context/CartContext'
import { selectCartItems } from "../../store/cart/cartSelector";
import {
  removeItemToCart,
  clearItemToCart,
  addItemToCart,
} from "../../store/cart/cartAction";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // const { clearItem, addItemToCart, removeFromCart } = useContext(CartContext)

  const clearCartHandler = () => dispatch(clearItemToCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeCartHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearCartHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
