'use client';

import { motion } from 'framer-motion';
import { StockButton } from '@/components/ui/StockButton';
import { SparklesCore } from '@/components/ui/sparkles';
import {
    TrendingUp, Users, Shield, Zap, Target, Award,
    Clock, MapPin, Globe, BookOpen, Heart, Star
} from 'lucide-react';

export default function AboutUs() {
    const values = [
        {
            title: "Student-First",
            description: "Your success is our success. Every decision we make is guided by what's best for our students' learning and growth.",
            icon: Users,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Integrity",
            description: "We believe in transparent, honest education. No false promises, no get-rich-quick schemes—only proven strategies.",
            icon: Shield,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Innovation",
            description: "We continuously evolve our tools and curriculum to stay ahead of market trends and provide cutting-edge education.",
            icon: Zap,
            color: "from-yellow-500 to-orange-500"
        },
        {
            title: "Community",
            description: "Building a supportive ecosystem where traders help traders. We foster a culture of collaboration and shared growth.",
            icon: Heart,
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Excellence",
            description: "We strive for the highest standards in everything we do, from course content to mentor support and platform technology.",
            icon: Star,
            color: "from-purple-500 to-violet-500"
        },
        {
            title: "Results-Driven",
            description: "We focus on tangible outcomes. Our goal is to help you become a consistently profitable and independent trader.",
            icon: Target,
            color: "from-red-500 to-orange-500"
        }
    ];

    const timeline = [
        {
            year: "2016",
            title: "The Foundation",
            description: "Born in Bengaluru with our first batch of 20 enthusiastic students. Focus on comprehensive stock market fundamentals."
        },
        {
            year: "2018",
            title: "Expansion & Recognition",
            description: "Expanded to 5 cities across Karnataka. Received NISM certification. Crossed 1,000 students milestone with 80% success rate."
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description: "Launched online courses during pandemic. Developed proprietary trading tools and analysis platform. Community grew to 5,000+ members."
        },
        {
            year: "2022",
            title: "Pan-India Presence",
            description: "Established training centers in 12+ cities. Introduced advanced algo trading courses. Trained 10,000+ students cumulatively."
        },
        {
            year: "2024",
            title: "Innovation & Scale",
            description: "AI-powered market analysis tools. Personalized learning paths. Premium mentorship programs. 15,000+ traders community."
        },
        {
            year: "Future",
            title: "Looking Ahead",
            description: "Expanding to 25+ cities. Launching mobile app. International collaborations. Target: Transform 100,000 lives by 2027."
        }
    ];

    const stats = [
        { label: "NISM Certified", value: "Reg No: 20210003663", icon: Award },
        { label: "Google Reviews", value: "4.9/5 Rating", icon: Star },
        { label: "Success Rate", value: "85%", icon: TrendingUp },
        { label: "Alumni Network", value: "15K+ Traders", icon: Users }
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
                        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        About <span className="gradient-text">Excelsior</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-4 sm:px-0 leading-relaxed">
                        From humble beginnings to India's leading stock market education platform.
                        We are on a mission to bridge the knowledge gap and empower financial freedom.
                    </p>
                </motion.div>

                {/* Our Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold mb-6">Our <span className="gradient-text">Story</span></h2>
                            <div className="glass-effect p-6 rounded-xl border-l-4 border-cyan-500">
                                <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Founded in 2016, Excelsior started with a simple vision: to bridge the knowledge gap in stock market education.
                                    Our founders, seasoned traders with decades of combined experience, recognized that quality trading education was inaccessible to most Indians.
                                </p>
                            </div>
                            <div className="glass-effect p-6 rounded-xl border-l-4 border-green-500">
                                <h3 className="text-xl font-bold mb-2">The Growth</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    What began as weekend workshops for 20 students has evolved into a comprehensive platform serving thousands across India.
                                    Today, we operate in 12+ cities, offering both in-person and online training, with NISM-certified instructors.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
                            <div className="glass-effect p-8 rounded-2xl relative z-10 border border-white/10">
                                <h3 className="text-2xl font-bold mb-6 text-center">Mission & Vision</h3>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <Target className="w-6 h-6 text-cyan-400" />
                                            <h4 className="text-xl font-bold">Our Mission</h4>
                                        </div>
                                        <p className="text-gray-400">
                                            To empower 100,000 individuals with the knowledge and skills to achieve financial independence through systematic stock market trading and investing.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <Globe className="w-6 h-6 text-green-400" />
                                            <h4 className="text-xl font-bold">Our Vision</h4>
                                        </div>
                                        <p className="text-gray-400">
                                            To be India's most trusted and comprehensive stock market education platform, known for integrity, innovation, and student success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core <span className="gradient-text">Values</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-effect p-6 rounded-xl hover:glow-effect transition-all duration-300"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Journey Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Our <span className="gradient-text">Journey</span></h2>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/20 via-green-500/20 to-transparent hidden md:block"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 w-full md:w-auto"></div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center z-10 my-4 md:my-0 mx-4 shadow-lg shadow-cyan-500/20">
                                        <div className="w-3 h-3 bg-black rounded-full"></div>
                                    </div>
                                    <div className="flex-1 w-full md:w-auto">
                                        <div className={`glass-effect p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                            <span className="text-cyan-400 font-bold text-xl mb-2 block">{item.year}</span>
                                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Recognition Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Recognition & <span className="gradient-text">Achievements</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-effect p-6 rounded-xl text-center hover:glow-effect transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-400">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
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
