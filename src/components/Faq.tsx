import { Plus } from 'lucide-react';
import { faqContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';

/** Preguntas frecuentes con <details>: accesible con teclado y sin JavaScript extra. */
export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="preguntas" className="section faq" aria-labelledby="faq-title">
      <div ref={ref} className="container faq__grid reveal">
        <div className="faq__head">
          <h2 id="faq-title" className="section-title">
            {faqContent.title}
          </h2>
          <p className="section-intro">{faqContent.intro}</p>
        </div>
        <div className="faq__list">
          {faqContent.items.map(({ q, a }) => (
            <details key={q} className="faq__item">
              <summary>
                <span>{q}</span>
                <Plus size={20} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
