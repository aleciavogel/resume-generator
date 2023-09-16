'use client'
import React, { useState } from 'react'
import type { FC } from 'react'

import PackageSettingsContext from '@/contexts/PackageSettingsContext'

interface Props {
  children: React.ReactNode
}

// PackageSettingsProvider wrapper component
const PackageSettingsProvider: FC<Props> = ({ children }) => {
  const [company, setCompany] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [team, setTeam] = useState<string>('')
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false)
  const [coverLetterBody, setCoverLetterBody] = useState<string>('')

  const updateCompany = (newCompany: string): void => {
    setCompany(newCompany)
  }
  const updatePosition = (newPosition: string): void => {
    setPosition(newPosition)
  }
  const updateCoverLetterBody = (newBody: string): void => {
    setCoverLetterBody(newBody)
  }

  const updateTeam = (newTeam: string): void => {
    setTeam(newTeam)
  }

  const toggleRecruiter = (): void => {
    setIsRecruiter((oldValue) => !oldValue)
  }

  return (
    <PackageSettingsContext.Provider
      value={{
        isRecruiter,
        company,
        position,
        team,
        coverLetterBody,
        updateCompany,
        updatePosition,
        updateTeam,
        updateCoverLetterBody,
        toggleRecruiter,
      }}
    >
      {children}
    </PackageSettingsContext.Provider>
  )
}

export default PackageSettingsProvider
