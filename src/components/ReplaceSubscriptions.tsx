import { X } from 'lucide-react';
import { replaceContent } from '../config/content';
import { prices } from '../config/plans';
import { formatMoney } from '../i18n';
import { useReveal } from '../hooks/useReveal';
import { Button } from './ui/Button';

/** «Una sola cuota en lugar de varias suscripciones»: las herramientas sueltas frente a Clientia Essential. */
export function ReplaceSubscriptions() {
  const ref = useReveal<HTMLDivElement>();
  const c = replaceContent;
  return (
    <section className="section replace" aria-labelledby="replace-title">
      <div ref={ref} className="container replace__grid reveal">
        <div className="replace__copy">
          <h2 id="replace-title" className="section-title">
            {c.title}
          </h2>
          <p className="section-intro">{c.text}</p>
          <p className="replace__note">{c.note}</p>
          <Button href={c.cta.href} variant="secondary" className="replace__cta">
            {c.cta.label}
          </Button>
        </div>

        <div className="replace__visual" aria-hidden="true">
          <ul className="replace__tools">
            {c.tools.map((tool) => (
              <li key={tool}>
                <span>{tool}</span>
                <X size={16} strokeWidth={2.25} />
              </li>
            ))}
          </ul>
          <div className="replace__arrow" />
          <div className="replace__result">
            <span className="replace__result-name">{c.result}</span>
            <span className="replace__result-price">{c.priceLabel.replace('{precio}', formatMoney(prices.essential))}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
