import { HeroSection } from './components/hero-section';
import { GallerySection } from './components/gallery-section';
import { FeaturesSection } from './components/features-section';
import { CTASection } from './components/cta-section';
import { Footer } from './components/footer';
import { LanguageSwitcher } from './components/language-switcher';
import { LanguageProvider } from './context/language-context';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#dc2626',
    },
    background: {
      default: '#000000',
      paper: '#18181b',
    },
  },
});

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
          <LanguageSwitcher />
          <HeroSection />
          <GallerySection />
          <FeaturesSection />
          <CTASection />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}