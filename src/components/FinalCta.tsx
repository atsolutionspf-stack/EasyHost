import { Mail, Phone } from 'lucide-react';
import { finalCtaContent } from '../config/content';
import { siteConfig } from '../config/site';
import { useReveal } from '../hooks/useReveal';
import { DemoForm } from './DemoForm';
import { ConfigText } from './ui/Placeholder';

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  const { email, phone } = siteConfig.contact;

  return (
    <section id="contacto" className="final-cta" aria-labelledby="cta-title">
      <div ref={ref} className="container final-cta__grid reveal">
        <div className="final-cta__copy">
          <h2 id="cta-title" className="final-cta__title">
            {finalCtaContent.title}
          </h2>
          <p className="final-cta__text">{finalCtaContent.text}</p>
          <ul className="final-cta__contact">
            <li>
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
              <ConfigText value={phone} />
            </li>
          </ul>
        </div>

        <div className="final-cta__form">
          <h3 className="form-title">{finalCtaContent.formTitle}</h3>
          <p className="form-intro">{finalCtaContent.formIntro}</p>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
