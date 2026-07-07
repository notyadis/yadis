import { motion } from 'motion/react';
import { Play, Instagram } from 'lucide-react';

function FolderIcon() {
  return (
    <svg width="96" height="80" viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="folderBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5ec4f5" />
          <stop offset="100%" stopColor="#2a9fd6" />
        </linearGradient>
        <linearGradient id="folderTab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd4f8" />
          <stop offset="100%" stopColor="#4db8e8" />
        </linearGradient>
        <linearGradient id="folderSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.4)" />
        </filter>
      </defs>
      <path
        d="M6 22 C6 22 6 16 12 16 L34 16 C38 16 40 20 40 20 L40 26 L6 26 Z"
        fill="url(#folderTab)"
        filter="url(#shadow)"
      />
      <rect x="6" y="24" width="84" height="52" rx="5" ry="5" fill="url(#folderBody)" filter="url(#shadow)" />
      <rect x="6" y="24" width="84" height="26" rx="5" ry="5" fill="url(#folderSheen)" />
    </svg>
  );
}

export function Hero() {
  const scrollToHecticYard = () => {
    const el = document.getElementById('hectic-yard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* No background here — uses the global fixed background in App */}

      <div className="relative z-10 flex flex-col items-center gap-16">
        {/* Folder icon */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToHecticYard}
          className="flex flex-col items-center gap-2 cursor-pointer group select-none bg-transparent border-0 p-0"
        >
          <div className="drop-shadow-2xl group-hover:drop-shadow-[0_8px_24px_rgba(94,196,245,0.5)] transition-all duration-300">
            <FolderIcon />
          </div>
          <span
            className="text-white text-sm tracking-wide"
            style={{ fontFamily: 'Rubik, sans-serif', textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
          >
            Hectic Yard
          </span>
        </motion.button>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#music"
            className="group relative px-8 py-4 text-black transition-all duration-300 overflow-hidden font-medium"
            style={{ background: '#c6c499', fontFamily: 'Rubik, sans-serif' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play size={20} />
              Listen Now
            </span>
            <div className="absolute inset-0 bg-black/15 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

          <a
            href="https://instagram.com/yadis.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 transition-all duration-300 font-medium"
            style={{ borderColor: '#c6c499', color: '#c6c499', fontFamily: 'Rubik, sans-serif' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#c6c499';
              (e.currentTarget as HTMLAnchorElement).style.color = '#000';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#c6c499';
            }}
          >
            <span className="flex items-center gap-2">
              <Instagram size={20} />
              Follow
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
