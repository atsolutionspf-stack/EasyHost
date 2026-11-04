import { Check } from 'lucide-react';
import { plans, pricingConfig, type Plan } from '../config/plans';
import { pricingContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { ConfigText } from './ui/Placeholder';

/**
 * Sección de precios. No contiene datos: todo se lee de src/config/plans.ts.
 */
function PricingCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.highlighted);
  return (
    <article className={`plan ${featured ? 'plan--featured' : ''}`} aria-labelledby={`plan-${plan.id}`}>
      <header className="plan__head">
        <h3 id={`plan-${plan.id}`} className="plan__name">
          Plan {plan.name}
        </h3>
        {featured && <span className="plan__badge">{pricingConfig.highlightLabel}</span>}
      </header>

      <p className="plan__price">
        <span className="plan__amount">
          <ConfigText value={plan.price} />
        </span>
        <span className="plan__currency">{pricingConfig.currency}</span>
        <span className="plan__period">{pricingConfig.period}</span>
      </p>

      <p className="plan__desc">
        <ConfigText value={plan.description} />
      </p>

      <ul className="plan__features">
        {plan.features.map((feature, i) => (
          <li key={`${plan.id}-${i}`}>
            <Check size={17} strokeWidth={2.25} aria-hidden="true" />
            <ConfigText value={feature} />
          </li>
        ))}
      </ul>

      <Button href={plan.cta.href} variant={featured ? 'primary' : 'secondary'} className="plan__cta">
        {plan.cta.label}
        <span className="visually-hidden"> sobre el Plan {plan.name}</span>
      </Button>
    </article>
  );
}

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="precios" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeader id="pricing-title" title={pricingContent.title} intro={pricingContent.intro} align="center" />
        <div ref={ref} className="pricing__grid reveal">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="pricing__note">{pricingConfig.note}</p>
      </div>
    </section>
  );
}
