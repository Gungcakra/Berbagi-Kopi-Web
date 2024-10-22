import Navbar from "./NavBar"
import "../css/Home.css"
import capucino from '../assets/images/capucino.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Home() { 
    const handleScrollToMenu = (event) => {
        event.preventDefault();
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);
    
    return(
        <>
            
                    <Navbar/>
                    <section id="home" class="home-section">
                        <div class="overlay"></div> 

                        <div class="container content">
                            <div class="row">
                                <div class="col-md-6 d-flex flex-column align-items-center">
                                    <h1 data-aos="fade-up" class="text-white text-center fw-bold">Berbagi Ruang & Kopi</h1>
                                    <h2 data-aos="fade-up" data-aos-delay="250" className="text-white text-center">Bersuka Ria Bersama <strong>#KawanBerbagi</strong></h2>
                                    <div className="mt-3" data-aos="fade-up" data-aos-delay="500">

                                    <a  href="#menu" className="btn-menu text-center" onClick={handleScrollToMenu}>Lihat Menu</a>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    {/* <img src={capucino} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    )
 }
 export default Home;