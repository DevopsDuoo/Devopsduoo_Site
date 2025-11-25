'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaAws,
  FaDocker,
  FaJenkins
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible,
  SiPrometheus
} from 'react-icons/si';

export default function AboutPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Chandrashekhar Patil',
      role: 'Founder & DevOps Architect',
      experience: '5+ Years',
      image: '/team/member1.jpg',
      bio: 'Certified DevOps expert specializing in cloud infrastructure and automation.',
      skills: [
        { name: 'AWS', level: 95, icon: FaAws },
        { name: 'Kubernetes', level: 90, icon: SiKubernetes },
        { name: 'Terraform', level: 88, icon: SiTerraform },
        { name: 'Docker', level: 92, icon: FaDocker },
      ],
      certifications: [
        'AWS Certified Solutions Architect',
        'Kubernetes Administrator (CKA)',
        'Terraform Associate',
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      }
    },
    {
      name: 'Hrushikesh Potbhare',
      role: 'Co-Founder & DevOps Engineer',
      experience: '5+ Years',
      image: '/team/member2.jpg',
      bio: 'Expert in CI/CD pipelines, monitoring, and infrastructure automation.',
      skills: [
        { name: 'Jenkins', level: 93, icon: FaJenkins },
        { name: 'Ansible', level: 90, icon: SiAnsible },
        { name: 'Prometheus', level: 87, icon: SiPrometheus },
        { name: 'Docker', level: 91, icon: FaDocker },
      ],
      certifications: [
        'Jenkins Certified Engineer',
        'Red Hat Certified Specialist',
        'AWS Certified DevOps Engineer',
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
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">DevOps Duoo</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering organizations with expert DevOps solutions, consultation, and coaching to accelerate their digital transformation journey.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              We strive to bridge the gap between development and operations, enabling businesses to deliver software faster, 
              more reliably, and with greater efficiency through modern DevOps practices and continuous innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Certified DevOps experts with 5+ years of hands-on experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative h-[600px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                >
                  <div
                    className="absolute w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-6 flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {member.experience} Experience
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
                        {member.bio}
                      </p>

                      <div className="mt-auto">
                        <div className="flex gap-4 mb-6">
                          <a href={member.social.linkedin} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <FaLinkedin size={20} />
                          </a>
                          <a href={member.social.github} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <FaGithub size={20} />
                          </a>
                          <a href={member.social.twitter} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <FaTwitter size={20} />
                          </a>
                        </div>
                        
                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 bg-primary-50 dark:bg-primary-900/20 py-2 px-4 rounded-lg">
                          Click to see skills & certifications
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 border-2 border-primary-500 dark:border-primary-600"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Skills & Expertise
                      </h3>
                      
                      <div className="space-y-4 mb-8">
                        {member.skills.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <skill.icon className="text-primary-600 dark:text-primary-400" />
                                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                              </div>
                              <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: flippedCard === index ? `${skill.level}%` : 0 }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Certifications</h4>
                        <ul className="space-y-2">
                          {member.certifications.map((cert, certIndex) => (
                            <motion.li
                              key={certIndex}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: flippedCard === index ? 1 : 0, x: flippedCard === index ? 0 : -20 }}
                              transition={{ duration: 0.4, delay: certIndex * 0.1 }}
                            >
                              <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                              <span className="text-sm">{cert}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 py-2 px-4 rounded-lg">
                          Click to flip back
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                  <motion.div
                    className="text-primary-600 dark:text-primary-400 text-xl"
                    animate={{ rotate: expandedValue === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">{value.description}</p>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedValue === index ? 'auto' : 0,
                    opacity: expandedValue === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Aspects:</h4>
                    <ul className="space-y-2">
                      {value.examples.map((example, exIndex) => (
                        <li key={exIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Infrastructure?
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s discuss how we can help accelerate your DevOps journey
          </motion.p>
          
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}
