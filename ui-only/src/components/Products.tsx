import { Button } from "./ui/button";

const products = [
  {
    name: "Klassisk Semla",
    description: "Vår signatur-semla med kardemummabulle, mandelmassa och vispad grädde",
    price: "45 kr",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    popular: true,
  },
  {
    name: "Choklad Semla",
    description: "Lyxig chokladbulle med chokladmandelmassa och chokladgrädde",
    price: "55 kr",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    popular: false,
  },
  {
    name: "Glutenfri Semla",
    description: "Lika god som originalet, men helt utan gluten",
    price: "50 kr",
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&q=80",
    popular: false,
  },
  {
    name: "Vegansk Semla",
    description: "Plant-baserad mandelmassa och havrebaskerad grädde",
    price: "52 kr",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    popular: false,
  },
];

export function Products() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/40 rounded-full">
              <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Våra Semlor</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Välj Din Favorit
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alla våra semlor bakas färska varje morgon med kärlek och omsorg
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative bg-card rounded-xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-2"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    Populärast
                  </div>
                )}

                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <Button variant="secondary" size="sm" className="w-full">
                    Lägg till
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
