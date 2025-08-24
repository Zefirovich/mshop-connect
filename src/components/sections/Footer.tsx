export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Compliance Notice */}
        <div className="card-corporate p-8 mb-8 bg-white text-foreground">
          <h3 className="font-semibold mb-4">Compliance & Legal</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            MSHOP Commercial Brokers Co. L.L.C. is a commercial brokerage company registered in Dubai, UAE. 
            We do not provide regulated financial services, do not process or transmit client payments, 
            and do not hold client funds. All services are limited to commercial brokerage, deal facilitation, 
            and business development coordination.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            <span>License Number: 1427412 | TRN: 104951360700001</span>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MSHOP Commercial Brokers</h3>
            <p className="text-background/80 text-sm">
              Independent commercial brokerage facilitating B2B partnerships and transactions across global markets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-background transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>Office 1317, The Binary Tower by Omniyat</p>
              <p>Business Bay, Dubai, UAE</p>
              <p>+971-54-543-7718</p>
              <p>mshopcb@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>© {currentYear} MSHOP Commercial Brokers Co. L.L.C. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Terms</a>
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};