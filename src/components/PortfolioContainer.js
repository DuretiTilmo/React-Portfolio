import React, { useState } from 'react';
import Navigation from './Navigation';
import Project from './Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
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
