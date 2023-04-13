import React, { useState } from 'react';
//importing our components
import Navigation from './Navigation/index';
import Project from './Project/index';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

//  A state variable 'currentPage' is declared using 'useState'and then update the page by 'setCurrentPage' method
export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState('About');
// render 'contact' page if currentPage is contact
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    // render 'project' page if currentPage is project
    if (currentPage === 'Project') {
      return <Project />;
    }
    // render 'about' page if currentPage is about
    if (currentPage === 'About') {
      return <About />;
    }
    // render 'resume' page if currentPage is resume
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
