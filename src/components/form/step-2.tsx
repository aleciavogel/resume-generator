'use client'

import * as React from 'react'
import type * as z from 'zod'
import type { FieldValues, useForm } from 'react-hook-form'

import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import YesNoField from './fields/yes-no-field'
import type { FormSchema } from '@/types/form'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import { saveFormSubmission } from '@/db/form'

interface FormStepTwoProps {
  form: ReturnType<typeof useForm<z.infer<typeof FormSchema>>>
  onNext: () => void
  onPrev: () => void
}

const FormStepTwo: React.FC<FormStepTwoProps> = ({ onNext, onPrev, form }) => {
  const { updateFields } = React.useContext(PackageSettingsContext)

  function handlePrev(): void {
    onPrev()
  }

  const handleSubmit = async (data: FieldValues): Promise<void> => {
    updateFields({
      isGeneralPosition: data.isGeneralPosition === 'true',
      position: data.position,
      company: data.company,
      team: data.team,
      jobPostLink: data.jobPostLink,
    })

    await saveFormSubmission({
      name: data.dfkjgh ?? '',
      email: data.bvmgfk ?? '',
      role: data.role,
      otherRole: data.otherRole,
      isAgencyRecruiter: data.isAgencyRecruiter === 'true',
      isGeneralPosition: data.isGeneralPosition === 'true',
      position: data.position,
      company: data.company,
      team: data.team,
      jobPostLink: data.jobPostLink,
    })

    onNext()
  }

  return (
    <>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="isGeneralPosition"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Do you have a specific position in mind?</FormLabel>
              <YesNoField
                onValueChange={field.onChange}
                defaultValue={field.value}
                yesLabel="No, just a general interest in working together"
                noLabel="Yes, I've got some details to share"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch('isGeneralPosition') === 'false' && (
          <>
            <div className="flex flex-row space-x-4">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input placeholder="The job title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="team"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Team/Department</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      (Optional) The segment of the company (or specific project) you&apos;re hiring
                      for.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row space-x-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-2/3">
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      (Optional) The company I&apos;d be working for.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row space-x-4">
              <FormField
                control={form.control}
                name="jobPostLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job Post URL</FormLabel>
                    <Input {...field} />
                    <FormDescription>
                      (Optional) Where can I check out the job post?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="secondary" type="button" onClick={handlePrev}>
          Go Back
        </Button>
        <Button
          variant="default"
          type="button"
          onClick={async () => {
            await form
              .trigger(['isGeneralPosition', 'position', 'company', 'team', 'jobPostLink'])
              .catch((err) => {
                console.log('error:', err)
              })
              .then(async () => {
                if (form.formState.isValid) {
                  await handleSubmit(form.getValues())
                }
              })
          }}
        >
          Submit
        </Button>
      </CardFooter>
    </>
  )
}

export default FormStepTwo
