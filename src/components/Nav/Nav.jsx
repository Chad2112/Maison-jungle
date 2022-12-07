import "./Nav.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className="lmj-nav">
      <Link className="lmj-nav-link" to="/Maison-jungle">
        Acceuil
      </Link>
      <Link className="lmj-nav-link" to="/Maison-jungle/produits">
        Nos plantes
      </Link>
      <Link className="lmj-nav-link" to="/Maison-jungle/Contact">
        Contact
      </Link>
    </nav>
  );
}
export default Navigation;
