import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartAction } from "./../../store/example-03/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartAction.removeToCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartAction.addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
