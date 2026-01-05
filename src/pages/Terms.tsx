import { companyInfo } from "@/lib/constants";

const Terms = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services provided by {companyInfo.name}, you 
                agree to be bound by these Terms of Service. If you do not agree to these 
                terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                2. Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide glass and glazing services including but not limited to glass 
                office partitions, shower enclosures, mirror installations, laminated glass, 
                and double glazing solutions. All services are subject to availability and 
                our assessment of project feasibility.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                3. Quotes and Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All quotes provided are valid for 30 days unless otherwise specified. 
                Prices are subject to change based on material costs, project specifications, 
                and site conditions. Final pricing will be confirmed in writing before work 
                commences.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                4. Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms will be specified in individual project contracts. Typically, 
                we require a deposit before commencement and balance upon completion. All 
                payments must be made in UAE Dirhams (AED) unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                5. Warranty
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide warranties on both materials and workmanship as specified in 
                individual project contracts. Warranty terms vary based on product type 
                and application. Warranties do not cover damage caused by misuse, accidents, 
                or unauthorized modifications.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                6. Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our liability is limited to the value of the services provided. We are not 
                liable for any indirect, incidental, or consequential damages arising from 
                the use of our services. All work is performed in accordance with UAE 
                building codes and safety standards.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, images, logos, and designs, 
                are the property of {companyInfo.name} and are protected by applicable 
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance 
                with the laws of the United Arab Emirates. Any disputes shall be subject 
                to the exclusive jurisdiction of the courts of Dubai.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                9. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-card border border-border">
                <p className="text-foreground font-medium">{companyInfo.name}</p>
                <p className="text-muted-foreground">{companyInfo.location}</p>
                <p className="text-muted-foreground">{companyInfo.email}</p>
                <p className="text-muted-foreground">{companyInfo.phones[0]}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
