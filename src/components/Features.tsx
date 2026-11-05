import { Check } from 'lucide-react';
import { features, type Feature } from '../config/features';
import { featuresContent } from '../config/content';
import { ui } from '../config/ui';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';

/** Mini vistas ilustrativas para los bloques destacados del bento. */
function MiniTicket() {
  const m = ui.mockup;
  return (
    <div className="mini-ticket" aria-hidden="true">
      <div className="mini-ticket__head">
        <span>{m.ticket}</span>
        <span className="mini-ticket__num">{ui.steps.number} 0142</span>
      </div>
      {m.lines.map(([qty, name, total]) => (
        <div key={name} className="mini-ticket__line">
          <span>
            {qty} × {name}
          </span>
          <span>{total}</span>
        </div>
      ))}
      <div className="mini-ticket__total">
        <span>{m.totalLabel}</span>
        <strong>{m.total}</strong>
      </div>
    </div>
  );
}

function MiniClient() {
  const c = ui.mockup.client;
  return (
    <div className="mini-client" aria-hidden="true">
      <span className="client-card__avatar">LP</span>
      <div>
        <p className="mini-client__name">{c.name}</p>
        <p className="mini-client__tag">{c.tag}</p>
      </div>
      <strong className="mini-client__stat">
        {c.stats[0][0]} <span>{c.stats[0][1]}</span>
      </strong>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const ref = useReveal<HTMLElement>();
  const Icon = feature.icon;
  return (
    <article
      ref={ref}
      className={`bento reveal ${feature.size ? `bento--${feature.size}` : ''}`}
      aria-labelledby={`feature-${feature.id}`}
    >
      <div className="bento__text">
        <h3 id={`feature-${feature.id}`} className="bento__title">
          <Icon className="bento__icon" size={22} strokeWidth={1.75} aria-hidden="true" />
          {feature.title}
        </h3>
        <p className="bento__desc">{feature.description}</p>
        <ul className="bento__items">
          {feature.items.map((item) => (
            <li key={item}>
              <Check size={16} strokeWidth={2.25} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {feature.visual === 'ticket' && <MiniTicket />}
      {feature.visual === 'client' && <MiniClient />}
    </article>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="section features" aria-labelledby="features-title">
      <div className="container">
        <SectionHeader id="features-title" title={featuresContent.title} intro={featuresContent.intro} />
        <div className="bento-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
