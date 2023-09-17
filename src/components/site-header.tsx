import type { FC } from 'react'
import Link from 'next/link'

import LinkedInLink from './social-icons/linked-in'
import DribbbleLink from './social-icons/dribbble'
import GithubLink from './social-icons/github'
import { COLORS } from './resume/constants'
import dynamic from 'next/dynamic'

const SiteHeader: FC = () => {
  const CalendlyPopUp = dynamic(async () => await import('@/components/social-icons/calendly'), {
    ssr: false,
  })

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur bg-indigo-600">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex md:flex-row md:justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="sm:inline-block lowercase text-2xl text-white">
              <span>Alecia</span>
              <span style={{ color: COLORS.pink }} className="font-bold">
                Vogel
              </span>
            </span>
          </Link>
          <div className="flex flex-row item-center space-x-10">
            <div className="flex flex-row item-center space-x-4 text-white">
              <GithubLink />
              <DribbbleLink />
              <LinkedInLink />
            </div>

            <CalendlyPopUp />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
