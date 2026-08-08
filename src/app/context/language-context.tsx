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
    'hero.title2': 'PERFORMANZE',
    'hero.subtitle': 'Deine tägliche Dosis Euro Truck Simulator 2',
    'hero.followButton': 'Folge uns auf TikTok',
    'hero.learnMore': 'Mehr erfahren',
    'hero.partnershipBadge': '🤝 Neue Partnerschaft mit Zehl Transporte',
    
    // Gallery Section
    'gallery.title': 'Auf der Straße',
    'gallery.subtitle': 'Einblicke in meine Touren quer durch Europa',
    'gallery.filter.all': 'Alle',
    'gallery.filter.gameplay': 'Gameplay',
    'gallery.filter.trucks': 'Trucks',
    'gallery.filter.routes': 'Routen',
    'gallery.filter.night': 'Nacht',
    'gallery.stats.images': 'Bilder',
    'gallery.stats.kilometers': 'Kilometer',
    'gallery.stats.countries': 'Länder',
    'gallery.stats.tours': 'Touren',
    
    // Features Section
    'features.title': 'Warum Baron Performanze?',
    'features.subtitle': 'Mehr als nur Truck-Simulator - eine Leidenschaft für die Straße',
    'features.realistic.title': 'Realistische Touren',
    'features.realistic.desc': 'Durch unser Fleet System Trucky und Trucksbook halten wir einen ordentlichen Überblick über die Aufträge.',
    'features.routes.title': 'Spannende Routen',
    'features.routes.desc': 'Von Skandinavien bis Italien auf der Standard Karte oder auch im 1 zu 1 Maßstab auf der RPM Karte.',
    'features.content.title': 'Content',
    'features.content.desc': 'Regelmäßige Videos und Highlights mit Hilfe von Bildern der Fahrer.',
    'features.skill.title': 'Skill & Präzision',
    'features.skill.desc': 'Besondere Angebote wie ADR, Gigaliner, Tiefbett, Tieflader und noch so einiges mehr.',

    // Partners Section
    'partners.newBadge': 'Neue Partnerschaft',
    'partners.title': 'Unsere Partnerschaft',
    'partners.subtitle': 'Doppelte Stärke, ein gemeinsames Ziel.',
    'partners.description': 'Mit unserem Partner Zehl Transporte haben wir die BP & ZT Group gegründet um noch flexibler zu sein und einen gemeinsam größeren Kundenstamm abzudecken.',

    // Zehl Transporte Section
    'zehl.title': 'Zehl Transporte',
    'zehl.subtitle': 'Unser Partner auf der Straße',
    'zehl.description': 'Mit unserem Partner Zehl Transporte haben wir die BP & ZT Group gegründet um noch flexibler zu sein und einen gemeinsam größeren Kundenstamm abzudecken.',

    // CTA Section
    'cta.title': 'Bereit für die nächste Tour?',
    'cta.subtitle': 'Komm mit auf die Straße! Verpasse keine meiner ETS2-Touren mehr und folge Baron Performanze auf TikTok!',
    'cta.button': 'Jetzt folgen',
    
    // Footer
    'footer.subtitle': 'Euro Truck Simulator 2 • Virtuelle LKW Firma',
    'footer.copyright': '© 2026 Baron Performanze. Alle Rechte vorbehalten.',
    'footer.discord': 'Discord',
  },
  en: {
    // Hero Section
    'hero.title1': 'BARON',
    'hero.title2': 'PERFORMANZE',
    'hero.subtitle': 'Your daily dose of Euro Truck Simulator 2',
    'hero.followButton': 'Follow us on TikTok',
    'hero.learnMore': 'Learn more',
    'hero.partnershipBadge': '🤝 New Partnership with Zehl Transporte',
    
    // Gallery Section
    'gallery.title': 'On the Road',
    'gallery.subtitle': 'Insights into my tours across Europe',
    'gallery.filter.all': 'All',
    'gallery.filter.gameplay': 'Gameplay',
    'gallery.filter.trucks': 'Trucks',
    'gallery.filter.routes': 'Routes',
    'gallery.filter.night': 'Night',
    'gallery.stats.images': 'Images',
    'gallery.stats.kilometers': 'Kilometers',
    'gallery.stats.countries': 'Countries',
    'gallery.stats.tours': 'Tours',
    
    // Features Section
    'features.title': 'Why Baron Performanze?',
    'features.subtitle': 'More than just a truck simulator - a passion for the road',
    'features.realistic.title': 'Realistic Tours',
    'features.realistic.desc': 'With our fleet system Trucky and Trucksbook we maintain a clear overview of all orders.',
    'features.routes.title': 'Exciting Routes',
    'features.routes.desc': 'From Scandinavia to Italy on the standard map or even 1:1 scale on the RPM map.',
    'features.content.title': 'Content',
    'features.content.desc': 'Regular videos and highlights with the help of pictures from our drivers.',
    'features.skill.title': 'Skill & Precision',
    'features.skill.desc': 'Special loads like ADR, Gigaliner, lowbed, low loader and much more.',

    // Partners Section
    'partners.newBadge': 'New Partnership',
    'partners.title': 'Our Partnership',
    'partners.subtitle': 'Double strength, one common goal.',
    'partners.description': 'Together with our partner Zehl Transporte we founded the BP & ZT Group to be even more flexible and cover a jointly larger customer base.',

    // Zehl Transporte Section
    'zehl.title': 'Zehl Transporte',
    'zehl.subtitle': 'Our partner on the road',
    'zehl.description': 'Together with our partner Zehl Transporte we founded the BP & ZT Group to be even more flexible and cover a jointly larger customer base.',

    // CTA Section
    'cta.title': 'Ready for the Next Tour?',
    'cta.subtitle': 'Join me on the road! Don\'t miss any of my ETS2 tours and follow Baron Performanze on TikTok!',
    'cta.button': 'Follow Now',
    
    // Footer
    'footer.subtitle': 'Euro Truck Simulator 2 • Virtuell Truck Company',
    'footer.copyright': '© 2026 Baron Performanze. All rights reserved.',
    'footer.discord': 'Discord',
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
