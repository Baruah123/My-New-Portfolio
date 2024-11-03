import { motion } from 'framer-motion';

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      rotateX: -45,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto p-10 mt-16 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl transform -rotate-1"></div>
      <div className="absolute inset-0 bg-white/80 rounded-2xl transform rotate-1"></div>
      
      <div className="relative">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Educational Journey
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="p-8 rounded-2xl bg-white border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform perspective-1000"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">B-Tech CSE</h3>
                <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
                  Majors: Cloud Technology and Information Security
                </p>
                <p className="text-gray-600">Assam Downtown University, Guwahati (2021-2025)</p>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-white">
                <span className="font-bold">7.9</span>
                <span className="text-sm">CGPA</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="p-8 rounded-2xl bg-white border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Higher Secondary</h3>
                <p className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  Dimension Academy, Tezpur
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-white">
                <span className="font-bold">82%</span>
                <span className="text-sm">Score</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="p-8 rounded-2xl bg-white border-2 border-pink-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">HSLC</h3>
                <p className="text-lg bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-semibold">
                  Morning Start High School, Gohpur
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-full text-white">
                <span className="font-bold">74%</span>
                <span className="text-sm">Score</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Education;
