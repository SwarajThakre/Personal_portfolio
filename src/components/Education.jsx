import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const education = [
  {
    image: '/assets/images/img/viva-college-photo-new-campus.png',
    title: 'Hsc Science & Bachelor of Science in Information Technology',
    institution: 'Viva College | HSc and BSc.IT',
    period: '2016 - 2022 | Completed',
    alt: 'Viva College',
  },
  {
    image:
      '/assets/images/img/national-english-high-school-manvelpada-virar-east-palghar-secondary-schools-bk2511lyg4.avif',
    title: 'SSC',
    institution: 'National English High School | SSC',
    period: '2016 | Completed',
    alt: 'National English High School',
  },
];

export default function Education() {
  return (
    <section className="education section" id="education">
      <SectionHeading icon={FaGraduationCap}>
        My <span>Education</span>
      </SectionHeading>
      <p className="section-quote">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="education__grid">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="education-card__image">
              <img src={item.image} alt={item.alt} draggable="false" />
            </div>
            <div className="education-card__content">
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <span>{item.period}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
