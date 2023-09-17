'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export const Toaster: React.FC = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const hasTitle = title !== null && title !== undefined && title !== ''
        const hasDescription =
          description !== null && description !== undefined && description !== ''

        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {hasTitle && <ToastTitle>{title}</ToastTitle>}
              {hasDescription && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
