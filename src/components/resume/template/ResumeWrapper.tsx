import type { FC } from 'react'
import { View } from '@react-pdf/renderer'
import { tw } from '../constants'

interface ResumeWrapperProps {
  children: React.ReactNode
}

const ResumeWrapper: FC<ResumeWrapperProps> = ({ children }) => {
  return <View style={tw('p-6 h-full bg-white')}>{children}</View>
}

export default ResumeWrapper
