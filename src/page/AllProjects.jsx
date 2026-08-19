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
    <section className="section-spacing" id="all-projects">
      <SectionHeading icon={FaLaptopCode}>
        All <span className="text-[color:var(--accent)]">Projects</span>
      </SectionHeading>
      <p className="mb-16 max-w-2xl text-[1.8rem] leading-tight text-[color:var(--text-muted)]">
        A complete collection of my work and experiments.
      </p>

      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-card)] px-5 py-3 text-[1.4rem] font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'border-amber-500/40 bg-[color:var(--accent-soft)] text-[color:var(--accent)]'
                : 'text-[color:var(--text)] hover:border-white/15 hover:bg-white/5'
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
            key={project.github ?? `${project.name}-${project.category}`}
            className="kinetic-card group overflow-hidden"
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
            </div>
            <div className="p-8">
              <h3 className="mb-3 text-[2.2rem] tracking-tight">{project.name}</h3>
              <p className="mb-6 text-[1.4rem] leading-[1.7] text-[color:var(--text-muted)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-[1.3rem] font-medium transition hover:bg-white/5"
                >
                  View Project <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-[1.3rem] font-medium transition hover:bg-white/5"
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
