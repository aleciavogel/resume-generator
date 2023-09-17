import type { FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const LinkedInLink: FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://linkedin.com/in/alecia-vogel"
            className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-200"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Connect with me on LinkedIn</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LinkedInLink
