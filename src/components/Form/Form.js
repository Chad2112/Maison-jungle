// import "./form.css";
// import { useState } from "react";

// function handleSubmit(e) {
//   e.preventDefault();
//   alert(e.target["my_input"].value);
// }

// function Form() {
//   function checkValue(value) {
//     if (!value.includes("f")) {
//       setInputValue(value);
//     } else {
//       alert("Vous n'avez pas le droit d'utiliser la lettre f");
//     }
//   }
//   const [inputValue, setInputValue] = useState("Posez votre question ici");
//   return (
//     <form onSubmit={handleSubmit} className="lmj-form">
//       <input type="text" name="my_input" defaultValue="Tapez votre texte" />
//       <textarea value={inputValue} onChange={(e) => checkValue(e.target.value)} />
//       <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
//       <button type="submit">Entrer</button>
//     </form>
//   );
// }

// // function questionForm() {
// //   const [inputValue, setInputValue] = useState("Posez votre question ici");

// //   return (
// //     <div>
// //       <textarea value={inputValue} onChange={(e) => setInputValue(e.target).value} />
// //     </div>
// //   );
// // }

// export default Form;
