'use client'
import { useMobileNavigation } from '../contexts/MobileNavigationContext'

export default function Hero() {
  const { nextSection, isMobile } = useMobileNavigation()

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Your-Name-Fullstack-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="home" className={`flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 ${
      isMobile ? 'min-h-screen pt-16 pb-24' : 'min-h-screen pt-16'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Fullstack
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              I build modern web & mobile applications using <span className="font-semibold text-blue-600">MERN Stack</span>, 
              <span className="font-semibold text-green-600"> React Native</span>, 
              <span className="font-semibold text-red-600"> PHP/Laravel</span>, and popular platforms like 
              <span className="font-semibold text-purple-600"> WordPress</span>, 
              <span className="font-semibold text-orange-600"> Shopify</span>, and 
              <span className="font-semibold text-teal-600"> Wix</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={nextSection}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore My Work
              </button>
              <button
                onClick={downloadResume}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
          
          {!isMobile && (
            <div className="flex-1 flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-float"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">🚀</div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      MERN Stack<br/>
                      React Native<br/>
                      PHP/Laravel<br/>
                      WordPress/Shopify
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile-only continue indicator */}
        {isMobile && (
          <div className="text-center mt-12 animate-bounce">
            <button
              onClick={nextSection}
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-sm font-medium">Continue</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}






// 'use client'

// export default function Hero() {
//   const downloadResume = () => {
//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'Your-Name-Fullstack-Developer-Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           <div className="flex-1 text-center lg:text-left">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
//               Fullstack
//               <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Developer
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
//               I build modern web & mobile applications using <span className="font-semibold text-blue-600">MERN Stack</span>, 
//               <span className="font-semibold text-green-600"> React Native</span>, 
//               <span className="font-semibold text-red-600"> PHP/Laravel</span>, and popular platforms like 
//               <span className="font-semibold text-purple-600"> WordPress</span>, 
//               <span className="font-semibold text-orange-600"> Shopify</span>, and 
//               <span className="font-semibold text-teal-600"> Wix</span>.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a href="#projects" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
//                 View My Work
//               </a>
//               <button
//                 onClick={downloadResume}
//                 className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 Download Resume
//               </button>
//             </div>
//           </div>
          
//           <div className="flex-1 flex justify-center">
//             <div className="relative w-80 h-80 md:w-96 md:h-96">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-float"></div>
//               <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">🚀</div>
//                   <div className="text-sm md:text-base text-gray-600 font-medium">
//                     MERN Stack<br/>
//                     React Native<br/>
//                     PHP/Laravel<br/>
//                     WordPress/Shopify
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
