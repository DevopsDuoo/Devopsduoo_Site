'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFileContract, FaHandshake, FaBalanceScale, FaGavel } from 'react-icons/fa';

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FaHandshake,
      content: [
        {
          text: "By accessing and using DevOps Duoo's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of our DevOps consulting and coaching services."
        },
        {
          text: "We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the updated terms. It is your responsibility to review these terms periodically."
        }
      ]
    },
    {
      title: "Services Description",
      icon: FaFileContract,
      content: [
        {
          subtitle: "Consulting Services",
          text: "DevOps Duoo provides professional DevOps consulting, cloud infrastructure design, CI/CD pipeline implementation, automation solutions, and related technical services. Services are provided on a project or retainer basis as agreed upon in separate service agreements."
        },
        {
          subtitle: "Coaching & Training",
          text: "We offer DevOps coaching, team training, and knowledge transfer sessions. These services are designed to enhance your team's capabilities and are delivered through workshops, one-on-one sessions, or online training programs."
        },
        {
          subtitle: "Service Scope",
          text: "The specific scope, deliverables, timeline, and pricing for each engagement will be outlined in a separate Statement of Work (SOW) or service agreement. These terms serve as the general framework for all engagements."
        }
      ]
    },
    {
      title: "Client Responsibilities",
      icon: FaBalanceScale,
      content: [
        {
          subtitle: "Information Accuracy",
          text: "You agree to provide accurate, complete, and current information when using our services. You are responsible for maintaining the confidentiality of any account credentials or access provided for service delivery."
        },
        {
          subtitle: "Cooperation",
          text: "Successful service delivery requires your cooperation, including timely provision of required information, access to systems, and feedback. Delays caused by lack of cooperation may affect project timelines and costs."
        },
        {
          subtitle: "Environment Access",
          text: "For infrastructure and deployment services, you agree to provide necessary access to systems, environments, and tools. You are responsible for backing up your data before we perform any modifications."
        }
      ]
    },
    {
      title: "Payment Terms",
      icon: FaGavel,
      content: [
        {
          subtitle: "Pricing & Invoicing",
          text: "Service fees will be outlined in your specific service agreement or SOW. Unless otherwise specified, invoices are payable within 15 days of receipt. Late payments may incur interest charges of 1.5% per month or the maximum allowed by law."
        },
        {
          subtitle: "Refund Policy",
          text: "Due to the professional nature of our services, refunds are handled on a case-by-case basis. For project-based work, partial refunds may be considered for work not yet completed. Coaching sessions and completed work are non-refundable."
        },
        {
          subtitle: "Expenses",
          text: "Unless otherwise agreed, you are responsible for reimbursing any pre-approved third-party expenses incurred during service delivery, such as cloud infrastructure costs, software licenses, or travel expenses."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: FaFileContract,
      content: [
        {
          subtitle: "Ownership",
          text: "Upon full payment, you will own the custom deliverables created specifically for your project. DevOps Duoo retains ownership of our methodologies, templates, tools, and any pre-existing intellectual property used in service delivery."
        },
        {
          subtitle: "License to Tools",
          text: "We grant you a non-exclusive license to use any tools or frameworks we provide as part of our services. This license is limited to your internal use and cannot be redistributed or resold."
        },
        {
          subtitle: "Confidentiality",
          text: "Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This includes technical details, business processes, and any information marked as confidential."
        }
      ]
    },
    {
      title: "Warranties & Limitations",
      icon: FaBalanceScale,
      content: [
        {
          subtitle: "Service Warranty",
          text: "We warrant that our services will be performed in a professional manner consistent with industry standards. However, we do not guarantee specific results or outcomes, as these depend on many factors outside our control."
        },
        {
          subtitle: "No Uptime Guarantee",
          text: "While we strive to design robust systems, we do not guarantee 100% uptime or error-free operation of any infrastructure we implement. You are responsible for maintaining adequate backups and disaster recovery plans."
        },
        {
          subtitle: "Limitation of Liability",
          text: "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages."
        }
      ]
    },
    {
      title: "Termination",
      icon: FaGavel,
      content: [
        {
          subtitle: "Termination by Client",
          text: "You may terminate services with 15 days written notice. You will be responsible for payment of all work completed up to the termination date, plus any non-cancellable expenses already incurred."
        },
        {
          subtitle: "Termination by DevOps Duoo",
          text: "We reserve the right to terminate services if you breach these terms, fail to make payments, or if continuing service becomes impractical. We will provide reasonable notice when possible."
        },
        {
          subtitle: "Post-Termination",
          text: "Upon termination, we will deliver any completed work product. You agree to pay all outstanding invoices. Confidentiality obligations survive termination of services."
        }
      ]
    },
    {
      title: "Disclaimer & Indemnification",
      icon: FaBalanceScale,
      content: [
        {
          subtitle: "Use at Your Own Risk",
          text: "Our services are provided 'as is' without any warranties beyond those explicitly stated. You acknowledge that DevOps and infrastructure changes carry inherent risks, and you assume responsibility for implementing appropriate safeguards."
        },
        {
          subtitle: "Third-Party Tools",
          text: "We may recommend or implement third-party tools and services. We are not responsible for the performance, security, or availability of third-party services. You are responsible for reviewing and accepting third-party terms."
        },
        {
          subtitle: "Indemnification",
          text: "You agree to indemnify and hold DevOps Duoo harmless from any claims arising from your use of our services, your violation of these terms, or your violation of any third-party rights."
        }
      ]
    },
    {
      title: "General Provisions",
      icon: FaGavel,
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms are governed by the laws of India. Any disputes will be resolved in the courts of Pune, Maharashtra. Both parties agree to submit to the jurisdiction of these courts."
        },
        {
          subtitle: "Entire Agreement",
          text: "These terms, along with any specific service agreement or SOW, constitute the entire agreement between you and DevOps Duoo regarding our services and supersede all prior agreements or understandings."
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable."
        }
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-accent-100 via-gray-50 to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
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
            className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6"
          >
            <FaFileContract className="text-4xl text-accent-600 dark:text-accent-400" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Service</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Clear terms for a transparent partnership. Please review our service agreement.
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
              Welcome to DevOps Duoo. These Terms of Service govern your use of our website and the professional services we provide. 
              By engaging with our services, you agree to these terms. Please read them carefully before proceeding with any service engagement. 
              These terms are designed to ensure a clear understanding of our mutual responsibilities and create a foundation for successful collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-xl text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className={'subtitle' in item && item.subtitle ? 'ml-4' : ''}>
                      {'subtitle' in item && item.subtitle && (
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          {item.subtitle}
                        </h3>
                      )}
                      <p className={`text-gray-700 dark:text-gray-300 leading-relaxed ${'subtitle' in item && item.subtitle ? 'ml-4' : ''}`}>
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
            className="bg-gradient-to-r from-accent-600 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <FaHandshake className="text-5xl mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-lg mb-8 opacity-90">
              Have questions about our terms or ready to start a project? We&apos;re here to discuss your DevOps needs and create a customized service agreement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start a Conversation
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreement Notice */}
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
              Agreement to Terms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              By using DevOps Duoo&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
              and our Privacy Policy. If you are entering into this agreement on behalf of a company or organization, you represent that you have 
              the authority to bind that entity to these terms.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For specific project terms, a separate Statement of Work (SOW) or service agreement will be provided.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
