'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCloud, 
  FaCodeBranch, 
  FaServer, 
  FaChartLine, 
  FaShieldAlt,
  FaRocket,
  FaDocker,
  FaAws,
  FaGraduationCap,
  FaUserTie,
  FaLightbulb,
  FaBriefcase,
  FaChalkboardTeacher,
  FaBook,
  FaCertificate,
  FaHandshake,
  FaClipboardCheck,
  FaUsers
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiPrometheus,
  SiJenkins,
  SiGitlab
} from 'react-icons/si';

export default function ServicesPage() {
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
      description: 'Design, implement, and manage scalable cloud solutions on AWS, Azure, and Google Cloud Platform.',
      features: [
        'Multi-cloud architecture design',
        'Cloud migration strategies',
        'Infrastructure optimization',
        'Cost management & optimization',
        'Disaster recovery planning'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCodeBranch className="text-5xl" />,
      title: 'CI/CD Pipeline',
      description: 'Build robust continuous integration and deployment pipelines for faster, reliable software delivery.',
      features: [
        'Automated build & test workflows',
        'GitOps implementation',
        'Jenkins, GitLab CI, GitHub Actions',
        'Deployment automation',
        'Pipeline security & compliance'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <SiKubernetes className="text-5xl" />,
      title: 'Container Orchestration',
      description: 'Master container management with Docker and Kubernetes for efficient application deployment.',
      features: [
        'Kubernetes cluster setup',
        'Helm charts & package management',
        'Service mesh implementation',
        'Auto-scaling & load balancing',
        'Container security best practices'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: 'Monitoring & Logging',
      description: 'Comprehensive observability solutions for system reliability and performance optimization.',
      features: [
        'Prometheus & Grafana setup',
        'ELK stack implementation',
        'Custom alerting & dashboards',
        'APM integration',
        'Log aggregation & analysis'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <SiTerraform className="text-5xl" />,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning with Terraform, Ansible, and CloudFormation.',
      features: [
        'IaC best practices',
        'Multi-cloud provisioning',
        'Configuration management',
        'State management',
        'Module development'
      ],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'Security & Compliance',
      description: 'Implement DevSecOps practices to ensure security throughout the development lifecycle.',
      features: [
        'Security scanning & auditing',
        'Compliance automation',
        'Secrets management',
        'Vulnerability assessment',
        'Zero-trust architecture'
      ],
      gradient: 'from-red-500 to-orange-500'
    },
  ];

  const consultationServices = [
    {
      icon: <FaUserTie className="text-4xl" />,
      title: 'Career Consultation',
      description: 'Get personalized guidance to accelerate your DevOps career growth.',
      details: [
        'Resume & portfolio review',
        'Interview preparation & mock interviews',
        'Career roadmap planning',
        'Salary negotiation strategies',
        'LinkedIn profile optimization',
        'Job search strategies & networking tips'
      ],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Technical Consultation',
      description: 'Expert advice on DevOps architecture, tooling, and best practices.',
      details: [
        'Architecture design reviews',
        'Tool selection & evaluation',
        'Process optimization',
        'Team structure & workflows',
        'Cost optimization strategies',
        'Migration planning & execution'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: 'Enterprise Consultation',
      description: 'Strategic DevOps transformation for organizations of all sizes.',
      details: [
        'DevOps maturity assessment',
        'Transformation roadmap',
        'Tool chain standardization',
        'Team training & upskilling',
        'Culture & process change management',
        'ROI measurement & reporting'
      ],
      color: 'from-teal-600 to-green-600'
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
            From enterprise infrastructure to career coaching, we provide comprehensive DevOps solutions tailored to your needs
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

      {/* Core DevOps Services */}
      <section id="core-services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Core DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade DevOps solutions to transform your infrastructure and accelerate delivery
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className={`inline-block p-4 bg-gradient-to-br ${service.gradient} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Services */}
      <section id="consultation" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Expert guidance for your DevOps career and organizational transformation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {consultationServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -mr-16 -mt-16`} />
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`mt-8 w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section id="coaching" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
              Structured learning paths designed to accelerate your DevOps career from beginner to expert
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
                whileHover={{ y: -10, scale: 1.02 }}
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
                    <h4 className="text-xl font-bold mb-4">What You'll Learn:</h4>
                    <ul className="space-y-3">
                      {program.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-white mr-3">▸</span>
                          <span className="text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="w-full py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
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
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
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
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
