import type { FC } from 'react'
import ReportDialog from './report-dialog'

const ReportBugLink: FC = () => {
  return (
    <div className="absolute bottom-2 right-2">
      <ReportDialog />
    </div>
  )
}

export default ReportBugLink
