
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CountdownBanner from "@/components/CountdownBanner";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PriceComparison from "@/components/PriceComparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const Index = () => {
  // Google Analytics initialization
  useEffect(() => {
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
      
      // Make gtag available globally
      window.gtag = gtag;
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <CountdownBanner />
      <Navbar />
      <Hero />
      <Features />
      <PriceComparison />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
      
      {/* Mobile floating action button */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <a 
          href="tel:0423760282"
          className="bg-brand-purple hover:bg-brand-dark-purple text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'click', { 
                'event_category': 'conversion', 
                'event_label': 'call_phone' 
              });
            }
          }}
        >
          <Phone size={24} />
        </a>
      </div>
    </>
  );
};

export default Index;
