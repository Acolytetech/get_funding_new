import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthModal } from './AuthModal';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Browse Schemes', href: '/dashboard' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about-us' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <Rocket size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight text-slate-900`}>
              GetFunding
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
              >
                {item.name}
              </Link>
            ))}
            <button className="text-slate-400 hover:text-emerald-600 transition-colors">
              <Search size={20} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => openAuth('login')}
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 px-4 py-2 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => openAuth('signup')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Start a Campaign
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === item.href ? 'text-emerald-600' : 'text-slate-800'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <button 
                    onClick={() => openAuth('login')}
                    className="w-full text-center py-3 font-medium text-slate-700 border border-slate-200 rounded-xl"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => openAuth('signup')}
                    className="w-full bg-emerald-600 text-white text-center py-3 font-semibold rounded-xl shadow-md"
                  >
                    Start a Campaign
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};
