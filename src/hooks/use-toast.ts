import { useState } from "react"

interface Toast {
  title: string
  description?: string
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description }: Toast) => {
    setToasts((prev) => [...prev, { title, description }])
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }

  return { toast, toasts }
} 