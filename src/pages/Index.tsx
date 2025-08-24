import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Sectors } from "@/components/sections/Sectors";
import { WhyWorkWithUs } from "@/components/sections/WhyWorkWithUs";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Process />
      <Sectors />
      <WhyWorkWithUs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
