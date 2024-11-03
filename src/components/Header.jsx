import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 text-white py-24 px-6 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute animate-pulse top-0 right-0 h-64 w-64 bg-white opacity-5 rounded-full blur-xl transform -translate-y-10 translate-x-10"></div>
        <div className="absolute animate-pulse delay-700 bottom-0 left-0 h-48 w-48 bg-white opacity-5 rounded-full blur-xl transform translate-y-10 -translate-x-10"></div>
        <div className="absolute top-1/2 left-1/4 h-32 w-32 bg-blue-400 opacity-5 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="md:w-2/3">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 pb-2">
            Avoy Baruah
          </h1>
          <p className="text-xl lg:text-2xl font-medium mb-8 text-blue-100">
            Experienced Web Developer with a focus on advanced web development and web security.
          </p>
          <div className="flex space-x-6">
            <a
              href="mailto:avoycoc123@gmail.com"
              className="flex items-center bg-white/90 text-blue-800 px-6 py-3 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 font-semibold"
            >
              <FaEnvelope className="mr-2 text-xl" /> Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/avoy-baruah/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-white/80 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 hover:scale-105 transition-all duration-300"
            >
              <FaLinkedin className="mr-2 text-xl" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8yZ2L_os8yGUnnAltT9fcdf1BFIbSD2tjg&s"
              alt="Profile"
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-white/80 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
