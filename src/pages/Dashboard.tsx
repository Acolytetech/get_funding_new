import React, { useEffect, useState } from 'react';
import { 
  Home, 
  Building2, 
  Lightbulb, 
  CircleDollarSign, 
  Users2, 
  Briefcase, 
  Menu, 
  LogIn, 
  Plus, 
  Moon, 
  Monitor, 
  Sun,
  X,
  MessageSquare,
  Dock,
  View
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { SCHEMES_DATA, Scheme } from '../data/schemes';
import { INCUBATORS_DATA } from '../data/incubators';

type Tab = 'home' | 'schemes' | 'incubators' | 'pricing' | 'angels' | 'vcs';

export const Dashboard = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [myListTab, setMyListTab] = useState<'schemes' | 'incubators'>('schemes');
  const [schemeSearch, setSchemeSearch] = useState('');
  const [incubatorSearch, setIncubatorSearch] = useState('');
  const [selectedSchemeId, setSelectedSchemeId] = useState<string | null>(null);
  const [selectedIncubatorId, setSelectedIncubatorId] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const themes = ['light', 'dark'] as const;
  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-slate-950',
          sidebar: 'bg-slate-900 border-slate-800',
          header: 'bg-slate-950/80 backdrop-blur-md border-slate-800',
          card: 'bg-slate-900 border-slate-800 hover:bg-slate-800/50',
          text: 'text-white',
          accent: 'text-blue-400',
          button: 'bg-white text-slate-900 hover:bg-slate-100',
          navActive: 'bg-slate-800 text-white',
          navHover: 'hover:bg-slate-800/50 text-slate-200'
        };
      default: // light
        return {
          bg: 'bg-white',
          sidebar: 'bg-white border-slate-100',
          header: 'bg-white/80 backdrop-blur-md border-slate-100',
          card: 'bg-white border-slate-100 hover:bg-slate-50',
          text: 'text-slate-900',
          accent: 'text-blue-600',
          button: 'bg-slate-900 text-white hover:bg-slate-800',
          navActive: 'bg-slate-100 text-slate-900',
          navHover: 'hover:bg-slate-50 text-slate-700'
        };
    }
  };

  const styles = getThemeStyles();

  // Contact Modal State
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactItem, setContactItem] = useState<{ title: string; type: string } | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // My List State
  const [myList, setMyList] = useState<{ id: string; title: string; type: 'scheme' | 'incubator' }[]>([]);

  // Filter States
  const [selectedSchemeType, setSelectedSchemeType] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedFundType, setSelectedFundType] = useState<string | null>(null);
  const [selectedReservation, setSelectedReservation] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedFocusArea, setSelectedFocusArea] = useState<string | null>(null);
  const [selectedCertStatus, setSelectedCertStatus] = useState<string | null>(null);
  const [selectedProgramType, setSelectedProgramType] = useState<string | null>(null);
  const [selectedInstitutionType, setSelectedInstitutionType] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Search states for filters
  const [industrySearch, setIndustrySearch] = useState('');
  const [stageSearch, setStageSearch] = useState('');
  const [fundTypeSearch, setFundTypeSearch] = useState('');
  const [reservationSearch, setReservationSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [instTypeSearch, setInstTypeSearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');

  // Show more states for filters
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllStages, setShowAllStages] = useState(false);
  const [showAllFundTypes, setShowAllFundTypes] = useState(false);
  const [showAllReservations, setShowAllReservations] = useState(false);
  const [showAllInstTypes, setShowAllInstTypes] = useState(false);
  const [showAllStates, setShowAllStates] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    const search = params.get('search');
    const type = params.get('type');
    const industry = params.get('industry');
    const stage = params.get('stage');

    if (tab === 'schemes' || tab === 'incubators' || tab === 'home' || tab === 'pricing') {
      setActiveTab(tab);
    }

    if (search) {
      setSchemeSearch(search);
    }

    if (type === 'Central Government' || type === 'State Government') {
      setSelectedSchemeType(type);
    }

    if (industry) {
      setSelectedIndustry(industry);
    }

    if (stage) {
      setSelectedStage(stage);
    }
  }, [location.search]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'schemes', label: 'Government Schemes', icon: Building2 },
    { id: 'incubators', label: 'Incubators', icon: Lightbulb },
    { id: 'pricing', label: 'Pricing', icon: CircleDollarSign },
  ];

  const upcomingItems = [
    { id: 'angels', label: 'Angel Investors', icon: Users2 },
    { id: 'vcs', label: 'Venture Capitalists', icon: Briefcase },
  ];

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable full-screen mode: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const toggleMyList = (item: { id: string; title: string; type: 'scheme' | 'incubator' }) => {
    setMyList(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.filter(i => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleContactClick = (title: string, type: string) => {
    setContactItem({ title, type });
    setIsContactModalOpen(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Webhook submission
      const webhookUrl = 'https://hook.eu2.make.com/your-webhook-id'; // Placeholder
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactForm,
          itemTitle: contactItem?.title,
          itemType: contactItem?.type,
          timestamp: new Date().toISOString()
        })
      });
      
      alert('Thank you! Your request has been submitted.');
      setIsContactModalOpen(false);
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSchemeDetails = (scheme: Scheme) => {
    return (
      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${styles.bg}`}>
        <div className="max-w-6xl mx-auto p-8 relative z-10">
          <button 
            onClick={() => setSelectedSchemeId(null)}
            className={`flex items-center gap-2 font-bold text-sm mb-8 transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-slate-900' : 'text-white/60 hover:text-white'}`}
          >
            ← Back to all schemes
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Information */}
            <div className="flex-1 space-y-8">
              <div className={`rounded-3xl p-8 shadow-sm border transition-all duration-300 ${styles.card}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${theme === 'light' ? 'bg-blue-50 border-slate-100' : 'bg-white/10 border-white/10'}`}>
                      <Building2 size={32} className={styles.accent} />
                    </div>
                    <div>
                      <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.title}</h1>
                      <div className="flex flex-col md:flex-row w-fit gap-2 mt-2">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                          {scheme.tag}
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                          {scheme.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleMyList({ id: scheme.id, title: scheme.title, type: 'scheme' })}
                    className={`p-3 rounded-2xl transition-all ${
                      myList.find(i => i.id === scheme.id)
                        ? 'bg-white text-slate-900'
                        : (theme === 'light' ? 'bg-slate-100 text-slate-400 hover:text-slate-600' : 'bg-white/10 text-white/40 hover:text-white')
                    }`}
                  >
                    <Plus size={20} className={myList.find(i => i.id === scheme.id) ? 'rotate-45 transition-transform' : ''} />
                  </button>
                </div>

                <div className={`grid grid-cols-3 gap-6 py-6 border-y transition-all duration-300 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                  <div>
                    <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Fund Type</p>
                    <p className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.fundType}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Benefit Size</p>
                    <p className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.investmentSize}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Target Stage</p>
                    <p className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.stage}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>About the Scheme</h3>
                  <p className={`opacity-70 leading-relaxed`}>
                    {scheme.about}
                  </p>
                </div>
              </div>

              <div className={`rounded-3xl p-8 shadow-sm border transition-all duration-300 ${styles.card}`}>
                <h3 className={`text-xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Eligibility Criteria</h3>
                <ul className="space-y-4">
                  {[
                    "Must be an Indian citizen or a registered Indian entity.",
                    "The business must fall under the MSME category as per government guidelines.",
                    "Valid PAN and Aadhaar/Udyam Registration is mandatory.",
                    "Previous financial records might be required depending on the fund size."
                  ].map((item, i) => (
                    <li key={i} className={`flex items-start gap-3 opacity-70`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${theme === 'light' ? 'bg-blue-50' : 'bg-blue-500/20'}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`rounded-3xl p-8 shadow-sm border transition-all duration-300 ${styles.card}`}>
                <h3 className={`text-xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Documents Required</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Udyam Registration Certificate",
                    "Business Incorporation Certificate",
                    "PAN Card (Business & Individual)",
                    "GST Registration Certificate",
                    "Last 3 years ITR (if applicable)",
                    "Detailed Project Report (DPR)"
                  ].map((doc, i) => (
                    <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${theme === 'light' ? 'bg-slate-50 border-slate-100' : 'bg-white/5 border-white/10'}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${theme === 'light' ? 'bg-white text-blue-600' : 'bg-white/10 text-blue-400'}`}>
                        <Briefcase size={20} />
                      </div>
                      <span className={`text-sm font-bold ${theme === 'light' ? 'text-slate-700' : 'text-white/80'}`}>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Lead Gen Form */}
            <div className="w-full lg:w-96">
              <div className={`rounded-3xl p-8 shadow-xl border sticky top-8 transition-all duration-300 ${styles.card}`}>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Apply Now</h3>
                <p className="opacity-50 text-sm mb-8">Fill the form below and our experts will guide you through the application process.</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Message (Optional)</label>
                    <textarea 
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all h-24 resize-none ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="Tell us about your business..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg disabled:opacity-50 ${styles.button}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>

                <div className={`mt-8 pt-8 border-t text-center transition-all duration-300 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                  <p className="text-xs opacity-50 font-bold uppercase tracking-widest mb-4">Our Contact Info</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Users2 size={14} className={styles.accent} />
                      <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>+91 80 1234 5678</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Lightbulb size={14} className={styles.accent} />
                      <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>support@getfunding.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderIncubatorDetails = (incubator: any) => {
    return (
      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${styles.bg}`}>
        <div className="max-w-6xl mx-auto p-8 relative z-10">
          <button 
            onClick={() => setSelectedIncubatorId(null)}
            className={`flex items-center gap-2 font-bold text-sm mb-8 transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-slate-900' : 'text-white/60 hover:text-white'}`}
          >
            ← Back to all incubators
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Information */}
            <div className="flex-1 space-y-8">
              <div className={`rounded-3xl p-8 shadow-sm border transition-all duration-300 ${styles.card}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${theme === 'light' ? 'bg-blue-50 border-slate-100' : 'bg-white/10 border-white/10'}`}>
                      <Lightbulb size={32} className="text-blue-400" />
                    </div>
                    <div>
                      <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{incubator.title}</h1>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                          {incubator.tag}
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                          {incubator.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleMyList({ id: incubator.id, title: incubator.title, type: 'incubator' })}
                    className={`p-3 rounded-2xl transition-all ${
                      myList.find(i => i.id === incubator.id)
                        ? 'bg-white text-slate-900'
                        : (theme === 'light' ? 'bg-slate-100 text-slate-400 hover:text-slate-600' : 'bg-white/10 text-white/40 hover:text-white')
                    }`}
                  >
                    <Plus size={20} className={myList.find(i => i.id === incubator.id) ? 'rotate-45 transition-transform' : ''} />
                  </button>
                </div>

                <div className={`grid grid-cols-2 gap-6 py-6 border-y transition-all duration-300 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                  <div>
                    <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Founding Year</p>
                    <p className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{incubator.foundingYear}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Program Type</p>
                    <p className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{incubator.programType || 'Incubator'}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>About the Incubator</h3>
                  <p className={`opacity-70 leading-relaxed`}>
                    {incubator.about}
                  </p>
                </div>
              </div>

              <div className={`rounded-3xl p-8 shadow-sm border transition-all duration-300 ${styles.card}`}>
                <h3 className={`text-xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>What they offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Mentorship", desc: "Access to a network of experienced entrepreneurs and industry experts." },
                    { title: "Infrastructure", desc: "Co-working spaces, high-speed internet, and meeting rooms." },
                    { title: "Funding Access", desc: "Connections to angel investors, VCs, and government grants." },
                    { title: "Networking", desc: "Regular events, workshops, and community meetups." }
                  ].map((offer, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className={`font-bold flex items-center gap-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {offer.title}
                      </h4>
                      <p className={`text-sm leading-relaxed opacity-70`}>{offer.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Lead Gen Form */}
            <div className="w-full lg:w-96">
              <div className={`rounded-3xl p-8 shadow-xl border sticky top-8 transition-all duration-300 ${styles.card}`}>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Join Program</h3>
                <p className="opacity-50 text-sm mb-8">Apply to join this incubator and take your startup to the next level.</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Startup Name</label>
                    <input 
                      type="text" 
                      required
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="My Awesome Startup"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold opacity-50 uppercase tracking-widest mb-2">Pitch Deck Link (Optional)</label>
                    <input 
                      type="url" 
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="https://drive.google.com/..."
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg disabled:opacity-50 ${styles.button}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply to Incubator'}
                  </button>
                </form>

                <div className={`mt-8 pt-8 border-t text-center transition-all duration-300 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                  <p className="text-xs opacity-50 font-bold uppercase tracking-widest mb-4">Our Contact Info</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Users2 size={14} className={styles.accent} />
                      <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>+91 80 1234 5678</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Lightbulb size={14} className={styles.accent} />
                      <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>support@getfunding.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
         <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto relative z-10">

  {/* HEADER */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 sm:mb-12">
    
    <div>
      <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
        Welcome, User!
      </h1>
      <p className="opacity-50 text-sm sm:text-base">
        Jump back in, or start something new.
      </p>
    </div>

    <button className={`
      flex items-center justify-center gap-2 
      w-full sm:w-auto
      border px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm
      ${theme === 'light' 
        ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50' 
        : 'bg-white/10 border-white/10 text-white hover:bg-white/20'}
    `}>
      <LogIn size={18} className="text-blue-400" />
      Login
    </button>

  </div>

  {/* MY LIST SECTION */}
  <div className={`border-t pt-8 sm:pt-12 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>

    {/* TOP BAR */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
      
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-blue-400 ${theme === 'light' ? 'bg-blue-50' : 'bg-blue-500/20'}`}>
          <Plus size={18} />
        </div>
        <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
          My List
        </h2>
      </div>

      {/* TABS */}
      <div className={`flex w-full sm:w-auto p-1 rounded-xl ${theme === 'light' ? 'bg-slate-100' : 'bg-white/10'}`}>
        
        <button 
          onClick={() => setMyListTab('schemes')}
          className={`
            flex-1 sm:flex-none text-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
            ${myListTab === 'schemes' 
              ? (theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'bg-white/20 text-white') 
              : 'opacity-50 hover:opacity-100'}
          `}
        >
          Gov Schemes
        </button>

        <button 
          onClick={() => setMyListTab('incubators')}
          className={`
            flex-1 sm:flex-none text-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
            ${myListTab === 'incubators' 
              ? (theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'bg-white/20 text-white') 
              : 'opacity-50 hover:opacity-100'}
          `}
        >
          Incubators
        </button>

      </div>

    </div>
    
    {/* CONTENT */}
    <div className={`border border-dashed rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center transition-all ${styles.card}`}>
      
      {myList.filter(i => i.type === (myListTab === 'schemes' ? 'scheme' : 'incubator')).length > 0 ? (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
          
          {myList
            .filter(i => i.type === (myListTab === 'schemes' ? 'scheme' : 'incubator'))
            .map((item) => (
              
              <div 
                key={item.id} 
                className={`border p-4 rounded-xl sm:rounded-2xl flex justify-between items-center shadow-sm transition-all ${theme === 'light' ? 'bg-white border-slate-100' : 'bg-white/5 border-white/10'}`}
              >
                <div className="pr-2">
                  <p className={`font-semibold text-sm sm:text-base ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {item.title}
                  </p>
                  <p className="text-[10px] opacity-50 uppercase tracking-widest">
                    {item.type}
                  </p>
                </div>

                <button 
                  onClick={() => toggleMyList(item)}
                  className="opacity-40 hover:opacity-100 hover:text-red-500 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

            ))}
        </div>

      ) : (
        
        <p className="opacity-50 text-sm sm:text-base">
          Your list is empty.{" "}
          <button 
            onClick={() => setActiveTab(myListTab === 'schemes' ? 'schemes' : 'incubators')} 
            className="text-blue-400 hover:underline font-medium"
          >
            Explore {myListTab}
          </button>
        </p>

      )}
    </div>
  </div>
</div>
        );

      case 'schemes':
        if (selectedSchemeId) {
          const scheme = SCHEMES_DATA.find(s => s.id === selectedSchemeId);
          if (scheme) return renderSchemeDetails(scheme);
        }
        return (
          <div className="flex-1 flex flex-col relative z-10">
            {/* Hero Section */}
            <div className="px-4 md:px-8 pt-8">
              <div
  className={`relative rounded-3xl p-12 overflow-hidden min-h-[320px] flex items-center transition-all duration-500 ${
    theme === "light"
      ? ""
      : "bg-white/5 backdrop-blur-xl border border-white/10"
  }`}
  style={{
    background:
      theme === "light"
        ? "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 20.67%, #DFF5F8 65.87%)"
        : "radial-gradient(60% 60% at 50% 40%, rgba(22,29,131,0.4) 0%, rgba(0,0,0,0.9) 100%)",
  }}
>
                <div className="relative z-10 max-w-2xl">
                  <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    All Verified <span className='text-purple-700'>Government Schemes</span> in One Place
                  </h1>
                  <p className="text-gray-900/70 text-lg mb-8 max-w-lg">
                    We've analyzed and organized all Indian government schemes that help your business grow financially and get certified.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['DSTO', 'BIRAC', 'DSIR', 'NEWGEN IEDC', 'MSME', 'STARTUP INDIA'].map((tag) => (
                      <span key={tag} className="bg-purple-700/60 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-[14px] font-bold border border-white/10 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Navigation */}
                {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <span className="text-xl">‹</span>
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <span className="text-xl">›</span>
                </button> */}

                {/* Placeholder Image on Right */}
                <div className="md:absolute hidden right-12 top-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <Users2 size={80} className="text-white/20 mx-auto mb-4" />
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Verified Data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Header & Search */}
            <div className="px-4 md:px-8 py-8 ">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className={`text-xl font-medium ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  Showing <span className="font-bold">{
                    SCHEMES_DATA.filter(s => {
                      const matchesSearch = s.title.toLowerCase().includes(schemeSearch.toLowerCase()) || 
                                          s.about.toLowerCase().includes(schemeSearch.toLowerCase());
                      const matchesType = !selectedSchemeType || s.type === selectedSchemeType;
                      const matchesFocus = !selectedFocusArea || s.focus === selectedFocusArea;
                      const matchesCert = !selectedCertStatus || (selectedCertStatus === 'yes' ? s.isCertificate : !s.isCertificate);
                      const matchesIndustry = !selectedIndustry || s.industry === selectedIndustry;
                      const matchesStage = !selectedStage || s.stage === selectedStage;
                      const matchesFundType = !selectedFundType || s.fundType.includes(selectedFundType);
                      const matchesReservation = !selectedReservation || s.reservation.includes(selectedReservation);
                      const matchesState = !selectedState || s.state === selectedState || s.state === 'All India';
                      
                      return matchesSearch && matchesType && matchesFocus && matchesCert && matchesIndustry && matchesStage && matchesFundType && matchesReservation && matchesState;
                    }).length
                  }</span> Schemes for <span className={`italic font-bold ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}>"Business Growth & Certification"</span>
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="relative ">
                    <input 
                      type="text" 
                      placeholder="Search schemes..." 
                      value={schemeSearch}
                      onChange={(e) => setSchemeSearch(e.target.value)}
                      className={`rounded-xl pl-4 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 w-full md:w-64 transition-all ${theme === 'light' ? 'bg-slate-50 border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                    />
                    {/* <Menu size={18} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" /> */}
                  </div>
                  <div className="hidden md:flex items-center gap-3">
                    <span className={`text-sm ${theme === 'light' ? 'text-slate-700' : 'text-white/50'}`}>Sort By:</span>
                    <select className={`rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}>
                      <option className={theme === 'light' ? 'text-slate-900' : 'text-white bg-slate-900'}>Newest</option>
                      <option className={theme === 'light' ? 'text-slate-900' : 'text-white bg-slate-900'}>Oldest</option>
                      <option className={theme === 'light' ? 'text-slate-900' : 'text-white bg-slate-900'}>Popular</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Filter Sidebar */}
                <aside className="w-full  md:w-72 flex-shrink-0">
                  <div className={`rounded-3xl p-6 mb-6 sticky top-6 transition-all duration-500 max-h-[40vh] md:max-h-[calc(84vh)] overflow-y-auto custom-scrollbar ${theme === 'light' ? 'bg-slate-100' : 'bg-white/5 backdrop-blur-xl border border-white/10'}`}>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Premium Filters</h3>
                        <button 
                          onClick={() => {
                            setSelectedSchemeType(null);
                            setSelectedFocusArea(null);
                            setSelectedCertStatus(null);
                            setSelectedIndustry(null);
                            setSelectedStage(null);
                            setSelectedFundType(null);
                            setSelectedReservation(null);
                            setSelectedState(null);
                            setIndustrySearch('');
                            setStageSearch('');
                            setFundTypeSearch('');
                            setReservationSearch('');
                            setStateSearch('');
                            setShowAllIndustries(false);
                            setShowAllStages(false);
                            setShowAllFundTypes(false);
                            setShowAllReservations(false);
                            setShowAllStates(false);
                          }}
                          className={`text-xs font-bold hover:underline ${theme === 'light' ? 'text-slate-700' : 'text-white/60'}`}
                        >
                          Clear filters
                        </button>
                      </div>
                    
                    <div className="space-y-8">
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Scheme Type</p>
                        <div className="space-y-3">
                          {['Central Government', 'State Government','CGPS', ].map((type) => (
                            <label key={type} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="radio" 
                                name="schemeType" 
                                className="hidden" 
                                checked={selectedSchemeType === type}
                                onChange={() => setSelectedSchemeType(type)}
                              />
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedSchemeType === type ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                {selectedSchemeType === type && <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                              </div>
                              <span className={`text-sm font-medium transition-colors ${selectedSchemeType === type ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Industry</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Search industry..." 
                            value={industrySearch}
                            onChange={(e) => setIndustrySearch(e.target.value)}
                            className={`w-full rounded-xl pl-4 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          {/* <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" /> */}
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="industry" 
                              className="hidden" 
                              checked={selectedIndustry === null}
                              onChange={() => setSelectedIndustry(null)}
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedIndustry === null ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                              {selectedIndustry === null && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                            </div>
                            <span className={`text-xs font-medium transition-colors ${selectedIndustry === null ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>All Industries</span>
                          </label>
                          {['Biotechnology', 'Electronics and Information Technology', 'Science and Technology', 'General', 'Scientific and Industrial Research', 'DEFENCE', 'Communication', 'Social Justice', 'Space', 'Textiles', 'Power', 'Agriculture', 'Railways', 'Others', 'MSME', 'Challenges']
                            .filter(ind => ind.toLowerCase().includes(industrySearch.toLowerCase()))
                            .slice(0, showAllIndustries ? undefined : 6)
                            .map(ind => (
                              <label key={ind} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="industry" 
                                  className="hidden" 
                                  checked={selectedIndustry === ind}
                                  onChange={() => setSelectedIndustry(ind)}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedIndustry === ind ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedIndustry === ind && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-xs font-medium transition-colors ${selectedIndustry === ind ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{ind}</span>
                              </label>
                            ))}
                        </div>
                        {['Biotechnology', 'Electronics and Information Technology', 'Science and Technology', 'General', 'Scientific and Industrial Research', 'DEFENCE', 'Communication', 'Social Justice', 'Space', 'Textiles', 'Power', 'Agriculture', 'Railways', 'Others', 'MSME', 'Challenges'].filter(ind => ind.toLowerCase().includes(industrySearch.toLowerCase())).length > 6 && (
                          <button 
                            onClick={() => setShowAllIndustries(!showAllIndustries)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllIndustries ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllIndustries ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Stage</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Start typing..." 
                            value={stageSearch}
                            onChange={(e) => setStageSearch(e.target.value)}
                            className={`w-full rounded-xl pl-4 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          {/* <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" /> */}
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="stage" 
                              className="hidden" 
                              checked={selectedStage === null}
                              onChange={() => setSelectedStage(null)}
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedStage === null ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                              {selectedStage === null && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                            </div>
                            <span className={`text-xs font-medium transition-colors ${selectedStage === null ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>All Stages</span>
                          </label>
                          {['Idea stage to POC', 'Residency', 'Research & Innovation', 'Post Poc', 'Growth Stage', 'Not specified', 'Idea Stage', 'Scale up Stage']
                            .filter(stage => stage.toLowerCase().includes(stageSearch.toLowerCase()))
                            .slice(0, showAllStages ? undefined : 6)
                            .map(stage => (
                              <label key={stage} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="stage" 
                                  className="hidden" 
                                  checked={selectedStage === stage}
                                  onChange={() => setSelectedStage(stage)}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedStage === stage ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedStage === stage && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-xs font-medium transition-colors ${selectedStage === stage ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{stage}</span>
                              </label>
                            ))}
                        </div>
                        {['Idea stage to POC', 'Residency', 'Research & Innovation', 'Post Poc', 'Growth Stage', 'Not specified', 'Idea Stage', 'Scale up Stage'].filter(stage => stage.toLowerCase().includes(stageSearch.toLowerCase())).length > 6 && (
                          <button 
                            onClick={() => setShowAllStages(!showAllStages)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllStages ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllStages ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Fund Type</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Search fund type..." 
                            value={fundTypeSearch}
                            onChange={(e) => setFundTypeSearch(e.target.value)}
                            className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="fundType" 
                              className="hidden" 
                              checked={selectedFundType === null}
                              onChange={() => setSelectedFundType(null)}
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedFundType === null ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                              {selectedFundType === null && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                            </div>
                            <span className={`text-xs font-medium transition-colors ${selectedFundType === null ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>All Fund Types</span>
                          </label>
                          {[
                            'Grant', 'Equity', 'Not specified', 'Loan', 'Grant , Equity', 
                            'Effective Interest Rate', 'Grant , Loan', 'Convertible Debentures', 
                            'Grant , Convertible Debentures', 'Subsidy', 'Reimbursement', 
                            'Allowance', 'Equity , Convertible Debentures', 
                            'Equity , Loan , Convertible Debentures', 'Equity , Loan', 
                            'Loan , Subsidy', 'Reimbursement , Subsidy', 'Grant , Reimbursement'
                          ]
                            .filter(fund => fund.toLowerCase().includes(fundTypeSearch.toLowerCase()))
                            .slice(0, showAllFundTypes ? undefined : 6)
                            .map(fund => (
                              <label key={fund} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="fundType" 
                                  className="hidden" 
                                  checked={selectedFundType === fund}
                                  onChange={() => setSelectedFundType(fund)}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedFundType === fund ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedFundType === fund && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-xs font-medium transition-colors ${selectedFundType === fund ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{fund}</span>
                              </label>
                            ))}
                        </div>
                        {[
                          'Grant', 'Equity', 'Not specified', 'Loan', 'Grant , Equity', 
                          'Effective Interest Rate', 'Grant , Loan', 'Convertible Debentures', 
                          'Grant , Convertible Debentures', 'Subsidy', 'Reimbursement', 
                          'Allowance', 'Equity , Convertible Debentures', 
                          'Equity , Loan , Convertible Debentures', 'Equity , Loan', 
                          'Loan , Subsidy', 'Reimbursement , Subsidy', 'Grant , Reimbursement'
                        ].filter(fund => fund.toLowerCase().includes(fundTypeSearch.toLowerCase())).length > 6 && (
                          <button 
                            onClick={() => setShowAllFundTypes(!showAllFundTypes)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllFundTypes ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllFundTypes ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Reservation</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Search reservation..." 
                            value={reservationSearch}
                            onChange={(e) => setReservationSearch(e.target.value)}
                            className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="reservation" 
                              className="hidden" 
                              checked={selectedReservation === null}
                              onChange={() => setSelectedReservation(null)}
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReservation === null ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                              {selectedReservation === null && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                            </div>
                            <span className={`text-xs font-medium transition-colors ${selectedReservation === null ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>All Reservations</span>
                          </label>
                          {[
                            'Youth', 'Unreserved', 'SC/ST , Backward Class', 'Senior Citizen', 
                            'SC/ST , Women', 'SC/ST', 'SC/ST , Youth', 'Women', 
                            'Women , Youth', 'Women , SC/ST'
                          ]
                            .filter(res => res.toLowerCase().includes(reservationSearch.toLowerCase()))
                            .slice(0, showAllReservations ? undefined : 6)
                            .map(res => (
                              <label key={res} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="reservation" 
                                  className="hidden" 
                                  checked={selectedReservation === res}
                                  onChange={() => setSelectedReservation(res)}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReservation === res ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedReservation === res && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-xs font-medium transition-colors ${selectedReservation === res ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{res}</span>
                              </label>
                            ))}
                        </div>
                        {[
                          'Youth', 'Unreserved', 'SC/ST , Backward Class', 'Senior Citizen', 
                          'SC/ST , Women', 'SC/ST', 'SC/ST , Youth', 'Women', 
                          'Women , Youth', 'Women , SC/ST'
                        ].filter(res => res.toLowerCase().includes(reservationSearch.toLowerCase())).length > 6 && (
                          <button 
                            onClick={() => setShowAllReservations(!showAllReservations)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllReservations ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllReservations ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>State</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Search state..." 
                            value={stateSearch}
                            onChange={(e) => setStateSearch(e.target.value)}
                            className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="state" 
                              className="hidden" 
                              checked={selectedState === null}
                              onChange={() => setSelectedState(null)}
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedState === null ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                              {selectedState === null && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                            </div>
                            <span className={`text-xs font-medium transition-colors ${selectedState === null ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>All India / All States</span>
                          </label>
                          {['Odisha', 'Kerala', 'Uttar Pradesh', 'Telangana', 'Karnataka', 'Gujarat', 'Tamil Nadu', 'Punjab', 'Rajasthan', 'Bihar', 'Goa', 'Jammu and Kashmir', 'Madhya Pradesh', 'Maharashtra']
                            .filter(state => state.toLowerCase().includes(stateSearch.toLowerCase()))
                            .sort()
                            .slice(0, showAllStates ? undefined : 6)
                            .map(state => (
                              <label key={state} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="state" 
                                  className="hidden" 
                                  checked={selectedState === state}
                                  onChange={() => setSelectedState(state)}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedState === state ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedState === state && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-xs font-medium transition-colors ${selectedState === state ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{state}</span>
                              </label>
                            ))}
                        </div>
                        {['Odisha', 'Kerala', 'Uttar Pradesh', 'Telangana', 'Karnataka', 'Gujarat', 'Tamil Nadu', 'Punjab', 'Rajasthan', 'Bihar', 'Goa', 'Jammu and Kashmir', 'Madhya Pradesh', 'Maharashtra'].filter(state => state.toLowerCase().includes(stateSearch.toLowerCase())).length > 6 && (
                          <button 
                            onClick={() => setShowAllStates(!showAllStates)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllStates ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllStates ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Focus Area</p>
                        <div className="space-y-3">
                          {['Financial Growth', 'Certifications', 'Technology', 'Export Support'].map((area) => (
                            <label key={area} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="radio" 
                                name="focusArea" 
                                className="hidden" 
                                checked={selectedFocusArea === area}
                                onChange={() => setSelectedFocusArea(area)}
                              />
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedFocusArea === area ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                {selectedFocusArea === area && <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                              </div>
                              <span className={`text-sm font-medium transition-colors ${selectedFocusArea === area ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{area}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Certification Status</p>
                        <div className="space-y-3">
                          {[
                            { label: 'All', value: null },
                            { label: 'Provides Certificate', value: 'yes' },
                            { label: 'No Certificate', value: 'no' }
                          ].map((option) => (
                            <label key={option.label} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="radio" 
                                name="certStatus" 
                                className="hidden" 
                                checked={selectedCertStatus === option.value}
                                onChange={() => setSelectedCertStatus(option.value)}
                              />
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedCertStatus === option.value ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                {selectedCertStatus === option.value && <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                              </div>
                              <span className={`text-sm font-medium transition-colors ${selectedCertStatus === option.value ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Scheme Cards List */}
                <div className="flex-1 space-y-6">
                  {SCHEMES_DATA.filter(s => {
                    const matchesSearch = s.title.toLowerCase().includes(schemeSearch.toLowerCase()) || 
                                        s.about.toLowerCase().includes(schemeSearch.toLowerCase());
                    const matchesType = !selectedSchemeType || s.type === selectedSchemeType;
                    const matchesFocus = !selectedFocusArea || s.focus === selectedFocusArea;
                    const matchesCert = !selectedCertStatus || (selectedCertStatus === 'yes' ? s.isCertificate : !s.isCertificate);
                    const matchesIndustry = !selectedIndustry || s.industry === selectedIndustry;
                    const matchesStage = !selectedStage || s.stage === selectedStage;
                    const matchesFundType = !selectedFundType || s.fundType.includes(selectedFundType);
                    const matchesReservation = !selectedReservation || s.reservation.includes(selectedReservation);
                    const matchesState = !selectedState || s.state === selectedState || s.state === 'All India';
                    
                    return matchesSearch && matchesType && matchesFocus && matchesCert && matchesIndustry && matchesStage && matchesFundType && matchesReservation && matchesState;
                  }).map((scheme, idx) => (
                    <div key={scheme.id || idx} className={` border rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 ${styles.card}`}>

                      {/* Left: Logo & Title */}
                      <div className="w-48 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border ${theme === 'light' ? 'bg-green-50 border-slate-100' : 'bg-white/5 border-white/10'}`}>
                          <Building2 size={32} className="text-green-700/70" />
                        </div>
                        <h3 className={`text-xl font-bold mb-2 leading-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.title}</h3>
                        <p className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2 ${
                          scheme.tag === 'CERTIFICATION' ? (theme === 'light' ? 'bg-purple-50 text-blue-700' : 'bg-purple-500/20 text-purple-400') : (theme === 'light' ? 'bg-purple-50 text-purple-700' : 'bg-purple-500/20 text-blue-400')
                        }`}>
                          {scheme.type}
                        </p>
                        <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-6 ${
                          scheme.tag === 'CERTIFICATION' ? (theme === 'light' ? 'bg-purple-50 text-blue-700' : 'bg-purple-500/20 text-purple-400') : (theme === 'light' ? 'bg-purple-50 text-purple-700' : 'bg-purple-500/20 text-blue-400')
                        }`}>
                          {scheme.tag}
                        </span>
                        <div className="flex items-center gap-2 opacity-70">
                          <span className="text-lg font-bold">★</span>
                          <span className="text-sm font-medium">--/10</span>
                          <button className="text-[10px] font-bold text-blue-400 hover:underline ml-2">Add review</button>
                        </div>
                      </div>

                      {/* Middle: About */}
                      <div className={`flex-1 border-l md:pl-8 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                        <p className="text-[12px] font-bold opacity-70 uppercase tracking-widest mb-4">About the Scheme</p>
                        <p className={`text-base leading-relaxed mb-4 ${theme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>
                          {scheme.about}
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="text-green-600/70 cursor-pointer font-bold text-xs hover:underline flex items-center gap-1" 
                       onClick={() => {
  setSelectedSchemeId(scheme.id);
  document.getElementById("your-container-id")?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}}
                          >
                            Read More <View size={12} />
                          </button>
                          {/* <button className="text-blue-400 font-bold text-xs hover:underline">Eligibility Criteria</button> */}
                        </div>
                      </div>

                      {/* Right: Details & Actions */}
                      <div className={`w-full md:w-100 flex-shrink-0 border-l md:pl-8 grid grid-cols-2 justify-between  ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                        <div className="space-y-4">
                          <div>
                            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Fund Type</p>
                            <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.fundType}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Benefit Size</p>
                            <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.investmentSize}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Target Stage</p>
                            <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{scheme.stage}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mt-8">
                         <button 
  onClick={() =>
    toggleMyList({ id: scheme.id, title: scheme.title, type: 'scheme' })
  }
  className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border ${
    myList.find(i => i.id === scheme.id)
      ? 'bg-purple-900 text-white border-purple-900'
      : 'bg-white text-purple-900 border-purple-900 hover:bg-purple-900 hover:text-white'
  }`}
>
  <Plus size={16} />
  {myList.find(i => i.id === scheme.id) ? 'Remove' : 'My list'}
</button>
                          <button 
                            onClick={() => setSelectedSchemeId(scheme.id)}
                            className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${theme === 'light' ? 'border border-green-700 text-green-700  hover:bg-green-700/80 hover:text-white' : 'bg-green-500/20 hover:bg-green-500/30 hover:text-white'}`}
                          >
                            View Details
                          </button>
                          <button 
  onClick={() => handleContactClick(scheme.title, 'Government Scheme')}
  className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all ${
    theme === 'light'
      ? 'border-blue-500 border text-blue-500 hover:text-white  hover:bg-blue-600'
      : 'border-blue-500/20 text-blue-400 hover:bg-blue-500/30 '
  }`}
>
  Contact details
</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'incubators':
        if (selectedIncubatorId) {
          const incubator = INCUBATORS_DATA.find(i => i.id === selectedIncubatorId);
          if (incubator) return renderIncubatorDetails(incubator);
        }
        return (
          <div className="flex-1 flex flex-col relative z-10">
            {/* Hero Section */}
            <div className="px-8 pt-8">
            <div
  className={`relative rounded-3xl p-6 md:p-12 overflow-hidden min-h-[320px] flex items-center transition-all duration-500 ${
    theme === "light"
      ? ""
      : "bg-white/5 backdrop-blur-xl border border-white/10"
  }`}
  style={{
    background:
      theme === "light"
        ? "radial-gradient(66.09% 66.09% at 50.04% 33.91%, #FFFFFF 20.67%, #DFF5F8 35.87%)"
        : "radial-gradient(60% 60% at 50% 40%, rgba(22,29,131,0.4) 0%, rgba(0,0,0,0.9) 100%)",
  }}
>
                <div className="relative z-10 max-w-2xl">
                  <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
                    Incubators
                  </h1>
                  <p className="text-black/60 text-lg mb-8 max-w-lg">
                    Discover incubators that can help grow your venture.
                  </p>
                   <div className="flex flex-wrap gap-3">
                    {['T-HUB', 'FITT', 'SID', 'STARTUP OASIS', 'CCAMP', 'MSME', 'STARTUP INDIA'].map((tag) => (
                      <span key={tag} className="bg-sky-500/30 backdrop-blur-md text-black/70 px-4 py-1.5 rounded-lg text-[14px] font-bold border border-white/10 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Navigation */}
                {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <span className="text-xl">‹</span>
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <span className="text-xl">›</span>
                </button> */}

                {/* Placeholder Image on Right */}
                <div className="hidden md:absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <Users2 size={80} className="text-white/20 mx-auto mb-4" />
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Verified Incubators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Header & Search */}
            <div className="px-8 py-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className={`text-xl font-medium ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  Showing <span className="font-bold">{INCUBATORS_DATA.length}</span> Results for <span className={`italic font-bold ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}>"Incubators"</span>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search incubators..." 
                      value={incubatorSearch}
                      onChange={(e) => setIncubatorSearch(e.target.value)}
                      className={`rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 w-64 transition-all ${theme === 'light' ? 'bg-slate-50 border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                    />
                    <Menu size={18} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${theme === 'light' ? 'text-slate-700' : 'text-white/50'}`}>Sort By:</span>
                    <select className={`rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}>
                      <option className={theme === 'light' ? 'text-slate-900' : 'text-white bg-slate-900'}>Newest</option>
                      <option className={theme === 'light' ? 'text-slate-900' : 'text-white bg-slate-900'}>Oldest</option>
                      <option className={theme === 'light' ? 'text-slate-900' : 'text-white bg-slate-900'}>Popular</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex gap-8 flex flex-col md:flex-row ">
                {/* Filter Sidebar */}
                <aside className="w-full md:w-72 flex-shrink-0">
                  <div className={`rounded-3xl p-6 mb-6 sticky top-6 transition-all duration-500 max-h-[30vh] md:max-h-[calc(84vh)] overflow-y-auto custom-scrollbar ${theme === 'light' ? 'bg-slate-100' : 'bg-white/5 backdrop-blur-xl border border-white/10'}`}>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className={`text-xl font-bold leading-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Premium Filters</h3>
                      <button 
                        onClick={() => {
                          setSelectedLocation(null);
                          setSelectedProgramType(null);
                          setSelectedInstitutionType([]);
                          setLocationSearch('');
                          setInstTypeSearch('');
                          setShowAllInstTypes(false);
                          setShowAllLocations(false);
                        }}
                        className={`text-[10px] font-bold hover:underline text-right ${theme === 'light' ? 'text-slate-700' : 'text-white/60'}`}
                      >
                        Clear filters
                      </button>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Location</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Search location..." 
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                            className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="location" 
                              className="hidden" 
                              checked={selectedLocation === null}
                              onChange={() => setSelectedLocation(null)}
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedLocation === null ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                              {selectedLocation === null && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                            </div>
                            <span className={`text-xs font-medium transition-colors ${selectedLocation === null ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>All Locations</span>
                          </label>
                          {Array.from(new Set(INCUBATORS_DATA.map(i => i.location)))
                            .filter(loc => loc.toLowerCase().includes(locationSearch.toLowerCase()))
                            .sort()
                            .slice(0, showAllLocations ? undefined : 6)
                            .map(loc => (
                              <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="location" 
                                  className="hidden" 
                                  checked={selectedLocation === loc}
                                  onChange={() => setSelectedLocation(loc)}
                                />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedLocation === loc ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedLocation === loc && <div className={`w-1.5 h-1.5 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-xs font-medium transition-colors ${selectedLocation === loc ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{loc}</span>
                              </label>
                            ))}
                        </div>
                        {Array.from(new Set(INCUBATORS_DATA.map(i => i.location))).filter(loc => loc.toLowerCase().includes(locationSearch.toLowerCase())).length > 6 && (
                          <button 
                            onClick={() => setShowAllLocations(!showAllLocations)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllLocations ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllLocations ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Program Type</p>
                        <div className="space-y-3">
                          {['Incubator', 'Both', 'Accelerator'].map((type) => (
                            <label key={type} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="radio" 
                                name="programType" 
                                className="hidden" 
                                checked={selectedProgramType === type}
                                onChange={() => setSelectedProgramType(type)}
                              />
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedProgramType === type ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                {selectedProgramType === type && <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                              </div>
                              <span className={`text-sm font-medium transition-colors ${selectedProgramType === type ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-white/40'}`}>Institution Type</p>
                        <div className="relative mb-3">
                          <input 
                            type="text" 
                            placeholder="Search institution..." 
                            value={instTypeSearch}
                            onChange={(e) => setInstTypeSearch(e.target.value)}
                            className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-white border border-slate-200 text-slate-700' : 'bg-white/5 border border-white/10 text-white'}`}
                          />
                          <Menu size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                        </div>
                        <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          {['IIT', 'Engineering College', 'IIM/Business School', 'Central University', 'State University', 'Private College', 'Deemed-to-be University', 'Independent/Non-academic']
                            .filter(inst => inst.toLowerCase().includes(instTypeSearch.toLowerCase()))
                            .slice(0, showAllInstTypes ? undefined : 5)
                            .map((inst) => (
                              <label key={inst} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  className="hidden" 
                                  checked={selectedInstitutionType.includes(inst)}
                                  onChange={() => {
                                    setSelectedInstitutionType(prev => 
                                      prev.includes(inst) ? prev.filter(i => i !== inst) : [...prev, inst]
                                    );
                                  }}
                                />
                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${selectedInstitutionType.includes(inst) ? (theme === 'light' ? 'border-slate-900 bg-slate-900' : 'border-white bg-white') : (theme === 'light' ? 'border-slate-400 group-hover:border-slate-600' : 'border-white/20 group-hover:border-white/40')}`}>
                                  {selectedInstitutionType.includes(inst) && <div className={`w-2.5 h-2.5 ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`} />}
                                </div>
                                <span className={`text-sm font-medium transition-colors ${selectedInstitutionType.includes(inst) ? (theme === 'light' ? 'text-slate-900' : 'text-white') : (theme === 'light' ? 'text-slate-700' : 'text-white/60')}`}>{inst}</span>
                              </label>
                            ))}
                        </div>
                        {['IIT', 'Engineering College', 'IIM/Business School', 'Central University', 'State University', 'Private College', 'Deemed-to-be University', 'Independent/Non-academic'].filter(inst => inst.toLowerCase().includes(instTypeSearch.toLowerCase())).length > 5 && (
                          <button 
                            onClick={() => setShowAllInstTypes(!showAllInstTypes)}
                            className="text-[10px] font-bold text-blue-400 hover:underline mt-2 flex items-center gap-1"
                          >
                            {showAllInstTypes ? 'Show Less' : 'Show More'} <Plus size={10} className={showAllInstTypes ? 'rotate-45' : ''} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Incubator Cards List */}
                <div className="flex-1 space-y-6">
                  {INCUBATORS_DATA.filter(i => {
                    const matchesSearch = i.title.toLowerCase().includes(incubatorSearch.toLowerCase()) || 
                                        i.about.toLowerCase().includes(incubatorSearch.toLowerCase());
                    const matchesLocation = !selectedLocation || i.location === selectedLocation;
                    const matchesProgram = !selectedProgramType || i.programType === selectedProgramType;
                    const matchesInst = selectedInstitutionType.length === 0 || selectedInstitutionType.includes(i.instType || '');
                    return matchesSearch && matchesLocation && matchesProgram && matchesInst;
                  }).map((incubator, idx) => (
                    <div key={idx} className={`border rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 ${styles.card}`}>
                      {/* Left: Logo & Title */}
                      <div className="w-48 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border overflow-hidden ${theme === 'light' ? 'bg-purple-100 border-slate-100 text-purple-900' : 'bg-white/5 border-white/10'}`}>
                          <div className="text-[12px] font-bold text-center px-1">{incubator.logo}</div>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 leading-tight uppercase ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{incubator.title}</h3>
                        <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-6 ${theme === 'light' ? 'bg-blue-50 text-blue-700' : 'bg-blue-500/20 text-blue-400'}`}>
                          {incubator.tag}
                        </span>
                        <div className="flex items-center gap-2 opacity-40">
                          <span className="text-lg font-bold">★</span>
                          <span className="text-sm font-medium">--/10</span>
                          <button className="text-[10px] font-bold text-blue-600 hover:underline ml-2">Add review</button>
                        </div>
                      </div>

                      {/* Middle: About */}
                      <div className={`flex-1 border-l md:pl-8 ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                        <p className="text-[14px] font-bold opacity-40 uppercase tracking-widest mb-4">About</p>
                        <p className={`text-base leading-relaxed mb-4 ${theme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>
                          {incubator.about} <button className="text-blue-400 font-bold hover:underline">See More</button>
                        </p>
                      </div>

                      {/* Right: Details & Actions */}
                      <div className={`w-full md:w-100 flex-shrink-0 border-l pl-8 flex flex-row items-center justify-between ${theme === 'light' ? 'border-slate-100' : 'border-white/10'}`}>
                        <div className="space-y-4">
                          <div>
                            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Location</p>
                            <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{incubator.location}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Founding Year</p>
                            <p className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{incubator.foundingYear}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mt-8">
                          <button 
                            onClick={() => toggleMyList({ id: incubator.id, title: incubator.title, type: 'incubator' })}
                            className={`w-full py-2.5 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                              myList.find(i => i.id === incubator.id)
                               ? 'bg-purple-900 text-white border-purple-900'
      : 'bg-white text-purple-900 border-purple-900 hover:bg-purple-900 hover:text-white'
                            }`}
                          >
                            <Plus size={16} /> {myList.find(i => i.id === incubator.id) ? 'Remove' : 'My list'}
                          </button>
                          <button 
                            onClick={() => setSelectedIncubatorId(incubator.id)}
                             className={`w-full py-2.5 rounded-xl font-bold text-sm border transition-all ${theme === 'light' ? 'border-green-700 hover:bg-green-700 text-green-700 hover:text-white hover:bg-green-700/80' : 'bg-green-500/20 text-blue-400 hover:bg-green-500/30'}`}
                          >
                            View Details
                          </button>

                          
                          <button 
                            onClick={() => handleContactClick(incubator.title, 'Incubator')}
                            className={`w-full py-2.5 rounded-xl border font-bold text-sm transition-all ${theme === 'light' ? 'hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500' : 'bg-blue-500/20 text-blue-400 hover:bg-pink-500/30'}`}
                          >
                            Contact details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'pricing':
        return (
        <div className="p-8 max-w-5xl mx-auto relative z-10">
  
  {/* Heading */}
  <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
    Get Expert Guidance for Government Schemes
  </h1>

  <p className="opacity-70 text-lg mb-12">
    We help you find the best schemes, check eligibility, and handle documentation — so you don’t miss any opportunity.
  </p>

  {/* Pricing Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: "Starter",
        price: "₹4999",
        features: [
          "Basic Scheme Suggestions",
          "Eligibility Check",
          "General Guidance",
        ],
      },
      {
        name: "Professional",
        price: "₹19,999",
        popular: true,
        features: [
          "Personalized Scheme Recommendation",
          "Complete Eligibility Analysis",
          "Documentation Checklist",
          "Application Guidance",
          "Priority Support",
        ],
      },
      {
        name: "Business Pro",
        price: "Custom",
        features: [
          "End-to-End Consultation",
          "Scheme Application Support",
          "Government Liaison Help",
          "Dedicated Expert",
          "Multiple Scheme Strategy",
        ],
      },
    ].map((plan) => (
      <div
        key={plan.name}
        className={`p-8 rounded-3xl border transition-all duration-500 relative 
        ${plan.popular 
          ? "border-blue-500 shadow-xl shadow-blue-500/10" 
          : theme === "light" 
          ? "border-slate-100" 
          : "border-white/10"} 
        ${styles.card}`}
      >
        {/* Popular Tag */}
        {plan.popular && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold">
            MOST POPULAR
          </span>
        )}

        {/* Plan Name */}
        <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
          {plan.name}
        </h3>

        {/* Price */}
        <div className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
          {plan.price}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm opacity-70">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`w-full py-3 rounded-xl font-bold transition-all ${
            plan.popular
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : theme === "light"
              ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}

        >
          
          Book Consultation
        </button>
      </div>
    ))}
  </div>

  {/* Trust Line */}
  <p className="text-center mt-10 opacity-60 text-sm">
    Trusted by startups, MSMEs & growing businesses across India 🇮🇳
  </p>

</div>
        );
      case 'angels':
      case 'vcs':
        return (
          <div className="p-8 max-w-5xl mx-auto text-center py-24 relative z-10">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-400 ${theme === 'light' ? 'bg-blue-50' : 'bg-blue-500/20'}`}>
              <Users2 size={40} />
            </div>
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              {activeTab === 'angels' ? 'Angel Investors' : 'Venture Capitalists'} Database
            </h1>
            <p className="opacity-50 text-lg mb-8 max-w-lg mx-auto">
              We are currently verifying and indexing thousands of {activeTab === 'angels' ? 'angel investors' : 'venture capitalists'} to provide you with the most accurate data.
            </p>
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold ${theme === 'light' ? 'bg-blue-50 text-blue-700' : 'bg-blue-500/20 text-blue-400'}`}>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Coming Soon - Stay Tuned!
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8 flex items-center justify-center h-full text-slate-400">
            Content for {activeTab} coming soon...
          </div>
        );
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden transition-all duration-500 ${styles.bg} ${styles.text}`}>
      {/* Background Animated Blobs for Glass Effect */}
      {theme === 'dark' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-blue-500"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0], 
              y: [0, 100, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-[100px] opacity-10 bg-indigo-500"
          />
        </div>
      )}

      {/* Sidebar */}
{isSidebarOpen && (
  <div
    onClick={() => setIsSidebarOpen(false)}
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
  />
)}
   <motion.aside
  initial={false}
  animate={{
    x: window.innerWidth >= 1024 ? 0 : (isSidebarOpen ? 0 : "-100%")
  }}
  transition={{ type: "tween", duration: 0.3 }}
  className={`
    fixed top-0 left-0 h-full w-[280px]
    lg:static lg:translate-x-0
    z-40
    border-r flex flex-col
    ${styles.sidebar}
  `}
>
  <div className="p-6 flex items-center justify-between">
    <Link
      to="/"
      className={`text-2xl font-bold ${
        theme === "light" ? "text-slate-900" : "text-white"
      }`}
    >
      StartupFlora
    </Link>

    {/* Right Icons */}
    <div
      className={`flex items-center gap-1 p-1 rounded-lg ${
        theme === "light" ? "bg-slate-100" : "bg-white/10"
      }`}
    >
      <button
        onClick={cycleTheme}
        className={`p-1.5 rounded-md ${
          theme === "light"
            ? "text-slate-600 hover:bg-white"
            : "text-white hover:bg-white/10"
        }`}
      >
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <button
        onClick={toggleFullScreen}
        className={`p-1.5 rounded-md ${
          theme === "light"
            ? "text-slate-600 hover:bg-white"
            : "text-white hover:bg-white/10"
        }`}
      >
        <Monitor size={16} />
      </button>

      {/* ❌ CLOSE BUTTON ONLY MOBILE */}
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="lg:hidden p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10"
      >
        <X size={18} />
      </button>
    </div>
  </div>

  {/* NAV */}
  <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setActiveTab(item.id as Tab);
          setIsSidebarOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
          activeTab === item.id ? styles.navActive : styles.navHover
        }`}
      >
        <item.icon size={20} />
        {item.label}
      </button>
    ))}

    <div className="pt-6 px-4">
      <p className="text-[10px] opacity-50 font-bold uppercase">
        Upcoming
      </p>
    </div>

    {upcomingItems.map((item) => (
      <button
        key={item.id}
        onClick={() => setActiveTab(item.id as Tab)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
          activeTab === item.id ? styles.navActive : styles.navHover
        }`}
      >
        <item.icon size={20} />
        {item.label}
      </button>
    ))}
  </nav>
</motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Bar */}
  <header
  className={`h-20 border-b flex items-center justify-between px-6 ${styles.header}`}
>
  <div className="flex items-center gap-4">
    
    {/* ✅ MOBILE TOGGLE BUTTON */}
    <button
      onClick={() => setIsSidebarOpen(true)}
      className={`lg:hidden p-2 rounded-xl ${
        theme === "light"
          ? "bg-slate-100 text-slate-600"
          : "bg-white/10 text-white"
      }`}
    >
      <Menu size={20} />
    </button>

    <div className="flex items-center gap-2">
      <span className="opacity-40 text-sm">Dashboard</span>
      <span>/</span>
      <span className="font-bold text-sm capitalize">{activeTab}</span>
    </div>
  </div>
</header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row border border-white/10 ${styles.card}`}
            >
              {/* Left Side: Company Details */}
              <div className={`md:w-1/3 p-8 text-white flex flex-col justify-between relative overflow-hidden bg-slate-800`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                  <p className="opacity-80 mb-8 leading-relaxed text-sm">
                    Have questions about {contactItem?.type}? Our dedicated support team is here to help you navigate every step of your funding journey.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/15 p-3 rounded-2xl group-hover:bg-white/25 transition-colors">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Headquarters</p>
                        <p className="text-sm font-semibold leading-snug">7th floor, Galaxy Avenue, <br />Tonk Road, Jaipur,<br /> 302015</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/15 p-3 rounded-2xl group-hover:bg-white/25 transition-colors">
                        <Users2 size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Direct Support</p>
                        <p className="text-sm font-semibold">1800-571-0809</p>
                        {/* <p className="text-[10px] opacity-60 mt-1">Mon-Fri, 9am - 6pm IST</p> */}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/15 p-3 rounded-2xl group-hover:bg-white/25 transition-colors">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">General Inquiries</p>
                        {/* <p className="text-sm font-semibold">support@startupflora.in</p> */}
                        <p className="text-sm font-semibold">info@startupflora.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 mt-12">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4">Connect With Us</p>
                  <div className="flex gap-6">
                    {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                      <button key={social} className="text-xs font-bold hover:opacity-100 opacity-70 transition-colors uppercase tracking-wider border-b border-transparent hover:border-white pb-1">{social}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="flex-1 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className={`text-2xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Send a Message</h2>
                    <p className="opacity-50 mt-1 text-sm">Requesting info for: <span className={`font-bold ${theme === 'light' ? 'text-slate-700' : 'text-white'}`}>{contactItem?.title}</span></p>
                  </div>
                  <button 
                    onClick={() => setIsContactModalOpen(false)}
                    className={`p-2 rounded-xl transition-all ${theme === 'light' ? 'hover:bg-slate-100 text-slate-400' : 'hover:bg-white/10 text-white/40'}`}
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold opacity-40 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold opacity-40 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold opacity-40 uppercase tracking-widest mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 resize-none transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-white'}`}
                      placeholder="I would like to know more about..."
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 text-white`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
