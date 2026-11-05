import { heroContent } from '../config/content';
import { siteConfig } from '../config/site';
import { Button } from './ui/Button';
import { DashboardMockup } from './DashboardMockup';

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
            <p className="hero__lead">{heroContent.lead}</p>
            <p className="hero__subtitle">{heroContent.subtitle}</p>
            <div className="hero__actions">
              <Button href={siteConfig.primaryCta.href} size="lg">
                {siteConfig.primaryCta.label}
              </Button>
              <Button href={heroContent.secondaryCta.href} variant="secondary" size="lg">
                {heroContent.secondaryCta.label}
              </Button>
            </div>
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
