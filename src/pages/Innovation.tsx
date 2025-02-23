import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Battery, Gauge, Wind } from 'lucide-react';

const Innovation = () => {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: 'Hybrid Technology',
      description: 'Advanced hybrid powertrains combining electric motors with traditional V12 engines for unprecedented performance.'
    },
    {
      icon: <Battery className="w-8 h-8 text-orange-500" />,
      title: 'Supercapacitors',
      description: 'Revolutionary energy storage system providing instant power delivery and improved efficiency.'
    },
    {
      icon: <Wind className="w-8 h-8 text-orange-500" />,
      title: 'Aerodynamics',
      description: 'Active aerodynamic systems that adapt in real-time for optimal performance and stability.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-orange-500" />,
      title: 'Performance',
      description: 'State-of-the-art engine management systems delivering maximum power with minimal environmental impact.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto py-12"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Future of <span className="text-orange-500">Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of automotive technology with groundbreaking innovations 
            and sustainable performance solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/Lambo%20Day/COVER.jpg"
            alt="Lamborghini Innovation"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Commitment to Excellence</h3>
            <p className="text-gray-300 text-lg">
              Our dedication to innovation drives us to explore new technologies and push 
              the boundaries of what's possible in automotive engineering. From advanced 
              materials to cutting-edge powertrains, every innovation is designed to 
              deliver an unparalleled driving experience.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Innovation;