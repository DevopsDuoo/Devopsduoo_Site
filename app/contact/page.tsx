'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      console.log('Sending email with:', { serviceId, templateId, publicKey });

      // Use sendForm instead of send for better compatibility
      if (formRef.current) {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        console.log('Email sent successfully:', result);
        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          company: '',
          message: '',
        });
        
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error: any) {
      console.error('Email send failed:', error);
      console.error('Error details:', {
        text: error.text,
        status: error.status,
        message: error.message
      });
      alert(`Error: ${error.text || error.message || 'Unknown error'}`);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
            animate={{
              scale: [1, 1.15, 1],
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
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Touch</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how we can help transform your infrastructure and accelerate your DevOps journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. We're here to help!
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@devopsduoo.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      hello@devopsduoo.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 DevOps Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <FaTwitter size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-accent-100 dark:bg-accent-900/30 border border-accent-500 rounded-lg text-accent-700 dark:text-accent-400"
                >
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-error-100 dark:bg-error-900/30 border border-error-500 rounded-lg text-error-700 dark:text-error-400"
                >
                  ❌ Oops! Something went wrong. Please try again or email us directly.
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Visit Our Office</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
              Shivneri Plaza, Gujrat Colony, Kothrud, Pune, Maharashtra 411038
            </p>
            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4774465194323!2d73.80583357540657!3d18.507314369578705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb993c25c11%3A0x7d1074be1df11b76!2sShivneri%20Plaza%2C%20Gujrat%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1764008318083!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
