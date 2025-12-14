'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FaUserShield,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you contact us or use our services, we may collect: name, email address, phone number, company name, and project details you voluntarily provide through our contact forms or consultations."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We collect technical information such as IP address, browser type, device information, and usage data through cookies and analytics tools to improve our website performance and user experience."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: FaLock,
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide DevOps consulting services, respond to inquiries, send project updates, and deliver requested information about our services."
        },
        {
          subtitle: "Communication",
          text: "To send you service-related notifications, respond to your questions, and provide customer support. We may also send occasional updates about our services with your consent."
        },
        {
          subtitle: "Improvement",
          text: "To analyze website usage, improve our services, develop new features, and enhance user experience based on feedback and behavior patterns."
        }
      ]
    },
    {
      title: "Data Protection & Security",
      icon: FaShieldAlt,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your data including SSL encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes."
        },
        {
          subtitle: "Third-Party Services",
          text: "We use trusted third-party services (EmailJS, Google Analytics) that may have access to your information solely for providing services on our behalf. These providers are obligated to maintain confidentiality."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: FaUserShield,
      content: [
        {
          subtitle: "Access & Control",
          text: "You have the right to access, update, or delete your personal information. Contact us to exercise these rights or if you have questions about your data."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time by contacting us directly. Essential service communications will still be sent as needed."
        },
        {
          subtitle: "Cookies",
          text: "You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality and your user experience."
        }
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6"
          >
            <FaShieldAlt className="text-4xl text-primary-600 dark:text-primary-400" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Policy</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your privacy matters to us. Learn how we protect and handle your data.
          </motion.p>

          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last Updated: December 14, 2025
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At DevOps Duoo, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services. By using our services, you agree to the practices described in this policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <section.icon className="text-2xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-primary-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <FaEnvelope className="text-5xl mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-lg mb-8 opacity-90">
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us
                </motion.button>
              </Link>
              <a href="mailto:devopsduoo@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Email Us Directly
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Policy Updates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the new policy on this page with an updated &quot;Last Updated&quot; date. 
              Your continued use of our services after such modifications constitutes acceptance of the updated policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
