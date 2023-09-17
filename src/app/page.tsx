'use client'

import { useContext } from 'react'
import type { FC } from 'react'

import FormWizard from '@/components/form-wizard'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import ResumeTemplate from '@/components/resume/ResumeTemplate'

const Home: FC = () => {
  const { hasSubmitted } = useContext(PackageSettingsContext)

  return <main className="">{hasSubmitted ? <ResumeTemplate /> : <FormWizard />}</main>
}

export default Home
