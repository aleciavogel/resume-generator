'use client'

import type { FC } from 'react'
import { PopupButton } from 'react-calendly'

import React from 'react'

const CalendlyPopUp: FC = () => {
  return (
    <PopupButton
      url="https://calendly.com/aleciavogel/virtual-coffee"
      rootElement={document.getElementById('root') as HTMLElement}
      text="Chat With Me"
      className="text-white text-sm font-bold bg-blue-500 px-4 py-2 rounded-md text-primary-foreground shadow hover:bg-blue-400/80"
    />
  )
}

export default CalendlyPopUp
