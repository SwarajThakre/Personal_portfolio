import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const y = useTransform(scrollY, [0, 450], [0, 60]);
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 md:px-8"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[45rem] w-[45rem] -translate-x-1/2 rounded-full bg-[color:var(--accent-soft)] blur-[140px]"
        animate={{ scale: [1, 1.14, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-52 -right-40 h-[35rem] w-[35rem] rounded-full bg-amber-500/10 blur-[150px]"
        animate={{ scale: [1.08, 0.92, 1.08], opacity: [0.25, 0.65, 0.25] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        style={{ opacity, y }}
        className="relative mx-auto grid w-full max-w-[120rem] items-center gap-16 lg:grid-cols-[1.2fr_.8fr]"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-white/[.03] px-4 py-2 text-[1.3rem] text-[color:var(--text-muted)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_var(--accent)]" />
            Available for opportunities
          </div>
          <p className="kinetic-label mb-5">
            Frontend developer · Mumbai, India
          </p>
          <h1 className="max-w-2xl text-[clamp(3.6rem,8vw,4.8rem)] leading-[.92] tracking-tight">
            Building calm, capable digital experiences.
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1.8rem,2.3vw,2.4rem)] leading-relaxed text-[color:var(--text-muted)]">
            I&apos;m Swaraj Thakre. I design and build thoughtful interfaces
            with React, JavaScript, and a focus on details that make the web
            feel effortless.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#project" className="kinetic-button gap-3">
              Explore my work <FaArrowDown />
            </a>
            <a
              href="https://github.com/SwarajThakre"
              className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/15 px-6 text-[1.5rem] transition hover:bg-white/5"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[40rem] rounded-2xl border border-white/10 bg-[color:var(--bg-card)] p-3 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,.45)]"
        >
          <img
            src="assets/images/img/hero.webp"
            alt="Swaraj Thakre"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-amber-500/20 bg-[color:var(--bg-elevated)] px-5 py-4 shadow-[0_0_40px_rgba(245,158,11,.15)]">
            <p className="text-[1.2rem] text-[color:var(--text-muted)]">
              Currently Exploring
            </p>
            <p className="mt-1 text-[1.6rem] font-medium">
              Full-Stack Development
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/swarajst/"
            className="absolute -right-3 top-8 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[color:var(--bg-elevated)] text-[color:var(--accent)] hover:shadow-[0_0_20px_rgba(245,158,11,.4)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/dollar_thakre26/"
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-4 left-10/12 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-[color:var(--bg-elevated)] text-[2rem] text-[#e4405f] shadow-lg transition hover:shadow-[0_0_20px_rgba(228,64,95,.45)]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
