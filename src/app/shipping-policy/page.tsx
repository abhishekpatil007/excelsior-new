'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Monitor, MapPin, Key, Calendar, CheckCircle, Mail, Phone } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Shipping</span> Policy
          </h1>
          <p className="text-xl text-gray-400">
            Effective Date: December 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Monitor className="w-6 h-6 text-cyan-400 mr-3" />
              Service-Based Educational Program
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At Money Craft Trader, we provide training and educational services in stock market learning through both online and offline classes. Since our product is a service-based educational program and not a physical item, there is no physical shipping or delivery involved.
            </p>
          </div>

          {/* How Access is Delivered */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              How Access is Delivered
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Online Students</h3>
                <p className="text-gray-300">
                  Once your enrollment and payment are confirmed, login credentials to our LMS portal are provided within 24 hours.
                </p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Offline Students</h3>
                <p className="text-gray-300">
                  After enrollment, you will receive a confirmation message with your batch details, classroom address, and start date.
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="glass-effect p-8 rounded-2xl border-2 border-yellow-500/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-yellow-400">
              <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
              Important Notes
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>No shipping charges apply, as we do not dispatch any physical goods.</li>
              <li>All course materials, recordings, and resources are delivered digitally via our portal.</li>
              <li>Any study materials provided in offline classes are handed over directly to the student at the training center.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions, please contact us at:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">📧 support@moneycrafttrader.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">📞 +91 7499240812</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
