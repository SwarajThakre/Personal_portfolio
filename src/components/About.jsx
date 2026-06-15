import { motion } from 'framer-motion';
import { FaChevronRight, FaUser } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="about section" id="about">
      <SectionHeading icon={FaUser}>
        About <span>Me</span>
      </SectionHeading>

      <div className="about__grid">
        <motion.div
          className="about__image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/images/img/IMG-20241215-WA0012.jpg"
            alt="Swaraj Thakre"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h3>I&apos;m Swaraj</h3>
          <span className="tag">Front-end Developer</span>
          <p>
            I am a Front-end Developer based in Mumbai, India. I am an
            Information Technology Graduate from Viva College. I am very
            passionate about improving my coding skills and developing
            applications and websites. Working for myself to improve my coding
            skills.
          </p>

          <div className="about__details">
            <p>
              <span>Email:</span> swarajthakre1234567@gmail.com
            </p>
            <p>
              <span>Place:</span> Mumbai, India - 401305
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1wLQu3d7mrBuSIBYblyAlmVNXDwLkfhyA/view?usp=drive_link"
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <FaChevronRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
