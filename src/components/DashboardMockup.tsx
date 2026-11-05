import { CalendarCheck, ShoppingBag, ChefHat, Receipt, LayoutGrid, Bell } from 'lucide-react';
import { ui } from '../config/ui';

/**
 * Mockup ilustrativo del panel, construido en HTML/CSS (sin imágenes pesadas).
 * Los datos son de ejemplo y solo sirven para mostrar cómo se ve el software.
 * Los textos traducibles están en src/config/ui.ts (bloque `mockup`).
 */

type Status = 'confirmada' | 'pendiente' | 'sentada';

const m = ui.mockup;

const reservations: { time: string; name: string; guests: number; table: string; status: Status }[] = [
  { time: '13:30', name: 'Marta G.', guests: 4, table: `${m.table} 6`, status: 'sentada' },
  { time: '14:00', name: 'Javier R.', guests: 2, table: `${m.table} 2`, status: 'confirmada' },
  { time: '14:00', name: 'Lucía P.', guests: 6, table: `${m.table} 9`, status: 'confirmada' },
  { time: '14:30', name: 'Andrés M.', guests: 3, table: `${m.terrace} 1`, status: 'pendiente' },
  { time: '15:00', name: 'Carmen L.', guests: 2, table: `${m.table} 4`, status: 'confirmada' },
];

const navIcons = [LayoutGrid, CalendarCheck, ShoppingBag, ChefHat, Receipt];
const activeNav = 1;
const summaryValues = [17, 58, 6];
const ticketQuantities = [2, 1, 1];

export function DashboardMockup() {
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup__window">
        <div className="mockup__bar">
          <span className="mockup__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mockup__url">panel.easyhost</span>
        </div>

        <div className="mockup__body">
          <aside className="mockup__side">
            <div className="mockup__venue">
              <span className="mockup__venue-badge">LT</span>
              <span>La Taberna</span>
            </div>
            <ul>
              {m.nav.map((label, i) => {
                const Icon = navIcons[i];
                return (
                  <li key={label} className={i === activeNav ? 'is-active' : undefined}>
                    <Icon size={15} strokeWidth={1.8} />
                    {label}
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="mockup__main">
            <div className="mockup__head">
              <div>
                <p className="mockup__eyebrow">{m.day}</p>
                <p className="mockup__title">{m.title}</p>
              </div>
              <span className="mockup__bell">
                <Bell size={15} strokeWidth={1.8} />
              </span>
            </div>

            <div className="mockup__summary">
              {m.summary.map((label, i) => (
                <div key={label}>
                  <strong>{summaryValues[i]}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <ol className="mockup__list">
              {reservations.map((r) => (
                <li key={r.name}>
                  <time>{r.time}</time>
                  <span className="mockup__name">{r.name}</span>
                  <span className="mockup__meta">
                    {r.guests} {m.guests} <em>{r.table}</em>
                  </span>
                  <span className={`chip chip--${r.status}`}>{m.status[r.status]}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Comanda: el único movimiento orquestado de la página */}
      <div className="ticket">
        <div className="ticket__paper">
          <div className="ticket__head">
            <p className="ticket__label">
              <ShoppingBag size={14} strokeWidth={2} /> {m.ticketLabel}
            </p>
            <p className="ticket__number">{ui.steps.number} 0142</p>
          </div>
          <p className="ticket__pickup">{m.ticketPickup}</p>
          <ul className="ticket__items">
            {m.ticketItems.map((item, i) => (
              <li key={item}>
                <span>{ticketQuantities[i]}</span> {item}
              </li>
            ))}
          </ul>
          <div className="ticket__actions">
            <span className="ticket__accept">{m.accept}</span>
            <span className="ticket__view">{m.details}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
