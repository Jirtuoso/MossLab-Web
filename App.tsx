
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ClientGrid from './components/ClientGrid';
import Testimonials from './components/Testimonials';
import Transformations from './components/Transformations';
import About from './components/About';
import { Leaf, ArrowUpRight } from 'lucide-react';

const MarkerUnderline = () => (
  <svg
    viewBox="0 0 200 9"
    className="absolute -bottom-1 left-0 w-full h-4 z-[-1] pointer-events-none"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M2.00025 6.99997C28.5284 3.75438 106.671 -0.734561 198.001 2.50001"
      fill="none"
      stroke="#859F3D" // kiln-leaf
      strokeWidth="5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    />
  </svg>
);

const App: React.FC = () => {
  return (
    <div className="bg-kiln-bg min-h-screen text-kiln-forest overflow-x-hidden selection:bg-kiln-leaf selection:text-white">
      <Navbar />
      
      <main role="main">
        {/* HERO SECTION */}
        {/* FIXED: Reduced min-h to 50vh/55vh and padding to pull content up */}
        <header className="min-h-[50vh] md:min-h-[55vh] flex flex-col items-center px-4 md:px-12 pt-36 md:pt-52 pb-12 md:pb-20 relative overflow-hidden justify-start">
          
          {/* Main Content Grid */}
          <div className="flex flex-col items-center text-center max-w-[95vw] md:max-w-[90vw] xl:max-w-screen-xl mx-auto w-full z-10">
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl leading-tight font-display font-black tracking-tighter uppercase mb-2 md:mb-6 text-kiln-forest relative max-w-5xl xl:max-w-7xl mx-auto"
              >
                <span className="relative inline-block mr-3">
                  2x
                  <MarkerUnderline />
                </span>
                your GTM velocity
              </motion.h1>

              <div className="flex flex-col items-center gap-3 md:gap-8 max-w-6xl xl:max-w-screen-2xl w-full">
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-3xl xl:text-4xl text-kiln-sage font-normal leading-relaxed max-w-6xl xl:max-w-7xl px-2"
                >
                  We engineer scalable GTM (go-to-market) systems to drive pipeline, streamline operations, and hit your revenue targets. <br className="hidden md:block" /> 100% satisfaction guaranteed.
                </motion.p>

                <motion.a
                  href="https://cal.com/mosslab/audit?overlayCalendar=true&month=2025-12&date=2025-12-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-kiln-gold text-kiln-forest px-8 py-4 md:px-10 md:py-5 rounded-lg font-bold text-lg md:text-xl xl:text-2xl flex items-center gap-3 shadow-xl hover:bg-white hover:text-kiln-gold transition-colors border border-kiln-gold cursor-pointer"
                >
                  Book a Free Audit <Leaf size={20} className="animate-bounce" />
                </motion.a>
              </div>

          </div>
        </header>

        {/* CLIENT GRID SECTION */}
        <ClientGrid />

        {/* TRANSFORMATIONS SECTION (Formerly Services) */}
        <Transformations />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* ABOUT SECTION */}
        <About />
      </main>

      {/* FOOTER */}
      <footer id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-kiln-forest text-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-12 mb-20 md:mb-32">
            
            {/* CTA Section */}
            <div className="w-full md:w-auto">
              <h2 className="text-7xl md:text-9xl leading-[0.95] font-display font-bold tracking-tighter mb-10 md:mb-12 whitespace-nowrap">
                Ready to <br/>Grow?
              </h2>
              <div className="flex flex-col items-start gap-10 w-full md:w-auto">
                <motion.a
                  href="https://cal.com/mosslab/audit?overlayCalendar=true&month=2025-12&date=2025-12-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-kiln-gold text-kiln-forest px-8 py-4 text-lg md:px-12 md:py-6 md:font-bold md:text-2xl rounded-lg font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-white hover:text-kiln-gold transition-colors w-full md:w-auto cursor-pointer"
                >
                  Book a Free Audit <Leaf size={24} className="animate-bounce" />
                </motion.a>
              </div>
            </div>
            
            {/* Details Section - Left aligned on mobile, Right on Desktop */}
            <div className="flex flex-col gap-10 md:gap-12 text-left md:text-right font-mono text-sm items-start md:items-end w-full md:w-auto">
              <div>
                <p className="text-white/90 font-bold mb-4 uppercase tracking-widest text-sm border-b border-white/20 pb-2 inline-block">Based In</p>
                <div className="text-white font-display font-bold text-2xl md:text-3xl space-y-2">
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
              <a 
                href="https://www.linkedin.com/company/mosslabgrowth" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-lg font-display font-bold text-white hover:text-kiln-leaf transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-kiln-sage/30 text-xs text-kiln-sage/70 uppercase tracking-widest gap-4 md:gap-0">
            <p>© 2025 MOSS LAB.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
