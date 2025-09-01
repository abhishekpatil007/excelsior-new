'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Quote, TrendingUp, DollarSign, Users, Award, Heart, MessageCircle, Share, MoreHorizontal, Instagram, Play } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import TestimonialsComponent from '@/components/ui/testimonials-demo';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const instagramTestimonials = [
    {
      id: 1,
      username: "student_trader_1",
      comment: "Dear sir, in my trading journey you are the greatest blessings of my life.. Aaj tumchyamulech mi ajun stock market mde tikun aahe.. Thank you so much sir... God bless you🙏😇",
      likes: 4,
      time: "16w",
      verified: false
    },
    {
      id: 2,
      username: "grateful_housewife",
      comment: "गृहिणी या क्षेत्रात आल्या ते फक्त तुमच्यामुळे.....",
      likes: 4,
      time: "16w",
      verified: false
    },
    {
      id: 3,
      username: "trading_student_pune",
      comment: "सर तुम्हाला मनापासून शेअर मार्केटचा गुरु मानल आहे. तुमच शिकवणं अगदी मस्त आहे. खोलतंजौन शिकवता पण एकदम सोप्या पद्धतीने शिकवता. तुमच discipline, moral boosting एकदम भारी आहे. खूप कठीण काळात पण तुमची साथ मिळाली आहे आणि आता ह्या माध्यमातून ती यापुढे पण मिळणार ह्याचा खूप आनंद होतोय.",
      likes: 2,
      time: "16w",
      verified: true
    },
    {
      id: 4,
      username: "market_learner",
      comment: "King of Candles , Master of patterns , Ruler of Reversals 🔥 🔥🔥❤️",
      likes: 3,
      time: "16w",
      verified: false
    },
    {
      id: 5,
      username: "blessed_student",
      comment: "Better than a thousand days of diligent study is one day with a great teacher.❤️🙌😍",
      likes: 3,
      time: "16w",
      verified: false
    },
    {
      id: 6,
      username: "shubham_fan",
      comment: "shubham sir a perfect mentor of share market biggest blessing for me who gave me confidence to dream big and achieve my life goals 😇 we are really lucky to learn from you sir. God bless you sir 😇",
      likes: 1,
      time: "16w",
      verified: false
    },
    {
      id: 7,
      username: "trading_enthusiast",
      comment: "Dear Shubham sir,Your ability to explain complex trading concepts in an easy-to-understand manner is remarkable. Students are grasping the material and applying it effectively.",
      likes: 4,
      time: "16w",
      verified: true
    },
    {
      id: 8,
      username: "maharashtrian_trader",
      comment: "Dear Maharashtrian jadugar sir😇, Traiding tumhi tr chup changali shikavta ahet.. it is amazing but important shikanyasarkhi gost ahe tumachyakadun ti mhanje pensions .. thanks for God ki amhala menter mhanun tumhi bhetalat……..God bless you sir!!",
      likes: 3,
      time: "16w",
      verified: false
    },
    {
      id: 9,
      username: "mahakal_devotee",
      comment: "Jai Mahakal Sir 🙏 tumchya sarkhe guru bhetayla pan nashib lagte. Tumhi nehmi mhanta na everything is destined so u were already part of our destiny ! U r big bull of trading market sir🔥",
      likes: 3,
      time: "16w",
      verified: false
    },
    {
      id: 10,
      username: "dhoni_fan_trader",
      comment: "M.S Dhoni of Share market ❤️🔥😍",
      likes: 3,
      time: "16w",
      verified: false
    },
    {
      id: 11,
      username: "confident_trader",
      comment: "सर तुमच्या कडून शेअर मार्केट चे खूप काही शिकायला मिळते..तुमचा confidence, patience, analysis खूप भारी आहे...तुम्ही एवढ्या एखाद्या ट्रेड बद्दल एवढे confident असता की ते बघून आमचा confidence वाढतो..Thank you sir for being with us in this trading journey..🔥",
      likes: 3,
      time: "16w",
      verified: true
    },
    {
      id: 12,
      username: "share_market_king",
      comment: "King of Share Market...!!!",
      likes: 3,
      time: "16w",
      verified: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Day Trader",
      avatar: "AJ",
      rating: 5,
      quote: "MoneyCraft transformed my trading completely. I went from losing money consistently to making $5,000+ monthly profits. The strategies are practical and the mentors are incredibly supportive.",
      profit: "+$45,000",
      timeframe: "8 months",
      course: "Day Trading Strategies"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Portfolio Manager",
      avatar: "SW",
      rating: 5,
      quote: "The fundamental analysis course gave me the confidence to make informed investment decisions. I've increased my portfolio by 35% in just 6 months using their strategies.",
      profit: "+$28,000",
      timeframe: "6 months",
      course: "Fundamental Analysis"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Options Trader",
      avatar: "MC",
      rating: 5,
      quote: "Options trading seemed complex until I took this course. The step-by-step approach and real-world examples made everything click. I'm now consistently profitable.",
      profit: "+$32,000",
      timeframe: "10 months",
      course: "Options Trading Mastery"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Crypto Investor",
      avatar: "ER",
      rating: 5,
      quote: "The cryptocurrency course opened my eyes to the opportunities in DeFi. I've diversified my portfolio and seen incredible returns. The community support is amazing.",
      profit: "+$67,000",
      timeframe: "12 months",
      course: "Cryptocurrency Trading"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "Retail Investor",
      avatar: "DT",
      rating: 5,
      quote: "As a complete beginner, I was nervous about entering the stock market. The fundamentals course gave me a solid foundation and the confidence to start trading successfully.",
      profit: "+$18,000",
      timeframe: "9 months",
      course: "Stock Market Fundamentals"
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Technical Analyst",
      avatar: "LP",
      rating: 5,
      quote: "The technical analysis course is comprehensive and practical. I've learned to read charts like a pro and my trading accuracy has improved dramatically.",
      profit: "+$41,000",
      timeframe: "7 months",
      course: "Advanced Technical Analysis"
    }
  ];

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

      {/* Instagram Style Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="testimonial-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#testimonial-grid)" />
              </svg>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/10 to-cyan-500/5"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <img 
                  src="/MCTW.png" 
                  alt="MoneyCraft Logo" 
                  className="h-20 sm:h-24 w-auto object-contain mx-auto relative z-10"
                  style={{ filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6"
            >
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
                Real comments from our students on Instagram - <span className="text-pink-400 font-semibold">authentic</span>, 
                <span className="text-purple-400 font-semibold"> unfiltered feedback</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Instagram Post Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl overflow-hidden border border-gray-700/50"
          >
            {/* Instagram Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MC</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white text-sm">moneycrafttrader</span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">Pune, Maharashtra</span>
                </div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>

            {/* Instagram Image with Logo */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
              {/* Subtle radial glow */}
              <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent"></div>
              
              <div className="text-center relative z-10">
                {/* Logo with enhanced presentation */}
                <div className="relative mb-6">
                  {/* Subtle glow behind logo */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl scale-150"></div>
                  
                  {/* Logo container */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <img 
                      src="/MCTW.png" 
                      alt="MoneyCraft Logo" 
                      className="h-20 sm:h-24 w-auto object-contain mx-auto"
                      style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                    />
                  </div>
                </div>
                
                {/* Title with clean typography */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Student Success Stories
                </h3>
                
                {/* Subtitle */}
                <p className="text-gray-400 text-sm font-medium">Real results from real students</p>
                
                {/* Elegant underline */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
              </div>
              
              {/* Heart icon - refined */}
              <div className="absolute top-3 right-3">
                <div className="w-6 h-6 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                  <Heart className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Instagram Actions */}
            <div className="p-3 border-b border-gray-700/50">
              <div className="flex items-center space-x-3 mb-2">
                <Heart className="w-5 h-5 text-red-400" />
                <MessageCircle className="w-5 h-5 text-gray-400" />
                <Share className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-xs text-gray-400">
                <span className="font-semibold text-white">5,234 likes</span>
              </div>
            </div>

            {/* Instagram Comments */}
            <div className="p-3 space-y-3 max-h-80 overflow-y-auto">
              {instagramTestimonials.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">
                      {comment.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-white text-xs">{comment.username}</span>
                      {comment.verified && (
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed mb-1">{comment.comment}</p>
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <span>{comment.time}</span>
                      <span>{comment.likes} likes</span>
                      <span className="hover:text-white cursor-pointer">Reply</span>
                    </div>
                  </div>
                  <Heart className="w-3 h-3 text-gray-400 hover:text-red-400 cursor-pointer" />
                </motion.div>
              ))}
            </div>

            {/* Instagram Footer */}
            <div className="p-3 border-t border-gray-700/50">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <span>View all 1,247 comments</span>
              </div>
            </div>
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