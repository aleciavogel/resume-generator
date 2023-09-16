import React from 'react'
import type { FC } from 'react'
import PackageSettingsProvider from '@/providers/PackageSettingsProvider'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <PackageSettingsProvider>{children}</PackageSettingsProvider>
}

export default Providers
