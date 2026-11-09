import { Check, Minus } from 'lucide-react';
import { addons, compareRows, plans, pricingConfig, type FeatureItem, type Plan } from '../config/plans';
import { siteConfig } from '../config/site';
import { pricingContent } from '../config/content';
import { ui } from '../config/ui';
import { formatMoney } from '../i18n';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

/**
 * Precios: planes, comparativa rápida y add-ons.
 * No contiene datos: todo se lee de src/config/plans.ts.
 */

export function SoonBadge() {
  return <span className="soon">{pricingConfig.soon}</span>;
}

/** Una funcionalidad de la lista, con su etiqueta «Próximamente» si corresponde. */
export function FeatureLine({ item }: { item: FeatureItem }) {
  const label = typeof item === 'string' ? item : item.label;
  const soon = typeof item !== 'string' && item.soon;
  return (
    <li className={soon ? 'is-soon' : undefined}>
      <Check size={17} strokeWidth={2.25} aria-hidden="true" />
      <span>
        {label} {soon && <SoonBadge />}
      </span>
    </li>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.highlighted);
  return (
    <article className={`plan ${featured ? 'plan--featured' : ''}`} aria-labelledby={`plan-${plan.id}`}>
      <header className="plan__head">
        <p className="plan__tagline">{plan.tagline}</p>
        {featured && <span className="plan__badge">{pricingConfig.highlightLabel}</span>}
      </header>
      <h3 id={`plan-${plan.id}`} className="plan__name">
        {plan.name}
      </h3>

      {plan.price === null ? (
        <p className="plan__price plan__price--custom">
          <span className="plan__amount plan__amount--custom">{pricingConfig.customPriceLabel}</span>
          <span className="plan__period">{pricingConfig.customPriceNote}</span>
        </p>
      ) : (
        <p className="plan__price">
          <span className="plan__amount">{formatMoney(plan.price)}</span>
          <span className="plan__period">{pricingConfig.period}</span>
        </p>
      )}

      <p className="plan__desc">{plan.description}</p>

      <div className="plan__features">
        {plan.includesPrevious && <p className="plan__includes">{plan.includesPrevious}</p>}
        <ul>
          {plan.features.map((item, i) => (
            <FeatureLine key={`${plan.id}-${i}`} item={item} />
          ))}
        </ul>
      </div>

      {plan.limit && <p className="plan__limit">{plan.limit}</p>}

      <Button href={plan.cta.href} variant={featured ? 'primary' : 'secondary'} className="plan__cta">
        {plan.cta.label}
        <span className="visually-hidden">
          {' '}
          {ui.pricing.about} {plan.name}
        </span>
      </Button>
    </article>
  );
}

function CompareCell({ value }: { value: string | boolean }) {
  const { included, notIncluded } = pricingConfig.compare;
  if (value === true)
    return (
      <>
        <Check size={18} strokeWidth={2.25} aria-hidden="true" className="compare__yes" />
        <span className="visually-hidden">{included}</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus size={18} strokeWidth={2} aria-hidden="true" className="compare__no" />
        <span className="visually-hidden">{notIncluded}</span>
      </>
    );
  return <>{value}</>;
}

function Compare() {
  const [essential, professional] = plans;
  const c = pricingConfig.compare;
  return (
    <div className="compare">
      <h3 className="price-block__title">{c.title}</h3>
      <div className="compare__scroll">
        <table className="compare__table">
          <thead>
            <tr>
              <th scope="col">{c.feature}</th>
              <th scope="col">
                {essential.name}
                <span>{essential.price ? `${formatMoney(essential.price)}${pricingConfig.period}` : ''}</span>
              </th>
              <th scope="col">
                {professional.name}
                <span>{professional.price ? `${formatMoney(professional.price)}${pricingConfig.period}` : ''}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>
                  <CompareCell value={row.essential} />
                </td>
                <td>
                  <CompareCell value={row.professional} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Addons() {
  const a = pricingConfig.addons;
  return (
    <div className="addons-block">
      <header className="price-block__head">
        <h3 className="price-block__title">{a.title}</h3>
        <p className="price-block__intro">{a.intro}</p>
      </header>
      <ul className="addons-grid">
        {addons.map((addon) => (
          <li key={addon.id} className="addon">
            <div className="addon__top">
              <p className="addon__name">{addon.name}</p>
              {addon.soon && <SoonBadge />}
            </div>
            <p className="addon__desc">{addon.description}</p>
            <p className="addon__price">
              {addon.price === null ? (
                a.quote
              ) : (
                <>
                  {addon.from && <span className="addon__from">{a.from} </span>}+{formatMoney(addon.price)}
                  <span className="addon__period">{pricingConfig.period}</span>
                </>
              )}
            </p>
            {addon.lintelLink && (
              <a className="addon__link" href={siteConfig.lintel.url}>
                {addon.lintelLink}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
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
        <p className="pricing__note pricing__note--soon">{pricingConfig.soonNote}</p>
        <Compare />
        <Addons />
      </div>
    </section>
  );
}
