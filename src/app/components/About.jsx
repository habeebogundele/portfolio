export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fullstack Developer & CMS Specialist</h3>
              <p className="text-gray-600 mb-6 text-lg">
                With expertise in both custom development and popular website builders, I create seamless, 
                scalable digital experiences. My passion lies in turning complex problems into elegant, 
                user-friendly solutions using the right tools for each project.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">5+ years of development experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Expert in MERN Stack, React Native & PHP/Laravel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Proficient in WordPress, Shopify, Wix & other platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">50+ projects delivered successfully</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Platforms</div>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-cyan-600 mb-2">30+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Platform Expertise Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Platform Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
              <div className="text-2xl mb-3">🛒</div>
              <div className="font-semibold text-gray-800">Shopify</div>
              <div className="text-sm text-gray-600 mt-2">E-commerce Solutions</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
              <div className="text-2xl mb-3">🌐</div>
              <div className="font-semibold text-gray-800">WordPress</div>
              <div className="text-sm text-gray-600 mt-2">CMS & Blogging</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
              <div className="text-2xl mb-3">⚡</div>
              <div className="font-semibold text-gray-800">Wix</div>
              <div className="text-sm text-gray-600 mt-2">Drag & Drop Builder</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
              <div className="text-2xl mb-3">🔧</div>
              <div className="font-semibold text-gray-800">Custom Code</div>
              <div className="text-sm text-gray-600 mt-2">MERN & Laravel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
