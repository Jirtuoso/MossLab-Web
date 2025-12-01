
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Leaf } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 3,
    text: "We were great at B2C and clueless on B2B. Jay came in and built our B2B GTM from scratch while coaching us through the process. Enough said.",
    author: "Ben Rajabov",
    role: "Founder",
    company: "Intercall",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEXMBf_w_HV_Q/profile-displayphoto-scale_100_100/B4DZlF6I3vHsAc-/0/1757814493704?e=1766016000&v=beta&t=9AiBMFf0nq1ZSGOQ_D8o-JW2DxKrqzy4PnapzL5ASNo"
  },
  {
    id: 4,
    text: "After we signed up for Clay Enterprise, we were struggling to actually plug it into our GTM motion. Jay rebuilt our lead research process from the ground up, and now we rely on him to keep training the team and tuning our CRM.",
    author: "Sarah Nugent",
    role: "Global Director of Sales Development",
    company: "SiteDocs / GoCanvas",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQE2p3cHJEb5-A/profile-displayphoto-shrink_100_100/B4EZfWaL..HIAY-/0/1751648879168?e=1766016000&v=beta&t=W4SWLJDT74P1k6FHYN5Cvmgya4k9nqH7TNqakOkyAIk",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-kiln-mist/30 overflow-hidden border-t border-kiln-stone">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-20">
            <span className="text-kiln-sage font-mono text-xs font-bold uppercase tracking-widest mb-4 block opacity-80">How we've done it before</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-kiln-forest leading-[0.9]">
            ON THE FENCE?<br />LISTEN TO OUR CLIENTS
            </h2>
        </div>

        {/* Static Grid Layout for 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-kiln-bg p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] shadow-sm border border-kiln-stone hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
            >
                  {/* Decoration */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-kiln-mist rounded-full group-hover:scale-[4] transition-transform duration-700 z-0 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                      <div className="mb-8 text-kiln-stone/50 group-hover:text-kiln-leaf transition-colors">
                        <Quote size={48} strokeWidth={1.5} />
                      </div>
                      <p className="text-xl md:text-2xl font-medium text-kiln-forest leading-relaxed tracking-tight">
                        "{item.text}"
                      </p>
                  </div>
                  
                  <div className="flex items-center gap-5 pt-10 border-t border-kiln-stone/50 relative z-10 mt-8">
                    <img 
                      src={item.image} 
                      alt={item.author} 
                      width="64" 
                      height="64"
                      loading="lazy"
                      className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-kiln-stone" 
                    />
                    <div>
                        <p className="font-bold text-kiln-forest text-lg">{item.author}</p>
                        <p className="text-sm text-kiln-sage font-mono">{item.role}</p>
                        <p className="text-sm text-kiln-sage/70 font-mono mt-0.5">{item.company}</p>
                    </div>
                  </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
