import "../css/Home.css";
import hero from "../assets/images/hero.webp";
import mascot from "../assets/images/brk/mascot-cool.webp";
import Icon from "./Icon";
import { FEATURES, HIGHLIGHT } from "../data";

function Home() {
  const pick = HIGHLIGHT.hero;

  return (
    <section id="home" className="hero">
      <span className="contour hero-contour" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill" data-aos="fade-up">
            <Icon name="pin" size={14} /> Sejak 2020 · Peguyangan · Mas Ubud · Sanur
          </span>
          <h1 data-aos="fade-up" data-aos-delay="80">
            Berbagi Ruang <br />
            &amp; <em>Kopi</em>
          </h1>
          <p className="hero-script" data-aos="fade-up" data-aos-delay="140">
            Rumah untuk seluruh <strong>#KawanBerbagi</strong>
          </p>
          <p className="hero-lead" data-aos="fade-up" data-aos-delay="200">
            Ngopi, makan, kerja dan nongkrong — ditemani musik dan
            komunitas. Kopi dari Berbagi Blend, hidangan Nusantara sampai pasta,
            dan suasana yang bikin betah.
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="260">
            <a href="#menu" className="btn btn-dark">
              Lihat Menu <Icon name="arrow" size={16} />
            </a>
            <a href="#lokasi" className="btn btn-soft">
              Cari Lokasi <Icon name="pin" size={16} />
            </a>
          </div>
        </div>

        <div className="hero-media" data-aos="fade-left" data-aos-duration="900">
          <div className="hero-blob">
            <img src={hero} alt="Suasana malam di Berbagi Ruang & Kopi" width="1800" height="891" fetchPriority="high" />
          </div>

          <img src={mascot} alt="" className="hero-mascot" width="420" height="312" />

          <a href="#event" className="hero-chip">
            <span className="hero-chip-icon"><Icon name="music" size={18} /></span>
            <span>
              <strong>Peguyangan Rock City</strong>
              <small>Live music &amp; komunitas</small>
            </span>
          </a>

          <a href="#menu" className="hero-card">
            <img src={pick.img} alt="" />
            <span className="hero-card-body">
              <small className="hero-card-group">{pick.group}</small>
              <strong>{pick.name}</strong>
              <span className="hero-card-foot">
                <span className="price-tag">{pick.price}K</span>
                <span className="hero-card-go"><Icon name="arrow" size={16} /></span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="container">
        <ul className="hero-features">
          {FEATURES.map((f, i) => (
            <li key={f.title} data-aos="fade-up" data-aos-delay={i * 60}>
              <span className="icon-box"><Icon name={f.icon} size={20} /></span>
              <span>
                <strong>{f.title}</strong>
                <small>{f.desc}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
