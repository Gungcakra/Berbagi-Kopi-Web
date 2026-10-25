import { useState, useEffect, useCallback } from "react";
import "../css/Galery.css";
import Icon from "./Icon";
import { GALLERY, LINKS } from "../data";

function Galery() {
  const [open, setOpen] = useState(null);

  const step = useCallback(
    (dir) => setOpen((i) => (i + dir + GALLERY.length) % GALLERY.length),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <section id="galeri" className="section galeri">
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="eyebrow">Galeri</span>
          <h2>
            Momen di <em>Berbagi</em>
          </h2>
          <p>Sudut-sudut favorit, musik di taman, dan obrolan yang nggak ada habisnya.</p>
        </header>

        <div className="galeri-grid">
          {GALLERY.map((g, i) => (
            <button
              key={g.caption}
              type="button"
              className={`galeri-item g${i + 1}`}
              onClick={() => setOpen(i)}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
            >
              <img src={g.src} alt={g.caption} loading="lazy" width={g.w} height={g.h} />
              <span className="galeri-caption">
                {g.caption}
                <Icon name="expand" size={16} />
              </span>
            </button>
          ))}
        </div>

        <div className="section-cta">
          <a href={LINKS.gallery} target="_blank" rel="noreferrer" className="btn btn-soft">
            <Icon name="images" size={18} /> Lihat Lebih Banyak Foto
          </a>
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={GALLERY[open].caption} onClick={() => setOpen(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[open].src} alt={GALLERY[open].caption} />
            <figcaption>
              {GALLERY[open].caption}
              <span>{open + 1} / {GALLERY.length}</span>
            </figcaption>
          </figure>
          <button type="button" className="lb-btn lb-close" aria-label="Tutup" onClick={() => setOpen(null)}>
            <Icon name="close" size={22} />
          </button>
          <button type="button" className="lb-btn lb-prev" aria-label="Sebelumnya" onClick={(e) => { e.stopPropagation(); step(-1); }}>
            <Icon name="chevronLeft" size={24} />
          </button>
          <button type="button" className="lb-btn lb-next" aria-label="Berikutnya" onClick={(e) => { e.stopPropagation(); step(1); }}>
            <Icon name="chevronRight" size={24} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Galery;
