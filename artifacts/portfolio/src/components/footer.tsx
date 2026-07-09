import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-display font-bold tracking-tighter">
            RAUNOK<span className="text-primary">.</span>
          </span>
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Full-Stack Engineer
          </span>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:hello@raunok.dev"
            aria-label="Email MD Ali Hossain Raunok"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm font-mono text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} MD Ali Hossain Raunok.<br />
          All systems operational.
        </div>

      </div>
    </footer>
  );
}
