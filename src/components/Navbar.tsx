
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-3">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://www.hourjungle.com/" target="_blank" rel="noopener noreferrer">
            <h1 className="text-xl font-bold text-brand-blue">
              Hour<span className="text-brand-dark-blue">Jungle</span>
            </h1>
          </a>
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-gray-700 hover:text-brand-blue transition-colors">服務特色</a>
          <a href="#pricing" className="text-gray-700 hover:text-brand-blue transition-colors">方案比較</a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-blue transition-colors">客戶評價</a>
          <a href="#faq" className="text-gray-700 hover:text-brand-blue transition-colors">常見問題</a>
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
            className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-dark-blue transition-colors"
          >
            <Phone size={18} />
            <span>0423760282</span>
          </a>
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <a href="https://www.hourjungle.com/" target="_blank" rel="noopener noreferrer">
              <h1 className="text-xl font-bold text-brand-blue">
                Hour<span className="text-brand-dark-blue">Jungle</span>
              </h1>
            </a>
            <button 
              className="text-gray-700"
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <a 
              href="#features" 
              className="text-lg text-gray-700 hover:text-brand-blue transition-colors py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              服務特色
            </a>
            <a 
              href="#pricing" 
              className="text-lg text-gray-700 hover:text-brand-blue transition-colors py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              方案比較
            </a>
            <a 
              href="#testimonials" 
              className="text-lg text-gray-700 hover:text-brand-blue transition-colors py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              客戶評價
            </a>
            <a 
              href="#faq" 
              className="text-lg text-gray-700 hover:text-brand-blue transition-colors py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              常見問題
            </a>
            <a 
              href="tel:0423760282"
              className="cta-button mt-4 justify-center"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click', { 
                    'event_category': 'conversion', 
                    'event_label': 'call_phone' 
                  });
                }
                toggleMobileMenu();
              }}
            >
              <Phone size={18} />
              <span>立即來電：0423760282</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
