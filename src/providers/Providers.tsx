'use client'

import React from 'react'
import type { FC } from 'react'
import PackageSettingsProvider from '@/providers/PackageSettingsProvider'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [setMounted])

  if (!mounted) {
    return null
  }

  return <PackageSettingsProvider>{children}</PackageSettingsProvider>
}

export default Providers
