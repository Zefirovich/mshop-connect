import { Shield, Zap, FileCheck, Lock, MapPin, DollarSign } from "lucide-react";
import dubaiBusiness from "@/assets/dubai-business.jpg";

export const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Vetted Network",
      description: "Carefully screened partners and counterparties across global markets"
    },
    {
      icon: Zap,
      title: "Speed & Clarity", 
      description: "Efficient processes with clear timelines and milestone tracking"
    },
    {
      icon: FileCheck,
      title: "Documentation Discipline",
      description: "Rigorous attention to documentation quality and compliance requirements"
    },
    {
      icon: Lock,
      title: "Confidentiality",
      description: "Strict confidentiality protocols protecting sensitive business information"
    },
    {
      icon: MapPin,
      title: "Dubai Hub",
      description: "Strategic location connecting MENA, Europe, Asia, and African markets"
    },
    {
      icon: DollarSign,
      title: "Transparent Engagement",
      description: "Fixed engagement models with no hidden fees or surprise charges"
    }
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Why Work With Us</h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto mb-8">
            Our commitment to excellence, transparency, and results sets us apart 
            in the commercial brokerage industry.
          </p>
          
          {/* Dubai Business Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={dubaiBusiness} 
              alt="Dubai business district skyline and commercial environment" 
              className="rounded-lg shadow-[var(--shadow-elevated)] w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="heading-subsection mb-3">{benefit.title}</h3>
              <p className="body-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};