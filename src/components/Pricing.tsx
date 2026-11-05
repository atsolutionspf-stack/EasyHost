import { Check } from 'lucide-react';
import { addons, pricingConfig, tpvPlan, webPacks, type WebPack } from '../config/plans';
import { pricingContent } from '../config/content';
import { ui } from '../config/ui';
import { formatMoney, lang } from '../i18n';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { ConfigText, isPlaceholder } from './ui/Placeholder';

/**
 * Sección de precios. No contiene datos: todo se lee de src/config/plans.ts.
 * Tres bloques: packs de web, TPV (suscripción) y servicios adicionales.
 */

/** Importe con el símbolo € en la posición de cada idioma ("40 €" / "€40"). */
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

function PackCard({ pack }: { pack: WebPack }) {
  const { web } = pricingConfig;
  const custom = pack.price === null;

  return (
    <article className={`pack ${custom ? 'pack--custom' : ''}`} aria-labelledby={`pack-${pack.id}`}>
      <h4 id={`pack-${pack.id}`} className="pack__name">
        {pack.name}
      </h4>

      <div className="pack__price">
        {custom ? (
          <>
            <p className="pack__unit pack__unit--top">{web.customPriceLabel}</p>
            <Button href={pack.cta.href} className="pack__contact">
              {pack.cta.label}
            </Button>
          </>
        ) : (
          <>
            <p className="pack__amount">
              <Money value={pack.price!} />
              <span className="pack__unit">{web.oneOffLabel}</span>
            </p>
            {pack.includesTpv ? (
              <a href="#planes-tpv" className="pack__monthly">
                {web.subscriptionLabel.replace('{precio}', formatMoney(tpvPlan.price))}
              </a>
            ) : (
              <p className="pack__nosub">{web.noSubscriptionLabel}</p>
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

      {!custom && (
        <a href={pack.cta.href} className="pack__cta">
          {pack.cta.label}
          <span className="visually-hidden">
            {' '}
            {ui.pricing.about} {pack.name}
          </span>
        </a>
      )}
    </article>
  );
}

function TpvCard() {
  const plan = tpvPlan;
  return (
    <article className="plan plan--featured plan--single" aria-labelledby="plan-tpv">
      <div className="plan__summary">
        <h4 id="plan-tpv" className="plan__name">
          {plan.name}
        </h4>
        <p className="plan__price">
          <span className="plan__amount">
            <Money value={plan.price} />
          </span>
          <span className="plan__period">{pricingConfig.period}</span>
        </p>
        <p className="plan__desc">{plan.description}</p>
        <Button href={plan.cta.href} className="plan__cta">
          {plan.cta.label}
          <span className="visually-hidden">
            {' '}
            {ui.pricing.about} {plan.name}
          </span>
        </Button>
      </div>
      <ul className="plan__features plan__features--columns">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={17} strokeWidth={2.25} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Pricing() {
  const webRef = useReveal<HTMLDivElement>();
  const tpvRef = useReveal<HTMLDivElement>();
  const addonsRef = useReveal<HTMLDivElement>();
  const { web, tpv } = pricingConfig;

  return (
    <section id="precios" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeader id="pricing-title" title={pricingContent.title} intro={pricingContent.intro} />

        <div ref={webRef} className="price-group reveal" role="group" aria-labelledby="group-web">
          <GroupHeader id="group-web" title={web.title} intro={web.intro} />
          <div className="packs__grid">
            {webPacks.map((pack) => (
              <PackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </div>

        <div ref={tpvRef} id="planes-tpv" className="price-group reveal" role="group" aria-labelledby="group-tpv">
          <GroupHeader id="group-tpv" title={tpv.title} intro={tpv.intro} />
          <TpvCard />
          <p className="pricing__note">{tpv.note}</p>
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
                    <Money value={addon.price} />
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
