import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo, services } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/Screenshot_2026-01-05_152806-removebg-preview.png" 
                alt="Tiras Diamah Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Tiras Diamah
                </h3>
                <p className="text-xs text-muted-foreground">Technical Services LLC</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium glass and glazing solutions for residential and commercial projects across Dubai and the UAE. 
              Excellence in craftsmanship since establishment.
            </p>
            <div className="flex gap-4">
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={companyInfo.social[social as keyof typeof companyInfo.social]}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Request Quote", href: "/quote" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-semibold text-foreground">Our Services</h4>
            <nav className="flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                {companyInfo.email}
              </a>
              {companyInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  {phone}
                </a>
              ))}
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                {companyInfo.location}
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Fri: {companyInfo.workingHours.weekdays}</p>
                  <p>Sat: {companyInfo.workingHours.saturday}</p>
                  <p>Sun: {companyInfo.workingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
