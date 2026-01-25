import { toast as sonnerToast } from "sonner"

type ToastOptions = {
  title: string
  description?: string
  duration?: number
}

export const toast = {
  success: ({ title, description, duration }: ToastOptions) => {
    sonnerToast.success(title, {
      description,
      duration,
    })
  },

  error: ({ title, description, duration }: ToastOptions) => {
    sonnerToast.error(title, {
      description,
      duration,
    })
  },

  info: ({ title, description, duration }: ToastOptions) => {
    sonnerToast(title, {
      description,
      duration,
    })
  },

  loading: (title: string) => {
    return sonnerToast.loading(title)
  },

  dismiss: (id?: string | number) => {
    sonnerToast.dismiss(id)
  },

  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string
      error: string
    }
  ) => {
    return sonnerToast.promise(promise, messages)
  },
}
