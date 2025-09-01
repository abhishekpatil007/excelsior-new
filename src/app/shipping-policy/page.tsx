'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Monitor, MapPin, Key, Calendar, CheckCircle } from 'lucide-react';

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
              Digital & Classroom Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are educational programs delivered through our Learning Management System (LMS) and offline classroom sessions in Pune, Maharashtra. Since these are digital and classroom-based services, no physical products are shipped.
            </p>
          </div>

          {/* What You Receive */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              Upon Successful Enrollment
            </h2>
            <p className="text-gray-300 mb-6">
              Upon successful enrollment and payment, students will receive:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Key className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Login Credentials</h3>
                  <p className="text-gray-400 text-sm">Access to our Learning Management System (LMS)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Batch Allocation</h3>
                  <p className="text-gray-400 text-sm">Details for offline or online sessions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Monitor className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Digital Access</h3>
                  <p className="text-gray-400 text-sm">All course materials and resources</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-blue-400 mr-3" />
              Delivery Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Digital Delivery</h3>
                <p className="text-gray-300">
                  All course materials, videos, and resources are delivered digitally through our LMS platform. You can access them immediately after enrollment confirmation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Classroom Sessions</h3>
                <p className="text-gray-300">
                  Offline sessions are conducted at our Pune center. You'll receive detailed location information and batch timings upon enrollment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">No Shipping Charges</h3>
                <p className="text-gray-300">
                  Since all access is provided digitally or in person, no shipping or delivery charges apply to any of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Service Types */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Service Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Online Classes</h3>
                <p className="text-gray-300 text-sm">
                  Live interactive sessions conducted via Zoom or similar platforms. Access from anywhere with an internet connection.
                </p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Offline Classes</h3>
                <p className="text-gray-300 text-sm">
                  In-person sessions at our Pune center. Hands-on learning with direct interaction with mentors.
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
              <li>No physical products are shipped or delivered</li>
              <li>All course materials are digital and accessible 24/7</li>
              <li>Classroom sessions require physical attendance in Pune</li>
              <li>Internet connection required for online sessions</li>
              <li>No shipping delays or delivery issues</li>
            </ul>
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
