import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <svg className="footer-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L50 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            <path d="M35 60 L25 85 M50 60 L50 85 M65 60 L75 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="25" cy="85" r="3" fill="currentColor"/>
            <circle cx="50" cy="85" r="3" fill="currentColor"/>
            <circle cx="75" cy="85" r="3" fill="currentColor"/>
          </svg>
          <span className="footer-brand">T4ify</span>
        </div>
        
        <p className="footer-tagline">{t('footer.tagline')}</p>
        
        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter/X">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4l9.68 13L4 20h2.31l7.49-10.68L21 20h2L13.32 7L23 4h-2.31l-6.86 9.77L7 4H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} T4ify. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

