import '@/styles/globals.css'
import type { FC } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/providers/Providers'
// import SiteHeader from '@/components/site-header'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resume Generator',
  description: "Download a personalized version of Alecia Vogel's resume",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {/* <SiteHeader /> */}
            <div className="flex-1">{children}</div>
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
