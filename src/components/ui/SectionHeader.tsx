import { useReveal } from '../../hooks/useReveal';

type Props = { id?: string; title: string; intro?: string; tone?: 'dark' | 'light'; align?: 'start' | 'center' };

/** Cabecera de sección: título + entradilla, con aparición sutil al hacer scroll. */
export function SectionHeader({ id, title, intro, tone = 'dark', align = 'start' }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`section-header section-header--${tone} section-header--${align} reveal`}>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
