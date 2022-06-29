import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-92924-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = res.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      dispatch(cartAction.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "Send request to database failed",
          type: "error",
          open: true,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        message: "warning",
        type: "warning",
        open: true,
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-http-92924-default-rtdb.firebaseio.com/cartItems.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      const data = await res.json();
      console.log(data);

      dispatch(
        uiActions.showNotification({
          message: "Send request to database sucessfully",
          type: "sucess",
          open: true,
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "send request failed",
          type: "error",
          open: true,
        })
      );
    }
  };
};
