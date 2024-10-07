import React from "react";
import "../css/Menu.css"
import menuBg from "../assets/images/menu-bg.png"
import kopiIimg from "../assets/images/kopi.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Menu(){
    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);
    return (
        <>
            <section className="container-fluid menu-section">
            <div className="menu-bg-mobile"></div>
            <img src={menuBg} alt="" className="menu-bg" />
                <h1 className="text-center menu-title pt-5" data-aos="fade-up">Menu <span>Berbagi</span></h1>
                <div className="row menu-container d-flex justify-content-center m-5">
                    {/* Menu List */}
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div data-aos="zoom-in" className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                </div>


            </section>
        </>
    )
}
export default Menu;