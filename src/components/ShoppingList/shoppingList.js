import "./ShoppingList.css";
import { plantList } from "../../datas/plantList.js";
import PlantItem from "../Card/Card";
import Filter from "../Utils/Filter";
import Navigation from "../Nav/Nav";
import Cart from "../Cart/Cart";

function ShoppingList({ cart, updateCart, activeCategory, setActiveCategory, PriceFilter, setPriceFilter }) {
  const categories = plantList.reduce((acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)), []);

  if (PriceFilter === "Prix croissant") {
    plantList.sort((a, b) => (a.price > b.price ? 1 : -1));

    console.log(plantList);
  } else if (PriceFilter === "Prix Décroissant") {
    plantList.sort((a, b) => (a.price < b.price ? 1 : -1));
  } else {
    plantList.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return (
    <div className="lmj-shopping-list">
      <Navigation />
      <Cart cart={cart} updateCart={updateCart} />
      <Filter PriceFilter={PriceFilter} setPriceFilter={setPriceFilter} categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      <h1 className="lmj-title">Nos plantes</h1>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category, isBestSale }) =>
          !activeCategory || activeCategory === category ? (
            <div className="lmj-card" key={id}>
              <PlantItem cover={cover} name={name} water={water} light={light} price={price} id={id} />
              {isBestSale ? <span className="lmj-best-sale">BEST-SELLERS</span> : null}
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
