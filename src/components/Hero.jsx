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
    hoverClass: 'hover:bg-[#0077b5]',
  },
  {
    href: 'https://github.com/SwarajThakre',
    icon: FaGithub,
    label: 'GitHub',
    hoverClass: 'hover:bg-[#333]',
  },
  {
    href: 'https://x.com/thakre_swaraj',
    icon: FaTwitter,
    label: 'Twitter',
    hoverClass: 'hover:bg-[#1da1f2]',
  },
  {
    href: 'https://t.me/SwarajThakre1',
    icon: FaTelegramPlane,
    label: 'Telegram',
    hoverClass: 'hover:bg-[#0088cc]',
  },
  {
    href: 'https://www.instagram.com/dollarthakre1/',
    icon: FaInstagram,
    label: 'Instagram',
    hoverClass:
      'hover:bg-[linear-gradient(45deg,_#f09433,_#e6683c,_#dc2743,_#cc2366,_#bc1888)]',
  },
];

export default function Hero() {
  const reveal = {
    hidden: { opacity: 0, y: 80, scale: 0.96, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-[5%] pb-24 pt-40"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute right-[-10%] top-[-10%] h-[50rem] w-[50rem] rounded-full bg-[color:var(--hero-orb-1)] blur-[80px]"
          animate={{
            x: [0, 24, 0],
            y: [0, -28, 0],
            scale: [1, 1.06, 1],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-5%] h-[40rem] w-[40rem] rounded-full bg-[color:var(--hero-orb-2)] blur-[80px]"
          animate={{
            x: [0, -24, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
            rotate: [0, -6, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%)]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[120rem] items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-4 text-[1.4rem] font-semibold uppercase tracking-[0.15em] text-[color:var(--accent)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Front-End Developer
          </motion.p>
          <motion.h1
            className="mb-6 text-[clamp(3.6rem,5vw,5.6rem)] leading-[1.1]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            I am Swaraj{' '}
            <span className="bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--secondary)] bg-clip-text text-transparent">
              Thakre
            </span>
            ,
          </motion.h1>
          <motion.p
            className="mb-10 text-[clamp(1.8rem,2.5vw,2.4rem)] text-[color:var(--text-muted)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.95 }}
          >
            I am into{' '}
            <TypeAnimation
              sequence={[
                'Frontend Development',
                2000,
                'Web Designing',
                2000,
                'Web Development',
                2000,
                'React development',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold text-[color:var(--secondary)]"
            />
            ,
          </motion.p>
          <motion.a
            href="#about"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[#c4155f] px-8 py-4 text-[1.5rem] font-semibold text-white shadow-[0_4px_20px_var(--accent-glow)] transition-transform duration-200 hover:-translate-y-0.5"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector('#about')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            whileHover={{
              scale: 1.06,
              y: -4,
              rotate: 1,
              boxShadow: '0 14px 32px var(--accent-glow)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            About Me
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <HiArrowDown />
            </motion.span>
          </motion.a>

          <ul className="mt-12 flex flex-wrap gap-4">
            {socialLinks.map(
              ({ href, icon: Icon, label, hoverClass }, index) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.06, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.08, rotate: 2 }}
                >
                  <a
                    href={href}
                    className={`flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[1.8rem] text-[color:var(--text-muted)] transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:text-white ${hoverClass}`}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                </motion.li>
              ),
            )}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
          whileHover={{ scale: 1.03, rotate: -1.2 }}
        >
          <motion.div
            className="absolute aspect-square w-[90%] rounded-full border-2 border-[color:var(--accent)] opacity-30"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.16, 0.3] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src="assets/images/img/hero.webp"
            alt="Swaraj Thakre"
            draggable="false"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="420"
            height="420"
            className="relative z-10 w-[min(38rem,100%)] rounded-[1.5rem] shadow-[var(--shadow)]"
            initial={{ y: 32, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotate: [-0.5, 0.5, 0] }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </section>
  );
}
