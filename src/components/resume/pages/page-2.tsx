import type { FC } from 'react'
import { Page, View } from '@react-pdf/renderer'

import { styles, WORK_EXPERIENCES } from '../constants'
import ResumeBackground from '../template/Background'
import ContactInfo from '../template/ContactInfo'
import ExperienceSection from '../template/ExperienceSection'
import ResumeWrapper from '../template/ResumeWrapper'
import Title from '../template/Title'

const ResumePageTwo: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgGrey }}>
      <ResumeBackground />
      <ResumeWrapper>
        <View style={{ ...styles.topRow, ...styles.borderBottom }}>
          <Title />
          <ContactInfo />
        </View>
        <ExperienceSection experiences={WORK_EXPERIENCES} />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageTwo
