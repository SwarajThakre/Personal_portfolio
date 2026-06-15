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
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__box">
          <h3>Swaraj Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
            <br />
            <br />
            Keep Rising. Connect with me over live chat!
          </p>
        </div>

        <div className="footer__box">
          <h3>Quick Links</h3>
          {quickLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FaChevronRight /> {label}
            </a>
          ))}
        </div>

        <div className="footer__box">
          <h3>Contact Info</h3>
          <p>
            <FaPhone /> +91 XXX-XXX-XXXX
          </p>
          <p>
            <FaEnvelope /> swarajthakre.stud@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Mumbai, India - 401305
          </p>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/swaraj-thakre-7461681b6/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/SwarajThakre"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:swarajthakre.stud@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://x.com/thakre_swaraj"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://t.me/SwarajThakre1"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      <p className="footer__credit">
        Designed with <FaHeart className="pulse" /> by{' '}
        <a href="#home">Swaraj Thakre</a>
      </p>
    </footer>
  );
}
