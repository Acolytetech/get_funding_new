import React from 'react';
import { Rocket, Globe, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Campaign",
      desc: "Set your funding goal, tell your story, and launch your project to our global community.",
      icon: Rocket,
      details: [
        "Define your project goals and milestones",
        "Create a compelling story and video",
        "Set realistic funding targets",
        "Choose your reward tiers for backers"
      ]
    },
    {
      title: "Spread the Word",
      desc: "Use our marketing tools to share your campaign across social media and reach potential investors.",
      icon: Globe,
      details: [
        "Leverage built-in social sharing tools",
        "Engage with your community through updates",
        "Reach out to our network of verified investors",
        "Get featured on our homepage and newsletter"
      ]
    },
    {
      title: "Receive Funding",
      desc: "Once you hit your goal, receive your funds and start bringing your vision to life.",
      icon: BarChart3,
      details: [
        "Secure and transparent fund transfer",
        "Access to our network of mentors and partners",
        "Ongoing support for project execution",
        "Build a lasting relationship with your backers"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">How GetFunding Works</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We've built a platform that makes it easy for innovators to raise capital and for investors to discover high-potential startups.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 mb-8">
                  <step.icon size={40} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{step.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{step.desc}</p>
                <ul className="space-y-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1552664730-d307ca884978' : i === 1 ? '1557804506-669a67965ba0' : '1460925895917-afdab827c52f'}?auto=format&fit=crop&q=80&w=1000`} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-slate-900 rounded-[40px] p-12 lg:p-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Ready to start your journey?</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of innovators who have successfully raised capital on GetFunding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-campaign" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-xl">
              Start Your Campaign
            </Link>
            <Link to="/explore" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-xl transition-all">
              Browse Schema
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
