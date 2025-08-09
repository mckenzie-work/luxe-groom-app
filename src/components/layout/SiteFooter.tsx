import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg mb-3">Contact</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2"><Phone size={16}/> +1 (555) 012-3456</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2"><Mail size={16}/> bookings@luxbarber.com</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2"><MapPin size={16}/> 123 Bond Street, New York, NY</p>
          <div className="flex items-center gap-3 mt-4">
            <a aria-label="Instagram" href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={18}/></a>
            <a aria-label="Facebook" href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={18}/></a>
            <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={18}/></a>
          </div>
        </div>
        <div className="md:col-span-2 rounded-lg overflow-hidden border border-border">
          <iframe
            title="LuxBarber Location"
            className="w-full h-64 grayscale hover:grayscale-0 transition"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.664079267593!2d-73.99733292350359!3d40.73082387138908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990b9b4f6cf%3A0x2e4ef2f1f9b324a7!2sBond%20St%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1700000000000">
          </iframe>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} LuxBarber. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
