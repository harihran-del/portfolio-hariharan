import { useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          <span className="text-brand">●</span> HARIHARAN 
        </a>

        <button
          className="md:hidden px-3 py-2 rounded-md border border-border hover-scale"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground/80 hover:text-foreground story-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <SocialLinks variant="horizontal" showResume={false} />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("md:hidden border-t border-border/60", open ? "block" : "hidden")}
        onClick={() => setOpen(false)}>
        <ul className="container py-2 grid gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-2 text-foreground/90">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
