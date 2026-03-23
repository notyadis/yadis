import { motion } from 'motion/react';
import { Play, Instagram, Music } from 'lucide-react';
import heroBackground from '@/asset/25cfe357e6f7b5056bd7781ee7af12a280e05027.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Yadis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-primary/10"></div>
        {/* Grunge texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <span className="block text-6xl sm:text-8xl md:text-9xl tracking-wider text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              YADIS
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl tracking-widest text-primary mt-2 drop-shadow-[0_0_20px_rgba(164,30,34,0.8)]">
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
              className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                <Play size={20} />
                Listen Now
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>

            <a
              href="https://instagram.com/yadis.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span className="flex items-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
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