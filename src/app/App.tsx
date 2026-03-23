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
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Red glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
          {/* Subtle grain texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="relative z-10">
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
      </div>
    </HelmetProvider>
  );
}