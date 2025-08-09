export default function AboutSection({ id }) {
  const experiences = [
    {
      role: "Product Manager",
      company: "ChainFren",
      period: "2024 - Present",
      description: "Used Agile methodologies to manage projects and teams to deliver results."
    },
    {
      role: "Full Stack Developer",
      company: "ChainFren",
      period: "2022 - 2024",
      description: "Developed and maintained web applications using the JavaScript ecosystem."
    },
    {
      role: "Financial Analyst",
      company: "Banks",
      period: "2019 - 2024",
      description: "Analyzed financial data and provided insights to the management."
    }
  ];
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and what drives me as a developer.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400">
                  <img
                    src="/self.jpg"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-white mb-2">Inameti Henshaw</h3>
              <p className="text-blue-400 text-center mb-4">Full Stack Developer</p>
              <p className="text-gray-300 text-center mb-6">
                Passionate about creating elegant solutions to complex problems through code.
              </p>
              {/* <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/HenshawCV.pdf';
                    link.download = 'Henshaw_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Download CV
                </button>
              </div> */}
            </div>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-white mb-6">My Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 pb-8 border-l-2 border-blue-400 border-opacity-30 last:border-0 last:pb-0 group"
                >
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-400 group-hover:animate-pulse"></div>
                  <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:bg-gray-700 transition-colors">
                    <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                    <div className="flex items-center text-blue-400 mb-3">
                      <i className="fas fa-building mr-2"></i>
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <i className="fas fa-calendar-alt mr-2"></i>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Floating elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
    </section>
  );
} 