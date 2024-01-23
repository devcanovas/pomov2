import React from "react";
import ReactDOM from "react-dom/client";
import LayoutRouter from "./layout";
import "normalize.css";
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <LayoutRouter />
  </React.StrictMode>,
);
