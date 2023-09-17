import type { FC } from 'react'
import { useContext } from 'react'
import { Font, PDFViewer } from '@react-pdf/renderer'

import ResumeDocument from './resume/pages'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import ResumeDownloadButton from './resume/download-button'

Font.registerHyphenationCallback((word) => [word])

const ResumeTemplate: FC = () => {
  const { fields } = useContext(PackageSettingsContext)

  return (
    <div className="w-full h-full pt-8">
      <PDFViewer width="500px" height="600px" showToolbar={false} className="mx-auto">
        <ResumeDocument fields={fields} />
      </PDFViewer>

      <ResumeDownloadButton fields={fields} />
    </div>
  )
}

export default ResumeTemplate
