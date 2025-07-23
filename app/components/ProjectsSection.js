import { useState } from "react";
import { classNames } from "./utils";

export default function ProjectsSection({ id, projects }) {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const categories = ["all", "Web2.0", "Web3.0", "Artificial Intelligence"];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  return (
    <section id={id} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={classNames(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                filter === category ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              )}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={classNames(
                'card-hover bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-500',
                hoveredProject === project.id ? 'ring-2 ring-blue-400' : ''
              )}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-900 bg-opacity-50 text-blue-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  
                  <a
                    href={project.live}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
} 