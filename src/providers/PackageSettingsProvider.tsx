'use client'
import React, { useState } from 'react'
import type { FC } from 'react'

import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import type { InquiryFields } from '@/types/form'

interface Props {
  children: React.ReactNode
}

// PackageSettingsProvider wrapper component
const PackageSettingsProvider: FC<Props> = ({ children }) => {
  const [fields, setFields] = useState<Partial<InquiryFields>>({})
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)

  const updateFields = (newValues: Partial<InquiryFields>): void => {
    setFields((oldValues) => {
      return {
        ...oldValues,
        ...newValues,
      }
    })
  }

  const updateSubmissionStatus = (hasSubmitted: boolean): void => {
    setHasSubmitted(hasSubmitted)
  }

  return (
    <PackageSettingsContext.Provider
      value={{
        fields,
        updateFields,
        hasSubmitted,
        updateSubmissionStatus,
      }}
    >
      {children}
    </PackageSettingsContext.Provider>
  )
}

export default PackageSettingsProvider
