'use client'

// import { useContext } from 'react'
import type { FC } from 'react'

// import FormWizard from '@/components/form-wizard'
// import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import ResumeTemplate from '@/components/resume/ResumeTemplate'

const Home: FC = () => {
  return (
    <main>
      <ResumeTemplate />
    </main>
  )
  // const { hasSubmitted } = useContext(PackageSettingsContext)

  // return <main className="">{hasSubmitted ? <ResumeTemplate /> : <FormWizard />}</main>
  // return <main className="">{hasSubmitted ? <FormWizard /> : <ResumeTemplate />}</main>
}

export default Home
