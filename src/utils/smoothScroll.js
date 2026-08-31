export function smoothScrollToId(event, id, offset = 16, duration = 1200) {
  event.preventDefault()
  const target = document.getElementById(id)
  if (!target) return

  const start = window.scrollY
  const end = target.getBoundingClientRect().top + window.scrollY - offset
  const distance = end - start
  const startTime = performance.now()

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / duration)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
