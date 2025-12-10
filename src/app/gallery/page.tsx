/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function Gallery() {
    const images = [
        '/gallery/20250908_180954.jpg',
        '/gallery/20250908_181016.jpg',
        '/gallery/20250908_183212.jpg',
        '/gallery/20250908_183259.jpg',
        '/gallery/20250908_183304.jpg',
        '/gallery/20250908_184038.jpg',
        '/gallery/20250908_184048.jpg',
        '/gallery/20250908_184532.jpg',
    ];

    return (
        <div className="min-h-screen pt-20">
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
                            <span className="text-pink-400 font-semibold text-sm uppercase tracking-wider">Our Moments</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4 sm:px-0">
                            Life at <span className="gradient-text">Excelsior</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                            Glimpses of our trading sessions, workshops, and community events.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/3] overflow-hidden rounded-2xl glass-effect"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
