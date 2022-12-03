import { plantList } from "../datas/plantList";
import { useParams } from "react-router-dom";
import "./Plants.css";
import { useState, useEffect } from "react";
import Cart from "../components/Cart/Cart";

function Plants() {
  const UrlId = useParams();
  const plantsId = UrlId.plantsId;

  let DataPlant = [];

  plantList.forEach((e) => {
    if (e.id === plantsId) {
      DataPlant = [e];
    }
  });

  //   const cover = DataPlant.reduce((acc, loc) => (acc.includes(loc.cover) ? acc : acc.concat(loc.cover)), []);
  //   const description = DataPlant.reduce((acc, loc) => (acc.includes(loc.description) ? acc : acc.concat(loc.description)), []);
  //   const waterComment = DataPlant.reduce((acc, loc) => (acc.includes(loc.waterComment) ? acc : acc.concat(loc.waterComment)), []);
  //   const entretien = DataPlant.reduce((acc, loc) => (acc.includes(loc.entretien) ? acc : acc.concat(loc.entretien)), []);

  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(name, price, cover) {
    const produitExistant = cart.find((plant) => plant.name === name);

    if (produitExistant) {
      const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...cartFilteredCurrentPlant,
        {
          name,
          price,
          cover,
          amount: produitExistant.amount + 1,
        },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1, cover }]);
    }
  }

  return (
    <div className="Product">
      <Cart cart={cart} updateCart={updateCart} />
      {DataPlant.map(({ cover, name, price, description, waterComment, entretien, id }) => (
        <div key={id}>
          <div className="Product-contain">
            <img className="Product-img" src={cover} alt="Plante"></img>
            <div className="Product-btn-price">
              <div className="Product-price">{price}€ </div>

              <button className="Product-add-cart" onClick={() => addToCart(name, price, cover)}>
                Ajouter
              </button>
            </div>
          </div>
          <div className="Product--information">
            <div className="Product-description--contain">
              Description
              <p className="Product-description">{description}</p>
            </div>
            <div className="Product-description--contain">
              Arrosage
              <p className="Product-description">{waterComment}</p>
            </div>
            <div className="Product-description--contain">
              Entretien
              <p className="Product-description">{entretien}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Plants;
