import { useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { burmeseErrors, socialLinks } from '../../data/portfolioData.js';
import { Send } from 'lucide-react';

/**
 * Contact form with full validation + Burmese error messages
 */
export default function Contact() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = burmeseErrors.name_required;
    if (!form.email.trim()) {
      newErrors.email = burmeseErrors.email_required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+\$/.test(form.email)) {
      newErrors.email = burmeseErrors.email_invalid;
    }
    if (!form.message.trim()) {
      newErrors.message = burmeseErrors.message_required;
    } else if (form.message.length < 10) {
      newErrors.message = burmeseErrors.message_min;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section ref={ref} className="contact-section">
      <div className={`contactGrid glass \${visible ? 'show' : ''}`}>
        <h2>Contact Me</h2>
        
        <div className="contactForm">
          <form onSubmit={handleSubmit} noValidate>
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="error">{errors.name}</span>}
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="error">{errors.email}</span>}
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project"
                rows="5"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="error">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="btn primary"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : submitted ? 'Sent!' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>

          <div className="contactSocial">
            <h3>Connect</h3>
            <div className="socialRow">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <i className={`fa \${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
