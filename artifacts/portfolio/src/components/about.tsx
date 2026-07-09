import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
              I don't just <span className="text-primary">write code.</span><br />
              I architect solutions.
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 text-lg text-muted-foreground font-light"
          >
            <p>
              I am a Full-Stack Web Developer driven by a passion for clean architecture and 
              performant user experiences. I view code not just as instructions, but as the 
              foundation of modern infrastructure.
            </p>
            <p>
              My approach bridges the gap between design and engineering. I build robust 
              backend APIs that scale seamlessly, paired with uncompromising frontend 
              interfaces that demand attention. No bloated templates, no generic solutions—just 
              crafted, intentional software.
            </p>
            <p>
              Whether it's designing complex database schemas or refining micro-interactions 
              in the browser, my objective remains the same: deliver production-ready 
              digital products that stand out and perform flawlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
