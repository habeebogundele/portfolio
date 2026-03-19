'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="animate-right py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="animate-left stagger-1 text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-left stagger-2">
            <h3 className="animate-reveal text-2xl font-bold text-gray-800 mb-6">Let's work together!</h3>
            <p className="animate-right text-gray-600 mb-8 text-lg">
              I'm always interested in new opportunities and exciting projects. 
              Whether you need a full-stack application, mobile app, or just want to chat about technology, 
              feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="animate-reveal flex items-center space-x-4" style={{ animationDelay: '0.08s' }}>
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-slate-700 dark:text-slate-300">📧</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600">your.email@example.com</div>
                </div>
              </div>
              
              <div className="animate-left flex items-center space-x-4" style={{ animationDelay: '0.16s' }}>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">💼</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">LinkedIn</div>
                  <div className="text-gray-600">linkedin.com/in/yourprofile</div>
                </div>
              </div>
              
              <div className="animate-right flex items-center space-x-4" style={{ animationDelay: '0.24s' }}>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">🐙</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">GitHub</div>
                  <div className="text-gray-600">github.com/yourusername</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-zoom stagger-2 interactive-card bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="animate-left" style={{ animationDelay: '0.18s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="animate-right" style={{ animationDelay: '0.26s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="animate-zoom interactive-btn pulse-soft w-full bg-gradient-to-r from-slate-700 to-slate-500 hover:from-slate-800 hover:to-slate-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                style={{ animationDelay: '0.34s' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}