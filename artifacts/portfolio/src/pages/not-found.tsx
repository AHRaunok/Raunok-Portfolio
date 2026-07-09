import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-md px-6">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6 uppercase">System Breach Detected</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for has been moved, deleted, or never existed in this timeline.
        </p>
        <Link href="/">
          <div className="inline-flex h-12 items-center justify-center bg-primary text-primary-foreground px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 cursor-pointer">
            Return to Base
          </div>
        </Link>
      </div>
    </div>
  );
}
