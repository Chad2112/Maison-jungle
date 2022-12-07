import "./Produits.css";

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
  const [PriceFilter, setPriceFilter] = useState("");

  return (
    <main className="main">
      <ShoppingList
        cart={cart}
        updateCart={updateCart}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        PriceFilter={PriceFilter}
        setPriceFilter={setPriceFilter}
      />
      <CareScale />
    </main>
  );
}

export default App;
