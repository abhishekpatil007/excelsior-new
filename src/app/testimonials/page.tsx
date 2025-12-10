'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Instagram, Play } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import TestimonialsComponent from '@/components/ui/testimonials-demo';

export default function Testimonials() {


  const stats = [
    { number: "10,000+", label: "Happy Students", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "500+", label: "Live Trading Sessions", icon: Play },
    { number: "4.9/5", label: "Average Rating", icon: Award }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Instagram className="w-8 h-8 text-pink-400" />
              <span className="text-pink-400 font-semibold text-sm uppercase tracking-wider">Real Student Reviews</span>
              {/* <Instagram className="w-8 h-8 text-pink-400" /> */}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4 sm:px-0">
              What our <span className="gradient-text">Traders</span> Say
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Hear from our students who have transformed their financial future
              through our comprehensive trading education programs.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 px-4 sm:px-0"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center p-4 sm:p-6 glass-effect rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Animated Testimonials */}
      <TestimonialsComponent />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Write Your <span className="gradient-text">Success</span> Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of successful traders who have transformed their financial future
              with our proven education programs.
            </p>
            <div className="flex justify-center">
              <AnimatedButton className="flex items-center space-x-2" onClick={() => window.location.href = '/courses'}>
                <span>Start Your Journey Today</span>
                <TrendingUp className="w-5 h-5" />
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 