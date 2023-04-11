import React from "react";
import "./App.css";
// import Navigation from './components/Navigation';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <PortfolioContainer />
      </div>
      <Footer />
    </div>
  );
}
export default App;
