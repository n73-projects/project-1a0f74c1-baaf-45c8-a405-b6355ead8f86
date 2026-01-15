export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/40 rounded-full">
                <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Om Oss</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Semla-Mästare Sedan 1973
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vårt bageri har specialiserat sig på den svenska klassikern sedan tre generationer tillbaka.
                Vi använder endast de finaste ingredienserna och bakar allt för hand varje morgon.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vår kardemummabulle är luftig och mjuk, mandelmassa görs från scratch med äkta mandlar,
                och grädden är alltid nyvispad. Det är detta som gör våra semlor till Stockholms bästa.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-[var(--shadow-soft)]">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Ekologiska Ingredienser</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-[var(--shadow-soft)]">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Bakas Färskt Varje Dag</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-[var(--shadow-soft)]">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Traditionella Recept</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[image:var(--gradient-card)] shadow-[var(--shadow-strong)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                  alt="Färska semlor i bageri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
