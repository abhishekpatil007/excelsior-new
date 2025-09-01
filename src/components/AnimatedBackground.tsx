'use client';

import { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [stockSymbols, setStockSymbols] = useState<Array<{
    id: number;
    symbol: string;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  const [candlesticks, setCandlesticks] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate random stock symbols
    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'NVDA', 'META', 'NFLX', 'AMD', 'INTC'];
    const newStockSymbols = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setStockSymbols(newStockSymbols);

    // Generate random candlesticks
    const newCandlesticks = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8
    }));
    setCandlesticks(newCandlesticks);
  }, []);

  return (
    <>
      {/* Stock chart grid background */}
      <div className="stock-chart-bg"></div>

      {/* Floating stock symbols */}
      <div className="floating-stocks">
        {stockSymbols.map((stock) => (
          <div
            key={stock.id}
            className="stock-symbol"
            style={{
              left: `${stock.x}%`,
              top: `${stock.y}%`,
              animationDelay: `${stock.delay}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {stock.symbol}
          </div>
        ))}
      </div>

      {/* Candlestick patterns */}
      <div className="candlestick-bg">
        {candlesticks.map((stick) => (
          <div
            key={stick.id}
            className="candlestick"
            style={{
              left: `${stick.x}%`,
              top: `${stick.y}%`,
              animationDelay: `${stick.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Additional animated elements - very dark */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Price indicators - very dark */}
        <div className="absolute top-1/3 right-10 text-cyan-400 text-xs opacity-10 animate-pulse">
          $185.92
        </div>
        <div className="absolute top-2/3 left-10 text-green-400 text-xs opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          +2.34%
        </div>
        
        {/* Volume bars - very dark */}
        <div className="absolute bottom-1/4 left-1/4 w-1 h-8 bg-gradient-to-t from-cyan-400 to-transparent opacity-8 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-12 bg-gradient-to-t from-green-400 to-transparent opacity-8 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-1 h-6 bg-gradient-to-t from-cyan-400 to-transparent opacity-8 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </>
  );
};

export default AnimatedBackground; 