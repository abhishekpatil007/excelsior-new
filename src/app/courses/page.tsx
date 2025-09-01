'use client';

import { motion } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';
import { GlitchButton } from '@/components/ui/glitch-button';
import { StockButton } from '@/components/ui/StockButton';
import { SparklesCore } from '@/components/ui/sparkles';
import { Clock, Users, Star, ArrowRight, Play, BookOpen, TrendingUp, Shield, Zap, Target, Monitor, Video, Download, Globe, Headphones, Calendar, Award, CheckCircle, Crown, Brain, DollarSign, Trophy, Gift, Sparkles, Eye, BarChart3, Activity, Target as TargetIcon, TrendingDown, AlertTriangle } from 'lucide-react';

export default function Courses() {
  const course = {
    title: "Complete Stock Market Trading Mastery",
    subtitle: "The Ultimate 3-Month Trading Program",
    description: "Master advanced trading techniques with our comprehensive program covering Price Action Strategies, Trading Setups, FII Data Analysis, and Volume Theory. Features both online and offline classes with exclusive access to proprietary tools and comprehensive resources.",
    price: "₹61,530 + GST",
    originalPrice: "₹120,000 + GST",
    duration: "3 Months",
    students: "10,000+",
    rating: 4.9,
    level: "All Levels",
    features: [
      "Exclusive Magical Formula Access",
      "Intelligent Stock Scanner Tool",
      "In-Person (Offline) Coaching at Our Pune Center",
      "Live Online Classes (Join from Anywhere)",
      "Dedicated Doubt-Solving Sessions (Live & Recorded)",
      "LMS (Learning Management System) for All Materials",
      "All Study Resources & Notes Included",
      "Live Trading Sessions (Recorded)",
      "Comprehensive Access to Materials",
      "Personal Mentorship Support"
    ],
    modules: [
      {
        title: "Price Action Strategies",
        duration: "3 weeks",
        topics: ["Candlestick Patterns", "Support & Resistance Levels", "Chart Patterns", "Trend Analysis", "Price Movement Psychology"],
        description: "Master the art of reading pure price action to identify high-probability trading opportunities and market reversals"
      },
      {
        title: "Trading Setups",
        duration: "3 weeks", 
        topics: ["Entry & Exit Strategies", "Risk-Reward Ratios", "Position Sizing", "Trade Management", "Setup Validation"],
        description: "Learn proven trading setups with precise entry, exit, and risk management rules for consistent profitability"
      },
      {
        title: "FII Data and Momentum Prediction",
        duration: "3 weeks",
        topics: ["Foreign Institutional Investor Analysis", "Market Momentum Indicators", "Sector Rotation", "Index Futures Impact", "Institutional Flow Analysis"],
        description: "Understand how FII movements drive market momentum and predict major market moves using institutional data"
      },
      {
        title: "Volume Theory",
        duration: "3 weeks",
        topics: ["Volume Price Analysis", "Volume Patterns", "Accumulation & Distribution", "Volume Breakouts", "Smart Money Flow"],
        description: "Decode volume patterns to identify smart money movements and confirm price action signals for high-accuracy trades"
      }
    ],
    highlights: [
      { icon: Monitor, text: "Live Online Classes", description: "Attend interactive sessions from anywhere in India or abroad", color: "from-cyan-500 to-blue-500" },
      { icon: Globe, text: "In-Person (Offline) Coaching", description: "Join us at our Pune center for hands-on, face-to-face learning", color: "from-green-500 to-emerald-500" },
      { icon: Headphones, text: "Doubt-Solving Sessions", description: "Get all your questions answered in live and recorded sessions", color: "from-pink-500 to-purple-500" },
      { icon: Download, text: "All Resources Included", description: "Printed notes, digital resources, and exclusive study material", color: "from-orange-500 to-red-500" },
      { icon: Video, text: "Recorded Sessions", description: "Access to all class recordings and doubt sessions", color: "from-indigo-500 to-purple-500" },
      { icon: Calendar, text: "Flexible Batch Timings", description: "Mon-Fri: 12-2 PM & 8-10 PM, Sat-Sun: 12-4 PM", color: "from-yellow-500 to-orange-500" },
      { icon: BookOpen, text: "LMS Access", description: "24/7 access to our Learning Management System", color: "from-blue-500 to-cyan-500" }
    ],
    benefits: [
      {
        title: "From Zero to Hero",
        description: "Transform from complete beginner to confident trader in just 3 months",
        icon: TrendingUp,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "Exclusive Tools Access",
        description: "Get access to revolutionary tools that exist nowhere else in the trading world",
        icon: Crown,
        color: "from-yellow-500 to-orange-500"
      },
      {
        title: "Ongoing Support",
        description: "Ongoing mentorship and support even after course completion",
        icon: Shield,
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Proven Results",
        description: "Join 10,000+ successful traders who have already transformed their lives",
        icon: Trophy,
        color: "from-purple-500 to-pink-500"
      }
    ],
    testimonials: [
      {
        name: "Rahul Sharma",
        role: "Former Bank Employee",
        content: "The Magical Formula changed my life. I'm now earning more from trading than my salary!",
        profit: "+₹2.5L/month",
        rating: 5
      },
      {
        name: "Priya Patel",
        role: "Housewife",
        content: "From zero knowledge to consistent profits. The course structure is perfect for beginners.",
        profit: "+₹1.8L/month",
        rating: 5
      },
      {
        name: "Amit Kumar",
        role: "Software Engineer",
        content: "The Stock Scanner is incredible. I can predict breakouts before they happen!",
        profit: "+₹3.2L/month",
        rating: 5
      }
    ]
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Background Elements */}
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
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-500/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="w-8 h-8 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Exclusive Program</span>
            <Crown className="w-8 h-8 text-yellow-400" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4 sm:px-0">
            Complete <span className="gradient-text">Trading Mastery</span>
          </h1>
          
          {/* Sparkles Effect */}
          <div className="relative w-full h-20 flex items-center justify-center mb-6">
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#22c55e"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)]"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-4 sm:px-0 leading-relaxed">
            The ultimate 3-month program featuring both online and offline classes, exclusive access to our revolutionary tools, 
            and everything you need to become a successful trader.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto px-4 sm:px-0">
            <div className="text-center p-3 md:p-4 glass-effect rounded-xl">
              <div className="text-lg md:text-2xl font-bold gradient-text mb-1">10,000+</div>
              <div className="text-xs md:text-sm text-gray-400">Students</div>
            </div>
            <div className="text-center p-3 md:p-4 glass-effect rounded-xl">
              <div className="text-lg md:text-2xl font-bold gradient-text mb-1">95%</div>
              <div className="text-xs md:text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="text-center p-3 md:p-4 glass-effect rounded-xl">
              <div className="text-lg md:text-2xl font-bold gradient-text mb-1">98%</div>
              <div className="text-xs md:text-sm text-gray-400">Student Satisfaction</div>
            </div>
            <div className="text-center p-3 md:p-4 glass-effect rounded-xl">
              <div className="text-lg md:text-2xl font-bold gradient-text mb-1">3</div>
              <div className="text-xs md:text-sm text-gray-400">Months</div>
            </div>
          </div>
        </motion.div>

        {/* Main Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-8 rounded-2xl mb-20 border-2 border-yellow-500/30 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="course-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#course-grid)" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Course Info */}
            <div>
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">{course.title}</h2>
                    <p className="text-yellow-400 font-semibold text-sm sm:text-base">{course.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-400">Duration: <span className="text-white font-semibold">{course.duration}</span></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">Students: <span className="text-white font-semibold">{course.students}</span></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-400">Rating: <span className="text-white font-semibold">{course.rating}/5</span></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">Level: <span className="text-white font-semibold">{course.level}</span></span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
                                  <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-4xl font-bold text-white">₹61,530</span>
                    <span className="text-sm text-gray-400 ml-1">+ GST</span>
                    <span className="text-gray-400 line-through ml-2 text-lg">₹120,000</span>
                    <span className="text-sm text-gray-400 ml-1"></span>
                  </div>
                 {/*    <span className="text-green-400 text-xl font-bold bg-green-500/10 px-3 py-1 rounded-full">50% OFF</span> */}
                  </div>
                  <p className="text-yellow-400 text-sm">Limited Time Offer</p>
                  <div className="flex items-center space-x-2 mt-2">
                   {/*  <Gift className="w-4 h-4 text-green-400" /> */}

                  </div>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div>
              <h3 className="text-xl font-bold mb-4">What's Included:</h3>
              <div className="space-y-3 mb-6">
                {course.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mb-4">
                <StockButton className="w-full" onClick={() => window.location.href = '/contact'}>
                  Enroll Now
                </StockButton>
              </div>
              
              <AnimatedButton className="w-full flex items-center justify-center space-x-2 bg-transparent">
                <Play className="w-4 h-4" />
                <span>Watch Course Preview</span>
              </AnimatedButton>
            </div>
          </div>
        </motion.div>

        {/* Course Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose This <span className="gradient-text">Program</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Course <span className="gradient-text">Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center hover:glow-effect transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">{highlight.text}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Modules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Course <span className="gradient-text">Modules</span>
          </h2>
          
          <div className="space-y-8">
            {course.modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
                className="glass-effect p-8 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                      <p className="text-cyan-400 text-lg font-medium mb-2">{module.duration}</p>
                      <p className="text-gray-400">{module.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exclusive Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="glass-effect p-8 rounded-2xl border border-yellow-500/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern id="tools-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#tools-grid)" />
                </svg>
              </div>
            </div>

            <div className="text-center mb-12 relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Exclusive Access</span>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Revolutionary <span className="gradient-text">Trading Tools</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get access to revolutionary founder-built tools that exist nowhere else in the trading world. 
                These proprietary systems give you a 24-hour advantage over the market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Brain className="w-10 h-10 text-black" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Magical Formula</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Predict accurate entry points, stop-loss levels, and target prices 24 hours in advance with 99% accuracy. 
                  This mathematical formula exists nowhere else in the trading world.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <TargetIcon className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">99% Accuracy Rate</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">24-Hour Advance Signals</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Risk:Reward Optimization</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Zap className="w-10 h-10 text-black" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Stock Scanner</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Identify stocks that will breakout or breakdown 24 hours before they move. 
                  Our founder-built scanner scans thousands of stocks in real-time.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400">Real-time Scanning</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400">Pattern Recognition</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400">24/7 Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Batch Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Flexible <span className="gradient-text">Batch Timings</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from multiple batch timings that fit your schedule. All sessions are available both online and offline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl border-2 border-cyan-500/30 text-center hover:glow-effect transition-all duration-300">
              <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Weekday Morning</h3>
              <div className="text-2xl font-bold gradient-text mb-2">12 - 2 PM</div>
              <div className="text-gray-400 text-sm">Monday to Friday</div>
              <div className="text-cyan-400 text-xs mt-2">Perfect for Students</div>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl border-2 border-green-500/30 text-center hover:glow-effect transition-all duration-300">
              <Calendar className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Weekday Evening</h3>
              <div className="text-2xl font-bold gradient-text mb-2">8 - 10 PM</div>
              <div className="text-gray-400 text-sm">Monday to Friday</div>
              <div className="text-green-400 text-xs mt-2">Ideal for Working Professionals</div>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl border-2 border-purple-500/30 text-center hover:glow-effect transition-all duration-300">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Weekend Batch</h3>
              <div className="text-2xl font-bold gradient-text mb-2">12 - 4 PM</div>
              <div className="text-gray-400 text-sm">Saturday & Sunday</div>
              <div className="text-purple-400 text-xs mt-2">Extended Weekend Sessions</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-3">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">All timings are in IST (Indian Standard Time)</span>
            </div>
          </div>
        </motion.div>

        {/* Special Highlight: Offline & Online Coaching */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-2xl border-2 border-green-500/30 flex flex-col items-center text-center hover:glow-effect transition-all duration-300">
              <Globe className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">In-Person (Offline) Coaching</h3>
              <p className="text-gray-300 mb-2">Join us at our Pune center for hands-on, face-to-face learning with our founder and expert mentors. Experience real classroom energy, group activities, and direct mentorship.</p>
              <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full font-medium mt-2">Pune Center</span>
            </div>
            <div className="glass-effect p-8 rounded-2xl border-2 border-cyan-500/30 flex flex-col items-center text-center hover:glow-effect transition-all duration-300">
              <Monitor className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Live Online Classes</h3>
              <p className="text-gray-300 mb-2">Attend interactive live sessions from anywhere in India or abroad. Participate in real-time Q&A, group discussions, and get all class recordings for review.</p>
              <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full font-medium mt-2">Join from Anywhere</span>
            </div>
          </div>
        </motion.div>

        {/* Special Highlight: Doubt Solving Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-20"
        >
          <div className="glass-effect p-8 rounded-2xl border-2 border-pink-500/30 flex flex-col items-center text-center hover:glow-effect transition-all duration-300">
            <Headphones className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Dedicated Doubt-Solving Sessions</h3>
            <p className="text-gray-300 mb-2">Never get stuck! We host regular live doubt-solving sessions (both in-person and online) where you can ask anything, get instant solutions, and access all past sessions in recorded format.</p>
            <span className="inline-block bg-pink-500/10 text-pink-400 px-4 py-1 rounded-full font-medium mt-2">Live & Recorded Doubt Sessions</span>
          </div>
        </motion.div>

        {/* Student Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="text-green-400 font-bold">{testimonial.profit}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-500/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Limited Time Offer</span>
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Trading?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join 10,000+ successful traders who have already mastered the markets with our exclusive program. 
                Get comprehensive access to revolutionary tools and comprehensive training.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <StockButton onClick={() => window.location.href = '/contact'}>
                  Enroll Now 
                </StockButton>
                <AnimatedButton className="flex items-center space-x-2 bg-transparent">
                  <Play className="w-5 h-5" />
                  <span>Watch Free Preview</span>
                </AnimatedButton>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Comprehensive Access</span>
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>10,000+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 