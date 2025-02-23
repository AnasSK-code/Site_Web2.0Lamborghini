import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with us to learn more about our vehicles or to schedule a personalized consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-black py-3 px-6 rounded-md font-bold hover:bg-orange-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">
                  Via Modena, 12<br />
                  40019 Sant'Agata Bolognese<br />
                  Bologna, Italy
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+39 051 9597611</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">info@lamborghini.com</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden mt-8">
              <img
                src="https://www.motorvalley.it/wp-content/uploads/2024/10/Motor-Valley-stories-Ferruccio-Lamborghini-una-sfida-da-sogno-cover.jpg"
                alt="Lamborghini Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;