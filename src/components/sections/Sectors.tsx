export const Sectors = () => {
  const sectors = [
    "Consumer Goods",
    "Industrial", 
    "Hospitality",
    "Real Estate B2B",
    "Technology",
    "Retail & Distribution",
    "Services",
    "MENA/SEA Cross-border"
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto container-padding text-center">
        <h2 className="heading-section mb-6">Selected Sectors</h2>
        <p className="body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
          We work across diverse industry sectors, leveraging our network and expertise 
          to facilitate successful commercial partnerships.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector, index) => (
            <span 
              key={index}
              className="px-6 py-3 bg-surface border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:bg-primary-light transition-all duration-300 cursor-default"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};