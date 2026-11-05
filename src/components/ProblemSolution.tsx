import { Check } from 'lucide-react';
import { problemContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';

/** "Antes" sobre papel pautado de libreta; "con Clientia" en tinta. */
export function ProblemSolution() {
  const listRef = useReveal<HTMLDivElement>();
  const solutionRef = useReveal<HTMLDivElement>();
  const { solution } = problemContent;

  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeader id="problem-title" title={problemContent.title} />

        <div className="problem__grid">
          <div ref={listRef} className="notebook reveal">
            <h3 className="notebook__label">{problemContent.intro}</h3>
            <ul className="notebook__list">
              {problemContent.problems.map(({ title, text }) => (
                <li key={title}>
                  <p className="notebook__title">{title}</p>
                  <p className="notebook__text">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div ref={solutionRef} className="solution reveal reveal--delay">
            <p className="solution__label">{problemContent.solutionLabel}</p>
            <h3 className="solution__title">{solution.title}</h3>
            <p className="solution__text">{solution.text}</p>
            <ul className="solution__points">
              {solution.points.map((point) => (
                <li key={point}>
                  <Check size={18} strokeWidth={2.25} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
