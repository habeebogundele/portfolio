export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "MERN Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application built with React Native. Includes real-time sync, push notifications, and offline capability.",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "React Native",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Laravel CRM System",
      description: "Customer relationship management system with advanced reporting, email automation, and team collaboration features.",
      technologies: ["Laravel", "MySQL", "Livewire", "Bootstrap"],
      category: "PHP/Laravel",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <div className="text-white text-4xl">🚀</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveUrl} className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}