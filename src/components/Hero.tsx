import { heroContent } from '../config/content';
import { siteConfig } from '../config/site';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { DashboardMockup } from './DashboardMockup';
import { prices } from '../config/plans';
import { formatMoney } from '../i18n';

/** Portada: titular grande, propuesta y botones; debajo, el producto a todo el ancho. */
export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__top">
          <div className="hero__heading">
            <p className="hero__audience">{heroContent.audience}</p>
            <h1 id="hero-title" className="hero__title">
              {heroContent.title}
            </h1>
          </div>
          <div className="hero__copy">
            <p className="hero__lead">{heroContent.lead.replace('{precio}', formatMoney(prices.essential))}</p>
            <p className="hero__subtitle">{heroContent.subtitle}</p>
            <div className="hero__actions">
              <Button href={siteConfig.primaryCta.href} size="lg">
                {siteConfig.primaryCta.label}
              </Button>
              <Button href={heroContent.secondaryCta.href} variant="secondary" size="lg">
                {heroContent.secondaryCta.label}
              </Button>
            </div>
            <ul className="hero__trust">
              {heroContent.trust.map((item) => (
                <li key={item}>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="hero__price">{heroContent.priceNote}</p>
          </div>
        </div>

        <figure className="hero__visual">
          <DashboardMockup />
          <figcaption className="hero__caption">{heroContent.mockupCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
