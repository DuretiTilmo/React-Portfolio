// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Navigation from './components/Navigation';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/pages/Footer';

function App() {  
    return ( 
        <div> 
        <div className="container"> 
<PortfolioContainer />
</div>
             <Footer />
             
             </div>
);
}
export default App;
