import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { skills } from '../data/skills';
import SectionHeading from './SectionHeading';

const categories = ['Frontend', 'Backend', 'Other'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section className="skills section" id="skills">
      <SectionHeading icon={FaLaptopCode}>
        Skills & <span>Abilities</span>
      </SectionHeading>

      <div className="skills__categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="skills__grid">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              layout
            >
              <img src={skill.icon} alt={skill.name} loading="lazy" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
