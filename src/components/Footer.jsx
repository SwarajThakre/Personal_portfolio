import {
  FaChevronRight,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#project', label: 'Projects' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-[5%] py-20">
      <div className="mx-auto mb-12 grid max-w-[120rem] gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h3 className="mb-6 text-[1.8rem] text-[color:var(--accent)]">
            Swaraj Portfolio
          </h3>
          <p className="text-[1.4rem] leading-[1.8] text-[color:var(--text-muted)]">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
            <br />
            <br />
            Keep Rising. Connect with me over live chat!
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-[1.8rem] text-[color:var(--accent)]">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-[1.4rem] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--accent)]"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(href)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaChevronRight /> {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-[1.8rem] text-[color:var(--accent)]">
            Contact Info
          </h3>
          <div className="flex flex-col gap-3 text-[1.4rem] text-[color:var(--text-muted)]">
            <p className="flex items-center gap-2">
              <FaPhone /> +91 9049443446
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> swarajthakre.stud@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Mumbai, India - 401305
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/swaraj-thakre-7461681b6/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[1.6rem] text-[color:var(--text-muted)] transition-all hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/SwarajThakre"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[1.6rem] text-[color:var(--text-muted)] transition-all hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:swarajthakre.stud@gmail.com"
                aria-label="Email"
                className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[1.6rem] text-[color:var(--text-muted)] transition-all hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://x.com/thakre_swaraj"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[1.6rem] text-[color:var(--text-muted)] transition-all hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://t.me/SwarajThakre1"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[1.6rem] text-[color:var(--text-muted)] transition-all hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="border-t border-[color:var(--border)] pt-8 text-center text-[1.4rem] text-[color:var(--text-muted)]">
        Designed with{' '}
        <FaHeart className="inline animate-[heartbeat_1.2s_ease_infinite] text-[color:var(--accent)]" />{' '}
        by{' '}
        <a href="#home" className="font-semibold text-[color:var(--accent)]">
          Swaraj Thakre
        </a>
      </p>
    </footer>
  );
}
