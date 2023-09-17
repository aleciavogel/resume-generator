import type { FC } from 'react'
import Link from 'next/link'

const SiteHeader: FC = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Resume Generator</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
