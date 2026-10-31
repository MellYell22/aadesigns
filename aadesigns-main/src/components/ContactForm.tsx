import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CONTACT_EMAIL } from '../data';

/*
 * Inquiries are delivered to CONTACT_EMAIL through FormSubmit (formsubmit.co) — no server or API key needed.
 * The very first submission triggers a one-time activation email to CONTACT_EMAIL; after it is
 * confirmed, every inquiry arrives in that inbox. If delivery ever fails, the visitor is offered
 * a pre-filled email instead so no lead is lost.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = 'idle' | 'sending' | 'sent' | 'error';

const INITIAL = {
  name: '',
  email: '',
  business: '',
  service: 'Website Design',
  budget: '',
  timeline: '',
  message: '',
  _honey: '',
};

export function ContactForm() {
  const [data, setData] = useState(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (!data.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = 'Please enter a valid email address.';
    if (data.message.trim().length < 10) next.message = 'Please share a few details about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const mailtoHref = () => {
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Business: ${data.business}`,
      `Service: ${data.service}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      '',
      data.message,
    ].join('\n');
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('New project inquiry — ' + data.name)}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (data._honey) return; // bot trap
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New AA Designs inquiry — ${data.name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: data.email,
          Name: data.name,
          Email: data.email,
          Business: data.business || '—',
          Service: data.service,
          Budget: data.budget || '—',
          Timeline: data.timeline || '—',
          Message: data.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === 'false') throw new Error(json.message || 'Send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="panel neon-panel success" role="status">
        <img src="/images/butterfly.webp" alt="" width={110} height={80} />
        <h2 className="gold-text">Thank you, {data.name.split(' ')[0]}!</h2>
        <p className="lead">Your inquiry has been sent. You'll hear back within 24 business hours.</p>
        <button
          className="btn btn-gold"
          onClick={() => {
            setData(INITIAL);
            setStatus('idle');
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="panel neon-panel form" onSubmit={submit} noValidate aria-label="Project inquiry form">
      {status === 'error' && (
        <div className="alert alert-error" role="alert">
          Your message couldn't be sent just now. Please try again, or{' '}
          <a href={mailtoHref()}>
            <strong>email it directly</strong>
          </a>{' '}
          — your details will be filled in for you.
        </div>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">Full name *</label>
          <input id="cf-name" name="name" autoComplete="name" value={data.name} onChange={update} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-err' : undefined} />
          {errors.name && <span className="error" id="cf-name-err">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={data.email} onChange={update} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-err' : undefined} />
          {errors.email && <span className="error" id="cf-email-err">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-business">Business name</label>
          <input id="cf-business" name="business" autoComplete="organization" value={data.business} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="cf-service">I'm interested in</label>
          <select id="cf-service" name="service" value={data.service} onChange={update}>
            <option>Website Design</option>
            <option>iOS &amp; Android App</option>
            <option>AI-Powered Application</option>
            <option>Branding &amp; Design</option>
            <option>Custom Technology Solution</option>
            <option>Ongoing Support</option>
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-budget">Budget range</label>
          <select id="cf-budget" name="budget" value={data.budget} onChange={update}>
            <option value="">Select a range</option>
            <option>Under $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-timeline">Ideal timeline</label>
          <input id="cf-timeline" name="timeline" placeholder="e.g. within 1 month" value={data.timeline} onChange={update} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Tell me about your project *</label>
        <textarea id="cf-message" name="message" value={data.message} onChange={update} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-message-err' : undefined} />
        {errors.message && <span className="error" id="cf-message-err">{errors.message}</span>}
      </div>

      <label className="hp" aria-hidden="true">
        Leave this empty
        <input name="_honey" tabIndex={-1} autoComplete="off" value={data._honey} onChange={update} />
      </label>

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%' }}>
        {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
      </button>
      <p className="form-note">Your details are only used to reply to your inquiry.</p>
    </form>
  );
}
