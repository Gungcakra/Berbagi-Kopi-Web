import React from "react";
import "../css/Menu.css"
import menuBg from "../assets/images/menu-bg.png"
import kopiIimg from "../assets/images/kopi.png"
function Menu(){
    return (
        <>
            <section className="container-fluid menu-section">
            <div className="menu-bg-mobile"></div>
            <img src={menuBg} alt="" className="menu-bg" />
                <h1 className="text-center menu-title pt-5">Menu <span>Berbagi</span></h1>
                <div className="row menu-container d-flex justify-content-center m-5">
                    {/* Menu List */}
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                    <div className="menu-card col-6 col-md-3 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                        <img src={kopiIimg} alt="" className="menu-img"/>
                        <h1 className="text-center menu-name">Expresso</h1>
                    </div>
                </div>


            </section>
        </>
    )
}
export default Menu;