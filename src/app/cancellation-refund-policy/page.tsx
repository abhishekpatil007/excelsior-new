/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Mail, Phone, Shield, XCircle } from 'lucide-react';

export default function CancellationRefundPolicy() {
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
            Cancellation & <span className="gradient-text">Refund Policy</span>
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
            <p className="text-gray-300 leading-relaxed">
              At Excelsior, we provide educational services, including online and offline stock market training programs. Once a student enrolls and makes the payment, the fee is non-refundable and non-transferable under any circumstances.
            </p>
          </div>

          {/* Important Notice */}
          <div className="glass-effect p-8 rounded-2xl border-2 border-red-500/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-red-400">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              Important Notice
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We request students to carefully review course details, schedules, and fee structures before enrollment.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>All course fees are non-refundable once payment is made</li>
              <li>Course access cannot be transferred to another person</li>
              <li>No exceptions will be made for any reason</li>
            </ul>
          </div>

          {/* Payment Gateway Issues */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 text-blue-400 mr-3" />
              Payment Gateway Issues
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In case of payment gateway errors (such as payment failure with deduction), please contact us immediately.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">📧 Email: tradexcelsior@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">📞 Phone: +91 94818 68529 / +91 63643 27653</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              We will work with our payment partner to resolve the issue and ensure you receive the appropriate resolution.
            </p>
            <p className="text-gray-300 mt-4">
              We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting to the website. It is the user&apos;s responsibility to review this policy periodically.
            </p>
          </div>

          {/* Policy Summary */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <XCircle className="w-6 h-6 text-orange-400 mr-3" />
              Policy Summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">All payments are final and non-refundable</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Course access cannot be transferred to another person</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">No refunds for change of mind or scheduling conflicts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Payment gateway issues will be resolved with our support team</p>
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
