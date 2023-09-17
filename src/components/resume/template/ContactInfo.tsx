import { Text, View } from '@react-pdf/renderer'

import { tw, styles } from '../constants'
import type { FC } from 'react'

const ContactInfo: FC = () => {
  return (
    <View
      style={{
        ...styles.textGray,
        ...tw('text-right text-sm leading-snug w-1/2'),
      }}
    >
      <Text>+1 (780) 232-5323</Text>
      <Text>hello@alecia.ca</Text>
      <Text>github.com/aleciavogel</Text>
    </View>
  )
}

export default ContactInfo
