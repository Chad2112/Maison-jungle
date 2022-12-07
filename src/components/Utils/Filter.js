import "./Filter.css";
import { useState } from "react";

function Categories({ setActiveCategory, categories, activeCategory, PriceFilter, setPriceFilter }) {
  const [filterOpen, setFilterOpen] = useState(false);

  return filterOpen ? (
    <div className="lmj-categories">
      <select value={PriceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="lmj-categories-select">
        <option value="">Prix</option>

        <option value="Prix croissant"> Prix croissant</option>
        <option value="Prix Décroissant"> Prix Décroissant</option>
      </select>
      <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="lmj-categories-select">
        <option value="">Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        className="lmj-cart-rein"
        onClick={() => {
          setActiveCategory("");
          setPriceFilter("");
        }}
      >
        Réinitialiser
      </button>
    </div>
  ) : (
    <div className="lmj-btn-filter">
      <button className="lmj-open-filter" onClick={() => setFilterOpen(true)}>
        Filtre
      </button>
    </div>
  );
}

export default Categories;
