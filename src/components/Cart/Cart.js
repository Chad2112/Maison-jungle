import "./Cart.css";
import { useState, useEffect } from "react";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0);
  useEffect(() => {});

  function handleRemove(name) {
    const newList = cart.filter((plant) => plant.name !== name);

    updateCart(newList);
  }

  console.log(cart);
  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-closed" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          {cart.map(({ name, price, amount, cover, id }, index) => (
            <div className="lmj-cart-item" key={id}>
              {" "}
              <img src={cover} alt="Plante" className="lmj-cart-img"></img>
              <div> {name} </div>
              <div>
                {" "}
                {price}€ x {amount}
              </div>
              <button className="lmj-cart-remove" onClick={() => handleRemove(name)}>
                Supprimer
              </button>
            </div>
          ))}
          <h3>Total : {total} €</h3>
          <button className="lmj-cart-vider" onClick={() => updateCart([])}>
            Vider le Panier
          </button>
        </div>
      ) : (
        <div>Votre Panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-contain">
      <button className="lmj-cart-open" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;

// ReactDOM.render(<Cart />, document.getElementById("root"));
