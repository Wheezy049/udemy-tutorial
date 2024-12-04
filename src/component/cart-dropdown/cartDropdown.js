import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import Button from "../button/Button";
// import { CartContext } from '../../context/CartContext'
import CartItem from "../cart-item/CartItem";
import { setIsCartOpen } from "../../store/cart/cartAction";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDropdown.style";

function CartDropdown() {
  // const { cartItems } = useContext(CartContext)

  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckout = () => {
    dispatch(setIsCartOpen(false)); 
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems className="cart-item">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
