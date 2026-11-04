import { features } from '../config/features';
import { featuresContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import type { Feature } from '../config/features';

function FeatureCard({ feature }: { feature: Feature }) {
  const ref = useReveal<HTMLElement>();
  const Icon = feature.icon;
  return (
    <article ref={ref} className="feature reveal">
      <span className="feature__icon">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="feature__title">{feature.title}</h3>
      <p className="feature__desc">{feature.description}</p>
      <ul className="feature__items">
        {feature.items.map((item) => (
          <li key={item}>{item}</li>
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
        <div className="features__grid">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
