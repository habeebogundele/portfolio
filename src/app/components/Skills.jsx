export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gray-800" },
        { name: "React Native", level: 88, color: "bg-cyan-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-400" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-500" },
        { name: "Express.js", level: 88, color: "bg-gray-600" },
        { name: "PHP", level: 85, color: "bg-purple-500" },
        { name: "Laravel", level: 87, color: "bg-red-500" },
        { name: "MongoDB", level: 82, color: "bg-green-600" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 93, color: "bg-orange-500" },
        { name: "Docker", level: 78, color: "bg-blue-400" },
        { name: "AWS", level: 75, color: "bg-yellow-500" },
        { name: "MySQL", level: 85, color: "bg-blue-500" },
        { name: "REST API", level: 90, color: "bg-green-400" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}