import React from 'react';
import { Play, ArrowRight, Globe, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SuccessStories = () => {
  const stories = [
    {
      title: "How TechNova Raised $2M",
      desc: "TechNova revolutionized the industry with their AI-driven platform, reaching their goal in record time.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      stats: "$2.4M Raised • 12k Backers",
      category: "Technology",
      location: "Bangalore, India"
    },
    {
      title: "EcoCharge: A Green Success",
      desc: "Bringing sustainable energy to thousands of homes across India through community support.",
      image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=80&w=600",
      stats: "$450k Raised • 1.2k Backers",
      category: "Sustainability",
      location: "Pune, India"
    },
    {
      title: "HealthGuard: AI Diagnostics",
      desc: "Providing affordable healthcare diagnostics to rural communities using advanced AI technology.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      stats: "$1.2M Raised • 5.4k Backers",
      category: "Health & Wellness",
      location: "Hyderabad, India"
    },
    {
      title: "EduLink: Connecting Students",
      desc: "A platform that bridges the gap between students and quality education resources.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
      stats: "$800k Raised • 3.2k Backers",
      category: "Education",
      location: "Delhi, India"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real impact, real change. See how these projects came to life with the help of our global community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-8 shadow-xl">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">{story.stats}</p>
                    <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                    <p className="text-white/80 line-clamp-2">{story.desc}</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {story.category}
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                  <Globe size={14} /> {story.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-50 p-12 rounded-[40px] border border-slate-100">
          {[
            { label: "Total Projects Funded", value: "10,000+", icon: Rocket },
            { label: "Total Capital Raised", value: "$45.8M", icon: BarChart3 },
            { label: "Global Backers", value: "500k+", icon: Users },
            { label: "Success Rate", value: "85%", icon: CheckCircle2 }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-emerald-600 mb-4">
                <stat.icon size={24} />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-emerald-600 rounded-[40px] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to be our next success story?</h2>
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
    </div>
  );
};

const CheckCircle2 = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const Rocket = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/>
  </svg>
);
