"use client";

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to October 29, 2025 00:00 AM IST
    const targetDate = new Date('2025-10-29T00:00:00+05:30');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center px-4 py-3 relative ${className}`}
      style={{
        backgroundImage: 'url("https://www.figma.com/api/mcp/asset/0713626d-708c-43f6-bca8-ab4802b96b7e")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '102px',
        flexShrink: 0,
        alignSelf: 'stretch',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full items-center justify-between px-8 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center gap-[clamp(6px,0.8vw,8.95px)]">
          <div 
            className="flex gap-[clamp(1px,0.1vw,1.382px)] h-[clamp(35px,4vw,47.81px)] items-center px-0 py-[0.138px] w-[clamp(35px,4vw,46.986px)]"
          >
            <div className="flex items-center justify-center">
              <div className="flex-none scale-y-[-100%]">
                <div className="h-[clamp(35px,4vw,47.534px)] w-[clamp(35px,4vw,46.986px)]">
                  <img 
                    src="https://www.figma.com/api/mcp/asset/f1b029f7-080a-4124-adf9-aa1cbda04882" 
                    alt="Logo" 
                    className="block w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <p 
            className="font-semibold text-[clamp(20px,2.5vw,26.849px)] tracking-[0.4833px]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#6D597A'
            }}
          >
            eazyPregnancy
          </p>
        </div>

        {/* Launching Countdown - Desktop */}
        <div className="flex items-center gap-[20px] flex-1 justify-center" style={{ marginRight: '10%', fontSize: '16px' }}>
          <p 
            className="font-semibold text-[clamp(20px,2.5vw,26.849px)] tracking-[0.4833px]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#6D597A'
            }}
          >
            Launching in
          </p>
          <div className="flex items-center justify-center gap-[clamp(8px,1vw,12px)]">
            {/* Days */}
            <div className="flex flex-col items-center gap-[clamp(6px,0.8vw,8px)]">
              <div 
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: 'clamp(30px,3vw,38px)',
                  height: 'clamp(30px,3vw,38px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-[clamp(18px,2.2vw,26.849px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.days)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p 
                  className="font-normal text-[clamp(12px,1.2vw,16px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  Days
                </p>
              </div>
            </div>

            {/* Separator 1 */}
            <div className="flex items-center justify-center">
              <p 
                className="font-semibold text-[clamp(16px,2vw,20px)]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                :
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center gap-[clamp(6px,0.8vw,8px)]">
              <div 
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: 'clamp(30px,3vw,38px)',
                  height: 'clamp(30px,3vw,38px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-[clamp(18px,2.2vw,26.849px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.hours)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p 
                  className="font-normal text-[clamp(12px,1.2vw,16px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  Hours
                </p>
              </div>
            </div>

            {/* Separator 2 */}
            <div className="flex items-center justify-center">
              <p 
                className="font-semibold text-[clamp(16px,2vw,20px)]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                :
              </p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center gap-[clamp(6px,0.8vw,8px)]">
              <div 
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: 'clamp(30px,3vw,38px)',
                  height: 'clamp(30px,3vw,38px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-[clamp(18px,2.2vw,26.849px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.minutes)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p 
                  className="font-normal text-[clamp(12px,1.2vw,16px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  Mins
                </p>
              </div>
            </div>

            {/* Separator 3 */}
            <div className="flex items-center justify-center">
              <p 
                className="font-semibold text-[clamp(16px,2vw,20px)]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                :
              </p>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center gap-[clamp(6px,0.8vw,8px)]">
              <div 
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: 'clamp(30px,3vw,38px)',
                  height: 'clamp(30px,3vw,38px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-[clamp(18px,2.2vw,26.849px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.seconds)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p 
                  className="font-normal text-[clamp(12px,1.2vw,16px)]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  Sec
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden w-full flex-col items-center gap-3">
        {/* Logo Section - Mobile */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[38px] w-[37px]">
                <img 
                  src="https://www.figma.com/api/mcp/asset/f1b029f7-080a-4124-adf9-aa1cbda04882" 
                  alt="Logo" 
                  className="block w-full h-full"
                />
              </div>
            </div>
          </div>
          <p 
            className="font-semibold text-lg tracking-[0.4833px]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#6D597A'
            }}
          >
            eazyPregnancy
          </p>
        </div>

        {/* Countdown - Mobile */}
        <div className="flex items-center gap-2">
          <p 
            className="font-semibold text-base tracking-[0.4833px]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#6D597A'
            }}
          >
            Launching in
          </p>
          
          {/* Mobile Timer */}
          <div className="flex items-center gap-1.5">
            {/* Days */}
            <div className="flex flex-col items-center gap-1">
              <div 
                className="flex items-center justify-center rounded"
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-base"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.days)}
                </p>
              </div>
              <p 
                className="font-normal text-xs"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                Days
              </p>
            </div>

            <p className="font-semibold text-base" style={{ color: '#6D597A', marginTop: '-16px' }}>:</p>

            {/* Hours */}
            <div className="flex flex-col items-center gap-1">
              <div 
                className="flex items-center justify-center rounded"
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-base"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.hours)}
                </p>
              </div>
              <p 
                className="font-normal text-xs"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                Hours
              </p>
            </div>

            <p className="font-semibold text-base" style={{ color: '#6D597A', marginTop: '-16px' }}>:</p>

            {/* Minutes */}
            <div className="flex flex-col items-center gap-1">
              <div 
                className="flex items-center justify-center rounded"
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-base"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.minutes)}
                </p>
              </div>
              <p 
                className="font-normal text-xs"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                Mins
              </p>
            </div>

            <p className="font-semibold text-base" style={{ color: '#6D597A', marginTop: '-16px' }}>:</p>

            {/* Seconds */}
            <div className="flex flex-col items-center gap-1">
              <div 
                className="flex items-center justify-center rounded"
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <p 
                  className="font-semibold text-base"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D597A'
                  }}
                >
                  {formatNumber(timeLeft.seconds)}
                </p>
              </div>
              <p 
                className="font-normal text-xs"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D597A'
                }}
              >
                Sec
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;