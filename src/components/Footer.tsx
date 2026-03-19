import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-slate-500 pt-20 pb-10 border-t border-slate-100 relative overflow-hidden bg-purple-500 font-[Cormorant_Garamond]
             pt-24 pb-16
             sm:pt-28 sm:pb-20
             md:pt-32 md:pb-24
             lg:pt-40 lg:pb-32"
  style={{
    background:
      "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 1.67%, #DFF5F8 45.87%)",
  }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 rounded flex items-center justify-center text-white font-bold text-xl">
                          <img src="https://startupflora.com/_next/image?url=%2Fimg%2FcompanyLogo.png&w=64&q=75" alt="startupflora logo" />
                        </div>
                        <span className={`text-2xl font-bold tracking-tight text-slate-900`}>
                          Startupflora
                        </span>
                      </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Empowering entrepreneurs by simplifying access to government funding and incubator resources globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'How it works', href: '/how-it-works' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Proof', href: '/success-stories' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-blue-600 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-blue-600 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-6">Get the latest startup news and featured projects delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <p>© GetFunding. All rights reserved. Owned by Codingo Club Pvt Ltd</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

