import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Music } from './components/Music';
import { Videos } from './components/Videos';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Yadis - Hectic Yard | Zimbabwean Hip Hop Artist</title>
        <meta name="description" content="Hectic Yard" />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:title" content="Yadis - Hectic Yard" />
        <meta property="og:description" content="Hectic Yard" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hectic Yard" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yadis - Hectic Yard" />
        <meta name="twitter:description" content="Hectic Yard" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Music />
          <Videos />
          <Press />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}