'use client'

// import { useState } from 'react'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FormStepOne from './form/step-1'

const FormWizard: React.FC = () => {
  // const [step, setStep] = useState(0)

  // const nextStep = (): void => {
  //   setStep(step + 1)
  // }

  // const prevStep = (): void => {
  //   setStep(step - 1)
  // }

  return (
    <main className="">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Thanks for your interest!</CardTitle>
          <CardDescription>
            Before you can download my resume, some info is required
          </CardDescription>
        </CardHeader>
        <FormStepOne />
      </Card>
    </main>
  )
}

export default FormWizard
