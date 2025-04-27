
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageCircle } from "lucide-react";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">常見問題</h2>
        <p className="section-subtitle">
          我們整理了客戶最常詢問的問題及解答
        </p>

        <div className="mt-8 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                營業登記需要準備什麼資料？
              </AccordionTrigger>
              <AccordionContent>
                您需要提供負責人身份證正反面影本、預定的公司名稱選項、營業項目代碼、資本額規劃等基本資料。其餘文件準備與申請程序，我們的專業團隊將全程協助您。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                營業登記需要多久時間？
              </AccordionTrigger>
              <AccordionContent>
                一般情況下，從資料準備到核准約需2-3週的時間。若有特殊情況，我們會提前告知您可能的延遲。我們的專業團隊會盡量縮短流程時間，讓您能夠儘快開始營業。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                什麼是「全額退款保證」？
              </AccordionTrigger>
              <AccordionContent>
                我們是全台灣唯一敢在合約內註明，如因我方因素導致主管機關不予核准，我們將全額退費。這是我們對自身專業服務的信心與對客戶的承諾。您可以在簽約時查看合約內的相關條款。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                會議室使用有什麼限制？
              </AccordionTrigger>
              <AccordionContent>
                我們提供每月80小時的會議室使用權，採預約制。您可以用來接待客戶、進行業務會議或是小型工作坊。使用時需提前預約，並遵守場地使用規範。詳細規定可向我們的客服人員詢問。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                免費稅務諮詢包括哪些內容？
              </AccordionTrigger>
              <AccordionContent>
                我們提供一年的免費稅務諮詢，內容包括基本稅務規劃、報稅注意事項、扣抵稅額說明、節稅建議等。若有複雜的稅務問題，我們的專業會計師也可提供進一步的服務（可能需要額外費用）。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                押金何時可以退還？
              </AccordionTrigger>
              <AccordionContent>
                押金會在合約結束且確認無任何損壞或額外費用後的30日內退還。若您提前終止合約，根據合約規定可能會有部分扣減。詳細條款請參閱合約內容。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-4">還有其他問題？</h4>
          <p className="mb-6">
            如果您有任何其他問題，請隨時聯繫我們，我們很樂意為您解答
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
              <span>透過LINE詢問</span>
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
              <span>電話諮詢：0423760282</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
