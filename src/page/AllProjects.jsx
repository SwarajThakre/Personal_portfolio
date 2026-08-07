import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';

const categories = ['All Projects', 'Basic Web', 'JavaScript', 'React'];

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="projects section" id="all-projects">
      <SectionHeading icon={FaLaptopCode}>
        All <span>Projects</span>
      </SectionHeading>
      <p className="section-quote">
        A complete collection of my work and experiments.
      </p>

      <div className="projects__filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`projects__filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filteredProjects.map((project, index) => (
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
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                decoding="async"
                width="640"
                height="420"
              />
              <div className="project-card__overlay" />
            </div>
            <div className="project-card__body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-card__links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
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
