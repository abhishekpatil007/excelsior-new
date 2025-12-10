/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, BookOpen, CreditCard, AlertTriangle, Copyright, Users, Gavel, Calendar, XCircle, Edit, MapPin, Mail, Phone } from 'lucide-react';

export default function TermsAndConditions() {
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
            Terms & <span className="gradient-text">Conditions</span>
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
              Welcome to Excelsior (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of our services, including our website, courses, content, communication channels (such as WhatsApp, Telegram), and offline/online programs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using any part of our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          {/* Section 1: Eligibility */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 text-cyan-400 mr-3" />
              1. Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>You must be at least 18 years old or have parental consent to use our services.</li>
              <li>You are responsible for ensuring that your use of our services complies with all laws and regulations applicable to you.</li>
            </ul>
          </div>

          {/* Section 2: Educational Purpose Only */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-green-400 mr-3" />
              2. Educational Purpose Only
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>All content provided by Excelsior is strictly for educational and informational purposes.</li>
              <li>We do not provide financial, investment, or legal advice.</li>
              <li>Users are responsible for their own investment decisions.</li>
            </ul>
          </div>

          {/* Section 3: Payment Terms */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CreditCard className="w-6 h-6 text-blue-400 mr-3" />
              3. Payment Terms
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>All payments made to Excelsior are final and non-refundable.</li>
              <li>Your registration is confirmed only upon successful payment.</li>
              <li>We reserve the right to modify course pricing at any time.</li>
            </ul>
          </div>

          {/* Section 4: No Refund Policy */}
          <div className="glass-effect p-8 rounded-2xl border-2 border-red-500/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-red-400">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              4. No Refund Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>By enrolling in any course, you explicitly agree that no refund requests will be entertained under any circumstance.</li>
              <li>Refer to our <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy & No Refund Policy</Link> for more details.</li>
            </ul>
          </div>

          {/* Section 5: Intellectual Property */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Copyright className="w-6 h-6 text-purple-400 mr-3" />
              5. Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>All materials including but not limited to videos, slides, PDFs, live sessions, and recordings are the intellectual property of Excelsior.</li>
              <li>You may not record, distribute, duplicate, or share any part of our course content without written permission.</li>
              <li>Any unauthorized sharing or commercial use of our material is a legal violation.</li>
            </ul>
          </div>

          {/* Section 6: Code of Conduct */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="w-6 h-6 text-yellow-400 mr-3" />
              6. Code of Conduct
            </h2>
            <p className="text-gray-300 mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Behave respectfully in all sessions and groups</li>
              <li>Not abuse, harass, or spam instructors or students</li>
              <li>Not misuse, misrepresent, or defame our brand in any form</li>
              <li>Avoid promoting external products/services in our communities</li>
            </ul>
            <p className="text-gray-300 mt-4 font-semibold">
              Violation of this may result in immediate removal from the course and community, with no refund.
            </p>
          </div>

          {/* Section 7: Limitation of Liability */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 text-orange-400 mr-3" />
              7. Limitation of Liability
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>We make no guarantees regarding results, performance, or earnings through stock market participation.</li>
              <li>We are not liable for any loss, damage, or consequence arising directly or indirectly from the use of our courses.</li>
              <li>All responsibility for applying any strategy, technique, or information lies with the user.</li>
            </ul>
          </div>

          {/* Section 8: Course Access & Expiry */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-indigo-400 mr-3" />
              8. Course Access & Expiry
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Access to course content (recordings, materials) is valid only for the duration communicated during enrollment.</li>
              <li>We reserve the right to modify or discontinue any part of the course at any time.</li>
            </ul>
          </div>

          {/* Section 9: Termination */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <XCircle className="w-6 h-6 text-red-400 mr-3" />
              9. Termination
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate access to any user who violates these Terms, without refund or prior notice.
            </p>
          </div>

          {/* Section 10: Amendments */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Edit className="w-6 h-6 text-green-400 mr-3" />
              10. Amendments
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms at any time. Continued use of our services after changes means you agree to the updated Terms.
            </p>
          </div>

          {/* Section 11: Governing Law & Jurisdiction */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Gavel className="w-6 h-6 text-blue-400 mr-3" />
              11. Governing Law & Jurisdiction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and interpreted under the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Pune, Maharashtra, India.
            </p>
          </div>

          {/* Section 12: Contact Information */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">12. Contact Information</h2>
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
                <span className="text-gray-300">🏢 Office Address: Pune, Maharashtra, India</span>
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