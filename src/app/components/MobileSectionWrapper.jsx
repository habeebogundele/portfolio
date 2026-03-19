'use client'
import { useMobileNavigation } from "../contexts/MobileNavigationContext"

export default function MobileSectionWrapper({ section, children }) {
  const { currentSection, sections, isMobile } = useMobileNavigation()
  
  const sectionIndex = sections.indexOf(section)
  const isActive = sectionIndex === currentSection
  const motionClass = sectionIndex % 2 === 0 ? 'animate-left' : 'animate-right'

  if (isMobile) {
    return (
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isActive 
            ? `block opacity-100 transform translate-x-0 ${motionClass}` 
            : 'hidden opacity-0 transform translate-x-full'
        }`}
        style={{ 
          minHeight: '100vh',
          display: isActive ? 'block' : 'none'
        }}
      >
        {children}
      </div>
    )
  }

  // Desktop view - normal scroll
  return children
}