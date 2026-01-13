import { motion } from 'motion/react';
import { Download, FileText, Image, Music } from 'lucide-react';

const pressItems = [
  {
    icon: FileText,
    title: 'Artist Bio',
    description: 'Full biography and press release',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1iva6x-TgxhL9b5I0fe0S6LiN8LA7NcaF/view?usp=sharing',
  },
  {
    icon: Image,
    title: 'Press Photos',
    description: 'High-resolution promotional images',
    type: 'ZIP',
    url: 'https://drive.google.com/drive/folders/1ZZsGYTuU998FxiJHkjDsvoHqebwCJghj?usp=sharing',
  },
  {
    icon: Music,
    title: 'Music Samples',
    description: 'Track snippets and audio clips',
    type: 'ZIP',
    url: 'https://drive.google.com/drive/folders/1ZkzQBy8RhLQX_EI6Atonv7uC9wvjqG0E?usp=sharing',
  },
];

const highlights = [
  '2025 Best Female Zim Hip Hop Award Winner',
  '4-time award nominee at the Zim Hip Hop Awards',
  'Performed at Shoko Festival: Mashup Night 2025',
  'Over 50k+ streams across all platforms',
];

export function Press() {
  const handleDownload = (item: any) => {
    if (item.url) {
      window.open(item.url, '_blank');
    } else {
      // In a real implementation, this would download actual files
      console.log(`Downloading: ${item.title}`);
      alert(`Download initiated for: ${item.title}\n\nNote: This is a demo. Contact management for actual press materials.`);
    }
  };

  return (
    <section id="press" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Press <span className="text-primary">Kit</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Download official press materials, photos, and EPK for media coverage and promotional use.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Download Items */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {pressItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary" style={{ fontFamily: 'Rubik, sans-serif' }}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleDownload(item)}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download size={18} />
                      <span style={{ fontFamily: 'Rubik, sans-serif' }}>Download</span>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Full EPK Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    Complete Press Kit
                  </h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    Download everything in one convenient package
                  </p>
                </div>
                <button
                  onClick={() => handleDownload('Complete EPK')}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white transition-all duration-300 whitespace-nowrap"
                >
                  <span className="flex items-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    <Download size={20} />
                    Download All
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Career Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 p-6 h-fit"
          >
            <h3 className="text-2xl mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Career <span className="text-primary">Highlights</span>
            </h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact for Press */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-secondary/50 border border-primary/20 p-8"
        >
          <h3 className="text-2xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Media Inquiries
          </h3>
          <p className="text-gray-300 mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>
            For interviews, features, or booking inquiries, please contact management
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span style={{ fontFamily: 'Rubik, sans-serif' }}>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}