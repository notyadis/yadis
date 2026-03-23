import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import bioBackground from '../../assets/f3a4e83d490c11cf5aa459cb6968b9493a3ee9aa.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            About <span className="text-primary">Yadis</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Bio section with background image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 overflow-hidden"
        >
          {/* Background Image with overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src={bioBackground}
              alt="Yadis"
              className="w-full h-full object-cover"
            />
            {/* Red tint overlay */}
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/95"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-3xl sm:text-4xl mb-4 text-primary" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Hectic Yard
              </h3>
              <p className="text-gray-200 mb-4 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Harare-born rapper and songwriter Yadis is a central figure in modern Zimbabwean hip-hop. Blending English and Shona with an introspective delivery, she captures the grit and hustle of Zimbabwean youth.
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                2025 was her breakout year. After building a following through viral freestyles, she released her debut project, the Ndakusasa Mixtape. Her momentum continued through the Mashoko Tapes Vol. 2 residency, leading to a performance at Shoko Festival 2025, where she collaborated with UK rapper OneDa on the Mash Up Night stage. The year concluded with Yadis winning Best Female Artist at the 2025 Zim Hip Hop Awards.
              </p>
              <p className="text-gray-200 mb-6 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                In 2026, Yadis has continued to release new work and expand her reach. Following a performance at Shebeen Fest where she previewed new material, she released the music video for her latest single, "Personari" (produced by Usadaro). She also joined the Music Connects Africa program, further integrating her into the continental music scene. With a catalog that includes tracks from her debut mixtape and collaborations with artists like Hooksmith and Briza, Yadis continues to evolve her sound.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="flex items-start gap-3 p-6 bg-card border-2 border-primary/40 hover:border-primary/60 transition-colors duration-300 max-w-md w-full">
            <Award className="text-primary flex-shrink-0 mt-1" size={28} />
            <p className="text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
              2025 Best Female Zim Hip Hop Award Winner
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}