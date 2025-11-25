'use client';'use client';'use client';



import { motion } from 'framer-motion';

import { useState } from 'react';

import { import { motion, AnimatePresence } from 'framer-motion';import { motion } from 'framer-motion';

  FaLinkedin, 

  FaGithub, import { useState } from 'react';import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

  FaTwitter,

  FaAws,import { 

  FaDocker,

  FaJenkins  FaLinkedin, export default function AboutPage() {

} from 'react-icons/fa';

import {   FaGithub,   const teamMembers = [

  SiKubernetes, 

  SiTerraform,   FaTwitter,     {

  SiAnsible,

  SiPrometheus  FaAws,       name: 'John Smith',

} from 'react-icons/si';

  FaDocker,      role: 'CEO & Founder',

export default function AboutPage() {

  const [flippedCard, setFlippedCard] = useState<number | null>(null);  FaCertificate,      image: '👨‍💼',

  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  FaChevronDown,      description: '15+ years in DevOps and cloud architecture',

  const teamMembers = [

    {  FaStar,      social: { linkedin: '#', github: '#', twitter: '#' },

      name: 'Chandrashekhar Patil',

      role: 'Founder & DevOps Architect',  FaCode,    },

      experience: '5+ Years',

      image: '/team/member1.jpg',  FaServer,    {

      bio: 'Certified DevOps expert specializing in cloud infrastructure and automation.',

      skills: [  FaCloud      name: 'Sarah Johnson',

        { name: 'AWS', level: 95, icon: FaAws },

        { name: 'Kubernetes', level: 90, icon: SiKubernetes },} from 'react-icons/fa';      role: 'CTO',

        { name: 'Terraform', level: 88, icon: SiTerraform },

        { name: 'Docker', level: 92, icon: FaDocker },import {       image: '👩‍💻',

      ],

      certifications: [  SiKubernetes,       description: 'Expert in CI/CD and automation',

        'AWS Certified Solutions Architect',

        'Kubernetes Administrator (CKA)',  SiTerraform,       social: { linkedin: '#', github: '#', twitter: '#' },

        'Terraform Associate',

      ],  SiAnsible,    },

      social: {

        linkedin: '#',  SiJenkins,    {

        github: '#',

        twitter: '#',  SiPrometheus,      name: 'Mike Chen',

      }

    },  SiAzuredevops      role: 'Lead DevOps Engineer',

    {

      name: 'Hrushikesh Potbhare',} from 'react-icons/si';      image: '👨‍🔧',

      role: 'Co-Founder & DevOps Engineer',

      experience: '5+ Years',      description: 'Kubernetes and container specialist',

      image: '/team/member2.jpg',

      bio: 'Expert in CI/CD pipelines, monitoring, and infrastructure automation.',export default function AboutPage() {      social: { linkedin: '#', github: '#', twitter: '#' },

      skills: [

        { name: 'Jenkins', level: 93, icon: FaJenkins },  const [flippedCard, setFlippedCard] = useState<number | null>(null);    },

        { name: 'Ansible', level: 90, icon: SiAnsible },

        { name: 'Prometheus', level: 87, icon: SiPrometheus },  const [expandedValue, setExpandedValue] = useState<number | null>(null);    {

        { name: 'Docker', level: 91, icon: FaDocker },

      ],      name: 'Emily Davis',

      certifications: [

        'Jenkins Certified Engineer',  const teamMembers = [      role: 'Cloud Architect',

        'Red Hat Certified Specialist',

        'AWS Certified DevOps Engineer',    {      image: '👩‍🚀',

      ],

      social: {      name: 'Chandrashekhar Patil',      description: 'Multi-cloud infrastructure expert',

        linkedin: '#',

        github: '#',      role: 'Founder & DevOps Architect',      social: { linkedin: '#', github: '#', twitter: '#' },

        twitter: '#',

      }      image: '👨‍💼',    },

    }

  ];      shortDesc: '5+ years in DevOps engineering and cloud architecture',  ];



  const values = [      fullBio: 'Certified DevOps professional with extensive experience in designing and implementing scalable cloud infrastructure. Passionate about automation, continuous delivery, and helping teams achieve operational excellence.',

    {

      title: 'Innovation',      expertise: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker', 'Monitoring'],  const values = [

      description: 'Staying ahead with cutting-edge DevOps technologies',

      examples: ['Latest CI/CD tools', 'Cloud-native solutions', 'Automation-first approach']      certifications: [    {

    },

    {        'AWS Certified DevOps Engineer',      title: 'Innovation',

      title: 'Excellence',

      description: 'Delivering high-quality solutions that exceed expectations',        'Certified Kubernetes Administrator (CKA)',      description: 'We stay ahead of the curve with cutting-edge DevOps practices and tools.',

      examples: ['Best practices', '99.9% uptime', 'Performance optimization']

    },        'HashiCorp Terraform Associate',      emoji: '🚀',

    {

      title: 'Collaboration',        'Azure DevOps Engineer Expert'    },

      description: 'Working closely with teams to achieve common goals',

      examples: ['Agile methodology', 'Clear communication', 'Continuous feedback']      ],    {

    },

    {      skills: [      title: 'Reliability',

      title: 'Reliability',

      description: 'Building robust systems you can depend on',        { name: 'Cloud Architecture', level: 95 },      description: 'We build robust systems that you can depend on 24/7.',

      examples: ['24/7 monitoring', 'Disaster recovery', 'Security first']

    }        { name: 'Container Orchestration', level: 90 },      emoji: '🛡️',

  ];

        { name: 'Infrastructure as Code', level: 92 },    },

  return (

    <div className="relative overflow-hidden bg-white dark:bg-gray-900">        { name: 'CI/CD Pipelines', level: 88 }    {

      {/* Hero Section */}

      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">      ],      title: 'Collaboration',

        <div className="absolute inset-0 overflow-hidden">

          <motion.div      social: {       description: 'We work closely with your team to achieve shared goals.',

            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"

            animate={{        linkedin: 'https://www.linkedin.com/in/chandrashekhar-patil',       emoji: '🤝',

              scale: [1, 1.2, 1],

              opacity: [0.2, 0.3, 0.2],        github: 'https://github.com/chandrashekhar-patil',     },

            }}

            transition={{        twitter: '#'     {

              duration: 8,

              repeat: Infinity,      },      title: 'Excellence',

              ease: "easeInOut",

            }}    },      description: 'We strive for perfection in every project we undertake.',

          />

        </div>    {      emoji: '⭐',



        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">      name: 'Hrushikesh Potbhare',    },

          <motion.h1

            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"      role: 'Co-Founder & DevOps Engineer',  ];

            initial={{ opacity: 0, y: -30 }}

            animate={{ opacity: 1, y: 0 }}      image: '👨‍💻',

            transition={{ duration: 0.6 }}

          >      shortDesc: '5+ years specializing in DevOps automation and infrastructure',  return (

            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">DevOps Duoo</span>

          </motion.h1>      fullBio: 'Certified DevOps engineer with deep expertise in automation, configuration management, and building robust CI/CD pipelines. Committed to streamlining development workflows and enabling rapid, reliable software delivery.',    <div className="relative overflow-hidden bg-white dark:bg-gray-900">

          

          <motion.p      expertise: ['Jenkins', 'Ansible', 'Prometheus', 'Docker', 'Azure DevOps', 'GitOps'],      {/* Hero Section */}

            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"

            initial={{ opacity: 0 }}      certifications: [      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

            animate={{ opacity: 1 }}

            transition={{ duration: 0.6, delay: 0.2 }}        'Azure DevOps Engineer Expert',        <div className="absolute inset-0 overflow-hidden">

          >

            Empowering organizations with expert DevOps solutions, consultation, and coaching to accelerate their digital transformation journey.        'Certified Kubernetes Administrator (CKA)',          <motion.div

          </motion.p>

        </div>        'Jenkins Certified Engineer',            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"

      </section>

        'Ansible Automation Specialist'            animate={{

      {/* Mission Section */}

      <section className="py-20 bg-white dark:bg-gray-900">      ],              scale: [1, 1.1, 1],

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div      skills: [              opacity: [0.2, 0.3, 0.2],

            className="text-center mb-16"

            initial={{ opacity: 0, y: 30 }}        { name: 'DevOps Automation', level: 93 },            }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-100px" }}        { name: 'Configuration Management', level: 90 },            transition={{

            transition={{ duration: 0.6 }}

          >        { name: 'Monitoring & Observability', level: 87 },              duration: 8,

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">        { name: 'Container Technologies', level: 89 }              repeat: Infinity,

              We strive to bridge the gap between development and operations, enabling businesses to deliver software faster, 

              more reliably, and with greater efficiency through modern DevOps practices and continuous innovation.      ],              ease: "easeInOut",

            </p>

          </motion.div>      social: {             }}

        </div>

      </section>        linkedin: 'https://www.linkedin.com/in/hrushikesh-potbhare',           />



      {/* Team Section with Interactive Flip Cards */}        github: 'https://github.com/hrushikesh-potbhare',         </div>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        twitter: '#' 

          <motion.div

            className="text-center mb-16"      },        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}    },          <motion.h1

            viewport={{ once: true, margin: "-100px" }}

            transition={{ duration: 0.6 }}  ];            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"

          >

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>            initial={{ opacity: 0, y: -30 }}

            <p className="text-xl text-gray-600 dark:text-gray-400">

              Certified DevOps experts with 5+ years of hands-on experience  const values = [            animate={{ opacity: 1, y: 0 }}

            </p>

          </motion.div>    {            transition={{ duration: 0.6 }}



          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">      title: 'Innovation',          >

            {teamMembers.map((member, index) => (

              <motion.div      description: 'We stay ahead of the curve with cutting-edge DevOps practices and tools.',            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">The DevOps Duoo</span>

                key={index}

                className="relative h-[600px] cursor-pointer"      emoji: '🚀',          </motion.h1>

                style={{ perspective: '1000px' }}

                onClick={() => setFlippedCard(flippedCard === index ? null : index)}      details: 'Constantly exploring and adopting the latest technologies to give our clients a competitive edge. From serverless architectures to GitOps workflows, we implement cutting-edge solutions.',          

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}      examples: ['Cloud-native architectures', 'GitOps workflows', 'AI-powered automation', 'Microservices patterns']          <motion.p

                viewport={{ once: true, margin: "-100px" }}

                transition={{ duration: 0.6, delay: index * 0.2 }}    },            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"

              >

                <motion.div    {            initial={{ opacity: 0 }}

                  className="relative w-full h-full"

                  style={{ transformStyle: 'preserve-3d' }}      title: 'Reliability',            animate={{ opacity: 1 }}

                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}

                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}      description: 'We build robust systems that you can depend on 24/7.',            transition={{ duration: 0.6, delay: 0.2 }}

                >

                  {/* Front of Card */}      emoji: '🛡️',          >

                  <div

                    className="absolute w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"      details: 'Our infrastructure designs prioritize high availability, disaster recovery, and fault tolerance. We implement best practices that ensure your systems stay up when it matters most.',            We are a team of passionate DevOps engineers dedicated to transforming how businesses build, deploy, and manage their applications.

                    style={{ backfaceVisibility: 'hidden' }}

                  >      examples: ['99.9% uptime SLAs', 'Automated failover', 'Multi-region deployments', 'Comprehensive monitoring']          </motion.p>

                    <div className="flex flex-col items-center h-full">

                      <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-6 flex items-center justify-center text-white text-4xl font-bold">    },        </div>

                        {member.name.split(' ').map(n => n[0]).join('')}

                      </div>    {      </section>

                      

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">      title: 'Collaboration',

                        {member.name}

                      </h3>      description: 'We work closely with your team to achieve shared goals.',      {/* Our Story Section */}

                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">

                        {member.role}      emoji: '🤝',      <section className="py-20 bg-gray-50 dark:bg-gray-800">

                      </p>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">      details: 'DevOps is about culture as much as tools. We partner with your teams, provide knowledge transfer, and ensure everyone is empowered to maintain and improve systems.',        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {member.experience} Experience

                      </p>      examples: ['Agile methodologies', 'Knowledge sharing', 'Pair programming', 'Documentation culture']          <div className="grid md:grid-cols-2 gap-12 items-center">

                      

                      <p className="text-gray-700 dark:text-gray-300 text-center mb-8">    },            <motion.div

                        {member.bio}

                      </p>    {              initial={{ opacity: 0, x: -30 }}



                      <div className="mt-auto">      title: 'Excellence',              whileInView={{ opacity: 1, x: 0 }}

                        <div className="flex gap-4 mb-6">

                          <a href={member.social.linkedin} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">      description: 'We strive for perfection in every project we undertake.',              viewport={{ once: true, margin: "-100px" }}

                            <FaLinkedin size={20} />

                          </a>      emoji: '⭐',              transition={{ duration: 0.6 }}

                          <a href={member.social.github} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">

                            <FaGithub size={20} />      details: 'Quality is non-negotiable. From code reviews to infrastructure audits, we maintain the highest standards and deliver solutions that exceed expectations.',            >

                          </a>

                          <a href={member.social.twitter} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">      examples: ['Code quality gates', 'Security scanning', 'Performance optimization', 'Best practice adherence']              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>

                            <FaTwitter size={20} />

                          </a>    },              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">

                        </div>

                          ];                Founded in 2018, The DevOps Duoo started with a simple mission: to help businesses embrace the DevOps culture and accelerate their digital transformation journey.

                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 bg-primary-50 dark:bg-primary-900/20 py-2 px-4 rounded-lg">

                          Click to see skills & certifications              </p>

                        </div>

                      </div>  const getTechIcon = (tech: string) => {              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">

                    </div>

                  </div>    const icons: {[key: string]: any} = {                What began as a two-person operation has grown into a thriving team of experts, serving clients across various industries—from startups to Fortune 500 companies.



                  {/* Back of Card */}      'AWS': FaAws,              </p>

                  <div

                    className="absolute w-full h-full bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 border-2 border-primary-500 dark:border-primary-600"      'Kubernetes': SiKubernetes,              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">

                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}

                  >      'Terraform': SiTerraform,                Today, we're proud to be at the forefront of DevOps innovation, helping organizations achieve faster deployments, improved reliability, and greater efficiency.

                    <div className="flex flex-col h-full">

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">      'Docker': FaDocker,              </p>

                        Skills & Expertise

                      </h3>      'Jenkins': SiJenkins,            </motion.div>

                      

                      <div className="space-y-4 mb-8">      'Ansible': SiAnsible,

                        {member.skills.map((skill, skillIndex) => (

                          <div key={skillIndex}>      'Prometheus': SiPrometheus,            <motion.div

                            <div className="flex items-center justify-between mb-2">

                              <div className="flex items-center gap-2">      'Azure DevOps': SiAzuredevops,              initial={{ opacity: 0, x: 30 }}

                                <skill.icon className="text-primary-600 dark:text-primary-400" />

                                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>      'CI/CD': FaCode,              whileInView={{ opacity: 1, x: 0 }}

                              </div>

                              <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>      'Monitoring': FaServer,              viewport={{ once: true, margin: "-100px" }}

                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">      'GitOps': FaCloud,              transition={{ duration: 0.6 }}

                              <motion.div

                                className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"    };              className="relative"

                                initial={{ width: 0 }}

                                animate={{ width: flippedCard === index ? `${skill.level}%` : 0 }}    const Icon = icons[tech] || FaCode;            >

                                transition={{ duration: 1, delay: skillIndex * 0.1 }}

                              />    return <Icon className="text-2xl" />;              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 shadow-2xl">

                            </div>

                          </div>  };                <div className="grid grid-cols-2 gap-6 text-white">

                        ))}

                      </div>                  <div className="text-center">



                      <div className="mt-auto">  return (                    <motion.div

                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Certifications</h4>

                        <ul className="space-y-2">    <div className="relative overflow-hidden bg-white dark:bg-gray-900">                      className="text-5xl font-bold mb-2"

                          {member.certifications.map((cert, certIndex) => (

                            <motion.li      {/* Hero Section */}                      initial={{ opacity: 0, scale: 0.5 }}

                              key={certIndex}

                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">                      whileInView={{ opacity: 1, scale: 1 }}

                              initial={{ opacity: 0, x: -20 }}

                              animate={{ opacity: flippedCard === index ? 1 : 0, x: flippedCard === index ? 0 : -20 }}        <div className="absolute inset-0 overflow-hidden">                      viewport={{ once: true }}

                              transition={{ duration: 0.4, delay: certIndex * 0.1 }}

                            >          <motion.div                      transition={{ duration: 0.4, delay: 0.1 }}

                              <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>

                              <span className="text-sm">{cert}</span>            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"                    >

                            </motion.li>

                          ))}            animate={{                      500+

                        </ul>

                                      scale: [1, 1.1, 1],                    </motion.div>

                        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 py-2 px-4 rounded-lg">

                          Click to flip back              opacity: [0.2, 0.3, 0.2],                    <div className="text-white/90">Projects Delivered</div>

                        </div>

                      </div>            }}                  </div>

                    </div>

                  </div>            transition={{                  <div className="text-center">

                </motion.div>

              </motion.div>              duration: 8,                    <motion.div

            ))}

          </div>              repeat: Infinity,                      className="text-5xl font-bold mb-2"

        </div>

      </section>              ease: "easeInOut",                      initial={{ opacity: 0, scale: 0.5 }}



      {/* Values Section */}            }}                      whileInView={{ opacity: 1, scale: 1 }}

      <section className="py-20 bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          />                      viewport={{ once: true }}

          <motion.div

            className="text-center mb-16"        </div>                      transition={{ duration: 0.4, delay: 0.2 }}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}                    >

            viewport={{ once: true, margin: "-100px" }}

            transition={{ duration: 0.6 }}        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">                      150+

          >

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>          <motion.h1                    </motion.div>

            <p className="text-xl text-gray-600 dark:text-gray-400">

              The principles that guide everything we do            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"                    <div className="text-white/90">Happy Clients</div>

            </p>

          </motion.div>            initial={{ opacity: 0, y: -30 }}                  </div>



          <div className="grid md:grid-cols-2 gap-6">            animate={{ opacity: 1, y: 0 }}                  <div className="text-center">

            {values.map((value, index) => (

              <motion.div            transition={{ duration: 0.6 }}                    <motion.div

                key={index}

                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-primary-500 dark:hover:border-primary-500 transition-colors"          >                      className="text-5xl font-bold mb-2"

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">The DevOps Duoo</span>                      initial={{ opacity: 0, scale: 0.5 }}

                viewport={{ once: true, margin: "-100px" }}

                transition={{ duration: 0.6, delay: index * 0.1 }}          </motion.h1>                      whileInView={{ opacity: 1, scale: 1 }}

                onClick={() => setExpandedValue(expandedValue === index ? null : index)}

              >                                viewport={{ once: true }}

                <div className="flex items-start justify-between mb-4">

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value.title}</h3>          <motion.p                      transition={{ duration: 0.4, delay: 0.3 }}

                  <motion.div

                    className="text-primary-600 dark:text-primary-400 text-xl"            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"                    >

                    animate={{ rotate: expandedValue === index ? 180 : 0 }}

                    transition={{ duration: 0.3 }}            initial={{ opacity: 0 }}                      6

                  >

                    ▼            animate={{ opacity: 1 }}                    </motion.div>

                  </motion.div>

                </div>            transition={{ duration: 0.6, delay: 0.2 }}                    <div className="text-white/90">Years Experience</div>

                

                <p className="text-gray-600 dark:text-gray-400 mb-4">{value.description}</p>          >                  </div>

                

                <motion.div            Two certified DevOps engineers with 5+ years of experience, dedicated to transforming how businesses build, deploy, and manage their applications.                  <div className="text-center">

                  initial={false}

                  animate={{           </motion.p>                    <motion.div

                    height: expandedValue === index ? 'auto' : 0,

                    opacity: expandedValue === index ? 1 : 0        </div>                      className="text-5xl font-bold mb-2"

                  }}

                  transition={{ duration: 0.3 }}      </section>                      initial={{ opacity: 0, scale: 0.5 }}

                  className="overflow-hidden"

                >                      whileInView={{ opacity: 1, scale: 1 }}

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">

                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Aspects:</h4>      {/* Our Story Section */}                      viewport={{ once: true }}

                    <ul className="space-y-2">

                      {value.examples.map((example, exIndex) => (      <section className="py-20 bg-gray-50 dark:bg-gray-800">                      transition={{ duration: 0.4, delay: 0.4 }}

                        <li key={exIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">

                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">                    >

                          <span className="text-sm">{example}</span>

                        </li>          <div className="grid md:grid-cols-2 gap-12 items-center">                      24/7

                      ))}

                    </ul>            <motion.div                    </motion.div>

                  </div>

                </motion.div>              initial={{ opacity: 0, x: -30 }}                    <div className="text-white/90">Support</div>

              </motion.div>

            ))}              whileInView={{ opacity: 1, x: 0 }}                  </div>

          </div>

        </div>              viewport={{ once: true, margin: "-100px" }}                </div>

      </section>

              transition={{ duration: 0.6 }}              </div>

      {/* CTA Section */}

      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">            >            </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.h2              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>          </div>

            className="text-4xl font-bold text-white mb-6"

            initial={{ opacity: 0, y: 30 }}              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">        </div>

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-100px" }}                Founded by two passionate DevOps engineers, The DevOps Duoo started with a simple mission: to help businesses embrace DevOps culture and accelerate their digital transformation journey.      </section>

            transition={{ duration: 0.6 }}

          >              </p>

            Ready to Transform Your Infrastructure?

          </motion.h2>              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">      {/* Our Values Section */}

          

          <motion.p                With over 5 years of hands-on experience and multiple industry certifications, we bring deep technical expertise and practical knowledge to every project we undertake.      <section className="py-20 bg-white dark:bg-gray-900">

            className="text-xl text-white/90 mb-8"

            initial={{ opacity: 0 }}              </p>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            whileInView={{ opacity: 1 }}

            viewport={{ once: true, margin: "-100px" }}              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">          <motion.div

            transition={{ duration: 0.6, delay: 0.2 }}

          >                Today, we're proud to help organizations of all sizes achieve faster deployments, improved reliability, and greater operational efficiency through modern DevOps practices.            initial={{ opacity: 0, y: 30 }}

            Let's discuss how we can help accelerate your DevOps journey

          </motion.p>              </p>            whileInView={{ opacity: 1, y: 0 }}

          

          <motion.a            </motion.div>            viewport={{ once: true, margin: "-100px" }}

            href="/contact"

            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"            transition={{ duration: 0.6 }}

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            <motion.div            className="text-center mb-16"

            viewport={{ once: true, margin: "-100px" }}

            transition={{ duration: 0.6, delay: 0.4 }}              initial={{ opacity: 0, x: 30 }}          >

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: 0.95 }}              whileInView={{ opacity: 1, x: 0 }}            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>

          >

            Get In Touch              viewport={{ once: true, margin: "-100px" }}            <p className="text-xl text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>

          </motion.a>

        </div>              transition={{ duration: 0.6 }}          </motion.div>

      </section>

    </div>              className="relative"

  );

}            >          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


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
