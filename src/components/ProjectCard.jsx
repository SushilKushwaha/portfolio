import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <SpotlightCard
        as="article"
        tiltStrength={3}
        className={`group flex flex-col overflow-hidden ${featured ? "lg:flex-row" : ""}`}
      >
        {project.image && (
          <div className={`overflow-hidden bg-surface-alt ${featured ? "lg:w-2/5" : "h-44"}`}>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className={`p-6 md:p-8 flex flex-col flex-1 ${featured ? "lg:justify-center" : ""}`}>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className={featured ? "text-2xl" : "text-lg"}>{project.title}</h3>
            <span className="pill flex-shrink-0">{project.status}</span>
          </div>

          <p className="eyebrow mb-4">{project.category}</p>

          <p className="text-muted leading-relaxed mb-4">{project.description}</p>

          {project.contribution && (
            <p className="text-sm text-muted leading-relaxed mb-6">
              <span className="font-semibold text-body">My role: </span>
              {project.contribution}
            </p>
          )}

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <ArrowIcon />
                {project.linkLabel || "View Project"}
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default ProjectCard;
