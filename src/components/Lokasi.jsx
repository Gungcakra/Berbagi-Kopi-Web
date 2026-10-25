import { useState } from "react";
import "../css/Lokasi.css";
import kopi from "../assets/images/kopi.png";
import logoBadge from "../assets/images/brk/logo-badge-white.webp";
import mascot from "../assets/images/brk/mascot-nervous.webp";
import Icon from "./Icon";
import { LOCATIONS, LINKS } from "../data";

// Keyless Google Maps embed centred on the location's pin
const embedUrl = (coords) => `https://maps.google.com/maps?q=${coords}&z=16&output=embed`;

function Lokasi() {
  const [activeId, setActiveId] = useState(LOCATIONS[0].id);
  const active = LOCATIONS.find((l) => l.id === activeId);

  return (
    <section id="lokasi" className="section lokasi">
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="eyebrow">Lokasi</span>
          <h2>
            Tiga rumah untuk <em>#KawanBerbagi</em>
          </h2>
          <p>Pilih yang paling dekat, lalu mampir untuk berbagi ruang &amp; kopi.</p>
        </header>

        <div className="lokasi-grid">
          <div className="loc-list" role="tablist" aria-label="Pilih lokasi" data-aos="fade-up">
            {LOCATIONS.map((loc, i) => (
              <div
                key={loc.id}
                className={`loc-card ${loc.id === activeId ? "is-active" : ""}`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={loc.id === activeId}
                  className="loc-select"
                  onClick={() => setActiveId(loc.id)}
                >
                  <span className="loc-num">0{i + 1}</span>
                  <img src={loc.img} alt="" className="loc-thumb" loading="lazy" />
                  <span className="loc-body">
                    <strong>{loc.name}</strong>
                    <small>{loc.address}</small>
                  </span>
                </button>
                <a href={loc.maps} target="_blank" rel="noreferrer" className="loc-maps">
                  Buka di Maps <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="card loc-map" data-aos="fade-up" data-aos-delay="100">
            <iframe
              key={active.id}
              title={`Peta Berbagi Ruang & Kopi ${active.name}`}
              src={embedUrl(active.coords)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="loc-map-label">
              <Icon name="pin" size={16} />
              <span>
                <strong>Berbagi {active.name}</strong>
                <small>{active.city}, Bali</small>
              </span>
            </div>
          </div>
        </div>

        <article className="card invite-card sunburst sunburst-origin-right" data-aos="fade-up">
          <img src={logoBadge} alt="" className="invite-watermark" />
          <div className="invite-copy">
            <span className="eyebrow eyebrow-light">#KawanBerbagi</span>
            <h3>
              Yuk, mampir dan nikmati secangkir kopi <em>bareng kami!</em>
            </h3>
            <div className="invite-actions">
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-light">
                <Icon name="whatsapp" size={18} /> Chat WhatsApp
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Icon name="instagram" size={18} /> @berbagikopihub
              </a>
            </div>
          </div>
          <div className="invite-art">
            <img src={kopi} alt="" className="invite-cup" loading="lazy" />
            <img src={mascot} alt="" className="invite-mascot" loading="lazy" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Lokasi;
