import { Link } from "react-router-dom";
import { ArrowRight, Phone, Award, Users, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo, services, whyChooseUs } from "@/lib/constants";
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

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
  "shield-check": <ShieldCheck className="w-8 h-8" />,
};

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium glass office interior with Dubai skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl space-y-8" style={{ animation: "fade-in-up 0.8s ease-out forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Dubai's Premier Glass Specialists</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Premium Glass &{" "}
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                Glazing Solutions
              </span>
              {" "}in Dubai
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Transform your spaces with our expert glass installations. From sleek office partitions 
              to luxury shower enclosures, we deliver excellence in every project.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/quote">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={`tel:${companyInfo.phones[0]}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "15+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Glass Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From design to installation, we provide end-to-end glass and glazing services 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                style={{ 
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0 
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImages[service.id]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-primary font-medium mb-4">Why Choose Us</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Excellence in Every Detail
                </h2>
                <p className="text-muted-foreground text-lg">
                  With over 15 years of experience in the UAE, we've built a reputation for 
                  delivering premium glass solutions that exceed expectations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    style={{ 
                      animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                      opacity: 0 
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {iconMap[item.icon]}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={serviceMirrors}
                  alt="Premium glass installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 rounded-2xl bg-card border border-border shadow-xl">
                <p className="text-4xl font-display font-bold text-primary mb-2">15+</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold-gradient flex items-center justify-center">
              <span className="text-4xl font-display font-bold text-primary-foreground">MS</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {companyInfo.managingDirector}
            </h3>
            <p className="text-primary font-medium mb-6">Managing Director</p>
            <blockquote className="text-muted-foreground text-lg italic leading-relaxed max-w-2xl mx-auto">
              "Our commitment to quality and customer satisfaction has made us a trusted name in 
              Dubai's glass industry. Every project we undertake reflects our dedication to 
              excellence and innovation."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Get in touch with our team for a free consultation and quote. 
              Let's bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-lg"
                asChild
              >
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                asChild
              >
                <a href={`tel:${companyInfo.phones[0]}`}>
                  <Phone className="w-5 h-5" />
                  {companyInfo.phones[0]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
