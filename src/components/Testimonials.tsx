
import React from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Phone, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "陳先生",
    company: "蝦皮賣家",
    testimonial: "透過HourJungle協助營業登記，省下了大量時間，專業團隊幫我解決了許多繁瑣的問題，讓我可以專注在網店經營上。非常感謝！",
    rating: 5,
  },
  {
    name: "王小姐",
    company: "獨立設計師",
    testimonial: "我對營業登記完全沒概念，很慶幸找到HourJungle。他們的會計師給了我非常實用的建議，還幫我規劃了稅務方面的事情，讓我創業路上少走了許多彎路。",
    rating: 5,
  },
  {
    name: "林先生",
    company: "科技新創",
    testimonial: "全額退款保證讓我很安心選擇了HourJungle。果然服務很專業，不僅幫我完成了營業登記，還介紹了其他資源給我的新創公司。強力推薦！",
    rating: 5,
  },
  {
    name: "張老闆",
    company: "餐飲業",
    testimonial: "會議室的使用權對我來說非常實用，可以在那邊接待客戶、開會，讓我的小餐廳創業初期節省了很多成本。服務人員也都很親切專業。",
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  ));
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">客戶評價</h2>
        <p className="section-subtitle">
          看看我們的客戶如何評價我們的服務
        </p>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="p-6 h-full flex flex-col border border-gray-200 shadow-sm">
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="italic text-gray-700 mb-4 flex-grow">
                        "{testimonial.testimonial}"
                      </blockquote>
                      <footer className="mt-auto">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </footer>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">加入我們的客戶，體驗專業的營業登記服務</p>
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

export default Testimonials;
