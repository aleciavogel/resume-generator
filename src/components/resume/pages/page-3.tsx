import type { FC } from 'react'
import { Page } from '@react-pdf/renderer'
import { styles, COLORS, WORK_EXPERIENCES_CONTINUED } from '../constants'
import ResumeBackground from '../template/Background'
import ExperienceSection from '../template/ExperienceSection'
import ResumeWrapper from '../template/ResumeWrapper'

const ResumePageThree: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgIndigo }}>
      <ResumeBackground color={COLORS.bgGrey} />
      <ResumeWrapper>
        <ExperienceSection
          showTitle={false}
          showBorder={false}
          experiences={WORK_EXPERIENCES_CONTINUED}
        />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageThree
