'use client'
import { useState, useEffect } from 'react'
import { useMobileNavigation } from '../contexts/MobileNavigationContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { goToSection, sections, isMobile } = useMobileNavigation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Resume', href: '#resume', section: 'resume' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ]

  const handleNavClick = (sectionIndex, event) => {
    if (isMobile) {
      event.preventDefault()
      goToSection(sectionIndex)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled && !isMobile ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${isMobile ? 'bg-white/95 backdrop-blur-md shadow-lg' : ''}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold text-blue-600"
            onClick={(e) => handleNavClick(0, e)}
          >
            DevPortfolio
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={(e) => handleNavClick(index, e)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={(e) => handleNavClick(index, e)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}








// 'use client'
// import { useState, useEffect } from 'react'

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Resume', href: '#resume' },
//     { name: 'Contact', href: '#contact' }
//   ]

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//     }`}>
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <a href="#home" className="text-2xl font-bold text-blue-600">DevPortfolio</a>
          
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           <button
//             className="md:hidden flex flex-col space-y-1"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <span className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
//               isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
//             }`}></span>
//             <span className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
//               isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
//             }`}></span>
//             <span className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
//               isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
//             }`}></span>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-300 ${
//           isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden`}>
//           <div className="py-4 space-y-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }
