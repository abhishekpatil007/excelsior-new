'use client';

import { motion } from 'framer-motion';
import { StockButton } from '@/components/ui/StockButton';
import {
  TrendingUp, Users, Shield, Zap, BookOpen, Video,
  Download, Smartphone, Lock, MessageSquare, Award,
  BarChart2, Target, Clock, CheckCircle, Play
} from 'lucide-react';

export default function WhyUs() {
  const methodology = [
    {
      title: "Learn Fundamentals",
      description: "Master the core concepts of stock market trading with comprehensive video lessons and interactive quizzes.",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Practice & Analyze",
      description: "Apply your knowledge in simulated trading environments and learn to analyze real market scenarios.",
      icon: BarChart2,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Execute with Confidence",
      description: "Start trading with real money using proven strategies and continuous mentor support.",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      title: "Live Market Analysis",
      description: "Join daily live sessions where we analyze real market movements, not just theory from textbooks. Watch expert traders make decisions in real-time.",
      icon: TrendingUp
    },
    {
      title: "Proven Track Record",
      description: "Our mentors have managed over ₹100 Crores in portfolios, delivering consistent returns across market cycles. Learn directly from experts who've walked the path.",
      icon: Award
    },
    {
      title: "Thriving Community",
      description: "Access to a private community of 5000+ active traders sharing insights and strategies daily. Network with like-minded investors.",
      icon: Users
    },
    {
      title: "Lifetime Updates",
      description: "Markets evolve, and so does our curriculum. Get free access to all new content, strategies, and market analysis tools forever.",
      icon: Clock
    },
    {
      title: "Risk-First Approach",
      description: "We prioritize capital preservation above all. Learn sophisticated risk management techniques used by institutional traders.",
      icon: Shield
    },
    {
      title: "Advanced Tools Access",
      description: "Get exclusive access to proprietary screeners, scanners, and analysis tools worth ₹50,000+ absolutely free with your enrollment.",
      icon: Zap
    }
  ];

  const lmsFeatures = [
    { title: "Learn Anytime, Anywhere", icon: Smartphone, description: "Access course library 24/7 on all devices" },
    { title: "HD Video Lessons", icon: Video, description: "100+ hours of professionally recorded content" },
    { title: "Live Session Recordings", icon: Play, description: "All sessions recorded for review" },
    { title: "Downloadable Resources", icon: Download, description: "PDF guides, templates, and cheat sheets" },
    { title: "Secure & Private", icon: Lock, description: "Enterprise-grade encryption for your data" },
    { title: "Community Forum", icon: MessageSquare, description: "Connect with fellow traders" }
  ];

  const advantages = [
    "Practical, real-world trading strategies used by professional traders",
    "Risk management techniques to protect your capital in volatile markets",
    "Technical and fundamental analysis taught by industry veterans",
    "Personal mentorship and 1-on-1 portfolio reviews for premium students",
    "Access to proprietary trading tools and screeners worth ₹50,000+",
    "Case studies of actual trades with detailed profit/loss breakdowns",
    "Psychology of trading - master your emotions for consistent profits",
    "Tax optimization strategies for traders and investors in India",
    "Weekly market outlook and sector analysis reports",
    "Exclusive webinars with successful traders and industry experts",
    "Priority support via dedicated Telegram and WhatsApp groups",
    "Certificate of completion recognized by trading institutions"
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Excelsior?</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-4 sm:px-0 leading-relaxed">
            A structured approach that transforms beginners into confident traders.
            Join thousands who have mastered the markets with our proven methodology.
          </p>
        </motion.div>

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Proven <span className="gradient-text">Methodology</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl text-center relative overflow-hidden group hover:glow-effect transition-all duration-300"
              >
                <div className={`w - 16 h - 16 bg - gradient - to - r ${step.color} rounded - 2xl flex items - center justify - center mx - auto mb - 6 transform group - hover: scale - 110 transition - transform duration - 300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-6xl font-bold text-white/5">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us <span className="gradient-text">Apart</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Advantage List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="glass-effect p-8 md:p-12 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">The Excelsior <span className="gradient-text">Advantage</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* LMS Portal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Premium <span className="gradient-text">LMS Portal</span> Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lmsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl text-center hover:glow-effect transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your <span className="gradient-text">Journey?</span></h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their financial future with Excelsior.
          </p>
          <StockButton className="mx-auto" onClick={() => window.location.href = '/courses'}>
            Explore Courses
          </StockButton>
        </motion.div>
      </div>
    </div>
  );
}