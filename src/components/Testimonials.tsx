import { testimonialsContent } from '../config/content';

/**
 * Testimonios reales. La sección no se muestra mientras no haya ninguno
 * (se añaden en src/config/content.ts, bloque testimonialsContent).
 */
export function Testimonials() {
  const { title, items } = testimonialsContent;
  if (items.length === 0) return null;
  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title">
          {title}
        </h2>
        <ul className="testimonials__list">
          {items.map((t) => (
            <li key={t.name} className="testimonial">
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <p className="testimonial__who">
                <strong>{t.name}</strong>
                <span>
                  {t.role}, {t.business}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
