import { useState, useEffect } from "react";

export default function HomeSection({ id, scrollToSection }) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Full Stack Developer", "AI Enthusiast", "Blockchain Developer", "Product Manager"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (typedText.length > 0) {
          setTypedText(prev => prev.slice(0, -1));
        } else {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setCurrentIndex(0);
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, typedText]);

  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Inameti</span> <span className="wave">👋</span>
            </h1>
            <div className="h-12 mb-6">
              <div className="typewriter text-xl md:text-2xl font-mono text-blue-400">
                {typedText}
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              I build Full Stack digital experiences with modern technologies and clean code.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl floating">
                <img 
                  src="/self.jpg" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-400 opacity-20 floating" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-purple-400 opacity-20 floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-pink-400 opacity-20 floating" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 