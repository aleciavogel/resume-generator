import type { FC } from 'react'
import { Page } from '@react-pdf/renderer'

import { styles, LAST_WORK_EXPERIENCE, OTHER_WORK_EXPERIENCE } from '../constants'
import ResumeBackground from '../template/Background'
import ExperienceSection from '../template/ExperienceSection'
import ResumeWrapper from '../template/ResumeWrapper'
import SkillsSection from '../template/SkillsSection'

const ResumePageFour: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgGrey }}>
      <ResumeBackground />
      <ResumeWrapper>
        <ExperienceSection showBorder={true} showTitle={false} experiences={LAST_WORK_EXPERIENCE} />
        <ExperienceSection
          sectionTitle="Other Professional Experience"
          experiences={OTHER_WORK_EXPERIENCE}
          showBorder={true}
        />
        <SkillsSection />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageFour
