import Navbar from "./NavBar"
import "../css/Home.css"
import capucino from '../assets/images/capucino.png'
function Home() { 
    return(
        <>
            
                    <Navbar/>
                    <section class="home-section">
                        <div class="overlay"></div> 

                        <div class="container content">
                            <div class="row">
                                <div class="col-md-6 d-flex flex-column align-items-center">
                                    <h1 class="text-white text-center fw-bold">Berbagi Ruang & Kopi</h1>
                                    <h2 className="text-white text-center">Bersuka Ria Bersama <strong>#KawanBerbagi</strong></h2>
                                    <a href="" className="btn-menu text-center text-white">Lihat Menu</a>
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