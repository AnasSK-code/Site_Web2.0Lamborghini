import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const models = [
  {
    id: 'revuelto',
    name: 'Revuelto',
    image: 'https://www.evocars-magazin.de/wp-content/uploads/2023/09/651035.jpg',
    description: 'The first V12 hybrid plug-in HPEV (High Performance Electrified Vehicle)',
    price: 'Starting at $500,000'
  },
  {
    id: 'huracan',
    name: 'Huracán Sterrato',
    image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/28/16852637889805.jpg',
    description: 'The first super sports car designed for maximum driving pleasure on all terrains',
    price: 'Starting at $270,000'
  },
  {
    id: 'urus',
    name: 'Urus S',
    image: 'https://www.italpassion.fr/wp-content/uploads/2022/10/lamborghini-urus-S.jpg',
    description: 'The first Super Sport Utility Vehicle in the world',
    price: 'Starting at $230,000'
  },
  {
    id: 'countach',
    name: 'Countach LPI 800-4',
    image: 'https://www.largus.fr/images/styles/max_1300x1300/public/images/countach-avg.jpg?itok=FWnC-R5x',
    description: 'A futuristic limited edition that pays homage to the legendary Countach',
    price: 'Starting at $2,640,000'
  },
  {
    id: 'sian',
    name: 'Sián FKP 37',
    image: 'https://cars-usa.ru/wp-content/uploads/2024/01/Lamborghini-Sian-08.jpg',
    description: 'The first super sports car powered by a V12 engine with hybrid technology based on supercapacitors',
    price: 'Starting at $3,600,000'
  }
];

const Models = () => {
  return (
    <div className="min-h-screen bg-black pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto py-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Our <span className="text-orange-custom">Models</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-lg overflow-hidden group"
            >
              <div className="relative h-48 sm:h-64">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-15 duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-400 mb-4">{model.description}</p>
                <p className="text-orange-custom font-semibold mb-4">{model.price}</p>
                <Link 
                  to={`/models/${model.id}`}
                  className="block w-full bg-orange-custom text-white text-center py-2 rounded-md font-bold hover-orange-custom transition-colors duration-200"
                >
                  Discover More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Models;