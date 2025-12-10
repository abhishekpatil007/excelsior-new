'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:col-span-2 lg:col-span-1"
          >
            {/* Logo */}
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  src="/logo.jpg"
                  alt="Excelsior Logo"
                  className="h-16 sm:h-20 w-auto object-contain cursor-pointer"
                  style={{ filter: 'brightness(1.1)' }}
                />
              </Link>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Excelsior is a premium stock market training institute dedicated to empowering individuals with the knowledge and skills to achieve financial independence.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Why Us', href: '/why-us' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Courses', href: '/courses' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>



          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:justify-self-end lg:justify-self-auto"
          >
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start sm:items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all sm:break-normal">tradexcelsior@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 94818 68529</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Pune, Bengaluru, Chennai, Hubli, Belagavi</span>
              </div>
            </div>

            {/* Batch Timings */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
                <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                Class Timings (IST)
              </h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>Mon - Fri: 12-2 PM & 8-10 PM</div>
                <div>Sat - Sun: 12-4 PM</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Excelsior. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-center sm:text-left">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-cyan-400 transition-colors text-center sm:text-left">
              Terms of Service
            </Link>
            <Link href="/cancellation-refund-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-center sm:text-left">
              Cancellation Policy
            </Link>
            <Link href="/shipping-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-center sm:text-left">
              Shipping Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 