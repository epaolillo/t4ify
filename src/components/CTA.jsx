import { useTranslation } from 'react-i18next';
import './CTA.css';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="cta">
      <div className="cta-background">
        <svg className="cta-bacteriophage" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1ab7ea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0e7a9f" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <polygon points="100,95 80,105 80,118 100,125 120,118 120,105" fill="url(#ctaGradient)" stroke="#1ab7ea" strokeWidth="1.5"/>
          <ellipse cx="100" cy="120" rx="20" ry="7" fill="url(#ctaGradient)"/>
          <rect x="92" y="120" width="16" height="70" fill="url(#ctaGradient)" rx="3"/>
          <ellipse cx="100" cy="190" rx="18" ry="6" fill="url(#ctaGradient)"/>
          <path d="M85 190 L55 260 M100 190 L100 260 M115 190 L145 260" stroke="url(#ctaGradient)" strokeWidth="2.5"/>
          <circle cx="55" cy="260" r="3.5" fill="#1ab7ea" opacity="0.5"/>
          <circle cx="100" cy="260" r="3.5" fill="#1ab7ea" opacity="0.5"/>
          <circle cx="145" cy="260" r="3.5" fill="#1ab7ea" opacity="0.5"/>
        </svg>
      </div>

      <div className="cta-content">
        <h2 className="cta-title">{t('cta.title')}</h2>
        <p className="cta-description">{t('cta.description')}</p>
        <button className="btn btn-cta">{t('cta.button')}</button>
      </div>
    </section>
  );
};

export default CTA;

