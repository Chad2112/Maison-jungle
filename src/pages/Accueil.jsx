import "./Accueil.css";
import Navigation from "../components/Nav/Nav";
import Produits from "../assets/Produits.jpg";
import Tracabilite from "../assets/Tracabilite.jpg";
import Entreprise from "../assets/Entreprises.jpg";
function Accueil() {
  return (
    <main className="Accueil">
      <Navigation />

      <div className="Accueil-content">
        <div className="Accueil-box-img-first">
          <img src={Produits} className="Accueil-img"></img>
        </div>
        <div className="Accueil-text-content-first">
          <h2 className="Accueil-title">Nos Produits</h2>
          <p className="Accueil-text">
            Un wiki peut être configuré pour permettre la modification des pages à tous les visiteurs, ou aux seuls visiteurs inscrits. Dans le cas des wikis qui sont
            complètement ouverts au public, diverses procédures techniques et sociales sont mises en œuvre pour limiter et annuler les modifications indésirables. Lorsqu'un
            wiki autorise des visiteurs anonymes à modifier les pages, c'est l'adresse IP de ces derniers qui les identifie ; les utilisateurs inscrits peuvent quant à eux se
            connecter sous leur nom d'utilisateur.
          </p>
        </div>
      </div>
      <div className="Accueil-content">
        <div className="Accueil-text-content-second">
          <h2 className="Accueil-title">Traçabilité</h2>
          <p className="Accueil-text">
            Un wiki peut être configuré pour permettre la modification des pages à tous les visiteurs, ou aux seuls visiteurs inscrits. Dans le cas des wikis qui sont
            complètement ouverts au public, diverses procédures techniques et sociales sont mises en œuvre pour limiter et annuler les modifications indésirables. Lorsqu'un
            wiki autorise des visiteurs anonymes à modifier les pages, c'est l'adresse IP de ces derniers qui les identifie ; les utilisateurs inscrits peuvent quant à eux se
            connecter sous leur nom d'utilisateur.
          </p>
        </div>
        <div className="Accueil-box-img-second">
          <img src={Tracabilite} className="Accueil-img"></img>
        </div>
      </div>
      <div className="Accueil-content">
        <div className="Accueil-box-img-third">
          <img src={Entreprise} className="Accueil-img"></img>
        </div>
        <div className="Accueil-text-content-third">
          <h2 className="Accueil-title">La Maison Jungle</h2>
          <p className="Accueil-text">
            Un wiki peut être configuré pour permettre la modification des pages à tous les visiteurs, ou aux seuls visiteurs inscrits. Dans le cas des wikis qui sont
            complètement ouverts au public, diverses procédures techniques et sociales sont mises en œuvre pour limiter et annuler les modifications indésirables. Lorsqu'un
            wiki autorise des visiteurs anonymes à modifier les pages, c'est l'adresse IP de ces derniers qui les identifie ; les utilisateurs inscrits peuvent quant à eux se
            connecter sous leur nom d'utilisateur.
          </p>
        </div>
      </div>
    </main>
  );
}
export default Accueil;
