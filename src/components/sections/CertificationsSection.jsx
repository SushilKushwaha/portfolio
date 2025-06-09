import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CertificationsSection = () => {
  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      organization: "Broadway Infosys",
      date: "December 2023",
      description:
        "Comprehensive course covering MERN stack development, including React, Node.js, Express, and MongoDB.",
      image: "/certifications/1725442471_4999_999925_page-0001.jpg", // Replace with actual image path
      link: "https://drive.google.com/file/d/1I3HLg4OcHzUQkbFHD1PNqCzAyVgAVpkh/view",
    },
    {
      id: 2,
      title: "Mastering REST APIs in Node.js with TypeScript",
      organization: "Jobssniper ",
      date: "April 2024",
      description:
        "The fundamentals of REST APIs,Creating servers using Express.js,Utilizing Express Routers and Middlewares",
      image: "/certifications/39.png", // Replace with actual image path
      link: "https://drive.google.com/file/d/1uFZAQbGjLr5s1CSM_k9GKmkLl7QLrvxn/view",
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      organization: "HackerRank",
      date: "May 2024",
      description:
        "Official MongoDB certification covering database design, optimization, and administration.",
      image: "/certifications/software_engineer_intern certificate.jpg", // Replace with actual image path
      link: "https://drive.google.com/file/d/1zZ34FLwAnd2ARz_biB_OROLodVlakzHB/view",
    },
    {
      id: 4,
      title: "Responsive Web Design",
      organization: "freeCodeCamp",
      date: "August 2021",
      description:
        "Certification in creating responsive and accessible web designs using HTML, CSS, and JavaScript.",
      image: "/certifications/responsive-cert.jpg", // Replace with actual image path
      link: "#",
    },
  ];

  // State for selected certificate modal
  const [selectedCert, setSelectedCert] = useState(null);

  // Open certificate modal
  const openCertModal = (cert) => {
    setSelectedCert(cert);
  };

  // Close certificate modal
  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <section
      id="certifications"
      className="section bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I believe in continuous learning and have completed several
            certifications to enhance my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-green-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openCertModal(cert)}
            >
              <div className="h-40 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    {cert.organization}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {cert.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={closeCertModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-green-50 dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedCert.title}
                      </h3>
                      <p className="text-primary">
                        {selectedCert.organization}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {selectedCert.date}
                      </p>
                    </div>
                    <button
                      onClick={closeCertModal}
                      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full object-contain max-h-[400px]"
                    />
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedCert.description}
                  </p>

                  <div className="flex justify-end">
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
