import { useEffect, useRef, useState } from 'react'

export function useInView({
  once = true,
  threshold = 0.18,
  rootMargin = '0px 0px -10% 0px',
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return [ref, inView]
}

export function useReady(delay = 40) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), delay)
    return () => window.clearTimeout(id)
  }, [delay])

  return ready
}
