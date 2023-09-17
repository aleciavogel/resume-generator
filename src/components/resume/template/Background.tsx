import { Svg, Polygon, StyleSheet, View } from '@react-pdf/renderer'
import { COLORS } from '../constants'
import type { FC } from 'react'

interface Props {
  color?: string
}

const ResumeBackground: FC<Props> = ({ color = COLORS.indigo }) => {
  return (
    <View style={styles.container}>
      <Svg style={styles.positioning} height="200%" width="200%" viewBox="0 0 200 200">
        <Polygon fill={color} points="0 0, 200 0, 200 200" />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  positioning: {
    position: 'absolute',
    top: '-50%',
    left: '-30%',
    transform: 'rotate(-20deg)',
    transformOrigin: 'center',
  },
})

export default ResumeBackground
