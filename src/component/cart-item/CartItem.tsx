import React from "react";
import "./cartItem.scss";

type CartItems = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

type CartItemProps = {
  cartItem: CartItems;
}

function CartItem({ cartItem }: CartItemProps) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
