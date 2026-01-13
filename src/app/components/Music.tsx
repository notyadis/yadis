import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';
import faceCardCover from 'figma:asset/3a43c781dfbc65f33f33726b3407b849c9b07b36.png';
import ndakusasaCover from 'figma:asset/c21eefb525c064d4449d63df929042b50b74193c.png';

const tracks = [
  {
    title: 'FaceCard',
    cover: faceCardCover,
    description: 'Latest single',
    url: 'https://open.spotify.com/track/3DcYqlFUmCrxUg9TZfcz4c?si=7edc5e1e50f24e65',
  },
  {
    title: 'Ndakusasa EP',
    cover: ndakusasaCover,
    description: 'Debut project featuring Kepele & Simba Rako',
    url: 'https://open.spotify.com/album/5ztJ00AZzyiBxuRCdqaMRG?si=7Ey3bT2OQ9GsDd36PK1SLA',
  },
];

export function Music() {
  return (
    <section id="music" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            <span className="text-primary">Music</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Featured Tracks */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {tracks.map((track, index) => (
            <motion.a
              key={index}
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  {track.title}
                </h3>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  {track.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Spotify Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/20 p-6 sm:p-8"
        >
          <h3 className="text-3xl mb-6 text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            <span className="text-primary">Yadis Feature Tracks</span>
          </h3>
          <div className="w-full bg-secondary/50 flex items-center justify-center rounded overflow-hidden">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/1XcAH3NyfAQBNvZT6dOxfI?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>
        </motion.div>

        {/* Platform Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://music.apple.com/zw/artist/yadis/1819582010"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <span style={{ fontFamily: 'Rubik, sans-serif' }}>Apple Music</span>
            <ExternalLink size={18} />
          </a>
          <a
            href="https://music.youtube.com/channel/UCf18qWlLgLOWj4l0j5YUpUA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <span style={{ fontFamily: 'Rubik, sans-serif' }}>YouTube Music</span>
            <ExternalLink size={18} />
          </a>
          <a
            href="https://soundcloud.com/notyadis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <span style={{ fontFamily: 'Rubik, sans-serif' }}>SoundCloud</span>
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}