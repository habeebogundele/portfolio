export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">DevPortfolio</div>
            <p className="text-gray-400">Fullstack Developer | MERN Stack & Laravel Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fullstack Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}