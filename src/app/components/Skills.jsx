export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 100, color: "bg-slate-600" },
        { name: "Next.js", level: 100, color: "bg-gray-800" },
        { name: "React Native", level: 100, color: "bg-cyan-500" },
        { name: "TypeScript", level: 100, color: "bg-slate-700" },
        { name: "Tailwind CSS", level: 100, color: "bg-cyan-400" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 100, color: "bg-green-500" },
        { name: "Express.js", level: 100, color: "bg-gray-600" },
        { name: "PHP", level: 100, color: "bg-purple-500" },
        { name: "Laravel", level: 100, color: "bg-red-500" },
        { name: "MongoDB", level: 100, color: "bg-green-600" },
      ]
    },
    {
      title: "Website Builders",
      skills: [
        { name: "WordPress", level: 100, color: "bg-slate-500" },
        { name: "Shopify", level: 100, color: "bg-green-500" },
        { name: "Wix", level: 100, color: "bg-orange-500" },
        { name: "Elementor", level: 100, color: "bg-purple-500" },
        { name: "WooCommerce", level: 100, color: "bg-red-400" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 100, color: "bg-orange-500" },
        { name: "Docker", level: 100, color: "bg-slate-500" },
        { name: "AWS", level: 100, color: "bg-yellow-500" },
        { name: "MySQL", level: 100, color: "bg-slate-600" },
        { name: "REST API", level: 100, color: "bg-green-400" },
      ]
    }
  ]

  return (
    <section id="skills" className="animate-right py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="animate-left stagger-1 text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-zoom interactive-card bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${0.12 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="animate-reveal"
                    style={{ animationDelay: `${0.08 * (skillIndex + 1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${0.05 * (skillIndex + 1)}s`
                        }}
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
