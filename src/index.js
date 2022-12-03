import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Banner from "./components/banner/banner";
import Footer from "./components/Footer/footer";
import App from "./pages/App";
import Plants from "./pages/Plants";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Banner />
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Plants/:plantsId" element={<Plants />}></Route>
        {/* <Route path="/Portfolio_React/CV" element={<CV />}></Route>
        <Route path="/Portfolio_React/Contact" element={<Contact />}></Route>
        <Route path="/Portfolio_React/*" element={<Navigate to="/Portfolio_React/" />} /> */}
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
