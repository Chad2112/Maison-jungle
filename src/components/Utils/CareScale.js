import sun from "../../assets/sun.svg";
import water from "../../assets/water.svg";
import "../PlantItem/plantItem.css";

const quantity = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? <img src={sun} alt="sun-icon" /> : <img src={water} alt="water-icon" />;

  return (
    <div className="lmj-CareScale">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()} onClick={() => alert(`Cette plante requiert ${quantity[scaleValue]} ${careType === "light" ? "de lumière" : `d'arrosage`}`)}>
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
