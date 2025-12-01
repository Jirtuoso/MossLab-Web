import React from 'react';
import { motion } from 'framer-motion';
import { Award, Linkedin, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-kiln-bg border-t border-kiln-stone relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Column - Content */}
          <div className="flex flex-col h-full">
            <span className="text-kiln-sage font-mono text-xs font-bold uppercase tracking-widest mb-4 block opacity-80">
              Who we are
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-kiln-forest leading-[0.9] mb-8">
              YOUR NEW <br /> PARTNER.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-kiln-sage leading-relaxed font-medium">
              <p>
                Hi, I'm Jay Hou, the founder of Moss Lab. Based out of San Francisco, I was an early adopter of key go-to-market tools such as Clay.com, Gumloop, and Attio. 
              </p>
              <p>
                Having worked with top F50 companies / startups throughout my career in management consulting, tech sales, and fintech, I bring a strong operator skillset with experienced business acumen.
              </p>
              <p>
                Moss Lab was founded out of a hatred for inefficiency. We work towards understanding what keeps you up at night and working in tandem with your team to build lasting, efficient systems.
              </p>
            </div>

            {/* Credential Cards - Pushed to bottom using mt-auto to align with bottom of image */}
            <div className="mt-auto pt-12 flex flex-wrap gap-6">
              {/* Certified Clay Expert Card */}
              <div className="flex-1 min-w-[240px] bg-white border border-kiln-stone rounded-2xl p-4 pr-8 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-default h-[100px]">
                  <div className="w-12 h-12 rounded-full bg-kiln-mist flex items-center justify-center text-kiln-forest border border-kiln-stone/30 shrink-0">
                    <Award size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                      <h4 className="font-display font-bold text-kiln-forest text-lg leading-tight">Certified</h4>
                      <p className="font-mono text-xs text-kiln-sage tracking-wider uppercase font-medium">Clay Expert</p>
                  </div>
              </div>

              {/* LinkedIn Link Card */}
              <a 
                href="https://www.linkedin.com/in/jaycbhou/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 min-w-[240px] bg-white border border-kiln-stone rounded-2xl p-4 pr-8 flex items-center gap-4 shadow-sm hover:shadow-lg hover:border-kiln-leaf/50 transition-all duration-300 group h-[100px]"
              >
                  <div className="w-12 h-12 rounded-full bg-kiln-mist group-hover:bg-kiln-forest group-hover:text-white transition-colors duration-300 flex items-center justify-center text-kiln-forest border border-kiln-stone/30 shrink-0">
                    <Linkedin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                      <h4 className="font-display font-bold text-kiln-forest text-lg leading-tight flex items-center gap-2 group-hover:text-kiln-leaf transition-colors">
                        Connect <ArrowUpRight size={16} className="text-kiln-leaf opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h4>
                      <p className="font-mono text-xs text-kiln-sage tracking-wider uppercase font-medium group-hover:text-kiln-forest/70 transition-colors">On LinkedIn</p>
                  </div>
              </a>
            </div>
          </div>

          {/* Right Column - Forest SVG */}
          <div className="relative h-full min-h-[500px] lg:min-h-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full rounded-[2rem] overflow-hidden border border-kiln-stone relative bg-kiln-mist/30 flex items-end justify-center"
            >
               {/* Background Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-kiln-forest/10 to-transparent z-0"></div>

               {/* Stylized Forest SVG */}
               <svg 
                  viewBox="0 0 400 500" 
                  className="w-full h-full absolute inset-0 text-kiln-forest"
                  preserveAspectRatio="xMidYMax slice"
               >
                  {/* Distant Trees (Lighter/Smaller) */}
                  <g opacity="0.3">
                    <path d="M50 500 L100 350 L150 500 Z" fill="currentColor" />
                    <path d="M250 500 L300 320 L350 500 Z" fill="currentColor" />
                    <path d="M150 500 L200 380 L250 500 Z" fill="currentColor" />
                  </g>

                  {/* Mid-ground Trees */}
                  <g opacity="0.6">
                    <path d="M-20 500 L80 250 L180 500 Z" fill="currentColor" />
                    <path d="M280 500 L380 280 L480 500 Z" fill="currentColor" />
                  </g>

                  {/* Foreground Trees (Darker/Larger) */}
                  <g opacity="1">
                    <path d="M100 500 L200 150 L300 500 Z" fill="currentColor" />
                    {/* Trunk */}
                    <rect x="190" y="480" width="20" height="20" fill="#132A13" />
                  </g>
                  
                  {/* Abstract Ground */}
                  <path d="M0 480 Q 200 460 400 480 L 400 500 L 0 500 Z" fill="currentColor" />
               </svg>

               {/* Overlay Text/Logo (Optional branding touch) */}
               <div className="absolute top-8 right-8 z-10">
                  <div className="w-12 h-12 rounded-full border border-kiln-forest/20 flex items-center justify-center">
                    <span className="font-display font-bold text-kiln-forest text-xl">M</span>
                  </div>
               </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;