import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "Nova Commerce",
    description: "A high-performance headless e-commerce architecture built for scale. Features real-time inventory synchronization, dynamic cart management, and seamless payment gateway integration.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe API"],
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Aegis CRM",
    description: "An internal customer relationship management tool designed for high-throughput sales teams. Includes real-time analytics, automated workflow triggers, and deep data visualization.",
    tags: ["React", "Express", "Redis", "WebSockets"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Vortex Analytics",
    description: "Real-time data pipeline and visualization dashboard capable of ingesting and plotting millions of events per day with sub-second latency querying.",
    tags: ["Vue", "Python", "TimescaleDB", "D3.js"],
    color: "from-emerald-400 to-teal-600"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">Representative Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Featured Projects</h3>
        </motion.div>

        <div className="flex flex-col gap-24">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:pl-0' : ''}`}
            >
              {/* Project Abstract Visual */}
              <div className={`relative aspect-video w-full border border-border overflow-hidden group ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-30">
                   <span className="text-9xl font-display font-black tracking-tighter uppercase">{project.title.substring(0, 2)}</span>
                </div>
                <div className="absolute top-4 left-4 font-mono text-xs tracking-widest text-muted-foreground">
                  PRJ_0{idx + 1}
                </div>
              </div>

              {/* Project Info */}
              <div className={`flex flex-col gap-6 ${idx % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <h4 className="text-3xl font-bold uppercase tracking-tight">{project.title}</h4>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 border border-border text-xs font-mono text-muted-foreground uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <Github className="w-4 h-4" />
                  Representative work &mdash; case study available on request
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
