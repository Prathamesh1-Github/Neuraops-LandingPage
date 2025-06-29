import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Design a modern, minimalist, geometry-driven logo….jpg" 
                alt="NeuraOps Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-light gradient-text">NeuraOps</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed mb-6 max-w-md">
              AI-Powered Manufacturing Intelligence for SMEs. Transform your operations, 
              optimize costs, and maximize profitability with our next-generation platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass-card p-2 hover:bg-white/10 transition-all duration-300">
                <Twitter className="w-5 h-5 text-white/70" strokeWidth={1} />
              </a>
              <a href="#" className="glass-card p-2 hover:bg-white/10 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white/70" strokeWidth={1} />
              </a>
              <a href="#" className="glass-card p-2 hover:bg-white/10 transition-all duration-300">
                <Github className="w-5 h-5 text-white/70" strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/70" strokeWidth={1} />
                <span className="text-white/70 font-light">neuraops@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/70" strokeWidth={1} />
                <span className="text-white/70 font-light">+91 7820885157</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/70" strokeWidth={1} />
                <span className="text-white/70 font-light">+91 8421326469</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/70" strokeWidth={1} />
                <span className="text-white/70 font-light">+91 8530815940</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-white/50 font-light">
            © 2025 NeuraOps. All rights reserved. Built with ❤️ for manufacturers worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}