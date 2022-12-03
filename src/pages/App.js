import "./App.css";

import Cart from "../components/Cart/Cart";
import ShoppingList from "../components/ShoppingList/shoppingList";
import CareScale from "../components/Utils/CareScale";

import { useState, useEffect } from "react";
function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [activeCategory, setActiveCategory] = useState("");

  return (
    <main className="main">
      <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <CareScale />
    </main>
  );
}

export default App;
