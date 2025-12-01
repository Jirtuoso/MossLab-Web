import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HardHat, Phone, TrendingUp, Stethoscope, LayoutDashboard
} from 'lucide-react';

interface LogoData {
  id: string;
  name: string;
  icon: React.ElementType;
}

const ALL_LOGOS: LogoData[] = [
  { id: 'sitedocs', name: 'SiteDocs', icon: HardHat },
  { id: 'intercall', name: 'Intercall', icon: Phone },
  { id: 'trena', name: 'Trena', icon: TrendingUp },
  { id: 'meraki', name: 'Meraki', icon: Stethoscope },
  { id: 'record_lens', name: 'Record Lens', icon: LayoutDashboard },
];

const GRID_SIZE = 4; // 1 row * 4 columns on desktop

const ClientGrid: React.FC = () => {
  // Initialize with the first 4 logos
  const [activeLogos, setActiveLogos] = useState<LogoData[]>(ALL_LOGOS.slice(0, GRID_SIZE));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogos(currentLogos => {
        // 1. Get IDs of currently displayed logos to avoid duplicates
        const currentIds = new Set(currentLogos.map(l => l.id));
        
        // 2. Filter available logos (those not currently shown)
        const availableLogos = ALL_LOGOS.filter(l => !currentIds.has(l.id));
        
        if (availableLogos.length === 0) return currentLogos;

        // 3. Pick a random new logo from available ones
        const newLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)];
        
        // 4. Pick a random slot to swap
        const slotToSwap = Math.floor(Math.random() * GRID_SIZE);
        
        // 5. Create new array with swap and verify no duplicates
        const newLogos = [...currentLogos];
        newLogos[slotToSwap] = newLogo;
        
        // 6. Final check: ensure no duplicates in the new array
        const newIds = newLogos.map(l => l.id);
        const hasDuplicates = newIds.length !== new Set(newIds).size;
        
        if (hasDuplicates) {
          // If somehow duplicates exist, return current state
          return currentLogos;
        }
        
        return newLogos;
      });
    }, 2500); // Swap every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-kiln-bg border-b border-kiln-stone">
      <div className="max-w-[100%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-kiln-stone border-t border-kiln-stone">
          {activeLogos.map((logo, index) => (
            <div 
              key={index} 
              className="h-32 md:h-40 flex items-center justify-center relative overflow-hidden group bg-kiln-bg hover:bg-kiln-mist transition-colors duration-500"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, filter: 'blur(4px)', scale: 0.95 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, filter: 'blur(4px)', scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center gap-3 px-4"
                >
                  <logo.icon 
                    size={28} 
                    className="text-kiln-forest stroke-[1.5]"
                  />
                  <span className="text-xl md:text-2xl font-display font-bold text-kiln-forest tracking-tight">
                    {logo.name}
                  </span>
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle grid highlight on hover */}
              <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-kiln-stone/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientGrid;