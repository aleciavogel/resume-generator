import type { FC } from 'react'
import { Font, PDFViewer } from '@react-pdf/renderer'

import ResumeDocument from './resume/pages'
import ResumeDownloadButton from './resume/download-button'

Font.registerHyphenationCallback((word) => [word])

const ResumeTemplate: FC = () => {
  return (
    <div className="w-full h-full pt-8">
      <PDFViewer width="500px" height="600px" showToolbar={false} className="mx-auto">
        <ResumeDocument />
      </PDFViewer>

      <ResumeDownloadButton />
    </div>
  )
}

export default ResumeTemplate
