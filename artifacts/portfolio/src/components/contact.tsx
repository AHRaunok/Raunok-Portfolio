import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Transmission Interface</h2>
              <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
                Let's Build <br />
                Something.
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground font-light max-w-md">
              Currently accepting new missions. Whether you have a project in mind or just want to discuss technical architecture, open a channel.
            </p>

            <div className="mt-8 flex flex-col gap-2">
              <span className="font-mono text-sm text-muted-foreground uppercase">Direct Line</span>
              <a href="mailto:hello@raunok.dev" className="text-2xl md:text-3xl font-display font-bold hover:text-primary transition-colors">
                HELLO@RAUNOK.DEV
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs font-mono uppercase text-muted-foreground">Entity Name</label>
                  <Input id="contact-name" name="name" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-xs font-mono uppercase text-muted-foreground">Comm Link (Email)</label>
                  <Input id="contact-email" name="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-xs font-mono uppercase text-muted-foreground">Transmission Payload</label>
                <Textarea id="contact-message" name="message" placeholder="Describe your project requirements..." />
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 group">
                Transmit Payload <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
