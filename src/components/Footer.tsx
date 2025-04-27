
import React from "react";
import { MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">HourJungle</h3>
            <p className="text-gray-300 mb-4">
              專業的營業登記服務提供商，助您創業無憂，讓您專注於發展核心業務。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://lin.ee/kOiOEdw" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click', { 
                      'event_category': 'conversion', 
                      'event_label': 'add_line' 
                    });
                  }
                }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
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
                className="text-brand-blue hover:text-brand-dark-blue transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">快速導航</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">服務特色</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">方案比較</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">客戶評價</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">常見問題</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">聯繫我們</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>台中市西屯區市政北二路238號</p>
              <p>
                <a 
                  href="tel:0423760282" 
                  className="hover:text-white transition-colors"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', { 
                        'event_category': 'conversion', 
                        'event_label': 'call_phone' 
                      });
                    }
                  }}
                >
                  電話：0423760282
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">營業時間</h4>
            <p className="text-gray-300">週一至週五</p>
            <p className="text-gray-300">09:00 - 18:00</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} HourJungle. 保留所有權利。</p>
          <p className="mt-2">
            <a href="https://www.hourjungle.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              訪問公司官網
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
