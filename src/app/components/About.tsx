import { motion } from 'motion/react';
import { Award, Music, Mic, Zap } from 'lucide-react';
const artistImage = "/assets/59d3b84e2e7910a41a81a5fea31dfdb8c9649102.png";

const achievements = [
  { icon: Award, text: '2025 Best Female Zim Hip Hop Award Winner' },
  { icon: Music, text: 'Experimental genre-bending sound' },
  { icon: Mic, text: 'Known for Raw, Authentic Lyricism' },
  { icon: Zap, text: 'Emerging African Female Rapper' },
];

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={artistImage}
                alt="Yadis performing on stage"
                className="w-full h-auto object-cover object-center"
                style={{ aspectRatio: '3/4' }}
              />
              <div className="absolute inset-0 border-4 border-primary/30 pointer-events-none transform translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl mb-4 text-primary" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Hectic Yard
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Yadis is a Harare-born rapper and songwriter whose ascent has redefined the sound of modern Zimbabwean hip-hop. Blending English and Shona with a delivery that is as introspective as it is high-energy, she captures the grit, hustle, and complex emotions of Zimbabwean youth.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                2025 marked her definitive breakout year. After building a loyal following through viral freestyles, she officially entered the scene with her debut project, the Ndakusasa Mixtape, featuring standout tracks like "Kepele" and "Simba Rako." Her momentum continued through the Mashoko Tapes Vol. 2 residency, leading to a landmark performance at Shoko Festival 2025, where she collaborated with UK rapper OneDa on the Mash Up Night stage.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                The year culminated in Yadis being crowned Best Female Artist at the 2025 Zim Hip Hop Awards, solidifying her place at the forefront of the culture. With a growing catalog of hits—including her latest single "FaceCard"—and collaborations with artists like RayKaz, Hooksmith, and Briza, Yadis continues to push creative boundaries while staying rooted in conscious storytelling.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-card border border-primary/20 hover:border-primary/50 transition-colors duration-300"
                  >
                    <Icon className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {achievement.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}