import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Building2, Droplets, Square, Palette, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, companyInfo } from "@/lib/constants";
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
  "building-2": <Building2 className="w-12 h-12" />,
  droplets: <Droplets className="w-12 h-12" />,
  square: <Square className="w-12 h-12" />,
  palette: <Palette className="w-12 h-12" />,
  layers: <Layers className="w-12 h-12" />,
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="section-padding container-custom text-center">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
        <Button variant="gold" asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.id !== serviceId);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImages[service.id]}
            alt={service.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container-custom relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
              {iconComponents[service.icon]}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-muted-foreground text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-8">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Ideal Applications
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-90" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contact us today for a free consultation and quote on your {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 font-semibold"
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
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href={`tel:${companyInfo.phones[0]}`}>
                  Call {companyInfo.phones[0]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Explore Other Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.id}
                to={`/services/${otherService.id}`}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {otherService.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {otherService.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
