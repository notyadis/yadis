import { motion } from 'framer-motion';
import { Play, Instagram } from 'lucide-react';
import heroBackground from '../../../assets/25cfe357e6f7b5056bd7781ee7af12a280e05027.png';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Yadis"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Zimbabwean Rapper
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            className="mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <span className="block text-6xl sm:text-8xl md:text-9xl tracking-wider text-white">
              YADIS
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl tracking-widest text-primary mt-2">
              HECTIC YARD
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            2025 Best Female Zim Hip Hop Award Winner
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#music"
              className="group relative px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 overflow-hidden"
            >
              <span
                className="relative z-10 flex items-center gap-2"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                <Play size={20} />
                Listen Now
              </span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>

            <a
              href="https://instagram.com/yadis.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span
                className="flex items-center gap-2"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                <Instagram size={20} />
                Follow
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
