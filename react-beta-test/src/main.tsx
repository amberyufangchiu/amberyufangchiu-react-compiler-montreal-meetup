import React from "react";
import ReactDOM from "react-dom/client";
import App from "./AppNoMemo.tsx";
// import App from "./AppWithMemo.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <p>test</p>
  </React.StrictMode>
);
