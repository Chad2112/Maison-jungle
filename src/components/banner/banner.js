import "./Banner.css";
import logo from "../../assets/logo.png";
import "../../datas/Recommendation";
import Recommendation from "../../datas/Recommendation";

function Banner() {
  const title = "La maison jungle";
  // const currentMonth = new Date().getMonth();
  // const isSpring = currentMonth >= 2 && currentMonth <= 5;
  // const recommendation = isSpring ? <div>C'est le moment de rempoter</div> : <div>Ce n'est pas le moment de rempoter</div>;
  // console.log(currentMonth);
  return (
    <div className="lmj-banner">
      <div className="lmj-banner-row">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>
      </div>
    </div>
  );
}

export default Banner;
