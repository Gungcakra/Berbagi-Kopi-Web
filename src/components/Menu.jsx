import { useState } from "react";
import "../css/Menu.css";
import Icon from "./Icon";
import { MENU_TABS, LINKS } from "../data";

const fmt = (v) => (v == null ? "–" : `${v}K`);

// Consecutive groups of the same kind (price board vs. photo cards) share one grid
function chunk(groups) {
  const out = [];
  for (const g of groups) {
    const kind = g.cols ? "boards" : "photos";
    const last = out[out.length - 1];
    if (last && last.kind === kind && kind === "boards") last.groups.push(g);
    else out.push({ kind, groups: [g] });
  }
  return out;
}

function Board({ group }) {
  const showCols = group.cols.some(Boolean);
  return (
    <article className="board">
      <header className="board-head">
        <h3>{group.title}</h3>
        {group.note && <p>{group.note}</p>}
      </header>

      {group.img && (
        <div className="board-img">
          <img src={group.img} alt={group.title} loading="lazy" />
        </div>
      )}
      {group.photos && (
        <div className="board-photos">
          {group.photos.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}
        </div>
      )}

      <div className="board-body" style={{ "--cols": group.cols.length }}>
        {showCols && (
          <div className="board-row board-cols">
            <span />
            {group.cols.map((c) => <span key={c} className="temp-pill">{c}</span>)}
          </div>
        )}
        {group.items.map((item) => (
          <div key={item.name} className="board-row">
            <span className="board-name">
              {item.name}
              {item.desc && <small>{item.desc}</small>}
            </span>
            {item.prices.map((p, i) => (
              <span key={i} className={`board-price ${p == null ? "is-na" : ""}`}>{fmt(p)}</span>
            ))}
          </div>
        ))}
      </div>

      {group.foot && <p className="board-foot">{group.foot}</p>}
    </article>
  );
}

function PhotoGroup({ group }) {
  return (
    <div className="dish-group">
      <h3 className="dish-title">{group.title}</h3>
      <div className="dish-grid">
        {group.items.map((item) => (
          <article key={item.name} className="dish">
            <div className="dish-img">
              <img src={item.img} alt={item.name} loading="lazy" />
            </div>
            <div className="dish-body">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div className="dish-prices">
                {item.options
                  ? item.options.map(([label, v]) => (
                      <span key={label} className="price-tag">
                        <em>{label}</em> {v}K
                      </span>
                    ))
                  : <span className="price-tag">{item.price}K</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Menu() {
  const [tabId, setTabId] = useState(MENU_TABS[0].id);
  const tab = MENU_TABS.find((t) => t.id === tabId);

  return (
    <section id="menu" className="section menu">
      <span className="contour menu-contour menu-contour-a" aria-hidden="true" />
      <span className="contour menu-contour menu-contour-b" aria-hidden="true" />
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="eyebrow">Menu Peguyangan 2024</span>
          <h2>
            Menu <em>Berbagi</em>
          </h2>
          <p>Harga dalam ribuan rupiah (K). Menu &amp; harga dapat berubah sewaktu-waktu.</p>
        </header>

        <div className="tabs-wrap" data-aos="fade-up">
          <div className="tabs" role="tablist">
            {MENU_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tabId === t.id}
                className={tabId === t.id ? "is-active" : ""}
                onClick={() => setTabId(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div key={tab.id} className="menu-panel" role="tabpanel">
          {tab.note && <p className="menu-note"><Icon name="utensils" size={16} /> {tab.note}</p>}
          {chunk(tab.groups).map((c) =>
            c.kind === "boards" ? (
              <div key={c.groups[0].title} className="boards">
                {c.groups.map((g) => <Board key={g.title} group={g} />)}
              </div>
            ) : (
              <PhotoGroup key={c.groups[0].title} group={c.groups[0]} />
            )
          )}
        </div>

        <div className="section-cta">
          <a href={LINKS.menu} target="_blank" rel="noreferrer" className="btn btn-dark">
            <Icon name="book" size={18} /> Lihat Menu Semua Cabang
          </a>
          <small>Menu seluruh cabang Berbagi Ruang &amp; Kopi, via Google Drive</small>
        </div>
      </div>
    </section>
  );
}

export default Menu;
