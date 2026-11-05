/**
 * Envío del formulario de demo.
 *
 * - Si `siteConfig.contact.formEndpoint` tiene una URL, se envían los datos en JSON (POST).
 *   Sirve para una Edge Function de Supabase, Formspree, un webhook propio, etc.
 * - Si es `null`, se abre el cliente de correo del visitante con la solicitud redactada.
 */
import { siteConfig } from '../config/site';
import { ui } from '../config/ui';

export type DemoRequest = {
  name: string;
  restaurant: string;
  email: string;
  phone?: string;
  message?: string;
};

export type SubmitResult = { mode: 'sent' } | { mode: 'mailto' };

export async function submitDemoRequest(data: DemoRequest): Promise<SubmitResult> {
  const { formEndpoint, email } = siteConfig.contact;

  if (formEndpoint) {
    const res = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, lang: document.documentElement.lang, source: 'landing-demo' }),
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return { mode: 'sent' };
  }

  const f = ui.form;
  const subject = `${f.mailSubject}: ${data.restaurant}`;
  const body = [
    `${f.name}: ${data.name}`,
    `${f.restaurant}: ${data.restaurant}`,
    `${f.email}: ${data.email}`,
    data.phone ? `${f.phone}: ${data.phone}` : '',
    data.message ? `\n${f.message}:\n${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { mode: 'mailto' };
}
