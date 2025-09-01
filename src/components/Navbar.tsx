'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TrendingUp } from 'lucide-react';
import { GlitchButton } from '@/components/ui/glitch-button';
import { StockButton } from '@/components/ui/StockButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Courses', href: '/courses' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/">
              <img 
                src="/MCTW.png" 
                alt="MoneyCraft Logo" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain bg-transparent mt-3 sm:mt-4 md:mt-5"
                style={{ background: 'transparent' }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group text-sm xl:text-base"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <StockButton onClick={() => window.location.href = '/courses'}>
              <span className="hidden xl:inline">Get Started</span>
              <span className="xl:hidden">Start</span>
            </StockButton>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-cyan-500/10 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4 border-t border-gray-800"
              >
                <StockButton 
                  className="w-full justify-center text-lg py-4" 
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/courses';
                  }}
                >
                  Get Started
                </StockButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 