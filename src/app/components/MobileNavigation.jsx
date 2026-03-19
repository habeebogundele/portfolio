'use client'
import { useMobileNavigation } from "../contexts/MobileNavigationContext"

export default function MobileNavigation() {
  const { currentSection, sections, nextSection, prevSection, goToSection, isMobile } = useMobileNavigation()

  if (!isMobile) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 px-4 py-3 dark:bg-slate-900/90 dark:border-slate-700">
      {/* Prev Button */}
      <button
        onClick={prevSection}
        disabled={currentSection === 0}
        className={`interactive-btn p-2 rounded-full transition-all duration-300 ${
          currentSection === 0 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Section Dots */}
      <div className="flex items-center gap-2">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => goToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-slate-700 dark:bg-slate-300 scale-125 pulse-soft' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSection}
        disabled={currentSection === sections.length - 1}
        className={`interactive-btn p-2 rounded-full transition-all duration-300 ${
          currentSection === sections.length - 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}