import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Search, Menu, X, User, LogOut, LayoutDashboard, RocketIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthModal } from './AuthModal';
import { useAuth } from '../contexts/AuthContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Explore Schemes', href: '/dashboard' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Proof', href: '/success-stories' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/30 bg-blend-darken backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xl">
              <img src="https://startupflora.com/_next/image?url=%2Fimg%2FcompanyLogo.png&w=64&q=75" alt="startupflora logo" />
            </div>
            <span className={`text-xl font-bold tracking-tight text-slate-900`}>
              Startupflora
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-base font-medium transition-colors ${location.pathname === item.href ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white overflow-hidden">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                    ) : (
                      <User size={18} />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 max-w-[100px] truncate">
                    {user.displayName || user.email?.split('@')[0]}
                  </span>
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                    >
                      <Link 
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <LayoutDashboard size={18} className="text-slate-400" />
                        Dashboard
                      </Link>
                      <button 
                        onClick={() => logout()}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={18} className="text-red-400" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                {/* <button 
                  onClick={() => openAuth('login')}
                  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Login
                </button> */}
                <button 
                  onClick={() => openAuth('signup')}
                  className="bg-purple-600 hover:bg-purple-800 flex gap-2 items-center text-white text-base font-semibold px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  Get Started <RocketIcon size={18}/>
                </button>
              </>
            )}
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
                    className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === item.href ? 'text-blue-600' : 'text-slate-800'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  {user ? (
                    <>
                      <Link 
                        to="/dashboard"
                        className="w-full bg-blue-600 text-white text-center py-3 font-semibold rounded-xl shadow-md"
                      >
                        Dashboard
                      </Link>
                      <button 
                        onClick={() => logout()}
                        className="w-full text-center py-3 font-medium text-red-600 border border-red-100 rounded-xl bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => openAuth('login')}
                        className="w-full text-center py-3 font-medium text-slate-700 border border-slate-200 rounded-xl"
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => openAuth('signup')}
                        className="w-full bg-blue-600 text-white text-center py-3 font-semibold rounded-xl shadow-md"
                      >
                        Start a Campaign
                      </button>
                    </>
                  )}
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
