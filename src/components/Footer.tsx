import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Rocket size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">GetFunding</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              Empowering innovators to build the future. The most trusted crowdfunding platform for Indian startups and entrepreneurs.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Browse Schema', href: '/explore' },
                { name: 'Raise Funds', href: '/start-campaign' },
                { name: 'How it Works', href: '/how-it-works' },
                { name: 'Success Stories', href: '/success-stories' },
                { name: 'Pricing', href: '/pricing' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-emerald-400 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'About Us', href: '/about-us' },
                { name: 'Our Team', href: '/team' },
                { name: 'Careers', href: '/careers' },
                { name: 'Press', href: '/press' },
                { name: 'Contact', href: '/contact-us' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-emerald-400 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-6">Get the latest startup news and featured projects delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <p>© 2026 GetFunding. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
