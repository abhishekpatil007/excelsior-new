'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Shield, Clock, Users, Award, Star, ArrowRight, Calculator, Search, BarChart3, TrendingDown, AlertTriangle, CheckCircle, Play, Brain, Cpu, Eye, Gauge, TrendingUpIcon, Activity, Crown, Sparkles } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

export default function WhyUs() {
  const magicalFormulaFeatures = [
    "Accurate entry points with 99% success rate",
    "Precise stop-loss levels to minimize risk",
    "Realistic target predictions for maximum profit",
    "One-day advance signals for strategic planning",
    "Risk-reward ratio optimization",
    "Market condition analysis integration"
  ];

  const scannerFeatures = [
    "Real-time stock screening across all markets",
    "Breakout and breakdown pattern recognition",
    "Volume and momentum analysis",
    "Technical indicator filtering",
    "Custom alert system for opportunities",
    "Historical pattern validation"
  ];

  const formulaStats = [
    { number: "99%", label: "Accuracy Rate", icon: Target },
    { number: "24hrs", label: "Advance Signals", icon: Clock },
    { number: "1:3", label: "Risk:Reward", icon: TrendingUp },
    { number: "1000+", label: "Signals Generated", icon: Activity }
  ];

  const scannerStats = [
    { number: "10K+", label: "Stocks Scanned", icon: Search },
    { number: "92%", label: "Signal Accuracy", icon: Target },
    { number: "24/7", label: "Real-time Monitoring", icon: Eye },
    { number: "50+", label: "Pattern Types", icon: Brain }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="w-8 h-8 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Exclusive & Proprietary</span>
            <Crown className="w-8 h-8 text-yellow-400" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Revolutionary <span className="gradient-text">Trading Tools</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-6">
            Discover the <span className="text-yellow-400 font-semibold">ONLY</span> trading tools of their kind in the world. 
            Our proprietary systems are <span className="text-green-400 font-semibold">exclusive to MoneyCraft</span> and 
            have transformed thousands of traders into consistent profit-makers.
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Not available anywhere else</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Proprietary technology</span>
            </div>
          </div>
        </motion.div>

        {/* Main Tools */}
        <div className="space-y-32">
          {/* Magical Formula Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-500/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">World's First & Only</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  The <span className="gradient-text">Magical Formula</span>
                </h2>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-400 font-semibold text-sm">
                    ⚡ EXCLUSIVE: This mathematical formula exists nowhere else in the trading world!
                  </p>
                </div>
                
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Our <span className="text-green-400 font-semibold">revolutionary mathematical formula</span> predicts accurate buying levels, stop-loss, and target prices 
                  <span className="text-green-400 font-semibold"> one day in advance</span> with 99% accuracy. 
                  <span className="text-yellow-400 font-semibold"> No other course, platform, or tool offers anything remotely similar.</span>
                </p>

                <div className="space-y-4 mb-8">
                  {magicalFormulaFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton className="flex items-center space-x-2" onClick={() => window.location.href = '/courses'}>
                    <span>Learn the Formula</span>
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                  <AnimatedButton className="flex items-center space-x-2 bg-transparent">
                    <Play className="w-4 h-4" />
                    <span>Watch Demo</span>
                  </AnimatedButton>
                </div>
              </motion.div>

              {/* Enhanced Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-effect p-8 rounded-2xl relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 mb-6 border border-green-500/20">
                      <div className="text-center mb-6">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Calculator className="w-8 h-8 text-black" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-green-400 mb-2">Formula Prediction</h3>
                        <p className="text-gray-400 text-sm">Next Day Signal</p>
                      </div>
                      
                      <div className="space-y-3">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-green-500/20"
                        >
                          <span className="text-gray-400">Entry Price</span>
                          <span className="text-green-400 font-bold">₹1,250</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-red-500/20"
                        >
                          <span className="text-gray-400">Stop Loss</span>
                          <span className="text-red-400 font-bold">₹1,180</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-green-500/20"
                        >
                          <span className="text-gray-400">Target</span>
                          <span className="text-green-400 font-bold">₹1,380</span>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 p-3 bg-green-500/10 rounded-lg text-center border border-green-500/20"
                      >
                        <span className="text-green-400 font-semibold">Risk:Reward = 1:2.5</span>
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </motion.div>
                      <span className="text-sm font-medium">99% Success Rate</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Stock Scanner Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-500/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Enhanced Visual */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative lg:order-2"
              >
                <div className="glass-effect p-8 rounded-2xl relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id="scanner-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#scanner-grid)" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 mb-6 border border-cyan-500/20">
                      <div className="text-center mb-6">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Cpu className="w-8 h-8 text-black" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">Stock Scanner</h3>
                        <p className="text-gray-400 text-sm">Real-time Analysis</p>
                      </div>
                      
                      <div className="space-y-3">
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-cyan-500/20"
                        >
                          <span className="text-gray-400">Stocks Scanned</span>
                          <span className="text-cyan-400 font-bold">10,000+</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-green-500/20"
                        >
                          <span className="text-gray-400">Breakout Signals</span>
                          <span className="text-green-400 font-bold">15</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-red-500/20"
                        >
                          <span className="text-gray-400">Breakdown Signals</span>
                          <span className="text-red-400 font-bold">8</span>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                      >
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-cyan-400">Accuracy</span>
                          <span className="text-cyan-400 font-semibold">92%</span>
                        </div>
                        <div className="w-full bg-black/30 rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '92%' }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 text-cyan-400">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-4 h-4" />
                      </motion.div>
                      <span className="text-sm font-medium">24/7 Real-time Scanning</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:order-1"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Founder-Built Technology</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Intelligent <span className="gradient-text">Stock Scanner</span>
                </h2>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-400 font-semibold text-sm">
                    🚀 UNIQUE: The only scanner that predicts breakouts/breakdowns 24 hours in advance!
                  </p>
                </div>
                
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Our <span className="text-cyan-400 font-semibold">founder-built scanner</span> identifies stocks that will 
                  <span className="text-green-400 font-semibold"> breakout or breakdown</span> 
                  <span className="text-cyan-400 font-semibold"> one day in advance</span>. 
                  <span className="text-yellow-400 font-semibold"> This technology is completely proprietary and unavailable anywhere else in the trading world.</span>
                </p>

                <div className="space-y-4 mb-8">
                  {scannerFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton className="flex items-center space-x-2" onClick={() => window.location.href = '/courses'}>
                    <span>Access Scanner</span>
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                  <AnimatedButton className="flex items-center space-x-2 bg-transparent">
                    <Play className="w-4 h-4" />
                    <span>See Results</span>
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Formula Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Formula <span className="gradient-text">Performance</span>
              </h2>
              <p className="text-xl text-gray-400">
                Proven results that speak for themselves
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {formulaStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Scanner Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Scanner <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-400">
                Advanced technology at your fingertips
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scannerStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="glass-effect p-12 rounded-2xl">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <h3 className="text-yellow-400 font-bold text-xl mb-2">
                🎯 EXCLUSIVE ACCESS ONLY HERE
              </h3>
              <p className="text-gray-300">
                These revolutionary tools are <span className="text-yellow-400 font-semibold">NOT available</span> in any other course, 
                platform, or trading education program. This is your <span className="text-green-400 font-semibold">ONLY chance</span> to access 
                technology that gives you a 24-hour advantage over the market.
              </p>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Trading?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join thousands of successful traders who have already discovered the power of our 
              <span className="text-yellow-400 font-semibold"> exclusive</span> Magical Formula and Intelligent Stock Scanner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton className="flex items-center space-x-2" onClick={() => window.location.href = '/courses'}>
                <span>Get Exclusive Access</span>
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton className="flex items-center space-x-2 bg-transparent">
                <Play className="w-5 h-5" />
                <span>Watch Success Stories</span>
              </AnimatedButton>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 