
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle as MessageSquare } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              營業登記 
              <span className="text-brand-purple">專業規劃</span>
              <br />
              <span className="text-brand-blue">省時又省錢</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              解決企業痛點，提供全方位營業登記服務，讓您輕鬆創業，專注發展核心業務！
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="cta-button bg-green-600 hover:bg-green-700"
                >
                  <MessageSquare size={18} />
                  <span>加入LINE諮詢</span>
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
                  className="cta-button"
                >
                  <Phone size={18} />
                  <span>立即來電：0423760282</span>
                </a>
              </div>
              
              <p className="text-sm text-gray-500">
                * 報價有效期間：即日起30天內有效
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg blur opacity-30"></div>
              <div className="bg-white p-6 rounded-lg shadow-xl relative">
                <h3 className="text-xl font-bold text-center mb-4 text-brand-purple">為什麼選擇我們？</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-purple text-white text-sm mr-2">✓</span>
                    <span>全台灣唯一提供<strong className="text-brand-purple">全額退款保證</strong>的營業登記服務</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-purple text-white text-sm mr-2">✓</span>
                    <span>專業<strong className="text-brand-purple">會計師、律師團隊</strong>顧問諮詢</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-purple text-white text-sm mr-2">✓</span>
                    <span>超過<strong className="text-brand-purple">百家蝦皮店家</strong>登記指定選擇</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-purple text-white text-sm mr-2">✓</span>
                    <span><strong className="text-brand-purple">國際知名企業</strong>阿里巴巴、UBER等指定合作</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
