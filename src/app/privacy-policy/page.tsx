'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Privacy Policy & <span className="gradient-text">No Refund Policy</span>
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
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Excelsior (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website, attend our courses (online/offline), or interact with us in any form.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using any of our services, you agree to the terms outlined in this Privacy Policy and our No Refund Policy.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 text-cyan-400 mr-3" />
              1. Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We collect personal and transactional information that you provide to us, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>Location (for offline sessions)</li>
              <li>Payment Details (only via secure gateways, never stored by us)</li>
              <li>Device and browsing information (via cookies)</li>
            </ul>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Lock className="w-6 h-6 text-green-400 mr-3" />
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              Your information is used strictly for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Providing course access and study material</li>
              <li>Communicating updates or important notices</li>
              <li>Offering customer support</li>
              <li>Sending transactional and course-related WhatsApp/email/SMS messages</li>
              <li>Internal analytics to improve our offerings</li>
            </ul>
          </div>

          {/* Section 3: Data Protection */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 text-blue-400 mr-3" />
              3. Data Protection
            </h2>
            <p className="text-gray-300 mb-4">
              We implement industry-standard measures to secure your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Encrypted storage (where applicable)</li>
              <li>Secure payment gateways (e.g., Razorpay, Google Pay, etc.)</li>
              <li>Limited access to sensitive data internally</li>
              <li>No resale or third-party sharing of personal data</li>
            </ul>
          </div>

          {/* Section 4: Third-Party Services */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">4. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              We may use trusted third-party tools (e.g., Zoom, Google Drive, WhatsApp API, payment gateways) to deliver services. These platforms may have their own privacy policies. We are not responsible for their practices.
            </p>
          </div>

          {/* Section 5: No Refund Policy */}
          <div className="glass-effect p-8 rounded-2xl border-2 border-red-500/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-red-400">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              5. No Refund Policy
            </h2>
            <p className="text-gray-300 mb-4 font-semibold">
              All payments made to Excelsior are non-refundable under any circumstances.
            </p>
            <p className="text-gray-300 mb-4">
              This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Course cancellations by the participant</li>
              <li>Change of mind</li>
              <li>Unavailability or scheduling conflicts</li>
              <li>Technical issues on the user&apos;s end</li>
              <li>Failure to attend live/offline sessions</li>
            </ul>
            <p className="text-gray-300 mt-4 font-semibold">
              By enrolling and making payment, you agree and acknowledge this No Refund Policy unconditionally.
            </p>
          </div>

          {/* Section 6: Disclaimer & Limitation of Liability */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">6. Disclaimer & Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Our courses are for educational purposes only and are not financial advice.</li>
              <li>We do not guarantee profits, returns, or success in the stock market.</li>
              <li>Any decision made based on our content is the responsibility of the user.</li>
              <li>We are not liable for any loss, damage, or legal issue arising from the use of our material.</li>
              <li>Defamation, misuse of our content, or misrepresentation of our brand is strictly prohibited and may attract legal action.</li>
            </ul>
          </div>

          {/* Section 7: User Consent */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">7. User Consent</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing our website, joining our classes (online or offline), or engaging in any communication with us, you consent to this Privacy Policy and the No Refund terms.
            </p>
          </div>

          {/* Section 8: Updates to This Policy */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">8. Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to update or modify this policy at any time. Updates will be posted on this page with the revised date.
            </p>
          </div>

          {/* Section 9: Contact Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">9. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have questions or concerns about this Privacy Policy or our practices, please contact:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">📧 Email: tradexcelsior@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">📞 Phone: +91 94818 68529</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">🏢 Office: Pune, Maharashtra, India</span>
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