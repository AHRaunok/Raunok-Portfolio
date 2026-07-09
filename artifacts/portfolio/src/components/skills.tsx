import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    title: "Frontend Architecture",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js", "Redux/Zustand"]
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "WebSockets"]
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose", "Supabase"]
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Linux", "Nginx"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">Technical Arsenal</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Stack & Tooling</h3>
          </div>
          <div className="text-right font-mono text-sm text-muted-foreground hidden md:block border-b border-border pb-2">
            SYS_VERSION: 1.0.4
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-border bg-card p-8 group hover:border-primary/50 transition-colors"
            >
              <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-sm">0{idx + 1}.</span>
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-foreground font-mono text-sm border border-transparent group-hover:border-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
