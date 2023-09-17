import type { FC } from 'react'
import { Document } from '@react-pdf/renderer'

import type { InquiryFields } from '@/types/form'
import ResumeFrontPage from './page-1'
import ResumePageTwo from './page-2'
import ResumePageThree from './page-3'
import ResumePageFour from './page-4'
import ResumePageFive from './page-5'
import ResumeLastPage from './page-6'

interface ResumeDocumentProps {
  fields: Partial<InquiryFields>
}

const ResumeDocument: FC<ResumeDocumentProps> = ({ fields }) => {
  return (
    <Document title="Alecia Vogel - Resume">
      <ResumeFrontPage />

      <ResumePageTwo />

      <ResumePageThree />

      <ResumePageFour />

      <ResumePageFive />

      <ResumeLastPage fields={fields} />
    </Document>
  )
}

export default ResumeDocument
