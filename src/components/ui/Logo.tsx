import { siteConfig } from '../../config/site';
import { ui } from '../../config/ui';

/**
 * Logotipo. Si `siteConfig.brand.logoSrc` tiene una ruta, muestra esa imagen;
 * si no, muestra el logotipo de texto provisional.
 */
export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const { name, logoSrc } = siteConfig.brand;

  return (
    <a href="#inicio" className={`logo logo--${tone}`} aria-label={`${name}, ${ui.nav.goHome}`}>
      {logoSrc ? (
        <img src={logoSrc} alt={name} height={32} />
      ) : (
        <>
          <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" />
            <path d="M9 11h14M9 16h10M9 21h14" />
          </svg>
          <span className="logo__word">{name}</span>
        </>
      )}
    </a>
  );
}
