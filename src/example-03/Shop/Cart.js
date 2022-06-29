import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/example-03/cart-slice";

const Cart = () => {
  const { totalQuantity, showCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(cartAction.setShowCart(showCart));
  }

  return (
    <div className="cartIcon" onClick={handleClick}>
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
