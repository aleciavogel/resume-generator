export interface ExperienceItem {
  title: string
  company: string
  location: string
  dateRange: string
  description: string[]
  skills?: string[]
}

export type Skills = Record<string, string[]>
