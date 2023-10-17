import './globals.css'
import type { Metadata } from 'next'
import { Inter , Space_Grotesk } from 'next/font/google'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk =  Space_Grotesk({
   subsets: ['latin'], 
   weight: ['300', '400', '500', '600','700' ]
  })

export const metadata: Metadata = {
  title: 'PriceWise',
  description: 'Track the product you want to buy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-10xl mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
