import { useState, type FormEvent } from 'react';
import { CircleCheck } from 'lucide-react';
import { submitDemoRequest, type SubmitResult } from '../lib/contact';
import { siteConfig } from '../config/site';
import { Button } from './ui/Button';

type State = { status: 'idle' } | { status: 'sending' } | { status: 'done'; result: SubmitResult } | { status: 'error' };

const privacyHref = siteConfig.legal.find((l) => l.href.includes('privacidad'))?.href ?? '#';

/** Formulario de solicitud de demo. La integración real se configura en src/lib/contact.ts. */
export function DemoForm() {
  const [state, setState] = useState<State>({ status: 'idle' });

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
        <p className="form-success__title">{sent ? 'Solicitud enviada' : 'Tu solicitud está lista en tu correo'}</p>
        <p>
          {sent
            ? 'Hemos recibido tus datos. Te contactaremos para organizar la demo.'
            : `Se ha abierto tu aplicación de correo con la solicitud redactada. Envíala para completarla, o escríbenos a ${siteConfig.contact.email}.`}
        </p>
        <button type="button" className="text-button" onClick={() => setState({ status: 'idle' })}>
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="df-name">Nombre</label>
        <input id="df-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="df-restaurant">Restaurante</label>
        <input id="df-restaurant" name="restaurant" type="text" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="df-email">Email</label>
        <input id="df-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="df-phone">
          Teléfono <span className="field__optional">(opcional)</span>
        </label>
        <input id="df-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field field--full">
        <label htmlFor="df-message">
          Cuéntanos sobre tu negocio <span className="field__optional">(opcional)</span>
        </label>
        <textarea id="df-message" name="message" rows={3} />
      </div>
      <div className="field field--full field--check">
        <input id="df-privacy" name="privacy" type="checkbox" required />
        <label htmlFor="df-privacy">
          He leído y acepto la <a href={privacyHref}>política de privacidad</a>.
        </label>
      </div>

      {state.status === 'error' && (
        <p className="form-error field--full" role="alert">
          No se ha podido enviar la solicitud. Inténtalo de nuevo o escríbenos a {siteConfig.contact.email}.
        </p>
      )}

      <Button type="submit" size="lg" className="field--full demo-form__submit" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Enviando…' : siteConfig.primaryCta.label}
      </Button>
    </form>
  );
}
