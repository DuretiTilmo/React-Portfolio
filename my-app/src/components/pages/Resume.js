import React from 'react';
const styles = {
  resumeStyle: {
   paddingBottom: '80px',
   margin: '40px',

  },
};
export default function Resume(){
    return (
        <section style={styles.resumeStyle} className="container"> 
            <h2> Resume</h2>
   <ul>
     <p> Download my <a href="resume.pdf" download > resume</a> </p>

    <h5> Front-end Proficiencies</h5>

      <li className="nav-item">HTML</li>
      <li className="nav-item">CSS</li>
      <li className="nav-item">JavaScript</li>
      <li className="nav-item">Jquery</li>
      <li className="nav-item">Bootstrap</li>
      <li className="nav-item">React</li>

      <h5> Back-end Proficiencies</h5>

      <li className="nav-item">APIs</li>
      <li className="nav-item">Node</li>
      <li className="nav-item">Express</li>
      <li className="nav-item">MySQL</li>
      <li className="nav-item">MVC</li>
      <li className="nav-item">ORM</li>


   </ul>


</section>
    )};