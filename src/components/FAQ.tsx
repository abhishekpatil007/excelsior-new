'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do I need prior experience to join the course?",
    answer: "No prior experience is required! Our Foundation course starts with the absolute basics and gradually builds your knowledge. We cover everything from understanding what stocks are, how markets work, to advanced trading strategies. Even if you've never invested before, our step-by-step curriculum will guide you through the entire learning journey."
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "All our courses provide lifetime access with no expiration date. Once you enroll, you can access all videos, resources, materials, and updates forever. You'll also receive free updates whenever we add new content, modules, or market analysis to keep the course current with evolving market trends."
  },
  {
    question: "What types of courses do you offer?",
    answer: "We offer a comprehensive 'Basics to Advanced' course designed to take you from a complete beginner to a professional trader. There are no confusing tiers or upgrades – you get access to everything in one complete package."
  },
  {
    question: "Do you teach different trading styles?",
    answer: "Yes! Our comprehensive curriculum covers multiple trading styles including day trading, swing trading, position trading, and long-term value investing. You'll learn technical analysis for short-term trades, fundamental analysis for long-term investments, and how to combine both approaches."
  },
  {
    question: "Are there live trading sessions?",
    answer: "Absolutely! Every concept is reinforced with real market examples and live case studies. Our course includes daily live trading sessions where you can watch real trades being analyzed and executed in real-time."
  },
  {
    question: "How much capital do I need to start trading?",
    answer: "You can start learning immediately without any capital. When you're ready to trade, you can begin with as little as ₹25,000-₹30,000. We teach proper position sizing and risk management so you can grow your account safely regardless of your starting capital."
  },
  {
    question: "Is there support available if I have questions?",
    answer: "Yes! We provide comprehensive support to all our students, including email support, weekly Q&A sessions, and access to our trading community."
  },
  {
    question: "Do you provide guidance on trading platforms?",
    answer: "We provide detailed guidance on the best trading platforms for Indian markets including Zerodha, Upstox, Angel One, and others. We also teach you how to use essential tools like TradingView for charting and Screener.in for stock analysis."
  },
  {
    question: "How long does it take to become profitable?",
    answer: "Most students start seeing consistent results within 3-6 months of dedicated learning and practice. However, becoming a consistently profitable trader typically takes 6-12 months. We emphasize that trading is a skill that requires continuous learning and practice."
  },
  {
    question: "Do you cover options and derivatives?",
    answer: "Yes! Our comprehensive course includes deep-dive coverage of options trading, futures, and other derivatives. We teach options strategies, Greeks, volatility trading, and risk management for derivatives."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hero-text">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to the most common questions about our comprehensive stock market trading courses.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/30 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-gray-200 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
