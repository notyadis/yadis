import { Instagram, Mail, Music } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-primary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              YAD<span className="text-primary">I</span>S
            </h3>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Hectic Yard
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Music', 'Videos', 'Press', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://music.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Music size={20} />
              </a>
              <a
                href="mailto:info@yadis.com"
                className="w-10 h-10 bg-secondary border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400" style={{ fontFamily: 'Rubik, sans-serif' }}>
              © {currentYear} Yadis. All rights reserved.
            </p>
            <p className="text-xs text-gray-500" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Website by Yadis • Hectic Yard
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}