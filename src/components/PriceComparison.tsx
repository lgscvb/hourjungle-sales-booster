
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PriceComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState("yearly");
  
  const calculateDailyPrice = (total: number, months: number) => {
    return Math.round(total / (months * 30));
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">價格透明比較</h2>
        <p className="section-subtitle">
          我們提供具有競爭力的價格，並提供更多價值和服務
        </p>

        <div className="flex justify-center mb-8">
          <Tabs defaultValue="yearly" className="w-full max-w-3xl" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="yearly">年約方案</TabsTrigger>
                <TabsTrigger value="biannual">半年約方案</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="yearly" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1 bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle>一般服務商</CardTitle>
                    <CardDescription>缺乏專業支援與保障</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$3,000</span>
                      <span className="text-gray-500 ml-2">/ 月</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      平均每天 {calculateDailyPrice(3000, 1)} 元
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Check size={18} className="text-gray-400 mr-2" />
                      <span>基本營業登記</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">專業顧問團隊</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">免費會議室使用</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">退費保證</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">免費稅務諮詢</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 bg-white border-brand-purple shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-brand-purple text-white px-4 py-1 text-sm font-semibold">
                    推薦方案
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-purple">HourJungle 年約方案</CardTitle>
                    <CardDescription>全方位專業服務與保障</CardDescription>
                    <div className="mt-4 flex items-end">
                      <span className="text-4xl font-bold text-brand-purple">$2,000</span>
                      <span className="text-gray-500 ml-2">/ 月</span>
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        省下 $1,000/月
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      平均每天只要 <span className="font-bold text-brand-purple">{calculateDailyPrice(24000, 12)}</span> 元
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>專業營業登記服務</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>專業會計師和律師顧問團隊</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span><strong>免費使用會議室</strong> (每月80小時)</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span><strong>全額退款保證</strong> (合約明訂)</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span><strong>一年免費稅務諮詢</strong></span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>蝦皮商城免費健檢</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>創業課程免費參與權</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>國際育成中心資源</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <div className="bg-gray-50 p-4 rounded-lg w-full">
                        <h4 className="text-center font-semibold mb-2">價格明細：年繳方案</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>營業登記（年繳）</span>
                            <span className="font-semibold">$24,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>押金（可退還）</span>
                            <span className="font-semibold">$6,000</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-200">
                            <span className="font-bold">總計</span>
                            <span className="font-bold">$30,000</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
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
                        <span>加入LINE了解詳情</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="biannual" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1 bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle>一般服務商</CardTitle>
                    <CardDescription>缺乏專業支援與保障</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$3,000</span>
                      <span className="text-gray-500 ml-2">/ 月</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      平均每天 {calculateDailyPrice(3000, 1)} 元
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Check size={18} className="text-gray-400 mr-2" />
                      <span>基本營業登記</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">專業顧問團隊</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">免費會議室使用</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">退費保證</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-2" />
                      <span className="text-gray-400">免費稅務諮詢</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 bg-white border-brand-purple shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-brand-purple text-white px-4 py-1 text-sm font-semibold">
                    推薦方案
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-purple">HourJungle 半年約方案</CardTitle>
                    <CardDescription>全方位專業服務與保障</CardDescription>
                    <div className="mt-4 flex items-end">
                      <span className="text-4xl font-bold text-brand-purple">$1,800</span>
                      <span className="text-gray-500 ml-2">/ 月</span>
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        省下 $1,200/月
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      平均每天只要 <span className="font-bold text-brand-purple">{calculateDailyPrice(10800, 6)}</span> 元
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>專業營業登記服務</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>專業會計師和律師顧問團隊</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span><strong>免費使用會議室</strong> (每月80小時)</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span><strong>全額退款保證</strong> (合約明訂)</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span><strong>一年免費稅務諮詢</strong></span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>蝦皮商城免費健檢</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>創業課程免費參與權</span>
                        </div>
                        <div className="flex items-center">
                          <Check size={18} className="text-green-600 mr-2" />
                          <span>國際育成中心資源</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <div className="bg-gray-50 p-4 rounded-lg w-full">
                        <h4 className="text-center font-semibold mb-2">價格明細：半年約方案</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>營業登記（半年繳）</span>
                            <span className="font-semibold">$10,800</span>
                          </div>
                          <div className="flex justify-between">
                            <span>押金（可退還）</span>
                            <span className="font-semibold">$6,000</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-200">
                            <span className="font-bold">總計</span>
                            <span className="font-bold">$16,800</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
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
                        <span>加入LINE了解詳情</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">
            專業服務，讓創業更輕鬆
          </h3>
          <p className="text-gray-600 text-center mb-6">
            為何每天多花一杯咖啡的錢，就能獲得專業服務團隊支援？
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-light-purple rounded-full p-1 text-brand-purple mr-3 mt-1">
                <Check size={16} />
              </div>
              <p>
                <strong>省時省力</strong>：無需花時間研究法規，專業團隊為您處理所有手續
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-light-purple rounded-full p-1 text-brand-purple mr-3 mt-1">
                <Check size={16} />
              </div>
              <p>
                <strong>降低風險</strong>：會計師、律師團隊協助，確保合規並有退款保證
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-light-purple rounded-full p-1 text-brand-purple mr-3 mt-1">
                <Check size={16} />
              </div>
              <p>
                <strong>增值服務</strong>：會議室使用、稅務諮詢、創業課程，助您業務成長
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
