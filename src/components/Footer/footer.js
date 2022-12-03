import { useState } from "react";
import "./Footer.css";

function Footer() {
  function checkMail() {
    if (!inputValue.includes("@")) {
      alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`);
    }
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">Pour les passionné·e·s de plantes 🌿🌱🌵</div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <form>
        <input type="mail" name="input_mail" placeholder="Entrez votre adresse mail" onChange={handleInput} onBlur={checkMail} value={inputValue} />
      </form>
    </footer>
  );
}

export default Footer;
