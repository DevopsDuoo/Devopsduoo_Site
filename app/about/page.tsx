'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaAws,
  FaDocker,
  FaJenkins,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible,
  SiPrometheus
} from 'react-icons/si';

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [pipelineStarted, setPipelineStarted] = useState(false);

  const teamMembers = [
    {
      name: 'The Architect',
      role: 'Founder & Chief Strategist',
      experience: '5+ Years',
      image: '/team/member1.jpg',
      bio: 'A visionary technologist who prefers to let the infrastructure speak. Specializes in cloud architecture and distributed systems at scale.',
      skills: [
        { name: 'AWS', level: 95, icon: FaAws },
        { name: 'Kubernetes', level: 90, icon: SiKubernetes },
        { name: 'Terraform', level: 88, icon: SiTerraform },
        { name: 'Docker', level: 92, icon: FaDocker },
      ],
      certifications: [
        'Multiple Cloud Architecture Certifications',
        'Kubernetes Administrator (CKA)',
        'Infrastructure as Code Specialist',
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      }
    },
    {
      name: 'The Engineer',
      role: 'Co-Founder & Automation Expert',
      experience: '5+ Years',
      image: '/team/member2.jpg',
      bio: 'The silent force behind seamless deployments. Believes in automation-first philosophy and building systems that run themselves.',
      skills: [
        { name: 'Jenkins', level: 93, icon: FaJenkins },
        { name: 'Ansible', level: 90, icon: SiAnsible },
        { name: 'Prometheus', level: 87, icon: SiPrometheus },
        { name: 'Docker', level: 91, icon: FaDocker },
      ],
      certifications: [
        'CI/CD Pipeline Specialist',
        'Advanced Monitoring & Observability',
        'DevOps Engineering Professional',
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      }
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge DevOps technologies',
      examples: ['Latest CI/CD tools', 'Cloud-native solutions', 'Automation-first approach']
    },
    {
      title: 'Excellence',
      description: 'Delivering high-quality solutions that exceed expectations',
      examples: ['Best practices', '99.9% uptime', 'Performance optimization']
    },
    {
      title: 'Collaboration',
      description: 'Working closely with teams to achieve common goals',
      examples: ['Agile methodology', 'Clear communication', 'Continuous feedback']
    },
    {
      title: 'Reliability',
      description: 'Building robust systems you can depend on',
      examples: ['24/7 monitoring', 'Disaster recovery', 'Security first']
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">DevOps Duoo</span>
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering organizations with expert DevOps solutions, consultation, and coaching to accelerate their digital transformation journey.
          </motion.p>
        </div>
      </section>

      {/* Story Section with Stats */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-base sm:text-lg">
                  Founded by two passionate DevOps professionals with over 5 years of experience each, 
                  DevOps Duoo emerged from a vision to revolutionize how businesses approach infrastructure 
                  and automation—without the spotlight, just pure technical excellence.
                </p>
                <p className="text-base sm:text-lg">
                  Our founders believe in letting their work define them. Anonymous by choice, legendary by results. 
                  They combine deep technical mastery with battle-tested experience to build systems that don&apos;t just work—they thrive.
                </p>
                <p className="text-base sm:text-lg">
                  The mission: Create invisible infrastructure that powers visible success. Bridge gaps, 
                  automate complexity, and deliver excellence—all while staying behind the scenes where the real magic happens.
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { icon: FaRocket, number: '10+', label: 'Years Combined Experience' },
                { icon: FaUsers, number: '50+', label: 'Projects Delivered' },
                { icon: FaChartLine, number: '99.9%', label: 'Client Satisfaction' },
                { icon: FaShieldAlt, number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-primary-200 dark:border-gray-600 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className="text-3xl sm:text-4xl text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              The Founding Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Two visionaries who believe code speaks louder than names
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold border-2 border-white/30">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base font-medium">
                          {member.role}
                        </p>
                        <p className="text-white/80 text-xs sm:text-sm">
                          {member.experience} Experience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                      {member.bio}
                    </p>

                    {/* Skills Preview - Top 3 */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <span>Top Skills</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">({member.skills.length} total)</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 4).map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                          >
                            <skill.icon className="text-primary-600 dark:text-primary-400" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications Count */}
                    <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Certifications
                        </span>
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {member.certifications.length}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                      className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selectedMember === index ? 'Hide Details' : 'View Full Profile'}
                    </motion.button>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mt-4">
                      <motion.a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLinkedin size={20} />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaTwitter size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Modal */}
                <AnimatePresence>
                  {selectedMember === index && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedMember(null)}
                    >
                      <motion.div
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-accent-600 p-6 z-10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                <p className="text-white/90">{member.role}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => setSelectedMember(null)}
                              className="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                            >
                              ✕
                            </button>
                          </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8">
                          {/* All Skills */}
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                              Technical Skills
                            </h4>
                            <div className="space-y-4">
                              {member.skills.map((skill, skillIndex) => (
                                <div key={skillIndex}>
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <skill.icon className="text-primary-600 dark:text-primary-400 text-xl" />
                                      <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{skill.level}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <motion.div
                                      className="bg-gradient-to-r from-primary-600 to-accent-600 h-2.5 rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Certifications */}
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                              Certifications & Credentials
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {member.certifications.map((cert, certIndex) => (
                                <motion.div
                                  key={certIndex}
                                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: certIndex * 0.1 }}
                                >
                                  <span className="text-primary-600 dark:text-primary-400 mt-0.5 text-lg">✓</span>
                                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{cert}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section - Pipeline Animation */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
              The principles that drive our success
            </p>
            
            {/* Pipeline Start Button */}
            {!pipelineStarted && (
              <motion.button
                onClick={() => setPipelineStarted(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>▶</span> Start Pipeline
              </motion.button>
            )}
            
            {pipelineStarted && (
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-700 dark:text-green-300 font-semibold rounded-lg border border-green-500/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="animate-pulse">●</span> Pipeline Running
              </motion.div>
            )}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Pipeline connector lines */}
            {pipelineStarted && (
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

            {values.map((value, index) => {
              const shouldShow = pipelineStarted && index === 0 ? true : 
                                pipelineStarted && index <= values.findIndex((_, i) => i < index) + 1;
              
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={pipelineStarted ? { 
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
                  {/* Pipeline stage indicator - Static position */}
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-base font-bold shadow-lg border-2 border-white dark:border-gray-900 z-30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={pipelineStarted ? {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.4 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }
                    } : { scale: 0, rotate: -180 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  <div className="relative z-10 mt-4">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {value.description}
                    </p>
                    
                    <div className="pt-3 border-t border-gray-300 dark:border-gray-600 space-y-2">
                      {value.examples.map((example, exIndex) => (
                        <div
                          key={exIndex}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                          <span className="text-xs sm:text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Improved */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <FaRocket className="text-3xl text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Let's Build Something Extraordinary
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Partner with the team that keeps identities mysterious but results legendary. 
              Ready to experience DevOps excellence?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all text-base sm:text-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <FaRocket />
                </motion.button>
              </Link>
              
              <Link href="/services">
                <motion.button
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-semibold rounded-full hover:bg-white/20 transition-all text-base sm:text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Services
                </motion.button>
              </Link>
            </div>

            <motion.p
              className="text-sm text-white/70 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              💬 Free 30-minute consultation • No strings attached
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
