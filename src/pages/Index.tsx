import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/layout/SiteFooter";
import heroImage from "@/assets/hero-barber.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <SEO
        title="LuxBarber — Precision Grooming & Seamless Booking"
        description="Precision grooming. Seamless booking."
        canonical="https://cb6a6b20-910e-4c9d-8dba-9bd3613dcef5.lovableproject.com/"
      />
      <main className="min-h-screen bg-background font-sans">
        {/* HERO ONLY */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
          <div className="relative z-10 h-full max-w-6xl mx-auto px-6 grid place-items-center text-center">
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl tracking-tight">
                Precision grooming. Seamless booking.
              </h1>
              <div className="mt-8 flex items-center justify-center">
                <Link to="/booking"><Button size="xl">Book Now</Button></Link>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default Index;
