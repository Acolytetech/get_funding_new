import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Play, 
  Globe, 
  BarChart3, 
  Heart 
} from 'lucide-react';
import { motion } from 'motion/react';
import { CAMPAIGNS, CATEGORIES, STATS } from '../data';
import { CampaignCard } from '../components/CampaignCard';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-bl-[100px]" />
      <div className="absolute top-40 left-10 -z-10 w-64 h-64 bg-emerald-200/20 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Globe size={14} />
            <span>India's Leading Crowdfunding Platform</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Empowering the <span className="text-emerald-600 italic">Next Generation</span> of Innovators.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            GetFunding connects visionary entrepreneurs with a global network of investors. Raise capital, build your community, and bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/start-campaign" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Raise Funds Now <ArrowRight size={20} />
            </Link>
            <Link to="/dashboard" className="bg-white border-2 border-slate-200 hover:border-emerald-600 text-slate-800 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all">
              Browse Schemes
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                />
              ))}
              <div className="w-12 h-12 rounded-full bg-emerald-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold">
                +10k
              </div>
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">10,000+</span> investors already joined
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Startup Team" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                  <Play fill="white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Watch Success Story</p>
                  <p className="text-sm opacity-80">How TechNova raised $2M in 30 days</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Total Funded</p>
                <p className="text-xl font-bold text-slate-900">$45.8M</p>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[75%]" />
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">75% of goal reached this month</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section className="py-16 border-y border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Trusted by leading organizations</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'].map((logo) => (
            <span key={logo} className="text-2xl font-black text-slate-400 tracking-tighter">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const ICON_MAP: Record<string, any> = { Rocket, Users, ShieldCheck, BarChart3 };
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => {
          const Icon = ICON_MAP[stat.icon] || Rocket;
          return (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-emerald-400 mb-4">
                <Icon size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Categories = () => {
  const ICON_MAP: Record<string, any> = { Rocket, Globe, Heart, BarChart3, Users, Play, ShieldCheck };
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore by Category</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Find projects that align with your interests and passions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] || Rocket;
            return (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-8 rounded-3xl text-center cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm mb-4 text-emerald-600">
                  <Icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{cat.name}</h4>
                <p className="text-xs text-slate-400 font-medium">{cat.count} Projects</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeaturedCampaigns = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Campaigns</h2>
            <p className="text-slate-500 max-w-xl">
              Discover innovative projects that are changing the world. Join thousands of investors in supporting the next big thing.
            </p>
          </div>
          <Link to="/explore" className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
            View All Projects <ChevronRight size={20} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPAIGNS.slice(0, 3).map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Campaign",
      desc: "Set your funding goal, tell your story, and launch your project to our global community.",
      icon: Rocket
    },
    {
      title: "Spread the Word",
      desc: "Use our marketing tools to share your campaign across social media and reach potential investors.",
      icon: Globe
    },
    {
      title: "Receive Funding",
      desc: "Once you hit your goal, receive your funds and start bringing your vision to life.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How GetFunding Works</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our platform makes it easy for entrepreneurs to raise capital and for investors to discover high-potential startups.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < 2 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -z-10" />
              )}
              <div className="bg-white w-20 h-20 rounded-2xl shadow-md flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <step.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      title: "How TechNova Raised $2M",
      desc: "TechNova revolutionized the industry with their AI-driven platform, reaching their goal in record time.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      stats: "$2.4M Raised • 12k Backers"
    },
    {
      title: "EcoCharge: A Green Success",
      desc: "Bringing sustainable energy to thousands of homes across India through community support.",
      image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=80&w=600",
      stats: "$450k Raised • 1.2k Backers"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Real impact, real change. See how these projects came to life with the help of our global community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-8">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">{story.stats}</p>
                    <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                    <p className="text-white/80 line-clamp-2">{story.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <Trust />
      <Stats />
      <Categories />
      <FeaturedCampaigns />
      <HowItWorks />
      <SuccessStories />
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-600 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to bring your idea to life?</h2>
              <p className="text-emerald-50 text-xl mb-12 opacity-90">
                Join the community of thousands of entrepreneurs who have successfully raised capital on GetFunding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-campaign" className="bg-white text-emerald-700 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  Start Your Campaign
                </Link>
                <Link to="/contact-us" className="bg-emerald-700/50 backdrop-blur-md text-white border border-emerald-400/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-700 transition-all">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
