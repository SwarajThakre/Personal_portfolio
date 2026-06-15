import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section className="projects section" id="project">
      <SectionHeading icon={FaLaptopCode}>
        My <span>Projects</span>
      </SectionHeading>
      <p className="section-quote">
        The best way to predict the future is to create it.
      </p>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-card__image">
              <img src={project.image} alt={project.name} loading="lazy" />
              <div className="project-card__overlay" />
            </div>
            <div className="project-card__body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-card__links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code <FaGithub />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
