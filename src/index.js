import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* O provider é o responsável por disponibilizar a Store para toda
    a aplicação */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
