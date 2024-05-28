import type { FC } from 'react'
import { View, Text } from '@react-pdf/renderer'
import { tw, styles } from '../constants'

interface SkillItemProps {
  skill: string
  items: string[]
}

const SkillItem: FC<SkillItemProps> = ({ skill, items }) => {
  return (
    <View style={tw('w-1/3 mb-3 pr-8')}>
      <Text
        style={{
          ...tw('text-xs leading-snug'),
          ...styles.textSmol,
          ...styles.fontBold,
        }}
      >
        {skill}
      </Text>
      <Text style={tw('text-xs leading-snug')}>{items.join(', ')}</Text>
    </View>
  )
}

export default SkillItem
