import '@/styles/globals.css'
import type { FC } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/providers/Providers'
import SiteHeader from '@/components/site-header'
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
      <body className={'min-h-screen ' + inter.className} id="root">
        <Providers>
          <div className="min-h-screen relative flex flex-col">
            <SiteHeader />
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
