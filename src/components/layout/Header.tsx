import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary border-b border-border">
        <div className="container-custom py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phones[0]}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                {companyInfo.phones[0]}
              </a>
            </div>
            <div className="text-muted-foreground">
              {companyInfo.location}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">TD</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-lg font-semibold text-foreground leading-tight">
                  Tiras Diamah
                </h1>
                <p className="text-xs text-muted-foreground">Technical Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary",
                    "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300",
                    location.pathname === link.href && "after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="gold-outline" size="default" asChild>
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button variant="gold" size="default" asChild>
                <a href={`tel:${companyInfo.phones[0]}`}>
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-20 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="gold-outline" size="lg" asChild className="w-full">
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button variant="gold" size="lg" asChild className="w-full">
                <a href={`tel:${companyInfo.phones[0]}`}>
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
