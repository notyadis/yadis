import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const videos = [
  {
    title: 'FaceCard (Official Video)',
    thumbnail: 'https://img.youtube.com/vi/7UTjKGTVgeU/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/7UTjKGTVgeU',
  },
  {
    title: 'Simba Rako (Official Video)',
    thumbnail: 'https://img.youtube.com/vi/zkJwHVoOPfc/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/zkJwHVoOPfc?si=VRLdaf63lWPdz-DM',
  },
  {
    title: 'Live Performance - Shoko Festival',
    thumbnail: 'https://img.youtube.com/vi/5FoAKHqIslU/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/5FoAKHqIslU?si=f-K9cdCS8LliOyVu',
  },
];

export function Videos() {
  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-secondary to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            <span className="text-primary">Videos</span> & Visuals
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-card border-2 border-primary/30 overflow-hidden shadow-[0_0_40px_rgba(164,30,34,0.3)]"
        >
          <div className="aspect-video w-full bg-secondary/50 flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0fdJisNrwLQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary text-white text-xs tracking-wider" style={{ fontFamily: 'Rubik, sans-serif' }}>
                NEW RELEASE
              </span>
              <span className="text-xs text-gray-400" style={{ fontFamily: 'Rubik, sans-serif' }}>
                2026
              </span>
            </div>
            <h3 className="text-3xl mb-2 text-primary" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Personari - Official Music Video
            </h3>
            <p className="text-gray-400" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Watch the official music video for Personari by Yadis (Produced by Usadaro)
            </p>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/80 group-hover:bg-primary flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm group-hover:text-primary transition-colors" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  {video.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@YadisZW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white transition-all duration-300"
          >
            <span style={{ fontFamily: 'Rubik, sans-serif' }}>
              View All on YouTube →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}