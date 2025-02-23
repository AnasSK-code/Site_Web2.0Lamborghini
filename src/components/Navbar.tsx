import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../image/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll handler to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);  // Close mobile menu on location change
  }, [location]);

  return (
    <nav
      className={`fixed w-full bg-black/85 backdrop-blur-sm z-50 border-b border-orange-600 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-black'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Lamborghini Logo" className="h-17 w-16" />
            <span className="text-2xl font-bold font-[Lamborghini] text-white-400 italic">
              Lamborghini
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white font-bold hover:text-orange-500 transition-colors duration-200">Home</Link>
            <Link to="/models" className="text-white font-bold hover:text-orange-500 transition-colors duration-200">Models</Link>
            <Link to="/innovation" className="text-white font-bold hover:text-orange-500 transition-colors duration-200">Innovation</Link>
            <Link to="/about" className="text-white font-bold hover:text-orange-500 transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-white font-bold hover:text-orange-500 transition-colors duration-200">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[80px] left-0 w-full bg-black/85 backdrop-blur-sm text-white flex flex-col items-center py-4 space-y-4 z-50"
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white font-bold hover:text-orange-500 border-b ">Home</Link>
          <Link to="/models" onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-bold text-white hover:text-orange-500 border-b ">Models</Link>
          <Link to="/innovation" onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-bold text-white hover:text-orange-500 border-b ">Innovation</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-bold text-white hover:text-orange-500 border-b ">About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-bold text-white hover:text-orange-500 border-b">Contact</Link>
        </motion.div>
        
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
