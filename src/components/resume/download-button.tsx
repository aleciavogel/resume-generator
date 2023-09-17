import type { FC } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/pro-regular-svg-icons'

import ResumeDocument from './pages'
import type { InquiryFields } from '@/types/form'

interface ResumeDownloadButtonProps {
  fields: Partial<InquiryFields>
}

const ResumeDownloadButton: FC<ResumeDownloadButtonProps> = ({ fields }) => {
  const currentDate = new Date()
  // format date as YYYY-MM-DD
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`

  return (
    <div className="mx-auto mt-6 text-center uppercase text-xs font-bold tracking-relaxed">
      <PDFDownloadLink
        document={<ResumeDocument fields={fields} />}
        fileName={`Alecia Vogel - Resume (${formattedDate}).pdf`}
        className=""
      >
        {({ loading }) => {
          if (loading) {
            return <span className="text-sm">Generating resume...</span>
          }

          return (
            <span className="bg-indigo-600 text-white rounded-lg py-3 px-4 hover:bg-rose-400 transition-all ease-in-out duration-200">
              <FontAwesomeIcon icon={faDownload} className="h-3 w-3 mr-2" />
              Download PDF
            </span>
          )
        }}
      </PDFDownloadLink>
    </div>
  )
}

export default ResumeDownloadButton
