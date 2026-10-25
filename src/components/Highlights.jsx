import "../css/Highlights.css";
import logoBadge from "../assets/images/brk/logo-badge-white.webp";
import Icon from "./Icon";
import { HIGHLIGHT, REASONS } from "../data";

function Highlights() {
  const sig = HIGHLIGHT.signature;

  return (
    <section className="section highlights">
      <div className="container bento">
        <article className="card bento-menu" data-aos="fade-up">
          <header className="card-head">
            <h3><Icon name="coffee" size={20} /> Menu Kami</h3>
            <a href="#menu" className="link-more">Lihat semua <Icon name="arrow" size={14} /></a>
          </header>
          <div className="mini-grid">
            {HIGHLIGHT.preview.map((item) => (
              <a href="#menu" key={item.name} className="mini-item">
                <span className="mini-thumb">
                  <img src={item.img} alt="" loading="lazy" />
                </span>
                <strong>{item.name}</strong>
                <small>
                  {item.note && <em>{item.note} </em>}
                  <b>{item.price}K</b>
                </small>
              </a>
            ))}
          </div>
        </article>

        <article className="card bento-promo sunburst sunburst-origin-right" data-aos="fade-up" data-aos-delay="100">
          <img src={logoBadge} alt="" className="promo-watermark" />
          <div className="promo-copy">
            <span className="pill pill-dark"><Icon name="iced" size={14} /> Signature Berbagi</span>
            <h3>Racikan khas <em>Berbagi.</em></h3>
            <ul className="promo-list">
              {sig.items.map((name) => <li key={name}>{name}</li>)}
            </ul>
            <a href="#menu" className="btn btn-light btn-sm">
              Mulai 28K <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="promo-media">
            <img src={sig.img} alt="Minuman Signature Berbagi" loading="lazy" />
          </div>
        </article>

        <article className="card bento-why" data-aos="fade-up" data-aos-delay="200">
          <header className="card-head">
            <h3>Kenapa Berbagi?</h3>
          </header>
          <ul className="why-list">
            {REASONS.map((r) => (
              <li key={r.title}>
                <span className="icon-box"><Icon name={r.icon} size={20} /></span>
                <span>
                  <strong>{r.title}</strong>
                  <small>{r.desc}</small>
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
