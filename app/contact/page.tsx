'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaUser,
  FaBuilding,
  FaComments,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    company: '',
    message: '',
    service_interest: '',
  });

  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const totalSteps = 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (step === 1) {
      if (!formData.from_name.trim()) {
        errors.from_name = 'Name is required';
      }
      if (!formData.from_email.trim()) {
        errors.from_email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
        errors.from_email = 'Please enter a valid email';
      }
    } else if (step === 3) {
      if (!formData.message.trim()) {
        errors.message = 'Message is required';
      }
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(Math.min(currentStep + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing:', { serviceId, templateId, publicKey });
        throw new Error('Email service not configured properly');
      }

      // Prepare template parameters with actual form data
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service_interest: formData.service_interest || 'Not specified',
        message: formData.message,
      };

      console.log('Sending email with data:', templateParams);
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        company: '',
        message: '',
        service_interest: '',
      });
      setCurrentStep(1);
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Email send failed:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepIcon = (step: number) => {
    switch(step) {
      case 1: return <FaUser />;
      case 2: return <FaBuilding />;
      case 3: return <FaComments />;
      default: return null;
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
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
            Let&apos;s discuss how we can help transform your infrastructure and accelerate your DevOps journey.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. We&apos;re here to help!
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
                      +91 (234) 567-890
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
                      Shivneri Plaza, Gujrat Colony<br />
                      Kothrud, Pune, Maharashtra 411038<br />
                      India
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Step {currentStep} of {totalSteps}</p>
              
              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                          step < currentStep
                            ? 'bg-green-500 text-white'
                            : step === currentStep
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                        animate={{ scale: step === currentStep ? 1.1 : 1 }}
                      >
                        {step < currentStep ? <FaCheckCircle /> : getStepIcon(step)}
                      </motion.div>
                      {step < totalSteps && (
                        <div className={`hidden sm:block w-16 md:w-24 h-1 mx-2 ${
                          step < currentStep ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400 flex items-center gap-2"
                >
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400"
                >
                  ❌ Oops! Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
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
                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors ${
                            fieldErrors.from_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                          }`}
                          placeholder="John Doe"
                        />
                        {fieldErrors.from_name && (
                          <p className="mt-1 text-sm text-red-500">{fieldErrors.from_name}</p>
                        )}
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
                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors ${
                            fieldErrors.from_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                          }`}
                          placeholder="john@example.com"
                        />
                        {fieldErrors.from_email && (
                          <p className="mt-1 text-sm text-red-500">{fieldErrors.from_email}</p>
                        )}
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
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
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
                        <label htmlFor="service_interest" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                          Service Interest
                        </label>
                        <select
                          id="service_interest"
                          name="service_interest"
                          value={formData.service_interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="cloud-infrastructure">Cloud Infrastructure</option>
                          <option value="cicd-pipeline">CI/CD Pipeline</option>
                          <option value="container-orchestration">Container Orchestration</option>
                          <option value="monitoring">Monitoring & Logging</option>
                          <option value="iac">Infrastructure as Code</option>
                          <option value="security">Security & Compliance</option>
                          <option value="consultation">Career Consultation</option>
                          <option value="coaching">DevOps Coaching</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={8}
                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors resize-none ${
                            fieldErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                          }`}
                          placeholder="Tell us about your project and how we can help..."
                        />
                        {fieldErrors.message && (
                          <p className="mt-1 text-sm text-red-500">{fieldErrors.message}</p>
                        )}
                      </div>

                      <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Your Information:</h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <p><span className="font-medium">Name:</span> {formData.from_name}</p>
                          <p><span className="font-medium">Email:</span> {formData.from_email}</p>
                          {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}
                          {formData.company && <p><span className="font-medium">Company:</span> {formData.company}</p>}
                          {formData.service_interest && <p><span className="font-medium">Service:</span> {formData.service_interest}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                    >
                      <FaArrowLeft />
                      Previous
                    </motion.button>
                  )}

                  {currentStep < totalSteps ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="ml-auto px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                    >
                      Next
                      <FaArrowRight />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="ml-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <FaCheckCircle />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

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
