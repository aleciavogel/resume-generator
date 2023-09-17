import type { FC } from 'react'
import { useContext } from 'react'
import { Font, PDFViewer } from '@react-pdf/renderer'

import ResumeDocument from './resume/pages'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'

Font.registerHyphenationCallback((word) => [word])

const ResumeTemplate: FC = () => {
  const { fields } = useContext(PackageSettingsContext)

  return (
    <PDFViewer width="600px" height="800px" className="mx-auto">
      <ResumeDocument fields={fields} />
    </PDFViewer>
  )
}

export default ResumeTemplate
