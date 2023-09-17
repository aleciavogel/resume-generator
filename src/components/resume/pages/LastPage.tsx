import { useContext } from 'react'
import type { FC } from 'react'
import { Page, View, Text, Link } from '@react-pdf/renderer'

import { COLORS, styles, tw } from '../constants'
import PackageSettingsContext from '@/contexts/PackageSettingsContext'
import { endNote, startNote } from '../utils'

const ResumeLastPage: FC = () => {
  const { fields } = useContext(PackageSettingsContext)
  const startingNote = startNote({ company: fields.company, isRecruiter: fields.isAgencyRecruiter })
  const endingNote = endNote({ company: fields.company, role: fields.role, team: fields.team })

  return (
    <Page size="A4" style={[styles.frontPage, { padding: '100px 50px 0px' }]}>
      <View style={[tw('mx-auto')]}>
        <View>
          <Text style={[tw('text-white leading-relaxed'), { lineHeight: 0.8, fontSize: 70 }]}>
            <Text style={[tw('lowercase'), { fontFamily: 'Helvetica' }]}>thank</Text>
            <Text
              style={[
                { fontFamily: 'Helvetica-Bold', color: COLORS.pink },
                tw('lowercase'),
                styles.fontBold,
              ]}
            >
              you
            </Text>
          </Text>
        </View>

        <View style={[tw('mt-10 text-white '), { width: 400 }]}>
          <Text style={[tw('text-lg'), { lineHeight: 1.5 }]}>
            I appreciate the time and care you&apos;ve put into reviewing my resume. ${startingNote}
            {'\n\n'}
            If you have any feedback to share about my application, I&apos;d greatly appreciate the
            opportunity to learn and improve.{'\n\n'}
            Looking forward to hearing from you soon.{'\n\n'}
            Warm regards,{'\n'}
          </Text>
          <Text style={[tw('text-2xl'), styles.fontBold]}>Alecia Vogel</Text>

          <View style={[tw('text-base mt-6 flex flex-row'), { lineHeight: 1.5 }]}>
            <Text style={[styles.fontBold, tw('mr-2')]}>PS</Text>
            <Text style={[tw('px-2')]}>-</Text>
            <Text>
              ${endingNote} You can book a mutually convenient time for us to chat at{' '}
              <Link
                src="https://calendly.com/aleciavogel"
                style={[styles.fontBold, tw('no-underline'), { color: COLORS.lightPink }]}
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
