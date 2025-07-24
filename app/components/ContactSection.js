import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // if(!formRef.current) return;
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    });
  };

  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-900 bg-opacity-50 border border-green-400 text-green-300 px-4 py-3 rounded mb-4">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-900 bg-opacity-50 border border-red-400 text-red-300 px-4 py-3 rounded mb-4">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-lg flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900 bg-opacity-50 p-4 rounded-xl">
                    <i className="fas fa-map-marker-alt text-blue-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Location</h4>
                    <p className="text-gray-200">Lagos,Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900 bg-opacity-50 p-4 rounded-xl">
                    <i className="fas fa-envelope text-blue-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <p className="text-gray-200">Henshawimmanuel@gmail.com</p>
                  </div>
                </div>  
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900 bg-opacity-50 p-4 rounded-xl">
                    <i className="fas fa-phone-alt text-blue-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                    <p className="text-gray-200">+234 816 971 8088</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900 bg-opacity-50 p-4 rounded-xl">
                    <i className="fas fa-clock text-blue-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Working Hours</h4>
                    <p className="text-gray-200">Available 24/7</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-sm font-medium text-gray-400 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/henshawiii" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-xl text-white transition-colors">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href="https://x.com/devansa01" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-xl text-white transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/immanuel-henshaw-982947207/" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-xl text-white transition-colors">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  {/* <a href="#" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-xl text-white transition-colors">
                    <i className="fab fa-dev text-xl"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 