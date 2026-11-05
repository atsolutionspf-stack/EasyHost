import { Check } from 'lucide-react';
import { addons, plans, pricingConfig, webPacks, type Plan, type WebPack } from '../config/plans';
import { pricingContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { ConfigText } from './ui/Placeholder';

/**
 * Sección de precios. No contiene datos: todo se lee de src/config/plans.ts.
 * Tres bloques: planes del TPV, packs de web y servicios adicionales.
 */

const { currency } = pricingConfig;

/** Precio del plan del TPV más barato, para el "desde X €/mes" del pack con TPV. */
const cheapestTpvPrice = (() => {
  const numbers = plans
    .map((p) => Number(p.price.replace(',', '.')))
    .filter((n) => Number.isFinite(n));
  if (numbers.length === 0) return null;
  return String(Math.min(...numbers)).replace('.', ',');
})();

function GroupHeader({ id, title, intro }: { id: string; title: string; intro: string }) {
  return (
    <header className="price-group__head">
      <h3 id={id} className="price-group__title">
        {title}
      </h3>
      <p className="price-group__intro">{intro}</p>
    </header>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.highlighted);
  return (
    <article className={`plan ${featured ? 'plan--featured' : ''}`} aria-labelledby={`plan-${plan.id}`}>
      <header className="plan__head">
        <h4 id={`plan-${plan.id}`} className="plan__name">
          Plan {plan.name}
        </h4>
        {featured && <span className="plan__badge">{pricingConfig.highlightLabel}</span>}
      </header>

      <p className="plan__price">
        <span className="plan__amount">
          <ConfigText value={plan.price} />
        </span>
        <span className="plan__currency">{currency}</span>
        <span className="plan__period">{pricingConfig.period}</span>
      </p>

      <p className="plan__desc">
        <ConfigText value={plan.description} />
      </p>

      <div className="plan__features">
        {plan.includesPrevious && <p className="plan__includes">{plan.includesPrevious}</p>}
        <ul>
          {plan.features.map((feature, i) => (
            <li key={`${plan.id}-${i}`}>
              <Check size={17} strokeWidth={2.25} aria-hidden="true" />
              <ConfigText value={feature} />
            </li>
          ))}
        </ul>
      </div>

      <Button href={plan.cta.href} variant={featured ? 'primary' : 'secondary'} className="plan__cta">
        {plan.cta.label}
        <span className="visually-hidden"> sobre el Plan {plan.name}</span>
      </Button>
    </article>
  );
}

function PackCard({ pack }: { pack: WebPack }) {
  return (
    <article className="pack" aria-labelledby={`pack-${pack.id}`}>
      <h4 id={`pack-${pack.id}`} className="pack__name">
        {pack.name}
      </h4>

      <div className="pack__price">
        {pack.price === null ? (
          <p className="pack__amount pack__amount--quote">A presupuestar</p>
        ) : (
          <>
            <p className="pack__amount">
              <ConfigText value={pack.price} /> {currency}
              <span className="pack__unit">{pricingConfig.web.oneOffLabel}</span>
            </p>
            {pack.includesTpv ? (
              <a href="#planes-tpv" className="pack__monthly">
                {cheapestTpvPrice
                  ? pricingConfig.web.subscriptionLabel.replace('{precio}', cheapestTpvPrice)
                  : '+ suscripción del TPV'}
              </a>
            ) : (
              <p className="pack__nosub">{pricingConfig.web.noSubscriptionLabel}</p>
            )}
          </>
        )}
      </div>

      <p className="pack__desc">{pack.description}</p>

      {pack.features.length > 0 && (
        <ul className="pack__features">
          {pack.features.map((feature) => (
            <li key={feature}>
              <Check size={16} strokeWidth={2.25} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <a href={pack.cta.href} className="pack__cta">
        {pack.cta.label}
        <span className="visually-hidden"> sobre el pack {pack.name}</span>
      </a>
    </article>
  );
}

export function Pricing() {
  const tpvRef = useReveal<HTMLDivElement>();
  const webRef = useReveal<HTMLDivElement>();
  const addonsRef = useReveal<HTMLDivElement>();

  return (
    <section id="precios" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeader id="pricing-title" title={pricingContent.title} intro={pricingContent.intro} />

        <div ref={webRef} className="price-group reveal" role="group" aria-labelledby="group-web">
          <GroupHeader id="group-web" title={pricingConfig.web.title} intro={pricingConfig.web.intro} />
          <div className="packs__grid">
            {webPacks.map((pack) => (
              <PackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>

        <div
          ref={tpvRef}
          id="planes-tpv"
          className="price-group reveal"
          role="group"
          aria-labelledby="group-tpv"
        >
          <GroupHeader id="group-tpv" title={pricingConfig.tpv.title} intro={pricingConfig.tpv.intro} />
          <div className="pricing__grid">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="pricing__note">{pricingConfig.tpv.note}</p>
        </div>

        {addons.length > 0 && (
          <div ref={addonsRef} className="price-group reveal" role="group" aria-labelledby="group-addons">
            <GroupHeader id="group-addons" title={pricingConfig.addons.title} intro={pricingConfig.addons.intro} />
            <ul className="addons">
              {addons.map((addon) => (
                <li key={addon.id} className="addon">
                  <div>
                    <h4 className="addon__name">{addon.name}</h4>
                    <p className="addon__desc">{addon.description}</p>
                  </div>
                  <p className="addon__price">
                    <ConfigText value={addon.price} /> {currency}
                    <span>{addon.unit}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
