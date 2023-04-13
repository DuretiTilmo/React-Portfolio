import React from "react";

export default function Project() {
  return (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-img-top">
              <div className="card-body">
                <a href="https://github.com/DuretiTilmo/Challenge03">
                  <img
                    className="img-fluid"
                    src={require("../../assets/Projects/Screenshot (10).png")}
                    alt="password generator app"
                  />
                  <i className="fa fa-github"></i>
                </a>
                <p className="img_1">
                  
                  <a href="https://duretitilmo.github.io/Challenge03/">
                    Password Generator
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-img-top">
              <div className="card-body">
                <a href="https://github.com/DuretiTilmo/Module-5-Challenge">
                  <img
                    className="img-fluid"
                    src={require("../../assets/Projects/Screenshot 2023-04-06 151646.png")}
                    alt="work day scheduler app"
                  />
                  <i className="fa fa-github"></i>
                </a>
                <p className="img_1">
                  <a href="https://duretitilmo.github.io/Module-5-Challenge/">
                    Work Day Scheduler
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-img-top">
              <div className="card-body">
                <a href="https://github.com/DuretiTilmo/06-Server-Side-APIs">
                  <img
                    className="img-fluid"
                    src={require("../../assets/Projects/Screenshot 2023-04-06 152044.png")}
                    alt="weather dashboard app"
                  />
                  <i className="fa fa-github"></i>
                </a>
                <p className="img_1">
                  <a href="https://duretitilmo.github.io/06-Server-Side-APIs/">
                    Weather Dashboard
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-img-top">
              <div className="card-body">
                <a href="https://github.com/DuretiTilmo/worldwidenews">
                  <img
                    className="img-fluid"
                    src={require("../../assets/Projects/worldwidenews.png")}
                    alt="news app"
                  />
                  <i className="fa fa-github"></i>
                </a>
                <p className="img_1">
                  <a href="https://hong-f.github.io/worldwidenews/">
                    
                    Worldwide News
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-img-top">
              <div className="card-body">
                <a href="https://github.com/DuretiTilmo/-PWA-Text-Editor">
                  <img
                    className="img-fluid"
                    src={require("../../assets/Projects/Screenshot 2023-04-13 134201.png")}
                    alt="note taker app"
                  />
                  <i className="fa fa-github"></i>
                </a>
                <p className="img_1">
                <a href="https://serene-wave-48978.herokuapp.com/"> 
                Just Another Text Editor
                </a> 
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-img-top">
              <div className="card-body">
                <a href="https://github.com/DuretiTilmo/Challenge04">
                  <img
                    className="img-fluid"
                    src={require("../../assets/Projects/Screenshot 2023-04-13 134651.png")}
                    alt="code quiz app"
                  />
                  <i className="fa fa-github"></i>
                </a>
                <p className="img_1">

                <a href="https://duretitilmo.github.io/Challenge04/">
                Code Quiz
                </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
