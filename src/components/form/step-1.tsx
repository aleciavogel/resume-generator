'use client'

import * as React from 'react'
import type * as z from 'zod'

import { CardContent, CardFooter } from '../ui/card'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import RoleField from './fields/role-field'
import { Input } from '../ui/input'
import YesNoField from './fields/yes-no-field'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import type { FieldValues, useForm } from 'react-hook-form'
import type { FormSchema } from '@/types/form'

interface FormStepOneProps {
  onContinue: () => void
  form: ReturnType<typeof useForm<z.infer<typeof FormSchema>>>
}

const FormStepOne: React.FC<FormStepOneProps> = ({ onContinue, form }) => {
  const { updateFields } = React.useContext(PackageSettingsContext)
  const botDetected = React.useMemo(() => {
    console.log('formstate', form.formState.errors.name, form.formState.errors.email)
    return form.formState.errors.name !== undefined || form.formState.errors.email !== undefined
  }, [form.formState.errors.name, form.formState.errors.email])

  function handleContinue(data: FieldValues): void {
    updateFields({
      name: data.dfkjgh,
      email: data.bvmgfk,
      role: data.role,
      otherRole: data.otherRole,
      isAgencyRecruiter: data.isAgencyRecruiter === 'true',
    })
    onContinue()
  }

  if (botDetected) {
    return (
      <div className="text-lg font-bold text-red-600 p-6 text-center">
        Sorry, no bots allowed 😳
      </div>
    )
  }

  return (
    <>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="ohnohoney">
              <FormLabel>If you&apos;re human, don&apos;t fill this in</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="ohnohoney">
              <FormLabel>Don&apos; fill this field in either</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row space-x-4">
          <FormField
            control={form.control}
            name="dfkjgh"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bvmgfk"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row space-x-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Role</FormLabel>
                <RoleField onValueChange={field.onChange} defaultValue={field.value} />
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch('role') === 'other' && (
            <FormField
              control={form.control}
              name="otherRole"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>What&apos;s your job title?</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {form.watch('role') === 'recruiter' && (
            <FormField
              control={form.control}
              name="isAgencyRecruiter"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Do you work for a recruitment firm?</FormLabel>
                  <YesNoField
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    yesLabel="Yes, I'm representing a client"
                    noLabel="No, I work for the company"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {form.watch('role') !== 'recruiter' && form.watch('role') !== 'other' && (
            <div className="w-1/2" />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={async () => {
            await form
              .trigger(['name', 'email', 'role', 'otherRole', 'isAgencyRecruiter'])
              .catch((err) => {
                console.log('error:', err)
              })
              .then(() => {
                if (form.formState.isValid) {
                  handleContinue(form.getValues())
                }
              })
          }}
          variant="default"
        >
          Continue
        </Button>
      </CardFooter>
    </>
  )
}

export default FormStepOne
