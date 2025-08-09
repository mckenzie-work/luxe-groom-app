import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg tracking-wide">LuxBarber</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/booking">
            <Button variant="default" size="sm">Book Appointment</Button>
          </NavLink>
          <NavLink to="/technician-login">
            <Button variant="outline" size="sm">Technician Login</Button>
          </NavLink>
        </div>
        <div className="md:hidden">
          <NavLink to="/booking">
            <Button variant="default" size="sm">Book</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
