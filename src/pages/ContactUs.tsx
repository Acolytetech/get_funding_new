import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Globe, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
  const contactInfo = [
    { title: "Email Us", desc: "support@getfunding.in", icon: Mail },
    { title: "Call Us", desc: "+91 (123) 456-7890", icon: Phone },
    { title: "Visit Us", desc: "Mumbai, Maharashtra, India", icon: MapPin }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about starting a campaign or investing? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Form */}
          <div className="bg-slate-50 p-10 rounded-[40px] shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Arjun Sharma"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="arjun@example.com"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Starting a Campaign</option>
                  <option>Investing in a Project</option>
                  <option>Partnership Opportunities</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                />
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-12 mb-16">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <info.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                    <p className="text-lg text-slate-600">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-slate-900 p-10 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-6">Follow our journey</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Stay updated with the latest startup news and featured projects across our social media channels.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'Linkedin', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all border border-white/10">
                    <span className="sr-only">{social}</span>
                    <Globe size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { q: "How do I start a campaign?", a: "Simply click on the 'Start a Campaign' button and follow our step-by-step guide to set up your project." },
              { q: "What are the fees?", a: "We charge a small platform fee (5-8%) only if your campaign successfully reaches its funding goal." },
              { q: "Is my investment secure?", a: "Yes, all transactions are processed through secure payment gateways and we verify all innovators on our platform." },
              { q: "How do I get my funds?", a: "Once your campaign hits its goal, funds are transferred to your verified bank account after a standard processing period." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
              Learn more about how it works <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
