import { Check } from 'lucide-react';
import { plans, pricingConfig, type Plan } from '../config/plans';
import { pricingContent } from '../config/content';
import { ui } from '../config/ui';
import { formatMoney, lang } from '../i18n';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { ConfigText, isPlaceholder } from './ui/Placeholder';

/**
 * Sección de precios: planes del TPV por suscripción mensual.
 * No contiene datos: todo se lee de src/config/plans.ts.
 */

/** Importe con el símbolo € en la posición de cada idioma ("25 €" / "€25"). */
function Money({ value }: { value: string }) {
  if (isPlaceholder(value)) {
    return lang === 'en' ? (
      <>
        €<ConfigText value={value} />
      </>
    ) : (
      <>
        <ConfigText value={value} /> €
      </>
    );
  }
  return <>{formatMoney(value)}</>;
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.highlighted);
  const fullName = `${pricingConfig.planPrefix} ${plan.name}`.trim();

  return (
    <article className={`plan ${featured ? 'plan--featured' : ''}`} aria-labelledby={`plan-${plan.id}`}>
      <header className="plan__head">
        <h3 id={`plan-${plan.id}`} className="plan__name">
          {fullName}
        </h3>
        {featured && <span className="plan__badge">{pricingConfig.highlightLabel}</span>}
      </header>

      <p className="plan__price">
        <span className="plan__amount">
          <Money value={plan.price} />
        </span>
        <span className="plan__period">{pricingConfig.period}</span>
      </p>

      <p className="plan__desc">
        <ConfigText value={plan.description} />
      </p>

      <div className="plan__features">
        {plan.includesPrevious && <p className="plan__includes">{plan.includesPrevious}</p>}
        <ul>
          {plan.features.map((feature) => (
            <li key={feature}>
              <Check size={17} strokeWidth={2.25} aria-hidden="true" />
              <ConfigText value={feature} />
            </li>
          ))}
        </ul>
      </div>

      <Button href={plan.cta.href} variant={featured ? 'primary' : 'secondary'} className="plan__cta">
        {plan.cta.label}
        <span className="visually-hidden">
          {' '}
          {ui.pricing.about} {fullName}
        </span>
      </Button>
    </article>
  );
}

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="precios" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeader id="pricing-title" title={pricingContent.title} intro={pricingContent.intro} />
        <div ref={ref} className="pricing__grid reveal">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="pricing__note">{pricingConfig.note}</p>
      </div>
    </section>
  );
}
