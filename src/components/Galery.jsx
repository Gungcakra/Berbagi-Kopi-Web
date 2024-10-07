import React from "react";
import "../css/Galery.css";
import galery1 from "../assets/images/galery1.png";
import galery2 from "../assets/images/galery2.png";
import galery3 from "../assets/images/galery3.png";
import galery4 from "../assets/images/galery4.png";
import galery5 from "../assets/images/galery5.png";

function Galery() {
  return (
    <>
      <div className="galery-section pt-5">
        <h1 className="text-center">
          Galery <span>Berbagi</span>
        </h1>
        <div className="galery-container container">
          <div className="row">
            <div className="col-lg-4 img-container">
              <div
                className="img-box galery-img1"
                style={{
                  backgroundImage: `url(${galery1})`
                }}
              ></div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-6 img-container">
                  <div className="img-box galery-img2"  style={{
                  backgroundImage: `url(${galery2})`
                }}>
                   
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 img-container">
                  <div className="img-box galery-img3"  style={{
                  backgroundImage: `url(${galery3})`
                }}>
                   
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 img-container">
                  <div className="img-box galery-img4"  style={{
                  backgroundImage: `url(${galery4})`
                }}>
                   
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6 img-container">
                  <div className="img-box galery-img5"  style={{
                  backgroundImage: `url(${galery5})`
                }}>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Galery;
