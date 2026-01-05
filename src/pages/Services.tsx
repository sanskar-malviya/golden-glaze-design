import { Link } from "react-router-dom";
import { ArrowRight, Building2, Droplets, Square, Palette, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import heroImage from "@/assets/hero-glass.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceShower from "@/assets/service-shower.jpg";
import serviceMirrors from "@/assets/service-mirrors.jpg";
import serviceLaminated from "@/assets/service-laminated.jpg";
import serviceDoubleGlazing from "@/assets/service-double-glazing.jpg";

const serviceImages: Record<string, string> = {
  "glass-office-partitions": serviceOffice,
  "glass-shower-partitions": serviceShower,
  "mirrors-installation": serviceMirrors,
  "laminated-back-painted-glass": serviceLaminated,
  "double-glazing-glass": serviceDoubleGlazing,
};

const iconComponents: Record<string, React.ReactNode> = {
  "building-2": <Building2 className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  square: <Square className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
};

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                Glass Solutions
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From design consultation to professional installation, we deliver end-to-end 
              glass and glazing services tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {iconComponents[service.icon]}
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" size="lg" asChild>
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team is ready to discuss your unique requirements and provide tailored 
              glass solutions for any project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/quote">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
