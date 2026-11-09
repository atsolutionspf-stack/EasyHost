import { useRef, useState, type FocusEvent, type FormEvent } from 'react';
import { CircleCheck } from 'lucide-react';
import { submitDemoRequest, type SubmitResult } from '../lib/contact';
import { siteConfig } from '../config/site';
import { ui } from '../config/ui';
import { Button } from './ui/Button';

type State = { status: 'idle' } | { status: 'sending' } | { status: 'done'; result: SubmitResult } | { status: 'error' };
type FieldName = 'name' | 'restaurant' | 'email' | 'privacy';
type Errors = Partial<Record<FieldName, string>>;

/** El primer enlace legal que sea la política de privacidad (en cualquiera de los dos idiomas). */
const privacyHref = siteConfig.legal.find((l) => /privac/.test(l.href))?.href ?? '#';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ORDER: FieldName[] = ['name', 'restaurant', 'email', 'privacy'];

/** Valida un campo y devuelve el mensaje de error, o undefined si es correcto. */
function validate(field: FieldName, form: HTMLFormElement): string | undefined {
  const e = ui.form.fieldErrors;
  const el = form.elements.namedItem(field) as HTMLInputElement | null;
  if (!el) return undefined;
  if (field === 'privacy') return el.checked ? undefined : e.privacy;
  const value = el.value.trim();
  if (field === 'email') {
    if (!value) return e.emailEmpty;
    return EMAIL_RE.test(value) ? undefined : e.emailFormat;
  }
  if (!value) return field === 'name' ? e.name : e.restaurant;
  return undefined;
}

/**
 * Formulario de solicitud de demo. La integración real se configura en src/lib/contact.ts.
 * Validación: al salir de cada campo (nunca mientras se escribe por primera vez); el error
 * desaparece con la primera corrección; el botón de enviar está siempre activo.
 */
export function DemoForm() {
  const [state, setState] = useState<State>({ status: 'idle' });
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const f = ui.form;
  const email = siteConfig.contact.email;

  const setFieldError = (field: FieldName, message: string | undefined) =>
    setErrors((prev) => (prev[field] === message ? prev : { ...prev, [field]: message }));

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const field = e.currentTarget.name as FieldName;
    if (!ORDER.includes(field) || !formRef.current) return;
    setFieldError(field, validate(field, formRef.current));
  };
  const clear = (field: FieldName) => () => setFieldError(field, undefined);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === 'sending') return;
    const form = e.currentTarget;
    const next: Errors = {};
    for (const field of ORDER) next[field] = validate(field, form);
    setErrors(next);
    const firstInvalid = ORDER.find((field) => next[field]);
    if (firstInvalid) {
      const el = form.elements.namedItem(firstInvalid) as HTMLElement | null;
      el?.focus();
      el?.scrollIntoView({ block: 'center' });
      return;
    }

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

  /** Atributos comunes de accesibilidad y validación para un campo. */
  const fieldProps = (field: FieldName) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `df-${field}-error` : undefined,
    onBlur,
    onInput: clear(field),
  });
  const ErrorText = ({ field }: { field: FieldName }) =>
    errors[field] ? (
      <p id={`df-${field}-error`} className="field__error">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="demo-form" onSubmit={handleSubmit} noValidate>
      <div className={`field ${errors.name ? 'field--invalid' : ''}`}>
        <label htmlFor="df-name">{f.name}</label>
        <input id="df-name" name="name" type="text" autoComplete="name" required {...fieldProps('name')} />
        <ErrorText field="name" />
      </div>
      <div className={`field ${errors.restaurant ? 'field--invalid' : ''}`}>
        <label htmlFor="df-restaurant">{f.restaurant}</label>
        <input
          id="df-restaurant"
          name="restaurant"
          type="text"
          autoComplete="organization"
          required
          {...fieldProps('restaurant')}
        />
        <ErrorText field="restaurant" />
      </div>
      <div className={`field ${errors.email ? 'field--invalid' : ''}`}>
        <label htmlFor="df-email">{f.email}</label>
        <input id="df-email" name="email" type="email" autoComplete="email" required {...fieldProps('email')} />
        <ErrorText field="email" />
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
      <div className={`field field--full ${errors.privacy ? 'field--invalid' : ''}`}>
        <div className="field--check">
          <input id="df-privacy" name="privacy" type="checkbox" required {...fieldProps('privacy')} onChange={clear('privacy')} />
          <label htmlFor="df-privacy">
            {f.privacyBefore}
            <a href={privacyHref}>{f.privacyLink}</a>.
          </label>
        </div>
        <ErrorText field="privacy" />
      </div>

      {state.status === 'error' && (
        <p className="form-error field--full" role="alert">
          {f.error(email)}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="field--full demo-form__submit"
        aria-busy={state.status === 'sending' ? true : undefined}
      >
        {state.status === 'sending' ? f.sending : siteConfig.primaryCta.label}
      </Button>
    </form>
  );
}
