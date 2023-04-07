import React from "react";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card-img-top">
            <div className="card-body">
              <p className="img_1">
                <img
                  className="img"
                  src="../assets/Screenshot (10).png"
                  alt=""
                />
                <a href="https://duretitilmo.github.io/Challenge03/"> </a>
                <a href="https://github.com/DuretiTilmo/Challenge03">
                  Password Generator
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-img-top">
          <div className="card-body">
             <p className="img_2">
              <img
              className="img"
              src="../assets/Screenshot 2023-04-06 151646.png"
              alt=""
            />
           
              <a href="https://duretitilmo.github.io/Module-5-Challenge/"> </a>
              <a href="https://github.com/DuretiTilmo/Module-5-Challenge">
                Work Day Scheduler
              </a>
            </p>
          </div>
        </div>
        </div>
        <div className="col-4">
          <div className="card-img-top">
          <div className="card-body">
            <p className="img_3">
              <img
              className="img"
              src="../assets/Screenshot 2023-04-06 152044.png"
              alt=""
            />
            
              <a href="https://duretitilmo.github.io/06-Server-Side-APIs/"> </a>
              <a href="https://github.com/DuretiTilmo/06-Server-Side-APIs">
                Weather Dashboard
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
      <div className="col-4">
      <div className="card-img-top">
      <div className="card-body">
         <p className="img_4">
        <img
          className="img"
          src={`https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/`}
          alt=""
        />
       
          <a href="https://hong-f.github.io/worldwidenews/"> </a>
          <a href="https://github.com/DuretiTilmo/worldwidenews">
            Worldwide News
          </a>
        </p>
      </div>
      </div>
     </div>

     <div className="col-4">
      <div className="card-img-top">
      <div className="card-body">
        <p className="img_5">
        <img
          className="img"
          src="/assets/Screenshot_20230125_125135.png"
          alt=""
        />
        
          <a href="https://github.com/DuretiTilmo/Team-Profile-Generator">
            Team Profile Generator
          </a>
        </p>
      </div>
      </div>
      </div>

      <div className="col-4">
      <div className="card-img-top">
      <div className="card-body">
      <p className="img_6">
        <img
          className="img"
          src="/assets/Screenshot_20230131_111433.png"
          alt=""
        />
       
          <a href="https://github.com/DuretiTilmo/Note-Taker">Note Taker</a>
        </p>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

// export default Project;
