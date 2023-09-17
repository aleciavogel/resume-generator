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

  const updateFields = (newValues: Partial<InquiryFields>): void => {
    setFields((oldValues) => {
      return {
        ...oldValues,
        ...newValues,
      }
    })
  }

  return (
    <PackageSettingsContext.Provider
      value={{
        fields,
        updateFields,
      }}
    >
      {children}
    </PackageSettingsContext.Provider>
  )
}

export default PackageSettingsProvider
