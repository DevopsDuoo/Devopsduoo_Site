'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: '15+ years in DevOps and cloud architecture',
      social: { linkedin: '#', github: '#', twitter: '#' },
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '👩‍💻',
      description: 'Expert in CI/CD and automation',
      social: { linkedin: '#', github: '#', twitter: '#' },
    },
    {
      name: 'Mike Chen',
      role: 'Lead DevOps Engineer',
      image: '👨‍🔧',
      description: 'Kubernetes and container specialist',
      social: { linkedin: '#', github: '#', twitter: '#' },
    },
    {
      name: 'Emily Davis',
      role: 'Cloud Architect',
      image: '👩‍🚀',
      description: 'Multi-cloud infrastructure expert',
      social: { linkedin: '#', github: '#', twitter: '#' },
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge DevOps practices and tools.',
      emoji: '🚀',
    },
    {
      title: 'Reliability',
      description: 'We build robust systems that you can depend on 24/7.',
      emoji: '🛡️',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with your team to achieve shared goals.',
      emoji: '🤝',
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake.',
      emoji: '⭐',
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-gray-50 to-accent-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
            animate={{
              scale: [1, 1.1, 1],
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">The DevOps Duoo</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are a team of passionate DevOps engineers dedicated to transforming how businesses build, deploy, and manage their applications.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Founded in 2018, The DevOps Duoo started with a simple mission: to help businesses embrace the DevOps culture and accelerate their digital transformation journey.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                What began as a two-person operation has grown into a thriving team of experts, serving clients across various industries—from startups to Fortune 500 companies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we're proud to be at the forefront of DevOps innovation, helping organizations achieve faster deployments, improved reliability, and greater efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-bold mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      500+
                    </motion.div>
                    <div className="text-white/90">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-bold mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      150+
                    </motion.div>
                    <div className="text-white/90">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-bold mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      6
                    </motion.div>
                    <div className="text-white/90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-bold mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      24/7
                    </motion.div>
                    <div className="text-white/90">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
              >
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.emoji}
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The experts behind your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300 text-center"
              >
                <motion.div
                  className="text-8xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.image}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
