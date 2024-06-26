import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/base/_typography.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
