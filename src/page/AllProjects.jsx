import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';

const categories = ['All Projects', 'Basic Web', 'JavaScript', 'React', 'Node'];

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto max-w-[120rem] px-[5%] py-32" id="all-projects">
      <SectionHeading icon={FaLaptopCode}>
        All <span className="text-[color:var(--accent)]">Projects</span>
      </SectionHeading>
      <p className="mx-auto mb-16 max-w-[60rem] text-center text-[1.6rem] italic text-[color:var(--text-muted)]">
        A complete collection of my work and experiments.
      </p>

      <div className="mx-auto mb-12 flex max-w-[70rem] flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] px-6 py-3 text-[1.4rem] font-semibold transition-all duration-200 ${
              activeCategory === category
                ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-white'
                : 'text-[color:var(--text)] hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            className="overflow-hidden rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--bg-card)] transition duration-250 hover:shadow-[var(--shadow)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="relative h-[20rem] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                decoding="async"
                width="640"
                height="420"
                className="h-full w-full object-cover transition duration-400 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-card)] to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="mb-3 text-[2rem]">{project.name}</h3>
              <p className="mb-6 text-[1.4rem] leading-[1.7] text-[color:var(--text-muted)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--secondary-soft)] px-4 py-3 text-[1.3rem] font-semibold text-[color:var(--secondary)] transition-colors hover:bg-[color:var(--secondary)] hover:text-white"
                >
                  View Project <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--secondary-soft)] px-4 py-3 text-[1.3rem] font-semibold text-[color:var(--secondary)] transition-colors hover:bg-[color:var(--secondary)] hover:text-white"
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
