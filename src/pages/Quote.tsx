import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { services, companyInfo } from "@/lib/constants";
import heroImage from "@/assets/hero-glass.jpg";

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will review your requirements and contact you within 24 hours with a detailed quote.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Request a Quote"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Free Quote</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Request a{" "}
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                Quote
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and our team will provide you with a detailed 
              quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                    Personal Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company Name</label>
                      <Input
                        name="company"
                        placeholder="Your company (optional)"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                    Project Information
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Service Required *</label>
                      <select
                        name="service"
                        required
                        className="flex h-10 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                        <option value="other">Other / Multiple Services</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Project Type *</label>
                        <select
                          name="projectType"
                          required
                          className="flex h-10 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Project Location</label>
                        <Input
                          name="location"
                          placeholder="Dubai, Abu Dhabi, etc."
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Estimated Area (sqm)</label>
                        <Input
                          name="area"
                          type="number"
                          placeholder="e.g., 50"
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Preferred Timeline</label>
                        <select
                          name="timeline"
                          className="flex h-10 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (Within 1 week)</option>
                          <option value="soon">Soon (1-4 weeks)</option>
                          <option value="flexible">Flexible (1-3 months)</option>
                          <option value="planning">Just Planning</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project Details *</label>
                      <Textarea
                        name="details"
                        placeholder="Please describe your project requirements, specifications, and any other relevant details..."
                        rows={6}
                        required
                        className="bg-secondary border-border resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="gold" size="xl" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="gold-outline" size="xl" asChild>
                    <a href={`tel:${companyInfo.phones[0]}`}>
                      <Phone className="w-5 h-5" />
                      Call Instead
                    </a>
                  </Button>
                </div>
              </form>
            </div>

            {/* Trust Note */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm">
                Your information is secure and will only be used to prepare your quote. 
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
