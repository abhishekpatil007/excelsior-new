'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Ticker from '@/components/Ticker';
import AnimatedButton from '@/components/AnimatedButton';
import { StockButton } from '@/components/ui/StockButton';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Shield, BarChart2 } from 'lucide-react';
import FAQ from '@/components/FAQ';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: TrendingUp,
      title: "Technical Analysis Mastery",
      description: "Master 50+ candlestick patterns, support & resistance levels, trend analysis, RSI, MACD, Bollinger Bands, and advanced charting techniques."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn position sizing, stop-loss strategies, portfolio diversification, and risk-reward ratios to protect and grow your capital systematically."
    },
    {
      icon: Award,
      title: "95%+ Success Rate",
      description: "Our students achieve consistent profits using our proven systematic approach to trading and investing."
    },
    {
      icon: BarChart2,
      title: "Fundamental Analysis",
      description: "Master financial statement analysis, P/E ratios, debt-to-equity, cash flow analysis, sector analysis, and economic indicators."
    },
    {
      icon: Users,
      title: "Live Trading Sessions",
      description: "Join daily live trading sessions, learn portfolio construction, asset allocation, rebalancing strategies, and get real-time market insights."
    }
  ];

  const stats = [
    { number: "10K+", label: "Students Enrolled" },
    { number: "95%+", label: "Success Rate" },
    { number: "50+", label: "Strategies Mastered" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements - darker */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-green-500/3 rounded-full blur-3xl"></div>
        </div>

        {/* Additional animated stock elements - darker */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Moving price indicators - darker */}
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-10 text-cyan-400 text-sm opacity-20"
          >
            AAPL $185.92
          </motion.div>
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-10 text-green-400 text-sm opacity-20"
          >
            TSLA +2.34%
          </motion.div>
          <motion.div
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 text-cyan-400 text-sm opacity-20"
          >
            NVDA $485.09
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto hero-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              🚀 Transform Your Trading Journey
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight break-words hero-text px-2 sm:px-0"
            style={{
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: 'calc(100vw - 2rem)',
              hyphens: 'auto'
            }}
          >
            <span className="block sm:inline">Master Stock Market</span>{' '}
            <span className="gradient-text block sm:inline">Trading & Build</span>{' '}
            <span className="block sm:inline">Your Financial Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
          >
            Join thousands of successful traders who have transformed their financial lives with our comprehensive trading education. Learn from industry experts, master proven strategies, and build sustainable wealth through intelligent investing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <AnimatedButton className="flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base lg:text-lg py-3" onClick={() => window.location.href = '/courses'}>
              <span>Start Your Trading Journey Today</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </AnimatedButton>

            <AnimatedButton className="flex items-center space-x-2 bg-transparent w-full sm:w-auto justify-center text-sm sm:text-base lg:text-lg py-3">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Watch Preview</span>
            </AnimatedButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-gray-400 mb-8"
          >
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">10,000+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Certified Courses</span>
            </div>
          </motion.div>

          {/* Ticker - moved here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="w-full"
          >
            <Ticker />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hero-text">
              Comprehensive <span className="gradient-text">Trading Education</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven curriculum has helped over 10,000 students achieve financial independence through systematic trading education.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="glass-effect p-6 lg:p-8 rounded-2xl hover:glow-effect transition-all duration-300 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                    <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/3 to-green-500/3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hero-text">
              Start Your <span className="gradient-text">Trading Journey</span> Today
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8">
              Join thousands of successful traders who&apos;ve mastered the stock market with our proven curriculum and expert guidance.
            </p>
            <StockButton className="mx-auto" onClick={() => window.location.href = '/courses'}>
              Get Started Now
            </StockButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
