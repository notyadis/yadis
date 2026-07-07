import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Music', id: 'music' },
  { name: 'Videos', id: 'videos' },
  { name: 'Press', id: 'press' },
  { name: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop — centered pill buttons */}
      <div className="hidden md:flex justify-center pt-5">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              onClick={() => scrollToSection(item.id)}
              className="px-5 py-2 rounded-full text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:bg-white/10"
              style={{
                background: 'rgba(10,10,10,0.55)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'Rubik, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Mobile — hamburger */}
      <div className="md:hidden flex justify-end p-4">
        <button
          className="text-white hover:text-primary transition-colors p-2 rounded-full"
          style={{
            background: 'rgba(10,10,10,0.55)',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(10,10,10,0.85)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-center py-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm tracking-wide"
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
