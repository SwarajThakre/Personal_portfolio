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
    <section className="contact section" id="contact">
      <SectionHeading icon={FaHeadset}>
        Get in <span>Touch</span>
      </SectionHeading>

      <motion.div
        className="contact__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact__visual">
          <img src="/assets/images/img/contact1.png" alt="" />
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-field">
            <input type="text" name="Name" placeholder="Full Name" required />
            <FaUser />
          </div>
          <div className="form-field">
            <input type="email" name="Email" placeholder="Email" required />
            <FaEnvelope />
          </div>
          <div className="form-field">
            <input type="text" name="Subject" placeholder="Subject" />
            <FaTag />
          </div>
          <div className="form-field form-field--textarea">
            <textarea name="Message" placeholder="Message" required rows={5} />
            <FaCommentDots />
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--full"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
            <FaPaperPlane />
          </button>

          {status === 'success' && (
            <p className="form-status form-status--success">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status--error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
