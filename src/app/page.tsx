'use client'

import { useContext } from 'react'
import type { FC } from 'react'

import FormWizard from '@/components/form-wizard'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import ResumeTemplate from '@/components/resume'

const Home: FC = () => {
  // return (
  //   <main>
  //     <ResumeTemplate />
  //   </main>
  // )
  const { hasSubmitted } = useContext(PackageSettingsContext)

  return (
    <main className="flex-1 flex flex-row justify-center">
      <div className="w-full min-w-[600px] h-full flex flex-row justify-center items-center">
        {hasSubmitted ? <ResumeTemplate /> : <FormWizard />}
      </div>
    </main>
  )
  // return <main className="">{hasSubmitted ? <FormWizard /> : <ResumeTemplate />}</main>
}

export default Home
