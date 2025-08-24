import { Globe, Shield, Clock, FileCheck } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Partner Network",
      description: "International reach with vetted counterparties"
    },
    {
      icon: Shield,
      title: "Transparent Engagement",
      description: "Clear terms and fixed engagement models"
    },
    {
      icon: FileCheck,
      title: "Documentation Rigor",
      description: "Comprehensive audit trails and compliance"
    },
    {
      icon: Clock,
      title: "Confidentiality",
      description: "Discretion and privacy in all dealings"
    }
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">About MSHOP Commercial Brokers</h2>
          <div className="max-w-4xl mx-auto">
            <p className="body-large text-muted-foreground mb-6">
              Dubai-registered commercial broker with international reach, providing sector-agnostic 
              brokerage services with emphasis on discretion, timelines, and documentation quality. 
              We facilitate B2B connections and coordinate complex commercial transactions across 
              global markets while maintaining the highest standards of professional integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-muted-foreground">
              <span>Trade License № [TL-000000]</span>
              <span className="hidden sm:inline">•</span>
              <span>Established 2024</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="card-corporate p-6 text-center group hover:border-primary/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <highlight.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};