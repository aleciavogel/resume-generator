import type { FC } from 'react'
import { Document, Page, View, Font, PDFViewer } from '@react-pdf/renderer'
// import { Document, Font, PDFViewer } from '@react-pdf/renderer'

import ResumeWrapper from './template/ResumeWrapper'
import ContactInfo from './template/ContactInfo'
import ResumeBackground from './template/Background'
import Title from './template/Title'
import ExperienceSection from './template/ExperienceSection'

import {
  styles,
  OTHER_WORK_EXPERIENCE,
  WORK_EXPERIENCES,
  LAST_WORK_EXPERIENCE,
  WORK_EXPERIENCES_CONTINUED,
  COLORS,
  VOLUNTEERING,
} from './constants'
import SkillsSection from './template/SkillsSection'
import ResumeFrontPage from './pages/FrontPage'
import ResumeLastPage from './pages/LastPage'
import BrandsSection from './template/Brands'
import VolunteeringSection from './template/VolunteeringSection'

Font.registerHyphenationCallback((word) => [word])

const ResumeTemplate: FC = () => {
  return (
    <PDFViewer width="600px" height="800px" className="mx-auto">
      <Document>
        <ResumeFrontPage />

        <Page size="A4" style={{ ...styles.page, ...styles.bgGrey }}>
          <ResumeBackground />
          <ResumeWrapper>
            <View style={{ ...styles.topRow, ...styles.borderBottom }}>
              <Title />
              <ContactInfo />
            </View>
            <ExperienceSection experiences={WORK_EXPERIENCES} />
          </ResumeWrapper>
        </Page>

        <Page size="A4" style={{ ...styles.page, ...styles.bgIndigo }}>
          <ResumeBackground color={COLORS.bgGrey} />
          <ResumeWrapper>
            <ExperienceSection
              showTitle={false}
              showBorder={false}
              experiences={WORK_EXPERIENCES_CONTINUED}
            />
          </ResumeWrapper>
        </Page>

        <Page size="A4" style={{ ...styles.page, ...styles.bgGrey }}>
          <ResumeBackground />
          <ResumeWrapper>
            <ExperienceSection
              showBorder={true}
              showTitle={false}
              experiences={LAST_WORK_EXPERIENCE}
            />
            <ExperienceSection
              sectionTitle="Other Professional Experience"
              experiences={OTHER_WORK_EXPERIENCE}
              showBorder={true}
            />
            <SkillsSection />
          </ResumeWrapper>
        </Page>

        <Page size="A4" style={{ ...styles.page, ...styles.bgIndigo }}>
          <ResumeBackground color={COLORS.bgGrey} />
          <ResumeWrapper>
            <VolunteeringSection experiences={VOLUNTEERING} showBorder={true} />
            <BrandsSection />
          </ResumeWrapper>
        </Page>

        <ResumeLastPage />
      </Document>
    </PDFViewer>
  )
}

export default ResumeTemplate