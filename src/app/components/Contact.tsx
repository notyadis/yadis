import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Send, MessageCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

// Import Twitter/X icon - need to verify it exists first
const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/yadis.zw',
    color: 'hover:text-pink-500',
  },
  {
    name: 'WhatsApp Community',
    icon: MessageCircle,
    url: 'https://whatsapp.com/channel/0029VbB2YmuIt5rpaDBozh2A',
    color: 'hover:text-green-500',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:notyadis@gmail.com',
    color: 'hover:text-primary',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Management will get back to you soon.\n\nNote: This is a demo form. For real inquiries, please use the social links below.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
            For bookings, collaborations, or media inquiries, reach out through the form below or connect on social media.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 p-8"
          >
            <h3 className="text-3xl mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Send a <span className="text-primary">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-primary/30 focus:border-primary text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-primary/30 focus:border-primary text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-primary/30 focus:border-primary text-foreground"
                  placeholder="Booking / Collaboration / Other"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-background border-primary/30 focus:border-primary text-foreground resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send size={20} />
                <span style={{ fontFamily: 'Rubik, sans-serif' }}>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Join Community */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-8">
              <h3 className="text-3xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Join the <span className="text-primary">Community</span>
              </h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Stay connected with exclusive updates, behind-the-scenes content, and be part of the movement.
              </p>
              <div className="space-y-4">
                <a
                  href="https://whatsapp.com/channel/0029VbB2YmuIt5rpaDBozh2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-black/50 border border-primary/20 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                >
                  <MessageCircle className="text-green-500" size={24} />
                  <div>
                    <p style={{ fontFamily: 'Rubik, sans-serif' }}>WhatsApp Community</p>
                    <p className="text-xs text-gray-400">Get exclusive updates</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/yadis.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-black/50 border border-primary/20 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                >
                  <Instagram className="text-pink-500" size={24} />
                  <div>
                    <p style={{ fontFamily: 'Rubik, sans-serif' }}>Follow on Instagram</p>
                    <p className="text-xs text-gray-400">@yadis.zw</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Management Contact */}
            <div className="bg-card border border-primary/20 p-8">
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Management
              </h3>
              <div className="space-y-3 text-sm text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                <p>
                  <span className="text-primary">Bookings/Inquiries:</span> +263 77 579 5046
                </p>
                <p>
                  <span className="text-primary">Email:</span> notyadis@gmail.com
                </p>
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="bg-card border border-primary/20 p-8">
              <h3 className="text-2xl mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Connect
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col items-center justify-center p-6 bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                    >
                      <Icon size={32} className="mb-2" />
                      <span className="text-xs text-center" style={{ fontFamily: 'Rubik, sans-serif' }}>
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}