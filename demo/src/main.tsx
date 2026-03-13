import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "@lib/styles/toast.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
