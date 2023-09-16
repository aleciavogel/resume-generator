import { createContext } from 'react'

interface PackageSettingsContext {
  isRecruiter: boolean
  company?: string
  position?: string
  team?: string
  coverLetterBody?: string
  updateCompany?: (company: string) => void
  updatePosition?: (position: string) => void
  updateTeam?: (team: string) => void
  updateCoverLetterBody?: (coverLetterBody: string) => void
  toggleRecruiter?: (isRecruiter: boolean) => void
}

const initialState: PackageSettingsContext = {
  isRecruiter: false,
  company: '',
  position: '',
  team: '',
  coverLetterBody: '',
  updateCompany: () => {},
  updatePosition: () => {},
  updateCoverLetterBody: () => {},
  updateTeam: () => {},
  toggleRecruiter: () => {},
}

const context = createContext<PackageSettingsContext>(initialState)

export default context
