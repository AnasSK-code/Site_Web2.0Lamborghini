import React, { useEffect, useRef , useState} from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Gauge, Clock, Power } from 'lucide-react';
import { Link } from 'react-router-dom';
import video from "../video/video1.mp4";

const Home = () => {


  return (
    <div className="relative">
      {/* Effet de halo lumineux */}
      <div className="relative min-h-screen overflow-hidden">
      {/* Fond vidéo */}
      <video
        src={video} // Assure-toi d'avoir la vidéo à cet endroit ou utilise un lien direct
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Superposition sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-8 text-white">
          LAMBORGHINI
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
          Beyond the limits of imagination
        </p>
        <Link to="/models">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Discover Our Models
          </motion.button>
        </Link>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>

      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              THE NEW <span className="text-orange-custom">REVUELTO</span>
            </h2>
            <p className="text-xl text-gray-400">From vision to perfection</p>
          </motion.div>

          <div className="relative h-[70vh] mb-20">
            {/* Image animée */}
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src="https://www.autovisie.nl/wp-content/uploads/2023/03/lamborghini-revuelto-foto-2023-3.jpg"
              alt="Lamborghini Revuelto"
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Filtre noir animé en synchronisation avec l'image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}  // Même animation que l'image
              whileInView={{ opacity: 1, scale: 1 }}  // Synchronisé avec l'image
              transition={{ duration: 1 }}  // Durée identique
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Power className="w-8 h-8 text-orange-custom" />
                <div>
                  <h3 className="text-lg font-bold">1015 CV</h3>
                  <p className="text-gray-400">Total Power</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <Gauge className="w-8 h-8 text-orange-custom" />
                <div>
                  <h3 className="text-lg font-bold">350 KM/H</h3>
                  <p className="text-gray-400">Top Speed</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <Clock className="w-8 h-8 text-orange-custom" />
                <div>
                  <h3 className="text-lg font-bold">2.5 SEC</h3>
                  <p className="text-gray-400">0-100 km/h</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">
                DESIGNED FOR <span className="text-orange-custom">PERFECTION</span>
              </h3>
              <p className="text-gray-400 mb-8">
                Experience the perfect fusion of power and elegance. The new Revuelto 
                represents the pinnacle of Lamborghini engineering, combining hybrid 
                technology with our legendary V12 engine.
              </p>
              <Link to="/innovation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-custom text-white px-6 py-3 rounded-full font-bold hover-orange-custom transition-colors duration-200"
                >
                  Discover Innovation
                </motion.button>
              </Link>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/centro_stile/revuelto_centro_stile_01.jpg"
              alt="Lamborghini Detail"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      
      <div className="bg-gradient-to-b from-black to-[#1a1a1a] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-12"
          >
            EXPERIENCE <span className="text-orange-custom">EXCELLENCE</span>
          </motion.h2>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-custom text-white px-8 py-3 rounded-full font-bold hover-orange-custom transition-colors duration-200"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;