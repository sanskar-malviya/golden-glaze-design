import { companyInfo } from "@/lib/constants";

const Privacy = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At {companyInfo.name}, we collect information you provide directly to us, 
                such as when you request a quote, contact us, or interact with our services. 
                This may include your name, email address, phone number, company name, and 
                project details.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Prepare and deliver quotes for our services</li>
                <li>Complete and manage your projects</li>
                <li>Send you updates about your projects</li>
                <li>Improve our services and website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to 
                third parties. We may share information with trusted service providers who 
                assist us in operating our website and conducting our business, as long as 
                those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet is 
                100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. 
                You may also object to or restrict certain processing of your data. To 
                exercise these rights, please contact us at {companyInfo.email}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                6. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can 
                choose to disable cookies through your browser settings, although this may 
                affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
