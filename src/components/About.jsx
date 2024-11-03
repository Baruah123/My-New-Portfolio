import { FaLaptopCode, FaShieldAlt, FaTrophy } from 'react-icons/fa';

function About() {
  return (
    <section className="max-w-5xl mx-auto p-12 my-16 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 relative">
        <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-blue-500">
          About Me
        </span>
      </h2>
      <p className="text-gray-700 text-center mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
        Experienced Web Developer adept in advanced web development. Passionate about web security and a proven leader.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md">
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
            <FaLaptopCode className="text-6xl text-blue-600" />
          </div>
          <p className="font-semibold text-lg text-gray-800">Web Development</p>
          <p className="text-gray-600 mt-2 text-sm">Building modern web applications</p>
        </div>
        <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md">
          <div className="inline-block p-4 bg-indigo-50 rounded-full mb-4">
            <FaShieldAlt className="text-6xl text-indigo-600" />
          </div>
          <p className="font-semibold text-lg text-gray-800">Web Security</p>
          <p className="text-gray-600 mt-2 text-sm">Ensuring application safety</p>
        </div>
        <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md">
          <div className="inline-block p-4 bg-green-50 rounded-full mb-4">
            <FaTrophy className="text-6xl text-green-600" />
          </div>
          <p className="font-semibold text-lg text-gray-800">Hackathon Winner</p>
          <p className="text-gray-600 mt-2 text-sm">Proven problem solver</p>
        </div>
      </div>
    </section>
  );
}

export default About;
