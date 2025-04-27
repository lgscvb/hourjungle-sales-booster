
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://www.hourjungle.com/" target="_blank" rel="noopener noreferrer">
            <h1 className="text-xl font-bold text-brand-purple">
              Hour<span className="text-brand-blue">Jungle</span>
            </h1>
          </a>
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-gray-700 hover:text-brand-purple transition-colors">服務特色</a>
          <a href="#pricing" className="text-gray-700 hover:text-brand-purple transition-colors">方案比較</a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors">客戶評價</a>
          <a href="#faq" className="text-gray-700 hover:text-brand-purple transition-colors">常見問題</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <a 
            href="tel:0423760282"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', { 
                  'event_category': 'conversion', 
                  'event_label': 'call_phone' 
                });
              }
            }}
            className="cta-button hidden md:flex"
          >
            <Phone size={18} />
            <span>0423760282</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
