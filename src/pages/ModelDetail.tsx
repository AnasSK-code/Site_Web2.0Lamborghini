import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Power, Gauge, Battery, Clock } from 'lucide-react';

const models = {
  revuelto: {
    name: 'Revuelto',
    tagline: 'The first V12 hybrid plug-in HPEV',
    description: 'The Revuelto represents a new era in Lamborghini history, combining hybrid technology with our legendary V12 engine for unprecedented performance and driving emotion.',
    image: 'https://www.evocars-magazin.de/wp-content/uploads/2023/09/651035.jpg',
    gallery: [
      'https://cdn.antaranews.com/cache/1200x800/2024/10/24/lamborghini-revuelto.jpg',
      'https://i0.wp.com/www.stylology.it/wp-content/uploads/2023/03/lamborghini-revuelto-foto-2023-1.jpg?fit=1920%2C1080&ssl=1'
    ],
    specs: {
      power: '1015 CV',
      acceleration: '2.5s',
      topSpeed: '350 km/h',
      hybrid: 'Plug-in Hybrid'
    }
  },
  huracan: {
    name: 'Huracán Sterrato',
    tagline: 'Beyond the concrete jungle',
    description: 'The first super sports car designed for maximum driving pleasure on all terrains. A new dimension of versatility and pure driving emotion.',
    image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/28/16852637889805.jpg',
    gallery: [
      'https://citymagazine.si/fr/lamborghini-huracan-sterrato-lamborghini-%CA%BAterenec%CA%BA/lamborghini-huracan-sterrato-7/',
      'https://cdn.motor1.com/images/mgl/9m9jZX/s1/lamborghini-huracan-sterrato.jpg'
    ],
    specs: {
      power: '610 CV',
      acceleration: '3.4s',
      topSpeed: '260 km/h',
      hybrid: 'No'
    }
  },
  urus: {
    name: 'Urus S',
    tagline: 'The first Super Sport Utility Vehicle',
    description: 'The Urus S is the ultimate lifestyle Super SUV, combining luxurious versatility with pure Lamborghini performance.',
    image: 'https://www.italpassion.fr/wp-content/uploads/2022/10/lamborghini-urus-S.jpg',
    gallery: [
      'https://cdn.motor1.com/images/mgl/XB3B8v/s1/lamborghini-urus-s.jpg',
      'https://static.moniteurautomobile.be/clients/moniteur/content/medias/images/news/40000/600/0/2023-lamborghini-urus_s-8.jpg'
    ],
    specs: {
      power: '666 CV',
      acceleration: '3.5s',
      topSpeed: '305 km/h',
      hybrid: 'No'
    }
  },
  countach: {
    name: 'Countach LPI 800-4',
    tagline: 'The future of an icon',
    description: 'A futuristic limited edition that pays homage to the legendary Countach while embracing modern hybrid technology.',
    image: 'https://www.largus.fr/images/styles/max_1300x1300/public/images/countach-avg.jpg?itok=FWnC-R5x',
    gallery: [
      'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/countach/hb/countach_hp.jpg',
      'https://www.colcorsa.com/wp-content/uploads/Lamborghini-Countach-rental-Europe.jpg'
    ],
    specs: {
      power: '814 CV',
      acceleration: '2.8s',
      topSpeed: '355 km/h',
      hybrid: 'Yes'
    }
  },
  sian: {
    name: 'Sián FKP 37',
    tagline: 'Ahead of its time',
    description: 'The first super sports car powered by a V12 engine with hybrid technology based on supercapacitors.',
    image: 'https://cars-usa.ru/wp-content/uploads/2024/01/Lamborghini-Sian-08.jpg',
    gallery: [
      'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2024/s2.jpg',
      'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2024/gallery5.jpg'
    ],
    specs: {
      power: '819 CV',
      acceleration: '2.8s',
      topSpeed: '350 km/h',
      hybrid: 'Yes'
    }
  }
};

const ModelDetail = () => {
  const { id } = useParams();
  const model = models[id as keyof typeof models];

  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Model not found</h2>
          <Link to="/models" className="text-orange-custom hover:text-orange-500">
            Return to Models
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="relative h-[80vh]">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
        />

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
        />



      
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link to="/models" className="inline-flex items-center text-gray-400 hover:text-orange-custom mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Models
          </Link>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl sm:text-7xl font-bold mb-4"
          >
            {model.name}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            {model.tagline}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {model.description}
            </p>
            <button className="bg-orange-custom text-white px-8 py-3 rounded-full font-bold hover-orange-custom transition-colors duration-200">
              Configure Your {model.name}
            </button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <Power className="w-8 h-8 text-orange-custom mb-4" />
              <div className="text-2xl font-bold">{model.specs.power}</div>
              <div className="text-gray-400">Total Power</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="w-8 h-8 text-orange-custom mb-4" />
              <div className="text-2xl font-bold">{model.specs.acceleration}</div>
              <div className="text-gray-400">0-100 km/h</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <Gauge className="w-8 h-8 text-orange-custom mb-4" />
              <div className="text-2xl font-bold">{model.specs.topSpeed}</div>
              <div className="text-gray-400">Top Speed</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <Battery className="w-8 h-8 text-orange-custom mb-4" />
              <div className="text-2xl font-bold">{model.specs.hybrid}</div>
              <div className="text-gray-400">Hybrid System</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {model.gallery.map((image, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                src={image}
                alt={`${model.name} Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModelDetail;