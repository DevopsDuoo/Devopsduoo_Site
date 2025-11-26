'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  FaCloud, 
  FaCodeBranch, 
  FaServer, 
  FaChartLine, 
  FaShieldAlt,
  FaRocket,
  FaGraduationCap,
  FaUserTie,
  FaLightbulb,
  FaBriefcase,
  FaChalkboardTeacher,
  FaBook,
  FaCertificate,
  FaHandshake,
  FaClipboardCheck,
  FaUsers,
  FaCheck,
  FaChevronDown,
  FaChevronRight,
  FaPlay,
  FaCode,
  FaCheckCircle,
  FaCog,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiPrometheus,
} from 'react-icons/si';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [pipelineStage, setPipelineStage] = useState<number>(0);
  const [consultationStep, setConsultationStep] = useState<number>(0);
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [revealedItems, setRevealedItems] = useState<{[key: number]: number}>({});
  const [servicesPipelineStarted, setServicesPipelineStarted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const coreServices = [
    {
      icon: <FaCloud className="text-5xl" />,
      title: 'Cloud Infrastructure',
      shortDesc: 'Design, implement, and manage scalable cloud solutions.',
      description: 'Comprehensive cloud infrastructure solutions on AWS, Azure, and Google Cloud Platform with focus on scalability, security, and cost optimization.',
      features: [
        'Multi-cloud architecture design',
        'Cloud migration strategies',
        'Infrastructure optimization',
        'Cost management & optimization',
        'Disaster recovery planning'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      details: 'We help organizations leverage cloud technologies to build resilient, scalable infrastructure that grows with your business needs.'
    },
    {
      icon: <FaCodeBranch className="text-5xl" />,
      title: 'CI/CD Pipeline',
      shortDesc: 'Build robust continuous integration and deployment pipelines.',
      description: 'Automated build, test, and deployment workflows for faster, more reliable software delivery across your entire development lifecycle.',
      features: [
        'Automated build & test workflows',
        'GitOps implementation',
        'Jenkins, GitLab CI, GitHub Actions',
        'Deployment automation',
        'Pipeline security & compliance'
      ],
      gradient: 'from-purple-500 to-pink-500',
      details: 'Accelerate your release cycles with intelligent automation that reduces errors and increases development velocity.'
    },
    {
      icon: <SiKubernetes className="text-5xl" />,
      title: 'Container Orchestration',
      shortDesc: 'Master container management with Docker and Kubernetes.',
      description: 'Expert container orchestration solutions for efficient application deployment, scaling, and management in production environments.',
      features: [
        'Kubernetes cluster setup',
        'Helm charts & package management',
        'Service mesh implementation',
        'Auto-scaling & load balancing',
        'Container security best practices'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      details: 'Deploy and manage containerized applications at scale with enterprise-grade Kubernetes solutions.'
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: 'Monitoring & Logging',
      shortDesc: 'Comprehensive observability solutions for system reliability.',
      description: 'End-to-end monitoring, logging, and alerting solutions to ensure optimal performance and rapid incident response.',
      features: [
        'Prometheus & Grafana setup',
        'ELK stack implementation',
        'Custom alerting & dashboards',
        'APM integration',
        'Log aggregation & analysis'
      ],
      gradient: 'from-green-500 to-teal-500',
      details: 'Gain complete visibility into your systems with real-time monitoring and intelligent alerting.'
    },
    {
      icon: <SiTerraform className="text-5xl" />,
      title: 'Infrastructure as Code',
      shortDesc: 'Automate infrastructure provisioning with IaC tools.',
      description: 'Version-controlled infrastructure automation using Terraform, Ansible, and CloudFormation for consistent, repeatable deployments.',
      features: [
        'IaC best practices',
        'Multi-cloud provisioning',
        'Configuration management',
        'State management',
        'Module development'
      ],
      gradient: 'from-violet-500 to-purple-500',
      details: 'Transform infrastructure management with code-based automation that ensures consistency and reduces manual errors.'
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'Security & Compliance',
      shortDesc: 'Implement DevSecOps practices for secure development.',
      description: 'Integrated security practices throughout the development lifecycle with automated scanning, compliance checks, and vulnerability management.',
      features: [
        'Security scanning & auditing',
        'Compliance automation',
        'Secrets management',
        'Vulnerability assessment',
        'Zero-trust architecture'
      ],
      gradient: 'from-red-500 to-orange-500',
      details: 'Build security into every stage of your DevOps pipeline with automated testing and continuous compliance monitoring.'
    },
  ];

  // Pipeline stages for animation
  const pipelineStages = [
    { name: 'Code', icon: <FaCode />, color: 'blue', description: 'Developers push code to repository' },
    { name: 'Build', icon: <FaCog />, color: 'purple', description: 'Code is compiled and built' },
    { name: 'Test', icon: <FaCheckCircle />, color: 'green', description: 'Automated tests run' },
    { name: 'Deploy', icon: <FaRocket />, color: 'orange', description: 'Application deployed to production' },
    { name: 'Monitor', icon: <FaChartLine />, color: 'teal', description: 'System performance tracked' },
  ];

  const consultationSteps = [
    {
      icon: <FaUserTie className="text-4xl" />,
      title: 'Initial Consultation',
      description: 'Free 30-minute discovery call to understand your needs',
      details: ['Discuss your goals', 'Assess current situation', 'Identify challenges', 'Define success metrics'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Strategy Planning',
      description: 'Develop a customized roadmap for your success',
      details: ['Create action plan', 'Set milestones', 'Resource planning', 'Timeline definition'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Implementation Support',
      description: 'Hands-on guidance throughout execution',
      details: ['Regular check-ins', 'Progress tracking', 'Problem solving', 'Course corrections'],
      color: 'from-teal-600 to-green-600'
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Success & Growth',
      description: 'Achieve your goals and plan for continued growth',
      details: ['Measure results', 'Celebrate wins', 'Future planning', 'Ongoing support'],
      color: 'from-orange-600 to-red-600'
    },
  ];

  const coachingPrograms = [
    {
      icon: <FaGraduationCap className="text-5xl" />,
      title: 'DevOps Fundamentals',
      level: 'Beginner',
      duration: '8 weeks',
      description: 'Start your DevOps journey with a solid foundation in core concepts and tools.',
      curriculum: [
        'Linux fundamentals & shell scripting',
        'Version control with Git & GitHub',
        'Docker containerization basics',
        'CI/CD pipeline introduction',
        'Cloud basics (AWS/Azure/GCP)',
        'Monitoring & logging essentials'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <FaChalkboardTeacher className="text-5xl" />,
      title: 'Advanced DevOps Engineering',
      level: 'Intermediate',
      duration: '12 weeks',
      description: 'Deep dive into advanced DevOps practices, automation, and cloud-native technologies.',
      curriculum: [
        'Kubernetes deep dive & CKA prep',
        'Advanced CI/CD patterns',
        'Infrastructure as Code (Terraform)',
        'Configuration management (Ansible)',
        'Observability & SRE practices',
        'Security & compliance (DevSecOps)'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    {
      icon: <FaCertificate className="text-5xl" />,
      title: 'Certification Bootcamp',
      level: 'All Levels',
      duration: '6-10 weeks',
      description: 'Intensive preparation for industry-recognized DevOps certifications.',
      curriculum: [
        'AWS Certified DevOps Engineer',
        'Certified Kubernetes Administrator (CKA)',
        'HashiCorp Terraform Certification',
        'Azure DevOps Engineer Expert',
        'Google Cloud Professional DevOps',
        'Mock exams & hands-on labs'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      icon: <FaBriefcase className="text-5xl" />,
      title: 'Career Accelerator Program',
      level: 'All Levels',
      duration: '16 weeks',
      description: 'Comprehensive program combining technical skills with career development for job-ready professionals.',
      curriculum: [
        'End-to-end DevOps project implementation',
        'Real-world case studies',
        'Portfolio & GitHub profile building',
        'Interview preparation & mock interviews',
        'Soft skills & communication',
        'Job placement assistance'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
  ];

  const coachingFeatures = [
    {
      icon: <FaBook className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'Hands-On Learning',
      description: 'Real-world projects and labs for practical experience'
    },
    {
      icon: <FaUsers className="text-3xl text-purple-600 dark:text-purple-400" />,
      title: 'Small Batch Sizes',
      description: 'Limited students per batch for personalized attention'
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-green-600 dark:text-green-400" />,
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with 10+ years experience'
    },
    {
      icon: <FaCertificate className="text-3xl text-orange-600 dark:text-orange-400" />,
      title: 'Certification Support',
      description: 'Guidance and resources for professional certifications'
    },
    {
      icon: <FaHandshake className="text-3xl text-teal-600 dark:text-teal-400" />,
      title: 'Lifetime Support',
      description: 'Continued mentorship even after course completion'
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-pink-600 dark:text-pink-400" />,
      title: 'Job Assistance',
      description: 'Resume building, interview prep, and placement support'
    },
  ];

  const handlePipelineClick = () => {
    if (pipelineStage < pipelineStages.length - 1) {
      setPipelineStage(pipelineStage + 1);
    } else {
      setPipelineStage(0);
    }
  };

  const revealNextItem = (programIndex: number) => {
    const currentRevealed = revealedItems[programIndex] || 0;
    if (currentRevealed < coachingPrograms[programIndex].curriculum.length) {
      setRevealedItems({
        ...revealedItems,
        [programIndex]: currentRevealed + 1
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-accent-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Background Elements */}
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
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              Our Services
            </span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              DevOps Journey
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interactive solutions tailored to your needs - Click to explore!
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#core-services">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </Link>
            <Link href="#coaching">
              <motion.button
                className="px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-primary-600 dark:border-primary-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Coaching Programs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Interactive Core Services */}
      <section id="core-services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onViewportEnter={() => setServicesPipelineStarted(true)}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Core DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              Enterprise-grade DevOps solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Pipeline connector lines */}
            {servicesPipelineStarted && (
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 pointer-events-none">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            )}
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={servicesPipelineStarted ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.4,
                    type: "spring",
                    stiffness: 100
                  }
                } : { opacity: 0, scale: 0.8, y: 20 }}
              >
                {/* Pipeline stage indicator */}
                {servicesPipelineStarted && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-base font-bold shadow-lg border-2 border-white dark:border-gray-800 z-30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.4 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {index + 1}
                  </motion.div>
                )}

                <motion.div
                  className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                    expandedService === index ? 'ring-4 ring-primary-500' : ''
                  }`}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-block p-4 bg-gradient-to-br ${service.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-2xl text-gray-400" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.shortDesc}
                  </p>

                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                          <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                            {service.details}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start text-gray-700 dark:text-gray-300"
                              >
                                <FaCheck className="text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CI/CD Pipeline Visualization */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Pipeline</span> in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Click the button to watch how our CI/CD pipeline flows
            </p>
            <motion.button
              onClick={handlePipelineClick}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay className="inline mr-2" />
              {pipelineStage === 0 ? 'Start Pipeline' : 'Next Stage'}
            </motion.button>
          </motion.div>

          {/* Pipeline Stages */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {pipelineStages.map((stage, index) => (
                <div key={index} className="flex-1 w-full md:w-auto relative">
                  <motion.div
                    className={`relative p-6 rounded-xl text-center transition-all duration-500 ${
                      index <= pipelineStage
                        ? 'bg-gradient-to-br from-primary-500 to-accent-600 text-white shadow-2xl scale-105'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    }`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: index <= pipelineStage ? 1.05 : 1,
                      opacity: 1
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {index <= pipelineStage && (
                      <motion.div
                        className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        <FaCheckCircle className="text-white text-xl" />
                      </motion.div>
                    )}
                    
                    <div className="text-4xl mb-3 flex justify-center">
                      {stage.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{stage.name}</h3>
                    <AnimatePresence>
                      {index <= pipelineStage && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm"
                        >
                          {stage.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Arrow between stages */}
                  {index < pipelineStages.length - 1 && (
                    <div className="hidden md:flex justify-center items-center absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: index < pipelineStage ? 1 : 0.3 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaArrowRight className={`text-2xl ${index < pipelineStage ? 'text-primary-600' : 'text-gray-400'}`} />
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {pipelineStage === pipelineStages.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-8"
              >
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  🎉 Pipeline Complete! Ready for Next Deployment
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Consultation Journey */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your Consultation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Click through each step to see how we guide you to success
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute h-full bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ width: 0 }}
                animate={{ width: `${((consultationStep + 1) / consultationSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {consultationSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setConsultationStep(index)}
                  className={`w-8 h-8 rounded-full ${
                    index <= consultationStep
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-600'
                  } flex items-center justify-center font-bold text-sm transition-all hover:scale-110`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Current Step Display */}
          <motion.div
            key={consultationStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`bg-gradient-to-br ${consultationSteps[consultationStep].color} rounded-2xl p-8 md:p-12 text-white shadow-2xl`}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  {consultationSteps[consultationStep].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {consultationSteps[consultationStep].title}
                  </h3>
                  <p className="text-xl mb-6 text-white/90">
                    {consultationSteps[consultationStep].description}
                  </p>
                  <ul className="space-y-3">
                    {consultationSteps[consultationStep].details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-white/90"
                      >
                        <FaCheckCircle className="mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setConsultationStep(Math.max(0, consultationStep - 1))}
                  disabled={consultationStep === 0}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setConsultationStep(Math.min(consultationSteps.length - 1, consultationStep + 1))}
                  disabled={consultationStep === consultationSteps.length - 1}
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                  {consultationStep === consultationSteps.length - 1 ? 'Start Journey' : 'Next Step'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Coaching Programs */}
      <section id="coaching" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Coaching Programs</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Click on a program to reveal curriculum items one by one
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coachingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${program.color} rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      {program.icon}
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-2">
                        {program.level}
                      </span>
                      <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {program.duration}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-white/90 mb-6 text-lg">
                    {program.description}
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">Curriculum:</h4>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {revealedItems[index] || 0} / {program.curriculum.length}
                      </span>
                    </div>
                    <ul className="space-y-3 min-h-[200px]">
                      {program.curriculum.slice(0, revealedItems[index] || 0).map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          className="flex items-start bg-white/10 p-3 rounded-lg"
                        >
                          <FaCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-white/90">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {(revealedItems[index] || 0) < program.curriculum.length && (
                      <motion.button
                        onClick={() => revealNextItem(index)}
                        className="w-full mt-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaChevronRight />
                        Reveal Next Topic
                      </motion.button>
                    )}

                    {(revealedItems[index] || 0) === program.curriculum.length && revealedItems[index] > 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 p-4 bg-green-500/20 rounded-lg text-center"
                      >
                        <FaCheckCircle className="text-3xl text-green-400 mx-auto mb-2" />
                        <p className="font-bold">All Topics Revealed!</p>
                      </motion.div>
                    )}
                  </div>

                  <motion.button
                    className="w-full py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coaching Features */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Choose Our Coaching?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coachingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your DevOps Journey?
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you need enterprise solutions, career guidance, or technical training, we're here to help you succeed
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact">
              <motion.button
                className="px-10 py-5 bg-white text-primary-600 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
