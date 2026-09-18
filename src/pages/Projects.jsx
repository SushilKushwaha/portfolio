import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <motion.div {...pageTransition}>
      <PageHeader index="03" eyebrow="Projects" title="Things I've built and shipped." />

      <section className="page-section bg-canvas">
        <div className="container">
          <div className="flex flex-col gap-8">
            {featuredProject && <ProjectCard project={featuredProject} featured />}

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
