import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/swaraj-thakre-7461681b6/',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    className: 'linkedin',
  },
  {
    href: 'https://github.com/SwarajThakre',
    icon: FaGithub,
    label: 'GitHub',
    className: 'github',
  },
  {
    href: 'https://x.com/thakre_swaraj',
    icon: FaTwitter,
    label: 'Twitter',
    className: 'twitter',
  },
  {
    href: 'https://t.me/SwarajThakre1',
    icon: FaTelegramPlane,
    label: 'Telegram',
    className: 'telegram',
  },
  {
    href: 'https://www.instagram.com/dollarthakre1/',
    icon: FaInstagram,
    label: 'Instagram',
    className: 'instagram',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero__eyebrow">Front-End Developer</p>
          <h1 className="hero__title">
            I am Swaraj <span>Thakre</span>,
          </h1>
          <p className="hero__subtitle">
            I am into{' '}
            <TypeAnimation
              sequence={[
                'frontend development',
                2000,
                'web designing',
                2000,
                'web development',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__typed"
            />
            ,
          </p>
          <a
            href="#about"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About Me
            <HiArrowDown />
          </a>

          <ul className="social-icons">
            {socialLinks.map(({ href, icon: Icon, label, className }) => (
              <li key={label}>
                <a
                  href={href}
                  className={className}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="hero__image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero__image-ring" />
          <img
            src="/assets/images/img/hero.webp"
            alt="Swaraj Thakre"
            draggable="false"
          />
        </motion.div>
      </div>
    </section>
  );
}
