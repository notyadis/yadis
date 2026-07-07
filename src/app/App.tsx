import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HecticYard } from './components/HecticYard';
import { About } from './components/About';
import { Music } from './components/Music';
import { Videos } from './components/Videos';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import favicon from 'figma:asset/d67320c8e54a5b8ad2d2092088e378cf4d6c7d9b.png';
import siteBackground from '@/imports/Yadis_Website__1_.png';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Yadis - Hectic Yard | Zimbabwean Hip Hop Artist</title>
        <meta name="description" content="Hectic Yard" />
        <link rel="icon" type="image/png" href={favicon} />
        <meta property="og:title" content="Yadis - Hectic Yard" />
        <meta property="og:description" content="Hectic Yard" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hectic Yard" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yadis - Hectic Yard" />
        <meta name="twitter:description" content="Hectic Yard" />
      </Helmet>

      {/* Fixed background — stays frozen while content scrolls */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={siteBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Slight darkening so text sections stay readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-foreground">
        <Navigation />
        <main>
          <Hero />
          <HecticYard />
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
