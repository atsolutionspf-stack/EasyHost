import { stepsContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';

/** Los tres pasos como hojas de un talonario de comandas, numeradas en rojo. */
export function HowItWorks() {
  const ref = useReveal<HTMLOListElement>();
  return (
    <section id="como-funciona" className="section steps" aria-labelledby="steps-title">
      <div className="container">
        <SectionHeader id="steps-title" title={stepsContent.title} intro={stepsContent.intro} />
        <ol ref={ref} className="steps__list reveal">
          {stepsContent.steps.map((step, i) => (
            <li key={step.title} className="slip">
              <p className="slip__number" aria-hidden="true">
                Nº {i + 1}
              </p>
              <h3 className="slip__title">
                <span className="visually-hidden">Paso {i + 1}: </span>
                {step.title}
              </h3>
              <p className="slip__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
