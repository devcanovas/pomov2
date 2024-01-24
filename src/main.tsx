import React from "react";
import ReactDOM from "react-dom/client";
import LayoutRouter from "./layout";
import { Provider } from "react-redux";
import "normalize.css";
import "./index.css";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LayoutRouter />
    </Provider>
  </React.StrictMode>
);
