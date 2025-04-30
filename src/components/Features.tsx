
import React from "react";
import { Check, Clock, MessageCircle, Phone } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">企業面臨的挑戰與我們的解決方案</h2>
        <p className="section-subtitle">
          營業登記過程繁瑣複雜，我們提供專業服務，讓您輕鬆應對各種挑戰
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Pain Point 1 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">時間就是金錢</h3>
            <p className="text-gray-600 mb-4">
              到處奔波辦理登記耗費大量時間，影響您的核心業務發展。
            </p>
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <h4 className="font-semibold text-primary mb-2">我們的解決方案</h4>
              <p className="text-gray-700">
                專業團隊全程代辦，<strong>節省您90%的時間</strong>，讓您專注於業務發展。
              </p>
            </div>
          </div>
          
          {/* Pain Point 2 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <MessageCircle className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">專業知識缺乏</h3>
            <p className="text-gray-600 mb-4">
              法規繁多且常變動，沒有專業知識容易出錯，造成核准延遲或被駁回。
            </p>
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <h4 className="font-semibold text-primary mb-2">我們的解決方案</h4>
              <p className="text-gray-700">
                <strong>專業會計師與律師團隊顧問</strong>，確保申請符合最新法規，大幅提高一次核准率。
              </p>
            </div>
          </div>
          
          {/* Pain Point 3 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Check className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">風險管控</h3>
            <p className="text-gray-600 mb-4">
              選擇不專業的服務提供商，可能導致後續稅務風險與法律問題。
            </p>
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <h4 className="font-semibold text-primary mb-2">我們的解決方案</h4>
              <p className="text-gray-700">
                <strong>台灣唯一敢在合約註明全額退款保證</strong>，一年免費稅務諮詢，降低您的營運風險。
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-secondary p-8 rounded-md border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-6">還在猶豫什麼？</h3>
          <p className="text-center text-lg mb-8">
            每延遲一天決策，就是<span className="text-primary font-bold">錯失一天商機</span>，
            讓專業的我們為您解決所有煩惱！
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              className="cta-button bg-green-600 hover:bg-green-700 text-center"
            >
              <MessageCircle size={18} />
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
              className="cta-button text-center"
            >
              <Phone size={18} />
              <span>立即來電：0423760282</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
