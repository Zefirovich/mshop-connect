import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What does a commercial broker do?",
      answer: "A commercial broker facilitates B2B transactions by connecting buyers and sellers, managing documentation, coordinating due diligence, and overseeing deal execution. We act as intermediaries to streamline complex commercial transactions while ensuring compliance and transparency."
    },
    {
      question: "Do you hold client funds or provide regulated financial services?",
      answer: "No. MSHOP Commercial Brokers Co. L.L.C. does not hold client funds, process payments, or provide regulated financial services. We are a commercial brokerage focused exclusively on deal facilitation, documentation coordination, and partner matchmaking."
    },
    {
      question: "How do fees work?",
      answer: "We operate on transparent engagement models with either retainer-based or success fee structures, always agreed upfront before any work begins. Our fee arrangements are tailored to the scope and complexity of each engagement, with no hidden charges or surprise costs."
    },
    {
      question: "What are typical project timelines?",
      answer: "Project timelines typically range from 2-8 weeks depending on the scope, complexity, and number of stakeholders involved. During our initial discovery phase, we provide detailed timeline estimates with clear milestones and deliverables."
    },
    {
      question: "What geographic coverage do you provide?",
      answer: "While we are Dubai-based, our network extends globally. We leverage Dubai's strategic position as a hub connecting MENA, Europe, Asia, and African markets, enabling us to facilitate international B2B transactions across multiple regions."
    },
    {
      question: "What sectors do you work in?",
      answer: "We are sector-agnostic and work across diverse industries including consumer goods, industrial, hospitality, real estate B2B, technology, retail & distribution, services, and MENA/SEA cross-border transactions."
    },
    {
      question: "How do you ensure confidentiality?",
      answer: "We maintain strict confidentiality protocols throughout all engagements, including comprehensive non-disclosure agreements, secure document handling procedures, and limited information sharing only with pre-approved stakeholders as necessary for deal execution."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Frequently Asked Questions</h2>
          <p className="body-large text-muted-foreground">
            Common questions about our services, processes, and engagement models.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="card-corporate px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};