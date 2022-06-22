import { configureStore } from "@reduxjs/toolkit";
import reducers from "./example-01/reducers/reducers";

export const store = configureStore({ reducer: reducers });
