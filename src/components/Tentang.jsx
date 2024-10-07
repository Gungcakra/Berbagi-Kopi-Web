import React from "react";
import about from "../assets/images/about.png";
import "../css/Tentang.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Tentang = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
  
    <div className="container tentang d-flex justify-content-center">
    <div className="row">
          <div className="tentang-img col-md-6 d-flex">
            <img className="bg" alt="Bg" src={about} data-aos="zoom-in" />
          </div>
          <div className="tentang-info col-md-6 d-flex justify-content-center flex-column">
            <div className="tentang-info">
            <p className="tentang-title" data-aos="fade-up" data-aos-delay="150">
            <span className="text-wrapper">Berbagi</span>
            <span className="span"> Cerita</span>
          </p>
          <p className="tentang-desk" data-aos="fade-up" data-aos-delay="200">
            Berbagi Ruang &amp; Kopi adalah kafe nyaman yang terletak di Desa Peguyangan, Denpasar, Bali. Di sini, kamu
            bisa menikmati kopi segar yang baru diseduh, serta beragam hidangan lezat seperti rice bowl sapi dan ayam,
            roti panggang, hingga spaghetti. Kami juga sering mengadakan acara seru, mulai dari Intimate Music Gigs
            hingga event kreatif lainnya. Selain itu, kami menyediakan ruang co-working dengan akses Wi-Fi gratis buat
            kamu yang butuh tempat kerja santai. Dengan staf ramah yang siap melayani, kamu pasti akan merasa seperti di
            rumah sendiri. Yuk, mampir dan nikmati secangkir kopi bareng kami!
          </p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};
