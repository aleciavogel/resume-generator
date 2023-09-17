import * as z from 'zod'

export interface InquiryFields {
  name: string
  email: string
  role: string
  otherRole?: string
  isAgencyRecruiter?: boolean
  isGeneralPosition?: boolean
  position?: string
  company?: string
  team?: string
  jobPostLink?: string
}

export const FormSchema = z
  .object({
    name: z.string().nonempty('Please enter your name.'),
    email: z.string().email(),
    role: z.enum(['recruiter', 'manager', 'client', 'curious', 'other']),
    otherRole: z.string().optional(),
    isAgencyRecruiter: z.enum(['true', 'false']).optional(),
    isGeneralPosition: z.enum(['true', 'false']).optional(),
    position: z.string().optional(),
    // .nonempty("Please enter the name of the position or select 'No' from the dropdown above."),
    company: z.string().optional(),
    team: z.string().optional(),
    jobPostLink: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.role === 'other') {
        return data.otherRole !== '' && data.otherRole !== undefined
      }

      return true
    },
    {
      message: 'Please enter a custom role or select from the dropdown.',
      path: ['otherRole'],
    },
  )
  .refine(
    (data) => {
      if (data.role === 'recruiter') {
        return data.isAgencyRecruiter !== undefined
      }

      return true
    },
    {
      message: 'Please select an option.',
      path: ['isAgencyRecruiter'],
    },
  )
  .refine(
    (data) => {
      if (data.isGeneralPosition === 'false') {
        return data.position !== undefined && data.position !== ''
      }

      return true
    },
    {
      message: 'Please enter the name of the position.',
      path: ['position'],
    },
  )
