import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Hero Section
    'hero.title1': 'BARON',
    'hero.title2': 'PERFORMANCE',
    'hero.subtitle': 'Deine tägliche Dosis Euro Truck Simulator 2',
    'hero.followButton': 'Folge uns auf TikTok',
    'hero.learnMore': 'Mehr erfahren',
    
    // Gallery Section
    'gallery.title': 'Auf der Straße',
    'gallery.subtitle': 'Einblicke in meine Touren quer durch Europa',
    
    // Features Section
    'features.title': 'Warum Baron Performance?',
    'features.subtitle': 'Mehr als nur Truck-Simulator - eine Leidenschaft für die Straße',
    'features.realistic.title': 'Realistische Touren',
    'features.realistic.desc': 'Authentische Frachten quer durch Europa mit realistischer Simulation',
    'features.routes.title': 'Spannende Routen',
    'features.routes.desc': 'Von Skandinavien bis Italien - entdecke die schönsten Strecken',
    'features.content.title': 'Täglicher Content',
    'features.content.desc': 'Regelmäßige Videos und Highlights von meinen Trucking-Abenteuern',
    'features.skill.title': 'Skill & Präzision',
    'features.skill.desc': 'Perfekte Manöver, enge Kurven und meisterhafte Parkjobs',
    
    // CTA Section
    'cta.title': 'Bereit für die nächste Tour?',
    'cta.subtitle': 'Komm mit auf die Straße! Verpasse keine meiner ETS2-Touren mehr und folge Baron Performance auf TikTok!',
    'cta.button': 'Jetzt folgen',
    
    // Footer
    'footer.subtitle': 'Euro Truck Simulator 2 • Content Creator',
    'footer.copyright': '© 2026 Baron Performance. Alle Rechte vorbehalten.',
  },
  en: {
    // Hero Section
    'hero.title1': 'BARON',
    'hero.title2': 'PERFORMANCE',
    'hero.subtitle': 'Your daily dose of Euro Truck Simulator 2',
    'hero.followButton': 'Follow us on TikTok',
    'hero.learnMore': 'Learn more',
    
    // Gallery Section
    'gallery.title': 'On the Road',
    'gallery.subtitle': 'Insights into my tours across Europe',
    
    // Features Section
    'features.title': 'Why Baron Performance?',
    'features.subtitle': 'More than just a truck simulator - a passion for the road',
    'features.realistic.title': 'Realistic Tours',
    'features.realistic.desc': 'Authentic cargo across Europe with realistic simulation',
    'features.routes.title': 'Exciting Routes',
    'features.routes.desc': 'From Scandinavia to Italy - discover the most beautiful routes',
    'features.content.title': 'Daily Content',
    'features.content.desc': 'Regular videos and highlights from my trucking adventures',
    'features.skill.title': 'Skill & Precision',
    'features.skill.desc': 'Perfect maneuvers, tight turns and masterful parking jobs',
    
    // CTA Section
    'cta.title': 'Ready for the Next Tour?',
    'cta.subtitle': 'Join me on the road! Don\'t miss any of my ETS2 tours and follow Baron Performance on TikTok!',
    'cta.button': 'Follow Now',
    
    // Footer
    'footer.subtitle': 'Euro Truck Simulator 2 • Content Creator',
    'footer.copyright': '© 2026 Baron Performance. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
