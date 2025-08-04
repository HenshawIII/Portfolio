"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { classNames } from "./components/utils";

const projects = [
    {
        id: 1,
        title: "DocuMentor",
        description: "A full stack RAG app that allows users to sign up, upload documents, and interact with them through an AI-powered chat interface.",
        tags: ["React", "Node.js", "Web2.0","Langchain", "MongoDB","Express","OpenAI","Vercel","Supabase","Artificial Intelligence"],
        image: "/docu.png",
        github: "#",
        live: "https://docu-mentor-murex.vercel.app/"
    },
    {
        id: 2,
        title: "TipChat",
        description: "An Ethereum-based tipping and chat platform that allows users to tip and interact with each other.",
        tags: ["React", "Ethereum", "Web3.0", "Wagmi","WebSockets","MongoDB","Express"],
        image: "/TipC.png",
        github: "#",
        live: "https://tipchat-chi.vercel.app/"
    },
    {
        id: 3,
        title: "Sendbeast", 
        description: "An AI powered solana based chatbot that allows users interact with the solana blockchain with the help of an AI agent.",
        tags: ["Next.js","Typescript", "Solana", "Web3.0", "OpenAI","@solana/web3.js","Privy","Artificial Intelligence"],
        image: "/send.png",
        github: "#",
        live: "https://www.sendbeast.app"
    },
    {
        id: 4,
        title: "MyStartup",
        description: "A platform for developers to pitch startup ideas and connect with potential investors.",
        tags: ["Nextjs", "SanityCMS", "TailwindCSS", "Web2.0","NextAuth","Typescript"],
        image: "/pitch.png",
        github: "#",  
        live: "https://hic-pitch-mju5.vercel.app/"
    },
    {
        id: 5,
        title: "SwitchTV",
        description: "A solana based streaming platform that allows users to create content and earn from it.",
        tags: ["Nextjs", "Solana", "Web3.0","@solana/web3.js","Privy","LivePeer"],
        image: "/stream.png",
        github: "#",
        live: "https://cmnity-oucn.vercel.app/"
    },
    {
        id: 6,
        title: "ElixirApp",
        description: "A social application that allows users to connect with each other and share their thoughts and ideas.",
        tags: ["Nextjs", "Supabase", "React", "TailwindCSS","Typescript","Web2.0"],
        image: "/elixir.png",
        github: "#",
        live: "https://elixir-app-dusky.vercel.app/"
    },
    {
        id: 7,
        title: "FoodExpress",
        description: "A food delivery application that allows users to order food from their favorite restaurants with a robust authentication system built from scratch.",
        tags: ["React", "MongoDB", "Express", "TailwindCSS","Web2.0","Passportjs","Authentication"],
        image: "/Foodexp.png",
        github: "#",
        live: "https://food-express-indol.vercel.app/"
    },
    {
        id: 8,
        title: "HIC_Tech",
        description: "A simple website with a nicely designed UI",
        tags: ["Nextjs", "TailwindCSS","Typescript","Web2.0"],
        image: "/chaiC.png",
        github: "#",
        live: "https://tek-ui.vercel.app/"
    }

];

const skills = [
    { name: "JavaScript", level: 95, icon: "fab fa-js" },
    { name: "React", level: 90, icon: "fab fa-react" },
    { name: "Node.js", level: 85, icon: "fab fa-node" },
    { name: "SQL", level: 80, icon: "fas fa-database" },
    { name: "TypeScript", level: 75, icon: "fab fa-js" },
    { name: "MongoDB", level: 70, icon: "fas fa-database" },
    { name: "Express", level: 70, icon: "fas fa-server" },
    { name: "Git", level: 70, icon: "fab fa-git-alt" },
    { name: "Vercel", level: 70, icon: "fas fa-cloud" },
    { name: "Figma", level: 70, icon: "fab fa-figma" },
    { name: "Supabase", level: 70, icon: "fas fa-database" },
    { name: "Blockchain Integration", level: 70, icon: "fas fa-link" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setAnimatedSkills(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-gray-100 font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')] opacity-20 bg-cover bg-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Inameti</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'projects', 'skills', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={classNames(
                    'px-1 py-2 text-sm font-medium transition-all duration-300',
                    activeSection === section
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  )}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 focus:outline-none"
              >
                {isMenuOpen ? (
                  <i className="fas fa-times text-xl"></i>
                ) : (
                  <i className="fas fa-bars text-xl"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'projects', 'skills', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={classNames(
                    'block px-3 py-2 rounded-md text-base font-medium w-full text-left',
                    activeSection === section
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  )}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <HomeSection id="home" scrollToSection={scrollToSection} />
        <ProjectsSection id="projects" projects={projects} />
        <SkillsSection id="skills" ref={skillsRef} animated={animatedSkills} skills={skills} />
        <AboutSection id="about" />
        <ContactSection id="contact" />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold gradient-text">Inameti Henshaw</h2>
              <p className="text-gray-400 mt-2">Building the future, one line of code at a time</p>
            </div>
            <div className="flex space-x-6">
              {/* <a href="https://github.com/henshawiii" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <i className="fab fa-github"></i>
              </a> */}
              <a href="https://x.com/devansa01" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/immanuel-henshaw-982947207/" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
             
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Inameti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
