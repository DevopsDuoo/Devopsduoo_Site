'use client';'use client';'use client';



import { useState, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { import { useState, useRef } from 'react';import { useState, useRef } from 'react';

  FaEnvelope, 

  FaPhone, import { motion, AnimatePresence } from 'framer-motion';import { motion } from 'framer-motion';

  FaMapMarkerAlt, 

  FaLinkedin, import { import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

  FaGithub, 

  FaTwitter,  FaEnvelope, import emailjs from '@emailjs/browser';

  FaUser,

  FaBuilding,  FaPhone, 

  FaComments,

  FaCheckCircle,  FaMapMarkerAlt, export default function ContactPage() {

  FaArrowRight,

  FaArrowLeft  FaLinkedin,   const formRef = useRef<HTMLFormElement>(null);

} from 'react-icons/fa';

import emailjs from '@emailjs/browser';  FaGithub,   const [formData, setFormData] = useState({



export default function ContactPage() {  FaTwitter,    from_name: '',

  const formRef = useRef<HTMLFormElement>(null);

  const [currentStep, setCurrentStep] = useState(1);  FaUser,    from_email: '',

  const [formData, setFormData] = useState({

    from_name: '',  FaBuilding,    phone: '',

    from_email: '',

    phone: '',  FaComments,    company: '',

    company: '',

    message: '',  FaCheckCircle,    message: '',

    service_interest: '',

  });  FaArrowRight,  });



  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});  FaArrowLeft

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');} from 'react-icons/fa';  const [isSubmitting, setIsSubmitting] = useState(false);



  const totalSteps = 3;import emailjs from '@emailjs/browser';  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    const { name, value } = e.target;

    setFormData({export default function ContactPage() {  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

      ...formData,

      [name]: value,  const formRef = useRef<HTMLFormElement>(null);    setFormData({

    });

    // Clear error when user starts typing  const [currentStep, setCurrentStep] = useState(1);      ...formData,

    if (fieldErrors[name]) {

      setFieldErrors({  const [formData, setFormData] = useState({      [e.target.name]: e.target.value,

        ...fieldErrors,

        [name]: ''    from_name: '',    });

      });

    }    from_email: '',  };

  };

    phone: '',

  const validateStep = (step: number): boolean => {

    const errors: {[key: string]: string} = {};    company: '',  const handleSubmit = async (e: React.FormEvent) => {

    

    if (step === 1) {    message: '',    e.preventDefault();

      if (!formData.from_name.trim()) {

        errors.from_name = 'Name is required';    service_interest: '',    setIsSubmitting(true);

      }

      if (!formData.from_email.trim()) {  });    

        errors.from_email = 'Email is required';

      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {    try {

        errors.from_email = 'Please enter a valid email';

      }  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});      // EmailJS configuration

    } else if (step === 3) {

      if (!formData.message.trim()) {  const [isSubmitting, setIsSubmitting] = useState(false);      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';

        errors.message = 'Message is required';

      }  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

    }

          const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;  const totalSteps = 3;

  };

      console.log('Sending email with:', { serviceId, templateId, publicKey });

  const nextStep = () => {

    if (validateStep(currentStep)) {  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

      setCurrentStep(Math.min(currentStep + 1, totalSteps));

    }    const { name, value } = e.target;      // Use sendForm instead of send for better compatibility

  };

    setFormData({      if (formRef.current) {

  const prevStep = () => {

    setCurrentStep(Math.max(currentStep - 1, 1));      ...formData,        const result = await emailjs.sendForm(

  };

      [name]: value,          serviceId,

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();    });          templateId,

    

    if (!validateStep(3)) {    // Clear error when user starts typing          formRef.current,

      return;

    }    if (fieldErrors[name]) {          publicKey

    

    setIsSubmitting(true);      setFieldErrors({        );

    

    try {        ...fieldErrors,

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';

      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';        [name]: ''        console.log('Email sent successfully:', result);

      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      });        setSubmitStatus('success');

      if (formRef.current) {

        await emailjs.sendForm(    }        setFormData({

          serviceId,

          templateId,  };          from_name: '',

          formRef.current,

          publicKey          from_email: '',

        );

  const validateStep = (step: number): boolean => {          phone: '',

        setSubmitStatus('success');

        setFormData({    const errors: {[key: string]: string} = {};          company: '',

          from_name: '',

          from_email: '',              message: '',

          phone: '',

          company: '',    if (step === 1) {        });

          message: '',

          service_interest: '',      if (!formData.from_name.trim()) {        

        });

        setCurrentStep(1);        errors.from_name = 'Name is required';        setTimeout(() => setSubmitStatus('idle'), 5000);

        

        setTimeout(() => setSubmitStatus('idle'), 5000);      }      }

      }

    } catch (error: any) {      if (!formData.from_email.trim()) {    } catch (error: any) {

      console.error('Email send failed:', error);

      setSubmitStatus('error');        errors.from_email = 'Email is required';      console.error('Email send failed:', error);

      setTimeout(() => setSubmitStatus('idle'), 5000);

    } finally {      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {      console.error('Error details:', {

      setIsSubmitting(false);

    }        errors.from_email = 'Please enter a valid email';        text: error.text,

  };

      }        status: error.status,

  const getStepIcon = (step: number) => {

    switch(step) {    } else if (step === 3) {        message: error.message

      case 1: return <FaUser />;

      case 2: return <FaBuilding />;      if (!formData.message.trim()) {      });

      case 3: return <FaComments />;

      default: return null;        errors.message = 'Message is required';      alert(`Error: ${error.text || error.message || 'Unknown error'}`);

    }

  };      }      setSubmitStatus('error');



  return (    }      setTimeout(() => setSubmitStatus('idle'), 5000);

    <div className="relative overflow-hidden bg-white dark:bg-gray-900">

      {/* Hero Section */}        } finally {

      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        <div className="absolute inset-0 overflow-hidden">    setFieldErrors(errors);      setIsSubmitting(false);

          <motion.div

            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"    return Object.keys(errors).length === 0;    }

            animate={{

              scale: [1, 1.15, 1],  };  };

              opacity: [0.2, 0.3, 0.2],

            }}

            transition={{

              duration: 8,  const nextStep = () => {  return (

              repeat: Infinity,

              ease: "easeInOut",    if (validateStep(currentStep)) {    <div className="relative overflow-hidden bg-white dark:bg-gray-900">

            }}

          />      setCurrentStep(Math.min(currentStep + 1, totalSteps));      {/* Hero Section */}

        </div>

    }      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

          <motion.h1  };        <div className="absolute inset-0 overflow-hidden">

            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"

            initial={{ opacity: 0, y: -30 }}          <motion.div

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}  const prevStep = () => {            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"

          >

            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Touch</span>    setCurrentStep(Math.max(currentStep - 1, 1));            animate={{

          </motion.h1>

            };              scale: [1, 1.15, 1],

          <motion.p

            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"              opacity: [0.2, 0.3, 0.2],

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}  const handleSubmit = async (e: React.FormEvent) => {            }}

            transition={{ duration: 0.6, delay: 0.2 }}

          >    e.preventDefault();            transition={{

            Let&apos;s discuss how we can help transform your infrastructure and accelerate your DevOps journey.

          </motion.p>                  duration: 8,

        </div>

      </section>    if (!validateStep(3)) {              repeat: Infinity,



      {/* Contact Section */}      return;              ease: "easeInOut",

      <section className="py-20 bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    }            }}

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}              />

            <motion.div

              initial={{ opacity: 0, x: -30 }}    setIsSubmitting(true);        </div>

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true, margin: "-100px" }}    

              transition={{ duration: 0.6 }}

            >    try {        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>

              <p className="text-gray-600 dark:text-gray-400 mb-8">      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';          <motion.h1

                Feel free to reach out through any of these channels. We&apos;re here to help!

              </p>      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"



              <div className="space-y-6">      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';            initial={{ opacity: 0, y: -30 }}

                <motion.div

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"            animate={{ opacity: 1, y: 0 }}

                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

                >      if (formRef.current) {            transition={{ duration: 0.6 }}

                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

                    <FaEnvelope />        await emailjs.sendForm(          >

                  </div>

                  <div>          serviceId,            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Touch</span>

                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Email</h3>

                    <a href="mailto:hello@devopsduoo.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">          templateId,          </motion.h1>

                      hello@devopsduoo.com

                    </a>          formRef.current,          

                  </div>

                </motion.div>          publicKey          <motion.p



                <motion.div        );            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

                  whileHover={{ x: 4, transition: { duration: 0.2 } }}            initial={{ opacity: 0 }}

                >

                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">        setSubmitStatus('success');            animate={{ opacity: 1 }}

                    <FaPhone />

                  </div>        setFormData({            transition={{ duration: 0.6, delay: 0.2 }}

                  <div>

                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Phone</h3>          from_name: '',          >

                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">

                      +91 (234) 567-890          from_email: '',            Let's discuss how we can help transform your infrastructure and accelerate your DevOps journey.

                    </a>

                  </div>          phone: '',          </motion.p>

                </motion.div>

          company: '',        </div>

                <motion.div

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"          message: '',      </section>

                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

                >          service_interest: '',

                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

                    <FaMapMarkerAlt />        });      {/* Contact Section */}

                  </div>

                  <div>        setCurrentStep(1);      <section className="py-20 bg-white dark:bg-gray-900">

                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Office</h3>

                    <p className="text-gray-600 dark:text-gray-400">                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                      Shivneri Plaza, Gujrat Colony<br />

                      Kothrud, Pune, Maharashtra 411038<br />        setTimeout(() => setSubmitStatus('idle'), 5000);          <div className="grid lg:grid-cols-2 gap-12">

                      India

                    </p>      }            {/* Contact Information */}

                  </div>

                </motion.div>    } catch (error: any) {            <motion.div

              </div>

      console.error('Email send failed:', error);              initial={{ opacity: 0, x: -30 }}

              <div className="mt-8">

                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow Us</h3>      setSubmitStatus('error');              whileInView={{ opacity: 1, x: 0 }}

                <div className="flex gap-4">

                  <motion.a      setTimeout(() => setSubmitStatus('idle'), 5000);              viewport={{ once: true, margin: "-100px" }}

                    href="#"

                    whileHover={{ scale: 1.1, y: -3 }}    } finally {              transition={{ duration: 0.6 }}

                    transition={{ duration: 0.2 }}

                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"      setIsSubmitting(false);            >

                  >

                    <FaLinkedin size={24} />    }              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>

                  </motion.a>

                  <motion.a  };              <p className="text-gray-600 dark:text-gray-400 mb-8">

                    href="#"

                    whileHover={{ scale: 1.1, y: -3 }}                Feel free to reach out through any of these channels. We're here to help!

                    transition={{ duration: 0.2 }}

                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"  const getStepIcon = (step: number) => {              </p>

                  >

                    <FaGithub size={24} />    switch(step) {

                  </motion.a>

                  <motion.a      case 1: return <FaUser />;              <div className="space-y-6">

                    href="#"

                    whileHover={{ scale: 1.1, y: -3 }}      case 2: return <FaBuilding />;                <motion.div

                    transition={{ duration: 0.2 }}

                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"      case 3: return <FaComments />;                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

                  >

                    <FaTwitter size={24} />      default: return null;                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

                  </motion.a>

                </div>    }                >

              </div>

            </motion.div>  };                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">



            {/* Multi-Step Contact Form */}                    <FaEnvelope />

            <motion.div

              initial={{ opacity: 0, x: 30 }}  return (                  </div>

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true, margin: "-100px" }}    <div className="relative overflow-hidden bg-white dark:bg-gray-900">                  <div>

              transition={{ duration: 0.6 }}

              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"      {/* Hero Section */}                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Email</h3>

            >

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">                    <a href="mailto:hello@devopsduoo.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">

              <p className="text-gray-600 dark:text-gray-400 mb-6">Step {currentStep} of {totalSteps}</p>

                      <div className="absolute inset-0 overflow-hidden">                      hello@devopsduoo.com

              {/* Progress Bar */}

              <div className="mb-8">          <motion.div                    </a>

                <div className="flex justify-between mb-4">

                  {[1, 2, 3].map((step) => (            className="absolute top-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"                  </div>

                    <div key={step} className="flex items-center">

                      <motion.div            animate={{                </motion.div>

                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${

                          step < currentStep              scale: [1, 1.15, 1],

                            ? 'bg-green-500 text-white'

                            : step === currentStep              opacity: [0.2, 0.3, 0.2],                <motion.div

                            ? 'bg-primary-600 text-white'

                            : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'            }}                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

                        }`}

                        animate={{ scale: step === currentStep ? 1.1 : 1 }}            transition={{                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

                      >

                        {step < currentStep ? <FaCheckCircle /> : getStepIcon(step)}              duration: 8,                >

                      </motion.div>

                      {step < totalSteps && (              repeat: Infinity,                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

                        <div className={`hidden sm:block w-16 md:w-24 h-1 mx-2 ${

                          step < currentStep ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'              ease: "easeInOut",                    <FaPhone />

                        }`} />

                      )}            }}                  </div>

                    </div>

                  ))}          />                  <div>

                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">        </div>                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Phone</h3>

                  <motion.div

                    className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">

                    initial={{ width: 0 }}

                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">                      +1 (234) 567-890

                    transition={{ duration: 0.5 }}

                  />          <motion.h1                    </a>

                </div>

              </div>            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"                  </div>



              {submitStatus === 'success' && (            initial={{ opacity: 0, y: -30 }}                </motion.div>

                <motion.div

                  initial={{ opacity: 0, y: -20 }}            animate={{ opacity: 1, y: 0 }}

                  animate={{ opacity: 1, y: 0 }}

                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400 flex items-center gap-2"            transition={{ duration: 0.6 }}                <motion.div

                >

                  <FaCheckCircle />          >                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

                  <span>Thank you! Your message has been sent successfully.</span>

                </motion.div>            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Touch</span>                  whileHover={{ x: 4, transition: { duration: 0.2 } }}

              )}

          </motion.h1>                >

              {submitStatus === 'error' && (

                <motion.div                            <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">

                  initial={{ opacity: 0, y: -20 }}

                  animate={{ opacity: 1, y: 0 }}          <motion.p                    <FaMapMarkerAlt />

                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400"

                >            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"                  </div>

                  ❌ Oops! Something went wrong. Please try again.

                </motion.div>            initial={{ opacity: 0 }}                  <div>

              )}

            animate={{ opacity: 1 }}                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Office</h3>

              <form ref={formRef} onSubmit={handleSubmit}>

                <AnimatePresence mode="wait">            transition={{ duration: 0.6, delay: 0.2 }}                    <p className="text-gray-600 dark:text-gray-400">

                  {/* Step 1: Personal Information */}

                  {currentStep === 1 && (          >                      123 DevOps Street<br />

                    <motion.div

                      key="step1"            Let's discuss how we can help transform your infrastructure and accelerate your DevOps journey.                      Tech City, TC 12345<br />

                      initial={{ opacity: 0, x: 50 }}

                      animate={{ opacity: 1, x: 0 }}          </motion.p>                      United States

                      exit={{ opacity: 0, x: -50 }}

                      transition={{ duration: 0.3 }}        </div>                    </p>

                      className="space-y-6"

                    >      </section>                  </div>

                      <div>

                        <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">                </motion.div>

                          Full Name *

                        </label>      {/* Contact Section */}              </div>

                        <input

                          type="text"      <section className="py-20 bg-white dark:bg-gray-900">

                          id="from_name"

                          name="from_name"        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">              <div className="mt-8">

                          value={formData.from_name}

                          onChange={handleChange}          <div className="grid lg:grid-cols-2 gap-12">                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow Us</h3>

                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors ${

                            fieldErrors.from_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'            {/* Contact Information */}                <div className="flex gap-4">

                          }`}

                          placeholder="John Doe"            <motion.div                  <motion.a

                        />

                        {fieldErrors.from_name && (              initial={{ opacity: 0, x: -30 }}                    href="#"

                          <p className="mt-1 text-sm text-red-500">{fieldErrors.from_name}</p>

                        )}              whileInView={{ opacity: 1, x: 0 }}                    whileHover={{ scale: 1.1, y: -3 }}

                      </div>

              viewport={{ once: true, margin: "-100px" }}                    transition={{ duration: 0.2 }}

                      <div>

                        <label htmlFor="from_email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">              transition={{ duration: 0.6 }}                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"

                          Email Address *

                        </label>            >                  >

                        <input

                          type="email"              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>                    <FaLinkedin size={24} />

                          id="from_email"

                          name="from_email"              <p className="text-gray-600 dark:text-gray-400 mb-8">                  </motion.a>

                          value={formData.from_email}

                          onChange={handleChange}                Feel free to reach out through any of these channels. We're here to help!                  <motion.a

                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors ${

                            fieldErrors.from_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'              </p>                    href="#"

                          }`}

                          placeholder="john@example.com"                    whileHover={{ scale: 1.1, y: -3 }}

                        />

                        {fieldErrors.from_email && (              <div className="space-y-6">                    transition={{ duration: 0.2 }}

                          <p className="mt-1 text-sm text-red-500">{fieldErrors.from_email}</p>

                        )}                <motion.div                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"

                      </div>

                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"                  >

                      <div>

                        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">                  whileHover={{ x: 4, transition: { duration: 0.2 } }}                    <FaGithub size={24} />

                          Phone Number

                        </label>                >                  </motion.a>

                        <input

                          type="tel"                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">                  <motion.a

                          id="phone"

                          name="phone"                    <FaEnvelope />                    href="#"

                          value={formData.phone}

                          onChange={handleChange}                  </div>                    whileHover={{ scale: 1.1, y: -3 }}

                          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

                          placeholder="+91 1234567890"                  <div>                    transition={{ duration: 0.2 }}

                        />

                      </div>                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Email</h3>                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"

                    </motion.div>

                  )}                    <a href="mailto:hello@devopsduoo.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">                  >



                  {/* Step 2: Company Details */}                      hello@devopsduoo.com                    <FaTwitter size={24} />

                  {currentStep === 2 && (

                    <motion.div                    </a>                  </motion.a>

                      key="step2"

                      initial={{ opacity: 0, x: 50 }}                  </div>                </div>

                      animate={{ opacity: 1, x: 0 }}

                      exit={{ opacity: 0, x: -50 }}                </motion.div>              </div>

                      transition={{ duration: 0.3 }}

                      className="space-y-6"            </motion.div>

                    >

                      <div>                <motion.div

                        <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

                          Company Name                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"            {/* Contact Form */}

                        </label>

                        <input                  whileHover={{ x: 4, transition: { duration: 0.2 } }}            <motion.div

                          type="text"

                          id="company"                >              initial={{ opacity: 0, x: 30 }}

                          name="company"

                          value={formData.company}                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">              whileInView={{ opacity: 1, x: 0 }}

                          onChange={handleChange}

                          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"                    <FaPhone />              viewport={{ once: true, margin: "-100px" }}

                          placeholder="Your Company"

                        />                  </div>              transition={{ duration: 0.6 }}

                      </div>

                  <div>              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"

                      <div>

                        <label htmlFor="service_interest" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Phone</h3>            >

                          Service Interest

                        </label>                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                        <select

                          id="service_interest"                      +91 (234) 567-890              

                          name="service_interest"

                          value={formData.service_interest}                    </a>              {submitStatus === 'success' && (

                          onChange={handleChange}

                          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"                  </div>                <motion.div

                        >

                          <option value="">Select a service</option>                </motion.div>                  initial={{ opacity: 0, y: -20 }}

                          <option value="cloud-infrastructure">Cloud Infrastructure</option>

                          <option value="cicd-pipeline">CI/CD Pipeline</option>                  animate={{ opacity: 1, y: 0 }}

                          <option value="container-orchestration">Container Orchestration</option>

                          <option value="monitoring">Monitoring & Logging</option>                <motion.div                  className="mb-6 p-4 bg-accent-100 dark:bg-accent-900/30 border border-accent-500 rounded-lg text-accent-700 dark:text-accent-400"

                          <option value="iac">Infrastructure as Code</option>

                          <option value="security">Security & Compliance</option>                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"                >

                          <option value="consultation">Career Consultation</option>

                          <option value="coaching">DevOps Coaching</option>                  whileHover={{ x: 4, transition: { duration: 0.2 } }}                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!

                          <option value="other">Other</option>

                        </select>                >                </motion.div>

                      </div>

                    </motion.div>                  <div className="text-primary-600 dark:text-primary-400 text-2xl mt-1">              )}

                  )}

                    <FaMapMarkerAlt />

                  {/* Step 3: Message */}

                  {currentStep === 3 && (                  </div>              {submitStatus === 'error' && (

                    <motion.div

                      key="step3"                  <div>                <motion.div

                      initial={{ opacity: 0, x: 50 }}

                      animate={{ opacity: 1, x: 0 }}                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Office</h3>                  initial={{ opacity: 0, y: -20 }}

                      exit={{ opacity: 0, x: -50 }}

                      transition={{ duration: 0.3 }}                    <p className="text-gray-600 dark:text-gray-400">                  animate={{ opacity: 1, y: 0 }}

                      className="space-y-6"

                    >                      Shivneri Plaza, Gujrat Colony<br />                  className="mb-6 p-4 bg-error-100 dark:bg-error-900/30 border border-error-500 rounded-lg text-error-700 dark:text-error-400"

                      <div>

                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">                      Kothrud, Pune, Maharashtra 411038<br />                >

                          Your Message *

                        </label>                      India                  ❌ Oops! Something went wrong. Please try again or email us directly.

                        <textarea

                          id="message"                    </p>                </motion.div>

                          name="message"

                          value={formData.message}                  </div>              )}

                          onChange={handleChange}

                          rows={8}                </motion.div>

                          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors resize-none ${

                            fieldErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'              </div>              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                          }`}

                          placeholder="Tell us about your project and how we can help..."                <div>

                        />

                        {fieldErrors.message && (              <div className="mt-8">                  <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

                          <p className="mt-1 text-sm text-red-500">{fieldErrors.message}</p>

                        )}                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Follow Us</h3>                    Full Name *

                      </div>

                <div className="flex gap-4">                  </label>

                      <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">

                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Your Information:</h4>                  <motion.a                  <input

                        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">

                          <p><span className="font-medium">Name:</span> {formData.from_name}</p>                    href="#"                    type="text"

                          <p><span className="font-medium">Email:</span> {formData.from_email}</p>

                          {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}                    whileHover={{ scale: 1.1, y: -3 }}                    id="from_name"

                          {formData.company && <p><span className="font-medium">Company:</span> {formData.company}</p>}

                          {formData.service_interest && <p><span className="font-medium">Service:</span> {formData.service_interest}</p>}                    transition={{ duration: 0.2 }}                    name="from_name"

                        </div>

                      </div>                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"                    value={formData.from_name}

                    </motion.div>

                  )}                  >                    onChange={handleChange}

                </AnimatePresence>

                    <FaLinkedin size={24} />                    required

                {/* Navigation Buttons */}

                <div className="flex justify-between mt-8">                  </motion.a>                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

                  {currentStep > 1 && (

                    <motion.button                  <motion.a                    placeholder="John Doe"

                      type="button"

                      onClick={prevStep}                    href="#"                  />

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.98 }}                    whileHover={{ scale: 1.1, y: -3 }}                </div>

                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"

                    >                    transition={{ duration: 0.2 }}

                      <FaArrowLeft />

                      Previous                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"                <div>

                    </motion.button>

                  )}                  >                  <label htmlFor="from_email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">



                  {currentStep < totalSteps ? (                    <FaGithub size={24} />                    Email Address *

                    <motion.button

                      type="button"                  </motion.a>                  </label>

                      onClick={nextStep}

                      whileHover={{ scale: 1.02 }}                  <motion.a                  <input

                      whileTap={{ scale: 0.98 }}

                      className="ml-auto px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"                    href="#"                    type="email"

                    >

                      Next                    whileHover={{ scale: 1.1, y: -3 }}                    id="from_email"

                      <FaArrowRight />

                    </motion.button>                    transition={{ duration: 0.2 }}                    name="from_email"

                  ) : (

                    <motion.button                    className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"                    value={formData.from_email}

                      type="submit"

                      disabled={isSubmitting}                  >                    onChange={handleChange}

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.98 }}                    <FaTwitter size={24} />                    required

                      className="ml-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"

                    >                  </motion.a>                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

                      {isSubmitting ? 'Sending...' : (

                        <>                </div>                    placeholder="john@example.com"

                          <FaCheckCircle />

                          Send Message              </div>                  />

                        </>

                      )}            </motion.div>                </div>

                    </motion.button>

                  )}

                </div>

              </form>            {/* Multi-Step Contact Form */}                <div>

            </motion.div>

          </div>            <motion.div                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

        </div>

      </section>              initial={{ opacity: 0, x: 30 }}                    Phone Number



      {/* Map Section */}              whileInView={{ opacity: 1, x: 0 }}                  </label>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">              viewport={{ once: true, margin: "-100px" }}                  <input

          <motion.div

            initial={{ opacity: 0, y: 30 }}              transition={{ duration: 0.6 }}                    type="tel"

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-100px" }}              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"                    id="phone"

            transition={{ duration: 0.6 }}

            className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"            >                    name="phone"

          >

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Visit Our Office</h2>              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>                    value={formData.phone}

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">

              Shivneri Plaza, Gujrat Colony, Kothrud, Pune, Maharashtra 411038              <p className="text-gray-600 dark:text-gray-400 mb-6">Step {currentStep} of {totalSteps}</p>                    onChange={handleChange}

            </p>

            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">                                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"

              <iframe 

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4774465194323!2d73.80583357540657!3d18.507314369578705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb993c25c11%3A0x7d1074be1df11b76!2sShivneri%20Plaza%2C%20Gujrat%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1764008318083!5m2!1sen!2sin"               {/* Progress Bar */}                    placeholder="+1 (234) 567-890"

                width="100%" 

                height="450"               <div className="mb-8">                  />

                style={{ border: 0 }}

                allowFullScreen                 <div className="flex justify-between mb-4">                </div>

                loading="lazy" 

                referrerPolicy="no-referrer-when-downgrade"                  {[1, 2, 3].map((step) => (

                className="w-full"

              />                    <div key={step} className="flex items-center">                <div>

            </div>

          </motion.div>                      <motion.div                  <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">

        </div>

      </section>                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${                    Company Name

    </div>

  );                          step < currentStep                  </label>

}

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
