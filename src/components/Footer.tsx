import { siteConfig } from '../config/site';
import { ui } from '../config/ui';
import { Logo } from './ui/Logo';
import { ConfigText } from './ui/Placeholder';

export function Footer() {
  const { brand, nav, contact, legal } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo tone="light" />
          <p>{brand.tagline}</p>
          <p className="footer__lintel">
            <a href={siteConfig.lintel.url}>{siteConfig.lintel.footerLabel}</a>
          </p>
        </div>

        <nav className="footer__col" aria-label={ui.footer.navigation}>
          <h2 className="footer__heading">{ui.footer.navigation}</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">{ui.footer.contact}</h2>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <ConfigText value={contact.phone} />
            </li>
            <li>
              <ConfigText value={contact.address} />
            </li>
          </ul>
        </div>

        <nav className="footer__col" aria-label={ui.footer.legal}>
          <h2 className="footer__heading">{ui.footer.legal}</h2>
          <ul>
            {legal.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {brand.name}. {ui.footer.rights}
        </p>
      </div>
    </footer>
  );
}
