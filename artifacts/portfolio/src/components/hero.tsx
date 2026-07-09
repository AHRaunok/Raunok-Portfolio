import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/50 text-primary font-mono text-xs uppercase tracking-wider w-fit bg-primary/5 backdrop-blur-sm">
            <Terminal className="w-3 h-3" />
            <span>System Status: Available for Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter">
            MD Ali Hossain <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Raunok.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
            Full-stack web developer engineering robust backend systems and crafting pixel-perfect, high-performance interfaces. I build products that scale.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#work">
              <Button size="lg" className="group">
                View Transmissions 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                Initialize Contact
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative aspect-[3/4] w-full max-w-[360px] mx-auto lg:mx-0 group">
            {/* Architectural Frame */}
            <div className="absolute inset-0 border border-border bg-card translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
            
            {/* Glitch Overlay Effect */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-color-dodge z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <img 
              src="/profile.jpg" 
              alt="MD Ali Hossain Raunok" 
              className="relative z-0 object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Tech accents */}
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-primary z-30" />
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary z-30" />
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur text-xs font-mono px-2 py-1 text-primary border border-primary/30 z-30">
              SYS.IMG.01
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
