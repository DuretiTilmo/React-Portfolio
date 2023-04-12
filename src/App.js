import React from "react";
import "./App.css";
// import Navigation from './components/Navigation';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
