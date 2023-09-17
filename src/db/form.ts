import { SupabaseClient } from '@supabase/supabase-js'

import type { InquiryFields } from '@/types/form'
import { toast } from '@/components/ui/use-toast'

export const saveFormSubmission = async (data: InquiryFields): Promise<void> => {
  const supabase = new SupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  )
  const {
    name,
    email,
    role,
    otherRole,
    isAgencyRecruiter,
    isGeneralPosition,
    position,
    company,
    team,
    jobPostLink,
  } = data
  const { data: inquiry, error } = await supabase.from('pdf_requests').insert([
    {
      name,
      email,
      role,
      otherRole,
      isAgencyRecruiter,
      isGeneralPosition,
      position,
      company,
      team,
      jobPostLink,
    },
  ])

  if (error !== null) {
    toast({
      title: 'Error',
      description: 'There was an error saving your form fields. Please try again.',
    })
    console.log(error)
  }

  console.log(inquiry)
}
