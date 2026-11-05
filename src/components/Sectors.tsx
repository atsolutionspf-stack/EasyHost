import { Store, UtensilsCrossed, CalendarClock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { sectorsContent } from '../config/content';

/** Franja con los tipos de negocio para los que está pensado Clientia (sin logos ni clientes inventados). */
const icons: Record<string, LucideIcon> = { comercio: Store, hosteleria: UtensilsCrossed, servicios: CalendarClock };

export function Sectors() {
  return (
    <section className="sectors" aria-labelledby="sectors-title">
      <div className="container sectors__inner">
        <h2 id="sectors-title" className="sectors__title">
          {sectorsContent.title}
        </h2>
        <ul className="sectors__list">
          {sectorsContent.sectors.map(({ id, title, text }) => {
            const Icon = icons[id] ?? Store;
            return (
              <li key={id} className="sector">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="sector__title">{title}</p>
                  <p className="sector__text">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
