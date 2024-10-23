import React from "react";
import "../css/Galery.css";
import galery1 from "../assets/images/galery1.webp";
import galery2 from "../assets/images/galery2.webp";
import galery3 from "../assets/images/galery3.webp";
import galery4 from "../assets/images/galery4.webp";
import galery5 from "../assets/images/galery5.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Galery() {

    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);

  return (
    <>
      <div id="galery" className="galery-section pt-5 pb-5">
        <h1 className="text-center" data-aos="fade-up">
          <span>Berbagi</span> Galery
        </h1>
        <div className="galery-container container">
          <div className="row">
            <div className="col-lg-4 img-container">
              <div
                data-aos="zoom-out" className="img-box galery-img1"
                style={{
                  backgroundImage: `url(${galery1})`
                }}
              ></div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-6 img-container">
                  <div data-aos="zoom-out" className="img-box galery-img2"  style={{
                  backgroundImage: `url(${galery2})`
                }}>
                   
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 img-container">
                  <div data-aos="zoom-out" className="img-box galery-img3"  style={{
                  backgroundImage: `url(${galery3})`
                }}>
                   
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 img-container">
                  <div data-aos="zoom-out" className="img-box galery-img4"  style={{
                  backgroundImage: `url(${galery4})`
                }}>
                   
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6 img-container">
                  <div data-aos="zoom-out" className="img-box galery-img5"  style={{
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
