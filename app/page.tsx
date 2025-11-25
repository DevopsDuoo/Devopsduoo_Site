'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { localBusinessSchema } from '@/lib/structured-data';
import { 
  FaRocket, 
  FaCloud, 
  FaCodeBranch, 
  FaChartLine, 
  FaServer, 
  FaShieldAlt,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJenkins,
  FaCogs,
  FaNetworkWired,
  FaGithub
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiPrometheus,
  SiGooglecloud,
  SiGrafana,
  SiElasticsearch,
  SiNewrelic,
  SiFlux,
  SiHelm,
  SiGitlab,
  SiCircleci
} from 'react-icons/si';

// Floating icon with physics
interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Home() {
  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000, inView: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!inView) return;
      
      let startTime: number | null = null;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(startValue + (end - startValue) * easeOutQuad));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, inView]);
    
    return count;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      icon: <FaCloud className="text-5xl" />,
      title: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud solutions on AWS, Azure, and GCP.',
      link: '/services#cloud',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaCodeBranch className="text-5xl" />,
      title: 'CI/CD Pipeline',
      description: 'Automate your deployment process with robust CI/CD pipelines.',
      link: '/services#cicd',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaServer className="text-5xl" />,
      title: 'Container Orchestration',
      description: 'Master Docker and Kubernetes for efficient container management.',
      link: '/services#containers',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring solutions for system reliability.',
      link: '/services#monitoring',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'Security & Compliance',
      description: 'Implement security best practices and ensure compliance.',
      link: '/services#security',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: 'DevOps Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      link: '/services#automation',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  // Physics-based floating icons
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Initialize icons with random positions and velocities
    const iconComponents = [
      FaDocker, 
      SiKubernetes, 
      FaAws, 
      FaGitAlt, 
      SiTerraform, 
      FaJenkins, 
      SiAnsible, 
      SiPrometheus,
      FaCloud, // Azure
      FaGithub,
      SiGooglecloud,
      SiGrafana,
      SiElasticsearch,
      SiNewrelic,
      SiFlux,
      SiHelm,
      SiGitlab,
      SiCircleci
    ];

    const initialIcons: FloatingIcon[] = iconComponents.map((Icon, index) => ({
      id: index,
      Icon,
      x: Math.random() * 80 + 10, // 10-90% position
      y: Math.random() * 80 + 10,
      vx: (Math.random() - 0.5) * 0.08, // Random velocity (reduced from 0.3)
      vy: (Math.random() - 0.5) * 0.08,
      size: 100,
    }));

    setIcons(initialIcons);
  }, []);

  useEffect(() => {
    if (icons.length === 0) return;

    const animate = () => {
      setIcons(prevIcons => {
        const newIcons = prevIcons.map(icon => {
          let { x, y, vx, vy } = icon;

          // Update position
          x += vx;
          y += vy;

          // Bounce off walls
          if (x <= 5 || x >= 95) {
            vx = -vx;
            x = x <= 5 ? 5 : 95;
          }
          if (y <= 5 || y >= 95) {
            vy = -vy;
            y = y <= 5 ? 5 : 95;
          }

          return { ...icon, x, y, vx, vy };
        });

        // Check for collisions between icons
        for (let i = 0; i < newIcons.length; i++) {
          for (let j = i + 1; j < newIcons.length; j++) {
            const icon1 = newIcons[i];
            const icon2 = newIcons[j];

            const dx = icon2.x - icon1.x;
            const dy = icon2.y - icon1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Collision detection (icons are about 8% of container width)
            if (distance < 10) {
              // Calculate bounce angles
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // Swap velocities for elastic collision
              const vx1 = icon1.vx * cos + icon1.vy * sin;
              const vy1 = icon1.vy * cos - icon1.vx * sin;
              const vx2 = icon2.vx * cos + icon2.vy * sin;
              const vy2 = icon2.vy * cos - icon2.vx * sin;

              // Update velocities after collision
              icon1.vx = vx2 * cos - vy1 * sin;
              icon1.vy = vy1 * cos + vx2 * sin;
              icon2.vx = vx1 * cos - vy2 * sin;
              icon2.vy = vy2 * cos + vx1 * sin;

              // Separate icons to prevent overlap
              const overlap = 10 - distance;
              const separationX = (overlap / 2) * cos;
              const separationY = (overlap / 2) * sin;
              
              icon1.x -= separationX;
              icon1.y -= separationY;
              icon2.x += separationX;
              icon2.y += separationY;
            }
          }
        }

        return newIcons;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [icons.length]);

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      
      <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* DevOps Themed Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Subtle gradient orbs */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary-400/10 dark:bg-primary-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 dark:bg-accent-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Physics-based Floating DevOps Icons with Collision Detection */}
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="absolute text-primary-600/30 dark:text-primary-400/25 pointer-events-none transition-all duration-100 ease-linear"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <icon.Icon size={icon.size} />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Content Overlay for Better Readability */}
          <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-3xl" />
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600">The DevOps Duoo</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering businesses with cutting-edge DevOps solutions. 
              We streamline your development pipeline and accelerate your digital transformation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-semibold shadow-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full text-lg font-semibold"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive DevOps solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-gradient-to-br group-hover:${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    
                    {/* Learn more arrow that appears on hover */}
                    <motion.div
                      className="flex items-center text-primary-600 dark:text-primary-400 font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      <span className="mr-2">Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: 500, label: 'Projects Completed', suffix: '+' },
              { number: 150, label: 'Happy Clients', suffix: '+' },
              { number: 99.9, label: 'Uptime Guarantee', suffix: '%' },
              { number: 24, label: 'Support Available', suffix: '/7' },
            ].map((stat, index) => {
              const [inView, setInView] = useState(false);
              const count = useCounter(stat.number, 2000, inView);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onViewportEnter={() => setInView(true)}
                >
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {stat.suffix === '%' ? count.toFixed(1) : count}{stat.suffix}
                  </motion.h3>
                  <p className="text-white/90">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how we can help accelerate your DevOps journey
            </p>
            <Link href="/contact">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xl font-semibold shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
