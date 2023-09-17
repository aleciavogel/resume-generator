'use client'

// import { useState } from 'react'
import * as React from 'react'
import type * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { FormSchema } from '@/types/form'
import FormStepOne from './form/step-1'
import FormStepTwo from './form/step-2'

const FormWizard: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      otherRole: '',
      position: '',
      company: '',
      team: '',
      jobPostLink: '',
    },
  })

  const [step, setStep] = React.useState(0)

  // const goToStep = (step: number): void => {
  //   setStep(step)
  // }

  const nextStep = (): void => {
    setStep(step + 1)
  }

  const prevStep = (): void => {
    setStep(step - 1)
  }

  const handleSubmit = (): void => {
    console.log('submit')
  }

  return (
    <main className="">
      <Card className="w-[600px] mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Thanks for your interest!</CardTitle>
          <CardDescription className="text-center">
            Before you can download my resume, I&apos;d like to grab some info from ya.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            {step === 0 && <FormStepOne form={form} onContinue={nextStep} />}
            {step === 1 && (
              <FormStepTwo form={form} onNext={form.handleSubmit(handleSubmit)} onPrev={prevStep} />
            )}
          </form>
        </Form>
      </Card>
    </main>
  )
}

export default FormWizard
