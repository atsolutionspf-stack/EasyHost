import { CalendarCheck, ShoppingBag, ChefHat, Receipt, LayoutGrid, Bell } from 'lucide-react';

/**
 * Mockup ilustrativo del panel, construido en HTML/CSS (sin imágenes pesadas).
 * Los datos son de ejemplo y solo sirven para mostrar cómo se ve el software.
 */

type Status = 'confirmada' | 'pendiente' | 'sentada';

const reservations: { time: string; name: string; guests: number; table: string; status: Status }[] = [
  { time: '13:30', name: 'Marta G.', guests: 4, table: 'Mesa 6', status: 'sentada' },
  { time: '14:00', name: 'Javier R.', guests: 2, table: 'Mesa 2', status: 'confirmada' },
  { time: '14:00', name: 'Lucía P.', guests: 6, table: 'Mesa 9', status: 'confirmada' },
  { time: '14:30', name: 'Andrés M.', guests: 3, table: 'Terraza 1', status: 'pendiente' },
  { time: '15:00', name: 'Carmen L.', guests: 2, table: 'Mesa 4', status: 'confirmada' },
];

const statusLabel: Record<Status, string> = {
  confirmada: 'Confirmada',
  pendiente: 'Pendiente',
  sentada: 'En mesa',
};

const nav = [
  { icon: LayoutGrid, label: 'Sala' },
  { icon: CalendarCheck, label: 'Reservas', active: true },
  { icon: ShoppingBag, label: 'Pedidos' },
  { icon: ChefHat, label: 'Cocina' },
  { icon: Receipt, label: 'Caja' },
];

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
              {nav.map(({ icon: Icon, label, active }) => (
                <li key={label} className={active ? 'is-active' : undefined}>
                  <Icon size={15} strokeWidth={1.8} />
                  {label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="mockup__main">
            <div className="mockup__head">
              <div>
                <p className="mockup__eyebrow">Jueves, servicio de comida</p>
                <p className="mockup__title">Reservas de hoy</p>
              </div>
              <span className="mockup__bell">
                <Bell size={15} strokeWidth={1.8} />
              </span>
            </div>

            <div className="mockup__summary">
              <div>
                <strong>17</strong>
                <span>reservas</span>
              </div>
              <div>
                <strong>58</strong>
                <span>comensales</span>
              </div>
              <div>
                <strong>6</strong>
                <span>pedidos</span>
              </div>
            </div>

            <ol className="mockup__list">
              {reservations.map((r) => (
                <li key={r.name}>
                  <time>{r.time}</time>
                  <span className="mockup__name">{r.name}</span>
                  <span className="mockup__meta">
                    {r.guests} pers. <em>{r.table}</em>
                  </span>
                  <span className={`chip chip--${r.status}`}>{statusLabel[r.status]}</span>
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
              <ShoppingBag size={14} strokeWidth={2} /> Pedido online
            </p>
            <p className="ticket__number">Nº 0142</p>
          </div>
          <p className="ticket__pickup">Para recoger a las 14:15</p>
          <ul className="ticket__items">
            <li>
              <span>2</span> Croquetas caseras
            </li>
            <li>
              <span>1</span> Ensalada de temporada
            </li>
            <li>
              <span>1</span> Tarta de queso
            </li>
          </ul>
          <div className="ticket__actions">
            <span className="ticket__accept">Aceptar</span>
            <span className="ticket__view">Ver detalle</span>
          </div>
        </div>
      </div>
    </div>
  );
}
