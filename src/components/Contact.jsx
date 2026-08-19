import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCommentDots,
  FaEnvelope,
  FaHeadset,
  FaPaperPlane,
  FaTag,
  FaUser,
} from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgobabe', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section-spacing" id="contact">
      <SectionHeading icon={FaHeadset}>
        Get in <span className="text-[color:var(--accent)]">Touch</span>
      </SectionHeading>

      <motion.div
        className="mt-8 grid items-center gap-16 border-2 border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-12 lg:grid-cols-[1fr_1.2fr]"
        initial={{ opacity: 0, y: 48, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, scale: 1.01, rotate: -0.2 }}
      >
        <div className="hidden lg:block">
          <img
            src="assets/images/img/contact1.png"
            alt=""
            loading="lazy"
            decoding="async"
            width="480"
            height="480"
            className="mx-auto max-w-[30rem]"
          />
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="Name"
              placeholder="Full Name"
              required
              className="w-full border-b-2 border-[color:var(--border)] bg-transparent py-5 pl-14 pr-2 text-[1.8rem] font-bold uppercase tracking-tight text-[color:var(--heading)] placeholder:text-[#27272a] focus:border-[color:var(--accent)] focus:outline-none"
            />
            <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-[1.6rem] text-[color:var(--text-muted)]" />
          </div>
          <div className="relative">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="w-full border-b-2 border-[color:var(--border)] bg-transparent py-5 pl-14 pr-2 text-[1.8rem] font-bold uppercase tracking-tight text-[color:var(--heading)] placeholder:text-[#27272a] focus:border-[color:var(--accent)] focus:outline-none"
            />
            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-[1.6rem] text-[color:var(--text-muted)]" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="w-full border-b-2 border-[color:var(--border)] bg-transparent py-5 pl-14 pr-2 text-[1.8rem] font-bold uppercase tracking-tight text-[color:var(--heading)] placeholder:text-[#27272a] focus:border-[color:var(--accent)] focus:outline-none"
            />
            <FaTag className="absolute left-5 top-1/2 -translate-y-1/2 text-[1.6rem] text-[color:var(--text-muted)]" />
          </div>
          <div className="relative">
            <textarea
              name="Message"
              placeholder="Message"
              required
              rows={5}
              className="min-h-[12rem] w-full resize-y border-b-2 border-[color:var(--border)] bg-transparent py-5 pl-14 pr-2 text-[1.8rem] font-bold uppercase tracking-tight text-[color:var(--heading)] placeholder:text-[#27272a] focus:border-[color:var(--accent)] focus:outline-none"
            />
            <FaCommentDots className="absolute left-5 top-7 text-[1.6rem] text-[color:var(--text-muted)]" />
          </div>

          <motion.button
            type="submit"
            className="kinetic-button w-full gap-3 disabled:pointer-events-none disabled:opacity-50"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.03, y: -2, rotate: 0.5 }}
            whileTap={{ scale: 0.97 }}
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
            <FaPaperPlane />
          </motion.button>

          {status === 'success' && (
            <p className="text-center text-[1.4rem] font-semibold text-[#38a169]">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-[1.4rem] font-semibold text-[#e53e3e]">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
