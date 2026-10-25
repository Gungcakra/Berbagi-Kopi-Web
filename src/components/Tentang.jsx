import about from "../assets/images/about-photo.webp";
import Icon from "./Icon";
import { EVENTS, LINKS } from "../data";
import "../css/Tentang.css";

const POINTS = [
  "Kopi dari Berbagi Blend, Arabica & Robusta",
  "Hidangan Nusantara, rice bowl, toast & spaghetti",
  "Ruang co-working dengan Wi-Fi gratis",
  "Intimate Music Gigs & event kreatif",
];

export const Tentang = () => {
  return (
    <section id="tentang" className="section tentang">
      <div className="container tentang-grid">
        <article className="card about-card" data-aos="fade-up">
          <div className="about-copy">
            <span className="eyebrow">Tentang Kami</span>
            <h2>
              Berbagi <em>Cerita</em>
            </h2>
            <p>
              Berbagi Ruang &amp; Kopi adalah kafe nyaman yang terletak di Desa
              Peguyangan, Denpasar, Bali. Di sini, kamu bisa menikmati kopi segar
              yang baru diseduh, serta beragam hidangan lezat. Kami juga sering
              mengadakan acara seru, dan dengan staf ramah yang siap melayani,
              kamu pasti akan merasa seperti di rumah sendiri. Kini Berbagi juga
              hadir di Mas, Ubud dan Sanur.
            </p>
            <blockquote className="about-quote">
              Berbagi Ruang &amp; Kopi <em>(Sejak 2020)</em> memberikan wadah untuk
              semuanya berekspresi secara bebas.
            </blockquote>
            <ul className="check-list">
              {POINTS.map((p) => (
                <li key={p}>
                  <span><Icon name="check" size={13} strokeWidth={3} /></span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#galeri" className="btn btn-dark btn-sm">
              Lihat Galeri <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="about-media">
            <img src={about} alt="Pengunjung bersantai di Berbagi Ruang & Kopi" loading="lazy" width="682" height="832" />
          </div>
        </article>

        <article className="card events-card" data-aos="fade-up" data-aos-delay="120">
          <header className="card-head">
            <h3>Panggung Berbagi</h3>
            <a href={LINKS.panggung} target="_blank" rel="noreferrer" className="link-more">
              <Icon name="instagram" size={14} /> @berbagipanggung
            </a>
          </header>
          <ul className="event-list">
            {EVENTS.map((ev) => (
              <li key={ev.title} className="event-item">
                <span className="event-badge">
                  <Icon name={ev.icon} size={20} />
                  <small>{ev.tag}</small>
                </span>
                <span className="event-body">
                  <strong>{ev.title}</strong>
                  <small>{ev.desc}</small>
                </span>
                <img src={ev.img} alt="" loading="lazy" />
              </li>
            ))}
          </ul>
          <a href="#event" className="link-more events-more">
            Event &amp; reservasi tempat <Icon name="arrow" size={14} />
          </a>
        </article>
      </div>
    </section>
  );
};
