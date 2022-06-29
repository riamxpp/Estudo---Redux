import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

import { useSelector } from "react-redux/es/hooks/useSelector";

const CartItems = () => {
  const { itemsList } = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemsList.map((item) => (
          <li key={item.id}>
            <CartItem
              name={item.name}
              quantity={item.quantity}
              total={item.totalPrice}
              price={item.price}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
