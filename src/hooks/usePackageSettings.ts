import { useContext } from 'react'

import PackageSettingsContext from '../contexts/PackageSettingsContext'

const usePackageSettings = (): void => {
  useContext(PackageSettingsContext)
}

export default usePackageSettings
