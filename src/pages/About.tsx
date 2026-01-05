import { Award, Target, Eye, Users } from "lucide-react";
import { companyInfo, whyChooseUs } from "@/lib/constants";
import serviceMirrors from "@/assets/service-mirrors.jpg";
import heroImage from "@/assets/hero-glass.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Tiras Diamah"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">About Us</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Excellence in{" "}
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                Glass & Glazing
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Over 15 years of delivering premium glass solutions across Dubai and the UAE
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.name} has been at the forefront of the glass and glazing industry 
                in the UAE since our establishment. What began as a vision to bring international 
                quality standards to the local market has grown into one of Dubai's most trusted 
                names in glass solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Jebel Ali Industrial Area, our state-of-the-art facility combines 
                cutting-edge technology with skilled craftsmanship. We've successfully completed 
                over 500 projects, ranging from luxury residential installations to large-scale 
                commercial developments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, safety, and customer satisfaction has earned us a 
                reputation for excellence that speaks for itself through our portfolio of 
                prestigious projects across the Emirates.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={serviceMirrors}
                  alt="Our craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-xl bg-gold-gradient shadow-xl">
                <p className="text-4xl font-display font-bold text-primary-foreground">500+</p>
                <p className="text-primary-foreground/80 text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading glass and glazing solutions provider in the GCC region, 
                recognized for innovation, quality, and sustainable practices that set new 
                industry standards.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional glass solutions that combine aesthetic excellence with 
                functional performance, while maintaining the highest standards of safety, 
                quality, and customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Meet Our Managing Director
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center glass-card rounded-3xl p-10">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gold-gradient flex items-center justify-center shadow-xl">
                  <span className="text-6xl font-display font-bold text-primary-foreground">MS</span>
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {companyInfo.managingDirector}
                </h3>
                <p className="text-primary font-medium mb-6">Managing Director</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over two decades of experience in the construction and glazing industry, 
                  Mr. Sandhu has led Tiras Diamah to become a trusted name in Dubai's glass sector. 
                  His vision for excellence and innovation continues to drive the company's 
                  growth and reputation for quality.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm">Leading a team of 50+ skilled professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Our Values</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((value, index) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300"
                style={{ 
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0 
                }}
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
