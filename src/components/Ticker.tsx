'use client';

import { motion } from 'framer-motion';

const Ticker = () => {
  const stocks = [
    { symbol: 'RELIANCE', price: '₹2,485.92', change: '+1.85%', isPositive: true },
    { symbol: 'TCS', price: '₹3,892.45', change: '+0.92%', isPositive: true },
    { symbol: 'HDFC BANK', price: '₹1,647.30', change: '-0.45%', isPositive: false },
    { symbol: 'INFOSYS', price: '₹1,485.67', change: '+2.34%', isPositive: true },
    { symbol: 'ICICI BANK', price: '₹985.42', change: '+1.23%', isPositive: true },
    { symbol: 'HINDUNILVR', price: '₹2,647.89', change: '-0.78%', isPositive: false },
    { symbol: 'ITC', price: '₹445.67', change: '+0.67%', isPositive: true },
    { symbol: 'SBIN', price: '₹647.23', change: '+1.45%', isPositive: true },
    { symbol: 'BHARTI AIRTEL', price: '₹1,185.90', change: '+3.12%', isPositive: true },
    { symbol: 'AXIS BANK', price: '₹1,047.56', change: '-1.23%', isPositive: false },
    { symbol: 'KOTAK BANK', price: '₹1,785.34', change: '+0.89%', isPositive: true },
    { symbol: 'ASIAN PAINTS', price: '₹3,247.12', change: '+1.56%', isPositive: true },
    { symbol: 'MARUTI', price: '₹10,485.67', change: '-0.34%', isPositive: false },
    { symbol: 'SUN PHARMA', price: '₹1,247.89', change: '+2.78%', isPositive: true },
    { symbol: 'TITAN', price: '₹3,485.23', change: '+1.92%', isPositive: true },
    { symbol: 'WIPRO', price: '₹485.67', change: '-0.67%', isPositive: false },
    { symbol: 'ULTRACEMCO', price: '₹8,247.34', change: '+1.34%', isPositive: true },
    { symbol: 'TECH MAHINDRA', price: '₹1,185.90', change: '+0.78%', isPositive: true },
    { symbol: 'NESTLE', price: '₹2,485.67', change: '+1.23%', isPositive: true },
    { symbol: 'POWERGRID', price: '₹247.89', change: '-0.45%', isPositive: false }
  ];

  return (
    <div className="bg-black/50 backdrop-blur-md border-y border-cyan-500/20 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -50 * stocks.length]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...stocks, ...stocks].map((stock, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 px-6 py-3 min-w-max"
          >
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm">{stock.symbol}</span>
              <span className="text-gray-400 text-xs">{stock.price}</span>
            </div>
            <div className={`flex items-center space-x-1 ${
              stock.isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              <span className="text-sm font-medium">{stock.change}</span>
              <svg
                className={`w-3 h-3 ${stock.isPositive ? 'rotate-0' : 'rotate-180'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker; 