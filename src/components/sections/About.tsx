import { Globe, Shield, Clock, FileCheck } from "lucide-react";
import businessPartnership from "@/assets/business-partnership.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="heading-section mb-6">About MSHOP Commercial Brokers</h2>
            <div className="max-w-4xl">
              <p className="body-large text-muted-foreground mb-6">
                MShop is a Dubai-based commercial brokerage company providing comprehensive brokerage 
                and consulting services for businesses. We assist with process organization, partnership 
                development, and commercial operations. We operate in full compliance with UAE laws and 
                regulations, providing our clients with a legally secure environment for their commercial activities.
                Our workflow is designed to be clear and straightforward with a personalized approach 
                tailored to your specific business needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                <span>License Number: 1427412</span>
                <span className="hidden sm:inline">•</span>
                <span>TRN: 104951360700001</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={businessPartnership} 
              alt="Professional business partnership in Dubai" 
              className="rounded-lg shadow-[var(--shadow-elevated)] w-full h-auto"
            />
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