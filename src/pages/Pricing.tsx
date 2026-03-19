import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Globe, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "5%",
      desc: "Perfect for personal projects and small community initiatives.",
      features: [
        "5% Platform Fee",
        "Standard Payment Processing",
        "Basic Marketing Tools",
        "Community Support",
        "Standard Analytics"
      ],
      cta: "Start for Free",
      highlight: false
    },
    {
      name: "Professional",
      price: "8%",
      desc: "Ideal for startups and growing businesses looking for more impact.",
      features: [
        "8% Platform Fee",
        "Priority Payment Processing",
        "Advanced Marketing Suite",
        "Dedicated Account Manager",
        "Advanced Analytics & Reporting",
        "Social Media Promotion"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored solutions for large organizations and high-volume campaigns.",
      features: [
        "Custom Platform Fee",
        "White-label Solutions",
        "Custom API Integrations",
        "24/7 Premium Support",
        "Full Marketing Agency Support",
        "Strategic Consulting"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that's right for your project. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-10 rounded-[40px] shadow-xl border-2 transition-all hover:-translate-y-2 ${plan.highlight ? 'border-emerald-500 scale-105 z-10' : 'border-transparent'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 font-bold">of funds raised</span>}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">{plan.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={plan.cta === 'Contact Sales' ? '/contact-us' : '/start-campaign'} 
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${plan.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
              >
                {plan.cta} <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center">
          {[
            { title: "Secure Payments", desc: "All transactions are encrypted and processed through world-class payment gateways.", icon: ShieldCheck },
            { title: "Global Reach", desc: "Connect with investors from over 150 countries around the world.", icon: Globe },
            { title: "Transparent Fees", desc: "We only succeed when you do. No upfront costs to launch your campaign.", icon: BarChart3 }
          ].map((item, i) => (
            <div key={i}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md text-emerald-600 mb-6">
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
