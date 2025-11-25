'use client';'use client';



import { useState, useRef } from 'react';import { useState, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';import { motion } from 'framer-motion';

import { import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

  FaEnvelope, import emailjs from '@emailjs/browser';

  FaPhone, 

  FaMapMarkerAlt, export default function ContactPage() {

  FaLinkedin,   const formRef = useRef<HTMLFormElement>(null);

  FaGithub,   const [formData, setFormData] = useState({

  FaTwitter,    from_name: '',

  FaUser,    from_email: '',

  FaBuilding,    phone: '',

  FaComments,    company: '',

  FaCheckCircle,    message: '',

  FaArrowRight,  });

  FaArrowLeft

} from 'react-icons/fa';  const [isSubmitting, setIsSubmitting] = useState(false);

import emailjs from '@emailjs/browser';  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');



export default function ContactPage() {  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

  const formRef = useRef<HTMLFormElement>(null);    setFormData({

  const [currentStep, setCurrentStep] = useState(1);      ...formData,

  const [formData, setFormData] = useState({      [e.target.name]: e.target.value,

    from_name: '',    });

    from_email: '',  };

    phone: '',

    company: '',  const handleSubmit = async (e: React.FormEvent) => {

    message: '',    e.preventDefault();

    service_interest: '',    setIsSubmitting(true);

  });    

    try {

  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});      // EmailJS configuration

  const [isSubmitting, setIsSubmitting] = useState(false);      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const totalSteps = 3;

      console.log('Sending email with:', { serviceId, templateId, publicKey });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    const { name, value } = e.target;      // Use sendForm instead of send for better compatibility

    setFormData({      if (formRef.current) {

      ...formData,        const result = await emailjs.sendForm(

      [name]: value,          serviceId,

    });          templateId,

    // Clear error when user starts typing          formRef.current,

    if (fieldErrors[name]) {          publicKey

      setFieldErrors({        );

        ...fieldErrors,

        [name]: ''        console.log('Email sent successfully:', result);

      });        setSubmitStatus('success');

    }        setFormData({

  };          from_name: '',

          from_email: '',

  const validateStep = (step: number): boolean => {          phone: '',

    const errors: {[key: string]: string} = {};          company: '',

              message: '',

    if (step === 1) {        });

      if (!formData.from_name.trim()) {        

        errors.from_name = 'Name is required';        setTimeout(() => setSubmitStatus('idle'), 5000);

      }      }

      if (!formData.from_email.trim()) {    } catch (error: any) {

        errors.from_email = 'Email is required';      console.error('Email send failed:', error);

      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {      console.error('Error details:', {

        errors.from_email = 'Please enter a valid email';        text: error.text,

      }        status: error.status,

    } else if (step === 3) {        message: error.message

      if (!formData.message.trim()) {      });

        errors.message = 'Message is required';      alert(`Error: ${error.text || error.message || 'Unknown error'}`);

      }      setSubmitStatus('error');

    }      setTimeout(() => setSubmitStatus('idle'), 5000);

        } finally {

    setFieldErrors(errors);      setIsSubmitting(false);

    return Object.keys(errors).length === 0;    }

  };  };



  const nextStep = () => {  return (

    if (validateStep(currentStep)) {    <div className="relative overflow-hidden bg-white dark:bg-gray-900">

      setCurrentStep(Math.min(currentStep + 1, totalSteps));      {/* Hero Section */}

    }      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

  };        <div className="absolute inset-0 overflow-hidden">

          <motion.div

  const prevStep = () => {            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"

    setCurrentStep(Math.max(currentStep - 1, 1));            animate={{

  };              scale: [1, 1.15, 1],

              opacity: [0.2, 0.3, 0.2],

  const handleSubmit = async (e: React.FormEvent) => {            }}

    e.preventDefault();            transition={{

                  duration: 8,

    if (!validateStep(3)) {              repeat: Infinity,

      return;              ease: "easeInOut",

    }            }}

              />

    setIsSubmitting(true);        </div>

    

    try {        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';          <motion.h1

      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"

      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';            initial={{ opacity: 0, y: -30 }}

            animate={{ opacity: 1, y: 0 }}

      if (formRef.current) {            transition={{ duration: 0.6 }}

        await emailjs.sendForm(          >

          serviceId,            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Touch</span>

          templateId,          </motion.h1>

          formRef.current,          

          publicKey          <motion.p

        );            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"

            initial={{ opacity: 0 }}

        setSubmitStatus('success');            animate={{ opacity: 1 }}

        setFormData({            transition={{ duration: 0.6, delay: 0.2 }}

          from_name: '',          >

          from_email: '',            Let's discuss how we can help transform your infrastructure and accelerate your DevOps journey.

          phone: '',          </motion.p>

          company: '',        </div>

          message: '',      </section>

          service_interest: '',

        });      {/* Contact Section */}

        setCurrentStep(1);      <section className="py-20 bg-white dark:bg-gray-900">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        setTimeout(() => setSubmitStatus('idle'), 5000);          <div className="grid lg:grid-cols-2 gap-12">

      }            {/* Contact Information */}

    } catch (error: any) {            <motion.div

      console.error('Email send failed:', error);              initial={{ opacity: 0, x: -30 }}

      setSubmitStatus('error');              whileInView={{ opacity: 1, x: 0 }}

      setTimeout(() => setSubmitStatus('idle'), 5000);              viewport={{ once: true, margin: "-100px" }}

    } finally {              transition={{ duration: 0.6 }}

      setIsSubmitting(false);            >

    }              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>

  };              <p className="text-gray-600 dark:text-gray-400 mb-8">

                Feel free to reach out through any of these channels. We're here to help!

  const getStepIcon = (step: number) => {              </p>

    switch(step) {

      case 1: return <FaUser />;              <div className="space-y-6">

      case 2: return <FaBuilding />;                <motion.div

      case 3: return <FaComments />;                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

      default: return null;                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

    }                >

  };                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

                    <FaEnvelope />

  return (                  </div>

    <div className="relative overflow-hidden bg-white dark:bg-gray-900">                  <div>

      {/* Hero Section */}                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Email</h3>

      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">                    <a href="mailto:hello@devopsduoo.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">

        <div className="absolute inset-0 overflow-hidden">                      hello@devopsduoo.com

          <motion.div                    </a>

            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"                  </div>

            animate={{                </motion.div>

              scale: [1, 1.15, 1],

              opacity: [0.2, 0.3, 0.2],                <motion.div

            }}                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

            transition={{                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

              duration: 8,                >

              repeat: Infinity,                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

              ease: "easeInOut",                    <FaPhone />

            }}                  </div>

          />                  <div>

        </div>                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Phone</h3>

                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">                      +1 (234) 567-890

          <motion.h1                    </a>

            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"                  </div>

            initial={{ opacity: 0, y: -30 }}                </motion.div>

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}                <motion.div

          >                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Touch</span>                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

          </motion.h1>                >

                            <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

          <motion.p                    <FaMapMarkerAlt />

            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"                  </div>

            initial={{ opacity: 0 }}                  <div>

            animate={{ opacity: 1 }}                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Office</h3>

            transition={{ duration: 0.6, delay: 0.2 }}                    <p className="text-gray-600 dark:text-gray-400">

          >                      123 DevOps Street<br />

            Let's discuss how we can help transform your infrastructure and accelerate your DevOps journey.                      Tech City, TC 12345<br />

          </motion.p>                      United States

        </div>                    </p>

      </section>                  </div>

                </motion.div>

      {/* Contact Section */}              </div>

      <section className="py-20 bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">              <div className="mt-8">

          <div className="grid lg:grid-cols-2 gap-12">                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow Us</h3>

            {/* Contact Information */}                <div className="flex gap-4">

            <motion.div                  <motion.a

              initial={{ opacity: 0, x: -30 }}                    href="#"

              whileInView={{ opacity: 1, x: 0 }}                    whileHover={{ scale: 1.1, y: -3 }}

              viewport={{ once: true, margin: "-100px" }}                    transition={{ duration: 0.2 }}

              transition={{ duration: 0.6 }}                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"

            >                  >

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>                    <FaLinkedin size={24} />

              <p className="text-gray-600 dark:text-gray-400 mb-8">                  </motion.a>

                Feel free to reach out through any of these channels. We're here to help!                  <motion.a

              </p>                    href="#"

                    whileHover={{ scale: 1.1, y: -3 }}

              <div className="space-y-6">                    transition={{ duration: 0.2 }}

                <motion.div                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"                  >

                  whileHover={{ x: 4, transition: { duration: 0.2 } }}                    <FaGithub size={24} />

                >                  </motion.a>

                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">                  <motion.a

                    <FaEnvelope />                    href="#"

                  </div>                    whileHover={{ scale: 1.1, y: -3 }}

                  <div>                    transition={{ duration: 0.2 }}

                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Email</h3>                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"

                    <a href="mailto:hello@devopsduoo.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">                  >

                      hello@devopsduoo.com                    <FaTwitter size={24} />

                    </a>                  </motion.a>

                  </div>                </div>

                </motion.div>              </div>

            </motion.div>

                <motion.div

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"            {/* Contact Form */}

                  whileHover={{ x: 4, transition: { duration: 0.2 } }}            <motion.div

                >              initial={{ opacity: 0, x: 30 }}

                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">              whileInView={{ opacity: 1, x: 0 }}

                    <FaPhone />              viewport={{ once: true, margin: "-100px" }}

                  </div>              transition={{ duration: 0.6 }}

                  <div>              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"

                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Phone</h3>            >

                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                      +91 (234) 567-890              

                    </a>              {submitStatus === 'success' && (

                  </div>                <motion.div

                </motion.div>                  initial={{ opacity: 0, y: -20 }}

                  animate={{ opacity: 1, y: 0 }}

                <motion.div                  className="mb-6 p-4 bg-accent-100 dark:bg-accent-900/30 border border-accent-500 rounded-lg text-accent-700 dark:text-accent-400"

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"                >

                  whileHover={{ x: 4, transition: { duration: 0.2 } }}                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!

                >                </motion.div>

                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">              )}

                    <FaMapMarkerAlt />

                  </div>              {submitStatus === 'error' && (

                  <div>                <motion.div

                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Office</h3>                  initial={{ opacity: 0, y: -20 }}

                    <p className="text-gray-600 dark:text-gray-400">                  animate={{ opacity: 1, y: 0 }}

                      Shivneri Plaza, Gujrat Colony<br />                  className="mb-6 p-4 bg-error-100 dark:bg-error-900/30 border border-error-500 rounded-lg text-error-700 dark:text-error-400"

                      Kothrud, Pune, Maharashtra 411038<br />                >

                      India                  ❌ Oops! Something went wrong. Please try again or email us directly.

                    </p>                </motion.div>

                  </div>              )}

                </motion.div>

              </div>              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                <div>

              <div className="mt-8">                  <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow Us</h3>                    Full Name *

                <div className="flex gap-4">                  </label>

                  <motion.a                  <input

                    href="#"                    type="text"

                    whileHover={{ scale: 1.1, y: -3 }}                    id="from_name"

                    transition={{ duration: 0.2 }}                    name="from_name"

                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"                    value={formData.from_name}

                  >                    onChange={handleChange}

                    <FaLinkedin size={24} />                    required

                  </motion.a>                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

                  <motion.a                    placeholder="John Doe"

                    href="#"                  />

                    whileHover={{ scale: 1.1, y: -3 }}                </div>

                    transition={{ duration: 0.2 }}

                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"                <div>

                  >                  <label htmlFor="from_email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

                    <FaGithub size={24} />                    Email Address *

                  </motion.a>                  </label>

                  <motion.a                  <input

                    href="#"                    type="email"

                    whileHover={{ scale: 1.1, y: -3 }}                    id="from_email"

                    transition={{ duration: 0.2 }}                    name="from_email"

                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"                    value={formData.from_email}

                  >                    onChange={handleChange}

                    <FaTwitter size={24} />                    required

                  </motion.a>                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

                </div>                    placeholder="john@example.com"

              </div>                  />

            </motion.div>                </div>



            {/* Multi-Step Contact Form */}                <div>

            <motion.div                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

              initial={{ opacity: 0, x: 30 }}                    Phone Number

              whileInView={{ opacity: 1, x: 0 }}                  </label>

              viewport={{ once: true, margin: "-100px" }}                  <input

              transition={{ duration: 0.6 }}                    type="tel"

              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"                    id="phone"

            >                    name="phone"

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>                    value={formData.phone}

              <p className="text-gray-600 dark:text-gray-400 mb-6">Step {currentStep} of {totalSteps}</p>                    onChange={handleChange}

                                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

              {/* Progress Bar */}                    placeholder="+1 (234) 567-890"

              <div className="mb-8">                  />

                <div className="flex justify-between mb-4">                </div>

                  {[1, 2, 3].map((step) => (

                    <div key={step} className="flex items-center">                <div>

                      <motion.div                  <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${                    Company Name

                          step < currentStep                  </label>

                            ? 'bg-green-500 text-white'                  <input

                            : step === currentStep                    type="text"

                            ? 'bg-primary-600 text-white'                    id="company"

                            : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'                    name="company"

                        }`}                    value={formData.company}

                        animate={{ scale: step === currentStep ? 1.1 : 1 }}                    onChange={handleChange}

                      >                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

                        {step < currentStep ? <FaCheckCircle /> : getStepIcon(step)}                    placeholder="Your Company"

                      </motion.div>                  />

                      {step < totalSteps && (                </div>

                        <div className={`hidden sm:block w-16 md:w-24 h-1 mx-2 ${

                          step < currentStep ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'                <div>

                        }`} />                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

                      )}                    Message *

                    </div>                  </label>

                  ))}                  <textarea

                </div>                    id="message"

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">                    name="message"

                  <motion.div                    value={formData.message}

                    className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"                    onChange={handleChange}

                    initial={{ width: 0 }}                    required

                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}                    rows={5}

                    transition={{ duration: 0.5 }}                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"

                  />                    placeholder="Tell us about your project..."

                </div>                  />

              </div>                </div>



              {submitStatus === 'success' && (                <motion.button

                <motion.div                  type="submit"

                  initial={{ opacity: 0, y: -20 }}                  disabled={isSubmitting}

                  animate={{ opacity: 1, y: 0 }}                  whileHover={{ scale: 1.02 }}

                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400 flex items-center gap-2"                  whileTap={{ scale: 0.98 }}

                >                  transition={{ duration: 0.2 }}

                  <FaCheckCircle />                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"

                  <span>Thank you! Your message has been sent successfully.</span>                >

                </motion.div>                  {isSubmitting ? 'Sending...' : 'Send Message'}

              )}                </motion.button>

              </form>

              {submitStatus === 'error' && (            </motion.div>

                <motion.div          </div>

                  initial={{ opacity: 0, y: -20 }}        </div>

                  animate={{ opacity: 1, y: 0 }}      </section>

                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400"

                >      {/* Map Section */}

                  ❌ Oops! Something went wrong. Please try again.      <section className="py-20 bg-gray-50 dark:bg-gray-800">

                </motion.div>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              )}          <motion.div

            initial={{ opacity: 0, y: 30 }}

              <form ref={formRef} onSubmit={handleSubmit}>            whileInView={{ opacity: 1, y: 0 }}

                <AnimatePresence mode="wait">            viewport={{ once: true, margin: "-100px" }}

                  {/* Step 1: Personal Information */}            transition={{ duration: 0.6 }}

                  {currentStep === 1 && (            className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"

                    <motion.div          >

                      key="step1"            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Visit Our Office</h2>

                      initial={{ opacity: 0, x: 50 }}            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">

                      animate={{ opacity: 1, x: 0 }}              Shivneri Plaza, Gujrat Colony, Kothrud, Pune, Maharashtra 411038

                      exit={{ opacity: 0, x: -50 }}            </p>

                      transition={{ duration: 0.3 }}            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">

                      className="space-y-6"              <iframe 

                    >                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4774465194323!2d73.80583357540657!3d18.507314369578705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb993c25c11%3A0x7d1074be1df11b76!2sShivneri%20Plaza%2C%20Gujrat%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1764008318083!5m2!1sen!2sin" 

                      <div>                width="100%" 

                        <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">                height="450" 

                          Full Name *                style={{ border: 0 }}

                        </label>                allowFullScreen 

                        <input                loading="lazy" 

                          type="text"                referrerPolicy="no-referrer-when-downgrade"

                          id="from_name"                className="w-full"

                          name="from_name"              />

                          value={formData.from_name}            </div>

                          onChange={handleChange}          </motion.div>

                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors ${        </div>

                            fieldErrors.from_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'      </section>

                          }`}    </div>

                          placeholder="John Doe"  );

                        />}

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

                  {/* Step 2: Company Details */}
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

                  {/* Step 3: Message */}
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

                {/* Navigation Buttons */}
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
