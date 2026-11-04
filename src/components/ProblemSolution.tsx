import { Check } from 'lucide-react';
import { problemContent } from '../config/content';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './ui/SectionHeader';

export function ProblemSolution() {
  const listRef = useReveal<HTMLDivElement>();
  const solutionRef = useReveal<HTMLDivElement>();
  const { solution } = problemContent;

  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeader id="problem-title" title={problemContent.title} />

        <div className="problem__grid">
          <div ref={listRef} className="problem__list reveal">
            <p className="problem__intro">{problemContent.intro}</p>
            <ul>
              {problemContent.problems.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="problem__icon">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div ref={solutionRef} className="solution reveal reveal--delay">
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
