import { ScanBarcode, Users, ShoppingBag, CalendarCheck, Receipt, Search, CreditCard, Banknote } from 'lucide-react';
import { ui } from '../config/ui';

/**
 * Mockup ilustrativo de Clientia: pantalla de venta del TPV con la ficha del cliente.
 * Construido en HTML/CSS (sin imágenes pesadas). Los datos son de ejemplo.
 * Los textos traducibles están en src/config/ui.ts (bloque `mockup`).
 */

const m = ui.mockup;
const navIcons = [ScanBarcode, Users, ShoppingBag, CalendarCheck, Receipt];
const activeNav = 0;

export function DashboardMockup() {
  return (
    <div className="pos" aria-hidden="true">
      <div className="pos__window">
        <div className="pos__bar">
          <span className="pos__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="pos__url">app.clientia</span>
        </div>

        <div className="pos__body">
          <aside className="pos__side">
            <div className="pos__store">
              <span className="pos__badge">{m.badge}</span>
              <span>{m.store}</span>
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

          <div className="pos__catalog">
            <div className="pos__search">
              <Search size={14} strokeWidth={2} />
              {m.search}
            </div>
            <div className="pos__cats">
              {m.categories.map((c, i) => (
                <span key={c} className={i === 0 ? 'is-active' : undefined}>
                  {c}
                </span>
              ))}
            </div>
            <div className="pos__grid">
              {m.products.map(([name, price], i) => (
                <div key={name} className={`pos__product ${i === 0 ? 'is-picked' : ''}`}>
                  <span className={`pos__swatch pos__swatch--${i}`} />
                  <span className="pos__pname">{name}</span>
                  <span className="pos__price">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pos__ticket">
            <div className="pos__thead">
              <span>{m.ticket}</span>
              <span className="pos__tnum">{ui.steps.number} 0142</span>
            </div>
            <ul className="pos__lines">
              {m.lines.map(([qty, name, total]) => (
                <li key={name}>
                  <span className="pos__qty">{qty}</span>
                  <span className="pos__lname">{name}</span>
                  <span>{total}</span>
                </li>
              ))}
            </ul>
            <div className="pos__total">
              <span>{m.totalLabel}</span>
              <strong>{m.total}</strong>
            </div>
            <div className="pos__methods">
              <span>
                <CreditCard size={14} strokeWidth={2} /> {m.methods[0]}
              </span>
              <span>
                <Banknote size={14} strokeWidth={2} /> {m.methods[1]}
              </span>
            </div>
            <span className="pos__pay">{m.pay}</span>
          </div>
        </div>
      </div>

      {/* Ficha del cliente: el único movimiento orquestado de la página */}
      <div className="client-card">
        <p className="client-card__label">{m.client.label}</p>
        <div className="client-card__head">
          <span className="client-card__avatar">LP</span>
          <div>
            <p className="client-card__name">{m.client.name}</p>
            <p className="client-card__tag">{m.client.tag}</p>
          </div>
        </div>
        <div className="client-card__stats">
          {m.client.stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <span className="client-card__action">{m.client.action}</span>
      </div>
    </div>
  );
}
