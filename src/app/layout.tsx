import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoneyCraft - Premium Stock Market Trading Courses',
  description: 'Master the art of stock market trading with expert-led courses. Transform your financial future with proven strategies and real-world insights.',
  keywords: 'stock market, trading, courses, investment, financial education, trading strategies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <AnimatedBackground />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
