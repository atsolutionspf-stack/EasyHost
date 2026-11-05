import { useState, type FormEvent } from 'react';
import { CircleCheck } from 'lucide-react';
import { submitDemoRequest, type SubmitResult } from '../lib/contact';
import { siteConfig } from '../config/site';
import { ui } from '../config/ui';
import { Button } from './ui/Button';

type State = { status: 'idle' } | { status: 'sending' } | { status: 'done'; result: SubmitResult } | { status: 'error' };

/** El primer enlace legal que sea la política de privacidad (en cualquiera de los dos idiomas). */
const privacyHref = siteConfig.legal.find((l) => /privac/.test(l.href))?.href ?? '#';

/** Formulario de solicitud de demo. La integración real se configura en src/lib/contact.ts. */
export function DemoForm() {
  const [state, setState] = useState<State>({ status: 'idle' });
  const f = ui.form;
  const email = siteConfig.contact.email;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState({ status: 'sending' });
    try {
      const result = await submitDemoRequest({
        name: String(data.get('name') ?? ''),
        restaurant: String(data.get('restaurant') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
      });
      setState({ status: 'done', result });
      if (result.mode === 'sent') form.reset();
    } catch {
      setState({ status: 'error' });
    }
  }

  if (state.status === 'done') {
    const sent = state.result.mode === 'sent';
    return (
      <div className="form-success" role="status">
        <CircleCheck size={28} strokeWidth={1.75} aria-hidden="true" />
        <p className="form-success__title">{sent ? f.sentTitle : f.mailtoTitle}</p>
        <p>{sent ? f.sentText : f.mailtoText(email)}</p>
        <button type="button" className="text-button" onClick={() => setState({ status: 'idle' })}>
          {f.again}
        </button>
      </div>
    );
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="df-name">{f.name}</label>
        <input id="df-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="df-restaurant">{f.restaurant}</label>
        <input id="df-restaurant" name="restaurant" type="text" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="df-email">{f.email}</label>
        <input id="df-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="df-phone">
          {f.phone} <span className="field__optional">{f.optional}</span>
        </label>
        <input id="df-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field field--full">
        <label htmlFor="df-message">
          {f.message} <span className="field__optional">{f.optional}</span>
        </label>
        <textarea id="df-message" name="message" rows={3} />
      </div>
      <div className="field field--full field--check">
        <input id="df-privacy" name="privacy" type="checkbox" required />
        <label htmlFor="df-privacy">
          {f.privacyBefore}
          <a href={privacyHref}>{f.privacyLink}</a>.
        </label>
      </div>

      {state.status === 'error' && (
        <p className="form-error field--full" role="alert">
          {f.error(email)}
        </p>
      )}

      <Button type="submit" size="lg" className="field--full demo-form__submit" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? f.sending : siteConfig.primaryCta.label}
      </Button>
    </form>
  );
}
