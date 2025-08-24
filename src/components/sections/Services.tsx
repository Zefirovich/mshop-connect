import { Search, Users, TrendingUp, FileText, Handshake, Settings } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Deal Sourcing & Screening",
      description: "RFP/RFQ support, supplier shortlists, vendor qualification and market intelligence gathering.",
      features: ["Supplier identification", "Vendor assessment", "Market research", "RFP coordination"]
    },
    {
      icon: Users,
      title: "B2B Partner Matchmaking",
      description: "Distributors, resellers, agency and joint venture introductions across multiple sectors.",
      features: ["Distributor networks", "Reseller connections", "JV partnerships", "Agency agreements"]
    },
    {
      icon: TrendingUp,
      title: "Market Entry Support",
      description: "Landscape scans, competitive benchmarking, and soft-landing guidance for new markets.",
      features: ["Market analysis", "Competitive landscape", "Entry strategies", "Regulatory guidance"]
    },
    {
      icon: FileText,
      title: "Documentation & Compliance Liaison",
      description: "Counterparty KYC coordination, document hygiene, and audit trail management via licensed third parties.",
      features: ["KYC coordination", "Document management", "Compliance checks", "Audit trails"]
    },
    {
      icon: Handshake,
      title: "Negotiation Support (Non-Legal)",
      description: "Term sheet structuring, facilitation, timeline management, and deal coordination.",
      features: ["Term structuring", "Deal facilitation", "Timeline management", "Coordination support"]
    },
    {
      icon: Settings,
      title: "Project & Logistics Orchestration",
      description: "Critical path management, vendor hand-offs, status reporting, and project coordination.",
      features: ["Project management", "Vendor coordination", "Status reporting", "Timeline tracking"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Our Services</h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Comprehensive commercial brokerage services designed to streamline B2B transactions 
            and facilitate successful business partnerships across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-corporate p-6 group hover:border-primary/20">
              <div className="w-12 h-12 mb-4 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="heading-subsection mb-3">{service.title}</h3>
              <p className="body-base text-muted-foreground mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};