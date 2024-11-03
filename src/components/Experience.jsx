import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto p-12 my-16 relative"
    >
      {/* Background decorative elements with smoother fade */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
      />

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-5xl font-bold text-center mb-16 relative"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Experience
        </span>
      </motion.h2>
      
      <div className="relative">
        {/* Smoother timeline animation */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"
        />

        {/* Finovi Experience */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative pl-8 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -left-1.5 top-2 shadow-lg shadow-purple-300"
          />

          <motion.div
            whileHover={{ 
              scale: 1.01,
              translateX: 5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="p-6 rounded-xl bg-white shadow-xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between mb-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Finovi
              </h3>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200"
              >
                Mar 2024 - Present
              </motion.span>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mb-3">CEO & Founder</h4>
            
            <p className="text-gray-600 leading-relaxed">
              Leading the vision and strategy of Finovi, driving innovation in financial technology solutions, and building a dynamic team focused on revolutionizing digital banking experiences.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Leadership', 'Strategy', 'FinTech', 'Innovation', 'Team Building'].map((skill) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 hover:border-purple-300 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ICM Experience */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="relative pl-8 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -left-1.5 top-2 shadow-lg shadow-purple-300"
          />

          <motion.div
            whileHover={{ 
              scale: 1.01,
              translateX: 5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="p-6 rounded-xl bg-white shadow-xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between mb-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                ICM, Guwahati
              </h3>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200"
              >
                Dec 2023 - Feb 2024
              </motion.span>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Web Developer</h4>
            
            <p className="text-gray-600 leading-relaxed">
              Developed and maintained website functionalities, managed MySQL databases, and enforced security protocols.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {['MySQL', 'Web Development', 'Security', 'Database Management', 'API Integration'].map((skill) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 hover:border-purple-300 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
