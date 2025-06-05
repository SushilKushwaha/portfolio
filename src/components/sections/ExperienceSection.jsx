import { motion } from "framer-motion";

const ExperienceSection = () => {
  // Experience data
  const experiences = [
    {
      company: "iShani Technology Pvt. Ltd.",
      position: "Full Stack Developer",
      period: "December 2023 - Present",
      location: "Lalitpur, Nepal",
      description:
        "Working as a full-stack developer focusing on MERN stack applications.",
      responsibilities: [
        "Developed and maintained multiple web applications using React, Node.js, Express, and MongoDB",
        "Implemented responsive UI designs using Tailwind CSS and Material UI",
        "Created RESTful APIs and integrated third-party services",
        "Optimized application performance and implemented security best practices",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Participated in code reviews and mentored junior developers",
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-green-100 dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-primary last:border-transparent last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark"></div>

              {/* Experience card */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <h4 className="text-lg text-primary font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400 text-sm">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                <h5 className="font-semibold mb-2">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">
                        {responsibility}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
