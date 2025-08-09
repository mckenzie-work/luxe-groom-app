import SEO from "@/components/SEO";
import SiteFooter from "@/components/layout/SiteFooter";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background font-sans">
      <SEO
        title="Gallery — LuxBarber"
        description="Explore our salon gallery. Minimal, monochrome, refined."
        canonical="https://cb6a6b20-910e-4c9d-8dba-9bd3613dcef5.lovableproject.com/gallery"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl">Salon Gallery</h1>
          <p className="text-muted-foreground mt-2">Grayscale images reveal subtle color on hover/tap.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[g1, g2, g3].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-border">
              <img
                src={img}
                alt={`Luxury barbershop gallery ${i + 1}`}
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
};

export default Gallery;
