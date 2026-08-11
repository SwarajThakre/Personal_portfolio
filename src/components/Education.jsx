import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const education = [
  {
    image: 'assets/images/img/viva-college-photo-new-campus.png',
    title: 'Hsc Science & Bachelor of Science in Information Technology',
    institution: 'Viva College | HSc and BSc.IT',
    period: '2016 - 2022 | Completed',
    alt: 'Viva College',
  },
  {
    image:
      'assets/images/img/national-english-high-school-manvelpada-virar-east-palghar-secondary-schools-bk2511lyg4.avif',
    title: 'SSC',
    institution: 'National English High School | SSC',
    period: '2016 | Completed',
    alt: 'National English High School',
  },
];

export default function Education() {
  return (
    <section className="section-spacing" id="education">
      <SectionHeading icon={FaGraduationCap}>
        My <span className="text-[color:var(--accent)]">Education</span>
      </SectionHeading>
      <p className="mx-auto mb-16 max-w-[60rem] text-center text-[1.6rem] italic text-[color:var(--text-muted)]">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            className="overflow-hidden rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--bg-card)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="h-[18rem] overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                draggable="false"
                loading="lazy"
                decoding="async"
                width="640"
                height="420"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-2 text-[1.8rem]">{item.title}</h3>
              <p className="mb-3 text-[1.4rem] text-[color:var(--text-muted)]">
                {item.institution}
              </p>
              <span className="text-[1.3rem] font-semibold text-[color:var(--accent)]">
                {item.period}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
