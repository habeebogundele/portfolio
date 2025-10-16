'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const MobileNavigationContext = createContext()

export function MobileNavigationProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const sections = [
    'home',
    'about', 
    'skills',
    'projects',
    'resume',
    'contact'
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const goToSection = (index) => {
    setCurrentSection(index)
  }

  return (
    <MobileNavigationContext.Provider value={{
      currentSection,
      sections,
      nextSection,
      prevSection,
      goToSection,
      isMobile
    }}>
      {children}
    </MobileNavigationContext.Provider>
  )
}

export const useMobileNavigation = () => {
  const context = useContext(MobileNavigationContext)
  if (!context) {
    throw new Error('useMobileNavigation must be used within MobileNavigationProvider')
  }
  return context
}