
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

const MossLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 140 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      {/* Left Mountain */}
      <path d="M15 80 C 10 35, 55 35, 50 80" fill="white" />
      <path d="M15 52 L 24 45 L 32 52 L 40 45 L 49 52 C 52 35, 12 35, 15 52 Z" fill="#4F6F52" />

      {/* Right Mountain */}
      <path d="M90 80 C 85 35, 130 35, 125 80" fill="white" />
      <path d="M91 52 L 100 45 L 108 52 L 116 45 L 125 52 C 128 35, 88 35, 91 52 Z" fill="#4F6F52" />

      {/* Center Mountain (In Front) */}
      <path d="M40 80 C 30 5, 110 5, 100 80" fill="white" />
      <path d="M42 42 L 55 32 L 70 42 L 85 32 L 98 42 C 105 10, 35 10, 42 42 Z" fill="#4F6F52" />

      {/* Wavy Base Lines */}
      <path d="M10 85 C 50 75, 90 95, 130 85" fill="none" />
      <path d="M10 98 C 50 88, 90 108, 130 98" fill="none" />
    </g>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Past clients', href: '#testimonials' },
    { label: 'About', href: '#about' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Calculate centering logic
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 w-full z-40 bg-kiln-bg/95 backdrop-blur-sm border-b-2 border-kiln-stone/50 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center text-kiln-forest"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <div className="text-xl md:text-3xl font-display font-bold tracking-tight pointer-events-auto z-10 flex items-center gap-3 uppercase">
          <MossLogo className="w-12 h-10 md:w-16 md:h-12 text-kiln-forest" />
          <span className="sr-only">Moss Lab Home</span>
          <span aria-hidden="true">Moss Lab</span>
        </div>

        {/* Center Links - Bracket Style (Desktop Only) */}
        <div className="hidden md:flex gap-16 pointer-events-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-2xl font-display font-bold uppercase tracking-wide hover:text-kiln-leaf transition-colors group flex items-center cursor-pointer gap-2"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block z-10">
          <a 
            href="https://cal.com/mosslab/audit?overlayCalendar=true&month=2025-12&date=2025-12-02"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center gap-2 bg-kiln-gold text-kiln-forest px-6 py-3 rounded-lg text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-kiln-gold transition-all hover:shadow-lg hover:-translate-y-0.5 border border-kiln-gold group"
          >
            BOOK A FREE AUDIT
            <Leaf size={16} className="group-hover:animate-bounce" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 text-kiln-forest focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-kiln-bg pt-28 px-6 md:hidden flex flex-col items-start gap-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Menu"
          >
            <div className="flex flex-col gap-6 w-full border-t border-kiln-stone/30 pt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-2xl font-display font-bold uppercase tracking-tighter text-kiln-forest border-b border-kiln-stone/30 pb-4 flex justify-between group cursor-pointer"
                >
                  {item.label}
                  <span className="text-kiln-stone group-hover:text-kiln-leaf transition-colors" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
