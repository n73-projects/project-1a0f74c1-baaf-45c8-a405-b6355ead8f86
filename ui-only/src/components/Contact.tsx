import { Button } from "./ui/button";

export function Contact() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/40 rounded-full">
                <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Kontakt</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Besök Oss Idag
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vi finns mitt i hjärtat av Stockholm. Välkommen in för en fika eller beställ dina semlor i förväg.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adress</h3>
                    <p className="text-muted-foreground">Drottninggatan 42<br />111 21 Stockholm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-muted-foreground">08-123 456 78</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Öppettider</h3>
                    <p className="text-muted-foreground">
                      Mån-Fre: 07:00 - 18:00<br />
                      Lör-Sön: 08:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Ring Oss
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)]">
              <h3 className="text-2xl font-bold text-foreground mb-6">Skicka ett Meddelande</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground transition-[var(--transition-smooth)]"
                    placeholder="Ditt namn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground transition-[var(--transition-smooth)]"
                    placeholder="din@email.se"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none transition-[var(--transition-smooth)]"
                    placeholder="Ditt meddelande..."
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  Skicka Meddelande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
