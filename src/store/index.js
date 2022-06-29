import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";
import authSlice from "./example-03/auth-slice";
import cartSlice from "./example-03/cart-slice";
import uiSlice from "./example-03/ui-slice";

export const store = configureStore({
  reducer: {
    reducers,
    // aqui meu store tem acesso a todas as funcionalidades do reducer auth
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});
