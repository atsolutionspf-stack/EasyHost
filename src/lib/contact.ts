/**
 * Envío del formulario de demo.
 *
 * - Si `siteConfig.contact.formEndpoint` tiene una URL, se envían los datos en JSON (POST).
 *   Sirve para una Edge Function de Supabase, Formspree, un webhook propio, etc.
 * - Si es `null`, se abre el cliente de correo del visitante con la solicitud redactada.
 */
import { siteConfig } from '../config/site';

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
      body: JSON.stringify({ ...data, source: 'landing-demo' }),
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return { mode: 'sent' };
  }

  const subject = `Solicitud de demo: ${data.restaurant}`;
  const body = [
    `Nombre: ${data.name}`,
    `Restaurante: ${data.restaurant}`,
    `Email: ${data.email}`,
    data.phone ? `Teléfono: ${data.phone}` : '',
    data.message ? `\nMensaje:\n${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { mode: 'mailto' };
}
