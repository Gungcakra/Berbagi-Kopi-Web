import "../css/Footer.css";
import logoBadge from "../assets/images/brk/logo-badge-white.webp";
import Icon from "./Icon";
import { NAV_LINKS, LOCATIONS, SOCIALS, LINKS } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <span className="contour footer-contour" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src={logoBadge} alt="" />
            <span>
              <strong>Berbagi</strong>
              <small>Ruang &amp; Kopi</small>
            </span>
          </a>
          <p>Rumah untuk seluruh <span className="script">#KawanBerbagi</span></p>
          <ul className="footer-socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Jelajahi</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.name}</a></li>
            ))}
            <li><a href={LINKS.menu} target="_blank" rel="noreferrer">Menu lengkap</a></li>
          </ul>
        </div>

        <div className="footer-locations">
          <h4>Lokasi</h4>
          <ul>
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>
                <a href={loc.maps} target="_blank" rel="noreferrer">
                  <Icon name="pin" size={16} />
                  <span>
                    <strong>{loc.name}</strong>
                    {loc.address}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright &copy; {new Date().getFullYear()} <strong>Cakra Jaya</strong></span>
        <span>Unofficial website Berbagi Ruang &amp; Kopi</span>
      </div>
    </footer>
  );
}

export default Footer;
