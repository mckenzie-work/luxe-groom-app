import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const SiteHeader = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className={isHome ? "absolute top-0 w-full z-40" : "sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border"}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg tracking-wide">LuxBarber</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="text-sm md:text-base hover:underline underline-offset-4">Home</NavLink>
          <NavLink to="/gallery" className="text-sm md:text-base hover:underline underline-offset-4">Gallery</NavLink>
          <NavLink to="/login" className="text-sm md:text-base hover:underline underline-offset-4">Login</NavLink>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu />
          </Button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 p-4">
            <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X />
            </Button>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 text-center" onClick={(e) => e.stopPropagation()}>
              <NavLink to="/" onClick={() => setOpen(false)} className="text-lg sm:text-base md:text-lg py-3">Home</NavLink>
              <NavLink to="/gallery" onClick={() => setOpen(false)} className="text-lg sm:text-base md:text-lg py-3">Gallery</NavLink>
              <NavLink to="/login" onClick={() => setOpen(false)} className="text-lg sm:text-base md:text-lg py-3">Login</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
