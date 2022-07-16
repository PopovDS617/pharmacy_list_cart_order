import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Drugs from "./components/Drugs/Drugs";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Drugs />
      </main>
    </CartProvider>
  );
}

export default App;
