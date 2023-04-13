import React from "react";
import "./App.css";
// importing the components
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    // He, we have a return method that contains all the components we want to render to the screen.
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
