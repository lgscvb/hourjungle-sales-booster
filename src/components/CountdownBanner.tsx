
import React, { useEffect, useState } from "react";

const CountdownBanner: React.FC = () => {
  // Set end date to May 31, 2025
  const endDate = new Date("2025-05-31T23:59:59");
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-3 animate-pulse-slow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-4">
          <span className="font-semibold text-lg">限時優惠！五月底前簽約：</span>
          <span className="font-semibold">
            免費青創貸款計劃書撰寫協助 + 最高 10 萬補助申請
          </span>
          <div className="flex items-center gap-1 font-mono">
            <div className="flex flex-col items-center">
              <span className="bg-white text-primary px-2 py-1 rounded-md text-sm md:text-base font-bold">
                {timeLeft.days.toString().padStart(2, "0")}
              </span>
              <span className="text-xs mt-1">天</span>
            </div>
            :
            <div className="flex flex-col items-center">
              <span className="bg-white text-primary px-2 py-1 rounded-md text-sm md:text-base font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-xs mt-1">時</span>
            </div>
            :
            <div className="flex flex-col items-center">
              <span className="bg-white text-primary px-2 py-1 rounded-md text-sm md:text-base font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-xs mt-1">分</span>
            </div>
            :
            <div className="flex flex-col items-center">
              <span className="bg-white text-primary px-2 py-1 rounded-md text-sm md:text-base font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-xs mt-1">秒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
