import type { InquiryFields } from '@/types/form'
import { createContext } from 'react'

interface PackageSettingsContext {
  fields: Partial<InquiryFields>
  hasSubmitted: boolean
  updateFields: (newValues: Partial<InquiryFields>) => void
  updateSubmissionStatus: (hasSubmitted: boolean) => void
}

const initialState: PackageSettingsContext = {
  fields: {},
  hasSubmitted: false,
  updateFields: () => {},
  updateSubmissionStatus: () => {},
}

const context = createContext<PackageSettingsContext>(initialState)

export default context
