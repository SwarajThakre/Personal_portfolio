import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
        Swaraj<span>Thakre</span>
      </a>

      <div className="header__actions">
        <ThemeToggle />
        <button
          type="button"
          className="menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <nav className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
        <ul>
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
