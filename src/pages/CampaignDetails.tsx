import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, 
  Heart, 
  Share2, 
  Users, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Play,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import { CAMPAIGNS, type Campaign } from '../data';

export const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [activeTab, setActiveTab] = useState('About');

  useEffect(() => {
    const found = CAMPAIGNS.find(c => c.id === Number(id));
    if (found) setCampaign(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!campaign) {
    return (
      <div className="pt-48 pb-24 text-center min-h-screen">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Campaign not found</h2>
        <Link to="/explore" className="text-emerald-600 font-bold hover:underline">Back to Explore</Link>
      </div>
    );
  }

  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
            <img 
              src={campaign.image} 
              alt={campaign.title} 
              className="w-full h-full object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all">
                <Play fill="white" size={32} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {campaign.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1 text-sm font-medium">
                <Globe size={14} /> {campaign.location}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {campaign.title}
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {campaign.description}
            </p>

            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">${campaign.raised.toLocaleString()}</p>
                  <p className="text-sm text-slate-500 font-medium">raised of ${campaign.goal.toLocaleString()} goal</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-600 mb-1">{Math.round(progress)}%</p>
                  <p className="text-sm text-slate-500 font-medium">funded</p>
                </div>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-emerald-500 h-full" 
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-900">{campaign.backers}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Backers</p>
                </div>
                <div className="text-center border-x border-slate-200">
                  <p className="text-xl font-bold text-slate-900">{campaign.daysLeft}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Days Left</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Verified</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1">
                  Back this Project
                </button>
                <button className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-100 transition-all">
                  <Heart size={24} />
                </button>
                <button className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-100 transition-all">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex gap-8 border-b border-slate-100 mb-10 overflow-x-auto no-scrollbar">
              {['About', 'Updates', 'Backers', 'FAQ'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-lg font-bold transition-all whitespace-nowrap relative ${activeTab === tab ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Story Behind {campaign.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="bg-emerald-50 p-10 rounded-[40px] mb-10 border border-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Why we need your support</h3>
                <ul className="space-y-4">
                  {[
                    "Scale our production to reach more communities",
                    "Develop new features for our core technology",
                    "Expand our team of experts and innovators",
                    "Build a sustainable future for our project"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-emerald-800">
                      <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Milestones</h3>
              <div className="space-y-8 mb-10">
                {[
                  { title: "Phase 1: Research & Development", status: "Completed", date: "Jan 2024" },
                  { title: "Phase 2: Prototype Testing", status: "In Progress", date: "Mar 2024" },
                  { title: "Phase 3: Market Launch", status: "Upcoming", date: "Jun 2024" }
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${m.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : m.status === 'In Progress' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'}`}>
                      {m.status === 'Completed' ? <CheckCircle2 size={24} /> : <Calendar size={24} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{m.title}</h4>
                      <p className="text-sm text-slate-500">{m.status} • {m.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Innovator Profile</h3>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <img src={`https://i.pravatar.cc/100?u=${campaign.id}`} alt="Innovator" className="w-16 h-16 rounded-full border-4 border-white/10" />
                <div>
                  <p className="font-bold text-lg">Arjun Sharma</p>
                  <p className="text-slate-400 text-sm">3 Campaigns • Mumbai, IN</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                Arjun is a serial entrepreneur with over 10 years of experience in the technology sector. He's passionate about building sustainable solutions for India's future.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all relative z-10">
                Contact Innovator
              </button>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Trust & Safety</h3>
              <ul className="space-y-6">
                {[
                  { title: "Verified Identity", desc: "Innovator's identity has been verified by our team.", icon: ShieldCheck },
                  { title: "Secure Payments", desc: "All funds are held in escrow until the goal is reached.", icon: Globe },
                  { title: "Transparent Updates", desc: "Innovators are required to provide regular project updates.", icon: TrendingUp }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
