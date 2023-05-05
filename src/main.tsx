import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import "./assets/CSS/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/CSS/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
