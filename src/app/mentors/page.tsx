'use client';

import { motion } from 'framer-motion';
import { Globe, Star, TrendingUp, DollarSign, Users, Award, Crown, Zap, Target, Brain } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

export default function Mentors() {
  const mentors = [
    {
      name: "Shubham Imde",
      title: "Founder & CEO",
      company: "Excelsior",
      experience: "8+ Years",
      expertise: ["Technical Analysis", "Risk Management", "Proprietary Formula", "Stock Scanner"],
      bio: "Visionary founder who developed the revolutionary Magical Formula and Intelligent Stock Scanner. Transformed thousands of traders into consistent profit-makers with his proprietary trading systems.",
      avatar: "/shubham.png",
      social: { linkedin: "#", twitter: "#", website: "#" },
      stats: { students: "10,000+", successRate: "98%", avgReturn: "+25.3%" },
      isFounder: true,
      achievements: [
        "Developed the exclusive Magical Formula",
        "Created the Intelligent Stock Scanner",
        "Mentored 10,000+ successful traders",
        "95% student success rate"
      ]
    },
    {
      name: "Prashant Shinde Sir",
      title: "Guide and Mentor",
      company: "Excelsior",
      experience: "30+ Years",
      expertise: ["Equity Trading", "Derivatives", "Market Analysis", "Market Cycles", "Investment Strategies"],
      bio: "With over 30 years of hands-on experience in equity, derivatives, and market analysis, he brings unmatched insights, time-tested strategies, and a deep understanding of market cycles to guide investors toward consistent growth.",
      avatar: "/prashant.jpeg",
      social: { linkedin: "#", twitter: "#", website: "#" },
      stats: { students: "8,000+", successRate: "97%", avgReturn: "+22.5%" },
      isFounder: false,
      achievements: [
        "30+ years of hands-on market experience",
        "Expert in equity and derivatives trading",
        "Deep understanding of market cycles",
        "Time-tested investment strategies",
        "Guided thousands toward consistent growth"
      ]
    }
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
              <Crown className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Meet Our Leadership</span>
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Learn from the <span className="gradient-text">Visionary Founder</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the mind behind the revolutionary Magical Formula and Intelligent Stock Scanner.
              Learn directly from the founder who has transformed thousands of traders into consistent profit-makers.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
              <div className="text-gray-400">Students Trained</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">99%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <div className="text-gray-400">Revolutionary Tools</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet <span className="gradient-text">Shubham Imde</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The visionary founder who revolutionized trading with proprietary technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-2xl relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-float"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 p-1">
                      <img
                        src="/shubham.png"
                        alt="Shubham Imde"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Shubham Imde</h3>
                    <p className="text-cyan-400 font-semibold mb-1">Founder & CEO</p>
                    <p className="text-gray-400 text-sm">Excelsior</p>
                    <div className="flex items-center justify-center space-x-2 mt-3">
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        8+ Years Experience
                      </span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                        Visionary Leader
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Developed the exclusive Magical Formula</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Created the Intelligent Stock Scanner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Mentored 10,000+ successful traders</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">95% student success rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">
                  🚀 Revolutionary Vision
                </h3>
                <p className="text-gray-300">
                  Shubham Imde is the mastermind behind the <span className="text-yellow-400 font-semibold">ONLY</span> trading tools of their kind in the world.
                  His proprietary Magical Formula and Intelligent Stock Scanner have given traders a 24-hour advantage over the market.
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                As the founder and CEO of Excelsior, Shubham has revolutionized the way traders approach the markets.
                His <span className="text-green-400 font-semibold">exclusive mathematical formula</span> predicts accurate entry points,
                stop-loss levels, and target prices with 99% accuracy - one day in advance.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                The <span className="text-cyan-400 font-semibold">Intelligent Stock Scanner</span>, another brainchild of Shubham,
                identifies stocks that will breakout or breakdown 24 hours before it happens.
                <span className="text-yellow-400 font-semibold"> This technology exists nowhere else in the trading world.</span>
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">10,000+</div>
                  <div className="text-sm text-gray-400">Students Trained</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">99%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">2</div>
                  <div className="text-sm text-gray-400">Revolutionary Tools</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-green-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn from our carefully selected team of trading experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300 ${mentor.isFounder ? 'border-2 border-yellow-500/30' : ''
                  }`}
              >
                {/* Mentor Header */}
                <div className="p-6 border-b border-cyan-500/20">
                  <div className="flex items-start space-x-4">
                    {mentor.isFounder ? (
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center p-0.5">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center p-0.5">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold">{mentor.name}</h3>
                        {mentor.isFounder && (
                          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                            Founder
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium mb-1">{mentor.title}</p>
                      <p className="text-gray-400 text-sm">{mentor.company}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {mentor.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mentor Bio */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {mentor.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-400">{mentor.stats.students}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-400">{mentor.stats.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-400">{mentor.stats.avgReturn}</div>
                      <div className="text-xs text-gray-500">Avg Return</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={mentor.social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={mentor.social.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={mentor.social.website}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Globe className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-green-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Learn from the <span className="gradient-text">Visionary Founder</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get exclusive access to Shubham Imde's revolutionary trading tools and strategies
              that have transformed thousands of traders into consistent profit-makers.
            </p>
            <div className="flex justify-center">
              <AnimatedButton className="flex items-center space-x-2" onClick={() => window.location.href = '/courses'}>
                <span>Start Learning Today</span>
                <TrendingUp className="w-5 h-5" />
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 