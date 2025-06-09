import { motion } from "framer-motion";

const SkillsSection = () => {
  // Skills data organized by categories
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Material UI", level: 75 },
        { name: "Redux", level: 70 },
        { name: "Angular", level: 75 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Mongoose", level: 80 },
        { name: "SQL", level: 60 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Webpack", level: 70 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 65 },
        { name: "Responsive Design", level: 85 },
        { name: "PWA", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-green-100 dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a
            MERN stack developer. Here's an overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * skillIndex + 0.2,
                    }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 * skillIndex + 0.3,
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Additional Skills & Concepts
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "Cross-Browser Compatibility",
              "Web Accessibility",
              "Performance Optimization",
              "SEO Basics",
              "Authentication & Authorization",
              "State Management",
              "API Integration",
              "Version Control",
              "CI/CD",
              "Testing",
              "Debugging",
              "Problem Solving",
              "Agile Methodology",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="px-4 py-2 bg-green-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
