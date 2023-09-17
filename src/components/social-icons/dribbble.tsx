import type { FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const DribbbleLink: FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://dribbble.com/aleciavogel"
            className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-200"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <FontAwesomeIcon icon={faDribbble} className="w-7 h-7" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Follow me on Dribbble</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default DribbbleLink
