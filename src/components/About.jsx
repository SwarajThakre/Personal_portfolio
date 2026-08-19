import { motion } from 'framer-motion';
import { FaChevronRight, FaUser } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="section-spacing" id="about">
      <SectionHeading icon={FaUser}>
        About <span className="text-[color:var(--accent)]">Me</span>
      </SectionHeading>

      <div className="mt-16 grid gap-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, rotate: -1.1, scale: 1.02 }}
        >
          <img
            src="assets/images/img/IMG-20241215-WA0012.jpg"
            alt="Swaraj Thakre"
            draggable="false"
            loading="lazy"
            decoding="async"
            width="480"
            height="520"
            className="mx-auto w-full max-w-[40rem] border-2 border-[color:var(--border)] grayscale transition duration-300 hover:grayscale-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, scale: 1.01, rotate: 0.3 }}
        >
          <h3 className="mb-3 text-[2.8rem]">I&apos;m Swaraj</h3>
          <span className="mb-6 inline-block border-2 border-[color:var(--accent)] px-4 py-2 text-[1.4rem] font-bold uppercase tracking-wide text-[color:var(--accent)]">
            Front-end Developer
          </span>
          <p className="mb-8 text-[1.6rem] leading-[1.8] text-[color:var(--text)]">
            I am a Front-end Developer based in Mumbai, India. I am an
            Information Technology Graduate from Viva College. I am very
            passionate about improving my coding skills and developing
            applications and websites. Working for myself to improve my coding
            skills.
          </p>

          <div className="mb-8 space-y-3 text-[1.5rem]">
            <p>
              <span className="font-semibold text-[color:var(--heading)]">
                Email:
              </span>{' '}
              swarajthakre1234567@gmail.com
            </p>
            <p>
              <span className="font-semibold text-[color:var(--heading)]">
                Place:
              </span>{' '}
              Mumbai, India - 401305
            </p>
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1wLQu3d7mrBuSIBYblyAlmVNXDwLkfhyA/view?usp=drive_link"
            className="kinetic-button gap-3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume
            <FaChevronRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
