import { stepsContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';

export function HowItWorks() {
  const ref = useReveal<HTMLOListElement>();
  return (
    <section id="como-funciona" className="section steps" aria-labelledby="steps-title">
      <div className="container">
        <SectionHeader id="steps-title" title={stepsContent.title} intro={stepsContent.intro} />
        <ol ref={ref} className="steps__list reveal">
          {stepsContent.steps.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step__number" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="step__title">
                <span className="visually-hidden">Paso {i + 1}: </span>
                {step.title}
              </h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
