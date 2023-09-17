import { useCallback } from 'react'
import type { FC } from 'react'
import { Page, View, Text, Link } from '@react-pdf/renderer'

import type { InquiryFields } from '@/types/form'
import { COLORS, styles, tw } from '../constants'

interface ResumeLastPageProps {
  fields: Partial<InquiryFields>
}

const ResumeLastPage: FC<ResumeLastPageProps> = ({ fields }) => {
  const startNote = useCallback<() => string>(() => {
    const hasCompany = fields.company !== undefined && fields.company.length > 0
    const isRecruiter = fields.role === 'recruiter' && fields.isAgencyRecruiter === true

    if (hasCompany) {
      return `Your commitment to finding the right fit for ${fields.company} speaks volumes, and I'm grateful to be part of this process.`
    }

    if (isRecruiter) {
      return `Your commitment to finding the right fit for your client speaks volumes, and I'm grateful to be part of this process.`
    }

    return `Your commitment to finding the right fit for your company speaks volumes, and I'm delighted that you're contemplating me for a role.`
  }, [fields.company, fields.isAgencyRecruiter, fields.role])

  const endNote = useCallback((): string => {
    const hasTeam = fields.team !== undefined && fields.team.length > 0
    const hasPosition = fields.position !== undefined && fields.position.length > 0
    const hasCompany = fields.company !== undefined && fields.company.length > 0

    if (hasTeam && hasPosition) {
      return `Ready to delve deeper into how I can contribute to the ${fields.team} team as their new ${fields.position}?`
    }

    if (hasTeam) {
      // TODO: check if the word "team" or "dept" or "department" exists in the phrase and sanitize it
      return `Interested in discussing potential opportunities with the ${fields.team} team?`
    }

    if (hasPosition && hasCompany) {
      return `Ready to further explore my fit for the ${fields.position} role at ${fields.company}?`
    }

    if (hasPosition) {
      return `Ready to further explore my fit for the ${fields.position} role?`
    }

    return 'Interested in discussing potential opportunities?'
  }, [fields.company, fields.position, fields.team])

  return (
    <Page wrap size="A4" style={{ ...styles.frontPage, ...{ padding: '100px 50px 0px' } }}>
      <View style={tw('mx-auto')}>
        <View>
          <Text
            style={{ ...tw('text-white leading-relaxed'), ...{ lineHeight: 0.8, fontSize: 70 } }}
          >
            <Text style={{ ...tw('lowercase'), ...{ fontFamily: 'Helvetica' } }}>thank</Text>
            <Text
              style={{
                ...{ fontFamily: 'Helvetica-Bold', color: COLORS.pink },
                ...tw('lowercase'),
                ...styles.fontBold,
              }}
            >
              you
            </Text>
          </Text>
        </View>

        <View style={{ ...tw('mt-10 text-white '), ...{ width: 400 } }}>
          <Text style={{ ...tw('text-lg'), ...{ lineHeight: 1.5 } }}>
            I appreciate the time and care you&apos;ve put into reviewing my resume. {startNote()}
            {'\n\n'}
            If you have any feedback to share about my application, I&apos;d greatly appreciate the
            opportunity to learn and improve.{'\n\n'}
            Looking forward to hearing from you soon.{'\n\n'}
            Warm regards,{'\n'}
          </Text>
          <Text style={{ ...tw('text-2xl'), ...styles.fontBold }}>Alecia Vogel</Text>

          <View style={{ ...tw('text-base mt-6 flex flex-row'), ...{ lineHeight: 1.5 } }}>
            <Text>
              PS - {endNote()} You can book a mutually convenient time for us to chat at{' '}
              <Link
                src="https://calendly.com/aleciavogel"
                style={{
                  ...styles.fontBold,
                  ...tw('no-underline'),
                  ...{ color: COLORS.lightPink },
                }}
              >
                calendly.com/aleciavogel
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </Page>
  )
}

export default ResumeLastPage
