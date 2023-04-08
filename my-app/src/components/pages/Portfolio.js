import React from "react";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card-img-top">
            <div className="card-body">
                <a href="https://github.com/DuretiTilmo/Challenge03">
                
            
                <img
                  className="img"
                  src={require('../../assets/Screenshot (10).png' )}
                  alt=""
                  />  <i class='fa fa-github'></i> </a> 
                <p className="img_1">  <a href="https://duretitilmo.github.io/Challenge03/">
               Password Generator </a> 
                
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-img-top">
          <div className="card-body">
               <a href="https://github.com/DuretiTilmo/Module-5-Challenge">
              
              <img
              className="img"
              src={require('../../assets/Screenshot 2023-04-06 151646.png')}
              alt=""
            /> <i class='fa fa-github'></i>
            </a>
              <p className="img_1">
                <a href="https://duretitilmo.github.io/Module-5-Challenge/"> 
                  Work Day Scheduler
              </a>
            
            </p>
          </div>
        </div>
        </div>
        <div className="col-4">
          <div className="card-img-top">
          <div className="card-body">
           <a href="https://github.com/DuretiTilmo/06-Server-Side-APIs">
             
           
              <img
              className="img"
              src={require('../../assets/Screenshot 2023-04-06 152044.png')}
              alt=""
            />  <i class='fa fa-github'></i> 
             </a>
              <p className="img_1">
              <a href="https://duretitilmo.github.io/06-Server-Side-APIs/">    
                 Weather Dashboard</a>
             
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
      <div className="col-4">
      <div className="card-img-top">
      <div className="card-body">
           <a href="https://github.com/DuretiTilmo/worldwidenews">
          
            
      
        <img
          className="img"
          src={require('../../assets/worldwidenews.png')}
          alt=""
        />   <i class='fa fa-github'></i>
         </a>
        <p className="img_1">
          <a href="https://hong-f.github.io/worldwidenews/">  Worldwide News </a>
       
        </p>
      </div>
      </div>
     </div>

     <div className="col-4">
      <div className="card-img-top">
      <div className="card-body">
          <a href="https://github.com/DuretiTilmo/Team-Profile-Generator">
           
      
        <img
          className="img"
          src={require('../../assets/Screenshot_20230125_125135.png')}
          alt=""
        />   <i class='fa fa-github'></i>  
        </a>
         <p className="img_1">
        Team Profile Generator   
        </p>
      </div>
      </div>
      </div>

      <div className="col-4">
      <div className="card-img-top">
      <div className="card-body">
           <a href="https://github.com/DuretiTilmo/Note-Taker">
       
       
        <img
          className="img"
          src={require('../../assets/Screenshot_20230131_111433.png')}
          alt=""
        />  <i class='fa fa-github'></i>   
        </a> 
          <p className="img_1">
            Note Taker
        </p>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

// export default Project;
