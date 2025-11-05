import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      key: 'step1',
      number: '01',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="10,8 10,13 14,10.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      key: 'step2',
      number: '02',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M8.5 13.5L15.5 17.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M8.5 10.5L15.5 6.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      key: 'step3',
      number: '03',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('howItWorks.title')}</h2>
          <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.key} className="step-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{t(`howItWorks.${step.key}.title`)}</h3>
              <p className="step-description">{t(`howItWorks.${step.key}.description`)}</p>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 L90 10" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
                    <path d="M85 5 L95 10 L85 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

