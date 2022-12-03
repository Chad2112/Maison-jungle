import "./plantItem.css";
import CareScale from "../Utils/CareScale";
import { Link } from "react-router-dom";
function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨:`);
}

function PlantItem({ name, cover, id, light, water }) {
  return (
    <Link to={`/Plants/${id}`} key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={name} onClick={() => handleClick(name)} />
      <h2 className="lmj-plant-name">{name}</h2>

      <CareScale careType="light" scaleValue={light} />
      <CareScale careType="water" scaleValue={water} />
    </Link>
  );
}

export default PlantItem;
