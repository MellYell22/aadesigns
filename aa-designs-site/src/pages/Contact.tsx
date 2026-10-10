import { ContactForm } from '../components/ContactForm';
import { IconRing } from '../components/Icon';
import { usePageMeta } from '../components/usePageMeta';
import { CONTACT_EMAIL } from '../data';

export default function Contact() {
  usePageMeta(
    'Contact',
    'Start your website, mobile app or AI project with AA Designs. Send an inquiry or email contact@aa-designs.com.',
    '/contact',
  );
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>
            <span className="gold-text">Let's create</span> <span className="pink-text">your next idea</span>
          </h1>
          <hr className="divider" />
          <p className="lead">Tell me about your vision. I'll reply within 24 business hours with next steps.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <div>
            <div className="panel info-item">
              <IconRing name="mail" />
              <div>
                <h3 className="gold-text">EMAIL</h3>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
            <div className="panel info-item">
              <IconRing name="globe" />
              <div>
                <h3 className="gold-text">WEBSITE</h3>
                <p>aa-designs.com</p>
              </div>
            </div>
            <div className="panel info-item">
              <IconRing name="clock" />
              <div>
                <h3 className="gold-text">RESPONSE TIME</h3>
                <p>Within 24 business hours</p>
              </div>
            </div>
            <div className="panel info-item">
              <IconRing name="pin" />
              <div>
                <h3 className="gold-text">WORKING WITH</h3>
                <p>Clients everywhere — fully remote</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
