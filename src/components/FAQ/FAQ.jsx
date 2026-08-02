import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { faqs } from '../../data/portfolioData.js';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ accordion section
 */
export default function FAQ() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} className="faq-section">
      <div className={`faqAccordion glass \${visible ? 'show' : ''}`}>
        <h2>Frequently Asked Questions</h2>
        
        <div className="faqList">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faqItem">
              <summary>
                <span>{faq.q}</span>
                <ChevronDown size={20} className="chevron" />
                <span className="burmese">{faq.burmese_q}</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
