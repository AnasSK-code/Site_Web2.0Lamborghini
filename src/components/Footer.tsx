import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Car } from 'lucide-react';
import logo from '../image/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <Link to="/" className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Lamborghini Logo" className="h-17 w-16" />
            <span className="text-2xl font-bold font-[Lamborghini] text-white-400 italic">
              Lamborghini
            </span>
          </Link>
            <p className="text-gray-400">
              Beyond the limits of imagination. Experience the extraordinary.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Models</h3>
            <ul className="space-y-2">
              <li><Link to="/models/revuelto" className="text-gray-400 hover:text-orange-custom">Revuelto</Link></li>
              <li><Link to="/models/huracan" className="text-gray-400 hover:text-orange-custom">Huracán</Link></li>
              <li><Link to="/models/urus" className="text-gray-400 hover:text-orange-custom">Urus</Link></li>
              <li><Link to="/models/countach" className="text-gray-400 hover:text-orange-custom">Countach</Link></li>
              <li><Link to="/models/sian" className="text-gray-400 hover:text-orange-custom">Sìan</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-orange-custom">About Us</Link></li>
              <li><Link to="/innovation" className="text-gray-400 hover:text-orange-custom">Innovation</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-custom">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Lamborghini/" className="text-gray-400 hover:text-orange-custom">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/lamborghini/?hl=en" className="text-gray-400 hover:text-orange-custom">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/Lamborghini" className="text-gray-400 hover:text-orange-custom">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw" className="text-gray-400 hover:text-orange-custom">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Automobili Lamborghini S.p.A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;