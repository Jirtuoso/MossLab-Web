import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Check, Sprout } from 'lucide-react';

const items = [
  {
    id: 1,
    title: "Prospecting",
    before: {
      header: "Manual Prospecting",
      points: [
        "One-by-one prospecting off Zoominfo / Apollo",
        "Generic outbound messaging",
        "Single-channel approach"
      ]
    },
    after: {
      header: "Clay-Enabled Systems",
      points: [
        "100s of hours rescued from sales reps / founders",
        "Signal-based lead prioritization",
        "Automatic personalized outbound"
      ]
    }
  },
  {
    id: 2,
    title: "CRM / Data",
    before: {
      header: "CRM Chaos",
      points: [
        "Duplicate & outdated records",
        "Lack of SOPs on single source of truth",
        "Manual lead organization"
      ]
    },
    after: {
      header: "Evergreen Data",
      points: [
        "Auto-deduped & enriched records",
        "Zero manual data entry required",
        "Live sync across full stack"
      ]
    }
  },
  {
    id: 3,
    title: "Inbound",
    before: {
      header: "Reactive Inbound",
      points: [
        "Delayed follow-up messaging",
        "Low conversion rates",
        "Sales funnel leakage"
      ]
    },
    after: {
      header: "Catch-All Process",
      points: [
        "Signal-based enrichment (web visits, inbound calls, …)",
        "Instant personalized reachouts",
        "Industry-specific prioritization"
      ]
    }
  }
];

const Transformations: React.FC = () => {
  return (
    <section id="tools" className="py-32 bg-kiln-mist/30 border-t border-kiln-stone">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        
        {/* Standardized Section Header */}
        <div className="mb-20">
            <span className="text-kiln-sage font-mono text-xs font-bold uppercase tracking-widest mb-4 block opacity-80">
              What we Do
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-kiln-forest leading-[0.9]">
              YOUR GTM<br />TRANSFORMATION.
            </h2>
        </div>

        <div className="space-y-12">
            {items.map((item, idx) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] bg-transparent rounded-[2rem] group"
                >
                    {/* Before Side: Grey Theme (Dull/Old) */}
                    <div className="p-8 md:p-16 bg-gray-50 border border-gray-200 relative flex flex-col justify-center rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
                        <div className="absolute top-8 right-8 text-gray-300 group-hover:text-red-400/70 transition-colors">
                            <X size={32} strokeWidth={3} />
                        </div>
                        <h3 className="text-gray-500 font-mono text-sm font-bold uppercase tracking-widest mb-6 md:mb-6 flex items-center gap-3">
                          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                          Before
                        </h3>
                        
                        <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-400 mb-6 md:mb-6 line-through decoration-2 decoration-gray-300">{item.before.header}</h4>
                        
                        <ul className="space-y-4 md:space-y-4">
                            {item.before.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-700 text-lg font-medium leading-relaxed">
                                    <span className="mt-2 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Center Arrow */}
                    <div className="hidden lg:flex items-center justify-center -mx-8 z-20 relative">
                         <div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 shadow-sm group-hover:border-kiln-leaf group-hover:text-kiln-leaf transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
                             <ArrowRight size={28} />
                         </div>
                    </div>
                    
                    {/* Mobile Arrow */}
                    <div className="lg:hidden flex justify-center -my-6 z-20 relative pointer-events-none">
                        <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 shadow-sm">
                             <ArrowRight size={20} className="rotate-90" />
                         </div>
                    </div>

                    {/* After Side: Vibrant Theme (New/Growth) */}
                    <div className="p-8 md:p-16 bg-white border-2 border-kiln-leaf relative flex flex-col justify-center rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-bl-none shadow-xl shadow-kiln-leaf/5">
                         <div className="absolute top-8 right-8 text-kiln-leaf group-hover:scale-110 transition-transform duration-300">
                            <Check size={32} strokeWidth={3} />
                        </div>
                        <h3 className="text-kiln-leaf font-mono text-sm font-bold uppercase tracking-widest mb-6 md:mb-6 flex items-center gap-3">
                          <span className="w-3 h-3 bg-kiln-leaf rounded-full animate-pulse"></span>
                          After
                        </h3>
                        
                        <h4 className="text-3xl md:text-4xl font-display font-bold text-kiln-forest mb-6 md:mb-6">{item.after.header}</h4>
                        
                        <ul className="space-y-4 md:space-y-4">
                            {item.after.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-4 text-kiln-forest text-lg font-medium leading-relaxed">
                                    <span className="mt-2 w-2 h-2 rounded-full bg-kiln-leaf shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;