import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* T4 Bacteriophage inspired icon */}
            <path d="M50 10 L50 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            <path d="M35 60 L25 85 M50 60 L50 85 M65 60 L75 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="25" cy="85" r="3" fill="currentColor"/>
            <circle cx="50" cy="85" r="3" fill="currentColor"/>
            <circle cx="75" cy="85" r="3" fill="currentColor"/>
          </svg>
          <span className="logo-text">T4ify</span>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={() => scrollToSection('features')}>{t('nav.features')}</a></li>
          <li><a onClick={() => scrollToSection('how-it-works')}>{t('nav.howItWorks')}</a></li>
          <li><a onClick={() => scrollToSection('pricing')}>{t('nav.pricing')}</a></li>
          <li>
            <button className="lang-toggle" onClick={toggleLanguage}>
              {i18n.language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

