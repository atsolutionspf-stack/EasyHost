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
          {benefitsContent.benefits.map(({ icon: Icon, title, text }) => (
            <li key={title} className="benefit">
              <span className="benefit__icon">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="benefit__title">{title}</h3>
                <p className="benefit__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
