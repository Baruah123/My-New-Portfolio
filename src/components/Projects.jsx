import { motion } from 'framer-motion';

function Projects() {
  const projectList = [
    {
      title: 'Cultural Heritage Preservation',
      description: 'Developed a web application using React, D3.js, and Node.js to visualize and analyze cultural heritage data, providing insights into the preservation and promotion of cultural heritage.',
      link: 'https://baruah123.github.io/Cultural-Heritage-of-North-East-India/index.html',
      tags: ['React', 'D3.js', 'Node.js'],
      color: 'from-green-500 to-emerald-700'
    },
    {
      title: 'Examination Platform',
      description: 'A platform for students to practice and prepare for exams, featuring AI-powered question analysis and personalized study plans.',
      link: 'https://exam-master-gamma.vercel.app/',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      color: 'from-purple-500 to-indigo-700'
    },
    {
      title: 'Portfolio Website',
      description: 'A portfolio website built with React, showcasing my projects and skills. Utilizes Framer Motion for smooth animations and Tailwind CSS for styling.',
      link: 'https://baruah123.github.io/New-Portfolio/',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-red-500 to-rose-700'
    },
    {
      title: 'To-do List',
      description: 'A to-do list app built with React, featuring a simple and intuitive interface for managing tasks and staying organized.',
      link: 'https://baruah123.github.io/To-Do-list/',
      tags: ['React', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-700'
    },
    {
      title: 'CulinaryCompass',
      description: 'A recipe discovery app with AR cooking instructions and smart kitchen device integration.',
      link: '#',
      tags: ['React', 'AR.js', 'Express'],
      color: 'from-amber-500 to-orange-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-8 my-10"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            whileHover="hover"
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.a 
                href={project.link}
                className="inline-flex items-center text-blue-600 font-semibold group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Project
                <motion.span 
                  className="ml-2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -5 }}
                  animate={{ x: 0 }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
