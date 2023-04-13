import React from 'react';
// Here we are using object destructuring
function Navigation({ currentPage, handlePageChange}){
    return (
        <section className="container">
        <nav>
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
   // This is a conditional statement that checks to see if the current page is "About". If so, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Project')}
 // This is a conditional statement that checks to see if the current page is "Portfolio".  If so, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
           // This is a conditional statement that checks to see if the current page is "Contact".  If so, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
           // This is a conditional statement that checks to see if the current page is "Resume".  If so, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>

        </nav>
        
        </section>
    )
};

export default Navigation;