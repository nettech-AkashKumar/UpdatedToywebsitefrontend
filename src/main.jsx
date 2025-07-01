import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.jsx";
import { ProductProvider } from "./context/Products/Product.jsx";
import { CartProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ProductProvider>
      <StrictMode>
        <CartProvider>
          <App />
        </CartProvider>
      </StrictMode>
    </ProductProvider>
  </Provider>
);
