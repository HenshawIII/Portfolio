import { forwardRef } from "react";

export default forwardRef(function SkillsSection({ id, animated, skills }, ref) {
  return (
    <section id={id} ref={ref} className="py-20 bg-gray-900 bg-opacity-60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set. Here are some of my core competencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-blue-400 mr-3 text-lg`}></i>
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{animated ? `${skill.level}%` : ''}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full skill-bar"
                      style={{ width: animated ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Other Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <i className="fas fa-brush text-3xl text-blue-400 mb-3"></i>
                <h4 className="text-lg font-medium text-white mb-2">UI/UX Design</h4>
                <p className="text-gray-300 text-sm">Creating intuitive and beautiful user interfaces</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <i className="fas fa-server text-3xl text-purple-400 mb-3"></i>
                <h4 className="text-lg font-medium text-white mb-2">Data Analysis</h4>
                <p className="text-gray-300 text-sm">Analyzing data to gain insights and make data-driven decisions</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <i className="fas fa-mobile-alt text-3xl text-pink-400 mb-3"></i>
                <h4 className="text-lg font-medium text-white mb-2">Agile Management</h4>
                <p className="text-gray-300 text-sm">Managing projects and teams to deliver results</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <i className="fas fa-robot text-3xl text-green-400 mb-3"></i>
                <h4 className="text-lg font-medium text-white mb-2">AI/ML</h4>
                <p className="text-gray-300 text-sm">Machine learning models and implementations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 