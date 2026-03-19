'use client'

import { useEffect } from 'react'

const ANIMATED_SELECTORS = [
  '.animate-reveal',
  '.animate-fade',
  '.animate-left',
  '.animate-right',
  '.animate-zoom',
].join(', ')

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(ANIMATED_SELECTORS))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Replay animation whenever element enters viewport again.
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -6% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [])

  return null
}

