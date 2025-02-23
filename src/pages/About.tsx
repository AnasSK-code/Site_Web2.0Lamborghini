import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Heritage',
      description: 'Founded in 1963, Lamborghini has become synonymous with luxury and performance, creating some of the most iconic supercars in history.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of automotive engineering with cutting-edge technology and revolutionary design concepts.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'Every Lamborghini is crafted with uncompromising attention to detail, representing the pinnacle of Italian craftsmanship.'
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
            About <span className="text-orange-500">Lamborghini</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Automobili Lamborghini represents Italian heritage and excellence, 
            creating the most sought-after super sports cars in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src="https://preview.thenewsmarket.com/Previews/lamb/StillAssets/1920x1080/664205_v2.jpg"
            alt="Lamborghini Factory"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-2xl font-bold mb-2">Our Legacy</h3>
            <p className="text-gray-300">
              From the first 350 GT to today's hypercars, every Lamborghini tells a story of 
              passion, innovation, and the relentless pursuit of perfection.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;