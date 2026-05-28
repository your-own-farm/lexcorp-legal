import { useEffect, useState } from 'react'

export function useCounter(end: number, duration = 1800, active = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, end, duration])

  return value
}
