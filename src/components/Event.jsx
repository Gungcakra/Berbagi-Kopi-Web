import "../css/Event.css";
import mascot from "../assets/images/brk/mascot-cheers.webp";
import Icon from "./Icon";
import { STAGE_PHOTOS, VENUES, LINKS } from "../data";
import pamungkas from "../assets/images/brk/event-pamungkas.webp";

function Event() {
  return (
    <section id="event" className="section event">
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="eyebrow">Berbagi Panggung</span>
          <h2>
            Musik &amp; <em>komunitas</em>
          </h2>
          <p>
            Sebuah ciri khas yang ingin kami salurkan lewat musik dan
            komunitas — wadah untuk semuanya berekspresi secara bebas.
          </p>
        </header>

        <article className="stage sunburst sunburst-origin-left" data-aos="fade-up">
          <div className="stage-copy">
            <span className="pill pill-dark"><Icon name="music" size={14} /> Live di Peguyangan</span>
            <h3>
              Peguyangan <br />Rock City <em>2024</em>
            </h3>
            <p>Bersama Danilla, Feast, Pamungkas &amp; The Panturas.</p>
            <a href={LINKS.panggung} target="_blank" rel="noreferrer" className="btn btn-light btn-sm">
              <Icon name="instagram" size={16} /> @berbagipanggung
            </a>
            <img src={mascot} alt="" className="stage-mascot" loading="lazy" />
          </div>
          <div className="stage-photos">
            <figure className="stage-main">
              <img src={pamungkas} alt="Pamungkas di Peguyangan Rock City" loading="lazy" />
              <figcaption>Pamungkas</figcaption>
            </figure>
            {STAGE_PHOTOS.map((p) => (
              <figure key={p.caption}>
                <img src={p.src} alt={`${p.caption} di Peguyangan Rock City`} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </article>

        <div className="venues">
          {VENUES.map((v, i) => (
            <article key={v.id} className="card venue" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="venue-media">
                <img src={v.img} alt={v.title} loading="lazy" />
                <img src={v.thumb} alt="" className="venue-thumb" loading="lazy" />
              </div>
              <div className="venue-body">
                <h3>{v.title}</h3>
                <span className="price-tag"><Icon name="smile" size={14} /> {v.capacity}</span>
                <p>{v.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <a href={LINKS.reservasi} target="_blank" rel="noreferrer" className="btn btn-dark">
            <Icon name="whatsapp" size={18} /> Reservasi Tempat
          </a>
          <small>Untuk gathering, wedding &amp; acara lainnya, via WhatsApp</small>
        </div>
      </div>
    </section>
  );
}

export default Event;
