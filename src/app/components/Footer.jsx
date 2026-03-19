export default function Footer() {
  return (
    <footer className="animate-right bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="animate-left stagger-1 mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">DevPortfolio</div>
            <p className="text-gray-400">Fullstack Developer | MERN Stack & Laravel Specialist</p>
          </div>
          
          <div className="animate-right stagger-2 flex space-x-6">
            <a href="#" className="animate-reveal interactive-link text-gray-400 hover:text-white transition-colors duration-300" style={{ animationDelay: '0.08s' }}>
              LinkedIn
            </a>
            <a href="#" className="animate-left interactive-link text-gray-400 hover:text-white transition-colors duration-300" style={{ animationDelay: '0.16s' }}>
              GitHub
            </a>
            <a href="#" className="animate-zoom interactive-link text-gray-400 hover:text-white transition-colors duration-300" style={{ animationDelay: '0.24s' }}>
              Twitter
            </a>
          </div>
        </div>
        
        <div className="animate-fade border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" style={{ animationDelay: '0.28s' }}>
          <p>&copy; 2024 Fullstack Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}