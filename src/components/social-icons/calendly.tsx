'use client'

import { useContext, useMemo } from 'react'
import type { FC } from 'react'
import { PopupButton } from 'react-calendly'

import PackageSettingsContext from '@/contexts/PackageSettingsContext'

const CalendlyPopUp: FC = () => {
  const { fields } = useContext(PackageSettingsContext)
  const isRecruiter = useMemo(() => {
    return fields.role === 'recruiter' || fields.role === 'manager'
  }, [fields.role])

  return (
    <PopupButton
      url={`https://calendly.com/aleciavogel/${isRecruiter ? '30min' : 'virtual-coffee'}`}
      rootElement={document.getElementById('root') as HTMLElement}
      text="Chat With Me"
      prefill={{
        name: fields.name,
        email: fields.email,
        customAnswers: isRecruiter
          ? {
              a1: 'Your resume generator website',
              a2: fields.jobPostLink,
            }
          : {},
      }}
      className="text-white text-sm font-bold bg-blue-500 px-4 py-2 rounded-md text-primary-foreground shadow hover:bg-blue-400/80"
    />
  )
}

export default CalendlyPopUp
