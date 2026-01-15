import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">Semla Bageriet</div>
              <div className="text-xs text-muted-foreground">Sedan 1973</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#hem" className="text-foreground hover:text-primary font-medium transition-[var(--transition-smooth)]">
              Hem
            </a>
            <a href="#om" className="text-foreground hover:text-primary font-medium transition-[var(--transition-smooth)]">
              Om Oss
            </a>
            <a href="#meny" className="text-foreground hover:text-primary font-medium transition-[var(--transition-smooth)]">
              Meny
            </a>
            <a href="#kontakt" className="text-foreground hover:text-primary font-medium transition-[var(--transition-smooth)]">
              Kontakt
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="default" size="default">
              Beställ
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
