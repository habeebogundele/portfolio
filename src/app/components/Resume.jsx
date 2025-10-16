'use client'

export default function Resume() {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of web and mobile applications using MERN stack and React Native. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "Node.js", "MongoDB", "React Native", "AWS"]
    },
    {
      title: "Fullstack Developer & CMS Specialist",
      company: "Digital Innovations LLC",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using PHP/Laravel and React. Built RESTful APIs and created custom WordPress themes and Shopify stores.",
      technologies: ["PHP", "Laravel", "React", "WordPress", "Shopify", "Wix"]
    },
    {
      title: "Web Developer",
      company: "Web Creators Agency",
      period: "2019 - 2020",
      description: "Created responsive websites using various platforms including WordPress, Wix, and custom code solutions. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["JavaScript", "React", "WordPress", "Wix", "CSS3", "HTML5"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated Magna Cum Laude. Focus on Software Engineering and Web Technologies."
    }
  ]

  const certifications = [
    "AWS Certified Developer - Associate",
    "MongoDB Certified Developer",
    "React Native Certification",
    "Laravel Certified Developer",
    "WordPress Development Specialist",
    "Shopify Expert Certification"
  ]

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Your-Name-Fullstack-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience with custom development and popular website platforms.
          </p>
          <button
            onClick={downloadResume}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </button>
        </div>

         <div className="grid lg:grid-cols-2 gap-12">
           {/* Experience Section */}
           <div>
             <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
               <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
               Work Experience
             </h3>
             <div className="space-y-8">
               {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                        <p className="text-green-600 font-semibold">{edu.institution}</p>
                      </div>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
                Certifications
              </h3>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
        </div>

        {/* Secondary Download Button */}
        <div className="text-center mt-12">
          <button
            onClick={downloadResume}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  )
}
