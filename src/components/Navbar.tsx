import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site';
import { ui } from '../config/ui';
import { langHome } from '../i18n';
import { useActiveSection } from '../hooks/useActiveSection';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';

const sectionIds = siteConfig.nav.map((item) => item.href.replace('#', ''));

/** Enlace a la otra versión de idioma (español ⇄ inglés). */
function LangSwitch({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  const { label, hrefLang, title } = ui.langSwitch;
  return (
    <a
      href={langHome[hrefLang as keyof typeof langHome]}
      hrefLang={hrefLang}
      lang={hrefLang}
      title={title}
      className={`lang-switch ${className}`.trim()}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className="navbar__nav" aria-label={ui.nav.main}>
          <ul>
            {siteConfig.nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={isActive ? 'is-active' : undefined}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <LangSwitch className="navbar__lang" />

        <Button href={siteConfig.primaryCta.href} className="navbar__cta">
          {siteConfig.primaryCta.label}
        </Button>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? ui.nav.close : ui.nav.open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label={ui.nav.mobile} className="container">
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={siteConfig.primaryCta.href} size="lg" onClick={close} className="mobile-menu__cta">
            {siteConfig.primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
