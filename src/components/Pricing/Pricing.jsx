import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { pricingPlans } from '../../data/portfolioData.js';
import { Check } from 'lucide-react';

/**
 * Pricing table with 3 tiers
 */
export default function Pricing() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} className="pricing-section">
      <div className={`pricingGrid glass \${visible ? 'show' : ''}`}>
        <h2>Pricing</h2>
        
        <div className="pricingCards">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`pricingCard \${plan.recommended ? 'recommended' : ''}`}
            >
              {plan.recommended && <span className="recommended-badge">Recommended</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">\${plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              
              <ul className="features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="/contact" className="btn primary">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
