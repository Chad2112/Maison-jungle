import "./Categories.css";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="lmj-categories-select">
        <option value="">Tous</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button className="lmj-cart-rein" onClick={() => setActiveCategory("")}>
        Réinitialiser
      </button>
    </div>
  );
}

export default Categories;
