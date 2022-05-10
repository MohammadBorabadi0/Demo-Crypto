import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context 
import CryptoProvider from "./Provider/context/crypto_context";
import FilterProvider from "./Provider/context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CryptoProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </CryptoProvider>
);
