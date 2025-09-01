"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Phone, Mail, Clock, Zap, Users, Wifi, Car, Radar, Signal, Activity, TrendingUp, Globe, Shield, Eye, Brain, Target, Star, Sparkles, BarChart3 } from 'lucide-react';

interface InteractiveMapProps {
  className?: string;
}

export const InteractiveMap = ({ className = "" }: InteractiveMapProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);
  const [activeStudents, setActiveStudents] = useState(247);
  const [liveTraders, setLiveTraders] = useState(89);
  const [marketStatus, setMarketStatus] = useState('OPEN');
  const [profitToday, setProfitToday] = useState(125.4);
  const [signalAccuracy, setSignalAccuracy] = useState(99.2);
  const [networkStrength, setNetworkStrength] = useState(5);
  const [tradingVolume, setTradingVolume] = useState(2.8);
  const [selectedView, setSelectedView] = useState('live');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time fluctuations
      setActiveStudents(prev => Math.max(200, prev + Math.floor(Math.random() * 5) - 2));
      setLiveTraders(prev => Math.max(50, prev + Math.floor(Math.random() * 3) - 1));
      setProfitToday(prev => +(prev + (Math.random() - 0.5) * 0.1).toFixed(1));
      setSignalAccuracy(prev => Math.max(95, Math.min(100, +(prev + (Math.random() - 0.5) * 0.1).toFixed(1))));
      setTradingVolume(prev => +(prev + (Math.random() - 0.5) * 0.1).toFixed(1));
      
      // Market status simulation
      const hour = new Date().getHours();
      if (hour >= 9 && hour < 16) {
        setMarketStatus('OPEN');
      } else if (hour >= 16 && hour < 18) {
        setMarketStatus('CLOSING');
      } else {
        setMarketStatus('CLOSED');
      }
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const locationInfo = {
    city: "Pune",
    state: "Maharashtra", 
    country: "India",
    coordinates: "18.5204° N, 73.8567° E",
    address: "Pune, Maharashtra, India",
    phone: "+91 74992 40812",
    email: "support@moneycrafttrader.com",
    hours: "Mon-Fri: 12-2 PM & 8-10 PM, Sat-Sun: 12-4 PM"
  };

  const networkNodes = [
    { x: 20, y: 30, active: true },
    { x: 80, y: 25, active: true },
    { x: 60, y: 70, active: true },
    { x: 15, y: 80, active: Math.random() > 0.3 },
    { x: 85, y: 60, active: Math.random() > 0.2 },
    { x: 40, y: 45, active: true },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Advanced Trading Command Center */}
      <div className="relative">
        {/* View Selector */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-1 flex">
            {['live', 'analytics', 'network'].map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedView === view
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {view === 'live' && <Activity className="w-4 h-4 inline mr-2" />}
                {view === 'analytics' && <BarChart3 className="w-4 h-4 inline mr-2" />}
                {view === 'network' && <Globe className="w-4 h-4 inline mr-2" />}
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Command Interface */}
        <div 
          className="relative aspect-[18/11] bg-gradient-to-br from-slate-950 via-gray-900 to-black rounded-3xl overflow-hidden border border-gray-700/30 shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Neural Network Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              {networkNodes.map((node, i) => (
                <g key={i}>
                  {/* Connections */}
                  {networkNodes.slice(i + 1).map((targetNode, j) => (
                    <motion.line
                      key={`${i}-${j}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke="url(#networkGradient)"
                      strokeWidth="1"
                      opacity={node.active && targetNode.active ? 0.3 : 0.1}
                      animate={{ opacity: [0.1, 0.4, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  ))}
                  
                  {/* Nodes */}
                  <motion.circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="3"
                    fill={node.active ? "#10b981" : "#374151"}
                    animate={{ 
                      scale: node.active ? [1, 1.3, 1] : [1],
                      opacity: node.active ? [0.6, 1, 0.6] : [0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </g>
              ))}
              
              <defs>
                <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Advanced Header HUD */}
          <div className="absolute top-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between">
              {/* Left Status Cluster */}
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="bg-black/90 backdrop-blur-xl border border-green-500/40 rounded-2xl px-4 py-2 flex items-center space-x-2"
                  animate={{ borderColor: marketStatus === 'OPEN' ? '#10b981' : '#ef4444' }}
                >
                  <motion.div 
                    className={`w-2 h-2 rounded-full ${marketStatus === 'OPEN' ? 'bg-green-400' : 'bg-red-400'}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-white text-sm font-bold">{marketStatus}</span>
                </motion.div>

                <div className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl px-4 py-2 flex items-center space-x-2">
                  <Signal className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-sm font-mono">{signalAccuracy}%</span>
                </div>

                <div className="bg-black/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-4 py-2 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm font-mono">₹{profitToday}k</span>
                </div>
              </div>

              {/* Center Time & Location */}
              <div className="text-center">
                <div className="bg-black/90 backdrop-blur-xl border border-gray-600/30 rounded-2xl px-6 py-3">
                  <div className="text-white text-lg font-mono tracking-wider">
                    {currentTime.toLocaleTimeString('en-US', { 
                      hour12: true, 
                      hour: '2-digit', 
                      minute: '2-digit',
                      second: '2-digit'
                    })}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">IST • PUNE TRADING CENTER</div>
                </div>
              </div>

              {/* Right Network Status */}
              <div className="flex items-center space-x-3">
                <div className="flex">
                  {[...Array(networkStrength)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-green-400 to-cyan-400 mr-0.5 rounded-full"
                      style={{ height: `${(i + 1) * 3 + 6}px` }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <span className="text-white text-xs font-medium">5G</span>
              </div>
            </div>
          </div>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Multi-layered Radar Effect */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`radar-${i}`}
                className="absolute inset-0"
                style={{ 
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  marginLeft: `${-40 - i * 20}px`,
                  marginTop: `${-40 - i * 20}px`,
                  border: `1px solid rgba(34, 197, 94, ${0.1 + i * 0.1})`,
                  borderRadius: '50%'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
            
            {/* Core Location Beacon */}
            <motion.div
              className="relative w-20 h-20 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20"
              whileHover={{ scale: 1.15 }}
              animate={{ 
                y: [0, -5, 0],
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 40px rgba(34, 197, 94, 0.6)",
                  "0 0 20px rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
            </motion.div>

            {/* Floating Data Points */}
            <motion.div
              className="absolute -top-8 -right-12 bg-black/90 backdrop-blur-xl border border-green-500/40 rounded-xl px-3 py-1"
              animate={{ y: [-2, 2, -2], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-3 h-3 text-green-400" />
                <span className="text-green-400 text-xs font-bold">{activeStudents}</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-12 bg-black/90 backdrop-blur-xl border border-cyan-500/40 rounded-xl px-3 py-1"
              animate={{ y: [2, -2, 2], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Activity className="w-3 h-3 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-bold">{liveTraders}</span>
              </div>
            </motion.div>
          </div>

          {/* Advanced Bottom Command Panel */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900/95 to-transparent p-8 pt-16"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Location Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold flex items-center">
                    {locationInfo.city}
                    <Sparkles className="w-5 h-5 text-yellow-400 ml-2" />
                  </h3>
                  <p className="text-gray-400 text-sm">{locationInfo.state}, {locationInfo.country} • Trading Hub</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/40 rounded-2xl px-4 py-2 flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-bold">{activeStudents} Active</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-2xl px-4 py-2 flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm font-bold">AI Powered</span>
                </div>
              </div>
            </div>

            {/* Advanced Action Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl py-4 flex items-center justify-center space-x-2 font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                <Navigation className="w-5 h-5" />
                <span>Navigate</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-2xl py-4 flex items-center justify-center space-x-2 font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-2xl py-4 flex items-center justify-center space-x-2 font-bold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-2xl py-4 flex items-center justify-center space-x-2 font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
              >
                <Star className="w-5 h-5" />
                <span>Book</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Advanced Floating HUD Cards */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 50 }}
                  className="absolute top-20 right-6 bg-black/95 backdrop-blur-2xl border border-gradient-to-r from-green-500/50 to-cyan-500/50 rounded-2xl p-6 w-80 shadow-2xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-bold text-lg flex items-center">
                        <Shield className="w-5 h-5 text-green-400 mr-2" />
                        Trading Center Status
                      </h4>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-bold">ACTIVE</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-xl p-3 text-center">
                        <div className="text-green-400 text-xl font-bold">{signalAccuracy}%</div>
                        <div className="text-gray-400 text-xs">Signal Accuracy</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-3 text-center">
                        <div className="text-cyan-400 text-xl font-bold">{tradingVolume}M</div>
                        <div className="text-gray-400 text-xs">Volume Today</div>
                      </div>
                    </div>
                    
                    <div className="text-gray-300 text-sm space-y-2">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                        {locationInfo.coordinates}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 text-green-400 mr-2" />
                        {locationInfo.phone}
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                        {locationInfo.hours}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  className="absolute bottom-32 left-6 bg-black/95 backdrop-blur-2xl border border-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-2xl p-4 w-64 shadow-2xl"
                >
                  <div className="space-y-3">
                    <h4 className="text-white font-bold flex items-center">
                      <Radar className="w-4 h-4 text-purple-400 mr-2 animate-spin" />
                      Live Feed
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">New student joined</span>
                        <span className="text-green-400">2s ago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Signal generated</span>
                        <span className="text-cyan-400">15s ago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Profit alert</span>
                        <span className="text-yellow-400">1m ago</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Info Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Location</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{locationInfo.address}</p>
              <p className="text-cyan-400 text-xs font-mono mt-1">{locationInfo.coordinates}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-green-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Contact</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{locationInfo.phone}</p>
              <p className="text-green-400 text-xs mt-1">Available 24/7</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Class Hours</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{locationInfo.hours}</p>
              <p className="text-yellow-400 text-xs mt-1">IST Timezone</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Real-time Activity Feed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Live Activity</span>
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Real-time updates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">{activeStudents}</div>
            <div className="text-xs text-gray-400">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">12</div>
            <div className="text-xs text-gray-400">Live Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">1.2k</div>
            <div className="text-xs text-gray-400">This Month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">98%</div>
            <div className="text-xs text-gray-400">Satisfaction</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveMap; 