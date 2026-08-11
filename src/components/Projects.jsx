import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';

export default function Projects({ onViewAll }) {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="mx-auto max-w-[120rem] px-[5%] py-32" id="project">
      <SectionHeading icon={FaLaptopCode}>
        My <span className="text-[color:var(--accent)]">Projects</span>
      </SectionHeading>
      <p className="mx-auto mb-16 max-w-[60rem] text-center text-[1.6rem] italic text-[color:var(--text-muted)]">
        The best way to predict the future is to create it.
      </p>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            className="overflow-hidden rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--bg-card)] transition duration-250 hover:shadow-[var(--shadow)]"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -10, scale: 1.02, rotate: -0.7 }}
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

      <div className="mt-12 flex justify-center">
        <motion.button
          type="button"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[#c4155f] px-8 py-4 text-[1.5rem] font-semibold text-white shadow-[0_4px_20px_var(--accent-glow)] transition-transform duration-200 hover:-translate-y-0.5"
          onClick={onViewAll}
          whileHover={{ scale: 1.05, y: -3, rotate: 0.6 }}
          whileTap={{ scale: 0.97 }}
        >
          View all
        </motion.button>
      </div>
    </section>
  );
}
