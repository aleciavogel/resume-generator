import type { FC } from 'react'
import { Page } from '@react-pdf/renderer'

import { styles, VOLUNTEERING, COLORS } from '../constants'
import ResumeBackground from '../template/Background'
import ResumeWrapper from '../template/ResumeWrapper'
import BrandsSection from '../template/Brands'
import VolunteeringSection from '../template/VolunteeringSection'

const ResumePageFive: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgIndigo }}>
      <ResumeBackground color={COLORS.bgGrey} />
      <ResumeWrapper>
        <VolunteeringSection experiences={VOLUNTEERING} showBorder={true} />
        <BrandsSection />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageFive
