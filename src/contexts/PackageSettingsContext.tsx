import type { InquiryFields } from '@/types/form'
import { createContext } from 'react'

interface PackageSettingsContext {
  fields: Partial<InquiryFields>
  updateFields: (newValues: Partial<InquiryFields>) => void
}

const initialState: PackageSettingsContext = {
  fields: {},
  updateFields: () => {},
}

const context = createContext<PackageSettingsContext>(initialState)

export default context
