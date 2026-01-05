import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import heroImage from "@/assets/hero-glass.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceShower from "@/assets/service-shower.jpg";
import serviceMirrors from "@/assets/service-mirrors.jpg";
import serviceLaminated from "@/assets/service-laminated.jpg";
import serviceDoubleGlazing from "@/assets/service-double-glazing.jpg";

const projectImages = [
  serviceOffice,
  serviceShower,
  serviceMirrors,
  serviceLaminated,
  serviceDoubleGlazing,
  heroImage,
];

const categories = ["All", "Office", "Residential", "Industrial"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Projects"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Our Portfolio</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of completed glass and glazing projects across 
              Dubai and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border"
                style={{ 
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0 
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={projectImages[index % projectImages.length]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let us bring your vision to life with our premium glass solutions. 
              Contact us for a free consultation.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/quote">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
