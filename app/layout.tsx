import type { Metadata } from 'next'
import './globals.css'
import Loader from '@/components/Loader'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceModals from '@/components/sections/ServiceModals' // 1. Import the modal

export const metadata: Metadata = {
  title: 'Accounting Square — Global Financial Excellence',
  description:
    'Accounting Square — Precision accounting for international businesses. Management accounting, bookkeeping and controller services across 12+ countries.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <Cursor />
        <Navbar />
        {children}
        <ServiceModals /> {/* 2. Place it here */}
        <Footer />
      </body>
    </html>
  )
}