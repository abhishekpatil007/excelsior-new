'use client';

import { motion } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';
import { StockButton } from '@/components/ui/StockButton';
import { CheckCircle, Crown, Star, Zap, Shield, Clock, Users, Award, BookOpen, Gift, TrendingUp, BarChart2 } from 'lucide-react';

export default function Courses() {
  const curriculum = [
    "Stock market basics",
    "In-depth study of primary market (IPO)",
    "Detailed study of secondary market",
    "Detailed study of derivative market (Future & Options)",
    "Detailed study of commodity market (MCX)",
    "Discussion on types of investment",
    "In-depth study of fundamental analysis",
    "In-depth study of technical analysis",
    "Study of candlesticks, price action theory",
    "Study of indicators",
    "Trendlines and price patterns",
    "Intraday strategies",
    "Swing trading strategies",
    "Risk management and position sizing"
  ];

  const bonuses = [
    {
      title: "Free Demat Account",
      description: "For all participants & practical trading",
      value: "Free"
    },
    {
      title: "Lifetime Online & Offline Support",
      description: "Continuous assistance even after course completion",
      value: "Priceless"
    },
    {
      title: "Screener.in Premium Access",
      description: "Lifetime free access",
      value: "₹5,000/year"
    },
    {
      title: "RideWinners Premium Access",
      description: "Lifetime free access",
      value: "₹12,000/year"
    },
    {
      title: "Earn During Training",
      description: "Recover course fees in your Demat accounts",
      value: "ROI"
    },
    {
      title: "Algo Trading Access",
      description: "Available on subscription basis",
      value: "Optional"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-20"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stock Market <span className="gradient-text">Courses</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-4 sm:px-0 leading-relaxed">
            Investment & Trading Excellence. Want to learn stock and forex trading? Want to make consistent profits in Banknifty & Nifty Options? Want to become an expert in Intraday trading? Want to make Trading as a career option?
          </p>

          <div className="glass-effect p-6 rounded-xl max-w-2xl mx-auto border-l-4 border-cyan-500">
            <h2 className="text-2xl font-bold mb-2 text-white">You are at the right platform now!</h2>
            <p className="text-gray-300">
              With 8+ years of success, Excelsior is your gateway to mastering the stock market. From beginners to pros, get live training, real strategies, and expert mentorship.
            </p>
          </div>
        </motion.div>

        {/* 45 Days to Master Trading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">45 Days</span> to Master Trading
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Theory Training</h3>
              <p className="text-gray-400">Comprehensive classroom sessions</p>
            </div>

            <div className="glass-effect p-8 rounded-2xl border border-green-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mentorship</h3>
              <p className="text-gray-400">Live trading guidance & support</p>
            </div>
          </div>
        </motion.div>

        {/* Complete Curriculum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Complete <span className="gradient-text">Curriculum</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Comprehensive learning covering all aspects of trading and investment
          </p>

          <div className="glass-effect p-8 rounded-3xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {curriculum.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold mb-4 border border-yellow-500/30">
              LIMITED TIME OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">BONUS!</span>
            </h2>
            <p className="text-xl text-gray-400">
              Premium benefits worth ₹17,000+ included with your enrollment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl border border-yellow-500/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors"></div>
                <Gift className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{bonus.description}</p>
                <div className="text-yellow-400 font-bold text-sm">{bonus.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center glass-effect p-12 rounded-3xl border border-cyan-500/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Trading Journey?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful traders who transformed their financial future with Excelsior.
            </p>
            <StockButton className="mx-auto" onClick={() => window.location.href = '/contact'}>
              Enroll Now
            </StockButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 