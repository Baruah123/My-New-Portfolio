import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Certifications() {
  const certifications = [
    { 
      name: 'Google Cloud Computing Foundations', 
      issuer: 'Google',
      link: 'https://drive.google.com/file/d/1VjCujtcyaSpCV7mVDQZjKJ_0c0SNmfU7/view?usp=drive_link'
    },
    { 
      name: 'Microsoft Azure', 
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1tckXKUIuPwrD8IWU1uespdgpUU1t87ZC/view?usp=drive_link'
    },
    { 
      name: 'ServiceNow Micro', 
      issuer: 'ServiceNow',
      link: 'https://drive.google.com/file/d/1zSZS-0BBCOl01mZQfrOhFBlIcrOR1e6E/view?usp=drive_link'
    },
    { 
      name: 'Web Development', 
      issuer: 'UDEMY',
      link: 'https://drive.google.com/file/d/1zusWTE1-CVW6PCcjzZ_9n31gb48OIta7/view?usp=drive_link'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg mt-10 hover:shadow-xl transition-shadow duration-300"
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2"
      >
        Certifications
      </motion.h2>
      <motion.ul 
        variants={listVariants}
        className="space-y-4"
      >
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="group"
          >
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </span>
                  <span className="text-gray-500 ml-2">- {cert.issuer}</span>
                </div>
              </div>
              <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition-colors ml-2" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Certifications;
