import React from "react";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">立即聯繫我們</h2>
        <p className="section-subtitle">
          讓我們的專業團隊為您提供營業登記服務，解決您的創業難題
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="flex-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-center">聯絡資訊</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-light-purple p-2 rounded-full">
                    <Phone className="text-brand-purple" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">電話</p>
                    <a 
                      href="tel:0423760282" 
                      className="text-brand-purple hover:underline"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'click', { 
                            'event_category': 'conversion', 
                            'event_label': 'call_phone' 
                          });
                        }
                      }}
                    >
                      0423760282
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-brand-light-purple p-2 rounded-full">
                    <MessageCircle className="text-brand-purple" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">LINE</p>
                    <a 
                      href="https://lin.ee/kOiOEdw" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'click', { 
                            'event_category': 'conversion', 
                            'event_label': 'add_line' 
                          });
                        }
                      }}
                    >
                      加入官方LINE
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-brand-light-purple p-2 rounded-full">
                    <MapPin className="text-brand-purple" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">地址</p>
                    <a 
                      href="https://maps.app.goo.gl/dsx33vTuUBAy4YUx9" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="hover:text-brand-purple hover:underline"
                    >
                      403台中市西區大忠南街55號7F-5
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-brand-light-purple p-2 rounded-full">
                    <Clock className="text-brand-purple" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">營業時間</p>
                    <p className="text-gray-600">
                      週一至週五 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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
            
            <div className="bg-brand-light-purple p-6 rounded-lg border border-brand-purple/20">
              <h3 className="text-xl font-bold mb-4 text-center">把握優惠</h3>
              <p className="text-center mb-6">
                五月底前簽約即可享受：免費青創貸款計劃書撰寫協助，以及最高 10 萬補助申請！
              </p>
              <div className="text-center">
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
                  className="inline-block cta-button bg-green-600 hover:bg-green-700 text-center animate-bounce-slow"
                >
                  <MessageCircle size={18} />
                  <span>立即諮詢優惠詳情</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="h-full rounded-lg overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3436752685643!2d120.6641506!3d24.1548276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693db243260729%3A0x9d9cc32e1bbd1a7f!2s403%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80%E5%A4%A7%E5%BF%A0%E5%8D%97%E8%A1%9755%E8%99%9F7F-5!5e0!3m2!1szh-TW!2stw!4v1714523202360!5m2!1szh-TW!2stw"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="HourJungle Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
