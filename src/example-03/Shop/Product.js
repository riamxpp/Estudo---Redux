import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { cartAction } from "../../store/example-03/cart-slice";

import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addProductToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
