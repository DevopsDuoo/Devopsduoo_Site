'use client';'use client';



import { motion, AnimatePresence } from 'framer-motion';import { motion } from 'framer-motion';

import { useState } from 'react';import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

import { 

  FaLinkedin, export default function AboutPage() {

  FaGithub,   const teamMembers = [

  FaTwitter,     {

  FaAws,       name: 'John Smith',

  FaDocker,      role: 'CEO & Founder',

  FaCertificate,      image: '👨‍💼',

  FaChevronDown,      description: '15+ years in DevOps and cloud architecture',

  FaStar,      social: { linkedin: '#', github: '#', twitter: '#' },

  FaCode,    },

  FaServer,    {

  FaCloud      name: 'Sarah Johnson',

} from 'react-icons/fa';      role: 'CTO',

import {       image: '👩‍💻',

  SiKubernetes,       description: 'Expert in CI/CD and automation',

  SiTerraform,       social: { linkedin: '#', github: '#', twitter: '#' },

  SiAnsible,    },

  SiJenkins,    {

  SiPrometheus,      name: 'Mike Chen',

  SiAzuredevops      role: 'Lead DevOps Engineer',

} from 'react-icons/si';      image: '👨‍🔧',

      description: 'Kubernetes and container specialist',

export default function AboutPage() {      social: { linkedin: '#', github: '#', twitter: '#' },

  const [flippedCard, setFlippedCard] = useState<number | null>(null);    },

  const [expandedValue, setExpandedValue] = useState<number | null>(null);    {

      name: 'Emily Davis',

  const teamMembers = [      role: 'Cloud Architect',

    {      image: '👩‍🚀',

      name: 'Chandrashekhar Patil',      description: 'Multi-cloud infrastructure expert',

      role: 'Founder & DevOps Architect',      social: { linkedin: '#', github: '#', twitter: '#' },

      image: '👨‍💼',    },

      shortDesc: '5+ years in DevOps engineering and cloud architecture',  ];

      fullBio: 'Certified DevOps professional with extensive experience in designing and implementing scalable cloud infrastructure. Passionate about automation, continuous delivery, and helping teams achieve operational excellence.',

      expertise: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker', 'Monitoring'],  const values = [

      certifications: [    {

        'AWS Certified DevOps Engineer',      title: 'Innovation',

        'Certified Kubernetes Administrator (CKA)',      description: 'We stay ahead of the curve with cutting-edge DevOps practices and tools.',

        'HashiCorp Terraform Associate',      emoji: '🚀',

        'Azure DevOps Engineer Expert'    },

      ],    {

      skills: [      title: 'Reliability',

        { name: 'Cloud Architecture', level: 95 },      description: 'We build robust systems that you can depend on 24/7.',

        { name: 'Container Orchestration', level: 90 },      emoji: '🛡️',

        { name: 'Infrastructure as Code', level: 92 },    },

        { name: 'CI/CD Pipelines', level: 88 }    {

      ],      title: 'Collaboration',

      social: {       description: 'We work closely with your team to achieve shared goals.',

        linkedin: 'https://www.linkedin.com/in/chandrashekhar-patil',       emoji: '🤝',

        github: 'https://github.com/chandrashekhar-patil',     },

        twitter: '#'     {

      },      title: 'Excellence',

    },      description: 'We strive for perfection in every project we undertake.',

    {      emoji: '⭐',

      name: 'Hrushikesh Potbhare',    },

      role: 'Co-Founder & DevOps Engineer',  ];

      image: '👨‍💻',

      shortDesc: '5+ years specializing in DevOps automation and infrastructure',  return (

      fullBio: 'Certified DevOps engineer with deep expertise in automation, configuration management, and building robust CI/CD pipelines. Committed to streamlining development workflows and enabling rapid, reliable software delivery.',    <div className="relative overflow-hidden bg-white dark:bg-gray-900">

      expertise: ['Jenkins', 'Ansible', 'Prometheus', 'Docker', 'Azure DevOps', 'GitOps'],      {/* Hero Section */}

      certifications: [      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        'Azure DevOps Engineer Expert',        <div className="absolute inset-0 overflow-hidden">

        'Certified Kubernetes Administrator (CKA)',          <motion.div

        'Jenkins Certified Engineer',            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"

        'Ansible Automation Specialist'            animate={{

      ],              scale: [1, 1.1, 1],

      skills: [              opacity: [0.2, 0.3, 0.2],

        { name: 'DevOps Automation', level: 93 },            }}

        { name: 'Configuration Management', level: 90 },            transition={{

        { name: 'Monitoring & Observability', level: 87 },              duration: 8,

        { name: 'Container Technologies', level: 89 }              repeat: Infinity,

      ],              ease: "easeInOut",

      social: {             }}

        linkedin: 'https://www.linkedin.com/in/hrushikesh-potbhare',           />

        github: 'https://github.com/hrushikesh-potbhare',         </div>

        twitter: '#' 

      },        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

    },          <motion.h1

  ];            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"

            initial={{ opacity: 0, y: -30 }}

  const values = [            animate={{ opacity: 1, y: 0 }}

    {            transition={{ duration: 0.6 }}

      title: 'Innovation',          >

      description: 'We stay ahead of the curve with cutting-edge DevOps practices and tools.',            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">The DevOps Duoo</span>

      emoji: '🚀',          </motion.h1>

      details: 'Constantly exploring and adopting the latest technologies to give our clients a competitive edge. From serverless architectures to GitOps workflows, we implement cutting-edge solutions.',          

      examples: ['Cloud-native architectures', 'GitOps workflows', 'AI-powered automation', 'Microservices patterns']          <motion.p

    },            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"

    {            initial={{ opacity: 0 }}

      title: 'Reliability',            animate={{ opacity: 1 }}

      description: 'We build robust systems that you can depend on 24/7.',            transition={{ duration: 0.6, delay: 0.2 }}

      emoji: '🛡️',          >

      details: 'Our infrastructure designs prioritize high availability, disaster recovery, and fault tolerance. We implement best practices that ensure your systems stay up when it matters most.',            We are a team of passionate DevOps engineers dedicated to transforming how businesses build, deploy, and manage their applications.

      examples: ['99.9% uptime SLAs', 'Automated failover', 'Multi-region deployments', 'Comprehensive monitoring']          </motion.p>

    },        </div>

    {      </section>

      title: 'Collaboration',

      description: 'We work closely with your team to achieve shared goals.',      {/* Our Story Section */}

      emoji: '🤝',      <section className="py-20 bg-gray-50 dark:bg-gray-800">

      details: 'DevOps is about culture as much as tools. We partner with your teams, provide knowledge transfer, and ensure everyone is empowered to maintain and improve systems.',        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      examples: ['Agile methodologies', 'Knowledge sharing', 'Pair programming', 'Documentation culture']          <div className="grid md:grid-cols-2 gap-12 items-center">

    },            <motion.div

    {              initial={{ opacity: 0, x: -30 }}

      title: 'Excellence',              whileInView={{ opacity: 1, x: 0 }}

      description: 'We strive for perfection in every project we undertake.',              viewport={{ once: true, margin: "-100px" }}

      emoji: '⭐',              transition={{ duration: 0.6 }}

      details: 'Quality is non-negotiable. From code reviews to infrastructure audits, we maintain the highest standards and deliver solutions that exceed expectations.',            >

      examples: ['Code quality gates', 'Security scanning', 'Performance optimization', 'Best practice adherence']              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>

    },              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">

  ];                Founded in 2018, The DevOps Duoo started with a simple mission: to help businesses embrace the DevOps culture and accelerate their digital transformation journey.

              </p>

  const getTechIcon = (tech: string) => {              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">

    const icons: {[key: string]: any} = {                What began as a two-person operation has grown into a thriving team of experts, serving clients across various industries—from startups to Fortune 500 companies.

      'AWS': FaAws,              </p>

      'Kubernetes': SiKubernetes,              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">

      'Terraform': SiTerraform,                Today, we're proud to be at the forefront of DevOps innovation, helping organizations achieve faster deployments, improved reliability, and greater efficiency.

      'Docker': FaDocker,              </p>

      'Jenkins': SiJenkins,            </motion.div>

      'Ansible': SiAnsible,

      'Prometheus': SiPrometheus,            <motion.div

      'Azure DevOps': SiAzuredevops,              initial={{ opacity: 0, x: 30 }}

      'CI/CD': FaCode,              whileInView={{ opacity: 1, x: 0 }}

      'Monitoring': FaServer,              viewport={{ once: true, margin: "-100px" }}

      'GitOps': FaCloud,              transition={{ duration: 0.6 }}

    };              className="relative"

    const Icon = icons[tech] || FaCode;            >

    return <Icon className="text-2xl" />;              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 shadow-2xl">

  };                <div className="grid grid-cols-2 gap-6 text-white">

                  <div className="text-center">

  return (                    <motion.div

    <div className="relative overflow-hidden bg-white dark:bg-gray-900">                      className="text-5xl font-bold mb-2"

      {/* Hero Section */}                      initial={{ opacity: 0, scale: 0.5 }}

      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">                      whileInView={{ opacity: 1, scale: 1 }}

        <div className="absolute inset-0 overflow-hidden">                      viewport={{ once: true }}

          <motion.div                      transition={{ duration: 0.4, delay: 0.1 }}

            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"                    >

            animate={{                      500+

              scale: [1, 1.1, 1],                    </motion.div>

              opacity: [0.2, 0.3, 0.2],                    <div className="text-white/90">Projects Delivered</div>

            }}                  </div>

            transition={{                  <div className="text-center">

              duration: 8,                    <motion.div

              repeat: Infinity,                      className="text-5xl font-bold mb-2"

              ease: "easeInOut",                      initial={{ opacity: 0, scale: 0.5 }}

            }}                      whileInView={{ opacity: 1, scale: 1 }}

          />                      viewport={{ once: true }}

        </div>                      transition={{ duration: 0.4, delay: 0.2 }}

                    >

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">                      150+

          <motion.h1                    </motion.div>

            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"                    <div className="text-white/90">Happy Clients</div>

            initial={{ opacity: 0, y: -30 }}                  </div>

            animate={{ opacity: 1, y: 0 }}                  <div className="text-center">

            transition={{ duration: 0.6 }}                    <motion.div

          >                      className="text-5xl font-bold mb-2"

            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">The DevOps Duoo</span>                      initial={{ opacity: 0, scale: 0.5 }}

          </motion.h1>                      whileInView={{ opacity: 1, scale: 1 }}

                                viewport={{ once: true }}

          <motion.p                      transition={{ duration: 0.4, delay: 0.3 }}

            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"                    >

            initial={{ opacity: 0 }}                      6

            animate={{ opacity: 1 }}                    </motion.div>

            transition={{ duration: 0.6, delay: 0.2 }}                    <div className="text-white/90">Years Experience</div>

          >                  </div>

            Two certified DevOps engineers with 5+ years of experience, dedicated to transforming how businesses build, deploy, and manage their applications.                  <div className="text-center">

          </motion.p>                    <motion.div

        </div>                      className="text-5xl font-bold mb-2"

      </section>                      initial={{ opacity: 0, scale: 0.5 }}

                      whileInView={{ opacity: 1, scale: 1 }}

      {/* Our Story Section */}                      viewport={{ once: true }}

      <section className="py-20 bg-gray-50 dark:bg-gray-800">                      transition={{ duration: 0.4, delay: 0.4 }}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">                    >

          <div className="grid md:grid-cols-2 gap-12 items-center">                      24/7

            <motion.div                    </motion.div>

              initial={{ opacity: 0, x: -30 }}                    <div className="text-white/90">Support</div>

              whileInView={{ opacity: 1, x: 0 }}                  </div>

              viewport={{ once: true, margin: "-100px" }}                </div>

              transition={{ duration: 0.6 }}              </div>

            >            </motion.div>

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>          </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">        </div>

                Founded by two passionate DevOps engineers, The DevOps Duoo started with a simple mission: to help businesses embrace DevOps culture and accelerate their digital transformation journey.      </section>

              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">      {/* Our Values Section */}

                With over 5 years of hands-on experience and multiple industry certifications, we bring deep technical expertise and practical knowledge to every project we undertake.      <section className="py-20 bg-white dark:bg-gray-900">

              </p>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">          <motion.div

                Today, we're proud to help organizations of all sizes achieve faster deployments, improved reliability, and greater operational efficiency through modern DevOps practices.            initial={{ opacity: 0, y: 30 }}

              </p>            whileInView={{ opacity: 1, y: 0 }}

            </motion.div>            viewport={{ once: true, margin: "-100px" }}

            transition={{ duration: 0.6 }}

            <motion.div            className="text-center mb-16"

              initial={{ opacity: 0, x: 30 }}          >

              whileInView={{ opacity: 1, x: 0 }}            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>

              viewport={{ once: true, margin: "-100px" }}            <p className="text-xl text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>

              transition={{ duration: 0.6 }}          </motion.div>

              className="relative"

            >          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 shadow-2xl">            {values.map((value, index) => (

                <div className="grid grid-cols-2 gap-6 text-white">              <motion.div

                  <div className="text-center">                key={index}

                    <motion.div                initial={{ opacity: 0, y: 30 }}

                      className="text-5xl font-bold mb-2"                whileInView={{ opacity: 1, y: 0 }}

                      initial={{ opacity: 0, scale: 0.5 }}                viewport={{ once: true }}

                      whileInView={{ opacity: 1, scale: 1 }}                transition={{ duration: 0.5, delay: index * 0.1 }}

                      viewport={{ once: true }}                whileHover={{ y: -6, transition: { duration: 0.3 } }}

                      transition={{ duration: 0.4, delay: 0.1 }}                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"

                    >              >

                      50+                <motion.div

                    </motion.div>                  className="text-6xl mb-4"

                    <div className="text-white/90">Projects Delivered</div>                  whileHover={{ scale: 1.1 }}

                  </div>                  transition={{ duration: 0.3 }}

                  <div className="text-center">                >

                    <motion.div                  {value.emoji}

                      className="text-5xl font-bold mb-2"                </motion.div>

                      initial={{ opacity: 0, scale: 0.5 }}                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>

                      whileInView={{ opacity: 1, scale: 1 }}                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>

                      viewport={{ once: true }}              </motion.div>

                      transition={{ duration: 0.4, delay: 0.2 }}            ))}

                    >          </div>

                      30+        </div>

                    </motion.div>      </section>

                    <div className="text-white/90">Happy Clients</div>

                  </div>      {/* Team Section */}

                  <div className="text-center">      <section className="py-20 bg-gray-50 dark:bg-gray-800">

                    <motion.div        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                      className="text-5xl font-bold mb-2"          <motion.div

                      initial={{ opacity: 0, scale: 0.5 }}            initial={{ opacity: 0, y: 30 }}

                      whileInView={{ opacity: 1, scale: 1 }}            whileInView={{ opacity: 1, y: 0 }}

                      viewport={{ once: true }}            viewport={{ once: true, margin: "-100px" }}

                      transition={{ duration: 0.4, delay: 0.3 }}            transition={{ duration: 0.6 }}

                    >            className="text-center mb-16"

                      5+          >

                    </motion.div>            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>

                    <div className="text-white/90">Years Experience</div>            <p className="text-xl text-gray-600 dark:text-gray-400">The experts behind your success</p>

                  </div>          </motion.div>

                  <div className="text-center">

                    <motion.div          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                      className="text-5xl font-bold mb-2"            {teamMembers.map((member, index) => (

                      initial={{ opacity: 0, scale: 0.5 }}              <motion.div

                      whileInView={{ opacity: 1, scale: 1 }}                key={index}

                      viewport={{ once: true }}                initial={{ opacity: 0, y: 30 }}

                      transition={{ duration: 0.4, delay: 0.4 }}                whileInView={{ opacity: 1, y: 0 }}

                    >                viewport={{ once: true }}

                      8+                transition={{ duration: 0.5, delay: index * 0.1 }}

                    </motion.div>                whileHover={{ y: -8, transition: { duration: 0.3 } }}

                    <div className="text-white/90">Certifications</div>                className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300 text-center"

                  </div>              >

                </div>                <motion.div

              </div>                  className="text-8xl mb-4"

            </motion.div>                  whileHover={{ scale: 1.1 }}

          </div>                  transition={{ duration: 0.3 }}

        </div>                >

      </section>                  {member.image}

                </motion.div>

      {/* Interactive Team Section */}                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>

      <section className="py-20 bg-white dark:bg-gray-900">                <p className="text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.description}</p>

          <motion.div                <div className="flex justify-center gap-4">

            initial={{ opacity: 0, y: 30 }}                  <motion.a

            whileInView={{ opacity: 1, y: 0 }}                    href={member.social.linkedin}

            viewport={{ once: true, margin: "-100px" }}                    whileHover={{ scale: 1.15 }}

            transition={{ duration: 0.6 }}                    transition={{ duration: 0.2 }}

            className="text-center mb-16"                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"

          >                  >

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">                    <FaLinkedin size={20} />

              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Founders</span>                  </motion.a>

            </h2>                  <motion.a

            <p className="text-xl text-gray-600 dark:text-gray-400">Click on cards to learn more about our expertise</p>                    href={member.social.github}

          </motion.div>                    whileHover={{ scale: 1.15 }}

                    transition={{ duration: 0.2 }}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"

            {teamMembers.map((member, index) => (                  >

              <motion.div                    <FaGithub size={20} />

                key={index}                  </motion.a>

                initial={{ opacity: 0, y: 30 }}                  <motion.a

                whileInView={{ opacity: 1, y: 0 }}                    href={member.social.twitter}

                viewport={{ once: true }}                    whileHover={{ scale: 1.15 }}

                transition={{ duration: 0.5, delay: index * 0.2 }}                    transition={{ duration: 0.2 }}

                className="relative h-[600px]"                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"

                style={{ perspective: '1000px' }}                  >

              >                    <FaTwitter size={20} />

                <motion.div                  </motion.a>

                  className="relative w-full h-full cursor-pointer"                </div>

                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}              </motion.div>

                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}            ))}

                  style={{ transformStyle: 'preserve-3d' }}          </div>

                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}        </div>

                >      </section>

                  {/* Front of Card */}    </div>

                  <div  );

                    className="absolute w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"}

                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.div
                        className="text-9xl mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.image}
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xl text-primary-600 dark:text-primary-400 mb-4 font-semibold">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {member.shortDesc}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.expertise.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                          >
                            {getTechIcon(tech)}
                            <span>{tech}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <motion.div
                          className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span>Click to see more</span>
                          <FaChevronDown />
                        </motion.div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mt-4">
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={24} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 shadow-2xl text-white overflow-y-auto"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                          <FaStar /> About {member.name.split(' ')[0]}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {member.fullBio}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                          <FaCertificate /> Certifications
                        </h4>
                        <ul className="space-y-2">
                          {member.certifications.map((cert, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-white/90"
                            >
                              <span className="text-green-400 mt-1">✓</span>
                              <span>{cert}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4">Skill Proficiency</h4>
                        {member.skills.map((skill, idx) => (
                          <div key={idx} className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className="bg-white h-full rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: flippedCard === index ? `${skill.level}%` : 0 }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <motion.div
                        className="text-center pt-4"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <p className="text-sm text-white/80">Click again to flip back</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Click any value to learn more</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className={`bg-white dark:bg-gray-900 p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    expandedValue === index 
                      ? 'border-primary-500 shadow-2xl' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-400'
                  }`}
                  onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                >
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.emoji}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{value.description}</p>

                  <AnimatePresence>
                    {expandedValue === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4"
                      >
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 italic">
                          {value.details}
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">Examples:</p>
                          {value.examples.map((example, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-primary-500">•</span>
                              <span>{example}</span>
                            </motion.div>
                          ))}
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
    </div>
  );
}
