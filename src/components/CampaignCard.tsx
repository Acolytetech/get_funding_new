import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { type Campaign } from '../data';

export const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <Link to={`/campaign/${campaign.id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={campaign.image} 
            alt={campaign.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            {campaign.category}
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 flex items-center gap-1">
              <Globe size={10} /> {campaign.location}
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors"
            >
              <Heart size={20} />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/campaign/${campaign.id}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 hover:text-emerald-600 transition-colors">{campaign.title}</h3>
        </Link>
        <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
          {campaign.description}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold text-slate-900">${campaign.raised.toLocaleString()}</span>
            <span className="text-slate-500">raised of ${campaign.goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-emerald-500 h-full" 
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-medium uppercase">Backers</span>
            <span className="font-bold text-slate-800">{campaign.backers}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs text-slate-400 font-medium uppercase">Days Left</span>
            <span className="font-bold text-slate-800">{campaign.daysLeft}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
