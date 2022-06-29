import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, sendCartData } from "../store/example-03/cart-actions";
import Auth from "./Shop/Auth";
import Layout from "./Shop/Layout";
import Notification from "./Shop/Notification";

let firstRender = {
  first: true,
  second: true,
};
const Example03 = () => {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    // Evita que o componente Notification seja exibido ao entrar na tela!
    if (firstRender.first) {
      firstRender.first = false;
      return;
    } else if (firstRender.second) {
      firstRender.second = false;
      return;
    }

    if (cart.changed) dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {isLoggedIn ? <Layout /> : <Auth />}
    </>
  );
};
export default Example03;
