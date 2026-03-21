import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search,
  ChevronRight, 
  ArrowRight, 
  Play, 
  Users, 
  CheckCircle2,
  Filter,
  MousePointer2,
  Layout,
  MessageSquare,
  Calendar,
  FileText,
  Zap,
  Star,
  Share2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  const navigate = useNavigate();
  const [selectedSchemeType, setSelectedSchemeType] = useState<'Central Government' | 'State Government'>('Central Government');
  const [selectedIndustry, setSelectedIndustry] = useState<'Biotechnology' | 'Science and Technology' | ''>('Biotechnology');
  const [selectedStage, setSelectedStage] = useState<'Idea stage to POC' | 'Growth Stage'>('Idea stage to POC');
  const [searchTerm, setSearchTerm] = useState('');

  const goToDashboard = () => {
    const params = new URLSearchParams({
      tab: 'schemes',
      type: selectedSchemeType,
      industry: selectedIndustry,
      stage: selectedStage,
    });

    if (searchTerm.trim()) {
      params.set('search', searchTerm.trim());
    }

    navigate(`/dashboard?${params.toString()}`);
  };

  return (
 <section
  className="relative overflow-hidden bg-white font-[Cormorant_Garamond]
             pt-24 pb-16
             sm:pt-28 sm:pb-20
             md:pt-32 md:pb-24
             "
  style={{
    background:
      "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 20.67%, #DFF5F8 65.87%)",
  }}
>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Precision Engine V3.0</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Find The Best Government <span className="text-purple-600 italic">Schemes & Incubators</span> for Your Startup
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            Our granular filtering system processes 5,000+ government schemes and investment opportunities to find exactly what you qualify for. Stop scrolling, start applying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link to="/dashboard" className="bg-linear-to-r from-purple-500  to-green-500 hover:shadow-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-md">
              Explore Schemes 
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i + 10}`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">saves 500+ hours of research</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100  w-full lg:max-w-md mx-auto lg:ml-auto">
            <div className="flex items-center justify-between p-4 bg-emerald-600 ">
              <h3 className="text-lg font-bold text-slate-100">Premium Filters</h3>
              <button
                className="text-[14px] font-bold text-white uppercase tracking-wider"
                onClick={() => {
                  setSelectedSchemeType('Central Government');
                  setSelectedIndustry('Biotechnology');
                  setSelectedStage('Idea stage to POC');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </button>
            </div>
            
            <div className="space-y-6 p-6">
              <div>
                <p className="text-[14px] font-bold text-slate-400 uppercase tracking-widest mb-3">Scheme Type</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedSchemeType('Central Government')}>
                    <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center p-0.5">
                      {selectedSchemeType === 'Central Government' && <div className="w-full h-full rounded-full bg-green-500" />}
                    </div>
                    <span className="text-base font-semibold text-slate-700 group-hover:text-slate-900">Central Government</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedSchemeType('State Government')}>
                    <div className={`w-4 h-4 rounded-full border-2 ${selectedSchemeType === 'State Government' ? 'border-green-500 flex items-center justify-center p-0.5' : 'border-slate-200'}`}>
                      {selectedSchemeType === 'State Government' && <div className="w-full h-full rounded-full bg-green-500" />}
                    </div>
                    <span className="text-base font-semibold text-slate-500 group-hover:text-slate-700">State Government</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-[14px] font-bold text-slate-400 uppercase tracking-widest mb-3">Industry</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedIndustry('Biotechnology')}>
                    <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center p-0.5">
                      {selectedIndustry === 'Biotechnology' && <div className="w-full h-full rounded-full bg-green-500" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Biotechnology</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedIndustry('Science and Technology')}>
                    <div className={`w-4 h-4 rounded-full border-2 ${selectedIndustry === 'Science and Technology' ? 'border-blue-500 flex items-center justify-center p-0.5' : 'border-slate-200'}`}>
                      {selectedIndustry === 'Science and Technology' && <div className="w-full h-full rounded-full bg-blue-500" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Science and Technology</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                    <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700">Defense</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-[14px] font-bold text-slate-400 uppercase tracking-widest mb-3">Stage</p>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input 
                    type="text" 
                    placeholder="Start typing..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        goToDashboard();
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedStage('Idea stage to POC')}>
                    <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center p-0.5">
                      {selectedStage === 'Idea stage to POC' && <div className="w-full h-full rounded-full bg-green-500" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Idea stage to POC</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedStage('Growth Stage')}>
                    <div className={`w-4 h-4 rounded-full border-2 ${selectedStage === 'Growth Stage' ? 'border-green-500 flex items-center justify-center p-0.5' : 'border-slate-200'}`}>
                      {selectedStage === 'Growth Stage' && <div className="w-full h-full rounded-full bg-green-500" />}
                    </div>
                    <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700">Growth Stage</span>
                  </label>
                </div>
              </div>

              <button className="text-[14px] font-bold text-green-500 flex items-center gap-1" onClick={goToDashboard}>
                Show More <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PainfulResearch = () => {
  return (
  <section
 className="relative overflow-hidden bg-purple-500 font-[Cormorant_Garamond]
             pt-14 pb-16
             sm:pt-28 sm:pb-20
             md:pt-32 md:pb-24
              "
  style={{
    background:
      "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 1.67%, #DFF5F8 45.87%)",
  }}
>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Save <span className="text-purple-600">500+ Hours</span> of <br /> Painful Research
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm font-medium">
          Stop losing sleep over manual spreadsheets and dead-end search results. Our precision logic surfaces high-signal opportunities in seconds.
        </p>
      </motion.div>

     <div className="max-w-6xl md:pt-10 md:scale-105 mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-stretch">

    {/* LEFT SECTION */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-3 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-lg md:text-xl font-semibold text-slate-900">
            How We Help You Get Funding
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            From idea to approval — complete guidance
          </p>
        </div>

        <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Live Matching
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          "Startup Stage Analysis",
          "Scheme Matching",
          "Eligibility Check",
          "Documentation Support"
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white px-4 py-2 rounded-lg border text-sm font-medium text-blue-600"
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* RESULT VISUAL */}
      <div className="flex items-center justify-center gap-10 md:gap-12 py-6">

        <div className="text-center">
          <p className="text-sm font-medium text-green-600 mb-1">
            Schemes Available
          </p>
          <p className="text-4xl md:text-5xl font-bold text-green-600">
            100+
          </p>
        </div>

        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 border-t-[40px] border-t-purple-200 border-x-[48px] border-x-transparent" />
          <span className="text-xs md:text-sm font-semibold text-purple-600 text-center">
            BEST FIT
          </span>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-blue-500 mb-1">
            Perfect Matches
          </p>
          <motion.p 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-blue-600"
          >
            3
          </motion.p>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-6 flex items-center justify-between text-sm font-medium text-blue-600">
        <span>Eligibility + Documentation Ready</span>
        <span>98% Success Mapping</span>
      </div>

      <div className="mt-2 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "98%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-full bg-blue-600" 
        />
      </div>
    </motion.div>

    {/* RIGHT SECTION */}
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-2 bg-slate-900 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between"
    >
      <div>
        <h4 className="text-lg md:text-xl font-semibold mb-2">
          Why Most Startups Fail
        </h4>
        <p className="text-sm text-slate-400 mb-6">
          And how we help you win funding faster
        </p>

        <div className="space-y-6">

          {/* WITHOUT */}
          <div>
            <p className="text-sm font-semibold text-red-400 mb-2">
              Without Guidance
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p>❌ Wrong scheme selection</p>
              <p>❌ Eligibility confusion</p>
              <p>❌ Documentation errors</p>
              <p>❌ High rejection chances</p>
            </div>
          </div>

          {/* WITH */}
          <div>
            <p className="text-sm font-semibold text-green-400 mb-2">
              With Our Consultation
            </p>
            <div className="space-y-2 text-sm text-white">
              <p>✔ Best scheme selection</p>
              <p>✔ Clear eligibility roadmap</p>
              <p>✔ Proper documentation support</p>
              <p>✔ Faster approval chances</p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <button className="mt-8 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold text-sm transition">
        Get Expert Guidance →
      </button>
    </motion.div>
  </div>

  {/* STATS */}
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="grid grid-cols-3 gap-4 md:gap-8 mt-16 border-t border-slate-100 pt-12"
  >
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</p>
      <p className="text-sm text-slate-500">Businesses Guided</p>
    </div>

    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">₹12L+</p>
      <p className="text-sm text-slate-500">Avg Funding Value</p>
    </div>

    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">90%+</p>
      <p className="text-sm text-slate-500">Success Rate</p>
    </div>
  </motion.div>
</div>
    </section>
  );
};


const Results = () => {
  const cards = [
    {
      title: "BIRAC - BIG",
      tag: "Central Government Scheme",
      icon: Zap,
      color: "blue",
      about: "The Biotechnology Ignition Grant (BIG) scheme, initiated by BIRAC, supports early-stage biotech entrepreneurs and innovators in transforming their ideas into proof-of-concept (PoC) projects.",
      fundType: "Grant",
      size: "₹50,00,000",
      stage: "Idea stage to POC",
      rating: "4.8/5 (240 reviews)"
    },
    {
      title: "COE IN VIRTUAL AR, IIT BHUBANESWAR",
      tag: "Incubator",
      icon: MousePointer2,
      color: "blue",
      about: "Virtual Reality (VR) and Augmented Reality (AR) hold significant promise for driving innovation across numerous sectors and research domains. This center at IIT Bhubaneswar focuses on deep-tech acceleration for high-growth startups.",
      location: "Bhubaneswar, Odisha",
      year: "2018"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden bg-purple-500 font-[Cormorant_Garamond]
             pt-24 pb-10
             sm:pt-28 sm:pb-20
             md:pt-24 md:pb-24
             "
  style={{
    background:
      "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 1.67%, #DFF5F8 45.87%)",
  }} >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-12"
        >
          <div>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">The Result</p>
            <h2 className="text-4xl font-bold text-slate-900">Instant matches for your profile</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm flex items-center gap-4">
              <span className="text-xl font-bold text-slate-900">1,543</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Results for "Innovation"</span>
            </div>
            <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
              Sort By: <span className="text-blue-600">Newest</span> <ChevronRight size={12} className="rotate-90" />
            </button>
          </div>
        </motion.div>

        <div className="space-y-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm grid md:grid-cols-4 gap-8 transition-shadow hover:shadow-xl"
           
            >
              <div className="flex gap-4 md:gap-0  md:justify-between">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <card.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{card.title}</h4>
                  <p className="text-[8px] font-bold text-green-500 uppercase tracking-widest mb-4">{card.tag}</p>
                  {card.rating && (
                    <div className="flex items-center gap-1 text-green-400">
                      <Star size={10} fill="currentColor" />
                      <span className="text-[10px] font-bold text-slate-400">{card.rating}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-3">About</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {card.about} <Link to="/dashboard" className="text-blue-600 font-bold">See More</Link>
                </p>
                <div className="flex gap-4">
                  <button className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                    <Layout size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                    <Share2 size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  {card.fundType && (
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fund Type</p>
                      <p className="text-xs font-bold text-slate-900">{card.fundType}</p>
                    </div>
                  )}
                  {card.size && (
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Investment Size</p>
                      <p className="text-xs font-bold text-slate-900">{card.size}</p>
                    </div>
                  )}
                  {card.stage && (
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Stage</p>
                      <p className="text-xs font-bold text-slate-900">{card.stage}</p>
                    </div>
                  )}
                  {card.location && (
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-xs font-bold text-slate-900">{card.location}</p>
                    </div>
                  )}
                  {card.year && (
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Founding Year</p>
                      <p className="text-xs font-bold text-slate-900">{card.year}</p>
                    </div>
                  )}
                </div>
                {/* <div className="space-y-2 mt-6">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                    <Zap size={14} /> My list
                  </button>
                  <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-400 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-colors" onClick={()=>window.open('/dashboard',"_self")}>
                    Application Details
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Proof = () => {
  return (
    <section >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-slate-900 mb-6">Proof</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm font-medium">
          Watch this video — real proof that government funding works — one of our users got it!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/3">
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Real Startups. <br /> Real Funding.</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">
              Watch how one of our users successfully received government funding through the SISFS scheme. See the proof — because results speak louder than words.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all">
              Join for free
            </button>
          </div>
          <div className="lg:w-2/3 relative group">
            <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform cursor-pointer"
                >
                  <Play fill="currentColor" size={32} className="ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Successful Application Demo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Community = () => {
  return (
    <section
     className="relative overflow-hidden bg-purple-500 font-[Cormorant_Garamond]
             pt-24 pb-16
             sm:pt-28 sm:pb-20
             md:pt-24 md:pb-24
             "
  style={{
    background:
      "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 1.67%, #DFF5F8 45.87%)",
  }}
    
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-3 md:px-6 text-center mb-16"
      >
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Our Ecosystem</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Community & Network</h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-12 border border-slate-100 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">Join 300+ Startup Founders <br /> Backing Each Other</h3>
            <div className="space-y-6 mb-12">
              {[
                { icon: Users, text: "Access private Telegram group for peer reviews" },
                { icon: MessageSquare, text: "Monthly AMA sessions with funded founders" },
                { icon: FileText, text: "Shared templates for successful applications" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <item.icon size={20} />
                  </div>
                  <p className="text-sm font-medium text-slate-500">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm w-fit shadow-lg transition-all hover:shadow-xl">
            Get Started
          </button>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 10 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-start gap-6 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Gov Schemes</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Stay updated with 140+ active central and state schemes.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ x: 10 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-start gap-6 transition-all"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Layout size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Incubators</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Connect with top-tier government & private incubators — IITs, NITs, T-Hub, IIMB, and more.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 mt-8"
      >
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
              <Calendar size={24} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-500 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider mb-1">
                Upcoming
              </div>
              <h4 className="text-xl font-bold text-slate-900">Angel Investors & Venture Capitalists</h4>
              <p className="text-sm text-slate-500">10,000+ curated angel investors & VC contact info — direct access to active seed investors and venture funds.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i + 20}`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">
                +10k
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


const CTA = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <h2 className=" text-4xl capitalize md:text-6xl font-bold text-slate-900 mb-8 leading-tight">Stop <span className="text-purple-700">Searching</span>. Start getting <span className='text-green-700'>funded</span>.</h2>
      <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
  Discover 140+ verified government schemes, grants, and subsidies — all filtered, simplified, and ready for you to apply.
</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all inline-block">
  Explore All Schemes →
</Link>
        </motion.div>
      </motion.div>
    </section>
  );
};


export const Home = () => {
  return (
    <div
  className="bg-white"

>
  <Hero />
  <PainfulResearch />
  <Results />
  {/* <Proof /> */}
  <Community />
  <CTA />
</div>
  );
};
