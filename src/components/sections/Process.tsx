import { Search, CheckCircle, FileText, Eye, Heart } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "Understanding your requirements, objectives, and success criteria through detailed consultation."
    },
    {
      number: "02", 
      icon: CheckCircle,
      title: "Shortlist & Validation",
      description: "Identifying and qualifying potential partners, suppliers, or opportunities that match your criteria."
    },
    {
      number: "03",
      icon: FileText,
      title: "Terms Coordination",
      description: "Facilitating initial discussions, term sheet development, and preliminary agreement structuring."
    },
    {
      number: "04",
      icon: Eye,
      title: "Execution Oversight",
      description: "Managing the transaction process, documentation flow, and stakeholder coordination."
    },
    {
      number: "05",
      icon: Heart,
      title: "Post-deal Follow-up",
      description: "Ensuring successful implementation and providing ongoing support as needed."
    }
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">How We Work</h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Our structured approach ensures efficient deal execution while maintaining 
            the highest standards of professional service and confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-primary-hover transition-colors duration-300">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 mx-auto bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border-light transform translate-x-8">
                    <div className="w-full h-full bg-gradient-to-r from-primary via-primary to-border-light"></div>
                  </div>
                )}
              </div>
              
              <h3 className="heading-subsection mb-3">{step.title}</h3>
              <p className="body-base text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};