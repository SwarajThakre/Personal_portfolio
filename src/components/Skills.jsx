import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { skills } from '../data/skills';
import SectionHeading from './SectionHeading';

const categories = ['Frontend', 'Backend', 'Other'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.04,
      },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -14, scale: 0.88 },
  };

  return (
    <section className="section-spacing" id="skills">
      <SectionHeading icon={FaLaptopCode}>
        Skills & <span className="text-[color:var(--accent)]">Abilities</span>
      </SectionHeading>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            type="button"
            className={`rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] px-6 py-3 text-[1.4rem] font-semibold font-['Outfit'] transition-all duration-250 ${
              activeCategory === category
                ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-white shadow-[0_4px_16px_var(--accent-glow)]'
                : 'text-[color:var(--text-muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]'
            }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        exit="exit"
        layout
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="wait">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="flex flex-col items-center gap-4 rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--bg-card)] p-8 transition-all duration-250 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-[color:var(--bg-card-hover)] hover:shadow-[var(--shadow)]"
              transition={{
                duration: 0.35,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              layout
              whileHover={{ y: -8, scale: 1.03, rotate: -1.2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              exit="exit"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                className="h-[4.8rem] w-[4.8rem] object-contain"
              />
              <span className="text-center text-[1.4rem] font-semibold text-[color:var(--heading)]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
