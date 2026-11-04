import { Check } from 'lucide-react';
import { features, type Feature } from '../config/features';
import { featuresContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';

/** Cada funcionalidad es una fila: nombre y descripción a la izquierda, lo que incluye a la derecha. */
function FeatureRow({ feature }: { feature: Feature }) {
  const ref = useReveal<HTMLElement>();
  const Icon = feature.icon;
  return (
    <article ref={ref} className="feature reveal" aria-labelledby={`feature-${feature.id}`}>
      <div className="feature__intro">
        <h3 id={`feature-${feature.id}`} className="feature__title">
          <Icon className="feature__icon" size={22} strokeWidth={1.75} aria-hidden="true" />
          {feature.title}
        </h3>
        <p className="feature__desc">{feature.description}</p>
      </div>
      <ul className="feature__items">
        {feature.items.map((item) => (
          <li key={item}>
            <Check size={17} strokeWidth={2.25} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="section features" aria-labelledby="features-title">
      <div className="container">
        <SectionHeader id="features-title" title={featuresContent.title} intro={featuresContent.intro} />
        <div className="features__list">
          {features.map((feature) => (
            <FeatureRow key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
