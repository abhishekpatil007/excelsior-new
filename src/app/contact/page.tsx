'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';

import { Mail, Phone, Clock, Send, CheckCircle, Building } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      city: "Chennai",
      state: "Tamil Nadu",
      phone: "9481817849",
      email: "tradexcelsior@gmail.com"
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
      phone: "63643 27653",
      email: "tradexcelsior@gmail.com"
    },
    {
      city: "Hubli",
      state: "Karnataka",
      phone: "9731930609",
      email: "tradexcelsior@gmail.com"
    },
    {
      city: "Belagavi",
      state: "Karnataka",
      phone: "9481704939",
      email: "tradexcelsior@gmail.com"
    },
    {
      city: "Pune",
      state: "Maharashtra",
      phone: "9481868529",
      email: "tradexcelsior@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4 sm:px-0">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Get in touch with our team across multiple locations. We&apos;re here to help you start your trading journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-6 sm:p-8 rounded-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Send us a Message</h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-black/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-black/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-black/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 bg-black/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none text-base min-h-[120px]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-4 text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </AnimatedButton>
              </form>
            )}
          </motion.div>

          {/* General Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Business Hours</h2>
              <div className="glass-effect p-6 rounded-xl space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-400 text-sm">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-400 text-sm">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Quick Support</h2>
              <div className="glass-effect p-6 rounded-xl space-y-4">
                <p className="text-gray-400 mb-4">
                  For immediate assistance, check out our FAQ section or join our community forum.
                </p>
                <div className="flex flex-col space-y-2">
                  <Link href="/#faq" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2">
                    <span>→ View FAQ</span>
                  </Link>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2">
                    <span>→ Join Community</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Locations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="gradient-text">Locations</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{loc.city}</h3>
                    <p className="text-gray-400 text-sm">{loc.state}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{loc.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{loc.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Map Section */}

      </div>
    </div>
  );
}