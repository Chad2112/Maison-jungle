import "./ShoppingList.css";
import { plantList } from "../../datas/plantList.js";
import PlantItem from "../PlantItem/PlantItem";
import Categories from "../Utils/Categories";

function ShoppingList({ cart, updateCart, activeCategory, setActiveCategory }) {
  const categories = plantList.reduce((acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)), []);
  const isBestSale = plantList.reduce((acc, plant) => (acc.includes(plant.isBestSale) ? acc : acc.concat(plant.isBestSale)), []);
  console.log(isBestSale);

  return (
    <div className="lmj-shopping-list">
      <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />

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
