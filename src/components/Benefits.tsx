import { benefitsContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';

export function Benefits() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLUListElement>();

  return (
    <section className="section benefits" aria-labelledby="benefits-title">
      <div className="container benefits__grid">
        <div ref={headRef} className="benefits__head reveal">
          <h2 id="benefits-title" className="section-title">
            {benefitsContent.title}
          </h2>
          <p className="section-intro">{benefitsContent.intro}</p>
        </div>

        <ul ref={listRef} className="benefits__list reveal reveal--delay">
          {benefitsContent.benefits.map(({ title, text }) => (
            <li key={title} className="benefit">
              <h3 className="benefit__title">{title}</h3>
              <p className="benefit__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
