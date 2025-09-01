'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedButton from '@/components/AnimatedButton';
import { InteractiveMap } from '@/components/ui/InteractiveMap';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@moneycraft.com",
      description: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 74992 40812",
      description: "Speak with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Pune, Maharashtra",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Class Timings",
      details: "Mon-Fri: 12-2 PM & 8-10 PM, Sat-Sun: 12-4 PM",
      description: "IST Time Zone"
    }
  ];

  const faqs = [
    {
      question: "What are the batch timings?",
      answer: "We offer flexible batch timings: Mon-Fri 12-2 PM & 8-10 PM, and Sat-Sun 12-4 PM (all in IST). Choose the timing that suits your schedule best."
    },
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive stock market trading courses covering technical analysis, fundamental analysis, risk management, and advanced trading strategies."
    },
    {
      question: "Do you provide comprehensive access?",
      answer: "Yes, all our courses come with comprehensive access to all materials and resources."
    },
    {
      question: "Do you provide mentorship?",
      answer: "Yes, we offer one-on-one mentorship sessions with our expert traders for premium members."
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
            Have questions about our courses? Want to discuss your trading journey? 
            We're here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 mt-8 lg:mt-0"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 glass-effect rounded-lg sm:p-0 sm:bg-transparent"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1">{info.title}</h3>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">{info.details}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="glass-effect p-4 rounded-lg"
                  >
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <InteractiveMap />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 