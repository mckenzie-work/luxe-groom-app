import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/layout/SiteFooter";
import heroImage from "@/assets/hero-barber.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { Scissors, Users, Timer, Shield } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <SEO
        title="LuxBarber — Precision Grooming & Seamless Booking"
        description="Book, manage, and experience luxury grooming in a whole new way. Minimal, precise, and premium."
        canonical="https://cb6a6b20-910e-4c9d-8dba-9bd3613dcef5.lovableproject.com/"
      />
      <main className="min-h-screen bg-background font-sans">
        {/* HERO */}
        <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero.mp4"
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" />
          <div className="relative z-10 h-full max-w-6xl mx-auto px-4 grid place-items-center text-center">
            <div className="animate-fade-in">
              <h1 className="font-display text-4xl md:text-6xl tracking-tight">
                Precision Grooming Meets Seamless Booking
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Book, manage, and experience grooming in a whole new way.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Link to="/booking"><Button size="xl">Book Appointment</Button></Link>
                <Link to="/technician-login"><Button variant="hero" size="xl">Technician Login</Button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <header className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl">Services</h2>
            <p className="text-muted-foreground mt-2">Refined treatments, minimalist pricing.</p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Scissors, name: "Haircut", desc: "45 min" },
              { icon: Shield, name: "Shave", desc: "30 min" },
              { icon: Users, name: "Beard Trim", desc: "20 min" },
              { icon: Timer, name: "Express", desc: "15 min" },
            ].map((s) => (
              <div key={s.name} className="rounded-lg border border-border p-4 hover:shadow-lg transition will-change-transform">
                <s.icon className="mb-3" />
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-secondary/50 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="font-display text-2xl md:text-3xl mb-6">Testimonials</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  { q: "Impeccable precision and a serene experience.", a: "A. Martinez" },
                  { q: "Booking was effortless — results, exceptional.", a: "D. Kim" },
                  { q: "Minimal design, maximal craft.", a: "R. Blake" },
                ].map((t) => (
                  <CarouselItem key={t.a} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <article className="h-full rounded-lg border border-border p-6 bg-background">
                      <p className="text-lg">“{t.q}”</p>
                      <p className="mt-4 text-sm text-muted-foreground">— {t.a}</p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* GALLERY */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-display text-2xl md:text-3xl mb-6">Salon Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[g1, g2, g3].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border">
                <img src={img} alt={`Luxury barbershop gallery ${i+1}`} className="w-full h-64 object-cover grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default Index;
