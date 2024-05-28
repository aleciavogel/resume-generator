'use client'

import type { FC } from 'react'

import ResumeTemplate from '@/components/resume'

const Home: FC = () => {
  return (
    <main className="flex-1 flex flex-row justify-center">
      <div className="w-full min-w-[600px] h-full flex flex-row justify-center items-center">
        <ResumeTemplate />
      </div>
    </main>
  )
  // return <main className="">{hasSubmitted ? <FormWizard /> : <ResumeTemplate />}</main>
}

export default Home
