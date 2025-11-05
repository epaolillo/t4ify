import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import stepsImage from '../images/steps.png';

const Hero = () => {
  const { t } = useTranslation();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const phrases = t('hero.rotatingPhrases', { returnObjects: true });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
      
    }, 5000); // Change phrase every 5 seconds

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <section className="hero">
      <div className="hero-background">
        {/* Animated bacteriophage particles */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}>
            <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5 L20 15" stroke="currentColor" strokeWidth="2"/>
              <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.6"/>
              <path d="M14 26 L10 40 M20 26 L20 40 M26 26 L30 40" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="10" cy="40" r="1.5" fill="currentColor"/>
              <circle cx="20" cy="40" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="40" r="1.5" fill="currentColor"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className={`hero-title hero-rotating-title ${isVisible ? 'visible' : 'hidden'}`}>
          {phrases[currentPhraseIndex]}
        </h1>
        <p className="hero-description">
          {t('hero.description')}
        </p>
        
        <div className="hero-steps-container">
          <img src={stepsImage} alt="Steps" className="hero-steps-image" />
        </div>
        

      </div>
    </section>
  );
};

export default Hero;

